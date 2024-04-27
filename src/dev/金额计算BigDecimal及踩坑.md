---
author: xlc520
title: 金额计算BigDecimal及踩坑
excerpt: 
description: 
date: 2022-07-15
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# 金额计算 BigDecimal 及踩坑

除非在一些非常简单的场景，结算汇金类的业务也不会直接用`BigDecimal`来计算金额，原因有两点：

1. `BigDecimal`里面还是有很多隐蔽的坑的
2. `BigDecimal`没有提供金额的单位

## 1. `BigDecimal`中的五个容易踩的坑

### 1.1 `new BigDecimal()`还是`BigDecimal#valueOf()`？

先看下面这段代码

```java
BigDecimal bd1 = new BigDecimal(0.01);
BigDecimal bd2 = BigDecimal.valueOf(0.01);
System.out.println("bd1 = " + bd1);
System.out.println("bd2 = " + bd2);
```

输出到控制台的结果是：

```plain
bd1 = 0.01000000000000000020816681711721685132943093776702880859375
bd2 = 0.01
```

造成这种差异的原因是 0.1 这个数字计算机是无法精确表示的，送给`BigDecimal`的时候就已经丢精度了，而`BigDecimal#valueOf`
的实现却完全不同

```java
public static BigDecimal valueOf(double val) {
    // Reminder: a zero double returns '0.0', so we cannot fastpath
    // to use the constant ZERO.  This might be important enough to
    // justify a factory approach, a cache, or a few private
    // constants, later.
    return new BigDecimal(Double.toString(val));
}
```

它使用了浮点数相应的字符串来构造`BigDecimal`
对象，因此避免了精度问题。所以大家要尽量要使用字符串而不是浮点数去构造`BigDecimal`
对象，如果实在不行，就使用`BigDecimal#valueOf()`方法吧。

### 1.2 等值比较

```java
BigDecimal bd1 = new BigDecimal("1.0");
BigDecimal bd2 = new BigDecimal("1.00");
System.out.println(bd1.equals(bd2));
System.out.println(bd1.compareTo(bd2));
```

控制台的输出将会是：

```plain
false
0
```

究其原因是，`BigDecimal`中`equals`方法的实现会比较两个数字的精度，而`compareTo`方法则只会比较数值的大小。

### 1.3 `BigDecimal`并不代表无限精度

先看这段代码

```java
BigDecimal a = new BigDecimal("1.0");
BigDecimal b = new BigDecimal("3.0");
a.divide(b) // results in the following exception.
```

结果会抛出异常：

```plain
java.lang.ArithmeticException: Non-terminating decimal expansion; no exact representable decimal result.
```

关于这个异常，Oracle 的官方文档有具体说明

If the quotient has a nonterminating decimal expansion and the operation is specified to return an exact result, an
ArithmeticException is thrown. Otherwise, the exact result of the division is returned, as done for other operations.

大意是，如果除法的商的结果是一个无限小数但是我们期望返回精确的结果，那程序就会抛出异常。回到我们的这个例子，我们需要告诉`JVM`
我们不需要返回精确的结果就好了

```java
BigDecimal a = new BigDecimal("1.0");
BigDecimal b = new BigDecimal("3.0");
a.divide(b, 2, RoundingMode.HALF_UP)// 0.33
```

### 1.4 `BigDecimal`转回`String`要小心

```java
BigDecimal d = BigDecimal.valueOf(12334535345456700.12345634534534578901);
String out = d.toString(); // Or perform any formatting that needs to be done
System.out.println(out); // 1.23345353454567E+16
```

可以看到结果已经被转换成了科学计数法，可能这个并不是预期的结果`BigDecimal`有三个方法可以转为相应的字符串类型，切记不要用错：

```java
String toString();     // 有必要时使用科学计数法
String toPlainString();   // 不使用科学计数法
String toEngineeringString();  // 工程计算中经常使用的记录数字的方法，与科学计数法类似，但要求10的幂必须是3的倍数
```

### 1.5 执行顺序不能调换（乘法交换律失效）

乘法满足交换律是一个常识，但是在计算机的世界里，会出现不满足乘法交换律的情况

```java
BigDecimal a = BigDecimal.valueOf(1.0);
BigDecimal b = BigDecimal.valueOf(3.0);
BigDecimal c = BigDecimal.valueOf(3.0);
System.out.println(a.divide(b, 2, RoundingMode.HALF_UP).multiply(c)); // 0.990
System.out.println(a.multiply(c).divide(b, 2, RoundingMode.HALF_UP)); // 1.00
```

别小看这这 0.01 的差别，在汇金领域，会产生非常大的金额差异。

## 2. 最佳实践

关于金额计算，很多业务团队会基于`BigDecimal`再封装一个`Money`类，其实我们直接可以用一个半官方的`Money`类：JSR 354
,虽然没能在`Java 9`中成为`Java`标准，很有可能集成到后续的`Java`版本中成为官方库。

### 2.1 `maven`坐标

```xml
<dependency>
    <groupId>org.javamoney</groupId>
    <artifactId>moneta</artifactId>
    <version>1.1</version>
</dependency>
```

### 2.2 新建`Money`类

```java
CurrencyUnit cny = Monetary.getCurrency("CNY");
Money money = Money.of(1.0, cny); 
// 或者 Money money = Money.of(1.0, "CNY");
//System.out.println(money);
```

### 2.3 金额运算

```java
CurrencyUnit cny = Monetary.getCurrency("CNY");
Money oneYuan = Money.of(1.0, cny);
Money threeYuan = oneYuan.add(Money.of(2.0, "CNY")); //CNY 3
Money tenYuan = oneYuan.multiply(10); // CNY 10
Money fiveFen = oneYuan.divide(2); //CNY 0.5
```

### 2.4 比较相等

```java
Money fiveFen = Money.of(0.5, "CNY"); //CNY 0.5
Money anotherFiveFen = Money.of(0.50, "CNY"); // CNY 0.50
System.out.println(fiveFen.equals(anotherFiveFen)); // true
```

可以看到，这个类对金额做了显性的抽象，增加了金额的单位，也避免了直接使用`BigDecimal`的一些坑。
