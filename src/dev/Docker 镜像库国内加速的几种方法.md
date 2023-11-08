---
author: xlc520
title: Docker 镜像库国内加速的几种方法
description: 
date: 2023-10-23
category: Java
tag: Java
article: true
timeline: true
icon: java
---



# Docker 镜像库国内加速的几种方法



## 概述

在国内，拉取 Docker 镜像速度慢/时不时断线/无账号导致限流等，比较痛苦😣. 这里提供加速/优化的几种方法。

梳理一下，会碰到以下情况：

1.国内下载速度慢/时不时断线：是因为网络被限制了。2.没有公共镜像库账号导致限流：是因为 Docker Hub 等主流镜像库，近年来纷纷开始对未登录的匿名用户进行限流，限制拉取的速度，以及一定时间内拉取的镜像数量。

为了解决以上问题，有这么几种方法：

针对**国内下载速度慢/时不时断线**, 可选方法如下：

1.配置国内可用/速度尚可的 Docker Registry Mirrors2.自建 Docker Registry Mirror/Proxy, 并配置为 Mirror3.Docker Daemon 配置 `proxies`

针对**没有公共镜像库账号导致限流**, 可选方法如下：

1.注册各个镜像库账号并 `docker login` 登录

具体方案如下。

## 具体方案

> 📝**Notes**:
>
> 这里以 Docker 举例说明。 Containerd/Podman/cri-o 等请举一反三。

1.配置国内可用/速度尚可的 Docker Registry Mirrors1.阿里云 Docker 加速：类似 `xxxxxx.mirror.aliyuncs.com` 的个人专属加速地址；2.DockerProxy 代理加速：`dockerproxy.com`3.百度云 Mirror: `mirror.baidubce.com`4....2.自建 Docker Registry Mirror/Proxy, 并配置为 Mirror1.这里使用 Cloudflare Worker - cloudflare-docker-proxy[1] 搭建3.Docker Daemon 配置 `proxies`, 具体包括：`http-proxy` `https-proxy` `no-proxy`4.注册各个镜像库账号并 `docker login` 登录

## 方案实施细节

### 配置国内可用的 Docker Registry Mirrors

随着时间的推移，国内可用的 Docker Registry Mirrors 会持续发生变化，因此，需要实时根据可用情况调整 Docker Registry Mirrors 配置。

截止 2023/9/5, 可用 Mirrors 列表如下：

1.阿里云 Docker 加速：类似 `xxxxxx.mirror.aliyuncs.com` 的个人专属加速地址；2.DockerProxy 代理加速：`dockerproxy.com`3.百度云 Mirror: `mirror.baidubce.com`4.DaoCloud: `docker.m.daocloud.io`5.南京大学：`docker.nju.edu.cn`6.上海交大：`docker.mirrors.sjtug.sjtu.edu.cn`

#### 测试国内 Docker Registry 可用性

可以自行测试验证，手动测试方法是拉取镜像，这里以测试 `dockerproxy.com` 为例：

- 

```
docker pull dockerproxy.com/library/nginx
```

在国内拉取成功则证明可用。

也可以直接查看 GitHub 仓库：docker-practice/docker-registry-cn-mirror-test[2] 的 Github Action 执行结果。如最近一次的执行结果为：



