---
author: xlc520
title: SpringBoot整合Mybatis-plus及用法2
description: 
date: 2022-07-02
category: Java
tag: 
- Java
- SpringBoot
- Mybatis-plus
article: true
timeline: true
icon: java
password: 
---



# SpringBoot整合Mybatis-plus及用法2

## 创建项目

普通的spring-boot项目，在 [start.spring.io](https://start.spring.io)或者使用idea创建都行，相关依赖如下

我这版本用的springboot版本是 2.1.4

```xml
<dependencies>
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-web</artifactId>
	</dependency>

	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-devtools</artifactId>
		<scope>runtime</scope>
	</dependency>
	<dependency>
		<groupId>mysql</groupId>
		<artifactId>mysql-connector-java</artifactId>
		<scope>runtime</scope>
	</dependency>
	<dependency>
		<groupId>org.projectlombok</groupId>
		<artifactId>lombok</artifactId>
		<optional>true</optional>
	</dependency>
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-test</artifactId>
		<scope>test</scope>
	</dependency>

	<dependency>
		<groupId>com.baomidou</groupId>
		<artifactId>mybatis-plus-boot-starter</artifactId>
		<version>3.1.0</version>
	</dependency>
</dependencies>
<build>
	<resources>
		<resource>
			<directory>src/main/java</directory>
			<includes>
				<include>**/*.xml</include>
			</includes>
			<filtering>true</filtering>
		</resource>
		<resource>
			<directory>src/main/resources</directory>
		</resource>
	</resources>
</build>
```

## 建表

```sql
CREATE TABLE `topic` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  `in_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
```

插入一些数据

```sql
INSERT INTO `topic` (`id`, `title`, `content`, `tag`, `in_time`)
VALUES
	(1, 'title1', 'content1', 'tag1', '2019-04-15 09:33:35'),
	(2, 'title2', 'content2', 'tag2', '2019-04-15 09:33:35'),
	(3, 'title3', 'content3', 'tag3', '2019-04-15 09:33:35'),
	(4, 'title4', 'content4', 'tag4', '2019-04-15 09:33:35'),
	(5, 'title4', 'content4', 'tag4', '2019-04-15 09:33:35'),
	(6, 'title4', 'content4', 'tag4', '2019-04-15 09:33:35'),
	(7, 'title4', 'content4', 'tag4', '2019-04-15 09:33:35'),
	(8, 'title4', 'content4', 'tag4', '2019-04-15 09:33:35'),
	(9, 'title4', 'content4', 'tag4', '2019-04-15 09:33:35'),
	(10, 'title4', 'content4', 'tag4', '2019-04-15 09:33:35'),
	(11, 'title4', 'content4', 'tag4', '2019-04-15 09:33:35'),
	(12, 'title4', 'content4', 'tag4', '2019-04-15 09:33:35'),
	(13, 'title4', 'content4', 'tag4', '2019-04-15 09:33:35');
```



## 创建实体类

```java
@Data
public class Topic {

  @TableId(type = IdType.AUTO)
  private Integer id;

  private String title;
  private String content;
  private String tag;
  private Date inTime;

}
```

## 创建mapper

```java
public interface TopicMapper extends BaseMapper<Topic> {

}
```

## 创建service

```java
@Service
@Transactional
public class TopicService {

  @Autowired
  private TopicMapper topicMapper;

  public List<Topic> list() {
    return topicMapper.selectList(new QueryWrapper<>());
  }

}
```

## 创建controller

```java
@RestController
public class TopicController {

  @Autowired
  private TopicService topicService;

  @GetMapping("/")
  public Object list() {
    return topicService.list();
  }
}
```

## 添加包扫描

最后在启动类 `MybatisPlusDemoApplication.java` 上加上扫描包的注解，如下

```java
@SpringBootApplication
@MapperScan("com.example.mybatisplusdemo.mapper")
public class MybatisPlusDemoApplication {

  public static void main(String[] args) {
    SpringApplication.run(MybatisPlusDemoApplication.class, args);
  }

}
```

## 测试

```
curl http://localhost:808/
[{"id":1,"title":"title1","content":"content1","tag":"tag1","inTime":"2019-04-15T14:33:35.000+0000"},
{"id":2,"title":"title2","content":"content2","tag":"tag2","inTime":"2019-04-15T14:33:35.000+0000"},
{"id":3,"title":"title3","content":"content3","tag":"tag3","inTime":"2019-04-15T14:33:35.000+0000"},
{"id":4,"title":"title4","content":"content4","tag":"tag4","inTime":"2019-04-15T14:33:35.000+0000"},
{"id":5,"title":"title4","content":"content4","tag":"tag4","inTime":"2019-04-15T14:33:35.000+0000"},
{"id":6,"title":"title4","content":"content4","tag":"tag4","inTime":"2019-04-15T14:33:35.000+0000"},
{"id":7,"title":"title4","content":"content4","tag":"tag4","inTime":"2019-04-15T14:33:35.000+0000"},
{"id":8,"title":"title4","content":"content4","tag":"tag4","inTime":"2019-04-15T14:33:35.000+0000"},
{"id":9,"title":"title4","content":"content4","tag":"tag4","inTime":"2019-04-15T14:33:35.000+0000"},
{"id":10,"title":"title4","content":"content4","tag":"tag4","inTime":"2019-04-15T14:33:35.000+0000"},
{"id":11,"title":"title4","content":"content4","tag":"tag4","inTime":"2019-04-15T14:33:35.000+0000"},
{"id":12,"title":"title4","content":"content4","tag":"tag4","inTime":"2019-04-15T14:33:35.000+0000"},
{"id":13,"title":"title4","content":"content4","tag":"tag4","inTime":"2019-04-15T14:33:35.000+0000"}]
```

上面的一些用法在mybatis-plus官网上都能找到，都是基本用法，但开发项目不可能都是简单的crud，下面来说说一些高级的用法

## xml怎么配置

mybatis-plus里内置的crud都给封装好了，都在`BaseMapper`接口里，包括CRUD，分页，那如果我要自定义查询，返回字段不是整个实体类的字段怎么办呢？

可以通过定义xml文件来查询，方法如下

在`TopicMapper.java`类的包下，创建一个 `TopicMapper.xml` 文件，填上下面内容

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE mapper PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN" "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="com.example.mybatisplusdemo.mapper.TopicMapper">

  <!-- 映射表字段与实体类属性 -->
  <resultMap id="BaseResultMap" type="com.example.mybatisplusdemo.model.Topic">
      <id column="id" jdbcType="INTEGER" property="id"/>
      <id column="title" jdbcType="VARCHAR" property="title"/>
      <id column="content" jdbcType="VARCHAR" property="content"/>
      <id column="tag" jdbcType="VARCHAR" property="tag"/>
      <id column="in_time" jdbcType="DATE" property="inTime"/>
  </resultMap>

  <!-- 通用查询结果列 -->
  <sql id="Base_Column_List">
      id, title, content, tag, in_time
  </sql>

  <!-- 自定义查询方法 -->

</mapper>
```

在这个xml文件里定义一个方法

```xml
<select id="selectByTitle" resultMap="BaseResultMap">
  select <include refid="Base_Column_List"/> from topic where title = '${title}'
</select>
```



对应的，在 `TopicMapper.java` 里也要加上相应的接口

```java
public interface TopicMapper extends BaseMapper<Topic> {
  Topic selectByTitle(@Param("title") String title);
}
```

在service里就可以调用了，controller里再调用service里的方法，然后测试

```shell
curl http://localhost:8080/selectByTitle?title=titl1
{"id":1,"title":"title1","content":"content1","tag":"tag1","inTime":"2019-04-15T05:00:00.000+0000"}
```

可以看到上面xml里定义方法时用到的返回类型是定义好的映射 `resultMap="BaseResultMap"`和通用查询结果列 `<include refid="Base_Column_List"/>`，那如果我想返回一个map怎么办呢？

将 `resultMap="BaseResultMap"` 换成 `resultType="map"`，查询语句里写上要查询的字段即可

## 自定义返回结果

上面最后提到返回一个map，这需求也很常见，比如一个表字段有10个，我只想要5个，那这时候再去定义通用查询结果列就不太好了，两个还好，多了xml就会很乱，所以map是最适合的方式，下面来定义一个查询看下效果

```sql
<select id="selectTitleList" resultType="map">
  select id, title, in_time from topic
</select>
```

上面定义了一个方法，返回用的是`map`，查询字段有 `id, title`，`BaseMapper.java` 里接口定义如下

```java
public interface TopicMapper extends BaseMapper<Topic> {
  List<Map> selectTitleList();
}
```

写好service,controller，测试

```
curl http://localhost:8080/selectTitleList
[{"in_time":"2019-04-15T14:33:35.000+0000","id":1,"title":"title1"},
{"in_time":"2019-04-15T14:33:35.000+0000","id":2,"title":"title2"},
{"in_time":"2019-04-15T14:33:35.000+0000","id":3,"title":"title3"},
{"in_time":"2019-04-15T14:33:35.000+0000","id":4,"title":"title4"},
{"in_time":"2019-04-15T14:33:35.000+0000","id":5,"title":"title4"},
{"in_time":"2019-04-15T14:33:35.000+0000","id":6,"title":"title4"},
{"in_time":"2019-04-15T14:33:35.000+0000","id":7,"title":"title4"},
{"in_time":"2019-04-15T14:33:35.000+0000","id":8,"title":"title4"},
{"in_time":"2019-04-15T14:33:35.000+0000","id":9,"title":"title4"},
{"in_time":"2019-04-15T14:33:35.000+0000","id":10,"title":"title4"},
{"in_time":"2019-04-15T14:33:35.000+0000","id":11,"title":"title4"},
{"in_time":"2019-04-15T14:33:35.000+0000","id":12,"title":"title4"},
{"in_time":"2019-04-15T14:33:35.000+0000","id":13,"title":"title4"}]
```

## map转驼峰

上面查询结果可以看到，返回的确实是map，没有问题，但java类中的驼峰没有转回来呀，这样就不友好了，比如前端定义好了返回结果类，本来查询列表好好的，但换成详细查询的时候，字段收不到了，找了半天原来是字段变了，又是一场撕逼

mybatis我不知道有没有办法解决，但mybatis-plus人家很用心呀，一个配置就解决了这个问题

创建 `MybatisPlusConfig.java` 配置类，添加上下面配置即可实现`map转驼峰`和分页功能，分页功能下面再介绍，这里就先配置上

```java
@Configuration
@MapperScan("com.example.mybatisplusdemo.mapper")
public class MybatisPlusConfig {

  @Bean("mybatisSqlSession")
  public SqlSessionFactory sqlSessionFactory(@Qualifier("dataSource") DataSource dataSource) throws Exception {
    MybatisSqlSessionFactoryBean sqlSessionFactory = new MybatisSqlSessionFactoryBean();
    MybatisConfiguration configuration = new MybatisConfiguration();
    configuration.setDefaultScriptingLanguage(MybatisXMLLanguageDriver.class);
    configuration.setJdbcTypeForNull(JdbcType.NULL);
    //*注册Map 下划线转驼峰*
   configuration.setObjectWrapperFactory(new MybatisMapWrapperFactory());

    // 添加数据源
    sqlSessionFactory.setDataSource(dataSource);

    sqlSessionFactory.setConfiguration(configuration);

    // 添加分页插件，这里有个坑
    PaginationInterceptor paginationInterceptor = new PaginationInterceptor();
    sqlSessionFactory.setPlugins(new Interceptor[]{paginationInterceptor});

    return sqlSessionFactory.getObject();
  }
}
```

加上这个配置类后，Mapper扫描注解顺便也从启动类上移到这个类上配置，然后再次启动项目，测试

```
curl http://localhost:8080/selectTitleList
[{"inTime":"2019-04-15T14:33:35.000+0000","id":1,"title":"title1"},
{"inTime":"2019-04-15T14:33:35.000+0000","id":2,"title":"title2"},
{"inTime":"2019-04-15T14:33:35.000+0000","id":3,"title":"title3"},
{"inTime":"2019-04-15T14:33:35.000+0000","id":4,"title":"title4"},
{"inTime":"2019-04-15T14:33:35.000+0000","id":5,"title":"title4"},
{"inTime":"2019-04-15T14:33:35.000+0000","id":6,"title":"title4"},
{"inTime":"2019-04-15T14:33:35.000+0000","id":7,"title":"title4"},
{"inTime":"2019-04-15T14:33:35.000+0000","id":8,"title":"title4"},
{"inTime":"2019-04-15T14:33:35.000+0000","id":9,"title":"title4"},
{"inTime":"2019-04-15T14:33:35.000+0000","id":10,"title":"title4"},
{"inTime":"2019-04-15T14:33:35.000+0000","id":11,"title":"title4"},
{"inTime":"2019-04-15T14:33:35.000+0000","id":12,"title":"title4"},
{"inTime":"2019-04-15T14:33:35.000+0000","id":13,"title":"title4"}]
```

再看看结果，`in_time`已经从下划线转成驼峰 `inTime` 命名了，可喜可贺可喜可贺

## BaseMapper分页

分页分两种，一种是BaseMapper接口内置的分页接口，直接调用即可，使用如下

在service里直接调用方法

```java
public IPage<Topic> selectWithPage(Integer pageNo, Integer pageSize) {
  QueryWrapper<Topic> wrapper = new QueryWrapper<>();
  IPage<Topic> iPage = new Page<>(pageNo, pageSize);
  return topicMapper.selectPage(iPage, wrapper);
}
```

测试 `curl http://localhost:8080/selectWithPage?pageNo=1&pageSize=5`

```
{"records":[{"id":1,"title":"title1","content":"content1","tag":"tag1","inTime":"2019-04-15T14:33:35.000+0000"},
{"id":2,"title":"title2","content":"content2","tag":"tag2","inTime":"2019-04-15T14:33:35.000+0000"},
{"id":3,"title":"title3","content":"content3","tag":"tag3","inTime":"2019-04-15T14:33:35.000+0000"},
{"id":4,"title":"title4","content":"content4","tag":"tag4","inTime":"2019-04-15T14:33:35.000+0000"},
{"id":5,"title":"title4","content":"content4","tag":"tag4","inTime":"2019-04-15T14:33:35.000+0000"}],
"total":13,"size":5,"current":1,"searchCount":true,"pages":3}
```

## 自定义查询分页

上面说到了使用自定义查询时可以指定查询字段，然后返回map即可，那分页怎么办？

mybatis-plus里有一个 `IPage` 接口，通过这个接口来封装分页信息，用法如下

在xml里定义查询方法

```xml
<select id="selectMapWithPage" resultType="map">
  select id, title, in_time from topic
</select>
```

在 `BaseMapper.java` 里定义接口

```java
public interface TopicMapper extends BaseMapper<Topic> {
  IPage<Map> selectMapWithPage(IPage iPage);
}
```

`TopicService.java` 里封装 IPage 对象然后调用接口

```java
public IPage<Map> selectMapWithPage(Integer pageNo, Integer pageSize) {
  IPage<Map> iPage = new Page<>(pageNo, pageSize);
  iPage = topicMapper.selectMapWithPage(iPage);
  return iPage;
}
```

测试 `curl http://localhost:8080/selectMapWithPage?pageNo=1&pageSize=5`

```
{"records":[{"inTime":"2019-04-15T14:33:35.000+0000","id":1,"title":"title1"},
{"inTime":"2019-04-15T14:33:35.000+0000","id":2,"title":"title2"},
{"inTime":"2019-04-15T14:33:35.000+0000","id":3,"title":"title3"},
{"inTime":"2019-04-15T14:33:35.000+0000","id":4,"title":"title4"},
{"inTime":"2019-04-15T14:33:35.000+0000","id":5,"title":"title4"}],
"total":13,"size":5,"current":1,"searchCount":true,"pages":3}
```

## 注意

1. 在xml文件里写的sql语句不要在最后带上`;`，因为有些分页查询会自动拼上 `limit 0, 10;` 这样的sql语句，如果你在定义sql的时候已经加上了 `;`，调用这个查询的时候就会报错了
2. 往xml文件里的查询方法里传参数要带上 `@Param("")` 注解，这样mybatis才认，否则会报错
3. 分页中传的pageNo可以从0或者1开始，查询出的结果是一样的，这一点不像jpa里必须是从0开始才是第一页

## 异常

2019-06-21更新

今天创建了个项目，使用了 mybatis-plus(v3.1.1) 查询数据的时候出了个异常 `Error evaluating expression 'ew.sqlSegment != null and ew.sqlSegment != '' and ew.nonEmptyOfWhere`

原因好像是java的反射出的问题，devtools 也是利用java的反射来实现的热加载，mybatis-plus 里的 lambda 表达式也是用反射来找到属性的值进行sql拼接的，估计是这俩货冲突了，不过挺好奇，项目里还用到了 lombok，就没问题，这。。

解决方法: 把`spring-boot-devtools`这个依赖去掉就可以了