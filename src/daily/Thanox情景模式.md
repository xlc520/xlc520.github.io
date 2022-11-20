---
author: xlc520
title: Thanox 情景模式
description: Thanox 情景模式
date: 2022-06-21
category: daily
tag: daily
article: true
timeline: true
icon: type
password: 
---

# Thanox 情景模式



QQ、微信、TIM、网易云音乐，减少cpu、内存RAM占用 ——thanox情景模式自定义策略方案

QQ优能、微信优能、TIM优能、网易云优能——系列情景模式

之前发帖后一小会儿就删了，结果有情景模式流出，单个情景模式可能有不生效的情况。网易云音乐难以生效就单独发了个网易云的（结合乖巧模式），原本乖巧模式最好搭配后台启动规则使用，情景模式又要搭配乖巧模式使用。情景模式单独生效是意外之喜。

这里只是利用thanox情景模式触发执行命令，应该也可以用Xposed edge、Automate、Tasker、Macrodroid等软件实现。

原本是情景模式、乖巧模式、后台启动规则搭配使用。有些应用在单独使用情景模式时即可生效，有些需要加乖巧模式、后台启动规则，以及去除电池省电白名单。

## 一、分别介绍 乖巧模式、后台启动规则、命令

1乖巧模式和乖巧规则参考

乖巧模式设置：开启停止服务、阻止服务重启选项。

乖巧规则：参照视频打开QQ 、TIM，在运行的服务中搜索msf。网易云音乐com.netease.cloudmusic/com.netease.cloudmusic.service.PlayService（关键字PlayService）

2后台启动规则三条：
（并考虑把后台启动规则也添加到乖巧模式规则中）

DENY 包名 包名

DENY * 包名

DENY android 包名

（根据情况对三条规则进行增减。有时可能导致限制应用过于严格，就考虑减少一些规则，但在使用中发现限制效果并不是十分明显，比如DENY 包名 包名 本应达到只启动主进程、禁止主进程启动其他进程、打开应用只有一个进程的效果。）

3shell命令

kill -9杀掉程序运行时的非必要进程

kill -19 暂停 杀*不*掉的程序运行时的非必要进程

使用场景有前台和后台的不同， 前台运行时依然可以选择使用kill -19暂停非必要进程。

长时间不使用时用kill -9杀掉程序运行时的非必要进程，

频繁切换使用kill -19暂停程序运行时的非必要进程。

含义：（ps -ef|grep com.tencent.mm:|grep -v push|grep -v grep|awk '{print $2}'|xargs kill -9\） ps（显示正在运行进程） -ef（前者基础上显示全部） | grep（搜索） com.tencent.mm（微信包名） | grep -v push 排除在之前搜索结果中包含带有push的进程 | grep -v grep | awk '{print $2}' （提取进程pid）| xargs kill -9（杀死之前命令的输出结果--pid）。 单独运行某个“|”之前的部分确保输出结果正确。

主进程以外的进程都包含“：”，所以搜索包名加冒号就排除了（保留）主进程，去除“：”就会把主进程也处理掉，比如在实现软件后台单进程运行的时候用（比如网易云\QQ\TIM,此时会关闭程序主界面，再次打开程序需要重新启动主进程、加载主界面)

有些杀不掉的进程就用参照上面命令grep -v排除掉（也可以考虑禁掉对应的服务）然后附加一条针对那个进程单独添加一条命令ps -ef|grep com.tencent.mm:push|grep -v grep|awk '{print $2}'|xargs kill -19 （把9改成19 、直接搜索完整进程名grep com.tencent.mm:push），然后grep com.tencent.mm:push就不会占用cpu了。主进程可能会随着使用程序的更多功能导致内存占用变高，重启程序可减少内存占用（乖巧模式视频中重启了微信）。

## 二情景模式

