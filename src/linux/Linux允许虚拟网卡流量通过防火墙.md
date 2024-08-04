---
title: Linux允许虚拟网卡流量通过防火墙
excerpt: Linux允许虚拟网卡流量通过防火墙
description: Linux允许虚拟网卡流量通过防火墙
date: 2024-08-04
category: Linux
tag: Linux
author: xlc520
article: true
timeline: true
icon: linux
---

```component VPBanner
title: Linux允许虚拟网卡流量通过防火墙
content: Linux允许虚拟网卡流量通过防火墙
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: Linux允许虚拟网卡流量通过防火墙
    link: /Linux允许虚拟网卡流量通过防火墙/
```

# Linux允许虚拟网卡流量通过防火墙



在Ubuntu系统中，如果希望允许通过防火墙的虚拟网卡流量，需要对防火墙规则进行相应的配置。以下是使用`iptables`和`ufw`（Uncomplicated Firewall）两种常见防火墙工具的配置方法。

### 使用 `iptables`

1. **查看当前的虚拟网卡**：

   ```bash
   ip link show
   ```

   找到你的虚拟网卡名称，例如 `veth0`。

2. **允许虚拟网卡的流量**：

   ```bash
   sudo iptables -A INPUT -i veth0 -j ACCEPT
   sudo iptables -A OUTPUT -o veth0 -j ACCEPT
   sudo iptables -A FORWARD -i veth0 -j ACCEPT
   sudo iptables -A FORWARD -o veth0 -j ACCEPT
   ```

3. **保存规则**：
   保存规则以便系统重启后仍然有效。可以使用 `iptables-save` 和 `iptables-restore` 命令，或者使用 `netfilter-persistent` 工具。

   ```bash
   sudo apt-get install iptables-persistent
   sudo netfilter-persistent save
   ```

### 使用 `ufw`

1. **查看当前的虚拟网卡**：

   ```bash
   ip link show
   ```

   找到你的虚拟网卡名称，例如 `veth0`。

2. **允许虚拟网卡的流量**：

   ```bash
   sudo ufw allow in on veth0
   sudo ufw allow out on veth0
   ```

3. **启用 `ufw`**：

   ```bash
   sudo ufw enable
   ```

### 验证配置

配置完成后，可以通过以下命令验证防火墙规则是否生效：

```bash
sudo iptables -L -v
```

或者对于 `ufw`：

```bash
sudo ufw status verbose
```

通过以上步骤，可以确保Ubuntu创建的虚拟网卡能够通过防火墙。请根据你的具体需求调整规则，确保网络安全。




<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
