---
author: xlc520
title: Nginx-安全加固
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

版本最新：1.25.4   更新日期：2024-03

建议使用稳定版本 1.24.0，低版本不建议使用

NginX 下载地址：

```
https://nginx.org/en/download.html
```



### 02 使用普通用户启动

不使用管理员组的用户启动



### 03 隐藏NginX版本号

在nginx.conf配置文件中，http模块中添加 server_tokens off;

重启Nginx



### 04 设置timeout（根据实际情况）

编辑nginx配置文件，在http模块中添加以下参数

```
client_body_timeout 10;client_header_timeout 30;keepalive_timeout 30  30;send_timeout 10;
```

重启Nginx

注：此项主要是防御DOS攻击。



### 05 禁用Autoindex，避免目录浏览

编辑nginx配置文件，在http模块添加autoindex off;

重启Nginx



### 06 设置NginX缓冲区

编辑nginx配置文件，在server模块中需要限制的location中添加以下参数

```
client_body_buffer_size  16K;client_header_buffer_size 1k;client_max_body_size 1m;large_client_header_buffers 4 8k;
```

重启Nginx

注：防止缓冲区溢出攻击



### 07 限制仅允许域名访问

编辑nging配置文件,示例如下

```
server {listen ....;server_name _  www.baidu.com;return 403;}
```

执行nginx -s reload 动态更新配置文件

(如果有其他端口，同样加入其他端口的server)



### 08 限制nginx请求方法

编辑nginx配置文件，在每个server模块中添加

```
if ($request_method !~ ^(GET|HEAD|POST)$ ) {return 404;}
```



### 09 开启访问日志

编辑nging配置文件：

 access_log logs/access.log main;

error_log logs/error.log error;

日志生成的到Nginx根目录logs/access.log文件，默认使用“main”日志格式，也可以自定义格式，自定义格式后面出文章说，有需要你们先自行百度吧。



### 10 Nginx日志保留半年

这里使用linux自带logrotate工具，不想用这个也可以写脚本切割，我嫌麻烦，就用这个，方便省事。

/etc/logrotate.conf添加以下配置

```
/var/log/nginx.log {    weekly    rotate 26    copytruncate    compress    notifempty    missingok}logrotate -vf /etc/logrotate.conf
```



### 11 错误页面重定向

新建错误页面,放到静态目录中,编辑Nignx配置文件，

在http模块中添加如下参数:

```
fastcgi_intercept_errors on;errorpage 401 /401.html;errorpage 402 /402.html;errorpage 403 /403.html;errorpage 404 /404.html;errorpage 405 /405.html;errorpage 500 /500.html
```

重启nginx服务



### 11 限制php执行权限(如有需求)

编辑nignx配置文件,在需要限制的server模块中添加如下代码:

```
location ~ /(attachments|upload)/.*.(php|php5)?$ {deny all;}
```

以上的配置文件代码需要放到 location ~ .php{...}上面,相关目录需要写相对目录,重启nginx



### 12 nginx配置waf模块