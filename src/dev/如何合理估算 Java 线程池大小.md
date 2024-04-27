---
author: xlc520
title: 如何合理估算 Java 线程池大小
excerpt: 
description: 
date: 2023-11-12
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# 如何合理估算 Java 线程池大小

Java 中的线程创建会产生显着的成本。创建线程会消耗时间，增加请求处理的延迟，并且涉及 JVM 和操作系统的大量工作。为了减轻这些开销，线程池发挥了作用。

在本文中，我们将**深入研究确定理想线程池大小的艺术**
。经过微调的线程池可以从系统中提取最佳性能，并帮助我们轻松应对峰值工作负载。然而，重要的是要记住，即使使用线程池，线程的管理本身也可能成为瓶颈。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1699785128184-0.png)

## 1 使用线程池的原因

- **性能：** 线程的创建和销毁可能会很昂贵，尤其是在 Java 中。线程池通过创建可重复用于多个任务的线程来帮助减少这种开销。
- **可扩展性：** 线程池可以扩展以满足应用程序的需求。例如，在重负载下，可以扩展线程池来处理额外的任务。
- **资源管理：** 线程池可以帮助管理线程使用的资源。例如，线程池可以限制在任何给定时间可以活动的线程数量，这有助于防止应用程序耗尽内存。

## 2 调整线程池的大小：了解系统和资源限制

在调整线程池大小时，了解系统的限制（包括硬件和外部依赖性）至关重要。让我们通过一个例子来详细说明这个概念：

### 场景

假设我们正在开发一个处理传入 HTTP 请求的 Web 应用程序。每个请求可能涉及处理数据库中的数据以及调用外部第三方服务。我们的目标是确定有效处理这些请求的最佳线程池大小。

### 需要考虑的因素

**数据库连接池：**假设我们使用 HikariCP 等连接池来管理数据库连接。我们已将其配置为允许最多 100
个连接。如果我们创建的线程多于可用连接，这些额外的线程最终将等待可用连接，从而导致资源争用和潜在的性能问题。

以下是配置 HikariCP 数据库连接池的示例：

```java
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

public class DatabaseConnectionExample {
    public static void main(String[] args) {
        HikariConfig config = new HikariConfig();
        config.setJdbcUrl("jdbc:mysql://localhost:3306/mydb");
        config.setUsername("username");
        config.setPassword("password");
        config.setMaximumPoolSize(100); // Set the maximum number of connections

        HikariDataSource dataSource = new HikariDataSource(config);

        // Use the dataSource to get database connections and perform queries.
    }
}
```

**外部服务吞吐量：** 我们的应用程序与之交互的外部服务有限制。它只能同时处理几个请求，比如一次 10
个请求。同时发送更多请求可能会使服务不堪重负，并导致性能下降或错误。

**CPU 核心：** 确定服务器上可用的 CPU 核心数量对于优化线程池大小至关重要。

```java
int numOfCores = Runtime.getRuntime().availableProcessors();
```

每个核心可以同时执行一个线程。超过线程的 CPU 核心数量可能会导致过多的上下文切换，从而降低性能。搜索 Java 知音公众号，回复“Java
题库”，送你一份 Java 面试宝典

# 3CPU 密集型任务和 I/O 密集型任务

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1699785128184-1.png)

CPU 密集型任务是那些需要大量处理能力的任务，例如执行复杂的计算或运行模拟。这些任务通常受到 CPU 速度的限制，而不是 I/O
设备的速度。

- 对音频或视频文件进行编码或解码
- 编译和链接软件
- 运行复杂的模拟
- 执行机器学习或数据挖掘任务
- 玩电子游戏

### 优化

**多线程和并行性：** 并行处理是一种将较大的任务划分为较小的子任务并将这些子任务分布在多个 CPU 核心或处理器上的技术，以利用并发执行并提高整体性能

假设我们有一个很大的数字数组，并且我们想要使用多个线程同时计算每个数字的平方，从而利用并行处理。

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;

public class ParallelSquareCalculator {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int numThreads = Runtime.getRuntime().availableProcessors(); // Get the number of CPU cores
        ExecutorService executorService = Executors.newFixedThreadPool(numThreads);

        for (int number : numbers) {
            executorService.submit(() -> {
                int square = calculateSquare(number);
                System.out.println("Square of " + number + " is " + square);
            });
        }

        executorService.shutdown();
        try {
            executorService.awaitTermination(Long.MAX_VALUE, TimeUnit.NANOSECONDS);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }

