---
author: xlc520
title: DateTimeFormatter-替换SimpleDateFormat
description: 
date: 2022-08-12
category: Java
tag: Java
article: true
timeline: true
icon: java
password: 
---



# DateTimeFormatter-替换SimpleDateFormat

我们先来看看SImpleDateFormat类的部分[源码](https://so.csdn.net/so/search?q=源码&spm=1001.2101.3001.7020)，如图 1所示。

![img](E:\source\blogImage\20210502205438290.png)

图 1

接着再来看看DateTimeFormatter类的部分源码，如 图2所示。

![img](E:\source\blogImage\20210502205459779.png)

图 2

由上可知，与SimpleDateFormat不同的是，DateTimeFormatter不但是不变对象，它还是线程安全的。线程的概念我们会在后面涉及到。

现在我们只需要记住：因为**SimpleDateFormat不是线程安全的**，使用的时候，只能在方法内部创建新的局部变量。而**DateTimeFormatter可以只创建一个实例，到处引用**。

接下来，我们来说一说DateTimeFormatter类的常用方法

```java
//创建一个格式化程序使用指定的模式
static DateTimeFormatter ofPattern(String pattern) 
  
//创建一个格式化程序使用指定的模式和现场。
static DateTimeFormatter ofPattern(String pattern, Locale locale) 
 
//使用此格式化程序格式的日期时间对象
String format(TemporalAccessor temporal) 
```

其中，TemporalAccessor是一个接口，其实现类有LocalDate、LocalTime、LocalDateTime、ZonedDateTime等……

所以我们在使用format方法时，一般传入其实现类的实例化对象即可。

接下来我们举几个例子。

范例1：创建DateTimeFormatter

```java
package edu.blog.test07;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DateTimeFormatterTestDemo01 {
    public static void main(String[] args) {
        //自定义输出格式
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        System.out.println(dtf.format(LocalDateTime.now()));
        System.out.println("===================================");
        //自定义格式解析
        LocalDateTime localDateTime = LocalDateTime.parse("2001/07/27 22:22:22", dtf);
        System.out.println(localDateTime);
    }
}

/*
结果：
2021/04/02 23:14:46
===================================
2001-07-27T22:22:22
*/
```

由上可知，**DateTimeFormatter类格式化字符串的使用方式与SImpleDateFormat一样**。

此外，另一种创建DateTimeFormatter的方法是，传入格式化字符串的同时，同时指定**Locale**。

范例2：按照Locale默认习惯格式化

```java
package edu.blog.test07;

import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;

public class DateTimeFormatterTestDemo02 {
    public static void main(String[] args) {
        ZonedDateTime zonedDateTime = ZonedDateTime.now();
        System.out.println(zonedDateTime);
        System.out.println("==============================");

        DateTimeFormatter formatter01 = DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ZZZZ");
        System.out.println(formatter01.format(zonedDateTime));
        System.out.println("==============================");

        DateTimeFormatter formatter02 = DateTimeFormatter.ofPattern("yyyy MMM dd EE:HH:mm", Locale.CHINA);
        System.out.println(formatter02.format(zonedDateTime));
        System.out.println("==============================");

        DateTimeFormatter formatter03 = DateTimeFormatter.ofPattern("E, MMMM/dd/yyyy HH:mm", Locale.US);
        System.out.println(formatter03.format(zonedDateTime));
    }
}

/*
结果：
2021-04-02T23:27:59.326+08:00[Asia/Shanghai]
==============================
2021-04-02T23:27:GMT+08:00
==============================
2021 四月 02 星期五:23:27
==============================
Fri, April/02/2021 23:27
*/
```

运行本程序，分别以默认方式、中国地区和美国地区对当前时间进行显示，结果如上所述。

在格式化字符串中，如果需要输出固定字符，可以用’xxx’表示。

当我们直接调用"System.out.println()"对一个ZonedDateTime或者LocalDateTime实例进行打印的时候，实际上，调用的是它们的toString()方法，**默认的toString()方法显示的字符串就是按照ISO 8601格式显示的**，我们可以通过DateTimeFormatter预定义的几个静态变量来引用。

范例3：过DateTimeFormatter预定义静态变量

```java
package edu.blog.test07;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DateTimeFormatterTestDemo03 {
    public static void main(String[] args) {
        LocalDateTime localDateTime = LocalDateTime.now();
        System.out.println(localDateTime);
        System.out.println(DateTimeFormatter.ISO_DATE.format(localDateTime));
        System.out.println(DateTimeFormatter.ISO_DATE_TIME.format(localDateTime));
    }
}

/*
结果：
2021-04-02T23:38:11.707
2021-04-02
2021-04-02T23:38:11.707
*/
```

总结：对ZonedDateTime或LocalDateTime进行格式化，需要使用DateTimeFormatter类，DateTimeFormatter可以通过格式化字符串和Locale对日期和时间进行定制输出。