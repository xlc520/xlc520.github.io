import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{c as s}from"./app.f1128457.js";const e={},a=s(`<h1 id="springboot-springsecurity\u524D\u540E\u7AEF\u5206\u79BB-jwt\u7684\u6743\u9650\u8BA4\u8BC1" tabindex="-1"><a class="header-anchor" href="#springboot-springsecurity\u524D\u540E\u7AEF\u5206\u79BB-jwt\u7684\u6743\u9650\u8BA4\u8BC1" aria-hidden="true">#</a> SpringBoot+SpringSecurity\u524D\u540E\u7AEF\u5206\u79BB+Jwt\u7684\u6743\u9650\u8BA4\u8BC1</h1><h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p>\u4E00\u822C\u6765\u8BF4\uFF0C\u6211\u4EEC\u7528SpringSecurity\u9ED8\u8BA4\u7684\u8BDD\u662F\u524D\u540E\u7AEF\u6574\u5728\u4E00\u8D77\u7684\uFF0C\u6BD4\u5982<a href="https://so.csdn.net/so/search?q=thymeleaf&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">thymeleaf</a>\u6216\u8005Freemarker\uFF0CSpringSecurity\u8FD8\u81EA\u5E26login\u767B\u5F55\u9875,\u8FD8\u8BA9\u4F60\u914D\u7F6E\u767B\u51FA\u9875,\u9519\u8BEF\u9875\u3002 \u4F46\u662F\u73B0\u5728\u524D\u540E\u7AEF\u5206\u79BB\u624D\u662F\u6B63\u9053\uFF0C\u524D\u540E\u7AEF\u5206\u79BB\u7684\u8BDD\uFF0C\u90A3\u5C31\u9700\u8981\u5C06\u8FD4\u56DE\u7684\u9875\u9762\u6362\u6210Json\u683C\u5F0F\u4EA4\u7ED9\u524D\u7AEF\u5904\u7406\u4E86</p><p>SpringSecurity\u9ED8\u8BA4\u7684\u662F\u91C7\u7528<a href="https://so.csdn.net/so/search?q=Session&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">Session</a>\u6765\u5224\u65AD\u8BF7\u6C42\u7684\u7528\u6237\u662F\u5426\u767B\u5F55\u7684\uFF0C\u4F46\u662F\u4E0D\u65B9\u4FBF\u5206\u5E03\u5F0F\u7684\u6269\u5C55\uFF0C\u867D\u7136SpringSecurity\u4E5F\u652F\u6301\u91C7\u7528SpringSession\u6765\u7BA1\u7406\u5206\u5E03\u5F0F\u4E0B\u7684\u7528\u6237\u72B6\u6001\uFF0C\u4E0D\u8FC7\u73B0\u5728\u5206\u5E03\u5F0F\u7684\u8FD8\u662F\u65E0\u72B6\u6001\u7684Jwt\u6BD4\u8F83\u4E3B\u6D41\u3002 \u6240\u4EE5\u4E0B\u9762\u8BF4\u4E0B\u600E\u4E48\u8BA9SpringSecurity\u53D8\u6210\u524D\u540E\u7AEF\u5206\u79BB\uFF0C\u91C7\u7528Jwt\u6765\u505A\u8BA4\u8BC1\u7684</p><h2 id="\u4E00\u3001\u4E94\u4E2Ahandler\u4E00\u4E2Afilter\u4E24\u4E2Auser" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u4E94\u4E2Ahandler\u4E00\u4E2Afilter\u4E24\u4E2Auser" aria-hidden="true">#</a> \u4E00\u3001\u4E94\u4E2Ahandler\u4E00\u4E2Afilter\u4E24\u4E2AUser</h2><p>5\u4E2Ahandler\uFF0C\u5206\u522B\u662F</p><ul><li>\u5B9E\u73B0AuthenticationEntryPoint\u63A5\u53E3,\u5F53\u533F\u540D\u8BF7\u6C42\u9700\u8981\u767B\u5F55\u7684\u63A5\u53E3\u65F6,\u62E6\u622A\u5904\u7406</li><li>\u5B9E\u73B0AuthenticationSuccessHandler\u63A5\u53E3,\u5F53\u767B\u5F55\u6210\u529F\u540E,\u8BE5\u5904\u7406\u7C7B\u7684\u65B9\u6CD5\u88AB\u8C03\u7528</li><li>\u5B9E\u73B0AuthenticationFailureHandler\u63A5\u53E3,\u5F53\u767B\u5F55\u5931\u8D25\u540E,\u8BE5\u5904\u7406\u7C7B\u7684\u65B9\u6CD5\u88AB\u8C03\u7528</li><li>\u5B9E\u73B0AccessDeniedHandler\u63A5\u53E3,\u5F53\u767B\u5F55\u540E,\u8BBF\u95EE\u63A5\u53E3\u6CA1\u6709\u6743\u9650\u7684\u65F6\u5019,\u8BE5\u5904\u7406\u7C7B\u7684\u65B9\u6CD5\u88AB\u8C03\u7528</li><li>\u5B9E\u73B0LogoutSuccessHandler\u63A5\u53E3,\u6CE8\u9500\u7684\u65F6\u5019\u8C03\u7528</li></ul><h3 id="_1-1-authenticationentrypoint" tabindex="-1"><a class="header-anchor" href="#_1-1-authenticationentrypoint" aria-hidden="true">#</a> 1.1 AuthenticationEntryPoint</h3><p>\u533F\u540D\u672A\u767B\u5F55\u7684\u65F6\u5019\u8BBF\u95EE\uFF0C\u9047\u5230\u9700\u8981\u767B\u5F55\u8BA4\u8BC1\u7684\u65F6\u5019\u88AB\u8C03\u7528</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>/**
 * \u533F\u540D\u672A\u767B\u5F55\u7684\u65F6\u5019\u8BBF\u95EE,\u9700\u8981\u767B\u5F55\u7684\u8D44\u6E90\u7684\u8C03\u7528\u7C7B
 * @author zzzgd
 */
@Component
public class CustomerAuthenticationEntryPoint implements AuthenticationEntryPoint {
    @Override
    public void commence(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, AuthenticationException e) throws IOException, ServletException {
	    //\u8BBE\u7F6Eresponse\u72B6\u6001\u7801\uFF0C\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F\u7B49
	    ...
        ResponseUtil.out(401, ResultUtil.failure(ErrorCodeConstants.REQUIRED_LOGIN_ERROR));
    }
}

1234567891011121314
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_1-2-authenticationsuccesshandler" tabindex="-1"><a class="header-anchor" href="#_1-2-authenticationsuccesshandler" aria-hidden="true">#</a> 1.2 AuthenticationSuccessHandler</h3><p>\u8FD9\u91CC\u662F\u6211\u4EEC\u8F93\u5165\u7684\u7528\u6237\u540D\u548C\u5BC6\u7801\u767B\u5F55\u6210\u529F\u540E\uFF0C\u8C03\u7528\u7684\u65B9\u6CD5 \u7B80\u5355\u7684\u8BF4\u5C31\u662F\u83B7\u53D6\u7528\u6237\u4FE1\u606F\uFF0C\u4F7F\u7528JWT\u751F\u6210token\uFF0C\u7136\u540E\u8FD4\u56DEtoken</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>/**
 * \u767B\u5F55\u6210\u529F\u5904\u7406\u7C7B,\u767B\u5F55\u6210\u529F\u540E\u4F1A\u8C03\u7528\u91CC\u9762\u7684\u65B9\u6CD5
 * @author Exrickx
 */
@Slf4j
@Component
public class CustomerAuthenticationSuccessHandler implements AuthenticationSuccessHandler {


    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
    	//\u7B80\u5355\u7684\u8BF4\u5C31\u662F\u83B7\u53D6\u5F53\u524D\u7528\u6237\uFF0C\u62FF\u5230\u7528\u6237\u540D\u6216\u8005userId\uFF0C\u521B\u5EFAtoken\uFF0C\u8FD4\u56DE
        log.info(&quot;\u767B\u9646\u6210\u529F...&quot;);
        CustomerUserDetails principal = (CustomerUserDetails) authentication.getPrincipal();
        //\u9881\u53D1token
        Map&lt;String,Object&gt; emptyMap = new HashMap&lt;&gt;(4);
        emptyMap.put(UserConstants.USER_ID,principal.getId());
        String token = JwtTokenUtil.generateToken(principal.getUsername(), emptyMap);
        ResponseUtil.out(ResultUtil.success(token));
    }
}
12345678910111213141516171819202122
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><h3 id="_1-3-authenticationfailurehandler" tabindex="-1"><a class="header-anchor" href="#_1-3-authenticationfailurehandler" aria-hidden="true">#</a> 1.3 AuthenticationFailureHandler</h3><p>\u6709\u767B\u9646\u6210\u529F\u5C31\u6709\u767B\u5F55\u5931\u8D25 \u767B\u5F55\u5931\u8D25\u7684\u65F6\u5019\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5728\u5176\u4E2D\u505A\u767B\u5F55\u9519\u8BEF\u9650\u5236\u6216\u8005\u5176\u4ED6\u64CD\u4F5C\uFF0C\u6211\u8FD9\u91CC\u76F4\u63A5\u5C31\u662F\u8BBE\u7F6E\u54CD\u5E94\u5934\u7684\u72B6\u6001\u7801\u4E3A401\uFF0C\u8FD4\u56DE</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>/**
 * \u767B\u5F55\u8D26\u53F7\u5BC6\u7801\u9519\u8BEF\u7B49\u60C5\u51B5\u4E0B,\u4F1A\u8C03\u7528\u7684\u5904\u7406\u7C7B
 * @author Exrickx
 */
@Slf4j
@Component
public class CustomerAuthenticationFailHandler implements AuthenticationFailureHandler {


    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException e) throws IOException, ServletException {
    //\u8BBE\u7F6Eresponse\u72B6\u6001\u7801\uFF0C\u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F\u7B49
    	....
        ResponseUtil.out(401, ResultUtil.failure(ErrorCodeConstants.LOGIN_UNMATCH_ERROR));
    }

}

12345678910111213141516171819
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="_1-4-logoutsuccesshandler" tabindex="-1"><a class="header-anchor" href="#_1-4-logoutsuccesshandler" aria-hidden="true">#</a> 1.4 LogoutSuccessHandler</h3><p>\u767B\u51FA\u6CE8\u9500\u7684\u65F6\u5019\u8C03\u7528\uFF0CJwt\u6709\u4E2A\u7F3A\u70B9\u5C31\u662F\u65E0\u6CD5\u4E3B\u52A8\u63A7\u5236\u5931\u6548\uFF0C\u53EF\u4EE5\u91C7\u7528Jwt+session\u7684\u65B9\u5F0F\uFF0C\u6BD4\u5982\u5220\u9664\u5B58\u50A8\u5728Redis\u7684token</p><p>\u8FD9\u91CC\u9700\u8981\u6CE8\u610F\uFF0C\u5982\u679C\u5C06SpringSecurity\u7684session\u914D\u7F6E\u4E3A\u65E0\u72B6\u6001\uFF0C\u6216\u8005\u4E0D\u4FDD\u5B58session\uFF0C\u8FD9\u91CCauthentication\u4E3Anull\uFF01\uFF01 \uFF0C\u6CE8\u610F\u7A7A\u6307\u9488\u95EE\u9898\u3002\uFF08\u8BE6\u60C5\u89C1\u4E0B\u9762\u7684\u914D\u7F6EWebSecurityConfigurerAdapter\uFF09</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>/**
 * \u767B\u51FA\u6210\u529F\u7684\u8C03\u7528\u7C7B
 * @author zzzgd
 */
@Component
public class CustomerLogoutSuccessHandler implements LogoutSuccessHandler {
    @Override
    public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
        ResponseUtil.out(ResultUtil.success(&quot;Logout Success!&quot;));
    }
}
1234567891011
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h3 id="_1-5-accessdeniedhandler" tabindex="-1"><a class="header-anchor" href="#_1-5-accessdeniedhandler" aria-hidden="true">#</a> 1.5 AccessDeniedHandler</h3><p>\u767B\u5F55\u540E\uFF0C\u8BBF\u95EE\u7F3A\u5931\u6743\u9650\u7684\u8D44\u6E90\u4F1A\u8C03\u7528\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>/**
 * \u6CA1\u6709\u6743\u9650,\u88AB\u62D2\u7EDD\u8BBF\u95EE\u65F6\u7684\u8C03\u7528\u7C7B
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="_1-6-\u4E00\u4E2A\u8FC7\u6EE4\u5668onceperrequestfilter" tabindex="-1"><a class="header-anchor" href="#_1-6-\u4E00\u4E2A\u8FC7\u6EE4\u5668onceperrequestfilter" aria-hidden="true">#</a> 1.6 \u4E00\u4E2A\u8FC7\u6EE4\u5668OncePerRequestFilter</h3><p>\u8FD9\u91CC\u7B97\u662F\u4E00\u4E2A\u5C0F\u91CD\u70B9\u3002 \u4E0A\u9762\u6211\u4EEC\u5728\u767B\u5F55\u6210\u529F\u540E\uFF0C\u8FD4\u56DE\u4E86\u4E00\u4E2Atoken\uFF0C\u90A3\u600E\u4E48\u4F7F\u7528\u8FD9\u4E2Atoken\u5462\uFF1F</p><p>\u524D\u7AEF\u53D1\u8D77\u8BF7\u6C42\u7684\u65F6\u5019\u5C06token\u653E\u5728\u8BF7\u6C42\u5934\u4E2D\uFF0C\u5728\u8FC7\u6EE4\u5668\u4E2D\u5BF9\u8BF7\u6C42\u5934\u8FDB\u884C\u89E3\u6790\u3002</p><ol><li>\u5982\u679C\u6709accessToken\u7684\u8BF7\u6C42\u5934\uFF08\u53EF\u4EE5\u81EA\u5DF2\u5B9A\u4E49\u540D\u5B57\uFF09\uFF0C\u53D6\u51FAtoken\uFF0C\u89E3\u6790token\uFF0C\u89E3\u6790\u6210\u529F\u8BF4\u660Etoken\u6B63\u786E\uFF0C\u5C06\u89E3\u6790\u51FA\u6765\u7684\u7528\u6237\u4FE1\u606F\u653E\u5230SpringSecurity\u7684\u4E0A\u4E0B\u6587\u4E2D</li><li>\u5982\u679C\u6709accessToken\u7684\u8BF7\u6C42\u5934\uFF0C\u89E3\u6790token\u5931\u8D25\uFF08\u65E0\u6548token\uFF0C\u6216\u8005\u8FC7\u671F\u5931\u6548\uFF09\uFF0C\u53D6\u4E0D\u5230\u7528\u6237\u4FE1\u606F\uFF0C\u653E\u884C</li><li>\u6CA1\u6709accessToken\u7684\u8BF7\u6C42\u5934\uFF0C\u653E\u884C</li></ol><p>\u8FD9\u91CC\u53EF\u80FD\u6709\u4EBA\u4F1A\u7591\u60D1\uFF0C\u4E3A\u4EC0\u4E48token\u5931\u6548\u90FD\u8981\u653E\u884C\u5462\uFF1F \u8FD9\u662F\u56E0\u4E3ASpringSecurity\u4F1A\u81EA\u5DF1\u53BB\u505A\u767B\u5F55\u7684\u8BA4\u8BC1\u548C\u6743\u9650\u7684\u6821\u9A8C\uFF0C\u9760\u7684\u5C31\u662F\u6211\u4EEC\u653E\u5728SpringSecurity\u4E0A\u4E0B\u6587\u4E2D\u7684<code>SecurityContextHolder.getContext().setAuthentication(authentication);</code>\uFF0C\u6CA1\u6709\u62FF\u5230<code>authentication</code>\uFF0C\u653E\u884C\u4E86\uFF0CSpringSecurity\u8FD8\u662F\u4F1A\u8D70\u5230\u8BA4\u8BC1\u548C\u6821\u9A8C\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5C31\u4F1A\u53D1\u73B0\u6CA1\u6709\u767B\u5F55\u6CA1\u6709\u6743\u9650\u3002</p><blockquote><p>\u65E7\u7248\u672C, \u6700\u65B0\u5728\u5E95\u90E8</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>package com.zgd.shop.web.config.auth.filter;

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
 * \u8FC7\u6EE4\u5668,\u5728\u8BF7\u6C42\u8FC7\u6765\u7684\u65F6\u5019,\u89E3\u6790\u8BF7\u6C42\u5934\u4E2D\u7684token,\u518D\u89E3\u6790token\u5F97\u5230\u7528\u6237\u4FE1\u606F,\u518D\u5B58\u5230SecurityContextHolder\u4E2D
 * @author zzzgd
 */
@Component
@Slf4j
public class CustomerJwtAuthenticationTokenFilter extends OncePerRequestFilter {

    @Autowired
    CustomerUserDetailService customerUserDetailService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws ServletException, IOException {
        
    	//\u8BF7\u6C42\u5934\u4E3A accessToken
    	//\u8BF7\u6C42\u4F53\u4E3A Bearer token

    	String authHeader = request.getHeader(SecurityConstants.HEADER);

        if (authHeader != null &amp;&amp; authHeader.startsWith(SecurityConstants.TOKEN_SPLIT)) {

            final String authToken = authHeader.substring(SecurityConstants.TOKEN_SPLIT.length());
            String username = JwtTokenUtil.parseTokenGetUsername(authToken);
            if (username != null &amp;&amp; SecurityContextHolder.getContext().getAuthentication() == null) {
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><h3 id="_1-7-\u5B9E\u73B0userdetails\u6269\u5145\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#_1-7-\u5B9E\u73B0userdetails\u6269\u5145\u5B57\u6BB5" aria-hidden="true">#</a> 1.7 \u5B9E\u73B0UserDetails\u6269\u5145\u5B57\u6BB5</h3><p>\u8FD9\u4E2A\u63A5\u53E3\u8868\u793A\u7684\u7528\u6237\u4FE1\u606F\uFF0CSpringSecurity\u9ED8\u8BA4\u5B9E\u73B0\u4E86\u4E00\u4E2AUser\uFF0C\u4E0D\u8FC7\u5B57\u6BB5\u5BE5\u5BE5\u65E0\u51E0\uFF0C\u53EA\u6709username\uFF0Cpassword\u8FD9\u4E9B\uFF0C\u800C\u4E14\u540E\u9762\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u7684\u65F6\u5019\u4E5F\u662F\u83B7\u53D6\u7684UserDetail\u3002</p><p>\u4E8E\u662F\u6211\u4EEC\u5C06\u81EA\u5DF1\u7684\u6570\u636E\u5E93\u7684User\u4F5C\u4E3A\u62D3\u5C55\uFF0C\u81EA\u5DF1\u5B9E\u73B0\u8FD9\u4E2A\u63A5\u53E3\u3002<strong>\u7EE7\u627F\u7684\u662F\u6570\u636E\u5E93\u5BF9\u5E94\u7684User\uFF0C\u800C\u4E0D\u662FSpringSecurity\u7684User</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>package com.zgd.shop.web.config.auth.user;

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

  private Collection&lt;? extends GrantedAuthority&gt; authorities;

  public CustomerUserDetails(User user){
    this.setId(user.getId());
    this.setUsername(user.getUsername());
    this.setPassword(user.getPassword());
    this.setRoles(user.getRoles());
    this.setStatus(user.getStatus());
  }

  public void setAuthorities(Collection&lt;? extends GrantedAuthority&gt; authorities) {
    this.authorities = authorities;
  }

  /**
   * \u6DFB\u52A0\u7528\u6237\u62E5\u6709\u7684\u6743\u9650\u548C\u89D2\u8272
   * @return
   */
  @Override
  public Collection&lt;? extends GrantedAuthority&gt; getAuthorities() {
    return this.authorities;
  }

  /**
   * \u8D26\u6237\u662F\u5426\u8FC7\u671F
   * @return
   */
  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  /**
   * \u662F\u5426\u7981\u7528
   * @return
   */
  @Override
  public boolean isAccountNonLocked() {
    return  true;
  }

  /**
   * \u5BC6\u7801\u662F\u5426\u8FC7\u671F
   * @return
   */
  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  /**
   * \u662F\u5426\u542F\u7528
   * @return
   */
  @Override
  public boolean isEnabled() {
    return UserConstants.USER_STATUS_NORMAL.equals(this.getStatus());
  }
}

1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859606162636465666768697071727374757677
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br></div></div><h3 id="_1-8-\u5B9E\u73B0userdetailsservice" tabindex="-1"><a class="header-anchor" href="#_1-8-\u5B9E\u73B0userdetailsservice" aria-hidden="true">#</a> 1.8 \u5B9E\u73B0UserDetailsService</h3><p>SpringSecurity\u5728\u767B\u5F55\u7684\u65F6\u5019\uFF0C\u56DE\u53BB\u6570\u636E\u5E93\uFF08\u6216\u5176\u4ED6\u6765\u6E90\uFF09\uFF0C\u6839\u636Eusername\u83B7\u53D6\u6B63\u786E\u7684user\u4FE1\u606F\uFF0C\u5C31\u4F1A\u6839\u636E\u8FD9\u4E2Aservice\u7C7B\uFF0C\u62FF\u5230\u7528\u6237\u7684\u4FE1\u606F\u548C\u6743\u9650\u3002\u6211\u4EEC\u81EA\u5DF1\u5B9E\u73B0</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>import com.alibaba.fastjson.JSON;
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
 * @description \u81EA\u5DF1\u5B9E\u73B0UserDetailService,\u7528\u4E0ESpringSecurity\u83B7\u53D6\u7528\u6237\u4FE1\u606F
 */
@Service
@Slf4j
public class CustomerUserDetailService implements UserDetailsService {

  @Autowired
  private IUserService userService;

  /**
   * \u83B7\u53D6\u7528\u6237\u4FE1\u606F,\u7136\u540E\u4EA4\u7ED9spring\u53BB\u6821\u9A8C\u6743\u9650
   * @param username
   * @return
   * @throws UsernameNotFoundException
   */
  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    //\u83B7\u53D6\u7528\u6237\u4FE1\u606F
    User user = userService.getUserRoleByUserName(username);
    if(user == null){
      throw new UsernameNotFoundException(&quot;\u7528\u6237\u540D\u4E0D\u5B58\u5728&quot;);
    }
    CustomerUserDetails customerUserDetails = new CustomerUserDetails(user);

    List&lt;SimpleGrantedAuthority&gt; authorities = new ArrayList&lt;&gt;();
    //\u7528\u4E8E\u6DFB\u52A0\u7528\u6237\u7684\u6743\u9650\u3002\u53EA\u8981\u628A\u7528\u6237\u6743\u9650\u6DFB\u52A0\u5230authorities \u5C31\u4E07\u4E8B\u5927\u5409\u3002
    if (CollectionUtils.isNotEmpty(user.getRoles())){
      user.getRoles().forEach(r -&gt; authorities.add(new SimpleGrantedAuthority(&quot;ROLE_&quot;+r.getRoleName())));
    }
    customerUserDetails.setAuthorities(authorities);
    log.info(&quot;authorities:{}&quot;, JSON.toJSONString(authorities));
    
    //\u8FD9\u91CC\u8FD4\u56DE\u7684\u662F\u6211\u4EEC\u81EA\u5DF1\u5B9A\u4E49\u7684UserDetail
    return customerUserDetails;
  }
}

12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><h3 id="_1-9-usersessionservice" tabindex="-1"><a class="header-anchor" href="#_1-9-usersessionservice" aria-hidden="true">#</a> 1.9 userSessionService</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>package com.zgd.springboot.web.common.user;


import com.zgd.springboot.web.auth.user.CustomerUserDetails;
import com.zgd.springboot.web.manager.RedisManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * CacheUserSessionServiceImpl
 * \u4F7F\u7528redis\u5B9E\u73B0\u7684\uFF0C\u5B58\u50A8\u7528\u6237\u4F1A\u8BDDsession
 * @author zgd
 * @date 2019/7/19 14:29
 */
@Service
public class UserCacheSessionServiceImpl implements UserSessionService  {

  @Autowired
  private RedisManager redisManager;

  private static final String USER_SESSION_PREFIX = &quot;USER-SESSION:&quot;;
  private static final String USER_TOKEN_TIMESTAMP_PREFIX = &quot;USER-TOKEN-TIMESTAMP:&quot;;


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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br></div></div><h3 id="_1-10-resonseutil" tabindex="-1"><a class="header-anchor" href="#_1-10-resonseutil" aria-hidden="true">#</a> 1.10 ResonseUtil</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>import com.alibaba.fastjson.JSON;
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

  public static void outWithHeader(int statusCode, Result result, Map&lt;String, String&gt; map) {
    out(statusCode, result, map);
  }

  public static void out(int statusCode, Result result, Map&lt;String, String&gt; header) {
    ServletOutputStream out = null;

    try {
      ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes)RequestContextHolder.getRequestAttributes();
      if (servletRequestAttributes != null) {
        HttpServletResponse response = servletRequestAttributes.getResponse();
        if (response != null &amp;&amp; !response.isCommitted()) {
        //\u5982\u679C\u53D1\u73B0\u4E71\u7801,\u8FD9\u91CC\u6CE8\u91CA
          response.setCharacterEncoding(&quot;UTF-8&quot;);
          response.setContentType(&quot;application/json;charset=UTF-8&quot;);
          response.setStatus(statusCode);
          if (MapUtils.isNotEmpty(header)) {
            header.forEach(response::setHeader);
          }

          out = response.getOutputStream();
          out.write(JSON.toJSONString(result).getBytes());
        }
      }
    } catch (Exception var14) {
      log.error(&quot;[ResponseUtil] \u54CD\u5E94\u51FA\u9519 &quot;, var14);
    } finally {
      if (out != null) {
        try {
          out.flush();
          out.close();
        } catch (IOException var13) {
          log.error(&quot;\u5173\u95ED\u6D41\u51FA\u9519 &quot;, var13);
        }
      }

    }

  }
}

1234567891011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859606162636465666768
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br></div></div><h2 id="\u4E8C\u3001\u914D\u7F6Ewebsecurityconfigureradapter" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u914D\u7F6Ewebsecurityconfigureradapter" aria-hidden="true">#</a> \u4E8C\u3001\u914D\u7F6EWebSecurityConfigurerAdapter</h2><p>\u6211\u4EEC\u9700\u8981\u5C06\u4E0A\u9762\u5B9A\u4E49\u7684handler\u548Cfilter\uFF0C\u6CE8\u518C\u5230SpringSecurity\u3002\u540C\u65F6\u914D\u7F6E\u4E00\u4E9B\u653E\u884C\u7684url</p><p><strong>\u8FD9\u91CC\u6709\u4E00\u70B9\u9700\u8981\u6CE8\u610F\uFF1A\u5982\u679C\u914D\u7F6E\u4E86\u4E0B\u9762\u7684SessionCreationPolicy.STATELESS</strong>\uFF0C\u5219SpringSecurity\u4E0D\u4F1A\u4FDD\u5B58session\u4F1A\u8BDD\uFF0C\u5728<code>/logout</code>\u767B\u51FA\u7684\u65F6\u5019\u4F1A\u62FF\u4E0D\u5230\u7528\u6237\u5B9E\u4F53\u5BF9\u8C61\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u767B\u51FA\u6CE8\u9500\u4E0D\u4F9D\u8D56SpringSecurity\uFF0C\u5E76\u4E14session\u4EA4\u7ED9redis\u7684token\u6765\u7BA1\u7406\u7684\u8BDD\uFF0C\u53EF\u4EE5\u6309\u4E0A\u9762\u7684\u914D\u7F6E\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>package com.zgd.shop.web.config;

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
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)// \u63A7\u5236@Secured\u6743\u9650\u6CE8\u89E3
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

  /**
   * \u8FD9\u91CC\u9700\u8981\u4EA4\u7ED9spring\u6CE8\u5165,\u800C\u4E0D\u662F\u76F4\u63A5new
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
   * \u8BE5\u65B9\u6CD5\u5B9A\u4E49\u8BA4\u8BC1\u7528\u6237\u4FE1\u606F\u83B7\u53D6\u7684\u6765\u6E90\u3001\u5BC6\u7801\u6821\u9A8C\u7684\u89C4\u5219
   *
   * @param auth
   * @throws Exception
   */
  @Override
  protected void configure(AuthenticationManagerBuilder auth) throws Exception {
    //auth.authenticationProvider(myauthenticationProvider)  \u81EA\u5B9A\u4E49\u5BC6\u7801\u6821\u9A8C\u7684\u89C4\u5219

    //\u5982\u679C\u9700\u8981\u6539\u53D8\u8BA4\u8BC1\u7684\u7528\u6237\u4FE1\u606F\u6765\u6E90\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5B9E\u73B0UserDetailsService
    auth.userDetailsService(customerUserDetailService).passwordEncoder(passwordEncoder);
  }


  @Override
  protected void configure(HttpSecurity http) throws Exception {
    /**
     * antMatchers: ant\u7684\u901A\u914D\u7B26\u89C4\u5219
     * ?	\u5339\u914D\u4EFB\u4F55\u5355\u5B57\u7B26
     * *	\u5339\u914D0\u6216\u8005\u4EFB\u610F\u6570\u91CF\u7684\u5B57\u7B26\uFF0C\u4E0D\u5305\u542B&quot;/&quot;
     * **	\u5339\u914D0\u6216\u8005\u66F4\u591A\u7684\u76EE\u5F55\uFF0C\u5305\u542B&quot;/&quot;
     */
    http
            .headers()
            .frameOptions().disable();

    http
            //\u767B\u5F55\u540E,\u8BBF\u95EE\u6CA1\u6709\u6743\u9650\u5904\u7406\u7C7B
            .exceptionHandling().accessDeniedHandler(customerRestAccessDeniedHandler)
            //\u533F\u540D\u8BBF\u95EE,\u6CA1\u6709\u6743\u9650\u7684\u5904\u7406\u7C7B
            .authenticationEntryPoint(customerAuthenticationEntryPoint)
    ;

    //\u4F7F\u7528jwt\u7684Authentication,\u6765\u89E3\u6790\u8FC7\u6765\u7684\u8BF7\u6C42\u662F\u5426\u6709token
    http
            .addFilterBefore(customerJwtAuthenticationTokenFilter, UsernamePasswordAuthenticationFilter.class);


    http
            .authorizeRequests()
            //\u8FD9\u91CC\u8868\u793A&quot;/any&quot;\u548C&quot;/ignore&quot;\u4E0D\u9700\u8981\u6743\u9650\u6821\u9A8C
            .antMatchers(&quot;/ignore/**&quot;, &quot;/login&quot;, &quot;/**/register/**&quot;).permitAll()
            .anyRequest().authenticated()
            // \u8FD9\u91CC\u8868\u793A\u4EFB\u4F55\u8BF7\u6C42\u90FD\u9700\u8981\u6821\u9A8C\u8BA4\u8BC1(\u4E0A\u9762\u914D\u7F6E\u7684\u653E\u884C)


            .and()
            //\u914D\u7F6E\u767B\u5F55,\u68C0\u6D4B\u5230\u7528\u6237\u672A\u767B\u5F55\u65F6\u8DF3\u8F6C\u7684url\u5730\u5740,\u767B\u5F55\u653E\u884C
            .formLogin()
            //\u9700\u8981\u8DDF\u524D\u7AEF\u8868\u5355\u7684action\u5730\u5740\u4E00\u81F4
            .loginProcessingUrl(&quot;/login&quot;)
            .successHandler(customerAuthenticationSuccessHandler)
            .failureHandler(customerAuthenticationFailHandler)
            .permitAll()

            //\u914D\u7F6E\u53D6\u6D88session\u7BA1\u7406,\u53C8Jwt\u6765\u83B7\u53D6\u7528\u6237\u72B6\u6001,\u5426\u5219\u5373\u4F7Ftoken\u65E0\u6548,\u4E5F\u4F1A\u6709session\u4FE1\u606F,\u4F9D\u65E7\u5224\u65AD\u7528\u6237\u4E3A\u767B\u5F55\u72B6\u6001
            .and()
            .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)

            //\u914D\u7F6E\u767B\u51FA,\u767B\u51FA\u653E\u884C
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br></div></div><h2 id="\u4E09\u3001\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5176\u4ED6" aria-hidden="true">#</a> \u4E09\u3001\u5176\u4ED6</h2><p>\u5927\u6982\u5230\u8FD9\u5C31\u5DEE\u4E0D\u591A\u4E86\uFF0C\u542F\u52A8\uFF0Clocalhost:8080/login\uFF0C\u4F7F\u7528postman\uFF0C\u91C7\u7528form-data\uFF0Cpost\u63D0\u4EA4\uFF0C\u53C2\u6570\u662Fusername\u548Cpassword\uFF0C\u8C03\u7528\uFF0C\u8FD4\u56DEtoken\u3002</p><p>\u5C06token\u653E\u5728header\u4E2D\uFF0C\u8BF7\u6C42\u63A5\u53E3\u3002ok</p><h3 id="_3-1-\u4E0D\u8DB3\u4E4B\u5904" tabindex="-1"><a class="header-anchor" href="#_3-1-\u4E0D\u8DB3\u4E4B\u5904" aria-hidden="true">#</a> 3.1 \u4E0D\u8DB3\u4E4B\u5904</h3><p>\u4E0A\u9762\u662F\u6700\u7B80\u5355\u7684\u5904\u7406\uFF0C\u8FD8\u6709\u5F88\u591A\u4F18\u5316\u7684\u5730\u65B9\u3002\u6BD4\u5982</p><ol><li>\u63A7\u5236token\u9500\u6BC1\uFF1F \u4F7F\u7528redis+token\u7EC4\u5408\uFF0C\u4E0D\u4EC5\u89E3\u6790token\uFF0C\u8FD8\u5224\u65ADredis\u662F\u5426\u6709\u8FD9\u4E2Atoken\u3002\u6CE8\u9500\u548C\u4E3B\u52A8\u5931\u6548token\uFF1A\u5220\u9664redis\u7684key</li><li>\u63A7\u5236token\u8FC7\u671F\u65F6\u95F4\uFF1F\u5982\u679C\u7528\u6237\u5728token\u8FC7\u671F\u524D1\u79D2\u8FD8\u5728\u64CD\u4F5C\uFF0C\u4E0B1\u79D2\u5C31\u9700\u8981\u91CD\u65B0\u767B\u5F55\uFF0C\u80AF\u5B9A\u4E0D\u597D 1\u3001\u8003\u8651\u52A0\u5165refreshToken\uFF0C\u8FC7\u671F\u65F6\u95F4\u6BD4token\u957F\uFF0C\u524D\u7AEF\u5728\u62FF\u5230token\u7684\u540C\u65F6\u83B7\u53D6\u8FC7\u671F\u65F6\u95F4\uFF0C\u5728\u8FC7\u671F\u524D\u4E00\u5206\u949F\u7528refreshToken\u8C03\u7528refresh\u63A5\u53E3\uFF0C\u91CD\u65B0\u83B7\u53D6\u65B0\u7684token\u3002 2\u3001 \u5C06\u8FD4\u56DE\u7684jwtToken\u8BBE\u7F6E\u77ED\u4E00\u70B9\u7684\u8FC7\u671F\u65F6\u95F4\uFF0Credis\u518D\u5B58\u8FD9\u4E2Atoken\uFF0C\u8FC7\u671F\u65F6\u95F4\u8BBE\u7F6E\u957F\u4E00\u70B9\u3002\u5982\u679C\u8BF7\u6C42\u8FC7\u6765token\u8FC7\u671F\uFF0C\u67E5\u8BE2redis\uFF0C\u5982\u679Credis\u8FD8\u5B58\u5728\uFF0C\u8FD4\u56DE\u65B0\u7684token\u3002\uFF08\u4E3A\u4EC0\u4E48redis\u7684\u8FC7\u671F\u65F6\u95F4\u5927\u4E8Etoken\u7684\uFF1F\u56E0\u4E3Aredis\u7684\u8FC7\u671F\u662F\u53EF\u63A7\u7684\uFF0C\u624B\u52A8\u53EF\u5220\u9664\uFF0C\u4EE5redis\u7684\u4E3A\u51C6\uFF09</li><li>\u6BCF\u6B21\u8BF7\u6C42\u90FD\u4F1A\u88AB<code>OncePerRequestFilter</code> \u62E6\u622A\uFF0C\u6BCF\u6B21\u90FD\u4F1A\u88AB<code>UserDetailService</code>\u4E2D\u7684\u83B7\u53D6\u7528\u6237\u6570\u636E\u8BF7\u6C42\u6570\u636E\u5E93\uFF0C\u53EF\u4EE5\u8003\u8651\u505A\u7F13\u5B58\uFF0C\u8FD8\u662F\u7528redis\u6216\u8005\u76F4\u63A5\u4FDD\u5B58\u5185\u5B58\u4E2D</li></ol><h3 id="_3-2-\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#_3-2-\u89E3\u51B3" aria-hidden="true">#</a> 3.2 \u89E3\u51B3</h3><blockquote><p>\u66F4\u65B0 2019-07-19</p></blockquote><p>\u8FD9\u662F\u9488\u5BF9\u4E0A\u9762\u76842.2\u8BF4\u7684\uFF0C\u4E5F\u5C31\u662Fredis\u65F6\u95F4\u4E45\u4E00\u70B9\uFF0Cjwt\u8FC7\u671F\u540E\u5982\u679Credis\u6CA1\u8FC7\u671F\uFF0C\u9881\u53D1\u65B0\u7684jwt\u3002 \u4E0D\u8FC7\u66F4\u63A8\u8350\u7684\u662F<strong>\u524D\u7AEF\u5224\u65AD\u8FC7\u671F\u65F6\u95F4\uFF0C\u5728\u8FC7\u671F\u4E4B\u524D\u8C03\u7528refresh\u63A5\u53E3\u62FF\u5230\u65B0\u7684jwt</strong>\u3002</p><p>\u4E3A\u4EC0\u4E48\u8FD9\u6837\uFF1F \u5982\u679Credis\u8FC7\u671F\u65F6\u95F4\u662F\u4E00\u5468\uFF0Cjwt\u662F\u4E00\u4E2A\u5C0F\u65F6\uFF0C\u90A3\u4E48\u4E00\u4E2A\u5C0F\u65F6\u540E\uFF0C\u62FF\u7740\u8FD9\u4E2A\u8FC7\u671F\u7684jwt\u53BB\u8C03\uFF0C\u5C31\u53EF\u4EE5\u60F3\u521B\u5EFA\u591A\u5C11\u4E2A\u65B0\u7684jwt\u5C31\u521B\u5EFA\uFF0C\u53EA\u8981\u6CA1\u8FC7redis\u7684\u8FC7\u671F\u65F6\u95F4\u3002 \u5F53\u7136\u8FD9\u662F\u5728\u6CA1\u5BF9\u8FC7\u671F\u7684jwt\u505A\u9650\u5236\u7684\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u8981\u8003\u8651\u505A\u9650\u5236\uFF0C\u6BD4\u5982\u5BF9redis\u7684value\u52A0\u4E00\u4E2A\u5B57\u6BB5\uFF0C\u4FDD\u5B58\u5F53\u524Djwt\uFF0C\u5237\u65B0\u540E\u5C31\u7528\u65B0\u7684jwt\u8986\u76D6\uFF0Crefresh\u63A5\u53E3\u5224\u65AD\u5F53\u524D\u7684\u8FC7\u671Fjwt\u662F\u4E0D\u662F\u548Credis\u8FD9\u4E2A\u4E00\u6837\u3002</p><p>\u603B\u4E4B\u8FD8\u9700\u8981\u5224\u65AD\u5237\u65B0token\u7684\u65F6\u5019\uFF0C\u8FC7\u671Fjwt\u662F\u5426\u5408\u6CD5\u7684\u95EE\u9898\u3002\u603B\u4E0D\u80FD\u53BB\u5E74\u7684\u8FC7\u671Ftoken\u4E5F\u62FF\u6765\u5237\u65B0\u5427\u3002 \u800C\u5728\u8FC7\u671F\u524D\u53BB\u5237\u65B0token\u7684\u8BDD\uFF0C\u81F3\u5C11\u4E0D\u4F1A\u53D1\u751F\u8FD9\u79CD\u4E8B\u60C5</p><p>\u4E0D\u8FC7\u6211\u8FD9\u91CC\u81EA\u5DF1\u5199demo\uFF0C\u91C7\u7528\u7684\u8FD8\u662F2.2\u7684\u65B9\u5F0F\uFF0C\u4E5F\u5C31\u662F\u8FC7\u671F\u540E\u7ED9\u4E2A\u65B0\u7684\uFF0C\u601D\u8DEF\u5982\u4E0B\uFF1A</p><ol><li>\u767B\u5F55\u540E\u9881\u53D1token\uFF0Ctoken\u6709\u4E2A\u65F6\u95F4\u6233\uFF0C\u540C\u65F6\u4EE5username\u62FC\u88C5\u4F5C\u4E3Akey\uFF0C\u4FDD\u5B58\u8FD9\u4E2A\u65F6\u95F4\u6233\u5230\u7F13\u5B58\uFF08redis\uFF0Ccache\uFF09</li><li>\u8BF7\u6C42\u6765\u4E86\uFF0C\u8FC7\u6EE4\u5668\u89E3\u6790token\uFF0C\u6CA1\u8FC7\u671F\u7684\u8BDD\uFF0C\u8FD8\u9700\u8981\u6BD4\u8F83\u7F13\u5B58\u4E2D\u7684\u65F6\u95F4\u6233\u548Ctoken\u7684\u65F6\u95F4\u6233\u662F\u4E0D\u662F\u4E00\u6837 \uFF0C\u5982\u679C\u65F6\u95F4\u6233\u4E0D\u4E00\u6837\uFF0C\u8BF4\u660E\u8BE5token\u4E0D\u80FD\u5237\u65B0\u3002\u65E0\u89C6</li><li>\u6CE8\u9500\uFF0C\u6E05\u9664\u7F13\u5B58\u6570\u636E</li></ol><p>\u8FD9\u6837\u5C31\u53EF\u4EE5\u907F\u514Dtoken\u8FC7\u671F\u540E\uFF0C\u6211\u8FD8\u80FD\u62FF\u5230\u8FD9\u4E2Atoken\u65E0\u9650\u5236\u7684refresh\u3002</p><p>\u4E0D\u8FC7\u8FD9\u4E2A\u8FD8\u662F\u6709\u7EC6\u8282\u65B9\u9762\u95EE\u9898\uFF0C\u5E76\u53D1\u4E0B\u540C\u65F6\u5237\u65B0token\u8FD9\u4E9B\u5E76\u6CA1\u6709\u8003\u8651\uFF0C\u90E8\u5206\u4EE3\u7801\u5982\u4E0B</p><blockquote><p>\u65E7\u7248\u672C, \u6700\u65B0\u5728\u5E95\u90E8</p></blockquote><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>package com.zgd.shop.web.auth.filter;

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
 * \u8FC7\u6EE4\u5668,\u5728\u8BF7\u6C42\u8FC7\u6765\u7684\u65F6\u5019,\u89E3\u6790\u8BF7\u6C42\u5934\u4E2D\u7684token,\u518D\u89E3\u6790token\u5F97\u5230\u7528\u6237\u4FE1\u606F,\u518D\u5B58\u5230SecurityContextHolder\u4E2D
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
        
    	//\u8BF7\u6C42\u5934\u4E3A accessToken
    	//\u8BF7\u6C42\u4F53\u4E3A Bearer token

    	String authHeader = request.getHeader(SecurityConstants.HEADER);

        if (authHeader != null &amp;&amp; authHeader.startsWith(SecurityConstants.TOKEN_SPLIT)) {

            final String authToken = authHeader.substring(SecurityConstants.TOKEN_SPLIT.length());

            String username;
            Claims claims;
            try {
                claims = JwtTokenUtil.parseToken(authToken);
                username = claims.getSubject();
            } catch (ExpiredJwtException e) {
                //token\u8FC7\u671F
                claims = e.getClaims();
                username = claims.getSubject();
                CustomerUserDetails userDetails = userSessionService.getSessionByUsername(username);
                if (userDetails != null){
                    //session\u672A\u8FC7\u671F\uFF0C\u6BD4\u5BF9\u65F6\u95F4\u6233\u662F\u5426\u4E00\u81F4\uFF0C\u662F\u5219\u91CD\u65B0\u9881\u53D1token
                    if (isSameTimestampToken(username,e.getClaims())){
                        userTokenManager.awardAccessToken(userDetails,true);
                    }
                }
            }
            //\u907F\u514D\u6BCF\u6B21\u8BF7\u6C42\u90FD\u8BF7\u6C42\u6570\u636E\u5E93\u67E5\u8BE2\u7528\u6237\u4FE1\u606F\uFF0C\u4ECE\u7F13\u5B58\u4E2D\u67E5\u8BE2
            CustomerUserDetails userDetails = userSessionService.getSessionByUsername(username);
            if (username != null &amp;&amp; SecurityContextHolder.getContext().getAuthentication() == null) {
//                UserDetails userDetails = customerUserDetailService.loadUserByUsername(username);
                if (userDetails != null) {
                    if(isSameTimestampToken(username,claims)){
                        //\u5FC5\u987Btoken\u89E3\u6790\u7684\u65F6\u95F4\u6233\u548Csession\u4FDD\u5B58\u7684\u4E00\u81F4
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
     * \u5224\u65AD\u662F\u5426\u540C\u4E00\u4E2A\u65F6\u95F4\u6233
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
 * token\u7BA1\u7406
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
   * \u9881\u53D1token
   * @param principal
   * @author zgd
   * @date 2019/7/19 15:34
   * @return void
   */
  public void awardAccessToken(CustomerUserDetails principal,boolean isRefresh) {
    //\u9881\u53D1token \u786E\u5B9A\u65F6\u95F4\u6233\uFF0C\u4FDD\u5B58\u5728session\u4E2D\u548Ctoken\u4E2D
    long mill = System.currentTimeMillis();
    userSessionService.saveSession(principal);
    userSessionService.saveTokenTimestamp(principal.getUsername(),mill);

    Map&lt;String,Object&gt; param = new HashMap&lt;&gt;(4);
    param.put(UserConstants.USER_ID,principal.getId());
    param.put(SecurityConstants.TIME_STAMP,mill);

    String token = JwtTokenUtil.generateToken(principal.getUsername(), param,userAuthProperties.getJwtExpirationTime());
    HashMap&lt;String, String&gt; map = Maps.newHashMapWithExpectedSize(1);
    map.put(SecurityConstants.HEADER,token);
    int code = isRefresh ? 201 : 200;
    ResponseUtil.outWithHeader(code,ResultUtil.success(),map);
  }
}

12345678910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br></div></div><h5 id="\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0" aria-hidden="true">#</a> \u66F4\u65B0</h5><blockquote><p>2019-09-30</p></blockquote><p>\u9488\u5BF9token\u89E3\u6790\u7684\u8FC7\u6EE4\u5668\u505A\u4E86\u4F18\u5316:</p><ol><li>\u5982\u679Credis\u7684session\u6CA1\u8FC7\u671F, \u4F46\u662F\u8BF7\u6C42\u5934\u7684token\u8FC7\u671F\u4E86, \u5224\u65AD\u65F6\u95F4\u6233\u4E00\u81F4\u540E, \u9881\u53D1\u65B0token\u5E76\u8FD4\u56DE</li><li>\u5982\u679Credis\u7684session\u6CA1\u8FC7\u671F, \u4F46\u662F\u8BF7\u6C42\u5934\u7684token\u8FC7\u671F\u4E86, \u65F6\u95F4\u6233\u4E0D\u4E00\u81F4, \u8BF4\u660E\u5F53\u524D\u8BF7\u6C42\u7684token\u65E0\u6CD5\u5237\u65B0token, \u8BBE\u7F6E\u54CD\u5E94\u7801\u4E3A401\u8FD4\u56DE</li><li>\u5982\u679C\u8BF7\u6C42\u5934\u7684token\u8FC7\u671F\u4E86, \u4F46\u662Fredis\u7684session\u5931\u6548\u6216\u672A\u627E\u5230, \u76F4\u63A5\u653E\u884C, \u4EA4\u7ED9\u540E\u9762\u7684\u6743\u9650\u6821\u9A8C\u5904\u7406(\u4E5F\u5C31\u662F\u6CA1\u6709\u7ED9\u4E0A\u4E0B\u6587<code>SecurityContextHolder</code>\u8BBE\u7F6E\u767B\u5F55\u4FE1\u606F, \u540E\u9762\u5982\u679C\u5224\u65AD\u8FD9\u4E2A\u8BF7\u6C42\u7F3A\u5C11\u6743\u9650\u4F1A\u81EA\u884C\u5904\u7406)</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>package com.zgd.shop.web.auth.filter;

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
 * \u8FC7\u6EE4\u5668,\u5728\u8BF7\u6C42\u8FC7\u6765\u7684\u65F6\u5019,\u89E3\u6790\u8BF7\u6C42\u5934\u4E2D\u7684token,\u518D\u89E3\u6790token\u5F97\u5230\u7528\u6237\u4FE1\u606F,\u518D\u5B58\u5230SecurityContextHolder\u4E2D
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
        
    	//\u8BF7\u6C42\u5934\u4E3A accessToken
    	//\u8BF7\u6C42\u4F53\u4E3A Bearer token

    	String authHeader = request.getHeader(SecurityConstants.HEADER);

        if (authHeader != null &amp;&amp; authHeader.startsWith(SecurityConstants.TOKEN_SPLIT)) {
            //\u8BF7\u6C42\u5934\u6709token
            final String authToken = authHeader.substring(SecurityConstants.TOKEN_SPLIT.length());

            String username;
            Claims claims;
            try {
                claims = JwtTokenUtil.parseToken(authToken);
                username = claims.getSubject();
            } catch (ExpiredJwtException e) {
                //token\u8FC7\u671F
                claims = e.getClaims();
                username = claims.getSubject();
                CustomerUserDetails userDetails = userSessionService.getSessionByUsername(username);
                if (userDetails != null){
                    //session\u672A\u8FC7\u671F\uFF0C\u6BD4\u5BF9\u65F6\u95F4\u6233\u662F\u5426\u4E00\u81F4\uFF0C\u662F\u5219\u91CD\u65B0\u9881\u53D1token
                    if (isSameTimestampToken(username,e.getClaims())){
                        userTokenManager.awardAccessToken(userDetails,true);
                        //\u76F4\u63A5\u8BBE\u7F6E\u54CD\u5E94\u7801\u4E3A201,\u76F4\u63A5\u8FD4\u56DE
                        return;
                    }else{
                        //\u65F6\u95F4\u6233\u4E0D\u4E00\u81F4.\u65E0\u6548token,\u65E0\u6CD5\u5237\u65B0token,\u54CD\u5E94\u7801401,\u524D\u7AEF\u8DF3\u8F6C\u767B\u5F55\u9875
                        ResponseUtil.out(HttpStatus.UNAUTHORIZED.value(),ResultUtil.failure(ErrorCodeConstants.REQUIRED_LOGIN_ERROR));
                        return;
                    }
                }else{
                    //\u76F4\u63A5\u653E\u884C,\u4EA4\u7ED9\u540E\u9762\u7684handler\u5904\u7406,\u5982\u679C\u5F53\u524D\u8BF7\u6C42\u662F\u9700\u8981\u8BBF\u95EE\u6743\u9650,\u5219\u4F1A\u7531CustomerRestAccessDeniedHandler\u5904\u7406
                    chain.doFilter(request, response);
                    return;
                }
            }

            //\u907F\u514D\u6BCF\u6B21\u8BF7\u6C42\u90FD\u8BF7\u6C42\u6570\u636E\u5E93\u67E5\u8BE2\u7528\u6237\u4FE1\u606F\uFF0C\u4ECE\u7F13\u5B58\u4E2D\u67E5\u8BE2
            CustomerUserDetails userDetails = userSessionService.getSessionByUsername(username);
            if (username != null &amp;&amp; SecurityContextHolder.getContext().getAuthentication() == null) {
//                UserDetails userDetails = customerUserDetailService.loadUserByUsername(username);
                if (userDetails != null) {
                    if(isSameTimestampToken(username,claims)){
                        //\u5FC5\u987Btoken\u89E3\u6790\u7684\u65F6\u95F4\u6233\u548Csession\u4FDD\u5B58\u7684\u4E00\u81F4
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
     * \u5224\u65AD\u662F\u5426\u540C\u4E00\u4E2A\u65F6\u95F4\u6233
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br></div></div>`,69);function r(l,i){return a}var b=n(e,[["render",r],["__file","SpringBoot+SpringSecurity\u524D\u540E\u7AEF\u5206\u79BB+Jwt\u7684\u6743\u9650\u8BA4\u8BC1.html.vue"]]);export{b as default};