    private static int calculateSquare(int number) {
        // Simulate a time-consuming calculation (e.g., database query, complex computation)
        try {
            Thread.sleep(1000); // Simulate a 1-second delay
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }

        return number * number;
    }
}
```

IO 密集型任务是那些与存储设备交互的设备（例如，读/写文件）、网络套接字（例如，进行 API 调用），或用户输入（例如，图形用户界面中的用户交互）。

- 将大文件读取或写入磁盘（例如，保存视频文件、加载数据库）
- 通过网络下载或上传文件（例如，浏览网页、观看流媒体视频）
- 发送和接收电子邮件
- 运行网络服务器或其他网络服务
- 执行数据库查询
- 处理传入请求的 Web 服务器。

### 优化

- **缓存：** 将频繁访问的数据缓存在内存中，以减少重复 I/O 操作的需要。
- **负载平衡：** 将 I/O 密集型任务分配到多个线程或进程，以有效处理并发 I/O 操作。
- **SSD 的使用：** 与传统硬盘驱动器 (HDD) 相比，固态驱动器 (SSD) 可以显着加快 I/O 操作速度。
- **使用高效的数据结构**（例如哈希表和 B 树）来减少所需的 I/O 操作数量。
- **避免不必要的文件操作**，例如多次打开和关闭文件。

> 确定线程数

## 4 对于 CPU 密集型任务

对于 CPU 密集型任务，我们希望最大限度地提高 CPU 利用率，但又不会因为过多的线程而压垮系统，否则会导致过多的上下文切换。一个常见的经验法则是使用可用的
CPU 核心数量

### 现实生活中的例子：视频编码

想象一下我们有一个可用的多核 CPU，此时正在开发一个视频处理应用程序。视频编码是一项 CPU
密集型任务，我们需要应用复杂的算法来压缩视频文件。搜索 Java 知音公众号，回复“Java 题库”，送你一份 Java 面试宝典

### 确定 CPU 密集型任务的线程数

计算可用 CPU 核心数：在 Java 中用于`Runtime.getRuntime().availableProcessors()`确定可用 CPU 核心的数量。假设我们有 8 个核心。

**创建线程池：** 创建大小接近或略小于可用 CPU 核心数的线程池。在这种情况下，我们可以选择 6 或 7 个线程，为其他任务和系统进程留下一些
CPU 容量。

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class VideoEncodingApp {
    public static void main(String[] args) {
        int availableCores = Runtime.getRuntime().availableProcessors();
        int numberOfThreads = Math.max(availableCores - 1, 1); // Adjust as needed

        ExecutorService threadPool = Executors.newFixedThreadPool(numberOfThreads);

        // Submit video encoding tasks to the thread pool.
        for (int i = 0; i < 10; i++) {
            threadPool.execute(() -> {
                encodeVideo(); // Simulated video encoding task
            });
        }

        threadPool.shutdown();
    }

    private static void encodeVideo() {
        // Simulate video encoding (CPU-bound) task.
        // Complex calculations and compression algorithms here.
    }
}
```

## 5 对于 I/O 密集型任务

对于 I/O 密集型任务，最佳线程数通常由 I/O 操作的性质和预期延迟决定。我们希望有足够的线程来保持 I/O 设备繁忙而不会使它们过载。
**理想的数量不一定等于 CPU 核心的数量。**

### 现实生活中的例子：网页抓取

考虑构建一个网页爬虫来下载网页并提取信息。这涉及到发出 HTTP 请求，由于网络延迟，这些请求是 I/O 密集型任务。

### 确定 I/O 密集型任务的线程数

**分析 I/O 延迟：** 估计预期的 I/O 延迟，这取决于网络或存储。例如，如果每个 HTTP 请求大约需要 500 毫秒才能完成，我们可能需要适应
I/O 操作中的一些重叠。

**创建线程池：** 创建一个大小能够平衡并行性与预期 I/O 延迟的线程池。每个任务不一定需要一个线程；相反，我们可以使用较小的池来有效管理
I/O 密集型任务。

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class WebPageCrawler {
    public static void main(String[] args) {
        int expectedIOLatency = 500; // Estimated I/O latency in milliseconds
        int numberOfThreads = 4; // Adjust based on your expected latency and system capabilities

        ExecutorService threadPool = Executors.newFixedThreadPool(numberOfThreads);

        // List of URLs to crawl.
        String[] urlsToCrawl = {
            "https://example.com",
            "https://google.com",
            "https://github.com",
            // Add more URLs here
        };

        for (String url : urlsToCrawl) {
            threadPool.execute(() -> {
                crawlWebPage(url, expectedIOLatency);
            });
        }

        threadPool.shutdown();
    }

    private static void crawlWebPage(String url, int expectedIOLatency) {
        // Simulate web page crawling (I/O-bound) task.
        // Perform HTTP request and process the page content.
        try {
            Thread.sleep(expectedIOLatency); // Simulating I/O latency
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
```

## 6 我们可以遵循具体的公式吗？

确定线程池大小的公式可以写成如下：

> 线程数 = 可用核心数 *目标 CPU 利用率* (1 + 等待时间 / 服务时间)

**可用核心数：** 这是我们的应用程序可用的 CPU 核心数。需要注意的是，这与 CPU 的数量不同，因为每个 CPU 可能有多个核心。

**目标 CPU 利用率：** 这是我们希望应用程序使用的 CPU 时间的百分比。如果我们将目标 CPU
利用率设置得太高，我们的应用程序可能会变得无响应。如果设置得太低，我们的应用程序将无法充分利用可用的 CPU 资源。

**等待时间：** 这是线程等待 I/O 操作完成所花费的时间。这可能包括等待网络响应、数据库查询或文件操作。

**服务时间：** 这是线程执行计算所花费的时间量。

**阻塞系数：** 这是等待时间与服务时间的比率。它衡量线程等待 I/O 操作完成所花费的时间相对于执行计算所花费的时间。

## 7 用法示例

假设我们有一台具有 4 个 CPU 核心的服务器，并且我们希望应用程序使用 50% 的可用 CPU 资源。

我们的应用程序有两类任务：**I/O 密集型任务**和 **CPU 密集型任务**。

I/O 密集型任务的阻塞系数为 0.5，这意味着它们花费 50% 的时间等待 I/O 操作完成。

> 线程数 = 4 核 *0.5* (1 + 0.5) = 3 线程

CPU 密集型任务的阻塞系数为 0.1，这意味着它们花费 10% 的时间等待 I/O 操作完成。

> 线程数 = 4 核 *0.5* (1 + 0.1) = 2.2 线程

在此示例中，我们将创建两个线程池，一个用于 I/O 密集型任务，另一个用于 CPU 密集型任务。I/O 密集型线程池将有 3 个线程，CPU
密集型线程池将有 2 个线程。

这是根据大量的案例总结的 Java 线程池大小确定的公式，但在实操中所考虑的侧重点可能有不同，那么需要根据实际场景来微调，本文提供一种确定最优的思路，希望对你开发中确定线程池大小有所帮助！
