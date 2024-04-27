---
author: xlc520
title: 摩托罗拉X40X30S30Pro全机型解锁BL
excerpt: 摩托罗拉X40X30S30Pro全机型解锁BL
description: 摩托罗拉X40X30S30Pro全机型解锁BL
date: 2023-01-02
category: daily
tag: daily
article: true
timeline: true
icon: type
---

# 摩托罗拉 X40/X30/S30Pro 全机型解锁 BL

摩托罗拉和联想手机一样，都一样可以官方解锁 BL，不同于联想手机的 sn
文件解锁，摩托罗拉的解锁实际是一串字母，也就是大家常说的解锁码。国内摩托罗拉的手机销量并不是很多，导致这块的解锁 BL+刷机
root 资源非常少，新手基本无从下手。下面 ROM 乐园小编就教大家自己学习解锁你的手机 BL 锁，这也是你获取 root 的必经之路，支持摩托罗拉
S30
X30Edge 等全系列。对于第一次解锁 BL 的用户来说，你需要备份重要文件，解锁 BL 会清空手机全部数据，并且手机安全等级降低。解锁 BL
后才能刷入 ROOT，手机一旦获取 root 后，将失去更新升级系统功能，想要恢复更新就必须刷回官方未 root 版本系统

刷机准备

ADB 工具箱：

<http://www.romleyuan.com/lec/read?id=351>

注册 1 个摩托解锁账户：

<https://motorola-global-portal.custhelp.com/app/standalone/bootloader/unlock-your-device-a>

（部分网络注册失败，请自行研究）

第一步：手机进设置-关于手机，连续点击版本号 8 次，打开隐藏的开发者选项。回到设置找到开发者选项进入，再在开发者选项里，我们直接打开
USB 调试+oem 解锁两个按钮。如果你的 OEM 解锁是可以开关的，代表你的机型需要打开 oem 再进行解锁 BL，如果你的 oem
已经变成了灰色不能选择状态，那么恭喜，您的设备已经解锁成功

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1672653580048-0.jpeg)

第二步：手机连接电脑，打开 ADB 工具箱，并且安装驱动（不会的可直接 360 驱动检测）

输入 adb reboot bootLoader 回车，手动自动进入 BootLoader 状态

再次输入 fastboot oem get_unlock_data 回车，成功读取一堆

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1672653580048-1.jpeg)

第三步:打开你的摩托罗拉解锁账户地址：

<https://motorola-global-portal.custhelp.com/app/standalone/bootloader/unlock-your-device-a>

将我们第 2 步生成的 unlock 数值去掉括号和括号里面的 bootloader
还有不必要的问题，然后生成一个很长的数值，可能非常长，但千万不要去除错了字母数字符号，将很长的内容复制下面的框框里。这一步非常重要，错误填写都将导致解锁失败

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1672653580048-2.jpeg)

第四步：获取解锁具体的 unlock Code 文件解锁。将第三步生成的内容，复制到下图对应位置，直接点击“Can my device
beunlocked?”，一路同意，很快我们就成功获取自己机型的 unlock Code 啦，也就是大家常常说的解锁码。为了安全，请妥善保存好解锁码数字

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1672653580048-3.jpeg)

第五步：在 fastboot 模式下，我们直接输入 fastboot oem unlock ******** 回车这个******** 就是我们上一步获取的解锁码数字，可复制进入直接回车

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1672653580048-4.jpeg)

当执行解锁命令并且解锁码正确的时候，手机立马进入解锁引导界面，用音量下移动到 UNLOCK THE
BOOTLOADER 上，然后按 1 次开机按键，系统就立马自动解锁 BL+清空数据开机啦。首次开机较慢，开机完成 oem 会变成灰色，至此解锁 BL
成功。解锁 BL 后，那么面具 ROOT 就支持刷入修改的 magisk_root 文件，获取权限啦。如动手能力不强的，也可以联系 ROM
乐园官方技术团队，在线远程刷机 root 救砖等，安全快速

摩托罗拉 ROM 刷机包下载：

<http://www.romleyuan.com/romdown/motorola>

ROM 乐园官方在线帮刷服务：

<http://www.romleyuan.com/lec/read?id=70>
