---
title: Spring Boot 配置日志输出
excerpt:
description: Spring Boot 配置日志输出
date: 2024-08-28
category: Java
tag: Java
author: xlc520
article: true
timeline: true
icon: java
---

```component VPBanner
title: Spring Boot 配置日志输出
content: Spring Boot 配置日志输出
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: Spring Boot 配置日志输出
    link: /dev/Spring Boot 配置日志输出
```

# Spring Boot 配置日志输出

## **01、背景介绍**

对于日志文件，相信大家都并不陌生，通过在关键位置打印相关的日志，有利于快速跟踪和定位软件系统运行中存在的问题。

在之前的 Java 实现日志记录的文章中，我们介绍了能实现日志记录的主流框架有 Log4j、Log4j2、Logback 等，通过一些性能测试发现，Logback
和 Log4j2 两个都比较优秀。同时，它们都支持与 SLF4J 框架的集成，可以轻松实现系统日志框架实现的切换，这主要得益于门面模式的设计。

当采用 Slf4j 来实现日志输出时，我们不需要再纠结到底是用 Log4j2 还是用 Logback 。Slf4j
相当于一个门面接口，可以让代码更加统一，同时它并不是一个日志实现框架，具体的实现会在 Slf4j 接口被调用的时候委托给具体的日志框架来实现。比如，当系统中有
Logback 时，就委托 Logback 来输出日志；当有 Log4j2 时，就委托 Log4j2
来实现；如果两者同时存在，可能会报循环依赖的错误，因此在项目添加依赖的时候，只能选择其中一个，如果有不兼容的问题，需要手动排除。

对于一个 Java web 项目，当采用`Slf4j` + `Logback`来实现日志信息的输出时，通常会添加类似于如下的相关依赖包。

```
<!-- 添加slf4j依赖包 -->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>1.7.25</version>
</dependency>
<!-- 添加logback依赖包 -->
<dependency>
    <groupId>ch.qos.logback</groupId>
    <artifactId>logback-classic</artifactId>
    <version>1.1.7</version>
</dependency>
```

然后，在项目根目录下创建`logback.xml`并配置相关参数，示例如下。

```
<?xml version="1.0" encoding="UTF-8"?>
<!-- scan:当此属性设置为true时，配置文件如果发生改变，将会被重新加载，默认值为true。 scanPeriod:设置监测配置文件是否有修改的时间间隔，如果没有给出时间单位，默认单位是毫秒。当scan为true时，此属性生效。默认的时间间隔为1分钟。 
    debug:当此属性设置为true时，将打印出logback内部日志信息，实时查看logback运行状态。默认值为false。 -->
<configuration scan="true" scanPeriod="60 seconds" debug="false">

    <!-- 
    %d{yyyy-MM-dd HH:mm:ss} [%level] - %msg%n
      Logger: %logger
      Class: %class
      File: %file
      Caller: %caller
      Line: %line
      Message: %m
      Method: %M
      Relative: %relative
      Thread: %thread
      Exception: %ex
      xException: %xEx
      nopException: %nopex
      rException: %rEx
      Marker: %marker
      newline:%n
    -->
    <property name="CUSTOM_LOG_PATTERN"
        value="%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{90} - %msg%n" />
        
    <!-- 上下文名称 -->
    <contextName>${CONTEXT_NAME}</contextName>

    <!-- 日志输出组件 -->
    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <!-- 对日志进行格式化。 -->
        <encoder>
            <pattern>${CUSTOM_LOG_PATTERN}</pattern>
            <charset>UTF-8</charset>
        </encoder>
    </appender>

    <!-- 日志级别为INFO,日志输出到控制台 -->
    <root level="INFO">
        <appender-ref ref="CONSOLE" />
    </root>
</configuration>
```

最后，通过门面接口来输出日志，示例如下：

```
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LogPrintUtil {

    private static final Logger LOGGER = LoggerFactory.getLogger(LogPrintUtil.class);
    
    public static void main(String[] args){
        LOGGER.info("info信息");
        LOGGER.warn("warn信息");
        LOGGER.error("error信息");
    }
}
```

