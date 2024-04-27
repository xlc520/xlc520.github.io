---
author: xlc520
title: 分布式JVM监控工具
excerpt: 
description: 
date: 2022-05-24
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# 分布式 JVM 监控工具

## 介绍

**该项目为了方便开发者更快监控多个远程主机 jvm，如果你的项目是 Spring boot 那么很方便集成，jar 包引入即可，不是 Spring
boot 也不用气馁，你可以快速自行初始化一个 Spirng boot 程序引入 jar 包即可**

## 效果展示

![分布式JVM监控工具](https://bitbucket.org/xlc520/blogasset/raw/main/images3/t_70-16533795511054.png)

## 整体架构

![分布式JVM监控工具](https://bitbucket.org/xlc520/blogasset/raw/main/images3/t_70-16533795511055.png)

## git 地址

<https://github.com/xk4848123/monitor>
<https://github.com/xk4848123/monitor-server>

## 使用前提

需要机器中有 JDK，不仅仅是 JRE，配置好 java path，程序中依靠 ExcuteCmd 找寻 jdk 基本命令

## 手把手教你用

### 克隆 monitor-server

```shell
git clone https://github.com/xk4848123/monitor-server.git
```

![分布式JVM监控工具](https://bitbucket.org/xlc520/blogasset/raw/main/images3/t_70-16533795511051.png)

### idea -> Project from Existing Sources……

![分布式JVM监控工具](https://bitbucket.org/xlc520/blogasset/raw/main/images3/t_70-16533795511052.png)

### 选中项目 pom.xml

![分布式JVM监控工具](https://bitbucket.org/xlc520/blogasset/raw/main/images3/t_70-16533795511053.png)

### 修改 resources/application.properties

![分布式JVM监控工具](https://bitbucket.org/xlc520/blogasset/raw/main/images3/t_70-16533795511064.png)

```java
monitor.serve[0].name=serve-1
monitor.serve[0].address=http://127.0.0.1:8081/monitor(这里需要与客户端的monitor.path对应)
monitor.serve[1].name=serve-2
monitor.serve[1].address=http://127.0.0.1:8082(同上)
....
12345
```

这里可以配置多个监控主机,格式注意下

```plain
address=http://ip:port/xxx(xxx是你在monitor上配置的，下文中会有)
name=server-1(每个monitor不同即可，便于显示时区分)
```

### run monitor-server

![分布式JVM监控工具](https://bitbucket.org/xlc520/blogasset/raw/main/images3/t_70-16533795511065.png)
有异常没关系，我们把监控客户端也部起来就好了

### 说在前面

一个操作系统内部署一个监控客户端就好，当你有个多个 jvm 程序时，只要有一个部署就可以监控

### 下载 Release

<https://github.com/xk4848123/monitor>

![分布式JVM监控工具](https://bitbucket.org/xlc520/blogasset/raw/main/images3/t_70-16533795511066.png)

### 进入 Release 列表，下载 jar

![分布式JVM监控工具](https://bitbucket.org/xlc520/blogasset/raw/main/images3/t_70-16533795511067.png)

### 本地 mvn install(等到博主把 jar 传到中心仓库就不用这么么麻烦了)

**cmd 执行以下命令**

```shell
mvn install:install-file -DgroupId=com.github.xk4848123 -DartifactId=monitor-spring-boot-starter -Dversion=2.3.1 -Dpackaging=jar -Dfile=C:\Users\Administrator\Downloads\monitor-spring-boot-starter.jar
```

![分布式JVM监控工具](https://bitbucket.org/xlc520/blogasset/raw/main/images3/t_70-16533795511068.png)

### 在任意一个 Spring boot 项目中使用，我这里打开我本地一个叫 chat 的项目

![分布式JVM监控工具](https://bitbucket.org/xlc520/blogasset/raw/main/images3/t_70-16533795511069.png)

### 在 resources/application.properties 增加属性

```java
#决定访问路径,可以自行定义
monitor.path=monitor
#决定是否启动监控客户端
monitor.enable=true
1234
```

![分布式JVM监控工具](https://bitbucket.org/xlc520/blogasset/raw/main/images3/t_70-165337955110610.png)

### pom.xml 引入

![分布式JVM监控工具](https://bitbucket.org/xlc520/blogasset/raw/main/images3/t_70-165337955110611.png)

### 跑起项目

![分布式JVM监控工具](https://bitbucket.org/xlc520/blogasset/raw/main/images3/t_70-165337955110612.png)
OK！

### 我们现在访问 monitor-server(我当下部署的在<http://127.0.0.1:8888,大家根据自己的配置访问>)

![分布式JVM监控工具](https://bitbucket.org/xlc520/blogasset/raw/main/images3/t_70-165337955110613.png)
