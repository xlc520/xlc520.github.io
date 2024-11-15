---
title: 解决Windows11手机连接程序提示系统管理员已阻止此功能
excerpt:
description: 解决Windows11手机连接程序提示系统管理员已阻止此功能
date: 2024-09-08
category: pc
tag: pc
author: xlc520
article: true
timeline: true
icon: computer
---

```component VPBanner
title: 解决Windows11手机连接程序提示系统管理员已阻止此功能
content: 解决Windows11手机连接程序提示系统管理员已阻止此功能
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: 解决Windows11手机连接程序提示系统管理员已阻止此功能
    link: /pc/解决Windows11手机连接程序提示系统管理员已阻止此功能
```

# 解决Windows11手机连接程序提示系统管理员已阻止此功能

![image-20240908195841702](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/image-20240908195841702.png)

**方法：**

进入注册表，管理员打开cmd，输入

```bat
regedit
```

定位到

```bat
计算机\HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Windows\System
```

将EnableMmx改成1就可以恢复手机连接程序的使用

![image-20240908200047199](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/image-20240908200047199.png)


<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
