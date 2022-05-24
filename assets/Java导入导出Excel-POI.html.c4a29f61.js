import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{d as e}from"./app.f6909667.js";const s={},a=e(`<h1 id="java\u5BFC\u5165\u5BFC\u51FAexcel-poi" tabindex="-1"><a class="header-anchor" href="#java\u5BFC\u5165\u5BFC\u51FAexcel-poi" aria-hidden="true">#</a> Java\u5BFC\u5165\u5BFC\u51FAExcel-POI</h1><h2 id="\u4E00\u3001\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u4ECB\u7ECD" aria-hidden="true">#</a> \u4E00\u3001\u4ECB\u7ECD</h2><p>\u5F53\u524DB/S\u6A21\u5F0F\u5DF2\u6210\u4E3A\u5E94\u7528\u5F00\u53D1\u7684\u4E3B\u6D41\uFF0C\u800C\u5728\u4F01\u4E1A\u529E\u516C\u7CFB\u7EDF\u4E2D\uFF0C\u5E38\u5E38\u6709\u5BA2\u6237\u8FD9\u6837\u5B50\u8981\u6C42\uFF1A\u4F60\u8981\u628A\u6211\u4EEC\u7684\u62A5\u8868\u76F4\u63A5\u7528Excel\u6253\u5F00(\u7535\u4FE1\u7CFB\u7EDF\u3001\u94F6\u884C\u7CFB\u7EDF)\u3002\u6216\u8005\u662F\uFF1A\u6211\u4EEC\u5DF2\u7ECF\u4E60\u60EF\u7528Excel\u6253\u5370\u3002\u8FD9\u6837\u5728\u6211\u4EEC\u5B9E\u9645\u7684\u5F00\u53D1\u4E2D\uFF0C\u5F88\u591A\u65F6\u5019\u9700\u8981\u5B9E\u73B0\u5BFC\u5165\u3001\u5BFC\u51FAExcel\u7684\u5E94\u7528\u3002</p><p>\u76EE\u524D\uFF0C\u6BD4\u8F83\u5E38\u7528\u7684\u5B9E\u73B0Java\u5BFC\u5165\u3001\u5BFC\u51FAExcel\u7684\u6280\u672F\u6709\u4E24\u79CDJakarta POI\u548CJava Excel</p><p>\u4E0B\u9762\u6211\u5C31\u5206\u522B\u8BB2\u89E3\u4E00\u4E0B\u5982\u4F55\u4F7F\u7528\u8FD9\u4E24\u4E2A\u6280\u672F\u5B9E\u73B0\u5BFC\u5165\u3001\u5BFC\u51FAExcel</p><h2 id="\u4E8C\u3001\u4F7F\u7528jakarta-poi\u5BFC\u5165\u3001\u5BFC\u51FAexcel" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u4F7F\u7528jakarta-poi\u5BFC\u5165\u3001\u5BFC\u51FAexcel" aria-hidden="true">#</a> \u4E8C\u3001\u4F7F\u7528Jakarta POI\u5BFC\u5165\u3001\u5BFC\u51FAExcel</h2><p>Jakarta POI \u662F\u4E00\u5957\u7528\u4E8E\u8BBF\u95EE\u5FAE\u8F6F\u683C\u5F0F\u6587\u6863\u7684Java API\u3002Jakarta POI\u6709\u5F88\u591A\u7EC4\u4EF6\u7EC4\u6210\uFF0C\u5176\u4E2D\u6709\u7528\u4E8E\u64CD\u4F5CExcel\u683C\u5F0F\u6587\u4EF6\u7684HSSF\u548C\u7528\u4E8E\u64CD\u4F5CWord\u7684HWPF\uFF0C\u5728\u5404\u79CD\u7EC4\u4EF6\u4E2D\u76EE\u524D\u53EA\u6709\u7528\u4E8E\u64CD\u4F5CExcel\u7684HSSF\u76F8\u5BF9\u6210\u719F\u3002\u5B98\u65B9\u4E3B\u9875http://poi.apache.org/index.html\uFF0CAPI\u6587\u6863http://poi.apache.org/apidocs/index.html</p><p><strong>\u4F8B\u5B50\uFF1A</strong></p><p>pom\u6587\u4EF6\u5BFC\u5165\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.poi<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>poi<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>5.2.2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">testExport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//\u521B\u5EFAHSSFWorkbook\u5BF9\u8C61(excel\u7684\u6587\u6863\u5BF9\u8C61)</span>
    <span class="token class-name">HSSFWorkbook</span> wb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HSSFWorkbook</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//\u5EFA\u7ACB\u65B0\u7684sheet\u5BF9\u8C61\uFF08excel\u7684\u8868\u5355\uFF09</span>
    <span class="token class-name">HSSFSheet</span> sheet<span class="token operator">=</span>wb<span class="token punctuation">.</span><span class="token function">createSheet</span><span class="token punctuation">(</span><span class="token string">&quot;\u6210\u7EE9\u8868&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    sheet<span class="token punctuation">.</span><span class="token function">setDefaultRowHeightInPoints</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u8BBE\u7F6E\u7F3A\u7701\u5217\u9AD8</span>
    sheet<span class="token punctuation">.</span><span class="token function">setDefaultColumnWidth</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u8BBE\u7F6E\u7F3A\u7701\u5217\u5BBD</span>

    <span class="token comment">//1\u3001\u521B\u5EFAHSSFCellStyle</span>
    <span class="token class-name">HSSFCellStyle</span> cellStyle<span class="token operator">=</span>wb<span class="token punctuation">.</span><span class="token function">createCellStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//2\u3001\u8BBE\u7F6E\u6837\u5F0F</span>
    <span class="token comment">// \u8BBE\u7F6E\u5355\u5143\u683C\u7684\u6A2A\u5411\u548C\u7EB5\u5411\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u5177\u4F53\u53C2\u6570\u5C31\u4E0D\u5217\u4E86\uFF0C\u53C2\u8003HSSFCellStyle</span>
    cellStyle<span class="token punctuation">.</span><span class="token function">setAlignment</span><span class="token punctuation">(</span><span class="token class-name">HorizontalAlignment</span><span class="token punctuation">.</span>CENTER<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cellStyle<span class="token punctuation">.</span><span class="token function">setFillBackgroundColor</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">short</span><span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cellStyle<span class="token punctuation">.</span><span class="token function">setVerticalAlignment</span><span class="token punctuation">(</span><span class="token class-name">VerticalAlignment</span><span class="token punctuation">.</span>CENTER<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cellStyle<span class="token punctuation">.</span><span class="token function">setFillForegroundColor</span><span class="token punctuation">(</span><span class="token class-name">IndexedColors</span><span class="token punctuation">.</span>GREY_25_PERCENT<span class="token punctuation">.</span><span class="token function">getIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cellStyle<span class="token punctuation">.</span><span class="token function">setFillPattern</span><span class="token punctuation">(</span><span class="token class-name">FillPatternType</span><span class="token punctuation">.</span>SOLID_FOREGROUND<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//\u8BBE\u7F6E\u586B\u5145\u65B9\u5F0F(\u586B\u5145\u56FE\u6848)</span>
    <span class="token comment">//cellStyle.setFillPattern(FillPatternType.DIAMONDS);</span>
    <span class="token comment">//\u8BBE\u7F6E\u80CC\u666F\u989C\u8272</span>
    <span class="token comment">//cellStyle.setFillBackgroundColor((short) 8);</span>
    <span class="token comment">//\u8BBE\u7F6E\u65E5\u671F\u578B\u6570\u636E\u7684\u663E\u793A\u6837\u5F0F</span>
    cellStyle<span class="token punctuation">.</span><span class="token function">setDataFormat</span><span class="token punctuation">(</span><span class="token class-name">HSSFDataFormat</span><span class="token punctuation">.</span><span class="token function">getBuiltinFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yy-mm-dd h:mm&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//\u5728sheet\u91CC\u521B\u5EFA\u7B2C\u4E00\u884C\uFF0C\u53C2\u6570\u4E3A\u884C\u7D22\u5F15(excel\u7684\u884C)\uFF0C\u53EF\u4EE5\u662F0\uFF5E65535\u4E4B\u95F4\u7684\u4EFB\u4F55\u4E00\u4E2A</span>
    <span class="token class-name">HSSFRow</span> row1<span class="token operator">=</span>sheet<span class="token punctuation">.</span><span class="token function">createRow</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//row1.setHeight((short) 30);</span>
    <span class="token comment">//\u521B\u5EFA\u5355\u5143\u683C\uFF08excel\u7684\u5355\u5143\u683C\uFF0C\u53C2\u6570\u4E3A\u5217\u7D22\u5F15\uFF0C\u53EF\u4EE5\u662F0\uFF5E255\u4E4B\u95F4\u7684\u4EFB\u4F55\u4E00\u4E2A</span>
    <span class="token class-name">HSSFCell</span> cell<span class="token operator">=</span>row1<span class="token punctuation">.</span><span class="token function">createCell</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cell<span class="token punctuation">.</span><span class="token function">setCellStyle</span><span class="token punctuation">(</span>cellStyle<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//\u8BBE\u7F6E\u5355\u5143\u683C\u5185\u5BB9</span>
    cell<span class="token punctuation">.</span><span class="token function">setCellValue</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B66\u5458\u8003\u8BD5\u6210\u7EE9\u4E00\u89C8\u8868&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//\u5408\u5E76\u5355\u5143\u683CCellRangeAddress\u6784\u9020\u53C2\u6570\u4F9D\u6B21\u8868\u793A\u8D77\u59CB\u884C\uFF0C\u622A\u81F3\u884C\uFF0C\u8D77\u59CB\u5217\uFF0C \u622A\u81F3\u5217</span>
    sheet<span class="token punctuation">.</span><span class="token function">addMergedRegion</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CellRangeAddress</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">HSSFCellStyle</span> cellStyle2<span class="token operator">=</span>wb<span class="token punctuation">.</span><span class="token function">createCellStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cellStyle2<span class="token punctuation">.</span><span class="token function">setAlignment</span><span class="token punctuation">(</span><span class="token class-name">HorizontalAlignment</span><span class="token punctuation">.</span>CENTER<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cellStyle2<span class="token punctuation">.</span><span class="token function">setFillForegroundColor</span><span class="token punctuation">(</span><span class="token class-name">IndexedColors</span><span class="token punctuation">.</span>LIGHT_TURQUOISE1<span class="token punctuation">.</span><span class="token function">getIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//\u5728sheet\u91CC\u521B\u5EFA\u7B2C\u4E8C\u884C</span>
    <span class="token class-name">HSSFRow</span> row2<span class="token operator">=</span>sheet<span class="token punctuation">.</span><span class="token function">createRow</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    row2<span class="token punctuation">.</span><span class="token function">setRowStyle</span><span class="token punctuation">(</span>cellStyle2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//\u521B\u5EFA\u5355\u5143\u683C\u5E76\u8BBE\u7F6E\u5355\u5143\u683C\u5185\u5BB9</span>
    <span class="token class-name">HSSFCell</span> cell1 <span class="token operator">=</span> row2<span class="token punctuation">.</span><span class="token function">createCell</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cell1<span class="token punctuation">.</span><span class="token function">setCellStyle</span><span class="token punctuation">(</span>cellStyle2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cell1<span class="token punctuation">.</span><span class="token function">setCellValue</span><span class="token punctuation">(</span><span class="token string">&quot;\u59D3\u540D&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//row2.createCell(0).setCellValue(&quot;\u59D3\u540D&quot;);</span>
    row2<span class="token punctuation">.</span><span class="token function">createCell</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setCellValue</span><span class="token punctuation">(</span><span class="token string">&quot;\u73ED\u7EA7&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    row2<span class="token punctuation">.</span><span class="token function">createCell</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setCellValue</span><span class="token punctuation">(</span><span class="token string">&quot;\u7B14\u8BD5\u6210\u7EE9&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    row2<span class="token punctuation">.</span><span class="token function">createCell</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setCellValue</span><span class="token punctuation">(</span><span class="token string">&quot;\u673A\u8BD5\u6210\u7EE9&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//row2.setRowStyle(cellStyle);</span>
    <span class="token comment">//\u5728sheet\u91CC\u521B\u5EFA\u7B2C\u4E09\u884C</span>
    <span class="token class-name">HSSFRow</span> row3<span class="token operator">=</span>sheet<span class="token punctuation">.</span><span class="token function">createRow</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    row3<span class="token punctuation">.</span><span class="token function">createCell</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setCellValue</span><span class="token punctuation">(</span><span class="token string">&quot;\u674E\u660E&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    row3<span class="token punctuation">.</span><span class="token function">createCell</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setCellValue</span><span class="token punctuation">(</span><span class="token string">&quot;As178&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    row3<span class="token punctuation">.</span><span class="token function">createCell</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setCellValue</span><span class="token punctuation">(</span><span class="token number">87</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    row3<span class="token punctuation">.</span><span class="token function">createCell</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setCellValue</span><span class="token punctuation">(</span><span class="token number">78</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//\u8F93\u51FAExcel\u6587\u4EF6</span>
    <span class="token class-name">FileOutputStream</span> output<span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        output <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token string">&quot;e:\\\\&quot;</span><span class="token operator">+</span><span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;workbook.xls&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        wb<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>output<span class="token punctuation">)</span><span class="token punctuation">;</span>
        output<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u4EE5\u4E0B\u7684\u4E00\u4E9B\u8BED\u6CD5\u53EF\u80FD\u662F\u56E0\u4E3A\u7248\u672C\u95EE\u9898\u6CA1\u6709\u8BE5\u65B9\u6CD5</p></blockquote><h3 id="_2-1-\u73AF\u5883\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-1-\u73AF\u5883\u914D\u7F6E" aria-hidden="true">#</a> 2.1 \u73AF\u5883\u914D\u7F6E</h3><h3 id="_2-1-1\u4E0B\u8F7Djar" tabindex="-1"><a class="header-anchor" href="#_2-1-1\u4E0B\u8F7Djar" aria-hidden="true">#</a> 2.1.1\u4E0B\u8F7Djar</h3><p>\u5B98\u65B9\u4E0B\u8F7D\uFF1Ahttp://poi.apache.org/download.html\u8FD9\u91CC\u53EF\u4EE5\u4E0B\u8F7D\u5230\u5B83\u7684\u6700\u65B0\u7248\u672C\u548C\u6587\u6863\uFF0C\u76EE\u524D\u6700\u65B0\u7248\u672C\u662F3.7\uFF0C\u8FD9\u91CC\u4F7F\u7528\u6BD4\u8F83\u7A33\u5B9A\u76843.6\u7248\u3002</p><h3 id="_2-1-2\u52A0\u5165jar\u5305" tabindex="-1"><a class="header-anchor" href="#_2-1-2\u52A0\u5165jar\u5305" aria-hidden="true">#</a> 2.1.2\u52A0\u5165jar\u5305</h3><p>\u5C06\u6839\u76EE\u5F55\u4E0B\u7684poi-3.6-20091214.jar\u548CLib\u76EE\u5F55\u4E0B\u4E09\u4E2A\u901A\u7528\u5305 commons-logging-1.1.jar junit-3.8.1.jar log4j-1.2.13.jar\u62F7\u8D1D\u5230\u9879\u76EE\u7684Lib\u4E0B</p><h3 id="_2-2-jakarta-poi-hssf-api\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-2-jakarta-poi-hssf-api\u7EC4\u4EF6" aria-hidden="true">#</a> 2.2 Jakarta POI HSSF API\u7EC4\u4EF6</h3><p>HSSF\uFF08\u7528\u4E8E\u64CD\u4F5CExcel\u7684\u7EC4\u4EF6\uFF09\u63D0\u4F9B\u7ED9\u7528\u6237\u4F7F\u7528\u7684\u5BF9\u8C61\u5728rg.apache.poi.hssf.usermodel\u5305\u4E2D,\u4E3B\u8981\u90E8\u5206\u5305\u62ECExcel\u5BF9\u8C61\uFF0C\u6837\u5F0F\u548C\u683C\u5F0F\uFF0C\u8FD8\u6709\u8F85\u52A9\u64CD\u4F5C\u3002\u6709\u4EE5\u4E0B\u51E0\u79CD\u5BF9\u8C61\uFF1A</p><blockquote><p><strong>\u5E38\u7528\u7EC4\u4EF6\uFF1A</strong></p><p>HSSFWorkbook excel\u7684\u6587\u6863\u5BF9\u8C61</p><p>HSSFSheet excel\u7684\u8868\u5355</p><p>HSSFRow excel\u7684\u884C</p><p>HSSFCell excel\u7684\u683C\u5B50\u5355\u5143</p><p>HSSFFont excel\u5B57\u4F53</p><p>HSSFDataFormat \u65E5\u671F\u683C\u5F0F</p><p>HSSFHeader sheet\u5934</p><p>HSSFFooter sheet\u5C3E\uFF08\u53EA\u6709\u6253\u5370\u7684\u65F6\u5019\u624D\u80FD\u770B\u5230\u6548\u679C\uFF09</p><p><strong>\u6837\u5F0F\uFF1A</strong></p><p>HSSFCellStyle cell\u6837\u5F0F</p><p><strong>\u8F85\u52A9\u64CD\u4F5C\u5305\u62EC\uFF1A</strong></p><p>HSSFDateUtil \u65E5\u671F</p><p>HSSFPrintSetup \u6253\u5370</p><p>HSSFErrorConstants \u9519\u8BEF\u4FE1\u606F\u8868</p></blockquote><h3 id="_2-3-\u57FA\u672C\u64CD\u4F5C\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#_2-3-\u57FA\u672C\u64CD\u4F5C\u6B65\u9AA4" aria-hidden="true">#</a> 2.3 \u57FA\u672C\u64CD\u4F5C\u6B65\u9AA4</h3><p>\u9996\u5148\uFF0C\u7406\u89E3\u4E00\u4E0B\u4E00\u4E2AExcel\u7684\u6587\u4EF6\u7684\u7EC4\u7EC7\u5F62\u5F0F\uFF0C\u4E00\u4E2AExcel\u6587\u4EF6\u5BF9\u5E94\u4E8E\u4E00\u4E2Aworkbook(HSSFWorkbook)\uFF0C\u4E00\u4E2Aworkbook\u53EF\u4EE5\u6709\u591A\u4E2Asheet\uFF08HSSFSheet\uFF09\u7EC4\u6210\uFF0C\u4E00\u4E2Asheet\u662F\u7531\u591A\u4E2Arow\uFF08HSSFRow\uFF09\u7EC4\u6210\uFF0C\u4E00\u4E2Arow\u662F\u7531\u591A\u4E2Acell\uFF08HSSFCell\uFF09\u7EC4\u6210\u3002</p><p><strong>\u57FA\u672C\u64CD\u4F5C\u6B65\u9AA4\uFF1A</strong></p><blockquote><p>1\u3001\u7528HSSFWorkbook\u6253\u5F00\u6216\u8005\u521B\u5EFA\u201CExcel\u6587\u4EF6\u5BF9\u8C61\u201D</p><p>2\u3001\u7528HSSFWorkbook\u5BF9\u8C61\u8FD4\u56DE\u6216\u8005\u521B\u5EFASheet\u5BF9\u8C61</p><p>3\u3001\u7528Sheet\u5BF9\u8C61\u8FD4\u56DE\u884C\u5BF9\u8C61\uFF0C\u7528\u884C\u5BF9\u8C61\u5F97\u5230Cell\u5BF9\u8C61</p><p>4\u3001\u5BF9Cell\u5BF9\u8C61\u8BFB\u5199\u3002</p></blockquote><p>\u4E0B\u9762\u6765\u770B\u4E00\u4E2A\u52A8\u6001\u751F\u6210Excel\u6587\u4EF6\u7684\u4F8B\u5B50\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u521B\u5EFAHSSFWorkbook\u5BF9\u8C61
HSSFWorkbook wb = new HSSFWorkbook();
//\u521B\u5EFAHSSFSheet\u5BF9\u8C61
HSSFSheet sheet = wb.createSheet(&quot;sheet0&quot;);
//\u521B\u5EFAHSSFRow\u5BF9\u8C61
HSSFRow row = sheet.createRow(0);
//\u521B\u5EFAHSSFCell\u5BF9\u8C61
HSSFCell cell=row.createCell(0);
//\u8BBE\u7F6E\u5355\u5143\u683C\u7684\u503C
cell.setCellValue(&quot;\u5355\u5143\u683C\u4E2D\u7684\u4E2D\u6587&quot;);
//\u8F93\u51FAExcel\u6587\u4EF6
FileOutputStream output=new FileOutputStream(&quot;d:\\\\workbook.xls&quot;);
wkb.write(output);
output.flush();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HSSF\u8BFB\u53D6\u6587\u4EF6\u540C\u6837\u8FD8\u662F\u4F7F\u7528\u8FD9\u51E0\u4E2A\u5BF9\u8C61\uFF0C\u53EA\u662F\u628A\u76F8\u5E94\u7684createXXX\u65B9\u6CD5\u53D8\u6210\u4E86getXXX\u65B9\u6CD5\u5373\u53EF\u3002\u53EF\u89C1\u53EA\u8981\u7406\u89E3\u4E86\u5176\u4E2D\u539F\u7406\uFF0C\u4E0D\u7BA1\u662F\u8BFB\u8FD8\u662F\u5199\u4EA6\u6216\u662F\u7279\u5B9A\u683C\u5F0F\u90FD\u53EF\u4EE5\u8F7B\u677E\u5B9E\u73B0\uFF0C\u6B63\u6240\u8C13\u77E5\u5176\u7136\u66F4\u8981\u77E5\u5176\u6240\u4EE5\u7136\u3002</p><h3 id="_2-4-\u5BFC\u51FAexcel\u5E94\u7528\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-4-\u5BFC\u51FAexcel\u5E94\u7528\u5B9E\u4F8B" aria-hidden="true">#</a> 2.4 \u5BFC\u51FAExcel\u5E94\u7528\u5B9E\u4F8B</h3><p>\u57282.3\u4E2D\u6211\u4EEC\u5BE5\u5BE5\u51E0\u884C\u4EE3\u7801\u5B9E\u9645\u4E0A\u5C31\u5DF2\u7ECF\u5C31\u662F\u5B9E\u73B0\u4E86\u5BFC\u51FAExcel\u4E00\u4E2A\u7B80\u5355\u793A\u4F8B\uFF0C\u4E0B\u9762\u6211\u4EEC\u5728\u770B\u5982\u4F55\u5B9E\u73B0\u5BFC\u51FA\u5982\u56FE\u6240\u793A\u7684Excel\u8868\u683C\uFF1F</p><p><img src="http://alist.ciberviler.top/d/ecloud180/images/blogImage/170838550954408.png" alt="img" loading="lazy"></p><p>\u4EE3\u7801\u5982\u4E0B\uFF1A\uFF08\u5B9E\u9645\u5F00\u53D1\u4E2D\u5E94\u5C01\u88C5\u5230\u4E1A\u52A1\u5C42\u7EC4\u4EF6\u4E2D\uFF0C\u7136\u540E\u5728\u63A7\u5236\u5C42\u4E2D\u8C03\u7528\u3002\u8FD9\u91CC\u76F4\u63A5\u5199\u5728\u63A7\u5236\u5C42\u7EC4\u4EF6\uFF0C\u5982Servlet\u7684doGet/doPost\u65B9\u6CD5\u6216Struts\u6846\u67B6\u7684execute\u65B9\u6CD5\u4E2D\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u521B\u5EFAHSSFWorkbook\u5BF9\u8C61(excel\u7684\u6587\u6863\u5BF9\u8C61)
      HSSFWorkbook wb = new HSSFWorkbook();
//\u5EFA\u7ACB\u65B0\u7684sheet\u5BF9\u8C61\uFF08excel\u7684\u8868\u5355\uFF09
HSSFSheet sheet=wkb.createSheet(&quot;\u6210\u7EE9\u8868&quot;);
//\u5728sheet\u91CC\u521B\u5EFA\u7B2C\u4E00\u884C\uFF0C\u53C2\u6570\u4E3A\u884C\u7D22\u5F15(excel\u7684\u884C)\uFF0C\u53EF\u4EE5\u662F0\uFF5E65535\u4E4B\u95F4\u7684\u4EFB\u4F55\u4E00\u4E2A
HSSFRow row1=sheet.createRow(0);
//\u521B\u5EFA\u5355\u5143\u683C\uFF08excel\u7684\u5355\u5143\u683C\uFF0C\u53C2\u6570\u4E3A\u5217\u7D22\u5F15\uFF0C\u53EF\u4EE5\u662F0\uFF5E255\u4E4B\u95F4\u7684\u4EFB\u4F55\u4E00\u4E2A
HSSFCell cell=row1.createCell(0);
      //\u8BBE\u7F6E\u5355\u5143\u683C\u5185\u5BB9
cell.setCellValue(&quot;\u5B66\u5458\u8003\u8BD5\u6210\u7EE9\u4E00\u89C8\u8868&quot;);
//\u5408\u5E76\u5355\u5143\u683CCellRangeAddress\u6784\u9020\u53C2\u6570\u4F9D\u6B21\u8868\u793A\u8D77\u59CB\u884C\uFF0C\u622A\u81F3\u884C\uFF0C\u8D77\u59CB\u5217\uFF0C \u622A\u81F3\u5217
sheet.addMergedRegion(new CellRangeAddress(0,0,0,3));
//\u5728sheet\u91CC\u521B\u5EFA\u7B2C\u4E8C\u884C
HSSFRow row2=sheet.createRow(1);    
      //\u521B\u5EFA\u5355\u5143\u683C\u5E76\u8BBE\u7F6E\u5355\u5143\u683C\u5185\u5BB9
      row2.createCell(0).setCellValue(&quot;\u59D3\u540D&quot;);
      row2.createCell(1).setCellValue(&quot;\u73ED\u7EA7&quot;);    
      row2.createCell(2).setCellValue(&quot;\u7B14\u8BD5\u6210\u7EE9&quot;);
row2.createCell(3).setCellValue(&quot;\u673A\u8BD5\u6210\u7EE9&quot;);    
      //\u5728sheet\u91CC\u521B\u5EFA\u7B2C\u4E09\u884C
      HSSFRow row3=sheet.createRow(2);
      row3.createCell(0).setCellValue(&quot;\u674E\u660E&quot;);
      row3.createCell(1).setCellValue(&quot;As178&quot;);
      row3.createCell(2).setCellValue(87);    
      row3.createCell(3).setCellValue(78);    
  //.....\u7701\u7565\u90E8\u5206\u4EE3\u7801


//\u8F93\u51FAExcel\u6587\u4EF6
    OutputStream output=response.getOutputStream();
    response.reset();
    response.setHeader(&quot;Content-disposition&quot;, &quot;attachment; filename=details.xls&quot;);
    response.setContentType(&quot;application/msexcel&quot;);        
    wkb.write(output);
    output.close();
retrun null;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u52A0\u4E0B\u5212\u7EBF\u8FD9\u90E8\u5206\u4EE3\u7801\u662FB/S\u6A21\u5F0F\u4E2D\u91C7\u7528\u7684\u8F93\u51FA\u65B9\u5F0F\uFF0C\u800C\u4E0D\u662F\u8F93\u51FA\u5230\u672C\u5730\u6307\u5B9A\u7684\u78C1\u76D8\u76EE\u5F55\u3002\u8BE5\u4EE3\u7801\u8868\u793A\u5C06details.xls\u7684Excel\u6587\u4EF6\u901A\u8FC7\u5E94\u7B54\u5B9E\u4F53\uFF08response\uFF09\u8F93\u51FA\u7ED9\u8BF7\u6C42\u7684\u5BA2\u6237\u7AEF\u6D4F\u89C8\u5668\uFF0C\u5BA2\u6237\u7AEF\u53EF\u4FDD\u5B58\u6216\u76F4\u63A5\u6253\u5F00\u3002</p><h3 id="_2-5-\u6837\u5F0F\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-5-\u6837\u5F0F\u8BBE\u7F6E" aria-hidden="true">#</a> 2.5 \u6837\u5F0F\u8BBE\u7F6E</h3><p>\u5728\u5B9E\u9645\u5E94\u7528\u4E2D\u5BFC\u51FA\u7684Excel\u6587\u4EF6\u5F80\u5F80\u9700\u8981\u9605\u8BFB\u548C\u6253\u5370\u7684\uFF0C\u8FD9\u5C31\u9700\u8981\u5BF9\u8F93\u51FA\u7684Excel\u6587\u6863\u8FDB\u884C\u6392\u7248\u548C\u6837\u5F0F\u7684\u8BBE\u7F6E\uFF0C\u4E3B\u8981\u64CD\u4F5C\u6709\u5408\u5E76\u5355\u5143\u683C\u3001\u8BBE\u7F6E\u5355\u5143\u683C\u6837\u5F0F\u3001\u8BBE\u7F6E\u5B57\u4F53\u6837\u5F0F\u7B49\u3002</p><h3 id="_2-5-1\u5355\u5143\u683C\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#_2-5-1\u5355\u5143\u683C\u5408\u5E76" aria-hidden="true">#</a> 2.5.1\u5355\u5143\u683C\u5408\u5E76</h3><p>\u4F7F\u7528HSSFSheet\u7684addMergedRegion()\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public int addMergedRegion(CellRangeAddress region)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u53C2\u6570CellRangeAddress \u8868\u793A\u5408\u5E76\u7684\u533A\u57DF\uFF0C\u6784\u9020\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>CellRangeAddress(int firstRow, int lastRow, int firstCol, int lastCol)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6784\u9020\u53C2\u6570\u4F9D\u6B21\u8868\u793A\u8D77\u59CB\u884C\uFF0C\u622A\u81F3\u884C\uFF0C\u8D77\u59CB\u5217\uFF0C \u622A\u81F3\u5217\u3002\u793A\u4F8B\u4EE3\u7801\u53C2\u71672.4\u90E8\u5206</p><h3 id="_2-5-2\u8BBE\u7F6E\u5355\u5143\u683C\u7684\u884C\u9AD8\u3001\u5217\u5BBD" tabindex="-1"><a class="header-anchor" href="#_2-5-2\u8BBE\u7F6E\u5355\u5143\u683C\u7684\u884C\u9AD8\u3001\u5217\u5BBD" aria-hidden="true">#</a> 2.5.2\u8BBE\u7F6E\u5355\u5143\u683C\u7684\u884C\u9AD8\u3001\u5217\u5BBD</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>HSSFSheet sheet=wb.createSheet();

sheet.setDefaultRowHeightInPoints(10);//\u8BBE\u7F6E\u7F3A\u7701\u5217\u9AD8sheet.setDefaultColumnWidth(20);//\u8BBE\u7F6E\u7F3A\u7701\u5217\u5BBD

//\u8BBE\u7F6E\u6307\u5B9A\u5217\u7684\u5217\u5BBD\uFF0C256 * 50\u8FD9\u79CD\u5199\u6CD5\u662F\u56E0\u4E3Awidth\u53C2\u6570\u5355\u4F4D\u662F\u5355\u4E2A\u5B57\u7B26\u7684256\u5206\u4E4B\u4E00

sheet.setColumnWidth(cell.getColumnIndex(), 256 * 50);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-2\u5355\u5143\u683C\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-5-2\u5355\u5143\u683C\u6837\u5F0F" aria-hidden="true">#</a> 2.5.2\u5355\u5143\u683C\u6837\u5F0F</h3><p>1\u3001\u521B\u5EFAHSSFCellStyle</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> HSSFCellStyle cellStyle=wkb.createCellStyle();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2\u3001\u8BBE\u7F6E\u6837\u5F0F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> // \u8BBE\u7F6E\u5355\u5143\u683C\u7684\u6A2A\u5411\u548C\u7EB5\u5411\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u5177\u4F53\u53C2\u6570\u5C31\u4E0D\u5217\u4E86\uFF0C\u53C2\u8003HSSFCellStyle

  cellStyle.setAlignment(HSSFCellStyle.ALIGN_JUSTIFY);

  cellStyle.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);

  /* \u8BBE\u7F6E\u5355\u5143\u683C\u7684\u586B\u5145\u65B9\u5F0F\uFF0C\u4EE5\u53CA\u524D\u666F\u989C\u8272\u548C\u80CC\u666F\u989C\u8272

   \u4E09\u70B9\u6CE8\u610F\uFF1A

   1.\u5982\u679C\u9700\u8981\u524D\u666F\u989C\u8272\u6216\u80CC\u666F\u989C\u8272\uFF0C\u4E00\u5B9A\u8981\u6307\u5B9A\u586B\u5145\u65B9\u5F0F\uFF0C\u4E24\u8005\u987A\u5E8F\u65E0\u6240\u8C13\uFF1B

   2.\u5982\u679C\u540C\u65F6\u5B58\u5728\u524D\u666F\u989C\u8272\u548C\u80CC\u666F\u989C\u8272\uFF0C\u524D\u666F\u989C\u8272\u7684\u8BBE\u7F6E\u8981\u5199\u5728\u524D\u9762\uFF1B

   3.\u524D\u666F\u989C\u8272\u4E0D\u662F\u5B57\u4F53\u989C\u8272\u3002

  */

  //\u8BBE\u7F6E\u586B\u5145\u65B9\u5F0F(\u586B\u5145\u56FE\u6848)

  cellStyle.setFillPattern(HSSFCellStyle.DIAMONDS);

  //\u8BBE\u7F6E\u524D\u666F\u8272

  cellStyle.setFillForegroundColor(HSSFColor.RED.index);

  //\u8BBE\u7F6E\u80CC\u666F\u989C\u8272

  cellStyle.setFillBackgroundColor(HSSFColor.LIGHT_YELLOW.index);

  // \u8BBE\u7F6E\u5355\u5143\u683C\u5E95\u90E8\u7684\u8FB9\u6846\u53CA\u5176\u6837\u5F0F\u548C\u989C\u8272

  // \u8FD9\u91CC\u4EC5\u8BBE\u7F6E\u4E86\u5E95\u8FB9\u8FB9\u6846\uFF0C\u5DE6\u8FB9\u6846\u3001\u53F3\u8FB9\u6846\u548C\u9876\u8FB9\u6846\u540C\u7406\u53EF\u8BBE

  cellStyle.setBorderBottom(HSSFCellStyle.BORDER_SLANTED_DASH_DOT);

  cellStyle.setBottomBorderColor(HSSFColor.DARK_RED.index);

  //\u8BBE\u7F6E\u65E5\u671F\u578B\u6570\u636E\u7684\u663E\u793A\u6837\u5F0F

  cellStyle.setDataFormat(HSSFDataFormat.getBuiltinFormat(&quot;m/d/yy h:mm&quot;));  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3\u3001\u5C06\u6837\u5F0F\u5E94\u7528\u4E8E\u5355\u5143\u683C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  cell.setCellStyle(cellStyle);

  //\u5C06\u6837\u5F0F\u5E94\u7528\u5230\u884C\uFF0C\u4F46\u6709\u4E9B\u6837\u5F0F\u53EA\u5BF9\u5355\u5143\u683C\u8D77\u4F5C\u7528

  row.setRowStyle(cellStyle);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-2\u8BBE\u7F6E\u5B57\u4F53\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#_2-5-2\u8BBE\u7F6E\u5B57\u4F53\u6837\u5F0F" aria-hidden="true">#</a> 2.5.2\u8BBE\u7F6E\u5B57\u4F53\u6837\u5F0F</h3><p>1\u3001\u521B\u5EFAHSSFFont\u5BF9\u8C61\uFF08\u8C03\u7528HSSFWorkbook \u7684createFont\u65B9\u6CD5\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>HSSFWorkbook wb=new HSSFWorkbook();

HSSFFont  fontStyle=wb.createFont();

HSSFWorkbook wb=new HSSFWorkbook ();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2\u3001\u8BBE\u7F6E\u5B57\u4F53\u5404\u79CD\u6837\u5F0F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  //\u8BBE\u7F6E\u5B57\u4F53\u6837\u5F0F

  fontStyle.setFontName(&quot;\u5B8B\u4F53&quot;);  

  //\u8BBE\u7F6E\u5B57\u4F53\u9AD8\u5EA6

  fontStyle.setFontHeightInPoints((short)20);  

  //\u8BBE\u7F6E\u5B57\u4F53\u989C\u8272

  font.setColor(HSSFColor.BLUE.index);

  //\u8BBE\u7F6E\u7C97\u4F53

  fontStyle.setBoldweight(HSSFFont.BOLDWEIGHT_BOLD);

  //\u8BBE\u7F6E\u659C\u4F53

font.setItalic(true);

//\u8BBE\u7F6E\u4E0B\u5212\u7EBF

font.setUnderline(HSSFFont.U_SINGLE);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3\u3001\u5C06\u5B57\u4F53\u8BBE\u7F6E\u5230\u5355\u5143\u683C\u6837\u5F0F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u5B57\u4F53\u4E5F\u662F\u5355\u5143\u683C\u683C\u5F0F\u7684\u4E00\u90E8\u5206\uFF0C\u6240\u4EE5\u4ECE\u5C5E\u4E8EHSSFCellStyle

// \u5C06\u5B57\u4F53\u5BF9\u8C61\u8D4B\u503C\u7ED9\u5355\u5143\u683C\u6837\u5F0F\u5BF9\u8C61

cellStyle.setFont(font);

// \u5C06\u5355\u5143\u683C\u6837\u5F0F\u5E94\u7528\u4E8E\u5355\u5143\u683C

cell.setCellStyle(cellStyle);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-\u5BFC\u5165excel\u5E94\u7528\u5B9E\u4F8B" tabindex="-1"><a class="header-anchor" href="#_2-6-\u5BFC\u5165excel\u5E94\u7528\u5B9E\u4F8B" aria-hidden="true">#</a> 2.6 \u5BFC\u5165Excel\u5E94\u7528\u5B9E\u4F8B</h3><p>\u5B9E\u73B0\u5C06\u5DF2\u5B58\u5728\u7684Excel\u6587\u4EF6\u4E2D\u7684\u6570\u636E\u5BFC\u5165\u5230\u7CFB\u7EDF\u4E2D\u7684\u57FA\u672C\u6B65\u9AA4\u540C\u5BFC\u51FA\u5341\u5206\u7684\u7C7B\u4F3C\uFF0C\u5173\u952E\u5728\u4E8E\u8981\u4E86\u89E3\u8981\u5BFC\u5165Excel\u6587\u4EF6\u7684\u7ED3\u6784\uFF0C\u6BD4\u5982\u6570\u636E\u6709\u54EA\u4E9B\u5217\u3001\u8BFB\u53D6\u6570\u636E\u8D77\u59CB\u4F4D\u7F6E\uFF08\u6709\u6548\u6570\u636E\u4ECE\u7B2C\u51E0\u884C\u51E0\u5217\u5F00\u59CB\uFF09\u7B49\u3002\u5728\u5B9E\u9645\u9879\u76EE\u4E2D\u7531\u4E8E\u8FD9\u4E9B\u6570\u636E\uFF08Excel\u6587\u4EF6\uFF09\u5F80\u5F80\u6765\u81EA\u4E8E\u65E5\u5E38\u529E\u516C\u4EBA\u5458\u6216\u5176\u4ED6\u7CFB\u7EDF\u5E73\u53F0\u4EA7\u751F\u7684\u4E1A\u52A1\u6570\u636E\uFF0C\u56E0\u6B64\u8FD9\u4E9BExcel\u6587\u4EF6\u7684\u6570\u636E\u683C\u5F0F\u8981\u6709\u7EDF\u4E00\u7684\u8981\u6C42\uFF0C\u5E76\u63D0\u4F9B\u8BBF\u95EE\u63A5\u53E3\uFF08\u6307\u8BBF\u95EE\u9014\u5F84\uFF09\uFF0C\u8FD9\u6837\u5728\u6240\u9700\u6570\u636E\u7684\u7CFB\u7EDF\u4E2D\u5C31\u53EF\u901A\u8FC7\u63D0\u4F9B\u8FD9\u4E2A\u8BBF\u95EE\u63A5\u53E3\u8C03\u7528\u65B9\u6CD5\uFF0C\u4ECE\u800C\u83B7\u5F97\u6570\u636E\u3002\u89E3\u51B3\u65B9\u6848\u91C7\u7528Web Service\u662F\u4E0D\u9519\u7684\u9009\u62E9\u3002\u8FD9\u91CC\uFF0C\u6211\u4EEC\u5C31\u4EE5\u5BFC\u51652..4\u6240\u4EA7\u751F\u7684excel\u8868\u4E3A\u4F8B\uFF0C\u91CD\u70B9\u638C\u63E1\u5982\u4F55\u7F16\u5199\u5BFC\u5165Excel\u4EE3\u7801</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public List&lt;ScoreInfo&gt; loadScoreInfo(String xlsPath) throws IOException{
    List temp = new ArrayList();
FileInputStream fileIn = new FileInputStream(xlsPath);
//\u6839\u636E\u6307\u5B9A\u7684\u6587\u4EF6\u8F93\u5165\u6D41\u5BFC\u5165Excel\u4ECE\u800C\u4EA7\u751FWorkbook\u5BF9\u8C61
Workbook wb0 = new HSSFWorkbook(fileIn);
//\u83B7\u53D6Excel\u6587\u6863\u4E2D\u7684\u7B2C\u4E00\u4E2A\u8868\u5355
Sheet sht0 = wb0.getSheetAt(0);
//\u5BF9Sheet\u4E2D\u7684\u6BCF\u4E00\u884C\u8FDB\u884C\u8FED\u4EE3
        for (Row r : sht0) {
        //\u5982\u679C\u5F53\u524D\u884C\u7684\u884C\u53F7\uFF08\u4ECE0\u5F00\u59CB\uFF09\u672A\u8FBE\u52302\uFF08\u7B2C\u4E09\u884C\uFF09\u5219\u4ECE\u65B0\u5FAA\u73AF
If(r.getRowNum()&lt;1){
continue;
}
//\u521B\u5EFA\u5B9E\u4F53\u7C7B
ScoreInfo info=new ScoreInfo();
//\u53D6\u51FA\u5F53\u524D\u884C\u7B2C1\u4E2A\u5355\u5143\u683C\u6570\u636E\uFF0C\u5E76\u5C01\u88C5\u5728info\u5B9E\u4F53stuName\u5C5E\u6027\u4E0A
info.setStuName(r.getCell(0).getStringCellValue());
info.setClassName(r.getCell(1).getStringCellValue());
info.setRscore(r.getCell(2).getNumericCellValue());
            info.setLscore(r.getCell(3).getNumericCellValue());
temp.add(info);
        }
        fileIn.close();    
        return temp;    
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>*\u4E09\u3001\u4F7F\u7528java Excel\u64CD\u4F5CExcel\u6587\u4EF6*</strong></em></p><p>Java Excel\u662F\u4E00\u5F00\u653E\u6E90\u7801\u9879\u76EE\uFF0C\u901A\u8FC7\u5B83Java\u5F00\u53D1\u4EBA\u5458\u53EF\u4EE5\u8BFB\u53D6Excel\u6587\u4EF6\u7684\u5185\u5BB9\u3001\u521B\u5EFA\u65B0\u7684Excel\u6587\u4EF6\u3001\u66F4\u65B0\u5DF2\u7ECF\u5B58\u5728\u7684Excel\u6587\u4EF6\u3002jxl \u7531\u4E8E\u5176\u5C0F\u5DE7 \u6613\u7528\u7684\u7279\u70B9, \u9010\u6E10\u5DF2\u7ECF\u53D6\u4EE3\u4E86 POI-excel\u7684\u5730\u4F4D, \u6210\u4E3A\u4E86\u8D8A\u6765\u8D8A\u591A\u7684java\u5F00\u53D1\u4EBA\u5458\u751F\u6210excel\u6587\u4EF6\u7684\u9996\u9009\u3002Java Excel\u7684\u7279\u5F81\uFF1A</p><blockquote><p>\u25CF \u652F\u6301Excel 95-2000\u7684\u6240\u6709\u7248\u672C \u25CF \u751F\u6210Excel 2000\u6807\u51C6\u683C\u5F0F \u25CF \u652F\u6301\u5B57\u4F53\u3001\u6570\u5B57\u3001\u65E5\u671F\u683C\u5F0F\u5316\u64CD\u4F5C \u25CF \u652F\u6301\u5BF9\u5355\u5143\u683C\u52A0\u9634\u5F71\u548C\u52A0\u8272\u5F69\uFF1B</p><p>\u25CF \u4FEE\u6539\u5B58\u5728\u7684\u5DE5\u4F5C\u8868\uFF1B \u25CF \u652F\u6301\u56FE\u50CF\u548C\u56FE\u8868</p><p>\u25CF \u65E5\u5FD7\u8BB0\u5F55\u53EF\u4EE5\u5B9A\u5236</p><p>\u25CF \u66F4\u5C0F\u66F4\u5FEB\u66F4\u7701\u5185\u5B58</p></blockquote><p>\u5E94\u8BE5\u8BF4\u4EE5\u4E0A\u529F\u80FD\u5DF2\u7ECF\u80FD\u591F\u5927\u81F4\u6EE1\u8DB3\u6211\u4EEC\u7684\u9700\u8981\u3002\u6700\u5173\u952E\u7684\u662F\u8FD9\u5957API\u662F\u7EAFJava\u7684\uFF0C\u5E76\u4E0D\u4F9D\u8D56Windows\u7CFB\u7EDF\uFF0C\u5373\u4F7F\u8FD0\u884C\u5728Linux\u4E0B\uFF0C\u5B83\u540C\u6837\u80FD\u591F\u6B63\u786E \u7684\u5904\u7406Excel\u6587\u4EF6\u3002\u53E6\u5916\u9700\u8981\u8BF4\u660E\u7684\u662F\uFF0C\u8FD9\u5957API\u5BF9\u56FE\u5F62\u548C\u56FE\u8868\u7684\u652F\u6301\u5F88\u6709\u9650\uFF0C\u800C\u4E14\u4EC5\u4EC5\u8BC6\u522BPNG\u683C\u5F0F\u3002 \u5728\u7EBF\u5E2E\u52A9\u6587\u6863http://jexcelapi.sourceforge.net/resources/javadocs/2_6_10/docs/index.html</p><p>\u5728\u8FD9\u91CC\u6211\u4EEC\u5C06\u901A\u8FC7\u4E00\u4E9B\u5B9E\u4F8B\uFF0C\u5B66\u4E60\u638C\u63E1\u8BFB\u53D6\u3001\u65B0\u5EFA\u3001\u66F4\u65B0\uFF0C\u5176\u4E2D\u4E5F\u5305\u62EC\u5E38\u89C1\u683C\u5F0F\u7684\u8BBE\u7F6E:\u5B57\u4F53\u3001\u989C\u8272\u3001\u80CC\u666F\u3001\u5408\u5E76\u5355\u5143\u683C\u7B49\u64CD\u4F5C\uFF0C\u6709\u8FD9\u4E9B\u5176\u5B9E\u5DF2\u7ECF\u57FA\u672C\u8DB3\u591F\u5E94\u4ED8\u5927\u90E8\u5206\u95EE\u9898\u4E86\u3002</p><h3 id="_3-1\u73AF\u5883\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_3-1\u73AF\u5883\u914D\u7F6E" aria-hidden="true">#</a> 3.1\u73AF\u5883\u914D\u7F6E</h3><h3 id="_3-1-1\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#_3-1-1\u4E0B\u8F7D" aria-hidden="true">#</a> 3.1.1\u4E0B\u8F7D</h3><p>\u4E0B\u8F7D\u5730\u5740 http://www.andykhan.com/jexcelapi/</p><h3 id="_3-1-2-\u52A0\u5165jar\u5305" tabindex="-1"><a class="header-anchor" href="#_3-1-2-\u52A0\u5165jar\u5305" aria-hidden="true">#</a> 3.1.2 \u52A0\u5165jar\u5305</h3><p>\u5C06jxl.jar\u62F7\u8D1D\u5230\u9879\u76EE\u7684Lib\u4E0B</p><h3 id="_3-2-\u4F7F\u7528java-excel-api-\u5BFC\u51FA-excel\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-2-\u4F7F\u7528java-excel-api-\u5BFC\u51FA-excel\u6587\u4EF6" aria-hidden="true">#</a> 3.2 \u4F7F\u7528Java Excel Api \u5BFC\u51FA Excel\u6587\u4EF6</h3><p>\u4E0B\u9762\u6211\u4EEC\u5728\u770B\u5982\u4F55\u4F7F\u7528Java Excel\u5B9E\u73B0\u5BFC\u51FAExcel\u8868\u683C\uFF1F</p><p>\u4EE3\u7801\u5982\u4E0B\uFF1A\uFF08\u5B9E\u9645\u5F00\u53D1\u4E2D\u5E94\u5C01\u88C5\u5230\u4E1A\u52A1\u5C42\u7EC4\u4EF6\u4E2D\uFF0C\u7136\u540E\u5728\u63A7\u5236\u5C42\u4E2D\u8C03\u7528\u3002\u8FD9\u91CC\u76F4\u63A5\u5199\u5728\u63A7\u5236\u5C42\u7EC4\u4EF6\uFF0C\u5982Servlet\u7684doGet/doPost\u65B9\u6CD5\u6216Struts\u6846\u67B6\u7684execute\u65B9\u6CD5\u4E2D\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u83B7\u5F97\u8F93\u51FA\u6D41\uFF0C\u8BE5\u8F93\u51FA\u6D41\u7684\u8F93\u51FA\u4ECB\u8D28\u662F\u5BA2\u6237\u7AEF\u6D4F\u89C8\u5668

  OutputStream output=response.getOutputStream();

  response.reset();

  response.setHeader(&quot;Content-disposition&quot;,&quot;attachment;           filename=temp.xls&quot;);

  response.setContentType(&quot;application/msexcel&quot;);

  //\u521B\u5EFA\u53EF\u5199\u5165\u7684Excel\u5DE5\u4F5C\u8584\uFF0C\u4E14\u5185\u5BB9\u5C06\u5199\u5165\u5230\u8F93\u51FA\u6D41\uFF0C\u5E76\u901A\u8FC7\u8F93\u51FA\u6D41\u8F93\u51FA\u7ED9\u5BA2\u6237\u7AEF\u6D4F\u89C8
  WritableWorkbook wk=Workbook.createWorkbook(output);


///\u521B\u5EFA\u53EF\u5199\u5165\u7684Excel\u5DE5\u4F5C\u8868

    WritableSheet sheet=wk.createSheet(&quot;\u6210\u7EE9\u8868&quot;, 0);

//\u628A\u5355\u5143\u683C\uFF08column, row\uFF09\u5230\u5355\u5143\u683C\uFF08column1, row1\uFF09\u8FDB\u884C\u5408\u5E76\u3002

//mergeCells(column, row, column1, row1);

  sheet.mergeCells(0,0, 4,0);//\u5355\u5143\u683C\u5408\u5E76\u65B9\u6CD5

//\u521B\u5EFAWritableFont \u5B57\u4F53\u5BF9\u8C61\uFF0C\u53C2\u6570\u4F9D\u6B21\u8868\u793A\u9ED1\u4F53\u3001\u5B57\u53F712\u3001\u7C97\u4F53\u3001\u975E\u659C\u4F53\u3001\u4E0D\u5E26\u4E0B\u5212\u7EBF\u3001\u4EAE\u84DD\u8272

WritableFont titleFont=new WritableFont(WritableFont.createFont(&quot;\u9ED1\u4F53&quot;),12,WritableFont.BOLD,false,UnderlineStyle.NO_UNDERLINE,Colour.LIGHT_BLUE);

//\u521B\u5EFAWritableCellFormat\u5BF9\u8C61\uFF0C\u5C06\u8BE5\u5BF9\u8C61\u5E94\u7528\u4E8E\u5355\u5143\u683C\u4ECE\u800C\u8BBE\u7F6E\u5355\u5143\u683C\u7684\u6837\u5F0F

WritableCellFormat titleFormat=new WritableCellFormat();

//\u8BBE\u7F6E\u5B57\u4F53\u683C\u5F0F

titleFormat.setFont(titleFont);

//\u8BBE\u7F6E\u6587\u672C\u6C34\u5E73\u5C45\u4E2D\u5BF9\u9F50

titleFormat.setAlignment(Alignment.CENTRE);

//\u8BBE\u7F6E\u6587\u672C\u5782\u76F4\u5C45\u4E2D\u5BF9\u9F50

titleFormat.setVerticalAlignment(VerticalAlignment.CENTRE);

//\u8BBE\u7F6E\u80CC\u666F\u989C\u8272

titleFormat.setBackground(Colour.GRAY_25);

//\u8BBE\u7F6E\u81EA\u52A8\u6362\u884C

titleFormat.setWrap(true);

//\u6DFB\u52A0Label\u5BF9\u8C61\uFF0C\u53C2\u6570\u4F9D\u6B21\u8868\u793A\u5728\u7B2C\u4E00\u5217\uFF0C\u7B2C\u4E00\u884C\uFF0C\u5185\u5BB9\uFF0C\u4F7F\u7528\u7684\u683C\u5F0F

Label lab_00=new Label(0,0,&quot;\u5B66\u5458\u8003\u8BD5\u6210\u7EE9\u4E00\u89C8\u8868&quot;,titleFormat);

//\u5C06\u5B9A\u4E49\u597D\u7684Label\u5BF9\u8C61\u6DFB\u52A0\u5230\u5DE5\u4F5C\u8868\u4E0A\uFF0C\u8FD9\u6837\u5DE5\u4F5C\u8868\u7684\u7B2C\u4E00\u5217\u7B2C\u4E00\u884C\u7684\u5185\u5BB9\u4E3A\u2018\u5B66\u5458\u8003\u8BD5\u6210\u7EE9\u4E00\u89C8\u8868\u2019\u5E76\u5E94\u7528\u4E86titleFormat\u5B9A\u4E49\u7684\u6837\u5F0F

sheet.addCell(lab_00);

WritableCellFormat cloumnTitleFormat=new WritableCellFormat();

cloumnTitleFormat.setFont(new WritableFont(WritableFont.createFont(&quot;\u5B8B\u4F53&quot;),10,WritableFont.BOLD,false));

cloumnTitleFormat.setAlignment(Alignment.CENTRE);

Label lab_01=new Label(0,1,&quot;\u59D3\u540D&quot;,cloumnTitleFormat);

Label lab_11=new Label(1,1,&quot;\u73ED\u7EA7&quot;,cloumnTitleFormat);

Label lab_21=new Label(2,1,&quot;\u7B14\u8BD5\u6210\u7EE9&quot;,cloumnTitleFormat);
Label lab_31=new Label(3,1,&quot;\u4E0A\u673A\u6210\u7EE9&quot;,cloumnTitleFormat);

Label lab_41=new Label(4,1,&quot;\u8003\u8BD5\u65E5\u671F&quot;,cloumnTitleFormat);

  sheet.addCell(lab_01);

  sheet.addCell(lab_11);

  sheet.addCell(lab_21);

  sheet.addCell(lab_31);

  sheet.addCell(lab_41);

  sheet.addCell(new Label(0,2,&quot;\u674E\u660E&quot;));

  sheet.addCell(new Label(1,2,&quot;As178&quot;));

//\u5B9A\u4E49\u6570\u5B57\u683C\u5F0F

NumberFormat nf=new NumberFormat(&quot;0.00&quot;);

WritableCellFormat wcf=new WritableCellFormat(nf);

//\u7C7B\u4F3C\u4E8ELabel\u5BF9\u8C61\uFF0C\u533A\u522BLabel\u8868\u793A\u6587\u672C\u6570\u636E\uFF0CNumber\u8868\u793A\u6570\u503C\u578B\u6570\u636E

Number numlab_22=new Number(2,2,78,wcf);

sheet.addCell(numlab_22);

sheet.addCell(newNumber(3,2,87,new WritableCellFormat(new NumberFormat(&quot;#.##&quot;) )));

//\u5B9A\u4E49\u65E5\u671F\u683C\u5F0F

DateFormat df=new DateFormat(&quot;yyyy-MM-dd hh:mm:ss&quot;);

//\u521B\u5EFAWritableCellFormat\u5BF9\u8C61

WritableCellFormat datewcf=new WritableCellFormat(df);

//\u7C7B\u4F3C\u4E8ELabel\u5BF9\u8C61\uFF0C\u533A\u522BLabel\u8868\u793A\u6587\u672C\u6570\u636E\uFF0CDateTime\u8868\u793A\u65E5\u671F\u578B\u6570\u636E

DateTime dtLab_42=new DateTime(4,2,new Date(),datewcf);

sheet.addCell(dtLab_42);   

//\u5C06\u5B9A\u4E49\u7684\u5DE5\u4F5C\u8868\u8F93\u51FA\u5230\u4E4B\u524D\u6307\u5B9A\u7684\u4ECB\u8D28\u4E2D\uFF08\u8FD9\u91CC\u662F\u5BA2\u6237\u7AEF\u6D4F\u89C8\u5668\uFF09

wk.write();

//\u64CD\u4F5C\u5B8C\u6210\u65F6\uFF0C\u5173\u95ED\u5BF9\u8C61\uFF0C\u91CA\u653E\u5360\u7528\u7684\u5185\u5B58\u7A7A\u95F4   

wk.close();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u52A0\u4E0B\u5212\u7EBF\u8FD9\u90E8\u5206\u4EE3\u7801\u662FB/S\u6A21\u5F0F\u4E2D\u91C7\u7528\u7684\u8F93\u51FA\u65B9\u5F0F\uFF0C\u800C\u4E0D\u662F\u8F93\u51FA\u5230\u672C\u5730\u6307\u5B9A\u7684\u78C1\u76D8\u76EE\u5F55\u3002\u8BE5\u4EE3\u7801\u8868\u793A\u5C06temp.xls\u7684Excel\u6587\u4EF6\u901A\u8FC7\u5E94\u7B54\u5B9E\u4F53\uFF08response\uFF09\u8F93\u51FA\u7ED9\u8BF7\u6C42\u7684\u5BA2\u6237\u7AEF\u6D4F\u89C8\u5668\uFF0C\u4E0B\u8F7D\u5230\u5BA2\u6237\u7AEF\u672C\u5730\uFF08\u4FDD\u5B58\u6216\u76F4\u63A5\u6253\u5F00\uFF09\u3002\u82E5\u8981\u76F4\u63A5\u8F93\u51FA\u5230\u78C1\u76D8\u6587\u4EF6\u53EF\u91C7\u7528\u4E0B\u5217\u4EE3\u7801\u66FF\u6362\u52A0\u4E0B\u5212\u7EBF\u8FD9\u90E8\u5206\u4EE3\u7801</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>File file=new File(&quot;D://temp.xls&quot;);
WritableWorkbook wwb = Workbook.createWorkbook(file); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3\u9AD8\u7EA7\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_3-3\u9AD8\u7EA7\u64CD\u4F5C" aria-hidden="true">#</a> 3.3\u9AD8\u7EA7\u64CD\u4F5C</h3><h3 id="_3-3-1\u6570\u636E\u683C\u5F0F\u5316" tabindex="-1"><a class="header-anchor" href="#_3-3-1\u6570\u636E\u683C\u5F0F\u5316" aria-hidden="true">#</a> 3.3.1\u6570\u636E\u683C\u5F0F\u5316</h3><p>\u5728Excel\u4E2D\u4E0D\u6D89\u53CA\u590D\u6742\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u80FD\u591F\u6BD4\u8F83\u597D\u7684\u5904\u7406\u5B57\u4E32\u3001\u6570\u5B57\u548C\u65E5\u671F\u5DF2\u7ECF\u80FD\u591F\u6EE1\u8DB3\u4E00\u822C\u7684\u5E94\u7528\u5373\u53EF\u3002</p><p>\u6570\u636E\u7684\u683C\u5F0F\u5316\u6D89\u53CA\u5230\u7684\u662F\u5B57\u4F53\u3001\u7C97\u7EC6\u3001\u5B57\u53F7\u7B49\u5143\u7D20\uFF0C\u8FD9\u4E9B\u529F\u80FD\u4E3B\u8981\u7531 WritableFont\u548CWritableCellFormat\u7C7B\u6765\u8D1F\u8D23\u3002\u4F8B\u5982\uFF1A</p><blockquote><p>\u2460 WritableFont font=new WritableFont(WritableFont.createFont(&quot;\u5B8B\u4F53&quot;),12,WritableFont.NO_BOLD );</p><p>\u2461 WritableCellFormat format1=new WritableCellFormat(font);</p><p>\u2462 Label label=new Label(0,0,\u201Ddata 4 test\u201D,format1);</p></blockquote><p>\u5176\u4E2D</p><blockquote><p>I.\u6307\u5B9A\u4E86\u5B57\u4E32\u683C\u5F0F\uFF1A\u5B57\u4F53\u4E3A\u5B8B\u4F53\uFF0C\u5B57\u53F716\uFF0C\u52A0\u7C97\u663E\u793A\u3002WritableFont\u6709\u975E\u5E38\u4E30\u5BCC\u7684\u6784\u9020\u5B50\uFF0C\u4F9B\u4E0D\u540C\u60C5\u51B5\u4E0B\u4F7F\u7528\uFF0CjExcelAPI\u7684java-doc\u4E2D\u6709\u8BE6\u7EC6\u5217\u8868\uFF0C\u8FD9\u91CC\u4E0D\u518D\u5217\u51FA\u3002</p><p>II. \u5904\u4EE3\u7801\u4F7F\u7528\u4E86WritableCellFormat\u7C7B\uFF0C\u8FD9\u4E2A\u7C7B\u975E\u5E38\u91CD\u8981\uFF0C\u901A\u8FC7\u5B83\u53EF\u4EE5\u6307\u5B9A\u5355\u5143\u683C\u7684\u5404\u79CD\u5C5E\u6027\uFF0C\u5982\u4E0A\u4F8B\u4EE3\u7801\u6240\u793A\u3002</p><p>III. \u5904\u4F7F\u7528\u4E86Label\u7C7B\u7684\u6784\u9020\u5B50\uFF0C\u6307\u5B9A\u4E86\u663E\u793A\u7684\u4F4D\u7F6E\uFF0C\u6587\u672C\u5185\u5BB9\uFF0C\u5B57\u4E32\u88AB\u8D4B\u4E88\u7684\u683C\u5F0F\u3002</p><p>\u4E0ELabel\u7C7B\u4F3C\u7684Number\u3001DateTime\uFF0C\u533A\u522BLabel\u8868\u793A\u6587\u672C\u6570\u636E\uFF1BNumber\u8868\u793A\u6570\u503C\u6570\u636E\uFF0C\u53EF\u4F7FNumberFormat\u683C\u5F0F\u5316\u6570\u636E\uFF1B\u7528DateTime\u8868\u793A\u65E5\u671F\u578B\u6570\u636E\uFF0C\u53EF\u5E94\u7528DateFormat\u683C\u5F0F\u5316\u6570\u636E\u3002</p></blockquote><h3 id="_3-3-2\u5355\u5143\u683C\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_3-3-2\u5355\u5143\u683C\u64CD\u4F5C" aria-hidden="true">#</a> 3.3.2\u5355\u5143\u683C\u64CD\u4F5C</h3><p>Excel\u4E2D\u5F88\u91CD\u8981\u7684\u4E00\u90E8\u5206\u662F\u5BF9\u5355\u5143\u683C\u7684\u64CD\u4F5C\uFF0C\u6BD4\u5982\u884C\u9AD8\u3001\u5217\u5BBD\u3001\u5355\u5143\u683C\u5408\u5E76\u7B49\uFF0C\u6240\u5E78jExcelAPI\u63D0\u4F9B\u4E86\u8FD9\u4E9B\u652F\u6301\u3002\u8FD9\u4E9B\u64CD\u4F5C\u76F8\u5BF9\u6BD4\u8F83\u7B80\u5355\uFF0C\u4E0B\u9762\u53EA\u4ECB\u7ECD\u4E00\u4E0B\u76F8\u5173\u7684API\u3002</p><p><strong>1</strong>**\u3001** <strong>\u5408\u5E76\u5355\u5143\u683C</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>WritableSheet.mergeCells(int m,int n,int p,int q);

//\u4F5C\u7528\u662F\u4ECE(m,n)\u5230(p,q)\u7684\u5355\u5143\u683C\u5168\u90E8\u5408\u5E76\uFF0C\u6BD4\u5982\uFF1A

WritableSheet sheet=book.createSheet(\u201C\u7B2C\u4E00\u9875\u201D,0);

//\u5408\u5E76\u7B2C\u4E00\u5217\u7B2C\u4E00\u884C\u5230\u7B2C\u516D\u5217\u7B2C\u4E00\u884C\u7684\u6240\u6709\u5355\u5143\u683C

sheet.mergeCells(0,0,5,0);

//\u5408\u5E76\u65E2\u53EF\u4EE5\u662F\u6A2A\u5411\u7684\uFF0C\u4E5F\u53EF\u4EE5\u662F\u7EB5\u5411\u7684\u3002\u5408\u5E76\u540E\u7684\u5355\u5143\u683C\u4E0D\u80FD\u518D\u6B21\u8FDB\u884C\u5408\u5E76\uFF0C\u5426\u5219\u4F1A\u89E6\u53D1\u5F02\u5E38\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2</strong>**\u3001** <strong>\u884C\u9AD8\u548C\u5217\u5BBD</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> writableSheet.setRowView(int i,int height);

//\u4F5C\u7528\u662F\u6307\u5B9A\u7B2Ci+1\u884C\u7684\u9AD8\u5EA6\uFF0C\u6BD4\u5982\uFF1A

// \u5C06\u7B2C\u4E00\u884C\u7684\u9AD8\u5EA6\u8BBE\u4E3A200

sheet.setRowView(0,200);

WritableSheet.setColumnView(int i,int width);

//\u4F5C\u7528\u662F\u6307\u5B9A\u7B2Ci+1\u5217\u7684\u5BBD\u5EA6\uFF0C\u6BD4\u5982\uFF1A

//\u5C06\u7B2C\u4E00\u5217\u7684\u5BBD\u5EA6\u8BBE\u4E3A30

sheet.setColumnView(0,30); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-\u4ECEexcel\u6587\u4EF6\u8BFB\u53D6\u6570\u636E\u8868" tabindex="-1"><a class="header-anchor" href="#_3-4-\u4ECEexcel\u6587\u4EF6\u8BFB\u53D6\u6570\u636E\u8868" aria-hidden="true">#</a> 3.4 \u3000\u4ECEExcel\u6587\u4EF6\u8BFB\u53D6\u6570\u636E\u8868</h3><p>\u6211\u4EEC\u5C31\u4EE5\u5BFC\u51653.2\u6240\u4EA7\u751F\u7684excel\u8868\u4E3A\u4F8B\uFF0C\u638C\u63E1\u5982\u4F55\u7F16\u5199\u5BFC\u5165Excel\u4EE3\u7801(\u8BE5\u4EE3\u7801\u5C01\u88C5\u5728\u4E1A\u52A1\u5C42\u65B9\u6CD5)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public List&lt;ScoreInfo&gt; loadScoreInfo(String xlsPath) throws IOException, BiffException{

//\u5BFC\u5165\u5DF2\u5B58\u5728\u7684Excel\u6587\u4EF6\uFF0C\u83B7\u5F97\u53EA\u8BFB\u7684\u5DE5\u4F5C\u8584\u5BF9\u8C61
        FileInputStream fis=new FileInputStream(xlsPath);
        Workbook wk=Workbook.getWorkbook(fis);
        //\u83B7\u53D6\u7B2C\u4E00\u5F20Sheet\u8868 
        Sheet sheet=wk.getSheet(0);
        //\u83B7\u53D6\u603B\u884C\u6570
int rowNum=sheet.getRows();
//\u4ECE\u6570\u636E\u884C\u5F00\u59CB\u8FED\u4EE3\u6BCF\u4E00\u884C
        for(int i=2;i&lt;rowNum;i++){
ScoreInfo info=new ScoreInfo();        
//getCell(column,row)\uFF0C\u8868\u793A\u53D6\u5F97\u6307\u5B9A\u5217\u6307\u5B9A\u884C\u7684\u5355\u5143\u683C\uFF08Cell\uFF09
//getContents()\u83B7\u53D6\u5355\u5143\u683C\u7684\u5185\u5BB9\uFF0C\u8FD4\u56DE\u5B57\u7B26\u4E32\u6570\u636E\u3002\u9002\u7528\u4E8E\u5B57\u7B26\u578B\u6570\u636E\u7684\u5355\u5143\u683C
//\u4F7F\u7528\u5B9E\u4F53\u7C7B\u5C01\u88C5\u5355\u5143\u683C\u6570\u636E
info.setStuName(sheet.getCell(0, i).getContents());
            info.setClassName(sheet.getCell(1, i).getContents());
            //\u5224\u65AD\u5355\u5143\u683C\u7684\u7C7B\u578B\uFF0C\u5355\u5143\u683C\u4E3B\u8981\u7C7B\u578BLABEL\u3001NUMBER\u3001DATE                    if(sheet.getCell(2,i).getType==CellType.NUMBER){

//\u8F6C\u5316\u4E3A\u6570\u503C\u578B\u5355\u5143\u683C
NumberCell numCell=(NumberCell)sheet.getCell(2,i);
//NumberCell\u7684getValue()\u65B9\u6CD5\u53D6\u5F97\u5355\u5143\u683C\u7684\u6570\u503C\u578B\u6570\u636E
info.setRscore(numCell.getValue());

}
if(sheet.getCell(3,i).getType==CellType.NUMBER){
NumberCell numCell=(NumberCell)sheet.getCell(3,i);
info.setRscore(numCell.getValue);
}

if(sheet.getCell(4,i).getType==CellType.DATE){
DateCell dateCell=(DateCell)sheet.getCell(4,i);
//DateCell\u7684getDate()\u65B9\u6CD5\u53D6\u5F97\u5355\u5143\u683C\u7684\u65E5\u671F\u578B\u6570\u636E
info.setDate(dateCell.getDate());
}
        }
        fis.close();
        wk.close();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4-\u66F4\u65B0\u5DF2\u5B58\u5728\u7684excel\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_3-4-\u66F4\u65B0\u5DF2\u5B58\u5728\u7684excel\u6587\u4EF6" aria-hidden="true">#</a> 3.4 \u3000\u66F4\u65B0\u5DF2\u5B58\u5728\u7684Excel\u6587\u4EF6</h3><p>\u5C063.2\u6240\u4EA7\u751F\u7684excel\u8868\uFF08temp.xls\uFF09\u7684\u7B2C\u4E00\u6761\u8BB0\u5F55\uFF08excel\u6587\u4EF6\u7684\u6307\u7B2C\u4E09\u884C\uFF09\u7684\u73ED\u7EA7\u540D\u79F0\u6539\u4E3AAs179\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>File file=new File(&quot;d://temp.xls&quot;);
//\u5BFC\u5165\u5DF2\u5B58\u5728\u7684Excel\u6587\u4EF6\uFF0C\u83B7\u5F97\u53EA\u8BFB\u7684\u5DE5\u4F5C\u8584\u5BF9\u8C61
Workbook wk=Workbook.getWorkbook(file);
//\u6839\u636E\u53EA\u8BFB\u7684\u5DE5\u4F5C\u8584\u5BF9\u8C61\uFF08wk\uFF09\u521B\u5EFA\u53EF\u5199\u5165\u7684Excel\u5DE5\u4F5C\u8584\u5BF9\u8C61 
        WritableWorkbook wwb=Workbook.createWorkbook(file, wk);
//\u8BFB\u53D6\u7B2C\u4E00\u5F20\u5DE5\u4F5C\u8868 
        WritableSheet sheet=wwb.getSheet(0);
///\u83B7\u5F97\u8981\u7F16\u8F91\u7684\u5355\u5143\u683C\u5BF9\u8C61 
        WritableCell cell=sheet.getWritableCell(1, 2);
        //\u5224\u65AD\u5355\u5143\u683C\u7684\u7C7B\u578B, \u505A\u51FA\u76F8\u5E94\u7684\u8F6C\u5316 
if(cell.getType()==CellType.LABEL){
            Label lable=(Label)cell;
            //\u4FEE\u6539\u5355\u5143\u683C\u7684\u5185\u5BB9
lable.setString(&quot;As179&quot;);
        }
    wwb.write(); 
    wwb.close(); 
    wk.close(); 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u66F4\u65B0\u5DF2\u5B58\u5728\u7684Excel\u6587\u4EF6\u5B9E\u9645\u4E0A\u5C31\u662F\u83B7\u53D6\u5DF2\u6709\u5DE5\u4F5C\u8584\u5BF9\u8C61\uFF08\u4F46\u662F\u53EA\u8BFB\u7684\uFF09\uFF0C\u7136\u540E\u5C06\u83B7\u53D6\u7684\u53EA\u8BFB\u7684\u5DE5\u4F5C\u8584\u5BF9\u8C61\u8F6C\u5316\u4E3A\u53EF\u5199\u5165\u7684Excel\u5DE5\u4F5C\u8584\u5BF9\u8C61\uFF08WritableWorkbook \uFF09\uFF0C\u5176\u4ED6\u90E8\u5206\u5C31\u662F\u901A\u8FC7\u53EF\u5199\u5165WritableSheet \u5BF9\u8C61\u548C\u53EF\u5199\u5165WritableCell \u5BF9\u8C61\u8FDB\u884C\u7F16\u8F91\u3002</p>`,96);function l(i,t){return a}var d=n(s,[["render",l],["__file","Java\u5BFC\u5165\u5BFC\u51FAExcel-POI.html.vue"]]);export{d as default};
