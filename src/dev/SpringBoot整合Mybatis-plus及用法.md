---
author: xlc520
title: SpringBoot整合Mybatis-plus及用法
description: 
date: 2022-07-01
category: Java
tag: 
- Java
- SpringBoot
- Mybatis-plus
article: true
timeline: true
icon: java
---

# SpringBoot整合Mybatis-plus及用法

## 一、mybatis-plus简介：

Mybatis-Plus（简称MP）是一个 Mybatis 的增强工具，在 Mybatis
的基础上只做增强不做改变，为简化开发、提高效率而生。这是官方给的定义，关于mybatis-plus的更多介绍及特性，可以参考mybatis-plus官网。那么它是怎么增强的呢？其实就是它已经封装好了一些crud方法，我们不需要再写xml了，直接调用这些方法就行，就类似于JPA。并且3.X系列支持lambda语法,让我在写条件构造的时候少了很多的"
魔法值",从代码结构上更简洁了.

## 二、springboot整合mybatis-plus案例

pom.xml配置

```xml
<dependencies>
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter</artifactId>
    </dependency>
    <!--springboot程序测试依赖，如果是自动创建项目默认添加-->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-test</artifactId>
      <scope>test</scope>
    </dependency>
    <dependency>
      <groupId>org.projectlombok</groupId>
      <artifactId>lombok</artifactId>
      <version>1.16.10</version>
      <scope>provided</scope>
    </dependency>
    <!-- 包含spirng Mvc ,tomcat的包包含requestMapping restController 等注解 -->
    <dependency>
      <groupId>org.springframework.boot</groupId>
      <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
    <dependency>
      <groupId>com.alibaba</groupId>
      <artifactId>druid-spring-boot-starter</artifactId>
      <version>1.1.10</version>
    </dependency>
    <dependency>
      <groupId>mysql</groupId>
      <artifactId>mysql-connector-java</artifactId>
    </dependency>
    <!-- druid依赖 -->
    <dependency>
      <groupId>com.alibaba</groupId>
      <artifactId>druid</artifactId>
      <version>1.1.0</version>
    </dependency>
    <!-- mybatisPlus 核心库 -->
    <dependency>
      <groupId>com.baomidou</groupId>
      <artifactId>mybatis-plus-boot-starter</artifactId>
      <version>3.1.0</version>
    </dependency>
  </dependencies>
```

application.yml配置

```yaml
server:
  port: 10100   #  配置启动端口号
 
mybatis:
  config-location: classpath:mybatis.cfg.xml    #  mybatis主配置文件所在路径
  type-aliases-package: com.demo.drools.entity  #  定义所有操作类的别名所在包
  mapper-locations:                                     #  所有的mapper映射文件
    - classpath:mapper/*.xml
 
 
spring: #springboot的配置
  datasource: #定义数据源
    #127.0.0.1为本机测试的ip，3306是mysql的端口号。serverTimezone是定义时区，照抄就好，mysql高版本需要定义这些东西
    #useSSL也是某些高版本mysql需要问有没有用SSL连接
    url: jdbc:mysql://127.0.0.1:3306/test?serverTimezone=GMT%2B8&useSSL=FALSE
    username: root  #数据库用户名，root为管理员
    password: 123456 #该数据库用户的密码
    # 使用druid数据源
    type: com.alibaba.druid.pool.DruidDataSource
 
# mybatis-plus相关配置
mybatis-plus:
  # xml扫描，多个目录用逗号或者分号分隔（告诉 Mapper 所对应的 XML 文件位置）
  mapper-locations: classpath:mapper/*.xml
  # 以下配置均有默认值,可以不设置
  global-config:
    db-config:
      #主键类型 AUTO:"数据库ID自增" INPUT:"用户输入ID",ID_WORKER:"全局唯一ID (数字类型唯一ID)", UUID:"全局唯一ID UUID";
      id-type: auto
      #字段策略 IGNORED:"忽略判断"  NOT_NULL:"非 NULL 判断")  NOT_EMPTY:"非空判断"
      field-strategy: NOT_EMPTY
      #数据库类型
      db-type: MYSQL
  configuration:
    # 是否开启自动驼峰命名规则映射:从数据库列名到Java属性驼峰命名的类似映射
    map-underscore-to-camel-case: true
    # 如果查询结果中包含空值的列，则 MyBatis 在映射的时候，不会映射这个字段
    call-setters-on-nulls: true
    # 这个配置会将执行的sql打印出来，在开发或测试的时候可以用
    log-impl: org.apache.ibatis.logging.stdout.StdOutImpl
```

