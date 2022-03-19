<template><h1 id="bing必应api" tabindex="-1"><a class="header-anchor" href="#bing必应api" aria-hidden="true">#</a> Bing必应API</h1>
<p>http://xlc.pp.ua/bing-api/index.php?rand=true</p>
<h2 id="_1" tabindex="-1"><a class="header-anchor" href="#_1" aria-hidden="true">#</a> 1</h2>
<p>http://cn.bing.com/HPImageArchive.aspx?idx=0&amp;n=1</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>https://cn.bing.com/HPImageArchive.aspx?idx=0&amp;n=1
https://cn.bing.com/HPImageArchive.aspx?format=xml&amp;cc=jp&amp;idx=0&amp;n=1
如果我们想浏览昨天，前天的图片呢？
 
回到最初的网址上，http://cn.bing.com/HPImageArchive.aspx?idx=0&amp;n=1 在这里，更换 idx= 这个参数就可以了。
 
 如 http://cn.bing.com/HPImageArchive.aspx?idx=1&amp;n=1 将要得到昨天的图片
http://cn.bing.com/HPImageArchive.aspx?idx=2&amp;n=1得到前天的图片
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_2" tabindex="-1"><a class="header-anchor" href="#_2" aria-hidden="true">#</a> 2</h2>
<p>https://bing.biturl.top/?resolution=1920&amp;format=image&amp;index=0&amp;mkt=zh-CN</p>
<h3 id="_3" tabindex="-1"><a class="header-anchor" href="#_3" aria-hidden="true">#</a> 3</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1. 访问 https://api.ioliu.cn/bing/ , 返回bing每日最新背景图, 可选参数[w,h]
2. 访问 https://api.ioliu.cn/bing/?d=n (n>=0), 返回以当日为起点第n天前的壁纸, 可选参数[w,h]
3. 访问 https://api.ioliu.cn/bing/json/ , 返回bing每日最新壁纸的相关(介绍、图片地址等)信息(json格式), 可选参数[callback].
4. 访问 https://api.ioliu.cn/bing/rand/ , 返回随机图片, 可选参数[w,h]
5. 访问 https://api.ioliu.cn/bing/blur/ , 返回高斯模糊图片, 可选参数[d,w,h]
   带[w,h]用法： https://api.ioliu.cn/bing/rand/?w=1920&amp;h=1200

