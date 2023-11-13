---
author: xlc520
title: Debian
description: Debian使用
date: 2023-11-15
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
---



## 1.debin系统使用vi编辑出现无法正常使用

发现Debian下Vi编辑器在文本输入模式时，不能正确使用方向键和退格键，或者是输入内容无法正常的内容，解决方法：

### 解决方法一

用vi 打开/etc/vim/vimrc.tiny，输入以下两行：

```shell
set nocompatible

set backspace=2
```

这样就切换到非兼容模式，并且退格键也可以正常使用了。

### 解决方法二

vi 用不了自然编辑不了/etc/vim/vimrc.tiny。所以我们用sed插入。

```shell
sed -i '$a\set nocompatible' /etc/vim/vimrc.tiny

sed -i '$a\set backspace=2' /etc/vim/vimrc.tiny
```

执行上面这2条。



## 2.Vim安装步骤

步骤一、首先使用下面命令更新一下系统，确保您的系统是最新的，这一步很重要。

```shell
apt-get update
```

步骤二、运行以下命令安装Vim。

```shell
apt-get install vim
```

它将显示将与 Vim 一起安装的所有软件包。出现提示时按Y或 Enter，您应该会在几秒钟内安装 Vim。



## 3.Debian 12网络问题

配置静态IP
1、interfaces 配置
文件路径： /etc/network/interfaces

```sh
echo "">/etc/network/interfaces
vi /etc/network/interfaces
```

```shell
# This file describes the network interfaces available on your system and how to activate them. For more information, see interfaces(5).
# interfaces(5) file used by ifup(8) and ifdown(8)    Include files from /etc/network/interfaces.d:
source /etc/network/interfaces.d/*

# The loopback network interface
auto lo
iface lo inet loopback

#开机启动ens33
auto ens33
#接口ens33配置，static配置静态IP，dhcp为自动获取IP
#iface ens33 inet dhcp
# 静态IP地址
allow-hotplug ens33
iface ens33 inet static
address 10.1.1.10
# 子网掩码
netmask 255.255.255.0
# 网关
gateway 10.1.1.2
#dns-* options are implemented by the resolvconf package, if installed
dns-nameservers 223.5.5.5
dns-nameservers 119.29.29.29
#dns-search 192.168.1.1

```

```shell
/etc/init.d/networking restart && dhclient
```





## 4.关闭linux（Debian kali）的蜂鸣声（beebe）

1：create the file `/etc/modprobe.d/pcspkr-blacklist.conf`
2：add the following line: `blacklist pcspkr`
3：`sudo depmod -a`
4：`sudo update-initramfs -u`

对于 Debian/Ubuntu 系统，使用 root 身份执行：

```shell
#echo "blacklist pcspkr" >> /etc/modprobe.d/blacklist
echo "blacklist pcspkr" >> /etc/modprobe.d/pcspkr-blacklist.conf
depmod -a
update-initramfs -u
```

对于 CentOS/Redhat/RHEL/Fedora 系统，使用 root 身份执行：

```shell
echo "alias pcspkr off" >> /etc/modprobe.conf
```

