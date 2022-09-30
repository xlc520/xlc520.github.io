---
author: xlc520
title: Linux新开机器配置
description: 
date: 2022-09-28
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
password: 
---

# Linux新开机器配置

## 1.更换yum/apt源

> **通知：CentOS 8操作系统版本结束了生命周期（EOL），Linux社区已不再维护该操作系统版本。建议您切换到Anolis或Alinux。如果您的业务过渡期仍需要使用CentOS 8系统中的一些安装包，请根据下文切换CentOS 8的源。**

### CentOS

#### 1. 备份

```
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
```

#### 2. 下载新的 CentOS-Base.repo 到 /etc/yum.repos.d/

##### centos8（centos8官方源已下线，建议切换centos-vault源）

```
wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo
```

或者

```
curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo
```

**CentOS 7**

```
wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
```

或者

```
curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
```

#### 3. 运行 `yum makecache` 生成缓存



### Ubuntu

因为Linux子系统的apt源使用的是官方源，需要连接到国外的服务器。所以安装一些软件时下载会很慢，我们可以改用国内的镜像apt源。国内的镜像源主要有：

可以直接使用 vim 对 /etc/apt/sources.list文件进行修改。

先进行一下备份。

```bash
mv /etc/apt/sources.list /etc/apt/sources.list.bak
```

然后

```bash
vim /etc/apt/sources.list
```

#### 阿里源ubuntu 20.04(focal)

```bash
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
# deb-src https://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb https://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
# deb-src https://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb https://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
# deb-src https://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
# deb https://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
# deb-src https://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
deb https://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
# deb-src https://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse

```

执行`apt-get update`更新索引

#### 华为云源ubuntu 20.04(focal)

1、备份配置文件：

sudo cp -a /etc/apt/sources.list /etc/apt/sources.list.bak

2、修改**sources.list**文件，将**http://archive.ubuntu.com**和**http://security.ubuntu.com**替换成**http://repo.huaweicloud.com**，可以参考如下命令：

sudo sed -i "s@http://.*archive.ubuntu.com@http://repo.huaweicloud.com@g" /etc/apt/sources.list
sudo sed -i "s@http://.*security.ubuntu.com@http://repo.huaweicloud.com@g" /etc/apt/sources.list

3、执行`apt-get update`更新索引



## **2.Docker安装**

一键安装命令：

```
curl -sSL https://get.daocloud.io/docker | sh
```



```bash
#升级yum
sudo yum update  

#卸载旧版本
sudo yum remove docker  docker-common docker-selinux docker-engine  

#安装依赖  
sudo yum install -y yum-utils device-mapper-persistent-data lvm2  

#设置源  
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo   

# 更新yum缓存
yum makecache fast

# 安装Docker
yum -y install docker-ce

# 启动
systemctl start docker

# 查看是否启动成功
docker info

# 开机自启
systemctl enable docker

# Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the d
systemctl restart docker  #重启一下就行

# 在下载镜像前，需要设置一下国内源，用来提高下载速度
sudo vim /etc/docker/daemon.json

# 配置
{  
    "registry-mirrors": ["https://d7grpode.mirror.aliyuncs.com"]  
}

# 重启
sudo systemctl restart docker
```

 卸载Docker

```
sudo apt-get remove docker docker-engine
```

卸载Docker后,/var/lib/docker/目录下会保留原Docker的镜像,网络,存储卷等文件. 如果需要全新安装Docker,需要删除/var/lib/docker/目录

```
rm -fr /var/lib/docker/
```