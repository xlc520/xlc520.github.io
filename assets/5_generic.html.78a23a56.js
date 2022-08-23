import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,d as p}from"./app.053a0ce6.js";const t={},e=p(`<h1 id="_5-\u6CDB\u578B" tabindex="-1"><a class="header-anchor" href="#_5-\u6CDB\u578B" aria-hidden="true">#</a> 5. \u6CDB\u578B</h1><p>\u6307\u5728\u5B9A\u4E49\u51FD\u6570\u3001\u63A5\u53E3\u6216\u7C7B\u7684\u65F6\u5019\uFF0C\u4E0D\u9884\u5148\u6307\u5B9A\u5177\u4F53\u7684\u7C7B\u578B\uFF0C\u800C\u5728\u4F7F\u7528\u7684\u65F6\u5019\u518D\u6307\u5B9A\u5177\u4F53\u7C7B\u578B\u7684\u4E00\u79CD\u7279\u6027\u3002</p><h2 id="\u5F15\u5165" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165" aria-hidden="true">#</a> \u5F15\u5165</h2><p>\u4E0B\u9762\u521B\u5EFA\u4E00\u4E2A\u51FD\u6570, \u5B9E\u73B0\u529F\u80FD: \u6839\u636E\u6307\u5B9A\u7684\u6570\u91CF <code>count</code> \u548C\u6570\u636E <code>value</code> , \u521B\u5EFA\u4E00\u4E2A\u5305\u542B <code>count</code> \u4E2A <code>value</code> \u7684\u6570\u7EC4 \u4E0D\u7528\u6CDB\u578B\u7684\u8BDD\uFF0C\u8FD9\u4E2A\u51FD\u6570\u53EF\u80FD\u662F\u4E0B\u9762\u8FD9\u6837\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">createArray</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> arr<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> count<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

<span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token function">createArray</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token function">createArray</span><span class="token punctuation">(</span><span class="token string">&#39;aa&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> arr2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528\u51FD\u6570\u6CDB\u578B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u51FD\u6570\u6CDB\u578B" aria-hidden="true">#</a> \u4F7F\u7528\u51FD\u6570\u6CDB\u578B</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">createArray2</span> <span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span> <span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> arr<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> count<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>
<span class="token keyword">const</span> arr3 <span class="token operator">=</span> <span class="token generic-function"><span class="token function">createArray2</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr3<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// console.log(arr3[0].split(&#39;&#39;)) // error</span>
<span class="token keyword">const</span> arr4 <span class="token operator">=</span> <span class="token generic-function"><span class="token function">createArray2</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;aa&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr4<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// console.log(arr4[0].toFixed()) // error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u591A\u4E2A\u6CDB\u578B\u53C2\u6570\u7684\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u591A\u4E2A\u6CDB\u578B\u53C2\u6570\u7684\u51FD\u6570" aria-hidden="true">#</a> \u591A\u4E2A\u6CDB\u578B\u53C2\u6570\u7684\u51FD\u6570</h2><p>\u4E00\u4E2A\u51FD\u6570\u53EF\u4EE5\u5B9A\u4E49\u591A\u4E2A\u6CDB\u578B\u53C2\u6570</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token generic-function"><span class="token function">swap</span> <span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">K</span><span class="token punctuation">,</span> <span class="token constant">V</span><span class="token operator">&gt;</span></span></span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token constant">K</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token constant">V</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">K</span><span class="token punctuation">,</span> <span class="token constant">V</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token generic-function"><span class="token function">swap</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">,</span> result<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6CDB\u578B\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B\u63A5\u53E3" aria-hidden="true">#</a> \u6CDB\u578B\u63A5\u53E3</h2><p>\u5728\u5B9A\u4E49\u63A5\u53E3\u65F6, \u4E3A\u63A5\u53E3\u4E2D\u7684\u5C5E\u6027\u6216\u65B9\u6CD5\u5B9A\u4E49\u6CDB\u578B\u7C7B\u578B<br> \u5728\u4F7F\u7528\u63A5\u53E3\u65F6, \u518D\u6307\u5B9A\u5177\u4F53\u7684\u6CDB\u578B\u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">IbaseCRUD <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token punctuation">(</span>t<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
  <span class="token function-variable function">getById</span><span class="token operator">:</span> <span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  id<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">//id\u4E3B\u952E\u81EA\u589E</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">//\u59D3\u540D</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">//\u5E74\u9F84</span>

  <span class="token function">constructor</span> <span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">UserCRUD</span> <span class="token keyword">implements</span> <span class="token class-name">IbaseCRUD <span class="token operator">&lt;</span>User<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  data<span class="token operator">:</span> User<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  
  <span class="token function">add</span><span class="token punctuation">(</span>user<span class="token operator">:</span> User<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
    user <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">...</span>user<span class="token punctuation">,</span> id<span class="token operator">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u4FDD\u5B58user&#39;</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span>id<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">getById</span><span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> User <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>item <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>id<span class="token operator">===</span>id<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">const</span> userCRUD <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserCRUD</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
userCRUD<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;tom&#39;</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
userCRUD<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;tom2&#39;</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>userCRUD<span class="token punctuation">.</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6CDB\u578B\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B\u7C7B" aria-hidden="true">#</a> \u6CDB\u578B\u7C7B</h2><p>\u5728\u5B9A\u4E49\u7C7B\u65F6, \u4E3A\u7C7B\u4E2D\u7684\u5C5E\u6027\u6216\u65B9\u6CD5\u5B9A\u4E49\u6CDB\u578B\u7C7B\u578B \u5728\u521B\u5EFA\u7C7B\u7684\u5B9E\u4F8B\u65F6, \u518D\u6307\u5B9A\u7279\u5B9A\u7684\u6CDB\u578B\u7C7B\u578B</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">GenericNumber<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  zeroValue<span class="token operator">:</span> <span class="token constant">T</span>
  <span class="token function-variable function">add</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myGenericNumber <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GenericNumber<span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
myGenericNumber<span class="token punctuation">.</span>zeroValue <span class="token operator">=</span> <span class="token number">0</span>
myGenericNumber<span class="token punctuation">.</span><span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y 
<span class="token punctuation">}</span>

<span class="token keyword">let</span> myGenericString <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GenericNumber<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span>
myGenericString<span class="token punctuation">.</span>zeroValue <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span>
myGenericString<span class="token punctuation">.</span><span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span> 
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myGenericString<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>myGenericString<span class="token punctuation">.</span>zeroValue<span class="token punctuation">,</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myGenericNumber<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>myGenericNumber<span class="token punctuation">.</span>zeroValue<span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6CDB\u578B\u7EA6\u675F" tabindex="-1"><a class="header-anchor" href="#\u6CDB\u578B\u7EA6\u675F" aria-hidden="true">#</a> \u6CDB\u578B\u7EA6\u675F</h2><p>\u5982\u679C\u6211\u4EEC\u76F4\u63A5\u5BF9\u4E00\u4E2A\u6CDB\u578B\u53C2\u6570\u53D6 <code>length</code> \u5C5E\u6027, \u4F1A\u62A5\u9519, \u56E0\u4E3A\u8FD9\u4E2A\u6CDB\u578B\u6839\u672C\u5C31\u4E0D\u77E5\u9053\u5B83\u6709\u8FD9\u4E2A\u5C5E\u6027</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u6CA1\u6709\u6CDB\u578B\u7EA6\u675F</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">fn</span> <span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token comment">// console.log(x.length)  // error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u6CDB\u578B\u7EA6\u675F\u6765\u5B9E\u73B0</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Lengthwise</span> <span class="token punctuation">{</span>
  length<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u6307\u5B9A\u6CDB\u578B\u7EA6\u675F</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">fn2</span> <span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token keyword">extends</span> Lengthwise<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u9700\u8981\u4F20\u5165\u7B26\u5408\u7EA6\u675F\u7C7B\u578B\u7684\u503C\uFF0C\u5FC5\u987B\u5305\u542B\u5FC5\u987B <code>length</code> \u5C5E\u6027\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">fn2</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// fn2(123) // error  number\u6CA1\u6709length\u5C5E\u6027</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,23),o=[e];function c(l,i){return s(),a("div",null,o)}var k=n(t,[["render",c],["__file","5_generic.html.vue"]]);export{k as default};