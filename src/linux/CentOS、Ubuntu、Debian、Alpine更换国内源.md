---
author: xlc520
title: CentOS、Ubuntu、Debian、Alpine更换国内源
excerpt: 
description: 
date: 2023-12-15
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
---

# CentOS、Ubuntu、Debian、Alpine 更换国内源

国内的源通常是由国内的各大云服务商提供的，这些云服务商在本地都有自己的加速服务器和缓存系统，可以更快地下载镜像。另外，由于地理位置的原因，国内的源通常比国外的源更稳定，也更容易受到国内用户的访问。因此，更换国内源可以提高开发效率和稳定性，减少不必要的网络问题。

## **CentOS 换源**

```sh
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
```

或者

```sh
curl -o /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
```

## **Debian 换源**

### debian-9 归档源

```sh
echo "deb http://archive.debian.org/debian/ stretch main contrib non-free" > /etc/apt/sources.list \  && echo "deb http://archive.debian.org/debian/ stretch-proposed-updates main contrib non-free" >> /etc/apt/sources.list \  && echo "deb http://archive.debian.org/debian-security stretch/updates main contrib non-free" >> /etc/apt/sources.list
```

### 阿里云镜像站

```sh
sed -i "s@http://\(deb\|security\).debian.org@http://mirrors.aliyun.com@g" /etc/apt/sources.list
```

### 腾讯云镜像站

```sh
sed -i "s@http://\(deb\|security\).debian.org@http://mirrors.tencent.com@g" /etc/apt/sources.list
```

### 网易镜像站

```sh
sed -i "s@http://\(deb\|security\).debian.org@http://mirrors.163.com@g" /etc/apt/sources.list
```

### 华为镜像站

```sh
sed -i "s@http://\(deb\|security\).debian.org@http://mirrors.huaweicloud.com@g" /etc/apt/sources.list
```

### 清华大学镜像站

```sh
sed -i "s@http://\(deb\|security\).debian.org@http://mirrors.tuna.tsinghua.edu.cn@g" /etc/apt/sources.list
```

### 中科大镜像站

```sh
sed -i "s@http://\(deb\|security\).debian.org@http://mirrors.ustc.edu.cn@g" /etc/apt/sources.list
```

## **Ubuntu 换源**

### 阿里云镜像站

```sh
sed -i "s@\(archive\|security\).ubuntu.com@mirrors.aliyun.com@g" /etc/apt/sources.list
```

### 腾讯云镜像站

```sh
sed -i "s@\(archive\|security\).ubuntu.com@mirrors.tencent.com@g" /etc/apt/sources.list
```

### 网易镜像站

```sh
sed -i "s@\(archive\|security\).ubuntu.com@mirrors.163.com@g" /etc/apt/sources.list
```

### 华为镜像站

```sh
sed -i "s@\(archive\|security\).ubuntu.com@mirrors.huaweicloud.com@g" /etc/apt/sources.list
```

### 清华大学镜像站

```sh
sed -i "s@\(archive\|security\).ubuntu.com@mirrors.tuna.tsinghua.edu.cn@g" /etc/apt/sources.list
```

### 中科大镜像站

```sh
sed -i "s@\(archive\|security\).ubuntu.com@mirrors.ustc.edu.cn@g" /etc/apt/sources.list
```

## **Alpine linux 换源**

### 阿里云镜像站

```sh
sed -i "s@dl-cdn.alpinelinux.org@mirrors.aliyun.com@g" /etc/apk/repositories
```

### 华为镜像站

```sh
sed -i "s@dl-cdn.alpinelinux.org/@repo.huaweicloud.com/@g" /etc/apk/repositories
```

## **Pip 换源**

### 阿里云

```sh
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/
```

### 中国科技大学

```sh
pip config set global.index-url https://pypi.mirrors.ustc.edu.cn/simple/
```

### 豆瓣(douban)

```sh
pip config set global.index-url https://pypi.douban.com/simple/
```

### 清华大学

```sh
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple/
```

### 中国科学技术大学

```sh
pip config set global.index-url https://pypi.mirrors.ustc.edu.cn/simple/
```

### 华为

```sh
pip config set global.index-url https://repo.huaweicloud.com/repository/pypi/simple
```

### Conda 添加源

```sh
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/ \ && conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/ \ && conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/ \ && conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/linux-64/
```

## **Npm 换源**

### 淘宝

```sh
npm config set registry http://registry.npmmirror.com
```

### 华为

```sh
npm config set registry https://repo.huaweicloud.com/repository/npm/
```

### cnpmjs

```sh
npm config set registry http://r.cnpmjs.org
```

## **GO 换源**

### 阿里云

```sh
go env -w GO111MODULE=on GOPROXY=https://mirrors.aliyun.com/goproxy/,direct GONOSUMDB=*
```

### 七牛

```sh
go env -w GO111MODULE=on GOPROXY=https://goproxy.cn,direct GONOSUMDB=*
```

### 华为

```sh
go env -w GO111MODULE=on GOPROXY=https://repo.huaweicloud.com/repository/goproxy/ GONOSUMDB=*
```

### Dockerfile 非交互，修改时区

```sh
ENV TIME_ZONE Asia/ShanghaiRUN apt-get update \&& DEBIAN_FRONTEND=noninteractive apt-get install -y tzdata \    && ln -snf /usr/share/zoneinfo/$TIME_ZONE /etc/localtime && echo $TIME_ZONE > /etc/timezone \    && dpkg-reconfigure -f noninteractive tzdata
```

### Github 访问加速，URL 前缀添加

```sh
https://ghproxy.com/
```