1需要下载su插件 地址（新版thanox的插件仓库中已预存插件 直接安装即可）[查看链接](https://github.com/Tornaco/Thanox/releases/download/v1.2.2/plugin_su_enabler_1.2.2-dirty.tp) 设置插件允许 root。

2触发条件 比较实用的

"condition": "systemReady == true ", 开机触发

"condition": "screenOff==true", 关闭屏幕触发

input.getLastKey() == 4 按返回键触发（支持按键模拟主页键返回键任务键，比如悬浮球菜单、Xposed edge手势）

3 QQ、微信、TIM、网易云音乐 情景模式说明：

微信：双进程版和暂停进程版

QQ、TIM、网易云音乐：双进程版和暂停进程版+单进程版

根据不同使用场景任意切换（支持按键模拟，比如悬浮球菜单、Xposed edge手势等）

双进程版：在应用程序界面按 <主页键> 导致离开应用程序界面时触发

和暂停进程版：在应用程序界面按 <任务键> 导致离开应用程序界面时触发

单进程版：在应用程序界面按 <返回键> 导致离开应用程序界面时触发

（通过通知栏、手势等使程序后台则不执行）

附情景模式：

```json
[
  {
    "name": "[测试用] ",
    "description": "点击home键关闭蓝牙且提示ok。 用以检查按键触发条件可用性和是否按键混淆(比如按下主页键再按任务键可能导致两个键均能触发，或点击屏幕任何位置都触发) 。(input.getLastKey == 187按下任务键触发,input.getLastKey == 4按下返回键触发。) (标准写法input.getLastKey() == 3) ",
    "priority": 2,
    "condition": "input.getLastKey == 3",
    "actions": [
      "hw.disableBT()",
      "ui.showShortToast(\"OK\");"
    ]
  }
]
```

### 微信：

```json
[
  {
    "name": "微信优能 双进程",
    "description": "离开微信界面，结束主进程和push以外的微信进程。",
    "priority": 2,
    "condition": "frontPkgChanged == true && from == \"com.tencent.mm\"",
    "actions": [
      "Thread.sleep(5000);",
      "sh.exe(\"ps -ef|grep com.tencent.mm:|grep -v push|grep -v grep|awk '{print $2}'|xargs kill -19\");",
      "Thread.sleep(30000);",
      "sh.exe(\"ps -ef|grep com.tencent.mm:|grep -v push|grep -v grep|awk '{print $2}'|xargs kill -9\");"
    ]
  }
]
```



```json
[
  {
    "name": "微信优能 双进程 按键触发 测试",
    "description": "按下主页导致离开微信界面，结束主进程和push以外的微信进程。按其他键导致微信后台则不执行（通过通知栏、手势使程序后台也不执行）（支持按键模拟主页键返回键任务键，比如悬浮球菜单、Xposed edge手势）。（单双进程版原本是情景模式、乖巧模式、后台启动规则搭配使用的（暂停进程版不需要），单独使用情景模式或依然生效。）",
    "priority": 2,
    "condition": "frontPkgChanged == true && from == \"com.tencent.mm\" && input.getLastKey() == 3",
    "actions": [
      "Thread.sleep(500);",
      "sh.exe(\"ps -ef|grep com.tencent.mm:|grep -v push|grep -v grep|awk '{print $2}'|xargs kill -19\");",
      "Thread.sleep(500);",
      "sh.exe(\"ps -ef|grep com.tencent.mm:|grep -v push|grep -v grep|awk '{print $2}'|xargs kill -9\");"
    ]
  }
]
```

```json
[
  {
    "name": "微信优能 暂停进程版 按键触发 测试",
    "description": "按下任务键导致离开微信界面，暂停主进程和push以外的微信进程。按其他键导致微信后台则不执行（通过通知栏、手势使程序后台也不执行）（支持按键模拟主页键返回键任务键，比如悬浮球菜单、Xposed edge手势）。（单双进程版原本是情景模式、乖巧模式、后台启动规则搭配使用的（暂停进程版不需要），单独使用情景模式或依然生效。）",
    "priority": 2,
    "condition": "frontPkgChanged == true && from == \"com.tencent.mm\" && input.getLastKey() == 187",
    "actions": [
      "Thread.sleep(500);",
      "sh.exe(\"ps -ef|grep com.tencent.mm:|grep -v push|grep -v grep|awk '{print $2}'|xargs kill -19\");"
    ]
  }
]
```

```json
[
  {
    "name": "微信优能 恢复被暂停的进程通用版 按键触发 测试",
    "description": "打开微信主程序界面 恢复被暂停的进程",
    "priority": 2,
    "condition": "frontPkgChanged == true && to == \"com.tencent.mm\"",
    "actions": [
      "Thread.sleep(500);",
      "sh.exe(\"ps -ef|grep com.tencent.mm|grep -v grep|awk '{print $2}'|xargs kill -18\");"
    ]
  }
]
```



### QQ:

```json
[
  {
    "name": "QQ优能 双进程版",
    "description": "离开QQ主程序界面，结束主进程和MSF以外的进程。",
    "priority": 2,
    "condition": "frontPkgChanged == true && from == \"tencent.mobileqq\"",
    "actions": [
      "Thread.sleep(5000);",
      "sh.exe(\"ps -ef|grep com.tencent.mobileqq:|grep -v MSF|grep -v grep|awk '{print $2}'|xargs kill -19\")",
      "Thread.sleep(30000);",
      "sh.exe(\"ps -ef|grep com.tencent.mobileqq:|grep -v MSF|grep -v grep|awk '{print $2}'|xargs kill -9\");"
    ]
  }
]
```

```json
[
  {
    "name": "QQ优能 双进程版 按键触发 测试",
    "description": "按下主页键导致离开QQ主程序界面，结束主进程和MSF以外的进程。按其他键导致QQ后台则不执行（通过通知栏、手势使程序后台也不执行）（支持按键模拟主页键返回键任务键，比如悬浮球菜单、Xposed edge手势）。（单双进程版原本是情景模式、乖巧模式、后台启动规则搭配使用的（暂停进程版不需要），单独使用情景模式或依然生效。）",
    "priority": 2,
    "condition": "frontPkgChanged == true && from == \"tencent.mobileqq\" && input.getLastKey() == 3",
    "actions": [
      "Thread.sleep(200);",
      "sh.exe(\"ps -ef|grep com.tencent.mobileqq:|grep -v MSF|grep -v grep|awk '{print $2}'|xargs kill -19\")",
      "Thread.sleep(200);",
      "sh.exe(\"ps -ef|grep com.tencent.mobileqq:|grep -v MSF|grep -v grep|awk '{print $2}'|xargs kill -9\");"
    ]
  }
]
```



```json
[
  {
    "name": "QQ优能 单进程版 按键触发 测试",
    "description": "按下返回键导致离开QQ主程序界面，结束MSF以外的QQ进程。按其他键导致QQ后台则不执行（通过通知栏、手势使程序后台也不执行）（支持按键模拟主页键返回键任务键，比如悬浮球菜单、Xposed edge手势）。（单双进程版原本是情景模式、乖巧模式、后台启动规则搭配使用的（暂停进程版不需要），单独使用情景模式或依然生效。）",
    "priority": 2,
    "condition": "frontPkgChanged == true && from == \"com.tencent.tim\" && input.getLastKey() == 4",
    "actions": [
      "Thread.sleep(200);",
      "sh.exe(\"ps -ef|grep com.tencent.mobileqq|grep -v MSF|grep -v grep|awk '{print $2}'|xargs kill -19\")",
      "Thread.sleep(200);",
      "sh.exe(\"ps -ef|grep com.tencent.mobileqq|grep -v MSF|grep -v grep|awk '{print $2}'|xargs kill -9\");"
    ]
  }
]
```

```json
[
  {
    "name": "QQ优能 暂停进程版 按键触发 测试",
    "description": "按下任务键导致离开QQ主程序界面，暂停MSF以外的QQ进程。按其他键导致QQ后台则不执行（通过通知栏、手势使程序后台也不执行）（支持按键模拟主页键返回键任务键，比如悬浮球菜单、Xposed edge手势）。（单双进程版原本是情景模式、乖巧模式、后台启动规则搭配使用的（暂停进程版不需要），单独使用情景模式或依然生效。）",
    "priority": 2,
    "condition": "frontPkgChanged == true && from == \"com.tencent.tim\" && input.getLastKey() == 187",
    "actions": [
      "Thread.sleep(200);",
      "sh.exe(\"ps -ef|grep com.tencent.mobileqq|grep -v MSF|grep -v grep|awk '{print $2}'|xargs kill -19\");"
    ]
  }
]
```

```json
[
  {
    "name": "QQ优能 恢复被暂停的进程通用版 按键触发 测试",
    "description": "打开QQ主程序界面 恢复被暂停的进程（）",
    "priority": 2,
    "condition": "frontPkgChanged == true && to == \"com.tencent.tim\"",
    "actions": [
      "Thread.sleep(200);",
      "sh.exe(\"ps -ef|grep com.tencent.mobileqq|grep -v grep|awk '{print $2}'|xargs kill -18\");"
    ]
  }
]
```

### TIM:

```json
[
  {
    "name": "TIM优能 双进程版 按键触发 测试",
    "description": "按下主页键导致TIM后台时，结束主进程和MSF以外的TIM进程。按其他键导致TIM后台则不执行（通过通知栏、手势使程序后台也不执行）（支持按键模拟主页键返回键任务键，比如悬浮球菜单、Xposed edge手势）。（单双进程版原本是情景模式、乖巧模式、后台启动规则搭配使用的（暂停进程版不需要），单独使用情景模式或依然生效。）",
    "priority": 2,
    "condition": "frontPkgChanged == true && from == \"com.tencent.tim\" && input.getLastKey() == 3",
    "actions": [
      "Thread.sleep(200);",
      "sh.exe(\"ps -ef|grep com.tencent.tim:|grep -v MSF|grep -v grep|awk '{print $2}'|xargs kill -19\")",
      "Thread.sleep(200);",
      "sh.exe(\"ps -ef|grep com.tencent.tim:|grep -v MSF|grep -v grep|awk '{print $2}'|xargs kill -9\");"
    ]
  }
]
```

```json
[
  {
    "name": "TIM优能 单进程版 按键触发 测试",
    "description": "按下返回键导致TIM后台时，只保留MSF进程。按其他键导致TIM后台则不执行（通过通知栏、手势使程序后台也不执行）（支持按键模拟主页键返回键任务键，比如悬浮球菜单、Xposed edge手势）。（单双进程版原本是情景模式、乖巧模式、后台启动规则搭配使用的（暂停进程版不需要），单独使用情景模式或依然生效。）",
    "priority": 2,
    "condition": "frontPkgChanged == true && from == \"com.tencent.tim\" && input.getLastKey() == 4",
    "actions": [
      "Thread.sleep(200);",
      "sh.exe(\"ps -ef|grep com.tencent.tim|grep -v MSF|grep -v grep|awk '{print $2}'|xargs kill -19\")",
      "Thread.sleep(200);",
      "sh.exe(\"ps -ef|grep com.tencent.tim|grep -v MSF|grep -v grep|awk '{print $2}'|xargs kill -9\");"
    ]
  }
]
```

```json
[
  {
    "name": "TIM优能 暂停进程版 按键触发 测试",
    "description": "按下任务键导致TIM后台时，暂停MSF以外的进程。按其他键导致TIM后台则不执行（通过通知栏、手势使程序后台也不执行）（支持按键模拟主页键返回键任务键，比如悬浮球菜单、Xposed edge手势）。（单双进程版原本是情景模式、乖巧模式、后台启动规则搭配使用的（暂停进程版不需要），单独使用情景模式或依然生效。）",
    "priority": 2,
    "condition": "frontPkgChanged == true && from == \"com.tencent.tim\" && input.getLastKey() == 187",
    "actions": [
      "Thread.sleep(200);",
      "sh.exe(\"ps -ef|grep com.tencent.tim|grep -v MSF|grep -v grep|awk '{print $2}'|xargs kill -19\")"
    ]
  }
]
```

```json
[
  {
    "name": "TIM优能 恢复被暂停的进程通用版 按键触发 测试",
    "description": "打开TIM主程序界面 恢复被暂停的进程（）",
    "priority": 2,
    "condition": "frontPkgChanged == true && to == \"com.tencent.tim\"",
    "actions": [
      "Thread.sleep(200);",
      "sh.exe(\"ps -ef|grep com.tencent.tim|grep -v grep|awk '{print $2}'|xargs kill -18\")"
    ]
  }
]
```

### 网易云：

```json
[
  {
    "name": "网易云优能 双进程版 按键触发 测试",
    "description": "按下主页键导致离开网易云主程序界面，结束主进程和play以外的网易云进程。按其他键导致网易云后台则不执行（通过通知栏、手势使程序后台也不执行）（支持按键模拟主页键返回键任务键，比如悬浮球菜单、Xposed edge手势）。（单双进程版原本是情景模式、乖巧模式、后台启动规则搭配使用的（暂停进程版不需要），单独使用情景模式或依然生效。）",
    "priority": 2,
    "condition": "frontPkgChanged == true && from == \"com.netease.cloudmusic\" && input.getLastKey() == 3",
    "actions": [
      "Thread.sleep(1000);",
      "sh.exe(\"ps -ef|grep com.netease.cloudmusic:|grep -v :play|grep -v grep|awk '{print $2}'|xargs kill -9\");"
    ]
  }
]
```

```json
[
  {
    "name": "网易云优能 单进程版 按键触发 测试 ",
    "description": "按下返回键导致离开网易云主程序界面，结束play以外的进程。按其他键导致网易云后台则不执行（通过通知栏、手势使程序后台也不执行）（支持按键模拟主页键返回键任务键，比如悬浮球菜单、Xposed edge手势）。（单双进程版原本是情景模式、乖巧模式、后台启动规则搭配使用的（暂停进程版不需要），单独使用情景模式或依然生效。）",
    "priority": 2,
    "condition": "frontPkgChanged == true && from == \"com.netease.cloudmusic\" && input.getLastKey() == 4",
    "actions": [
      "Thread.sleep(500);",
      "sh.exe(\"ps -ef|grep com.netease.cloudmusic|grep -v :play|grep -v grep|awk '{print $2}'|xargs kill -9\");"
    ]
  }
]
```

```json
[
  {
    "name": "网易云优能 暂停进程版 按键触发 测试 ",
    "description": "按下任务键导致离开网易云主程序界面，暂停play以外的进程。按其他键导致网易云后台则不执行（通过通知栏、手势使程序后台也不执行）（支持按键模拟主页键返回键任务键，比如悬浮球菜单、Xposed edge手势）。（单双进程版原本是情景模式、乖巧模式、后台启动规则搭配使用的（暂停进程版不需要），单独使用情景模式或依然生效。）",
    "priority": 2,
    "condition": "frontPkgChanged == true && from == \"com.netease.cloudmusic\" && input.getLastKey() == 187",
    "actions": [
      "Thread.sleep(500);",
      "sh.exe(\"ps -ef|grep com.netease.cloudmusic|grep -v :play|grep -v grep|awk '{print $2}'|xargs kill -19\");"
    ]
  }
]
```

```json
[
  {
    "name": "网易云优能 恢复被暂停的进程通用版 按键触发 测试 ",
    "description": "打开网易云主程序界面 恢复被暂停的进程（）",
    "priority": 2,
    "condition": "frontPkgChanged == true && to == \"com.netease.cloudmusic\"",
    "actions": [
      "Thread.sleep(500);",
      "sh.exe(\"ps -ef|grep com.netease.cloudmusic|grep -v grep|awk '{print $2}'|xargs kill -18\");"
    ]
  }
]
```

