---
author: xlc520
title: SpringBoot 集成 Caffeine
description: 
date: 2023-09-11
category: Java
tag: Java
article: true
timeline: true
icon: java
---



# SpringBoot 集成 Caffeine

其他参考：

https://www.cnblogs.com/rickiyang/p/11074158.html



**环境配置：**

- JDK 版本：1.8
- Caffeine 版本：2.8.0
- SpringBoot 版本：2.2.2.RELEASE

**参考地址：**

- [Spring Boot缓存实战 Caffeine](https://www.jianshu.com/p/c72fb0c787fc)
- [Caffeine Cache-高性能Java本地缓存组件](https://www.cnblogs.com/rickiyang/p/11074158.html)
- 博文示例项目 Github 地址：https://github.com/my-dlq/blog-example/tree/master/springboot/springboot-caffeine-cache-example

## 一、本地缓存介绍

缓存在日常开发中启动至关重要的作用，由于是存储在内存中，数据的读取速度是非常快的，能大量减少对数据库的访问，减少数据库的压力。

之前介绍过 Redis 这种 NoSql 作为缓存组件，它能够很好的作为分布式缓存组件提供多个服务间的缓存，但是 Redis 这种还是需要网络开销，增加时耗。本地缓存是直接从本地内存中读取，没有网络开销，例如秒杀系统或者数据量小的缓存等，比远程缓存更合适。

## 二、缓存组件 Caffeine 介绍

按 Caffeine Github 文档描述，Caffeine 是基于 JAVA 8 的高性能缓存库。并且在 spring5 (springboot 2.x) 后，spring 官方放弃了 Guava，而使用了性能更优秀的 Caffeine 作为默认缓存组件。

### 1、Caffeine 性能

可以通过下图观测到，在下面缓存组件中 Caffeine 性能是其中最好的。

![img](https://static.xlc520.tk/blogImage/Spring-Boot-Caffeine.png)

### 2、Caffeine 配置说明

| 参数              |   类型   | 描述                                                         |
| ----------------- | :------: | ------------------------------------------------------------ |
| initialCapacity   | integer  | 初始的缓存空间大小                                           |
| maximumSize       |   long   | 缓存的最大条数                                               |
| maximumWeight     |   long   | 缓存的最大权重                                               |
| expireAfterAccess | duration | 最后一次写入或访问后，指定经过多长的时间过期                 |
| expireAfterWrite  | duration | 最后一次写入后，指定经过多长的时间缓存过期                   |
| refreshAfterWrite | duration | 创建缓存或者最近一次更新缓存后，经过指定的时间间隔后刷新缓存 |
| weakKeys          | boolean  | 打开 key 的弱引用                                            |
| weakValues        | boolean  | 打开 value 的弱引用                                          |
| softValues        | boolean  | 打开 value 的软引用                                          |
| recordStats       |    -     | 开发统计功能                                                 |

**注意：**

- `weakValues` 和 `softValues` 不可以同时使用。
- `maximumSize` 和 `maximumWeight` 不可以同时使用。
- `expireAfterWrite` 和 `expireAfterAccess` 同时存在时，以 `expireAfterWrite` 为准。

### 3、软引用与弱引用

- **软引用：** 如果一个对象只具有软引用，且内存空间足够，垃圾回收器就不会回收它；如果内存空间不足了，就会回收这些对象的内存。
- **弱引用：** 弱引用的对象拥有更短暂的生命周期。在垃圾回收器线程扫描它所管辖的内存区域的过程中，一旦发现了只具有弱引用的对象，不管当前内存空间足够与否，都会回收它的内存

```java
// 软引用
Caffeine.newBuilder().softValues().build();

// 弱引用
Caffeine.newBuilder().weakKeys().weakValues().build();
```

## 三、SpringBoot 集成 Caffeine 两种方式

SpringBoot 有俩种使用 Caffeine 作为缓存的方式：

- **方式一：** 直接引入 Caffeine 依赖，然后使用 Caffeine 方法实现缓存。
- **方式二：** 引入 Caffeine 和 SpringCache 依赖，使用 SpringCache 注解方法实现缓存。

下面将介绍下，这俩中集成方式都是如何实现的。

## 四、SpringBoot 集成 Caffeine 方式一

### 1、Maven 引入相关依赖

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.2.2.RELEASE</version>
    </parent>

    <groupId>mydlq.club</groupId>
    <artifactId>springboot-caffeine-cache-example-1</artifactId>
    <version>0.0.1</version>
    <name>springboot-caffeine-cache-example-1</name>
    <description>Demo project for Spring Boot Cache</description>

    <properties>
        <java.version>1.8</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>com.github.ben-manes.caffeine</groupId>
            <artifactId>caffeine</artifactId>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>

</project>
```

### 2、配置缓存配置类

```java
import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.util.concurrent.TimeUnit;

@Configuration
public class CacheConfig {

    @Bean
    public Cache<String, Object> caffeineCache() {
        return Caffeine.newBuilder()
                // 设置最后一次写入或访问后经过固定时间过期
                .expireAfterWrite(60, TimeUnit.SECONDS)
                // 初始的缓存空间大小
                .initialCapacity(100)
                // 缓存的最大条数
                .maximumSize(1000)
                .build();
    }

}
```

### 3、定义测试的实体对象

```java
import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class UserInfo {
    private Integer id;
    private String name;
    private String sex;
    private Integer age;
}
```

### 4、定义服务接口类和实现类

**UserInfoService**

```java
import mydlq.club.example.entity.UserInfo;

public interface UserInfoService {

    /**
     * 增加用户信息
     *
     * @param userInfo 用户信息
     */
    void addUserInfo(UserInfo userInfo);

    /**
     * 获取用户信息
     *
     * @param id 用户ID
     * @return 用户信息
     */
    UserInfo getByName(Integer id);

    /**
     * 修改用户信息
     *
     * @param userInfo 用户信息
     * @return 用户信息
     */
    UserInfo updateUserInfo(UserInfo userInfo);

    /**
     * 删除用户信息
     *
     * @param id 用户ID
     */
    void deleteById(Integer id);

}
```

**UserInfoServiceImpl**

```java
import com.github.benmanes.caffeine.cache.Cache;
import lombok.extern.slf4j.Slf4j;
import mydlq.club.example.entity.UserInfo;
import mydlq.club.example.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import java.util.HashMap;

@Slf4j
@Service
public class UserInfoServiceImpl implements UserInfoService {

    /**
     * 模拟数据库存储数据
     */
    private HashMap<Integer, UserInfo> userInfoMap = new HashMap<>();

    @Autowired
    Cache<String, Object> caffeineCache;

    @Override
    public void addUserInfo(UserInfo userInfo) {
        log.info("create");
        userInfoMap.put(userInfo.getId(), userInfo);
        // 加入缓存
        caffeineCache.put(String.valueOf(userInfo.getId()),userInfo);
    }

    @Override
    public UserInfo getByName(Integer id) {
        // 先从缓存读取
        UserInfo userInfo = (UserInfo) caffeineCache.asMap().get(String.valueOf(id));
        if (userInfo != null){
            return userInfo;
        }
        // 如果缓存中不存在，则从库中查找
        log.info("get");
        userInfo = userInfoMap.get(id);
        // 如果用户信息不为空，则加入缓存
        if (userInfo != null){
            caffeineCache.put(String.valueOf(userInfo.getId()),userInfo);
        }
        return userInfo;
    }

    @Override
    public UserInfo updateUserInfo(UserInfo userInfo) {
        log.info("update");
        if (!userInfoMap.containsKey(userInfo.getId())) {
            return null;
        }
        // 取旧的值
        UserInfo oldUserInfo = userInfoMap.get(userInfo.getId());
        // 替换内容
        if (!StringUtils.isEmpty(oldUserInfo.getAge())) {
            oldUserInfo.setAge(userInfo.getAge());
        }
        if (!StringUtils.isEmpty(oldUserInfo.getName())) {
            oldUserInfo.setName(userInfo.getName());
        }
        if (!StringUtils.isEmpty(oldUserInfo.getSex())) {
            oldUserInfo.setSex(userInfo.getSex());
        }
        // 将新的对象存储，更新旧对象信息
        userInfoMap.put(oldUserInfo.getId(), oldUserInfo);
        // 替换缓存中的值
        caffeineCache.put(String.valueOf(oldUserInfo.getId()),oldUserInfo);
        return oldUserInfo;
    }

    @Override
    public void deleteById(Integer id) {
        log.info("delete");
        userInfoMap.remove(id);
        // 从缓存中删除
        caffeineCache.asMap().remove(String.valueOf(id));
    }

}
```

### 5、测试的 Controller 类

```java
import mydlq.club.example.entity.UserInfo;
import mydlq.club.example.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
public class UserInfoController {

    @Autowired
    private UserInfoService userInfoService;

    @GetMapping("/userInfo/{id}")
    public Object getUserInfo(@PathVariable Integer id) {
        UserInfo userInfo = userInfoService.getByName(id);
        if (userInfo == null) {
            return "没有该用户";
        }
        return userInfo;
    }

    @PostMapping("/userInfo")
    public Object createUserInfo(@RequestBody UserInfo userInfo) {
        userInfoService.addUserInfo(userInfo);
        return "SUCCESS";
    }

    @PutMapping("/userInfo")
    public Object updateUserInfo(@RequestBody UserInfo userInfo) {
        UserInfo newUserInfo = userInfoService.updateUserInfo(userInfo);
        if (newUserInfo == null){
            return "不存在该用户";
        }
        return newUserInfo;
    }

    @DeleteMapping("/userInfo/{id}")
    public Object deleteUserInfo(@PathVariable Integer id) {
        userInfoService.deleteById(id);
        return "SUCCESS";
    }

}
```

## 五、SpringBoot 集成 Caffeine 方式二

### 1、Maven 引入相关依赖

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.2.2.RELEASE</version>
    </parent>

    <groupId>mydlq.club</groupId>
    <artifactId>springboot-caffeine-cache-example-2</artifactId>
    <version>0.0.1</version>
    <name>springboot-caffeine-cache-example-2</name>
    <description>Demo project for Spring Boot caffeine</description>

    <properties>
        <java.version>1.8</java.version>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-cache</artifactId>
        </dependency>
        <dependency>
            <groupId>com.github.ben-manes.caffeine</groupId>
            <artifactId>caffeine</artifactId>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>

</project>
```

### 2、配置缓存配置类

```java
@Configuration
public class CacheConfig {

    /**
     * 配置缓存管理器
     *
     * @return 缓存管理器
     */
    @Bean("caffeineCacheManager")
    public CacheManager cacheManager() {
        CaffeineCacheManager cacheManager = new CaffeineCacheManager();
        cacheManager.setCaffeine(Caffeine.newBuilder()
                // 设置最后一次写入或访问后经过固定时间过期
                .expireAfterAccess(60, TimeUnit.SECONDS)
                // 初始的缓存空间大小
                .initialCapacity(100)
                // 缓存的最大条数
                .maximumSize(1000));
        return cacheManager;
    }

}
```

### 3、定义测试的实体对象

```java
@Data
@ToString
public class UserInfo {
    private Integer id;
    private String name;
    private String sex;
    private Integer age;
}
```

### 4、定义服务接口类和实现类

**服务接口**

```java
import mydlq.club.example.entity.UserInfo;

public interface UserInfoService {

    /**
     * 增加用户信息
     *
     * @param userInfo 用户信息
     */
    void addUserInfo(UserInfo userInfo);

    /**
     * 获取用户信息
     *
     * @param id 用户ID
     * @return 用户信息
     */
    UserInfo getByName(Integer id);

    /**
     * 修改用户信息
     *
     * @param userInfo 用户信息
     * @return 用户信息
     */
    UserInfo updateUserInfo(UserInfo userInfo);

    /**
     * 删除用户信息
     *
     * @param id 用户ID
     */
    void deleteById(Integer id);

}
```

**服务实现类**

```java
import lombok.extern.slf4j.Slf4j;
import mydlq.club.example.entity.UserInfo;
import mydlq.club.example.service.UserInfoService;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import java.util.HashMap;

@Slf4j
@Service
@CacheConfig(cacheNames = "caffeineCacheManager")
public class UserInfoServiceImpl implements UserInfoService {

    /**
     * 模拟数据库存储数据
     */
    private HashMap<Integer, UserInfo> userInfoMap = new HashMap<>();

    @Override
    @CachePut(key = "#userInfo.id")
    public void addUserInfo(UserInfo userInfo) {
        log.info("create");
        userInfoMap.put(userInfo.getId(), userInfo);
    }

    @Override
    @Cacheable(key = "#id")
    public UserInfo getByName(Integer id) {
        log.info("get");
        return userInfoMap.get(id);
    }

    @Override
    @CachePut(key = "#userInfo.id")
    public UserInfo updateUserInfo(UserInfo userInfo) {
        log.info("update");
        if (!userInfoMap.containsKey(userInfo.getId())) {
            return null;
        }
        // 取旧的值
        UserInfo oldUserInfo = userInfoMap.get(userInfo.getId());
        // 替换内容
        if (!StringUtils.isEmpty(oldUserInfo.getAge())) {
            oldUserInfo.setAge(userInfo.getAge());
        }
        if (!StringUtils.isEmpty(oldUserInfo.getName())) {
            oldUserInfo.setName(userInfo.getName());
        }
        if (!StringUtils.isEmpty(oldUserInfo.getSex())) {
            oldUserInfo.setSex(userInfo.getSex());
        }
        // 将新的对象存储，更新旧对象信息
        userInfoMap.put(oldUserInfo.getId(), oldUserInfo);
        // 返回新对象信息
        return oldUserInfo;
    }

    @Override
    @CacheEvict(key = "#id")
    public void deleteById(Integer id) {
        log.info("delete");
        userInfoMap.remove(id);
    }

}
```

### 5、测试的 Controller 类

```java
import mydlq.club.example.entity.UserInfo;
import mydlq.club.example.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping
public class UserInfoController {

    @Autowired
    private UserInfoService userInfoService;

    @GetMapping("/userInfo/{id}")
    public Object getUserInfo(@PathVariable Integer id) {
        UserInfo userInfo = userInfoService.getByName(id);
        if (userInfo == null) {
            return "没有该用户";
        }
        return userInfo;
    }

    @PostMapping("/userInfo")
    public Object createUserInfo(@RequestBody UserInfo userInfo) {
        userInfoService.addUserInfo(userInfo);
        return "SUCCESS";
    }

    @PutMapping("/userInfo")
    public Object updateUserInfo(@RequestBody UserInfo userInfo) {
        UserInfo newUserInfo = userInfoService.updateUserInfo(userInfo);
        if (newUserInfo == null){
            return "不存在该用户";
        }
        return newUserInfo;
    }

    @DeleteMapping("/userInfo/{id}")
    public Object deleteUserInfo(@PathVariable Integer id) {
        userInfoService.deleteById(id);
        return "SUCCESS";
    }

}
```

### 6、创建启动类开启缓存

在启动类中加上 @EnableCaching 注解开启缓存。

```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@EnableCaching
@SpringBootApplication
public class Application2 {

    public static void main(String[] args) {
        SpringApplication.run(Application2.class, args);
    }

}
```



## 六、SpringBoot 集成 Caffeine 方式三（新）

> 2023年10月12日21:40

### 1、@Cacheable相关注解

#### 1.1 相关依赖

如果要使用`@Cacheable`注解，需要引入相关依赖，并在任一配置类文件上添加`@EnableCaching`注解

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-cache</artifactId>
</dependency>
```

#### 1.2 常用注解

- **@Cacheable** ：表示该方法支持缓存。当调用被注解的方法时，如果对应的键已经存在缓存，则不再执行方法体，而从缓存中直接返回。当方法返回null时，将不进行缓存操作。
- **@CachePut** ：表示执行该方法后，其值将作为最新结果更新到缓存中，每次都会执行该方法。
- **@CacheEvict** ：表示执行该方法后，将触发缓存清除操作。
- **@Caching** ：用于组合前三个注解，例如：

```java
@Caching(cacheable = @Cacheable("CacheConstants.GET_USER"),
         evict = {@CacheEvict("CacheConstants.GET_DYNAMIC",allEntries = true)}
public User find(Integer id) {
    return null;
}
```

#### 1.3 常用注解属性

- **cacheNames/value** ：缓存组件的名字，即cacheManager中缓存的名称。
- **key** ：缓存数据时使用的key。默认使用方法参数值，也可以使用SpEL表达式进行编写。
- **keyGenerator** ：和key二选一使用。
- **cacheManager** ：指定使用的缓存管理器。
- **condition** ：在方法执行开始前检查，在符合condition的情况下，进行缓存
- **unless** ：在方法执行完成后检查，在符合unless的情况下，不进行缓存
- **sync** ：是否使用同步模式。若使用同步模式，在多个线程同时对一个key进行load时，其他线程将被阻塞。

#### 1.4 缓存同步模式

sync开启或关闭，在Cache和LoadingCache中的表现是不一致的：

- Cache中，sync表示是否需要所有线程同步等待
- LoadingCache中，sync表示在读取不存在/已驱逐的key时，是否执行被注解方法

### 2、实战

#### 2.1 引入依赖

```
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-cache</artifactId>
</dependency>

<dependency>
    <groupId>com.github.ben-manes.caffeine</groupId>
    <artifactId>caffeine</artifactId>
</dependency>
```

##### 2.2 缓存常量CacheConstants

创建缓存常量类，把公共的常量提取一层，复用，这里也可以通过配置文件加载这些数据，例如`@ConfigurationProperties`和`@Value`

```java
public class CacheConstants {
    /**
     * 默认过期时间（配置类中我使用的时间单位是秒，所以这里如 3*60 为3分钟）
     */
    public static final int DEFAULT_EXPIRES = 3 * 60;
    public static final int EXPIRES_5_MIN = 5 * 60;
    public static final int EXPIRES_10_MIN = 10 * 60;

    public static final String GET_USER = "GET:USER";
    public static final String GET_DYNAMIC = "GET:DYNAMIC";

}
```

#### 2.3 缓存配置类CacheConfig

```java
@Configuration
@EnableCaching
public class CacheConfig {
    /**
     * Caffeine配置说明：
     * initialCapacity=[integer]: 初始的缓存空间大小
     * maximumSize=[long]: 缓存的最大条数
     * maximumWeight=[long]: 缓存的最大权重
     * expireAfterAccess=[duration]: 最后一次写入或访问后经过固定时间过期
     * expireAfterWrite=[duration]: 最后一次写入后经过固定时间过期
     * refreshAfterWrite=[duration]: 创建缓存或者最近一次更新缓存后经过固定的时间间隔，刷新缓存
     * weakKeys: 打开key的弱引用
     * weakValues：打开value的弱引用
     * softValues：打开value的软引用
     * recordStats：开发统计功能
     * 注意：
     * expireAfterWrite和expireAfterAccess同事存在时，以expireAfterWrite为准。
     * maximumSize和maximumWeight不可以同时使用
     * weakValues和softValues不可以同时使用
     */
    @Bean
    public CacheManager cacheManager() {
        SimpleCacheManager cacheManager = new SimpleCacheManager();
        List<CaffeineCache> list = new ArrayList<>();
        //循环添加枚举类中自定义的缓存，可以自定义
        for (CacheEnum cacheEnum : CacheEnum.values()) {
            list.add(new CaffeineCache(cacheEnum.getName(),
                    Caffeine.newBuilder()
                            .initialCapacity(50)
                            .maximumSize(1000)
                            .expireAfterAccess(cacheEnum.getExpires(), TimeUnit.SECONDS)
                            .build()));
        }
        cacheManager.setCaches(list);
        return cacheManager;
    }
}
```

#### 2.4 调用缓存

这里要注意的是Cache和@Transactional一样也使用了代理，类内调用将失效

```java
/**
 * value：缓存key的前缀。
 * key：缓存key的后缀。
 * sync：设置如果缓存过期是不是只放一个请求去请求数据库，其他请求阻塞，默认是false（根据个人需求）。
 * unless：不缓存空值,这里不使用，会报错
 * 查询用户信息类
 * 如果需要加自定义字符串，需要用单引号
 * 如果查询为null，也会被缓存
 */
@Cacheable(value = CacheConstants.GET_USER,key = "'user'+#userId",sync = true)
@CacheEvict
public UserEntity getUserByUserId(Integer userId){
    UserEntity userEntity = userMapper.findById(userId);
    System.out.println("查询了数据库");
    return userEntity;
}
```

