---
author: xlc520
title: Linux图形化管理服务器的神器：Cockpit
description: 
date: 2022-05-23
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
password: 
---

# Linux图形化管理服务器的神器：Cockpit

## **什么是 Linux 的 Cockpit 项目？**

Cockpit是一个基于浏览器的图形管理工具，适用于您的 Linux 服务器，在服务器上安装 Cockpit 后，您可以从浏览器访问服务器并执行所有常规管理任务，例如配置防火墙、更改网络设置、管理存储、管理用户帐户、运行容器、安装更新、更新软件等。您还可以分析 CPU 负载、内存使用情况、网络活动和磁盘性能

如果您对 Linux 有点熟悉，Cockpit 是一个以图形方式管理服务器的好选择。即使您是一位经验丰富的系统管理员，Cockpit 也让您有机会了解您的服务器。

我知道如今像Ansible这样的现代实用程序是首选，但 Cockpit 对于各种用户来说仍然是一个不错的选择。

## **使用 Cockpit 以图形方式远程管理 Linux 服务器**

我将带您进行 Cockpit 演练，并展示您可以用它做什么。

### 在要监控的服务器上安装 Cockpit

您需要在要监控的服务器上安装 Cockpit，可以从一个 Cockpit 界面监控多台服务器，稍后我将展示多台服务器的步骤。

对于这个快速教程，我将在 Ubuntu 18.04 服务器上安装 Cockpit：

```
sudo apt -y install cockpit
```

完成后，您现在可以使用端口号 9090 访问接口。

如果您可以物理访问服务器，则可以像这样在 Web 浏览器中使用 localhost。

localhost:9090

> **“**
>
> 确保服务器的防火墙允许端口 9090。**”**

您可以使用服务器的 IP 地址和端口号访问 Cockpit 界面，例如，如果您的 IP 地址是 1.2.3.4，那么您的访问 URL 将是：

```
1.2.3.4:9090
```

请注意，您必须允许 Web 浏览器的自定义 https 访问。

