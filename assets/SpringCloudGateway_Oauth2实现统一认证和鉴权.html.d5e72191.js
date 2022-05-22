import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as r,c as d,a as e,b as s,F as a,d as c,e as i}from"./app.066b1726.js";const u={},v=c(`<h1 id="spring-cloud-gateway-oauth2-\u5B9E\u73B0\u7EDF\u4E00\u8BA4\u8BC1\u548C\u9274\u6743" tabindex="-1"><a class="header-anchor" href="#spring-cloud-gateway-oauth2-\u5B9E\u73B0\u7EDF\u4E00\u8BA4\u8BC1\u548C\u9274\u6743" aria-hidden="true">#</a> Spring Cloud Gateway + Oauth2 \u5B9E\u73B0\u7EDF\u4E00\u8BA4\u8BC1\u548C\u9274\u6743</h1><h2 id="\u6458\u8981" tabindex="-1"><a class="header-anchor" href="#\u6458\u8981" aria-hidden="true">#</a> \u6458\u8981</h2><p>\u6700\u8FD1\u53D1\u73B0\u4E86\u4E00\u4E2A\u5F88\u597D\u7684\u5FAE\u670D\u52A1\u6743\u9650\u89E3\u51B3\u65B9\u6848\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BA4\u8BC1\u670D\u52A1\u8FDB\u884C\u7EDF\u4E00\u8BA4\u8BC1\uFF0C\u7136\u540E\u901A\u8FC7\u7F51\u5173\u6765\u7EDF\u4E00\u6821\u9A8C\u8BA4\u8BC1\u548C\u9274\u6743\u3002\u6B64\u65B9\u6848\u4E3A\u76EE\u524D\u6700\u65B0\u65B9\u6848\uFF0C\u4EC5\u652F\u6301Spring Boot 2.2.0\u3001Spring Cloud Hoxton \u4EE5\u4E0A\u7248\u672C\uFF0C\u672C\u6587\u5C06\u8BE6\u7EC6\u4ECB\u7ECD\u8BE5\u65B9\u6848\u7684\u5B9E\u73B0\uFF0C\u5E0C\u671B\u5BF9\u5927\u5BB6\u6709\u6240\u5E2E\u52A9\uFF01</p><h2 id="\u524D\u7F6E\u77E5\u8BC6" tabindex="-1"><a class="header-anchor" href="#\u524D\u7F6E\u77E5\u8BC6" aria-hidden="true">#</a> \u524D\u7F6E\u77E5\u8BC6</h2><blockquote><p>\u6211\u4EEC\u5C06\u91C7\u7528Nacos\u4F5C\u4E3A\u6CE8\u518C\u4E2D\u5FC3\uFF0CGateway\u4F5C\u4E3A\u7F51\u5173\uFF0C\u4F7F\u7528<code>nimbus-jose-jwt</code>JWT\u5E93\u64CD\u4F5CJWT\u4EE4\u724C</p></blockquote><h2 id="\u5E94\u7528\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u67B6\u6784" aria-hidden="true">#</a> \u5E94\u7528\u67B6\u6784</h2><blockquote><p>\u6211\u4EEC\u7406\u60F3\u7684\u89E3\u51B3\u65B9\u6848\u5E94\u8BE5\u662F\u8FD9\u6837\u7684\uFF0C\u8BA4\u8BC1\u670D\u52A1\u8D1F\u8D23\u8BA4\u8BC1\uFF0C\u7F51\u5173\u8D1F\u8D23\u6821\u9A8C\u8BA4\u8BC1\u548C\u9274\u6743\uFF0C\u5176\u4ED6API\u670D\u52A1\u8D1F\u8D23\u5904\u7406\u81EA\u5DF1\u7684\u4E1A\u52A1\u903B\u8F91\u3002\u5B89\u5168\u76F8\u5173\u7684\u903B\u8F91\u53EA\u5B58\u5728\u4E8E\u8BA4\u8BC1\u670D\u52A1\u548C\u7F51\u5173\u670D\u52A1\u4E2D\uFF0C\u5176\u4ED6\u670D\u52A1\u53EA\u662F\u5355\u7EAF\u5730\u63D0\u4F9B\u670D\u52A1\u800C\u6CA1\u6709\u4EFB\u4F55\u5B89\u5168\u76F8\u5173\u903B\u8F91\u3002</p></blockquote><p>\u76F8\u5173\u670D\u52A1\u5212\u5206\uFF1A</p><ul><li>micro-oauth2-gateway\uFF1A\u7F51\u5173\u670D\u52A1\uFF0C\u8D1F\u8D23\u8BF7\u6C42\u8F6C\u53D1\u548C\u9274\u6743\u529F\u80FD\uFF0C\u6574\u5408Spring Security+Oauth2\uFF1B</li><li>micro-oauth2-auth\uFF1AOauth2\u8BA4\u8BC1\u670D\u52A1\uFF0C\u8D1F\u8D23\u5BF9\u767B\u5F55\u7528\u6237\u8FDB\u884C\u8BA4\u8BC1\uFF0C\u6574\u5408Spring Security+Oauth2\uFF1B</li><li>micro-oauth2-api\uFF1A\u53D7\u4FDD\u62A4\u7684API\u670D\u52A1\uFF0C\u7528\u6237\u9274\u6743\u901A\u8FC7\u540E\u53EF\u4EE5\u8BBF\u95EE\u8BE5\u670D\u52A1\uFF0C\u4E0D\u6574\u5408Spring Security+Oauth2\u3002</li></ul><h2 id="\u65B9\u6848\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6848\u5B9E\u73B0" aria-hidden="true">#</a> \u65B9\u6848\u5B9E\u73B0</h2><blockquote><p>\u4E0B\u9762\u4ECB\u7ECD\u4E0B\u8FD9\u5957\u89E3\u51B3\u65B9\u6848\u7684\u5177\u4F53\u5B9E\u73B0\uFF0C\u4F9D\u6B21\u642D\u5EFA\u8BA4\u8BC1\u670D\u52A1\u3001\u7F51\u5173\u670D\u52A1\u548CAPI\u670D\u52A1\u3002</p></blockquote><h3 id="micro-oauth2-auth" tabindex="-1"><a class="header-anchor" href="#micro-oauth2-auth" aria-hidden="true">#</a> micro-oauth2-auth</h3><blockquote><p>\u6211\u4EEC\u9996\u5148\u6765\u642D\u5EFA\u8BA4\u8BC1\u670D\u52A1\uFF0C\u5B83\u5C06\u4F5C\u4E3AOauth2\u7684\u8BA4\u8BC1\u670D\u52A1\u4F7F\u7528\uFF0C\u5E76\u4E14\u7F51\u5173\u670D\u52A1\u7684\u9274\u6743\u529F\u80FD\u4E5F\u9700\u8981\u4F9D\u8D56\u5B83\u3002</p></blockquote><ul><li>\u5728<code>pom.xml</code>\u4E2D\u6DFB\u52A0\u76F8\u5173\u4F9D\u8D56\uFF0C\u4E3B\u8981\u662FSpring Security\u3001Oauth2\u3001JWT\u3001Redis\u76F8\u5173\u4F9D\u8D56\uFF1B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependencies&gt;
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
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5728<code>application.yml</code>\u4E2D\u6DFB\u52A0\u76F8\u5173\u914D\u7F6E\uFF0C\u4E3B\u8981\u662FNacos\u548CRedis\u76F8\u5173\u914D\u7F6E\uFF1B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server:
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
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4F7F\u7528<code>keytool</code>\u751F\u6210RSA\u8BC1\u4E66<code>jwt.jks</code>\uFF0C\u590D\u5236\u5230<code>resource</code>\u76EE\u5F55\u4E0B\uFF0C\u5728JDK\u7684<code>bin</code>\u76EE\u5F55\u4E0B\u4F7F\u7528\u5982\u4E0B\u547D\u4EE4\u5373\u53EF\uFF1B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>keytool -genkey -alias jwt -keyalg RSA -keystore jwt.jks
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u521B\u5EFA<code>UserServiceImpl</code>\u7C7B\u5B9E\u73B0Spring Security\u7684<code>UserDetailsService</code>\u63A5\u53E3\uFF0C\u7528\u4E8E\u52A0\u8F7D\u7528\u6237\u4FE1\u606F\uFF1B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * \u7528\u6237\u7BA1\u7406\u4E1A\u52A1\u7C7B
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
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6DFB\u52A0\u8BA4\u8BC1\u670D\u52A1\u76F8\u5173\u914D\u7F6E<code>Oauth2ServerConfig</code>\uFF0C\u9700\u8981\u914D\u7F6E\u52A0\u8F7D\u7528\u6237\u4FE1\u606F\u7684\u670D\u52A1<code>UserServiceImpl</code>\u53CARSA\u7684\u94A5\u5319\u5BF9<code>KeyPair</code>\uFF1B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * \u8BA4\u8BC1\u670D\u52A1\u5668\u914D\u7F6E
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
        enhancerChain.setTokenEnhancers(delegates); //\u914D\u7F6EJWT\u7684\u5185\u5BB9\u589E\u5F3A\u5668
        endpoints.authenticationManager(authenticationManager)
                .userDetailsService(userDetailsService) //\u914D\u7F6E\u52A0\u8F7D\u7528\u6237\u4FE1\u606F\u7684\u670D\u52A1
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
        //\u4ECEclasspath\u4E0B\u7684\u8BC1\u4E66\u4E2D\u83B7\u53D6\u79D8\u94A5\u5BF9
        KeyStoreKeyFactory keyStoreKeyFactory = new KeyStoreKeyFactory(new ClassPathResource(&quot;jwt.jks&quot;), &quot;123456&quot;.toCharArray());
        return keyStoreKeyFactory.getKeyPair(&quot;jwt&quot;, &quot;123456&quot;.toCharArray());
    }

}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5982\u679C\u4F60\u60F3\u5F80JWT\u4E2D\u6DFB\u52A0\u81EA\u5B9A\u4E49\u4FE1\u606F\u7684\u8BDD\uFF0C\u6BD4\u5982\u8BF4<code>\u767B\u5F55\u7528\u6237\u7684ID</code>\uFF0C\u53EF\u4EE5\u81EA\u5DF1\u5B9E\u73B0<code>TokenEnhancer</code>\u63A5\u53E3\uFF1B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * JWT\u5185\u5BB9\u589E\u5F3A\u5668
 * Created by macro on 2020/6/19.
 */
@Component
public class JwtTokenEnhancer implements TokenEnhancer {
    @Override
    public OAuth2AccessToken enhance(OAuth2AccessToken accessToken, OAuth2Authentication authentication) {
        SecurityUser securityUser = (SecurityUser) authentication.getPrincipal();
        Map&lt;String, Object&gt; info = new HashMap&lt;&gt;();
        //\u628A\u7528\u6237ID\u8BBE\u7F6E\u5230JWT\u4E2D
        info.put(&quot;id&quot;, securityUser.getId());
        ((DefaultOAuth2AccessToken) accessToken).setAdditionalInformation(info);
        return accessToken;
    }
}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7531\u4E8E\u6211\u4EEC\u7684\u7F51\u5173\u670D\u52A1\u9700\u8981RSA\u7684\u516C\u94A5\u6765\u9A8C\u8BC1\u7B7E\u540D\u662F\u5426\u5408\u6CD5\uFF0C\u6240\u4EE5\u8BA4\u8BC1\u670D\u52A1\u9700\u8981\u6709\u4E2A\u63A5\u53E3\u628A\u516C\u94A5\u66B4\u9732\u51FA\u6765\uFF1B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * \u83B7\u53D6RSA\u516C\u94A5\u63A5\u53E3
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
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4E0D\u8981\u5FD8\u4E86\u8FD8\u9700\u8981\u914D\u7F6ESpring Security\uFF0C\u5141\u8BB8\u83B7\u53D6\u516C\u94A5\u63A5\u53E3\u7684\u8BBF\u95EE\uFF1B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * SpringSecurity\u914D\u7F6E
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
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u521B\u5EFA\u4E00\u4E2A\u8D44\u6E90\u670D\u52A1<code>ResourceServiceImpl</code>\uFF0C\u521D\u59CB\u5316\u7684\u65F6\u5019\u628A\u8D44\u6E90\u4E0E\u89D2\u8272\u5339\u914D\u5173\u7CFB\u7F13\u5B58\u5230Redis\u4E2D\uFF0C\u65B9\u4FBF\u7F51\u5173\u670D\u52A1\u8FDB\u884C\u9274\u6743\u7684\u65F6\u5019\u83B7\u53D6\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * \u8D44\u6E90\u4E0E\u89D2\u8272\u5339\u914D\u5173\u7CFB\u7BA1\u7406\u4E1A\u52A1\u7C7B
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
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="micro-oauth2-gateway" tabindex="-1"><a class="header-anchor" href="#micro-oauth2-gateway" aria-hidden="true">#</a> micro-oauth2-gateway</h3><blockquote><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u53EF\u4EE5\u642D\u5EFA\u7F51\u5173\u670D\u52A1\u4E86\uFF0C\u5B83\u5C06\u4F5C\u4E3AOauth2\u7684\u8D44\u6E90\u670D\u52A1\u3001\u5BA2\u6237\u7AEF\u670D\u52A1\u4F7F\u7528\uFF0C\u5BF9\u8BBF\u95EE\u5FAE\u670D\u52A1\u7684\u8BF7\u6C42\u8FDB\u884C\u7EDF\u4E00\u7684\u6821\u9A8C\u8BA4\u8BC1\u548C\u9274\u6743\u64CD\u4F5C\u3002</p></blockquote><ul><li>\u5728<code>pom.xml</code>\u4E2D\u6DFB\u52A0\u76F8\u5173\u4F9D\u8D56\uFF0C\u4E3B\u8981\u662FGateway\u3001Oauth2\u548CJWT\u76F8\u5173\u4F9D\u8D56\uFF1B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependencies&gt;
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
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5728<code>application.yml</code>\u4E2D\u6DFB\u52A0\u76F8\u5173\u914D\u7F6E\uFF0C\u4E3B\u8981\u662F\u8DEF\u7531\u89C4\u5219\u7684\u914D\u7F6E\u3001Oauth2\u4E2DRSA\u516C\u94A5\u7684\u914D\u7F6E\u53CA\u8DEF\u7531\u767D\u540D\u5355\u7684\u914D\u7F6E\uFF1B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server:
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
      routes: #\u914D\u7F6E\u8DEF\u7531\u89C4\u5219
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
          enabled: true #\u5F00\u542F\u4ECE\u6CE8\u518C\u4E2D\u5FC3\u52A8\u6001\u521B\u5EFA\u8DEF\u7531\u7684\u529F\u80FD
          lower-case-service-id: true #\u4F7F\u7528\u5C0F\u5199\u670D\u52A1\u540D\uFF0C\u9ED8\u8BA4\u662F\u5927\u5199
  security:
    oauth2:
      resourceserver:
        jwt:
          jwk-set-uri: &#39;http://localhost:9401/rsa/publicKey&#39; #\u914D\u7F6ERSA\u7684\u516C\u94A5\u8BBF\u95EE\u5730\u5740
  redis:
    database: 0
    port: 6379
    host: localhost
    password: 
secure:
  ignore:
    urls: #\u914D\u7F6E\u767D\u540D\u5355\u8DEF\u5F84
      - &quot;/actuator/**&quot;
      - &quot;/auth/oauth/token&quot;
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5BF9\u7F51\u5173\u670D\u52A1\u8FDB\u884C\u914D\u7F6E\u5B89\u5168\u914D\u7F6E\uFF0C\u7531\u4E8EGateway\u4F7F\u7528\u7684\u662F<code>WebFlux</code>\uFF0C\u6240\u4EE5\u9700\u8981\u4F7F\u7528<code>@EnableWebFluxSecurity</code>\u6CE8\u89E3\u5F00\u542F\uFF1B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * \u8D44\u6E90\u670D\u52A1\u5668\u914D\u7F6E
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
                .pathMatchers(ArrayUtil.toArray(ignoreUrlsConfig.getUrls(),String.class)).permitAll()//\u767D\u540D\u5355\u914D\u7F6E
                .anyExchange().access(authorizationManager)//\u9274\u6743\u7BA1\u7406\u5668\u914D\u7F6E
                .and().exceptionHandling()
                .accessDeniedHandler(restfulAccessDeniedHandler)//\u5904\u7406\u672A\u6388\u6743
                .authenticationEntryPoint(restAuthenticationEntryPoint)//\u5904\u7406\u672A\u8BA4\u8BC1
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
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5728<code>WebFluxSecurity</code>\u4E2D\u81EA\u5B9A\u4E49\u9274\u6743\u64CD\u4F5C\u9700\u8981\u5B9E\u73B0<code>ReactiveAuthorizationManager</code>\u63A5\u53E3\uFF1B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * \u9274\u6743\u7BA1\u7406\u5668\uFF0C\u7528\u4E8E\u5224\u65AD\u662F\u5426\u6709\u8D44\u6E90\u7684\u8BBF\u95EE\u6743\u9650
 * Created by macro on 2020/6/19.
 */
@Component
public class AuthorizationManager implements ReactiveAuthorizationManager&lt;AuthorizationContext&gt; {
    @Autowired
    private RedisTemplate&lt;String,Object&gt; redisTemplate;

    @Override
    public Mono&lt;AuthorizationDecision&gt; check(Mono&lt;Authentication&gt; mono, AuthorizationContext authorizationContext) {
        //\u4ECERedis\u4E2D\u83B7\u53D6\u5F53\u524D\u8DEF\u5F84\u53EF\u8BBF\u95EE\u89D2\u8272\u5217\u8868
        URI uri = authorizationContext.getExchange().getRequest().getURI();
        Object obj = redisTemplate.opsForHash().get(RedisConstant.RESOURCE_ROLES_MAP, uri.getPath());
        List&lt;String&gt; authorities = Convert.toList(String.class,obj);
        authorities = authorities.stream().map(i -&gt; i = AuthConstant.AUTHORITY_PREFIX + i).collect(Collectors.toList());
        //\u8BA4\u8BC1\u901A\u8FC7\u4E14\u89D2\u8272\u5339\u914D\u7684\u7528\u6237\u53EF\u8BBF\u95EE\u5F53\u524D\u8DEF\u5F84
        return mono
                .filter(Authentication::isAuthenticated)
                .flatMapIterable(Authentication::getAuthorities)
                .map(GrantedAuthority::getAuthority)
                .any(authorities::contains)
                .map(AuthorizationDecision::new)
                .defaultIfEmpty(new AuthorizationDecision(false));
    }

}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8FD9\u91CC\u6211\u4EEC\u8FD8\u9700\u8981\u5B9E\u73B0\u4E00\u4E2A\u5168\u5C40\u8FC7\u6EE4\u5668<code>AuthGlobalFilter</code>\uFF0C\u5F53\u9274\u6743\u901A\u8FC7\u540E\u5C06JWT\u4EE4\u724C\u4E2D\u7684\u7528\u6237\u4FE1\u606F\u89E3\u6790\u51FA\u6765\uFF0C\u7136\u540E\u5B58\u5165\u8BF7\u6C42\u7684Header\u4E2D\uFF0C\u8FD9\u6837\u540E\u7EED\u670D\u52A1\u5C31\u4E0D\u9700\u8981\u89E3\u6790JWT\u4EE4\u724C\u4E86\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4ECE\u8BF7\u6C42\u7684Header\u4E2D\u83B7\u53D6\u5230\u7528\u6237\u4FE1\u606F\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * \u5C06\u767B\u5F55\u7528\u6237\u7684JWT\u8F6C\u5316\u6210\u7528\u6237\u4FE1\u606F\u7684\u5168\u5C40\u8FC7\u6EE4\u5668
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
            //\u4ECEtoken\u4E2D\u89E3\u6790\u7528\u6237\u4FE1\u606F\u5E76\u8BBE\u7F6E\u5230Header\u4E2D\u53BB
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

\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="micro-oauth2-api" tabindex="-1"><a class="header-anchor" href="#micro-oauth2-api" aria-hidden="true">#</a> micro-oauth2-api</h3><blockquote><p>\u6700\u540E\u6211\u4EEC\u642D\u5EFA\u4E00\u4E2AAPI\u670D\u52A1\uFF0C\u5B83\u4E0D\u4F1A\u96C6\u6210\u548C\u5B9E\u73B0\u4EFB\u4F55\u5B89\u5168\u76F8\u5173\u903B\u8F91\uFF0C\u5168\u9760\u7F51\u5173\u6765\u4FDD\u62A4\u5B83\u3002</p></blockquote><ul><li>\u5728<code>pom.xml</code>\u4E2D\u6DFB\u52A0\u76F8\u5173\u4F9D\u8D56\uFF0C\u5C31\u6DFB\u52A0\u4E86\u4E00\u4E2Aweb\u4F9D\u8D56\uFF1B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependencies&gt;
    &lt;dependency&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
    &lt;/dependency&gt;
&lt;/dependencies&gt;
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5728<code>application.yml</code>\u6DFB\u52A0\u76F8\u5173\u914D\u7F6E\uFF0C\u5F88\u5E38\u89C4\u7684\u914D\u7F6E\uFF1B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server:
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
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u521B\u5EFA\u4E00\u4E2A\u6D4B\u8BD5\u63A5\u53E3\uFF0C\u7F51\u5173\u9A8C\u8BC1\u901A\u8FC7\u5373\u53EF\u8BBF\u95EE\uFF1B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * \u6D4B\u8BD5\u63A5\u53E3
 * Created by macro on 2020/6/19.
 */
@RestController
public class HelloController {

    @GetMapping(&quot;/hello&quot;)
    public String hello() {
        return &quot;Hello World.&quot;;
    }

}
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u521B\u5EFA\u4E00\u4E2A<code>LoginUserHolder</code>\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u4ECE\u8BF7\u6C42\u7684Header\u4E2D\u76F4\u63A5\u83B7\u53D6\u767B\u5F55\u7528\u6237\u4FE1\u606F\uFF1B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * \u83B7\u53D6\u767B\u5F55\u7528\u6237\u4FE1\u606F
 * Created by macro on 2020/6/17.
 */
@Component
public class LoginUserHolder {

    public UserDTO getCurrentUser(){
        //\u4ECEHeader\u4E2D\u83B7\u53D6\u7528\u6237\u4FE1\u606F
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
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u521B\u5EFA\u4E00\u4E2A\u83B7\u53D6\u5F53\u524D\u7528\u6237\u4FE1\u606F\u7684\u63A5\u53E3\u3002</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/**
 * \u83B7\u53D6\u767B\u5F55\u7528\u6237\u4FE1\u606F\u63A5\u53E3
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
\u590D\u5236\u4EE3\u7801
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u529F\u80FD\u6F14\u793A" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD\u6F14\u793A" aria-hidden="true">#</a> \u529F\u80FD\u6F14\u793A</h2><blockquote><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u6765\u6F14\u793A\u4E0B\u5FAE\u670D\u52A1\u7CFB\u7EDF\u4E2D\u7684\u7EDF\u4E00\u8BA4\u8BC1\u9274\u6743\u529F\u80FD\uFF0C\u6240\u6709\u8BF7\u6C42\u5747\u901A\u8FC7\u7F51\u5173\u8BBF\u95EE\u3002</p></blockquote><ul><li>\u5728\u6B64\u4E4B\u524D\u5148\u542F\u52A8\u6211\u4EEC\u7684Nacos\u548CRedis\u670D\u52A1\uFF0C\u7136\u540E\u4F9D\u6B21\u542F\u52A8<code>micro-oauth2-auth</code>\u3001<code>micro-oauth2-gateway</code>\u53CA<code>micro-oauth2-api</code>\u670D\u52A1\uFF1B</li></ul><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/12/17342f6da5ee93bd~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp" alt="img" loading="lazy"></p>`,59),o=i("\u4F7F\u7528\u5BC6\u7801\u6A21\u5F0F\u83B7\u53D6JWT\u4EE4\u724C\uFF0C\u8BBF\u95EE\u5730\u5740\uFF1A"),m={href:"https://link.juejin.cn?target=http%3A%2F%2Flocalhost%3A9201%2Fauth%2Foauth%2Ftoken",target:"_blank",rel:"noopener noreferrer"},b=i("http://localhost:9201/auth/oauth/token"),g=e("p",null,[e("img",{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/12/17342f6da61f640e~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp",alt:"img",loading:"lazy"})],-1),p=i("\u4F7F\u7528\u83B7\u53D6\u5230\u7684JWT\u4EE4\u724C\u8BBF\u95EE\u9700\u8981\u6743\u9650\u7684\u63A5\u53E3\uFF0C\u8BBF\u95EE\u5730\u5740\uFF1A"),h={href:"https://link.juejin.cn?target=http%3A%2F%2Flocalhost%3A9201%2Fapi%2Fhello",target:"_blank",rel:"noopener noreferrer"},y=i("http://localhost:9201/api/hello"),x=e("p",null,[e("img",{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/12/17342f6da5591caf~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp",alt:"img",loading:"lazy"})],-1),A=i("\u4F7F\u7528\u83B7\u53D6\u5230\u7684JWT\u4EE4\u724C\u8BBF\u95EE\u83B7\u53D6\u5F53\u524D\u767B\u5F55\u7528\u6237\u4FE1\u606F\u7684\u63A5\u53E3\uFF0C\u8BBF\u95EE\u5730\u5740\uFF1A"),f={href:"https://link.juejin.cn?target=http%3A%2F%2Flocalhost%3A9201%2Fapi%2Fuser%2FcurrentUser",target:"_blank",rel:"noopener noreferrer"},w=i("http://localhost:9201/api/user/currentUser"),C=e("p",null,[e("img",{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/12/17342f6da6c59fd8~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp",alt:"img",loading:"lazy"})],-1),S=i("\u5F53JWT\u4EE4\u724C\u8FC7\u671F\u65F6\uFF0C\u4F7F\u7528refresh_token\u83B7\u53D6\u65B0\u7684JWT\u4EE4\u724C\uFF0C\u8BBF\u95EE\u5730\u5740\uFF1A"),q={href:"https://link.juejin.cn?target=http%3A%2F%2Flocalhost%3A9201%2Fauth%2Foauth%2Ftoken",target:"_blank",rel:"noopener noreferrer"},k=i("http://localhost:9201/auth/oauth/token"),_=e("p",null,[e("img",{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/12/17342f6da69ef4c1~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp",alt:"img",loading:"lazy"})],-1),I=i("\u4F7F\u7528\u6CA1\u6709\u8BBF\u95EE\u6743\u9650\u7684"),T=e("code",null,"andy",-1),E=i("\u8D26\u53F7\u767B\u5F55\uFF0C\u8BBF\u95EE\u63A5\u53E3\u65F6\u4F1A\u8FD4\u56DE\u5982\u4E0B\u4FE1\u606F\uFF0C\u8BBF\u95EE\u5730\u5740\uFF1A"),R={href:"https://link.juejin.cn?target=http%3A%2F%2Flocalhost%3A9201%2Fapi%2Fhello",target:"_blank",rel:"noopener noreferrer"},O=i("http://localhost:9201/api/hello"),j=e("p",null,[e("img",{src:"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/12/17342f6da665d734~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp",alt:"img",loading:"lazy"})],-1);function U(F,M){const n=t("ExternalLinkIcon");return r(),d(a,null,[v,e("ul",null,[e("li",null,[o,e("a",m,[b,s(n)])])]),g,e("ul",null,[e("li",null,[p,e("a",h,[y,s(n)])])]),x,e("ul",null,[e("li",null,[A,e("a",f,[w,s(n)])])]),C,e("ul",null,[e("li",null,[S,e("a",q,[k,s(n)])])]),_,e("ul",null,[e("li",null,[I,T,E,e("a",R,[O,s(n)])])]),j],64)}var P=l(u,[["render",U],["__file","SpringCloudGateway+Oauth2\u5B9E\u73B0\u7EDF\u4E00\u8BA4\u8BC1\u548C\u9274\u6743.html.vue"]]);export{P as default};
