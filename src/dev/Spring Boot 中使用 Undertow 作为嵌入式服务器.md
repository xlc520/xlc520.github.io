---
author: xlc520
title: Spring Boot 中使用 Undertow 作为嵌入式服务器
description: 
date: 2023-12-06
category: Java
tag: Java
article: true
timeline: true
icon: java
---



# Spring Boot 中使用 Undertow 作为嵌入式服务器



Spring Boot 默认使用 Tomcat 作为嵌入式 Servlet 服务器，它是由 Apache 软件基金会下 Jakarta 项目开发的 Servlet 容器，被广泛用于部署和运行 Java Web 应用程序。特点是轻量级、易于安装和配置，并且具有良好的可扩展性和性能

本文将会介绍另一款优秀的 Servlet 容器，Undertow。以及如何在 Spring Boot 中用它来替换 Tomcat 作为嵌入式服务器。

## Undertow

Undertow 是一个轻量级的、高性能的 Java Web 服务器，由 JBoss 开发并开源。它是基于非阻塞（non-blocking）的I/O模型，具有低资源消耗和高并发处理能力。

Undertown 的优势如下：

1. **「支持 HTTP/2」**：Undertow 开箱即支持 HTTP/2，无需重写启动类路径。
2. **「支持 HTTP Upgrade」**：允许通过 HTTP 端口复用多种协议。
3. **「支持 Web Socket」**：Undertow 提供对 Web Sockets 的全面支持，包括 JSR-356 支持。
4. **「Servlet 4.0」**：Undertow 支持 Servlet 4.0，包括对嵌入式 Servlet 的支持。还可以在同一部署中混合使用 Servlet 和原生 undertow 非阻塞 handler。
5. **「可嵌入式」**：只需几行代码，即可将 Undertow 嵌入应用程序或独立运行。
6. **「灵活性」**：Undertow 通过链式 handler 进行配置，可以根据需求灵活地添加功能。

在很多场景的测试下， Undertow 的性能都高于 Tomcat。天生适合作为 Spring Boot 应用的嵌入式服务器！

## 在 Spring Boot 中使用

如上所述，Spring Boot 默认使用 Tomcat 作为嵌入式服务。所以 `spring-boot-starter-web` 默认依赖了 `spring-boot-starter-tomcat`。

要使用 Undertow 首先要从  `spring-boot-starter-web` 排除 `spring-boot-starter-tomcat`，再添加 `spring-boot-starter-undertow` 依赖：

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-tomcat</artifactId>
        </exclusion>
    </exclusions>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-undertow</artifactId>
