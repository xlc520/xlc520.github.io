---
author: xlc520
title: Java-新旧日期时间API
excerpt:
description:
date: 2023-06-06
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# Java-新旧日期时间 API

## 前言：Java 标准库 API

我们再来看一下 Java 标准库提供的 API。Java 标准库有两套处理日期和时间的 API：

- 一套定义在`java.util`这个包里面，主要包括`Date`、`Calendar`和`TimeZone`这几个类；
- 一套新的 API 是在 Java 8 引入的，定义在`java.time`这个包里面，主要包括`LocalDateTime`、`ZonedDateTime`、`ZoneId`等。

为什么会有新旧两套 API 呢？因为历史遗留原因，旧的 API 存在很多问题，所以引入了新的 API。

那么我们能不能跳过旧的 API 直接用新的 API 呢？如果涉及到遗留代码就不行，因为很多遗留代码仍然使用旧的 API，所以目前仍然需要对旧的
API 有一定了解，很多时候还需要在新旧两种对象之间进行转换。

## 一、Java 8 之前的日期时间 API

在 Java 8 之前，Java 的`java.util` 包提供了日期和时间类。利用日期时间类提供的方法，可以获取当前的日期和时间，创建日期和时间参数，计算和比较时间。主要使用的是
Date 类和 Calendar 类。

#### 1. Date 类

- Date 表示特定的瞬间，精确到毫秒。
- 在 JDK 1.1 之前，类 Date 有两个其他的函数。它允许把日期解释为年、月、日、小时、分钟和秒值。它也允许格式化和解析日期字符串。不过，这些函数的
  API 不易于实现国际化。从 JDK 1.1 开始，应使用 Calendar 类实现日期和时间字段之间转换，使用 DateFormat 类来格式化和解析日期字符串。Date
  中的相应方法已废弃（查阅自 API 文档）

#### 2. Calendar 类

- Calendar 类是一个抽象类，它为特定瞬间与一组诸如 YEAR、MONTH、DAY_OF_MONTH、HOUR 等
  日历字段之间的转换提供了一些方法，并为操作日历字段（例如获得下星期的日期）提供了一些方法。
- 瞬间可用毫秒值来表示，它是距历元（即格林威治标准时间 1970 年 1 月 1 日的 00:00:00.000，格里高利历）的偏移量。

简单说就是：`java.util.Date` 是个日期数据；`java.util.Calendar` 用于日期相关的计算。

#### 3. 存在的问题

**3.1 java.util.Date 的问题**

- 非确定（固定）的 – 日期实例不是不可变的。
- 存在并发性问题 – 日期实例是非线程安全的。
- 不正确的命名 – Date 不是“日期”，而是“时间戳”（**译者注：“泰山”不是泰山，而是一只大猩猩**）。
- 缺乏约定（规范） – 天从 1 开始，月从 0 开始，年从 1900 开始（**译者注：这是很让人摸不着头脑的**）。
- 不连续（缺乏“流畅”性） – 不能创建“持续时间”（比如：一个季度、5 分钟）或组合（比如：年+月、没有秒的日期）等。

**3.2 Java 8 之前的时间日志 API**

- System.currentTimeInMillis() 是不准确的，该 API 可以为多个连续调用返回相同的值。
- java.util.Date vs java.sql.Date– java.sql.Date 只是一个没有时间的 Date。
- java.sql.Timestamp – java.sql.Timestamp 复制 java.util.Date 但是会额外存储纳秒。

**3.3 java.util.Calendar 的问题**

- 缺乏清晰度 – 混合了日期和时间。
- 有混乱的时区支持 – 不太容易切换时区、偏移量等。
- 存在严重的格式障碍 – SimpleDateFormat 和 Calendar 不能很好地互操作。
- 带来了扩展的困难 – 通过扩展 Calendar 创建新的日历系统(因此它有所有的问题)。

- 将 java.util.Date 设定为可变类型，以及 SimpleDateFormat 的非线程安全使其应用非常受限。
  当你开始使用 Java 操作日期和时间的时候，会有一些棘手。你也许会通过 System.currentTimeMillis()来返回 1970 年 1 月 1
  日到今天的毫秒数。或者使用 Date 类来操作日期；当遇到加减月份、天数的时候你又需要用到 Calendar 类；当需要格式化日期的时候需要使用
  java.text.DateFormat 类。总而言之在 Java 中操作日期不是很方便，以至于很多开发者不得不使用第三方库，比如: joda-time。
- SimpleDateFormat 是线程不安全的类，一般不要定义为 static 变量，如果定义为 static，必须加锁，或者使用 DateUtils 工具类。
  正例：注意线程安全，使用 DateUtils。

