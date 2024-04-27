---
author: xlc520
title: 白嫖Microsoft 365的E5
description: 
date: 2023-04-07
category: other
tag: 
- other
- E5
- Microsoft
article: true
timeline: true
icon: others
---

# 白嫖Microsoft 365的E5

## 文章概要

1、第一节，介绍免费注册E5管理员账号，试用期3个月。

2、第二节，介绍在Github网站上，注册一个具有 workflow权限的PAT密钥。

3、第三节，介绍如何把自动续期程序导入到自己的Github仓库中，并设置上面获取的PAT密钥、E5管理员账号、E5管理员密码，进行自动续期。

4、第四节，介绍执行失败的处理方法。

## 一、免费注册一个E5账户

**本节目的是注册一个****E5管理员账户、密码**，并且要牢记。

①首先打开下面网址,使用微软账户(没有的话注册一个)进行账户登陆。

https://developer.microsoft.com/zh-cn/microsoft-365/dev-program

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962122-1.png)

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962122-2.png)

②使用微软账户登录成功后，就开始注册E5账户了。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962122-3.png)

这里选择“供我公司内部使用的应用程序“，下一步。

![图片](data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1px' height='1px' viewBox='0 0 1
1' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:
xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3E%3C/title%3E%3Cg stroke='none' stroke-width='1' fill='none'
fill-rule='evenodd' fill-opacity='0'%3E%3Cg transform='translate(-249.000000, -126.000000)' fill='%23FFFFFF'%3E%3Crect
x='249' y='126' width='1' height='1'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E)

选择“可配置沙盒”，下一步。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962122-4.png)

这里的“用户名”和“域“，随意编一个，设置好“密码”，继续。由于密码比较复杂，建议用记事本记录一下，后面会用到。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962122-5.png)

使用电话号码验证一下。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962122-6.png)

至此一个E5的免费账户就注册完了，使用**管理员账户和密码**即可激活Microsoft 365，免费使用三个月。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962122-7.png)

③禁用安全默认值，后面自动续期时才不会失败，这一步是必须操作的。

打开Azure门户，使用E5管理员账户密码登录：

https://portal.azure.com

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962122-8.png)

点击“属性”。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962122-9.png)

点击“管理安全默认值”。把右侧的开关置于“否”，然后点击“保存”。

说明：这一步有很多人失败，是因为浏览器屏蔽广告的插件导致，如果失败的话，可以暂时把插件关闭。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962123-10.png)

在主页面再“保存”一下。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962123-11.png)

④下面作一些设置，不是必须操作的，可以略过。

***调整容量：*
*注册好的账户，默认只有1TB的空间，实际上最大赠送5TB。我们改一下设置即可。打开网址，点击“设置”，将下面的默认选项，设置为5120GB，点击“保存”。至此，刚刚获取的E5管理员账户就有5TB免费的空间了。*

*https://admin.onedrive.com/?v=StorageSettings*

*![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962123-12.png)*

***新建子账户：**一个E5账户的管理员账户，可以有25个子账户，免费的羊毛不薅白不薅？进入网址：https://www.office.com
，使用刚才注册的管理员账户和密码登录。点击左侧的“管理”。*

*![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962123-13.png)*

*点击“新增用户”。*

*![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962123-14.png)*

*随意设置一下子账户的基本信息。*

*![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962123-15.png)*

*选择“向用户分配产品许可证”，下一步。*

*![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962123-16.png)*

*![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962123-17.png)*

*![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962123-18.png)*

*![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962123-19.png)*

*至此，子账户设置完成。同理，可设置25个子账户。算上管理员账户，总共26个账户，都是可以激活Microsoft 365的。*

## 二、Github上创建“PAT密钥"

本节目的是获取一个具有workflow权限的**PAT密钥**。PAT是Github的个人访问令牌。需要有一个GitHub账号，没有的话先注册：

https://github.com

然后，进入以下地址：

https://github.com/settings/tokens/new

输入GitHub的登录密码:

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962123-20.png)

来到下面的页面，设置如下，注意务必勾选workflow。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962123-21.png)

点击“Generate token”。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962123-22.png)

然后就得到了PAT密钥，务必注意复制到记事本中备用，如果这里不记下来，再进此页面就看不到了。如果真的看不到了，可以删除再新建一个。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962124-23.png)

**至此，总共获取到了3个信息：E5管理员账号、\**E5管理员\**密码、PAT密钥。****务必牢记！*****\**
\*务必牢记！\*\*务必牢记！\*\*\*\*\****

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962124-25.png)

## 三、使用自动续期程序

本节的目的是将开源项目的源代码导入自己的Github仓库中，即复制一份。然后把E5管理员账户/密码、PAT密码信息，设置到仓库里面，以便程序自动执行续期功能。

### **①导入仓库**

打开项目地址：

