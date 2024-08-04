import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as l,c as i,b as e,n as r,g as p,a as o}from"./app-DS3HItsn.js";const c={},d=o(`<h1 id="生产环境可套用的nginx配置手册" tabindex="-1"><a class="header-anchor" href="#生产环境可套用的nginx配置手册"><span>生产环境可套用的Nginx配置手册</span></a></h1><h2 id="nginx-安装" tabindex="-1"><a class="header-anchor" href="#nginx-安装"><span><strong>Nginx 安装</strong></span></a></h2><p>CentOS</p><p>在 CentOS 中，你可以使用如下命令来安装 Nginx：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo yum install epel-releasesudo yum install nginxsudo systemctl enable nginxsudo systemctl start nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Ubuntu</p><p>在 Ubuntu 中，你可以使用如下命令来安装 Nginx：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo apt update -ysudo apt install nginxsudo systemctl enable nginxsudo systemctl start nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="nginx-配置文件" tabindex="-1"><a class="header-anchor" href="#nginx-配置文件"><span><strong>Nginx 配置文件</strong></span></a></h2><p>以下为一个标准的 Nginx 配置文件，相关配置项目及解读如下：</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">user</span> <span class="token value attr-value">www www; # Nginx 使用的用户和用户组</span>
<span class="token key attr-name">worker_processes</span> <span class="token value attr-value">2; # worker 进程数量</span>
<span class="token key attr-name">pid</span> <span class="token value attr-value">/var/run/nginx.pid; # nginx 使用的 PID 文件路径</span>
<span class="token comment"># 日志等级 [ debug | info | notice | warn | error | crit ]</span>
<span class="token key attr-name">error_log</span> <span class="token value attr-value">/var/log/nginx.error_log info; # 日志路径、日志等级</span>
<span class="token key attr-name">events</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">  worker_connections</span> <span class="token value attr-value">2000; # 每个 Worker 处理的</span>
<span class="token comment">  # use [ kqueue | epoll | /dev/poll | select | poll ];</span>
<span class="token key attr-name">  use</span> <span class="token value attr-value">kqueue; # 事件处理模型</span>
}
<span class="token key attr-name">http</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">  include</span> <span class="token value attr-value">conf/mime.types; # 引入 mime-types</span>
<span class="token key attr-name">  default_type</span> <span class="token value attr-value">application/octet-stream; # 设置默认情况下的 mime-type7 &gt; Nginx 配置文件</span>
<span class="token key attr-name">  log_format</span> <span class="token value attr-value">main &#39;$remote_addr - $remote_user [$time_local] &#39;</span>
<span class="token key attr-name">    &#39;&quot;$request&quot;</span> <span class="token value attr-value">$status $bytes_sent &#39;</span>
<span class="token key attr-name">    &#39;&quot;$http_referer&quot;</span> <span class="token value attr-value">&quot;$http_user_agent&quot; &#39;</span>
<span class="token key attr-name">    &#39;&quot;$gzip_ratio&quot;&#39;;</span> <span class="token value attr-value"># 日志格式</span>
  
<span class="token key attr-name">  log_format</span> <span class="token value attr-value">download &#39;$remote_addr - $remote_user [$time_local] &#39;</span>
<span class="token key attr-name">    &#39;&quot;$request&quot;</span> <span class="token value attr-value">$status $bytes_sent &#39;</span>
<span class="token key attr-name">    &#39;&quot;$http_referer&quot;</span> <span class="token value attr-value">&quot;$http_user_agent&quot; &#39;</span>
<span class="token key attr-name">    &#39;&quot;$http_range&quot;</span> <span class="token value attr-value">&quot;$sent_http_content_range&quot;&#39;; # 自定义日志格式</span>

<span class="token key attr-name">  client_header_timeout</span> <span class="token value attr-value">3m; #客户端头超时时间</span>
<span class="token key attr-name">  client_body_timeout</span> <span class="token value attr-value">3m; #客户端体超时时间</span>
<span class="token key attr-name">  send_timeout</span> <span class="token value attr-value">3m; #返回结果超时时间</span>
<span class="token key attr-name">  client_header_buffer_size</span> <span class="token value attr-value">1k; # 客户端头缓存大小</span>
<span class="token key attr-name">  large_client_header_buffers</span> <span class="token value attr-value">4 4k; # 较大客户端头缓存大小</span>

<span class="token key attr-name">  gzip</span> <span class="token value attr-value">on; #是否开启 Gzip</span>
<span class="token key attr-name">  gzip_min_length</span> <span class="token value attr-value">1100; # Gzip 处理的底线阈值</span>
<span class="token key attr-name">  gzip_buffers</span> <span class="token value attr-value">4 8k; # gzip 压缩所用 Buffer</span>
<span class="token key attr-name">  gzip_types</span> <span class="token value attr-value">text/plain; # gzip 使用的 mime-type</span>
<span class="token key attr-name">  output_buffers</span> <span class="token value attr-value">1 32k; # 输出 buffer</span>
<span class="token key attr-name">  postpone_output</span> <span class="token value attr-value">1460; #指定 Nginx 发送给客户端最小的数值，如果可能的话，没有数据会发送，直到达到此值</span>

<span class="token key attr-name">  sendfile</span> <span class="token value attr-value">on; # 使用 sendfile 发送文件</span>
<span class="token key attr-name">  tcp_nopush</span> <span class="token value attr-value">on; # 仅依赖于 sendfile 的使用。它能够使 Nginx 在一个数据包中尝试发送响应头，以及在数据包中发送一个完整的文件</span>
<span class="token key attr-name">  tcp_nodelay</span> <span class="token value attr-value">on; #启用或禁用 TCP_NODELAY 选项，用于 keep-alive 连接</span>
<span class="token key attr-name">  send_lowat</span> <span class="token value attr-value">12000; # 如果非零，Nginx 将会在客户端套接字尝试减少发送操作</span>
<span class="token key attr-name">  keepalive_timeout</span> <span class="token value attr-value">75 20; #指定 keep-alive 连接持续多久。第二个参数用于在响应头中这只”Keep-Alive”头</span>
<span class="token comment">  #lingering_time 30; #在使用 lingering_close 指令的连接中，使用该指令指定客户端连接为了处理更多的数据需要保持打开连接的时间</span>
<span class="token comment">  #lingering_timeout 10; #结合 lingering_close，该指令显示 Nginx 在关闭客户端连接之前，为获得更多数据会等待多久</span>
<span class="token comment">  #reset_timedout_connection on; #使用这个指令之后，超时的连接会被立即关闭，释放相关的内存。默认的状态是处于 FIN_WAIT1，这种状态将会一直保持连接</span>

<span class="token key attr-name">server</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">  listen</span> <span class="token value attr-value">one.example.com; # 监听域名</span>
<span class="token key attr-name">  server_name</span> <span class="token value attr-value">one.example.com www.one.example.com; # 主机域名</span>
<span class="token key attr-name">  access_log</span> <span class="token value attr-value">/var/log/nginx.access_log main; #记录日志</span>

<span class="token key attr-name">  location</span> <span class="token value attr-value">/ {</span>
<span class="token key attr-name">    proxy_pass</span> <span class="token value attr-value">http://127.0.0.1/; # 设置代理地址9 &gt; Nginx 配置文件</span>
<span class="token key attr-name">    proxy_redirect</span> <span class="token value attr-value">off; # 设置跟随转发</span>
<span class="token key attr-name">    proxy_set_header</span> <span class="token value attr-value">Host $host; # 设置 proxy 头</span>
<span class="token key attr-name">    proxy_set_header</span> <span class="token value attr-value">X-Real-IP $remote_addr; # 设置真实 IP</span>
<span class="token comment">    #proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for; # 设置转发头</span>

<span class="token key attr-name">    client_max_body_size</span> <span class="token value attr-value">10m; # 客户端请求最大值</span>
<span class="token key attr-name">    client_body_buffer_size</span> <span class="token value attr-value">128k; # 客户端请求 Buffer 最大值</span>
<span class="token key attr-name">    client_body_temp_path</span> <span class="token value attr-value">/var/nginx/client_body_temp; # 客户端请求临时路径</span>
<span class="token key attr-name">    proxy_connect_timeout</span> <span class="token value attr-value">70; # 客户端链接超时</span>
<span class="token key attr-name">    proxy_send_timeout</span> <span class="token value attr-value">90; # 客户端发送超时</span>
<span class="token key attr-name">    proxy_read_timeout</span> <span class="token value attr-value">90; # 客户端接收超时</span>
<span class="token key attr-name">    proxy_send_lowat</span> <span class="token value attr-value">12000; # 客户端链接超时</span>
<span class="token key attr-name">    proxy_buffer_size</span> <span class="token value attr-value">4k; # 代理 Buffer 大小</span>
<span class="token key attr-name">    proxy_buffers</span> <span class="token value attr-value">4 32k; # 代理大量 buffer 配置</span>
<span class="token key attr-name">    proxy_busy_buffers_size</span> <span class="token value attr-value">64k; # 代理较忙碌情况下 Buffer 配置</span>
<span class="token key attr-name">    proxy_temp_file_write_size</span> <span class="token value attr-value">64k; # 代理写文件缓存配置</span>
<span class="token key attr-name">    proxy_temp_path</span> <span class="token value attr-value">/var/nginx/proxy_temp; # 代理缓存路径</span>
<span class="token key attr-name">    charset</span> <span class="token value attr-value">utf-8; # charset 设置</span>

  }

<span class="token key attr-name">  error_page</span> <span class="token value attr-value">404 /404.html; # 配置 404 页面</span>

<span class="token key attr-name">  location</span> <span class="token punctuation">=</span> <span class="token value attr-value">/404.html { # 设置 404 页面的规则</span>
<span class="token key attr-name">    root</span> <span class="token value attr-value">/spool/www; # 设置 404 页面使用 /spool/www 目录</span>
  }

<span class="token key attr-name">  location</span> <span class="token value attr-value">/old_stuff/ { # 设置 /old_staff/规则</span>
<span class="token key attr-name">    rewrite</span> <span class="token value attr-value">^/old_stuff/(.*)$ /new_stuff/$1 permanent; # 301 跳转到新的规则</span>
  }

<span class="token key attr-name">  location</span> <span class="token value attr-value">/download/ { # 设置 /download 规则</span>
<span class="token key attr-name">    valid_referers</span> <span class="token value attr-value">none blocked server_names *.example.com;</span>
<span class="token key attr-name">    if</span> <span class="token value attr-value">($invalid_referer) { #屏蔽不是来自 *.example.com 的请求</span>
<span class="token comment">      #rewrite ^/ http://www.example.com/;</span>
<span class="token key attr-name">      return</span> <span class="token value attr-value">403;</span>
    }

<span class="token comment">    #rewrite_log on;</span>
<span class="token comment">    # rewrite /download/*/mp3/*.any_ext to /download/*/mp3/*.mp3</span>
<span class="token key attr-name">    rewrite</span> <span class="token value attr-value">^/(download/.*)/mp3/(.*)\\..*$   /$1/mp3/$2.mp3 break;</span>
  
<span class="token key attr-name">    root</span> <span class="token value attr-value">/spool/www;</span>
<span class="token comment">    #autoindex on; # 是否开启自动 Index</span>
<span class="token key attr-name">    access_log</span> <span class="token value attr-value">/var/log/nginx-download.access_log download;</span>
  }

<span class="token key attr-name">  location</span> <span class="token value attr-value">~* \\.(jpg|jpeg|gif)$ {</span>
<span class="token key attr-name">    root</span> <span class="token value attr-value">/spool/www;</span>
<span class="token key attr-name">    access_log</span> <span class="token value attr-value">off;</span>
<span class="token key attr-name">    expires</span> <span class="token value attr-value">30d;</span>
  }
 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nginx-命令操作" tabindex="-1"><a class="header-anchor" href="#nginx-命令操作"><span><strong>Nginx 命令操作</strong></span></a></h2><p>Nginx 的常用命令行操作如下：</p><p>nginx -t ：测试 Nginx 配置文件是否符合要求；</p><p>nginx -s reload ：重新加载 Nginx 配置文件；</p><p>nginx -V ：查看 Nginx 版本信息、编译参数等。</p><h2 id="常用-nginx-的-snippet" tabindex="-1"><a class="header-anchor" href="#常用-nginx-的-snippet"><span><strong>常用 Nginx 的 snippet</strong></span></a></h2><h4 id="从-域跳转到-www-域-加上-www" tabindex="-1"><a class="header-anchor" href="#从-域跳转到-www-域-加上-www"><span>从 @ 域跳转到 www 域，加上 www</span></a></h4><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">server</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">  listen</span> <span class="token value attr-value">80;</span>
<span class="token key attr-name">  server_name</span> <span class="token value attr-value">example.org;</span>
<span class="token key attr-name">  return</span> <span class="token value attr-value">301 $scheme://www.example.org$request_uri;</span>
}
  
<span class="token key attr-name">server</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">  listen</span> <span class="token value attr-value">80;</span>
<span class="token key attr-name">  server_name</span> <span class="token value attr-value">www.example.org;</span>
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="从-www-域跳转至-域-去除-www" tabindex="-1"><a class="header-anchor" href="#从-www-域跳转至-域-去除-www"><span>从 www 域跳转至 @域，去除 www</span></a></h4><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">server</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">  listen</span> <span class="token value attr-value">80;</span>
<span class="token key attr-name">  server_name</span> <span class="token value attr-value">www.domain.com;</span>
<span class="token key attr-name">  return</span> <span class="token value attr-value">301 $scheme://domain.com$request_uri;</span>
}

<span class="token key attr-name">server</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">  listen</span> <span class="token value attr-value">80;</span>
<span class="token key attr-name">  server_name</span> <span class="token value attr-value">domain.com;</span>
<span class="token comment">  # nginx config for virtualhost goes here</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="整站-301-跳转" tabindex="-1"><a class="header-anchor" href="#整站-301-跳转"><span>整站 301 跳转</span></a></h4><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">server</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">  server_name</span> <span class="token value attr-value">old-site.com</span>
<span class="token key attr-name">  return</span> <span class="token value attr-value">301 $scheme://new-site.com$request_uri;</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="设置-edge-使用最新的-ie-内核渲染" tabindex="-1"><a class="header-anchor" href="#设置-edge-使用最新的-ie-内核渲染"><span>设置 Edge 使用最新的 IE 内核渲染</span></a></h4><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">add_header</span> <span class="token value attr-value">&quot;X-UA-Compatible&quot; &quot;ie=edge&quot;;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="设置内容过期时间" tabindex="-1"><a class="header-anchor" href="#设置内容过期时间"><span>设置内容过期时间</span></a></h4><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">add_header</span> <span class="token value attr-value">Cache-Control &quot;max-age=31536000, immutable&quot;;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="设置强制-https" tabindex="-1"><a class="header-anchor" href="#设置强制-https"><span>设置强制 HTTPS</span></a></h4><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">add_header</span> <span class="token value attr-value">Strict-Transport-Security &quot;max-age=31536000; includeSubDomains&quot; always;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="设置代理头" tabindex="-1"><a class="header-anchor" href="#设置代理头"><span>设置代理头</span></a></h4><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">proxy_set_header</span> <span class="token value attr-value">Host $http_host;</span>
<span class="token key attr-name">proxy_set_header</span> <span class="token value attr-value">X-Real-IP $remote_addr;</span>
<span class="token key attr-name">proxy_set_header</span> <span class="token value attr-value">X-Forwarded-For $proxy_add_x_forwarded_for;</span>
<span class="token key attr-name">proxy_set_header</span> <span class="token value attr-value">X-Forwarded-Proto $scheme;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="开启-gzip-压缩" tabindex="-1"><a class="header-anchor" href="#开启-gzip-压缩"><span>开启 Gzip 压缩</span></a></h4><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">gzip</span> <span class="token value attr-value">on;</span>
<span class="token key attr-name">gzip_buffers</span> <span class="token value attr-value">16 8k;</span>
<span class="token key attr-name">gzip_comp_level</span> <span class="token value attr-value">6;</span>
<span class="token key attr-name">gzip_http_version</span> <span class="token value attr-value">1.1;</span>
<span class="token key attr-name">gzip_min_length</span> <span class="token value attr-value">256;</span>
<span class="token key attr-name">gzip_proxied</span> <span class="token value attr-value">any;</span>
<span class="token key attr-name">gzip_vary</span> <span class="token value attr-value">on;</span>
<span class="token key attr-name">gzip_types</span> <span class="token value attr-value">text/xml application/xml application/atom+xml application/rss+xml application/xhtml+xml image/svg+xml text/javascript application/javascript application/x-javascript text/x-json application/json application/x-web-app-manifest+json text/css text/plain text/x-component font/opentype application/x-font-ttf application/vnd.ms-fontobject image/x-icon;</span>
<span class="token key attr-name">gzip_disable</span> <span class="token value attr-value">&quot;msie6&quot;;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="开启-nginx-文件缓存" tabindex="-1"><a class="header-anchor" href="#开启-nginx-文件缓存"><span>开启 Nginx 文件缓存</span></a></h4><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">open_file_cache</span> <span class="token value attr-value">max=1000 inactive=20s;</span>
<span class="token key attr-name">open_file_cache_valid</span> <span class="token value attr-value">30s;</span>
<span class="token key attr-name">open_file_cache_min_uses</span> <span class="token value attr-value">2;</span>
<span class="token key attr-name">open_file_cache_errors</span> <span class="token value attr-value">on;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="开启-nginx-ssl-缓存" tabindex="-1"><a class="header-anchor" href="#开启-nginx-ssl-缓存"><span>开启 Nginx SSL 缓存</span></a></h4><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">ssl_session_cache</span> <span class="token value attr-value">shared:SSL:10m;</span>
<span class="token key attr-name">ssl_session_timeout</span> <span class="token value attr-value">10m;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="移除结尾多余的" tabindex="-1"><a class="header-anchor" href="#移除结尾多余的"><span>移除结尾多余的 /</span></a></h4><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">if</span> <span class="token value attr-value">($request_uri ~ &quot;^[^?]*?//&quot;) {</span>
<span class="token key attr-name">  return</span> <span class="token value attr-value">301 $scheme://$host$uri$is_args$args;</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="为不含-结尾的-url-加上" tabindex="-1"><a class="header-anchor" href="#为不含-结尾的-url-加上"><span>为不含 / 结尾的 URL 加上 /</span></a></h4><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">if</span> <span class="token value attr-value">($uri !~ &quot;\\.[a-z0-9]{2,4}$&quot;) {</span>
<span class="token key attr-name">  rewrite</span> <span class="token value attr-value">&quot;[^/]$&quot; $scheme://$host$uri/ permanent;</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="开启-nginx-监控" tabindex="-1"><a class="header-anchor" href="#开启-nginx-监控"><span>开启 Nginx 监控</span></a></h4><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">location</span> <span class="token value attr-value">/status {</span>
<span class="token key attr-name">  stub_status</span> <span class="token value attr-value">on;</span>
<span class="token key attr-name">  access_log</span> <span class="token value attr-value">off;</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="屏蔽特定-ip" tabindex="-1"><a class="header-anchor" href="#屏蔽特定-ip"><span>屏蔽特定 IP</span></a></h4><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">location</span> <span class="token value attr-value">/ </span>
<span class="token comment">  # block one workstation</span>
<span class="token key attr-name">  deny</span> <span class="token value attr-value">192.168.1.1;</span>
<span class="token comment">  # allow anyone in 192.168.1.0/24</span>
<span class="token key attr-name">  allow</span> <span class="token value attr-value">192.168.1.0/24;</span>
<span class="token comment">  # drop rest of the world</span>
<span class="token key attr-name">  deny</span> <span class="token value attr-value">all;</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="隐藏除了-well-known-以外的所有隐藏文件" tabindex="-1"><a class="header-anchor" href="#隐藏除了-well-known-以外的所有隐藏文件"><span>隐藏除了 .well-known 以外的所有隐藏文件</span></a></h4><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">location</span> <span class="token value attr-value">~ /\\.(?!well-known).* {</span>
<span class="token key attr-name">  access_log</span> <span class="token value attr-value">off;</span>
<span class="token key attr-name">  log_not_found</span> <span class="token value attr-value">off;</span>
<span class="token key attr-name">  return</span> <span class="token value attr-value">404;</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="隐藏-git" tabindex="-1"><a class="header-anchor" href="#隐藏-git"><span>隐藏 .git</span></a></h4><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">location</span> <span class="token value attr-value">~ /\\.git {</span>
<span class="token key attr-name">  access_log</span> <span class="token value attr-value">off;</span>
<span class="token key attr-name">  log_not_found</span> <span class="token value attr-value">off;</span>
<span class="token key attr-name">  return</span> <span class="token value attr-value">404;</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="隐藏-htaccess" tabindex="-1"><a class="header-anchor" href="#隐藏-htaccess"><span>隐藏 .htaccess</span></a></h4><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">location</span> <span class="token value attr-value">~ /\\.ht {</span>
<span class="token key attr-name">  access_log</span> <span class="token value attr-value">off;</span>

<span class="token key attr-name">  log_not_found</span> <span class="token value attr-value">off;</span>
<span class="token key attr-name">  return</span> <span class="token value attr-value">404;</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,51);function v(u,m){const n=a("VPBanner"),s=a("Share");return l(),i("div",null,[e(n,r(p({title:"生产环境可套用的Nginx配置手册",content:"生产环境可套用的Nginx配置手册",logo:null,color:"var(--banner-text)",background:"rgba(217, 244, 208, 0.5)",actions:[{text:"生产环境可套用的Nginx配置手册",link:"/linux/生产环境可套用的Nginx配置手册"}]})),null,16),d,e(s,{colorful:"",service:"email,qq,qzone,qrcode,weibo,telegram,twitter"})])}const g=t(c,[["render",v],["__file","生产环境可套用的Nginx配置手册.html.vue"]]),h=JSON.parse('{"path":"/linux/%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E5%8F%AF%E5%A5%97%E7%94%A8%E7%9A%84Nginx%E9%85%8D%E7%BD%AE%E6%89%8B%E5%86%8C.html","title":"生产环境可套用的Nginx配置手册","lang":"zh-CN","frontmatter":{"title":"生产环境可套用的Nginx配置手册","excerpt":"生产环境可套用的Nginx配置手册","description":"Linux分类","date":"2024-05-08T00:00:00.000Z","category":"Linux","tag":"Linux","author":"xlc520","article":true,"timeline":true,"icon":"linux","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/linux/%E7%94%9F%E4%BA%A7%E7%8E%AF%E5%A2%83%E5%8F%AF%E5%A5%97%E7%94%A8%E7%9A%84Nginx%E9%85%8D%E7%BD%AE%E6%89%8B%E5%86%8C.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"生产环境可套用的Nginx配置手册"}],["meta",{"property":"og:description","content":"Linux分类"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-04T13:58:25.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2024-05-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-04T13:58:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"生产环境可套用的Nginx配置手册\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-08T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-04T13:58:25.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"Nginx 安装","slug":"nginx-安装","link":"#nginx-安装","children":[]},{"level":2,"title":"Nginx 配置文件","slug":"nginx-配置文件","link":"#nginx-配置文件","children":[]},{"level":2,"title":"Nginx 命令操作","slug":"nginx-命令操作","link":"#nginx-命令操作","children":[]},{"level":2,"title":"常用 Nginx 的 snippet","slug":"常用-nginx-的-snippet","link":"#常用-nginx-的-snippet","children":[]}],"git":{"createdTime":1715170920000,"updatedTime":1722779905000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":5.05,"words":1515},"filePathRelative":"linux/生产环境可套用的Nginx配置手册.md","localizedDate":"2024年5月8日"}');export{g as comp,h as data};