用户信息实体

```java
 
package com.demo.drools.entity;
 
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
 
/**
 * TODO your comment
 *
 * @author xlc
 * @date 2022/6/20 19:14
 */
@Data
@TableName("user_info")//@TableName中的值对应着表名
public class UserInfoEntity {
    /**
     * 主键
     * @TableId中可以决定主键的类型,不写会采取默认值,默认值可以在yml中配置
     * AUTO: 数据库ID自增
     * INPUT: 用户输入ID
     * ID_WORKER: 全局唯一ID，Long类型的主键
     * ID_WORKER_STR: 字符串全局唯一ID
     * UUID: 全局唯一ID，UUID类型的主键
     * NONE: 该类型为未设置主键类型
     */
    @TableId(type = IdType.AUTO)
    private Long id;
    /**
     * 姓名
     */
    private String name;
    /**
     * 年龄
     */
    private Integer age;
    /**
     * 技能
     */
    private String skill;
    /**
     * 评价
     */
    private String evaluate;
    /**
     * 分数
     */
    private Long fraction;
}
```

config类-1(推荐)

```java
package com.xlc.springmybatisdemo.config;

import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.extension.plugins.MybatisPlusInterceptor;
import com.baomidou.mybatisplus.extension.plugins.inner.BlockAttackInnerInterceptor;
import com.baomidou.mybatisplus.extension.plugins.inner.OptimisticLockerInnerInterceptor;
import com.baomidou.mybatisplus.extension.plugins.inner.PaginationInnerInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * @author xlc
 * @createTime 2022/6/20 14:39
 * @description
 * @Version 1.0
 */
@Configuration
public class MybatisPlusConfig {

    /**
     * 新的分页插件,一缓和二缓遵循mybatis的规则,需要设置 MybatisConfiguration#useDeprecatedExecutor = false 避免缓存出现问题(该属性会在旧插件移除后一同移除)
     */
    @Bean
    public MybatisPlusInterceptor mybatisPlusInterceptor() {
        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
        // 分页插件
        interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.MYSQL));
        // 乐观锁插件
        interceptor.addInnerInterceptor(new OptimisticLockerInnerInterceptor());
        // 防全表更新与删除插件
        interceptor.addInnerInterceptor(new BlockAttackInnerInterceptor());
        return interceptor;
    }

}
```

config类-2

```java
 
package com.demo.drools.config;
 
import com.baomidou.mybatisplus.extension.plugins.PaginationInterceptor;
import com.baomidou.mybatisplus.extension.plugins.PerformanceInterceptor;
import org.springframework.context.annotation.Bean;
 
/**
 * TODO your comment
 *
 * @author xlc
 * @date 2022/6/20 19:14
 */
public class MybatisPlusConfig {
    /**
     * mybatis-plus SQL执行效率插件【生产环境可以关闭】
     */
    @Bean
    public PerformanceInterceptor performanceInterceptor() {
        return new PerformanceInterceptor();
    }
    /**
     * 分页插件
     */
    @Bean
    public PaginationInterceptor paginationInterceptor() {
        return new PaginationInterceptor();
    }
}
```

spring boot启动类

```java
package com.demo.drools;
 
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
 
/**
 * @author 于嘉琪
 */
@SpringBootApplication
//@MapperScan和dao层添加@Mapper注解意思一样
@MapperScan(basePackages = "com.demo.drools.dao")
public class DroolsApplication {
    public static void main(String[] args) {
        SpringApplication.run(DroolsApplication.class, args);
    }
}
```

dao层

```java
 
package com.demo.drools.dao;
 
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.demo.drools.entity.UserInfoEntity;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
 
/**
 * 用户信息DAO
 *
 * @author xlc
 * @date 2022/6/20 19:16
 */
@Mapper
public interface UserInfoDao extends BaseMapper<UserInfoEntity> {
   
}
```

service层

```java
 
package com.demo.drools.service;
 
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.IService;
import com.demo.drools.entity.UserInfoEntity;
 
/**
 * TODO your comment
 *
 * @author xlc
 * @date 2022/6/20 19:17
 */
public interface UserInfoService extends IService<UserInfoEntity> {
    
}
```

serviceImpl实现类层

