---
title: 关闭的Win11垃圾功能和广告
excerpt:
description: 关闭的Win11垃圾功能和广告
date: 2024-10-04
category: pc
tag: pc
author: xlc520
article: true
timeline: true
icon: computer
---

```component VPBanner
title: 关闭的Win11垃圾功能和广告
content: 关闭的Win11垃圾功能和广告
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: 电关闭的Win11垃圾功能和广告关闭的Win11垃圾功能和广告
    link: /pc/关闭的Win11垃圾功能和广告
```

# 关闭的Win11垃圾功能和广告

***禁用「让我们完成设备设置」\***

小淙认为这是Win11最烦人的提示，它经常在电脑开机时挡在进入系统前的环节，强行推销哪些你根本用不上的收费功能。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728033881898-0.webp)

虽然可以点「稍后提醒我」跳过，但也要转圈很久才会进入系统，而且过不了多久又会出现，所以建议一次设置永久关闭这个提示。

按Win+I键打开**设置，点击系统 – 通知，**拉到最下面找到 其他设置，关闭**「建议我如何充分利用…」。**

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728033881898-1.webp)

然后在设置找到**账户 – 登陆选项，**关闭**「****使用我的登录信息…」。**

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728033881898-2.webp)

***关闭锁屏广告\***

Windows 11 锁屏已经变成广告展示位，如果你不想微软用你的系统加载广告，可以右键点击桌面空白处，**打开个性化。**

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728033881898-3.webp)

选择锁屏界面，将个性化锁屏界面切换为**「图片」**或**「幻灯片放映」，**如果选了Windows聚焦广告会始终显示。

然后将展开菜单下方的**「在锁屏界面上获取花絮…」关闭。**

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728033881898-4.webp)

***禁用任务栏多余图标\***

Windows 11 任务栏上的小部件提供天气、新闻、汇率等等，即便你不点击，只要光标移动上去都会展开更多信息，非常烦人。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728033881898-5.webp)

右键任务栏打开**任务栏设置。**

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728033881898-6.webp)

关闭所有任务栏项

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728033881898-7.webp)

建议搜索也隐藏，这个功能不常用还占任务栏空间，需要搜索时直接按 Win 键打开开始菜单输入要搜索的内容就行了，开始菜单已经集成了搜索功能。

***关闭多余搜索功能\***

使用 Windows 搜索功能时，不光会搜索你输入的内容，还会推荐一些无关紧要的东西，例如技巧、新闻、建议、热门搜索等。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728033881898-8.webp)

现在还会联网搜索网页，问题是微软的服务器非常慢。

你可能只是想搜索电脑里的文件，但却自作主张帮你搜索相关网页，从而导致搜索结果半天出不来，体验相当垃圾。

首先关闭搜索要点，按 Win+I 键打开**设置 – 隐私和安全性– 搜索权限。**

关闭云内容搜索，拉到最下方的更多设置，关闭**「显示搜索要点」。**

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728033881899-9.webp)

然后关闭网页搜索功能。按 Win+R 打开运行，输入 regedit **打开注册表。**

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728033881899-10.webp)

在地址栏输入这个路径按 Enter 跳转。

-

```
HKEY_CURRENT_USER\SOFTWARE\Policies\Microsoft\Windows
```

在左侧的 Windows 中找有没有 **Explorer。**

如果没有就**右键 Windows – 新建 – 项，**然后命名为 Explorer。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728033881899-11.webp)

左键选中 Explorer，**右键右侧空白处 – 新建 - DWORD（32 位）值。**输入 **DisableSearchBoxSuggestions** 作为名称。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728033881899-12.webp)

双击打开 **DisableSearchBoxSuggestions，**将数值数据中的 0 **改成 1，**点击确定。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728033881899-13.webp)

完成后重启电脑即可禁用搜索中的网页搜索功能。

完成以上设置，你的 Windows 11 应该会变得很干净。




<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
