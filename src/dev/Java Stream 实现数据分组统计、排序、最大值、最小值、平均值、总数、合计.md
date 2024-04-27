---
author: xlc520
title: Java Stream 实现数据分组统计、排序、最大值、最小值、平均值、总数、合计
description: 
date: 2023-08-23
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# Java Stream 实现数据分组统计、排序、最大值、最小值、平均值、总数、合计

Java8对数据处理可谓十分流畅，既不改变数据，又能对数据进行很好的处理，今天给大家演示下，用Java8的Stream如何对数据进行分组统计，排序，求和等

这些方法属于java 8的汇总统计类：

- getAverage(): 它返回所有接受值的平均值。
- getCount(): 它计算所有元素的总数。
- getMax(): 它返回最大值。
- getMin(): 它返回最小值。
- getSum(): 它返回所有元素的总和。

#### 示例：统计用户status的最大值，最小值，求和，平均值

看官可以根据自己的需求进行灵活变通

```java
@GetMapping("/list")
public void list(){
    List<InputForm> inputForms = inputFormMapper.selectList();
    Map<String, IntSummaryStatistics> collect = inputForms.stream()
        .collect(Collectors.groupingBy(InputForm::getCreateUserName, Collectors.summarizingInt(InputForm::getStatus)));

    // 对名字去重
    Set<String> collect1 = inputForms.stream().distinct().map(InputForm::getCreateUserName).collect(Collectors.toSet());

    // 遍历名字，从map中取出对应用户的status最大值，最小值，平均值。。。
    for (String s1 : collect1) {
        IntSummaryStatistics statistics1 = collect.get(s1);

        System.out.println("第一个用户的名字为====" + s1);
        System.out.println("**********************************************");
        System.out.println("status的个数为===" + statistics1.getCount());
        System.out.println("status的最小值为===" + statistics1.getMin());
        System.out.println("status的求和为===" + statistics1.getSum());
        System.out.println("status的平均值为===" + statistics1.getAverage());
        System.out.println();
        System.out.println();
    }
}
```

结果如下：

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1692672109213-0.png)

#### 分组统计：

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1692672109213-1.png)

```java
@GetMapping("/list")
public void list(){
    List<InputForm> inputForms = inputFormMapper.selectList();
    System.out.println("inputForms = " + inputForms);

    Map<String, Long> collect = inputForms.stream().collect(Collectors.groupingBy(InputForm::getCreateUserName,
        Collectors.counting()));
    
    System.out.println("collect = " + collect);
}
```

> ❝
>
> 其中Collectors.groupingBy(InputForm::getCreateUserName, Collectors.counting())返回的是一个Map集合，InputForm::
> getCreateUserName代表key，Collectors.counting()代表value，我是按照创建人的姓名进行统计
>
> ❞

可以看到总共有九条数据，其中莫昀锦有两个，周亚丽有七个

#### 如果我们想看某个部门下面有哪些数据，可以如下代码

```java
@GetMapping("/list")
public Map<String, List<InputForm>> list(){
    List<InputForm> inputForms = inputFormMapper.selectList();
    System.out.println("inputForms = " + inputForms);

    Map<String, List<InputForm>> collect = inputForms.stream()
        .collect(Collectors.groupingBy(InputForm::getCreateCompanyName));

    return collect;
}
```

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1692672109213-2.png)

#### 求最大值，最小值

```java
@GetMapping("/list")
public Map<String, List<InputForm>> list(){
    List<InputForm> inputForms = inputFormMapper.selectList();
    System.out.println("inputForms = " + inputForms);

    Optional<InputForm> min = inputForms.stream()
        .min(Comparator.comparing(InputForm::getId));

    System.out.println("min = " + min);
    return null;
}
```

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1692672109213-3.png)

可以看到此id是最小的，最大值雷同

#### 对某个字段求最大，最小，求和，统计，计数

```java
@GetMapping("/list")
public void list(){
    List<InputForm> inputForms = inputFormMapper.selectList();
    System.out.println("inputForms = " + inputForms);

    IntSummaryStatistics collect = inputForms.stream()
        .collect(Collectors.summarizingInt(InputForm::getStatus));
    double average = collect.getAverage();
    int max = collect.getMax();
    int min = collect.getMin();
    long sum = collect.getSum();
    long count = collect.getCount();
    
    System.out.println("collect = " + collect);
}
```

#### 求最大值，最小值还可以这样做

```java
// 求最大值
Optional<InputForm> max = inputForms.stream().max(Comparator.comparing(InputForm::getAgency));
if (max.isPresent()){
    System.out.println("max = " + max);
}

// 求最小值
Optional<InputForm> min = inputForms.stream().min(Comparator.comparing(InputForm::getAgency));
if (min.isPresent()){
    System.out.println("min = " + min);
}
```

#### 对某个字段求和并汇总

```java
int sum = inputForms.stream().mapToInt(InputForm::getStatus).sum();
        System.out.println("sum = " + sum);
```

#### 求某个字段的平均值

```java
// 求某个字段的平均值
Double collect2 = inputForms.stream().collect(Collectors.averagingInt(InputForm::getStatus));
System.out.println("collect2 = " + collect2);

// 简化后
OptionalDouble average = inputForms.stream().mapToDouble(InputForm::getStatus).average();
if (average.isPresent()){
    System.out.println("average = " + average);
}
```

#### 拼接某个字段的值，可以设置前缀，后缀或者分隔符

```java
// 拼接某个字段的值,用逗号分隔，并设置前缀和后缀
String collect3 = inputForms.stream().map(InputForm::getCreateUserName).collect(Collectors.joining(",", "我是前缀", "我是后缀"));
System.out.println("collect3 = " + collect3);
```

#### 根据部门进行分组，并获取汇总人数

```java
// 根据部门进行汇总，并获取汇总人数
Map<String, Long> collect4 = inputForms.stream().collect(Collectors.groupingBy(InputForm::getCreateDeptName, Collectors.counting()));
System.out.println("collect4 = " + collect4);
```

#### 根据部门和是否退休进行分组，并汇总人数

```java
// 根据部门和是否退休进行分组，并汇总人数
Map<String, Map<Integer, Long>> collect5 = inputForms.stream().collect(Collectors.groupingBy(InputForm::getCreateDeptName, Collectors.groupingBy(InputForm::getIsDelete, Collectors.counting())));
System.out.println("collect5 = " + collect5);
```

#### 根据部门和是否退休进行分组，并取得每组中年龄最大的人

```java
// 根据部门和是否退休进行分组，并取得每组中年龄最大的人
Map<String, Map<Integer, InputForm>> collect6 = inputForms.stream().collect(
    Collectors.groupingBy(InputForm::getCreateDeptName,
        Collectors.groupingBy(InputForm::getIsDelete,
            Collectors.collectingAndThen(
                Collectors.maxBy(
                    Comparator.comparing(InputForm::getAge)), Optional::get))));
System.out.println("collect6 = " + collect6);
```