因为 Jdk7
及以前的日期时间类的[不方便使用问题](https://link.zhihu.com/?target=https%3A//www.cnblogs.com/xkzhangsanx/p/12037775.html)
和[线程安全问题](https://link.zhihu.com/?target=https%3A//www.cnblogs.com/xkzhangsanx/p/12037915.html)等问题，2005
年，Stephen Colebourne 创建了 Joda-Time 库，作为替代的日期和时间 API。Stephen 向 JCP 提交了一个规范，他本人作为规范的领导人，该规范就是
JSR 310，在 Java8 中实现并发布。

------

## 二、 Java 8 推出了全新的日期时间 API

### 1、Java 8 新日期时间 API 介绍

> 从 Java 8 开始，`java.time`包提供了新的日期和时间 API，主要涉及的类型有：
>
> - 本地日期和时间：`LocalDateTime`，`LocalDate`，`LocalTime`；
> - 带时区的日期和时间：`ZonedDateTime`；
> - 时刻：`Instant`；
> - 时区：`ZoneId`，`ZoneOffset`；
> - 时间间隔：`Duration`。
>
> 以及一套新的用于取代`SimpleDateFormat`的格式化类型`DateTimeFormatter`。
>
> 和旧的 API 相比，新 API 严格区分了时刻、本地日期、本地时间和带时区的日期时间，并且，对日期和时间进行运算更加方便。
>
> 此外，新 API 修正了旧 API 不合理的常量设计：
>
> - Month 的范围用 1~12 表示 1 月到 12 月；
> - Week 的范围用 1~7 表示周一到周日。
>
> 最后，新 API 的类型几乎全部是不变类型（和 String 类似），可以放心使用不必担心被修改。

### 2、Java 8 日期时间 API 包介绍

- java.time 包：这是新的 Java 日期/时间 API 的基础包，所有的主要基础类都是这个包的一部分，如：LocalDate, LocalTime,
  LocalDateTime, Instant, Period, Duration 等等。所有这些类都是不可变的和线程安全的，在绝大多数情况下，这些类能够有效地处理一些公共的需求。
- java.time.chrono 包：这个包为非 ISO 的日历系统定义了一些泛化的 API，我们可以扩展 AbstractChronology 类来创建自己的日历系统。
- java.time.format 包：这个包包含能够格式化和解析日期时间对象的类，在绝大多数情况下，我们不应该直接使用它们，因为 java.time
  包中相应的类已经提供了格式化和解析的方法。
- java.time.temporal 包：这个包包含一些时态对象，我们可以用其找出关于日期/时间对象的某个特定日期或时间，比如说，可以找到某月的第一天或最后一天。你可以非常容易地认出这些方法，因为它们都具有“withXXX”的格式。
- java.time.zone 包：这个包包含支持不同时区以及相关规则的类

### 3、Java 8 日期时间 API 主要类

**Dates and Times**: 简单的日期和时间 “容器”

- Instant 存储来自 Java 纪元的时间戳 + 纳秒。
- LocalDate 存储没有时间部分的日期（日历日期）。
- LocalTime 存储没有日期部分的时间（挂钟）。
- LocalDateTime 存储日期和时间（LocalDate + Local Time）。
- ZonedDateTime 存储带有时区的日期和时间。
- OffsetTime 存储时间和与 UTC 的偏移量。
- OffsetDateTime 存储带有时间和 UTC 偏移量的日期。

**Ranges and Partials**: 时间跨度和范围

- Duration 以纳秒为单位为时间。（例如：5 分钟）
- Period 以年、月和（或）天为单位的时间。（例如：2 天）
- Month 存储月份。(例如：MARCH 三月)
- MonthDay 存储没有年份或时间的月份和日期（例如：出生日期）
- Year 存储年份。(例如：2015)
- YearMonth 存储没有日期或时间的年和月。（例如：信用卡有效期）
- DayOfWeek 单独存储一周中的某一天。（例如：WEDNESDAY 星期三）

**Chronology**: 组织和识别日期的日历系统

- Chronology 是创建或获取预建日历系统的工厂默认为 IsoChronology (例如：ThaiBuddhistChronology)。
- ChronoLocalDate 在任意年表中存储没有时间的日期。
- ChronoLocalDateTime 以任意年表存储日期和时间。
- ChronoZonedDateTime 以任意年表形式存储日期、时间和时区。
- ChronoPeriod 模拟天/时间跨度以用于任意年表。
- Era 存储时间线 [通常两个 Chronology，但有时会更多]。

### 4、Java 8 日期时间 API 的前缀列表

Java 8 日期时间 API 在操作中引入了某种对称性，从而为开发人员带来愉快的编程体验。下面是 API 中通用的方法的前缀列表。

- **of** {类工厂方法前缀} – 使用提供的参数构造一个对象——验证和构造不进行转换。示例：LocalDate.of(...) or
  Instant.ofEpochSecond(...)
- **from** {类工厂方法前缀} – 使用提供的参数构造一个对象——验证、转换和构建。示例：LocalDateTime.from(...) or
  OffsetTime.from(...)
- **parse** {类工厂方法前缀} – 通过解析提供的 CharSequence 参数获得对象。示例：LocalDate.parse(...) or
  OffsetDateTime.parse(...)
- **format** {对象方法前缀} – 使用给定的时间格式参数格式化对象。示例：localDate.format(formatter)
- **get** {对象方法前缀} – 返回目标时间对象的部分状态。示例：localDate.getDayOfWeek()
- **is** {对象方法前缀} – 查询目标时间对象的部分状态。示例：localTime.isAfter(...)
- **with** {对象方法前缀} – 对部分进行更改返回不可变时态对象的一个副本。示例：offsetTime.withHour(...)
- **plus** {对象方法前缀} – 返回具有添加时间的时间对象的副本。示例：localDate.plusWeeks(...)
- **minus** {对象方法前缀} – 返回时间对象减去时间的副本。示例：localTime.minusSeconds(...)
- **to** {对象方法前缀} – 将时间对象转换为另一种类型的新时间对象。示例：localDateTime.toLocalDate(...)
- **at** {对象方法前缀} – 使用提供的参数将时间对象组合成一个新的时间对象 。示例：localDate.atTime(...)

### 三、新旧日期时间 API 的区别

> *JDK8 的应用，可以使用 Instant 代替 Date，LocalDateTime 代替 Calendar，DateTimeFormatter 代替
SimpleDateFormat，官方给出的解释：simple beautiful strong immutable thread-safe。*
>
>
>
> mipsasm
>
> ```plain
>   JDK8的应用，可以使用Instant代替Date，LocalDateTime代替Calendar，DateTimeFormatter代替SimpleDateFormat，官方给出的解释：simple beautiful strong immutable thread-safe       ——引用《阿里巴巴Java开发手册》 
> ```

**Date**

- `Date`如果不格式化，打印出的日期可读性差

apache

```plain
Tue Sep 10 09:34:04 CST 2019
```

java.util.Date 在时间轴上表示一个时刻（一个自 UNIX 纪元以来的毫秒数的包装器），但如果调用 toString()
，结果表明它具有时区，从而引起开发人员之间的困惑。

所以通常使用`SimpleDateFormat`对时间进行格式化，但`SimpleDateFormat`是线程不安全的。

`Date`对时间处理比较麻烦，比如想获取某年、某月、某星期，以及`n`天以后的时间，如果用`Date`
来处理的话真是太难了，你可能会说`Date`类不是有`getYear`、`getMonth`这些方法吗，获取年月日很`Easy`，但都被弃用了啊

**Calendar**

- calendar 是共享变量，并且这个共享变量没有做线程安全控制。当多个线程同时使用相同的 SimpleDateFormat 对象【如用 static 修饰的
  SimpleDateFormat】调用 format 方法时，多个线程会同时调用 calendar.setTime 方法，可能一个线程刚设置好 time 值另外的一个线程马上把设置的
  time 值给修改了导致返回的格式化时间可能是错误的。在多并发情况下使用 SimpleDateFormat 需格外注意 SimpleDateFormat 除了
  format 是线程不安全以外，parse 方法也是线程不安全的。parse 方法实际调用 alb.establish(calendar).getTime()
  方法来解析，alb.establish(calendar)方法里主要完成了

**LocalDate 和 LocalTime**

LocalDate 和 LocalTime 是本地的，没有时区，因为它们从观察者的角度表示日期和时间，例如桌子上的日历或墙上的时钟。
还有一种称为复合类`LocalDateTime`，这是一个配对 LocalDate 和 LocalTime。

`LocalDateTime`：`Date`有的我都有，`Date`没有的我也有

**ZonedDateTime**

`ZonedDateTime`是具有完全限定时区的日期和时间。这样可以解决任何时间点的偏移。

> 旧 API 中时间相关的类
>
> 1、java.util.Date
>
> 2~4、java.sql.Date java.sql.Time java.sql.Timestamp
>
> 5、java.text.SimpleDateFormat
>
> 6、java.util.Calendar
> java.util.Date 日期格式为：年月日时分秒
> java.sql.Date 日期格式为：年月日
> java.sql.Time 日期格式为：时分秒
> java.sql.Timestamp 日期格式为：年月日时分秒纳秒（毫微秒）
>
> 【强制】获取当前毫秒数︰System.currentTimeMillis();而不是 new Date().getTime()。说明︰如果想获取更加精确的纳秒级时间值，使用
> System.nanoTime 的方式。在 JDK8 中，针对统计时间等场景，推荐使用 Instant 类。
>
> 【强制】不允许在程序任何地方中使用:1 ) java.sql.Date 2 ) java.sql.Time 3 )java.sql.Timestamp。
> 说明︰第 1 个不记录时间，getHours()抛出异常﹔第 2 个不记录日期，getYear()抛出异常;第 3 个在构造方法 super((time/1000)*
> 1000)，
> fastTime 和 nanos 分开存储秒和纳秒信息。
> 反例: java.util.Date.after(Date)进行时间比较时，当入参是 java.sql.Timestamp 时，会触发 JDKBUG(JDK9 已修复)，可能导致比较时的意外结果。

------

## 四、Java 8 日期时间 API 的使用

在教程中我们将通过一些简单的实例来学习如何使用新 API，因为只有在实际的项目中用到，才是学习新知识以及新技术最快的方式。

### 1.LocalDate

LocalDate 表示在 ISO 格式（YYYY-MM-DD）下的不带具体时间的日期。

常用于表示生日或者我们最关心的发工资的日期。

#### (1) 获取当前的日期和自定义日期

Java 8 中的 LocalDate 用于表示当天日期。和 java.util.Date 不同，它只有日期，不包含时间。当你仅需要表示日期时就用这个类。

除了 LocalDate.now()获取今天日期外，我们还可以调用另一个有用的工厂方法 LocalDate.of() 和 LocalDate.prase()创建任意日期，
该方法需要传入年、月、日做参数，返回对应的 LocalDate 实例。这个方法的好处是没再犯老 API 的设计错误，比如年度起始于 1900，月份是从
0 开始等等。日期所见即所得，就像下面这个例子表示了 2 月 20 日，直接明了。

```java
public void getCurrentDate(){
    //LocalDate获取今天的日期或者自定义日期
    LocalDate today = LocalDate.now();
    System.out.println("Today's Local date : " + today);
    //这个是Date类的方法
    Date date = new Date();
    System.out.println(date);
    //表示特定日，月和年的LocalDate可以使用of方法或使用parse方法获得
    LocalDate.of(2021, 02, 20);
 LocalDate.parse("2021-02-20");
}
```

上面的代码创建了当天的日期，不含时间信息。打印出的日期格式非常友好，不像 Date 类 打印出一堆没有格式化的信息。

#### (2) 获取年、月、日信息

LocalDate 提供了获取年、月、日的快捷方法，其实例还包含很多其它的日期属性。通过调用这些方法就可以很方便的得到需要的日期信息，不用像以前一样需要依赖
java.util.Calendar 类了。

```java
//获取年、月、日信息
public void getDetailDate(){
    LocalDate today = LocalDate.now();
    int year = today.getYear();
    int month = today.getMonthValue();
    int day = today.getDayOfMonth();
    System.out.printf("Year : %d  Month : %d  day : %d t %n", year, month, day);
    
    //以下代码段获取当前本地日期并添加一天：
    LocalDate tomorrow = LocalDate.now().plusDays(1);
    //此示例获取当前日期并减去一个月。请注意它是如何接受枚举作为时间单位的：
    LocalDate previousMonthSameDay = LocalDate.now().minus(1, ChronoUnit.MONTHS);
    
    DayOfWeek sunday = LocalDate.parse("2016-06-12").getDayOfWeek();
 int twelve = LocalDate.parse("2016-06-12").getDayOfMonth();
}
```

#### (3) 判断两个日期是否相等

现实生活中有一类时间处理就是判断两个日期是否相等。在项目开发的时候总会遇到这样子的问题。
下面这个例子会帮助你用 Java 8 的方式去解决，LocalDate 重载了 equal 方法。

> 注意，如果比较的日期是字符型的，需要先解析成日期对象再作判断。

请看下面的例子：

```java
//判断两个日期是否相等
public void compareDate(){
    LocalDate today = LocalDate.now();
    LocalDate date1 = LocalDate.of(2018, 01, 21);

    if(date1.equals(today)){
           System.out.printf("TODAY %s and DATE1 %s are same date %n", today, date1);
    }
    //判断是否
    boolean notBefore = LocalDate.parse("2016-06-12").isBefore(LocalDate.parse("2016-06-11"));
 boolean isAfter = LocalDate.parse("2016-06-12").isAfter(LocalDate.parse("2016-06-11"));
 
}
```

#### (4) 判断日期是早于还是晚于另一个日期

LocalDate 类有两类方法 isBefore() 和 isAfter() 用于比较日期。调用 isBefore() 方法时，如果给定日期小于当前日期则返回 true。

```java
//如何用Java判断日期是早于还是晚于另一个日期
public void isBeforeOrIsAfter(){
    LocalDate today = LocalDate.now(); 

    LocalDate tomorrow = LocalDate.of(2018, 1, 29);
    if(tomorrow.isAfter(today)){
        System.out.println("Tomorrow comes after today");
    }

    //减去一天
    LocalDate yesterday = today.minus(1, ChronoUnit.DAYS);

    if(yesterday.isBefore(today)){
        System.out.println("Yesterday is day before today");
    }
}
```

#### (5) 计算两个日期相差总天数

<https://blog.csdn.net/peng2hui1314/article/details/106495095>

