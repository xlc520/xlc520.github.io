---
title: Linux 系统中挂载硬盘
excerpt: Linux 系统中挂载硬盘
description: Linux 系统中挂载硬盘
date: 2024-05-09
category: Linux
tag: Linux
author: xlc520
article: true
timeline: true
icon: linux
---

```component VPBanner
title: Linux 系统中挂载硬盘
content: Linux 系统中挂载硬盘
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: Linux 系统中挂载硬盘
    link: /linux/Linux 系统中挂载硬盘
```

# Linux 系统中挂载硬盘

### 1. 查看所有磁盘分区

首先，需要识别新硬盘的分区名称。可以使用`lsblk`或`fdisk`命令来查看。

```bash
lsblk
# 或者
sudo fdisk -l
```

这些命令将显示所有的磁盘和分区。假设新硬盘被识别为`/dev/sdb`。

### 2. 创建挂载点

选择一个目录作为硬盘的挂载点。通常，我们会在 `/mnt` 或 `/media` 下创建一个新的目录。例如

```bash
sudo mkdir /mnt/newdisk
```

这里将新硬盘挂载到`/mnt/newdisk`目录上。你可以根据自己的需求选择不同的目录。

### 3. 格式化分区

如果硬盘是新的或者需要重新格式化，可以使用`mkfs`命令来格式化。选择一种文件系统类型，如ext4。

```bash
sudo mkfs.ext4 /dev/sdb1
#  mkfs -t ext4 /dev/sdb1 格式化新分区为ext4格式
```

这里`/dev/sdb1`是要格式化的分区的路径。**警告：格式化分区将删除所有数据，请确保数据已备份或分区为空。**

### 4. 手动挂载硬盘

先尝试手动挂载确保一切正常。

```bash
sudo mount /dev/sdb1 /mnt/newdisk
```

此命令将`/dev/sdb1`挂载到`/mnt/newdisk`。

### 5. 设置自动挂载

编辑`/etc/fstab`文件，将挂载信息添加进去以实现开机自动挂载。

```bash
sudo vi /etc/fstab
```

在文件的末尾添加以下行（根据你的实际分区和挂载点调整）：

```bash
/dev/sdb1    /mnt/newdisk    ext4    defaults    0    2
```

保存并关闭文件。

这里：

- `/dev/sdb1` 是硬盘设备名称。
- `/mnt/mydisk` 是挂载点。
- `ext4` 是文件系统类型。
- `defaults` 是挂载选项，通常使用 `defaults` 即可。
- `0` 和 `0` 是用于dump和fsck的选项，通常设置为0。

### 6. 测试`/etc/fstab`的设置是否正确

在重启之前，最好测试`fstab`文件没有错误，避免启动问题。

```bash
sudo mount -a
```

这将尝试挂载`/etc/fstab`中列出的所有文件系统，如果有错误，会给出提示。

### 7. 重新启动并验证

重新启动系统后，使用`lsblk`或`df -h`命令来验证硬盘是否自动挂载。

```bash
lsblk
# 或者
df -h
```

自动挂载现在应该已经设置好了，每次启动Linux系统时，新硬盘都会自动挂载到指定的挂载点。

<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
