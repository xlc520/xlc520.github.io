---
author: xlc520
title: 通过Nginx来实现禁止国外IP访问网站
description: 
date: 2022-06-19
category: Java
tag: Java
article: true
timeline: true
icon: java
password: 
---



# 通过Nginx来实现禁止国外IP访问网站

前言： 先来说说为啥要写这篇文章，之前小编看了下nginx 的访问日志，发现每天有好多国外的IP地址来访问我的网站，并且访问的内容基本上都是恶意的。因此 我决定 禁止国外IP 来访问我的网站

想要实现这个功能有很多方法，下面我就来介绍基于 NGINX的ngx_http_geoip2模块 来禁止国外IP 访问网站



**一、安装geoip2扩展依赖**

```sh
[root@fxkj ~]# yum install libmaxminddb-devel -y
```

**二、下载ngx_http_geoip2_module模块**

```sh
[root@fxkj tmp]#  git clone https://github.com/leev/ngx_http_geoip2_module.git
[ro tmp]# 
```

**三、解压模块到指定路径**

我这里解压到/usr/local 目录下

```sh
[root@fxkj tmp]# mv ngx_http_geoip2_module/ /usr/local/
[root@fxkj local]# ll ngx_http_geoip2_module/
total 60
-rw-r--r-- 1 root root  1199 Aug 13 17:20 config
-rw-r--r-- 1 root root  1311 Aug 13 17:20 LICENSE
-rw-r--r-- 1 root root 23525 Aug 13 17:20 ngx_http_geoip2_module.c
-rw-r--r-- 1 root root 21029 Aug 13 17:20 ngx_stream_geoip2_module.c
-rw-r--r-- 1 root root  3640 Aug 13 17:20 README.md
```



**四、安装nginx 模块**

首先说明下环境，我的nginx 版本是 1.16 , 在网上查了下 安装 ngx_http_geoip2 模块至少需要 1.18 版本及以上，因此此次安装我是 升级nginx1.18，添加 ngx_http_geoip2 模块。

- 下载nginx 1.18 版本

```
[root@fxkj tmp]# wget http://nginx.org/download/nginx-1.18.0.tar.gz
```



- 解压nginx1.18 软件包并 升级为 nginx1.18 ，添加 ngx_http_geoip2 模块

需要注意：

**1、升级nginx, 添加nginx 模块 只需要 编译 然后 make
不需要 make instll 不然线上的nginx 会被新版本nginx 完完整整的替换掉**



**2、编译前 需要看下 nginx 当前安装了哪些模块**

```shell
**[root@fxkj tmp]# /usr/local/nginx/sbin/nginx -V**

**nginx version: nginx/1.16.0**

**built by gcc 4.8.5 20150623 (Red Hat 4.8.5-39) (GCC)**

**built with OpenSSL 1.0.2k-fips 26 Jan 2017**

**TLS SNI support enabled**

**configure arguments: --with-http_stub_status_module --prefix=/usr/local/nginx --user=nginx --group=nginx --with-http_ssl_module --with-stream**
```



编译安装

```shell
[root@fxkj tmp]# tar -xf nginx-1.18.0.tar.gz 
[root@fxkj tmp]# cd nginx-1.18.0/
[root@fxkj nginx-1.18.0]# ./configure --with-http_stub_status_module \
 --prefix=/usr/local/nginx \
 --user=nginx --group=nginx --with-http_ssl_module --with-stream \
 --add-module=/usr/local/ngx_http_geoip2_module
[root@fxkj nginx-1.18.0]# make
[root@fxkj nginx-1.18.0]# cp /usr/loca/nginx/sbin/nginx /usr/loca/nginx/sbin/nginx1.16    #备份
[root@fxkj nginx-1.18.0]# cp objs/nginx /usr/local/nginx/sbin/    #用新的去覆盖旧的
[root@fxkj nginx-1.18.0]# pkill nginx     #杀死nginx
[root@fxkj nginx-1.18.0]# /usr/local/nginx/sbin/nginx    #再次启动Nginx
```

查看nginx 版本 以及安装的模块

```shell
[root@fxkj nginx-1.18.0]# /usr/local/nginx/sbin/nginx -V

nginx version: nginx/1.18.0

built by gcc 4.8.5 20150623 (Red Hat 4.8.5-39) (GCC)

built with OpenSSL 1.0.2k-fips 26 Jan 2017

TLS SNI support enabled

configure arguments: --with-http_stub_status_module --prefix=/usr/local/nginx --user=nginx --group=nginx --with-http_ssl_module --with-stream **--add-module=/usr/local/ngx_http_geoip2_module**
```





