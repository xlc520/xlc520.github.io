---
author: xlc520
title: 宝塔面板绕过绑定账号
excerpt: 
description: 宝塔面板v7.7.0-解锁Nginx防火墙及网站监控报表-绕过绑定账号
date: 2022-01-14
category: Linux
tag: Linux
article: true
timeline: true
icon: type
---

# 宝塔面板 v7.7.0-解锁 Nginx 防火墙及网站监控报表-绕过绑定账号

测试环境：Ubuntu / Debian / CentOS
测试时间：2021-12-20
宝塔版本： 7.7.0
仅测试了 Nginx 防火墙及网站监控报表两款插件，其它收费插件未测试
其它系统及版本未进行测试，请自行验证，请勿在生产环境下进行测试！
注意：修改代码后需要重启面板服务才能使其生效，如果面板出现乱码重启服务器即可；

解锁所有付费插件为永不过期

文件路径：www/server/panel/data/plugin.json
搜索字符串："endtime": -1 全部替换为 "endtime": 999999999999
显示永久专业版或企业版标识

文件路径：www/server/panel/data/plugin.json
查找字符串：name": "coll_admin"，将 panel_pro 或 panel_ltd 后面的-1 改为 0
禁止解锁插件后自动修复为免费版

文件路径：www/server/panel/data/repair.json
查找字符串："id": 16，将这段修复权限的代码删除
禁止宝塔面板检测升级，防止失效

文件路径：www/server/panel/data/plugin.json
查找字符串：name": "coll_admin"，将这段里的 update_mgs 删除或者改为 null
下面是 2021/08/24 的方法，上面是最新的
修改后不能使用问题：如果修改后出现软件中心页面空白，那是因为代码位置有问题，可以参考下面示例图代码位置 位置一定要一致
开始
打开目录/www/server/panel/class 找到并编辑 panelplugin.py 文件
使用 Ctrl+F 搜索并找到 softList['list'] = tmpList 这段代码，在其下方添加如下代码：

```python
                softList['pro'] = 1
        for soft in softList['list']:
            soft['endtime'] = 0
```

示例：
![](https://static.linch.eu.org/bt_2.png)

修改完成后重启面板，重启完成后就可以直接安装收费的插件了，Nginx 防火墙也可以直接安装使用

网站监控报表
如果需要使用网站监控报表还需另外修改一次代码：
安装好网站监控报表插件后打开/www/server/panel/plugin/total 目录并编辑 total_main.py 文件
使用 Ctrl+F 搜索并找到 if 'bt_total' in session: return public.returnMsg(True,'OK!');这段代码
在这段代码前加上#将其注释掉，并在其下方加入以下代码：

```python
        session['bt_total'] = True
        return public.returnMsg(True,'OK!');
```

示例：
![](https://static.linch.eu.org/bt_1.png)

然后再次重启面板，即可使用网站监控报表插件了；

一键消除宝塔的强制登录方法简单粗暴，但是非常有效~

复制该命令到终端运行即可：`rm -f /www/server/panel/data/bind.pl`
