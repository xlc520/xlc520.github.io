---
author: xlc520
title: 敏感词检测API服务wordscheck
excerpt: 
description: 
date: 2023-11-28
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# 敏感词检测 API 服务 wordscheck

**什么是 wordscheck ？**

> `wordscheck` 是敏感词检测 `API`，提供文本识别、智能鉴黄、涉政检测、谩骂等等敏感词检测过滤服务。

**简介**

- 敏感词库从大量样本库整理出来，基于 `NLP` 算法检测
- 支持 `Windows`、`MacOS`、`Linux` 等 `64` 位主流系统
- 可以部署在本地，或部署到阿里云、腾讯云、亚马逊云、谷歌云等云服务器
- 通过下载部署包，即可一键启动私有化的"敏感词检测 `API` 服务"
- 支持自动云更新最新词库
- 支持 `http json`方式或 `gRPC` 方式查询
- 单服务参考查询效率 `70000` 次/分钟，同时支持并行服务
- 支持自定义添加白名单/黑名单词条
- 服务运行内存 `100M` 左右，非常轻便

**应用场景**

- `AI` 智能问答、评论留言、聊天消息、直播弹幕、商品详情 等内容合规检测过滤
- 应用提审上架、主管部门审核、云平台内容巡查 等监管需要
- 境内外 产品内容合规需要，可部署到中国香港、新加坡、日本、美国、韩国等

# 构建镜像

> 如果你不想自己构建，可以跳过，直接阅读下一章节

官方提供了 `Dockerfile` 文件，但没找到镜像，所以需要编自己编一下

构建镜像和容器运行的基本命令如下👇

```plain
# 下载代码
git clone https://github.com/bosnzt/wordscheck.git
  
# 或者加个代理
git clone https://ghproxy.com/github.com/bosnzt/wordscheck.git
  
# 进入目录  
cd wordscheck
  
# 构建镜像
docker build -t wbsu2003/wordscheck:v1 .

# 运行容器
docker run -d \
   --name wordscheck \
   -p 8187:8080 \
   wbsu2003/wordscheck:v1
```

# 安装

在群晖上以 Docker 方式安装。

在注册表中搜索 `wordscheck` ，选择第一个 `wbsu2003/wordscheck`，版本选择 `latest`。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921250-0.png)

## 端口

本地端口不冲突就行，不确定的话可以用命令查一下

```plain
# 查看端口占用
netstat -tunlp | grep 端口号
```

|  本地端口  |  容器端口  |
|:------:|:------:|
| `8187` | `8080` |

默认没有暴露端口

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921250-1.png)

需要点 `+` 号自己添加

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921250-2.png)

# 命令行安装

如果你熟悉命令行，可能用 `docker cli` 更快捷

```plain
# 运行容器
docker run -d \
   --restart unless-stopped \
   --name wordscheck \
   -p 8187:8080 \
   wbsu2003/wordscheck
```

也可以用 `docker-compose` 安装，将下面的内容保存为 `docker-compose.yml` 文件

```plain
version: '3'

services:
  wordscheck:
    image: wbsu2003/wordscheck
    container_name: wordscheck
    restart: unless-stopped
    ports:
      - 8187:8080
```

然后执行下面的命令

```plain
# 新建文件夹 wordscheck
mkdir -p /volume1/docker/wordscheck

# 进入 wordscheck 目录
cd /volume1/docker/wordscheck

# 将 docker-compose.yml 放入当前目录

# 一键启动
docker-compose up -d
```

# 运行

容器启动后，在日志中会看到

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921250-3.png)

但是如果你直接在浏览器中输入 `http://群晖IP:8187` ，会看到下面的错误

```plain
404 page not found
```

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921250-4.png)

需要通过 `curl` 来验证，用 `SSH` 客户端登录到群晖后，在命令行执行

```plain
curl http://192.168.0.197:8187/health
```

如果状态正常，会返回

```plain
{"code":"0"}
```

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921250-5.png)

测试下敏感词服务

```plain
curl -H "Accept: application/json" \
     -H "Content-type: application/json" \
     -X POST \
     -d "{\"content\":\"他在传播艳情内容\"}"  \
     http://192.168.0.197:8187/wordscheck
```

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921250-6.png)

在输出格式化之后是👇下面这样的

```plain
{  
    "code":"0",  
    "msg":"检测成功",  
    "return_str":"他在传播**内容",  
    "word_list":[  
        {  
            "keyword":"艳情",  
            "category":"色情",  
            "position":"4-5",  
            "level":"高"  
        }  
    ],  
    "extstr":""  
}
```

如果觉得 `curl` 不方便，可以试试 `api` 工具

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921251-7.png)

官方提供了 `http` 和 `rpc` 的不同语言的调用示例，需要自己根据需要进行选择

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700829921251-8.png)

# 参考文档

> bosnzt/wordscheck: 敏感词检测，违禁词过滤，敏感词过滤，敏感词库，一键启动，本地运行，私有化部署，1 分钟接入完成，支持
> docker，支持在线 api
> 地址：<https://github.com/bosnzt/wordscheck>
>
> 介绍 - Powered by MinDoc 地址：<https://doc.wordscheck.com/docs/docs>
>
> 文本识别_智能鉴黄_敏感词过滤_涉政检测_在线体验_wordscheck
> 地址：<https://www.wordscheck.com/>