**五、下载最新的IP地址数据库文件**

模块安装成功后，还要在 Nginx 里指定数据库，在安装运行库时默认安装了两个，位于 /usr/share/GeoIP/ 目录下，一个只有 IPv4，一个包含 IPv4 和 IPv6：

登录 www.maxmind.com 网址，创建账户 下载最新的库文件（账户创建就不演示了）

点击左侧 ，Download Files

![通过Nginx来实现禁止国外IP访问网站](E:\source\blogImage\a965a80a0e354dde96ba5fa1091cf86f.png)



选择 GeoLite2 Country ，点击 Download GZIP 下载即可

![通过Nginx来实现禁止国外IP访问网站](E:\source\blogImage\c3e087baa970419593541115de1ad8be.png)



上传到 /usr/share/GeoIP/ 下并解压

```shell
[root@fxkj local]# cd /usr/share/GeoIP/
[root@fxkj GeoIP]# ll
total 69612
lrwxrwxrwx. 1 root root       17 Mar  7  2019 GeoIP.dat -> GeoIP-initial.dat
-rw-r--r--. 1 root root  1242574 Oct 30  2018 GeoIP-initial.dat
lrwxrwxrwx. 1 root root       19 Mar  7  2019 GeoIPv6.dat -> GeoIPv6-initial.dat
-rw-r--r--. 1 root root  2322773 Oct 30  2018 GeoIPv6-initial.dat
-rw-r--r--  1 root root  3981623 Aug 12 02:37 GeoLite2-Country.mmdb
```

**六、配置nginx 配置文件**

**修改前 先备份配置文件**

[root@fxkj ~]# cp /usr/local/nginx/conf/nginx.conf /usr/local/nginx/conf/nginx.conf-bak

[root@fxkj ~]# vim /usr/local/nginx/conf/nginx.conf



在http 中添加 几行，定义数据库文件位置

```shell
geoip2 /usr/share/GeoIP/GeoLite2-City.mmdb {
auto_reload 5m;
$geoip2_data_country_code country iso_code;
}
  map $geoip2_data_country_code $allowed_country {
                default yes;
                CN no;
}
```

![通过Nginx来实现禁止国外IP访问网站](E:\source\blogImage\bfc6d7c990cf41b08b13280b8ee9f0e8.png)



在 server 中的 location 下 添加 条件

如果满足IP 是国外IP 就 执行下面的return 动作，我这里定义了3种, 注释了其中两个。

当访问IP 是国外IP ，直接返回404

```shell
if ($allowed_country = yes) {
       # return https://www.baidu.com;
       # return /home/japan;
        return 404;
          }
```

![通过Nginx来实现禁止国外IP访问网站](E:\source\blogImage\58effbcb1b4d4422b637a238d8371051.png)



修改完毕后， 检测下配置文件，重新加载下 nginx

```shell
[root@fxkj ~]# /usr/local/nginx/sbin/nginx -t
nginx: the configuration file /usr/local/nginx/conf/nginx.conf syntax is ok
nginx: configuration file /usr/local/nginx/conf/nginx.conf test is successful
[roo@fxkj ~]# /usr/local/nginx/sbin/nginx -s reload
```



**7、模拟测试验证**

**使用海外节点的服务器去访问网站**

这里我的IP 是 来自于韩国

![通过Nginx来实现禁止国外IP访问网站](E:\source\blogImage\fca231769f3c40458a321bdca7c356f1.png)



可以看到访问网站报错 404 Not Found

![通过Nginx来实现禁止国外IP访问网站](E:\source\blogImage\ac732b838fd84cf9a1ba52a27c13d76d.png)



我们再来看下nginx 的访问日志

```shell
"13.125.1.194 - - [14/Aug/2020:16:15:51 +0800] "GET /favicon.ico HTTP/1.1" **404** 548 "https://www.fxkjnj.com/" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Safari/537.36"
```

![通过Nginx来实现禁止国外IP访问网站](E:\source\blogImage\e74537e1a7b4476098d4e68a38203704.png)



到此 我们通过Nginx来实现禁止国外IP访问网站 就结束了