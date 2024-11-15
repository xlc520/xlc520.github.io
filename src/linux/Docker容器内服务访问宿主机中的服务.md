---
title: Docker容器内服务访问宿主机中的服务
excerpt:
description: Docker容器内服务访问宿主机中的服务
date: 2024-11-04
category: Linux
tag: Linux
author: xlc520
article: true
timeline: true
icon: linux
---

```component VPBanner
title: Docker容器内服务访问宿主机中的服务
content: Docker容器内服务访问宿主机中的服务
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: Docker容器内服务访问宿主机中的服务
    link: /linux/Docker容器内服务访问宿主机中的服务
```

# Docker容器内服务访问宿主机中的服务

假设 docker 中的某服务要访问宿主机的 mysql 时：

## 第一种：通过 docker0 的 IP 地址进行访问

1. 先在宿主机上查看 `docker0` 对应的 `inet` IP 地址

```shell
# 如果是 CentOS 或者 Ubuntu
ifconfig 
# 或者使用
ip addr show docker0
# 假设查看的 docker0 的 ip 地址为：172.18.0.1
```

1. 修改 mysql 的配置文件，保证 mysql 可以被任何 ip 访问，**但是一定不能开放 3306 端口，不然外网就可以直接访问 mysql 了**，如果不开放允许任何 ip 访问，那么则必须要开放允许 docker 服务容器的 IP 能够访问。（注意这里的 IP 是需要连接宿主机 mysql docker 容器的 IP 不是 docker0 的 IP）

```properties
[mysqld]
bind-address = 0.0.0.0
```

1. docker 容器中的服务连接 mysql 时，直接采用 `docker0` 的 IP 地址进行访问即可。即 `172.18.0.1`

## 第二种：将容器的网络类型改成 host （宿主网络：即与宿主机共用网络）

```shell
# 比如容器启动时，增加 --net=host 参数
# 在这里就没有必要去指定映射端口，因为容器中暴露出去的端口等同于宿主机暴露的端口
docker run -it --net=host {image} sh

# 测试：
ping localhost
```

## 第三种：增加 `host.docker.internal` 到 `hosts` 文件

```shell
# host-gateway 其实是个特殊的 CDN，在运行时会被替换为真实的宿主网关 IP 地址
# 通过查看 `cat /etc/hosts` 即可得知已经被替换成 docker0 的网管 IP 地址
# 创建容器的时候添加 `--add-host=host.docker.internal:host-gateway`
# 需要注意的是：
# 对于 mac 上的 docker 设置还有略微不一样
# mac docker 版本在 v17.12-v18.02 需要将 host.docker.internal 替换成 docker.for.mac.host.internal
# mac docker 版本在 v17.06-v18.11 需要替换成 docker.for.mac.localhost
docker run -it --add-host=host.docker.internal:host-gateway {image} sh

# 进入容器中，可以通过 ping 进行测试：
ping host.docker.internal

# 比如在容器中连接宿主机中的 mysql 时，那么则需要设置为
host.docker.internal:3306
```




<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
