---
title: Linux 命令：nc(netcat)
excerpt: Linux 命令：nc(netcat)
description: Linux 命令：nc(netcat)
date: 2024-05-19
category: Linux
tag: Linux
author: xlc520
article: true
timeline: true
icon: linux
---

```component VPBanner
title: Linux 命令：nc(netcat)
content: Linux 命令：nc(netcat)
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: Linux 命令：nc(netcat)
    link: /Linux 命令：nc(netcat)/
```



Linux 命令：nc(netcat)



## 1. 写在前面

本文主要介绍 Linux `nc(netcat)` 命令: 通过 `TCP` 或 `UDP` 协议在两个计算机网络之间读取和写入数据，该命令因系统而异（`netcat`、`nc`、`ncat` 等）。

`Netcat` 是跨平台的，可用于 Linux、macOS、Windows 和 BSD。可以使用 `Netcat` 来调试和监控网络连接、端口扫描/监听/重定向、传输数据（读写）、用作代理（TCP、SSH Socks、HTTP）等。

本文解释了 `nc` 命令（Netcat OpenBSD 版本），并提供了使用示例。

## 2. 如何在 Linux 中使用 nc(netcat) 命令?

### 2.1 安装

默认已预装在 macOS 和流行的 Linux 发行版（如 Ubuntu、Debian 或 CentOS）上。若需要安装 `netcat`工具，请根据 Linux 发行版使用以下命令。

- Debian/Ubuntu:

  ```shell
  sudo apt-get install netcat
  ```

- CentOS/RHEL:

  ```shell
  sudo yum install nc
  ```

- Fedora 22+ 和 RHEL 8、9:

  ```shell
  sudo dnf install nc
  ```

命令 `nc -h`，显示 `Netcat` 的帮助菜单，表明已安装并可以使用。

### 2.2 nc 命令语法

**基本语法:**

```shell
nc [<options>] <host> <port>
```

**指令组成部分:**

在 Ubuntu 上，`nc` 和 `netcat` 命令都是 OpenBSD 版本 Netcat 的符号链接。在 CentOS、Debian 和 RHEL 上，命令是 ncat。

- `<options>` 定义 `nc` 命令的行为。例如：添加详细输出、设置连接超时等；
- `<host>` IP 地址（如 192.168.0.1）/域名（如 example.com）;
- `<port>` 端口/服务名称，例如：端口 80（HTTP）或端口 22（SSH）连接;

**Netcat 有两种工作模式：**

- 连接模式（Connect mode）：在连接模式下，`Netcat` 作为客户端工作。该实用程序需要 

  和 参数。

- 监听模式（Listen mode）：在监听模式下，`Netcat` 作为服务器工作。省略 

  时，Netcat 会监听指定端口的所有可用地址。

### 2.3 Netcat (nc) 命令选项

下表概述了常用的 nc 命令选项：

| 参数              | 类型         | 描述                                       |
| ----------------- | ------------ | ------------------------------------------ |
| -4                | Protocol     | 仅使用 IPv4                                |
| -6                | Protocol     | 仅使用 IPv6                                |
| -U/--unixsock     | Protocol     | 使用 Unix 域套接字                         |
| -u/--udp          | Protocol     | 使用 UDP 连接                              |
| -p /--source-port | Connect mode | 设置本地主机使用的通信端口                 |
| -s /--source      | Connect mode | 设置本地主机送出数据包的IP地址             |
| -l/--listen       | Listen mode  | 监听连接，而不是使用连接模式               |
| -k/--keep-open    | Listen mode  | 保持连接开放，以便同时进行多个连接         |
| -v/--verbose      | Output       | 显示指令执行过程                           |
| -z                | Output       | 使用0输入/输出模式，只在扫描通信端口时使用 |

该列表并不全面。使用 man 命令查看手册页面以获取完整的选项列表：

```shell
root@dev:~# man netcat
或
root@dev:~# man nc
```

## 3. nc 命令示例

两台设备均以 Linux Ubuntu 20.04+ 虚拟机的形式运行，但也可以采用其他设备。请注意，不同操作系统的命令有所不同。

设备1 IP: `10.20.3.215`

设备2 IP: `10.20.2.226`

查看IP地址：

