---
title: Java-Stream集合筛选、归约、分组与聚合操作
excerpt:
description: Java-Stream集合筛选、归约、分组与聚合操作
date: 2024-10-30
category: Java
tag: Java
author: xlc520
article: true
timeline: true
icon: java
---

```component VPBanner
title: Java-Stream集合筛选、归约、分组与聚合操作
content: Java-Stream集合筛选、归约、分组与聚合操作
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: Java-Stream集合筛选、归约、分组与聚合操作
    link: /dev/Java-Stream集合筛选、归约、分组与聚合操作
```

# Java-Stream集合筛选、归约、分组与聚合操作

- 一、Stream流的特点和使用流程
  - 1. 特点
  - 2. 使用流程
- 二、Stream流的魅力
- 三、stream流的创建
  - 1. 通过集合创建
  - 2. 通过数组创建
  - 3. 通过Stream的静态方法
  - 4. 通过随机数生成
  - 5. 通过文件I/O
  - 6. 无限流
  - 7. 通过范围创建
- 四、Stream流的应用
  - 1. 中间操作
  - 2. 终端操作
  - 3. 收集操作
  - 4 其他操作：sequential(顺序流)/parallel(并行流)



## **一、Stream流的特点和使用流程**

Stream API允许开发者以声明性方式处理数据集合。可以简化复杂的数据操作，并且支持并行处理以提高性能。

### **1. 特点**

- **声明性：** Stream API允许你描述你想要做什么，而不是详细说明怎么做。
- **链式操作：** 可将多个操作链接在一起，形成一个流水线，每个操作都会生成一个新的流供下一个操作使用。
- **函数式编程：** Stream API鼓励使用无副作用的函数和 lambda 表达式。
- **并行处理：** Stream API支持并行流，可以充分利用多核处理器。
- **延迟执行：** Stream 操作是惰性的，只有在终端操作（如 collect、forEach）被调用时，整个流水线才会执行。
- **短路操作：** 某些终端操作（如 anyMatch、allMatch、noneMatch、findFirst）在找到结果后会立即停止处理。

### **2. 使用流程**

- **创建流：** 从数据源（如集合、数组、文件等）创建一个流。

```
  List<String> list = Arrays.asList("a", "b", "c");   
  Stream<String> stream = list.stream();
```

- **中间操作：** 对流进行一系列转换操作，如 filter（过滤）、map（映射）、sorted（排序）等。这些操作会返回一个新的流，不会立即执行。

```
Stream<String> filteredStream = stream.filter(s -> s.startsWith("a"));
```

- **终端操作：** 执行一个终端操作来结束流的处理并产生结果。终端操作会触发整个流水线的执行，并且不会返回一个新的流。

```
List<String> result = filteredStream.collect(Collectors.toList());
```

- **处理结果：** 使用终端操作返回的结果进行后续处理。

```
 result.forEach(System.out::println);
```

流只能被使用一次。一旦终端操作被触发，流就会被关闭，无法再次使用。

## **二、Stream流的魅力**

以下是一个：分组、排序然后提取每组中最小和最大值的案例，我们来看一下使用stream和不使用stream的代码实现。

```
List<Integer> numbers = Arrays.asList(1, 5, 3, 8, 10, 2, 6, 7, 4, 9);  
  
// 分组、排序并提取最小和最大值  
 Map<Boolean, List<Integer>> result = numbers.stream()  
      .collect(Collectors.groupingBy(n -> n % 2 == 0, 
      // 分组：奇数和偶数  
       Collectors.collectingAndThen(  
                Collectors.toList(), 
                // 收集到列表  
                list -> {  
                     // 对列表进行排序  
                    Collections.sort(list);  
                    // 提取并返回最小和最大值
                    return Lists.newArrayList(list.get(0),list.get(list.size() - 1));  
               }  
)));  
```

**如果我们不使用stream，代码可能是这样的**

