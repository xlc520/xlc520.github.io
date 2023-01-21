---
author: xlc520
title: Linux发送udptcp包最简单方法-netcat
description: 
date: 2022-11-03
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
password: 
---

# Linux发送udp/tcp包最简单方法-netcat

由于测试需要，需要从一台linux向另一台建立连接，并发送tcp/udp包。觉得用python写个client/server脚本有点麻烦，于是想找一个命令直接发送，一搜就搜到了netcat

## 网络拓扑

![img](https://static.xlc520.ml/blogImage/a2ae9f6f67a64c6587f07caffddca26b.png)

##  服务器

先在机器B上进行netcat服务器端的配置，配置使其监听机器B的6901端口，输入以下命令

```bash
> nc -v -n -l 192.168.0.4 6901
```

这里的参数解释如下：

- -v 显示详细输出
- -n 只使用数字的地址，不用DNS域名解析
- -l 使用监听模式

显示出第二行 Listening on... 的时候就说明监听成功啦

```bash
Listening on [192.168.0.4] (family 0, port 6901)
```

## 客户端

在服务器端开启成功后，我们在机器A上进行客户端的链接，使其链接到机器B的6901端口

```bash
> nc -v 192.168.0.4 6901
```

按下回车后应该可以看到如下输出

```bash
Connection to 192.168.0.4 6901 port [tcp/*] succeeded!
```

同时在机器B的终端上会显示：

```typescript
Connection from 192.168.0.3 33446 received!
```

## 后记

到这里A和B两台机器其实已经建立了tcp链接，也发过tcp包了。如果想要建立udp链接，则需要使用 -u 参数即可。建立链接之后，可以在任一机器终端输入文字并按回车，文字也会马上出现在另一台机器的终端上，比如你可以在A上输入：

```css
hello, I am A. Who are you ?
```

B的终端就会收到并展示这句话，有点互联网早期聊天的感觉。只要通过netcat这个小小的、简单的命令，就可以做到相互通话，操作系统提供的socket网络编程接口功不可没。打算有空去看看[netcat的源码](https://github.com/openbsd/src/blob/master/usr.bin/nc/netcat.c)，从简单的命令接触socket编程