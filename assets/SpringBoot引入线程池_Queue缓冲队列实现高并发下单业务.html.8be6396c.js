import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as r,c as a,a as e,e as v,d as i,b as n}from"./app.e07a5d6c.js";const u={},t=i(`<h1 id="springboot-\u5F15\u5165\u7EBF\u7A0B\u6C60-queue\u7F13\u51B2\u961F\u5217\u5B9E\u73B0\u9AD8\u5E76\u53D1\u4E0B\u5355\u4E1A\u52A1" tabindex="-1"><a class="header-anchor" href="#springboot-\u5F15\u5165\u7EBF\u7A0B\u6C60-queue\u7F13\u51B2\u961F\u5217\u5B9E\u73B0\u9AD8\u5E76\u53D1\u4E0B\u5355\u4E1A\u52A1" aria-hidden="true">#</a> SpringBoot \u5F15\u5165\u7EBF\u7A0B\u6C60+Queue\u7F13\u51B2\u961F\u5217\u5B9E\u73B0\u9AD8\u5E76\u53D1\u4E0B\u5355\u4E1A\u52A1</h1><ul><li>1.\u9996\u5148\u662FspringBoot\u7684\u9879\u76EE\u6846\u67B6\u5982\u4E0B\uFF1A</li><li>2.\u4E1A\u52A1\u6D4B\u8BD5\u6D41\u7A0B\u6D89\u53CA\u7684\u7C7B\uFF0C\u5982\u4E0B</li><li>3.\u4F7F\u7528JMeter\u6A21\u62DF\u5E76\u53D1\u4E0B\u5355\u8BF7\u6C42</li><li>4.\u7ED3\u679C</li></ul><hr><p>\u4E3B\u8981\u662F\u81EA\u5DF1\u5728\u9879\u76EE\u4E2D(\u4E2D\u5C0F\u578B\u9879\u76EE) \u6709\u652F\u4ED8\u4E0B\u5355\u4E1A\u52A1(\u53EA\u662F\u529E\u7406VIP\uFF0C\u6CA1\u6709\u6D89\u53CA\u5230\u5546\u54C1\u5E93\u5B58)\uFF0C\u76EE\u524D\u7528\u6237\u91CF\u8FD8\u6CA1\u6709\u4E0A\u6765\uFF0C\u76EE\u524D\u6CA1\u6709\u51FA\u73B0\u95EE\u9898\uFF0C\u4F46\u662F\u60F3\u5230\u5982\u679C\u7528\u6237\u91CF\u53D8\u5927\uFF0C\u4E0B\u5355\u5E76\u53D1\u91CF\u53D8\u5927\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u4E00\u7CFB\u5217\u7684\u95EE\u9898\uFF0C\u8D81\u7740\u7A7A\u95F2\u65F6\u95F4\uFF0C\u505A\u4E86\u8FD9\u4E2Ademo\u6D4B\u8BD5\u76F8\u5173\u95EE\u9898\u3002</p><p>\u53EF\u80FD\u9047\u5230\u7684\u95EE\u9898\u5982\u4E0B\uFF1A</p><ol><li>\u8BA2\u5355\u91CD\u590D</li><li>\u9AD8\u5E76\u53D1\u4E0B\uFF0C\u6027\u80FD\u53D8\u6162</li></ol><p>\u89E3\u51B3\u65B9\u5F0F\uFF1A<code>ThreadPoolExecutor</code>\u7EBF\u7A0B\u6C60 + Queue\u961F\u5217</p><h2 id="_1-\u9996\u5148\u662Fspringboot\u7684\u9879\u76EE\u6846\u67B6\u5982\u4E0B" tabindex="-1"><a class="header-anchor" href="#_1-\u9996\u5148\u662Fspringboot\u7684\u9879\u76EE\u6846\u67B6\u5982\u4E0B" aria-hidden="true">#</a> 1.\u9996\u5148\u662FspringBoot\u7684\u9879\u76EE\u6846\u67B6\u5982\u4E0B\uFF1A</h2><p><img src="http://alist.ciberviler.top/d/ecloud180/images/blogImage/image-20220524225159288.png" alt="image-20220524225159288"></p><h2 id="_2-\u4E1A\u52A1\u6D4B\u8BD5\u6D41\u7A0B\u6D89\u53CA\u7684\u7C7B-\u5982\u4E0B" tabindex="-1"><a class="header-anchor" href="#_2-\u4E1A\u52A1\u6D4B\u8BD5\u6D41\u7A0B\u6D89\u53CA\u7684\u7C7B-\u5982\u4E0B" aria-hidden="true">#</a> 2.\u4E1A\u52A1\u6D4B\u8BD5\u6D41\u7A0B\u6D89\u53CA\u7684\u7C7B\uFF0C\u5982\u4E0B</h2><ul><li>BusinessThread \u7C7B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package com.springboot.demo.Threads;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope(&quot;prototype&quot;)//spring \u591A\u4F8B
public class BusinessThread implements Runnable{

    private String acceptStr;

    public BusinessThread(String acceptStr) {
        this.acceptStr = acceptStr;
    }

    public String getAcceptStr() {
        return acceptStr;
    }

    public void setAcceptStr(String acceptStr) {
        this.acceptStr = acceptStr;
    }

    @Override
    public void run() {
        //\u4E1A\u52A1\u64CD\u4F5C
        System.out.println(&quot;\u591A\u7EBF\u7A0B\u5DF2\u7ECF\u5904\u7406\u8BA2\u5355\u63D2\u5165\u7CFB\u7EDF\uFF0C\u8BA2\u5355\u53F7\uFF1A&quot;+acceptStr);

        //\u7EBF\u7A0B\u963B\u585E
        /*try {
            Thread.sleep(1000);
            System.out.println(&quot;\u591A\u7EBF\u7A0B\u5DF2\u7ECF\u5904\u7406\u8BA2\u5355\u63D2\u5165\u7CFB\u7EDF\uFF0C\u8BA2\u5355\u53F7\uFF1A&quot;+acceptStr);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }*/
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>TestThreadPoolManager \u7C7B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package com.springboot.demo.Threads;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.BeanFactoryAware;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.Queue;
import java.util.concurrent.*;

@Component
public class TestThreadPoolManager implements BeanFactoryAware {

    //\u7528\u4E8E\u4ECEIOC\u91CC\u53D6\u5BF9\u8C61
    private BeanFactory factory; //\u5982\u679C\u5B9E\u73B0Runnable\u7684\u7C7B\u662F\u901A\u8FC7spring\u7684application.xml\u6587\u4EF6\u8FDB\u884C\u6CE8\u5165,\u53EF\u901A\u8FC7 factory.getBean()\u83B7\u53D6\uFF0C\u8FD9\u91CC\u53EA\u662F\u63D0\u4E00\u4E0B

    // \u7EBF\u7A0B\u6C60\u7EF4\u62A4\u7EBF\u7A0B\u7684\u6700\u5C11\u6570\u91CF
    private final static int CORE_POOL_SIZE = 2;
    // \u7EBF\u7A0B\u6C60\u7EF4\u62A4\u7EBF\u7A0B\u7684\u6700\u5927\u6570\u91CF
    private final static int MAX_POOL_SIZE = 10;
    // \u7EBF\u7A0B\u6C60\u7EF4\u62A4\u7EBF\u7A0B\u6240\u5141\u8BB8\u7684\u7A7A\u95F2\u65F6\u95F4
    private final static int KEEP_ALIVE_TIME = 0;
    // \u7EBF\u7A0B\u6C60\u6240\u4F7F\u7528\u7684\u7F13\u51B2\u961F\u5217\u5927\u5C0F
    private final static int WORK_QUEUE_SIZE = 50;

    @Override
    public void setBeanFactory(BeanFactory beanFactory) throws BeansException {
        factory = beanFactory;
    }

    /**
     * \u7528\u4E8E\u50A8\u5B58\u5728\u961F\u5217\u4E2D\u7684\u8BA2\u5355,\u9632\u6B62\u91CD\u590D\u63D0\u4EA4,\u5728\u771F\u5B9E\u573A\u666F\u4E2D\uFF0C\u53EF\u7528redis\u4EE3\u66FF \u9A8C\u8BC1\u91CD\u590D
     */
    Map&lt;String, Object&gt; cacheMap = new ConcurrentHashMap&lt;&gt;();


    /**
     * \u8BA2\u5355\u7684\u7F13\u51B2\u961F\u5217,\u5F53\u7EBF\u7A0B\u6C60\u6EE1\u4E86\uFF0C\u5219\u5C06\u8BA2\u5355\u5B58\u5165\u5230\u6B64\u7F13\u51B2\u961F\u5217
     */
    Queue&lt;Object&gt; msgQueue = new LinkedBlockingQueue&lt;Object&gt;();


    /**
     * \u5F53\u7EBF\u7A0B\u6C60\u7684\u5BB9\u91CF\u6EE1\u4E86\uFF0C\u6267\u884C\u4E0B\u9762\u4EE3\u7801\uFF0C\u5C06\u8BA2\u5355\u5B58\u5165\u5230\u7F13\u51B2\u961F\u5217
     */
    final RejectedExecutionHandler handler = new RejectedExecutionHandler() {
        @Override
        public void rejectedExecution(Runnable r, ThreadPoolExecutor executor) {
            //\u8BA2\u5355\u52A0\u5165\u5230\u7F13\u51B2\u961F\u5217
            msgQueue.offer(((BusinessThread) r).getAcceptStr());
            System.out.println(&quot;\u7CFB\u7EDF\u4EFB\u52A1\u592A\u5FD9\u4E86,\u628A\u6B64\u8BA2\u5355\u4EA4\u7ED9(\u8C03\u5EA6\u7EBF\u7A0B\u6C60)\u9010\u4E00\u5904\u7406\uFF0C\u8BA2\u5355\u53F7\uFF1A&quot; + ((BusinessThread) r).getAcceptStr());
        }
    };


    /**\u521B\u5EFA\u7EBF\u7A0B\u6C60*/
   final ThreadPoolExecutor threadPool = new ThreadPoolExecutor(CORE_POOL_SIZE, MAX_POOL_SIZE, KEEP_ALIVE_TIME, TimeUnit.SECONDS, new ArrayBlockingQueue(WORK_QUEUE_SIZE), this.handler);


    /**\u5C06\u4EFB\u52A1\u52A0\u5165\u8BA2\u5355\u7EBF\u7A0B\u6C60*/
    public void addOrders(String orderId){
        System.out.println(&quot;\u6B64\u8BA2\u5355\u51C6\u5907\u6DFB\u52A0\u5230\u7EBF\u7A0B\u6C60\uFF0C\u8BA2\u5355\u53F7\uFF1A&quot; + orderId);
        //\u9A8C\u8BC1\u5F53\u524D\u8FDB\u5165\u7684\u8BA2\u5355\u662F\u5426\u5DF2\u7ECF\u5B58\u5728
        if (cacheMap.get(orderId) == null) {
            cacheMap.put(orderId, new Object());
            BusinessThread businessThread = new BusinessThread(orderId);
            threadPool.execute(businessThread);
        }
    }

    /**
     * \u7EBF\u7A0B\u6C60\u7684\u5B9A\u65F6\u4EFB\u52A1----&gt; \u79F0\u4E3A(\u8C03\u5EA6\u7EBF\u7A0B\u6C60)\u3002\u6B64\u7EBF\u7A0B\u6C60\u652F\u6301 \u5B9A\u65F6\u4EE5\u53CA\u5468\u671F\u6027\u6267\u884C\u4EFB\u52A1\u7684\u9700\u6C42\u3002
     */
    final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(5);


    /**
     * \u68C0\u67E5(\u8C03\u5EA6\u7EBF\u7A0B\u6C60)\uFF0C\u6BCF\u79D2\u6267\u884C\u4E00\u6B21\uFF0C\u67E5\u770B\u8BA2\u5355\u7684\u7F13\u51B2\u961F\u5217\u662F\u5426\u6709 \u8BA2\u5355\u8BB0\u5F55\uFF0C\u5219\u91CD\u65B0\u52A0\u5165\u5230\u7EBF\u7A0B\u6C60
     */
    final ScheduledFuture scheduledFuture = scheduler.scheduleAtFixedRate(new Runnable() {
        @Override
        public void run() {
            //\u5224\u65AD\u7F13\u51B2\u961F\u5217\u662F\u5426\u5B58\u5728\u8BB0\u5F55
            if(!msgQueue.isEmpty()){
                //\u5F53\u7EBF\u7A0B\u6C60\u7684\u961F\u5217\u5BB9\u91CF\u5C11\u4E8EWORK_QUEUE_SIZE\uFF0C\u5219\u5F00\u59CB\u628A\u7F13\u51B2\u961F\u5217\u7684\u8BA2\u5355 \u52A0\u5165\u5230 \u7EBF\u7A0B\u6C60
                if (threadPool.getQueue().size() &lt; WORK_QUEUE_SIZE) {
                    String orderId = (String) msgQueue.poll();
                    BusinessThread businessThread = new BusinessThread(orderId);
                    threadPool.execute(businessThread);
                    System.out.println(&quot;(\u8C03\u5EA6\u7EBF\u7A0B\u6C60)\u7F13\u51B2\u961F\u5217\u51FA\u73B0\u8BA2\u5355\u4E1A\u52A1\uFF0C\u91CD\u65B0\u6DFB\u52A0\u5230\u7EBF\u7A0B\u6C60\uFF0C\u8BA2\u5355\u53F7\uFF1A&quot;+orderId);
                }
            }
        }
    }, 0, 1, TimeUnit.SECONDS);


    /**\u83B7\u53D6\u6D88\u606F\u7F13\u51B2\u961F\u5217*/
    public Queue&lt;Object&gt; getMsgQueue() {
        return msgQueue;
    }

    /**\u7EC8\u6B62\u8BA2\u5355\u7EBF\u7A0B\u6C60+\u8C03\u5EA6\u7EBF\u7A0B\u6C60*/
    public void shutdown() {
        //true\u8868\u793A\u5982\u679C\u5B9A\u65F6\u4EFB\u52A1\u5728\u6267\u884C\uFF0C\u7ACB\u5373\u4E2D\u6B62\uFF0Cfalse\u5219\u7B49\u5F85\u4EFB\u52A1\u7ED3\u675F\u540E\u518D\u505C\u6B62
        System.out.println(&quot;\u7EC8\u6B62\u8BA2\u5355\u7EBF\u7A0B\u6C60+\u8C03\u5EA6\u7EBF\u7A0B\u6C60\uFF1A&quot;+scheduledFuture.cancel(false));
        scheduler.shutdown();
        threadPool.shutdown();

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>TestController \u7C7B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package com.springboot.demo;

import com.springboot.demo.Threads.TestThreadPoolManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Queue;
import java.util.UUID;

/**
 * Created by Administrator on 2018/5/9.
 */
@RestController
public class TestController {

    @Autowired
    TestThreadPoolManager testThreadPoolManager;

    /**
     * \u6D4B\u8BD5\u6A21\u62DF\u4E0B\u5355\u8BF7\u6C42 \u5165\u53E3
     * @param id
     * @return
     */
    @GetMapping(&quot;/start/{id}&quot;)
    public String start(@PathVariable Long id) {
        //\u6A21\u62DF\u7684\u968F\u673A\u6570
        String orderNo = System.currentTimeMillis() + UUID.randomUUID().toString();

        testThreadPoolManager.addOrders(orderNo);

        return &quot;Test ThreadPoolExecutor start&quot;;
    }

    /**
     * \u505C\u6B62\u670D\u52A1
     * @param id
     * @return
     */
    @GetMapping(&quot;/end/{id}&quot;)
    public String end(@PathVariable Long id) {

        testThreadPoolManager.shutdown();

        Queue q = testThreadPoolManager.getMsgQueue();
        System.out.println(&quot;\u5173\u95ED\u4E86\u7EBF\u7A0B\u670D\u52A1\uFF0C\u8FD8\u6709\u672A\u5904\u7406\u7684\u4FE1\u606F\u6761\u6570\uFF1A&quot; + q.size());
        return &quot;Test ThreadPoolExecutor start&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),c=e("p",null,"\u57FA\u4E8E\u5FAE\u670D\u52A1\u7684\u601D\u60F3\uFF0C\u6784\u5EFA\u5728 B2C \u7535\u5546\u573A\u666F\u4E0B\u7684\u9879\u76EE\u5B9E\u6218\u3002\u6838\u5FC3\u6280\u672F\u6808\uFF0C\u662F Spring Boot + Dubbo \u3002\u672A\u6765\uFF0C\u4F1A\u91CD\u6784\u6210 Spring Cloud Alibaba \u3002",-1),o=n("\u9879\u76EE\u5730\u5740\uFF1A"),m={href:"https://github.com/YunaiV/onemall",target:"_blank",rel:"noopener noreferrer"},b=n("https://github.com/YunaiV/onemall"),p=i('<h2 id="_3-\u4F7F\u7528jmeter\u6A21\u62DF\u5E76\u53D1\u4E0B\u5355\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#_3-\u4F7F\u7528jmeter\u6A21\u62DF\u5E76\u53D1\u4E0B\u5355\u8BF7\u6C42" aria-hidden="true">#</a> 3.\u4F7F\u7528JMeter\u6A21\u62DF\u5E76\u53D1\u4E0B\u5355\u8BF7\u6C42</h2><p>[<img src="http://alist.ciberviler.top/d/ecloud180/images/blogImage/640-16533988082341.png" alt="\u56FE\u7247">]</p><h2 id="_4-\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#_4-\u7ED3\u679C" aria-hidden="true">#</a> 4.\u7ED3\u679C</h2><p>\u6253\u5370\u7684\u65E5\u5FD7\u8BF4\u660E\uFF0C\u5F00\u59CB\u7684\u8BA2\u5355\u76F4\u63A5\u6267\u884C\u63D2\u5165\u5230\u7CFB\u7EDF\uFF0C\u5F53\u7EBF\u7A0B\u6C60\u7684\u5BB9\u91CF\u5DF2\u7ECF\u6EE1\u4E86\uFF0C\u5219\u4F7F\u7528<code>RejectedExecutionHandler</code>\u65B9\u6CD5\u628A\u540E\u9762\u7684\u8BA2\u5355\u6DFB\u52A0\u5230 Queue\u7F13\u51B2\u961F\u5217\uFF0C\u4F7F\u7528<code>ScheduledFuture</code>\u65B9\u6CD5\u5B9A\u65F6(\u6211\u8FD9\u91CC\u662F\u6BCF\u79D2\u4E00\u6B21)\u68C0\u67E5Queue\u961F\u5217\uFF0C\u91CD\u65B0\u628A\u961F\u5217\u91CC\u9762\u7684\u8BA2\u5355\u6DFB\u52A0\u5230\u7EBF\u7A0B\u6C60\uFF0C\u6267\u884C\u540E\u9762\u7684\u63D2\u5165\u4EFB\u52A1\u3002</p><p>\u90E8\u5206\u65E5\u5FD7\u5982\u4E0B</p><p>[<img src="http://alist.ciberviler.top/d/ecloud180/images/blogImage/640-16533988082342.png" alt="\u56FE\u7247">]</p>',6);function g(h,_){const s=l("ExternalLinkIcon");return r(),a("div",null,[t,e("blockquote",null,[c,e("p",null,[o,e("a",m,[b,v(s)])])]),p])}var T=d(u,[["render",g],["__file","SpringBoot\u5F15\u5165\u7EBF\u7A0B\u6C60+Queue\u7F13\u51B2\u961F\u5217\u5B9E\u73B0\u9AD8\u5E76\u53D1\u4E0B\u5355\u4E1A\u52A1.html.vue"]]);export{T as default};
