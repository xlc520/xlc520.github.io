---
title: 基于Cloudflare R2搭建图床
excerpt:
description: 基于Cloudflare R2搭建图床
date: 2024-08-10
category: other
tag: other
author: xlc520
article: true
timeline: true
icon: others
---

```component VPBanner
title: 基于Cloudflare R2搭建图床
content: 基于Cloudflare R2搭建图床
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: 基于Cloudflare R2搭建图床
    link: /other/基于Cloudflare R2搭建图床
```

# 基于Cloudflare R2搭建图床

R2。这是一款兼容 S3 API
的免费云存储服务，它允许用户在全球范围内的分布式网络上存储和检索数据。R2以“零流量费用对象存储”为卖点，宣称是对象存储最便宜的选择。相比其他云存储服务，R2在数据访问时不计算流量费用，仅根据存储总量和操作次数计费。你就说墙内哪家云厂商敢这么干吧！

另外R2的存储网络横跨100多个国家中的275个城市，利用Cloudflare庞大的内容交付网络（CDN）实现数据的全球分发和快速访问。同时还可以与Cloudflare
Workers原生集成，允许用户轻松执行身份验证、路由请求，并在Cloudflare的边缘网络上部署边缘函数。

## 🦄 免费套餐

按照CF官网的介绍，每个CF账号都可以免费使用R2服务，当然免费是有些限制的，每月10GB以内存储免费，另带每月100W次A类操作和每月1000W次B类操作。A类操作主要是写操作，B类型主要就是读取操作，我们日常访问R2里面的内容就是B类，1000W对于个人日常使用完全足够了，另外还可以配合CF的缓存，使用量会更少！
![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1723299227987-0.webp)

## 🦌 操作方法

使用R2的前提是你得先注册好CF账号（选择Free套餐就行），并且最好在CF上解析一个自己的域名。

### 1️⃣ 创建存储桶

在左边菜单中找到`R2`，打开概述，点击右上角的`创建存储桶`
![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1723299227987-1.webp)

> 填写存储桶的名称，选择存储桶的位置（建议放在访问量最多的区域，比如你的用户在美丽国比较多，就选北美洲），默认存储类直接选标准就行。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1723299227987-2.webp)

### 2️⃣ 设置存储桶

> 创建完以后回到概述页面，打开刚刚创建好的桶，点击`设置`。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1723299227987-3.webp)

> 往下拉，找到`公开访问`板块，点击`连接域`，我们给这个桶套一个自己的域名。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1723299227987-4.webp)

> 输入你自己的二级域名，比如`imghub.yourdomain.com`，点`继续`按钮。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1723299227987-5.webp)

> 等待片刻后，CF就会自动在DNS的记录中增加一个类型为R2的解析记录，这是CF自己内部专属的，可以不用管他，总之现在就可以使用这个域名访问你在R2中存储的图片了。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1723299227987-6.webp)

### 3️⃣ 设置缓存

R2每月有1000W免费读取次数，如果你不放心，可以再增加一层缓存，既可以减少回源读取次数，又能加速访问速度，一箭双雕！CF每个域名支持免费设置10条缓存规则，一般来说都够用了，稍微使用点技巧也用不了几条。

> 在菜单中找到`缓存`，打开`Cache Rule`，点击`创建规则`。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1723299227987-7.webp)

> 输入规则名称（随意），设置匹配规则，这里我们直接设置为主机名是你上文设置的那个域名即可。当然匹配规则还有很多其他的维度可以选，支持等于、包含、开头、结尾等运算符，按自己实际要走CDN的资源设置即可。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1723299227987-8.webp)

> 继续往下拉，在缓存资格中选择`符合缓存条件`；在边缘TTL种点击`添加设置`，然后选择`忽略缓存控制标头，使用次TTL`
> ，然后在`输入生存时间(TTL)`中选择一个时间，免费账号支持最短2小时、最长1年，最为图床的话建议越大越好，尽量减少回源，也就是减少R2存储桶的B类操作次数。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1723299227988-9.webp)

> 最后拉到页面最底部，点击`部署`，等待30秒即可生效，从此你的图床就是跑在CDN上面了。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1723299227988-10.webp)

### 4️⃣ 上传图片

笔者说搭建图床，当然指的是在R2中管理图片，但并不是说R2中只能存储图片，这个并没什么限制，希望不要误解。

现在图床搭建好了，该怎么传图片上去呢？文章开头提到，R2是一个兼容S3的云存储服务，我们可以直接使用现有的支持S3的工具上传即可；当然，如果你不嫌麻烦，也可以直接在R2的存储桶界面上传。
![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1723299227988-11.webp)

#### 使用PicGO上传

> 在存储桶的设置界面，查看桶所在的位置，比如亚太地区就是`APAC`，记录下来后门会用到。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1723299227988-12.webp)

> 在账号ID下面有个`管理R2 API令牌`按钮，点击去，然后点击`创建API令牌`。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1723299227988-13.webp)

> 在创建页面输入令牌名称，权限选择`对象读和写`即可，其他的保持默认，最后确认创建。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1723299227988-14.webp)

> 然后就会在页面上显示这个令牌的相关信息，注意令牌值、访问密钥 ID和机密访问密钥只会显示一次，关闭这个页面以后就看不到了，建议单独记录下来，并且不要把这些分享给其他人！

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1723299227988-15.webp)

> 接着在PicGO的插件设置中搜索`S3`，安装S3插件

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1723299227988-16.webp)

> 插件安装完成后，开始配置了。分别填写应用密钥ID、应用密钥、桶名、文件路径、自定义域名，其他的可以不填或者按自己实际情况填。设置完成后就可以正常上传图片了。

字段的对应关系如下表：

| 插件字段   | CF字段或含义             |
|--------|---------------------|
| 应用密钥ID | 访问密钥ID              |
| 应用密钥   | 机密访问密钥              |
| 桶名     | R2存储桶名称             |
| 文件路径   | 保持默认或自己定义           |
| 自定义域名  | 你的R2默认域名或上文设置的自定义域名 |

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1723299227989-17.webp)

以上是使用PicGO上传图片到R2的简单介绍，如果你使用其他S3兼容的工具，基本都差不多，笔者也没接触过太多，就不再展开了，关于基于R2搭建图床的教程就介绍到这里。




<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
