---
author: xlc520
title: 18 个 Java8 日期处理
excerpt: 
description: 
date: 2022-08-15
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# 18 个 Java8 日期处理

Java 8 推出了全新的日期时间 API，在教程中我们将通过一些简单的实例来学习如何使用新 API。

Java 处理日期、日历和时间的方式一直为社区所诟病，将 java.util.Date 设定为可变类型，以及 SimpleDateFormat 的非线程安全使其应用非常受限。

新 API 基于 ISO 标准日历系统，java.time 包下的所有类都是不可变类型而且线程安全。

## 示例 1:Java 8 中获取今天的日期

Java 8 中的 LocalDate 用于表示当天日期。和 java.util.Date 不同，它只有日期，不包含时间。当你仅需要表示日期时就用这个类。

```java
package com.shxt.demo02;

import java.time.LocalDate;

public class Demo01 {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        System.out.println("今天的日期:"+today);
    }
}
/*
 运行结果:
  今天的日期:2018-02-05
*/
```

## 示例 2:Java 8 中获取年、月、日信息

```ini
package com.shxt.demo02;

import java.time.LocalDate;

public class Demo02 {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        int year = today.getYear();
        int month = today.getMonthValue();
        int day = today.getDayOfMonth();

        System.out.println("year:"+year);
        System.out.println("month:"+month);
        System.out.println("day:"+day);

    }
}
```

## 示例 3:Java 8 中处理特定日期

我们通过静态工厂方法 now()非常容易地创建了当天日期，你还可以调用另一个有用的工厂方法 LocalDate.of()创建任意日期，
该方法需要传入年、月、日做参数，返回对应的 LocalDate 实例。这个方法的好处是没再犯老 API 的设计错误，比如年度起始于 1900，月份是从
0 开 始等等。

```java
package com.shxt.demo02;

import java.time.LocalDate;

public class Demo03 {
    public static void main(String[] args) {
        LocalDate date = LocalDate.of(2018,2,6);
        System.out.println("自定义日期:"+date);
    }
}
```

## 示例 4:Java 8 中判断两个日期是否相等

```java
package com.shxt.demo02;

import java.time.LocalDate;

public class Demo04 {
    public static void main(String[] args) {
        LocalDate date1 = LocalDate.now();

        LocalDate date2 = LocalDate.of(2018,2,5);

        if(date1.equals(date2)){
            System.out.println("时间相等");
        }else{
            System.out.println("时间不等");
        }

    }
}
```

## 示例 5:Java 8 中检查像生日这种周期性事件

```java
package com.shxt.demo02;

import java.time.LocalDate;
import java.time.MonthDay;

public class Demo05 {
    public static void main(String[] args) {
        LocalDate date1 = LocalDate.now();

        LocalDate date2 = LocalDate.of(2018,2,6);
        MonthDay birthday = MonthDay.of(date2.getMonth(),date2.getDayOfMonth());
        MonthDay currentMonthDay = MonthDay.from(date1);

        if(currentMonthDay.equals(birthday)){
            System.out.println("是你的生日");
        }else{
            System.out.println("你的生日还没有到");
        }

    }
}
```

> 只要当天的日期和生日匹配，无论是哪一年都会打印出祝贺信息。你可以把程序整合进系统时钟，看看生日时是否会受到提醒，或者写一个单元测试来检测代码是否运行正确。

## 示例 6:Java 8 中获取当前时间

```java
package com.shxt.demo02;

import java.time.LocalTime;

public class Demo06 {
    public static void main(String[] args) {
        LocalTime time = LocalTime.now();
        System.out.println("获取当前的时间,不含有日期:"+time);

    }
}
```

可以看到当前时间就只包含时间信息，没有日期

## 示例 7:Java 8 中获取当前时间

通过增加小时、分、秒来计算将来的时间很常见。Java 8 除了不变类型和线程安全的好处之外，还提供了更好的 plusHours()方法替换
add()，并且是兼容的。注意，这些方法返回一个全新的 LocalTime 实例，由于其不可变性，返回后一定要用变量赋值。

