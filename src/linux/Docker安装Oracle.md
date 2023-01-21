---
author: xlc520
title: Docker安装Oracle
description: 
date: 2022-08-17
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
password: 
---

# Docker安装Oracle

## 通过Docker 安装 Oracle11g

### 1. 背景

`Oracle` 作为全球最强大的关系型数据库，应用在各行各业。但是在 `Linux` 中安装 `Oracle` 非常麻烦，为了一次装好，也方便将来直接可以导出镜像在各平台移植使用，所以选择用 `Docker` 安装，并做详细记录，方便今后参考。

### 2. 安装

#### 前期准备

 **Docker安装**

```sh
#升级yum
sudo yum update  

#卸载旧版本
sudo yum remove docker  docker-common docker-selinux docker-engine  

#安装依赖  
sudo yum install -y yum-utils device-mapper-persistent-data lvm2  

#设置源  
sudo yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo   

# 更新yum缓存
yum makecache fast

# 安装Docker
yum -y install docker-ce

# 启动
systemctl start docker

# 查看是否启动成功
docker info

# 开机自启
systemctl enable docker

# Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the d
systemctl restart docker  #重启一下就行

# 在下载镜像前，需要设置一下国内源，用来提高下载速度
sudo vim /etc/docker/daemon.json

# 配置
{  
    "registry-mirrors": ["https://d7grpode.mirror.aliyuncs.com"]  
}

# 重启
sudo systemctl restart docker
```

安装成功界面

