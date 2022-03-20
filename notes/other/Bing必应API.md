---
author: xlc520
title: Bing必应API
description: Bing必应壁纸API
date: 2022-02-18
category: other
tag: other
article: true
timeline: true
icon: 
password: 
---



# Bing必应API

http://xlc.pp.ua/bing-api/index.php?rand=true

## 1

http://cn.bing.com/HPImageArchive.aspx?idx=0&n=1

```
https://cn.bing.com/HPImageArchive.aspx?idx=0&n=1
https://cn.bing.com/HPImageArchive.aspx?format=xml&cc=jp&idx=0&n=1
如果我们想浏览昨天，前天的图片呢？
 
回到最初的网址上，http://cn.bing.com/HPImageArchive.aspx?idx=0&n=1 在这里，更换 idx= 这个参数就可以了。
 
 如 http://cn.bing.com/HPImageArchive.aspx?idx=1&n=1 将要得到昨天的图片
http://cn.bing.com/HPImageArchive.aspx?idx=2&n=1得到前天的图片
```

## 2

https://bing.biturl.top/?resolution=1920&format=image&index=0&mkt=zh-CN

### 3

```
1. 访问 https://api.ioliu.cn/bing/ , 返回bing每日最新背景图, 可选参数[w,h]
2. 访问 https://api.ioliu.cn/bing/?d=n (n>=0), 返回以当日为起点第n天前的壁纸, 可选参数[w,h]
3. 访问 https://api.ioliu.cn/bing/json/ , 返回bing每日最新壁纸的相关(介绍、图片地址等)信息(json格式), 可选参数[callback].
4. 访问 https://api.ioliu.cn/bing/rand/ , 返回随机图片, 可选参数[w,h]
5. 访问 https://api.ioliu.cn/bing/blur/ , 返回高斯模糊图片, 可选参数[d,w,h]
   带[w,h]用法： https://api.ioliu.cn/bing/rand/?w=1920&h=1200

目前已知图片分辨率
1920x1200   1920x1080    1366x768   1280x768    
1024x768    800x600       800x480   768x1280  
720x1280    640x480       480x800   400x240     
320x240     240x320 
```

## 4

https://www.talklee.com/api/bing/

调用参数：

| 参数代码 | 参数含义                     | 可用参数                                      |
| :------- | :--------------------------- | :-------------------------------------------- |
| rand     | 是否随机显示最近8天内的图片  | true or false                                 |
| day      | 显示指定的最近图片           | -1，0，1，2，3，4，5，6，7(0为今天，-1为昨天) |
| size     | 指定获取图片大小             | 详见下方可用分辨率                            |
| info     | 获取图片基础信息（json格式） | true or false                                 |

- 以上所有参数均非必要，默认参数为rand=false，day=0，size=1920×1080，info=false

可用分辨率：

- 1920×1080
- 1366×768
- 1280×768
- 1024×768
- 800×600
- 800×480
- 768×1280
- 720×1280
- 640×480
- 480×800
- 400×240
- 320×240
- 240×320
- 注：中间的x为英文字母x

## 5

### Bing Pictures Interface | 必应壁纸接口

