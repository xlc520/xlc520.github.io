---
author: xlc520
title: SpringBoot中Rest的使用和请求参数注解
description: 
date: 2022-07-02
category: Java
tag: Java
article: true
timeline: true
icon: java
password: 
---



# SpringBoot中Rest的使用和请求参数注解

## Rest的使用和原理

Rest风格支持（使用HTTP请求方式动词来表示对资源的操作）
• 以前：/getUser 获取用户 /deleteUser 删除用户 /editUser 修改用户 /saveUser 保存用户
• 现在： /user GET-获取用户 DELETE-删除用户 PUT-修改用户 POST-保存用户。
看下面的一个例子，这是一个表单：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>hah</title>
</head>
<body>
<form action="/user" method="get">
    <input value="get" type="submit">
</form>
<form action="/user" method="post">
    <input value="post" type="submit">
</form>
<form action="/user" method="post">
    <input value="put" type="submit">
</form>
<form action="/user" method="post">
    <input value="delete" type="submit">
</form>
</body>
</html>
```

处理上述表单提交的controller。但是我们以put方式和delete方式提交表单时，发现返回的都是GET-张三，不支持put和delete请求。

```java
@RestController
public class UserController {

    @RequestMapping(value = "/user",method = RequestMethod.GET)
    public String getUser(){
        return "GET-张三";
    }

    @RequestMapping(value = "/user",method = RequestMethod.POST)
    public String saveUser(){
        return "POST-张三";
    }


    @RequestMapping(value = "/user",method = RequestMethod.PUT)
    public String putUser(){
        return "PUT-张三";
    }

    @RequestMapping(value = "/user",method = RequestMethod.DELETE)
    public String deleteUser(){
        return "DELETE-张三";
    }
}
```

在**WebMvcAutoConfiguration**中**hiddenHttpMethodFilter**方法，返回一个**filter**->**OrderedHiddenHttpMethodFilter**。**OrderedHiddenHttpMethodFilter**继承自**HiddenHttpMethodFilter**。@ConditionalOnMissingBean({HiddenHttpMethodFilter.class})需要之前**HiddenHttpMethodFilter**没有被注入，并且 @ConditionalOnProperty(prefix = "spring.mvc.hiddenmethod.filter", name = {"enabled"})要求spring.mvc.hiddenmethod.filter.enabled=true.

```java
@Bean
    @ConditionalOnMissingBean({HiddenHttpMethodFilter.class})
    @ConditionalOnProperty(
        prefix = "spring.mvc.hiddenmethod.filter",
        name = {"enabled"}
    )
    public OrderedHiddenHttpMethodFilter hiddenHttpMethodFilter() {
        return new OrderedHiddenHttpMethodFilter();
    }
public class OrderedHiddenHttpMethodFilter extends HiddenHttpMethodFilter implements OrderedFilter {

   /**
    * The default order is high to ensure the filter is applied before Spring Security.
    */
   public static final int DEFAULT_ORDER = REQUEST_WRAPPER_FILTER_MAX_ORDER - 10000;

   private int order = DEFAULT_ORDER;

   @Override
   public int getOrder() {
      return this.order;
   }
   public void setOrder(int order) {
      this.order = order;
   }

}
```

**HiddenHttpMethodFilter**中有个**DEFAULT_METHOD_PARAM**字段"**_method**"。所以我们在提交表单时也要提交一个"**_method**"参数。并且spring.mvc.hiddenmethod.filter.enabled=true.

```java
public class HiddenHttpMethodFilter extends OncePerRequestFilter {

   private static final List<String> ALLOWED_METHODS =
         Collections.unmodifiableList(Arrays.asList(HttpMethod.PUT.name(),
               HttpMethod.DELETE.name(), HttpMethod.PATCH.name()));

   public static final String DEFAULT_METHOD_PARAM = "_method";

   private String methodParam = DEFAULT_METHOD_PARAM;
   public void setMethodParam(String methodParam) {
      Assert.hasText(methodParam, "'methodParam' must not be empty");
      this.methodParam = methodParam;
   }

