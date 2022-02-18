---
author: xlc520
title: Windows子系统
description: Windows子系统优化
time: 2022-02-16
category: Linux
tags: Linux
article: true
timeline: true
icon: 
password: 

---

# Windows子系统



## 更换apt源。

因为Linux子系统的apt源使用的是官方源，需要连接到国外的服务器。所以安装一些软件时下载会很慢，我们可以改用国内的镜像apt源。国内的镜像源主要有：

可以直接使用 vim 对 /etc/apt/sources.list文件进行修改。

先进行一下备份。

```shell
sudo mv /etc/apt/sources.list /etc/apt/sources.list.bak
```

然后

```shell
sudo vim  /etc/apt/sources.list
```

#### 阿里源ubuntu 20.04(focal) 

```shell
deb http://mirrors.aliyun.com/ubuntu/ focal main restricted
deb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted
deb http://mirrors.aliyun.com/ubuntu/ focal universe
deb http://mirrors.aliyun.com/ubuntu/ focal-updates universe
deb http://mirrors.aliyun.com/ubuntu/ focal multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-updates multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted
deb http://mirrors.aliyun.com/ubuntu/ focal-security universe
deb http://mirrors.aliyun.com/ubuntu/ focal-security multiverse


ubuntu 18.04(bionic) 配置如下

deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
```

#### 科大源

```shell
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
```

#### 网易源

```shell
deb http://mirrors.163.com/ubuntu/ wily main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ wily-security main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ wily-updates main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ wily-proposed main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ wily-backports main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ wily main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ wily-security main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ wily-updates main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ wily-proposed main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ wily-backports main restricted universe multiverse
```

选择一个源添加到文件最前面或直接替换掉原文件。保存后运行

```
sudo apt-get update
```



## 在WSL2下安装Docker

wsl2已经完整使用了linux内核此种方式与之前在vmware虚拟机安装docker类似，依次执行如下命令：

```
$ curl -fsSL https://get.docker.com -o get-docker.sh$ sudo sh get-docker.sh
```

执行脚本安装过程中，脚本提示“**建议使用Docker Desktop for windows**”，20s内按Ctrl+C会退出安装，所以需要等待20s，此种方式需要访问网络。

最后一个步骤，启动Docker daemon。但是此处有一个问题，WSL2经过测试无法使用systemctl命令（此问题已经解决），因此我们使用service命令启动Docker daemon进程。命令如下所示：

```
sudo service docker start
* Starting Docker: docker
```

```shell
[
	"https://registry.docker-cn.com",
    "https://dockerhub.azk8s.cn",
    "https://reg-mirror.qiniu.com",
    "http://hub-mirror.c.163.com",
    "https://docker.mirrors.ustc.edu.cn"
]
```



## Win10与wsl2子系统互相访问

Win10访问wsl2系统比vm虚拟机是亮点，特别方便，进入CMD或者PowerShell，输入：

```
cd \\wsl$\Ubuntu\
```

 可以进入Ubuntu-20.04子系统根目录

或者打开文件资源管理器，在地址栏输入`\\wsl$\Ubuntu\`，也可以Ubuntu子系统根目录。 