JDK 8 提供了新的日期类 `LocalDate` ，通过 `LocalDate` 可以轻松的对日期进行操作，在实际的开发过程中也会经常需要计算两个日期相差的天数。

```java
// 指定转换格式
DateTimeFormatter fmt = DateTimeFormatter.ofPattern("yyyy-MM-dd");

LocalDate startDate = LocalDate.parse("2019-03-01",fmt);
LocalDate endDate = LocalDate.parse("2020-04-02",fmt);

System.out.println("总相差的天数:" + startDate.until(endDate, ChronoUnit.DAYS));
System.out.println("总相差的月数:" + startDate.until(endDate, ChronoUnit.MONTHS));
System.out.println("总相差的年数:" + startDate.until(endDate, ChronoUnit.YEARS));
```

> 输出结果：总相差的天数:398 总相差的月数:13 总相差的年数:1

#### (6) 检查闰年

LocalDate 类有一个很实用的方法 isLeapYear() 判断该实例是否是一个闰年，如果你还是想重新发明轮子，这有一个代码示例，纯 Java
逻辑编写的判断闰年的程序。

```java
//检查闰年
public void isLeapYear(){
    LocalDate today = LocalDate.now();
    if(today.isLeapYear()){
        System.out.println("This year is Leap year");
    }else {
        System.out.println("2018 is not a Leap year");
    }
}
```

### 2.LocalTime

与 获取日期 例子很像，获取时间使用的是 LocalTime 类，一个只有时间没有日期的 LocalDate 近亲。可以调用静态工厂方法 now()
来获取当前时间。默认的格式是 hh:mm:ss:nnn。

```java
//获取当前时间
public void getCurrentTime(){
    LocalTime time = LocalTime.now();
    System.out.println("local time now : " + time);
}

//在下面的代码示例中，我们通过解析字符串表示创建表示06:30 AM 的LocalTime：
LocalTime sixThirty = LocalTime.parse("06:30");

//方法“of”可用于创建LocalTime。例如，下面的代码使用“of”方法创建表示06:30 AM的LocalTime：
LocalTime sixThirty = LocalTime.of(6, 30);

//下面的示例通过解析字符串来创建LocalTime，并使用“plus”API为其添加一小时。结果将是代表07:30 AM的LocalTime：
LocalTime sevenThirty = LocalTime.parse("06:30").plus(1, ChronoUnit.HOURS);

//各种getter方法可用于获取特定的时间单位，如小时，分钟和秒，如下所示获取小时：
int hour = localTime.getHour();    // 结果：13
int minute = localTime.getMinute();  // 结果：51
int second = localTime.getSecond();   // 结果：10

//同LocalDate一样检查特定时间是否在另一特定时间之前或之后。下面的代码示例比较结果为true的两个LocalTime：
boolean isbefore = LocalTime.parse("06:30").isBefore(LocalTime.parse("07:30"));

//Java 8 提供了更好的 plusHours() 方法替换 add() ，并且是兼容的。注意，这些方法返回一个全新的LocalTime实例，由于其不可变性，返回后一定要用变量赋值。 
LocalTime time = LocalTime.now();
LocalTime newTime = time.plusHours(2); // 增加两小时
System.out.println("Time after 2 hours : " +  newTime);

//一天中的最大，最小和中午时间可以通过LocalTime类中的常量获得。在执行数据库查询以查找给定时间范围内的记录时，这非常有用。例如，下面的代码代表23：59：59.99：
LocalTime maxTime = LocalTime.MAX
```

### 3.LocalDateTime

LocalDateTime 用于表示日期和时间的组合。当我们需要结合日期和时间时，这是最常用的类。该类提供了各种 API，我们将介绍一些最常用的
API。

类似于 LocalDate 和 LocalTime 从系统时钟获取 LocalDateTime 的实例：

```java
// 获取当前日期时间
LocalDateTime.now();

//下面的代码示例解释了如何使用工厂“of”和“parse”方法创建实例。结果将是代表2015年2月20日06:30 AM 的LocalDateTime实例：
LocalDateTime.of(2015, Month.FEBRUARY, 20, 06, 30);
LocalDateTime.parse("2015-02-20T06:30:00");

// 设置日期
LocalDateTime localDateTime1 = LocalDateTime.of(2019, Month.SEPTEMBER, 10, 14, 46, 56);
LocalDateTime localDateTime2 = LocalDateTime.of(localDate, localTime);
LocalDateTime localDateTime3 = localDate.atTime(localTime);
LocalDateTime localDateTime4 = localTime.atDate(localDate);

//Getter方法可用于提取类似于日期和时间类的特定单位。鉴于上面的LocalDateTime实例，下面的代码示例将返回2月份的月份：
localDateTime.getMonth();

// 由localDateTime获取LocalDate
LocalDate localDate2 = localDateTime.toLocalDate();
// 由localDateTime获取LocalTime
LocalTime localTime2 = localDateTime.toLocalTime();
//LocalDate 转 LocalDateTime:一般调用 atTime() 方法进行赋值
LocalDate localDate = LocalDate.now();
LocalDateTime localDateTime1 = localDate.atStartOfDay();
LocalDateTime localDateTime2 = localDate.atTime(8,20,33);
LocalDateTime localDateTime3 = localDate.atTime(LocalTime.now());

//有一些实用的API可以支持特定时间单位的时间运算，例如天，月，年和分钟。以下代码示例演示了“加”和“减”方法的用法。这些API的行为与LocalDate和LocalTime中的 API完全相同
// 创建日期：2019-09-10 14:46:56
LocalDateTime localDateTime = LocalDateTime.of(2019, Month.SEPTEMBER, 10, 14, 46, 56);
//增加一年
localDateTime = localDateTime.plusYears(1);  //结果： 2020-09-10 14:46:56
localDateTime = localDateTime.plus(1, ChronoUnit.YEARS); //结果： 2021-09-10 14:46:56
//减少一个月
localDateTime = localDateTime.minusMonths(1);  //结果： 2021-08-10 14:46:56
localDateTime = localDateTime.minus(1, ChronoUnit.MONTHS); //结果： 2021-07-10 14:46:56
//LocalDateTime提供了对日期和时间进行加减的非常简单的链式调用， 加5天减3小时:
LocalDateTime dt = localDateTime.plusDays(5).minusHours(3);

//注意到月份加减会自动调整日期，例如从2019-10-31减去1个月得到的结果是2019-09-30，因为9月没有31日。
```

对日期和时间进行调整则使用`withXxx()`方法，例如：`withHour(15)`会把`10:11:12`变为`15:11:12`：

- 调整年：withYear()
- 调整月：withMonth()
- 调整日：withDayOfMonth()
- 调整时：withHour()
- 调整分：withMinute()
- 调整秒：withSecond()

```java
//通过with修改某些值，年月日时分秒都可以通过with方法设置。
//修改年为2019
localDateTime = localDateTime.withYear(2020);
//修改为2022
localDateTime = localDateTime.with(ChronoField.YEAR, 2022);

//同样注意到调整月份时，会相应地调整日期，即把2019-10-31的月份调整为9时，日期也自动变为30。
//实际上，LocalDateTime还有一个通用的with()方法允许我们做更复杂的运算。例如：
public class Main {
    public static void main(String[] args) {
        // 本月第一天0:00时刻:
        LocalDateTime firstDay = LocalDate.now().withDayOfMonth(1).atStartOfDay();
        System.out.println(firstDay);

        // 本月最后1天:
        LocalDate lastDay = LocalDate.now().with(TemporalAdjusters.lastDayOfMonth());
        System.out.println(lastDay);

        // 下月第1天:
        LocalDate nextMonthFirstDay = LocalDate.now().with(TemporalAdjusters.firstDayOfNextMonth());
        System.out.println(nextMonthFirstDay);

        // 本月第1个周一:
        LocalDate firstWeekday = LocalDate.now().with(TemporalAdjusters.firstInMonth(DayOfWeek.MONDAY));
        System.out.println(firstWeekday);
    }
}
```

*同样注意到调整月份时，会相应地调整日期，即把`2019-10-31`的月份调整为`9`时，日期也自动变为`30`。

**使用 TemporalAdjusters 进行 with 方法的更复杂运算**

实际上，`LocalDateTime`还有一个通用的`with()`方法允许我们做更复杂的运算。例如：

```java
public class Main {
    public static void main(String[] args) {
        // 本月第一天0:00时刻:
        LocalDateTime firstDay = LocalDate.now().withDayOfMonth(1).atStartOfDay();
        System.out.println(firstDay);

        // 本月最后1天:
        LocalDate lastDay = LocalDate.now().with(TemporalAdjusters.lastDayOfMonth());
        System.out.println(lastDay);

        // 下月第1天:
        LocalDate nextMonthFirstDay = LocalDate.now().with(TemporalAdjusters.firstDayOfNextMonth());
        System.out.println(nextMonthFirstDay);

        // 本月第1个周一:
        LocalDate firstWeekday = LocalDate.now().with(TemporalAdjusters.firstInMonth(DayOfWeek.MONDAY));
        System.out.println(firstWeekday);
    }
}
```

### 4.ZonedDateTime

Java 8 不仅分离了日期和时间，也把时区分离出来了。现在有一系列单独的类如 ZoneId 来处理特定时区，ZoneDateTime 类来表示某时区下的时间。

当我们需要处理时区特定的日期和时间时，Java 8 提供了 ZonedDateTime 类。ZoneID 是用于表示不同区域的标识符。大约有 40
个不同的时区，使用 ZoneID 表示它们，如下所示：

