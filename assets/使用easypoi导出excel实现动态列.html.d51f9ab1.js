import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{c as a}from"./app.f1128457.js";const s={},e=a(`<h1 id="\u4F7F\u7528-easypoi-\u5BFC\u51FA-excel-\u5B9E\u73B0\u52A8\u6001\u5217" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-easypoi-\u5BFC\u51FA-excel-\u5B9E\u73B0\u52A8\u6001\u5217" aria-hidden="true">#</a> \u4F7F\u7528 easypoi \u5BFC\u51FA excel \u5B9E\u73B0\u52A8\u6001\u5217</h1><h3 id="\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a> \u8BF4\u660E</h3><ul><li>\u4F7F\u7528\u7684\u662Feasypoi\u8FDB\u884C\u5BFC\u51FA</li><li>\u884C\u5934\u662F\u52A8\u6001\u751F\u6210</li><li>\u4F9D\u636Ekey\u8FDB\u884C\u5217\u5339\u914D\uFF0C\u8FDB\u884C\u6570\u636E\u586B\u5145</li><li>\u7B2C\u4E00\u5217\u8FDB\u884C\u7EB5\u5411\u52A8\u6001\u5408\u5E76</li></ul><h3 id="\u5DE5\u5177\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u5177\u4F9D\u8D56" aria-hidden="true">#</a> \u5DE5\u5177\u4F9D\u8D56</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;cn.afterturn&lt;/groupId&gt;
   &lt;artifactId&gt;easypoi-base&lt;/artifactId&gt;
   &lt;version&gt;3.2.0&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;cn.afterturn&lt;/groupId&gt;
   &lt;artifactId&gt;easypoi-annotation&lt;/artifactId&gt;
   &lt;version&gt;3.2.0&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;cn.afterturn&lt;/groupId&gt;
   &lt;artifactId&gt;easypoi-web&lt;/artifactId&gt;
   &lt;version&gt;3.2.0&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="\u5B9E\u73B0\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u6548\u679C" aria-hidden="true">#</a> \u5B9E\u73B0\u6548\u679C</h3><p>\u53D8\u66F4\u524D\u6837\u5F0F</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/JfTPiahTHJhqian47myMbgAAXib3tTubM4csic7r2ZwEQBWEnsC0k4Aaq6alNV28H5Gl7iaAo7NIxRn5liayjQTxCyuA/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="\u56FE\u7247"></p><p>\u53D8\u66F4\u540E\u6837\u5F0F</p><p><img src="https://mmbiz.qpic.cn/mmbiz_png/JfTPiahTHJhqian47myMbgAAXib3tTubM4cAUvrUmnGPYnulOgLpRflnhMsedEKSolpnsNMZicckf5ne7WITAIOZsA/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="\u56FE\u7247"></p><h3 id="\u4EE3\u7801\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801\u89E3\u6790" aria-hidden="true">#</a> \u4EE3\u7801\u89E3\u6790</h3><h5 id="\u52A8\u6001\u751F\u6210\u5217\u5934" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u751F\u6210\u5217\u5934" aria-hidden="true">#</a> \u52A8\u6001\u751F\u6210\u5217\u5934</h5><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>  private List&lt;ExcelExportEntity&gt; dynamicNewAddExcel(Map&lt;String, PlatformStatisParamRespData&gt; paramInfo) {
   //\u8868\u5934\u7684\u96C6\u5408\uFF0C\u7528\u4E8E\u6DFB\u52A0\u8868\u5934
    List&lt;ExcelExportEntity&gt; entityList = new ArrayList&lt;&gt;();

 //ExcelExportEntity\u6784\u9020\u53C2\u6570\u3010\u7B2C\u4E00\u4E2A\u662F\u5217\u540D\u5934\u7684\u7EDF\u8BA1\u5B57\u6BB5,\u7B2C\u4E8C\u4E2A\u662F\u9700\u8981\u6307\u5B9A\u7684\u4E00\u4E2Akey\u5728\u586B\u5145\u6570\u636E\u7684\u65F6\u5019\u662F\u9700\u8981\u6839\u636E\u8FD9\u4E2Akey\u8FDB\u884C\u586B\u5145\u503C,\u7B2C\u4E09\u4E2A\u53C2\u6570\u662F\u5217\u5BBD\u3011
    ExcelExportEntity platformXh = new ExcelExportEntity(&quot;\u7EDF\u8BA1\u5B57\u6BB51&quot;, &quot;statisKey1&quot;, 30);
    //\u5217\u7684\u5408\u5E76(\u7EB5\u5411\u5217\u7684\u540C\u540D\u79F0\u4F1A\u8FDB\u884C\u5408\u5E76,\u6548\u679C\u89C1\u4E0A\u56FE\u7684\u5E73\u53F0\u540D\u79F0\u7684\u53D8\u5316)
    platformXh.setMergeVertical(true);
    entityList.add(platformXh);

    ExcelExportEntity statisDateXh = new ExcelExportEntity(&quot;\u7EDF\u8BA1\u5B57\u6BB52&quot;, &quot;statisKey2&quot;, 30);
    entityList.add(statisDateXh);

    //\u53C2\u6570\u4FE1\u606F--[\u7528\u4E8E\u52A8\u6001\u62FC\u63A5\u5217\u5934]
    final Iterator&lt;String&gt; iterator = paramInfo.keySet().iterator();
    while (iterator.hasNext()) {
      final String paramKeyStr = iterator.next();
      final String paramNameStr = paramInfo.get(paramKeyStr).getDataName();
      //\u5217\u5934\u7531\u53C2\u6570\u6C49\u5B57\u540D\u79F0,\u53C2\u6570key\u4E3A\u5217key
      entityList.add(new ExcelExportEntity(paramNameStr, paramKeyStr, 30));
    }
    return entityList;
  }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h5 id="\u52A8\u6001\u586B\u5145\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u52A8\u6001\u586B\u5145\u6570\u636E" aria-hidden="true">#</a> \u52A8\u6001\u586B\u5145\u6570\u636E</h5><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>private List&lt;Map&lt;String, Object&gt;&gt; dynamicListDataByKey(List&lt;PlatformIncomeRespDTO&gt; statisData) {
    //\u53C2\u6570\u7C7B\u578B
    final Set&lt;String&gt; statisParamKey = statisData.get(0).getParamInfo().keySet();
    final List&lt;String&gt; statisDate = statisData.get(0).getStatisDate();
    final int platformNum = statisData.size();

    //\u6700\u7EC8\u7684\u6570\u636E
    List&lt;Map&lt;String, Object&gt;&gt; datas = new ArrayList&lt;&gt;();
    for (int i = 0; i &lt; platformNum; i++) {
      for (int j = 0; j &lt; statisDate.size(); j++) {
        Map&lt;String, Object&gt; hashMap = new LinkedHashMap&lt;&gt;(10);
        //\u8FD9\u4E2A\u662F\u4F9D\u636Ekey\u8FDB\u884C\u6570\u636E\u7684\u586B\u5145,(\u6839\u636E\u524D\u9762\u586B\u5199\u7684statisKey1\u8FDB\u884C\u586B\u5145\u6570\u636E)
        hashMap.put(&quot;statisKey1&quot;, statisData.get(i).getPlatformNickName());
        String statisDateStr = statisDate.get(j);
         //\u8FD9\u4E2A\u662F\u4F9D\u636Ekey\u8FDB\u884C\u6570\u636E\u7684\u586B\u5145,(\u6839\u636E\u524D\u9762\u586B\u5199\u7684statisKey2\u8FDB\u884C\u586B\u5145\u6570\u636E)
        hashMap.put(&quot;statisKey2&quot;, statisDateStr);
        //\u53C2\u6570\u7684\u9A8C\u8BC1
        for (String paramKey : statisParamKey) {
          for (BiPlatformStatisRespDTO paramData : statisData.get(i).getStatisData().get(j)) {
            if (paramKey.equals(paramData.getParamKey())) {
              hashMap.put(paramData.getParamKey(), paramData.getValue() + &quot;(&quot; + paramData.getRateValue() + &quot;)&quot;);
            }
          }
        }
        datas.add(hashMap);
      }
    }
    return datas;
  }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><h5 id="excel\u7684\u5BFC\u51FA" tabindex="-1"><a class="header-anchor" href="#excel\u7684\u5BFC\u51FA" aria-hidden="true">#</a> excel\u7684\u5BFC\u51FA</h5><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>//statisData\u5C31\u662F\u6211\u4EEC\u67E5\u8BE2\u51FA\u6765\u7684\u6570\u636E
public void downloadPlatformIncomeContrast(List&lt;PlatformIncomeRespDTO&gt; statisData, HttpServletResponse response) {
    if (CollectionUtils.isEmpty(statisData)) {
      return;
    }
    //\u83B7\u53D6\u53C2\u6570\u4FE1\u606F
    final Map&lt;String, PlatformStatisParamRespData&gt; paramInfo = statisData.get(0).getParamInfo();

    //\u62FC\u88C5\u5217\u5934
    List&lt;ExcelExportEntity&gt; colList = this.dynamicNewAddExcel(paramInfo);

    //\u6570\u636E\u62FC\u88C5
    List&lt;Map&lt;String, Object&gt;&gt; list = this.dynamicListDataByKey(statisData);
    final String xlsFileName = DateHelper.getNowString(FormatUnit.yyyyMMddHHmmss, true) + &quot;.xls&quot;;
    final Workbook workbook = ExcelExportUtil.exportExcel(new ExportParams(), colList, list);

    //\u52A8\u6001\u5408\u5E76\u7EB5\u5217[mergeMap key\u5217\u7D22\u5F15(\u4ECE0\u5F00\u59CB),value\u4F9D\u8D56\u7684\u5217,\u6CA1\u6709\u4F20\u7A7A,startRow \u5F00\u59CB\u884C(\u4ECE\u96F6\u5F00\u59CB)]
    //Map&lt;Integer, int[]&gt; mer = new HashMap&lt;&gt;();
    //mer.put(0, new int[]{});
    //PoiMergeCellUtil.mergeCells(workbook.getSheetAt(0), mer, 1);
    EasypoiUtil.downLoadExcel(xlsFileName, response, workbook);
  }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>EasypoiUtil\u5DE5\u5177\u7C7B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public static void downLoadExcel(String fileName, HttpServletResponse response, Workbook workbook) {
    try {
      response.setCharacterEncoding(&quot;UTF-8&quot;);
      response.setHeader(&quot;content-Type&quot;, &quot;application/vnd.ms-excel&quot;);
      response.setHeader(&quot;Content-Disposition&quot;,
          &quot;attachment;filename=&quot; + URLEncoder.encode(fileName, &quot;UTF-8&quot;));
      workbook.write(response.getOutputStream());
    } catch (IOException e) {
      throw new RuntimeException(e.getMessage());
    }
  }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>PlatformIncomeRespDTO</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>@Data
@NoArgsConstructor
@AllArgsConstructor
public class PlatformIncomeRespDTO implements Serializable {

  private static final long serialVersionUID = 1100499105160261425L;


  /**
   * \u5E73\u53F0\u522B\u540D
   */
  private String platformNickName;

  /*\u7EDF\u8BA1\u65F6\u95F4*/
  private List&lt;String&gt; statisDate;

  /*\u67E5\u8BE2\u53C2\u6570\u4FE1\u606F--[\u7528\u6237\u6536\u5165\u6765\u6E90\u7EDF\u8BA1\u5BFC\u51FA\u4F7F\u7528]*/
  private Map&lt;String, PlatformStatisParamRespData&gt; paramInfo;


  /*\u7EDF\u8BA1\u6570\u636E*/
  private List&lt;List&lt;BiPlatformStatisRespDTO&gt;&gt; statisData;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>PlatformStatisParamRespData</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>@Data
@NoArgsConstructor
@AllArgsConstructor
public class PlatformStatisParamRespData implements Serializable {

  private static final long serialVersionUID = 4263523446154995471L;

  /**
   * \u53C2\u6570\u540D\u79F0
   */
  private String dataName;

  /**
   * \u53C2\u6570key
   */
  private String dateKey;

  /**
   * \u53C2\u6570\u63CF\u8FF0
   */
  private String dateDesc;

}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>BiPlatformStatisRespDTO</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>@Data
@AllArgsConstructor
public class BiPlatformStatisRespDTO implements Serializable {

  private static final long serialVersionUID = 6070471415344415351L;

  @Excel(name = &quot;\u7EDF\u8BA1\u5B57\u6BB5&quot;, orderNum = &quot;1&quot;)
  private String param;

  /**
   * \u53C2\u6570\u7684key
   */
  private String paramKey;

  /**
   * \u53C2\u6570\u63CF\u8FF0
   */
  private String paramDesc;

  private String startDate;

  private String endDate;

  @Excel(name = &quot;\u7EDF\u8BA1\u6570\u636E&quot;, orderNum = &quot;2&quot;)
  private String value;

  private String rateValue;

  private Long id;

  private Integer riseOrFall;

  public BiPlatformStatisRespDTO(String startDate, String paramKey, String value) {
    this.paramKey = paramKey;
    this.startDate = startDate;
    this.value = value;
  }

  public BiPlatformStatisRespDTO() {
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h3 id="\u6D4B\u8BD5\u7528\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u7528\u4F8B" aria-hidden="true">#</a> \u6D4B\u8BD5\u7528\u4F8B</h3><h5 id="\u6D4B\u8BD5\u7279\u6B8A\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u7279\u6B8A\u8BF4\u660E" aria-hidden="true">#</a> \u6D4B\u8BD5\u7279\u6B8A\u8BF4\u660E</h5><p>\u5BFC\u51FA\u7684\u7ED3\u679C\u6709\u4E2A\u63A7\u5236,\u662F\u5728\u62FC\u88C5\u7684\u65F6\u5019\u6CA1\u6709\u586B\u5145\u6B64\u6570\u636E,\u4E0D\u5F71\u54CD\u6574\u4F53\u6548\u679C\u3002</p><h5 id="\u6D4B\u8BD5\u7ED3\u679C\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u7ED3\u679C\u793A\u4F8B" aria-hidden="true">#</a> \u6D4B\u8BD5\u7ED3\u679C\u793A\u4F8B</h5><p><img src="https://mmbiz.qpic.cn/mmbiz_png/JfTPiahTHJhqian47myMbgAAXib3tTubM4cOoQzAXu4ZIlniaJ4ustt2RUfYS3yu0MCGtgeCBicX0StNMH5x36MXnDQ/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="\u56FE\u7247"></p><h5 id="\u6D4B\u8BD5\u6570\u636Ejson\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u6570\u636Ejson\u793A\u4F8B" aria-hidden="true">#</a> \u6D4B\u8BD5\u6570\u636Ejson\u793A\u4F8B</h5><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>[
    {
        &quot;paramInfo&quot;: {
            &quot;userCount&quot;: {
                &quot;dataName&quot;: &quot;\u7528\u6237\u6570&quot;, 
                &quot;dateDesc&quot;: &quot;\u7528\u6237\u4FE1\u606F&quot;, 
                &quot;dateKey&quot;: &quot;userCount&quot;
            }, 
            &quot;friendsCount&quot;: {
                &quot;dataName&quot;: &quot;\u597D\u53CB\u6570&quot;, 
                &quot;dateDesc&quot;: &quot;\u597D\u53CB\u4FE1\u606F&quot;, 
                &quot;dateKey&quot;: &quot;friendsCount&quot;
            }
        }, 
        &quot;platformNickName&quot;: &quot;aaa&quot;, 
        &quot;statisData&quot;: [
            [
                {
                    &quot;paramKey&quot;: &quot;userCount&quot;, 
                    &quot;startDate&quot;: &quot;2019-12-26&quot;, 
                    &quot;value&quot;: &quot;100&quot;
                }, 
                {
                    &quot;paramKey&quot;: &quot;friendsCount&quot;, 
                    &quot;startDate&quot;: &quot;2019-12-26&quot;, 
                    &quot;value&quot;: &quot;200&quot;
                }
            ], 
            [
                {
                    &quot;paramKey&quot;: &quot;userCount&quot;, 
                    &quot;startDate&quot;: &quot;2019-12-27&quot;, 
                    &quot;value&quot;: &quot;300&quot;
                }, 
                {
                    &quot;paramKey&quot;: &quot;friendsCount&quot;, 
                    &quot;startDate&quot;: &quot;2019-12-27&quot;, 
                    &quot;value&quot;: &quot;400&quot;
                }
            ]
        ], 
        &quot;statisDate&quot;: [
            &quot;2019-12-26&quot;, 
            &quot;2019-12-27&quot;
        ]
    }, 
    {
        &quot;paramInfo&quot;: {
            &quot;userCount&quot;: {
                &quot;dataName&quot;: &quot;\u7528\u6237\u6570&quot;, 
                &quot;dateDesc&quot;: &quot;\u7528\u6237\u4FE1\u606F&quot;, 
                &quot;dateKey&quot;: &quot;userCount&quot;
            }, 
            &quot;friendsCount&quot;: {
                &quot;dataName&quot;: &quot;\u597D\u53CB\u6570&quot;, 
                &quot;dateDesc&quot;: &quot;\u597D\u53CB\u4FE1\u606F&quot;, 
                &quot;dateKey&quot;: &quot;friendsCount&quot;
            }
        }, 
        &quot;platformNickName&quot;: &quot;bbb&quot;, 
        &quot;statisData&quot;: [
            [
                {
                    &quot;paramKey&quot;: &quot;userCount&quot;, 
                    &quot;startDate&quot;: &quot;2019-12-26&quot;, 
                    &quot;value&quot;: &quot;500&quot;
                }, 
                {
                    &quot;paramKey&quot;: &quot;friendsCount&quot;, 
                    &quot;startDate&quot;: &quot;2019-12-26&quot;, 
                    &quot;value&quot;: &quot;600&quot;
                }
            ], 
            [
                {
                    &quot;paramKey&quot;: &quot;userCount&quot;, 
                    &quot;startDate&quot;: &quot;2019-12-27&quot;, 
                    &quot;value&quot;: &quot;700&quot;
                }, 
                {
                    &quot;paramKey&quot;: &quot;friendsCount&quot;, 
                    &quot;startDate&quot;: &quot;2019-12-27&quot;, 
                    &quot;value&quot;: &quot;800&quot;
                }
            ]
        ], 
        &quot;statisDate&quot;: [
            &quot;2019-12-26&quot;, 
            &quot;2019-12-27&quot;
        ]
    }
]
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br></div></div><h5 id="\u6D4B\u8BD5\u7528\u4F8B\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u6D4B\u8BD5\u7528\u4F8B\u4EE3\u7801" aria-hidden="true">#</a> \u6D4B\u8BD5\u7528\u4F8B\u4EE3\u7801</h5><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>public class Simple {

  /**
   * @Description: \u62FC\u63A5\u8868\u5934
   * @Param: paramInfo :\u8868\u5934\u4FE1\u606F
   * @return: java.util.List&lt;cn.afterturn.easypoi.excel.entity.params.ExcelExportEntity&gt;
   * @Author: peikunkun
   * @Date: 2019/12/26 0026 \u4E0A\u5348 10:42
   */
  private static List&lt;ExcelExportEntity&gt; dynamicNewAddExcel(Map&lt;String, PlatformStatisParamRespData&gt; paramInfo) {
    //\u8868\u5934\u7684\u96C6\u5408\uFF0C\u7528\u4E8E\u6DFB\u52A0\u8868\u5934
    List&lt;ExcelExportEntity&gt; entityList = new ArrayList&lt;&gt;();

    //ExcelExportEntity\u6784\u9020\u53C2\u6570\u3010\u7B2C\u4E00\u4E2A\u662F\u5217\u540D\u5934\u7684\u7EDF\u8BA1\u5B57\u6BB5,\u7B2C\u4E8C\u4E2A\u662F\u9700\u8981\u6307\u5B9A\u7684\u4E00\u4E2Akey\u5728\u586B\u5145\u6570\u636E\u7684\u65F6\u5019\u662F\u9700\u8981\u6839\u636E\u8FD9\u4E2Akey\u8FDB\u884C\u586B\u5145\u503C,\u7B2C\u4E09\u4E2A\u53C2\u6570\u662F\u5217\u5BBD\u3011
    ExcelExportEntity platformXh = new ExcelExportEntity(&quot;\u7EDF\u8BA1\u5B57\u6BB51&quot;, &quot;statisKey1&quot;, 30);
    //\u5217\u7684\u5408\u5E76(\u7EB5\u5411\u5217\u7684\u540C\u540D\u79F0\u4F1A\u8FDB\u884C\u5408\u5E76,\u6548\u679C\u89C1\u4E0A\u56FE\u7684\u5E73\u53F0\u540D\u79F0\u7684\u53D8\u5316)
    platformXh.setMergeVertical(true);
    entityList.add(platformXh);

    ExcelExportEntity statisDateXh = new ExcelExportEntity(&quot;\u7EDF\u8BA1\u5B57\u6BB52&quot;, &quot;statisKey2&quot;, 30);
    entityList.add(statisDateXh);

    //\u53C2\u6570\u4FE1\u606F--[\u7528\u4E8E\u52A8\u6001\u62FC\u63A5\u5217\u5934]
    final Iterator&lt;String&gt; iterator = paramInfo.keySet().iterator();
    while (iterator.hasNext()) {
      final String paramKeyStr = iterator.next();
      final String paramNameStr = paramInfo.get(paramKeyStr).getDataName();
      //\u5217\u5934\u7531\u53C2\u6570\u6C49\u5B57\u540D\u79F0,\u53C2\u6570key\u4E3A\u5217key
      entityList.add(new ExcelExportEntity(paramNameStr, paramKeyStr, 30));
    }
    return entityList;
  }


  /**
   * @Description: \u62FC\u63A5\u6570\u636E
   * @Param: statisData :\u62FC\u63A5\u6570\u636E
   * @Author: peikunkun
   * @Date: 2019/12/26 0026 \u4E0A\u5348 10:42
   */
  private static List&lt;Map&lt;String, Object&gt;&gt; dynamicListDataByKey(List&lt;PlatformIncomeRespDTO&gt; statisData) {
    //\u53C2\u6570\u7C7B\u578B
    final Set&lt;String&gt; statisParamKey = statisData.get(0).getParamInfo().keySet();
    final List&lt;String&gt; statisDate = statisData.get(0).getStatisDate();
    final int platformNum = statisData.size();

    //\u6700\u7EC8\u7684\u6570\u636E
    List&lt;Map&lt;String, Object&gt;&gt; datas = new ArrayList&lt;&gt;();
    for (int i = 0; i &lt; platformNum; i++) {
      for (int j = 0; j &lt; statisDate.size(); j++) {
        Map&lt;String, Object&gt; hashMap = new LinkedHashMap&lt;&gt;(10);
        //\u8FD9\u4E2A\u662F\u4F9D\u636Ekey\u8FDB\u884C\u6570\u636E\u7684\u586B\u5145,(\u6839\u636E\u524D\u9762\u586B\u5199\u7684statisKey1\u8FDB\u884C\u586B\u5145\u6570\u636E)
        hashMap.put(&quot;statisKey1&quot;, statisData.get(i).getPlatformNickName());
        String statisDateStr = statisDate.get(j);
        //\u8FD9\u4E2A\u662F\u4F9D\u636Ekey\u8FDB\u884C\u6570\u636E\u7684\u586B\u5145,(\u6839\u636E\u524D\u9762\u586B\u5199\u7684statisKey2\u8FDB\u884C\u586B\u5145  \u6570\u636E)
        hashMap.put(&quot;statisKey2&quot;, statisDateStr);
        //\u53C2\u6570\u7684\u9A8C\u8BC1
        for (String paramKey : statisParamKey) {
          for (BiPlatformStatisRespDTO paramData : statisData.get(i).getStatisData().get(j)) {
            if (paramKey.equals(paramData.getParamKey())) {
              hashMap.put(paramData.getParamKey(), paramData.getValue() + &quot;(&quot; + paramData.getRateValue() + &quot;)&quot;);
            }
          }
        }
        datas.add(hashMap);
      }
    }
    return datas;
  }


  @Test
  public void Administrator_84_20191226095523() throws IOException {
    System.out.println(&quot;\u6B22\u8FCE\u4F7F\u7528\u5355\u5143\u6D4B\u8BD5\u65B9\u6CD5\u3010Administrator_84()_20191226095523\u3011&quot;);
    System.out.println(&quot;\u6B64\u65B9\u6CD5\u6D4B\u8BD5\u63CF\u8FF0\uFF1A\u3010\u3011&quot;);
    //\u62FC\u88C5\u7B2C\u4E00\u4E2A\u6570\u636E---------------------------------------------------------------------
    final PlatformIncomeRespDTO platformIncomeRespDTO1 = new PlatformIncomeRespDTO();
    platformIncomeRespDTO1.setPlatformNickName(&quot;aaa&quot;);
    //\u62FC\u88C5\u65F6\u95F4\u7EF4\u5EA6
    platformIncomeRespDTO1.setStatisDate(Lists.newArrayList(&quot;2019-12-26&quot;,&quot;2019-12-27&quot;));
    //\u62FC\u88C5\u5934\u4FE1\u606F
    Map&lt;String, PlatformStatisParamRespData&gt; paramInfo1=new HashMap&lt;&gt;();
    paramInfo1.put(&quot;userCount&quot;, new PlatformStatisParamRespData(&quot;\u7528\u6237\u6570&quot;,&quot;userCount&quot;,&quot;\u7528\u6237\u4FE1\u606F&quot;));
    paramInfo1.put(&quot;friendsCount&quot;, new PlatformStatisParamRespData(&quot;\u597D\u53CB\u6570&quot;,&quot;friendsCount&quot;,&quot;\u597D\u53CB\u4FE1\u606F&quot;));
    platformIncomeRespDTO1.setParamInfo(paramInfo1);
    //\u62FC\u88C5\u6570\u636E
    final ArrayList&lt;List&lt;BiPlatformStatisRespDTO&gt;&gt; data1 = Lists.newArrayList();
    data1.add(Lists.newArrayList(new BiPlatformStatisRespDTO(&quot;2019-12-26&quot;,&quot;userCount&quot;,&quot;100&quot;),new BiPlatformStatisRespDTO(&quot;2019-12-26&quot;,&quot;friendsCount&quot;,&quot;200&quot;)));
    data1.add(Lists.newArrayList(new BiPlatformStatisRespDTO(&quot;2019-12-27&quot;,&quot;userCount&quot;,&quot;300&quot;),new BiPlatformStatisRespDTO(&quot;2019-12-27&quot;,&quot;friendsCount&quot;,&quot;400&quot;)));
    platformIncomeRespDTO1.setStatisData(data1);


    //\u62FC\u88C5\u7B2C\u4E8C\u4E2A\u6570\u636E---------------------------------------------------------------------
    final PlatformIncomeRespDTO platformIncomeRespDTO2 = new PlatformIncomeRespDTO();
    platformIncomeRespDTO2.setPlatformNickName(&quot;bbb&quot;);
    //\u62FC\u88C5\u65F6\u95F4\u7EF4\u5EA6
    platformIncomeRespDTO2.setStatisDate(Lists.newArrayList(&quot;2019-12-26&quot;,&quot;2019-12-27&quot;));
    //\u62FC\u88C5\u5934\u4FE1\u606F
    Map&lt;String, PlatformStatisParamRespData&gt; paramInfo2=new HashMap&lt;&gt;();
    paramInfo2.put(&quot;userCount&quot;, new PlatformStatisParamRespData(&quot;\u7528\u6237\u6570&quot;,&quot;userCount&quot;,&quot;\u7528\u6237\u4FE1\u606F&quot;));
    paramInfo2.put(&quot;friendsCount&quot;, new PlatformStatisParamRespData(&quot;\u597D\u53CB\u6570&quot;,&quot;friendsCount&quot;,&quot;\u597D\u53CB\u4FE1\u606F&quot;));
    platformIncomeRespDTO2.setParamInfo(paramInfo2);

    //\u62FC\u88C5\u6570\u636E
    final ArrayList&lt;List&lt;BiPlatformStatisRespDTO&gt;&gt; data2 = Lists.newArrayList();
    data2.add(Lists.newArrayList(new BiPlatformStatisRespDTO(&quot;2019-12-26&quot;,&quot;userCount&quot;,&quot;500&quot;),new BiPlatformStatisRespDTO(&quot;2019-12-26&quot;,&quot;friendsCount&quot;,&quot;600&quot;)));
    data2.add(Lists.newArrayList(new BiPlatformStatisRespDTO(&quot;2019-12-27&quot;,&quot;userCount&quot;,&quot;700&quot;),new BiPlatformStatisRespDTO(&quot;2019-12-27&quot;,&quot;friendsCount&quot;,&quot;800&quot;)));
    platformIncomeRespDTO2.setStatisData(data2);

    final ArrayList&lt;PlatformIncomeRespDTO&gt; platformIncomeRespDTOS = Lists.newArrayList(platformIncomeRespDTO1, platformIncomeRespDTO2);
    System.out.println(JSONObject.toJSONString(platformIncomeRespDTOS));

    //\u62FC\u88C5\u5217\u5934
    List&lt;ExcelExportEntity&gt; colList = dynamicNewAddExcel(paramInfo2);

    //\u6570\u636E\u62FC\u88C5
    List&lt;Map&lt;String, Object&gt;&gt; list = dynamicListDataByKey(platformIncomeRespDTOS);

    //\u6587\u4EF6\u540D\u79F0
    final Workbook workbook = ExcelExportUtil.exportExcel(new ExportParams(), colList, list);

    //\u6B64\u529F\u80FD\u4E0E\u3010\u62FC\u88C5\u5217\u5934\u3011\u4E2D\u7684 platformXh.setMergeVertical(true);\u529F\u80FD\u6548\u679C\u4E00\u6837,\u53EF\u76F4\u63A5\u4F7F\u7528 platformXh.setMergeVertical(true);\u8FDB\u884C\u7EB5\u5411\u5408\u5E76
    //\u52A8\u6001\u5408\u5E76\u7EB5\u5217[mergeMap key\u5217\u7D22\u5F15(\u4ECE0\u5F00\u59CB),value\u4F9D\u8D56\u7684\u5217,\u6CA1\u6709\u4F20\u7A7A,startRow \u5F00\u59CB\u884C(\u4ECE\u96F6\u5F00\u59CB)]
    //Map&lt;Integer, int[]&gt; mer = new HashMap&lt;&gt;();
    //mer.put(0, new int[]{});
    //PoiMergeCellUtil.mergeCells(workbook.getSheetAt(0), mer, 1);

    final FileOutputStream fileOutputStream = new FileOutputStream(&quot;C:\\\\Users\\\\Administrator\\\\Desktop\\\\1.xls&quot;);
    //\u5BFC\u51FAexcel
    downLoadExcel(null, fileOutputStream, workbook);
  }




  /**
   * @Description: \u4E0B\u8F7D\u6587\u4EF6
   * @Param: fileName
   * @Param outputStream
   * @Param workbook
   * @return: void
   * @Author: peikunkun
   * @Date: 2019/12/26 0026 \u4E0A\u5348 10:44
   */
  public static void downLoadExcel(String fileName, FileOutputStream outputStream, Workbook workbook)
      throws IOException {
    try {
      workbook.write(outputStream);
    } catch (IOException e) {
      throw new RuntimeException(e.getMessage());
    } finally {
      outputStream.close();
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br></div></div>`,34);function r(t,l){return e}var u=n(s,[["render",r],["__file","\u4F7F\u7528easypoi\u5BFC\u51FAexcel\u5B9E\u73B0\u52A8\u6001\u5217.html.vue"]]);export{u as default};
