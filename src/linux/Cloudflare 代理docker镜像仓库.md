---
title: Cloudflare 代理docker镜像仓库
excerpt: Cloudflare 代理docker镜像仓库
description: Cloudflare 代理docker镜像仓库
date: 2024-06-20
category: Linux
tag: Linux
author: xlc520
article: true
timeline: true
icon: linux
---

```component VPBanner
title: Linux
content: Cloudflare 代理docker镜像仓库
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: Cloudflare 代理docker镜像仓库
    link: /linux/Cloudflare 代理docker镜像仓库
```

前提条件：

1、一个cloudflare账号

2、一个域名

使用 Cloudflare Workers 来部署我们的镜像加速服务，这里我的账号是使用的免费计划，每天100,000次请求，个人用足够了

首先安装 wrangler 命令行工具 https://developers.cloudflare.com/workers/cli-wrangler/install-update

安装后执行` wrangler login` 会自动跳转到浏览器进行身份验证，我们在页面中选择allow

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1718468729245-32.webp)

## 方式一

### 安装

这里使用hammal这个项目，首先将项目下载到本地

```
git clone https://github.com/ImSingee/hammal.git
cd hammal
mv wrangler.toml.sample wrangler.toml
```

获取 account_id id

```
wrangler whoami
```

或者页面上查看

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1718468729245-33.webp)

#创建 KV namespace

```
➜  hammal-demo: wrangler kv:namespace create docker_cache
 ⛅️ wrangler 3.59.0 (update available 3.60.1)
-------------------------------------------------------
🌀 Creating namespace with title "docker-proxy-docker_cache"
✨ Success!
Add the following to your configuration file in your kv_namespaces array:
{ binding = "docker_cache", id = "00fe55d37f61**********47bf" }
```

修改wrangler.toml文件

```
name = "docker-proxy" //要创建的cloudflare worlers 应用程序的名称
account_id = "1492*********" //上一步查看到的account id
workers_dev = true
main = "./src/index.ts"
compatibility_date = "2021-12-07"
//将创建KV namespace 中的id 写入下方，注意 binding = "HAMMAL_CACHE" 不需要修改
kv_namespaces = [
         { binding = "HAMMAL_CACHE", id = "00fe55d3*****95ac1063847bf" }
]
```

```
### 部署应用 ➜ hammal-demo git:(main) ✗ wrangler deploy ⛅️ wrangler 3.59.0 (update available 3.60.1) ------------------------------------------------------- Total Upload: 5.59 KiB / gzip: 1.78 KiB Your worker has access to the following bindings: - KV Namespaces: - HAMMAL_CACHE: 00fe5*******1063847bf Uploaded docker-proxy (1.05 sec) Published docker-proxy (4.16 sec) https://docker-proxy.121324124.workers.dev Current Deployment ID: 0794aebc-*****087e01014b44 Current Version ID: 0794aeb*******087e01014b44 Note: Deployment ID has been renamed to Version ID. Deployment ID is present to maintain compatibility with the previous behavior of this command. This output will change in a future version of Wrangler. To learn more visit: https://developers.cloudflare.com/workers/configuration/versions-and-deployments
```

部署后我们就可以在页面上看到这个应用了

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1718468729245-34.webp)

添加自定义域名

虽然Cloudflare Workers为我们应用提供了`workers.dev` 域名,但是该域名被墙，这里我们还需要自定义一个域名，我的lishuai.fun的域名就是在Cloudflare
，这里添加自定义域后Cloudflare 会帮我做dns解析以及证书。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1718468729245-35.webp)

添加后如下

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1718468729245-36.webp)

### 使用

#### 直接使用

比如我们要下载busybox:1.30 这个镜像，直接使用就是下载 proxy.lishuai.fun/busybox:1.30

```
[root@dev-tools ~]# docker pull proxy.lishuai.fun/busybox:1.30
1.30: Pulling from busybox
53071b97a884: Pull complete 
Digest: sha256:4b6ad3a68d34da29bf7c8ccb5d355ba8b4babcad1f99798204e7abb43e54ee3d
Status: Downloaded newer image for proxy.lishuai.fun/busybox:1.30
proxy.lishuai.fun/busybox:1.30
```