```java
//下面的代码我们来获取下“亚洲/上海”时区:
ZoneId zoneId = ZoneId.of("Aisa/Shanghai");

//获取所有的时区：
Set<String> allZoneIds = ZoneId.getAvailableZoneIds();

//ZonedDateTime提供解析方法来获取时区的特定日期时间：
ZonedDateTime.parse("2015-05-03T10:15:30+01:00[Aisa/Shanghai]");

//使用时区的另一种方法是使用OffsetDateTime。OffsetDateTime是具有偏移量的日期时间的不可变表示形式。此类存储所有日期和时间字段，精确到纳秒，以及从UTC/格林威治的偏移量。可以使用ZoneOffset创建OffsetDateTime实例。这里我们创建一个LocalDateTime来表示2015年2月20日上午6:30：
LocalDateTime localDateTime = LocalDateTime.of(2015, Month.FEBRUARY, 20, 06, 30);

//然后我们通过创建ZoneOffset并为LocalDateTime实例设置来增加两个小时：
ZoneOffset offset = ZoneOffset.of("+02:00");
OffsetDateTime offSetByTwo = OffsetDateTime.of(localDateTime, offset);

//获取特定时区下面的时间
ZoneId america = ZoneId.of("America/New_York");
LocalDateTime localtDateAndTime = LocalDateTime.now();
ZonedDateTime dateAndTimeInNewYork  = ZonedDateTime.of(localtDateAndTime, america );
System.out.println("现在的日期和时间在特定的时区 : " + dateAndTimeInNewYork);
```

### 5.Instant

计算机存储的当前时间，本质上只是一个不断递增的整数。Java 提供的`System.currentTimeMillis()`返回的就是以毫秒表示的当前时间戳。

这个当前时间戳在`java.time`中以`Instant`类型表示，我们用`Instant.now()`获取当前时间戳，效果和`System.currentTimeMillis()`
类似。

实际上，`Instant`内部只有两个核心字段：一个是以秒为单位的时间戳，一个是更精确的纳秒精度。它和`System.currentTimeMillis()`
返回的`long`相比，只是多了更高精度的纳秒。如果只是为了获取秒数或者毫秒数，使用 System.currentTimeMillis()来得更为方便.

```java
// 创建Instant对象
Instant instant = Instant.now();
// 获取秒
long currentSecond = instant.getEpochSecond();
// 获取毫秒
long currentMilli = instant.toEpochMilli();
```

既然`Instant`就是时间戳，那么，给它附加上一个时区，就可以创建出`ZonedDateTime`：

```java
// 以指定时间戳创建Instant:
Instant ins = Instant.ofEpochSecond(1568568760);
ZonedDateTime zdt = ins.atZone(ZoneId.systemDefault());
System.out.println(zdt); // 2019-09-16T01:32:40+08:00[Asia/Shanghai]
```

可见，对于某一个时间戳，给它关联上指定的`ZoneId`，就得到了`ZonedDateTime`，继而可以获得了对应时区的`LocalDateTime`。

所以，`LocalDateTime`，`ZoneId`，`Instant`，`ZonedDateTime`和`long`都可以互相转换。

### 6.OffSetDateTime 包含时差信息的日期和时间

ZoneOffset 类用来表示时区，举例来说印度与 GMT 或 UTC 标准时区相差+05:30，可以通过 ZoneOffset.of()静态方法来
获取对应的时区。一旦得到了时差就可以通过传入 LocalDateTime 和 ZoneOffset 来创建一个 OffSetDateTime 对象。

```java
public void ZoneOffset(){
    LocalDateTime datetime = LocalDateTime.of(2018, Month.FEBRUARY, 14, 19, 30);
    ZoneOffset offset = ZoneOffset.of("+05:30");
    OffsetDateTime date = OffsetDateTime.of(datetime, offset);  
    System.out.println("Date and Time with timezone offset in Java : " + date);
}
```

### 7.使用 Period 和 Duration

- Period : 用于计算两个日期（年月日）间隔。

- Duration : 用于计算两个时间（秒，纳秒）间隔。

- 在 Java8 中，我们可以使用以下类来计算日期时间差异：1.Period 2.Duration 3.ChronoUnit

  > <https://blog.csdn.net/qq_26974471/article/details/89151345>

#### **Period 类**

```java
public static void main(String[] args) {
    LocalDate today = LocalDate.now();
    System.out.println("Today : " + today);
    LocalDate birthDate = LocalDate.of(1993, Month.OCTOBER, 19);
    System.out.println("BirthDate : " + birthDate);

    Period p = Period.between(birthDate, today);
    System.out.printf("年龄 : %d 年 %d 月 %d 日", p.getYears(), p.getMonths(), p.getDays());
}
```

> 结果:
>
> Today : 2017-06-16
> BirthDate : 1993-10-19
> 年龄 : 23 年 7 月 28 日

```java
//Period 类被广泛地用于修改给定的日期的值或者获取两个日期之间的差值：
LocalDate initialDate = LocalDate.parse("2007-05-10");
LocalDate finalDate = initialDate.plus(Period.ofDays(5));
//Period 类有各种getter方法，如getYears，getMonths和getDays从获取值周期对象。下面的代码示例返回一个int值为5，是基于上面示例的逆序操作：
int five = Period.between(finalDate, initialDate).getDays();
//该Period 可以在特定的单元获得两个日期之间的如天或月或数年，使用ChronoUnit.between：
int five = ChronoUnit.DAYS.between(finalDate , initialDate);
```

#### **Duration 类**

类似 Period ，该 Duration 类是用来处理时间。

```java
//我们创建一个本地时间上午6:30，然后加30秒的持续时间，以使本地时间上午6时三十〇分30秒的：
LocalTime initialTime = LocalTime.of(6, 30, 0);
LocalTime finalTime = initialTime.plus(Duration.ofSeconds(30));

//两个时刻之间的持续时间可以作为持续时间或作为特定单位获得。在第一个代码片段中，我们使用Duration类的between（）方法来查找finalTime和initialTime之间的时间差，并以秒为单位返回差异：
int thirty = Duration.between(finalTime, initialTime).getSeconds();

//在第二个例子中，我们使用ChronoUnit类的between（）方法来执行相同的操作：
int thirty = ChronoUnit.SECONDS.between(finalTime, initialTime);
```

#### **计算两个日期之间的天数和月数**

有一个常见日期操作是计算两个日期之间的天数、周数或月数。在 Java 8 中可以用 java.time.Period
类来做计算。下面这个例子中，我们计算了当天和将来某一天之间的月数。

下面的例子：现在是一月份，距离到五月份，中间相隔 3 月

```java
//计算两个日期之间的天数和月数
public void calcDateDays(){
    LocalDate today = LocalDate.now();

    LocalDate java8Release = LocalDate.of(2018, Month.MAY, 14);

    Period periodToNextJavaRelease = Period.between(today, java8Release);

    System.out.println("Months left between today and Java 8 release : "
                                           + periodToNextJavaRelease.getMonths() );
}
```

在使用 Java8 新特性中关于 Period.between 的方法时需注意该方法获取日期的区间问题。

```java
@Test
public void test1(){
 LocalDate from = LocalDate.of(2018,10,1);
 System.out.println(Period.between(from,LocalDate.now()).getDays());
}
```

首先，猜测一下上面的代码返回的天数是多少？15 天，你猜对了吗？

如果不理解为什么是 15 天，那么咱们再打印一下其他的心气，你可能就明白了。

```java
@Test
public void test1(){
 LocalDate from = LocalDate.of(2017,9,1);
 Period period = Period.between(from,LocalDate.now());

 System.out.println("2017-09-01到当前日期" + LocalDate.now());
 System.out.println("距离当前多少年：" + period.getYears());
 System.out.println("距离当前多少月：" + period.getMonths());
 System.out.println("距离当前多少日：" + period.getDays());
}
```

在此执行程序，打印日志如下：

> 2017-09-01 到当前日期 2019-10-16
> 距离当前多少年：2
> 距离当前多少月：1
> 距离当前多少日：15

看了下面的日志信息，明白是怎么回事了吧。Period 中时间区间如果是 2 年 1 个月 15 天。那么通过 getDays()方法获得就是第三个存储
15 天。而不是 2 年 1 个月 15 天总共有多少天。

那么如果想算两个日期直接的距离该怎么办呢？可采用下面的方法。

```java
@Testpublic void test2() { 
 LocalDate from = LocalDate.of(2017, 9, 1); 
    long day = LocalDate.now().toEpochDay() - from.toEpochDay();
    System.out.println("距离当前多少日：" + day);
}
```

执行结果为：

> 距离当前多少日：775

### 8.日期计算

#### **（1）ChronoUnit**

一组标准的日期时间单位。

这组单元提供基于单元的访问来操纵日期，时间或日期时间。 可以通过实现 TemporalUnit 来扩展标准单元集。

这些单元适用于多个日历系统。

例如，大多数非 ISO 日历系统定义年，月和日的单位，只是略有不同的规则。 每个单元的文档说明了它的运作方式。

这是一个最终的、不可变的和线程安全的枚举。

```java
LocalDate startDate = LocalDate.of(2020, 2, 20);
LocalDate endDate = LocalDate.of(2021, 1, 15);
long years = ChronoUnit.YEARS.between(startDate, endDate);
long months = ChronoUnit.MONTHS.between(startDate, endDate);
long weeks = ChronoUnit.WEEKS.between(startDate, endDate);
long days = ChronoUnit.DAYS.between(startDate, endDate);
long hours = ChronoUnit.HOURS.between(startDate, endDate);
long minutes = ChronoUnit.MINUTES.between(startDate, endDate);
long seconds = ChronoUnit.SECONDS.between(startDate, endDate);
long milis = ChronoUnit.MILLIS.between(startDate, endDate);
long nano = ChronoUnit.NANOS.between(startDate, endDate);
```

