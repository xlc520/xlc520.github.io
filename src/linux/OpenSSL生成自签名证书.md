---
author: xlc520
title: OpenSSL生成自签名证书
description: 
date: 2022-05-21
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
password: 
---

# 使用OpenSSL生成自签名证书，实现HTTPS传输

**导读**

SSL协议是一种网络安全协议，用于加密浏览器和服务器之间传输的数据信息。SSL证书就是遵守SSL协议，由数字证书颁发机构CA在验证服务器身份后颁发的一种数字证书，网站通过部署SSL证书实现加密传输数据。如果网站涉及敏感信息，例如：登录账号及口令、身份证号码、手机号码等重要个人信息，或者医院、银行、保险公司等机构的重要业务数据，则需要使用SSL证书，防止信息被第三方窃听和篡改。

SSL证书可分为专业证书（由受信任的证书颁发机构签名的证书）和自签名证书。专业证书由可信任的CA安全机构颁发，机构颁发给用户的证书是唯一可信任的，不可被伪造，此外，它们还具有保护措施来减少错误颁发和其他类型的欺诈行为。专业证书的安全性越高，申请证书的费用越昂贵，于是一些企业将目光转向了自签名证书。自签名证书是可以自己签发的SSL证书，相比于专业证书，自签名证书签发流程简单，几乎0成本，且同样使用与专业证书相同的方法加密传输数据。可是制作难度低，意味着自签名证书极容易被恶意模仿，进而伪造成有同样证书的假冒网站，所以面向公众的网站使用自签名证书存在一定安全风险。但在一些安全可控的网络环境下，为了节省网站建设成本，可以考虑使用自签名证书，例如：测试环境，具备安全防护的内网环境，面向内部、少数人员使用的不涉及敏感数据的网站等。

## **01 OpenSSL介绍**

在计算机网络上，OpenSSL是一个开放源代码的软件库包，应用程序可以使用这个包来进行安全通信，避免窃听，同时确认对端连接者的身份。这个包广泛被应用在互联网的网页服务器上。作为一个基于密码学的安全开发包，OpenSSL提供的功能相当强大和全面，囊括了主要的密码算法、常用的密钥和证书封装管理功能以及SSL协议[1]。

OpenSSL在Linux操作系统、Windows操作系统、MAC操作系统里均可安装使用，本文实例操作演示是在Linux操作系统下安装和使用。





## **02 SSL证书握手流程图**

如下图所示，基于RSA握手和密钥交换的客户端验证服务器端为示例详解SSL证书握手过程[2]。

