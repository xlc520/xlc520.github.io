---
author: xlc520
title: ESXI-iKuai-OpenWrt
description: 
date: 2022-10-02
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
---

# ESXI-iKuai-OpenWrt

### 一、安装准备

1. 主机一台
2. U盘一个
3. Rufus 3.13 （简单快速制作USB启动盘软件）
4. ESXI 6.7.0 U3固件
5. iKuai8_x64_3.4.7固件（最新版本为3.4.9，可以直接下载最新版本，也可以安装后升级）
6. StarWind Converter（虚拟磁盘格式转换工具）
7. OpenWrt-x86-64固件

安装需要用到工具安装包、固件，网上教程非常多，直接自行下载，非常简单。建议官网下载。

### 二、制作ESXI安装启动盘

Rufus这个工具非常简单好用，可以快速把镜像文件写入U盘并制作启动项 。

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044f19d946338328.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_3/)

Rufus界面也很友好，在引导类型选项后选择ESXI 6.7.0 U3镜像位置，其余设置保持默认，点击开始便可以写入U盘，需要注意的是设备选项中是否为所选U盘

### 三、安装ESXI

将制作好的U盘插入机器，插上键盘，开机按F2进入BIOS将引导改为UEFI引导

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044f2d8bf5632687.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_4/)

保存并退出后会自动重启，按F12选择U盘启动

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044f31554cd52684.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_5/)

U盘启动后会出现几个读条的画面，没来得及拍下，请耐心等待

在这个界面，上方会显示安装的版本号、本机CPU及内存信息

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044f44667fd97934.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_6/)

安装界面，敲回车键继续

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044f4ec3b6371683.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_7/)

用户协议，按F11继续

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044f51faec014881.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_8/)

这里是选择安装设备，一定要注意选对安装的[硬盘](https://www.smzdm.com/fenlei/yingpan/)，不要安装在引导的U盘里

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044f54bec7ba612.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_9/)

会扫描所选的硬盘，然后会提示所选硬盘将被清空，敲回车确认

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044f5b47848f4343.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_10/)

键盘布局，默认即可，敲回车继续

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044f670664c13094.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_11/)

设置登录密码，这里需要注意，EXSI密码安全级别较高，必须包括四个字符类的字符混合：小写字母，大写字母，数字和特殊字符

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044f6e3c7e2c1235.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_12/)

安装确认，确认版本、安装位置，并提示会清空硬盘，按F11继续

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044f7095dbfe4403.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_13/)

接下来就是等待安装完成了

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044f7751dd556739.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_14/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044f7745a2189639.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_15/)

安装完成后选择第一项在重启前移除安装介质，拔掉U盘，敲回车后重启，至此ESXI就安装结束了

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044f7c6c852e1531.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_16/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044f7e46d19d1595.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_17/)

### 四、ESXI控制台设置

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044f824a938f4746.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_18/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044f8246fc8b8821.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_19/)

加载结束后，按F2，输入密码即可进入后台管理界面，默认用户名为root

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044f879b40ce1255.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_20/)

选择第三项，设置管理网络

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044f8a473b956366.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_21/)

首先选第一项，配置网卡

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044f8e3a6d545628.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_22/)

因为EXSI的机制跟BIOS的不一样，导致网卡的顺序是不一样的

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044f9152c2855108.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_23/)

其实通过看MAC地址的最后两位也能知道网卡的顺序，方向键移动到第一个网口，空格键选定，再敲回车

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044fad9022992726.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_24/)

再敲Esc，按y确认

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044fb0a3ff7a7105.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_25/)

然后再配置一下管理IP

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044fb4eec7203707.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_26/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044fb50609ae9368.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_27/)

方向键移动到第三项，选择静态IP，敲空格键选定

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044fb7152f024421.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_28/)

设置好静态IP、子网掩码、网关，敲回车，然后再敲Esc，弹出保存信息，按y确认

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044fab948843800.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_29/)



这里需要说明一下，由于我这是第一次折腾软路由，不敢直接插光猫上操作，而是接在[路由器](https://www.smzdm.com/fenlei/luyouqi/)下，这样一来就不至于因为自己的折腾而导致全家断网，强烈建议各位新手都这么操作，熟练后再将路由替换为软路由

我们需要先计划下各系统的IP地址

我个人的设置是：

EXSI：192.168.31.254

iKuai：192.168.31.253

OpenWrt：192.168.31.252

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044fdfd437287099.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_30/)

至此，EXSI后台设置已完成

**五、EXSI网页端设置**

将[网线](https://www.smzdm.com/fenlei/wangxian/)插入刚设置的管理网口

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044fe5dd8d9a7517.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_31/)

连上电脑，首先设置下电脑的网络设置，将IP改为静态IP，并且设置在ESXI管理地址的同一个网段下，这样才能顺利访问ESXI网页端

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044fe903c14b1112.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_32/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044fe90838de9708.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_33/)

