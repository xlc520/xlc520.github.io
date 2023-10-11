---
author: xlc520
title: SpringBoot 接口数据加解密技巧
description: 
date: 2023-08-30
category: Java
tag: Java
article: true
timeline: true
icon: java
---



# SpringBoot 接口数据加解密技巧

主要的需求点如下：

1. 尽量少改动，不影响之前的业务逻辑；
2. 考虑到时间紧迫性，可采用对称性加密方式，服务需要对接安卓、IOS、H5三端，另外考虑到H5端存储密钥安全性相对来说会低一些，故分针对H5和安卓、IOS分配两套密钥；
3. 要兼容低版本的接口，后面新开发的接口可不用兼容；
4. 接口有GET和POST两种接口，需要都要进行加解密；

需求解析：

1. 服务端、客户端和H5统一拦截加解密，网上有成熟方案，也可以按其他服务中实现的加解密流程来搞；
2. 使用AES放松加密，考虑到H5端存储密钥安全性相对来说会低一些，故分针对H5和安卓、IOS分配两套密钥；
3. 本次涉及客户端和服务端的整体改造，经讨论，新接口统一加 /secret/ 前缀来区分

按本次需求来简单还原问题，定义两个对象，后面用得着，

用户类：

```java
@Data
public class User {
    private Integer id;
    private String name;
    private UserType userType = UserType.COMMON;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime registerTime;
}
```

用户类型枚举类：

```java
@Getter
@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum UserType {
    VIP("VIP用户"),
    COMMON("普通用户");
    private String code;
    private String type;

    UserType(String type) {
        this.code = name();
        this.type = type;
    }
}
```

构造一个简单的用户列表查询示例：

```java
@RestController
@RequestMapping(value = {"/user", "/secret/user"})
public class UserController {
    @RequestMapping("/list")
    ResponseEntity<List<User>> listUser() {
        List<User> users = new ArrayList<>();
        User u = new User();
        u.setId(1);
        u.setName("boyka");
        u.setRegisterTime(LocalDateTime.now());
        u.setUserType(UserType.COMMON);
        users.add(u);
        ResponseEntity<List<User>> response = new ResponseEntity<>();
        response.setCode(200);
        response.setData(users);
        response.setMsg("用户列表查询成功");
        return response;
    }
}
```

调用：localhost:8080/user/list

查询结果如下，没毛病：

```java
{
	"code": 200,
	"data": [{
		"id": 1,
		"name": "boyka",
		"userType": {
			"code": "COMMON",
			"type": "普通用户"
		},
		"registerTime": "2022-03-24 23:58:39"
	}],
	"msg": "用户列表查询成功"
}
```

目前主要是利用ControllerAdvice来对请求和响应体进行拦截，主要定义SecretRequestAdvice对请求进行加密和SecretResponseAdvice对响应进行加密(实际情况会稍微复杂一点，项目中又GET类型请求，自定义了一个Filter进行不同的请求解密处理)。

好了，网上的ControllerAdvice使用示例非常多，我这把两个核心方法给大家展示看看，相信大佬们一看就晓得了，不需多言。上代码：

SecretRequestAdvice请求解密：