目前已知图片分辨率
1920x1200   1920x1080    1366x768   1280x768    
1024x768    800x600       800x480   768x1280  
720x1280    640x480       480x800   400x240     
320x240     240x320 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="_4" tabindex="-1"><a class="header-anchor" href="#_4" aria-hidden="true">#</a> 4</h2>
<p>https://www.talklee.com/api/bing/</p>
<p>调用参数：</p>
<table>
<thead>
<tr>
<th style="text-align:left">参数代码</th>
<th style="text-align:left">参数含义</th>
<th style="text-align:left">可用参数</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">rand</td>
<td style="text-align:left">是否随机显示最近8天内的图片</td>
<td style="text-align:left">true or false</td>
</tr>
<tr>
<td style="text-align:left">day</td>
<td style="text-align:left">显示指定的最近图片</td>
<td style="text-align:left">-1，0，1，2，3，4，5，6，7(0为今天，-1为昨天)</td>
</tr>
<tr>
<td style="text-align:left">size</td>
<td style="text-align:left">指定获取图片大小</td>
<td style="text-align:left">详见下方可用分辨率</td>
</tr>
<tr>
<td style="text-align:left">info</td>
<td style="text-align:left">获取图片基础信息（json格式）</td>
<td style="text-align:left">true or false</td>
</tr>
</tbody>
</table>
<ul>
<li>以上所有参数均非必要，默认参数为rand=false，day=0，size=1920×1080，info=false</li>
</ul>
<p>可用分辨率：</p>
<ul>
<li>1920×1080</li>
<li>1366×768</li>
<li>1280×768</li>
<li>1024×768</li>
<li>800×600</li>
<li>800×480</li>
<li>768×1280</li>
<li>720×1280</li>
<li>640×480</li>
<li>480×800</li>
<li>400×240</li>
<li>320×240</li>
<li>240×320</li>
<li>注：中间的x为英文字母x</li>
</ul>
<h2 id="_5" tabindex="-1"><a class="header-anchor" href="#_5" aria-hidden="true">#</a> 5</h2>
<h3 id="bing-pictures-interface-必应壁纸接口" tabindex="-1"><a class="header-anchor" href="#bing-pictures-interface-必应壁纸接口" aria-hidden="true">#</a> Bing Pictures Interface | 必应壁纸接口</h3>
<blockquote>
<p>🔨 <code>Bing 壁纸 Api</code>重装上阵啦 😄 <a href="http://bing.ioliu.cn/" target="_blank" rel="noopener noreferrer">http://bing.ioliu.cn<ExternalLinkIcon/></a></p>
</blockquote>
<h3 id="目前开放的壁纸接口" tabindex="-1"><a class="header-anchor" href="#目前开放的壁纸接口" aria-hidden="true">#</a> 目前开放的壁纸接口：</h3>
<ul>
<li>
<p><code>/v1{d,w,h,p,size,callback}</code> 返回今日的壁纸完整数据(<code>可选参数{d,w,h,p,size,callback}</code>)：</p>
<blockquote>
<p>若指定参数<code>{w,h}</code> ，则直接返回图片</p>
</blockquote>
</li>
</ul>
<table>
<thead>
<tr>
<th>参数名</th>
<th>类型</th>
<th>是否必要</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>d</td>
<td><code>Int</code></td>
<td>否</td>
<td>自今日起第<code>d</code>天前的数据</td>
</tr>
<tr>
<td>w</td>
<td><code>Int</code></td>
<td>否</td>
<td>图片宽度</td>
</tr>
<tr>
<td>h</td>
<td><code>Int</code></td>
<td>否</td>
<td>图片高度</td>
</tr>
<tr>
<td>p</td>
<td><code>Int</code></td>
<td>否</td>
<td><code>Page 页码</code>:第x页</td>
</tr>
<tr>
<td>size</td>
<td><code>Int</code></td>
<td>否</td>
<td><code>Size 条数</code>:每页条数</td>
</tr>
<tr>
<td>callback</td>
<td><code>String</code></td>
<td>否</td>
<td>JSONP的回调函数名</td>
</tr>
</tbody>
</table>
<ul>
<li><code>/v1/rand{w,h,type,callback}</code> 返回随机的壁纸(<code>可选参数{w,h,type,callback}</code>)：</li>
</ul>
<table>
<thead>
<tr>
<th>参数名</th>
<th>类型</th>
<th>是否必要</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>w</td>
<td><code>Int</code></td>
<td>否</td>
<td>图片宽度</td>
</tr>
<tr>
<td>h</td>
<td><code>Int</code></td>
<td>否</td>
<td>图片高度</td>
</tr>
<tr>
<td>type</td>
<td><code>String</code></td>
<td>否</td>
<td>返回值类型(<code>json</code>)</td>
</tr>
<tr>
<td>callback</td>
<td><code>String</code></td>
<td>否</td>
<td>JSONP的回调函数名</td>
</tr>
</tbody>
</table>
<ul>
<li><code>/v1/blur{d,w,h,r}</code> 返回高斯模糊壁纸(<code>可选参数{d,w,h,r}</code>)：</li>
</ul>
<table>
<thead>
<tr>
<th>参数名</th>
<th>类型</th>
<th>是否必要</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>d</td>
<td><code>Int</code></td>
<td>否</td>
<td>自今日起第<code>d</code>天前的数据</td>
</tr>
<tr>
<td>w</td>
<td><code>Int</code></td>
<td>否</td>
<td>图片宽度</td>
</tr>
<tr>
<td>h</td>
<td><code>Int</code></td>
<td>否</td>
<td>图片高度</td>
</tr>
<tr>
<td>r</td>
<td><code>Int</code></td>
<td>否</td>
<td>模糊半径(<code>1~50</code>)</td>
</tr>
</tbody>
</table>
<h3 id="⚠️-高斯模糊接口目前只支持指定分辨率-w-h-的图片-具体分辨率如下" tabindex="-1"><a class="header-anchor" href="#⚠️-高斯模糊接口目前只支持指定分辨率-w-h-的图片-具体分辨率如下" aria-hidden="true">#</a> <strong>⚠️</strong> <code>高斯模糊</code>接口目前只支持指定分辨率(<code>w,h</code>)的图片，具体分辨率如下：</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/**
 * 已知分辨率
 */
