import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as c,c as o,b as n,d as e,e as a,a as l}from"./app-e061b827.js";const d={},u=l('<h1 id="java导入导出excel-poi" tabindex="-1"><a class="header-anchor" href="#java导入导出excel-poi" aria-hidden="true">#</a> Java导入导出Excel-POI</h1><h2 id="一、介绍" tabindex="-1"><a class="header-anchor" href="#一、介绍" aria-hidden="true">#</a> 一、介绍</h2><p>当前B/S模式已成为应用开发的主流，而在企业办公系统中，常常有客户这样子要求：你要把我们的报表直接用Excel打开(电信系统、银行系统)。或者是：我们已经习惯用Excel打印。这样在我们实际的开发中，很多时候需要实现导入、导出Excel的应用。</p><p>目前，比较常用的实现Java导入、导出Excel的技术有两种Jakarta POI和Java Excel</p><p>下面我就分别讲解一下如何使用这两个技术实现导入、导出Excel</p><h2 id="二、使用jakarta-poi导入、导出excel" tabindex="-1"><a class="header-anchor" href="#二、使用jakarta-poi导入、导出excel" aria-hidden="true">#</a> 二、使用Jakarta POI导入、导出Excel</h2>',6),p={href:"http://poi.apache.org/index.html%EF%BC%8CAPI%E6%96%87%E6%A1%A3http://poi.apache.org/apidocs/index.html",target:"_blank",rel:"noopener noreferrer"},r=l(`<p><strong>例子：</strong></p><p>pom文件导入：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.poi<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>poi<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.2.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">testExport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//创建HSSFWorkbook对象(excel的文档对象)</span>
    <span class="token class-name">HSSFWorkbook</span> wb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HSSFWorkbook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//建立新的sheet对象（excel的表单）</span>
    <span class="token class-name">HSSFSheet</span> sheet<span class="token operator">=</span>wb<span class="token punctuation">.</span><span class="token function">createSheet</span><span class="token punctuation">(</span><span class="token string">&quot;成绩表&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sheet<span class="token punctuation">.</span><span class="token function">setDefaultRowHeightInPoints</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//设置缺省列高</span>
    sheet<span class="token punctuation">.</span><span class="token function">setDefaultColumnWidth</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//设置缺省列宽</span>

    <span class="token comment">//1、创建HSSFCellStyle</span>
    <span class="token class-name">HSSFCellStyle</span> cellStyle<span class="token operator">=</span>wb<span class="token punctuation">.</span><span class="token function">createCellStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//2、设置样式</span>
    <span class="token comment">// 设置单元格的横向和纵向对齐方式，具体参数就不列了，参考HSSFCellStyle</span>
    cellStyle<span class="token punctuation">.</span><span class="token function">setAlignment</span><span class="token punctuation">(</span><span class="token class-name">HorizontalAlignment</span><span class="token punctuation">.</span><span class="token constant">CENTER</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cellStyle<span class="token punctuation">.</span><span class="token function">setFillBackgroundColor</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">short</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cellStyle<span class="token punctuation">.</span><span class="token function">setVerticalAlignment</span><span class="token punctuation">(</span><span class="token class-name">VerticalAlignment</span><span class="token punctuation">.</span><span class="token constant">CENTER</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cellStyle<span class="token punctuation">.</span><span class="token function">setFillForegroundColor</span><span class="token punctuation">(</span><span class="token class-name">IndexedColors</span><span class="token punctuation">.</span><span class="token constant">GREY_25_PERCENT</span><span class="token punctuation">.</span><span class="token function">getIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cellStyle<span class="token punctuation">.</span><span class="token function">setFillPattern</span><span class="token punctuation">(</span><span class="token class-name">FillPatternType</span><span class="token punctuation">.</span><span class="token constant">SOLID_FOREGROUND</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//设置填充方式(填充图案)</span>
    <span class="token comment">//cellStyle.setFillPattern(FillPatternType.DIAMONDS);</span>
    <span class="token comment">//设置背景颜色</span>
    <span class="token comment">//cellStyle.setFillBackgroundColor((short) 8);</span>
    <span class="token comment">//设置日期型数据的显示样式</span>
    cellStyle<span class="token punctuation">.</span><span class="token function">setDataFormat</span><span class="token punctuation">(</span><span class="token class-name">HSSFDataFormat</span><span class="token punctuation">.</span><span class="token function">getBuiltinFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yy-mm-dd h:mm&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//在sheet里创建第一行，参数为行索引(excel的行)，可以是0～65535之间的任何一个</span>
    <span class="token class-name">HSSFRow</span> row1<span class="token operator">=</span>sheet<span class="token punctuation">.</span><span class="token function">createRow</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//row1.setHeight((short) 30);</span>
    <span class="token comment">//创建单元格（excel的单元格，参数为列索引，可以是0～255之间的任何一个</span>
    <span class="token class-name">HSSFCell</span> cell<span class="token operator">=</span>row1<span class="token punctuation">.</span><span class="token function">createCell</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cell<span class="token punctuation">.</span><span class="token function">setCellStyle</span><span class="token punctuation">(</span>cellStyle<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//设置单元格内容</span>
    cell<span class="token punctuation">.</span><span class="token function">setCellValue</span><span class="token punctuation">(</span><span class="token string">&quot;学员考试成绩一览表&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//合并单元格CellRangeAddress构造参数依次表示起始行，截至行，起始列， 截至列</span>
    sheet<span class="token punctuation">.</span><span class="token function">addMergedRegion</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CellRangeAddress</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">HSSFCellStyle</span> cellStyle2<span class="token operator">=</span>wb<span class="token punctuation">.</span><span class="token function">createCellStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cellStyle2<span class="token punctuation">.</span><span class="token function">setAlignment</span><span class="token punctuation">(</span><span class="token class-name">HorizontalAlignment</span><span class="token punctuation">.</span><span class="token constant">CENTER</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cellStyle2<span class="token punctuation">.</span><span class="token function">setFillForegroundColor</span><span class="token punctuation">(</span><span class="token class-name">IndexedColors</span><span class="token punctuation">.</span><span class="token constant">LIGHT_TURQUOISE1</span><span class="token punctuation">.</span><span class="token function">getIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//在sheet里创建第二行</span>
    <span class="token class-name">HSSFRow</span> row2<span class="token operator">=</span>sheet<span class="token punctuation">.</span><span class="token function">createRow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    row2<span class="token punctuation">.</span><span class="token function">setRowStyle</span><span class="token punctuation">(</span>cellStyle2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//创建单元格并设置单元格内容</span>
    <span class="token class-name">HSSFCell</span> cell1 <span class="token operator">=</span> row2<span class="token punctuation">.</span><span class="token function">createCell</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cell1<span class="token punctuation">.</span><span class="token function">setCellStyle</span><span class="token punctuation">(</span>cellStyle2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cell1<span class="token punctuation">.</span><span class="token function">setCellValue</span><span class="token punctuation">(</span><span class="token string">&quot;姓名&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//row2.createCell(0).setCellValue(&quot;姓名&quot;);</span>
    row2<span class="token punctuation">.</span><span class="token function">createCell</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setCellValue</span><span class="token punctuation">(</span><span class="token string">&quot;班级&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    row2<span class="token punctuation">.</span><span class="token function">createCell</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setCellValue</span><span class="token punctuation">(</span><span class="token string">&quot;笔试成绩&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    row2<span class="token punctuation">.</span><span class="token function">createCell</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setCellValue</span><span class="token punctuation">(</span><span class="token string">&quot;机试成绩&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//row2.setRowStyle(cellStyle);</span>
    <span class="token comment">//在sheet里创建第三行</span>
    <span class="token class-name">HSSFRow</span> row3<span class="token operator">=</span>sheet<span class="token punctuation">.</span><span class="token function">createRow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    row3<span class="token punctuation">.</span><span class="token function">createCell</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setCellValue</span><span class="token punctuation">(</span><span class="token string">&quot;李明&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    row3<span class="token punctuation">.</span><span class="token function">createCell</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setCellValue</span><span class="token punctuation">(</span><span class="token string">&quot;As178&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    row3<span class="token punctuation">.</span><span class="token function">createCell</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setCellValue</span><span class="token punctuation">(</span><span class="token number">87</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    row3<span class="token punctuation">.</span><span class="token function">createCell</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setCellValue</span><span class="token punctuation">(</span><span class="token number">78</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//输出Excel文件</span>
    <span class="token class-name">FileOutputStream</span> output<span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        output <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;e:\\\\&quot;</span><span class="token operator">+</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;workbook.xls&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        wb<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>output<span class="token punctuation">)</span><span class="token punctuation">;</span>
        output<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>以下的一些语法可能是因为版本问题没有该方法</p></blockquote><h3 id="_2-1-环境配置" tabindex="-1"><a class="header-anchor" href="#_2-1-环境配置" aria-hidden="true">#</a> 2.1 环境配置</h3><h3 id="_2-1-1下载jar" tabindex="-1"><a class="header-anchor" href="#_2-1-1下载jar" aria-hidden="true">#</a> 2.1.1下载jar</h3>`,7),v={href:"http://poi.apache.org/download.html%E8%BF%99%E9%87%8C%E5%8F%AF%E4%BB%A5%E4%B8%8B%E8%BD%BD%E5%88%B0%E5%AE%83%E7%9A%84%E6%9C%80%E6%96%B0%E7%89%88%E6%9C%AC%E5%92%8C%E6%96%87%E6%A1%A3%EF%BC%8C%E7%9B%AE%E5%89%8D%E6%9C%80%E6%96%B0%E7%89%88%E6%9C%AC%E6%98%AF3.7%EF%BC%8C%E8%BF%99%E9%87%8C%E4%BD%BF%E7%94%A8%E6%AF%94%E8%BE%83%E7%A8%B3%E5%AE%9A%E7%9A%843.6%E7%89%88%E3%80%82",target:"_blank",rel:"noopener noreferrer"},m=l(`<h3 id="_2-1-2加入jar包" tabindex="-1"><a class="header-anchor" href="#_2-1-2加入jar包" aria-hidden="true">#</a> 2.1.2加入jar包</h3><p>将根目录下的poi-3.6-20091214.jar和Lib目录下三个通用包 commons-logging-1.1.jar junit-3.8.1.jar log4j-1.2.13.jar拷贝到项目的Lib下</p><h3 id="_2-2-jakarta-poi-hssf-api组件" tabindex="-1"><a class="header-anchor" href="#_2-2-jakarta-poi-hssf-api组件" aria-hidden="true">#</a> 2.2 Jakarta POI HSSF API组件</h3><p>HSSF（用于操作Excel的组件）提供给用户使用的对象在rg.apache.poi.hssf.usermodel包中,主要部分包括Excel对象，样式和格式，还有辅助操作。有以下几种对象：</p><blockquote><p><strong>常用组件：</strong></p><p>HSSFWorkbook excel的文档对象</p><p>HSSFSheet excel的表单</p><p>HSSFRow excel的行</p><p>HSSFCell excel的格子单元</p><p>HSSFFont excel字体</p><p>HSSFDataFormat 日期格式</p><p>HSSFHeader sheet头</p><p>HSSFFooter sheet尾（只有打印的时候才能看到效果）</p><p><strong>样式：</strong></p><p>HSSFCellStyle cell样式</p><p><strong>辅助操作包括：</strong></p><p>HSSFDateUtil 日期</p><p>HSSFPrintSetup 打印</p><p>HSSFErrorConstants 错误信息表</p></blockquote><h3 id="_2-3-基本操作步骤" tabindex="-1"><a class="header-anchor" href="#_2-3-基本操作步骤" aria-hidden="true">#</a> 2.3 基本操作步骤</h3><p>首先，理解一下一个Excel的文件的组织形式，一个Excel文件对应于一个workbook(HSSFWorkbook)，一个workbook可以有多个sheet（HSSFSheet）组成，一个sheet是由多个row（HSSFRow）组成，一个row是由多个cell（HSSFCell）组成。</p><p><strong>基本操作步骤：</strong></p><blockquote><p>1、用HSSFWorkbook打开或者创建“Excel文件对象”</p><p>2、用HSSFWorkbook对象返回或者创建Sheet对象</p><p>3、用Sheet对象返回行对象，用行对象得到Cell对象</p><p>4、对Cell对象读写。</p></blockquote><p>下面来看一个动态生成Excel文件的例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//创建HSSFWorkbook对象
HSSFWorkbook wb = new HSSFWorkbook();
//创建HSSFSheet对象
HSSFSheet sheet = wb.createSheet(&quot;sheet0&quot;);
//创建HSSFRow对象
HSSFRow row = sheet.createRow(0);
//创建HSSFCell对象
HSSFCell cell=row.createCell(0);
//设置单元格的值
cell.setCellValue(&quot;单元格中的中文&quot;);
//输出Excel文件
FileOutputStream output=new FileOutputStream(&quot;d:\\\\workbook.xls&quot;);
wkb.write(output);
output.flush();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HSSF读取文件同样还是使用这几个对象，只是把相应的createXXX方法变成了getXXX方法即可。可见只要理解了其中原理，不管是读还是写亦或是特定格式都可以轻松实现，正所谓知其然更要知其所以然。</p><h3 id="_2-4-导出excel应用实例" tabindex="-1"><a class="header-anchor" href="#_2-4-导出excel应用实例" aria-hidden="true">#</a> 2.4 导出Excel应用实例</h3><p>在2.3中我们寥寥几行代码实际上就已经就是实现了导出Excel一个简单示例，下面我们在看如何实现导出如图所示的Excel表格？</p><figure><img src="https://static.xlc520.tk/blogImage/170838550954408.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>代码如下：（实际开发中应封装到业务层组件中，然后在控制层中调用。这里直接写在控制层组件，如Servlet的doGet/doPost方法或Struts框架的execute方法中）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//创建HSSFWorkbook对象(excel的文档对象)
      HSSFWorkbook wb = new HSSFWorkbook();
//建立新的sheet对象（excel的表单）
HSSFSheet sheet=wkb.createSheet(&quot;成绩表&quot;);
//在sheet里创建第一行，参数为行索引(excel的行)，可以是0～65535之间的任何一个
HSSFRow row1=sheet.createRow(0);
//创建单元格（excel的单元格，参数为列索引，可以是0～255之间的任何一个
HSSFCell cell=row1.createCell(0);
      //设置单元格内容
cell.setCellValue(&quot;学员考试成绩一览表&quot;);
//合并单元格CellRangeAddress构造参数依次表示起始行，截至行，起始列， 截至列
sheet.addMergedRegion(new CellRangeAddress(0,0,0,3));
//在sheet里创建第二行
HSSFRow row2=sheet.createRow(1);    
      //创建单元格并设置单元格内容
      row2.createCell(0).setCellValue(&quot;姓名&quot;);
      row2.createCell(1).setCellValue(&quot;班级&quot;);    
      row2.createCell(2).setCellValue(&quot;笔试成绩&quot;);
row2.createCell(3).setCellValue(&quot;机试成绩&quot;);    
      //在sheet里创建第三行
      HSSFRow row3=sheet.createRow(2);
      row3.createCell(0).setCellValue(&quot;李明&quot;);
      row3.createCell(1).setCellValue(&quot;As178&quot;);
      row3.createCell(2).setCellValue(87);    
      row3.createCell(3).setCellValue(78);    
  //.....省略部分代码


//输出Excel文件
    OutputStream output=response.getOutputStream();
    response.reset();
    response.setHeader(&quot;Content-disposition&quot;, &quot;attachment; filename=details.xls&quot;);
    response.setContentType(&quot;application/msexcel&quot;);        
    wkb.write(output);
    output.close();
retrun null;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加下划线这部分代码是B/S模式中采用的输出方式，而不是输出到本地指定的磁盘目录。该代码表示将details.xls的Excel文件通过应答实体（response）输出给请求的客户端浏览器，客户端可保存或直接打开。</p><h3 id="_2-5-样式设置" tabindex="-1"><a class="header-anchor" href="#_2-5-样式设置" aria-hidden="true">#</a> 2.5 样式设置</h3><p>在实际应用中导出的Excel文件往往需要阅读和打印的，这就需要对输出的Excel文档进行排版和样式的设置，主要操作有合并单元格、设置单元格样式、设置字体样式等。</p><h3 id="_2-5-1单元格合并" tabindex="-1"><a class="header-anchor" href="#_2-5-1单元格合并" aria-hidden="true">#</a> 2.5.1单元格合并</h3><p>使用HSSFSheet的addMergedRegion()方法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public int addMergedRegion(CellRangeAddress region)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>参数CellRangeAddress 表示合并的区域，构造方法如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>CellRangeAddress(int firstRow, int lastRow, int firstCol, int lastCol)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>构造参数依次表示起始行，截至行，起始列， 截至列。示例代码参照2.4部分</p><h3 id="_2-5-2设置单元格的行高、列宽" tabindex="-1"><a class="header-anchor" href="#_2-5-2设置单元格的行高、列宽" aria-hidden="true">#</a> 2.5.2设置单元格的行高、列宽</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HSSFSheet sheet=wb.createSheet();

sheet.setDefaultRowHeightInPoints(10);//设置缺省列高sheet.setDefaultColumnWidth(20);//设置缺省列宽

//设置指定列的列宽，256 * 50这种写法是因为width参数单位是单个字符的256分之一

sheet.setColumnWidth(cell.getColumnIndex(), 256 * 50);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-2单元格样式" tabindex="-1"><a class="header-anchor" href="#_2-5-2单元格样式" aria-hidden="true">#</a> 2.5.2单元格样式</h3><p>1、创建HSSFCellStyle</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> HSSFCellStyle cellStyle=wkb.createCellStyle();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、设置样式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> // 设置单元格的横向和纵向对齐方式，具体参数就不列了，参考HSSFCellStyle

  cellStyle.setAlignment(HSSFCellStyle.ALIGN_JUSTIFY);

  cellStyle.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);

  /* 设置单元格的填充方式，以及前景颜色和背景颜色

   三点注意：

   1.如果需要前景颜色或背景颜色，一定要指定填充方式，两者顺序无所谓；

   2.如果同时存在前景颜色和背景颜色，前景颜色的设置要写在前面；

   3.前景颜色不是字体颜色。

  */

  //设置填充方式(填充图案)

  cellStyle.setFillPattern(HSSFCellStyle.DIAMONDS);

  //设置前景色

  cellStyle.setFillForegroundColor(HSSFColor.RED.index);

  //设置背景颜色

  cellStyle.setFillBackgroundColor(HSSFColor.LIGHT_YELLOW.index);

  // 设置单元格底部的边框及其样式和颜色

  // 这里仅设置了底边边框，左边框、右边框和顶边框同理可设

  cellStyle.setBorderBottom(HSSFCellStyle.BORDER_SLANTED_DASH_DOT);

  cellStyle.setBottomBorderColor(HSSFColor.DARK_RED.index);

  //设置日期型数据的显示样式

  cellStyle.setDataFormat(HSSFDataFormat.getBuiltinFormat(&quot;m/d/yy h:mm&quot;));  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、将样式应用于单元格</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  cell.setCellStyle(cellStyle);

  //将样式应用到行，但有些样式只对单元格起作用

  row.setRowStyle(cellStyle);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-2设置字体样式" tabindex="-1"><a class="header-anchor" href="#_2-5-2设置字体样式" aria-hidden="true">#</a> 2.5.2设置字体样式</h3><p>1、创建HSSFFont对象（调用HSSFWorkbook 的createFont方法）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>HSSFWorkbook wb=new HSSFWorkbook();

HSSFFont  fontStyle=wb.createFont();

HSSFWorkbook wb=new HSSFWorkbook ();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、设置字体各种样式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  //设置字体样式

  fontStyle.setFontName(&quot;宋体&quot;);  

  //设置字体高度

  fontStyle.setFontHeightInPoints((short)20);  

  //设置字体颜色

  font.setColor(HSSFColor.BLUE.index);

  //设置粗体

  fontStyle.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);

  //设置斜体

font.setItalic(true);

//设置下划线

font.setUnderline(HSSFFont.U_SINGLE);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、将字体设置到单元格样式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//字体也是单元格格式的一部分，所以从属于HSSFCellStyle

// 将字体对象赋值给单元格样式对象

cellStyle.setFont(font);

// 将单元格样式应用于单元格

cell.setCellStyle(cellStyle);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-导入excel应用实例" tabindex="-1"><a class="header-anchor" href="#_2-6-导入excel应用实例" aria-hidden="true">#</a> 2.6 导入Excel应用实例</h3><p>实现将已存在的Excel文件中的数据导入到系统中的基本步骤同导出十分的类似，关键在于要了解要导入Excel文件的结构，比如数据有哪些列、读取数据起始位置（有效数据从第几行几列开始）等。在实际项目中由于这些数据（Excel文件）往往来自于日常办公人员或其他系统平台产生的业务数据，因此这些Excel文件的数据格式要有统一的要求，并提供访问接口（指访问途径），这样在所需数据的系统中就可通过提供这个访问接口调用方法，从而获得数据。解决方案采用Web Service是不错的选择。这里，我们就以导入2..4所产生的excel表为例，重点掌握如何编写导入Excel代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public List&lt;ScoreInfo&gt; loadScoreInfo(String xlsPath) throws IOException{
    List temp = new ArrayList();
FileInputStream fileIn = new FileInputStream(xlsPath);
//根据指定的文件输入流导入Excel从而产生Workbook对象
Workbook wb0 = new HSSFWorkbook(fileIn);
//获取Excel文档中的第一个表单
Sheet sht0 = wb0.getSheetAt(0);
//对Sheet中的每一行进行迭代
        for (Row r : sht0) {
        //如果当前行的行号（从0开始）未达到2（第三行）则从新循环
If(r.getRowNum()&lt;1){
continue;
}
//创建实体类
ScoreInfo info=new ScoreInfo();
//取出当前行第1个单元格数据，并封装在info实体stuName属性上
info.setStuName(r.getCell(0).getStringCellValue());
info.setClassName(r.getCell(1).getStringCellValue());
info.setRscore(r.getCell(2).getNumericCellValue());
            info.setLscore(r.getCell(3).getNumericCellValue());
temp.add(info);
        }
        fileIn.close();    
        return temp;    
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>*三、使用java Excel操作Excel文件*</strong></em></p><p>Java Excel是一开放源码项目，通过它Java开发人员可以读取Excel文件的内容、创建新的Excel文件、更新已经存在的Excel文件。jxl 由于其小巧 易用的特点, 逐渐已经取代了 POI-excel的地位, 成为了越来越多的java开发人员生成excel文件的首选。Java Excel的特征：</p><blockquote><p>● 支持Excel 95-2000的所有版本<br> ● 生成Excel 2000标准格式<br> ● 支持字体、数字、日期格式化操作<br> ● 支持对单元格加阴影和加色彩；</p><p>● 修改存在的工作表；<br> ● 支持图像和图表</p><p>● 日志记录可以定制</p><p>● 更小更快更省内存</p></blockquote>`,48),b={href:"http://jexcelapi.sourceforge.net/resources/javadocs/2_6_10/docs/index.html",target:"_blank",rel:"noopener noreferrer"},k=n("p",null,"在这里我们将通过一些实例，学习掌握读取、新建、更新，其中也包括常见格式的设置:字体、颜色、背景、合并单元格等操作，有这些其实已经基本足够应付大部分问题了。",-1),h=n("h3",{id:"_3-1环境配置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-1环境配置","aria-hidden":"true"},"#"),e(" 3.1环境配置")],-1),S=n("h3",{id:"_3-1-1下载",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3-1-1下载","aria-hidden":"true"},"#"),e(" 3.1.1下载")],-1),g={href:"http://www.andykhan.com/jexcelapi/",target:"_blank",rel:"noopener noreferrer"},x=l(`<h3 id="_3-1-2-加入jar包" tabindex="-1"><a class="header-anchor" href="#_3-1-2-加入jar包" aria-hidden="true">#</a> 3.1.2 加入jar包</h3><p>将jxl.jar拷贝到项目的Lib下</p><h3 id="_3-2-使用java-excel-api-导出-excel文件" tabindex="-1"><a class="header-anchor" href="#_3-2-使用java-excel-api-导出-excel文件" aria-hidden="true">#</a> 3.2 使用Java Excel Api 导出 Excel文件</h3><p>下面我们在看如何使用Java Excel实现导出Excel表格？</p><p>代码如下：（实际开发中应封装到业务层组件中，然后在控制层中调用。这里直接写在控制层组件，如Servlet的doGet/doPost方法或Struts框架的execute方法中）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//获得输出流，该输出流的输出介质是客户端浏览器

  OutputStream output=response.getOutputStream();

  response.reset();

  response.setHeader(&quot;Content-disposition&quot;,&quot;attachment;           filename=temp.xls&quot;);

  response.setContentType(&quot;application/msexcel&quot;);

  //创建可写入的Excel工作薄，且内容将写入到输出流，并通过输出流输出给客户端浏览
  WritableWorkbook wk=Workbook.createWorkbook(output);


///创建可写入的Excel工作表

    WritableSheet sheet=wk.createSheet(&quot;成绩表&quot;, 0);

//把单元格（column, row）到单元格（column1, row1）进行合并。

//mergeCells(column, row, column1, row1);

  sheet.mergeCells(0,0, 4,0);//单元格合并方法

//创建WritableFont 字体对象，参数依次表示黑体、字号12、粗体、非斜体、不带下划线、亮蓝色

WritableFont titleFont=new WritableFont(WritableFont.createFont(&quot;黑体&quot;),12,WritableFont.BOLD,false,UnderlineStyle.NO_UNDERLINE,Colour.LIGHT_BLUE);

//创建WritableCellFormat对象，将该对象应用于单元格从而设置单元格的样式

WritableCellFormat titleFormat=new WritableCellFormat();

//设置字体格式

titleFormat.setFont(titleFont);

//设置文本水平居中对齐

titleFormat.setAlignment(Alignment.CENTRE);

//设置文本垂直居中对齐

titleFormat.setVerticalAlignment(VerticalAlignment.CENTRE);

//设置背景颜色

titleFormat.setBackground(Colour.GRAY_25);

//设置自动换行

titleFormat.setWrap(true);

//添加Label对象，参数依次表示在第一列，第一行，内容，使用的格式

Label lab_00=new Label(0,0,&quot;学员考试成绩一览表&quot;,titleFormat);

//将定义好的Label对象添加到工作表上，这样工作表的第一列第一行的内容为‘学员考试成绩一览表’并应用了titleFormat定义的样式

sheet.addCell(lab_00);

WritableCellFormat cloumnTitleFormat=new WritableCellFormat();

cloumnTitleFormat.setFont(new WritableFont(WritableFont.createFont(&quot;宋体&quot;),10,WritableFont.BOLD,false));

cloumnTitleFormat.setAlignment(Alignment.CENTRE);

Label lab_01=new Label(0,1,&quot;姓名&quot;,cloumnTitleFormat);

Label lab_11=new Label(1,1,&quot;班级&quot;,cloumnTitleFormat);

Label lab_21=new Label(2,1,&quot;笔试成绩&quot;,cloumnTitleFormat);
Label lab_31=new Label(3,1,&quot;上机成绩&quot;,cloumnTitleFormat);

Label lab_41=new Label(4,1,&quot;考试日期&quot;,cloumnTitleFormat);

  sheet.addCell(lab_01);

  sheet.addCell(lab_11);

  sheet.addCell(lab_21);

  sheet.addCell(lab_31);

  sheet.addCell(lab_41);

  sheet.addCell(new Label(0,2,&quot;李明&quot;));

  sheet.addCell(new Label(1,2,&quot;As178&quot;));

//定义数字格式

NumberFormat nf=new NumberFormat(&quot;0.00&quot;);

WritableCellFormat wcf=new WritableCellFormat(nf);

//类似于Label对象，区别Label表示文本数据，Number表示数值型数据

Number numlab_22=new Number(2,2,78,wcf);

sheet.addCell(numlab_22);

sheet.addCell(newNumber(3,2,87,new WritableCellFormat(new NumberFormat(&quot;#.##&quot;) )));

//定义日期格式

DateFormat df=new DateFormat(&quot;yyyy-MM-dd hh:mm:ss&quot;);

//创建WritableCellFormat对象

WritableCellFormat datewcf=new WritableCellFormat(df);

//类似于Label对象，区别Label表示文本数据，DateTime表示日期型数据

DateTime dtLab_42=new DateTime(4,2,new Date(),datewcf);

sheet.addCell(dtLab_42);   

//将定义的工作表输出到之前指定的介质中（这里是客户端浏览器）

wk.write();

//操作完成时，关闭对象，释放占用的内存空间   

wk.close();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加下划线这部分代码是B/S模式中采用的输出方式，而不是输出到本地指定的磁盘目录。该代码表示将temp.xls的Excel文件通过应答实体（response）输出给请求的客户端浏览器，下载到客户端本地（保存或直接打开）。若要直接输出到磁盘文件可采用下列代码替换加下划线这部分代码</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>File file=new File(&quot;D://temp.xls&quot;);
WritableWorkbook wwb = Workbook.createWorkbook(file); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3高级操作" tabindex="-1"><a class="header-anchor" href="#_3-3高级操作" aria-hidden="true">#</a> 3.3高级操作</h3><h3 id="_3-3-1数据格式化" tabindex="-1"><a class="header-anchor" href="#_3-3-1数据格式化" aria-hidden="true">#</a> 3.3.1数据格式化</h3><p>在Excel中不涉及复杂的数据类型，能够比较好的处理字串、数字和日期已经能够满足一般的应用即可。</p><p>数据的格式化涉及到的是字体、粗细、字号等元素，这些功能主要由 WritableFont和WritableCellFormat类来负责。例如：</p><blockquote><p>① WritableFont font=new WritableFont(WritableFont.createFont(&quot;宋体&quot;),12,WritableFont.NO_BOLD );</p><p>② WritableCellFormat format1=new WritableCellFormat(font);</p><p>③ Label label=new Label(0,0,”data 4 test”,format1);</p></blockquote><p>其中</p><blockquote><p>I.指定了字串格式：字体为宋体，字号16，加粗显示。WritableFont有非常丰富的构造子，供不同情况下使用，jExcelAPI的java-doc中有详细列表，这里不再列出。</p><p>II. 处代码使用了WritableCellFormat类，这个类非常重要，通过它可以指定单元格的各种属性，如上例代码所示。</p><p>III. 处使用了Label类的构造子，指定了显示的位置，文本内容，字串被赋予的格式。</p><p>与Label类似的Number、DateTime，区别Label表示文本数据；Number表示数值数据，可使NumberFormat格式化数据；用DateTime表示日期型数据，可应用DateFormat格式化数据。</p></blockquote><h3 id="_3-3-2单元格操作" tabindex="-1"><a class="header-anchor" href="#_3-3-2单元格操作" aria-hidden="true">#</a> 3.3.2单元格操作</h3><p>Excel中很重要的一部分是对单元格的操作，比如行高、列宽、单元格合并等，所幸jExcelAPI提供了这些支持。这些操作相对比较简单，下面只介绍一下相关的API。</p><p><strong>1</strong>**、** <strong>合并单元格</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>WritableSheet.mergeCells(int m,int n,int p,int q);

//作用是从(m,n)到(p,q)的单元格全部合并，比如：

WritableSheet sheet=book.createSheet(“第一页”,0);

//合并第一列第一行到第六列第一行的所有单元格

sheet.mergeCells(0,0,5,0);

//合并既可以是横向的，也可以是纵向的。合并后的单元格不能再次进行合并，否则会触发异常。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2</strong>**、** <strong>行高和列宽</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> writableSheet.setRowView(int i,int height);

//作用是指定第i+1行的高度，比如：

// 将第一行的高度设为200

sheet.setRowView(0,200);

WritableSheet.setColumnView(int i,int width);

//作用是指定第i+1列的宽度，比如：

//将第一列的宽度设为30

sheet.setColumnView(0,30); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-从excel文件读取数据表" tabindex="-1"><a class="header-anchor" href="#_3-4-从excel文件读取数据表" aria-hidden="true">#</a> 3.4 　从Excel文件读取数据表</h3><p>我们就以导入3.2所产生的excel表为例，掌握如何编写导入Excel代码(该代码封装在业务层方法)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public List&lt;ScoreInfo&gt; loadScoreInfo(String xlsPath) throws IOException, BiffException{

//导入已存在的Excel文件，获得只读的工作薄对象
        FileInputStream fis=new FileInputStream(xlsPath);
        Workbook wk=Workbook.getWorkbook(fis);
        //获取第一张Sheet表 
        Sheet sheet=wk.getSheet(0);
        //获取总行数
int rowNum=sheet.getRows();
//从数据行开始迭代每一行
        for(int i=2;i&lt;rowNum;i++){
ScoreInfo info=new ScoreInfo();        
//getCell(column,row)，表示取得指定列指定行的单元格（Cell）
//getContents()获取单元格的内容，返回字符串数据。适用于字符型数据的单元格
//使用实体类封装单元格数据
info.setStuName(sheet.getCell(0, i).getContents());
            info.setClassName(sheet.getCell(1, i).getContents());
            //判断单元格的类型，单元格主要类型LABEL、NUMBER、DATE                    if(sheet.getCell(2,i).getType==CellType.NUMBER){

//转化为数值型单元格
NumberCell numCell=(NumberCell)sheet.getCell(2,i);
//NumberCell的getValue()方法取得单元格的数值型数据
info.setRscore(numCell.getValue());

}
if(sheet.getCell(3,i).getType==CellType.NUMBER){
NumberCell numCell=(NumberCell)sheet.getCell(3,i);
info.setRscore(numCell.getValue);
}

if(sheet.getCell(4,i).getType==CellType.DATE){
DateCell dateCell=(DateCell)sheet.getCell(4,i);
//DateCell的getDate()方法取得单元格的日期型数据
info.setDate(dateCell.getDate());
}
        }
        fis.close();
        wk.close();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-更新已存在的excel文件" tabindex="-1"><a class="header-anchor" href="#_3-4-更新已存在的excel文件" aria-hidden="true">#</a> 3.4 　更新已存在的Excel文件</h3><p>将3.2所产生的excel表（temp.xls）的第一条记录（excel文件的指第三行）的班级名称改为As179，代码如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>File file=new File(&quot;d://temp.xls&quot;);
//导入已存在的Excel文件，获得只读的工作薄对象
Workbook wk=Workbook.getWorkbook(file);
//根据只读的工作薄对象（wk）创建可写入的Excel工作薄对象 
        WritableWorkbook wwb=Workbook.createWorkbook(file, wk);
//读取第一张工作表 
        WritableSheet sheet=wwb.getSheet(0);
///获得要编辑的单元格对象 
        WritableCell cell=sheet.getWritableCell(1, 2);
        //判断单元格的类型, 做出相应的转化 
if(cell.getType()==CellType.LABEL){
            Label lable=(Label)cell;
            //修改单元格的内容
lable.setString(&quot;As179&quot;);
        }
    wwb.write(); 
    wwb.close(); 
    wk.close(); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于更新已存在的Excel文件实际上就是获取已有工作薄对象（但是只读的），然后将获取的只读的工作薄对象转化为可写入的Excel工作薄对象（WritableWorkbook ），其他部分就是通过可写入WritableSheet 对象和可写入WritableCell 对象进行编辑。</p>`,28);function C(F,w){const s=t("ExternalLinkIcon");return c(),o("div",null,[u,n("p",null,[e("Jakarta POI 是一套用于访问微软格式文档的Java API。Jakarta POI有很多组件组成，其中有用于操作Excel格式文件的HSSF和用于操作Word的HWPF，在各种组件中目前只有用于操作Excel的HSSF相对成熟。官方主页"),n("a",p,[e("http://poi.apache.org/index.html，API文档http://poi.apache.org/apidocs/index.html"),a(s)])]),r,n("p",null,[e("官方下载："),n("a",v,[e("http://poi.apache.org/download.html这里可以下载到它的最新版本和文档，目前最新版本是3.7，这里使用比较稳定的3.6版。"),a(s)])]),m,n("p",null,[e("应该说以上功能已经能够大致满足我们的需要。最关键的是这套API是纯Java的，并不依赖Windows系统，即使运行在Linux下，它同样能够正确 的处理Excel文件。另外需要说明的是，这套API对图形和图表的支持很有限，而且仅仅识别PNG格式。 在线帮助文档"),n("a",b,[e("http://jexcelapi.sourceforge.net/resources/javadocs/2_6_10/docs/index.html"),a(s)])]),k,h,S,n("p",null,[e("下载地址 "),n("a",g,[e("http://www.andykhan.com/jexcelapi/"),a(s)])]),x])}const _=i(d,[["render",C],["__file","Java导入导出Excel-POI.html.vue"]]);export{_ as default};
