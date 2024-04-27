---
author: xlc520
title: Java中Comparable和Comparator
excerpt: 
description: 
date: 2023-10-16
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# Java 中 Comparable 和 Comparator

Comparable 和 Comparator 都是接口，可以用于对集合元素进行排序。

然而，Comparable 和 Comparator 接口之间有许多不同之处，如下所示：

| Comparable                                                          | Comparator                                                           |
|---------------------------------------------------------------------|----------------------------------------------------------------------|
| 1) Comparable 提供单一的排序顺序。换句话说，我们可以根据单个元素（例如 id、name 和 price）对集合进行排序。 | Comparator 提供多个排序顺序。换句话说，我们可以根据多个元素（例如 id、name 和 price 等）对集合进行排序。    |
| 2) Comparable 影响原始类，即实际类被修改。                                        | Comparator 不影响原始类，即实际类不被修改。                                          |
| 3) Comparable 提供 compareTo()方法来排序元素。                                | Comparator 提供 compare()方法来排序元素。                                      |
| 4) Comparable 位于 java.lang 包中。                                      | Comparator 位于 java.util 包中。                                          |
| 5) 我们可以使用 Collections.sort(List)方法对 Comparable 类型的列表元素进行排序。         | 我们可以使用 Collections.sort(List, Comparator)方法对 Comparator 类型的列表元素进行排序。 |

## Java Comparable 示例

让我们看一个使用 Comparable 接口根据年龄对列表元素进行排序的示例。

文件：TestSort3.java

```java
//Java Program to demonstrate the use of Java Comparable. 
//Creating a class which implements Comparable Interface 
import java.util.*; 
import java.io.*; 
class Student implements Comparable<Student>{ 
    int rollno; 
    String name; 
    int age; 
    Student(int rollno,String name,int age){ 
        this.rollno=rollno; 
        this.name=name; 
        this.age=age; 
    } 
    public int compareTo(Student st){ 
        if(age==st.age) 
            return 0; 
        else if(age>st.age) 
            return 1; 
        else 
            return -1; 
    } 
} 
//Creating a test class to sort the elements 
public class TestSort3{ 
    public static void main(String args[]){ 
        ArrayList<Student> al=new ArrayList<Student>(); 
        al.add(new Student(101,"Vijay",23)); 
        al.add(new Student(106,"Ajay",27)); 
        al.add(new Student(105,"Jai",21)); 

        Collections.sort(al); 
        for(Student st:al){ 
            System.out.println(st.rollno+" "+st.name+" "+st.age); 
        } 
    } 
}
```

输出：

```plain
105 Jai 21101 Vijay 23106 Ajay 27
```

## Java Comparator 示例

让我们看一个使用 Java Comparator 接口的示例，其中我们使用不同的比较器对列表的元素进行排序。

Student.java

```java
class Student{ 
    int rollno; 
    String name; 
    int age; 
    Student(int rollno,String name,int age){ 
        this.rollno=rollno; 
        this.name=name; 
        this.age=age; 
    } 
}
```

AgeComparator.java

```java
import java.util.*; 
class AgeComparator implements Comparator<Student>{ 
    public int compare(Student s1,Student s2){ 
        if(s1.age==s2.age) 
            return 0; 
        else if(s1.age>s2.age) 
            return 1; 
        else 
            return -1; 
    } 
}
```

NameComparator.java

该类基于姓名提供比较逻辑。在这种情况下，我们使用 String 类的 compareTo()方法，该方法内部提供了比较逻辑。

```java
import java.util.*; 
class NameComparator implements Comparator<Student>{ 
    public int compare(Student s1,Student s2){ 
        return s1.name.compareTo(s2.name); 
    } 
}
```

TestComparator.java

在这个类中，我们通过按照姓名和年龄进行排序来打印对象的值。

```java
//Java Program to demonstrate the use of Java Comparator 
import java.util.*; 
import java.io.*; 
class TestComparator{ 
    public static void main(String args[]){ 
        //Creating a list of students 
        ArrayList<Student> al=new ArrayList<Student>(); 
        al.add(new Student(101,"Vijay",23)); 
        al.add(new Student(106,"Ajay",27)); 
        al.add(new Student(105,"Jai",21)); 

        System.out.println("Sorting by Name"); 
        //Using NameComparator to sort the elements 
        Collections.sort(al,new NameComparator()); 
        //Traversing the elements of list 
        for(Student st: al){ 
            System.out.println(st.rollno+" "+st.name+" "+st.age); 
        } 

        System.out.println("sorting by Age"); 
        //Using AgeComparator to sort the elements 
        Collections.sort(al,new AgeComparator()); 
        //Traversing the list again 
        for(Student st: al){ 
            System.out.println(st.rollno+" "+st.name+" "+st.age); 
        } 
    } 
}
```

输出：

```plain
Sorting by Name106 Ajay 27105 Jai 21101 Vijay 23
Sorting by Age105 Jai 21101 Vijay 23106 Ajay 27
```
