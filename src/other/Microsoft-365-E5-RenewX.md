---
author: xlc520
title: E5 调用API续订服务：Microsoft 365 E5 Renew X
description: 
date: 2022-06-12
category: other
tag: 
 - other
 - E5
 - office
article: true
timeline: true
icon: others
password: 
---

# E5 调用API续订服务：Microsoft 365 E5 Renew X

Microsoft 365 E5 Renew X是一款网页版的E5续订服务，其依赖网页浏览器呈现支持用户多端操作，完全将E5账户API调用托管在了服务器端因此用户无需电脑也可使用。

## Microsoft 365 E5 Renew X 由来

Microsoft 365 E5 Renew X为Microsoft 365 E5 Web的升级版，相对于旧版其增强了管理功能且更容易部署，API调用内核继承于续订桌面版软件Microsoft 365 E5 Renew Plus。

## 主要功能

### 用户端

- **两种可选的调用权限**：用户未登录作为守护程序调用(需要客户端密码)、程序以登录用户身份直接调用(需要账户密码)
- **API种类齐全**：41/30个可选的Microsoft Graph REST API Beta中的API(未来可能会继续添加)
- **完全随机的API调用模式**：从已选定的API序列中随机抽取一个或几个进行调用（个数和API随机）
- **完全随机的API调用时间间隔**：随机区段1000s-2000s固定
- **完全随机的API内容(仅部分API支持)**：发送邮件的内容随机 Onedirve上传文件的内容随机
- **邮件通知服务**：支持设置通知邮箱，调用异常会通过邮件通知无需反复登录查看

### 部署端

- **平台兼容性**：使用Asp.Net Core 作为跨平台框架增适用于 **Windows|Linux|MacOS x64|x86|ARM64|ARM**
- **灵活部署**：支持**开放站点部署**和**私享部署**，私享部署不再强制要求配置Https和OAuth
- **无需数据库**：不需要后台数据库支持，前后台一体化程序
- **用户后台管理**：可修改用户的E5账户数量，以及封删管理
- **系统状态监视**：系统占用率一目了然，可控的站点注册通道更容易控制系统用户数量
- **自定义页面**：支持自定义HTML静态页面，可设置支付宝、微信收款码
- **显示ICP备案**：支持ICP备案文字显示，可在国内备案建站
- **无人值守 运行自动暂停**：可自动暂停有错误率过高的账号API调用
- **无人值守 自动恢复运行**：可定期自动恢复全部账号的API调用，防止因微软网络原因触发大量账号停止API调用进而导致的账号续期失败

# 用户端使用教程**(请勿开启账号的双重验证功能)**

## 可用站点

### 主站

