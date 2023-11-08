---
author: xlc520
title: SpringBoot 快速实现 api 加密
description: 
date: 2023-10-25
category: Java
tag: Java
article: true
timeline: true
icon: java
---



# SpringBoot 快速实现 api 加密

在项目中，为了保证数据的安全，我们常常会对传递的数据进行加密。常用的加密算法包括对称加密（AES）和非对称加密（RSA），博主选取码云上最简单的API加密项目进行下面的讲解。

> https://gitee.com/isuperag/rsa-encrypt-body-spring-boot



### 项目介绍

该项目使用RSA加密方式对API接口返回的数据加密，让API数据更加安全。别人无法对提供的数据进行破解。Spring Boot接口加密，可以对返回值、参数值通过注解的方式自动加解密 。

### 什么是RSA加密

首先我们当然是了解RSA加密

RSA加密是一种非对称加密。可以在不直接传递密钥的情况下，完成解密。这能够确保信息的安全性，避免了直接传递密钥所造成的被破解的风险。是由一对密钥来进行加解密的过程，分别称为公钥和私钥。两者之间有数学相关，该加密算法的原理就是对一极大整数做因数分解的困难性来保证安全性。通常个人保存私钥，公钥是公开的（可能同时多人持有）。

# ![图片](E:/source/blogImage/640-1698158560240-0.png)

**举例子大法**

加密和签名都是为了安全性考虑，但略有不同。常有人问加密和签名是用私钥还是公钥？其实都是对加密和签名的作用有所混淆。简单的说，加密是为了防止信息被泄露，而签名是为了防止信息被篡改。这里举2个例子说明。

**「第一个场景：」**战场上，B要给A传递一条消息，内容为某一指令。

RSA的加密过程如下：

- A生成一对密钥（公钥和私钥），私钥不公开，A自己保留。公钥为公开的，任何人可以获取。
- A传递自己的公钥给B，B用A的公钥对消息进行加密。
- A接收到B加密的消息，利用A自己的私钥对消息进行解密。

在这个过程中，只有2次传递过程，第一次是A传递公钥给B，第二次是B传递加密消息给A，即使都被敌方截获，也没有危险性，因为只有A的私钥才能对消息进行解密，防止了消息内容的泄露。

**「第二个场景：」**A收到B发的消息后，需要进行回复“收到”。

RSA签名的过程如下：

- A生成一对密钥（公钥和私钥），私钥不公开，A自己保留。公钥为公开的，任何人可以获取。
- A用自己的私钥对消息加签，形成签名，并将加签的消息和消息本身一起传递给B。
- B收到消息后，在获取A的公钥进行验签，如果验签出来的内容与消息本身一致，证明消息是A回复的。

在这个过程中，只有2次传递过程，第一次是A传递加签的消息和消息本身给B，第二次是B获取A的公钥，即使都被敌方截获，也没有危险性，因为只有A的私钥才能对消息进行签名，即使知道了消息内容，也无法伪造带签名的回复给B，防止了消息内容的篡改。

但是，综合两个场景你会发现，第一个场景虽然被截获的消息没有泄露，但是可以利用截获的公钥，将假指令进行加密，然后传递给A。第二个场景虽然截获的消息不能被篡改，但是消息的内容可以利用公钥验签来获得，并不能防止泄露。所以在实际应用中，要根据情况使用，也可以同时使用加密和签名，比如A和B都有一套自己的公钥和私钥，当A要给B发送消息时，先用B的公钥对消息加密，再对加密的消息使用A的私钥加签名，达到既不泄露也不被篡改，更能保证消息的安全性。

### 加密实战

博主你哔哩哔哩这么多，我已经知道了RSA是干什么了。不就是 公钥加密、私钥解密、私钥签名、公钥验签

#### 实战准备

##### 1、新建一个springboot项目

springboot_api_encryption

##### 2、引入maven依来

```
<dependency>
    <groupId>cn.shuibo</groupId>
    <artifactId>rsa-encrypt-body-spring-boot</artifactId>
    <version>1.0.1.RELEASE</version>
</dependency>
```

##### 3、启动类Application中添加@EnableSecurity注解