![图片](https://static.xlc520.ml/blogImage/640-16532729545682.png)



## **03 自签名证书生成过程**

**3.1环境及证书生成流程：**

本文实例操作模拟的是内网环境，演示所使用的环境如下：

CentOS 7虚拟机（模拟服务器端），Nginx服务器，Windows 10 本机（模拟客户端）。

自签名证书生成与部署流程如下图所示：

![图片](https://static.xlc520.ml/blogImage/640-16532729545681.png)



**3.2搭建私有CA**

**命令：yum install openssl-devel**

在CentOS 7虚拟机上安装OpenSSL。

![图片](https://static.xlc520.ml/blogImage/640-16532729545692.png)


**命令：openssl genrsa -out /etc/pki/CA/private/cakey.pem 2048**

生成基于非对称加密算法的私钥文件。

genrsa  用于生成RSA密钥对的OpenSSL命令

-out   输出文件的保存位置

2048   表示密钥强度

【注：OpenSSL-1.1.1及以上版本可使用命令（openssl ecparam -genkey -name SM2 -out priv.key）生成基于SM2国密算法的私钥文件】

![图片](https://static.xlc520.ml/blogImage/640-16532729545693.png)


**命令：openssl req -new -x509 -key /etc/pki/CA/private/cakey.pem -out /etc/pki/CA/cacert.pem -days 900**

生成私有CA的自签名证书。依次填入国家、省份、地区、公司名称、部门名称、CA服务器的主机名、管理员邮箱。

相关字段的信息

```text
C  => 国家 Country 
ST => 省 State
L  => 市 City
O  => 机构 Organization
OU => 部门 Organization Unit
CN => 域名 Common Name (证书所请求的域名)
emailAddress => main administrative point of contact for the certificate
```

#### req 指令



req指令既可以直接生成一个新的自签名证书，也可以根据现有的证书请求和其相应私钥生成自签名根证书。如果是根据现有证书请求生成自签名根证书，那么一定要-key选项指定相应的私钥指令才能执行成功。



req 指令也可以生成密钥对，但在使用req 同时生成密钥对是对密钥对保存和格式有限制（只能是PEM编码，DES3-CBC模式加密）。如果需要更灵活的处理，可以使用genrsa或者gendsa先生成密钥然后使用-key选项指定。

参数选项

- -new 指定执行生成新的证书请求，此时会忽略-in 指定的内容
- -x509 根据现有的证书请求生成自签名根证书（要求使用-key指定证书请求里面的公钥相应的私钥，以便对自签名根证书进行签名）
- -key 指定输入的密钥，如果不指定此选项会根据-newkey选项的参数生成密钥对
- -newkey 指定生成一个新的密钥对，只有在没有-key 选项的时候才生效，参数形式为rsa:numbits 或者 dsa:file
- -subj直接从指令行指定证书请求的主体名称，格式为/分割的键值对字符串，如果没有此选项，那么会弹出交互提示；
- -days 设定了生成的自签名根证书的有效期，单位为天；该选项只有在使用了-x509选项生成自签名证书的时候才生效，默认为30天。
- -config 指定req指令在生成证书请求的时候使用的OpenSSL配置文件，一般默认为openssl.cnf
- -extensions 选项指定了生成自签名根证书的时候使用的扩展字段，其参数为OpenSSL配置文件中的某个字段名
- -reqexts 选项指定了生成证书请求是使用的扩展字段，该字段参数也是配置文件中的某个字段名
- -text 让指令输出证书请求或者自签名根证书内容的明文解析，默认情况下，它将输出所有可能输出的内容，如果使用了reqopt选项，则输出内容取决于reqopt选项
- -reqopt 指定text 选项输出的内容,可以为多个，每个之间使用,分隔
- set_serial指定生成的自签名根证书的序列号，默认情况下生成的自签名根证书序列号是0；该选项也只有在生成自签名根证书的时候有效。
- -keyout 置顶新生成的私钥的输出（仅在使用了-newKey 或-new 选项导致生成新密钥对的时候才有效，如果使用了-key则此选项被忽略）
- -keyform 指定输入密钥的编码格式（比如PEM，DER，PKCS#12，Netscape，IIS SGC，Engine等）
- -in 指定输入证书请求文件，如果使用了-new 或者 -newkey选项，此选项被忽略
- -inform 指定输入证书请求文件的编码格式（比如PEM，DER）
- -out 指定输出证书请求文件或自签名证书文件
- -noout 使用此选项后，指令将不会输出编码的证书请求或者自签名根证书到-out选项指定的文件中，一般用来测试指令或者查看证书请求的信息
- -outform 指定输出证书请求文件或自签名证书的编码格式（比如PEM,DER）
- -pubkey 使用此选项活 指令将输出PEM编码的公钥到-out选择指定的文件中，默认情况下只输出私钥到-keyout指定的文件，并不输出公钥。
- -passin 指定读取-key 选项指定的私钥所需要的解密口令，如果没有指定，私钥又有密钥的话，会弹出交互提示
- -passout 指定-keyout 选项输出私钥时使用的加密口令
- -nodes 表示不对私钥进行加密，如果指定此选项，则忽略-passout指定的口令；如果没有此选项，却指定了-passout则会有交互提示。
- -digest 指定生成证书请求或者自签名根证书是使用的信息摘要算法，一般在生成数字签名的时候使用。
- -verify 使用此选项对证书请求中的数字签名进行验证操作，并给出失败或者成功的提示信息，其验证的过程是从证书请求里面提取公钥，然后使用该公钥对证书请求的数字签名进行验证。
- 如果没有-key选项也没有-newkey选项，则会根据openssl.cnf中req字段的default_bits选项的参数，生成一个RSA密钥
- 如果没有使用-nodes选项，并且生成了新的私钥，私钥会被输出到-keyout指定的文件中时将被以DES3的CBC模式加密。

【注：参数中带-x509表示直接生成自签证书，不带则表示生成证书签署请求】

![图片](https://static.xlc520.ml/blogImage/640-16532729545694.png)

#### x509

x509指令能已各种方式显示一个证书的内容，也可以对一个证书的格式进行转换，还可以签发证书

参数选项

- -in
- -inform
- -out
- -outform
- -keyform
- -CA 指定签发证书或者转换证书格式的时候需要的CA证书文件
- -CAkey 指定签发证书或者转换证书格式时需要的CA证书对应的私钥文件路径
- -CAform 指定CA证书文件的格式
- -CAkeyform 私钥文件格式
- -startdate
- -enddate
- -pubkey
- -noout



**命令：touch /etc/pki/CA/index.txt**

生成证书索引数据库文件。

**命令：echo 01 > /etc/pki/CA/serial**

指定第一个颁发证书的序列号。

![图片](https://static.xlc520.ml/blogImage/640-16532729545695.png)


**3.3签署CA用户服务器证书**

**命令：openssl genrsa -out test.key 2048**

生成CA用户服务器的私钥文件。

![图片](https://static.xlc520.ml/blogImage/640-16532729545696.png)


**命令：openssl req -new -key test.key -out test.csr**

生成请求签署文件。依次填入国家、省份、地区、公司名称、部门名称、虚拟机IP地址（192.168.231.135）、管理员邮箱。

Conmon Name  此处填写要申请SSL证书认证的域名/IP地址

A challenge password 为了保证证书在互联网中传输安全可以添加密码，如不添加密码可以两次回车跳过

【注：此文件中的国家、省份、地区、公司名称必须与CA自签名证书一致】

![图片](https://static.xlc520.ml/blogImage/640-16532729545697.png)


#### ca 指令

ca指令模拟一个完整的CA服务器，它包括签发用户证书，吊销证书，产生CRL及更新证书库等管理操作

参数选项

- -config 指定要使用的配置文件，如果没有此选项，则会先查找OPENSSL_CONF或者SSLEAY_CONF定义的文件名，如果这两个环境变量都没有定义，就使用OpenSSL安装的默认路径，一般是/usr/local/openssl/openssl.cnf，具体看安装配置
- -startdate 设置证书的生效时间 格式为YYMMDDHHMMSSZ指定年月日时分秒，如果没有则使用主配置文件中的default_startdate
- -enddate 格式跟-startdate一样
- -days 设置证书的有效天数，生效时间到到期时间之间的天数，如果使用了-enddate，此选项被忽略
- -name 指定配置文件中CA选项的名称
- -notext 不输出明文信息到证书文件
- -subj直接从指令行指定证书请求的主体名称，格式为/分割的键值对字符串，如果没有此选项，那么会弹出交互提示；
- -cert 参数是一个可以包含路径的文件名，该文件是一个PEM编码的X.509证书文件
- -keyfile 参数是一个包含路径的文件名，文件格式可以为PEM，DER，PKCS#12，Netscape，IIS SGC，Engine，但需要通过-keyform指定到底是哪种格式
- -policy 指定CA的匹配策略
- -extensions 指定x509 v3扩展字段的字段名，如果没有这个选项就由-extfile中内容
- -extfile 指定x509 v3扩展的配置文件，如果没有-extensions字段，则由CA主配置文件中的x509_extensions选项指定
- -in 指定一个可以包含路径的证书请求文件名，应该是PEM变得PKCS#10格式的证书请求
- -infiles指定一系列包含PEM编码证书请求的文件，包含多个，只能作为指令的最后一个选项，其后的参数都被认为是证书请求文件
- -out 选项指定了输出签发好的证书或者新生成的CRL的文件，如果没有使用-notext选项，那么证书的明文信息也会输出到-out选项指定的文件中
- -outdir选项指定了新生成的证书的输出目录，默认输出到newecerts目录，并使用.pem作为后缀，都是PEM编码。

**命令：openssl ca -in test.csr -out test.crt -days 300**

使用前面搭建的私有CA对用户的证书请求进行签名，为用户颁发证书。

-in 证书请求签署文件

-out 签发后的证书文件

![图片](https://static.xlc520.ml/blogImage/640-16532729545698.png)



## **04 部署自签名证书，**

**实现HTTPS加密传输**

**命令：yum install nginx**

安装Nginx服务器。Nginx服务器位于客户端与目标服务器之间，提供正向代理功能，客户端访问目标服务器的请求，需通过Nginx进行处理再转交给目标服务器，并将获得的内容返回给客户端，本文通过Nginx服务器部署自签名证书。

![图片](https://static.xlc520.ml/blogImage/640-16532729545699.png)


图10在/usr/share/nginx/html目录下放入编写好的静态网页index.html。从客户端访问虚拟机地址：http://192.168.231.135 ，如下图所示，可访问静态网页，并具有“不安全”的提示字样。

![图片](https://static.xlc520.ml/blogImage/640-165327295456910.png)




**令：cp /test.key /etc/nginx
**

**命令：cp /test.crt /etc/nginx**

将在根目录下的证书test.crt、私钥文件test.key复制到/etc/nginx/目录下。

**命令：cd /etc/nginx**

**命令：vim nginx.conf**

进入nginx所在的目录，通过vim指令访问nginx.conf配置文件。

![图片](https://static.xlc520.ml/blogImage/640-165327295456911.png)


修改nginx.conf配置文件，在ssl_certificate字段后面填写证书test.crt的路径；在ssl_certificate_key字段后面填写私钥文件test.key的路径；在root字段后添加静态网页所在的目录；配置完成后退出vim模式。

**命令：systemctl restart nginx**

重启Nginx服务。

![图片](https://static.xlc520.ml/blogImage/640-165327295456912.png)



从客户端浏览器访问地址：https://192.168.231.135 ，如下图所示，浏览器提示“您的连接不是私密连接”， 这是因为自签名证书不受浏览器的信任，浏览器就会弹出安全警告，需要用户确认访问此连接。

![图片](https://static.xlc520.ml/blogImage/640-165327295456913.png)


点击“高级”按钮，选择“继续前往192.168.231.135（不安全）”，通过HTTPS请求访问到静态网页，证明自签名证书部署成功。

![图片](https://static.xlc520.ml/blogImage/640-165327295457014.png)


可以从火狐浏览器查看自签名证书的相关信息。

![图片](https://static.xlc520.ml/blogImage/640-165327295457015.png)


![图片](https://static.xlc520.ml/blogImage/640-165327295457016.png)


打开nginx.conf文件，在监听80端口（HTTP协议默认端口）的配置中，添加语句：**rewrite ^(.)$ https://192.168.231.135 permanent;**可使HTTP请求重定向为HTTPS请求。重启Nginx服务后，从客户端访问地址：http://192.168.231.135，将自动跳转为https://192.168.231.135 。

![图片](https://static.xlc520.ml/blogImage/640-165327295457017.png)



## **05 总结**

自签名证书可以由公司、软件开发商或个人用户创建、颁发和签名，虽然自签名证书使用的是与X.509证书相同的加密密钥对架构，但是缺少受信任第三方（如DigiCert、GeoTrust、GlobalSign）的验证。在颁发过程中缺乏独立验证会产生额外的风险，容易被攻击者假冒和伪造，这就是为什么对于面向公众的网站和应用程序来说，自签名证书是不安全的。

此外，自签名SSL证书不被浏览器信任，用户在访问自签名证书网站时，浏览器会发出安全警告提示用户此证书不受信任，需要人工确认是否信任该证书，用户只有点击信任后才可继续浏览网站。长此以往，用户逐渐养成了忽略浏览器警告提示的习惯，这就给了攻击者可乘之机，使网站更容易受到中间人攻击[5]。

综上所述，面向互联网的应用系统不建议使用自签名证书，即使实现了HTTPS加密传输，也不能保证数据传输的安全性。