**plus() 测试**

```java
@Test
public void testChromoUnitsPlus() {
    //Get the current date
    LocalDate today = LocalDate.now();
    System.out.println("Current date: " + today);
    //add 1 week to the current date
    LocalDate nextWeek = today.plus(1, ChronoUnit.WEEKS);
    System.out.println("Next week: " + nextWeek);
    //add 1 month to the current date
    LocalDate nextMonth = today.plus(1, ChronoUnit.MONTHS);
    System.out.println("Next month: " + nextMonth);
    //add 1 year to the current date
    LocalDate nextYear = today.plus(1, ChronoUnit.YEARS);
    System.out.println("Next year: " + nextYear);
    //add 10 years to the current date
    LocalDate nextDecade = today.plus(1, ChronoUnit.DECADES);
    System.out.println("Date after ten year: " + nextDecade);
}
```

**between**

```java
@Test
public void testChromoUnitsBetween() {
    //Get the current date
    LocalDate today = LocalDate.now();
    LocalDate nextWeek = today.plus(1, ChronoUnit.WEEKS);
    long diff = ChronoUnit.WEEKS.between(today, nextWeek);
    Assert.assertEquals(1, diff);
}
```

**如何计算一个星期之后的日期**

和上个例子计算两小时以后的时间类似，这个例子会计算一周后的日期。LocalDate 日期不包含时间信息，它的 plus()
方法用来增加天、周、月，ChronoUnit 类声明了这些时间单位。由于 LocalDate 也是不变类型，返回后一定要用变量赋值。

可以用同样的方法增加 1 个月、1 年、1 小时、1 分钟甚至一个世纪，更多选项可以查看 Java 8 API 中的 ChronoUnit 类。

```java
//如何计算一周后的日期
public void nextWeek(){
    LocalDate today = LocalDate.now();
    LocalDate nextWeek = today.plus(1, ChronoUnit.WEEKS);    //使用变量赋值
    System.out.println("Today is : " + today);
    System.out.println("Date after 1 week : " + nextWeek);
}
```

**计算一年前或一年后的日期**

接着上面的例子中我们通过 LocalDate 的 plus() 方法增加天数、周数或月数，这个例子我们利用 minus() 方法计算一年前的日期。

```java
//计算一年前或一年后的日期
public void minusDate(){
    LocalDate today = LocalDate.now();
    LocalDate previousYear = today.minus(1, ChronoUnit.YEARS);
    System.out.println("Date before 1 year : " + previousYear);

    LocalDate nextYear = today.plus(1, ChronoUnit.YEARS);
    System.out.println("Date after 1 year : " + nextYear);
}
```

#### **（2）TemporalAdjuster**

java 8 引入了新的日期、时间库————即 java.time 包，TemporalAdjuster 类是其中之一。

简而言之，TemporalAdjuster 类是调整 Temporal 对象的策略。在使用 TemporalAdjuster 类之前，我们先看看 Temporal
接口。比如有些时候想知道这个月的最后一天是几号、下个周末是几号，通过提供的时间和日期 API 可以很快得到答案
。TemporalAdjusters 提供的各种日期时间格式化的静态类，比如 firstDayOfYear 是当前日期所属年的第一天

TemporalAdjuster 是函数接口，在 TemporalAdjusters 类中有很多预定义的实现。TemporalAdjuster 仅有一个带 Temporal 对象参数的抽象方法
adjustInto()。

TemporalAdjuster 可以执行复杂的日期操作，例如，可以获得下一个星期日对于日期、当月的最后一天、下一年的第一天。当然也可以通过旧的
java.util.Calendar api 实现。不同的是，新 api 使用预定义的实现抽象出底层逻辑。

TemporalAdjusters 类有很多预定义的 static 方法返回 TemporalAdjuster 对象，使用不同方式调节 Temporal 对象而与 Temporal
实现无关。

下面列举部分方法及其定义描述：

- dayOfWeekInMonth() – 一周中的某一天，例如，三月中第二个星期二
- firstDayOfMonth() – 当前月的第一天
- firstDayOfNextMonth() – 下一个月的第一天
- firstDayOfNextYear() – 下一年的第一天
- firstDayOfYear() – 当年的第一天
- lastDayOfMonth() – 当月的最后一天
- nextOrSame() – 下一次或当天发生的一周中的某天

```plain
LocalDate localDate = LocalDate.now();
LocalDate localDate1 = localDate.with(TemporalAdjusters.firstDayOfYear());
```

参考链接：<https://blog.csdn.net/neweastsun/article/details/88777896>

### 9.日期和时间格式化

使用旧的`Date`对象时，我们用`SimpleDateFormat`进行格式化显示。使用新的`LocalDateTime`或`ZonedLocalDateTime`
时，我们要进行格式化显示，就要使用`DateTimeFormatter`。

和`SimpleDateFormat`不同的是，`DateTimeFormatter`
不但是不变对象，它还是线程安全的。线程的概念我们会在后面涉及到。现在我们只需要记住：因为`SimpleDateFormat`
不是线程安全的，使用的时候，只能在方法内部创建新的局部变量。而`DateTimeFormatter`可以只创建一个实例，到处引用。

创建`DateTimeFormatter`时，我们仍然通过传入格式化字符串实现：

```java
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");
```

格式化字符串的使用方式与`SimpleDateFormat`完全一致。

另一种创建`DateTimeFormatter`的方法是，传入格式化字符串时，同时指定`Locale`：

```java
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("E, yyyy-MMMM-dd HH:mm", Locale.US);
```

Java 8 提供了用于轻松格式化日期和时间的 API ：

```java
//LocalDate的格式化
LocalDate localDate = LocalDate.of(2019, 9, 10);
String s1 = localDate.format(DateTimeFormatter.BASIC_ISO_DATE);
String s2 = localDate.format(DateTimeFormatter.ISO_LOCAL_DATE);
//自定义格式化
DateTimeFormatter dateTimeFormatter =   DateTimeFormatter.ofPattern("yyyy-MM-dd");
String s3 = localDate.format(dateTimeFormatter);


//LocalDateTime的格式化
LocalDateTime localDateTime = LocalDateTime.of(2021, Month.JANUARY, 25, 6, 30);
//以下代码传递ISO日期格式以格式化本地日期。结果将是2021-01-25：
String localDateString = localDateTime.format(DateTimeFormatter.ISO_DATE);
//该DateTimeFormatter提供多种标准格式选项。也可以提供自定义模式来格式化方法，如下所示，它将返回LocalDate为2021/01/25：
localDateTime.format(DateTimeFormatter.ofPattern(""));
//我们可以将格式样式传递为SHORT，LONG或MEDIUM作为格式化选项的一部分。下面的代码示例输出2021年1月25日06:30:00 me的输：
localDateTime
 .format(DateTimeFormatter.ofLocalizedDateTime(FormatStyle.MEDIUM)
 .withLocale(Locale.UK);
         
//解析时间。和SimpleDateFormat相比，DateTimeFormatter是线程安全的
LocalDate localDate1 = LocalDate.parse("20190910", DateTimeFormatter.BASIC_ISO_DATE);
LocalDate localDate2 = LocalDate.parse("2019-09-10", DateTimeFormatter.ISO_LOCAL_DATE);
```

Java 8 引入了全新的日期时间格式工具，线程安全而且使用方便。它自带了一些常用的内置格式化工具。

下面这个例子使用了 BASIC_ISO_DATE 格式化工具将 2018 年 2 月 10 日格式化成 20180210。

```java
// 使用预定义的格式化工具去解析或格式化日期
public void formateDate(){
    String dayAfterTommorrow = "20180210";
    LocalDate formatted = LocalDate.parse(dayAfterTommorrow, DateTimeFormatter.BASIC_ISO_DATE);
    System.out.printf("Date generated from String %s is %s %n", dayAfterTommorrow, formatted);
}
```

### 10. MonthDay 和 YearMonth

**(1) 检查像生日这种周期性事件**

Java 中另一个日期时间的处理就是检查类似生日、纪念日、法定假日（国庆以及春节）、或者每个月固定时间发送邮件给客户 这些周期性事件。

Java 中如何检查这些节日或其它周期性事件呢？答案就是 MonthDay 类。这个类组合了月份和日，去掉了年，这意味着你可以用它判断每年都会发生事件。Java
知音公众号内回复“面试题聚合”，送你一份面试题宝典

和这个类相似的还有一个 YearMonth 类。这些类也都是不可变并且线程安全的值类型。下面我们通过 MonthDay 来检查周期性事件：

```java
//处理周期性的日期
public void cycleDate(){
    LocalDate today = LocalDate.now();
    LocalDate dateOfBirth = LocalDate.of(2018, 01, 21);

    MonthDay birthday = MonthDay.of(dateOfBirth.getMonth(), dateOfBirth.getDayOfMonth());
    MonthDay currentMonthDay = MonthDay.from(today);

    if(currentMonthDay.equals(birthday)){
       System.out.println("Many Many happy returns of the day !!");
    }else{
       System.out.println("Sorry, today is not your birthday");
    } 
}
```

**(2)如何体现出固定日期**

例如：表示信用卡到期这类固定日期。与 MonthDay 检查重复事件的例子相似，YearMonth 是另一个组合类，用于表示信用卡到期日、FD
到期日、期货期权到期日等。

