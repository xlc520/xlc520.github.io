import{_ as n,d as e}from"./app.a601cc48.js";const s={},a=e(`<h1 id="nginx\u4ECE\u5B89\u88C5\u5230\u9AD8\u53EF\u7528" tabindex="-1"><a class="header-anchor" href="#nginx\u4ECE\u5B89\u88C5\u5230\u9AD8\u53EF\u7528" aria-hidden="true">#</a> Nginx\u4ECE\u5B89\u88C5\u5230\u9AD8\u53EF\u7528</h1><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u539F\u6587\uFF1Ablog.csdn.net/qq_34886352/article/details/103581973
\u7B2C1-100\u671F\uFF1A100\u671FJava\u9879\u76EE\u6574\u7406
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u4E00\u3001nginx\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001nginx\u5B89\u88C5" aria-hidden="true">#</a> \u4E00\u3001Nginx\u5B89\u88C5</h3><h5 id="_1\u3001\u53BB\u5B98\u7F51http-nginx-org-\u4E0B\u8F7D\u5BF9\u5E94\u7684nginx\u5305-\u63A8\u8350\u4F7F\u7528\u7A33\u5B9A\u7248\u672C" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u53BB\u5B98\u7F51http-nginx-org-\u4E0B\u8F7D\u5BF9\u5E94\u7684nginx\u5305-\u63A8\u8350\u4F7F\u7528\u7A33\u5B9A\u7248\u672C" aria-hidden="true">#</a> 1\u3001\u53BB\u5B98\u7F51http://nginx.org/\u4E0B\u8F7D\u5BF9\u5E94\u7684nginx\u5305\uFF0C\u63A8\u8350\u4F7F\u7528\u7A33\u5B9A\u7248\u672C</h5><h5 id="_2\u3001\u4E0A\u4F20nginx\u5230linux\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u4E0A\u4F20nginx\u5230linux\u7CFB\u7EDF" aria-hidden="true">#</a> 2\u3001\u4E0A\u4F20nginx\u5230linux\u7CFB\u7EDF</h5><h5 id="_3\u3001\u5B89\u88C5\u4F9D\u8D56\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u5B89\u88C5\u4F9D\u8D56\u73AF\u5883" aria-hidden="true">#</a> 3\u3001\u5B89\u88C5\u4F9D\u8D56\u73AF\u5883</h5><p>(1)\u5B89\u88C5gcc\u73AF\u5883</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install gcc-c++
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>(2)\u5B89\u88C5PCRE\u5E93\uFF0C\u7528\u4E8E\u89E3\u6790\u6B63\u5219\u8868\u8FBE\u5F0F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install -y pcre pcre-devel
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>(3)zlib\u538B\u7F29\u548C\u89E3\u538B\u7F29\u4F9D\u8D56</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install -y zlib zlib-devel
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>(4)SSL \u5B89\u5168\u7684\u52A0\u5BC6\u7684\u5957\u63A5\u5B57\u534F\u8BAE\u5C42\uFF0C\u7528\u4E8EHTTP\u5B89\u5168\u4F20\u8F93\uFF0C\u4E5F\u5C31\u662Fhttps</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install -y openssl openssl-devel
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h5 id="_4\u3001\u89E3\u538B-\u9700\u8981\u6CE8\u610F-\u89E3\u538B\u540E\u5F97\u5230\u7684\u662F\u6E90\u7801-\u6E90\u7801\u9700\u8981\u7F16\u8BD1\u540E\u624D\u80FD\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u89E3\u538B-\u9700\u8981\u6CE8\u610F-\u89E3\u538B\u540E\u5F97\u5230\u7684\u662F\u6E90\u7801-\u6E90\u7801\u9700\u8981\u7F16\u8BD1\u540E\u624D\u80FD\u5B89\u88C5" aria-hidden="true">#</a> 4\u3001\u89E3\u538B\uFF0C\u9700\u8981\u6CE8\u610F\uFF0C\u89E3\u538B\u540E\u5F97\u5230\u7684\u662F\u6E90\u7801\uFF0C\u6E90\u7801\u9700\u8981\u7F16\u8BD1\u540E\u624D\u80FD\u5B89\u88C5</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tar -zxvf nginx-1.16.1.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h5 id="_5\u3001\u7F16\u8BD1\u4E4B\u524D-\u5148\u521B\u5EFAnginx\u4E34\u65F6\u76EE\u5F55-\u5982\u679C\u4E0D\u521B\u5EFA-\u5728\u542F\u52A8nginx\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u62A5\u9519" tabindex="-1"><a class="header-anchor" href="#_5\u3001\u7F16\u8BD1\u4E4B\u524D-\u5148\u521B\u5EFAnginx\u4E34\u65F6\u76EE\u5F55-\u5982\u679C\u4E0D\u521B\u5EFA-\u5728\u542F\u52A8nginx\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u62A5\u9519" aria-hidden="true">#</a> 5\u3001\u7F16\u8BD1\u4E4B\u524D\uFF0C\u5148\u521B\u5EFAnginx\u4E34\u65F6\u76EE\u5F55\uFF0C\u5982\u679C\u4E0D\u521B\u5EFA\uFF0C\u5728\u542F\u52A8nginx\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u62A5\u9519</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir /var/temp/nginx -p
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h5 id="_6\u3001\u5728nginx\u76EE\u5F55-\u8F93\u5165\u5982\u4E0B\u547D\u4EE4\u8FDB\u884C\u914D\u7F6E-\u76EE\u7684\u662F\u4E3A\u4E86\u521B\u5EFAmakefile\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u5728nginx\u76EE\u5F55-\u8F93\u5165\u5982\u4E0B\u547D\u4EE4\u8FDB\u884C\u914D\u7F6E-\u76EE\u7684\u662F\u4E3A\u4E86\u521B\u5EFAmakefile\u6587\u4EF6" aria-hidden="true">#</a> 6\u3001\u5728nginx\u76EE\u5F55\uFF0C\u8F93\u5165\u5982\u4E0B\u547D\u4EE4\u8FDB\u884C\u914D\u7F6E\uFF0C\u76EE\u7684\u662F\u4E3A\u4E86\u521B\u5EFAmakefile\u6587\u4EF6</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>./configure \\   
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u6CE8\uFF1A\u4EE3\u8868\u5728\u547D\u4EE4\u884C\u4E2D\u6362\u884C\uFF0C\u7528\u4E8E\u63D0\u9AD8\u53EF\u8BFB\u6027\u914D\u7F6E\u547D\u4EE4\uFF1A</p><p><img src="https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/640-164346363259473.jpg" alt="\u56FE\u7247" loading="lazy"></p><h5 id="_7\u3001make\u7F16\u8BD1-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_7\u3001make\u7F16\u8BD1-\u5B89\u88C5" aria-hidden="true">#</a> 7\u3001make\u7F16\u8BD1&amp;\u5B89\u88C5</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>make
make install
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="_8\u3001\u8FDB\u5165sbin\u76EE\u5F55\u542F\u52A8nginx" tabindex="-1"><a class="header-anchor" href="#_8\u3001\u8FDB\u5165sbin\u76EE\u5F55\u542F\u52A8nginx" aria-hidden="true">#</a> 8\u3001\u8FDB\u5165sbin\u76EE\u5F55\u542F\u52A8nginx</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u542F\u52A8\uFF1Anginx
\u505C\u6B62\uFF1A./nginx -s stop
\u91CD\u65B0\u52A0\u8F7D\uFF1A./nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u4E8C\u3001\u914D\u7F6E\u53CD\u5411\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u914D\u7F6E\u53CD\u5411\u4EE3\u7406" aria-hidden="true">#</a> \u4E8C\u3001\u914D\u7F6E\u53CD\u5411\u4EE3\u7406</h3><p>1\u3001\u914D\u7F6Eupstream</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>upstream [proxyName] {
    server 192.168.1.173:8080;
    server 192.168.1.174:8080;
    server 192.168.1.175:8080;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>2\u3001\u914D\u7F6Eserver</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server {
    listem  80;
    server_name www.tomcats.com;

    location / {
        proxy_pass http://tomcats;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u4E09\u3001\u914D\u7F6E\u8D1F\u8F7D\u5747\u8861" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u914D\u7F6E\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a> \u4E09\u3001\u914D\u7F6E\u8D1F\u8F7D\u5747\u8861</h3><p>nginx\u9ED8\u8BA4\u91C7\u7528\u8F6E\u8BAD\u7684\u65B9\u5F0F\u8FDB\u884C\u8D1F\u8F7D\u5747\u8861</p><p>1\u3001\u4F7F\u7528\u52A0\u6743\u8F6E\u8BE2</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>upstream [proxyName] {
    server 192.168.1.173:8080 weight=1;
    server 192.168.1.174:8080 weight=5;
    server 192.168.1.175:8080 weight=2;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>2\u3001hash\u8D1F\u8F7D\u5747\u8861</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>upstream [proxyName] {
    ip_hash

    server 192.168.1.173:8080;
    server 192.168.1.174:8080;
    server 192.168.1.175:8080;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>hash\u7B97\u6CD5\u5B9E\u9645\u4E0A\u53EA\u4F1A\u8BA1\u7B97 192.168.1\u8FD9\u6BB5\u505A\u54C8\u5E0C</p><p>\u4F7F\u7528ip_hash\u7684\u6CE8\u610F\u70B9\uFF1A</p><ul><li>\u4E0D\u80FD\u628A\u540E\u53F0\u670D\u52A1\u5668\u76F4\u63A5\u79FB\u9664\uFF0C\u53EA\u80FD\u6807\u8BB0down.</li></ul><p>3\u3001url hash\u8D1F\u8F7D\u5747\u8861</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>upstream [proxyName] {
    hash $request_url;

    server 192.168.1.173:8080;
    server 192.168.1.174:8080;
    server 192.168.1.175:8080;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>4\u3001\u6700\u5C0F\u8FDE\u63A5\u8D1F\u8F7D\u5747\u8861</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>upstream [proxyName] {
    least_conn;

    server 192.168.1.173:8080;
    server 192.168.1.174:8080;
    server 192.168.1.175:8080;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u56DB\u3001upstream\u6307\u4EE4\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u56DB\u3001upstream\u6307\u4EE4\u53C2\u6570" aria-hidden="true">#</a> \u56DB\u3001upstream\u6307\u4EE4\u53C2\u6570</h3><ul><li><code>max_conns</code>\uFF1A\u9650\u5236\u6700\u5927\u540C\u65F6\u8FDE\u63A5\u6570 1.11.5\u4E4B\u524D\u53EA\u80FD\u7528\u4E8E\u5546\u4E1A\u7248</li><li><code>slow_start</code>\uFF1A\u5355\u4F4D\u79D2\uFF0C\u6743\u91CD\u5728\u6307\u5B9A\u65F6\u95F4\u5185\u4ECE1\u4E0A\u5347\u5230\u6307\u5B9A\u503C\uFF0C\u4E0D\u9002\u7528\u4E0Ehash\u8D1F\u8F7D\u5747\u8861\u3001\u968F\u673A\u8D1F\u8F7D\u5747\u8861 \u5982\u679C\u5728 upstream \u4E2D\u53EA\u6709\u4E00\u53F0 server\uFF0C\u5219\u8BE5\u53C2\u6570\u5931\u6548\uFF08\u5546\u4E1A\u7248\u624D\u6709\uFF09</li><li><code>down</code>\uFF1A\u7981\u6B62\u8BBF\u95EE</li><li><code>backup</code>\uFF1A\u5907\u7528\u673A \u53EA\u6709\u5728\u5176\u4ED6\u670D\u52A1\u5668\u65E0\u6CD5\u8BBF\u95EE\u7684\u65F6\u5019\u624D\u80FD\u8BBF\u95EE\u5230 \u4E0D\u9002\u7528\u4E0Ehash\u8D1F\u8F7D\u5747\u8861\u3001\u968F\u673A\u8D1F\u8F7D\u5747\u8861</li><li><code>max_fails</code>\uFF1A\u8868\u793A\u5931\u8D25\u51E0\u6B21\uFF0C\u5219\u6807\u8BB0server\u5DF2\u5B95\u673A\uFF0C\u5254\u51FA\u4E0A\u6E38\u670D\u52A1 \u9ED8\u8BA4\u503C1</li><li><code>fail_timeout</code>\uFF1A\u8868\u793A\u5931\u8D25\u7684\u91CD\u8BD5\u65F6\u95F4 \u9ED8\u8BA4\u503C10</li></ul><p>1\u3001keepalived</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>upstream [proxyName] {
    server 192.168.1.173:8080 weight=1;
    server 192.168.1.174:8080 weight=5;
    server 192.168.1.175:8080 weight=2;

    keepalive 32; #\u4FDD\u6301\u7684\u8FDE\u63A5\u6570
}

server {
    listem  80;
    server_name www.tomcats.com;

    location / {
        proxy_pass http://tomcats;
        proxy_http_version 1.1; #\u8FDE\u63A5\u7684\u534F\u8BAE\u7248\u672C
        proxy_set_header Connection &quot;&quot;; \u6E05\u7A7A\u8FDE\u63A5\u8BF7\u6C42\u5934
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>2\u3001\u63A7\u5236\u6D4F\u89C8\u5668\u7F13\u5B58</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server {
    listem  80;
    server_name www.tomcats.com;

    location / {
        proxy_pass http://tomcats;
               expires 10s;  #\u6D4F\u89C8\u5668\u7F13\u5B5810\u79D2\u949F
               #expires @22h30m  #\u5728\u665A\u4E0A10\u70B930\u7684\u65F6\u5019\u8FC7\u671F
               #expires -1h  #\u7F13\u5B58\u5728\u4E00\u5C0F\u65F6\u524D\u65F6\u6548
               #expires epoch  #\u4E0D\u8BBE\u7F6E\u7F13\u5B58
               #expires off  #\u7F13\u5B58\u5173\u95ED\uFF0C\u6D4F\u89C8\u5668\u81EA\u5DF1\u63A7\u5236\u7F13\u5B58
               #expires max  #\u6700\u5927\u8FC7\u671F\u65F6\u95F4
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>3\u3001\u53CD\u5411\u4EE3\u7406\u7F13\u5B58</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>upstream [proxyName] {
    server 192.168.1.173:8080 weight=1;
    server 192.168.1.174:8080 weight=5;
    server 192.168.1.175:8080 weight=2;
}

#proxy_cache_path \u8BBE\u7F6E\u7F13\u5B58\u4FDD\u5B58\u7684\u76EE\u5F55\u7684\u4F4D\u7F6E
#keys_zone\u8BBE\u7F6E\u5171\u4EAB\u5185\u4EE5\u53CA\u5360\u7528\u7684\u7A7A\u95F4\u5927\u5C0F
#mas_size \u8BBE\u7F6E\u7F13\u5B58\u6700\u5927\u7A7A\u95F4
#inactive \u7F13\u5B58\u8FC7\u671F\u65F6\u95F4\uFF0C\u9519\u8FC7\u6B64\u65F6\u95F4\u81EA\u52A8\u6E05\u7406
#use_temp_path \u5173\u95ED\u96F6\u65F6\u76EE\u5F55
proxy_cache_path /usr/local/nginx/upsteam_cache keys_zone=mycache:5m max_size=1g inactive=8h use_temp_path=off;

server {
    listem  80;
    server_name www.tomcats.com;
    #\u5F00\u542F\u5E76\u4F7F\u7528\u7F13\u5B58
    proxy_cache mycache;
    #\u9488\u5BF9200\u548C304\u54CD\u5E94\u7801\u7684\u7F13\u5B58\u8FC7\u671F\u65F6\u95F4
    proxy_cache_valid 200 304 8h;   

    location / {
        proxy_pass http://tomcats;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="\u4E94\u3001\u914D\u7F6Essl\u8BC1\u4E66\u63D0\u4F9Bhttps\u8BBF\u95EE" tabindex="-1"><a class="header-anchor" href="#\u4E94\u3001\u914D\u7F6Essl\u8BC1\u4E66\u63D0\u4F9Bhttps\u8BBF\u95EE" aria-hidden="true">#</a> \u4E94\u3001\u914D\u7F6Essl\u8BC1\u4E66\u63D0\u4F9Bhttps\u8BBF\u95EE</h3><h5 id="_1-\u5B89\u88C5ssl\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5ssl\u6A21\u5757" aria-hidden="true">#</a> 1. \u5B89\u88C5SSL\u6A21\u5757</h5><p>\u8981\u5728nginx\u4E2D\u914D\u7F6Ehttps\uFF0C\u5C31\u5FC5\u987B\u5B89\u88C5ssl\u6A21\u5757\uFF0C\u4E5F\u5C31\u662F: <code>http_ssl_module</code>\u3002</p><p>\u8FDB\u5165\u5230nginx\u7684\u89E3\u538B\u76EE\u5F55\uFF1A<code>/home/software/nginx-1.16.1</code></p><p>\u65B0\u589Essl\u6A21\u5757(\u539F\u6765\u7684\u90A3\u4E9B\u6A21\u5757\u9700\u8981\u4FDD\u7559)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>./configure \\
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u7F16\u8BD1\u548C\u5B89\u88C5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>make
make install
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="_2\u3001\u914D\u7F6Ehttps" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u914D\u7F6Ehttps" aria-hidden="true">#</a> 2\u3001\u914D\u7F6EHTTPS</h5><p>\u628Assl\u8BC1\u4E66 <code>*.crt</code> \u548C \u79C1\u94A5 <code>*.key</code> \u62F7\u8D1D\u5230<code>/usr/local/nginx/conf</code>\u76EE\u5F55\u4E2D\u3002</p><p>\u65B0\u589E server \u76D1\u542C 443 \u7AEF\u53E3\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>server {
    listen       443;
    server_name  www.imoocdsp.com;
    # \u5F00\u542Fssl
    ssl     on;
    # \u914D\u7F6Essl\u8BC1\u4E66
    ssl_certificate      1_www.imoocdsp.com_bundle.crt;
    # \u914D\u7F6E\u8BC1\u4E66\u79D8\u94A5
    ssl_certificate_key  2_www.imoocdsp.com.key;
    # ssl\u4F1A\u8BDDcache
    ssl_session_cache    shared:SSL:1m;
    # ssl\u4F1A\u8BDD\u8D85\u65F6\u65F6\u95F4
    ssl_session_timeout  5m;
    # \u914D\u7F6E\u52A0\u5BC6\u5957\u4EF6\uFF0C\u5199\u6CD5\u9075\u5FAA openssl \u6807\u51C6
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    
    location / {
        proxy_pass http://tomcats/;
        index  index.html index.htm;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="\u516D\u3001\u914D\u7F6Eha-nginx" tabindex="-1"><a class="header-anchor" href="#\u516D\u3001\u914D\u7F6Eha-nginx" aria-hidden="true">#</a> \u516D\u3001\u914D\u7F6Eha nginx</h3><h5 id="_1\u3001\u5B89\u88C5keepalived" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u5B89\u88C5keepalived" aria-hidden="true">#</a> 1\u3001\u5B89\u88C5keepalived</h5><p>(1)\u4E0B\u8F7D</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://www.keepalived.org/download.html
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>(2)\u89E3\u538B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tar -zxvf keepalived-2.0.18.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>(3)\u4F7F\u7528configure\u547D\u4EE4\u914D\u7F6E\u5B89\u88C5\u76EE\u5F55\u4E0E\u6838\u5FC3\u914D\u7F6E\u6587\u4EF6\u6240\u5728\u4F4D\u7F6E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>./configure --prefix=/usr/local/keepalived --sysconf=/etc
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><strong>prefix</strong>\uFF1Akeepalived\u5B89\u88C5\u7684\u4F4D\u7F6Esysconf\uFF1Akeepalived\u6838\u5FC3\u914D\u7F6E\u6587\u4EF6\u6240\u5728\u4F4D\u7F6E\uFF0C\u56FA\u5B9A\u4F4D\u7F6E\uFF0C\u6539\u6210\u5176\u4ED6\u4F4D\u7F6E\u5219keepalived\u542F\u52A8\u4E0D\u4E86\uFF0C<code>/var/log/messages</code>\u4E2D\u4F1A\u62A5\u9519</li><li><strong>sysconf</strong>\uFF1Akeepalived\u6838\u5FC3\u914D\u7F6E\u6587\u4EF6\u6240\u5728\u4F4D\u7F6E\uFF0C\u56FA\u5B9A\u4F4D\u7F6E\uFF0C\u6539\u6210\u5176\u4ED6\u4F4D\u7F6E\u5219keepalived\u542F\u52A8\u4E0D\u4E86\uFF0C<code>/var/log/messages</code>\u4E2D\u4F1A\u62A5\u9519</li></ul><p>\u914D\u7F6E\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u4F1A\u51FA\u73B0\u8B66\u544A\u4FE1\u606F\uFF0C\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>*** WARNING - this build will not support IPVS with IPv6. Please install libnl/libnl-3 dev libraries to support IPv6 with IPVS.

# \u5B89\u88C5libnl/libnl-3\u4F9D\u8D56
yum -y install libnl libnl-devel  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>(4)\u5B89\u88C5keepalived</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>make &amp;&amp; make install
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>(5)\u914D\u7F6E\u6587\u4EF6 \u5728<code>/etc/keepalived/keepalived.conf</code></p><p>(6)\u5FD8\u8BB0\u5B89\u88C5\u914D\u7F6E\u7684\u76EE\u5F55\uFF0C\u5219\u901A\u8FC7\u5982\u4E0B\u547D\u4EE4\u627E\u5230\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>whereis keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>(7)\u542F\u52A8keepalived</p><p>\u8FDB\u5165sbin\u76EE\u5F55</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>./keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h5 id="_2\u3001\u914D\u7F6Ekeepalived-\u4E3B\u673A" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u914D\u7F6Ekeepalived-\u4E3B\u673A" aria-hidden="true">#</a> 2\u3001\u914D\u7F6Ekeepalived \u4E3B\u673A</h5><p>(1)\u901A\u8FC7\u547D\u4EE4 <code>vim keepalived.conf</code> \u6253\u5F00\u914D\u7F6E\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>global_defs { 
    # \u8DEF\u7531id\uFF1A\u5F53\u524D\u5B89\u88C5keepalived\u7684\u8282\u70B9\u4E3B\u673A\u6807\u8BC6\u7B26\uFF0C\u4FDD\u8BC1\u5168\u5C40\u552F\u4E00 
    router_id keep_171 
} 

vrrp_instance VI_1 { 
    # \u8868\u793A\u72B6\u6001\u662FMASTER\u4E3B\u673A\u8FD8\u662F\u5907\u7528\u673ABACKUP 
    state MASTER 
    # \u8BE5\u5B9E\u4F8B\u7ED1\u5B9A\u7684\u7F51\u5361 
    interface ens33 
    # \u4FDD\u8BC1\u4E3B\u5907\u8282\u70B9\u4E00\u81F4\u5373\u53EF 
    virtual_router_id 51 
    # \u6743\u91CD\uFF0Cmaster\u6743\u91CD\u4E00\u822C\u9AD8\u4E8Ebackup\uFF0C\u5982\u679C\u6709\u591A\u4E2A\uFF0C\u90A3\u5C31\u662F\u9009\u4E3E\uFF0C\u8C01\u7684\u6743\u91CD\u9AD8\uFF0C\u8C01\u5C31\u5F53\u9009 
    priority 100 
    # \u4E3B\u5907\u4E4B\u95F4\u540C\u6B65\u68C0\u67E5\u65F6\u95F4\u95F4\u9694\uFF0C\u5355\u4F4D\u79D2 
    advert_int 2 
    # \u8BA4\u8BC1\u6743\u9650\u5BC6\u7801\uFF0C\u9632\u6B62\u975E\u6CD5\u8282\u70B9\u8FDB\u5165 
    authentication { 
        auth_type PASS 
        auth_pass 1111 
    } 
    # \u865A\u62DF\u51FA\u6765\u7684ip\uFF0C\u53EF\u4EE5\u6709\u591A\u4E2A\uFF08vip\uFF09 
    virtual_ipaddress { 
        192.168.1.161 
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>\u9644\uFF1A\u67E5\u770B\u7F51\u5361\u4FE1\u606F\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ip addr
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>(2)\u542F\u52A8keepalived</p><p>(3)\u67E5\u770B\u8FDB\u7A0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ps -ef|grep keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>(4)\u67E5\u770Bvip(\u865A\u62DFip)</p><p>\u5728\u7F51\u5361ens33\u4E0B\uFF0C\u591A\u4E86\u4E00\u4E2A<code>192.168.1.161</code>\uFF0C\u8FD9\u4E2A\u5C31\u662F\u865A\u62DFip</p><h5 id="_3\u3001\u628Akeepalived\u6CE8\u518C\u4E3A\u7CFB\u7EDF\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u628Akeepalived\u6CE8\u518C\u4E3A\u7CFB\u7EDF\u670D\u52A1" aria-hidden="true">#</a> 3\u3001\u628Akeepalived\u6CE8\u518C\u4E3A\u7CFB\u7EDF\u670D\u52A1</h5><p>(1)\u62F7\u8D1D\u914D\u7F6E\u6587\u4EF6</p><ul><li>\u5C06keepalived\u76EE\u5F55\u4E0B<code>etc/init.d/keepalived</code>\u62F7\u8D1D\u5230<code>/etc/init.d/</code>\u4E0B</li><li>\u5C06keepalived\u76EE\u5F55\u4E0B<code>etc/sysconfig/keepalived</code>\u62F7\u8D1D\u5230<code>/etc/sysconfig/</code>\u4E0B</li></ul><p>(2)\u5237\u65B0systemctl</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>(3)\u542F\u52A8\u3001\u505C\u6B62\u3001\u91CD\u542Fkeepalived</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#\u542F\u52A8
systemctl start keepalived.service
#\u505C\u6B62
systemctl stop keepalived.service
#\u91CD\u542F
systemctl restart keepalived.service
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h5 id="_4\u3001\u5B9E\u73B0\u53CC\u673A\u4E3B\u5907\u9AD8\u53EF\u7528" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u5B9E\u73B0\u53CC\u673A\u4E3B\u5907\u9AD8\u53EF\u7528" aria-hidden="true">#</a> 4\u3001\u5B9E\u73B0\u53CC\u673A\u4E3B\u5907\u9AD8\u53EF\u7528</h5><p><img src="https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/640-164346363259474.webp" alt="\u56FE\u7247" loading="lazy"></p><p>(1)\u4FEE\u6539\u5907\u673A\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>global_defs { 
    router_id keep_172 
} 
vrrp_instance VI_1 { 
    # \u5907\u7528\u673A\u8BBE\u7F6E\u4E3ABACKUP 
    state BACKUP 
    interface ens33 
    virtual_router_id 51 
    # \u6743\u91CD\u4F4E\u4E8EMASTER 
    priority 80 
    advert_int 2 
    authentication { 
        auth_type PASS auth_pass 1111 
    }
    virtual_ipaddress {
        # \u6CE8\u610F\uFF1A\u4E3B\u5907\u4E24\u53F0\u7684vip\u90FD\u662F\u4E00\u6837\u7684\uFF0C\u7ED1\u5B9A\u5230\u540C\u4E00\u4E2Avip 
        192.168.1.161 
    } 
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>(2) \u542F\u52A8 Keepalived</p><p>(3) \u8BBF\u95EEvip\u5373\u53EF\u8BBF\u95EE\u4E3B\u673A\uFF0C\u5F53\u4E3B\u673A\u5931\u6548\u65F6\u8BBF\u95EEvip\u5C31\u4F1A\u8BBF\u95EE\u5230\u5907\u673A</p><h5 id="_5\u3001keepalived\u914D\u7F6Enginx\u81EA\u52A8\u91CD\u542F" tabindex="-1"><a class="header-anchor" href="#_5\u3001keepalived\u914D\u7F6Enginx\u81EA\u52A8\u91CD\u542F" aria-hidden="true">#</a> 5\u3001keepalived\u914D\u7F6Enginx\u81EA\u52A8\u91CD\u542F</h5><p>(1)\u7F16\u5199\u811A\u672C</p><p>\u5728<code>/etc/keepalived/</code>\u4E0B\u521B\u5EFA\u811A\u672C<code>check_nginx_alive_or_not</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/bash 

A=\`ps -C nginx --no-header |wc -l\` 
# \u5224\u65ADnginx\u662F\u5426\u5B95\u673A\uFF0C\u5982\u679C\u5B95\u673A\u4E86\uFF0C\u5C1D\u8BD5\u91CD\u542F 
if [ $A -eq 0 ];then 
    /usr/local/nginx/sbin/nginx 
    # \u7B49\u5F85\u4E00\u5C0F\u4F1A\u518D\u6B21\u68C0\u67E5nginx\uFF0C\u5982\u679C\u6CA1\u6709\u542F\u52A8\u6210\u529F\uFF0C\u5219\u505C\u6B62keepalived\uFF0C\u4F7F\u5176\u542F\u52A8\u5907\u7528\u673A 
    sleep 3 
        if [ \`ps -C nginx --no-header |wc -l\` -eq 0 ];then 
            killall keepalived 
        fi 
fi
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>(2)\u6DFB\u52A0\u8FD0\u884C\u6743\u9650</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>chmod +x /etc/keepalived/check_nginx_alive_or_not.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>(3)\u914D\u7F6Ekeepalived\u76D1\u542Cnginx\u811A\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vrrp_script check_nginx_alive { 
    script &quot;/etc/keepalived/check_nginx_alive_or_not.sh&quot; 
    interval 2 # \u6BCF\u9694\u4E24\u79D2\u8FD0\u884C\u4E0A\u4E00\u884C\u811A\u672C 
    weight 10 # \u5982\u679C\u811A\u672C\u8FD0\u884C\u5931\u8D25\uFF0C\u5219\u5347\u7EA7\u6743\u91CD+10 
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>(4)\u5728vrrp_instance\u4E2D\u65B0\u589E\u76D1\u63A7\u7684\u811A\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>track_script { 
    check_nginx_alive # \u8FFD\u8E2A nginx \u811A\u672C
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>(5)\u91CD\u542FKeepalived\u4F7F\u5F97\u914D\u7F6E\u6587\u4EF6\u751F\u6548</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl restart keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h5 id="_6\u3001keepalived\u53CC\u4E3B\u70ED\u5907" tabindex="-1"><a class="header-anchor" href="#_6\u3001keepalived\u53CC\u4E3B\u70ED\u5907" aria-hidden="true">#</a> 6\u3001keepalived\u53CC\u4E3B\u70ED\u5907</h5><p>(1)\u914D\u7F6EDNS\u8F6E\u8BE2</p><p>\u5728\u540C\u4E00\u4E2A\u57DF\u540D\u4E0B\u914D\u7F6E\u4E24\u4E2Aip\uFF0C\u81EA\u884C\u767E\u5EA6</p><p>(2)\u914D\u7F6E\u7B2C\u4E00\u53F0\u4E3B\u673A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>global_defs {
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>(3)\u914D\u7F6E\u7B2C\u4E8C\u53F0\u4E3B\u673A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>global_defs {
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>(4)\u91CD\u542F\u4E24\u53F0Keepalived</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl restart keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u4E03\u3001lvs-linux-virtual-server-\u5B9E\u73B0\u9AD8\u53EF\u7528\u8D1F\u8F7D\u5747\u8861" tabindex="-1"><a class="header-anchor" href="#\u4E03\u3001lvs-linux-virtual-server-\u5B9E\u73B0\u9AD8\u53EF\u7528\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a> \u4E03\u3001LVS\uFF08Linux Virtual Server\uFF09\u5B9E\u73B0\u9AD8\u53EF\u7528\u8D1F\u8F7D\u5747\u8861</h3><h5 id="_1\u3001\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528lvs-nginx" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528lvs-nginx" aria-hidden="true">#</a> 1\u3001\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528LVS+Nginx</h5><ul><li>lvs\u57FA\u4E8E\u56DB\u5C42\u8D1F\u8F7D\u5747\u8861\uFF0C\u5DE5\u4F5C\u6548\u7387\u8F83Nginx\u7684\u4E03\u5C42\u8D1F\u8F7D\u66F4\u9AD8\uFF0C\u4F7F\u7528LVS\u642D\u5EFANginx\u96C6\u7FA4\uFF0C\u53EF\u4EE5\u63D0\u9AD8\u6027\u80FD</li><li>\u56DB\u5C42\u8D1F\u8F7D\u5747\u8861\u65E0\u6CD5\u5BF9\u4FE1\u606F\u5904\u7406\uFF0C\u53EA\u80FD\u901A\u8FC7ip+\u7AEF\u53E3\u7684\u5F62\u5F0F\u8F6C\u53D1\uFF0C\u6240\u4EE5\u9700\u8981\u4E03\u6210\u8D1F\u8F7D\u8FDB\u884C\u6570\u636E\u7684\u5904\u7406</li><li>Nginx\u63A5\u6536\u8BF7\u6C42\u6765\u56DE\uFF0CLVS\u53EF\u4EE5\u53EA\u63A5\u53D7\u4E0D\u54CD\u5E94</li></ul><h5 id="_2\u3001lvs\u7684\u4E09\u79CD\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2\u3001lvs\u7684\u4E09\u79CD\u6A21\u5F0F" aria-hidden="true">#</a> 2\u3001LVS\u7684\u4E09\u79CD\u6A21\u5F0F</h5><p>(1)NAT\u6A21\u5F0F</p><ul><li>\u5BA2\u6237\u7AEF\u5C06\u8BF7\u6C42\u53D1\u5F80LVS\uFF0CLVS\u4F1A\u9009\u62E9\u4E00\u53F0\u670D\u52A1\u5668\u54CD\u5E94\u8BF7\u6C42\uFF0C\u670D\u52A1\u5668\u5C06\u7ED3\u679C\u8FD4\u56DE\u7ED9LVS\uFF0CLVS\u518D\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u3002</li><li>\u5728NAT\u6A21\u5F0F\u4E2D\uFF0C\u670D\u52A1\u5668\u7684\u7F51\u5173\u5FC5\u987B\u6307\u5411LVS\uFF0C\u5426\u5219\u62A5\u6587\u65E0\u6CD5\u9001\u8FBE\u5BA2\u6237\u7AEF</li><li>NAT \u6280\u672F\u5C06\u8BF7\u6C42\u7684\u62A5\u6587\u548C\u54CD\u5E94\u7684\u62A5\u6587\u90FD\u9700\u8981\u901A\u8FC7LVS\u8FDB\u884C\u5730\u5740\u6539\u5199\uFF0C\u56E0\u6B64\u7F51\u7AD9\u8BBF\u95EE\u91CF\u6BD4\u8F83\u5927\u7684\u65F6\u5019\u8D1F\u8F7D\u5747\u8861\u8C03\u5EA6\u5668\u6709\u6BD4\u8F83\u5927\u7684\u74F6\u9888\uFF0C\u4E00\u822C\u8981\u6C42\u6700\u591A\u4E4B\u80FD 10-20 \u53F0\u8282\u70B9</li><li>NAT \u6A21\u5F0F\u652F\u6301\u5BF9 IP \u5730\u5740\u548C\u7AEF\u53E3\u8FDB\u884C\u8F6C\u6362\u3002\u5373\u7528\u6237\u8BF7\u6C42\u7684\u7AEF\u53E3\u548C\u771F\u5B9E\u670D\u52A1\u5668\u7684\u7AEF\u53E3\u53EF\u4EE5\u4E0D\u4E00\u81F4</li></ul><p>(2)TUN\u6A21\u5F0F</p><ul><li>\u5BA2\u6237\u7AEF\u5C06\u8BF7\u6C42\u53D1\u5F80LVS\uFF0CLVS\u4F1A\u9009\u62E9\u4E00\u53F0\u670D\u52A1\u5668\u54CD\u5E94\u8BF7\u6C42\uFF0C\u5728\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u5668\u4E4B\u95F4\u5EFA\u7ACB\u96A7\u9053\uFF0C\u8FD4\u56DE\u7ED3\u679C\u7684\u65F6\u5019\u76F4\u63A5\u7531\u670D\u52A1\u5668\u8FD4\u56DE\u54CD\u5E94\uFF0C\u4E0D\u5728\u7ECF\u8FC7LVS\u3002</li><li>TUN\u6A21\u5F0F\u5FC5\u987B\u6240\u6709\u7684\u670D\u52A1\u5668\u4E0A\u90FD\u7ED1\u5B9AVIP\u7684IP\u5730\u5740\uFF0C\u6240\u6709\u7684\u670D\u52A1\u5668\u90FD\u5FC5\u987B\u6709\u7F51\u5361\u3002</li><li>TUN\u6A21\u5F0F\u8D70\u96A7\u9053\u8FD0\u7EF4\u96BE\u5EA6\u5927\uFF0C\u5E76\u4E14\u4F1A\u76F4\u63A5\u66B4\u9732\u670D\u52A1\u5668\u5730\u5740</li><li>\u670D\u52A1\u5668\u5C06\u5E94\u7B54\u5305\u76F4\u63A5\u53D1\u7ED9\u7528\u6237\u3002\u6240\u4EE5\uFF0C\u51CF\u5C11\u4E86\u8D1F\u8F7D\u5747\u8861\u5668\u7684\u5927\u91CF\u6570\u636E\u6D41\u52A8\uFF0C\u8D1F\u8F7D\u5747\u8861\u5668\u4E0D\u518D\u662F\u7CFB\u7EDF\u7684\u74F6\u9888\uFF0C\u5C31\u80FD\u5904\u7406\u5F88\u5DE8\u5927\u7684\u8BF7\u6C42\u91CF\uFF0C\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u4E00\u53F0\u8D1F\u8F7D\u5747\u8861\u5668\u80FD\u591F\u4E3A\u5F88\u591A\u670D\u52A1\u5668\u8FDB\u884C\u5206\u53D1\u3002\u800C\u4E14\u8DD1\u5728\u516C\u7F51\u4E0A\u5C31\u80FD\u8FDB\u884C\u4E0D\u540C\u5730\u57DF\u7684\u5206\u53D1</li></ul><p>(3)DR\u6A21\u5F0F</p><ul><li>\u5BA2\u6237\u7AEF\u5C06\u8BF7\u6C42\u53D1\u5F80LVS\uFF0CLVS\u4F1A\u9009\u62E9\u4E00\u53F0\u670D\u52A1\u5668\u54CD\u5E94\u8BF7\u6C42\uFF0C\u8FD4\u56DE\u7ED3\u679C\u7684\u65F6\u5019\u901A\u8FC7\u7EDF\u4E00\u7684\u8DEF\u7531\u8FDB\u884C\u8FD4\u56DE\uFF0C\u4E0D\u5728\u7ECF\u8FC7LVS\u3002</li><li>\u548CTUN\u6A21\u5F0F\u4E00\u6837\uFF0CLVS\u53EA\u662F\u5206\u53D1\u8BF7\u6C42\uFF0C\u5E94\u7B54\u5305\u901A\u8FC7\u5355\u72EC\u7684\u8DEF\u7531\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u4E0ETUN\u76F8\u6BD4\u8FD9\u79CD\u65B9\u5F0F\u4E0D\u9700\u8981\u96A7\u9053\u7ED3\u6784\uFF0C\u53EF\u4EE5\u517C\u5BB9\u5927\u591A\u6570\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u540C\u65F6\u7EDF\u4E00\u8DEF\u7531\u53EF\u4EE5\u9690\u85CF\u771F\u5B9E\u7684\u7269\u7406\u670D\u52A1\u5668\u3002DR\u6A21\u5F0F\u6548\u7387\u66F4\u9AD8\uFF0C\u4F46\u914D\u7F6E\u66F4\u590D\u6742.</li><li>\u6240\u6709\u670D\u52A1\u5668\u8282\u70B9\u548CLVS\u53EA\u80FD\u5728\u4E00\u4E2A\u5C40\u57DF\u7F51\u91CC\u9762\u3002</li></ul><h5 id="_3\u3001\u642D\u5EFAlvs-dr\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u642D\u5EFAlvs-dr\u6A21\u5F0F" aria-hidden="true">#</a> 3\u3001\u642D\u5EFALVS-DR\u6A21\u5F0F</h5><p>\u5148\u5173\u95ED\u6389\u670D\u52A1\u5668\u4E0A\u7F51\u7EDC\u914D\u7F6E\u7BA1\u7406\u5668\uFF0C\u907F\u514D\u7F51\u7EDC\u63A5\u53E3\u51B2\u7A81</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl stop NetworkManager
systemctl disable NetworkManager
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>(1)\u521B\u5EFA\u5B50\u63A5\u53E3\uFF08\u521B\u5EFALVS\u7684\u865A\u62DFip\uFF09</p><p>\u8FDB\u5165\u7F51\u5361\u914D\u7F6E\u76EE\u5F55<code>/etc/sysconfig/network-scripts/</code>,\u627E\u5230\u7F51\u5361\u914D\u7F6E\u6587\u4EF6\uFF0C\u8FD9\u91CC\u4EE5<code>ifcfg-ens33</code>\u4E3A\u4F8B\uFF0C\u62F7\u8D1D\u5E76\u521B\u5EFA\u5B50\u63A5\u53E3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp ifcfg-ens33 ifcfg-ens33:1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4FEE\u6539\u5B50\u63A5\u53E3\u914D\u7F6E\u5982\u4E0B</p><ul><li>\u914D\u7F6E\u4E2D\u7684 192.168.1.150 \u5C31\u662Fvip\uFF0C\u662F\u63D0\u4F9B\u7ED9\u5916\u7F51\u7528\u6237\u8BBF\u95EE\u7684ip\u5730\u5740</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DEVICE=&quot;ens33:1&quot;
ONBOOT=&quot;yes&quot;
IPADDR=192.168.1.150
NETMASK=255.255.255.0
BOOTPROTO=static
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li>\u91CD\u542F\u7F51\u7EDC\u670D\u52A1</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>service network restart
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u91CD\u542F\u6210\u529F\u540E\uFF0Cip addr \u67E5\u770B\u4E00\u4E0B\uFF0C\u4F60\u4F1A\u53D1\u73B0\u591A\u4E86\u4E00\u4E2Aip\uFF0C\u4E5F\u5C31\u662F\u865A\u62DFip\uFF08vip\uFF09</p><blockquote><p>\u6CE8\u610F\uFF1A\u963F\u91CC\u4E91\u4E0D\u652F\u6301\u914D\u7F6E\u7F51\u5361\uFF0C\u9700\u8981\u8D2D\u4E70\u76F8\u5E94\u7684\u8D1F\u8F7D\u5747\u8861\u670D\u52A1\uFF0C\u817E\u8BAF\u4E91\u652F\u6301\u914D\u7F6E\u7F51\u5361\uFF0C\u4F46\u9700\u8981\u8D2D\u4E70\u7F51\u5361\u652F\u6301\uFF0C\u4E00\u4E2A\u7F51\u5361\u652F\u630110\u4E2A\u865A\u62DFip\u914D\u7F6E</p></blockquote><p>(2)\u5B89\u88C5ipvsadm</p><p>\u5982\u4ECA\u7684centos\u90FD\u96C6\u6210\u4E86LVS\uFF0C\u6240\u4EE5ipvs\u662F\u81EA\u5E26\u7684\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u5B89\u88C5ipvsadm\u5373\u53EF\uFF08ipvsadm\u662F\u7BA1\u7406\u96C6\u7FA4\u7684\u5DE5\u5177\uFF0C\u901A\u8FC7ipvs\u53EF\u4EE5\u7BA1\u7406\u96C6\u7FA4\uFF0C\u67E5\u770B\u96C6\u7FA4\u7B49\u64CD\u4F5C\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install ipvsadm
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>(3)\u914D\u7F6E\u670D\u52A1\u5668\uFF08RS\uFF09\u7684\u865A\u62DFip</p><p>\u8FDB\u5165\u7F51\u5361\u914D\u7F6E\u76EE\u5F55<code>/etc/sysconfig/network-scripts/</code>,\u627E\u5230<code>ifcfg-lo</code>\uFF0C\u62F7\u8D1D\u5E76\u521B\u5EFA\u5B50\u63A5\u53E3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp ifcfg-lo ifcfg-lo:1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4FEE\u6539\u5B50\u63A5\u53E3\u914D\u7F6E\u5982\u4E0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>DEVICE=&quot;lo:1&quot;
IPADDR=192.168.1.150
NETMASK=255.255.255.255
NETWORK=127.0.0.0
BROADCAST=127.255.255.255
ONBOOT=&quot;yes&quot;
NAME=loopback
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u91CD\u542F\u7F51\u7EDC\u670D\u52A1\u6210\u529F\u540E\uFF0C<code>ip addr</code> \u67E5\u770B\u4E00\u4E0B\uFF0C\u4F60\u4F1A\u53D1\u73B0\u591A\u4E86\u4E00\u4E2Aip\uFF0C\u4E5F\u5C31\u662F\u865A\u62DFip\uFF08vip\uFF09</p><p>(4)\u4E3A\u670D\u52A1\u5668\uFF08RS\uFF09\u914D\u7F6Earp</p><p>ARP\u54CD\u5E94\u7EA7\u522B\u4E0E\u901A\u544A\u884C\u4E3A\u53C2\u6570\u8BF4\u660E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>arp-ignore\uFF1AARP\u54CD\u5E94\u7EA7\u522B\uFF08\u5904\u7406\u8BF7\u6C42\uFF09
    0\uFF1A\u53EA\u8981\u672C\u673A\u914D\u7F6E\u4E86ip\uFF0C\u5C31\u80FD\u54CD\u5E94\u8BF7\u6C42
    1\uFF1A\u8BF7\u6C42\u7684\u76EE\u6807\u5730\u5740\u5230\u8FBE\u5BF9\u5E94\u7684\u7F51\u7EDC\u63A5\u53E3\uFF0C\u624D\u4F1A\u54CD\u5E94\u8BF7\u6C42
arp-announce\uFF1AARP\u901A\u544A\u884C\u4E3A\uFF08\u8FD4\u56DE\u54CD\u5E94\uFF09
    0\uFF1A\u672C\u673A\u4E0A\u4EFB\u4F55\u7F51\u7EDC\u63A5\u53E3\u90FD\u5411\u5916\u901A\u544A\uFF0C\u6240\u6709\u7684\u7F51\u5361\u90FD\u80FD\u63A5\u53D7\u5230\u901A\u544A
    1\uFF1A\u5C3D\u53EF\u80FD\u907F\u514D\u672C\u7F51\u5361\u4E0E\u4E0D\u5339\u914D\u7684\u76EE\u6807\u8FDB\u884C\u901A\u544A2\uFF1A\u53EA\u5728\u672C\u7F51\u5361\u901A\u544A
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6253\u5F00sysctl.conf:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vim /etc/sysctl.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u914D\u7F6E\u6240\u6709\u7F51\u5361\u3001\u9ED8\u8BA4\u7F51\u5361\u4EE5\u53CA\u865A\u62DF\u7F51\u5361\u7684arp\u54CD\u5E94\u7EA7\u522B\u548C\u901A\u544A\u884C\u4E3A\uFF0C\u5206\u522B\u5BF9\u5E94\uFF1Aall\uFF0Cdefault\uFF0Clo</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># configration for lvs 
net.ipv4.conf.all.arp_ignore = 1 
net.ipv4.conf.default.arp_ignore = 1 
net.ipv4.conf.lo.arp_ignore = 1 

net.ipv4.conf.all.arp_announce = 2 
net.ipv4.conf.default.arp_announce = 2 
net.ipv4.conf.lo.arp_announce = 2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u5237\u65B0\u914D\u7F6E\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sysctl -p
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u589E\u52A0\u4E00\u4E2A\u7F51\u5173\uFF0C\u7528\u4E8E\u63A5\u6536\u6570\u636E\u62A5\u6587\uFF0C\u5F53\u6709\u8BF7\u6C42\u5230\u672C\u673A\u540E\uFF0C\u4F1A\u4EA4\u7ED9lo\u53BB\u5904\u7406</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>route add -host 192.168.1.150 dev lo:1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5C06\u7F51\u5173\u6DFB\u52A0\u81F3\u5F00\u673A\u542F\u52A8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>echo &quot;route add -host 192.168.1.150 dev lo:1&quot; &gt;&gt; /etc/rc.local
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>(4)\u4F7F\u7528ipvsadm\u914D\u7F6E\u96C6\u7FA4\u89C4\u5219</p><p>\u521B\u5EFALVS\u8282\u70B9\uFF0C\u7528\u6237\u8BBF\u95EE\u7684\u96C6\u7FA4\u8C03\u5EA6\u8005</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ipvsadm -A -t 192.168.1.150:80 -s rr -p 5
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>-A\uFF1A\u6DFB\u52A0\u96C6\u7FA4</li><li>-t\uFF1Atcp\u534F\u8BAEip\u5730\u5740\uFF1A\u8BBE\u5B9A\u96C6\u7FA4\u7684\u8BBF\u95EE</li><li>ip\uFF1A\u4E5F\u5C31\u662FLVS\u7684\u865A\u62DFip</li><li>-s\uFF1A\u8BBE\u7F6E\u8D1F\u8F7D\u5747\u8861\u7684\u7B97\u6CD5\uFF0C</li><li>rr\uFF1A\u8868\u793A\u8F6E\u8BE2</li><li>-p\uFF1A\u8BBE\u7F6E\u8FDE\u63A5\u6301\u4E45\u5316\u7684\u65F6\u95F4,\u5728\u6307\u5B9A\u65F6\u95F4\u5185\u540C\u4E00\u4E2A\u7528\u6237\u7684\u8BF7\u6C42\u4F1A\u8BBF\u95EE\u5230\u540C\u4E00\u4E2A\u670D\u52A1\u5668\u4E2D</li></ul><p>\u521B\u5EFA\u591A\u53F0RS\u771F\u5B9E\u670D\u52A1\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ipvsadm -a -t 192.168.1.150:80 -r 192.168.1.171:80 -g 
ipvsadm -a -t 192.168.1.150:80 -r 192.168.1.172:80 -g
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>-a\uFF1A\u6DFB\u52A0\u771F\u5B9E\u670D\u52A1\u5668</li><li>-t\uFF1Atcp\u534F\u8BAE</li><li>-r\uFF1A\u771F\u5B9E\u670D\u52A1\u5668\u7684ip\u5730\u5740</li><li>-g\uFF1A\u8BBE\u5B9ADR\u6A21\u5F0F</li></ul><p>\u4FDD\u5B58\u5230\u89C4\u5219\u5E93\uFF0C\u5426\u5219\u91CD\u542F\u5931\u6548</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ipvsadm -S
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u68C0\u67E5\u96C6\u7FA4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#\u67E5\u770B\u96C6\u7FA4\u5217\u8868
ipvsadm -Ln
#\u67E5\u770B\u96C6\u7FA4\u72B6\u6001
ipvsadm -Ln --stats
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4E00\u4E9B\u5176\u4ED6\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> # \u91CD\u542Fipvsadm\uFF0C\u91CD\u542F\u540E\u9700\u8981\u91CD\u65B0\u914D\u7F6E 
 service ipvsadm restart 
 # \u67E5\u770B\u6301\u4E45\u5316\u8FDE\u63A5 
 ipvsadm -Ln --persistent-conn 
 # \u67E5\u770B\u8FDE\u63A5\u8BF7\u6C42\u8FC7\u671F\u65F6\u95F4\u4EE5\u53CA\u8BF7\u6C42\u6E90ip\u548C\u76EE\u6807ip 
 ipvsadm -Lnc 
 # \u8BBE\u7F6Etcp tcpfin udp \u7684\u8FC7\u671F\u65F6\u95F4\uFF08\u4E00\u822C\u4FDD\u6301\u9ED8\u8BA4\uFF09 
 ipvsadm --set 1 1 1 
 # \u67E5\u770B\u8FC7\u671F\u65F6\u95F4 
 ipvsadm -Ln --timeout
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>(5)\u8BBF\u95EE\u865A\u62DFip\uFF0C\u5B8C\u6210LVS\u642D\u5EFA</p><h3 id="\u9644-lvs\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u9644-lvs\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5" aria-hidden="true">#</a> \u9644\uFF1ALVS\u7684\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5</h3><h5 id="_1-\u9759\u6001\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-\u9759\u6001\u7B97\u6CD5" aria-hidden="true">#</a> (1)\u9759\u6001\u7B97\u6CD5</h5><p>\u9759\u6001\uFF1A\u6839\u636ELVS\u672C\u8EAB\u81EA\u7531\u7684\u56FA\u5B9A\u7684\u7B97\u6CD5\u5206\u53D1\u7528\u6237\u8BF7\u6C42\u3002</p><ul><li>\u8F6E\u8BE2\uFF08Round Robin \u7B80\u5199\u2019rr\u2019\uFF09\uFF1A\u8F6E\u8BE2\u7B97\u6CD5\u5047\u8BBE\u6240\u6709\u7684\u670D\u52A1\u5668\u5904\u7406\u8BF7\u6C42\u7684\u80FD\u529B\u90FD\u4E00\u6837\u7684\uFF0C\u8C03\u5EA6\u5668\u4F1A\u628A\u6240\u6709\u7684\u8BF7\u6C42\u5E73\u5747\u5206\u914D\u7ED9\u6BCF\u4E2A\u771F\u5B9E\u670D\u52A1\u5668\u3002\uFF08\u540CNginx\u7684\u8F6E\u8BE2\uFF09</li><li>\u52A0\u6743\u8F6E\u8BE2\uFF08Weight Round Robin \u7B80\u5199\u2019wrr\u2019\uFF09\uFF1A\u5B89\u88C5\u6743\u91CD\u6BD4\u4F8B\u5206\u914D\u7528\u6237\u8BF7\u6C42\u3002\u6743\u91CD\u8D8A\u9AD8\uFF0C\u88AB\u5206\u914D\u5230\u5904\u7406\u7684\u8BF7\u6C42\u8D8A\u591A\u3002\uFF08\u540CNginx\u7684\u6743\u91CD\uFF09</li><li>\u6E90\u5730\u5740\u6563\u5217\uFF08Source Hash \u7B80\u5199\u2019sh\u2019\uFF09\uFF1A\u540C\u4E00\u4E2A\u7528\u6237ip\u7684\u8BF7\u6C42\uFF0C\u4F1A\u7531\u540C\u4E00\u4E2ARS\u6765\u5904\u7406\u3002\uFF08\u540CNginx\u7684ip_hash\uFF09</li><li>\u76EE\u6807\u5730\u5740\u6563\u5217\uFF08Destination Hash \u7B80\u5199\u2019dh\u2019\uFF09\uFF1A\u6839\u636Eurl\u7684\u4E0D\u540C\uFF0C\u8BF7\u6C42\u5230\u4E0D\u540C\u7684RS\u3002\uFF08\u540CNginx\u7684url_hash\uFF09</li></ul><h5 id="_2-\u52A8\u6001\u7B97\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u52A8\u6001\u7B97\u6CD5" aria-hidden="true">#</a> (2)\u52A8\u6001\u7B97\u6CD5</h5><p>\u52A8\u6001\uFF1A\u4F1A\u6839\u636E\u6D41\u91CF\u7684\u4E0D\u540C\uFF0C\u6216\u8005\u670D\u52A1\u5668\u7684\u538B\u529B\u4E0D\u540C\u6765\u5206\u914D\u7528\u6237\u8BF7\u6C42\uFF0C\u8FD9\u662F\u52A8\u6001\u8BA1\u7B97\u7684\u3002</p><ul><li><p>\u6700\u5C0F\u8FDE\u63A5\u6570\uFF08Least Connections \u7B80\u5199\u2019lc\u2019\uFF09\uFF1A\u628A\u65B0\u7684\u8FDE\u63A5\u8BF7\u6C42\u5206\u914D\u5230\u5F53\u524D\u8FDE\u63A5\u6570\u6700\u5C0F\u7684\u670D\u52A1\u5668\u3002</p></li><li><p>\u52A0\u6743\u6700\u5C11\u8FDE\u63A5\u6570\uFF08Weight Least Connections \u7B80\u5199\u2019wlc\u2019\uFF09\uFF1A\u670D\u52A1\u5668\u7684\u5904\u7406\u6027\u80FD\u7528\u6570\u503C\u6765\u4EE3\u8868\uFF0C\u6743\u91CD\u8D8A\u5927\u5904\u7406\u7684\u8BF7\u6C42\u8D8A\u591A\u3002Real Server \u6709\u53EF\u80FD\u4F1A\u5B58\u5728\u6027\u80FD\u4E0A\u7684\u5DEE\u5F02\uFF0Cwlc\u52A8\u6001\u83B7\u53D6\u4E0D\u540C\u670D\u52A1\u5668\u7684\u8D1F\u8F7D\u72B6\u51B5\uFF0C\u628A\u8BF7\u6C42\u5206\u53D1\u5230\u6027\u80FD\u597D\u5E76\u4E14\u6BD4\u8F83\u7A7A\u95F2\u7684\u670D\u52A1\u5668\u3002</p></li><li><p>\u6700\u77ED\u671F\u671B\u5EF6\u8FDF\uFF08Shortest Expected Delay \u7B80\u5199\u2019sed\u2019\uFF09\uFF1A\u7279\u6B8A\u7684wlc\u7B97\u6CD5\u3002\u4E3E\u4F8B\u9610\u8FF0\uFF0C\u5047\u8BBE\u6709ABC\u4E09\u53F0\u670D\u52A1\u5668\uFF0C\u6743\u91CD\u5206\u522B\u4E3A1\u30012\u30013 \u3002\u5982\u679C\u4F7F\u7528wlc\u7B97\u6CD5\u7684\u8BDD\uFF0C\u5F53\u4E00\u4E2A\u65B0\u8BF7\u6C42\u8FDB\u6765\uFF0C\u5B83\u53EF\u80FD\u4F1A\u5206\u7ED9ABC\u4E2D\u7684\u4EFB\u610F\u4E00\u4E2A\u3002\u4F7F\u7528sed\u7B97\u6CD5\u540E\u4F1A\u8FDB\u884C\u5982\u4E0B\u8FD0\u7B97\uFF1A</p></li><li><ul><li>A\uFF1A\uFF081+1\uFF09/1=2</li><li>B\uFF1A\uFF081+2\uFF09/2=3/2</li><li>C\uFF1A\uFF081+3\uFF09/3=4/3</li></ul></li></ul><p>\u6700\u7EC8\u7ED3\u679C\uFF0C\u4F1A\u628A\u8FD9\u4E2A\u8BF7\u6C42\u4EA4\u7ED9\u5F97\u51FA\u8FD0\u7B97\u7ED3\u679C\u6700\u5C0F\u7684\u670D\u52A1\u5668\u3002\u6700\u5C11\u961F\u5217\u8C03\u5EA6\uFF08Never Queue \u7B80\u5199\u2019nq\u2019\uFF09\uFF1A\u6C38\u4E0D\u4F7F\u7528\u961F\u5217\u3002\u5982\u679C\u6709Real Server\u7684\u8FDE\u63A5\u6570\u7B49\u4E8E0\uFF0C\u5219\u76F4\u63A5\u628A\u8FD9\u4E2A\u8BF7\u6C42\u5206\u914D\u8FC7\u53BB\uFF0C\u4E0D\u9700\u8981\u5728\u6392\u961F\u7B49\u5F85\u8FD0\u7B97\u4E86\uFF08sed\u8FD0\u7B97\uFF09\u3002</p><h3 id="\u516B\u3001\u642D\u5EFAkeepalived-lvs-nginx\u9AD8\u53EF\u7528\u96C6\u7FA4\u8D1F\u8F7D\u5747\u8861" tabindex="-1"><a class="header-anchor" href="#\u516B\u3001\u642D\u5EFAkeepalived-lvs-nginx\u9AD8\u53EF\u7528\u96C6\u7FA4\u8D1F\u8F7D\u5747\u8861" aria-hidden="true">#</a> \u516B\u3001\u642D\u5EFAKeepalived+Lvs+Nginx\u9AD8\u53EF\u7528\u96C6\u7FA4\u8D1F\u8F7D\u5747\u8861</h3><p>\u5982\u679C\u539F\u5148\u670D\u52A1\u5668\u4E0A\u914D\u7F6E\u4E86LVS+nginx\u9700\u8981\u6E05\u7A7Aipvsadm\u4E2D\u7684\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ipvsadm -C
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u914D\u7F6E\u4E86<code>Keepalived+Nginx</code>\u53CC\u4E3B\u96C6\u7FA4\u4E5F\u9700\u8981\u53BB\u9664\u6389Keepalived\u4E2D\u539F\u5148\u7684\u914D\u7F6E\uFF0C\u6309\u7167\u7684\u540E\u6587\u8FDB\u884C\u914D\u7F6E</p><h5 id="_1-\u4F7F\u7528keepalived\u914D\u7F6Emaster-lvs" tabindex="-1"><a class="header-anchor" href="#_1-\u4F7F\u7528keepalived\u914D\u7F6Emaster-lvs" aria-hidden="true">#</a> (1)\u4F7F\u7528keepalived\u914D\u7F6EMaster LVS</h5><p>\u5728LVS\u7684\u673A\u5668\u4E0A\u5B89\u88C5keepalived\uFF0C\u5B89\u88C5\u8FC7\u7A0B\u53C2\u8003\u4E0A\u6587</p><p>(1)\u4FEE\u6539keepalived\u7684\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>global_defs {
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

#\u914D\u7F6E\u96C6\u7FA4\u8BBF\u95EE\u7684ip+\u7AEF\u53E3\uFF0C\u7AEF\u53E3\u548Cnginx\u4FDD\u6301\u4E00\u81F4
virtual_server 192.168.1.150 80{
    #\u5065\u5EB7\u68C0\u67E5\u7684\u65F6\u95F4\uFF0C\u5355\u4F4D\uFF1A\u79D2
    delay_loop 6
    #\u914D\u7F6E\u8D1F\u8F7D\u5747\u8861\u7684\u7B97\u6CD5\uFF0C\u9ED8\u8BA4\u7684\u8F6E\u8BE2
    lb_algo rr
    #\u8BBE\u7F6ELVS\u7684\u6A21\u5F0F NAT|TUN|DR
    lb-kind DR
    #\u8BBE\u7F6E\u4F1A\u8BDD\u6301\u4E45\u5316\u7684\u65F6\u95F4
    persistence_timeout 5
    #\u534F\u8BAE
    protocol TCP
    
    #\u914D\u7F6E\u8D1F\u8F7D\u5747\u8861\u7684\u771F\u5B9E\u670D\u52A1\u5668\uFF0C\u4E5F\u5C31\u662Fnginx\u8282\u70B9\u7684\u5177\u4F53\u7684ip\u5730\u5740
    real_server 192.168.1.171 80{
        #\u8F6E\u8BE2\u6743\u91CD\u914D\u6BD4
        weight 1
        #\u8BBE\u7F6E\u5065\u5EB7\u68C0\u67E5
        TCP_CHECK {
            #\u68C0\u67E580\u7AEF\u53E3
            connect_port 80
            #\u8D85\u65F6\u65F6\u95F4
            connect_timeout 2
            #\u91CD\u8BD5\u6B21\u6570
            nb_get_retry 2
            #\u91CD\u8BD5\u95F4\u9694\u65F6\u95F4
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><p>(2)\u542F\u52A8/\u91CD\u542Fkeepalived</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl restart keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h5 id="_2-\u4F7F\u7528keepalived\u914D\u7F6Ebackup-lvs" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528keepalived\u914D\u7F6Ebackup-lvs" aria-hidden="true">#</a> (2)\u4F7F\u7528keepalived\u914D\u7F6EBackup LVS</h5><p>\u914D\u7F6E\u5728\u5907\u7528\u673A\u4E0A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>global_defs {
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

#\u914D\u7F6E\u96C6\u7FA4\u8BBF\u95EE\u7684ip+\u7AEF\u53E3\uFF0C\u7AEF\u53E3\u548Cnginx\u4FDD\u6301\u4E00\u81F4
virtual_server 192.168.1.150 80{
    #\u5065\u5EB7\u68C0\u67E5\u7684\u65F6\u95F4\uFF0C\u5355\u4F4D\uFF1A\u79D2
    delay_loop 6
    #\u914D\u7F6E\u8D1F\u8F7D\u5747\u8861\u7684\u7B97\u6CD5\uFF0C\u9ED8\u8BA4\u7684\u8F6E\u8BE2
    lb_algo rr
    #\u8BBE\u7F6ELVS\u7684\u6A21\u5F0F NAT|TUN|DR
    lb-kind DR
    #\u8BBE\u7F6E\u4F1A\u8BDD\u6301\u4E45\u5316\u7684\u65F6\u95F4
    persistence_timeout 5
    #\u534F\u8BAE
    protocol TCP
    
    #\u914D\u7F6E\u8D1F\u8F7D\u5747\u8861\u7684\u771F\u5B9E\u670D\u52A1\u5668\uFF0C\u4E5F\u5C31\u662Fnginx\u8282\u70B9\u7684\u5177\u4F53\u7684ip\u5730\u5740
    real_server 192.168.1.171 80{
        #\u8F6E\u8BE2\u6743\u91CD\u914D\u6BD4
        weight 1
        #\u8BBE\u7F6E\u5065\u5EB7\u68C0\u67E5
        TCP_CHECK {
            #\u68C0\u67E580\u7AEF\u53E3
            connect_port 80
            #\u8D85\u65F6\u65F6\u95F4
            connect_timeout 2
            #\u91CD\u8BD5\u6B21\u6570
            nb_get_retry 2
            #\u91CD\u8BD5\u95F4\u9694\u65F6\u95F4
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div>`,207);function r(l,i){return a}var c=n(s,[["render",r],["__file","Nginx\u4ECE\u5B89\u88C5\u5230\u9AD8\u53EF\u7528.html.vue"]]);export{c as default};