#### 作为 docker registry mirro使用

没添加前我们pull nginx镜像会报错

```
[root@dev-tools ~]# docker pull nginx:1.20 
1.20: Pulling from library/nginx
214ca5fb9032: Pulling fs layer 
50836501937f: Pulling fs layer 
d838e0361e8e: Pulling fs layer 
fcc7a415e354: Waiting 
dc73b4533047: Waiting 
e8750203e985: Waiting 
error pulling image configuration: Get "https://production.cloudflare.docker.com/registry-v2/docker/registry/v2/blobs/sha256/05/0584b370e957bf9d09e10f424859a02ab0fda255103f75b3f8c7d410a4e96ed5/data?verify=1718097591-sHWoUPhk%2BwR4vjhRQiG7UTsSwLM%3D": read tcp 192.168.3.24:54228->104.16.98.215:443: read: connection reset by peer
```

配置registry mirror,创建/etc/docker/daemon.json 文件，并将下面内容写入文件

```
cat  /etc/docker/daemon.json 
{
  "registry-mirrors": ["https://proxy.lishuai.fun"]
}
```

重启docker

```
systemctl  daemon-reload
systemctl restart docker
```

再次下载镜像

```
[root@dev-tools ~]# docker pull nginx:1.20 
1.20: Pulling from library/nginx
214ca5fb9032: Pull complete 
50836501937f: Pull complete 
d838e0361e8e: Pull complete 
fcc7a415e354: Pull complete 
dc73b4533047: Pull complete 
e8750203e985: Pull complete 
Digest: sha256:38f8c1d9613f3f42e7969c3b1dd5c3277e635d4576713e6453c6193e66270a6d
Status: Downloaded newer image for nginx:1.20
docker.io/library/nginx:1.2
```

我们还可以查看访问日志

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1718468729245-37.webp)

#### 获取其他镜像源镜像

目前 hammal 支持获取 `k8s.gcr.io`, `gcr.io`, `quay.io` 的镜像，可以通过修改 handler.ts 中的 DEFAULT_BACKEND_HOST 添加

## 方式二

### 安装

使用cloudflare-docker-proxy 这个项目，这个项目可以一个服务代理多个镜像仓库，比如`docker`,`k8s.gcr.io`, `gcr.io`, `quay.io`

```
git clone https://github.com/ciiiii/cloudflare-docker-proxy.git
 cd cloudflare-docker-proxy
```

### 配置代理仓库

注意：这里将docker.libcuda.so 改为你自己的域名

如果你只想代理dockerhub 修改为

```
const routes = {
  "docker.libcuda.so": "https://registry-1.docker.io",
};
```

如果代理多个仓库则修改为

```
const routes = {
  "docker.libcuda.so": "https://registry-1.docker.io",
  "quay.libcuda.so": "https://quay.io",
  "gcr.libcuda.so": "https://gcr.io",
  "k8s-gcr.libcuda.so": "https://k8s.gcr.io",
  "k8s.libcuda.so": "https://registry.k8s.io",
  "ghcr.libcuda.so": "https://ghcr.io",
  "cloudsmith.libcuda.so": "https://docker.cloudsmith.io",
};
```

如果想修改应用程序名称，则修改wrangler.toml 文件

### 部署 wrangler deploy

部署后还需要在应用程序要添加自定义域名，如果代理多个仓库这里就需要添加多个

这里我部署时候只代理了dockerhub ，这里也就添加一个域名，还是使用proxy-demo.lishuai.fun 这个域名，用来和方式一做区分

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1718468729245-38.webp)

### 使用

#### 直接使用

可以看到 通过proxy-demo.lishuai.fun/grafana/grafana:8.3.1 下载镜像可以正常下载

