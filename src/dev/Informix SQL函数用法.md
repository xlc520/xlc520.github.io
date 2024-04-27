---
author: xlc520
title: Informix SQL函数用法
description: Informix SQL函数用法
date: 2024-04-19
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# Informix SQL函数用法

一、内部函数
　 1、内部合计函数
　　　 1）COUNT（*）　　　　　　　　　　返回行数
　　　 2）COUNT（DISTINCT COLNAME）　　 返回指定列中唯一值的个数
　　　 3）SUM（COLNAME/EXPRESSION）　　 返回指定列或表达式的数值和；
　　　 4）SUM（DISTINCT COLNAME）　　　 返回指定列中唯一值的和
　　　 5）AVG（COLNAME/EXPRESSION）　　 返回指定列或表达式中的数值平均值
　　　 6）AVG（DISTINCT COLNAME）　　　 返回指定列中唯一值的平均值
　　　 7）MIN（COLNAME/EXPRESSION）　　 返回指定列或表达式中的数值最小值
　　　 8）MAX（COLNAME/EXPRESSION）　　 返回指定列或表达式中的数值最大值
　 2、日期与时间函数
　　　 1）DAY（DATE/DATETIME EXPRESSION）　　　返回指定表达式中的当月几号
　　　 2）MONTH（DATE/DATETIME EXPRESSION）　　返回指定表达式中的月份
　　　 3）YEAR（DATE/DATETIME EXPRESSION）　　 返回指定表达式中的年份
　　　 4）WEEKDAY（DATE/DATETIME EXPRESSION）　返回指定表达式中的当周星期几
　　　 5）DATE（NOT DATE EXPRESSION）　　　　　返回指定表达式代表的日期值
　　　 6）TODAY　　　　　　　　　　　　　　　　返回当前日期的日期值
　　　 7）CURRENT[first to last]　　　　　　　 返回当前日期的日期时间值
　　　 8）COLNAME/EXPRESSION UNITS PRECISION　 返回指定精度的指定单位数
　　　 9）MDY（MONTH，DAY，YEAR）　　　　　　　返回标识指定年、月、日的日期值
　　　 10）DATETIME（DATE/DATETIME EXPRESSION）FIRST TO LAST 返回表达式代表的日期时间值
　　　 11）INTERVAL（DATE/DATETIME EXPRESSION）FIRST TO LAST 返回表达式代表的时间间隔值
　　　 12）EXTEND（DATE/DATETIME EXPRESSION，[first to last]）返回经过调整的日期或日期时间值

　　　 例子1、和UNITS合用，指定日期或时间单位(year,month,day,hour,minute,seond,fraction)：
　　　　　　　let tmp_date = today + 3 UNITS day
　　　 例子2、let tmp_date = MDY(10,30,2002)　　– 2002-10-30
　　　 例子3、let tmp_date = today + interval(7) day to day　–当前时间加上7天；
　　　　　　　注：该功能与1相似；
　　　 例子4、EXTEND转换日期或日期时间值
　　　　　　　let tmp_inthour = extend(datetime1,hour to hour)

　 3、代数函数
　　　1）ABS(COLNAME/EXPRESSION)：　　　　　　 取绝对值
　　　2）MOD（COLNAME/EXPRESSION，DIVISOR）　　返回除以除数后的模（余数）
　　　3）POW（COLNAME/EXPRESSION，EXPONENT）　 返回一个值的指数冥
　　　　 例子：let tmp_float = pow(2,3)　–8.00000000

　　　4）ROOT（COLNAME/EXPRESSION，[index]）　 返回指定列或表达式的根值

　　　5）SQRT（COLNAME/EXPRESSION）　　　　　　返回指定列或表达式的平方根值

　　　6）ROUND（COLNAME/EXPRESSION，[factor]） 返回指定列或表达式的圆整化值
　　　7）TRUNC（COLNAME/EXPRESSION，[factor]） 返回指定列或表达式的截尾值
　　　　 说明：上两者中FACTOR指定小数位数，若不指定，则为0；若为负数，则整化到小数点左边；
　　　　 注：ROUND是在指定位上进行4舍5入；TRUNC是在指定位上直接截断；
　　　　　let tmp_float = round(4.555,2) –4.56
　　　　　let tmp_float = trunc(4.555,2) –4.55

　 4、指数与对数函数
　　　1）EXP（COLNAME/EXPRESSION）　　　　返回指定列或表达式的指数值
　　　2）LOGN（COLNAME/EXPRESSION）　　　 返回指定列或表达式的自然对数值
　　　3）LOG10（COLNAME/EXPRESSION）　　　返回指定列或表达式的底数位10的对数值

　 5、三角函数
　　　1）COS（RADIAN EXPRESSION）　　　　　返回指定弧度表达式的余弦值
　　　2）SIN（RADIAN EXPRESSION）　　　　　正弦
　　　3）TAN（RADIAN EXPRESSION）　　　　　正切
　　　4）ACOS（RADIAN EXPRESSION）　　　　 反余弦
　　　5）ASIN（RADIAN EXPRESSION）　　　　 反正弦
　　　6）ATAN（RADIAN EXPRESSION）　　　　 反正切
　　　7）ATAN2（X，Y）　　　　　　　　　　 返回坐标（X，Y）的极坐标角度组件

　 6、统计函数
　　　1）RANGE（COLNAME）　　　 返回指定列的最大值与最小值之差 = MAX（COLNAME）-MIN（COLNAME）
　　　2）VARIANCE（COLNAME）　　返回指定列的样本方差；
　　　3）STDEV（COLNAME）　　　 返回指定列的标准偏差；

　 7、其他函数
　　　1）USER　　　　　　　　　　　　　　返回当前用户名
　　　2）HEX（COLNAME/EXPRESSION）　　　 返回指定列或表达式的十六进制值
　　　3）LENGTH（COLNAME/EXPRESSION）　　返回指定字符列或表达式的长度
　　　4）TRIM（COLNAME/EXPRESSION）　　　删除指定列或表达式前后的字符
　　　5）COLNAME/EXPRESSION || COLNAME/EXPRESSION　返回并在一起的字符；

二、IDS内部函数
　 1、DBSERVERNAME　　　返回数据库服务器名　let tmp_char=DBSERVERNAME
　 2、SITENAME　　　　　返回数据库服务器名　let tmp_char=SITENAME
　　　说明：两者功能相同；

　 3、DBINFO（‘SPECIAL_KEYWORD’)　　　返回只关键字值
　　　例子1：返回数据中每个表的DBSPACE名称
　　　　 select dbinfo(‘dbspace’,partnum),tabname from systables
　　　　　where tabid>99 and tabtype=’T'　(OK)
　　　例子2：返回任何表中插入的最后一个SERIAL值
　　　　　select dbinfo(’sqlca.sqlerrd1′) from systables where tabid = 1
　　　例子3：返回最后一个SELECT，INSERT，UPDATE，DELETE或EXECUTE PROCEDURE语句处理的行数；
　　　　　select dbinfo(’sqlca.sqlerrd2′) from systables where tabid=1;