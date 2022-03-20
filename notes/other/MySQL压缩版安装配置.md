---
author: xlc520
title: MySQL压缩版安装配置
description: MySQL压缩版安装配置
date: 2022-01-24
category: other
tag: other
article: true
timeline: true
icon: 
password: 
---
# MySQL压缩版安装配置

## 1 下载

官网：https://www.mysql.com/
最新版下载地址：https://dev.mysql.com/downloads/mysql/
多版本下载地址：https://downloads.mysql.com/archives/community/
在这里，我使用的是MySQL8.0.19解压缩版，附上下载链接：https://cdn.mysql.com/archives/mysql-8.0/mysql-8.0.19-winx64.zip

此时的MySQL版本已经更新到8.0.23，所以我需要进入多版本链接进行下载。

**注意：**

- 旧版本中存在漏洞
- ![image-20220115155838758](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/image-20220115155838758.png)

## 2 安装

1.我们提前创建好解压目录：

找到刚才下载的压缩包，复制到我们上一步创建的解压目录下：

右键进行解压，解压后的目录如下图所示：

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDU3NzU0Mw.png)

接下来创建我们的数据库文件存放位置，这里我在mysql解压目录的同级目录下创建了`databases`文件夹，作为数据库存放目录

接下来进行初始化安装：
用管理员身份打开cmd命令，并进入到mysql解压目录下的bin目录，如：`D:\ProgramFiles\MySQL8\bin`

**2、创建一个名为my.ini的文件：**

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/ZmFuZ3poZW5naGVpdGk.png)

 **3、修改my.ini文件：**

```sql
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8
[mysqld]
# 设置3306端口
port = 3306
# 设置mysql的安装目录
basedir = D:\\Program Files\\mysql\\
# 设置mysql数据库的数据的存放目录
datadir = D:\\Program Files\\mysql\\data
# 允许最大连接数
max_connections=20
# 服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server=utf8
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
# 创建模式
sql_mode = NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES



[mysqld]
# 设置服务端使⽤用的字符集为utf-8
character-set-server=utf8
# 绑定IPv4地址
bind-address = 127.0.0.1
# 设置mysql的端⼝口号
port = 3306
# 设置mysql的安装⽬目录
basedir=D:/ProgramFiles/MySQL8
# 设置mysql数据库的数据的存放⽬目录
datadir=D:/ProgramFiles/MySQL8/data
# 允许最⼤大连接数
max_connections=20
# 创建新表时将使⽤用的默认存储引擎
default-storage-engine=INNODB
default-time_zone='+8:00'
# 设置mysql以及数据库的默认编码
[mysql]
default-character-set=utf8
[mysql.server]
default-character-set=utf8
# 设置客户端默认字符集
[client]
default-character-set=utf8
```

**特别要注意：**

（1）D:\\Program Files\\mysql\\data 这个目录一定要是“\\”，千万别弄成“\”不然会报错，或者可以用“/”；
（2）Mysq安装目录和数据存放目录一定要修改为你自己设定的目录，除非你设置的目录与上述一致。

## 3.配置

3.用管理员身份打开cmd窗口：win -> windows系统 -> 右击命令提示符 -> 更多 -> 以管理员身份运行

4.进入到bin目录下

 5.执行 `mysqld --install` 命令安装（执行 `mysqld --remove` 卸载安装）

6.继续执行 `mysqld --initialize --user=root --console` 命令

注意：初始化完成后MySQL会给root用户创建一个默认随机密码，下图白色部分就是密码，同时在data目录下也添加了相关的配置文件，如果密码有字符辨识不了，则把date目录下的文件都删了，重新执行这一步。

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/1780812-20190829212537656-1187829463.png)

 7.执行`net start mysql`启动服务（执行`net stop mysql`关闭服务）

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/1780812-20190829212232857-537058421.png)

 

 8.执行`mysql -uroot -pqLBiVku7k%f`登录MySQL（-u后面是用户名，-p后面是密码，即上面的默认随机密码）

 9.修改密码

mysql版本是7:

`set password = password('root');`

注意：如果mysql版本是8或以上，则使用 alter user 'root'@'localhost' identified by '新的密码'; 修改密码

`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';`
这样我们就可以将`roo`t账户的密码修改为`123456`了，将`123456`处替换为你们要修改的密码，回车执行就可以了。

12.登录MySQL后可以添加一个用户

添加格式：

grant 权限 on 数据库.表 to 用户名@'IP地址' identified by '密码'

实例：

`grant all on *.* to test@'%' identified by'test'`

## 4 安装错误提示

### 提示

安装过程中如果出现以下错误，是我们的电脑缺少运行时环境。
**注：**在这里我们有出现这种情况，但为了以防万一，还是给大家说一下，这里的图片用的网图，如有侵权，请评论删图！

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/20200131203311761.png)

解决办法：
下载vcruntime140_1.dll，链接：https://cn.dll-files.com/vcruntime140_1.dll.html

![在这里插入图片描述](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/16422331874666.png)
下载完成后，解压提取文件，将提取出来的`vcruntime140_1.dll`文件复制到我们的`C:\Windows\System32`
![在这里插入图片描述](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/16422331874677.png)
**注意, 32位版本的`vcruntime140_1.dll`需要复制到`C:\Windows\SysWOW64`下**



### tips2：

mysqld –initialize-insecure自动生成无密码的root用户；
mysqld –initialize自动生成带随机密码的root用户；
mysqld -remove移除自己的mysqld服务；
net stop mysql命令，停止mysql服务
如果报错，清空data文件夹，最好还是删掉data文件，重新执行remove--initialize--install--start（这些不是命令）流程即可；





## 5 配置mysql的环境变量

```vbnet
MYSQL_HOME

D:\Program Files\mysql
```

 ![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/20200303112518670.png)

点击Path，增加：

```python
%MYSQL_HOME%\bin;
```

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/20190831112741174.png)