## **02、Spring Boot 日志配置**

当我们采用 SpringBoot 框架来开发系统的时候，其实默认已经帮我们集成好了`spring-boot-starter-logging`
日志依赖包，它底层采用的就是上面介绍的`logback`日志实现框架，同时也集成了`Slf4j`依赖库。

默认的`logback`日志配置文件在`org/springframework/boot/logging/logback/defaults.xml`下，我们只需要在相关的位置采用`slf4j`
接口来打印日志即可，示例如下：

```
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LogApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(LogApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(LogApplication.class, args);

        LOGGER.error("Hello World");
        LOGGER.warn("Hello World");
        LOGGER.info("Hello World");
        LOGGER.debug("Hello World");
        LOGGER.trace("Hello World");
    }
}
```

启动服务，可以看到类似于如下的打印结果：

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1724773685155-0.webp)

默认的日志级别为`info`，如果想更改日志级别，可以在`application.properties`文件配置日志打印级别，比如改成`trace`，参数如下：

```
logging.level.root=trace
```

重新启动服务，日志打印结果如下：

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1724773685155-1.webp)

从控制台输出的结果可以初步分析出，`trace`级别最低，可以打印所有级别的日志。在整个日志体系中，级别从低到高分为：

```
TRACE < DEBUG < INFO < WARN < ERROR
```

级别越底，可打印的日志就更多；相反，级别越高，输出的日志就更少。

从实际情况来看，太多的日志打印也未必是一件好事，有时候会把服务器磁盘撑爆，导致服务宕机。通常我们会配置`INFO`
级别，在关键的位置打印相关信息即可。

#### **2.1、Logback 自定义配置**

在实际的业务开发中，通常我们会自定义`Logback`相关配置文件，有两种做法。

- 第一种：创建`logback.xml`配置文件，这种配置文件会直接被日志框架加载
- 第二种：创建`logback-spring.xml`配置文件，这种配置文件不会直接被日志框架加载，而是先由 SpringBoot 去解析日志配置再加载，可以使用
  SpringBoot 的一些高级功能，比如 Profile 属性。

这里，我们选择第二种方式，在`src/main/resources`目录下，创建`logback-spring.xml`文件，一般标准写法如下：

```
<?xml version="1.0" encoding="UTF-8"?>
<configuration>

    <!--定义相关变量-->
    <property name="log.dir" value="log-demo" />
    <property name="custom.log.pattern" value="%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{90} - %msg%n" />

    <!-- 控制台文件输出 -->
    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>${custom.log.pattern}</pattern>
            <charset>UTF-8</charset>
        </encoder>
    </appender>

    <!-- 文件输出 -->
    <appender name="APP_LOG"
              class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>${log.dir}/log_info.log</file>
        <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
            <pattern>${custom.log.pattern}</pattern>
            <charset>UTF-8</charset>
        </encoder>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>${log.dir}/histroy/log-%d{yyyy-MM-dd}-%i.log
            </fileNamePattern>
            <maxHistory>30</maxHistory>
            <timeBasedFileNamingAndTriggeringPolicy
                    class="ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP">
                <maxFileSize>250MB</maxFileSize>
            </timeBasedFileNamingAndTriggeringPolicy>
        </rollingPolicy>
    </appender>

    <root level="INFO">
        <appender-ref ref="CONSOLE" />
        <appender-ref ref="APP_LOG" />
    </root>

</configuration>
```

其中`CONSOLE`节点，表示将日志输出到控制台；`APP_LOG`节点，表示将日志输出到文件中，并自动将最近 30
天的日志文件进行归档到`histroy `文件夹中。

如果想要读取 Spring Boot properties 或根据 Spring profile 定义日志配置，可以通过如下方式实现。

