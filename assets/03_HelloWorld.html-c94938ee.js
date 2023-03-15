import{_ as n,W as s,X as a,$ as e}from"./framework-06fee4ab.js";const t={},p=e(`<h1 id="_3-第一个-typescript-程序" tabindex="-1"><a class="header-anchor" href="#_3-第一个-typescript-程序" aria-hidden="true">#</a> 3. 第一个 TypeScript 程序</h1><h2 id="编写-ts-程序" tabindex="-1"><a class="header-anchor" href="#编写-ts-程序" aria-hidden="true">#</a> 编写 TS 程序</h2><p>src/helloworld.ts</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">greeter</span> <span class="token punctuation">(</span>person<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;Hello, &#39;</span> <span class="token operator">+</span> person
<span class="token punctuation">}</span>

<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token string">&#39;Yee&#39;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">greeter</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="手动编译代码" tabindex="-1"><a class="header-anchor" href="#手动编译代码" aria-hidden="true">#</a> 手动编译代码</h2><p>我们使用了 <code>.ts</code> 扩展名，但是这段代码仅仅是 JavaScript 而已。</p><p>在命令行上，运行 TypeScript 编译器：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tsc helloworld.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出结果为一个 <code>helloworld.js</code> 文件，它包含了和输入文件中相同的 JavsScript 代码。</p><p>在命令行上，通过 Node.js 运行这段代码：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">node</span> helloworld.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>控制台输出：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Hello, Yee
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="vscode自动编译" tabindex="-1"><a class="header-anchor" href="#vscode自动编译" aria-hidden="true">#</a> vscode自动编译</h2><pre><code>1). 生成配置文件tsconfig.json
    tsc --init
2). 修改tsconfig.json配置
    &quot;outDir&quot;: &quot;./js&quot;,
    &quot;strict&quot;: false,    
3). 启动监视任务: 
    终端 -&gt; 运行任务 -&gt; 监视tsconfig.json
</code></pre><h2 id="类型注解" tabindex="-1"><a class="header-anchor" href="#类型注解" aria-hidden="true">#</a> 类型注解</h2><p>接下来让我们看看 TypeScript 工具带来的高级功能。 给 <code>person</code> 函数的参数添加 <code>: string</code> 类型注解，如下：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">greeter</span> <span class="token punctuation">(</span>person<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;Hello, &#39;</span> <span class="token operator">+</span> person
<span class="token punctuation">}</span>

<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token string">&#39;Yee&#39;</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">greeter</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>TypeScript 里的类型注解是一种轻量级的为函数或变量添加约束的方式。 在这个例子里，我们希望 <code>greeter</code> 函数接收一个字符串参数。 然后尝试把 <code>greeter</code> 的调用改成传入一个数组：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">greeter</span> <span class="token punctuation">(</span>person<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;Hello, &#39;</span> <span class="token operator">+</span> person
<span class="token punctuation">}</span>

<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">greeter</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新编译，你会看到产生了一个错误：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>error TS2345: Argument of type &#39;number[]&#39; is not assignable to parameter of type &#39;string&#39;.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>类似地，尝试删除 <code>greeter</code> 调用的所有参数。 TypeScript 会告诉你使用了非期望个数的参数调用了这个函数。 在这两种情况中，TypeScript提供了静态的代码分析，它可以分析代码结构和提供的类型注解。</p><p>要注意的是尽管有错误，<code>greeter.js</code> 文件还是被创建了。 就算你的代码里有错误，你仍然可以使用 TypeScript。但在这种情况下，TypeScript 会警告你代码可能不会按预期执行。</p><h2 id="接口" tabindex="-1"><a class="header-anchor" href="#接口" aria-hidden="true">#</a> 接口</h2><p>让我们继续扩展这个示例应用。这里我们使用接口来描述一个拥有 <code>firstName</code> 和 <code>lastName</code> 字段的对象。 在 <code>TypeScript</code> 里，只在两个类型内部的结构兼容，那么这两个类型就是兼容的。 这就允许我们在实现接口时候只要保证包含了接口要求的结构就可以，而不必明确地使用 <code>implements</code> 语句。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  firstName<span class="token operator">:</span> <span class="token builtin">string</span>
  lastName<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">greeter</span> <span class="token punctuation">(</span>person<span class="token operator">:</span> Person<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;Hello, &#39;</span> <span class="token operator">+</span> person<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> person<span class="token punctuation">.</span>lastName
<span class="token punctuation">}</span>

<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">{</span>
  firstName<span class="token operator">:</span> <span class="token string">&#39;Yee&#39;</span><span class="token punctuation">,</span>
  lastName<span class="token operator">:</span> <span class="token string">&#39;Huang&#39;</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">greeter</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="类" tabindex="-1"><a class="header-anchor" href="#类" aria-hidden="true">#</a> 类</h2><p>最后，让我们使用类来改写这个例子。 TypeScript 支持 JavaScript 的新特性，比如支持基于类的面向对象编程。</p><p>让我们创建一个 <code>User</code> 类，它带有一个构造函数和一些公共字段。因为类的字段包含了接口所需要的字段，所以他们能很好的兼容。</p><p>还要注意的是，我在类的声明上会注明所有的成员变量，这样比较一目了然。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  fullName<span class="token operator">:</span> <span class="token builtin">string</span>
  firstName<span class="token operator">:</span> <span class="token builtin">string</span>
  lastName<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token function">constructor</span> <span class="token punctuation">(</span>firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> lastName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> firstName
    <span class="token keyword">this</span><span class="token punctuation">.</span>lastName <span class="token operator">=</span> lastName
    <span class="token keyword">this</span><span class="token punctuation">.</span>fullName <span class="token operator">=</span> firstName <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> lastName
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  firstName<span class="token operator">:</span> <span class="token builtin">string</span>
  lastName<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">greeter</span> <span class="token punctuation">(</span>person<span class="token operator">:</span> Person<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">&#39;Hello, &#39;</span> <span class="token operator">+</span> person<span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> person<span class="token punctuation">.</span>lastName
<span class="token punctuation">}</span>

<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;Yee&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Huang&#39;</span><span class="token punctuation">)</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">greeter</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新运行 <code>tsc greeter.ts</code>，你会看到 TypeScript 里的类只是一个语法糖，本质上还是 <code>JavaScript</code> 函数的实现。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>到这里，你已经对 TypeScript 有了一个大致的印象，那么下一章让我们来一起学习 TypeScript 的一些常用语法吧。</p>`,35),o=[p];function i(c,l){return s(),a("div",null,o)}const u=n(t,[["render",i],["__file","03_HelloWorld.html.vue"]]);export{u as default};
