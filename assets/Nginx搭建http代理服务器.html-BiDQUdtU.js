import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as p,c as r,d as n,e,b as s,a as t}from"./app-CHLzVell.js";const o={},c=n("h1",{id:"nginx-搭建-http-代理服务器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#nginx-搭建-http-代理服务器"},[n("span",null,"Nginx 搭建 http 代理服务器")])],-1),d={href:"https://blog.csdn.net/weixin_43834401/article/details/130670792",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>Nginx 服务器作为正向代理服务器和反向代理服务器，<code>但美中不足的是仅支持http协议，不支持https协议</code>。</p><p>http 和 https 的区别：</p><ul><li><strong>http 协议</strong>：协议以明文方式发送数据，不提供任何方式的数据加密。不适合传输一些敏感信息，例如密码。其使用的端口是<code>80</code>。</li><li><strong>https 协议</strong>：在 http 协议的基础上，加入了<code>SSL（Secure Sockets Layer）</code>，用于对数据进行加密。其使用的端口为<code>443</code>。</li></ul><h2 id="_1-nginx-正向代理-http" tabindex="-1"><a class="header-anchor" href="#_1-nginx-正向代理-http"><span><strong>1.Nginx 正向代理（http）</strong></span></a></h2><p>我们来回顾一下 Nginx 作为正向代理服务器支持 http 协议的配置。</p><p>代理服务器：192.168.110.101</p><p>代理服务器配置：</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">server</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">    listen</span> <span class="token value attr-value">8080;</span>
<span class="token key attr-name">    server_name</span> <span class="token value attr-value">localhost;</span>
<span class="token comment">    # 解析域名时需要配置</span>
<span class="token key attr-name">    resolver</span> <span class="token value attr-value">8.8.8.8;</span>
<span class="token key attr-name">    location</span> <span class="token value attr-value">/ {</span>
<span class="token key attr-name">        proxy_pass</span> <span class="token value attr-value">http://$host$request_uri;</span>
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端配置：</p><blockquote><p>我们使用 Windows 系统作为客户端环境。</p></blockquote><p>访问<code>http://nginx.org/en/index.html</code>，可以正常访问。</p><p>访问<code>https://www.baidu.com</code>，则无法正常访问了。</p><p>查看代理服务器的<code>error.log</code>，发现其报 400 错误码。</p><p>这是因为，Nginx 作为正向代理服务器时，默认仅支持 http 协议，是不支持 https 协议的。</p><h2 id="_2-nginx-正向代理-https" tabindex="-1"><a class="header-anchor" href="#_2-nginx-正向代理-https"><span><strong>2.Nginx 正向代理（https）</strong></span></a></h2><p><strong>那么怎么让 Nginx 作为正向代理服务器的时候支持 https 协议呢？</strong></p><p>我们可以使用第三方模块<code>ngx_http_proxy_connect_module</code>。</p>`,17),u={href:"https://github.com/chobits/ngx_http_proxy_connect_module",target:"_blank",rel:"noopener noreferrer"},m=t(`<p>我们知道如果要为 Nginx 添加第三方模块，需要在配置<code>configure</code>时添加<code>--add-module</code>。从 Nginx1.9.11 版本开始，支持<code>load_module</code>指令来动态加载模块。</p><p>我们这里使用<code>--add-module</code>进行模块的添加。</p><p><strong>1）查看 Nginx 版本以及 configure 信息</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-V</span>

nginx version: nginx/1.22.1
built by gcc <span class="token number">9.4</span>.0 <span class="token punctuation">(</span>Ubuntu <span class="token number">9.4</span>.0-1ubuntu1~20.04.1<span class="token punctuation">)</span> 
configure arguments: --sbin-path<span class="token operator">=</span>/usr/local/nginx/nginx --conf-path<span class="token operator">=</span>/usr/local/nginx/nginx.conf --pid-path<span class="token operator">=</span>/usr/local/nginx/nginx.pid --with-http_gzip_static_module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2）下载模块</strong></p>`,5),k={href:"https://codeload.github.com/chobits/ngx_http_proxy_connect_module/zip/refs/heads/master",target:"_blank",rel:"noopener noreferrer"},_=t(`<p><strong>3）重新编译</strong></p><p>这里我们两种添加第三方模块的方式都尝试一下。</p><p>使用<code>--add-module</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/stone/nginx-1.22.1

<span class="token comment"># 1、添加patch</span>
patch <span class="token parameter variable">-p1</span> <span class="token operator">&lt;</span> /home/stone/nginx-1.22.1/module/ngx_http_proxy_connect_module/patch/proxy_connect_rewrite_102101.patch

<span class="token comment"># 2、configure</span>
./configure --sbin-path<span class="token operator">=</span>/usr/local/nginx/nginx --conf-path<span class="token operator">=</span>/usr/local/nginx/nginx.conf --pid-path<span class="token operator">=</span>/usr/local/nginx/nginx.pid --with-http_gzip_static_module --add-module<span class="token operator">=</span>/home/stone/nginx-1.22.1/module/ngx_http_proxy_connect_module

<span class="token comment"># 3、make</span>
<span class="token function">make</span>

<span class="token comment"># 4、备份旧的nginx可执行文件，复制编译之后的可执行文件</span>
<span class="token function">mv</span> /usr/local/nginx/nginx /usr/local/nginx/nginx.old
<span class="token function">cp</span> objs/nginx /usr/local/nginx/nginx

<span class="token comment"># 5、升级</span>
<span class="token function">make</span> upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code>load_module</code>，需要将<code>--add-module</code>替换为<code>--add-dynamic-module</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/stone/nginx-1.22.1

<span class="token comment"># 1、添加patch</span>
patch <span class="token parameter variable">-p1</span> <span class="token operator">&lt;</span> /home/stone/nginx-1.22.1/module/ngx_http_proxy_connect_module/patch/proxy_connect_rewrite_102101.patch

<span class="token comment"># 2、configure</span>
./configure --sbin-path<span class="token operator">=</span>/usr/local/nginx/nginx --conf-path<span class="token operator">=</span>/usr/local/nginx/nginx.conf --pid-path<span class="token operator">=</span>/usr/local/nginx/nginx.pid --with-http_gzip_static_module --add-dynamic-module<span class="token operator">=</span>/home/stone/nginx-1.22.1/module/ngx_http_proxy_connect_module

<span class="token comment"># 3、make</span>
<span class="token function">make</span>

<span class="token comment"># 4 创建module文件夹，并将编译生成的ngx_http_proxy_connect_module.so拷贝过去</span>
<span class="token function">mkdir</span> /usr/local/nginx/module
<span class="token function">cp</span> /home/stone/nginx-1.22.1/objs/ngx_http_proxy_connect_module.so /usr/local/nginx/module

<span class="token comment"># 5、备份旧的nginx可执行文件，复制编译之后的可执行文件</span>
<span class="token function">mv</span> /usr/local/nginx/nginx /usr/local/nginx/nginx.old
<span class="token function">cp</span> objs/nginx /usr/local/nginx/nginx

<span class="token comment"># 6、升级</span>
<span class="token function">make</span> upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4）修改配置文件</strong></p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment"># --add-dynamic-module动态添加第三方模块时使用</span>
<span class="token comment"># load_module module/ngx_http_proxy_connect_module.so;</span>

<span class="token key attr-name">http</span> <span class="token value attr-value">{</span>

<span class="token key attr-name"> server</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">        resolver</span> <span class="token value attr-value">114.114.114.114 8.8.8.8;</span>
<span class="token key attr-name">        resolver_timeout</span> <span class="token value attr-value">10s;</span>
<span class="token key attr-name">        listen</span> <span class="token value attr-value">82;</span>
<span class="token key attr-name">        proxy_connect;</span> <span class="token value attr-value">                         #启用 CONNECT HTTP方法</span>
<span class="token comment">        #proxy_connect_allow  443 80;  #指定代理CONNECT方法可以连接的端口号或范围的列表,all;#支持不同端口https</span>
<span class="token key attr-name">        proxy_connect_allow</span> <span class="token value attr-value">           all;  #支持不同端口https</span>
<span class="token key attr-name">        proxy_connect_connect_timeout</span> <span class="token value attr-value"> 20s;     #定义客户端与代理服务器建立连接的超时时间</span>
<span class="token key attr-name">        proxy_connect_read_timeout</span> <span class="token value attr-value">    20s;     #定义客户端从代理服务器读取响应的超时时间</span>
<span class="token key attr-name">        proxy_connect_send_timeout</span> <span class="token value attr-value">    20s;     #设置客户端将请求传输到代理服务器的超时时间</span>
<span class="token key attr-name">        proxy_connect_data_timeout</span> <span class="token value attr-value">    10s;</span>
<span class="token key attr-name">        location</span> <span class="token value attr-value">/ {</span>
<span class="token key attr-name">             proxy_pass</span> <span class="token value attr-value">$scheme://$http_host$request_uri;</span>
<span class="token key attr-name">             proxy_set_header</span> <span class="token value attr-value">HOST $http_host;</span>
<span class="token key attr-name">            proxy_buffers</span> <span class="token value attr-value">256 4k;</span>
<span class="token key attr-name">            proxy_max_temp_file_size</span> <span class="token value attr-value">0k; </span>
<span class="token key attr-name">            proxy_connect_timeout</span> <span class="token value attr-value">30;</span>
<span class="token key attr-name">            proxy_send_timeout</span> <span class="token value attr-value">60;</span>
<span class="token key attr-name">            proxy_read_timeout</span> <span class="token value attr-value">60;</span>
<span class="token key attr-name">            proxy_next_upstream</span> <span class="token value attr-value">error timeout invalid_header http_502;</span>
        }
   }
   
<span class="token key attr-name">    server</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">        listen</span> <span class="token value attr-value">8080;</span>
<span class="token key attr-name">        server_name</span> <span class="token value attr-value">localhost;</span>
<span class="token key attr-name">        resolver</span> <span class="token value attr-value">114.114.114.114 ipv6=off;</span>
        proxy_connect;
<span class="token key attr-name">        proxy_connect_allow</span> <span class="token value attr-value">443 80;</span>
<span class="token key attr-name">        proxy_connect_connect_timeout</span> <span class="token value attr-value"> 20s;     #定义客户端与代理服务器建立连接的超时时间</span>
<span class="token key attr-name">        proxy_connect_read_timeout</span> <span class="token value attr-value">    20s;     #定义客户端从代理服务器读取响应的超时时间</span>
<span class="token key attr-name">        proxy_connect_send_timeout</span> <span class="token value attr-value">    20s;     #设置客户端将请求传输到代理服务器的超时时间</span>
<span class="token key attr-name">        proxy_connect_data_timeout</span> <span class="token value attr-value">    10s;</span>
<span class="token comment">        # 指定代理日志</span>
<span class="token key attr-name">        access_log</span> <span class="token value attr-value">logs/access_proxy.log main;</span>
<span class="token key attr-name">        location</span> <span class="token value attr-value">/ {</span>
<span class="token key attr-name">            proxy_pass</span> <span class="token value attr-value">$scheme://$host$request_uri;</span>
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时访问<code>https://www.baidu.com</code>，在<code>access_proxy.log</code>产生如下日志，说明 https 代理成功。</p><p>需要出网服务器配置 打开/etc/profile 文件，在最下面添加如下配置即可</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>#http代理，ip是nginx的ip，端口是步骤4配置的监听端口
export http_proxy=&quot;http://ip:82&quot;
#https代理
export https_proxy=&quot;http://ip:82&quot;
#不需要代理的ip,访问这些ip，不会走代理
export no_proxy=&quot;127.0.0.1, localhost&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>curl http://www.baidu.com
curl https://www.baidu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>访问成功就恭喜你了</p><h2 id="_3-nginx-反向代理-http" tabindex="-1"><a class="header-anchor" href="#_3-nginx-反向代理-http"><span><strong>3.Nginx 反向代理（http）</strong></span></a></h2><p>同样的，Nginx 作为反向代理服务器，默认也是只支持 http 协议，我们来回顾一下 Nginx 作为反向代理服务器支持 http 协议的配置。</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">server</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">    listen</span> <span class="token value attr-value">      80;</span>
<span class="token key attr-name">    server_name</span> <span class="token value attr-value"> localhost;</span>
<span class="token key attr-name">    location</span> <span class="token value attr-value">/proxy {</span>
<span class="token key attr-name">        proxy_set_header</span> <span class="token value attr-value">X-Real-IP $remote_addr;</span>
<span class="token key attr-name">        proxy_pass</span> <span class="token value attr-value">http://192.168.110.98;</span>
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，我们配置的<code>server_name</code>为<code>localhost</code>，但在实际项目中，我们是使用域名绑定 Nginx 服务器的 IP，并且使用 https 协议进行访问，配置的<code>server_name</code>就是指定的域名，例如<code>www.aaa.com</code>。</p><p>Nginx 为我们提供了<code>ngx_http_ssl_module</code>来支持 https 协议，并且在提供的默认配置文件里已经给出了示例。</p><h2 id="_4-nginx-反向代理-https" tabindex="-1"><a class="header-anchor" href="#_4-nginx-反向代理-https"><span><strong>4.Nginx 反向代理（https）</strong></span></a></h2><p>添加<code>ngx_http_ssl_module</code>的步骤和添加<code>ngx_http_proxy_connect_module</code>的步骤一致，只是这是 Nginx 提供的模块，因此在 configure 时使用<code>--with-http_ssl_module</code> 即可。</p><p>我们再来看看采用 https 协议时的配置：</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">server</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">    listen</span> <span class="token value attr-value">      443 ssl;</span>
<span class="token key attr-name">    server_name</span> <span class="token value attr-value"> www.aaa.com;</span>
    
<span class="token comment">    # 申请ssl证书后，会提供cert.pem和cert.key</span>
<span class="token key attr-name">    ssl_certificate</span> <span class="token value attr-value">     cert.pem;</span>
<span class="token key attr-name">    ssl_certificate_key</span> <span class="token value attr-value"> cert.key;</span>

<span class="token key attr-name">    ssl_session_cache</span> <span class="token value attr-value">   shared:SSL:1m;</span>
<span class="token key attr-name">    ssl_session_timeout</span> <span class="token value attr-value"> 5m;</span>

<span class="token key attr-name">    ssl_ciphers</span> <span class="token value attr-value"> HIGH:!aNULL:!MD5;</span>
<span class="token key attr-name">    ssl_prefer_server_ciphers</span> <span class="token value attr-value"> on;</span>

<span class="token key attr-name">    location</span> <span class="token value attr-value">/proxy {</span>
<span class="token key attr-name">        proxy_pass</span> <span class="token value attr-value">http://192.168.110.98;</span>
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们需要去为指定的域名申请 ssl 证书，然后将证书中的<code>cert.pem</code>和<code>cert.key</code> 放到指定文件，并在配置文件中指定。例如我们这里指定的<code>server_name</code>为<code>www.aaa.com</code>，所以我们就需要为<code>www.aaa.com</code>申请 ssl 证书。</p><p>后续我们访问<code>https://www.aaa.com/proxy</code>就可以被代理到指定服务端了。</p><h2 id="其他-第二种" tabindex="-1"><a class="header-anchor" href="#其他-第二种"><span>其他（第二种）</span></a></h2><p>如果不想写到 ngnix.conf 中，那么可以在相同的目录下建立另外一个文件夹存放单独的文件，比如新建一个 proxy 的子目录，然后再在里面新建文件 prox.conf ，然后添加如下内容：</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">server</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">    resolver</span> <span class="token value attr-value">       8.8.8.8;</span>
<span class="token key attr-name">    access_log</span> <span class="token value attr-value">     off;</span>
<span class="token key attr-name">    listen</span> <span class="token value attr-value"> 8088;</span>
<span class="token key attr-name">    location</span> <span class="token value attr-value">/ {</span>
<span class="token key attr-name">        proxy_pass</span> <span class="token value attr-value">     $scheme://$host$request_uri;</span>
<span class="token key attr-name">        proxy_set_header</span> <span class="token value attr-value">Host $http_host;</span>
<span class="token key attr-name">        proxy_buffers</span> <span class="token value attr-value">  256 4k;</span>
<span class="token key attr-name">        proxy_max_temp_file_size</span> <span class="token value attr-value">       0k;</span>
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着在 ngnix.conf 的 http 块中添加：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>include proxy/*.conf;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将上面文件的配置包含进来。</p><p>上面使用谷歌 DNS 8.8.8.8，你可能在本地也需要使用这个 DNS，否则可能会出现 502 的错误。不然可以配置 resolver 地址为你 ISP 分配的 DNS 地址。</p><p>配置完后，重启一下 nginx 或 reload 一下即可。</p><p>注意：由于 HTTP 代理和 VPN 不一样，后者加密，而前者不加密，所以 HTTP 代理是不能用来 FQ 的。</p><p>下面是类似配置内容：</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">server</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">    resolver</span> <span class="token value attr-value">202.106.0.20;</span>
<span class="token key attr-name">    resolver_timeout</span> <span class="token value attr-value">5s;</span>
<span class="token key attr-name">    listen</span> <span class="token value attr-value">81;</span>
<span class="token key attr-name">    location</span> <span class="token value attr-value">/ {</span>
<span class="token key attr-name">        proxy_pass</span> <span class="token value attr-value">$scheme://$host$request_uri;</span>
<span class="token key attr-name">        proxy_set_header</span> <span class="token value attr-value">Host $http_host;</span>
<span class="token key attr-name">        proxy_buffers</span> <span class="token value attr-value">256 4k;</span>
<span class="token key attr-name">        proxy_max_temp_file_size</span> <span class="token value attr-value">0;</span>
<span class="token key attr-name">        proxy_connect_timeout</span> <span class="token value attr-value">30;</span>
<span class="token key attr-name">        proxy_cache_valid</span> <span class="token value attr-value">200 302 10m;</span>
<span class="token key attr-name">        proxy_cache_valid</span> <span class="token value attr-value">301 1h;</span>
<span class="token key attr-name">        proxy_cache_valid</span> <span class="token value attr-value">any 1m;</span>
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="example2" tabindex="-1"><a class="header-anchor" href="#example2"><span>Example2</span></a></h3><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">server</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">    listen</span> <span class="token value attr-value">8899;</span>
<span class="token key attr-name">    charset</span> <span class="token value attr-value">utf-8;</span>
<span class="token key attr-name">    resolver</span> <span class="token value attr-value">114.114.114.114;</span>
<span class="token key attr-name">    client_max_body_size</span> <span class="token value attr-value">    50m;</span>
<span class="token key attr-name">    access_log</span> <span class="token value attr-value">logs/proxy.log;</span>

<span class="token comment">    #引用ngx_proxy模块</span>
    proxy_connect;
<span class="token key attr-name">    proxy_connect_allow</span> <span class="token value attr-value">           443 80;</span>
<span class="token key attr-name">    proxy_connect_connect_timeout</span> <span class="token value attr-value"> 10s;</span>
<span class="token key attr-name">    proxy_connect_read_timeout</span> <span class="token value attr-value">    10s;</span>
<span class="token key attr-name">    proxy_connect_send_timeout</span> <span class="token value attr-value">    10s;</span>

<span class="token key attr-name">    location</span> <span class="token value attr-value">/ {</span>
<span class="token key attr-name">        proxy_pass</span> <span class="token value attr-value">$scheme://$http_host$request_uri;</span>
<span class="token key attr-name">        proxy_connect_timeout</span> <span class="token value attr-value">10;</span>
<span class="token key attr-name">         proxy_send_timeout</span> <span class="token value attr-value">10;</span>
<span class="token key attr-name">         proxy_read_timeout</span> <span class="token value attr-value">10;</span>
<span class="token key attr-name">         proxy_redirect</span> <span class="token value attr-value">    off;</span>
<span class="token key attr-name">         proxy_set_header</span> <span class="token value attr-value">Host $http_host;</span>
<span class="token key attr-name">         proxy_buffers</span> <span class="token value attr-value">256 4k;</span>
<span class="token key attr-name">         proxy_next_upstream</span> <span class="token value attr-value">error timeout invalid_header http_502;</span>
<span class="token key attr-name">         proxy_max_temp_file_size</span> <span class="token value attr-value">0k;</span>
<span class="token key attr-name">        proxy_ssl_server_name</span> <span class="token value attr-value">on;</span>
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数解析： 1，配置 DNS 解析 IP 地址，比如 北京 dns，以及超时时间（5 秒）。 resolver 202.106.0.20; resolver_timeout 5s;</p><p>注意项</p><ol><li>不能有 hostname</li><li>必须有 resolver, 即 dns，即上面的 x.x.x.x，换成你们的 DNS 服务器 ip 即可</li></ol><p>2，配置正向代理参数，均是由 Nginx 变量组成。其中 proxy_set_header 部分的配置，是为了解决如果 URL 中带 &quot;.&quot;（点）后 Nginx 503 错误。 proxy_pass $scheme://$host$request_uri; $http_host 和$request_uri是nginx系统变量，不要想着替换他们，保持原样就OK。 proxy_set_header Host $http_host;</p><p>3，配置缓存大小，关闭磁盘缓存读写减少 I/O，以及代理连接超时时间。 proxy_buffers 256 4k; proxy_max_temp_file_size 0; proxy_connect_timeout 30;</p><p>4，配置代理服务器 Http 状态缓存时间。 proxy_cache_valid 200 302 10m; proxy_cache_valid 301 1h; proxy_cache_valid any 1m;</p><p>三、不支持代理 Https 网站 因为 Nginx 不支持 CONNECT，所以无法正向代理 Https 网站（网上银行，Gmail）。</p>`,45);function h(x,b){const a=i("ExternalLinkIcon");return p(),r("div",null,[c,n("p",null,[e("参考 ： "),n("a",d,[e("https://blog.csdn.net/weixin_43834401/article/details/130670792"),s(a)])]),v,n("p",null,[e("下载地址："),n("a",u,[e("https://github.com/chobits/ngx_http_proxy_connect_module"),s(a)])]),m,n("p",null,[e("下载地址："),n("a",k,[e("https://codeload.github.com/chobits/ngx_http_proxy_connect_module/zip/refs/heads/master"),s(a)])]),_])}const f=l(o,[["render",h],["__file","Nginx搭建http代理服务器.html.vue"]]),N=JSON.parse('{"path":"/linux/Nginx%E6%90%AD%E5%BB%BAhttp%E4%BB%A3%E7%90%86%E6%9C%8D%E5%8A%A1%E5%99%A8.html","title":"Nginx搭建http代理服务器","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"Nginx搭建http代理服务器","excerpt":null,"description":"Nginx 搭建 http 代理服务器 参考 ： https://blog.csdn.net/weixin_43834401/article/details/130670792 Nginx 服务器作为正向代理服务器和反向代理服务器，但美中不足的是仅支持http协议，不支持https协议。 http 和 https 的区别： http 协议：协议以明文方...","date":"2023-11-30T00:00:00.000Z","category":"Linux","tag":"Linux","article":true,"timeline":true,"icon":"linux","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/linux/Nginx%E6%90%AD%E5%BB%BAhttp%E4%BB%A3%E7%90%86%E6%9C%8D%E5%8A%A1%E5%99%A8.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"Nginx搭建http代理服务器"}],["meta",{"property":"og:description","content":"Nginx 搭建 http 代理服务器 参考 ： https://blog.csdn.net/weixin_43834401/article/details/130670792 Nginx 服务器作为正向代理服务器和反向代理服务器，但美中不足的是仅支持http协议，不支持https协议。 http 和 https 的区别： http 协议：协议以明文方..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2023-11-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Nginx搭建http代理服务器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-30T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"1.Nginx 正向代理（http）","slug":"_1-nginx-正向代理-http","link":"#_1-nginx-正向代理-http","children":[]},{"level":2,"title":"2.Nginx 正向代理（https）","slug":"_2-nginx-正向代理-https","link":"#_2-nginx-正向代理-https","children":[]},{"level":2,"title":"3.Nginx 反向代理（http）","slug":"_3-nginx-反向代理-http","link":"#_3-nginx-反向代理-http","children":[]},{"level":2,"title":"4.Nginx 反向代理（https）","slug":"_4-nginx-反向代理-https","link":"#_4-nginx-反向代理-https","children":[]},{"level":2,"title":"其他（第二种）","slug":"其他-第二种","link":"#其他-第二种","children":[{"level":3,"title":"Example2","slug":"example2","link":"#example2","children":[]}]}],"git":{"createdTime":1701949796000,"updatedTime":1714224756000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":3}]},"readingTime":{"minutes":6.61,"words":1982},"filePathRelative":"linux/Nginx搭建http代理服务器.md","localizedDate":"2023年11月30日","autoDesc":true}');export{f as comp,N as data};
