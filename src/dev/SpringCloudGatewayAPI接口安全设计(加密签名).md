---
author: xlc520
title: SpringCloud Gateway API接口安全设计（加密 、签名）
description: 
date: 2022-07-13
category: Java
tag: Java
article: true
timeline: true
icon: java
---



# SpringCloud Gateway API接口安全设计（加密 、签名）

## 1 防止数据抓包窃取

### 1.1 风险简述

简述：当用户登录时，恶意攻击者可以用抓包工具可以拿到用户提交的表单信息，可以获取用户的账号密码，进而可以恶意访问网站。
![图片](https://static.xlc520.ml/blogImage/1a25b48aa07f4da7adeed28003850f74.png)

### 1.2 RSA 非对称加密

#### 1.2.1 RSA简介4

RSA加密算法是一种非对称加密算法。在公开密钥加密和电子商业中RSA被广泛使用。RSA是1977年由罗纳德·李维斯特（Ron Rivest）、阿迪·萨莫尔（Adi Shamir）和伦纳德·阿德曼（Leonard Adleman）一起提出的。当时他们三人都在麻省理工学院工作。RSA就是他们三人姓氏开头字母拼在一起组成的。

1973年，在英国政府通讯总部工作的数学家克利福德·柯克斯（Clifford Cocks）在一个内部文件中提出了一个相同的算法，但他的发现被列入机密，一直到1997年才被发表。对极大整数做因数分解的难度决定了RSA算法的可靠性。换言之，对一极大整数做因数分解愈困难，RSA算法愈可靠。假如有人找到一种快速因数分解的算法的话，那么用RSA加密的信息的可靠性就肯定会极度下降。但找到这样的算法的可能性是非常小的。今天只有短的RSA钥匙才可能被强力方式解破。到目前为止，世界上还没有任何可靠的攻击RSA算法的方式。只要其钥匙的长度足够长，用RSA加密的信息实际上是不能被解破的。

1983年麻省理工学院在美国为RSA算法申请了专利。这个专利2000年9月21日失效。由于该算法在申请专利前就已经被发表了，在世界上大多数其它地区这个专利权不被承认。

#### 1.2.2 RSA应用过程4

非对称算法的在应用的过程如下:
(1) 接收方生成公钥和私钥，公钥公开，私钥保留；
(2) 发送方将要发送的消息采用公钥加密，得到密文，然后将密文发送给接收方；
(3) 接收方收到密文后，用自己的私钥进行解密，获得明文。

#### 1.2.3 RSA工具类4

```java
package com.demo.utils;

import com.demo.excepiton.RsaException;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.codec.binary.Base64;

import javax.crypto.Cipher;
import java.nio.charset.StandardCharsets;
import java.security.KeyFactory;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.SecureRandom;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.HashMap;
import java.util.Map;

@Slf4j
public class RSAUtils {

    public static final String PUBLIC_KEY = "public_key";

    public static final String PRIVATE_KEY = "private_key";


    public static Map<String, String> generateRasKey() {
        Map<String, String> rs = new HashMap<>();
        try {
            // KeyPairGenerator类用于生成公钥和私钥对，基于RSA算法生成对象
            KeyPairGenerator keyPairGen = null;
            keyPairGen = KeyPairGenerator.getInstance("RSA");
            keyPairGen.initialize(1024, new SecureRandom());
            // 生成一个密钥对，保存在keyPair中
            KeyPair keyPair = keyPairGen.generateKeyPair();
            // 得到私钥 公钥
            RSAPrivateKey privateKey = (RSAPrivateKey) keyPair.getPrivate();
            RSAPublicKey publicKey = (RSAPublicKey) keyPair.getPublic();
            String publicKeyString = new String(Base64.encodeBase64(publicKey.getEncoded()));
            // 得到私钥字符串
            String privateKeyString = new String(Base64.encodeBase64((privateKey.getEncoded())));
            // 将公钥和私钥保存到Map
            rs.put(PUBLIC_KEY, publicKeyString);
            rs.put(PRIVATE_KEY, privateKeyString);
        } catch (Exception e) {
            log.error("RsaUtils invoke genKeyPair failed.", e);
            throw new RsaException("RsaUtils invoke genKeyPair failed.");
        }
        return rs;
    }


    public static String encrypt(String str, String publicKey) {
        try {
            //base64编码的公钥
            byte[] decoded = Base64.decodeBase64(publicKey);
            RSAPublicKey pubKey = (RSAPublicKey) KeyFactory.getInstance("RSA").generatePublic(new X509EncodedKeySpec(decoded));
            //RSA加密
            Cipher cipher = Cipher.getInstance("RSA");
            cipher.init(Cipher.ENCRYPT_MODE, pubKey);
            return Base64.encodeBase64String(cipher.doFinal(str.getBytes(StandardCharsets.UTF_8)));
        } catch (Exception e) {
            log.error("RsaUtils invoke encrypt failed.", e);
            throw new RsaException("RsaUtils invoke encrypt failed.");
        }
    }


    public static String decrypt(String str, String privateKey) {

        try {
            //64位解码加密后的字符串
            byte[] inputByte = Base64.decodeBase64(str.getBytes(StandardCharsets.UTF_8));
            //base64编码的私钥
            byte[] decoded = Base64.decodeBase64(privateKey);
            RSAPrivateKey priKey = (RSAPrivateKey) KeyFactory.getInstance("RSA").generatePrivate(new PKCS8EncodedKeySpec(decoded));
            //RSA解密
            Cipher cipher = Cipher.getInstance("RSA");
            cipher.init(Cipher.DECRYPT_MODE, priKey);
            return new String(cipher.doFinal(inputByte));
        } catch (Exception e) {
            log.error("RsaUtils invoke decrypt failed.", e);
            throw new RsaException("RsaUtils invoke decrypt failed.");
        }

    }

}


```

**RsaException:** 是自定义异常

```java
@Getter
public class RsaException extends RuntimeException {

    private final String message;

    public RsaException(String message) {
        this.message = message;
    }

}

```

#### 1.2.4 UT

```java
package com.rosh;


import com.alibaba.fastjson.JSONObject;
import com.demo.utils.RSAUtils;
import org.junit.Test;

import java.util.Map;


/**
 * @Description:
 * @Author: rosh
 * @Date: 2021/10/25 22:30
 */
public class RsaTest {

    /**
     *  用测试生成的公钥，私钥赋值
     */
    private static final String PUBLIC_KEY = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCFtTlL61IqIGd+fRLUhJ0MjsqFXFJswCohJ45m51WvbxDPRP3gllW0WChk74D5JEOpMDSWo4C7RfoGlBRNW7kQ6qYGukYZ5jgYpzoT0+gp3on96fQXEyQJysv9xiTPIdmSXXVVj1HAOJw29RbzxIVKUSzzPXvEtXRTtCC1+wkAJQIDAQAB";

    private static final String PRIVATE_KEY = "MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAIW1OUvrUiogZ359EtSEnQyOyoVcUmzAKiEnjmbnVa9vEM9E/eCWVbRYKGTvgPkkQ6kwNJajgLtF+gaUFE1buRDqpga6RhnmOBinOhPT6Cneif3p9BcTJAnKy/3GJM8h2ZJddVWPUcA4nDb1FvPEhUpRLPM9e8S1dFO0ILX7CQAlAgMBAAECgYBC4amtbiKFa/wY61tV7pfYRjzLhKi+OUlZmD3E/4Z+4KGZ7DrJ8qkgMtDR3HO5LAikQrare1HTW2d7juqw32ascu+uDObf4yrYNKin+ZDLUYvIDfLhThPxnZJwQ/trdtfxO3VM//XbwZacmwYbAsYW/3QPUXwwOPAgbC2oth8kqQJBANKLyXcdjZx4cwJVl7xNeC847su8y6bPpcBASsaQloCIPiNBIg1h76dpfEGIQBYWJWbBsxtHe/MhOmz7fNFDS2sCQQCiktYZR0dZNH4eNX329LoRuBiltpr9tf36rVOlKr1GSHkLYEHF2qtyXV2mdrY8ZWpvuo3qm1oSLaqmop2rN9avAkBHk85B+IIUF77BpGeZVJzvMOO9z8lMRHuNCE5jgvQnbinxwkrZUdovh+T+QlvHJnBApslFFOBGn51FP5oHamFRAkEAmwZmPsinkrrpoKjlqz6GyCrC5hKRDWoj/IyXfKKaxpCJTH3HeoIghvfdO8Vr1X/n1Q8SESt+4mLFngznSMQAZQJBAJx07bCFYbA2IocfFV5LTEYTIiUeKdue2NP2yWqZ/+tB5H7jNwQTJmX1mn0W/sZm4+nJM7SjfETpNZhH49+rV6U=";


    /**
     *  生成公钥私钥
     */
    @Test
    public void generateRsaKey() {
        Map<String, String> map = RSAUtils.generateRasKey();
        System.out.println("随机生成的公钥为:" + map.get(RSAUtils.PUBLIC_KEY));
        System.out.println("随机生成的私钥为:" + map.get(RSAUtils.PRIVATE_KEY));

    }

    /**
     * 加密: Yeidauky/iN1/whevov2+ntzXJKAp2AHfESu5ixnDqH5iB7ww+TcfqJpDfkPHfb12Y0sVXw0gBHNJ4inkh7l2/SJBze3pKQU/mg3oyDokTia3JZIs+e80/iJcSfN+yA1JaqY+eJPYiBiOGAF2S6x0ynvJg/Wj0fwp2Tq3PDzRMo=
     */
    @Test
    public void testEncrypt() {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("username", "rosh");
        jsonObject.put("password", "123456");
        String str = jsonObject.toJSONString();
        String encrypt = RSAUtils.encrypt(str, PUBLIC_KEY);
        System.out.println(encrypt);
    }

    @Test
    public void testDecrypt() {

        String decrypt = RSAUtils.decrypt("Yeidauky/iN1/whevov2+ntzXJKAp2AHfESu5ixnDqH5iB7ww+TcfqJpDfkPHfb12Y0sVXw0gBHNJ4inkh7l2/SJBze3pKQU/mg3oyDokTia3JZIs+e80/iJcSfN+yA1JaqY+eJPYiBiOGAF2S6x0ynvJg/Wj0fwp2Tq3PDzRMo=",
                PRIVATE_KEY);

        System.out.println(decrypt);
    }


}


```

![图片](https://static.xlc520.ml/blogImage/d7432b5d395347cc8f3b204a099006d0.png)

### 1.3 案例

SpringCloud Gateway + SpringBoot + Nacos+redis
![图片](https://static.xlc520.ml/blogImage/954f481924b640e885c315ac9f33b60e.png)
![图片](https://static.xlc520.ml/blogImage/1f7df432d04e4ecebf95161316c4eb8c.png)

#### 1.3.1 前端登录代码

**后端把公钥跟前端约定好：**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录页面</title>

</head>
<body>

<h1>登录</h1>


<from id="from">
    账号：<input id="username" type="text"/>
    <br/>
    密码：<input id="password" type="password"/>
    <br/>
    <input id="btn_login" type="button" value="登录"/>
</from>



<script src="js/jquery.min.js"></script>
<script src="js/jsencrypt.js"></script>


<script type="text/javascript">
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCFtTlL61IqIGd+fRLUhJ0MjsqFXFJswCohJ45m51WvbxDPRP3gllW0WChk74D5JEOpMDSWo4C7RfoGlBRNW7kQ6qYGukYZ5jgYpzoT0+gp3on96fQXEyQJysv9xiTPIdmSXXVVj1HAOJw29RbzxIVKUSzzPXvEtXRTtCC1+wkAJQIDAQAB");
    $("#btn_login").click(function () {
        const username = $("#username").val();
        const password = $("#password").val();
        const form = {};
        form.username = username;
        form.password = password;
        $.ajax({
            url: "http://localhost:9000/api/user/login",
            data: encrypt.encrypt(JSON.stringify(form)),
            type: "POST",
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            success: function (data) {
                console.log(data);
            }
        });
    })
</script>


</body>
</html>

```

#### 1.3.2 前端查询代码

**设定公钥、token，token是登录成功后返回的值**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>查询测试</title>
</head>
<body>


id：<input id="id_txt" type="text"/>
<input id="btn_search" type="button" value="查询"/>


<script src="js/jquery.min.js"></script>
<script src="js/jsencrypt.js"></script>
<script type="text/javascript">
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCFtTlL61IqIGd+fRLUhJ0MjsqFXFJswCohJ45m51WvbxDPRP3gllW0WChk74D5JEOpMDSWo4C7RfoGlBRNW7kQ6qYGukYZ5jgYpzoT0+gp3on96fQXEyQJysv9xiTPIdmSXXVVj1HAOJw29RbzxIVKUSzzPXvEtXRTtCC1+wkAJQIDAQAB");

    $("#btn_search").click(function () {
        const id = $("#id_txt").val();
        const param = "id=" + id + "&requestId=" + getUuid();
        encrypt.encrypt(param);
        const url = "http://localhost:9000/api/user/detail?param=" + encrypt.encrypt(param);
        $.ajax({
            url: url,
            beforeSend: function (XMLHttpRequest) {
                XMLHttpRequest.setRequestHeader("token", "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIzYzE1ODczYS1iMGUxLTQyNzctYTRjOS1kYTMwNjdiYmE0NWIiLCJpYXQiOjE2MzUzMDYwMDAsInN1YiI6IntcInBhc3N3b3JkXCI6XCIxMjM0NTZcIixcInVzZXJJZFwiOjEsXCJ1c2VybmFtZVwiOlwiYWRtaW5cIn0iLCJleHAiOjE2MzU1NjUyMDB9.fIQi_cV2ZMszBVFV4GoIpGhCSENQKrDi8DsbArk7mGk");
            },
            type: "GET",
            success: function (data) {
                console.log(data);
            }
        });
    });


    function getUuid() {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 32; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23];
        var uuid = s.join("");
        return uuid;
    }

</script>


</body>
</html>

```

#### 1.3.3 GatewayFilterConfig

**解密前端传来的参数并修改传参**

```java
package com.demo.gateway.config;

import com.demo.constant.UserConstant;
import com.demo.excepiton.RSAException;
import com.demo.utils.RSAUtils;
import com.demo.utils.TokenUtils;
import io.jsonwebtoken.Claims;
import org.apache.commons.lang3.StringUtils;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.cloud.gateway.filter.factory.rewrite.CachedBodyOutputMessage;
import org.springframework.cloud.gateway.support.BodyInserterContext;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ReactiveHttpOutputMessage;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpRequestDecorator;
import org.springframework.stereotype.Component;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.reactive.function.BodyInserter;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.HandlerStrategies;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.lang.reflect.Field;
import java.net.URI;


/**
 * @Description:
 * @Author: rosh
 * @Date: 2021/10/26 22:24
 */
@Configuration
@Component
public class GatewayFilterConfig implements GlobalFilter, Ordered {


    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        //1 如果是登录不校验Token
        String requestUrl = exchange.getRequest().getPath().value();
        AntPathMatcher pathMatcher = new AntPathMatcher();
        if (!pathMatcher.match("/user/login", requestUrl)) {
            String token = exchange.getRequest().getHeaders().getFirst(UserConstant.TOKEN);
            Claims claim = TokenUtils.getClaim(token);
            if (StringUtils.isBlank(token) || claim == null) {
                return FilterUtils.invalidToken(exchange);
            }
        }
        //2 修改请求参数,并获取请求参数
        try {
            updateRequestParam(exchange);
        } catch (Exception e) {
            return FilterUtils.invalidUrl(exchange);
        }
        //3 获取请求体,修改请求体
        ServerRequest serverRequest = ServerRequest.create(exchange, HandlerStrategies.withDefaults().messageReaders());
        Mono<String> modifiedBody = serverRequest.bodyToMono(String.class).flatMap(body -> {
            String encrypt = RSAUtils.decrypt(body, RSAConstant.PRIVATE_KEY);
            return Mono.just(encrypt);
        });

        //创建BodyInserter修改请求体
        BodyInserter<Mono<String>, ReactiveHttpOutputMessage> bodyInserter = BodyInserters.fromPublisher(modifiedBody, String.class);
        HttpHeaders headers = new HttpHeaders();
        headers.putAll(exchange.getRequest().getHeaders());
        headers.remove(HttpHeaders.CONTENT_LENGTH);
        //创建CachedBodyOutputMessage并且把请求param加入
        CachedBodyOutputMessage outputMessage = new CachedBodyOutputMessage(exchange, headers);
        return bodyInserter.insert(outputMessage, new BodyInserterContext()).then(Mono.defer(() -> {
            ServerHttpRequestDecorator decorator = new ServerHttpRequestDecorator(exchange.getRequest()) {
                @Override
                public Flux<DataBuffer> getBody() {
                    return outputMessage.getBody();
                }
            };
            return chain.filter(exchange.mutate().request(decorator).build());
        }));

    }

    /**
     * 修改前端传的参数
     */
    private void updateRequestParam(ServerWebExchange exchange) throws NoSuchFieldException, IllegalAccessException {
        ServerHttpRequest request = exchange.getRequest();
        URI uri = request.getURI();
        String query = uri.getQuery();
        if (StringUtils.isNotBlank(query) && query.contains("param")) {
            String[] split = query.split("=");
            String param = RSAUtils.decrypt(split[1], RSAConstant.PRIVATE_KEY);
            Field targetQuery = uri.getClass().getDeclaredField("query");
            targetQuery.setAccessible(true);
            targetQuery.set(uri, param);
        }
    }


    @Override
    public int getOrder() {
        return 80;
    }
}



```

#### 1.3.4 GateWay 统一异常

```java
public abstract class AbstractExceptionHandler {
    protected JSONObject buildErrorMap(Throwable ex) {
        JSONObject json = new JSONObject();
        if (ex instanceof RSAException || ex instanceof IllegalArgumentException) {
            json.put("code", HttpStatus.BAD_REQUEST.value());
            if (StringUtils.isNotBlank(ex.getMessage())){
                json.put("msg", ex.getMessage());
            }else {
                json.put("msg", "无效的请求");
            }

        } else {
            json.put("code", HttpStatus.BAD_REQUEST.value());
            json.put("msg", "未知错误联系管理员");
        }
        return json;
    }

}

@Configuration
public class GatewayExceptionConfig {

    @Primary
    @Bean
    @Order(Ordered.HIGHEST_PRECEDENCE)
    public ErrorWebExceptionHandler errorWebExceptionHandler(ObjectProvider<List<ViewResolver>> viewResolversProvider,
                                                             ServerCodecConfigurer serverCodecConfigurer) {
        GatewayExceptionHandler gatewayExceptionHandler = new GatewayExceptionHandler();
        gatewayExceptionHandler.setViewResolvers(viewResolversProvider.getIfAvailable(Collections::emptyList));
        gatewayExceptionHandler.setMessageWriters(serverCodecConfigurer.getWriters());
        gatewayExceptionHandler.setMessageReaders(serverCodecConfigurer.getReaders());
        return gatewayExceptionHandler;
    }
}

package com.demo.gateway.exception;

import com.alibaba.fastjson.JSONObject;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.web.reactive.error.ErrorWebExceptionHandler;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.codec.HttpMessageReader;
import org.springframework.http.codec.HttpMessageWriter;
import org.springframework.util.Assert;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import org.springframework.web.reactive.result.view.ViewResolver;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.util.Collections;
import java.util.List;
import java.util.Map;


@Slf4j
public class GatewayExceptionHandler extends AbstractExceptionHandler implements ErrorWebExceptionHandler {


    private List<HttpMessageReader<?>> messageReaders = Collections.emptyList();


    private List<HttpMessageWriter<?>> messageWriters = Collections.emptyList();


    private List<ViewResolver> viewResolvers = Collections.emptyList();


    private ThreadLocal<JSONObject> exceptionHandlerResult = new ThreadLocal<>();


    public void setMessageReaders(List<HttpMessageReader<?>> messageReaders) {
        Assert.notNull(messageReaders, "'messageReaders' must not be null");
        this.messageReaders = messageReaders;
    }


    public void setViewResolvers(List<ViewResolver> viewResolvers) {
        this.viewResolvers = viewResolvers;
    }


    public void setMessageWriters(List<HttpMessageWriter<?>> messageWriters) {
        Assert.notNull(messageWriters, "'messageWriters' must not be null");
        this.messageWriters = messageWriters;
    }

    @Override
    public Mono<Void> handle(ServerWebExchange exchange, Throwable ex) {
        JSONObject errorInfo = super.buildErrorMap(ex);
        if (exchange.getResponse().isCommitted()) {
            return Mono.error(ex);
        }
        exceptionHandlerResult.set(errorInfo);
        ServerRequest newRequest = ServerRequest.create(exchange, this.messageReaders);
        return RouterFunctions.route(RequestPredicates.all(), this::renderErrorResponse).route(newRequest)
                .switchIfEmpty(Mono.error(ex))
                .flatMap(handler -> handler.handle(newRequest))
                .flatMap(response -> write(exchange, response));

    }


    protected Mono<ServerResponse> renderErrorResponse(ServerRequest request) {
        Map<String, Object> result = exceptionHandlerResult.get();
        return ServerResponse.status(HttpStatus.OK)
                .contentType(MediaType.APPLICATION_JSON)
                .body(BodyInserters.fromValue(result));
    }


    private Mono<? extends Void> write(ServerWebExchange exchange,
                                       ServerResponse response) {
        exchange.getResponse().getHeaders().setContentType(response.headers().getContentType());
        return response.writeTo(exchange, new ResponseContext());
    }

    private class ResponseContext implements ServerResponse.Context {

        @Override
        public List<HttpMessageWriter<?>> messageWriters() {
            return GatewayExceptionHandler.this.messageWriters;
        }

        @Override
        public List<ViewResolver> viewResolvers() {
            return GatewayExceptionHandler.this.viewResolvers;
        }
    }
}

```

#### 1.3.5 JAVA业务代码

```java
@RestController
@RequestMapping("/user")
public class UserController {


    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public String login(@RequestBody UserForm userForm) {

        return userService.login(userForm);
    }

    @GetMapping("/detail")
    public JSONObject detail(@RequestParam("id") Long id) {

        return userService.detail(id);
    }
}

@Service
public class UserService {


    private static final String USERNAME = "admin";

    private static final String PASSWORD = "123456";

    private static final Long USER_ID = 1L;


    /**
     * 模拟 登录 username = admin, password =123456,user_id 1L 登录成功 返回token
     */
    public String login(UserForm userForm) {

        String username = userForm.getUsername();
        String password = userForm.getPassword();

        if (USERNAME.equals(username) && PASSWORD.equals(password)) {
            JSONObject userInfo = new JSONObject();
            userInfo.put("username", USERNAME);
            userInfo.put("password", PASSWORD);
            userInfo.put("userId", USER_ID);
            return TokenUtils.createToken(userInfo.toJSONString());
        }

        return "账号密码不正确";
    }


    public JSONObject detail(Long id) {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("id", id);
        jsonObject.put("name", "admin");
        return jsonObject;
    }
}


```

#### 1.3.6 测试

**登录：返回token**

![图片](https://static.xlc520.ml/blogImage/4b616048f06847b281fa138fee22fce2.png)
![图片](https://static.xlc520.ml/blogImage/9f37befbcec5431f936c0f95a0435e35.png)
**查询：**

![图片](https://static.xlc520.ml/blogImage/cacc9233186d40829f143319b6638f0c.png)

## 2 设置URL有效时长

**为了增强URL安全性，前端在header中添加时间戳。**

### 2.1 前端代码

**在header中添加时间戳**
![图片](https://static.xlc520.ml/blogImage/c608c6d808fa4d30a5318638e56eb520.png)

### 2.2 后端验证时间戳

![图片](https://static.xlc520.ml/blogImage/0cd2632ba1ba4effa0158648c07ce14d.png)

```java
 private Long getDateTimestamp(HttpHeaders httpHeaders) {
        List<String> list = httpHeaders.get("timestamp");
        if (CollectionUtils.isEmpty(list)) {
            throw new IllegalArgumentException("拒绝服务");
        }
        long timestamp = Long.parseLong(list.get(0));
        long currentTimeMillis = System.currentTimeMillis();
        //有效时长为5分钟
        if (currentTimeMillis - timestamp > 1000 * 60 * 5) {
            throw new IllegalArgumentException("拒绝服务");
        }
        return timestamp;
    }

```

### 2.3 测试不传时间戳

![图片](https://static.xlc520.ml/blogImage/34c5e25305384149b8cb25236dcdfe9a.png)

## 3 确保URL唯一性

**确保URL唯一性，前端请求中增加UUID，后端存入redis，有效时长为5分钟，5分钟重复提交拒绝服务**

### 3.1 修改前端请求参数

![图片](https://static.xlc520.ml/blogImage/a7a2c3ad23d74f6a93a98738776f1568.png)

### 3.2 后端增加验证RequestId

![图片](https://static.xlc520.ml/blogImage/14ff62fc309947d19b859c4311502c0a.png)

```java
private String getRequestId(HttpHeaders headers) {
        List<String> list = headers.get("requestId");
        if (CollectionUtils.isEmpty(list)) {
            throw new IllegalArgumentException(ERROR_MESSAGE);
        }
        String requestId = list.get(0);
        //如果requestId存在redis中直接返回
        String temp = redisTemplate.opsForValue().get(requestId);
        if (StringUtils.isNotBlank(temp)) {
            throw new IllegalArgumentException(ERROR_MESSAGE);
        }
        redisTemplate.opsForValue().set(requestId, requestId, 5, TimeUnit.MINUTES);
        return requestId;
    }

```

## 4 增加签名

**最后一步，添加签名**

### 4.1 前端增加签名

跟前端约定好，json数据按照ASCII升序排序。

登录页面：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>登录页面</title>

</head>
<body>

<h1>登录</h1>


<from id="from">
    账号：<input id="username" type="text"/>
    <br/>
    密码：<input id="password" type="password"/>
    <br/>
    <input id="btn_login" type="button" value="登录"/>
</from>




<script src="js/jquery.min.js"></script>
<script src="js/jsencrypt.js"></script>
<script src="js/md5.min.js"></script>

<script type="text/javascript">
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCFtTlL61IqIGd+fRLUhJ0MjsqFXFJswCohJ45m51WvbxDPRP3gllW0WChk74D5JEOpMDSWo4C7RfoGlBRNW7kQ6qYGukYZ5jgYpzoT0+gp3on96fQXEyQJysv9xiTPIdmSXXVVj1HAOJw29RbzxIVKUSzzPXvEtXRTtCC1+wkAJQIDAQAB");
    $("#btn_login").click(function () {
        //表单
        const username = $("#username").val();
        const password = $("#password").val();
        const form = {};
        form.username = username;
        form.password = password;
        //生成签名，也可以加盐
        const timestamp = Date.parse(new Date());
        const data = JSON.stringify(sort_ASCII(form));
        const requestId = getUuid();
        const sign = MD5(data + requestId + timestamp);


        $.ajax({
            url: "http://localhost:9000/api/user/login",
            beforeSend: function (XMLHttpRequest) {
                XMLHttpRequest.setRequestHeader("timestamp", timestamp);
                XMLHttpRequest.setRequestHeader("requestId", requestId);
                XMLHttpRequest.setRequestHeader("sign", sign);
            },
            data: encrypt.encrypt(data),
            type: "POST",
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            success: function (data) {
                console.log(data);
            }
        });
    });


    function getUuid() {
        var s = [];
        var hexDigits = "0123456789abcdef";
        for (var i = 0; i < 32; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23];
        var uuid = s.join("");
        return uuid;
    }

    function sort_ASCII(obj) {
        var arr = new Array();
        var num = 0;
        for (var i in obj) {
            arr[num] = i;
            num++;
        }
        var sortArr = arr.sort();
        var sortObj = {};
        for (var i in sortArr) {
            sortObj[sortArr[i]] = obj[sortArr[i]];
        }
        return sortObj;
    }

</script>


</body>
</html>

```

### 4.2 增强读取Body类

```java
/**
 * @Description:
 * @Author: Rosh
 * @Date: 2021/10/27 11:03
 */
public class MyCachedBodyOutputMessage extends CachedBodyOutputMessage {

    private Map<String, Object> paramMap;

    private Long dateTimestamp;

    private String requestId;

    private String sign;

    public MyCachedBodyOutputMessage(ServerWebExchange exchange, HttpHeaders httpHeaders) {
        super(exchange, httpHeaders);
    }

    public void initial(Map<String, Object> paramMap, String requestId, String sign, Long dateTimestamp) {
        this.paramMap = paramMap;
        this.requestId = requestId;
        this.sign = sign;
        this.dateTimestamp = dateTimestamp;
    }


    public Map<String, Object> getParamMap() {
        return paramMap;
    }

    public Long getDateTimestamp() {
        return dateTimestamp;
    }

    public String getRequestId() {
        return requestId;
    }

    public String getSign() {
        return sign;
    }
}


```

### 4.3 修改GatewayFilterConfig

```java
package com.demo.gateway.config;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.nacos.common.utils.Md5Utils;
import com.demo.constant.UserConstant;
import com.demo.gateway.pojo.MyCachedBodyOutputMessage;
import com.demo.utils.RSAUtils;
import com.demo.utils.TokenUtils;
import io.jsonwebtoken.Claims;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.cloud.gateway.support.BodyInserterContext;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ReactiveHttpOutputMessage;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpRequestDecorator;
import org.springframework.stereotype.Component;
import org.springframework.util.AntPathMatcher;
import org.springframework.util.CollectionUtils;
import org.springframework.web.reactive.function.BodyInserter;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.server.HandlerStrategies;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

import java.lang.reflect.Field;
import java.net.URI;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.concurrent.TimeUnit;


/**
 * @Description:
 * @Author: rosh
 * @Date: 2021/10/26 22:24
 */
@Configuration
@Component
public class GatewayFilterConfig implements GlobalFilter, Ordered {


    @Autowired
    private RedisTemplate<String, String> redisTemplate;


    private static final String ERROR_MESSAGE = "拒绝服务";


    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        //1 获取时间戳
        Long dateTimestamp = getDateTimestamp(exchange.getRequest().getHeaders());
        //2 获取RequestId
        String requestId = getRequestId(exchange.getRequest().getHeaders());
        //3 获取签名
        String sign = getSign(exchange.getRequest().getHeaders());
        //4 如果是登录不校验Token
        String requestUrl = exchange.getRequest().getPath().value();
        AntPathMatcher pathMatcher = new AntPathMatcher();
        if (!pathMatcher.match("/user/login", requestUrl)) {
            String token = exchange.getRequest().getHeaders().getFirst(UserConstant.TOKEN);
            Claims claim = TokenUtils.getClaim(token);
            if (StringUtils.isBlank(token) || claim == null) {
                return FilterUtils.invalidToken(exchange);
            }
        }
        //5 修改请求参数,并获取请求参数
        Map<String, Object> paramMap;
        try {
            paramMap = updateRequestParam(exchange);
        } catch (Exception e) {
            return FilterUtils.invalidUrl(exchange);
        }
        //6 获取请求体,修改请求体
        ServerRequest serverRequest = ServerRequest.create(exchange, HandlerStrategies.withDefaults().messageReaders());
        Mono<String> modifiedBody = serverRequest.bodyToMono(String.class).flatMap(body -> {
            String encrypt = RSAUtils.decrypt(body, RSAConstant.PRIVATE_KEY);
            JSONObject jsonObject = JSON.parseObject(encrypt);
            for (Map.Entry<String, Object> entry : jsonObject.entrySet()) {
                paramMap.put(entry.getKey(), entry.getValue());
            }
            checkSign(sign, dateTimestamp, requestId, paramMap);
            return Mono.just(encrypt);
        });

        //创建BodyInserter修改请求体

        BodyInserter<Mono<String>, ReactiveHttpOutputMessage> bodyInserter = BodyInserters.fromPublisher(modifiedBody, String.class);
        HttpHeaders headers = new HttpHeaders();
        headers.putAll(exchange.getRequest().getHeaders());
        headers.remove(HttpHeaders.CONTENT_LENGTH);
        //创建CachedBodyOutputMessage并且把请求param加入,初始化校验信息
        MyCachedBodyOutputMessage outputMessage = new MyCachedBodyOutputMessage(exchange, headers);
        outputMessage.initial(paramMap, requestId, sign, dateTimestamp);
        return bodyInserter.insert(outputMessage, new BodyInserterContext()).then(Mono.defer(() -> {
            ServerHttpRequestDecorator decorator = new ServerHttpRequestDecorator(exchange.getRequest()) {
                @Override
                public Flux<DataBuffer> getBody() {
                    Flux<DataBuffer> body = outputMessage.getBody();
                    if (body.equals(Flux.empty())) {
                        //验证签名
                        checkSign(outputMessage.getSign(), outputMessage.getDateTimestamp(), outputMessage.getRequestId(), outputMessage.getParamMap());
                    }
                    return outputMessage.getBody();
                }
            };
            return chain.filter(exchange.mutate().request(decorator).build());
        }));

    }

    public void checkSign(String sign, Long dateTimestamp, String requestId, Map<String, Object> paramMap) {
        String str = JSON.toJSONString(paramMap) + requestId + dateTimestamp;
        String tempSign = Md5Utils.getMD5(str.getBytes());
        if (!tempSign.equals(sign)) {
            throw new IllegalArgumentException(ERROR_MESSAGE);
        }
    }

    /**
     * 修改前端传的参数
     */
    private Map<String, Object> updateRequestParam(ServerWebExchange exchange) throws NoSuchFieldException, IllegalAccessException {
        ServerHttpRequest request = exchange.getRequest();
        URI uri = request.getURI();
        String query = uri.getQuery();
        if (StringUtils.isNotBlank(query) && query.contains("param")) {
            String[] split = query.split("=");
            String param = RSAUtils.decrypt(split[1], RSAConstant.PRIVATE_KEY);
            Field targetQuery = uri.getClass().getDeclaredField("query");
            targetQuery.setAccessible(true);
            targetQuery.set(uri, param);
            return getParamMap(param);
        }
        return new TreeMap<>();
    }


    private Map<String, Object> getParamMap(String param) {
        Map<String, Object> map = new TreeMap<>();
        String[] split = param.split("&");
        for (String str : split) {
            String[] params = str.split("=");
            map.put(params[0], params[1]);
        }
        return map;
    }


    private String getSign(HttpHeaders headers) {
        List<String> list = headers.get("sign");
        if (CollectionUtils.isEmpty(list)) {
            throw new IllegalArgumentException(ERROR_MESSAGE);
        }
        return list.get(0);
    }

    private Long getDateTimestamp(HttpHeaders httpHeaders) {
        List<String> list = httpHeaders.get("timestamp");
        if (CollectionUtils.isEmpty(list)) {
            throw new IllegalArgumentException(ERROR_MESSAGE);
        }
        long timestamp = Long.parseLong(list.get(0));
        long currentTimeMillis = System.currentTimeMillis();
        //有效时长为5分钟
        if (currentTimeMillis - timestamp > 1000 * 60 * 5) {
            throw new IllegalArgumentException(ERROR_MESSAGE);
        }
        return timestamp;
    }

    private String getRequestId(HttpHeaders headers) {
        List<String> list = headers.get("requestId");
        if (CollectionUtils.isEmpty(list)) {
            throw new IllegalArgumentException(ERROR_MESSAGE);
        }
        String requestId = list.get(0);
        //如果requestId存在redis中直接返回
        String temp = redisTemplate.opsForValue().get(requestId);
        if (StringUtils.isNotBlank(temp)) {
            throw new IllegalArgumentException(ERROR_MESSAGE);
        }
        redisTemplate.opsForValue().set(requestId, requestId, 5, TimeUnit.MINUTES);
        return requestId;
    }


    @Override
    public int getOrder() {
        return 80;
    }
}


```

### 4.4 测试登录

**发现验签成功**
![图片](https://static.xlc520.ml/blogImage/8e17d38de0eb4144980a740cd16b1d99-16540481454245.png)

### 4.5 测试查询

验签成功

![图片](https://static.xlc520.ml/blogImage/4080582e2887418c8cf53cf3e40ce517.png)

## 5 码云地址

https://gitee.com/zhurongsheng/springcloud-gateway-rsa