```
<?xml version="1.0" encoding="UTF-8"?>
<configuration>

    <!--获取application.properties中定义的变量-->
    <springProperty scope="context"
                    name="customLogPattern"
                    source="custom.log.pattern"
                    defaultValue="%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{90} - %msg%n"/>

    <springProperty scope="context"
                    name="LogDir"
                    source="custom.log.dir"
                    defaultValue="log-demo"/>


    <!-- 控制台文件输出 -->
    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>${customLogPattern}</pattern>
            <charset>UTF-8</charset>
        </encoder>
    </appender>

    <!-- 文件输出 -->
    <appender name="APP_LOG"
              class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>${LogDir}/log_info.log</file>
        <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
            <pattern>${customLogPattern}</pattern>
            <charset>UTF-8</charset>
        </encoder>
    </appender>

    <!--获取springProfile变量-->
    <springProfile name="dev">
        <root level="INFO">
            <appender-ref ref="CONSOLE" />
            <appender-ref ref="APP_LOG" />
        </root>
    </springProfile>

    <springProfile name="prod">
        <root level="INFO">
            <appender-ref ref="APP_LOG" />
        </root>
    </springProfile>

</configuration>
```

`application.properties`文件相关的配置参数如下：

```
# 指定spring profiles 参数
spring.profiles.active=dev
# 自定义打印格式
custom.log.pattern=%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{90} - %msg%n
# 自定义日志存储路径
custom.log.dir=app-demo
```

#### **2.2、Log4j2 自定义配置**

如果项目更倾向于使用 Log4j2 而不是 Logback，迁移方式也很简单。

首先，需要排除掉默认 Logback 相关依赖库，然后添加`log4j2`相关依赖包，示例如下：

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter</artifactId>
    <exclusions>
        <exclusion>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-logging</artifactId>
        </exclusion>
    </exclusions>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-log4j2</artifactId>
</dependency>
```

与`Logback`类似，当添加相关依赖包之后，Spring Boot 默认带了一个`log4j2.xml`
日志配置文件，在`org/springframework/boot/logging/log4j2/log4j2.xml`。

但是，基于业务的需要，通常我们会自定义配置文件，一般写法如下：

```
<?xml version="1.0" encoding="UTF-8"?>
<Configuration status="info" monitorInterval="3">

    <!--变量配置-->
    <Properties>
        <!--定义日志存储的路径 -->
        <property name="log.dir" value="app-demo"/>
        <!-- 定义日志输出格式 -->
        <property name="custom.log.pattern" value="%d{yyyy-MM-dd HH:mm:ss} [%t] %-5level %l %msg%n"/>
    </Properties>

    <Appenders>
        <!-- 控制台输出 -->
        <Console name="CONSOLE" target="SYSTEM_OUT">
            <PatternLayout pattern="${custom.log.pattern}"/>
        </Console>

        <!-- 文件输出 -->
        <RollingFile name="APP_LOG" fileName="${log.dir}/app.log"
                     filePattern="${log.dir}/app-%d{MM-dd-yyyy}-%i.log.gz">
            <PatternLayout pattern="${custom.log.pattern}"/>
            <Policies>
                <TimeBasedTriggeringPolicy/>
                <!-- size根据实际的日志量填写 -->
                <SizeBasedTriggeringPolicy size="100 MB"/>
            </Policies>
        </RollingFile>
    </Appenders>

    <Loggers>
        <!-- 日志记录级别 -->
        <Root level="info">
            <AppenderRef ref="CONSOLE"/>
            <AppenderRef ref="APP_LOG"/>
        </Root>
    </Loggers>
</Configuration>
```

此时如果代码中采用的是门面模式的编程方式，无需做任何的调整，即可实现日志框架的切换改造。

## **03、小结**

最后总结一下，对于简单的应用场景，并发量不高的环境下，可以采用 Logback 来实现日志打印；如果对性能要求较高，可以采用
Log4j2，据官方提供的测试报告中，Log4j2 在性能和新技术的应用，比 Logback 领先，毕竟是后起之秀，但是兼容性方面，Logback 更优。




<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
