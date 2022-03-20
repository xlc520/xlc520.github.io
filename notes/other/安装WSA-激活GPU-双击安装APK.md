---
author: xlc520
title: 安装WSA-激活GPU-双击安装APK
description: 安装WSA-激活GPU-双击安装APK
date: 2022-02-11
category: other
tag: other
article: true
timeline: true
icon: 
password: 
---
# 安装WSA-激活GPU-双击安装APK

仅支持Windows11（包含正式版、RP、Beta、Dev）
》》》 目 录 《《《
1.安装WSA本体（必装）
2.激活GPU（普通用户请跳过！！！）
3.安装“安装程序”（选装）
4.安装ADB（选装）
5.安装Android应用
6.卸载Android应用
7.注意事项
8.参考链接

【1 安装WSA本体】
\-
① 微软商店程序抓包网址： [查看链接](https://store.rg-adguard.net/)
② WSA微软商店链接： [查看链接](https://www.microsoft.com/store/productId/9P3395VX91NR)
\-
1.打开①链接，在输入框中输入②，选择Slow通道，确认，下载最底下的"MicrosoftCorporationII.WindowsSubsystemForAndroid_1.7.32815.0_neutral_~_8wekyb3d8bbwe.msixbundle"
(注：四个选项与Windows渠道相对应，Fast-Dev渠道，Slow-Beta渠道，RP-RP渠道和Retail-正式版，目前只有Beta版本有发布)

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/538951_b9fb4b26_4742_3909@854x219.png.m.jpg)

输入下载地址，选择正确通道

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/538951_6e58f04a_4742_3911@1234x333.png.m.jpg)

选择最新安装包

2.右键Windodws徽标，选择"Windows终端（管理员）"输入命令 add-appxpackage "文件路径/文件名"，回车，安装完成

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/538951_d413f6bb_4742_3913@834x644.png.m.jpg)

打开终端

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/538951_6907ae9d_4742_3915@1129x631.png.m.jpg)

输入指令

3.开启主板虚拟化支持，具体按照各BIOS进行设置（新购买电脑一般已开启主板虚拟化支持）
4.系统中开启Hyper-V和虚拟机平台，打开资源管理器，在路径中输入中文"控制面板"，回车，即可进入控制面板，选择程序-程序和功能-启用或关闭Windows功能，开启"Hyper-V"和"虚拟机平台"，确定，重启

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/538951_fac9b857_1334_2244@1499x962.png.m.jpg)

资源管理器可以直接进入控制面板

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/538951_c335fb7e_1334_2246@1499x962.png.m.jpg)

按图开启Windows功能

5.完成，Enjoy it.

【2 激活GPU】（普通用户无需进行该项设置！！！）
\-
INTEL英特尔：
[查看链接](https://www.intel.com/content/www/us/en/download/19344/intel-graphics-windows-10-windows-11-dch-drivers.html)
NVIDIA英伟达（经验证无效，请使用官网最新驱动）：
[查看链接](https://developer.nvidia.com/cuda/wsl/download)
AMD超微半导体：
[查看链接](https://www.amd.com/en/support/kb/release-notes/rn-rad-win-wsl-support)
opengl3支持：
[查看链接](https://www.microsoft.com/store/productId/9NQPSL29BFFF)
\-
1.下载安装对应显卡驱动和opengl3支持，安装后重启
（注：具体是否成功受概率等玄学因素影响，Intel驱动如果安装失败可尝试再次安装；未测试是否影响调用，建议普通用户跳过该步骤）
2.设置中开启高性能模式，设置-系统-显示-图形，应用的自定义选项-浏览，添加WSA，选择WSA，图形首选项选择高性能，保存

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/538951_7b0d9d68_3027_155@1775x1115.png.m.jpg)

打开设置

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/538951_d40bb361_3027_1552@1775x1115.png.m.jpg)

添加WSA

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/538951_6185d916_3027_1554@1775x1115.png.m.jpg)

选项中选择高性能模式

3.显卡设置中开启高性能模式（以N卡为例，集显和A卡请自测），NVIDIA控制面板-管理3D设置-添加-选择WSA，确定，并调整WSA首选图形处理器为高性能NVIDIA处理器

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/538951_1a2bee58_3028_9618@974x1199.png.m.jpg)

打开NVIDIA控制面板并添加WSA

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/538951_c9c477e5_3028_9619@974x718.png.m.jpg)

选择高性能NVIDIA处理器

4.重启，完成

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/538951_451e5133_3028_9621@503x909.png.m.jpg)

