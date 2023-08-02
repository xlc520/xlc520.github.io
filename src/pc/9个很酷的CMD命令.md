---
author: xlc520
title: 9个很酷的CMD命令
description: 
date: 2022-06-03
category: pc
tag: pc
article: true
timeline: true
icon: computer
---

# 9个很酷的CMD命令

## **ipconfig**

功能：查询本机IP地址

操作方法：只要在在打开的cmd命令界面中输入“ipconfig”就可以了。

![图片](https://static.linch.eu.org/blogImage/640-16535737928341.png)

## **msg**

功能：向对方电脑发送一条文本提示

操作方法：首先你要知道对方的IP地址，接下来输入命令“msg /server:对方电脑IP * ”。在“*”后输入你要发送的内容即可。

![图片](https://static.linch.eu.org/blogImage/640-16535737928331.png)

## **Net user**

功能：查看本机账户情况

操作方法：和ipconfig一样，net user也有很多衍生的命令后缀，比方说“net user xxx 123456 /add”，输入后就会在系统中创建一个名为“xxx”的新用户，而新用户密码则是“123456”。

![图片](https://static.linch.eu.org/blogImage/640-16535737928342.png)

## **Net share**

作用：查看共享资源

操作方法：在cmd界面中输入“net share”查看所有已共享资源，然后输入“net share 要删除的共享文件夹 /delete”就可以啦！

## **Nslookup**

作用：检查网站IP地址

操作方法：在提示符状态输入“nslookup 对方网站域名”，哒哒哒哒……结果出来了！

![图片](https://static.linch.eu.org/blogImage/640-16535737928343.png)

## **Netsh wlan show**

作用：探秘Wi-Fi配置文件

操作方法：在提示符状态输入命令“netsh wlan show profile SSID key=clear”，输入完成后Windows会自动返回当前已连接WIFI的详细信息，包括SSID和连接密码。当前这里有一个前提，那就是你现在已经成功连接了。

![图片](https://static.linch.eu.org/blogImage/640-16535737928344.png)

## **telnet**

作用：看电影《星球大战》

操作方法：在提示符状态输入命令“telnet towel.blinkenlights.nl”，输入完成后稍等一会即可，电影会自动开演


## **|**

作用：将命令结果输出到剪贴板

操作方法：在需要导出结果的命令后方添加“|”，再加入导出位置就可以了。比方说“| clip”是导出到剪贴板，“| xxx.txt”是导出到xxx.txt。总之，你需要什么地方用，就放到哪儿，“|”支持绝大多数CMD指令。

![图片](https://static.linch.eu.org/blogImage/640-16535737928345.png)

## **&&**

作用：将多个命令“连接”起来，一步运行多组命令

操作方法：&&是CMD里一项“命令连接”语句，直接放在要连接的命令行中间即可。效果就是下图所示，一次输入后CMD会顺序执行所有命令。

![图片](https://static.linch.eu.org/blogImage/640-16535737928346.png)



--- EOF ---