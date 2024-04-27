---
author: xlc520
title: Backblaze B2 + CloudFlare + 反代 + PicGO 实现快速免费图床
excerpt: 
description: 
date: 2023-08-01
category: other
tag: other
article: true
timeline: true
icon: others
---

# Backblaze B2 + CloudFlare + 反代 + PicGO 实现快速免费图床

## 前言

之前图床和静态文件一直使用的腾讯云 COS 老用户免费套餐，因为它是大陆的服务器，而且有免费额度。免费额度是一个月免费 10G
流量，免费额度如下：

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/202307022141303.webp)

随着流量的增大，外网下载流量很容易超标，虽然续费也不是很贵，但就是腾讯云的欠费天天会打电话就很烦，于是就为了减轻流量消耗，我打算使用静态数据和图片文件分开。

因为域名没有备案，很多大陆的对象存储都不能使用，于是就找到 Backblaze B2 + cloudflare 的组合。

## 简介

Backblaze B2 是一种云存储服务，它可以让你将无限的数据存储在云中，而且成本非常低廉。它与 Amazon S3 和 Microsoft
Azure 运作方式相似，但价格却是它们的 1/5。

Backblaze B2 有一个免费套餐，它可以让你享受以下优惠：

- **10GB 的存储容量**，足够您存放一些重要的文件或者媒体资料。
- **每天 1GB 的流量**，可以让您方便地上传和下载数据，或者通过网络浏览文件。
- **S3 兼容的 API**，可以让您轻松地将 Backblaze B2 集成到您的应用程序或者服务中。
- **支持多种工具和软件**，例如 Cloudflare CDN、Veeam 备份、NAS 设备等，可以让您提高数据的安全性、可用性和传输速度。

如果您超出了免费额度，Backblaze B2 也只会收取非常低的费用：

- **每月$0.005/GB**的存储费用，比 Amazon S3 和 Microsoft Azure 便宜 80%以上。
- **每月$0.01/GB**的下载费用，比 Amazon S3 和 Microsoft Azure 便宜 88%以上。

因此，无论您是想要建立应用程序、备份数据、或者存档媒体内容，Backblaze B2 都是一个非常合适的选择。它可以让您享受云存储的便利性和灵活性，同时节省您的开支。

最重要的是，Backblaze 和 Cloudflare 是 Bandwidth Alliance 的成员，**他们之间没有数据传输费用**
。而 cloudflare 的免费计划没有这意味着您可以节省大量的流量成本，而且不用担心超出免费额度。

**因为它的流量不要钱，于是拿来当做图床非常适合！**

## Backblaze + Cloudflare 配置

#### 准备

需要准备的东西如下：

- 一个 [Backblaze](https://link.zhihu.com/?target=https%3A//www.backblaze.com/) 账户（邮箱注册）
- 一个 [Cloudflare](https://www.cloudflare.com/) 账户（邮箱注册）
- 一个**良好**的**国际**互联网环境

#### 创建桶与添加解析

**创建桶**只需要下面简单的步骤即可：

- 首先，**登录**Backblaze 的网站，然后点击 My Account (个人账号信息)，点击进入。
- 然后，你会看到一个 Buckets 的选项，点击它，然后点击 Create a Bucket（创建一个桶）的按钮。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/202307032306243.webp)

- 接下来，你需要给你的存储桶起一个名字。为了保护你的文件的安全和隐私，最好不要使用一些常见或者有意义的单词作为存储桶的名字。
- 最后，你需要设置你的存储桶的公开性。如无特别情况，**选择 Public（公开）即可**，因为选择私有会有些权限问题比较麻烦。第一次设置
  public 可能需要验证邮箱。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/202307032344524.webp)

你已经成功创建了一个存储桶，接下来，你可以上传你想要存储和分享的文件到这个存储桶中，并且获取它们的访问地址。

接下来点击 upload/download（上载/下载），进入文件管理页面。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/202307032346072.webp)

你可以在这里上传你的文件用来看 URL，我这里上传了一个 logo 图片，用来找到桶的地址。例如：

找到**Friendly URL**，将里面的主机名记录下来，例如`f003.backblazeb2.com`

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/202307032348987.webp)

然后进入 cloudflare 管理页面，选择一个你的域名，在 DNS 中，添加一个你想要代替桶的域名的二级域名 CNAME 指向刚才的主机名，例如我这里用的是
file.xxx

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/202307032352994.webp)

至此就成功创建了桶和添加解析。

------

#### 调整与优化

###### SSL 优化

因为桶之间通信的完整性，需要更改 SSL 设置为严格(Full)。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/202307032353398.webp)

###### 重写 URL

因为桶名暴露在公共下比较危险，容易让别人滥用流量。于是可以通过 cloudflare 进行 URL 重写。**点击规则-转换规则-重写 URL**
，添加一个规则。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/202307032354524.webp)

我们需要添加的规则为：当路径为/file/bucket_name，且主机名为你刚才的二级域名时，重写。例如：

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/202307032357262.webp)

你可以直接使用可视化编辑器写成如图这样，或者直接点击下面的输入表达式添加如下表达式：

```stylus
http.request.uri.path ne "/file/{bucketName}" and http.host eq "{your_domain}"
```

然后在路径重写处，添加如下代码，注意修改你的 bucket_name。

```stylus
concat("/file/{bucketName}",http.request.uri.path)
```

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/202307032359659.webp)

这里的配置实现了 `{your_domain}/xxx.jpg` -> `Friendly domain/file/{bucketName}/xxx.jpg` 的转换，既不会暴露自己的桶名称，还缩短了
URL。

