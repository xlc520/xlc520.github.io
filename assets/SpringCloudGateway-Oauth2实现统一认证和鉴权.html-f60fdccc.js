import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as d,c as r,b as e,d as i,e as s,a}from"./app-e061b827.js";const c={},u=a(`<h1 id="spring-cloud-gateway-oauth2-实现统一认证和鉴权" tabindex="-1"><a class="header-anchor" href="#spring-cloud-gateway-oauth2-实现统一认证和鉴权" aria-hidden="true">#</a> Spring Cloud Gateway - Oauth2 实现统一认证和鉴权</h1><h2 id="摘要" tabindex="-1"><a class="header-anchor" href="#摘要" aria-hidden="true">#</a> 摘要</h2><p>最近发现了一个很好的微服务权限解决方案，可以通过认证服务进行统一认证，然后通过网关来统一校验认证和鉴权。此方案为目前最新方案，仅支持Spring Boot 2.2.0、Spring Cloud Hoxton 以上版本，本文将详细介绍该方案的实现，希望对大家有所帮助！</p><h2 id="前置知识" tabindex="-1"><a class="header-anchor" href="#前置知识" aria-hidden="true">#</a> 前置知识</h2><blockquote><p>我们将采用Nacos作为注册中心，Gateway作为网关，使用<code>nimbus-jose-jwt</code>JWT库操作JWT令牌</p></blockquote><h2 id="应用架构" tabindex="-1"><a class="header-anchor" href="#应用架构" aria-hidden="true">#</a> 应用架构</h2><blockquote><p>我们理想的解决方案应该是这样的，认证服务负责认证，网关负责校验认证和鉴权，其他API服务负责处理自己的业务逻辑。安全相关的逻辑只存在于认证服务和网关服务中，其他服务只是单纯地提供服务而没有任何安全相关逻辑。</p></blockquote><p>相关服务划分：</p><ul><li>micro-oauth2-gateway：网关服务，负责请求转发和鉴权功能，整合Spring Security+Oauth2；</li><li>micro-oauth2-auth：Oauth2认证服务，负责对登录用户进行认证，整合Spring Security+Oauth2；</li><li>micro-oauth2-api：受保护的API服务，用户鉴权通过后可以访问该服务，不整合Spring Security+Oauth2。</li></ul><h2 id="方案实现" tabindex="-1"><a class="header-anchor" href="#方案实现" aria-hidden="true">#</a> 方案实现</h2><blockquote><p>下面介绍下这套解决方案的具体实现，依次搭建认证服务、网关服务和API服务。</p></blockquote><h3 id="micro-oauth2-auth" tabindex="-1"><a class="header-anchor" href="#micro-oauth2-auth" aria-hidden="true">#</a> micro-oauth2-auth</h3><blockquote><p>我们首先来搭建认证服务，它将作为Oauth2的认证服务使用，并且网关服务的鉴权功能也需要依赖它。</p></blockquote><ul><li>在<code>pom.xml</code>中添加相关依赖，主要是Spring Security、Oauth2、JWT、Redis相关依赖；</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependencies&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
        &lt;artifactId&gt;spring-cloud-starter-oauth2&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;com.nimbusds&lt;/groupId&gt;
        &lt;artifactId&gt;nimbus-jose-jwt&lt;/artifactId&gt;
        &lt;version&gt;8.16&lt;/version&gt;
    &lt;/dependency&gt;
    &lt;!-- redis --&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在<code>application.yml</code>中添加相关配置，主要是Nacos和Redis相关配置；</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server:
  port: 9401
spring:
  profiles:
    active: dev
  application:
    name: micro-oauth2-auth
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848
  jackson:
    date-format: yyyy-MM-dd HH:mm:ss
  redis:
    database: 0
    port: 6379
    host: localhost
    password: 
management:
  endpoints:
    web:
      exposure:
        include: &quot;*&quot;
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用<code>keytool</code>生成RSA证书<code>jwt.jks</code>，复制到<code>resource</code>目录下，在JDK的<code>bin</code>目录下使用如下命令即可；</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>keytool -genkey -alias jwt -keyalg RSA -keystore jwt.jks
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建<code>UserServiceImpl</code>类实现Spring Security的<code>UserDetailsService</code>接口，用于加载用户信息；</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 用户管理业务类
 * Created by macro on 2020/6/19.
 */
@Service
public class UserServiceImpl implements UserDetailsService {

    private List&lt;UserDTO&gt; userList;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostConstruct
    public void initData() {
        String password = passwordEncoder.encode(&quot;123456&quot;);
        userList = new ArrayList&lt;&gt;();
        userList.add(new UserDTO(1L,&quot;macro&quot;, password,1, CollUtil.toList(&quot;ADMIN&quot;)));
        userList.add(new UserDTO(2L,&quot;andy&quot;, password,1, CollUtil.toList(&quot;TEST&quot;)));
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        List&lt;UserDTO&gt; findUserList = userList.stream().filter(item -&gt; item.getUsername().equals(username)).collect(Collectors.toList());
        if (CollUtil.isEmpty(findUserList)) {
            throw new UsernameNotFoundException(MessageConstant.USERNAME_PASSWORD_ERROR);
        }
        SecurityUser securityUser = new SecurityUser(findUserList.get(0));
        if (!securityUser.isEnabled()) {
            throw new DisabledException(MessageConstant.ACCOUNT_DISABLED);
        } else if (!securityUser.isAccountNonLocked()) {
            throw new LockedException(MessageConstant.ACCOUNT_LOCKED);
        } else if (!securityUser.isAccountNonExpired()) {
            throw new AccountExpiredException(MessageConstant.ACCOUNT_EXPIRED);
        } else if (!securityUser.isCredentialsNonExpired()) {
            throw new CredentialsExpiredException(MessageConstant.CREDENTIALS_EXPIRED);
        }
        return securityUser;
    }

}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>添加认证服务相关配置<code>Oauth2ServerConfig</code>，需要配置加载用户信息的服务<code>UserServiceImpl</code>及RSA的钥匙对<code>KeyPair</code>；</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 认证服务器配置
 * Created by macro on 2020/6/19.
 */
@AllArgsConstructor
@Configuration
@EnableAuthorizationServer
public class Oauth2ServerConfig extends AuthorizationServerConfigurerAdapter {

    private final PasswordEncoder passwordEncoder;
    private final UserServiceImpl userDetailsService;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenEnhancer jwtTokenEnhancer;

    @Override
    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
        clients.inMemory()
                .withClient(&quot;client-app&quot;)
                .secret(passwordEncoder.encode(&quot;123456&quot;))
                .scopes(&quot;all&quot;)
                .authorizedGrantTypes(&quot;password&quot;, &quot;refresh_token&quot;)
                .accessTokenValiditySeconds(3600)
                .refreshTokenValiditySeconds(86400);
    }

    @Override
    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
        TokenEnhancerChain enhancerChain = new TokenEnhancerChain();
        List&lt;TokenEnhancer&gt; delegates = new ArrayList&lt;&gt;();
        delegates.add(jwtTokenEnhancer); 
        delegates.add(accessTokenConverter());
        enhancerChain.setTokenEnhancers(delegates); //配置JWT的内容增强器
        endpoints.authenticationManager(authenticationManager)
                .userDetailsService(userDetailsService) //配置加载用户信息的服务
                .accessTokenConverter(accessTokenConverter())
                .tokenEnhancer(enhancerChain);
    }

    @Override
    public void configure(AuthorizationServerSecurityConfigurer security) throws Exception {
        security.allowFormAuthenticationForClients();
    }

    @Bean
    public JwtAccessTokenConverter accessTokenConverter() {
        JwtAccessTokenConverter jwtAccessTokenConverter = new JwtAccessTokenConverter();
        jwtAccessTokenConverter.setKeyPair(keyPair());
        return jwtAccessTokenConverter;
    }

    @Bean
    public KeyPair keyPair() {
        //从classpath下的证书中获取秘钥对
        KeyStoreKeyFactory keyStoreKeyFactory = new KeyStoreKeyFactory(new ClassPathResource(&quot;jwt.jks&quot;), &quot;123456&quot;.toCharArray());
        return keyStoreKeyFactory.getKeyPair(&quot;jwt&quot;, &quot;123456&quot;.toCharArray());
    }

}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>如果你想往JWT中添加自定义信息的话，比如说<code>登录用户的ID</code>，可以自己实现<code>TokenEnhancer</code>接口；</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * JWT内容增强器
 * Created by macro on 2020/6/19.
 */
@Component
public class JwtTokenEnhancer implements TokenEnhancer {
    @Override
    public OAuth2AccessToken enhance(OAuth2AccessToken accessToken, OAuth2Authentication authentication) {
        SecurityUser securityUser = (SecurityUser) authentication.getPrincipal();
        Map&lt;String, Object&gt; info = new HashMap&lt;&gt;();
        //把用户ID设置到JWT中
        info.put(&quot;id&quot;, securityUser.getId());
        ((DefaultOAuth2AccessToken) accessToken).setAdditionalInformation(info);
        return accessToken;
    }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>由于我们的网关服务需要RSA的公钥来验证签名是否合法，所以认证服务需要有个接口把公钥暴露出来；</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 获取RSA公钥接口
 * Created by macro on 2020/6/19.
 */
@RestController
public class KeyPairController {

    @Autowired
    private KeyPair keyPair;

    @GetMapping(&quot;/rsa/publicKey&quot;)
    public Map&lt;String, Object&gt; getKey() {
        RSAPublicKey publicKey = (RSAPublicKey) keyPair.getPublic();
        RSAKey key = new RSAKey.Builder(publicKey).build();
        return new JWKSet(key).toJSONObject();
    }

}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不要忘了还需要配置Spring Security，允许获取公钥接口的访问；</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * SpringSecurity配置
 * Created by macro on 2020/6/19.
 */
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .requestMatchers(EndpointRequest.toAnyEndpoint()).permitAll()
                .antMatchers(&quot;/rsa/publicKey&quot;).permitAll()
                .anyRequest().authenticated();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建一个资源服务<code>ResourceServiceImpl</code>，初始化的时候把资源与角色匹配关系缓存到Redis中，方便网关服务进行鉴权的时候获取。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 资源与角色匹配关系管理业务类
 * Created by macro on 2020/6/19.
 */
@Service
public class ResourceServiceImpl {

    private Map&lt;String, List&lt;String&gt;&gt; resourceRolesMap;
    @Autowired
    private RedisTemplate&lt;String,Object&gt; redisTemplate;

    @PostConstruct
    public void initData() {
        resourceRolesMap = new TreeMap&lt;&gt;();
        resourceRolesMap.put(&quot;/api/hello&quot;, CollUtil.toList(&quot;ADMIN&quot;));
        resourceRolesMap.put(&quot;/api/user/currentUser&quot;, CollUtil.toList(&quot;ADMIN&quot;, &quot;TEST&quot;));
        redisTemplate.opsForHash().putAll(RedisConstant.RESOURCE_ROLES_MAP, resourceRolesMap);
    }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="micro-oauth2-gateway" tabindex="-1"><a class="header-anchor" href="#micro-oauth2-gateway" aria-hidden="true">#</a> micro-oauth2-gateway</h3><blockquote><p>接下来我们就可以搭建网关服务了，它将作为Oauth2的资源服务、客户端服务使用，对访问微服务的请求进行统一的校验认证和鉴权操作。</p></blockquote><ul><li>在<code>pom.xml</code>中添加相关依赖，主要是Gateway、Oauth2和JWT相关依赖；</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependencies&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-webflux&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
        &lt;artifactId&gt;spring-cloud-starter-gateway&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.security&lt;/groupId&gt;
        &lt;artifactId&gt;spring-security-config&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.security&lt;/groupId&gt;
        &lt;artifactId&gt;spring-security-oauth2-resource-server&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.security&lt;/groupId&gt;
        &lt;artifactId&gt;spring-security-oauth2-client&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.security&lt;/groupId&gt;
        &lt;artifactId&gt;spring-security-oauth2-jose&lt;/artifactId&gt;
    &lt;/dependency&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;com.nimbusds&lt;/groupId&gt;
        &lt;artifactId&gt;nimbus-jose-jwt&lt;/artifactId&gt;
        &lt;version&gt;8.16&lt;/version&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在<code>application.yml</code>中添加相关配置，主要是路由规则的配置、Oauth2中RSA公钥的配置及路由白名单的配置；</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server:
  port: 9201
spring:
  profiles:
    active: dev
  application:
    name: micro-oauth2-gateway
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848
    gateway:
      routes: #配置路由规则
        - id: oauth2-api-route
          uri: lb://micro-oauth2-api
          predicates:
            - Path=/api/**
          filters:
            - StripPrefix=1
        - id: oauth2-auth-route
          uri: lb://micro-oauth2-auth
          predicates:
            - Path=/auth/**
          filters:
            - StripPrefix=1
      discovery:
        locator:
          enabled: true #开启从注册中心动态创建路由的功能
          lower-case-service-id: true #使用小写服务名，默认是大写
  security:
    oauth2:
      resourceserver:
        jwt:
          jwk-set-uri: &#39;http://localhost:9401/rsa/publicKey&#39; #配置RSA的公钥访问地址
  redis:
    database: 0
    port: 6379
    host: localhost
    password: 
secure:
  ignore:
    urls: #配置白名单路径
      - &quot;/actuator/**&quot;
      - &quot;/auth/oauth/token&quot;
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>对网关服务进行配置安全配置，由于Gateway使用的是<code>WebFlux</code>，所以需要使用<code>@EnableWebFluxSecurity</code>注解开启；</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 资源服务器配置
 * Created by macro on 2020/6/19.
 */
@AllArgsConstructor
@Configuration
@EnableWebFluxSecurity
public class ResourceServerConfig {
    private final AuthorizationManager authorizationManager;
    private final IgnoreUrlsConfig ignoreUrlsConfig;
    private final RestfulAccessDeniedHandler restfulAccessDeniedHandler;
    private final RestAuthenticationEntryPoint restAuthenticationEntryPoint;

    @Bean
    public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {
        http.oauth2ResourceServer().jwt()
                .jwtAuthenticationConverter(jwtAuthenticationConverter());
        http.authorizeExchange()
                .pathMatchers(ArrayUtil.toArray(ignoreUrlsConfig.getUrls(),String.class)).permitAll()//白名单配置
                .anyExchange().access(authorizationManager)//鉴权管理器配置
                .and().exceptionHandling()
                .accessDeniedHandler(restfulAccessDeniedHandler)//处理未授权
                .authenticationEntryPoint(restAuthenticationEntryPoint)//处理未认证
                .and().csrf().disable();
        return http.build();
    }

    @Bean
    public Converter&lt;Jwt, ? extends Mono&lt;? extends AbstractAuthenticationToken&gt;&gt; jwtAuthenticationConverter() {
        JwtGrantedAuthoritiesConverter jwtGrantedAuthoritiesConverter = new JwtGrantedAuthoritiesConverter();
        jwtGrantedAuthoritiesConverter.setAuthorityPrefix(AuthConstant.AUTHORITY_PREFIX);
        jwtGrantedAuthoritiesConverter.setAuthoritiesClaimName(AuthConstant.AUTHORITY_CLAIM_NAME);
        JwtAuthenticationConverter jwtAuthenticationConverter = new JwtAuthenticationConverter();
        jwtAuthenticationConverter.setJwtGrantedAuthoritiesConverter(jwtGrantedAuthoritiesConverter);
        return new ReactiveJwtAuthenticationConverterAdapter(jwtAuthenticationConverter);
    }

}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在<code>WebFluxSecurity</code>中自定义鉴权操作需要实现<code>ReactiveAuthorizationManager</code>接口；</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 鉴权管理器，用于判断是否有资源的访问权限
 * Created by macro on 2020/6/19.
 */
@Component
public class AuthorizationManager implements ReactiveAuthorizationManager&lt;AuthorizationContext&gt; {
    @Autowired
    private RedisTemplate&lt;String,Object&gt; redisTemplate;

    @Override
    public Mono&lt;AuthorizationDecision&gt; check(Mono&lt;Authentication&gt; mono, AuthorizationContext authorizationContext) {
        //从Redis中获取当前路径可访问角色列表
        URI uri = authorizationContext.getExchange().getRequest().getURI();
        Object obj = redisTemplate.opsForHash().get(RedisConstant.RESOURCE_ROLES_MAP, uri.getPath());
        List&lt;String&gt; authorities = Convert.toList(String.class,obj);
        authorities = authorities.stream().map(i -&gt; i = AuthConstant.AUTHORITY_PREFIX + i).collect(Collectors.toList());
        //认证通过且角色匹配的用户可访问当前路径
        return mono
                .filter(Authentication::isAuthenticated)
                .flatMapIterable(Authentication::getAuthorities)
                .map(GrantedAuthority::getAuthority)
                .any(authorities::contains)
                .map(AuthorizationDecision::new)
                .defaultIfEmpty(new AuthorizationDecision(false));
    }

}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>这里我们还需要实现一个全局过滤器<code>AuthGlobalFilter</code>，当鉴权通过后将JWT令牌中的用户信息解析出来，然后存入请求的Header中，这样后续服务就不需要解析JWT令牌了，可以直接从请求的Header中获取到用户信息。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 将登录用户的JWT转化成用户信息的全局过滤器
 * Created by macro on 2020/6/17.
 */
@Component
public class AuthGlobalFilter implements GlobalFilter, Ordered {

    private static Logger LOGGER = LoggerFactory.getLogger(AuthGlobalFilter.class);

    @Override
    public Mono&lt;Void&gt; filter(ServerWebExchange exchange, GatewayFilterChain chain) {
        String token = exchange.getRequest().getHeaders().getFirst(&quot;Authorization&quot;);
        if (StrUtil.isEmpty(token)) {
            return chain.filter(exchange);
        }
        try {
            //从token中解析用户信息并设置到Header中去
            String realToken = token.replace(&quot;Bearer &quot;, &quot;&quot;);
            JWSObject jwsObject = JWSObject.parse(realToken);
            String userStr = jwsObject.getPayload().toString();
            LOGGER.info(&quot;AuthGlobalFilter.filter() user:{}&quot;,userStr);
            ServerHttpRequest request = exchange.getRequest().mutate().header(&quot;user&quot;, userStr).build();
            exchange = exchange.mutate().request(request).build();
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return chain.filter(exchange);
    }

    @Override
    public int getOrder() {
        return 0;
    }
}

复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="micro-oauth2-api" tabindex="-1"><a class="header-anchor" href="#micro-oauth2-api" aria-hidden="true">#</a> micro-oauth2-api</h3><blockquote><p>最后我们搭建一个API服务，它不会集成和实现任何安全相关逻辑，全靠网关来保护它。</p></blockquote><ul><li>在<code>pom.xml</code>中添加相关依赖，就添加了一个web依赖；</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependencies&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在<code>application.yml</code>添加相关配置，很常规的配置；</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server:
  port: 9501
spring:
  profiles:
    active: dev
  application:
    name: micro-oauth2-api
  cloud:
    nacos:
      discovery:
        server-addr: localhost:8848
management:
  endpoints:
    web:
      exposure:
        include: &quot;*&quot;
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建一个测试接口，网关验证通过即可访问；</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 测试接口
 * Created by macro on 2020/6/19.
 */
@RestController
public class HelloController {

    @GetMapping(&quot;/hello&quot;)
    public String hello() {
        return &quot;Hello World.&quot;;
    }

}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建一个<code>LoginUserHolder</code>组件，用于从请求的Header中直接获取登录用户信息；</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 获取登录用户信息
 * Created by macro on 2020/6/17.
 */
@Component
public class LoginUserHolder {

    public UserDTO getCurrentUser(){
        //从Header中获取用户信息
        ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = servletRequestAttributes.getRequest();
        String userStr = request.getHeader(&quot;user&quot;);
        JSONObject userJsonObject = new JSONObject(userStr);
        UserDTO userDTO = new UserDTO();
        userDTO.setUsername(userJsonObject.getStr(&quot;user_name&quot;));
        userDTO.setId(Convert.toLong(userJsonObject.get(&quot;id&quot;)));
        userDTO.setRoles(Convert.toList(String.class,userJsonObject.get(&quot;authorities&quot;)));
        return userDTO;
    }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建一个获取当前用户信息的接口。</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * 获取登录用户信息接口
 * Created by macro on 2020/6/19.
 */
@RestController
@RequestMapping(&quot;/user&quot;)
public class UserController{

    @Autowired
    private LoginUserHolder loginUserHolder;

    @GetMapping(&quot;/currentUser&quot;)
    public UserDTO currentUser() {
        return loginUserHolder.getCurrentUser();
    }

}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="功能演示" tabindex="-1"><a class="header-anchor" href="#功能演示" aria-hidden="true">#</a> 功能演示</h2><blockquote><p>接下来我们来演示下微服务系统中的统一认证鉴权功能，所有请求均通过网关访问。</p></blockquote><ul><li>在此之前先启动我们的Nacos和Redis服务，然后依次启动<code>micro-oauth2-auth</code>、<code>micro-oauth2-gateway</code>及<code>micro-oauth2-api</code>服务；</li></ul><figure><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/12/17342f6da5ee93bd~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,59),v={href:"https://link.juejin.cn?target=http%3A%2F%2Flocalhost%3A9201%2Fauth%2Foauth%2Ftoken",target:"_blank",rel:"noopener noreferrer"},o=e("figure",null,[e("img",{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/12/17342f6da61f640e~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp",alt:"img",tabindex:"0",loading:"lazy"}),e("figcaption",null,"img")],-1),m={href:"https://link.juejin.cn?target=http%3A%2F%2Flocalhost%3A9201%2Fapi%2Fhello",target:"_blank",rel:"noopener noreferrer"},b=e("figure",null,[e("img",{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/12/17342f6da5591caf~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp",alt:"img",tabindex:"0",loading:"lazy"}),e("figcaption",null,"img")],-1),g={href:"https://link.juejin.cn?target=http%3A%2F%2Flocalhost%3A9201%2Fapi%2Fuser%2FcurrentUser",target:"_blank",rel:"noopener noreferrer"},p=e("figure",null,[e("img",{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/12/17342f6da6c59fd8~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp",alt:"img",tabindex:"0",loading:"lazy"}),e("figcaption",null,"img")],-1),h={href:"https://link.juejin.cn?target=http%3A%2F%2Flocalhost%3A9201%2Fauth%2Foauth%2Ftoken",target:"_blank",rel:"noopener noreferrer"},y=e("figure",null,[e("img",{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/12/17342f6da69ef4c1~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp",alt:"img",tabindex:"0",loading:"lazy"}),e("figcaption",null,"img")],-1),x=e("code",null,"andy",-1),f={href:"https://link.juejin.cn?target=http%3A%2F%2Flocalhost%3A9201%2Fapi%2Fhello",target:"_blank",rel:"noopener noreferrer"},A=e("figure",null,[e("img",{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/12/17342f6da665d734~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp",alt:"img",tabindex:"0",loading:"lazy"}),e("figcaption",null,"img")],-1);function w(C,S){const n=t("ExternalLinkIcon");return d(),r("div",null,[u,e("ul",null,[e("li",null,[i("使用密码模式获取JWT令牌，访问地址："),e("a",v,[i("http://localhost:9201/auth/oauth/token"),s(n)])])]),o,e("ul",null,[e("li",null,[i("使用获取到的JWT令牌访问需要权限的接口，访问地址："),e("a",m,[i("http://localhost:9201/api/hello"),s(n)])])]),b,e("ul",null,[e("li",null,[i("使用获取到的JWT令牌访问获取当前登录用户信息的接口，访问地址："),e("a",g,[i("http://localhost:9201/api/user/currentUser"),s(n)])])]),p,e("ul",null,[e("li",null,[i("当JWT令牌过期时，使用refresh_token获取新的JWT令牌，访问地址："),e("a",h,[i("http://localhost:9201/auth/oauth/token"),s(n)])])]),y,e("ul",null,[e("li",null,[i("使用没有访问权限的"),x,i("账号登录，访问接口时会返回如下信息，访问地址："),e("a",f,[i("http://localhost:9201/api/hello"),s(n)])])]),A])}const I=l(c,[["render",w],["__file","SpringCloudGateway-Oauth2实现统一认证和鉴权.html.vue"]]);export{I as default};