```shell
root@dev1:~# ip addr show ens3
```

### 3.1 Client/Server 连接

`Client/Server` 连接指两个设备之间的连接，一台设备充当服务器（监听），另一台充当客户端（连接）。

- 在设备1 上，以侦听模式运行 `nc` 命令，并提供一个端口：

  ```shell
  root@dev1:~# nc -lv 1234
  -----------------------------------------------------------------------------
  Listening on [0.0.0.0] (family 0, port 1234)
  ```

  若提示：`nc: getnameinfo: Temporary failure in name resolution`

  可增加 `n` 参数: `nc -lvn 1234`，或修改 `vi /etc/resolv.conf`: `nameserver`

  ```shell
  root@dev1:~# nc -lv 1234
  -----------------------------------------------------------------------------
  nc: getnameinfo: Temporary failure in name resolution
  
  root@dev1:~# nc -lvn 1234
  -----------------------------------------------------------------------------
  Listening on 0.0.0.0 1234
  ```

  `-l:` 选项开启监听模式，使 "设备1" 成为服务器;
  `-v:` 显示指令执行过程;
  `-n:` 直接使用IP地址，而不通过域名服务器;

- 在设备2 上，使用设备1 的 IP 地址和端口运行 `nc` 命令：

  ```shell
  root@dev2:~# nc -v 10.20.3.215 1234
  -----------------------------------------------------------------------
  Connection to 10.20.3.215 1234 port [tcp/*] succeeded!
  ```

  输出显示连接成功。设备 1 确认链接并打印设备 2 的 IP 地址。

  ```shell
  root@dev1:~# nc -lv 1234
  -----------------------------------------------------------------------
  Listening on [0.0.0.0] (family 0, port 1234)
  Connection from 10.20.2.226 9940 received!
  ```

  `Client/Server` 成功建立连接。

### 3.2 Ping 网站上的特定端口

使用 `nc` 代替 `ping` 命令测试网站的特定端口，例如:

```shell
root@dev1:~# nc -zv bing.com 443
-----------------------------------------------------------------------
Connection to bing.com 443 port [tcp/https] succeeded!
```

如果 `ping` 成功，输出将显示连接成功信息。`-z` 选项确保连接不会持续。

### 3.3 扫描端口

使用 `nc` 命令扫描打开的端口;

- 在设备1 上运行 `nc`，监听 1234 端口：

  ```shell
  root@dev1:~# nc -lkv 1234
  -----------------------------------------------------------------------
  Listening on [0.0.0.0] (family 0, port 1234)
  ```

  `-k` 选项可确保连接在断开后保持打开。

- 在设备2 上运行以下命令，检查 1234 端口是否打开：

  ```shell
  root@dev2:~# nc -zv 10.20.3.215 1234
  -----------------------------------------------------------------------
  Connection to 10.20.3.215 1234 port [tcp/*] succeeded!
  ```

  如果端口已打开，输出将显示连接成功信息。

- 或者，通过添加端口范围来扫描设备 1 上的多个端口。例如:

  ```shell
  root@dev2:~# nc -zv 10.20.3.215 1230-1235
  -----------------------------------------------------------------------
  nc: connect to 10.20.3.215 port 1230 (tcp) failed: Connection refused
  nc: connect to 10.20.3.215 port 1231 (tcp) failed: Connection refused
  nc: connect to 10.20.3.215 port 1232 (tcp) failed: Connection refused
  nc: connect to 10.20.3.215 port 1233 (tcp) failed: Connection refused
  Connection to 10.20.3.215 1234 port [tcp/*] succeeded!
  nc: connect to 10.20.3.215 port 1235 (tcp) failed: Connection refused
  ```

  输出结果显示每个端口的连接是否成功。

- 扫描端口范围时，使用 `grep` 过滤结果：

  ```shell
  root@dev2:~# nc -zv 10.20.3.215 1230-1235 2>&1 | grep 'succeeded'
  -----------------------------------------------------------------------
  Connection to 10.20.3.215 1234 port [tcp/*] succeeded!
  ```

  仅输出显示开放端口。

### 3.4 传输数据

- 设备1， 接受数据

  ```shell
  root@dev1:~/files# nc -l -p 1234 >output.txt
  ```

