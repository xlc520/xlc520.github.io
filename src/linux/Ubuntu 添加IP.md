---
title: Ubuntu 添加IP
excerpt:
description: Ubuntu 添加IP
date: 2024-05-17
category: Linux
tag: Linux
author: xlc520
article: true
timeline: true
icon: linux
---

```component VPBanner
title: Ubuntu 添加IP
content: Ubuntu 添加IP
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: Ubuntu 添加IP
    link: /linux/Ubuntu 添加IP
```

# Ubuntu 添加IP

在Ubuntu 22.04中，持久化网络配置通常是通过编辑`/etc/netplan/`目录下的YAML配置文件来完成的。

## **持久化配置**

以下是添加一个新的IP地址和网关并使其在系统重启后仍然有效的步骤：

1. **打开终端**：

    - 使用快捷键`Ctrl + Alt + T`打开终端。

2. **编辑网络配置文件**：

    - 使用文本编辑器（如`nano`或`vim`）打开网络接口配置文件。例如：

      ```bash
      sudo nano /etc/netplan/00-installer-config.yaml
      ```

    - 如果文件名不同，请根据实际情况替换文件名。

3. **添加或修改IP配置**：

    - 在配置文件中，找到你的网络接口配置部分。它应该看起来像这样：

      ```yaml
      network:
        version: 2
        renderer: networkd
        ethernets:
          ens33:
            addresses: [192.168.1.100/24]
            gateway4: 192.168.1.1
            nameservers:
              addresses: [8.8.8.8, 8.8.4.4]
      ```

    - 添加或修改`addresses`字段来包含你想要的新IP地址。例如，添加一个新的IP地址`192.168.1.101/24`：

      ```yaml
      network:
        version: 2
        renderer: networkd
        ethernets:
          ens33:
            addresses: [192.168.1.100/24, 192.168.1.101/24]
            gateway4: 192.168.1.1
            nameservers:
              addresses: [8.8.8.8, 8.8.4.4]
      ```

    - 如果你需要添加新的网关，确保它是在`gateway4`字段中指定的。

4. **应用更改**：

    - 保存文件并退出编辑器。

    - 应用新的网络配置：

      ```bash
      sudo netplan apply
      ```

5. **验证配置**：

    - 使用以下命令验证IP地址和网关是否已经正确添加：

      ```bash
      ip addr show dev ens33
      ip route show
      ```

    - 第一个命令将显示`ens33`接口上的所有IP地址，第二个命令将显示当前的路由表。

6. **重启网络服务**（可选）：

    - 如果需要，你可以重启网络服务以确保更改立即生效：

      ```bash
      sudo netplan apply
      ```

## 命令配置

以下是使用`ip`命令来完成这个任务的步骤：

1. **打开终端**：

    - 使用快捷键`Ctrl + Alt + T`打开终端。

2. **查看当前网络接口**：

    - 首先，你需要知道你的网络接口名称。使用以下命令查看当前的网络接口：

      ```bash
      ip addr
      ```

    - 通常，以太网接口的名称是`eth0`、`ens33`等，无线接口可能是`wlan0`。

3. **添加新的IP地址**：

    - 使用`ip`命令添加一个新的IP地址。以下是一个示例命令，假设你的网络接口是`ens33`：

      ```bash
      sudo ip addr add 192.168.1.101/24 dev ens33
      ```

    - 这个命令将把`192.168.1.101/24`这个IP地址添加到`ens33`接口上。

4. **添加网关**：

    - 使用`ip`命令添加网关。以下是一个示例命令，假设你的网关是`192.168.1.1`：

      ```bash
      sudo ip route add default via 192.168.1.1
      ```

    - 这个命令将设置`192.168.1.1`作为默认网关。

5. **验证配置**：

    - 使用以下命令验证IP地址和网关是否已经正确添加：

      ```bash
      ip addr show dev ens33
      ip route show
      ```

    - 第一个命令将显示`ens33`接口上的所有IP地址，第二个命令将显示当前的路由表。

<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
