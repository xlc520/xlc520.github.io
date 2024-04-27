---
author: xlc520
title: NFS在线安装和离线安装
excerpt: 
description: 
date: 2023-03-27
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
---

# NFS 在线安装和离线安装

## 1. 在线安装

#### 第一步：在文件主服务器上安装 `nfs-kernel-server`

```bash
# rpcbind nfs-kernel-server nfs-common net-tools
# 1. 安装 rpcbind， nfs 依赖 rpc 进行相互通信
apt-get install -y rpcbind
# 2. 安装 nfs-kernel-server
sudo apt-get install -y rpcbind nfs-kernel-server nfs-common net-tools
# 3. 新建共享文件主目录
sudo mkdir /home/nfs
# 4. 对此文件夹进行授权
sudo chmod 777 -R /home/nfs
# 5. 启动 nfs 服务
sudo systemctl restart nfs-kernel-server
# 6. 编辑 nfs 服务器得配置文件，设置允许共享的连接和权限（由于没有授权操作，限制最好在内网环境下使用）
sudo vi /etc/exports
# 附加限制ip和相关授权操作
/home/nfs *(rw,sync,no_root_squash)
# 或者
/home/nfs 192.168.1.3(insecure,rw,sync,no_root_squash)  192.168.1.4(insecure,rw,sync,no_root_squash)
# 7. 重新启动 nfs 服务
sudo systemctl restart nfs-kernel-server
# 8. 开机启动 
sudo systemctl enable nfs-kernel-server
```

#### 第二步：在文件共享节点上安装 `nfs-common`

```bash
# 1. 安装 rpcbind， nfs 依赖 rpc 进行相互通信
apt-get install -y rpcbind
# 2. 安装 nfs-common
sudo apt-get install -y nfs-common
# 3. 新建共享文件主目录 子节点的目录路径最好和主服务器上路径保持一致，避免后期开发混淆
sudo mkdir /home/nfs
# 4. 对此文件夹进行授权
sudo chmod 777 -R /home/nfs
# 5. 启动 nfs-common 服务
sudo systemctl start nfs-common
# 6. 将主服务的共享文件夹挂载到指定目录上
sudo mount -t nfs 10.1.2.10:/home/nfs /home/nfs -o nolock
mount -t nfs 10.1.2.10:/home/nfs /home/nfs -o nolock
mount -t nfs 10.1.2.10:/home/nfs /home/nfs -o nolock,soft,intr,timeo=10
# 取消挂载
sudo umount /home/nfs
# 7. 开机启动 
sudo systemctl enable nfs-common
```

#### 第三步：基本验证

```bash
# 基本的增删文件校验，此处省略
echo "6666">a.txt
echo "5555">b.txt
rm a.txt

mkdir docker
rm -rf docker
```

### 2. 内网环境下离线安装

#### 第一步：在外网环境下打包安装包和依赖

##### `nfs-kernel-server` 服务

```bash
# rpcbind nfs-kernel-server nfs-common net-tools
# 1. 查找 nfs-kernel-server 的所有安装包，可以选定安装需要的版本
sudo apt-cache search nfs-kernel-server nfs-common
# 2. 将 nfs-kernel-server 的安装包和依赖下载到本地，执行完成之后 安装包和依赖会下载到 /var/cache/apt/archives 目录下
sudo apt-get -d install -y rpcbind nfs-kernel-server nfs-common net-tools
# 3. 新建一个文件夹
sudo mkdir /home/nfs-kernel-server/
# 4. 将下载的deb包拷贝到上述新建的文件夹下
sudo cp -r /var/cache/apt/archives/ /home/nfs-kernel-server/
# 5. 修改文件夹的权限，可读可写可执行
sudo chmod 777 -R /home/nfs-kernel-server/
# 6. 建立deb包的依赖关系
sudo dpkg-scanpackages /home/nfs-kernel-server/ /dev/null |gzip >/home/Packages.gz
#  如果出现错误：sudo: dpkg-scanpackages: command not found 则需要安装dpkg-dev工具：
sudo apt-get install dpkg-dev
# 7. 将生成的nfs-common.gz包复制到和deb同目录下
sudo cp /home/Packages.gz /home/nfs-kernel-server/archives/Packages.gz
# 8. 将/home/nfs-kernel-server/ 目录进行打包
cd /home #进入父目录下再执行打包文件
sudo tar cvzf nfs-kernel-server.tar.gz nfs-kernel-server/
# 9. 将压缩文件拷贝到离线服务器 /home 目录下上并解压缩
cd /home 
sudo tar -xvf nfs-kernel-server.tar.gz # 解压缩
# 10. 将安装包所在的路径添加到系统源source.list 中
sudo cp /etc/apt/sources.list /etc/apt/sources.list.back #备份
vim /etc/apt/sources.list
# 添加以下两行至文件末尾：
deb file:///home/nfs-kernel-server archives
deb-src file:///home/nfs-kernel-server archives

# 11. 更新源
sudo apt-get update
# 12. 离线安装 
sudo apt-get  install XXX
# 后面就按照正常的在线安装步骤进行就行了

# 安装完成后还原 sources.list 文件
sudo cp /etc/apt/sources.list.back /etc/apt/sources.list
```

