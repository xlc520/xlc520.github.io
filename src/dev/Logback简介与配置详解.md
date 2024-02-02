---
author: xlc520
title: Java
description: Java
date: 2022-01-05
category: Java
tag: Java
article: true
timeline: true
icon: java
---



## Logback简介

官方网址：https://logback.qos.ch/

Logback是一款为Java应用程序设计的日志框架，旨在提供高性能、灵活性和可扩展性。它是log4j项目的继任者，并被广泛用于Java应用程序的日志记录。

Logback分为三个主要的模块：logback-core、logback-classic、和logback-access。

- logback-core提供了基本的日志功能。
- logback-classic建立在logback-core之上，兼容SLF4J和log4j API，提供了一套强大的日志框架。
- logback-access允许通过servlet容器的访问日志功能来记录HTTP请求。（）

Spring Boot默认集成了Logback，并用INFO级别输出到控制台。 由于Spring Boot通常使用嵌入式Servlet容器，并且这些容器已经具备了记录访问日志的功能，因此在默认情况下不需要引入logback-access。

Logback 具有许多优点，其中一些包括：

- 性能高效

Logback被设计为高性能的日志框架，具有较低的运行时开销。

异步日志记录和可配置的缓冲机制有助于提高性能。

- 灵活的配置

Logback的配置文件采用XML格式（通常命名为logback.xml），允许用户以声明式的方式配置日志输出。

支持通过Groovy脚本进行配置，提供更灵活的选项。

- 丰富的Appender

提供多种Appender用于将日志输出到不同的目的地，如控制台、文件、数据库等。

支持异步Appender以提高性能。

- 简单而强大的 API

Logback 的 API 设计简单易用，同时具备强大的功能。它继承了 Log4j 的 API，但在设计上进行了改进和优化，使得开发者可以更容易地集成和使用。

- 广泛的社区支持

作为一个成熟而受欢迎的日志框架，Logback 拥有广泛的社区支持和活跃的开发者社群。这意味着开发者可以在社区中获取丰富的资源、文档和支持。

## springboot配置logback

在src/main/resources目录下创建名为logback-spring.xml或者logback.xml的Logback配置文件。Spring Boot默认会加载类路径下的logback-spring.xml文件。如果该文件不存在，则会尝试加载logback.xml。如果我们使用的是别的配置名称，则需要在springboot 的application.yml配置文件中经行配置：

```
# 日志配置
logging:
  config: classpath:mylogback.xml
```

## logback.xml的配置完整示例

- 同步配置文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <!-- 日志存放路径 -->
 <property name="log.path" value="/data/xjdoc/logs" />
    <!-- 日志输出格式 -->
 <property name="log.pattern" value="%d{HH:mm:ss.SSS} [%thread] %-5level %logger{20} - [%method,%line] - %msg%n" />

 <!-- 控制台输出 -->
 <appender name="console" class="ch.qos.logback.core.ConsoleAppender">
  <encoder>
   <pattern>${log.pattern}</pattern>
  </encoder>
 </appender>
 
 <!-- 系统日志输出 -->
 <appender name="file_info" class="ch.qos.logback.core.rolling.RollingFileAppender">
     <file>${log.path}/sys-info.log</file>
        <!-- 循环政策：基于时间创建日志文件 -->
  <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <!-- 日志文件名格式 -->
   <fileNamePattern>${log.path}/sys-info.%d{yyyy-MM-dd}.log</fileNamePattern>
   <!-- 日志最大的历史 60天 -->
   <maxHistory>60</maxHistory>
  </rollingPolicy>
  <encoder>
   <pattern>${log.pattern}</pattern>
  </encoder>
  <filter class="ch.qos.logback.classic.filter.LevelFilter">
            <!-- 过滤的级别 -->
            <level>INFO</level>
            <!-- 匹配时的操作：接收（记录） -->
            <onMatch>ACCEPT</onMatch>
            <!-- 不匹配时的操作：拒绝（不记录） -->
            <onMismatch>DENY</onMismatch>
        </filter>
 </appender>
 
 <appender name="file_error" class="ch.qos.logback.core.rolling.RollingFileAppender">
     <file>${log.path}/sys-error.log</file>
        <!-- 循环政策：基于时间创建日志文件 -->
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <!-- 日志文件名格式 -->
            <fileNamePattern>${log.path}/sys-error.%d{yyyy-MM-dd}.log</fileNamePattern>
   <!-- 日志最大的历史 60天 -->
   <maxHistory>60</maxHistory>
        </rollingPolicy>
        <encoder>
            <pattern>${log.pattern}</pattern>
        </encoder>
        <filter class="ch.qos.logback.classic.filter.LevelFilter">
            <!-- 过滤的级别 -->
            <level>ERROR</level>
   <!-- 匹配时的操作：接收（记录） -->
            <onMatch>ACCEPT</onMatch>
   <!-- 不匹配时的操作：拒绝（不记录） -->
            <onMismatch>DENY</onMismatch>
        </filter>
    </appender>

 <!-- 系统模块日志级别控制  -->
 <logger name="cn.xj" level="info" />
 <!-- Spring日志级别控制  -->
 <logger name="org.springframework" level="warn" />
 
 <!--系统操作日志-->
    <root level="info">
       <appender-ref ref="console" />
        <appender-ref ref="file_info" />
        <appender-ref ref="file_error" />
    </root>