```
import java.util.ArrayList;  
import java.util.Arrays;  
import java.util.Collections;  
import java.util.HashMap;  
import java.util.List;  
import java.util.Map;  
  
public class GroupAndSort {  
    public static void main(String[] args) {  
        List<Integer> numbers = Arrays.asList(1, 5, 3, 8, 10, 2, 6, 7, 4, 9);  
  
        Map<Boolean, List<Integer>> result = new HashMap<>();  
        result.put(true, new ArrayList<>()); 
        // 偶数分组  
        result.put(false, new ArrayList<>()); 
        // 奇数分组  
  
        for (Integer number : numbers) {  
            if (number % 2 == 0) {  
                result.get(true).add(number);  
            } else {  
                result.get(false).add(number);  
            }  
        }  
  
        // 对分组后的列表进行排序  
        Collections.sort(result.get(true));  
        Collections.sort(result.get(false));  
  
        // 提取并设置最小和最大值（注意这里需要使用get(list.size() - 1)来获取最大值）  
        List<Integer> evenResult = result.get(true);  
        if (evenResult.size() > 1) {  
            result.put(true, Arrays.asList(evenResult.get(0), evenResult.get(evenResult.size() - 1)));  
        } else if (evenResult.size() == 1) {  
            result.put(true, Arrays.asList(evenResult.get(0), evenResult.get(0))); 
            // 如果只有一个元素，则最小值和最大值相同  
        } else {  
            result.put(true, Collections.emptyList()); 
            // 如果没有元素，则为空列表  
        }  
  
        List<Integer> oddResult = result.get(false);  
        if (oddResult.size() > 1) {  
            result.put(false, Arrays.asList(oddResult.get(0), oddResult.get(oddResult.size() - 1)));  
        } else if (oddResult.size() == 1) {  
            result.put(false, Arrays.asList(oddResult.get(0), oddResult.get(0))); 
            // 如果只有一个元素，则最小值和最大值相同  
        } else {  
            result.put(false, Collections.emptyList()); 
            // 如果没有元素，则为空列表  
        }   
    }  
}
```

## **三、stream流的创建**

### **1. 通过集合创建**

调用集合对象的stream()方法来获取一个流

```
List<String> list = Arrays.asList("a", "b", "c");  
Stream<String> streamFromList = list.stream();
```

### **2. 通过数组创建**

使用Arrays.stream()方法从数组创建流，这适用于任何类型的数组。

```
int[] array = {1, 2, 3, 4, 5};  
IntStream intStream = Arrays.stream(array);  
 
// 或者对于对象数组  
String[] strArray = {"a", "b", "c"};  
Stream<String> stringStream = Arrays.stream(strArray);
```

基本类型的数组，Arrays.stream()会返回特定类型的流，如IntStream、LongStream或DoubleStream。如果需要将这些流转换为通用Stream，你可以使用boxed()方法。

### **3. 通过Stream的静态方法**

Stream类提供了几个静态方法来创建流

```
Stream<String> stream = Stream.of("a", "b", "c");
```

### **4. 通过随机数生成**

Random类可以用于生成随机数，并且你可以使用ints()、longs()或doubles()方法创建一个无限流。但通常会结合limit()方法来限制流的长度。

```
Random random = new Random();  
IntStream randomIntStream = random.ints(10, 0, 100);
  // 生成10个0到100之间的随机数
```

### **5. 通过文件I/O**

在处理文件时，可以使用Files类中的方法，如lines()，从文件中读取行并创建一个流。

```
Path path = Paths.get("path/to/file.txt");  
Stream<String> linesStream = Files.lines(path);
```

### **6. 无限流**

Stream API 提供了能够生成无限序列的流

- Stream.iterate(T seed, UnaryOperatorf): 创建一个无限顺序的流，通过反复应用函数f来生成元素。
- Stream.generate(Suppliers): 创建一个无限无序的流，其中每个元素由提供的Supplier生成。

