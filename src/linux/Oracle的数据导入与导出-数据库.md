---
author: xlc520
title: Oracle的数据 导入与导出-数据库
description: 
date: 2022-06-29
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
password: 
---

# Oracle的数据 导入与导出-数据库

## 1 数据库导入导出需要注意

1.目标数据库要与源数据库有着名称相同的表空间。

2.目标数据在进行导入时，用户名尽量相同(这样保证用户的权限级别相同)。

3.目标数据库每次在进行数据导入前，应做好数据备份，以防数据丢失。

4.弄清是导入导出到相同版本还是不同版本(oracle10g 版本与 oracle11g 版本)。

5.目标数据导入前,弄清楚是数据覆盖(替换),还是仅插入新数据或替换部分数据表。

6.确定目标数据库磁盘空间是否足够容纳新数据，是否需要扩充表空间。

7.导入导出时注意字符集是否相同，一般 Oracle 数据库的字符集只有一个，并且固定，

一般不改变。

8.确定操作者的账号权限。

https://article.itxueyuan.com/2d0kg5

https://zhuanlan.zhihu.com/p/73851450

https://www.jb51.net/article/156826.htm

https://www.gxlcms.com/sql_question-400828.html

## 2 导出 数据 格式介绍

Dmp 格式：.dmp 是二进制文件，可跨平台，还能包含权限，效率好。

Sql 格式：.sql 格式的文件，可用文本编辑器查看，通用性比较好，效率不如第一种，

适合小数据量导入导出。尤其注意的是表中不能有大字段 （blob,clob,long），如果有，会

报错。

Pde 格式：.pde 格式的文件，.pde 为 PL/SQL Developer 自有的文件格式，只能用 PL/SQL

Developer 工具导入导出，不能用文本编辑器查看。

### 3 方式

#### **如果是docker 先登录：**

进入镜像进行配置

```shell
docker exec -it oracle11 bash
```

```shell
sqlplus /nolog
```

发现没有该命令，所以切换root用户。

```shell
su root 
```

输入密码：helowin

编辑profile文件配置ORACLE环境变量

打开：vi /etc/profile ，在文件最后写上下面内容：

```shell
export ORACLE_HOME=/home/oracle/app/oracle/product/11.2.0/dbhome_2
export ORACLE_SID=helowin
export PATH=$ORACLE_HOME/bin:$PATH
```

保存后执行`source /etc/profile` 加载环境变量；

创建软连接

```shell
ln -s $ORACLE_HOME/bin/sqlplus /usr/bin
```

切换到oracle 用户

```shell
su - oracle
```

登录sqlplus并修改sys、system用户密码

```sql
sqlplus /nolog   --登录
conn /as sysdba  --
alter user system identified by system;--修改system用户账号密码；
alter user sys identified by system;--修改sys用户账号密码；
create user test identified by test; -- 创建内部管理员账号密码；
grant connect,resource,dba to yan_test; --将dba权限授权给内部管理员账号和密码；
ALTER PROFILE DEFAULT LIMIT PASSWORD_LIFE_TIME UNLIMITED; --修改密码规则策略为密码永不过期；（会出现坑，后面讲解）
alter system set processes=1000 scope=spfile; --修改数据库最大连接数据；
```

修改以上信息后，需要重新启动数据库；

```shell
conn /as sysdba
shutdown immediate; --关闭数据库
startup; --启动数据库
exit：退出软链接
```

#### 命令格式

exp|imp 用 户 名 / 密 码 @ 连 接 地 址 : 端 口 / 服 务 名 file= 路 径 / 文 件 名 .dmp

full=y|tabels(tablename,tablename...)|owner(username1,username2,username3)

exp:导出命令，导出时必写。

imp:导入命令，导入时必写,每次操作，二者只能选择一个执行。

username:导出数据的用户名，必写;

password:导出数据的密码，必写;

@:地址符号，必写;

SERVICENAME:Oracle 的服务名，必写;

1521:端口号，1521 是默认的可以不写,非默认要写;

file="文件名.dmp" : 文件存放路径地址，必写;

full=y :表示全库导出。可以不写，则默认为 no,则只导出用户下的对象;

tables:表示只导出哪些表;

owner:导出该用户下对象;

full|tables|owner:只能使用一种;

#### ***1、传统方法：***

**dmp文件的导出**

首先,我们先了解dmp文件的导出

dmp文件导出一般用的比较多的是三种,分别是: 导出整个数据库实例的所有数据,导出指定用户的所有的表,导出指定表.

我们以自己的数据库为例,假设我们的数据库的实例为"Oracle"

可以通过"任务管理器---->服务"中查看自己的数据库实例  

一般信息是 已启用 自动 本地系统

打开cmd命令行 : 

