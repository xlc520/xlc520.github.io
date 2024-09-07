---
title: ubuntu22.04安装完后硬盘变小
excerpt:
description: ubuntu22.04安装完后硬盘变小
date: 2024-09-05
category: Linux
tag: Linux
author: xlc520
article: true
timeline: true
icon: linux
---

```component VPBanner
title: ubuntu22.04安装完后硬盘变小
content: ubuntu22.04安装完后硬盘变小
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: ubuntu22.04安装完后硬盘变小
    link: /linux/ubuntu22.04安装完后硬盘变小
```

# ubuntu22.04安装完后硬盘变小

1、200G的硬盘，安装完后发现只有不足100G可用

```sh
df -hl
```

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/813760-20230202145815183-1240776648.png)

2、fdisk查看明明有个198GB

```sh
fdisk -l
```

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/813760-20230202145906457-5006658.png)

3、发现有99G，25344没有分配

```sh
#查看lvm卷信息 
vgdisplay  
# 如果看到 Free PE / Size > 0，表示还有扩容空间
或
lvm vgdisplay -v
```

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/813760-20230202150000489-404066111.png)

4、分配并退出

扩容命令

```sh
//按百分比扩
lvresize -l  +100%FREE /dev/mapper/ubuntu--vg-ubuntu--lv
#lvextend -l+25344 /dev/mapper/ubuntu--vg-ubuntu--lv
#lvextend -L 10G /dev/mapper/ubuntu--vg-ubuntu--lv      //增大或减小至19G
#lvextend -L +10G /dev/mapper/ubuntu--vg-ubuntu--lv     //增加10G
#lvreduce -L -10G /dev/mapper/ubuntu--vg-ubuntu--lv     //减小10G
```

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/813760-20230202150025752-776455839.png)

5、使调整生效，看看是ext还是xfs的文件系统

```sh
df -lhT
```

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/813760-20230202150123452-1918517431.png)

如果是xfs

```
xfs_growfs /dev/mapper/ubuntu--vg-ubuntu--lv
```

如果是ext

```
resize2fs /dev/mapper/ubuntu--vg-ubuntu--lv
```

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/813760-20230202150225853-582345423.png)

6、查看结果

```sh
df -lhT
#检查扩容结果
vgdisplay
```

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/813760-20230202150244365-1687978067.png)




<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
