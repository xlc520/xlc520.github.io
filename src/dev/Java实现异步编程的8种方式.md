---
author: xlc520
title: Java实现异步编程的8种方式
description: 
date: 2023-03-01
category: Java
tag: Java
article: true
timeline: true
icon: java
password: 
---



# Java实现异步编程的8种方式

## 一、🌈前言

> 异步执行对于开发者来说并不陌生，在实际的开发过程中，很多场景多会使用到异步，相比同步执行，异步可以大大缩短请求链路耗时时间，比如：**发送短信、邮件、异步更新等**，这些都是典型的可以通过异步实现的场景。

## 二、异步的八种实现方式

1. 线程Thread
2. Future
3. 异步框架CompletableFuture
4. Spring注解@Async
5. Spring ApplicationEvent事件
6. 消息队列
7. 第三方异步框架，比如Hutool的ThreadUtil
8. Guava异步

## 三、什么是异步？

首先我们先看一个常见的用户下单的场景：

![img](https://static.xlc520.ml/blogImage/c3a784c49bbf4207ae38cf7b738fb813tplv-k3u1fbpfcp-zoom-in-crop-mark4536000.webp)

在同步操作中，我们执行到 **发送短信** 的时候，我们必须等待这个方法彻底执行完才能执行 **赠送积分** 这个操作，如果 **赠送积分** 这个动作执行时间较长，发送短信需要等待，这就是典型的同步场景。

实际上，发送短信和赠送积分没有任何的依赖关系，通过异步，我们可以实现`赠送积分`和`发送短信`这两个操作能够同时进行，比如：

![img](https://static.xlc520.ml/blogImage/416eac77406a42d59711fb7bb4c8d4edtplv-k3u1fbpfcp-zoom-in-crop-mark4536000.webp)

这就是所谓的异步，是不是非常简单，下面就说说异步的几种实现方式吧。

## 四、异步编程

## 4.1 线程异步

```typescript
public class AsyncThread extends Thread {

    @Override
    public void run() {
        System.out.println("Current thread name:" + Thread.currentThread().getName() + " Send email success!");
    }

    public static void main(String[] args) {
        AsyncThread asyncThread = new AsyncThread();
        asyncThread.run();
    }
}
复制代码
```

当然如果每次都创建一个`Thread`线程，频繁的创建、销毁，浪费系统资源，我们可以采用线程池：

```typescript
private ExecutorService executorService = Executors.newCachedThreadPool();

public void fun() {
    executorService.submit(new Runnable() {
        @Override
        public void run() {
            log.info("执行业务逻辑...");
        }
    });
}
复制代码
```

可以将业务逻辑封装到`Runnable`或`Callable`中，交由线程池来执行。

## 4.2 Future异步

```java
@Slf4j
public class FutureManager {

    public String execute() throws Exception {

        ExecutorService executor = Executors.newFixedThreadPool(1);
        Future<String> future = executor.submit(new Callable<String>() {
            @Override
            public String call() throws Exception {

                System.out.println(" --- task start --- ");
                Thread.sleep(3000);
                System.out.println(" --- task finish ---");
                return "this is future execute final result!!!";
            }
        });

        //这里需要返回值时会阻塞主线程
        String result = future.get();
        log.info("Future get result: {}", result);
        return result;
    }

    @SneakyThrows
    public static void main(String[] args) {
        FutureManager manager = new FutureManager();
        manager.execute();
    }
}
复制代码
```

输出结果：

```sql
 --- task start --- 
 --- task finish ---
 Future get result: this is future execute final result!!!
复制代码
```

### 4.2.1 Future的不足之处

Future的不足之处的包括以下几点：

1️⃣ 无法被动接收异步任务的计算结果：虽然我们可以主动将异步任务提交给线程池中的线程来执行，但是待异步任务执行结束之后，主线程无法得到任务完成与否的通知，它需要通过get方法主动获取任务执行的结果。
 2️⃣ Future件彼此孤立：有时某一个耗时很长的异步任务执行结束之后，你想利用它返回的结果再做进一步的运算，该运算也会是一个异步任务，两者之间的关系需要程序开发人员手动进行绑定赋予，Future并不能将其形成一个任务流（pipeline），每一个Future都是彼此之间都是孤立的，所以才有了后面的CompletableFuture，CompletableFuture就可以将多个Future串联起来形成任务流。
 3️⃣ Futrue没有很好的错误处理机制：截止目前，如果某个异步任务在执行发的过程中发生了异常，调用者无法被动感知，必须通过捕获get方法的异常才知晓异步任务执行是否出现了错误，从而在做进一步的判断处理。

## 4.3 CompletableFuture实现异步

```csharp
public class CompletableFutureCompose {

    /**
     * thenAccept子任务和父任务公用同一个线程
     */
    @SneakyThrows
    public static void thenRunAsync() {
        CompletableFuture<Integer> cf1 = CompletableFuture.supplyAsync(() -> {
            System.out.println(Thread.currentThread() + " cf1 do something....");
            return 1;
        });
        CompletableFuture<Void> cf2 = cf1.thenRunAsync(() -> {
            System.out.println(Thread.currentThread() + " cf2 do something...");
        });
        //等待任务1执行完成
        System.out.println("cf1结果->" + cf1.get());
        //等待任务2执行完成
        System.out.println("cf2结果->" + cf2.get());
    }

    public static void main(String[] args) {
        thenRunAsync();
    }
}
复制代码
```

我们不需要显式使用ExecutorService，CompletableFuture 内部使用了`ForkJoinPool`来处理异步任务，如果在某些业务场景我们想自定义自己的异步线程池也是可以的。

## 4.4 Spring的@Async异步

### 4.4.1 自定义异步线程池

```java
/**
 * 线程池参数配置，多个线程池实现线程池隔离，@Async注解，默认使用系统自定义线程池，可在项目中设置多个线程池，在异步调用的时候，指明需要调用的线程池名称，比如：@Async("taskName")
 *
 * @author: jacklin
 * @since: 2021/5/18 11:44
 **/
@EnableAsync
@Configuration
public class TaskPoolConfig {

    /**
     * 自定义线程池
     *
     * @author: jacklin
     * @since: 2021/11/16 17:41
     **/
    @Bean("taskExecutor")
    public Executor taskExecutor() {
        //返回可用处理器的Java虚拟机的数量 12
        int i = Runtime.getRuntime().availableProcessors();
        System.out.println("系统最大线程数  ： " + i);
        ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
        //核心线程池大小
        executor.setCorePoolSize(16);
        //最大线程数
        executor.setMaxPoolSize(20);
        //配置队列容量，默认值为Integer.MAX_VALUE
        executor.setQueueCapacity(99999);
        //活跃时间
        executor.setKeepAliveSeconds(60);
        //线程名字前缀
        executor.setThreadNamePrefix("asyncServiceExecutor -");
        //设置此执行程序应该在关闭时阻止的最大秒数，以便在容器的其余部分继续关闭之前等待剩余的任务完成他们的执行
        executor.setAwaitTerminationSeconds(60);
        //等待所有的任务结束后再关闭线程池
        executor.setWaitForTasksToCompleteOnShutdown(true);
        return executor;
    }
}
复制代码
```

### 4.4.2 AsyncService

```typescript
public interface AsyncService {

    MessageResult sendSms(String callPrefix, String mobile, String actionType, String content);

    MessageResult sendEmail(String email, String subject, String content);
}

@Slf4j
@Service
public class AsyncServiceImpl implements AsyncService {

    @Autowired
    private IMessageHandler mesageHandler;

    @Override
    @Async("taskExecutor")
    public MessageResult sendSms(String callPrefix, String mobile, String actionType, String content) {
        try {

            Thread.sleep(1000);
            mesageHandler.sendSms(callPrefix, mobile, actionType, content);

        } catch (Exception e) {
            log.error("发送短信异常 -> ", e)
        }
    }
    
    
    @Override
    @Async("taskExecutor")
    public sendEmail(String email, String subject, String content) {
        try {

            Thread.sleep(1000);
            mesageHandler.sendsendEmail(email, subject, content);

        } catch (Exception e) {
            log.error("发送email异常 -> ", e)
        }
    }
}

复制代码
```

在实际项目中， 使用`@Async`调用线程池，推荐等方式是是使用自定义线程池的模式，不推荐直接使用@Async直接实现异步，具体说明可以参考博主之前发表的文章[为什么都不建议直接使用@Async注解实现异步?](https://juejin.cn/post/7099328896142671903)。

## 4.5 Spring ApplicationEvent事件实现异步

### 4.5.1 定义事件

```scala
public class AsyncSendEmailEvent extends ApplicationEvent {

    /**
     * 邮箱
     **/
    private String email;

   /**
     * 主题
     **/
    private String subject;

    /**
     * 内容
     **/
    private String content;
  
    /**
     * 接收者
     **/
    private String targetUserId;

}
复制代码
```

### 4.5.2 定义事件处理器

```less
@Slf4j
@Component
public class AsyncSendEmailEventHandler implements ApplicationListener<AsyncSendEmailEvent> {

    @Autowired
    private IMessageHandler mesageHandler;
    
    @Async("taskExecutor")
    @Override
    public void onApplicationEvent(AsyncSendEmailEvent event) {
        if (event == null) {
            return;
        }

        String email = event.getEmail();
        String subject = event.getSubject();
        String content = event.getContent();
        String targetUserId = event.getTargetUserId();
        mesageHandler.sendsendEmailSms(email, subject, content, targerUserId);
      }
}
复制代码
```

另外，可能有些时候采用ApplicationEvent实现异步的使用，当程序出现异常错误的时候，需要考虑补偿机制，那么这时候可以结合Spring Retry重试来帮助我们避免这种异常造成数据不一致问题。

## 4.6 消息队列

### 4.6.1 回调事件消息生产者

```less
@Slf4j
@Component
public class CallbackProducer {

    @Autowired
    AmqpTemplate amqpTemplate;

    public void sendCallbackMessage(CallbackDTO allbackDTO, final long delayTimes) {

        log.info("生产者发送消息，callbackDTO，{}", callbackDTO);

        amqpTemplate.convertAndSend(CallbackQueueEnum.QUEUE_GENSEE_CALLBACK.getExchange(), CallbackQueueEnum.QUEUE_GENSEE_CALLBACK.getRoutingKey(), JsonMapper.getInstance().toJson(genseeCallbackDTO), new MessagePostProcessor() {
            @Override
            public Message postProcessMessage(Message message) throws AmqpException {
                //给消息设置延迟毫秒值，通过给消息设置x-delay头来设置消息从交换机发送到队列的延迟时间
                message.getMessageProperties().setHeader("x-delay", delayTimes);
                message.getMessageProperties().setCorrelationId(callbackDTO.getSdkId());
                return message;
            }
        });
    }
}
复制代码
```

### 4.6.2 回调事件消息消费者

```less
@Slf4j
@Component
@RabbitListener(queues = "message.callback", containerFactory = "rabbitListenerContainerFactory")
public class CallbackConsumer {

    @Autowired
    private IGlobalUserService globalUserService;

    @RabbitHandler
    public void handle(String json, Channel channel, @Headers Map<String, Object> map) throws Exception {

        if (map.get("error") != null) {
            //否认消息
            channel.basicNack((Long) map.get(AmqpHeaders.DELIVERY_TAG), false, true);
            return;
        }

        try {
        
            CallbackDTO callbackDTO = JsonMapper.getInstance().fromJson(json, CallbackDTO.class);
            //执行业务逻辑
            globalUserService.execute(callbackDTO);
            //消息消息成功手动确认，对应消息确认模式acknowledge-mode: manual
            channel.basicAck((Long) map.get(AmqpHeaders.DELIVERY_TAG), false);

        } catch (Exception e) {
            log.error("回调失败 -> {}", e);
        }
    }
}
复制代码
```

## 4.7 ThreadUtil异步工具类

```ini
@Slf4j
public class ThreadUtils {

    public static void main(String[] args) {
        for (int i = 0; i < 3; i++) {
            ThreadUtil.execAsync(() -> {
                ThreadLocalRandom threadLocalRandom = ThreadLocalRandom.current();
                int number = threadLocalRandom.nextInt(20) + 1;
                System.out.println(number);
            });
            log.info("当前第：" + i + "个线程");
        }

        log.info("task finish!");
    }
}
复制代码
```

## 4.8 Guava异步

`Guava`的`ListenableFuture`顾名思义就是可以监听的`Future`，是对java原生Future的扩展增强。我们知道Future表示一个异步计算任务，当任务完成时可以得到计算结果。如果我们希望一旦计算完成就拿到结果展示给用户或者做另外的计算，就必须使用另一个线程不断的查询计算状态。这样做，代码复杂，而且效率低下。使用**Guava ListenableFuture**可以帮我们检测Future是否完成了，不需要再通过get()方法苦苦等待异步的计算结果，如果完成就自动调用回调函数，这样可以减少并发程序的复杂度。

`ListenableFuture`是一个接口，它从`jdk`的`Future`接口继承，添加了`void addListener(Runnable listener, Executor executor)`方法。

我们看下如何使用ListenableFuture。首先需要定义ListenableFuture的实例:

```java
 ListeningExecutorService executorService = MoreExecutors.listeningDecorator(Executors.newCachedThreadPool());
        final ListenableFuture<Integer> listenableFuture = executorService.submit(new Callable<Integer>() {
            @Override
            public Integer call() throws Exception {
                log.info("callable execute...")
                TimeUnit.SECONDS.sleep(1);
                return 1;
            }
        });
复制代码
```

首先通过`MoreExecutors`类的静态方法`listeningDecorator`方法初始化一个`ListeningExecutorService`的方法，然后使用此实例的`submit`方法即可初始化`ListenableFuture`对象。

`ListenableFuture`要做的工作，在Callable接口的实现类中定义，这里只是休眠了1秒钟然后返回一个数字1，有了ListenableFuture实例，可以执行此Future并执行Future完成之后的回调函数。

```typescript
 Futures.addCallback(listenableFuture, new FutureCallback<Integer>() {
    @Override
    public void onSuccess(Integer result) {
        //成功执行...
        System.out.println("Get listenable future's result with callback " + result);
    }

    @Override
    public void onFailure(Throwable t) {
        //异常情况处理...
        t.printStackTrace();
    }
});
复制代码
```

以上就是实现异步的8种方式