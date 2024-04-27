---
author: xlc520
title: Java实现gz压缩与解压缩
excerpt: 
description: 
date: 2022-11-14
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# Java 实现 gz 压缩与解压缩

## 压缩

```java
/**
 * 将指定文件GZ压缩，并删除原文件。
 */
public static void gzip(String fileName) throws Exception {
    String outFileName = fileName + ".gz";
    GZIPOutputStream out = new GZIPOutputStream(new FileOutputStream(outFileName));
    FileInputStream in = new FileInputStream(fileName);
    byte[] buf = new byte[1024];
    int len;
    while ((len = in.read(buf)) > 0) {
        out.write(buf, 0, len);
    }
    in.close();
    out.finish();
    out.close();
    new File(fileName).delete();
}
```

## 解压缩

```java
/**
 * 将指定GZ文件解压缩，并删除原文件。
 */
public static void gunzip(String gzFileName) throws Exception {
    String outFileName = gzFileName.substring(0, gzFileName.length() - 3);
    // 文本文件输出流
    FileOutputStream fileOutput = new FileOutputStream(outFileName);
    GZIPInputStream gzFileInput = new GZIPInputStream(new FileInputStream(gzFileName));
    byte[] buf = new byte[1024];
    int len;
    while ((len = gzFileInput.read(buf)) > 0) {
        fileOutput.write(buf, 0, len);
    }
    gzFileInput.close();
    fileOutput.close();
    new File(gzFileName).delete();
}
```

## 调用示例

```java
public static void main(String[] args) {
    String filename = "/xxx/xxx/xxx.txt";
    try {
        // gzip压缩文件
        GzipUtils.gzip(filename);
        
        // gunzip解压文件
        GzipUtils.gunzip(filename + ".gz");
    } catch (Exception e) {
        e.printStackTrace();
    }
}
```
