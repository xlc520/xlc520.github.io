import{_ as s,W as n,X as a,$ as e}from"./framework-06fee4ab.js";const t={},l=e(`<h1 id="ubuntu配置中文" tabindex="-1"><a class="header-anchor" href="#ubuntu配置中文" aria-hidden="true">#</a> Ubuntu配置中文</h1><p>1.查看当前语言</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token environment constant">$LANG</span>

en_US.UTF-8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.查看配置文件</p><div class="language-cobol line-numbers-mode" data-ext="cobol"><pre class="language-cobol"><code>cat <span class="token operator">/</span>etc<span class="token operator">/</span><span class="token keyword">default</span><span class="token operator">/</span>locale 

LANG<span class="token operator">=</span>en_US<span class="token punctuation">.</span>UTF-8 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.安装中文语言字符</p><div class="language-cobol line-numbers-mode" data-ext="cobol"><pre class="language-cobol"><code>sudo apt install language-pack-zh-han<span class="token operator">*</span> -y 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4.编辑配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/locale.gen

<span class="token number">1</span>）找到 <span class="token string">&quot;# zh_CN.UTF-8 UTF-8&quot;</span>并取消注释，然后保存并退出。
<span class="token number">2</span>）运行 
<span class="token function">sudo</span> locale-gen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>设置默认语言为中文 
<span class="token function">sudo</span> <span class="token function">vim</span> /etc/default/locale

修改文件内容
<span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LANGUAGE</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN:zh&quot;</span>
<span class="token assign-left variable">LC_CTYPE</span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_NUMERIC</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_TIME</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable">LC_COLLATE</span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_MONETARY</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable">LC_MESSAGES</span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_PAPER</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_NAME</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_ADDRESS</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_TELEPHONE</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_MEASUREMENT</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_IDENTIFICATION</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_ALL</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>

保存退出后查看
<span class="token function">cat</span> /etc/default/locale 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件立即生效</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/default/locale
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5.编辑配置文件 (可不做)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>输入命令
<span class="token function">sudo</span> <span class="token function">vim</span> /etc/environment

修改配置文件内容
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/game s:/usr/local/games:/snap/bin&quot;</span> 

<span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LANGUAGE</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN:zh&quot;</span>
<span class="token assign-left variable">LC_CTYPE</span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_NUMERIC</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_TIME</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable">LC_COLLATE</span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_MONETARY</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable">LC_MESSAGES</span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_PAPER</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_NAME</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_ADDRESS</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_TELEPHONE</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_MEASUREMENT</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_IDENTIFICATION</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_ALL</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>

保存退出后查看
<span class="token function">cat</span> /etc/environment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6.1重新启动电脑生效</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">reboot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>7.查看修改结果</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token environment constant">$LANG</span> 
zh_CN.UTF-8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>8.检查</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">date</span>
<span class="token number">2021</span>年 <span class="token number">12</span>月 <span class="token number">30</span>日 星期四 <span class="token number">17</span>:10:36 CST
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,20),i=[l];function o(p,c){return n(),a("div",null,i)}const d=s(t,[["render",o],["__file","Ubuntu配置中文.html.vue"]]);export{d as default};
