---
author: xlc520
title: Windows 中配置NTP服务器
description: 
date: 2023-11-09
category: pc
tag: pc
article: true
timeline: true
icon: computer
---

# Windows 中配置NTP服务器

在一个网络中，准确的时间同步对于许多应用和服务至关重要。在内网不允许访问互联网，仅有少量PC可以访问互联网时，Windows允许你将主机配置为NTP（网络时间）服务器，以提供准确的时间信息给其他设备。以下是以Windows7为例进行配置。

## **步骤1：打开注册表编辑器**

首先，我们需要打开Windows注册表编辑器，以便对时间服务进行必要的配置。按下 Win + R组合键，输入 regedit并按下 Enter 键。

## **步骤2：修改AnnounceFlags注册表值**

在注册表编辑器中，导航到以下路径：

```bat
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\W32Time\Config
```

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1699510219664-0.png)

找到名为 AnnounceFlags的注册表值，将其修改为 5。这个值决定了Windows主机是否向网络中的其他设备宣告自己是一个NTP服务器。

## **步骤3：启用NtpServer**

继续导航到以下路径：

```bat
HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\W32Time\TimeProviders\NtpServer
```

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1699510219664-1.png)

找到名为 Enabled 的注册表值，将其修改为 1。这将启用Windows主机的NTP服务器功能。

## 步骤4：启动时间服务

打开管理员权限的命令提示符，运行以下命令：

```bat
net start w32time
```

这将启动时间服务以应用你的配置更改。
![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1699510219664-2.png)

## **步骤5：验证NTP服务器**

在命令提示符中运行以下命令，以验证NTP服务器是否正常工作：

```bat
w32tm /stripchart /computer:127.0.0.1
```

输出将显示一系列时间数据点，包括偏移值。这些数据点反映了主机与指定NTP服务器之间的时间同步情况。偏移值应接近零，这表示时间同步正常。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1699510219664-3.png)

恭喜！你已成功将你的Windows7主机配置为NTP服务器。其他设备现在可以使用你的主机作为时间源来确保准确的时间同步。其他设备（如windows）验证结果如下：

```bat
w32tm /stripchart /computer:NTP服务器IP
```

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1699510219664-4.png)
在windows下如果需要修改时间服务器地址，进入控制面板，选择日期和时间，再选择Internet时间，勾选与Internet时间服务器同步，服务器地址填写你需要的地址或域名即可

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1699510219664-5.png)