还可以用这个类得到 当月共有多少天，YearMonth 实例的 lengthOfMonth() 方法可以返回当月的天数，在判断 2 月有 28 天还是 29
天时非常有用。

```java
//使用 YearMonth类处理特定的日期
public void checkCardExpiry(){
    YearMonth currentYearMonth = YearMonth.now();
    System.out.printf("Days in month year %s: %d%n", currentYearMonth, currentYearMonth.lengthOfMonth());

    YearMonth creditCardExpiry = YearMonth.of(2028, Month.FEBRUARY);
    System.out.printf("Your credit card expires on %s %n", creditCardExpiry);
}
```

### 11.新旧 API 的转换

由于 Java 提供了新旧两套日期和时间的 API，除非涉及到遗留代码，否则我们应该坚持使用新的 API。

如果需要与遗留代码打交道，如何在新旧 API 之间互相转换呢？

#### （1）把旧式的`Date`或`Calendar`转换为新 API 对象

如果要把旧式的`Date`或`Calendar`转换为新 API 对象，可以通过`toInstant()`方法转换为`Instant`
对象，再继续转换为`ZonedDateTime`：

```java
// Date -> Instant:
Instant ins1 = new Date().toInstant();

// Calendar -> Instant -> ZonedDateTime:
Calendar calendar = Calendar.getInstance();
Instant ins2 = calendar.toInstant();
ZonedDateTime zdt = ins2.atZone(calendar.getTimeZone().toZoneId());
```

从上面的代码还可以看到，旧的`TimeZone`提供了一个`toZoneId()`，可以把自己变成新的`ZoneId`。

#### （2）把新的`ZonedDateTime`转换为旧的 API 对象

如果要把新的`ZonedDateTime`转换为旧的 API 对象，只能借助`long`型时间戳做一个“中转”：

```java
// ZonedDateTime -> long:
ZonedDateTime zdt = ZonedDateTime.now();
long ts = zdt.toEpochSecond() * 1000;

// long -> Date:
Date date = new Date(ts);

// long -> Calendar:
Calendar calendar = Calendar.getInstance();
calendar.clear();
calendar.setTimeZone(TimeZone.getTimeZone(zdt.getZone().getId()));
calendar.setTimeInMillis(zdt.toEpochSecond() * 1000);
```

从上面的代码还可以看到，新的`ZoneId`转换为旧的`TimeZone`，需要借助`ZoneId.getId()`返回的`String`完成。

#### （3）工具类

```java
/**
 * Date转LocalDateTime
 * @param date Date
 * @return LocalDateTime
 */
public static LocalDateTime dateToLocalDateTime(Date date) {
    try {
        Instant instant = date.toInstant();
        ZoneId zoneId = ZoneId.systemDefault();
        return instant.atZone(zoneId).toLocalDateTime();
    } catch (Exception e) {
        e.printStackTrace();
    }
    return null;
}

/**
 * LocalDateTime转Date
 * @param localDateTime LocalDateTime
 * @return Date
 */
public static Date localDateTimeToDate(LocalDateTime localDateTime) {
    try {
        ZoneId zoneId = ZoneId.systemDefault();
        ZonedDateTime zdt = localDateTime.atZone(zoneId);
        return Date.from(zdt.toInstant());
    } catch (Exception e) {
        e.printStackTrace();
    }
    return null;
}
```

------

## 五、Date 和 Calendar 的使用

### 1、Date 类

> Date()：使用当前的日期和时间初始化一个对象。
> Date(long millisec)   ：从19 7 0年 0 1月 0 1日 00时（格林威治时间）开始以毫秒计算时间，计算 millisec 毫秒。如果运行 Java
> 程序的本地时区是北京时区（与格林威治时间相差 8 > > 小时），Date dt1=new Date(1000);，那么对象 dt1 就是19 7 0年 0 1月 0 1日
> 0
> 8时 0 0分 01秒。
>
> Date 对象表示时间的默认顺序是星期、月、日、小时、分、秒、年。若需要修改时间显示的格式可以使用“SimpleDateFormat(String
> pattern)”方法。

**如何实例化当前时间？**

```java
Date date = new Date();
Calendar calendar = Calendar.getInstance();

System.out.println(date.toString());
//输出：Thu Oct 18 13:46:43 CST 2018
System.out.println(calendar.toString());
//输出：java.util.GregorianCalendar[time=1539841603042,areFieldsSet=true,areAllFieldsSet=true,lenient=true,zone=sun.util.calendar.ZoneInfo[id="Asia/Shanghai",offset=28800000,dstSavings=0,useDaylight=false,transitions=19,lastRule=null],firstDayOfWeek=1,minimalDaysInFirstWeek=1,ERA=1,YEAR=2018,MONTH=9,WEEK_OF_YEAR=42,WEEK_OF_MONTH=3,DAY_OF_MONTH=18,DAY_OF_YEAR=291,DAY_OF_WEEK=5,DAY_OF_WEEK_IN_MONTH=3,AM_PM=1,HOUR=1,HOUR_OF_DAY=13,MINUTE=46,SECOND=43,MILLISECOND=42,ZONE_OFFSET=28800000,DST_OFFSET=0]
```

**如何实例化特定时间？**

```java
 //注：mm:ss必须小写，否则无法转换。HH大小写无影响。
 DateFormat df = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
 Date date1 = null;
 try {
     date1 = df.parse("2017-08-07 11:11:11");
 } catch (ParseException e) {
     e.printStackTrace();
 }
 
 Calendar calendar1 = Calendar.getInstance();
 calendar1.setTime(date1);
```

实例化时注意：

- 建议从 Date 使用格式转换，然后赋值（setTime）给 Calendar，不然直接设置 Calendar 用毫秒数（setTimeInMillis）太麻烦。（其实不知道怎么设置……）
- 这一行代码确立了转换的格式，其中 yyyy 是完整的公元年，MM 是月份，dd 是日期，HH:mm:ss 是时、分、秒。
- 另外，实例化时的格式：`yyyy-MM-dd hh:mm:ss`。mm:ss必须小写，否则无法转换。HH 大小写无影响。有的格式大写，有的格式小写，例如 MM
  是月份，mm 是分；HH 是 24 小时制，而 hh 是 12 小时制。

------

### 2、Calendar 类

我们现在已经能够格式化并创建一个日期对象了，但是我们如何才能设置和获取日期数据的特定部分呢，比如说小时，日，或者分钟?
我们又如何在日期的这些部分加上或者减去值呢? 答案是使用 Calendar 类。
Calendar 类的功能要比 Date 类强大很多，而且在实现方式上也比 Date 类要复杂一些。
Calendar 类是一个抽象类，提供了一组方法，允许把以毫秒为单位的时间转换成一些有用的时间组成部分。Calendar 不能直接创建对象，但可以使用静态方法
getInstance() 获得代表当前日期的日历对象，如：
Calendar calendar=Calendar.getInstance();

**创建一个代表系统当前日期的 Calendar 对象**

```java
Calendar c = Calendar.getInstance();//默认是当前日期
```

**创建一个指定日期的 Calendar 对象**

使用 Calendar 类代表特定的时间，需要首先创建一个 Calendar 的对象，然后再设定该对象中的年月日参数来完成。

```java
//创建一个代表2009年6月12日的Calendar对象
Calendar c1 = Calendar.getInstance();
c1.set(2009, 6 - 1, 12);
```

**Calendar 类对象字段类型**

Calendar 类中用以下这些常量表示不同的意义，jdk 内的很多类其实都是采用的这种思想

| 常量                    | 描述              |
|:----------------------|:----------------|
| Calendar.YEAR         | 年份              |
| Calendar.MONTH        | 月份              |
| Calendar.DATE         | 日期              |
| Calendar.DAY_OF_MONTH | 日期，和上面的字段意义完全相同 |
| Calendar.HOUR         | 12 小时制的小时       |
| Calendar.HOUR_OF_DAY  | 24 小时制的小时       |
| Calendar.MINUTE       | 分钟              |
| Calendar.SECOND       | 秒               |
| Calendar.DAY_OF_WEEK  | 星期几             |

**Calendar**类对象信息的设置
**Set 设置**

如：

```java
Calendar c1 = Calendar.getInstance();
```

调用：

```java
public final void set(int year,int month,int date)
c1.set(2009, 6, 12);//把Calendar对象c1的年月日分别设这为：2009、6、12
```

利用字段类型设置

如果只设定某个字段，例如日期的值，则可以使用如下 set 方法：

```java
public void set(int field,int value)
```

把 c1 对象代表的日期设置为 10 号，其它所有的数值会被重新计算

```java
c1.set(Calendar.DATE,10);
```

把 c1 对象代表的年份设置为 2008 年，其他的所有数值会被重新计算

```java
c1.set(Calendar.YEAR,2008);
```

其他字段属性 set 的意义以此类推

**Add 设置**

```java
Calendar c1 = Calendar.getInstance();
```

把 c1 对象的日期加上 10，也就是 c1 也就表示为 10 天后的日期，其它所有的数值会被重新计算

```java
c1.add(Calendar.DATE, 10);
```

把 c1 对象的日期减去 10，也就是 c1 也就表示为 10 天前的日期，其它所有的数值会被重新计算

```java
c1.add(Calendar.DATE, -10);
```

其他字段属性的 add 的意义以此类推

**Calendar 类对象信息的获得**

