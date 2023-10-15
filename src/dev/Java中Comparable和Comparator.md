---
author: xlc520
title: Java中Comparable和Comparator
description: 
date: 2023-10-16
category: Java
tag: Java
article: true
timeline: true
icon: java
---



# Java中Comparable和Comparator

Comparable和Comparator都是接口，可以用于对集合元素进行排序。



然而，Comparable和Comparator接口之间有许多不同之处，如下所示：

| Comparable                                                   | Comparator                                                   |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1) Comparable提供单一的排序顺序。换句话说，我们可以根据单个元素（例如id、name和price）对集合进行排序。 | Comparator提供多个排序顺序。换句话说，我们可以根据多个元素（例如id、name和price等）对集合进行排序。 |
| 2) Comparable影响原始类，即实际类被修改。                    | Comparator不影响原始类，即实际类不被修改。                   |
| 3) Comparable提供compareTo()方法来排序元素。                 | Comparator提供compare()方法来排序元素。                      |
| 4) Comparable位于java.lang包中。                             | Comparator位于java.util包中。                                |
| 5) 我们可以使用Collections.sort(List)方法对Comparable类型的列表元素进行排序。 | 我们可以使用Collections.sort(List, Comparator)方法对Comparator类型的列表元素进行排序。 |



## Java Comparable示例



让我们看一个使用Comparable接口根据年龄对列表元素进行排序的示例。

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

```
105 Jai 21101 Vijay 23106 Ajay 27
```



## Java Comparator示例



让我们看一个使用Java Comparator接口的示例，其中我们使用不同的比较器对列表的元素进行排序。



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

该类基于姓名提供比较逻辑。在这种情况下，我们使用String类的compareTo()方法，该方法内部提供了比较逻辑。

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

```
Sorting by Name106 Ajay 27105 Jai 21101 Vijay 23
Sorting by Age105 Jai 21101 Vijay 23106 Ajay 27
```