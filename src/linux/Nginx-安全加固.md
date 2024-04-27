---
author: xlc520
title: Nginx-安全加固
excerpt: 
description: 
date: 2024-04-21
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
---

# Nginx-安全加固

### 01 使用安全的版本

版本最新：1.25.4 更新日期：2024-03

建议使用稳定版本 1.24.0，低版本不建议使用

NginX 下载地址：

```plain
https://nginx.org/en/download.html
```

### 02 使用普通用户启动

不使用管理员组的用户启动

### 03 隐藏 NginX 版本号

在 nginx.conf 配置文件中，http 模块中添加 server_tokens off;

重启 Nginx

### 04 设置 timeout（根据实际情况）

编辑 nginx 配置文件，在 http 模块中添加以下参数

```plain
client_body_timeout 10;client_header_timeout 30;keepalive_timeout 30  30;send_timeout 10;
```

重启 Nginx

注：此项主要是防御 DOS 攻击。

### 05 禁用 Autoindex，避免目录浏览

编辑 nginx 配置文件，在 http 模块添加 autoindex off;

重启 Nginx

### 06 设置 NginX 缓冲区

编辑 nginx 配置文件，在 server 模块中需要限制的 location 中添加以下参数

```plain
client_body_buffer_size  16K;client_header_buffer_size 1k;client_max_body_size 1m;large_client_header_buffers 4 8k;
```

重启 Nginx

注：防止缓冲区溢出攻击

### 07 限制仅允许域名访问

编辑 nging 配置文件,示例如下

```plain
server {listen ....;server_name _  www.baidu.com;return 403;}
```

执行 nginx -s reload 动态更新配置文件

(如果有其他端口，同样加入其他端口的 server)

### 08 限制 nginx 请求方法

编辑 nginx 配置文件，在每个 server 模块中添加

```plain
if ($request_method !~ ^(GET|HEAD|POST)$ ) {return 404;}
```

### 09 开启访问日志

编辑 nging 配置文件：

access_log logs/access.log main;

error_log logs/error.log error;

日志生成的到 Nginx 根目录 logs/access.log 文件，默认使用“main”日志格式，也可以自定义格式，自定义格式后面出文章说，有需要你们先自行百度吧。

### 10 Nginx 日志保留半年

这里使用 linux 自带 logrotate 工具，不想用这个也可以写脚本切割，我嫌麻烦，就用这个，方便省事。

/etc/logrotate.conf 添加以下配置

```plain
/var/log/nginx.log {    weekly    rotate 26    copytruncate    compress    notifempty    missingok}logrotate -vf /etc/logrotate.conf
```

### 11 错误页面重定向

新建错误页面,放到静态目录中,编辑 Nignx 配置文件，

在 http 模块中添加如下参数:

```plain
fastcgi_intercept_errors on;errorpage 401 /401.html;errorpage 402 /402.html;errorpage 403 /403.html;errorpage 404 /404.html;errorpage 405 /405.html;errorpage 500 /500.html
```

重启 nginx 服务

### 11 限制 php 执行权限(如有需求)

编辑 nignx 配置文件,在需要限制的 server 模块中添加如下代码:

```plain
location ~ /(attachments|upload)/.*.(php|php5)?$ {deny all;}
```

以上的配置文件代码需要放到 location ~ .php{...}上面,相关目录需要写相对目录,重启 nginx

### 12 nginx 配置 waf 模块
