import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{c as s}from"./app.f1128457.js";const a={},e=s(`<h1 id="\u6570\u636E\u5E93\u8868\u7ED3\u6784\u6587\u6863\u751F\u6210\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u8868\u7ED3\u6784\u6587\u6863\u751F\u6210\u5DE5\u5177" aria-hidden="true">#</a> \u6570\u636E\u5E93\u8868\u7ED3\u6784\u6587\u6863\u751F\u6210\u5DE5\u5177</h1><h2 id="\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a> \u7279\u70B9</h2><ul><li><p>\u7B80\u6D01\u3001\u8F7B\u91CF\u3001\u8BBE\u8BA1\u826F\u597D</p></li><li><p>\u591A\u6570\u636E\u5E93\u652F\u6301</p></li><li><p>\u591A\u79CD\u683C\u5F0F\u6587\u6863</p></li><li><p>\u7075\u6D3B\u6269\u5C55</p></li><li><p>\u652F\u6301\u81EA\u5B9A\u4E49\u6A21\u677F</p></li></ul><h2 id="\u6570\u636E\u5E93\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u652F\u6301" aria-hidden="true">#</a> \u6570\u636E\u5E93\u652F\u6301</h2><ul><li>[x] MySQL</li><li>[x] MariaDB</li><li>[x] TIDB</li><li>[x] Oracle</li><li>[x] SqlServer</li><li>[x] PostgreSQL</li><li>[x] Cache DB\uFF082016\uFF09</li><li>[ ] H2 \uFF08\u5F00\u53D1\u4E2D\uFF09</li><li>[ ] DB2 \uFF08\u5F00\u53D1\u4E2D\uFF09</li><li>[ ] HSQL \uFF08\u5F00\u53D1\u4E2D\uFF09</li><li>[ ] SQLite\uFF08\u5F00\u53D1\u4E2D\uFF09</li><li>[ ] \u701A\u9AD8\uFF08\u5F00\u53D1\u4E2D\uFF09</li><li>[ ] \u8FBE\u68A6 \uFF08\u5F00\u53D1\u4E2D\uFF09</li><li>[ ] \u865A\u8C37 \uFF08\u5F00\u53D1\u4E2D\uFF09</li><li>[ ] \u4EBA\u5927\u91D1\u4ED3\uFF08\u5F00\u53D1\u4E2D\uFF09</li></ul><h2 id="\u6587\u6863\u751F\u6210\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863\u751F\u6210\u652F\u6301" aria-hidden="true">#</a> \u6587\u6863\u751F\u6210\u652F\u6301</h2><ul><li>[x] html</li><li>[x] word</li><li>[x] markdown</li></ul><h2 id="\u6587\u6863\u622A\u56FE" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863\u622A\u56FE" aria-hidden="true">#</a> \u6587\u6863\u622A\u56FE</h2><ul><li><strong>html</strong></li></ul><p align="center"><img alt="HTML" src="https://images.gitee.com/uploads/images/2020/0622/161414_74cd0b68_1407605.png"></p><p align="center"><img alt="screw-logo" src="https://images.gitee.com/uploads/images/2020/0622/161723_6da58c41_1407605.png"></p><ul><li><strong>word</strong></li></ul><p align="center"><img alt="word" src="https://images.gitee.com/uploads/images/2020/0625/200946_1dc0717f_1407605.png"></p><ul><li><strong>markdwon</strong></li></ul><p align="center"><img alt="markdwon" src="https://images.gitee.com/uploads/images/2020/0625/214749_7b15d8bd_1407605.png"></p><p align="center"><img alt="markdwon" src="https://images.gitee.com/uploads/images/2020/0625/215006_3601e135_1407605.png"></p><h2 id="\u4F7F\u7528\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u5F0F" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u5F0F</h2><h3 id="\u666E\u901A\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u666E\u901A\u65B9\u5F0F" aria-hidden="true">#</a> \u666E\u901A\u65B9\u5F0F</h3><ul><li><strong>\u5F15\u5165\u4F9D\u8D56</strong></li></ul><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;cn.smallbun.screw&lt;/groupId&gt;
    &lt;artifactId&gt;screw-core&lt;/artifactId&gt;
    &lt;version&gt;\${lastVersion}&lt;/version&gt;
 &lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><strong>\u7F16\u5199\u4EE3\u7801</strong></li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>/**
 * \u6587\u6863\u751F\u6210
 */
void documentGeneration() {
   //\u6570\u636E\u6E90
   HikariConfig hikariConfig = new HikariConfig();
   hikariConfig.setDriverClassName(&quot;com.mysql.cj.jdbc.Driver&quot;);
   hikariConfig.setJdbcUrl(&quot;jdbc:mysql://127.0.0.1:3306/database&quot;);
   hikariConfig.setUsername(&quot;root&quot;);
   hikariConfig.setPassword(&quot;password&quot;);
   //\u8BBE\u7F6E\u53EF\u4EE5\u83B7\u53D6tables remarks\u4FE1\u606F
   hikariConfig.addDataSourceProperty(&quot;useInformationSchema&quot;, &quot;true&quot;);
   hikariConfig.setMinimumIdle(2);
   hikariConfig.setMaximumPoolSize(5);
   DataSource dataSource = new HikariDataSource(hikariConfig);
   //\u751F\u6210\u914D\u7F6E
   EngineConfig engineConfig = EngineConfig.builder()
         //\u751F\u6210\u6587\u4EF6\u8DEF\u5F84
         .fileOutputDir(fileOutputDir)
         //\u6253\u5F00\u76EE\u5F55
         .openOutputDir(true)
         //\u6587\u4EF6\u7C7B\u578B
         .fileType(EngineFileType.HTML)
         //\u751F\u6210\u6A21\u677F\u5B9E\u73B0
         .produceType(EngineTemplateType.freemarker)
         //\u81EA\u5B9A\u4E49\u6587\u4EF6\u540D\u79F0
         .fileName(&quot;\u81EA\u5B9A\u4E49\u6587\u4EF6\u540D\u79F0&quot;).build();

   //\u5FFD\u7565\u8868
   ArrayList&lt;String&gt; ignoreTableName = new ArrayList&lt;&gt;();
   ignoreTableName.add(&quot;test_user&quot;);
   ignoreTableName.add(&quot;test_group&quot;);
   //\u5FFD\u7565\u8868\u524D\u7F00
   ArrayList&lt;String&gt; ignorePrefix = new ArrayList&lt;&gt;();
   ignorePrefix.add(&quot;test_&quot;);
   //\u5FFD\u7565\u8868\u540E\u7F00    
   ArrayList&lt;String&gt; ignoreSuffix = new ArrayList&lt;&gt;();
   ignoreSuffix.add(&quot;_test&quot;);
   ProcessConfig processConfig = ProcessConfig.builder()
         //\u6307\u5B9A\u751F\u6210\u903B\u8F91\u3001\u5F53\u5B58\u5728\u6307\u5B9A\u8868\u3001\u6307\u5B9A\u8868\u524D\u7F00\u3001\u6307\u5B9A\u8868\u540E\u7F00\u65F6\uFF0C\u5C06\u751F\u6210\u6307\u5B9A\u8868\uFF0C\u5176\u4F59\u8868\u4E0D\u751F\u6210\u3001\u5E76\u8DF3\u8FC7\u5FFD\u7565\u8868\u914D\u7F6E	
		 //\u6839\u636E\u540D\u79F0\u6307\u5B9A\u8868\u751F\u6210
		 .designatedTableName(new ArrayList&lt;&gt;())
		 //\u6839\u636E\u8868\u524D\u7F00\u751F\u6210
		 .designatedTablePrefix(new ArrayList&lt;&gt;())
		 //\u6839\u636E\u8868\u540E\u7F00\u751F\u6210	
		 .designatedTableSuffix(new ArrayList&lt;&gt;())
         //\u5FFD\u7565\u8868\u540D
         .ignoreTableName(ignoreTableName)
         //\u5FFD\u7565\u8868\u524D\u7F00
         .ignoreTablePrefix(ignorePrefix)
         //\u5FFD\u7565\u8868\u540E\u7F00
         .ignoreTableSuffix(ignoreSuffix).build();
   //\u914D\u7F6E
   Configuration config = Configuration.builder()
         //\u7248\u672C
         .version(&quot;1.0.0&quot;)
         //\u63CF\u8FF0
         .description(&quot;\u6570\u636E\u5E93\u8BBE\u8BA1\u6587\u6863\u751F\u6210&quot;)
         //\u6570\u636E\u6E90
         .dataSource(dataSource)
         //\u751F\u6210\u914D\u7F6E
         .engineConfig(engineConfig)
         //\u751F\u6210\u914D\u7F6E
         .produceConfig(processConfig)
         .build();
   //\u6267\u884C\u751F\u6210
   new DocumentationExecute(config).execute();
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br></div></div><h3 id="maven-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#maven-\u63D2\u4EF6" aria-hidden="true">#</a> Maven \u63D2\u4EF6</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;build&gt;
    &lt;plugins&gt;
        &lt;plugin&gt;
            &lt;groupId&gt;cn.smallbun.screw&lt;/groupId&gt;
            &lt;artifactId&gt;screw-maven-plugin&lt;/artifactId&gt;
            &lt;version&gt;\${lastVersion}&lt;/version&gt;
            &lt;dependencies&gt;
                &lt;!-- HikariCP --&gt;
                &lt;dependency&gt;
                    &lt;groupId&gt;com.zaxxer&lt;/groupId&gt;
                    &lt;artifactId&gt;HikariCP&lt;/artifactId&gt;
                    &lt;version&gt;3.4.5&lt;/version&gt;
                &lt;/dependency&gt;
                &lt;!--mysql driver--&gt;
                &lt;dependency&gt;
                    &lt;groupId&gt;mysql&lt;/groupId&gt;
                    &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;
                    &lt;version&gt;8.0.20&lt;/version&gt;
                &lt;/dependency&gt;
            &lt;/dependencies&gt;
            &lt;configuration&gt;
                &lt;!--username--&gt;
                &lt;username&gt;root&lt;/username&gt;
                &lt;!--password--&gt;
                &lt;password&gt;password&lt;/password&gt;
                &lt;!--driver--&gt;
                &lt;driverClassName&gt;com.mysql.cj.jdbc.Driver&lt;/driverClassName&gt;
                &lt;!--jdbc url--&gt;
                &lt;jdbcUrl&gt;jdbc:mysql://127.0.0.1:3306/xxxx&lt;/jdbcUrl&gt;
                &lt;!--\u751F\u6210\u6587\u4EF6\u7C7B\u578B--&gt;
                &lt;fileType&gt;HTML&lt;/fileType&gt;
                &lt;!--\u6253\u5F00\u6587\u4EF6\u8F93\u51FA\u76EE\u5F55--&gt;
                &lt;openOutputDir&gt;false&lt;/openOutputDir&gt;
                &lt;!--\u751F\u6210\u6A21\u677F--&gt;
                &lt;produceType&gt;freemarker&lt;/produceType&gt;
                &lt;!--\u6587\u6863\u540D\u79F0 \u4E3A\u7A7A\u65F6:\u5C06\u91C7\u7528[\u6570\u636E\u5E93\u540D\u79F0-\u63CF\u8FF0-\u7248\u672C\u53F7]\u4F5C\u4E3A\u6587\u6863\u540D\u79F0--&gt;
                &lt;fileName&gt;\u6D4B\u8BD5\u6587\u6863\u540D\u79F0&lt;/fileName&gt;
                &lt;!--\u63CF\u8FF0--&gt;
                &lt;description&gt;\u6570\u636E\u5E93\u6587\u6863\u751F\u6210&lt;/description&gt;
                &lt;!--\u7248\u672C--&gt;
                &lt;version&gt;\${project.version}&lt;/version&gt;
                &lt;!--\u6807\u9898--&gt;
                &lt;title&gt;\u6570\u636E\u5E93\u6587\u6863&lt;/title&gt;
            &lt;/configuration&gt;
            &lt;executions&gt;
                &lt;execution&gt;
                    &lt;phase&gt;compile&lt;/phase&gt;
                    &lt;goals&gt;
                        &lt;goal&gt;run&lt;/goal&gt;
                    &lt;/goals&gt;
                &lt;/execution&gt;
            &lt;/executions&gt;
        &lt;/plugin&gt;
    &lt;/plugins&gt;
&lt;/build&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><h3 id="\u4F7F\u7528\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6587\u7AE0" aria-hidden="true">#</a> \u4F7F\u7528\u6587\u7AE0</h3><ul><li><p><a href="https://my.oschina.net/mdxlcj/blog/4341399" target="_blank" rel="noopener noreferrer">SpringBoot\u6574\u5408screw\u751F\u6210\u6570\u636E\u5E93\u6587\u6863</a></p></li><li><p><a href="https://mp.weixin.qq.com/s/Bo_U5_cl82hfQ6GmRs2vtA" target="_blank" rel="noopener noreferrer">\u8FD8\u5728\u624B\u52A8\u6574\u7406\u6570\u636E\u5E93\u6587\u6863\uFF1F\u8BD5\u8BD5\u8FD9\u4E2A\u5DE5\u5177</a></p></li><li><p><a href="https://mp.weixin.qq.com/s/nPwFV7DN8Ogg54_crLlP3g" target="_blank" rel="noopener noreferrer">\u5B9E\u7528\uFF01\u4E00\u952E\u751F\u6210\u6570\u636E\u5E93\u6587\u6863\uFF0C\u582A\u79F0\u6570\u636E\u5E93\u754C\u7684Swagger</a></p></li></ul><h3 id="\u4F7F\u7528\u89C6\u9891" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u89C6\u9891" aria-hidden="true">#</a> \u4F7F\u7528\u89C6\u9891</h3><ul><li><p><a href="https://www.bilibili.com/video/av456302504/" target="_blank" rel="noopener noreferrer">\u4F7F\u7528screw\u6570\u636E\u5E93\u6587\u6863\u751F\u6210\u5DE5\u5177\u5FEB\u901F\u751F\u6210\u6570\u636E\u5E93\u6587\u6863</a></p></li><li><p><a href="https://mp.weixin.qq.com/s/rUde6XSGSG0jKuy0Wgf1Mw" target="_blank" rel="noopener noreferrer">\u5FAE\u4EBA\u4E8B\u4E00\u952E\u751F\u6210\u6570\u636E\u5E93\u6587\u6863\uFF01\u70AB\uFF01</a></p></li></ul><h2 id="\u6269\u5C55\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55\u6A21\u5757" aria-hidden="true">#</a> \u6269\u5C55\u6A21\u5757</h2><h3 id="pojo\u751F\u6210\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#pojo\u751F\u6210\u529F\u80FD" aria-hidden="true">#</a> pojo\u751F\u6210\u529F\u80FD</h3><h4 id="\u529F\u80FD\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD\u7B80\u4ECB" aria-hidden="true">#</a> \u529F\u80FD\u7B80\u4ECB</h4><p>\u2003\u2003pojo\u751F\u6210\u529F\u80FD\u662F\u57FA\u4E8Escrew\u5EF6\u4F38\u51FA\u7684\u6269\u5C55\u6A21\u5757,\u76EE\u524D\u5904\u4E8E\u521D\u6B65\u5F00\u53D1\u7684\u72B6\u6001\u3002\u5728\u65E5\u5E38\u7684\u5F00\u53D1\u4E2D,\u7ECF\u8FC7\u9700\u6C42\u5206\u6790\u3001\u5EFA\u6A21\u4E4B\u540E,\u5F80\u5F80\u4F1A\u5148\u5728\u6570\u636E\u5E93\u4E2D\u5EFA\u8868,\u5176\u6B21\u5728\u8FDB\u884C\u4EE3\u7801\u7684\u5F00\u53D1\u3002\u90A3\u4E48pojo\u751F\u6210\u529F\u80FD\u5728\u8FD9\u4E2A\u9636\u6BB5\u5C31\u53EF\u4EE5\u5E2E\u52A9\u5927\u5BB6\u8282\u7701\u4E00\u4E9B\u91CD\u590D\u52B3\u52A8\u4E86\u3002\u4F7F\u7528pojo\u751F\u6210\u529F\u80FD\u53EF\u4EE5\u76F4\u63A5\u6839\u636E\u6570\u636E\u5E93\u751F\u6210\u5BF9\u5E94\u7684java pojo\u5BF9\u8C61\u3002\u8FD9\u6837\u540E\u7EED\u7684\u4FEE\u6539\uFF0C\u5F00\u53D1\u90FD\u4F1A\u5F88\u65B9\u4FBF\u3002</p><h4 id="\u6570\u636E\u5E93\u652F\u6301-1" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u652F\u6301-1" aria-hidden="true">#</a> \u6570\u636E\u5E93\u652F\u6301</h4><ul><li>[x] MySQL</li></ul><h4 id="\u4F7F\u7528\u65B9\u5F0F-1" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u65B9\u5F0F-1" aria-hidden="true">#</a> \u4F7F\u7528\u65B9\u5F0F</h4><ul><li><strong>\u5F15\u5165\u4F9D\u8D56</strong></li></ul><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;dependency&gt;
    &lt;groupId&gt;cn.smallbun.screw&lt;/groupId&gt;
    &lt;artifactId&gt;screw-extension&lt;/artifactId&gt;
    &lt;version&gt;\${lastVersion}&lt;/version&gt;
 &lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><ul><li><strong>\u7F16\u5199\u4EE3\u7801</strong></li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>/**
 * pojo\u751F\u6210
 */
void pojoGeneration() {
    //\u6570\u636E\u6E90
    HikariConfig hikariConfig = new HikariConfig();
    hikariConfig.setDriverClassName(&quot;com.mysql.cj.jdbc.Driver&quot;);
    hikariConfig.setJdbcUrl(&quot;jdbc:mysql://127.0.0.1:3306/screw&quot;);
    hikariConfig.setUsername(&quot;screw&quot;);
    hikariConfig.setPassword(&quot;screw&quot;);
    //\u8BBE\u7F6E\u53EF\u4EE5\u83B7\u53D6tables remarks\u4FE1\u606F
    hikariConfig.addDataSourceProperty(&quot;useInformationSchema&quot;, &quot;true&quot;);
    hikariConfig.setMinimumIdle(2);
    hikariConfig.setMaximumPoolSize(5);
    DataSource dataSource = new HikariDataSource(hikariConfig);

    ProcessConfig processConfig = ProcessConfig.builder()
        //\u6307\u5B9A\u751F\u6210\u903B\u8F91\u3001\u5F53\u5B58\u5728\u6307\u5B9A\u8868\u3001\u6307\u5B9A\u8868\u524D\u7F00\u3001\u6307\u5B9A\u8868\u540E\u7F00\u65F6\uFF0C\u5C06\u751F\u6210\u6307\u5B9A\u8868\uFF0C\u5176\u4F59\u8868\u4E0D\u751F\u6210\u3001\u5E76\u8DF3\u8FC7\u5FFD\u7565\u8868\u914D\u7F6E
        //\u6839\u636E\u540D\u79F0\u6307\u5B9A\u8868\u751F\u6210
        .designatedTableName(new ArrayList&lt;&gt;())
        //\u6839\u636E\u8868\u524D\u7F00\u751F\u6210
        .designatedTablePrefix(new ArrayList&lt;&gt;())
        //\u6839\u636E\u8868\u540E\u7F00\u751F\u6210
        .designatedTableSuffix(new ArrayList&lt;&gt;()).build();

    //\u8BBE\u7F6E\u751F\u6210pojo\u76F8\u5173\u914D\u7F6E
    PojoConfiguration config = new PojoConfiguration();
    //\u8BBE\u7F6E\u6587\u4EF6\u5B58\u653E\u8DEF\u5F84
    config.setPath(&quot;/cn/smallbun/screw/&quot;);
    //\u8BBE\u7F6E\u5305\u540D
    config.setPackageName(&quot;cn.smallbun.screw&quot;);
    //\u8BBE\u7F6E\u662F\u5426\u4F7F\u7528lombok
    config.setUseLombok(false);
    //\u8BBE\u7F6E\u6570\u636E\u6E90
    config.setDataSource(dataSource);
    //\u8BBE\u7F6E\u547D\u540D\u7B56\u7565
    config.setNameStrategy(new HumpNameStrategy());
    //\u8BBE\u7F6E\u8868\u8FC7\u6EE4\u903B\u8F91
    config.setProcessConfig(processConfig);
    //\u6267\u884C\u751F\u6210
    new PojoExecute(config).execute();
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h2 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h2><ul><li><p>\u751F\u6210\u540E\u6587\u6863\u4E71\u7801\uFF1F</p><p>MySQL\uFF1AURL\u52A0\u5165<code>?characterEncoding=UTF-8</code>\u3002</p></li><li><p>Caused by: java.lang.NoSuchFieldError: VERSION_2_3_30\uFF1F</p><p>\u68C0\u67E5\u9879\u76EE<code>freemarker</code>\u4F9D\u8D56\uFF0C\u8FD9\u662F\u7531\u4E8E\u7248\u672C\u8FC7\u4F4E\u9020\u6210\u7684\uFF0C\u5347\u7EA7\u7248\u672C\u4E3A<code>2.3.30</code>\u5373\u53EF\u3002</p></li><li><p>java.lang.AbstractMethodError: oracle.jdbc.driver.T4CConnection.getSchema()Ljava/lang/String;</p><p>\u8FD9\u662F\u56E0\u4E3Aoracle\u9A71\u52A8\u7248\u672C\u8FC7\u4F4E\u9020\u6210\u7684\uFF0C\u5220\u9664\u6216\u5C4F\u853D\u76EE\u524D\u9A71\u52A8\u7248\u672C\uFF0C\u9A71\u52A8\u6DFB\u52A0\u5347\u7EA7\u4E3A\u4EE5\u4E0B\u7248\u672C\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;dependency&gt;
   &lt;groupId&gt;com.oracle.ojdbc&lt;/groupId&gt;
   &lt;artifactId&gt;ojdbc8&lt;/artifactId&gt;
   &lt;version&gt;19.3.0.0&lt;/version&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
   &lt;groupId&gt;cn.easyproject&lt;/groupId&gt;
   &lt;artifactId&gt;orai18n&lt;/artifactId&gt;
   &lt;version&gt;12.1.0.2.0&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li><li><p>MySQL\u6570\u636E\u5E93\u8868\u548C\u5217\u5B57\u6BB5\u6709\u8BF4\u660E\u3001\u751F\u6210\u6587\u6863\u6CA1\u6709\u8BF4\u660E\uFF1F</p><p>URL\u94FE\u63A5\u52A0\u5165<code>useInformationSchema=true</code>\u5373\u53EF\u3002</p></li><li><p>java.lang.AbstractMethodError: com.mysql.jdbc.JDBC4Connection.getSchema()Ljava/lang/String;</p><p>\u8FD9\u662F\u56E0\u4E3Amysql\u9A71\u52A8\u7248\u672C\u8FC7\u4F4E\u9020\u6210\u7684\uFF0C\u5347\u7EA7mysql\u9A71\u52A8\u7248\u672C\u4E3A\u6700\u65B0\u5373\u53EF\u3002</p></li></ul>`,41);function r(l,i){return e}var b=n(a,[["render",r],["__file","\u6570\u636E\u5E93\u8868\u7ED3\u6784\u6587\u6863\u751F\u6210\u5DE5\u5177.html.vue"]]);export{b as default};
