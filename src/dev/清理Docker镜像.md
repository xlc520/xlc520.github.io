---
author: xlc520
title: 清理Docker镜像
excerpt: 
description: 
date: 2023-11-29
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# 清理 Docker 镜像

在日常开发和维护工作中，Docker 镜像管理是一件既繁复又必要的工作。镜像积累如山，不仅占用宝贵的磁盘空间，还可能给我们的工作带来不便。今天，就让我带大家深入了解如何高效清理
Docker 镜像，保持我们的开发环境干净整洁。

### 1.查看镜像并评估

首先，我们需要知道自己的“战场”：

```sh
docker images -a
```

`-a` 参数会列出所有镜像，包括中间层镜像。检查一下这些镜像，评估哪些是必要的，哪些是可以删除的。

### 2.删除指定镜像

对于不再需要的镜像，我们可以使用它们的 ID、仓库名或标签来删除：

```sh
docker rmi [镜像ID或仓库名:标签]
```

### 3.批量删除无用镜像

清理所有悬挂（即无标签）镜像，这些通常是构建过程中留下的：

```sh
docker image prune
```

加上 `-a` 参数，可以删除所有未被容器引用的镜像：

```sh
docker image prune -a
```

### 4.清理特定时间前的镜像

当我们需要清理一定时间之前的镜像时，可以使用过滤器：

```sh
docker image prune -a --filter "until=168h"
```

上面的命令会删除所有创建时间超过 168 小时（7 天）的镜像。

### 5.按照大小排序

有时候，我们想优先删除体积较大的镜像来快速释放空间：

```sh
docker images --format '{{.Size}}\t{{.Repository}}:{{.Tag}}' | sort -hr
```

这样我们可以直观地看到哪些镜像占用空间较大，然后手动删除。

### 6.使用脚本自动化

如果有一系列复杂的清理规则，我们可以编写一个简单的脚本来自动化这个过程。比如：

```sh
#!/bin/bash
# 清理所有未使用的镜像和容器
docker system prune -af
# 删除所有1.0版本开头的镜像
docker images | grep '1.0' | awk '{print $3}' | xargs docker rmi
```

### 7.定时自动清理

利用 cron 定时任务，可以设定周期性清理工作：

```sh
# 每天凌晨两点执行清理
0 2 * * * /path/to/your/script.sh
```

### 8.删除特定模式的镜像

对于复杂的模式匹配，我们可以使用更精细的 grep 命令：

```sh
docker images | grep '仓库名.*1.0' | awk '{print $3}' | xargs docker rmi
```

记得替换 '仓库名' 为你的实际仓库名。