</configuration> 
```

- 异步配置文件

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <!-- 日志存放路径 -->
 <property name="log.path" value="/data/xjdoc/logs" />
    <!-- 日志输出格式 -->
 <property name="log.pattern" value="%d{HH:mm:ss.SSS} [%thread] %-5level %logger{20} - [%method,%line] - %msg%n" />

 <!-- 控制台输出 -->
 <appender name="console" class="ch.qos.logback.core.ConsoleAppender">
  <encoder>
   <pattern>${log.pattern}</pattern>
  </encoder>
 </appender>
 
 <!-- 系统日志输出 -->
 <appender name="file_info" class="ch.qos.logback.core.rolling.RollingFileAppender">
     <file>${log.path}/sys-info.log</file>
        <!-- 循环政策：基于时间创建日志文件 -->
  <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <!-- 日志文件名格式 -->
   <fileNamePattern>${log.path}/sys-info.%d{yyyy-MM-dd}.log</fileNamePattern>
   <!-- 日志最大的历史 60天 -->
   <maxHistory>60</maxHistory>
  </rollingPolicy>
  <encoder>
   <pattern>${log.pattern}</pattern>
  </encoder>
  <filter class="ch.qos.logback.classic.filter.LevelFilter">
            <!-- 过滤的级别 -->
            <level>INFO</level>
            <!-- 匹配时的操作：接收（记录） -->
            <onMatch>ACCEPT</onMatch>
            <!-- 不匹配时的操作：拒绝（不记录） -->
            <onMismatch>DENY</onMismatch>
        </filter>
 </appender>
 
 <appender name="file_error" class="ch.qos.logback.core.rolling.RollingFileAppender">
     <file>${log.path}/sys-error.log</file>
        <!-- 循环政策：基于时间创建日志文件 -->
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <!-- 日志文件名格式 -->
            <fileNamePattern>${log.path}/sys-error.%d{yyyy-MM-dd}.log</fileNamePattern>
   <!-- 日志最大的历史 60天 -->
   <maxHistory>60</maxHistory>
        </rollingPolicy>
        <encoder>
            <pattern>${log.pattern}</pattern>
        </encoder>
        <filter class="ch.qos.logback.classic.filter.LevelFilter">
            <!-- 过滤的级别 -->
            <level>ERROR</level>
   <!-- 匹配时的操作：接收（记录） -->
            <onMatch>ACCEPT</onMatch>
   <!-- 不匹配时的操作：拒绝（不记录） -->
            <onMismatch>DENY</onMismatch>
        </filter>
    </appender>

    <appender name="async_file_info" class="ch.qos.logback.classic.AsyncAppender">
        <!--  当队列的剩余容量小于这个阈值并且当前日志level为 TRACE, DEBUG or INFO ，则丢弃这些日志。  -->
        <discardingThreshold>0</discardingThreshold>
        <!--  更改默认的队列的深度,该值会影响性能.默认值为256  -->
        <queueSize>1024</queueSize>
        <!--  新增这行为了打印栈堆信息  -->
        <includeCallerData>true</includeCallerData>
        <!--  添加附加的appender,最多只能添加一个  -->
        <appender-ref ref="file_info"/>
    </appender>
    <appender name="async_file_error" class="ch.qos.logback.classic.AsyncAppender">
        <!--  当队列的剩余容量小于这个阈值并且当前日志level为 TRACE, DEBUG or INFO ，则丢弃这些日志。  -->
        <discardingThreshold>0</discardingThreshold>
        <!--  更改默认的队列的深度,该值会影响性能.默认值为256  -->
        <queueSize>1024</queueSize>
        <!--  新增这行为了打印栈堆信息  -->
        <includeCallerData>true</includeCallerData>
        <!--  添加附加的appender,最多只能添加一个  -->
        <appender-ref ref="file_error"/>
    </appender>
    <appender name="async_file_debug" class="ch.qos.logback.classic.AsyncAppender">
        <!--  当队列的剩余容量小于这个阈值并且当前日志level为 TRACE, DEBUG or INFO ，则丢弃这些日志。  -->
        <discardingThreshold>0</discardingThreshold>
        <!--  更改默认的队列的深度,该值会影响性能.默认值为256  -->
        <queueSize>1024</queueSize>
        <!--  新增这行为了打印栈堆信息  -->
        <includeCallerData>true</includeCallerData>
        <!--  添加附加的appender,最多只能添加一个  -->
        <appender-ref ref="file_debug"/>
    </appender>

    <!-- 系统模块日志级别控制  -->
    <logger name="cn.xj" level="info" />
    <!-- Spring日志级别控制  -->
    <logger name="org.springframework" level="warn" />

 
 <!--系统操作日志-->
    <root level="info">
        <appender-ref ref="console" />
        <appender-ref ref="async_file_info" />
        <appender-ref ref="async_file_error" />
    </root>

</configuration> 
```