```
// 使用iterate生成一个无限递增的整数流  
Stream<Integer> infiniteIntegerStream = Stream.iterate(0, i -> i + 1);  
 
// 使用generate生成一个无限的随机数流  
Stream<Double> infiniteRandomStream = Stream.generate(Math::random);
```

### **7. 通过范围创建**

```
IntStream.range(int startInclusive, int endExclusive): 
LongStream.range(int startInclusive, int endExclusive):
```

创建一个包含从startInclusive（包含）到endExclusive（不包含）之间的整数的流。

```
// 创建一个从0（包含）到10（不包含）的整数流  
IntStream intStream = IntStream.range(0, 10);  
```

无限流应该结合limit()或其他短路操作。

## **四、Stream流的应用**

### **1. 中间操作**

#### **1.1 Filter(过滤)/map(转换)/mapToInt/mapToDouble/mapToLong**

filter方法用于过滤流中的元素，而map方法用于对流中的每个元素执行某种操作，并返回一个新的流。

```
import java.util.Arrays;  
import java.util.List;  
import java.util.stream.Collectors;  
  
public class EmployeeFilterMapDemo {  
    public static void main(String[] args) {  
        // 创建一个员工列表:包含姓名和薪水两个属性  
        List<Employee> employees = Arrays.asList(  
                new Employee("Alice", 5500.0),  
                new Employee("Bob", 6000.0),  
                new Employee("Charlie", 4500.0),  
                new Employee("Diana", 5700.0)  
        );  
  
        // 使用Stream API的filter方法过滤出工资超过5000的员工，  
        // 然后使用map方法将每个员工映射成他们的名字，并收集到一个新的列表中  
        List<String> namesOfHighSalaryEmployees = employees.stream()  
                .filter(e -> e.getSalary() > 5000.0)  
                .map(Employee::getName)  
                .collect(Collectors.toList());  
  
        // 打印过滤并映射后的员工名字列表  
        System.out.println("Names of employees with salary > 5000: " + namesOfHighSalaryEmployees);  
    }  
}
```

此外streamAPI中还有指定类型的map方法：

- **mapToInt(ToIntFunction<? super T> mapper)**: 将流中的元素转换成int类型。
- **mapToLong(ToLongFunction<? super T> mapper)**: 将流中的元素转换成long类型。
- **mapToDouble(ToDoubleFunction<? super T> mapper):** 将流中的元素转换成double类型。

#### **1.2 flatMap(转换)**

flatMap方法在Java Stream API中用于将流中的每个元素转换成一个新的流，然后将这些新生成的流合并成一个单一的流。用于处理流中的集合或数组元素，以将它们“展平”成一个单一的元素流。

一个包含字符串列表的列表使用flatMap将其转换成一个包含所有字符串的单一流：

```
import java.util.Arrays;  
import java.util.List;  
import java.util.stream.Collectors;  
  
public class FlatMapExample {  
    public static void main(String[] args) {  
        // 创建一个包含列表的列表  
        List<List<String>> listOfLists = Arrays.asList(  
            Arrays.asList("A", "B", "C"),  
            Arrays.asList("D", "E"),  
            Arrays.asList("F", "G", "H", "I")  
        );  
  
        // 使用flatMap将内部列表展平成一个单一列表  
        List<String> flatList = listOfLists.stream()  
            .flatMap(List::stream) // 使用List的stream方法将每个列表转换成流，然后合并  
            .collect(Collectors.toList());  
  
        // 打印结果  
        System.out.println(flatList);  
    }  
}
/// 输出结果将是：
[A, B, C, D, E, F, G, H, I]
```

#### **1.3 Distinct(去重)**

distinct方法用于去除流中的重复元素。基于元素的 equals 和 hashCode 方法来确定哪些元素是重。

```
import java.util.Arrays;  
import java.util.List;  
import java.util.stream.Collectors;  
  
public class DistinctExample {  
    public static void main(String[] args) {  
        // 创建一个包含重复元素的列表  
        List<Integer> numbers = Arrays.asList(1, 2, 2, 3, 4, 4, 5, 5, 1);  
  
        // 使用distinct方法去除重复元素  
        List<Integer> distinctNumbers = numbers.stream()  
            .distinct()  
            .collect(Collectors.toList());  
  
        // 打印结果  
        System.out.println(distinctNumbers);  
    }  
}
// 输出结果将是：

[1, 2, 3, 4, 5]
```