   @Override
   protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
         throws ServletException, IOException {
      HttpServletRequest requestToUse = request;
      if ("POST".equals(request.getMethod()) && request.getAttribute(WebUtils.ERROR_EXCEPTION_ATTRIBUTE) == null) {
         String paramValue = request.getParameter(this.methodParam);
         if (StringUtils.hasLength(paramValue)) {
            String method = paramValue.toUpperCase(Locale.ENGLISH);
            if (ALLOWED_METHODS.contains(method)) {
               requestToUse = new HttpMethodRequestWrapper(request, method);
            }
         }
      }
      filterChain.doFilter(requestToUse, response);
   }

   private static class HttpMethodRequestWrapper extends HttpServletRequestWrapper {

      private final String method;

      public HttpMethodRequestWrapper(HttpServletRequest request, String method) {
         super(request);
         this.method = method;
      }

      @Override
      public String getMethod() {
         return this.method;
      }
   }
}
```

因此修改表单如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>hah</title>
</head>
<body>
<form action="/user" method="get">
    <input value="get" type="submit">
</form>
<form action="/user" method="post">
    <input value="post" type="submit">
</form>
<form action="/user" method="post">
    <input name="_method" type="hidden" value="put">
    <input value="put" type="submit">
</form>
<form action="/user" method="post">
    <input name="_method" type="hidden" value="delete">
    <input value="delete" type="submit">
</form>

</body>
</html>
```

配置yaml:

```yaml
spring:
  mvc:
    hiddenmethod:
      filter:
        enabled: true #开启页面表单的Rest功能
```

**修改表单，配置yaml之后，再点击delete 和put就可以发送delete 和put请求了。**

### Rest原理

表单提交要使用REST的时候：

- 表单提交会带上**_method=PUT**
- **请求过来被**HiddenHttpMethodFilter拦截
- 1.如果请求正常，并且是POST（if ("POST".equals(request.getMethod()) && request.getAttribute(WebUtils.ERROR_EXCEPTION_ATTRIBUTE) == null) ）则获取**_method**的值
- - 2.获取到**_method**的值，如果是**ALLOWED_METHODS**里的方法（**PUT**.**DELETE**.**PATCH**）则将方法传给包装模式类**requesWrapper**，requesWrapper只改变了请求方式。

**原生request（post），包装模式requesWrapper重写了getMethod方法，返回的是传入的值。**
**过滤器链放行的时候用wrapper。以后的方法调用getMethod是调用requesWrapper的。**

```java
@Override
protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
      throws ServletException, IOException {

   HttpServletRequest requestToUse = request;

   if ("POST".equals(request.getMethod()) && request.getAttribute(WebUtils.ERROR_EXCEPTION_ATTRIBUTE) == null) {
      // paramValue拿到的是_method
       String paramValue = request.getParameter(this.methodParam);
      if (StringUtils.hasLength(paramValue)) {
         String method = paramValue.toUpperCase(Locale.ENGLISH);
         if (ALLOWED_METHODS.contains(method)) {
            requestToUse = new HttpMethodRequestWrapper(request, method);
         }
      }
   }

   filterChain.doFilter(requestToUse, response);
}
private static final List<String> ALLOWED_METHODS =
      Collections.unmodifiableList(Arrays.asList(HttpMethod.PUT.name(),
            HttpMethod.DELETE.name(), HttpMethod.PATCH.name()));
```

**requesWrapper:**

```java
private static class HttpMethodRequestWrapper extends HttpServletRequestWrapper {

		private final String method;

		public HttpMethodRequestWrapper(HttpServletRequest request, String method) {
			super(request);
			this.method = method;
		}

		@Override
		public String getMethod() {
			return this.method;
		}
	}
```

### 将_method改成其他名字

将**_method**改成了**_m**,此时因为程序中无法获取**_m**，所以我们表单中点击**delete**依然是**post**,因此我们需要再更改表单即可。

