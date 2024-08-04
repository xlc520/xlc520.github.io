import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as l,c as d,d as e,e as n,b as r,a as v}from"./app-DS3HItsn.js";const c={},t=e("h1",{id:"nginx-从安装到高可用",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nginx-从安装到高可用"},[e("span",null,"Nginx 从安装到高可用")])],-1),p=e("h3",{id:"一、nginx-安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#一、nginx-安装"},[e("span",null,"一、Nginx 安装")])],-1),u={id:"_1、去官网http-nginx-org-下载对应的-nginx-包-推荐使用稳定版本",tabindex:"-1"},m={class:"header-anchor",href:"#_1、去官网http-nginx-org-下载对应的-nginx-包-推荐使用稳定版本"},o={href:"http://nginx.org/%E4%B8%8B%E8%BD%BD%E5%AF%B9%E5%BA%94%E7%9A%84",target:"_blank",rel:"noopener noreferrer"},b=v(`<h5 id="_2、上传-nginx-到-linux-系统" tabindex="-1"><a class="header-anchor" href="#_2、上传-nginx-到-linux-系统"><span>2、上传 nginx 到 linux 系统</span></a></h5><h5 id="_3、安装依赖环境" tabindex="-1"><a class="header-anchor" href="#_3、安装依赖环境"><span>3、安装依赖环境</span></a></h5><p>(1)安装 gcc 环境</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>yum install gcc-c++
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(2)安装 PCRE 库，用于解析正则表达式</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>yum install -y pcre pcre-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(3)zlib 压缩和解压缩依赖</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>yum install -y zlib zlib-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(4)SSL 安全的加密的套接字协议层，用于 HTTP 安全传输，也就是 https</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>yum install -y openssl openssl-devel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_4、解压-需要注意-解压后得到的是源码-源码需要编译后才能安装" tabindex="-1"><a class="header-anchor" href="#_4、解压-需要注意-解压后得到的是源码-源码需要编译后才能安装"><span>4、解压，需要注意，解压后得到的是源码，源码需要编译后才能安装</span></a></h5><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>tar -zxvf nginx-1.16.1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_5、编译之前-先创建-nginx-临时目录-如果不创建-在启动-nginx-的过程中会报错" tabindex="-1"><a class="header-anchor" href="#_5、编译之前-先创建-nginx-临时目录-如果不创建-在启动-nginx-的过程中会报错"><span>5、编译之前，先创建 nginx 临时目录，如果不创建，在启动 nginx 的过程中会报错</span></a></h5><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>mkdir /var/temp/nginx -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_6、在-nginx-目录-输入如下命令进行配置-目的是为了创建-makefile-文件" tabindex="-1"><a class="header-anchor" href="#_6、在-nginx-目录-输入如下命令进行配置-目的是为了创建-makefile-文件"><span>6、在 nginx 目录，输入如下命令进行配置，目的是为了创建 makefile 文件</span></a></h5><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>./configure \\   
--prefix=/usr/local/nginx \\    
--pid-path=/var/run/nginx/nginx.pid \\    
--lock-path=/var/lock/nginx.lock \\    
--error-log-path=/var/log/nginx/error.log \\    
--http-log-path=/var/log/nginx/access.log \\    
--with-http_gzip_static_module \\    
--http-client-body-temp-path=/var/temp/nginx/client \\    
--http-proxy-temp-path=/var/temp/nginx/proxy \\    
--http-fastcgi-temp-path=/var/temp/nginx/fastcgi \\    
--http-uwsgi-temp-path=/var/temp/nginx/uwsgi \\    
--http-scgi-temp-path=/var/temp/nginx/scgi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：代表在命令行中换行，用于提高可读性配置命令：</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346363259473.jpg" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h5 id="_7、make-编译-安装" tabindex="-1"><a class="header-anchor" href="#_7、make-编译-安装"><span>7、make 编译&amp;安装</span></a></h5><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>make
make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_8、进入-sbin-目录启动-nginx" tabindex="-1"><a class="header-anchor" href="#_8、进入-sbin-目录启动-nginx"><span>8、进入 sbin 目录启动 nginx</span></a></h5><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>启动：nginx
停止：./nginx -s stop
重新加载：./nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、配置反向代理" tabindex="-1"><a class="header-anchor" href="#二、配置反向代理"><span>二、配置反向代理</span></a></h3><p>1、配置 upstream</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>upstream [proxyName] {
    server 192.168.1.173:8080;
    server 192.168.1.174:8080;
    server 192.168.1.175:8080;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、配置 server</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>server {
    listem  80;
    server_name www.tomcats.com;

    location / {
        proxy_pass http://tomcats;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、配置负载均衡" tabindex="-1"><a class="header-anchor" href="#三、配置负载均衡"><span>三、配置负载均衡</span></a></h3><p>nginx 默认采用轮训的方式进行负载均衡</p><p>1、使用加权轮询</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>upstream [proxyName] {
    server 192.168.1.173:8080 weight=1;
    server 192.168.1.174:8080 weight=5;
    server 192.168.1.175:8080 weight=2;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、hash 负载均衡</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>upstream [proxyName] {
    ip_hash

    server 192.168.1.173:8080;
    server 192.168.1.174:8080;
    server 192.168.1.175:8080;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>hash 算法实际上只会计算 192.168.1 这段做哈希</p><p>使用 ip_hash 的注意点：</p><ul><li>不能把后台服务器直接移除，只能标记 down.</li></ul><p>3、url hash 负载均衡</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>upstream [proxyName] {
    hash $request_url;

    server 192.168.1.173:8080;
    server 192.168.1.174:8080;
    server 192.168.1.175:8080;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、最小连接负载均衡</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>upstream [proxyName] {
    least_conn;

    server 192.168.1.173:8080;
    server 192.168.1.174:8080;
    server 192.168.1.175:8080;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四、upstream-指令参数" tabindex="-1"><a class="header-anchor" href="#四、upstream-指令参数"><span>四、upstream 指令参数</span></a></h3><ul><li><code>max_conns</code>：限制最大同时连接数 1.11.5 之前只能用于商业版</li><li><code>slow_start</code>：单位秒，权重在指定时间内从 1 上升到指定值，不适用与 hash 负载均衡、随机负载均衡 如果在 upstream 中只有一台 server，则该参数失效（商业版才有）</li><li><code>down</code>：禁止访问</li><li><code>backup</code>：备用机 只有在其他服务器无法访问的时候才能访问到 不适用与 hash 负载均衡、随机负载均衡</li><li><code>max_fails</code>：表示失败几次，则标记 server 已宕机，剔出上游服务 默认值 1</li><li><code>fail_timeout</code>：表示失败的重试时间 默认值 10</li></ul><p>1、keepalived</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>upstream [proxyName] {
    server 192.168.1.173:8080 weight=1;
    server 192.168.1.174:8080 weight=5;
    server 192.168.1.175:8080 weight=2;

    keepalive 32; #保持的连接数
}

server {
    listem  80;
    server_name www.tomcats.com;

    location / {
        proxy_pass http://tomcats;
        proxy_http_version 1.1; #连接的协议版本
        proxy_set_header Connection &quot;&quot;; 清空连接请求头
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、控制浏览器缓存</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>server {
    listem  80;
    server_name www.tomcats.com;

    location / {
        proxy_pass http://tomcats;
               expires 10s;  #浏览器缓存10秒钟
               #expires @22h30m  #在晚上10点30的时候过期
               #expires -1h  #缓存在一小时前时效
               #expires epoch  #不设置缓存
               #expires off  #缓存关闭，浏览器自己控制缓存
               #expires max  #最大过期时间
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、反向代理缓存</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>upstream [proxyName] {
    server 192.168.1.173:8080 weight=1;
    server 192.168.1.174:8080 weight=5;
    server 192.168.1.175:8080 weight=2;
}

#proxy_cache_path 设置缓存保存的目录的位置
#keys_zone设置共享内以及占用的空间大小
#mas_size 设置缓存最大空间
#inactive 缓存过期时间，错过此时间自动清理
#use_temp_path 关闭零时目录
proxy_cache_path /usr/local/nginx/upsteam_cache keys_zone=mycache:5m max_size=1g inactive=8h use_temp_path=off;

server {
    listem  80;
    server_name www.tomcats.com;
    #开启并使用缓存
    proxy_cache mycache;
    #针对200和304响应码的缓存过期时间
    proxy_cache_valid 200 304 8h;   

    location / {
        proxy_pass http://tomcats;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="五、配置-ssl-证书提供-https-访问" tabindex="-1"><a class="header-anchor" href="#五、配置-ssl-证书提供-https-访问"><span>五、配置 ssl 证书提供 https 访问</span></a></h3><h5 id="_1-安装-ssl-模块" tabindex="-1"><a class="header-anchor" href="#_1-安装-ssl-模块"><span>1. 安装 SSL 模块</span></a></h5><p>要在 nginx 中配置 https，就必须安装 ssl 模块，也就是: <code>http_ssl_module</code>。</p><p>进入到 nginx 的解压目录：<code>/home/software/nginx-1.16.1</code></p><p>新增 ssl 模块(原来的那些模块需要保留)</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>./configure \\
--prefix=/usr/local/nginx \\
--pid-path=/var/run/nginx/nginx.pid \\
--lock-path=/var/lock/nginx.lock \\
--error-log-path=/var/log/nginx/error.log \\
--http-log-path=/var/log/nginx/access.log \\
--with-http_gzip_static_module \\
--http-client-body-temp-path=/var/temp/nginx/client \\
--http-proxy-temp-path=/var/temp/nginx/proxy \\
--http-fastcgi-temp-path=/var/temp/nginx/fastcgi \\
--http-uwsgi-temp-path=/var/temp/nginx/uwsgi \\
--http-scgi-temp-path=/var/temp/nginx/scgi  \\
--with-http_ssl_module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编译和安装</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>make
make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2、配置-https" tabindex="-1"><a class="header-anchor" href="#_2、配置-https"><span>2、配置 HTTPS</span></a></h5><p>把 ssl 证书 <code>*.crt</code> 和 私钥 <code>*.key</code> 拷贝到<code>/usr/local/nginx/conf</code>目录中。</p><p>新增 server 监听 443 端口：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>server {
    listen       443;
    server_name  www.imoocdsp.com;
    # 开启ssl
    ssl     on;
    # 配置ssl证书
    ssl_certificate      1_www.imoocdsp.com_bundle.crt;
    # 配置证书秘钥
    ssl_certificate_key  2_www.imoocdsp.com.key;
    # ssl会话cache
    ssl_session_cache    shared:SSL:1m;
    # ssl会话超时时间
    ssl_session_timeout  5m;
    # 配置加密套件，写法遵循 openssl 标准
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    
    location / {
        proxy_pass http://tomcats/;
        index  index.html index.htm;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="六、配置-ha-nginx" tabindex="-1"><a class="header-anchor" href="#六、配置-ha-nginx"><span>六、配置 ha nginx</span></a></h3><h5 id="_1、安装-keepalived" tabindex="-1"><a class="header-anchor" href="#_1、安装-keepalived"><span>1、安装 keepalived</span></a></h5><p>(1)下载</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>https://www.keepalived.org/download.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(2)解压</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>tar -zxvf keepalived-2.0.18.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(3)使用 configure 命令配置安装目录与核心配置文件所在位置：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>./configure --prefix=/usr/local/keepalived --sysconf=/etc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li><strong>prefix</strong> ：keepalived 安装的位置 sysconf：keepalived 核心配置文件所在位置，固定位置，改成其他位置则 keepalived 启动不了，<code>/var/log/messages</code> 中会报错</li><li><strong>sysconf</strong>：keepalived 核心配置文件所在位置，固定位置，改成其他位置则 keepalived 启动不了，<code>/var/log/messages</code>中会报错</li></ul><p>配置过程中可能会出现警告信息，如下所示：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>*** WARNING - this build will not support IPVS with IPv6. Please install libnl/libnl-3 dev libraries to support IPv6 with IPVS.

# 安装libnl/libnl-3依赖
yum -y install libnl libnl-devel  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4)安装 keepalived</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>make &amp;&amp; make install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(5)配置文件 在<code>/etc/keepalived/keepalived.conf</code></p><p>(6)忘记安装配置的目录，则通过如下命令找到：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>whereis keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(7)启动 keepalived</p><p>进入 sbin 目录</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>./keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_2、配置-keepalived-主机" tabindex="-1"><a class="header-anchor" href="#_2、配置-keepalived-主机"><span>2、配置 keepalived 主机</span></a></h5><p>(1)通过命令 <code>vim keepalived.conf</code> 打开配置文件</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>global_defs { 
    # 路由id：当前安装keepalived的节点主机标识符，保证全局唯一 
    router_id keep_171 
} 

vrrp_instance VI_1 { 
    # 表示状态是MASTER主机还是备用机BACKUP 
    state MASTER 
    # 该实例绑定的网卡 
    interface ens33 
    # 保证主备节点一致即可 
    virtual_router_id 51 
    # 权重，master权重一般高于backup，如果有多个，那就是选举，谁的权重高，谁就当选 
    priority 100 
    # 主备之间同步检查时间间隔，单位秒 
    advert_int 2 
    # 认证权限密码，防止非法节点进入 
    authentication { 
        auth_type PASS 
        auth_pass 1111 
    } 
    # 虚拟出来的ip，可以有多个（vip） 
    virtual_ipaddress { 
        192.168.1.161 
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>附：查看网卡信息命令</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>ip addr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(2)启动 keepalived</p><p>(3)查看进程</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>ps -ef|grep keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(4)查看 vip(虚拟 ip)</p><p>在网卡 ens33 下，多了一个<code>192.168.1.161</code>，这个就是虚拟 ip</p><h5 id="_3、把-keepalived-注册为系统服务" tabindex="-1"><a class="header-anchor" href="#_3、把-keepalived-注册为系统服务"><span>3、把 keepalived 注册为系统服务</span></a></h5><p>(1)拷贝配置文件</p><ul><li>将 keepalived 目录下<code>etc/init.d/keepalived</code>拷贝到<code>/etc/init.d/</code>下</li><li>将 keepalived 目录下<code>etc/sysconfig/keepalived</code>拷贝到<code>/etc/sysconfig/</code>下</li></ul><p>(2)刷新 systemctl</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(3)启动、停止、重启 keepalived</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>#启动
systemctl start keepalived.service
#停止
systemctl stop keepalived.service
#重启
systemctl restart keepalived.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_4、实现双机主备高可用" tabindex="-1"><a class="header-anchor" href="#_4、实现双机主备高可用"><span>4、实现双机主备高可用</span></a></h5><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346363259474.webp" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>(1)修改备机配置</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>global_defs { 
    router_id keep_172 
} 
vrrp_instance VI_1 { 
    # 备用机设置为BACKUP 
    state BACKUP 
    interface ens33 
    virtual_router_id 51 
    # 权重低于MASTER 
    priority 80 
    advert_int 2 
    authentication { 
        auth_type PASS auth_pass 1111 
    }
    virtual_ipaddress {
        # 注意：主备两台的vip都是一样的，绑定到同一个vip 
        192.168.1.161 
    } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2) 启动 Keepalived</p><p>(3) 访问 vip 即可访问主机，当主机失效时访问 vip 就会访问到备机</p><h5 id="_5、keepalived-配置-nginx-自动重启" tabindex="-1"><a class="header-anchor" href="#_5、keepalived-配置-nginx-自动重启"><span>5、keepalived 配置 nginx 自动重启</span></a></h5><p>(1)编写脚本</p><p>在<code>/etc/keepalived/</code>下创建脚本<code>check_nginx_alive_or_not</code></p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>#!/bin/bash 

A=\`ps -C nginx --no-header |wc -l\` 
# 判断nginx是否宕机，如果宕机了，尝试重启 
if [ $A -eq 0 ];then 
    /usr/local/nginx/sbin/nginx 
    # 等待一小会再次检查nginx，如果没有启动成功，则停止keepalived，使其启动备用机 
    sleep 3 
        if [ \`ps -C nginx --no-header |wc -l\` -eq 0 ];then 
            killall keepalived 
        fi 
fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2)添加运行权限</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>chmod +x /etc/keepalived/check_nginx_alive_or_not.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(3)配置 keepalived 监听 nginx 脚本</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>vrrp_script check_nginx_alive { 
    script &quot;/etc/keepalived/check_nginx_alive_or_not.sh&quot; 
    interval 2 # 每隔两秒运行上一行脚本 
    weight 10 # 如果脚本运行失败，则升级权重+10 
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4)在 vrrp_instance 中新增监控的脚本</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>track_script { 
    check_nginx_alive # 追踪 nginx 脚本
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(5)重启 Keepalived 使得配置文件生效</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>systemctl restart keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_6、keepalived-双主热备" tabindex="-1"><a class="header-anchor" href="#_6、keepalived-双主热备"><span>6、keepalived 双主热备</span></a></h5><p>(1)配置 DNS 轮询</p><p>在同一个域名下配置两个 ip，自行百度</p><p>(2)配置第一台主机</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>global_defs {
    router_id keep_171 
} 
vrrp_instance VI_1 { 
    state MASTER i
    nterface ens33 
    virtual_router_id 51 
    priority 100 
    advert_int 1 
    authentication { 
        auth_type PASS 
        auth_pass 1111 
    } 
    virtual_ipaddress { 
        192.168.1.161 
    } 
} 

vrrp_instance VI_2  {
    state BACKUP 
    interface ens33 
    virtual_router_id 52 
    priority 80 
    advert_int 1 
    authentication { 
        auth_type PASS 
        auth_pass 1111 
    } 
    virtual_ipaddress { 
        192.168.1.162 
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3)配置第二台主机</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>global_defs {
    router_id keep_172 
} 
vrrp_instance VI_1 { 
    state BACKUP 
    interface ens33 
    virtual_router_id 51 
    priority 80 
    advert_int 1 
    authentication { 
        auth_type PASS 
        auth_pass 1111 
    } 
    virtual_ipaddress { 
        192.168.1.161
    }
} 

vrrp_instance VI_2 {
    state MASTER 
    interface ens33 
    virtual_router_id 52 
    priority 100 
    advert_int 1 
    authentication { 
        auth_type PASS 
        auth_pass 1111 
    } 
    virtual_ipaddress { 
        192.168.1.162 
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4)重启两台 Keepalived</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>systemctl restart keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="七、lvs-linux-virtual-server-实现高可用负载均衡" tabindex="-1"><a class="header-anchor" href="#七、lvs-linux-virtual-server-实现高可用负载均衡"><span>七、LVS（Linux Virtual Server）实现高可用负载均衡</span></a></h3><h5 id="_1、为什么要使用-lvs-nginx" tabindex="-1"><a class="header-anchor" href="#_1、为什么要使用-lvs-nginx"><span>1、为什么要使用 LVS+Nginx</span></a></h5><ul><li>lvs 基于四层负载均衡，工作效率较 Nginx 的七层负载更高，使用 LVS 搭建 Nginx 集群，可以提高性能</li><li>四层负载均衡无法对信息处理，只能通过 ip+端口的形式转发，所以需要七成负载进行数据的处理</li><li>Nginx 接收请求来回，LVS 可以只接受不响应</li></ul><h5 id="_2、lvs-的三种模式" tabindex="-1"><a class="header-anchor" href="#_2、lvs-的三种模式"><span>2、LVS 的三种模式</span></a></h5><p>(1)NAT 模式</p><ul><li>客户端将请求发往 LVS，LVS 会选择一台服务器响应请求，服务器将结果返回给 LVS，LVS 再返回给客户端。</li><li>在 NAT 模式中，服务器的网关必须指向 LVS，否则报文无法送达客户端</li><li>NAT 技术将请求的报文和响应的报文都需要通过 LVS 进行地址改写，因此网站访问量比较大的时候负载均衡调度器有比较大的瓶颈，一般要求最多之能 10-20 台节点</li><li>NAT 模式支持对 IP 地址和端口进行转换。即用户请求的端口和真实服务器的端口可以不一致</li></ul><p>(2)TUN 模式</p><ul><li>客户端将请求发往 LVS，LVS 会选择一台服务器响应请求，在客户端与服务器之间建立隧道，返回结果的时候直接由服务器返回响应，不在经过 LVS。</li><li>TUN 模式必须所有的服务器上都绑定 VIP 的 IP 地址，所有的服务器都必须有网卡。</li><li>TUN 模式走隧道运维难度大，并且会直接暴露服务器地址</li><li>服务器将应答包直接发给用户。所以，减少了负载均衡器的大量数据流动，负载均衡器不再是系统的瓶颈，就能处理很巨大的请求量，这种方式，一台负载均衡器能够为很多服务器进行分发。而且跑在公网上就能进行不同地域的分发</li></ul><p>(3)DR 模式</p><ul><li>客户端将请求发往 LVS，LVS 会选择一台服务器响应请求，返回结果的时候通过统一的路由进行返回，不在经过 LVS。</li><li>和 TUN 模式一样，LVS 只是分发请求，应答包通过单独的路由返回给客户端，与 TUN 相比这种方式不需要隧道结构，可以兼容大多数的操作系统，同时统一路由可以隐藏真实的物理服务器。DR 模式效率更高，但配置更复杂.</li><li>所有服务器节点和 LVS 只能在一个局域网里面。</li></ul><h5 id="_3、搭建-lvs-dr-模式" tabindex="-1"><a class="header-anchor" href="#_3、搭建-lvs-dr-模式"><span>3、搭建 LVS-DR 模式</span></a></h5><p>先关闭掉服务器上网络配置管理器，避免网络接口冲突</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>systemctl stop NetworkManager
systemctl disable NetworkManager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>(1)创建子接口（创建 LVS 的虚拟 ip）</p><p>进入网卡配置目录<code>/etc/sysconfig/network-scripts/</code>,找到网卡配置文件，这里以<code>ifcfg-ens33</code>为例，拷贝并创建子接口</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>cp ifcfg-ens33 ifcfg-ens33:1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改子接口配置如下</p><ul><li>配置中的 192.168.1.150 就是 vip，是提供给外网用户访问的 ip 地址</li></ul><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>DEVICE=&quot;ens33:1&quot;
ONBOOT=&quot;yes&quot;
IPADDR=192.168.1.150
NETMASK=255.255.255.0
BOOTPROTO=static
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>重启网络服务</li></ul><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>service network restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启成功后，ip addr 查看一下，你会发现多了一个 ip，也就是虚拟 ip（vip）</p><blockquote><p>注意：阿里云不支持配置网卡，需要购买相应的负载均衡服务，腾讯云支持配置网卡，但需要购买网卡支持，一个网卡支持 10 个虚拟 ip 配置</p></blockquote><p>(2)安装 ipvsadm</p><p>如今的 centos 都集成了 LVS，所以 ipvs 是自带的，我们只需要安装 ipvsadm 即可（ipvsadm 是管理集群的工具，通过 ipvs 可以管理集群，查看集群等操作）</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>yum install ipvsadm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(3)配置服务器（RS）的虚拟 ip</p><p>进入网卡配置目录<code>/etc/sysconfig/network-scripts/</code>,找到<code>ifcfg-lo</code>，拷贝并创建子接口</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>cp ifcfg-lo ifcfg-lo:1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改子接口配置如下</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>DEVICE=&quot;lo:1&quot;
IPADDR=192.168.1.150
NETMASK=255.255.255.255
NETWORK=127.0.0.0
BROADCAST=127.255.255.255
ONBOOT=&quot;yes&quot;
NAME=loopback
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启网络服务成功后，<code>ip addr</code> 查看一下，你会发现多了一个 ip，也就是虚拟 ip（vip）</p><p>(4)为服务器（RS）配置 arp</p><p>ARP 响应级别与通告行为参数说明</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>arp-ignore：ARP响应级别（处理请求）
    0：只要本机配置了ip，就能响应请求
    1：请求的目标地址到达对应的网络接口，才会响应请求
arp-announce：ARP通告行为（返回响应）
    0：本机上任何网络接口都向外通告，所有的网卡都能接受到通告
    1：尽可能避免本网卡与不匹配的目标进行通告2：只在本网卡通告
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开 sysctl.conf:</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>vim /etc/sysctl.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置所有网卡、默认网卡以及虚拟网卡的 arp 响应级别和通告行为，分别对应：all，default，lo</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code># configration for lvs 
net.ipv4.conf.all.arp_ignore = 1 
net.ipv4.conf.default.arp_ignore = 1 
net.ipv4.conf.lo.arp_ignore = 1 

net.ipv4.conf.all.arp_announce = 2 
net.ipv4.conf.default.arp_announce = 2 
net.ipv4.conf.lo.arp_announce = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>刷新配置文件</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>sysctl -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>增加一个网关，用于接收数据报文，当有请求到本机后，会交给 lo 去处理</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>route add -host 192.168.1.150 dev lo:1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将网关添加至开机启动</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>echo &quot;route add -host 192.168.1.150 dev lo:1&quot; &gt;&gt; /etc/rc.local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(4)使用 ipvsadm 配置集群规则</p><p>创建 LVS 节点，用户访问的集群调度者</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>ipvsadm -A -t 192.168.1.150:80 -s rr -p 5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>-A：添加集群</li><li>-t：tcp 协议 ip 地址：设定集群的访问</li><li>ip：也就是 LVS 的虚拟 ip</li><li>-s：设置负载均衡的算法，</li><li>rr：表示轮询</li><li>-p：设置连接持久化的时间,在指定时间内同一个用户的请求会访问到同一个服务器中</li></ul><p>创建多台 RS 真实服务器</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>ipvsadm -a -t 192.168.1.150:80 -r 192.168.1.171:80 -g 
ipvsadm -a -t 192.168.1.150:80 -r 192.168.1.172:80 -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>-a：添加真实服务器</li><li>-t：tcp 协议</li><li>-r：真实服务器的 ip 地址</li><li>-g：设定 DR 模式</li></ul><p>保存到规则库，否则重启失效</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>ipvsadm -S
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>检查集群</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>#查看集群列表
ipvsadm -Ln
#查看集群状态
ipvsadm -Ln --stats
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一些其他命令</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code> # 重启ipvsadm，重启后需要重新配置 
 service ipvsadm restart 
 # 查看持久化连接 
 ipvsadm -Ln --persistent-conn 
 # 查看连接请求过期时间以及请求源ip和目标ip 
 ipvsadm -Lnc 
 # 设置tcp tcpfin udp 的过期时间（一般保持默认） 
 ipvsadm --set 1 1 1 
 # 查看过期时间 
 ipvsadm -Ln --timeout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(5)访问虚拟 ip，完成 LVS 搭建</p><h3 id="附-lvs-的负载均衡算法" tabindex="-1"><a class="header-anchor" href="#附-lvs-的负载均衡算法"><span>附：LVS 的负载均衡算法</span></a></h3><h5 id="_1-静态算法" tabindex="-1"><a class="header-anchor" href="#_1-静态算法"><span>(1)静态算法</span></a></h5><p>静态：根据 LVS 本身自由的固定的算法分发用户请求。</p><ul><li>轮询（Round Robin 简写’rr’）：轮询算法假设所有的服务器处理请求的能力都一样的，调度器会把所有的请求平均分配给每个真实服务器。（同 Nginx 的轮询）</li><li>加权轮询（Weight Round Robin 简写’wrr’）：安装权重比例分配用户请求。权重越高，被分配到处理的请求越多。（同 Nginx 的权重）</li><li>源地址散列（Source Hash 简写’sh’）：同一个用户 ip 的请求，会由同一个 RS 来处理。（同 Nginx 的 ip_hash）</li><li>目标地址散列（Destination Hash 简写’dh’）：根据 url 的不同，请求到不同的 RS。（同 Nginx 的 url_hash）</li></ul><h5 id="_2-动态算法" tabindex="-1"><a class="header-anchor" href="#_2-动态算法"><span>(2)动态算法</span></a></h5><p>动态：会根据流量的不同，或者服务器的压力不同来分配用户请求，这是动态计算的。</p><ul><li><p>最小连接数（Least Connections 简写’lc’）：把新的连接请求分配到当前连接数最小的服务器。</p></li><li><p>加权最少连接数（Weight Least Connections 简写’wlc’）：服务器的处理性能用数值来代表，权重越大处理的请求越多。Real Server 有可能会存在性能上的差异，wlc 动态获取不同服务器的负载状况，把请求分发到性能好并且比较空闲的服务器。</p></li><li><p>最短期望延迟（Shortest Expected Delay 简写’sed’）：特殊的 wlc 算法。举例阐述，假设有 ABC 三台服务器，权重分别为 1、2、3 。如果使用 wlc 算法的话，当一个新请求进来，它可能会分给 ABC 中的任意一个。使用 sed 算法后会进行如下运算：</p></li><li><ul><li>A：（1+1）/1=2</li><li>B：（1+2）/2=3/2</li><li>C：（1+3）/3=4/3</li></ul></li></ul><p>最终结果，会把这个请求交给得出运算结果最小的服务器。最少队列调度（Never Queue 简写’nq’）：永不使用队列。如果有 Real Server 的连接数等于 0，则直接把这个请求分配过去，不需要在排队等待运算了（sed 运算）。</p><h3 id="八、搭建-keepalived-lvs-nginx-高可用集群负载均衡" tabindex="-1"><a class="header-anchor" href="#八、搭建-keepalived-lvs-nginx-高可用集群负载均衡"><span>八、搭建 Keepalived+Lvs+Nginx 高可用集群负载均衡</span></a></h3><p>如果原先服务器上配置了 LVS+nginx 需要清空 ipvsadm 中的配置</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>ipvsadm -C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果配置了<code>Keepalived+Nginx</code>双主集群也需要去除掉 Keepalived 中原先的配置，按照的后文进行配置</p><h5 id="_1-使用-keepalived-配置-master-lvs" tabindex="-1"><a class="header-anchor" href="#_1-使用-keepalived-配置-master-lvs"><span>(1)使用 keepalived 配置 Master LVS</span></a></h5><p>在 LVS 的机器上安装 keepalived，安装过程参考上文</p><p>(1)修改 keepalived 的配置</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>global_defs {
    router_id keep_151 
} 
vrrp_instance VI_1 { 
    state MASTER 
    interface ens33 
    virtual_router_id 41 
    priority 100 
    advert_int 1 
    authentication { 
        auth_type PASS 
        auth_pass 1111 
    } 
    virtual_ipaddress { 
        192.168.1.150
    }
} 

#配置集群访问的ip+端口，端口和nginx保持一致
virtual_server 192.168.1.150 80{
    #健康检查的时间，单位：秒
    delay_loop 6
    #配置负载均衡的算法，默认的轮询
    lb_algo rr
    #设置LVS的模式 NAT|TUN|DR
    lb-kind DR
    #设置会话持久化的时间
    persistence_timeout 5
    #协议
    protocol TCP
    
    #配置负载均衡的真实服务器，也就是nginx节点的具体的ip地址
    real_server 192.168.1.171 80{
        #轮询权重配比
        weight 1
        #设置健康检查
        TCP_CHECK {
            #检查80端口
            connect_port 80
            #超时时间
            connect_timeout 2
            #重试次数
            nb_get_retry 2
            #重试间隔时间
            delay_before_retry 3
        }
    }
    real_server 192.168.1.171 80{
        weight 1
        TCP_CHECK {
            connect_port 80
            connect_timeout 2
            nb_get_retry 2
            delay_before_retry 3
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2)启动/重启 keepalived</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>systemctl restart keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="_2-使用-keepalived-配置-backup-lvs" tabindex="-1"><a class="header-anchor" href="#_2-使用-keepalived-配置-backup-lvs"><span>(2)使用 keepalived 配置 Backup LVS</span></a></h5><p>配置在备用机上</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>global_defs {
    router_id keep_152 
} 
vrrp_instance VI_1 { 
    state  BACKUP
    interface ens33 
    virtual_router_id 41 
    priority 50 
    advert_int 1 
    authentication { 
        auth_type PASS 
        auth_pass 1111 
    } 
    virtual_ipaddress { 
        192.168.1.150
    }
} 

#配置集群访问的ip+端口，端口和nginx保持一致
virtual_server 192.168.1.150 80{
    #健康检查的时间，单位：秒
    delay_loop 6
    #配置负载均衡的算法，默认的轮询
    lb_algo rr
    #设置LVS的模式 NAT|TUN|DR
    lb-kind DR
    #设置会话持久化的时间
    persistence_timeout 5
    #协议
    protocol TCP
    
    #配置负载均衡的真实服务器，也就是nginx节点的具体的ip地址
    real_server 192.168.1.171 80{
        #轮询权重配比
        weight 1
        #设置健康检查
        TCP_CHECK {
            #检查80端口
            connect_port 80
            #超时时间
            connect_timeout 2
            #重试次数
            nb_get_retry 2
            #重试间隔时间
            delay_before_retry 3
        }
    }
    real_server 192.168.1.171 80{
        weight 1
        TCP_CHECK {
            connect_port 80
            connect_timeout 2
            nb_get_retry 2
            delay_before_retry 3
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="九、其他配置或参数说明" tabindex="-1"><a class="header-anchor" href="#九、其他配置或参数说明"><span>九、其他配置或参数说明</span></a></h2><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">proxy_cache_path</span> <span class="token value attr-value"> #代理缓存的路径</span>
<span class="token comment">#语法格式</span>
<span class="token key attr-name">proxy_cache_path</span> <span class="token value attr-value">path [levels=levels] [use_temp_path=on|off] keys_zone=name:size [inactive=time] [max_size=size] [manager_files=number] [manager_sleep=time] [manager_threshold=time] [loader_files=number] [loader_sleep=time] [loader_threshold=time] [purger=on|off] [purger_files=number] [purger_sleep=time] [purger_threshold=time];</span>

<span class="token key attr-name">proxy_cache</span> <span class="token value attr-value">#开启或关闭代理缓存</span>
<span class="token comment">#语法格式</span>
<span class="token key attr-name">proxy_cache</span> <span class="token value attr-value">zone | off;  #zone为内存区域的名称，即上面中keys_zone设置的名称。</span>

<span class="token key attr-name">proxy_cache_key</span> <span class="token value attr-value">#定义如何生成缓存的键</span>
<span class="token comment">#语法格式</span>
<span class="token key attr-name">proxy_cache_key</span> <span class="token value attr-value">string;  #string为生成Key的规则，如proxy_host$request_uri。</span>

<span class="token key attr-name">proxy_cache_valid</span> <span class="token value attr-value"> #缓存生效的状态码与过期时间。</span>
<span class="token comment">#语法格式</span>
<span class="token key attr-name">proxy_cache_valid</span> <span class="token value attr-value">[code ...] time;  #code为状态码，time为有效时间，可以根据状态码设置不同的缓存时间。如：proxy_cache_valid 200 302 30m;</span>

<span class="token key attr-name">proxy_cache_min_uses</span> <span class="token value attr-value">#设置资源被请求多少次后被缓存。</span>
<span class="token comment">#语法格式</span>
<span class="token key attr-name">proxy_cache_min_uses</span> <span class="token value attr-value">number;  #number为次数，默认为1。</span>

<span class="token key attr-name">proxy_cache_use_stale</span> <span class="token value attr-value">#当后端出现异常时，是否允许Nginx返回缓存作为响应。</span>
<span class="token comment">#语法格式</span>
<span class="token key attr-name">proxy_cache_use_stale</span> <span class="token value attr-value">error;  #error为错误类型</span>

<span class="token key attr-name">proxy_cache_lock</span> <span class="token value attr-value"> #是否开启锁机制</span>
<span class="token comment">#语法格式</span>
<span class="token key attr-name">proxy_cache_lock</span> <span class="token value attr-value">on | off;</span>

<span class="token key attr-name">proxy_cache_lock_timeout</span> <span class="token value attr-value">#配置锁超时机制，超出规定时间后会释放请求。</span>
<span class="token comment">#语法格式</span>
<span class="token key attr-name">proxy_cache_lock_timeout</span> <span class="token value attr-value">time;</span>

<span class="token key attr-name">proxy_cache_methods</span> <span class="token value attr-value">#设置对于那些HTTP方法开启缓存。</span>
<span class="token comment">#语法格式</span>
<span class="token key attr-name">proxy_cache_methods</span> <span class="token value attr-value">method;  #method为请求方法类型，如GET、HEAD等。</span>

<span class="token key attr-name">proxy_no_cache</span> <span class="token value attr-value">#设置不存储缓存的条件，符合时不会保存。</span>
<span class="token comment">#语法格式</span>
<span class="token key attr-name">proxy_no_cache</span> <span class="token value attr-value">string...;  #string为条件，如arg_nocache $arg_comment;</span>

<span class="token key attr-name">proxy_cache_bypass</span> <span class="token value attr-value"> #设置不读取缓存的条件，符合时不会从缓存中读取。</span>
<span class="token comment">#语法格式</span>
<span class="token key attr-name">proxy_cache_bypass</span> <span class="token value attr-value">string...;  #与上面proxy_no_cache的配置方法类似。</span>

<span class="token key attr-name">add_header</span> <span class="token value attr-value"> #配置往响应头中添加字段信息。</span>
<span class="token comment">#语法格式</span>
<span class="token key attr-name">add_header</span> <span class="token value attr-value">fieldName fieldValue;</span>

<span class="token key attr-name">$upstream_cache_status</span> <span class="token value attr-value">#记录了缓存是否命中的信息，存在以下多种情况：</span>
MISS：请求未命中缓存。
HIT：请求命中缓存。
EXPIRED：请求命中缓存但缓存已过期。
STALE：请求命中了陈旧缓存。
REVALIDDATED：Nginx验证陈旧缓存依然有效。
UPDATING：命中的缓存内容陈旧，但正在更新缓存。
BYPASS：响应结果是从原始服务器获取的。
<span class="token comment">#注：这是一个Nginx内置变量，与上面的参数不同。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置示例" tabindex="-1"><a class="header-anchor" href="#配置示例"><span>配置示例</span></a></h3><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">server{</span> <span class="token value attr-value"> </span>
<span class="token key attr-name">    location</span> <span class="token value attr-value">/ {  </span>
<span class="token comment">        # 使用名为nginx_cache的缓存空间  </span>
<span class="token key attr-name">        proxy_cache</span> <span class="token value attr-value">hot_cache;  </span>
<span class="token comment">        # 对于200、206、304、301、302状态码的数据缓存1天  </span>
<span class="token key attr-name">        proxy_cache_valid</span> <span class="token value attr-value">200 206 304 301 302 1d;  </span>
<span class="token comment">        # 对于其他状态的数据缓存30分钟  </span>
<span class="token key attr-name">        proxy_cache_valid</span> <span class="token value attr-value">any 30m;  </span>
<span class="token comment">        # 定义生成缓存键的规则（请求的url+参数作为key）  </span>
<span class="token key attr-name">        proxy_cache_key</span> <span class="token value attr-value">$host$uri$is_args$args;  </span>
<span class="token comment">        # 资源至少被重复访问三次后再加入缓存  </span>
<span class="token key attr-name">        proxy_cache_min_uses</span> <span class="token value attr-value">3;  </span>
<span class="token comment">        # 出现重复请求时，只让一个去后端读数据，其他的从缓存中读取  </span>
<span class="token key attr-name">        proxy_cache_lock</span> <span class="token value attr-value">on;  </span>
<span class="token comment">        # 上面的锁超时时间为3s，超过3s未获取数据，其他请求直接去后端  </span>
<span class="token key attr-name">        proxy_cache_lock_timeout</span> <span class="token value attr-value">3s;  </span>
<span class="token comment">        # 对于请求参数或cookie中声明了不缓存的数据，不再加入缓存  </span>
<span class="token key attr-name">        proxy_no_cache</span> <span class="token value attr-value">$cookie_nocache $arg_nocache $arg_comment;  </span>
<span class="token comment">        # 在响应头中添加一个缓存是否命中的状态（便于调试）  </span>
<span class="token key attr-name">        add_header</span> <span class="token value attr-value">Cache-status $upstream_cache_status;  </span>
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,207);function g(h,_){const i=s("ExternalLinkIcon");return l(),d("div",null,[t,p,e("h5",u,[e("a",m,[e("span",null,[n("1、去官网"),e("a",o,[n("http://nginx.org/下载对应的"),r(i)]),n(" nginx 包，推荐使用稳定版本")])])]),b])}const y=a(c,[["render",g],["__file","Nginx从安装到高可用.html.vue"]]),f=JSON.parse('{"path":"/linux/Nginx%E4%BB%8E%E5%AE%89%E8%A3%85%E5%88%B0%E9%AB%98%E5%8F%AF%E7%94%A8.html","title":"Nginx从安装到高可用","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"Nginx从安装到高可用","excerpt":null,"description":"Nginx从安装到高可用","date":"2022-01-16T00:00:00.000Z","category":"other","tag":"other","article":true,"timeline":true,"icon":"type","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/linux/Nginx%E4%BB%8E%E5%AE%89%E8%A3%85%E5%88%B0%E9%AB%98%E5%8F%AF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"Nginx从安装到高可用"}],["meta",{"property":"og:description","content":"Nginx从安装到高可用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346363259473.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"other"}],["meta",{"property":"article:published_time","content":"2022-01-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx从安装到高可用\\",\\"image\\":[\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346363259473.jpg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346363259474.webp\\"],\\"datePublished\\":\\"2022-01-16T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":3,"title":"一、Nginx 安装","slug":"一、nginx-安装","link":"#一、nginx-安装","children":[]},{"level":3,"title":"二、配置反向代理","slug":"二、配置反向代理","link":"#二、配置反向代理","children":[]},{"level":3,"title":"三、配置负载均衡","slug":"三、配置负载均衡","link":"#三、配置负载均衡","children":[]},{"level":3,"title":"四、upstream 指令参数","slug":"四、upstream-指令参数","link":"#四、upstream-指令参数","children":[]},{"level":3,"title":"五、配置 ssl 证书提供 https 访问","slug":"五、配置-ssl-证书提供-https-访问","link":"#五、配置-ssl-证书提供-https-访问","children":[]},{"level":3,"title":"六、配置 ha nginx","slug":"六、配置-ha-nginx","link":"#六、配置-ha-nginx","children":[]},{"level":3,"title":"七、LVS（Linux Virtual Server）实现高可用负载均衡","slug":"七、lvs-linux-virtual-server-实现高可用负载均衡","link":"#七、lvs-linux-virtual-server-实现高可用负载均衡","children":[]},{"level":3,"title":"附：LVS 的负载均衡算法","slug":"附-lvs-的负载均衡算法","link":"#附-lvs-的负载均衡算法","children":[]},{"level":3,"title":"八、搭建 Keepalived+Lvs+Nginx 高可用集群负载均衡","slug":"八、搭建-keepalived-lvs-nginx-高可用集群负载均衡","link":"#八、搭建-keepalived-lvs-nginx-高可用集群负载均衡","children":[]},{"level":2,"title":"九、其他配置或参数说明","slug":"九、其他配置或参数说明","link":"#九、其他配置或参数说明","children":[{"level":3,"title":"配置示例","slug":"配置示例","link":"#配置示例","children":[]}]}],"git":{"createdTime":1647698494000,"updatedTime":1714224756000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":3},{"name":"xlc","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":18.46,"words":5537},"filePathRelative":"linux/Nginx从安装到高可用.md","localizedDate":"2022年1月16日"}');export{y as comp,f as data};
