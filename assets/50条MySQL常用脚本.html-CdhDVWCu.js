import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as e}from"./app-BRQZ0-Iq.js";const p={},t=e(`<h1 id="_50-条-mysql-常用脚本" tabindex="-1"><a class="header-anchor" href="#_50-条-mysql-常用脚本"><span>50 条 MySQL 常用脚本</span></a></h1><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token comment">-- 1、插入数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> example_table <span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;Alice&#39;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 2、查询表中所有数据</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> example_table<span class="token punctuation">;</span>

<span class="token comment">-- 3、使用 LIMIT 限制结果数量</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> example_table <span class="token keyword">LIMIT</span> <span class="token number">10</span><span class="token punctuation">;</span>

<span class="token comment">-- 4、按条件筛选数据</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> example_table <span class="token keyword">WHERE</span> age <span class="token operator">&gt;</span> <span class="token number">25</span><span class="token punctuation">;</span>

<span class="token comment">-- 5、更新数据</span>
<span class="token keyword">UPDATE</span> example_table <span class="token keyword">SET</span> age <span class="token operator">=</span> <span class="token number">35</span> <span class="token keyword">WHERE</span> name <span class="token operator">=</span> <span class="token string">&#39;Alice&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 6、删除数据</span>
<span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> example_table <span class="token keyword">WHERE</span> id <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>

<span class="token comment">-- 7、排序结果</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> example_table <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> age <span class="token keyword">DESC</span><span class="token punctuation">;</span>

<span class="token comment">-- 8、计算行数</span>
<span class="token keyword">SELECT</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> example_table<span class="token punctuation">;</span>

<span class="token comment">-- 9、求和</span>
<span class="token keyword">SELECT</span> <span class="token function">SUM</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token keyword">FROM</span> example_table<span class="token punctuation">;</span>

<span class="token comment">-- 10、连接表</span>
<span class="token keyword">SELECT</span> a<span class="token punctuation">.</span>id<span class="token punctuation">,</span> a<span class="token punctuation">.</span>name<span class="token punctuation">,</span> b<span class="token punctuation">.</span>age
<span class="token keyword">FROM</span> table1 a
<span class="token keyword">JOIN</span> table2 b <span class="token keyword">ON</span> a<span class="token punctuation">.</span>id <span class="token operator">=</span> b<span class="token punctuation">.</span>id<span class="token punctuation">;</span>

<span class="token comment">-- 11、使用别名</span>
<span class="token keyword">SELECT</span> name <span class="token keyword">AS</span> full_name <span class="token keyword">FROM</span> example_table<span class="token punctuation">;</span>

<span class="token comment">-- 12、使用通配符进行模糊查询</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> example_table <span class="token keyword">WHERE</span> name <span class="token operator">LIKE</span> <span class="token string">&#39;A%&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 13、使用 GROUP BY 分组数据</span>
<span class="token keyword">SELECT</span> age<span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> example_table <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> age<span class="token punctuation">;</span>

<span class="token comment">-- 14、使用 HAVING 进一步筛选分组数据</span>
<span class="token keyword">SELECT</span> age<span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> example_table
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> age
<span class="token keyword">HAVING</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">-- 15、使用子查询</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> example_table
<span class="token keyword">WHERE</span> age <span class="token operator">IN</span> 
<span class="token punctuation">(</span><span class="token keyword">SELECT</span> age <span class="token keyword">FROM</span> other_table<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 16、使用 CASE 表达式进行条件操作</span>
<span class="token keyword">SELECT</span> name<span class="token punctuation">,</span>
<span class="token keyword">CASE</span> <span class="token keyword">WHEN</span> age <span class="token operator">&gt;</span> <span class="token number">30</span> 
     <span class="token keyword">THEN</span> <span class="token string">&#39;Old&#39;</span> <span class="token keyword">ELSE</span> <span class="token string">&#39;Young&#39;</span> 
<span class="token keyword">END</span> <span class="token keyword">AS</span> age_group
<span class="token keyword">FROM</span> example_table<span class="token punctuation">;</span>

<span class="token comment">-- 17、使用 JOIN 进行不同类型的连接</span>
<span class="token keyword">SELECT</span> a<span class="token punctuation">.</span>id<span class="token punctuation">,</span> a<span class="token punctuation">.</span>name<span class="token punctuation">,</span> b<span class="token punctuation">.</span>age
<span class="token keyword">FROM</span> table1 a
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> table2 b
<span class="token keyword">ON</span> a<span class="token punctuation">.</span>id <span class="token operator">=</span> b<span class="token punctuation">.</span>id<span class="token punctuation">;</span>

<span class="token comment">-- 18、创建索引以加快查询速度</span>
<span class="token keyword">CREATE</span> <span class="token keyword">INDEX</span> idx_name <span class="token keyword">ON</span> example_table<span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 19、优化查询性能</span>
<span class="token keyword">EXPLAIN</span> <span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> example_table <span class="token keyword">WHERE</span> age <span class="token operator">&gt;</span> <span class="token number">25</span><span class="token punctuation">;</span>

<span class="token comment">-- 20、备份数据库</span>
mysqldump <span class="token operator">-</span>u username <span class="token operator">-</span>p database_name <span class="token operator">&gt;</span> <span class="token keyword">backup</span><span class="token punctuation">.</span><span class="token keyword">sql</span><span class="token punctuation">;</span>

<span class="token comment">-- 21、使用 DISTINCT 去除重复行</span>
<span class="token keyword">SELECT</span> <span class="token keyword">DISTINCT</span> name <span class="token keyword">FROM</span> example_table<span class="token punctuation">;</span>

<span class="token comment">-- 22、使用 BETWEEN 进行范围查询</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> example_table
<span class="token keyword">WHERE</span> age <span class="token operator">BETWEEN</span> <span class="token number">20</span> <span class="token operator">AND</span> <span class="token number">30</span><span class="token punctuation">;</span>

<span class="token comment">-- 23、使用 UPDATE 和 JOIN 更新关联表</span>
<span class="token keyword">UPDATE</span> example_table a
<span class="token keyword">JOIN</span> other_table b <span class="token keyword">ON</span> a<span class="token punctuation">.</span>id <span class="token operator">=</span> b<span class="token punctuation">.</span>id
<span class="token keyword">SET</span> a<span class="token punctuation">.</span>age <span class="token operator">=</span> b<span class="token punctuation">.</span>age<span class="token punctuation">;</span>

<span class="token comment">-- 24、使用 JOIN 和 COUNT 计算关联表中的记录数</span>
<span class="token keyword">SELECT</span> a<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span>b<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token keyword">as</span> count 
<span class="token keyword">FROM</span> table1 a
<span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> table2 b <span class="token keyword">ON</span> a<span class="token punctuation">.</span>id <span class="token operator">=</span> b<span class="token punctuation">.</span>id
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> a<span class="token punctuation">.</span>id<span class="token punctuation">;</span>

<span class="token comment">-- 25、使用 LIMIT 和 OFFSET 实现分页功能</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> example_table
<span class="token keyword">LIMIT</span> <span class="token number">10</span> <span class="token keyword">OFFSET</span> <span class="token number">20</span><span class="token punctuation">;</span>

<span class="token comment">-- 26、使用 IFNULL 处理空值</span>
<span class="token keyword">SELECT</span> name<span class="token punctuation">,</span> IFNULL<span class="token punctuation">(</span>age<span class="token punctuation">,</span> <span class="token string">&#39;Unknown&#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> example_table<span class="token punctuation">;</span>

<span class="token comment">-- 27、将查询结果导出为CSV文件</span>
<span class="token keyword">SELECT</span> order_id<span class="token punctuation">,</span> product_name<span class="token punctuation">,</span> quantity
<span class="token keyword">INTO</span> <span class="token keyword">OUTFILE</span> <span class="token string">&#39;/var/lib/mysql-files/orders.csv&#39;</span>
<span class="token keyword">FIELDS</span> <span class="token keyword">TERMINATED</span> <span class="token keyword">BY</span> <span class="token string">&#39;,&#39;</span>
<span class="token keyword">ENCLOSED</span> <span class="token keyword">BY</span> <span class="token string">&#39;&quot;&#39;</span>
<span class="token keyword">LINES</span> <span class="token keyword">TERMINATED</span> <span class="token keyword">BY</span> <span class="token string">&#39;\\n&#39;</span>
<span class="token keyword">FROM</span> example_table<span class="token punctuation">;</span>

<span class="token comment">-- 28、批量插入数据</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> example_table <span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>
<span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">&#39;Alice&#39;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> <span class="token number">25</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token string">&#39;Charlie&#39;</span><span class="token punctuation">,</span> <span class="token number">35</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 29、使用 TRUNCATE 快速清空表数据</span>
<span class="token keyword">TRUNCATE</span> <span class="token keyword">TABLE</span> example_table<span class="token punctuation">;</span>

<span class="token comment">-- 30、使用 ROLLBACK 撤销未提交的更改</span>
<span class="token keyword">ROLLBACK</span><span class="token punctuation">;</span>

<span class="token comment">-- 31、使用 UNION 合并多个查询的结果集并去重：</span>
<span class="token keyword">SELECT</span> name <span class="token keyword">FROM</span> table1
<span class="token keyword">UNION</span>
<span class="token keyword">SELECT</span> name <span class="token keyword">FROM</span> table2<span class="token punctuation">;</span>

<span class="token comment">-- 32、使用 CAST 或 CONVERT 转换数据类型：</span>
<span class="token keyword">SELECT</span> CAST<span class="token punctuation">(</span>age <span class="token keyword">AS</span> <span class="token keyword">CHAR</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> example_table<span class="token punctuation">;</span>

<span class="token comment">-- 33、计算每个分组内的行的排名</span>
<span class="token keyword">SELECT</span> name<span class="token punctuation">,</span> age<span class="token punctuation">,</span>
       RANK<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">OVER</span> <span class="token punctuation">(</span><span class="token keyword">PARTITION</span> <span class="token keyword">BY</span> age <span class="token keyword">ORDER</span> <span class="token keyword">BY</span> name<span class="token punctuation">)</span> <span class="token keyword">as</span> age_rank
<span class="token keyword">FROM</span> example_table<span class="token punctuation">;</span>

<span class="token comment">-- 34、使用 SHOW CREATE TABLE 查看表结构</span>
<span class="token keyword">SHOW</span> <span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> example_table<span class="token punctuation">;</span>

<span class="token comment">-- 35、删除表中的重复行</span>
<span class="token keyword">DELETE</span> n1
<span class="token keyword">FROM</span> example_table n1<span class="token punctuation">,</span> example_table n2
<span class="token keyword">WHERE</span> n1<span class="token punctuation">.</span>id <span class="token operator">&gt;</span> n2<span class="token punctuation">.</span>id <span class="token operator">AND</span> n1<span class="token punctuation">.</span>name <span class="token operator">=</span> n2<span class="token punctuation">.</span>name<span class="token punctuation">;</span>

<span class="token comment">-- 36、将查询结果作为表进行使用</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> 
<span class="token punctuation">(</span><span class="token keyword">SELECT</span> name <span class="token keyword">FROM</span> example_table<span class="token punctuation">)</span> <span class="token keyword">AS</span> subquery_table<span class="token punctuation">;</span>

<span class="token comment">-- 37、使用 LOAD DATA INFILE 导入数据到表格中：</span>
<span class="token keyword">LOAD</span> <span class="token keyword">DATA</span> <span class="token keyword">INFILE</span> <span class="token string">&#39;data.csv&#39;</span> 
<span class="token keyword">INTO</span> <span class="token keyword">TABLE</span> example_table
<span class="token keyword">FIELDS</span> <span class="token keyword">TERMINATED</span> <span class="token keyword">BY</span> <span class="token string">&#39;,&#39;</span> 
<span class="token keyword">LINES</span> <span class="token keyword">TERMINATED</span> <span class="token keyword">BY</span> <span class="token string">&#39;\\n&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 38、在查询中使用正则表达式</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> example_table
<span class="token keyword">WHERE</span> name <span class="token operator">REGEXP</span> <span class="token string">&#39;^A.*&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 39、使用 EXISTS 进行子查询检查</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span> <span class="token keyword">FROM</span> table1
<span class="token keyword">WHERE</span> <span class="token keyword">EXISTS</span> 
<span class="token punctuation">(</span><span class="token keyword">SELECT</span> <span class="token number">1</span> <span class="token keyword">FROM</span> table2
<span class="token keyword">WHERE</span> table1<span class="token punctuation">.</span>id <span class="token operator">=</span> table2<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 40、设置自动增量值的起始点</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> example_table <span class="token keyword">AUTO_INCREMENT</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>

<span class="token comment">-- 41、使用 CONCAT 合并列数据</span>
<span class="token keyword">SELECT</span> CONCAT<span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token string">&#39; is &#39;</span><span class="token punctuation">,</span> age<span class="token punctuation">,</span> <span class="token string">&#39; years old&#39;</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> description
<span class="token keyword">FROM</span> example_table<span class="token punctuation">;</span>

<span class="token comment">-- 42、查找表中的最大值和最小值</span>
<span class="token keyword">SELECT</span> <span class="token function">MAX</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token keyword">AS</span> max_age<span class="token punctuation">,</span>
<span class="token function">MIN</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span> <span class="token keyword">AS</span> min_age
<span class="token keyword">FROM</span> example_table<span class="token punctuation">;</span>

<span class="token comment">-- 43、在查询结果中使用变量</span>
<span class="token keyword">SET</span> <span class="token variable">@row_number</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token punctuation">(</span><span class="token variable">@row_number</span>:<span class="token operator">=</span><span class="token variable">@row_number</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">AS</span> row_num<span class="token punctuation">,</span>
name 
<span class="token keyword">FROM</span> example_table<span class="token punctuation">;</span>

<span class="token comment">-- 44、显示当前数据库中的所有表</span>
<span class="token keyword">SHOW</span> <span class="token keyword">TABLES</span><span class="token punctuation">;</span>

<span class="token comment">-- 45、使用SHOW VARIABLES查看 MySQL 的配置变量：</span>
<span class="token keyword">SHOW</span> VARIABLES <span class="token operator">LIKE</span> <span class="token string">&#39;version%&#39;</span><span class="token punctuation">;</span>

<span class="token comment">-- 46、创建临时表并插入数据</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TEMPORARY</span> <span class="token keyword">TABLE</span> temp_table <span class="token keyword">AS</span> 
<span class="token keyword">SELECT</span> id<span class="token punctuation">,</span> name <span class="token keyword">FROM</span> example_table
<span class="token keyword">WHERE</span> age <span class="token operator">&gt;</span> <span class="token number">30</span><span class="token punctuation">;</span>

<span class="token comment">-- 47、修改表结构，添加新列</span>
<span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> example_table
<span class="token keyword">ADD</span> <span class="token keyword">COLUMN</span> email <span class="token keyword">VARCHAR</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">-- 48、使用 GROUP_CONCAT 将多行值合并为单个字符串</span>
<span class="token keyword">SELECT</span> id<span class="token punctuation">,</span> GROUP_CONCAT<span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token keyword">AS</span> all_names
<span class="token keyword">FROM</span> example_table <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> id<span class="token punctuation">;</span>

<span class="token comment">-- 49、使用 TRIGGER 实现对表的操作触发器</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> example_trigger
BEFORE <span class="token keyword">INSERT</span> <span class="token keyword">ON</span> example_table
<span class="token keyword">FOR EACH ROW</span> 
<span class="token keyword">SET</span> NEW<span class="token punctuation">.</span>age <span class="token operator">=</span> NEW<span class="token punctuation">.</span>age <span class="token operator">+</span> <span class="token number">1</span>
<span class="token punctuation">;</span>

<span class="token comment">-- 50、监控数据库性能</span>
<span class="token keyword">SHOW</span> PROCESSLIST<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),o=[t];function l(c,i){return s(),a("div",null,o)}const r=n(p,[["render",l],["__file","50条MySQL常用脚本.html.vue"]]),u=JSON.parse('{"path":"/dev/50%E6%9D%A1MySQL%E5%B8%B8%E7%94%A8%E8%84%9A%E6%9C%AC.html","title":"50条MySQL常用脚本","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"50条MySQL常用脚本","excerpt":"50条MySQL常用脚本","description":"50条MySQL常用脚本","date":"2024-04-20T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/50%E6%9D%A1MySQL%E5%B8%B8%E7%94%A8%E8%84%9A%E6%9C%AC.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"50条MySQL常用脚本"}],["meta",{"property":"og:description","content":"50条MySQL常用脚本"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:39:43.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2024-04-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:39:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"50条MySQL常用脚本\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-04-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:39:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[],"git":{"createdTime":1714214949000,"updatedTime":1714225183000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":3}]},"readingTime":{"minutes":3.28,"words":984},"filePathRelative":"dev/50条MySQL常用脚本.md","localizedDate":"2024年4月20日"}');export{r as comp,u as data};
