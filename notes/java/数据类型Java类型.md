---
author: xlc520
title: 数据类型Java类型
description: Java数据类型和MySql数据类型对应表
date: 2022-03-03
category: Java
tag: Java
article: true
timeline: true
icon: 
password: 
---

# 数据类型Java类型

java mysql 数据类型对照



| **类型名称**  | **显示长度** | **数据库类型**            | **JAVA类型**             | **JDBC类型索引(int)** | **描述** |
| ------------- | ------------ | ------------------------- | ------------------------ | --------------------- | -------- |
| **VARCHAR**   | **L+N**      | **VARCHAR**               | **java.lang.String**     | **12**                |          |
| **CHAR**      | **N**        | **CHAR**                  | **java.lang.String**     | **1**                 |          |
| **BLOB**      | **L+N**      | **BLOB**                  | **java.lang.byte[]**     | **-4**                |          |
| **TEXT**      | **65535**    | **VARCHAR**               | **java.lang.String**     | **-1**                |          |
|               |              |                           |                          |                       |          |
| **INTEGER**   | **4**        | **INTEGER UNSIGNED**      | **java.lang.Long**       | **4**                 |          |
| **TINYINT**   | **3**        | **TINYINT UNSIGNED**      | **java.lang.Integer**    | **-6**                |          |
| **SMALLINT**  | **5**        | **SMALLINT UNSIGNED**     | **java.lang.Integer**    | **5**                 |          |
| **MEDIUMINT** | **8**        | **MEDIUMINT UNSIGNED**    | **java.lang.Integer**    | **4**                 |          |
| **BIT**       | **1**        | **BIT**                   | **java.lang.Boolean**    | **-7**                |          |
| **BIGINT**    | **20**       | **BIGINT UNSIGNED**       | **java.math.BigInteger** | **-5**                |          |
| **FLOAT**     | **4+8**      | **FLOAT**                 | **java.lang.Float**      | **7**                 |          |
| **DOUBLE**    | **22**       | **DOUBLE**                | **java.lang.Double**     | **8**                 |          |
| **DECIMAL**   | **11**       | **DECIMAL**               | **java.math.BigDecimal** | **3**                 |          |
| **BOOLEAN**   | **1**        | **同TINYINT**             |                          |                       |          |
|               |              |                           |                          |                       |          |
| **ID**        | **11**       | **PK (INTEGER UNSIGNED)** | **java.lang.Long**       | **4**                 |          |
|               |              |                           |                          |                       |          |
| **DATE**      | **10**       | **DATE**                  | **java.sql.Date**        | **91**                |          |
| **TIME**      | **8**        | **TIME**                  | **java.sql.Time**        | **92**                |          |
| **DATETIME**  | **19**       | **DATETIME**              | **java.sql.Timestamp**   | **93**                |          |
| **TIMESTAMP** | **19**       | **TIMESTAMP**             | **java.sql.Timestamp**   | **93**                |          |
| **YEAR**      | **4**        | **YEAR**                  | **java.sql.Date**        | **91**                |          |

对于bolb，一般用于对图片的数据库存储，原理是把图片打成二进制，然后进行的一种存储方式，在java中对应byte［］数组。

对于boolen类型，在mysql数据库中，个人认为用int类型代替较好，对bit操作不是很方便，尤其是在具有web页面开发的项目中，表示0/1，对应java类型的Integer较好。

 

decimal列的声明语法是decimal(m,d)。

在mysql5.1中，参数的取值范围： 
1、M是数字的最大数（精度）。其范围为1～65（在较旧的MySQL版本中，允许的范围是1～254）。 
2、D是小数点右侧数字的数目（标度）。其范围是0～30，但不得超过M。 
说明：float占4个字节，double占8个字节，decimail(M,D)占M+2个字节。 
如DECIMAL(5, 2) 的最大值为9 9 9 9 . 9 9，因为有7 个字节可用。 



