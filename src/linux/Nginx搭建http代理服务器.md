---
author: xlc520
title: Nginx搭建http代理服务器
description: 
date: 2023-11-30
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
---

# Nginx搭建http代理服务器

参考 ： https://blog.csdn.net/weixin_43834401/article/details/130670792

Nginx服务器作为正向代理服务器和反向代理服务器，`但美中不足的是仅支持http协议，不支持https协议`。

http和https的区别：

- **http协议**：协议以明文方式发送数据，不提供任何方式的数据加密。不适合传输一些敏感信息，例如密码。其使用的端口是`80`。
- **https协议**：在http协议的基础上，加入了`SSL（Secure Sockets Layer）`，用于对数据进行加密。其使用的端口为`443`。

## **1.Nginx正向代理（http）**

我们来回顾一下Nginx作为正向代理服务器支持http协议的配置。

代理服务器：192.168.110.101

代理服务器配置：

```properties
server {
    listen 8080;
    server_name localhost;
    # 解析域名时需要配置
    resolver 8.8.8.8;
    location / {
        proxy_pass http://$host$request_uri;
    }
}
```

客户端配置：

> 我们使用Windows系统作为客户端环境。

访问`http://nginx.org/en/index.html`，可以正常访问。

访问`https://www.baidu.com`，则无法正常访问了。

查看代理服务器的`error.log`，发现其报400错误码。

这是因为，Nginx作为正向代理服务器时，默认仅支持http协议，是不支持https协议的。

## **2.Nginx正向代理（https）**

**那么怎么让Nginx作为正向代理服务器的时候支持https协议呢？**

我们可以使用第三方模块`ngx_http_proxy_connect_module`。

下载地址：https://github.com/chobits/ngx_http_proxy_connect_module

我们知道如果要为Nginx添加第三方模块，需要在配置`configure`时添加`--add-module`。从Nginx1.9.11版本开始，支持`load_module`指令来动态加载模块。

我们这里使用`--add-module`进行模块的添加。

**1）查看Nginx版本以及configure信息**

```bash
nginx -V

nginx version: nginx/1.22.1
built by gcc 9.4.0 (Ubuntu 9.4.0-1ubuntu1~20.04.1) 
configure arguments: --sbin-path=/usr/local/nginx/nginx --conf-path=/usr/local/nginx/nginx.conf --pid-path=/usr/local/nginx/nginx.pid --with-http_gzip_static_module
```

**2）下载模块**

下载地址：https://codeload.github.com/chobits/ngx_http_proxy_connect_module/zip/refs/heads/master

**3）重新编译**

这里我们两种添加第三方模块的方式都尝试一下。

使用`--add-module`

```bash
cd /home/stone/nginx-1.22.1

# 1、添加patch
patch -p1 < /home/stone/nginx-1.22.1/module/ngx_http_proxy_connect_module/patch/proxy_connect_rewrite_102101.patch

# 2、configure
./configure --sbin-path=/usr/local/nginx/nginx --conf-path=/usr/local/nginx/nginx.conf --pid-path=/usr/local/nginx/nginx.pid --with-http_gzip_static_module --add-module=/home/stone/nginx-1.22.1/module/ngx_http_proxy_connect_module

# 3、make
make

# 4、备份旧的nginx可执行文件，复制编译之后的可执行文件
mv /usr/local/nginx/nginx /usr/local/nginx/nginx.old
cp objs/nginx /usr/local/nginx/nginx

# 5、升级
make upgrade
```

使用`load_module`，需要将`--add-module`替换为`--add-dynamic-module`

```bash
cd /home/stone/nginx-1.22.1

# 1、添加patch
patch -p1 < /home/stone/nginx-1.22.1/module/ngx_http_proxy_connect_module/patch/proxy_connect_rewrite_102101.patch

# 2、configure
./configure --sbin-path=/usr/local/nginx/nginx --conf-path=/usr/local/nginx/nginx.conf --pid-path=/usr/local/nginx/nginx.pid --with-http_gzip_static_module --add-dynamic-module=/home/stone/nginx-1.22.1/module/ngx_http_proxy_connect_module

# 3、make
make

# 4 创建module文件夹，并将编译生成的ngx_http_proxy_connect_module.so拷贝过去
mkdir /usr/local/nginx/module
cp /home/stone/nginx-1.22.1/objs/ngx_http_proxy_connect_module.so /usr/local/nginx/module

# 5、备份旧的nginx可执行文件，复制编译之后的可执行文件
mv /usr/local/nginx/nginx /usr/local/nginx/nginx.old
cp objs/nginx /usr/local/nginx/nginx

# 6、升级
make upgrade
```

**4）修改配置文件**

```properties
# --add-dynamic-module动态添加第三方模块时使用
# load_module module/ngx_http_proxy_connect_module.so;

http {
    server {
        listen 8080;
        server_name localhost;
        resolver 114.114.114.114 ipv6=off;
        proxy_connect;
        proxy_connect_allow 443 80;
        proxy_connect_connect_timeout  10s;
        proxy_connect_data_timeout     10s;
        # 指定代理日志
        access_log logs/access_proxy.log main;
        location / {
            proxy_pass $scheme://$host$request_uri;
        }
    }
}
```

此时访问`https://www.baidu.com`，在`access_proxy.log`产生如下日志，说明https代理成功。

## **3.Nginx反向代理（http）**

