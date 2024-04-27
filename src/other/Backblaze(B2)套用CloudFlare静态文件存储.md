---
author: xlc520
title: Backblaze(B2)套用CloudFlare静态文件存储
description: 
date: 2022-10-10
category: other
tag: 
- other
- CloudFlare
article: true
timeline: true
icon: others
---

# Backblaze(B2)套用CloudFlare静态文件存储

## 官方网址

https://www.backblaze.com

## 免费额度

存储容量：10GB

网络流量：1GB/天

上传流量：无限

下载请求数：**2500**次/天

上传请求数：**2500**次/天

BUCKET(桶)：100个

BUCKET(桶)文件数：无限

超出了额度，收费$0.005 per GB per month for additional storage beyond 10 GB 和 $0.01 per GB beyond the free daily 1 GB.

这点流量能干点啥？

不过Backblaze加入了CloudFlare的 带宽联盟（ Bandwidth Alliance） ，所以Backblaze与CloudFlare之间的流量直接免费，也就是每天*
*无限量**下行流量。

配上CloudFlare配置缓存时间更久一些，辣么下载请求无限次免费啦。看看联盟有没有你熟悉的LOGO？

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/c57394926b319339.png)

## 注册账号

https://www.backblaze.com/b2/sign-up.html

填写邮箱，密码即可注册。

登陆平台 - My Account - 我的设置 - 验证Email

**提醒一下，界面右下角可以切换到简体中文**

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/6aa0b5180f158c7a.png)

## 创建BUCKET

1）登陆平台 - 创作一个桶

名称随意，桶里面的档案选择公众，其他保持默认即可

**特别提醒：桶名称要复杂一些，小心被刷流量！建议生成UUID**

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/6bcae128a5aae3f2.png)

2）创建成功后 点击 【上载/下载】可以去上传一个文件！

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/d059f7012f8e6c7f.png)

3）上传成功后，单机文件可以看见文件详情内容

特别要记住友好URL中的域名，如图是 **f004.backblazeb2.com**

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/5080cc13667c7a8b.png)

## 配置CF

### 解析域名

1）登陆Cloudflare，添加一个域名。定义一个前缀CNAME到 **f004.backblazeb2.com**

**没有域名？参考文章：[人人都可申请拥有EU.org免费域名](https://51.ruyo.net/17863.html)**

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/f7fe01ec953be195.png)

2）解析完成后，浏览器打开地址 https://b2.i0lo1o.eu.org/file/ruyonet123/default.png

格式 `https://域名/file/桶名称/文件名`

经过一波骚操作，访问URL提示：Error 522 错误？？

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/d8f4f762cf8bb6a5.png)

错误原因

Cloudflare 通过纯 HTTP 而不是 HTTPS 访问上游服务器。

但是Backblaze 仅支持安全的 HTTPS 连接，因此 HTTP 请求失败。

为了解决这个问题，在 Cloudflare 仪表板的 【SSL/TLS 部分】，将加密模式从“灵活”更改为“完全（严格）”，以便 Cloudflare 通过 HTTPS
连接到 Backblaze，并且需要 CA 颁发的证书。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/15904fb466238d83.png)

### 设置缓存

这个非常有必要噢~~~

B2 桶 - 自己创建的桶 - 桶设定

桶信息填写(缓存一个月)：`{"cache-control":"max-age=2592000"}`

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/935e290f3246a582.png)

**Cloudflare 域名仪表盘 - 规则 - 页面规则 - 创建页面规则**

URL输入 上一步中设置的域名 `https://b2.i0lo1o.eu.org/*`

设置选择： 缓存级别 - 标准，边缘缓存TTL - 1个月

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/370cfd749d6b3126.png)

### 隐藏桶名

由于URL中暴露了桶名，CNAME的域名又很容易被猜到，怎么防止其他童鞋恶意刷你的免费额度呢？

下面介绍一下，怎么隐藏桶名~

**Cloudflare 域名仪表盘 - 规则 - 转换规则- 创建转换规则 - 重写URL**

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/238a2376952d1ca8.png)

传入请求匹配时：`b2.i0lo1o.eu.org`

路径重写到：选择 Dynamic动态，`concat("/file/ruyonet123", http.request.uri.path)`

这里一定要填写你自己的域名哈~~ 举一反三噢~

**然后浏览器打开URL：https://b2.i0lo1o.eu.org/default.png**

## API密钥

路径：My Account - 应用程序键 - 添加新的应用程序密钥

名称随意，允许访问桶 建议选择1个，其他默认即可

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/542c803a7f301bc8.png)

2）提交成功，一定要记住记住相关信息，关了以后密钥就看不到了，只能重新创建

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/0372c8e08620f583.png)

## 文件上传

### 官网上传

直接登陆官网，在桶里直接上传！

### WP插件

支持Backblaze的Wordpress插件不少呢，比如下面2个！填写API密钥即可！

wordpress.org/plugins/updraftplus/

wordpress.org/plugins/ilab-media-tools/

### SDK

官方提供多种语音的SDK

https://github.com/Backblaze/

### 其他

ShareX，MiXplorer

## 最后总结

Cloudflare 在国内的访问情况不太稳定。如果仅作为境外用户访问，该方式是非常不错的！

Cloudflare 规则中可以支持防盗链等等配置，这里就不多介绍了。

B2免费额度用光，静态文件将无法访问，第二天恢复。