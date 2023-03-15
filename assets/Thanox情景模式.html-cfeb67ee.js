import{_ as p,W as o,X as i,Y as s,Z as n,a0 as t,$ as e,C as u}from"./framework-06fee4ab.js";const c={},l=e('<h1 id="thanox-情景模式" tabindex="-1"><a class="header-anchor" href="#thanox-情景模式" aria-hidden="true">#</a> Thanox 情景模式</h1><p>QQ、微信、TIM、网易云音乐，减少cpu、内存RAM占用 ——thanox情景模式自定义策略方案</p><p>QQ优能、微信优能、TIM优能、网易云优能——系列情景模式</p><p>之前发帖后一小会儿就删了，结果有情景模式流出，单个情景模式可能有不生效的情况。网易云音乐难以生效就单独发了个网易云的（结合乖巧模式），原本乖巧模式最好搭配后台启动规则使用，情景模式又要搭配乖巧模式使用。情景模式单独生效是意外之喜。</p><p>这里只是利用thanox情景模式触发执行命令，应该也可以用Xposed edge、Automate、Tasker、Macrodroid等软件实现。</p><p>原本是情景模式、乖巧模式、后台启动规则搭配使用。有些应用在单独使用情景模式时即可生效，有些需要加乖巧模式、后台启动规则，以及去除电池省电白名单。</p><h2 id="一、分别介绍-乖巧模式、后台启动规则、命令" tabindex="-1"><a class="header-anchor" href="#一、分别介绍-乖巧模式、后台启动规则、命令" aria-hidden="true">#</a> 一、分别介绍 乖巧模式、后台启动规则、命令</h2><p>1乖巧模式和乖巧规则参考</p><p>乖巧模式设置：开启停止服务、阻止服务重启选项。</p><p>乖巧规则：参照视频打开QQ 、TIM，在运行的服务中搜索msf。网易云音乐com.netease.cloudmusic/com.netease.cloudmusic.service.PlayService（关键字PlayService）</p><p>2后台启动规则三条： （并考虑把后台启动规则也添加到乖巧模式规则中）</p><p>DENY 包名 包名</p><p>DENY * 包名</p><p>DENY android 包名</p><p>（根据情况对三条规则进行增减。有时可能导致限制应用过于严格，就考虑减少一些规则，但在使用中发现限制效果并不是十分明显，比如DENY 包名 包名 本应达到只启动主进程、禁止主进程启动其他进程、打开应用只有一个进程的效果。）</p><p>3shell命令</p><p>kill -9杀掉程序运行时的非必要进程</p><p>kill -19 暂停 杀<em>不</em>掉的程序运行时的非必要进程</p><p>使用场景有前台和后台的不同， 前台运行时依然可以选择使用kill -19暂停非必要进程。</p><p>长时间不使用时用kill -9杀掉程序运行时的非必要进程，</p><p>频繁切换使用kill -19暂停程序运行时的非必要进程。</p>',21),r={href:"http://com.tencent.mm",target:"_blank",rel:"noopener noreferrer"},d={href:"http://com.tencent.mm",target:"_blank",rel:"noopener noreferrer"},k=s("p",null,"主进程以外的进程都包含“：”，所以搜索包名加冒号就排除了（保留）主进程，去除“：”就会把主进程也处理掉，比如在实现软件后台单进程运行的时候用（比如网易云\\QQ\\TIM,此时会关闭程序主界面，再次打开程序需要重新启动主进程、加载主界面)",-1),v={href:"http://com.tencent.mm",target:"_blank",rel:"noopener noreferrer"},m={href:"http://com.tencent.mm",target:"_blank",rel:"noopener noreferrer"},q={href:"http://com.tencent.mm",target:"_blank",rel:"noopener noreferrer"},g=s("h2",{id:"二情景模式",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#二情景模式","aria-hidden":"true"},"#"),n(" 二情景模式")],-1),b={href:"https://github.com/Tornaco/Thanox/releases/download/v1.2.2/plugin_su_enabler_1.2.2-dirty.tp",target:"_blank",rel:"noopener noreferrer"},h=e(`<p>2触发条件 比较实用的</p><p>&quot;condition&quot;: &quot;systemReady == true &quot;, 开机触发</p><p>&quot;condition&quot;: &quot;screenOff==true&quot;, 关闭屏幕触发</p><p>input.getLastKey() == 4 按返回键触发（支持按键模拟主页键返回键任务键，比如悬浮球菜单、Xposed edge手势）</p><p>3 QQ、微信、TIM、网易云音乐 情景模式说明：</p><p>微信：双进程版和暂停进程版</p><p>QQ、TIM、网易云音乐：双进程版和暂停进程版+单进程版</p><p>根据不同使用场景任意切换（支持按键模拟，比如悬浮球菜单、Xposed edge手势等）</p><p>双进程版：在应用程序界面按 &lt;主页键&gt; 导致离开应用程序界面时触发</p><p>和暂停进程版：在应用程序界面按 &lt;任务键&gt; 导致离开应用程序界面时触发</p><p>单进程版：在应用程序界面按 &lt;返回键&gt; 导致离开应用程序界面时触发</p><p>（通过通知栏、手势等使程序后台则不执行）</p><p>附情景模式：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;[测试用] &quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;点击home键关闭蓝牙且提示ok。 用以检查按键触发条件可用性和是否按键混淆(比如按下主页键再按任务键可能导致两个键均能触发，或点击屏幕任何位置都触发) 。(input.getLastKey == 187按下任务键触发,input.getLastKey == 4按下返回键触发。) (标准写法input.getLastKey() == 3) &quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;input.getLastKey == 3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;hw.disableBT()&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;ui.showShortToast(\\&quot;OK\\&quot;);&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="微信" tabindex="-1"><a class="header-anchor" href="#微信" aria-hidden="true">#</a> 微信：</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;微信优能 双进程&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;离开微信界面，结束主进程和push以外的微信进程。&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged == true &amp;&amp; from == \\&quot;com.tencent.mm\\&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;Thread.sleep(5000);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sh.exe(\\&quot;ps -ef|grep com.tencent.mm:|grep -v push|grep -v grep|awk &#39;{print $2}&#39;|xargs kill -19\\&quot;);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;Thread.sleep(30000);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sh.exe(\\&quot;ps -ef|grep com.tencent.mm:|grep -v push|grep -v grep|awk &#39;{print $2}&#39;|xargs kill -9\\&quot;);&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;微信优能 双进程 按键触发 测试&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;按下主页导致离开微信界面，结束主进程和push以外的微信进程。按其他键导致微信后台则不执行（通过通知栏、手势使程序后台也不执行）（支持按键模拟主页键返回键任务键，比如悬浮球菜单、Xposed edge手势）。（单双进程版原本是情景模式、乖巧模式、后台启动规则搭配使用的（暂停进程版不需要），单独使用情景模式或依然生效。）&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged == true &amp;&amp; from == \\&quot;com.tencent.mm\\&quot; &amp;&amp; input.getLastKey() == 3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;Thread.sleep(500);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sh.exe(\\&quot;ps -ef|grep com.tencent.mm:|grep -v push|grep -v grep|awk &#39;{print $2}&#39;|xargs kill -19\\&quot;);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;Thread.sleep(500);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sh.exe(\\&quot;ps -ef|grep com.tencent.mm:|grep -v push|grep -v grep|awk &#39;{print $2}&#39;|xargs kill -9\\&quot;);&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;微信优能 暂停进程版 按键触发 测试&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;按下任务键导致离开微信界面，暂停主进程和push以外的微信进程。按其他键导致微信后台则不执行（通过通知栏、手势使程序后台也不执行）（支持按键模拟主页键返回键任务键，比如悬浮球菜单、Xposed edge手势）。（单双进程版原本是情景模式、乖巧模式、后台启动规则搭配使用的（暂停进程版不需要），单独使用情景模式或依然生效。）&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged == true &amp;&amp; from == \\&quot;com.tencent.mm\\&quot; &amp;&amp; input.getLastKey() == 187&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;Thread.sleep(500);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sh.exe(\\&quot;ps -ef|grep com.tencent.mm:|grep -v push|grep -v grep|awk &#39;{print $2}&#39;|xargs kill -19\\&quot;);&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;微信优能 恢复被暂停的进程通用版 按键触发 测试&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;打开微信主程序界面 恢复被暂停的进程&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged == true &amp;&amp; to == \\&quot;com.tencent.mm\\&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;Thread.sleep(500);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sh.exe(\\&quot;ps -ef|grep com.tencent.mm|grep -v grep|awk &#39;{print $2}&#39;|xargs kill -18\\&quot;);&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="qq" tabindex="-1"><a class="header-anchor" href="#qq" aria-hidden="true">#</a> QQ:</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;QQ优能 双进程版&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;离开QQ主程序界面，结束主进程和MSF以外的进程。&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged == true &amp;&amp; from == \\&quot;tencent.mobileqq\\&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;Thread.sleep(5000);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sh.exe(\\&quot;ps -ef|grep com.tencent.mobileqq:|grep -v MSF|grep -v grep|awk &#39;{print $2}&#39;|xargs kill -19\\&quot;)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;Thread.sleep(30000);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sh.exe(\\&quot;ps -ef|grep com.tencent.mobileqq:|grep -v MSF|grep -v grep|awk &#39;{print $2}&#39;|xargs kill -9\\&quot;);&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;QQ优能 双进程版 按键触发 测试&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;按下主页键导致离开QQ主程序界面，结束主进程和MSF以外的进程。按其他键导致QQ后台则不执行（通过通知栏、手势使程序后台也不执行）（支持按键模拟主页键返回键任务键，比如悬浮球菜单、Xposed edge手势）。（单双进程版原本是情景模式、乖巧模式、后台启动规则搭配使用的（暂停进程版不需要），单独使用情景模式或依然生效。）&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged == true &amp;&amp; from == \\&quot;tencent.mobileqq\\&quot; &amp;&amp; input.getLastKey() == 3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;Thread.sleep(200);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sh.exe(\\&quot;ps -ef|grep com.tencent.mobileqq:|grep -v MSF|grep -v grep|awk &#39;{print $2}&#39;|xargs kill -19\\&quot;)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;Thread.sleep(200);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sh.exe(\\&quot;ps -ef|grep com.tencent.mobileqq:|grep -v MSF|grep -v grep|awk &#39;{print $2}&#39;|xargs kill -9\\&quot;);&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;QQ优能 单进程版 按键触发 测试&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;按下返回键导致离开QQ主程序界面，结束MSF以外的QQ进程。按其他键导致QQ后台则不执行（通过通知栏、手势使程序后台也不执行）（支持按键模拟主页键返回键任务键，比如悬浮球菜单、Xposed edge手势）。（单双进程版原本是情景模式、乖巧模式、后台启动规则搭配使用的（暂停进程版不需要），单独使用情景模式或依然生效。）&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged == true &amp;&amp; from == \\&quot;com.tencent.tim\\&quot; &amp;&amp; input.getLastKey() == 4&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;Thread.sleep(200);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sh.exe(\\&quot;ps -ef|grep com.tencent.mobileqq|grep -v MSF|grep -v grep|awk &#39;{print $2}&#39;|xargs kill -19\\&quot;)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;Thread.sleep(200);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sh.exe(\\&quot;ps -ef|grep com.tencent.mobileqq|grep -v MSF|grep -v grep|awk &#39;{print $2}&#39;|xargs kill -9\\&quot;);&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;QQ优能 暂停进程版 按键触发 测试&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;按下任务键导致离开QQ主程序界面，暂停MSF以外的QQ进程。按其他键导致QQ后台则不执行（通过通知栏、手势使程序后台也不执行）（支持按键模拟主页键返回键任务键，比如悬浮球菜单、Xposed edge手势）。（单双进程版原本是情景模式、乖巧模式、后台启动规则搭配使用的（暂停进程版不需要），单独使用情景模式或依然生效。）&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged == true &amp;&amp; from == \\&quot;com.tencent.tim\\&quot; &amp;&amp; input.getLastKey() == 187&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;Thread.sleep(200);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sh.exe(\\&quot;ps -ef|grep com.tencent.mobileqq|grep -v MSF|grep -v grep|awk &#39;{print $2}&#39;|xargs kill -19\\&quot;);&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;QQ优能 恢复被暂停的进程通用版 按键触发 测试&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;打开QQ主程序界面 恢复被暂停的进程（）&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged == true &amp;&amp; to == \\&quot;com.tencent.tim\\&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;Thread.sleep(200);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sh.exe(\\&quot;ps -ef|grep com.tencent.mobileqq|grep -v grep|awk &#39;{print $2}&#39;|xargs kill -18\\&quot;);&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tim" tabindex="-1"><a class="header-anchor" href="#tim" aria-hidden="true">#</a> TIM:</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TIM优能 双进程版 按键触发 测试&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;按下主页键导致TIM后台时，结束主进程和MSF以外的TIM进程。按其他键导致TIM后台则不执行（通过通知栏、手势使程序后台也不执行）（支持按键模拟主页键返回键任务键，比如悬浮球菜单、Xposed edge手势）。（单双进程版原本是情景模式、乖巧模式、后台启动规则搭配使用的（暂停进程版不需要），单独使用情景模式或依然生效。）&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged == true &amp;&amp; from == \\&quot;com.tencent.tim\\&quot; &amp;&amp; input.getLastKey() == 3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;Thread.sleep(200);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sh.exe(\\&quot;ps -ef|grep com.tencent.tim:|grep -v MSF|grep -v grep|awk &#39;{print $2}&#39;|xargs kill -19\\&quot;)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;Thread.sleep(200);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sh.exe(\\&quot;ps -ef|grep com.tencent.tim:|grep -v MSF|grep -v grep|awk &#39;{print $2}&#39;|xargs kill -9\\&quot;);&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TIM优能 单进程版 按键触发 测试&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;按下返回键导致TIM后台时，只保留MSF进程。按其他键导致TIM后台则不执行（通过通知栏、手势使程序后台也不执行）（支持按键模拟主页键返回键任务键，比如悬浮球菜单、Xposed edge手势）。（单双进程版原本是情景模式、乖巧模式、后台启动规则搭配使用的（暂停进程版不需要），单独使用情景模式或依然生效。）&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged == true &amp;&amp; from == \\&quot;com.tencent.tim\\&quot; &amp;&amp; input.getLastKey() == 4&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;Thread.sleep(200);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sh.exe(\\&quot;ps -ef|grep com.tencent.tim|grep -v MSF|grep -v grep|awk &#39;{print $2}&#39;|xargs kill -19\\&quot;)&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;Thread.sleep(200);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sh.exe(\\&quot;ps -ef|grep com.tencent.tim|grep -v MSF|grep -v grep|awk &#39;{print $2}&#39;|xargs kill -9\\&quot;);&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TIM优能 暂停进程版 按键触发 测试&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;按下任务键导致TIM后台时，暂停MSF以外的进程。按其他键导致TIM后台则不执行（通过通知栏、手势使程序后台也不执行）（支持按键模拟主页键返回键任务键，比如悬浮球菜单、Xposed edge手势）。（单双进程版原本是情景模式、乖巧模式、后台启动规则搭配使用的（暂停进程版不需要），单独使用情景模式或依然生效。）&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged == true &amp;&amp; from == \\&quot;com.tencent.tim\\&quot; &amp;&amp; input.getLastKey() == 187&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;Thread.sleep(200);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sh.exe(\\&quot;ps -ef|grep com.tencent.tim|grep -v MSF|grep -v grep|awk &#39;{print $2}&#39;|xargs kill -19\\&quot;)&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;TIM优能 恢复被暂停的进程通用版 按键触发 测试&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;打开TIM主程序界面 恢复被暂停的进程（）&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged == true &amp;&amp; to == \\&quot;com.tencent.tim\\&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;Thread.sleep(200);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sh.exe(\\&quot;ps -ef|grep com.tencent.tim|grep -v grep|awk &#39;{print $2}&#39;|xargs kill -18\\&quot;)&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="网易云" tabindex="-1"><a class="header-anchor" href="#网易云" aria-hidden="true">#</a> 网易云：</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;网易云优能 双进程版 按键触发 测试&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;按下主页键导致离开网易云主程序界面，结束主进程和play以外的网易云进程。按其他键导致网易云后台则不执行（通过通知栏、手势使程序后台也不执行）（支持按键模拟主页键返回键任务键，比如悬浮球菜单、Xposed edge手势）。（单双进程版原本是情景模式、乖巧模式、后台启动规则搭配使用的（暂停进程版不需要），单独使用情景模式或依然生效。）&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged == true &amp;&amp; from == \\&quot;com.netease.cloudmusic\\&quot; &amp;&amp; input.getLastKey() == 3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;Thread.sleep(1000);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sh.exe(\\&quot;ps -ef|grep com.netease.cloudmusic:|grep -v :play|grep -v grep|awk &#39;{print $2}&#39;|xargs kill -9\\&quot;);&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;网易云优能 单进程版 按键触发 测试 &quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;按下返回键导致离开网易云主程序界面，结束play以外的进程。按其他键导致网易云后台则不执行（通过通知栏、手势使程序后台也不执行）（支持按键模拟主页键返回键任务键，比如悬浮球菜单、Xposed edge手势）。（单双进程版原本是情景模式、乖巧模式、后台启动规则搭配使用的（暂停进程版不需要），单独使用情景模式或依然生效。）&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged == true &amp;&amp; from == \\&quot;com.netease.cloudmusic\\&quot; &amp;&amp; input.getLastKey() == 4&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;Thread.sleep(500);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sh.exe(\\&quot;ps -ef|grep com.netease.cloudmusic|grep -v :play|grep -v grep|awk &#39;{print $2}&#39;|xargs kill -9\\&quot;);&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;网易云优能 暂停进程版 按键触发 测试 &quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;按下任务键导致离开网易云主程序界面，暂停play以外的进程。按其他键导致网易云后台则不执行（通过通知栏、手势使程序后台也不执行）（支持按键模拟主页键返回键任务键，比如悬浮球菜单、Xposed edge手势）。（单双进程版原本是情景模式、乖巧模式、后台启动规则搭配使用的（暂停进程版不需要），单独使用情景模式或依然生效。）&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged == true &amp;&amp; from == \\&quot;com.netease.cloudmusic\\&quot; &amp;&amp; input.getLastKey() == 187&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;Thread.sleep(500);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sh.exe(\\&quot;ps -ef|grep com.netease.cloudmusic|grep -v :play|grep -v grep|awk &#39;{print $2}&#39;|xargs kill -19\\&quot;);&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;网易云优能 恢复被暂停的进程通用版 按键触发 测试 &quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;打开网易云主程序界面 恢复被暂停的进程（）&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged == true &amp;&amp; to == \\&quot;com.netease.cloudmusic\\&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;Thread.sleep(500);&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;sh.exe(\\&quot;ps -ef|grep com.netease.cloudmusic|grep -v grep|awk &#39;{print $2}&#39;|xargs kill -18\\&quot;);&quot;</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35);function y(x,f){const a=u("ExternalLinkIcon");return o(),i("div",null,[l,s("p",null,[n("含义：（ps -ef|grep "),s("a",r,[n("com.tencent.mm"),t(a)]),n(":|grep -v push|grep -v grep|awk '{print $2}'|xargs kill -9\\） ps（显示正在运行进程） -ef（前者基础上显示全部） | grep（搜索） "),s("a",d,[n("com.tencent.mm"),t(a)]),n("（微信包名） | grep -v push 排除在之前搜索结果中包含带有push的进程 | grep -v grep | awk '{print $2}' （提取进程pid）| xargs kill -9（杀死之前命令的输出结果--pid）。 单独运行某个“|”之前的部分确保输出结果正确。")]),k,s("p",null,[n("有些杀不掉的进程就用参照上面命令grep -v排除掉（也可以考虑禁掉对应的服务）然后附加一条针对那个进程单独添加一条命令ps -ef|grep "),s("a",v,[n("com.tencent.mm"),t(a)]),n(":push|grep -v grep|awk '{print $2}'|xargs kill -19 （把9改成19 、直接搜索完整进程名grep "),s("a",m,[n("com.tencent.mm"),t(a)]),n(":push），然后grep "),s("a",q,[n("com.tencent.mm"),t(a)]),n(":push就不会占用cpu了。主进程可能会随着使用程序的更多功能导致内存占用变高，重启程序可减少内存占用（乖巧模式视频中重启了微信）。")]),g,s("p",null,[n("1需要下载su插件 地址（新版thanox的插件仓库中已预存插件 直接安装即可）"),s("a",b,[n("查看链接"),t(a)]),n(" 设置插件允许 root。")]),h])}const T=p(c,[["render",y],["__file","Thanox情景模式.html.vue"]]);export{T as default};
