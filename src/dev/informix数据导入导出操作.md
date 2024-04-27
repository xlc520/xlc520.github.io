---
author: xlc520
title: informix数据导入导出操作
excerpt: 
description: 
date: 2023-04-06
category: Java
tag: 
- Java
- informix
article: true
timeline: true
icon: java
---

# informix 数据导入导出操作

## 1.表数据导出

> 可以采用在 dbaccess 工具环境直接输入
>
> 进入对应数据库：dbaccess database

- **单表数据导出：（可导出 3 种不同的格式）**

```sql
unload to fileName.txt select * from tableName

unload to ‘fileName.dmp’ select * from tableName;

unload to /opt/informix/fileName.csv delimiter "," select * from tableName;
```

- **导出前十行数据：**

```sql
unload to /home/informix/fileName.csv  delimiter "," select  first 10 * from tableName;
```

注意：其中的 delimiter 是用来定义分隔符的，分隔符默认是"| " 但是也可以写为" ，"

## 2.表数据导入

- **单个表数据导入**

```sql
load from table1.txt insert into table1;
load from /home/informix/lihewei/crbt_userringset.txt insert into crbt_userringset;
```

- **批量导入：(方法一)**

```sql
-- 第一步：编写命令文件/home/informix/load.txt
FILE table1.txt DELIMITER '|' 3;(此处的数字为表各中对应的字段数目)
INSERT INTO table1;
FILE table2.txt DELIMITER '|' 3;(此处的数字为表各中对应的字段数目)
INSERT INTO table2;
FILE table3.txt DELIMITER '|' 3;(此处的数字为表各中对应的字段数目)
INSERT INTO table3;

-- 第二步：通过输入如下的dbload命令批量的导入三个表格数据：
dbload -d database(数据库名字) -c /home/informix/load.txt -l aaa(随便输入的日志名字)
```

- **批量导入：(方法二)**

```sql
-- 第一步：编写导入脚步（load.sql）
load from table1.txt DELIMITER '|' INSERT INTO table1;
load from table2.txt DELIMITER '|' INSERT INTO table2;
load from table3.txt DELIMITER '|' INSERT INTO table3;

-- 第二步：在dbaccess工具环境下直接输入
dbaccess databaseName < load.sql
```

## 3.表结构导出

- **备份整个数据库的表结构：**

```sql
dbschema -d database > database.sql
```

- **导出某个数据表的表结构**

```sql
dbschema -d your_database_name -t your_table_name xxx.sql
```

注意： -d 表示导出整个数据库的表结构，-t 表示导出某一个数据表的表结构。

## 4.informix 新建/删除表结构

- **创建表，执行导出的 sql 脚本（xxx.sql 为 3 中导出的表结构）**

```sql
dbaccess 数据库名 xxx.sql
```

- **删除表数据**

```sql
delete from tableName;
truncate table tableName;
```

**truncate:**

1. truncate 在使用时，不能加 where 条件。
2. truncate 执行操作时，**速度更快 且 不可回滚**；是因为：TRUNCATE 操作不会记录到事务日志中，而 DELETE
   操作会记录到事务日志中，记录日志会耗时，所以 TRUNCATE 要快于 DELETE 且 truncate 不可回滚。
3. truncate 删除表数据是：先删除整张表包括数据，再重新创建表，因此，若果表中有自增长，**会把自增长 id 重置成 1 开始**。 delete
   删除表数据时， 每次从表中删除一行。
4. 表和索引所占空间。 当表被 TRUNCATE 后，这个表和索引所占用的空间会恢复到初始大小，而 DELETE 操作不会减少表或索引所占用的空间。drop
   语句将表所占用的空间全释放掉。
5. 应用范围。TRUNCATE 只能对 TABLE；DELETE 可以是 table 和 view
6. truncate、drop 是 DLL（data define language),操作立即生效，不会记录到事务日志中去
7. **在没有备份情况下，谨慎使用 drop 与 truncate**。要删除部分数据行采用 delete 且注意结合 where 来约束影响范围

## 5.informix 存储过程执行流程

- **informix 存储过程执行流程**

（1）登录到数据库 informix 目录下；
（2）上传存储过程 sync_user.sql;
（3）执行命令 dbaccess 数据库名 sync_user.sql；
（4）执行命令`echo 'execute procedure crbt_sync_user_ability()' | dbaccess` 数据库名;

```sql
- **绑定存储过程**
  dbaccess database sync_user.sql

- **删除绑定的存储过程**
  drop procedure crbt_sync_user_ability

- **执行存储过程中的方法（在dbaccess中执行）**
  execute procedure crbt_sync_user_ability()
```
