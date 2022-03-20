---
author: xlc520
title: MySQL 8
description: MySQL 8
date: 2022-01-23
category: other
tag: other
article: true
timeline: true
icon: 
password: 
---


# MySQL 8



mysql从5.7一下子跳跃到了8.0，其中的改变还是很大，有点这里就不说了，小伙伴们自己去百度了解一下，这里重点说一下，安装的事

1.解压后，文件下下面是没有my.ini 和 data目录的，需要自己新建一个my.ini和data目录

my.ini的基本代码就这几行配置，足矣，更详细的自己官网上看（F:\mysql-8.0.11-winx64 是我的解压路径）



```

[mysqld]
# 设置3306端口
port=3306
# 设置mysql的安装目录
basedir=E:\Software\mysql-8.0.19-winx64
# 设置mysql数据库的数据的存放目录，在安装mysql-5.7.30-winx64.zip版本的时候，此配置不可添加，否则mysql将无法启动。
# datadir=E:\Software\mysql-8.0.19-winx64\data
# 允许最大连接数
max_connections=200
# 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统
max_connect_errors=10
# 服务端使用的字符集默认为UTF8
character-set-server=utf8
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
# 默认使用“mysql_native_password”插件认证
default_authentication_plugin=mysql_native_password
# 关闭ssl
skip_ssl
# 配置时区
default-time_zone='+8:00'
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8
[client]
# 设置mysql客户端连接服务端时默认使用的端口
port=3306
default-character-set=utf8
```

2.配置环境变量，将解压目录下的bin文件夹的路径配置到系统变量中的path下（F:\mysql-8.0.11-winx64\bin）

3.以管理员身份运行命令提示符

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/856176-20180428143824709-218907811.png)

如果顺利会产生下面的信息：

第4行的信息尤其重要，这是初始化密码，请拿笔或者截图记下，这个随机密码会很随机，随机到可能有一些符号；

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/856176-20180428143923105-1817069252.png)

提示：如果你关了这个窗口，或者没记住，那也没事，删掉初始化的 datadir 目录（就是解压文件夹下的data文件夹）里面的东西，不要删除data文件夹，再执行一遍初始化命令，又会重新生成的。

4.安装服务 mysqld --install 服务名（可以不写，默认是MySql,如果你的电脑上要安装付哦个mysql,这里的服务名写一下做区分），安装成功后控制它会提示：success ** (忘记了)

```
mysqld --install [服务名]
```

 5.启动服务（这时候不要去登录mysql,登录不进去的，必须要先启动）

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/856176-20180428144751212-1355452928.png)

 

6.登录mysql，当然是为了修改密码啊，那个随机密码鬼才能记得住，这时候也不要尝试用图形化管理工具（navicat for mysql）去登录，会报错的，继续往下看

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/856176-20180428145014478-776409826.png)

这里踩坑的小朋友一般是密码输错了，或者服务没启动，一直登录不进去。

 

7.修改密码

ALTER USER "root"@"localhost" IDENTIFIED BY "你的新密码";

 **注意：重点啊，如果你没有设置认证方式，默认的密码加密方式是：caching_sha2_password，而现在很多客户端工具还不支持这种加密认证方式，连接测试的时候就会报错：client does not support authentication protocol requested by server; consider upgrading MySQL client，这里的错误信息就是不支持身份认证方式，没关系，去my.ini里面在[mysqld]下面加上这句话即可：**

```
default_authentication_plugin=mysql_native_password
```

 

 8.打开远程访问

对于允许远程访问，有两种角色，一种是我们的root用户，还有一种是非root用户，从安全的角度（我也不知道什么角度，听别人说的，暂且相信着吧），远程访问最后不要用root用户

```
用root用户访问：
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%'IDENTIFIED BY '密码' WITH GRANT OPTION;
```

 

这里允许root用户远程的时候，如果出现如下的错误，就先去把root用的host改成%，再运行上面那句话，对于mysql用户管理这一块不熟悉的朋友们，请看我另一篇博客--mysql 用户及权限管理

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/856176-20180428150157767-1407082633.png)

 

非root用户，这里就要先去创建一个用户

```
切换数据库
mysql>use mysql;

创建用户(user1:用户名;%:任意ip,也可以指定，root默认就是localhost;123456：登录密码)
mysql>CREATE USER 'user1'@'%' IDENTIFIED BY '123456';

授权，默认创建的用户权限是usage,就是无权限，只能登录而已，（all：所有权限，这里有select,update等等权限，可以去搜一下；后面的*.*：指定数据库.指定表，这里是所有；to后面就是你刚才创建的用户）mysql>grant all on *.* to 'user1'@'%'；
注意:用以上命令授权的用户不能给其它用户授权,如果想让该用户可以授权,用以下命令: 
GRANT all ON databasename.tablename TO 'username'@'host' WITH GRANT OPTION; 
```

其他：

```sql
# 修改密码
ALTER USER 'test'@'localhost' IDENTIFIED WITH MYSQL_NATIVE_PASSWORD BY '新密码';

ALTER USER 'ynau'@'localhost' IDENTIFIED WITH MYSQL_NATIVE_PASSWORD BY '123456';

# 创建用户
CREATE USER 'ynau'@'%' IDENTIFIED BY '123456';

#授权
grant all on *.* to 'ynau'@'%';

#刷新：
flush privileges;

#重启mysql服务
service mysqld restart

#验证是否修改成功
mysql -u test -p
```

 