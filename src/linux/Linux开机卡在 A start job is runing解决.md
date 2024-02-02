---
author: xlc520
title: Linux开机卡在 A start job is runing解决
description: 
date: 2024-01-07
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
---



# Linux开机卡在 A start job is runing解决

安装ubuntu20.04 LTS系统后，开机卡在“A start job is running for wait for network to be Configured”等待连接两分多钟。（启动作业正在运行，等待配置网络）

## 启动作业正在运行，等待配置网络解决办法

1、进入该目录下，修改配置文件。

```sh
cd /etc/systemd/system/network-online.target.wants/
```

2、在[Service]下添加 TimeoutStartSec=2sec，（设置超时时间为2秒）如下：

```shell
/etc/systemd/system/network-online.target.wants
sudo vi systemd-networkd-wait-online.service

[Service]
Type=oneshot
ExecStart=/lib/systemd/systemd-networkd-wait-online
RemainAfterExit=yes
TimeoutStartSec=2sec
```

3、重启验证

```sh
sudo reboot
```



## swap相关报错，启动必须等1分30秒。

```
a start job is running for /dev/disk/by-uuid/xxxxx.(20s / 1 min 30 s )
```

### **1、解决1**

1.1 查看交换分区挂载情况：

```sh
swapon --show
```



1.2 查看交换分区情况：

```sh
sudo blkid
```



1.3 然后再查看/etc/fstab文件中swap分区的UUID。

```sh
sudo cat /etc/fstab
```



两个UUID不同，正好解释了为什么swap分区会挂载失败。

解决方法是删除/etc/fstab文件中swap分区的UUID，

再用sudo blkid命令得出的swap分区UUID替换。保存文件，重启系统后a start job is running for

dev-disk-by这个错误就消失了。

### **2、解决2**

2.1 修改/etc/fstab文件，注掉swap那一行

```shell
sudo cat /etc/fstab
# /etc/fstab: static file system information.
## Use 'blkid' to print the universally unique identifier for a# device; this may be used with UUID= as a more robust way to name device# that works even if disks are added and removed. See fstab(5).
## <file system> <mount point>   <type>  <options>       <dump>  <pass>
# / was on /dev/sda2 during curtin installation/dev/disk/by-uuid/cxxxx06-xxxxc-4xxxx0-xxxxx80-xxxxxxxaac / ext4 defaults 0 1#/swap.img      none    swap    sw      0       0    
```

2.2 重启不让加载swap分区，即可解决此报错

```sh
sudo reboot
```

设置等待时间的原因是为了给系统提供足够的时间来完成启动过程中一些必要的工作，如网络配置、服务启动等。如果系统在启动过程中遇到问题，等待时间可以给系统提供足够的时间来尝试解决问题，避免系统在遇到问题时立即崩溃或无法正常启动。同时，等待时间也可以保证系统在启动完成后能够及时提供服务，提高系统的可用性和可靠性。但是，如果等待时间过长，会导致系统启动时间过长，影响用户体验。因此，需要根据实际情况设置合理的等待时间，以保证系统的正常启动和运行。