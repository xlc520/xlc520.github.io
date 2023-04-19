---
author: xlc520
title: SpringBoot - MDC 实现全链路调用日志跟踪
description: 
date: 2023-01-23
category: Java
tag: 
- Java
- SpringBoot 
article: true
timeline: true
icon: java
---



# SpringBoot - MDC 实现全链路调用日志跟踪

### MDC 介绍

##### 简介

MDC（Mapped Diagnostic Context，映射调试上下文）是 log4j 、logback及log4j2 提供的一种方便在多线程条件下记录日志的功能。**MDC** 可以看成是一个与**当前线程绑定的哈希表**，可以往其中添加键值对。MDC 中包含的内容可以**被同一线程中执行的代码所访问**。当前线程的子线程会继承其父线程中的 MDC 的内容。当需要记录日志时，只需要从 MDC 中获取所需的信息即可。MDC 的内容则由程序在适当的时候保存进去。对于一个 Web 应用来说，通常是在请求被处理的最开始保存这些数据。

##### API 说明

- clear() => 移除所有 MDC
- get (String key) => 获取当前线程 MDC 中指定 key 的值
- getContext() => 获取当前线程 MDC 的 MDC
- put(String key, Object o) => 往当前线程的 MDC 中存入指定的键值对
- remove(String key) => 删除当前线程 MDC 中指定的键值对

##### 优点

代码简洁，日志风格统一，不需要在 log 打印中手动拼写 traceId，即

```arduino
LOGGER.info("traceId:{} ", traceId)
复制代码
```

### MDC 使用

**添加拦截器**

```java
    public class LogInterceptor implements HandlerInterceptor {
        @Override
        public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
            //如果有上层调用就用上层的ID
            String traceId = request.getHeader(Constants.TRACE_ID);
            if (traceId == null) {
                traceId = TraceIdUtil.getTraceId();
            }

            MDC.put(Constants.TRACE_ID, traceId);
            return true;
        }

        @Override
        public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView)
                throws Exception {
        }

        @Override
        public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
                throws Exception {
            //调用结束后删除
            MDC.remove(Constants.TRACE_ID);
        }
    }
```

**修改日志格式**

```perl
<property name="pattern">[TRACEID:%X{traceId}] %d{HH:mm:ss.SSS} %-5level %class{-1}.%M()/%L - %msg%xEx%n</property>
```

重点是 %X{traceId}，traceId 和 MDC 中的键名称一致。

简单使用就这么容易，但是在有些情况下 traceId 将获取不到。

### MDC 存在的问题

- 子线程中打印日志丢失 traceId
- HTTP 调用丢失 traceId

......丢失traceId的情况，来一个再解决一个，绝不提前优化

### 解决 MDC 存在的问题

##### 子线程日志打印丢失 traceId

子线程在打印日志的过程中 traceId 将丢失，解决方式为重写线程池。对于直接 new 创建线程的情况不考略，**实际应用中应该避免这种用法**。重写线程池无非是对任务进行一次封装。

线程池封装类：ThreadPoolExecutorMdcWrapper.java

