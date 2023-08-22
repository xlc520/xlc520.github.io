---
author: xlc520
title: Nginx一网打尽：动静分离、压缩、缓存、黑白名单、跨域、高可用、性能优化
description: 
date: 2023-01-20
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
---



# Nginx一网打尽：动静分离、压缩、缓存、黑白名单、跨域、高可用、性能优化

- 引言
- 一、性能怪兽-Nginx概念深入浅出
- 二、Nginx环境搭建
- 三、Nginx反向代理-负载均衡
- 四、Nginx动静分离
- 五、Nginx资源压缩
- 六、Nginx缓冲区
- 七、Nginx缓存机制
- 八、Nginx实现IP黑白名单
- 九、Nginx跨域配置
- 十、Nginx防盗链设计
- 十一、Nginx大文件传输配置
- 十二、Nginx配置SLL证书
- 十三、Nginx的高可用
- 十四、Nginx性能优化
- 十五、放在最后的结尾

## 引言

早期的业务都是基于单体节点部署，由于前期访问流量不大，因此单体结构也可满足需求，但随着业务增长，流量也越来越大，那么最终单台服务器受到的访问压力也会逐步增高。时间一长，单台服务器性能无法跟上业务增长，就会造成线上频繁宕机的现象发生，最终导致系统瘫痪无法继续处理用户的请求。

> ❝
>
> 从上面的描述中，主要存在两个问题：①单体结构的部署方式无法承载日益增长的业务流量。②当后端节点宕机后，整个系统会陷入瘫痪，导致整个项目不可用。
>
> ❞

因此在这种背景下，引入负载均衡技术可带来的收益：

- **「系统的高可用：」** 当某个节点宕机后可以迅速将流量转移至其他节点。
- **「系统的高性能：」** 多台服务器共同对外提供服务，为整个系统提供了更高规模的吞吐。
- **「系统的拓展性：」** 当业务再次出现增长或萎靡时，可再加入/减少节点，灵活伸缩。

OK~，既然引入负载均衡技术可给我们带来如此巨大的好处，那么又有那些方案可供选择呢？主要有两种负载方案，**「「硬件层面与软件层面」」** ，比较常用的硬件负载器有`A10、F5`等，但这些机器动辄大几万乃至几十万的成本，因此一般大型企业会采用该方案，如银行、国企、央企等。而成本有限，但依旧想做负载均衡的项目，那么可在软件层面实现，如典型的`Nginx`等，软件层的负载也是本文的重点，毕竟`Boss`们的准则之一就是：**「「能靠技术实现的就尽量不花钱。」」**

> ❝
>
> 当然，如果你认为本文对你而言有帮助，记得点赞、收藏、关注三连噢！
>
> ❞

## 一、性能怪兽-Nginx概念深入浅出

`Nginx`是目前负载均衡技术中的主流方案，几乎绝大部分项目都会使用它，`Nginx`是一个轻量级的高性能`HTTP`反向代理服务器，同时它也是一个通用类型的代理服务器，支持绝大部分协议，如`TCP、UDP、SMTP、HTTPS`等。

