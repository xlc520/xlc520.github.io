import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as t,a as s,b as n,e,d as i,r as p}from"./app.fc175189.js";const l={},d=i(`<h1 id="万字总结-体系化带你全面认识-nginx" tabindex="-1"><a class="header-anchor" href="#万字总结-体系化带你全面认识-nginx" aria-hidden="true">#</a> 万字总结，体系化带你全面认识 Nginx</h1><h1 id="nginx-概述" tabindex="-1"><a class="header-anchor" href="#nginx-概述" aria-hidden="true">#</a> Nginx 概述</h1><p><img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/71499A3FDD1EB5D9F173A41782597C20.jpg" alt="img" loading="lazy"></p><p><code>Nginx</code> 是开源、高性能、高可靠的 <code>Web</code> 和反向代理服务器，而且支持热部署，几乎可以做到 7 * 24 小时不间断运行，即使运行几个月也不需要重新启动，还能在不间断服务的情况下对软件版本进行热更新。性能是 <code>Nginx</code> 最重要的考量，其占用内存少、并发能力强、能支持高达 5w 个并发连接数，最重要的是， <code>Nginx</code> 是免费的并可以商业化，配置使用也比较简单。</p><h1 id="nginx-特点" tabindex="-1"><a class="header-anchor" href="#nginx-特点" aria-hidden="true">#</a> Nginx 特点</h1><ul><li>高并发、高性能；</li><li>模块化架构使得它的扩展性非常好；</li><li>异步非阻塞的事件驱动模型这点和 <code>Node.js</code> 相似；</li><li>相对于其它服务器来说它可以连续几个月甚至更长而不需要重启服务器使得它具有高可靠性；</li><li>热部署、平滑升级；</li><li>完全开源，生态繁荣；</li></ul><h1 id="nginx-作用" tabindex="-1"><a class="header-anchor" href="#nginx-作用" aria-hidden="true">#</a> Nginx 作用</h1><p>Nginx 的最重要的几个使用场景：</p><ol><li>静态资源服务，通过本地文件系统提供服务；</li><li>反向代理服务，延伸出包括缓存、负载均衡等；</li><li><code>API</code> 服务， <code>OpenResty</code> ；</li></ol><p>对于前端来说 <code>Node.js</code> 并不陌生， <code>Nginx</code> 和 <code>Node.js</code> 的很多理念类似， <code>HTTP</code> 服务器、事件驱动、异步非阻塞等，且 <code>Nginx</code> 的大部分功能使用 <code>Node.js</code> 也可以实现，但 <code>Nginx</code> 和 <code>Node.js</code> 并不冲突，都有自己擅长的领域。<code>Nginx</code> 擅长于底层服务器端资源的处理（静态资源处理转发、反向代理，负载均衡等）， <code>Node.js</code> 更擅长上层具体业务逻辑的处理，两者可以完美组合。</p><p>用一张图表示：<img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/8B346DD20EA825CB156510DBE93383F9.jpg" alt="img" loading="lazy"></p><h1 id="nginx-安装" tabindex="-1"><a class="header-anchor" href="#nginx-安装" aria-hidden="true">#</a> Nginx 安装</h1><p>本文演示的是 <code>Linux</code> <code>centOS 7.x</code> 的操作系统上安装 <code>Nginx</code> ，至于在其它操作系统上进行安装可以网上自行搜索，都非常简单的。</p><p>使用 <code>yum</code> 安装 <code>Nginx</code> ：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>yum install nginx <span class="token operator">-</span>y
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装完成后，通过 <code>rpm -ql nginx</code> 命令查看 <code>Nginx</code> 的安装信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Nginx配置文件</span>
/etc/nginx/nginx.conf <span class="token comment"># nginx 主配置文件</span>
/etc/nginx/nginx.conf.default

<span class="token comment"># 可执行程序文件</span>
/usr/bin/nginx-upgrade
/usr/sbin/nginx

<span class="token comment"># nginx库文件</span>
/usr/lib/systemd/system/nginx.service <span class="token comment"># 用于配置系统守护进程</span>
/usr/lib64/nginx/modules <span class="token comment"># Nginx模块目录</span>

<span class="token comment"># 帮助文档</span>
/usr/share/doc/nginx-1.16.1
/usr/share/doc/nginx-1.16.1/CHANGES
/usr/share/doc/nginx-1.16.1/README
/usr/share/doc/nginx-1.16.1/README.dynamic
/usr/share/doc/nginx-1.16.1/UPGRADE-NOTES-1.6-to-1.10

<span class="token comment"># 静态资源目录</span>
/usr/share/nginx/html/404.html
/usr/share/nginx/html/50x.html
/usr/share/nginx/html/index.html

<span class="token comment"># 存放Nginx日志文件</span>
/var/log/nginx
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要关注的文件夹有两个：</p><ol><li><code>/etc/nginx/conf.d/</code> 是子配置项存放处， <code>/etc/nginx/nginx.conf</code> 主配置文件会默认把这个文件夹中所有子配置项都引入；</li><li><code>/usr/share/nginx/html/</code> 静态文件都放在这个文件夹，也可以根据你自己的习惯放在其他地方；</li></ol><h1 id="nginx-常用命令" tabindex="-1"><a class="header-anchor" href="#nginx-常用命令" aria-hidden="true">#</a> Nginx 常用命令</h1><p><code>systemctl</code> 系统命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 开机配置</span>
systemctl <span class="token builtin class-name">enable</span> nginx <span class="token comment"># 开机自动启动</span>
systemctl disable nginx <span class="token comment"># 关闭开机自动启动</span>

<span class="token comment"># 启动Nginx</span>
systemctl start nginx <span class="token comment"># 启动Nginx成功后，可以直接访问主机IP，此时会展示Nginx默认页面</span>

<span class="token comment"># 停止Nginx</span>
systemctl stop nginx

<span class="token comment"># 重启Nginx</span>
systemctl restart nginx

<span class="token comment"># 重新加载Nginx</span>
systemctl reload nginx

<span class="token comment"># 查看 Nginx 运行状态</span>
systemctl status nginx

<span class="token comment"># 查看Nginx进程</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> nginx

<span class="token comment"># 杀死Nginx进程</span>
<span class="token function">kill</span> <span class="token parameter variable">-9</span> pid <span class="token comment"># 根据上面查看到的Nginx进程号，杀死Nginx进程，-9 表示强制结束进程</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Nginx</code> 应用程序命令：</p><div class="language-r line-numbers-mode" data-ext="r"><pre class="language-r"><code>nginx <span class="token operator">-</span>s reload  <span class="token comment"># 向主进程发送信号，重新加载配置文件，热重启</span>
nginx <span class="token operator">-</span>s reopen  <span class="token comment"># 重启 Nginx</span>
nginx <span class="token operator">-</span>s stop    <span class="token comment"># 快速关闭</span>
nginx <span class="token operator">-</span>s quit    <span class="token comment"># 等待工作进程处理完成后关闭</span>
nginx <span class="token operator">-</span>T         <span class="token comment"># 查看当前 Nginx 最终的配置</span>
nginx <span class="token operator">-</span>t         <span class="token comment"># 检查配置是否有问题</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="nginx-核心配置" tabindex="-1"><a class="header-anchor" href="#nginx-核心配置" aria-hidden="true">#</a> Nginx 核心配置</h1><h2 id="配置文件结构" tabindex="-1"><a class="header-anchor" href="#配置文件结构" aria-hidden="true">#</a> 配置文件结构</h2><p><code>Nginx</code> 的典型配置示例：</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token operator">#</span> main段配置信息
user  nginx<span class="token punctuation">;</span>                        <span class="token operator">#</span> 运行用户，默认即是nginx，可以不进行设置
worker_processes  auto<span class="token punctuation">;</span>             <span class="token operator">#</span> Nginx 进程数，一般设置为和 CPU 核数一样
error_log  <span class="token operator">/</span>var<span class="token operator">/</span>log<span class="token operator">/</span>nginx<span class="token operator">/</span>error<span class="token punctuation">.</span>log warn<span class="token punctuation">;</span>   <span class="token operator">#</span> Nginx 的错误日志存放目录
pid        <span class="token operator">/</span>var<span class="token operator">/</span>run<span class="token operator">/</span>nginx<span class="token punctuation">.</span>pid<span class="token punctuation">;</span>      <span class="token operator">#</span> Nginx 服务启动时的 pid 存放位置

<span class="token operator">#</span> events段配置信息
<span class="token function">events</span> <span class="token punctuation">{</span>
    use epoll<span class="token punctuation">;</span>     <span class="token operator">#</span> 使用epoll的I<span class="token operator">/</span>O模型<span class="token punctuation">(</span>如果你不知道Nginx该使用哪种轮询方法，会自动选择一个最适合你操作系统的<span class="token punctuation">)</span>
    worker_connections <span class="token number">1024</span><span class="token punctuation">;</span>   <span class="token operator">#</span> 每个进程允许最大并发数
<span class="token punctuation">}</span>

<span class="token operator">#</span> http段配置信息
<span class="token operator">#</span> 配置使用最频繁的部分，代理、缓存、日志定义等绝大多数功能和第三方模块的配置都在这里设置
<span class="token function">http</span> <span class="token punctuation">{</span> 
    <span class="token operator">#</span> 设置日志模式
    log_format  main  <span class="token string">&#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
                      <span class="token string">&#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
                      <span class="token string">&#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;</span><span class="token punctuation">;</span>

    access_log  <span class="token operator">/</span>var<span class="token operator">/</span>log<span class="token operator">/</span>nginx<span class="token operator">/</span>access<span class="token punctuation">.</span>log  main<span class="token punctuation">;</span>   <span class="token operator">#</span> Nginx访问日志存放位置

    sendfile            on<span class="token punctuation">;</span>   <span class="token operator">#</span> 开启高效传输模式
    tcp_nopush          on<span class="token punctuation">;</span>   <span class="token operator">#</span> 减少网络报文段的数量
    tcp_nodelay         on<span class="token punctuation">;</span>
    keepalive_timeout   <span class="token number">65</span><span class="token punctuation">;</span>   <span class="token operator">#</span> 保持连接的时间，也叫超时时间，单位秒
    types_hash_max_size <span class="token number">2048</span><span class="token punctuation">;</span>

    include             <span class="token operator">/</span>etc<span class="token operator">/</span>nginx<span class="token operator">/</span>mime<span class="token punctuation">.</span>types<span class="token punctuation">;</span>      <span class="token operator">#</span> 文件扩展名与类型映射表
    default_type        application<span class="token operator">/</span>octet<span class="token operator">-</span>stream<span class="token punctuation">;</span>   <span class="token operator">#</span> 默认文件类型

    include <span class="token operator">/</span>etc<span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token punctuation">.</span>d<span class="token operator">/</span><span class="token operator">*</span><span class="token punctuation">.</span>conf<span class="token punctuation">;</span>   <span class="token operator">#</span> 加载子配置项
    
    <span class="token operator">#</span> server段配置信息
    <span class="token function">server</span> <span class="token punctuation">{</span>
     listen       <span class="token number">80</span><span class="token punctuation">;</span>       <span class="token operator">#</span> 配置监听的端口
     server_name  localhost<span class="token punctuation">;</span>    <span class="token operator">#</span> 配置的域名
      
     <span class="token operator">#</span> location段配置信息
     location <span class="token operator">/</span> <span class="token punctuation">{</span>
      root   <span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token punctuation">;</span>  <span class="token operator">#</span> 网站根目录
      index  index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>htm<span class="token punctuation">;</span>   <span class="token operator">#</span> 默认首页文件
      deny <span class="token number">172.168</span><span class="token number">.22</span><span class="token number">.11</span><span class="token punctuation">;</span>   <span class="token operator">#</span> 禁止访问的ip地址，可以为all
      allow <span class="token number">172.168</span><span class="token number">.33</span><span class="token number">.44</span>；<span class="token operator">#</span> 允许访问的ip地址，可以为all
     <span class="token punctuation">}</span>
     
     error_page <span class="token number">500</span> <span class="token number">502</span> <span class="token number">503</span> <span class="token number">504</span> <span class="token operator">/</span>50x<span class="token punctuation">.</span>html<span class="token punctuation">;</span>  <span class="token operator">#</span> 默认50x对应的访问页面
     error_page <span class="token number">400</span> <span class="token number">404</span> error<span class="token punctuation">.</span>html<span class="token punctuation">;</span>   <span class="token operator">#</span> 同上
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>main</code> 全局配置，对全局生效；</li><li><code>events</code> 配置影响 <code>Nginx</code> 服务器与用户的网络连接；</li><li><code>http</code> 配置代理，缓存，日志定义等绝大多数功能和第三方模块的配置；</li><li><code>server</code> 配置虚拟主机的相关参数，一个 <code>http</code> 块中可以有多个 <code>server</code> 块；</li><li><code>location</code> 用于配置匹配的 <code>uri</code> ；</li><li><code>upstream</code> 配置后端服务器具体地址，负载均衡配置不可或缺的部分；</li></ul><p>用一张图清晰的展示它的层级结构：<img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/E8B89B4320FBEB0CAB7B3279260CADCA.jpg" alt="img" loading="lazy"></p><h2 id="配置文件-main-段核心参数" tabindex="-1"><a class="header-anchor" href="#配置文件-main-段核心参数" aria-hidden="true">#</a> 配置文件 main 段核心参数</h2><h3 id="user" tabindex="-1"><a class="header-anchor" href="#user" aria-hidden="true">#</a> user</h3><p>指定运行 <code>Nginx</code> 的 <code>woker</code> 子进程的属主和属组，其中组可以不指定。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">user</span> USERNAME <span class="token punctuation">[</span><span class="token keyword">GROUP</span><span class="token punctuation">]</span>

<span class="token keyword">user</span> nginx lion<span class="token punctuation">;</span> <span class="token comment"># 用户是nginx;组是lion</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pid" tabindex="-1"><a class="header-anchor" href="#pid" aria-hidden="true">#</a> pid</h3><p>指定运行 <code>Nginx</code> <code>master</code> 主进程的 <code>pid</code> 文件存放路径。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pid /opt/nginx/logs/nginx.pid <span class="token comment"># master主进程的的pid存放在nginx.pid的文件</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="worker-rlimit-nofile-number" tabindex="-1"><a class="header-anchor" href="#worker-rlimit-nofile-number" aria-hidden="true">#</a> worker_rlimit_nofile_number</h3><p>指定 <code>worker</code> 子进程可以打开的最大文件句柄数。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>worker_rlimit_nofile <span class="token number">20480</span><span class="token punctuation">;</span> <span class="token comment"># 可以理解成每个worker子进程的最大连接数量。</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="worker-rlimit-core" tabindex="-1"><a class="header-anchor" href="#worker-rlimit-core" aria-hidden="true">#</a> worker_rlimit_core</h3><p>指定 <code>worker</code> 子进程异常终止后的 <code>core</code> 文件，用于记录分析问题。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>worker_rlimit_core 50M<span class="token punctuation">;</span> <span class="token comment"># 存放大小限制</span>
working_directory /opt/nginx/tmp<span class="token punctuation">;</span> <span class="token comment"># 存放目录</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="worker-processes-number" tabindex="-1"><a class="header-anchor" href="#worker-processes-number" aria-hidden="true">#</a> worker_processes_number</h3><p>指定 <code>Nginx</code> 启动的 <code>worker</code> 子进程数量。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>worker_processes <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment"># 指定具体子进程数量</span>
worker_processes auto<span class="token punctuation">;</span> <span class="token comment"># 与当前cpu物理核心数一致</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="worker-cpu-affinity" tabindex="-1"><a class="header-anchor" href="#worker-cpu-affinity" aria-hidden="true">#</a> worker_cpu_affinity</h3><p>将每个 <code>worker</code> 子进程与我们的 <code>cpu</code> 物理核心绑定。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>worker_cpu_affinity 0001 0010 0100 1000; <span class="token comment"># 4个物理核心，4个worker子进程</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/36DEAFC3AD23969A9EFBFB601B9EB51B.jpg" alt="img" loading="lazy"></p><p>将每个 <code>worker</code> 子进程与特定 <code>CPU</code> 物理核心绑定，优势在于，避免同一个 <code>worker</code> 子进程在不同的 <code>CPU</code> 核心上切换，缓存失效，降低性能。但其并不能真正的避免进程切换。</p><h3 id="worker-priority" tabindex="-1"><a class="header-anchor" href="#worker-priority" aria-hidden="true">#</a> worker_priority</h3><p>指定 <code>worker</code> 子进程的 <code>nice</code> 值，以调整运行 <code>Nginx</code> 的优先级，通常设定为负值，以优先调用 <code>Nginx</code> 。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>worker_priority -10<span class="token punctuation">;</span> <span class="token comment"># 120-10=110，110就是最终的优先级</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Linux</code> 默认进程的优先级值是120，值越小越优先；<code>nice</code> 定范围为 <code>-20</code> 到 <code>+19</code> 。</p><p>[备注] 应用的默认优先级值是120加上 <code>nice</code> 值等于它最终的值，这个值越小，优先级越高。</p><h3 id="worker-shutdown-timeout" tabindex="-1"><a class="header-anchor" href="#worker-shutdown-timeout" aria-hidden="true">#</a> worker_shutdown_timeout</h3><p>指定 <code>worker</code> 子进程优雅退出时的超时时间。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>worker_shutdown_timeout 5s<span class="token punctuation">;</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="timer-resolution" tabindex="-1"><a class="header-anchor" href="#timer-resolution" aria-hidden="true">#</a> timer_resolution</h3><p><code>worker</code> 子进程内部使用的计时器精度，调整时间间隔越大，系统调用越少，有利于性能提升；反之，系统调用越多，性能下降。</p><div class="language-undefined line-numbers-mode" data-ext="undefined"><pre class="language-undefined"><code>timer_resolution 100ms;
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>Linux</code> 系统中，用户需要获取计时器时需要向操作系统内核发送请求，有请求就必然会有开销，因此这个间隔越大开销就越小。</p><h3 id="daemon" tabindex="-1"><a class="header-anchor" href="#daemon" aria-hidden="true">#</a> daemon</h3><p>指定 <code>Nginx</code> 的运行方式，前台还是后台，前台用于调试，后台用于生产。</p><div class="language-vbnet line-numbers-mode" data-ext="vbnet"><pre class="language-vbnet"><code>daemon <span class="token keyword">off</span><span class="token punctuation">;</span> # 默认是<span class="token keyword">on</span>，后台运行模式
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置文件-events-段核心参数" tabindex="-1"><a class="header-anchor" href="#配置文件-events-段核心参数" aria-hidden="true">#</a> 配置文件 events 段核心参数</h2><h3 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> use</h3><p><code>Nginx</code> 使用何种事件驱动模型。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">use</span> method<span class="token punctuation">;</span> <span class="token comment"># 不推荐配置它，让nginx自己选择</span>

method 可选值为：<span class="token keyword">select</span>、poll、kqueue、epoll、<span class="token operator">/</span>dev<span class="token operator">/</span>poll、eventport
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="worker-connections" tabindex="-1"><a class="header-anchor" href="#worker-connections" aria-hidden="true">#</a> worker_connections</h3><p><code>worker</code> 子进程能够处理的最大并发连接数。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>worker_connections 1024 <span class="token comment"># 每个子进程的最大连接数为1024</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="accept-mutex" tabindex="-1"><a class="header-anchor" href="#accept-mutex" aria-hidden="true">#</a> accept_mutex</h3><p>是否打开负载均衡互斥锁。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>accept_mutex <span class="token keyword">on</span> # 默认是off关闭的，这里推荐打开
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="server-name-指令" tabindex="-1"><a class="header-anchor" href="#server-name-指令" aria-hidden="true">#</a> server_name 指令</h2><p>指定虚拟主机域名。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server_name name1 name2 name3

<span class="token comment"># 示例：</span>
server_name www.nginx.com<span class="token punctuation">;</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>域名匹配的四种写法：</p><ul><li>精确匹配：<code>server_name www.nginx.com</code> ;</li><li>左侧通配：<code>server_name *.nginx.com</code> ;</li><li>右侧统配：<code>server_name www.nginx.*</code> ;</li><li>正则匹配：<code>server_name ~^www\\.nginx\\.*$</code> ;</li></ul><p>匹配优先级：<strong>精确匹配 &gt; 左侧通配符匹配 &gt; 右侧通配符匹配 &gt; 正则表达式匹配</strong></p><p><code>server_name</code> 配置实例：</p><p>1、配置本地 <code>DNS</code> 解析 <code>vim /etc/hosts</code> （ <code>macOS</code> 系统）</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code># 添加如下内容，其中 121.42.11.34 是阿里云服务器IP地址
121.42.11.34 www.nginx-test.com
121.42.11.34 mail.nginx-test.com
121.42.11.34 www.nginx-test.org
121.42.11.34 doc.nginx-test.com
121.42.11.34 www.nginx-test.cn
121.42.11.34 fe.nginx-test.club
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[注意] 这里使用的是虚拟域名进行测试，因此需要配置本地 <code>DNS</code> 解析，如果使用阿里云上购买的域名，则需要在阿里云上设置好域名解析。</p><p>2、配置阿里云 <code>Nginx</code> ，<code>vim /etc/nginx/nginx.conf</code></p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token operator">#</span> 这里只列举了http端中的sever端配置

<span class="token operator">#</span> 左匹配
<span class="token function">server</span> <span class="token punctuation">{</span>
 listen <span class="token number">80</span><span class="token punctuation">;</span>
 server_name <span class="token operator">*</span><span class="token punctuation">.</span>nginx<span class="token operator">-</span>test<span class="token punctuation">.</span>com<span class="token punctuation">;</span>
 root <span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token operator">/</span>nginx<span class="token operator">-</span>test<span class="token operator">/</span>left<span class="token operator">-</span>match<span class="token operator">/</span><span class="token punctuation">;</span>
 location <span class="token operator">/</span> <span class="token punctuation">{</span>
  index index<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token operator">#</span> 正则匹配
<span class="token function">server</span> <span class="token punctuation">{</span>
 listen <span class="token number">80</span><span class="token punctuation">;</span>
 server_name <span class="token operator">~</span><span class="token operator">^</span><span class="token punctuation">.</span><span class="token operator">*</span>\\<span class="token punctuation">.</span>nginx<span class="token operator">-</span>test\\<span class="token operator">..</span><span class="token operator">*</span>$<span class="token punctuation">;</span>
 root <span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token operator">/</span>nginx<span class="token operator">-</span>test<span class="token operator">/</span>reg<span class="token operator">-</span>match<span class="token operator">/</span><span class="token punctuation">;</span>
 location <span class="token operator">/</span> <span class="token punctuation">{</span>
  index index<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token operator">#</span> 右匹配
<span class="token function">server</span> <span class="token punctuation">{</span>
 listen <span class="token number">80</span><span class="token punctuation">;</span>
 server_name www<span class="token punctuation">.</span>nginx<span class="token operator">-</span>test<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">;</span>
 root <span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token operator">/</span>nginx<span class="token operator">-</span>test<span class="token operator">/</span>right<span class="token operator">-</span>match<span class="token operator">/</span><span class="token punctuation">;</span>
 location <span class="token operator">/</span> <span class="token punctuation">{</span>
  index index<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token operator">#</span> 完全匹配
<span class="token function">server</span> <span class="token punctuation">{</span>
 listen <span class="token number">80</span><span class="token punctuation">;</span>
 server_name www<span class="token punctuation">.</span>nginx<span class="token operator">-</span>test<span class="token punctuation">.</span>com<span class="token punctuation">;</span>
 root <span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token operator">/</span>nginx<span class="token operator">-</span>test<span class="token operator">/</span>all<span class="token operator">-</span>match<span class="token operator">/</span><span class="token punctuation">;</span>
 location <span class="token operator">/</span> <span class="token punctuation">{</span>
  index index<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、访问分析</p><ul><li>当访问 <code>www.nginx-test.com</code> 时，都可以被匹配上，因此选择优先级最高的“完全匹配”；</li><li>当访问 <code>mail.nginx-test.com</code> 时，会进行“左匹配”；</li><li>当访问 <code>www.nginx-test.org</code> 时，会进行“右匹配”；</li><li>当访问 <code>doc.nginx-test.com</code> 时，会进行“左匹配”；</li><li>当访问 <code>www.nginx-test.cn</code> 时，会进行“右匹配”；</li><li>当访问 <code>fe.nginx-test.club</code> 时，会进行“正则匹配”；</li></ul><h2 id="root" tabindex="-1"><a class="header-anchor" href="#root" aria-hidden="true">#</a> root</h2><p>指定静态资源目录位置，它可以写在 <code>http</code> 、 <code>server</code> 、 <code>location</code> 等配置中。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>root path

例如：
location <span class="token operator">/</span>image <span class="token punctuation">{</span>
 root <span class="token operator">/</span>opt<span class="token operator">/</span>nginx<span class="token operator">/</span><span class="token keyword">static</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

当用户访问 www<span class="token punctuation">.</span>test<span class="token punctuation">.</span>com<span class="token operator">/</span>image<span class="token operator">/</span><span class="token number">1</span><span class="token punctuation">.</span>png 时，实际在服务器找的路径是 <span class="token operator">/</span>opt<span class="token operator">/</span>nginx<span class="token operator">/</span><span class="token keyword">static</span><span class="token operator">/</span>image<span class="token operator">/</span><span class="token number">1</span><span class="token punctuation">.</span>png
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[注意] <code>root</code> 会将定义路径与 <code>URI</code> 叠加， <code>alias</code> 则只取定义路径。</p><h2 id="alias" tabindex="-1"><a class="header-anchor" href="#alias" aria-hidden="true">#</a> alias</h2><p>它也是指定静态资源目录位置，它只能写在 <code>location</code> 中。</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>location <span class="token operator">/</span>image <span class="token punctuation">{</span>
 <span class="token keyword">alias</span> <span class="token operator">/</span>opt<span class="token operator">/</span>nginx<span class="token operator">/</span><span class="token keyword">static</span><span class="token operator">/</span>image<span class="token operator">/</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

当用户访问 www<span class="token punctuation">.</span>test<span class="token punctuation">.</span>com<span class="token operator">/</span>image<span class="token operator">/</span><span class="token number">1</span><span class="token punctuation">.</span>png 时，实际在服务器找的路径是 <span class="token operator">/</span>opt<span class="token operator">/</span>nginx<span class="token operator">/</span><span class="token keyword">static</span><span class="token operator">/</span>image<span class="token operator">/</span><span class="token number">1</span><span class="token punctuation">.</span>png
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[注意] 使用 alias 末尾一定要添加 <code>/</code> ，并且它只能位于 <code>location</code> 中。</p><h2 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> location</h2><p>配置路径。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">location [ = | ~ | ~* | ^~ ] uri</span> <span class="token punctuation">{</span>
 ...
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>匹配规则：</p><ul><li><code>=</code> 精确匹配；</li><li><code>~</code> 正则匹配，区分大小写；</li><li><code>~*</code> 正则匹配，不区分大小写；</li><li><code>^~</code> 匹配到即停止搜索；</li></ul><p>匹配优先级：<code>=</code> &gt; <code>^~</code> &gt; <code>~</code> &gt; <code>~*</code> &gt; 不带任何字符。</p><p>实例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
  server_name www.nginx-test.com<span class="token punctuation">;</span>
  
  <span class="token comment"># 只有当访问 www.nginx-test.com/match_all/ 时才会匹配到/usr/share/nginx/html/match_all/index.html</span>
  location <span class="token operator">=</span> /match_all/ <span class="token punctuation">{</span>
      root /usr/share/nginx/html
      index index.html
  <span class="token punctuation">}</span>
  
  <span class="token comment"># 当访问 www.nginx-test.com/1.jpg 等路径时会去 /usr/share/nginx/images/1.jpg 找对应的资源</span>
  location ~ <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>jpeg<span class="token operator">|</span>jpg<span class="token operator">|</span>png<span class="token operator">|</span>svg<span class="token punctuation">)</span>$ <span class="token punctuation">{</span>
   root /usr/share/nginx/images<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment"># 当访问 www.nginx-test.com/bbs/ 时会匹配上 /usr/share/nginx/html/bbs/index.html</span>
  location ^~ /bbs/ <span class="token punctuation">{</span>
   root /usr/share/nginx/html<span class="token punctuation">;</span>
    index index.html index.htm<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="location-中的反斜线" tabindex="-1"><a class="header-anchor" href="#location-中的反斜线" aria-hidden="true">#</a> location 中的反斜线</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>location /test <span class="token punctuation">{</span>
 <span class="token punctuation">..</span>.
<span class="token punctuation">}</span>

location /test/ <span class="token punctuation">{</span>
 <span class="token punctuation">..</span>.
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>不带 <code>/</code> 当访问 <code>www.nginx-test.com/test</code> 时， <code>Nginx</code> 先找是否有 <code>test</code> 目录，如果有则找 <code>test</code> 目录下的 <code>index.html</code> ；如果没有 <code>test</code> 目录， <code>nginx</code> 则会找是否有 <code>test</code> 文件。</li><li>带 <code>/</code> 当访问 <code>www.nginx-test.com/test</code> 时， <code>Nginx</code> 先找是否有 <code>test</code> 目录，如果有则找 <code>test</code> 目录下的 <code>index.html</code> ，如果没有它也不会去找是否存在 <code>test</code> 文件。</li></ul><h3 id="return" tabindex="-1"><a class="header-anchor" href="#return" aria-hidden="true">#</a> return</h3><p>停止处理请求，直接返回响应码或重定向到其他 <code>URL</code> ；执行 <code>return</code> 指令后， <code>location</code> 中后续指令将不会被执行。</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token keyword">return</span> code <span class="token punctuation">[</span>text<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> code URL<span class="token punctuation">;</span>
<span class="token keyword">return</span> URL<span class="token punctuation">;</span>

例如：
location <span class="token operator">/</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token number">404</span><span class="token punctuation">;</span> # 直接返回状态码
<span class="token punctuation">}</span>

location <span class="token operator">/</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token number">404</span> <span class="token string">&quot;pages not found&quot;</span><span class="token punctuation">;</span> # 返回状态码 <span class="token operator">+</span> 一段文本
<span class="token punctuation">}</span>

location <span class="token operator">/</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> <span class="token number">302</span> <span class="token operator">/</span>bbs <span class="token punctuation">;</span> # 返回状态码 <span class="token operator">+</span> 重定向地址
<span class="token punctuation">}</span>

location <span class="token operator">/</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> https<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>www<span class="token punctuation">.</span>baidu<span class="token punctuation">.</span>com <span class="token punctuation">;</span> # 返回重定向地址
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rewrite" tabindex="-1"><a class="header-anchor" href="#rewrite" aria-hidden="true">#</a> rewrite</h2><p>根据指定正则表达式匹配规则，重写 <code>URL</code> 。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>语法：rewrite 正则表达式 要替换的内容 <span class="token punctuation">[</span>flag<span class="token punctuation">]</span><span class="token punctuation">;</span>

上下文：server、location、if

示例：rewirte /images/<span class="token punctuation">(</span>.*<span class="token punctuation">\\</span>.jpg<span class="token punctuation">)</span>$ /pic/<span class="token variable">$1</span><span class="token punctuation">;</span> <span class="token comment"># $1是前面括号(.*\\.jpg)的反向引用</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>flag</code> 可选值的含义：</p><ul><li><code>last</code> 重写后的 <code>URL</code> 发起新请求，再次进入 <code>server</code> 段，重试 <code>location</code> 的中的匹配；</li><li><code>break</code> 直接使用重写后的 <code>URL</code> ，不再匹配其它 <code>location</code> 中语句；</li><li><code>redirect</code> 返回302临时重定向；</li><li><code>permanent</code> 返回301永久重定向；</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server<span class="token punctuation">{</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
  server_name fe.lion.club<span class="token punctuation">;</span> <span class="token comment"># 要在本地hosts文件进行配置</span>
  root html<span class="token punctuation">;</span>
  location /search <span class="token punctuation">{</span>
   rewrite ^/<span class="token punctuation">(</span>.*<span class="token punctuation">)</span> https://www.baidu.com redirect<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  location /images <span class="token punctuation">{</span>
   rewrite /images/<span class="token punctuation">(</span>.*<span class="token punctuation">)</span> /pics/<span class="token variable">$1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  location /pics <span class="token punctuation">{</span>
   rewrite /pics/<span class="token punctuation">(</span>.*<span class="token punctuation">)</span> /photos/<span class="token variable">$1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  location /photos <span class="token punctuation">{</span>
  
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按照这个配置我们来分析：</p><ul><li>当访问 <code>fe.lion.club/search</code> 时，会自动帮我们重定向到 <code>https://www.baidu.com</code>。</li><li>当访问 <code>fe.lion.club/images/1.jpg</code> 时，第一步重写 <code>URL</code> 为 <code>fe.lion.club/pics/1.jpg</code> ，找到 <code>pics</code> 的 <code>location</code> ，继续重写 <code>URL</code> 为 <code>fe.lion.club/photos/1.jpg</code> ，找到 <code>/photos</code> 的 <code>location</code> 后，去 <code>html/photos</code> 目录下寻找 <code>1.jpg</code> 静态资源。</li></ul><h2 id="if-指令" tabindex="-1"><a class="header-anchor" href="#if-指令" aria-hidden="true">#</a> if 指令</h2><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>语法：<span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token operator">...</span><span class="token punctuation">}</span>

上下文：server、location

示例：
<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token variable">$http_user_agent</span> <span class="token operator">~</span> Chrome<span class="token punctuation">)</span><span class="token punctuation">{</span>
  rewrite <span class="token operator">/</span><span class="token punctuation">(</span><span class="token operator">.</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">/</span>browser<span class="token operator">/</span><span class="token variable">$1</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>condition</code> 判断条件：</p><ul><li><code>$variable</code> 仅为变量时，值为空或以0开头字符串都会被当做 <code>false</code> 处理；</li><li><code>=</code> 或 <code>!=</code> 相等或不等；</li><li><code>~</code> 正则匹配；</li><li><code>! ~</code> 非正则匹配；</li><li><code>~*</code> 正则匹配，不区分大小写；</li><li><code>-f</code> 或 <code>! -f</code> 检测文件存在或不存在；</li><li><code>-d</code> 或 <code>! -d</code> 检测目录存在或不存在；</li><li><code>-e</code> 或 <code>! -e</code> 检测文件、目录、符号链接等存在或不存在；</li><li><code>-x</code> 或 <code>! -x</code> 检测文件可以执行或不可执行；</li></ul><p>实例：</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>server <span class="token punctuation">{</span>
  listen <span class="token number">8080</span><span class="token punctuation">;</span>
  server_name localhost<span class="token punctuation">;</span>
  root html<span class="token punctuation">;</span>
  
  location <span class="token operator">/</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token variable">$uri</span> <span class="token operator">=</span> <span class="token string">&quot;/images/&quot;</span> <span class="token punctuation">)</span><span class="token punctuation">{</span>
     rewrite <span class="token punctuation">(</span><span class="token operator">.</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">/</span>pics<span class="token operator">/</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当访问 <code>localhost:8080/images/</code> 时，会进入 <code>if</code> 判断里面执行 <code>rewrite</code> 命令。</p><h2 id="autoindex" tabindex="-1"><a class="header-anchor" href="#autoindex" aria-hidden="true">#</a> autoindex</h2><p>用户请求以 <code>/</code> 结尾时，列出目录结构，可以用于快速搭建静态资源下载网站。</p><p><code>autoindex.conf</code> 配置信息：</p><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code>server {
  listen <span class="token number">80</span>;
  server_name fe.lion-test.club;
  
  location /download/ {
    root /opt/source;
    
    autoindex on; <span class="token comment"># 打开 autoindex，，可选参数有 on | off</span>
    autoindex_exact_size on; <span class="token comment"># 修改为off，以KB、MB、GB显示文件大小，默认为on，以bytes显示出⽂件的确切⼤⼩</span>
    autoindex_format html; <span class="token comment"># 以html的方式进行格式化，可选参数有 html | json | xml</span>
    autoindex_localtime off; <span class="token comment"># 显示的⽂件时间为⽂件的服务器时间。默认为off，显示的⽂件时间为GMT时间</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当访问 <code>fe.lion.com/download/</code> 时，会把服务器 <code>/opt/source/download/</code> 路径下的文件展示出来，如下图所示：</p><p><img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/3843BC457AD79D8109D84C016F015F06.jpg" alt="img" loading="lazy"></p><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h2><p><code>Nginx</code> 提供给使用者的变量非常多，但是终究是一个完整的请求过程所产生数据， <code>Nginx</code> 将这些数据以变量的形式提供给使用者。</p><p>下面列举些项目中常用的变量：</p><table><thead><tr><th>变量名</th><th>含义</th></tr></thead><tbody><tr><td><code>remote_addr</code></td><td>客户端 <code>IP</code> 地址</td></tr><tr><td><code>remote_port</code></td><td>客户端端口</td></tr><tr><td><code>server_addr</code></td><td>服务端 <code>IP</code> 地址</td></tr><tr><td><code>server_port</code></td><td>服务端端口</td></tr><tr><td><code>server_protocol</code></td><td>服务端协议</td></tr><tr><td><code>binary_remote_addr</code></td><td>二进制格式的客户端 <code>IP</code> 地址</td></tr><tr><td><code>connection</code></td><td><code>TCP</code> 连接的序号，递增</td></tr><tr><td><code>connection_request</code></td><td><code>TCP</code> 连接当前的请求数量</td></tr><tr><td><code>uri</code></td><td>请求的URL，不包含参数</td></tr><tr><td><code>request_uri</code></td><td>请求的URL，包含参数</td></tr><tr><td><code>scheme</code></td><td>协议名， <code>http</code> 或 <code>https</code></td></tr><tr><td><code>request_method</code></td><td>请求方法</td></tr><tr><td><code>request_length</code></td><td>全部请求的长度，包含请求行、请求头、请求体</td></tr><tr><td><code>args</code></td><td>全部参数字符串</td></tr><tr><td><code>arg_参数名</code></td><td>获取特定参数值</td></tr><tr><td><code>is_args</code></td><td><code>URL</code> 中是否有参数，有的话返回 <code>?</code> ，否则返回空</td></tr><tr><td><code>query_string</code></td><td>与 <code>args</code> 相同</td></tr><tr><td><code>host</code></td><td>请求信息中的 <code>Host</code> ，如果请求中没有 <code>Host</code> 行，则在请求头中找，最后使用 <code>nginx</code> 中设置的 <code>server_name</code> 。</td></tr><tr><td><code>http_user_agent</code></td><td>用户浏览器</td></tr><tr><td><code>http_referer</code></td><td>从哪些链接过来的请求</td></tr><tr><td><code>http_via</code></td><td>每经过一层代理服务器，都会添加相应的信息</td></tr><tr><td><code>http_cookie</code></td><td>获取用户 <code>cookie</code></td></tr><tr><td><code>request_time</code></td><td>处理请求已消耗的时间</td></tr><tr><td><code>https</code></td><td>是否开启了 <code>https</code> ，是则返回 <code>on</code> ，否则返回空</td></tr><tr><td><code>request_filename</code></td><td>磁盘文件系统待访问文件的完整路径</td></tr><tr><td><code>document_root</code></td><td>由 <code>URI</code> 和 <code>root/alias</code> 规则生成的文件夹路径</td></tr><tr><td><code>limit_rate</code></td><td>返回响应时的速度上限值</td></tr></tbody></table><p>实例演示 <code>var.conf</code> ：</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>server<span class="token punctuation">{</span>
 listen <span class="token number">8081</span><span class="token punctuation">;</span>
 server_name var<span class="token operator">.</span>lion<span class="token operator">-</span>test<span class="token operator">.</span>club<span class="token punctuation">;</span>
 root <span class="token operator">/</span>usr<span class="token regex">/share/ngin</span><span class="token operator">x</span><span class="token operator">/</span>html<span class="token punctuation">;</span>
 location <span class="token operator">/</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token number">200</span> <span class="token string">&quot;
remote_addr: $remote_addr
remote_port: $remote_port
server_addr: $server_addr
server_port: $server_port
server_protocol: $server_protocol
binary_remote_addr: $binary_remote_addr
connection: $connection
uri: $uri
request_uri: $request_uri
scheme: $scheme
request_method: $request_method
request_length: $request_length
args: $args
arg_pid: $arg_pid
is_args: $is_args
query_string: $query_string
host: $host
http_user_agent: $http_user_agent
http_referer: $http_referer
http_via: $http_via
request_time: $request_time
https: $https
request_filename: $request_filename
document_root: $document_root
&quot;</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们访问 <code>http://var.lion-test.club:8081/test?pid=121414&amp;cid=sadasd</code> 时，由于 <code>Nginx</code> 中写了 <code>return</code> 方法，因此 <code>chrome</code> 浏览器会默认为我们下载一个文件，下面展示的就是下载的文件内容：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>remote_addr<span class="token punctuation">:</span> <span class="token number">27.16</span><span class="token number">.220</span><span class="token number">.84</span>
remote_port<span class="token punctuation">:</span> <span class="token number">56838</span>
server_addr<span class="token punctuation">:</span> <span class="token number">172.17</span><span class="token number">.0</span><span class="token number">.2</span>
server_port<span class="token punctuation">:</span> <span class="token number">8081</span>
server_protocol<span class="token punctuation">:</span> HTTP<span class="token operator">/</span><span class="token number">1.1</span>
binary_remote_addr<span class="token punctuation">:</span> 茉
connection<span class="token punctuation">:</span> <span class="token number">126</span>
uri<span class="token punctuation">:</span> <span class="token operator">/</span>test<span class="token operator">/</span>
request_uri<span class="token punctuation">:</span> <span class="token operator">/</span>test<span class="token operator">/</span>?pid<span class="token operator">=</span><span class="token number">121414</span><span class="token operator">&amp;</span>cid<span class="token operator">=</span>sadasd
scheme<span class="token punctuation">:</span> http
request_method<span class="token punctuation">:</span> GET
request_length<span class="token punctuation">:</span> <span class="token number">518</span>
args<span class="token punctuation">:</span> pid<span class="token operator">=</span><span class="token number">121414</span><span class="token operator">&amp;</span>cid<span class="token operator">=</span>sadasd
arg_pid<span class="token punctuation">:</span> <span class="token number">121414</span>
is_args<span class="token punctuation">:</span> ?
query_string<span class="token punctuation">:</span> pid<span class="token operator">=</span><span class="token number">121414</span><span class="token operator">&amp;</span>cid<span class="token operator">=</span>sadasd
host<span class="token punctuation">:</span> <span class="token keyword">var</span><span class="token punctuation">.</span>lion<span class="token operator">-</span>test<span class="token punctuation">.</span>club
http_user_agent<span class="token punctuation">:</span> Mozilla<span class="token operator">/</span><span class="token number">5.0</span> <span class="token punctuation">(</span>Macintosh<span class="token punctuation">;</span> Intel Mac OS X <span class="token number">10_14_0</span><span class="token punctuation">)</span> AppleWebKit<span class="token operator">/</span><span class="token number">537.36</span> <span class="token punctuation">(</span>KHTML<span class="token punctuation">,</span> like Gecko<span class="token punctuation">)</span> Chrome<span class="token operator">/</span><span class="token number">88.0</span><span class="token number">.4324</span><span class="token number">.182</span> Safari<span class="token operator">/</span><span class="token number">537.36</span>
http_referer<span class="token punctuation">:</span> 
http_via<span class="token punctuation">:</span> 
request_time<span class="token punctuation">:</span> <span class="token number">0.000</span>
https<span class="token punctuation">:</span> 
request_filename<span class="token punctuation">:</span> <span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token operator">/</span>test<span class="token operator">/</span>
document_root<span class="token punctuation">:</span> <span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>nginx<span class="token operator">/</span>html
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Nginx</code> 的配置还有非常多，以上只是罗列了一些常用的配置，在实际项目中还是要学会查阅文档。</p><h1 id="nginx-应用核心概念" tabindex="-1"><a class="header-anchor" href="#nginx-应用核心概念" aria-hidden="true">#</a> Nginx 应用核心概念</h1><p>代理是在服务器和客户端之间假设的一层服务器，代理将接收客户端的请求并将它转发给服务器，然后将服务端的响应转发给客户端。</p><p>不管是正向代理还是反向代理，实现的都是上面的功能。</p><p><img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/C7C2BA40280F78BA5EB541F99E3CE066.jpg" alt="img" loading="lazy"></p><h2 id="正向代理" tabindex="-1"><a class="header-anchor" href="#正向代理" aria-hidden="true">#</a> 正向代理</h2><blockquote><p>正向代理，意思是一个位于客户端和原始服务器(origin server)之间的服务器，为了从原始服务器取得内容，客户端向代理发送一个请求并指定目标(原始服务器)，然后代理向原始服务器转交请求并将获得的内容返回给客户端。</p></blockquote><p>正向代理是为我们服务的，即为客户端服务的，客户端可以根据正向代理访问到它本身无法访问到的服务器资源。</p><p>正向代理对我们是透明的，对服务端是非透明的，即服务端并不知道自己收到的是来自代理的访问还是来自真实客户端的访问。</p><h2 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h2><blockquote><ul><li>反向代理*（Reverse Proxy）方式是指以代理服务器来接受internet上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给internet上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器。</li></ul></blockquote><p>反向代理是为服务端服务的，反向代理可以帮助服务器接收来自客户端的请求，帮助服务器做请求转发，负载均衡等。</p><p>反向代理对服务端是透明的，对我们是非透明的，即我们并不知道自己访问的是代理服务器，而服务器知道反向代理在为他服务。</p><p>反向代理的优势：</p><ul><li>隐藏真实服务器；</li><li>负载均衡便于横向扩充后端动态服务；</li><li>动静分离，提升系统健壮性；</li></ul><p>那么“动静分离”是什么？负载均衡又是什么？</p><h2 id="动静分离" tabindex="-1"><a class="header-anchor" href="#动静分离" aria-hidden="true">#</a> 动静分离</h2><p>动静分离是指在 <code>web</code> 服务器架构中，将静态页面与动态页面或者静态内容接口和动态内容接口分开不同系统访问的架构设计方法，进而提示整个服务的访问性和可维护性。</p><p><img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/62CEDC6012FD06BE5829E0D1F0C0A70D.jpg" alt="img" loading="lazy"></p><p>一般来说，都需要将动态资源和静态资源分开，由于 <code>Nginx</code> 的高并发和静态资源缓存等特性，经常将静态资源部署在 <code>Nginx</code> 上。如果请求的是静态资源，直接到静态资源目录获取资源，如果是动态资源的请求，则利用反向代理的原理，把请求转发给对应后台应用去处理，从而实现动静分离。</p><p>使用前后端分离后，可以很大程度提升静态资源的访问速度，即使动态服务不可用，静态资源的访问也不会受到影响。</p><h2 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h2><p>一般情况下，客户端发送多个请求到服务器，服务器处理请求，其中一部分可能要操作一些资源比如数据库、静态资源等，服务器处理完毕后，再将结果返回给客户端。</p><p>这种模式对于早期的系统来说，功能要求不复杂，且并发请求相对较少的情况下还能胜任，成本也低。随着信息数量不断增长，访问量和数据量飞速增长，以及系统业务复杂度持续增加，这种做法已无法满足要求，并发量特别大时，服务器容易崩。</p><p>很明显这是由于服务器性能的瓶颈造成的问题，除了堆机器之外，最重要的做法就是负载均衡。</p><p>请求爆发式增长的情况下，单个机器性能再强劲也无法满足要求了，这个时候集群的概念产生了，单个服务器解决不了的问题，可以使用多个服务器，然后将请求分发到各个服务器上，将负载分发到不同的服务器，这就是负载均衡，核心是「分摊压力」。<code>Nginx</code> 实现负载均衡，一般来说指的是将请求转发给服务器集群。</p><p>举个具体的例子，晚高峰乘坐地铁的时候，入站口经常会有地铁工作人员大喇叭“请走 <code>B</code> 口， <code>B</code> 口人少车空....”，这个工作人员的作用就是负载均衡。<img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/AD09098E0C911544847085B4CAC3B922.jpg" alt="img" loading="lazy"></p><p><code>Nginx</code> 实现负载均衡的策略：</p><ul><li>轮询策略：默认情况下采用的策略，将所有客户端请求轮询分配给服务端。这种策略是可以正常工作的，但是如果其中某一台服务器压力太大，出现延迟，会影响所有分配在这台服务器下的用户。</li><li>最小连接数策略：将请求优先分配给压力较小的服务器，它可以平衡每个队列的长度，并避免向压力大的服务器添加更多的请求。</li><li>最快响应时间策略：优先分配给响应时间最短的服务器。</li><li>客户端 <code>ip</code> 绑定策略：来自同一个 <code>ip</code> 的请求永远只分配一台服务器，有效解决了动态网页存在的 <code>session</code> 共享问题。</li></ul><h1 id="nginx-实战配置" tabindex="-1"><a class="header-anchor" href="#nginx-实战配置" aria-hidden="true">#</a> Nginx 实战配置</h1><p>在配置反向代理和负载均衡等等功能之前，有两个核心模块是我们必须要掌握的，这两个模块应该说是 <code>Nginx</code> 应用配置中的核心，它们分别是：<code>upstream</code> 、<code>proxy_pass</code> 。</p><h2 id="upstream" tabindex="-1"><a class="header-anchor" href="#upstream" aria-hidden="true">#</a> upstream</h2><p>用于定义上游服务器（指的就是后台提供的应用服务器）的相关信息。</p><p><img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/DDEEC4F75860F9EABC1A3332FF96F091.jpg" alt="img" loading="lazy"></p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">语法：upstreamname</span> <span class="token punctuation">{</span>
 ...
<span class="token punctuation">}</span>

<span class="token selector">上下文：http

示例：
upstream back_end_server</span><span class="token punctuation">{</span>
  server 192.168.100.<span class="token property">33</span><span class="token punctuation">:</span>8081
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>upstream</code> 内可使用的指令：</p><ul><li><code>server</code> 定义上游服务器地址；</li><li><code>zone</code> 定义共享内存，用于跨 <code>worker</code> 子进程；</li><li><code>keepalive</code> 对上游服务启用长连接；</li><li><code>keepalive_requests</code> 一个长连接最多请求 <code>HTTP</code> 的个数；</li><li><code>keepalive_timeout</code> 空闲情形下，一个长连接的超时时长；</li><li><code>hash</code> 哈希负载均衡算法；</li><li><code>ip_hash</code> 依据 <code>IP</code> 进行哈希计算的负载均衡算法；</li><li><code>least_conn</code> 最少连接数负载均衡算法；</li><li><code>least_time</code> 最短响应时间负载均衡算法；</li><li><code>random</code> 随机负载均衡算法；</li></ul><h3 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> server</h3><p>定义上游服务器地址。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code>语法：serveraddress[parameters]

上下文：upstream
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>parameters</code> 可选值：</p><ul><li><code>weight=number</code> 权重值，默认为1；</li><li><code>max_conns=number</code> 上游服务器的最大并发连接数；</li><li><code>fail_timeout=time</code> 服务器不可用的判定时间；</li><li><code>max_fails=numer</code> 服务器不可用的检查次数；</li><li><code>backup</code> 备份服务器，仅当其他服务器都不可用时才会启用；</li><li><code>down</code> 标记服务器长期不可用，离线维护；</li></ul><h3 id="keepalive" tabindex="-1"><a class="header-anchor" href="#keepalive" aria-hidden="true">#</a> keepalive</h3><p>限制每个 <code>worker</code> 子进程与上游服务器空闲长连接的最大数量。</p><div class="language-undefined line-numbers-mode" data-ext="undefined"><pre class="language-undefined"><code>keepalive connections;

上下文：upstream

示例：keepalive 16;
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="keepalive-requests" tabindex="-1"><a class="header-anchor" href="#keepalive-requests" aria-hidden="true">#</a> keepalive_requests</h3><p>单个长连接可以处理的最多 <code>HTTP</code> 请求个数。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code>语法：keepalive_requests <span class="token builtin">number</span><span class="token punctuation">;</span>

默认值：keepalive_requests <span class="token number">100</span><span class="token punctuation">;</span>

上下文：upstream
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="keepalive-timeout" tabindex="-1"><a class="header-anchor" href="#keepalive-timeout" aria-hidden="true">#</a> keepalive_timeout</h3><p>空闲长连接的最长保持时间。</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>语法：keepalive_timeout time<span class="token punctuation">;</span>

默认值：keepalive_timeout 60s<span class="token punctuation">;</span>

上下文：upstream
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置实例" tabindex="-1"><a class="header-anchor" href="#配置实例" aria-hidden="true">#</a> 配置实例</h3><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>upstream back_end<span class="token punctuation">{</span>
 server <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">:</span><span class="token number">8081</span> weight<span class="token operator">=</span><span class="token number">3</span> max_conns<span class="token operator">=</span><span class="token number">1000</span> fail_timeout<span class="token operator">=</span>10s max_fails<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">;</span>
  keepalive <span class="token number">32</span><span class="token punctuation">;</span>
  keepalive_requests <span class="token number">50</span><span class="token punctuation">;</span>
  keepalive_timeout 30s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="proxy-pass" tabindex="-1"><a class="header-anchor" href="#proxy-pass" aria-hidden="true">#</a> proxy_pass</h2><p>用于配置代理服务器。</p><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code>语法：proxy_pass <span class="token constant">URL</span><span class="token punctuation">;</span>

上下文：location、<span class="token keyword">if</span>、limit_except

示例：
proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">8081</span>
proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">8081</span><span class="token operator">/</span>proxy
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>URL</code> 参数原则</p><ol><li><code>URL</code> 必须以 <code>http</code> 或 <code>https</code> 开头；</li><li><code>URL</code> 中可以携带变量；</li><li><code>URL</code> 中是否带 <code>URI</code> ，会直接影响发往上游请求的 <code>URL</code> ；</li></ol><p>接下来让我们来看看两种常见的 <code>URL</code> 用法：</p><ol><li><code>proxy_pass http://192.168.100.33:8081</code></li><li><code>proxy_pass http://192.168.100.33:8081/</code></li></ol>`,201),r={href:"https://www.fgba.net/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.fgba.net/sitemap.xml",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"/",-1),m=s("code",null,"/",-1),k=i(`<ul><li>不带 <code>/</code> 意味着 <code>Nginx</code> 不会修改用户 <code>URL</code> ，而是直接透传给上游的应用服务器；</li><li>带 <code>/</code> 意味着 <code>Nginx</code> 会修改用户 <code>URL</code> ，修改方法是将 <code>location</code> 后的 <code>URL</code> 从用户 <code>URL</code> 中删除；</li></ul><p>不带 <code>/</code> 的用法：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>location <span class="token operator">/</span>bbs<span class="token operator">/</span><span class="token punctuation">{</span>
  <span class="token class-name">proxy_pass</span> http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">:</span><span class="token number">8080</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分析：</p><ol><li>用户请求 <code>URL</code> ：<code>/bbs/abc/test.html</code></li><li>请求到达 <code>Nginx</code> 的 <code>URL</code> ：<code>/bbs/abc/test.html</code></li><li>请求到达上游应用服务器的 <code>URL</code> ：<code>/bbs/abc/test.html</code></li></ol><p>带 <code>/</code> 的用法：</p><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>location <span class="token operator">/</span>bbs<span class="token operator">/</span><span class="token punctuation">{</span>
  <span class="token class-name">proxy_pass</span> http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">:</span><span class="token number">8080</span><span class="token operator">/</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分析：</p><ol><li>用户请求 <code>URL</code> ：<code>/bbs/abc/test.html</code></li><li>请求到达 <code>Nginx</code> 的 <code>URL</code> ：<code>/bbs/abc/test.html</code></li><li>请求到达上游应用服务器的 <code>URL</code> ：<code>/abc/test.html</code></li></ol><p>并没有拼接上 <code>/bbs</code> ，这点和 <code>root</code> 与 <code>alias</code> 之间的区别是保持一致的。</p><h2 id="配置反向代理" tabindex="-1"><a class="header-anchor" href="#配置反向代理" aria-hidden="true">#</a> 配置反向代理</h2><p>这里为了演示更加接近实际，作者准备了两台云服务器，它们的公网 <code>IP</code> 分别是：<code>121.42.11.34</code> 与 <code>121.5.180.193</code> 。</p><p>我们把 <code>121.42.11.34</code> 服务器作为上游服务器，做如下配置：</p><div class="language-objectivec line-numbers-mode" data-ext="objectivec"><pre class="language-objectivec"><code># <span class="token operator">/</span>etc<span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token punctuation">.</span>d<span class="token operator">/</span>proxy<span class="token punctuation">.</span>conf
server<span class="token punctuation">{</span>
  listen <span class="token number">8080</span><span class="token punctuation">;</span>
  server_name localhost<span class="token punctuation">;</span>
  
  location <span class="token operator">/</span>proxy<span class="token operator">/</span> <span class="token punctuation">{</span>
    root <span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token operator">/</span>proxy<span class="token punctuation">;</span>
    index index<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

# <span class="token operator">/</span>usr<span class="token operator">/</span>share<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token operator">/</span>proxy<span class="token operator">/</span>index<span class="token punctuation">.</span>html
<span class="token operator">&lt;</span>h1<span class="token operator">&gt;</span> <span class="token number">121.42</span><span class="token number">.11</span><span class="token number">.34</span> proxy html <span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">&gt;</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完成后重启 <code>Nginx</code> 服务器 <code>nginx -s reload</code> 。</p><p>把 <code>121.5.180.193</code> 服务器作为代理服务器，做如下配置：</p><div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code># <span class="token operator">/</span>etc<span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token punctuation">.</span>d<span class="token operator">/</span>proxy<span class="token punctuation">.</span>conf
upstream back_end <span class="token punctuation">{</span>
  server <span class="token number">121.42</span><span class="token number">.11</span><span class="token number">.34</span><span class="token punctuation">:</span><span class="token number">8080</span> weight<span class="token operator">=</span><span class="token number">2</span> max_conns<span class="token operator">=</span><span class="token number">1000</span> fail_timeout<span class="token operator">=</span>10s max_fails<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
  keepalive <span class="token number">32</span><span class="token punctuation">;</span>
  keepalive_requests <span class="token number">80</span><span class="token punctuation">;</span>
  keepalive_timeout 20s<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
  server_name proxy<span class="token punctuation">.</span>lion<span class="token punctuation">.</span>club<span class="token punctuation">;</span>
  location <span class="token operator">/</span>proxy <span class="token punctuation">{</span>
   proxy_pass http<span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span>back_end<span class="token operator">/</span>proxy<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本地机器要访问 <code>proxy.lion.club</code> 域名，因此需要配置本地 <code>hosts</code> ，通过命令：<code>vim /etc/hosts</code> 进入配置文件，添加如下内容：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>121.5.180.193 proxy.lion.club
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/6E6C113354D23BC1D599D78303E45F40.jpg" alt="img" loading="lazy"></p><p>分析：</p><ol><li>当访问 <code>proxy.lion.club/proxy</code> 时通过 <code>upstream</code> 的配置找到 <code>121.42.11.34:8080</code> ；</li><li>因此访问地址变为 <code>http://121.42.11.34:8080/proxy</code> ；</li><li>连接到 <code>121.42.11.34</code> 服务器，找到 <code>8080</code> 端口提供的 <code>server</code> ；</li><li>通过 <code>server</code> 找到 <code>/usr/share/nginx/html/proxy/index.html</code> 资源，最终展示出来。</li></ol><h2 id="配置负载均衡" tabindex="-1"><a class="header-anchor" href="#配置负载均衡" aria-hidden="true">#</a> 配置负载均衡</h2><p>配置负载均衡主要是要使用 <code>upstream</code> 指令。</p><p>我们把 <code>121.42.11.34</code> 服务器作为上游服务器，做如下配置（ <code>/etc/nginx/conf.d/balance.conf</code> ）：</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>server<span class="token punctuation">{</span>
  listen <span class="token number">8020</span><span class="token punctuation">;</span>
  location <span class="token operator">/</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token number">200</span> <span class="token string">&#39;return 8020 \\n&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

server<span class="token punctuation">{</span>
  listen <span class="token number">8030</span><span class="token punctuation">;</span>
  location <span class="token operator">/</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token number">200</span> <span class="token string">&#39;return 8030 \\n&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

server<span class="token punctuation">{</span>
  listen <span class="token number">8040</span><span class="token punctuation">;</span>
  location <span class="token operator">/</span> <span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token number">200</span> <span class="token string">&#39;return 8040 \\n&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完成后：</p><ol><li><code>nginx -t</code> 检测配置是否正确；</li><li><code>nginx -s reload</code> 重启 <code>Nginx</code> 服务器；</li><li>执行 <code>ss -nlt</code> 命令查看端口是否被占用，从而判断 <code>Nginx</code> 服务是否正确启动。</li></ol><p>把 <code>121.5.180.193</code> 服务器作为代理服务器，做如下配置（ <code>/etc/nginx/conf.d/balance.conf</code> ）：</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">upstream demo_server</span> <span class="token punctuation">{</span>
  server 121.42.11.<span class="token property">34</span><span class="token punctuation">:</span>8020<span class="token punctuation">;</span>
  server 121.42.11.<span class="token property">34</span><span class="token punctuation">:</span>8030<span class="token punctuation">;</span>
  server 121.42.11.<span class="token property">34</span><span class="token punctuation">:</span>8040<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">server</span> <span class="token punctuation">{</span>
  listen 80<span class="token punctuation">;</span>
  server_name balance.lion.club<span class="token punctuation">;</span>
  
  <span class="token selector">location /balance/</span> <span class="token punctuation">{</span>
   proxy_pass <span class="token property">http</span><span class="token punctuation">:</span><span class="token comment">//demo_server;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置完成后重启 <code>Nginx</code> 服务器。并且在需要访问的客户端配置好 <code>ip</code> 和域名的映射关系。</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code><span class="token comment"># /etc/hosts</span>

<span class="token v-string string">121.5.180.193</span> balance<span class="token operator">.</span>lion<span class="token operator">.</span>club
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在客户端机器执行 <code>curl http://balance.lion.club/balance/</code> 命令：</p><p><img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/5B5965726072CEC928424BB13CE4AB81.jpg" alt="img" loading="lazy"></p><p>不难看出，负载均衡的配置已经生效了，每次给我们分发的上游服务器都不一样。就是通过简单的轮询策略进行上游服务器分发。</p><p>接下来，我们再来了解下 <code>Nginx</code> 的其它分发策略。</p><h3 id="hash-算法" tabindex="-1"><a class="header-anchor" href="#hash-算法" aria-hidden="true">#</a> hash 算法</h3><p>通过制定关键字作为 <code>hash key</code> ，基于 <code>hash</code> 算法映射到特定的上游服务器中。关键字可以包含有变量、字符串。</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>upstream demo_server <span class="token punctuation">{</span>
  hash <span class="token variable">$request_uri</span><span class="token punctuation">;</span>
  server <span class="token v-string string">121.42.11.34</span><span class="token punctuation">:</span><span class="token number">8020</span><span class="token punctuation">;</span>
  server <span class="token v-string string">121.42.11.34</span><span class="token punctuation">:</span><span class="token number">8030</span><span class="token punctuation">;</span>
  server <span class="token v-string string">121.42.11.34</span><span class="token punctuation">:</span><span class="token number">8040</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
  server_name balance<span class="token operator">.</span>lion<span class="token operator">.</span>club<span class="token punctuation">;</span>
  
  location <span class="token operator">/</span>balance<span class="token operator">/</span> <span class="token punctuation">{</span>
   proxy_pass http<span class="token punctuation">:</span><span class="token operator">//</span>demo_server<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>hash $request_uri</code> 表示使用 <code>request_uri</code> 变量作为 <code>hash</code> 的 <code>key</code> 值，只要访问的 <code>URI</code> 保持不变，就会一直分发给同一台服务器。</p><h3 id="ip-hash" tabindex="-1"><a class="header-anchor" href="#ip-hash" aria-hidden="true">#</a> ip_hash</h3><p>根据客户端的请求 <code>ip</code> 进行判断，只要 <code>ip</code> 地址不变就永远分配到同一台主机。它可以有效解决后台服务器 <code>session</code> 保持的问题。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">upstream demo_server</span> <span class="token punctuation">{</span>
  ip_hash<span class="token punctuation">;</span>
  server 121.42.11.<span class="token property">34</span><span class="token punctuation">:</span>8020<span class="token punctuation">;</span>
  server 121.42.11.<span class="token property">34</span><span class="token punctuation">:</span>8030<span class="token punctuation">;</span>
  server 121.42.11.<span class="token property">34</span><span class="token punctuation">:</span>8040<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">server</span> <span class="token punctuation">{</span>
  listen 80<span class="token punctuation">;</span>
  server_name balance.lion.club<span class="token punctuation">;</span>
  
  <span class="token selector">location /balance/</span> <span class="token punctuation">{</span>
   proxy_pass <span class="token property">http</span><span class="token punctuation">:</span><span class="token comment">//demo_server;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="最少连接数算法" tabindex="-1"><a class="header-anchor" href="#最少连接数算法" aria-hidden="true">#</a> 最少连接数算法</h3><p>各个 <code>worker</code> 子进程通过读取共享内存的数据，来获取后端服务器的信息。来挑选一台当前已建立连接数最少的服务器进行分配请求。</p><div class="language-undefined line-numbers-mode" data-ext="undefined"><pre class="language-undefined"><code>语法：least_conn;

上下文：upstream;
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token selector">upstream demo_server</span> <span class="token punctuation">{</span>
  zone test 10M<span class="token punctuation">;</span> # zone可以设置共享内存空间的名字和大小
  least_conn<span class="token punctuation">;</span>
  server 121.42.11.<span class="token property">34</span><span class="token punctuation">:</span>8020<span class="token punctuation">;</span>
  server 121.42.11.<span class="token property">34</span><span class="token punctuation">:</span>8030<span class="token punctuation">;</span>
  server 121.42.11.<span class="token property">34</span><span class="token punctuation">:</span>8040<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">server</span> <span class="token punctuation">{</span>
  listen 80<span class="token punctuation">;</span>
  server_name balance.lion.club<span class="token punctuation">;</span>
  
  <span class="token selector">location /balance/</span> <span class="token punctuation">{</span>
   proxy_pass <span class="token property">http</span><span class="token punctuation">:</span><span class="token comment">//demo_server;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后你会发现，负载均衡的配置其实一点都不复杂。</p><h2 id="配置缓存" tabindex="-1"><a class="header-anchor" href="#配置缓存" aria-hidden="true">#</a> 配置缓存</h2><p>缓存可以非常有效的提升性能，因此不论是客户端（浏览器），还是代理服务器（ <code>Nginx</code> ），乃至上游服务器都多少会涉及到缓存。可见缓存在每个环节都是非常重要的。下面让我们来学习 <code>Nginx</code> 中如何设置缓存策略。</p><h3 id="proxy-cache" tabindex="-1"><a class="header-anchor" href="#proxy-cache" aria-hidden="true">#</a> proxy_cache</h3><p>存储一些之前被访问过、而且可能将要被再次访问的资源，使用户可以直接从代理服务器获得，从而减少上游服务器的压力，加快整个访问速度。</p><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code>语法：proxy_cache zone | off ; <span class="token comment"># zone 是共享内存的名称</span>

默认值：proxy_cache off;

上下文：http、server、location
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="proxy-cache-path" tabindex="-1"><a class="header-anchor" href="#proxy-cache-path" aria-hidden="true">#</a> proxy_cache_path</h3><p>设置缓存文件的存放路径。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code>语法：proxy_cache_pathpath[level=levels] ...可选参数省略，下面会详细列举

默认值：proxy_cache_pathoff

上下文：http
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数含义：</p><ul><li><code>path</code> 缓存文件的存放路径；</li><li><code>level path</code> 的目录层级；</li><li><code>keys_zone</code> 设置共享内存；</li><li><code>inactive</code> 在指定时间内没有被访问，缓存会被清理，默认10分钟；</li></ul><h3 id="proxy-cache-key" tabindex="-1"><a class="header-anchor" href="#proxy-cache-key" aria-hidden="true">#</a> proxy_cache_key</h3><p>设置缓存文件的 <code>key</code> 。</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>语法：proxy_cache_key

默认值：proxy_cache_key <span class="token variable">$scheme$proxy_host$request_uri</span><span class="token punctuation">;</span>

上下文：http、server、location
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="proxy-cache-valid" tabindex="-1"><a class="header-anchor" href="#proxy-cache-valid" aria-hidden="true">#</a> proxy_cache_valid</h3><p>配置什么状态码可以被缓存，以及缓存时长。</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>语法：proxy_cache_valid <span class="token punctuation">[</span>code<span class="token operator">...</span><span class="token punctuation">]</span> time<span class="token punctuation">;</span>

上下文：http、server、location

配置示例：proxy_cache_valid 2003042m<span class="token punctuation">;</span><span class="token punctuation">;</span> <span class="token comment"># 说明对于状态为200和304的缓存文件的缓存时间是2分钟</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="proxy-no-cache" tabindex="-1"><a class="header-anchor" href="#proxy-no-cache" aria-hidden="true">#</a> proxy_no_cache</h3><p>定义相应保存到缓存的条件，如果字符串参数的至少一个值不为空且不等于“ 0”，则将不保存该响应到缓存。</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>语法：proxy_no_cache string<span class="token punctuation">;</span>

上下文：http、server、location

示例：proxy_no_cache <span class="token variable">$http_pragma</span>    <span class="token variable">$http_authorization</span><span class="token punctuation">;</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="proxy-cache-bypass" tabindex="-1"><a class="header-anchor" href="#proxy-cache-bypass" aria-hidden="true">#</a> proxy_cache_bypass</h3><p>定义条件，在该条件下将不会从缓存中获取响应。</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>语法：proxy_cache_bypass string<span class="token punctuation">;</span>

上下文：http、server、location

示例：proxy_cache_bypass <span class="token variable">$http_pragma</span>    <span class="token variable">$http_authorization</span><span class="token punctuation">;</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="upstream-cache-status-变量" tabindex="-1"><a class="header-anchor" href="#upstream-cache-status-变量" aria-hidden="true">#</a> upstream_cache_status 变量</h3><p>它存储了缓存是否命中的信息，会设置在响应头信息中，在调试中非常有用。</p><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token property">MISS</span><span class="token punctuation">:</span> 未命中缓存
HIT： 命中缓存
<span class="token property">EXPIRED</span><span class="token punctuation">:</span> 缓存过期
<span class="token property">STALE</span><span class="token punctuation">:</span> 命中了陈旧缓存
<span class="token property">REVALIDDATED</span><span class="token punctuation">:</span> Nginx验证陈旧缓存依然有效
<span class="token property">UPDATING</span><span class="token punctuation">:</span> 内容陈旧，但正在更新
<span class="token property">BYPASS</span><span class="token punctuation">:</span> X响应从原始服务器获取
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置实例-1" tabindex="-1"><a class="header-anchor" href="#配置实例-1" aria-hidden="true">#</a> 配置实例</h3><p>我们把 <code>121.42.11.34</code> 服务器作为上游服务器，做如下配置（ <code>/etc/nginx/conf.d/cache.conf</code> ）：</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>server <span class="token punctuation">{</span>
  listen <span class="token number">1010</span><span class="token punctuation">;</span>
  root <span class="token operator">/</span>usr<span class="token regex">/share/ngin</span><span class="token operator">x</span><span class="token operator">/</span>html<span class="token operator">/</span><span class="token number">1010</span><span class="token punctuation">;</span>
  location <span class="token operator">/</span> <span class="token punctuation">{</span>
   index index<span class="token operator">.</span>html<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
  listen <span class="token number">1020</span><span class="token punctuation">;</span>
  root <span class="token operator">/</span>usr<span class="token regex">/share/ngin</span><span class="token operator">x</span><span class="token operator">/</span>html<span class="token operator">/</span><span class="token number">1020</span><span class="token punctuation">;</span>
  location <span class="token operator">/</span> <span class="token punctuation">{</span>
   index index<span class="token operator">.</span>html<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把 <code>121.5.180.193</code> 服务器作为代理服务器，做如下配置（ <code>/etc/nginx/conf.d/cache.conf</code> ）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>proxy_cache_path /etc/nginx/cache_temp <span class="token assign-left variable">levels</span><span class="token operator">=</span><span class="token number">2</span>:2 <span class="token assign-left variable">keys_zone</span><span class="token operator">=</span>cache_zone:30m <span class="token assign-left variable">max_size</span><span class="token operator">=</span>2g <span class="token assign-left variable">inactive</span><span class="token operator">=</span>60m <span class="token assign-left variable">use_temp_path</span><span class="token operator">=</span>off<span class="token punctuation">;</span>

upstream cache_server<span class="token punctuation">{</span>
  server <span class="token number">121.42</span>.11.34:1010<span class="token punctuation">;</span>
  server <span class="token number">121.42</span>.11.34:1020<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

server <span class="token punctuation">{</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
  server_name cache.lion.club<span class="token punctuation">;</span>
  location / <span class="token punctuation">{</span>
    proxy_cache cache_zone<span class="token punctuation">;</span> <span class="token comment"># 设置缓存内存，上面配置中已经定义好的</span>
    proxy_cache_valid <span class="token number">200</span> 5m<span class="token punctuation">;</span> <span class="token comment"># 缓存状态为200的请求，缓存时长为5分钟</span>
    proxy_cache_key <span class="token variable">$request_uri</span><span class="token punctuation">;</span> <span class="token comment"># 缓存文件的key为请求的URI</span>
    add_header Nginx-Cache-Status <span class="token variable">$upstream_cache_status</span> <span class="token comment"># 把缓存状态设置为头部信息，响应给客户端</span>
    proxy_pass http://cache_server<span class="token punctuation">;</span> <span class="token comment"># 代理转发</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>缓存就是这样配置，我们可以在 <code>/etc/nginx/cache_temp</code> 路径下找到相应的缓存文件。</p><p><strong>对于一些实时性要求非常高的页面或数据来说，就不应该去设置缓存，下面来看看如何配置不缓存的内容。</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">..</span>.

server <span class="token punctuation">{</span>
  listen <span class="token number">80</span><span class="token punctuation">;</span>
  server_name cache.lion.club<span class="token punctuation">;</span>
  <span class="token comment"># URI 中后缀为 .txt 或 .text 的设置变量值为 &quot;no cache&quot;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$request_uri</span> ~ <span class="token punctuation">\\</span>.<span class="token punctuation">(</span>txt<span class="token operator">|</span>text<span class="token punctuation">)</span>$<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token builtin class-name">set</span> <span class="token variable">$cache_name</span> <span class="token string">&quot;no cache&quot;</span>
  <span class="token punctuation">}</span>
  
  location / <span class="token punctuation">{</span>
    proxy_no_cache <span class="token variable">$cache_name</span><span class="token punctuation">;</span> <span class="token comment"># 判断该变量是否有值，如果有值则不进行缓存，如果没有值则进行缓存</span>
    proxy_cache cache_zone<span class="token punctuation">;</span> <span class="token comment"># 设置缓存内存</span>
    proxy_cache_valid <span class="token number">200</span> 5m<span class="token punctuation">;</span> <span class="token comment"># 缓存状态为200的请求，缓存时长为5分钟</span>
    proxy_cache_key <span class="token variable">$request_uri</span><span class="token punctuation">;</span> <span class="token comment"># 缓存文件的key为请求的URI</span>
    add_header Nginx-Cache-Status <span class="token variable">$upstream_cache_status</span> <span class="token comment"># 把缓存状态设置为头部信息，响应给客户端</span>
    proxy_pass http://cache_server<span class="token punctuation">;</span> <span class="token comment"># 代理转发</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="https" tabindex="-1"><a class="header-anchor" href="#https" aria-hidden="true">#</a> HTTPS</h2><p>在学习如何配置 <code>HTTPS</code> 之前，我们先来简单回顾下 <code>HTTPS</code> 的工作流程是怎么样的？它是如何进行加密保证安全的？</p><h3 id="https-工作流程" tabindex="-1"><a class="header-anchor" href="#https-工作流程" aria-hidden="true">#</a> HTTPS 工作流程</h3><ol><li>客户端（浏览器）访问 <code>https://www.baidu.com</code> 百度网站；</li><li>百度服务器返回 <code>HTTPS</code> 使用的 <code>CA</code> 证书；</li><li>浏览器验证 <code>CA</code> 证书是否为合法证书；</li><li>验证通过，证书合法，生成一串随机数并使用公钥（证书中提供的）进行加密；</li><li>发送公钥加密后的随机数给百度服务器；</li><li>百度服务器拿到密文，通过私钥进行解密，获取到随机数（公钥加密，私钥解密，反之也可以）；</li><li>百度服务器把要发送给浏览器的内容，使用随机数进行加密后传输给浏览器；</li><li>此时浏览器可以使用随机数进行解密，获取到服务器的真实传输内容；</li></ol><p>这就是 <code>HTTPS</code> 的基本运作原理，使用对称加密和非对称机密配合使用，保证传输内容的安全性。</p><p>关于HTTPS更多知识，可以查看作者的另外一篇文章《学习 HTTP 协议》。</p><h3 id="配置证书" tabindex="-1"><a class="header-anchor" href="#配置证书" aria-hidden="true">#</a> 配置证书</h3><p>下载证书的压缩文件，里面有个 <code>Nginx</code> 文件夹，把 <code>xxx.crt</code> 和 <code>xxx.key</code> 文件拷贝到服务器目录，再进行如下配置：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>server <span class="token punctuation">{</span>
  listen <span class="token number">443</span> ssl http2 default_server<span class="token punctuation">;</span>   <span class="token comment"># SSL 访问端口号为 443</span>
  server_name lion.club<span class="token punctuation">;</span>         <span class="token comment"># 填写绑定证书的域名(我这里是随便写的)</span>
  ssl_certificate /etc/nginx/https/lion.club_bundle.crt<span class="token punctuation">;</span>   <span class="token comment"># 证书地址</span>
  ssl_certificate_key /etc/nginx/https/lion.club.key<span class="token punctuation">;</span>      <span class="token comment"># 私钥地址</span>
  ssl_session_timeout 10m<span class="token punctuation">;</span>
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2<span class="token punctuation">;</span> <span class="token comment"># 支持ssl协议版本，默认为后三个，主流版本是[TLSv1.2]</span>
 
  location / <span class="token punctuation">{</span>
    root         /usr/share/nginx/html<span class="token punctuation">;</span>
    index        index.html index.htm<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如此配置后就能正常访问 <code>HTTPS</code> 版的网站了。</p><h2 id="配置跨域-cors" tabindex="-1"><a class="header-anchor" href="#配置跨域-cors" aria-hidden="true">#</a> 配置跨域 CORS</h2><p>先简单回顾下跨域究竟是怎么回事。</p><h3 id="跨域的定义" tabindex="-1"><a class="header-anchor" href="#跨域的定义" aria-hidden="true">#</a> 跨域的定义</h3><p>同源策略限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。这是一个用于隔离潜在恶意文件的重要安全机制。通常不允许不同源间的读操作。</p><h3 id="同源的定义" tabindex="-1"><a class="header-anchor" href="#同源的定义" aria-hidden="true">#</a> 同源的定义</h3><p>如果两个页面的协议，端口（如果有指定）和域名都相同，则两个页面具有相同的源。</p><p>下面给出了与 URL <code>http://store.company.com/dir/page.html</code> 的源进行对比的示例:</p><div class="language-ruby line-numbers-mode" data-ext="rb"><pre class="language-ruby"><code>http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>store<span class="token punctuation">.</span>company<span class="token punctuation">.</span>com<span class="token operator">/</span>dir2<span class="token operator">/</span>other<span class="token punctuation">.</span>html 同源
<span class="token symbol">https</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>store<span class="token punctuation">.</span>company<span class="token punctuation">.</span>com<span class="token operator">/</span>secure<span class="token punctuation">.</span>html 不同源，协议不同
<span class="token symbol">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>store<span class="token punctuation">.</span>company<span class="token punctuation">.</span>com<span class="token operator">:</span><span class="token number">81</span><span class="token operator">/</span>dir<span class="token operator">/</span>etc<span class="token punctuation">.</span>html 不同源，端口不同
<span class="token symbol">http</span><span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>news<span class="token punctuation">.</span>company<span class="token punctuation">.</span>com<span class="token operator">/</span>dir<span class="token operator">/</span>other<span class="token punctuation">.</span>html 不同源，主机不同
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不同源会有如下限制：</p><ul><li><code>Web</code> 数据层面，同源策略限制了不同源的站点读取当前站点的 <code>Cookie</code> 、 <code>IndexDB</code> 、 <code>LocalStorage</code> 等数据。</li><li><code>DOM</code> 层面，同源策略限制了来自不同源的 <code>JavaScript</code> 脚本对当前 <code>DOM</code> 对象读和写的操作。</li><li>网络层面，同源策略限制了通过 <code>XMLHttpRequest</code> 等方式将站点的数据发送给不同源的站点。</li></ul><h3 id="nginx-解决跨域的原理" tabindex="-1"><a class="header-anchor" href="#nginx-解决跨域的原理" aria-hidden="true">#</a> Nginx 解决跨域的原理</h3><p>例如：</p><ul><li>前端 <code>server</code> 的域名为：<code>fe.server.com</code></li><li>后端服务的域名为：<code>dev.server.com</code></li></ul><p>现在我在 <code>fe.server.com</code> 对 <code>dev.server.com</code> 发起请求一定会出现跨域。</p><p>现在我们只需要启动一个 <code>Nginx</code> 服务器，将 <code>server_name</code> 设置为 <code>fe.server.com</code> 然后设置相应的 <code>location</code> 以拦截前端需要跨域的请求，最后将请求代理回 <code>dev.server.com</code> 。如下面的配置：</p><div class="language-perl line-numbers-mode" data-ext="perl"><pre class="language-perl"><code>server <span class="token punctuation">{</span>
 listen      <span class="token number">80</span><span class="token punctuation">;</span>
 server_name  fe<span class="token operator">.</span>server<span class="token operator">.</span>com<span class="token punctuation">;</span>
 location <span class="token operator">/</span> <span class="token punctuation">{</span>
  proxy_pass dev<span class="token operator">.</span>server<span class="token operator">.</span>com<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样可以完美绕过浏览器的同源策略：<code>fe.server.com</code> 访问 <code>Nginx</code> 的 <code>fe.server.com</code> 属于同源访问，而 <code>Nginx</code> 对服务端转发的请求不会触发浏览器的同源策略。</p><h2 id="配置开启-gzip-压缩" tabindex="-1"><a class="header-anchor" href="#配置开启-gzip-压缩" aria-hidden="true">#</a> 配置开启 gzip 压缩</h2><p><code>GZIP</code> 是规定的三种标准 <code>HTTP</code> 压缩格式之一。目前绝大多数的网站都在使用 <code>GZIP</code> 传输 <code>HTML</code> 、<code>CSS</code> 、 <code>JavaScript</code> 等资源文件。</p><p>对于文本文件， <code>GZiP</code> 的效果非常明显，开启后传输所需流量大约会降至 <code>1/4~1/3</code> 。</p><p>并不是每个浏览器都支持 <code>gzip</code> 的，如何知道客户端是否支持 <code>gzip</code> 呢，请求头中的 <code>Accept-Encoding</code> 来标识对压缩的支持。<img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/DC5A4809DE3FB73D3EB476CE3DF4812B.jpg" alt="img" loading="lazy">启用 <code>gzip</code> 同时需要客户端和服务端的支持，如果客户端支持 <code>gzip</code> 的解析，那么只要服务端能够返回 <code>gzip</code> 的文件就可以启用 <code>gzip</code> 了,我们可以通过 <code>Nginx</code> 的配置来让服务端支持 <code>gzip</code> 。下面的 <code>respone</code> 中 <code>content-encoding:gzip</code> ，指服务端开启了 <code>gzip</code> 的压缩方式。<img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/18E25498B234ACA57C02FE349368ED22.jpg" alt="img" loading="lazy">在 <code>/etc/nginx/conf.d/</code> 文件夹中新建配置文件 <code>gzip.conf</code> ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># # 默认off，是否开启gzip</span>
<span class="token function">gzip</span> on<span class="token punctuation">;</span> 
<span class="token comment"># 要采用 gzip 压缩的 MIME 文件类型，其中 text/html 被系统强制启用；</span>
gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript<span class="token punctuation">;</span>

<span class="token comment"># ---- 以上两个参数开启就可以支持Gzip压缩了 ---- #</span>

<span class="token comment"># 默认 off，该模块启用后，Nginx 首先检查是否存在请求静态文件的 gz 结尾的文件，如果有则直接返回该 .gz 文件内容；</span>
gzip_static on<span class="token punctuation">;</span>

<span class="token comment"># 默认 off，nginx做为反向代理时启用，用于设置启用或禁用从代理服务器上收到相应内容 gzip 压缩；</span>
gzip_proxied any<span class="token punctuation">;</span>

<span class="token comment"># 用于在响应消息头中添加 Vary：Accept-Encoding，使代理服务器根据请求头中的 Accept-Encoding 识别是否启用 gzip 压缩；</span>
gzip_vary on<span class="token punctuation">;</span>

<span class="token comment"># gzip 压缩比，压缩级别是 1-9，1 压缩级别最低，9 最高，级别越高压缩率越大，压缩时间越长，建议 4-6；</span>
gzip_comp_level <span class="token number">6</span><span class="token punctuation">;</span>

<span class="token comment"># 获取多少内存用于缓存压缩结果，16 8k 表示以 8k*16 为单位获得；</span>
gzip_buffers <span class="token number">16</span> 8k<span class="token punctuation">;</span>

<span class="token comment"># 允许压缩的页面最小字节数，页面字节数从header头中的 Content-Length 中进行获取。默认值是 0，不管页面多大都压缩。建议设置成大于 1k 的字节数，小于 1k 可能会越压越大；</span>
<span class="token comment"># gzip_min_length 1k;</span>

<span class="token comment"># 默认 1.1，启用 gzip 所需的 HTTP 最低版本；</span>
gzip_http_version <span class="token number">1.1</span><span class="token punctuation">;</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实也可以通过前端构建工具例如 <code>webpack</code> 、<code>rollup</code> 等在打生产包时就做好 <code>Gzip</code> 压缩，然后放到 <code>Nginx</code> 服务器中，这样可以减少服务器的开销，加快访问速度。</p><p>关于 <code>Nginx</code> 的实际应用就学习到这里，相信通过掌握了 <code>Nginx</code> 核心配置以及实战配置，之后再遇到什么需求，我们也能轻松应对。接下来，让我们再深入一点学习下 <code>Nginx</code> 的架构。</p><h1 id="nginx-架构" tabindex="-1"><a class="header-anchor" href="#nginx-架构" aria-hidden="true">#</a> Nginx 架构</h1><h2 id="进程结构" tabindex="-1"><a class="header-anchor" href="#进程结构" aria-hidden="true">#</a> 进程结构</h2><p>多进程结构 <code>Nginx</code> 的进程模型图：</p><p><img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/C3D7B78850A1EEF46451C9A71BA5B460.jpg" alt="img" loading="lazy"></p><p>多进程中的 <code>Nginx</code> 进程架构如下图所示，会有一个父进程（ <code>Master Process</code> ），它会有很多子进程（ <code>Child Processes</code> ）。</p><ul><li><div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code>Master <span class="token keyword">Process</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>用来管理子进程的，其本身并不真正处理用户请求。</p></li><li><ul><li>某个子进程 <code>down</code> 掉的话，它会向 <code>Master</code> 进程发送一条消息，表明自己不可用了，此时 <code>Master</code> 进程会去新起一个子进程。</li><li>某个配置文件被修改了 <code>Master</code> 进程会去通知 <code>work</code> 进程获取新的配置信息，这也就是我们所说的热部署。</li></ul></li><li><p>子进程间是通过共享内存的方式进行通信的。</p></li></ul><h2 id="配置文件重载原理" tabindex="-1"><a class="header-anchor" href="#配置文件重载原理" aria-hidden="true">#</a> 配置文件重载原理</h2><p><code>reload</code> 重载配置文件的流程：</p><ol><li>向 <code>master</code> 进程发送 <code>HUP</code> 信号（ <code>reload</code> 命令）；</li><li><code>master</code> 进程检查配置语法是否正确；</li><li><code>master</code> 进程打开监听端口；</li><li><code>master</code> 进程使用新的配置文件启动新的 <code>worker</code> 子进程；</li><li><code>master</code> 进程向老的 <code>worker</code> 子进程发送 <code>QUIT</code> 信号；</li><li>老的 <code>worker</code> 进程关闭监听句柄，处理完当前连接后关闭进程；</li><li>整个过程 <code>Nginx</code> 始终处于平稳运行中，实现了平滑升级，用户无感知；</li></ol><h2 id="nginx-模块化管理机制" tabindex="-1"><a class="header-anchor" href="#nginx-模块化管理机制" aria-hidden="true">#</a> Nginx 模块化管理机制</h2><p><code>Nginx</code> 的内部结构是由核心部分和一系列的功能模块所组成。这样划分是为了使得每个模块的功能相对简单，便于开发，同时也便于对系统进行功能扩展。<code>Nginx</code> 的模块是互相独立的,低耦合高内聚。<img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/B69DA539374F988BE5A69DB55FD4B77C.jpg" alt="img" loading="lazy"></p>`,127);function b(h,g){const a=p("ExternalLinkIcon");return c(),t("div",null,[d,s("p",null,[n("这两种"),s("a",r,[n("游戏账号买号"),e(a)]),s("a",u,[n("地图"),e(a)]),n("用法的区别就是带 "),v,n(" 和不带 "),m,n(" ，在配置代理时它们的区别可大了：")]),k])}const f=o(l,[["render",b],["__file","Nginx万字总结.html.vue"]]);export{f as default};