resolutions: [
    '1920x1200',
    '1920x1080',
    '1366x768',
    '1280x768',
    '1024x768',
    '800x600',
    '800x480',
    '768x1280',
    '720x1280',
    '640x480',
    '480x800',
    '400x240',
    '320x240',
    '240x320'
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="_6" tabindex="-1"><a class="header-anchor" href="#_6" aria-hidden="true">#</a> 6</h2>
<p><a href="http://bing.getlove.cn/bingImage" target="_blank" rel="noopener noreferrer">http://bing.getlove.cn/bingImage<ExternalLinkIcon/></a></p>
<h2 id="_7" tabindex="-1"><a class="header-anchor" href="#_7" aria-hidden="true">#</a> 7</h2>
<ul>
<li>https://api.7-89.cn/bing/today</li>
<li>https://api.kdcc.cn/img/</li>
<li>https://api.kdcc.cn/img/rand.php（随机）</li>
<li>https://api.kdcc.cn/img/jump.php</li>
<li>https://open.saintic.com/api/bingPic/</li>
<li>http://47.103.144.215:2020/showtoday</li>
<li>https://www.talklee.com/api/bing</li>
<li>https://api.dujin.org/bing/1920.php</li>
</ul>
<h2 id="代码一" tabindex="-1"><a class="header-anchor" href="#代码一" aria-hidden="true">#</a> 代码一</h2>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code>  <span class="token variable">$time</span> <span class="token operator">=</span> <span class="token function">date</span><span class="token punctuation">(</span><span class="token string double-quoted-string">"Ymd"</span><span class="token punctuation">,</span> <span class="token function">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token variable">$log</span> <span class="token operator">=</span> <span class="token string double-quoted-string">"./log/"</span> <span class="token operator">.</span> <span class="token variable">$time</span> <span class="token operator">.</span> <span class="token string single-quoted-string">'.txt'</span><span class="token punctuation">;</span>
    <span class="token comment">//判断缓存文件是否存在</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">file_exists</span><span class="token punctuation">(</span><span class="token variable">$log</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//读取缓存</span>
        <span class="token variable">$imgurl</span> <span class="token operator">=</span> <span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token variable">$log</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//跳转至图片地址</span>
        <span class="token function">header</span><span class="token punctuation">(</span><span class="token string double-quoted-string">"Location: <span class="token interpolation"><span class="token variable">$imgurl</span></span>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">//获取bing背景图</span>
        <span class="token variable">$str</span> <span class="token operator">=</span> <span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'http://cn.bing.com/HPImageArchive.aspx?format=js&amp;idx=0&amp;n=1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//解析Bing官方接口Json</span>
        <span class="token variable">$data</span> <span class="token operator">=</span> <span class="token function">json_decode</span><span class="token punctuation">(</span><span class="token variable">$str</span><span class="token punctuation">,</span><span class="token constant boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//七牛CDN镜像加速</span>
        <span class="token variable">$imgurl</span> <span class="token operator">=</span> <span class="token string single-quoted-string">'http://s.cn.bing.net'</span><span class="token operator">.</span><span class="token variable">$data</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'images'</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'urlbase'</span><span class="token punctuation">]</span><span class="token operator">.</span> <span class="token string single-quoted-string">'_1920x1080.jpg'</span><span class="token punctuation">;</span>
        <span class="token comment">//写入TXT用作缓存</span>
        <span class="token function">file_put_contents</span><span class="token punctuation">(</span><span class="token variable">$log</span><span class="token punctuation">,</span> <span class="token variable">$imgurl</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//跳转至图片地址</span>
        <span class="token function">header</span><span class="token punctuation">(</span><span class="token string double-quoted-string">"Location: <span class="token interpolation"><span class="token variable">$imgurl</span></span>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="代码二" tabindex="-1"><a class="header-anchor" href="#代码二" aria-hidden="true">#</a> 代码二</h2>
<div class="language-php ext-php line-numbers-mode"><pre v-pre class="language-php"><code><span class="token php language-php"><span class="token delimiter important">&lt;?php</span>
<span class="token comment">//判断是否随机调用</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'rand'</span><span class="token punctuation">]</span><span class="token operator">===</span><span class="token string single-quoted-string">'true'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token variable">$gettime</span> <span class="token operator">=</span> <span class="token function">rand</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
<span class="token comment">//若不为随机调用则判断是否指定日期</span>
  <span class="token variable">$gettimebase</span> <span class="token operator">=</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'day'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">empty</span><span class="token punctuation">(</span><span class="token variable">$gettimebase</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token variable">$gettime</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
    <span class="token variable">$gettime</span> <span class="token operator">=</span> <span class="token variable">$gettimebase</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//获取Bing Json信息</span>
<span class="token variable">$json_string</span> <span class="token operator">=</span> <span class="token function">file_get_contents</span><span class="token punctuation">(</span><span class="token string single-quoted-string">'https://www.bing.com/HPImageArchive.aspx?format=js&amp;idx='</span><span class="token operator">.</span><span class="token variable">$gettime</span><span class="token operator">.</span><span class="token string single-quoted-string">'&amp;n=1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//转换为PHP数组</span>
<span class="token variable">$data</span> <span class="token operator">=</span> <span class="token function">json_decode</span><span class="token punctuation">(</span><span class="token variable">$json_string</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//提取基础url</span>
<span class="token variable">$imgurlbase</span> <span class="token operator">=</span> <span class="token string double-quoted-string">"https://www.bing.com"</span><span class="token operator">.</span><span class="token variable">$data</span><span class="token operator">-></span><span class="token punctuation">{</span><span class="token string double-quoted-string">"images"</span><span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">-></span><span class="token punctuation">{</span><span class="token string double-quoted-string">"urlbase"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//判断是否指定图片大小</span>
<span class="token variable">$imgsizebase</span> <span class="token operator">=</span> <span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'size'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">empty</span><span class="token punctuation">(</span><span class="token variable">$imgsizebase</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token variable">$imgsize</span> <span class="token operator">=</span> <span class="token string double-quoted-string">"1920x1080"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
  <span class="token variable">$imgsize</span> <span class="token operator">=</span> <span class="token variable">$imgsizebase</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//建立完整url</span>
<span class="token variable">$imgurl</span> <span class="token operator">=</span> <span class="token variable">$imgurlbase</span><span class="token operator">.</span><span class="token string double-quoted-string">"_"</span><span class="token operator">.</span><span class="token variable">$imgsize</span><span class="token operator">.</span><span class="token string double-quoted-string">".jpg"</span><span class="token punctuation">;</span>
<span class="token comment">//获取其他信息</span>
<span class="token variable">$imgtime</span> <span class="token operator">=</span> <span class="token variable">$data</span><span class="token operator">-></span><span class="token punctuation">{</span><span class="token string double-quoted-string">"images"</span><span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">-></span><span class="token punctuation">{</span><span class="token string double-quoted-string">"startdate"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token variable">$imgtitle</span> <span class="token operator">=</span> <span class="token variable">$data</span><span class="token operator">-></span><span class="token punctuation">{</span><span class="token string double-quoted-string">"images"</span><span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">-></span><span class="token punctuation">{</span><span class="token string double-quoted-string">"copyright"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token variable">$imglink</span> <span class="token operator">=</span> <span class="token variable">$data</span><span class="token operator">-></span><span class="token punctuation">{</span><span class="token string double-quoted-string">"images"</span><span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">-></span><span class="token punctuation">{</span><span class="token string double-quoted-string">"copyrightlink"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//判断是否只获取图片信息</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$_GET</span><span class="token punctuation">[</span><span class="token string single-quoted-string">'info'</span><span class="token punctuation">]</span><span class="token operator">===</span><span class="token string single-quoted-string">'true'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">echo</span> <span class="token string double-quoted-string">"{title:"</span><span class="token operator">.</span><span class="token variable">$imgtitle</span><span class="token operator">.</span><span class="token string double-quoted-string">",url:"</span><span class="token operator">.</span><span class="token variable">$imgurl</span><span class="token operator">.</span><span class="token string double-quoted-string">",link:"</span><span class="token operator">.</span><span class="token variable">$imglink</span><span class="token operator">.</span><span class="token string double-quoted-string">",time:"</span><span class="token operator">.</span><span class="token variable">$imgtime</span><span class="token operator">.</span><span class="token string double-quoted-string">"}"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
  <span class="token comment">//若不是则跳转url</span>
  <span class="token function">header</span><span class="token punctuation">(</span><span class="token string double-quoted-string">"Location: <span class="token interpolation"><span class="token variable">$imgurl</span></span>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div></template>
