---
author: xlc520
title: WSL 问题
description: 
date: 2023-01-26
category: Linux
tag: 
- Linux
- WSL
article: true
timeline: true
icon: linux
---

# WSL 问题



## 启动docker后卡住starting the engine

检查发现是wsl2没配置好

## wsl2配置以及微软官方的docker配置教程

[安装 WSL ](https://learn.microsoft.com/zh-cn/windows/wsl/install)

[WSL 上的 Docker 容器入门](https://learn.microsoft.com/zh-cn/windows/wsl/tutorials/wsl-containers)

## 问题：<3>WSL (17) ERROR: UtilTranslatePathList:2853: Failed to translate D:\Software\Microsoft VS Code\bin

查看我并没有这个路径，在环境变量中找到删除即可。

## 问题：占位程序接收到错误数据。 Error code: Wsl/Service/0x800706f7

解决：

[关于Windows下Linux子系统的安装问题0x800701bc与wsl2出现“占位程序接收到错误数据”的解决办法-CSDN博客](https://blog.csdn.net/qq_44652876/article/details/126697937)

**如果重启电脑后反复遇到占位程序接收到错误数据：**

1. 下载NoLsp工具：http://www.proxifier.com/tmp/Test20200228/NoLsp.exe。
2. 使用管理员权限启动命令提示符（CMD）或PowerShell，并cd到nolsp.exe的位置。
3. 在命令行中输入以下命令（假设NoLsp.exe位于当前目录）：

```text
NoLsp.exe c:\windows\system32\wsl.exe
```

4.如果命令返回“success”，则表示操作成功。

5. 继续输入并运行以下命令：

```text
netsh winsock reset
```

6. 不需要重启，打开一个新的命令行输入wsl，已经可以启动

> 使用NoLsp防止LSP DLL加载到WSL进程是什么原理？
>
> 使用 NoLsp.exe 防止 LSP DLL 加载到 WSL（Windows Subsystem for Linux）进程的原理涉及到了几个关键概念：LSP（Layered Service Provider）、DLL（Dynamic Link Library）和WSL本身的工作原理。让我们逐一解释：
> LSP（Layered Service Provider）
> **定义**: LSP是一种Windows套接字（Winsock）层，它可以插入自己的网络服务提供者来监视和修改网络数据。这通常用于数据包过滤、网络流量监控、代理服务等。
> **工作原理**: LSP作为中间层，能截获并操控Winsock API的调用。这使得它可以在数据发送到网络协议栈之前，或在数据从协议栈返回到应用程序之前，对数据进行处理。
> DLL（Dynamic Link Library）
> **定义**: DLL是包含可以被多个程序同时使用的代码和数据的库。在这种情况下，LSP通常以DLL的形式存在。
> **影响**: 当一个程序（如WSL）启动时，如果系统配置了特定的LSP，相关的DLL就会被加载到程序的进程空间中，可能会影响程序的网络行为。
> WSL（Windows Subsystem for Linux）
> **工作原理**: WSL允许Windows用户运行Linux环境和命令行工具，而不必安装完整的Linux操作系统。WSL使用Windows的网络堆栈，因此受到LSP的影响。
> 使用 NoLsp.exe 的原理
> **目的**: NoLsp.exe 的目的是阻止特定的LSP DLL加载到WSL进程中，从而避免由这些LSP引起的潜在问题，如网络连接问题或性能下降。
> **操作**: 它通过修改Windows的网络配置，特别是针对 wsl.exe 进程，来实现这一目的。这样，即使系统上安装了LSP，它们也不会影响到WSL的运行。
> 总的来说，使用 NoLsp.exe 是一种确保WSL不受系统中安装的LSP影响的方法。这对于解决由于网络配置不当引起的WSL启动问题或性能问题非常有用。

## 问题：wsl: 检测到 localhost 代理配置，但未镜像到 WSL。NAT 模式下的 WSL 不支持 localhost 代理。

解决：

[hez2010：WSL2 的 2.0 更新彻底解决网络问题](https://zhuanlan.zhihu.com/p/657110386)

**请注意这篇文章中关于docker服务的WSL配置！否则会产生本文中的下一个问题！**

## 问题：Windows家庭版寄主机无法连接到Docker Desktop中的MySQL容器问题

[季风：23年11月 解决Windows家庭版寄主机无法连接到Docker Desktop中的MySQL容器问题](https://zhuanlan.zhihu.com/p/668874450)





## Error response from daemon:` open \\.\pipe\docker_engine_windows`

```
docker config ls 

Error response from daemon: open \\.\pipe\docker_engine_windows: The system cannot find the file specified.
```

### 第一种解决方法：

Try running the below commands in the Powershell and start the docker

```
Net stop com.docker.service
```

And then

```
Net start com.docker.service
```

### 第二种：

Alongside the googling I tried asking about this on Sitecore Slack's Docker channel. And [Jeff L'Heureux](https://twitter.com/jflh) from Sitecore suggested that they'd had dealings with Docker Support over a related issue, and had been given a potential fix. And this one didn't involve any uninstalling. The steps he relayed are:

- Fire up a console as Administrator

- Run `cd 'C:\Program Files\Docker\Docker\resources\'`

   

  Run `.\dockerd.exe -G docker-users --config-file c:\programdata\docker\config\daemon.json --register-service`

- Run `start-service docker`

Now this did not work for me - trying to register the docker service raised an error that the service already existed. However I was able to work out a slight alternative to this which did seem to work for me:

- Fire up a console as Administrator
- Run `stop-service docker`
- Run `cd 'C:\Program Files\Docker\Docker\resources\'`
- Run ``.\dockerd.exe --unregister-service`
- Reboot the computer
- Run ``.\dockerd.exe -G docker-users --config-file c:\programdata\docker\config\daemon.json --register-service`
- Reboot the computer
- Restart Docker Desktop
- Put Docker Desktop back into Windows Containers mode

Having done this, I was able to start my containers again, and I could see that the "missing" named pipe had now appeared.

Docker do suggest you might need to change the Docker Engine config in 

`c:\programdata\docker\config\daemon.json`

 to

```json
{
  "experimental": false,
  "hosts": [
    "npipe:////./pipe/docker_engine_windows"
  ]
}
```

But I didn't find this necessary for my machines - which perhaps makes sense because the software was clearly looking for that pipe originally, so it shouldn't need to be told to?

### 第三种：

Try add Optional Feature - Container and Hyper-V to windows.
In Windows 11:
Apps → Optional features → More Windows features → Check Containers and Hyper-V and click OK

or try run:
```powershell
Enable-WindowsOptionalFeature -Online -FeatureName containers –All
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V –All
```

