---
author: xlc520
title: 免费随机图片api
description: 免费随机图片api接口
date: 2022-03-20
category: other
tag: other
article: true
timeline: true
icon: 
password: 
---

# 免费随机图片api接口

## api接口整合

樱花：https://www.dmoe.cc/random.php

晓晴博客：https://acg.toubiec.cn/random.php

Unsplash Source | API Documentation：详情请看官网介绍

夏沫博客：https://cdn.seovx.com/?mom=302

https://cdn.seovx.com/d/?mom=302

https://cdn.seovx.com/ha/?mom=302

心灵毒鸡汤:https://cdn.seovx.com/api/su/

二次元随机图：https://api.blogbig.cn/random/api.php

搏天api：https://api.btstu.cn/sjbz/api.php

姬长信API For Docker：

----每日bing：https://api.isoyu.com/bing_images.php

----美女图片壁纸：https://api.isoyu.com/mm_images.php

----网红专栏壁纸：https://api.isoyu.com/beibei_images.php

----动态IP签名图片：https://api.isoyu.com/ip_images.php?signature=早安

----ARU(阿鲁)表情包：https://api.isoyu.com/ARU_GIF_S.php

樱道：https://api.r10086.com/动漫综合1.php （网站中有更多api接口）

小歪API：https://api.ixiaowai.cn/api/api.php（二次元动漫）

https://api.ixiaowai.cn/mcapi/mcapi.php（mc酱动漫）

https://api.ixiaowai.cn/gqapi/gqapi.php（高清壁纸）

保罗｜API：https://api.paugram.com/wallpaper/

墨天逸：https://api.mtyqx.cn/tapi/random.php

EEE.DOG：https://api.yimian.xyz/img

动漫星空：https://api.dongmanxingkong.com/suijitupian/acg/1080p/index.php

岁月小筑：#https调用https://img.xjh.me/random_img.php

#http调用http://img.xjh.me/random_img.php

东方Project：https://img.paulzzh.tech/touhou/random

主题作者Tagaki的API（有时候会挂）

- https://api.lixingyong.com/api/images

暗鸦API

