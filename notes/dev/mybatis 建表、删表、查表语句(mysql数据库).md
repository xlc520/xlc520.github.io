---
author: xlc520
title: Mybatis 建表、删表、查表语句(mysql数据库)
description: Mybatis 建表、删表、查表语句(mysql数据库)
date: 2022-04-03
category: Java
tag: Java
article: true
timeline: true
icon: 
password: 
---



# Mybatis 建表、删表、查表语句(mysql数据库)

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.crsc.sys.rabbitmq.dao.mysql.DBTableInitMapper" >
 
  <update id="createTodomessageTable" parameterType="String">  
	  CREATE TABLE todomessage (
		  id int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
		  moduleID varchar(255) DEFAULT NULL COMMENT '模块ID',
		  authCode varchar(255) DEFAULT NULL COMMENT '授权码',
		  itemid varchar(100) DEFAULT NULL COMMENT '待办事项ID',
		  statecode varchar(255) DEFAULT '0' COMMENT '任务状态  0待办  1 已办',
		  statePush varchar(4) DEFAULT '0' COMMENT '推送状态 0 未推送  1 已推送',
		  ssolink varchar(255) DEFAULT NULL COMMENT '明细链接',
		  userno varchar(200) DEFAULT NULL COMMENT '所属人员ID',
		  level varchar(255) DEFAULT NULL COMMENT '重要等级',
		  content varchar(255) DEFAULT NULL COMMENT '待办事项内容',
		  datetime datetime DEFAULT NULL COMMENT '生成时间',
		  nodename varchar(255) DEFAULT NULL COMMENT '审批节点',
		  extParameters varchar(500) DEFAULT NULL COMMENT '扩展参数',
		  updatetime datetime DEFAULT NULL COMMENT '修改时间',
		  uid varchar(64) DEFAULT NULL COMMENT 'UUID',
		  taskid varchar(255) DEFAULT NULL,
		  pushtime datetime DEFAULT NULL COMMENT '推送时间',
		  PROC_INST_ID varchar(64) DEFAULT NULL COMMENT '运行实例id',
		  PROC_DEF_ID varchar(64) DEFAULT NULL COMMENT '流程定义id',
		  version int(11) NOT NULL DEFAULT '0' COMMENT '乐观锁',
		  systemKey varchar(255) NOT NULL COMMENT '数据所属系统的key标识',
		  sourcebacaklog varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '发送oa代办数据',
		  sourcefinished varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '发送oa已办数据',
		  backlogtime datetime DEFAULT NULL COMMENT '代办时间',
		  finishedtime datetime DEFAULT NULL COMMENT '已办时间',
		  backlogflag varchar(255) DEFAULT NULL COMMENT '代办标识',
		  finishedflag varchar(255) DEFAULT NULL COMMENT '已办标识',
		  sourcedel varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '发送删除oa代办数据',
		  delbacklogtime datetime DEFAULT NULL COMMENT '删除代办发送oa时间',
		  delflag varchar(255) DEFAULT NULL COMMENT '删除代办标识',
		  formName varchar(255) DEFAULT NULL COMMENT '流程名称',
		  PRIMARY KEY (id) USING BTREE
	) ENGINE=InnoDB AUTO_INCREMENT=1637 DEFAULT CHARSET=utf8                 
  </update> 
  
  <update id="dropTodomessageTable">  
    drop table todomessage     
  </update>
  
  <select id="selectTodoMessage" resultType="java.lang.Integer">
  	SELECT COUNT(1) FROM information_schema.tables where table_name ='todomessage'
  </select>
  
</mapper>
```

