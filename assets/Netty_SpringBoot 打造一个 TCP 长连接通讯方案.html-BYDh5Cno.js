import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as s,c as t,d as e,e as d,b as a,a as r}from"./app-BRQZ0-Iq.js";const v={},c=r(`<h1 id="netty-springboot-打造一个-tcp-长连接通讯方案" tabindex="-1"><a class="header-anchor" href="#netty-springboot-打造一个-tcp-长连接通讯方案"><span>Netty+SpringBoot 打造一个 TCP 长连接通讯方案</span></a></h1><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1697803848284-64.jpeg" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><hr><h2 id="项目背景" tabindex="-1"><a class="header-anchor" href="#项目背景"><span>项目背景</span></a></h2><p>最近公司某物联网项目需要使用 socket 长连接进行消息通讯，捣鼓了一版代码上线，结果 BUG 不断，本猿寝食难安，于是求助度娘，数日未眠项目终于平稳运行了，本着开源共享的精神，本猿把项目代码提炼成了一个 demo 项目，尽量摒弃了其中丑陋的业务部分，希望与同学们共同学习进步。</p><h2 id="正文" tabindex="-1"><a class="header-anchor" href="#正文"><span>正文</span></a></h2><h3 id="一、项目架构" tabindex="-1"><a class="header-anchor" href="#一、项目架构"><span>一、项目架构</span></a></h3><p>本项目使用了 netty、redis 以及 springboot2.2.0</p><h3 id="二、项目模块" tabindex="-1"><a class="header-anchor" href="#二、项目模块"><span>二、项目模块</span></a></h3><p>本项目目录结构如下图：</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1697803848284-34.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p><code>netty-tcp-core</code>是公共模块，主要是工具类。<code>netty-tcp-server</code> 是 netty 服务端，服务端仅作测试使用，实际项目中我们只使用了客户端。<code>netty-tcp-client</code>是客户端，也是本文的重点。</p><h3 id="三、业务流程" tabindex="-1"><a class="header-anchor" href="#三、业务流程"><span>三、业务流程</span></a></h3><p>我们实际项目中使用 RocketMQ 作为消息队列，本项目由于是 demo 项目于是改为了<code>BlockingQueue</code>。数据流为：</p><p>生产者-&gt;消息队列-&gt;消费者(客户端)-&gt;tcp 通道-&gt;服务端-&gt;tcp 通道-&gt;客户端。</p><p>当消费者接收到某设备发送的消息后，将判断缓存中是否存在该设备与服务端的连接，如果存在并且通道活跃则使用该通道发送消息，如果不存在则创建通道并在通道激活后立即发送消息，当客户端收到来自服务端的消息时进行响应的业务处理。</p><h3 id="四、代码详解" tabindex="-1"><a class="header-anchor" href="#四、代码详解"><span>四、代码详解</span></a></h3><h4 id="_1-消息队列" tabindex="-1"><a class="header-anchor" href="#_1-消息队列"><span>1.消息队列</span></a></h4><p>由于本 demo 项目移除了消息中间件，于是需要自己创建一个本地队列模拟真实使用场景</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>package org.example.client;

import org.example.client.model.NettyMsgModel;

import java.util.concurrent.ArrayBlockingQueue;

/**
 * 本项目为演示使用本地队列 实际生产中应该使用消息中间件代替（rocketmq或rabbitmq）
 *
 * @author ReWind00
 * @date 2023/2/15 11:20
 */
public class QueueHolder {

    private static final ArrayBlockingQueue&lt;NettyMsgModel&gt; queue = new ArrayBlockingQueue&lt;&gt;(100);

    public static ArrayBlockingQueue&lt;NettyMsgModel&gt; get() {
        return queue;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用一个类保存队列的静态实例以便在任何类中都可以快速引用。接下来我们需要启动一个线程去监听队列中的消息，一但消息投递到队列中，我们就取出消息然后异步多线程处理该消息。</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>public class LoopThread implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i &lt; MAIN_THREAD_POOL_SIZE; i++) {
            executor.execute(() -&gt; {
                while (true) {
                    //取走BlockingQueue里排在首位的对象,若BlockingQueue为空,阻断进入等待状态直到
                    try {
                        NettyMsgModel nettyMsgModel = QueueHolder.get().take();
                        messageProcessor.process(nettyMsgModel);
                    } catch (InterruptedException e) {
                        log.error(e.getMessage(), e);
                    }
                }
            });
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 take 方法会使该线程一直阻塞直到队列收到消息后进入下一次循环。</p><h4 id="_2-执行类" tabindex="-1"><a class="header-anchor" href="#_2-执行类"><span>2.执行类</span></a></h4><p>process 方法来自于<code>MessageProcessor</code>类，该类为单例，但是会有多线程同时执行。</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>public void process(NettyMsgModel nettyMsgModel) {
    String imei = nettyMsgModel.getImei();
    try {
        synchronized (this) { //为避免收到同一台设备多条消息后重复创建客户端，必须加锁
            if (redisCache.hasKey(NETTY_QUEUE_LOCK + imei)) { //上一条消息处理中
                log.info(&quot;imei={}消息处理中，重新入列&quot;, imei);
                //放回队列重新等待消费 延迟x秒（实际项目中应该使用rocketmq或者rabbitmq实现延迟消费）
                new Timer().schedule(new TimerTask() {
                    @Override
                    public void run() {
                        QueueHolder.get().offer(nettyMsgModel);
                    }
                }, 2000);
                log.info(&quot;imei={}消息处理中，重新入列完成&quot;, imei);
                return;
            } else {
                //如果没有在连接中的直接加锁
                redisCache.setCacheObject(NETTY_QUEUE_LOCK + imei, &quot;1&quot;, 120, TimeUnit.SECONDS);
            }
        }
        //缓存中存在则发送消息
        if (NettyClientHolder.get().containsKey(imei)) {
            NettyClient nettyClient = NettyClientHolder.get().get(imei);
            if (null != nettyClient.getChannelFuture() &amp;&amp; nettyClient.getChannelFuture().channel().isActive()) { //通道活跃直接发送消息
                if (!nettyClient.getChannelFuture().channel().isWritable()) {
                    log.warn(&quot;警告，通道不可写，imei={}，channelId={}&quot;, nettyClient.getImei(),
                            nettyClient.getChannelFuture().channel().id());
                }
                nettyClient.send(nettyMsgModel.getMsg());
            } else {
                log.info(&quot;client imei={}，通道不活跃，主动关闭&quot;, nettyClient.getImei());
                nettyClient.close();
                //重新创建客户端发送
                this.createClientAndSend(nettyMsgModel);
            }
        } else {  //缓存中不存在则创建新的客户端
            this.createClientAndSend(nettyMsgModel);
        }
    } catch (Exception e) {
        log.error(e.getMessage(), e);
    } finally {
        //执行完后解锁
        redisCache.deleteObject(NETTY_QUEUE_LOCK + imei);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中 imei 是我们设备的唯一标识，我们可以用 imei 作为缓存的 key 来确认是否已创建过连接。由于我们消息的并发量可能会很大，所以存在当某设备的连接正在创建的过程中，另一个线程收到该设备消息也开始创建连接的情况，所以我们使用 synchronized 代码块以及 redis 分布式锁来避免此情况的发生。当一条消息获得锁后，在锁释放前，后续消息将会被重新放回消息队列并延迟消费。</p><p>获取锁的线程会根据 imei 判断缓存是否存在连接，如果存在直接发送消息，如果不存在则进入创建客户端的方法。</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>private void createClientAndSend(NettyMsgModel nettyMsgModel) {
    log.info(&quot;创建客户端执行中imei={}&quot;, nettyMsgModel.getImei());
    //此处的DemoClientHandler可以根据自己的业务定义
    NettyClient nettyClient = SpringUtils.getBean(NettyClient.class, nettyMsgModel.getImei(), nettyMsgModel.getBizData(),
            this.createDefaultWorkGroup(this.workerThread), DemoClientHandler.class);
    executor.execute(nettyClient); //执行客户端初始化
    try {
        //利用锁等待客户端激活
        synchronized (nettyClient) {
            long c1 = System.currentTimeMillis();
            nettyClient.wait(5000); //最多阻塞5秒 5秒后客户端仍然未激活则自动解锁
            long c2 = System.currentTimeMillis();
            log.info(&quot;创建客户端wait耗时={}ms&quot;, c2 - c1);
        }
        if (null != nettyClient.getChannelFuture() &amp;&amp; nettyClient.getChannelFuture().channel().isActive()) { //连接成功
            //存入缓存
            NettyClientHolder.get().put(nettyMsgModel.getImei(), nettyClient);
            //客户端激活后发送消息
            nettyClient.send(nettyMsgModel.getMsg());
        } else { //连接失败
            log.warn(&quot;客户端创建失败，imei={}&quot;, nettyMsgModel.getImei());
            nettyClient.close();
            //可以把消息重新入列处理
        }
    } catch (Exception e) {
        log.error(&quot;客户端初始化发送消息异常===&gt;{}&quot;, e.getMessage(), e);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 netty 客户端实例创建后使用线程池执行初始化，由于是异步执行，我们此时立刻发送消息很可能客户端还没有完成连接，因此必须加锁等待。进入<code>synchronized</code> 代码块，使用 wait 方法等待客户端激活后解锁，参数 5000 为自动解锁的毫秒数，意思是如果客户端出现异常情况迟迟未能连接成功并激活通道、解锁，则最多 5000 毫秒后该锁自动解开。</p><p>这参数在实际使用时可以视情况调整，在并发量很大的情况下，5 秒的阻塞可能会导致线程池耗尽，或内存溢出。待客户端创建成功并激活后则立即发送消息。</p><h4 id="_3-客户端" tabindex="-1"><a class="header-anchor" href="#_3-客户端"><span>3.客户端</span></a></h4><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>package org.example.client;

import io.netty.bootstrap.Bootstrap;
import io.netty.buffer.Unpooled;
import io.netty.channel.*;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioSocketChannel;
import io.netty.handler.codec.DelimiterBasedFrameDecoder;
import io.netty.handler.codec.string.StringDecoder;
import io.netty.handler.codec.string.StringEncoder;
import io.netty.handler.timeout.IdleStateHandler;
import io.netty.util.CharsetUtil;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.example.client.handler.BaseClientHandler;
import org.example.core.util.SpringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * @author ReWind00
 * @date 2023/2/15 9:59
 */
@Slf4j
@Component
@Scope(&quot;prototype&quot;)
@Getter
@NoArgsConstructor
public class NettyClient implements Runnable {

    @Value(&quot;\${netty.server.port}&quot;)
    private int port;

    @Value(&quot;\${netty.server.host}&quot;)
    private String host;
    //客户端唯一标识
    private String imei;
    //自定义业务数据
    private Map&lt;String, Object&gt; bizData;

    private EventLoopGroup workGroup;

    private Class&lt;BaseClientHandler&gt; clientHandlerClass;

    private ChannelFuture channelFuture;

    public NettyClient(String imei, Map&lt;String, Object&gt; bizData, EventLoopGroup workGroup, Class&lt;BaseClientHandler&gt; clientHandlerClass) {
        this.imei = imei;
        this.bizData = bizData;
        this.workGroup = workGroup;
        this.clientHandlerClass = clientHandlerClass;
    }

    @Override
    public void run() {
        try {
            this.init();
            log.info(&quot;客户端启动imei={}&quot;, imei);
        } catch (Exception e) {
            log.error(&quot;客户端启动失败:{}&quot;, e.getMessage(), e);
        }
    }

    public void close() {
        if (null != this.channelFuture) {
            this.channelFuture.channel().close();
        }
        NettyClientHolder.get().remove(this.imei);
    }

    public void send(String message) {
        try {
            if (!this.channelFuture.channel().isActive()) {
                log.info(&quot;通道不活跃imei={}&quot;, this.imei);
                return;
            }
            if (!StringUtils.isEmpty(message)) {
                log.info(&quot;队列消息发送===&gt;{}&quot;, message);
                this.channelFuture.channel().writeAndFlush(message);
            }
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
    }

    private void init() throws Exception {
        //将本实例传递到handler
        BaseClientHandler clientHandler = SpringUtils.getBean(clientHandlerClass, this);
        Bootstrap b = new Bootstrap();
        //2 通过辅助类去构造server/client
        b.group(workGroup)
                .channel(NioSocketChannel.class)
                .option(ChannelOption.CONNECT_TIMEOUT_MILLIS, 3000)
                .option(ChannelOption.SO_RCVBUF, 1024 * 32)
                .option(ChannelOption.SO_SNDBUF, 1024 * 32)
                .handler(new ChannelInitializer&lt;SocketChannel&gt;() {
                    @Override
                    protected void initChannel(SocketChannel ch) throws Exception {
                        ch.pipeline().addLast(new DelimiterBasedFrameDecoder(1024 * 1024, Unpooled.copiedBuffer(&quot;\\r\\n&quot;.getBytes())));
                        ch.pipeline().addLast(new StringEncoder(CharsetUtil.UTF_8));// String解码。
                        ch.pipeline().addLast(new StringDecoder(CharsetUtil.UTF_8));// String解码。
//                        // 心跳设置
                        ch.pipeline().addLast(new IdleStateHandler(0, 0, 600, TimeUnit.SECONDS));
                        ch.pipeline().addLast(clientHandler);
                    }
                });
        this.connect(b);
    }

    private void connect(Bootstrap b) throws InterruptedException {
        long c1 = System.currentTimeMillis();
        final int maxRetries = 2; //重连2次
        final AtomicInteger count = new AtomicInteger();
        final AtomicBoolean flag = new AtomicBoolean(false);
        try {
            this.channelFuture = b.connect(host, port).addListener(
                    new ChannelFutureListener() {
                        public void operationComplete(ChannelFuture future) throws Exception {
                            if (!future.isSuccess()) {
                                if (count.incrementAndGet() &gt; maxRetries) {
                                    log.warn(&quot;imei={}重连超过{}次&quot;, imei, maxRetries);
                                } else {
                                    log.info(&quot;imei={}重连第{}次&quot;, imei, count);
                                    b.connect(host, port).addListener(this);
                                }

                            } else {
                                log.info(&quot;imei={}连接成功,连接IP:{}连接端口:{}&quot;, imei, host, port);
                                flag.set(true);
                            }
                        }
                    }).sync(); //同步连接
        } catch (Exception e) {
            log.error(e.getMessage(), e);
        }
        log.info(&quot;设备imei={}，channelId={}连接耗时={}ms&quot;, imei, channelFuture.channel().id(), System.currentTimeMillis() - c1);
        if (flag.get()) {
            channelFuture.channel().closeFuture().sync(); //连接成功后将持续阻塞该线程
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>netty 客户端为多实例，每个实例绑定一个线程，持续阻塞到客户端关闭为止，每个客户端中可以保存自己的业务数据，以便在后续与服务端交互时处理业务使用。客户端执行连接时，给了 2 次重试的机会，如果 3 次都没连接成功则放弃。后续可以选择将该消息重新入列消费。我们实际项目中，此处还应该预先给服务端发送一条登录消息，待服务端确认后才能执行后续通讯，这需要视实际情况进行调整。</p><p>另一个需要注意的点是<code>EventLoopGroup</code> 是从构造函数传入的，而不是在客户端中创建的，因为当客户端数量非常多时，每个客户端都创建自己的线程组会极大的消耗服务器资源，因此我们在实际使用中是按业务去创建统一的线程组给该业务下的所有客户端共同使用的，线程组的大小需要根据业务需求灵活配置。</p><p>在 init 方法中，我们给客户端加上了一个 handler 来处理与服务端的交互，下面来看一下具体实现。</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>package org.example.client.handler;

import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.timeout.IdleState;
import io.netty.handler.timeout.IdleStateEvent;
import lombok.extern.slf4j.Slf4j;
import org.example.client.NettyClient;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.util.Map;

/**
 * @author ReWind00
 * @date 2023/2/15 10:09
 */
@Slf4j
@Component
@Scope(&quot;prototype&quot;)
public class DemoClientHandler extends BaseClientHandler {

    private final String imei;

    private final Map&lt;String, Object&gt; bizData;

    private final NettyClient nettyClient;

    private int allIdleCounter = 0;

    private static final int MAX_IDLE_TIMES = 3;

    public DemoClientHandler(NettyClient nettyClient) {
        this.nettyClient = nettyClient;
        this.imei = nettyClient.getImei();
        this.bizData = nettyClient.getBizData();
    }

    @Override
    public void channelActive(ChannelHandlerContext ctx) throws Exception {
        log.info(&quot;客户端imei={}，通道激活成功&quot;, this.imei);
        synchronized (this.nettyClient) { //当通道激活后解锁队列线程，然后再发送消息
            this.nettyClient.notify();
        }
    }

    @Override
    public void channelInactive(ChannelHandlerContext ctx) throws Exception {
        log.warn(&quot;客户端imei={}，通道断开连接&quot;, this.imei);
    }

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        log.info(&quot;客户端imei={}，收到消息:  {}&quot;, this.imei, msg);
        //处理业务...
        if (&quot;shutdown&quot;.equals(msg)) {
            this.nettyClient.close();
        }
    }

    @Override
    public void userEventTriggered(ChannelHandlerContext ctx, Object evt) throws Exception {
        if (evt instanceof IdleStateEvent) {
            IdleStateEvent e = (IdleStateEvent) evt;
            boolean flag = false;
            if (e.state() == IdleState.ALL_IDLE) {
                this.allIdleCounter++;
                log.info(&quot;客户端imei={}触发闲读或写第{}次&quot;, this.imei, this.allIdleCounter);
                if (this.allIdleCounter &gt;= MAX_IDLE_TIMES) {
                    flag = true;
                }
            }
            if (flag) {
                log.warn(&quot;读写超时达到{}次，主动断开连接&quot;, MAX_IDLE_TIMES);
                ctx.channel().close();
            }
        }
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        log.error(&quot;客户端imei={}，连接异常{}&quot;, imei, cause.getMessage(), cause);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>DemoClientHandler</code> 也是多实例 bean，每个实例持有自己的 NettyClient 引用，以便在后续处理具体业务。在 channelActive 方法中，我们可以看到执行了客户端实例的 notify 方法，此处就是在客户端创建成功并且通道激活后解除 wait 锁的地方。channelRead 方法就是我们处理服务端发送过来的消息的方法，我们的具体业务应该在该方法执行，当然不建议长时间阻塞客户端的工作线程，可以考虑异步处理。</p><p>最后我们看一下客户端缓存类。</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>package org.example.client;

import java.util.concurrent.ConcurrentHashMap;

/**
 * @author ReWind00
 * @date 2023/2/15 11:01
 */
public class NettyClientHolder {

    private static final ConcurrentHashMap&lt;String, NettyClient&gt; clientMap = new ConcurrentHashMap&lt;&gt;();

    public static ConcurrentHashMap&lt;String, NettyClient&gt; get() {
        return clientMap;
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 netty 的通道无法序列化，因此不能存入 redis，只能缓存在本地内存中，其本质就是一个 ConcurrentHashMap。</p><h3 id="五、测试" tabindex="-1"><a class="header-anchor" href="#五、测试"><span>五、测试</span></a></h3><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>package org.example.client.controller;

import org.example.client.QueueHolder;
import org.example.client.model.NettyMsgModel;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author ReWind00
 * @date 2023/2/15 13:48
 */
@RestController
@RequestMapping(&quot;/demo&quot;)
public class DemoController {

    /**
     * 间隔发送两条消息
     */
    @GetMapping(&quot;testOne&quot;)
    public void testOne() {
        QueueHolder.get().offer(NettyMsgModel.create(&quot;87654321&quot;, &quot;Hello World!&quot;));
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        QueueHolder.get().offer(NettyMsgModel.create(&quot;87654321&quot;, &quot;Hello World Too!&quot;));
    }

    /**
     * 任意发送消息
     *
     * @param imei
     * @param msg
     */
    @GetMapping(&quot;testTwo&quot;)
    public void testTwo(@RequestParam String imei, @RequestParam String msg) {
        QueueHolder.get().offer(NettyMsgModel.create(imei, msg));
    }

    /**
     * 连续发送两条消息 第二条由于redis锁将会重新放回队列延迟消费
     */
    @GetMapping(&quot;testThree&quot;)
    public void testThree() {
        QueueHolder.get().offer(NettyMsgModel.create(&quot;12345678&quot;, &quot;Hello World!&quot;));
        QueueHolder.get().offer(NettyMsgModel.create(&quot;12345678&quot;, &quot;Hello World Too!&quot;));
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试接口代码如上，调用 testOne，日志如下：</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1697803848284-35.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>可以看到第一条消息触发了客户端创建流程，创建后发送了消息，而 5 秒后的第二条消息直接通过已有通道发送了。</p><p>测试接口代码如上，调用 testTwo，日志如下：</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1697803848284-36.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>发送 shutdown 可以主动断开已有连接。</p><p>测试接口代码如上，调用 testThree，日志如下：</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1697803848284-37.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>可以看到第二条消息重新入列并被延迟消费了。</p><h3 id="六、源码" tabindex="-1"><a class="header-anchor" href="#六、源码"><span>六、源码</span></a></h3>`,53),o={href:"https://gitee.com/jaster/netty-tcp-demo",target:"_blank",rel:"noopener noreferrer"},u=e("h2",{id:"后记",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#后记"},[e("span",null,"后记")])],-1),m=e("p",null,"本 demo 项目仅作学习交流使用，如果要应用到生产环境还有些许不足，有问题的同学可以留言交流。",-1);function b(p,g){const i=l("ExternalLinkIcon");return s(),t("div",null,[c,e("p",null,[e("a",o,[d("https://gitee.com/jaster/netty-tcp-demo"),a(i)])]),u,m])}const C=n(v,[["render",b],["__file","Netty_SpringBoot 打造一个 TCP 长连接通讯方案.html.vue"]]),f=JSON.parse('{"path":"/dev/Netty_SpringBoot%20%E6%89%93%E9%80%A0%E4%B8%80%E4%B8%AA%20TCP%20%E9%95%BF%E8%BF%9E%E6%8E%A5%E9%80%9A%E8%AE%AF%E6%96%B9%E6%A1%88.html","title":"Netty+SpringBoot 打造一个 TCP 长连接通讯方案","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"Netty+SpringBoot 打造一个 TCP 长连接通讯方案","excerpt":null,"description":"Netty+SpringBoot 打造一个 TCP 长连接通讯方案 图片图片 项目背景 最近公司某物联网项目需要使用 socket 长连接进行消息通讯，捣鼓了一版代码上线，结果 BUG 不断，本猿寝食难安，于是求助度娘，数日未眠项目终于平稳运行了，本着开源共享的精神，本猿把项目代码提炼成了一个 demo 项目，尽量摒弃了其中丑陋的业务部分，希望与同学们...","date":"2023-10-21T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/Netty_SpringBoot%20%E6%89%93%E9%80%A0%E4%B8%80%E4%B8%AA%20TCP%20%E9%95%BF%E8%BF%9E%E6%8E%A5%E9%80%9A%E8%AE%AF%E6%96%B9%E6%A1%88.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"Netty+SpringBoot 打造一个 TCP 长连接通讯方案"}],["meta",{"property":"og:description","content":"Netty+SpringBoot 打造一个 TCP 长连接通讯方案 图片图片 项目背景 最近公司某物联网项目需要使用 socket 长连接进行消息通讯，捣鼓了一版代码上线，结果 BUG 不断，本猿寝食难安，于是求助度娘，数日未眠项目终于平稳运行了，本着开源共享的精神，本猿把项目代码提炼成了一个 demo 项目，尽量摒弃了其中丑陋的业务部分，希望与同学们..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1697803848284-64.jpeg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2023-10-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Netty+SpringBoot 打造一个 TCP 长连接通讯方案\\",\\"image\\":[\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1697803848284-64.jpeg\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1697803848284-34.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1697803848284-35.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1697803848284-36.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1697803848284-37.png\\"],\\"datePublished\\":\\"2023-10-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"项目背景","slug":"项目背景","link":"#项目背景","children":[]},{"level":2,"title":"正文","slug":"正文","link":"#正文","children":[{"level":3,"title":"一、项目架构","slug":"一、项目架构","link":"#一、项目架构","children":[]},{"level":3,"title":"二、项目模块","slug":"二、项目模块","link":"#二、项目模块","children":[]},{"level":3,"title":"三、业务流程","slug":"三、业务流程","link":"#三、业务流程","children":[]},{"level":3,"title":"四、代码详解","slug":"四、代码详解","link":"#四、代码详解","children":[]},{"level":3,"title":"五、测试","slug":"五、测试","link":"#五、测试","children":[]},{"level":3,"title":"六、源码","slug":"六、源码","link":"#六、源码","children":[]}]},{"level":2,"title":"后记","slug":"后记","link":"#后记","children":[]}],"git":{"createdTime":1699443626000,"updatedTime":1714224756000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":5}]},"readingTime":{"minutes":10.63,"words":3190},"filePathRelative":"dev/Netty+SpringBoot 打造一个 TCP 长连接通讯方案.md","localizedDate":"2023年10月21日","autoDesc":true}');export{C as comp,f as data};