输入刚才设置的IP地址

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044ff1f190201414.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_34/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044ff1f776d53884.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_35/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044ff1fa1b2c1018.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_36/)

输入账号密码

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044ff1f792021768.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_37/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044ff1fe9d864849.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_38/)

进入网页端管理界面

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044ff7d3ed482248.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_39/)

这里会提示为评估模式，60天后过期，需要自行激活，有条件的盆友请支持正版

具体设置在：管理-许可-分配许可证

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6044fffee17558060.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_40/)

接下来先配置虚拟[交换机](https://www.smzdm.com/fenlei/jiaohuanji/)，将链路设置混杂模式，让任意一个端口都可以管理到ESXI

网络-虚拟交换机-选中vSwitch0-操作-编辑设置

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045000e43e348856.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_41/)

把安全项下的三个选项全部选接受，然后点击保存，混杂模式设置完成

设置网卡直通

我这边计划将第一个网口设置为ESXI的管理口，第二、第三个网口直通给iKuai，第四个网口直通给OpenWrt

直通就是在这个系统中，将需要直通的硬件设备进行屏蔽，屏蔽后的硬件，我们可以给虚拟机，让这个虚拟机的使用效果达到和实体机一样的性能

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045f0247512e9316.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_42/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045f030917412270.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_43/)

设置完直通后需要重启

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045f04e85f691439.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_44/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045f0617fed23991.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_45/)

直通后这里就只能看到一个网口信息了

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045f07c6de7c7968.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_46/)

因为另外三个网口都已经直通，也就是在EXSI里屏蔽了

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045f0a2730a02438.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_47/)

### 六、安装iKuai主路由

首先创建虚拟机

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045f17c1d78c1460.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_48/)

创建类型选创建新虚拟机，点下一步

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045f19c763493775.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_49/)

虚拟机命名为iKuai，系统系列选Linux，系统版本选其他Linux（64位），点下一步

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045f1c6e06d22872.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_50/)

选择存储，因为只有一个硬盘，所以这里直接点下一步就行

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045f223d2d5c4946.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_51/)

接下来设置虚拟机的CPU核心及内存大小

CPU默认为1核，其实1核也够用，这个主要看自己的配置和需求，内存的话因为这里装的iKuai 64位版本，内存需要大于4G，如32位版本可少于4G内存，但必须大于1G，按需选择

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045f23132a0e6678.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_52/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045f27db93ea7194.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_53/)

CD/DVD驱动器这里选数据存储ISO文件

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045f336e2afa3216.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_54/)

选创建目录，命名为iKuai，然后上载iKuai固件，并选择固件

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045f36b904c47828.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_55/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045f3b5828a73426.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_56/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045f3f05b4908063.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_57/)

添加其他设备里选择PCI设备，点两下，将准备直通给iKuai的两个网卡选上

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045f3faefd451034.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_58/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045f425f1c741248.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_59/)

点下一步，就完成了

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045f4b594bea4508.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_60/)

### 七、iKuai控制台设置

选择虚拟机后，点击打开电源，等待片刻，点入其中即可看到启动过程

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045f53591b3e1633.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_61/)

启动完成后，开始正式安装iKuai到硬盘，输入1-回车，输入y-回车，安装iKuai到硬盘中，安装完成后会自动重启虚拟机，等待重启完成

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045f58ceddac9995.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_62/)



重启完成后即可看到如下界面

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045f5b6532c43249.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_63/)

输入2-回车，设置LAN/WAN地址

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045f5ffbfedb7021.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_64/)

输入0-回车，设置LAN1地址192.168.31.253，这个就是以后管理iKuai的地址

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045f61d74d01557.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_65/)

接下来绑定一下网卡，输入1-回车

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045fd046416c9148.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_66/)

可以看到现在连接的是个虚拟网卡，eth1和eth2才是刚直通的网卡

首先设置eth1为wan卡，输入set wan1 eth1，回车

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045fd045a68f1986.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_67/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045fd045e96e9472.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_68/)

到此，iKuai的控制台设置已完成

### 八、iKuai网页端设置

在浏览器中输入刚才设置的IP地址，连接iKuai

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045fe3e4a5ec1218.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_69/)

用户名及密码都是admin，会提示要求更改密码

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045fe59155b46023.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_70/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045fe954cce5264.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_71/)

接下来就是iKuai的主页面了，iKuai的界面也非常的友好

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045fea5ca4d31897.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_72/)

可以看到WAN口尚未绑定网卡，我们需要到网络设置-内外网设置-选择WAN口并绑定eth1口为WAN口,eth2口为LAN口

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6045ff1ad6d896866.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_73/)

在DHCP服务端点击添加，设置客户端地址段，网关设置为OpenWrt的IP

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/604601c14ca1b1306.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_74/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/60460384213c47419.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_75/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/60460388b25068709.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_76/)

