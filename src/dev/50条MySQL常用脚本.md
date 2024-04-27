---
author: xlc520
title: 50条MySQL常用脚本
excerpt: 50条MySQL常用脚本
description: 50条MySQL常用脚本
date: 2024-04-20
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# 50 条 MySQL 常用脚本

```sql
-- 1、插入数据
INSERT INTO example_table (name, age) VALUES ('Alice', 30);

-- 2、查询表中所有数据
SELECT * FROM example_table;

-- 3、使用 LIMIT 限制结果数量
SELECT * FROM example_table LIMIT 10;

-- 4、按条件筛选数据
SELECT * FROM example_table WHERE age > 25;

-- 5、更新数据
UPDATE example_table SET age = 35 WHERE name = 'Alice';

-- 6、删除数据
DELETE FROM example_table WHERE id = 5;

-- 7、排序结果
SELECT * FROM example_table ORDER BY age DESC;

-- 8、计算行数
SELECT COUNT(*) FROM example_table;

-- 9、求和
SELECT SUM(age) FROM example_table;

-- 10、连接表
SELECT a.id, a.name, b.age
FROM table1 a
JOIN table2 b ON a.id = b.id;

-- 11、使用别名
SELECT name AS full_name FROM example_table;

-- 12、使用通配符进行模糊查询
SELECT * FROM example_table WHERE name LIKE 'A%';

-- 13、使用 GROUP BY 分组数据
SELECT age, COUNT(*) FROM example_table GROUP BY age;

-- 14、使用 HAVING 进一步筛选分组数据
SELECT age, COUNT(*) FROM example_table
GROUP BY age
HAVING COUNT(*) > 1;

-- 15、使用子查询
SELECT * FROM example_table
WHERE age IN 
(SELECT age FROM other_table);

-- 16、使用 CASE 表达式进行条件操作
SELECT name,
CASE WHEN age > 30 
     THEN 'Old' ELSE 'Young' 
END AS age_group
FROM example_table;

-- 17、使用 JOIN 进行不同类型的连接
SELECT a.id, a.name, b.age
FROM table1 a
LEFT JOIN table2 b
ON a.id = b.id;

-- 18、创建索引以加快查询速度
CREATE INDEX idx_name ON example_table(name);

-- 19、优化查询性能
EXPLAIN SELECT * FROM example_table WHERE age > 25;

-- 20、备份数据库
mysqldump -u username -p database_name > backup.sql;

-- 21、使用 DISTINCT 去除重复行
SELECT DISTINCT name FROM example_table;

-- 22、使用 BETWEEN 进行范围查询
SELECT * FROM example_table
WHERE age BETWEEN 20 AND 30;

-- 23、使用 UPDATE 和 JOIN 更新关联表
UPDATE example_table a
JOIN other_table b ON a.id = b.id
SET a.age = b.age;

-- 24、使用 JOIN 和 COUNT 计算关联表中的记录数
SELECT a.id, COUNT(b.id) as count 
FROM table1 a
LEFT JOIN table2 b ON a.id = b.id
GROUP BY a.id;

-- 25、使用 LIMIT 和 OFFSET 实现分页功能
SELECT * FROM example_table
LIMIT 10 OFFSET 20;

-- 26、使用 IFNULL 处理空值
SELECT name, IFNULL(age, 'Unknown') FROM example_table;

-- 27、将查询结果导出为CSV文件
SELECT order_id, product_name, quantity
INTO OUTFILE '/var/lib/mysql-files/orders.csv'
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
FROM example_table;

-- 28、批量插入数据
INSERT INTO example_table (name, age)
VALUES ('Alice', 30), ('Bob', 25), ('Charlie', 35);

-- 29、使用 TRUNCATE 快速清空表数据
TRUNCATE TABLE example_table;

-- 30、使用 ROLLBACK 撤销未提交的更改
ROLLBACK;

-- 31、使用 UNION 合并多个查询的结果集并去重：
SELECT name FROM table1
UNION
SELECT name FROM table2;

-- 32、使用 CAST 或 CONVERT 转换数据类型：
SELECT CAST(age AS CHAR) FROM example_table;

-- 33、计算每个分组内的行的排名
SELECT name, age,
       RANK() OVER (PARTITION BY age ORDER BY name) as age_rank
FROM example_table;

-- 34、使用 SHOW CREATE TABLE 查看表结构
SHOW CREATE TABLE example_table;

-- 35、删除表中的重复行
DELETE n1
FROM example_table n1, example_table n2
WHERE n1.id > n2.id AND n1.name = n2.name;

-- 36、将查询结果作为表进行使用
SELECT * FROM 
(SELECT name FROM example_table) AS subquery_table;

-- 37、使用 LOAD DATA INFILE 导入数据到表格中：
LOAD DATA INFILE 'data.csv' 
INTO TABLE example_table
FIELDS TERMINATED BY ',' 
LINES TERMINATED BY '\n';

-- 38、在查询中使用正则表达式
SELECT * FROM example_table
WHERE name REGEXP '^A.*';

-- 39、使用 EXISTS 进行子查询检查
SELECT * FROM table1
WHERE EXISTS 
(SELECT 1 FROM table2
WHERE table1.id = table2.id);

-- 40、设置自动增量值的起始点
ALTER TABLE example_table AUTO_INCREMENT = 100;

-- 41、使用 CONCAT 合并列数据
SELECT CONCAT(name, ' is ', age, ' years old') AS description
FROM example_table;

-- 42、查找表中的最大值和最小值
SELECT MAX(age) AS max_age,
MIN(age) AS min_age
FROM example_table;

-- 43、在查询结果中使用变量
SET @row_number = 0;
SELECT (@row_number:=@row_number+1) AS row_num,
name 
FROM example_table;

-- 44、显示当前数据库中的所有表
SHOW TABLES;

-- 45、使用SHOW VARIABLES查看 MySQL 的配置变量：
SHOW VARIABLES LIKE 'version%';

-- 46、创建临时表并插入数据
CREATE TEMPORARY TABLE temp_table AS 
SELECT id, name FROM example_table
WHERE age > 30;

-- 47、修改表结构，添加新列
ALTER TABLE example_table
ADD COLUMN email VARCHAR(50);

-- 48、使用 GROUP_CONCAT 将多行值合并为单个字符串
SELECT id, GROUP_CONCAT(name) AS all_names
FROM example_table GROUP BY id;

-- 49、使用 TRIGGER 实现对表的操作触发器
CREATE TRIGGER example_trigger
BEFORE INSERT ON example_table
FOR EACH ROW 
SET NEW.age = NEW.age + 1
;

-- 50、监控数据库性能
SHOW PROCESSLIST;
```