![在这里插入图片描述](https://static.xlc520.ml/blogImage/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA56iL5bqP54y_55qEQ29kZeaXpeW4uA==,size_20,color_FFFFFF,t_70,g_se,x_16.png)

#### 2.1. 环境准备

- CentOs 7.0
- Docker 环境

```txt
Client: Docker Engine - Community
 Version:           20.10.17
 API version:       1.41
 Go version:        go1.17.11
 Git commit:        100c701
 Built:             Mon Jun  6 23:05:12 2022
 OS/Arch:           linux/amd64
 Context:           default
 Experimental:      true

Server: Docker Engine - Community
 Engine:
  Version:          20.10.17
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.17.11
  Git commit:       a89b842
  Built:            Mon Jun  6 23:03:33 2022
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.6.6
  GitCommit:        10c12954828e7c7c9b6e0ea9b0c02b01407d3ae1
 runc:
  Version:          1.1.2
  GitCommit:        v1.1.2-0-ga916309
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0

```

#### 2.2. 搜索镜像

```linux
docker search oracle_11g
```

`Oracle` 镜像文件比较大，请检查自己磁盘空间。此处用一个博主上传的镜像，来演示。

![20220726155418](https://static.xlc520.ml/blogImage/55b32c05eba117fc562fc792bc4f4e48.png)

#### 2.3. 拉取镜像

```linux
docker pull registry.cn-hangzhou.aliyuncs.com/helowin/oracle_11g
```

#### 2.4. 磁盘挂载

在 `CentOs` 宿主机构建一个目录用来存储 `Oracle` 的数据。

```linux
mkdir -p /data/oracle10g
```

![20220726160152](https://static.xlc520.ml/blogImage/e2f1c073cd96b5c22c9816a356040be3.png)

### 3. 容器操作

#### 3.1. 创建容器

```linux
docker run  -itd -p 1521:1521 --name oracle --restart=always --mount source=oracle_vol,target=/home/oracle/app/oracle/oradata registry.aliyuncs.com/helowin/oracle_11g
```

备注：此处改为 `Shell` 脚本，可以重复使用。

```shell
docker rm -f oracle10g;
docker run -it -d -p 1521:1521 -v /data/oracle10g:/data/oracle --name oracle10g klwang/oracle10g
```

#### 3.2. 进入容器

```linux
docker exec -it oracle bash
```

#### 3.3. 环境设置

此时 `sqlplus` 是不可以用的，需要配置一下环境变量。

![20220726163736](https://static.xlc520.ml/blogImage/9a34b3e6187fe82094f7098c412e6d04.png)

切换回到容器中的 `root` 用户，密码为 `helowin` 。

#### 3.3.1. 编辑环境变量

优化冒泡排序和选择排序zip
![img](https://static.xlc520.ml/blogImage/star.png)

0星超过10%的资源595KB

![img](https://static.xlc520.ml/blogImage/arrowDownWhite.png)

```shell
vi /etc/profile
```

添加如下变量。

```shell
export ORACLE_HOME=/home/oracle/app/oracle/product/11.2.0/dbhome_2
export ORACLE_SID=helowin
export PATH=$ORACLEHOME/bin:PATH
```

保存后，将环境变量生效。

```shell
source /etc/profile 
```

#### 3.3.2. 添加软连接

```linux
ln -s $ORACLE_HOME/bin/sqlplus /usr/bin
```

#### 3.3.3. 切换到oracle用户

```linux
su - oracle
```

#### 3.4. 登录oracle

```linux
sqlplus /nolog   --登录
conn /as sysdba
```

![20220726194234](https://static.xlc520.ml/blogImage/406b808f765627beab8bc6268aa7a23f.png)

#### 3.5. Oracle操作

#### 3.5.1. 修改sys、system用户密码

```sql
alter user system identified by system ;--修改system用户账号密码；
alter user sys identified by sys ;--修改sys用户账号密码；
```

冒泡排序和选择法排序的源代码
![img](https://static.xlc520.ml/blogImage/star.png)

![img](https://static.xlc520.ml/blogImage/arrowDownWhite.png)

#### 3.5.2. 添加和授权用户

```sql
create user test identified by test; -- 创建内部管理员账号密码；
grant connect,resource,dba to test; --将dba权限授权给内部管理员账号和密码；
ALTER PROFILE DEFAULT LIMIT PASSWORD_LIFE_TIME UNLIMITED; --设置密码永不过期：
alter system set processes=1000 scope=spfile; --修改数据库最大连接数据；
```

#### 3.5.3. 查询

```sql
show parameter password
```

![20220726194511](https://static.xlc520.ml/blogImage/9be1155ed596594ade6034c40f6aba5e.png)

#### 3.5.4. 检查用户

```sql
select * from v$pwfile_users;
```

![20220726194528](https://static.xlc520.ml/blogImage/8f47412dc3c4e984f0a9833d6af75204.png)

#### 3.6. 重启服务

```sql
conn /as sysdba;--保存数据库
shutdown immediate; --关闭数据库
startup; --启动数据库
show user;
```

![20220726194844](https://static.xlc520.ml/blogImage/0fc4a051c1a40e4f9bbc034534553497.png)

### 4. 远程登录

- HOST: $HOST
- POST: 1521
- SID: helowin
- User: test
- PassWord：test

![20220726194951](https://static.xlc520.ml/blogImage/90628c41e2934c62baf062d8cf60f3ed.png)





## 通过Docker 安装Oracle12C

```yaml
version: "3.6"
# https://hub.docker.com/r/wangpengcheng
services:
  oracle12:
    container_name: oracle12
    image: wangpengcheng/oracle12c-enterprise:12.2.0.1-sys
    environment:
      - ORACLE_ALLOW_REMOTE=true
      - ORACLE_PDB=ORCLPDB1
      - ORACLE_SID=ORCLCDB
      - ORACLE_PASSWORD=123456
      - ORACLE_PWD=123456
      - ORACLE_MEM=1000
      - ORACLE_CHARACTERSET=AL32UTF8
    ports:
      - 1523:1521
      - 5503:5500
    volumes:
      - /root/oracle/oradata:/opt/oracle/oradata
    restart: unless-stopped
    privileged: true

```



## 通过Docker 安装 Oracle18c

1、拉取 oracle18c 镜像
```sh
docker pull registry.cn-hangzhou.aliyuncs.com/zhengqing/oracle18c
```
2、运行
```sh
docker run -d --name oracle18c -p 1521:1521 -v /IT_zhengqing/soft/db/oracle18c/data:/opt/oracle registry.cn-hangzhou.aliyuncs.com/zhengqing/oracle18c
```
运行之后查看容器日志



## 通过Docker 安装 Oracle19c

### 第一种

```yaml
version: "3.6"
services:
  oracle19:
    container_name: oracle19
    image: dsinnovators/oracle-ee:19.3.0.2
    #image: banglamon/oracle193db:19.3.0-ee
    environment:
      - ORACLE_ALLOW_REMOTE=true
      - ORACLE_PDB=ORCLPDB
      - ORACLE_SID=ORCLCDB
      - ORACLE_PASSWORD=12345678
      - ORACLE_PWD=12345678
      - ORACLE_EDITION=enterprise
      - ORACLE_MEM=1024
      - INIT_SGA_SIZE=1024
      - INIT_PGA_SIZE=1024
      - ORACLE_CHARACTERSET=AL32UTF8
      - TZ=Asia/Shanghai
    ports:
      - 1523:1521
      - 5503:5500
    volumes:
      - /root/oracle/oradata:/opt/oracle/oradata
    restart: unless-stopped
    privileged: true

```

### 第二种

```sh'# 下载镜像
docker pull registry.cn-hangzhou.aliyuncs.com/zhuyijun/oracle:19c
```

![在这里插入图片描述](https://static.xlc520.ml/blogImage/2031bd4759e54c4c9dd4249ab2e29eee.png)

### 第二步：创建挂载文件

```sh
# 创建文件
mkdir -p /root/oracle19/oradata

# 授权，不授权会导致后面安装失败
chmod 777 /root/oracle19/oradata
```

### 第三步：安装Oracle

1、安装oracle，并把配置挂载到本地文件

```sh
docker run -d  \
-p 1524:1521 -p 5502:5500 \
-e ORACLE_SID=ORCL \
-e ORACLE_PDB=ORCLPDB \
# 此处是oracle密码
-e ORACLE_PWD=123456 \
-e ORACLE_EDITION=standard \
-e ORACLE_CHARACTERSET=AL32UTF8 \
-v /root/oracle19/oradata:/opt/oracle/oradata \
--name orcl19 \
registry.cn-hangzhou.aliyuncs.com/zhuyijun/oracle:19c
```

或者使用`docker-compose.yml`

```sh
cd /root/oracle19
vim docker-compose.yml
```

文件内容为：

```yaml
version: "3.6"

services:
  oracle19:
    container_name: oracle19
    image: registry.cn-hangzhou.aliyuncs.com/it-boy/oracle19c:latest
    #image: registry.cn-hangzhou.aliyuncs.com/zhuyijun/oracle:19c
    environment:
      - ORACLE_ALLOW_REMOTE=true
      - ORACLE_PDB=ORCLPDB
      - ORACLE_SID=ORCL
      - ORACLE_PWD=123456
      - ORACLE_EDITION=standard
      - ORACLE_MEM=1000
      - ORACLE_CHARACTERSET=AL32UTF8
    ports:
      - 1523:1521
      - 5503:5500
    volumes:
      - /root/oracle19/oradata:/opt/oracle/oradata
    restart: unless-stopped

```

### 启动

```sh
docker-compose up
或者
docker-compose up -d
```

查看oracle是否安装成功

```sh
# 查看启动日志
docker logs -ft orcl19
```

![在这里插入图片描述](https://static.xlc520.ml/blogImage/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA56iL5bqP54y_55qEQ29kZeaXpeW4uA==,size_20,color_FFFFFF,t_70,g_se,x_16-16607879142541.png)

> 注意：
> 如果安装失败 ,执行以下命令
> docker stop orcl19c_03
> docker rm orcl19c_03

### 第四步：连接Oracle

```sh
docker exec -it orcl19 /bin/bash

sqlplus / as sysdba

show pdbs;
```

这样就可以了

![在这里插入图片描述](https://static.xlc520.ml/blogImage/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA56iL5bqP54y_55qEQ29kZeaXpeW4uA==,size_16,color_FFFFFF,t_70,g_se,x_16.png)

还可以通过访问https://localhost:5502/em

![img](https://static.xlc520.ml/blogImage/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA56iL5bqP54y_55qEQ29kZeaXpeW4uA==,size_20,color_FFFFFF,t_70,g_se,x_16-16607879142552.png)

```
username：sys
password：123456
Container Name：ORCLPDB
```

![在这里插入图片描述](https://static.xlc520.ml/blogImage/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA56iL5bqP54y_55qEQ29kZeaXpeW4uA==,size_20,color_FFFFFF,t_70,g_se,x_16-16607879142553.png)

**注意 ：是https，不是http**



## 关于Oracle12C默认用户名system密码不正确登录不上解决方案

解决方案：

1.使用sysdba账号 登陆后 可以修改其他账号密码

运行 cmd 按如下输入命令 

```sql
以sys登陆 超级用户（sysdba）

sqlplus / as sysdba 
````

2.解除锁定账号

alter user 用户名 account unlock; --------- 解除锁定(必须带“;”号)

以system用户名为例，即命令为

```sql
alter user system account unlock;
```

3.为该账户设置新密码

alter user 用户名 identified by 密码; -------------修改密码（密码加不加双引号均可，必须带“;”号）

以用户名system密码dhee为例，即命令为

```sql
alter user system identified by dhee;
```

如果可以登录任意的一个用户可以通过一下方法来知道当前有哪些用户。
查看当前用户。

```sql
select distinct owner from all_objects 
```

如果你在安装的时候没有设置密码的话

oracle有三个默认的用户名和密码

1.用户名:sys密码:change_on_install

2.用户名:system密码:manager

3.用户名:scott密码:tiger

