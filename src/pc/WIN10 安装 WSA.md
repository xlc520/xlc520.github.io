---
author: xlc520
title: WIN10 安装 WSA
excerpt: 
description: 
date: 2023-07-07
category: pc
tag: pc
article: true
timeline: true
icon: computer
---

# WIN10 安装 WSA

要求：

主板 BIOS 中开启了 VT-X（虚拟化）

Windows 10 必须是 22H2，版本高要于 19045.2311 ：Win+R 运行，输入 winver 回车，查看一下自己的当前 Windows 10 的系统版本是否符合

需要[虚拟机](https://www.52pojie.cn/thread-661779-1-1.html)平台支持，在安装之前，还必须在系统程序功能中开启：控制面板——>
程序——>启用或关闭 Windows 功能

### 请按照以下步骤在 Windows 10 上安装

1. 下载压缩包（保护谷歌全家桶和
   Magisk），[github 项目地址](https://github.com/MustardChef/WSABuilds/releases)  [github 下载地址](https://github.com/MustardChef/WSABuilds/releases/download/Windows_10_2303.40000.5.0/WSA_2303.40000.5.0_x64_Release-Nightly-with-magisk-d0c93842.26101.-canary-MindTheGapps-13.0-RemovedAmazon_Windows_10.zip) [123 盘下载地址](https://www.123pan.com/s/RZhuVv-BfQUv.html) [github 汉语说明](https://github.com/MustardChef/WSABuilds/blob/master/Changelogs/Windows_10_x64_Changelog_CN.md)
2. 解压缩压缩文件
3. 删除 zip 文件（**建议保留.zip 文件，直到 WSA 已安装并正常工作**)
4. 将新提取的文件夹移动到合适的位置（文档文件夹是一个不错的选择），因为您需要将该文件夹保留在 PC 上才能使用 MagiskOnWSA
5. 打开 WSA 文件夹，然后双击“运行.bat （这一步会给 WSA 文件夹内的 app 注册 windowsapp，确保 Microsoft Store 能正常安装新
   app 才可以）

然后打开 WSA 设置里的开发人员选项，安装<https://www.microsoft.com/store/productId/9P2JFQ43FPPG> 连接 adb 调试 WSA 来安装应用。
