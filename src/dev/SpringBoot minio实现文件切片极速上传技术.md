---
title: SpringBoot MinIO实现文件切片极速上传技术
excerpt: SpringBoot MinIO实现文件切片极速上传技术
description: SpringBoot MinIO实现文件切片极速上传技术
date: 2024-07-10
category: Java
tag: Java
author: xlc520
article: true
timeline: true
icon: java
---

```component VPBanner
title: SpringBoot MinIO实现文件切片极速上传技术
content: SpringBoot MinIO实现文件切片极速上传技术
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: SpringBoot MinIO实现文件切片极速上传技术
    link: /SpringBoot minio实现文件切片极速上传技术/
```

# SpringBoot minio实现文件切片极速上传技术

## 一. 概述

**提示：请不要多个博客来回跳着看，此文章之详细绝无仅有，融合多家之长，如果遇见报错，请仔细捋一遍文章，不要忽略！我在写的时候因为许多文章不全面，来回跳遇见许多坑，希望大家可以避免，本文章中悉数做了标注提醒！！！
**

**官网地址：**

> [min.io/](https://link.juejin.cn?target=https%3A%2F%2Fmin.io%2F)

**文档地址：**

> [docs.min.io/](https://link.juejin.cn?target=https%3A%2F%2Fdocs.min.io%2F)

**该文档源码地址（免费资源）：**

> [download.csdn.net/download/we…](https://link.juejin.cn?target=https%3A%2F%2Fdownload.csdn.net%2Fdownload%2Fweixin_53742691%2F87856930)

> Minio是一款开源的对象存储服务器，它可以运行在多种操作系统上，包括Linux、Windows和MacOS等。它提供了一种简单、可扩展、高可用的对象存储解决方案，支持多种数据格式，包括对象、块和文件等。
>
> 以下是Minio的主要特点：
>
> 1. 简单易用：Minio的安装和配置非常简单，只需要下载并运行相应的二进制文件即可。它提供了一个Web UI,可以通过界面管理存储桶和对象。
> 2. 可扩展性：Minio可以轻松地扩展到多个节点，以提供高可用性和容错能力。它支持多种部署模式，包括单节点、主从复制和集群等。
> 3. 高可用性：Minio提供了多种机制来保证数据的可靠性和可用性，包括冗余备份、数据复制和故障转移等。
> 4. 安全性：Minio提供了多种安全机制来保护数据的机密性和完整性，包括SSL/TLS加密、访问控制和数据加密等。
> 5. 多语言支持：Minio支持多种编程语言，包括Java、Python、Ruby和Go等。
> 6. 社区支持：Minio是一个开源项目，拥有庞大的社区支持和贡献者。它的源代码可以在GitHub上获得，并且有一个活跃的邮件列表和论坛。
> 7. 对象存储：Minio的核心功能是对象存储。它允许用户上传和下载任意数量和大小的对象，并提供了多种API和SDK来访问这些对象。
> 8. 块存储：Minio还支持块存储，允许用户上传和下载大型文件(例如图像或视频)。块存储是一种快速、高效的方式来处理大型文件。
> 9. 文件存储：Minio还支持文件存储，允许用户上传和下载单个文件。文件存储是一种简单、快速的方式来处理小型文件。
>
> 总之，Minio是一款强大、灵活、可扩展的对象存储服务器，适用于各种应用场景，包括云存储、大数据存储和物联网等。

## 二. 应用场景

> MinIO是一种高性能、扩展性好的对象存储系统，它可以适用于许多应用场景，其中包括但不限于以下几种：
>
> 1. 大规模数据存储：由于MinIO使用分布式环境来存储数据，因此可以轻松扩展以满足需要管理大量数据的组织和企业的需求。
> 2. 图像和媒体存储：由于MinIO对原始二进制数据进行了优化，因此非常适合存储图像、音频和视频等媒体文件。它还支持WebP、JPEG和PNG等格式，可在多种设备和浏览器上工作。
> 3. 云原生应用程序：MinIO是一个云原生的对象存储系统，可以与Kubernetes、Docker
     Swarm和Mesosphere等容器编排工具无缝集成，可以很好地满足基于云的应用程序的需求。
> 4. 数据保护和灾难恢复：MinIO的多副本写入功能和内置的纠删码支持，使得数据备份和恢复变得简单而强大。
> 5. 分布式计算和机器学习：MinIO提供STS（S3 Select）和HDFS接口，支持在数据仓库中直接运行SQL查询和MapReduce等并行处理框架。这使得它成为用于Big
     Data、AI和ML等分布式计算任务的理想选择。
>
> 需要注意的是，以上列出的应用场景并不是MinIO所有可适用的场景。具体取决于每个使用情况的细节和需求。

## 三. Minio实现分片上传的主要步骤

> 使用SpringBoot和MinIO实现分片上传、秒传、续传主要包含以下几个步骤：
>
> 1. 前端选择文件并对其进行切割。可以使用JavaScript等前端技术将文件切成多个片段，并为每个片段生成唯一标识。
> 2. 将每个分片上传到MinIO对象存储。调用MinIO的Java SDK将每个分片上传到MinIO中，每个分片的KEY名称包含基础名称和片段ID。
> 3. 将所有分片合并成最终文件。在前端完成所有分片的上传之后，在后台开发一个接口，按照唯一标识将所有分片合并成最终文件。合并过程可以在应用服务器上完成，也可以使用MinIO
     Object Storage本身的合并功能完成。
> 4. 实现秒传：在前端上传分片之前，通过请求后台接口来根据文件名称和文件MD5值判断该文件是否已经存在，如果存在则可以直接返回文件URL，即可实现秒传。
> 5. 实现续传：在前端上传分片时出现了网络问题或客户端故障导致文件上传被中断，这时候只需记录已上传的分片序列号和状态标志，从下一个分片重新开始上传即可。
> 6. 处理错误和异常：在文件上传过程中可能会遇到各种问题，比如服务故障、网络中断、客户端处理超时等。因此需要加入错误和异常处理，保证整个上传过程顺利进行。
>
> 总体而言，使用SpringBoot和MinIO实现分片上传、秒传、续传的难度不算大，可以根据上述步骤进行开发和实现。

## 四. Centos7安装Minio

### 创建目标文件夹

```shell
mkdir minio
```

![image-20230602135307138](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/60b5bfabdc374010ae78417804fa6838tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

### 使用docker查看目标镜像状况

> 大家需要注意，此处我们首先需要安装docker，对于相关安装教程，大家可以查看我之前的文章，按部就班就可以，此处不再赘述！！！

```shell
docker search minio
```

![image-20230602135607197](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/5938f976031043bfb5b9abb2a9ef9f69tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

### 使用docker拉去镜像

```shell
docker pull minio/minio
```

![image-20230602135831281](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/c27f66a70a034682a1974f428444c260tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

### 查看镜像是否拉取成功

```shell
docker images
```

![image-20230602135955611](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/92c3cde36c504ac298d810977af035bctplv-k3u1fbpfcp-jj-mark3024000q75.webp)

### 启动Minio容器

```shell
docker run -p 9000:9000 -p 9090:9090      --net=host      --name minio      -d --restart=always      -e "MINIO_ACCESS_KEY=IT@WangHui"      -e "MINIO_SECRET_KEY=IT@WangHui"            minio/minio server      /data --console-address ":9000" -address ":9090"
```

![image-20230602190132177](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/9bd0755f871e4d12852e3965a476bf2ftplv-k3u1fbpfcp-jj-mark3024000q75.webp)

注意一下，对于密码强度是有要求的，不然报错

![image-20230602141629246](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/e387b021181641368f92e1a106047e44tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

> 这是一个运行 MinIO 容器的 Docker 命令，具体参数解释如下：
>
> - `-p`: 映射容器内部的端口到宿主机上。其中 `9000` 和 `9090` 分别映射到宿主机的 `9000` 和 `9090` 端口上。
> - `--net=host`: 将容器加入到主机网络中，共享宿主机的 IP 地址。
> - `--name minio`: 指定容器的名称为 `minio`。
> - `--restart=always`: 设置容器在退出后自动重新启动。
> - `-e`: 设置环境变量。这里设置了两个环境变量：`MINIO_ACCESS_KEY` 和 `MINIO_SECRET_KEY`,值分别为 `IT@WangHui`
    和 `IT@WangHui`。
> - `--mount`: 将容器内部的目录挂载到宿主机上。这里将容器内的 `/data` 目录挂载到了宿主机的 `/data` 目录上。
> - `--console-address`: 指定容器的控制台地址。这里设置为 `:9000`,表示可以通过宿主机上的 `9000` 端口访问容器的控制台。
> - `-address`: 指定容器的网络地址。这里设置为 `:9090`,表示可以通过宿主机上的 `9090` 端口访问容器的服务。
>
> **提示：页面访问9000，代码里面9090**
>
> **提示：页面访问9000，代码里面9090**
>
> **提示：页面访问9000，代码里面9090**

**报错警告**

![image-20230602141205823](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/362f52869314435aad7e31c70d5c6eb2tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

> 原因：
>
> 主要是因为在启动docker容器的时候或做docker配置的时候，还对防火墙设置重新启动等配置，这样会清除docker的相关配置，导致在查询防火墙规则的时候显示不到docker的链。iptables
> -L查询iptables链。
>
> 解决：
>
> 是由于firewalld重启导致，而docker重启又会将其注册iptables链找回来。
>
> 然后删除刚才启动失败的容器，不然会继续报错容器已存在

```shell
systemctl restart docker #重启docker
docker ps -a #查看运行容器
docker rm -f minio #根据容器名删除容器（自己注意辨别自己的）
```

![image-20230602141858749](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/c61c6f3666fb479799a20ca22f003a4ctplv-k3u1fbpfcp-jj-mark3024000q75.webp)

当启动后在浏览器访问`http://localhost:9000`就可以访问minio的图形化界面了，如图所示：

![image-20230602145737224](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/0803a51866a749cca92286a566a35cc7tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

**用户名密码就是启动参数里面的数据**

如果访问失败，那就是防火墙问题或者是启动参数最后两项没有添加，再不会有其他的，除非容器没有启动成功

查看放行端口可以使用如下命令

```shell
firewall-cmd --list-ports
```

> 要放行CentOS 7上的9000端口和9090端口，您可以按照以下步骤操作：
>
> 1. 检查防火墙状态
>
> 使用以下命令检查防火墙状态：
>
> ```shell
> systemctl status firewalld
> ```
>
> 如果防火墙已停止，则启动它：
>
> ```shell
> systemctl start firewalld
> ```
>
> 1. 允许9000端口通过防火墙
>
> 使用以下命令允许TCP流量通过9000端口：
>
> ```shell
> firewall-cmd --zone=public --add-port=9000/tcp --permanent
> firewall-cmd --zone=public --add-port=9090/tcp --permanent
> ```
>
> 这将向防火墙添加一个规则，以允许TCP流量通过9000端口。要永久保存此更改，请运行以下命令：
>
> ```shell
> firewall-cmd --reload
> ```
>
> 1. 重新启动防火墙服务shell
>
> 使用以下命令重新启动防火墙服务：
>
> ```shell
> systemctl restart firewalld
> ```
>
> 现在，您已经成功地放行了CentOS 7上的9000和9090端口。

## 五. 搭建springboot 环境

**此处，部分内容借鉴于前辈，受益匪浅，此处加入链接**

> [mp.weixin.qq.com/s/igXLHdXN3…](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FigXLHdXN3g3kg7ZMvbpxag)

### 代码结构

![在这里插入图片描述](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/b968c2dc99a64109ada312375a96b77ctplv-k3u1fbpfcp-jj-mark3024000q75.webp)

### 引入项目依赖

```xml
<!-- 操作minio的java客户端-->
<dependency>
    <groupId>io.minio</groupId>
    <artifactId>minio</artifactId>
    <version>8.5.2</version>
</dependency>
        <!-- 操作minio的java客户端-->
<dependency>
<groupId>io.minio</groupId>
<artifactId>minio</artifactId>
<version>8.2.1</version>
</dependency>
        <!--        jwt鉴权相应依赖-->
<dependency>
<groupId>ch.qos.logback</groupId>
<artifactId>logback-classic</artifactId>
<version>1.2.3</version>
</dependency>
<dependency>
<groupId>io.jsonwebtoken</groupId>
<artifactId>jjwt-jackson</artifactId>
<version>0.11.2</version>
</dependency>
```

### 创建容器桶

![image-20230602190714793](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/924a69e9d0284f659af0256dbaf348a3tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

![image-20230602190746796](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/3204f163d860402a8fdcad5695d256e5tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

### 获取API访问凭证

![image-20230602190838023](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/cbdbc6c08f5047739ddc6f50b5038b57tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

![image-20230602190920343](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/57ed1e61729948faaacd7416a7089c17tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

### 编写配置文件

```yaml
yaml复制代码server:
  port: 8080
spring:
  servlet:
    multipart:
      max-file-size: 10MB
      max-request-size: 10MB
  #minio配置
  minio:
    access-key: dAMaxkWaXUD1CV1JHbqw
    secret-key: AXt3SD0JFkDENFbMeJKOOQb5wj8KvabZWu33Rs84
    url: http://192.168.18.14:9090  #访问地址
    bucket-name: wanghui
```

> 首先是服务器的配置：
>
> - 端口号为8080,用于监听请求。
> - 使用了一个Servlet来处理multipart/form-data类型的请求。
> - 在接收到multipart/form-data类型的请求时，会将上传的文件大小限制在10MB以内，并将请求大小限制在10MB以内。
>
> 接下来是minio的配置：
>
> - access-key和secret-key是访问minio服务的凭证，需要根据实际情况进行填写。
> - url是minio服务的地址，需要根据实际情况进行填写。
> - bucket-name是存储文件的桶名，需要根据实际情况进行填写。

### http请求状态

```java
package com.xiaohui.utils;

/**
 * @Description http请求状态
 */
public class HttpStatus
{
    /**
     * 操作成功
     */
    public static final int SUCCESS = 200;

    /**
     * 对象创建成功
     */
    public static final int CREATED = 201;

    /**
     * 请求已经被接受
     */
    public static final int ACCEPTED = 202;

    /**
     * 操作已经执行成功，但是没有返回数据
     */
    public static final int NO_CONTENT = 204;

    /**
     * 资源已被移除
     */
    public static final int MOVED_PERM = 301;

    /**
     * 重定向
     */
    public static final int SEE_OTHER = 303;

    /**
     * 资源没有被修改
     */
    public static final int NOT_MODIFIED = 304;

    /**
     * 参数列表错误（缺少，格式不匹配）
     */
    public static final int BAD_REQUEST = 400;

    /**
     * 未授权
     */
    public static final int UNAUTHORIZED = 401;

    /**
     * 访问受限，授权过期
     */
    public static final int FORBIDDEN = 403;

    /**
     * 资源，服务未找到
     */
    public static final int NOT_FOUND = 404;

    /**
     * 不允许的http方法
     */
    public static final int BAD_METHOD = 405;

    /**
     * 资源冲突，或者资源被锁
     */
    public static final int CONFLICT = 409;

    /**
     * 不支持的数据，媒体类型
     */
    public static final int UNSUPPORTED_TYPE = 415;

    /**
     * 系统内部错误
     */
    public static final int ERROR = 500;

    /**
     * 接口未实现
     */
    public static final int NOT_IMPLEMENTED = 501;

    /**
     * 系统警告消息
     */
    public static final int WARN = 601;
}
```

### 通用常量信息

```java
package com.xiaohui.utils;

import io.jsonwebtoken.Claims;

/**
 * @Description 通用常量信息
 */
public class Constants
{
    /**
     * UTF-8 字符集
     */
    public static final String UTF8 = "UTF-8";

    /**
     * GBK 字符集
     */
    public static final String GBK = "GBK";

    /**
     * www主域
     */
    public static final String WWW = "www.";

    /**
     * http请求
     */
    public static final String HTTP = "http://";

    /**
     * https请求
     */
    public static final String HTTPS = "https://";

    /**
     * 通用成功标识
     */
    public static final String SUCCESS = "0";

    /**
     * 通用失败标识
     */
    public static final String FAIL = "1";

    /**
     * 登录成功
     */
    public static final String LOGIN_SUCCESS = "Success";

    /**
     * 注销
     */
    public static final String LOGOUT = "Logout";

    /**
     * 注册
     */
    public static final String REGISTER = "Register";

    /**
     * 登录失败
     */
    public static final String LOGIN_FAIL = "Error";
 
    /**
     * 验证码有效期（分钟）
     */
    public static final Integer CAPTCHA_EXPIRATION = 2;

    /**
     * 令牌
     */
    public static final String TOKEN = "token";

    /**
     * 令牌前缀
     */
    public static final String TOKEN_PREFIX = "Bearer ";

    /**
     * 令牌前缀
     */
    public static final String LOGIN_USER_KEY = "login_user_key";

    /**
     * 用户ID
     */
    public static final String JWT_USERID = "userid";

    /**
     * 用户名称
     */
    public static final String JWT_USERNAME = Claims.SUBJECT;

    /**
     * 用户头像
     */
    public static final String JWT_AVATAR = "avatar";

    /**
     * 创建时间
     */
    public static final String JWT_CREATED = "created";

    /**
     * 用户权限
     */
    public static final String JWT_AUTHORITIES = "authorities";

    /**
     * 资源映射路径 前缀
     */
    public static final String RESOURCE_PREFIX = "/profile";

    /**
     * RMI 远程方法调用
     */
    public static final String LOOKUP_RMI = "rmi:";

    /**
     * LDAP 远程方法调用
     */
    public static final String LOOKUP_LDAP = "ldap:";

    /**
     * LDAPS 远程方法调用
     */
    public static final String LOOKUP_LDAPS = "ldaps:";

    /**
     * 定时任务白名单配置（仅允许访问的包名，如其他需要可以自行添加）
     */
    public static final String[] JOB_WHITELIST_STR = { "com.ruoyi" };

    /**
     * 定时任务违规的字符
     */
    public static final String[] JOB_ERROR_STR = { "java.net.URL", "javax.naming.InitialContext", "org.yaml.snakeyaml",
            "org.springframework", "org.apache", "com.ruoyi.common.utils.file", "com.ruoyi.common.config" };
}
```

### 创建Minio的配置类

```java
package com.xiaohui.config;

import io.minio.MinioClient;
import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @Description minio配置
 */
@Data
@Configuration
@ConfigurationProperties(prefix = "spring.minio")
public class MinioConfig {
    private String accessKey;

    private String secretKey;

    private String url;

    private String bucketName;

    @Bean
    public MinioClient minioClient(){
        return MinioClient.builder()
                .endpoint(url)
                .credentials(accessKey,secretKey)
                .build();
    }
}
```

> 这段代码是Java中的一个配置类，用于配置与MinIO(一个对象存储服务)相关的属性。具体来说：
>
> 1. `@Configuration`注解表示这是一个配置类，用于将该类中定义的属性注入到其他组件中使用。
> 2. `@ConfigurationProperties`注解表示该类使用了`spring.minio.*`前缀的属性来配置Minio相关的属性。
> 3. `@Data`注解表示自动生成getter和setter方法，简化了代码编写。
> 4. `accessKey`和`secretKey`属性分别表示访问密钥和密钥值，用于连接到MinIO服务。
> 5. `url`属性表示MinIO服务的URL地址。
> 6. `bucketName`属性表示存储桶名称。
> 7. `@Bean`注解表示将`minioClient()`方法返回的对象注册为bean,以便在其他组件中使用。
> 8. `minioClient()`方法返回了一个`MinioClient`对象，用于连接到MinIO服务并操作存储桶。其中，`endpoint()`
     方法用于设置MinIO服务的URL地址，`credentials()`方法用于设置访问密钥和密钥值。

### 创建Minio的工具类

```java
package com.xiaohui.utils;


import com.xiaohui.config.MinioConfig;
import io.minio.*;
import io.minio.errors.*;
import io.minio.http.Method;
import lombok.SneakyThrows;
import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.time.ZonedDateTime;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

/**
 * @Description Minio工具类
 */
@Component
public class MinioUtils {

    @Autowired
    private MinioClient minioClient;

    @Autowired
    private MinioConfig configuration;

    /**
     * @param name 名字
     * @return boolean
     * @Description description: 判断bucket是否存在，不存在则创建
     */
    public boolean existBucket(String name) {
        boolean exists;
        try {
            exists = minioClient.bucketExists(BucketExistsArgs.builder().bucket(name).build());
            if (!exists) {
                minioClient.makeBucket(MakeBucketArgs.builder().bucket(name).build());
                exists = true;
            }
        } catch (Exception e) {
            e.printStackTrace();
            exists = false;
        }
        return exists;
    }

    /**
     * @param bucketName 存储bucket名称
     * @return {@link Boolean }
     * @Description 创建存储bucket
     */
    public Boolean makeBucket(String bucketName) {
        try {
            minioClient.makeBucket(MakeBucketArgs.builder()
                    .bucket(bucketName)
                    .build());
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    /**
     * @param bucketName 存储bucket名称
     * @return {@link Boolean }
     * @Description 删除存储bucket
     */
    public Boolean removeBucket(String bucketName) {
        try {
            minioClient.removeBucket(RemoveBucketArgs.builder()
                    .bucket(bucketName)
                    .build());
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    /**
     * @param fileName 文件名称
     * @param time     时间
     * @return {@link Map }
     * @Description 获取上传临时签名
     */
    @SneakyThrows
    public Map getPolicy(String fileName, ZonedDateTime time) {
        PostPolicy postPolicy = new PostPolicy(configuration.getBucketName(), time);
        postPolicy.addEqualsCondition("key", fileName);
        try {
            Map<String, String> map = minioClient.getPresignedPostFormData(postPolicy);
            HashMap<String, String> map1 = new HashMap<>();
            map.forEach((k, v) -> {
                map1.put(k.replaceAll("-", ""), v);
            });
            map1.put("host", configuration.getUrl() + "/" + configuration.getBucketName());
            return map1;
        } catch (ErrorResponseException e) {
            e.printStackTrace();
        } catch (InsufficientDataException e) {
            e.printStackTrace();
        } catch (InternalException e) {
            e.printStackTrace();
        } catch (InvalidKeyException e) {
            e.printStackTrace();
        } catch (InvalidResponseException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (ServerException e) {
            e.printStackTrace();
        } catch (XmlParserException e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * @param objectName 对象名称
     * @param method     方法
     * @param time       时间
     * @param timeUnit   时间单位
     * @return {@link String }
     * @Description 获取上传文件的url
     */
    public String getPolicyUrl(String objectName, Method method, int time, TimeUnit timeUnit) {
        try {
            return minioClient.getPresignedObjectUrl(GetPresignedObjectUrlArgs.builder()
                    .method(method)
                    .bucket(configuration.getBucketName())
                    .object(objectName)
                    .expiry(time, timeUnit).build());
        } catch (ErrorResponseException e) {
            e.printStackTrace();
        } catch (InsufficientDataException e) {
            e.printStackTrace();
        } catch (InternalException e) {
            e.printStackTrace();
        } catch (InvalidKeyException e) {
            e.printStackTrace();
        } catch (InvalidResponseException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (XmlParserException e) {
            e.printStackTrace();
        } catch (ServerException e) {
            e.printStackTrace();
        }
        return null;
    }


    /**
     * @param file     文件
     * @param fileName 文件名称
     * @Description 上传文件
     */
    public void upload(MultipartFile file, String fileName) {
        // 使用putObject上传一个文件到存储桶中。
        try {
            InputStream inputStream = file.getInputStream();
            minioClient.putObject(PutObjectArgs.builder()
                    .bucket(configuration.getBucketName())
                    .object(fileName)
                    .stream(inputStream, file.getSize(), -1)
                    .contentType(file.getContentType())
                    .build());
        } catch (ErrorResponseException e) {
            e.printStackTrace();
        } catch (InsufficientDataException e) {
            e.printStackTrace();
        } catch (InternalException e) {
            e.printStackTrace();
        } catch (InvalidKeyException e) {
            e.printStackTrace();
        } catch (InvalidResponseException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (ServerException e) {
            e.printStackTrace();
        } catch (XmlParserException e) {
            e.printStackTrace();
        }
    }

    /**
     * @param objectName 对象名称
     * @param time       时间
     * @param timeUnit   时间单位
     * @return {@link String }
     * @Description 根据filename获取文件访问地址
     */
    public String getUrl(String objectName, int time, TimeUnit timeUnit) {
        String url = null;
        try {
            url = minioClient.getPresignedObjectUrl(GetPresignedObjectUrlArgs.builder()
                    .method(Method.GET)
                    .bucket(configuration.getBucketName())
                    .object(objectName)
                    .expiry(time, timeUnit).build());
        } catch (ErrorResponseException e) {
            e.printStackTrace();
        } catch (InsufficientDataException e) {
            e.printStackTrace();
        } catch (InternalException e) {
            e.printStackTrace();
        } catch (InvalidKeyException e) {
            e.printStackTrace();
        } catch (InvalidResponseException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (XmlParserException e) {
            e.printStackTrace();
        } catch (ServerException e) {
            e.printStackTrace();
        }
        return url;
    }

    /**
     * @param fileName
     * @return {@link ResponseEntity }<{@link byte[] }>
     * @Description description: 下载文件
     */
    public ResponseEntity<byte[]> download(String fileName) {
        ResponseEntity<byte[]> responseEntity = null;
        InputStream in = null;
        ByteArrayOutputStream out = null;
        try {
            in = minioClient.getObject(GetObjectArgs.builder().bucket(configuration.getBucketName()).object(fileName).build());
            out = new ByteArrayOutputStream();
            IOUtils.copy(in, out);
            //封装返回值
            byte[] bytes = out.toByteArray();
            HttpHeaders headers = new HttpHeaders();
            try {
                headers.add("Content-Disposition", "attachment;filename=" + URLEncoder.encode(fileName, "UTF-8"));
            } catch (UnsupportedEncodingException e) {
                e.printStackTrace();
            }
            headers.setContentLength(bytes.length);
            headers.setContentType(MediaType.APPLICATION_OCTET_STREAM);
            headers.setAccessControlExposeHeaders(Arrays.asList("*"));
            responseEntity = new ResponseEntity<byte[]>(bytes, headers, HttpStatus.SUCCESS);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                if (in != null) {
                    try {
                        in.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
                if (out != null) {
                    out.close();
                }
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return responseEntity;
    }

    /**
     * @param objectFile 对象文件
     * @return {@link String }
     * @Description 根据文件名和桶获取文件路径
     */
    public String getFileUrl(String objectFile) {
        try {

            return minioClient.getPresignedObjectUrl(GetPresignedObjectUrlArgs.builder()
                    .method(Method.GET)
                    .bucket(configuration.getBucketName())
                    .object(objectFile)
                    .build()
            );
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }


}
```

> 该代码是一个工具类，用于使用阿里云的对象存储服务(OSS)进行文件上传和下载。具体功能如下：
>
> 1. `getPolicy(String fileName, ZonedDateTime time)`:根据文件名和时间戳获取上传临时签名。
> 2. `getPolicyUrl(String objectName, Method method, int time, TimeUnit timeUnit)`:获取上传文件的url。
> 3. `upload(MultipartFile file, String fileName)`:将文件上传到OSS中。
> 4. `getUrl(String objectName, int time, TimeUnit timeUnit)`:获取文件的下载url。
> 5. 代码中使用了枚举类型来定义不同的上传和下载方法。
> 6. 使用了注解`@Autowired`来自动注入MinioClient对象。
> 7. 该工具类没有提供异常处理机制，需要根据实际情况进行补充。

### 创建Ajax请求工具类

```java
/**
 * @Description ajax结果
 */
public class AjaxResult extends HashMap<String, Object>
{
    private static final long serialVersionUID = 1L;

    /** 状态码 */
    public static final String CODE_TAG = "code";

    /** 返回内容 */
    public static final String MSG_TAG = "msg";

    /** 数据对象 */
    public static final String DATA_TAG = "data";

    /**
     * 初始化一个新创建的 AjaxResult 对象，使其表示一个空消息。
     */
    public AjaxResult()
    {
    }

    /**
     * 初始化一个新创建的 AjaxResult 对象
     *
     * @param code 状态码
     * @param msg 返回内容
     */
    public AjaxResult(int code, String msg)
    {
        super.put(CODE_TAG, code);
        super.put(MSG_TAG, msg);
    }

    /**
     * 初始化一个新创建的 AjaxResult 对象
     *
     * @param code 状态码
     * @param msg 返回内容
     * @param data 数据对象
     */
    public AjaxResult(int code, String msg, Object data)
    {
        super.put(CODE_TAG, code);
        super.put(MSG_TAG, msg);
        if (data!=null)
        {
            super.put(DATA_TAG, data);
        }
    }

    /**
     * 返回成功消息
     *
     * @return 成功消息
     */
    public static AjaxResult success()
    {
        return AjaxResult.success("操作成功");
    }

    /**
     * 返回成功数据
     *
     * @return 成功消息
     */
    public static AjaxResult success(Object data)
    {
        return AjaxResult.success("操作成功", data);
    }

    /**
     * 返回成功消息
     *
     * @param msg 返回内容
     * @return 成功消息
     */
    public static AjaxResult success(String msg)
    {
        return AjaxResult.success(msg, null);
    }

    /**
     * 返回成功消息
     *
     * @param msg 返回内容
     * @param data 数据对象
     * @return 成功消息
     */
    public static AjaxResult success(String msg, Object data)
    {
        return new AjaxResult(HttpStatus.SUCCESS, msg, data);
    }

    /**
     * 返回警告消息
     *
     * @param msg 返回内容
     * @return 警告消息
     */
    public static AjaxResult warn(String msg)
    {
        return AjaxResult.warn(msg, null);
    }

    /**
     * 返回警告消息
     *
     * @param msg 返回内容
     * @param data 数据对象
     * @return 警告消息
     */
    public static AjaxResult warn(String msg, Object data)
    {
        return new AjaxResult(HttpStatus.WARN, msg, data);
    }

    /**
     * 返回错误消息
     *
     * @return 错误消息
     */
    public static AjaxResult error()
    {
        return AjaxResult.error("操作失败");
    }

    /**
     * 返回错误消息
     *
     * @param msg 返回内容
     * @return 错误消息
     */
    public static AjaxResult error(String msg)
    {
        return AjaxResult.error(msg, null);
    }

    /**
     * 返回错误消息
     *
     * @param msg 返回内容
     * @param data 数据对象
     * @return 错误消息
     */
    public static AjaxResult error(String msg, Object data)
    {
        return new AjaxResult(HttpStatus.ERROR, msg, data);
    }

    /**
     * 返回错误消息
     *
     * @param code 状态码
     * @param msg 返回内容
     * @return 错误消息
     */
    public static AjaxResult error(int code, String msg)
    {
        return new AjaxResult(code, msg, null);
    }

    /**
     * 方便链式调用
     *
     * @param key 键
     * @param value 值
     * @return 数据对象
     */
    @Override
    public AjaxResult put(String key, Object value)
    {
        super.put(key, value);
        return this;
    }
}
```

### 创建Minio文件操作接口层

```java
package com.xiaohui.controller;

import com.xiaohui.utils.AjaxResult;
import com.xiaohui.utils.MinioUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;

/**
 * @Description minio文件上传控制器
 * @Author IT小辉同学
 * @Date 2023/06/02
 */
@CrossOrigin
@RestController
@RequestMapping("/api")
public class MinioFileUploadController {
    @Autowired
    private MinioUtils minioUtils;

    /**
     * @param file     文件
     * @param fileName 文件名称
     * @return {@link AjaxResult }
     * @Description 上传文件
     * @Author IT小辉同学
     * @Date 2023/06/02
     */
    @GetMapping("/upload")
    public AjaxResult uploadFile(@RequestParam("file") MultipartFile file, String fileName) {

        minioUtils.upload(file, fileName);
        return AjaxResult.success("上传成功");

    }

    /**
     * @param fileName 文件名称
     * @return {@link ResponseEntity }
     * @Description dowload文件
     * @Author IT小辉同学
     * @Date 2023/06/02
     */
    @GetMapping("/dowload")
    public ResponseEntity dowloadFile(@RequestParam("fileName") String fileName) {
        return minioUtils.download(fileName);
    }

    /**
     * @param fileName 文件名称
     * @return {@link AjaxResult }
     * @Description 得到文件url
     * @Author IT小辉同学
     * @Date 2023/06/02
     */
    @GetMapping("/getUrl")
    public AjaxResult getFileUrl(@RequestParam("fileName") String fileName){
        HashMap map=new HashMap();
        map.put("FileUrl",minioUtils.getFileUrl(fileName));
        return AjaxResult.success(map);
    }
}
```

## 六. 功能测试

### Minio大文件上传

![image-20230602194324777](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/e1a6c97ade9743c28de3413cd32c9f63tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

![image-20230602194339597](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/d5e43c9b6542440fb093cbd49020e98dtplv-k3u1fbpfcp-jj-mark3024000q75.webp)

### Minio大文件地址

![image-20230602194437754](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/389c077a08844bdda2a04144b0230ccetplv-k3u1fbpfcp-jj-mark3024000q75.webp)






<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
