import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as i,a as e}from"./app-DDjfOKh-.js";const l={};function p(c,s){return a(),i("div",null,s[0]||(s[0]=[e(`<h1 id="javascript-复杂判断的更优雅写法" tabindex="-1"><a class="header-anchor" href="#javascript-复杂判断的更优雅写法"><span>JavaScript 复杂判断的更优雅写法</span></a></h1><p>我们编写 js 代码时经常遇到复杂逻辑判断的情况，通常大家可以用<code>if/else</code>或者<code>switch</code> 来实现多个条件判断，但这样会有个问题，随着逻辑复杂度的增加，代码中的<code>if/else/switch</code>会变得越来越臃肿，越来越看不懂，那么如何更优雅的写判断逻辑，本文带你试一下。</p><h2 id="举个例子" tabindex="-1"><a class="header-anchor" href="#举个例子"><span>举个例子</span></a></h2><p>先看一段代码：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 按钮点击事件</span></span>
<span class="line"><span> * @param {number} status 活动状态：1 开团进行中 2 开团失败 3 商品售罄 4 开团成功 5 系统取消</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>const onButtonClick = (status)=&gt;{</span></span>
<span class="line"><span>  if(status == 1){</span></span>
<span class="line"><span>    sendLog(&#39;processing&#39;)</span></span>
<span class="line"><span>    jumpTo(&#39;IndexPage&#39;)</span></span>
<span class="line"><span>  }else if(status == 2){</span></span>
<span class="line"><span>    sendLog(&#39;fail&#39;)</span></span>
<span class="line"><span>    jumpTo(&#39;FailPage&#39;)</span></span>
<span class="line"><span>  }else if(status == 3){</span></span>
<span class="line"><span>    sendLog(&#39;fail&#39;)</span></span>
<span class="line"><span>    jumpTo(&#39;FailPage&#39;)</span></span>
<span class="line"><span>  }else if(status == 4){</span></span>
<span class="line"><span>    sendLog(&#39;success&#39;)</span></span>
<span class="line"><span>    jumpTo(&#39;SuccessPage&#39;)</span></span>
<span class="line"><span>  }else if(status == 5){</span></span>
<span class="line"><span>    sendLog(&#39;cancel&#39;)</span></span>
<span class="line"><span>    jumpTo(&#39;CancelPage&#39;)</span></span>
<span class="line"><span>  }else {</span></span>
<span class="line"><span>    sendLog(&#39;other&#39;)</span></span>
<span class="line"><span>    jumpTo(&#39;Index&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过代码可以看到这个按钮的点击逻辑：根据不同活动状态做两件事情，发送日志埋点和跳转到对应页面，大家可以很轻易的提出这段代码的改写方案，<code>switch</code> 出场：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 按钮点击事件</span></span>
<span class="line"><span> * @param {number} status 活动状态：1 开团进行中 2 开团失败 3 商品售罄 4 开团成功 5 系统取消</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>const onButtonClick = (status)=&gt;{</span></span>
<span class="line"><span>  switch (status){</span></span>
<span class="line"><span>    case 1:</span></span>
<span class="line"><span>      sendLog(&#39;processing&#39;)</span></span>
<span class="line"><span>      jumpTo(&#39;IndexPage&#39;)</span></span>
<span class="line"><span>      break</span></span>
<span class="line"><span>    case 2:</span></span>
<span class="line"><span>    case 3:</span></span>
<span class="line"><span>      sendLog(&#39;fail&#39;)</span></span>
<span class="line"><span>      jumpTo(&#39;FailPage&#39;)</span></span>
<span class="line"><span>      break  </span></span>
<span class="line"><span>    case 4:</span></span>
<span class="line"><span>      sendLog(&#39;success&#39;)</span></span>
<span class="line"><span>      jumpTo(&#39;SuccessPage&#39;)</span></span>
<span class="line"><span>      break</span></span>
<span class="line"><span>    case 5:</span></span>
<span class="line"><span>      sendLog(&#39;cancel&#39;)</span></span>
<span class="line"><span>      jumpTo(&#39;CancelPage&#39;)</span></span>
<span class="line"><span>      break</span></span>
<span class="line"><span>    default:</span></span>
<span class="line"><span>      sendLog(&#39;other&#39;)</span></span>
<span class="line"><span>      jumpTo(&#39;Index&#39;)</span></span>
<span class="line"><span>      break</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>嗯，这样看起来比<code>if/else</code>清晰多了，细心的同学也发现了小技巧，<code>case 2</code>和<code>case 3</code>逻辑一样的时候，可以省去执行语句和<code>break</code> ，则<code>case 2</code>的情况自动执行<code>case 3</code>的逻辑。</p><p>这时有同学会说，还有更简单的写法：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const actions = {</span></span>
<span class="line"><span>  &#39;1&#39;: [&#39;processing&#39;,&#39;IndexPage&#39;],</span></span>
<span class="line"><span>  &#39;2&#39;: [&#39;fail&#39;,&#39;FailPage&#39;],</span></span>
<span class="line"><span>  &#39;3&#39;: [&#39;fail&#39;,&#39;FailPage&#39;],</span></span>
<span class="line"><span>  &#39;4&#39;: [&#39;success&#39;,&#39;SuccessPage&#39;],</span></span>
<span class="line"><span>  &#39;5&#39;: [&#39;cancel&#39;,&#39;CancelPage&#39;],</span></span>
<span class="line"><span>  &#39;default&#39;: [&#39;other&#39;,&#39;Index&#39;],</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 按钮点击事件</span></span>
<span class="line"><span> * @param {number} status 活动状态：1开团进行中 2开团失败 3 商品售罄 4 开团成功 5 系统取消</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>const onButtonClick = (status)=&gt;{</span></span>
<span class="line"><span>  let action = actions[status] || actions[&#39;default&#39;],</span></span>
<span class="line"><span>      logName = action[0],</span></span>
<span class="line"><span>      pageName = action[1]</span></span>
<span class="line"><span>  sendLog(logName)</span></span>
<span class="line"><span>  jumpTo(pageName)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码确实看起来更清爽了，这种方法的聪明之处在于：将判断条件作为对象的属性名，将处理逻辑作为对象的属性值，在按钮点击的时候，通过对象属性查找的方式来进行逻辑判断，这种写法特别适合一元条件判断的情况。</p><p>是不是还有其他写法呢？有的：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const actions = new Map([</span></span>
<span class="line"><span>  [1, [&#39;processing&#39;,&#39;IndexPage&#39;]],</span></span>
<span class="line"><span>  [2, [&#39;fail&#39;,&#39;FailPage&#39;]],</span></span>
<span class="line"><span>  [3, [&#39;fail&#39;,&#39;FailPage&#39;]],</span></span>
<span class="line"><span>  [4, [&#39;success&#39;,&#39;SuccessPage&#39;]],</span></span>
<span class="line"><span>  [5, [&#39;cancel&#39;,&#39;CancelPage&#39;]],</span></span>
<span class="line"><span>  [&#39;default&#39;, [&#39;other&#39;,&#39;Index&#39;]]</span></span>
<span class="line"><span>])</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 按钮点击事件</span></span>
<span class="line"><span> * @param {number} status 活动状态：1 开团进行中 2 开团失败 3 商品售罄 4 开团成功 5 系统取消</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>const onButtonClick = (status)=&gt;{</span></span>
<span class="line"><span>  let action = actions.get(status) || actions.get(&#39;default&#39;)</span></span>
<span class="line"><span>  sendLog(action[0])</span></span>
<span class="line"><span>  jumpTo(action[1])</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样写用到了 es6 里的<code>Map</code>对象，是不是更爽了？<code>Map</code>对象和<code>Object</code>对象有什么区别呢？</p><ul><li>一个对象通常都有自己的原型，所以一个对象总有一个&quot;<code>prototype</code>&quot;键。</li><li>一个对象的键只能是字符串或者<code>Symbols</code>，但一个<code>Map</code>的键可以是任意值。</li><li>你可以通过<code>size</code>属性很容易地得到一个<code>Map</code>的键值对个数，而对象的键值对个数只能手动确认。</li></ul><p>我们需要把问题升级一下，以前按钮点击时候只需要判断<code>status</code>，现在还需要判断用户的身份：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * 按钮点击事件</span></span>
<span class="line"><span> * @param {number} status 活动状态：1开团进行中 2开团失败 3 开团成功 4 商品售罄 5 有库存未开团</span></span>
<span class="line"><span> * @param {string} identity 身份标识：guest客态 master主态</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>const onButtonClick = (status,identity)=&gt;{</span></span>
<span class="line"><span>  if(identity == &#39;guest&#39;){</span></span>
<span class="line"><span>    if(status == 1){</span></span>
<span class="line"><span>      //do sth</span></span>
<span class="line"><span>    }else if(status == 2){</span></span>
<span class="line"><span>      //do sth</span></span>
<span class="line"><span>    }else if(status == 3){</span></span>
<span class="line"><span>      //do sth</span></span>
<span class="line"><span>    }else if(status == 4){</span></span>
<span class="line"><span>      //do sth</span></span>
<span class="line"><span>    }else if(status == 5){</span></span>
<span class="line"><span>      //do sth</span></span>
<span class="line"><span>    }else {</span></span>
<span class="line"><span>      //do sth</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }else if(identity == &#39;master&#39;) {</span></span>
<span class="line"><span>    if(status == 1){</span></span>
<span class="line"><span>      //do sth</span></span>
<span class="line"><span>    }else if(status == 2){</span></span>
<span class="line"><span>      //do sth</span></span>
<span class="line"><span>    }else if(status == 3){</span></span>
<span class="line"><span>      //do sth</span></span>
<span class="line"><span>    }else if(status == 4){</span></span>
<span class="line"><span>      //do sth</span></span>
<span class="line"><span>    }else if(status == 5){</span></span>
<span class="line"><span>      //do sth</span></span>
<span class="line"><span>    }else {</span></span>
<span class="line"><span>      //do sth</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原谅我不写每个判断里的具体逻辑了，因为代码太冗长了。</p><p>原谅我又用了<code>if/else</code>，因为我看到很多人依然在用<code>if/else</code>写这种大段的逻辑判断。</p><p>从上面的例子我们可以看到，当你的逻辑升级为二元判断时，你的判断量会加倍，你的代码量也会加倍，这时怎么写更清爽呢？</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const actions = new Map([</span></span>
<span class="line"><span>  [&#39;guest_1&#39;, ()=&gt;{/*do sth*/}],</span></span>
<span class="line"><span>  [&#39;guest_2&#39;, ()=&gt;{/*do sth*/}],</span></span>
<span class="line"><span>  [&#39;guest_3&#39;, ()=&gt;{/*do sth*/}],</span></span>
<span class="line"><span>  [&#39;guest_4&#39;, ()=&gt;{/*do sth*/}],</span></span>
<span class="line"><span>  [&#39;guest_5&#39;, ()=&gt;{/*do sth*/}],</span></span>
<span class="line"><span>  [&#39;master_1&#39;, ()=&gt;{/*do sth*/}],</span></span>
<span class="line"><span>  [&#39;master_2&#39;, ()=&gt;{/*do sth*/}],</span></span>
<span class="line"><span>  [&#39;master_3&#39;, ()=&gt;{/*do sth*/}],</span></span>
<span class="line"><span>  [&#39;master_4&#39;, ()=&gt;{/*do sth*/}],</span></span>
<span class="line"><span>  [&#39;master_5&#39;, ()=&gt;{/*do sth*/}],</span></span>
<span class="line"><span>  [&#39;default&#39;, ()=&gt;{/*do sth*/}],</span></span>
<span class="line"><span>])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * 按钮点击事件</span></span>
<span class="line"><span> * @param {string} identity 身份标识：guest客态 master主态</span></span>
<span class="line"><span> * @param {number} status 活动状态：1 开团进行中 2 开团失败 3 开团成功 4 商品售罄 5 有库存未开团</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>const onButtonClick = (identity,status)=&gt;{</span></span>
<span class="line"><span>  let action = actions.get(\`\${identity}_\${status}\`) || actions.get(&#39;default&#39;)</span></span>
<span class="line"><span>  action.call(this)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码核心逻辑是：把两个条件拼接成字符串，并通过以条件拼接字符串作为键，以处理函数作为值的<code>Map</code> 对象进行查找并执行，这种写法在多元条件判断时候尤其好用。</p><p>当然上述代码如果用<code>Object</code>对象来实现也是类似的：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const actions = {</span></span>
<span class="line"><span>  &#39;guest_1&#39;:()=&gt;{/*do sth*/},</span></span>
<span class="line"><span>  &#39;guest_2&#39;:()=&gt;{/*do sth*/},</span></span>
<span class="line"><span>  //....</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const onButtonClick = (identity,status)=&gt;{</span></span>
<span class="line"><span>  let action = actions[\`\${identity}_\${status}\`] || actions[&#39;default&#39;]</span></span>
<span class="line"><span>  action.call(this)</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果有些同学觉得把查询条件拼成字符串有点别扭，那还有一种方案，就是用<code>Map</code>对象，以<code>Object</code>对象作为 key：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const actions = new Map([</span></span>
<span class="line"><span>  [{identity:&#39;guest&#39;,status:1},()=&gt;{/*do sth*/}],</span></span>
<span class="line"><span>  [{identity:&#39;guest&#39;,status:2},()=&gt;{/*do sth*/}],</span></span>
<span class="line"><span>  //...</span></span>
<span class="line"><span>])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const onButtonClick = (identity,status)=&gt;{</span></span>
<span class="line"><span>  let action = [...actions].filter(([key,value])=&gt;(key.identity == identity &amp;&amp; key.status == status))</span></span>
<span class="line"><span>  action.forEach(([key,value])=&gt;value.call(this))</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>是不是又高级了一点点？</p><p>这里也看出来<code>Map</code>与<code>Object</code>的区别，<code>Map</code>可以用任何类型的数据作为 key。</p><p>我们现在再将难度升级一点点，假如<code>guest</code>情况下，<code>status1-4</code>的处理逻辑都一样怎么办，最差的情况是这样：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const actions = new Map([</span></span>
<span class="line"><span>  [{identity:&#39;guest&#39;,status:1},()=&gt;{/* functionA */}],</span></span>
<span class="line"><span>  [{identity:&#39;guest&#39;,status:2},()=&gt;{/* functionA */}],</span></span>
<span class="line"><span>  [{identity:&#39;guest&#39;,status:3},()=&gt;{/* functionA */}],</span></span>
<span class="line"><span>  [{identity:&#39;guest&#39;,status:4},()=&gt;{/* functionA */}],</span></span>
<span class="line"><span>  [{identity:&#39;guest&#39;,status:5},()=&gt;{/* functionB */}],</span></span>
<span class="line"><span>  //...</span></span>
<span class="line"><span>])</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好一点的写法是将处理逻辑函数进行缓存：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const actions = ()=&gt;{</span></span>
<span class="line"><span>  const functionA = ()=&gt;{/*do sth*/}</span></span>
<span class="line"><span>  const functionB = ()=&gt;{/*do sth*/}</span></span>
<span class="line"><span>  return new Map([</span></span>
<span class="line"><span>    [{identity:&#39;guest&#39;,status:1},functionA],</span></span>
<span class="line"><span>    [{identity:&#39;guest&#39;,status:2},functionA],</span></span>
<span class="line"><span>    [{identity:&#39;guest&#39;,status:3},functionA],</span></span>
<span class="line"><span>    [{identity:&#39;guest&#39;,status:4},functionA],</span></span>
<span class="line"><span>    [{identity:&#39;guest&#39;,status:5},functionB],</span></span>
<span class="line"><span>    //...</span></span>
<span class="line"><span>  ])</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const onButtonClick = (identity,status)=&gt;{</span></span>
<span class="line"><span>  let action = [...actions()].filter(([key,value])=&gt;(key.identity == identity &amp;&amp; key.status == status))</span></span>
<span class="line"><span>  action.forEach(([key,value])=&gt;value.call(this))</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样写已经能满足日常需求了，但认真一点讲，上面重写了 4 次<code>functionA</code>还是有点不爽，假如判断条件变得特别复杂，比如<code>identity</code>有 3 种状态，<code>status</code>有 10 种状态，那你需要定义 30 条处理逻辑，而往往这些逻辑里面很多都是相同的，这似乎也是笔者不想接受的，那可以这样实现:</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const actions = ()=&gt;{</span></span>
<span class="line"><span>  const functionA = ()=&gt;{/*do sth*/}</span></span>
<span class="line"><span>  const functionB = ()=&gt;{/*do sth*/}</span></span>
<span class="line"><span>  return new Map([</span></span>
<span class="line"><span>    [/^guest_[1-4]$/,functionA],</span></span>
<span class="line"><span>    [/^guest_5$/,functionB],</span></span>
<span class="line"><span>    //...</span></span>
<span class="line"><span>  ])</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const onButtonClick = (identity,status)=&gt;{</span></span>
<span class="line"><span>  let action = [...actions()].filter(([key,value])=&gt;(key.test(\`\${identity}_\${status}\`)))</span></span>
<span class="line"><span>  action.forEach(([key,value])=&gt;value.call(this))</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里<code>Map</code>的优势更加凸显，可以用正则类型作为 key 了，这样就有了无限可能，假如需求变成，凡是<code>guest</code> 情况都要发送一个日志埋点，不同<code>status</code>情况也需要单独的逻辑处理，那我们可以这样写:</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const actions = ()=&gt;{</span></span>
<span class="line"><span>  const functionA = ()=&gt;{/*do sth*/}</span></span>
<span class="line"><span>  const functionB = ()=&gt;{/*do sth*/}</span></span>
<span class="line"><span>  const functionC = ()=&gt;{/*send log*/}</span></span>
<span class="line"><span>  return new Map([</span></span>
<span class="line"><span>    [/^guest_[1-4]$/,functionA],</span></span>
<span class="line"><span>    [/^guest_5$/,functionB],</span></span>
<span class="line"><span>    [/^guest_.*$/,functionC],</span></span>
<span class="line"><span>    //...</span></span>
<span class="line"><span>  ])</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const onButtonClick = (identity,status)=&gt;{</span></span>
<span class="line"><span>  let action = [...actions()].filter(([key,value])=&gt;(key.test(\`\${identity}_\${status}\`)))</span></span>
<span class="line"><span>  action.forEach(([key,value])=&gt;value.call(this))</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是说利用数组循环的特性，符合正则条件的逻辑都会被执行，那就可以同时执行公共逻辑和单独逻辑，因为正则的存在，你可以打开想象力解锁更多的玩法，本文就不赘述了。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>本文已经教你了 8 种逻辑判断写法，包括：</p><ul><li><code>if/else</code></li><li><code>switch</code></li><li>一元判断时：存到<code>Object</code>里</li><li>一元判断时：存到<code>Map</code>里</li><li>多元判断时：将 condition 拼接成字符串存到<code>Object</code>里</li><li>多元判断时：将 condition 拼接成字符串存到<code>Map</code>里</li><li>多元判断时：将 condition 存为<code>Object</code>存到<code>Map</code>里</li><li>多元判断时：将 condition 写作正则存到<code>Map</code>里</li></ul><p>至此，本文也将告一段落，愿你未来的人生里，不只是有<code>if/else/switch</code>。</p>`,41)]))}const v=n(l,[["render",p],["__file","JavaScript 复杂判断的更优雅写法.html.vue"]]),r=JSON.parse('{"path":"/dev/JavaScript%20%E5%A4%8D%E6%9D%82%E5%88%A4%E6%96%AD%E7%9A%84%E6%9B%B4%E4%BC%98%E9%9B%85%E5%86%99%E6%B3%95.html","title":"JavaScript 复杂判断的更优雅写法","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"JavaScript 复杂判断的更优雅写法","excerpt":null,"description":"JavaScript 复杂判断的更优雅写法 我们编写 js 代码时经常遇到复杂逻辑判断的情况，通常大家可以用if/else或者switch 来实现多个条件判断，但这样会有个问题，随着逻辑复杂度的增加，代码中的if/else/switch会变得越来越臃肿，越来越看不懂，那么如何更优雅的写判断逻辑，本文带你试一下。 举个例子 先看一段代码： 通过代码可以看...","date":"2024-03-05T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/JavaScript%20%E5%A4%8D%E6%9D%82%E5%88%A4%E6%96%AD%E7%9A%84%E6%9B%B4%E4%BC%98%E9%9B%85%E5%86%99%E6%B3%95.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"JavaScript 复杂判断的更优雅写法"}],["meta",{"property":"og:description","content":"JavaScript 复杂判断的更优雅写法 我们编写 js 代码时经常遇到复杂逻辑判断的情况，通常大家可以用if/else或者switch 来实现多个条件判断，但这样会有个问题，随着逻辑复杂度的增加，代码中的if/else/switch会变得越来越臃肿，越来越看不懂，那么如何更优雅的写判断逻辑，本文带你试一下。 举个例子 先看一段代码： 通过代码可以看..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2024-03-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript 复杂判断的更优雅写法\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"举个例子","slug":"举个例子","link":"#举个例子","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"createdTime":1714214949000,"updatedTime":1714224756000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":7.12,"words":2136},"filePathRelative":"dev/JavaScript 复杂判断的更优雅写法.md","localizedDate":"2024年3月5日","excerpt":"\\n<p>我们编写 js 代码时经常遇到复杂逻辑判断的情况，通常大家可以用<code>if/else</code>或者<code>switch</code>\\n来实现多个条件判断，但这样会有个问题，随着逻辑复杂度的增加，代码中的<code>if/else/switch</code>会变得越来越臃肿，越来越看不懂，那么如何更优雅的写判断逻辑，本文带你试一下。</p>","autoDesc":true}');export{v as comp,r as data};
