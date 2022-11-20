import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,d as e}from"./app.36728030.js";const t={},i=e(`<h1 id="springboot利用threadpooltaskexecutor多线程批量插入百万级数据" tabindex="-1"><a class="header-anchor" href="#springboot利用threadpooltaskexecutor多线程批量插入百万级数据" aria-hidden="true">#</a> Springboot利用ThreadPoolTaskExecutor多线程批量插入百万级数据</h1><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>开发目的：提高百万级数据插入效率。</p><p>采取方案：利用ThreadPoolTaskExecutor多线程批量插入。</p><p>采用技术：springboot2.1.1+mybatisPlus3.0.6+swagger2.5.0+Lombok1.18.4+postgresql+ThreadPoolTaskExecutor等。</p><h2 id="具体实现细节" tabindex="-1"><a class="header-anchor" href="#具体实现细节" aria-hidden="true">#</a> <strong>具体实现细节</strong></h2><h3 id="application-dev-properties添加线程池配置信息" tabindex="-1"><a class="header-anchor" href="#application-dev-properties添加线程池配置信息" aria-hidden="true">#</a> application-dev.properties添加线程池配置信息</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code># 异步线程配置
# 配置核心线程数
async.executor.thread.core_pool_size = 30
# 配置最大线程数
async.executor.thread.max_pool_size = 30
# 配置队列大小
async.executor.thread.queue_capacity = 99988
# 配置线程池中的线程的名称前缀
async.executor.thread.name.prefix = async-importDB-
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="spring容器注入线程池bean对象" tabindex="-1"><a class="header-anchor" href="#spring容器注入线程池bean对象" aria-hidden="true">#</a> spring容器注入线程池bean对象</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
 
<span class="token annotation punctuation">@EnableAsync</span>
 
<span class="token annotation punctuation">@Slf4j</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ExecutorConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${async.executor.thread.core_pool_size}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> corePoolSize<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${async.executor.thread.max_pool_size}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> maxPoolSize<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${async.executor.thread.queue_capacity}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> queueCapacity<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${async.executor.thread.name.prefix}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> namePrefix<span class="token punctuation">;</span>
 
    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;asyncServiceExecutor&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Executor</span> <span class="token function">asyncServiceExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;start asyncServiceExecutor&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//在这里修改</span>
        <span class="token class-name">ThreadPoolTaskExecutor</span> executor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VisiableThreadPoolTaskExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//配置核心线程数</span>
        executor<span class="token punctuation">.</span><span class="token function">setCorePoolSize</span><span class="token punctuation">(</span>corePoolSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//配置最大线程数</span>
        executor<span class="token punctuation">.</span><span class="token function">setMaxPoolSize</span><span class="token punctuation">(</span>maxPoolSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//配置队列大小</span>
        executor<span class="token punctuation">.</span><span class="token function">setQueueCapacity</span><span class="token punctuation">(</span>queueCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//配置线程池中的线程的名称前缀</span>
        executor<span class="token punctuation">.</span><span class="token function">setThreadNamePrefix</span><span class="token punctuation">(</span>namePrefix<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// rejection-policy：当pool已经达到max size的时候，如何处理新任务</span>
        <span class="token comment">// CALLER_RUNS：不在新线程中执行任务，而是有调用者所在的线程来执行</span>
        executor<span class="token punctuation">.</span><span class="token function">setRejectedExecutionHandler</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor<span class="token punctuation">.</span>CallerRunsPolicy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//执行初始化</span>
        executor<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> executor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建异步线程-业务类" tabindex="-1"><a class="header-anchor" href="#创建异步线程-业务类" aria-hidden="true">#</a> 创建异步线程 业务类</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
 
<span class="token annotation punctuation">@Slf4j</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AsyncServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">AsyncService</span> <span class="token punctuation">{</span>
<span class="token annotation punctuation">@Override</span>
    <span class="token annotation punctuation">@Async</span><span class="token punctuation">(</span><span class="token string">&quot;asyncServiceExecutor&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">executeAsync</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">LogOutputResult</span><span class="token punctuation">&gt;</span></span> logOutputResults<span class="token punctuation">,</span> <span class="token class-name">LogOutputResultMapper</span> logOutputResultMapper<span class="token punctuation">,</span> <span class="token class-name">CountDownLatch</span> countDownLatch<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span><span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;start executeAsync&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//异步线程要做的事情</span>
            logOutputResultMapper<span class="token punctuation">.</span><span class="token function">addLogOutputResultBatch</span><span class="token punctuation">(</span>logOutputResults<span class="token punctuation">)</span><span class="token punctuation">;</span>
            log<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&quot;end executeAsync&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">finally</span> <span class="token punctuation">{</span>
            countDownLatch<span class="token punctuation">.</span><span class="token function">countDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 很关键, 无论上面程序是否异常必须执行countDown,否则await无法释放</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建多线程批量插入具体业务方法" tabindex="-1"><a class="header-anchor" href="#创建多线程批量插入具体业务方法" aria-hidden="true">#</a> 创建多线程批量插入具体业务方法</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>@Override
    public int testMultiThread() {
        List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LogOutputResult</span><span class="token punctuation">&gt;</span></span> logOutputResults = getTestData();
        //测试每100条数据插入开一个线程
        List&lt;List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LogOutputResult</span><span class="token punctuation">&gt;</span></span>&gt; lists = ConvertHandler.splitList(logOutputResults, 100);
        CountDownLatch countDownLatch = new CountDownLatch(lists.size());
        for (List<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>LogOutputResult</span><span class="token punctuation">&gt;</span></span> listSub:lists) {
            asyncService.executeAsync(listSub, logOutputResultMapper,countDownLatch);
        }
        try {
            countDownLatch.await(); //保证之前的所有的线程都执行完成，才会走下面的；
            // 这样就可以在下面拿到所有线程执行完的集合结果
        } catch (Exception e) {
            log.error(&quot;阻塞异常:&quot;+e.getMessage());
        }
        return logOutputResults.size();
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模拟2000003-条数据进行测试" tabindex="-1"><a class="header-anchor" href="#模拟2000003-条数据进行测试" aria-hidden="true">#</a> 模拟2000003 条数据进行测试</h3><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20191225121702208.png" alt="img" loading="lazy"></p><p>多线程 测试 2000003 耗时如下：耗时1.67分钟</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/2019122512171971.png" alt="img" loading="lazy"></p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20191225121745132.png" alt="img" loading="lazy"></p><p>本次开启30个线程，截图如下：</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20191225121812550.png" alt="img" loading="lazy"></p><p>单线程测试2000003 耗时如下：耗时5.75分钟</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20191225121832495.png" alt="img" loading="lazy"></p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20191225121848593.png" alt="img" loading="lazy"></p><h3 id="检查多线程入库的数据-检查是否存在重复入库的问题" tabindex="-1"><a class="header-anchor" href="#检查多线程入库的数据-检查是否存在重复入库的问题" aria-hidden="true">#</a> 检查多线程入库的数据，检查是否存在重复入库的问题：</h3><p>根据id分组，查看是否有id重复的数据，通过sql语句检查，没有发现重复入库的问题</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/2019122512191274.png" alt="img" loading="lazy"></p><p>检查数据完整性： 通过sql语句查询，多线程录入数据完整 <img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/20191225122051393.png" alt="img" loading="lazy"></p><h2 id="测试结果" tabindex="-1"><a class="header-anchor" href="#测试结果" aria-hidden="true">#</a> 测试结果</h2><p>不同线程数测试：</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/2019122512213611.png" alt="img" loading="lazy"></p><p><img src="https://img-blog.csdnimg.cn/20191225122203925.png" alt="img" loading="lazy"></p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>通过以上测试案列，同样是导入2000003 条数据，多线程耗时1.67分钟，单线程耗时5.75分钟。通过对不同线程数的测试，发现不是线程数越多越好，具体多少合适，网上有一个不成文的算法：</p>`,34),p=[i];function o(c,l){return s(),a("div",null,p)}const r=n(t,[["render",o],["__file","Springboot利用ThreadPoolTaskExecutor多线程批量插入百万级数据.html.vue"]]);export{r as default};