```java
package com.shxt.demo02;

import java.time.LocalTime;

public class Demo07 {
    public static void main(String[] args) {
        LocalTime time = LocalTime.now();
        LocalTime newTime = time.plusHours(3);
        System.out.println("三个小时后的时间为:"+newTime);

    }
}
```

## 示例 8:Java 8 如何计算一周后的日期

和上个例子计算 3 小时以后的时间类似，这个例子会计算一周后的日期。LocalDate 日期不包含时间信息，它的 plus()
方法用来增加天、周、月，ChronoUnit 类声明了这些时间单位。由于 LocalDate 也是不变类型，返回后一定要用变量赋值。

```java
package com.shxt.demo02;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class Demo08 {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        System.out.println("今天的日期为:"+today);
        LocalDate nextWeek = today.plus(1, ChronoUnit.WEEKS);
        System.out.println("一周后的日期为:"+nextWeek);

    }
}
```

可以看到新日期离当天日期是 7 天，也就是一周。你可以用同样的方法增加 1 个月、1 年、1 小时、1 分钟甚至一个世纪，更多选项可以查看
Java 8 API 中的 ChronoUnit 类

## 示例 9:Java 8 计算一年前或一年后的日期

利用 minus()方法计算一年前的日期

```java
package com.shxt.demo02;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class Demo09 {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();

        LocalDate previousYear = today.minus(1, ChronoUnit.YEARS);
        System.out.println("一年前的日期 : " + previousYear);

        LocalDate nextYear = today.plus(1, ChronoUnit.YEARS);
        System.out.println("一年后的日期:"+nextYear);

    }
}
```

## 示例 10:Java 8 的 Clock 时钟类

Java 8 增加了一个 Clock 时钟类用于获取当时的时间戳，或当前时区下的日期时间信息。以前用到 System.currentTimeInMillis()和
TimeZone.getDefault()的地方都可用 Clock 替换。

```java
package com.shxt.demo02;

import java.time.Clock;

public class Demo10 {
    public static void main(String[] args) {
        // Returns the current time based on your system clock and set to UTC.
        Clock clock = Clock.systemUTC();
        System.out.println("Clock : " + clock.millis());

        // Returns time based on system clock zone
        Clock defaultClock = Clock.systemDefaultZone();
        System.out.println("Clock : " + defaultClock.millis());

    }
}
```

## 示例 11:如何用 Java 判断日期是早于还是晚于另一个日期

另一个工作中常见的操作就是如何判断给定的一个日期是大于某天还是小于某天？在 Java 8 中，LocalDate 类有两类方法 isBefore()和
isAfter()用于比较日期。调用 isBefore()方法时，如果给定日期小于当前日期则返回 true。

```java
package com.shxt.demo02;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;


public class Demo11 {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();

        LocalDate tomorrow = LocalDate.of(2018,2,6);
        if(tomorrow.isAfter(today)){
            System.out.println("之后的日期:"+tomorrow);
        }

        LocalDate yesterday = today.minus(1, ChronoUnit.DAYS);
        if(yesterday.isBefore(today)){
            System.out.println("之前的日期:"+yesterday);
        }
    }
}
```

## 示例 12:Java 8 中处理时区

Java 8 不仅分离了日期和时间，也把时区分离出来了。现在有一系列单独的类如 ZoneId 来处理特定时区，ZoneDateTime 类来表示某时区下的时间。这在
Java 8 以前都是 GregorianCalendar 类来做的。下面这个例子展示了如何把本时区的时间转换成另一个时区的时间。

```java
package com.shxt.demo02;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZonedDateTime;

public class Demo12 {
    public static void main(String[] args) {
        // Date and time with timezone in Java 8
        ZoneId america = ZoneId.of("America/New_York");
        LocalDateTime localtDateAndTime = LocalDateTime.now();
        ZonedDateTime dateAndTimeInNewYork  = ZonedDateTime.of(localtDateAndTime, america );
        System.out.println("Current date and time in a particular timezone : " + dateAndTimeInNewYork);
    }
}
```