https://github.com/vcheckzen/KeepAliveE5

点击右上角“+”→Import repository，即可一键导入！

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962124-26.png)

在下图的Your old repository’s clone URL中填写：

> https://github.com/vcheckzen/KeepAliveE5.git

自定义一个名称，我这里随便起了个名字：365E5

勾选“Private”，表示私人。最后点击“Begin import”。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962124-27.png)

至此源代码成功导入自己的Github仓库！

### **②设置仓库**

切换到上面创建的365E5仓库的“Settings”选项下，找到Secrets→Actions，点击New repository sectret。新建三条内容如下：

PAT的值为上文申请的PAT密钥；

USER的值为申请的E5管理员账号，支持多个，每行一个。

PASSWD的值为E5管理员账户密码，支持多个，每行一个。注意和USER值顺序一致。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962124-28.png)

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962124-29.png)

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962124-30.png)

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962124-31.png)

### **③最后的测试。**

在“Actions”选项中手动触发，看看代码是否执行成功，这里的Actions是一个虚拟环境，自动续期程序可以在里面自动执行。

注：如果找不到Actions选项，按下图开启。Settings→Actions→General→Allow all actions and reusable workflows→Save。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962124-32.png)

切换到Actions选项下，选择Register APP，然后点击Run workflow。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962124-33.png)

大约等待几分钟执行完毕。如果是绿色√，没有报错，表示执行成功。同样的方法，再执行一下Invoke
APP，有时候需要多执行几次才成功，不要慌~

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962124-35.png)

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962124-36.png)

## 四、执行失败的一些解决方法

有一些人执行自动续期时失败，提供几个解决方法如下：

### **解决方法①：**

如果失败，务必检查一下有没有严格按照上述步骤操作，看看有没有漏掉的步骤，很多失败案例都是操作有误。

### **解决方法②：**

把上文中仓库365E5删除后重新再来一遍**第三节****的流程**，直到运行成功为止。删库方法：切换到setting选项，拉到最下面，点击“Delete
this repository”。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962124-37.png)

### **解决方法③：**

上述方法仍然无效的话，导入仓库的方法换一种试试。上文采用的是Import repository一键导入，可以尝试手动导入。首先将源代码下载到本地（点击Code→Download
ZIP），

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962124-38.png)

新建一个仓库：点击右上角“+”，选择“New repository”，名称为“365E5”。然后勾选“Private”，按下图设置后，点击“Generate repository”。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962124-39.png)

我们可以看到，下图中仓库365E5是空的。点击branch，点击画笔，将名称main修改为master。因为源码中用的是master这个路径，如果不改，后面执行会失败。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962125-40.png)

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962125-41.png)

切换到“<>Code”选项下，点击Add files→Upload files，然后点击“choose your files”导入文件，但是会发现**文件夹**导不进来。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962125-42.png)

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962125-43.png)

由于GitHub只能导入文件，不能直接导入文件夹。那么我们就自己新建文件夹，然后把文件导入就好了。点击Add files→Create newfile

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962125-44.png)

我们在下图空格处首先输入**.github/**，然后输入**0**

这里的0其实代表了一个名为0的文件，主要为了继续下一步。等后面把真实文件导入后，删除即可。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962125-45.png)

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962125-46.png)

拉倒最下面点击“Commit new file”提交修改。这就相当于在365E5下面新建了一个名为“.github”的文件夹。

同样的道理，还要继续在.github文件夹下，新建一个名为workflows的文件夹。（首先输入**workflows/**，然后输入**0**）

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962125-47.png)

最后，切换到“<>Code”选项下，点击Add files→Upload files，然后点击下图的“choose your files”，把所有的文件导入文件即可。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962125-48.png)

总之，要确保把源码文件，按照原项目的目录层次全部导入。最后再次逐一核实是否全部都导入进来了，尤其是文件夹里面的文件，以免漏掉。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962125-49.png)

**我经过多次测试，手动导入仓库的方法，比直接采用Import repository一键导入，成功率要高。**

### **解决方法④：**

在365E5/.github/workflows/下的两个文件：register.yml、routine.yml。编辑一下这两个文件。只需在开头加一个注释，以#开头即可。保存后，再试试，有时也会成功~

**![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962126-50.png)**

**![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962126-51.png)**

### ***\*解决\**方法⑤：**

摆烂~如果上述方法都尝试了，还是不行，那就等一天再看看，没准自动就好了~我几个月前弄得，昨天报错了几次，什么也没操作，然后自动就好了。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962126-52.png)

## 最后

**通常会在3个月试用期的最后1个月，收到微软发送的续期成功的邮件，如下图所示****。***
*毕竟是白嫖，没人能保证永远可用，所以如果是很重要的文件不建议只存到onedrive中，一定要多做个备份，万一哪天不让用了呢。**

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1680871962126-53.png)