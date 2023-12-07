---
author: xlc520
title: 出厂安卓11及以上+VAB分区的机型刷入Magisk框架获取ROOT教程
description: 
date: 2023-11-27
category: daily
tag: daily
article: true
timeline: true
icon: type
---

# 出厂安卓11及以上+VAB分区的机型刷入Magisk框架获取ROOT教程

总得来说，现阶段对于【出厂】就是基于 Android 11 （**并且是V-AB 分区结构**）及以上系统底层的机型刷入完整可用的 Magisk ROOT 权限主要步骤如下

**① 解除BL锁（****前提****）**

**② 获取到当前机型系统的版本****卡刷包****固件**

**③ 通过工具“payload_dumper”****解包****固件中的** **payload.bin** **获得** **boot.img**

**④ 使用 Magisk Manager** **修补 boot.img**

**⑤ 通过“platform-tools”将修补并打包好的 boot.img** **使用 fastboot 命令** **刷入到手机**



掌握这几个步骤，你基本可以给大部分机型制作修补boot镜像从而获取ROOT权限了。



 **对于上述ROOT攻略的补充说明** 

（1）此方法需要一台 Windows 电脑。【出厂】安卓11的意思是，一台手机的第一个系统版本底层是安卓11，而不是通过系统更新的方式升级到安卓11。

（2）小米手机MIUI各版本固件可以在这里下载（记得下载卡刷包的固件）：

https://xiaomirom.com/



![图片](https://static.xlc520.tk/blogImage/640-1700829770473-0.png)



其他厂商机型的固件可以在它们的系统官网上获得。



（3）**payload_dumper** 工具官方下载。

Go 版：https://github.com/ssut/payload-dumper-go/releases

Python 版：https://androidfilehost.com/?fid=818070582850510260



**二者的区别**

Go 版：支持提取固件中的指定内容，例如只提取 boot.img 文件，支持多线程工作；支持 Windows、Linux 等多个平台



![图片](https://static.xlc520.tk/blogImage/640-1700829770473-1.png)



Python 版：提取固件中的全部内容；仅支持 Windows 系统。

为了方便起见，一般推荐使用 Python 版。



如果你无法使用 payload_dumper 提取 boot.img，也可以在手机上下载好刷机包以及软件 MT 文件管理器。下载好刷机包之后，直接使用 MT 管理器打开它，找到刷机包中的 payload.bin 这个文件，点击打开，就可以看到 payload.bin 里面的文件。



![图片](https://static.xlc520.tk/blogImage/640-1700829770473-2.png)



点击你想要的文件（这里以 boot.img 为例），在弹出的窗口中选择「解压」，确定，然后你就能到解压后的目录中找到需要的 boot.img 文件了。



![图片](https://static.xlc520.tk/blogImage/640-1700829770473-3.png)



这种方法使用手机操作，比较简单，速度更快，推荐使用。



（3）提取完 boot.img 之后，使用 fastboot 命令刷入 boot.img 需要用到 **platform-tools** 。先在电脑上解压缩下载到的 platform-tools.zip，然后将解包之后获得（修补版 boot.img ）的、名为 magisk_patched-*****_*****.img 的文件从手机（文件所在目录：内部存储/Download）中移动到电脑上的 **platform-tools 根目录下（下图所示的目录）。**



![图片](https://static.xlc520.tk/blogImage/640-1700829770473-4.png)



![图片](https://static.xlc520.tk/blogImage/640-1700829770473-5.png)



随后将手机重启至fastboot模式(以MIUI为例：关机后，同时按住开机键和音量下键)。



在 platform-tools 根目录的地址栏输入“**cmd**”三个字母，按回车键即可打开命令行，并自动定位到当前文件夹。



![图片](https://static.xlc520.tk/blogImage/640-1700829770473-6.jpeg)

![图片](https://static.xlc520.tk/blogImage/640-1700829770474-7.gif)



![图片](https://static.xlc520.tk/blogImage/640-1700829770474-8.png)

（命令行页面必须出现这个）

然后在命令行页面输入“**fastboot devices**”，回车，即可输出当前已链接设备的序列号（如果没有输出任何内容，可能是电脑系统缺少安卓fastboot驱动，文末会提供），这就意味着手机已经连接成功。接下来就可以刷入 boot.img 了。



![图片](https://static.xlc520.tk/blogImage/640-1700829770474-9.png)



使用 fastboot 命令刷入 boot.img

**fastboot flash boot magisk_patched-\**\**\*_\**\**\*.img**



例如（注意空格）：

**fastboot flash boot magisk_patched-****25200****_****5isa6****.img**



![图片](https://static.xlc520.tk/blogImage/640-1700829770474-10.png)



刷完后，使用 fastboot 命令重启系统

**fastboot reboot**



（4）Magisk Manager 建议使用最新的稳定版。通过 Magisk Manager 修补后的 boot 镜像，默认存储在 内部存储/Download 目录下。



![图片](https://static.xlc520.tk/blogImage/640-1700829770474-11.png)



（5）对于类似于小米13 系列机型（安卓底层「出厂」版本高于安卓11 ）来说，由于安卓 13 已经将 ramdisk 从 boot.img 中移除，并单独放到了 init_boot.img 中，而 Magisk 主要是往 ramdisk 中打补丁，因此这种情况下，系统版本『出厂』就是安卓 13 的机型获取 ROOT 过程相比安卓 12 有所变化：上述需要修补的和刷入的文件变为了 init_boot.img，而不是此前的 boot.img 。同时刷入的命令也有所不同。



![图片](https://static.xlc520.tk/blogImage/640-1700829770474-12.png)



使用 fastboot 命令刷入 init_boot.img

**fastboot flash init_boot magisk_patched-\**\**\*_\**\**\*.img**



刷完后，使用 fastboot 命令重启系统

**fastboot reboot**



（6）使用联发科处理器的机型，请谨慎解锁ROOT刷机，风险较高，一旦变砖黑屏，需要去售后，无法像高通那样通过 9008 的方式强刷开机，非常麻烦。

（7）有能力的读者建议多使用 ADB 命令，可以直观的了解到各种步骤以及核心的原理，方便之后换机或者有些地方有小改动的时候，自己可以快速的上手。如果你嫌麻烦，也可以使用从酷安找到一些第三方的一键刷入Boot工具。