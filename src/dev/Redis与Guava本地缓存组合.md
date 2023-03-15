---
author: xlc520
title: Redis与Guava本地缓存组合
description: 
date: 2023-01-24
category: Java
tag: 
- Java
- Redis
- Guava
article: true
timeline: true
icon: java
---



# Redis与Guava本地缓存组合

![Redis与本地缓存组合](https://static.xlc520.ml/blogImage/98d8c80f6ae24256832ae271c74d81f2tplv-k3u1fbpfcp-zoom-crop-mark3024302430241702.webp)

## 前言

- 我们开发中经常用到Redis作为缓存，将高频数据放在Redis中能够提高业务性能，降低MySQL等关系型数据库压力，甚至一些系统使用Redis进行数据持久化，Redis松散的文档结构非常适合业务系统开发，在精确查询，数据统计业务有着很大的优势。但是高频数据流处理系统中，Redis的压力也会很大，同时I/0开销才是耗时的主要原因，这时候为了降低Redis读写压力我们可以用到本地缓存，Guava为我们提供了优秀的本地缓存API，包含了过期策略等等，编码难度低，个人非常推荐。

## 设计示例

## Redis懒加载缓存

> 数据在新增到MySQL不进行缓存，在精确查找进行缓存，做到查询即缓存，不查询不缓存

### 流程图

![Redis懒加载缓存.png](https://static.xlc520.ml/blogImage/98a4b375d0444e589b217a94065219aatplv-k3u1fbpfcp-zoom-in-crop-mark4536000.png)

### 代码示例

```java
// 伪代码示例 Xx代表你的的业务对象 如User Goods等等
public class XxLazyCache {

    @Autowired
    private RedisTemplate<String, Xx> redisTemplate;
    
    @Autowired
    private XxService xxService;// 你的业务service
    
    /**
     * 查询 通过查询缓存是否存在驱动缓存加载 建议在前置业务保证id对应数据是绝对存在于数据库中的
     */
    public Xx getXx(int id) {
        // 1.查询缓存里面有没有数据
        Xx xxCache = getXxFromCache(id);
        if(xxCache != null) {
            return xxCache;// 卫语句使代码更有利于阅读
        }
        // 2.查询数据库获取数据 我们假定到业务这一步，传过来的id都在数据库中有对应数据
        Xx xx = xxService.getXxById(id);
        // 3.设置缓存、这一步相当于Redis缓存懒加载，下次再查询此id，则会走缓存
        setXxFromCache(xx);
        return xx;
        }
    }
    
    /**
     * 对xx数据进行修改或者删除操作 操作数据库成功后 删除缓存
     * 删除请求 - 删除数据库数据 删除缓存
     * 修改请求 - 更新数据库数据 删除缓存 下次在查询时候就会从数据库拉取新的数据到缓存中
     */
    public void deleteXxFromCache(long id) {
        String key = "Xx:" + xx.getId();
        redisTemplate.delete(key);
    }
    
    private void setXxFromCache(Xx xx) {
        String key = "Xx:" + xx.getId();
        redisTemplate.opsForValue().set(key, xx);
    }
    
    private Xx getXxFromCache(int id) {
        // 通过缓存前缀拼装唯一主键作为缓存Key 如Xxx信息 就是Xxx:id
        String key = "Xx:" + id;
        return redisTemplate.opsForValue().get(key);
    }
    
}
// 业务类
public class XxServie {
    @Autowired
    private XxLazyCache xxLazyCache;
    // 查询数据库
    public Xx getXxById(long id) {
        // 省略实现
        return xx;
    }
    
    public void updateXx(Xx xx) {
        // 更新MySQL数据 省略
        // 删除缓存
        xxLazyCache.deleteXxFromCache(xx.getId());
    }
    
    public void deleteXx(long id) {
        // 删除MySQL数据 省略
        // 删除缓存
        xxLazyCache.deleteXxFromCache(xx.getId());
    }
}
// 实体类
@Data
public class Xx {
    // 业务主键
    private Long id;
    // ...省略
}
```

### 优点

- 保证最小的缓存量满足精确查询业务，避免冷数据占用宝贵的内存空间
- 对增删改查业务入侵小、删除即同步
- 可插拔，对于老系统升级，历史数据无需在启动时初始化缓存

### 缺点

- 数据量需可控，在无限增长业务场景不适用
- 在微服务场景不利于全局缓存应用

### 总结

- 空间最小化
- 满足精确查询场景
- 总数据量可控推荐使用
- 微服务场景不适用

## Redis结合本地缓存

> 微服务场景下，多个微服务使用一个大缓存，流数据业务下，高频读取缓存对Redis压力很大，我们使用本地缓存结合Redis缓存使用，降低Redis压力，同时本地缓存没有连接开销，性能更优

### 流程图

![本地缓存.png](https://static.xlc520.ml/blogImage/1028922154004ccc9c2811c75325efdctplv-k3u1fbpfcp-zoom-in-crop-mark4536000.png)

### 业务场景

> 在流处数处理过程中，微服务对多个设备上传的数据进行处理，每个设备有一个code,流数据的频率高，在消息队列发送过程中使用分区发送，我们需要为设备code生成对应的自增号，用自增号对kafka中topic分区数进行取模，这样如果有10000台设备，自增号就是0~9999，在取模后就进行分区发送就可以做到每个分区均匀分布，这个自增号我们使用redis的自增数生成，生成后放到redis的hash结构进行缓存，每次来一个设备，我们就去这个hash缓存中取，没有取到就使用自增数生成一个，然后放到redis的hash缓存中，这时候每个设备的自增数一经生成是不会再发生改变的，我们就想到使用本地缓存进行优化，避免高频的调用redis去获取，降低redis压力，下面链接为我写的关于kafka分区消费的文章，大家可以去看看 [Kafka分区发送及消费实战](https://juejin.cn/post/6995746569580445709)

### 代码示例

```java
/**
 * 此缓存演示如何结合redis自增数 hash 本地缓存使用进行设备自增数的生成、缓存、本地缓存
 * 本地缓存使用Guava Cache
 */
public class DeviceIncCache {

    /**
     * 本地缓存
     */
    private Cache<String, Integer> localCache = CacheBuilder.newBuilder()
        .concurrencyLevel(16) // 并发级别
        .initialCapacity(1000) // 初始容量
        .maximumSize(10000) // 缓存最大长度
        .expireAfterAccess(1, TimeUnit.HOURS) // 缓存1小时没被使用就过期
        .build();

    @Autowired
    private RedisTemplate<String, Integer> redisTemplate;
    
    /**
     * redis自增数缓存的key
     */
    private static final String DEVICE_INC_COUNT = "device_inc_count";
    
    /**
     * redis设备编码对应自增数的hash缓存key
     */
    private static final String DEVICE_INC_VALUE = "device_inc_value";
    
    /**
     * 获取设备自增数
     */
    public int getInc(String deviceCode){
        // 1.从本地缓存获取
        Integer inc = localCache.get(deviceCode);
        if(inc != null) {
            return inc;
        }
        // 2.本地缓存未命中，从redis的hash缓存获取
        inc = (Integer)redisTemplate.opsForHash().get(DEVICE_INC_VALUE, deviceCode);
        // 3. redis的hash缓存中没有，说明是新设备，先为设备生成一个自增号
        if(inc == null) {
            inc = redisTemplate.opsForValue().increment(DEVICE_INC_COUNT).intValue;
            // 添加到redis hash缓存
            redisTemplate.opsForHash().put(DEVICE_INC_VALUE, deviceCode, inc);
        }
        // 4.添加到本地缓存
        localCache.put(deviceCode, inc);
        // 4.返回自增数
        return inc;
    }
    
}
```

### 优点

- redis保证数据可持久，本地缓存保证超高的读取性能，微服务共用redis大缓存的场景能有效降低redis压力
- guava作为本地缓存，提供了丰富的api，过期策略，最大容量，保证服务内存可控，冷数据不会长期占据内存空间
- 服务重启导致的本地缓存清空不会影响业务进行
- 微服务及分布式场景使用，分布式情况下每个服务实例只会缓存自己接入的那一部分设备的自增号，本地内存空间最优
- 在示例业务中，自增数满足了分布区发送的均匀分布需求，也可以满足统计设备接入数目的业务场景，一举两得

### 缺点

- 增加编码复杂度，不直接
- 只适用于缓存内容只增不改的场景

### 总结

- 本地缓存空间可控，过期策略优
- 适用于微服务及分布式场景
- 缓存内容不能发生改变
- 性能优

## 后记

> redis提供了丰富的数据类型及api，非常适合业务系统开发，统计计数（increment，decrement），标记位（bitmap）,松散数据（hash）,先进先出、队列式读取（list）；guava缓存作为本地缓存，能够高效的读取的同时，提供了大量api方便我们控制本地缓存的数据量及冷数据淘汰；我们充分的学习这些特性能够帮助我们在业务开发中更加轻松灵活，在空间与时间上找到一个平衡点。