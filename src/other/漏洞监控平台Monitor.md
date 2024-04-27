---
author: xlc520
title: 漏洞监控平台——Monitor
excerpt: 
description: 漏洞监控平台——Monitor
date: 2022-02-11
category: other
tag: other
article: true
timeline: true
icon: type
---

# 漏洞监控平台——Monitor

## **写在前面的话**

对于网络安全从业者来说，实时掌握漏洞动态是至关重要的，所以萌生了开发一个监控平台的想法，把最新漏洞资讯集成然后进行推送。这里推送选的是企业微信，留下了邮件推送的接口，默认是关闭的，想开启的小伙伴自行开启。数据库选用的是
sqlite。目前实现了监控 GitHub、微软、CNNVD。（不要问我为啥不监控 CNVD，我是不会告诉你我干不过它的反爬【狗头保命】）。

## **项目介绍**

### 项目目录结构

```plain
│  cve_db.db
│  monitor.py
│  style.css
│
├─Functions
│  ├─Commons
│  │      excel.py
│  │      excel_html.py
│  │      github.py
│  │      mail.py
│  │      style.css
│  │      translate.py
│  │      wechat_api.py
│  │      __init__.py
│  │
│  ├─RequestInfo
│  │      cnnvd_monitor.py
│  │      github_monitor.py
│  │      MS_monitor.py
│  │      __init__.py
│  │
│  └─Sql
│          installDb.py
│          sql_helper.py
│
└─log
```

### 文件说明

**monitor.py**文件是主文件，部署完成后直接运行就此文件可以。

**Commons**目录下的文件为主要功能文件。

**RequestInfo**目录下为监控目标的一些文件。

**Sql**目录下为数据库相关文件，installDb.py 是用来生成数据库和日志文件的。

**log**目录为存放日志文件目录。

### 功能介绍

同时监控 CNNVD、Github、微软官方的漏洞消息。

#### CNNVD

- 每天推送企业微信卡片消息
- Web 端漏洞信息表格展示
- 每周五统计漏洞数量（高危、中危、低危）
- 高危漏洞信息醒目标注

#### 微软官方漏洞消息

- 每天推送企业微信卡片消息
- Web 端漏洞信息表格展示

#### Github

- 每天推送企业微信卡片消息
- 点击卡片消息自动跳转对应 Github 链接

#### 展示效果

效果如下图

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346328639935.webp)cve

**当点击 CNNVD 的消息卡片时，会跳转到相对应的 Web 端以表格形式展示**，如下图：

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346328639936.webp)cnnvd

**点击微软漏洞消息的漏洞卡片时，也会跳转到相对应的 Web 端表格展示**，如下图：

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346328639937.webp)微软

**点击 Github 的漏洞消息通知时，跳转到相对于的 Github 地址**，如下图：

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346328639938.webp)github

## **项目部署**

### 前期准备

- 开发语言：python3
- 一台服务器(脚本跑在服务器上)
- 一个域名(可选)

首先安装依赖，如下：

```plain
import os
import time
from io import BytesIO
import xlwt
from xlrd import open_workbook
import datetime
import dominate
from dominate.tag import *
import requests
import smtplib
from email.mime.text import MIMEText
from email.header import Header
import hashlib
from lxml import etree
import json
from bs4 import BeautifulSoup
import re
import sqlite3
```

然后进行数据库初始化，初始化时生成 log 文件夹用来存放生成的日志文件。命令如下：

```plain
python3 installDb.py
```

### 环境搭建

因为要做 Web 端表格展示，所以这里**使用 Nginx 做了目录浏览**。服务器系统使用的是 CentOS7，过程如下。

首先使用 yum 源下载 nginx，命令如下：

```plain
yum install -y nginx
```

装好后，查看版本，检查是否安装成功，如下图：

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346328639939.webp)

然后找到 nginx 的配置文件，具体位置为：

```plain
cd /etc/nginx/
```

找到 nginx.conf 文件，对其中的 server 板块进行修改就可以了，**主要是添加了末尾三行**。

```plain
server {
    listen       80;
    listen       [::]:80;
    server_name  _;
   # root         /usr/share/nginx/html;
    charset utf-8;
    # Load configuration files for the default server block.
    include /etc/nginx/default.d/*.conf;
    location / {
            root /usr/share/nginx/html/download;
    autoindex on; #开启索引功能
    autoindex_exact_size off; #关闭计算文件确切大小(bytes)
    autoindex_localtime on; #显示本机时间
}
```

**注意生成文件位置**，我这里是`/usr/share/nginx/html/download` ，看个人爱好。

**如果修改，请修改 monitor.py 的 24 行和 excel_html.py 的 11 行。**

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346328640040.webp)image-20220122141836235

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346328640041.webp)image-20220122142248502

### 配置企业微信推送

这个需要先到企业微信创建一个企业，并自建一个应用，**获取到自定义应用的 Secret 和注册的企业 corpid**，就可以了。修改位置在**
wechat_api.py\**文件\******的 14 行至 17 行**，如下图：

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346328640042.webp)image-20220122142707821

启动监控脚本，命令如下：

```plain
python3 moniter.py
```

大功告成！！！