![图片](https://static.xlc520.tk/blogImage/640-1697803848284-0.png)docker-registry-cn-mirror-test result



#### 阿里云 Docker 加速服务申请

阿里云加速器（点击管理控制台 -> 登录账号 -> 右侧镜像工具 -> 镜像加速器 -> 复制加速器地址）[3]

截图如下：



![图片](https://static.xlc520.tk/blogImage/640-1698065215359-39.png)阿里云镜像加速器



#### 其他几个加速域名

1.DockerProxy 代理加速：`dockerproxy.com`

2.百度云 Mirror: `mirror.baidubce.com`

3.Daocloud: `docker.m.daocloud.io`

4.南京大学：`docker.nju.edu.cn`

5.上海交大：`docker.mirrors.sjtug.sjtu.edu.cn`

都是固定域名，直接配置即可。

#### 已经不可用的 Docker 加速域名

以下 Docker 加速域名，已经因为各种原因不可用或只允许对应云供应商网络使用，包括：

•163: `hub-mirror.c.163.com`•USTC: `docker.mirrors.ustc.edu.cn`•腾讯云：`mirror.ccs.tencentyun.com`•Azure 中国: `dockerhub.azk8s.cn`•七牛云：`reg-mirror.qiniu.com`•Docker CN: `registry.docker-cn.com`

#### Docker Registry Mirror 配置

创建或修改 `/etc/docker/daemon.json`:

```
sudo mkdir -p /etc/dockersudo tee /etc/docker/daemon.json <<-EOF{    
"registry-mirrors": [
    "https://<changme>.mirror.aliyuncs.com",
    "https://dockerproxy.com",
    "https://mirror.baidubce.com",
    "https://docker.m.daocloud.io",
    "https://docker.nju.edu.cn",
    "https://docker.mirrors.sjtug.sjtu.edu.cn"
]
}EOF
sudo systemctl daemon-reload
sudo systemctl 
restart docker
```

### 自建 Docker Registry Mirror/Proxy

#### 前提

•有 Cloudflare 账号•（可选）有自定义的域名，且域名托管在 Cloudflare 上•Cloudflare Workers 额度足够

#### cloudflare-docker-proxy

这里使用 Cloudflare Worker - cloudflare-docker-proxy[4] 搭建。原文 README 步骤有一些问题，可以参考这篇 README.md[5] 来实施。

这里以**自定义域名**配置方式举例, 步骤如下：

1.Fork Repo2.Deploy 按钮对应 URL 调整为您自己的 repo url3.修改 `src/index.js` 的 `const routes` 块的内容

```
const routes = {``  "docker.your-domain.com": "https://registry-1.docker.io",``  "quay.your-domain.com": "https://quay.io",``  "gcr.your-domain.com": "https://k8s.gcr.io",``  "k8s-gcr.your-domain.com": "https://k8s.gcr.io",``  "ghcr.your-domain.com": "https://ghcr.io",``};
```

4.点击 "Deploy" 按钮部署，部署后如下：

![图片](https://static.xlc520.tk/blogImage/640-1698065215359-40.png)Cloudflare Worker

5.在 Cloudflare 的 DNS 记录里添加 `CNAME` 指向部署后的 `${workername}.${username}.workers.dev` 地址。如下：![图片](https://mmbiz.qpic.cn/mmbiz_png/lvd46ZxX8UTLzDsF9BvKaYsPvHibLX26icmWBo3QjlQ7nLQLUeicXm40HzhTTHicFlIjlPx3TBdw5q42lvic697DPjA/640?wx_fmt=png&wxfrom=5&wx_lazy=1&wx_co=1)Cloudflare DNS Records6.在 Workers 的 HTTP Routes 里，添加 `xxx.your-domain.com/*` 路由指向 cloudflare-docker-proxy, xxx 就是 `docker` `quay` `gcr` 等，如下：
![图片](https://static.xlc520.tk/blogImage/640-1698065215359-42.png)
Cloudflare Worker Routes





完成。

#### Docker Registry Mirror 配置

将配置后的 `docker.<your-domain>.com` Mirror 添加到 `/etc/docker/daemon.json` 的 `registry-mirrors` 中并重启 Docker 生效。

### Docker Daemon 配置 `proxies`

如果不想设置 Mirrors, 还可以配置 `proxies`, 实现通过 `proxies` 拉取 Docker Hub 镜像。

#### 前提

•有一个 Proxy, 可以稳定访问到 Docker Hub

#### Docker Daemon 配置

`vi /etc/docker/daemon.json`, 添加如下内容：

```
sudo mkdir -p /etc/dockersudo tee /etc/docker/daemon.json <<-EOF{    "proxies": {        "http-proxy": "http://<proxy-ip>:7890",        "https-proxy": "http://<proxy-ip>:7890",        "no-proxy": "*.cn,127.0.0.0/8,192.168.0.0/16,172.16.0.0/12,10.0.0.0/8"    }}EOFsudo systemctl daemon-reloadsudo systemctl restart docker
```

> 📝**Notes**:
>
> Docker Daemon 里的 `no-proxy`, 是支持 CIDR 格式的.

完成。

### 注册各个镜像库账号并登录

包括不限于：

•Docker Hub•Quay.io•GHCR.io (GitHub 的 Docker registry)•gcr.io (Google Cloud 的 Registry)•...

注册后，视情况不同，有的可以直接通过密码登录，有的需要申请 Token/Service Account 等专用密码。

注册过程略。

#### `docker login` 登录

Docker Hub 登录：

```
echo "<password>" | docker login --username <username> --password-stdin'
```

其他 Docker Registry 登录：

```
echo "<password>" | docker login quay.io --username <username> --password-stdinecho "<password>" | docker login ghcr.io --username <username> --password-stdinecho "<password>" | docker login gcr.io --username <username> --password-stdin
```

或者，也可以直接写入 `~/.docker/config.json` 文件：

```
{  "auths": {    "ghcr.io": {      "auth": "<auth>"    },    "https://index.docker.io/v1/": {      "auth": "<auth>"    },    "quay.io": {      "auth": "<auth>"    }  }}
```

`<auth>` 通过如下方式获得：

```
echo -n '<username>:<password>' | base64
```

结束。

## 总结

通过以上方法，相信您能在国内使用 Docker 得心应手。

### References

`[1]` cloudflare-docker-proxy: *https://github.com/ciiiii/cloudflare-docker-proxy*
`[2]` docker-practice/docker-registry-cn-mirror-test: *https://github.com/docker-practice/docker-registry-cn-mirror-test/actions*
`[3]` 阿里云加速器（点击管理控制台 -> 登录账号 -> 右侧镜像工具 -> 镜像加速器 -> 复制加速器地址）: *https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors*
`[4]` cloudflare-docker-proxy: *https://github.com/ciiiii/cloudflare-docker-proxy*
`[5]` README.md: *https://github.com/east4ming/cloudflare-docker-proxy*