---
author: xlc520
title: Euserv
excerpt: 
description: Euserv
date: 2022-01-20
category: other
tag: other
article: true
timeline: true
icon: type
---

# Euserv

EUserv 是一家德国主机商，提供 VPS 主机、服务器等，目前该商家提供免费 ipv6 主机服务器，配置信息是 CPU：1 Core、内存：1 GB、硬盘：10
GB
HDD、带宽：1 Gbit，提供一个 IPv6 地址，想要 IPv4 地址那就付费了。虽然免费 VPS 主机看起来配置很好，但是用起来非常地卡。

申请 EUserv 免费 VPS 主机的过程并不复杂，也不需要什么 Paypal、信用卡之类的验证，但是 EUserv 免费 VPS 主机申请要人工审核，一般来说
48 小时内会收到回复。当然，也有申请 EUserv 免费 VPS 主机失败的，或者是 EUserv 免费 VPS 主机被删号的。

[![EUserv免费VPS主机申请与使用-纯IPv6 VPS主机连接管理与安装网站应用](https://bitbucket.org/xlc520/blogasset/raw/main/images2/EUserv_00-680x366.png)](https://wzfou.cdn.bcebos.com/wp-content/uploads/2021/10/EUserv_00.png)

更多的[免费 VPS](https://wzfou.com/tag/mianfei-vps/)主机，这里还有：

1. [Oracle 甲骨文免费云主机申请使用-Oracle 免费 VPS 测评和 VPS 重置密钥登录](https://wzfou.com/oracle-mianfei-vps/)
2. [AWS 免费 VPS 主机申请使用-Amazon EC2 韩国日本香港机房 VPS 主机评测](https://wzfou.com/aws-vps-pingce/)
3. [英特尔 Intel DevCloud 免费云服务器和 AppOnFly 免费试用 Windows Server 服务器](https://wzfou.com/devcloud-apponfly/)

## 一、EUserv 免费 VPS 申请

网站：

1. <http://www.euserv.de>
2. <https://www.euserv.com/en/>

进入网站后，可以将网站的语言切换为英文，或者是直接用浏览器翻译成中文。找到导航栏的免费 VPS 主机申请链接。

![EUserv免费VPS申请地址](https://bitbucket.org/xlc520/blogasset/raw/main/images2/EUserv_01-680x366.png)

确定申请。

![EUserv免费VPS提交申请](https://bitbucket.org/xlc520/blogasset/raw/main/images2/EUserv_02-680x366.png)

可以看到 EUserv 免费 VPS 是免费一个月的，不过可以免费续期。

![EUserv免费VPS确定申请](https://bitbucket.org/xlc520/blogasset/raw/main/images2/EUserv_03-680x366.png)

在页面最下方点击结算。

![EUserv免费VPS开始结算](https://bitbucket.org/xlc520/blogasset/raw/main/images2/EUserv_04-680x366.png)

此时，注册一个新账号。

![EUserv免费VPS注册账号](https://bitbucket.org/xlc520/blogasset/raw/main/images2/EUserv_05-680x366.png)

填写你的注册信息。

![EUserv免费VPS填写邮箱](https://bitbucket.org/xlc520/blogasset/raw/main/images2/EUserv_06-680x366.png)

完成注册。

![EUserv免费VPS完成注册](https://bitbucket.org/xlc520/blogasset/raw/main/images2/EUserv_07-680x366.png)

再次登录到 EUserv 后台，会提示让你补充你的详细信息，主要是街道地址、编号、手机号码等，填写参考下图：

![EUserv免费VPS补充信息](https://bitbucket.org/xlc520/blogasset/raw/main/images2/EUserv_08-680x366.png)

完成注册并申请 VPS 主机，等待审核开通。

![EUserv免费VPS审核开通](https://bitbucket.org/xlc520/blogasset/raw/main/images2/EUserv_09-680x366.png)

## 二、EUserv 免费 VPS 管理

EUserv 免费 VPS 开通后，你就可以点击进入到 VPS 主机控制面板了。

![EUserv免费VPS管理](https://bitbucket.org/xlc520/blogasset/raw/main/images2/EUserv_10-680x366.png)

在 EUserv 免费 VPS 控制面板中，主要有查看 VPS 信息、重装系统以及 IPv6 地址等功能。

![EUserv免费VPS查看管理中心](https://bitbucket.org/xlc520/blogasset/raw/main/images2/EUserv_11-680x366.png)

这是 EUserv 免费 VPS 重装系统页面。

![EUserv免费VPS重装系统](https://bitbucket.org/xlc520/blogasset/raw/main/images2/EUserv_12-680x366.png)

这是 EUserv 免费 VPS 查看信息页面，重装系统成功后，你就可以看到 root 的密码了，还有 IPv6 地址。

## 三、EUserv 免费 VPS 连接

EUserv 免费 VPS 只提供纯 IPv6 地址，所以连接管理 EUserv 免费 VPS 就是一个难题了。我们可以利用 IPv6 隧道来让本地的 Windows
系统支持访问 IPv6 网站。

Win+R 打开 CMD 或 Windows PowerShell（管理员），输入命令：

```bash
// 设置 Teredo 服务器，默认为：win10.ipv6.microsoft.com 

netsh interface teredo set state enterpriseclient server=default 

// 测试 IPv6 连接 

ping -6 ipv6.test-ipv6.com 

ping -6 [2001:470:1:18::125] 

// 重置 IPv6 配置 

netsh interface ipv6 reset 
```

**重启系统。**通过命令 ipconfig /all 查看当前网络信息，看到 Teredo Tunneling Pseudo-Interface 有以 2001 开头的 IPv6 地址即可。

启动 IE 浏览器，访问 <http://test-ipv6.com> 或 <http://ipv6.test-ipv6.com，如果选项卡> “测试项目” 下面的 “不使用域名的
IPv6
测试” 显示成功，则隧道建立成功。

![EUserv免费VPS测试IPv6](https://bitbucket.org/xlc520/blogasset/raw/main/images2/EUserv_17-680x366.png)

如果经过上面操作后仍无法启用 IPv6，可能是 Teredo 服务器无法正常连接，也可能是 Windows 自身配置问题，可尝试以下两种方法：

```bash
// 第一种：修改 Teredo 服务器为 teredo.remlab.net 

netsh interface teredo set state server=teredo.remlab.net 

// 第二种：先卸载当前 Teredo 适配器再重新启用 

netsh interface Teredo set state disable 

netsh interface Teredo set state type=default 

ping -6 ipv6.test-ipv6.com 
```

现在你就可以开始使用客户端连接你的 EUserv 免费 VPS 了。

![EUserv免费VPS连接成功](https://bitbucket.org/xlc520/blogasset/raw/main/images2/EUserv_14-680x366.png)

详细的操作方法请参考：[Windows 10 系统利用 IPv6 隧道开启 IPv6 访问](https://wzfou.com/question/19085/)
。使用浏览器访问 IPv6 地址，类似于：http://[2a01:4f8:191:48c:2018:2019::ed]，如下图：

![EUserv免费VPS浏览器查看](https://bitbucket.org/xlc520/blogasset/raw/main/images2/EUserv_18-680x366.png)

## 四、纯 IPv6 的 VPS 搭建网站

### 4.1 搭建 Web 环境

纯 IPv6 的 VPS 安装[VPS 主机面板](https://wzfou.com/tag/vps-mianban/)
基本上是没有什么问题，例如[LNMP](https://wzfou.com/tag/lnmp/)、[Oneinstack](https://wzfou.com/oneinstack/)
，经过挖站否的测试都正常。可能有一些面板会出现一些莫名其妙的问题，更多的面板参考：[服务器控制面板榜单](https://wzfou.com/vps-mianban/)。

宝塔面板后台默认的是不支持 IPv6 的，我们需要手动开启：

```shell
\#让宝塔面板监听IPv6

echo “**True**” > /www/server/panel/data/ipv6.pl

\#如果发现端口无法使用，也可以直接修改端口

echo “8888” > /www/server/panel/data/port.pl

\#重启面板：

bt restart

\#宝塔面板在面板设置里勾选了监听ipv6，正常情况下ipv4应该也是可以使用的，部分服务器出现问题的话会导致ipv4无法登陆。使用以下命令

rm -f /www/server/panel/data/ipv6.pl && /etc/init.d/bt restart
```

如果是 Oneinstack 或者 LNMP 一键安装包，搭建网站还需要修改一下 Nginx 的配置，让 Nginx 同时监听 IPv4 和 IPv6 的请求，示例如下：

 ```shell
  listen 80;
 
 ​    listen 443 ssl http2;
 
 ​    listen [::]:443 ssl http2;
 
 ​    listen [::]:80;
 
 ​    server_name www.wzfou.com;
 
 ​    index index.php index.html index.htm default.php default.htm default.html;
 
 ​    root /www/wwwroot/www.wzfou.com;
 ```

### 4.2 IPv6 DNS 解析

对于 IPv6 地址，DNS 解析选择 AAAA 记录类型记录，记录值为 IPv6 地址即可。

![EUserv免费VPS添加解析](https://bitbucket.org/xlc520/blogasset/raw/main/images2/EUserv_20-680x366.png)

### 4.3 兼顾 IPv4 用户访问

对于纯 IPv6 的网站，为了可以让 IPv4 的用户访问，我们可以接入到 Cloudflare 免费 CDN 网络，如果不想修改 NS 服务器为
Cloudflare，可以使用 Cloudflare
Partner 平台，例如：[Cloudflare Partner 接入管理 Cloudflare CDN](https://wzfou.com/cloudflare-railgun/)。

接入了 Cloudflare 后，你就可以先设置 AAAA 记录了。

![EUserv免费VPS启用CDN](https://bitbucket.org/xlc520/blogasset/raw/main/images2/EUserv_21-680x366.png)

接着在[Cloudflare Partner](https://wzfou.com/tag/cloudflare-partner/)接入平台会得到 CNAME 记录，这时你就可以到你的域名
DNS 管理处修改 CNAME 记录了。

![EUserv免费VPS兼顾IPv4地址](https://bitbucket.org/xlc520/blogasset/raw/main/images2/EUserv_22-680x366.png)

成功将纯 IPv6 的 VPS 主机接入到了 Cloudflare 的 CDN 网络后，不管用户是不是支持 IPv6 访问都可以访问你的网站了，与普通的网站没有什么
区别。

![EUserv免费VPS访问成功](https://bitbucket.org/xlc520/blogasset/raw/main/images2/EUserv_23.png)

## 五、总结

EUserv[免费 VPS](https://wzfou.com/tag/mianfei-vps/)
主机官网打开速度很慢，需要一定耐心。实际测试 EUserv 免费 VPS
主机的性能非常地差，见：[分享 euserv 提供的免费 ipv6 小鸡](https://wzfou.com/question/97087/)
，至于如何在 IPv6 上的 VPS 主机跑“QQ”可以参考：[纯 IPv6 的 VPS 安装应用](https://wzfou.com/ipv6-vps/#ftoc-heading-4)。

关于给 EUserv[免费 VPS](https://wzfou.com/tag/mianfei-vps/)主机自动续期的方法，请参考：<https://bawodu.com/euserv-renew/>

## 六、用腾讯云函数给 EUserv 德国免费 VPS 自动续期

使用腾讯云函数 SCF 自动续期 EUserv 免费 IPv6 VPS 脚本见 <https://github.com/o0oo0ooo0/EUserv_extend>

目的：自动获取账号内所有的 VPS 项目，并检测是否需要续期，需要续期会自动续期。

### 1. 打开腾讯云函数 SFC

打开 <https://console.cloud.tencent.com/scf/> 登录腾讯云，初次使用云函数 SCF 要授权。

![EUserv德国免费VPS自动续期](https://bitbucket.org/xlc520/blogasset/raw/main/images2/ngcb15.webp)

### 2. 新建 BeautifulSoup 层

新建层 BeautifulSoup
，将 [BeautifulSoup.zip](https://github.com/o0oo0ooo0/EUserv_extend/releases/download/0.1/BeautifulSoup.zip) 导入 ，添加运行环境
Python 3.6 。注意层的位置选择香港等海外地区，因为我们要续费的 VPS 在德国。

![EUserv德国免费VPS自动续期](https://bitbucket.org/xlc520/blogasset/raw/main/images2/ngcb15-164191528787822.webp)

建好层后如下，后面用的上。

![EUserv德国免费VPS自动续期](https://bitbucket.org/xlc520/blogasset/raw/main/images2/ngcb15-164191528788023.webp)

### 3. 新建腾讯云函数 EUserv_extend

运行环境选择 Python 3.6，创建方式选择 空白函数，内存选择 64M，执行超时时间建议为 300
s（网站在国外访问比较慢，建议部署在非大陆区域，例如 HK、SG 等，需要和上面创建层的位置是一样的。），将修改后的 **main.py** 粘贴进去。

![EUserv德国免费VPS自动续期](https://bitbucket.org/xlc520/blogasset/raw/main/images2/ngcb15-164191528788124.webp)

选择自定义创建，按下图配置

![EUserv德国免费VPS自动续期](https://bitbucket.org/xlc520/blogasset/raw/main/images2/ngcb15-164191528788125.webp)

复制<https://github.com/o0oo0ooo0/EUserv_extend> 库中的 main.py 文件。

![EUserv德国免费VPS自动续期](https://bitbucket.org/xlc520/blogasset/raw/main/images2/ngcb15-164191528788226.webp)

复制粘贴到上图 index.py 文本，然后粘贴到刚才打开的腾讯云函数服务编辑框中，修改其中的用户名，密码。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images2/ngcb15-164191528788327.webp)

USERNAME: 你的 EUserv 账户邮箱或 Customer ID

USERNAME = ‘<user@gmail.com>’
USERNAME = ‘<user1@gmail.com> <user2@gmail.com>’ # 多个账号写法

PASSWORD: 账户的密码

PASSWORD = ‘password’
PASSWORD = ‘password1 password2’ # 多个账号写法

**设置通知提醒（可选操作）**

我已 Server 酱的提醒为例，打开<https://sct.ftqq.com> 后微信扫码获取 sentkey， 然后填写在上面函数代码 Server 酱的 key
处。如果您不需要通知也可以不设置提醒。这步不用设置。

```plain
SCKEY = 'XX'
```

**环境配置**

设置 64M 内存就够用了，300 秒延时。

![EUserv德国免费VPS自动续期](https://bitbucket.org/xlc520/blogasset/raw/main/images2/ngcb15-164191528788328.webp)

其他默认就可，然后点完成。完成云函数配置。

![EUserv德国免费VPS自动续期](https://bitbucket.org/xlc520/blogasset/raw/main/images2/ngcb15-164191528788429.webp)

### 4. 绑定层 BeautifulSoup

在 EUserv_extend⇨函数管理⇨层管理 里绑定层 BeautifulSoup。

![EUserv德国免费VPS自动续期](https://bitbucket.org/xlc520/blogasset/raw/main/images2/ngcb15-164191528788430.webp)

### 5. 测试并创建时间触发

点击下图的测试，或会提示 config 等不存在，可以忽略。

![EUserv德国免费VPS自动续期](https://bitbucket.org/xlc520/blogasset/raw/main/images2/ngcb15-164191528788531.webp)

测试没错误，就点 EUserv_extend⇨触发管理⇨创建触发器触发周期⇨自定义触发周期。填入 0 0 8 */7* **

![EUserv德国免费VPS自动续期](https://bitbucket.org/xlc520/blogasset/raw/main/images2/ngcb15-164191528788632.webp)

每 7 天的 8 点执行，可修改成你想要的时间。

### 6. 查看运行日志

日志提示有 2 台 VPS，说明以上成功设置了腾讯云函数 SCF 续期脚本。

```plain
START RequestId:ff1a66b6-27b6-4ec3-9e87-******************************正在续费第 1 个账号Starting new HTTPS connection (1): support.euserv.com:443https://support.euserv.com:443 "GET /index.iphp HTTP/1.1" 302 3218https://support.euserv.com:443 "GET /index.iphp?sess_id=71b865f50603e8b47dd4dc5ddc3c7b2e162621201071628 HTTP/1.1" 200 3218https://support.euserv.com:443 "GET /pic/logo_small.png HTTP/1.1" 200 78https://support.euserv.com:443 "POST /index.iphp HTTP/1.1" 200 12524https://support.euserv.com:443 "GET /index.iphp?sess_id=71b865f50603e8b47dd4dc5ddc3c7b2e162621201071 HTTP/1.1" 200 12562检测到第 1 个账号有 2 台VPS，正在尝试续期ServerID: 388889 does not need to be renewedServerID: 399991 does not need to be renewedChecking.......Resetting dropped connection: support.euserv.comhttps://support.euserv.com:443 "GET /index.iphp?sess_id=71b865f50603e8b47dd4dc5ddc3c7b2e162621201071 HTTP/1.1" 302 12562https://support.euserv.com:443 "GET /index.iphp HTTP/1.1" 302 3214https://support.euserv.com:443 "GET /index.iphp?sess_id=64cddbf54472cb28e449a1058fe88e3b1626261591628911 HTTP/1.1" 200 3214ALL Work Done! EnjoyStarting new HTTPS connection (1): sc.ftqq.com:443https://sc.ftqq.com:443 "POST /SCT63352TEcQdROD2yeMxg4iTf.send HTTP/1.1" 200 107Server酱 推送成功******************************Response RequestId:ff1a66b6-27b6-4ec3-9e8da57 RetMsg:nullEND RequestId:ff1a66b6-27b6-4ec3-9e87-0494da57Report RequestId:ff1a66b6-27b6-4ec3-9e87-0ea14494da57 Duration:39826ms Memory:64MB MemUsage:20.109375MB
```

### 7. 总结

至此，用腾讯云函数给 EUserv 德国免费 VPS 自动续期设置完毕。这里是利用免费腾讯云函数 SCF 的 Python 环境，定时运行续费代码，从而完成登录
Euserv 网站，判断是否需要续期，若需要，即执行续期动作。如果您自己有可用的 VPS，甚至在 Euserv 免费 VPS 自身上定时运行 corn
的续期脚本也是可用的。

## 七、Euserv 一键安装教程

首选需要一个 EUserv 的免费实例，怎么注册油管上有很多教程，我这里就不多说了。

用 SSH 登录后

第一步输入

`echo -e "nameserver 2001:67c:2b0::4\nnameserver 2001:67c:2b0::6" > /etc/resolv.conf`

第二步安装 wget、curl

Centos

`yum update && yum install -y wget curl`

Debian

`apt update && apt install wget curl -y`

Ubuntu

`apt-get update && apt-get install wget -y`

第三步安装 WARP

`wget -N https://cdn.jsdelivr.net/gh/fscarmen/warp/menu.sh && bash menu.sh [option] [lisence]`

选为 ipv6 only 添加 ipv4

选免费

选 IPV4 优先

第四步输入 mack a 的一键脚本

```plain
wget -P /root -N --no-check-certificate "https://raw.githubusercontent.com/mack-a/v2ray-agent/master/install.sh" && chmod 700 /root/install.sh && /root/install.sh
```

安装过程有中文说明，很容易

智能解析 DNS 服务，我选择 N

安装成功复制一下代码就 OK 了