绑定lan1后，我们的虚拟网卡将无法访问爱快了

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/604603b337a8e7246.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_77/)

这个时候，我们只要插上直通网口的网线，就可以访问了

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6046047f93a7e7212.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_78/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/604604999f99e6467.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_79/)

至此，iKuai主路由安装与设置全部完成

### 九、OpenWrt固件转换

由于OpenWrt一般不提供虚拟机格式，原生编译出来是IMG格式，所以我们需要用StarWind Converter转换成VMDK的格式

打开软件，直接点下一步

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/604605fd6009f435.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_80/)

选择IMG镜像的位置，点下一步

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/60460607b1dc14758.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_81/)

选择第3项，VMWare ESX server image格式，点下一步

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/60460610b2d426803.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_82/)

选择输出位置，点下一步

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6046061145f528268.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_83/)

等待100%完成转换，得到两个文件，一个.vmdk和一个flat.vmdk文件，两个文件等下都要用到

### 十、安装OpenWrt旁路由

OpenWrt的安装跟iKuai类似，同样再添加一个虚拟机，与之前一样选择Linux，版本为其他Linux（64位）

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6046153e925681326.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_84/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6046153e801b18543.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_85/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/60461572dfb508293.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_86/)

CPU我这里依然设置的是2个核心，内存也还是4G，这个其实可以不用这么富裕，可以根据自己的需求来配置

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/60461572d55df3971.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_87/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6046168c9e0c13714.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_88/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6046168ce139e9133.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_89/)

删除默认的8G硬盘，添加一个现有硬盘

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/604616a3f0e8b9851.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_90/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/604616bbafa835260.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_91/)

创建目录，命名为OpenWrt

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/604616dd3026c4283.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_92/)

上载刚才得到两个文件，一个.vmdk和一个flat.vmdk，记得这两个文件都要上传，并选择

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/60461743d94d17109.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_93/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/60461743e291b5002.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_94/)

添加剩下的最后一个直通的网卡，记得别选错了

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/604617592a77d3265.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_95/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/604617907ef209864.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_96/)

接下来点完成就ok了

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/604617b57a7151066.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_97/)

同样，在虚拟机中打开OpenWrt

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/604617d7acbbc8179.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_98/)

耐心等几秒钟，等代码条不动了后，敲一下键盘的回车键，出现下面这个样子，就代表成功了

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/60461866c19751080.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_99/)

手动输入代码：vi /etc/config/network，改变一下LAN口的信息

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/604618ac1f0c57776.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_100/)

将光标移动到config interface ‘lan’-option ipaddr处，按一下键盘上的 i 键，这时候就能改变内容了，将IP改为192.168.31.252

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/604618ac218358029.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_101/)

按一下Esc键，输入 :wq，保存，回车

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/60461904b46c24080.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_102/)

再输入 reboot ，回车，重启一下

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/60461904e515d1500.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_103/)

**十一、OpenWrt网页端配置**

等待重启完成后，在浏览器输入：192.168.31.252，就可以进入到OpenWrt的页面了

用户名是root，密码是passwrod

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/60461cae746677988.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_104/)

点击网络-接口，将用不到的WAN、WAN6删除

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/60461cae8c92d4902.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_105/)

点击LAN右边的修改

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/60461e8f854c73744.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_106/)

在基本设置里，网关改成iKuai的IP地址，DNS改成和iKuai的一样

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://qnam.smzdm.com/202103/08/60461ec87bfc71435.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_107/)

在DHCP[服务器](https://www.smzdm.com/fenlei/fuwuqi/)里，将忽略此接口打勾

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/60461ec86559f5960.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_108/)

在物理设置里，接口下将直通的网卡勾上，每一步记得点击保存并应用

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/60461ec89c37b5445.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_109/)

这样，OpenWrt就设置好了

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/604620692a2499823.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_110/)

在这个服务界面，有丰富的插件，可以实现各种功能，这就是要安装OpenWrt旁路由的原因![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/34.png)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/604620691c91a7067.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_111/)

### 十二、虚拟机自启动设置

难免会有断电或是需要重启软路由物理机的情况，进入ESXi网页端，管理-系统-自动启动，对两个虚拟机都点击启用

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6046229ab63254619.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_112/)

再点击配置，可以设置自动启动的时间

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/6046229a97c4c472.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_113/)

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/604620692f98f9225.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_114/)

记得保存，然后将网口都连上交换机，至此，所有设置都已完成

最后，记得在电脑的网络设置，将静态IP改为自动获取IP

[![生命在于折腾——J4105软路由一步一步安装ESXI+iKuai+OpenWrt](https://static.xlc520.tk/blogImage/604623c53f3986911.jpg_e1080.jpg)](https://post.smzdm.com/p/a7do53x9/pic_115/)