```java
public class ThreadPoolExecutorMdcWrapper extends ThreadPoolExecutor {
    public ThreadPoolExecutorMdcWrapper(int corePoolSize, int maximumPoolSize, long keepAliveTime, TimeUnit unit,
                                        BlockingQueue<Runnable> workQueue) {
        super(corePoolSize, maximumPoolSize, keepAliveTime, unit, workQueue);
    }

    public ThreadPoolExecutorMdcWrapper(int corePoolSize, int maximumPoolSize, long keepAliveTime, TimeUnit unit,
                                        BlockingQueue<Runnable> workQueue, ThreadFactory threadFactory) {
        super(corePoolSize, maximumPoolSize, keepAliveTime, unit, workQueue, threadFactory);
    }

    public ThreadPoolExecutorMdcWrapper(int corePoolSize, int maximumPoolSize, long keepAliveTime, TimeUnit unit,
                                        BlockingQueue<Runnable> workQueue, RejectedExecutionHandler handler) {
        super(corePoolSize, maximumPoolSize, keepAliveTime, unit, workQueue, handler);
    }

    public ThreadPoolExecutorMdcWrapper(int corePoolSize, int maximumPoolSize, long keepAliveTime, TimeUnit unit,
                                        BlockingQueue<Runnable> workQueue, ThreadFactory threadFactory,
                                        RejectedExecutionHandler handler) {
        super(corePoolSize, maximumPoolSize, keepAliveTime, unit, workQueue, threadFactory, handler);
    }

    @Override
    public void execute(Runnable task) {
        super.execute(ThreadMdcUtil.wrap(task, MDC.getCopyOfContextMap()));
    }

    @Override
    public <T> Future<T> submit(Runnable task, T result) {
        return super.submit(ThreadMdcUtil.wrap(task, MDC.getCopyOfContextMap()), result);
    }

    @Override
    public <T> Future<T> submit(Callable<T> task) {
        return super.submit(ThreadMdcUtil.wrap(task, MDC.getCopyOfContextMap()));
    }

    @Override
    public Future<?> submit(Runnable task) {
        return super.submit(ThreadMdcUtil.wrap(task, MDC.getCopyOfContextMap()));
    }
}
```

说明：

- 继承 ThreadPoolExecutor 类，重新执行任务的方法；
- 通过 ThreadMdcUtil 对任务进行一次包装

线程 traceId 封装工具类：ThreadMdcUtil.java

```typescript
public class ThreadMdcUtil {
    public static void setTraceIdIfAbsent() {
        if (MDC.get(Constants.TRACE_ID) == null) {
            MDC.put(Constants.TRACE_ID, TraceIdUtil.getTraceId());
        }
    }

    public static <T> Callable<T> wrap(final Callable<T> callable, final Map<String, String> context) {
        return () -> {
            if (context == null) {
                MDC.clear();
            } else {
                MDC.setContextMap(context);
            }
            setTraceIdIfAbsent();
            try {
                return callable.call();
            } finally {
                MDC.clear();
            }
        };
    }

    public static Runnable wrap(final Runnable runnable, final Map<String, String> context) {
        return () -> {
            if (context == null) {
                MDC.clear();
            } else {
                MDC.setContextMap(context);
            }
            setTraceIdIfAbsent();
            try {
                runnable.run();
            } finally {
                MDC.clear();
            }
        };
    }
}
```

说明（以封装Runnable为例）：

- 判断当前线程对应 MDC 的 Map 是否存在，存在则设置；
- 设置 MDC 中的 traceId 值，不存在则新生成，针对不是子线程的情况，如果是子线程，MDC 中 traceId 不为 null；
- 执行 run 方法。

代码等同于以下写法，会更直观。

```typescript
public static Runnable wrap(final Runnable runnable, final Map<String, String> context) {
    return new Runnable() {
        @Override
        public void run() {
            if (context == null) {
                MDC.clear();
            } else {
                MDC.setContextMap(context);
            }
            setTraceIdIfAbsent();
            try {
                runnable.run();
            } finally {
                MDC.clear();
            }
        }
    };
}
```

重新返回的是包装后的 Runnable，在该任务执行之前 runnable.run() 先将主线程的 Map 设置到当前线程中（即 MDC.setContextMap(context)），这样子线程和主线程 MDC 对应的 Map 就是一样的了。

- 判断当前线程对应 MDC 的 Map 是否存在，存在则设置；
- 设置 MDC 中的 traceId 值，不存在则新生成。针对不是子线程的情况，如果是子线程，MDC 中 traceId 不为 null；
- 执行 run 方法。

##### HTTP 调用丢失 traceId

在使用 HTTP 调用第三方服务接口时 traceId 将丢失，需要对 HTTP 调用工具进行改造。发送时，在 request header 中添加 traceId，在下层被调用方添加拦截器获取 header 中的 traceId 添加到 MDC 中。

HTTP 调用有多种方式，比较常见的有 HttpClient、OKHttp、RestTemplate，所以只给出这几种 HTTP 调用的解决方式。

**HttpClient**

实现 HttpClient 拦截器