```
@SpringBootApplication
@EnableSecurity
public class DemoApplication {
    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
```

##### 4、在application.yml或者application.properties中添加RSA公钥及私钥

公钥私钥的生成文章后面会放出生成工具

```
rsa:
  encrypt:
    open: false # 是否开启加密 true  or  false
    showLog: true # 是否打印加解密log true  or  false
    publicKey: # RSA公钥 软件生成
    privateKey: # RSA私钥 软件生成
```

##### 5、对Controller 里面的API方法进行加密

```
@Encrypt
@GetMapping("/encryption")
public TestBean encryption(){
    TestBean testBean = new TestBean();
    testBean.setName("shuibo.cn");
    testBean.setAge(18);
    return testBean;
}
```

##### 6、对传过来的加密参数解密

其他java端程序可以用注解，如果是vue，请用RSA密钥解密

```
@Decrypt
@PostMapping("/decryption")
public String Decryption(@RequestBody TestBean testBean){
    return testBean.toString();
}
```

#### 真刀真枪

##### 1、引入maven

![图片](E:/source/blogImage/640-1698158560239-1.png)

##### 2、启动类添加注解

![图片](E:/source/blogImage/640-1698158560240-2.png)

##### 3、YML添加配置密钥

![图片](E:/source/blogImage/640-1698158560240-3.png)

##### 4、创建一个实体类

![图片](E:/source/blogImage/640-1698158560240-4.png)

##### 5、写一个对外API接口

![图片](E:/source/blogImage/640-1698158560240-5.png)

##### 6、启动项目

> ❝
>
> 请求地址: http://localhost:8080/encryption
>
> ❞

我们看到返回的数据未加密

![图片](E:/source/blogImage/640-1698158560240-6.png)

##### 7、修改

修改open为true 打开加密

```
rsa:
  encrypt:
    open: true # 是否开启加密 true  or  false
    showLog: true # 是否打印加解密log true  or  false
    publicKey: # RSA公钥 软件生成
    privateKey: # RSA私钥 软件生成
```

##### 8、再次重启项目

> ❝
>
> 请求地址: http://localhost:8080/encryption
>
> ❞

我们看到返回的数据已加密

![图片](E:/source/blogImage/640-1698158560240-7.png)

##### 9、加密日志

![图片](E:/source/blogImage/640-1698158560240-8.png)

### 解密实战

如果是其他springboot项目，跟前面一样。我们这儿就当客户端是springboot项目，其他的请使用RSA解密协议解密！

服务端有私密钥、公密钥

前端只需要公密钥就可以

#### 实战准备

在原来的springboot基础上写一份解密方法

##### 1、前端js解密方法

```
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/jsencrypt/3.0.0-rc.1/jsencrypt.js"></script>
```

##### 2、后台增加解密方法

```
/**
 * 解密
 * @param user
 * @return
 */
@PostMapping("/decryption")
@Decrypt
@ResponseBody
public String Decryption(@RequestBody User user){
    System.out.println(user.toString());
    return user.toString();
}
```

##### 3、js方法

```
#公钥
 var PUBLIC_KEY = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAobhGH4WMwMvJRUlTxWrCVIOQtsHijAxPJNvAWAgq80ADpFEWrpbcGB9cKqp6XHRH4k/CVtCUZ7jm9UKwhaeAm18sKtcwe+M8JFNX6FSHpgde0o8C9S/QpcmLxf4iN7nGZ7P3ZTvMdmKUcdRMsVQnsydG2Bj6gRxP2+kexEebTeODbdM7dHlkxAL0RxGWmX/ZOBzsoWZw2gKcC0vxwyIZBGHUdImG2T3nEA+VMfK2Yqv3uSYukmlKP+0mjfhrTtLFDuTV1VER9BfryBMvpQCxLO4pqgZnXPd+SOQcZHZ2OL0wqo5OX1+GPYx7TNxz5Qi76pK//T2mH7s6X/BuyT21HQIDAQAB';

/**
 * 加密方法
 * @returns {PromiseLike<ArrayBuffer>}
 * @constructor
 */
function RSA_encryption(jsonData) {
 var encrypt = new JSEncrypt();
 encrypt.setPublicKey('-----BEGIN PUBLIC KEY-----' + PUBLIC_KEY + '-----END PUBLIC KEY-----');
 var encrypted = encrypt.encrypt(JSON.stringify(jsonData));
 console.log('加密前数据:%o', str);
 console.log('加密后数据:%o', encrypted);
 return encrypted;
}


/**
 * 提交方法
 */
function tijiao() {
 var str = {
  "name":"1223334",
  "password":"asd",
  age:1
 };
  $.ajax({
   url: "/decryption",
   type : "POST",
   contentType: "application/json;charset=utf-8",
   data : RSA_encryption(str) ,
   success : function(data) {
    alert(data);
   }
  })
}
```

