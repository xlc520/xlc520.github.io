import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as t}from"./app-CHLzVell.js";const e={},p=t(`<h1 id="python-批量下载某网页的所有图片" tabindex="-1"><a class="header-anchor" href="#python-批量下载某网页的所有图片"><span>Python 批量下载某网页的所有图片</span></a></h1><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment"># requests是第三方库：用pip install requests安装</span>
<span class="token keyword">import</span> requests

<span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup

<span class="token comment"># 设置变量用于拼接网址</span>
page_number <span class="token operator">=</span> <span class="token number">4</span>

<span class="token comment"># 用while循环控制访问的网页</span>
<span class="token keyword">while</span> page_number <span class="token operator">&lt;</span> <span class="token number">8</span> <span class="token punctuation">:</span>

    <span class="token comment"># page_number = 4时，访问的是网址的第4页</span>
    html_url <span class="token operator">=</span> <span class="token string">&#39;https://www.tukuppt.com/peitu/zonghe_0_0_0_0_0_0_{}.html&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>page_number<span class="token punctuation">)</span>

    <span class="token comment"># 用get函数发送网页请求</span>
    url_response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>html_url<span class="token punctuation">)</span>
    
    <span class="token comment"># 检验请求是否成功</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>url_response<span class="token punctuation">.</span>status_code<span class="token punctuation">)</span>

    <span class="token comment"># 解析请求到的网页内容</span>
    bs <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>url_response<span class="token punctuation">.</span>text<span class="token punctuation">,</span><span class="token string">&#39;html.parser&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">#print(bs)</span>

    <span class="token comment"># 搜索网页中所有包含图片名称和图片链接的tag</span>
    <span class="token comment"># 得到一整个dl标签</span>
    picture_list <span class="token operator">=</span> bs<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">&#39;dl&#39;</span><span class="token punctuation">,</span>class_<span class="token operator">=</span><span class="token string">&#39;cbox item&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">#print(picture_list)</span>

    <span class="token comment"># for 循环取出dl中的每一个标签</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> picture_list <span class="token punctuation">:</span>
        <span class="token comment"># 取出dl标签中的所有a标签中的第2个a标签</span>
        <span class="token comment"># [1]取到的是第2个标签</span>
        picture_list_a <span class="token operator">=</span> i<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token comment">#print(picture_list_a)</span>

        <span class="token comment"># 取出图片名称：图片名称在img标签内属性为&#39;alt&#39;</span>
        picture_name <span class="token operator">=</span> picture_list_a<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&#39;alt&#39;</span><span class="token punctuation">]</span>
        <span class="token comment">#print(picture_name)</span>

        <span class="token comment"># 取出图片链接：图片链接在img标签内属性为&#39;data-original&#39;</span>
        picture_url_d <span class="token operator">=</span> picture_list_a<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">&#39;data-original&#39;</span><span class="token punctuation">]</span>
        <span class="token comment">#print(picture_url_d)</span>
        
        <span class="token comment"># 完整的图片链接</span>
        picture_url <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">&#39;https:&#39;</span><span class="token operator">+</span>picture_url_d<span class="token punctuation">)</span>
        <span class="token comment">#print(picture_url)</span>

        <span class="token comment"># 访问图片链接</span>
        picture_url_response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>picture_url<span class="token punctuation">)</span>

        <span class="token comment"># 将访问的响应结果以二进制数据的形式返回</span>
        picture_content <span class="token operator">=</span> picture_url_response<span class="token punctuation">.</span>content

        <span class="token comment"># 图片内容以二进制形式写入</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span> <span class="token punctuation">(</span><span class="token string">&#39;.\\\\摄影图\\\\&#39;</span><span class="token operator">+</span>picture_name<span class="token operator">+</span><span class="token string">&#39;.jpg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span> <span class="token punctuation">)</span> <span class="token keyword">as</span> f <span class="token punctuation">:</span>
          
            <span class="token comment"># 将二进制数据写入文件</span>
            f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>picture_content<span class="token punctuation">)</span>
        <span class="token comment"># 用print查看代码运行步骤</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;《{}》已保存&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>picture_name<span class="token punctuation">)</span><span class="token punctuation">)</span>

    page_number <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;程序结束!&#39;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),i=[p];function o(c,l){return s(),a("div",null,i)}const d=n(e,[["render",o],["__file","Python批量下载某网页的所有图片.html.vue"]]),m=JSON.parse('{"path":"/dev/Python%E6%89%B9%E9%87%8F%E4%B8%8B%E8%BD%BD%E6%9F%90%E7%BD%91%E9%A1%B5%E7%9A%84%E6%89%80%E6%9C%89%E5%9B%BE%E7%89%87.html","title":"Python 批量下载某网页的所有图片","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"Python 批量下载某网页的所有图片","excerpt":null,"description":"Python 批量下载某网页的所有图片","date":"2022-05-31T00:00:00.000Z","category":"Python","tag":"Python","article":true,"timeline":true,"icon":"python","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/Python%E6%89%B9%E9%87%8F%E4%B8%8B%E8%BD%BD%E6%9F%90%E7%BD%91%E9%A1%B5%E7%9A%84%E6%89%80%E6%9C%89%E5%9B%BE%E7%89%87.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"Python 批量下载某网页的所有图片"}],["meta",{"property":"og:description","content":"Python 批量下载某网页的所有图片"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Python"}],["meta",{"property":"article:published_time","content":"2022-05-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python 批量下载某网页的所有图片\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-05-31T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[],"git":{"createdTime":1653536596000,"updatedTime":1714224756000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":2},{"name":"xlc","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":1.34,"words":402},"filePathRelative":"dev/Python批量下载某网页的所有图片.md","localizedDate":"2022年5月31日"}');export{d as comp,m as data};
