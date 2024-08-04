---
title: Cloudflare Tunnel使用教程
excerpt: Cloudflare Tunnel使用教程
description: Cloudflare Tunnel使用教程
date: 2024-05-20
category: Linux
tag: Linux
author: xlc520
article: true
timeline: true
icon: linux
---

```component VPBanner
title: Cloudflare Tunnel使用教程
content: Cloudflare Tunnel使用教程
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: Cloudflare Tunnel使用教程
    link: /Cloudflare Tunnel使用教程/
```

# Cloudflare Tunnel使用教程

### cf tunnel 是什么？

> Cloudflare Tunnel为您提供了一种安全的方式，将您的资源连接到Cloudflare，而无需公共可路由的IP地址。使用Tunnel，您不会将流量发送到外部IP地址，而是在您的基础设施中创建一个轻量级的守护程序，仅向Cloudflare的全球网络创建出站连接。Cloudflare Tunnel可以安全地将HTTP Web服务器、SSH服务器、远程桌面和其他协议连接到Cloudflare。这样，您的源站可以通过Cloudflare提供流量，而不会容易受到绕过Cloudflare的攻击。

*（摘自官方文档）*

### 有什么用？

`tunnel`字面意思一根加密隧道直接从Cloudflare网络插到你的服务器，提供webui页面方便管理域名与服务器上部署的项目之间的绑定。

- 项目部署上线更简单，只需建立好隧道，然后设置域名指向项目暴露的本地地址和端口即可。
- 无需编写任何 Nginx 配置，非常适合像我这样的懒人或小白用户。
- 无需配置证书，使用加密隧道，项目不会直接暴露到公网上，从而增强了安全性。*（ps: 需开启防火墙）*

### 如何工作的？

大致流程为：

用户 —> cf服务器 —> cf侧tunnel设置入口 --(加密)–> 服务器侧的tunnel出口 → 本机项目

![流程](E:/source/Git/blogAsset/images/2024/434450a3b007e4730f6bddc45c9c8300d59d7cd6.jpeg)

### 开始搭建

1. 在Cloudflare的侧边栏中，找到并点击`Zero Trust` 菜单。如果是首次使用，需要进行订阅，选择免费套餐进行开通。

![1](E:/source/Git/blogAsset/images/2024/1686c86ae9810ed5471ce436746fe84047e26949_2_269x500.png)


#### 2. 在进入Zero Trust面板后，从侧边栏中找到并点击`Tunnel` 菜单。

![2](E:/source/Git/blogAsset/images/2024/5c827c3bad07a645e7e07c2de17e81d59f89e15d.png)

#### 3. 创建一条隧道（cf侧）

![3](E:/source/Git/blogAsset/images/2024/02cb3149d94ba32fc195572fd389656e1bdb5685_2_690x357.png)


3.1 隧道类型选`Cloudflared`

![4](E:/source/Git/blogAsset/images/2024/864a1395ed78cd3c4d70754631497db7df3f3059_2_593x500.png)


3.2 设置隧道名，名字随便取，我个人习惯于取能够辨识服务器的名称。

![5](E:/source/Git/blogAsset/images/2024/cbe68a5e604f599e7999bd73014339a480936704_2_690x476.png)

3.3 安装环境选`Docker`，记得复制docker的安装命令以备后用。

![6](E:/source/Git/blogAsset/images/2024/4d511ac73106944616e94027000100be04229862_2_412x500.png)


3.4 不用点下一步，直接在左上角点击返回，即可确认隧道已成功创建。

![7](E:/source/Git/blogAsset/images/2024/caa0578923ff704b38f6b459dfbe542b15716379_2_527x500.png)

![8](E:/source/Git/blogAsset/images/2024/a0f3fc6a86582798683703cebbca069dabf3078b_2_690x387.png)

#### 4. 服务器侧隧道设置

在第`3.3`节中，我们获得了一个类似于以下的docker命令：

```bash
docker run cloudflare/cloudflared:latest tunnel --no-autoupdate run --token eyJhIjoiMjQ4MmIzM2Y3Njc3YWE5OWE5NThiZjcxNTdkMzU1ZmYiLCJ0IjoiOTFmYzdhOWQtYThiZC00MmY2LThlOTEtMDMwYWZjNDA3MjRmIiwicyI6IlkyRm1OamM0TXpZdE1qVTBaaTAwTTJZNUxUZ3hOV1V0TXpOaE9XVmpNV1F4Wm1ZeCJ9
```

先别着急用，需要添加几个docker参数，**注意network需要设置为host**。讲一下我之前遇到的坑，docker启动容器默认会使用桥接模式（bridge），在后面域名绑定时，`127.0.0.1:port`是cloudflared这个容器内部的地址，如果你的项目也是使用docker的桥接模式启动的，那么就无法找到对应的服务。当然也可以用`172.17.0.1:port`这个地址进行绑定，但还是建议让cloudflared容器以host模式启动。

docker启动命令

```css
docker run -d --restart always --network host --name cloudflared cloudflare/cloudflared tunnel --no-autoupdate run --token eyJhIjoiMjQ4MmIzM2Y3Njc3YWE5OWE5NThiZjcxNTdkMzU1ZmYiLCJ0IjoiOTFmYzdhOWQtYThiZC00MmY2LThlOTEtMDMwYWZjNDA3MjRmIiwicyI6IlkyRm1OamM0TXpZdE1qVTBaaTAwTTJZNUxUZ3hOV1V0TXpOaE9XVmpNV1F4Wm1ZeCJ9
```

or

docker-compose配置

```yaml
version: '3'

services:
  cloudflared:
    image: cloudflare/cloudflared
    container_name: cloudflared
    restart: always
    network_mode: host
    command: tunnel --no-autoupdate run --token eyJhIjoiMjQ4MmIzM2Y3Njc3YWE5OWE5NThiZjcxNTdkMzU1ZmYiLCJ0IjoiOTFmYzdhOWQtYThiZC00MmY2LThlOTEtMDMwYWZjNDA3MjRmIiwicyI6IlkyRm1OamM0TXpZdE1qVTBaaTAwTTJZNUxUZ3hOV1V0TXpOaE9XVmpNV1F4Wm1ZeCJ9
```

#### 5. 配置域名和部署项目的绑定

5.1 点击前面创建的隧道`Configure`

![9](E:/source/Git/blogAsset/images/2024/5c2314c9ffef2d038efb2893347cd21cf49a551f_2_690x479.png)


5.2 添加`Public Hostname`

![10](E:/source/Git/blogAsset/images/2024/8283349ea1a8c64fc4a881a0473c2b832e0792a1_2_648x500.png)


5.3 配置域名与服务器上的项目端口，类型有很多可选的，选http即可。

![11](E:/source/Git/blogAsset/images/2024/9c762d00a84e6eb13431e8d9c6aae83764b2f419_2_689x417.png)


5.4 配置完成后，尝试访问你的域名以确认是否设置成功。


<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
