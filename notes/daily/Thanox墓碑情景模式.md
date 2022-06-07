---
author: xlc520
title: Thanox 碑情景模式
description: Thanox 墓碑情景模式
date: 2022-06-21
category: daily
tag: daily
article: true
timeline: true
icon: date
password: 
---

# Thanox墓碑情景模式

## 最终合并2022.06.06

分为两个版本，普通版和音频焦点版，根据自己需求选一个

搭配[NoANR(点击下载)](https://github.com/myflavor/NoANR/releases/)

[Thanox3.9.9(点击下载)](https://coolstars.lanzoum.com/in97305v6ewj)
[github](https://github.com/Tornaco/Thanox/releases)

### 普通版

```json
[
    {
        "name": "NoActive",
        "description": "普通版-应用进入后台冻结进程",
        "priority": -1,
        "condition": "frontPkgChanged",
        "actions": [
            "if(thanos.getActivityManager().isPkgSmartStandByEnabled(to)){su.exe(\"kill -CONT `pgrep -f \"+ to + \"`\");su.exe(\"appops set \" +to + \" WAKE_LOCK default\")}",
            "if(!thanos.getActivityManager().isPkgSmartStandByEnabled(from)){break}",
            "foreach (rule : thanos.getActivityManager().getAllStandbyRules()){if(rule.startsWith(\"KEEP\") && rule.contains(from + \"/\")){break}}",
            "su.exe(\"appops set \" + from + \" WAKE_LOCK ignore\");",
            "Thread.sleep(2000);",
            "if(activity.getFrontAppPackage()!=from && !thanos.windowManager.hasVisibleWindows(from)){su.exe(\"kill -STOP `pgrep -f \"+ from +\"`\")};"
        ]
    }
]
```

### 音频焦点版

```json
[
    {
        "name": "NoActive",
        "description": " 音频焦点版-应用进入后台冻结进程",
        "priority": -1,
        "condition": "frontPkgChanged",
        "actions": [
            "if(thanos.getActivityManager().isPkgSmartStandByEnabled(to)){su.exe(\"kill -CONT `pgrep -f \"+ to + \"`\");su.exe(\"appops set \" +to + \" WAKE_LOCK default\")}",
            "if(!thanos.getActivityManager().isPkgSmartStandByEnabled(from)){break}",
            "foreach (rule : thanos.getActivityManager().getAllStandbyRules()){if(rule.startsWith(\"KEEP\") && rule.contains(from + \"/\")){break}}",
            "if(su.exe(\"dumpsys audio|grep client:|grep -v died|cut -d ' ' -f 6\").out.contains(from)){break}",
            "su.exe(\"appops set \" + from + \" WAKE_LOCK ignore\");",
            "Thread.sleep(2000);",
            "if(activity.getFrontAppPackage()!=from && !thanos.windowManager.hasVisibleWindows(from)){su.exe(\"kill -STOP `pgrep -f \"+ from +\"`\")};"
        ]
    }
]
```

```json
[
    {
        "name": "NoActive(Plus)",
        "description": " 音频焦点版-应用通知移除冻结进程",
        "priority": 1,
        "condition": "notificationRemoved && thanos.getActivityManager().isPkgSmartStandByEnabled(pkgName)",
        "actions": [
            "foreach (rule : thanos.getActivityManager().getAllStandbyRules()){if(rule.startsWith(\"KEEP\") && rule.contains(pkgName + \"/\")){break}}",
            "su.exe(\"appops set \" + pkgName + \" WAKE_LOCK ignore\");",
            "if(activity.getFrontAppPackage()!=from && !thanos.windowManager.hasVisibleWindows(pkgName)){su.exe(\"kill -STOP `pgrep -f \"+ pkgName +\"`\")};"
        ]
    }
]
```

## 2022.06.05更新

不再使用whiteApps全局变量，使用乖巧规则，即乖巧KEEP规则就是白名单

### 解冻(通用)

```json
[
    {
        "name": "解冻进程(通用)",
        "description": "当应用进入前台时解冻进程",
        "priority": 1,
        "condition": "frontPkgChanged && thanos.getActivityManager().isPkgSmartStandByEnabled(to)",
        "actions": [
            "su.exe(\"kill -CONT `pgrep -f \"+ to + \"`\");",
            "su.exe(\"appops set \" +to + \" WAKE_LOCK default\");"
        ]
    }
]
```

冻结有两个版本，一个普通版，一个跳过音频焦点版（获得音频焦点的应用不会被冻结，大部分音乐播放器在播放的时候都会获取音频焦点，暂停时取消焦点，部分流氓APP暂停不会取消音频焦点，由于是从shell取的值，可能部分机子会有问题？）
全局变量whiteApps可添加白名单APP跳过墓碑仅乖巧

### 普通版

```json
[
    {
        "name": "冻结进程(AppOps)",
        "description": "普通版-当应用进入后台时设置AppOps",
        "priority": 1,
        "condition": "frontPkgChanged && thanos.getActivityManager().isPkgSmartStandByEnabled(from)",
        "actions": [
            "foreach (rule : thanos.getActivityManager().getAllStandbyRules()){if(rule.startsWith(\"KEEP\") && rule.contains(from + \"/\")){break}}",
            "su.exe(\"appops set \" + from + \" WAKE_LOCK ignore\");"
        ]
    }
]
```

```json
[
    {
        "name": "冻结进程",
        "description": "普通版-当应用进入后台时冻结进程",
        "priority": 2,
        "delay": 2000,
        "condition": "frontPkgChanged && thanos.getActivityManager().isPkgSmartStandByEnabled(from)",
        "actions": [
            "foreach (rule : thanos.getActivityManager().getAllStandbyRules()){if(rule.startsWith(\"KEEP\") && rule.contains(from + \"/\")){break}}",
            "if(activity.getFrontAppPackage()!=from && !thanos.windowManager.hasVisibleWindows(from)){su.exe(\"kill -STOP `pgrep -f \"+ from +\"`\")};"
        ]
    }
]
```



### 跳过音频焦点版

（推荐开启乖巧模式跳过通知的应用或者设置乖巧规则）

```json
[
    {
        "name": "冻结进程(AppOps)",
        "description": "跳过音频焦点版-当应用进入后台时设置AppOps",
        "priority": 1,
        "condition": "frontPkgChanged && thanos.getActivityManager().isPkgSmartStandByEnabled(from)",
        "actions": [
            "foreach (rule : thanos.getActivityManager().getAllStandbyRules()){if(rule.startsWith(\"KEEP\") && rule.contains(from + \"/\")){break}}",
            "if(su.exe(\"dumpsys audio|grep client:|grep -v died|cut -d ' ' -f 6\").out.contains(from)){break}",
            "su.exe(\"appops set \" + from + \" WAKE_LOCK ignore\");"
        ]
    }
]
```

```json
[
    {
        "name": "冻结进程",
        "description": "跳过音频焦点版-当应用进入后台时冻结进程",
        "priority": 2,
        "delay": 2000,
        "condition": "frontPkgChanged && thanos.getActivityManager().isPkgSmartStandByEnabled(from)",
        "actions": [
            "foreach (rule : thanos.getActivityManager().getAllStandbyRules()){if(rule.startsWith(\"KEEP\") && rule.contains(from + \"/\")){break}}",
            "if(su.exe(\"dumpsys audio|grep client:|grep -v died|cut -d ' ' -f 6\").out.contains(from)){break}",
            "if(activity.getFrontAppPackage()!=from && !thanos.windowManager.hasVisibleWindows(from)){su.exe(\"kill -STOP `pgrep -f \"+ from +\"`\")};"
        ]
    }
]
```

```json
[
    {
        "name": "冻结进程(增强)",
        "description": "跳过音频焦点版-当应用通知移除时冻结进程",
        "priority": 1,
        "condition": "notificationRemoved && thanos.getActivityManager().isPkgSmartStandByEnabled(pkgName)",
        "actions": [
            "foreach (rule : thanos.getActivityManager().getAllStandbyRules()){if(rule.startsWith(\"KEEP\") && rule.contains(pkgName + \"/\")){break}}",
            "su.exe(\"appops set \" + pkgName + \" WAKE_LOCK ignore\");",
            "if(activity.getFrontAppPackage()!=from && !thanos.windowManager.hasVisibleWindows(pkgName)){su.exe(\"kill -STOP `pgrep -f \"+ pkgName +\"`\")};"
        ]
    }
]
```

## 合并

### 合并冻结

```json
[
    {
        "name": "冻结进程(合并)",
        "description": "当应用进入后台时冻结进程",
        "priority": -1,
        "condition": "frontPkgChanged && thanos.getActivityManager().isPkgSmartStandByEnabled(from)",
        "actions": [
            "foreach (rule : thanos.getActivityManager().getAllStandbyRules()){if(rule.startsWith(\"KEEP\") && rule.contains(from + \"/\")){break}}",
            "su.exe(\"appops set \" + from + \" WAKE_LOCK ignore\");",
            "Thread.sleep(2000);",
            "if(activity.getFrontAppPackage()!=from && !thanos.windowManager.hasVisibleWindows(from)){su.exe(\"kill -STOP `pgrep -f \"+ from +\"`\")};"
        ]
    }
]
```

### 合并解冻

```json
[
    {
        "name": "解冻进程(合并)",
        "description": "当应用进入前台时解冻进程",
        "priority": 1,
        "condition": "frontPkgChanged && thanos.getActivityManager().isPkgSmartStandByEnabled(to)",
        "actions": [
            "su.exe(\"kill -CONT `pgrep -f \"+ to + \"`\");",
            "su.exe(\"appops set \" +to + \" WAKE_LOCK default\");"
        ]
    }
]
```