```java
@ControllerAdvice
@Order(Ordered.HIGHEST_PRECEDENCE)
@Slf4j
public class SecretRequestAdvice extends RequestBodyAdviceAdapter {
    @Override
    public boolean supports(MethodParameter methodParameter, Type type, Class<? extends HttpMessageConverter<?>> aClass) {
        return true;
    }

    @Override
    public HttpInputMessage beforeBodyRead(HttpInputMessage inputMessage, MethodParameter parameter, Type targetType, Class<? extends HttpMessageConverter<?>> converterType) throws IOException {
        //如果支持加密消息，进行消息解密。
        String httpBody;
        if (Boolean.TRUE.equals(SecretFilter.secretThreadLocal.get())) {
            httpBody = decryptBody(inputMessage);
        } else {
            httpBody = StreamUtils.copyToString(inputMessage.getBody(), Charset.defaultCharset());
        }
        //返回处理后的消息体给messageConvert
        return new SecretHttpMessage(new ByteArrayInputStream(httpBody.getBytes()), inputMessage.getHeaders());
    }

    /**
     * 解密消息体
     *
     * @param inputMessage 消息体
     * @return 明文
     */
    private String decryptBody(HttpInputMessage inputMessage) throws IOException {
        InputStream encryptStream = inputMessage.getBody();
        String requestBody = StreamUtils.copyToString(encryptStream, Charset.defaultCharset());
        // 验签过程
        HttpHeaders headers = inputMessage.getHeaders();
        if (CollectionUtils.isEmpty(headers.get("clientType"))
                || CollectionUtils.isEmpty(headers.get("timestamp"))
                || CollectionUtils.isEmpty(headers.get("salt"))
                || CollectionUtils.isEmpty(headers.get("signature"))) {
            throw new ResultException(SECRET_API_ERROR, "请求解密参数错误，clientType、timestamp、salt、signature等参数传递是否正确传递");
        }

        String timestamp = String.valueOf(Objects.requireNonNull(headers.get("timestamp")).get(0));
        String salt = String.valueOf(Objects.requireNonNull(headers.get("salt")).get(0));
        String signature = String.valueOf(Objects.requireNonNull(headers.get("signature")).get(0));
        String privateKey = SecretFilter.clientPrivateKeyThreadLocal.get();
        ReqSecret reqSecret = JSON.parseObject(requestBody, ReqSecret.class);
        String data = reqSecret.getData();
        String newSignature = "";
        if (!StringUtils.isEmpty(privateKey)) {
            newSignature = Md5Utils.genSignature(timestamp + salt + data + privateKey);
        }
        if (!newSignature.equals(signature)) {
            // 验签失败
            throw new ResultException(SECRET_API_ERROR, "验签失败，请确认加密方式是否正确");
        }

        try {
            String decrypt = EncryptUtils.aesDecrypt(data, privateKey);
            if (StringUtils.isEmpty(decrypt)) {
                decrypt = "{}";
            }
            return decrypt;
        } catch (Exception e) {
            log.error("error: ", e);
        }
        throw new ResultException(SECRET_API_ERROR, "解密失败");
    }
}
```

SecretResponseAdvice响应加密：

```java
@ControllerAdvice
public class SecretResponseAdvice implements ResponseBodyAdvice {
    private Logger logger = LoggerFactory.getLogger(SecretResponseAdvice.class);

    @Override
    public boolean supports(MethodParameter methodParameter, Class aClass) {
        return true;
    }

    @Override
    public Object beforeBodyWrite(Object o, MethodParameter methodParameter, MediaType mediaType, Class aClass, ServerHttpRequest serverHttpRequest, ServerHttpResponse serverHttpResponse) {
        // 判断是否需要加密
        Boolean respSecret = SecretFilter.secretThreadLocal.get();
        String secretKey = SecretFilter.clientPrivateKeyThreadLocal.get();
        // 清理本地缓存
        SecretFilter.secretThreadLocal.remove();
        SecretFilter.clientPrivateKeyThreadLocal.remove();
        if (null != respSecret && respSecret) {
            if (o instanceof ResponseBasic) {
                // 外层加密级异常
                if (SECRET_API_ERROR == ((ResponseBasic) o).getCode()) {
                    return SecretResponseBasic.fail(((ResponseBasic) o).getCode(), ((ResponseBasic) o).getData(), ((ResponseBasic) o).getMsg());
                }
                // 业务逻辑
                try {
                    String data = EncryptUtils.aesEncrypt(JSON.toJSONString(o), secretKey);
                    // 增加签名
                    long timestamp = System.currentTimeMillis() / 1000;
                    int salt = EncryptUtils.genSalt();
                    String dataNew = timestamp + "" + salt + "" + data + secretKey;
                    String newSignature = Md5Utils.genSignature(dataNew);
                    return SecretResponseBasic.success(data, timestamp, salt, newSignature);
                } catch (Exception e) {
                    logger.error("beforeBodyWrite error:", e);
                    return SecretResponseBasic.fail(SECRET_API_ERROR, "", "服务端处理结果数据异常");
                }
            }
        }
        return o;
    }
}
```

