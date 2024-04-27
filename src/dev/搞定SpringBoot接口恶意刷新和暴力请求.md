---
author: xlc520
title: 搞定 SpringBoot 接口恶意刷新和暴力请求
excerpt: 
description: 
date: 2022-06-05
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# 搞定 SpringBoot 接口恶意刷新和暴力请求

在实际项目使用中，必须要考虑服务的安全性，当服务部署到互联网以后，就要考虑服务被恶意请求和暴力攻击的情况，下面的教程，通过`intercept`
和`redis`针对`url+ip`在一定时间内访问的次数来将 ip 禁用，可以根据自己的需求进行相应的修改，来打打自己的目的；

首先工程为 springboot 框架搭建，不再详细叙述。

首先创建一个自定义的拦截器类，也是最核心的代码：

```java
/**
 * @package: com.technicalinterest.group.interceptor
 * @className: IpUrlLimitInterceptor
 * @description: ip+url重复请求现在拦截器
 * @author: Shuyu.Wang
 * @since: 0.1
 **/
@Slf4j
public class IpUrlLimitInterceptor implements HandlerInterceptor {
 
 
 private RedisUtil getRedisUtil() {
  return  SpringContextUtil.getBean(RedisUtil.class);
 }
 
 private static final String LOCK_IP_URL_KEY="lock_ip_";
 
 private static final String IP_URL_REQ_TIME="ip_url_times_";
 
 private static final long LIMIT_TIMES=5;
 
 private static final int IP_LOCK_TIME=60;
 
 @Override
 public boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o) throws Exception {
  log.info("request请求地址uri={},ip={}", httpServletRequest.getRequestURI(), IpAdrressUtil.getIpAdrress(httpServletRequest));
  if (ipIsLock(IpAdrressUtil.getIpAdrress(httpServletRequest))){
   log.info("ip访问被禁止={}",IpAdrressUtil.getIpAdrress(httpServletRequest));
   ApiResult result = new ApiResult(ResultEnum.LOCK_IP);
   returnJson(httpServletResponse, JSON.toJSONString(result));
   return false;
  }
  if(!addRequestTime(IpAdrressUtil.getIpAdrress(httpServletRequest),httpServletRequest.getRequestURI())){
   ApiResult result = new ApiResult(ResultEnum.LOCK_IP);
   returnJson(httpServletResponse, JSON.toJSONString(result));
   return false;
  }
  return true;
 }
 
 @Override
 public void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {
 
 }
 
 @Override
 public void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {
 
 }
 
 /**
  * @Description: 判断ip是否被禁用
  * @author: shuyu.wang
  * @date: 2019-10-12 13:08
  * @param ip
  * @return java.lang.Boolean
  */
 private Boolean ipIsLock(String ip){
  RedisUtil redisUtil=getRedisUtil();
  if(redisUtil.hasKey(LOCK_IP_URL_KEY+ip)){
   return true;
  }
  return false;
 }
 /**
  * @Description: 记录请求次数
  * @author: shuyu.wang
  * @date: 2019-10-12 17:18
  * @param ip
  * @param uri
  * @return java.lang.Boolean
  */
 private Boolean addRequestTime(String ip,String uri){
  String key=IP_URL_REQ_TIME+ip+uri;
  RedisUtil redisUtil=getRedisUtil();
  if (redisUtil.hasKey(key)){
   long time=redisUtil.incr(key,(long)1);
   if (time>=LIMIT_TIMES){
    redisUtil.getLock(LOCK_IP_URL_KEY+ip,ip,IP_LOCK_TIME);
    return false;
   }
  }else {
   redisUtil.getLock(key,(long)1,1);
  }
  return true;
 }
 
 private void returnJson(HttpServletResponse response, String json) throws Exception {
  PrintWriter writer = null;
  response.setCharacterEncoding("UTF-8");
  response.setContentType("text/json; charset=utf-8");
  try {
   writer = response.getWriter();
   writer.print(json);
  } catch (IOException e) {
   log.error("LoginInterceptor response error ---> {}", e.getMessage(), e);
  } finally {
   if (writer != null) {
    writer.close();
   }
  }
 }
 
 
}
```

代码中 redis 的使用的是分布式锁的形式，这样可以最大程度保证线程安全和功能的实现效果。代码中设置的是 1S 内同一个接口通过同一个
ip 访问 5 次，就将该 ip 禁用 1 个小时，根据自己项目需求可以自己适当修改，实现自己想要的功能；

redis 分布式锁的关键代码:

```java
/**
 * @package: com.shuyu.blog.util
 * @className: RedisUtil
 * @description:
 * @author: Shuyu.Wang
 * @since: 0.1
 **/
@Component
@Slf4j
public class RedisUtil {
 
 private static final Long SUCCESS = 1L;
 
 @Autowired
 private RedisTemplate<String, Object> redisTemplate;
 // =============================common============================
 
 
 
 /**
  * 获取锁
  * @param lockKey
  * @param value
  * @param expireTime：单位-秒
  * @return
  */
 public boolean getLock(String lockKey, Object value, int expireTime) {
  try {
   log.info("添加分布式锁key={},expireTime={}",lockKey,expireTime);
   String script = "if redis.call('setNx',KEYS[1],ARGV[1]) then if redis.call('get',KEYS[1])==ARGV[1] then return redis.call('expire',KEYS[1],ARGV[2]) else return 0 end end";
   RedisScript<String> redisScript = new DefaultRedisScript<>(script, String.class);
   Object result = redisTemplate.execute(redisScript, Collections.singletonList(lockKey), value, expireTime);
   if (SUCCESS.equals(result)) {
    return true;
   }
  } catch (Exception e) {
   e.printStackTrace();
  }
  return false;
 }
 
 /**
  * 释放锁
  * @param lockKey
  * @param value
  * @return
  */
 public boolean releaseLock(String lockKey, String value) {
  String script = "if redis.call('get', KEYS[1]) == ARGV[1] then return redis.call('del', KEYS[1]) else return 0 end";
  RedisScript<String> redisScript = new DefaultRedisScript<>(script, String.class);
  Object result = redisTemplate.execute(redisScript, Collections.singletonList(lockKey), value);
  if (SUCCESS.equals(result)) {
   return true;
  }
  return false;
 }
 
}
```

最后将上面自定义的拦截器通过`registry.addInterceptor`添加一下，就生效了；

```java
@Configuration
@Slf4j
public class MyWebAppConfig extends WebMvcConfigurerAdapter {
    @Bean
 IpUrlLimitInterceptor getIpUrlLimitInterceptor(){
     return new IpUrlLimitInterceptor();
 }
 
 @Override
    public void addInterceptors(InterceptorRegistry registry) {
  registry.addInterceptor(getIpUrlLimitInterceptor()).addPathPatterns("/**");
        super.addInterceptors(registry);
    }
}
```

自己可以写一个 for 循环来测试方面的功能，这里就不详细介绍了。
