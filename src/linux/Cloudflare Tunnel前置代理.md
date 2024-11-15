---
title: Cloudflare Tunnel前置代理
excerpt:
description: Cloudflare Tunnel前置代理
date: 2024-09-12
category: Linux
tag: Linux
author: xlc520
article: true
timeline: true
icon: linux
---

```component VPBanner
title: Cloudflare Tunnel前置代理
content: Cloudflare Tunnel前置代理
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: Cloudflare Tunnel前置代理
    link: /linux/Cloudflare Tunnel前置代理
```

# Cloudflare Tunnel前置代理

　赛博大善人的 Cloudflare Tunnel(前 Argo Tunnel) 只需要一个域名、一个 Cloudflare 帐号便可以将服务接入到 Cloudflare 的网络，提供了非常方便的内网穿透方式， 同时还提供了 ZeroTrust、防护等功能， 而这一切基本几乎都是免费的，相信看到此文的小伙伴已经薅上一段时间了，不过由于 Cloudflare Tunnel 官方的服务节点分布有限，在部分时空/场景下，Tunnel 连通性会面临一些挑战， 这时候要是能够通过前置代理去连接到 Tunnel 服务，问题便能得到解决，可惜[官方目前并没打算支持这个特性](https://github.com/cloudflare/cloudflared/issues/350#issuecomment-1706842883)。

　　目前比较有效的方案是 Xiaomage 同学的： [Cloudflare Tunnel速度慢？尝试给它加个前置代理提高速度](https://blog.xmgspace.me/archives/cloudflare-tunnel-via-proxy.html) ，不过这种方式对动手能力还是有点要求的，同时也增加了部署的依赖。
　　这里看到社区有一个来自 [Asutorufa](https://github.com/Asutorufa) 的PR: [http2 tunnel support](https://github.com/cloudflare/cloudflared/pull/1020)
经过测试，发现基本能实现这个需求。 根据这个思路，[Fork 仓库](https://github.com/AlliotTech/cloudflared_proxy)后简单的加了个 GitHub Action 打包发布 Docker 镜像。

　　顺便放一个 Docker compose 片段：

```yaml
cloudflare-tunnel:
    image: ghcr.io/alliottech/cloudflared_proxy:latest
    # network_mode: "host"
    container_name: cloudflare-tunnel
    hostname: cloudflare-tunnel
    restart: unless-stopped
    command: tunnel run  --protocol http2
    links:
        - "nginx"
    volumes:
        - /etc/localtime:/etc/localtime:ro
    environment:
        - "all_proxy=socks5://127.0.0.1:123"
        - "TUNNEL_TRANSPORT_PROTOCOL=http2"
        - "TUNNEL_TOKEN=xxxxxxxx"
```

　　直接替换之前的官方镜像片段为上述后即可愉快的玩耍了, 切记 `TUNNEL_TRANSPORT_PROTOCOL=http2` 这个环境变量是必须的:

> https://github.com/cloudflare/cloudflared/pull/1020#issuecomment-1706843025
> This is something that we don’t actually want to support within cloudflared.
> Furthermore, http2 transport only has a subset of features that cloudflared allows and the official transport to use should be QUIC, which wouldn’t work for the SOCKS proxy.

　　当然，你也可以选择 Clone 仓库后，手动打包二进制直接使用：

```
make cloudflared TARGET_ARCH=amd64 TARGET_OS=linux
```

使用编译后的 `cloudflared`:

```
all_proxy=socks5://127.0.0.1:123 ./cloudflared tunnel run --protocol http2
```

### Ref

[Cloudflare Tunnel速度慢？尝试给它加个前置代理提高速度](https://blog.xmgspace.me/archives/cloudflare-tunnel-via-proxy.html)
[探索Cloudflared Tunnel](https://www.emengweb.com/p/探索Cloudflared-Tunnel-原Argo-Tunnel-实现中间层网络加速)

https://www.iots.vip/post/cloudflare-tunnel-proxy-support.html




<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