```java
 
package com.demo.drools.service.impl;
 
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.demo.drools.dao.UserInfoDao;
import com.demo.drools.entity.UserInfoEntity;
import com.demo.drools.service.UserInfoService;
import org.springframework.stereotype.Service;
 
import javax.annotation.Resource;
 
/**
 * TODO your comment
 *
 * @author xlc
 * @date 2022/6/20 19:18
 */
@Service
public class UserInfoSerivceImpl extends ServiceImpl<UserInfoDao, UserInfoEntity> implements UserInfoService {
    
}
```

controller控制层

```java
 
package com.demo.drools.controller;
 
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.demo.drools.entity.UserInfoEntity;
import com.demo.drools.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
 
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
 
/**
 * TODO your comment
 *
 * @author xlc
 * @date 2022/6/20 19:20
 */
@RestController
@RequestMapping("/userInfo")
public class UserInfoController {
    @Autowired
    private UserInfoService userInfoService;
    
    /**
     * 根据ID获取用户信息
     * @author xlc
     * @CreateTime 2022/20 16:34
     * @Param  userId  用户ID
     * @Return UserInfoEntity 用户实体
     */
    @RequestMapping("/getInfo")
    public UserInfoEntity getInfo(String userId){
        UserInfoEntity userInfoEntity = userInfoService.getById(userId);
        return userInfoEntity;
    }
    /**
     * 查询全部信息
     * @author xlc
     * @CreateTime 2022/20 16:35
     * @Param  userId  用户ID
     * @Return List<UserInfoEntity> 用户实体集合
     */
    @RequestMapping("/getList")
    public List<UserInfoEntity> getList(){
        List<UserInfoEntity> userInfoEntityList = userInfoService.list();
        return userInfoEntityList;
    }
    /**
     * 分页查询全部数据
     * @author xlc
     * @CreateTime 2022/20 16:37
     * @Return IPage<UserInfoEntity> 分页数据
     */
    @RequestMapping("/getInfoListPage")
    public IPage<UserInfoEntity> getInfoListPage(){
        //需要在Config配置类中配置分页插件
        IPage<UserInfoEntity> page = new Page<>();
        page.setCurrent(5); //当前页
        page.setSize(1);    //每页条数
        page = userInfoService.page(page);
        return page;
    }
    /**
     * 根据指定字段查询用户信息集合
     * @author xlc
     * @CreateTime 2022/20 16:39
     * @Return Collection<UserInfoEntity> 用户实体集合
     */
    @RequestMapping("/getListMap")
    public Collection<UserInfoEntity> getListMap(){
        Map<String,Object> map = new HashMap<>();
        //kay是字段名 value是字段值
        map.put("age",20);
        Collection<UserInfoEntity> userInfoEntityList = userInfoService.listByMap(map);
        return userInfoEntityList;
    }
    /**
     * 新增用户信息
     * @author xlc
     * @CreateTime 2022/20 16:40
     */
    @RequestMapping("/saveInfo")
    public void saveInfo(){
        UserInfoEntity userInfoEntity = new UserInfoEntity();
        userInfoEntity.setName("小龙");
        userInfoEntity.setSkill("JAVA");
        userInfoEntity.setAge(18);
        userInfoEntity.setFraction(59L);
        userInfoEntity.setEvaluate("该学生是一个在改BUG的码农");
        userInfoService.save(userInfoEntity);
    }
    /**
     * 批量新增用户信息
     * @author xlc
     * @CreateTime 2022/20 16:42
     */
    @RequestMapping("/saveInfoList")
    public void saveInfoList(){
        //创建对象
        UserInfoEntity sans = new UserInfoEntity();
        sans.setName("Sans");
        sans.setSkill("睡觉");
        sans.setAge(18);
        sans.setFraction(60L);
        sans.setEvaluate("Sans是一个爱睡觉,并且身材较矮骨骼巨大的骷髅小胖子");
        UserInfoEntity papyrus = new UserInfoEntity();
        papyrus.setName("papyrus");
        papyrus.setSkill("JAVA");
        papyrus.setAge(18);
        papyrus.setFraction(58L);
        papyrus.setEvaluate("Papyrus是一个讲话大声、个性张扬的骷髅，给人自信、有魅力的骷髅小瘦子");
        //批量保存
        List<UserInfoEntity> list =new ArrayList<>();
        list.add(sans);
        list.add(papyrus);
        userInfoService.saveBatch(list);
    }
    /**
     * 更新用户信息
     * @author xlc
     * @CreateTime 2022/20 16:47
     */
    @RequestMapping("/updateInfo")
    public void updateInfo(){
        //根据实体中的ID去更新,其他字段如果值为null则不会更新该字段,参考yml配置文件
        UserInfoEntity userInfoEntity = new UserInfoEntity();
        userInfoEntity.setId(1L);
        userInfoEntity.setAge(19);
        userInfoService.updateById(userInfoEntity);
    }
    /**
     * 新增或者更新用户信息
     * @author xlc
     * @CreateTime 2022/20 16:50
     */
    @RequestMapping("/saveOrUpdateInfo")
    public void saveOrUpdate(){
        //传入的实体类userInfoEntity中ID为null就会新增(ID自增)
        //实体类ID值存在,如果数据库存在ID就会更新,如果不存在就会新增
        UserInfoEntity userInfoEntity = new UserInfoEntity();
        userInfoEntity.setId(1L);
        userInfoEntity.setAge(20);
        userInfoService.saveOrUpdate(userInfoEntity);
    }
    /**
     * 根据ID删除用户信息
     * @author xlc
     * @CreateTime 2022/20 16:52
     */
    @RequestMapping("/deleteInfo")
    public void deleteInfo(String userId){
        userInfoService.removeById(userId);
    }
    /**
     * 根据ID批量删除用户信息
     * @author xlc
     * @CreateTime 2022/20 16:55
     */
    @RequestMapping("/deleteInfoList")
    public void deleteInfoList(){
        List<String> userIdlist = new ArrayList<>();
        userIdlist.add("12");
        userIdlist.add("13");
        userInfoService.removeByIds(userIdlist);
    }
    /**
     * 根据指定字段删除用户信息
     * @author xlc
     * @CreateTime 2022/20 16:57
     */
    @RequestMapping("/deleteInfoMap")
    public void deleteInfoMap(){
        //kay是字段名 value是字段值
        Map<String,Object> map = new HashMap<>();
        map.put("skill","删除");
        map.put("fraction",10L);
        userInfoService.removeByMap(map);
    }
}
```

