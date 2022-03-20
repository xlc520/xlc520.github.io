---
author: xlc520
title:  Xposed-edge-pro Shell命令
description: 定时自动签到、发送消息、定时自动偷能量及刷支付宝步数、游戏定时登录做任务……【shell命令】
date: 2022-02-07
category: daily
tag: daily
article: true
timeline: true
icon: 
password: 

---

# Xposed-edge-pro Shell命令

一、主要思路：通过xp模块XEdgePro实现手机定时自动解锁、定时自动完成各种指定任务（签到打卡，模拟点击等，理论上只要权限够你能想到的操作都能完成）

二、所需软件（模块）： [【MT管理器2】](http://www.coolapk.com/apk/bin.mt.plus) 、 [【超级点击器】](http://www.coolapk.com/apk/com.dianjiqi) 、Xposed edge pro（XP模块） [查看链接](https://www.lanzous.com/i8bojpc)

三、使用方法（步骤）：安装Xposed edge pro模块勾选重启-打开Xposed edge pro-保存的多重动作-添加-添加-【添加唤醒、解锁等需实现的各种操作指令】-右上角✔保存-返回-定时计划-添加-设置好日期时间-选择好刚保存的多重动作-勾选任务并保存。整体的使用步骤就这样，非常简单，自己稍微摸索一下就能搞定；具体的操作命令接着往下看～

四、具体的操作命令如何实现？
（一）通过Xposed edge pro的基础动作
适用于实现唤醒/锁屏、展开通知栏、截屏、开启/关闭WiFi及数据、延时、打开/关闭应用、注入手势等等较简单的操作。

![img](http://image.coolapk.com/feed/2020/0102/15/2566398_b9dca6a7_9973_6352@1080x810.jpeg.m.jpg)

edge pro的基础动作截取

（二）通过shell命令
1.添加shell命令的方法：Xposed edge pro-保存的多重动作-添加-添加-具体的shell命令-勾选以root运行-确定-右上角✔保存。注：应长按刚保存shell命令-执行来自我检查是否有效。

![img](http://image.coolapk.com/feed/2020/0102/15/2566398_a07e66c3_9973_6354@1080x810.jpeg.m.jpg)

添加shell命令并以root身份运行

2.具体的shell命令如何写？（参考来源 [查看链接](https://www.coolapk.com/feed/14487375?shareKey=YWJmN2I5YzViOGQ3NWUwYzQ3ZTc~&shareUid=2566398&shareFrom=com.coolapk.market_9.6.3) ）
（1）模拟用户操作的shell命令
⭕点击屏幕坐标：input tap X Y
⭕长按屏幕250ms：input swipe X1 Y1 X1 Y1 250
⭕划动屏幕250ms：input swipe X1 Y1 X2 Y2 250
⭕输入文本（仅数字、英文）：input text 文本
⭕输入文本（支持所有文本）：am broadcast -a ADB_INPUT_TEXT --es msg 文本
👉注：由于原生命令不支持中文输入，所以input text 类只能支持输入数字英文字符。然而作为一名中国人🇨🇳，压根就避免不了需要输入中文字符的情况，所以这里给大家介绍一种曲线救国的办法。利用"ADBKeyBoard"输入法 [查看链接](https://www.lanzous.com/i8enzgb) 来进行中文的输入，通过广播的方式达到输入中文字符，具体命令：am broadcast -a ADB_INPUT_TEXT --es msg 文本

![img](http://image.coolapk.com/feed/2020/0102/15/2566398_e0d4c129_9973_6356@432x768.gif)

定时自启QQ-切换ADBKeyBoard-发送-切回搜狗输入法-关闭QQ

✔获取屏幕坐标（X Y）的方法：
①打开超级点击器-给它辅助权限-启动点击器-点＋号插入一个点击①-把点击①移到你想要获取屏幕坐标的位置-长按点击①下滑即可看到点击坐标（这是笨方法，但是很实用）

![img](http://image.coolapk.com/feed/2020/0102/15/2566398_47fcf3a7_9973_6358@432x324.gif)

超级点击器01中心点坐标

②设置-更多设置-开发者选项-开启指针位置（状态栏显示）

![img](http://image.coolapk.com/feed/2020/0102/15/2566398_da6651e3_9973_636@417x313.gif)

状态栏显示点击处坐标

③shell命令执行（升级版方法②）
开启指针位置：settings get system pointer_location 1
关闭指针位置：settings get system pointer_location 0
👉实用举例：
通过获取屏幕坐标，执行shell命令，可以实现模拟点击、长按及滑动。各型号手机分辨率不同，一些具体的屏幕坐标就不放出来了，大家自己去弄。

（2）启动软件界面的shell命令
⭕am start -n 类
👉介绍：打开的是软件的activity界面，比如QQ、微信、贴吧等等一些应用界面。
👉模板：am start -n 应用包名/抓取到的活动名
✔获取包名/活动名方法：应用包名在应用信息里复制，活动名通过MT管理器-工具-Activity记录抓取复制。

![img](http://image.coolapk.com/feed/2020/0102/15/2566398_2b33a73d_9973_6362@432x324.gif)

贴吧应用包名、Activity活动名

👉实用举例：
打开贴吧一键签到界面：am start -n com.baidu.tieba/com.baidu.tieba.signall.SignAllForumActivity

⭕am start “intent:Intent值” 类
👉介绍：可打开软件较复杂的活动界面、桌面快捷方式等，比如指定超话签到界面、贴吧一键签到界面、指定公众号界面、小程序等等。
👉模板：am start “intent:#Intent值”
✔抓取Intent值的方法：打开活动界面-通过手势或者按键调出Xposed edge pro应用菜单-活动-带参数提取应用活动，然后打开MT管理器的/data/user_de/0/com.jozein.xedgepro/prefs/collection目录-打开方式选文本编辑-复制最后一行的相关Intent值。

![img](http://image.coolapk.com/feed/2020/0102/15/2566398_e052257a_9973_6363@432x743.gif)

抓取Intent

👉实用举例：
打开“蔡徐坤”超话签到界面：am start "intent:#Intent;action=android.intent.action.MAIN;launchFlags=0x10000000;component=com.sina.weibo/.page.SuperPageActivity;sourceBounds=93%20709%20237%20853;S.from=shortcut;S.containerid=10080817c0fee819b9c79696a382f9634dbd87;end"

⭕am start -a android.intent.action.VIEW -d ‘URL Shemes’类
👉介绍：部分常用软件界面‘URL Shemes’参数戳 [查看链接](https://www.jianshu.com/p/85aeae988443)
👉模板：am start -a android.intent.action.VIEW -d ‘URL Shemes’
👉实用举例：
打开蚂蚁森林：am start -a android.intent.action.VIEW -d alipays://platformapi/startapp?appId=60000002
打开支付宝运动：am start -a android.intent.action.VIEW -d alipays://platformapi/startapp?appId=20000869

五、总结
（一）通过edge打开应用或者通过shell一步打开指定界面，配合shell模拟点击命令、延时命令等组合而成的多重动作就是简单的自动脚本。配合edge的定时计划，就能实现定时自动操作。
（二）抓到的shell参数不一定有效，自己执行多检查完善。am start -n 类、 “Intent值” 类、 ‘URL Shemes’类哪个有效用哪个，都不行就尝试加上shell模拟点击进行组合。
（三）支付宝相关xp模块 [查看链接](https://www.coolapk.com/feed/15606962?shareKey=YzY3OGU1ZDEzZjFkNWUwY2JkYjU~&shareUid=2566398&shareFrom=com.coolapk.market_9.6.3) 、王者荣耀相关任务思路 [查看链接](https://www.coolapk.com/feed/15526214?shareKey=ZTFkZjUwNDIzZjFlNWUwY2JkNDk~&shareUid=2566398&shareFrom=com.coolapk.market_9.6.3)
（四）每天可以自动完成一些小任务，再也不用担心忘记了，真香！发挥脑洞，举一反三，写好以后就可以一劳永逸啦！等待你的发掘～