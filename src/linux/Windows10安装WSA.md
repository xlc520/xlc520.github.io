---
author: xlc520
title: Windows 10 安装 WSA
description: 
date: 2023-01-30
category: Linux
tag: 
- Linux
- Windows 10
- WSA
article: true
timeline: true
icon: linux
password: 
---

# Windows 10 安装 WSA

## 简介

Windows Subsystem for Android （官方中文译名：适用于 Android™️ 的 Windows 子系统）包括 Linux 内核和基于 Android 开源项目（AOSP）版本的 Android 操作系统。该子系统在 Hyper-V 虚拟机中运行，可以将 AOSP 环境中 App 的运行时和 API 映射到 Windows 图形层、内存缓冲区、输入模式、物理和虚拟设备以及传感器 ，已现身微软商店，需要 8GB 内存并推荐 16GB 配置，可在 ARM64 或 x64 处理器以及英特尔、AMD、高通的 CPU 上运行。
目前只有 Windows11 可以通过微软应用商店直接安装WSA，Windows10 的用户可以按照本文的步骤安装。

## 步骤

1. 将你的系统更新到 Windows 10 22H2 10.0.19045.2311 或更高版本.

- 你可以通过 `winver` 命令查看您当前的 Windows 版本.
- 如果您的 Windows 版本低于 10.0.19045.2311, 请将您的系统更新到 10.0.19045.2311 或以上.

1. 安装 WSL2

- 在开始中搜索 **启用或关闭 Windows 功能**
- 将 **Hyper-V**、**适用于 Linux 的 Windows 子系统**、**虚拟机平台** 前面的选择框打勾后确定
- 重启系统
- 打开 **Microsoft Store**，搜索 **Ubuntu** 并安装（其他的 Linux 发行版也可以，本文使用 Ubuntu）
- 运行 Ubuntu 等待系统启动并设置用户密码，密码会在下一步用到

1. 获取 WSA AppX 包（在 Linux 中执行）

- 执行 `apt install git`

- 执行 `cd /`

- 执行 `git clone https://ghproxy.com/https://github.com/LSPosed/MagiskOnWSALocal.git`

- 执行 `sudo bash /MagiskOnWSALocal/scripts/install_deps.sh`（过程中会提示输入密码）

- 【可选】【推荐】设置代理，加速下载

  - 以下操作在 Windows 执行
  - 按下 `Win + R`，输入 `cmd` 回车
  - 执行 `ipconfig`，找到 `以太网适配器 vEthernet (WSL):` 后面的 `IPv4 地址`
  - 编辑 `\\wsl.localhost\Ubuntu\MagiskOnWSALocal\scripts\build.sh`
  - 搜索 `aria2c`
  - 在 `aria2c` 后面添加 `--all-proxy="<IPv4 地址>:<Windows代理端口号>"`（注意和`aria2c`之间有空格）

- 执行 `sudo bash /MagiskOnWSALocal/scripts/run.sh`（过程中会提示输入密码）

- 新界面中使用 `↑` `↓` `←` `→` 键更改选项，空格键选中，回车键确认

- `Build arch`选择`x64`还是 `arm64`

  需要根据设备来，你可以通过以下方式确定

  - 以下操作在 Windows 执行
  - 按下 `Win + R`，输入 `cmd` 回车
  - 执行 `echo %PROCESSOR_ARCHITECTURE%`
  - 如果显示 **x86** 或 **AMD64** 则选择 `x64`
  - 如果显示 **ARM64** 则选择 `arm64`

- `WSA release type` 建议选择 `insider fast`

- `Magisk version` 建议选择 `stable`

- 其他选项根据需求选择

1. 在 Windows 中打开路径 `\\wsl.localhost\Ubuntu\MagiskOnWSALocal\output`，将文件夹中的压缩包解压到合适的路径（安装路径）

2. [下载Patch文件](https://github.nite07.com/cinit/WSAPatch/releases/download/r2022.12.10/patch-20221210.7z)并解压，将 **icu.dll** 和 **WsaPatch.dll** 复制到 `<第4步解压的文件夹>\WsaClient`

3. 编辑

  ```
  <第4步解压的文件夹>\AppxManifest.xml
  ```

  - 在 `AppxManifest.xml` 找到 `TargetDeviceFamily` 节点

    ```
    <TargetDeviceFamily Name="Windows.Desktop" MinVersion="10.0.22000.120" MaxVersionTested="10.0.22000.120"/>
    ```

    把 MinVersion 从 10.0.22000.120 改成 10.0.19045.2311

  - 在 `AppxManifest.xml` 删除 `customInstall` 相关节点，一共有两个

    ```
    <rescap:Capability Name="customInstallActions"/>
    ```

    ```xml
    <desktop6:Extension Category="windows.customInstall">
        <desktop6:CustomInstall Folder="CustomInstall" desktop8:RunAsUser="true">
            <desktop6:RepairActions>
                <desktop6:RepairAction File="WsaSetup.exe" Name="Repair" Arguments="repair"/>
            </desktop6:RepairActions>
            <desktop6:UninstallActions>
                <desktop6:UninstallAction File="WsaSetup.exe" Name="Uninstall" Arguments="uninstall"/>
            </desktop6:UninstallActions>
        </desktop6:CustomInstall>
    </desktop6:Extension>
    ```

7. 运行 `<第4步解压的文件夹>\Run.bat`

## 实用工具

[WSA工具箱](https://apps.microsoft.com/store/detail/wsa工具箱/9PPSP2MKVTGT?hl=zh-cn&gl=cn)

## 连接 Windows 代理

设置代理

```
adb shell "ip route list match 0 table all scope global | cut -F3" # 获取IP
adb shell "settings put global http_proxy <ip>:<端口>"
```

关闭代理(无需重启)

```
adb shell settings put global http_proxy :0
adb shell settings delete global http_proxy
```

## 参考文章

[适用于 Windows 10 的 WSA 补丁](https://github.com/cinit/WSAPatch/blob/main/README_zhs.md)
[Magisk on WSA (with Google Apps)](https://github.com/LSPosed/MagiskOnWSALocal)