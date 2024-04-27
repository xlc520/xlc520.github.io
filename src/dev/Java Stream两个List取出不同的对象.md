---
author: xlc520
title: Java Stream两个List取出不同的对象
excerpt: 
description: 
date: 2023-08-05
category: Java
tag: Java
article: true
timeline: true
icon: java

---

# Java Stream 两个 List 取出不同的对象

可以使用 Java8 的 Stream API 来比较两个 List 的差异，并取出不同的对象。

### 方式一具体步骤如下

1. 将两个 List 转换为 Stream 类型；
2. 调用 Stream 的 filter 方法，将不同的对象过滤出来；
3. 将过滤出的不同的对象转换为 List 类型。

```java
List<String> list1 = Arrays.asList("A", "B", "C", "D");
List<String> list2 = Arrays.asList("B", "C", "E", "F", "A", "D");
List<String> diff = list1.stream().filter(item -> !list2.contains(item)).collect(Collectors.toList());
List<String> diff1 = list2.stream().filter(item -> !list1.contains(item)).collect(Collectors.toList());
diff.addAll(diff1);

diff.forEach(x -> System.out.println(x));
```

上述代码中，将两个 List 类型的对象 list1 和 list2 转换为 Stream 类型，并调用 filter 方法筛选出不同的对象。最后通过 collect
方法将不同的对象转换为 List 类型，并输出结果。

### 方式二具体步骤如下

```java
List<String> list1 = Arrays.asList("apple", "banana", "orange", "pear");
List<String> list2 = Arrays.asList("apple", "banana", "grape");
 
List<String> list3 = Stream.concat(
        list1.stream().filter(str -> !list2.contains(str)),
        list2.stream().filter(str -> !list1.contains(str)))
        .collect(Collectors.toList());
 
System.out.println("Different strings: " + list3);
```

上述代码，首先定义了两个`List<String>`类型的变量 list1 和 list2，分别表示要比较的两个列表。然后使用 Stream 的`concat()`
方法将两个 Stream 对象连接起来，得到一个由两个列表的不同元素组成的 Stream。

具体来说，第一个 Stream 对象是 list1 中与 list2 不同的元素，使用`filter()`方法过滤出来；第二个 Stream 对象是 list2 中与
list1 不同的元素，同样也是使用 filter()方法过滤出来。最后使用`collect(Collectors.toList())`将这些不同的元素收集到一个 List
中，返回的就是两个列表不同的元素组成的集合 list3。

最后在控制台输出集合 list3，即可得到 list1 和 list2 中不同的字符串。

### 方式三具体步骤如下

```java
List<Object> l1 = new ArrayList<>();
l1.add(new Object(1, "a"));
l1.add(new Object(2, "b"));
l1.add(new Object(3, "c"));
 
List<Object> l2 = new ArrayList<>();
l2.add(new Object(1, "a"));
l2.add(new Object(3, "c"));
l2.add(new Object(4, "d"));
 
List<Object> resultList = Stream.concat(l1.stream(), l2.stream())
        .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()))
        .entrySet().stream()
        .filter(e -> e.getValue() == 1)
        .map(Map.Entry::getKey)
        .collect(Collectors.toList());
```

首先将两个 List 通过`Stream.concat`方法合并成一个新的 Stream 对象，并使用`Collectors.groupingBy`
方法来按照对象值进行分组计数。然后通过过滤出现次数为 1 的对象，即为两个 List 中不同的对象。最后用`Collectors.toList`
方法将所有不同的对象放到一个新的 List 中。

需要注意的是，Object 类需要正确实现 equals 和 hashCode 方法，以便 Stream 能够正确进行对象的比较。同时，此方法适用于 List
中存放的对象是 Java 内置类型或者自定义类型，但不适用于包含数组、Map 等集合类型的情况。

### 方式四具体步骤如下

根据对象的属性进行比较两个拥有相同对象 List 的集合，并取出不同对象。

```java
List<ProductAttributeNameDTO> l1 = Arrays.asList(
        new ProductAttributeNameDTO(1L, "颜色"),
        new ProductAttributeNameDTO(2L, "尺码"),
        new ProductAttributeNameDTO(3L, "重量")
);
List<ProductAttributeNameDTO> l2 = Arrays.asList(
        new ProductAttributeNameDTO(1L, "颜色"),
        new ProductAttributeNameDTO(3L, "重量"),
        new ProductAttributeNameDTO(4L, "材质")
);
 
List<ProductAttributeNameDTO> resultList = Stream.concat(l1.stream(), l2.stream())
        .collect(Collectors.groupingBy(ProductAttributeNameDTO::getName, Collectors.counting()))
        .entrySet().stream()
        .filter(e -> e.getValue() == 1)
        .map(e -> e.getKey())
        .map(name -> Stream.concat(l1.stream(), l2.stream()).filter(p -> p.getName().equals(name)).findFirst().get())
        .collect(Collectors.toList());
```

首先将两个 List 通过`Stream.concat`方法合并成一个新的 Stream 对象，并使用`Collectors.groupingBy`
方法来按照属性名称进行分组计数。然后通过过滤出现次数为 1 的属性名称，即为两个 List 中不同的属性名称。最后使用`Stream.map`
方法获取对应名称的第一个`ProductAttributeNameDTO`对象，放到一个新的 List 中。

需要注意的是，`ProductAttributeNameDTO`类需要正确实现 equals 和 hashCode 方法，以便 Stream 能够正确进行对象的比较。同时，此方法适用于
List 中存放的是`ProductAttributeNameDTO`类型的对象。如果存放其他类型的对象，则需要根据对象的属性进行比较或自定义
Comparator 进行比较。