```java
//自定义filter
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.filter.HiddenHttpMethodFilter;

@Configuration(proxyBeanMethods = false)
public class RestConfig {

    @Bean
    public HiddenHttpMethodFilter hiddenHttpMethodFilter(){
        HiddenHttpMethodFilter methodFilter = new HiddenHttpMethodFilter();
        methodFilter.setMethodParam("_m");
        return methodFilter;
    }
}
```

**修改form表单，添加_m：**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>hah</title>
</head>
<body>
<form action="/user" method="get">
    <input value="get" type="submit">
</form>
<form action="/user" method="post">
    <input value="post" type="submit">
</form>
<form action="/user" method="post">
    <input name="_method" type="hidden" value="put">
    <input name="_m" type="hidden" value="put">
    <input value="put" type="submit">
</form>
<form action="/user" method="post">
    <input name="_method" type="hidden" value="delete">
    <input name="_m" type="hidden" value="delete">
    <input value="delete" type="submit">
</form>

</body>
</html>
```

### Rest使用客户端工具

- **如PostMan直接发送Put、delete等方式请求，无需Filter。**表单只能用get,post请求。

## 请求处理----参数注解

**@PathVariable、@RequestHeader、@ModelAttribute、@RequestParam、@MatrixVariable、@CookieValue、@RequestBody**

#### 参数注解作用

##### **@PathVariable**

作用：`@PathVariable`是spring3.0的一个新功能：接收请求路径中占位符的值，将URL中占位符参数`{xxx}`绑定到处理器类的方法形参中`@PathVariable(“xxx“)`，上如果有多个占位符，形参列表需要定义多个参数，不是很方便，可以直接定义一个map集合`@PathVariable Map<String,String> kv`，会自动映射多个参数；

##### @RequestParam

@RequestParam主要用于将请求参数区域的数据映射到控制层方法的参数上

```java
@RequestParam(value=”参数名”,required=”true/false”,defaultValue=””)
```

- `value`：请求中传入参数的名称，即前端传过来时定义的参数名。如果不设置value值，则前端定义的参数名必须和后端接口参数名相同
- `required`：该参数是否为必传项。默认是true，表示请求中一定要传入对应的参数，否则会报404错误；如果设置为false，当请求中没有此参数，将会默认为null。而对于基本数据类型的变量，则必须有值，这时会抛出空指针异常。如果允许空值，则接口中变量需要使用包装类来声明。
- `defaultValue`：参数的默认值，如果请求中没有同名的参数时，该变量默认为此值。

##### @RequestBody

作用：@RequestBody主要用来接收前端传递给后端的json字符串中的数据的(请求体中的数据的)

- GET方式无请求体，所以使用@RequestBody接收数据时，前端不能使用GET方式提交数据，而是用POST方式进行提交
- 在后端的同一个接收方法里，@RequestBody与@RequestParam()可以同时使用，@RequestBody最多只能有一个，而@RequestParam()可以有多个
- 如果参数时放在请求体application/json传入后台的话，那么后台要用@RequestBody才能接收到
- 如果不是放在请求体中的话，那么后台接收前台传过来的参数时，要用@RequestParam来接收，或者形参前 什么也不写也能接收

##### **@CookieValue**

同请求头类似，可以获取cookie属性，也可以将获取到的属性封装为cookie对象

##### **@RequestAttribute**

获取请求域中的信息

```java
@Controller
public class GoController {
    @GetMapping("/goto")
    public String goPage(HttpServletRequest request){
        request.setAttribute("msg","成功");
        request.setAttribute("code","200");
        return "forward:/success";
    }
    @ResponseBody
    @GetMapping("/success")
    public Map<String,Object> getmap(@RequestAttribute("msg") String msg,
                                     @RequestAttribute("code") String code){
        HashMap<String, Object> map = new HashMap<>();
        map.put("msg",msg);
        map.put("code",code);
        return map;
    }
}
```

##### **@MatrixVariable**

读取矩阵变量，矩阵变量语法如下，每一个变量之间用分号隔开

语法： 请求路径：/cars/sell;low=34;brand=byd,audi,yd

```java
//cars/sell;low=34;brand=byd,audi,yd
@GetMapping("/car/{path}")
public Map test2(@MatrixVariable("low") String low,
                 @MatrixVariable("brand") List<String> brand,
                 @PathVariable("path") String path){
    HashMap<String, Object> map = new HashMap<>();
    map.put("low",low);
    map.put("brand",brand);
    map.put("path",path);
    return map;
}
//{"path":"sell","low":34,"brand":["byd","audi","yd"]}
```

#### 示例：

请求地址如果为：http://localhost:9999/car/2/owner/zhangsan?age=18&inters=basketball&inters=football

```java
@PathVariable("id") Integer id: 获取路径中{id}
@PathVariable("username") String name： 获取路径中{username}
@PathVariable Map<String, String> pv： 获取路径中所有的路径变量
@RequestHeader("User-Agent") String userAgent： 获取请求头中userAgent
@RequestHeader Map<String, String> header： 获取请求头中所有参数
@RequestParam("age") Integer age： 获取请求参数中"age"
@RequestParam("inters") List<String> inters： 获取请求参数中"inters"
@RequestParam Map<String, String> params： 获取所有的请求参数
@CookieValue("_ga") String _ga： 获取cookie中_ga的值
@CookieValue("_ga") Cookie cookie) ： 获取cookie
```


```java
import javax.servlet.http.Cookie;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class ParameterTestController {


    //  http://localhost:9999/car/2/owner/zhangsan?age=18&inters=basketball&inters=football
    @GetMapping("/car/{id}/owner/{username}")
    public Map<String, Object> getCar(@PathVariable("id") Integer id,
                                      @PathVariable("username") String name,
                                      @PathVariable Map<String, String> pv,
                                      @RequestHeader("User-Agent") String userAgent,
                                      @RequestHeader Map<String, String> header,
                                      @RequestParam("age") Integer age,
                                      @RequestParam("inters") List<String> inters,
                                      @RequestParam Map<String, String> params,
                                      @CookieValue("_ga") String _ga,
                                      @CookieValue("_ga") Cookie cookie) {


        Map<String, Object> map = new HashMap<>();

        map.put("id", id);
        map.put("name", name);
        map.put("pv", pv);
        map.put("userAgent", userAgent);
        map.put("headers", header);
        map.put("age", age);
        map.put("inters", inters);
        map.put("params", params);
        map.put("_ga", _ga);
        System.out.println(cookie.getName() + "===>" + cookie.getValue());
        return map;
    }


    @PostMapping("/save")
    public Map postMethod(@RequestBody String content) {
        Map<String, Object> map = new HashMap<>();
        map.put("content", content);
        return map;
    }


    //1、语法： 请求路径：/cars/sell;low=34;brand=byd,audi,yd
    //2、SpringBoot默认是禁用了矩阵变量的功能
    //      手动开启：原理。对于路径的处理。UrlPathHelper进行解析。
    //              removeSemicolonContent（移除分号内容）支持矩阵变量的
    //3、矩阵变量必须有url路径变量才能被解析
    @GetMapping("/cars/{path}")
    public Map carsSell(@MatrixVariable("low") Integer low,
                        @MatrixVariable("brand") List<String> brand,
                        @PathVariable("path") String path) {
        Map<String, Object> map = new HashMap<>();

        map.put("low", low);
        map.put("brand", brand);
        map.put("path", path);
        return map;
    }

    // /boss/1;age=20/2;age=10

    @GetMapping("/boss/{bossId}/{empId}")
    public Map boss(@MatrixVariable(value = "age", pathVar = "bossId") Integer bossAge,
                    @MatrixVariable(value = "age", pathVar = "empId") Integer empAge) {
        Map<String, Object> map = new HashMap<>();

        map.put("bossAge", bossAge);
        map.put("empAge", empAge);
        return map;

    }

}
```