---
author: xlc520
title: JRebel热部署的使用
description: 
date: 2022-07-09
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# JRebel热部署的使用

对比图：

![JRebel热部署的使用](https://bitbucket.org/xlc520/blogasset/raw/main/images3/feabc010fbd0a0467f3bcb155faede3b-16565707073351.png)

IDEA在这里配置了自动编译：

![JRebel热部署的使用](https://bitbucket.org/xlc520/blogasset/raw/main/images3/c2dc072b4fb156f0ee8da0c3dd86abb5-16565707098543.png)

所以当你的代码有变化时，JRebel会自动重新加载最新的代码，所以不用你手动重新编译

## **注意事项：**

c盘下的用户名一定不能为中文名称，否则会一直提示路径错误

![注意事项](https://bitbucket.org/xlc520/blogasset/raw/main/images3/20210318093831211.png)

## 1、安装jrebel插件

File–》Settings—》plugins----》marketplace----》搜索jrebel

![JRebel热部署的使用](https://bitbucket.org/xlc520/blogasset/raw/main/images3/20210318095405727.png)

安装成功后会重启idea，出现下面的图片

![JRebel热部署的使用](https://bitbucket.org/xlc520/blogasset/raw/main/images3/2021031809551542.png)

## 2、配置jrebel插件

### 2.1激活jrebel

先获取GUID

- 第一种

这里感谢薯条大佬搭建的激活服务器，直接访问[https://jrebel.qekang.com](https://jrebel.qekang.com)
，复制界面上展示的激活链接，填充到激活页面，然后随便填写一个邮箱名即可完成激活。

![JRebel热部署的使用](https://bitbucket.org/xlc520/blogasset/raw/main/images3/715c5a15e09cf6bf8bc357073a697464.png)

```
https://jrebel.qekang.com/xxxx
```

- 第二种

在线生成GUID地址 （[**https://www.guidgen.com/**](https://www.guidgen.com/)）， PS：如果失效刷新GUID替换就可以！

输入url：`https://jrebel.qekang.com/GUID`(其中的GUID是2.1生成的，邮箱自己随意填写)

之前点击蓝色字体会出现这个窗口，将上面获取到的GUID根据图片提示输入进去

![JRebel热部署的使用](https://bitbucket.org/xlc520/blogasset/raw/main/images3/20210318094513359.png)

如果没有出现下面提示，请确定自己的网络通畅，然后再次点击激活，如果还不行，更改guid

![JRebel热部署的使用](https://bitbucket.org/xlc520/blogasset/raw/main/images3/2021031809480460.png)

- 继续点击我同意【I agree】

## 3、JRebel 配置

### 3、1 将工作模式改成离线工作，！！！！

不修改成离线工作，你的jrebel会一直报错，当然某些小伙伴的是没有问题

![JRebel热部署的使用](https://bitbucket.org/xlc520/blogasset/raw/main/images3/20210318100401836.png)

- 你的右上角会有两个绿色的小图标，这个就是jrebel启动

![JRebel热部署的使用](https://bitbucket.org/xlc520/blogasset/raw/main/images3/20210318100852670.png)

## 4、使用jreBel

### 4、1 进行项目热部署

- 左下角有一个JreBel，点击在打开的窗口，选择你所需要进行热部署的项目。

  ![JRebel热部署的使用](https://bitbucket.org/xlc520/blogasset/raw/main/images3/20210603103938126.png)

- 勾选后会生成一个rebel.xml文件，此文件可以忽略

![JRebel热部署的使用](https://bitbucket.org/xlc520/blogasset/raw/main/images3/20210603104004373.png)

### 4、3 更改后使用ctrl+f9实现不重启服务器部署项目

- 或者点击小锤子也是
  ![JRebel热部署的使用](https://bitbucket.org/xlc520/blogasset/raw/main/images3/20210603104217131.png)

### 4、4 录制快捷键

- 原有的保存操作不方便一只手操作，设置新的快捷键方便操作
  -edit—>macros—>start macro recording
  ![JRebel热部署的使用](https://bitbucket.org/xlc520/blogasset/raw/main/images3/2021060310490611.png)
- 右下角会出现一个提示
  ![JRebel热部署的使用](https://bitbucket.org/xlc520/blogasset/raw/main/images3/20210603104826766.png)
- 然后点击ctrl+F9，此时右下角会有提示，点击红色停止
  ![JRebel热部署的使用](https://bitbucket.org/xlc520/blogasset/raw/main/images3/20210603105037206.png)
- 会弹出一个窗口，在窗口中输入build

![JRebel热部署的使用](https://bitbucket.org/xlc520/blogasset/raw/main/images3/20210603105130362.png)

- 打开设置，找到kaymap

![JRebel热部署的使用](https://bitbucket.org/xlc520/blogasset/raw/main/images3/20210603105243414.png)

- 右击选择第一个，在弹出的窗口输入你想使用的快捷键，`ctrl+s` 已经被使用，建议使用`alt+z`或者`alt+s`

![JRebel热部署的使用](https://bitbucket.org/xlc520/blogasset/raw/main/images3/2021060310541226.png)

### 警告！！！

JreBel不适用于resources包下面的文件，修改此包下面的必须重启，否则不生效。