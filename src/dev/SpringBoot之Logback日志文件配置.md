---
author: xlc520
title: SpringBoot之Logback日志文件配置
description: 
date: 2023-03-03
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# SpringBoot之Logback日志文件配置

## 概述

Logback是一个日志框架，Logback和Log4j都是开源的日志工具库，Logback是Log4j的改良版本，内置实现了slf4j，比Log4j拥有更多的特性，性能也带来很大提升。SpringBoot默认内置了Logback日志框架，Spring
Boot 集成logback需要添加 `spring-boot-starter-logging` 依赖，而此依赖已经在 `spring-boot-starter`
中添加过了，所以不用再添加此依赖了(如下图) ：
[![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/6123ac4244eaada7399e7576.jpg)](https://pic.imgdb.cn/item/6123ac4244eaada7399e7576.jpg)

Log4j建议只使用四个级别，优先级从高到低分别是 ERROR、WARN、INFO、DEBUG，优先级高的将被打印出来。（logback通用）
通过定义级别，可以作为应用程序中相应级别的日志信息的开关。

- 比如在这里定义了INFO级别，则应用程序中所有DEBUG级别的日志信息将不被打印出来。（设置INFO级别，即：>=INFO 生效*

*项目上生产环境的时候一定得把debug的日志级别重新调为warn或者更高，避免产生大量日志。*

## 配置详解

默认情况下，SpringBoot会用Logback来记录日志，并用INFO级别输出到控制台。 配置Logback常用节点结构图：
[![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/6123ae6e44eaada739a38bd4.png)](https://pic.imgdb.cn/item/6123ae6e44eaada739a38bd4.png)

### configuration

根节点 `<configuration>` 下面包含三个属性：

- scan: 当此属性设置为true时，配置文件如果发生改变，将会被重新加载，默认值为true。
- scanPeriod: 设置监测配置文件是否有修改的时间间隔，如果没有给出时间单位，默认单位是毫秒。当scan为true时，此属性生效。默认的时间间隔为1分钟。
- debug: 当此属性设置为true时，将打印出logback内部日志信息，实时查看logback运行状态。默认值为false。示例：

```xml
<configuration scan="true" scanPeriod="60 seconds" debug="false">
<!--其他配置省略-->
</configuration>
```

### appender

`<appender>`：负责谢日志的组件，它有两个必要属性name和class。name指定appender名称，class指定appender的全限定名。

#### ConsoleAppender

`ConsoleAppender` 把日志输出到控制台，有以下子节点：

`<encoder>` ：对日志进行格式化

`<target>`：字符串System.out（默认）或者System.err

示例：把 >=DEBUG 级别的日志都输出到控制台

```xml
<configuration>
　　　<appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
　　　　　 <encoder>
　　　　　　　　　<pattern>%-4relative [%thread] %-5level %logger{35} - %msg %n</pattern>
　　　　　 </encoder>
　　　</appender>

　　　<root level="DEBUG">
　　　　　　<appender-ref ref="STDOUT" />
　　　</root>
</configuration>
```

#### FileAppender

`<FileAppender>`：把日志添加到文件，有以下子节点：

- `<file>`：被写入的文件名，可以是相对目录，也可以是绝对目录，如果上级目录不存在会自动创建，没有默认值。
- `<append>` ：如果是 true，日志被追加到文件结尾，如果是 false，清空现存文件，默认是true。
- `<encoder>` ：对记录事件进行格式化。（具体参数稍后讲解 ）
- `<prudent>` ：如果是 true，日志会被安全的写入文件，即使其他的FileAppender也在向此文件做写入操作，效率低，默认是 false。

示例：把 >= DEBUG 级别的日志都输出到 testFile.log 文件：

```xml
<configuration>
　　　　　　<appender name="FILE" class="ch.qos.logback.core.FileAppender">
　　　　　　　　<file>testFile.log</file>
　　　　　　　　<append>true</append>
　　　　　　　　<encoder>
　　　　　　　　　　<pattern>%-4relative [%thread] %-5level %logger{35} - %msg%n</pattern>
　　　　　　　　</encoder>
　　　　　　</appender>

　　　　　　<root level="DEBUG">
　　　　　　<appender-ref ref="FILE" />
　　　　　　</root>
　　　　</configuration>
```

#### RollingFileAppender

`<RollingFileAppender>` ：滚动记录文件，先将日志记录到指定文件，当符合某个条件时，将日志记录到其它文件。有以下子节点：

- `<file>` ：被写入的文件名，可以是相对目录，也可以是绝对目录，如果上级目录不存在会自动创建，没有默认值。
- `<append>` ：如果是 true，日志被追加到文件结尾，如果是 false，清空现存文件，默认是true。
- `<rollingPolicy>` : 当发生滚动时，决定RollingFileAppender的行为，涉及文件移动和重命名。属性class定义具体的滚动策略类

##### TimeBasedRollingPolicy

`class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy`： 最常用的滚动策略，它根据时间来制定滚动策略，既负责滚动也负责出发滚动。有以下子节点：

- ：必要节点，包含文件名及“%d”转换符，“%d”可以包含一个java.text.SimpleDateFormat指定的时间格式，如：%d{yyyy-MM}。
  如果直接使用 %d，默认格式是
  yyyy-MM-dd。RollingFileAppender的file字节点可有可无，通过设置file，可以为活动文件和归档文件指定不同位置，当前日志总是记录到file指定的文件（活动文件），活动文件的名字不会改变；
  如果没设置file，活动文件的名字会根据fileNamePattern 的值，每隔一段时间改变一次。“/”或者“\”会被当做目录分隔符。
- : 可选节点，控制保留的归档文件的最大数量，超出数量就删除旧文件。假设设置每个月滚动，且是6，则只保存最近6个月的文件，删除之前的旧文件。注意，删除旧文件是，那些为了归档而创建的目录也会被删除。

##### SizeBasedTriggeringPolicy

`class="ch.qos.logback.core.rolling.SizeBasedTriggeringPolicy` ： 查看当前活动文件的大小，如果超过指定大小会告知RollingFileAppender
触发当前活动文件滚动。只有一个节点:

- : 这是活动文件的大小，默认值是10MB。
- ：当为true时，不支持FixedWindowRollingPolicy。支持TimeBasedRollingPolicy，但是有两个限制，1不支持也不允许文件压缩，2不能设置file属性，必须留空。
- : 告知 RollingFileAppender 合适激活滚动。

##### FixedWindowRollingPolicy

`class="ch.qos.logback.core.rolling.FixedWindowRollingPolicy` 根据固定窗口算法重命名文件的滚动策略。有以下子节点：

- : 窗口索引最小值
- : 窗口索引最大值，当用户指定的窗口过大时，会自动将窗口设置为12。
- : 必须包含“%i”例如，假设最小值和最大值分别为1和2，命名模式为
  mylog%i.log,会产生归档文件mylog1.log和mylog2.log。还可以指定文件压缩选项，例如，mylog%i.log.gz 或者 没有log%i.log.zip

示例：每天生成一个日志文件，保存30天的日志文件：

```xml
<configuration>
　　　　　　　　　　<appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
　　　　　　　　　　　　<rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
　　　　　　　　　　　　　　<fileNamePattern>logFile.%d{yyyy-MM-dd}.log</fileNamePattern>
　　　　　　　　　　　　　　<maxHistory>30</maxHistory>
　　　　　　　　　　　　</rollingPolicy>
　　　　　　　　　　　　<encoder>
　　　　　　　　　　　　　　<pattern>%-4relative [%thread] %-5level %logger{35} - %msg%n</pattern>
　　　　　　　　　　　　</encoder>
　　　　　　　　　　</appender>

　　　　　　　　　　<root level="DEBUG">
　　　　　　　　　　　　<appender-ref ref="FILE" />
　　　　　　　　　　</root>
　　　　　　　　</configuration>
```

### `<logger>`

`<logger>` ：用来设置某一个包或具体的某一个类的日志打印级别、以及指定。

\```： 仅有一个name属性，一个可选的level和一个可选的addtivity属性。

可以包含零个或多个元素，标识这个appender将会添加到这个logger。

- name: 用来指定受此loger约束的某一个包或者具体的某一个类。
- level: 用来设置打印级别，大小写无关：TRACE, DEBUG, INFO, WARN, ERROR, ALL和OFF，还有一个特殊值INHERITED或者同义词NULL，代表强制执行上级的级别。
  如果未设置此属性，那么当前loger将会继承上级的级别。
- addtivity: 是否向上级logger传递打印信息。默认是true。可以包含零个或多个元素，标识这个appender将会添加到这个logger。

### `<root>`

子节点:它也是元素，但是它是根loger,是所有的上级。只有一个level属性，因为name已经被命名为"root",且已经是最上级了。

level: 用来设置打印级别，大小写无关：TRACE, DEBUG, INFO, WARN, ERROR, ALL和OFF，不能设置为INHERITED或者同义词NULL。
默认是DEBUG。

同一样，可以包含零个或多个元素，标识这个appender将会添加到这个logger。

示例：常用logger配置：

```xml
<!-- show parameters for hibernate sql 专为 Hibernate 定制 -->
<logger name="org.hibernate.type.descriptor.sql.BasicBinder" level="TRACE" />
<logger name="org.hibernate.type.descriptor.sql.BasicExtractor" level="DEBUG" />
<logger name="org.hibernate.SQL" level="DEBUG" />
<logger name="org.hibernate.engine.QueryParameters" level="DEBUG" />
<logger name="org.hibernate.engine.query.HQLQueryPlan" level="DEBUG" />

<!--myibatis log configure-->
<logger name="com.apache.ibatis" level="TRACE"/>
<logger name="java.sql.Connection" level="DEBUG"/>
<logger name="java.sql.Statement" level="DEBUG"/>
<logger name="java.sql.PreparedStatement" level="DEBUG"/>
```

### `<contextName>`

子节点：用来设置上下文名称，每个logger都关联到logger上下文，默认上下文名称为default。但可以使用设置成其他名字，用于区分不同应用程序的记录。一旦设置，不能修改。

示例：

```xml
<configuration scan="true" scanPeriod="60 seconds" debug="false">
     <contextName>myAppName</contextName>
　　  <!--其他配置省略-->
</configuration>
```

### `<property>`

子节点 ：用来定义变量值，它有两个属性name和value，通过定义的值会被插入到 logger 上下文中，可以通过 `${}` 来使用变量。

name: 变量的名称
value: 的值时变量定义的值

示例：

```xml
<configuration scan="true" scanPeriod="60 seconds" debug="false">
　　　<property name="APP_Name" value="myAppName" />
　　　<contextName>${APP_Name}</contextName>
　　　<!--其他配置省略-->
</configuration>
```

### `<timestamp>`

子节点 ：获取时间戳字符串，他有两个属性key和datePattern。

key: 标识此 的名字； datePattern: 设置将当前时间（解析配置文件的时间）转换为字符串的模式，遵循java.txt.SimpleDateFormat的格式。

示例：

```xml
<configuration scan="true" scanPeriod="60 seconds" debug="false">
　　　　　　<timestamp key="bySecond" datePattern="yyyyMMdd'T'HHmmss"/>
　　　　　　<contextName>${bySecond}</contextName>
　　　　　　<!-- 其他配置省略-->
    </configuration>
```

## 完整配置demo

### 示例一

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration debug="false">

    <!--定义日志文件的存储地址，如果是在window中可以使用/开头的绝对地址，在linux中不要使用 / 开头的地址，因为其表示绝对地址，linux中要使用相对地址时 不要以 盘符开头即可-->
    <property name="logPath" value="/logs" />
    <!--日志文件保留天数，最长支持30天-->
    <property name="MaxHistory" value="30"/>
    <!--日志文件最大的大小，支持KB，MB-->
    <property name="MaxFileSize" value="100MB"/>

    <!--控制台日志， 控制台输出 -->
    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
            <!--格式化输出：%d表示日期，%thread表示线程名，%-5level：级别从左显示5个字符宽度,%msg：日志消息，%n是换行符-->
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50} - %msg%n</pattern>
        </encoder>
    </appender>

    <!--文件日志， 按照每天生成日志文件 -->
    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <!--日志文件输出的文件名-->
            <FileNamePattern>${logPath}/TestWeb.log.%d{yyyy-MM-dd}.log</FileNamePattern>
            <!--日志文件保留天数-->
            <MaxHistory>${MaxHistory}</MaxHistory>
        </rollingPolicy>
        <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
            <!--格式化输出：%d表示日期，%thread表示线程名，%-5level：级别从左显示5个字符宽度%msg：日志消息，%n是换行符-->
            <pattern>%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{50} - %msg%n</pattern>
        </encoder>
        <!--日志文件最大的大小-->
        <triggeringPolicy class="ch.qos.logback.core.rolling.SizeBasedTriggeringPolicy">
            <MaxFileSize>${MaxFileSize}</MaxFileSize>
        </triggeringPolicy>
    </appender>

    <!-- show parameters for hibernate sql 专为 Hibernate 定制 -->
    <logger name="org.hibernate.type.descriptor.sql.BasicBinder" level="TRACE" />
    <logger name="org.hibernate.type.descriptor.sql.BasicExtractor" level="DEBUG" />
    <logger name="org.hibernate.SQL" level="DEBUG" />
    <logger name="org.hibernate.engine.QueryParameters" level="DEBUG" />
    <logger name="org.hibernate.engine.query.HQLQueryPlan" level="DEBUG" />

    <!--mybatis log configure-->
    <logger name="com.apache.ibatis" level="TRACE"/>
    <logger name="java.sql.Connection" level="DEBUG"/>
    <logger name="java.sql.Statement" level="DEBUG"/>
    <logger name="java.sql.PreparedStatement" level="DEBUG"/>

    <!-- 日志输出级别 -->
    <root level="DEBUG">
        <appender-ref ref="STDOUT" />
        <appender-ref ref="FILE"/>
    </root>
</configuration>
```

### 示例二：过滤掉某些级别的信息

我们把debug，error，info等级别的日志，都分开，分别打印输出在不同的文件中。

需要做的就是，在不同的 日志级别中 过滤掉即可。

```xml
<?xml version="1.0" encoding="utf-8" ?>

<configuration>
    <!-- 控制台输出日志 -->
    <appender name="consoleLog" class="ch.qos.logback.core.ConsoleAppender">
        <layout class="ch.qos.logback.classic.PatternLayout">
            <pattern>
                %d - %msg%n   <!-- 控制台打印日志文件体 时间-信息 -->
            </pattern>
        </layout>
    </appender>

    <!-- 输出info级别的日志 -->
    <appender name="infoLog" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <!-- 在info中过滤掉掉 error 级别的信息 -->
        <filter class="ch.qos.logback.classic.filter.LevelFilter">
            <level>ERROR</level>
            <onMatch>DENY</onMatch>  <!-- 如果命中就禁止这条日志 -->
            <onMismatch>ACCEPT</onMismatch>  <!-- 如果没有命中就使用这条规则 -->
        </filter>

        <encoder>
            <pattern>
               %msg%n
            </pattern>
        </encoder>
        <!-- 滚动策略 -->
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <!-- 设置info日志路径 -->
            <fileNamePattern>E:\\IntelliJ IDEA\\logback\\info.%d.log</fileNamePattern>
        </rollingPolicy>
    </appender>

    <!-- 输出error级别的日志 -->
    <appender name="errorLog" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <!-- 过滤日志 -->
        <filter class="ch.qos.logback.classic.filter.ThresholdFilter">
            <level>ERROR</level>
        </filter>

        <encoder>
            <pattern>
                %msg%n
            </pattern>
        </encoder>
        <!-- 滚动策略 -->
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <!-- 设置error日志路径 -->
            <fileNamePattern>E:\\IntelliJ IDEA\\logback\\error.%d.log</fileNamePattern>
        </rollingPolicy>
    </appender>

    <!-- 设置默认日志级别为INFO，一般都设置为info -->
    <root level="info">
        <appender-ref ref="consoleLog"/>
        <appender-ref ref="infoLog"/>
        <appender-ref ref="errorLog"/>
    </root>
</configuration>
```

可以结合示例一进行优化。

### 示例三：自动压缩存储按照日期分割后的日志

这个日志配置文件是我部署在线上的个人博客使用的，已经经过验证了。生成的日志格式如下：

[![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/6123bc1644eaada739c2c707.jpg)](https://pic.imgdb.cn/item/6123bc1644eaada739c2c707.jpg)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration debug="true">
    <!-- 项目名称 -->
    <property name="PROJECT_NAME" value="small-and-beautiful-blog" />
    <!--定义日志文件的存储地址 勿在 LogBack 的配置中使用相对路径-->
    <property name="LOG_HOME" value="./logs" />

    <!-- 控制台输出 -->
    <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
        <withJansi>false</withJansi>
        <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
            <!-- 格式化输出: %d: 日期; %-5level: 级别从左显示5个字符宽度; %thread: 线程名; %logger: 类名; %M: 方法名; %line: 行号; %msg: 日志消息; %n: 换行符 -->
            <pattern>[%d{yyyy-MM-dd HH:mm:ss.SSS}] [%-5level] [%thread] [%logger{50}] [%M] [%line] - %msg%n</pattern>
            <charset>UTF-8</charset>
        </encoder>
    </appender>

    <!-- ERROR日志文件,记录错误日志 -->
    <appender name="ERROR_FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>${LOG_HOME}/${PROJECT_NAME}/error.log</file>
        <!-- 过滤器，只打印ERROR级别的日志 -->
        <filter class="ch.qos.logback.classic.filter.LevelFilter">
            <level>ERROR</level>
            <onMatch>ACCEPT</onMatch>
            <onMismatch>DENY</onMismatch>
        </filter>
        <rollingPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
            <!--日志文件输出的文件名-->
            <FileNamePattern>${LOG_HOME}/${PROJECT_NAME}/%d{yyyy-MM-dd}/error.%i.zip</FileNamePattern>
            <!--日志文件保留天数-->
            <MaxHistory>3650</MaxHistory>
            <!--日志文件最大的大小-->
            <MaxFileSize>100MB</MaxFileSize>
        </rollingPolicy>
        <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
            <!-- 格式化输出: %d: 日期; %-5level: 级别从左显示5个字符宽度; %thread: 线程名; %logger: 类名; %M: 方法名; %line: 行号; %msg: 日志消息; %n: 换行符 -->
            <pattern>[%d{yyyy-MM-dd HH:mm:ss.SSS}] [%-5level] [%thread] [%logger{50}] [%M] [%line] - %msg%n</pattern>
            <charset>UTF-8</charset>
        </encoder>
    </appender>

    <!-- INFO日志文件，用于记录重要日志信息 -->
    <appender name="INFO_FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>${LOG_HOME}/${PROJECT_NAME}/info.log</file>
        <!-- 过滤器，只打印INFO级别的日志 -->
        <filter class="ch.qos.logback.classic.filter.LevelFilter">
            <level>INFO</level>
            <onMatch>ACCEPT</onMatch>
            <onMismatch>DENY</onMismatch>
        </filter>
        <rollingPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
            <!--日志文件输出的文件名-->
            <FileNamePattern>${LOG_HOME}/${PROJECT_NAME}/%d{yyyy-MM-dd}/info.%i.zip</FileNamePattern>
            <!--日志文件保留天数-->
            <MaxHistory>3650</MaxHistory>
            <!--日志文件最大的大小-->
            <MaxFileSize>100MB</MaxFileSize>
        </rollingPolicy>
        <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
            <!-- 格式化输出: %d: 日期; %-5level: 级别从左显示5个字符宽度; %thread: 线程名; %logger: 类名; %M: 方法名; %line: 行号; %msg: 日志消息; %n: 换行符 -->
            <pattern>[%d{yyyy-MM-dd HH:mm:ss.SSS}] [%-5level] [%thread] [%logger{50}] [%M] [%line] - %msg%n</pattern>
            <charset>UTF-8</charset>
        </encoder>
    </appender>

    <!-- 打印的SQL日志文件，用于执行的SQL语句和参数信息 -->
    <appender name="SQL_FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>${LOG_HOME}/${PROJECT_NAME}/sql.log</file>
        <rollingPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
            <!--日志文件输出的文件名-->
            <FileNamePattern>${LOG_HOME}/${PROJECT_NAME}/%d{yyyy-MM-dd}/sql.%i.zip</FileNamePattern>
            <!--日志文件保留天数-->
            <MaxHistory>3650</MaxHistory>
            <!--日志文件最大的大小-->
            <MaxFileSize>100MB</MaxFileSize>
        </rollingPolicy>
        <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
            <!-- 格式化输出: %d: 日期; %-5level: 级别从左显示5个字符宽度; %thread: 线程名; %logger: 类名; %M: 方法名; %line: 行号; %msg: 日志消息; %n: 换行符 -->
            <pattern>[%d{yyyy-MM-dd HH:mm:ss.SSS}] [%-5level] [%thread] [%logger{50}] [%M] [%line] - %msg%n</pattern>
            <charset>UTF-8</charset>
        </encoder>
    </appender>

    <!-- API请求被访问的日志文件，记录请求的URL和携带的参数 -->
    <appender name="REQUEST_FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>${LOG_HOME}/${PROJECT_NAME}/request.log</file>
        <rollingPolicy class="ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy">
            <!--日志文件输出的文件名-->
            <FileNamePattern>${LOG_HOME}/${PROJECT_NAME}/%d{yyyy-MM-dd}/request.%i.zip</FileNamePattern>
            <!--日志文件保留天数-->
            <MaxHistory>3650</MaxHistory>
            <!--日志文件最大的大小-->
            <MaxFileSize>100MB</MaxFileSize>
        </rollingPolicy>
        <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
            <!-- 格式化输出: %d: 日期; %-5level: 级别从左显示5个字符宽度; %thread: 线程名; %logger: 类名; %M: 方法名; %line: 行号; %msg: 日志消息; %n: 换行符 -->
            <pattern>[%d{yyyy-MM-dd HH:mm:ss.SSS}] [%-5level] [%thread] [%logger{50}] [%M] [%line]- %msg%n</pattern>
            <charset>UTF-8</charset>
        </encoder>
    </appender>

    <!-- 异步输出INFO_FILE -->
    <appender name="ASYNC_INFO_FILE" class="ch.qos.logback.classic.AsyncAppender">
        <!-- 更改默认的队列的深度,该值会影响性能.默认值为256 -->
        <queueSize>256</queueSize>
        <!-- 默认情况下，当阻塞队列的剩余容量为20％时，它将丢弃TRACE，DEBUG和INFO级别的事件，仅保留WARN和ERROR级别的事件。要保留所有事件，请将discardingThreshold设置为0。 -->
        <discardingThreshold>0</discardingThreshold>
        <!-- 添加附加的appender,使用前面定义的name,最多只能添加一个 -->
        <appender-ref ref="INFO_FILE"/>
    </appender>

    <!-- 异步输出ERROR_FILE -->
    <appender name="ASYNC_ERROR_FILE" class="ch.qos.logback.classic.AsyncAppender">
        <!-- 更改默认的队列的深度,该值会影响性能.默认值为256 -->
        <queueSize>256</queueSize>
        <!-- 默认情况下，当阻塞队列的剩余容量为20％时，它将丢弃TRACE，DEBUG和INFO级别的事件，仅保留WARN和ERROR级别的事件。要保留所有事件，请将discardingThreshold设置为0。 -->
        <discardingThreshold>0</discardingThreshold>
        <!-- 添加附加的appender,使用前面定义的name,最多只能添加一个 -->
        <appender-ref ref="ERROR_FILE"/>
    </appender>

    <!-- 异步输出SQL_FILE -->
    <appender name="ASYNC_SQL_FILE" class="ch.qos.logback.classic.AsyncAppender">
        <!-- 更改默认的队列的深度,该值会影响性能.默认值为256 -->
        <queueSize>256</queueSize>
        <!-- 默认情况下，当阻塞队列的剩余容量为20％时，它将丢弃TRACE，DEBUG和INFO级别的事件，仅保留WARN和ERROR级别的事件。要保留所有事件，请将discardingThreshold设置为0。 -->
        <discardingThreshold>0</discardingThreshold>
        <!-- 添加附加的appender,使用前面定义的name,最多只能添加一个 -->
        <appender-ref ref="SQL_FILE"/>
    </appender>

    <!-- 异步输出REQUEST_FILE -->
    <appender name="ASYNC_REQUEST_FILE" class="ch.qos.logback.classic.AsyncAppender">
        <!-- 更改默认的队列的深度,该值会影响性能.默认值为256 -->
        <queueSize>256</queueSize>
        <!-- 默认情况下，当阻塞队列的剩余容量为20％时，它将丢弃TRACE，DEBUG和INFO级别的事件，仅保留WARN和ERROR级别的事件。要保留所有事件，请将discardingThreshold设置为0。 -->
        <discardingThreshold>0</discardingThreshold>
        <!-- 添加附加的appender,使用前面定义的name,最多只能添加一个 -->
<appender-ref ref="REQUEST_FILE"/>
</appender>
<!-- 输出error信息到文件-->
<logger name="error" additivity="true">
<appender-ref ref="ERROR_FILE"/>
</logger>
<!-- 输出info信息到文件-->
<logger name="info" additivity="true">
<appender-ref ref="INFO_FILE"/>
</logger>
<!-- 输出request信息到文件-->
<logger name="request" level="INFO" additivity="false">
<appender-ref ref="REQUEST_FILE" />
</logger>
<!-- 输出SQL到控制台和文件-->
<logger name="org.hibernate.SQL" additivity="false">
<level value="DEBUG" />
<appender-ref ref="SQL_FILE" />
</logger>
<!-- 输出SQL的参数到控制台和文件-->
<logger name="org.hibernate.type.descriptor.sql.BasicBinder" additivity="false" level="TRACE">
<level value="TRACE" />
<appender-ref ref="SQL_FILE" />
</logger>
<!-- 开发环境下的日志配置 -->
<springProfile name="dev">
<root level="INFO">
<appender-ref ref="CONSOLE" />
<appender-ref ref="ERROR_FILE" />
<appender-ref ref="INFO_FILE" />
</root>
</springProfile>
<!-- 测试环境下的日志配置 -->
<springProfile name="test">
<root level="INFO">
<appender-ref ref="CONSOLE" />
<appender-ref ref="ERROR_FILE" />
<appender-ref ref="INFO_FILE" />
</root>
</springProfile>
<!-- 生产环境下的日志配置 -->
<springProfile name="prod">
<root level="INFO">
<appender-ref ref="CONSOLE" />
<appender-ref ref="ERROR_FILE" />
<appender-ref ref="INFO_FILE" />
</root>
</springProfile>
</configuration>
```

在application.properties中通过 `logging.config=classpath:xxx.xml` 来指定配置文件。

