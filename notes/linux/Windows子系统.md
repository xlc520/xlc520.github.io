---
author: xlc520
title: Windows子系统
description: Windows子系统优化,ubuntu,docker
date: 2022-02-16
category: Linux
tag: Linux
article: true
timeline: true
icon: 
password: 

---



# Windows子系统



## 更换apt源。

因为Linux子系统的apt源使用的是官方源，需要连接到国外的服务器。所以安装一些软件时下载会很慢，我们可以改用国内的镜像apt源。国内的镜像源主要有：

可以直接使用 vim 对 /etc/apt/sources.list文件进行修改。

先进行一下备份。

```shell
sudo mv /etc/apt/sources.list /etc/apt/sources.list.bak
```

然后

```shell
sudo vim  /etc/apt/sources.list
```

#### 阿里源ubuntu 20.04(focal) 

```shell
deb http://mirrors.aliyun.com/ubuntu/ focal main restricted
deb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted
deb http://mirrors.aliyun.com/ubuntu/ focal universe
deb http://mirrors.aliyun.com/ubuntu/ focal-updates universe
deb http://mirrors.aliyun.com/ubuntu/ focal multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-updates multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted
deb http://mirrors.aliyun.com/ubuntu/ focal-security universe
deb http://mirrors.aliyun.com/ubuntu/ focal-security multiverse


ubuntu 18.04(bionic) 配置如下

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

#### 科大源

```shell
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
```

#### 网易源

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

```
sudo apt-get update
```



## 在WSL2下安装Docker

wsl2已经完整使用了linux内核此种方式与之前在vmware虚拟机安装docker类似，依次执行如下命令：

```
$ curl -fsSL https://get.docker.com -o get-docker.sh$ sudo sh get-docker.sh
```

**原生linux安装docker方式**

因为wsl2已经完整使用了linux内核了，此种方式和先前在linux虚拟机安装docker类似，步骤如下：

```powershell
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo service docker start
```

执行脚本安装过程中，脚本提示“**建议使用Docker Desktop for windows**”，20s内按Ctrl+C会退出安装，所以需要等待20s，此种方式需要访问网络。

最后一个步骤，启动Docker daemon。但是此处有一个问题，WSL2经过测试无法使用systemctl命令（此问题已经解决），因此我们使用service命令启动Docker daemon进程。命令如下所示：

```
sudo service docker start
* Starting Docker: docker
```

**注意:**在我安装完毕docker后,docker pull以及run都会出现异常 Error response from daemon: Get https://registry-1.docker.io/v2/library/redis/manifests/latest: remote error: tls: bad record MAC 此时只需要修改docker镜像下载地址为国内镜像即可 必须修改 daemon.json ,docker pull register方式无效!!!
修改daemon.json操作命令如下:

````
vim /etc/docker/daemon.json
````

```shell
{
	"registry-mirrors":[
        "https://docker.mirrors.ustc.edu.cn",
        "http://hub-mirror.c.163.com",
        "http://f1361db2.m.daocloud.io",
        "https://ovfftd6p.mirror.aliyuncs.com",
        "https://ayyx3zqn.mirror.aliyuncs.com",
        "https://registry.docker-cn.com",
        "https://dockerhub.azk8s.cn",
        "https://reg-mirror.qiniu.com"
    ]
}
```

检查docker安装正常

```sh
# 检查dockerd进程启动
service docker status
ps aux|grep docker
# 检查拉取镜像等正常
docker pull busybox
docker images
```

## Win10与wsl2子系统互相访问

Win10访问wsl2系统比vm虚拟机是亮点，特别方便，进入CMD或者PowerShell，输入：

```
cd \\wsl$\Ubuntu\
```

 可以进入Ubuntu-20.04子系统根目录

或者打开文件资源管理器，在地址栏输入`\\wsl$\Ubuntu\`，也可以Ubuntu子系统根目录。 

![https://upload-images.jianshu.io/upload_images/6645072-861e342815516794.png](https://upload-images.jianshu.io/upload_images/6645072-861e342815516794.png)



## FAQ

## systemctl命令无法使用

现象为在命令行执行`systemctl`命令，报如下错误：

```shell
System has not been booted with systemd as init system (PID 1). Can't operate.
Failed to connect to bus: Host is down
```

参考了[https://forum.snapcraft.io/t/running-snaps-on-wsl2-insiders-only-for-now/13033](https://links.jianshu.com/go?to=https%3A%2F%2Fforum.snapcraft.io%2Ft%2Frunning-snaps-on-wsl2-insiders-only-for-now%2F13033)之后给出如下解决方案：

1. 安装daemonize和fontconfig

```shell
apt install -y fontconfig daemonize
```

1. 编辑`vim /etc/profile`脚本，加入如下内容：

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

1. 修改`vim /etc/sudoers`文件，加入如下内容：

```jsx
%sudo ALL=(ALL) NOPASSWD: /usr/sbin/daemonize /usr/bin/unshare --fork --pid --mount-proc /lib/systemd/systemd --system-unit=basic.target
%sudo ALL=(ALL) NOPASSWD: /usr/bin/nsenter -t [0-9]* -a su - [a-zA-Z0-9]*
```

1. 执行`source /etc/profile`或者是重新打开terminal，执行`systemctl`验证是否能够正常操作。

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

## （可选）使用Podman取代Docker

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