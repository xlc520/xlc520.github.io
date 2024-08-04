---
title: Windows开启tun模式后导致CPU占用高解决
excerpt: Windows开启tun模式后导致CPU占用100%解决方法
description: Windows开启tun模式后导致CPU占用100%解决方法
date: 2024-07-02
category: pc
tag: pc
author: xlc520
article: true
timeline: true
icon: computer
---

```component VPBanner
title: Windows开启tun模式后导致CPU占用100%解决方法
content: Windows开启tun模式后导致CPU占用100%解决方法
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: Windows开启tun模式后导致CPU占用高解决
    link: /Windows开启tun模式后导致CPU占用高解决/
```

# Windows开启tun模式后导致CPU占用100%解决



使用TUN模式进行上网，出现无法上网并且在开启TUN模式后CPU占用100%，无论使用哪一个工具开启TUN模式都会出现同样的问题。

根据大量搜索，出现该情况可能的原因：多网络、多网卡的情况下，clash 可能无法根据自动跃点识别正在使用的网络接口，造成路由回环，CPU、内存在开启 tun 瞬间，系统资源占用剧增

> 测试包括 Clash Verge 、v2rayN 、nekoray

使用以下任意方法或者按照顺序设置，每个方法都是测试看是否能用，自测试设置完两个方法才解决

## 方法1.网络重置

### Windows 11

```
设置 - 网络和Internet - 高级网络设置 - 更多设置 - 网络重置 - 立即重置
```

Windows 10 忘记了，大概也在差不多的位置

然后重启电脑，测试开启TUN看CPU占用

## 方法2.关闭路由转发

查看接口名称

```powershell
netsh interface show interface

管理员状态     状态           类型             接口名称
-------------------------------------------------------------------------
已启用            已连接            专用               WLAN
已启用            已连接            专用               以太网
```

关闭路由转发，可以将ipv4改为ipv6，将ipv6的路由转发也关闭。

```powershell
netsh interface ipv4 set interface "WLAN" forwarding=disabled
netsh interface ipv6 set interface "WLAN" forwarding=disabled
netsh interface ipv4 set interface "以太网" forwarding=disabled
netsh interface ipv6 set interface "以太网" forwarding=disabled
```

经测试执行完上述已成功解决

如果还不行，可以尝试切换 Tun 模式，改为 system



## 其他问题

如果报错

```
ERR [Inbound] start failed error=Error creating interface: Cannot create a file when that file already exists. type=TUN stackType=system inet=198.18.0.1/16
```

请将 Windows 系统的默认安全设置（防火墙/Windows Defender/内核隔离/DEP/驱动签名/基于声誉的保护设置/应用和浏览器控制/VBS)，能关闭的都关闭，并恢复系统默认动态端口范围为补丁更新前

关闭 VBS（虚拟化安全）：`bcdedit /set hypervisorlaunchtype off`
关闭 DEP (数据执行保护)：`bcdedit.exe /set {current} nx AlwaysOff`
修改 Windows 动态端口范围为默认状态：`netsh int ipv4 set dynamic tcp start=49152 num=16384 && netsh int ipv4 set dynamic udp start=49152 num=16384`
关闭 windows 防火墙：`netsh advfirewall set allprofiles state off`
关闭 驱动强制签名：`bcdedit.exe -set loadoptions DDISABLE_INTEGRITY_CHECKS & bcdedit.exe /set nointegritychecks on && bcdedit/set testsigning on`

随后重启系统，重新开启 TUN 模式

如果还不行，可以尝试切换 Tun Stack，改为 system






<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