同样的，Nginx作为反向代理服务器，默认也是只支持http协议，我们来回顾一下Nginx作为反向代理服务器支持http协议的配置。

```properties
server {
    listen       80;
    server_name  localhost;
    location /proxy {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_pass http://192.168.110.98;
    }
}
```

可以看到，我们配置的`server_name`为`localhost`，但在实际项目中，我们是使用域名绑定Nginx服务器的IP，并且使用https协议进行访问，配置的`server_name`就是指定的域名，例如`www.aaa.com`。

Nginx为我们提供了`ngx_http_ssl_module`来支持https协议，并且在提供的默认配置文件里已经给出了示例。

## **4.Nginx反向代理（https）**

添加`ngx_http_ssl_module`的步骤和添加`ngx_http_proxy_connect_module`的步骤一致，只是这是Nginx提供的模块，因此在configure时使用`--with-http_ssl_module` 即可。

我们再来看看采用https协议时的配置：

```properties
server {
    listen       443 ssl;
    server_name  www.aaa.com;
    
    # 申请ssl证书后，会提供cert.pem和cert.key
    ssl_certificate      cert.pem;
    ssl_certificate_key  cert.key;

    ssl_session_cache    shared:SSL:1m;
    ssl_session_timeout  5m;

    ssl_ciphers  HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers  on;

    location /proxy {
        proxy_pass http://192.168.110.98;
    }
}
```

我们需要去为指定的域名申请ssl证书，然后将证书中的`cert.pem`和`cert.key`放到指定文件，并在配置文件中指定。例如我们这里指定的`server_name`为`www.aaa.com`，所以我们就需要为`www.aaa.com`申请ssl证书。

后续我们访问`https://www.aaa.com/proxy`就可以被代理到指定服务端了。



## 其他（第二种）

如果不想写到 ngnix.conf 中，那么可以在相同的目录下建立另外一个文件夹存放单独的文件，比如新建一个 proxy 的子目录，然后再在里面新建文件 prox.conf ，然后添加如下内容：

```properties
server {
    resolver        8.8.8.8;
    access_log      off;
    listen  8088;
    location / {
        proxy_pass      $scheme://$host$request_uri;
        proxy_set_header Host $http_host;
        proxy_buffers   256 4k;
        proxy_max_temp_file_size        0k;
    }
}
```



接着在 ngnix.conf 的 http 块中添加：

```
include proxy/*.conf;
```




将上面文件的配置包含进来。

上面使用谷歌 DNS 8.8.8.8，你可能在本地也需要使用这个 DNS，否则可能会出现 502 的错误。不然可以配置 resolver 地址为你 ISP 分配的 DNS 地址。

配置完后，重启一下 nginx 或 reload 一下即可。

注意：由于 HTTP 代理和 VPN 不一样，后者加密，而前者不加密，所以 HTTP 代理是不能用来 FQ 的。


下面是类似配置内容：

```properties
server {
    resolver 202.106.0.20;
    resolver_timeout 5s;
    listen 81;
    location / {
        proxy_pass $scheme://$host$request_uri;
        proxy_set_header Host $http_host;
        proxy_buffers 256 4k;
        proxy_max_temp_file_size 0;
        proxy_connect_timeout 30;
        proxy_cache_valid 200 302 10m;
        proxy_cache_valid 301 1h;
        proxy_cache_valid any 1m;
    }
}
```

### Example2

```properties
server {
    listen 8899;
    charset utf-8;
    resolver 114.114.114.114;
    client_max_body_size     50m;
    access_log logs/proxy.log;

    #引用ngx_proxy模块
    proxy_connect;
    proxy_connect_allow            443 80;
    proxy_connect_connect_timeout  10s;
    proxy_connect_read_timeout     10s;
    proxy_connect_send_timeout     10s;

    location / {
        proxy_pass $scheme://$http_host$request_uri;
        proxy_connect_timeout 10;
         proxy_send_timeout 10;
         proxy_read_timeout 10;
         proxy_redirect     off;
         proxy_set_header Host $http_host;
         proxy_buffers 256 4k;
         proxy_next_upstream error timeout invalid_header http_502;
         proxy_max_temp_file_size 0k;
        proxy_ssl_server_name on;
    }
}
```


参数解析：
1，配置 DNS 解析 IP 地址，比如 北京dns，以及超时时间（5秒）。
resolver 202.106.0.20;
resolver_timeout 5s;

注意项

1. 不能有hostname
2. 必须有resolver, 即dns，即上面的x.x.x.x，换成你们的DNS服务器ip即可


2，配置正向代理参数，均是由 Nginx 变量组成。其中 proxy_set_header 部分的配置，是为了解决如果 URL 中带 "."（点）后 Nginx 503 错误。
proxy_pass $scheme://$host$request_uri; $http_host和$request_uri是nginx系统变量，不要想着替换他们，保持原样就OK。
proxy_set_header Host $http_host;

3，配置缓存大小，关闭磁盘缓存读写减少I/O，以及代理连接超时时间。
proxy_buffers 256 4k;
proxy_max_temp_file_size 0;
proxy_connect_timeout 30;

4，配置代理服务器 Http 状态缓存时间。
proxy_cache_valid 200 302 10m;
proxy_cache_valid 301 1h;
proxy_cache_valid any 1m;

三、不支持代理 Https 网站
因为 Nginx 不支持 CONNECT，所以无法正向代理 Https 网站（网上银行，Gmail）。