![Nginx](https://static.xlc520.tk/blogImage/640-1674181929662-0.jpeg)

`Nginx`与Redis相同，都是基于多路复用模型构建出的产物，因此它与`Redis`同样具备 **「「资源占用少、并发支持高」」** 的特点，在理论上单节点的`Nginx`同时支持`5W`并发连接，而实际生产环境中，硬件基础到位再结合简单调优后确实能达到该数值。

先来看看`Nginx`引入前后，客户端请求处理流程的对比：

![Nginx](https://static.xlc520.tk/blogImage/640-1674181929661-1.jpeg)

原本客户端是直接请求目标服务器，由目标服务器直接完成请求处理工作，但加入`Nginx`后，所有的请求会先经过`Nginx`，再由其进行分发到具体的服务器处理，处理完成后再返回`Nginx`，最后由`Nginx`将最终的响应结果返回给客户端。

了解了`Nginx`的基本概念后，再来快速搭建一下环境，以及了解一些`Nginx`的高级特性，如动静分离、资源压缩、缓存配置、`IP`黑名单、高可用保障等。

## 二、Nginx环境搭建

❶首先创建`Nginx`的目录并进入：

```
[root@localhost]# mkdir /soft && mkdir /soft/nginx/  
[root@localhost]# cd /soft/nginx/  
```

❷下载`Nginx`的安装包，可以通过`FTP`工具上传离线环境包，也可通过`wget`命令在线获取安装包：

```
[root@localhost]# wget https://nginx.org/download/nginx-1.21.6.tar.gz  
```

没有`wget`命令的可通过`yum`命令安装：

```
[root@localhost]# yum -y install wget  
```

❸解压`Nginx`的压缩包：

```
[root@localhost]# tar -xvzf nginx-1.21.6.tar.gz  
```

❹下载并安装`Nginx`所需的依赖库和包：

```
[root@localhost]# yum install --downloadonly --downloaddir=/soft/nginx/ gcc-c++  
[root@localhost]# yum install --downloadonly --downloaddir=/soft/nginx/ pcre pcre-devel4  
[root@localhost]# yum install --downloadonly --downloaddir=/soft/nginx/ zlib zlib-devel  
[root@localhost]# yum install --downloadonly --downloaddir=/soft/nginx/ openssl openssl-devel 
```

也可以通过`yum`命令一键下载（推荐上面哪种方式）：

```
[root@localhost]# yum -y install gcc zlib zlib-devel pcre-devel openssl openssl-devel  
```

执行完成后，然后`ls`查看目录文件，会看一大堆依赖：

![Nginx](https://static.xlc520.tk/blogImage/640-1674181929661-2.jpeg)

紧接着通过`rpm`命令依次将依赖包一个个构建，或者通过如下指令一键安装所有依赖包：

```
[root@localhost]# rpm -ivh --nodeps *.rpm  
```

❺进入解压后的`nginx`目录，然后执行`Nginx`的配置脚本，为后续的安装提前配置好环境，默认位于`/usr/local/nginx/`目录下（可自定义目录）：

```
[root@localhost]# cd nginx-1.21.6  
[root@localhost]# ./configure --prefix=/soft/nginx/  
```

❻编译并安装`Nginx`：

```
[root@localhost]# make && make install  
```

❼最后回到前面的`/soft/nginx/`目录，输入`ls`即可看见安装`nginx`完成后生成的文件。

❽修改安装后生成的`conf`目录下的`nginx.conf`配置文件：

```
[root@localhost]# vi conf/nginx.conf  
    修改端口号：listen    80;  
 修改IP地址：server_name  你当前机器的本地IP(线上配置域名);  
```

❾制定配置文件并启动`Nginx`：

```
[root@localhost]# sbin/nginx -c conf/nginx.conf  
[root@localhost]# ps aux | grep nginx  
```

`Nginx`其他操作命令：

```
sbin/nginx -t -c conf/nginx.conf # 检测配置文件是否正常  
sbin/nginx -s reload -c conf/nginx.conf # 修改配置后平滑重启  
sbin/nginx -s quit # 优雅关闭Nginx，会在执行完当前的任务后再退出  
sbin/nginx -s stop # 强制终止Nginx，不管当前是否有任务在执行  
```

❿开放`80`端口，并更新防火墙：

```
[root@localhost]# firewall-cmd --zone=public --add-port=80/tcp --permanent  
[root@localhost]# firewall-cmd --reload  
[root@localhost]# firewall-cmd --zone=public --list-ports  
```

⓫在`Windows/Mac`的浏览器中，直接输入刚刚配置的`IP`地址访问`Nginx`：

最终看到如上的`Nginx`欢迎界面，代表`Nginx`安装完成。

## 三、Nginx反向代理-负载均衡

首先通过`SpringBoot+Freemarker`快速搭建一个`WEB`项目：springboot-web-nginx，然后在该项目中，创建一个`IndexNginxController.java`文件，逻辑如下：

```
@Controller  
public class IndexNginxController {  
    @Value("${server.port}")  
    private String port;  
  
    @RequestMapping("/")  
    public ModelAndView index(){  
        ModelAndView model = new ModelAndView();  
        model.addObject("port", port);  
        model.setViewName("index");  
        return model;  
    }  
}  
```

在该`Controller`类中，存在一个成员变量：`port`，它的值即是从`application.properties`配置文件中获取`server.port`值。当出现访问`/`资源的请求时，跳转前端`index`页面，并将该值携带返回。

前端的`index.ftl`文件代码如下：

```
<html>  
    <head>  
        <title>Nginx演示页面</title>  
        <link href="nginx_style.css" rel="stylesheet" type="text/css"/>  
    </head>  
    <body>  
        <div style="border: 2px solid red;margin: auto;width: 800px;text-align: center">  
            <div  id="nginx_title">  
                <h1>欢迎来到熊猫高级会所，我是竹子${port}号！</h1>  
            </div>  
        </div>  
    </body>  
</html>  
```

从上可以看出其逻辑并不复杂，仅是从响应中获取了`port`输出。

OK~，前提工作准备就绪后，再简单修改一下`nginx.conf`的配置即可：

```
upstream nginx_boot{  
   # 30s内检查心跳发送两次包，未回复就代表该机器宕机，请求分发权重比为1:2  
   server 192.168.0.000:8080 weight=100 max_fails=2 fail_timeout=30s;   
   server 192.168.0.000:8090 weight=200 max_fails=2 fail_timeout=30s;  
   # 这里的IP请配置成你WEB服务所在的机器IP  
}  
  
server {  
    location / {  
        root   html;  
        # 配置一下index的地址，最后加上index.ftl。  
        index  index.html index.htm index.jsp index.ftl;  
        proxy_set_header Host $host;  
        proxy_set_header X-Real-IP $remote_addr;  
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;  
        # 请求交给名为nginx_boot的upstream上  
        proxy_pass http://nginx_boot;  
    }  
}  
```

> ❝
>
> 至此，所有的前提工作准备就绪，紧接着再启动`Nginx`，然后再启动两个`web`服务，第一个`WEB`服务启动时，在`application.properties`配置文件中，将端口号改为`8080`，第二个`WEB`服务启动时，将其端口号改为`8090`。
>
> ❞

最终来看看效果：

![Nginx](https://static.xlc520.tk/blogImage/640-1674181929661-3.gif)负载均衡效果-动图演示

因为配置了请求分发的权重，`8080、8090`的权重比为`2:1`，因此请求会根据权重比均摊到每台机器，也就是`8080`一次、`8090`两次、`8080`一次......

#### Nginx请求分发原理

客户端发出的请求`192.168.12.129`最终会转变为：`http://192.168.12.129:80/`，然后再向目标`IP`发起请求，流程如下：

![Nginx](https://static.xlc520.tk/blogImage/640-1674181929662-4.jpeg)请求分发原理

- 由于`Nginx`监听了`192.168.12.129`的`80`端口，所以最终该请求会找到`Nginx`进程；
- `Nginx`首先会根据配置的`location`规则进行匹配，根据客户端的请求路径`/`，会定位到`location /{}`规则；
- 然后根据该`location`中配置的`proxy_pass`会再找到名为`nginx_boot`的`upstream`；
- 最后根据`upstream`中的配置信息，将请求转发到运行`WEB`服务的机器处理，由于配置了多个`WEB`服务，且配置了权重值，因此`Nginx`会依次根据权重比分发请求。

## 四、Nginx动静分离

动静分离应该是听的次数较多的性能优化方案，那先思考一个问题：**「「为什么需要做动静分离呢？它带来的好处是什么？」」** 其实这个问题也并不难回答，当你搞懂了网站的本质后，自然就理解了动静分离的重要性。先来以淘宝为例分析看看：

![Nginx](https://static.xlc520.tk/blogImage/640-1674181929662-5.jpeg)淘宝首页

当浏览器输入`www.taobao.com`访问淘宝首页时，打开开发者调试工具可以很明显的看到，首页加载会出现`100+`的请求数，而正常项目开发时，静态资源一般会放入到`resources/static/`目录下：

![Nginx](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)IDEA 工程结构

在项目上线部署时，这些静态资源会一起打成包，那此时思考一个问题：**「「假设淘宝也是这样干的，那么首页加载时的请求最终会去到哪儿被处理？」」** 答案毋庸置疑，首页`100+`的所有请求都会来到部署`WEB`服务的机器处理，那则代表着一个客户端请求淘宝首页，就会对后端服务器造成`100+`的并发请求。毫无疑问，这对于后端服务器的压力是尤为巨大的。

> ❝
>
> 但此时不妨分析看看，首页`100+`的请求中，是不是至少有`60+`是属于`*.js、*.css、*.html、*.jpg.....`这类静态资源的请求呢？答案是`Yes`。
>
> ❞

既然有这么多请求属于静态的，这些资源大概率情况下，长时间也不会出现变动，那为何还要让这些请求到后端再处理呢？能不能在此之前就提前处理掉？当然`OK`，因此经过分析之后能够明确一点：**「「做了动静分离之后，至少能够让后端服务减少一半以上的并发量。」」** 到此时大家应该明白了动静分离能够带来的性能收益究竟有多大。

------

OK~，搞清楚动静分离的必要性之后，如何实现动静分离呢？其实非常简单，实战看看。

①先在部署`Nginx`的机器，`Nginx`目录下创建一个目录`static_resources`：

```
mkdir static_resources  
```

②将项目中所有的静态资源全部拷贝到该目录下，而后将项目中的静态资源移除重新打包。

③稍微修改一下`nginx.conf`的配置，增加一条`location`匹配规则：

```
location ~ .*\.(html|htm|gif|jpg|jpeg|bmp|png|ico|txt|js|css){  
    root   /soft/nginx/static_resources;  
    expires 7d;  
}  
```

然后照常启动`nginx`和移除了静态资源的`WEB`服务，你会发现原本的样式、`js`效果、图片等依旧有效，如下：

![Nginx](https://static.xlc520.tk/blogImage/640-1674181929662-6.jpeg)

其中`static`目录下的`nginx_style.css`文件已被移除，但效果依旧存在（绿色字体+蓝色大边框)：

![Nginx](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1 1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)移除后效果动图

最后解读一下那条location规则：

```
location ~ .*\.(html|htm|gif|jpg|jpeg|bmp|png|ico|txt|js|css)
```

- `~`代表匹配时区分大小写
- `.*`代表任意字符都可以出现零次或多次，即资源名不限制
- `\.`代表匹配后缀分隔符.
- `(html|...|css)`代表匹配括号里所有静态资源类型

综上所述，简单一句话概述：该配置表示匹配以`.html~.css`为后缀的所有资源请求。

**「最后提一嘴，也可以将静态资源上传到文件服务器中，然后`location`中配置一个新的`upstream`指向。」**

## 五、Nginx资源压缩

建立在动静分离的基础之上，如果一个静态资源的`Size`越小，那么自然传输速度会更快，同时也会更节省带宽，因此我们在部署项目时，也可以通过`Nginx`对于静态资源实现压缩传输，一方面可以节省带宽资源，第二方面也可以加快响应速度并提升系统整体吞吐。

在`Nginx`也提供了三个支持资源压缩的模块`ngx_http_gzip_module、ngx_http_gzip_static_module、ngx_http_gunzip_module`，其中`ngx_http_gzip_module`属于内置模块，代表着可以直接使用该模块下的一些压缩指令，后续的资源压缩操作都基于该模块，先来看看压缩配置的一些参数/指令：

![Nginx](https://static.xlc520.tk/blogImage/640-1674181929662-7.png)

了解了`Nginx`中的基本压缩配置后，接下来可以在`Nginx`中简单配置一下：

```
http{
    # 开启压缩机制
    gzip on;
    # 指定会被压缩的文件类型(也可自己配置其他类型)
    gzip_types text/plain application/javascript text/css application/xml text/javascript image/jpeg image/gif image/png;
    # 设置压缩级别，越高资源消耗越大，但压缩效果越好
    gzip_comp_level 5;
    # 在头部中添加Vary: Accept-Encoding（建议开启）
    gzip_vary on;
    # 处理压缩请求的缓冲区数量和大小
    gzip_buffers 16 8k;
    # 对于不支持压缩功能的客户端请求不开启压缩机制
    gzip_disable "MSIE [1-6]\."; # 低版本的IE浏览器不支持压缩
    # 设置压缩响应所支持的HTTP最低版本
    gzip_http_version 1.1;
    # 设置触发压缩的最小阈值
    gzip_min_length 2k;
    # 关闭对后端服务器的响应结果进行压缩
    gzip_proxied off;
}
```

在上述的压缩配置中，最后一个`gzip_proxied`选项，可以根据系统的实际情况决定，总共存在多种选项：

- `off`：关闭`Nginx`对后台服务器的响应结果进行压缩。
- `expired`：如果响应头中包含`Expires`信息，则开启压缩。
- `no-cache`：如果响应头中包含`Cache-Control:no-cache`信息，则开启压缩。
- `no-store`：如果响应头中包含`Cache-Control:no-store`信息，则开启压缩。
- `private`：如果响应头中包含`Cache-Control:private`信息，则开启压缩。
- `no_last_modified`：如果响应头中不包含`Last-Modified`信息，则开启压缩。
- `no_etag`：如果响应头中不包含`ETag`信息，则开启压缩。
- `auth`：如果响应头中包含`Authorization`信息，则开启压缩。
- `any`：无条件对后端的响应结果开启压缩机制。

OK~，简单修改好了`Nginx`的压缩配置后，可以在原本的`index`页面中引入一个`jquery-3.6.0.js`文件：

```
<script type="text/javascript" src="jquery-3.6.0.js"></script>  
```

分别来对比下压缩前后的区别：

![Nginx](https://static.xlc520.tk/blogImage/640-1674181929662-8.png)

从图中可以很明显看出，未开启压缩机制前访问时，`js`文件的原始大小为`230K`，当配置好压缩后再重启`Nginx`，会发现文件大小从`230KB→69KB`，效果立竿见影！

> ❝
>
> 注意点：①对于图片、视频类型的数据，会默认开启压缩机制，因此一般无需再次开启压缩。②对于`.js`文件而言，需要指定压缩类型为`application/javascript`，而并非`text/javascript、application/x-javascript`。
>
> ❞

## 六、Nginx缓冲区

先来思考一个问题，接入`Nginx`的项目一般请求流程为：“客户端→`Nginx`→服务端”，在这个过程中存在两个连接：“客户端→`Nginx`、`Nginx`→服务端”，那么两个不同的连接速度不一致，就会影响用户的体验（比如浏览器的加载速度跟不上服务端的响应速度）。

其实也就类似电脑的内存跟不上`CPU`速度，所以对于用户造成的体验感极差，因此在`CPU`设计时都会加入三级高速缓冲区，用于缓解`CPU`和内存速率不一致的矛盾。在`Nginx`也同样存在缓冲区的机制，主要目的就在于：**「「用来解决两个连接之间速度不匹配造成的问题」」** ，有了缓冲后，`Nginx`代理可暂存后端的响应，然后按需供给数据给客户端。先来看看一些关于缓冲区的配置项：

- `proxy_buffering`：是否启用缓冲机制，默认为`on`关闭状态。

- `client_body_buffer_size`：设置缓冲客户端请求数据的内存大小。

- `proxy_buffers`：为每个请求/连接设置缓冲区的数量和大小，默认`4 4k/8k`。

- `proxy_buffer_size`：设置用于存储响应头的缓冲区大小。

- `proxy_busy_buffers_size`：在后端数据没有完全接收完成时，`Nginx`可以将`busy`状态的缓冲返回给客户端，该参数用来设置`busy`状态的`buffer`具体有多大，默认为`proxy_buffer_size*2`。

- `proxy_temp_path`：当内存缓冲区存满时，可以将数据临时存放到磁盘，该参数是设置存储缓冲数据的目录。

- `path`是临时目录的路径。

- - 语法：`proxy_temp_path path;` path是临时目录的路径

- `proxy_temp_file_write_size`：设置每次写数据到临时文件的大小限制。

- `proxy_max_temp_file_size`：设置临时的缓冲目录中允许存储的最大容量。

- 非缓冲参数项：

- - `proxy_connect_timeout`：设置与后端服务器建立连接时的超时时间。
  - `proxy_read_timeout`：设置从后端服务器读取响应数据的超时时间。
  - `proxy_send_timeout`：设置向后端服务器传输请求数据的超时时间。

具体的`nginx.conf`配置如下：

```
http{  
    proxy_connect_timeout 10;  
    proxy_read_timeout 120;  
    proxy_send_timeout 10;  
    proxy_buffering on;  
    client_body_buffer_size 512k;  
    proxy_buffers 4 64k;  
    proxy_buffer_size 16k;  
    proxy_busy_buffers_size 128k;  
    proxy_temp_file_write_size 128k;  
    proxy_temp_path /soft/nginx/temp_buffer;  
}  
```

上述的缓冲区参数，是基于每个请求分配的空间，而并不是所有请求的共享空间。当然，具体的参数值还需要根据业务去决定，要综合考虑机器的内存以及每个请求的平均数据大小。

> ❝
>
> 最后提一嘴：使用缓冲也可以减少即时传输带来的带宽消耗。
>
> ❞

## 七、Nginx缓存机制

对于性能优化而言，缓存是一种能够大幅度提升性能的方案，因此几乎可以在各处都能看见缓存，如客户端缓存、代理缓存、服务器缓存等等，`Nginx`的缓存则属于代理缓存的一种。对于整个系统而言，加入缓存带来的优势额外明显：

- 减少了再次向后端或文件服务器请求资源的带宽消耗。
- 降低了下游服务器的访问压力，提升系统整体吞吐。
- 缩短了响应时间，提升了加载速度，打开页面的速度更快。

那么在`Nginx`中，又该如何配置代理缓存呢？先来看看缓存相关的配置项：

**「proxy_cache_path」**：代理缓存的路径。

语法：

```
proxy_cache_path path [levels=levels] [use_temp_path=on|off] keys_zone=name:size [inactive=time] [max_size=size] [manager_files=number] [manager_sleep=time] [manager_threshold=time] [loader_files=number] [loader_sleep=time] [loader_threshold=time] [purger=on|off] [purger_files=number] [purger_sleep=time] [purger_threshold=time];
```

是的，你没有看错，就是这么长....，解释一下每个参数项的含义：

- `path`：缓存的路径地址。
- `levels`：缓存存储的层次结构，最多允许三层目录。
- `use_temp_path`：是否使用临时目录。
- `keys_zone`：指定一个共享内存空间来存储热点Key(1M可存储8000个Key)。
- `inactive`：设置缓存多长时间未被访问后删除（默认是十分钟）。
- `max_size`：允许缓存的最大存储空间，超出后会基于LRU算法移除缓存，Nginx会创建一个Cache manager的进程移除数据，也可以通过purge方式。
- `manager_files`：manager进程每次移除缓存文件数量的上限。
- `manager_sleep`：manager进程每次移除缓存文件的时间上限。
- `manager_threshold`：manager进程每次移除缓存后的间隔时间。
- `loader_files`：重启Nginx载入缓存时，每次加载的个数，默认100。
- `loader_sleep`：每次载入时，允许的最大时间上限，默认200ms。
- `loader_threshold`：一次载入后，停顿的时间间隔，默认50ms。
- `purger`：是否开启purge方式移除数据。
- `purger_files`：每次移除缓存文件时的数量。
- `purger_sleep`：每次移除时，允许消耗的最大时间。
- `purger_threshold`：每次移除完成后，停顿的间隔时间。

**「proxy_cache」**：开启或关闭代理缓存，开启时需要指定一个共享内存区域。

语法：

```
proxy_cache zone | off;
```

zone为内存区域的名称，即上面中keys_zone设置的名称。

**「proxy_cache_key」**：定义如何生成缓存的键。

语法：

```
proxy_cache_key string;
```

string为生成Key的规则，如`$scheme$proxy_host$request_uri`。

**「proxy_cache_valid」**：缓存生效的状态码与过期时间。

语法：

```
proxy_cache_valid [code ...] time;
```

code为状态码，time为有效时间，可以根据状态码设置不同的缓存时间。

例如：`proxy_cache_valid 200 302 30m;`

**「proxy_cache_min_uses」**：设置资源被请求多少次后被缓存。

语法：

```
proxy_cache_min_uses number;
```

number为次数，默认为1。

**「proxy_cache_use_stale」**：当后端出现异常时，是否允许Nginx返回缓存作为响应。

语法：

```
proxy_cache_use_stale error;
```

error为错误类型，可配置`timeout|invalid_header|updating|http_500...`。

**「proxy_cache_lock」**：对于相同的请求，是否开启锁机制，只允许一个请求发往后端。

语法：

```
proxy_cache_lock on | off;
```

**「proxy_cache_lock_timeout」**：配置锁超时机制，超出规定时间后会释放请求。

```
proxy_cache_lock_timeout time;
```

**「proxy_cache_methods」**：设置对于那些HTTP方法开启缓存。

语法：

```
proxy_cache_methods method;
```

method为请求方法类型，如GET、HEAD等。

**「proxy_no_cache」**：定义不存储缓存的条件，符合时不会保存。

语法：

```
proxy_no_cache string...;
```

string为条件，例如`$cookie_nocache $arg_nocache $arg_comment;`

**「proxy_cache_bypass」**：定义不读取缓存的条件，符合时不会从缓存中读取。

语法：

```
proxy_cache_bypass string...;
```

和上面`proxy_no_cache`的配置方法类似。

**「add_header」**：往响应头中添加字段信息。

语法：

```
add_header fieldName fieldValue;
```

**「$upstream_cache_status」**：记录了缓存是否命中的信息，存在多种情况：

- `MISS`：请求未命中缓存。
- `HIT`：请求命中缓存。
- `EXPIRED`：请求命中缓存但缓存已过期。
- `STALE`：请求命中了陈旧缓存。
- `REVALIDDATED`：Nginx验证陈旧缓存依然有效。
- `UPDATING`：命中的缓存内容陈旧，但正在更新缓存。
- `BYPASS`：响应结果是从原始服务器获取的。

> ❝
>
> PS：这个和之前的不同，之前的都是参数项，这个是一个Nginx内置变量。
>
> ❞

OK~，对于`Nginx`中的缓存配置项大概了解后，接着来配置一下`Nginx`代理缓存：

```
http{  
    # 设置缓存的目录，并且内存中缓存区名为hot_cache，大小为128m，  
    # 三天未被访问过的缓存自动清楚，磁盘中缓存的最大容量为2GB。  
    proxy_cache_path /soft/nginx/cache levels=1:2 keys_zone=hot_cache:128m inactive=3d max_size=2g;  
      
    server{  
        location / {  
            # 使用名为nginx_cache的缓存空间  
            proxy_cache hot_cache;  
            # 对于200、206、304、301、302状态码的数据缓存1天  
            proxy_cache_valid 200 206 304 301 302 1d;  
            # 对于其他状态的数据缓存30分钟  
            proxy_cache_valid any 30m;  
            # 定义生成缓存键的规则（请求的url+参数作为key）  
            proxy_cache_key $host$uri$is_args$args;  
            # 资源至少被重复访问三次后再加入缓存  
            proxy_cache_min_uses 3;  
            # 出现重复请求时，只让一个去后端读数据，其他的从缓存中读取  
            proxy_cache_lock on;  
            # 上面的锁超时时间为3s，超过3s未获取数据，其他请求直接去后端  
            proxy_cache_lock_timeout 3s;  
            # 对于请求参数或cookie中声明了不缓存的数据，不再加入缓存  
            proxy_no_cache $cookie_nocache $arg_nocache $arg_comment;  
            # 在响应头中添加一个缓存是否命中的状态（便于调试）  
            add_header Cache-status $upstream_cache_status;  
        }  
    }  
}  
```

接着来看一下效果，如下：

![Nginx](https://static.xlc520.tk/blogImage/640-1674181929662-9.png)

第一次访问时，因为还没有请求过资源，所以缓存中没有数据，因此没有命中缓存。第二、三次，依旧没有命中缓存，直至第四次时才显示命中，这是为什么呢？因为在前面的缓存配置中，我们配置了加入缓存的最低条件为：**「「资源至少要被请求三次以上才会加入缓存。」」** 这样可以避免很多无效缓存占用空间。

#### 缓存清理

当缓存过多时，如果不及时清理会导致磁盘空间被“吃光”，因此我们需要一套完善的缓存清理机制去删除缓存，在之前的`proxy_cache_path`参数中有`purger`相关的选项，开启后可以帮我们自动清理缓存，但遗憾的是：**`purger`系列参数只有商业版的`NginxPlus`才能使用，因此需要付费才可使用。**

不过天无绝人之路，我们可以通过强大的第三方模块`ngx_cache_purge`来替代，先来安装一下该插件：①首先去到`Nginx`的安装目录下，创建一个`cache_purge`目录：

```
[root@localhost]# mkdir cache_purge && cd cache_purge  
```

②通过`wget`指令从`github`上拉取安装包的压缩文件并解压：

```
[root@localhost]# wget https://github.com/FRiCKLE/ngx_cache_purge/archive/2.3.tar.gz  
[root@localhost]# tar -xvzf 2.3.tar.gz  
```

③再次去到之前`Nginx`的解压目录下：

```
[root@localhost]# cd /soft/nginx/nginx1.21.6  
```

④重新构建一次`Nginx`，通过`--add-module`的指令添加刚刚的第三方模块：

```
[root@localhost]# ./configure --prefix=/soft/nginx/ --add-module=/soft/nginx/cache_purge/ngx_cache_purge-2.3/  
```

⑤重新根据刚刚构建的`Nginx`，再次编译一下，**「但切记不要`make install`」** ：

```
[root@localhost]# make  
```

⑥删除之前`Nginx`的启动文件，不放心的也可以移动到其他位置：

```
[root@localhost]# rm -rf /soft/nginx/sbin/nginx  
```

⑦从生成的`objs`目录中，重新复制一个`Nginx`的启动文件到原来的位置：

```
[root@localhost]# cp objs/nginx /soft/nginx/sbin/nginx  
```

至此，第三方缓存清除模块`ngx_cache_purge`就安装完成了，接下来稍微修改一下`nginx.conf`配置，再添加一条`location`规则：

```
location ~ /purge(/.*) {  
  # 配置可以执行清除操作的IP（线上可以配置成内网机器）  
  # allow 127.0.0.1; # 代表本机  
  allow all; # 代表允许任意IP清除缓存  
  proxy_cache_purge $host$1$is_args$args;  
}  
```

然后再重启`Nginx`，接下来即可通过`http://xxx/purge/xx`的方式清除缓存。

## 八、Nginx实现IP黑白名单

有时候往往有些需求，可能某些接口只能开放给对应的合作商，或者购买/接入`API`的合作伙伴，那么此时就需要实现类似于`IP`白名单的功能。而有时候有些恶意攻击者或爬虫程序，被识别后需要禁止其再次访问网站，因此也需要实现`IP`黑名单。那么这些功能无需交由后端实现，可直接在`Nginx`中处理。

`Nginx`做黑白名单机制，主要是通过`allow、deny`配置项来实现：

```
allow xxx.xxx.xxx.xxx; # 允许指定的IP访问，可以用于实现白名单。  
deny xxx.xxx.xxx.xxx; # 禁止指定的IP访问，可以用于实现黑名单。  
```

要同时屏蔽/开放多个`IP`访问时，如果所有`IP`全部写在`nginx.conf`文件中定然是不显示的，这种方式比较冗余，那么可以新建两个文件`BlocksIP.conf、WhiteIP.conf`：

```
# --------黑名单：BlocksIP.conf---------  
deny 192.177.12.222; # 屏蔽192.177.12.222访问  
deny 192.177.44.201; # 屏蔽192.177.44.201访问  
deny 127.0.0.0/8; # 屏蔽127.0.0.1到127.255.255.254网段中的所有IP访问  
  
# --------白名单：WhiteIP.conf---------  
allow 192.177.12.222; # 允许192.177.12.222访问  
allow 192.177.44.201; # 允许192.177.44.201访问  
allow 127.45.0.0/16; # 允许127.45.0.1到127.45.255.254网段中的所有IP访问  
deny all; # 除开上述IP外，其他IP全部禁止访问  
```

分别将要禁止/开放的`IP`添加到对应的文件后，可以再将这两个文件在`nginx.conf`中导入：

```
http{  
    # 屏蔽该文件中的所有IP  
    include /soft/nginx/IP/BlocksIP.conf;   
 server{  
    location xxx {  
        # 某一系列接口只开放给白名单中的IP  
        include /soft/nginx/IP/blockip.conf;   
    }  
 }  
}  
```

对于文件具体在哪儿导入，这个也并非随意的，如果要整站屏蔽/开放就在`http`中导入，如果只需要一个域名下屏蔽/开放就在`sever`中导入，如果只需要针对于某一系列接口屏蔽/开放`IP`，那么就在`location`中导入。

> ❝
>
> 当然，上述只是最简单的`IP`黑/白名单实现方式，同时也可以通过`ngx_http_geo_module、ngx_http_geo_module`第三方库去实现（这种方式可以按地区、国家进行屏蔽，并且提供了`IP`库）。
>
> ❞

## 九、Nginx跨域配置

跨域问题在之前的单体架构开发中，其实是比较少见的问题，除非是需要接入第三方`SDK`时，才需要处理此问题。但随着现在前后端分离、分布式架构的流行，跨域问题也成为了每个Java开发必须要懂得解决的一个问题。

#### 跨域问题产生的原因

产生跨域问题的主要原因就在于 **「同源策略」** ，为了保证用户信息安全，防止恶意网站窃取数据，同源策略是必须的，否则`cookie`可以共享。由于`http`无状态协议通常会借助`cookie`来实现有状态的信息记录，例如用户的身份/密码等，因此一旦`cookie`被共享，那么会导致用户的身份信息被盗取。

同源策略主要是指三点相同，**「「协议+域名+端口」」** 相同的两个请求，则可以被看做是同源的，但如果其中任意一点存在不同，则代表是两个不同源的请求，同源策略会限制了不同源之间的资源交互。

#### Nginx解决跨域问题

弄明白了跨域问题的产生原因，接下来看看`Nginx`中又该如何解决跨域呢？其实比较简单，在`nginx.conf`中稍微添加一点配置即可：

```
location / {  
    # 允许跨域的请求，可以自定义变量$http_origin，*表示所有  
    add_header 'Access-Control-Allow-Origin' *;  
    # 允许携带cookie请求  
    add_header 'Access-Control-Allow-Credentials' 'true';  
    # 允许跨域请求的方法：GET,POST,OPTIONS,PUT  
    add_header 'Access-Control-Allow-Methods' 'GET,POST,OPTIONS,PUT';  
    # 允许请求时携带的头部信息，*表示所有  
    add_header 'Access-Control-Allow-Headers' *;  
    # 允许发送按段获取资源的请求  
    add_header 'Access-Control-Expose-Headers' 'Content-Length,Content-Range';  
    # 一定要有！！！否则Post请求无法进行跨域！  
    # 在发送Post跨域请求前，会以Options方式发送预检请求，服务器接受时才会正式请求  
    if ($request_method = 'OPTIONS') {  
        add_header 'Access-Control-Max-Age' 1728000;  
        add_header 'Content-Type' 'text/plain; charset=utf-8';  
        add_header 'Content-Length' 0;  
        # 对于Options方式的请求返回204，表示接受跨域请求  
        return 204;  
    }  
}  
```

在`nginx.conf`文件加上如上配置后，跨域请求即可生效了。

> ❝
>
> 但如果后端是采用分布式架构开发的，有时候RPC调用也需要解决跨域问题，不然也同样会出现无法跨域请求的异常，因此可以在你的后端项目中，通过继承`HandlerInterceptorAdapter`类、实现`WebMvcConfigurer`接口、添加`@CrossOrgin`注解的方式实现接口之间的跨域配置。
>
> ❞

## 十、Nginx防盗链设计

首先了解一下何谓盗链：**「「盗链即是指外部网站引入当前网站的资源对外展示」」** ，来举个简单的例子理解：

> ❝
>
> 好比壁纸网站`X`站、`Y`站，`X`站是一点点去购买版权、签约作者的方式，从而积累了海量的壁纸素材，但`Y`站由于资金等各方面的原因，就直接通过`<img src="X站/xxx.jpg" />`这种方式照搬了`X`站的所有壁纸资源，继而提供给用户下载。
>
> ❞

那么如果我们自己是这个`X`站的`Boss`，心中必然不爽，那么此时又该如何屏蔽这类问题呢？那么接下来要叙说的**「「防盗链」」** 登场了！

`Nginx`的防盗链机制实现，跟一个头部字段：`Referer`有关，该字段主要描述了当前请求是从哪儿发出的，那么在`Nginx`中就可获取该值，然后判断是否为本站的资源引用请求，如果不是则不允许访问。`Nginx`中存在一个配置项为`valid_referers`，正好可以满足前面的需求，语法如下：

```
valid_referers none | blocked | server_names | string ...;
```

- `none`：表示接受没有`Referer`字段的`HTTP`请求访问。
- `blocked`：表示允许`http://`或`https//`以外的请求访问。
- `server_names`：资源的白名单，这里可以指定允许访问的域名。
- `string`：可自定义字符串，支配通配符、正则表达式写法。

简单了解语法后，接下来的实现如下：

```
# 在动静分离的location中开启防盗链机制  
location ~ .*\.(html|htm|gif|jpg|jpeg|bmp|png|ico|txt|js|css){  
    # 最后面的值在上线前可配置为允许的域名地址  
    valid_referers blocked 192.168.12.129;  
    if ($invalid_referer) {  
        # 可以配置成返回一张禁止盗取的图片  
        # rewrite   ^/ http://xx.xx.com/NO.jpg;  
        # 也可直接返回403  
        return   403;  
    }  
      
    root   /soft/nginx/static_resources;  
    expires 7d;  
}  
```

根据上述中的内容配置后，就已经通过`Nginx`实现了最基本的防盗链机制，最后只需要额外重启一下就好啦！当然，对于防盗链机制实现这块，也有专门的第三方模块`ngx_http_accesskey_module`实现了更为完善的设计，感兴趣的小伙伴可以自行去看看。

> ❝
>
> PS：防盗链机制也无法解决爬虫伪造`referers`信息的这种方式抓取数据。
>
> ❞

## 十一、Nginx大文件传输配置

在某些业务场景中需要传输一些大文件，但大文件传输时往往都会会出现一些`Bug`，比如文件超出限制、文件传输过程中请求超时等，那么此时就可以在`Nginx`稍微做一些配置，先来了解一些关于大文件传输时可能会用的配置项：

```
牛逼啊！接私活必备的 N 个开源项目！赶快收藏
```

![Nginx](https://static.xlc520.tk/blogImage/640-1674181929662-10.png)

在传输大文件时，`client_max_body_size`、`client_header_timeout`、`proxy_read_timeout`、`proxy_send_timeout`这四个参数值都可以根据自己项目的实际情况来配置。

> ❝
>
> 上述配置仅是作为代理层需要配置的，因为最终客户端传输文件还是直接与后端进行交互，这里只是把作为网关层的`Nginx`配置调高一点，调到能够“容纳大文件”传输的程度。当然，`Nginx`中也可以作为文件服务器使用，但需要用到一个专门的第三方模块`nginx-upload-module`，如果项目中文件上传的作用处不多，那么建议可以通过`Nginx`搭建，毕竟可以节省一台文件服务器资源。但如若文件上传/下载较为频繁，那么还是建议额外搭建文件服务器，并将上传/下载功能交由后端处理。
>
> ❞

## 十二、Nginx配置SLL证书

随着越来越多的网站接入`HTTPS`，因此`Nginx`中仅配置`HTTP`还不够，往往还需要监听`443`端口的请求，`HTTPS`为了确保通信安全，所以服务端需配置对应的数字证书，当项目使用`Nginx`作为网关时，那么证书在`Nginx`中也需要配置，接下来简单聊一下关于`SSL`证书配置过程：

①先去CA机构或从云控制台中申请对应的`SSL`证书，审核通过后下载`Nginx`版本的证书。

②下载数字证书后，完整的文件总共有三个：`.crt、.key、.pem`：

- `.crt`：数字证书文件，`.crt`是`.pem`的拓展文件，因此有些人下载后可能没有。
- `.key`：服务器的私钥文件，及非对称加密的私钥，用于解密公钥传输的数据。
- `.pem`：`Base64-encoded`编码格式的源证书文本文件，可自行根需求修改拓展名。

③在`Nginx`目录下新建`certificate`目录，并将下载好的证书/私钥等文件上传至该目录。

④最后修改一下`nginx.conf`文件即可，如下：

```
# ----------HTTPS配置-----------  
server {  
    # 监听HTTPS默认的443端口  
    listen 443;  
    # 配置自己项目的域名  
    server_name www.xxx.com;  
    # 打开SSL加密传输  
    ssl on;  
    # 输入域名后，首页文件所在的目录  
    root html;  
    # 配置首页的文件名  
    index index.html index.htm index.jsp index.ftl;  
    # 配置自己下载的数字证书  
    ssl_certificate  certificate/xxx.pem;  
    # 配置自己下载的服务器私钥  
    ssl_certificate_key certificate/xxx.key;  
    # 停止通信时，加密会话的有效期，在该时间段内不需要重新交换密钥  
    ssl_session_timeout 5m;  
    # TLS握手时，服务器采用的密码套件  
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;  
    # 服务器支持的TLS版本  
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;  
    # 开启由服务器决定采用的密码套件  
    ssl_prefer_server_ciphers on;  
  
    location / {  
        ....  
    }  
}  
  
# ---------HTTP请求转HTTPS-------------  
server {  
    # 监听HTTP默认的80端口  
    listen 80;  
    # 如果80端口出现访问该域名的请求  
    server_name www.xxx.com;  
    # 将请求改写为HTTPS（这里写你配置了HTTPS的域名）  
    rewrite ^(.*)$ https://www.xxx.com;  
}  
```

OK~，根据如上配置了`Nginx`后，你的网站即可通过`https://`的方式访问，并且当客户端使用`http://`的方式访问时，会自动将其改写为`HTTPS`请求。

## 十三、Nginx的高可用

线上如果采用单个节点的方式部署`Nginx`，难免会出现天灾人祸，比如系统异常、程序宕机、服务器断电、机房爆炸、地球毁灭....哈哈哈，夸张了。但实际生产环境中确实存在隐患问题，由于`Nginx`作为整个系统的网关层接入外部流量，所以一旦`Nginx`宕机，最终就会导致整个系统不可用，这无疑对于用户的体验感是极差的，因此也得保障`Nginx`高可用的特性。

> ❝
>
> 接下来则会通过`keepalived`的`VIP`机制，实现`Nginx`的高可用。`VIP`并不是只会员的意思，而是指`Virtual IP`，即虚拟`IP`。
>
> ❞

`keepalived`在之前单体架构开发时，是一个用的较为频繁的高可用技术，比如`MySQL、Redis、MQ、Proxy、Tomcat`等各处都会通过`keepalived`提供的`VIP`机制，实现单节点应用的高可用。

#### Keepalived+重启脚本+双机热备搭建

①首先创建一个对应的目录并下载`keepalived`到`Linux`中并解压：

```
[root@localhost]# mkdir /soft/keepalived && cd /soft/keepalived  
[root@localhost]# wget https://www.keepalived.org/software/keepalived-2.2.4.tar.gz  
[root@localhost]# tar -zxvf keepalived-2.2.4.tar.gz  
```

②进入解压后的`keepalived`目录并构建安装环境，然后编译并安装：

```
[root@localhost]# cd keepalived-2.2.4  
[root@localhost]# ./configure --prefix=/soft/keepalived/  
[root@localhost]# make && make install  
```

③进入安装目录的`/soft/keepalived/etc/keepalived/`并编辑配置文件：

```
[root@localhost]# cd /soft/keepalived/etc/keepalived/  
[root@localhost]# vi keepalived.conf  
```

④编辑主机的`keepalived.conf`核心配置文件，如下：

```
global_defs {  
    # 自带的邮件提醒服务，建议用独立的监控或第三方SMTP，也可选择配置邮件发送。  
    notification_email {  
        root@localhost  
    }  
    notification_email_from root@localhost  
    smtp_server localhost  
    smtp_connect_timeout 30  
    # 高可用集群主机身份标识(集群中主机身份标识名称不能重复，建议配置成本机IP)  
 router_id 192.168.12.129   
}  
  
# 定时运行的脚本文件配置  
vrrp_script check_nginx_pid_restart {  
    # 之前编写的nginx重启脚本的所在位置  
 script "/soft/scripts/keepalived/check_nginx_pid_restart.sh"   
    # 每间隔3秒执行一次  
 interval 3  
    # 如果脚本中的条件成立，重启一次则权重-20  
 weight -20  
}  
  
# 定义虚拟路由，VI_1为虚拟路由的标示符（可自定义名称）  
vrrp_instance VI_1 {  
    # 当前节点的身份标识：用来决定主从（MASTER为主机，BACKUP为从机）  
 state MASTER  
    # 绑定虚拟IP的网络接口，根据自己的机器的网卡配置  
 interface ens33   
    # 虚拟路由的ID号，主从两个节点设置必须一样  
 virtual_router_id 121  
    # 填写本机IP  
 mcast_src_ip 192.168.12.129  
    # 节点权重优先级，主节点要比从节点优先级高  
 priority 100  
    # 优先级高的设置nopreempt，解决异常恢复后再次抢占造成的脑裂问题  
 nopreempt  
    # 组播信息发送间隔，两个节点设置必须一样，默认1s（类似于心跳检测）  
 advert_int 1  
    authentication {  
        auth_type PASS  
        auth_pass 1111  
    }  
    # 将track_script块加入instance配置块  
    track_script {  
        # 执行Nginx监控的脚本  
  check_nginx_pid_restart  
    }  
  
    virtual_ipaddress {  
        # 虚拟IP(VIP)，也可扩展，可配置多个。  
  192.168.12.111  
    }  
}  
```

⑤克隆一台之前的虚拟机作为从（备）机，编辑从机的`keepalived.conf`文件，如下：

```
global_defs {  
    # 自带的邮件提醒服务，建议用独立的监控或第三方SMTP，也可选择配置邮件发送。  
    notification_email {  
        root@localhost  
    }  
    notification_email_from root@localhost  
    smtp_server localhost  
    smtp_connect_timeout 30  
    # 高可用集群主机身份标识(集群中主机身份标识名称不能重复，建议配置成本机IP)  
 router_id 192.168.12.130   
}  
  
# 定时运行的脚本文件配置  
vrrp_script check_nginx_pid_restart {  
    # 之前编写的nginx重启脚本的所在位置  
 script "/soft/scripts/keepalived/check_nginx_pid_restart.sh"   
    # 每间隔3秒执行一次  
 interval 3  
    # 如果脚本中的条件成立，重启一次则权重-20  
 weight -20  
}  
  
# 定义虚拟路由，VI_1为虚拟路由的标示符（可自定义名称）  
vrrp_instance VI_1 {  
    # 当前节点的身份标识：用来决定主从（MASTER为主机，BACKUP为从机）  
 state BACKUP  
    # 绑定虚拟IP的网络接口，根据自己的机器的网卡配置  
 interface ens33   
    # 虚拟路由的ID号，主从两个节点设置必须一样  
 virtual_router_id 121  
    # 填写本机IP  
 mcast_src_ip 192.168.12.130  
    # 节点权重优先级，主节点要比从节点优先级高  
 priority 90  
    # 优先级高的设置nopreempt，解决异常恢复后再次抢占造成的脑裂问题  
 nopreempt  
    # 组播信息发送间隔，两个节点设置必须一样，默认1s（类似于心跳检测）  
 advert_int 1  
    authentication {  
        auth_type PASS  
        auth_pass 1111  
    }  
    # 将track_script块加入instance配置块  
    track_script {  
        # 执行Nginx监控的脚本  
  check_nginx_pid_restart  
    }  
  
    virtual_ipaddress {  
        # 虚拟IP(VIP)，也可扩展，可配置多个。  
  192.168.12.111  
    }  
}  
```

⑥新建`scripts`目录并编写`Nginx`的重启脚本，`check_nginx_pid_restart.sh`：

```
[root@localhost]# mkdir /soft/scripts /soft/scripts/keepalived  
[root@localhost]# touch /soft/scripts/keepalived/check_nginx_pid_restart.sh  
[root@localhost]# vi /soft/scripts/keepalived/check_nginx_pid_restart.sh  
  
#!/bin/sh  
# 通过ps指令查询后台的nginx进程数，并将其保存在变量nginx_number中  
nginx_number=`ps -C nginx --no-header | wc -l`  
# 判断后台是否还有Nginx进程在运行  
if [ $nginx_number -eq 0 ];then  
    # 如果后台查询不到`Nginx`进程存在，则执行重启指令  
    /soft/nginx/sbin/nginx -c /soft/nginx/conf/nginx.conf  
    # 重启后等待1s后，再次查询后台进程数  
    sleep 1  
    # 如果重启后依旧无法查询到nginx进程  
    if [ `ps -C nginx --no-header | wc -l` -eq 0 ];then  
        # 将keepalived主机下线，将虚拟IP漂移给从机，从机上线接管Nginx服务  
        systemctl stop keepalived.service  
    fi  
fi  
```

⑦编写的脚本文件需要更改编码格式，并赋予执行权限，否则可能执行失败：

```
[root@localhost]# vi /soft/scripts/keepalived/check_nginx_pid_restart.sh  
  
:set fileformat=unix # 在vi命令里面执行，修改编码格式  
:set ff # 查看修改后的编码格式  
  
[root@localhost]# chmod +x /soft/scripts/keepalived/check_nginx_pid_restart.sh  
```

⑧由于安装`keepalived`时，是自定义的安装位置，因此需要拷贝一些文件到系统目录中：

```
[root@localhost]# mkdir /etc/keepalived/  
[root@localhost]# cp /soft/keepalived/etc/keepalived/keepalived.conf /etc/keepalived/  
[root@localhost]# cp /soft/keepalived/keepalived-2.2.4/keepalived/etc/init.d/keepalived /etc/init.d/  
[root@localhost]# cp /soft/keepalived/etc/sysconfig/keepalived /etc/sysconfig/  
```

⑨将`keepalived`加入系统服务并设置开启自启动，然后测试启动是否正常：

```
[root@localhost]# chkconfig keepalived on  
[root@localhost]# systemctl daemon-reload  
[root@localhost]# systemctl enable keepalived.service  
[root@localhost]# systemctl start keepalived.service  
```

其他命令：

```
systemctl disable keepalived.service # 禁止开机自动启动  
systemctl restart keepalived.service # 重启keepalived  
systemctl stop keepalived.service # 停止keepalived  
tail -f /var/log/messages # 查看keepalived运行时日志  
```

⑩最后测试一下`VIP`是否生效，通过查看本机是否成功挂载虚拟`IP`：

```
[root@localhost]# ip addr  
```

![Nginx](https://static.xlc520.tk/blogImage/640-1674181929662-11.jpeg)虚拟IP-VIP

> ❝
>
> 从上图中可以明显看见虚拟`IP`已经成功挂载，但另外一台机器`192.168.12.130`并不会挂载这个虚拟`IP`，只有当主机下线后，作为从机的`192.168.12.130`才会上线，接替`VIP`。最后测试一下外网是否可以正常与`VIP`通信，即在`Windows`中直接`ping VIP`：
>
> ❞

![Nginx](https://static.xlc520.tk/blogImage/640-1674181929662-12.png)Ping-VIP

外部通过`VIP`通信时，也可以正常`Ping`通，代表虚拟`IP`配置成功。

#### Nginx高可用性测试

经过上述步骤后，`keepalived`的`VIP`机制已经搭建成功，在上个阶段中主要做了几件事：

- 一、为部署`Nginx`的机器挂载了`VIP`。
- 二、通过`keepalived`搭建了主从双机热备。
- 三、通过`keepalived`实现了`Nginx`宕机重启。

由于前面没有域名的原因，因此最初`server_name`配置的是当前机器的`IP`，所以需稍微更改一下`nginx.conf`的配置：

```
sever{  
    listen    80;  
    # 这里从机器的本地IP改为虚拟IP  
 server_name 192.168.12.111;  
 # 如果这里配置的是域名，那么则将域名的映射配置改为虚拟IP  
}  
```

最后来实验一下效果：

![Nginx](https://static.xlc520.tk/blogImage/640-1674181929662-13.png)Nginx宕机

> ❝
>
> 在上述过程中，首先分别启动了`keepalived、nginx`服务，然后通过手动停止`nginx`的方式模拟了`Nginx`宕机情况，过了片刻后再次查询后台进程，我们会发现`nginx`依旧存活。
>
> ❞

从这个过程中不难发现，`keepalived`已经为我们实现了`Nginx`宕机后自动重启的功能，那么接着再模拟一下服务器出现故障时的情况：

![Nginx](https://static.xlc520.tk/blogImage/640-1674181929662-14.png)服务器故障

> ❝
>
> 在上述过程中，我们通过手动关闭`keepalived`服务模拟了机器断电、硬件损坏等情况（因为机器断电等情况=主机中的`keepalived`进程消失），然后再次查询了一下本机的`IP`信息，很明显会看到`VIP`消失了！
>
> ❞

现在再切换到另外一台机器：`192.168.12.130`来看看情况：

![Nginx](https://static.xlc520.tk/blogImage/640-1674181929662-15.png)130的IP情况

> ❝
>
> 此刻我们会发现，在主机`192.168.12.129`宕机后，VIP自动从主机飘移到了从机`192.168.12.130`上，而此时客户端的请求就最终会来到`130`这台机器的`Nginx`上。
>
> ❞

**「「最终，利用`Keepalived`对`Nginx`做了主从热备之后，无论是遇到线上宕机还是机房断电等各类故障时，都能够确保应用系统能够为用户提供`7x24`小时服务。」」**

## 十四、Nginx性能优化

到这里文章的篇幅较长了，最后再来聊一下关于`Nginx`的性能优化，主要就简单说说收益最高的几个优化项，在这块就不再展开叙述了，毕竟影响性能都有多方面原因导致的，比如网络、服务器硬件、操作系统、后端服务、程序自身、数据库服务等。

#### 优化一：打开长连接配置

通常Nginx作为代理服务，负责分发客户端的请求，那么建议开启`HTTP`长连接，用户减少握手的次数，降低服务器损耗，具体如下：

```
upstream xxx {  
    # 长连接数  
    keepalive 32;  
    # 每个长连接提供的最大请求数  
    keepalived_requests 100;  
    # 每个长连接没有新的请求时，保持的最长时间  
    keepalive_timeout 60s;  
}  
```

#### 优化二、开启零拷贝技术

零拷贝这个概念，在大多数性能较为不错的中间件中都有出现，例如`Kafka、Netty`等，而`Nginx`中也可以配置数据零拷贝技术，如下：

```
sendfile on; # 开启零拷贝机制  
```

零拷贝读取机制与传统资源读取机制的区别：

- **「传统方式：」** 硬件-->内核-->用户空间-->程序空间-->程序内核空间-->网络套接字
- **「零拷贝方式：」** 硬件-->内核-->程序内核空间-->网络套接字

从上述这个过程对比，很轻易就能看出两者之间的性能区别。

#### 优化三、开启无延迟或多包共发机制

在`Nginx`中有两个较为关键的性能参数，即`tcp_nodelay、tcp_nopush`，开启方式如下：

```
tcp_nodelay on;  
tcp_nopush on;  
```

`TCP/IP`协议中默认是采用了Nagle算法的，即在网络数据传输过程中，每个数据报文并不会立马发送出去，而是会等待一段时间，将后面的几个数据包一起组合成一个数据报文发送，但这个算法虽然提高了网络吞吐量，但是实时性却降低了。

> ❝
>
> 因此你的项目属于交互性很强的应用，那么可以手动开启`tcp_nodelay`配置，让应用程序向内核递交的每个数据包都会立即发送出去。但这样会产生大量的`TCP`报文头，增加很大的网络开销。
>
> ❞

相反，有些项目的业务对数据的实时性要求并不高，追求的则是更高的吞吐，那么则可以开启`tcp_nopush`配置项，这个配置就类似于“塞子”的意思，首先将连接塞住，使得数据先不发出去，等到拔去塞子后再发出去。设置该选项后，内核会尽量把小数据包拼接成一个大的数据包（一个`MTU`）再发送出去.

> ❝
>
> 当然若一定时间后（一般为`200ms`），内核仍然没有积累到一个`MTU`的量时，也必须发送现有的数据，否则会一直阻塞。
>
> ❞

`tcp_nodelay、tcp_nopush`两个参数是“互斥”的，如果追求响应速度的应用推荐开启`tcp_nodelay`参数，如`IM`、金融等类型的项目。如果追求吞吐量的应用则建议开启`tcp_nopush`参数，如调度系统、报表系统等。

> ❝
>
> 注意：①`tcp_nodelay`一般要建立在开启了长连接模式的情况下使用。②`tcp_nopush`参数是必须要开启`sendfile`参数才可使用的。
>
> ❞

#### 优化四、调整Worker工作进程

`Nginx`启动后默认只会开启一个`Worker`工作进程处理客户端请求，而我们可以根据机器的CPU核数开启对应数量的工作进程，以此来提升整体的并发量支持，如下：

```
# 自动根据CPU核心数调整Worker进程数量  
worker_processes auto;  
```

> ❝
>
> 工作进程的数量最高开到`8`个就OK了，`8`个之后就不会有再大的性能提升。
>
> ❞

同时也可以稍微调整一下每个工作进程能够打开的文件句柄数：

```
# 每个Worker能打开的文件描述符，最少调整至1W以上，负荷较高建议2-3W  
worker_rlimit_nofile 20000;  
```

> ❝
>
> 操作系统内核（`kernel`）都是利用文件描述符来访问文件，无论是打开、新建、读取、写入文件时，都需要使用文件描述符来指定待操作的文件，因此该值越大，代表一个进程能够操作的文件越多（但不能超出内核限制，最多建议`3.8W`左右为上限）。
>
> ❞

#### 优化五、开启CPU亲和机制

对于并发编程较为熟悉的伙伴都知道，因为进程/线程数往往都会远超出系统CPU的核心数，因为操作系统执行的原理本质上是采用时间片切换机制，也就是一个CPU核心会在多个进程之间不断频繁切换，造成很大的性能损耗。

而CPU亲和机制则是指将每个`Nginx`的工作进程，绑定在固定的CPU核心上，从而减小CPU切换带来的时间开销和资源损耗，开启方式如下：

```
worker_cpu_affinity auto;  
```

#### 优化六、开启epoll模型及调整并发连接数

在最开始就提到过：`Nginx、Redis`都是基于多路复用模型去实现的程序，但最初版的多路复用模型`select/poll`最大只能监听`1024`个连接，而`epoll`则属于`select/poll`接口的增强版，因此采用该模型能够大程度上提升单个`Worker`的性能，如下：

```
events {  
    # 使用epoll网络模型  
    use epoll;  
    # 调整每个Worker能够处理的连接数上限  
    worker_connections  10240;  
}  
```

> ❝
>
> 这里对于`select/poll/epoll`模型就不展开细说了，后面的IO模型文章中会详细剖析。
>
> ❞

## 十五、放在最后的结尾

至此，`Nginx`的大部分内容都已阐述完毕，关于最后一小节的性能优化内容，其实在前面就谈到的动静分离、分配缓冲区、资源缓存、防盗链、资源压缩等内容，也都可归纳为性能优化的方案。