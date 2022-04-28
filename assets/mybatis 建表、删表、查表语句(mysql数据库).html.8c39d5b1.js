import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{c as n}from"./app.f1128457.js";const s={},e=n(`<h1 id="mybatis-\u5EFA\u8868\u3001\u5220\u8868\u3001\u67E5\u8868\u8BED\u53E5-mysql\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#mybatis-\u5EFA\u8868\u3001\u5220\u8868\u3001\u67E5\u8868\u8BED\u53E5-mysql\u6570\u636E\u5E93" aria-hidden="true">#</a> Mybatis \u5EFA\u8868\u3001\u5220\u8868\u3001\u67E5\u8868\u8BED\u53E5(mysql\u6570\u636E\u5E93)</h1><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;
&lt;!DOCTYPE mapper PUBLIC &quot;-//mybatis.org//DTD Mapper 3.0//EN&quot; &quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot; &gt;
&lt;mapper namespace=&quot;com.crsc.sys.rabbitmq.dao.mysql.DBTableInitMapper&quot; &gt;
 
  &lt;update id=&quot;createTodomessageTable&quot; parameterType=&quot;String&quot;&gt;  
	  CREATE TABLE todomessage (
		  id int(11) NOT NULL AUTO_INCREMENT COMMENT &#39;id&#39;,
		  moduleID varchar(255) DEFAULT NULL COMMENT &#39;\u6A21\u5757ID&#39;,
		  authCode varchar(255) DEFAULT NULL COMMENT &#39;\u6388\u6743\u7801&#39;,
		  itemid varchar(100) DEFAULT NULL COMMENT &#39;\u5F85\u529E\u4E8B\u9879ID&#39;,
		  statecode varchar(255) DEFAULT &#39;0&#39; COMMENT &#39;\u4EFB\u52A1\u72B6\u6001  0\u5F85\u529E  1 \u5DF2\u529E&#39;,
		  statePush varchar(4) DEFAULT &#39;0&#39; COMMENT &#39;\u63A8\u9001\u72B6\u6001 0 \u672A\u63A8\u9001  1 \u5DF2\u63A8\u9001&#39;,
		  ssolink varchar(255) DEFAULT NULL COMMENT &#39;\u660E\u7EC6\u94FE\u63A5&#39;,
		  userno varchar(200) DEFAULT NULL COMMENT &#39;\u6240\u5C5E\u4EBA\u5458ID&#39;,
		  level varchar(255) DEFAULT NULL COMMENT &#39;\u91CD\u8981\u7B49\u7EA7&#39;,
		  content varchar(255) DEFAULT NULL COMMENT &#39;\u5F85\u529E\u4E8B\u9879\u5185\u5BB9&#39;,
		  datetime datetime DEFAULT NULL COMMENT &#39;\u751F\u6210\u65F6\u95F4&#39;,
		  nodename varchar(255) DEFAULT NULL COMMENT &#39;\u5BA1\u6279\u8282\u70B9&#39;,
		  extParameters varchar(500) DEFAULT NULL COMMENT &#39;\u6269\u5C55\u53C2\u6570&#39;,
		  updatetime datetime DEFAULT NULL COMMENT &#39;\u4FEE\u6539\u65F6\u95F4&#39;,
		  uid varchar(64) DEFAULT NULL COMMENT &#39;UUID&#39;,
		  taskid varchar(255) DEFAULT NULL,
		  pushtime datetime DEFAULT NULL COMMENT &#39;\u63A8\u9001\u65F6\u95F4&#39;,
		  PROC_INST_ID varchar(64) DEFAULT NULL COMMENT &#39;\u8FD0\u884C\u5B9E\u4F8Bid&#39;,
		  PROC_DEF_ID varchar(64) DEFAULT NULL COMMENT &#39;\u6D41\u7A0B\u5B9A\u4E49id&#39;,
		  version int(11) NOT NULL DEFAULT &#39;0&#39; COMMENT &#39;\u4E50\u89C2\u9501&#39;,
		  systemKey varchar(255) NOT NULL COMMENT &#39;\u6570\u636E\u6240\u5C5E\u7CFB\u7EDF\u7684key\u6807\u8BC6&#39;,
		  sourcebacaklog varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT &#39;\u53D1\u9001oa\u4EE3\u529E\u6570\u636E&#39;,
		  sourcefinished varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT &#39;\u53D1\u9001oa\u5DF2\u529E\u6570\u636E&#39;,
		  backlogtime datetime DEFAULT NULL COMMENT &#39;\u4EE3\u529E\u65F6\u95F4&#39;,
		  finishedtime datetime DEFAULT NULL COMMENT &#39;\u5DF2\u529E\u65F6\u95F4&#39;,
		  backlogflag varchar(255) DEFAULT NULL COMMENT &#39;\u4EE3\u529E\u6807\u8BC6&#39;,
		  finishedflag varchar(255) DEFAULT NULL COMMENT &#39;\u5DF2\u529E\u6807\u8BC6&#39;,
		  sourcedel varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT &#39;\u53D1\u9001\u5220\u9664oa\u4EE3\u529E\u6570\u636E&#39;,
		  delbacklogtime datetime DEFAULT NULL COMMENT &#39;\u5220\u9664\u4EE3\u529E\u53D1\u9001oa\u65F6\u95F4&#39;,
		  delflag varchar(255) DEFAULT NULL COMMENT &#39;\u5220\u9664\u4EE3\u529E\u6807\u8BC6&#39;,
		  formName varchar(255) DEFAULT NULL COMMENT &#39;\u6D41\u7A0B\u540D\u79F0&#39;,
		  PRIMARY KEY (id) USING BTREE
	) ENGINE=InnoDB AUTO_INCREMENT=1637 DEFAULT CHARSET=utf8                 
  &lt;/update&gt; 
  
  &lt;update id=&quot;dropTodomessageTable&quot;&gt;  
    drop table todomessage     
  &lt;/update&gt;
  
  &lt;select id=&quot;selectTodoMessage&quot; resultType=&quot;java.lang.Integer&quot;&gt;
  	SELECT COUNT(1) FROM information_schema.tables where table_name =&#39;todomessage&#39;
  &lt;/select&gt;
  
&lt;/mapper&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div>`,2);function r(t,l){return e}var i=a(s,[["render",r],["__file","mybatis \u5EFA\u8868\u3001\u5220\u8868\u3001\u67E5\u8868\u8BED\u53E5(mysql\u6570\u636E\u5E93).html.vue"]]);export{i as default};
