---
author: xlc520
title: 电脑故障问题解决
description: 电脑故障问题解决方法
date: 2022-03-29
category: pc
tag: pc
article: true
timeline: true
icon: computer
password: 
---



## 新版本Edge提示由你的组织管理，如何取消 ？

答：1、按“WIN+R”组合键，输入`regedit.exe`打开注册表

2.找到路径`HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Edge `

3.把其中的SmartScreenEnabled和SmartScreenPuaEnabled两项删除

4.将edge浏览器关闭重新打开。 