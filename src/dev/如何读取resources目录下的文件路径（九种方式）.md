---
author: xlc520
title: 如何读取resources目录下的文件路径（九种方式）
description: 
date: 2022-08-13
category: Java
tag: Java
article: true
timeline: true
icon: java
password: 
---



# 如何读取resources目录下的文件路径（九种方式）

### **前情提要**

本文中提供了九种方式获取`resources`目录下文件的方式。其中打印文件的方法如下：

```java
/**
 * 根据文件路径读取文件内容
 *
 * @param fileInPath
 * @throws IOException
 */
public static void getFileContent(Object fileInPath) throws IOException {
    BufferedReader br = null;
    if (fileInPath == null) {
        return;
    }
    if (fileInPath instanceof String) {
        br = new BufferedReader(new FileReader(new File((String) fileInPath)));
    } else if (fileInPath instanceof InputStream) {
        br = new BufferedReader(new InputStreamReader((InputStream) fileInPath));
    }
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
    br.close();
}
```

###  

### **方式一**

主要核心方法是使用`getResource`和`getPath`方法，这里的`getResource("")`里面是空字符串

```java
public void function1(String fileName) throws IOException {
    String path = this.getClass().getClassLoader().getResource("").getPath();//注意getResource("")里面是空字符串
    System.out.println(path);
    String filePath = path + fileName;
    System.out.println(filePath);
    getFileContent(filePath);
}
```

###  

### **方式二**

主要核心方法是使用`getResource`和`getPath`方法，直接通过`getResource(fileName)`方法获取文件路径，注意如果是路径中带有中文一定要使用`URLDecoder.decode`解码。

```java
/**
 * 直接通过文件名getPath来获取路径
 *
 * @param fileName
 * @throws IOException
 */
public void function2(String fileName) throws IOException {
    String path = this.getClass().getClassLoader().getResource(fileName).getPath();//注意getResource("")里面是空字符串
    System.out.println(path);
    String filePath = URLDecoder.decode(path, "UTF-8");//如果路径中带有中文会被URLEncoder,因此这里需要解码
    System.out.println(filePath);
    getFileContent(filePath);
}
```

###

### **方式三**

直接通过`文件名+getFile()`来获取文件。如果是文件路径的话`getFile`和`getPath`效果是一样的，如果是URL路径的话`getPath`是带有参数的路径。

如下所示：

```properties
url.getFile()=/pub/files/foobar.txt?id=123456
url.getPath()=/pub/files/foobar.txt
```

使用`getFile()`方式获取文件的代码如下：

```java
/**
 * 直接通过文件名+getFile()来获取
 *
 * @param fileName
 * @throws IOException
 */
public void function3(String fileName) throws IOException {
    String path = this.getClass().getClassLoader().getResource(fileName).getFile();//注意getResource("")里面是空字符串
    System.out.println(path);
    String filePath = URLDecoder.decode(path, "UTF-8");//如果路径中带有中文会被URLEncoder,因此这里需要解码
    System.out.println(filePath);
    getFileContent(filePath);
}
```

###  

### **方式四（重要）**

直接使用`getResourceAsStream`方法获取流，上面的几种方式都需要获取文件路径，但是在SpringBoot中所有文件都在jar包中，没有一个实际的路径，因此可以使用以下方式。

```java
/**
 * 直接使用getResourceAsStream方法获取流
 * springboot项目中需要使用此种方法，因为jar包中没有一个实际的路径存放文件
 *
 * @param fileName
 * @throws IOException
 */
public void function4(String fileName) throws IOException {
    InputStream in = this.getClass().getClassLoader().getResourceAsStream(fileName);
    getFileContent(in);
}
```

###  

### **方式五（重要）**

主要也是使用`getResourceAsStream`方法获取流，不使用`getClassLoader`可以使用`getResourceAsStream("/配置测试.txt")`直接从`resources`根路径下获取，SpringBoot中所有文件都在jar包中，没有一个实际的路径，因此可以使用以下方式。

```java
/**
 * 直接使用getResourceAsStream方法获取流
 * 如果不使用getClassLoader，可以使用getResourceAsStream("/配置测试.txt")直接从resources根路径下获取
 *
 * @param fileName
 * @throws IOException
 */
public void function5(String fileName) throws IOException {
    InputStream in = this.getClass().getResourceAsStream("/" + fileName);
    getFileContent(in);
}
```

###  

### **方式六（重要）**

通过`ClassPathResource`类获取文件流，SpringBoot中所有文件都在jar包中，没有一个实际的路径，因此可以使用以下方式。

```java
/**
 * 通过ClassPathResource类获取，建议SpringBoot中使用
 * springboot项目中需要使用此种方法，因为jar包中没有一个实际的路径存放文件
 *
 * @param fileName
 * @throws IOException
 */
public void function6(String fileName) throws IOException {
    ClassPathResource classPathResource = new ClassPathResource(fileName);
    InputStream inputStream = classPathResource.getInputStream();
    getFileContent(inputStream);
}
```

###  

### **方式七**

通过绝对路径获取项目中文件的位置，只是本地绝对路径，不能用于服务器获取。

```java
/**
 * 通过绝对路径获取项目中文件的位置（不能用于服务器）
 * @param fileName
 * @throws IOException
 */
public void function7(String fileName) throws IOException {
    String rootPath = System.getProperty("user.dir");//E:\WorkSpace\Git\spring-framework-learning-example
    String filePath = rootPath + "\\chapter-2-springmvc-quickstart\\src\\main\\resources\\"+fileName;
    getFileContent(filePath);
}
```

###  

### **方式八**

通过`new File("")`获取当前的绝对路径，只是本地绝对路径，不能用于服务器获取。

```java
/**
 * 通过绝对路径获取项目中文件的位置（不能用于服务器）
 * @param fileName
 * @throws IOException
 */
public void function8(String fileName) throws IOException {
    //参数为空
    File directory = new File("");
    //规范路径：getCanonicalPath() 方法返回绝对路径，会把 ..\ 、.\ 这样的符号解析掉
    String rootCanonicalPath = directory.getCanonicalPath();
    //绝对路径：getAbsolutePath() 方法返回文件的绝对路径，如果构造的时候是全路径就直接返回全路径，如果构造时是相对路径，就返回当前目录的路径 + 构造 File 对象时的路径
    String rootAbsolutePath =directory.getAbsolutePath();
    System.out.println(rootCanonicalPath);
    System.out.println(rootAbsolutePath);
    String filePath = rootCanonicalPath + "\\chapter-2-springmvc-quickstart\\src\\main\\resources\\"+fileName;
    getFileContent(filePath);
}
```

###  

### **方式九**

主要是通过设置环境变量，将文件放在环境变量中，原理也是通过绝对路径获取。

示例中我设置了一个环境变量：`TEST_ROOT=E:\\WorkSpace\\Git\\spring-framework-learning-example`

```java
 System.getenv("TEST_ROOT");
 System.getProperty("TEST_ROOT")
```

通过设置环境变量的方式，然后通过绝对路径获取文件

```java
/**
 * 通过绝对路径获取项目中文件的位置
 *
 * @param fileName
 * @throws IOException
 */
public void function9(String fileName) throws IOException {
    System.setProperty("TEST_ROOT","E:\\WorkSpace\\Git\\spring-framework-learning-example");
    //参数为空
    String rootPath = System.getProperty("TEST_ROOT");
    System.out.println(rootPath);
    String filePath = rootPath + "\\chapter-2-springmvc-quickstart\\src\\main\\resources\\"+fileName;
    getFileContent(filePath);
}
```