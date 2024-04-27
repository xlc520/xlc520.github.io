---
author: xlc520
title: 思科、华为、H3C命令对照表
excerpt: 
description: 
date: 2024-04-07
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
---

# 思科、华为、H3C 命令对照表

### 取消/关闭 当前设置

```sh
思科:no
华为:undo
h3c:undo
```

### 查看、显示

```sh
思科:show
华为:display
h3c:display
```

### 退回上级

```sh
思科:exit
华为:quit
h3c:quit
```

### 设置主机名

```sh
思科:hostname
华为:sysname
h3c:sysname
```

### 进入全局模式

```sh
思科:en, config terminal
华为:system-view
h3c:system-view
```

### 删除文件

```sh
思科:delete
华为:delete
h3c:delete
```

### 重启

```sh
思科:reload
华为:reboot
h3c:reboot
```

### 保存当前配置

```sh
思科:write
华为:save
h3c:save
```

### 创建用户

```sh
思科:username
华为:local-user
h3c:local-user
```

### 禁止、关闭

```sh
思科:shutdown
华为:shutdown
h3c:shutdown
```

### 显示当前系统版本

```sh
思科:show version
华为:display version
h3c:display version
```

### 查看已保存过的配置

```sh
思科:show startup-config
华为:display saved-configuration
h3c:display saved-configuration
```

### 显示当前配置

```sh
思科:show running-config
华为:display current-configuration
h3c:display current-configuration
```

### 取消所有 debug 命令

```sh
思科:no debug all
华为:ctrl+d
h3c:
华为:ctrl+d
```

### 删除配置

```sh
思科:erase startup-config
华为:reset saved-configuration
h3c:reset saved-configuration
```

### 退到用户视图

```sh
思科:end 
华为:return 
h3c:return
```

### 登出

```sh
思科:exit
华为:logout
h3c:logout
```

### 指定信息中心配置信息

```sh
思科:logging
华为:info-center
h3c:info-center
```

### 进入线路配置（用户接口）模式

```sh
思科:line
华为:user-interface
h3c:user-interface
```

### 启动配置

```sh
思科:start-config
华为:saved-configuration
h3c:saved-configuration
```

### 当前配置

```sh
思科:running-config
华为:current-configuration
h3c:current-configuration
```

### host 名字和 ip 地址对应

```sh
思科:host
华为:ip host
h3c:ip host
```

## 交换部分

### 配置明文密码

```sh
思科:enable password
华为:set authentication password simple
h3c:set authentication password simple
```

### 进入接口

```sh
思科:interface type/number
华为:port type/number
h3c:port type/number
```

### 进入 vlan 配置 vlan 管理地址

```sh
思科:interface vlan 1  
华为:interface vlan 1  
h3c:interface vlan 1 
```

### 定议多个端口的组

```sh
思科:interface rang
华为:interface ethID to ID
h3c:interface ethID to ID
```

### 设置特权口令

```sh
思科:enabl esecret
华为:super password
h3c:super password
```

### 配置接口状态

```sh
思科:duplex (half|full|auto) 
华为:duplex (half|full|auto) 
h3c:duplex (half|full|auto)
```

### 配置端口速率

```sh
思科:speed (10/100/1000) 
华为:speed (10/100/1000) 
h3c:speed (10/100/1000)
```

### 配置 trunk

```sh
思科:switchport mode trunk
华为:port link-type trunk
h3c:port link-type trunk
```

### 添加、删除 vlan

```sh
思科:vlan ID  /no vlan ID
华为:vlan ID  /no vlan ID
h3c:vlan ID  /no vlan ID
```

### 将端口接入 vlan

```sh
思科:switchport access vlan ID
华为:port vlan ID
h3c:port vlan ID
```

### 查看接口

```sh
思科:show interface
华为:display interface
h3c:display interface
```

### 查看 vlan

```sh
思科:show vlan ID
华为:display vlan ID
h3c:display vlan ID
```

### 封装协议

```sh
思科:encapsulation
华为:link-protocol
h3c:link-protocol
```

### 链路聚合

```sh
思科:channel-group 1 mode on
华为:port link-aggregation group 1  
h3c:port link-aggregation group 1 
```

### 开启三层交换的路由功能

```sh
思科:ip routing
华为:默认开启
h3c:默认开启
```

### 开启接口三层功能

```sh
思科:no switchport
华为:不支持
h3c:不支持
```

### 对跨以太网交换机的 VLAN 进行动态注册和删除

```sh
思科:vtp domain
华为:GVRP
h3c:GVRP
```

### STP 配置根网桥

```sh
思科:spanning-tree vlan ID root primary
华为:stp root primary
h3c:stp root primary
```

### 配置网桥优先级

```sh
思科:spanning-tree vlan ID priority
华为: stp priority priorityNumber
h3c:stp priority priorityNumber
```

### 查看 STP 配置

```sh
思科:show spanning-tree
华为:display stp brief
h3c:display stp brief
```

## 路由部分

### 配置默认路由

```sh
思科:ip route 0.0.0.0 0.0.0.0 
华为:ip route-static 0.0.0.0 0.0.0.0 
h3c:ip route-static 0.0.0.0 0.0.0.0
```

### 配置静态路由

```sh
思科:ip route 目标网段+掩码 下一跳
华为:ip route-static 目标网段+掩码 下一跳
h3c:ip route-static 目标网段+掩码 下一跳
```

### 查看路由表

```sh
思科:show ip route
华为:display ip routing-table
h3c:display ip routing-table
```

### 启用 RIP、并宣告网段

```sh
思科:router rip /network 网段
华为:rip /network 网段
h3c:rip /network 网段
```

### 启用 OSPF

```sh
思科:router ospf
华为:ospf enable
h3c:ospf enable
```

### 配置 OSPF 区域

```sh
思科:network ip 反码 area <area-id> 
华为:ospf enable area <area-id> 
h3c:ospf enable area <area-id>
```

### 配置 RIP V2 水平分割

```sh
思科:no auto-summary
华为:rip split-horizon
h3c:rip split-horizon
```

### 查看路由协议

```sh
思科:show ip protocol
华为:display ip protocol
h3c:display ip protocol
```

### 标准访问控制列表

```sh
思科:access-list 1-99 permit/deny IP
华为:rule normal permit source IP
h3c:rule normal permit source IP
```

### 扩展访问控制列表

```sh
思科:access-list 100-199 permit/deny protocol source IP+反码
华为:rule {normal|special}{permit|deny}{tcp|udp}sour
h3c:rule {normal|special}{permit|deny}{tcp|udp}sour
```

### 配置 HSRP 组

```sh
思科:standby group-number ip virtual-ip
华为:vrrp vrid number virtual-ip
h3c:vrrp vrid number virtual-ip
```

### 配置 HSRP 优先级

```sh
思科:standby group-number priority
华为:vrrp vrid number priority
h3c:vrrp vrid number priority
```

### 配置 HSRP 占先权

```sh
思科:standby group-number preempt
华为:vrrp vrid number preempt-mode
h3c:vrrp vrid number preempt-mode
```

### 配置端口跟踪

```sh
思科:standby group-number track
华为:无
h3c:无
```

### 配置静态地址转换

```sh
思科:ip nat inside source static
华为:nat server global <ip> [port] inside <ip> port [protocol]  
h3c:nat server global <ip> [port] inside <ip> port [protocol] 
```
