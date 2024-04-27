---
author: xlc520
title: 自建KMS服务-激活Windows和Office
excerpt: 
description: 
date: 2023-04-12
category: pc
tag: pc
article: true
timeline: true
icon: computer
---

# 自建 KMS 服务-激活 Windows 和 Office

## 前言

KMS 服务是一种密钥管理服务，KMS 是“Key Management
Service”的缩写,KMS 服务可以用于激活 Windows 和 Office 等产品，自建 KMS
服务有安全性高，方便快捷，保密性，稳定性，完全的控制权等优点，微软官方还贴心的给出了教程与秘钥，在本文中，我将介绍如何搭建自己的
KMS 服务。搭建方式有很多，本文主要是演示如何在自己的 linux 服务器中搭建自己的 KMS 服务

## 准备

### 1.一台服务器 VPS

### 2.域名

### 3.本教程参考的微软官方教程

<https://learn.microsoft.com/zh-cn/windows-server/get-started/kms-create-host>

### 4 系统支持

```none
CentOS 6+，Debian 7+，Ubuntu 12+
```

> 若没有服务器，无法自行搭建，可以从网络中自行搜索一个 kms 服务地址（域名或者 IP），也有不少，例如 kms.v0v.bid、kms.mogeko.me

## Docker 搭建

```plain
 docker run -d -p 1688:1688 --restart=always --name vlmcsd mikolatero/vlmcsd
```

## 本机搭建

### 一、域名绑定 IP

首先将自己的域名 A 记录到 VPS 的 ip

### 二、执行一键脚本

一键安装脚本

```shell
# 下载kms服务脚本并执行开启kms服务（十分感谢该开源作者的一键脚本）
wget --no-check-certificate https://github.com/teddysun/across/raw/master/kms.sh && chmod +x kms.sh && ./kms.sh
```

查询状态

```shell
/etc/init.d/kms status # 状态
```

启动命令

```shell
/etc/init.d/kms start # 启动
```

停止命令

```shell
/etc/init.d/kms stop # 停止
```

重启命令

```shell
/etc/init.d/kms restart # 重启
```

卸载命令

```shell
./kms.sh uninstall # 卸载
```

查看端口

```shell
# 查看端口
netstat -tunlp | grep 1688 
```