- 设备2，发送数据

  ```shell
  root@dev2:~/files_destination# echo "Hello Wrold" >input.txt
  root@dev2:~/files_destination# nc 10.20.3.215 1234 <input.txt
  ```

- 设备1，查看数据

  ```shell
  root@dev1:~/files# nc -l -p 1234 >output.txt
  root@dev2:~/files# cat output.txt 
  Hello Wrold
  ```

### 3.5 传输文件

`Netcat` 允许通过已建立的连接传输文件。要了解文件传输的工作原理，请执行以下操作：

- 使用 `touch` 命令在设备1 上创建样本文件：

  ```shell
  root@dev1:~# touch text1.txt
  ```

  该命令将创建一个空文本文件。

- 在设备1 上创建监听连接，并将文件重定向到 `nc` 命令：

  ```shell
  root@dev1:~# nc -lv 1234 < text1.txt
  -----------------------------------------------------------------------
  Listening on [0.0.0.0] (family 0, port 1234)
  ```

- 在设备2 上，连接设备1 并重定向文件：

  ```shell
  root@dev2:~# nc -zv 10.20.3.215 1234 > text1.txt
  -----------------------------------------------------------------------
  Connection to 10.20.3.215 1234 port [tcp/*] succeeded!
  root@dev2:~# ls
  -----------------------------------------------------------------------
  text1.txt
  ```

  使用 `ls` 命令，输出显示文件名，表明传输成功。

### 3.6 传输目录

`Netcat` 无法像传输文件那样传输目录。使用 `tar` 命令打包多个文件或目录，并将该命令导入 `Netcat`。

- 在任一设备上创建一个目录并添加多个文件：

  设备1:

  ```shell
  root@dev1~# mkdir files; touch files/file{1..5}.txt
  
  root@dev1:~/files# ls
  -----------------------------------------------------------------------
  file1.txt  file2.txt  file3.txt  file4.txt  file5.txt
  ```

  该命令将创建一个包含五个文本文件的目录。

- 使用 `cd` 命令进入目录

  ```shell
  cd files
  ```

- 在另一台设备上，创建并进入目标目录：

  设备2

  ```shell
  root@dev2:~# mkdir files_destination && cd files_destination
  root@dev2:~/files_destination#
  ```

- 在 1234 端口创建监听连接，并输入 `tar` 命令：

  ```shell
  root@dev2:~/files_destination# nc -lv 1234 | tar xfv -
  -----------------------------------------------------------------------
  Listening on [0.0.0.0] (family 0, port 1234)
  ```

  监听连接，并通过 `tar` 提取的文件。

- 在另一台设备上，用以下方式发送目录：

  设备1

  ```shell
  root@dev1:~/files# tar -cf - . | nc -v 10.20.2.226 1234
  -----------------------------------------------------------------------
  Connection to 10.20.2.226 1234 port [tcp/*] succeeded!
  ```

  可以看到连接建立并发送 `tar` 文件。

  ```shell
  root@dev2:~/files_destination# nc -lv 1234 | tar xfv -
  -----------------------------------------------------------------------
  Listening on [0.0.0.0] (family 0, port 1234)
  Connection from 10.20.3.215 23380 received!
  ./
  ./file4.txt
  ./file1.txt
  ./file3.txt
  ./file5.txt
  ./file2.txt
  ```

  接收端立即提取文件，传输完成。

### 3.7 创建网络服务器

使用 `Netcat` 创建网络服务器：

- 在设备1 上运行网络服务器，并监听 1234 端口的连接：

  ```shell
  root@dev1:~/files# nc -lv 1234
  -----------------------------------------------------------------------
  Listening on [0.0.0.0] (family 0, port 1234)
  ```

  缺省 IP 地址，网络服务器将在 `0.0.0.0` 上运行。

- 在设备2 上，浏览器中运行地址和端口,或者使用 curl 命令：

  ```shell
  root@dev2:~/files_destination# curl 10.20.3.215:1234
  ```

  页面暂时不显示任何内容。