## 示例 13:如何表示信用卡到期这类固定日期，答案就在 YearMonth

与 MonthDay 检查重复事件的例子相似，YearMonth 是另一个组合类，用于表示信用卡到期日、FD 到期日、期货期权到期日等。还可以用这个类得到
当月共有多少天，YearMonth 实例的 lengthOfMonth()方法可以返回当月的天数，在判断 2 月有 28 天还是 29 天时非常有用。

```java
package com.shxt.demo02;

import java.time.*;

public class Demo13 {
    public static void main(String[] args) {
        YearMonth currentYearMonth = YearMonth.now();
        System.out.printf("Days in month year %s: %d%n", currentYearMonth, currentYearMonth.lengthOfMonth());
        YearMonth creditCardExpiry = YearMonth.of(2019, Month.FEBRUARY);
        System.out.printf("Your credit card expires on %s %n", creditCardExpiry);
    }
}
```

## 示例 14:如何在 Java 8 中检查闰年

```java
package com.shxt.demo02;

import java.time.LocalDate;

public class Demo14 {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();
        if(today.isLeapYear()){
            System.out.println("This year is Leap year");
        }else {
            System.out.println("2018 is not a Leap year");
        }

    }
}
```

## 示例 15:计算两个日期之间的天数和月数

有一个常见日期操作是计算两个日期之间的天数、周数或月数。在 Java 8 中可以用 java.time.Period
类来做计算。下面这个例子中，我们计算了当天和将来某一天之间的月数。

```java
package com.shxt.demo02;

import java.time.LocalDate;
import java.time.Period;

public class Demo15 {
    public static void main(String[] args) {
        LocalDate today = LocalDate.now();

        LocalDate java8Release = LocalDate.of(2018, 12, 14);

        Period periodToNextJavaRelease = Period.between(today, java8Release);
        System.out.println("Months left between today and Java 8 release : "
                + periodToNextJavaRelease.getMonths() );


    }
}
```

## 示例 16:在 Java 8 中获取当前的时间戳

Instant 类有一个静态工厂方法 now()会返回当前的时间戳，如下所示：

```java
package com.shxt.demo02;

import java.time.Instant;

public class Demo16 {
    public static void main(String[] args) {
        Instant timestamp = Instant.now();
        System.out.println("What is value of this instant " + timestamp.toEpochMilli());
    }
}
```

时间戳信息里同时包含了日期和时间，这和 java.util.Date 很像。实际上 Instant 类确实等同于 Java 8 之前的 Date 类，你可以使用
Date 类和 Instant 类各自的转换方法互相转换，例如：Date.from(Instant) 将 Instant 转换成 java.util.Date，Date.toInstant()则是将
Date 类转换成 Instant 类。

## 示例 17:Java 8 中如何使用预定义的格式化工具去解析或格式化日期

```java
package com.shxt.demo02;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Demo17 {
    public static void main(String[] args) {
        String dayAfterTommorrow = "20180205";
        LocalDate formatted = LocalDate.parse(dayAfterTommorrow,
                DateTimeFormatter.BASIC_ISO_DATE);
        System.out.println(dayAfterTommorrow+"  格式化后的日期为:  "+formatted);
    }
}
```

## 示例 18:字符串互转日期类型

```java
package com.shxt.demo02;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Demo18 {
    public static void main(String[] args) {
        LocalDateTime date = LocalDateTime.now();

        DateTimeFormatter format1 = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
     //日期转字符串
        String str = date.format(format1);

        System.out.println("日期转换为字符串:"+str);

        DateTimeFormatter format2 = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
     //字符串转日期
        LocalDate date2 = LocalDate.parse(str,format2);
        System.out.println("日期类型:"+date2);

    }
}
```
