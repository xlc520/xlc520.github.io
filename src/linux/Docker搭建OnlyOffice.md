---
author: xlc520
title: Docker搭建OnlyOffice
description: 
date: 2023-09-07
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
---



# Docker搭建OnlyOffice

## OnlyOffice是什么：

> OnlyOffice 是一款开源的办公套件，提供了一系列用于文档管理、项目管理、客户关系管理（CRM）、邮件管理和社交网络的工具。它最初是由 Ascensio System SIA 公司于 2009 年发布的，旨在为小型和中型企业提供一种云办公的解决方案。
>
> OnlyOffice 包括以下主要组件：
>
> 1. 文档编辑器：OnlyOffice 提供了一个在线的文档编辑器，支持文本文档、电子表格和演示文稿。这些编辑器兼容 Microsoft Office 文件格式，并提供了丰富的格式化和协作功能。
> 2. 文档管理：OnlyOffice 包含了一个全功能的文档管理系统，支持版本控制、权限管理、在线查看和编辑文档等功能。
> 3. 项目管理：OnlyOffice 提供了一套项目管理工具，支持任务分配、时间跟踪、报告和协作。
> 4. 客户关系管理（CRM）：OnlyOffice 的 CRM 系统支持联系人管理、销售机会跟踪、报告和邮件营销。
> 5. 邮件管理：OnlyOffice 可以集成你的电子邮件账户，让你在一个统一的界面中管理你的邮件。
> 6. 团队协作：OnlyOffice 提供了一些社交网络功能，如新闻订阅、论坛、博客和 wiki，支持团队成员之间的协作和交流。
>
> OnlyOffice 可以在云端运行，也可以部署在本地服务器上。它提供了一个开放的 API，允许开发者扩展其功能或将其集成到其他系统中。

## 安装教程：

1. **安装 Docker**

   对于大多数主流的 Linux 发行版可以使用下面的命令来安装 Docker：

   ```bash
   curl -fsSL https://get.docker.com -o get-docker.sh
   sudo sh get-docker.sh
   ```

   这将会下载一个脚本并执行，这个脚本会自动检测你的操作系统类型并安装相应的 Docker 版本。

2. **安装 Docker Compose**

   使用下面的命令来安装 Docker Compose：

   ```bash
   sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   sudo chmod +x /usr/local/bin/docker-compose
   ```

   这将会下载 Docker Compose 的二进制文件并将其放在 /usr/local/bin 目录下，然后添加执行权限。

3. **配置并运行 OnlyOffice**

   首先，创建一个目录来保存你的配置文件和数据：

   ```bash
   mkdir -p /root/onlyoffice
   ```

   然后，在这个目录下创建一个 docker-compose.yml 文件，并填入以下内容：

   ```yaml
   version: '3'
   services:
     onlyoffice:
       image: onlyoffice/documentserver:latest
       stdin_open: true
       tty: true
       restart: always
       ports:
         - 5545:80
         - 2345:443
       volumes:
         - /root/onlyoffice/data:/var/www/onlyoffice/Data
         - /root/onlyoffice/logs:/var/log/onlyoffice
   ```

   这个配置文件会启动一个 OnlyOffice 文档服务器，它会监听 5545 和 2345 端口，并将数据和日志存储在 /root/onlyoffice/data 和 /root/onlyoffice/logs 目录下。

   最后，进入到包含 docker-compose.yml 文件的目录，然后运行以下命令：

   ```bash
   cd /root/onlyoffice
   docker-compose up -d
   ```

   这个命令会下载 OnlyOffice 的 Docker 镜像（如果本地没有的话），然后启动一个 OnlyOffice 的容器。

现在，你应该可以通过浏览器访问 http://localhost:5545 来使用 OnlyOffice 了。如果你的 Docker 主机不在本地，那么你需要将 localhost 替换为 Docker 主机的 IP 地址。

```
进去后，按照提示依次执行三个方框里的三行sudo命令，然后点GO TO TEST EXAMPLE就可以了
```

## 以下是一些常用的 Docker 和 Docker Compose 命令：

1. **重启服务**

   如果你想要重启 OnlyOffice 服务，你可以使用 `docker-compose restart` 命令：

   ```bash
   cd /root/onlyoffice
   docker-compose restart
   ```

2. **更新服务**

   如果你想要更新 OnlyOffice 到最新版本，你可以先停止服务，然后拉取最新的 Docker 镜像，最后再重新启动服务：

   ```bash
   cd /root/onlyoffice
   docker-compose down
   docker-compose pull
   docker-compose up -d
   ```

3. **停止并卸载服务**

   如果你想要停止并卸载 OnlyOffice 服务，你可以使用 `docker-compose down` 命令：

   ```bash
   cd /root/onlyoffice
   docker-compose down
   ```

   注意：这个命令只会停止服务并删除容器，但不会删除你的数据和配置文件。如果你想要完全删除所有的数据和配置，你需要手动删除 `/root/onlyoffice` 目录。

4. **查看服务状态**

   如果你想要查看 OnlyOffice 服务的状态，你可以使用 `docker-compose ps` 命令：

   ```bash
   cd /root/onlyoffice
   docker-compose ps
   ```

5. **查看服务日志**

   如果你想要查看 OnlyOffice 服务的日志，你可以使用 `docker-compose logs` 命令：

   ```bash
   cd /root/onlyoffice
   docker-compose logs
   ```

   如果你只想要查看最新的日志，你可以加上 `-f` 参数来实时查看日志：

   ```bash
   cd /root/onlyoffice
   docker-compose logs -f
   ```