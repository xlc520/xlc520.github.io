import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,a as e}from"./app-AGOZjyqV.js";const t={},l=e(`<h1 id="nginx搭建http代理服务器" tabindex="-1"><a class="header-anchor" href="#nginx搭建http代理服务器"><span>Nginx搭建http代理服务器</span></a></h1><p>参考 ： https://blog.csdn.net/weixin_43834401/article/details/130670792</p><p>Nginx服务器作为正向代理服务器和反向代理服务器，<code>但美中不足的是仅支持http协议，不支持https协议</code>。</p><p>http和https的区别：</p><ul><li><strong>http协议</strong>：协议以明文方式发送数据，不提供任何方式的数据加密。不适合传输一些敏感信息，例如密码。其使用的端口是<code>80</code>。</li><li><strong>https协议</strong>：在http协议的基础上，加入了<code>SSL（Secure Sockets Layer）</code>，用于对数据进行加密。其使用的端口为<code>443</code>。</li></ul><h2 id="_1-nginx正向代理-http" tabindex="-1"><a class="header-anchor" href="#_1-nginx正向代理-http"><span><strong>1.Nginx正向代理（http）</strong></span></a></h2><p>我们来回顾一下Nginx作为正向代理服务器支持http协议的配置。</p><p>代理服务器：192.168.110.101</p><p>代理服务器配置：</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">server</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">    listen</span> <span class="token value attr-value">8080;</span>
<span class="token key attr-name">    server_name</span> <span class="token value attr-value">localhost;</span>
<span class="token comment">    # 解析域名时需要配置</span>
<span class="token key attr-name">    resolver</span> <span class="token value attr-value">8.8.8.8;</span>
<span class="token key attr-name">    location</span> <span class="token value attr-value">/ {</span>
<span class="token key attr-name">        proxy_pass</span> <span class="token value attr-value">http://$host$request_uri;</span>
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>客户端配置：</p><blockquote><p>我们使用Windows系统作为客户端环境。</p></blockquote><p>访问<code>http://nginx.org/en/index.html</code>，可以正常访问。</p><p>访问<code>https://www.baidu.com</code>，则无法正常访问了。</p><p>查看代理服务器的<code>error.log</code>，发现其报400错误码。</p><p>这是因为，Nginx作为正向代理服务器时，默认仅支持http协议，是不支持https协议的。</p><h2 id="_2-nginx正向代理-https" tabindex="-1"><a class="header-anchor" href="#_2-nginx正向代理-https"><span><strong>2.Nginx正向代理（https）</strong></span></a></h2><p><strong>那么怎么让Nginx作为正向代理服务器的时候支持https协议呢？</strong></p><p>我们可以使用第三方模块<code>ngx_http_proxy_connect_module</code>。</p><p>下载地址：https://github.com/chobits/ngx_http_proxy_connect_module</p><p>我们知道如果要为Nginx添加第三方模块，需要在配置<code>configure</code>时添加<code>--add-module</code>。从Nginx1.9.11版本开始，支持<code>load_module</code>指令来动态加载模块。</p><p>我们这里使用<code>--add-module</code>进行模块的添加。</p><p><strong>1）查看Nginx版本以及configure信息</strong></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>nginx <span class="token parameter variable">-V</span>

nginx version: nginx/1.22.1
built by gcc <span class="token number">9.4</span>.0 <span class="token punctuation">(</span>Ubuntu <span class="token number">9.4</span>.0-1ubuntu1~20.04.1<span class="token punctuation">)</span> 
configure arguments: --sbin-path<span class="token operator">=</span>/usr/local/nginx/nginx --conf-path<span class="token operator">=</span>/usr/local/nginx/nginx.conf --pid-path<span class="token operator">=</span>/usr/local/nginx/nginx.pid --with-http_gzip_static_module
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2）下载模块</strong></p><p>下载地址：https://codeload.github.com/chobits/ngx_http_proxy_connect_module/zip/refs/heads/master</p><p><strong>3）重新编译</strong></p><p>这里我们两种添加第三方模块的方式都尝试一下。</p><p>使用<code>--add-module</code></p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /home/stone/nginx-1.22.1

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

<span class="token key attr-name">	server</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">        resolver</span> <span class="token value attr-value">114.114.114.114 8.8.8.8;</span>
<span class="token key attr-name">        resolver_timeout</span> <span class="token value attr-value">10s;</span>
<span class="token key attr-name">        listen</span> <span class="token value attr-value">82;</span>
<span class="token key attr-name">        proxy_connect;</span> <span class="token value attr-value">                         #启用 CONNECT HTTP方法</span>
<span class="token comment">        #proxy_connect_allow  443 80;  #指定代理CONNECT方法可以连接的端口号或范围的列表,all;#支持不同端口https</span>
<span class="token key attr-name">        proxy_connect_allow</span> <span class="token value attr-value">           all;		#支持不同端口https</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时访问<code>https://www.baidu.com</code>，在<code>access_proxy.log</code>产生如下日志，说明https代理成功。</p><p>需要出网服务器配置 打开/etc/profile文件，在最下面添加如下配置即可</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#http代理，ip是nginx的ip，端口是步骤4配置的监听端口
export http_proxy=&quot;http://ip:82&quot;
#https代理
export https_proxy=&quot;http://ip:82&quot;
#不需要代理的ip,访问这些ip，不会走代理
export no_proxy=&quot;127.0.0.1, localhost&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>curl http://www.baidu.com
curl https://www.baidu.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>访问成功就恭喜你了</p><h2 id="_3-nginx反向代理-http" tabindex="-1"><a class="header-anchor" href="#_3-nginx反向代理-http"><span><strong>3.Nginx反向代理（http）</strong></span></a></h2><p>同样的，Nginx作为反向代理服务器，默认也是只支持http协议，我们来回顾一下Nginx作为反向代理服务器支持http协议的配置。</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">server</span> <span class="token value attr-value">{</span>
<span class="token key attr-name">    listen</span> <span class="token value attr-value">      80;</span>
<span class="token key attr-name">    server_name</span> <span class="token value attr-value"> localhost;</span>
<span class="token key attr-name">    location</span> <span class="token value attr-value">/proxy {</span>
<span class="token key attr-name">        proxy_set_header</span> <span class="token value attr-value">X-Real-IP $remote_addr;</span>
<span class="token key attr-name">        proxy_pass</span> <span class="token value attr-value">http://192.168.110.98;</span>
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，我们配置的<code>server_name</code>为<code>localhost</code>，但在实际项目中，我们是使用域名绑定Nginx服务器的IP，并且使用https协议进行访问，配置的<code>server_name</code>就是指定的域名，例如<code>www.aaa.com</code>。</p><p>Nginx为我们提供了<code>ngx_http_ssl_module</code>来支持https协议，并且在提供的默认配置文件里已经给出了示例。</p><h2 id="_4-nginx反向代理-https" tabindex="-1"><a class="header-anchor" href="#_4-nginx反向代理-https"><span><strong>4.Nginx反向代理（https）</strong></span></a></h2><p>添加<code>ngx_http_ssl_module</code>的步骤和添加<code>ngx_http_proxy_connect_module</code>的步骤一致，只是这是Nginx提供的模块，因此在configure时使用<code>--with-http_ssl_module</code> 即可。</p><p>我们再来看看采用https协议时的配置：</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">server</span> <span class="token value attr-value">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们需要去为指定的域名申请ssl证书，然后将证书中的<code>cert.pem</code>和<code>cert.key</code>放到指定文件，并在配置文件中指定。例如我们这里指定的<code>server_name</code>为<code>www.aaa.com</code>，所以我们就需要为<code>www.aaa.com</code>申请ssl证书。</p><p>后续我们访问<code>https://www.aaa.com/proxy</code>就可以被代理到指定服务端了。</p><h2 id="其他-第二种" tabindex="-1"><a class="header-anchor" href="#其他-第二种"><span>其他（第二种）</span></a></h2><p>如果不想写到 ngnix.conf 中，那么可以在相同的目录下建立另外一个文件夹存放单独的文件，比如新建一个 proxy 的子目录，然后再在里面新建文件 prox.conf ，然后添加如下内容：</p><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">server</span> <span class="token value attr-value">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着在 ngnix.conf 的 http 块中添加：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>include proxy/*.conf;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数解析： 1，配置 DNS 解析 IP 地址，比如 北京dns，以及超时时间（5秒）。 resolver 202.106.0.20; resolver_timeout 5s;</p><p>注意项</p><ol><li>不能有hostname</li><li>必须有resolver, 即dns，即上面的x.x.x.x，换成你们的DNS服务器ip即可</li></ol><p>2，配置正向代理参数，均是由 Nginx 变量组成。其中 proxy_set_header 部分的配置，是为了解决如果 URL 中带 &quot;.&quot;（点）后 Nginx 503 错误。 proxy_pass $scheme://$host$request_uri; $http_host和$request_uri是nginx系统变量，不要想着替换他们，保持原样就OK。 proxy_set_header Host $http_host;</p><p>3，配置缓存大小，关闭磁盘缓存读写减少I/O，以及代理连接超时时间。 proxy_buffers 256 4k; proxy_max_temp_file_size 0; proxy_connect_timeout 30;</p><p>4，配置代理服务器 Http 状态缓存时间。 proxy_cache_valid 200 302 10m; proxy_cache_valid 301 1h; proxy_cache_valid any 1m;</p><p>三、不支持代理 Https 网站 因为 Nginx 不支持 CONNECT，所以无法正向代理 Https 网站（网上银行，Gmail）。</p>`,71),i=[l];function p(r,o){return a(),s("div",null,i)}const v=n(t,[["render",p],["__file","Nginx搭建http代理服务器.html.vue"]]);export{v as default};