controller层用到lambda语法

```java
 
package com.demo.drools.controller;
 
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.core.metadata.IPage;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.demo.drools.entity.UserInfoEntity;
import com.demo.drools.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
 
import java.util.HashMap;
import java.util.List;
import java.util.Map;
 
/**
 * TODO your comment
 *
 * @author xlc
 * @date 2022/6/20 19:28
 */
public class UserInfoPlusController {
    @Autowired
    private UserInfoService userInfoService;
    
    /**
     * MP扩展演示
     * @author xlc
     * @CreateTime 2022/20 16:37
     * @Return Map<String,Object> 返回数据
     */
    @RequestMapping("/getInfoListPlus")
    public Map<String,Object> getInfoListPage(){
        //初始化返回类
        Map<String,Object> result = new HashMap<>();
        //查询年龄等于18岁的学生
        //等价SQL: SELECT id,name,age,skill,evaluate,fraction FROM user_info WHERE age = 18
        QueryWrapper<UserInfoEntity> queryWrapper1 = new QueryWrapper<>();
        queryWrapper1.lambda().eq(UserInfoEntity::getAge,18);
        List<UserInfoEntity> userInfoEntityList1 = userInfoService.list(queryWrapper1);
        result.put("studentAge18",userInfoEntityList1);
        //查询年龄大于5岁的学生且小于等于18岁的学生
        //等价SQL: SELECT id,name,age,skill,evaluate,fraction FROM user_info WHERE age > 5 AND age <= 18
        QueryWrapper<UserInfoEntity> queryWrapper2 = new QueryWrapper<>();
        queryWrapper2.lambda().gt(UserInfoEntity::getAge,5);
        queryWrapper2.lambda().le(UserInfoEntity::getAge,18);
        List<UserInfoEntity> userInfoEntityList2 = userInfoService.list(queryWrapper2);
        result.put("studentAge5",userInfoEntityList2);
        //模糊查询技能字段带有"画"的数据,并按照年龄降序
        //等价SQL: SELECT id,name,age,skill,evaluate,fraction FROM user_info WHERE skill LIKE '%画%' ORDER BY age DESC
        QueryWrapper<UserInfoEntity> queryWrapper3 = new QueryWrapper<>();
        queryWrapper3.lambda().like(UserInfoEntity::getSkill,"画");
        queryWrapper3.lambda().orderByDesc(UserInfoEntity::getAge);
        List<UserInfoEntity> userInfoEntityList3 = userInfoService.list(queryWrapper3);
        result.put("studentAgeSkill",userInfoEntityList3);
        //模糊查询名字带有"小"或者年龄大于18的学生
        //等价SQL: SELECT id,name,age,skill,evaluate,fraction FROM user_info WHERE name LIKE '%小%' OR age > 18
        QueryWrapper<UserInfoEntity> queryWrapper4 = new QueryWrapper<>();
        queryWrapper4.lambda().like(UserInfoEntity::getName,"小");
        queryWrapper4.lambda().or().gt(UserInfoEntity::getAge,18);
        List<UserInfoEntity> userInfoEntityList4 = userInfoService.list(queryWrapper4);
        result.put("studentOr",userInfoEntityList4);
        //查询评价不为null的学生,并且分页
        //等价SQL: SELECT id,name,age,skill,evaluate,fraction FROM user_info WHERE evaluate IS NOT NULL LIMIT 0,5
        IPage<UserInfoEntity> page = new Page<>();
        page.setCurrent(1);
        page.setSize(5);
        QueryWrapper<UserInfoEntity> queryWrapper5 = new QueryWrapper<>();
        queryWrapper5.lambda().isNotNull(UserInfoEntity::getEvaluate);
        page = userInfoService.page(page,queryWrapper5);
        result.put("studentPage",page);
        return result;
    }
}
```