#### **1.4 Limit(限制)/Skip(跳过)/Peek(展示)**

limit用于限制流中的元素数量，skip用于跳过流中的前N个元素，而peek则允许对流中的每个元素执行某种操作（如打印、修改等）而不改变流本身。peek通常用于调试或查看流中的元素。

```
import java.util.Arrays;  
import java.util.List;  
import java.util.stream.Collectors;  
  
public class LimitSkipPeekExample {  
    public static void main(String[] args) {  
        // 创建一个整数列表  
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);  
  
        // 使用peek打印流中的元素，然后使用limit和skip获取特定元素  
        List<Integer> result = numbers.stream()  
                .peek(System.out::println) // 打印每个元素  
                .skip(2)                   // 跳过前两个元素  
                .limit(3)                  // 获取接下来的三个元素  
                .collect(Collectors.toList()); // 收集结果  
  
        // 打印最终结果  
        System.out.println("Result after skip and limit: " + result);  
    }  
}
```

输出结果将是：

```
1  
2  
3  
4  
5  
Result after skip and limit: [3, 4, 5]
```

peek方法虽然执行了操作，但它不会改变流中的元素或流的结构。

#### **1.5 Sorted(排序)**

排序可以通过sorted()方法实现，该方法有两种形式：

- 无参的sorted()，它使用元素的自然顺序进行排序（要求元素实现Comparable接口）；
- 以及接受Comparator参数的sorted(Comparator<? super T> comparator)，它允许自定义排序规则。

```
import java.util.Arrays;  
import java.util.List;  
import java.util.stream.Collectors;  
  
public class SortingExample {  
    public static void main(String[] args) {  
        // 创建一个字符串列表  
        List<String> words = Arrays.asList("banana", "apple", "cherry", "date", "elderberry");  
  
        // 使用sorted()方法按自然顺序排序  
        List<String> sortedWords = words.stream()  
                .sorted()  
                .collect(Collectors.toList());  
  
        // 打印排序后的结果  
        System.out.println("Sorted words in natural order: " + sortedWords);  
  
        // 创建一个整数列表  
        List<Integer> numbers = Arrays.asList(5, 2, 9, 1, 7);  
  
        // 使用sorted()方法和自定义Comparator进行排序  
        List<Integer> sortedNumbers = numbers.stream()  
                .sorted((a, b) -> b - a) // 降序排序  
                .collect(Collectors.toList());  
  
        // 打印排序后的结果  
        System.out.println("Sorted numbers in descending order: " + sortedNumbers);  
    }  
}
```

输出结果：

```
Sorted words in natural order: [apple, banana, cherry, date, elderberry]  
Sorted numbers in descending order: [9, 7, 5, 2, 1]
```

#### **1.6 concat(两个流连接成一个流)**

concat(Stream<? extends T> a, Stream<? extends T> b): 静态方法，用于将两个流连接成一个流。

```
 // 创建两个整数列表  
List<Integer> list1 = Arrays.asList(1, 2, 3);  
List<Integer> list2 = Arrays.asList(4, 5, 6);  
  
// 将两个列表转换为流，并使用 concat 方法连接它们  
Stream<Integer> concatenatedStream = Stream.concat(list1.stream(), list2.stream());  
// 使用连接后的流进行一些操作，比如打印所有元素  
concatenatedStream.forEach(System.out::println);  
```

### **2. 终端操作**

#### **2.1  forEach/findFirst/findAny**

Stream API中，forEach、findFirst和findAny都是终端操作。forEach用于迭代流中的每个元素并执行一个操作，findFirst用于获取流中的第一个元素，而findAny则用于获取流中的任意元素（并行流特别有用，因为它可能更快）。

