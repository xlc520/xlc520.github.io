---
author: xlc520
title: 主机支持AMD-V但处于禁用?不支持虚拟化的AMD-V？无法打开BIOS
description: Linux分类
date: 2022-09-22
category: Linux
tag: 
 - Linux
 - BIOS
article: true
timeline: true
icon: linux
---

# 主机支持AMD-V但处于禁用?不支持虚拟化的AMD-V？无法打开BIOS？

**1、一运行虚拟机就蓝屏+重启**

**问题描述：**

（缺打开虚拟机的图）

如上图，只要点击“打开虚拟机”按键，电脑会立马蓝屏，然后立即重启。

**解决方法：**



![img](https://static.xlc520.tk/blogImage/31155b658f7ffedad509c8153584cb8caf1ed296.png@600w_351h_progressive.webp)“Win”+"R”



![img](https://static.xlc520.tk/blogImage/8b3fb1adef1e62862fee897a5857d774f5360113.png@942w_494h_progressive.webp)输入“optionalfeatures”



键盘输入“Win”+"R"打开运行窗口后输入“cmd”并回车。然后在弹出的对话框里输入“optionalfeatures”(没有空格且feature要加"s").**
**

![img](https://static.xlc520.tk/blogImage/ced2675bc4fdd19dea324a7b838d9f563541c8b5.png@644w_821h_progressive.webp)



然后会出现这个对话框，勾选红色圈中的两个选项再重启电脑即可解决蓝屏问题。



![img](https://static.xlc520.tk/blogImage/4adb9255ada5b97061e610b682b8636764fe50ed.png@progressive.webp)

**2、主机支持AMD-V但处于禁用**

**问题描述：**

![img](https://static.xlc520.tk/blogImage/05e01b833aac32143983890166841fbf66e796aa.png@567w_476h_progressive.webp)

当点击“运行虚拟机”时，会弹出以上提示，代表我们的处理器支持虚拟化，但是需要在BIOS模式下进行开启。

**解决方法：**

重启并在出现主板信息的页面按“del”或“F2”。不同的主板可能进入BIOS 的键位会有所不同，请各位自行百度。华硕主板的操作方法附在下方了。

![img](https://static.xlc520.tk/blogImage/7f7a2ad3edc43a430850fe5a2733738ce0d00b26.jpg@942w_707h_progressive.webp)主板启动页面

![img](https://static.xlc520.tk/blogImage/2e2648c7d94f7a41aecf86b371842befa61d9256.jpg@942w_707h_progressive.webp)BIOS模式显示页面

第一次进入BIOS模式应该会是英文模式，用小键盘调整为中文即可。

![img](https://static.xlc520.tk/blogImage/ddb8447783c0455dd65b76ee5292cb3ef89784a3.jpg@942w_707h_progressive.webp)Enable SVM

在高级选项的“CPU设置”里找到“SVM”模式，打开即可（AMD处理器）。

![img](https://static.xlc520.tk/blogImage/4adb9255ada5b97061e610b682b8636764fe50ed.png@progressive.webp)

**3、无法进入BIOS模式**

**问题描述：**

台式电脑重启时不出现上面提到的主板启动页面，直接进入Windows桌面。并且狂按“del”或“F2”不起作用。

**解决方法：**

换根线吧，据说DP线不支持bios界面的分辨率显示，换成HDMI线即可轻松解决。

![img](https://static.xlc520.tk/blogImage/4adb9255ada5b97061e610b682b8636764fe50ed.png@progressive.webp)

**4、不支持虚拟化的AMD-V**

**问题描述：**

点击“打开虚拟机”会跳出这个提示。一开始以为是AMD处理器不支持基于Intel处理器运行的虚拟机的镜像。



![img](https://static.xlc520.tk/blogImage/3e9d74b2e146be802523608dd580b0dacd400fd5.png@606w_204h_progressive.webp)

并且百度也是这么解释的：

![img](https://static.xlc520.tk/blogImage/641861f2fc1c0adf93fd14ef00e2b318646cdc77.png@942w_513h_progressive.webp)

当时特别绝望，新买的CPU为了跑虚拟机，现在竟然不能用。



**解决方法：**



![img](https://static.xlc520.tk/blogImage/c7822a0813e7e30b38254a19ae31f3ae942e236b.png@942w_1026h_progressive.webp)

取消勾选红框内的项目即可。



![img](https://static.xlc520.tk/blogImage/4adb9255ada5b97061e610b682b8636764fe50ed.png@progressive.webp)

**题外话**

本来这篇文章到这里就算结束了，在最后还想和大家分享一个经验。很多朋友都不知道怎么设置这里的“处理器数量”以及“处理器的内核数量”，以使虚拟机性能达到最大化。



![img](https://static.xlc520.tk/blogImage/e5ef0fe620b0cf6ce3a7afd7cf8377cef30d1e7e.png@942w_350h_progressive.webp)

这里分享一篇刚刚读到的文章的结论：**处理器数量即是自己主机里的cpu颗数。每个处理器的内核数即是自己cpu的实际核数。以我为例，我的CPU为1颗8核16线程的R7-5800X。那么：**

**处理器数量：1**

**每个处理器的内核数：8**

**
**

文章标题以及链接都分享在下，有兴趣的朋友可以读读。

> # VMWARE虚拟机的CPU分配（VMWARE14）：处理器数量、核心数量分配验证