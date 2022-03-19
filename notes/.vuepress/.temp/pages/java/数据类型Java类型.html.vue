<template><h1 id="数据类型java类型" tabindex="-1"><a class="header-anchor" href="#数据类型java类型" aria-hidden="true">#</a> 数据类型Java类型</h1>
<p>java mysql 数据类型对照</p>
<table>
<thead>
<tr>
<th><strong>类型名称</strong></th>
<th><strong>显示长度</strong></th>
<th><strong>数据库类型</strong></th>
<th><strong>JAVA类型</strong></th>
<th><strong>JDBC类型索引(int)</strong></th>
<th><strong>描述</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>VARCHAR</strong></td>
<td><strong>L+N</strong></td>
<td><strong>VARCHAR</strong></td>
<td><strong>java.lang.String</strong></td>
<td><strong>12</strong></td>
<td></td>
</tr>
<tr>
<td><strong>CHAR</strong></td>
<td><strong>N</strong></td>
<td><strong>CHAR</strong></td>
<td><strong>java.lang.String</strong></td>
<td><strong>1</strong></td>
<td></td>
</tr>
<tr>
<td><strong>BLOB</strong></td>
<td><strong>L+N</strong></td>
<td><strong>BLOB</strong></td>
<td><strong>java.lang.byte[]</strong></td>
<td><strong>-4</strong></td>
<td></td>
</tr>
<tr>
<td><strong>TEXT</strong></td>
<td><strong>65535</strong></td>
<td><strong>VARCHAR</strong></td>
<td><strong>java.lang.String</strong></td>
<td><strong>-1</strong></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>INTEGER</strong></td>
<td><strong>4</strong></td>
<td><strong>INTEGER UNSIGNED</strong></td>
<td><strong>java.lang.Long</strong></td>
<td><strong>4</strong></td>
<td></td>
</tr>
<tr>
<td><strong>TINYINT</strong></td>
<td><strong>3</strong></td>
<td><strong>TINYINT UNSIGNED</strong></td>
<td><strong>java.lang.Integer</strong></td>
<td><strong>-6</strong></td>
<td></td>
</tr>
<tr>
<td><strong>SMALLINT</strong></td>
<td><strong>5</strong></td>
<td><strong>SMALLINT UNSIGNED</strong></td>
<td><strong>java.lang.Integer</strong></td>
<td><strong>5</strong></td>
<td></td>
</tr>
<tr>
<td><strong>MEDIUMINT</strong></td>
<td><strong>8</strong></td>
<td><strong>MEDIUMINT UNSIGNED</strong></td>
<td><strong>java.lang.Integer</strong></td>
<td><strong>4</strong></td>
<td></td>
</tr>
<tr>
<td><strong>BIT</strong></td>
<td><strong>1</strong></td>
<td><strong>BIT</strong></td>
<td><strong>java.lang.Boolean</strong></td>
<td><strong>-7</strong></td>
<td></td>
</tr>
<tr>
<td><strong>BIGINT</strong></td>
<td><strong>20</strong></td>
<td><strong>BIGINT UNSIGNED</strong></td>
<td><strong>java.math.BigInteger</strong></td>
<td><strong>-5</strong></td>
<td></td>
</tr>
<tr>
<td><strong>FLOAT</strong></td>
<td><strong>4+8</strong></td>
<td><strong>FLOAT</strong></td>
<td><strong>java.lang.Float</strong></td>
<td><strong>7</strong></td>
<td></td>
</tr>
<tr>
<td><strong>DOUBLE</strong></td>
<td><strong>22</strong></td>
<td><strong>DOUBLE</strong></td>
<td><strong>java.lang.Double</strong></td>
<td><strong>8</strong></td>
<td></td>
</tr>
<tr>
<td><strong>DECIMAL</strong></td>
<td><strong>11</strong></td>
<td><strong>DECIMAL</strong></td>
<td><strong>java.math.BigDecimal</strong></td>
<td><strong>3</strong></td>
<td></td>
</tr>
<tr>
<td><strong>BOOLEAN</strong></td>
<td><strong>1</strong></td>
<td><strong>同TINYINT</strong></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>ID</strong></td>
<td><strong>11</strong></td>
<td><strong>PK (INTEGER UNSIGNED)</strong></td>
<td><strong>java.lang.Long</strong></td>
<td><strong>4</strong></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>DATE</strong></td>
<td><strong>10</strong></td>
<td><strong>DATE</strong></td>
<td><strong>java.sql.Date</strong></td>
<td><strong>91</strong></td>
<td></td>
</tr>
<tr>
<td><strong>TIME</strong></td>
<td><strong>8</strong></td>
<td><strong>TIME</strong></td>
<td><strong>java.sql.Time</strong></td>
<td><strong>92</strong></td>
<td></td>
</tr>
<tr>
<td><strong>DATETIME</strong></td>
<td><strong>19</strong></td>
<td><strong>DATETIME</strong></td>
<td><strong>java.sql.Timestamp</strong></td>
<td><strong>93</strong></td>
<td></td>
</tr>
<tr>
<td><strong>TIMESTAMP</strong></td>
<td><strong>19</strong></td>
<td><strong>TIMESTAMP</strong></td>
<td><strong>java.sql.Timestamp</strong></td>
<td><strong>93</strong></td>
<td></td>
</tr>
<tr>
<td><strong>YEAR</strong></td>
<td><strong>4</strong></td>
<td><strong>YEAR</strong></td>
<td><strong>java.sql.Date</strong></td>
<td><strong>91</strong></td>
<td></td>
</tr>
</tbody>
</table>
<p>对于bolb，一般用于对图片的数据库存储，原理是把图片打成二进制，然后进行的一种存储方式，在java中对应byte［］数组。</p>
<p>对于boolen类型，在mysql数据库中，个人认为用int类型代替较好，对bit操作不是很方便，尤其是在具有web页面开发的项目中，表示0/1，对应java类型的Integer较好。</p>
<p>decimal列的声明语法是decimal(m,d)。</p>
<p>在mysql5.1中，参数的取值范围：
1、M是数字的最大数（精度）。其范围为1～65（在较旧的MySQL版本中，允许的范围是1～254）。
2、D是小数点右侧数字的数目（标度）。其范围是0～30，但不得超过M。
说明：float占4个字节，double占8个字节，decimail(M,D)占M+2个字节。
如DECIMAL(5, 2) 的最大值为9 9 9 9 . 9 9，因为有7 个字节可用。</p>
<table>
<thead>
<tr>
<th style="text-align:left">SQL数据类型</th>
<th style="text-align:left">JDBC类型代码</th>
<th style="text-align:left">标准的Java类型</th>
<th style="text-align:left">Oracle扩展的Java类型</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">1.标准的JDBC类型:</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><code>CHAR</code></td>
<td style="text-align:left"><code>java.sql.Types.CHAR</code></td>
<td style="text-align:left"><code>java.lang.String</code></td>
<td style="text-align:left"><code>oracle.sql.CHAR</code></td>
</tr>
<tr>
<td style="text-align:left"><code>VARCHAR2</code></td>
<td style="text-align:left"><code>java.sql.Types.VARCHAR</code></td>
<td style="text-align:left"><code>java.lang.String</code></td>
<td style="text-align:left"><code>oracle.sql.CHAR</code></td>
</tr>
<tr>
<td style="text-align:left"><code>LONG</code></td>
<td style="text-align:left"><code>java.sql.Types.LONGVARCHAR</code></td>
<td style="text-align:left"><code>java.lang.String</code></td>
<td style="text-align:left"><code>oracle.sql.CHAR</code></td>
</tr>
<tr>
<td style="text-align:left"><code>NUMBER</code></td>
<td style="text-align:left"><code>java.sql.Types.NUMERIC</code></td>
<td style="text-align:left"><code>java.math.BigDecimal</code></td>
<td style="text-align:left"><code>oracle.sql.NUMBER</code></td>
</tr>
<tr>
<td style="text-align:left"><code>NUMBER</code></td>
<td style="text-align:left"><code>java.sql.Types.DECIMAL</code></td>
<td style="text-align:left"><code>java.math.BigDecimal</code></td>
<td style="text-align:left"><code>oracle.sql.NUMBER</code></td>
</tr>
<tr>
<td style="text-align:left"><code>NUMBER</code></td>
<td style="text-align:left"><code>java.sql.Types.BIT</code></td>
<td style="text-align:left"><code>boolean</code></td>
<td style="text-align:left"><code>oracle.sql.NUMBER</code></td>
</tr>
<tr>
<td style="text-align:left"><code>NUMBER</code></td>
<td style="text-align:left"><code>java.sql.Types.TINYINT</code></td>
<td style="text-align:left"><code>byte</code></td>
<td style="text-align:left"><code>oracle.sql.NUMBER</code></td>
</tr>
<tr>
<td style="text-align:left"><code>NUMBER</code></td>
<td style="text-align:left"><code>java.sql.Types.SMALLINT</code></td>
<td style="text-align:left"><code>short</code></td>
<td style="text-align:left"><code>oracle.sql.NUMBER</code></td>
</tr>
<tr>
<td style="text-align:left"><code>NUMBER</code></td>
<td style="text-align:left"><code>java.sql.Types.INTEGER</code></td>
<td style="text-align:left"><code>int</code></td>
<td style="text-align:left"><code>oracle.sql.NUMBER</code></td>
</tr>
<tr>
<td style="text-align:left"><code>NUMBER</code></td>
<td style="text-align:left"><code>java.sql.Types.BIGINT</code></td>
<td style="text-align:left"><code>long</code></td>
<td style="text-align:left"><code>oracle.sql.NUMBER</code></td>
</tr>
<tr>
<td style="text-align:left"><code>NUMBER</code></td>
<td style="text-align:left"><code>java.sql.Types.REAL</code></td>
<td style="text-align:left"><code>float</code></td>
<td style="text-align:left"><code>oracle.sql.NUMBER</code></td>
</tr>
<tr>
<td style="text-align:left"><code>NUMBER</code></td>
<td style="text-align:left"><code>java.sql.Types.FLOAT</code></td>
<td style="text-align:left"><code>double</code></td>
<td style="text-align:left"><code>oracle.sql.NUMBER</code></td>
</tr>
<tr>
<td style="text-align:left"><code>NUMBER</code></td>
<td style="text-align:left"><code>java.sql.Types.DOUBLE</code></td>
<td style="text-align:left"><code>double</code></td>
<td style="text-align:left"><code>oracle.sql.NUMBER</code></td>
</tr>
<tr>
<td style="text-align:left"><code>RAW</code></td>
<td style="text-align:left"><code>java.sql.Types.BINARY</code></td>
<td style="text-align:left"><code>byte[]</code></td>
<td style="text-align:left"><code>oracle.sql.RAW</code></td>
</tr>
<tr>
<td style="text-align:left"><code>RAW</code></td>
<td style="text-align:left"><code>java.sql.Types.VARBINARY</code></td>
<td style="text-align:left"><code>byte[]</code></td>
<td style="text-align:left"><code>oracle.sql.RAW</code></td>
</tr>
<tr>
<td style="text-align:left"><code>LONGRAW</code></td>
<td style="text-align:left"><code>java.sql.Types.LONGVARBINARY</code></td>
<td style="text-align:left"><code>byte[]</code></td>
<td style="text-align:left"><code>oracle.sql.RAW</code></td>
</tr>
<tr>
<td style="text-align:left"><code>DATE</code></td>
<td style="text-align:left"><code>java.sql.Types.DATE</code></td>
<td style="text-align:left"><code>java.sql.Date</code></td>
<td style="text-align:left"><code>oracle.sql.DATE</code></td>
</tr>
<tr>
<td style="text-align:left"><code>DATE</code></td>
<td style="text-align:left"><code>java.sql.Types.TIME</code></td>
<td style="text-align:left"><code>java.sql.Time</code></td>
<td style="text-align:left"><code>oracle.sql.DATE</code></td>
</tr>
<tr>
<td style="text-align:left"><code>TIMESTAMP</code></td>
<td style="text-align:left"><code>java.sql.Types.TIMESTAMP</code></td>
<td style="text-align:left"><code>javal.sql.Timestamp</code></td>
<td style="text-align:left"><code>oracle.sql.TIMESTAMP</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">2.标准的JDBC类型:</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><code>BLOB</code></td>
<td style="text-align:left"><code>java.sql.Types.BLOB</code></td>
<td style="text-align:left"><code>java.sql.Blob</code></td>
<td style="text-align:left"><code>oracle.sql.BLOB</code></td>
</tr>
<tr>
<td style="text-align:left"><code>CLOB</code></td>
<td style="text-align:left"><code>java.sql.Types.CLOB</code></td>
<td style="text-align:left"><code>java.sql.Clob</code></td>
<td style="text-align:left"><code>oracle.sql.CLOB</code></td>
</tr>
<tr>
<td style="text-align:left">用户定义的对象</td>
<td style="text-align:left"><code>java.sql.Types.STRUCT</code></td>
<td style="text-align:left"><code>java.sql.Struct</code></td>
<td style="text-align:left"><code>oracle.sql.STRUCT</code></td>
</tr>
<tr>
<td style="text-align:left">用户定义的参考</td>
<td style="text-align:left"><code>java.sql.Types.REF</code></td>
<td style="text-align:left"><code>java.sql.Ref</code></td>
<td style="text-align:left"><code>oracle.sql.REF</code></td>
</tr>
<tr>
<td style="text-align:left">用户定义的集合</td>
<td style="text-align:left"><code>java.sql.Types.ARRAY</code></td>
<td style="text-align:left"><code>java.sql.Array</code></td>
<td style="text-align:left"><code>oracle.sql.ARRAY</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">Oracle扩展:</td>
<td style="text-align:left"></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><code>BFILE</code></td>
<td style="text-align:left"><code>oracle.jdbc.OracleTypes.BFILE</code></td>
<td style="text-align:left">N/A</td>
<td style="text-align:left"><code>oracle.sql.BFILE</code></td>
</tr>
<tr>
<td style="text-align:left"><code>ROWID</code></td>
<td style="text-align:left"><code>oracle.jdbc.OracleTypes.ROWID</code></td>
<td style="text-align:left">N/A</td>
<td style="text-align:left"><code>oracle.sql.ROWID</code></td>
</tr>
<tr>
<td style="text-align:left"><code>REF CURSOR</code></td>
<td style="text-align:left"><code>oracle.jdbc.OracleTypes.CURSOR</code></td>
<td style="text-align:left"><code>java.sql.ResultSet</code></td>
<td style="text-align:left"><code>oracle.jdbc.OracleResultSet</code></td>
</tr>
<tr>
<td style="text-align:left"><code>TIMESTAMP</code></td>
<td style="text-align:left"><code>oracle.jdbc.OracleTypes.TIMESTAMP</code></td>
<td style="text-align:left"><code>java.sql.Timestamp</code></td>
<td style="text-align:left"><code>oracle.sql.TIMESTAMP</code></td>
</tr>
<tr>
<td style="text-align:left"><code>TIMESTAMP WITH TIME ZONE</code></td>
<td style="text-align:left"><code>oracle.jdbc.OracleTypes.TIMESTAMPTZ</code></td>
<td style="text-align:left"><code>java.sql.Timestamp</code></td>
<td style="text-align:left"><code>oracle.sql.TIMESTAMPTZ</code></td>
</tr>
<tr>
<td style="text-align:left"><code>TIMESTAMP WITH LOCAL TIME ZONE</code></td>
<td style="text-align:left"><code>oracle.jdbc.OracleTypes.TIMESTAMPLTZ</code></td>
<td style="text-align:left"><code>java.sql.Timestamp</code></td>
<td style="text-align:left"><code>oracle.sql.TIMESTAMPLTZ</code></td>
</tr>
</tbody>
</table>
</template>
