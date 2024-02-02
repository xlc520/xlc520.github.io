---
author: xlc520
title: Linux使用safe-rm防止误删系统文件
description: 
date: 2024-01-26
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
---

# Linux使用safe-rm防止误删系统文件

## 原理

通过维护safe-rm的配置文件(/etc/safe-rm.conf)，从而使配置文件中的规则目录不会被rm所删除

## 安装safe-rm

这里我安装的目前最新的版本1.1.0，因为最新的版本也是2021年的，也足够稳定了。

官网下载https://launchpad.net/safe-rm/+download

```bash
cd /tmp
#下载safe-rm
wget https://launchpad.net/safe-rm/trunk/1.1.0/+download/safe-rm-1.1.0.tar.gz
#解压
tar -zxvf safe-rm-1.1.0.tar.gz 
#安装依赖
yum install cargo
cd /tmp/safe-rm-1.1.0/
#编译，这一步会等很久......
make
#移动功能文件到系统目录
mv target/release/safe-rm /usr/local/bin/
#替换rm命令
echo 'alias rm="safe-rm -i"' >> /etc/bashrc
#刷新修改的文件
source /etc/bashrc
#创建链接,将safe-rm替换rm
ln -s /usr/local/bin/safe-rm /usr/local/bin/rm
echo 'PATH=/usr/local/bin:$PATH' >>  /etc/profile
source /etc/profile
```



## 设置过滤目录

vim /etc/safe-rm.conf 文件

以下是我设定好的配置，可避免绝大多数重要的目录被删除，大家要按需配置

```bash
/
/*
/etc
/etc/*
/data
/data/*
/data/mysql
/data/mysql/*
/data/mysql/datadir
/data/mysql/datadir/*
/usr
/usr/*
/usr/local
/usr/local/*
/usr/local/bin
/usr/local/bin/*
/bin/*
/boot/*
/dev/*
/etc/*
/home/*
/lib/*
/lib64/*
/media/*
/mnt/*
/opt/*
/proc/*
/root/*
/run/*
/sbin/*
/srv/*
/sys/*
/var/*
```



编辑完毕后,为了让环境变量在整个系统全局生效,建议重启操作系统.重启之后执行rm命令就相当于执行safe-rm了



/etc/safe-rm.conf 文件可随便去更改，即时见效，可以在自己的临时目录去测试下这个功能