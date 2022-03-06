---
author: xlc520
title: Spring Boot启动的时候默认的banner
description: Spring Boot启动的时候默认的banner是spring的字样
time: 2022-03-02
category: Java
tags: Java
article: true
timeline: true
icon: 
password: 
---

# Spring Boot启动默认的banner

自定义banner只需要在resource下新建一个`banner.txt`文件，将我们需要的banner字样放进去，启动的时候就会去读取使用这个文本文件中的banner。

[banner.txt](./banner.txt)

```
                   _ooOoo_
                  o8888888o
                  88" . "88
                  (| -_- |)
                  O\  =  /O
               ____/`---'\____
             .'  \\|     |//  `.
            /  \\|||  :  |||//  \
           /  _||||| -:- |||||-  \
           |   | \\\  -  /// |   |
           | \_|  ''\---/''  |   |
           \  .-\__  `-`  ___/-. /
         ___`. .'  /--.--\  `. . __
      ."" '<  `.___\_<|>_/___.'  >'"".
     | | :  `- \`.;`\ _ /`;.`/ - ` : | |
     \  \ `-.   \_ __\ /__ _/   .-` /  /
======`-.____`-.___\_____/___.-`____.-'======
                   `=---='
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
         	佛祖保佑       永无BUG
```

## 控制banner样式

Spring提供了三个枚举类来设定字符的颜色，分别是：

AnsiColor： 用来设定字符的前景色

AnsiBackground： 用来设定字符的背景色

AnsiStyle： 用来控制加粗、斜体、下划线等等。



使用${AnsiFoo.Bar}来指定样式，当指定样式的时候会有提示的：

[![image](https://images2017.cnblogs.com/blog/784924/201708/784924-20170831000838452-507152231.png)](http://images2017.cnblogs.com/blog/784924/201708/784924-20170831000837983-2143253150.png) 

指定一种试一下，比如下面这种：

```
${AnsiColor.BRIGHT_YELLOW}
                   _ooOoo_
                  o8888888o
                  88" . "88
                  (| -_- |)
                  O\  =  /O
               ____/`---'\____
             .'  \\|     |//  `.
            /  \\|||  :  |||//  \
           /  _||||| -:- |||||-  \
           |   | \\\  -  /// |   |
           | \_|  ''\---/''  |   |
           \  .-\__  `-`  ___/-. /
         ___`. .'  /--.--\  `. . __
      ."" '<  `.___\_<|>_/___.'  >'"".
     | | :  `- \`.;`\ _ /`;.`/ - ` : | |
     \  \ `-.   \_ __\ /__ _/   .-` /  /
======`-.____`-.___\_____/___.-`____.-'======
                   `=---='
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
         佛祖保佑       永无BUG
```

## 显示应用信息

除了上面的指定样式之外，还可以显示一些与应用相关的版本信息：

${application.version}  与MANIFEST.MF文件中相同的版本号，比如1.5.4.RELEASE

${application.formatted-version}  格式化过的版本号就是加个v然后用括号包起来，比如(v1.5.4.RELEASE)

${application.title} 

${spring-boot.version} Spring Boot的版本

${spring-boot.formatted-version} 格式化过的版本

 

## 控制banner是否开启，输出位置

设置banner mode为OFF关闭banner：

```java
package org.cc11001100;
 
import org.springframework.boot.Banner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
 
@SpringBootApplication
public class SpringBootStudy002Application {
 
    public static void main(String[] args) {
        SpringApplication springApplication = new SpringApplication(SpringBootStudy002Application.class);
        springApplication.setBannerMode(Banner.Mode.OFF);
        springApplication.run(args);
    }
 
}
```

 

## 几个常用的字符画生成网站

介绍几个常用的字符画生成网站：

https://www.bootschool.net/ascii

http://patorjk.com/software/taag/

https://spring-boot-banner-gen.cfapps.io/ 可以将上传图片转为文本形式的字符画，只是感觉风格比较鬼畜

http://www.degraeve.com/img2txt.php 可以根据在线的图片网址生成字符画，比如可以直接将公司logo的地址粘贴进去生成字符画