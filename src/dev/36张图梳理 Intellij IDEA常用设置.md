---
author: xlc520
title: 36 张图梳理 Intellij IDEA 常用设置
description: 36 张图梳理 Intellij IDEA 常用设置
date: 2022-05-03
category: Java
tag: Java
article: true
timeline: true
icon: java
password: 
---



# 36 张图梳理 Intellij IDEA 常用设置

## 1. 显示工具条

（1）效果图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224203514537.jpg)
（2）设置方法

- 标注1：View–>Toolbar
- 标注2：View–>Tool Buttons

## 2.设置鼠标悬浮提示

（1）效果图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224203557930.jpg)
（2)设置方法

File–>settings–>Editor–>General–>勾选Show quick documentation…
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224203618871.jpg)

## 3.显示方法分隔符

（1）效果图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224203648505.jpg)
（2)设置方法

File–>settings–>Editor–>Appearance–>勾选
![q](https://img-blog.csdnimg.cn/20210224203711703.jpg)

## 4.忽略大小写提示

（1）效果图

备注：idea的默认设置是严格区分大小写提示的，例如输入string不会提示String，不方便编码
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224203811694.jpg)
（2）设置方法File–>settings–>Editor–>General -->Code Completion -->
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224203830493.jpg)

## 5.主题设置

（1）效果图

备注：有黑白两种风格
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224203904545.jpg)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224203916562.jpg)
（2)设置方法

File–>settings–>Appearance & Behavior–>Appearance–>
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224203938251.jpg)

## 6.护眼主题设置

（1）效果图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224204009507.jpg)
（2)设置方法

如果想将编辑页面变换主题，可以去设置里面调节背景颜色
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224204028538.jpg)
如果需要很好看的编码风格，这里有很多主题 http://color-themes.com/?view=index&layout=Generic&order=popular&search=&page=1 点击相应主题，往下滑点击按钮
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224204049458.jpg)
下载下来有很多Jar包
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224204104138.jpg)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224204116351.jpg)
在上面的位置选择导入jar包，然后重启idea生效，重启之后去设置
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224204138424.jpg)

## 7. 自动导入包

(1）效果图
备注：默认情况是需要手动导入包的，比如我们需要导入Map类，那么需要手动导入，如果不需要使用了，删除了Map的实例，导入的包也需要手动删除，设置了这个功能这个就不需要手动了，自动帮你实现自动导入包和去包，不方便截图，效果请亲测~
（2）设置方法

File–>settings–>Editor–>general–>Auto Import–>
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021022420421999.jpg)

## 8.单行显示多个Tabs

（1）效果图
![默认是显示单排的Tabs:](https://img-blog.csdnimg.cn/20210224204304589.jpg)

单行显示多个Tabs:
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224204337379.jpg)
（2）设置方法
File–>settings–>Editor–>General -->Editor Tabs–>去掉√
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224204420119.jpg)

## 9.设置字体

（1）效果图
备注：默认安装启动Idea字体很小，看着不习惯，需要调整字体大小与字体（有需要可以调整）
（2）设置方法
File–>settings–>Editor–>Font–>
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224204505784.jpg)

## 10.配置类文档注释信息和方法注释模版

（1）效果图
备注：团队开发时方便追究责任与管理查看
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224204545258.jpg)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224204604611.png)
（2）设置方法
https://blog.csdn.net/zeal9s/article/details/83514565

## 11.水平或者垂直显示代码

（1）效果图
备注：Eclipse如果需要对比代码，只需要拖动Tabs即可，但是idea要设置
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224204734417.jpg)
（2）设置方法

鼠标右击Tabs
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224204757375.jpg)

## 12. 更换快捷键

（1）效果图

备注：从Eclipse移植到idea编码，好多快捷键不一致，导致编写效率降低，现在我们来更换一下快捷键
（2）设置方法

- 方法一：
  File–>Setting–>
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224204900966.jpg)
  例如设置成Eclipse的，设置好了之后可以ctrl+d删除单行代码（idea是ctrl+y）

- 方法二：设置模板
  File–>Setting–>
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224204938310.jpg)
- 方法三：
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224205002231.jpg)
  以ctrl+o重写方法
- 为例
  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224205019981.jpg)

## 13.注释去掉斜体

（1）效果图
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224205113664.jpg)
（2）设置方法

File–>settings–>Editor–>
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224205131716.jpg)
![在这里插入图片描述](https://img-blog.csdnimg.cn/202102242051459.jpg)

## 14.代码检测警告

## 提示等级设置

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224205204818.jpg)
强烈建议，不要给关掉，不要嫌弃麻烦，他的提示都是对你好，帮助你提高你的代码质量，很有帮助的

## 15.项目目录相关–折叠空包

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224205220446.jpg)

## 16. 窗口复位

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224205236946.jpg)
这个就是当你把窗口忽然间搞得乱七八糟的时候，还可以挽回，就是直接restore一下，就好啦。

## 17. 查看本地代码历史

![在这里插入图片描述](https://img-blog.csdnimg.cn/2021022420530438.jpg)

## 18. 快速补全分号

CTRL + SHIFT + ENTER 在当前行任何地方可以快速在末尾生成分号

## 19. 快速找到Controller方法

如果你的项目里有非常多的controller，里面有非常多的http或者resful方法。如何快速找到这些方法呢？这个时候，ctrl+alt+shift+n就可以派上用场了。
比如说，你依稀记得入账单相关的接口，都有个bill的url路径，那么使用ctrl+alt+shift+n后，直接输入/bill即可。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224205514795.png)
当你在成千上万的Controller里寻找方法时，这一招就可以大大提高效率。

## 20.大括号匹配

这个也非常有用，因为代码太长，某个for循环，可能已经撑满整个屏幕了。这个时候，找到某个大括号对应的另外一边就很费劲。你可以将光标定位在某个大括号一边，然后使用ctrl+]或者ctrl+[来回定位即可。 **补充**：以上的配置信息都保存在系统盘的
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224205558296.png)
默认会有这两个文件
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210224205626669.png)

config:在初始化安装IntelliJ IDEA时有询问你是否导入以存在的配置信息，这个config就是你的配置信息，方便更换电脑和换系统的时候重新安装，前提是要保存好此文件夹。
system:此文件夹是IntelliJ IDEA发生什么不可预知性的错误时，比如蓝屏，突然断电导致项目不能启动，可以尝试删除此文件，让系统重新生成一个system的文件