1: 将数据库Oracle完全导出,用户名system密码manager导出到 c:daochu.dmp中 

```sql
exp system/manager@Oracle file=c:daochu.dmp full=y
```



2: 将数据库中RFD用户与,JYZGCX用户的表导出

```sql
exp system/manager@ORACLE file=d:daochu.dmp owner=(RFD,JYZGCX)
```



3: 将数据库中的表T_USER,T_ROLE导出

　system为用户名，manager为密码，ORACLE为数据库实例名，其实不一定非的用system用户，只要是拥有管理员权限的用户都可以

```sql
exp JYZGCX/JYZGCX@Oracle file = d:datanewsmgnt.dmp tables = (T_USER,T_ROLE)
```

```sql
--备份某几张表  ！！！！
exp smsc/smsc file=/data/oracle_bak/dmp/bakup0209_2.dmp tables=\(send_msg_his,send_msg,recv_msg_his,recv_msg\)
--备份整个数据库 ！！！！
--方式1
exp smsc/smsc file=/data/oracle_bak/dmp/bakupsmmc0209_2.dmp full=y
--方式2
exp cop/cop@133.96.84.39:1521/coprule file=/home/oracle/cop_20160902.dmp owner=cop log=/home/oracle/cop.log
--本机上
exp zop/zop@orcl file= D:\zop_bak.dmp owner=zop log=D:\zop_ba.log
```



**dmp文件的导入**　

步骤如下: 

机器环境是windows7,其实也无所谓,命令行不都是样的么

\1. 打开"开始" --->输入cmd,打开cmd命令窗口,输入: sqlplus/as sysdba; 然后使用conn / as sysdba;这样就可以以超级管理员的最高权限登录,当然这决定于init.ora文件中的数据库初始化参数.

\2. 上面sysdba登录后,就可以创建表空间和用户了. 

　　(打开"开始"-->输入cmd-->sqlplus/nolog; 输入conn/as sysdba 管理员账户登录;)

由于我们已经有dmp文件了,可以用notepad++ 打开dmp文件,进去按ctrl+f 去查找tablespace,可以找到这个dmp文件对应的表空间,然后根据表空间的信息去创建表空间,这样才能导入dmp文件.

 然后就是创建表空间,命令如下:

```sql
create tablespace USERS

logging

datefile 'D:oracleproduct10.2.0oradataorclUSERS.dnf'

size 32m

autoxtend onnext 32m maxsize 2048m

extend management local;
```

　创建test用户,密码也是test222,使用上面创建的表空间

```sql
create user test identifiles by test222

 default tablespace USERS
```

　给创建的test用户分配权限,为了方便可以直接分配dba权限

`grant dba to test;`

　这样一来,我们前期的准备工作就完成了,然后就可以关掉刚刚的命令窗口了.

  打开"开始" --->输入cmd(是cmd窗口不是sqlplus窗口)

由于上面的步骤中,创建了test用户,所以我们往test用户去导入数据

直接输入如下的语句:

```sql
imp test/test222@localhost/orcl file="C:UsersxiejiachenDesktoptest20190630.DMP" full =y;
```

 下面解释一下上面的语句:

　　test是上面创建的登录数据库的用户名

　　test222是上面的登录数据库的密码

　　localhost: 代表你的数据库是本机还是远程导入,需要的可以随时替换ip地址

　　orcl: 是实例的名称

　　file: 后面是你的dmp的文件路径

　　full=y : 全部导入

以上就是oracle数据库导出和导入dmp文件的两种方法.　　　

 ```sql
 --数据的导入
 --1 将D:\daochu.dmp 中的数据导入 TEST数据库中。
  imp system/manager@TEST file=d:\daochu.dmp
  imp aichannel/aichannel@TEST full=y file=d:\datanewsmgnt.dmp ignore=y
 --上面可能有点问题，因为有的表已经存在，然后它就报错，对该表就不进行导入。
 -- 在后面加上 ignore=y 就可以了。
 --2 将d:daochu.dmp中的表table1 导入
 imp system/manager@TEST file=d:\daochu.dmp tables=(table1)
 --基本上上面的导入导出够用了。不少情况要先是将表彻底删除，然后导入。
 注意：
 操作者要有足够的权限，权限不够它会提示。
 数据库时可以连上的。可以用tnsping TEST 来获得数据库TEST能否连上。
 ```



####  2、数据泵方法：

创建directory:

```sql
expdp(impdp) username/password@SERVICENAME:1521 
schemas=username dumpfile=file1.dmp logfile=file1.log 
directory=testdata1 remap_schema=test:test;
```

数据库导出举例:

```sql
expdp xinxiaoyong/123456@127.0.0.1:1521 schemas=xinxiaoyong dumpfile=test.dmp 

logfile=test.log directory=testdata1;
```