安兔兔GPU显示分数，但很低

【3 安装“安装程序”】
\-
APKInstaller： [查看链接](https://github.com/Paving-Base/APK-Installer/releases)

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/538951_b0236f41_4742_3917@835x388.png.m.jpg)

安装程序可以直接桌面显示apk且可以双击安装

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/538951_76800999_4742_3919@636x405.png.m.jpg)

以WinUi的界面进行安卓程序的安装

\-
1.下载最新压缩包，如"APKInstaller.Package._0.0.1.0_Test.rar"
2.解压缩
3.开启旁加载模式，设置-隐私和安全性-开发者选项-开启"从任意源（包括松散文件）安装应用"

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/538951_3f879f05_4742_392@1775x1115.png.m.jpg)

打开开发人员模式

4.右键msixbundle文件，如"APKInstaller (Package)_0.0.1.0_x86_x64_arm64.msixbundle"，属性-数字签名-双击签名列表中的签名-查看证书-安装证书-本地计算机-将所有的证书都放入下列储存-受信任人-完成

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/538951_e89acd6b_6561_4202@1352x952.png.m.jpg)

打开属性

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/538951_ef4554ea_4742_3922@2091x745.png.m.jpg)

安装程序证书 1

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/538951_bef29485_4742_3924@1072x746.png.m.jpg)

安装程序证书 2

5.双击msixbundle文件，如"APKInstaller (Package)_0.0.1.0_x86_x64_arm64.msixbundle"，自动安装框架，然后提示安装失败
6.右键"Install.ps1"选择"使用PowerShell运行"

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/538951_ee8ded6d_4746_3735@1352x952.png.m.jpg)

安装程序本体

7.安装完成

【4 安装ADB】
\-
最新ADB： [查看链接](https://dl.google.com/android/repository/platform-tools-latest-windows.zip)
\-
1.下载解压缩，将文件夹内的所有文件复制到"C:\Users\用户名"下即可

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/538951_772f1dd4_4746_3737@1365x957.png.m.jpg)

安装adb在正确的位置，无需配置环境变量

【5 安装Android应用】
\-
方法一（ADB安装）：
1.打开"Windows Subsystem for Android™"，打开"开发人员模式"

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/538951_43576668_4746_3739@1003x813.png.m.jpg)

打开WSA

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/538951_2a149b56_4746_374@1200x932.png.m.jpg)

开启开发人员模式，注意未启动WSA不能安装程序

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/538951_9f6776e4_4746_3742@636x388.png.m.jpg)

启动WSA

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/538951_ffb679db_4746_3744@1200x932.png.m.jpg)

启动成功，可以安装应用

2.确保已正确安装ADB，Win+R，输入"CMD"，回车，输入指令"adb connect 127.0.0.1:58526"
3."adb install （将安装文件拖入此处）"，回车，安装完成
\-
方法二（安装器安装）：
1.确保已正确安装APKInstaller，双击.apk的安卓程序进行安装，根据指引打开"开发人员模式"
（注：Android子系统必须处于开机状态才能进行安装，可以点击WSA中"开发人员模式"下"管理开发人员设置"唤醒）

【6 卸载Android应用】
\-
1.列表中直接右键卸载即可

【7 注意事项】
1.该教程基于Windows11专业版制作，如家庭版没有某些选项，可以百度其他打开的方式
2.如果遇到鼠标无法点击的情况，如登录酷安，可以使用tab键切换组件
3.提示WiFi连接问题：[查看链接](https://www.uso.cn/post/view/47990)
4.PowerShell运行ps1文件的问题：[查看链接](https://m.jb51.net/os/win10/728455.html)
5.Windows家庭版没有PowerShell的问题：[查看链接](https://blog.csdn.net/houmenghu/article/details/103876847)

【8 参考链接】
\-
WSA安装： [查看链接](https://www.coolapk.com/feed/30833815?shareKey=NGRjZTFhMjYxNTQ2NjE3MmNmMmU~&shareUid=538951&shareFrom=com.coolapk.market_11.4.3)
GPU驱动： [查看链接](https://www.coolapk.com/feed/30854918?shareKey=Y2ZiMjNmN2E4NWM2NjE3MmNmMmU~&shareUid=538951&shareFrom=com.coolapk.market_11.4.3)
APKInstaller： [查看链接](https://www.coolapk.com/feed/30857122?shareKey=OTAzN2JmMDBmZTg3NjE3MmNmMDM~&shareUid=538951&shareFrom=com.coolapk.market_11.4.3)