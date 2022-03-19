<template><h1 id="python安装源" tabindex="-1"><a class="header-anchor" href="#python安装源" aria-hidden="true">#</a> python安装源</h1>
<p>在<code>C:\Users\Administrator\pip</code>下，新建<code>pip.ini</code>，输入以下内容：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token punctuation">[</span><span class="token keyword">global</span><span class="token punctuation">]</span>
timeout <span class="token operator">=</span> <span class="token number">6000</span>
index<span class="token operator">-</span>url <span class="token operator">=</span> https<span class="token punctuation">:</span><span class="token operator">//</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>pypi<span class="token operator">/</span>simple<span class="token operator">/</span>
<span class="token punctuation">[</span>install<span class="token punctuation">]</span>
use<span class="token operator">-</span>mirrors <span class="token operator">=</span> true
mirrors <span class="token operator">=</span> https<span class="token punctuation">:</span><span class="token operator">//</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>pypi<span class="token operator">/</span>simple<span class="token operator">/</span>
trusted<span class="token operator">-</span>host <span class="token operator">=</span> mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>其他：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token punctuation">[</span><span class="token keyword">global</span><span class="token punctuation">]</span>
<span class="token comment"># 阿里云</span>
index<span class="token operator">-</span>url <span class="token operator">=</span> https<span class="token punctuation">:</span><span class="token operator">//</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>pypi<span class="token operator">/</span>simple<span class="token operator">/</span> 
<span class="token comment"># 清华大学</span>
<span class="token comment"># index-url = https://pypi.tuna.tsinghua.edu.cn/simple/</span>
<span class="token comment"># 中国科技大学</span>
<span class="token comment"># index-url = https://pypi.mirrors.ustc.edu.cn/simple/ </span>
<span class="token comment"># 豆瓣</span>
<span class="token comment"># index-url = http://pypi.douban.com/simple </span>
<span class="token comment"># Python官方</span>
<span class="token comment"># index-url = https://pypi.python.org/simple/ </span>
<span class="token comment"># v2ex</span>
<span class="token comment"># index-url = http://pypi.v2ex.com/simple/ </span>
<span class="token comment"># 中国科学院</span>
<span class="token comment"># index-url = http://pypi.mirrors.opencas.cn/simple/ </span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></template>
