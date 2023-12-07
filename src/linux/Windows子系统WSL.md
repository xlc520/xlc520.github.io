---
author: xlc520
title: Windows 子系统 WSL
description: 
date: 2023-01-25
category: Linux
tag: 
 - Linux
 - WSL
 - 子系统
 - Windows 
article: true
timeline: true
icon: linux
---

# Windows 子系统 WSL

## 自定义安装

```powershell
Add-AppxPackage .\app_name.appx
```

### 1.第一种

直接下载相关的镜像包。在下载网址中找到自己需要下载的系统包，然后点击即可。

**下载网址：**

**https://docs.microsoft.com/zh-cn/windows/wsl/install-manual**

如果愿意，你也可通过命令行下载首选的发行版，可将 PowerShell 与 [Invoke-WebRequest](https://docs.microsoft.com/zh-CN/powershell/module/microsoft.powershell.utility/invoke-webrequest) cmdlet 一起使用。 例如，下载 Ubuntu 20.04：

```powershell
Invoke-WebRequest -Uri https://aka.ms/wslubuntu2004 -OutFile Ubuntu.appx -UseBasicParsing
```

 **提示**

如果下载需要很长时间，请通过设置 `$ProgressPreference = 'SilentlyContinue'` 来关闭进度栏

你还可以选择使用 [curl 命令行实用程序](https://curl.se/)来下载。 使用 curl 下载 Ubuntu 20.04：

```console
curl.exe -L -o ubuntu-2004.appx https://aka.ms/wslubuntu2004
```

在本示例中，将执行 `curl.exe`（而不仅仅是 `curl`），以确保在 PowerShell 中调用真正的 curl 可执行文件，而不是调用 [Invoke WebRequest](https://docs.microsoft.com/zh-CN/powershell/module/microsoft.powershell.utility/invoke-webrequest) 的 PowerShell curl 别名。

下载了发行版后，导航到包含下载内容的文件夹，并在该目录中运行以下命令，其中 `app-name` 是 Linux 发行版 .appx 文件的名称。

```Powershell
Add-AppxPackage .\app_name.appx

#例如：
Add-AppxPackage Ubuntu2004-220404.appxbundle
```

Appx 包下载完成后，可以通过双击 appx 文件开始运行新发行版。 （命令 `wsl -l` 不会在此步骤完成之前显示发行版已安装）。

在下载完成后，用压缩软件解压或者打开，然后解压出带`*****x86.appx`,然后在这个`.appx`的解压你需要安装的位置。然后我们找到Ubuntu.exe这个文件，双击运行即可。安装的过程需要等几分钟，然后会让我们设置用户名和密码。

（老版本）我们将镜像包的后缀改为.zip，然后解压到自己想要安装的盘，然后我们找到Ubuntu2004.exe这个文件，双击运行即可。安装的过程需要等几分钟，然后会让我们设置用户名和密码。

### 2.第二种

#### 查看已安装的linux发行版本

```scss
wsl -l --all -v
```

#### 如果状态显示为Running，先停止

```scss
wsl --shutdown
```

#### 开始迁移

导出发行版到指定盘符，我这里选择E盘吧

#### Debian导出

```scss
wsl --export Debian e:\\wsl-Debian.tar
```

#### Ubuntu-22.04导出



```scss
wsl --export Ubuntu-22.04 e:\\wsl-Ubuntu22.04.tar
```

#### 注销当前已安装的linux版本

注销Debian



```scss
wsl --unregister Debian
```

注销Ubuntu-22.04

```scss
wsl --unregister Ubuntu-22.04
```

#### 重新安装子系统到指定盘符下

安装Debian

```scss
wsl --import Debian e:\\wsl-debian e:\\wsl-Debian.tar --version 2
```

安装Ubuntu

```scss
wsl --import Ubuntu-22.04 e:\\wsl-ubuntu e:\\wsl-ubuntu22.04.tar --version 2
```



3.[WSL2.0 安装、自定义目录、docker、开机+docker自启、报错教程](https://www.cnblogs.com/AJun816/p/16214924.html)



## 更换apt源

因为Linux子系统的apt源使用的是官方源，需要连接到国外的服务器。所以安装一些软件时下载会很慢，我们可以改用国内的镜像apt源。国内的镜像源主要有：

可以直接使用 vim 对 /etc/apt/sources.list文件进行修改。

先进行一下备份。

```shell
mv /etc/apt/sources.list /etc/apt/sources.list.bak
```

然后

```shell
vim /etc/apt/sources.list
```

### 阿里源Ubuntu 22.04(jammy)

```sh
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.aliyun.com/ubuntu/ jammy main restricted universe multiverse
#deb-src https://mirrors.aliyun.com/ubuntu/ jammy main restricted universe multiverse
deb https://mirrors.aliyun.com/ubuntu/ jammy-security main restricted universe multiverse
#deb-src https://mirrors.aliyun.com/ubuntu/ jammy-security main restricted universe multiverse
deb https://mirrors.aliyun.com/ubuntu/ jammy-updates main restricted universe multiverse
#deb-src https://mirrors.aliyun.com/ubuntu/ jammy-updates main restricted universe multiverse
deb https://mirrors.aliyun.com/ubuntu/ jammy-backports main restricted universe multiverse
#deb-src https://mirrors.aliyun.com/ubuntu/ jammy-backports main restricted universe multiverse

# 预发布软件源，不建议启用
# deb https://mirrors.aliyun.com/ubuntu/ jammy-proposed main restricted universe multiverse
# deb-src https://mirrors.aliyun.com/ubuntu/ jammy-proposed main restricted universe multiverse
```

### **清华源Ubuntu 22.04(jammy)**

````sh
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse

# 预发布软件源，不建议启用
# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-proposed main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-proposed main restricted universe multiverse
````

### **中科大源Ubuntu 22.04(jammy)**

```sh
# 默认注释了源码仓库，如有需要可自行取消注释
deb https://mirrors.ustc.edu.cn/ubuntu/ jammy main restricted universe multiverse
# deb-src https://mirrors.ustc.edu.cn/ubuntu/ jammy main restricted universe multiverse

deb https://mirrors.ustc.edu.cn/ubuntu/ jammy-security main restricted universe multiverse
# deb-src https://mirrors.ustc.edu.cn/ubuntu/ jammy-security main restricted universe multiverse

deb https://mirrors.ustc.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse
# deb-src https://mirrors.ustc.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse

deb https://mirrors.ustc.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse
# deb-src https://mirrors.ustc.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse

# 预发布软件源，不建议启用
# deb https://mirrors.ustc.edu.cn/ubuntu/ jammy-proposed main restricted universe multiverse
# deb-src https://mirrors.ustc.edu.cn/ubuntu/ jammy-proposed main restricted universe multiverse
```

### 清华源Ubuntu 20.04(focal)
```sh
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse

# 预发布软件源，不建议启用
# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse
```

### 阿里源ubuntu 20.04(focal)

```sh
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
# deb-src https://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb https://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
# deb-src https://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb https://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
# deb-src https://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
deb https://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
# deb-src https://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
# deb https://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
# deb-src https://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse

# ubuntu 18.04(bionic) 配置如下

deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
```

### 科大源ubuntu 20.04(focal)

```shell
# 默认注释了源码仓库，如有需要可自行取消注释
deb https://mirrors.ustc.edu.cn/ubuntu/ focal main restricted universe multiverse
# deb-src https://mirrors.ustc.edu.cn/ubuntu/ focal main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ focal-security main restricted universe multiverse
# deb-src https://mirrors.ustc.edu.cn/ubuntu/ focal-security main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
# deb-src https://mirrors.ustc.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
# deb-src https://mirrors.ustc.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
# 预发布软件源，不建议启用
# deb https://mirrors.ustc.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse
# deb-src https://mirrors.ustc.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse
```

### 网易源ubuntu 20.04(focal)

```shell
deb http://mirrors.163.com/ubuntu/ wily main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ wily-security main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ wily-updates main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ wily-proposed main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ wily-backports main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ wily main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ wily-security main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ wily-updates main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ wily-proposed main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ wily-backports main restricted universe multiverse
```

选择一个源添加到文件最前面或直接替换掉原文件。保存后运行

### 检查生效

```shell
# 检查更新
sudo apt-get update
# 升级
sudo apt-get upgrade
```



## 在WSL2下安装Docker

wsl2已经完整使用了linux内核此种方式与之前在vmware虚拟机安装docker类似，依次执行如下命令：

```shell
curl -sSL https://get.daocloud.io/docker | sh
或
curl -fsSL https://get.docker.com -o get-docker.sh$ sudo sh get-docker.sh
```

**原生linux安装docker方式**

因为wsl2已经完整使用了linux内核了，此种方式和先前在linux虚拟机安装docker类似，步骤如下：

```shell
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo service docker start
```

执行脚本安装过程中，脚本提示“**建议使用Docker Desktop for windows**”，20s内按Ctrl+C会退出安装，所以需要等待20s，此种方式需要访问网络。

最后一个步骤，启动Docker daemon。但是此处有一个问题，WSL2经过测试无法使用systemctl命令（此问题已经解决ubuntu20.04），因此我们使用service命令启动Docker daemon进程。命令如下所示：

```shell
sudo service docker start
* Starting Docker: docker
```

**注意:**在我安装完毕docker后,docker pull以及run都会出现异常 Error response from daemon: Get https://registry-1.docker.io/v2/library/redis/manifests/latest: remote error: tls: bad record MAC 此时只需要修改docker镜像下载地址为国内镜像即可 必须修改 daemon.json ,docker pull register方式无效!!!

修改daemon.json操作命令如下:

````shell
vim /etc/docker/daemon.json
````

```json
{
	"registry-mirrors":[
      "https://docker.mirrors.ustc.edu.cn",
      "https://l1hp9lgc.mirror.aliyuncs.com",
      "https://hub-mirror.c.163.com",
      "http://f1361db2.m.daocloud.io",
      "https://ovfftd6p.mirror.aliyuncs.com",
      "https://ayyx3zqn.mirror.aliyuncs.com",
      "https://1nj0zren.mirror.aliyuncs.com",
      "https://registry.docker-cn.com",
      "https://dockerhub.azk8s.cn",
      "https://reg-mirror.qiniu.com"
      
    ]
}
```

检查docker安装正常

```shell
service docker restart
# 检查dockerd进程启动
service docker status
ps aux|grep docker
# 检查拉取镜像等正常
docker pull busybox
docker images
```



### 卸载Docker

- Ubuntu|Debian

```sh
sudo apt-get remove docker docker-engine
```

卸载Docker后,/var/lib/docker/目录下会保留原Docker的镜像,网络,存储卷等文件. 如果需要全新安装Docker,需要删除/var/lib/docker/目录

```sh
rm -fr /var/lib/docker/
```

## 安装 Docker Compose

[Docker Compose ](https://docs.docker.com/compose/install/)存放在Git Hub，不太稳定。
你可以通过执行下面的命令，高速安装Docker Compose。

```sh
curl -L https://get.daocloud.io/docker/compose/releases/download/v2.10.0/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose

chmod +x /usr/local/bin/docker-compose
```

你可以通过修改URL中的版本，可以自定义您的需要的版本。

## 在 Windows/Mac 上安装 Docker

[Docker for Windows ](https://www.docker.com/products/docker#/windows)在Windows上运行Docker。系统要求，Windows10x64位，支持Hyper-V。

[Docker for Mac ](https://www.docker.com/products/docker#/mac)在Mac上运行Docker。系统要求，OS X 10.10.3 或者更高版本，至少4G内存，4.3.30版本以前的VirtualBox会与Docker for Mac产生冲突，所以请卸载旧版本的VitrualBox。

如果您的电脑版本过旧，可以使用 [Docker Toolbox ](https://www.docker.com/toolbox)在Windows或者Mac上运行Docker。适用于Mac OS X 10.8+ 或者 Windows 7/8.1。

[下载 Docker for Windows](https://get.daocloud.io/docker-install/windows) [下载 Docker for Mac](https://get.daocloud.io/docker-install/mac) [下载 Docker Toolbox](https://get.daocloud.io/toolbox/)



## WSL2+Docker 开机自启

> 测试Ubuntu 20.04有效，22.04无效，不知道为何

### WSL2内操作

1. 命令行输入

```shell
sudo vim /etc/init.wsl
```

1. 按‘I’或‘A’进入编辑模式，输入以下内容

```shell
#! /bin/sh
service docker start
```

注：这里可放入其它Linux命令

1. 按‘Esc’退出编辑模式，输入以下命令保存并退出

```shell
:wq!
```

1. 赋予文件可执行权限

```shell
sudo chmod +x /etc/init.wsl
```

### 其他方法：

- ***Option 1**:* On Windows 11, add the necessary commands to the `[boot]` section in `/etc/wsl.conf`:

  ```
  [boot]
  command="service docker start"
  ```

  Note that under the latest Preview releases, there appears to be [an issue](https://github.com/microsoft/WSL/issues/8661) that causes anything started via this `boot.command` to terminate when no services that were started via an actual command-line are still running. In other words, if you need Docker (or any other service) to continue to run after you exit your WSL2 session, you'll probably need to use Option 2 (or uninstall the Preview).

- ***Option 2**:* On Windows 10, run the necessary commands in your *user* startup scripts (e.g. `.profile`). Do it with a check to see if the service is running first, like:

  ```
  wsl.exe -u root -e sh -c "service docker status || service docker start"
  ```

  This is a better alternative than my previous answer (option 3, below) since it doesn't require modification to `sudoers`. This takes advantage of the fact that the `wsl.exe` command can be run from inside WSL, using the `-u root` option to run the commands as root without a password.

  Note: If for some reason this command fails, your default WSL distribution may be different than you expect. Check the output of `wsl.exe -l -v`. You can change the default distro using `wsl.exe --setdefault <distro_name>` or adjust the commandline above to specify the distro with `-d <distro_name>`.

- ***Option 3:*** (old answer, here for posterity): `visudo` or add rules to `/etc/sudoers.d` to allow your user to run the commands without a password:

  ```
  username ALL = (root) NOPASSWD: /usr/sbin/service docker *
  ```

  Then edit your `.profile` to add:

  ```
  sudo service docker status || sudo service docker start
  ```



## Win10与wsl2子系统互相访问

Win10访问wsl2系统比vm虚拟机是亮点，特别方便，进入CMD或者PowerShell，输入：

```
cd \\wsl$\Ubuntu\
```

 可以进入Ubuntu-20.04子系统根目录

或者打开文件资源管理器，在地址栏输入 `\\wsl$`  或  `\\wsl$\Ubuntu\`，也可以Ubuntu子系统根目录。 

![6645072-861e342815516794.png](https://static.xlc520.tk/blogImage/6645072-861e342815516794.png)



## Ubuntu 22.04(jammy) 安装docker启动报错

```
root@Legion:~# sudo docker run hello-world
docker: Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?.
See 'docker run --help'.
```

### 解决方法：

https://crapts.org/2022/05/15/install-docker-in-wsl2-with-ubuntu-22-04-lts/

However, when you install Docker in WSL2 with the latest Ubuntu 22.04 LTS, you will notice that Docker will not start after running `sudo service docker start`. You will receive errors when starting a container, and `sudo service docker status` will tell you Docker is not running.

The reason this errors occurs is because Ubuntu 22.04 LTS uses `iptables-nft` by default. You need to switch to `iptables-legacy` so that Docker will work again:

1. Run `sudo update-alternatives --config iptables`
2. Enter `1` to select `iptables-legacy`
3. Now run `sudo service docker start`, and Docker will start as expected!



## systemctl命令无法使用（20.04）

现象为在命令行执行`systemctl`命令，报如下错误：

```shell
System has not been booted with systemd as init system (PID 1). Can't operate.
Failed to connect to bus: Host is down
```

参考了[https://forum.snapcraft.io/t/running-snaps-on-wsl2-insiders-only-for-now/13033](https://links.jianshu.com/go?to=https%3A%2F%2Fforum.snapcraft.io%2Ft%2Frunning-snaps-on-wsl2-insiders-only-for-now%2F13033)之后给出如下解决方案：

1.安装daemonize和fontconfig

```shell
apt install -y fontconfig daemonize
```

2.编辑`vim /etc/profile`脚本，加入如下内容：

```shell
SYSTEMD_PID=$(ps -ef | grep '/lib/systemd/systemd --system-unit=basic.target$' | grep -v unshare | awk '{print $2}')

if [ -z "$SYSTEMD_PID" ]; then
   sudo /usr/bin/daemonize /usr/bin/unshare --fork --pid --mount-proc /lib/systemd/systemd --system-unit=basic.target
   SYSTEMD_PID=$(ps -ef | grep '/lib/systemd/systemd --system-unit=basic.target$' | grep -v unshare | awk '{print $2}')
fi

if [ -n "$SYSTEMD_PID" ] && [ "$SYSTEMD_PID" != "1" ]; then
    exec sudo /usr/bin/nsenter -t $SYSTEMD_PID -a su - $LOGNAME
fi
```

3.修改`vim /etc/sudoers`文件，加入如下内容：

```jsx
%sudo ALL=(ALL) NOPASSWD: /usr/sbin/daemonize /usr/bin/unshare --fork --pid --mount-proc /lib/systemd/systemd --system-unit=basic.target
%sudo ALL=(ALL) NOPASSWD: /usr/bin/nsenter -t [0-9]* -a su - [a-zA-Z0-9]*
```

4.执行`source /etc/profile`或者是重新打开terminal，执行`systemctl`验证是否能够正常操作。



## Vmmem 进程占用过多内存

我们可以通过WSL的配置文件，限制vmmem进程的内存占用。在%UserProfile%目录创建`.wslconfig`文件，添加如下内容：

```csharp
[wsl2]
memory=2GB
swap=0
localhostForwarding=true
```

这里限制了vmmem进程最大内存不超过6GB，不使用交换空间。
创建完配置文件后，执行`wsl --shutdown`关闭WSL，再重新启动即可生效。

参考资料：
[https://github.com/microsoft/WSL/issues/4166](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fmicrosoft%2FWSL%2Fissues%2F4166)
[https://docs.microsoft.com/en-us/windows/wsl/release-notes#build-18945](https://links.jianshu.com/go?to=https%3A%2F%2Fdocs.microsoft.com%2Fen-us%2Fwindows%2Fwsl%2Frelease-notes%23build-18945)



## WSL2 开机自启运行脚本

目录：

1、 `/etc/profile.d`

2、  `~/.bashrc`

例如：

```shell
cd /etc/profile.d
```

### 启动docker

```sh
vim docker.sh

#! /bin/sh
service docker start
```

### 固定IP

```sh
vim /etc/profile.d/static_ip.sh

# static ip
if [ "$(ip addr show eth0 | grep 'inet\b' | awk '{print $2}' | head -n 1)" != "192.168.50.3/24" ];
then
sudo ip addr del $(ip addr show eth0 | grep 'inet\b' | awk '{print $2}' | head -n 1) dev eth0
sudo ip addr add 192.168.50.3/24 broadcast 192.168.50.255 dev eth0
sudo ip route add 0.0.0.0/0 via 192.168.50.1 dev eth0
fi

echo -e "nameserver 223.5.5.5 \nnameserver 192.168.50.1 \nnameserver 192.168.89.178 \nnameserver 114.114.114.114 \nnameserver 8.8.4.4" >> /etc/resolv.conf
```

设置权限：

```sh
chmod +x /etc/profile.d/static_ip.sh
```

#### 免密sudo权限

为了执行上一步，需要这个权限。
在 `/etc/sudoers` 里添加：

```bash
vim /etc/sudoers

UserName ALL=(ALL) NOPASSWD:ALL
```

#### 配置DNS

在 `/etc/wsl.conf` 文件写入

```bash
vim /etc/wsl.conf

[network]
generateResolvConf = false # 不自动生成dns配置，必须
generateHosts = false # 是否生成hosts文件，可选

[interop]
enabled = false # 不能调用Windows进程，可选
appendWindowsPath = false # 不添加Windows路径，可选
```

下面我也不知道，都做一遍,或者不做

然后删掉 /etc/resolv.conf（因为自动生成的为一个软连接），并重新建一个 /etc/resolv.conf 文本文件，并将其 DNS 服务器地址指定为自己想用的，如下：

在`vim /etc/wsl.resolv`文件写入（如果原来是软连接文件，需要先删除）

在 `/etc/resolv.conf`文件写入（如果原来是软连接文件，需要先删除）

```bash
vim /etc/resolv.conf

nameserver 223.5.5.5
nameserver 192.168.50.1
nameserver 192.168.89.178
nameserver 114.114.114.114
nameserver 8.8.4.4
```



## WSL2 系统占用磁盘空间不释放

WSL2本质是虚拟机，它使用的是vhdx虚拟磁盘格式。它支持自动扩容，但是并不会自动缩容。

我们可以使用`diskpart`命令，手工执行缩容操作。

```bash
diskpart
# open window Diskpart
select vdisk file="D:\WSL\Ubuntu\ext4.vhdx"
attach vdisk readonly
compact vdisk
detach vdisk
exit
```

其中`D:\WSL\Ubuntu\ext4.vhdx`为WSL2系统虚拟磁盘文件路径。

## WSL 使用 root 用户

### 修改root用户密码

- WSL 默认是没有设置 root 密码的
- 设置 root 用户密码, 这样要输三次命令, 第一次当前用户密码, 后两次就是设置密码以及确认密码

```bash
# 语法: sudo passwd 用户名
sudo passwd root
```

- `password updated successfully` 代表密码更新成功, 切换用户

```bash
# 语法: su 用户名
su root
```

设置默认用户

如果是自定义安装，需要在安装目录执行：

```powershell
D:\Linux\Ubuntu>ubuntu config --default-user root
```

```bash
# 语法: ubuntu1804 config --default-user 用户名(已存在)
ubuntu config --default-user root
PS C:\Users\ibbd\Desktop> ubuntu1804 config --default-user root
PS C:\Users\ibbd\Desktop>
# 没有报错就代表成功
```

重新打开已经是root用户了



## (可选)使用Podman取代Docker

Podman已成为CentOS8官方御用容器管理器，并且Kubernetes1.12已经放弃对Docker的支持。相比Docker，Podman无需守护进程，不强制要求使用root用户来管理容器，具有更好的灵活性和安全性。Podman使用方式和Docker完全相同，兼容Docker的镜像格式。
经本人试验Podman可以完美的在WSL2 Ubuntu中运行。

在WSL2中安装Podman的方法可参考如下链接：[https://www.redhat.com/sysadmin/podman-windows-wsl2](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.redhat.com%2Fsysadmin%2Fpodman-windows-wsl2)

下面脚本为Podman的安装脚本：

```shell
. /etc/os-release
sudo sh -c "echo 'deb http://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/x${NAME}_${VERSION_ID}/ /' > /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list"
wget -nv https://download.opensuse.org/repositories/devel:kubic:libcontainers:stable/x${NAME}_${VERSION_ID}/Release.key -O Release.key
sudo apt-key add - < Release.key
sudo apt-get update -qq
sudo apt-get -qq -y install podman
sudo mkdir -p /etc/containers
echo -e "[registries.search]\nregistries = ['docker.io', 'quay.io']" | sudo tee /etc/containers/registries.conf
```

如果没有其他报错信息，到这里Podman已安装完毕。我们可以执行`podman info`命令，验证是否安装成功。

**官方安装**

[https://podman.io/getting-started/installation](https://podman.io/getting-started/installation)

注意：在 Ubuntu 20.10 和更新版本上，我们强烈建议您仅使用来自 Kubic 存储库或官方 Ubuntu 存储库的 Buildah、Podman 和 Skopeo。混合和匹配可能会导致不可预知的情况，包括安装冲突。

```shell
. /etc/os-release
echo "deb https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_${VERSION_ID}/ /" | sudo tee /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list
curl -L "https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_${VERSION_ID}/Release.key" | sudo apt-key add -
sudo apt-get update
sudo apt-get -y upgrade
sudo apt-get -y install podman
```

镜像：

```shell
vim /etc/containers/registries.conf

[registries.search]
registries = ['i2kldsde.mirror.aliyuncs.com','docker.io']

```



## Ubuntu20.04配置静态固定IP地址



Ubuntu从17.10开始，放弃在/etc/network/interfaces里面配置IP，改为在/etc/netplan/XX-installer-config.yaml的yaml文件中配置IP地址。
查看网络配置信息
在Ubuntu20.04中，默认没有安装ifconfig，因此使用ip addr命令

```bash
ip addr

查看网关
ip route show
```

或者使用nmcli 查看，需要执行安装

```bash
sudo apt install network-manager

nmcli device show ens32
```

修改配置文件
使用熟悉的编辑器打开 `/etc/netplan/`下面的yaml配置文件，我的是`01-network-manager-all.yaml` 文件名，看实际情况

```bash
cd /etc/netplan/
sudo vi /etc/netplan/01-network-manager-all.yaml
或者是
sudo gedit /etc/netplan/01-network-manager-all.yaml
```

打开后可以是

```bash
# Let NetworkManager manage all devices on this system
network:
  version: 2
  renderer: NetworkManager

```

根据自己的需要修改配置
输入 `:wq`保存退出后，执行 `sudo netplan apply` 使配置生效，之后每次启动虚拟机IP地址就不会再改变了。这样虚拟机内部可以正常上网，在物理机中也可以直接使用虚拟机的ip访问内部的服务。

```bash
# Let NetworkManager manage all devices on this system
network:
  ethernets:
    enp0s8:   # 配置的网卡的名称
      addresses: [192.168.56.102/24]   # 配置的静态ip地址和掩码
      dhcp4: false   # 关闭dhcp4
      optional: true
      gateway4: 192.168.56.1 # 网关地址
      nameservers:
        addresses: [192.168.56.1,114.114.114.114]  # DNS服务器地址，多个DNS服务器地址需要用英文逗号分>隔开，可不配置
  version: 2
  renderer: NetworkManager

```

使配置生效
```
sudo netplan apply
```
至此Ubuntu20.04的静态IP配置完成。经过测试，可以正常上网。



## wsl2 远程登陆ssh

### 前提

```bash
 1.确保window主机可以使用 最好可以连接网络
 2.已经安装wsl2并已经启动
```

### 配置

#### 1.下载配置ssh

```bash
#下载   (如果没有ssh)
apt-get update
apt-get install openssh-server


#配置
vi /etc/ssh/sshd_config

# 配置
Port 2111 # 端口号 默认22
AddressFamily any
ListenAddress 0.0.0.0
ListenAddress ::
PasswordAuthentication yes # 是否允许使用密码登录 选“是”
# 其它配置没必要改变

#开启
service ssh start
```

#### 2.查看 linux ip ，在linux中输入

```bash
ifconfig # 不是ipconfig
```

### SSH 登录 Ubuntu 出现错误，拒绝密码：Permission denied,please try again.

新安装的Ubuntu 虚拟机已经打开了ssh 服务，并且ssh时密码也输入正确，但是一直提示被拒绝，如图：

解决方法：
 修ssh改配置文件，设置为允许root远程登录：

`vim /etc/ssh/sshd_config`

将`PermitRootLogin prohibie-password` 修改为：`PermitRootLogin yes` 即可。

保存退出，重启ssh服务：

`service ssh start`



## 新特性 2023-09-19 11:21

微软今天属于是史诗级更新 WSL2 到 2.0 版本，带来了以下特性：

1. 支持自动回收内存
2. 支持自动释放 WSL2 虚拟硬盘空间
3. 支持和 Windows 使用相同的网络（镜像网络）
4. 支持 DNS Tunneling
5. 支持 Windows 设置的代理
6. 支持 Windows 防火墙
7. 支持 Multicast

详细可以前往：[Windows Subsystem for Linux September 2023 update](https://devblogs.microsoft.com/commandline/windows-subsystem-for-linux-september-2023-update/)

开启方法：

1. 更新系统版本到 23H2 （目前还没发正式版，可以考虑加入 Windows Insider 的 Release Preview 或者 Beta 预览版通道）。或者如果不想加入预览版计划的话你也可以等几周，23H2 也快发布正式版了。
2. `wsl --update --pre-release` 把 WSL2 更新到 2.0.0 或以上版本
3. 在 `%userprofile%\.wslconfig` 中写入以下内容然后保存：

```ini
[experimental]
autoMemoryReclaim=gradual # 可以在 gradual 、dropcache 、disabled 之间选择
networkingMode=mirrored
dnsTunneling=true
firewall=true
autoProxy=true
sparseVhd=true
```

4. 然后运行 `wsl --manage 发行版名字 --set-sparse true` 启用稀疏 VHD 允许 WSL2 的硬盘空间自动回收，比如 `wsl --manage Ubuntu --set-sparse true`

然后你会发现，WSL2 和 Windows 主机的网络互通而且 IP 地址相同了，还支持 IPv6 了，并且从外部（比如局域网）可以同时访问 WSL2 和 Windows 的网络。这波升级彻底带回以前 WSL1 那时候的无缝网络体验了，并且 Windows 防火墙也能过滤 WSL 里的包了，再也不需要什么桥接网卡、端口转发之类的操作了。并且 WSL2 的内存占用和硬盘空间都可以自动回收了！

另外，使用 `VSCode - WSL` 插件的，建议去 VSCode 设置里把自动端口转发关掉（`Remote: Auto Forward Ports`），避免冲突，因为 WSL2 更新之后新的网络已经是和你的 Windows 使用相同网络了，不再需要端口转发了。

最后，如果你在 WSL 里使用 docker，那需要将 `autoMemoryReclaim` 配置为 `dropcache` 或者 `disabled`，然后在 `/etc/docker/daemon.json` 里添加一句 `"iptables": false` ，否则你可能无法正常使用 docker。



