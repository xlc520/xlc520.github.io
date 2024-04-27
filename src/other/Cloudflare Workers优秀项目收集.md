---
author: xlc520
title: Cloudflare Workers优秀项目收集
excerpt: 
description: 
date: 2024-03-30
category: other
tag: other
article: true
timeline: true
icon: others
---

# Cloudflare Workers 优秀项目收集

Cloudflare 是一家致力于建立更好互联网的公司，提供强大高效的服务，包括免费的 CDN、DNS 和 Worker 服务。Cloudflare Workers
是一个无服务器平台，可以运行 Javascript。它强大且免费，可以用于各种项目，如建站、导航站、图床、短网址等。还可以用来监控网站状态、搭建临时邮箱、生成
RSS 订阅等。通过 Workers 还可以部署 Copilot 服务和 Telegram Bot 服务。此外，还有一些中转和网盘文件列表服务可供使用。

Cloudflare 是一家伟大的互联网公司，她致力于建立更好的互联网。目前她提供的服务强大而又高效，同时很多项目都可以免费使用，诸如免费提供
CDN、DNS 服务以及本文即将介绍的 Worker 服务。

## 1. 什么是 Cloudflare Workers

Cloudflare Workers 是一个可以让你运行 Javascript
的（无服务器）平台，具体详情请看[官网介绍](https://blog.cloudflare.com/cloudflare-workers-unleashed/)。

## 2. 为什么用 Cloudflare Workers

因为它比较强大，而且免费。它强大的地方，包括抗 DDOS 攻击，在线率高；同时，它也提供了免费版和收费版，其中免费版一般足够个人使用；而且，它可以分配一个域名，不需要额外购买域名。
当然，如果遇到 Cloudflare Worker 打不开的情形，可以考虑绑定自己的域名，这里推荐购买一个便宜的.xyz 域名或申请 eu.org 免费域名。

## 3.Cloudflare Workers 可以做什么

Cloudflare Workers 可以做 Javascript 能做的事情。注意：Cloudflare Workers 每天限制 10W 次免费请求，个人使用，一般都够了。同时，Cloudflare
也提供了收费版，每月 5$/1000 万次请求。

## 4.Cloudflare Workers 优秀项目集景

### 4.1 节点

3K 大佬改写的项目：<https://github.com/3Kmfi6HP/EDtunnel>

Zizifn 大佬原创项目：<https://github.com/zizifn/edgetunnel/blob/main/src/worker-vless.js>

部署自定义订阅服务：<https://github.com/mjjonone/sub-worker/blob/main/_worker.js>

### 4.2 建站

#### 通过 Workers 搭建博客

方案一：利用 worker 的 KV
作为数据库搭建博客：源码：[gdtool/Cloudflare-workers-blog](https://github.com/gdtool/cloudflare-workers-blog)
，安装教程，[在这里](https://cfblog.661212.xyz/article/000003/cfblog-plus.html) ;
方案二：利用 workers+github
搭建博客系统，源码:[kasuganosoras/cloudflare-worker-blog](https://github.com/kasuganosoras/cloudflare-worker-blog)

#### 通过 Workers 搭建导航站

利用 worker 搭建导航站，源码：[sleepwood/CF-Worker-Dir](https://github.com/sleepwood/CF-Worker-Dir)

#### 利用 Workers 搭建图床

源码：[iiop123/workers-image-hosting](https://github.com/iiop123/workers-image-hosting)；
Demo：<https://img.231516.xyz/> (我自己搭建的图床) 。

#### 通过 Workers 搭建短网址服务

源码 1：<https://github.com/igengdu/short/> （推荐，本站免费短网址服务[https://d.igdu.xyz](https://d.igdu.xyz/) ,
即是基于此开源项目）。

源码
2：[Url-Shorten-Worker](https://github.com/crazypeace/Url-Shorten-Worker)，[教程](https://zelikk.blogspot.com/2022/07/url-shorten-worker-hide-tutorial.html)；

源码 3：[xyTom/Url-Shorten-Worker](https://github.com/xyTom/Url-Shorten-Worker/)；

源码 4：[Closty/duanwangzhi](https://github.com/Closty/duanwangzhi)；

源码
5：[Short-url](https://github.com/Likenttt/eastlake-cloudflare-worker-short-url)，[教程](https://blog.661212.xyz/index.php/archives/4/)。

#### 通过 workers 等监控网站状态

源码：[eidam/cf-workers-status-page](https://github.com/eidam/cf-workers-status-page)；（也可以通过 Uptimerobot
实现网站健康状态监控，源码：[yb/uptime-status](https://github.com/yb/uptime-status)）;
教程：[教程](https://linux.do/t/topic/10601)。

#### 通过 workers 等搭建临时邮箱

源码：[dreamhunter2333/cloudflare_temp_email](https://github.com/dreamhunter2333/cloudflare_temp_email)

#### 通过 workers 等搭建 RSS 订阅生成器

源码：<https://github.com/yllhwa/RSSWorker> 内含教程。

#### 通过 workers 等部署 Copilot 服务

Copilot（原 New Bing）可以试用 ChatGPT4，目前通过 Workers 就可以部署本地可用的 Copilot 服务。
源码：[Harry-zklcdc/go-proxy-bingai](https://github.com/Harry-zklcdc/go-proxy-bingai)内含教程；
Demo，[试用](https://bingai-cfwk.zklcdc.xyz/web/#/)；
[其他方式部署 Copilot 的试用网址](https://github.com/Harry-zklcdc/go-proxy-bingai/wiki/演示站)。

#### 通过 workers 等部署 Telegram Bot 服务

源码：[Tsuk1ko/cfworker-telegraf](https://github.com/Tsuk1ko/cfworker-telegraf-template) ;
教程：[moe.best](https://moe.best/tutorial/cfworker-telegraf-tgbot.html)

### 4.3 中转

Gh-proxy: Github 项目加速，<https://github.com/hunshcn/gh-proxy>
Jsproxy：<https://github.com/EtherDream/jsproxy/tree/master/cf-worker>
Workers-Proxy：<https://github.com/klightso/Workers-Proxy-1> ;[参考教程](https://www.locmjj.com/274.html)

### 4.4 网盘文件列表

#### 利用 Workers 搭建 Google Drive 列表服务

源码 1：<https://github.com/xunyixiangchao/goindex；>
源码 2：<https://github.com/yanzai/goindex；>
源码 3：[Aicirou/goindex-theme-acrou](https://github.com/Aicirou/goindex-theme-acrou)；
源码 4：<https://github.com/maple3142/GDIndex>

#### OneDrive-index: 利用 Workers 搭建 OneDrive 列表服务

源码 1：[spencerwooo/onedrive-cf-index](https://github.com/spencerwooo/onedrive-cf-index)
源码 2：[Eggsmemory/OneDrive Index Cloudflare Worker](https://github.com/Eggsmemory/OneDrive-Index-Cloudflare-Worker-Cht)

#### 更新说明

本文最初写于 2023 年 6 月，收集当时所有能够收集到的 Workers
项目，增删查补，得以成文，[原文网址](https://www.igengdu.com/2023/06/cloudflare-workers.html)；
2023 年 12 月 30 日，修改整理部分链接和失效代码；
2024 年 3 月 9 日，新增部分内容、调整项目顺序：
新增利用 Workers 搭建自定义订阅、搭建 RSS 订阅生成器、代理 Coplilot 部分内容。

如果你觉得有新的优秀的 Workers 项目或失效的链接等，都可以联系我。

## 参考

#### [Source 1：Workers 优秀项目收集 lists](https://github.com/irazasyed/awesome-cloudflare)

#### [Source 2: Vipkj.net](https://www.vipkj.net/post-3645.html)

#### [Source 3: Littlefox.me](https://blog.littlefox.me/archives/408)

#### [Source 4：Linux.do](https://linux.do/t/topic/24849)

#### [Source 5：iGengdu.com](https://www.igengdu.com/2023/06/cloudflare-workers.html)

<https://igdux.com/workers>
