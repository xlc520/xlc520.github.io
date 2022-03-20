---
author: xlc520
title: SpringBoot+拦截器+自定义异常+自定义注解+全局异常处理
description: SpringBoot+拦截器+自定义异常+自定义注解+全局异常处理
date: 2022-01-15
category: other
tag: other
article: true
timeline: true
icon: 
password: 
---
# SpringBoot+拦截器+自定义异常+自定义注解+全局异常处理

- [前言](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&scene=21&token=899450012&lang=zh_CN#wechat_redirect)

- [资源权限](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&scene=21&token=899450012&lang=zh_CN#wechat_redirect)

- - [1.静态资源准备](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&scene=21&token=899450012&lang=zh_CN#wechat_redirect)
  - [2.自定义一个异常，便于拦截抛出](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&scene=21&token=899450012&lang=zh_CN#wechat_redirect)
  - [3.全局异常处理](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&scene=21&token=899450012&lang=zh_CN#wechat_redirect)
  - [4.controller层](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&scene=21&token=899450012&lang=zh_CN#wechat_redirect)
  - [5.拦截器创建](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&scene=21&token=899450012&lang=zh_CN#wechat_redirect)
  - [6.将拦截器注入应用](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&scene=21&token=899450012&lang=zh_CN#wechat_redirect)
  - [7.验证查看结果](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&scene=21&token=899450012&lang=zh_CN#wechat_redirect)

- [操作权限](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&scene=21&token=899450012&lang=zh_CN#wechat_redirect)

- - [1.和上面一样使用静态资源](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&scene=21&token=899450012&lang=zh_CN#wechat_redirect)
  - [2.自定义注解](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&scene=21&token=899450012&lang=zh_CN#wechat_redirect)
  - [3.controller层](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&scene=21&token=899450012&lang=zh_CN#wechat_redirect)
  - [4.修改一下之前的拦截器](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&scene=21&token=899450012&lang=zh_CN#wechat_redirect)
  - [5.验证结果](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&scene=21&token=899450012&lang=zh_CN#wechat_redirect)

- [角色权限](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&scene=21&token=899450012&lang=zh_CN#wechat_redirect)

- - [1.静态对应关系](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&scene=21&token=899450012&lang=zh_CN#wechat_redirect)
  - [2.修改controller](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&scene=21&token=899450012&lang=zh_CN#wechat_redirect)
  - [3.修改一下拦截器](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&scene=21&token=899450012&lang=zh_CN#wechat_redirect)
  - [4.结果测试](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&scene=21&token=899450012&lang=zh_CN#wechat_redirect)

- [总结](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&scene=21&token=899450012&lang=zh_CN#wechat_redirect)

------

## [前言](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

提到权限管理这块肯定很多人第一想到的就是Springboot Security或者是Shiro安全框架，但本文介绍的并不是这两种，不是因为他们不好用，实在是自己太懒了，我觉得一个拦截器加上其他的一些处理就能满足项目的需求，我又何必去多用一个框架呢，这篇文章也不是去对比谁好谁坏，各位自行抉择。

我将权限管理分为三块：

1. **资源权限** ：将url当做资源，可以给每个账号动态划分Url权限，访问不同的URl；
2. **操作权限** ：将所有URL分为增、删、改、查4种操作权限，给用户分配对应的操作权限，如某个用户只有查操作权限那么他就无法做其他的操作；
3. **角色权限** ：系统有多个角色，每个角色的权限都不同，如一个管理后台有着账号管理模块、商品模块等，为超级管理员的角色就可以看到所有模块并操作，而为售后的角色就只能看到商品模块，即使他知道账号管理模块下的URL也无权限操作。然后为用户设置角色就有对应的权限；

> “
>
> 推荐下自己做的 Spring Boot 的实战项目：
>
> https://github.com/YunaiV/ruoyi-vue-pro

## [资源权限](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

### [1.静态资源准备](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

这里方便演示就不直接操作数据库了，对应的权限建表关系也很简单，这里直接建立静态的用户对应的URL关系。

```
public class Constant {
    /**
     * 权限管理
     */
    public static Map<Integer,String[]> permission=new HashMap<>();
    static {
        String[] frist={"/url1","/url2","/url3","/url4","/url5","/url6","/url7"};//用户1所拥有的URL权限
        String[] second={"/url1","/url2","/url3","/url4","/url5"};//用户2所拥有的URL权限
        String[] third={"/url1","/url2","/url3"};//用户3所拥有的URL权限
        permission.put(1,frist);
        permission.put(2,second);
        permission.put(3,third);

    }
}
```

### [2.自定义一个异常，便于拦截抛出](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

```
public class APIException extends RuntimeException {
    private static final long serialVersionUID = 1L;
    private String msg;
    public APIException(String msg) {
        super(msg);
        this.msg = msg;
    }

}
```

### [3.全局异常处理](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

便于异常后返回统一规范的结果,正常应该是正常返回自定义Vo，但这里目标是为了演示结果，再加上各位应该都有自己的Vo类，所以这里就不用了

```
@RestControllerAdvice
public class WebExceptionControl {
    
    @ExceptionHandler(APIException.class)
    public String APIExceptionHandler(APIException e) {
        return e.getMessage();
    }
}
```

### [4.controller层](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

很简单创建对应的URL就好

![图片](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/640-164346343241051.webp)

### [5.拦截器创建](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

一般是要先验证token，后根据token取到用户对应信息，这里没有登录所以就直接在token里传对应用户的key值了

```
/**
 * 权限管理URL拦截器
 */
public class URLInterceptor implements HandlerInterceptor {

    // 预处理回调方法，在接口调用之前使用  true代表放行  false代表不放行
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
        HttpServletRequest httpServletRequest = (HttpServletRequest) request;
        String token = httpServletRequest.getHeader("token");
        String requestURL = httpServletRequest.getRequestURI();
        //1.根据token判断用户是否登录
        if (token==null){   //正常情况下这里还需判断与redis中的token是否匹配
            // 如果没有token或者token不匹配, 直接抛出异常  提示未登录
            throw  new APIException("当前用户未登录");
        }
        //2.登录成功后 根据用户token中的信息获取到用户对应的URL权限集合
        String[] strings = Constant.permission.get(Integer.valueOf(token));
        boolean hasPermission = false;
        //3.再根据用户对应的URL集合去与当前请求的URL对比  有匹配的则放行  反之则抛出异常
        for (int i =0;i<strings.length;i++) {
            if (strings[i].equals(requestURL)){
                hasPermission = true;
                break;
            }
        }
        if (hasPermission){
            return true;
        }else {
            throw  new APIException("当前用户没有访问路径" + requestURL + "的权限");
        }
    }
}
```

### [6.将拦截器注入应用](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

```
@Configuration
public class WebMvcConfg implements WebMvcConfigurer {

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        //权限拦截器
        registry.addInterceptor(urlInterceptor()).addPathPatterns("/**");
    }
    @Bean
    public URLInterceptor urlInterceptor(){
        return new URLInterceptor();
    }
}
```

### [7.验证查看结果](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

分别在token中传入用户1-3的key，访问不同url就可以看到效果，如下

[![图片](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/640-164346343241052.webp)](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

[![图片](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/640-164346343241053.webp)](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

> “
>
> 推荐下自己做的 Spring Cloud 的实战项目：
>
> https://github.com/YunaiV/onemall

## [操作权限](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

### [1.和上面一样使用静态资源](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

```
public class Constant {
    /**
     * 权限管理
     */
    public static Map<Integer,String[]> permission=new HashMap<>();
    static {
        String[] frist={"insert","delete","select","update"};//用户1所拥有的操作权限
        String[] second={"insert","select","update"};//用户2所拥有的URL权限
        String[] third={"select"};//用户3所拥有的URL权限
        permission.put(1,frist);
        permission.put(2,second);
        permission.put(3,third);

    }
}
```

### [2.自定义注解](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

```
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface UrlAnnotation {
    /**
     * 操作类型(type):添加,删除,修改,插入
     * 
     */
    String type();
}
```

### [3.controller层](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

打上自定义的注解，代表对应方法是什么操作

[![图片](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/640-164346343241054.webp)](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

### [4.修改一下之前的拦截器](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

添加对注解上面的操作类型的获取，并用type类型去对比判断

[![图片](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/640-164346343241055.webp)](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

### [5.验证结果](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

其他都不变

[![图片](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/640-164346343241056.webp)](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

[![图片](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/640-164346343241157.webp)](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

## [角色权限](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

这里其实和上面的操作大同小异，我这里简单演示一下，以两个模块为例

### [1.静态对应关系](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

```
public class Constant {
    /**
     * 权限管理
     */
    public static Map<Integer,String[]> permission=new HashMap<>();
    static {
        String[] frist={"test","test1"};//用户1所拥有的模块权限  这里的test是模块URL入口  例如：test模块下所有URL都是/test/**
        String[] second={"test"};//用户2所拥有的模块权限
        permission.put(1,frist); //这里的1其实是用户对应ID为1的角色
        permission.put(2,second);//这个2同理

    }
```

### [2.修改controller](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

模拟两个模块

[![图片](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/640-164346343241158.webp)](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

### [3.修改一下拦截器](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

[![图片](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/640-164346343241159.webp)](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

### [4.结果测试](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

[![图片](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/640-164346343241160.webp)](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)



## [总结](https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&mid=2247487551&idx=1&sn=18f64ba49f3f0f9d8be9d1fdef8857d9&scene=21#wechat_redirect)

其实用自定义的拦截器去做权限，不管是什么类型其实都大同小异，根据需求灵活的去处理才是最重要的，上面的静态权限变通一下，建立角色表、用户表、路径表以及对应关系，就很容易做出URL的动态权限配置了，灵活运用自定义注解搭配可以做到更细致。