```java
public class HttpClientTraceIdInterceptor implements HttpRequestInterceptor {
    @Override
    public void process(HttpRequest httpRequest, HttpContext httpContext) throws HttpException, IOException {
        String traceId = MDC.get(Constants.TRACE_ID);
        //当前线程调用中有traceId，则将该traceId进行透传
        if (traceId != null) {
            //添加请求体
            httpRequest.addHeader(Constants.TRACE_ID, traceId);
        }
    }
}
```

实现 HttpRequestInterceptor 接口并重写 process 方法。

如果调用线程中含有 traceId，则需要将获取到的 traceId 通过 request 中的 header 向下透传下去。

为 HttpClient 添加拦截器

```java
private static CloseableHttpClient httpClient = HttpClientBuilder.create()
            .addInterceptorFirst(new HttpClientTraceIdInterceptor())
            .build();
```

通过 addInterceptorFirst 方法为 HttpClient 添加拦截器。

**OKHttp**

实现 OKHttp 拦截器

```java
public class OkHttpTraceIdInterceptor implements Interceptor {
    @Override
    public Response intercept(Chain chain) throws IOException {
        String traceId = MDC.get(Constants.TRACE_ID);
        Request request = null;
        if (traceId != null) {
            //添加请求体
            request = chain.request().newBuilder().addHeader(Constants.TRACE_ID, traceId).build();
        }
        Response originResponse = chain.proceed(request);

        return originResponse;
    }
}
```

实现 Interceptor 拦截器，重写 interceptor 方法。实现逻辑和 HttpClient 差不多，如果能够获取到当前线程的 traceId 则向下透传。

为 OkHttp 添加拦截器

```java
private static OkHttpClient client = new OkHttpClient.Builder()
          .addNetworkInterceptor(new OkHttpTraceIdInterceptor())
          .build();
```

调用 addNetworkInterceptor 方法添加拦截器。

**RestTemplate**

实现 RestTemplate 拦截器

```java
public class RestTemplateTraceIdInterceptor implements ClientHttpRequestInterceptor {
    @Override
    public ClientHttpResponse intercept(HttpRequest httpRequest, byte[] bytes, ClientHttpRequestExecution clientHttpRequestExecution) throws IOException {
        String traceId = MDC.get(Constants.TRACE_ID);
        if (traceId != null) {
            httpRequest.getHeaders().add(Constants.TRACE_ID, traceId);
        }

        return clientHttpRequestExecution.execute(httpRequest, bytes);
    }
}
```

实现 ClientHttpRequestInterceptor 接口，并重写 intercept 方法，其余逻辑都是一样的，这里不做重复说明。

为 RestTemplate 添加拦截器

```arduino
restTemplate.setInterceptors(Arrays.asList(new RestTemplateTraceIdInterceptor()));
```

调用 setInterceptors 方法添加拦截器。

**第三方服务拦截器**

HTTP 调用第三方服务接口全流程 traceId 需要第三方服务配合，第三方服务需要添加拦截器拿到 request header 中的 traceId 并添加到 MDC 中。

```java
public class LogInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        //如果有上层调用就用上层的ID
        String traceId = request.getHeader(Constants.TRACE_ID);
        if (traceId == null) {
            traceId = TraceIdUtils.getTraceId();
        }

        MDC.put("traceId", traceId);
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView)
            throws Exception {
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex)
            throws Exception {
        MDC.remove(Constants.TRACE_ID);
    }
}
```

说明：

- 先从 request header 中获取t raceId；
- 从 request header 中获取不到 traceId 则说明不是第三方调用，直接生成一个新的 traceId；
- 将生成的 traceId 存入 MDC 中。

除了需要添加拦截器之外，还需要在日志格式中添加 traceId 的打印，如下：

```perl
 <property name="pattern">[TRACEID:%X{traceId}] %d{HH:mm:ss.SSS} %-5level %class{-1}.%M()/%L - %msg%xEx%n</property>
```

需要添加 %X{traceId}。

最后附：[项目代码](https://github.com/TiantianUpup/springboot-log/tree/master/springboot-trace)