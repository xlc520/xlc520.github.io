---
author: xlc520
title: Java 8 Stream 之 collect()
description: 
date: 2022-11-21
category: Java
tag: Java
article: true
timeline: true
icon: java
---



# Java 8 Stream 之 collect()

# 前言



本身我是一个比较偏向少使用Stream的人，因为调试比较不方便。

但是, 不得不说，stream确实会给我们编码带来便捷。

所以还是忍不住想分享一些奇技淫巧。



# 正文



Stream流 其实操作分三大块 ： 

 创建
 处理 
 收集


我今天想分享的是 收集 这part的玩法。

![img](https://static.xlc520.ml/blogImage/3426558c692f4273921554c6c043e41b.png)

 

 

OK，开始结合代码示例一起玩下：



lombok依赖引入，代码简洁一点：

```java
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.20</version>
            <scope>compile</scope>
        </dependency>	
```


准备一个UserDTO.java 



```java
@Data
public class UserDTO {
 
    /**
     * 姓名
     */
    private  String name;
    /**
     * 年龄
     */
    private  Integer age;
    /**
     * 性别
     */
    private  String sex;
    /**
     * 是否有方向
     */
    private  Boolean hasOrientation;
 
}
```



准备一个模拟获取List的函数：


```java
    private static List<UserDTO> getUserList() {
        UserDTO userDTO = new UserDTO();
        userDTO.setName("小冬");
        userDTO.setAge(18);
        userDTO.setSex("男");
        userDTO.setHasOrientation(false);
        UserDTO userDTO2 = new UserDTO();
        userDTO2.setName("小秋");
        userDTO2.setAge(30);
        userDTO2.setSex("男");
        userDTO2.setHasOrientation(true);
        UserDTO userDTO3 = new UserDTO();
        userDTO3.setName("春");
        userDTO3.setAge(18);
        userDTO3.setSex("女");
        userDTO3.setHasOrientation(true);
        List<UserDTO> userList = new ArrayList<>();
        userList.add(userDTO);
        userList.add(userDTO2);
        userList.add(userDTO3);
        return userList;
    }
```





## 第一个小玩法

## 将集合通过Stream.collect() 转换成其他集合/数组：  

现在拿`List<UserDTO> `做例子



转成  `HashSet<UserDTO> `：

```java
        List<UserDTO> userList = getUserList();
 
        Stream<UserDTO> usersStream = userList.stream();
 
        HashSet<UserDTO> usersHashSet = usersStream.collect(Collectors.toCollection(HashSet::new));
```



转成  `Set<UserDTO> usersSet` ：

```java
        List<UserDTO> userList = getUserList();
 
        Stream<UserDTO> usersStream = userList.stream();
 
        Set<UserDTO> usersSet = usersStream.collect(Collectors.toSet());
```



转成  `ArrayList<UserDTO> `：

```java
        List<UserDTO> userList = getUserList();
 
        Stream<UserDTO> usersStream = userList.stream();
        
        ArrayList<UserDTO> usersArrayList = usersStream.collect(Collectors.toCollection(ArrayList::new));
```



转成  `Object[] objects` ：

```java
        List<UserDTO> userList = getUserList();
 
        Stream<UserDTO> usersStream = userList.stream();
 
        Object[] objects = usersStream.toArray();
```



转成  `UserDTO[] users `：

```java
        List<UserDTO> userList = getUserList();
 
        Stream<UserDTO> usersStream = userList.stream();
 
        UserDTO[] users = usersStream.toArray(UserDTO[]::new);
        for (UserDTO user : users) {
            System.out.println(user.toString());
        }
```



## 第二个小玩法

## 聚合（求和、最小、最大、平均值、分组）



### 找出年龄最大：



stream.max（）



写法 1：

```
 List<UserDTO> userList = getUserList();
 Stream<UserDTO> usersStream = userList.stream();
 Optional<UserDTO> maxUserOptional = 
         usersStream.max((s1, s2) -> s1.getAge() - s2.getAge());
 if (maxUserOptional.isPresent()) {
     UserDTO masUser = maxUserOptional.get();
     System.out.println(masUser.toString());
}
```

写法2： 

 ```
 List<UserDTO> userList = getUserList(); Stream<UserDTO> usersStream = userList.stream();
 Optional<UserDTO> maxUserOptionalNew = sersStream.max(Comparator.comparingInt(UserDTO::getAge));
 if (maxUserOptionalNew.isPresent()) {
     UserDTO masUser = maxUserOptionalNew.get();
     System.out.println(masUser.toString());
 }
 ```

效果：

![img](https://static.xlc520.ml/blogImage/75c5e09c2fa54cfebbcbb3c85e06fa57.png)

 输出：

> 
> UserDTO(name=小秋, age=30, sex=男, hasOrientation=true)



### 找出年龄最小：



stream.min（）



写法 1：

 ```
 Optional<UserDTO> minUserOptional = sersStream.min(Comparator.comparingInt(UserDTO::getAge));
 if (minUserOptional.isPresent()) {
     UserDTO minUser = minUserOptional.get();
     System.out.println(minUser.toString());
 }
 ```

写法2： 


 ```
 Optional<UserDTO> min = usersStream.collect(Collectors.minBy((s1, s2) -> s1.getAge() - 2.getAge()));
 ```





### 求平均值：



 ```
 List<UserDTO> userList = getUserList();
 Stream<UserDTO> usersStream = userList.stream();
 Double avgScore = usersStream.collect(Collectors.averagingInt(UserDTO::getAge));
 ```

效果：

![img](https://static.xlc520.ml/blogImage/49bc1d66e04c490aa4dcd19935f56ac6.png)

 

### 求和：



写法1：



 ```
 Integer reduceAgeSum = usersStream.map(UserDTO::getAge).reduce(0, Integer::sum);
 ```



写法2：


 ```
 int ageSumNew = usersStream.mapToInt(UserDTO::getAge).sum();
 ```



### 统计数量：  

 ```
 long countNew = usersStream.count();
 ```


### 简单分组：



按照具体年龄分组:

 ```
 //按照具体年龄分组
 Map<Integer, List<UserDTO>> ageGroupMap = usersStream.collect(Collectors.groupingBy((UserDTO::getAge)));
 ```

效果： 

![img](https://static.xlc520.ml/blogImage/497c8a9436fd42ae94c9bbbbda1e0a57.png)

 



分组过程加写判断逻辑：

  

 ```
 //按照性别 分为"男"一组  "女"一组
 Map<Integer, List<UserDTO>> groupMap = usersStream.collect(Collectors.groupingBy(s -> {
     if (s.getSex().equals("男")) {
         return 1;
     } else {
         return 0;
     }
 }));
 ```

效果：

 ![img](https://static.xlc520.ml/blogImage/71e5c6bb9fd143fabf251e98c610092a.png)

 



### 多级复杂分组：



 ```
 //多级分组
 // 1.先根据年龄分组
 // 2.然后再根据性别分组
 Map<Integer, Map<String, Map<Integer, List<UserDTO>>>> moreGroupMap = usersStream.collect(Collectors.groupingBy(
 
         //1.KEY(Integer)             VALUE (Map<String, Map<Integer, List<UserDTO>>)
         UserDTO::getAge, Collectors.groupingBy(
                 //2.KEY(String)             VALUE (Map<Integer, List<UserDTO>>)
                 UserDTO::getSex, Collectors.groupingBy((userDTO) -> {
                     if (userDTO.getSex().equals("男")) {
                         return 1;
                     } else {
                         return 0;
                    }
                 }))));
 ```

效果：

![img](https://static.xlc520.ml/blogImage/a22f1c8f49954825840c34c955d43972.png)

 