# 申请加入 微软Office 365 E5 开发人员计划

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