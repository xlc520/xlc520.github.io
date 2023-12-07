---
author: xlc520
title: Docker时区
description: 
date: 2023-12-01
category: Linux
tag: Docker
article: true
timeline: true
icon: linux
---

# Docker时区

Docker时区问题通常是由于时区设置不正确导致的。当Docker容器启动时，它会继承宿主机的时区设置。如果宿主机的时区设置不正确，那么容器内的时间也会不正确。解决这个问题的方法通常如下面几种：

1. 在Dockerfile中设置时区环境变量。

   可以在Dockerfile中添加以下代码：ENV TZ=Asia/Shanghai。这样，在构建Docker镜像的时候，容器的时区就会被设置为上海时区。

2. 通过docker-compose中的配置来决定时区。注意字典和复制形式容易混合而出错。

3. 在启动Docker容器的时候指定时区参数。

4. 也可以用复制文件的方式解决时区问题。命令如下：

   - 

   ```sh
   docker cp /usr/share/zoneinfo/Asia/Shanghai 容器ID:/etc/localtime
   ```

下面详细讲一下不同版本的时区设置方式。

Docker的基础镜像设置大多是UTC，也就是标准的UTC 时间，所以要简单的调整一下，变成中国标准时间CST(China Standard Time = UTC+8:00)

**一.在构建镜像时修改时区**

在构建镜像时修改时区就没有必要在容器运行时进行修改了，比较简单。

**1.1 基于Debian的镜像**

直接添加环境变量即可,大部分docker镜像都是基于Debian

```yaml
#dockerfileENV TZ=Asia/Shanghai
```

#### 1.2 基于Alpine的镜像

与 Debian 镜像不同，此类镜像中并没有包含tzdata，所以只设置环境变量并不能达到我们想要的效果，因此需要安装tzdata

```yaml
#dockerfile
ENV TZ=Asia/Shanghai
RUN apk update \
    && apk add tzdata \
    && echo "${TZ}" > /etc/timezone \
    && ln -sf /usr/share/zoneinfo/${TZ} /etc/localtime \
    && rm /var/cache/apk/*
```

#### 1.3 基于ubuntu的镜像

与 Debian 镜像不同，此类镜像中并没有包含tzdata，所以只设置环境变量并不能达到我们想要的效果，因此需要安装tzdata

```yaml
ENV TZ=Asia/Shanghai 
RUN echo "${TZ}" > /etc/timezone \ 
&& ln -sf /usr/share/zoneinfo/${TZ} /etc/localtime \ 
&& apt update \ 
&& apt install -y tzdata \ 
&& rm -rf /var/lib/apt/lists/*
```

### 二.在启动容器时修改时区

仅对Debian有效，使用前请先查看镜像支持的环境变量

```yaml
docker run -e TZ=Asia/Shanghai .........
```

### 三. k8s中修改时区

和上面方法一样，配置环境变量

```yaml

apiVersion: apps/v1
kind: Deployment
spec:
  replicas: 1
  selector:
    matchLabels: 
      app: test
  template:
    metadata:
      labels: 
        app: test
    spec:  
      imagePullSecrets:
        - name: test     
      containers:
      - name: test
        image: ${HARBOR}/${HARBOR_LIB}/${APP_NAME}:${APP_TAG}
        imagePullPolicy: Always
        ports:
        - name: tcp-8080
          protocol: TCP
          containerPort: 8080
        env:
        - name: "TZ"    
          value: "Asia/Shanghai"

```