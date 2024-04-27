---
author: xlc520
title: SpringBootBean的异步初始化
excerpt: 
description: SpringBootBean的异步初始化
date: 2023-07-06
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# SpringBootBean 的异步初始化

AsyncTaskExecutionListener：

```java
public class AsyncTaskExecutionListener implements PriorityOrdered,
                                       ApplicationListener<ContextRefreshedEvent>,
                                       ApplicationContextAware {
    private ApplicationContext applicationContext;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        if (applicationContext.equals(event.getApplicationContext())) {
            AsyncTaskExecutor.ensureAsyncTasksFinish();
        }
    }

    @Override
    public int getOrder() {
        return Ordered.HIGHEST_PRECEDENCE + 1;
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;
    }
}
```

AsyncTaskExecutor：

```java
@Slf4j
public class AsyncTaskExecutor {
    protected static final int CPU_COUNT = Runtime.getRuntime().availableProcessors();
    protected static final AtomicReference<ThreadPoolExecutor> THREAD_POOL_REF = new AtomicReference<ThreadPoolExecutor>();

    protected static final List<Future> FUTURES = new ArrayList<>();

    public static Future submitTask(Runnable runnable) {
        if (THREAD_POOL_REF.get() == null) {
            ThreadPoolExecutor threadPoolExecutor = createThreadPoolExecutor();
            boolean success = THREAD_POOL_REF.compareAndSet(null, threadPoolExecutor);
            if (!success) {
                threadPoolExecutor.shutdown();
            }
        }
        Future future = THREAD_POOL_REF.get().submit(runnable);
        FUTURES.add(future);
        return future;
    }

    private static ThreadPoolExecutor createThreadPoolExecutor() {
        int threadPoolCoreSize = CPU_COUNT + 1;
        int threadPoolMaxSize = CPU_COUNT + 1;
        log.info(String.format(
                "create why-async-init-bean thread pool, corePoolSize: %d, maxPoolSize: %d.",
                threadPoolCoreSize, threadPoolMaxSize));
        return new ThreadPoolExecutor(threadPoolCoreSize, threadPoolMaxSize, 30,
                TimeUnit.SECONDS, new LinkedBlockingQueue<>(), new ThreadPoolExecutor.CallerRunsPolicy());
    }

    public static void ensureAsyncTasksFinish() {
        for (Future future : FUTURES) {
            try {
                future.get();
            } catch (Throwable e) {
                throw new RuntimeException(e);
            }
        }

        FUTURES.clear();
        if (THREAD_POOL_REF.get() != null) {
            THREAD_POOL_REF.get().shutdown();
            THREAD_POOL_REF.set(null);
        }
    }
}
```

把这两个类,一共 68 行代码，粘到你的项目中，然后把

AsyncTaskExecutionListener 以 @Bean 的方式注入：

```java
@Bean
public AsyncTaskExecutionListener asyncTaskExecutionListener() {
    return new AsyncTaskExecutionListener();
}
```
