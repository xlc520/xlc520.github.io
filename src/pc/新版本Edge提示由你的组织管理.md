---
author: xlc520
title: 电脑故障问题解决
excerpt: 
description: 电脑故障问题解决方法
date: 2022-03-29
category: pc
tag: pc
article: true
timeline: true
icon: computer
---

## 新版本 Edge 提示由你的组织管理，如何取消 ？

答：1、按“WIN+R”组合键，输入`regedit.exe`打开注册表

2.找到路径`HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Edge`

3.把其中的 SmartScreenEnabled 和 SmartScreenPuaEnabled 两项删除

4.将 edge 浏览器关闭重新打开。