> 🔨 `Bing 壁纸 Api`重装上阵啦 😄 [http://bing.ioliu.cn](http://bing.ioliu.cn/)

### 目前开放的壁纸接口：

- `/v1{d,w,h,p,size,callback}` 返回今日的壁纸完整数据(`可选参数{d,w,h,p,size,callback}`)：

  > 若指定参数`{w,h}` ，则直接返回图片

| 参数名   | 类型     | 是否必要 | 备注                    |
| -------- | -------- | -------- | ----------------------- |
| d        | `Int`    | 否       | 自今日起第`d`天前的数据 |
| w        | `Int`    | 否       | 图片宽度                |
| h        | `Int`    | 否       | 图片高度                |
| p        | `Int`    | 否       | `Page 页码`:第x页       |
| size     | `Int`    | 否       | `Size 条数`:每页条数    |
| callback | `String` | 否       | JSONP的回调函数名       |

- `/v1/rand{w,h,type,callback}` 返回随机的壁纸(`可选参数{w,h,type,callback}`)：

| 参数名   | 类型     | 是否必要 | 备注               |
| -------- | -------- | -------- | ------------------ |
| w        | `Int`    | 否       | 图片宽度           |
| h        | `Int`    | 否       | 图片高度           |
| type     | `String` | 否       | 返回值类型(`json`) |
| callback | `String` | 否       | JSONP的回调函数名  |

- `/v1/blur{d,w,h,r}` 返回高斯模糊壁纸(`可选参数{d,w,h,r}`)：

| 参数名 | 类型  | 是否必要 | 备注                    |
| ------ | ----- | -------- | ----------------------- |
| d      | `Int` | 否       | 自今日起第`d`天前的数据 |
| w      | `Int` | 否       | 图片宽度                |
| h      | `Int` | 否       | 图片高度                |
| r      | `Int` | 否       | 模糊半径(`1~50`)        |

### **⚠️** `高斯模糊`接口目前只支持指定分辨率(`w,h`)的图片，具体分辨率如下：

```
/**
 * 已知分辨率
 */
resolutions: [
    '1920x1200',
    '1920x1080',
    '1366x768',
    '1280x768',
    '1024x768',
    '800x600',
    '800x480',
    '768x1280',
    '720x1280',
    '640x480',
    '480x800',
    '400x240',
    '320x240',
    '240x320'
]
```

## 6

[http://bing.getlove.cn/bingImage](http://bing.getlove.cn/bingImage)

## 7

- https://api.7-89.cn/bing/today
- https://api.kdcc.cn/img/
- https://api.kdcc.cn/img/rand.php（随机）
- https://api.kdcc.cn/img/jump.php
- https://open.saintic.com/api/bingPic/
- http://47.103.144.215:2020/showtoday
- https://www.talklee.com/api/bing
- https://api.dujin.org/bing/1920.php

## 代码一

```php
  $time = date("Ymd", time());
    $log = "./log/" . $time . '.txt';
    //判断缓存文件是否存在
    if (file_exists($log)) {
        //读取缓存
        $imgurl = file_get_contents($log);
        //跳转至图片地址
        header("Location: $imgurl");
    } else {
        //获取bing背景图
        $str = file_get_contents('http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1');
        //解析Bing官方接口Json
        $data = json_decode($str,true);
        //七牛CDN镜像加速
        $imgurl = 'http://s.cn.bing.net'.$data['images'][0]['urlbase']. '_1920x1080.jpg';
        //写入TXT用作缓存
        file_put_contents($log, $imgurl);
        //跳转至图片地址
        header("Location: $imgurl");
    }
```

## 代码二

```php
<?php
//判断是否随机调用
if ($_GET['rand']==='true') {
  $gettime = rand(-1,7);
}else{
//若不为随机调用则判断是否指定日期
  $gettimebase = $_GET['day'];
  if (empty($gettimebase)) {
    $gettime = 0;
  }else{
    $gettime = $gettimebase;
  }
}
//获取Bing Json信息
$json_string = file_get_contents('https://www.bing.com/HPImageArchive.aspx?format=js&idx='.$gettime.'&n=1');
//转换为PHP数组
$data = json_decode($json_string);
//提取基础url
$imgurlbase = "https://www.bing.com".$data->{"images"}[0]->{"urlbase"};
//判断是否指定图片大小
$imgsizebase = $_GET['size'];
if (empty($imgsizebase)){
  $imgsize = "1920x1080";
}else{
  $imgsize = $imgsizebase;
}
//建立完整url
$imgurl = $imgurlbase."_".$imgsize.".jpg";
//获取其他信息
$imgtime = $data->{"images"}[0]->{"startdate"};
$imgtitle = $data->{"images"}[0]->{"copyright"};
$imglink = $data->{"images"}[0]->{"copyrightlink"};
//判断是否只获取图片信息
if ($_GET['info']==='true') {
  echo "{title:".$imgtitle.",url:".$imgurl.",link:".$imglink.",time:".$imgtime."}";
}else{
  //若不是则跳转url
  header("Location: $imgurl");
}
```

