---
author: xlc520
title: Linux 安全
excerpt: 
description: 
date: 2023-07-20
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
---

## Linux 安全

### 1.bootloader 配置权限检查

检测类型：bootloader 配置权限

风险等级：中危

风险描述：以下关键文件或目录权限错误:`/boot/grub/grub.cfg` 当前权限: 444 : root 安全权限: 600 : root

解决方案：

1、对【`/boot/grub2/grub.cfg`】文件，配置对应权限
2、

```sh
chmod 600 /boot/grub2/grub.cfg

chown root /boot/grub2/grub.cfg
```

### 2.SSH 空闲超时时间检测

检测类型：SSH 空闲超时时间检测

风险等级：中危

风险描述：当前 SSH 空闲超时时间为：0，请设置为 600-900

解决方案：

1、在【`/etc/ssh/sshd_config`】文件中设置【`ClientAliveInterval`】设置为 600 到 900 之间
2、提示：SSH 空闲超时时间建议为：600-900

```sh
vi /etc/ssh/sshd_config
ClientAliveInterval 900
```

### 3.检查重要文件是否存在 suid 和 sgid 权限

检测类型：检查拥有 suid 和 sgid 权限的文件

风险等级：中危

风险描述：以下文件存在 sid 特权，chmod u-s 或 g-s 去除 sid 位："
/usr/bin/chage、/usr/bin/gpasswd、/usr/bin/wall、/usr/bin/chfn、/usr/bin/chsh、/usr/bin/newgrp、/bin/mount、/bin/umount"

解决方案：

1、使用`chmod u-s/g-s` 【文件名】命令修改文件的权限

```sh
chmod u-s/g-s /usr/bin/chage
chmod u-s/g-s /usr/bin/gpasswd
chmod u-s/g-s /usr/bin/wall
chmod u-s/g-s /usr/bin/chfn
chmod u-s/g-s /usr/bin/chsh
chmod u-s/g-s /usr/bin/newgrp
chmod u-s/g-s /bin/mount
chmod u-s/g-s /bin/umount
```

### 4.检查 SSH 密码失效时间

检测类型：检查 SSH 密码失效时间

风险等级：中危

风险描述：【/etc/login.defs】文件中把 PASS_MAX_DAYS 设置为 90-180 之间

解决方案：

1、【/etc/login.defs】 使用非密码登陆方式密钥对。请忽略此项, 在/etc/login.defs 中将 PASS_MAX_DAYS 参数设置为 90-180 之间
2、PASS_MAX_DAYS 90 需同时执行命令设置 root 密码到期时间 命令如下: `chage --maxdays 90 root`

### 5.检查是否设置无操作超时退出

检测类型：检查是否设置命令行界面超时退出

风险等级：中危

风险描述：未配置命令行超时退出

解决方案：

1、在文件【/etc/profile】中添加 tmout=300，等保要求不大于 600 秒
2、执行命令 source /etc/profile 使配置生效

```sh
vi /etc/profile
tmout=900
source /etc/profile
```

### 6.检查 SSH 密码修改最小间隔

检测类型：检查 SSH 密码修改最小间隔

风险等级：中危

风险描述：【/etc/login.defs】文件中把 PASS_MIN_DAYS 大于等于 7

解决方案：

1、【/etc/login.defs】 PASS_MIN_DAYS 应设置为大于等于 7
2、PASS_MIN_DAYS 7 需同时执行命令设置 root 密码失效时间 命令如下: chage --mindays 7 root

### 7.检查 ls 和 rm 命令是否设置别名

检测类型：检查别名配置

风险等级：低危

风险描述：ls、rm 命令未配置别名或配置不当

解决方案：

1、在文件【~/.bashrc】中添加或修改 alias ls='ls -alh'以及 alias rm='rm -i'
2、执行【source ~/.bashrc】使配置生效

```sh
vi ~/.bashrc

# -l : (list)以列表形式显示
# -a: (all)显示全部文件, 包括隐藏文件
# -h: (human readable)人性化形式显示文件大小
alias ls='ls -alh' 
alias rm='rm -i' #询问是否删除

source ~/.bashrc
```

### 8.设置 ssh 登录白名单

检测类型：ssh 访问控制列表检查

风险等级：低危

风险描述：未设置 ssh 登录白名单

解决方案：

1、在【/etc/hosts.deny】添加 ALL:ALL
2、在【/etc/hosts.allow】添加 sshd:【来访者 IP 地址】

```sh
vi /etc/hosts.deny
ALL:ALL

vi /etc/hosts.allow
sshd:【来访者IP地址】
```

### 9.检测是否使用安全的套接字层加密传输信息，避免被侦听敏感信息

检测类型：是否使用加密的远程管理 ssh

风险等级：中危

风险描述：未使用安全套接字加密远程管理 ssh

解决方案：

1、在【`/etc/ssh/sshd_config`】文件中添加或修改 Protocol 2
2、随后执行命令`systemctl restart sshd`重启进程

```sh
vi /etc/ssh/sshd_config
Protocol 2

systemctl restart sshd
```

### 10.检测是否开启系统防火墙

检测类型：系统防火墙检测

风险等级：中危

风险描述：未开启系统防火墙，存在安全风险

解决方案：

1、建议开启系统防火墙，以避免所有服务器端口暴露在互联网上，如服务器有【安全组】功能，请忽略此提示
2、注意：开启系统防火墙需提前将需要开放的端口，特别是 SSH 和面板端口加入放行列表，否则可能导致服务器无法访问

### 11.检测是否禁止 ICMP 协议访问服务器(禁 Ping)

检测类型：ICMP 检测

风险等级：中危

风险描述：当前未开启【禁 Ping】功能，存在服务器被 ICMP 攻击或被扫的风险

解决方案：

1、在【安全】页面中开启【禁 Ping】功能
2、注意：开启后无法通过 ping 通服务器 IP 或域名，请根据实际需求设置

```sh
永久禁用：
echo net.ipv4.icmp_echo_ignore_all=1 > /etc/sysctl.conf  
执行sysctl -p使新配置生效

永久启用：
echo net.ipv4.icmp_echo_ignore_all=0 > /etc/sysctl.conf 
执行sysctl -p使新配置生效
sysctl -p

临时禁用：
echo 1 > /proc/sys/net/ipv4/icmp_echo_ignore_all

临时启用：
echo 0 > /proc/sys/net/ipv4/icmp_echo_ignore_all
```

### 12.检查是否开启 TCP-SYNcookie 保护缓解 syn flood 攻击

检测类型：TCP-SYNcookie 保护检测

风险等级：低危

风险描述：未开启 TCP-SYNcookie 保护

解决方案：

1、在【`/etc/sysctl.conf`】文件中添加`net.ipv4.tcp_syncookies=1`
2、然后执行命令`sysctl -p`生效配置

```sh
vi /etc/sysctl.conf
net.ipv4.tcp_syncookies=1

sysctl -p
```
