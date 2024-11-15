import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,a as i}from"./app-DWXdHMII.js";const l={};function p(r,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="springboot-引入线程池-queue-缓冲队列实现高并发下单业务" tabindex="-1"><a class="header-anchor" href="#springboot-引入线程池-queue-缓冲队列实现高并发下单业务"><span>SpringBoot 引入线程池-Queue 缓冲队列实现高并发下单业务</span></a></h1><ul><li>1.首先是 springBoot 的项目框架如下：</li><li>2.业务测试流程涉及的类，如下</li><li>3.使用 JMeter 模拟并发下单请求</li><li>4.结果</li></ul><hr><p>主要是自己在项目中(中小型项目) 有支付下单业务(只是办理 VIP，没有涉及到商品库存) ，目前用户量还没有上来，目前没有出现问题，但是想到如果用户量变大，下单并发量变大，可能会出现一系列的问题，趁着空闲时间，做了这个 demo 测试相关问题。</p><p>可能遇到的问题如下：</p><ol><li>订单重复</li><li>高并发下，性能变慢</li></ol><p>解决方式：<code>ThreadPoolExecutor</code>线程池 + Queue 队列</p><h2 id="_1-首先是-springboot-的项目框架如下" tabindex="-1"><a class="header-anchor" href="#_1-首先是-springboot-的项目框架如下"><span>1.首先是 springBoot 的项目框架如下</span></a></h2><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/image-20220524225159288.png" alt="image-20220524225159288" tabindex="0" loading="lazy"><figcaption>image-20220524225159288</figcaption></figure><h2 id="_2-业务测试流程涉及的类-如下" tabindex="-1"><a class="header-anchor" href="#_2-业务测试流程涉及的类-如下"><span>2.业务测试流程涉及的类，如下</span></a></h2><ul><li>BusinessThread 类</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.springboot.demo.Threads;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.springframework.context.annotation.Scope;</span></span>
<span class="line"><span>import org.springframework.stereotype.Component;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>@Scope(&quot;prototype&quot;)//spring 多例</span></span>
<span class="line"><span>public class BusinessThread implements Runnable{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private String acceptStr;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public BusinessThread(String acceptStr) {</span></span>
<span class="line"><span>        this.acceptStr = acceptStr;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getAcceptStr() {</span></span>
<span class="line"><span>        return acceptStr;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public void setAcceptStr(String acceptStr) {</span></span>
<span class="line"><span>        this.acceptStr = acceptStr;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void run() {</span></span>
<span class="line"><span>        //业务操作</span></span>
<span class="line"><span>        System.out.println(&quot;多线程已经处理订单插入系统，订单号：&quot;+acceptStr);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //线程阻塞</span></span>
<span class="line"><span>        /*try {</span></span>
<span class="line"><span>            Thread.sleep(1000);</span></span>
<span class="line"><span>            System.out.println(&quot;多线程已经处理订单插入系统，订单号：&quot;+acceptStr);</span></span>
<span class="line"><span>        } catch (InterruptedException e) {</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }*/</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>TestThreadPoolManager 类</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.springboot.demo.Threads;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.springframework.beans.BeansException;</span></span>
<span class="line"><span>import org.springframework.beans.factory.BeanFactory;</span></span>
<span class="line"><span>import org.springframework.beans.factory.BeanFactoryAware;</span></span>
<span class="line"><span>import org.springframework.stereotype.Component;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.Map;</span></span>
<span class="line"><span>import java.util.Queue;</span></span>
<span class="line"><span>import java.util.concurrent.*;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class TestThreadPoolManager implements BeanFactoryAware {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //用于从IOC里取对象</span></span>
<span class="line"><span>    private BeanFactory factory; //如果实现Runnable的类是通过spring的application.xml文件进行注入,可通过 factory.getBean()获取，这里只是提一下</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 线程池维护线程的最少数量</span></span>
<span class="line"><span>    private final static int CORE_POOL_SIZE = 2;</span></span>
<span class="line"><span>    // 线程池维护线程的最大数量</span></span>
<span class="line"><span>    private final static int MAX_POOL_SIZE = 10;</span></span>
<span class="line"><span>    // 线程池维护线程所允许的空闲时间</span></span>
<span class="line"><span>    private final static int KEEP_ALIVE_TIME = 0;</span></span>
<span class="line"><span>    // 线程池所使用的缓冲队列大小</span></span>
<span class="line"><span>    private final static int WORK_QUEUE_SIZE = 50;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void setBeanFactory(BeanFactory beanFactory) throws BeansException {</span></span>
<span class="line"><span>        factory = beanFactory;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 用于储存在队列中的订单,防止重复提交,在真实场景中，可用redis代替 验证重复</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    Map&lt;String, Object&gt; cacheMap = new ConcurrentHashMap&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 订单的缓冲队列,当线程池满了，则将订单存入到此缓冲队列</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    Queue&lt;Object&gt; msgQueue = new LinkedBlockingQueue&lt;Object&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 当线程池的容量满了，执行下面代码，将订单存入到缓冲队列</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    final RejectedExecutionHandler handler = new RejectedExecutionHandler() {</span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>        public void rejectedExecution(Runnable r, ThreadPoolExecutor executor) {</span></span>
<span class="line"><span>            //订单加入到缓冲队列</span></span>
<span class="line"><span>            msgQueue.offer(((BusinessThread) r).getAcceptStr());</span></span>
<span class="line"><span>            System.out.println(&quot;系统任务太忙了,把此订单交给(调度线程池)逐一处理，订单号：&quot; + ((BusinessThread) r).getAcceptStr());</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    };</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**创建线程池*/</span></span>
<span class="line"><span>   final ThreadPoolExecutor threadPool = new ThreadPoolExecutor(CORE_POOL_SIZE, MAX_POOL_SIZE, KEEP_ALIVE_TIME, TimeUnit.SECONDS, new ArrayBlockingQueue(WORK_QUEUE_SIZE), this.handler);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**将任务加入订单线程池*/</span></span>
<span class="line"><span>    public void addOrders(String orderId){</span></span>
<span class="line"><span>        System.out.println(&quot;此订单准备添加到线程池，订单号：&quot; + orderId);</span></span>
<span class="line"><span>        //验证当前进入的订单是否已经存在</span></span>
<span class="line"><span>        if (cacheMap.get(orderId) == null) {</span></span>
<span class="line"><span>            cacheMap.put(orderId, new Object());</span></span>
<span class="line"><span>            BusinessThread businessThread = new BusinessThread(orderId);</span></span>
<span class="line"><span>            threadPool.execute(businessThread);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 线程池的定时任务----&gt; 称为(调度线程池)。此线程池支持 定时以及周期性执行任务的需求。</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(5);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 检查(调度线程池)，每秒执行一次，查看订单的缓冲队列是否有 订单记录，则重新加入到线程池</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    final ScheduledFuture scheduledFuture = scheduler.scheduleAtFixedRate(new Runnable() {</span></span>
<span class="line"><span>        @Override</span></span>
<span class="line"><span>        public void run() {</span></span>
<span class="line"><span>            //判断缓冲队列是否存在记录</span></span>
<span class="line"><span>            if(!msgQueue.isEmpty()){</span></span>
<span class="line"><span>                //当线程池的队列容量少于WORK_QUEUE_SIZE，则开始把缓冲队列的订单 加入到 线程池</span></span>
<span class="line"><span>                if (threadPool.getQueue().size() &lt; WORK_QUEUE_SIZE) {</span></span>
<span class="line"><span>                    String orderId = (String) msgQueue.poll();</span></span>
<span class="line"><span>                    BusinessThread businessThread = new BusinessThread(orderId);</span></span>
<span class="line"><span>                    threadPool.execute(businessThread);</span></span>
<span class="line"><span>                    System.out.println(&quot;(调度线程池)缓冲队列出现订单业务，重新添加到线程池，订单号：&quot;+orderId);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }, 0, 1, TimeUnit.SECONDS);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**获取消息缓冲队列*/</span></span>
<span class="line"><span>    public Queue&lt;Object&gt; getMsgQueue() {</span></span>
<span class="line"><span>        return msgQueue;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**终止订单线程池+调度线程池*/</span></span>
<span class="line"><span>    public void shutdown() {</span></span>
<span class="line"><span>        //true表示如果定时任务在执行，立即中止，false则等待任务结束后再停止</span></span>
<span class="line"><span>        System.out.println(&quot;终止订单线程池+调度线程池：&quot;+scheduledFuture.cancel(false));</span></span>
<span class="line"><span>        scheduler.shutdown();</span></span>
<span class="line"><span>        threadPool.shutdown();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>TestController 类</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>package com.springboot.demo;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.springboot.demo.Threads.TestThreadPoolManager;</span></span>
<span class="line"><span>import org.springframework.beans.factory.annotation.Autowired;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.GetMapping;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.PathVariable;</span></span>
<span class="line"><span>import org.springframework.web.bind.annotation.RestController;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import java.util.Queue;</span></span>
<span class="line"><span>import java.util.UUID;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span> * Created by Administrator on 2018/5/9.</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>@RestController</span></span>
<span class="line"><span>public class TestController {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    TestThreadPoolManager testThreadPoolManager;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 测试模拟下单请求 入口</span></span>
<span class="line"><span>     * @param id</span></span>
<span class="line"><span>     * @return</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @GetMapping(&quot;/start/{id}&quot;)</span></span>
<span class="line"><span>    public String start(@PathVariable Long id) {</span></span>
<span class="line"><span>        //模拟的随机数</span></span>
<span class="line"><span>        String orderNo = System.currentTimeMillis() + UUID.randomUUID().toString();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        testThreadPoolManager.addOrders(orderNo);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        return &quot;Test ThreadPoolExecutor start&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 停止服务</span></span>
<span class="line"><span>     * @param id</span></span>
<span class="line"><span>     * @return</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @GetMapping(&quot;/end/{id}&quot;)</span></span>
<span class="line"><span>    public String end(@PathVariable Long id) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        testThreadPoolManager.shutdown();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Queue q = testThreadPoolManager.getMsgQueue();</span></span>
<span class="line"><span>        System.out.println(&quot;关闭了线程服务，还有未处理的信息条数：&quot; + q.size());</span></span>
<span class="line"><span>        return &quot;Test ThreadPoolExecutor start&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>基于微服务的思想，构建在 B2C 电商场景下的项目实战。核心技术栈，是 Spring Boot + Dubbo 。未来，会重构成 Spring Cloud Alibaba 。</p><p>项目地址：<a href="https://github.com/YunaiV/onemall" target="_blank" rel="noopener noreferrer">https://github.com/YunaiV/onemall</a></p></blockquote><h2 id="_3-使用-jmeter-模拟并发下单请求" tabindex="-1"><a class="header-anchor" href="#_3-使用-jmeter-模拟并发下单请求"><span>3.使用 JMeter 模拟并发下单请求</span></a></h2><p>[<img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-16533988082341.png" alt="图片" loading="lazy">]</p><h2 id="_4-结果" tabindex="-1"><a class="header-anchor" href="#_4-结果"><span>4.结果</span></a></h2><p>打印的日志说明，开始的订单直接执行插入到系统，当线程池的容量已经满了，则使用<code>RejectedExecutionHandler</code>方法把后面的订单添加到 Queue 缓冲队列，使用<code>ScheduledFuture</code>方法定时(我这里是每秒一次)检查 Queue 队列，重新把队列里面的订单添加到线程池，执行后面的插入任务。</p><p>部分日志如下</p><p>[<img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-16533988082342.png" alt="图片" loading="lazy">]</p>`,23)]))}const t=s(l,[["render",p],["__file","SpringBoot引入线程池-Queue缓冲队列实现高并发下单业务.html.vue"]]),u=JSON.parse('{"path":"/dev/SpringBoot%E5%BC%95%E5%85%A5%E7%BA%BF%E7%A8%8B%E6%B1%A0-Queue%E7%BC%93%E5%86%B2%E9%98%9F%E5%88%97%E5%AE%9E%E7%8E%B0%E9%AB%98%E5%B9%B6%E5%8F%91%E4%B8%8B%E5%8D%95%E4%B8%9A%E5%8A%A1.html","title":"SpringBoot 引入线程池-Queue缓冲队列实现高并发下单业务","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"SpringBoot 引入线程池-Queue缓冲队列实现高并发下单业务","excerpt":null,"description":"SpringBoot 引入线程池-Queue 缓冲队列实现高并发下单业务 1.首先是 springBoot 的项目框架如下： 2.业务测试流程涉及的类，如下 3.使用 JMeter 模拟并发下单请求 4.结果 主要是自己在项目中(中小型项目) 有支付下单业务(只是办理 VIP，没有涉及到商品库存) ，目前用户量还没有上来，目前没有出现问题，但是想到如果...","date":"2022-05-26T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/SpringBoot%E5%BC%95%E5%85%A5%E7%BA%BF%E7%A8%8B%E6%B1%A0-Queue%E7%BC%93%E5%86%B2%E9%98%9F%E5%88%97%E5%AE%9E%E7%8E%B0%E9%AB%98%E5%B9%B6%E5%8F%91%E4%B8%8B%E5%8D%95%E4%B8%9A%E5%8A%A1.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"SpringBoot 引入线程池-Queue缓冲队列实现高并发下单业务"}],["meta",{"property":"og:description","content":"SpringBoot 引入线程池-Queue 缓冲队列实现高并发下单业务 1.首先是 springBoot 的项目框架如下： 2.业务测试流程涉及的类，如下 3.使用 JMeter 模拟并发下单请求 4.结果 主要是自己在项目中(中小型项目) 有支付下单业务(只是办理 VIP，没有涉及到商品库存) ，目前用户量还没有上来，目前没有出现问题，但是想到如果..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bitbucket.org/xlc520/blogasset/raw/main/images3/image-20220524225159288.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2022-05-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot 引入线程池-Queue缓冲队列实现高并发下单业务\\",\\"image\\":[\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/image-20220524225159288.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-16533988082341.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-16533988082342.png\\"],\\"datePublished\\":\\"2022-05-26T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"1.首先是 springBoot 的项目框架如下","slug":"_1-首先是-springboot-的项目框架如下","link":"#_1-首先是-springboot-的项目框架如下","children":[]},{"level":2,"title":"2.业务测试流程涉及的类，如下","slug":"_2-业务测试流程涉及的类-如下","link":"#_2-业务测试流程涉及的类-如下","children":[]},{"level":2,"title":"3.使用 JMeter 模拟并发下单请求","slug":"_3-使用-jmeter-模拟并发下单请求","link":"#_3-使用-jmeter-模拟并发下单请求","children":[]},{"level":2,"title":"4.结果","slug":"_4-结果","link":"#_4-结果","children":[]}],"git":{"createdTime":1653403540000,"updatedTime":1714224756000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":3},{"name":"xlc","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":4.39,"words":1317},"filePathRelative":"dev/SpringBoot引入线程池-Queue缓冲队列实现高并发下单业务.md","localizedDate":"2022年5月26日","excerpt":"\\n<ul>\\n<li>1.首先是 springBoot 的项目框架如下：</li>\\n<li>2.业务测试流程涉及的类，如下</li>\\n<li>3.使用 JMeter 模拟并发下单请求</li>\\n<li>4.结果</li>\\n</ul>","autoDesc":true}');export{t as comp,u as data};
