---
# 这是页面的图标
icon: page
# 这是文章的标题
title: 安装NodeJS-Maven-Mysql
# 设置作者
author: xlc520
# 设置写作时间
date: 2022-01-10
# 一个页面只能有一个分类
category: linux
# 一个页面可以有多个标签
tag:
  - NodeJS
  - Maven
  - Mysql
# 设置当前文章是否在列表中置顶，此页面会在文章列表指定
sticky: false
# 设置当前文章是否收藏在博客主题的文章列表中。当填入数字时，数字越大，排名越靠前。
# star: true
# 你可以自定义页脚
# footer: 这是测试显示的页脚
---
# 安装 NodeJS-Maven-Mysql

## 安装 NodeJS

litemall 的管理端和用户端的前端界面是由 Vue.js 开发，编译这两部分的时候需要用到 NodeJS 环境，以下操作将安装一个 NodeJS 环境。

1.  从淘宝镜像下载 NodeJS 的安装包。

```plain
wget https://npm.taobao.org/mirrors/node/v12.4.0/node-v12.4.0-linux-x64.tar.xz
```

2.  将下载的安装包解压到/usr/local/目录。

```plain
tar -xvf node-v12.4.0-linux-x64.tar.xz -C /usr/local/
```

3.  将 NodeJS 安装目录重命名。

```plain
mv /usr/local/node-v12.4.0-linux-x64/ /usr/local/node
```

4.  将 NodeJS 的可执行文件目录加入到系统环境变量中，并使用 source 命令使配置文件立即生效。

```plain
echo "export PATH=$PATH:/usr/local/node/bin" >> /etc/profile
source /etc/profile
```

5.   安装淘宝 cnpm 镜像。

```plain
npm install cnpm -g --registry=https://registry.npm.taobao.org
```

6.  安装 cross-env。

```plain
cnpm install -g cross-env
```

## 安装 Maven

1. 安装 OpenJDK1.8，litemall 要求 JDK 版本 1.8 以上

```plain
yum -y install java-1.8.0-openjdk-devel.x86_64
```

2. 下载 Maven 安装包。

```plain
wget --no-check-certificate https://mirror.bit.edu.cn/apache/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz
```

3. 将下载的安装包解压到/usr/local/目录，并将安装目录重命名。

```plain
tar -zxvf apache-maven-3.6.3-bin.tar.gz -C /usr/local/
mv /usr/local/apache-maven-3.6.3/ /usr/local/maven
```

4. 将 maven 的可执行文件目录加入到系统环境变量中，并使用 source 命令使/etc/profile 文件中的内容立即生效。

```plain
echo "export PATH=$PATH:/usr/local/maven/bin" >> /etc/profile
source /etc/profile
```

5. 执行以下命令打开镜像仓库配置文件，添加阿里云镜像仓库配置。

```plain
vim /usr/local/maven/conf/settings.xml
```

进入 Vim 编辑器页面后输入 `:/mirrors`，搜索并跳转到 `<mirrors>`标签的位置。
按下 n 键跳转到第二个没有被注释的标签位置。
按下 o 键，另起一行进行编辑，粘贴以下内容。

```shell
<mirror>
       <id>nexus-aliyun</id>
       <mirrorOf>central</mirrorOf>
       <name>Nexus aliyun</name>
       <url>http://maven.aliyun.com/nexus/content/groups/public</url>
</mirror>
```

按下 ECS 退出编辑模式，输入:wq保存并退出 Vim 编辑器。

经过自己测试，大部分是在最后一个搜索

其他源：

```xml
<mirrors>
    <mirror>
      <id>aliyunmaven</id>
      <mirrorOf>*</mirrorOf>
      <name>阿里云公共仓库</name>
      <url>https://maven.aliyun.com/repository/public</url>
    </mirror> 
    <mirror>
      <id>nexus-aliyun</id>
      <name>Nexus aliyun</name>
      <url>http://maven.aliyun.com/nexus/content/groups/public/</url> 
      <mirrorOf>*</mirrorOf> 
   </mirror>
    <mirror>
        <id>nexus-tencentyun</id>
        <mirrorOf>*</mirrorOf>
        <name>Nexus tencentyun</name>
        <url>http://mirrors.cloud.tencent.com/nexus/repository/maven-public/</url>
    </mirror> 
    <mirror>
        <id>huaweicloud</id>
        <mirrorOf>*</mirrorOf>
        <name>华为云</name>
        <url>https://repo.huaweicloud.com/repository/maven/</url>
    </mirror>
    <!-- JBoss的仓库 -->
    <mirror> 
      <id>jboss-public-repository-group</id> 
      <mirrorOf>central</mirrorOf> 
      <name>JBoss Public Repository Group</name> 
      <url>http://repository.jboss.org/nexus/content/groups/public</url> 
    </mirror>
    <!-- 剩下就是国外的了，maven官方运维的2号仓库 -->
    <mirror> 
      <id>repo2</id> 
      <name>Mirror from Maven Repo2</name> 
      <url>http://repo2.maven.org/maven2/</url> 
      <mirrorOf>central</mirrorOf> 
    </mirror>
 </mirrors>
```

## 安装 MySQL

1.  下载安装 MySQL 的 Yum 源。

```plain
wget http://dev.mysql.com/get/mysql57-community-release-el7-10.noarch.rpm
yum -y install mysql57-community-release-el7-10.noarch.rpm
```

2.  安装 mysql-server。

```plain
yum -y install mysql-community-server
```

3.  启动 mysql-server。

```plain
systemctl start mysqld.service
```

4.  修改默认密码。
a. 查询 root 密码。

```plain
grep "password" /var/log/mysqld.log
```

命令输出如下所示。

b. 使用查询到的密码登录到 mysql。

```plain
mysql -uroot -p
```

命令输出如下所示。

c. 修改密码安全策略为低（只校验密码长度，至少 8 位）。

```plain
set global validate_password_policy=0;
```

d.  修改密码。

```plain
alter user root@'localhost' identified by '12345678';
```

e.  授予 root 用户远程管理权限。

```plain
GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY '12345678';
```

f.  退出 MySQL 命令行。

```plain
quit
```

初始化数据库
参考以下步骤将商城项目的初始数据导入到数据库中。请将下面命令中的 12345678 修改为您设置的数据库密码。
1.  创建数据库和用户。

```plain
cd litemall && mysql -uroot -p12345678 < litemall-db/sql/litemall_schema.sql
```

2.  初始化数据库表结构。

```plain
mysql -uroot -p12345678 litemall < litemall-db/sql/litemall_table.sql
```

3.  插入测试数据。

```plain
mysql -uroot -p12345678 litemall < litemall-db/sql/litemall_data.sql
```