```
import java.util.Arrays;  
import java.util.List;  
import java.util.Optional;  
  
public class StreamMethodsExample {  
    public static void main(String[] args) {  
        // 创建一个整数列表  
        List<Integer> numbers = Arrays.asList(1, 2, 3);  
  
        // 使用forEach打印每个元素  
        numbers.stream()  
                .forEach(System.out::println);  
  
        // 使用findFirst获取第一个元素  
        Optional<Integer> firstNumber = numbers.stream()  
                .findFirst();  
  
        System.out.println("First number: " + firstNumber.orElse(null));  
  
        // 使用findAny获取任意元素  
        Optional<Integer> anyNumber = numbers.stream()  
                .findAny();  
  
        System.out.println("Any number: " + anyNumber.orElse(null));  
    }  
}
```

输出结果将是流中的每个数字

```
1  
2  
3  
First number: 1  
Any number: 1
```

findFirst和findAny返回的是一个Optional对象，这是因为流可能是空的。

#### **2.3 count/sum/max/min**

count、sum、max和min都是终端操作，用于对流中的元素进行计数、求和、找最大值和最小值。

```
// 创建一个整数列表  
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);  
  
// 使用count计算元素数量  
long count = numbers.stream()  
        .count();  
  
System.out.println("Count of elements: " + count);  
  
// 使用sum计算元素总和  
int sum = numbers.stream()  
        .mapToInt(Integer::intValue) // 转换为IntStream以使用sum  
        .sum();  
  
System.out.println("Sum of elements: " + sum);  
  
// 使用max获取最大值  
OptionalDouble max = numbers.stream()  
        .mapToDouble(Integer::doubleValue) // 转换为DoubleStream以使用max  
        .max();  
  
System.out.println("Max value: " + max.orElse(Double.NaN));  
  
// 使用min获取最小值  
OptionalDouble min = numbers.stream()  
        .mapToDouble(Integer::doubleValue) // 转换为DoubleStream以使用min  
        .min();  
  
System.out.println("Min value: " + min.orElse(Double.NaN));  
```

输出结果：

```
Count of elements: 10  
Sum of elements: 55  
Max value: 10.0  
Min value: 1.0
```

#### **2.4 anyMatch/allMatch/noneMatch**

anyMatch、allMatch和noneMatch是终端操作，用于检查流中的元素是否满足给定的谓词（条件）。anyMatch检查是否有任何元素满足条件，allMatch检查是否所有元素都满足条件，而noneMatch检查是否没有任何元素满足条件。

```
// 创建一个整数列表  
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);  
  
// 使用anyMatch检查是否有任何偶数  
boolean hasEven = numbers.stream()  
        .anyMatch(n -> n % 2 == 0);  
  
System.out.println("Has any even number? " + hasEven);  
  
// 使用allMatch检查是否所有数字都小于11  
boolean allLessThan11 = numbers.stream()  
        .allMatch(n -> n < 11);  
  
System.out.println("Are all numbers less than 11? " + allLessThan11);  
  
// 使用noneMatch检查是否没有任何数字等于0  
boolean noZeros = numbers.stream()  
        .noneMatch(n -> n == 0);  
  
System.out.println("Are there no zeros? " + noZeros);  
```

输出结果：

```
Has any even number? true  
Are all numbers less than 11? true  
Are there no zeros? true
```

#### **2.5 归约reduce**

reduce方法是一个终端操作，用于将流中的所有元素组合成一个单一的结果。它通常用于执行某种累积操作，比如计算元素的总和、乘积或连接字符串等。

- reduce(T identity, BinaryOperatoraccumulator) 此方法接受一个初始值和一个累积函数，用于归约流中的元素。
- reduce(BinaryOperatoraccumulator) 此方法不接受初始值，而是使用流中的第一个元素作为初始值，然后应用累积函数。

计算一个员工列表中所有员工的总薪水，同时找出薪水最高的员工。

