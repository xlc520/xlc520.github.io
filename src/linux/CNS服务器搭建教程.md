---
author: xlc520
title: CNS服务器搭建教程
description: 
date: 2022-07-12
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
---

# CNS服务器搭建教程

## 首先

1.首先需要一台服务器，腾讯云或者阿里云，下面用腾讯云来举例。

2.登陆服务器后台

3.安装CentOS 7.6 64bit

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/0bc8e91b11654c27b036bf749f71064c.jpeg)

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/f6e7f8face15443aab91a9ddc3c2db31.jpeg)

4.远程登陆服务器

可以直接用腾讯自带的登陆，点击登陆即可。**进去首先输入sudo -i** 获取最高管理员权限。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/9e76c679e87942e48aff3fd934cb3575.jpeg)

## 方法一（一键安装）

输入Linux一键安装代码，卸载代码也在下面，出现问题卸载重装。

作者的GITHUB:https://github.com/mmmdbybyd/CNS

```bash
安装: `type curl &>/dev/null && echo 'curl -O' || echo 'wget -O cns.sh'` http://binary.quicknet.cyou/cns/cns.sh && sh cns.sh  

卸载: `type curl &>/dev/null && echo 'curl -O' || echo 'wget -O cns.sh'` http://binary.quicknet.cyou/cns/cns.sh && sh cns.sh uninstall  

```

需要填写的是两个信息：需要设置的CNS服务器端口和密码。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/fe4adc68df7445f2b98c11de6fd06d76.jpeg)

如上图，我设置的是6688端口，密码为980829.

出现以下信息就代表CNS服务器搭建完成。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/f58fbc517c9d453db6d8dffb5a3e538a.jpeg)

CNS服务器搭建完成后，需要放行相应的端口才可以运行。例如我使用的是6688端口，则需要对防火墙进行如下设置。
![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/11bda07f400c4bdfaa11124e01e69e1c.jpeg)

## 方法二（稍微繁琐一点，但是永久有效）

[作者Github](https://github.com/AiziChen/CNS)

在下面的链接里下载下载`linux-x86_64.zip`，目前最新版本0.2.3

[https://github.com/AiziChen/CNS/releases](https://github.com/AiziChen/CNS/releases)

解压到桌面，会有两个文件。cns文件与config.cfg文件

下载FinalShell服务器管理软件，百度一搜就有！

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/4f37415688f94330bba68a2bb50b80e6.jpeg)

如上图，依次点击这三个地方。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/2eb86558d2384c6094896e0b663c02a4.png)

填写蓝色圈起来的四项。密码是服务器密码。点击确定。

会出现以你设置的用户名命名的一行。双击即可。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/3b231c3c7ac94c6ab7501108ccd675b7.png)

注意：不要开任何代理软件，否则无法连接。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/64e6e716ac4e4109a0b13885fee80d1b.png)

提示连接成功，即可。

在下方的root文件夹中新建一个名为CNS的文件夹。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/14c48e106ed94bb39b270dd6ecd9c087.png)

双击进入CNS文件夹，并把我们解压到桌面的cns文件以及config.cfg文件拖拽到CNS文件夹内。

双击config.cfg打开config文件

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/2c9e02069a23486189b4d0ac88e2a9a6.png)

```r
proxyKey = Meng #随意，但是强烈建议改一下
udpFlag = httpUDP
listenAddr = :6688  #端口，需要在防火墙中放行
password = 123456   #密码，随意
udpTimeout = 30
tcpKeepAlive = 60
pidPath = cns.pid
enableDnsTcpOverUdp = #t
enableHttpDNS = #t
enableTFO = #t
```

对端口和密码进行修改，按下CTRL+S保存后退出。

在FinalShell中输入cd /root/CNS，进入CNS文件夹，注意大小写。

给cns文件添加x权限chmod u+x cns

在输入后台启动cns文件的命令./cns -daemon

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/af4a6ed25d2c4e088f7b35e5d38cfd24.png)

代码如下，自行复制粘贴。FinalShell中复制为ALT+C,粘贴为ALT+V。

```bash
cd /root/CNS

chmod u+x cns

./cns -daemon
```

每次重启服务器都要重新运行一次./cns -daemon

这样cns服务器就搭建完成了。

**手机端配置**

使用龙哥模块的，首先打开ZJL文件，将715行的IP地址更换为time1.cloud.tencent.com,保存。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/5fa1a096915b40aa96cb84294a9d608b.jpeg)

打开.conf文件，进行如下修改，服务器IP：端口都按照上面的设置来填写。建议使用最新版的龙哥模块。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/cd9ac3980991433bb140164d4acbfab4.jpeg)

保存以后，运行一次开启.sh即可。出现如下情况，即是配置成功。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/247457a355504576bd7a3e17dadce2a1.jpeg)

**注意：如果出现UDP连接×，请检查以下两点：**

**1.服务器防火墙是否放行CNS服务器端口。**

**2.ZJL文件的IP是否修改。**

**出现问题，请评论，看到即回。**