```java
Calendar c1 = Calendar.getInstance(); // 获得年份 
int year = c1.get(Calendar.YEAR); // 获得月份 
int month = c1.get(Calendar.MONTH) + 1; // 获得日期 
int date = c1.get(Calendar.DATE); // 获得小时 
int hour = c1.get(Calendar.HOUR_OF_DAY); // 获得分钟 
int minute = c1.get(Calendar.MINUTE); // 获得秒 
int second = c1.get(Calendar.SECOND); // 获得星期几（注意（这个与Date类是不同的）：1代表星期日、2代表星期1、3代表星期二，以此类推） 
int day = c1.get(Calendar.DAY_OF_WEEK);
```

------

**Date 和 Calendar 如何互相转化？**

```java
Date date1 = new Date();
Calendar calendar1 = Calendar.getInstance();
calendar1.setTime(date1);
Date date = calendar1.getTime();
```

Calendar 类有两个方法：setTime 和 getTime。

- setTime 接收一个 Date 类型的参数；
- getTime 返回一个 Date 类型的结果；

主要是通过这个方式实现互相转换。Date 类好像没有相关转换的方法

**如何格式化时间？**

```java
DateFormat df = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
String s = df.format(new Date());
```

使用 DateFormat 类，进行 format。

**如何对日期进行操作。即日期加减：年月日以及小时分秒等。**

```java
DateFormat df = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");

Date date1 = new Date();
//输出：2018-10-18 02:18:27
System.out.println(df.format(date1));

Calendar calendar1 = Calendar.getInstance();
calendar1.setTime(date1);
calendar1.add(Calendar.MONTH,1);
Date date = calendar1.getTime();

//输出：2018-11-18 02:18:27
System.out.println(df.format(date));
```

**使用 Calendar 的 add 方法**：下面是官方接口定义：

- field 表示时间量：可以为如下：

`Calendar.ERA`：表示无加减；

`Calendar.YEAR`：年

`Calendar.MONTH`：月

`Calendar.DATE`：日

`Calendar.HOUR`：小时

`Calendar.MINUTE`：分钟

`Calendar.SECOND`：秒

注意：`Calendar`中的所有常量都可以为参数，不一定局限于上面的。比如`Calendar.HOUR_OF_DAY`,`Calendar.WEEK_OF_MONTH`
等。不管是什么，只要这个值和周相关就是周（月中的第几周，年中的第几周等），和日相关就是日（一年当中的第几天，一月当中的第几天，一周当中的第几天），和小时相关就是小时

- amount：为整数表示当前时间的基础上加上对应的时间量；为负数表示当前时间的基础上减去对应的时间量。

**日期比较**

Java 使用以下三种方法来比较两个日期：

- 使用 getTime() 方法获取两个日期（自 1970 年 1 月 1 日经历的毫秒数值），然后比较这两个值。
- 使用方法 before()，after() 和 equals()。例如，一个月的 12 号比 18 号早，则 new Date(99, 2, 12).before(new Date (99, 2,
  18)) 返回 true。
- 使用 compareTo() 方法，它是由 Comparable 接口定义的，Date 类实现了这个接口。

**Java 休眠(sleep)**

sleep()使当前线程进入停滞状态（阻塞当前线程），让出 CPU 的使用、目的是不让当前线程独自霸占该进程所获的 CPU
资源，以留一定时间给其他线程执行的机会。

你可以让程序休眠一毫秒的时间或者到您的计算机的寿命长的任意段时间。例如，下面的程序会休眠 3 秒：
你可以让程序休眠一毫秒的时间或者到您的计算机的寿命长的任意段时间。例如，下面的程序会休眠 3 秒：

```java
import java.util.*;
  
public class SleepDemo {
   public static void main(String args[]) {
      try { 
         System.out.println(new Date( ) + "\n"); 
         Thread.sleep(1000*3);   // 休眠3秒
         System.out.println(new Date( ) + "\n"); 
      } catch (Exception e) { 
          System.out.println("Got an exception!"); 
      }
   }
}
```

**获取当天结束时间：59 分 59 秒 0 毫秒**

```java
private Date getDayEnd() {
    Calendar cal = new GregorianCalendar();
    cal.set(Calendar.HOUR_OF_DAY, 23);
    cal.set(Calendar.MINUTE, 59);
    cal.set(Calendar.SECOND, 59);
    cal.set(Calendar.MILLISECOND, 0);
    return cal.getTime();
}
```

**Java 怎么使用 Date 和 Calendar 让年月日加一**

```java
    System.out.println("String类型 "+endDate);　　　　　　　　　 //页面传递到后台的时间 为String类型

    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
    Date sDate = sdf.parse(endDate);
    System.out.println("String类型转Date类型 "+sDate);　　　　　 //要实现日期+1 需要String转成Date类型

    Format f = new SimpleDateFormat("yyyy-MM-dd");
    System.out.println("Date结束日期:" + f.format(sDate)); 

    Calendar c = Calendar.getInstance();  
    c.setTime(sDate);  
    c.add(Calendar.DAY_OF_MONTH, 1);            　　　　　　　　//利用Calendar 实现 Date日期+1天  

    sDate = c.getTime();
    System.out.println("Date结束日期+1 " +f.format(sDate));　　//打印Date日期,显示成功+1天

    SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-MM-dd");
    endDate = sdf1.format(sDate);
    System.out.println("Date类型转String类型  "+endDate);　　　 //将日期转成String类型 方便进入数据库比较
```

> 输出结果：
> String 类型 2018-01-23
> String 类型转 Date 类型 Tue Jan 23 00:00:00 CST 2018
> Date 结束日期:2018-01-23
> Date 结束日期+1 2018-01-24
> Date 类型转 String 类型 2018-01-24

## 六、时间戳

Unix 时间戳（英文为 Unix epoch, Unix time, POSIX time 或 Unix timestamp）：从协调世界时 1970 年 1 月 1 日 0 时 0 分 0
秒起（格林威治时区／GMT+00:00）到现在的总秒数，不包括闰秒。正值表示 1970 以后，负值则表示 1970 年以前。

**Unix 2038 bug（Jason hatchet bug）**

在大多数的 UNIX 系统中 UNIX 时间戳存储为 32 位，这样会引发 2038 年问题或 Y2038。

说到 UNIX 时间不得不提 Unix 2038 bug（Jason hatchet bug）：2038 年 1 月 19 日 3 时 14 分 07 秒，32 位元系统的 UNIX 时间将会被重置。

32 位的 UNIX 系统会以 32 位二进制数字表示时间，它们最多只能表示至协调世界时间 2038 年 1 月 19 日 3 时 14 分 07
秒（二进制：01111111 11111111 11111111 11111111），在下一秒二进制数字会是 10000000 00000000 00000000
00000000，这是负数，因此各系统会把时间误解作 1901 年 12 月 13 日 20 时 45 分 52 秒（亦有说回归到 1970
年）。这时可能会令软件发生问题，导致系统瘫痪。

目前解决方案是把系统由 32 位转为 64 位系统。在 64 位系统下，此时间最多可以表示到 292,277,026,596 年 12 月 4 日 15 时 30 分
08 秒。

**存储时间的本质**

> 参考链接：<https://www.liaoxuefeng.com/wiki/1252599548343744/1303791989162017>

因此，在计算机中，只需要存储一个整数`1574208900`表示某一时刻。当需要显示为某一地区的当地时间时，我们就把它格式化为一个字符串：

```java
String displayDateTime(int n, String timezone) { ... }
```

在不同的编程语言中，会有几种存储方式：

- 以秒为单位的整数：1574208900，缺点是精度只能到秒；
- 以毫秒为单位的整数：1574208900123，最后 3 位表示毫秒数；
- 以秒为单位的浮点数：1574208900.123，小数点后面表示零点几秒。

而在 Java 程序中，时间戳通常是用`long`表示的毫秒数。要获取当前时间戳，可以使用`System.currentTimeMillis()`，这是 Java
程序获取时间戳最常用的方法。

```java
//java 实现获得时间戳 (long)，获取的是毫秒数（每种语言获取的时间戳精确的级别不一样，例如java获取的时间戳就是毫秒级）
Long milliSecondTimestamp = LocalDateTime.now().toInstant(ZoneOffset.of("+8")).toEpochMilli()
Long secondTimestamp = LocalDateTime.now().toEpochSecond(ZoneOffset.of("+8"));
//时间戳 (long) 转换成 LocalDateTime:
LocalDateTime time2 =LocalDateTime.ofEpochSecond(timestamp/1000,0,ZoneOffset.ofHours(8));
```

Instant 类有一个静态工厂方法 now()会返回当前的时间戳，如下所示：

```java
public void getTimestamp(){
    Instant timestamp = Instant.now();
    System.out.println("What is value of this instant " + timestamp);
}
```

Java 8 增加了一个 Clock 时钟类用于获取当时的时间戳，或当前时区下的日期时间信息。以前用到 System.currentTimeInMillis() 和
TimeZone.getDefault() 的地方都可用 Clock 替换。

```java
public void clock(){
    // 根据系统时间返回当前时间并设置为UTC。
    Clock clock = Clock.systemUTC();
    System.out.println("Clock : " + clock);

    // 根据系统时钟区域返回时间
    Clock defaultClock = Clock.systemDefaultZone();
    System.out.println("Clock : " + clock);
}
```

**工具类**

```java
/**
  * LocalDateTime转毫秒时间戳
  * @param localDateTime LocalDateTime
  * @return 时间戳
  */
public static Long localDateTimeToTimestamp(LocalDateTime localDateTime) {
    try {
        ZoneId zoneId = ZoneId.systemDefault();
        Instant instant = localDateTime.atZone(zoneId).toInstant();
        return instant.toEpochMilli();
    } catch (Exception e) {
        e.printStackTrace();
    }
    return null;
}

/**
 * 时间戳转LocalDateTime
 * @param timestamp 时间戳
 * @return LocalDateTime
 */
public static LocalDateTime timestampToLocalDateTime(long timestamp) {
    try {
        Instant instant = Instant.ofEpochMilli(timestamp);
        ZoneId zone = ZoneId.systemDefault();
        return LocalDateTime.ofInstant(instant, zone);
    } catch (Exception e) {
        e.printStackTrace();
    }
    return null;
}
```