## logback.xml的配置详解



### property

```xml
    <!-- 日志存放路径 -->
 <property name="log.path" value="/data/xjdoc/logs" />
    <!-- 日志输出格式 -->
 <property name="log.pattern" value="%d{HH:mm:ss.SSS} [%thread] %-5level %logger{20} - [%method,%line] - %msg%n" />
```

`<property>` 元素用于定义属性，允许在配置文件的其他地方引用这些属性;说明如下：

**log.path**

这行配置定义了一个名为 log.path 的属性，其值为 /data/xjdoc/logs。这个属性可以在配置文件的其他地方通过 ${log.path} 进行引用。这种属性的定义用于集中管理日志存放路径，方便在多处引用时进行统一修改。

**log.pattern**

这行配置定义了一个名为 log.pattern 的属性，其值为一个复杂的日志输出格式。这个属性可以在配置文件的其他地方通过 ${log.pattern} 进行引用。这种属性的定义用于集中管理日志输出格式，方便在多处引用时进行统一修改。

- `%d{HH:mm:ss.SSS}`: 输出日志的时间戳，精确到毫秒。

| 转换模式                        | 结果示例                  |
| :------------------------------ | :------------------------ |
| %d                              | 2006-10-20 14:06:49,812   |
| %date                           | 2006-10-20 14:06:49,812   |
| %date{ISO8601}                  | 2006-10-20 14:06:49,812   |
| %date{HH:mm:ss.SSS}             | 14:06:49.812              |
| %d{HH:mm:ss.SSS}                | 14:06:49.812              |
| %date{dd MMM yyyy;HH:mm:ss.SSS} | 20 oct. 2006;14:06:49.812 |

- `[%thread]`: 输出线程名。
- `%-5level`: 输出日志级别，左对齐占5个字符的宽度。
- `%logger{20}`: 输出 logger 名称，占20个字符的宽度。
- `[%method,%line]`: 输出调用方法和行号。
- `%msg`: 输出日志消息。
- `%n`: 输出平台特定的换行符。

### appender

```xml
 <appender name="file_info" class="ch.qos.logback.core.rolling.RollingFileAppender">
     <file>${log.path}/sys-info.log</file>
        <!-- 循环政策：基于时间创建日志文件 -->
  <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <!-- 日志文件名格式 -->
   <fileNamePattern>${log.path}/sys-info.%d{yyyy-MM-dd}.log</fileNamePattern>
   <!-- 日志最大的历史 60天 -->
   <maxHistory>60</maxHistory>
  </rollingPolicy>
  <encoder>
   <pattern>${log.pattern}</pattern>
  </encoder>
  <filter class="ch.qos.logback.classic.filter.LevelFilter">
            <!-- 过滤的级别 -->
            <level>INFO</level>
            <!-- 匹配时的操作：接收（记录） -->
            <onMatch>ACCEPT</onMatch>
            <!-- 不匹配时的操作：拒绝（不记录） -->
            <onMismatch>DENY</onMismatch>
        </filter>
 </appender>
```

**`<appender>` 元素**

- ConsoleAppender（控制台输出）

class="ch.qos.logback.core.ConsoleAppender"

用于将日志输出到控制台。

主要用于开发和调试时观察日志。

- FileAppender（文件输出） class="ch.qos.logback.core.FileAppender"

用于将日志输出到文件。

可以配置文件路径、文件名等参数。

- RollingFileAppender（滚动文件输出）

class="ch.qos.logback.core.RollingFileAppender"

在FileAppender的基础上，支持滚动策略，可以按照一定规则滚动创建日志文件，例如按时间、文件大小等。

- AsyncAppender（异步输出）

class="ch.qos.logback.core.AsyncAppender"

用于异步输出日志，可以提高性能，特别适用于高吞吐的应用。

