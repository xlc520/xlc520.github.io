import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,a as i}from"./app-DDjfOKh-.js";const l={};function p(t,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="spring-cloud-gateway-oauth2-实现统一认证和鉴权" tabindex="-1"><a class="header-anchor" href="#spring-cloud-gateway-oauth2-实现统一认证和鉴权"><span>Spring Cloud Gateway - Oauth2 实现统一认证和鉴权</span></a></h1><h2 id="摘要" tabindex="-1"><a class="header-anchor" href="#摘要"><span>摘要</span></a></h2><p>最近发现了一个很好的微服务权限解决方案，可以通过认证服务进行统一认证，然后通过网关来统一校验认证和鉴权。此方案为目前最新方案，仅支持 Spring Boot 2.2.0、Spring Cloud Hoxton 以上版本，本文将详细介绍该方案的实现，希望对大家有所帮助！</p><h2 id="前置知识" tabindex="-1"><a class="header-anchor" href="#前置知识"><span>前置知识</span></a></h2><blockquote><p>我们将采用 Nacos 作为注册中心，Gateway 作为网关，使用<code>nimbus-jose-jwt</code>JWT 库操作 JWT 令牌</p></blockquote><h2 id="应用架构" tabindex="-1"><a class="header-anchor" href="#应用架构"><span>应用架构</span></a></h2><blockquote><p>我们理想的解决方案应该是这样的，认证服务负责认证，网关负责校验认证和鉴权，其他 API 服务负责处理自己的业务逻辑。安全相关的逻辑只存在于认证服务和网关服务中，其他服务只是单纯地提供服务而没有任何安全相关逻辑。</p></blockquote><p>相关服务划分：</p><ul><li>micro-oauth2-gateway：网关服务，负责请求转发和鉴权功能，整合 Spring Security+Oauth2；</li><li>micro-oauth2-auth：Oauth2 认证服务，负责对登录用户进行认证，整合 Spring Security+Oauth2；</li><li>micro-oauth2-api：受保护的 API 服务，用户鉴权通过后可以访问该服务，不整合 Spring Security+Oauth2。</li></ul><h2 id="方案实现" tabindex="-1"><a class="header-anchor" href="#方案实现"><span>方案实现</span></a></h2><blockquote><p>下面介绍下这套解决方案的具体实现，依次搭建认证服务、网关服务和 API 服务。</p></blockquote><h3 id="micro-oauth2-auth" tabindex="-1"><a class="header-anchor" href="#micro-oauth2-auth"><span>micro-oauth2-auth</span></a></h3><blockquote><p>我们首先来搭建认证服务，它将作为 Oauth2 的认证服务使用，并且网关服务的鉴权功能也需要依赖它。</p></blockquote><ul><li>在<code>pom.xml</code>中添加相关依赖，主要是 Spring Security、Oauth2、JWT、Redis 相关依赖；</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependencies&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-boot-starter-security&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-cloud-starter-oauth2&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;com.nimbusds&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;nimbus-jose-jwt&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;8.16&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;!-- redis --&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-boot-starter-data-redis&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;/dependencies&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在<code>application.yml</code>中添加相关配置，主要是 Nacos 和 Redis 相关配置；</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>server:</span></span>
<span class="line"><span>  port: 9401</span></span>
<span class="line"><span>spring:</span></span>
<span class="line"><span>  profiles:</span></span>
<span class="line"><span>    active: dev</span></span>
<span class="line"><span>  application:</span></span>
<span class="line"><span>    name: micro-oauth2-auth</span></span>
<span class="line"><span>  cloud:</span></span>
<span class="line"><span>    nacos:</span></span>
<span class="line"><span>      discovery:</span></span>
<span class="line"><span>        server-addr: localhost:8848</span></span>
<span class="line"><span>  jackson:</span></span>
<span class="line"><span>    date-format: yyyy-MM-dd HH:mm:ss</span></span>
<span class="line"><span>  redis:</span></span>
<span class="line"><span>    database: 0</span></span>
<span class="line"><span>    port: 6379</span></span>
<span class="line"><span>    host: localhost</span></span>
<span class="line"><span>    password: </span></span>
<span class="line"><span>management:</span></span>
<span class="line"><span>  endpoints:</span></span>
<span class="line"><span>    web:</span></span>
<span class="line"><span>      exposure:</span></span>
<span class="line"><span>        include: &quot;*&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用<code>keytool</code>生成 RSA 证书<code>jwt.jks</code>，复制到<code>resource</code>目录下，在 JDK 的<code>bin</code>目录下使用如下命令即可；</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>keytool -genkey -alias jwt -keyalg RSA -keystore jwt.jks</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>创建<code>UserServiceImpl</code>类实现 Spring Security 的<code>UserDetailsService</code>接口，用于加载用户信息；</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 用户管理业务类</span></span>
<span class="line"><span> * Created by macro on 2020/6/19.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class UserServiceImpl implements UserDetailsService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private List&lt;UserDTO&gt; userList;</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private PasswordEncoder passwordEncoder;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @PostConstruct</span></span>
<span class="line"><span>    public void initData() {</span></span>
<span class="line"><span>        String password = passwordEncoder.encode(&quot;123456&quot;);</span></span>
<span class="line"><span>        userList = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        userList.add(new UserDTO(1L,&quot;macro&quot;, password,1, CollUtil.toList(&quot;ADMIN&quot;)));</span></span>
<span class="line"><span>        userList.add(new UserDTO(2L,&quot;andy&quot;, password,1, CollUtil.toList(&quot;TEST&quot;)));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {</span></span>
<span class="line"><span>        List&lt;UserDTO&gt; findUserList = userList.stream().filter(item -&gt; item.getUsername().equals(username)).collect(Collectors.toList());</span></span>
<span class="line"><span>        if (CollUtil.isEmpty(findUserList)) {</span></span>
<span class="line"><span>            throw new UsernameNotFoundException(MessageConstant.USERNAME_PASSWORD_ERROR);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        SecurityUser securityUser = new SecurityUser(findUserList.get(0));</span></span>
<span class="line"><span>        if (!securityUser.isEnabled()) {</span></span>
<span class="line"><span>            throw new DisabledException(MessageConstant.ACCOUNT_DISABLED);</span></span>
<span class="line"><span>        } else if (!securityUser.isAccountNonLocked()) {</span></span>
<span class="line"><span>            throw new LockedException(MessageConstant.ACCOUNT_LOCKED);</span></span>
<span class="line"><span>        } else if (!securityUser.isAccountNonExpired()) {</span></span>
<span class="line"><span>            throw new AccountExpiredException(MessageConstant.ACCOUNT_EXPIRED);</span></span>
<span class="line"><span>        } else if (!securityUser.isCredentialsNonExpired()) {</span></span>
<span class="line"><span>            throw new CredentialsExpiredException(MessageConstant.CREDENTIALS_EXPIRED);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return securityUser;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>添加认证服务相关配置<code>Oauth2ServerConfig</code>，需要配置加载用户信息的服务<code>UserServiceImpl</code>及 RSA 的钥匙对<code>KeyPair</code>；</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 认证服务器配置</span></span>
<span class="line"><span> * Created by macro on 2020/6/19.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@AllArgsConstructor</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>@EnableAuthorizationServer</span></span>
<span class="line"><span>public class Oauth2ServerConfig extends AuthorizationServerConfigurerAdapter {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private final PasswordEncoder passwordEncoder;</span></span>
<span class="line"><span>    private final UserServiceImpl userDetailsService;</span></span>
<span class="line"><span>    private final AuthenticationManager authenticationManager;</span></span>
<span class="line"><span>    private final JwtTokenEnhancer jwtTokenEnhancer;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void configure(ClientDetailsServiceConfigurer clients) throws Exception {</span></span>
<span class="line"><span>        clients.inMemory()</span></span>
<span class="line"><span>                .withClient(&quot;client-app&quot;)</span></span>
<span class="line"><span>                .secret(passwordEncoder.encode(&quot;123456&quot;))</span></span>
<span class="line"><span>                .scopes(&quot;all&quot;)</span></span>
<span class="line"><span>                .authorizedGrantTypes(&quot;password&quot;, &quot;refresh_token&quot;)</span></span>
<span class="line"><span>                .accessTokenValiditySeconds(3600)</span></span>
<span class="line"><span>                .refreshTokenValiditySeconds(86400);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {</span></span>
<span class="line"><span>        TokenEnhancerChain enhancerChain = new TokenEnhancerChain();</span></span>
<span class="line"><span>        List&lt;TokenEnhancer&gt; delegates = new ArrayList&lt;&gt;();</span></span>
<span class="line"><span>        delegates.add(jwtTokenEnhancer); </span></span>
<span class="line"><span>        delegates.add(accessTokenConverter());</span></span>
<span class="line"><span>        enhancerChain.setTokenEnhancers(delegates); //配置JWT的内容增强器</span></span>
<span class="line"><span>        endpoints.authenticationManager(authenticationManager)</span></span>
<span class="line"><span>                .userDetailsService(userDetailsService) //配置加载用户信息的服务</span></span>
<span class="line"><span>                .accessTokenConverter(accessTokenConverter())</span></span>
<span class="line"><span>                .tokenEnhancer(enhancerChain);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void configure(AuthorizationServerSecurityConfigurer security) throws Exception {</span></span>
<span class="line"><span>        security.allowFormAuthenticationForClients();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public JwtAccessTokenConverter accessTokenConverter() {</span></span>
<span class="line"><span>        JwtAccessTokenConverter jwtAccessTokenConverter = new JwtAccessTokenConverter();</span></span>
<span class="line"><span>        jwtAccessTokenConverter.setKeyPair(keyPair());</span></span>
<span class="line"><span>        return jwtAccessTokenConverter;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public KeyPair keyPair() {</span></span>
<span class="line"><span>        //从classpath下的证书中获取秘钥对</span></span>
<span class="line"><span>        KeyStoreKeyFactory keyStoreKeyFactory = new KeyStoreKeyFactory(new ClassPathResource(&quot;jwt.jks&quot;), &quot;123456&quot;.toCharArray());</span></span>
<span class="line"><span>        return keyStoreKeyFactory.getKeyPair(&quot;jwt&quot;, &quot;123456&quot;.toCharArray());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>如果你想往 JWT 中添加自定义信息的话，比如说<code>登录用户的ID</code>，可以自己实现<code>TokenEnhancer</code>接口；</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * JWT内容增强器</span></span>
<span class="line"><span> * Created by macro on 2020/6/19.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class JwtTokenEnhancer implements TokenEnhancer {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public OAuth2AccessToken enhance(OAuth2AccessToken accessToken, OAuth2Authentication authentication) {</span></span>
<span class="line"><span>        SecurityUser securityUser = (SecurityUser) authentication.getPrincipal();</span></span>
<span class="line"><span>        Map&lt;String, Object&gt; info = new HashMap&lt;&gt;();</span></span>
<span class="line"><span>        //把用户ID设置到JWT中</span></span>
<span class="line"><span>        info.put(&quot;id&quot;, securityUser.getId());</span></span>
<span class="line"><span>        ((DefaultOAuth2AccessToken) accessToken).setAdditionalInformation(info);</span></span>
<span class="line"><span>        return accessToken;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>由于我们的网关服务需要 RSA 的公钥来验证签名是否合法，所以认证服务需要有个接口把公钥暴露出来；</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 获取RSA公钥接口</span></span>
<span class="line"><span> * Created by macro on 2020/6/19.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@RestController</span></span>
<span class="line"><span>public class KeyPairController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private KeyPair keyPair;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @GetMapping(&quot;/rsa/publicKey&quot;)</span></span>
<span class="line"><span>    public Map&lt;String, Object&gt; getKey() {</span></span>
<span class="line"><span>        RSAPublicKey publicKey = (RSAPublicKey) keyPair.getPublic();</span></span>
<span class="line"><span>        RSAKey key = new RSAKey.Builder(publicKey).build();</span></span>
<span class="line"><span>        return new JWKSet(key).toJSONObject();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不要忘了还需要配置 Spring Security，允许获取公钥接口的访问；</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * SpringSecurity配置</span></span>
<span class="line"><span> * Created by macro on 2020/6/19.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>@EnableWebSecurity</span></span>
<span class="line"><span>public class WebSecurityConfig extends WebSecurityConfigurerAdapter {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    protected void configure(HttpSecurity http) throws Exception {</span></span>
<span class="line"><span>        http.authorizeRequests()</span></span>
<span class="line"><span>                .requestMatchers(EndpointRequest.toAnyEndpoint()).permitAll()</span></span>
<span class="line"><span>                .antMatchers(&quot;/rsa/publicKey&quot;).permitAll()</span></span>
<span class="line"><span>                .anyRequest().authenticated();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public AuthenticationManager authenticationManagerBean() throws Exception {</span></span>
<span class="line"><span>        return super.authenticationManagerBean();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public PasswordEncoder passwordEncoder() {</span></span>
<span class="line"><span>        return new BCryptPasswordEncoder();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建一个资源服务<code>ResourceServiceImpl</code>，初始化的时候把资源与角色匹配关系缓存到 Redis 中，方便网关服务进行鉴权的时候获取。</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 资源与角色匹配关系管理业务类</span></span>
<span class="line"><span> * Created by macro on 2020/6/19.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class ResourceServiceImpl {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private Map&lt;String, List&lt;String&gt;&gt; resourceRolesMap;</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private RedisTemplate&lt;String,Object&gt; redisTemplate;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @PostConstruct</span></span>
<span class="line"><span>    public void initData() {</span></span>
<span class="line"><span>        resourceRolesMap = new TreeMap&lt;&gt;();</span></span>
<span class="line"><span>        resourceRolesMap.put(&quot;/api/hello&quot;, CollUtil.toList(&quot;ADMIN&quot;));</span></span>
<span class="line"><span>        resourceRolesMap.put(&quot;/api/user/currentUser&quot;, CollUtil.toList(&quot;ADMIN&quot;, &quot;TEST&quot;));</span></span>
<span class="line"><span>        redisTemplate.opsForHash().putAll(RedisConstant.RESOURCE_ROLES_MAP, resourceRolesMap);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="micro-oauth2-gateway" tabindex="-1"><a class="header-anchor" href="#micro-oauth2-gateway"><span>micro-oauth2-gateway</span></a></h3><blockquote><p>接下来我们就可以搭建网关服务了，它将作为 Oauth2 的资源服务、客户端服务使用，对访问微服务的请求进行统一的校验认证和鉴权操作。</p></blockquote><ul><li>在<code>pom.xml</code>中添加相关依赖，主要是 Gateway、Oauth2 和 JWT 相关依赖；</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependencies&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-boot-starter-webflux&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-cloud-starter-gateway&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework.security&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-security-config&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework.security&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-security-oauth2-resource-server&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework.security&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-security-oauth2-client&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework.security&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-security-oauth2-jose&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;com.nimbusds&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;nimbus-jose-jwt&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;version&gt;8.16&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;/dependencies&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在<code>application.yml</code>中添加相关配置，主要是路由规则的配置、Oauth2 中 RSA 公钥的配置及路由白名单的配置；</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>server:</span></span>
<span class="line"><span>  port: 9201</span></span>
<span class="line"><span>spring:</span></span>
<span class="line"><span>  profiles:</span></span>
<span class="line"><span>    active: dev</span></span>
<span class="line"><span>  application:</span></span>
<span class="line"><span>    name: micro-oauth2-gateway</span></span>
<span class="line"><span>  cloud:</span></span>
<span class="line"><span>    nacos:</span></span>
<span class="line"><span>      discovery:</span></span>
<span class="line"><span>        server-addr: localhost:8848</span></span>
<span class="line"><span>    gateway:</span></span>
<span class="line"><span>      routes: #配置路由规则</span></span>
<span class="line"><span>        - id: oauth2-api-route</span></span>
<span class="line"><span>          uri: lb://micro-oauth2-api</span></span>
<span class="line"><span>          predicates:</span></span>
<span class="line"><span>            - Path=/api/**</span></span>
<span class="line"><span>          filters:</span></span>
<span class="line"><span>            - StripPrefix=1</span></span>
<span class="line"><span>        - id: oauth2-auth-route</span></span>
<span class="line"><span>          uri: lb://micro-oauth2-auth</span></span>
<span class="line"><span>          predicates:</span></span>
<span class="line"><span>            - Path=/auth/**</span></span>
<span class="line"><span>          filters:</span></span>
<span class="line"><span>            - StripPrefix=1</span></span>
<span class="line"><span>      discovery:</span></span>
<span class="line"><span>        locator:</span></span>
<span class="line"><span>          enabled: true #开启从注册中心动态创建路由的功能</span></span>
<span class="line"><span>          lower-case-service-id: true #使用小写服务名，默认是大写</span></span>
<span class="line"><span>  security:</span></span>
<span class="line"><span>    oauth2:</span></span>
<span class="line"><span>      resourceserver:</span></span>
<span class="line"><span>        jwt:</span></span>
<span class="line"><span>          jwk-set-uri: &#39;http://localhost:9401/rsa/publicKey&#39; #配置RSA的公钥访问地址</span></span>
<span class="line"><span>  redis:</span></span>
<span class="line"><span>    database: 0</span></span>
<span class="line"><span>    port: 6379</span></span>
<span class="line"><span>    host: localhost</span></span>
<span class="line"><span>    password: </span></span>
<span class="line"><span>secure:</span></span>
<span class="line"><span>  ignore:</span></span>
<span class="line"><span>    urls: #配置白名单路径</span></span>
<span class="line"><span>      - &quot;/actuator/**&quot;</span></span>
<span class="line"><span>      - &quot;/auth/oauth/token&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>对网关服务进行配置安全配置，由于 Gateway 使用的是<code>WebFlux</code>，所以需要使用<code>@EnableWebFluxSecurity</code>注解开启；</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 资源服务器配置</span></span>
<span class="line"><span> * Created by macro on 2020/6/19.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@AllArgsConstructor</span></span>
<span class="line"><span>@Configuration</span></span>
<span class="line"><span>@EnableWebFluxSecurity</span></span>
<span class="line"><span>public class ResourceServerConfig {</span></span>
<span class="line"><span>    private final AuthorizationManager authorizationManager;</span></span>
<span class="line"><span>    private final IgnoreUrlsConfig ignoreUrlsConfig;</span></span>
<span class="line"><span>    private final RestfulAccessDeniedHandler restfulAccessDeniedHandler;</span></span>
<span class="line"><span>    private final RestAuthenticationEntryPoint restAuthenticationEntryPoint;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {</span></span>
<span class="line"><span>        http.oauth2ResourceServer().jwt()</span></span>
<span class="line"><span>                .jwtAuthenticationConverter(jwtAuthenticationConverter());</span></span>
<span class="line"><span>        http.authorizeExchange()</span></span>
<span class="line"><span>                .pathMatchers(ArrayUtil.toArray(ignoreUrlsConfig.getUrls(),String.class)).permitAll()//白名单配置</span></span>
<span class="line"><span>                .anyExchange().access(authorizationManager)//鉴权管理器配置</span></span>
<span class="line"><span>                .and().exceptionHandling()</span></span>
<span class="line"><span>                .accessDeniedHandler(restfulAccessDeniedHandler)//处理未授权</span></span>
<span class="line"><span>                .authenticationEntryPoint(restAuthenticationEntryPoint)//处理未认证</span></span>
<span class="line"><span>                .and().csrf().disable();</span></span>
<span class="line"><span>        return http.build();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public Converter&lt;Jwt, ? extends Mono&lt;? extends AbstractAuthenticationToken&gt;&gt; jwtAuthenticationConverter() {</span></span>
<span class="line"><span>        JwtGrantedAuthoritiesConverter jwtGrantedAuthoritiesConverter = new JwtGrantedAuthoritiesConverter();</span></span>
<span class="line"><span>        jwtGrantedAuthoritiesConverter.setAuthorityPrefix(AuthConstant.AUTHORITY_PREFIX);</span></span>
<span class="line"><span>        jwtGrantedAuthoritiesConverter.setAuthoritiesClaimName(AuthConstant.AUTHORITY_CLAIM_NAME);</span></span>
<span class="line"><span>        JwtAuthenticationConverter jwtAuthenticationConverter = new JwtAuthenticationConverter();</span></span>
<span class="line"><span>        jwtAuthenticationConverter.setJwtGrantedAuthoritiesConverter(jwtGrantedAuthoritiesConverter);</span></span>
<span class="line"><span>        return new ReactiveJwtAuthenticationConverterAdapter(jwtAuthenticationConverter);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在<code>WebFluxSecurity</code>中自定义鉴权操作需要实现<code>ReactiveAuthorizationManager</code>接口；</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 鉴权管理器，用于判断是否有资源的访问权限</span></span>
<span class="line"><span> * Created by macro on 2020/6/19.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class AuthorizationManager implements ReactiveAuthorizationManager&lt;AuthorizationContext&gt; {</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private RedisTemplate&lt;String,Object&gt; redisTemplate;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public Mono&lt;AuthorizationDecision&gt; check(Mono&lt;Authentication&gt; mono, AuthorizationContext authorizationContext) {</span></span>
<span class="line"><span>        //从Redis中获取当前路径可访问角色列表</span></span>
<span class="line"><span>        URI uri = authorizationContext.getExchange().getRequest().getURI();</span></span>
<span class="line"><span>        Object obj = redisTemplate.opsForHash().get(RedisConstant.RESOURCE_ROLES_MAP, uri.getPath());</span></span>
<span class="line"><span>        List&lt;String&gt; authorities = Convert.toList(String.class,obj);</span></span>
<span class="line"><span>        authorities = authorities.stream().map(i -&gt; i = AuthConstant.AUTHORITY_PREFIX + i).collect(Collectors.toList());</span></span>
<span class="line"><span>        //认证通过且角色匹配的用户可访问当前路径</span></span>
<span class="line"><span>        return mono</span></span>
<span class="line"><span>                .filter(Authentication::isAuthenticated)</span></span>
<span class="line"><span>                .flatMapIterable(Authentication::getAuthorities)</span></span>
<span class="line"><span>                .map(GrantedAuthority::getAuthority)</span></span>
<span class="line"><span>                .any(authorities::contains)</span></span>
<span class="line"><span>                .map(AuthorizationDecision::new)</span></span>
<span class="line"><span>                .defaultIfEmpty(new AuthorizationDecision(false));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>这里我们还需要实现一个全局过滤器<code>AuthGlobalFilter</code>，当鉴权通过后将 JWT 令牌中的用户信息解析出来，然后存入请求的 Header 中，这样后续服务就不需要解析 JWT 令牌了，可以直接从请求的 Header 中获取到用户信息。</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 将登录用户的JWT转化成用户信息的全局过滤器</span></span>
<span class="line"><span> * Created by macro on 2020/6/17.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class AuthGlobalFilter implements GlobalFilter, Ordered {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static Logger LOGGER = LoggerFactory.getLogger(AuthGlobalFilter.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public Mono&lt;Void&gt; filter(ServerWebExchange exchange, GatewayFilterChain chain) {</span></span>
<span class="line"><span>        String token = exchange.getRequest().getHeaders().getFirst(&quot;Authorization&quot;);</span></span>
<span class="line"><span>        if (StrUtil.isEmpty(token)) {</span></span>
<span class="line"><span>            return chain.filter(exchange);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            //从token中解析用户信息并设置到Header中去</span></span>
<span class="line"><span>            String realToken = token.replace(&quot;Bearer &quot;, &quot;&quot;);</span></span>
<span class="line"><span>            JWSObject jwsObject = JWSObject.parse(realToken);</span></span>
<span class="line"><span>            String userStr = jwsObject.getPayload().toString();</span></span>
<span class="line"><span>            LOGGER.info(&quot;AuthGlobalFilter.filter() user:{}&quot;,userStr);</span></span>
<span class="line"><span>            ServerHttpRequest request = exchange.getRequest().mutate().header(&quot;user&quot;, userStr).build();</span></span>
<span class="line"><span>            exchange = exchange.mutate().request(request).build();</span></span>
<span class="line"><span>        } catch (ParseException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return chain.filter(exchange);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public int getOrder() {</span></span>
<span class="line"><span>        return 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="micro-oauth2-api" tabindex="-1"><a class="header-anchor" href="#micro-oauth2-api"><span>micro-oauth2-api</span></a></h3><blockquote><p>最后我们搭建一个 API 服务，它不会集成和实现任何安全相关逻辑，全靠网关来保护它。</p></blockquote><ul><li>在<code>pom.xml</code>中添加相关依赖，就添加了一个 web 依赖；</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependencies&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>        &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;/dependencies&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在<code>application.yml</code>添加相关配置，很常规的配置；</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>server:</span></span>
<span class="line"><span>  port: 9501</span></span>
<span class="line"><span>spring:</span></span>
<span class="line"><span>  profiles:</span></span>
<span class="line"><span>    active: dev</span></span>
<span class="line"><span>  application:</span></span>
<span class="line"><span>    name: micro-oauth2-api</span></span>
<span class="line"><span>  cloud:</span></span>
<span class="line"><span>    nacos:</span></span>
<span class="line"><span>      discovery:</span></span>
<span class="line"><span>        server-addr: localhost:8848</span></span>
<span class="line"><span>management:</span></span>
<span class="line"><span>  endpoints:</span></span>
<span class="line"><span>    web:</span></span>
<span class="line"><span>      exposure:</span></span>
<span class="line"><span>        include: &quot;*&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建一个测试接口，网关验证通过即可访问；</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 测试接口</span></span>
<span class="line"><span> * Created by macro on 2020/6/19.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@RestController</span></span>
<span class="line"><span>public class HelloController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @GetMapping(&quot;/hello&quot;)</span></span>
<span class="line"><span>    public String hello() {</span></span>
<span class="line"><span>        return &quot;Hello World.&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建一个<code>LoginUserHolder</code>组件，用于从请求的 Header 中直接获取登录用户信息；</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 获取登录用户信息</span></span>
<span class="line"><span> * Created by macro on 2020/6/17.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class LoginUserHolder {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public UserDTO getCurrentUser(){</span></span>
<span class="line"><span>        //从Header中获取用户信息</span></span>
<span class="line"><span>        ServletRequestAttributes servletRequestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();</span></span>
<span class="line"><span>        HttpServletRequest request = servletRequestAttributes.getRequest();</span></span>
<span class="line"><span>        String userStr = request.getHeader(&quot;user&quot;);</span></span>
<span class="line"><span>        JSONObject userJsonObject = new JSONObject(userStr);</span></span>
<span class="line"><span>        UserDTO userDTO = new UserDTO();</span></span>
<span class="line"><span>        userDTO.setUsername(userJsonObject.getStr(&quot;user_name&quot;));</span></span>
<span class="line"><span>        userDTO.setId(Convert.toLong(userJsonObject.get(&quot;id&quot;)));</span></span>
<span class="line"><span>        userDTO.setRoles(Convert.toList(String.class,userJsonObject.get(&quot;authorities&quot;)));</span></span>
<span class="line"><span>        return userDTO;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建一个获取当前用户信息的接口。</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 获取登录用户信息接口</span></span>
<span class="line"><span> * Created by macro on 2020/6/19.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@RestController</span></span>
<span class="line"><span>@RequestMapping(&quot;/user&quot;)</span></span>
<span class="line"><span>public class UserController{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private LoginUserHolder loginUserHolder;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @GetMapping(&quot;/currentUser&quot;)</span></span>
<span class="line"><span>    public UserDTO currentUser() {</span></span>
<span class="line"><span>        return loginUserHolder.getCurrentUser();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="功能演示" tabindex="-1"><a class="header-anchor" href="#功能演示"><span>功能演示</span></a></h2><blockquote><p>接下来我们来演示下微服务系统中的统一认证鉴权功能，所有请求均通过网关访问。</p></blockquote><ul><li>在此之前先启动我们的 Nacos 和 Redis 服务，然后依次启动<code>micro-oauth2-auth</code>、<code>micro-oauth2-gateway</code>及<code>micro-oauth2-api</code>服务；</li></ul><figure><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/12/17342f6da5ee93bd~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>使用密码模式获取 JWT 令牌，访问地址：<a href="https://link.juejin.cn?target=http%3A%2F%2Flocalhost%3A9201%2Fauth%2Foauth%2Ftoken" target="_blank" rel="noopener noreferrer">http://localhost:9201/auth/oauth/token</a></li></ul><figure><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/12/17342f6da61f640e~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>使用获取到的 JWT 令牌访问需要权限的接口，访问地址：<a href="https://link.juejin.cn?target=http%3A%2F%2Flocalhost%3A9201%2Fapi%2Fhello" target="_blank" rel="noopener noreferrer">http://localhost:9201/api/hello</a></li></ul><figure><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/12/17342f6da5591caf~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>使用获取到的 JWT 令牌访问获取当前登录用户信息的接口，访问地址：<a href="https://link.juejin.cn?target=http%3A%2F%2Flocalhost%3A9201%2Fapi%2Fuser%2FcurrentUser" target="_blank" rel="noopener noreferrer">http://localhost:9201/api/user/currentUser</a></li></ul><figure><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/12/17342f6da6c59fd8~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>当 JWT 令牌过期时，使用 refresh_token 获取新的 JWT 令牌，访问地址：<a href="https://link.juejin.cn?target=http%3A%2F%2Flocalhost%3A9201%2Fauth%2Foauth%2Ftoken" target="_blank" rel="noopener noreferrer">http://localhost:9201/auth/oauth/token</a></li></ul><figure><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/12/17342f6da69ef4c1~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><ul><li>使用没有访问权限的<code>andy</code> 账号登录，访问接口时会返回如下信息，访问地址：<a href="https://link.juejin.cn?target=http%3A%2F%2Flocalhost%3A9201%2Fapi%2Fhello" target="_blank" rel="noopener noreferrer">http://localhost:9201/api/hello</a></li></ul><figure><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/12/17342f6da665d734~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,69)]))}const d=s(l,[["render",p],["__file","SpringCloudGateway-Oauth2实现统一认证和鉴权.html.vue"]]),o=JSON.parse('{"path":"/dev/SpringCloudGateway-Oauth2%E5%AE%9E%E7%8E%B0%E7%BB%9F%E4%B8%80%E8%AE%A4%E8%AF%81%E5%92%8C%E9%89%B4%E6%9D%83.html","title":"Spring Cloud Gateway - Oauth2 实现统一认证和鉴权","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"Spring Cloud Gateway - Oauth2 实现统一认证和鉴权","excerpt":null,"description":"微服务权限终极解决方案，Spring Cloud Gateway + Oauth2 实现统一认证和鉴权","date":"2022-04-09T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/SpringCloudGateway-Oauth2%E5%AE%9E%E7%8E%B0%E7%BB%9F%E4%B8%80%E8%AE%A4%E8%AF%81%E5%92%8C%E9%89%B4%E6%9D%83.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"Spring Cloud Gateway - Oauth2 实现统一认证和鉴权"}],["meta",{"property":"og:description","content":"微服务权限终极解决方案，Spring Cloud Gateway + Oauth2 实现统一认证和鉴权"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/12/17342f6da5ee93bd~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-15T14:38:03.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2022-04-09T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-15T14:38:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring Cloud Gateway - Oauth2 实现统一认证和鉴权\\",\\"image\\":[\\"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/12/17342f6da5ee93bd~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp\\",\\"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/12/17342f6da61f640e~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp\\",\\"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/12/17342f6da5591caf~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp\\",\\"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/12/17342f6da6c59fd8~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp\\",\\"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/12/17342f6da69ef4c1~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp\\",\\"https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/12/17342f6da665d734~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp\\"],\\"datePublished\\":\\"2022-04-09T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-15T14:38:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"摘要","slug":"摘要","link":"#摘要","children":[]},{"level":2,"title":"前置知识","slug":"前置知识","link":"#前置知识","children":[]},{"level":2,"title":"应用架构","slug":"应用架构","link":"#应用架构","children":[]},{"level":2,"title":"方案实现","slug":"方案实现","link":"#方案实现","children":[{"level":3,"title":"micro-oauth2-auth","slug":"micro-oauth2-auth","link":"#micro-oauth2-auth","children":[]},{"level":3,"title":"micro-oauth2-gateway","slug":"micro-oauth2-gateway","link":"#micro-oauth2-gateway","children":[]},{"level":3,"title":"micro-oauth2-api","slug":"micro-oauth2-api","link":"#micro-oauth2-api","children":[]}]},{"level":2,"title":"功能演示","slug":"功能演示","link":"#功能演示","children":[]}],"git":{"createdTime":1649469308000,"updatedTime":1731681483000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":2},{"name":"xlc520","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":9.45,"words":2835},"filePathRelative":"dev/SpringCloudGateway-Oauth2实现统一认证和鉴权.md","localizedDate":"2022年4月9日","excerpt":"\\n<h2>摘要</h2>\\n<p>最近发现了一个很好的微服务权限解决方案，可以通过认证服务进行统一认证，然后通过网关来统一校验认证和鉴权。此方案为目前最新方案，仅支持\\nSpring Boot 2.2.0、Spring Cloud Hoxton 以上版本，本文将详细介绍该方案的实现，希望对大家有所帮助！</p>"}');export{d as comp,o as data};