```
public class Employee {  
    private String name;  
    private double salary;  
    ... 
}
```

使用reduce方法来计算总薪水和找出薪水最高的员工：

```
// 创建一个员工列表  
List<Employee> employees = Arrays.asList(  
        new Employee("Alice", 5000.0),  
        new Employee("Bob", 6000.0),  
        new Employee("Charlie", 5500.0),  
        new Employee("David", 6500.0)  
);  
  
// 使用初始值的 reduce 方法来计算所有员工的总薪水 
doubletotalSalary = employees.stream()  
                .reduce(0, (acc, employee) -> acc + employee.getSalary(), Integer::sum); 
System.out.println("Total salary of all employees: " + totalSalary);  
// 不使用初始值的 reduce 方法来连接所有员工的名字  
Optional<String> combinedNames = employees.stream()  
                .map(Employee::getName)  
                .reduce((name1, name2) -> name1 + ", " + name2);    
// 使用reduce找出薪水最高的员工  
Optional<Employee> highestPaidEmployee = employees.stream()  
        .reduce((emp1, emp2) -> emp1.getSalary() > emp2.getSalary() ? emp1 : emp2); 
  
System.out.println("Highest paid employee: " + highestPaidEmployee.orElse(null));  
  
// 或者使用max方法找出薪水最高的员工（更简洁）  
Optional<Employee> highestPaidEmployeeWithMax = employees.stream()  
        .max(Comparator.comparingDouble(Employee::getSalary));  
  
System.out.println("Highest paid employee (using max): " + highestPaidEmployeeWithMax.orElse(null));  
```

使用max方法和Comparator.comparingDouble来更简洁地找出薪水最高的员工。它更清晰地表达了我们的意图，并且代码更简洁。

输出结果：

```
Total salary of all employees: 23000.0  
Highest paid employee: Employee{name='David', salary=6500.0}  
Highest paid employee (using max): Employee{name='David', salary=6500.0}
```

### **3. 收集操作**

#### **3.1 collect收集(三个参数)**

collect方法在Java Stream API中通常用于收集流中的元素到某种集合或其他数据结构中。

- collect(Suppliersupplier, BiConsumer<R, ? super T> accumulator, BiConsumer<R, R> combiner):

重载版本的collect方法提供了更高的灵活性，允许你自定义收集过程。 这个collect方法接受三个参数：

- Suppliersupplier：一个供应器，用于创建新的结果容器。
- BiConsumer<R, ? super T> accumulator：一个累加器，用于将流中的元素添加到结果容器中。
- BiConsumer<R, R> combiner：一个组合器，用于合并两个结果容器（通常用于并行流）。

自定义一个收集过程，将流中的字符串连接成一个单独的字符串：

```
  // 创建一个字符串流  
Stream<String> stringStream = Stream.of("Hello", " ", "World", "!", " ", "Welcome", " ", "to", " ", "Java");  
  
// 使用自定义的 collect 方法来连接字符串  
String concatenated = stringStream.collect(  
            // 供应器：创建一个 StringBuilder  
            StringBuilder::new,  
            // 累加器：将每个字符串添加到 StringBuilder  
            StringBuilder::append,  
            // 组合器：将两个 StringBuilder 合并（这里其实不需要，因为我们是顺序处理的，但为了示例完整性还是提供了）  
            (left, right) -> left.append(right)  
        ).toString();  
  
// 输出结果  
System.out.println(concatenated);  
```

#### **3.1 toList/toMap/toSet/toArray()**

toList(), toMap(), 和 toSet() 是非常有用的终端操作，它们可以将流中的元素收集到相应的集合中