当然这里是直接在自己的域名后添加图片地址，你也可以自己定义你的转换规则。在重写那里自己添加自己规则。

------

###### 删除 HTTP 标头(optional)

图片在响应的时候可能会带有一些信息，为了不暴露自己的桶信息，我们可以选择删除一些无用的 HTTP 标头(HTTP Header)
。例如打开一个图片，在 F12 网络中查看 HTTP 响应头。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/202307040014609.webp)

这些**x-bz**开头的都是敏感信息，我们可以通过 cloudflare 删除它。

在**规则-转换规则-修改响应头**处，添加一个规则用于删除这些无用的信息。

名字同理随便填，然后选择**所有传入请求**。然后在修改相应的头处，添加刚才抓到那些相应头，如图：

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/202307040021921.webp)

## 反代配置

因为 cloudflare 在中国大陆的访问速度非常慢，可以考虑通过使用 cdn 或者比较快速的服务器进行反代。这里演示使用 CacheFly 的免费
CDN 反代图床地址。

CacheFly 是一家内容交付网络(CDN) 提供商，总部位于伊利诺伊州芝加哥。它的免费 CDN 套餐提供了 1G 免费流量额度，但是在达到 5T
之前续费都是 0 元。它在大陆的访问速度还挺不错，是个不错的选择。

先注册一个账号，注册地址：<https://portal.cachefly.com/signup/free2023> 填写账号，邮箱，密码，还有信用卡验证信息。

注意这里的信用卡验证信息不会验证，所以可以使用虚拟卡注册，下来列出了一些虚拟卡：

点击这里展开虚拟卡信息 ==> [展开 / 收起](javascript:void(0))

例如（图非本人测试）：

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/202307040052690.webp)

最后，验证邮箱，完成账号注册！

然后在控制面板中的**Configuration - Services**找到你的服务点进去。然后会出现一个没有配置的提醒，我们点击进行配置。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/202307040055900.webp)

填写要加速的域名网址，这里可以填写刚才的在 cloudflare 里添加的二级域名。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/202307040101329.webp)

添加要使用的域名！如果你没有域名或者不想使用自己的域名，这里可以选择跳过，使用平台提供的域名 `username.cachefly.net`
。这里演示使用域名 file.hoyue.fun

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/202307040105466.webp)

域名添加证书，CacheFly 的缺点是不提供免费的证书，所以需要你自己传一个证书传上去，你可以去 zerossl 等免费证书签一个上传即可。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/202307040108947.webp)

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/202307040108140.webp)

最后到你的域名平台上，做一个 CNAME 到平台提供的域名（xxx.cachefly.net）上即可！

注意：证书生效时间比较慢，需要等待一会。

这样我们就添加了 CacheFly 作为 CDN 反代了，既能加速图床文件，又可以隐藏关键信息。下面是一张图片的速度测试：

itdog 速度测试：

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/202307040115752.webp)

大部分地区还是挺绿的，速度还不错。

## PicGO 配置

Picgo 是一个开源的图片上传工具，它可以让你方便地将图片上传到各种图床服务，包括 Backblaze B2（有 s3 插件支持）。Picgo 支持
Windows、MacOS 和 Linux 系统，它有一个简洁的界面和丰富的插件。你可以通过快捷键、拖拽、剪贴板等方式上传图片，也可以对图片进行压缩、裁剪、水印等处理。Picgo
还可以自动生成图片的 URL 和 Markdown 代码，方便你在网上引用图片。

Backblaze B2 可以通过 PicGO，快速上传并且生成外链以及代码，大大加速我们的使用。这里展示如何配置 PicGO 上传到自己桶里。

PicGO 的下载地址：<https://github.com/Molunerfinn/PicGo/releases>

安装好，并安装 S3 的插件，这些已经有很多资料了，可以去网上搜索。

在配置页面，配置名随便填；

然后密钥 ID 和密钥我们需要回到 Backblaze 的控制面板，找到左侧的 Application Keys，然后拉下来添加一个新 key，产生的值填回去就可以了。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/202307040131637.webp)

文件路径需要填写到具体的文件，即你上传的图片文件到什么路径的什么文件名。例如：`{year}/{month}/{md5}.{extName}`
就是路径为年/月/md5.type 的形式，具体组合可以参考：

|   payload    |      描述       |
|:------------:|:-------------:|
|   `{year}`   |   当前日期 - 年    |
|  `{month}`   |   当前日期 - 月    |
|   `{day}`    |   当前日期 - 日    |
| `{fullName}` |  完整文件名（含扩展名）  |
| `{fileName}` |  文件名（不含扩展名）   |
| `{extName}`  |  扩展名（不含`.`）   |
|   `{md5}`    |  图片 MD5 计算值   |
|   `{sha1}`   |  图片 SHA1 计算值  |
|  `{sha256}`  | 图片 SHA256 计算值 |

权限，一般是 public-read，因为桶设置的是 public。

接下来就是地区，这个需要参考你 Backblaze
B2 桶中的 Endpoint 地址，地址中的域名二级字段就是地址，例如`s3.us-west-003.backblazeb2.com`，那么地区就填写`us-west-003`。

你还可以填写自定义域名，例如填写刚才 CacheFly 中添加的加速域名。其他设置不变，这样配置就完成了。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/202307040141750.webp)

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/202307040142249.webp)

配置完成了，如果是 Mac 系统还可以使用 DropShare 工具，支持直接链接 Backblaze B2。

## 后记

这篇文章记录了使用 Backblaze B2 + CloudFlare + 反代 + PicGO 实现快速免费图床的过程，希望能帮助到有需要的人。

References:
