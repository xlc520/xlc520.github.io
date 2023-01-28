---
author: xlc520
title: 全平台 DoH DoT 设置教程
description: 
date: 2023-01-27
category: other
tag: other
article: true
timeline: true
icon: others
password: 
---

# 全平台 DoH DoT 设置教程

## 公共 DoT/DoH 服务器 IP 域名 大全

### 国内公共 DoT/DoH 服务器 IP 域名 大全

| 提供者         | 类型 | 地址                               | iOS用链接                                                    |
| :------------- | :--- | :--------------------------------- | :----------------------------------------------------------- |
| 阿里           | DoT  | dns.alidns.com                     | [iOS用](https://gitee.com/fuangyian/encrypted-dns/raw/master/profiles/alibaba-tls.mobileconfig) |
| 阿里           | DoH  | `https://dns.alidns.com/dns-query` | 无                                                           |
| 腾讯           | DoH  | dot.pub                            | [iOS用](https://raw.githubusercontent.com/paulmillr/encrypted-dns/master/profiles/dnspod-https.mobileconfig) |
| 腾讯           | DoT  | `https://doh.pub/dns-query`        | [iOS用](https://gitee.com/fuangyian/encrypted-dns/raw/master/profiles/dnspod-tls.mobileconfig) |
| 腾讯           | DoT  | `https://sm2.doh.pub/dns-query`    |                                                              |
| TWNIC Quad 101 | DoT  | dns.twnic.tw                       |                                                              |
| TWNIC Quad 101 | DoH  | `https://dns.twnic.tw/dns-query`   |                                                              |

### 国外内公共 DoT/DoH 服务器 IP 域名 大全

| 提供者     | 类型 | 地址                                        | 备注                                                         |
| :--------- | :--- | :------------------------------------------ | :----------------------------------------------------------- |
| Google     | DoT  | dns.google                                  | [iOS用](https://github.com/paulmillr/encrypted-dns/raw/master/profiles/google-tls.mobileconfig) |
| Google     | DoH  | `https://dns.google/dns-query`              | [iOS用](https://github.com/paulmillr/encrypted-dns/raw/master/profile/google-https.mobileconfig) |
| Cloudflare | DoT  | cloudflare-dns.com                          | [iOS用](https://github.com/paulmillr/encrypted-dns/raw/master/profiles/cloudflare-tls.mobileconfig) |
| Cloudflare | DoH  | `https://1dot1dot1dot1.cloudflare-dns.com/` | [iOS用](https://github.com/paulmillr/encrypted-dns/raw/master/profiles/cloudflare-https.mobileconfig) |
| IBM Quad9  | DoT  | dns.quad9.net                               |                                                              |
| IBM Quad9  | DoH  | `https://dns.quad9.net/dns-query`           |                                                              |
| DNS.SB     | DoT  | dot.sb                                      |                                                              |
| DNS.SB     | DoH  | `https://doh.dns.sb/dns-query`              |                                                              |
| DNS.SB     | DoH  | `https://doh.sb/dns-query`                  |                                                              |

## 各平台配置方式

DoT 全称 DNS over TLS，它使用 TLS 来传输 DNS 协议。

DoH 全称 DNS over HTTPS，它使用 HTTPS 来传输 DNS 协议。

DoT 和 DoH 都是加密DNS，区别在于它们采用不同的协议和端口

两者的原理是一样的，加密传输用户和 DNS 服务器之间的 DNS 消息，从而防止中间用户窃听和域名查询隐私泄漏的作用。

两者相对来说DoH更通用一点，因为 DoT 一般走 853 端口， DoH 走的就是平时 https 的 443 端口，流量相对更加隐蔽一点。通用性也更好（有些网络可能会封这个不常见的 853 端口）

相对来说微软喜欢 DoH ，谷歌喜欢 DoT 。

至于选什么好，上方表格里的都是推荐的 
 - **你在国内就选国内的，你在国外就选国外的。**

 - 你在国内想解决DNS污染问题，你能解决访问问题，**并且你能接受那个延迟**，那就选国外的。

 - 国内用优先选腾讯，如果你有信仰之类的，不想选腾讯，那就选阿里云。

 - 国外用优先选Cloudflare，其次是google。

 - 如果你想同时满足国内和国外使用（比如一会儿在国内，一会儿在国外的瞬移人），可以用腾讯云，之所以不推荐阿里云，是因为阿里云DNS的海外节点延迟波动比较大，时卡时不卡的。

### 安卓

安卓的配置堪称最简单的，安卓9以上系统都自带支持DoT支持

1. 找到设置位置：

- 鸿蒙：设置-更多连接-加密 DNS
- MIUI：设置-连接与共享-私人 DNS
- EMUI：设置-网络和互联网-加密 DNS
- 原生安卓：设置-网络和互联网-高级-私人 DNS

1. 选择手动或指定DNS服务之类的选项，填写上方表格中你中意的DoT类型的域名

### iOS/iPad

iOS的设置比较复杂，不像安卓，直接系统设置就有，往里一填就好了。

1. Safari浏览器点击上边对应的【iOS用】链接

2. 点击允许后，去设置-已下载的描述文件-安装-（可能提示警告）安装-完成。

3. 在设置中启用对应的项目
  - iOS14 设置-网络-DNS
  - iOS15 设置-通用-设备管理-DNS

1. 表格中只给了常用的配置文件，如果你想添加额外的服务器配置，请参照下方的配置文件，替换中文描述部分对应项目
   PS：iphone的DoH不支持除443以外的端口，所以请注意一下你的DoH服务器的端口问题。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
    <dict>
        <key>PayloadContent</key>
        <array>
            <dict>
                <key>DNSSettings</key>
                <dict>
                    <key>DNSProtocol</key>
                    <string>是TLS类型的还是HTTPS类型的，只填写英文部分</string>
                    <key>ServerAddresses</key>
                    <array>
                        <string>你服务器的ip</string>
                        <string>你服务器的ip2，如果有更多IP就继续照着往下写</string>
                    </array>
                    <key>ServerName</key>
                    <string>DoT的地址</string>
                </dict>
                <key>PayloadDescription</key>
                <string>对于配置文件的描述，可自定义</string>
                <key>PayloadDisplayName</key>
                <string>想显示dns的名称～可自定义</string>
                <key>PayloadIdentifier</key>
                <string>com.apple.vpn.managed.C06CADF7-7AAF-4426-933A-25E1792277CF</string>
                <key>PayloadType</key>
                <string>com.apple.dnsSettings.managed</string>
                <key>PayloadUUID</key>
                <string>C06CADF7-7AAF-4426-933A-25E1792277CF</string>
                <key>PayloadVersion</key>
                <integer>1</integer>
                <key>ProhibitDisablement</key>
                <false/>
            </dict>
        </array>
        <key>PayloadDescription</key>
        <string>对于配置文件的授予权限时的描述，可自定义</string>
        <key>PayloadDisplayName</key>
        <string>想显示dns的名称～可自定义</string>
        <key>PayloadIdentifier</key>
        <string>fuangyians-MacBook-Air.ADA48F80asdfad-8D1C-4456-8BB8-E8859E2A2904</string>
        <key>PayloadRemovalDisallowed</key>
        <false/>
        <key>PayloadType</key>
        <string>Configuration</string>
        <key>PayloadUUID</key>
        <string>8F5E7F85-316A-4A7E-8500-E9C7951E0DC4</string>
        <key>PayloadVersion</key>
        <integer>1</integer>
    </dict>
</plist>
```

### WIN11

系统DNS设置项位置：设置-网络和互联网-以太网和WIFI-DNS服务器分配-编辑

#### 你使用的是如下表所示的DNS

| 服务器所有者 | DNS 服务器 IP 地址                                        |
| :----------- | :-------------------------------------------------------- |
| Cloudflare   | 1.1.1.1 1.0.0.1 2606:4700:4700::1111 2606:4700:4700::1001 |
| google       | 8.8.8.8 8.8.4.4 2001:4860:4860::8888 2001:4860:4860::8844 |
| Quad 9       | 9.9.9.9 149.112.112.112 2620:fe::fe 2620:fe::fe:9         |

这3组w加密DNS服务器Win11其实系统已经内置了，如果你将DNS设置为下表中的这些IP地址，那么直接选择开(自动模版)，然后保存即可

![img](https://static.xlc520.ml/blogImage/20230113145440.png)

#### 你想设置另外的DoH服务器

win 系统出于安全性考虑，禁止使用未绑定域名与 IP 关系的 DoH 服务器，需要自己添加服务器的域名与 IP

以下是一段比较费的话，可以跳过

> 如果 DoH 服务器只写域名而没有设定 IP 的话，域名没有绑定 IP，系统需要先使用传统 DNS 请求，解析 DoH 服务器的域名，然后再去连接这个解析出的 DoH 服务器 IP，这中间有个问题，那个传统 DNS 是可信任的吗？用户连接到传统 DNS 之间的网络是可信任的吗？如果这次 DNS 解析被污染了，得到的 DoH 服务器 IP 可能并不是真实的。
> 
> 但如果只写一个 IP，全球固定一个 IP，除非是 Cloudflare ，google ，Quad 9 这种与 APNIC 深度合作的，服务器节点遍布全球的服务商，用户可以就近解析，只写一个 IP 的话，用户很可能并不能连到距离他最近的服务器。
> 
> 所以实际上 Win11 采用了折中处理。
> 
> 你需要同时设置 DoH 服务器域名和一个内置绑定的 IP ，首次 DNS 查询一定会通过这个域名的绑定 IP ，而后续 DoH 服务器可以返回距离用户更近的节点 IP 供用户使用。

#### 手动设定其他的DNS

![img](https://static.xlc520.ml/blogImage/20230113145737.png)

1. DNS：写DoH服务器的IP

2. DNS over HTTPS：选【开（手动模版）】

3. DNS over HTTPS 模版：写DoH服务器的域名

4. 将IPv4，IPv6（如果需要）里的首选和备选DNS都设置好后，保存即可

#### 将新的 DoH 服务器添加到系统内的已知服务器列表

这个做法会相对安全一点，但开始相对比较麻烦

1. 打开开始菜单

2. 在英文输入法状态下直接输入 “powershell”

3. 点击以管理员身份运行

![img](https://static.xlc520.ml/blogImage/20230113153621.png)

1. 按如下格式输入命令

```shell
Add-DnsClientDohServerAddress -ServerAddress 'DoH服务器IP' -DohTemplate 'DoH服务域名' -AllowFallbackToUdp $False -AutoUpgrade $True
```

- 设置腾讯云的示例

```shell
Add-DnsClientDohServerAddress -ServerAddress '162.14.21.56' -DohTemplate 'https://doh.pub/dns-query' -AllowFallbackToUdp $False -AutoUpgrade $True
```

1. 然后输入以下命令，看看你刚才设置的 DoH 服务器是不是被加进去了。

```shell
Get-DNSClientDohServerAddress
```

1. DNS写DoH服务器的IP

2. DNS over HTTPS，选【开（手动模版）】

3. DNS over HTTPS 模版写DoH服务器的域名

4. 将IPv4，IPv6（如果需要）里的首选和备选DNS都设置好后，保存即可

### Win10

Win10目前还不支持，必须要借助第三方软件，工具非常多，这里我只是列举一种
1. 下载[AuroraDNS GUI](https://tjsky.lanzoum.com/ifvgz0kwqpti)(密码:9jvz)
2. 解压到任意位置
3. 运行AuroraGUI.exe
4. 右下角托盘图标处，双击A字符
5. 点击第一个按钮”设为系统 DNS”使其变为深色
6. 默认配置为腾讯云的 DoH,尽情使用吧
7. 如需退出软件请在托盘图标处，右键单击A字符，选中”退出并重置系统DNS”

### Chrome、Edge、Firefox 等浏览器们

如果你已经在操作系统层面设置了系统DoH服务器，其实可以不用在浏览器内设置了

#### Chrome

1. 设置位置：设置-隐私设置和安全性-安全-高级-使用安全 DNS-自定义
2. 写入开始表格中的 DoH 服务器域名
3. 已经好了。

#### Firefox

1. 设置位置：设置-常规-网络设置-设置-启用基于 HTTPS 的 DNS – 自定义
2. 写入开始表格中的DoH服务器域名
3. 已经好了。

#### Edge

1. 设置位置：设置-隐私、搜索和服务-安全性-使用安全的DNS指定如何查找网站的网络地址-请选择服务提供商
2. 写入开始表格中的DoH服务器域名
3. 已经好了。

## 如何检查是否正确成功设置 DoH DoT服务器

访问网易的DNS检测网址：[点击访问](https://nstool.netease.com/)
他会显示你的IP和DNS信息，如果显示的DNS信息是你设置的DNS的IP或者反复刷新时会变化，并且查询IP归属是对应服务商的服务，比如腾讯和谷歌的可能每次刷新都是一个新的IP，IP归属显示为腾讯云或者谷歌域名服务。

## 需要注意的点

1. 再说一次 DNS 劫持 ≠ DNS 污染
   DoH DoT只能解决 DNS 劫持问题，无法解决 DNS 污染问题。
   如果需要解决 DNS 污染，则要用国外 DoH / DoT 服务器。
2. 解决 DNS 污染，谷歌之类的网站还是打不开的，但是被DNS污染的动漫花园，可以直接打开了。
3. DoH / DoT服务器的性能速度一般都不如传统的DNS，毕竟UDP协议和TCP协议的区别摆着这里。所以打开网站速度可能会变慢一点。
4. 如果你非要解决DNS污染，你需要国外的DoH，DoH地址。这里只简单写一点步骤

- 修改Hosts文件，增加这如下内容

```
#以下是cf反代域名列表
172.67.73.30 diii.tk
```

- 将DNS域名设置为`https://diii.tk/国外DoH服务器域名`
  比如`https://diii.tk/https://dns.google/resolve`
- 国内使用国外的DoH服务器会非常的卡，请自己衡量是够能够接受