```
List<Employee> employees = Arrays.asList(  
                new Employee("Alice", 5000.0),  
                new Employee("Bob", 6000.0),  
                new Employee("Charlie", 5500.0),  
                new Employee("David", 6500.0)  
        );  
  
        // toList  
        List<String> employeeNames = employees.stream()  
                .map(Employee::getName)  
                .collect(Collectors.toList());  
        System.out.println("Employee Names (toList): " + employeeNames);  
  
        // toSet  
        Set<Double> uniqueSalaries = employees.stream()  
                .map(Employee::getSalary)  
                .collect(Collectors.toSet());  
        System.out.println("Unique Salaries (toSet): " + uniqueSalaries);  
  
        // toMap 
        Map<String, Double> employeeSalaries = employees.stream()  
                .collect(Collectors.toMap(  
                        Employee::getName,  
                        Employee::getSalary  
                ));  
        System.out.println("Employee Salaries (toMap): " + employeeSalaries);  

       // 使用 Stream API 将员工列表转换为 Employee[] 数组  
        Person[] employeeArray = employees.stream()  
            .toArray(Employee[]::new); 
    }  
```

#### **3.3 summing/averaging/summarizing**

Collectors 类提供了几个用于数据统计的收集器，如 averagingDouble、summarizingDouble 和 summingDouble。这些收集器通常与流的 collect 方法一起使用，用于对数值流（如员工薪水）进行统计。 Collectors提供了一系列用于数据统计的静态方法： 计数：count 平均值：averagingInt、averagingLong、averagingDouble 最值：maxBy、minBy 求和：summingInt、summingLong、summingDouble 统计以上所有：summarizingInt、summarizingLong、summarizingDouble

```
List<Employee> employees = Arrays.asList(  
                new Employee("Alice", 5000.0),  
                new Employee("Bob", 6000.0),  
                new Employee("Charlie", 5500.0),  
                new Employee("David", 6500.0)  
        );  
  
        // 使用 averagingDouble 计算平均薪水  
        double averageSalary = employees.stream()  
                .collect(Collectors.averagingDouble(Employee::getSalary));  
        System.out.println("Average Salary (averagingDouble): " + averageSalary);  
  
        // 使用 summarizingDouble 获取薪水的统计信息  
        DoubleSummaryStatistics salaryStats = employees.stream()  
                .collect(Collectors.summarizingDouble(Employee::getSalary));  
        System.out.println("Salary Statistics (summarizingDouble): " + salaryStats);  
  
        // 使用 summingDouble 计算薪水总和  
        double sumSalary = employees.stream()  
                .collect(Collectors.summingDouble(Employee::getSalary));  
        System.out.println("Sum of Salaries (summingDouble): " + sumSalary);  
    }  
```

输出结果：

```
Average Salary (averagingDouble): 5750.0  
Salary Statistics (summarizingDouble): DoubleSummaryStatistics{count=4, sum=23000.000000, min=5000.000000, average=5750.000000, max=6500.000000}  
Sum of Salaries (summingDouble): 23000.0
```

#### **3.4 summaryStatistics()**

对于数值流（如 IntStream, LongStream, DoubleStream），summaryStatistics返回描述该流统计信息的对象，如最小值、最大值、平均值等。

```
// 创建一个包含一些双精度浮点数的数组  
double[] numbers = {1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0};  
  
// 使用 DoubleStream 的 of 方法创建一个流，然后调用 summaryStatistics 方法  
 DoubleSummaryStatistics stats = Arrays.stream(numbers).summaryStatistics();  
  
 // 输出统计信息  
System.out.println("最小值: " + stats.getMin());  
System.out.println("最大值: " + stats.getMax());  
System.out.println("平均值: " + stats.getAverage());  
System.out.println("元素数量: " + stats.getCount());  
System.out.println("元素总和: " + stats.getSum());  
```

#### **3.6 接合joining**

Collectors.joining可以将流中的元素连接成一个字符串。这对将列表、集合或其他流数据结构转换为单个字符串表示形式特别有用。

```
List<Employee> employees = Arrays.asList(  
                new Employee("Alice", 5000.0),  
                new Employee("Bob", 6000.0),  
                new Employee("Charlie", 5500.0),  
                new Employee("David", 6500.0)  
        );  
  
        // 使用 joining 将员工名字连接成一个字符串，逗号分隔  
        String namesJoined = employees.stream()  
                .map(Employee::getName) 
// 提取员工的名字  
                .collect(Collectors.joining(", ")); 
// 使用逗号和空格作为分隔符连接名字  
  
        System.out.println("Employee names joined: " + namesJoined);
```

