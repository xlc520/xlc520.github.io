---
author: xlc520
title: Centos7 Minimal 安装后初始化配置
description: Centos7 Minimal 安装后初始化配置
date: 2022-01-28
category: Linux
tag: Linux
article: true
timeline: true
icon: type
---
# Centos7 Minimal 安装后初始化配置

 
## 1:更新yum

`yum upgrade`

## 2: 安装基础命令

```shell
yum -y install vim* lrzsz  gcc-c++ pcre pcre-devel zlib zlib-devel openssl openssl-devel
yum -y install telnet net-tools

安装ifconfig
yum provides ifconfig
```

## 3: 设置IP
`ip addr`

![](https://static.xlc520.ml/Centos7Minimal_3.jpg)

 暂时未分配IP, 所以进行如下修改
### 3.1 分配随机IP 
   
分配静态IP请看3.2

```shell
cd /etc/sysconfig/network-scripts
vim ifcfg-ens192
```
![](https://static.xlc520.ml/Centos7Minimal_1.jpg)

将ONBOOT=no修改为ONBOOT=yes保存退出
重启网络服务

`service network restart`

再次输入

`ip addr`
 
### 3.2: 设置静态IP

![](https://static.xlc520.ml/Centos7Minimal_2.jpg)

设置完,重启网络
`service network restart`
再次输入
`ip addr`

### 3:永久关闭Selinux

`vim /etc/sysconfig/selinux`

`SELINUX=enforcing` 改为 `SELINUX=disabled`
重启服务`reboot`