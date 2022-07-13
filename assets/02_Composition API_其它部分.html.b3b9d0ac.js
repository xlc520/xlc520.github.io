import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,d as t}from"./app.e07a5d6c.js";const p={},e=t(`<h1 id="_2-composition-api-\u5176\u5B83\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#_2-composition-api-\u5176\u5B83\u90E8\u5206" aria-hidden="true">#</a> 2. Composition API(\u5176\u5B83\u90E8\u5206)</h1><h2 id="_1-shallowreactive-\u4E0E-shallowref" tabindex="-1"><a class="header-anchor" href="#_1-shallowreactive-\u4E0E-shallowref" aria-hidden="true">#</a> 1) shallowReactive \u4E0E shallowRef</h2><ul><li><p>shallowReactive : \u53EA\u5904\u7406\u4E86\u5BF9\u8C61\u5185\u6700\u5916\u5C42\u5C5E\u6027\u7684\u54CD\u5E94\u5F0F(\u4E5F\u5C31\u662F\u6D45\u54CD\u5E94\u5F0F)</p></li><li><p>shallowRef: \u53EA\u5904\u7406\u4E86value\u7684\u54CD\u5E94\u5F0F, \u4E0D\u8FDB\u884C\u5BF9\u8C61\u7684reactive\u5904\u7406</p></li><li><p>\u4EC0\u4E48\u65F6\u5019\u7528\u6D45\u54CD\u5E94\u5F0F\u5462?</p><ul><li>\u4E00\u822C\u60C5\u51B5\u4E0B\u4F7F\u7528ref\u548Creactive\u5373\u53EF</li><li>\u5982\u679C\u6709\u4E00\u4E2A\u5BF9\u8C61\u6570\u636E, \u7ED3\u6784\u6BD4\u8F83\u6DF1, \u4F46\u53D8\u5316\u65F6\u53EA\u662F\u5916\u5C42\u5C5E\u6027\u53D8\u5316 ===&gt; shallowReactive</li><li>\u5982\u679C\u6709\u4E00\u4E2A\u5BF9\u8C61\u6570\u636E, \u540E\u9762\u4F1A\u4EA7\u751F\u65B0\u7684\u5BF9\u8C61\u6765\u66FF\u6362 ===&gt; shallowRef</li></ul></li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>m1: {{m1}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>m2: {{m2}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>m3: {{m3}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>m4: {{m4}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u66F4\u65B0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> ref<span class="token punctuation">,</span> shallowReactive<span class="token punctuation">,</span> shallowRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">/* 
shallowReactive\u4E0EshallowRef
  shallowReactive: \u53EA\u5904\u7406\u4E86\u5BF9\u8C61\u5185\u6700\u5916\u5C42\u5C5E\u6027\u7684\u54CD\u5E94\u5F0F(\u4E5F\u5C31\u662F\u6D45\u54CD\u5E94\u5F0F)
  shallowRef: \u53EA\u5904\u7406\u4E86value\u7684\u54CD\u5E94\u5F0F, \u4E0D\u8FDB\u884C\u5BF9\u8C61\u7684reactive\u5904\u7406
\u603B\u7ED3:
  reactive\u4E0Eref\u5B9E\u73B0\u7684\u662F\u6DF1\u5EA6\u54CD\u5E94\u5F0F, \u800CshallowReactive\u4E0EshallowRef\u662F\u6D45\u54CD\u5E94\u5F0F
  \u4EC0\u4E48\u65F6\u5019\u7528\u6D45\u54CD\u5E94\u5F0F\u5462?
    \u4E00\u822C\u60C5\u51B5\u4E0B\u4F7F\u7528ref\u548Creactive\u5373\u53EF,
    \u5982\u679C\u6709\u4E00\u4E2A\u5BF9\u8C61\u6570\u636E, \u7ED3\u6784\u6BD4\u8F83\u6DF1, \u4F46\u53D8\u5316\u65F6\u53EA\u662F\u5916\u5C42\u5C5E\u6027\u53D8\u5316 ===&gt; shallowReactive
    \u5982\u679C\u6709\u4E00\u4E2A\u5BF9\u8C61\u6570\u636E, \u540E\u9762\u4F1A\u4EA7\u751F\u65B0\u7684\u5BF9\u8C61\u6765\u66FF\u6362 ===&gt; shallowRef
*/</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>

  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> m1 <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> m2 <span class="token operator">=</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> m3 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> m4 <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// m1.b.c += 1</span>
      <span class="token comment">// m2.b.c += 1</span>

      <span class="token comment">// m3.value.a += 1</span>
      m4<span class="token punctuation">.</span>value<span class="token punctuation">.</span>a <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      m1<span class="token punctuation">,</span>
      m2<span class="token punctuation">,</span>
      m3<span class="token punctuation">,</span>
      m4<span class="token punctuation">,</span>
      update<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-readonly-\u4E0E-shallowreadonly" tabindex="-1"><a class="header-anchor" href="#_2-readonly-\u4E0E-shallowreadonly" aria-hidden="true">#</a> 2) readonly \u4E0E shallowReadonly</h2><ul><li>readonly: <ul><li>\u6DF1\u5EA6\u53EA\u8BFB\u6570\u636E</li><li>\u83B7\u53D6\u4E00\u4E2A\u5BF9\u8C61 (\u54CD\u5E94\u5F0F\u6216\u7EAF\u5BF9\u8C61) \u6216 ref \u5E76\u8FD4\u56DE\u539F\u59CB\u4EE3\u7406\u7684\u53EA\u8BFB\u4EE3\u7406\u3002</li><li>\u53EA\u8BFB\u4EE3\u7406\u662F\u6DF1\u5C42\u7684\uFF1A\u8BBF\u95EE\u7684\u4EFB\u4F55\u5D4C\u5957 property \u4E5F\u662F\u53EA\u8BFB\u7684\u3002</li></ul></li><li>shallowReadonly <ul><li>\u6D45\u53EA\u8BFB\u6570\u636E</li><li>\u521B\u5EFA\u4E00\u4E2A\u4EE3\u7406\uFF0C\u4F7F\u5176\u81EA\u8EAB\u7684 property \u4E3A\u53EA\u8BFB\uFF0C\u4F46\u4E0D\u6267\u884C\u5D4C\u5957\u5BF9\u8C61\u7684\u6DF1\u5EA6\u53EA\u8BFB\u8F6C\u6362</li></ul></li><li>\u5E94\u7528\u573A\u666F: <ul><li>\u5728\u67D0\u4E9B\u7279\u5B9A\u60C5\u51B5\u4E0B, \u6211\u4EEC\u53EF\u80FD\u4E0D\u5E0C\u671B\u5BF9\u6570\u636E\u8FDB\u884C\u66F4\u65B0\u7684\u64CD\u4F5C, \u90A3\u5C31\u53EF\u4EE5\u5305\u88C5\u751F\u6210\u4E00\u4E2A\u53EA\u8BFB\u4EE3\u7406\u5BF9\u8C61\u6765\u8BFB\u53D6\u6570\u636E, \u800C\u4E0D\u80FD\u4FEE\u6539\u6216\u5220\u9664</li></ul></li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>{{state}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u66F4\u65B0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> reactive<span class="token punctuation">,</span> readonly<span class="token punctuation">,</span> shallowReadonly <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">/*
readonly: \u6DF1\u5EA6\u53EA\u8BFB\u6570\u636E
  \u83B7\u53D6\u4E00\u4E2A\u5BF9\u8C61 (\u54CD\u5E94\u5F0F\u6216\u7EAF\u5BF9\u8C61) \u6216 ref \u5E76\u8FD4\u56DE\u539F\u59CB\u4EE3\u7406\u7684\u53EA\u8BFB\u4EE3\u7406\u3002
  \u53EA\u8BFB\u4EE3\u7406\u662F\u6DF1\u5C42\u7684\uFF1A\u8BBF\u95EE\u7684\u4EFB\u4F55\u5D4C\u5957 property \u4E5F\u662F\u53EA\u8BFB\u7684\u3002
shallowReadonly: \u6D45\u53EA\u8BFB\u6570\u636E
  \u521B\u5EFA\u4E00\u4E2A\u4EE3\u7406\uFF0C\u4F7F\u5176\u81EA\u8EAB\u7684 property \u4E3A\u53EA\u8BFB\uFF0C\u4F46\u4E0D\u6267\u884C\u5D4C\u5957\u5BF9\u8C61\u7684\u6DF1\u5EA6\u53EA\u8BFB\u8F6C\u6362 
\u5E94\u7528\u573A\u666F: 
  \u5728\u67D0\u4E9B\u7279\u5B9A\u60C5\u51B5\u4E0B, \u6211\u4EEC\u53EF\u80FD\u4E0D\u5E0C\u671B\u5BF9\u6570\u636E\u8FDB\u884C\u66F4\u65B0\u7684\u64CD\u4F5C, \u90A3\u5C31\u53EF\u4EE5\u5305\u88C5\u751F\u6210\u4E00\u4E2A\u53EA\u8BFB\u4EE3\u7406\u5BF9\u8C61\u6765\u8BFB\u53D6\u6570\u636E, \u800C\u4E0D\u80FD\u4FEE\u6539\u6216\u5220\u9664
*/</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>

  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">2</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// const rState1 = readonly(state)</span>
    <span class="token keyword">const</span> rState2 <span class="token operator">=</span> <span class="token function">shallowReadonly</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// rState1.a++ // error</span>
      <span class="token comment">// rState1.b.c++ // error</span>

      <span class="token comment">// rState2.a++ // error</span>
      rState2<span class="token punctuation">.</span>b<span class="token punctuation">.</span>c<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">,</span>
      update
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-toraw-\u4E0E-markraw" tabindex="-1"><a class="header-anchor" href="#_3-toraw-\u4E0E-markraw" aria-hidden="true">#</a> 3) toRaw \u4E0E markRaw</h2><ul><li>toRaw <ul><li>\u8FD4\u56DE\u7531 <code>reactive</code> \u6216 <code>readonly</code> \u65B9\u6CD5\u8F6C\u6362\u6210\u54CD\u5E94\u5F0F\u4EE3\u7406\u7684\u666E\u901A\u5BF9\u8C61\u3002</li><li>\u8FD9\u662F\u4E00\u4E2A\u8FD8\u539F\u65B9\u6CD5\uFF0C\u53EF\u7528\u4E8E\u4E34\u65F6\u8BFB\u53D6\uFF0C\u8BBF\u95EE\u4E0D\u4F1A\u88AB\u4EE3\u7406/\u8DDF\u8E2A\uFF0C\u5199\u5165\u65F6\u4E5F\u4E0D\u4F1A\u89E6\u53D1\u754C\u9762\u66F4\u65B0\u3002</li></ul></li><li>markRaw <ul><li>\u6807\u8BB0\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u4F7F\u5176\u6C38\u8FDC\u4E0D\u4F1A\u8F6C\u6362\u4E3A\u4EE3\u7406\u3002\u8FD4\u56DE\u5BF9\u8C61\u672C\u8EAB</li><li>\u5E94\u7528\u573A\u666F: <ul><li>\u6709\u4E9B\u503C\u4E0D\u5E94\u88AB\u8BBE\u7F6E\u4E3A\u54CD\u5E94\u5F0F\u7684\uFF0C\u4F8B\u5982\u590D\u6742\u7684\u7B2C\u4E09\u65B9\u7C7B\u5B9E\u4F8B\u6216 Vue \u7EC4\u4EF6\u5BF9\u8C61\u3002</li><li>\u5F53\u6E32\u67D3\u5177\u6709\u4E0D\u53EF\u53D8\u6570\u636E\u6E90\u7684\u5927\u5217\u8868\u65F6\uFF0C\u8DF3\u8FC7\u4EE3\u7406\u8F6C\u6362\u53EF\u4EE5\u63D0\u9AD8\u6027\u80FD\u3002</li></ul></li></ul></li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{state}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>testToRaw<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6D4B\u8BD5toRaw<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>testMarkRaw<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6D4B\u8BD5markRaw<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">/* 
toRaw: \u5F97\u5230reactive\u4EE3\u7406\u5BF9\u8C61\u7684\u76EE\u6807\u6570\u636E\u5BF9\u8C61
*/</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  markRaw<span class="token punctuation">,</span>
  reactive<span class="token punctuation">,</span> toRaw<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> reactive<span class="token operator">&lt;</span>any<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">testToRaw</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">toRaw</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span>
      user<span class="token punctuation">.</span>age<span class="token operator">++</span>  <span class="token comment">// \u754C\u9762\u4E0D\u4F1A\u66F4\u65B0</span>

    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> <span class="token function-variable function">testMarkRaw</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> likes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">]</span>
      <span class="token comment">// state.likes = likes</span>
      state<span class="token punctuation">.</span>likes <span class="token operator">=</span> <span class="token function">markRaw</span><span class="token punctuation">(</span>likes<span class="token punctuation">)</span> <span class="token comment">// likes\u6570\u7EC4\u5C31\u4E0D\u518D\u662F\u54CD\u5E94\u5F0F\u7684\u4E86</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span>likes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token string">&#39;--&#39;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">,</span>
      testToRaw<span class="token punctuation">,</span>
      testMarkRaw<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-toref" tabindex="-1"><a class="header-anchor" href="#_4-toref" aria-hidden="true">#</a> 4) toRef</h2><ul><li>\u4E3A\u6E90\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4E0A\u7684\u67D0\u4E2A\u5C5E\u6027\u521B\u5EFA\u4E00\u4E2A ref\u5BF9\u8C61, \u4E8C\u8005\u5185\u90E8\u64CD\u4F5C\u7684\u662F\u540C\u4E00\u4E2A\u6570\u636E\u503C, \u66F4\u65B0\u65F6\u4E8C\u8005\u662F\u540C\u6B65\u7684</li><li>\u533A\u522Bref: \u62F7\u8D1D\u4E86\u4E00\u4EFD\u65B0\u7684\u6570\u636E\u503C\u5355\u72EC\u64CD\u4F5C, \u66F4\u65B0\u65F6\u76F8\u4E92\u4E0D\u5F71\u54CD</li><li>\u5E94\u7528: \u5F53\u8981\u5C06 \u67D0\u4E2Aprop \u7684 ref \u4F20\u9012\u7ED9\u590D\u5408\u51FD\u6570\u65F6\uFF0CtoRef \u5F88\u6709\u7528</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{state}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{foo}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{foo2}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u66F4\u65B0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">:foo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>foo<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">/*
toRef:
  \u4E3A\u6E90\u54CD\u5E94\u5F0F\u5BF9\u8C61\u4E0A\u7684\u67D0\u4E2A\u5C5E\u6027\u521B\u5EFA\u4E00\u4E2A ref\u5BF9\u8C61, \u4E8C\u8005\u5185\u90E8\u64CD\u4F5C\u7684\u662F\u540C\u4E00\u4E2A\u6570\u636E\u503C, \u66F4\u65B0\u65F6\u4E8C\u8005\u662F\u540C\u6B65\u7684
  \u533A\u522Bref: \u62F7\u8D1D\u4E86\u4E00\u4EFD\u65B0\u7684\u6570\u636E\u503C\u5355\u72EC\u64CD\u4F5C, \u66F4\u65B0\u65F6\u76F8\u4E92\u4E0D\u5F71\u54CD
  \u5E94\u7528: \u5F53\u8981\u5C06\u67D0\u4E2A prop \u7684 ref \u4F20\u9012\u7ED9\u590D\u5408\u51FD\u6570\u65F6\uFF0CtoRef \u5F88\u6709\u7528
*/</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  reactive<span class="token punctuation">,</span>
  toRef<span class="token punctuation">,</span>
  ref<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> Child <span class="token keyword">from</span> <span class="token string">&#39;./Child.vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>

  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token function">toRef</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> foo2 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>foo<span class="token punctuation">)</span>

    <span class="token keyword">const</span> <span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>foo<span class="token operator">++</span>
      <span class="token comment">// foo.value++</span>
      <span class="token comment">// foo2.value++  // foo\u548Cstate\u4E2D\u7684\u6570\u636E\u4E0D\u4F1A\u66F4\u65B0</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">,</span>
      foo<span class="token punctuation">,</span>
      foo2<span class="token punctuation">,</span>
      update<span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Child
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>Child<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>{{foo}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>{{length}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed<span class="token punctuation">,</span> defineComponent<span class="token punctuation">,</span> Ref<span class="token punctuation">,</span> toRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> component <span class="token operator">=</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token literal-property property">require</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token parameter">props<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> length <span class="token operator">=</span> <span class="token function">useFeatureX</span><span class="token punctuation">(</span><span class="token function">toRef</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> <span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      length
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">useFeatureX</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">foo</span><span class="token operator">:</span> Ref</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> lenth <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> foo<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length<span class="token punctuation">)</span>

  <span class="token keyword">return</span> lenth
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> component
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-customref" tabindex="-1"><a class="header-anchor" href="#_5-customref" aria-hidden="true">#</a> 5) customRef</h2><ul><li>\u521B\u5EFA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684 ref\uFF0C\u5E76\u5BF9\u5176\u4F9D\u8D56\u9879\u8DDF\u8E2A\u548C\u66F4\u65B0\u89E6\u53D1\u8FDB\u884C\u663E\u5F0F\u63A7\u5236</li><li>\u9700\u6C42: \u4F7F\u7528 customRef \u5B9E\u73B0 debounce \u7684\u793A\u4F8B</li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>keyword<span class="token punctuation">&quot;</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u641C\u7D22\u5173\u952E\u5B57<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>{{keyword}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">/*
customRef:
  \u521B\u5EFA\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684 ref\uFF0C\u5E76\u5BF9\u5176\u4F9D\u8D56\u9879\u8DDF\u8E2A\u548C\u66F4\u65B0\u89E6\u53D1\u8FDB\u884C\u663E\u5F0F\u63A7\u5236

\u9700\u6C42: 
  \u4F7F\u7528 customRef \u5B9E\u73B0 debounce \u7684\u793A\u4F8B
*/</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  ref<span class="token punctuation">,</span>
  customRef
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>

  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> keyword <span class="token operator">=</span> <span class="token function">useDebouncedRef</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>keyword<span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      keyword
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 
\u5B9E\u73B0\u51FD\u6570\u9632\u6296\u7684\u81EA\u5B9A\u4E49ref
*/</span>
<span class="token keyword">function</span> useDebouncedRef<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> delay <span class="token operator">=</span> <span class="token number">200</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token literal-property property">timeout</span><span class="token operator">:</span> number
  <span class="token keyword">return</span> <span class="token function">customRef</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">track<span class="token punctuation">,</span> trigger</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u544A\u8BC9Vue\u8FFD\u8E2A\u6570\u636E</span>
        <span class="token function">track</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> value
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function">set</span><span class="token punctuation">(</span>newValue<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span>
        timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          value <span class="token operator">=</span> newValue
          <span class="token comment">// \u544A\u8BC9Vue\u53BB\u89E6\u53D1\u754C\u9762\u66F4\u65B0</span>
          <span class="token function">trigger</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-provide-\u4E0E-inject" tabindex="-1"><a class="header-anchor" href="#_6-provide-\u4E0E-inject" aria-hidden="true">#</a> 6) provide \u4E0E inject</h2><ul><li><p>provide<code>\u548C</code>inject<code>\u63D0\u4F9B\u4F9D\u8D56\u6CE8\u5165\uFF0C\u529F\u80FD\u7C7B\u4F3C 2.x \u7684</code>provide/inject</p></li><li><p>\u5B9E\u73B0\u8DE8\u5C42\u7EA7\u7EC4\u4EF6(\u7956\u5B59)\u95F4\u901A\u4FE1</p></li></ul><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>\u7236\u7EC4\u4EF6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>\u5F53\u524D\u989C\u8272: {{color}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color=<span class="token punctuation">&#39;</span>red<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u7EA2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color=<span class="token punctuation">&#39;</span>yellow<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u9EC4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>color=<span class="token punctuation">&#39;</span>blue<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u84DD<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Son</span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> provide<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">/* 
- provide\` \u548C \`inject\` \u63D0\u4F9B\u4F9D\u8D56\u6CE8\u5165\uFF0C\u529F\u80FD\u7C7B\u4F3C 2.x \u7684 \`provide/inject
- \u5B9E\u73B0\u8DE8\u5C42\u7EA7\u7EC4\u4EF6(\u7956\u5B59)\u95F4\u901A\u4FE1
*/</span>

<span class="token keyword">import</span> Son <span class="token keyword">from</span> <span class="token string">&#39;./Son.vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;ProvideInject&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    Son
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">const</span> color <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">)</span>

    <span class="token function">provide</span><span class="token punctuation">(</span><span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span> color<span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      color
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>\u5B50\u7EC4\u4EF6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>GrandSon</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> GrandSon <span class="token keyword">from</span> <span class="token string">&#39;./GrandSon.vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    GrandSon
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">:style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{color}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5B59\u5B50\u7EC4\u4EF6: {{color}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> color <span class="token operator">=</span> <span class="token function">inject</span><span class="token punctuation">(</span><span class="token string">&#39;color&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      color
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#_7-\u54CD\u5E94\u5F0F\u6570\u636E\u7684\u5224\u65AD" aria-hidden="true">#</a> 7) \u54CD\u5E94\u5F0F\u6570\u636E\u7684\u5224\u65AD</h2><ul><li>isRef: \u68C0\u67E5\u4E00\u4E2A\u503C\u662F\u5426\u4E3A\u4E00\u4E2A ref \u5BF9\u8C61</li><li>isReactive: \u68C0\u67E5\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u662F\u7531 <code>reactive</code> \u521B\u5EFA\u7684\u54CD\u5E94\u5F0F\u4EE3\u7406</li><li>isReadonly: \u68C0\u67E5\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u662F\u7531 <code>readonly</code> \u521B\u5EFA\u7684\u53EA\u8BFB\u4EE3\u7406</li><li>isProxy: \u68C0\u67E5\u4E00\u4E2A\u5BF9\u8C61\u662F\u5426\u662F\u7531 <code>reactive</code> \u6216\u8005 <code>readonly</code> \u65B9\u6CD5\u521B\u5EFA\u7684\u4EE3\u7406</li></ul>`,24),o=[e];function l(c,i){return s(),a("div",null,o)}var r=n(p,[["render",l],["__file","02_Composition API_\u5176\u5B83\u90E8\u5206.html.vue"]]);export{r as default};
