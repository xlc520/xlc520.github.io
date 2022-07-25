---
author: xlc520
title: SpringBoot集成Flowable做工作流
description: 
date: 2022-08-11
category: Java
tag: Java
article: true
timeline: true
icon: java
password: 
---



# 什么是BPMN

## **工作流(引擎)介绍**

在任何行业和企业中，都有各种各样的流程，例如：

1. 请假流程
2. 报销流程
3. 入职流程
4. 离职流程
5. 出差流程
6. 等等……

就算你自己没有设计过工作流，那么你每天肯定也在使用各种流程。

工作流引擎其实就是使用代码实现UML流程图中的各个步骤而已：

![SpringBoot集成Flowable](http://alist.ciberviler.top/d/ecloud180/images/blogImage/a92297eeb2b94961ae0b379f4d8b9ddc.png)

凡是需要多个人（或者多个部门）按照先后顺序去一级一级审批的业务都可以使用工作流来完成。

## 为什么要用 BPMN ？

> 业务流程建模与标注（Business Process Model and Notation，BPMN) ，描述流程的基本符号，包括这些图元如何组合成一个业务流程图（Business Process Diagram）。

对于流程控制，有一种比较初级的玩法是：在业务代码里面加入 Status（状态机） 字段维护流程状态，流程负责的审批人可能也是 Hard Code（硬编码），这种玩法实现流程初级会比较快，但是长远来看会出现几个问题：

1. 流程健壮性差，但凡出现人员变动，或者组织结构调整，就需要修改代码，维护成本高
2. 流程无法复用，当组织出现新的工作流程，又要重新写一套代码，开发成本非常高
3. 流程和业务代码耦合，你中有我，我中有你（并不符合单一职责和解耦的设计原则）

## 认识BPMN基础元素

BPMN 2.0 只要充分了解以下四类基础元素，基本就能掌握BPMN 2.0 的核心：

1. 流对象
2. 数据)
3. 连接对象
4. 泳道

**流对象（Flow Objects）**

是定义业务流程的主要图形元素，包括三种：事件、活动、网关

1、**事件（Events）**：指的是在业务流程的运行过程中发生的事情，分为：

- 开始：表示一个流程的开始
- 中间：发生的开始和结束事件之间，影响处理的流程
- 结束：表示该过程结束

