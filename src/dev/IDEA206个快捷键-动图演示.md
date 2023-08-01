---
author: xlc520
title: IDEA 206个快捷键 动图演示
description: IDEA 206个快捷键 动图演示
date: 2022-05-09
category: Java
tag: Java
article: true
timeline: true
icon: java
---



# IDEA 206个快捷键 动图演示

![img](https://static.linch.eu.org/blogImage/9e911fdfd9d07a3c026a9c504d1db1f5.png)

本文参考了 IntelliJ IDEA 的官网，列举了IntelliJ IDEA（Windows 版）的所有快捷键。并在此基础上，为 90% 以上的快捷键提供了动图演示，能够直观的看到操作效果。

该快捷键共分 16 种，可以方便的按各类查找自己需要的快捷键~~

## Part1一、构建/编译

#### 1`Ctrl + F9`：构建项目

> 该快捷键，等同于菜单【Build】—>【Build Project】

![img](https://static.linch.eu.org/blogImage/346acf6147e22ba519de5957b989903f.png)

执行该命令后，IntelliJ IDEA 会编译项目中所有类，并将编译结果输出到`out`目录中。IntelliJ IDEA 支持增量构建，会在上次构建的基础上，仅编译修改的类。

![img](https://static.linch.eu.org/blogImage/745c1bb01533faf4e4c703484edaa237.gif)

#### 2`Ctrl + Shift + F9`：重新编译当前类

> 该快捷键，等同于菜单【Build】—>【Recompile ‘class name’】

![img](https://static.linch.eu.org/blogImage/d7290ad52882e3f6effc232ad8003eea.png)

在IntelliJ IDEA 中打开要编译的类，执行该命令会编译当前类。

## Part2二、文本编辑

#### 3`Ctrl + X`：剪切

剪切选中文本，若未选中则剪切当前行。

![img](https://static.linch.eu.org/blogImage/843d4485c02c08bd306ed102cab663a7.gif)

#### 4`Ctrl + C`：复制

复制选中文本，若未选中则复制当前行。

#### 5`Ctrl + V`：粘贴

#### 6`Ctrl + Alt + Shift + V`：粘贴为纯文本

#### 7`Ctrl + Shift + V`：从历史选择粘贴

从历史剪粘版中选择要粘贴的内容。

![img](https://static.linch.eu.org/blogImage/f8051942a7de52785881838e25e309bd.gif)

#### 8`Ctrl + D`：复制行

复制光标所在行。

![img](https://static.linch.eu.org/blogImage/d4264a2a8ffe436ffc401e0f161d9ade.gif)

#### 9`Ctrl + Shift + C`：复制文件路径

复制选中文件所在路径。

![img](https://static.linch.eu.org/blogImage/2188102f6b93518221bf19786aabdc1a.gif)

#### 10`Ctrl + Alt + Shift + C`：复制引用

复制包的路径，或者类的名称。

![img](https://static.linch.eu.org/blogImage/44eb712dd6f9c5eb875e6074a04fa42f.gif)

#### 11`Ctrl + S`：保存全部

#### 12`Ctrl + Z`：撤销

撤销上一步操作内容。

#### 13`Ctrl + Shift + Z`：重做

恢复上一步撤销内容。

![img](https://static.linch.eu.org/blogImage/5e2550a0878bc37add1bd0f325afb445.gif)

#### 14`Tab`：缩进

#### 15`Shift + Tabl`：取消缩进

![img](https://static.linch.eu.org/blogImage/db3c423425a1006e3b67ab2cf0866a3c.gif)

#### 16`Ctrl + Alt + I`：自动缩进行

自动缩进至规范位置。

![img](https://static.linch.eu.org/blogImage/74fa2918afa2a29d3c7621c1f061ac6f.gif)

#### 17`Shift + Enter`：开始新行

无论光标是否在行尾，都开始新的行。

![img](https://static.linch.eu.org/blogImage/2fd2993522c2baea25159cb21d70d3b5.gif)

#### 18`Ctrl + Alt + Enter`：在当前行之前开始新行

![img](https://static.linch.eu.org/blogImage/63fbbe552744dfde649df43a1e50c4ac.gif)

#### 19`Ctrl + Y`：删除行

删除当前行。

![img](https://static.linch.eu.org/blogImage/3223eb97f4d2ab9b912316399547aed6.gif)

#### 20`Ctrl + Shift + U`：大小写转换

![img](https://static.linch.eu.org/blogImage/79f15016de1962b1d49583bc9a39a220.gif)

#### 21`Ctrl + Alt + Shift + Insert`：创建临时文件

可以创建各种类型的临时文件，该临时文件不会保存到磁盘中。

![img](https://static.linch.eu.org/blogImage/6478b20ba3126fe4ba231377ecbd7df1.gif)

#### 22`Shift + F4`：在新窗口中打开

在新窗口打开当前文件。

![img](https://static.linch.eu.org/blogImage/3891eaca7497e6363659e52087780dde.gif)

## Part3三、光标操作

#### 23`Ctrl + Left`：左移一个单词

![img](https://static.linch.eu.org/blogImage/4f8b3739300460392434d28a2ab7d5a2.gif)

#### 24`Ctrl + Right`：右移一个单词

![img](https://static.linch.eu.org/blogImage/54a6b814863df5b78225f7b9c7bec8a4.gif)

#### 25`Home`：移动至行首

#### 26`End`：移动至行尾

![img](https://static.linch.eu.org/blogImage/7544ec020aed0601b12bff01407203c7.gif)

#### 27`Ctrl + Shift + M`：移动至大括号

多次按下快捷键，可以在左右两个大括号间切换。

![img](https://static.linch.eu.org/blogImage/b26200d3cb503339ec1605c6d59b4565.gif)

#### 28`Ctrl + [`：移动至代码块开始

#### 29`Ctrl + ]`：移动至代码块末尾

![img](https://static.linch.eu.org/blogImage/76c4141293796714c5a8e1d8db441b6f.gif)

#### 30`Alt + Down`：下一个方法

#### 31`Alt + Up`：上一个方法

#### 32`Ctrl + PageUp`：移动至页面顶部

#### 33`Ctrl + PageDown`：移动至页面底部

![img](https://static.linch.eu.org/blogImage/8ec8f52a924e547a6a3e4d22b6996a0d.gif)

#### 34`PageUp`：向上翻页

#### 35`PageDown`：向下翻页

![img](https://static.linch.eu.org/blogImage/24d6edbe7c5755d24c24b801de04672f.gif)

#### 36`Ctrl + Home`：移动至文件开头

#### 37`Ctrl + End`：移动至文件末尾

![img](https://static.linch.eu.org/blogImage/328e4be0c2750ac2a1acea7703c2cc59.gif)

## Part4四、文本选择

#### 38`Ctrl + A`：全选

#### 39`Shift + Left`：向左选择

#### 40`Shift + Right`：向右选择

![img](https://static.linch.eu.org/blogImage/684fcfcd0c006d302fee39b7c478dec6.gif)

#### 41`Ctrl + Shift + Left`：向左选择一个单词

#### 42`Ctrl + Shift + Right`：向右选择一个单词

![img](https://static.linch.eu.org/blogImage/21647c787bca2963e1ad2bb6b4757182.gif)

#### 43`Shift + Home`：向左选择至行头

#### 44`Shift + End`：向右选择至行尾

![img](https://static.linch.eu.org/blogImage/9449d7063c38d9814a1d4629caccd103.gif)

#### 45`Shift + Up`：向上选择

#### 46`Shift + Down`：向下选择

![img](https://static.linch.eu.org/blogImage/6a8b14017ac8a76a3d6c71d6d5dde3f9.gif)

#### 47`Ctrl + Shift + [`：选择至代码块开头

#### 48`Ctrl + Shift + ]`：选择至代码块结尾

![img](https://static.linch.eu.org/blogImage/f59e177216118277ec51c09e18868489.gif)

#### 49`Ctrl + Shift + PageUp`：选择至页面顶部

#### 50`Ctrl + Shift + PageDown`：选择至页面底部

![img](https://static.linch.eu.org/blogImage/ee8f743d255de133144f0025262a168e.gif)

#### 51`Shift + PageUp`：向上翻页选择

#### 52`Shift + PageDown`：向下翻页选择

![img](https://static.linch.eu.org/blogImage/7b1ff158c44db229eb22974e39382563.gif)

#### 53`Ctrl + Shift + Home`：选择至文件开关

#### 54`Ctrl + Shift + End`：选择至文件结尾

![img](https://static.linch.eu.org/blogImage/20e723b49706696276afb5ce74a71199.gif)

#### 55`Ctrl + W`：扩展选择

#### 56`Ctrl + Shift + W`：收缩选择

![img](https://static.linch.eu.org/blogImage/567cc3561ef5d6a1d684655f4d3d0ca5.gif)

## Part5五、代码折叠

#### 57`Ctrl + NumPad+`：展开代码块

#### 58`Ctrl + NumPad-`：折叠代码块

![img](https://static.linch.eu.org/blogImage/668c74c8c698bf6813aa0513c2a546dd.gif)

#### 59`Ctrl + Alt + NumPad+`：递归展开

#### 60`Ctrl + Alt + NumPad-`：递归折叠

![img](https://static.linch.eu.org/blogImage/4d17fefa9d88ed85b51ba9fbe42f4c48.gif)

#### 61`Ctrl + Shift + NumPad+`：全部展开

#### 62`Ctrl + Shift + NumPad-`：全部折叠

![img](https://static.linch.eu.org/blogImage/5c43083793af2126d6e9092aa2bc36db.gif)

#### 63`Ctrl + .`：折叠选择

## Part6六、多个插入符号和范围选择

#### 64`Alt + Shift + Click`：添加/删除插入符号

![img](https://static.linch.eu.org/blogImage/af9362c349d4e0317ffeaa0e8ce7b9a4.gif)

#### 65`Alt + Shift + Insert`：切换列选择模式

![img](https://static.linch.eu.org/blogImage/d236737b13a6a636c4d8c55cebdedd74.gif)

#### 66双击`Ctrl` + `Up`：向上克隆插入符号

按`Ctrl`键两次，然后在不松开的情况下按向上箭头键。

![img](https://static.linch.eu.org/blogImage/55034334c6a85169eefe3ff1a1aad788.gif)

#### 67双击`Ctrl` + `Down`：向下克隆插入符号

按`Ctrl`键两次，然后在不松开的情况下按向下箭头键。

![img](https://static.linch.eu.org/blogImage/dae4bc316b11af041bdfbae752f35f94.gif)

#### 68`Alt + Shift + G`：将插入符号添加到选择中的每一行

![img](https://static.linch.eu.org/blogImage/a0d8e1041d61a925f1fbf204715004c9.gif)

#### 69`Alt + J`：选择单位下次出现的位置

#### 70`Alt + Shift + J`：取消最后一次选择

![img](https://static.linch.eu.org/blogImage/2c9dd9eac04e3f97fe5c3ca875f44203.gif)

#### 71`Ctrl + Alt + Shift + J`：选择所有出现的位置

![img](https://static.linch.eu.org/blogImage/1d6ee3277028ff5aaa7edec82a7703c6.gif)

#### 72`Alt + Shift + Middle-Click`：创建矩形选择

![img](https://static.linch.eu.org/blogImage/6c04aad317ec7ff3b4e560da8afc5ad8.gif)

#### 73`Alt + Click`：拖拽以创建矩形选择区

![img](https://static.linch.eu.org/blogImage/995166ebcc89eea6d4997b712c5b9212.gif)

#### 74`Ctrl + Alt + Shift + Click`：拖拽以创建多个矩形选择区

![img](https://static.linch.eu.org/blogImage/bb12a7c0f3f775c40e669c9878a4ae05.gif)

## Part7七、辅助编码

#### 75`Alt + Enter`：显示建议操作

该快捷键又称为“万通快捷键”，它会根据不同的语境建议不同的操作。下面这个演示只是其中的一种，还有很多种用法，你可以尝试一下。

![img](https://static.linch.eu.org/blogImage/8a6e0b39b137d17cfb691087c390a8f3.gif)

#### 76`Ctrl + Space`：代码补全

![img](https://static.linch.eu.org/blogImage/92d200fbe7ff443e86b7d5f2ec55bde5.gif)

#### 77`Ctrl + Shift + Space`：类型匹配代码补全

![img](https://static.linch.eu.org/blogImage/773580d3eb124d0c2baa052304fa3cc9.gif)

#### 78`Ctrl + Alt + Space`：第二次代码补全

![img](https://static.linch.eu.org/blogImage/fc0776cbe5ade6cab71b0a4224ea92c3.gif)

#### 79`Ctrl + Shift + Enter`：补全当前语句

![img](https://static.linch.eu.org/blogImage/98b075fd12ddf9be2b86005cb9d38e6b.gif)

#### 80`Ctrl + Alt + L`：格式化代码

![img](https://static.linch.eu.org/blogImage/5955c3e65b0a2ffc16bc56a670e4d763.gif)

#### 81`Ctrl + P`：参数信息提醒

![img](https://static.linch.eu.org/blogImage/a276c34550157a2256c6320a05c2bd87.gif)

#### 82`Ctrl + Q`：快速文档

![img](https://static.linch.eu.org/blogImage/196a62ba45964ea5a639b1b14110218c.gif)

#### 83`Ctrl + Shift + Up`：向上移动语句

#### 84`Ctrl + Shift + Down`：向下移动语句

![img](https://static.linch.eu.org/blogImage/2540c800307919b5e0eb45fd94ee25c2.gif)

#### 85`Ctrl + Alt + Shift + Left`：向左移动元素

#### 86`Ctrl + Alt + Shift + Right`：向右移动元素

![img](https://static.linch.eu.org/blogImage/be47038a3f8398a8b6ad691901844690.gif)

#### 87`Alt + Shift + Up`：向上移动队列

#### 88`Alt + Shift + Down`：向下移动队列

![img](https://static.linch.eu.org/blogImage/ad55a568c9177bf80415bba5f5de3575.gif)

#### 89`Ctrl + /`：添加行注释

![img](https://static.linch.eu.org/blogImage/fe1de17cd5c85f28277eee6a0f0e4c80.gif)

#### 90`Ctrl + Shift + /`：添加块注释

![img](https://static.linch.eu.org/blogImage/7328b3ec588c6a2b05b18650a11a572b.gif)

#### 91`Alt + Insert`：生产语句

![img](https://static.linch.eu.org/blogImage/0e6cb1c2e8cbde2028761ca549e27837.gif)

## Part8八、上下文导航

#### 92`Alt + Down`：跳转至下一个方法

#### 93`Alt + Up`：跳转至上一个方法

![img](https://static.linch.eu.org/blogImage/5711a9f83337ad847daebd0fa5c51a6e.gif)

#### 94`Ctrl + G`：跳转到指定行

![img](https://static.linch.eu.org/blogImage/2b183366ec068f549375230906c0b527.gif)

#### 95`Ctrl + Tab`：切换活动文件

#### 96`Alt + F1`：选择文件的定位

![img](https://static.linch.eu.org/blogImage/785df70101066e09328d8c15adf5afbf.gif)

#### 97`Ctrl + E`：最近的文件

![img](https://static.linch.eu.org/blogImage/2916161df178b424712956b0ff3524a3.gif)

#### 98`Ctrl + Shift + Backspace`：返回上次编辑位置

![img](https://static.linch.eu.org/blogImage/49c598d3e638784cf470e9f9bb3a137d.gif)

#### 99`Ctrl + Alt + Left`：后退

#### 100`Ctrl + Alt + Right`：前进

![img](https://static.linch.eu.org/blogImage/d190ec32d9a14fade6781cc585c99dcd.gif)

#### 101`Ctrl + Alt + Down`：下一事件

#### 102`Ctrl + Alt + Up`：上一事件

![img](https://static.linch.eu.org/blogImage/bd5456b8080d43073223e0f80b23d14d.gif)

#### 103`Alt + Right`：选择下一个选项卡

#### 104`Alt + Left`：选择下一个选项卡

![img](https://static.linch.eu.org/blogImage/dd6b38a356598fb7660cc04216ea2042.gif)

#### 105`F11`：切换匿名书签

#### 106`Ctrl + Shift + [digit]`：用数字切换书签

![img](https://static.linch.eu.org/blogImage/31d04a3d547f983e4804320d1ed0de6c.gif)

#### 107`Ctrl + F11`：使用助词符切换书签

![img](https://static.linch.eu.org/blogImage/6ff41b3a1ae24687476c6b8e0ff2653e.gif)

#### 108`Shift + F11`：显示所有书签

![img](https://static.linch.eu.org/blogImage/4f384449256d8961830709e301a3ad19.gif)

#### 109`Ctrl + [digit]`：用数字跳转到书签

#### 110`Alt + 7`：显示结构窗口

![img](https://static.linch.eu.org/blogImage/02aaceebb516074b5d1d93b3f8bf53b9.gif)

#### 111`Alt + 3`：显示查找窗口

![img](https://static.linch.eu.org/blogImage/c26d14168c30874f5cf02cad12fc1439.gif)

## Part9九、查找操作

#### 112双击`Shift`：查找所有

![img](https://static.linch.eu.org/blogImage/f4af891913492ce0d700e8cc49f8da58.gif)

#### 113`Ctrl + F`：查找字符（当前文件）

![img](https://static.linch.eu.org/blogImage/5c7b1e9db84b937c2e48ad40973e8e60.gif)

#### 114`F3`：查找下一个

#### 115`Shift + F3`：查找上一个

![img](https://static.linch.eu.org/blogImage/ded3c9e5d2025d8b2928e2cbfb5d17cf.gif)

#### 116`Ctrl + R`：替换字符（当前文件）

![img](https://static.linch.eu.org/blogImage/0ca79c18ff938ba061a3c00e0b02dd28.gif)

#### 117`Ctrl + Shift + F`：查找字符（所有文件）

#### 118`Ctrl + Shift + R`：替换字符（所有文件）

![img](https://static.linch.eu.org/blogImage/128e40d357e98e00c57f91b25b8d7c70.gif)

#### 119`Ctrl + F3`：跳转到光标处单词的下一位置

![img](https://static.linch.eu.org/blogImage/4a976a1add6bb62f9ce51fef08b16ae7.gif)

#### 120`Ctrl + Shift + N`：查找文件并跳转

![img](https://static.linch.eu.org/blogImage/4f3b510238564296a15b17caa0acbbce.gif)

#### 121`Ctrl + F12`：打开文件结构

#### 122`Ctrl + Alt + Shift + N`：查找符号（变量、方法等）

![img](https://static.linch.eu.org/blogImage/8581d8bc6db85835b682e6f200178ee4.gif)

#### 123`Ctrl + Shift + A`：查找动作

![img](https://static.linch.eu.org/blogImage/103a16dbc06845af9fbfba2d240d3f76.gif)

## Part10十、符号导航

#### 124`Alt + F7`：查找用法

#### 125`Ctrl + B`：跳转到声明处

![img](https://static.linch.eu.org/blogImage/7772a9d7f1653b3f8dad7510e2009428.gif)

#### 126`Ctrl + Shift + B`：跳转到声明类处

#### 127`Ctrl + Alt + F7`：显示用法

#### 128`Ctrl + U`：跳转到超级方法

#### 129`Ctrl + Alt + B`：跳转到实现方法

![img](https://static.linch.eu.org/blogImage/158dccab9b00a4adeddddbe6f265681c.gif)

#### 130`Ctrl + Shift + F7`：突出显示文件中的用法

## Part11十一、代码分析

#### 131`Alt + Enter`：显示意图操作

![img](https://static.linch.eu.org/blogImage/fd6eba304728d567176d09e0395f8711.gif)

#### 132`Ctrl + F1`：显示错误描述

#### 133`F2`：下一个突出显示的错误

#### 134`Shift + F2`：上一个突出显示的错误

![img](https://static.linch.eu.org/blogImage/95198ccc43a635f672f7de645609bb55.gif)

#### 135`Ctrl + Alt + Shift + I`：按名称运行检查

![img](https://static.linch.eu.org/blogImage/89a24e9badfedf9c29289724897c9d3f.gif)

#### 136`Alt + 6`：显示问题窗口

![img](https://static.linch.eu.org/blogImage/5f61eda6c61aac30266b0eca2c2961f3.gif)

## Part12十二、运行和调试

#### 137双击`Ctrl`：运行所有

![img](https://static.linch.eu.org/blogImage/dfd83fcdb2df5c7268711d56ab2068d9.gif)

#### 138`Shift + F10`：运行上下文配置

![img](https://static.linch.eu.org/blogImage/233df80102f449c0870001c464b30598.gif)

#### 139`Alt + Shift + F10`：打开运行窗口

![img](https://static.linch.eu.org/blogImage/b732343565ad83e3d6d0699c290f8b60.gif)

#### 140`Shift + F9`：调试上下文配置

#### 141`Alt + Shift + F9`：打开调试窗口

![img](https://static.linch.eu.org/blogImage/0758624b40a1f92bb471106b37db1a76.gif)

#### 142`Ctrl + Alt + F5`：附加到进程

#### 143`Ctrl + F2`：停止

![img](https://static.linch.eu.org/blogImage/295175c4d4e24802cb60538c29754cf8.gif)

#### 144`F9`：运行至下一断点

![img](https://static.linch.eu.org/blogImage/52c413733df577e4e3cfb0d832eccf7b.gif)

#### 145`Ctrl + Shift + F2`：停止后台进程

#### 146`F8`：跨过调用

#### 147`Alt + Shift + F8`：强制跨过调用

#### 148`F7`：进入调用

![img](https://static.linch.eu.org/blogImage/d80808f5b178735dbda8d9ba4ac169b6.gif)

#### 149`Shift + F7`：智能进入调用

#### 150`Alt + Shift + F7`：强制进入调用

#### 151`Shift + F8`：跳出调用

![img](https://static.linch.eu.org/blogImage/cc505ba481bc6072aa28fc91b813002e.gif)

#### 152`Alt + F9`：运行至光标处

#### 153`Ctrl + Alt + F9`：强制运行至光标处

#### 154`Alt + F10`：显示执行点

![img](https://static.linch.eu.org/blogImage/a0e762c714a46780bc5cf849c70dbb10.gif)

#### 155`Alt + F8`：评估表达式

#### 156`Ctrl + Alt + F8`：快速评估表达式

#### 157`Ctrl + F8`：切换行断点

![img](https://static.linch.eu.org/blogImage/83d4d9d6502e9d21b913afde729ad90a.gif)

#### 158`Ctrl + Alt + Shift + F8`：切换临时行断点

![img](https://static.linch.eu.org/blogImage/db31e5fa8f315507b972e0ff23b986a0.gif)

#### 159`Ctrl + Shift + F8`：查看断点

#### 160`Ctrl + Shift + F8`：编辑断点

![img](https://static.linch.eu.org/blogImage/03c9d1bd33c426460179f2d996808d96.gif)

#### 161`Alt + 4`：显示运行窗口

#### 162`Alt + 5`：显示调试窗口

#### 163`Alt + 8`：显示服务窗口

![img](https://static.linch.eu.org/blogImage/d78ce349615dd68ee7447a312ec8ee49.gif)

## Part13十三、代码重构

#### 164`Ctrl + Alt + Shift + T`：打开重构列表

#### 165`Shift + F6`：修改名称

#### 166`Ctrl + F6`：修改签名

#### 167`Ctrl + Alt + N`：内联

#### 168`F6`：移动

#### 169`Ctrl + Alt + M`：提取方法

![img](https://static.linch.eu.org/blogImage/4e30e743881cb66b9b7f47096bcef032.gif)

#### 170`Ctrl + Alt + F`：引入域

#### 171`Ctrl + Alt + P`：引入参数

#### 172`Ctrl + Alt + V`：引入变量

#### 173`Alt + Delete`：安全删除

## Part14十四、全局 CVS 操作

#### 174`Alt + `` ：弹出 CVS 窗口

![img](https://static.linch.eu.org/blogImage/923e6c31f7d487cd43718be847be0623.gif)

#### 175`Ctrl + K`：提交



#### 176`Ctrl + T`：更新项目

![img](https://static.linch.eu.org/blogImage/4fb96fd58bbff5c21b9a64ca147b78e1.gif)

#### 177`Ctrl + Alt + Z`：回滚

![img](https://static.linch.eu.org/blogImage/435e38e7f1adb4a7ea4460a5240b9834.gif)

#### 178`Ctrl + Shift + K`：拉取

![img](https://static.linch.eu.org/blogImage/db44d880f2d9bfbc387c0bafc2b99e04.gif)

#### 179`Ctrl + Alt + Shift + Down`：下一个修改

#### 180`Ctrl + Alt + Shift + Up`：上一个修改

#### 181`Alt + 9`：显示版本控制窗口

#### 182`Alt + 0`：显示提交窗口

![img](https://static.linch.eu.org/blogImage/865e5aecc673da3fce5cc31559c10f20.gif)

## Part15十五、差异查看器

#### 183`F7`：下一个差异

#### 184`Shift + F7`：上一个差异

![img](https://static.linch.eu.org/blogImage/013eccdfa2f989494b43a058eaa166db.gif)

#### 185`Ctrl + Alt + R`：接受左侧

#### 186`Ctrl + Alt + A`：接受右侧

![img](https://static.linch.eu.org/blogImage/7df0e99d894fe562902d714714f18b11.gif)

#### 187`Ctrl + Shift + Tab`：选择对面的差异窗格

#### 188`Ctrl + Shift + D`：显示差异设置窗口

## Part16十六、工具窗口

#### 189`Shift + Escape`：隐藏活动的工具窗口

![img](https://static.linch.eu.org/blogImage/3e3fb7bcc404a3283a7c476c8c9f505e.gif)

#### 190`Ctrl + Shift + F12`：隐藏所有工具窗口

![img](https://static.linch.eu.org/blogImage/0d97948eb8526716addee4c2b5d9123a.gif)

#### 191`F12`：跳转到最后一个工具窗口

#### 192`Ctrl + Alt + Shift + Left`：向左延伸窗口大小

#### 193`Ctrl + Alt + Shift + Right`：向右延伸窗口大小

#### 194`Ctrl + Alt + Shift + Up`：向顶部延伸窗口大小

#### 195`Ctrl + Alt + Shift + Down`：向底部延伸窗口大小

![img](https://static.linch.eu.org/blogImage/cfb9491f1747770a189768b907ce41b6.gif)

#### 196`Alt + 1`：显示项目窗口

#### 197`Alt + 2`：显示书签窗口

#### 198`Alt + 3`：显示查找窗口

#### 199`Alt + 4`：显示运行窗口

#### 200`Alt + 5`：显示调试窗口

#### 201`Alt + 6`：显示问题窗口

#### 202`Alt + 7`：显示结构窗口

#### 203`Alt + 8`：显示服务窗口

#### 204`Alt + 9`：显示版本控制窗口

#### 205`Alt + 0`：显示提交窗口

![img](https://static.linch.eu.org/blogImage/f4b4077ba3038f246422e1deee9a4511.gif)

#### 206`Alt + F12`：显示终端窗口

![img](https://static.linch.eu.org/blogImage/282103793f92294a49ef3bd929740153.gif)

