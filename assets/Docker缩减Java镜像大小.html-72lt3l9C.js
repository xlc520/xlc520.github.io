import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as l,c as d,b as n,n as r,g as c,r as a,a as t}from"./app-DWXdHMII.js";const v={};function u(o,s){const i=a("VPBanner"),e=a("Share");return l(),d("div",null,[n(i,r(c({title:"Docker缩减Java镜像大小",content:"Docker缩减Java镜像大小",logo:null,color:"var(--banner-text)",background:"rgba(217, 244, 208, 0.5)",actions:[{text:"Docker缩减Java镜像大小",link:"/dev/Docker缩减Java镜像大小"}]})),null,16),s[0]||(s[0]=t(`<h1 id="docker缩减java镜像大小" tabindex="-1"><a class="header-anchor" href="#docker缩减java镜像大小"><span>Docker缩减Java镜像大小</span></a></h1><p>在当今的软件开发领域，微服务架构和容器化应用已成为常态。随着应用程序的复杂性和规模不断增加，开发者们面临的一个主要挑战是如何有效管理和优化应用程序的体积。尤其是在使用 Java 进行开发时，生成的 Docker 镜像往往会相对较大，这不仅影响了部署速度，还增加了网络传输的负担和存储成本。因此，如何精简镜像大小成为了每个开发者亟待解决的问题。</p><p>本文将深入探讨如何通过 jlink 工具生成更小的 Java 运行时环境（JRE）镜像，并自动化整个过程。我们将分析不同模块的依赖关系，确保仅包括运行应用程序所需的最小模块。通过这样的方法，不仅可以提高应用程序的效率，还能优化资源的使用，让我们的微服务更加轻量、灵活。</p><p>我们将使用之前文章中构建的Spring Web应用来演示这些技巧，该文章是关于使用RFC-9457规范进行错误处理。我们的应用仅包含两个端点：</p><p>GET /users/</p><p>: 根据ID获取用户 POST /users : 创建新用户</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@RestController</span></span>
<span class="line"><span>@RequestMapping(&quot;/api/users&quot;)</span></span>
<span class="line"><span>@RequiredArgsConstructor</span></span>
<span class="line"><span>public class UserController {</span></span>
<span class="line"><span>    private final UserService userService;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @GetMapping(&quot;{id}&quot;)</span></span>
<span class="line"><span>    public User getUser(@PathVariable Long id) {</span></span>
<span class="line"><span>        return userService.getUserById(id)</span></span>
<span class="line"><span>                .orElseThrow(() -&gt; new UserNotFoundException(id, &quot;/api/users&quot;));</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @PostMapping</span></span>
<span class="line"><span>    public User createUser(@Valid @RequestBody User user) {</span></span>
<span class="line"><span>        return userService.createUser(user);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看起来没什么吧？但正如你将看到的，即使是最简单的Docker镜像（不进行任何优化）大小也可能相当大。</p><p>我们为什么要关心镜像大小？</p><p>镜像大小对你作为开发者或组织的性能有显著影响。特别是在处理多个服务的大型项目时，镜像的大小可能会相当庞大，这可能会让你花费大量的金钱和时间。</p><p>一些避免大型镜像的原因包括：</p><ul><li>磁盘空间：你在Docker注册表和生产服务器上浪费了磁盘空间。</li><li>构建时间延长：镜像越大，构建和推送镜像所需的时间越长。</li><li>安全性：镜像越大，依赖项越多，攻击面也越大。</li><li>带宽：镜像越大，从注册表拉取和推送镜像时的带宽消耗越高。</li></ul><p>使用简单明了的Dockerfile</p><p>基础镜像 Matter ✌🏽 : 选择合适的基础镜像</p><p>在考虑优化之前，你应该始终注意用于打包应用的基础镜像。你选择的基础镜像可能对最终镜像的大小产生显著影响。</p><p>可以用来打包Java应用的基础镜像有几种，包括：</p><ul><li>JDK Alpine基础镜像：这些镜像体积较小，但不适合所有应用，因此可能会面临一些库的兼容性问题。</li><li>JDK Slim基础镜像：这些镜像基于Debian或Ubuntu，相较于完整的JDK镜像来说体积较小，但仍然比较大。</li><li>JDK完整基础镜像：这些镜像体积较大，包含运行应用所需的所有模块和依赖项。</li></ul><p>为了给你一个基础镜像大小的概念，以下是openjdk:17-jdk-slim（瘦身版）和eclipse-temurin:17-jdk-alpine镜像大小的比较：</p><p>已知应用程序（jar）的大小约为20MB。</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728611720648-5.webp" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>为了在Docker镜像中打包我们的工件，我们需要在应用根目录中定义一个Dockerfile，如下所示：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>FROM openjdk:17-jdk-slim</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置容器中的工作目录</span></span>
<span class="line"><span>WORKDIR /app</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 创建用户</span></span>
<span class="line"><span>RUN addgroup --system spring &amp;&amp; adduser --system spring --ingroup spring</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 切换到用户</span></span>
<span class="line"><span>USER spring:spring</span></span>
<span class="line"><span></span></span>
<span class="line"><span>COPY target/*.jar app.jar</span></span>
<span class="line"><span></span></span>
<span class="line"><span>EXPOSE 8080</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CMD [&quot;java&quot;, &quot;-jar&quot;, &quot;app.jar&quot;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义好Dockerfile后，可以使用以下命令构建镜像：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker build -t user-service .</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>完成后，你应该会有一个名为user-service的Docker镜像，正如你所看到的，与应用程序工件的大小相比，镜像的大小相当大，约为674MB。</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1730455841996-1.webp" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>等等，这只是一个只有两个端点的小项目，没有任何依赖项，那么对于一个有数十个依赖项和文件的应用来说，情况会如何呢？</p><p>使用 <code>eclipse-temurin:17-jdk-alpine</code> 作为基础镜像。</p><p>Dockerfile.base-temurin</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>FROM eclipse-temurin:17-jdk-alpine</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ARG APPLICATION_USER=spring</span></span>
<span class="line"><span># 创建一个用户来运行应用，不以root用户运行</span></span>
<span class="line"><span>RUN addgroup --system $APPLICATION_USER &amp;&amp; adduser --system $APPLICATION_USER --ingroup $APPLICATION_USER</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 创建应用目录</span></span>
<span class="line"><span>RUN mkdir /app &amp;&amp; chown -R $APPLICATION_USER /app</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置运行应用的用户</span></span>
<span class="line"><span>USER $APPLICATION_USER</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 将jar文件复制到容器中</span></span>
<span class="line"><span>COPY --chown=$APPLICATION_USER:$APPLICATION_USER target/*.jar /app/app.jar</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置工作目录</span></span>
<span class="line"><span>WORKDIR /app</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 暴露端口</span></span>
<span class="line"><span>EXPOSE 8080</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 运行应用</span></span>
<span class="line"><span>ENTRYPOINT [&quot;java&quot;, &quot;-jar&quot;, &quot;/app/app.jar&quot;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用以下命令构建镜像后：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker build -t user-service:alpine -f Dockerfile.base-alpine . --platform=linux/amd64</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>🚨 附注</p><p>重要提示：如果你在Apple Silicon的MAC上构建镜像，可能会遇到以下问题：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&gt; [internal] load metadata for docker.io/library/eclipse-temurin:17-jdk-alpine:</span></span>
<span class="line"><span>Dockerfile:2</span></span>
<span class="line"><span>1 | # First stage, build the custom JRE</span></span>
<span class="line"><span>2 | &gt;&gt;&gt; FROM eclipse-temurin:17-jdk-alpine AS jre-builder</span></span>
<span class="line"><span>3 |</span></span>
<span class="line"><span>4 | # Install binutils, required by jlink</span></span>
<span class="line"><span>ERROR: failed to solve: eclipse-temurin:17-jdk-alpine: no match for platform in manifest: not found</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>要解决此问题，你可以在Docker构建命令中添加：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>--platform=linux/amd64</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或者通过运行以下命令将默认平台设置为 <code>linux/amd64</code>：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>export DOCKER_DEFAULT_PLATFORM=linux/amd64</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用 <code>eclipse-temurin:17-jdk-alpine</code> 作为基础镜像构建完镜像后，我们得到了这个结果：</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1730455841996-2.webp" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>看看两个镜像的大小，使用 <code>eclipse-temurin:17-jdk-alpine</code> 作为基础镜像的镜像大小为180MB，比使用 <code>openjdk:17-jdk-slim</code> 作为基础镜像的674MB小73%。</p><p>实际优化</p><p>等一下，为什么我们不能使用JRE镜像而使用JDK镜像呢？</p><p>好问题！这是因为从Java 11开始，JRE不再可用。</p><p>最重要的注意事项是“用户可以使用jlink创建更小的自定义运行时”。</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1730455841996-3.webp" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>使用 jlink 构建自定义 JRE 镜像</p><p><code>jlink</code> 是一个工具，可用于创建仅包含运行应用所需模块的自定义运行时镜像。</p><p>👉 如果你的应用不与数据库交互，则无需在镜像中包含 <code>java.sql</code> 模块。如果你不与桌面GUI交互，则无需在镜像中包含 <code>java.desktop</code> 模块，等等。</p><p>这有点像JRE镜像的替代品，但可以更好地控制你想要在镜像中使用的模块。</p><p>因此，使用 <code>jlink</code>，我们的Dockerfile应该如下所示：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 第一阶段，构建自定义JRE</span></span>
<span class="line"><span>FROM eclipse-temurin:17-jdk-alpine AS jre-builder</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装binutils，jlink所需</span></span>
<span class="line"><span>RUN apk update &amp;&amp; apk add binutils</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 构建小型JRE镜像</span></span>
<span class="line"><span>RUN $JAVA_HOME/bin/jlink \\</span></span>
<span class="line"><span>         --verbose \\</span></span>
<span class="line"><span>         --add-modules ALL-MODULE-PATH \\</span></span>
<span class="line"><span>         --strip-debug \\</span></span>
<span class="line"><span>         --no-man-pages \\</span></span>
<span class="line"><span>         --no-header-files \\</span></span>
<span class="line"><span>         --compress=2 \\</span></span>
<span class="line"><span>         --output /optimized-jdk-17</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 第二阶段，使用自定义JRE并构建应用镜像</span></span>
<span class="line"><span>FROM alpine:latest</span></span>
<span class="line"><span>ENV JAVA_HOME=/opt/jdk/jdk-17</span></span>
<span class="line"><span>ENV PATH=&quot;\${JAVA_HOME}/bin:\${PATH}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 从基础镜像中复制JRE</span></span>
<span class="line"><span>COPY --from=jre-builder /optimized-jdk-17 $JAVA_HOME</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 添加应用用户</span></span>
<span class="line"><span>ARG APPLICATION_USER=spring</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 创建一个用户来运行应用，不以root用户运行</span></span>
<span class="line"><span>RUN addgroup --system $APPLICATION_USER &amp;&amp; adduser --system $APPLICATION_USER --ingroup $APPLICATION_USER</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 创建应用目录</span></span>
<span class="line"><span>RUN mkdir /app &amp;&amp; chown -R $APPLICATION_USER /app</span></span>
<span class="line"><span></span></span>
<span class="line"><span>COPY --chown=$APPLICATION_USER:$APPLICATION_USER target/*.jar /app/app.jar</span></span>
<span class="line"><span></span></span>
<span class="line"><span>WORKDIR /app</span></span>
<span class="line"><span></span></span>
<span class="line"><span>USER $APPLICATION_USER</span></span>
<span class="line"><span></span></span>
<span class="line"><span>EXPOSE 8080</span></span>
<span class="line"><span>ENTRYPOINT [ &quot;java&quot;, &quot;-jar&quot;, &quot;/app/app.jar&quot; ]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们解释一下我们在这里所做的事情：</p><p>我们有两个阶段，第一阶段用于使用 <code>jlink</code> 构建自定义JRE镜像，第二阶段用于将应用打包在一个精简的Alpine镜像中。</p><p>在第一阶段，我们使用 <code>eclipse-temurin:17-jdk-alpine</code> 镜像来使用 <code>jlink</code> 构建自定义JRE镜像。然后，我们安装 <code>binutils</code>，这是 <code>jlink</code> 所需的，然后运行 <code>jlink</code> 来构建一个小型JRE镜像，使用 <code>--add-modules ALL-MODULE-PATH</code>（目前）包含运行应用所需的所有模块。</p><p>在第二阶段，我们使用Alpine镜像（其大小约为3MB）作为基础镜像来打包我们的应用，然后从第一阶段获取自定义JRE并将其用作 <code>JAVA_HOME</code>。</p><p>Dockerfile的其余部分与之前的相同，只是复制工件并使用自定义用户（而不是root）设置入口点。</p><p>然后我们可以使用以下命令构建镜像：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker build -t user-service:jlink-all-modules-temurin -f Dockerfile.jlink-all-modules.temurin .</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果你运行命令：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker images user-service</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>你会看到新Docker镜像的大小现在为85.3MB，比基础镜像小约95MB 🎉🥳</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1730455841997-4.webp" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>为了确保镜像按预期工作，你可以运行以下命令：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker run -p 8080:8080 user-service:jlink-all-modules-temurin</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>你应该会看到应用按预期运行。</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1730455841997-5.webp" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>这还不够 🤌🏽 作为优秀的开发者，我们总是希望改进我们的工作，让我们看看如何进一步减少镜像的大小。</p><p>目前镜像的大小依然较大，这是因为在 jlink 命令中使用 <code>--add-modules ALL-MODULE-PATH</code> 时，我们包含了运行应用程序所需的所有模块，但我们并不需要所有模块。让我们看看如何仅包含运行应用程序所需的模块，从而获得更小的镜像大小。</p><p>如何确定运行应用程序所需的模块？ 我们可以使用 JDK 附带的 jdeps 工具。jdeps 是一个可以分析 jar 文件依赖关系并生成所需模块列表的工具。</p><p>为此，我们可以在项目根目录下运行以下命令：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>jdeps --ignore-missing-deps -q \\</span></span>
<span class="line"><span>      --recursive \\</span></span>
<span class="line"><span>      --multi-release 17 \\</span></span>
<span class="line"><span>      --print-module-deps \\</span></span>
<span class="line"><span>      --class-path BOOT-INF/lib/* \\</span></span>
<span class="line"><span>      target/spring-error-handling-rfc-9457-0.0.1-SNAPSHOT.jar</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这将打印出运行应用程序所需的模块列表，在我们的案例中为：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>java.base,java.compiler,java.desktop,java.instrument,java.management,java.naming,java.net.http,java.prefs,java.rmi,java.scripting,java.security.jgss,java.sql,jdk.jfr,jdk.unsupported</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>我们可以简单地将这些模块替代 <code>ALL-MODULE-PATH</code>，修改 jlink 命令如下：</p><p>Dockerfile.jlink-known-modules.temurin</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 第一阶段，构建自定义 JRE</span></span>
<span class="line"><span>FROM openjdk:17-jdk-slim AS jre-builder</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装 jlink 所需的 binutils</span></span>
<span class="line"><span>RUN apt-get update -y &amp;&amp;  \\</span></span>
<span class="line"><span>    apt-get install -y binutils</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 构建小型 JRE 镜像</span></span>
<span class="line"><span>RUN $JAVA_HOME/bin/jlink \\</span></span>
<span class="line"><span>         --verbose \\</span></span>
<span class="line"><span>         --add-modules java.base,java.compiler,java.desktop,java.instrument,java.management,java.naming,java.net.http,java.prefs,java.rmi,java.scripting,java.security.jgss,java.sql,jdk.jfr,jdk.unsupported \\</span></span>
<span class="line"><span>         --strip-debug \\</span></span>
<span class="line"><span>         --no-man-pages \\</span></span>
<span class="line"><span>         --no-header-files \\</span></span>
<span class="line"><span>         --compress=2 \\</span></span>
<span class="line"><span>         --output /optimized-jdk-17</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 第二阶段，使用自定义 JRE 并构建应用镜像</span></span>
<span class="line"><span>FROM alpine:latest</span></span>
<span class="line"><span>ENV JAVA_HOME=/opt/jdk/jdk-17</span></span>
<span class="line"><span>ENV PATH=&quot;\${JAVA_HOME}/bin:\${PATH}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 从基础镜像复制 JRE</span></span>
<span class="line"><span>COPY --from=jre-builder /optimized-jdk-17 $JAVA_HOME</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 添加应用用户</span></span>
<span class="line"><span>ARG APPLICATION_USER=spring</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 创建用户以运行应用程序，不以 root 身份运行</span></span>
<span class="line"><span>RUN addgroup --system $APPLICATION_USER &amp;&amp;  adduser --system $APPLICATION_USER --ingroup $APPLICATION_USER</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 创建应用程序目录</span></span>
<span class="line"><span>RUN mkdir /app &amp;&amp; chown -R $APPLICATION_USER /app</span></span>
<span class="line"><span></span></span>
<span class="line"><span>COPY --chown=$APPLICATION_USER:$APPLICATION_USER target/*.jar /app/app.jar</span></span>
<span class="line"><span></span></span>
<span class="line"><span>WORKDIR /app</span></span>
<span class="line"><span></span></span>
<span class="line"><span>USER $APPLICATION_USER</span></span>
<span class="line"><span></span></span>
<span class="line"><span>EXPOSE 8080</span></span>
<span class="line"><span>ENTRYPOINT [ &quot;java&quot;, &quot;-jar&quot;, &quot;/app/app.jar&quot; ]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我们可以使用以下命令构建镜像：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker build -t user-service:jlink-known-modules-temurin -f Dockerfile.jlink-known-modules.temurin .</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这里是构建后的镜像大小：</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1730455841997-6.webp" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>我们得到了一个较小的镜像，大小为 57.8MB，而不是 85.3MB。</p><p>这很好，但我们能否自动化这个过程，而不是手动运行 jdeps 命令然后将模块复制到 jlink 命令中？</p><p>在 Dockerfile 中自动化该过程</p><p>Dockerfile.jlink-with-jdeps.temurin</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 第一阶段，构建自定义 JRE</span></span>
<span class="line"><span>FROM eclipse-temurin:17-jdk-alpine AS jre-builder</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RUN mkdir /opt/app</span></span>
<span class="line"><span>COPY . /opt/app</span></span>
<span class="line"><span></span></span>
<span class="line"><span>WORKDIR /opt/app</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ENV MAVEN_VERSION 3.5.4</span></span>
<span class="line"><span>ENV MAVEN_HOME /usr/lib/mvn</span></span>
<span class="line"><span>ENV PATH $MAVEN_HOME/bin:$PATH</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RUN apk update &amp;&amp; \\</span></span>
<span class="line"><span>    apk add --no-cache tar binutils</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RUN wget http://archive.apache.org/dist/maven/maven-3/$MAVEN_VERSION/binaries/apache-maven-$MAVEN_VERSION-bin.tar.gz &amp;&amp; \\</span></span>
<span class="line"><span>  tar -zxvf apache-maven-$MAVEN_VERSION-bin.tar.gz &amp;&amp; \\</span></span>
<span class="line"><span>  rm apache-maven-$MAVEN_VERSION-bin.tar.gz &amp;&amp; \\</span></span>
<span class="line"><span>  mv apache-maven-$MAVEN_VERSION /usr/lib/mvn</span></span>
<span class="line"><span></span></span>
<span class="line"><span>RUN mvn package -DskipTests</span></span>
<span class="line"><span>RUN jar xvf target/spring-error-handling-rfc-9457-0.0.1-SNAPSHOT.jar</span></span>
<span class="line"><span>RUN jdeps --ignore-missing-deps -q  \\</span></span>
<span class="line"><span>    --recursive  \\</span></span>
<span class="line"><span>    --multi-release 17  \\</span></span>
<span class="line"><span>    --print-module-deps  \\</span></span>
<span class="line"><span>    --class-path &#39;BOOT-INF/lib/*&#39;  \\</span></span>
<span class="line"><span>    target/spring-error-handling-rfc-9457-0.0.1-SNAPSHOT.jar &gt; modules.txt</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 构建小型 JRE 镜像</span></span>
<span class="line"><span>RUN $JAVA_HOME/bin/jlink \\</span></span>
<span class="line"><span>         --verbose \\</span></span>
<span class="line"><span>         --add-modules $(cat modules.txt) \\</span></span>
<span class="line"><span>         --strip-debug \\</span></span>
<span class="line"><span>         --no-man-pages \\</span></span>
<span class="line"><span>         --no-header-files \\</span></span>
<span class="line"><span>         --compress=2 \\</span></span>
<span class="line"><span>         --output /optimized-jdk-17</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 第二阶段，使用自定义 JRE 并构建应用镜像</span></span>
<span class="line"><span>FROM alpine:latest</span></span>
<span class="line"><span>ENV JAVA_HOME=/opt/jdk/jdk-17</span></span>
<span class="line"><span>ENV PATH=&quot;\${JAVA_HOME}/bin:\${PATH}&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 从基础镜像复制 JRE</span></span>
<span class="line"><span>COPY --from=jre-builder /optimized-jdk-17 $JAVA_HOME</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 添加应用用户</span></span>
<span class="line"><span>ARG APPLICATION_USER=spring</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 创建用户以运行应用程序，不以 root 身份运行</span></span>
<span class="line"><span>RUN addgroup --system $APPLICATION_USER &amp;&amp;  adduser --system $APPLICATION_USER --ingroup $APPLICATION_USER</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 创建应用程序目录</span></span>
<span class="line"><span>RUN mkdir /app &amp;&amp; chown -R $APPLICATION_USER /app</span></span>
<span class="line"><span></span></span>
<span class="line"><span>COPY --chown=$APPLICATION_USER:$APPLICATION_USER target/*.jar /app/app.jar</span></span>
<span class="line"><span></span></span>
<span class="line"><span>WORKDIR /app</span></span>
<span class="line"><span></span></span>
<span class="line"><span>USER $APPLICATION_USER</span></span>
<span class="line"><span></span></span>
<span class="line"><span>EXPOSE 8080</span></span>
<span class="line"><span>ENTRYPOINT [ &quot;java&quot;, &quot;-jar&quot;, &quot;/app/app.jar&quot; ]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我们可以使用以下命令构建镜像：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker build -t user-service:jlink-with-jdeps.temurin -f Dockerfile.jlink-with-jdeps.temurin . --platform=linux/amd64</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1730455841997-7.webp" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>额外提示 在结束之前，请注意，您可以使用 <code>.dockerignore</code> 文件排除某些文件和目录，以减少镜像在中间阶段的大小。</p><p>您还应该注意，选择小型基础镜像是好的，但请确保它具备良好的安全策略，并与您的应用程序兼容。</p><p>结论</p><p>通过本文的探讨，我们成功展示了如何利用 jlink 工具和 jdeps 工具来生成更加精简的 Java 镜像。我们不仅减少了镜像的体积，从 85.3MB 降至 57.8MB，节省了大量的存储和传输资源，而且还引入了自动化的过程，进一步提升了开发效率。</p><p>在持续追求优化的过程中，自动化工具和最佳实践是每个开发者的得力助手。通过使用 .dockerignore 文件来排除不必要的文件和目录，我们还可以在构建镜像的中间阶段进一步减少体积。选择一个适合的基础镜像并确保其安全性和兼容性，也同样重要。</p><p>最后，优化镜像不仅能提升应用程序的性能，更能增强整体系统的可维护性和可扩展性。希望大家能够在实际项目中应用这些技术，进一步推动软件开发的高效化和现代化。</p>`,96)),n(e,{colorful:"",service:"email,qq,qzone,qrcode,weibo,telegram,twitter"})])}const g=p(v,[["render",u],["__file","Docker缩减Java镜像大小.html.vue"]]),h=JSON.parse('{"path":"/dev/Docker%E7%BC%A9%E5%87%8FJava%E9%95%9C%E5%83%8F%E5%A4%A7%E5%B0%8F.html","title":"Docker缩减Java镜像大小","lang":"zh-CN","frontmatter":{"title":"Docker缩减Java镜像大小","excerpt":null,"description":"Docker缩减Java镜像大小","date":"2024-11-01T00:00:00.000Z","category":"Java","tag":"Java","author":"xlc520","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/Docker%E7%BC%A9%E5%87%8FJava%E9%95%9C%E5%83%8F%E5%A4%A7%E5%B0%8F.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"Docker缩减Java镜像大小"}],["meta",{"property":"og:description","content":"Docker缩减Java镜像大小"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728611720648-5.webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-15T14:46:53.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2024-11-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-15T14:46:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker缩减Java镜像大小\\",\\"image\\":[\\"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728611720648-5.webp\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1730455841996-1.webp\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1730455841996-2.webp\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1730455841996-3.webp\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1730455841997-4.webp\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1730455841997-5.webp\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1730455841997-6.webp\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1730455841997-7.webp\\"],\\"datePublished\\":\\"2024-11-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-15T14:46:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[],"git":{"createdTime":1731681483000,"updatedTime":1731682013000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":11.53,"words":3458},"filePathRelative":"dev/Docker缩减Java镜像大小.md","localizedDate":"2024年11月1日","excerpt":""}');export{g as comp,h as data};
