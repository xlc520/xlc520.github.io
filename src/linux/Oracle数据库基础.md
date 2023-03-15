---
author: xlc520
title: Oracle数据库基础
description: 
date: 2022-06-28
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
---

# Oracle数据库基础

**数据字典**，数据库元数据信息的数据字典表和用户可以读取的数据字典视图组成。存放oracle数据库所用的有关信息。通过数据字典可以查看数据表和用户的一些信息。

**数据文件**，一个oracle数据可以拥有一个或多个物理的数据文件，一个数据文件只对于一个数据库

**表空间**，存储的逻辑结构，是组织数据和进行空间分配的逻辑结构。简单点，表空间就是一个或者多个数据文件的集合，所有的数据文件都被逻辑的存放在指定的表空间中。通常有system 、sysaux、 temp三个默认表空间。

**系统用户**：sys，system，sysman，scott默认密码tigger，

**系统用户登入SQLplus**：[system/123456][@server/ip][as sysdba/sysoper]管理员权限，@server/ip，数据库不在本机，需要输入IP。

**登入用户命令**：connect sys/123456 as sysdba；connect system/123456

**查看当前登入用户**：show user

**使用数据字典来查看信息**：含有的字典有dba_users、user_users、dba_tablespaces，user_tablespaces(普通用户表空间)

可以使用desc来查看数据字典都有些什么字段， desc dba_users，之后可以使用select语句查看具体的记录。可以查看某个用户默认的表空间。

**启用用户的语句**：alter user username account unlock。比如启动scoot用户alter user scott account unlock；这样就可以使用scott用户登入系统。

## **表空间**

这是数据库的逻辑存储空间，在数据库中开辟的一个空间来存储数据，oracle的很多优化都是通过表空间来实现的。表都是放在表空间的数据文件里面。

一个形象的比喻：在一个房间里面这个房间可以存储很多箱子，箱子里面可以存储物品！ 表空间可以看成房间，箱子可以看成数据文件物品可以看成表。 用户指定表空间也就是你希望把属于这个用户的表放在那个房间（表空间）里面。
表空间是一个虚拟的概念可以无限大，但是需要由数据文件作为载体。

**为什么要创建表空间？**

答：在建立用户的时候，我们建议数据库管理员要指定用户的默认表空间。因为我们在利用CREATE语句创建数据库对象，如数据库表的时候，其默认是存储在数据库的当前默认空间。若不指定用户默认表空间的话，则用户每次创建数据库对象的时候，都要指定表空间，显然，这并不是很合理。不同的表空间有不同的权限控制。用户对于表空间A具有完全控制权限，可能对于表空间B就只有查询权限，甚至连连接的权限的都没有。所以，合理为用户配置表空间的访问权限，也是提高数据库安全性的一个方法。

**修改用户默认的表空间（管理员权限）**：alter user username default | temporary tablespace tablename.

**创建表空间**：create [temporary] tablespace tablename tempfile | datafile 'xxx.dbf' size xx； (默认目录下)

**如何查看默认路径**：通过数据字典dba_data_files；临时表空间dba_temp_files

select file_name from dba_data_files where tablesopace_name='XXX.dbf'

设置表空间联机或脱机状态(无法使用表空间)，创建好表空间后默认是联机状态：alter tablespace tablename online | offline；

**设置表空间的只读或者只写**：alter tablespace tablename read only | write only | read write;

**如何查看表空间所处的状态**：通过status字段（dba_tablespaces）select statue from dba_tablespaces where tablespace_name='XXX.dbf';

**为表空间添加数据文件**：alter tablespace tablename add datafile 'xxx.dbf' size xx；可以从字典dba_data_files中file_name字段查看当前表空间的数据文件。

**删除表空间的数据文件**：alter tablespace tablename drop datafile 'xxx.dbf' ；不能删除第一条

**删除表空间**：drop tablespace tablename [ including contents ] 如果只是删除表空间就直接使用drop。如果需要将表空间里面的文件也删除，就使用including。

**创建用户**：create user 用户名 identified by 密码 default tablespace 表空间表；

**接着授权给新建的用户：**
grant connect,resource to news; --表示把 connect,resource权限授予news用户
​grant dba to news; --表示把 dba权限授予给news用户

## **表**

存储数据的基本单位，表是一个二维结构，行列。数据类型：字符型、日期型、数值型、其他类型。

**字符型**：char(n)、nchar(n)，固定的数据类型，如果没有达到N那么就自动补空格。

varchar2(n)、nvarchar2(n)，可变的数据类型，可以节省空间

**数值型**：number（p,s）p有效数字，s小数点后的位数。float（）二进制。number（6，0）表示6位整数

**日期型**：date

**其他类型**：blob、clob，存储4GB的数据

**创建表：**create tabel table_name ( colum1_name datatype，colum2_name datatype **default 默认值** )；

**查看表结构**：desc table_name