| SQL数据类型                      | JDBC类型代码                           | 标准的Java类型         | Oracle扩展的Java类型          |
| :------------------------------- | :------------------------------------- | :--------------------- | :---------------------------- |
|                                  | 1.标准的JDBC类型:                     |                        |                               |
| `CHAR`                           | `java.sql.Types.CHAR`                  | `java.lang.String`     | `oracle.sql.CHAR`             |
| `VARCHAR2`                       | `java.sql.Types.VARCHAR`               | `java.lang.String`     | `oracle.sql.CHAR`             |
| `LONG`                           | `java.sql.Types.LONGVARCHAR`           | `java.lang.String`     | `oracle.sql.CHAR`             |
| `NUMBER`                         | `java.sql.Types.NUMERIC`               | `java.math.BigDecimal` | `oracle.sql.NUMBER`           |
| `NUMBER`                         | `java.sql.Types.DECIMAL`               | `java.math.BigDecimal` | `oracle.sql.NUMBER`           |
| `NUMBER`                         | `java.sql.Types.BIT`                   | `boolean`              | `oracle.sql.NUMBER`           |
| `NUMBER`                         | `java.sql.Types.TINYINT`               | `byte`                 | `oracle.sql.NUMBER`           |
| `NUMBER`                         | `java.sql.Types.SMALLINT`              | `short`                | `oracle.sql.NUMBER`           |
| `NUMBER`                         | `java.sql.Types.INTEGER`               | `int`                  | `oracle.sql.NUMBER`           |
| `NUMBER`                         | `java.sql.Types.BIGINT`                | `long`                 | `oracle.sql.NUMBER`           |
| `NUMBER`                         | `java.sql.Types.REAL`                  | `float`                | `oracle.sql.NUMBER`           |
| `NUMBER`                         | `java.sql.Types.FLOAT`                 | `double`               | `oracle.sql.NUMBER`           |
| `NUMBER`                         | `java.sql.Types.DOUBLE`                | `double`               | `oracle.sql.NUMBER`           |
| `RAW`                            | `java.sql.Types.BINARY`                | `byte[]`               | `oracle.sql.RAW`              |
| `RAW`                            | `java.sql.Types.VARBINARY`             | `byte[]`               | `oracle.sql.RAW`              |
| `LONGRAW`                        | `java.sql.Types.LONGVARBINARY`         | `byte[]`               | `oracle.sql.RAW`              |
| `DATE`                           | `java.sql.Types.DATE`                  | `java.sql.Date`        | `oracle.sql.DATE`             |
| `DATE`                           | `java.sql.Types.TIME`                  | `java.sql.Time`        | `oracle.sql.DATE`             |
| `TIMESTAMP`                      | `java.sql.Types.TIMESTAMP`             | `javal.sql.Timestamp`  | `oracle.sql.TIMESTAMP`        |
|                                  | 2.标准的JDBC类型:                     |                        |                               |
| `BLOB`                           | `java.sql.Types.BLOB`                  | `java.sql.Blob`        | `oracle.sql.BLOB`             |
| `CLOB`                           | `java.sql.Types.CLOB`                  | `java.sql.Clob`        | `oracle.sql.CLOB`             |
| 用户定义的对象                   | `java.sql.Types.STRUCT`                | `java.sql.Struct`      | `oracle.sql.STRUCT`           |
| 用户定义的参考                   | `java.sql.Types.REF`                   | `java.sql.Ref`         | `oracle.sql.REF`              |
| 用户定义的集合                   | `java.sql.Types.ARRAY`                 | `java.sql.Array`       | `oracle.sql.ARRAY`            |
|                                  | Oracle扩展:                            |                        |                               |
| `BFILE`                          | `oracle.jdbc.OracleTypes.BFILE`        | N/A                    | `oracle.sql.BFILE`            |
| `ROWID`                          | `oracle.jdbc.OracleTypes.ROWID`        | N/A                    | `oracle.sql.ROWID`            |
| `REF CURSOR`                     | `oracle.jdbc.OracleTypes.CURSOR`       | `java.sql.ResultSet`   | `oracle.jdbc.OracleResultSet` |
| `TIMESTAMP`                      | `oracle.jdbc.OracleTypes.TIMESTAMP`    | `java.sql.Timestamp`   | `oracle.sql.TIMESTAMP`        |
| `TIMESTAMP WITH TIME ZONE`       | `oracle.jdbc.OracleTypes.TIMESTAMPTZ`  | `java.sql.Timestamp`   | `oracle.sql.TIMESTAMPTZ`      |
| `TIMESTAMP WITH LOCAL TIME ZONE` | `oracle.jdbc.OracleTypes.TIMESTAMPLTZ` | `java.sql.Timestamp`   | `oracle.sql.TIMESTAMPLTZ`     |