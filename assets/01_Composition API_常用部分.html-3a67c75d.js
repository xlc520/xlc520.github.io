import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as l,b as n,d as s,e as t,a as p}from"./app-865676a6.js";const i={},u=n("h1",{id:"_1-composition-api-常用部分",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-composition-api-常用部分","aria-hidden":"true"},"#"),s(" 1. Composition API(常用部分)")],-1),k=n("p",null,"文档:",-1),r={href:"https://composition-api.vuejs.org/zh/api.html",target:"_blank",rel:"noopener noreferrer"},d=p(`<h2 id="_1-setup" tabindex="-1"><a class="header-anchor" href="#_1-setup" aria-hidden="true">#</a> 1) setup</h2><ul><li>新的option, 所有的组合API函数都在此使用, 只在初始化时执行一次</li><li>函数如果返回对象, 对象中的属性或方法, 模板中可以直接使用</li></ul><h2 id="_2-ref" tabindex="-1"><a class="header-anchor" href="#_2-ref" aria-hidden="true">#</a> 2) ref</h2><ul><li>作用: 定义一个数据的响应式</li><li>语法: const xxx = ref(initValue): <ul><li>创建一个包含响应式数据的引用(reference)对象</li><li>js中操作数据: xxx.value</li><li>模板中操作数据: 不需要.value</li></ul></li><li>一般用来定义一个基本类型的响应式数据</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>{{count}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>更新<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  ref
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>

  <span class="token comment">/* 在Vue3中依然可以使用data和methods配置, 但建议使用其新语法实现 */</span>
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

  <span class="token comment">/* 使用vue3的composition API */</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token comment">// 定义响应式数据 ref对象</span>
    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>

    <span class="token comment">// 更新响应式数据的函数</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-reactive" tabindex="-1"><a class="header-anchor" href="#_3-reactive" aria-hidden="true">#</a> 3) reactive</h2><ul><li>作用: 定义多个数据的响应式</li><li>const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象</li><li>响应式转换是“深层的”：会影响对象内部所有嵌套的属性</li><li>内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>name: {{state.name}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>age: {{state.age}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>wife: {{state.wife}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>更新<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">/* 
reactive: 
    作用: 定义多个数据的响应式
    const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
    响应式转换是“深层的”：会影响对象内部所有嵌套的属性
    内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
*/</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  reactive<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* 
    定义响应式数据对象
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-比较vue2与vue3的响应式-重要" tabindex="-1"><a class="header-anchor" href="#_4-比较vue2与vue3的响应式-重要" aria-hidden="true">#</a> 4) 比较Vue2与Vue3的响应式(重要)</h2><h2 id="vue2的响应式" tabindex="-1"><a class="header-anchor" href="#vue2的响应式" aria-hidden="true">#</a> vue2的响应式</h2><ul><li>核心: <ul><li>对象: 通过defineProperty对对象的已有属性值的读取和修改进行劫持(监视/拦截)</li><li>数组: 通过重写数组更新数组一系列更新元素的方法来实现元素修改的劫持</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&#39;count&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token function">set</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>问题 <ul><li>对象直接新添加的属性或删除已有属性, 界面不会自动更新</li><li>直接通过下标替换元素或更新length, 界面不会自动更新 arr[1] = {}</li></ul></li></ul><h2 id="vue3的响应式" tabindex="-1"><a class="header-anchor" href="#vue3的响应式" aria-hidden="true">#</a> Vue3的响应式</h2>`,14),v=n("li",null,"通过Proxy(代理): 拦截对data任意属性的任意(13种)操作, 包括属性值的读写, 属性的添加, 属性的删除等...",-1),m=n("li",null,"通过 Reflect(反射): 动态对被代理对象的相应属性进行特定的操作",-1),b={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy",target:"_blank",rel:"noopener noreferrer"},g={href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect",target:"_blank",rel:"noopener noreferrer"},f=p(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token comment">// 拦截读取属性值</span>
    <span class="token function">get</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 拦截设置属性值或添加新属性</span>
    <span class="token function">set</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 拦截删除属性</span>
    <span class="token function">deleteProperty</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

proxy<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;tom&#39;</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Proxy 与 Reflect<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    
    <span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">12</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">/* 
    proxyUser是代理对象, user是被代理对象
    后面所有的操作都是通过代理对象来操作被代理对象内部属性
    */</span>
    <span class="token keyword">const</span> proxyUser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token punctuation">{</span>

      <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;劫持get()&#39;</span><span class="token punctuation">,</span> prop<span class="token punctuation">)</span>
        <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;劫持set()&#39;</span><span class="token punctuation">,</span> prop<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
        <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// (2)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>

      <span class="token function">deleteProperty</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> prop</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;劫持delete属性&#39;</span><span class="token punctuation">,</span> prop<span class="token punctuation">)</span>
        <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> prop<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 读取属性值</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxyUser<span class="token operator">===</span>user<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxyUser<span class="token punctuation">.</span>name<span class="token punctuation">,</span> proxyUser<span class="token punctuation">.</span>age<span class="token punctuation">)</span>
    <span class="token comment">// 设置属性值</span>
    proxyUser<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;bob&#39;</span>
    proxyUser<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">13</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
    <span class="token comment">// 添加属性</span>
    proxyUser<span class="token punctuation">.</span>sex <span class="token operator">=</span> <span class="token string">&#39;男&#39;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
    <span class="token comment">// 删除属性</span>
    <span class="token keyword">delete</span> proxyUser<span class="token punctuation">.</span>sex
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-setup细节" tabindex="-1"><a class="header-anchor" href="#_5-setup细节" aria-hidden="true">#</a> 5) setup细节</h2><ul><li><p>setup执行的时机</p><ul><li>在beforeCreate之前执行(一次), 此时组件对象还没有创建</li><li>this是undefined, 不能通过this来访问data/computed/methods / props</li><li>其实所有的composition API相关回调函数中也都不可以</li></ul></li><li><p>setup的返回值</p><ul><li>一般都返回一个对象: 为模板提供数据, 也就是模板中可以直接使用此对象中的所有属性/方法</li><li>返回对象中的属性会与data函数返回对象的属性合并成为组件对象的属性</li><li>返回对象中的方法会与methods中的方法合并成功组件对象的方法</li><li>如果有重名, setup优先</li><li>注意:</li><li>一般不要混合使用: methods中可以访问setup提供的属性和方法, 但在setup方法中不能访问data和methods</li><li>setup不能是一个async函数: 因为返回值不再是return的对象, 而是promise, 模板看不到return对象中的属性数据</li></ul></li><li><p>setup的参数</p><ul><li>setup(props, context) / setup(props, {attrs, slots, emit})</li><li>props: 包含props配置声明且传入了的所有属性的对象</li><li>attrs: 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs</li><li>slots: 包含所有传入的插槽内容的对象, 相当于 this.$slots</li><li>emit: 用来分发自定义事件的函数, 相当于 this.$emit</li></ul></li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>msg: {{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fn(&#39;--&#39;)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>更新<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>{{n}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>{{m}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>msg: {{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>msg2: {{$attrs.msg2}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>更新<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
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

  <span class="token literal-property property">emits</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;fn&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 可选的, 声明了更利于程序员阅读, 且可以对分发的事件数据进行校验</span>

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

      <span class="token comment">// 分发自定义事件</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-reactive与ref-细节" tabindex="-1"><a class="header-anchor" href="#_6-reactive与ref-细节" aria-hidden="true">#</a> 6) reactive与ref-细节</h2><ul><li>是Vue3的 composition API中2个最重要的响应式API</li><li>ref用来处理基本类型数据, reactive用来处理对象(递归深度响应式)</li><li>如果用ref对象/数组, 内部会自动将对象/数组转换为reactive的代理对象</li><li>ref内部: 通过给value属性添加getter/setter来实现对数据的劫持</li><li>reactive内部: 通过使用Proxy来实现对对象内部所有数据的劫持, 并通过Reflect操作对象内部数据</li><li>ref的数据操作: 在js中要.value, 在模板中不需要(内部解析模板时会自动添加.value)</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>m1: {{m1}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>m2: {{m2}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>m3: {{m3}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>更新<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
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

    <span class="token comment">// 使用ref处理对象  ==&gt; 对象会被自动reactive为proxy对象</span>
    <span class="token keyword">const</span> m3 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">a1</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">a2</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">a3</span><span class="token operator">:</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m1<span class="token punctuation">,</span> m2<span class="token punctuation">,</span> m3<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>m3<span class="token punctuation">.</span>value<span class="token punctuation">.</span>a2<span class="token punctuation">)</span> <span class="token comment">// 也是一个proxy对象</span>

    <span class="token keyword">function</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      m1<span class="token punctuation">.</span>value <span class="token operator">+=</span> <span class="token string">&#39;--&#39;</span>
      m2<span class="token punctuation">.</span>x <span class="token operator">+=</span> <span class="token number">1</span>
      m2<span class="token punctuation">.</span>y<span class="token punctuation">.</span>z <span class="token operator">+=</span> <span class="token string">&#39;++&#39;</span>

      m3<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">a1</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">a2</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">a3</span><span class="token operator">:</span> <span class="token string">&#39;abc---&#39;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
      m3<span class="token punctuation">.</span>value<span class="token punctuation">.</span>a2<span class="token punctuation">.</span>a3 <span class="token operator">+=</span> <span class="token string">&#39;==&#39;</span> <span class="token comment">// reactive对对象进行了深度数据劫持</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-计算属性与监视" tabindex="-1"><a class="header-anchor" href="#_7-计算属性与监视" aria-hidden="true">#</a> 7) 计算属性与监视</h2><ul><li><p>computed函数:</p><ul><li>与computed配置功能一致</li><li>只有getter</li><li>有getter和setter</li></ul></li><li><p>watch函数</p><ul><li>与watch配置功能一致</li><li>监视指定的一个或多个响应式数据, 一旦数据变化, 就自动执行监视回调</li><li>默认初始时不执行回调, 但可以通过配置immediate为true, 来指定初始时立即执行第一次</li><li>通过配置deep为true, 来指定深度监视</li></ul></li><li><p>watchEffect函数</p><ul><li>不用直接指定要监视的数据, 回调函数中使用的哪些响应式数据就监视哪些响应式数据</li><li>默认初始时就会执行第一次, 从而可以收集需要监视的数据</li><li>监视数据发生变化时回调</li></ul></li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  fistName: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user.firstName<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
  lastName: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user.lastName<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
  fullName1: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fullName1<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
  fullName2: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fullName2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>
  fullName3: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fullName3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token comment">/*
计算属性与监视
1. computed函数: 
  与computed配置功能一致
  只有getter
  有getter和setter
2. watch函数
  与watch配置功能一致
  监视指定的一个或多个响应式数据, 一旦数据变化, 就自动执行监视回调
  默认初始时不执行回调, 但可以通过配置immediate为true, 来指定初始时立即执行第一次
  通过配置deep为true, 来指定深度监视
3. watchEffect函数
  不用直接指定要监视的数据, 回调函数中使用的哪些响应式数据就监视哪些响应式数据
  默认初始时就会执行第一次, 从而可以收集需要监视的数据
  监视数据发生变化时回调
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

    <span class="token comment">// 只有getter的计算属性</span>
    <span class="token keyword">const</span> fullName1 <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fullName1&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> user<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">+</span> user<span class="token punctuation">.</span>lastName
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">// 有getter与setter的计算属性</span>
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
    watchEffect: 监视所有回调中使用的数据
    */</span>
    <span class="token comment">/* 
    watchEffect(() =&gt; {
      console.log(&#39;watchEffect&#39;)
      fullName3.value = user.firstName + &#39;-&#39; + user.lastName
    }) 
    */</span>

    <span class="token comment">/* 
    使用watch的2个特性:
      深度监视
      初始化立即执行
    */</span>
    <span class="token function">watch</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      fullName3<span class="token punctuation">.</span>value <span class="token operator">=</span> user<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">+</span> user<span class="token punctuation">.</span>lastName
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">immediate</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// 是否初始化立即执行一次, 默认是false</span>
      <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否是深度监视, 默认是false</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">/* 
    watch一个数据
      默认在数据发生改变时执行回调
    */</span>
    <span class="token function">watch</span><span class="token punctuation">(</span>fullName3<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;watch&#39;</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> names <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
      user<span class="token punctuation">.</span>firstName <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
      user<span class="token punctuation">.</span>lastName <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token comment">/* 
    watch多个数据: 
      使用数组来指定
      如果是ref对象, 直接指定
      如果是reactive对象中的属性,  必须通过函数来指定
    */</span>
    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> user<span class="token punctuation">.</span>firstName<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> user<span class="token punctuation">.</span>lastName<span class="token punctuation">,</span> fullName3<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">values</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;监视多个数据&#39;</span><span class="token punctuation">,</span> values<span class="token punctuation">)</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-生命周期" tabindex="-1"><a class="header-anchor" href="#_8-生命周期" aria-hidden="true">#</a> 8) 生命周期</h2><p><strong>vue2.x的生命周期</strong></p><figure><img src="https://vipkshttps3.wiz.cn/ks/note/view/49c30824-dcdf-4bd0-af2a-708f490b44a1/10311b3b-496c-41f1-8df3-c87572008080/index_files/1604629129730-y1h.png" alt="lifecycle_2" tabindex="0" loading="lazy"><figcaption>lifecycle_2</figcaption></figure><p><strong>vue3的生命周期</strong></p><figure><img src="https://vipkshttps3.wiz.cn/ks/note/view/49c30824-dcdf-4bd0-af2a-708f490b44a1/10311b3b-496c-41f1-8df3-c87572008080/index_files/1604629129585-tqn.png" alt="lifecycle_3" tabindex="0" loading="lazy"><figcaption>lifecycle_3</figcaption></figure><p><strong>与 2.x 版本生命周期相对应的组合式 API</strong></p><ul><li><code>beforeCreate</code> -&gt; 使用 <code>setup()</code></li><li><code>created</code> -&gt; 使用 <code>setup()</code></li><li><code>beforeMount</code> -&gt; <code>onBeforeMount</code></li><li><code>mounted</code> -&gt; <code>onMounted</code></li><li><code>beforeUpdate</code> -&gt; <code>onBeforeUpdate</code></li><li><code>updated</code> -&gt; <code>onUpdated</code></li><li><code>beforeDestroy</code> -&gt; <code>onBeforeUnmount</code></li><li><code>destroyed</code> -&gt; <code>onUnmounted</code></li><li><code>errorCaptured</code> -&gt; <code>onErrorCaptured</code></li></ul><p><strong>新增的钩子函数</strong></p><p>组合式 API 还提供了以下调试钩子函数：</p><ul><li>onRenderTracked</li><li>onRenderTriggered</li></ul><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>about<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>msg: {{msg}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>更新<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>isShow=!isShow<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>切换<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_09-自定义hook函数" tabindex="-1"><a class="header-anchor" href="#_09-自定义hook函数" aria-hidden="true">#</a> 09) 自定义hook函数</h2><ul><li><p>使用Vue3的组合API封装的可复用的功能函数</p></li><li><p>自定义hook的作用类似于vue2中的mixin技术</p></li><li><p>自定义Hook的优势: 很清楚复用功能代码的来源, 更清楚易懂</p></li><li><p>需求1: 收集用户鼠标点击的页面坐标</p><p>hooks/useMousePosition.ts</p></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> onMounted<span class="token punctuation">,</span> onUnmounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">/* 
收集用户鼠标点击的页面坐标
*/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">useMousePosition</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 初始化坐标数据</span>
  <span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> y <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>

  <span class="token comment">// 用于收集点击事件坐标的函数</span>
  <span class="token keyword">const</span> <span class="token function-variable function">updatePosition</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> MouseEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    x<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">.</span>pageX
    y<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">.</span>pageY
  <span class="token punctuation">}</span>

  <span class="token comment">// 挂载后绑定点击监听</span>
  <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> updatePosition<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token comment">// 卸载前解绑点击监听</span>
  <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> updatePosition<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>x<span class="token punctuation">,</span> y<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>x: {{x}}, y: {{y}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">

<span class="token keyword">import</span> <span class="token punctuation">{</span>
  ref
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token comment">/* 
在组件中引入并使用自定义hook
自定义hook的作用类似于vue2中的mixin技术
自定义Hook的优势: 很清楚复用功能代码的来源, 更清楚易懂
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>利用TS泛型强化类型检查</p></li><li><p>需求2: 封装发ajax请求的hook函数</p><p>hooks/useRequest.ts</p></li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span>

<span class="token comment">/* 
使用axios发送异步ajax请求
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
      errorMsg<span class="token punctuation">.</span>value <span class="token operator">=</span> e<span class="token punctuation">.</span>message <span class="token operator">||</span> <span class="token string">&#39;未知错误&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    loading<span class="token punctuation">,</span>
    result<span class="token punctuation">,</span>
    errorMsg<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
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

<span class="token comment">// 地址数据接口</span>
<span class="token keyword">interface</span> <span class="token class-name">AddressResult</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">id</span><span class="token operator">:</span> number<span class="token punctuation">;</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
  <span class="token literal-property property">distance</span><span class="token operator">:</span> string<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 产品数据接口</span>
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
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token comment">// 有提示</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-torefs" tabindex="-1"><a class="header-anchor" href="#_10-torefs" aria-hidden="true">#</a> 10) toRefs</h2><p>把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref</p><p>应用: 当从合成函数返回响应式对象时，toRefs 非常有用，这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用</p><p>问题: reactive 对象取出的所有属性值都是非响应式的</p><p>解决: 利用 toRefs 可以将一个响应式 reactive 对象的所有原始属性转换为响应式的 ref 属性</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
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
  将响应式对象中所有属性包装为ref对象, 并返回包含这些ref对象的普通对象
  应用: 当从合成函数返回响应式对象时，toRefs 非常有用，
        这样消费组件就可以在不丢失响应式的情况下对返回的对象进行分解使用
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-ref获取元素" tabindex="-1"><a class="header-anchor" href="#_11-ref获取元素" aria-hidden="true">#</a> 11) ref获取元素</h2><p>利用ref函数获取组件中的标签元素</p><p>功能需求: 让输入框自动获取焦点</p><div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>App<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>---
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputRef<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> onMounted<span class="token punctuation">,</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token comment">/* 
ref获取元素: 利用ref函数获取组件中的标签元素
功能需求: 让输入框自动获取焦点
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41);function y(h,w){const a=o("ExternalLinkIcon");return c(),l("div",null,[u,k,n("p",null,[s("​ "),n("a",r,[s("https://composition-api.vuejs.org/zh/api.html"),t(a)])]),d,n("ul",null,[n("li",null,[s("核心: "),n("ul",null,[v,m,n("li",null,[s("文档: "),n("ul",null,[n("li",null,[n("a",b,[s("https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy"),t(a)])]),n("li",null,[n("a",g,[s("https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect"),t(a)])])])])])])]),f])}const _=e(i,[["render",y],["__file","01_Composition API_常用部分.html.vue"]]);export{_ as default};
