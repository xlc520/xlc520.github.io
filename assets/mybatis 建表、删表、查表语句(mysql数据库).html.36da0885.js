import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as s,d as t}from"./app.f0c9cfa3.js";const e={},i=t(`<h1 id="mybatis-\u5EFA\u8868\u3001\u5220\u8868\u3001\u67E5\u8868\u8BED\u53E5-mysql\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#mybatis-\u5EFA\u8868\u3001\u5220\u8868\u3001\u67E5\u8868\u8BED\u53E5-mysql\u6570\u636E\u5E93" aria-hidden="true">#</a> Mybatis \u5EFA\u8868\u3001\u5220\u8868\u3001\u67E5\u8868\u8BED\u53E5(mysql\u6570\u636E\u5E93)</h1><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span> <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span> <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.crsc.sys.rabbitmq.dao.mysql.DBTableInitMapper<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>update</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>createTodomessageTable<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>String<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>  
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
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>update</span><span class="token punctuation">&gt;</span></span> 
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>update</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dropTodomessageTable<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>  
    drop table todomessage     
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>update</span><span class="token punctuation">&gt;</span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectTodoMessage<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>java.lang.Integer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  	SELECT COUNT(1) FROM information_schema.tables where table_name =&#39;todomessage&#39;
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[i];function c(p,o){return n(),s("div",null,l)}var d=a(e,[["render",c],["__file","mybatis \u5EFA\u8868\u3001\u5220\u8868\u3001\u67E5\u8868\u8BED\u53E5(mysql\u6570\u636E\u5E93).html.vue"]]);export{d as default};
