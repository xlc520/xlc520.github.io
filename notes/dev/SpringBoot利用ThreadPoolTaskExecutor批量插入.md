---
author: xlc520
title: SpringBoot利用ThreadPoolTaskExecutor批量插入
description: 
date: 2022-11-07
category: Java
tag: 
- Java
- SpringBoot
article: true
timeline: true
icon: java
password: 
---



# SpringBoot利用ThreadPoolTaskExecutor批量插入

## **前言**

**开发目的：**

提高百万级数据插入效率。

**采取方案：**

利用`ThreadPoolTaskExecutor`多线程批量插入。

**采用技术：**

- springboot2.1.1
- mybatisPlus3.0.6
- swagger2.5.0
- Lombok1.18.4
- postgresql
- ThreadPoolTaskExecutor

## **具体实现细节**

`application-dev.properties`添加线程池配置信息

```properties
# 异步线程配置
# 配置核心线程数
async.executor.thread.core_pool_size = 30
# 配置最大线程数
async.executor.thread.max_pool_size = 30
# 配置队列大小
async.executor.thread.queue_capacity = 99988
# 配置线程池中的线程的名称前缀
async.executor.thread.name.prefix = async-importDB-
```

spring容器注入线程池bean对象

```java
@Configuration
@EnableAsync
@Slf4j
public class ExecutorConfig {
    @Value("${async.executor.thread.core_pool_size}")
    private int corePoolSize;
    @Value("${async.executor.thread.max_pool_size}")
    private int maxPoolSize;
    @Value("${async.executor.thread.queue_capacity}")
    private int queueCapacity;
    @Value("${async.executor.thread.name.prefix}")
    private String namePrefix;
 
    @Bean(name = "asyncServiceExecutor")
    public Executor asyncServiceExecutor() {
        log.warn("start asyncServiceExecutor");
        //在这里修改
        ThreadPoolTaskExecutor executor = new VisiableThreadPoolTaskExecutor();
        //配置核心线程数
        executor.setCorePoolSize(corePoolSize);
        //配置最大线程数
        executor.setMaxPoolSize(maxPoolSize);
        //配置队列大小
        executor.setQueueCapacity(queueCapacity);
        //配置线程池中的线程的名称前缀
        executor.setThreadNamePrefix(namePrefix);
        // rejection-policy：当pool已经达到max size的时候，如何处理新任务
        // CALLER_RUNS：不在新线程中执行任务，而是有调用者所在的线程来执行
        executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
        //执行初始化
        executor.initialize();
        return executor;
    }
}
```

创建异步线程 业务类

```java
@Service
@Slf4j
public class AsyncServiceImpl implements AsyncService {
@Override
    @Async("asyncServiceExecutor")
    public void executeAsync(List<LogOutputResult> logOutputResults, LogOutputResultMapper logOutputResultMapper, CountDownLatch countDownLatch) {
        try{
            log.warn("start executeAsync");
            //异步线程要做的事情
            logOutputResultMapper.addLogOutputResultBatch(logOutputResults);
            log.warn("end executeAsync");
        }finally {
            countDownLatch.countDown();// 很关键, 无论上面程序是否异常必须执行countDown,否则await无法释放
        }
    }
}
```

创建多线程批量插入具体业务方法

```java
@Override
public int testMultiThread() {
    List<LogOutputResult> logOutputResults = getTestData();
    //测试每100条数据插入开一个线程
    List<List<LogOutputResult>> lists = ConvertHandler.splitList(logOutputResults, 100);
    CountDownLatch countDownLatch = new CountDownLatch(lists.size());
    for (List<LogOutputResult> listSub:lists) {
        asyncService.executeAsync(listSub, logOutputResultMapper,countDownLatch);
    }
    try {
        countDownLatch.await(); //保证之前的所有的线程都执行完成，才会走下面的；
        // 这样就可以在下面拿到所有线程执行完的集合结果
    } catch (Exception e) {
        log.error("阻塞异常:"+e.getMessage());
    }
    return logOutputResults.size();
}
```