OK， 代码Demo撸好了，试运行一波：

```
请求方法：
localhost:8080/secret/user/list

header:
Content-Type:application/json
signature:55efb04a83ca083dd1e6003cde127c45
timestamp:1648308048
salt:123456
clientType:ANDORID

body体:
// 原始请求体
{
	"page": 1,
	"size": 10
}
// 加密后的请求体
{
	"data": "1ZBecdnDuMocxAiW9UtBrJzlvVbueP9K0MsIxQccmU3OPG92oRinVm0GxBwdlXXJ"
}

// 加密响应体：
{
    "data": "fxHYvnIE54eAXDbErdrDryEsIYNvsOOkyEKYB1iBcre/QU1wMowHE2BNX/je6OP3NlsCtAeDqcp7J1N332el8q2FokixLvdxAPyW5Un9JiT0LQ3MB8p+nN23pTSIvh9VS92lCA8KULWg2nViSFL5X1VwKrF0K/dcVVZnpw5h227UywP6ezSHjHdA+Q0eKZFGTEv3IzNXWqq/otx5fl1gKQ==",
    "code": 200,
    "signature": "aa61f19da0eb5d99f13c145a40a7746b",
    "msg": "",
    "timestamp": 1648480034,
    "salt": 632648
}

// 解密后的响应体：
{
	"code": 200,
	"data": [{
		"id": 1,
		"name": "boyka",
		"registerTime": "2022-03-27T00:19:43.699",
		"userType": "COMMON"
	}],
	"msg": "用户列表查询成功",
	"salt": 0
}
```

OK，客户端请求加密-》发起请求-》服务端解密-》业务处理-》服务端响应加密-》客户端解密展示，看起来没啥问题，实际是头天下午花了2小时碰需求，差不多花1小时写好demo测试，然后对所有接口统一进行了处理，整体一下午赶脚应该行了吧，告诉H5和安卓端同学明儿上午联调（不小的大家到这个时候发现猫腻没有，当时确实疏忽了，翻了大车......）

次日，安卓端反馈，你这个加解密有问题，解密后的数据格式和之前不一样，仔细一看，擦，这个userType和registerTime是不对劲，开始思考：这个能是哪儿的问题呢？1s之后，初步定位，应该是响应体的JSON.toJSONString的问题：

```java
String data = EncryptUtils.aesEncrypt(JSON.toJSONString(o)),
```

Debug断点调试，果然，是JSON.toJSONString(o)这一步骤转换出了问题，那JSON转换时是不是有高级属性可以配置生成想要的序列化格式呢？FastJson在序列化时提供重载方法，找到其中一个"SerializerFeature"参数可以琢磨一下，这个参数是可以对序列化进行配置的，它提供了很多配置类型，其中感觉这几个比较沾边：

```
WriteEnumUsingToString,
WriteEnumUsingName,
UseISO8601DateFormat
```

对枚举类型来说，默认是使用的WriteEnumUsingName(枚举的Name)， 另一种WriteEnumUsingToString是重新toString方法，理论上可以转换成想要的样子，即这个样子：

```java
@Getter
@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum UserType {
    VIP("VIP用户"),
    COMMON("普通用户");
    private String code;
    private String type;

    UserType(String type) {
        this.code = name();
        this.type = type;
    }

    @Override
    public String toString() {
        return "{" +
                "\"code\":\"" + name() + '\"' +
                ", \"type\":\"" + type + '\"' +
                '}';
    }
}
```

