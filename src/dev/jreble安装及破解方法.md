---
author: xlc520
title: jreble安装及破解方法
description: 
date: 2023-01-10
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# jreble安装及破解方法

*

*
在项目开发的过程中我们经常要重启项目进行代码的重新加载，在大项目开发的过程中这种不断的重新启动项目会浪费很多时间，在IDEA中我们可以使用ctrl+F9的方式进行热加载，但是这种方式对方法名的修改，和新加方法不能很好的支持。本章我们讲解一下功能强大的jrebel热加载工具，可以在不重启的情况下对新加的类、方法的修改都有很多好的支持，可以在实际项目开发中节省大量的时间，下面我们就一步一步开始进行安装设置。
**

## **一、安装插件**

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-c19397d241007d79c422291524cc08d6_r.jpg)

## **二、获取git代理服务器文件**

[ilanyu/ReverseProxygithub.com/ilanyu/ReverseProxy/releases/tag/v1.0](https://github.com/ilanyu/ReverseProxy/releases/tag/v1.0)

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-0531c01eea2c41be17b1101f67abdc99_r.jpg)

安装运行文件，监听端口8888

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-6d125df94f8e74239f5406a6058272fa_r.jpg)

## **三、运行IDEA激活**

[访问](https://www.guidgen.com/)： [Generate GUIDs online](https://www.guidgen.com/)生成ID ，选择激活服务器激活：

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-d13f9f1a60a0cd14598e76dcadf28e5e_r.jpg)

服务器写入 http://127.0.0.1:8888/网站获取的ID 邮箱随便填写。

稍等一下会出现激活界面：

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-a8ec52ff05355f905397e7e2e34bda6d_r.jpg)

## **四、在maven配置加入jrebel**

```xml
<build>
     <plugins>
         <plugin>
             <groupId>org.zeroturnaround</groupId>
             <artifactId>jrebel-maven-plugin</artifactId>
             <version>1.1.8</version>
             <executions>
                 <execution>
                     <id>generate-rebel-xml</id>
                     <phase>process-resources</phase>
                     <goals>
                         <goal>generate</goal>
                     </goals>
                 </execution>
             </executions>
         </plugin>
     </plugins>
</build>
```

## **五、设置编译方式**

**1） 设置为自动编译项目**

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-0321ff68c6fc9815509cdfb485fc9bd7_r.jpg)

**2） ctrl+alt+shit + / 调用register 勾选**

并找到图中红框的选项"compller.automake.allow.when.app.running"并勾选

close掉即可，此时已经生效，修改代码后ctrl+s会自动重新编译

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-6f704cfa339181e74bdecde476fd083c_r.jpg)

## **六、启动测试**

启动jrebel 功能： debug

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-0f04281ce71caf38d62bf491a89780d2_r.jpg)

项目启动完成在controller加入新方法，可以看到控制台输出热部署记载提示。

在idea中自带的ctrl+f9可以在不修改方法的情况下进行热加载，添加或修改后就不能重新编译了。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/v2-f7b5a2963397475acad2c6183cedb291_r.jpg)

访问测试

可以看到新加方法生效了。