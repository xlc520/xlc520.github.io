---
author: xlc520
title: 使用docker快速安装oracle
description: 使用docker快速安装oracle
date: 2022-03-02
category: Java
tag: Java
article: true
timeline: true
icon: 
password: 
---

# 使用docker快速安装oracle

1.拉取镜像:

```sh
docker pull registry.cn-hangzhou.aliyuncs.com/helowin/oracle_11g
```

2.创建容器 

```sh
docker run -d -p 1521:1521 --name oracle11g registry.cn-hangzhou.aliyuncs.com/helowin/oracle_11g
```

3.进入镜像配置

```sh
docker exec -it oracle11g bash

su root;

密码:helowin
```

编辑环境变量:

```shell
vi /etc/profile
export ORACLE_HOME=/home/oracle/app/oracle/product/11.2.0/dbhome_2
export ORACLE_SID=helowin
export PATH=$ORACLE_HOME/bin:$PATH
```

创建软连接

```shell
ln -s $ORACLE_HOME/bin/sqlplus /usr/bin

source /etc/profile
```

切换到oracle 用户

`su - oracle`

登录sqlplus并修改sys、system用户密码

- 登录sqlplus

```sql
sqlplus /nolog

conn /as sysdba
```

- 接着更改用户密码

```sql
alter user system identified by system;

alter user sys identified by sys;
```

- 设置密码永不过期

```sql
ALTER PROFILE DEFAULT LIMIT PASSWORD_LIFE_TIME UNLIMITED;
```

- scott用户的开启

  SCOTT 是 ORACLE 内部的一个实例用户，下面有 emp、dept 等实例表，这些表和表间的关系演示了关系型数据库的一些基本原理。

```sql
alter user scott account unlock;
alter user scott identified by abc;
commit;
```

4.重启容器后就可以直接用了

```shell
docker restart oracle11g
```

现在可以用`system`用户连接,密码:`system`