结果转换出来的数据是字符串类型"{"code":"COMMON", "type":"普通用户"}"，这个方法好像行不通，还有什么好办法呢？思前想后，看文章开始定义的User和UserType类，标记数据序列化格式@JsonFormat，再突然想起之前看到过的一些文章，SpringMVC底层默认是使用Jackson进行序列化的，那好了，就用Jacksong实施呗，将SecretResponseAdvice中的序列化方法替换一下：

```java
 String data = EncryptUtils.aesEncrypt(JSON.toJSONString(o), secretKey);
 换为：
 String data =EncryptUtils.aesEncrypt(new ObjectMapper().writeValueAsString(o), secretKey);
```

重新运行一波，走起：

```json
{
	"code": 200,
	"data": [{
		"id": 1,
		"name": "boyka",
		"userType": {
			"code": "COMMON",
			"type": "普通用户"
		},
		"registerTime": {
			"month": "MARCH",
			"year": 2022,
			"dayOfMonth": 29,
			"dayOfWeek": "TUESDAY",
			"dayOfYear": 88,
			"monthValue": 3,
			"hour": 22,
			"minute": 30,
			"nano": 453000000,
			"second": 36,
			"chronology": {
				"id": "ISO",
				"calendarType": "iso8601"
			}
		}
	}],
	"msg": "用户列表查询成功"
}
```

