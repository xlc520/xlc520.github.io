import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,d as e}from"./app.be8508b9.js";const t={},p=e(`<h1 id="python-\u6279\u91CF\u4E0B\u8F7D\u67D0\u7F51\u9875\u7684\u6240\u6709\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#python-\u6279\u91CF\u4E0B\u8F7D\u67D0\u7F51\u9875\u7684\u6240\u6709\u56FE\u7247" aria-hidden="true">#</a> Python \u6279\u91CF\u4E0B\u8F7D\u67D0\u7F51\u9875\u7684\u6240\u6709\u56FE\u7247</h1><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># requests\u662F\u7B2C\u4E09\u65B9\u5E93\uFF1A\u7528pip install requests\u5B89\u88C5</span>
<span class="token keyword">import</span> requests

<span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup

<span class="token comment"># \u8BBE\u7F6E\u53D8\u91CF\u7528\u4E8E\u62FC\u63A5\u7F51\u5740</span>
page_number <span class="token operator">=</span> <span class="token number">4</span>

<span class="token comment"># \u7528while\u5FAA\u73AF\u63A7\u5236\u8BBF\u95EE\u7684\u7F51\u9875</span>
<span class="token keyword">while</span> page_number <span class="token operator">&lt;</span> <span class="token number">8</span> <span class="token punctuation">:</span>

    <span class="token comment"># page_number = 4\u65F6\uFF0C\u8BBF\u95EE\u7684\u662F\u7F51\u5740\u7684\u7B2C4\u9875</span>
    html_url <span class="token operator">=</span> <span class="token string">&#39;https://www.tukuppt.com/peitu/zonghe_0_0_0_0_0_0_{}.html&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>page_number<span class="token punctuation">)</span>

    <span class="token comment"># \u7528get\u51FD\u6570\u53D1\u9001\u7F51\u9875\u8BF7\u6C42</span>
    url_response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>html_url<span class="token punctuation">)</span>
    
    <span class="token comment"># \u68C0\u9A8C\u8BF7\u6C42\u662F\u5426\u6210\u529F</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>url_response<span class="token punctuation">.</span>status_code<span class="token punctuation">)</span>

    <span class="token comment"># \u89E3\u6790\u8BF7\u6C42\u5230\u7684\u7F51\u9875\u5185\u5BB9</span>
    bs <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>url_response<span class="token punctuation">.</span>text<span class="token punctuation">,</span><span class="token string">&#39;html.parser&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">#print(bs)</span>

    <span class="token comment"># \u641C\u7D22\u7F51\u9875\u4E2D\u6240\u6709\u5305\u542B\u56FE\u7247\u540D\u79F0\u548C\u56FE\u7247\u94FE\u63A5\u7684tag</span>
    <span class="token comment"># \u5F97\u5230\u4E00\u6574\u4E2Adl\u6807\u7B7E</span>
    picture_list <span class="token operator">=</span> bs<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">&#39;dl&#39;</span><span class="token punctuation">,</span>class_<span class="token operator">=</span><span class="token string">&#39;cbox item&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">#print(picture_list)</span>

    <span class="token comment"># for \u5FAA\u73AF\u53D6\u51FAdl\u4E2D\u7684\u6BCF\u4E00\u4E2A\u6807\u7B7E</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> picture_list <span class="token punctuation">:</span>
        <span class="token comment"># \u53D6\u51FAdl\u6807\u7B7E\u4E2D\u7684\u6240\u6709a\u6807\u7B7E\u4E2D\u7684\u7B2C2\u4E2Aa\u6807\u7B7E</span>
        <span class="token comment"># [1]\u53D6\u5230\u7684\u662F\u7B2C2\u4E2A\u6807\u7B7E</span>
        picture_list_a <span class="token operator">=</span> i<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token comment">#print(picture_list_a)</span>

        <span class="token comment"># \u53D6\u51FA\u56FE\u7247\u540D\u79F0\uFF1A\u56FE\u7247\u540D\u79F0\u5728img\u6807\u7B7E\u5185\u5C5E\u6027\u4E3A&#39;alt&#39;</span>
        picture_name <span class="token operator">=</span> picture_list_a<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&#39;alt&#39;</span><span class="token punctuation">]</span>
        <span class="token comment">#print(picture_name)</span>

        <span class="token comment"># \u53D6\u51FA\u56FE\u7247\u94FE\u63A5\uFF1A\u56FE\u7247\u94FE\u63A5\u5728img\u6807\u7B7E\u5185\u5C5E\u6027\u4E3A&#39;data-original&#39;</span>
        picture_url_d <span class="token operator">=</span> picture_list_a<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&#39;data-original&#39;</span><span class="token punctuation">]</span>
        <span class="token comment">#print(picture_url_d)</span>
        
        <span class="token comment"># \u5B8C\u6574\u7684\u56FE\u7247\u94FE\u63A5</span>
        picture_url <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;https:&#39;</span><span class="token operator">+</span>picture_url_d<span class="token punctuation">)</span>
        <span class="token comment">#print(picture_url)</span>

        <span class="token comment"># \u8BBF\u95EE\u56FE\u7247\u94FE\u63A5</span>
        picture_url_response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>picture_url<span class="token punctuation">)</span>

        <span class="token comment"># \u5C06\u8BBF\u95EE\u7684\u54CD\u5E94\u7ED3\u679C\u4EE5\u4E8C\u8FDB\u5236\u6570\u636E\u7684\u5F62\u5F0F\u8FD4\u56DE</span>
        picture_content <span class="token operator">=</span> picture_url_response<span class="token punctuation">.</span>content

        <span class="token comment"># \u56FE\u7247\u5185\u5BB9\u4EE5\u4E8C\u8FDB\u5236\u5F62\u5F0F\u5199\u5165</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span> <span class="token punctuation">(</span><span class="token string">&#39;.\\\\\u6444\u5F71\u56FE\\\\&#39;</span><span class="token operator">+</span>picture_name<span class="token operator">+</span><span class="token string">&#39;.jpg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span> <span class="token punctuation">)</span> <span class="token keyword">as</span> f <span class="token punctuation">:</span>
          
            <span class="token comment"># \u5C06\u4E8C\u8FDB\u5236\u6570\u636E\u5199\u5165\u6587\u4EF6</span>
            f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>picture_content<span class="token punctuation">)</span>
        <span class="token comment"># \u7528print\u67E5\u770B\u4EE3\u7801\u8FD0\u884C\u6B65\u9AA4</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u300A{}\u300B\u5DF2\u4FDD\u5B58&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>picture_name<span class="token punctuation">)</span><span class="token punctuation">)</span>

    page_number <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u7A0B\u5E8F\u7ED3\u675F!&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[p];function c(l,o){return s(),a("div",null,i)}var d=n(t,[["render",c],["__file","Python\u6279\u91CF\u4E0B\u8F7D\u67D0\u7F51\u9875\u7684\u6240\u6709\u56FE\u7247.html.vue"]]);export{d as default};
