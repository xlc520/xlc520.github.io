---
author: xlc520
title: SpringBoot中如何解决CORS跨域问题
description: SpringBoot中如何解决CORS跨域问题
date: 2022-04-07
category: Java
tag: Java
article: true
timeline: true
icon: java
password: 
---



# SpringBoot中如何解决CORS跨域问题

CORS（Cross-Origin Resource Sharing）"跨域资源共享"，是一个W3C标准，它允许浏览器向跨域服务器发送Ajax请求，打破了Ajax只能访问本站内的资源限制。

在前后分离的架构下，我们经常会遇到跨域CORS问题，在浏览器上的表现就是出现如下一段错误提示：`No 'Access-Control-Allow-Origin' header is present on the requested resource.`

下面看一下如何让你的SpringBoot项目支持CORS跨域。

## SpringBoot处理跨域

在SpringBoot后端处理跨域比较简单，只需要在项目中添加如下一个配置类即可：

```java
/**
 * Spring Boot 2.0 解决跨域问题
 * @Author javadaily
 */
@Configuration
public class WebMvcConfiguration implements WebMvcConfigurer {


 @Bean
 public CorsFilter corsFilter() {
  final UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();
  final CorsConfiguration corsConfiguration = new CorsConfiguration();
  /* 是否允许请求带有验证信息 */
  corsConfiguration.setAllowCredentials(true);
  /* 允许访问的客户端域名 */
  corsConfiguration.addAllowedOrigin("*");
  /* 允许服务端访问的客户端请求头 */
  corsConfiguration.addAllowedHeader("*");
  /* 允许访问的方法名,GET POST等 */
  corsConfiguration.addAllowedMethod("*");
  urlBasedCorsConfigurationSource.registerCorsConfiguration("/**", corsConfiguration);
  return new CorsFilter(urlBasedCorsConfigurationSource);
 }

}
```

这里我们在配置类中注入了 `CorsFilter`并重写了相关配置，大家可以根据自己的业务需求请里面的 * 改成具体的属性值。

通过上面的配置我们基本可以解决后端跨域问题，但是在一些特定情况下还是还出现跨域。

## 特殊情况

当项目中还有一个自定义过滤器，并且在过滤器中通过 `response.getWriter().print()`直接向客户端输出返回信息：

![图片](https://mmbiz.qpic.cn/mmbiz_png/PxMzT0Oibf4gmJSRJWiaelpqwkHDCNfzDh0mdnXvU2EXbqAibZtQFQCbE7GialfnN79o7o15eMgrwXXtkoKLg974NQ/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)

在这种情况下是不会继续执行后面的过滤器链的。

**而在SpringBoot中自定义过滤器的优先级高于WebMvcConfigurer中定义的过滤器**，所以此时由于未经过CORS过滤器的处理还是会出现跨域现象。

这种时候我们就需要改写CorsFilter的写法，让其在自定义过滤器之前执行。

### 解决方法

- 自定义Cors过滤器

```java
public class CustomerCorsFilter extends CorsFilter {

    public CustomerCorsFilter() {
        super(configurationSource());
    }

    private static UrlBasedCorsConfigurationSource configurationSource() {
        // CORS授权
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowCredentials(true);
        config.addAllowedOrigin("*");
        config.addAllowedHeader("*");
        config.addAllowedMethod("*");
        config.addExposedHeader(HttpHeaders.SET_COOKIE);
        config.setMaxAge(3600L);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
                return source;
    }

}
```

- 通过配置类指定过滤器的优先级

```java
@Configuration
public class FilterConfig {

    @Bean
    public Filter authFilter(){
        return new AuthFilter();
    }


    /**
     * WARNING ：跨域过滤器，注意执行顺序，必须要在AuthFilter过滤器之后
     * @return
     */
    @Bean
    public FilterRegistrationBean corsFilterRegistration() {

        FilterRegistrationBean registration = new FilterRegistrationBean();
        //添加过滤器
        registration.setFilter(new CustomerCorsFilter());
        List<String> urlList = new ArrayList<>();
        urlList.add("/*");
        //设置过滤路径，/*所有路径
        registration.setUrlPatterns(urlList);
        //添加默认参数
        registration.setName("CorsFilter");
        //设置优先级
        registration.setOrder(-1);
        return registration;
    }


    @Bean
    public FilterRegistrationBean authFilterRegistration() {

        FilterRegistrationBean registration = new FilterRegistrationBean();
        //添加过滤器
        registration.setFilter(authFilter());
        List<String> urlList = new ArrayList<>();
        urlList.add("/*");
        //设置过滤路径，/*所有路径
        registration.setUrlPatterns(urlList);
        //添加默认参数
        registration.setName("authFilter");
        //设置优先级
        registration.setOrder(1);
        return registration;
    }

}
```

通过setOrder()方法指定过滤器的执行顺序，用以保证CORS过滤器先入自定义过滤器执行。**注意：order的顺序越小优先级越高。**