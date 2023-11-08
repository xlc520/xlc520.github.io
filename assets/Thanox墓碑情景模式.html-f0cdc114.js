import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as p,c as i,b as n,d as s,e as t,a as u}from"./app-e33eb8d4.js";const c={},l=n("h1",{id:"thanox墓碑情景模式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#thanox墓碑情景模式","aria-hidden":"true"},"#"),s(" Thanox墓碑情景模式")],-1),r=n("h2",{id:"最终合并2022-06-06",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#最终合并2022-06-06","aria-hidden":"true"},"#"),s(" 最终合并2022.06.06")],-1),d=n("p",null,"分为两个版本，普通版和音频焦点版，根据自己需求选一个",-1),v={href:"https://github.com/myflavor/NoANR/releases/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://coolstars.lanzoum.com/in97305v6ewj",target:"_blank",rel:"noopener noreferrer"},q={href:"https://github.com/Tornaco/Thanox/releases",target:"_blank",rel:"noopener noreferrer"},m={href:"https://xlc.lanzouh.com/ixU2G062x56d",target:"_blank",rel:"noopener noreferrer"},b=u(`<h3 id="普通版" tabindex="-1"><a class="header-anchor" href="#普通版" aria-hidden="true">#</a> 普通版</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NoActive&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;普通版-应用进入后台冻结进程&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;if(thanos.getActivityManager().isPkgSmartStandByEnabled(to)){su.exe(\\&quot;kill -CONT \`pgrep -f \\&quot;+ to + \\&quot;\`\\&quot;);su.exe(\\&quot;appops set \\&quot; +to + \\&quot; WAKE_LOCK default\\&quot;)}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;if(!thanos.getActivityManager().isPkgSmartStandByEnabled(from)){break}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;foreach (rule : thanos.getActivityManager().getAllStandbyRules()){if(rule.startsWith(\\&quot;KEEP\\&quot;) &amp;&amp; rule.contains(from + \\&quot;/\\&quot;)){break}}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;su.exe(\\&quot;appops set \\&quot; + from + \\&quot; WAKE_LOCK ignore\\&quot;);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Thread.sleep(2000);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;if(activity.getFrontAppPackage()!=from &amp;&amp; !thanos.windowManager.hasVisibleWindows(from)){su.exe(\\&quot;kill -STOP \`pgrep -f \\&quot;+ from +\\&quot;\`\\&quot;)};&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="音频焦点版" tabindex="-1"><a class="header-anchor" href="#音频焦点版" aria-hidden="true">#</a> 音频焦点版</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NoActive&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot; 音频焦点版-应用进入后台冻结进程&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;if(thanos.getActivityManager().isPkgSmartStandByEnabled(to)){su.exe(\\&quot;kill -CONT \`pgrep -f \\&quot;+ to + \\&quot;\`\\&quot;);su.exe(\\&quot;appops set \\&quot; +to + \\&quot; WAKE_LOCK default\\&quot;)}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;if(!thanos.getActivityManager().isPkgSmartStandByEnabled(from)){break}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;foreach (rule : thanos.getActivityManager().getAllStandbyRules()){if(rule.startsWith(\\&quot;KEEP\\&quot;) &amp;&amp; rule.contains(from + \\&quot;/\\&quot;)){break}}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;if(su.exe(\\&quot;dumpsys audio|grep client:|grep -v died|cut -d &#39; &#39; -f 6\\&quot;).out.contains(from)){break}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;su.exe(\\&quot;appops set \\&quot; + from + \\&quot; WAKE_LOCK ignore\\&quot;);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Thread.sleep(2000);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;if(activity.getFrontAppPackage()!=from &amp;&amp; !thanos.windowManager.hasVisibleWindows(from)){su.exe(\\&quot;kill -STOP \`pgrep -f \\&quot;+ from +\\&quot;\`\\&quot;)};&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;NoActive(Plus)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot; 音频焦点版-应用通知移除冻结进程&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;notificationRemoved &amp;&amp; thanos.getActivityManager().isPkgSmartStandByEnabled(pkgName)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;foreach (rule : thanos.getActivityManager().getAllStandbyRules()){if(rule.startsWith(\\&quot;KEEP\\&quot;) &amp;&amp; rule.contains(pkgName + \\&quot;/\\&quot;)){break}}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;su.exe(\\&quot;appops set \\&quot; + pkgName + \\&quot; WAKE_LOCK ignore\\&quot;);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;if(activity.getFrontAppPackage()!=from &amp;&amp; !thanos.windowManager.hasVisibleWindows(pkgName)){su.exe(\\&quot;kill -STOP \`pgrep -f \\&quot;+ pkgName +\\&quot;\`\\&quot;)};&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2022-06-05更新" tabindex="-1"><a class="header-anchor" href="#_2022-06-05更新" aria-hidden="true">#</a> 2022.06.05更新</h2><p>不再使用whiteApps全局变量，使用乖巧规则，即乖巧KEEP规则就是白名单</p><h3 id="解冻-通用" tabindex="-1"><a class="header-anchor" href="#解冻-通用" aria-hidden="true">#</a> 解冻(通用)</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;解冻进程(通用)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;当应用进入前台时解冻进程&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged &amp;&amp; thanos.getActivityManager().isPkgSmartStandByEnabled(to)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;su.exe(\\&quot;kill -CONT \`pgrep -f \\&quot;+ to + \\&quot;\`\\&quot;);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;su.exe(\\&quot;appops set \\&quot; +to + \\&quot; WAKE_LOCK default\\&quot;);&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>冻结有两个版本，一个普通版，一个跳过音频焦点版（获得音频焦点的应用不会被冻结，大部分音乐播放器在播放的时候都会获取音频焦点，暂停时取消焦点，部分流氓APP暂停不会取消音频焦点，由于是从shell取的值，可能部分机子会有问题？） 全局变量whiteApps可添加白名单APP跳过墓碑仅乖巧</p><h3 id="普通版-1" tabindex="-1"><a class="header-anchor" href="#普通版-1" aria-hidden="true">#</a> 普通版</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;冻结进程(AppOps)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;普通版-当应用进入后台时设置AppOps&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged &amp;&amp; thanos.getActivityManager().isPkgSmartStandByEnabled(from)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;foreach (rule : thanos.getActivityManager().getAllStandbyRules()){if(rule.startsWith(\\&quot;KEEP\\&quot;) &amp;&amp; rule.contains(from + \\&quot;/\\&quot;)){break}}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;su.exe(\\&quot;appops set \\&quot; + from + \\&quot; WAKE_LOCK ignore\\&quot;);&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;冻结进程&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;普通版-当应用进入后台时冻结进程&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;delay&quot;</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged &amp;&amp; thanos.getActivityManager().isPkgSmartStandByEnabled(from)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;foreach (rule : thanos.getActivityManager().getAllStandbyRules()){if(rule.startsWith(\\&quot;KEEP\\&quot;) &amp;&amp; rule.contains(from + \\&quot;/\\&quot;)){break}}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;if(activity.getFrontAppPackage()!=from &amp;&amp; !thanos.windowManager.hasVisibleWindows(from)){su.exe(\\&quot;kill -STOP \`pgrep -f \\&quot;+ from +\\&quot;\`\\&quot;)};&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="跳过音频焦点版" tabindex="-1"><a class="header-anchor" href="#跳过音频焦点版" aria-hidden="true">#</a> 跳过音频焦点版</h3><p>（推荐开启乖巧模式跳过通知的应用或者设置乖巧规则）</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;冻结进程(AppOps)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;跳过音频焦点版-当应用进入后台时设置AppOps&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged &amp;&amp; thanos.getActivityManager().isPkgSmartStandByEnabled(from)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;foreach (rule : thanos.getActivityManager().getAllStandbyRules()){if(rule.startsWith(\\&quot;KEEP\\&quot;) &amp;&amp; rule.contains(from + \\&quot;/\\&quot;)){break}}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;if(su.exe(\\&quot;dumpsys audio|grep client:|grep -v died|cut -d &#39; &#39; -f 6\\&quot;).out.contains(from)){break}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;su.exe(\\&quot;appops set \\&quot; + from + \\&quot; WAKE_LOCK ignore\\&quot;);&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;冻结进程&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;跳过音频焦点版-当应用进入后台时冻结进程&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;delay&quot;</span><span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span>
        <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged &amp;&amp; thanos.getActivityManager().isPkgSmartStandByEnabled(from)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;foreach (rule : thanos.getActivityManager().getAllStandbyRules()){if(rule.startsWith(\\&quot;KEEP\\&quot;) &amp;&amp; rule.contains(from + \\&quot;/\\&quot;)){break}}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;if(su.exe(\\&quot;dumpsys audio|grep client:|grep -v died|cut -d &#39; &#39; -f 6\\&quot;).out.contains(from)){break}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;if(activity.getFrontAppPackage()!=from &amp;&amp; !thanos.windowManager.hasVisibleWindows(from)){su.exe(\\&quot;kill -STOP \`pgrep -f \\&quot;+ from +\\&quot;\`\\&quot;)};&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;冻结进程(增强)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;跳过音频焦点版-当应用通知移除时冻结进程&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;notificationRemoved &amp;&amp; thanos.getActivityManager().isPkgSmartStandByEnabled(pkgName)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;foreach (rule : thanos.getActivityManager().getAllStandbyRules()){if(rule.startsWith(\\&quot;KEEP\\&quot;) &amp;&amp; rule.contains(pkgName + \\&quot;/\\&quot;)){break}}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;su.exe(\\&quot;appops set \\&quot; + pkgName + \\&quot; WAKE_LOCK ignore\\&quot;);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;if(activity.getFrontAppPackage()!=from &amp;&amp; !thanos.windowManager.hasVisibleWindows(pkgName)){su.exe(\\&quot;kill -STOP \`pgrep -f \\&quot;+ pkgName +\\&quot;\`\\&quot;)};&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="合并" tabindex="-1"><a class="header-anchor" href="#合并" aria-hidden="true">#</a> 合并</h2><h3 id="合并冻结" tabindex="-1"><a class="header-anchor" href="#合并冻结" aria-hidden="true">#</a> 合并冻结</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;冻结进程(合并)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;当应用进入后台时冻结进程&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">-1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged &amp;&amp; thanos.getActivityManager().isPkgSmartStandByEnabled(from)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;foreach (rule : thanos.getActivityManager().getAllStandbyRules()){if(rule.startsWith(\\&quot;KEEP\\&quot;) &amp;&amp; rule.contains(from + \\&quot;/\\&quot;)){break}}&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;su.exe(\\&quot;appops set \\&quot; + from + \\&quot; WAKE_LOCK ignore\\&quot;);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Thread.sleep(2000);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;if(activity.getFrontAppPackage()!=from &amp;&amp; !thanos.windowManager.hasVisibleWindows(from)){su.exe(\\&quot;kill -STOP \`pgrep -f \\&quot;+ from +\\&quot;\`\\&quot;)};&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="合并解冻" tabindex="-1"><a class="header-anchor" href="#合并解冻" aria-hidden="true">#</a> 合并解冻</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;解冻进程(合并)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;当应用进入前台时解冻进程&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged &amp;&amp; thanos.getActivityManager().isPkgSmartStandByEnabled(to)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;su.exe(\\&quot;kill -CONT \`pgrep -f \\&quot;+ to + \\&quot;\`\\&quot;);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;su.exe(\\&quot;appops set \\&quot; +to + \\&quot; WAKE_LOCK default\\&quot;);&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="微信" tabindex="-1"><a class="header-anchor" href="#微信" aria-hidden="true">#</a> 微信</h2><h3 id="微信保活" tabindex="-1"><a class="header-anchor" href="#微信保活" aria-hidden="true">#</a> 微信保活</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;微信保活(包)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;微信被杀死时，启动微信进程&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pkgKilled == true &amp;&amp; pkgName==\\&quot;com.tencent.mm\\&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;Thread.sleep(4000);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;activity.launchProcessForPackage(\\&quot;com.tencent.mm\\&quot;)&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="微信保活-自改" tabindex="-1"><a class="header-anchor" href="#微信保活-自改" aria-hidden="true">#</a> 微信保活(自改)</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;微信保活双服务(自改)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;微信被杀死时，启动微信进程&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pkgKilled == true &amp;&amp; pkgName==\\&quot;com.tencent.mm\\&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;Thread.sleep(4000);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;su.exe(&#39;am start-foreground-service com.tencent.mm/com.tencent.mm.booter.CoreService&#39;);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;su.exe(&#39;am start-foreground-service com.tencent.mm/com.tencent.mm.service.ProcessService$MMProcessService&#39;);&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="微信保活3-自改" tabindex="-1"><a class="header-anchor" href="#微信保活3-自改" aria-hidden="true">#</a> 微信保活3(自改)</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;微信保活多服务(自改)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;微信被杀死时，启动微信进程&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pkgKilled == true &amp;&amp; pkgName==\\&quot;com.tencent.mm\\&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;Thread.sleep(4000);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;su.exe(&#39;am start-foreground-service com.tencent.mm/com.tencent.mm.booter.CoreService&#39;);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Thread.sleep(200);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;su.exe(&#39;am start-foreground-service com.tencent.mm/com.tencent.mm.service.ProcessService$MMProcessService&#39;);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Thread.sleep(200);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;su.exe(&#39;am start-foreground-service com.tencent.mm/com.tencent.mm.ipcinvoker.wx_extension.service.MainProcessIPCService&#39;);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Thread.sleep(200);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;su.exe(&#39;am start-foreground-service com.tencent.mm/com.tencent.mm.ipcinvoker.wx_extension.service.PushProcessIPCService&#39;);&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="微信进程优化" tabindex="-1"><a class="header-anchor" href="#微信进程优化" aria-hidden="true">#</a> 微信进程优化</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;微信进程优化&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;优化保留双进程&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged == true &amp;&amp; from == \\&quot;com.tencent.mm\\&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;Thread.sleep(8000);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;su.exe(\\&quot;ps -ef|grep com.tencent.mm:|grep -v :push|grep -v grep|awk &#39;{print $2}&#39;|xargs kill -9\\&quot;)&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="qq" tabindex="-1"><a class="header-anchor" href="#qq" aria-hidden="true">#</a> QQ</h2><h3 id="qq保活" tabindex="-1"><a class="header-anchor" href="#qq保活" aria-hidden="true">#</a> QQ保活</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;QQ保活&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;QQ被杀死时，启动QQ进程&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pkgKilled == true &amp;&amp; (pkgName == \\&quot;com.tencent.mobileqq\\&quot;)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span>
        <span class="token punctuation">[</span>
            <span class="token string">&quot;Thread.sleep(4000);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;su.exe(&#39;am start-foreground-service com.tencent.mobileqq/com.tencent.mobileqq.msf.service.MsfService&#39;);&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="qq保活2" tabindex="-1"><a class="header-anchor" href="#qq保活2" aria-hidden="true">#</a> QQ保活2</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;QQ保活(包)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;QQ被杀死时，启动QQ进程&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pkgKilled == true &amp;&amp; pkgName==\\&quot;com.tencent.mobileqq\\&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;Thread.sleep(4000);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;activity.launchProcessForPackage(\\&quot;com.tencent.mobileqq\\&quot;)&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="qq保活3" tabindex="-1"><a class="header-anchor" href="#qq保活3" aria-hidden="true">#</a> QQ保活3</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;QQ保活多服务(自改)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;QQ被杀死时，启动QQ进程&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pkgKilled == true &amp;&amp; (pkgName == \\&quot;com.tencent.mobileqq\\&quot;)&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span>
        <span class="token punctuation">[</span>
            <span class="token string">&quot;Thread.sleep(4000);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;activity.launchProcessForPackage(\\&quot;com.tencent.mobileqq\\&quot;)&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Thread.sleep(400);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;su.exe(&#39;am start-foreground-service com.tencent.mobileqq/com.tencent.mobileqq.msf.service.MsfService&#39;);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;Thread.sleep(400);&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;su.exe(&#39;am start-foreground-service com.tencent.mobileqq/com.tencent.mobileqq.msf.service.MSFAliveJobService&#39;);&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="qq进程优化" tabindex="-1"><a class="header-anchor" href="#qq进程优化" aria-hidden="true">#</a> QQ进程优化</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;QQ进程优化&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;优化保留双进程&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;priority&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;condition&quot;</span><span class="token operator">:</span> <span class="token string">&quot;frontPkgChanged == true &amp;&amp; from == \\&quot;com.tencent.mobileqq\\&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;actions&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Thread.sleep(5000);&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;su.exe(\\&quot;ps -ef|grep com.tencent.mobileqq:|grep -v :MSF|grep -v grep|awk &#39;{print $2}&#39;|xargs kill -9\\&quot;)&quot;</span>
        <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41);function g(h,y){const a=o("ExternalLinkIcon");return p(),i("div",null,[l,r,d,n("p",null,[s("搭配"),n("a",v,[s("NoANR(点击下载)"),t(a)])]),n("p",null,[n("a",k,[s("Thanox3.9.9(点击下载)"),t(a)]),n("a",q,[s("github"),t(a)])]),n("p",null,[n("a",m,[s("Thanox3.9.9row"),t(a)])]),b])}const P=e(c,[["render",g],["__file","Thanox墓碑情景模式.html.vue"]]);export{P as default};