以上就是mybatis-plus的小案例，mybatis-plus它像我之前使用的spring data
jpa框架不用写sql语句，就可以实现简单的增删改查、批量操作、分页mybatis-plus功能还是比较强大，能减少我们写很多代码，我个人还是比较喜欢用这个mybatis-plus的

mybatis-plus只是mybatis的增强版，它不影响mybatis的使用，我们可以写我们自定的方法以及sql，接下来我们看一个小案例

dao层新增方法

```java
/**
     * 查询大于该分数的学生
     * @author xlc
     * @CreateTime 2022/20 14:28
     * @Param  page  分页参数
     * @Param  fraction  分数
     * @Return IPage<UserInfoEntity> 分页数据
     */
    IPage<UserInfoEntity> selectUserInfoByGtFraction(
            @Param(value = "page") IPage<UserInfoEntity> page,
            @Param(value = "fraction")Long fraction);
```

service新增方法

```java
/**
     * 查询大于该分数的学生
     * @author xlc
     * @CreateTime 2022/20 14:27
     * @Param  page  分页参数
     * @Param  fraction  分数
     * @Return IPage<UserInfoEntity> 分页数据
     */
    IPage<UserInfoEntity> selectUserInfoByGtFraction(IPage<UserInfoEntity> page,Long fraction);
```

serviceImpl层新增方法

```java
/**
     * 查询大于该分数的学生
     * @author xlc
     * @CreateTime 2022/20 14:27
     * @Param  page  分页参数
     * @Param  fraction  分数
     * @Return IPage<UserInfoEntity> 分页数据
     */
    @Override
    public IPage<UserInfoEntity> selectUserInfoByGtFraction(IPage<UserInfoEntity> page, Long fraction) {
        return userInfoDao.selectUserInfoByGtFraction(page,fraction);
    }
```

controller层新增方法

```java
 /**
     * MP自定义SQL
     * @author xlc
     * @CreateTime 2022/20 14:37
     * @Return IPage<UserInfoEntity> 分页数据
     */
    @RequestMapping("/getInfoListSQL")
    public IPage<UserInfoEntity> getInfoListSQL(){
        //查询大于60分以上的学生,并且分页
        IPage<UserInfoEntity> page = new Page<>();
        page.setCurrent(1);
        page.setSize(5);
        page = userInfoService.selectUserInfoByGtFraction(page,60L);
        return page;
    }
```

配置我们的mybatis的xml

```bash
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd" >
<mapper namespace="com.demo.drools.dao.UserInfoDao">
  <select id="selectUserInfoByGtFraction" resultType="com.demo.drools.entity.UserInfoEntity">
    SELECT * FROM user_info WHERE fraction > #{fraction}
    </select>
</mapper>
```

以上配置就是我们的mybatis用法。

## mybatis plus强大的条件构造器queryWrapper、updateWrapper

1.**QueryWrapper**： Entity 对象封装操作类
2.**UpdateWrapper** ： Update 条件封装，用于Entity对象更新操作
3.条件构造器使用中的各个方法格式和说明

![image-20220620164733512](https://bitbucket.org/xlc520/blogasset/raw/main/images3/image-20220620164733512.png)