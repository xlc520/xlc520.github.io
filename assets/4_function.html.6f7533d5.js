import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as p}from"./app.51ad39b7.js";const t={},e=p(`<h1 id="_4-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_4-\u51FD\u6570" aria-hidden="true">#</a> 4. \u51FD\u6570</h1><p>\u51FD\u6570\u662F JavaScript \u5E94\u7528\u7A0B\u5E8F\u7684\u57FA\u7840\uFF0C\u5B83\u5E2E\u52A9\u4F60\u5B9E\u73B0\u62BD\u8C61\u5C42\uFF0C\u6A21\u62DF\u7C7B\uFF0C\u4FE1\u606F\u9690\u85CF\u548C\u6A21\u5757\u3002\u5728 TypeScript \u91CC\uFF0C\u867D\u7136\u5DF2\u7ECF\u652F\u6301\u7C7B\uFF0C\u547D\u540D\u7A7A\u95F4\u548C\u6A21\u5757\uFF0C\u4F46\u51FD\u6570\u4ECD\u7136\u662F\u4E3B\u8981\u7684\u5B9A\u4E49\u884C\u4E3A\u7684\u5730\u65B9\u3002TypeScript \u4E3A JavaScript \u51FD\u6570\u6DFB\u52A0\u4E86\u989D\u5916\u7684\u529F\u80FD\uFF0C\u8BA9\u6211\u4EEC\u53EF\u4EE5\u66F4\u5BB9\u6613\u5730\u4F7F\u7528\u3002</p><h2 id="\u57FA\u672C\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u793A\u4F8B" aria-hidden="true">#</a> \u57FA\u672C\u793A\u4F8B</h2><p>\u548C JavaScript \u4E00\u6837\uFF0CTypeScript \u51FD\u6570\u53EF\u4EE5\u521B\u5EFA\u6709\u540D\u5B57\u7684\u51FD\u6570\u548C\u533F\u540D\u51FD\u6570\u3002\u4F60\u53EF\u4EE5\u968F\u610F\u9009\u62E9\u9002\u5408\u5E94\u7528\u7A0B\u5E8F\u7684\u65B9\u5F0F\uFF0C\u4E0D\u8BBA\u662F\u5B9A\u4E49\u4E00\u7CFB\u5217 API \u51FD\u6570\u8FD8\u662F\u53EA\u4F7F\u7528\u4E00\u6B21\u7684\u51FD\u6570\u3002</p><p>\u901A\u8FC7\u4E0B\u9762\u7684\u4F8B\u5B50\u53EF\u4EE5\u8FC5\u901F\u56DE\u60F3\u8D77\u8FD9\u4E24\u79CD JavaScript \u4E2D\u7684\u51FD\u6570\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u547D\u540D\u51FD\u6570</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token comment">// \u533F\u540D\u51FD\u6570</span>
<span class="token keyword">let</span> <span class="token function-variable function">myAdd</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u51FD\u6570\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u7C7B\u578B" aria-hidden="true">#</a> \u51FD\u6570\u7C7B\u578B</h2><h3 id="\u4E3A\u51FD\u6570\u5B9A\u4E49\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u51FD\u6570\u5B9A\u4E49\u7C7B\u578B" aria-hidden="true">#</a> \u4E3A\u51FD\u6570\u5B9A\u4E49\u7C7B\u578B</h3><p>\u8BA9\u6211\u4EEC\u4E3A\u4E0A\u9762\u90A3\u4E2A\u51FD\u6570\u6DFB\u52A0\u7C7B\u578B\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token keyword">let</span> <span class="token function-variable function">myAdd</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span> 
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u7ED9\u6BCF\u4E2A\u53C2\u6570\u6DFB\u52A0\u7C7B\u578B\u4E4B\u540E\u518D\u4E3A\u51FD\u6570\u672C\u8EAB\u6DFB\u52A0\u8FD4\u56DE\u503C\u7C7B\u578B\u3002TypeScript \u80FD\u591F\u6839\u636E\u8FD4\u56DE\u8BED\u53E5\u81EA\u52A8\u63A8\u65AD\u51FA\u8FD4\u56DE\u503C\u7C7B\u578B\u3002</p><h3 id="\u4E66\u5199\u5B8C\u6574\u51FD\u6570\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E66\u5199\u5B8C\u6574\u51FD\u6570\u7C7B\u578B" aria-hidden="true">#</a> \u4E66\u5199\u5B8C\u6574\u51FD\u6570\u7C7B\u578B</h3><p>\u73B0\u5728\u6211\u4EEC\u5DF2\u7ECF\u4E3A\u51FD\u6570\u6307\u5B9A\u4E86\u7C7B\u578B\uFF0C\u4E0B\u9762\u8BA9\u6211\u4EEC\u5199\u51FA\u51FD\u6570\u7684\u5B8C\u6574\u7C7B\u578B\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> <span class="token function-variable function">myAdd2</span><span class="token operator">:</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function-variable function">number</span> <span class="token operator">=</span> 
<span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53EF\u9009\u53C2\u6570\u548C\u9ED8\u8BA4\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u53EF\u9009\u53C2\u6570\u548C\u9ED8\u8BA4\u53C2\u6570" aria-hidden="true">#</a> \u53EF\u9009\u53C2\u6570\u548C\u9ED8\u8BA4\u53C2\u6570</h2><p>TypeScript \u91CC\u7684\u6BCF\u4E2A\u51FD\u6570\u53C2\u6570\u90FD\u662F\u5FC5\u987B\u7684\u3002 \u8FD9\u4E0D\u662F\u6307\u4E0D\u80FD\u4F20\u9012 <code>null</code> \u6216 <code>undefined</code> \u4F5C\u4E3A\u53C2\u6570\uFF0C\u800C\u662F\u8BF4\u7F16\u8BD1\u5668\u68C0\u67E5\u7528\u6237\u662F\u5426\u4E3A\u6BCF\u4E2A\u53C2\u6570\u90FD\u4F20\u5165\u4E86\u503C\u3002\u7F16\u8BD1\u5668\u8FD8\u4F1A\u5047\u8BBE\u53EA\u6709\u8FD9\u4E9B\u53C2\u6570\u4F1A\u88AB\u4F20\u9012\u8FDB\u51FD\u6570\u3002 \u7B80\u77ED\u5730\u8BF4\uFF0C\u4F20\u9012\u7ED9\u4E00\u4E2A\u51FD\u6570\u7684\u53C2\u6570\u4E2A\u6570\u5FC5\u987B\u4E0E\u51FD\u6570\u671F\u671B\u7684\u53C2\u6570\u4E2A\u6570\u4E00\u81F4\u3002</p><p>JavaScript \u91CC\uFF0C\u6BCF\u4E2A\u53C2\u6570\u90FD\u662F\u53EF\u9009\u7684\uFF0C\u53EF\u4F20\u53EF\u4E0D\u4F20\u3002 \u6CA1\u4F20\u53C2\u7684\u65F6\u5019\uFF0C\u5B83\u7684\u503C\u5C31\u662F <code>undefined</code>\u3002 \u5728TypeScript \u91CC\u6211\u4EEC\u53EF\u4EE5\u5728\u53C2\u6570\u540D\u65C1\u4F7F\u7528 <code>?</code> \u5B9E\u73B0\u53EF\u9009\u53C2\u6570\u7684\u529F\u80FD\u3002 \u6BD4\u5982\uFF0C\u6211\u4EEC\u60F3\u8BA9 <code>lastName</code> \u662F\u53EF\u9009\u7684\uFF1A</p><p>\u5728 TypeScript \u91CC\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4E3A\u53C2\u6570\u63D0\u4F9B\u4E00\u4E2A\u9ED8\u8BA4\u503C\u5F53\u7528\u6237\u6CA1\u6709\u4F20\u9012\u8FD9\u4E2A\u53C2\u6570\u6216\u4F20\u9012\u7684\u503C\u662F <code>undefined</code> \u65F6\u3002 \u5B83\u4EEC\u53EB\u505A\u6709\u9ED8\u8BA4\u521D\u59CB\u5316\u503C\u7684\u53C2\u6570\u3002 \u8BA9\u6211\u4EEC\u4FEE\u6539\u4E0A\u4F8B\uFF0C\u628A<code>firstName</code> \u7684\u9ED8\u8BA4\u503C\u8BBE\u7F6E\u4E3A <code>&quot;A&quot;</code>\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">buildName</span><span class="token punctuation">(</span>firstName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token operator">=</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> lastName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>lastName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> firstName <span class="token operator">+</span> <span class="token string">&#39;-&#39;</span> <span class="token operator">+</span> lastName
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> firstName
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;D&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">buildName</span><span class="token punctuation">(</span><span class="token string">&#39;C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">buildName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5269\u4F59\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u5269\u4F59\u53C2\u6570" aria-hidden="true">#</a> \u5269\u4F59\u53C2\u6570</h3><p>\u5FC5\u8981\u53C2\u6570\uFF0C\u9ED8\u8BA4\u53C2\u6570\u548C\u53EF\u9009\u53C2\u6570\u6709\u4E2A\u5171\u540C\u70B9\uFF1A\u5B83\u4EEC\u8868\u793A\u67D0\u4E00\u4E2A\u53C2\u6570\u3002 \u6709\u65F6\uFF0C\u4F60\u60F3\u540C\u65F6\u64CD\u4F5C\u591A\u4E2A\u53C2\u6570\uFF0C\u6216\u8005\u4F60\u5E76\u4E0D\u77E5\u9053\u4F1A\u6709\u591A\u5C11\u53C2\u6570\u4F20\u9012\u8FDB\u6765\u3002 \u5728 JavaScript \u91CC\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>arguments</code> \u6765\u8BBF\u95EE\u6240\u6709\u4F20\u5165\u7684\u53C2\u6570\u3002</p><p>\u5728 TypeScript \u91CC\uFF0C\u4F60\u53EF\u4EE5\u628A\u6240\u6709\u53C2\u6570\u6536\u96C6\u5230\u4E00\u4E2A\u53D8\u91CF\u91CC\uFF1A<br> \u5269\u4F59\u53C2\u6570\u4F1A\u88AB\u5F53\u505A\u4E2A\u6570\u4E0D\u9650\u7684\u53EF\u9009\u53C2\u6570\u3002 \u53EF\u4EE5\u4E00\u4E2A\u90FD\u6CA1\u6709\uFF0C\u540C\u6837\u4E5F\u53EF\u4EE5\u6709\u4EFB\u610F\u4E2A\u3002 \u7F16\u8BD1\u5668\u521B\u5EFA\u53C2\u6570\u6570\u7EC4\uFF0C\u540D\u5B57\u662F\u4F60\u5728\u7701\u7565\u53F7\uFF08 <code>...</code>\uFF09\u540E\u9762\u7ED9\u5B9A\u7684\u540D\u5B57\uFF0C\u4F60\u53EF\u4EE5\u5728\u51FD\u6570\u4F53\u5185\u4F7F\u7528\u8FD9\u4E2A\u6570\u7EC4\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">info</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> args<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u51FD\u6570\u91CD\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u91CD\u8F7D" aria-hidden="true">#</a> \u51FD\u6570\u91CD\u8F7D</h2><p>\u51FD\u6570\u91CD\u8F7D: \u51FD\u6570\u540D\u76F8\u540C, \u800C\u5F62\u53C2\u4E0D\u540C\u7684\u591A\u4E2A\u51FD\u6570<br> \u5728JS\u4E2D, \u7531\u4E8E\u5F31\u7C7B\u578B\u7684\u7279\u70B9\u548C\u5F62\u53C2\u4E0E\u5B9E\u53C2\u53EF\u4EE5\u4E0D\u5339\u914D, \u662F\u6CA1\u6709\u51FD\u6570\u91CD\u8F7D\u8FD9\u4E00\u8BF4\u7684 \u4F46\u5728TS\u4E2D, \u4E0E\u5176\u5B83\u9762\u5411\u5BF9\u8C61\u7684\u8BED\u8A00(\u5982Java)\u5C31\u5B58\u5728\u6B64\u8BED\u6CD5</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">/* 
\u51FD\u6570\u91CD\u8F7D: \u51FD\u6570\u540D\u76F8\u540C, \u800C\u5F62\u53C2\u4E0D\u540C\u7684\u591A\u4E2A\u51FD\u6570
\u9700\u6C42: \u6211\u4EEC\u6709\u4E00\u4E2Aadd\u51FD\u6570\uFF0C\u5B83\u53EF\u4EE5\u63A5\u65362\u4E2Astring\u7C7B\u578B\u7684\u53C2\u6570\u8FDB\u884C\u62FC\u63A5\uFF0C\u4E5F\u53EF\u4EE5\u63A5\u65362\u4E2Anumber\u7C7B\u578B\u7684\u53C2\u6570\u8FDB\u884C\u76F8\u52A0 
*/</span>

<span class="token comment">// \u91CD\u8F7D\u51FD\u6570\u58F0\u660E</span>
<span class="token keyword">function</span> <span class="token function">add</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token keyword">function</span> <span class="token function">add</span> <span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span>

<span class="token comment">// \u5B9A\u4E49\u51FD\u6570\u5B9E\u73B0</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">,</span> y<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5728\u5B9E\u73B0\u4E0A\u6211\u4EEC\u8981\u6CE8\u610F\u4E25\u683C\u5224\u65AD\u4E24\u4E2A\u53C2\u6570\u7684\u7C7B\u578B\u662F\u5426\u76F8\u7B49\uFF0C\u800C\u4E0D\u80FD\u7B80\u5355\u7684\u5199\u4E00\u4E2A x + y</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> y <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> x <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> y <span class="token operator">===</span> <span class="token string">&#39;number&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// console.log(add(1, &#39;a&#39;)) // error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26),o=[e];function c(i,l){return s(),a("div",null,o)}const d=n(t,[["render",c],["__file","4_function.html.vue"]]);export{d as default};