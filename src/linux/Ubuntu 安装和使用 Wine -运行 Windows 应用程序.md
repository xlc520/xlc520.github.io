---
author: xlc520
title: Ubuntu 安装和使用 Wine -运行 Windows 应用程序
excerpt: 
description: 
date: 2023-03-20
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
---

# Ubuntu 安装和使用 Wine -运行 Windows 应用程序

Wine（也称为 [WineHQ](https://www.winehq.org/)）是一个关键的 Windows 兼容层，它能让你在类 Unix 操作系统（例如 Linux）上高效运行
Windows 应用程序，而无需安装双系统或使用虚拟机。

对于想在 Ubuntu 系统上安装和运行 Windows 应用程序的用户来说，了解 Wine
的核心功能和优势非常重要。最新发布的 [Wine 9.0 版本](https://www.sysgeek.cn/wine-9-0/)，更是前沿技术与 Windows 应用的完美结合。

接下来，我们会介绍如何通过官方 WineHQ 软件源在 Ubuntu 上安装 Wine，以获取最新的稳定版本。同时，还会介绍如何初始化和优化 Wine
的运行环境，并通过 Wine 运行 Windows 应用程序。

以下步骤适用于 Ubuntu 20.04 LTS、22.04 LTS、23.04 和 23.10。

## 在 Ubuntu 上安装 Wine

### 步骤 1：准备工作

1 在安装 Wine 之前，请先更新系统，避免产生冲突：

```sh
sudo apt update && sudo apt upgrade
```

2 为简化安装过程，请安装以下软件包：

```sh
sudo apt install dirmngr ca-certificates software-properties-common apt-transport-https curl -y
```

3（可选）在 Ubuntu 上启用 32 位系统架构支持，以保证与大多数游戏和应用的兼容性：

```sh
sudo dpkg --add-architecture i386
```

![在 Ubuntu 上启用 32 位支持](https://bitbucket.org/xlc520/blogasset/raw/main/images3/ubuntu-wine-p2.jpg)在 Ubuntu 上启用
32 位支持

### 步骤 2：添加 WineHQ 软件源

在安装 Wine 之前，需要导入 GPG 密钥和添加官方软件源：

1 导入 GPG 密钥：

```sh
curl -s https://dl.winehq.org/wine-builds/winehq.key | sudo gpg --dearmor | sudo tee /usr/share/keyrings/winehq.gpg > /dev/null
```

2 添加 WineHQ 官方软件源：

```sh
echo deb [signed-by=/usr/share/keyrings/winehq.gpg] http://dl.winehq.org/wine-builds/ubuntu/ $(lsb_release -cs) main | sudo tee /etc/apt/sources.list.d/winehq.list
```

3 更新软件包列表，以识别新添加的软件源：

```sh
sudo apt update
```

![在 Ubuntu 中添加 WineHQ 软件源](https://bitbucket.org/xlc520/blogasset/raw/main/images3/ubuntu-wine-p3.jpg)在 Ubuntu
中添加 WineHQ 软件源

### 步骤 3：通过 APT 安装 Wine

推荐从 WineHQ 安装 Wine 的最新稳定版（比直接使用 Ubuntu 软件源的版本更新、更可靠）：

1 安装 Wine 稳定版：

```sh
sudo apt install --install-recommends winehq-stable
```

使用`--install-recommends`选项安装推荐的依赖包，可以优化 Wine 性能。

![安装 Wine 稳定版](https://bitbucket.org/xlc520/blogasset/raw/main/images3/ubuntu-wine-p4.jpg)安装 Wine 稳定版

2 检查 Wine 版本和验证安装：

```sh
wine --version
```

![查看 Wine 版本和验证安装](https://bitbucket.org/xlc520/blogasset/raw/main/images3/ubuntu-wine-p5.jpg)查看 Wine 版本和验证安装

## 在 Ubuntu 上初始化 Wine 环境

### 步骤 1：配置 Wine 环境

1 安装完成后，需要配置 Mono 等环境，以便让 Wine 能运行 .NET 应用：

```sh
winecfg
```

2 按提示安装 Mono 及相关依赖。

![安装 Mono 及相关依赖](https://bitbucket.org/xlc520/blogasset/raw/main/images3/ubuntu-wine-p6.jpg)安装 Mono 及相关依赖

### 步骤 2：配置 Wine 设置

1 配置完成后，会自动弹出「Wine 设置」对话框。在这里选择要模拟的 Windows 版本，默认为 Windows 10，可根据需求自行更改。

![选择要模拟的 Windows 版本](https://bitbucket.org/xlc520/blogasset/raw/main/images3/ubuntu-wine-p7.jpg)选择要模拟的
Windows 版本

1 调整「音效」、「显示」等设置后，点击「确定」关闭对话框完成配置。

### 步骤 3: 安装 Winetricks（优化 Wine 使用体验）

Winetricks 是一个辅助脚本，可以帮助你轻松安装和管理 Windows 应用程序和库：

1 安装 Winetricks：

```sh
sudo apt install winetricks -y
```

![安装 Winetricks](https://bitbucket.org/xlc520/blogasset/raw/main/images3/ubuntu-wine-p8.jpg)安装 Winetricks

2 使用 Winetricks 安装常用的附加组件，例如：

- Visual C++ 运行库：

```sh
winetricks vcrun2022
```

- 安装字体：

```sh
winetricks allfonts corefonts cjkfonts
```

- 安装 DirectX 提升兼容性和游戏性能：

```sh
winetricks d3dx9 d3dx10 d3dx11
```

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/ubuntu-wine-p9.jpg)

## 使用 Wine 运行 Windows 应用程序

要运行 Windows 二进制文件，请右键点击文件选择「使用其它程序打开」，再选择 Wine。下面以在 Ubuntu 中安装和使用 Notepad++ 作为示例：

1[下载 Noetpad ++](https://notepad-plus-plus.org/downloads/) 安装文件。

2 右键点击安装文件，选择「使用其它程序打开」。

3 选择使用「Wine Windows Program Loader」打开。

![使用 Wine 运行 Windows 应用程序](https://bitbucket.org/xlc520/blogasset/raw/main/images3/ubuntu-wine-p10.jpg)使用 Wine
运行 Windows 应用程序

4 按向导提示完成安装。

![使用 Wine 安装 Notepad ++](https://bitbucket.org/xlc520/blogasset/raw/main/images3/ubuntu-wine-p11.jpg)使用 Wine 安装
Notepad ++

5 安装完成后即可正常使用。

![使用 Wine 运行 Notepad ++](https://bitbucket.org/xlc520/blogasset/raw/main/images3/ubuntu-wine-p12.jpg)使用 Wine 运行
Notepad ++

## 在 Ubuntu 上管理 Wine 环境

### 管理 Wine 前缀（应用程序环境）

Wine 使用前 Prefix（缀来）隔离不同的应用程序环境。默认情况下，主前缀路径为`~/.wine`。如果要创建一个新的自定义环境，可以执行以下命令：

```sh
WINEPREFIX=~/.custom_wine_prefix winecfg
```

请将`~/.custom_wine_prefix`替换为你想要的目录。执行命令后，会创建一个新的 Wine 环境，并自动打开「Wine 配置」对话框。

### 配置 32 位应用支持

Wine 默认以支持 64 位 Windows 应用程序的模式运行，要运行 32 位应用程序，可以通过以下命令来设置一个新的 32 位环境：

```sh
WINEARCH=win32 WINEPREFIX=~/.wine32 winecfg
```

上述命令会创建一个新的专用于 32 位应用程序的 Wine Prefix。

### 配置中文支持

创建一个 Wine Prefix，并附带上`LC_ALL=zh_CN.UTF-8`参数。

```sh
WINEPREFIX=/home/billyfu/wine_prefix LC_ALL=zh_CN.UTF-8 winecfg
```

### 浏览 Wine 应用程序数据库

在 Wine 应用程序数据库 (AppDB)
中，提供了关于各种应用程序兼容性和优化配置的实用信息，这些都是最佳实践。你可以访问 [Wine AppDB](https://appdb.winehq.org/)
来了解特定应用程序的详细信息和其它用户分享的经验与建议。

## 常见问题解答

**「Wine 设置」中出现中文乱码和方框怎么解决？**

![解决「Wine 设置」中文乱码](https://bitbucket.org/xlc520/blogasset/raw/main/images3/ubuntu-wine-p13.jpg)解决「Wine 设置」中文乱码

- 请确保安装了中文字体：

```sh
winetricks cjkfonts
```

- Wine 的字体渲染可能有缺陷，为解决一些罕见问题，请安装相应的 Windows 库：

```sh
winetricks riched20 riched30
```

- 在 Prefix 设置中加上`LC_ALL=zh_CN.UTF-8`参数。

**Wine 应用程序出现中文乱码和方框怎么解决？**

## 从 Ubuntu 中移除 Wine

要从 Ubuntu 中卸载 Wine，可以使用以下步骤：

1 卸载 Wine 稳定版应用程序：

```sh
sudo apt remove winehq-stable
```

2 移除 WineHQ 仓库信息：

```sh
sudo rm /etc/apt/sources.list.d/winehq.list
```

3 删除 GPG 密钥：

```sh
sudo rm /usr/share/keyrings/winehq.gpg
```

------

Wine 的持续发展和更新让它能够跟上 Windows 应用程序的最新变化，同时也会引入新技术来提升在 Linux 上的性能和兼容性。