如下图代表运行成功
![image-1680614199864](https://bitbucket.org/xlc520/blogasset/raw/main/images3/image-1680614199864.png)

### 三、激活自己的 windows 和 office

下面列表里面含有的产品的 VL 版本或者能使用 key 进入 KMS 通道的产品，都支持使用 KMS 激活。
Office 2019 & Office 2016：<https://docs.microsoft.com/en-us/DeployOffice/vlactivation/gvlks>

Office 2013：<https://technet.microsoft.com/zh-cn/library/dn385360.aspx>
Office 2010：<https://technet.microsoft.com/zh-cn/library/ee624355(v=office.14).aspx>
Windows：<https://docs.microsoft.com/zh-cn/windows-server/get-started/kmsclientkeys>

### 1)激活自己的 windows

此时

```shell
kms.a.com  #这个域名就是kms服务
```

首先确认你的 Windows 版本
可以打开
此电脑-属性-关于
![image-1680615623446](https://bitbucket.org/xlc520/blogasset/raw/main/images3/image-1680615623446.png)
如我的电脑 Windows 版本是：
Windows Server 2022 Datacenter
他所对应的密钥是
WX4NM-KYWYW-QJJR4-XV3QB-6VM33
可以参考附：密钥
激活步骤（管理员命令执行）
![image-1680615813867](https://bitbucket.org/xlc520/blogasset/raw/main/images3/image-1680615813867.png)

#### 1.设置服务

```shell
slmgr -skms kms.a.com   #将kms服务设置为kms.a.com
```

![image-1680615872706](https://bitbucket.org/xlc520/blogasset/raw/main/images3/image-1680615872706.png)

#### 2.安装密钥

```shell
slmgr -ipk WX4NM-KYWYW-QJJR4-XV3QB-6VM33 #版本对应秘钥
```

![image-1680615927619](https://bitbucket.org/xlc520/blogasset/raw/main/images3/image-1680615927619.png)

#### 3.激活系统

```shell
slmgr -ato
```

![image-1680615978478](https://bitbucket.org/xlc520/blogasset/raw/main/images3/image-1680615978478.png)

#### 4.确认 KMS 服务是否已成功激活

```shell
slmgr.vbs /dlv #以获取有关KMS服务状态的详细信息
```

![image-1680616188380](https://bitbucket.org/xlc520/blogasset/raw/main/images3/image-1680616188380.png)

#### 5.查询过期时间

```shell
slmgr /xpr   #当前汻可证状态的截止日期
```

![image-1680918310917](https://bitbucket.org/xlc520/blogasset/raw/main/images3/image-1680918310917.png)

以上是 Windows 激活过程

### 2)激活自己的 office

![image-1680616885520](https://bitbucket.org/xlc520/blogasset/raw/main/images3/image-1680616885520.png)
查看自己的 office 版本(注意必须是 VL/LTSC 批量授权版本的才可以激活)
我的是
Office 21, Office21ProjectPro2021VL_KMS_Client_AE edition

### Office（VOL 版本）激活步骤（管理员命令执行）

#### 1. 进入安装目录

`cd "C:\Program Files (x86)\Microsoft Office\Office16"`
\- 32 位默认一般为 `C:\Program Files (x86)\Microsoft Office\Office16`
\- 64 位默认一般为 `C:\Program Files\Microsoft Office\Office16`
\- **Office16** 是 **Office 2016**
\- **Office15** 是 **Office 2013**
\- **Office14** 是 **Office 2010**
\- 打开以上所说的目录，应该有个 `OSPP.VBS` 文件
如我的是 64 位的系统运行以下命令

```powershell
cd "C:\Program Files\Microsoft Office\Office16"  #进入此目录
ls  #查看当前目录下的文件
```

![image-1680617002263](https://bitbucket.org/xlc520/blogasset/raw/main/images3/image-1680617002263.png)

#### 2. 注册 KMS 服务

```powershell
cscript ospp.vbs /sethst:kms.a.com  #注册 KMS 服务 
```

![image-1680617066807](https://bitbucket.org/xlc520/blogasset/raw/main/images3/image-1680617066807.png)

#### 3. 激活 Office

```powershell
cscript ospp.vbs /act #激活 Office 
```

![image-1680617165146](https://bitbucket.org/xlc520/blogasset/raw/main/images3/image-1680617165146.png)

#### 4.查看 office 激活状态

![image-1680617302781](https://bitbucket.org/xlc520/blogasset/raw/main/images3/image-1680617302781.png)

## 附：密钥

### 密钥

<https://learn.microsoft.com/zh-cn/windows-server/get-started/kms-client-activation-keys>

[kms-client-activation-keys.md](https://github.com/MicrosoftDocs/windowsserverdocs/blob/main/WindowsServerDocs/get-started/kms-client-activation-keys.md)

### Windows Server（LTSC 版本）

#### Windows Server 2022

| 操作系统版本                                       | KMS 客户端安装密钥                   |
|----------------------------------------------|-------------------------------|
| Windows Server 2022 Datacenter               | WX4NM-KYWYW-QJJR4-XV3QB-6VM33 |
| Windows Server 2022 Datacenter Azure Edition | NTBV8-9K7Q8-V27C6-M2BTV-KHMXV |
| Windows Server 2022 Standard                 | VDYBN-27WPP-V4HQT-9VMD4-VMK7H |

#### Windows Server 2019

| 操作系统版本                         | KMS 客户端安装密钥                   |
|--------------------------------|-------------------------------|
| Windows Server 2019 Datacenter | WMDGN-G9PQG-XVVXX-R3X43-63DFG |
| Windows Server 2019 Standard   | N69G4-B89J2-4G8F4-WWYCC-J464C |
| Windows Server 2019 Essentials | WVDHN-86M7X-466P6-VHXV7-YY726 |

#### Windows Server 2016

| 操作系统版本                         | KMS 客户端安装密钥                   |
|--------------------------------|-------------------------------|
| Windows Server 2016 Datacenter | CB7KF-BWN84-R7R2Y-793K2-8XDDG |
| Windows Server 2016 Standard   | WC2BQ-8NRM3-FDDYY-2BFGV-KHKQY |
| Windows Server 2016 Essentials | JCKRF-N37P4-C2D82-9YXRT-4M63B |

### Windows Server (半年频道版本)

#### Windows Server 版本 20H2、2004、1909、1903 和 1809

| 操作系统版本                    | KMS 客户端安装密钥                   |
|---------------------------|-------------------------------|
| Windows Server Datacenter | 6NMRW-2C8FM-D24W7-TQWMY-CWH2D |
| Windows Server Standard   | N2KJX-J94YW-TQVFB-DG9YT-724CC |

### Windows 11 和 Windows 10 (半年频道版本)

| 操作系统版本                | KMS 客户端安装密钥                   |
|-----------------------|-------------------------------|
| Windows 10/11 专业版     | W269N-WFGWX-YVC9B-4J6C9-T83GX |
| Windows 10/11 专业版 N   | MH37W-N47XK-V7XM9-C7227-GCQG9 |
| Windows 10/11 专业工作站   | NRG8B-VKK3Q-CXVCJ-9G2XF-6Q84J |
| Windows 10/11 专业工作站 N | 9FNHH-K3HBT-3W4TD-6383H-6XYWF |
| Windows 10/11 专业教育版   | 6TP4R-GNPTD-KYYHQ-7B7DP-J447Y |
| Windows 10/11 专业教育版 N | YVWGF-BXNMC-HTQYQ-CPQ99-66QFC |
| Windows 10/11 教育版     | NW6C2-QMPVW-D7KKK-3GKT6-VCFB2 |
| Windows 10/11 教育版 N   | 2WH4N-8QGBV-H22JP-CT43Q-MDWWJ |
| Windows 10/11 企业版     | NPPR9-FWDCX-D2C8J-H872K-2YT43 |
| Windows 10/11 企业版 N   | DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4 |
| Windows 10/11 企业版 G   | YYVX9-NTFWV-6MDM3-9PT4T-4M68B |
| Windows 10/11 企业版 G N | 44RPN-FTY23-9VTTB-MP9BX-T84FV |

### Windows 10 (LTSC/LTSB 版本)

#### Windows 10 LTSC 2019

| 操作系统版本                     | KMS 客户端安装密钥                   |
|----------------------------|-------------------------------|
| Windows 10 企业版 LTSC 2019   | M7XTQ-FN8P6-TTKYV-9D4CC-J462D |
| Windows 10 企业版 N LTSC 2019 | 92NFX-8DJQP-P6BBQ-THF9C-7CG2H |

#### Windows 10 LTSB 2016

| 操作系统版本                     | KMS 客户端安装密钥                   |
|----------------------------|-------------------------------|
| Windows 10 企业版 LTSB 2016   | DCPHK-NFMTC-H88MJ-PFHPY-QJ4BJ |
| Windows 10 企业版 N LTSB 2016 | QFFDN-GRT3P-VKWWX-X7T3R-8B639 |

#### Windows 10 LTSB 2015

| 操作系统版本                     | KMS 客户端安装密钥                   |
|----------------------------|-------------------------------|
| Windows 10 企业版 2015 LTSB   | WNMTR-4C88C-JK8YV-HQ7T2-76DF9 |
| Windows 10 企业版 2015 LTSB N | 2F77B-TNFGY-69QQF-B8YKP-D69TJ |

### 早期版本的 Windows Server

#### Windows Server 版本 1803

| 操作系统版本                    | KMS 客户端安装密钥                   |
|---------------------------|-------------------------------|
| Windows Server Datacenter | 2HXDN-KRXHB-GPYC7-YCKFJ-7FVDG |
| Windows Server Standard   | PTXN8-JFHJM-4WC78-MPCBR-9W4KR |

#### Windows Server 版本 1709

| 操作系统版本                    | KMS 客户端安装密钥                   |
|---------------------------|-------------------------------|
| Windows Server Datacenter | 6Y6KB-N82V8-D8CQV-23MJW-BWTG6 |
| Windows Server Standard   | DPCNP-XQFKJ-BJF7R-FRC8D-GF6G4 |

#### Windows Server 2012 R2

| 操作系统版本                                 | KMS 客户端安装密钥                   |
|----------------------------------------|-------------------------------|
| Windows Server 2012 R2 Server Standard | D2N9P-3P6X9-2R39C-7RTCD-MDVJX |
| WindowsServer 2012 R2 Datacenter       | W3GGN-FT8W3-Y4M27-J84CP-Q3VJ9 |
| WindowsServer 2012 R2 Essentials       | KNC87-3J2TX-XB4WP-VCPJV-M4FWM |

#### Windows Server 2012

| 操作系统版本                                  | KMS 客户端安装密钥                   |
|-----------------------------------------|-------------------------------|
| Windows Server 2012                     | BN3D2-R7TKB-3YPBD-8DRP2-27GG4 |
| Windows Server 2012 N                   | 8N2M2-HWPGY-7PGT9-HGDD8-GVGGY |
| Windows Server 2012 单语言版                | 2WN2H-YGCQR-KFX6K-CD6TF-84YXQ |
| Windows Server 2012 特定国家/地区版            | 4K36P-JN4VD-GDC6V-KDT89-DYFKP |
| Windows Server 2012 Server Standard     | XC9B7-NBPP2-83J2H-RHMBY-92BT4 |
| Windows Server 2012 MultiPoint Standard | HM7DN-YVMH3-46JC3-XYTG7-CYQJJ |
| Windows Server 2012 MultiPoint Premium  | XNH6W-2V9GX-RGJ4K-Y8X6F-QGJ2G |
| Windows Server 2012 Datacenter          | 48HP8-DN98B-MYWDG-T2DCC-8W83P |

#### Windows Server 2008 R2

| 操作系统版本                                  | KMS 客户端安装密钥                   |
|-----------------------------------------|-------------------------------|
| Windows Server 2008 R2 Web 版            | 6TPJF-RBVHG-WBW2R-86QPH-6RTM4 |
| Windows Server 2008 R2 HPC 版            | TT8MH-CG224-D3D7Q-498W2-9QCTX |
| WindowsServer 2008 R2 Standard          | YC6KT-GKW9T-YTKYR-T4X34-R7VHC |
| WindowsServer 2008 R2 企业版               | 489J6-VHDMP-X63PK-3K798-CPX3Y |
| WindowsServer 2008 R2 Datacenter        | 74YFP-3QFB3-KQT8W-PMXWJ-7M648 |
| 面向基于 Itanium 系统的 Windows Server 2008 R2 | GT63C-RJFQ3-4GMB6-BRFB9-CB83V |

#### Windows Server 2008

| 操作系统版本                                      | KMS 客户端安装密钥                   |
|---------------------------------------------|-------------------------------|
| Windows Web Server 2008                     | WYR28-R7TFJ-3X2YQ-YCY4H-M249D |
| Windows Server 2008 Standard                | TM24T-X9RMF-VWXK6-X8JC9-BFGM2 |
| 不带 Hyper-V 的 Windows Server 2008 Standard   | W7VD6-7JFBR-RX26B-YKQ3Y-6FFFJ |
| Windows Server 2008 企业版                     | YQGMW-MPWTJ-34KDK-48M3W-X4Q6V |
| 不带 Hyper-V 的 Windows Server 2008 企业版        | 39BXF-X8Q23-P2WWT-38T2F-G3FPG |
| Windows Server 2008 HPC                     | RCTX3-KWVHP-BR6TB-RB6DM-6X7HP |
| Windows Server 2008 Datacenter              | 7M67G-PC374-GR742-YH8V4-TCBY3 |
| 不带 Hyper-V 的 Windows Server 2008 Datacenter | 22XQ2-VRXRG-P8D42-K34TD-G3QQC |
| 面向基于 Itanium 系统的 Windows Server 2008        | 4DWFP-JF3DJ-B7DTH-78FJB-PDRHK |

### 早期版本的 Windows

#### Windows 8.1

| 操作系统版本            | KMS 客户端安装密钥                   |
|-------------------|-------------------------------|
| Windows 8.1 专业版   | GCRJD-8NW9H-F2CDX-CCM8D-9D6T9 |
| Windows 8.1 专业版 N | HMCNV-VVBFX-7HMBH-CTY9B-B4FXY |
| Windows 8.1 企业版   | MHF9N-XY6XB-WVXMC-BTDCT-MKKG7 |
| Windows 8.1 企业版 N | TT4HM-HN7YT-62K67-RGRQJ-JFFXW |

#### Windows 8

| 操作系统版本          | KMS 客户端安装密钥                   |
|-----------------|-------------------------------|
| Windows 8 专业版   | NG4HW-VH26C-733KW-K6F98-J8CK4 |
| Windows 8 专业版 N | XCVCF-2NXM9-723PB-MHCB7-2RYQQ |
| Windows 8 企业版   | 32JNW-9KQ84-P47T8-D8GGY-CWCK7 |
| Windows 8 企业版 N | JMNMF-RHW7P-DMY6X-RF3DR-X2BQT |

#### Windows 7

| 操作系统版本          | KMS 客户端安装密钥                   |
|-----------------|-------------------------------|
| Windows 7 专业版   | FJ82H-XT6CR-J8D7P-XQJJ2-GPDD4 |
| Windows 7 专业版 N | MRPKT-YTG23-K7D7T-X2JMM-QY7MG |
| Windows 7 专业版 E | W82YF-2Q76Y-63HXB-FGJG9-GF7QX |
| Windows7 企业版    | 33PXH-7Y6KF-2VJC9-XBBR8-HVTHH |
| Windows 7 企业版 N | YDRBP-3D83W-TY26F-D46B2-XCKRJ |
| Windows 7 企业版 E | C29WB-22CC8-VJ326-GHFJW-H9DH4 |

------

### Office 密钥列表

参考官网

- <https://docs.microsoft.com/en-us/DeployOffice/vlactivation/gvlks>

#### GVLKs for Office LTSC 2021

| Product                            | GVLK                          |
|------------------------------------|-------------------------------|
| Office LTSC Professional Plus 2021 | FXYTK-NJJ8C-GB6DW-3DYQT-6F7TH |
| Office LTSC Standard 2021          | KDX7X-BNVR8-TXXGX-4Q7Y8-78VT3 |
| Project Professional 2021          | FTNWT-C6WBT-8HMGF-K9PRX-QV9H8 |
| Project Standard 2021              | J2JDC-NJCYY-9RGQ4-YXWMH-T3D4T |
| Visio LTSC Professional 2021       | KNH8D-FGHT4-T8RK3-CTDYJ-K2HT4 |
| Visio LTSC Standard 2021           | MJVNY-BYWPY-CWV6J-2RKRT-4M8QG |
| Access LTSC 2021                   | WM8YG-YNGDD-4JHDC-PG3F4-FC4T4 |
| Excel LTSC 2021                    | NWG3X-87C9K-TC7YY-BC2G7-G6RVC |
| Outlook LTSC 2021                  | C9FM6-3N72F-HFJXB-TM3V9-T86R9 |
| PowerPoint LTSC 2021               | TY7XF-NFRBR-KJ44C-G83KF-GX27K |
| Publisher LTSC 2021                | 2MW9D-N4BXM-9VBPG-Q7W6M-KFBGQ |
| Skype for Business LTSC 2021       | HWCXN-K3WBT-WJBKY-R8BD9-XK29P |
| Word LTSC 2021                     | TN8H9-M34D3-Y64V9-TR72V-X79KV |

#### GVLKs for Office 2019

| Product                       | GVLK                          |
|-------------------------------|-------------------------------|
| Office Professional Plus 2019 | NMMKJ-6RK4F-KMJVX-8D9MJ-6MWKP |
| Office Standard 2019          | 6NWWJ-YQWMR-QKGCB-6TMB3-9D9HK |
| Project Professional 2019     | B4NPR-3FKK7-T2MBV-FRQ4W-PKD2B |
| Project Standard 2019         | C4F7P-NCP8C-6CQPT-MQHV9-JXD2M |
| Visio Professional 2019       | 9BGNQ-K37YR-RQHF2-38RQ3-7VCBB |
| Visio Standard 2019           | 7TQNQ-K3YQQ-3PFH7-CCPPM-X4VQ2 |
| Access 2019                   | 9N9PT-27V4Y-VJ2PD-YXFMF-YTFQT |
| Excel 2019                    | TMJWT-YYNMB-3BKTF-644FC-RVXBD |
| Outlook 2019                  | 7HD7K-N4PVK-BHBCQ-YWQRW-XW4VK |
| PowerPoint 2019               | RRNCX-C64HY-W2MM7-MCH9G-TJHMQ |
| Publisher 2019                | G2KWX-3NW6P-PY93R-JXK2T-C9Y9V |
| Skype for Business 2019       | NCJ33-JHBBY-HTK98-MYCV8-HMKHJ |
| Word 2019                     | PBX3G-NWMT6-Q7XBW-PYJGG-WXD33 |

#### GVLKs for Office 2016

| Product                       | GVLK                          |
|-------------------------------|-------------------------------|
| Office Professional Plus 2016 | XQNVK-8JYDB-WJ9W3-YJ8YR-WFG99 |
| Office Standard 2016          | JNRGM-WHDWX-FJJG3-K47QV-DRTFM |
| Project Professional 2016     | YG9NW-3K39V-2T3HJ-93F3Q-G83KT |
| Project Standard 2016         | GNFHQ-F6YQM-KQDGJ-327XX-KQBVC |
| Visio Professional 2016       | PD3PC-RHNGV-FXJ29-8JK7D-RJRJK |
| Visio Standard 2016           | 7WHWN-4T7MP-G96JF-G33KR-W8GF4 |
| Access 2016                   | GNH9Y-D2J4T-FJHGG-QRVH7-QPFDW |
| Excel 2016                    | 9C2PK-NWTVB-JMPW8-BFT28-7FTBF |
| OneNote 2016                  | DR92N-9HTF2-97XKM-XW2WJ-XW3J6 |
| Outlook 2016                  | R69KK-NTPKF-7M3Q4-QYBHW-6MT9B |
| PowerPoint 2016               | J7MQP-HNJ4Y-WJ7YM-PFYGF-BY6C6 |
| Publisher 2016                | F47MM-N3XJP-TQXJ9-BP99D-8K837 |
| Skype for Business 2016       | 869NQ-FJ69K-466HW-QYCP2-DDBV6 |
| Word 2016                     | WXY84-JN2Q9-RBCCQ-3Q3J3-3PFJ6 |

### 激活说明

- KMS 激活有 180 天期限，此期限称为激活有效间隔
- 若要保持激活状态，您的系统必须通过至少每 180 天连接一次 KMS 服务器来续订激活
- 默认情况下，系统每 7 天自动进行一次激活续订尝试
- 在续订客户端激活之后，激活有效间隔重新开始
- 综上所述，只要您不超过 180 天以上无法连接互联网，系统会自行续期保持激活状态

## 激活命令汇总

### Windows

```bash
# 管理员方式运行cmd，安装从上述链接中得到的key
slmgr /ipk xxxxx-xxxxx-xxxxx-xxxxx-xxxxx
```

```bash
# 设置自建kms服务的地址或者域名，网络中搜到的也一样
slmgr /skms Your IP or Domain:1688
```

```bash
# 激活
slmgr /ato
```

### Office or Visio or Project

```bash
# 管理员方式运行cmd，进入Office目录，找到OSPP.VBS文件
cd "C:\Program Files (x86)\Microsoft Office\Office16"
```

```bash
# 设置自建kms服务的地址或者域名，网络中搜到的也一样
cscript ospp.vbs /sethst:Your IP or Domain
```

```bash
# 安装从上述链接中得到的对应的Office或者Visio或者Project的key
cscript ospp.vbs /inpkey:xxxxx-xxxxx-xxxxx-xxxxx-xxxxx
cscript ospp.vbs /inpkey:XQNVK-8JYDB-WJ9W3-YJ8YR-WFG99（Office2016）
cscript ospp.vbs /inpkey:PD3PC-RHNGV-FXJ29-8JK7D-RJRJK（Visio2016）
cscript ospp.vbs /inpkey:YG9NW-3K39V-2T3HJ-93F3Q-G83KT（Project2016）

# 若安装错误，卸载安装的key
cscript ospp.vbs /unpkey:xxxxx(key的后五位即可)
```

```bash
# 激活
cscript ospp.vbs /act

# 查看激活状态
cscript ospp.vbs /dstatus
```

### 零售版本修改为批量版本（以 2016 版本为例）

###### Office 2016（写到 .bat 文件里执行）

```bash
echo 进入目录
if exist "%ProgramFiles%\Microsoft Office\Office16\ospp.vbs" cd /d "%ProgramFiles%\Microsoft Office\Office16"
if exist "%ProgramFiles(x86)%\Microsoft Office\Office16\ospp.vbs" cd /d "%ProgramFiles(x86)%\Microsoft Office\Office16"

echo 重置Office2016零售激活...
cscript ospp.vbs /rearm

echo 安装 KMS 许可证...
for /f %%x in ('dir /b ..\root\Licenses16\proplusvl_kms*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%%x" >nul

echo 安装 MAK 许可证...
for /f %%x in ('dir /b ..\root\Licenses16\proplusvl_mak*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%%x" >nul
```

### Office 2109（写到 .bat 文件里执行）

```bash
if exist "%ProgramFiles%\Microsoft Office\Office16\ospp.vbs" cd /d "%ProgramFiles%\Microsoft Office\Office16"
if exist "%ProgramFiles(x86)%\Microsoft Office\Office16\ospp.vbs" cd /d "%ProgramFiles(x86)%\Microsoft Office\Office16"

echo 正在重置Office2019零售激活...
cscript ospp.vbs /rearm

echo 正在安装 KMS 许可证...
for /f %%x in ('dir /b ..\root\Licenses16\ProPlus2019VL_kms*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%%x" >nul

echo 正在安装 MAK 许可证...
for /f %%x in ('dir /b ..\root\Licenses16\ProPlus2019VL_mak*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%%x" >nul

echo 正在安装 KMS 密钥...
cscript ospp.vbs /inpkey:NMMKJ-6RK4F-KMJVX-8D9MJ-6MWKP

echo 转化完成，按任意键退出！
pause >nul
exit
```

### Visio（写到 .bat 文件里执行）

```bash
echo 进入目录
if exist "%ProgramFiles%\Microsoft Office\Office16\ospp.vbs" cd /d "%ProgramFiles%\Microsoft Office\Office16"
if exist "%ProgramFiles(x86)%\Microsoft Office\Office16\ospp.vbs" cd /d "%ProgramFiles(x86)%\Microsoft Office\Office16"

echo 重置Visio2016零售激活...
cscript ospp.vbs /rearm

echo 安装 KMS 许可证...
for /f %%x in ('dir /b ..\root\Licenses16\visio???vl_kms*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%%x" >nul

echo 安装 MAK 许可证...
for /f %%x in ('dir /b ..\root\Licenses16\visio???vl_mak*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%%x" >nul
```

### Project（写到 .bat 文件里执行）

```bash
echo 进入目录
if exist "%ProgramFiles%\Microsoft Office\Office16\ospp.vbs" cd /d "%ProgramFiles%\Microsoft Office\Office16"
if exist "%ProgramFiles(x86)%\Microsoft Office\Office16\ospp.vbs" cd /d "%ProgramFiles(x86)%\Microsoft Office\Office16"

echo 重置Project2016零售激活...
cscript ospp.vbs /rearm

echo 安装 KMS 许可证...
for /f %%x in ('dir /b ..\root\Licenses16\project???vl_kms*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%%x" >nul

echo 安装 MAK 许可证...
for /f %%x in ('dir /b ..\root\Licenses16\project???vl_mak*.xrm-ms') do cscript ospp.vbs /inslic:"..\root\Licenses16\%%x" >nul
```

修改完按批量版本的激活方法激活即可。
