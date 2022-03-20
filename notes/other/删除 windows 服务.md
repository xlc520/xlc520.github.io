---
author: xlc520
title: 卸载windows服务，删除 windows 服务
description: 卸载windows服务，删除 windows 服务
date: 2022-01-27
category: other
tag: other
article: true
timeline: true
icon: 
password: 
---
# 卸载windows服务，删除 windows 服务

## 方法/步骤

1. 1

   windows提供了基于命令窗口删除服务的功能，就是在命令窗口输入

    **sc delete 服务名称**

   在窗口输入上面的命令就能删除了。下面详细说明。

2. 2

   **确定"服务名称"**，"服务名称"并不是我们在服务列表里直接看到的名称，我们看到的是服务的"显示名称",查看服务名称的方法，就是在要删除的服务上右击，选择"属性"，这时就能看到真正的"服务名称"。比如下面的例子我们要删除“SQL Server Browser”服务，其真实的服务名称为“SQLBrowser”

   ![怎么卸载windows服务，删除 windows 服务](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/d9a8d2d2bb665159594c639f8fe23ea23b42c7a1.jpg)

   ![怎么卸载windows服务，删除 windows 服务](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/116b1ae23ea23a424176d3a53733ec3835bbc0a1.jpg)

3. 3

   **执行”sc delete 服务名称“**，打开命令窗口，输入  ”sc delete "+刚才查看到的服务名称，回车就会提示删除成功。这里我们输入  `sc delete SQLBrowser` ，提示删除成功后，在服务窗口列表里也删除掉了。

   ![怎么卸载windows服务，删除 windows 服务](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/a151a233ec3834bbffe3d1ea8714c27bd3823da6.jpg)

   ![怎么卸载windows服务，删除 windows 服务](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/0d55dc7bd28286894d4ac40465f97fbd4d7c37a6.jpg)

   ![怎么卸载windows服务，删除 windows 服务](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/7efc527c34b33c41c0b6a0f4887de137c8762ea6.jpg)

   