包装其他Appender，将日志记录过程异步执行。

**滚动策略 (`<rollingPolicy>` 元素)**

- TimeBasedRollingPolicy（基于时间的滚动策略）

基于时间的滚动策略，按照一定的时间间隔滚动创建新的日志文件。

fileNamePattern 属性定义了日志文件名的格式，可以包含时间相关的占位符，例如 %d{yyyy-MM-dd}。

- SizeAndTimeBasedRollingPolicy（基于时间和大小的滚动策略）

同时基于时间和文件大小的滚动策略，既可以按照时间滚动，又可以在达到一定文件大小时滚动创建新的日志文件。

fileNamePattern 属性定义了日志文件名的格式，可以包含时间相关的占位符，例如 %d{yyyy-MM-dd}。

maxFileSize 属性定义了每个日志文件的最大大小。

- FixedWindowRollingPolicy（固定窗口的滚动策略）

固定窗口的滚动策略，按照一定的窗口大小滚动创建新的日志文件。

- SizeBasedTriggeringPolicy（基于大小触发滚动策略）

基于文件大小触发滚动的策略，当当前日志文件大小达到一定阈值时触发滚动。

- TimeBasedFileNamingAndTriggeringPolicy（基于时间的文件命名和触发策略）

基于时间的文件命名和触发策略，按照一定的时间间隔和文件名格式触发滚动。

**`<encoder>` 元素**

用于配置日志的输出格式，${log.pattern} 引用了之前定义的 log.pattern 属性，以保持一致的日志输出格式。

**`<filter>` 元素**

- 使用 ch.qos.logback.classic.filter.LevelFilter 过滤器，仅接受 INFO 级别的日志记录。
- onMatch 指定匹配时的操作为接受（ACCEPT）。
- onMismatch 指定不匹配时的操作为拒绝（DENY）。

### logger

```xml
    <!-- 系统模块日志级别控制  -->
    <logger name="cn.xj" level="info" />
    <!-- Spring日志级别控制  -->
    <logger name="org.springframework" level="warn" />
```

**name 属性**

通常使用类名或者包名来指定 Logger。

**level 属性**

level 属性定义了日志级别，表示记录的日志消息级别。可选值包括 trace、debug、info、warn、error。

- TRACE（追踪）

TRACE 是最低级别的日志，用于记录程序的详细执行信息。

这个级别通常用于调试，输出对程序执行流程的跟踪信息。

TRACE 级别的日志量较大，一般情况下不会在生产环境中启用。

- DEBUG（调试）

DEBUG 级别用于输出调试信息，有助于开发者定位和解决问题。

DEBUG 日志通常包含详细的变量信息、方法调用堆栈等。

在开发和测试阶段中，可以启用 DEBUG 日志以获取更多的信息。

- INFO（信息）

INFO 级别用于记录一般性的信息，表示程序执行的正常流程。

INFO 日志用于显示重要的运行时信息，通常在生产环境中启用。

这是默认的日志级别，如果没有明确指定级别，则使用 INFO。

- WARN（警告）

WARN 级别用于记录一些可能需要关注的问题，但不会导致程序失败。

WARN 日志表明程序可能遇到了某些问题或潜在的错误，但仍然可以继续执行。

这是一个提醒性的级别。

- ERROR（错误）

ERROR 级别用于记录程序的错误和异常情况。

ERROR 日志表示程序遇到了严重的问题，可能导致程序崩溃或无法正常运行。

ERROR 级别的日志通常需要开发者及时关注和处理。

### root

在 Logback 配置文件中，`<root>` 元素用于配置根 Logger，它是整个日志系统的根节点。根 Logger 拥有最高级别，通常用于设置全局的日志级别和全局的 Appender（附加器）。

```xml
    <root level="info">
        <appender-ref ref="console" />
        <appender-ref ref="async_file_info" />
        <appender-ref ref="async_file_error" />
    </root>
```

**level 属性**

level 属性定义了根 Logger 的默认日志级别，表示整个日志系统的最低输出级别。例如，上例中设置为 INFO，表示只输出 INFO 级别及以上的日志。

**`<appender-ref>` 元素**

`<appender-ref>` 元素用于引用一个或多个 Appender，将其关联到根 Logger，即设置根 Logger 的输出目的地。可以有多个`<appender-ref>`元素，表示将日志输出到多个目的地。

## 总结

Logback 是一个强大且灵活的日志框架，它为 Java 应用程序提供了先进的日志记录功能。通过合理配置，可以满足各种应用场景的需求，从而更好地帮助开发者监控和调试应用程序。希望本文对 Logback 的简介和配置提供了清晰的指导，使你能更好地使用 Logback 进行日志记录。