`nfs-common` 服务：

离线打包步骤和 `nfs-kernel-server`相同，把上面的 `nfs-kernel-server` 替换为 `nfs-common` 直接执行

## NFS 漏洞：showmount -e 信息泄露

> 实现允许指定主机通过 mount 到 nfs 服务器上，阻止其它主机通过 shutdown -e 方式，泄露 NFS 共享目录结构信息。

#### 1. 编辑 /etc/hosts.allow

```bash
sudo vi /etc/hosts.allow
# 附加允许访问的 mount 和 rpc 地址
mountd:192.168.1.3,192.168.1.4
rpcbind:192.168.1.3,192.168.1.4:allow
```

#### 2. 编辑 /etc/hosts.deny

```bash
sudo vi /etc/hosts.deny
# 添加拒绝mount和 rpc的访问
mountd:all
rpcbind:ALL:deny
```

#### 3. 验证访问控制是否生效

```bash
# 上述配置无需重启即可生效
# 1。 本机验证
showmount -a
clnt_create: RPC: Unknown host
# 2. 远程主机访问验证
showmount -e 192.168.1.2
clnt_create: RPC: Port mapper failure - Authentication error
```

## 开机自动挂载

如果按本文上面的部分配置好，NFS 即部署好了，但是如果你重启客户端系统，发现不能随机器一起挂载，需要再次手动操作挂载，这样操作比较麻烦，因此我们需要设置开机自动挂载。我们不要把挂载项写到/etc/fstab
文件中，因为开机时先挂载本机磁盘再启动网络，而 NFS 是需要网络启动后才能挂载的，所以我们把挂载命令写入到/etc/rc.d/rc.local
文件中即可。

```shell
vim /etc/rc.d/rc.local
在文件最后添加一行：
#mount -t nfs 10.10.33.156:/data /data -o nolock,nfsvers=3,vers=3
mount -t nfs 10.1.2.11:/home/nfs /home/nfs -o nolock -o soft -o intr -o timeo=10
mount -t nfs 10.1.2.10:/home/nfs /home/nfs -o nolock,soft,intr,timeo=10

然后需要对rc.local 赋权

chmod a+x /etc/rc.local
chmod a+x /etc/rc.d/rc.local

保存并重启机器

测试验证
查看挂载结果，在客户端输入 
df -h


或者
编辑文件系统表/etc/fstab

192.168.101.250:/public /mnt/nfs nfs ro,soft,intr 0 0

soft：挂载出错时，发出警告。intr：挂载失败时，立即中断挂载。否则系统将无法启动
先卸载掉已经挂载的，使用命令：umount /mnt/nfs
使用命令mount -a ，挂挂载成功
```

```shell

mount -t nfs -o soft,,timeo=10 192.168.0.187:/data/lutixia /mnt/nfs

soft    软挂载，当超过我们配置的时间，则会返回错误，不会一直阻塞，推荐这种挂载方式，默认是硬挂载，服务端挂载会一直阻塞。
timeo   指定客户端去连接服务端的时长（单位为 0.1 秒),不要设置太长了。

把挂载信息写入到 /etc/fstab 文件中：

sudo vim /etc/fstab
10.1.2.10:/home/nfs /home/nfs nfs auto,nofail,noatime,nolock,intr,tcp,actimeo=1800 0 0

192.168.3.1:/data  /nfs nfs auto,nofail,noatime,nolock,intr,tcp,actimeo=1800 0 0
# 或者
192.168.3.1:/data  /nfs nfs defaults 0 0

10.10.201.155:/nfsboot /usr/local/nfs nfs auto,nofail,noatime,nolock,intr,tcp,actimeo=1800 0 0

说明：
- server:/share：NFS服务器的IP和共享的路径。
- /mnt/nfs：本地的挂载点。
- nfs：这是文件系统类型，指示要使用NFS协议进行挂载。
- auto：这表示在启动时自动挂载文件系统。
- nofail：这表示如果无法挂载，系统将继续启动，而不会阻止它。
- noatime：这将禁用对访问时间的写入，这有助于提高文件系统的性能。
- nolock：这将禁用对锁定管理的使用，这对于某些NFS服务器可能有用。
- intr：这表示允许中断挂起的NFS操作，这可以提高操作可靠性。
- tcp：这表示使用TCP协议进行NFS通信，这通常是默认设置。
- actimeo=1800：这表示NFS客户端将在1800秒内缓存文件属性，以提高性能。
- 0 0：这是用于fsck检查和备份常规操作的选项，0表示无需检查。

2.刷新配置
mount -a
3.从启动服务器测试
reboot

```

## 问题

没有同步，可能`rpcbind` 出问题，重启

```shell
# 重启，避免不会同步
/etc/init.d/rpcbind restart
```