![Cockpit](http://alist.ciberviler.top/d/ecloud180/images/blogImage/20220513101207.png)

之后，您应该会看到如下界面：

![Cockpit](http://alist.ciberviler.top/d/ecloud180/images/blogImage/20220513101224.png)

请注意，此处所需的用户名和密码与您用于服务器的凭据相同。

还要确保选中“为特权任务重用我的密码”。登录后需要执行管理任务。

### 探索Cockpit

首次登录时，您将被带到 localhost 设置下的系统概览页面：

### 系统总览

![Cockpit](http://alist.ciberviler.top/d/ecloud180/images/blogImage/20220513101239.png)

### 日志

在日志部分，您可以根据以下严重性过滤日志消息：

- 一切
- 只有紧急
- 警报及以上
- 危急及以上
- 错误及以上
- 警告及以上
- 通知及以上
- 信息及以上
- 调试及以上

默认情况下，它会显示基于“错误及以上”的严重性日志，您还可以根据特定时间段过滤消息：

- 最近的
- 当前的
- 过去 24 小时
- 过去 7 天

![Cockpit](http://alist.ciberviler.top/d/ecloud180/images/blogImage/20220513101256.png)

### 贮存

在存储中，您可以获得所有存储统计信息的简明概览，它们分为以下几类：

- 文件系统
- NFS 挂载
- 存储日志
- RAID 设备
- 驱动器
- 其他设备

![Cockpit](http://alist.ciberviler.top/d/ecloud180/images/blogImage/20220513101310.png)

即使您有一个单独的日志部分，也有一个专门的日志部分用于单独存储是有帮助的。

### 联网

在这里您可以查看与您的网络接口相关的所有信息：

- 接口
- 网络日志

![Cockpit](http://alist.ciberviler.top/d/ecloud180/images/blogImage/20220513101323.png)

网络日志，类似于存储日志，仅列出与网络统计相关的所有消息。

### 账户

此部分显示在相应 Linux 服务器上注册的所有系统用户。您可以通过此界面创建或删除用户。

![Cockpit](http://alist.ciberviler.top/d/ecloud180/images/blogImage/20220513101337.png)

### 服务

您服务器的所有系统服务都分类为启用、禁用和静态。您可以根据以下条件过滤它们：

- 目标
- 系统服务
- Socket
- 计时器
- 路径

![Cockpit](http://alist.ciberviler.top/d/ecloud180/images/blogImage/20220513101351.png)

### 终端

这是我最喜欢的，不仅仅是因为您可以在这里运行命令或四处寻找，当您需要运行重要但冗长的命令时，如果使用 Web 界面，在终端上输入整个内容可能会非常烦人。我在 Linode 提供的基于 Web 的控制台（即 Weblish 和Glish ）上体验过这一点。您不能在其中复制和粘贴任何命令。但在 Cockpit 上，您绝对可以！

![Cockpit](http://alist.ciberviler.top/d/ecloud180/images/blogImage/20220513101411.png)

## **系统状态监控**

如果您想要更简单的实时统计概览，您可以转至仪表板。

![Cockpit](http://alist.ciberviler.top/d/ecloud180/images/blogImage/20220513101430.png)

统计信息分为四个基本选项卡：CPU、内存、网络和磁盘 I/O。

![Cockpit](http://alist.ciberviler.top/d/ecloud180/images/blogImage/20220513101544.png)

![Cockpit](http://alist.ciberviler.top/d/ecloud180/images/blogImage/20220513101556.png)

![Cockpit](http://alist.ciberviler.top/d/ecloud180/images/blogImage/20220513101721.png)

![Cockpit](http://alist.ciberviler.top/d/ecloud180/images/blogImage/20220513101728.png)

### 添加 SSH 密钥

在右上角，单击您的用户名，然后单击“身份验证”。

![Cockpit](http://alist.ciberviler.top/d/ecloud180/images/blogImage/20220513101744.png)

如果您的 SSH 密钥位于其默认位置，则会自动检测到它，否则，您需要手动添加并启用它。这与您通过终端使用的 SSH 配置相同。如果您在本地使用 SSH 密码，则必须在单击下面显示的按钮后输入该密码。

![Cockpit](http://alist.ciberviler.top/d/ecloud180/images/blogImage/20220513101810.png)

## **在 Cockpit 仪表板中添加更多 Linux 服务器**

通过这个简单的仪表板，您可以添加更多服务器以从单个界面进行监控。但要确保这一点，您必须确保满足以下先决条件：

- 您已选中“重复使用我的密码执行特权任务”登录。
- Cockpit 在添加之前安装在所有服务器上。
- 您的 SSH 密钥（此处假定为标准）已预先添加并启用

![Cockpit](http://alist.ciberviler.top/d/ecloud180/images/blogImage/20220513101824.png)

要添加机器，而不是上面提到的 9090，您必须使用与远程服务器上相同的 SSH 端口号。默认情况下，它是 22。

![Cockpit](http://alist.ciberviler.top/d/ecloud180/images/blogImage/20220513101842.png)

单击“添加”后，您可能会收到如下错误：

![Cockpit](http://alist.ciberviler.top/d/ecloud180/images/blogImage/20220513101852.png)

这是因为，Cockpit 正在尝试使用与远程服务器的当前系统相同的凭据。在同一错误页面上（如上图所示），您可以将用户名更改为远程服务器可识别的名称。

完成此操作并单击登录后，将添加您的远程服务器。

![Cockpit](http://alist.ciberviler.top/d/ecloud180/images/blogImage/20220513101906.png)

## **从 Cockpit 中删除服务器**

要删除已添加的服务器，您需要单击“编辑服务器”图标：

![Cockpit](http://alist.ciberviler.top/d/ecloud180/images/blogImage/20220513101920.png)

单击后，您可以删除标记为红色的添加服务器，另一个是灰色的，因为您无法删除当前连接的服务器。

![Cockpit](http://alist.ciberviler.top/d/ecloud180/images/blogImage/20220513101934.png)

请记住，删除的服务器将从该 Cockpit 的仪表板中删除。由于 Cockpit 仍然安装在该服务器上，您可以在服务器 IP 地址的端口 9090 上使用它。您应该卸载服务器的 Cockpit 程序。

## **关于Cockpit的最终想法**

没想到它的用户界面如此简单，同时又是一款足智多谋的服务器监控软件！我一看到它超级直观的仪表板和界面统计信息就爱上了它！

并不是说我没有想到将Cockpit 安装为 Docker 容器，但它的设计并不是很理想。来自此 GitHub链接的以下引用非常清楚：

“Cockpit的设计方式，它真的希望/需要在整台机器上运行，而不是单任务 docker 应用程序容器。”

但如果您仍想尝试，请查看这个非官方的 docker 镜像。它还包括一个 docker compose 配置供您开始使用。

对于不愿意使用命令行的人来说，Cockpit 是一个非常方便的工具。对于经验丰富的系统管理员来说，在一个仪表板下概览多个 Linux 服务器也很方便。