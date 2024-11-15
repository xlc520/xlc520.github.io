---
title: Spring Boot六种策略识别上传文件类型
excerpt:
description: Spring Boot六种策略识别上传文件类型
date: 2024-09-21
category: Java
tag: Java
author: xlc520
article: true
timeline: true
icon: java
---

```component VPBanner
title: Spring Boot六种策略识别上传文件类型
content: Spring Boot六种策略识别上传文件类型
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: Spring Boot六种策略识别上传文件类型
    link: /dev/Spring Boot六种策略识别上传文件类型
```

# Spring Boot六种策略识别上传文件类型

***1. 简介***

验证文件类型可以帮助防止恶意用户上传包含恶意代码或脚本的文件。例如，上传的文件可能包含病毒、木马或其他形式的恶意软件，这些都可能对服务器或其他用户造成危害。通过检查文件类型，可以减少这种风险。

本篇文章，我们将介绍获取文件 MIME 类型的各种策略。还将指出在哪些情况下我们应该优先选择一种策略。

***2. 实战案例***

**2.1 使用Java 7 API**

Java 7 开始提供了用于解析 MIME 类型的方法 Files.probeContentType(path)

```java
Path path = new File("d:/images/1.png").toPath() ;
String mimeType = Files.probeContentType(path);
```

该方法利用已安装的 **FileTypeDetector** 实现来探测 MIME 类型。它调用每个实现的 probeContentType 来解析类型。如果文件被任何一个实现识别，就会返回内容类型。如果没有，则会调用系统默认的文件类型检测器。

默认实现是针对操作系统的，根据我们使用的操作系统，可能会失败。除此之外，还需要注意的是，如果文件系统中不存在文件，该策略也会失败。此外，如果文件没有扩展名，也会失败。

**2.2 使用URLConnection**

**方式1：**

使用 URLConnection 的 getContentType() 方法来检索文件的 MIME 类型：

```java
File file = new File("d:/images/1.png");
URLConnection connection = file.toURI().toURL().openConnection();
String mimeType = connection.getContentType();
```

此种方法的一个主要缺点是速度非常慢。

**方式2：**

```java
File file = new File("d:/images/1.png") ;
String mimeType = URLConnection.guessContentTypeFromName(file.getName()) ;
```

使用 guessContentTypeFromStream() 方法，它使用输入流的前几个字符来确定类型。

**方式3：**

```java
File file = new File("d:/images/1.png") ;
FileNameMap fileNameMap = URLConnection.getFileNameMap();
String mimeType = fileNameMap.getContentTypeFor(file.getName());
```

该方法返回 URLConnection 所有实例使用的 MIME 类型表。然后使用该表来解析输入文件类型。

**2.3 MimeTypesFileTypeMap**

MimeTypesFileTypeMap 通过使用文件扩展名来解析 MIME 类型。这个类是 Java 6 附带的，因此在使用 JDK 1.6 时非常方便。

```java
File file = new File("d:/images/1.png");
MimetypesFileTypeMap fileTypeMap = new MimetypesFileTypeMap();
String mimeType = fileTypeMap.getContentType(file.getName());
```

在内部，该方法会查找一个名为 `mime.types` 的文件来进行类型解析。需要注意的是，该方法以特定顺序搜索文件，这一点非常重要：

1. 以编程方式向 `MimetypesFileTypeMap` 实例添加条目
2. 用户主目录中的` .mime.types`
3. `<java.home>/lib/mime.types`
4. 名为 `META-INF/mime.types` 的资源
5. 资源名为 `META-INF/mimetypes.default`（通常只能在 `activation.jar `文件中找到）。

**如果找不到文件，它将返回 `application/octet-stream` 作为响应。**

**2.4 使用`jMimeMagic`**

jMimeMagic 是一个有限制许可的库，我们可以用它来获取文件的 MIME 类型。

**引入依赖**

```xml
<dependency>
  <groupId>net.sf.jmimemagic</groupId>
  <artifactId>jmimemagic</artifactId>
  <version>0.1.5</version>
</dependency>
```

**使用**

```java
File file = new File("d:/images/1.png") ;
MagicMatch match = Magic.getMagicMatch(file, false) ;

System.out.println(match.getMimeType()) ;
```

该库可处理数据流，因此不要求文件存在于文件系统中。

**2.5 使用`Apache Tika`**

Apache Tika 是一个从各种文件中检测和提取元数据和文本的工具集。它拥有丰富而强大的 API，并自带 tika-core，我们可以用它来检测文件的 MIME 类型。

**引入依赖**

```xml
<dependency>
  <groupId>org.apache.tika</groupId>
  <artifactId>tika-core</artifactId>
  <version>2.9.2</version>
</dependency>
```

**使用**

```java
File file = new File("d:/images/1.png");
Tika tika = new Tika();
String mimeType = tika.detect(file);
```

该库依靠流前缀中的魔法标记来进行类型解析。即便你将文件后缀改了后还能正确的读取文件类型。

**2.6 使用Spring的MediaTypeFactory**

**MediaTypeFactory** 是 Spring web模块的一部分，它提供了处理媒体类型的方法。我们将使用它的 getMediaType() 方法根据文件名获取文件的媒体类型。

```java
File file = new File("d:/images/1.png");
Optional<MediaType> mimeTypeOptional = MediaTypeFactory.getMediaType(file.getName());
System.out.println(mimeTypeOptional.isPresent() ? mimeTypeOptional.get() : "未知");
```

使用该种方式，如果你将文件后缀改成html，那么它返回的将是text/html。所以此种方式不安全。




<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