- [使用文档](https://img.r10086.com/)
- 由于分类太细了，自行去站点查看

Unsplash API

- [使用文档](https://source.unsplash.com/)
- https://source.unsplash.com/random
- https://source.unsplash.com/user/erondu
- 功能挺多的，自行去站点查看





电脑动漫图片：http://api.btstu.cn/sjbz/?lx=dongman

电脑美女图片：http://api.btstu.cn/sjbz/?lx=meizi

电脑随机动漫妹子：http://api.btstu.cn/sjbz/?lx=suiji

手机动漫图片：http://api.btstu.cn/sjbz/?lx=m_dongman

手机美女图片：http://api.btstu.cn/sjbz/?lx=m_meizi

手机随机动漫妹子：http://api.btstu.cn/sjbz/?m_lx=suiji

```html

body { background-image: url(http://api.btstu.cn/sjbz/?lx=dongman);
background-position: left top;  background-attachment:fixed; background-repeat:no-repeat;opacity:.9;}
@media (max-width: 640px){
body {
   background-image: url(http://api.btstu.cn/sjbz/?lx=m_dongman);
}
}
@media (max-width: 720px){
 body {
 background-image: url(http://api.btstu.cn/sjbz/?m_lx=suiji);
 }
}

```









# api网站整合

## 随机图库 Lorem Picsum

### 获取指定大小的随机图片

```awk
https://picsum.photos/200/300
```

![img](https://picsum.photos/200/300)
这样你就能得到一张宽度为200，高度为300的随机图片

如果你想要获得正方形图片，只需要如下代码

```awk
https://picsum.photos/200
//等同于 https://picsum.photos/200/200
```

![img](https://picsum.photos/200)

这样你就能得到一张宽度为200，高度为200的随机正方形图片

### 获取指定id的图片

------

```awk
https://picsum.photos/id/237/200/300
```

![img](https://picsum.photos/id/237/200/300)

[所有图片列表](https://link.segmentfault.com/?enc=10djdrYAQMXJVtrDdbBnFw%3D%3D.jKRLI%2BiBN1j%2BPnROsQ8lK5Zyvc9yKkOJ%2FbfjTOpyCI8%3D)

### 静态随机图片

------

每次根据种子获得相同的随机图像，方法是在URL开头添加`/seed/ {seed}`。

```awk
https://picsum.photos/seed/picsum/200
```

![img](https://picsum.photos/seed/picsum/200)

### 灰度图片

------

只需要在链接末尾添加`?grayscale`即可

```awk
https://picsum.photos/200/300?grayscale
```

![img](https://picsum.photos/200/300?grayscale)

### 模糊图片

------

通过附加`?blur`到url的末尾获得模糊图像。

```awk
https://picsum.photos/200/200/?blur
```

![img](https://picsum.photos/200/200/?blur)

可以通过提供介于1和10之间的数字来调整模糊量。

```apache
https://picsum.photos/200?blur=2
```

![img](https://picsum.photos/200?blur=2)

### 高级用法

------

您可以结合使用以上任何选项。

例如，要获得灰度和模糊的特定图像。

```awk
https://picsum.photos/id/870/200?grayscale&blur=2
```

![img](https://picsum.photos/id/870/200?grayscale&blur=2)

要在浏览器中请求多张相同大小的图像，请添加`random`查询参数以防止图像被缓存：

```routeros
<img src="https://picsum.photos/200/300?random=1">
<img src="https://picsum.photos/200/300?random=2">
```

如果您需要文件结尾，则可以添加`.jpg`到url的结尾。

```awk
https://picsum.photos/200/300.jpg
```

要获取WebP格式的图像，可以将其添加`.webp`到URL的末尾。

```awk
https://picsum.photos/200/300.webp
```

### 列出图片

------

使用`/v2/list`端点获取图像列表。

```awk
https://picsum.photos/v2/list
[
    {
        "id": "0",
        "author": "Alejandro Escamilla",
        "width": 5616,
        "height": 3744,
        "url": "https://unsplash.com/...",
        "download_url": "https://picsum.photos/..."
    }
]
```

默认情况下，该API每页将返回30个项目。

要请求另一个页面，请使用`?page`参数。

要更改每页的项目数量，请使用`?limit`参数。

```awk
https://picsum.photos/v2/list?page=2&limit=100
```

该`Link`头包括关于下一首/上页分页信息

### 图像细节

------

使用`/id/{id}/info`端点获取有关特定图像的信息。

```awk
https://picsum.photos/id/0/info
```

您可以通过查看`Picsum-ID`标题或`User Comment`EXIF元数据中的字段来查找图像的ID 。

```json
{
        "id": "0",
        "author": "Alejandro Escamilla",
        "width": 5616,
        "height": 3744,
        "url": "https://unsplash.com/...",
        "download_url": "https://picsum.photos/..."
}
```



## 樱花

> 网址：https://www.dmoe.cc/

- 随机二次元图片API

API基本调用格式：

```
https://www.dmoe.cc/random.php
```

参数：

```
type=json
```

JSON调用格式

```
https://www.dmoe.cc/random.php?return=json
```

JSON数据

```json
{
	"code":"200" #图片状态码
	"acgurl":"https:\/\/ws1.sinaimg.cn\/large\/0072Vf1pgy1foxkfy08umj31kw0w0nng.jpg" #图片地址
	"width":"2048" #图片宽
	"height":"1152" #图片高
}
```

## 晓晴博客

> 网址：https://www.toubiec.cn/318.html

- 随机二次元图片接口

源码项目地址：https://www.toubiec.cn/99.html

## Unsplash Source | API Documentation

> 网址：https://source.unsplash.com/

- 简单的嵌入Unsplash图片，可以登录Unsplash账号设置，也可以自定义筛选接口的图片类型

随机搜索术语
使用上述任何格式，您可以通过在 URL 末尾提供逗号分离的搜索词列表来进一步缩小随机照片的选择范围。

如果您想将结果限制在我们精心策划的收藏中，只需在 URL 末尾添加即可。featured

参数

https://source.unsplash.com/featured/?{KEYWORD},{KEYWORD}
1
*可选地指定大小，将其放置在基座URL之后。

例

https://source.unsplash.com/1600x900/?nature,water

## 夏沫博客

> 网址：https://cdn.seovx.com/

- 在线古风美图二次元API接口

美图接口代码示例:

```
<img src="https://cdn.seovx.com/?mom=302" style="max-width: 100%; max-height: 100%;">
```

二次元接口代码示例:

```
<img src="https://cdn.seovx.com/d/?mom=302" style="max-width: 100%; max-height: 100%;">
1
```

古风接口代码示例:

```
<img src="https://cdn.seovx.com/ha/?mom=302" style="max-width: 100%; max-height: 100%;">
1
```

## 二次元随机图

> 网址：https://api.blogbig.cn/random

- 该api已停运，原接口保持但不维护

二次元随机图API请求方式

```
Method: GET
```

- 请求地址

  ```
  ./dmapi/api.php二次元
  ./bsapi/api.php风景
  12
  ```

- 参数

  ```
  return // return=json返回json
  return // return=img直接输出图片
  12
  ```

返回数据

```
{
    "code":"200" #图片状态码
    "acgurl":"图片地址" #图片地址
    "width":"2048" #图片宽
    "height":"1152" #图片高
}
```

## 搏天api

> 网址：https://api.btstu.cn/doc/sjbz.php

- 随机输出各类壁纸

- 请求方式：get
- 请求地址：https://api.btstu.cn/sjbz/api.php
- 返回格式：json/images
- 请求示例：https://api.btstu.cn/sjbz/api.php?format=images

请求参数：

| 名称   | 必填 | 类型   | 说明                                                     |
| ------ | ---- | ------ | -------------------------------------------------------- |
| method | 否   | string | 输出壁纸端[mobile/pc/zsy]默认为pc                        |
| lx     | 否   | string | 选择输出分类[meizi/dongman/fengjing/suiji]，为空随机输出 |
| format | 否   | string | 输出壁纸格式[json/images]默认为images                    |

返回参数：

| 名称   | 类型   | 说明         |
| ------ | ------ | ------------ |
| code   | string | 返回的状态码 |
| imgurl | string | 返回图片地址 |
| width  | string | 返回图片宽度 |
| height | string | 返回图片高度 |

## 姬长信API For Docker

> 网址：https://api.isoyu.com/

- 姬长信API For Docker 一个基于多种编程语言开源免费不限制提供生活常用,出行服务,开发工具,金融服务,通讯服务和公益大数据的平台.

## 樱道

> 网址：https://img.r10086.com/

## 小歪API

> 网址：https://api.ixiaowai.cn/

- 图片API，文字API，二维码API，随心所动不再单调

图片API基本调用格式：
https://api.ixiaowai.cn/api/api.php（二次元动漫）
https://api.ixiaowai.cn/mcapi/mcapi.php（mc酱动漫）
https://api.ixiaowai.cn/gqapi/gqapi.php（高清壁纸）

- JSON调用格式

  ```
  图片列：https://api.ixiaowai.cn/api/api.php?return=json
  文字列：https://api.ixiaowai.cn/ylapi/index.php/?code=js
  12
  ```

## 保罗｜API

> 网址：https://api.paugram.com/help/wallpaper

- 生成适合 Single 主题的白底动漫壁纸

## 墨天逸

> 网址：https://api.mtyqx.cn/

- 随机图片API

- API基本调用格式：

  ```
  https://api.mtyqx.cn/api/random.php（二次元动漫）丨https://api.mtyqx.cn/tapi/random.php（二次元动漫）
  1
  ```

EEE.DOG
网址：https://www.eee.dog/tech/rand-pic-api.html

本API基于华为云对象存储，使用华为CDN云加速，全球平均下载速度达10MB/s。API中已收录1100+张二次元图片，20+张Bing壁纸(每日自动抓取)，150+张二次元头像，10+张图床上传图片。

## 动漫星空

> 网址：https://api.dongmanxingkong.com/

## 岁月小筑

> 网址：https://img.xjh.me/

- 随机图片API

## 东方Project

> 网址：https://img.paulzzh.tech/

- 随机图片API