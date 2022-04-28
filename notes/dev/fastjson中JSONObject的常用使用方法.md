---
author: xlc520
title: fastjson 中JSONObject的常用使用方法
description: fastjson 中JSONObject的常用使用方法
date: 2022-04-10
category: Java
tag: Java
article: true
timeline: true
icon: java
password: 
---

# fastjson 中JSONObject的常用使用方法

### 1、导入需要的jar包

```xml
		<dependency>
            <groupId>net.oschina.zcx7878</groupId>
            <artifactId>fastdfs-client-java</artifactId>
            <version>1.27.0.0</version>
        </dependency>
```

2、常用的方法如下：

```java
public class Test {
    @org.junit.jupiter.api.Test
    void test()  {
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("name","yangjuan");
        jsonObject.put("age",23);
        jsonObject.put("gender","女");
        jsonObject.put("score",false);

        //1 get()获取值
        final Object age = jsonObject.get("age");
        final String age1 = jsonObject.getString("age")
        //2 containsKey()判断jsonObject 是否含有key
        final boolean name = jsonObject.containsKey("name");
        //3 isEmpty()判断jsonObject是否为空
        final boolean name1 = jsonObject.isEmpty();
        //4 remove() 移除对应的key 和value
        final Object score = jsonObject.remove("score");
        //5 containsValue()判断是否含有该值
        final boolean b = jsonObject.containsValue(23);
        //6 size() 判断键值对得数量
        final int size = jsonObject.size();
        //7 移除一个键值对
        final Object age2 = jsonObject.remove("age");
        //由于JSONObject是一个map，它还具有map特有的两个方法：
        //.8  Set<String> keySet() ：获取JSONObject中的key，并将其放入Set集合中
        final Set<String> keySet = jsonObject.keySet();
        for (String s1 : keySet) {
            System.out.println(s1);
        }
        //9.Set<Map.Entry<String, Object>> entrySet()：在循环遍历时使用，取得是键和值的映射关系，Entry就是Map接口中的内部接口
        final Set<Map.Entry<String, Object>> entries = jsonObject.entrySet();
        for (Map.Entry<String, Object> entry : entries) {
            System.out.println(entry.getKey()+"==="+entry.getValue());
        }
        //10 JsonObject转string  toString()  toJSONString()
        final String s1 = jsonObject.toString();
        final String s3 = jsonObject.toJSONString();
        //11 JsonObject 转Map
        final Map<String,Object> parse = (Map) JSONObject.parse(s1);
        parse.entrySet();
        for (Map.Entry m :parse.entrySet()){
            System.out.println(m.getKey()+"===="+m.getValue());
        }
        System.out.println(s3);
        System.out.println(s1);
    }
}
```

