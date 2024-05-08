import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as e}from"./app-BRQZ0-Iq.js";const t={},p=e(`<h1 id="_3-类" tabindex="-1"><a class="header-anchor" href="#_3-类"><span>3. 类</span></a></h1><p>对于传统的 JavaScript 程序我们会使用<code>函数</code>和<code>基于原型的继承</code> 来创建可重用的组件，但对于熟悉使用面向对象方式的程序员使用这些语法就有些棘手，因为他们用的是<code>基于类的继承</code>并且对象是由类构建出来的。 从 ECMAScript 2015，也就是 ES6 开始， JavaScript 程序员将能够使用基于类的面向对象的方式。 使用 TypeScript，我们允许开发者现在就使用这些特性，并且编译后的 JavaScript 可以在所有主流浏览器和平台上运行，而不需要等到下个 JavaScript 版本。</p><h2 id="基本示例" tabindex="-1"><a class="header-anchor" href="#基本示例"><span>基本示例</span></a></h2><p>下面看一个使用类的例子：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">/* 
类的基本定义与使用
*/</span>

<span class="token keyword">class</span> <span class="token class-name">Greeter</span> <span class="token punctuation">{</span>
  <span class="token comment">// 声明属性</span>
  message<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token comment">// 构造方法</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message
  <span class="token punctuation">}</span>

  <span class="token comment">// 一般方法</span>
  <span class="token function">greet</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;Hello &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>message
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建类的实例</span>
<span class="token keyword">const</span> greeter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Greeter</span><span class="token punctuation">(</span><span class="token string">&#39;world&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// 调用实例的方法</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>greeter<span class="token punctuation">.</span><span class="token function">greet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你使用过 C# 或 Java，你会对这种语法非常熟悉。 我们声明一个 <code>Greeter</code> 类。这个类有 3 个成员：一个叫做 <code>message</code> 的属性，一个构造函数和一个 <code>greet</code> 方法。</p><p>你会注意到，我们在引用任何一个类成员的时候都用了 <code>this</code>。 它表示我们访问的是类的成员。</p><p>后面一行，我们使用 <code>new</code> 构造了 <code>Greeter</code> 类的一个实例。它会调用之前定义的构造函数，创建一个 <code>Greeter</code> 类型的新对象，并执行构造函数初始化它。</p><p>最后一行通过 <code>greeter</code> 对象调用其 <code>greet</code> 方法</p><h2 id="继承" tabindex="-1"><a class="header-anchor" href="#继承"><span>继承</span></a></h2><p>在 TypeScript 里，我们可以使用常用的面向对象模式。 基于类的程序设计中一种最基本的模式是允许使用继承来扩展现有的类。</p><p>看下面的例子：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">/* 
类的继承
*/</span>

<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">run</span> <span class="token punctuation">(</span>distance<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Animal run </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>distance<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">m</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">cry</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;wang! wang!&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
dog<span class="token punctuation">.</span><span class="token function">cry</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
dog<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token comment">// 可以调用从父中继承得到的方法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子展示了最基本的继承：类从基类中继承了属性和方法。 这里，<code>Dog</code> 是一个 派生类，它派生自 <code>Animal</code> 基类，通过 <code>extends</code> 关键字。 派生类通常被称作<em>子类</em>，基类通常被称作<em>超类</em>。</p><p>因为 <code>Dog</code> 继承了 <code>Animal</code> 的功能，因此我们可以创建一个 <code>Dog</code> 的实例，它能够 <code>cry()</code> 和 <code>run()</code>。</p><p>下面我们来看个更加复杂的例子。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
  
  <span class="token function">constructor</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>

  <span class="token function">run</span> <span class="token punctuation">(</span>distance<span class="token operator">:</span> <span class="token builtin">number</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> run </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>distance<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">m</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Snake</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 调用父类型构造方法</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 重写父类型的方法</span>
  <span class="token function">run</span> <span class="token punctuation">(</span>distance<span class="token operator">:</span> <span class="token builtin">number</span><span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;sliding...&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>distance<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Horse</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 调用父类型构造方法</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 重写父类型的方法</span>
  <span class="token function">run</span> <span class="token punctuation">(</span>distance<span class="token operator">:</span> <span class="token builtin">number</span><span class="token operator">=</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;dashing...&#39;</span><span class="token punctuation">)</span>
    <span class="token comment">// 调用父类型的一般方法</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>distance<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token function">xxx</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;xxx()&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> snake <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Snake</span><span class="token punctuation">(</span><span class="token string">&#39;sn&#39;</span><span class="token punctuation">)</span>
snake<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> horse <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Horse</span><span class="token punctuation">(</span><span class="token string">&#39;ho&#39;</span><span class="token punctuation">)</span>
horse<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 父类型引用指向子类型的实例 ==&gt; 多态</span>
<span class="token keyword">const</span> tom<span class="token operator">:</span> Animal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Horse</span><span class="token punctuation">(</span><span class="token string">&#39;ho22&#39;</span><span class="token punctuation">)</span>
tom<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">/* 如果子类型没有扩展的方法, 可以让子类型引用指向父类型的实例 */</span>
<span class="token keyword">const</span> tom3<span class="token operator">:</span> Snake <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token string">&#39;tom3&#39;</span><span class="token punctuation">)</span>
tom3<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">/* 如果子类型有扩展的方法, 不能让子类型引用指向父类型的实例 */</span>
<span class="token comment">// const tom2: Horse = new Animal(&#39;tom2&#39;)</span>
<span class="token comment">// tom2.run()</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子展示了一些上面没有提到的特性。 这一次，我们使用 <code>extends</code> 关键字创建了 Animal 的两个子类：<code>Horse</code> 和 <code>Snake</code>。</p><p>与前一个例子的不同点是，派生类包含了一个构造函数，它 必须调用 <code>super()</code>，它会执行基类的构造函数。 而且，在构造函数里访问 <code>this</code> 的属性之前，我们 一定要调用 <code>super()</code>。 这个是 TypeScript 强制执行的一条重要规则。</p><p>这个例子演示了如何在子类里可以重写父类的方法。<code>Snake</code>类和 <code>Horse</code> 类都创建了 <code>run</code> 方法，它们重写了从 <code>Animal</code> 继承来的 <code>run</code> 方法，使得 <code>run</code> 方法根据不同的类而具有不同的功能。注意，即使 <code>tom</code> 被声明为 <code>Animal</code> 类型，但因为它的值是 <code>Horse</code>，调用 <code>tom.run(34)</code> 时，它会调用 <code>Horse</code> 里重写的方法。</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>sliding...
sn run 5m
dashing...
ho run 50m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="公共-私有与受保护的修饰符" tabindex="-1"><a class="header-anchor" href="#公共-私有与受保护的修饰符"><span>公共，私有与受保护的修饰符</span></a></h2><h3 id="默认为-public" tabindex="-1"><a class="header-anchor" href="#默认为-public"><span>默认为 public</span></a></h3><p>在上面的例子里，我们可以自由的访问程序里定义的成员。 如果你对其它语言中的类比较了解，就会注意到我们在之前的代码里并没有使用 <code>public</code> 来做修饰；例如，C# 要求必须明确地使用 <code>public</code> 指定成员是可见的。 在 TypeScript 里，成员都默认为 <code>public</code>。</p><p>你也可以明确的将一个成员标记成 <code>public</code>。 我们可以用下面的方式来重写上面的 <code>Animal</code> 类：</p><h3 id="理解-private" tabindex="-1"><a class="header-anchor" href="#理解-private"><span>理解 private</span></a></h3><p>当成员被标记成 <code>private</code> 时，它就不能在声明它的类的外部访问。</p><h3 id="理解-protected" tabindex="-1"><a class="header-anchor" href="#理解-protected"><span>理解 protected</span></a></h3><p><code>protected</code> 修饰符与 <code>private</code> 修饰符的行为很相似，但有一点不同，<code>protected</code>成员在派生类中仍然可以访问。例如：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">/* 
访问修饰符: 用来描述类内部的属性/方法的可访问性
  public: 默认值, 公开的外部也可以访问
  private: 只能类内部可以访问
  protected: 类内部和子类可以访问
*/</span>

<span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> name<span class="token operator">:</span> <span class="token builtin">string</span>

  <span class="token keyword">public</span> <span class="token function">constructor</span> <span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token function">run</span> <span class="token punctuation">(</span>distance<span class="token operator">:</span> <span class="token builtin">number</span><span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> run </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>distance<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">m</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> age<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token number">18</span>
  <span class="token keyword">protected</span> sex<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;男&#39;</span>

  <span class="token function">run</span> <span class="token punctuation">(</span>distance<span class="token operator">:</span> <span class="token builtin">number</span><span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Person jumping...&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>distance<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token keyword">extends</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token function">run</span> <span class="token punctuation">(</span>distance<span class="token operator">:</span> <span class="token builtin">number</span><span class="token operator">=</span><span class="token number">6</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Student jumping...&#39;</span><span class="token punctuation">)</span>

    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>sex<span class="token punctuation">)</span> <span class="token comment">// 子类能看到父类中受保护的成员</span>
    <span class="token comment">// console.log(this.age) //  子类看不到父类中私有的成员</span>

    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span>distance<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// 公开的可见</span>
<span class="token comment">// console.log(new Person(&#39;abc&#39;).sex) // 受保护的不可见</span>
<span class="token comment">// console.log(new Person(&#39;abc&#39;).age) //  私有的不可见</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="readonly-修饰符" tabindex="-1"><a class="header-anchor" href="#readonly-修饰符"><span>readonly 修饰符</span></a></h2><p>你可以使用 <code>readonly</code> 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> john <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;John&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// john.name = &#39;peter&#39; // error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数属性" tabindex="-1"><a class="header-anchor" href="#参数属性"><span>参数属性</span></a></h3><p>在上面的例子中，我们必须在 <code>Person</code> 类里定义一个只读成员 <code>name</code> 和一个参数为 <code>name</code> 的构造函数，并且立刻将 <code>name</code> 的值赋给 <code>this.name</code>，这种情况经常会遇到。 参数属性可以方便地让我们在一个地方定义并初始化一个成员。 下面的例子是对之前 <code>Person</code> 类的修改版，使用了参数属性：</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person2</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">readonly</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person2</span><span class="token punctuation">(</span><span class="token string">&#39;jack&#39;</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意看我们是如何舍弃参数 <code>name</code>，仅在构造函数里使用 <code>readonly name: string</code> 参数来创建和初始化 <code>name</code> 成员。 我们把声明和赋值合并至一处。</p><p>参数属性通过给构造函数参数前面添加一个访问限定符来声明。使用 <code>private</code> 限定一个参数属性会声明并初始化一个私有成员；对于 <code>public</code> 和 <code>protected</code> 来说也是一样。</p><h2 id="存取器" tabindex="-1"><a class="header-anchor" href="#存取器"><span>存取器</span></a></h2><p><code>TypeScript</code> 支持通过 <code>getters/setters</code> 来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。</p><p>下面来看如何把一个简单的类改写成使用 <code>get</code> 和 <code>set</code>。 首先，我们从一个没有使用存取器的例子开始。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  firstName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;A&#39;</span>
  lastName<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;B&#39;</span>
  <span class="token keyword">get</span> <span class="token function">fullName</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">+</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lastName
  <span class="token punctuation">}</span>
  <span class="token keyword">set</span> <span class="token function">fullName</span> <span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> names <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>firstName <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>lastName <span class="token operator">=</span> names<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>fullName<span class="token punctuation">)</span>

p<span class="token punctuation">.</span>firstName <span class="token operator">=</span> <span class="token string">&#39;C&#39;</span>
p<span class="token punctuation">.</span>lastName <span class="token operator">=</span>  <span class="token string">&#39;D&#39;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>fullName<span class="token punctuation">)</span>

p<span class="token punctuation">.</span>fullName <span class="token operator">=</span> <span class="token string">&#39;E-F&#39;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>firstName<span class="token punctuation">,</span> p<span class="token punctuation">.</span>lastName<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="静态属性" tabindex="-1"><a class="header-anchor" href="#静态属性"><span>静态属性</span></a></h2><p>到目前为止，我们只讨论了类的实例成员，那些仅当类被实例化的时候才会被初始化的属性。 我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。 在这个例子里，我们使用 <code>static</code> 定义 <code>origin</code>，因为它是所有网格都会用到的属性。 每个实例想要访问这个属性的时候，都要在 <code>origin</code> 前面加上类名。 如同在实例属性上使用 <code>this.xxx</code> 来访问属性一样，这里我们使用 <code>Grid.xxx</code> 来访问静态属性。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">/* 
静态属性, 是类对象的属性
非静态属性, 是类的实例对象的属性
*/</span>

<span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name1<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;A&#39;</span>
  <span class="token keyword">static</span> name2<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&#39;B&#39;</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Person<span class="token punctuation">.</span>name2<span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="抽象类" tabindex="-1"><a class="header-anchor" href="#抽象类"><span>抽象类</span></a></h2><p>抽象类做为其它派生类的基类使用。 它们不能被实例化。不同于接口，抽象类可以包含成员的实现细节。 <code>abstract</code> 关键字是用于定义抽象类和在抽象类内部定义抽象方法。</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">/* 
抽象类
  不能创建实例对象, 只有实现类才能创建实例
  可以包含未实现的抽象方法
*/</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>

  <span class="token keyword">abstract</span> <span class="token function">cry</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token function">run</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;run()&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span>
  <span class="token function">cry</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39; Dog cry()&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> dog <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
dog<span class="token punctuation">.</span><span class="token function">cry</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
dog<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,48),c=[p];function o(i,l){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","3_class.html.vue"]]),k=JSON.parse('{"path":"/study/vue3_quick_study/chapter2/3_class.html","title":"类","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"类","excerpt":null,"description":"3. 类 对于传统的 JavaScript 程序我们会使用函数和基于原型的继承 来创建可重用的组件，但对于熟悉使用面向对象方式的程序员使用这些语法就有些棘手，因为他们用的是基于类的继承并且对象是由类构建出来的。 从 ECMAScript 2015，也就是 ES6 开始， JavaScript 程序员将能够使用基于类的面向对象的方式。 使用 TypeSc...","date":"2022-07-24T00:00:00.000Z","category":"Vue","tag":"Vue","article":true,"dateline":true,"icon":"vue","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/study/vue3_quick_study/chapter2/3_class.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"类"}],["meta",{"property":"og:description","content":"3. 类 对于传统的 JavaScript 程序我们会使用函数和基于原型的继承 来创建可重用的组件，但对于熟悉使用面向对象方式的程序员使用这些语法就有些棘手，因为他们用的是基于类的继承并且对象是由类构建出来的。 从 ECMAScript 2015，也就是 ES6 开始， JavaScript 程序员将能够使用基于类的面向对象的方式。 使用 TypeSc..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:published_time","content":"2022-07-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"类\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-24T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"基本示例","slug":"基本示例","link":"#基本示例","children":[]},{"level":2,"title":"继承","slug":"继承","link":"#继承","children":[]},{"level":2,"title":"公共，私有与受保护的修饰符","slug":"公共-私有与受保护的修饰符","link":"#公共-私有与受保护的修饰符","children":[{"level":3,"title":"默认为 public","slug":"默认为-public","link":"#默认为-public","children":[]},{"level":3,"title":"理解 private","slug":"理解-private","link":"#理解-private","children":[]},{"level":3,"title":"理解 protected","slug":"理解-protected","link":"#理解-protected","children":[]}]},{"level":2,"title":"readonly 修饰符","slug":"readonly-修饰符","link":"#readonly-修饰符","children":[{"level":3,"title":"参数属性","slug":"参数属性","link":"#参数属性","children":[]}]},{"level":2,"title":"存取器","slug":"存取器","link":"#存取器","children":[]},{"level":2,"title":"静态属性","slug":"静态属性","link":"#静态属性","children":[]},{"level":2,"title":"抽象类","slug":"抽象类","link":"#抽象类","children":[]}],"git":{"createdTime":1657267589000,"updatedTime":1714224756000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":2},{"name":"xlc","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":7.48,"words":2245},"filePathRelative":"study/vue3_quick_study/chapter2/3_class.md","localizedDate":"2022年7月24日","autoDesc":true}');export{r as comp,k as data};