**修改表**：alert table tablename add column_name datatype； 增加字段

alert table tablename modify column_name datatype；修改数据类型

alert table tablename drop column column_name ；删除字段

alert table tablename rename column column_oldname to column_newname；修改字段的名字

rename table_oldname to table_newname ；修改表名

**删除表**：truncate table table_name；截断表中的数据，执行后，表字段在，但内容不在。

drop table table_name ；彻底删除表

操作表中的数据

**添加数据**：insert into table_name [(column1, column2,....)] values(value1,value2,...)

alert table tablename modify column_name default 默认值

**复制表的数据**：create table table_name **as** select column1,... from other_tablename ； 复制表中的内容

insert into table_name [(column1, column2,....)] select column1,* from table_old

**更新数据**： update table_name set column1=value1,...[where conditions]

**删除数据**：delete from table_name ; 删除全部数据和truncate一样，但是truncate效率高。

有条件删除，上面加上where子句。

## **约束**

作用定义规则，那些字段是一定需要输入的，那些字段是需要唯一的等等，这样可以确保数据的完整性。

**非空约束**：not null 在数据类型之后添加即可。id number(6,0) not null

alert table tablename **modify** column_name datatype null ; 将非空的改为可以为空

**主键约束**：可以为一个字段，也可以是多个字段称为复合主键 primary key

create table name(column1,..., constraint keyname primary key(column1,column2))；复合约束

如果忘记了约束的名字，可以在**数据字典user_constraints**里面查看

alert table tablename add constraint keyname primary key(column1,column2))；表创建好后添加主键

alert table tablename rename constraint oldname to new_name；更改约束名字

**删除约束**：alert table tablename disable | enable constaint name；禁用主键约束

alert table tablename drop constraint name

alert table tablename drop primary key [cascade]

**外键约束**：alert table table1name (column_name datatype references table2name(column_name),..);

table2是主表，table1为从表，table2的column因为主键，对应字段的类型要一样。从表中的值来源于主表或者为空。

(add)constraint constraint_name foreign key(column) references table_name(column_name) [on delete cascade]

例子：create table userinfo (

id varchar(10),

name varchar(10),

typeid_new varchar(20) references typeid(typeid) on delete cascade

);

**唯一约束**：unique，在字段名后加就可以，跟default使用一样的。

constraint constraint_name unique（column_name）

**检查约束**：create table userinfo (

salary number(5,0) check( salary>0 )

);

在SQLplus中可以使用以下语句更改显示的字段名、格式等：

col column_name heading new_name； 显示的名字

col column_name format a10； 更改字符型字段的长度，更改为10个字符长；

col column_name format 99; 更改数值型的显示位数，两位，保留一位小数99.9，也可以加上$

col column_name clear ；清楚之前设置的格式

## **查询**

对原表不会有影响，只是对查询结果有影响

select [distinct] column_name as newname

from table

[where ]

order by column1 desc/asc, column2

order by对查询结果进行排序

group by 对查询结果进行分组，以汇总数据或者整个分组显示单行的汇总信息，在结果中每组数据都有一个与之对应的统计值（count、min、max、sum、avg）。计算每个username的平均分数，group by username。

select job_id, avg(salary), sum(salary),count(*) from employees group by job_id；最后结果上会显示出4列

**rollup**：在结果上增加一行，汇总各列信息，group by rollup(job_id)

having子句是对分组后的结果进行进一步的筛选，having是作用在组上面的。对having子句作用的理解就是记住select语句中子句的处理顺序，在select语句中，首先由from子句找到数据表，where子句接受from子句输出的数据，而having子句则接受来自group by 、where和from子句的输出。

逻辑运算符的优先级：not、and、or

模糊查询：like、_（任意一个字符）、%（任意多个值）、

以a开头的：where like 'a%'

含有a的用户名：where like '%a%'

case..when.：select username ,case when username ='aaa' then 计算机部门',

when 'bbb' then '市场部门' else '其他部门' end as 部门

from users;

判断某列的值是否为null：column is NULL/is NOT NULL

## **多表查询**

from table1 join_type table2 [on(join_condition)]

join_type有内连接（inner join），自然连接（natural join）、外连接。

**内连接**：需要指定连接的条件，只返回符合条件和连接条件的行，消除不匹配的行。

**自然连接**：第一个表中的那些列与第二表中具有相同名称的列进行连接，bU需要明确指出进行连接的列。

**外连接**：扩展内连接的结果集，出返回匹配的结果集，还会返回不匹配的结果集。外连接有以下几种

**左外连接**（left [outer] join）：显示左表中不匹配的行，满足where条件但不与右表匹配的行

**右外连接**（right [outer] join）：显示右表中不匹配的行，满足where条件但不与左表匹配的行

**全外连接**（full [outer] join）：显示所有符合搜索条件的行

`grant <权限>，<权限> [on<对象类型><对象名>] to <用户> [with admin option](可以授予给他人)`