---
author: xlc520
title: 摩托罗拉X40X30S30Pro全机型解锁BL
description: 
date: 2023-01-02
category: daily
tag: daily
article: true
timeline: true
icon: type
password: 
---

# 摩托罗拉X40/X30/S30Pro全机型解锁BL

摩托罗拉和联想手机一样，都一样可以官方解锁BL，不同于联想手机的sn文件解锁，摩托罗拉的解锁实际是一串字母，也就是大家常说的解锁码。国内摩托罗拉的手机销量并不是很多，导致这块的解锁BL+刷机root资源非常少，新手基本无从下手。下面ROM乐园小编就教大家自己学习解锁你的手机BL锁，这也是你获取root的必经之路，支持摩托罗拉S30 X30Edge等全系列。对于第一次解锁BL的用户来说，你需要备份重要文件，解锁BL会清空手机全部数据，并且手机安全等级降低。解锁BL后才能刷入ROOT，手机一旦获取root后，将失去更新升级系统功能，想要恢复更新就必须刷回官方未root版本系统

刷机准备

ADB工具箱：

http://www.romleyuan.com/lec/read?id=351

注册1个摩托解锁账户：

https://motorola-global-portal.custhelp.com/app/standalone/bootloader/unlock-your-device-a

（部分网络注册失败，请自行研究）

第一步：手机进设置-关于手机，连续点击版本号8次，打开隐藏的开发者选项。回到设置找到开发者选项进入，再在开发者选项里，我们直接打开USB调试+oem解锁两个按钮。如果你的OEM解锁是可以开关的，代表你的机型需要打开oem再进行解锁BL，如果你的oem已经变成了灰色不能选择状态，那么恭喜，您的设备已经解锁成功



![图片](https://static.xlc520.ml/blogImage/640-1672653580048-0.jpeg)

第二步：手机连接电脑，打开ADB工具箱，并且安装驱动（不会的可直接360驱动检测）

输入adb reboot bootLoader 回车，手动自动进入BootLoader状态

再次输入fastboot oem get_unlock_data 回车，成功读取一堆

![图片](https://static.xlc520.ml/blogImage/640-1672653580048-1.jpeg)

第三步:打开你的摩托罗拉解锁账户地址：

https://motorola-global-portal.custhelp.com/app/standalone/bootloader/unlock-your-device-a

将我们第2步生成的unlock数值去掉括号和括号里面的bootloader还有不必要的问题，然后生成一个很长的数值，可能非常长，但千万不要去除错了字母数字符号，将很长的内容复制下面的框框里。这一步非常重要，错误填写都将导致解锁失败

![图片](https://static.xlc520.ml/blogImage/640-1672653580048-2.jpeg)

第四步：获取解锁具体的unlock Code文件解锁。将第三步生成的内容，复制到下图对应位置，直接点击“Can my device beunlocked?”，一路同意，很快我们就成功获取自己机型的unlock Code啦，也就是大家常常说的解锁码。为了安全，请妥善保存好解锁码数字

![图片](https://static.xlc520.ml/blogImage/640-1672653580048-3.jpeg)

第五步：在fastboot模式下，我们直接输入fastboot oem  unlock ******** 回车这个******** 就是我们上一步获取的解锁码数字，可复制进入直接回车

![图片](https://static.xlc520.ml/blogImage/640-1672653580048-4.jpeg)

当执行解锁命令并且解锁码正确的时候，手机立马进入解锁引导界面，用音量下移动到UNLOCK THE BOOTLOADER上，然后按1次开机按键，系统就立马自动解锁BL+清空数据开机啦。首次开机较慢，开机完成oem会变成灰色，至此解锁BL成功。解锁BL后，那么面具ROOT就支持刷入修改的magisk_root文件，获取权限啦。如动手能力不强的，也可以联系ROM乐园官方技术团队，在线远程刷机root救砖等，安全快速

摩托罗拉ROM刷机包下载：

http://www.romleyuan.com/romdown/motorola

ROM乐园官方在线帮刷服务：

http://www.romleyuan.com/lec/read?id=70