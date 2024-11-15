import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as p,c as t,b as s,n as r,g as d,r as a,a as c}from"./app-DDjfOKh-.js";const o={};function g(v,n){const e=a("VPBanner"),i=a("Share");return p(),t("div",null,[s(e,r(d({title:"Spring Boot 配置日志输出",content:"Spring Boot 配置日志输出",logo:null,color:"var(--banner-text)",background:"rgba(217, 244, 208, 0.5)",actions:[{text:"Spring Boot 配置日志输出",link:"/dev/Spring Boot 配置日志输出"}]})),null,16),n[0]||(n[0]=c(`<h1 id="spring-boot-配置日志输出" tabindex="-1"><a class="header-anchor" href="#spring-boot-配置日志输出"><span>Spring Boot 配置日志输出</span></a></h1><h2 id="_01、背景介绍" tabindex="-1"><a class="header-anchor" href="#_01、背景介绍"><span><strong>01、背景介绍</strong></span></a></h2><p>对于日志文件，相信大家都并不陌生，通过在关键位置打印相关的日志，有利于快速跟踪和定位软件系统运行中存在的问题。</p><p>在之前的 Java 实现日志记录的文章中，我们介绍了能实现日志记录的主流框架有 Log4j、Log4j2、Logback 等，通过一些性能测试发现，Logback 和 Log4j2 两个都比较优秀。同时，它们都支持与 SLF4J 框架的集成，可以轻松实现系统日志框架实现的切换，这主要得益于门面模式的设计。</p><p>当采用 Slf4j 来实现日志输出时，我们不需要再纠结到底是用 Log4j2 还是用 Logback 。Slf4j 相当于一个门面接口，可以让代码更加统一，同时它并不是一个日志实现框架，具体的实现会在 Slf4j 接口被调用的时候委托给具体的日志框架来实现。比如，当系统中有 Logback 时，就委托 Logback 来输出日志；当有 Log4j2 时，就委托 Log4j2 来实现；如果两者同时存在，可能会报循环依赖的错误，因此在项目添加依赖的时候，只能选择其中一个，如果有不兼容的问题，需要手动排除。</p><p>对于一个 Java web 项目，当采用<code>Slf4j</code> + <code>Logback</code>来实现日志信息的输出时，通常会添加类似于如下的相关依赖包。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;!-- 添加slf4j依赖包 --&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.slf4j&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;slf4j-api&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;1.7.25&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;!-- 添加logback依赖包 --&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;ch.qos.logback&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;logback-classic&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;1.1.7&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，在项目根目录下创建<code>logback.xml</code>并配置相关参数，示例如下。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;!-- scan:当此属性设置为true时，配置文件如果发生改变，将会被重新加载，默认值为true。 scanPeriod:设置监测配置文件是否有修改的时间间隔，如果没有给出时间单位，默认单位是毫秒。当scan为true时，此属性生效。默认的时间间隔为1分钟。 </span></span>
<span class="line"><span>    debug:当此属性设置为true时，将打印出logback内部日志信息，实时查看logback运行状态。默认值为false。 --&gt;</span></span>
<span class="line"><span>&lt;configuration scan=&quot;true&quot; scanPeriod=&quot;60 seconds&quot; debug=&quot;false&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- </span></span>
<span class="line"><span>    %d{yyyy-MM-dd HH:mm:ss} [%level] - %msg%n</span></span>
<span class="line"><span>      Logger: %logger</span></span>
<span class="line"><span>      Class: %class</span></span>
<span class="line"><span>      File: %file</span></span>
<span class="line"><span>      Caller: %caller</span></span>
<span class="line"><span>      Line: %line</span></span>
<span class="line"><span>      Message: %m</span></span>
<span class="line"><span>      Method: %M</span></span>
<span class="line"><span>      Relative: %relative</span></span>
<span class="line"><span>      Thread: %thread</span></span>
<span class="line"><span>      Exception: %ex</span></span>
<span class="line"><span>      xException: %xEx</span></span>
<span class="line"><span>      nopException: %nopex</span></span>
<span class="line"><span>      rException: %rEx</span></span>
<span class="line"><span>      Marker: %marker</span></span>
<span class="line"><span>      newline:%n</span></span>
<span class="line"><span>    --&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;CUSTOM_LOG_PATTERN&quot;</span></span>
<span class="line"><span>        value=&quot;%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{90} - %msg%n&quot; /&gt;</span></span>
<span class="line"><span>        </span></span>
<span class="line"><span>    &lt;!-- 上下文名称 --&gt;</span></span>
<span class="line"><span>    &lt;contextName&gt;\${CONTEXT_NAME}&lt;/contextName&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 日志输出组件 --&gt;</span></span>
<span class="line"><span>    &lt;appender name=&quot;CONSOLE&quot; class=&quot;ch.qos.logback.core.ConsoleAppender&quot;&gt;</span></span>
<span class="line"><span>        &lt;!-- 对日志进行格式化。 --&gt;</span></span>
<span class="line"><span>        &lt;encoder&gt;</span></span>
<span class="line"><span>            &lt;pattern&gt;\${CUSTOM_LOG_PATTERN}&lt;/pattern&gt;</span></span>
<span class="line"><span>            &lt;charset&gt;UTF-8&lt;/charset&gt;</span></span>
<span class="line"><span>        &lt;/encoder&gt;</span></span>
<span class="line"><span>    &lt;/appender&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 日志级别为INFO,日志输出到控制台 --&gt;</span></span>
<span class="line"><span>    &lt;root level=&quot;INFO&quot;&gt;</span></span>
<span class="line"><span>        &lt;appender-ref ref=&quot;CONSOLE&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/root&gt;</span></span>
<span class="line"><span>&lt;/configuration&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，通过门面接口来输出日志，示例如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import org.slf4j.Logger;</span></span>
<span class="line"><span>import org.slf4j.LoggerFactory;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class LogPrintUtil {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static final Logger LOGGER = LoggerFactory.getLogger(LogPrintUtil.class);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    public static void main(String[] args){</span></span>
<span class="line"><span>        LOGGER.info(&quot;info信息&quot;);</span></span>
<span class="line"><span>        LOGGER.warn(&quot;warn信息&quot;);</span></span>
<span class="line"><span>        LOGGER.error(&quot;error信息&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_02、spring-boot-日志配置" tabindex="-1"><a class="header-anchor" href="#_02、spring-boot-日志配置"><span><strong>02、Spring Boot 日志配置</strong></span></a></h2><p>当我们采用 SpringBoot 框架来开发系统的时候，其实默认已经帮我们集成好了<code>spring-boot-starter-logging</code> 日志依赖包，它底层采用的就是上面介绍的<code>logback</code>日志实现框架，同时也集成了<code>Slf4j</code>依赖库。</p><p>默认的<code>logback</code>日志配置文件在<code>org/springframework/boot/logging/logback/defaults.xml</code>下，我们只需要在相关的位置采用<code>slf4j</code> 接口来打印日志即可，示例如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import org.slf4j.Logger;</span></span>
<span class="line"><span>import org.slf4j.LoggerFactory;</span></span>
<span class="line"><span>import org.springframework.boot.SpringApplication;</span></span>
<span class="line"><span>import org.springframework.boot.autoconfigure.SpringBootApplication;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@SpringBootApplication</span></span>
<span class="line"><span>public class LogApplication {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private static final Logger LOGGER = LoggerFactory.getLogger(LogApplication.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        SpringApplication.run(LogApplication.class, args);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        LOGGER.error(&quot;Hello World&quot;);</span></span>
<span class="line"><span>        LOGGER.warn(&quot;Hello World&quot;);</span></span>
<span class="line"><span>        LOGGER.info(&quot;Hello World&quot;);</span></span>
<span class="line"><span>        LOGGER.debug(&quot;Hello World&quot;);</span></span>
<span class="line"><span>        LOGGER.trace(&quot;Hello World&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动服务，可以看到类似于如下的打印结果：</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1724773685155-0.webp" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>默认的日志级别为<code>info</code>，如果想更改日志级别，可以在<code>application.properties</code>文件配置日志打印级别，比如改成<code>trace</code>，参数如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>logging.level.root=trace</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>重新启动服务，日志打印结果如下：</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1724773685155-1.webp" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>从控制台输出的结果可以初步分析出，<code>trace</code>级别最低，可以打印所有级别的日志。在整个日志体系中，级别从低到高分为：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>TRACE &lt; DEBUG &lt; INFO &lt; WARN &lt; ERROR</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>级别越底，可打印的日志就更多；相反，级别越高，输出的日志就更少。</p><p>从实际情况来看，太多的日志打印也未必是一件好事，有时候会把服务器磁盘撑爆，导致服务宕机。通常我们会配置<code>INFO</code> 级别，在关键的位置打印相关信息即可。</p><h4 id="_2-1、logback-自定义配置" tabindex="-1"><a class="header-anchor" href="#_2-1、logback-自定义配置"><span><strong>2.1、Logback 自定义配置</strong></span></a></h4><p>在实际的业务开发中，通常我们会自定义<code>Logback</code>相关配置文件，有两种做法。</p><ul><li>第一种：创建<code>logback.xml</code>配置文件，这种配置文件会直接被日志框架加载</li><li>第二种：创建<code>logback-spring.xml</code>配置文件，这种配置文件不会直接被日志框架加载，而是先由 SpringBoot 去解析日志配置再加载，可以使用 SpringBoot 的一些高级功能，比如 Profile 属性。</li></ul><p>这里，我们选择第二种方式，在<code>src/main/resources</code>目录下，创建<code>logback-spring.xml</code>文件，一般标准写法如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;configuration&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!--定义相关变量--&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;log.dir&quot; value=&quot;log-demo&quot; /&gt;</span></span>
<span class="line"><span>    &lt;property name=&quot;custom.log.pattern&quot; value=&quot;%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{90} - %msg%n&quot; /&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 控制台文件输出 --&gt;</span></span>
<span class="line"><span>    &lt;appender name=&quot;CONSOLE&quot; class=&quot;ch.qos.logback.core.ConsoleAppender&quot;&gt;</span></span>
<span class="line"><span>        &lt;encoder&gt;</span></span>
<span class="line"><span>            &lt;pattern&gt;\${custom.log.pattern}&lt;/pattern&gt;</span></span>
<span class="line"><span>            &lt;charset&gt;UTF-8&lt;/charset&gt;</span></span>
<span class="line"><span>        &lt;/encoder&gt;</span></span>
<span class="line"><span>    &lt;/appender&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 文件输出 --&gt;</span></span>
<span class="line"><span>    &lt;appender name=&quot;APP_LOG&quot;</span></span>
<span class="line"><span>              class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;</span></span>
<span class="line"><span>        &lt;file&gt;\${log.dir}/log_info.log&lt;/file&gt;</span></span>
<span class="line"><span>        &lt;encoder class=&quot;ch.qos.logback.classic.encoder.PatternLayoutEncoder&quot;&gt;</span></span>
<span class="line"><span>            &lt;pattern&gt;\${custom.log.pattern}&lt;/pattern&gt;</span></span>
<span class="line"><span>            &lt;charset&gt;UTF-8&lt;/charset&gt;</span></span>
<span class="line"><span>        &lt;/encoder&gt;</span></span>
<span class="line"><span>        &lt;rollingPolicy class=&quot;ch.qos.logback.core.rolling.TimeBasedRollingPolicy&quot;&gt;</span></span>
<span class="line"><span>            &lt;fileNamePattern&gt;\${log.dir}/histroy/log-%d{yyyy-MM-dd}-%i.log</span></span>
<span class="line"><span>            &lt;/fileNamePattern&gt;</span></span>
<span class="line"><span>            &lt;maxHistory&gt;30&lt;/maxHistory&gt;</span></span>
<span class="line"><span>            &lt;timeBasedFileNamingAndTriggeringPolicy</span></span>
<span class="line"><span>                    class=&quot;ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP&quot;&gt;</span></span>
<span class="line"><span>                &lt;maxFileSize&gt;250MB&lt;/maxFileSize&gt;</span></span>
<span class="line"><span>            &lt;/timeBasedFileNamingAndTriggeringPolicy&gt;</span></span>
<span class="line"><span>        &lt;/rollingPolicy&gt;</span></span>
<span class="line"><span>    &lt;/appender&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;root level=&quot;INFO&quot;&gt;</span></span>
<span class="line"><span>        &lt;appender-ref ref=&quot;CONSOLE&quot; /&gt;</span></span>
<span class="line"><span>        &lt;appender-ref ref=&quot;APP_LOG&quot; /&gt;</span></span>
<span class="line"><span>    &lt;/root&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/configuration&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中<code>CONSOLE</code>节点，表示将日志输出到控制台；<code>APP_LOG</code>节点，表示将日志输出到文件中，并自动将最近 30 天的日志文件进行归档到<code>histroy </code>文件夹中。</p><p>如果想要读取 Spring Boot properties 或根据 Spring profile 定义日志配置，可以通过如下方式实现。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;configuration&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!--获取application.properties中定义的变量--&gt;</span></span>
<span class="line"><span>    &lt;springProperty scope=&quot;context&quot;</span></span>
<span class="line"><span>                    name=&quot;customLogPattern&quot;</span></span>
<span class="line"><span>                    source=&quot;custom.log.pattern&quot;</span></span>
<span class="line"><span>                    defaultValue=&quot;%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{90} - %msg%n&quot;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;springProperty scope=&quot;context&quot;</span></span>
<span class="line"><span>                    name=&quot;LogDir&quot;</span></span>
<span class="line"><span>                    source=&quot;custom.log.dir&quot;</span></span>
<span class="line"><span>                    defaultValue=&quot;log-demo&quot;/&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 控制台文件输出 --&gt;</span></span>
<span class="line"><span>    &lt;appender name=&quot;CONSOLE&quot; class=&quot;ch.qos.logback.core.ConsoleAppender&quot;&gt;</span></span>
<span class="line"><span>        &lt;encoder&gt;</span></span>
<span class="line"><span>            &lt;pattern&gt;\${customLogPattern}&lt;/pattern&gt;</span></span>
<span class="line"><span>            &lt;charset&gt;UTF-8&lt;/charset&gt;</span></span>
<span class="line"><span>        &lt;/encoder&gt;</span></span>
<span class="line"><span>    &lt;/appender&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!-- 文件输出 --&gt;</span></span>
<span class="line"><span>    &lt;appender name=&quot;APP_LOG&quot;</span></span>
<span class="line"><span>              class=&quot;ch.qos.logback.core.rolling.RollingFileAppender&quot;&gt;</span></span>
<span class="line"><span>        &lt;file&gt;\${LogDir}/log_info.log&lt;/file&gt;</span></span>
<span class="line"><span>        &lt;encoder class=&quot;ch.qos.logback.classic.encoder.PatternLayoutEncoder&quot;&gt;</span></span>
<span class="line"><span>            &lt;pattern&gt;\${customLogPattern}&lt;/pattern&gt;</span></span>
<span class="line"><span>            &lt;charset&gt;UTF-8&lt;/charset&gt;</span></span>
<span class="line"><span>        &lt;/encoder&gt;</span></span>
<span class="line"><span>    &lt;/appender&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!--获取springProfile变量--&gt;</span></span>
<span class="line"><span>    &lt;springProfile name=&quot;dev&quot;&gt;</span></span>
<span class="line"><span>        &lt;root level=&quot;INFO&quot;&gt;</span></span>
<span class="line"><span>            &lt;appender-ref ref=&quot;CONSOLE&quot; /&gt;</span></span>
<span class="line"><span>            &lt;appender-ref ref=&quot;APP_LOG&quot; /&gt;</span></span>
<span class="line"><span>        &lt;/root&gt;</span></span>
<span class="line"><span>    &lt;/springProfile&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;springProfile name=&quot;prod&quot;&gt;</span></span>
<span class="line"><span>        &lt;root level=&quot;INFO&quot;&gt;</span></span>
<span class="line"><span>            &lt;appender-ref ref=&quot;APP_LOG&quot; /&gt;</span></span>
<span class="line"><span>        &lt;/root&gt;</span></span>
<span class="line"><span>    &lt;/springProfile&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/configuration&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>application.properties</code>文件相关的配置参数如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 指定spring profiles 参数</span></span>
<span class="line"><span>spring.profiles.active=dev</span></span>
<span class="line"><span># 自定义打印格式</span></span>
<span class="line"><span>custom.log.pattern=%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{90} - %msg%n</span></span>
<span class="line"><span># 自定义日志存储路径</span></span>
<span class="line"><span>custom.log.dir=app-demo</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2、log4j2-自定义配置" tabindex="-1"><a class="header-anchor" href="#_2-2、log4j2-自定义配置"><span><strong>2.2、Log4j2 自定义配置</strong></span></a></h4><p>如果项目更倾向于使用 Log4j2 而不是 Logback，迁移方式也很简单。</p><p>首先，需要排除掉默认 Logback 相关依赖库，然后添加<code>log4j2</code>相关依赖包，示例如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;spring-boot-starter&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;exclusions&gt;</span></span>
<span class="line"><span>        &lt;exclusion&gt;</span></span>
<span class="line"><span>            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>            &lt;artifactId&gt;spring-boot-starter-logging&lt;/artifactId&gt;</span></span>
<span class="line"><span>        &lt;/exclusion&gt;</span></span>
<span class="line"><span>    &lt;/exclusions&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span>
<span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;spring-boot-starter-log4j2&lt;/artifactId&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>与<code>Logback</code>类似，当添加相关依赖包之后，Spring Boot 默认带了一个<code>log4j2.xml</code> 日志配置文件，在<code>org/springframework/boot/logging/log4j2/log4j2.xml</code>。</p><p>但是，基于业务的需要，通常我们会自定义配置文件，一般写法如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span></span>
<span class="line"><span>&lt;Configuration status=&quot;info&quot; monitorInterval=&quot;3&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;!--变量配置--&gt;</span></span>
<span class="line"><span>    &lt;Properties&gt;</span></span>
<span class="line"><span>        &lt;!--定义日志存储的路径 --&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;log.dir&quot; value=&quot;app-demo&quot;/&gt;</span></span>
<span class="line"><span>        &lt;!-- 定义日志输出格式 --&gt;</span></span>
<span class="line"><span>        &lt;property name=&quot;custom.log.pattern&quot; value=&quot;%d{yyyy-MM-dd HH:mm:ss} [%t] %-5level %l %msg%n&quot;/&gt;</span></span>
<span class="line"><span>    &lt;/Properties&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;Appenders&gt;</span></span>
<span class="line"><span>        &lt;!-- 控制台输出 --&gt;</span></span>
<span class="line"><span>        &lt;Console name=&quot;CONSOLE&quot; target=&quot;SYSTEM_OUT&quot;&gt;</span></span>
<span class="line"><span>            &lt;PatternLayout pattern=&quot;\${custom.log.pattern}&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/Console&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        &lt;!-- 文件输出 --&gt;</span></span>
<span class="line"><span>        &lt;RollingFile name=&quot;APP_LOG&quot; fileName=&quot;\${log.dir}/app.log&quot;</span></span>
<span class="line"><span>                     filePattern=&quot;\${log.dir}/app-%d{MM-dd-yyyy}-%i.log.gz&quot;&gt;</span></span>
<span class="line"><span>            &lt;PatternLayout pattern=&quot;\${custom.log.pattern}&quot;/&gt;</span></span>
<span class="line"><span>            &lt;Policies&gt;</span></span>
<span class="line"><span>                &lt;TimeBasedTriggeringPolicy/&gt;</span></span>
<span class="line"><span>                &lt;!-- size根据实际的日志量填写 --&gt;</span></span>
<span class="line"><span>                &lt;SizeBasedTriggeringPolicy size=&quot;100 MB&quot;/&gt;</span></span>
<span class="line"><span>            &lt;/Policies&gt;</span></span>
<span class="line"><span>        &lt;/RollingFile&gt;</span></span>
<span class="line"><span>    &lt;/Appenders&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    &lt;Loggers&gt;</span></span>
<span class="line"><span>        &lt;!-- 日志记录级别 --&gt;</span></span>
<span class="line"><span>        &lt;Root level=&quot;info&quot;&gt;</span></span>
<span class="line"><span>            &lt;AppenderRef ref=&quot;CONSOLE&quot;/&gt;</span></span>
<span class="line"><span>            &lt;AppenderRef ref=&quot;APP_LOG&quot;/&gt;</span></span>
<span class="line"><span>        &lt;/Root&gt;</span></span>
<span class="line"><span>    &lt;/Loggers&gt;</span></span>
<span class="line"><span>&lt;/Configuration&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时如果代码中采用的是门面模式的编程方式，无需做任何的调整，即可实现日志框架的切换改造。</p><h2 id="_03、小结" tabindex="-1"><a class="header-anchor" href="#_03、小结"><span><strong>03、小结</strong></span></a></h2><p>最后总结一下，对于简单的应用场景，并发量不高的环境下，可以采用 Logback 来实现日志打印；如果对性能要求较高，可以采用 Log4j2，据官方提供的测试报告中，Log4j2 在性能和新技术的应用，比 Logback 领先，毕竟是后起之秀，但是兼容性方面，Logback 更优。</p>`,45)),s(i,{colorful:"",service:"email,qq,qzone,qrcode,weibo,telegram,twitter"})])}const b=l(o,[["render",g],["__file","Spring Boot 配置日志输出.html.vue"]]),h=JSON.parse('{"path":"/dev/Spring%20Boot%20%E9%85%8D%E7%BD%AE%E6%97%A5%E5%BF%97%E8%BE%93%E5%87%BA.html","title":"Spring Boot 配置日志输出","lang":"zh-CN","frontmatter":{"title":"Spring Boot 配置日志输出","excerpt":null,"description":"Spring Boot 配置日志输出","date":"2024-08-28T00:00:00.000Z","category":"Java","tag":"Java","author":"xlc520","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/Spring%20Boot%20%E9%85%8D%E7%BD%AE%E6%97%A5%E5%BF%97%E8%BE%93%E5%87%BA.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"Spring Boot 配置日志输出"}],["meta",{"property":"og:description","content":"Spring Boot 配置日志输出"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1724773685155-0.webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-07T06:26:06.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2024-08-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-07T06:26:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Spring Boot 配置日志输出\\",\\"image\\":[\\"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1724773685155-0.webp\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1724773685155-1.webp\\"],\\"datePublished\\":\\"2024-08-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-07T06:26:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"01、背景介绍","slug":"_01、背景介绍","link":"#_01、背景介绍","children":[]},{"level":2,"title":"02、Spring Boot 日志配置","slug":"_02、spring-boot-日志配置","link":"#_02、spring-boot-日志配置","children":[]},{"level":2,"title":"03、小结","slug":"_03、小结","link":"#_03、小结","children":[]}],"git":{"createdTime":1725690366000,"updatedTime":1725690366000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":7.33,"words":2199},"filePathRelative":"dev/Spring Boot 配置日志输出.md","localizedDate":"2024年8月28日","excerpt":""}');export{b as comp,h as data};
