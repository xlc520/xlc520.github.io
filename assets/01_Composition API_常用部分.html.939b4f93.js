import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c,a as n,e as t,b as s,d as p,r as l}from"./app.76578005.js";const i={},u=n("h1",{id:"_1-composition-api-\u5E38\u7528\u90E8\u5206",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-composition-api-\u5E38\u7528\u90E8\u5206","aria-hidden":"true"},"#"),s(" 1. Composition API(\u5E38\u7528\u90E8\u5206)")],-1),k=n("p",null,"\u6587\u6863:",-1),r=s("\u200B "),d={href:"https://composition-api.vuejs.org/zh/api.html",target:"_blank",rel:"noopener noreferrer"},v=s("https://composition-api.vuejs.org/zh/api.html"),m=p(`<h2 id="_1-setup" tabindex="-1"><a class="header-anchor" href="#_1-setup" aria-hidden="true">#</a> 1) setup</h2><ul><li>\u65B0\u7684option, \u6240\u6709\u7684\u7EC4\u5408API\u51FD\u6570\u90FD\u5728\u6B64\u4F7F\u7528, \u53EA\u5728\u521D\u59CB\u5316\u65F6\u6267\u884C\u4E00\u6B21</li><li>\u51FD\u6570\u5982\u679C\u8FD4\u56DE\u5BF9\u8C61, \u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u6216\u65B9\u6CD5, \u6A21\u677F\u4E2D\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528</li></ul><h2 id="_2-ref" tabindex="-1"><a class="header-anchor" href="#_2-ref" aria-hidden="true">#</a> 2) ref</h2><ul><li>\u4F5C\u7528: \u5B9A\u4E49\u4E00\u4E2A\u6570\u636E\u7684\u54CD\u5E94\u5F0F</li><li>\u8BED\u6CD5: const xxx = ref(initValue): <ul><li>\u521B\u5EFA\u4E00\u4E2A\u5305\u542B\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u5F15\u7528(reference)\u5BF9\u8C61</li><li>js\u4E2D\u64CD\u4F5C\u6570\u636E: xxx.value</li><li>\u6A21\u677F\u4E2D\u64CD\u4F5C\u6570\u636E: \u4E0D\u9700\u8981.value</li></ul></li><li>\u4E00\u822C\u7528\u6765\u5B9A\u4E49\u4E00\u4E2A\u57FA\u672C\u7C7B\u578B\u7684\u54CD\u5E94\u5F0F\u6570\u636E</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{count}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u66F4\u65B0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  ref
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>

  <span class="token comment">/* \u5728Vue3\u4E2D\u4F9D\u7136\u53EF\u4EE5\u4F7F\u7528data\u548Cmethods\u914D\u7F6E, \u4F46\u5EFA\u8BAE\u4F7F\u7528\u5176\u65B0\u8BED\u6CD5\u5B9E\u73B0 */</span>
  <span class="token comment">// data () {</span>
  <span class="token comment">//   return {</span>
  <span class="token comment">//     count: 0</span>
  <span class="token comment">//   }</span>
  <span class="token comment">// },</span>
  <span class="token comment">// methods: {</span>
  <span class="token comment">//   update () {</span>
  <span class="token comment">//     this.count++</span>
  <span class="token comment">//   }</span>
  <span class="token comment">// }</span>

  <span class="token comment">/* \u4F7F\u7528vue3\u7684composition API */</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// \u5B9A\u4E49\u54CD\u5E94\u5F0F\u6570\u636E ref\u5BF9\u8C61</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>

    <span class="token comment">// \u66F4\u65B0\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u51FD\u6570</span>
    <span class="token keyword">function</span> <span class="token function">update</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// alert(&#39;update&#39;)</span>
      count<span class="token punctuation">.</span>value <span class="token operator">=</span> count<span class="token punctuation">.</span>value <span class="token operator">+</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      count<span class="token punctuation">,</span>
      update
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-reactive" tabindex="-1"><a class="header-anchor" href="#_3-reactive" aria-hidden="true">#</a> 3) reactive</h2><ul><li>\u4F5C\u7528: \u5B9A\u4E49\u591A\u4E2A\u6570\u636E\u7684\u54CD\u5E94\u5F0F</li><li>const proxy = reactive(obj): \u63A5\u6536\u4E00\u4E2A\u666E\u901A\u5BF9\u8C61\u7136\u540E\u8FD4\u56DE\u8BE5\u666E\u901A\u5BF9\u8C61\u7684\u54CD\u5E94\u5F0F\u4EE3\u7406\u5668\u5BF9\u8C61</li><li>\u54CD\u5E94\u5F0F\u8F6C\u6362\u662F\u201C\u6DF1\u5C42\u7684\u201D\uFF1A\u4F1A\u5F71\u54CD\u5BF9\u8C61\u5185\u90E8\u6240\u6709\u5D4C\u5957\u7684\u5C5E\u6027</li><li>\u5185\u90E8\u57FA\u4E8E ES6 \u7684 Proxy \u5B9E\u73B0\uFF0C\u901A\u8FC7\u4EE3\u7406\u5BF9\u8C61\u64CD\u4F5C\u6E90\u5BF9\u8C61\u5185\u90E8\u6570\u636E\u90FD\u662F\u54CD\u5E94\u5F0F\u7684</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>name: {{state.name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>age: {{state.age}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>wife: {{state.wife}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u66F4\u65B0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">/* 
reactive: 
    \u4F5C\u7528: \u5B9A\u4E49\u591A\u4E2A\u6570\u636E\u7684\u54CD\u5E94\u5F0F
    const proxy = reactive(obj): \u63A5\u6536\u4E00\u4E2A\u666E\u901A\u5BF9\u8C61\u7136\u540E\u8FD4\u56DE\u8BE5\u666E\u901A\u5BF9\u8C61\u7684\u54CD\u5E94\u5F0F\u4EE3\u7406\u5668\u5BF9\u8C61
    \u54CD\u5E94\u5F0F\u8F6C\u6362\u662F\u201C\u6DF1\u5C42\u7684\u201D\uFF1A\u4F1A\u5F71\u54CD\u5BF9\u8C61\u5185\u90E8\u6240\u6709\u5D4C\u5957\u7684\u5C5E\u6027
    \u5185\u90E8\u57FA\u4E8E ES6 \u7684 Proxy \u5B9E\u73B0\uFF0C\u901A\u8FC7\u4EE3\u7406\u5BF9\u8C61\u64CD\u4F5C\u6E90\u5BF9\u8C61\u5185\u90E8\u6570\u636E\u90FD\u662F\u54CD\u5E94\u5F0F\u7684
*/</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  reactive<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 
    \u5B9A\u4E49\u54CD\u5E94\u5F0F\u6570\u636E\u5BF9\u8C61
    */</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
      <span class="token literal-property property">wife</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;marry&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">22</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> state<span class="token punctuation">.</span>wife<span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>name <span class="token operator">+=</span> <span class="token string">&#39;--&#39;</span>
      state<span class="token punctuation">.</span>age <span class="token operator">+=</span> <span class="token number">1</span>
      state<span class="token punctuation">.</span>wife<span class="token punctuation">.</span>name <span class="token operator">+=</span> <span class="token string">&#39;++&#39;</span>
      state<span class="token punctuation">.</span>wife<span class="token punctuation">.</span>age <span class="token operator">+=</span> <span class="token number">2</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">,</span>
      update<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u6BD4\u8F83vue2\u4E0Evue3\u7684\u54CD\u5E94\u5F0F-\u91CD\u8981" tabindex="-1"><a class="header-anchor" href="#_4-\u6BD4\u8F83vue2\u4E0Evue3\u7684\u54CD\u5E94\u5F0F-\u91CD\u8981" aria-hidden="true">#</a> 4) \u6BD4\u8F83Vue2\u4E0EVue3\u7684\u54CD\u5E94\u5F0F(\u91CD\u8981)</h2><h2 id="vue2\u7684\u54CD\u5E94\u5F0F" tabindex="-1"><a class="header-anchor" href="#vue2\u7684\u54CD\u5E94\u5F0F" aria-hidden="true">#</a> vue2\u7684\u54CD\u5E94\u5F0F</h2><ul><li>\u6838\u5FC3: <ul><li>\u5BF9\u8C61: \u901A\u8FC7defineProperty\u5BF9\u5BF9\u8C61\u7684\u5DF2\u6709\u5C5E\u6027\u503C\u7684\u8BFB\u53D6\u548C\u4FEE\u6539\u8FDB\u884C\u52AB\u6301(\u76D1\u89C6/\u62E6\u622A)</li><li>\u6570\u7EC4: \u901A\u8FC7\u91CD\u5199\u6570\u7EC4\u66F4\u65B0\u6570\u7EC4\u4E00\u7CFB\u5217\u66F4\u65B0\u5143\u7D20\u7684\u65B9\u6CD5\u6765\u5B9E\u73B0\u5143\u7D20\u4FEE\u6539\u7684\u52AB\u6301</li></ul></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&#39;count&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token function">set</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u95EE\u9898 <ul><li>\u5BF9\u8C61\u76F4\u63A5\u65B0\u6DFB\u52A0\u7684\u5C5E\u6027\u6216\u5220\u9664\u5DF2\u6709\u5C5E\u6027, \u754C\u9762\u4E0D\u4F1A\u81EA\u52A8\u66F4\u65B0</li><li>\u76F4\u63A5\u901A\u8FC7\u4E0B\u6807\u66FF\u6362\u5143\u7D20\u6216\u66F4\u65B0length, \u754C\u9762\u4E0D\u4F1A\u81EA\u52A8\u66F4\u65B0 arr[1] = {}</li></ul></li></ul><h2 id="vue3\u7684\u54CD\u5E94\u5F0F" tabindex="-1"><a class="header-anchor" href="#vue3\u7684\u54CD\u5E94\u5F0F" aria-hidden="true">#</a> Vue3\u7684\u54CD\u5E94\u5F0F</h2>`,14),b=s("\u6838\u5FC3: "),g=n("li",null,"\u901A\u8FC7Proxy(\u4EE3\u7406): \u62E6\u622A\u5BF9data\u4EFB\u610F\u5C5E\u6027\u7684\u4EFB\u610F(13\u79CD)\u64CD\u4F5C, \u5305\u62EC\u5C5E\u6027\u503C\u7684\u8BFB\u5199, \u5C5E\u6027\u7684\u6DFB\u52A0, \u5C5E\u6027\u7684\u5220\u9664\u7B49...",-1),f=n("li",null,"\u901A\u8FC7 Reflect(\u53CD\u5C04): \u52A8\u6001\u5BF9\u88AB\u4EE3\u7406\u5BF9\u8C61\u7684\u76F8\u5E94\u5C5E\u6027\u8FDB\u884C\u7279\u5B9A\u7684\u64CD\u4F5C",-1),y=s("\u6587\u6863: "),h={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy",target:"_blank",rel:"noopener noreferrer"},w=s("https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy"),q={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect",target:"_blank",rel:"noopener noreferrer"},x=s("https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect"),_=p(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u62E6\u622A\u8BFB\u53D6\u5C5E\u6027\u503C</span>
    <span class="token function">get</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u62E6\u622A\u8BBE\u7F6E\u5C5E\u6027\u503C\u6216\u6DFB\u52A0\u65B0\u5C5E\u6027</span>
    <span class="token function">set</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// \u62E6\u622A\u5220\u9664\u5C5E\u6027</span>
    <span class="token function">deleteProperty</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

proxy<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;tom&#39;</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Proxy \u4E0E Reflect<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    
    <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">12</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">/* 
    proxyUser\u662F\u4EE3\u7406\u5BF9\u8C61, user\u662F\u88AB\u4EE3\u7406\u5BF9\u8C61
    \u540E\u9762\u6240\u6709\u7684\u64CD\u4F5C\u90FD\u662F\u901A\u8FC7\u4EE3\u7406\u5BF9\u8C61\u6765\u64CD\u4F5C\u88AB\u4EE3\u7406\u5BF9\u8C61\u5185\u90E8\u5C5E\u6027
    */</span>
    <span class="token keyword">const</span> proxyUser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token punctuation">{</span>

      <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u52AB\u6301get()&#39;</span><span class="token punctuation">,</span> prop<span class="token punctuation">)</span>
        <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u52AB\u6301set()&#39;</span><span class="token punctuation">,</span> prop<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
        <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// (2)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function">deleteProperty</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u52AB\u6301delete\u5C5E\u6027&#39;</span><span class="token punctuation">,</span> prop<span class="token punctuation">)</span>
        <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u8BFB\u53D6\u5C5E\u6027\u503C</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxyUser<span class="token operator">===</span>user<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxyUser<span class="token punctuation">.</span>name<span class="token punctuation">,</span> proxyUser<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
    <span class="token comment">// \u8BBE\u7F6E\u5C5E\u6027\u503C</span>
    proxyUser<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;bob&#39;</span>
    proxyUser<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">13</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
    <span class="token comment">// \u6DFB\u52A0\u5C5E\u6027</span>
    proxyUser<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token string">&#39;\u7537&#39;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
    <span class="token comment">// \u5220\u9664\u5C5E\u6027</span>
    <span class="token keyword">delete</span> proxyUser<span class="token punctuation">.</span>sex
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-setup\u7EC6\u8282" tabindex="-1"><a class="header-anchor" href="#_5-setup\u7EC6\u8282" aria-hidden="true">#</a> 5) setup\u7EC6\u8282</h2><ul><li><p>setup\u6267\u884C\u7684\u65F6\u673A</p><ul><li>\u5728beforeCreate\u4E4B\u524D\u6267\u884C(\u4E00\u6B21), \u6B64\u65F6\u7EC4\u4EF6\u5BF9\u8C61\u8FD8\u6CA1\u6709\u521B\u5EFA</li><li>this\u662Fundefined, \u4E0D\u80FD\u901A\u8FC7this\u6765\u8BBF\u95EEdata/computed/methods / props</li><li>\u5176\u5B9E\u6240\u6709\u7684composition API\u76F8\u5173\u56DE\u8C03\u51FD\u6570\u4E2D\u4E5F\u90FD\u4E0D\u53EF\u4EE5</li></ul></li><li><p>setup\u7684\u8FD4\u56DE\u503C</p><ul><li>\u4E00\u822C\u90FD\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61: \u4E3A\u6A21\u677F\u63D0\u4F9B\u6570\u636E, \u4E5F\u5C31\u662F\u6A21\u677F\u4E2D\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u6B64\u5BF9\u8C61\u4E2D\u7684\u6240\u6709\u5C5E\u6027/\u65B9\u6CD5</li><li>\u8FD4\u56DE\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u4F1A\u4E0Edata\u51FD\u6570\u8FD4\u56DE\u5BF9\u8C61\u7684\u5C5E\u6027\u5408\u5E76\u6210\u4E3A\u7EC4\u4EF6\u5BF9\u8C61\u7684\u5C5E\u6027</li><li>\u8FD4\u56DE\u5BF9\u8C61\u4E2D\u7684\u65B9\u6CD5\u4F1A\u4E0Emethods\u4E2D\u7684\u65B9\u6CD5\u5408\u5E76\u6210\u529F\u7EC4\u4EF6\u5BF9\u8C61\u7684\u65B9\u6CD5</li><li>\u5982\u679C\u6709\u91CD\u540D, setup\u4F18\u5148</li><li>\u6CE8\u610F:</li><li>\u4E00\u822C\u4E0D\u8981\u6DF7\u5408\u4F7F\u7528: methods\u4E2D\u53EF\u4EE5\u8BBF\u95EEsetup\u63D0\u4F9B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5, \u4F46\u5728setup\u65B9\u6CD5\u4E2D\u4E0D\u80FD\u8BBF\u95EEdata\u548Cmethods</li><li>setup\u4E0D\u80FD\u662F\u4E00\u4E2Aasync\u51FD\u6570: \u56E0\u4E3A\u8FD4\u56DE\u503C\u4E0D\u518D\u662Freturn\u7684\u5BF9\u8C61, \u800C\u662Fpromise, \u6A21\u677F\u770B\u4E0D\u5230return\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u6570\u636E</li></ul></li><li><p>setup\u7684\u53C2\u6570</p><ul><li>setup(props, context) / setup(props, {attrs, slots, emit})</li><li>props: \u5305\u542Bprops\u914D\u7F6E\u58F0\u660E\u4E14\u4F20\u5165\u4E86\u7684\u6240\u6709\u5C5E\u6027\u7684\u5BF9\u8C61</li><li>attrs: \u5305\u542B\u6CA1\u6709\u5728props\u914D\u7F6E\u4E2D\u58F0\u660E\u7684\u5C5E\u6027\u7684\u5BF9\u8C61, \u76F8\u5F53\u4E8E this.$attrs</li><li>slots: \u5305\u542B\u6240\u6709\u4F20\u5165\u7684\u63D2\u69FD\u5185\u5BB9\u7684\u5BF9\u8C61, \u76F8\u5F53\u4E8E this.$slots</li><li>emit: \u7528\u6765\u5206\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u7684\u51FD\u6570, \u76F8\u5F53\u4E8E this.$emit</li></ul></li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>msg: {{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fn(<span class="token punctuation">&#39;</span>--<span class="token punctuation">&#39;</span>)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u66F4\u65B0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child</span> <span class="token attr-name">:msg</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>msg<span class="token punctuation">&quot;</span></span> <span class="token attr-name">msg2</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cba<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@fn</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fn<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  reactive<span class="token punctuation">,</span>
  ref<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> child <span class="token keyword">from</span> <span class="token string">&#39;./child.vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>

  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    child
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">function</span> <span class="token function">fn</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">content</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      msg<span class="token punctuation">.</span>value <span class="token operator">+=</span> content
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      msg<span class="token punctuation">,</span>
      fn
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>{{n}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>{{m}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>msg: {{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>msg2: {{$attrs.msg2}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u66F4\u65B0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  ref<span class="token punctuation">,</span>
  defineComponent
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;child&#39;</span><span class="token punctuation">,</span>

  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;msg&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;fn&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// \u53EF\u9009\u7684, \u58F0\u660E\u4E86\u66F4\u5229\u4E8E\u7A0B\u5E8F\u5458\u9605\u8BFB, \u4E14\u53EF\u4EE5\u5BF9\u5206\u53D1\u7684\u4E8B\u4EF6\u6570\u636E\u8FDB\u884C\u6821\u9A8C</span>

  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;data&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// n: 1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">beforeCreate</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;beforeCreate&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// update () {</span>
    <span class="token comment">//   this.n++</span>
    <span class="token comment">//   this.m++</span>
    <span class="token comment">// }</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// setup (props, context) {</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> <span class="token punctuation">{</span>attrs<span class="token punctuation">,</span> emit<span class="token punctuation">,</span> slots<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;setup&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>props<span class="token punctuation">.</span>msg<span class="token punctuation">,</span> attrs<span class="token punctuation">.</span>msg2<span class="token punctuation">,</span> slots<span class="token punctuation">,</span> emit<span class="token punctuation">)</span>

    <span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>

    <span class="token keyword">function</span> <span class="token function">update</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// console.log(&#39;--&#39;, this)</span>
      <span class="token comment">// this.n += 2 </span>
      <span class="token comment">// this.m += 2</span>

      m<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token number">2</span>
      n<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token number">2</span>

      <span class="token comment">// \u5206\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6</span>
      <span class="token function">emit</span><span class="token punctuation">(</span><span class="token string">&#39;fn&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;++&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      m<span class="token punctuation">,</span>
      n<span class="token punctuation">,</span>
      update<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-reactive\u4E0Eref-\u7EC6\u8282" tabindex="-1"><a class="header-anchor" href="#_6-reactive\u4E0Eref-\u7EC6\u8282" aria-hidden="true">#</a> 6) reactive\u4E0Eref-\u7EC6\u8282</h2><ul><li>\u662FVue3\u7684 composition API\u4E2D2\u4E2A\u6700\u91CD\u8981\u7684\u54CD\u5E94\u5F0FAPI</li><li>ref\u7528\u6765\u5904\u7406\u57FA\u672C\u7C7B\u578B\u6570\u636E, reactive\u7528\u6765\u5904\u7406\u5BF9\u8C61(\u9012\u5F52\u6DF1\u5EA6\u54CD\u5E94\u5F0F)</li><li>\u5982\u679C\u7528ref\u5BF9\u8C61/\u6570\u7EC4, \u5185\u90E8\u4F1A\u81EA\u52A8\u5C06\u5BF9\u8C61/\u6570\u7EC4\u8F6C\u6362\u4E3Areactive\u7684\u4EE3\u7406\u5BF9\u8C61</li><li>ref\u5185\u90E8: \u901A\u8FC7\u7ED9value\u5C5E\u6027\u6DFB\u52A0getter/setter\u6765\u5B9E\u73B0\u5BF9\u6570\u636E\u7684\u52AB\u6301</li><li>reactive\u5185\u90E8: \u901A\u8FC7\u4F7F\u7528Proxy\u6765\u5B9E\u73B0\u5BF9\u5BF9\u8C61\u5185\u90E8\u6240\u6709\u6570\u636E\u7684\u52AB\u6301, \u5E76\u901A\u8FC7Reflect\u64CD\u4F5C\u5BF9\u8C61\u5185\u90E8\u6570\u636E</li><li>ref\u7684\u6570\u636E\u64CD\u4F5C: \u5728js\u4E2D\u8981.value, \u5728\u6A21\u677F\u4E2D\u4E0D\u9700\u8981(\u5185\u90E8\u89E3\u6790\u6A21\u677F\u65F6\u4F1A\u81EA\u52A8\u6DFB\u52A0.value)</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>m1: {{m1}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>m2: {{m2}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>m3: {{m3}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u66F4\u65B0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  reactive<span class="token punctuation">,</span>
  ref
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>

  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> m1 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> m2 <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">z</span><span class="token operator">:</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// \u4F7F\u7528ref\u5904\u7406\u5BF9\u8C61  ==&gt; \u5BF9\u8C61\u4F1A\u88AB\u81EA\u52A8reactive\u4E3Aproxy\u5BF9\u8C61</span>
    <span class="token keyword">const</span> m3 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a1</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">a2</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">a3</span><span class="token operator">:</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m1<span class="token punctuation">,</span> m2<span class="token punctuation">,</span> m3<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m3<span class="token punctuation">.</span>value<span class="token punctuation">.</span>a2<span class="token punctuation">)</span> <span class="token comment">// \u4E5F\u662F\u4E00\u4E2Aproxy\u5BF9\u8C61</span>

    <span class="token keyword">function</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      m1<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token string">&#39;--&#39;</span>
      m2<span class="token punctuation">.</span>x <span class="token operator">+=</span> <span class="token number">1</span>
      m2<span class="token punctuation">.</span>y<span class="token punctuation">.</span>z <span class="token operator">+=</span> <span class="token string">&#39;++&#39;</span>

      m3<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a1</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">a2</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">a3</span><span class="token operator">:</span> <span class="token string">&#39;abc---&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
      m3<span class="token punctuation">.</span>value<span class="token punctuation">.</span>a2<span class="token punctuation">.</span>a3 <span class="token operator">+=</span> <span class="token string">&#39;==&#39;</span> <span class="token comment">// reactive\u5BF9\u5BF9\u8C61\u8FDB\u884C\u4E86\u6DF1\u5EA6\u6570\u636E\u52AB\u6301</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m3<span class="token punctuation">.</span>value<span class="token punctuation">.</span>a2<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      m1<span class="token punctuation">,</span>
      m2<span class="token punctuation">,</span>
      m3<span class="token punctuation">,</span>
      update
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-\u8BA1\u7B97\u5C5E\u6027\u4E0E\u76D1\u89C6" tabindex="-1"><a class="header-anchor" href="#_7-\u8BA1\u7B97\u5C5E\u6027\u4E0E\u76D1\u89C6" aria-hidden="true">#</a> 7) \u8BA1\u7B97\u5C5E\u6027\u4E0E\u76D1\u89C6</h2><ul><li><p>computed\u51FD\u6570:</p><ul><li>\u4E0Ecomputed\u914D\u7F6E\u529F\u80FD\u4E00\u81F4</li><li>\u53EA\u6709getter</li><li>\u6709getter\u548Csetter</li></ul></li><li><p>watch\u51FD\u6570</p><ul><li>\u4E0Ewatch\u914D\u7F6E\u529F\u80FD\u4E00\u81F4</li><li>\u76D1\u89C6\u6307\u5B9A\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u54CD\u5E94\u5F0F\u6570\u636E, \u4E00\u65E6\u6570\u636E\u53D8\u5316, \u5C31\u81EA\u52A8\u6267\u884C\u76D1\u89C6\u56DE\u8C03</li><li>\u9ED8\u8BA4\u521D\u59CB\u65F6\u4E0D\u6267\u884C\u56DE\u8C03, \u4F46\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6Eimmediate\u4E3Atrue, \u6765\u6307\u5B9A\u521D\u59CB\u65F6\u7ACB\u5373\u6267\u884C\u7B2C\u4E00\u6B21</li><li>\u901A\u8FC7\u914D\u7F6Edeep\u4E3Atrue, \u6765\u6307\u5B9A\u6DF1\u5EA6\u76D1\u89C6</li></ul></li><li><p>watchEffect\u51FD\u6570</p><ul><li>\u4E0D\u7528\u76F4\u63A5\u6307\u5B9A\u8981\u76D1\u89C6\u7684\u6570\u636E, \u56DE\u8C03\u51FD\u6570\u4E2D\u4F7F\u7528\u7684\u54EA\u4E9B\u54CD\u5E94\u5F0F\u6570\u636E\u5C31\u76D1\u89C6\u54EA\u4E9B\u54CD\u5E94\u5F0F\u6570\u636E</li><li>\u9ED8\u8BA4\u521D\u59CB\u65F6\u5C31\u4F1A\u6267\u884C\u7B2C\u4E00\u6B21, \u4ECE\u800C\u53EF\u4EE5\u6536\u96C6\u9700\u8981\u76D1\u89C6\u7684\u6570\u636E</li><li>\u76D1\u89C6\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6\u56DE\u8C03</li></ul></li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  fistName: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user.firstName<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
  lastName: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user.lastName<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
  fullName1: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fullName1<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
  fullName2: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fullName2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
  fullName3: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fullName3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">/*
\u8BA1\u7B97\u5C5E\u6027\u4E0E\u76D1\u89C6
1. computed\u51FD\u6570: 
  \u4E0Ecomputed\u914D\u7F6E\u529F\u80FD\u4E00\u81F4
  \u53EA\u6709getter
  \u6709getter\u548Csetter
2. watch\u51FD\u6570
  \u4E0Ewatch\u914D\u7F6E\u529F\u80FD\u4E00\u81F4
  \u76D1\u89C6\u6307\u5B9A\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u54CD\u5E94\u5F0F\u6570\u636E, \u4E00\u65E6\u6570\u636E\u53D8\u5316, \u5C31\u81EA\u52A8\u6267\u884C\u76D1\u89C6\u56DE\u8C03
  \u9ED8\u8BA4\u521D\u59CB\u65F6\u4E0D\u6267\u884C\u56DE\u8C03, \u4F46\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6Eimmediate\u4E3Atrue, \u6765\u6307\u5B9A\u521D\u59CB\u65F6\u7ACB\u5373\u6267\u884C\u7B2C\u4E00\u6B21
  \u901A\u8FC7\u914D\u7F6Edeep\u4E3Atrue, \u6765\u6307\u5B9A\u6DF1\u5EA6\u76D1\u89C6
3. watchEffect\u51FD\u6570
  \u4E0D\u7528\u76F4\u63A5\u6307\u5B9A\u8981\u76D1\u89C6\u7684\u6570\u636E, \u56DE\u8C03\u51FD\u6570\u4E2D\u4F7F\u7528\u7684\u54EA\u4E9B\u54CD\u5E94\u5F0F\u6570\u636E\u5C31\u76D1\u89C6\u54EA\u4E9B\u54CD\u5E94\u5F0F\u6570\u636E
  \u9ED8\u8BA4\u521D\u59CB\u65F6\u5C31\u4F1A\u6267\u884C\u7B2C\u4E00\u6B21, \u4ECE\u800C\u53EF\u4EE5\u6536\u96C6\u9700\u8981\u76D1\u89C6\u7684\u6570\u636E
  \u76D1\u89C6\u6570\u636E\u53D1\u751F\u53D8\u5316\u65F6\u56DE\u8C03
*/</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  reactive<span class="token punctuation">,</span>
  ref<span class="token punctuation">,</span>
  computed<span class="token punctuation">,</span>
  watch<span class="token punctuation">,</span>
  watchEffect
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>

  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">firstName</span><span class="token operator">:</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lastName</span><span class="token operator">:</span> <span class="token string">&#39;B&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// \u53EA\u6709getter\u7684\u8BA1\u7B97\u5C5E\u6027</span>
    <span class="token keyword">const</span> fullName1 <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fullName1&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> user<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">+</span> user<span class="token punctuation">.</span>lastName
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// \u6709getter\u4E0Esetter\u7684\u8BA1\u7B97\u5C5E\u6027</span>
    <span class="token keyword">const</span> fullName2 <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fullName2 get&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> user<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">+</span> user<span class="token punctuation">.</span>lastName
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function">set</span> <span class="token punctuation">(</span>value<span class="token operator">:</span> string<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fullName2 set&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> names <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
        user<span class="token punctuation">.</span>firstName <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
        user<span class="token punctuation">.</span>lastName <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> fullName3 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>

    <span class="token comment">/* 
    watchEffect: \u76D1\u89C6\u6240\u6709\u56DE\u8C03\u4E2D\u4F7F\u7528\u7684\u6570\u636E
    */</span>
    <span class="token comment">/* 
    watchEffect(() =&gt; {
      console.log(&#39;watchEffect&#39;)
      fullName3.value = user.firstName + &#39;-&#39; + user.lastName
    }) 
    */</span>

    <span class="token comment">/* 
    \u4F7F\u7528watch\u76842\u4E2A\u7279\u6027:
      \u6DF1\u5EA6\u76D1\u89C6
      \u521D\u59CB\u5316\u7ACB\u5373\u6267\u884C
    */</span>
    <span class="token function">watch</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      fullName3<span class="token punctuation">.</span>value <span class="token operator">=</span> user<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">+</span> user<span class="token punctuation">.</span>lastName
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// \u662F\u5426\u521D\u59CB\u5316\u7ACB\u5373\u6267\u884C\u4E00\u6B21, \u9ED8\u8BA4\u662Ffalse</span>
      <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u662F\u6DF1\u5EA6\u76D1\u89C6, \u9ED8\u8BA4\u662Ffalse</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">/* 
    watch\u4E00\u4E2A\u6570\u636E
      \u9ED8\u8BA4\u5728\u6570\u636E\u53D1\u751F\u6539\u53D8\u65F6\u6267\u884C\u56DE\u8C03
    */</span>
    <span class="token function">watch</span><span class="token punctuation">(</span>fullName3<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;watch&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> names <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
      user<span class="token punctuation">.</span>firstName <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
      user<span class="token punctuation">.</span>lastName <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">/* 
    watch\u591A\u4E2A\u6570\u636E: 
      \u4F7F\u7528\u6570\u7EC4\u6765\u6307\u5B9A
      \u5982\u679C\u662Fref\u5BF9\u8C61, \u76F4\u63A5\u6307\u5B9A
      \u5982\u679C\u662Freactive\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027,  \u5FC5\u987B\u901A\u8FC7\u51FD\u6570\u6765\u6307\u5B9A
    */</span>
    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> user<span class="token punctuation">.</span>firstName<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> user<span class="token punctuation">.</span>lastName<span class="token punctuation">,</span> fullName3<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">values</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u76D1\u89C6\u591A\u4E2A\u6570\u636E&#39;</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      user<span class="token punctuation">,</span>
      fullName1<span class="token punctuation">,</span>
      fullName2<span class="token punctuation">,</span>
      fullName3
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-\u751F\u547D\u5468\u671F" tabindex="-1"><a class="header-anchor" href="#_8-\u751F\u547D\u5468\u671F" aria-hidden="true">#</a> 8) \u751F\u547D\u5468\u671F</h2><p><strong>vue2.x\u7684\u751F\u547D\u5468\u671F</strong></p><p><img src="https://vipkshttps3.wiz.cn/ks/note/view/49c30824-dcdf-4bd0-af2a-708f490b44a1/10311b3b-496c-41f1-8df3-c87572008080/index_files/1604629129730-y1h.png" alt="lifecycle_2"></p><p><strong>vue3\u7684\u751F\u547D\u5468\u671F</strong></p><p><img src="https://vipkshttps3.wiz.cn/ks/note/view/49c30824-dcdf-4bd0-af2a-708f490b44a1/10311b3b-496c-41f1-8df3-c87572008080/index_files/1604629129585-tqn.png" alt="lifecycle_3"></p><p><strong>\u4E0E 2.x \u7248\u672C\u751F\u547D\u5468\u671F\u76F8\u5BF9\u5E94\u7684\u7EC4\u5408\u5F0F API</strong></p><ul><li><code>beforeCreate</code> -&gt; \u4F7F\u7528 <code>setup()</code></li><li><code>created</code> -&gt; \u4F7F\u7528 <code>setup()</code></li><li><code>beforeMount</code> -&gt; <code>onBeforeMount</code></li><li><code>mounted</code> -&gt; <code>onMounted</code></li><li><code>beforeUpdate</code> -&gt; <code>onBeforeUpdate</code></li><li><code>updated</code> -&gt; <code>onUpdated</code></li><li><code>beforeDestroy</code> -&gt; <code>onBeforeUnmount</code></li><li><code>destroyed</code> -&gt; <code>onUnmounted</code></li><li><code>errorCaptured</code> -&gt; <code>onErrorCaptured</code></li></ul><p><strong>\u65B0\u589E\u7684\u94A9\u5B50\u51FD\u6570</strong></p><p>\u7EC4\u5408\u5F0F API \u8FD8\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u8C03\u8BD5\u94A9\u5B50\u51FD\u6570\uFF1A</p><ul><li>onRenderTracked</li><li>onRenderTriggered</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>about<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>msg: {{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u66F4\u65B0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  ref<span class="token punctuation">,</span>
  onMounted<span class="token punctuation">,</span>
  onUpdated<span class="token punctuation">,</span>
  onUnmounted<span class="token punctuation">,</span> 
  onBeforeMount<span class="token punctuation">,</span> 
  onBeforeUpdate<span class="token punctuation">,</span>
  onBeforeUnmount
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">beforeCreate</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;beforeCreate()&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">created</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;created&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">beforeMount</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;beforeMount&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;mounted&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">beforeUpdate</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;beforeUpdate&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">updated</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;updated&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">beforeUnmount</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;beforeUnmount&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">unmounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;unmounted&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  

  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">const</span> msg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      msg<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token string">&#39;--&#39;</span>
    <span class="token punctuation">}</span>

    <span class="token function">onBeforeMount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;--onBeforeMount&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;--onMounted&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">onBeforeUpdate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;--onBeforeUpdate&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">onUpdated</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;--onUpdated&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;--onBeforeUnmount&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;--onUnmounted&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      msg<span class="token punctuation">,</span>
      update
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isShow=!isShow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5207\u6362<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isShow<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">&#39;./Child.vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>

  <span class="token function">data</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">isShow</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Child
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_09-\u81EA\u5B9A\u4E49hook\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_09-\u81EA\u5B9A\u4E49hook\u51FD\u6570" aria-hidden="true">#</a> 09) \u81EA\u5B9A\u4E49hook\u51FD\u6570</h2><ul><li><p>\u4F7F\u7528Vue3\u7684\u7EC4\u5408API\u5C01\u88C5\u7684\u53EF\u590D\u7528\u7684\u529F\u80FD\u51FD\u6570</p></li><li><p>\u81EA\u5B9A\u4E49hook\u7684\u4F5C\u7528\u7C7B\u4F3C\u4E8Evue2\u4E2D\u7684mixin\u6280\u672F</p></li><li><p>\u81EA\u5B9A\u4E49Hook\u7684\u4F18\u52BF: \u5F88\u6E05\u695A\u590D\u7528\u529F\u80FD\u4EE3\u7801\u7684\u6765\u6E90, \u66F4\u6E05\u695A\u6613\u61C2</p></li><li><p>\u9700\u6C421: \u6536\u96C6\u7528\u6237\u9F20\u6807\u70B9\u51FB\u7684\u9875\u9762\u5750\u6807</p><p>hooks/useMousePosition.ts</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> onUnmounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">/* 
\u6536\u96C6\u7528\u6237\u9F20\u6807\u70B9\u51FB\u7684\u9875\u9762\u5750\u6807
*/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">useMousePosition</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u521D\u59CB\u5316\u5750\u6807\u6570\u636E</span>
  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>

  <span class="token comment">// \u7528\u4E8E\u6536\u96C6\u70B9\u51FB\u4E8B\u4EF6\u5750\u6807\u7684\u51FD\u6570</span>
  <span class="token keyword">const</span> <span class="token function-variable function">updatePosition</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">.</span>pageX
    y<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">.</span>pageY
  <span class="token punctuation">}</span>

  <span class="token comment">// \u6302\u8F7D\u540E\u7ED1\u5B9A\u70B9\u51FB\u76D1\u542C</span>
  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> updatePosition<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// \u5378\u8F7D\u524D\u89E3\u7ED1\u70B9\u51FB\u76D1\u542C</span>
  <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> updatePosition<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>x<span class="token punctuation">,</span> y<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>x: {{x}}, y: {{y}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  ref
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token comment">/* 
\u5728\u7EC4\u4EF6\u4E2D\u5F15\u5165\u5E76\u4F7F\u7528\u81EA\u5B9A\u4E49hook
\u81EA\u5B9A\u4E49hook\u7684\u4F5C\u7528\u7C7B\u4F3C\u4E8Evue2\u4E2D\u7684mixin\u6280\u672F
\u81EA\u5B9A\u4E49Hook\u7684\u4F18\u52BF: \u5F88\u6E05\u695A\u590D\u7528\u529F\u80FD\u4EE3\u7801\u7684\u6765\u6E90, \u66F4\u6E05\u695A\u6613\u61C2
*/</span>
<span class="token keyword">import</span> useMousePosition <span class="token keyword">from</span> <span class="token string">&#39;./hooks/useMousePosition&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span>x<span class="token punctuation">,</span> y<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useMousePosition</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      x<span class="token punctuation">,</span>
      y<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>\u5229\u7528TS\u6CDB\u578B\u5F3A\u5316\u7C7B\u578B\u68C0\u67E5</p></li><li><p>\u9700\u6C422: \u5C01\u88C5\u53D1ajax\u8BF7\u6C42\u7684hook\u51FD\u6570</p><p>hooks/useRequest.ts</p></li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>

<span class="token comment">/* 
\u4F7F\u7528axios\u53D1\u9001\u5F02\u6B65ajax\u8BF7\u6C42
*/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">useUrlLoader</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">|</span> <span class="token keyword">null</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> loading <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> errorMsg <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

  axios<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>response <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
      result<span class="token punctuation">.</span>value <span class="token operator">=</span> response<span class="token punctuation">.</span>data
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>e <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      loading<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
      errorMsg<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">.</span>message <span class="token operator">||</span> <span class="token string">&#39;\u672A\u77E5\u9519\u8BEF&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    loading<span class="token punctuation">,</span>
    result<span class="token punctuation">,</span>
    errorMsg<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>about<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>loading<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>LOADING...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">v-else-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>errorMsg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{errorMsg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- &lt;ul v-else&gt;
    &lt;li&gt;id: {{result.id}}&lt;/li&gt;
    &lt;li&gt;name: {{result.name}}&lt;/li&gt;
    &lt;li&gt;distance: {{result.distance}}&lt;/li&gt;
  &lt;/ul&gt; --&gt;</span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p in result<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>p.id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>id: {{p.id}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>title: {{p.title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>price: {{p.price}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- &lt;img v-if=&quot;result&quot; :src=&quot;result[0].url&quot; alt=&quot;&quot;&gt; --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  watch
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> useRequest <span class="token keyword">from</span> <span class="token string">&#39;./hooks/useRequest&#39;</span>

<span class="token comment">// \u5730\u5740\u6570\u636E\u63A5\u53E3</span>
<span class="token keyword">interface</span> <span class="token class-name">AddressResult</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">distance</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4EA7\u54C1\u6570\u636E\u63A5\u53E3</span>
<span class="token keyword">interface</span> <span class="token class-name">ProductResult</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">price</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// const {loading, result, errorMsg} = useRequest&lt;AddressResult&gt;(&#39;/data/address.json&#39;)</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span>loading<span class="token punctuation">,</span> result<span class="token punctuation">,</span> errorMsg<span class="token punctuation">}</span> <span class="token operator">=</span> useRequest<span class="token operator">&lt;</span>ProductResult<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token string">&#39;/data/products.json&#39;</span><span class="token punctuation">)</span>

    <span class="token function">watch</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>result<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token comment">// \u6709\u63D0\u793A</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      loading<span class="token punctuation">,</span>
      result<span class="token punctuation">,</span> 
      errorMsg
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-torefs" tabindex="-1"><a class="header-anchor" href="#_10-torefs" aria-hidden="true">#</a> 10) toRefs</h2><p>\u628A\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61\u8F6C\u6362\u6210\u666E\u901A\u5BF9\u8C61\uFF0C\u8BE5\u666E\u901A\u5BF9\u8C61\u7684\u6BCF\u4E2A property \u90FD\u662F\u4E00\u4E2A ref</p><p>\u5E94\u7528: \u5F53\u4ECE\u5408\u6210\u51FD\u6570\u8FD4\u56DE\u54CD\u5E94\u5F0F\u5BF9\u8C61\u65F6\uFF0CtoRefs \u975E\u5E38\u6709\u7528\uFF0C\u8FD9\u6837\u6D88\u8D39\u7EC4\u4EF6\u5C31\u53EF\u4EE5\u5728\u4E0D\u4E22\u5931\u54CD\u5E94\u5F0F\u7684\u60C5\u51B5\u4E0B\u5BF9\u8FD4\u56DE\u7684\u5BF9\u8C61\u8FDB\u884C\u5206\u89E3\u4F7F\u7528</p><p>\u95EE\u9898: reactive \u5BF9\u8C61\u53D6\u51FA\u7684\u6240\u6709\u5C5E\u6027\u503C\u90FD\u662F\u975E\u54CD\u5E94\u5F0F\u7684</p><p>\u89E3\u51B3: \u5229\u7528 toRefs \u53EF\u4EE5\u5C06\u4E00\u4E2A\u54CD\u5E94\u5F0F reactive \u5BF9\u8C61\u7684\u6240\u6709\u539F\u59CB\u5C5E\u6027\u8F6C\u6362\u4E3A\u54CD\u5E94\u5F0F\u7684 ref \u5C5E\u6027</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>foo: {{foo}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>bar: {{bar}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>foo2: {{foo2}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>bar2: {{bar2}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> toRefs <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">/*
toRefs:
  \u5C06\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4E2D\u6240\u6709\u5C5E\u6027\u5305\u88C5\u4E3Aref\u5BF9\u8C61, \u5E76\u8FD4\u56DE\u5305\u542B\u8FD9\u4E9Bref\u5BF9\u8C61\u7684\u666E\u901A\u5BF9\u8C61
  \u5E94\u7528: \u5F53\u4ECE\u5408\u6210\u51FD\u6570\u8FD4\u56DE\u54CD\u5E94\u5F0F\u5BF9\u8C61\u65F6\uFF0CtoRefs \u975E\u5E38\u6709\u7528\uFF0C
        \u8FD9\u6837\u6D88\u8D39\u7EC4\u4EF6\u5C31\u53EF\u4EE5\u5728\u4E0D\u4E22\u5931\u54CD\u5E94\u5F0F\u7684\u60C5\u51B5\u4E0B\u5BF9\u8FD4\u56DE\u7684\u5BF9\u8C61\u8FDB\u884C\u5206\u89E3\u4F7F\u7528
*/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>

  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> stateAsRefs <span class="token operator">=</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>foo <span class="token operator">+=</span> <span class="token string">&#39;++&#39;</span>
      state<span class="token punctuation">.</span>bar <span class="token operator">+=</span> <span class="token string">&#39;++&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> <span class="token punctuation">{</span>foo2<span class="token punctuation">,</span> bar2<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useReatureX</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// ...state,</span>
      <span class="token operator">...</span>stateAsRefs<span class="token punctuation">,</span>
      foo2<span class="token punctuation">,</span> 
      bar2
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">useReatureX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">foo2</span><span class="token operator">:</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bar2</span><span class="token operator">:</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    state<span class="token punctuation">.</span>foo2 <span class="token operator">+=</span> <span class="token string">&#39;++&#39;</span>
    state<span class="token punctuation">.</span>bar2 <span class="token operator">+=</span> <span class="token string">&#39;++&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-ref\u83B7\u53D6\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#_11-ref\u83B7\u53D6\u5143\u7D20" aria-hidden="true">#</a> 11) ref\u83B7\u53D6\u5143\u7D20</h2><p>\u5229\u7528ref\u51FD\u6570\u83B7\u53D6\u7EC4\u4EF6\u4E2D\u7684\u6807\u7B7E\u5143\u7D20</p><p>\u529F\u80FD\u9700\u6C42: \u8BA9\u8F93\u5165\u6846\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>---
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputRef<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">/* 
ref\u83B7\u53D6\u5143\u7D20: \u5229\u7528ref\u51FD\u6570\u83B7\u53D6\u7EC4\u4EF6\u4E2D\u7684\u6807\u7B7E\u5143\u7D20
\u529F\u80FD\u9700\u6C42: \u8BA9\u8F93\u5165\u6846\u81EA\u52A8\u83B7\u53D6\u7126\u70B9
*/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> inputRef <span class="token operator">=</span> ref<span class="token operator">&lt;</span>HTMLElement<span class="token operator">|</span><span class="token keyword">null</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>

    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      inputRef<span class="token punctuation">.</span>value <span class="token operator">&amp;&amp;</span> inputRef<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">focus</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      inputRef
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41);function N(R,j){const a=l("ExternalLinkIcon");return o(),c("div",null,[u,k,n("p",null,[r,n("a",d,[v,t(a)])]),m,n("ul",null,[n("li",null,[b,n("ul",null,[g,f,n("li",null,[y,n("ul",null,[n("li",null,[n("a",h,[w,t(a)])]),n("li",null,[n("a",q,[x,t(a)])])])])])])]),_])}var M=e(i,[["render",N],["__file","01_Composition API_\u5E38\u7528\u90E8\u5206.html.vue"]]);export{M as default};
