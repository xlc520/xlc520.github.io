---
author: xlc520
title: SpringBoot+SpringSecurity前后端分离+Jwt的权限认证
description: SpringBoot+SpringSecurity前后端分离+Jwt的权限认证
date: 2022-02-13
category: Java
tag: Java
article: true
timeline: true
icon: 
password: 
---

# SpringBoot+SpringSecurity前后端分离+Jwt的权限认证

## 前言

一般来说，我们用SpringSecurity默认的话是前后端整在一起的，比如[thymeleaf](https://so.csdn.net/so/search?q=thymeleaf&spm=1001.2101.3001.7020)或者Freemarker，SpringSecurity还自带login登录页,还让你配置登出页,错误页。
但是现在前后端分离才是正道，前后端分离的话，那就需要将返回的页面换成Json格式交给前端处理了

SpringSecurity默认的是采用[Session](https://so.csdn.net/so/search?q=Session&spm=1001.2101.3001.7020)来判断请求的用户是否登录的，但是不方便分布式的扩展，虽然SpringSecurity也支持采用SpringSession来管理分布式下的用户状态，不过现在分布式的还是无状态的Jwt比较主流。 所以下面说下怎么让SpringSecurity变成前后端分离，采用Jwt来做认证的

## 一、五个handler一个filter两个User

5个handler，分别是

- 实现AuthenticationEntryPoint接口,当匿名请求需要登录的接口时,拦截处理
- 实现AuthenticationSuccessHandler接口,当登录成功后,该处理类的方法被调用
- 实现AuthenticationFailureHandler接口,当登录失败后,该处理类的方法被调用
- 实现AccessDeniedHandler接口,当登录后,访问接口没有权限的时候,该处理类的方法被调用
- 实现LogoutSuccessHandler接口,注销的时候调用

### 1.1 AuthenticationEntryPoint

匿名未登录的时候访问，遇到需要登录认证的时候被调用

```java
/**
 * 匿名未登录的时候访问,需要登录的资源的调用类
 * @author zzzgd
 */
@Component
public class CustomerAuthenticationEntryPoint implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AuthenticationException e) throws IOException, ServletException {
	    //设置response状态码，返回错误信息等
	    ...
        ResponseUtil.out(401, ResultUtil.failure(ErrorCodeConstants.REQUIRED_LOGIN_ERROR));
    }
}

1234567891011121314
```

### 1.2 AuthenticationSuccessHandler

这里是我们输入的用户名和密码登录成功后，调用的方法
简单的说就是获取用户信息，使用JWT生成token，然后返回token

```java
/**
 * 登录成功处理类,登录成功后会调用里面的方法
 * @author Exrickx
 */
@Slf4j
@Component
public class CustomerAuthenticationSuccessHandler implements AuthenticationSuccessHandler {


    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
    	//简单的说就是获取当前用户，拿到用户名或者userId，创建token，返回
        log.info("登陆成功...");
        CustomerUserDetails principal = (CustomerUserDetails) authentication.getPrincipal();
        //颁发token
        Map<String,Object> emptyMap = new HashMap<>(4);
        emptyMap.put(UserConstants.USER_ID,principal.getId());
        String token = JwtTokenUtil.generateToken(principal.getUsername(), emptyMap);
        ResponseUtil.out(ResultUtil.success(token));
    }
}
12345678910111213141516171819202122
```

### 1.3 AuthenticationFailureHandler

有登陆成功就有登录失败
登录失败的时候调用这个方法，可以在其中做登录错误限制或者其他操作，我这里直接就是设置响应头的状态码为401，返回

```java
/**
 * 登录账号密码错误等情况下,会调用的处理类
 * @author Exrickx
 */
@Slf4j
@Component
public class CustomerAuthenticationFailHandler implements AuthenticationFailureHandler {


    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException e) throws IOException, ServletException {
    //设置response状态码，返回错误信息等
    	....
        ResponseUtil.out(401, ResultUtil.failure(ErrorCodeConstants.LOGIN_UNMATCH_ERROR));
    }

}

12345678910111213141516171819
```

### 1.4 LogoutSuccessHandler

登出注销的时候调用，Jwt有个缺点就是无法主动控制失效，可以采用Jwt+session的方式，比如删除存储在Redis的token

这里需要注意，如果将SpringSecurity的session配置为无状态，或者不保存session，这里authentication为null！！ ，注意空指针问题。（详情见下面的配置WebSecurityConfigurerAdapter）

```java
/**
 * 登出成功的调用类
 * @author zzzgd
 */
@Component
public class CustomerLogoutSuccessHandler implements LogoutSuccessHandler {
    @Override
    public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        ResponseUtil.out(ResultUtil.success("Logout Success!"));
    }
}
1234567891011
```

### 1.5 AccessDeniedHandler

登录后，访问缺失权限的资源会调用。

```java
/**
 * 没有权限,被拒绝访问时的调用类
 * @author Exrickx
 */
@Component
@Slf4j
public class CustomerRestAccessDeniedHandler implements AccessDeniedHandler {

    @Override
    public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) {
        ResponseUtil.out(403, ResultUtil.failure(ErrorCodeConstants.PERMISSION_DENY));
    }

}
1234567891011121314
```

### 1.6 一个过滤器OncePerRequestFilter

这里算是一个小重点。
上面我们在登录成功后，返回了一个token，那怎么使用这个token呢？

前端发起请求的时候将token放在请求头中，在过滤器中对请求头进行解析。

1. 如果有accessToken的请求头（可以自已定义名字），取出token，解析token，解析成功说明token正确，将解析出来的用户信息放到SpringSecurity的上下文中
2. 如果有accessToken的请求头，解析token失败（无效token，或者过期失效），取不到用户信息，放行
3. 没有accessToken的请求头，放行

这里可能有人会疑惑，为什么token失效都要放行呢？
这是因为SpringSecurity会自己去做登录的认证和权限的校验，靠的就是我们放在SpringSecurity上下文中的`SecurityContextHolder.getContext().setAuthentication(authentication);`，没有拿到`authentication`，放行了，SpringSecurity还是会走到认证和校验，这个时候就会发现没有登录没有权限。

> 旧版本, 最新在底部

```java
package com.zgd.shop.web.config.auth.filter;

import com.zgd.shop.common.constants.SecurityConstants;
import com.zgd.shop.common.util.jwt.JwtTokenUtil;
import com.zgd.shop.web.config.auth.user.CustomerUserDetailService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 过滤器,在请求过来的时候,解析请求头中的token,再解析token得到用户信息,再存到SecurityContextHolder中
 * @author zzzgd
 */
@Component
@Slf4j
public class CustomerJwtAuthenticationTokenFilter extends OncePerRequestFilter {

    @Autowired
    CustomerUserDetailService customerUserDetailService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws ServletException, IOException {
        
    	//请求头为 accessToken
    	//请求体为 Bearer token

    	String authHeader = request.getHeader(SecurityConstants.HEADER);

        if (authHeader != null && authHeader.startsWith(SecurityConstants.TOKEN_SPLIT)) {

            final String authToken = authHeader.substring(SecurityConstants.TOKEN_SPLIT.length());
            String username = JwtTokenUtil.parseTokenGetUsername(authToken);
            if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                UserDetails userDetails = customerUserDetailService.loadUserByUsername(username);
                if (userDetails != null) {
                    UsernamePasswordAuthenticationToken authentication =
                            new UsernamePasswordAuthenticationToken(userDetails, userDetails.getPassword(), userDetails.getAuthorities());
                    authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(authentication);
                }
            }
        }
        chain.doFilter(request, response);
    }
}
1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556
```

### 1.7 实现UserDetails扩充字段

这个接口表示的用户信息，SpringSecurity默认实现了一个User，不过字段寥寥无几，只有username，password这些，而且后面获取用户信息的时候也是获取的UserDetail。

于是我们将自己的数据库的User作为拓展，自己实现这个接口。**继承的是数据库对应的User，而不是SpringSecurity的User**

```java
package com.zgd.shop.web.config.auth.user;

import com.zgd.shop.common.constants.UserConstants;
import com.zgd.shop.dao.entity.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

/**
 * CustomerUserDetails
 *
 * @author zgd
 * @date 2019/7/17 15:29
 */
public class CustomerUserDetails extends User implements UserDetails {

  private Collection<? extends GrantedAuthority> authorities;

  public CustomerUserDetails(User user){
    this.setId(user.getId());
    this.setUsername(user.getUsername());
    this.setPassword(user.getPassword());
    this.setRoles(user.getRoles());
    this.setStatus(user.getStatus());
  }

  public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
    this.authorities = authorities;
  }

  /**
   * 添加用户拥有的权限和角色
   * @return
   */
  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return this.authorities;
  }

  /**
   * 账户是否过期
   * @return
   */
  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  /**
   * 是否禁用
   * @return
   */
  @Override
  public boolean isAccountNonLocked() {
    return  true;
  }

  /**
   * 密码是否过期
   * @return
   */
  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  /**
   * 是否启用
   * @return
   */
  @Override
  public boolean isEnabled() {
    return UserConstants.USER_STATUS_NORMAL.equals(this.getStatus());
  }
}

1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859606162636465666768697071727374757677
```

### 1.8 实现UserDetailsService

SpringSecurity在登录的时候，回去数据库（或其他来源），根据username获取正确的user信息，就会根据这个service类，拿到用户的信息和权限。我们自己实现

```java
import com.alibaba.fastjson.JSON;
import com.zgd.shop.dao.entity.model.User;
import com.zgd.shop.service.IUserService;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.collections.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * @author zgd
 * @date 2019/1/16 16:27
 * @description 自己实现UserDetailService,用与SpringSecurity获取用户信息
 */
@Service
@Slf4j
public class CustomerUserDetailService implements UserDetailsService {

  @Autowired
  private IUserService userService;

  /**
   * 获取用户信息,然后交给spring去校验权限
   * @param username
   * @return
   * @throws UsernameNotFoundException
   */
  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    //获取用户信息
    User user = userService.getUserRoleByUserName(username);
    if(user == null){
      throw new UsernameNotFoundException("用户名不存在");
    }
    CustomerUserDetails customerUserDetails = new CustomerUserDetails(user);

    List<SimpleGrantedAuthority> authorities = new ArrayList<>();
    //用于添加用户的权限。只要把用户权限添加到authorities 就万事大吉。
    if (CollectionUtils.isNotEmpty(user.getRoles())){
      user.getRoles().forEach(r -> authorities.add(new SimpleGrantedAuthority("ROLE_"+r.getRoleName())));
    }
    customerUserDetails.setAuthorities(authorities);
    log.info("authorities:{}", JSON.toJSONString(authorities));
    
    //这里返回的是我们自己定义的UserDetail
    return customerUserDetails;
  }
}

12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455
```

### 1.9 userSessionService

```java
package com.zgd.springboot.web.common.user;


import com.zgd.springboot.web.auth.user.CustomerUserDetails;
import com.zgd.springboot.web.manager.RedisManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * CacheUserSessionServiceImpl
 * 使用redis实现的，存储用户会话session
 * @author zgd
 * @date 2019/7/19 14:29
 */
@Service
public class UserCacheSessionServiceImpl implements UserSessionService  {

  @Autowired
  private RedisManager redisManager;

  private static final String USER_SESSION_PREFIX = "USER-SESSION:";
  private static final String USER_TOKEN_TIMESTAMP_PREFIX = "USER-TOKEN-TIMESTAMP:";


  @Override
  public void saveSession(CustomerUserDetails userDetails, int second) {
    String username = userDetails.getUsername();
    String key = USER_SESSION_PREFIX + username;
    redisManager.setexToJson(key,second,userDetails);
  }

  @Override
  public CustomerUserDetails getSessionByUsername(String username) {
    String key = USER_SESSION_PREFIX + username;
    return redisManager.getFromJson(key,CustomerUserDetails.class);
  }

  @Override
  public void destroySession(String username) {
    String key = USER_SESSION_PREFIX + username;
    String key1 = USER_TOKEN_TIMESTAMP_PREFIX + username;
    redisManager.del(key,key1);
  }


  @Override
  public void saveTokenTimestamp(String username, long mills) {
    String key = USER_TOKEN_TIMESTAMP_PREFIX + username;
    redisManager.set(key, String.valueOf(mills));
  }

  @Override
  public Long getTokenTimestamp(String username) {
    String key = USER_TOKEN_TIMESTAMP_PREFIX + username;
    return Long.valueOf(redisManager.get(key));
  }
}

12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758
```

### 1.10 ResonseUtil

```java
import com.alibaba.fastjson.JSON;
import java.io.IOException;
import java.util.Map;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.collections4.MapUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

public class ResponseUtil {
  private static final Logger log = LoggerFactory.getLogger(ResponseUtil.class);

  public ResponseUtil() {
  }

  public static void out(Result result) {
    out(200, result, (Map)null);
  }

  public static void out(int statusCode, Result result) {
    out(statusCode, result, (Map)null);
  }

  public static void outWithHeader(int statusCode, Result result, Map<String, String> map) {
    out(statusCode, result, map);
  }

  public static void out(int statusCode, Result result, Map<String, String> header) {
    ServletOutputStream out = null;

    try {
      ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes)RequestContextHolder.getRequestAttributes();
      if (servletRequestAttributes != null) {
        HttpServletResponse response = servletRequestAttributes.getResponse();
        if (response != null && !response.isCommitted()) {
        //如果发现乱码,这里注释
          response.setCharacterEncoding("UTF-8");
          response.setContentType("application/json;charset=UTF-8");
          response.setStatus(statusCode);
          if (MapUtils.isNotEmpty(header)) {
            header.forEach(response::setHeader);
          }

          out = response.getOutputStream();
          out.write(JSON.toJSONString(result).getBytes());
        }
      }
    } catch (Exception var14) {
      log.error("[ResponseUtil] 响应出错 ", var14);
    } finally {
      if (out != null) {
        try {
          out.flush();
          out.close();
        } catch (IOException var13) {
          log.error("关闭流出错 ", var13);
        }
      }

    }

  }
}

1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859606162636465666768
```

## 二、配置WebSecurityConfigurerAdapter

我们需要将上面定义的handler和filter，注册到SpringSecurity。同时配置一些放行的url

**这里有一点需要注意：如果配置了下面的SessionCreationPolicy.STATELESS**，则SpringSecurity不会保存session会话，在`/logout`登出的时候会拿不到用户实体对象。

```
http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
```

如果登出注销不依赖SpringSecurity，并且session交给redis的token来管理的话，可以按上面的配置。

```java
package com.zgd.shop.web.config;

import com.zgd.shop.web.config.auth.encoder.MyAesPasswordEncoder;
import com.zgd.shop.web.config.auth.encoder.MyEmptyPasswordEncoder;
import com.zgd.shop.web.config.auth.handler.*;
import com.zgd.shop.web.config.auth.filter.CustomerJwtAuthenticationTokenFilter;
import com.zgd.shop.web.config.auth.user.CustomerUserDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

/**
 * @Author: zgd
 * @Date: 2019/1/15 17:42
 * @Description:
 */
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)// 控制@Secured权限注解
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

  /**
   * 这里需要交给spring注入,而不是直接new
   */
  @Autowired
  private PasswordEncoder passwordEncoder;
  @Autowired
  private CustomerUserDetailService customerUserDetailService;
  @Autowired
  private CustomerAuthenticationFailHandler customerAuthenticationFailHandler;
  @Autowired
  private CustomerAuthenticationSuccessHandler customerAuthenticationSuccessHandler;
  @Autowired
  private CustomerJwtAuthenticationTokenFilter customerJwtAuthenticationTokenFilter;
  @Autowired
  private CustomerRestAccessDeniedHandler customerRestAccessDeniedHandler;
  @Autowired
  private CustomerLogoutSuccessHandler customerLogoutSuccessHandler;
  @Autowired
  private CustomerAuthenticationEntryPoint customerAuthenticationEntryPoint;


 
  /**
   * 该方法定义认证用户信息获取的来源、密码校验的规则
   *
   * @param auth
   * @throws Exception
   */
  @Override
  protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    //auth.authenticationProvider(myauthenticationProvider)  自定义密码校验的规则

    //如果需要改变认证的用户信息来源，我们可以实现UserDetailsService
    auth.userDetailsService(customerUserDetailService).passwordEncoder(passwordEncoder);
  }


  @Override
  protected void configure(HttpSecurity http) throws Exception {
    /**
     * antMatchers: ant的通配符规则
     * ?	匹配任何单字符
     * *	匹配0或者任意数量的字符，不包含"/"
     * **	匹配0或者更多的目录，包含"/"
     */
    http
            .headers()
            .frameOptions().disable();

    http
            //登录后,访问没有权限处理类
            .exceptionHandling().accessDeniedHandler(customerRestAccessDeniedHandler)
            //匿名访问,没有权限的处理类
            .authenticationEntryPoint(customerAuthenticationEntryPoint)
    ;

    //使用jwt的Authentication,来解析过来的请求是否有token
    http
            .addFilterBefore(customerJwtAuthenticationTokenFilter, UsernamePasswordAuthenticationFilter.class);


    http
            .authorizeRequests()
            //这里表示"/any"和"/ignore"不需要权限校验
            .antMatchers("/ignore/**", "/login", "/**/register/**").permitAll()
            .anyRequest().authenticated()
            // 这里表示任何请求都需要校验认证(上面配置的放行)


            .and()
            //配置登录,检测到用户未登录时跳转的url地址,登录放行
            .formLogin()
            //需要跟前端表单的action地址一致
            .loginProcessingUrl("/login")
            .successHandler(customerAuthenticationSuccessHandler)
            .failureHandler(customerAuthenticationFailHandler)
            .permitAll()

            //配置取消session管理,又Jwt来获取用户状态,否则即使token无效,也会有session信息,依旧判断用户为登录状态
            .and()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)

            //配置登出,登出放行
            .and()
            .logout()
            .logoutSuccessHandler(customerLogoutSuccessHandler)
            .permitAll()
            
            .and()
            .csrf().disable()
    ;
  }


}

123456789101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899100101102103104105106107108109110111112113114115116117118119120121122123124125126127
```

## 三、其他

大概到这就差不多了，启动，localhost:8080/login，使用postman，采用form-data，post提交，参数是username和password，调用，返回token。

将token放在header中，请求接口。ok

### 3.1 不足之处

上面是最简单的处理，还有很多优化的地方。比如

1. 控制token销毁？
   使用redis+token组合，不仅解析token，还判断redis是否有这个token。注销和主动失效token：删除redis的key
2. 控制token过期时间？如果用户在token过期前1秒还在操作，下1秒就需要重新登录，肯定不好
   1、考虑加入refreshToken，过期时间比token长，前端在拿到token的同时获取过期时间，在过期前一分钟用refreshToken调用refresh接口，重新获取新的token。
   2、 将返回的jwtToken设置短一点的过期时间，redis再存这个token，过期时间设置长一点。如果请求过来token过期，查询redis，如果redis还存在，返回新的token。（为什么redis的过期时间大于token的？因为redis的过期是可控的，手动可删除，以redis的为准）
3. 每次请求都会被`OncePerRequestFilter` 拦截，每次都会被`UserDetailService`中的获取用户数据请求数据库，可以考虑做缓存，还是用redis或者直接保存内存中

### 3.2 解决

> 更新 2019-07-19

这是针对上面的2.2说的，也就是redis时间久一点，jwt过期后如果redis没过期，颁发新的jwt。
不过更推荐的是**前端判断过期时间，在过期之前调用refresh接口拿到新的jwt**。

为什么这样？
如果redis过期时间是一周，jwt是一个小时，那么一个小时后，拿着这个过期的jwt去调，就可以想创建多少个新的jwt就创建，只要没过redis的过期时间。 当然这是在没对过期的jwt做限制的情况下，如果要考虑做限制，比如对redis的value加一个字段，保存当前jwt，刷新后就用新的jwt覆盖，refresh接口判断当前的过期jwt是不是和redis这个一样。

总之还需要判断刷新token的时候，过期jwt是否合法的问题。总不能去年的过期token也拿来刷新吧。
而在过期前去刷新token的话，至少不会发生这种事情

不过我这里自己写demo，采用的还是2.2的方式，也就是过期后给个新的，思路如下：

1. 登录后颁发token，token有个时间戳，同时以username拼装作为key，保存这个时间戳到缓存（redis，cache）
2. 请求来了，过滤器解析token，没过期的话，还需要比较缓存中的时间戳和token的时间戳是不是一样 ，如果时间戳不一样，说明该token不能刷新。无视
3. 注销，清除缓存数据

这样就可以避免token过期后，我还能拿到这个token无限制的refresh。

不过这个还是有细节方面问题，并发下同时刷新token这些并没有考虑，部分代码如下

> 旧版本, 最新在底部

```java
package com.zgd.shop.web.auth.filter;

import com.zgd.shop.common.constants.SecurityConstants;
import com.zgd.shop.common.util.jwt.JwtTokenUtil;
import com.zgd.shop.web.auth.user.CustomerUserDetailService;
import com.zgd.shop.web.auth.user.CustomerUserDetails;
import com.zgd.shop.web.auth.user.UserSessionService;
import com.zgd.shop.web.auth.user.UserTokenManager;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 过滤器,在请求过来的时候,解析请求头中的token,再解析token得到用户信息,再存到SecurityContextHolder中
 * @author zzzgd
 */
@Component
@Slf4j
public class CustomerJwtAuthenticationTokenFilter extends OncePerRequestFilter {

    @Autowired
    CustomerUserDetailService customerUserDetailService;
    @Autowired
    UserSessionService userSessionService;
    @Autowired
    UserTokenManager userTokenManager;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws ServletException, IOException {
        
    	//请求头为 accessToken
    	//请求体为 Bearer token

    	String authHeader = request.getHeader(SecurityConstants.HEADER);

        if (authHeader != null && authHeader.startsWith(SecurityConstants.TOKEN_SPLIT)) {

            final String authToken = authHeader.substring(SecurityConstants.TOKEN_SPLIT.length());

            String username;
            Claims claims;
            try {
                claims = JwtTokenUtil.parseToken(authToken);
                username = claims.getSubject();
            } catch (ExpiredJwtException e) {
                //token过期
                claims = e.getClaims();
                username = claims.getSubject();
                CustomerUserDetails userDetails = userSessionService.getSessionByUsername(username);
                if (userDetails != null){
                    //session未过期，比对时间戳是否一致，是则重新颁发token
                    if (isSameTimestampToken(username,e.getClaims())){
                        userTokenManager.awardAccessToken(userDetails,true);
                    }
                }
            }
            //避免每次请求都请求数据库查询用户信息，从缓存中查询
            CustomerUserDetails userDetails = userSessionService.getSessionByUsername(username);
            if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//                UserDetails userDetails = customerUserDetailService.loadUserByUsername(username);
                if (userDetails != null) {
                    if(isSameTimestampToken(username,claims)){
                        //必须token解析的时间戳和session保存的一致
                        UsernamePasswordAuthenticationToken authentication =
                                new UsernamePasswordAuthenticationToken(userDetails, userDetails.getPassword(), userDetails.getAuthorities());
                        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                        SecurityContextHolder.getContext().setAuthentication(authentication);
                    }
                }
            }
        }
        chain.doFilter(request, response);
    }

    /**
     * 判断是否同一个时间戳
     * @param username 
     * @param claims
     * @return
     */
    private boolean isSameTimestampToken(String username, Claims claims){
        Long timestamp = userSessionService.getTokenTimestamp(username);
        Long jwtTimestamp = (Long) claims.get(SecurityConstants.TIME_STAMP);
        return timestamp.equals(jwtTimestamp);
    }
}
1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859606162636465666768697071727374757677787980818283848586878889909192939495969798
package com.zgd.shop.web.auth.user;

import com.google.common.collect.Maps;
import com.zgd.shop.common.constants.SecurityConstants;
import com.zgd.shop.common.constants.UserConstants;
import com.zgd.shop.common.util.ResponseUtil;
import com.zgd.shop.common.util.jwt.JwtTokenUtil;
import com.zgd.shop.core.result.ResultUtil;
import com.zgd.shop.web.config.auth.UserAuthProperties;
import org.apache.commons.collections.MapUtils;
import org.checkerframework.checker.units.qual.A;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

/**
 * UserTokenManager
 * token管理
 *
 * @author zgd
 * @date 2019/7/19 15:25
 */
@Component
public class UserTokenManager {

  @Autowired
  private UserAuthProperties userAuthProperties;
  @Autowired
  private UserSessionService userSessionService;

  /**
   * 颁发token
   * @param principal
   * @author zgd
   * @date 2019/7/19 15:34
   * @return void
   */
  public void awardAccessToken(CustomerUserDetails principal,boolean isRefresh) {
    //颁发token 确定时间戳，保存在session中和token中
    long mill = System.currentTimeMillis();
    userSessionService.saveSession(principal);
    userSessionService.saveTokenTimestamp(principal.getUsername(),mill);

    Map<String,Object> param = new HashMap<>(4);
    param.put(UserConstants.USER_ID,principal.getId());
    param.put(SecurityConstants.TIME_STAMP,mill);

    String token = JwtTokenUtil.generateToken(principal.getUsername(), param,userAuthProperties.getJwtExpirationTime());
    HashMap<String, String> map = Maps.newHashMapWithExpectedSize(1);
    map.put(SecurityConstants.HEADER,token);
    int code = isRefresh ? 201 : 200;
    ResponseUtil.outWithHeader(code,ResultUtil.success(),map);
  }
}

12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758
```

##### 更新

> 2019-09-30

针对token解析的过滤器做了优化:

1. 如果redis的session没过期, 但是请求头的token过期了, 判断时间戳一致后, 颁发新token并返回
2. 如果redis的session没过期, 但是请求头的token过期了, 时间戳不一致, 说明当前请求的token无法刷新token, 设置响应码为401返回
3. 如果请求头的token过期了, 但是redis的session失效或未找到, 直接放行, 交给后面的权限校验处理(也就是没有给上下文`SecurityContextHolder`设置登录信息, 后面如果判断这个请求缺少权限会自行处理)

```java
package com.zgd.shop.web.auth.filter;

import com.zgd.shop.common.constants.SecurityConstants;
import com.zgd.shop.common.util.ResponseUtil;
import com.zgd.shop.common.util.jwt.JwtTokenUtil;
import com.zgd.shop.core.error.ErrorCodeConstants;
import com.zgd.shop.core.result.ResultUtil;
import com.zgd.shop.web.auth.user.CustomerUserDetailService;
import com.zgd.shop.web.auth.user.CustomerUserDetails;
import com.zgd.shop.web.auth.user.UserSessionService;
import com.zgd.shop.web.auth.user.UserTokenManager;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * 过滤器,在请求过来的时候,解析请求头中的token,再解析token得到用户信息,再存到SecurityContextHolder中
 * @author zzzgd
 */
@Component
@Slf4j
public class CustomerJwtAuthenticationTokenFilter extends OncePerRequestFilter {

    @Autowired
    CustomerUserDetailService customerUserDetailService;
    @Autowired
    UserSessionService userSessionService;
    @Autowired
    UserTokenManager userTokenManager;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws ServletException, IOException {
        
    	//请求头为 accessToken
    	//请求体为 Bearer token

    	String authHeader = request.getHeader(SecurityConstants.HEADER);

        if (authHeader != null && authHeader.startsWith(SecurityConstants.TOKEN_SPLIT)) {
            //请求头有token
            final String authToken = authHeader.substring(SecurityConstants.TOKEN_SPLIT.length());

            String username;
            Claims claims;
            try {
                claims = JwtTokenUtil.parseToken(authToken);
                username = claims.getSubject();
            } catch (ExpiredJwtException e) {
                //token过期
                claims = e.getClaims();
                username = claims.getSubject();
                CustomerUserDetails userDetails = userSessionService.getSessionByUsername(username);
                if (userDetails != null){
                    //session未过期，比对时间戳是否一致，是则重新颁发token
                    if (isSameTimestampToken(username,e.getClaims())){
                        userTokenManager.awardAccessToken(userDetails,true);
                        //直接设置响应码为201,直接返回
                        return;
                    }else{
                        //时间戳不一致.无效token,无法刷新token,响应码401,前端跳转登录页
                        ResponseUtil.out(HttpStatus.UNAUTHORIZED.value(),ResultUtil.failure(ErrorCodeConstants.REQUIRED_LOGIN_ERROR));
                        return;
                    }
                }else{
                    //直接放行,交给后面的handler处理,如果当前请求是需要访问权限,则会由CustomerRestAccessDeniedHandler处理
                    chain.doFilter(request, response);
                    return;
                }
            }

            //避免每次请求都请求数据库查询用户信息，从缓存中查询
            CustomerUserDetails userDetails = userSessionService.getSessionByUsername(username);
            if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//                UserDetails userDetails = customerUserDetailService.loadUserByUsername(username);
                if (userDetails != null) {
                    if(isSameTimestampToken(username,claims)){
                        //必须token解析的时间戳和session保存的一致
                        UsernamePasswordAuthenticationToken authentication =
                                new UsernamePasswordAuthenticationToken(userDetails, userDetails.getPassword(), userDetails.getAuthorities());
                        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                        SecurityContextHolder.getContext().setAuthentication(authentication);
                    }
                }
            }
        }
        chain.doFilter(request, response);
    }

    /**
     * 判断是否同一个时间戳
     * @param username
     * @param claims
     * @return
     */
    private boolean isSameTimestampToken(String username, Claims claims){
        Long timestamp = userSessionService.getTokenTimestamp(username);
        Long jwtTimestamp = (Long) claims.get(SecurityConstants.TIME_STAMP);
        return timestamp.equals(jwtTimestamp);
    }
}
```