输出结果：

```
Employee names joined: Alice, Bob, Charlie, David
```

#### **3.7 分组(partitioningBy/groupingBy)**

```
List<Employee> employees = Arrays.asList(  
                new Employee("Alice", 5000.0, "Development"),  
                new Employee("Bob", 6000.0, "Management"),  
                new Employee("Charlie", 5500.0, "Development"),  
                new Employee("David", 6500.0, "Management"),  
                new Employee("Eve", 5200.0, "HR")  
        );  
  
        // 使用 partitioningBy 根据薪水是否高于6000进行分区  
        Predicate<Employee> salaryAbove6000 = employee -> employee.getSalary() > 6000;  
        Map<Boolean, List<Employee>> partitionedBySalary = employees.stream()  
                .collect(Collectors.partitioningBy(salaryAbove6000));  
        System.out.println("Employees partitioned by salary > 6000: " + partitionedBySalary);  
  
        // 使用 groupingBy 根据部门进行分组  
        Map<String, List<Employee>> groupedByDepartment = employees.stream()  
                .collect(Collectors.groupingBy(Employee::getDepartment));  
        System.out.println("Employees grouped by department: " + groupedByDepartment);  
    }  
```

- Collectors.partitioningBy 方法用于根据提供的谓词（Predicate）对流中的元素进行分区。
- Collectors.groupingBy 方法用于根据提供的分类函数对流中的元素进行分组。在这个例子中，分类函数是 Employee::getDepartment，它根据员工的部门对员工进行分组。结果是一个映射，其中键是部门名称，值是对应部门的员工列表。

### **4 其他操作：sequential(顺序流)/parallel(并行流)**

parallel和sequential是用来指定流的执行模式的方法。这两种模式决定了流中的元素是如何被处理的。

#### **4.1parallel（并行流，基于ForkJoinPool）**

调用parallelStream()或者对一个已经存在的流调用parallel()时，这个流以并行方式执行操作。并行流会尝试利用多个线程来同时处理多个元素，以提高处理速度。并行流是基于Java的ForkJoinPool实现的，它是一个特殊的线程池，适合执行可以并行处理的任务。

#### **4.2sequential（顺序流）**

对一个流调用sequential()时，这个流以顺序方式执行操作。顺序流中的元素按照它们在数据源中出现的顺序逐个进行处理。顺序流是在单个线程中执行的，因此不存在线程安全问题。

```
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);  
  
 // 使用顺序流  
System.out.println("Sequential Stream:");  
numbers.stream()  
           .sequential() // 默认就是顺序流，这里显式指定  
           .forEach(n -> {  
               System.out.print(n + " ");  
               try {  
                   Thread.sleep(100);
// 耗时操作  
               } catch (InterruptedException e) {  
                   e.printStackTrace();  
               }  
           });  
System.out.println("\n");  
  
// 使用并行流  
System.out.println("Parallel Stream:");  
numbers.stream()  
           .parallel()  
           .forEach(n -> {  
               System.out.print(n + " ");  
               try {  
                   Thread.sleep(100); 
// 耗时操作  
               } catch (InterruptedException e) {  
                   e.printStackTrace();  
               }  
           });  
System.out.println("\n");  
```

顺序流的可能输出（每次运行都应该相同）：

```
Sequential Stream:  
1 2 3 4 5 6 7 8 9 10
```

并行流的可能输出（每次运行都可能不同）：

```
Parallel Stream:  
4 2 6 8 1 3 9 5 7 10
```

不应该在forEach操作中执行有副作用的操作（比如修改共享变量），因为并行流不保证操作的顺序性。如果需要收集结果或者执行有状态的操作，应该使用像collect这样的终端操作来代替。






<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
