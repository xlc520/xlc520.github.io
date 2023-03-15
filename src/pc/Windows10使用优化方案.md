---
author: xlc520
title: Windows10使用优化方案
description: Windows10使用优化方案
date: 2022-05-13
category: pc
tag: pc
article: true
timeline: true
icon: computer
---

# Windows10使用优化方案


【目录】

一、Windows10系统设置

1. 系统初步设置
   
2. 运用Dism++设置
   
3. 运用OOSU10设置
   
4. 禁用win10更新
   
5. 系统启动项管理
   

二、软件推荐

1. 系统安全
   
2. 浏览器

3. 办公学习

4. 下载工具
   
5. 卸载工具
   
6. 常用系统工具
   
7. 日常体验优化/美化
   
8.  视频/音频播放
   
9.  其他
    

## 【Windows10系统设置】

1. 系统初步设置

    ① 显示——缩放与布局 一般来说124％会比较清晰，但还是看个人设备吧 

   ② 存储——存储感知 将自动释放空间打开

![img](https://static.xlc520.ml/blogImage/windows1076.png) 

存储感知自动释放设置

③ 剪贴板——历史记录 将剪贴板历史记录打开，可以批量复制 

④ WLAN——按流量计费 将连接的WiFi改成已流量计费，据说能限制不必要的后台抢网络![img](https://static.xlc520.ml/blogImage/windows1077.jpg)

![img](https://static.xlc520.ml/blogImage/windows1078.png) 

按流量计费连接设置

⑤ 传递优化——关闭允许从其他电脑下载

![img](https://static.xlc520.ml/blogImage/windows1079.png) 

传递优化设置

⑥ 禁用Win10特效 此电脑→属性→高级系统设置→性能设置

![img](https://static.xlc520.ml/blogImage/windows1080.png) 

禁用win10特效

⑦ 禁用计算机更改消息 更改用户账户控制设置→直接拉到底![img](https://static.xlc520.ml/blogImage/windows1081.jpg)

![img](https://static.xlc520.ml/blogImage/windows1082.png) 

禁用计算机更改消息

2. 运用Dism++设置 一般新电脑到手之后，我们都会系统更新一下（这应该是个漫长的过程），同时C盘的剩余空间也会以肉眼可见的速度减少![img](https://static.xlc520.ml/blogImage/windows1083.jpg)，所以在更新完后，我们就需要清理下C盘了![img](https://static.xlc520.ml/blogImage/windows1084.jpg) 这里我们用到的是Dism++的空间回收功能![img](https://static.xlc520.ml/blogImage/windows1085.jpg)，反正经过一顿操作，C盘又变成了当初的那个少年![img](https://static.xlc520.ml/blogImage/windows1086.jpg) 除了Dism++的空间回收，用的更多的是它的系统优化，这里的系统优化选项非常的多，例如修改资源管理器的开始界面、右键菜单管理、关闭快速启动和休眠等等![img](https://static.xlc520.ml/blogImage/windows1087.jpg)![img](https://static.xlc520.ml/blogImage/windows1088.jpg)![img](https://static.xlc520.ml/blogImage/windows1089.jpg)

![img](https://static.xlc520.ml/blogImage/windows1090.png) 

Dism++界面

3. 运用OOSU10设置 OOSU10对win10的设置修改，比Dism++更详细、更全面 因为选项太多了，我一般都是直接应用推荐配置，当然修改之前最好做个备份![img](https://static.xlc520.ml/blogImage/windows1091.jpg)![img](https://static.xlc520.ml/blogImage/windows1092.jpg)![img](https://static.xlc520.ml/blogImage/windows1093.jpg)

![img](https://static.xlc520.ml/blogImage/windows1094.png) 

OOSU10界面

（当然，windows10还有个上帝模式，可以对各项设置进行修改。进入上帝模式的方法：在桌面新建一个文件夹，重命名为 .{ED7BA470-8E54-465E-825C-99712043E01C}，打开即可进入上帝模式![img](https://static.xlc520.ml/blogImage/windows1095.jpg)）

4. 禁用Windows更新 众所周知，windows10俗称bug10，为了避免这个问题，同时也避免很多的features更新，防止C盘占满，我们需要滞后一个win10大版本更新![img](https://static.xlc520.ml/blogImage/windows1096.jpg) 我直接用的是一个小exe程序（windows禁用更新）禁用windows更新（在胡萝卜周上找到的![img](https://static.xlc520.ml/blogImage/windows1097.jpg)）

![img](https://static.xlc520.ml/blogImage/windows1098.png) 

Windows禁用更新界面

5. 系统启动项管理 随着我们安装软件越来越多，系统启动项也就越来越多 我采用的系统启动项管理方案是：联想电脑管家/火绒 + 系统直接修改，主要是因为系统直接修改比较繁杂，而软件管理有时候也不太全面有效![img](https://static.xlc520.ml/blogImage/windows1099.jpg) 联想电脑管家/火绒就不多说了![img](https://static.xlc520.ml/blogImage/windows10100.jpg)（ps：联想电脑管家采用的也是火绒内核） 这里主要说一下系统直接修改启动项![img](https://static.xlc520.ml/blogImage/windows10101.jpg)

![img](https://static.xlc520.ml/blogImage/windows10102.png) 

任务管理器修改启动项

有时候关闭一些启动项很容易，直接在任务管理器的启动中禁用就可以，但是当我们需要添加一些小程序的启动项，就显得比较麻烦 这里我采用的方法是：在开机启动文件夹中修改，在运行（win+R）中粘贴以下路径打开 %USERPROFILE%\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup 然后，我们直接将软件的快捷方式删除或者添加到这个文件夹中即可![img](https://static.xlc520.ml/blogImage/windows10103.jpg)![img](https://static.xlc520.ml/blogImage/windows10104.jpg)![img](https://static.xlc520.ml/blogImage/windows10105.jpg)

![img](https://static.xlc520.ml/blogImage/windows10106.png) 

开机启动文件夹





## 【软件推荐】 

1. 系统安全 当然是众所周知的火绒和联想电脑管家（ps：联想电脑管家用的就是火绒内核），而联想电脑管家还有个极速模式，不知道是不是图个心里安慰![img](https://static.xlc520.ml/blogImage/windows10107.jpg)![img](https://static.xlc520.ml/blogImage/windows10108.jpg)![img](https://static.xlc520.ml/blogImage/windows10109.jpg)

![img](https://static.xlc520.ml/blogImage/windows10110.png) 

联想电脑管家极速模式

当然，如果不用这些，windows defender也足够了

2. 浏览器 当然是Chromium内核的天下了![img](https://static.xlc520.ml/blogImage/windows10111.jpg)，这里推荐Chromium内核的edge，以及chrome 由于在chromium内核的edge推出之前，我已经用了很久的chrome，所以不太想从chrome搬到edge，主要还是因为chrome上的账号同步![img](https://static.xlc520.ml/blogImage/windows10112.jpg)![img](https://static.xlc520.ml/blogImage/windows10113.jpg)![img](https://static.xlc520.ml/blogImage/windows10114.jpg) 当然还有很多其他chromium内核的浏览器，比如360极速、cent等等，用过了这些之后，我还是选择回到原生chrome，但选的是修改版的chrome++（[查看链接](https://shuax.com/project/chrome/)） 在这部分，我再推荐一些个人常用的chrome插件![img](https://static.xlc520.ml/blogImage/windows10115.jpg)： ① Grammarly for Chrome —— 拼写语法检查纠错

![img](https://static.xlc520.ml/blogImage/windows10116.png) 

Grammarly for Chrome

② IDM —— 自动抓取浏览器下载，速度没的说 ③ infinity —— 新标签启动页，可以账号同步

![img](https://static.xlc520.ml/blogImage/windows10117.png) 

infinity标签页

④ SimpleExtManager —— 插件管理，非常简洁

![img](https://static.xlc520.ml/blogImage/windows10118.png) 

SimpleExtManager

⑤ Vimium —— 浏览器手势操作，个人喜欢用触摸板

![img](https://static.xlc520.ml/blogImage/windows10119.png) 

Vimium

⑥ 书签侧边栏 —— 因为chrome书签在不显示书签栏的情况下，打开书签栏非常繁琐，所以装了这个插件

![img](https://static.xlc520.ml/blogImage/windows10120.png) 

书签侧边栏

⑦ Google Keep —— 做小记录 ⑧ Adblock Plus —— 拦截广告，非常强力

![img](https://static.xlc520.ml/blogImage/windows10121.png) 

Adblock Plus

⑨ bilibili哔哩哔哩下载助手

![img](https://static.xlc520.ml/blogImage/windows10122.png) 

bilibili哔哩哔哩下载助手

⑩ 购物党自动比价工具 —— 省心

![img](https://static.xlc520.ml/blogImage/windows10123.png) 

购物党自动比价工具

3. 办公学习 ① office ② Adobe —— 我关注的是微博vposy大佬的更新

![img](https://static.xlc520.ml/blogImage/windows10124.png) 

微博vposy大佬

③ Notion —— 近两年国内外非常火![img](https://static.xlc520.ml/blogImage/windows10125.jpg)

![img](https://static.xlc520.ml/blogImage/windows10126.png) 

Notion界面

④ Xmind —— 思维导图，网页端我用的是processon

![img](https://static.xlc520.ml/blogImage/windows10127.png) 

Xmind界面

⑤ Mathpix —— 数学公式识别

![img](https://static.xlc520.ml/blogImage/windows10128.png) 

Mathpix

⑥ MathType —— 数学公式编辑

![img](https://static.xlc520.ml/blogImage/windows10129.png) 

MathType

4. 下载工具 ① IDM —— 不多说了，我直接入的正版![img](https://static.xlc520.ml/blogImage/windows10130.jpg)

![img](https://static.xlc520.ml/blogImage/windows10131.png) 

IDM界面

② 迅雷X —— 主要用于磁力链接

5. 卸载工具 ① IObit Uninstaller —— 卸载后自动删除注册表，已入正![img](https://static.xlc520.ml/blogImage/windows10132.jpg)

![img](https://static.xlc520.ml/blogImage/windows10133.png) 

IObit Uninstaller界面

② Geek Uninstaller

![img](https://static.xlc520.ml/blogImage/windows10134.png) 

Geek Uninstaller界面

6. 常用系统工具 ① CCleaner —— 可以清理注册表

![img](https://static.xlc520.ml/blogImage/windows10135.png) 

CCleaner界面

② Dism++ ③ IObit Unlocker —— 主要用于解锁那些临时删除或修改不了的文件

![img](https://static.xlc520.ml/blogImage/windows10136.png) 

IObit Unlocker界面

7. 日常体验优化/美化 ① 鼠标指针外观修改 个人比较喜欢deepin的鼠标指针![img](https://static.xlc520.ml/blogImage/windows10137.jpg)

![img](https://static.xlc520.ml/blogImage/windows10138.png) 

鼠标指针外观修改

② 任务栏外观修改 主要可以采用TranslucentTB和StartlsBack++修改 ③ 腾讯桌面Lite版 ④ flux —— 在晚上自动开启护眼模式，帮助入眠

![img](https://static.xlc520.ml/blogImage/windows10139.png) 

flux界面

⑤ Snipaste —— 比win10自带截图好，我用的最多的是截图置顶，还有截图标注等功能

![img](https://static.xlc520.ml/blogImage/windows10140.png) 

Snipaste

⑥ T-Clock —— 自定义任务栏上的日期时间的显示方式

![img](https://static.xlc520.ml/blogImage/windows10141.png) 

T-Clock任务栏效果图

⑦ TrafficMonitor —— 实时显示上下载、CPU和内存

![img](https://static.xlc520.ml/blogImage/windows10142.png) 

TrafficMonitor任务栏效果图

⑧ Mem Reduct —— 任务栏上非常简洁的内存释放小程序

![img](https://static.xlc520.ml/blogImage/windows10143.png) 

Mem Reduct界面

⑨ QuickLook —— windows文件快速预览

![img](https://static.xlc520.ml/blogImage/windows10144.png) 

QuickLook

8. 视频/音频播放 ① MPC - HC

![img](https://static.xlc520.ml/blogImage/windows10145.png) 

MPC - HC界面

② Potplayer

![img](https://static.xlc520.ml/blogImage/windows10146.png) 

Potplayer界面

9. 其他 ① 酷安UWP![img](https://static.xlc520.ml/blogImage/windows10147.jpg)![img](https://static.xlc520.ml/blogImage/windows10148.jpg)![img](https://static.xlc520.ml/blogImage/windows10149.jpg)

![img](https://static.xlc520.ml/blogImage/windows10150.png) 

酷安UWP界面

② 欧路词典 ③ TeamViewer —— 远程桌面连接

 