- 设备1 上，浏览器或 `curl` 对发送过来的请求可见

  ```shell
  root@dev1:~/files# nc -lv 1234
  -----------------------------------------------------------------------
  Listening on [0.0.0.0] (family 0, port 1234)
  Connection from 10.20.2.226 50171 received!
  GET / HTTP/1.1
  Host: 10.20.3.215:1234
  User-Agent: curl/7.58.0
  Accept: */*
  ```

  显示请求信息，如:请求类型、主机和用户代理。

- 要向客户端（设备 2）发送响应，请在设备 1 上粘贴以下代码：

  设备1

  ```shell
  root@dev1:~/files# nc -lv 1234
  -----------------------------------------------------------------------
  Listening on [0.0.0.0] (family 0, port 1234)
  Connection from 10.20.2.226 50171 received!
  GET / HTTP/1.1
  Host: 10.20.3.215:1234
  User-Agent: curl/7.58.0
  Accept: */*
  
  HTTP/1.1 200 Everything OK
  Server: netcat
  Content-Type: text/html; charset=UTF-8
  -----------------------------------------------------------------------
  <!DOCTYPE html>
  <html>
  
  <head>
  <title>
  Netcat
  </title>
  </head>
  <body>
  <h1>A webpage served with nc</h1>
  </body>
  </html>
  ```

  设备2：回复后会立即更新显示信息；

  ```shell
  root@dev2:~/files_destination# curl 10.20.3.215:1234
  -----------------------------------------------------------------------
  <!DOCTYPE html>
  <html>
  
  <head>
  <title>
  Netcat
  </title>
  </head>
  <body>
  <h1>A webpage served with nc</h1>
  </body>
  </html>
  ```

  如果通过浏览器访问网络服务器，浏览器页面会实时获取更新信息。
  使用 `CTRL+C` 关闭服务器。

### 3.8 简单聊天服务器

利用 `Netcat` 通信功能创建一个简单的聊天服务器。

- 在设备1 上运行以下命令

  ```shell
  root@dev1:~/files# awk -W interactive '$0="Jp: "$0' | nc -lv 1234
  -----------------------------------------------------------------------
  Listening on [0.0.0.0] (family 0, port 1234)
  awk: option `-W interactive' unrecognized, ignored
  ```

  `awk` 命令有助于将用户名(Jp)添加到通过服务器发送的信息中。

  **备注：** 若 `awk: option `-W interactive' unrecognized, ignored` “awk” 可替换为 “mawk”

  参考链接

- 在设备2 上，添加不同的用户名并连接到聊天服务器

  设备 1、设备 2，相互发送消息可见；

  设备1:

  ```shell
  root@dev1:~/files# mawk -W interactive '$0="Jp: "$0' | nc -lv 1234
  -------------------------------------------------------------------------------------
  Listening on [0.0.0.0] (family 0, port 1234)
  Connection from 10.20.2.226 11606 received!
  Hi Paddy
  Paddy: Hi Jp
  ```

  设备2:

  ```shell
  root@dev2:~/files_destination# mawk -W interactive '$0="Paddy: "$0' | nc 10.20.3.215 1234
  -------------------------------------------------------------------------------------
  Jp: Hi Paddy
  Hi Jp
  ```

  自己的用户名不会显示在聊天窗口中。

### 3.9 发送 HTTP 请求

使用 `Netcat` 和 `printf` 向网站发送 HTTP 请求。例如，要通过 80 端口（用于 TCP/IP 连接）向 www.baidu.com 发送请求，请执行以下命令：

```shell
root@dev1:~/files# printf "GET / HTTP/1.0\r\n\r\n" | nc -v www.baidu.com 80
-------------------------------------------------------------------------------------
Connection to www.baidu.com 80 port [tcp/http] succeeded!
HTTP/1.0 200 OK
Accept-Ranges: bytes
Cache-Control: no-cache
Content-Length: 9508
Content-Type: text/html
Date: Tue, 26 Dec 2023 16:02:11 GMT
P3p: CP=" OTI DSP COR IVA OUR IND COM "
P3p: CP=" OTI DSP COR IVA OUR IND COM "
Pragma: no-cache
Server: BWS/1.1
Set-Cookie: BAIDUID=24395D2F77DCF8CFE08D2038383245D4:FG=1; expires=Thu, 
... ...
```

输出会打印 header 和内容。大多数页面会禁用 TCP 连接并获取 404 错误页面。




<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