解密后的userType枚举类型和非加密版本一样了，舒服了，== 好像还不对，registerTime怎么变成这个样子了？原本是"2022-03-24 23:58:39"这种格式的，[Jackson之LocalDateTime转换，无需改实体类](https://link.juejin.cn/?target=https%3A%2F%2Fwww.cnblogs.com%2Fyzeng%2Fp%2F11522411.html)这篇文章讲到了这个问题，并提出了一种解决方案，不过用在我们目前这个需求里面，就是有损改装了啊，不太可取，遂去Jackson官网上查找一下相关文档，当然Jackson也提供了ObjectMapper的序列化配置，重新再初始化配置ObjectMpper对象：

```java
String DATE_TIME_FORMATTER = "yyyy-MM-dd HH:mm:ss";
ObjectMapper objectMapper = new Jackson2ObjectMapperBuilder()
                            .findModulesViaServiceLoader(true)
                            .serializerByType(LocalDateTime.class, new LocalDateTimeSerializer(
                                    DateTimeFormatter.ofPattern(DATE_TIME_FORMATTER)))
                            .deserializerByType(LocalDateTime.class, new LocalDateTimeDeserializer(
                                    DateTimeFormatter.ofPattern(DATE_TIME_FORMATTER)))
                            .build();
```

转换结果：

```json
{
	"code": 200,
	"data": [{
		"id": 1,
		"name": "boyka",
		"userType": {
			"code": "COMMON",
			"type": "普通用户"
		},
		"registerTime": "2022-03-29 22:57:33"
	}],
	"msg": "用户列表查询成功"
}
```

OK，和非加密版的终于一致了，完了吗？感觉还是可能存在些什么问题，首先业务代码的时间序列化需求不一样，有"yyyy-MM-dd hh:mm:ss"的，也有"yyyy-MM-dd"的，还可能其他配置思考不到位的，导致和之前非加密版返回数据不一致的问题，到时候联调测出来了也麻烦，有没有一劳永逸的办法呢？同事一句话点亮我，看一下spring框架自身是怎么序列化的，照着配置应该就行嘛，好像有点道理，不从0开始分析源码了

感觉写可以。

跟着执行链路，找到具体的响应序列化，重点就是RequestResponseBodyMethodProcessor，

```java
protected <T> void writeWithMessageConverters(@Nullable T value, MethodParameter returnType, ServletServerHttpRequest inputMessage, ServletServerHttpResponse outputMessage) throws IOException, HttpMediaTypeNotAcceptableException, HttpMessageNotWritableException {
        // 获取响应的拦截器链并执行beforeBodyWrite方法，也就是执行了我们自定义的SecretResponseAdvice中的beforeBodyWrite啦
		body = this.getAdvice().beforeBodyWrite(body, returnType, selectedMediaType, converter.getClass(), inputMessage, outputMessage);
		if (body != null) {
		    // 执行响应体序列化工作
			if (genericConverter != null) {
				genericConverter.write(body, (Type)targetType, selectedMediaType, outputMessage);
			} else {
				converter.write(body, selectedMediaType, outputMessage);
			}
    }
```

进而通过实例化的AbstractJackson2HttpMessageConverter对象找到执行序列化的核心方法

```java
-> AbstractGenericHttpMessageConverter:
	
	public final void write(T t, @Nullable Type type, @Nullable MediaType contentType, HttpOutputMessage outputMessage) throws IOException, HttpMessageNotWritableException {
        ...
		this.writeInternal(t, type, outputMessage);
		outputMessage.getBody().flush();
     
    }
	-> 找到Jackson序列化 AbstractJackson2HttpMessageConverter:
	// 从spring容器中获取并设置的ObjectMapper实例
	protected ObjectMapper objectMapper;
	
	protected void writeInternal(Object object, @Nullable Type type, HttpOutputMessage outputMessage) throws IOException, HttpMessageNotWritableException {
        MediaType contentType = outputMessage.getHeaders().getContentType();
        JsonEncoding encoding = this.getJsonEncoding(contentType);
        JsonGenerator generator = this.objectMapper.getFactory().createGenerator(outputMessage.getBody(), encoding);

		this.writePrefix(generator, object);
		Object value = object;
		Class<?> serializationView = null;
		FilterProvider filters = null;
		JavaType javaType = null;
		if (object instanceof MappingJacksonValue) {
			MappingJacksonValue container = (MappingJacksonValue)object;
			value = container.getValue();
			serializationView = container.getSerializationView();
			filters = container.getFilters();
		}

		if (type != null && TypeUtils.isAssignable(type, value.getClass())) {
			javaType = this.getJavaType(type, (Class)null);
		}

		ObjectWriter objectWriter = serializationView != null ? this.objectMapper.writerWithView(serializationView) : this.objectMapper.writer();
		if (filters != null) {
			objectWriter = objectWriter.with(filters);
		}

		if (javaType != null && javaType.isContainerType()) {
			objectWriter = objectWriter.forType(javaType);
		}

		SerializationConfig config = objectWriter.getConfig();
		if (contentType != null && contentType.isCompatibleWith(MediaType.TEXT_EVENT_STREAM) && config.isEnabled(SerializationFeature.INDENT_OUTPUT)) {
			objectWriter = objectWriter.with(this.ssePrettyPrinter);
		}
        // 重点进行序列化
		objectWriter.writeValue(generator, value);
		this.writeSuffix(generator, object);
		generator.flush();
    }
```

那么，可以看出SpringMVC在进行响应序列化的时候是从容器中获取的ObjectMapper实例对象，并会根据不同的默认配置条件进行序列化，那处理方法就简单了，我也可以从Spring容器拿数据进行序列化啊。SecretResponseAdvice进行如下进一步改造：

```java

@ControllerAdvice
public class SecretResponseAdvice implements ResponseBodyAdvice {

    @Autowired
    private ObjectMapper objectMapper;
     
      @Override
    public Object beforeBodyWrite(....) {
        .....
        String dataStr =objectMapper.writeValueAsString(o);
        String data = EncryptUtils.aesEncrypt(dataStr, secretKey);
        .....
    }
 }
```

经测试，响应数据和非加密版万全一致啦，还有GET部分的请求加密，以及后面加解密惨遭跨域问题，后面有空再和大家聊聊。

https://github.com/boykait/encrypt-demo