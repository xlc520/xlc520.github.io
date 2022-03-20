---
author: xlc520
title: 微软Office 365 E5 开发人员计划
description: 申请加入微软Office 365 E5 开发人员计划
date: 2022-01-17
category: other
tag: other
article: true
timeline: true
icon: 
password: 
---
# 申请加入微软Office 365 E5 开发人员计划

# 前言

最近闲来无事，申请了个Office E5订阅，对我而言有用的是5T OneDrive（可扩容25T）

订阅有效期90天，证明是开发者即可续订。一共可以开25个子号。

至于证明是开发者，只要触发了OneDrive的API就可以证明是开发者了，当然不仅限于OneDrive，还算是比较简单的。

# 申请过程

Office开发人员中心链接：[https://developer.microsoft.com/zh-cn/office/dev-program](https://haoduck.com/go.html?url=https://developer.microsoft.com/zh-cn/office/dev-program)

打开链接就是大大的 **立即加入** 几个大字 （注：此过程也许国内网络访问并不友好）

![【记录】申请加入 微软Office 365 E5 开发人员计划](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/officee5_01.jpg)

点 **立即加入** 就弹出填写信息的界面，如果你没有登录账号，就会让你登录。

填写信息正常填即可

![【记录】申请加入 微软Office 365 E5 开发人员计划](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/officee5_02.jpg)

![【记录】申请加入 微软Office 365 E5 开发人员计划](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/officee5_03.jpg)

![【记录】申请加入 微软Office 365 E5 开发人员计划](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/officee5_04.jpg)

![【记录】申请加入 微软Office 365 E5 开发人员计划](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/officee5_05.jpg)

到这里就OK了，可以订阅我们需要的 **E5** 了

点击 **设置订阅**

填写你要设置的开发者账号的账号和密码

账号是一个邮箱的形式，用户名可以随意，域需要唯一

![【记录】申请加入 微软Office 365 E5 开发人员计划](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/officee5_06.jpg)

![【记录】申请加入 微软Office 365 E5 开发人员计划](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/officee5_07.jpg)

填好后点 **继续** 就完成了，成功订阅了E5。

![【记录】申请加入 微软Office 365 E5 开发人员计划](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/officee5_08.jpg)

# 管理E5订阅

管理地址：[https://portal.office.com/AdminPortal/Home](https://haoduck.com/go.html?url=https://portal.office.com/AdminPortal/Home)

需要用你后面填的开发者账号登录

# 修改OneDrive容量

### 修改默认容量

[https://admin.onedrive.com/?v=StorageSettings](https://haoduck.com/go.html?url=https://admin.onedrive.com/?v=StorageSettings)

登录后将1024G改为5120G即可

注：此项设置需要一定时间生效。

### 修改已有账号的容量

需要用到 **PowerShell**

下次再说

# 扩容25T

### 扩容条件

- 有超过5个订阅的用户（即子号）
- OneDrive 网盘使用量超过90%，子号亦可

### 提交扩容工单

登录后台-支持-提交工单
阐明你的使用量以及扩容的需求，等一段时间以后应该会收到技术人员会的电话，告诉你已经反馈到后台，让你等待大概1天即可升级完成。
工单例：

标题：申请扩容OneDrive
内容：你好！请帮我把admin@yaohuo.onmicrosoft.com的OneDrive的容量扩容到25T。谢谢！
附件：截你的OneDrive使用量将满的图

# 其他

OneList——简单好用的OneDrive目录浏览程序：[https://blog.haoduck.com/302.html](https://haoduck.com/go.html?url=https://blog.haoduck.com/302.html)

Demo：[https://disk.gs](https://haoduck.com/go.html?url=https://disk.gs)



# 通过Docker部署Office E5开发者订阅续期脚本实现自动续期

首先你要有一个Office E5开发者订阅，如果没有，你可以参考这篇文章申请一个。https://haoduck.com/305.html

其他基础的问题就不多说了，直接开始

## 一、注册Azure应用

记得是用订阅下的子账号申请，也就是默认域名为`@xxxx.onmicrosoft.com`的账号。

登录Azure,[https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps](https://haoduck.com/go.html?url=https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps)

注册azure应用,确保应用有以下权限:
`files: Files.Read.All、Files.ReadWrite.All、Sites.Read.All、Sites.ReadWrite.All`
`user:User.Read.All、User.ReadWrite.All、Directory.Read.All、Directory.ReadWrite.All`
`mail: Mail.Read、Mail.ReadWrite、MailboxSettings.Read、MailboxSettings.ReadWrite`

重定向URL写`http://localhost`即可，如果你还需要用其他Onedrive列表程序，可以把它们的重定向URL都写上去，比如这些。https://haoduck.com/578.html
注册后一定要再点代表xxx授予管理员同意,否则outlook api无法调用

## 二、安装Rclone和获取`refresh_token`

Rclone官网下载地址：[https://rclone.org/downloads/](https://haoduck.com/go.html?url=https://rclone.org/downloads/)

Linux下可以直接用官方一键脚本`curl https://rclone.org/install.sh | sudo bash`

怎么安装就不多说了，直接到配置这一块

配置`Onedrive`，其实也没什么好说的，就不上图了

到最后一步完成了，就能看到`refresh_token`了，是`0.A`开头的一长串，注意不要复制多了，也不要复制少了。

## 三、使用Docker镜像

```
docker run -dit --name e5renew --restart always \-e id="你的id" \-e secret="你的secret" \-e refresh_token="你的refresh_token" \haoduck/e5renew
```

平均每隔6小时调用API一次，这个6小时不是固定的，随机范围在十几分钟到2个多小时

## 三、一键脚本

```
bash <(curl -sL https://raw.githubusercontent.com/haoduck/E5Renew/main/onekey.sh)`
或
`bash <(curl -sL https://cdn.jsdelivr.net/gh/haoduck/E5Renew@main/onekey.sh)
```

## 四、查看运行日志

Docker的运行日志`docker logs e5renew`

脚本的定时日志(等下次运行了才会有)`docker exec e5renew cat /work/crontab.log`

其中，`docker logs e5renew`里的`e5renew`是容器名，如果你有自定义容器名，对应修改命令。查看定时日志的命令同理。

## 其他

代码来源是在Github已经删掉的AutoApi项目













Microsoft 365 E5 Renew X
Microsoft 365 E5 Renew X是一款网页版的E5续订服务，其依赖网页浏览器呈现支持用户多端操作，完全将E5账户API调用托管在了服务器端因此用户无需电脑也可使用。

Microsoft 365 E5 Renew X 由来
Microsoft 365 E5 Renew X为Microsoft 365 E5 Web的升级版，相对于旧版其增强了管理功能且更容易部署，API调用内核继承于续订桌面版软件Microsoft 365 E5 Renew Plus。

主要功能
用户端
两种可选的调用权限：用户未登录作为守护程序调用(需要客户端密码)、程序以登录用户身份直接调用(需要账户密码)
API种类齐全：41/30个可选的Microsoft Graph REST API Beta中的API(未来可能会继续添加)
完全随机的API调用模式：从已选定的API序列中随机抽取一个或几个进行调用（个数和API随机）
完全随机的API调用时间间隔：随机区段1000s-2000s固定
完全随机的API内容(仅部分API支持)：发送邮件的内容随机 Onedirve上传文件的内容随机
邮件通知服务：支持设置通知邮箱，调用异常会通过邮件通知无需反复登录查看
部署端
平台兼容性：使用Asp.Net Core 作为跨平台框架增适用于 Windows|Linux|MacOS x64|x86|ARM64|ARM
灵活部署：支持开放站点部署和私享部署，私享部署不再强制要求配置Https和OAuth
无需数据库：不需要后台数据库支持，前后台一体化程序
用户后台管理：可修改用户的E5账户数量，以及封删管理
系统状态监视：系统占用率一目了然，可控的站点注册通道更容易控制系统用户数量
自定义页面：支持自定义HTML静态页面，可设置支付宝、微信收款码
显示ICP备案：支持ICP备案文字显示，可在国内备案建站
无人值守 运行自动暂停：可自动暂停有错误率过高的账号API调用
无人值守 自动恢复运行：可定期自动恢复全部账号的API调用，防止因微软网络原因触发大量账号停止API调用进而导致的账号续期失败
用户端使用教程(请勿开启账号的双重验证功能)
可用站点
主站
主站：https://e5.sundayrx.net（由 SundayRX 运营）(可登录不可注册)

分站：https://ms-e5-renew.leeskyler.top:11015（由 leeskyler 运营）(已关停)

分站：https://ms-e5-renew-3.eastern.moe（由 leeskyler 运营）(已关停)

自建共享站点
自建共享站：https://ew.chirmyram.com（由 七米蓝 运营）(可登录不可注册)

自建共享站：https://e5.hm0420.cc（由 小冰酱 运营）

自建共享站：https://ms-e5.hm0420.cc（由 小冰酱 运营）

自建共享站：https://e5.xzh.wtf（由 XZH 运营）

自建共享站：https://e5.tianli0.top（由 Tinali 运营）

自建共享站：https://renew.lrize.xyz（由 Lrize、 运营）

1 注册Azure应用程序
1.1 应用注册
点击登录 Azure或点击直接进入Azure应用注册，登录账号使用申请到的Microsoft 365 E5的管理员账户（账户名类似XXXX@YYYY.onmicrosoft.com格式）。
2.登录完成后点击右上角的“门户”按钮进入Azure管理中心，在搜索栏内输入“应用注册”，点击进入（若应用注册搜索不到请点击此处直接进入）。

3.单击“新注册”按钮

4.配置应用 应用名称随意写、注意可访问性选项选择最后一项、重定向URL暂时不填 、完成后点击注册

1.2 配置应用重定向URL（身份验证）
1.先点击“概述”，然后点击“添加重定向URL”，进入重定向URL配置界面，下图中的应用程序(客户端)ID即为"客户端ID"。

2.点击“添加平台”，再点击“移动和桌面应用程序”，

3.继续勾选中第一个URL，最后点击底部的“配置”，该URL为“https://login.microsoftonline.com/common/oauth2/nativeclient”也可手动添加。

4.配置默认客户端类型将应用程序视为公共客户端 点击切换按钮为“是” ，最后点击“保存”按钮保存。


2 配置应用程序的API权限（重要）
小白提示：建议选择“委托的权限(用户登录)”该权限类型，调用API较多，操作步骤较少简单粗暴，调用成功几率高

注册的应用程序API权限类型有两种，其主要区别如下表所示：

权限类型	委托的权限(用户登录)	应用程序权限(非用户登录)
官方释义	应用程序必须以登录用户身份访问API	应用程序在用户未登录的情况下作为后台服务或守护程序运行
需要的信息	账户名称+账户密码+应用程序(客户端)ID	账户名称+客户端机密+应用程序(客户端)ID
功能影响	程序中所有API均可调用	部分API权限受限无法调用(官方限制)
API权限配置	可由PC版程序自动配置添加API权限	必须手动配置API权限
显示颜色标识	蓝色	深青色
以下是登录或非登录所需要的权限列表：


最后根据所选的API权限类型在：2.1 选择“委托的权限(用户登录)”类型的API或者2.2 选择“应用程序权限(非用户登录)”类型的API中选择性阅读。

2.1 选择“委托的权限(用户登录)”类型的API
手动配置API权限
1.点击“API权限”-“添加权限”-“Microsoft Graph”

2.选择“委托的权限”
3.根据编辑页面中列出的API权限需求表（注意在程序中切换为"登录"）来勾选所对应的API权限，全部选择完成后点击"添加权限"。


添加完成的效果如图
如果没有“代表XXX授予管理员同意”按钮 说明该账号不是管理员账号 换登管理员账号创建应用


4.最后点击代表XXX授予管理员同意,对话框选择“是”（该图包含了当前程序“委托的权限(用户登录)”全部API所需要的权限）。



2.2 选择“应用程序权限(非用户登录)”类型的API
2.2.1 手动配置API权限
1.点击“API权限”-“添加权限”-“Microsoft Graph”

2.选择“应用程序权限”

3.根据编辑页面中列出的API权限需求表（注意在程序中切换为"非登录"）来勾选所对应的API权限，全部选择完成后点击"添加权限"。


添加完成的效果如图
如果没有“代表XXX授予管理员同意”按钮 说明该账号不是管理员账号 换登管理员账号创建应用

4.最后点击代表XXX授予管理员同意,对话框选择“是”（该图包含了当前程序“应用程序权限(非用户登录)”全部API所需要的权限）。


2.2.2 创建客户端密码
1.点击“证书密码”-“新客户端密码”-“24个月”-“添加”

2.点击“值”该列中的“复制”（不要复制"ID"列中的值），并立即将该密码保存至电脑，保存的值即为“客户端密码”， 注：该值必须立即保存，退出该页面后将永远无法查看。


3 将账号API调用托管至服务
创建一个新的E5子账户(可选步骤)
登入E5管理员账户进入管理员界面，创建一个新的子账户，使用这个子账户登录程序调用API。
为什么建议这样做：Microsoft 365 E5 Renew中的部分API包含了写操作，例如邮件和Onedrive的API，这些API在随机模式下会生成大量垃圾邮件和文件（虽然单独为此设立了一个文件夹），部分人可能会对此行为非常介意，而且程序频繁的读写可能会对您正常使用账户造成影响，因此不建议使用管理员账户登录。

3.1 进入网站注册并登录账户
从一开始的可用站点，选择站点进入（记住无论使用任何人运营网站显示内容都是基本相同的）

从两种登录中任选一个，这里不建议选择GitHub登录（GitHub的第三方登录很迷经常性崩溃）

第一次登录账户系统会显示注册成功，然后再登录一次即可登录进入系统


3.2 激活您的账户
阅读并同意用户协议，点击激活账户


3.3 添加一个E5账户的运行配置信息
在成功登录系统后，页面会自动跳转到“主页”页面，在“账户详情”页面点击“添加运行账号”按钮，前往“账户运行配置”页面


在账户运行配置页面中填写账户信息，且登录调用填写账户密码、非登录调用填写客户端密码，并选择自己选定的调用方式，注意调用方式不要选错了！！！ 最后点击“添加运行账号”按钮完成配置。

由于前后台数据同步需要时间，任何添加账户或者修改账户配置信息的操作都不会立即被后台执行。

返回用户页面查看账户信息中的“配置同步状态”，如果显示为“正在运行”表明配置已经上传至后台，修改账户配置成功。
警示：配置成功了也要定期来看看自己的账户是否在正常运行（虽然有邮件通知服务），但也建议每月查看一次账户状态！！！

3.4 设置一个通知邮箱（可选）
在任何页面下 点击右上角“用户名-账户设置”，进入个人信息设置

记住你的UID，出现任何问题请使用这个UID与你所选站点的管理员沟通
编辑你的邮箱 并点击保存


部署端(请勿使用任何Cookie缓存加速服务)
服务下载(作为站长务必注意查看主站中“关于”页面中的程序发布时间，及时更新服务程序)
传统方式
下载服务程序源文件（https://sundayrx.lanzoui.com/aW09Lsss75g）

参阅 Skyler的部署帮助文档（https://docs-1.leeskyler.top）
参阅 Gladtbam的部署帮助文档 （https://www.gladtbam.top/posts/37680）

Docker方式
参阅 韩韩的Docker版部署帮助文档（https://blog.csdn.net/qq_40605167/article/details/122888580）

传统方式服务部署
安装运行环境
以下示例可能不完全包含全部操作系统，但无论是哪种系统都要安装 Asp.Net Core 3.1 SDK支持包，服务程序运行依赖于这个包也只依赖这一个包，只要成功安装了Asp.Net Core 3.1 SDK支持包，服务程序就可以正常运行！
详情请参阅在 Windows、Linux 和 macOS 上安装 .NET

Windows
前往https://dotnet.microsoft.com/download/dotnet/3.1下载安装最新的Asp.Net Core 3.1 SDK 安装包

Ubuntu
详情请参阅在 Ubuntu 上安装 .NET SDK 或 .NET 运行时

CentOS
详情请参阅在 CentOS 上安装 .NET SDK 或 .NET 运行时

CentOS 8
sudo dnf install dotnet-sdk-3.1
CentOS 7
sudo rpm -Uvh https://packages.microsoft.com/config/centos/7/packages-microsoft-prod.rpm
sudo yum install dotnet-sdk-3.1

MacOS
前往https://dotnet.microsoft.com/download/dotnet/3.1下载安装最新的Asp.Net Core 3.1 SDK 安装包

填写配置信息
站点拥有开放和私用两种模式，请根据自己的部署目的来选择对应的教程来阅读！
配置文件是Deploy/Config.xml 务必打开并修改默认的管理员登录密码

开放站点
开放站点必须使用全链路HTTPS，即便是使用了Nginx反向代理也必须设置HTTPS为启用状态

Configuration.ShareSite.Enable设置为true

HTTPS SSL证书
方式1：服务程序Kestrel—(HTTPS)—外部Internet
准备一个PFX格式的SSL证书文件，放置在Deploy文件夹中

Configuration.HTTPS.Enable设置为true
Configuration.HTTPS.Certificate设置为PFX文件的名称带后缀名
Configuration.HTTPS.Password设置为PFX文件的密码

方式2：服务程序Kestrel—(HTTPS localhost)—Nginx/IIS/Apache—(HTTPS 外部访问域名)—外部Internet
反向代理服务器部分请自行配置

执行下列两个命令 以创建localhsot HTTPS证书 该证书时效为1年
dotnet dev-certs https --clean
dotnet dev-certs https --trust

Configuration.HTTPS.Enable设置为true
Configuration.HTTPS.Certificate设置为空（什么都不要填）
Configuration.HTTPS.Password设置为空（什么都不要填）

Microsoft OAuth
Github OAuth
SMTP邮件服务
准备一个可以使用SMTP服务发信的邮箱

Configuration.ShareSite.SMTP.Email设置为 发件人邮箱地址
Configuration.ShareSite.SMTP.Password设置为 邮箱密钥
Configuration.ShareSite.SMTP.Host设置为 发件人邮箱的SMTP服务器地址 (以Outlook为例子是smtp.office365.com)

私用
在私用模式下不用准备任何配置信息，填写好登录密码端口即可使用！

启用HTTPS（选配）
若要启用HTTPS请在下面选择一种合适的方式来实现

方式1：服务程序Kestrel—(HTTPS)—外部Internet
准备一个PFX格式的SSL证书文件，放置在Deploy文件夹中

Configuration.HTTPS.Enable设置为true
Configuration.HTTPS.Certificate设置为PFX文件的名称带后缀名
Configuration.HTTPS.Password设置为PFX文件的密码

方式2：服务程序Kestrel—(HTTP)—Nginx/IIS/Apache—(HTTPS 外部访问域名)—外部Internet
反向代理服务器部分请自行配置

Configuration.HTTPS.Enable设置为false

启动服务程序
在任何系统下，打开命令行定位到程序目录 运行dotnet Microsoft365_E5_Renew_X.dll命令即可启动

管理员登录
非OAuth后台登录（开放或私享部署皆可用）
管理员登录路由 /Admin/Login 默认密码在配置文件Deploy/Config.xml中更改

OAuth认证登录（仅开放部署可用）
设置管理员OAuth登录的OAuthID
使用想要关联的OAuth账号（Microsoft/Github）在任意站点登录/注册均可看到此账号的OAuthID,记录此ID

通过管理员密码登录自己的站点：管理员功能-用户列表 找到管理员账户 点击“编辑”按钮填写记录的OAuthID 保存

直接在主登录页面使用与管理员账户关联的OAuth账号登录即可