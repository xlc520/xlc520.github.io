---
author: xlc520
title: SpringBoot万能导出excel工具
excerpt: 
description: 
date: 2023-02-25
category: Java
tag: [Java,SpringBoot]
article: true
timeline: true
icon: java
---

# SpringBoot 万能导出 excel 工具

> 类是不确定的 ，User ？Student ? District ? 不确定。
>
> 但是呢我们封装出来的函数，要足够支撑不同的类，我们自动去读取遍历 list ，然后导出生成文件。

## **核心的思路是什么 ？**

其实就还是利用 csv 文件的内容格式本质 ，看这两幅图 ：

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1677318316796-0.png)

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1677318316796-1.png)

我们要实现万能的类导出 excel ！！！

思路是什么 ：

① 我们从不确定的类 的集合 list 中，取出 里面的类。

反射一手，拿出里面的属性名， 做第一行表格行标题名称拼接。

②拼接内容

因为类不确定，那么我们就采取反射把类全部字段属性作为 key 丢到 map 里面，同时把值丢到 value 里面。

这样我们拼接内容的时候只需要根据 map 嘎嘎一顿遍历 拼接即可。

## **1.依赖**

```xml
<dependency>
    <groupId>org.apache.poi</groupId>
    <artifactId>poi-ooxml</artifactId>
    <version>3.15</version>
</dependency>
<dependency>
    <groupId>org.apache.poi</groupId>
    <artifactId>poi-scratchpad</artifactId>
    <version>3.15</version>
</dependency>
<dependency>
    <groupId>com.alibaba</groupId>
    <artifactId>fastjson</artifactId>
    <version>1.2.69</version>
</dependency>
<dependency>
    <groupId>commons-io</groupId>
    <artifactId>commons-io</artifactId>
    <version>2.5</version>
</dependency>
```

## **2. 核心的工具类，函数我都封装好了**

MyCsvFileUtil.java

```java
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.IOUtils;
 
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.text.SimpleDateFormat;
import java.util.*;

@Slf4j
public class MyCsvFileUtil {
    public static final String FILE_SUFFIX = ".csv";
    public static final String CSV_DELIMITER = ",";
    public static final String CSV_TAIL = "\r\n";
    protected static final String DATE_STR_FILE_NAME = "yyyyMMddHHmmssSSS";
 
    /**
     * 将字符串转成csv文件
     */
    public static void createCsvFile(String savePath, String contextStr) throws IOException {
 
        File file = new File(savePath);
        //创建文件
        file.createNewFile();
        //创建文件输出流
        FileOutputStream fileOutputStream = new FileOutputStream(file);
        //将指定字节写入此文件输出流
        fileOutputStream.write(contextStr.getBytes("gbk"));
        fileOutputStream.flush();
        fileOutputStream.close();
    }
 
    /**
     * 写文件
     *
     * @param fileName
     * @param content
     */
    public static void writeFile(String fileName, String content) {
        FileOutputStream fos = null;
        OutputStreamWriter writer = null;
        try {
            fos = new FileOutputStream(fileName, true);
            writer = new OutputStreamWriter(fos, "GBK");
            writer.write(content);
            writer.flush();
        } catch (Exception e) {
            log.error("写文件异常|{}", e);
        } finally {
            if (fos != null) {
                IOUtils.closeQuietly(fos);
            }
            if (writer != null) {
                IOUtils.closeQuietly(writer);
            }
        }
    }
 
    /**
     * 构建文件名称
     * @param dataList
     * @return
     */
    public static String buildCsvFileFileName(List dataList) {
        return dataList.get(0).getClass().getSimpleName() + new SimpleDateFormat(DATE_STR_FILE_NAME).format(new Date()) + FILE_SUFFIX;
    }
 
    /**
     * 构建excel 标题行名
     * @param dataList
     * @return
     */
    public static String buildCsvFileTableNames(List dataList) {
        Map<String, Object> map = toMap(dataList.get(0));
        StringBuilder tableNames = new StringBuilder();
        for (String key : map.keySet()) {
            tableNames.append(key).append(MyCsvFileUtil.CSV_DELIMITER);
        }
        return tableNames.append(MyCsvFileUtil.CSV_TAIL).toString();
    }
 
    /**
     * 构建excel内容
     * @param dataLists
     * @return
     */
    public static String buildCsvFileBodyMap(List dataLists) {
        //不管你传什么玩意，我都给你反射一手，搞成Map
        List<Map<String, Object>> mapList = new ArrayList<>();
        for (Object o : dataLists) {
            mapList.add(toMap(o));
        }
        //然后利用csv格式，对着map嘎嘎一顿拼接数据
        StringBuilder lineBuilder = new StringBuilder();
        for (Map<String, Object> rowData : mapList) {
            for (String key : rowData.keySet()) {
                Object value = rowData.get(key);
                if (Objects.nonNull(value)) {
                    lineBuilder.append(value).append(MyCsvFileUtil.CSV_DELIMITER);
                } else {
                    lineBuilder.append("--").append(MyCsvFileUtil.CSV_DELIMITER);
                }
            }
            lineBuilder.append(MyCsvFileUtil.CSV_TAIL);
        }
        return lineBuilder.toString();
    }
 
    /**
     * 类转map
     * @param entity
     * @param <T>
     * @return
     */
    public static<T> Map<String, Object> toMap(T entity){
        Class<? extends Object> bean = entity.getClass();
        Field[] fields = bean.getDeclaredFields();
        Map<String, Object> map = new HashMap<>(fields.length);
        for(Field field:fields){
            try {
                if(!"serialVersionUID".equals(field.getName())){
                    String methodName = "get"+field.getName().substring(0, 1).toUpperCase()+field.getName().substring(1);
                    Method method = bean.getDeclaredMethod(methodName);
                    Object fieldValue = method.invoke(entity);
                    map.put(field.getName(),fieldValue);
                }
            } catch (Exception e) {
                log.warn("toMap() Exception={}",e.getMessage());
            }
        }
        return map;
    }
}
```

