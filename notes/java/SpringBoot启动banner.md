---
author: xlc520
title: Spring Boot启动的时候默认的banner
description: Spring Boot启动的时候默认的banner是spring的字样
date: 2022-03-02
category: Java
tag: Java
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





## 补充

通过将 banner.txt 文件添加到类路径或将 spring.banner.location 属性设置为此类文件的位置，可以更改启动时打印的横幅。如果文件的编码不是UTF-8，则可以设置 spring.banner.charset 。除了文本文件，您还可以将 banner.gif ， banner.jpg 或 banner.png 图像文件添加到类路径或设置 spring.banner.image.location 属性。图像将转换为ASCII艺术表示，并打印在任何文本横幅上方。在 banner.txt 文件中，您可以使用以下任何占位符：

表23.1。横幅变量

变量 描述

${application.version} 应用程序的版本号，如 MANIFEST.MF 中声明的那样。例

如， Implementation-Version: 1.0 打印为 1.0 。

${application.formatted-version} 应用程序的版本号，在 MANIFEST.MF 中声明并格式化以显示（用括号括起来并以 v 为前缀）。例如 (v1.0) 。

${spring-boot.version} 您正在使用的Spring Boot版本。例如 2.1.1.RELEASE 。

如果要以编程方式生成横幅，可以使用 SpringApplication.setBanner(… ) 方法。使用 org.springframework.boot.Banner

接口并实现您自己的 printBanner() 方法。

您还可以使用 spring.main.banner-mode 属性来确定是否必须在 System.out （ console ）上打印横幅，发送到配置的记录器（ log ），或者根本不产生横幅（ off ）。

打印的横幅以下列名称注册为单身bean：springBootBanner 。

YAML将 off 映射到 false ，因此如果要在应用程序中禁用横幅，请务必添加引号，如以下示例所示：

spring:

main:

banner-mode: "off"

23.3自定义SpringApplication

如果 SpringApplication 默认值不符合您的口味，您可以改为创建本地实例并对其进行自定义。例如，要关闭横幅，您可以写：

```java
public static void main(String[] args) {

SpringApplication app = new SpringApplication(MySpringConfiguration.class);

app.setBannerMode(Banner.Mode.OFF);

app.run(args);

}
```



传递给 SpringApplication 的构造函数参数是Spring beans的配置源。在大多数情况下，这些是对 @Configuration 类的引用，

但它们也可以是对XML配置或应扫描的包的引用。

也可以使用 application.properties 文件配置 SpringApplication 。有关详细信息，请参见第24章，外部化配置。

有关配置选项的完整列表，请参阅 SpringApplication Javadoc。

23.4 Fluent Builder API

如果您需要构建 ApplicationContext 层次结构（具有父/子关系的多个上下文）或者您更喜欢使用“流畅”构建器API，则可以使用 SpringApplicationBuilder 。

SpringApplicationBuilder 允许您将多个方法调用链接在一起，并包含允许您创建层次结构的 parent 和 child 方法，如以下示例所示：

```java
new SpringApplicationBuilder()

.sources(Parent.class)

.child(Application.class)
```



创建 ApplicationContext 层次结构时存在一些限制。例如，Web组件必须包含在子上下文中，并且父/子上下文使用相同

的 Environment 。有关详细信息，请参阅 SpringApplicationBuilder Javadoc。