```
[root@dev-tools ~]# ls /etc/docker/
key.json
[root@dev-tools ~]# docker pull  grafana/grafana:8.3.1
8.3.1: Pulling from grafana/grafana
97518928ae5f: Already exists 
a8f5f0c09c3c: Pulling fs layer 
9643e582a667: Pulling fs layer 
ad4af0290117: Pulling fs layer 
d096601a4afa: Waiting 
65e4610b9997: Waiting 
e64bd165f497: Waiting 
6f30ef190861: Waiting 
48ef5f0dbcfe: Waiting 
d095202b1b92: Waiting 
error pulling image configuration: Get "https://production.cloudflare.docker.com/registry-v2/docker/registry/v2/blobs/sha256/3b/3b1fc05e7c9aadd934d297ffe7804b61beb33a71b80c124c49f2a974a66e6ac5/data?verify=1718099366-5KAdXT8gn5AZ6gSj0I38FWgAOgc%3D": dial tcp 104.23.124.189:443: i/o timeout
[root@dev-tools ~]# docker pull  proxy-demo.lishuai.fun/grafana/grafana:8.3.1
8.3.1: Pulling from grafana/grafana
97518928ae5f: Already exists 
a8f5f0c09c3c: Pull complete 
9643e582a667: Pull complete 
ad4af0290117: Pull complete 
d096601a4afa: Pull complete 
65e4610b9997: Pull complete 
e64bd165f497: Pull complete 
6f30ef190861: Pull complete 
48ef5f0dbcfe: Pull complete 
d095202b1b92: Pull complete 
Digest: sha256:259b847ed7e3f58e6056438fd3bc353f48fbe9b77ed3b204ae619ba80e10aed9
Status: Downloaded newer image for proxy-demo.lishuai.fun/grafana/grafana:8.3.1
proxy-demo.lishuai.fun/grafana/grafana:8.3.1
```

#### 作为 docker registry mirro使用

创建/etc/docker/daemon.json ，并重启docker服务

```
[root@dev-tools ~]# cat /etc/docker/daemon.json
{
  "registry-mirrors": ["https://proxy-demo.lishuai.fun"]
}
[root@dev-tools ~]# systemctl daemon-reload 
[root@dev-tools ~]# systemctl  restart docker
```

直接下载 `grafana/grafana:8.4.1`的镜像是可以成功下载的

```
[root@dev-tools ~]# docker pull  grafana/grafana:8.4.1
8.4.1: Pulling from grafana/grafana
59bf1c3509f3: Already exists 
4164a319d242: Pull complete 
4a2f14a47a81: Pull complete 
dc89330ee24a: Pull complete 
380ee6bf29fe: Pull complete 
85f29e9b1e76: Pull complete 
b08bc2f18db4: Pull complete 
6e094f1959b8: Pull complete 
c2264af70d0b: Pull complete 
c4d0c131d223: Pull complete 
Digest: sha256:6dab2275e060b2fbb5dd9813e79b4aa3bde71aa6c8d340180a0bfa6c047605f2
Status: Downloaded newer image for grafana/grafana:8.4.1
docker.io/grafana/grafana:8.4.1
```

## 使用cloudflare-docker-proxy 代理docker镜像仓库的一些补充说明

在前面cloudflare-docker-proxy 的项目例子里我们使用`docker pull proxy-demo.lishuai.fun/grafana/grafana:8.3.1`

下载正常，但是很多小伙伴使用时候会发现这样下载一些镜像比如 `nginx`会出现如下错误：

```
[root@ops-prod-tools ~]# docker pull proxy-demo.lishuai.fun/nginx:1.21 
Error response from daemon: pull access denied for proxy-demo.lishuai.fun/nginx, repository does not exist or may require 'docker login': denied: requested access to the resource is denied
```

这里是这样的，如果是docker官方提供的镜像，默认是在library这个命名空间下的，`library`

命名空间下的镜像是docker官方维护的,我们通过docker官方地址下载是可以省略命名空间的名字，下载nginx镜像实际上下载的是`docker.io/library/nginx:1.21`

我们使用代理的地址下载时候命名空间名称就不能省略，需要使用`proxy-demo.lishuai.fun/library/nginx:1.21`

下载，如果是镜像本身就有命名空间，比如`docker.io/grafana/grafana:8.3.1` 是由 Grafana Labs

维护的镜像,就直接使用`proxy-demo.lishuai.fun/grafana/grafana:8.3.1`下载即可





<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