## 七、前后端交接日期时间格式

### 1.后端处理前端传来的日期

**1、@JsonFormat 注解**

我之前一直使用这种方式来接收前台传进来的日期类型，当初感觉挺好用的，一直用一直爽，直到有一天，前端传进来的日期类型变了，本来的格式是
yyyy-MM-dd HH:mm:ss，突然有个数据成了 yyyy-MM-dd, 就导致后台报错，类型转换异常。

代码如下：

```java
public class User {

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date birthday;
}
```

然后前端就会钉钉滴滴你，服务器内部错误，然后你看了半天，没问题啊，最后实在没办法，是不是你日期格式传的有问题啊，把你传的参数发过来，最后一看果真是这出了问题。这个时候你可能跟我一样把接收的格式改一下，但是万一前端他传进来的日期格式又变了你该怎么办呢？

**2、转换器**

这个也是我在经历了跟前端各种斗智斗勇之后，学习到的一个方法，比起上面注解的方式，这种方式扩展性更强，而且可以同时处理多种数据格式。

我们先来看一下，如果定义这个转换器

```java
@Component
public class DateConverter implements Converter<String, Date> {

    private static final String dateFormat = "yyyy-MM-dd HH:mm:ss";
    private static final String shortDateFormat = "yyyy-MM-dd";
    private static final String timeStampFormat = "^\\d+$";

    private static final String hDateFormat = "yyyy年MM月dd日 HH:mm:ss";
    private static final String hshortDateFormat = "yyyy年MM月dd日";

    @Override
    public Date convert(String value) {

        if (StringUtils.isEmpty(value)) {
            return null;
        }

        value = value.trim();

        try {
            if (value.contains("-")) {
                SimpleDateFormat formatter;
                if (value.contains(":")) {
                    formatter = new SimpleDateFormat(dateFormat);
                } else {
                    formatter = new SimpleDateFormat(shortDateFormat);
                }
                return formatter.parse(value);
            } else if (value.matches(timeStampFormat)) {
                Long lDate = new Long(value);
                return new Date(lDate);
            } else if (value.contains("年")) {

                SimpleDateFormat formatter;
                if (value.contains(":")) {
                    formatter = new SimpleDateFormat(hDateFormat);
                } else {
                    formatter = new SimpleDateFormat(hshortDateFormat);
                }

                return formatter.parse(value);
            }
        } catch (Exception e) {
            throw new RuntimeException(String.format("parser %s to Date fail", value));
        }
        throw new RuntimeException(String.format("parser %s to Date fail", value));
    }
}
```

上面的年月日格式是我最近的项目中是这种格式，所以是我扩展新加的，所以通过转化器的这种方式，请求进来进来之后，如果参数中有日期格式，那么首先会进入转换器中进行解析，通过上面的代码大家很容易看出，通过传进来的格式判断日期是哪种格式，然后再进行解析，最后返回一个
Date 类型，进入我们的业务代码处理业务。

但是如果你传进来的日期格式不符合规范或者说没有定义格式，那么在转换的过程中，还是会报错。所以我们一般最好跟前端规定好某种格式，要么同意
yyyy-MM-dd 的格式，要么 yyyy 年 MM 月 dd 日，不要一个接口一个格式，这样处理起来也是很费劲的。

**SpringBoot 中应用 LocalDateTime**

将 LocalDateTime 字段以时间戳的方式返回给前端 添加日期转化类

```java
    public class LocalDateTimeConverter extends JsonSerializer<LocalDateTime> {
        @Override
        public void serialize(LocalDateTime value, JsonGenerator gen, SerializerProvider serializers) throws IOException {
            gen.writeNumber(value.toInstant(ZoneOffset.of("+8")).toEpochMilli());
        }
    }
```

并在 LocalDateTime 字段上添加@JsonSerialize(using = LocalDateTimeConverter.class)注解，如下：

```java
@JsonSerialize(using = LocalDateTimeConverter.class)
protected LocalDateTime gmtModified;
```

将 LocalDateTime 字段以指定格式化日期的方式返回给前端 在 LocalDateTime 字段上添加@JsonFormat(
shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm:ss")注解即可，如下：

```java
@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm:ss")
protected LocalDateTime gmtModified;
```

对前端传入的日期进行格式化 在 LocalDateTime 字段上添加@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")注解即可，如下：

```java
@DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
protected LocalDateTime gmtModified;
```

### 2.与字符串的转换

**LocalDateTime 与 String 互转**

```java
//时间转字符串格式化
 DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMddHHmmssSSS");
 String dateTime = LocalDateTime.now(ZoneOffset.of("+8")).format(formatter);
//字符串转时间
String dateTimeStr = "2018-07-28 14:11:15";
DateTimeFormatter df = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
LocalDateTime dateTime = LocalDateTime.parse(dateTimeStr, df);
```

**Date 与 LocalDateTime 互转**

```java
//将java.util.Date 转换为java8 的java.time.LocalDateTime,默认时区为东8区
public static LocalDateTime dateConvertToLocalDateTime(Date date) {
    return date.toInstant().atOffset(ZoneOffset.of("+8")).toLocalDateTime();
}

//将java8 的 java.time.LocalDateTime 转换为 java.util.Date，默认时区为东8区
public static Date localDateTimeConvertToDate(LocalDateTime localDateTime) {
    return Date.from(localDateTime.toInstant(ZoneOffset.of("+8")));
}

@Test
public void testDateConvertToLocalDateTime() {
    Date date = DateUtils.parseDate("2018-08-01 21:22:22", DateUtils.DATE_YMDHMS);
    LocalDateTime localDateTime = DateUtils.dateConvertToLocalDateTime(date);
    Long localDateTimeSecond = localDateTime.toEpochSecond(ZoneOffset.of("+8"));
    Long dateSecond = date.toInstant().atOffset(ZoneOffset.of("+8")).toEpochSecond();
    Assert.assertTrue(dateSecond.equals(localDateTimeSecond));
}
```

### 3.数据库存储时间

处理日期和时间时，尽量使用新的`java.time`包；

在数据库中存储时间戳时，尽量使用`long`型时间戳，它具有省空间，效率高，不依赖数据库的优点。

除了旧式的`java.util.Date`，我们还可以找到另一个`java.sql.Date`，它继承自`java.util.Date`
，但会自动忽略所有时间相关信息。这个奇葩的设计原因要追溯到数据库的日期与时间类型。

在数据库中，也存在几种日期和时间类型：

- `DATETIME`：表示日期和时间；
- `DATE`：仅表示日期；
- `TIME`：仅表示时间；
- `TIMESTAMP`：和`DATETIME`类似，但是数据库会在创建或者更新记录的时候同时修改`TIMESTAMP`。

在使用 Java 程序操作数据库时，我们需要把数据库类型与 Java 类型映射起来。下表是数据库类型与 Java 新旧 API 的映射关系：

| 数据库       | 对应 Java 类（旧）       | 对应 Java 类（新）  |
|:----------|:-------------------|:--------------|
| DATETIME  | java.util.Date     | LocalDateTime |
| DATE      | java.sql.Date      | LocalDate     |
| TIME      | java.sql.Time      | LocalTime     |
| TIMESTAMP | java.sql.Timestamp | LocalDateTime |

实际上，在数据库中，我们需要存储的最常用的是时刻（`Instant`
），因为有了时刻信息，就可以根据用户自己选择的时区，显示出正确的本地时间。所以，最好的方法是直接用长整数`long`
表示，在数据库中存储为`BIGINT`类型。

通过存储一个`long`型时间戳，我们可以编写一个`timestampToString()`的方法，非常简单地为不同用户以不同的偏好来显示不同的本地时间：

```java
import java.time.*;
import java.time.format.*;
import java.util.Locale;

public class Main {
    public static void main(String[] args) {
// 数据库 对应Java类（旧） 对应Java类（新）
//DATETIME java.util.Date LocalDateTime
//DATE java.sql.Date LocalDate
//TIME java.sql.Time LocalTime
//TIMESTAMP java.sql.Timestamp LocalDateTime
//实际上，在数据库中，我们需要存储的最常用的是时刻（Instant），因为有了时刻信息，就可以根据用户自己选择的时区，显示出正确的本地时间。所以，最好的方法是直接用长整数long表示，在数据库中存储为BIGINT类型。

//通过存储一个long型时间戳，我们可以编写一个timestampToString()的方法，非常简单地为不同用户以不同的偏好来显示不同的本地时间：

import java.time.*;
import java.time.format.*;
import java.util.Locale;
long ts = 1574208900000L;
        System.out.println(timestampToString(ts, Locale.CHINA, "Asia/Shanghai"));
        System.out.println(timestampToString(ts, Locale.US, "America/New_York"));
    }

    static String timestampToString(long epochMilli, Locale lo, String zoneId) {
        Instant ins = Instant.ofEpochMilli(epochMilli);
        DateTimeFormatter f = DateTimeFormatter.ofLocalizedDateTime(FormatStyle.MEDIUM, FormatStyle.SHORT);
        return f.withLocale(lo).format(ZonedDateTime.ofInstant(ins, ZoneId.of(zoneId)));
    }
```
