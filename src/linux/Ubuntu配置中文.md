---
author: xlc520
title: Ubuntu配置中文
description: 
date: 2023-04-13
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
---

# Ubuntu配置中文

1.查看当前语言

```shell
echo $LANG

en_US.UTF-8
```

2.查看配置文件

```cobol
cat /etc/default/locale 

LANG=en_US.UTF-8 
```

3.安装中文语言字符

```cobol
sudo apt install language-pack-zh-han* -y 
```

4.编辑配置文件

```shell
vi /etc/locale.gen

1）找到 "# zh_CN.UTF-8 UTF-8"并取消注释，然后保存并退出。
2）运行 
sudo locale-gen
```

```shell
设置默认语言为中文 
sudo vim /etc/default/locale

修改文件内容
LANG="zh_CN.UTF-8"
LANGUAGE="zh_CN:zh"
LC_CTYPE="zh_CN.UTF-8"
LC_NUMERIC="zh_CN.UTF-8"
LC_TIME="zh_CN.UTF-8"
LC_COLLATE="zh_CN.UTF-8"
LC_MONETARY="zh_CN.UTF-8"
LC_MESSAGES="zh_CN.UTF-8"
LC_PAPER="zh_CN.UTF-8"
LC_NAME="zh_CN.UTF-8"
LC_ADDRESS="zh_CN.UTF-8"
LC_TELEPHONE="zh_CN.UTF-8"
LC_MEASUREMENT="zh_CN.UTF-8"
LC_IDENTIFICATION="zh_CN.UTF-8"
LC_ALL="zh_CN.UTF-8"

保存退出后查看
cat /etc/default/locale 
```

配置文件立即生效

```shell
source /etc/default/locale
```



5.编辑配置文件 (可不做)

```shell
输入命令
sudo vim /etc/environment

修改配置文件内容
PATH="/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/game s:/usr/local/games:/snap/bin" 

LANG="zh_CN.UTF-8"
LANGUAGE="zh_CN:zh"
LC_CTYPE="zh_CN.UTF-8"
LC_NUMERIC="zh_CN.UTF-8"
LC_TIME="zh_CN.UTF-8"
LC_COLLATE="zh_CN.UTF-8"
LC_MONETARY="zh_CN.UTF-8"
LC_MESSAGES="zh_CN.UTF-8"
LC_PAPER="zh_CN.UTF-8"
LC_NAME="zh_CN.UTF-8"
LC_ADDRESS="zh_CN.UTF-8"
LC_TELEPHONE="zh_CN.UTF-8"
LC_MEASUREMENT="zh_CN.UTF-8"
LC_IDENTIFICATION="zh_CN.UTF-8"
LC_ALL="zh_CN.UTF-8"

保存退出后查看
cat /etc/environment
```

6.1重新启动电脑生效

```shell
sudo reboot
```

7.查看修改结果

```shell
echo $LANG 
zh_CN.UTF-8
```

8.检查

```shell
date
2021年 12月 30日 星期四 17:10:36 CST
```