![SpringBoot集成Flowable](http://alist.ciberviler.top/d/ecloud180/images/blogImage/v2-36313c37bab54e452e04cf942787110b_720w.jpg)

2、**活动（Activities）**：包括任务和子流程两类。子流程在图形的下方中间外加一个小加号（+）来区分。

![SpringBoot集成Flowable](http://alist.ciberviler.top/d/ecloud180/images/blogImage/v2-fe4af1b4136cc94af7b5b7e74043e35a_720w.jpg)

3、**网关（Gateways）**：用于表示流程的分支与合并。

- 排他网关：只有一条路径会被选择
- 并行网关：所有路径会被同时选择
- 包容网关：可以同时执行多条线路，也可以在网关上设置条件
- 事件网关：专门为中间捕获事件设置的，允许设置多个输出流指向多个不同的中间捕获事件。当流程执行到事件网关后，流程处于等待状态，需要等待抛出事件才能将等待状态转换为活动状态。

![SpringBoot集成Flowable](http://alist.ciberviler.top/d/ecloud180/images/blogImage/v2-94eafef2e7a66e2ae8461217a884f360_720w.jpg)

**数据（Data）**

数据主要通过四种元素表示：

- 数据对象（Data Objects）
- 数据输入（Data Inputs）
- 数据输出（Data Outputs）
- 数据存储（Data Stores）

**连接对象（Connecting Objects）**

流对象彼此互相连接或者连接到其他信息的方法主要有三种：

- 顺序流：用一个带实心箭头的实心线表示，用于指定活动执行的顺序
- 信息流：用一条带箭头的虚线表示，用于描述两个独立的业务参与者（业务实体/业务角色）之间发送和接受的消息流动
- 关联：用一根带有线箭头的点线表示，用于将相关的数据、文本和其他人工信息与流对象联系起来。用于展示活动的输入和输出

**泳道（Swimlanes）**

通过泳道对主要的建模元素进行分组，将活动划分到不同的可视化类别中来描述由不同的参与者的责任与职责。

## BPMN实例

**实例1**：拍卖服务BPMN模板

![SpringBoot集成Flowable](http://alist.ciberviler.top/d/ecloud180/images/blogImage/v2-16176e4ff653436daf61415cf9763276_720w.jpg)

**实例2**：书籍销售流程 BPMN

![SpringBoot集成Flowable](http://alist.ciberviler.top/d/ecloud180/images/blogImage/v2-d1d2769a122c2e9e88fdea04e905d0b5_720w.jpg)

# Flowable简介

> 目前最新版是**Flowable 6.7.2**（2022年05月09日）
>
> 官方网站：https://www.flowable.com/open-source
>
> 用户手册：https://tkjohn.github.io/flowable-userguide/
>
> GitHub：https://github.com/flowable

Flowable是BPMN的一个基于java的软件实现，不过Flowable不仅仅包括BPMN，还有DMN决策表和CMMN Case管理引擎，并且有自己的用户管理、微服务API等一系列功能，是一个服务平台。

## Flowable部署

1、下载

访问：https://github.com/flowable/flowable-engine/releases

选择下载版本，我这里下载的是 6.5.0

![SpringBoot集成Flowable](http://alist.ciberviler.top/d/ecloud180/images/blogImage/2443180-20220509132750126-1538478027.png)

2、下载后解压，wars 文件目录里面共 5 个 war包：

![SpringBoot集成Flowable](http://alist.ciberviler.top/d/ecloud180/images/blogImage/2443180-20220509140242743-532479050.png)

- flowable-admin：后台管理
- flow-idm：用户组权限管理
- flow-modeler：流程定义管理
- flowable-rest：流程引擎对外提供的API接⼝
- flowable-task：用户任务管理

把它们放到tomact的 webapps 目录，然后找到 tomcat / bin / startup.bat 启动 tomcat，会等待一段时间。

3、修改配置文件

所有war包都解压后，找到每个项目中的，比如：\webapps\flowable-admin\WEB-INF\classes application-dev.properties 这样的配置文件

1）修改：改成自己的数据库链接地址，数据库名flowable自己创建，从flowable-6.5.0.zip里面database下面的creat/all 下的sql 脚本执行去建表 几十张表



```plaintext
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/flowable?serverTimezone=Asia/Shanghai&useUnicode=true&charcterEncoding=UTF-8&useSSL=false
spring.datasource.username=root
spring.datasource.password=root

flowable.admin.app.server-config.process.port=9999
flowable.admin.app.server-config.cmmn.port=9999
flowable.admin.app.server-config.app.port=9999
flowable.admin.app.server-config.dmn.port=9999
flowable.admin.app.server-config.form.port=9999
flowable.admin.app.server-config.content.port=9999
```

2）修改\webapps\flowable-admin\WEB-INF\classes flowable-default.properties， 主要就是修改数据库链接上，改成mysql的

> 注意：
>
> 1）需要在每个项目的WEB-INF\lib目录下添加mysql的驱动包。
>
> 2）高版本的mysql驱动包，有些必须的连接参数需要配置。我使用的是mysql-connector-java-8.0.11.jar，配置如下：
>
> jdbc:mysql://localhost:3306/flowable?serverTimezone=Asia/Shanghai&useUnicode=true&charcterEncoding=UTF-8&useSSL=false



```plaintext
server.port=9988
server.servlet.context-path=/flowable-admin
management.endpoints.jmx.unique-names=true
# This is needed to force use of JDK proxies instead of using CGLIB
spring.aop.proxy-target-class=false
spring.aop.auto=false
spring.application.name=flowable-ui-admin
spring.liquibase.enabled=false
spring.servlet.multipart.max-file-size=10MB
spring.banner.location=classpath:/org/flowable/spring/boot/flowable-banner.txt
# The default domain for generating ObjectNames must be specified. Otherwise when multiple Spring Boot applications start in the same servlet container
# all would be created with the same name (com.zaxxer.hikari:name=dataSource,type=HikariDataSource) for example
spring.jmx.default-domain=${spring.application.name}
 
# Expose all actuator endpoints to the web
# They are exposed, but only authenticated users can see /info and /health abd users with access-admin can see the others
management.endpoints.web.exposure.include=*
# Full health details should only be displayed when a user is authorized
management.endpoint.health.show-details=when_authorized
# Only users with role access-admin can access full health details
management.endpoint.health.roles=access-admin
# Spring prefixes the roles with ROLE_. However, Flowable does not have that concept yet, so we need to override that with an empty string
flowable.common.app.role-prefix=
 
# H2 example (default)
 
#spring.datasource.driver-class-name=org.h2.Driver
#spring.datasource.url=jdbc:h2:tcp://localhost/flowableadmin
#spring.datasource.url=jdbc:h2:~/flowable-db/db;AUTO_SERVER=TRUE;AUTO_SERVER_PORT=9091;DB_CLOSE_DELAY=-1
 
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/flowable?serverTimezone=Asia/Shanghai&useUnicode=true&charcterEncoding=UTF-8&useSSL=false
 
#spring.datasource.driver-class-name=org.postgresql.Driver
#spring.datasource.url=jdbc:postgresql://localhost:5432/flowableadmin
 
#spring.datasource.driver-class-name=com.microsoft.sqlserver.jdbc.SQLServerDriver
#spring.datasource.url=jdbc:sqlserver://localhost:1433;databaseName=flowableadmin
 
#spring.datasource.driver-class-name=oracle.jdbc.driver.OracleDriver
#spring.datasource.url=jdbc:oracle:thin:@localhost:1521:FLOWABLEADMIN
 
#spring.datasource.driver-class-name=com.ibm.db2.jcc.DB2Driver
#spring.datasource.url=jdbc:db2://localhost:50000/flowableadmin
 
spring.datasource.username=root
spring.datasource.password=root折叠 
```

几个项目的都修改完，关闭之前运行的tomcat ，重新启动。

5、访问

需要时间会久点，都正常启动后

访问 http://127.0.0.1:8080/flowable-admin  用户名 admin 密码 test

访问 http://127.0.0.1:8080/flowable-idm  用户名 admin 密码 test 

访问 http://127.0.0.1:8080/flowable-modeler  用户名 admin 密码 test 

## Flowable数据表

1、Flowable的所有数据库表都以ACT_开头。服务API的命名也大略符合这个规则。

2、ACT_RE_：'RE'代表repository。带有这个前缀的表包含“静态”信息，例如流程定义与流程资源（图片、规则等）。

3、ACT_RU_：'RU'代表runtime。这些表存储运行时信息，例如流程实例（process instance）、用户任务（user task）、变量（variable）、作业（job）等。Flowable只在流程实例运行中保存运行时数据，并在流程实例结束时删除记录。这样保证运行时表小和快。

4、ACT_HI_：'HI'代表history。这些表存储历史数据，例如已完成的流程实例、变量、任务等。

5、ACT_GE_：通用数据。在多处使用。

**1）通用数据表（2个）**

- act_ge_bytearray：二进制数据表，如流程定义、流程模板、流程图的字节流文件；
- act_ge_property：Flowable 相关的基本信息（不常用）。比如各个 module 使用的版本信息

**2）历史表（8个，HistoryService接口操作的表）**

- act_hi_actinst：历史节点表，存放流程实例运转的各个节点信息（包含开始、结束等非任务节点）；
- act_hi_attachment：历史附件表，存放历史节点上传的附件信息（不常用）；
- act_hi_comment：历史意见表；
- act_hi_detail：历史详情表，存储节点运转的一些信息（不常用）；
- act_hi_identitylink：历史流程人员表，存储流程各节点候选、办理人员信息，常用于查询某人或部门的已办任务；
- act_hi_procinst：历史流程实例表，存储流程实例历史数据（包含正在运行的流程实例）；
- act_hi_taskinst：历史流程任务表，存储历史任务节点；
- act_hi_varinst：流程历史变量表，存储流程历史节点的变量信息；

**3）用户相关表（4个，IdentityService接口操作的表）**

- act_id_group：用户组信息表，对应节点选定候选组信息；
- act_id_info：用户扩展信息表，存储用户扩展信息；
- act_id_membership：用户与用户组关系表；
- act_id_user：用户信息表，对应节点选定办理人或候选人信息；

**4）流程定义、流程模板相关表（3个，RepositoryService接口操作的表）**

- act_re_deployment：部属信息表，存储流程定义、模板部署信息；
- act_re_procdef：流程定义信息表，存储流程定义相关描述信息，但其真正内容存储在act_ge_bytearray表中，以字节形式存储；
- act_re_model：流程模板信息表，存储流程模板相关描述信息，但其真正内容存储在act_ge_bytearray表中，以字节形式存储；

**5）流程运行时表（6个，RuntimeService接口操作的表）**

- act_ru_task：运行时流程任务节点表，存储运行中流程的任务节点信息，重要，常用于查询人员或部门的待办任务时使用；
- act_ru_event_subscr：监听信息表，不常用；
- act_ru_execution：运行时流程执行实例表，记录运行中流程运行的各个分支信息（当没有子流程时，其数据与act_ru_task表数据是一一对应的）；
- act_ru_identitylink：运行时流程人员表，重要，常用于查询人员或部门的待办任务时使用；
- act_ru_job：运行时定时任务数据表，存储流程的定时任务信息；
- act_ru_variable：运行时流程变量数据表，存储运行中的流程各节点的变量信息；

# Flowable流程设计器的使用

**新建流程图**

![SpringBoot集成Flowable](http://alist.ciberviler.top/d/ecloud180/images/blogImage/2443180-20220509153032863-1101803880.png)

**注意：这个key最好不要有中文，后期流程部署、启动、跳转都可能会用到它，所有不要定义的过于随意**

**根据业务需求画流程图**

1、节点分类：开始节点、用户任务节点、结束节点

![SpringBoot集成Flowable](http://alist.ciberviler.top/d/ecloud180/images/blogImage/2443180-20220509153231253-1781852235.png)

2、节点名称：可直接在“名称”处填写，也可以双击节点输入

![SpringBoot集成Flowable](http://alist.ciberviler.top/d/ecloud180/images/blogImage/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDE1MDk5Mw==,size_16,color_FFFFFF,t_70.png)

3、分配用户（只针对用户任务节点）

为节点分配审批人（由于Flowable自带的的组织结构和我们的组织架构可能存在差异，所以我们一般用固定值）

![SpringBoot集成Flowable](http://alist.ciberviler.top/d/ecloud180/images/blogImage/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDE1MDk5Mw==,size_16,color_FFFFFF,t_70-16587155160551.png)

![SpringBoot集成Flowable](http://alist.ciberviler.top/d/ecloud180/images/blogImage/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDE1MDk5Mw==,size_16,color_FFFFFF,t_70-16587155160552.png)

4、任务监听器（只针对用户任务节点）

（1）任务监听器的分类：

- create：当任务被创建时会执行的监听器。
- assignment：当任务被签收时会执行的监听器。
- complete：当任务完成时执行的监听器。
- delete：当任务被删除时执行的监听器。

![SpringBoot集成Flowable](http://alist.ciberviler.top/d/ecloud180/images/blogImage/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDE1MDk5Mw==,size_16,color_FFFFFF,t_70-16587155160553.png)

（2）常用的任务监听器以及使用场景

create：上面讲的给用户节点设置审批人只适用于办理人是固定的某一个人或多个候选人；如果一个用户节点办理人是不固定的话，我们可以用create任务监听器来实现

complete：当遇到一个用户任务办完需要抄送或者触发其他事物的时候，我们可以使用complete任务监听器；不同类型的任务监听器使用方法都一样。

5、多实例

Flowable支持一个节点多个实例；通俗讲就是你在流程图里只画了一个用户节点，但是通过多实例配置可以使流程运行时为这一个节点创建多个实例；这个类似于循环，而循环的次数取决于你设置的基数。

多实例还支持串行Sequential和并行parallel；通俗来讲所谓的串行就是顺序执行，并行就是不按顺序执行，但它俩的相同点都是必须要所有的实例都完成这个节点才算结束。

![SpringBoot集成Flowable](http://alist.ciberviler.top/d/ecloud180/images/blogImage/20210609175024118.png)

6、流程线

（1）流条件配置

审批流当中最常见的就是通过和驳回，这时候就需要为通过和驳回的流程线设置流转条件。

Flowable流条件是以占位符的方式存在的。

![SpringBoot集成Flowable](http://alist.ciberviler.top/d/ecloud180/images/blogImage/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDE1MDk5Mw==,size_16,color_FFFFFF,t_70-16587155160554.png)

（2）跳过表达式

和流条件配置方式一样；流程启动后，当传入的流程变量值符合要求时会自动跳过。

![SpringBoot集成Flowable](http://alist.ciberviler.top/d/ecloud180/images/blogImage/2c7b7063ccbb4ff1bc6185ea7aee7606.png)

7、常用的网关

（1）排他网关：通过它的流只能有一条。

注意：排他网关支持默认出口；流程启动后，当其他流程线都返回false时走默认流。

（2） 并行网关：只有所有要经过它的任务流都完成时才会进行下一步。

![SpringBoot集成Flowable](http://alist.ciberviler.top/d/ecloud180/images/blogImage/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NDE1MDk5Mw==,size_16,color_FFFFFF,t_70-16587155160565.png)

![SpringBoot集成Flowable](http://alist.ciberviler.top/d/ecloud180/images/blogImage/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ29kZXJXYW5nQENoaW5h,size_20,color_FFFFFF,t_70,g_se,x_16.png)

**保存**

![SpringBoot集成Flowable](http://alist.ciberviler.top/d/ecloud180/images/blogImage/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ29kZXJXYW5nQENoaW5h,size_20,color_FFFFFF,t_70,g_se,x_16-16587155160566.png)

保存后流程图相关数据会保存在act_de_model表内，并且每次更新并保存后，流程定义的版本会+1

**下载**

![SpringBoot集成Flowable](http://alist.ciberviler.top/d/ecloud180/images/blogImage/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBAQ29kZXJXYW5nQENoaW5h,size_20,color_FFFFFF,t_70,g_se,x_16-16587155160567.png)

# SpringBoot使用Flowable

## 基本用法

1、引入相关依赖



```xml
<!--web开发的起步依赖-->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>

<!-- jdbc -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-jdbc</artifactId>
</dependency>
<dependency>
    <groupId>mysql</groupId>
    <artifactId>mysql-connector-java</artifactId>
    <version>8.0.11</version>
</dependency>

<!-- flowable工作流 -->
<dependency>
    <groupId>org.flowable</groupId>
    <artifactId>flowable-spring-boot-starter</artifactId>
    <version>6.5.0</version>
</dependency>
<dependency>
    <groupId>org.flowable</groupId>
    <artifactId>flowable-json-converter</artifactId>
    <version>6.5.0</version>
</dependency>

<!-- test -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
</dependency>
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
    <scope>test</scope>
</dependency>

<!--fastjson-->
<dependency>
    <groupId>com.alibaba.fastjson2</groupId>
    <artifactId>fastjson2</artifactId>
    <version>2.0.1</version>
</dependency>折叠 
```

2、application.yml配置



```yaml
server:
  port: 9999

spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/flowable?serverTimezone=Asia/Shanghai&useUnicode=true&charcterEncoding=UTF-8&useSSL=false
    username: root
    password: root

flowable:
  #关闭定时任务JOB
  async-executor-activate: false
  #将databaseSchemaUpdate设置为true。当flowable发现库与数据库表结构不一致时，会自动将数据库表结构升级至新版本。
  database-schema-update: true
```

3、绘制BPMN流程图

这里用学生请假流程做例子，首先由学生发起请假申请，然后由老师进行审核，老师审核结束后进行判断：

- 如果请假天数大于2天，流转到校长处审核，然后流程结束。
- 如果请假天数不大于2天，流程结束。

部署流程需要一个.bpmn20.xml文件，可用手动编辑，也可以借助一些工具创建。



```xml
<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://www.flowable.org/processdef">
  <process id="StudentLeave" name="学生请假流程" isExecutable="true">
    <startEvent id="start" name="开始" flowable:formFieldValidation="true"></startEvent>
    <userTask id="apply" name="请假申请" flowable:assignee="${studentUser}" flowable:formFieldValidation="true">
      <extensionElements>
        <modeler:initiator-can-complete xmlns:modeler="http://flowable.org/modeler"><![CDATA[false]]></modeler:initiator-can-complete>
      </extensionElements>
    </userTask>
    <userTask id="teacherPass" name="老师审批" flowable:candidateGroups="teacher" flowable:formFieldValidation="true"></userTask>
    <exclusiveGateway id="judgeTask" name="判断是否大于2天"></exclusiveGateway>
    <endEvent id="end" name="结束"></endEvent>
    <userTask id="principalPass" name="校长审批" flowable:candidateGroups="principal" flowable:formFieldValidation="true"></userTask>
    <sequenceFlow id="principalCheck" name="通过" sourceRef="principalPass" targetRef="end">
      <conditionExpression xsi:type="tFormalExpression"><![CDATA[${outcome=='通过'}]]></conditionExpression>
    </sequenceFlow>
    <sequenceFlow id="principalNotPassFlow" name="驳回" sourceRef="principalPass" targetRef="apply">
      <conditionExpression xsi:type="tFormalExpression"><![CDATA[${outcome=='驳回'}]]></conditionExpression>
    </sequenceFlow>
    <sequenceFlow id="teacherPassFlow" name="通过" sourceRef="teacherPass" targetRef="judgeTask">
      <conditionExpression xsi:type="tFormalExpression"><![CDATA[${outcome=='通过'}]]></conditionExpression>
    </sequenceFlow>
    <sequenceFlow id="teacherNotPassFlow" name="驳回" sourceRef="teacherPass" targetRef="apply">
      <conditionExpression xsi:type="tFormalExpression"><![CDATA[${outcome=='驳回'}]]></conditionExpression>
    </sequenceFlow>
    <sequenceFlow id="startFlow" sourceRef="start" name="流程开始" targetRef="apply"></sequenceFlow>
    <sequenceFlow id="applyFlow" sourceRef="apply" name="申请流程" targetRef="teacherPass"></sequenceFlow>
    <sequenceFlow id="judgeLess" name="小于2天" sourceRef="judgeTask" targetRef="end">
      <conditionExpression xsi:type="tFormalExpression"><![CDATA[${day <= 2}]]></conditionExpression>
    </sequenceFlow>
    <sequenceFlow id="judgeMore" name="大于2天" sourceRef="judgeTask" targetRef="principalPass">
      <conditionExpression xsi:type="tFormalExpression"><![CDATA[${day > 2}]]></conditionExpression>
    </sequenceFlow>
  </process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_StudentLeave">
    <bpmndi:BPMNPlane bpmnElement="StudentLeave" id="BPMNPlane_StudentLeave">
      <bpmndi:BPMNShape bpmnElement="start" id="BPMNShape_start">
        <omgdc:Bounds height="30.0" width="30.0" x="100.0" y="163.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="apply" id="BPMNShape_apply">
        <omgdc:Bounds height="80.0" width="100.00000000000003" x="229.9708609547486" y="138.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="teacherPass" id="BPMNShape_teacherPass">
        <omgdc:Bounds height="80.0" width="99.99999999999994" x="436.9446358140222" y="138.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="judgeTask" id="BPMNShape_judgeTask">
        <omgdc:Bounds height="40.0" width="40.0" x="645.0" y="158.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="end" id="BPMNShape_end">
        <omgdc:Bounds height="28.0" width="28.0" x="795.0" y="164.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="principalPass" id="BPMNShape_principalPass">
        <omgdc:Bounds height="80.0" width="100.0" x="615.0" y="280.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge bpmnElement="judgeLess" id="BPMNEdge_judgeLess">
        <omgdi:waypoint x="684.5095911949685" y="178.43356643356645"></omgdi:waypoint>
        <omgdi:waypoint x="795.0000829380081" y="178.04860604497966"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="principalNotPassFlow" id="BPMNEdge_principalNotPassFlow">
        <omgdi:waypoint x="615.0" y="320.0"></omgdi:waypoint>
        <omgdi:waypoint x="279.9708609547486" y="320.0"></omgdi:waypoint>
        <omgdi:waypoint x="279.9708609547486" y="217.95000000000002"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="judgeMore" id="BPMNEdge_judgeMore">
        <omgdi:waypoint x="665.4326241134752" y="197.51043586109145"></omgdi:waypoint>
        <omgdi:waypoint x="665.1411660777385" y="280.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="teacherNotPassFlow" id="BPMNEdge_teacherNotPassFlow">
        <omgdi:waypoint x="486.9446358140222" y="138.0"></omgdi:waypoint>
        <omgdi:waypoint x="486.9446358140222" y="98.8874737106014"></omgdi:waypoint>
        <omgdi:waypoint x="279.9708609547486" y="98.8874737106014"></omgdi:waypoint>
        <omgdi:waypoint x="279.9708609547486" y="138.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="principalCheck" id="BPMNEdge_principalCheck">
        <omgdi:waypoint x="714.9499999999886" y="319.64664310954066"></omgdi:waypoint>
        <omgdi:waypoint x="806.5" y="319.0"></omgdi:waypoint>
        <omgdi:waypoint x="808.7518112709728" y="191.94785201600882"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="applyFlow" id="BPMNEdge_applyFlow">
        <omgdi:waypoint x="329.9208609546613" y="178.0"></omgdi:waypoint>
        <omgdi:waypoint x="436.9446358140222" y="178.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="teacherPassFlow" id="BPMNEdge_teacherPassFlow">
        <omgdi:waypoint x="536.8946358140222" y="178.0"></omgdi:waypoint>
        <omgdi:waypoint x="645.0" y="178.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="startFlow" id="BPMNEdge_startFlow">
        <omgdi:waypoint x="129.94999932842546" y="178.0"></omgdi:waypoint>
        <omgdi:waypoint x="229.970860954748" y="178.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>折叠 
```

![SpringBoot集成Flowable](http://alist.ciberviler.top/d/ecloud180/images/blogImage/2443180-20220509181200516-2065082021.png)

 

将xml保存为【学生请假流程.bpmn20.xml】，复制到项目【resources/processes】目录下（可以通过修改flowable.process-definition-location-prefix配置项默认值重新指定），如果没有processes文件夹就自己创建一个，Flowable会自动部署processes目录下的流程模型。启动项目后可以通过RepositoryService查询已经部署的模型，若查询结果不为空就代表模型部署成功了。（如果与flowable建模设计器用的都是同一个库，可以在flowable-admin管理平台进行部署流程）



```java
@Autowired
private RepositoryService repositoryService;
/**
     * 查询流程定义列表, 涉及到 act_re_procdef表，部署成功会新增记录
     */
@Test
public void testProcessDefinition() {
    List<ProcessDefinition> processList = repositoryService.createProcessDefinitionQuery().list();
    for(ProcessDefinition processDefinition : processList){
        log.info("ProcessDefinition name = {},deploymentId = {}", processDefinition.getName(), processDefinition.getDeploymentId());
    }
}
```

这里再贴上一个【员工请假流程】供测试使用：



```xml
<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:flowable="http://flowable.org/bpmn" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" typeLanguage="http://www.w3.org/2001/XMLSchema" expressionLanguage="http://www.w3.org/1999/XPath" targetNamespace="http://www.flowable.org/processdef">
  <process id="holidayRequest" name="Holiday Request" isExecutable="true">
    <startEvent id="startEvent"></startEvent>
    <sequenceFlow id="sequenceFlow-3fa7af74-df9a-4d3a-b0eb-10b20e7dc202" sourceRef="startEvent" targetRef="approveTask"></sequenceFlow>
    <userTask id="approveTask" name="经理通过或驳回申请"></userTask>
    <sequenceFlow id="sequenceFlow-d9127dc0-158f-4169-b61b-99226ffe8494" sourceRef="approveTask" targetRef="decision"></sequenceFlow>
    <exclusiveGateway id="decision"></exclusiveGateway>
    <serviceTask id="externalSystemCall" name="系统记录申请天数" flowable:class="org.flowable.CallExternalSystemDelegate"></serviceTask>
    <sequenceFlow id="sequenceFlow-6232f578-3975-4d7e-81f2-43b242d33ebd" sourceRef="externalSystemCall" targetRef="holidayApprovedTask"></sequenceFlow>
    <userTask id="holidayApprovedTask" name="员工查看申请通过"></userTask>
    <sequenceFlow id="sequenceFlow-29fd3375-9bcb-42f2-bb6f-63ae1f98813a" sourceRef="holidayApprovedTask" targetRef="approveEnd"></sequenceFlow>
    <serviceTask id="sendRejectionMail" name="发送驳回邮件" flowable:class="org.flowable.SendRejectionMail"></serviceTask>
    <sequenceFlow id="sequenceFlow-b390b442-2411-44a9-96eb-3c129d4c8408" sourceRef="sendRejectionMail" targetRef="rejectEnd"></sequenceFlow>
    <endEvent id="approveEnd"></endEvent>
    <endEvent id="rejectEnd"></endEvent>
    <sequenceFlow id="sequenceFlow-6f21d3e2-2e49-4b00-9aae-0b71d861a177" name="驳回" sourceRef="decision" targetRef="sendRejectionMail">
      <conditionExpression xsi:type="tFormalExpression"><![CDATA[${!approved}]]></conditionExpression>
    </sequenceFlow>
    <sequenceFlow id="sequenceFlow-2470619b-fa36-440b-a231-b7bd226c23bb" name="通过" sourceRef="decision" targetRef="externalSystemCall">
      <conditionExpression xsi:type="tFormalExpression"><![CDATA[${approved}]]></conditionExpression>
    </sequenceFlow>
  </process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_holidayRequest">
    <bpmndi:BPMNPlane bpmnElement="holidayRequest" id="BPMNPlane_holidayRequest">
      <bpmndi:BPMNShape bpmnElement="startEvent" id="BPMNShape_startEvent">
        <omgdc:Bounds height="30.0" width="30.0" x="0.0" y="95.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="approveTask" id="BPMNShape_approveTask">
        <omgdc:Bounds height="60.0" width="100.0" x="80.0" y="80.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="decision" id="BPMNShape_decision">
        <omgdc:Bounds height="40.0" width="40.0" x="230.0" y="90.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="externalSystemCall" id="BPMNShape_externalSystemCall">
        <omgdc:Bounds height="60.0" width="100.0" x="320.0" y="1.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="holidayApprovedTask" id="BPMNShape_holidayApprovedTask">
        <omgdc:Bounds height="60.0" width="100.0" x="470.0" y="1.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="sendRejectionMail" id="BPMNShape_sendRejectionMail">
        <omgdc:Bounds height="60.0" width="100.0" x="320.0" y="160.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="approveEnd" id="BPMNShape_approveEnd">
        <omgdc:Bounds height="28.0" width="28.0" x="620.0" y="16.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape bpmnElement="rejectEnd" id="BPMNShape_rejectEnd">
        <omgdc:Bounds height="28.0" width="28.0" x="505.0" y="175.0"></omgdc:Bounds>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge bpmnElement="sequenceFlow-2470619b-fa36-440b-a231-b7bd226c23bb" id="BPMNEdge_sequenceFlow-2470619b-fa36-440b-a231-b7bd226c23bb">
        <omgdi:waypoint x="250.0" y="90.0"></omgdi:waypoint>
        <omgdi:waypoint x="250.0" y="31.0"></omgdi:waypoint>
        <omgdi:waypoint x="319.99999999999284" y="31.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sequenceFlow-3fa7af74-df9a-4d3a-b0eb-10b20e7dc202" id="BPMNEdge_sequenceFlow-3fa7af74-df9a-4d3a-b0eb-10b20e7dc202">
        <omgdi:waypoint x="29.949998618355412" y="110.0"></omgdi:waypoint>
        <omgdi:waypoint x="80.0" y="110.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sequenceFlow-6232f578-3975-4d7e-81f2-43b242d33ebd" id="BPMNEdge_sequenceFlow-6232f578-3975-4d7e-81f2-43b242d33ebd">
        <omgdi:waypoint x="419.95000000000005" y="31.0"></omgdi:waypoint>
        <omgdi:waypoint x="470.0" y="31.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sequenceFlow-b390b442-2411-44a9-96eb-3c129d4c8408" id="BPMNEdge_sequenceFlow-b390b442-2411-44a9-96eb-3c129d4c8408">
        <omgdi:waypoint x="419.949999999997" y="189.66442953020135"></omgdi:waypoint>
        <omgdi:waypoint x="505.00030595247523" y="189.0936221647077"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sequenceFlow-d9127dc0-158f-4169-b61b-99226ffe8494" id="BPMNEdge_sequenceFlow-d9127dc0-158f-4169-b61b-99226ffe8494">
        <omgdi:waypoint x="179.9499999999898" y="110.0"></omgdi:waypoint>
        <omgdi:waypoint x="230.0" y="110.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sequenceFlow-29fd3375-9bcb-42f2-bb6f-63ae1f98813a" id="BPMNEdge_sequenceFlow-29fd3375-9bcb-42f2-bb6f-63ae1f98813a">
        <omgdi:waypoint x="569.9499999999988" y="31.0"></omgdi:waypoint>
        <omgdi:waypoint x="582.0" y="31.0"></omgdi:waypoint>
        <omgdi:waypoint x="582.0" y="31.0"></omgdi:waypoint>
        <omgdi:waypoint x="620.0025321198765" y="30.268220825690175"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge bpmnElement="sequenceFlow-6f21d3e2-2e49-4b00-9aae-0b71d861a177" id="BPMNEdge_sequenceFlow-6f21d3e2-2e49-4b00-9aae-0b71d861a177">
        <omgdi:waypoint x="250.0" y="129.9375468164794"></omgdi:waypoint>
        <omgdi:waypoint x="250.0" y="190.0"></omgdi:waypoint>
        <omgdi:waypoint x="319.99999999997794" y="190.0"></omgdi:waypoint>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>折叠 
```

3、测试流程



```java
@Autowired
private RuntimeService runtimeService;

@Autowired
private TaskService taskService;

@Autowired
private HistoryService historyService;

@Test
public void testFlow() {
    // 发起请假
    Map<String, Object> map = new HashMap<>();
    map.put("day", 2);
    map.put("studentUser", "小明");
    ProcessInstance studentLeave = runtimeService.startProcessInstanceByKey("StudentLeave", map);
    Task task = taskService.createTaskQuery().processInstanceId(studentLeave.getId()).singleResult();
    taskService.complete(task.getId());

    // 老师审批
    List<Task> teacherTaskList = taskService.createTaskQuery().taskCandidateGroup("teacher").list();
    Map<String, Object> teacherMap = new HashMap<>();
    teacherMap.put("outcome", "通过");
    for (Task teacherTask : teacherTaskList) {
        taskService.complete(teacherTask.getId(), teacherMap);
    }

    // 校长审批
    List<Task> principalTaskList = taskService.createTaskQuery().taskCandidateGroup("principal").list();
    Map<String, Object> principalMap = new HashMap<>();
    principalMap.put("outcome", "通过");
    for (Task principalTask : principalTaskList) {
        taskService.complete(principalTask.getId(), principalMap);
    }

    // 查看历史
    List<HistoricActivityInstance> activities = historyService.createHistoricActivityInstanceQuery()
        .processInstanceId(studentLeave.getId())
        .finished()
        .orderByHistoricActivityInstanceEndTime().asc()
        .list();
    for (HistoricActivityInstance activity : activities) {
        System.out.println(activity.getActivityName());
    }
}折叠 
```

打印结果：



```plaintext
开始
流程开始
请假申请
申请流程
老师审批
通过
判断是否大于2天
小于2天
结束
```

将请假日期day改为5，打印结果：



```plaintext
开始
流程开始
请假申请
申请流程
老师审批
通过
判断是否大于2天
大于2天
校长审批
通过
结束
```

## Flowable常用配置项



```properties
# ===================================================================
# Common Flowable Spring Boot Properties
# 通用Flowable Spring Boot参数
#
# This sample file is provided as a guideline. Do NOT copy it in its
# entirety to your own application.	           ^^^
# 本示例文件只作为指导。请不要直接拷贝至你自己的应用中。
# ===================================================================

# Core (Process) FlowableProperties
# 核心（流程）
flowable.check-process-definitions=true # 是否需要自动部署流程定义。
flowable.custom-mybatis-mappers= # 需要添加至引擎的自定义Mybatis映射的FQN。
flowable.custom-mybatis-x-m-l-mappers= # 需要添加至引擎的自定义Mybatis XML映射的路径。
flowable.database-schema= # 如果数据库返回的元数据不正确，可以在这里设置schema用于检测/生成表。
flowable.database-schema-update=true # 数据库schema更新策略。
flowable.db-history-used=true # 是否要使用db历史。
flowable.deployment-name=SpringBootAutoDeployment # 自动部署的名称。
flowable.history-level= # 要使用的历史级别。
flowable.process-definition-location-prefix=classpath*:/processes/ # 自动部署时查找流程的目录。
flowable.process-definition-location-suffixes=**.bpmn20.xml,**.bpmn # 'processDefinitionLocationPrefix'路径下需要部署的文件的后缀（扩展名）。

# Process FlowableProcessProperties
# 流程
flowable.process.definition-cache-limit=-1 # 流程定义缓存中保存流程定义的最大数量。默认值为-1（缓存所有流程定义）。
flowable.process.enable-safe-xml=true # 在解析BPMN XML文件时进行额外检查。参见 https://www.flowable.org/docs/userguide/index.html#advanced.safe.bpmn.xml 。不幸的是，部分平台（JDK 6，JBoss）上无法使用这个功能，因此如果你所用的平台在XML解析时不支持StaxSource，需要禁用这个功能。
flowable.process.servlet.load-on-startup=-1 # 启动时加载Process servlet。
flowable.process.servlet.name=Flowable BPMN Rest API # Process servlet的名字。
flowable.process.servlet.path=/process-api # Process servelet的context path。

# Process Async Executor
# 流程异步执行器
flowable.process.async-executor-activate=true # 是否启用异步执行器。
flowable.process.async.executor.async-job-lock-time-in-millis=300000 # 异步作业在被异步执行器取走后的锁定时间（以毫秒计）。在这段时间内，其它异步执行器不会尝试获取及锁定这个任务。
flowable.process.async.executor.default-async-job-acquire-wait-time-in-millis=10000 # 异步作业获取线程在进行下次获取查询前的等待时间（以毫秒计）。只在当次没有取到新的异步作业，或者只取到很少的异步作业时生效。默认值 = 10秒。
flowable.process.async.executor.default-queue-size-full-wait-time-in-millis=0 # 异步作业（包括定时器作业与异步执行）获取线程在队列满时，等待执行下次查询的等待时间（以毫秒计）。默认值为0（以向后兼容）
flowable.process.async.executor.default-timer-job-acquire-wait-time-in-millis=10000 # 定时器作业获取线程在进行下次获取查询前的等待时间（以毫秒计）。只在当次没有取到新的定时器作业，或者只取到很少的定时器作业时生效。默认值 = 10秒。
flowable.process.async.executor.max-async-jobs-due-per-acquisition=1 # （译者补）单次查询的异步作业数量。默认值为1，以降低乐观锁异常的可能性。除非你知道自己在做什么，否则请不要修改这个值。
flowable.process.async.executor.retry-wait-time-in-millis=500 # ???（译者补不了了）
flowable.process.async.executor.timer-lock-time-in-millis=300000 # 定时器作业在被异步执行器取走后的锁定时间（以毫秒计）。在这段时间内，其它异步执行器不会尝试获取及锁定这个任务。


# CMMN FlowableCmmnProperties
flowable.cmmn.deploy-resources=true # 是否部署资源。默认值为'true'。
flowable.cmmn.deployment-name=SpringBootAutoDeployment # CMMN资源部署的名字。
flowable.cmmn.enable-safe-xml=true # 在解析CMMN XML文件时进行额外检查。参见 https://www.flowable.org/docs/userguide/index.html#advanced.safe.bpmn.xml 。不幸的是，部分平台（JDK 6，JBoss）上无法使用这个功能，因此如果你所用的平台在XML解析时不支持StaxSource，需要禁用这个功能。
flowable.cmmn.enabled=true # 是否启用CMMN引擎。
flowable.cmmn.resource-location=classpath*:/cases/ # CMMN资源的路径。
flowable.cmmn.resource-suffixes=**.cmmn,**.cmmn11,**.cmmn.xml,**.cmmn11.xml # 需要扫描的资源后缀名。
flowable.cmmn.servlet.load-on-startup=-1 # 启动时加载CMMN servlet。
flowable.cmmn.servlet.name=Flowable CMMN Rest API # CMMN servlet的名字。
flowable.cmmn.servlet.path=/cmmn-api # CMMN servlet的context path。

# CMMN Async Executor
# CMMN异步执行器
flowable.cmmn.async-executor-activate=true # 是否启用异步执行器。
flowable.cmmn.async.executor.async-job-lock-time-in-millis=300000 # 异步作业在被异步执行器取走后的锁定时间（以毫秒计）。在这段时间内，其它异步执行器不会尝试获取及锁定这个任务。
flowable.cmmn.async.executor.default-async-job-acquire-wait-time-in-millis=10000 # 异步作业获取线程在进行下次获取查询前的等待时间（以毫秒计）。只在当次没有取到新的异步作业，或者只取到很少的异步作业时生效。默认值 = 10秒。
flowable.cmmn.async.executor.default-queue-size-full-wait-time-in-millis=0 # 异步作业（包括定时器作业与异步执行）获取线程在队列满时，等待执行下次查询的等待时间（以毫秒计）。默认值为0（以向后兼容）
flowable.cmmn.async.executor.default-timer-job-acquire-wait-time-in-millis=1000 # 定时器作业获取线程在进行下次获取查询前的等待时间（以毫秒计）。只在当次没有取到新的定时器作业，或者只取到很少的定时器作业时生效。默认值 = 10秒。
flowable.cmmn.async.executor.max-async-jobs-due-per-acquisition=1 # （译者补）单次查询的异步作业数量。默认值为1，以降低乐观锁异常的可能性。除非你知道自己在做什么，否则请不要修改这个值。
flowable.cmmn.async.executor.retry-wait-time-in-millis=500 #（译者补不了了）
flowable.cmmn.async.executor.timer-lock-time-in-millis=300000 # 定时器作业在被异步执行器取走后的锁定时间（以毫秒计）。在这段时间内，其它异步执行器不会尝试获取及锁定这个任务。

# Content FlowableContentProperties
flowable.content.enabled=true # 是否启动Content引擎。
flowable.content.servlet.load-on-startup=-1 # 启动时加载Content servlet。
flowable.content.servlet.name=Flowable Content Rest API # Content servlet的名字。
flowable.content.servlet.path=/content-api # Content servlet的context path。
flowable.content.storage.create-root=true # 如果根路径不存在，是否需要创建？
flowable.content.storage.root-folder= # 存储content文件（如上传的任务附件，或表单文件）的根路径。

# DMN FlowableDmnProperties
flowable.dmn.deploy-resources=true # 是否部署资源。默认为'true'。
flowable.dmn.deployment-name=SpringBootAutoDeployment # DMN资源部署的名字。
flowable.dmn.enable-safe-xml=true # 在解析DMN XML文件时进行额外检查。参见 https://www.flowable.org/docs/userguide/index.html#advanced.safe.bpmn.xml 。不幸的是，部分平台（JDK 6，JBoss）上无法使用这个功能，因此如果你所用的平台在XML解析时不支持StaxSource，需要禁用这个功能。
flowable.dmn.enabled=true # 是否启用DMN引擎。
flowable.dmn.history-enabled=true # 是否启用DMN引擎的历史。
flowable.dmn.resource-location=classpath*:/dmn/ # DMN资源的路径。
flowable.dmn.resource-suffixes=**.dmn,**.dmn.xml,**.dmn11,**.dmn11.xml # 需要扫描的资源后缀名。
flowable.dmn.servlet.load-on-startup=-1 # 启动时加载DMN servlet。
flowable.dmn.servlet.name=Flowable DMN Rest API # DMN servlet的名字。
flowable.dmn.servlet.path=/dmn-api # DMN servlet的context path。
flowable.dmn.strict-mode=true # 如果希望避免抉择表命中策略检查导致失败，可以将本参数设置为false。如果检查发现了错误，会直接返回错误前一刻的中间结果。

# Form FlowableFormProperties
flowable.form.deploy-resources=true # 是否部署资源。默认为'true'。
flowable.form.deployment-name=SpringBootAutoDeployment # Form资源部署的名字。
flowable.form.enabled=true # 是否启用Form引擎。
flowable.form.resource-location=classpath*:/forms/ # Form资源的路径。
flowable.form.resource-suffixes=**.form # 需要扫描的资源后缀名。
flowable.form.servlet.load-on-startup=-1 # 启动时加载Form servlet。
flowable.form.servlet.name=Flowable Form Rest API # Form servlet的名字。
flowable.form.servlet.path=/form-api # Form servlet的context path。

# IDM FlowableIdmProperties
flowable.idm.enabled=true # 是否启用IDM引擎。
flowable.idm.password-encoder= # 使用的密码编码类型。
flowable.idm.servlet.load-on-startup=-1 # 启动时加载IDM servlet。
flowable.idm.servlet.name=Flowable IDM Rest API # IDM servlet的名字。
flowable.idm.servlet.path=/idm-api # IDM servlet的context path。

# IDM Ldap FlowableLdapProperties
flowable.idm.ldap.attribute.email= # 用户email的属性名。
flowable.idm.ldap.attribute.first-name= # 用户名字的属性名。
flowable.idm.ldap.attribute.group-id= # 用户组ID的属性名。
flowable.idm.ldap.attribute.group-name= # 用户组名的属性名。
flowable.idm.ldap.attribute.group-type= # 用户组类型的属性名。
flowable.idm.ldap.attribute.last-name= # 用户姓的属性名。
flowable.idm.ldap.attribute.user-id= # 用户ID的属性名。
flowable.idm.ldap.base-dn= # 查找用户与组的DN（标志名称 distinguished name）。
flowable.idm.ldap.cache.group-size=-1 # 设置{@link org.flowable.ldap.LDAPGroupCache}的大小。这是LRU缓存，用于缓存用户及组，以避免每次都查询LDAP系统。
flowable.idm.ldap.custom-connection-parameters= # 用于设置所有没有专用setter的LDAP连接参数。查看 http://docs.oracle.com/javase/tutorial/jndi/ldap/jndi.html 介绍的自定义参数。参数包括配置链接池，安全设置，等等。
flowable.idm.ldap.enabled=false # 是否启用LDAP IDM 服务。
flowable.idm.ldap.group-base-dn= # 组查找的DN。
flowable.idm.ldap.initial-context-factory=com.sun.jndi.ldap.LdapCtxFactory # 初始化上下文工厂的类名。
flowable.idm.ldap.password= # 连接LDAP系统的密码。
flowable.idm.ldap.port=-1 # LDAP系统的端口。
flowable.idm.ldap.query.all-groups= # 查询所有组所用的语句。
flowable.idm.ldap.query.all-users= # 查询所有用户所用的语句。
flowable.idm.ldap.query.groups-for-user= # 按照指定用户查询所属组所用的语句
flowable.idm.ldap.query.user-by-full-name-like= # 按照给定全名查找用户所用的语句。
flowable.idm.ldap.query.user-by-id= # 按照userId查找用户所用的语句。
flowable.idm.ldap.search-time-limit=0 # 查询LDAP的超时时间（以毫秒计）。默认值为'0'，即“一直等待”。
flowable.idm.ldap.security-authentication=simple # 连接LDAP系统所用的'java.naming.security.authentication'参数的值。
flowable.idm.ldap.server= # LDAP系统的主机名。如'ldap://localhost'。
flowable.idm.ldap.user= # 连接LDAP系统的用户ID。
flowable.idm.ldap.user-base-dn= # 查找用户的DN。

# Flowable Mail FlowableMailProperties
flowable.mail.server.default-from=flowable@localhost # 发送邮件时使用的默认发信人地址。
flowable.mail.server.host=localhost # 邮件服务器。
flowable.mail.server.password= # 邮件服务器的登录密码。
flowable.mail.server.port=1025 # 邮件服务器的端口号。
flowable.mail.server.use-ssl=false # 是否使用SSL/TLS加密SMTP传输连接（即SMTPS/POPS)。
flowable.mail.server.use-tls=false # 使用或禁用STARTTLS加密。
flowable.mail.server.username= # 邮件服务器的登录用户名。如果为空，则不需要登录。

# Actuator
management.endpoint.flowable.cache.time-to-live=0ms # 缓存响应的最大时间。
management.endpoint.flowable.enabled=true # 是否启用flowable端点。折叠 
```

# Flowable 常用API

Flowable整体是通过ProcessEngine来操作的。即不管什么框架操作流程，都需要通过ProcessEngine这个类来处理。ProcessEngine是Flowable对外公开的门面。

类图如下：

![SpringBoot集成Flowable](http://alist.ciberviler.top/d/ecloud180/images/blogImage/170fc025f13b64dftplv-t2oaga2asx-zoom-in-crop-mark1304000.webp)

关系图如下：

![SpringBoot集成Flowable](http://alist.ciberviler.top/d/ecloud180/images/blogImage/170fc02e3be42183tplv-t2oaga2asx-zoom-in-crop-mark1304000.webp)

## FormService

表单数据的管理。



```java
formService.getStartFormKey()  获取表单key
formService.getRenderedStartForm()查询表单json（无数据）
```

## RepositoryService

提供了在编辑和发布审批流程的 api。主要是模型管理和流程定义的业务 api。



```java
1.提供了带条件的查询模型流程定义的api
repositoryService.createXXXQuery()
例如：
repositoryService.createModelQuery().list() 模型查询 
repositoryService.createProcessDefinitionQuery().list() 流程定义查询

repositoryService.createXXXXQuery().XXXKey(XXX) （查询该key是否存在）

2.提供一大波模型与流程定义的通用方法
模型相关（【本人亲测这里获取模型貌似不行，有知道的联系我】）
repositoryService.getModel()  （获取模型）
repositoryService.saveModel()  （保存模型）
repositoryService.deleteModel() （删除模型）
repositoryService.createDeployment().deploy(); （部署模型）
repositoryService.getModelEditorSource()  （获得模型JSON数据的UTF8字符串）
repositoryService.getModelEditorSourceExtra()  （获取PNG格式图像）

3.流程定义相关
repositoryService.getProcessDefinition(ProcessDefinitionId);  获取流程定义具体信息
repositoryService.activateProcessDefinitionById() 激活流程定义
repositoryService.suspendProcessDefinitionById()  挂起流程定义
repositoryService.deleteDeployment()  删除流程定义
repositoryService.getProcessDiagram()获取流程定义图片流
repositoryService.getResourceAsStream()获取流程定义xml流
repositoryService.getBpmnModel(pde.getId()) 获取bpmn对象（当前进行到的那个节点的流程图使用）

4.流程定义授权相关
repositoryService.getIdentityLinksForProcessDefinition() 流程定义授权列表
repositoryService.addCandidateStarterGroup()新增组流程授权
repositoryService.addCandidateStarterUser()新增用户流程授权
repositoryService.deleteCandidateStarterGroup() 删除组流程授权
repositoryService.deleteCandidateStarterUser()  删除用户流程授权
```

## RuntimeService

处理正在运行的流程。



```java
runtimeService.createProcessInstanceBuilder().start() 发起流程
runtimeService.deleteProcessInstance() 删除正在运行的流程
runtimeService.suspendProcessInstanceById() 挂起流程定义
runtimeService.activateProcessInstanceById() 激活流程实例
runtimeService.getVariables(processInstanceId); 获取表单中填写的值
runtimeService.getActiveActivityIds(processInstanceId)获取以进行的流程图节点 （当前进行到的那个节点的流程图使用）

runtimeService.createChangeActivityStateBuilder().moveExecutionsToSingleActivityId(executionIds, endId).changeState(); 终止流程
```

## HistoryService

在用户发起审批后，会生成流程实例。historyService 为处理流程实例的 api，但是其中包括了已经完成的和未完成的流程实例。



```java
historyService.createHistoricProcessInstanceQuery().list() 查询流程实例列表（历史流程,包括未完成的）
historyService.createHistoricProcessInstanceQuery().list().foreach().getValue() 可以获取历史中表单的信息
historyService.createHistoricProcessInstanceQuery().processInstanceId(processInstanceId).singleResult(); 根绝id查询流程实例
historyService.deleteHistoricProcessInstance() 删除历史流程
historyService.deleteHistoricTaskInstance(taskid); 删除任务实例
historyService.createHistoricActivityInstanceQuery().processInstanceId(processInstanceId).list()  流程实例节点列表 （当前进行到的那个节点的流程图使用）
```

> 如果处理正在运行的流程实例，请使用 RuntimeService。 

## TaskService

对流程实例的各个节点的审批处理。



```java
流转的节点审批
taskService.createTaskQuery().list() 待办任务列表
taskService.createTaskQuery().taskId(taskId).singleResult();  待办任务详情
taskService.saveTask(task); 修改任务
taskService.setAssignee() 设置审批人
taskService.addComment() 设置审批备注
taskService.complete() 完成当前审批
taskService.getProcessInstanceComments(processInstanceId); 查看任务详情（也就是都经过哪些人的审批，意见是什么）
taskService.delegateTask(taskId, delegater); 委派任务
taskService.claim(taskId, userId);认领任务
taskService.unclaim(taskId); 取消认领
taskService.complete(taskId, completeVariables); 完成任务

任务授权
taskService.addGroupIdentityLink()新增组任务授权
taskService.addUserIdentityLink() 新增人员任务授权
taskService.deleteGroupIdentityLink() 删除组任务授权
taskService.deleteUserIdentityLink() 删除人员任务授权
```

## ManagementService

主要是执行自定义命令。



```java
managementService.executeCommand(new classA())  执行classA的内部方法，classA要实现Command，重写execute方法
```

在自定义的方法中可以使用以下方法获取 repositoryService。



```java
ProcessEngineConfiguration processEngineConfiguration =
            CommandContextUtil.getProcessEngineConfiguration(commandContext);
RepositoryService repositoryService = processEngineConfiguration.getRepositoryService();
```

也可以获取流程定义方法集合 。



```java
ProcessEngineConfigurationImpl processEngineConfiguration =
            CommandContextUtil.getProcessEngineConfiguration(commandContext);
        ProcessDefinitionEntityManager processDefinitionEntityManager =
            processEngineConfiguration.getProcessDefinitionEntityManager();
如findById/findLatestProcessDefinitionByKey/findLatestProcessDefinitionByKeyAndTenantId等。
```

## IdentityService

用于身份信息获取和保存，这里主要是获取身份信息。



```java
identityService.createUserQuery().userId(userId).singleResult();  获取审批用户的具体信息
identityService.createGroupQuery().groupId(groupId).singleResult(); 获取审批组的具体信息
```

 