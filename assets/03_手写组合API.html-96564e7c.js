import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as p}from"./app-41defce9.js";const t={},e=p(`<h1 id="_3-手写组合api" tabindex="-1"><a class="header-anchor" href="#_3-手写组合api" aria-hidden="true">#</a> 3. 手写组合API</h1><h2 id="_1-shallowreactive-与-reactive" tabindex="-1"><a class="header-anchor" href="#_1-shallowreactive-与-reactive" aria-hidden="true">#</a> 1) shallowReactive 与 reactive</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> reactiveHandler <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">get</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>key<span class="token operator">===</span><span class="token string">&#39;_is_reactive&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>

    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">set</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;数据已更新, 去更新界面&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">deleteProperty</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;数据已删除, 去更新界面&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 
自定义shallowReactive
*/</span>
<span class="token keyword">function</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> reactiveHandler<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 
自定义reactive
*/</span>
<span class="token keyword">function</span> <span class="token function">reactive</span> <span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> target<span class="token operator">===</span><span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 数组</span>
      target<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        target<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 对象</span>
      Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> reactiveHandler<span class="token punctuation">)</span>
    <span class="token keyword">return</span> proxy
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> target
<span class="token punctuation">}</span>


<span class="token comment">/* 测试自定义shallowReactive */</span>
<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">3</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

proxy<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">}</span> <span class="token comment">// 劫持到了</span>
proxy<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">5</span> <span class="token comment">// 没有劫持到</span>


<span class="token comment">/* 测试自定义reactive */</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxy<span class="token punctuation">)</span>
proxy<span class="token punctuation">.</span>b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>x <span class="token operator">+=</span> <span class="token number">1</span>
proxy<span class="token punctuation">.</span>c<span class="token punctuation">.</span>x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-shallowref-与-ref" tabindex="-1"><a class="header-anchor" href="#_2-shallowref-与-ref" aria-hidden="true">#</a> 2) shallowRef 与 ref</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*
自定义shallowRef
*/</span>
<span class="token keyword">function</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">_value</span><span class="token operator">:</span> target<span class="token punctuation">,</span> <span class="token comment">// 用来保存数据的内部属性</span>
    <span class="token literal-property property">_is_ref</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 用来标识是ref对象</span>
    <span class="token keyword">get</span> <span class="token function">value</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">set</span> <span class="token function">value</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_value <span class="token operator">=</span> val
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;set value 数据已更新, 去更新界面&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>

<span class="token comment">/* 
自定义ref
*/</span>
<span class="token keyword">function</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> target<span class="token operator">===</span><span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    target <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">_value</span><span class="token operator">:</span> target<span class="token punctuation">,</span> <span class="token comment">// 用来保存数据的内部属性</span>
    <span class="token literal-property property">_is_ref</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 用来标识是ref对象</span>
    <span class="token keyword">get</span> <span class="token function">value</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">set</span> <span class="token function">value</span> <span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>_value <span class="token operator">=</span> val
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;set value 数据已更新, 去更新界面&#39;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> result
<span class="token punctuation">}</span>

<span class="token comment">/* 测试自定义shallowRef */</span>
<span class="token keyword">const</span> ref3 <span class="token operator">=</span> <span class="token function">shallowRef</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
ref3<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;xxx&#39;</span>
ref3<span class="token punctuation">.</span>value<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token string">&#39;yyy&#39;</span>


<span class="token comment">/* 测试自定义ref */</span>
<span class="token keyword">const</span> ref1 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> ref2 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
ref1<span class="token punctuation">.</span>value<span class="token operator">++</span>
ref2<span class="token punctuation">.</span>value<span class="token punctuation">.</span>b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>x<span class="token operator">++</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ref1<span class="token punctuation">,</span> ref2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-shallowreadonly-与-readonly" tabindex="-1"><a class="header-anchor" href="#_3-shallowreadonly-与-readonly" aria-hidden="true">#</a> 3) shallowReadonly 与 readonly</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> readonlyHandler <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">get</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>key<span class="token operator">===</span><span class="token string">&#39;_is_readonly&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>

    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">set</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;只读的, 不能修改&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">deleteProperty</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;只读的, 不能删除&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 
自定义shallowReadonly
*/</span>
<span class="token keyword">function</span> <span class="token function">shallowReadonly</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> readonlyHandler<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 
自定义readonly
*/</span>
<span class="token keyword">function</span> <span class="token function">readonly</span><span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> target<span class="token operator">===</span><span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 数组</span>
      target<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        target<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">readonly</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 对象</span>
      Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">readonly</span><span class="token punctuation">(</span>target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> readonlyHandler<span class="token punctuation">)</span>

    <span class="token keyword">return</span> proxy 
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> target
<span class="token punctuation">}</span>

<span class="token comment">/* 测试自定义readonly */</span>
<span class="token comment">/* 测试自定义shallowReadonly */</span>
<span class="token keyword">const</span> objReadOnly <span class="token operator">=</span> <span class="token function">readonly</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> objReadOnly2 <span class="token operator">=</span> <span class="token function">shallowReadonly</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

objReadOnly<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">1</span>
objReadOnly<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">2</span>
objReadOnly2<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token number">1</span>
objReadOnly2<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-isref-isreactive-与-isreadonly" tabindex="-1"><a class="header-anchor" href="#_4-isref-isreactive-与-isreadonly" aria-hidden="true">#</a> 4) isRef, isReactive 与 isReadonly</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* 
判断是否是ref对象
*/</span>
<span class="token keyword">function</span> <span class="token function">isRef</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> obj <span class="token operator">&amp;&amp;</span> obj<span class="token punctuation">.</span>_is_ref
<span class="token punctuation">}</span>

<span class="token comment">/* 
判断是否是reactive对象
*/</span>
<span class="token keyword">function</span> <span class="token function">isReactive</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> obj <span class="token operator">&amp;&amp;</span> obj<span class="token punctuation">.</span>_is_reactive
<span class="token punctuation">}</span>

<span class="token comment">/* 
判断是否是readonly对象
*/</span>
<span class="token keyword">function</span> <span class="token function">isReadonly</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> obj <span class="token operator">&amp;&amp;</span> obj<span class="token punctuation">.</span>_is_readonly
<span class="token punctuation">}</span>

<span class="token comment">/* 
是否是reactive或readonly产生的代理对象
*/</span>
<span class="token keyword">function</span> <span class="token function">isProxy</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">isReactive</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">isReadonly</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
<span class="token punctuation">}</span>


<span class="token comment">/* 测试判断函数 */</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isReactive</span><span class="token punctuation">(</span><span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isRef</span><span class="token punctuation">(</span><span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isReadonly</span><span class="token punctuation">(</span><span class="token function">readonly</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isProxy</span><span class="token punctuation">(</span><span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">isProxy</span><span class="token punctuation">(</span><span class="token function">readonly</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),o=[e];function c(l,i){return s(),a("div",null,o)}const k=n(t,[["render",c],["__file","03_手写组合API.html.vue"]]);export{k as default};