```sql
exp:导出命令，导出时必写。
imp:导入命令，导入时必写,每次操作，二者只能选择一个执行。
username:导出数据的用户名，必写;
password:导出数据的密码，必写;
@:地址符号，必写;
SERVICENAME:Oracle的服务名，必写;
1521:端口号，1521是默认的可以不写,非默认要写;
schemas：导出操作的用户名;
dumpfile：导出的文件;
logfile:导出的日志文件,可以不写；
directory:创建的文件夹名称;
remap_schema=源数据库用户名:目标数据库用户名,二者不同时必写，相同可以省略;
```

1.查看表空间：

`select ＊　from dba_tablespaces;`

2.查看管理理员目录(同时查看操作系统是否存在，因为Oracle并不关心该目录是否存在，如果不存在，则出错)。

`select ＊　from dba_directories;`

3.创建逻辑目录，该命令不会在操作系统创建真正的目录，最好以system等管理员创建。 

`create directory testdata1 as 'd:testdump';`

4.给xinxiaoyong用户赋予在指定目录的操作权限，最好以system等管理员赋予。
//xinxiaoyong 是用户名(123456是用户密码)

`grant read,write on directory testdata1 to xinxiaoyong;`


5.导出数据

1)按用户导 

```sql
expdp xinxiaoyong/***123456***@orcl schemas=xinxiaoyong dumpfile=expdp.dmp directory=testdata1;
```



2)并行进程

```sql
parallel expdp xinxiaoyong/***123456***@orcl 
directory=testdata1 dumpfile=xinxiaoyong3.dmp parallel=***40*** job_name=xinxiaoyong3
```



3)按表名导 

```sql
expdp xinxiaoyong/***123456***@orcl tables=emp,dept dumpfile=expdp.dmp directory=testdata1;
```



4)按查询条件导 

```sql
expdp xinxiaoyong/***123456***@orcl 
directory=testdata1 dumpfile=expdp.dmp tables=emp query='WHERE deptno=20';
```



5)按表空间导 

```sql
expdp system/manager directory=testdata1 dumpfile=tablespace.dmp tablespaces=temp,example;
```



6)导整个数据库 

```sql
expdp system/manager directory=testdata1 dumpfile=full.dmp FULL=y;
```



 6.还原数据
1)导到指定用户下

```sql
 impdp xinxiaoyong/***123456*** directory=testdata1 dumpfile=expdp.dmp schemas=xinxiaoyong;
```

2)改变表的

```sql
owner impdp system/manager 
directory=testdata1 dumpfile=expdp.dmp tables=xinxiaoyong.dept remap_schema =xinxiaoyong:system;
```

3)导入表空间 

```sqal
impdp system/manager directory=testdata1 dumpfile=tablespace.dmp tablespaces=example;
```

4)导入数据库 

```sql
impdb system/manager directory=dump_dir dumpfile=full.dmp FULL=y;
```

5)追加数据 

```sql
impdp system/manager 
directory=testdata1 dumpfile=expdp.dmp schemas=system table_exists_action;
```

#### 3、PLSQL方法：

 登录plsql工具，所使用用户为源数据库有导出权限（exp_full_database,dba等）的用户。

  1.导出建表语句（包括存储结构） 

  导出步骤tools ->export user object，选择要导出的对象，导出.sql格式文件并等待导出完成，如 下图：

 ![image-20220620092932901](https://static.xlc520.ml/blogImage/image-20220620092932901.png)

导出数据文件 ;
   2.导出步骤tools ->export tables，选择要导出的表及导出的格式进行导出。 

   导出为dmp格式，如下图：

![image-20220620092943308](https://static.xlc520.ml/blogImage/image-20220620092943308.png)

导出为sql格式，如下图： 

![image-20220620092949353](https://static.xlc520.ml/blogImage/image-20220620092949353.png)

导出为pde格式，如下图： 

![image-20220620092954469](https://static.xlc520.ml/blogImage/image-20220620092954469.png)

 提示说明：采用第三方工具导出导入整个数据库的话，耗时较长，一定要有足够

 的时间来操作(数据量大的话需要好几个小时)。

 

3.导入建表语句 
   导入步骤tools->import tables->SQL Inserts 导入.sql文件 
4.导入数据； 
   tools->import talbes，然后再根据导出的数据格式选择导入dmp文件，或者sql文件，
或者pde文件。 
   提示说明：导入之前最好把以前的表删除，当然导入另外数据库除外。 
      另外导入时当发现进度条一直卡在一个点，而且导出的文件不再增大时，甚至是提示程序
未响应，千万不要以为程序卡死了，这个导入导出就是比较缓慢，只要没有提示报错，

或者导入完成就不要停止程序。