</dependency>
```

仅此即可。启动应用，查看日志：

```
INFO 11908 --- [           main] io.undertow                              : starting server: Undertow - 2.3.8.Final
INFO 11908 --- [           main] org.xnio                                 : XNIO version 3.8.8.Final
INFO 11908 --- [           main] org.xnio.nio                             : XNIO NIO Implementation Version 3.8.8.Final
INFO 11908 --- [           main] org.jboss.threads                        : JBoss Threads version 3.5.0.Final
INFO 11908 --- [           main] o.s.b.w.e.undertow.UndertowWebServer     : Undertow started on port(s) 8080 (http)
```

如你所见，Spring Boot 已经使用 Undertow 作为嵌入式服务器。

## 配置属性

Spring Boot 预置了很多属性，可用于在 `applicaton.properties | yaml` 中对 Undertow 服务器进行个性化配置。

它们都以 `server.undertow.*` 开头，总结如下：

| 配置项                                     | 说明                                                         | 示例          |
| :----------------------------------------- | :----------------------------------------------------------- | :------------ |
| `server.undertow.accesslog.dir`            | Undertow 访问日志目录。                                      |               |
| `server.undertow.accesslog.enabled`        | 是否启用访问日志。                                           | `false`       |
| `server.undertow.accesslog.pattern`        | 访问日志的格式。                                             | `common`      |
| `server.undertow.accesslog.prefix`         | 日志文件前缀。                                               | `access_log.` |
| `server.undertow.accesslog.rotate`         | 是否开启日志滚动。                                           | `true`        |
| `server.undertow.accesslog.suffix`         | 日志文件后缀。                                               | `log`         |
| `server.undertow.always-set-keep-alive`    | 是否应在所有响应中添加 `Connection: keep-alive` Header，即使 HTTP 规范没有要求。 | `true`        |
| `server.undertow.buffer-size`              | 每个 buffer 的大小。默认大小是根据 JVM 可用的最大内存确定的。 |               |
| `server.undertow.decode-slash`             | 是否应解码已编码的斜线字符（`%2F`）。如果前端代理不执行相同的解码，解码可能会导致安全问题。只有在传统应用程序需要时才启用。设置后，`server.undertow.allow-encoded-slash` 无效。 |               |
| `server.undertow.decode-url`               | 是否对 URL 进行解码。禁用时，URL 中的百分比编码字符将保持原样。 | `true`        |
| `server.undertow.direct-buffers`           | 是否在 Java 堆外分配 buffer。默认大小是根据 JVM 可用的最大内存确定的。 |               |
| `server.undertow.eager-filter-init`        | 是否应在启动时初始化 servlet Filter                          | `true`        |
| `server.undertow.max-cookies`              | 允许的最大 cookie 数量。这一限制是为了防止基于哈希碰撞的 DOS 攻击。 | `200`         |
| `server.undertow.max-headers`              | 允许的最大 header 数量。这一限制是为了防止基于哈希碰撞的 DOS 攻击。 |               |
| `server.undertow.max-http-post-size`       | HTTP post  content 的最大大小。当值为-1（默认值）时，大小为无限。 | `-1B`         |
| `server.undertow.max-parameters`           | 允许查询或路径参数的最大数量。这一限制是为了防止基于哈希碰撞的 DOS 攻击。 |               |
| `server.undertow.no-request-timeout`       | 在服务器关闭连接之前，连接在不处理请求的情况下闲置的时间。   |               |
| `server.undertow.options.server.*`         | 在 `io.undertow.UndertowOptions` 中定义的服务器选项。        |               |
| `server.undertow.options.socket.*`         | 在 `org.xnio.Options` 中定义的 socket 选项。                 |               |
| `server.undertow.preserve-path-on-forward` | 转发请求时是否保留请求路径。                                 | `false`       |
| `server.undertow.threads.io`               | I/O 线程数。默认值为可用的处理器数量。                       |               |
| `server.undertow.threads.worker`           | Worker 线程数。默认为 I/O 线程数的 8 倍。                    |               |
| `server.undertow.url-charset`              | 用于解码 URL 的字符集。                                      | `UTF-8`       |

## 编程式配置

如果配置属性无法满足你的需求，你可以通过配置类，以编程式的方式进行定制。

实现 `WebServerFactoryCustomizer<UndertowServletWebServerFactory>` 接口，覆写 `customize` 方法：

```java
import org.springframework.boot.web.embedded.undertow.UndertowServletWebServerFactory;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UndertowConfiguration implements WebServerFactoryCustomizer<UndertowServletWebServerFactory>{

    @Override
    public void customize(UndertowServletWebServerFactory factory) {
        factory.setBufferSize(8192);
        // 其他自定义配置 ...
    }
}
```

> ❝
>
> 对于 `UndertowServletWebServerFactory` 配置类的细节，请参阅 ：springdoc.cn。
>
> ❞

## 启动时的警告日志

当你使用 Undertow 作为 Spring Boot 嵌入式服务器时，启动应用。你会看到有一条 `WARN` 日志，如下：

```
WARN 9608 --- [           main] io.undertow.websockets.jsr               : UT026010: Buffer pool was not set on WebSocketDeploymentInfo, the default pool will be used
```

大致意思是“没有给 WebSocketDeploymentInfo 设置 Buffer pool，将会使用默认值”。有 2 种方式可以解决这个问题。

### 排除 undertow-websockets-jsr 依赖

如果未使用到 WebSocket 技术，那么可以直接从 `spring-boot-starter-undertow` 中排除 `undertow-websockets-jsr` 依赖即可。

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-undertow</artifactId>
    <exclusions>
        <!-- 排除 undertow-websockets-jsr 依赖 -->
        <exclusion>
            <groupId>io.undertow</groupId>
            <artifactId>undertow-websockets-jsr</artifactId>
        </exclusion>
    </exclusions>
</dependency>
```

### 为 WebSocketDeploymentInfo 设置合理的参数

也可以通过上述的 “编程式” 配置方式，为 `WebSocketDeploymentInfo` 设置一个合理的参数。如下：

```java
import org.springframework.boot.web.embedded.undertow.UndertowServletWebServerFactory;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.context.annotation.Configuration;

import io.undertow.server.DefaultByteBufferPool;
import io.undertow.websockets.jsr.WebSocketDeploymentInfo;

@Configuration
public class UndertowConfiguration implements WebServerFactoryCustomizer<UndertowServletWebServerFactory>{

    @Override
    public void customize(UndertowServletWebServerFactory factory) {
        factory.addDeploymentInfoCustomizers(deploymentInfo -> {

            WebSocketDeploymentInfo webSocketDeploymentInfo = new WebSocketDeploymentInfo();

            // 设置合理的参数
            webSocketDeploymentInfo.setBuffers(new DefaultByteBufferPool(true, 8192));
            deploymentInfo.addServletContextAttribute("io.undertow.websockets.jsr.WebSocketDeploymentInfo", webSocketDeploymentInfo);
        });
    }
}
```

经过测试，上述 2 种方式都可以解决 Undertow 启动时有警告日志的问题。

## 总结

总之，使用 Undertow 作为 Spring Boot 的嵌入式服务器可以提供更好的性能、更小的内存占用以及更高的灵活性和嵌入式支持。