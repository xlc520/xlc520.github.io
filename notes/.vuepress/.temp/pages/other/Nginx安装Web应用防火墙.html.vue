<template><h1 id="nginx安装web应用防火墙" tabindex="-1"><a class="header-anchor" href="#nginx安装web应用防火墙" aria-hidden="true">#</a> Nginx安装Web应用防火墙</h1>
<p>LNMP一键安装包 ngx_lua_waf waf(web应用防火墙) 安装设置。WAF中文名是Web应用防火墙，WAF能够根据规则拦截SQL注入、恶意请求、黑客扫描等HTTP请求从而保护WEB应用的安全。</p>
<p>今天我们要说的是一个比较简单好用的基于lua的waf：ngx_lua_waf。它是一个基于lua-nginx-module(openresty)的web应用防火墙，https://github.com/loveshell/ngx_lua_waf。</p>
<p>用途：</p>
<ul>
<li>防止sql注入，本地包含，部分溢出，fuzzing测试，xss，SSRF等web攻击</li>
<li>防止svn/备份之类文件泄漏</li>
<li>防止ApacheBench之类压力测试工具的攻击</li>
<li>屏蔽常见的扫描黑客工具，扫描器</li>
<li>屏蔽异常的网络请求</li>
<li>屏蔽图片附件类目录php执行权限</li>
<li>防止webshell上传</li>
</ul>
<h2 id="ngx-lua-waf安装" tabindex="-1"><a class="header-anchor" href="#ngx-lua-waf安装" aria-hidden="true">#</a> ngx_lua_waf安装</h2>
<h3 id="_1-lua支持安装" tabindex="-1"><a class="header-anchor" href="#_1-lua支持安装" aria-hidden="true">#</a> 1. lua支持安装</h3>
<p>LNMP一键安装包从1.5开始增加了lua支持的选项，可以通过修改lnmp.conf中Enable_Nginx_Lua后的参数为 y 来启用lua，如果没安装lnmp，修改lnmp.conf后保存，安装完lnmp就是支持lua的，如果已经安装好lnmp，也是按前面修改lnmp.conf</p>
<p>然后lnmp安装包目录下运行<code>./upgrade.sh nginx</code> 升级nginx</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>./upgrade.sh nginx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输入当前nginx版本号或更新的nginx版本号，升级完成就是支持lua的了。如果出错，请重新下载完整版的LNMP安装包lnmp**-full.tar.gz，再次安装。</p>
<h3 id="_2-安装ngx-lua-waf" tabindex="-1"><a class="header-anchor" href="#_2-安装ngx-lua-waf" aria-hidden="true">#</a> 2. 安装ngx_lua_waf</h3>
<p>下载安装ngx_lua_waf：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>wget https://github.com/loveshell/ngx_lua_waf/archive/master.zip -O ngx_lua_waf.zip
unzip ngx_lua_waf.zip
mv ngx_lua_waf-master /usr/local/nginx/conf/waf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>nginx上设置并启用ngx_lua_waf</p>
<p>编辑 <code>/usr/local/nginx/conf/nginx.conf </code>在<strong>http段</strong>的 <code>server_tokens off</code>; 下面添加如下代码：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>lua_package_path "/usr/local/nginx/conf/waf/?.lua";
lua_shared_dict limit 10m;
init_by_lua_file /usr/local/nginx/conf/waf/init.lua;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>修改完成保存</p>
<p>如果要想在某个虚拟主机启用ngx_lua_waf可以修改对应虚拟主机的server段，在该server段中 root 网站目录行下面添加如下代码：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>access_by_lua_file /usr/local/nginx/conf/waf/waf.lua;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>修改完成保存</p>
<p>测试nginx配置文件：<code>/usr/local/nginx/sbin/nginx -t</code>
重载nginx配置生效：<code>/usr/local/nginx/sbin/nginx -s reload</code></p>
<p>如果测试和重载都没报错就已经生效。</p>
<p>可以通过访问 http://域名/test.php?id=../etc/passwd 来测试</p>
<p>提示：您的请求带有&gt;不合法参数，已被网站管理员设置拦截！说明已经正确设置</p>
<h3 id="_3-ngx-lua-waf防火墙配置" tabindex="-1"><a class="header-anchor" href="#_3-ngx-lua-waf防火墙配置" aria-hidden="true">#</a> 3. ngx_lua_waf防火墙配置</h3>
<p>ngx_lua_waf配置文件位置：<code>/usr/local/nginx/conf/waf/config.lua</code>
ngx_lua_waf配置文件参数说明：</p>
<div class="language-lua ext-lua line-numbers-mode"><pre v-pre class="language-lua"><code>RulePath <span class="token operator">=</span> “<span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>nginx<span class="token operator">/</span>conf<span class="token operator">/</span>waf<span class="token operator">/</span>wafconf<span class="token operator">/</span>”
–规则存放目录
attacklog <span class="token operator">=</span> “off”
–是否开启攻击信息记录，需要配置logdir
logdir <span class="token operator">=</span> “<span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>nginx<span class="token operator">/</span>logs<span class="token operator">/</span>hack<span class="token operator">/</span>”
–log存储目录，该目录需要用户自己新建，切需要nginx用户的可写权限
UrlDeny<span class="token operator">=</span>”on”
–是否拦截url访问
Redirect<span class="token operator">=</span>”on”
–是否拦截后重定向
CookieMatch <span class="token operator">=</span> “on”
–是否拦截cookie攻击
postMatch <span class="token operator">=</span> “on”
–是否拦截post攻击
whiteModule <span class="token operator">=</span> “on”
–是否开启URL白名单
black_fileExt<span class="token operator">=</span><span class="token punctuation">{</span>“php”<span class="token punctuation">,</span>”jsp”<span class="token punctuation">}</span>
–填写不允许上传文件后缀类型
ipWhitelist<span class="token operator">=</span><span class="token punctuation">{</span>“<span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span>”<span class="token punctuation">}</span>
–ip白名单，多个ip用逗号分隔
ipBlocklist<span class="token operator">=</span><span class="token punctuation">{</span>“<span class="token number">1.0</span><span class="token number">.0</span><span class="token number">.1</span>″<span class="token punctuation">}</span>
–ip黑名单，多个ip用逗号分隔
CCDeny<span class="token operator">=</span>”on”
–是否开启拦截cc攻击<span class="token punctuation">(</span>需要nginx<span class="token punctuation">.</span>conf的http段增加lua_shared_dict limit 10m<span class="token punctuation">;</span><span class="token punctuation">)</span>
CCrate <span class="token operator">=</span> “<span class="token number">100</span><span class="token operator">/</span><span class="token number">60</span>”
–设置cc攻击频率，单位为秒<span class="token punctuation">.</span>
–默认<span class="token number">1</span>分钟同一个IP只能请求同一个地址<span class="token number">100</span>次
html<span class="token operator">=</span><span class="token string">[[Please go away~~]]</span> –警告内容<span class="token punctuation">,</span>可在中括号内自定义
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>备注:不要乱动双引号，区分大小写</p>
<p>ngx_lua_waf安装到此结束。</p>
<h3 id="_4-ngx-lua-waf效果图" tabindex="-1"><a class="header-anchor" href="#_4-ngx-lua-waf效果图" aria-hidden="true">#</a> 4. ngx_lua_waf效果图</h3>
<p><img src="https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/ngcb15.jpg" alt="ngx_lua_waf waf(web应用防火墙)" loading="lazy">
<img src="https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/ngcb15-16419157753881.jpg" alt="ngx_lua_waf waf(web应用防火墙)" loading="lazy"></p>
</template>