[**主站：https://e5.sundayrx.net（由 SundayRX 运营）(可登录不可注册)**](https://e5.sundayrx.net/)

[**分站：https://ms-e5-renew.leeskyler.top:11015（由 leeskyler 运营）(已关停)**](https://ms-e5-renew.leeskyler.top:11015/)

[**分站：https://ms-e5-renew-3.eastern.moe（由 leeskyler 运营）(已关停)**](https://ms-e5-renew-3.eastern.moe/)

### 自建共享站点

[**自建共享站：https://ew.chirmyram.com（由 七米蓝 运营）(可登录不可注册)**](https://ew.chirmyram.com/)

[**自建共享站：https://e5.hm0420.cc（由 小冰酱 运营）**](https://e5.hm0420.cc/)

[**自建共享站：https://ms-e5.hm0420.cc（由 小冰酱 运营）**](https://ms-e5.hm0420.cc/)

[**自建共享站：https://e5.xzh.gs（由 XZH 运营）**](https://e5.xzh.gs/)

[**自建共享站：https://e5.tianli0.top（由 Tinali 运营）**](https://e5.tianli0.top/)

[**自建共享站：https://renew.lrize.xyz（由 Lrize、 运营）**](https://renew.lrize.xyz/)

[**自建共享站：https://e5zh.xyz（由 z 运营）**](https://e5zh.xyz/)

## 1 注册Azure应用程序

### 1.1 应用注册

1. [点击登录 Azure](https://portal.azure.com/#home)或[点击直接进入Azure应用注册](https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade)，登录账号使用申请到的Microsoft 365 E5的**管理员账户**（账户名类似XXXX@YYYY.onmicrosoft.com格式）。
   2.登录完成后点击右上角的“门户”按钮进入Azure管理中心，在搜索栏内输入“应用注册”，点击进入[（若应用注册搜索不到请点击此处直接进入）](https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade)。
   ![图片](http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618170032256-165380585664583.png)
   3.单击“新注册”按钮
   ![图片](http://122.9.159.116:5244/d/ecloud180/images/blogImage/2020061817051341-165380585814786.png)
   4.配置应用 应用名称随意写、注意可访问性选项选择最后一项、重定向URL暂时不填 、完成后点击注册
   ![图片](http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618170801323-165380585941389.png)

### 1.2 配置应用重定向URL（身份验证）

1.先点击“概述”，然后点击“添加重定向URL”，进入重定向URL配置界面，**下图中的应用程序(客户端)ID即为"客户端ID"**。
![图片](http://122.9.159.116:5244/d/ecloud180/images/blogImage/2020061817121972-165380586091892.png)
2.点击“添加平台”，再点击“移动和桌面应用程序”，
![图片](http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618171501396-165380586226995.png)
3.继续勾选中第一个URL，最后点击底部的“配置”，该URL为“https://login.microsoftonline.com/common/oauth2/nativeclient”也可手动添加。
![图片](http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618171651338-165380586350298.png)
4.配置默认客户端类型将应用程序视为公共客户端 点击切换按钮为“是” ，最后点击“保存”按钮保存。
![图片](http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618171850779-1653805864822101.png)

## 2 配置应用程序的API权限（重要）

**小白提示：建议选择“委托的权限(用户登录)”该权限类型，调用API较多，操作步骤较少简单粗暴，调用成功几率高**

注册的应用程序API权限类型有两种，其主要区别如下表所示：

| 权限类型     | **委托的权限(用户登录)**             | **应用程序权限(非用户登录)**                           |
| ------------ | ------------------------------------ | ------------------------------------------------------ |
| 官方释义     | 应用程序必须以登录用户身份访问API    | 应用程序在用户未登录的情况下作为后台服务或守护程序运行 |
| 需要的信息   | 账户名称+账户密码+应用程序(客户端)ID | 账户名称+客户端机密+应用程序(客户端)ID                 |
| 功能影响     | 程序中所有API均可调用                | 部分API权限受限无法调用(官方限制)                      |
| API权限配置  | 可由PC版程序自动配置添加API权限      | 必须手动配置API权限                                    |
| 显示颜色标识 | 蓝色                                 | 深青色                                                 |

**以下是登录或非登录所需要的权限列表**：
![图片](http://122.9.159.116:5244/d/ecloud180/images/blogImage/20201102171130141.png)

最后根据所选的API权限类型在：**2.1 选择“委托的权限(用户登录)”类型的API**或者**2.2 选择“应用程序权限(非用户登录)”类型的API**中选择性阅读。

### 2.1 选择“委托的权限(用户登录)”类型的API

#### 手动配置API权限

1.点击“API权限”-“添加权限”-“Microsoft Graph”
![图片](http://122.9.159.116:5244/d/ecloud180/images/blogImage/2020061819283823-1653805868573106.png)
2.选择“委托的权限”![图片](http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618172538991-1653805869901109.png)
3.根据编辑页面中列出的API权限需求表（注意在程序中切换为"**登录**“）来勾选所对应的API权限，全部选择完成后点击"添加权限”。
![图片](http://122.9.159.116:5244/d/ecloud180/images/blogImage/20201102171303292.png)
![图片](http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618172627969-1653805874862114.png)
添加完成的效果如图
**如果没有“代表XXX授予管理员同意”按钮 说明该账号不是管理员账号 换登管理员账号创建应用**
![图片](http://122.9.159.116:5244/d/ecloud180/images/blogImage/20201112111140479.png)

4.最后点击代表XXX授予管理员同意,对话框选择“是”（该图包含了当前程序“委托的权限(用户登录)”全部API所需要的权限）。

![图片](http://122.9.159.116:5244/d/ecloud180/images/blogImage/20201112110505347.png)

### 2.2 选择“应用程序权限(非用户登录)”类型的API

#### 2.2.1 手动配置API权限

1.点击“API权限”-“添加权限”-“Microsoft Graph”
![图片](http://122.9.159.116:5244/d/ecloud180/images/blogImage/2020061819283823-1653805879510121.png)
2.选择“应用程序权限”
![图片](http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200801120027971-1653805882870124.png)
3.根据编辑页面中列出的API权限需求表（注意在程序中切换为"**非登录**“）来勾选所对应的API权限，全部选择完成后点击"添加权限”。
![图片](http://122.9.159.116:5244/d/ecloud180/images/blogImage/20201102171349129.png)
![图片](http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200618172627969-1653805884862127.png)
添加完成的效果如图
**如果没有“代表XXX授予管理员同意”按钮 说明该账号不是管理员账号 换登管理员账号创建应用**
![图片](http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200801120623311-1653805887894132.png)
4.最后点击代表XXX授予管理员同意,对话框选择“是”（该图包含了当前程序“应用程序权限(非用户登录)”全部API所需要的权限）。
![图片](http://122.9.159.116:5244/d/ecloud180/images/blogImage/20200801120818260-1653805889622135.png)

#### 2.2.2 创建客户端密码

1.点击“证书密码”-“新客户端密码”-“24个月”-“添加”
![图片](http://122.9.159.116:5244/d/ecloud180/images/blogImage/20210609101116972-1653805890998138.png)
2.点击“值”该列中的“复制”（不要复制"ID"列中的值），并立即将该密码保存至电脑，**保存的值即为“客户端密码”**， 注：该值必须立即保存，退出该页面后将永远无法查看。
![图片](http://122.9.159.116:5244/d/ecloud180/images/blogImage/2020120711360840.jpeg)

## 3 将账号API调用托管至服务

##### 创建一个新的E5子账户(可选步骤)

登入E5管理员账户进入管理员界面，创建一个新的子账户，使用这个子账户登录程序调用API。
为什么建议这样做：Microsoft 365 E5 Renew中的部分API包含了写操作，例如邮件和Onedrive的API，这些API在随机模式下会生成大量垃圾邮件和文件（虽然单独为此设立了一个文件夹），部分人可能会对此行为非常介意，而且程序频繁的读写可能会对您正常使用账户造成影响，因此不建议使用管理员账户登录。

### 3.1 进入网站注册并登录账户

从一开始的可用站点，选择站点进入（记住无论使用任何人运营网站显示内容都是基本相同的）

从两种登录中任选一个，这里不建议选择GitHub登录（GitHub的第三方登录很迷经常性崩溃）

第一次登录账户系统会显示注册成功，然后再登录一次即可登录进入系统
![请添加图片描述](http://122.9.159.116:5244/d/ecloud180/images/blogImage/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAU3VuZGF5Ulg=,size_20,color_FFFFFF,t_70,g_se,x_16.png)

### 3.2 激活您的账户

阅读并同意用户协议，点击激活账户
![请添加图片描述](http://122.9.159.116:5244/d/ecloud180/images/blogImage/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAU3VuZGF5Ulg=,size_20,color_FFFFFF,t_70,g_se,x_16-1653805902079145.png)

### 3.3 添加一个E5账户的运行配置信息

在成功登录系统后，页面会自动跳转到“主页”页面，在“账户详情”页面点击“添加运行账号”按钮，前往“账户运行配置”页面
![请添加图片描述](http://122.9.159.116:5244/d/ecloud180/images/blogImage/2375b23f6de74f5e9d9ff37bca1e7dcc.png)

在账户运行配置页面中填写账户信息，且登录调用填写账户密码、非登录调用填写客户端密码，并选择自己选定的调用方式，注意调用方式不要选错了！！！ 最后点击“添加运行账号”按钮完成配置。
![请添加图片描述](http://122.9.159.116:5244/d/ecloud180/images/blogImage/eb5d982940a340719b4b5dbd1a46420c.png)
由于前后台数据同步需要时间，任何添加账户或者修改账户配置信息的操作都不会立即被后台执行。

返回用户页面查看账户信息中的“配置同步状态”，如果显示为“正在运行”表明配置已经上传至后台，修改账户配置成功。
**警示：配置成功了也要定期来看看自己的账户是否在正常运行（虽然有邮件通知服务），但也建议每月查看一次账户状态！！！**![请添加图片描述](http://122.9.159.116:5244/d/ecloud180/images/blogImage/3b2651537fee45088202efd02cad6d74.png)

### 3.4 设置一个通知邮箱（可选）

在任何页面下 点击右上角“用户名-账户设置”，进入个人信息设置
![请添加图片描述](http://122.9.159.116:5244/d/ecloud180/images/blogImage/8229363a593549bbb884960e65875673.png)
记住你的UID，出现任何问题请使用这个UID与你所选站点的管理员沟通
编辑你的邮箱 并点击保存
![请添加图片描述](http://122.9.159.116:5244/d/ecloud180/images/blogImage/fea87de6e5774a319c4b4a2e818d3341.png)

# 部署端**(请勿使用任何Cookie缓存加速服务)**

## 服务下载(作为站长务必注意查看**主站**中“**关于**”页面中的**程序发布时间**，及时更新服务程序)

### 传统方式

[**下载服务程序源文件（https://sundayrx.lanzoui.com/aW09Lsss75g）**](https://sundayrx.lanzoui.com/aW09Lsss75g)

[**参阅 Skyler的部署帮助文档（https://docs-1.leeskyler.top）**](https://docs-1.leeskyler.top/)
[**参阅 Gladtbam的部署帮助文档 （https://www.gladtbam.top/posts/37680）**](https://www.gladtbam.top/posts/37680/)

### Docker方式

[**参阅 韩韩的Docker版部署帮助文档（https://blog.csdn.net/qq_40605167/article/details/122888580）**](https://blog.csdn.net/qq_40605167/article/details/122888580)
[**参阅 Gladtbam的Docker版部署帮助文档（https://www.gladtbam.top/posts/22256/）**](https://www.gladtbam.top/posts/22256/)
[**参阅 Curious的部署帮助文档 （https://www.bilibili.com/read/cv16338214）**](https://www.bilibili.com/read/cv16338214)

## 传统方式服务部署

### 安装运行环境

*以下示例可能不完全包含全部操作系统，但无论是哪种系统都要安装 **Asp.Net Core 3.1 SDK**支持包，服务程序运行依赖于这个包也只依赖这一个包，只要成功安装了**Asp.Net Core 3.1 SDK**支持包，服务程序就可以正常运行！*
详情请参阅[在 Windows、Linux 和 macOS 上安装 .NET](https://docs.microsoft.com/zh-cn/dotnet/core/install/)

#### Windows

前往https://dotnet.microsoft.com/download/dotnet/3.1下载安装**最新的Asp.Net Core 3.1 SDK** 安装包

#### Ubuntu

详情请参阅[在 Ubuntu 上安装 .NET SDK 或 .NET 运行时](https://docs.microsoft.com/zh-cn/dotnet/core/install/linux-ubuntu)

**Ubuntu 21.04**

```bash
wget https://packages.microsoft.com/config/ubuntu/21.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb
123
sudo apt-get update; \
  sudo apt-get install -y apt-transport-https && \
  sudo apt-get update && \
  sudo apt-get install -y aspnetcore-runtime-3.1
1234
```

#### CentOS

详情请参阅[在 CentOS 上安装 .NET SDK 或 .NET 运行时](https://docs.microsoft.com/zh-cn/dotnet/core/install/linux-centos)

**CentOS 8**
`sudo dnf install dotnet-sdk-3.1`
**CentOS 7**
`sudo rpm -Uvh https://packages.microsoft.com/config/centos/7/packages-microsoft-prod.rpm`
`sudo yum install dotnet-sdk-3.1`

#### MacOS

前往https://dotnet.microsoft.com/download/dotnet/3.1下载安装**最新的Asp.Net Core 3.1 SDK** 安装包

### 填写配置信息

***站点拥有开放和私用两种模式，请根据自己的部署目的来选择对应的教程来阅读！\*
\*配置文件是Deploy/Config.xml 务必打开并修改默认的管理员登录密码\***

#### 开放站点

*开放站点必须使用全链路HTTPS，即便是使用了Nginx反向代理也必须设置HTTPS为启用状态*

**Configuration.ShareSite.Enable**设置为true

##### HTTPS SSL证书

###### 方式1：服务程序Kestrel—(HTTPS)—外部Internet

*准备一个PFX格式的SSL证书文件，放置在Deploy文件夹中*

**Configuration.HTTPS.Enable**设置为true
**Configuration.HTTPS.Certificate**设置为PFX文件的名称带后缀名
**Configuration.HTTPS.Password**设置为PFX文件的密码

###### 方式2：服务程序Kestrel—(HTTPS localhost)—Nginx/IIS/Apache—(HTTPS 外部访问域名)—外部Internet

*反向代理服务器部分请自行配置*

执行下列两个命令 以创建localhsot HTTPS证书 该证书时效为1年
`dotnet dev-certs https --clean`
`dotnet dev-certs https --trust`

**Configuration.HTTPS.Enable**设置为true
**Configuration.HTTPS.Certificate**设置为空（什么都不要填）
**Configuration.HTTPS.Password**设置为空（什么都不要填）

##### Microsoft OAuth

##### Github OAuth

##### SMTP邮件服务

*准备一个可以使用SMTP服务发信的邮箱*

**Configuration.ShareSite.SMTP.Email**设置为 发件人邮箱地址
**Configuration.ShareSite.SMTP.Password**设置为 邮箱密钥
**Configuration.ShareSite.SMTP.Host**设置为 发件人邮箱的SMTP服务器地址 (以Outlook为例子是smtp.office365.com)

#### 私用

*在私用模式下不用准备任何配置信息，填写好登录密码端口即可使用！*

##### 启用HTTPS（选配）

*若要启用HTTPS请在下面选择一种合适的方式来实现*

###### 方式1：服务程序Kestrel—(HTTPS)—外部Internet

*准备一个PFX格式的SSL证书文件，放置在Deploy文件夹中*

**Configuration.HTTPS.Enable**设置为true
**Configuration.HTTPS.Certificate**设置为PFX文件的名称带后缀名
**Configuration.HTTPS.Password**设置为PFX文件的密码

###### 方式2：服务程序Kestrel—(HTTP)—Nginx/IIS/Apache—(HTTPS 外部访问域名)—外部Internet

*反向代理服务器部分请自行配置*

**Configuration.HTTPS.Enable**设置为false

### 启动服务程序

在任何系统下，打开命令行定位到程序目录 运行`dotnet Microsoft365_E5_Renew_X.dll`命令即可启动

### 管理员登录

#### 非OAuth后台登录（开放或私享部署皆可用）

管理员登录路由 `/Admin/Login` 默认密码在配置文件Deploy/Config.xml中更改

#### OAuth认证登录（仅开放部署可用）

##### 设置管理员OAuth登录的OAuthID

使用想要关联的OAuth账号（Microsoft/Github）在任意站点登录/注册均可看到此账号的OAuthID,记录此ID

通过管理员密码登录自己的站点：管理员功能-用户列表 找到管理员账户 点击“编辑”按钮填写记录的OAuthID 保存

直接在主登录页面使用与管理员账户关联的OAuth账号登录即可