### 代码注意点（各种小封装）

①类转 map

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1677318316796-2.png)

② 反射转 map 取字段属性名 拼接 标题

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1677318316796-3.png)

③ 针对`list<不确定类>` 转化成 `list<map>`，然后拼接 excel 内容

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1677318316796-4.png)

### 测试代码

```java
@RequestMapping("/createCsvFileJcTest")
public void createCsvFileJcTest() {
    //类不确定 随便怎么传都行
    List<District> districts = districtService.queryByParentCodes(Arrays.asList("110100"));
    //存放地址&文件名
    String fileName = "D:\\mycsv\\"+MyCsvFileUtil.buildCsvFileFileName(districts);
    //创建表格行标题
    String tableNames = MyCsvFileUtil.buildCsvFileTableNames(districts);
    //创建文件
    MyCsvFileUtil.writeFile(fileName, tableNames);
    //写入数据
    String contentBody = MyCsvFileUtil.buildCsvFileBodyMap(districts);
    //调用方法生成
    MyCsvFileUtil.writeFile(fileName, contentBody);
}
```

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1677318316796-5.png)

看看效果：

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1
1' version='1.1' xmlns='<http://www.w3.org/2000/svg>' xmlns:
xlink='<http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg> stroke='none' stroke-width='1' fill='none'
fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect
x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1677318316797-6.png)

导出的 excel 文件内容：

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1677318316797-7.png)

接下来换个类玩玩：

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1677318316797-8.png)

然后导出看看效果：

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1677318316797-9.png)

可以看到数据导出也是 OK 的：

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1677318316797-10.png)

没错就是这么简单， 当然也是抛转引玉， 希望大家看了这篇文章，可以借鉴这些反射的函数玩法，做更多的好玩的封装，比如加上一些自定义注解的解析，比如加上一些前后置拦截器拓展等等。

## 扩展

上面的示例中导出的表头是属性名，如果正式的导出通常需要自定义表头名称，我们这里可以使用自定义注解来完成。

JcExcelName.java

```java
@Target({ElementType.METHOD, ElementType.FIELD})
@Retention(RetentionPolicy.RUNTIME)
public @interface JcExcelName {
 
    String name() default "";
 
}
```

然后在想导出的类里面，想加看得懂的名字就加，不加就拿属性名：

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1677318316797-11.png)

随手再写一个 ，新的反射解析拿字段属性注解值函数：

```java
public static <T> List<String> resolveExcelTableName(T entity) {
    List<String> tableNamesList = new ArrayList<>();
    Class<? extends Object> bean = entity.getClass();
    Field[] fields = bean.getDeclaredFields();
    Map<String, Object> map = new HashMap<>(fields.length);
    for (Field field : fields) {
        try {
            if (!"serialVersionUID".equals(field.getName())) {
                String tableTitleName = field.getName();
                JcExcelName myFieldAnn = field.getAnnotation(JcExcelName.class);
                String annName = myFieldAnn.name();
                if (StringUtils.hasLength(annName)) {
                    tableTitleName = annName;
                }
                tableNamesList.add(tableTitleName);
            }
        } catch (Exception e) {
            log.warn("toMap() Exception={}", e.getMessage());
        }
    }
    return tableNamesList;
}
```

然后根据解析出来的注解值列名拼接 表格标题名格式：

```java
public static String buildCsvFileTableNamesNew(List<String> dataList) {
    StringBuilder tableNames = new StringBuilder();
    for (String name : dataList) {
        tableNames.append(name).append(MyCsvFileUtil.CSV_DELIMITER);
    }
    return tableNames.append(MyCsvFileUtil.CSV_TAIL).toString();
}
```

测试看看效果：

```java
public static void main(String[] args) {

    User user = new User();
    List<String> nameList = MapUtils.resolveExcelTableName(user);
    System.out.println(nameList.toString());
    String tableNames = buildCsvFileTableNamesNew(nameList);
    System.out.println(tableNames);

}
```

效果嘎嘎好：

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1677318316797-12.png)

然后反手就搞到我们前面的文章使用例子里面：

```plain
String tableNames = MyCsvFileUtil.buildCsvFileTableNamesNew( MyCsvFileUtil.resolveExcelTableName(dataList.get(0)));
```

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1677318316797-13.png)

执行一下示例接口，看看效果：

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1677318316797-14.png)

文件出来了:

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1677318316798-15.png)

打开看看效果：

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1677318316798-16.png)
