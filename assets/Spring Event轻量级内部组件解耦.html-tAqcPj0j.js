import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,a as i}from"./app-DWXdHMII.js";const l={};function p(r,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="spring-event-轻量级内部组件解耦" tabindex="-1"><a class="header-anchor" href="#spring-event-轻量级内部组件解耦"><span>Spring Event 轻量级内部组件解耦</span></a></h1><h2 id="版本" tabindex="-1"><a class="header-anchor" href="#版本"><span>版本</span></a></h2><ul><li>• JDK 8</li><li>• Spring-boot 2.6.6</li></ul><h2 id="登录事件示例" tabindex="-1"><a class="header-anchor" href="#登录事件示例"><span>登录事件示例</span></a></h2><ul><li>• 下面是一个使用 Spring 事件处理用户登录的简单示例。在此示例中，我们将创建一个 Spring Boot 应用程序，演示如何使用 Spring 事件来处理用户登录事件。</li></ul><h2 id="创建一个登录事件" tabindex="-1"><a class="header-anchor" href="#创建一个登录事件"><span>创建一个登录事件</span></a></h2><ul><li>• 创建一个自定义的事件类，用于表示用户登录事件，例如 LogonEvent：</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public class LoginEvent extends ApplicationEvent {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private final String userName;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public LoginEvent(Object source, String username) {</span></span>
<span class="line"><span>        super(source);</span></span>
<span class="line"><span>        this.userName = username;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getUserName() {</span></span>
<span class="line"><span>        return userName;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建事件发布者" tabindex="-1"><a class="header-anchor" href="#创建事件发布者"><span>创建事件发布者</span></a></h2><ul><li>• 创建一个事件发布者，用于发布用户登录事件：</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Service</span></span>
<span class="line"><span>public class LoginEventPublisher {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private final ApplicationEventPublisher applicationEventPublisher;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public LoginEventPublisher(ApplicationEventPublisher applicationEventPublisher) {</span></span>
<span class="line"><span>        this.applicationEventPublisher = applicationEventPublisher;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void publishLoginEvent(String username) {</span></span>
<span class="line"><span>        LogonEvent loginEvent = new LoginEvent(this, username);</span></span>
<span class="line"><span>        applicationEventPublisher.publishEvent(loginEvent);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建事件监听器" tabindex="-1"><a class="header-anchor" href="#创建事件监听器"><span>创建事件监听器</span></a></h2><ul><li>• 创建事件监听器，用于处理用户登录事件，支持创建一个或者多个类似发布订阅模式，本示例中创建了两个时间监听器：</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 日志处理事件监听器</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class LoginEventPrintLogListener {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @EventListener</span></span>
<span class="line"><span>    public void handleUserLoginEvent(LoginEvent event) {</span></span>
<span class="line"><span>        String username = event.getUserName();</span></span>
<span class="line"><span>        // 在这里执行处理用户登录事件的逻辑，例如记录日志或触发其他操作</span></span>
<span class="line"><span>        System.out.println(&quot;User logged in: &quot; + username);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 登录消息通知事件监听器</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class LoginEventMessageNoticeListener {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @EventListener</span></span>
<span class="line"><span>    public void LoginEventMessageNoticeListener(LoginEvent event) {</span></span>
<span class="line"><span>        String username = event.getUserName();</span></span>
<span class="line"><span>        // 发送消息通知用户</span></span>
<span class="line"><span>        System.out.println(&quot;message send User logged in: &quot; + username);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模拟用户登录" tabindex="-1"><a class="header-anchor" href="#模拟用户登录"><span>模拟用户登录</span></a></h2><ul><li>• 这里为了方便测试，使用 CommandLineRunner 启动时模拟登录：</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>public class MyCommandLineRunner implements CommandLineRunner {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private final LoginEventPublisher loginEventPublisher;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public MyCommandLineRunner(LoginEventPublisher loginEventPublisher) {</span></span>
<span class="line"><span>        this.loginEventPublisher = loginEventPublisher;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void run(String... args) {</span></span>
<span class="line"><span>        // 在应用程序启动后执行的自定义逻辑</span></span>
<span class="line"><span>        System.out.println(&quot;MyCommandLineRunner executed!&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 登录成功</span></span>
<span class="line"><span>        // 登录执行后逻辑</span></span>
<span class="line"><span>        loginEventPublisher.publishLoginEvent(&quot;小王&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行结果" tabindex="-1"><a class="header-anchor" href="#运行结果"><span>运行结果</span></a></h2><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>2023-10-13 16:04:02.021  INFO 5356 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 1250 ms</span></span>
<span class="line"><span>2023-10-13 16:04:02.382  INFO 5356 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path &#39;&#39;</span></span>
<span class="line"><span>2023-10-13 16:05:31.792  INFO 5356 --- [           main] c.e.s.SpringBootTestMavenApplication     : Started SpringBootTestMavenApplication in 200.49 seconds (JVM running for 201.165)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>MyCommandLineRunner executed!</span></span>
<span class="line"><span>message send User logged in: 小王</span></span>
<span class="line"><span>User logged in: 小王</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单监听器和多监听器" tabindex="-1"><a class="header-anchor" href="#单监听器和多监听器"><span>单监听器和多监听器</span></a></h2><ul><li>• 上文示例中，我们使用多监听器实现了对登录事件的监听，如果我们实际业务中只需要一个监听器，那么使用单监听器即可。</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 日志处理事件监听器</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class LoginEventPrintLogListener {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @EventListener</span></span>
<span class="line"><span>    public void handleUserLoginEvent(LoginEvent event) {</span></span>
<span class="line"><span>        String username = event.getUserName();</span></span>
<span class="line"><span>        // 在这里执行处理用户登录事件的逻辑，例如记录日志或触发其他操作</span></span>
<span class="line"><span>        System.out.println(&quot;User logged in: &quot; + username);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 登录消息通知事件监听器</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class LoginEventMessageNoticeListener {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @EventListener</span></span>
<span class="line"><span>    public void LoginEventMessageNoticeListener(LoginEvent event) {</span></span>
<span class="line"><span>        String username = event.getUserName();</span></span>
<span class="line"><span>        // 发送消息通知用户</span></span>
<span class="line"><span>        System.out.println(&quot;message send User logged in: &quot; + username);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="不使用-annotation" tabindex="-1"><a class="header-anchor" href="#不使用-annotation"><span>不使用 Annotation</span></a></h2><ul><li>• 除了使用注解的方式实现监听器之外，我们也可以不使用注解实现：</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>public class LoginEventPrintLogListenerTest implements ApplicationListener&lt;LoginEvent&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void onApplicationEvent(LoginEvent event) {</span></span>
<span class="line"><span>        System.out.println(&quot;this is a Listener with not annotation&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="asynchronous-event-listener-异步监听器" tabindex="-1"><a class="header-anchor" href="#asynchronous-event-listener-异步监听器"><span>Asynchronous Event Listener（异步监听器）</span></a></h3><ul><li>• 默认情况下，事件监听器使用当前线程同步处理事件，当前线程阻塞直到事件处理完成，在一些事件监听器处理事件比较长的场景是不适合的，这时候我们可以使用异步进行处理。</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@SpringBootApplication</span></span>
<span class="line"><span>// 开启 Async</span></span>
<span class="line"><span>@EnableAsync</span></span>
<span class="line"><span>public class SpringBootTestMavenApplication {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        SpringApplication.run(SpringBootTestMavenApplication.class, args);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class LoginEventPrintLogListener {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @EventListener</span></span>
<span class="line"><span>    // 配置任务异步 创建新线程处理该事件</span></span>
<span class="line"><span>    @Async</span></span>
<span class="line"><span>    public void handleUserLoginEvent(LoginEvent event) throws Exception {</span></span>
<span class="line"><span>        String username = event.getUserName();</span></span>
<span class="line"><span>        // 在这里执行处理用户登录事件的逻辑，例如记录日志或触发其他操作</span></span>
<span class="line"><span>        System.out.println(&quot;User logged in: &quot; + username);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="conditional-events-条件事件" tabindex="-1"><a class="header-anchor" href="#conditional-events-条件事件"><span>Conditional Events (条件事件)</span></a></h3><ul><li>• Spring 还提供了根据特定标准有条件地处理事件的功能。这使我们能够很好地控制监听器对事件的处理。</li><li>• 比如在下面的示例中，仅当登录用户的 userName 等于小王时才会触发监听器执行：</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>public class LoginEventPrintLogListener {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @EventListener(condition = &quot;#event.userName.equals(&#39;小王&#39;)&quot;)</span></span>
<span class="line"><span>    public void handleUserLoginEvent(LoginEvent event) throws Exception {</span></span>
<span class="line"><span>        String username = event.getUserName();</span></span>
<span class="line"><span>        // 在这里执行处理用户登录事件的逻辑，例如记录日志或触发其他操作</span></span>
<span class="line"><span>        System.out.println(&quot;User logged in: &quot; + username);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="transactional-events-事务事件" tabindex="-1"><a class="header-anchor" href="#transactional-events-事务事件"><span>Transactional Events（事务事件）</span></a></h3><ul><li>• Spring 事件可以和事务一起使用，但是可能会出现下面这种异常情况，用户注册成功后发布登录事件，但在后续的事务处理中处理异常导致事务回滚，会出现用户收到注册成功短信但实际没有注册成功。</li><li>• 对于上述这种场景，我们一般有两种方案处理：</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>方案一：将事务处理逻辑和事件发布拆分，避免上述异常场景（推荐）</span></span>
<span class="line"><span>方案二：使用 TransactionalEventListener 指定和事务执行的顺序关系</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="transactionaleventlistener" tabindex="-1"><a class="header-anchor" href="#transactionaleventlistener"><span>@TransactionalEventListener</span></a></h3><ul><li>• 在 Spring 4.2+，引入了 @TransactionalEventListener 对 @EventListener 进行增强。以便能够控制在事务的时候 Event 事件的处理方式。</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>public class MyCommandLineRunner implements CommandLineRunner {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private final RegisterEventPublisher registerEventPublisher;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public MyCommandLineRunner(RegisterEventPublisher registerEventPublisher) {</span></span>
<span class="line"><span>        this.RegisterEventPublisher = registerEventPublisher;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    @Transactional</span></span>
<span class="line"><span>    public void run(String... args) {</span></span>
<span class="line"><span>        // 在应用程序启动后执行的自定义逻辑</span></span>
<span class="line"><span>        System.out.println(&quot;MyCommandLineRunner executed!&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        // 注册成功</span></span>
<span class="line"><span>        // 注册执行后逻辑</span></span>
<span class="line"><span>        registerEventPublisher.publishRegisterEvent(&quot;小王&quot;);</span></span>
<span class="line"><span>        // 执行异常导致事务回滚</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class RegisterEventPrintLogListener {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 事务提交后才会执行</span></span>
<span class="line"><span>    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)</span></span>
<span class="line"><span>    public void handleUserRegisterEvent(RigisterEvent event) throws Exception {</span></span>
<span class="line"><span>        String username = event.getUserName();</span></span>
<span class="line"><span>        // 在这里执行处理用户注册事件的逻辑，例如记录日志或触发其他操作</span></span>
<span class="line"><span>        System.out.println(&quot;User register: &quot; + username);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="order-of-event-execution-监听事件执行顺序" tabindex="-1"><a class="header-anchor" href="#order-of-event-execution-监听事件执行顺序"><span>Order of Event Execution (监听事件执行顺序)</span></a></h3><ul><li>• 默认情况下，多个监听器对同一个事件的处理事未定的，我们可以使用 @Order 注解指定执行顺序。</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>public class LoginEventPrintLogListener {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @EventListener</span></span>
<span class="line"><span>    @Order(1)</span></span>
<span class="line"><span>    public void handleUserLoginEvent(LoginEvent event) throws Exception {</span></span>
<span class="line"><span>        String username = event.getUserName();</span></span>
<span class="line"><span>        // 在这里执行处理用户登录事件的逻辑，例如记录日志或触发其他操作</span></span>
<span class="line"><span>        System.out.println(&quot;User logged in: &quot; + username);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class LoginEventMessageNoticeListener {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @EventListener</span></span>
<span class="line"><span>    @Order(2)</span></span>
<span class="line"><span>    public void LoginEventMessageNoticeListener(LoginEvent event) {</span></span>
<span class="line"><span>        String username = event.getUserName();</span></span>
<span class="line"><span>        // 发送消息通知用户</span></span>
<span class="line"><span>        System.out.println(&quot;message send User logged in: &quot; + username);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="generic-events-泛型事件" tabindex="-1"><a class="header-anchor" href="#generic-events-泛型事件"><span>Generic Events（泛型事件）</span></a></h2><ul><li>• 我们也可以使用泛型来实现通用的事件处理。定义一个通用的事件类型，以处理不同类型的事件数据。以下是一个使用泛型的 Spring 事件处理示例：</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public class GenericEvent&lt;T&gt; extends ApplicationEvent {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private T eventData;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public GenericEvent(Object source, T eventData) {</span></span>
<span class="line"><span>        super(source);</span></span>
<span class="line"><span>        this.eventData = eventData;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public T getEventData() {</span></span>
<span class="line"><span>        return eventData;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class EventPublisherService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private final ApplicationEventPublisher eventPublisher;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public EventPublisherService(ApplicationEventPublisher eventPublisher) {</span></span>
<span class="line"><span>        this.eventPublisher = eventPublisher;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public &lt;T&gt; void publishGenericEvent(T eventData) {</span></span>
<span class="line"><span>        GenericEvent&lt;T&gt; genericEvent = new GenericEvent&lt;&gt;(this, eventData);</span></span>
<span class="line"><span>        eventPublisher.publishEvent(genericEvent);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class GenericEventListener {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @EventListener</span></span>
<span class="line"><span>    public &lt;T&gt; void handleGenericEvent(GenericEvent&lt;T&gt; event) {</span></span>
<span class="line"><span>        T eventData = event.getEventData();</span></span>
<span class="line"><span>        System.out.println(&quot;Received a generic event with data: &quot; + eventData);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="监听器异常处理" tabindex="-1"><a class="header-anchor" href="#监听器异常处理"><span>监听器异常处理</span></a></h2><ul><li>• 我们根据监听器的执行方式选择不同的方式对异常进行处理。</li><li>• 实际业务中不建议使用，本身 Spring Event 的意义在于对内部组件进行解耦，各个监听器之间应该尽可能的独立。</li></ul><h2 id="同步异常处理" tabindex="-1"><a class="header-anchor" href="#同步异常处理"><span>同步异常处理</span></a></h2><ul><li>• 自定义 ErrorHandler 并绑定到 SimpleApplicationEventMulticaster 上。</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>public class MyErrorHandler implements ErrorHandler {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void handleError(Throwable t) {</span></span>
<span class="line"><span>        log.info(&quot;handle error -&gt; {}&quot;, t.getClass());</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Service</span></span>
<span class="line"><span>public class EventListenerService {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private SimpleApplicationEventMulticaster simpleApplicationEventMulticaster;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private MyErrorHandler errorHandler;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @PostConstruct</span></span>
<span class="line"><span>    public void init(){</span></span>
<span class="line"><span>        simpleApplicationEventMulticaster.setErrorHandler(errorHandler);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异步监听器异常处理" tabindex="-1"><a class="header-anchor" href="#异步监听器异常处理"><span>异步监听器异常处理</span></a></h2><ul><li>• 使用 SimpleAsyncUncaughtExceptionHandler 来处理 @Async 抛出的异常</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class AsyncConfig implements AsyncConfigurer {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {</span></span>
<span class="line"><span>        return new SimpleAsyncUncaughtExceptionHandler();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2><h3 id="监听器默认同步执行" tabindex="-1"><a class="header-anchor" href="#监听器默认同步执行"><span>监听器默认同步执行</span></a></h3><ul><li>• 事件的所有监听器是同步执行的，需要评估同步阻塞对当前主流程带来的影响，建议使用异步的方式。</li></ul><h3 id="监听器的事件处理并不可靠" tabindex="-1"><a class="header-anchor" href="#监听器的事件处理并不可靠"><span>监听器的事件处理并不可靠</span></a></h3><ul><li>• 监听器并不会保证事件会如预期一样的处理完成，比如同步处理时某个监听器处理异常会导致后序监听器无法执行；程序关闭时可能发生监听事件未处理完成等等。</li><li>• 虽然我们可以写一些附加的代码逻辑、技术手段去保证可靠性，但个人认为并不划算，因此建议 Spring Event 应仅使用在应用程序内部组件解耦且没有可靠性要求的场景，比如消息通知等。</li></ul><h3 id="保持监听器的逻辑尽可能小" tabindex="-1"><a class="header-anchor" href="#保持监听器的逻辑尽可能小"><span>保持监听器的逻辑尽可能小</span></a></h3><ul><li>• 事件监听器的逻辑应该保持在最低限度，仅仅是充当程序内部不同部分的粘合剂，任何实质性的逻辑应该放在具体的服务类实现。</li></ul><h3 id="不要依赖监听器执行顺序" tabindex="-1"><a class="header-anchor" href="#不要依赖监听器执行顺序"><span>不要依赖监听器执行顺序</span></a></h3><ul><li>• 最佳情况下，同一事件的各个监听器之间应该是独立的，虽然我们可以使用 @Order 来控制监听器之间的执行顺序，但是仅在同步执行的场景下有效，监听器异步执行的情况下实际执行顺序仍然是不可控的。</li></ul><h3 id="谨慎使用条件监听器和事务监听器" tabindex="-1"><a class="header-anchor" href="#谨慎使用条件监听器和事务监听器"><span>谨慎使用条件监听器和事务监听器</span></a></h3><ul><li>• 虽然两者都是强大的工具，但过多的使用会导致我们的程序出现难以调试的问题。</li></ul>`,62)]))}const c=s(l,[["render",p],["__file","Spring Event轻量级内部组件解耦.html.vue"]]),v=JSON.parse('{"path":"/dev/Spring%20Event%E8%BD%BB%E9%87%8F%E7%BA%A7%E5%86%85%E9%83%A8%E7%BB%84%E4%BB%B6%E8%A7%A3%E8%80%A6.html","title":"Spring Event轻量级内部组件解耦","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"Spring Event轻量级内部组件解耦","excerpt":null,"description":"Spring Event 轻量级内部组件解耦 版本 • JDK 8 • Spring-boot 2.6.6 登录事件示例 • 下面是一个使用 Spring 事件处理用户登录的简单示例。在此示例中，我们将创建一个 Spring Boot 应用程序，演示如何使用 Spring 事件来处理用户登录事件。 创建一个登录事件 • 创建一个自定义的事件类，用于表示...","date":"2023-12-27T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/Spring%20Event%E8%BD%BB%E9%87%8F%E7%BA%A7%E5%86%85%E9%83%A8%E7%BB%84%E4%BB%B6%E8%A7%A3%E8%80%A6.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"Spring Event轻量级内部组件解耦"}],["meta",{"property":"og:description","content":"Spring Event 轻量级内部组件解耦 版本 • JDK 8 • Spring-boot 2.6.6 登录事件示例 • 下面是一个使用 Spring 事件处理用户登录的简单示例。在此示例中，我们将创建一个 Spring Boot 应用程序，演示如何使用 Spring 事件来处理用户登录事件。 创建一个登录事件 • 创建一个自定义的事件类，用于表示..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-12-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring Event轻量级内部组件解耦\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"版本","slug":"版本","link":"#版本","children":[]},{"level":2,"title":"登录事件示例","slug":"登录事件示例","link":"#登录事件示例","children":[]},{"level":2,"title":"创建一个登录事件","slug":"创建一个登录事件","link":"#创建一个登录事件","children":[]},{"level":2,"title":"创建事件发布者","slug":"创建事件发布者","link":"#创建事件发布者","children":[]},{"level":2,"title":"创建事件监听器","slug":"创建事件监听器","link":"#创建事件监听器","children":[]},{"level":2,"title":"模拟用户登录","slug":"模拟用户登录","link":"#模拟用户登录","children":[]},{"level":2,"title":"运行结果","slug":"运行结果","link":"#运行结果","children":[]},{"level":2,"title":"单监听器和多监听器","slug":"单监听器和多监听器","link":"#单监听器和多监听器","children":[]},{"level":2,"title":"不使用 Annotation","slug":"不使用-annotation","link":"#不使用-annotation","children":[{"level":3,"title":"Asynchronous Event Listener（异步监听器）","slug":"asynchronous-event-listener-异步监听器","link":"#asynchronous-event-listener-异步监听器","children":[]},{"level":3,"title":"Conditional Events (条件事件)","slug":"conditional-events-条件事件","link":"#conditional-events-条件事件","children":[]},{"level":3,"title":"Transactional Events（事务事件）","slug":"transactional-events-事务事件","link":"#transactional-events-事务事件","children":[]},{"level":3,"title":"@TransactionalEventListener","slug":"transactionaleventlistener","link":"#transactionaleventlistener","children":[]},{"level":3,"title":"Order of Event Execution (监听事件执行顺序)","slug":"order-of-event-execution-监听事件执行顺序","link":"#order-of-event-execution-监听事件执行顺序","children":[]}]},{"level":2,"title":"Generic Events（泛型事件）","slug":"generic-events-泛型事件","link":"#generic-events-泛型事件","children":[]},{"level":2,"title":"监听器异常处理","slug":"监听器异常处理","link":"#监听器异常处理","children":[]},{"level":2,"title":"同步异常处理","slug":"同步异常处理","link":"#同步异常处理","children":[]},{"level":2,"title":"异步监听器异常处理","slug":"异步监听器异常处理","link":"#异步监听器异常处理","children":[]},{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[{"level":3,"title":"监听器默认同步执行","slug":"监听器默认同步执行","link":"#监听器默认同步执行","children":[]},{"level":3,"title":"监听器的事件处理并不可靠","slug":"监听器的事件处理并不可靠","link":"#监听器的事件处理并不可靠","children":[]},{"level":3,"title":"保持监听器的逻辑尽可能小","slug":"保持监听器的逻辑尽可能小","link":"#保持监听器的逻辑尽可能小","children":[]},{"level":3,"title":"不要依赖监听器执行顺序","slug":"不要依赖监听器执行顺序","link":"#不要依赖监听器执行顺序","children":[]},{"level":3,"title":"谨慎使用条件监听器和事务监听器","slug":"谨慎使用条件监听器和事务监听器","link":"#谨慎使用条件监听器和事务监听器","children":[]}]}],"git":{"createdTime":1706885633000,"updatedTime":1714224756000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":7.43,"words":2229},"filePathRelative":"dev/Spring Event轻量级内部组件解耦.md","localizedDate":"2023年12月27日","excerpt":"\\n<h2>版本</h2>\\n<ul>\\n<li>• JDK 8</li>\\n<li>• Spring-boot 2.6.6</li>\\n</ul>\\n<h2>登录事件示例</h2>\\n<ul>\\n<li>• 下面是一个使用 Spring 事件处理用户登录的简单示例。在此示例中，我们将创建一个 Spring Boot 应用程序，演示如何使用 Spring\\n事件来处理用户登录事件。</li>\\n</ul>","autoDesc":true}');export{c as comp,v as data};
