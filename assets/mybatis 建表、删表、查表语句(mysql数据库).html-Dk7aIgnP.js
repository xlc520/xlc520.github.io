import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as s,a as t}from"./app-DS3HItsn.js";const e={},i=t(`<h1 id="mybatis-建表、删表、查表语句-mysql-数据库" tabindex="-1"><a class="header-anchor" href="#mybatis-建表、删表、查表语句-mysql-数据库"><span>Mybatis 建表、删表、查表语句(mysql 数据库)</span></a></h1><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span> <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span> <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.crsc.sys.rabbitmq.dao.mysql.DBTableInitMapper<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>
 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>update</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>createTodomessageTable<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>String<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>  
   CREATE TABLE todomessage (
    id int(11) NOT NULL AUTO_INCREMENT COMMENT &#39;id&#39;,
    moduleID varchar(255) DEFAULT NULL COMMENT &#39;模块ID&#39;,
    authCode varchar(255) DEFAULT NULL COMMENT &#39;授权码&#39;,
    itemid varchar(100) DEFAULT NULL COMMENT &#39;待办事项ID&#39;,
    statecode varchar(255) DEFAULT &#39;0&#39; COMMENT &#39;任务状态  0待办  1 已办&#39;,
    statePush varchar(4) DEFAULT &#39;0&#39; COMMENT &#39;推送状态 0 未推送  1 已推送&#39;,
    ssolink varchar(255) DEFAULT NULL COMMENT &#39;明细链接&#39;,
    userno varchar(200) DEFAULT NULL COMMENT &#39;所属人员ID&#39;,
    level varchar(255) DEFAULT NULL COMMENT &#39;重要等级&#39;,
    content varchar(255) DEFAULT NULL COMMENT &#39;待办事项内容&#39;,
    datetime datetime DEFAULT NULL COMMENT &#39;生成时间&#39;,
    nodename varchar(255) DEFAULT NULL COMMENT &#39;审批节点&#39;,
    extParameters varchar(500) DEFAULT NULL COMMENT &#39;扩展参数&#39;,
    updatetime datetime DEFAULT NULL COMMENT &#39;修改时间&#39;,
    uid varchar(64) DEFAULT NULL COMMENT &#39;UUID&#39;,
    taskid varchar(255) DEFAULT NULL,
    pushtime datetime DEFAULT NULL COMMENT &#39;推送时间&#39;,
    PROC_INST_ID varchar(64) DEFAULT NULL COMMENT &#39;运行实例id&#39;,
    PROC_DEF_ID varchar(64) DEFAULT NULL COMMENT &#39;流程定义id&#39;,
    version int(11) NOT NULL DEFAULT &#39;0&#39; COMMENT &#39;乐观锁&#39;,
    systemKey varchar(255) NOT NULL COMMENT &#39;数据所属系统的key标识&#39;,
    sourcebacaklog varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT &#39;发送oa代办数据&#39;,
    sourcefinished varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT &#39;发送oa已办数据&#39;,
    backlogtime datetime DEFAULT NULL COMMENT &#39;代办时间&#39;,
    finishedtime datetime DEFAULT NULL COMMENT &#39;已办时间&#39;,
    backlogflag varchar(255) DEFAULT NULL COMMENT &#39;代办标识&#39;,
    finishedflag varchar(255) DEFAULT NULL COMMENT &#39;已办标识&#39;,
    sourcedel varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT &#39;发送删除oa代办数据&#39;,
    delbacklogtime datetime DEFAULT NULL COMMENT &#39;删除代办发送oa时间&#39;,
    delflag varchar(255) DEFAULT NULL COMMENT &#39;删除代办标识&#39;,
    formName varchar(255) DEFAULT NULL COMMENT &#39;流程名称&#39;,
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[i];function c(p,o){return n(),s("div",null,l)}const d=a(e,[["render",c],["__file","mybatis 建表、删表、查表语句(mysql数据库).html.vue"]]),m=JSON.parse('{"path":"/dev/mybatis%20%E5%BB%BA%E8%A1%A8%E3%80%81%E5%88%A0%E8%A1%A8%E3%80%81%E6%9F%A5%E8%A1%A8%E8%AF%AD%E5%8F%A5(mysql%E6%95%B0%E6%8D%AE%E5%BA%93).html","title":"Mybatis 建表、删表、查表语句(mysql数据库)","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"Mybatis 建表、删表、查表语句(mysql数据库)","excerpt":null,"description":"Mybatis 建表、删表、查表语句(mysql数据库)","date":"2022-04-03T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"type","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/mybatis%20%E5%BB%BA%E8%A1%A8%E3%80%81%E5%88%A0%E8%A1%A8%E3%80%81%E6%9F%A5%E8%A1%A8%E8%AF%AD%E5%8F%A5(mysql%E6%95%B0%E6%8D%AE%E5%BA%93).html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"Mybatis 建表、删表、查表语句(mysql数据库)"}],["meta",{"property":"og:description","content":"Mybatis 建表、删表、查表语句(mysql数据库)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2022-04-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mybatis 建表、删表、查表语句(mysql数据库)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-04-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[],"git":{"createdTime":1648954730000,"updatedTime":1714224756000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":2},{"name":"xlc","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":1.58,"words":473},"filePathRelative":"dev/mybatis 建表、删表、查表语句(mysql数据库).md","localizedDate":"2022年4月3日"}');export{d as comp,m as data};