#### 真刀真枪

##### 1、 Controller添加解密方法接口

![图片](E:/source/blogImage/640-1698158560240-9.png)

##### 2、前端页面引入js以及方法

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
加密传后端，后端解密
<button id="jiami" onclick="tijiao()">加密传后端</button>
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/jsencrypt/3.0.0-rc.1/jsencrypt.js"></script>
<script>
    var PUBLIC_KEY = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAobhGH4WMwMvJRUlTxWrCVIOQtsHijAxPJNvAWAgq80ADpFEWrpbcGB9cKqp6XHRH4k/CVtCUZ7jm9UKwhaeAm18sKtcwe+M8JFNX6FSHpgde0o8C9S/QpcmLxf4iN7nGZ7P3ZTvMdmKUcdRMsVQnsydG2Bj6gRxP2+kexEebTeODbdM7dHlkxAL0RxGWmX/ZOBzsoWZw2gKcC0vxwyIZBGHUdImG2T3nEA+VMfK2Yqv3uSYukmlKP+0mjfhrTtLFDuTV1VER9BfryBMvpQCxLO4pqgZnXPd+SOQcZHZ2OL0wqo5OX1+GPYx7TNxz5Qi76pK//T2mH7s6X/BuyT21HQIDAQAB';

    /**
     * 加密方法
     * @returns {PromiseLike<ArrayBuffer>}
     * @constructor
     */
    function RSA_encryption(jsonData) {
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey('-----BEGIN PUBLIC KEY-----' + PUBLIC_KEY + '-----END PUBLIC KEY-----');
        var encrypted = encrypt.encrypt(JSON.stringify(jsonData));
        console.log('加密前数据:%o', jsonData);
        console.log('加密后数据:%o', encrypted);
        return encrypted;
    }

    /**
     * 提交方法
     */
    function tijiao() {
        var str = {
            "name":"1223334",
            "password":"asd",
            age:1
        };
            $.ajax({
                url: "/decryption",
                type : "POST",
                contentType: "application/json;charset=utf-8",
                data : RSA_encryption(str) ,
                success : function(data) {
                    alert(data);
                }
            })
    }

</script>
</body>
</html>
```

##### 3、启动访问

http://localhost:8080

![图片](E:/source/blogImage/640-1698158560240-10.png)

##### 4、后台解密日志

![图片](E:/source/blogImage/640-1698158560240-11.png)

### 总结

经过上面的接口加密解密操作。可以看出我们的接口如果没有公钥、或者私钥别人根本无法解密！这样就对API接口起到了很好的保护作用，防止别人抓包！

祝大家：每天学习一点，技术成长飞快

#### 项目坑点

此项目的demo无法访问，难点就在前端如何加密回传到后台解密，此坑我带大家爬出来了！

以下是主意事项：

1、主意ajax的 contentType: “application/json;charset=utf-8”

```
$.ajax({
    url: "/decryption",
    type : "POST",
    contentType: "application/json;charset=utf-8",
    data : RSA_encryption(str) ,
    success : function(data) {
        alert(data);
    }
})
```

2、解密方法必须 @RequestBody

```
@PostMapping("/decryption")
@Decrypt
@ResponseBody
public String Decryption(@RequestBody User user){
    System.out.println(user.toString());
    return user.toString();
}
```

源代码获取：

> ❝
>
> https://github.com/pengziliu/GitHub-code-practice
>
> ❞