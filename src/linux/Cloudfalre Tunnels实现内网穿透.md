---
author: xlc520
title: Cloudfalre Tunnels实现内网穿透
description: 
date: 2023-09-29
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
---

# Cloudfalre Tunnels实现内网穿透

## 前提条件

- 注册一个Cloudflare账号，选择免费计划就行
- 准备一个域名，没有就买一个，不想买可以自己找免费的

## 将域名解析转移到Cloudflare

1、登录Cloudfalre，将你的域名添加到`Zones`中，然后在`DNS`上找到名称服务器的网址，如下图红框所示，两个网址就是：
![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1695954595245-0.jpeg)
`将域名添加到Cloudflare中并找到NS服务网址`

2、比如，域名是从腾讯云购买的，则找到你的域名，在管理中将DNS解析服务器改成Cloudfalre的名称服务器网址即可，如下图
![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1695954595244-1.jpeg)
`在腾讯云控制台中修改域名的DNS解析服务器`

## 创建Tunnels

1、打开Cloudfalre控制台，依次点击`Zero Trust`-> `Access` -> `Tunnels`
![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1695954595244-2.jpeg)----> ![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1695954595244-3.jpeg)

2、创建Tunnel
1）点击`Create Tunnel`按钮，创建一个新的隧道
![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1695954595244-4.jpeg)

2）名称按自己想法填，然后点击`Save Tunnel`
![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1695954595244-5.jpeg)
3)保存后，回到Tunnels界面，找到上面创建的Tunnel，点击右边三个点，选择`Configure`,到达配置页面
![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1695954595244-6.jpeg)

4)在配置界面，切换到`Public Hostname`页签，点击`Add a Public Hostname`,创建一个新的穿通域名
![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1695954595245-7.jpeg)

> 参考图中的说明进行填写，划重点：
> `Subdomain`:就是你要用的子域名，比如你想用x.abc.com访问家中的服务，就填a
> `Domain`:就是你的域名，直接选择
> `Path`:路径，不用填
> `type`:内网服务的协议，一般是http，如果你非要给内网服务配置了https，你就选https
> `URL`:内网服务的ip+端口，比如你想穿透到内网的WP博客，则填写WP的ip和端口。
> `注意:此处如果内网服务是docker部署的，需要注意使用合适的ip和端口`

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1695954595245-8.jpeg)

1. 设置并保存后，回到域名的DNS记录页面，会看到已经自动添加了一个CNAME记录，并且开启了代理。什么都不要动，保持就行。

## 部署connector

上面的步骤已经完成了域名配置以及隧道配置，但是要想让域名自动找到你的内网服务，还需要你在内网安装一个程序，或者叫连接器，用于与Cloudfalre
Tunnel进行通信。
1、回到Tunnels界面，并点击`Configure`进入配置页面，在`Overview`页签中，可以看到选择安装环境的按钮，选择一个，然后安装下面的提示安装即可。
![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1695954595245-9.jpeg)

2、本文以`Docker`为例，选择`Docker`
按钮，下面会显示出一键启动镜像的命令，把命令复制到你的内网机器上，打开终端，直接执行即可。实际上就是启动了一个`Cloudflared`容器
![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1695954595245-10.jpeg)

