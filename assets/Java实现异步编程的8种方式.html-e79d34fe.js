import{_ as t,W as p,X as c,Z as s,$ as n,a0 as o,Y as a,C as i}from"./framework-3ab8bde0.js";const l={},u=a(`<h1 id="java实现异步编程的8种方式" tabindex="-1"><a class="header-anchor" href="#java实现异步编程的8种方式" aria-hidden="true">#</a> Java实现异步编程的8种方式</h1><h2 id="一、🌈前言" tabindex="-1"><a class="header-anchor" href="#一、🌈前言" aria-hidden="true">#</a> 一、🌈前言</h2><blockquote><p>异步执行对于开发者来说并不陌生，在实际的开发过程中，很多场景多会使用到异步，相比同步执行，异步可以大大缩短请求链路耗时时间，比如：<strong>发送短信、邮件、异步更新等</strong>，这些都是典型的可以通过异步实现的场景。</p></blockquote><h2 id="二、异步的八种实现方式" tabindex="-1"><a class="header-anchor" href="#二、异步的八种实现方式" aria-hidden="true">#</a> 二、异步的八种实现方式</h2><ol><li>线程Thread</li><li>Future</li><li>异步框架CompletableFuture</li><li>Spring注解@Async</li><li>Spring ApplicationEvent事件</li><li>消息队列</li><li>第三方异步框架，比如Hutool的ThreadUtil</li><li>Guava异步</li></ol><h2 id="三、什么是异步" tabindex="-1"><a class="header-anchor" href="#三、什么是异步" aria-hidden="true">#</a> 三、什么是异步？</h2><p>首先我们先看一个常见的用户下单的场景：</p><figure><img src="https://static.linch.eu.org/blogImage/c3a784c49bbf4207ae38cf7b738fb813tplv-k3u1fbpfcp-zoom-in-crop-mark4536000.webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>在同步操作中，我们执行到 <strong>发送短信</strong> 的时候，我们必须等待这个方法彻底执行完才能执行 <strong>赠送积分</strong> 这个操作，如果 <strong>赠送积分</strong> 这个动作执行时间较长，发送短信需要等待，这就是典型的同步场景。</p><p>实际上，发送短信和赠送积分没有任何的依赖关系，通过异步，我们可以实现<code>赠送积分</code>和<code>发送短信</code>这两个操作能够同时进行，比如：</p><figure><img src="https://static.linch.eu.org/blogImage/416eac77406a42d59711fb7bb4c8d4edtplv-k3u1fbpfcp-zoom-in-crop-mark4536000.webp" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>这就是所谓的异步，是不是非常简单，下面就说说异步的几种实现方式吧。</p><h2 id="四、异步编程" tabindex="-1"><a class="header-anchor" href="#四、异步编程" aria-hidden="true">#</a> 四、异步编程</h2><h2 id="_4-1-线程异步" tabindex="-1"><a class="header-anchor" href="#_4-1-线程异步" aria-hidden="true">#</a> 4.1 线程异步</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AsyncThread</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>

    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Override</span></span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Current thread name:&quot;</span> <span class="token operator">+</span> Thread<span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; Send email success!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        AsyncThread asyncThread <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AsyncThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        asyncThread<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然如果每次都创建一个<code>Thread</code>线程，频繁的创建、销毁，浪费系统资源，我们可以采用线程池：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">private</span> ExecutorService executorService <span class="token operator">=</span> Executors<span class="token punctuation">.</span><span class="token function">newCachedThreadPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    executorService<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token decorator"><span class="token at operator">@</span><span class="token function">Override</span></span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;执行业务逻辑...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以将业务逻辑封装到<code>Runnable</code>或<code>Callable</code>中，交由线程池来执行。</p><h2 id="_4-2-future异步" tabindex="-1"><a class="header-anchor" href="#_4-2-future异步" aria-hidden="true">#</a> 4.2 Future异步</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FutureManager</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>

        <span class="token class-name">ExecutorService</span> executor <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> future <span class="token operator">=</span> executor<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>

                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot; --- task start --- &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot; --- task finish ---&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> <span class="token string">&quot;this is future execute final result!!!&quot;</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//这里需要返回值时会阻塞主线程</span>
        <span class="token class-name">String</span> result <span class="token operator">=</span> future<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;Future get result: {}&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@SneakyThrows</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">FutureManager</span> manager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FutureManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        manager<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code> <span class="token comment">--- task start --- </span>
 <span class="token comment">--- task finish ---</span>
 Future get result: this <span class="token operator">is</span> future <span class="token keyword">execute</span> final result<span class="token operator">!</span><span class="token operator">!</span><span class="token operator">!</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-1-future的不足之处" tabindex="-1"><a class="header-anchor" href="#_4-2-1-future的不足之处" aria-hidden="true">#</a> 4.2.1 Future的不足之处</h3><p>Future的不足之处的包括以下几点：</p><p>1️⃣ 无法被动接收异步任务的计算结果：虽然我们可以主动将异步任务提交给线程池中的线程来执行，但是待异步任务执行结束之后，主线程无法得到任务完成与否的通知，它需要通过get方法主动获取任务执行的结果。 2️⃣ Future件彼此孤立：有时某一个耗时很长的异步任务执行结束之后，你想利用它返回的结果再做进一步的运算，该运算也会是一个异步任务，两者之间的关系需要程序开发人员手动进行绑定赋予，Future并不能将其形成一个任务流（pipeline），每一个Future都是彼此之间都是孤立的，所以才有了后面的CompletableFuture，CompletableFuture就可以将多个Future串联起来形成任务流。 3️⃣ Futrue没有很好的错误处理机制：截止目前，如果某个异步任务在执行发的过程中发生了异常，调用者无法被动感知，必须通过捕获get方法的异常才知晓异步任务执行是否出现了错误，从而在做进一步的判断处理。</p><h2 id="_4-3-completablefuture实现异步" tabindex="-1"><a class="header-anchor" href="#_4-3-completablefuture实现异步" aria-hidden="true">#</a> 4.3 CompletableFuture实现异步</h2><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CompletableFutureCompose</span> <span class="token punctuation">{</span>

    <span class="token comment">/**
     * thenAccept子任务和父任务公用同一个线程
     */</span>
    @SneakyThrows
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">thenRunAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">CompletableFuture<span class="token punctuation">&lt;</span>Integer<span class="token punctuation">&gt;</span></span> cf1 <span class="token operator">=</span> CompletableFuture<span class="token punctuation">.</span><span class="token function">supplyAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            System<span class="token punctuation">.</span><span class="token keyword">out</span><span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>Thread<span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; cf1 do something....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">CompletableFuture<span class="token punctuation">&lt;</span>Void<span class="token punctuation">&gt;</span></span> cf2 <span class="token operator">=</span> cf1<span class="token punctuation">.</span><span class="token function">thenRunAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            System<span class="token punctuation">.</span><span class="token keyword">out</span><span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>Thread<span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot; cf2 do something...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//等待任务1执行完成</span>
        System<span class="token punctuation">.</span><span class="token keyword">out</span><span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;cf1结果-&gt;&quot;</span> <span class="token operator">+</span> cf1<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//等待任务2执行完成</span>
        System<span class="token punctuation">.</span><span class="token keyword">out</span><span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;cf2结果-&gt;&quot;</span> <span class="token operator">+</span> cf2<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String<span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">thenRunAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们不需要显式使用ExecutorService，CompletableFuture 内部使用了<code>ForkJoinPool</code>来处理异步任务，如果在某些业务场景我们想自定义自己的异步线程池也是可以的。</p><h2 id="_4-4-spring的-async异步" tabindex="-1"><a class="header-anchor" href="#_4-4-spring的-async异步" aria-hidden="true">#</a> 4.4 Spring的@Async异步</h2><h3 id="_4-4-1-自定义异步线程池" tabindex="-1"><a class="header-anchor" href="#_4-4-1-自定义异步线程池" aria-hidden="true">#</a> 4.4.1 自定义异步线程池</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 线程池参数配置，多个线程池实现线程池隔离，@Async注解，默认使用系统自定义线程池，可在项目中设置多个线程池，在异步调用的时候，指明需要调用的线程池名称，比如：@Async(&quot;taskName&quot;)
 *
 * <span class="token keyword">@author</span>: jacklin
 * <span class="token keyword">@since</span>: 2021/5/18 11:44
 **/</span>
<span class="token annotation punctuation">@EnableAsync</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TaskPoolConfig</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 自定义线程池
     *
     * <span class="token keyword">@author</span>: jacklin
     * <span class="token keyword">@since</span>: 2021/11/16 17:41
     **/</span>
    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">&quot;taskExecutor&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Executor</span> <span class="token function">taskExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//返回可用处理器的Java虚拟机的数量 12</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">availableProcessors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;系统最大线程数  ： &quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ThreadPoolTaskExecutor</span> executor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolTaskExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//核心线程池大小</span>
        executor<span class="token punctuation">.</span><span class="token function">setCorePoolSize</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//最大线程数</span>
        executor<span class="token punctuation">.</span><span class="token function">setMaxPoolSize</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//配置队列容量，默认值为Integer.MAX_VALUE</span>
        executor<span class="token punctuation">.</span><span class="token function">setQueueCapacity</span><span class="token punctuation">(</span><span class="token number">99999</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//活跃时间</span>
        executor<span class="token punctuation">.</span><span class="token function">setKeepAliveSeconds</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//线程名字前缀</span>
        executor<span class="token punctuation">.</span><span class="token function">setThreadNamePrefix</span><span class="token punctuation">(</span><span class="token string">&quot;asyncServiceExecutor -&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//设置此执行程序应该在关闭时阻止的最大秒数，以便在容器的其余部分继续关闭之前等待剩余的任务完成他们的执行</span>
        executor<span class="token punctuation">.</span><span class="token function">setAwaitTerminationSeconds</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//等待所有的任务结束后再关闭线程池</span>
        executor<span class="token punctuation">.</span><span class="token function">setWaitForTasksToCompleteOnShutdown</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> executor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-2-asyncservice" tabindex="-1"><a class="header-anchor" href="#_4-4-2-asyncservice" aria-hidden="true">#</a> 4.4.2 AsyncService</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">AsyncService</span> <span class="token punctuation">{</span>

    MessageResult <span class="token function">sendSms</span><span class="token punctuation">(</span>String callPrefix<span class="token punctuation">,</span> String mobile<span class="token punctuation">,</span> String actionType<span class="token punctuation">,</span> String content<span class="token punctuation">)</span><span class="token punctuation">;</span>

    MessageResult <span class="token function">sendEmail</span><span class="token punctuation">(</span>String email<span class="token punctuation">,</span> String subject<span class="token punctuation">,</span> String content<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Slf4j</span></span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">Service</span></span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AsyncServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">AsyncService</span> <span class="token punctuation">{</span>

    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Autowired</span></span>
    <span class="token keyword">private</span> IMessageHandler mesageHandler<span class="token punctuation">;</span>

    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Override</span></span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Async</span></span><span class="token punctuation">(</span><span class="token string">&quot;taskExecutor&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> MessageResult <span class="token function">sendSms</span><span class="token punctuation">(</span>String callPrefix<span class="token punctuation">,</span> String mobile<span class="token punctuation">,</span> String actionType<span class="token punctuation">,</span> String content<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>

            Thread<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            mesageHandler<span class="token punctuation">.</span><span class="token function">sendSms</span><span class="token punctuation">(</span>callPrefix<span class="token punctuation">,</span> mobile<span class="token punctuation">,</span> actionType<span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>Exception e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;发送短信异常 -&gt; &quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Override</span></span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Async</span></span><span class="token punctuation">(</span><span class="token string">&quot;taskExecutor&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token function">sendEmail</span><span class="token punctuation">(</span>String email<span class="token punctuation">,</span> String subject<span class="token punctuation">,</span> String content<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>

            Thread<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            mesageHandler<span class="token punctuation">.</span><span class="token function">sendsendEmail</span><span class="token punctuation">(</span>email<span class="token punctuation">,</span> subject<span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>Exception e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;发送email异常 -&gt; &quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),r=s("code",null,"@Async",-1),d={href:"https://juejin.cn/post/7099328896142671903",target:"_blank",rel:"noopener noreferrer"},k=a(`<h2 id="_4-5-spring-applicationevent事件实现异步" tabindex="-1"><a class="header-anchor" href="#_4-5-spring-applicationevent事件实现异步" aria-hidden="true">#</a> 4.5 Spring ApplicationEvent事件实现异步</h2><h3 id="_4-5-1-定义事件" tabindex="-1"><a class="header-anchor" href="#_4-5-1-定义事件" aria-hidden="true">#</a> 4.5.1 定义事件</h3><div class="language-scala line-numbers-mode" data-ext="scala"><pre class="language-scala"><code>public <span class="token keyword">class</span> AsyncSendEmailEvent <span class="token keyword">extends</span> ApplicationEvent <span class="token punctuation">{</span>

    <span class="token comment">/**
     * 邮箱
     **/</span>
    <span class="token keyword">private</span> <span class="token builtin">String</span> email<span class="token punctuation">;</span>

   <span class="token comment">/**
     * 主题
     **/</span>
    <span class="token keyword">private</span> <span class="token builtin">String</span> subject<span class="token punctuation">;</span>

    <span class="token comment">/**
     * 内容
     **/</span>
    <span class="token keyword">private</span> <span class="token builtin">String</span> content<span class="token punctuation">;</span>
  
    <span class="token comment">/**
     * 接收者
     **/</span>
    <span class="token keyword">private</span> <span class="token builtin">String</span> targetUserId<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-2-定义事件处理器" tabindex="-1"><a class="header-anchor" href="#_4-5-2-定义事件处理器" aria-hidden="true">#</a> 4.5.2 定义事件处理器</h3><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token atrule">@Slf4j
@Component
public class AsyncSendEmailEventHandler implements ApplicationListener&lt;AsyncSendEmailEvent&gt;</span> <span class="token punctuation">{</span>

    <span class="token variable">@Autowired</span>
    private IMessageHandler mesageHandler<span class="token punctuation">;</span>
    
    <span class="token atrule">@Async<span class="token punctuation">(</span>&quot;taskExecutor&quot;<span class="token punctuation">)</span>
    @Override
    public void onApplicationEvent<span class="token punctuation">(</span>AsyncSendEmailEvent event<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
        <span class="token selector">if (event == null)</span> <span class="token punctuation">{</span>
            return<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        String email = event.<span class="token function">getEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        String subject = event.<span class="token function">getSubject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        String content = event.<span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        String targetUserId = event.<span class="token function">getTargetUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mesageHandler.<span class="token function">sendsendEmailSms</span><span class="token punctuation">(</span>email<span class="token punctuation">,</span> subject<span class="token punctuation">,</span> content<span class="token punctuation">,</span> targerUserId<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，可能有些时候采用ApplicationEvent实现异步的使用，当程序出现异常错误的时候，需要考虑补偿机制，那么这时候可以结合Spring Retry重试来帮助我们避免这种异常造成数据不一致问题。</p><h2 id="_4-6-消息队列" tabindex="-1"><a class="header-anchor" href="#_4-6-消息队列" aria-hidden="true">#</a> 4.6 消息队列</h2><h3 id="_4-6-1-回调事件消息生产者" tabindex="-1"><a class="header-anchor" href="#_4-6-1-回调事件消息生产者" aria-hidden="true">#</a> 4.6.1 回调事件消息生产者</h3><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token atrule">@Slf4j
@Component
public class CallbackProducer</span> <span class="token punctuation">{</span>

    <span class="token variable">@Autowired</span>
    AmqpTemplate amqpTemplate<span class="token punctuation">;</span>

    <span class="token selector">public void sendCallbackMessage(CallbackDTO allbackDTO, final long delayTimes)</span> <span class="token punctuation">{</span>

        log.info<span class="token selector">(&quot;生产者发送消息，callbackDTO，</span><span class="token punctuation">{</span><span class="token punctuation">}</span>&quot;<span class="token punctuation">,</span> callbackDTO<span class="token punctuation">)</span><span class="token punctuation">;</span>

        amqpTemplate.convertAndSend<span class="token selector">(CallbackQueueEnum.QUEUE_GENSEE_CALLBACK.getExchange(), CallbackQueueEnum.QUEUE_GENSEE_CALLBACK.getRoutingKey(), JsonMapper.getInstance().toJson(genseeCallbackDTO), new MessagePostProcessor()</span> <span class="token punctuation">{</span>
            <span class="token atrule">@Override
            public Message postProcessMessage<span class="token punctuation">(</span>Message message<span class="token punctuation">)</span> throws AmqpException</span> <span class="token punctuation">{</span>
                <span class="token comment">//给消息设置延迟毫秒值，通过给消息设置x-delay头来设置消息从交换机发送到队列的延迟时间</span>
                message.<span class="token function">getMessageProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span>.<span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">&quot;x-delay&quot;</span><span class="token punctuation">,</span> delayTimes<span class="token punctuation">)</span><span class="token punctuation">;</span>
                message.<span class="token function">getMessageProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span>.<span class="token function">setCorrelationId</span><span class="token punctuation">(</span>callbackDTO.<span class="token function">getSdkId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                return message<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-6-2-回调事件消息消费者" tabindex="-1"><a class="header-anchor" href="#_4-6-2-回调事件消息消费者" aria-hidden="true">#</a> 4.6.2 回调事件消息消费者</h3><div class="language-less line-numbers-mode" data-ext="less"><pre class="language-less"><code><span class="token atrule">@Slf4j
@Component
@RabbitListener<span class="token punctuation">(</span>queues = &quot;message.callback&quot;, containerFactory = &quot;rabbitListenerContainerFactory&quot;<span class="token punctuation">)</span>
public class CallbackConsumer</span> <span class="token punctuation">{</span>

    <span class="token variable">@Autowired</span>
    private IGlobalUserService globalUserService<span class="token punctuation">;</span>

    <span class="token atrule">@RabbitHandler
    public void handle<span class="token punctuation">(</span>String json, Channel channel, @Headers Map&lt;String, Object&gt; map<span class="token punctuation">)</span> throws Exception</span> <span class="token punctuation">{</span>

        <span class="token selector">if (map.get(&quot;error&quot;) != null)</span> <span class="token punctuation">{</span>
            <span class="token comment">//否认消息</span>
            channel.<span class="token function">basicNack</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Long<span class="token punctuation">)</span> map.<span class="token function">get</span><span class="token punctuation">(</span>AmqpHeaders.DELIVERY_TAG<span class="token punctuation">)</span><span class="token punctuation">,</span> false<span class="token punctuation">,</span> true<span class="token punctuation">)</span><span class="token punctuation">;</span>
            return<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token selector">try</span> <span class="token punctuation">{</span>
        
            CallbackDTO callbackDTO = JsonMapper.<span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>.<span class="token function">fromJson</span><span class="token punctuation">(</span>json<span class="token punctuation">,</span> CallbackDTO.class<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//执行业务逻辑</span>
            globalUserService.<span class="token function">execute</span><span class="token punctuation">(</span>callbackDTO<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//消息消息成功手动确认，对应消息确认模式acknowledge-mode: manual</span>
            channel.<span class="token function">basicAck</span><span class="token punctuation">(</span><span class="token punctuation">(</span>Long<span class="token punctuation">)</span> map.<span class="token function">get</span><span class="token punctuation">(</span>AmqpHeaders.DELIVERY_TAG<span class="token punctuation">)</span><span class="token punctuation">,</span> false<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token selector">catch (Exception e)</span> <span class="token punctuation">{</span>
            log.error<span class="token selector">(&quot;回调失败 -&gt;</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>&quot;<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-7-threadutil异步工具类" tabindex="-1"><a class="header-anchor" href="#_4-7-threadutil异步工具类" aria-hidden="true">#</a> 4.7 ThreadUtil异步工具类</h2><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code>@Slf4j
public class ThreadUtils {

    public static void main(String[] args) {
        <span class="token key attr-name">for (int i</span> <span class="token punctuation">=</span> <span class="token value attr-value">0; i &lt; 3; i++) {</span>
            ThreadUtil.execAsync(() -&gt; {
                <span class="token key attr-name">ThreadLocalRandom threadLocalRandom</span> <span class="token punctuation">=</span> <span class="token value attr-value">ThreadLocalRandom.current();</span>
                <span class="token key attr-name">int number</span> <span class="token punctuation">=</span> <span class="token value attr-value">threadLocalRandom.nextInt(20) + 1;</span>
                System.out.println(number);
            });
            log.info(&quot;当前第：&quot; + i + &quot;个线程&quot;);
        }

        log.info(&quot;task finish!&quot;);
    }
}
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-8-guava异步" tabindex="-1"><a class="header-anchor" href="#_4-8-guava异步" aria-hidden="true">#</a> 4.8 Guava异步</h2><p><code>Guava</code>的<code>ListenableFuture</code>顾名思义就是可以监听的<code>Future</code>，是对java原生Future的扩展增强。我们知道Future表示一个异步计算任务，当任务完成时可以得到计算结果。如果我们希望一旦计算完成就拿到结果展示给用户或者做另外的计算，就必须使用另一个线程不断的查询计算状态。这样做，代码复杂，而且效率低下。使用<strong>Guava ListenableFuture</strong>可以帮我们检测Future是否完成了，不需要再通过get()方法苦苦等待异步的计算结果，如果完成就自动调用回调函数，这样可以减少并发程序的复杂度。</p><p><code>ListenableFuture</code>是一个接口，它从<code>jdk</code>的<code>Future</code>接口继承，添加了<code>void addListener(Runnable listener, Executor executor)</code>方法。</p><p>我们看下如何使用ListenableFuture。首先需要定义ListenableFuture的实例:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token class-name">ListeningExecutorService</span> executorService <span class="token operator">=</span> <span class="token class-name">MoreExecutors</span><span class="token punctuation">.</span><span class="token function">listeningDecorator</span><span class="token punctuation">(</span><span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newCachedThreadPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">final</span> <span class="token class-name">ListenableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> listenableFuture <span class="token operator">=</span> executorService<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
                log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;callable execute...&quot;</span><span class="token punctuation">)</span>
                <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>首先通过<code>MoreExecutors</code>类的静态方法<code>listeningDecorator</code>方法初始化一个<code>ListeningExecutorService</code>的方法，然后使用此实例的<code>submit</code>方法即可初始化<code>ListenableFuture</code>对象。</p><p><code>ListenableFuture</code>要做的工作，在Callable接口的实现类中定义，这里只是休眠了1秒钟然后返回一个数字1，有了ListenableFuture实例，可以执行此Future并执行Future完成之后的回调函数。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code> Futures<span class="token punctuation">.</span><span class="token function">addCallback</span><span class="token punctuation">(</span>listenableFuture<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">FutureCallback<span class="token operator">&lt;</span>Integer<span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Override</span></span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onSuccess</span><span class="token punctuation">(</span>Integer result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//成功执行...</span>
        System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Get listenable future&#39;s result with callback &quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Override</span></span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onFailure</span><span class="token punctuation">(</span>Throwable t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//异常情况处理...</span>
        t<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上就是实现异步的8种方式</p>`,22);function v(m,b){const e=i("ExternalLinkIcon");return p(),c("div",null,[u,s("p",null,[n("在实际项目中， 使用"),r,n("调用线程池，推荐等方式是是使用自定义线程池的模式，不推荐直接使用@Async直接实现异步，具体说明可以参考博主之前发表的文章"),s("a",d,[n("为什么都不建议直接使用@Async注解实现异步?"),o(e)]),n("。")]),k])}const h=t(l,[["render",v],["__file","Java实现异步编程的8种方式.html.vue"]]);export{h as default};
