---
author: xlc520
title: 本地缓存Caffeine
description: 
date: 2023-01-11
category: Java
tag: Java
article: true
timeline: true
icon: java
---



# 本地缓存Caffeine



## 教程一

结论：**Caffeine 是目前性能最好的本地缓存，因此，在考虑使用本地缓存时，直接选择 Caffeine 即可。**

先看一个小例子，明白如何创建一个 Caffeine 缓存实例。

```java
Caffeine caffeine = Caffeine.newBuilder()
        .initialCapacity(3)
        .maximumSize(4);
Cache cache = caffeine.build();
cache.put("aa", 13);
System.out.println(cache.getIfPresent("aa"));
```

Caffeine 相当于一个缓存工厂，可以创建出多个缓存实例 Cache。这些缓存实例都继承了 Caffeine 的参数配置，Caffeine 是如何配置的，这些缓存实例就具有什么样的特性和功能。

## 1. Caffeine 可以设置哪些缓存属性呢？

### 1. 缓存初始容量

**initialCapacity**：整数，表示能存储多少个缓存对象。

为什么要设置初始容量呢？因为如果提前能预估缓存的使用大小，那么可以设置缓存的初始容量，以免缓存不断地进行扩容，致使效率不高。

### 2. 最大容量 最大权重

**maximumSize**：最大容量，如果缓存中的数据量超过这个数值，Caffeine 会有一个异步线程来专门负责清除缓存，按照指定的清除策略来清除掉多余的缓存。

> 注意：比如最大容量是 2，此时已经存入了2个数据了，此时存入第3个数据，触发异步线程清除缓存，在清除操作没有完成之前，缓存中仍然有3个数据，且 3 个数据均可读，缓存的大小也是 3，只有当缓存操作完成了，缓存中才只剩 2 个数据，至于清除掉了哪个数据，这就要看清除策略了。

**maximumWeight**：最大权重，存入缓存的每个元素都要有一个权重值，当缓存中所有元素的权重值超过最大权重时，就会触发异步清除。

下面给个例子：

```java
class Person{
        Integer age;
        String name;
}
Caffeine<String, Person> caffeine = Caffeine.newBuilder()
            .maximumWeight(30)
            .weigher((String key, Person value)-> value.getAge());
Cache<String, Person> cache = caffeine.build();
cache.put("one", new Person(12, "one"));
cache.put("two", new Person(18, "two"));
cache.put("three", new Person(1, "three"));
Thread.sleep(10);
System.out.println(cache.estimatedSize());
System.out.println(cache.getIfPresent("two"));
```

运行结果：

```
2
null
```

要使用权重来衡量的话，就要规定权重是什么，每个元素的权重怎么计算，weigher 方法就是设置权重规则的，它的参数是一个函数，函数的参数是 key 和 value，函数的返回值就是元素的权重，比如上述代码中，caffeine 设置了最大权重值为 30，然后将每个 Person 对象的 age 年龄作为权重值，所以整个意思就是：**缓存中存储的是 Person 对象，但是限制所有对象的 age 总和不能超过 30，否则就触发异步清除缓存。**

特别要注意一点：最大容量 和 最大权重 只能二选一作为缓存空间的限制。

### 3. 缓存状态

**3.1 默认的缓存状态收集器 CacheStats**

默认情况下，缓存的状态会用一个 CacheStats 对象记录下来，通过访问 CacheStats 对象就可以知道当前缓存的各种状态指标，那究竟有哪些指标呢？

先说一下什么是“加载”，当查询缓存时，缓存未命中，那就需要去第三方数据库中查询，然后将查询出的数据先存入缓存，再返回给查询者，这个过程就是加载。

- **totalLoadTime**：总共加载时间。
- **loadFailureRate**：加载失败率，= 总共加载失败次数 / 总共加载次数
- **averageLoadPenalty**：平均加载时间，单位-纳秒
- **evictionCount**：被淘汰出缓存的数据总个数
- **evictionWeight**：被淘汰出缓存的那些数据的总权重
- **hitCount**：命中缓存的次数
- **hitRate**：命中缓存率
- **loadCount**：加载次数
- **loadFailureCount**：加载失败次数
- **loadSuccessCount**：加载成功次数
- **missCount**：未命中次数
- **missRate**：未命中率
- **requestCount**：用户请求查询总次数

CacheStats 类包含了 2 个方法，了解一下：

- `CacheStats minus(@Nonnull CacheStats other)`：当前 CacheStats 对象的各项指标减去参数 other 的各项指标，差值形成一个新的 CacheStats 对象。
- `CacheStats plus(@Nonnull CacheStats other)`：当前 CacheStats 对象的各项指标加上参数 other 的各项指标，和值形成一个新的 CacheStats 对象。

举个例子说明：

```java
Caffeine<String, Person> caffeine = Caffeine.newBuilder()
            .maximumWeight(30)
            .recordStats()
            .weigher((String key, Person value)-> value.getAge());
Cache<String, Person> cache = caffeine.build();
cache.put("one", new Person(12, "one"));
cache.put("two", new Person(18, "two"));
cache.put("three", new Person(1, "three"));
CacheStats stats = cache.stats();

System.out.println(stats.hitCount());
```

**3.2 自定义的缓存状态收集器**

自定义的缓存状态收集器的作用：每当缓存有操作发生时，不管是查询，加载，存入，都会使得缓存的某些状态指标发生改变，哪些状态指标发生了改变，就会自动触发收集器中对应的方法执行，如果我们在方法中自定义的代码是收集代码，比如将指标数值发送到 kafka，那么其它程序从kafka读取到数值，再进行分析与可视化展示，就能实现对缓存的实时监控了。

收集器接口为 StatsCounter ，我们只需实现这个接口的所有抽象方法即可。下面举例说明。

```java
public class MyStatsCounter implements StatsCounter {
    @Override
    public void recordHits(int i) {
        System.out.println("命中次数：" + i);
    }

    @Override
    public void recordMisses(int i) {
        System.out.println("未命中次数：" + i);
    }

    @Override
    public void recordLoadSuccess(long l) {
        System.out.println("加载成功次数：" + l);
    }

    @Override
    public void recordLoadFailure(long l) {
        System.out.println("加载失败次数：" + l);
    }

    @Override
    public void recordEviction() {
        System.out.println("因为缓存大小限制，执行了一次缓存清除工作");
    }

    @Override
    public void recordEviction(int weight) {
        System.out.println("因为缓存权重限制，执行了一次缓存清除工作，清除的数据的权重为：" + weight);
    }

    @Override
    public CacheStats snapshot() {
        return null;
    }
}
```

上述代码为自定义的缓存状态收集器，收集到的状态指标只是简单地打印出来，snapshot 方法有什么作用，暂时不清楚。

特别需要注意的是：收集器中那些方法得到的状态值，只是当前缓存操作所产生的结果，比如当前 `cache.getIfPresent() `查询一个值，查询到了，说明命中了，但是 `recordHits(int i)` 方法的参数 i = 1，因为本次操作命中了 1 次。

再将收集器与某个缓存挂钩，如下：

```java
MyStatsCounter myStatsCounter = new MyStatsCounter();
Caffeine<String, Person> caffeine = Caffeine.newBuilder()
        .maximumWeight(30)
        .recordStats(()->myStatsCounter)
        .weigher((String key, Person value)-> value.getAge());
Cache<String, Person> cache = caffeine.build();
cache.put("one", new Person(12, "one"));
cache.put("two", new Person(18, "two"));
cache.put("three", new Person(1, "three"));
cache.getIfPresent("ww");
CacheStats stats = myStatsCounter.snapshot();
Thread.sleep(1000);
```

最后的执行结果为：

```
未命中次数：1
因为缓存权重限制，执行了一次缓存清除工作，清除的数据的权重为：18
```

### 4. 线程池

Caffeine 缓冲池总有一些异步任务要执行，所以它包含了一个线程池，用于执行这些异步任务，默认使用的是 `ForkJoinPool.commonPool()` 线程池，个人觉得没有必要去自定义线程池，或者使用其它的线程池，因为 Caffeine 的作者在设计的时候就考虑了线程池的选择，既然别人选择了，就有一定道理。

如果一定要用其它的线程池，可以通过 `executor() `方法设置，方法参数是一个 线程池对象。

### 5. 数据过期策略

**5.1 expireAfterAccess**

最后一次访问之后，隔多久没有被再次访问的话，就过期。访问包括了 读 和 写。举个例子：

```java
Caffeine<String, Person> caffeine = Caffeine.newBuilder()
        .maximumWeight(30)
        .expireAfterAccess(2, TimeUnit.SECONDS)
        .weigher((String key, Person value)-> value.getAge());
Cache<String, Person> cache = caffeine.build();
cache.put("one", new Person(12, "one"));
cache.put("two", new Person(18, "two"));
Thread.sleep(3000);
System.out.println(cache.getIfPresent("one"));
System.out.println(cache.getIfPresent("two"));
```

运行结果：

```
null
null
```

`expireAfterAccess` 包含两个参数，第二个参数是时间单位，第一个参数是时间大小，比如上述代码中设置过期时间为 2 秒，在过了 3 秒之后，再次访问数据，发现数据不存在了，即触发过期清除了。

**5.2 expireAfterWrite**

某个数据在多久没有被更新后，就过期。举个例子

```java
Caffeine<String, Person> caffeine = Caffeine.newBuilder()
        .maximumWeight(30)
        .expireAfterWrite(2, TimeUnit.SECONDS)
        .weigher((String key, Person value)-> value.getAge());
Cache<String, Person> cache = caffeine.build();
cache.put("one", new Person(12, "one"));
cache.put("two", new Person(18, "two"));
Thread.sleep(1000);
System.out.println(cache.getIfPresent("one").getName());
Thread.sleep(2000);
System.out.println(cache.getIfPresent("one"));
```

运行结果：

```
one
null
```

只能是被更新，才能延续数据的生命，即便是数据被读取了，也不行，时间一到，也会过期。

**5.2 expireAfter**

实话实说，关于这个设置项，官网没有说明白，网上其它博客更是千篇一律，没有一个讲明白的。此处简单讲讲我个人的测试用例与理解，如果有误，欢迎评论指正。

```java
Caffeine<String, Person> caffeine = Caffeine.newBuilder()
        .maximumWeight(30)
        .expireAfter(new Expiry<String, Person>() {
            @Override
            public long expireAfterCreate(String s, Person person, long l) {
                if(person.getAge() > 60){ //首次存入缓存后，年龄大于 60 的，过期时间为 4 秒
                    return 4000000000L;
                }
                return 2000000000L; // 否则为 2 秒
            }

            @Override
            public long expireAfterUpdate(String s, Person person, long l, long l1) {
                if(person.getName().equals("one")){ // 更新 one 这个人之后，过期时间为 8 秒
                    return 8000000000L;
                }
                return 4000000000L; // 更新其它人后，过期时间为 4 秒
            }

            @Override
            public long expireAfterRead(String s, Person person, long l, long l1) {
                return 3000000000L; // 每次被读取后，过期时间为 3 秒
            }
        })
        .weigher((String key, Person value)-> value.getAge());
Cache<String, Person> cache = caffeine.build();
```

expireAfter 方法的参数是一个 Expiry 对象，Expiry 是一个接口，上述代码用了匿名类。需要实现 Expiry 的三个方法。

- `expireAfterCreate(String s, Person person, long l) `：此方法为数据`<s , person>` 创建之后，过期时间是多久（可以理解为生命周期），单位为纳秒，方法的返回值就是过期时间，这个时间设置为多久，怎么设置，可以自定义的，比如上述代码，60 岁以上的过期时间为 4 秒，如果 4 秒内数据没有被操作，就过期。另外还有一个参数 long l，l 表示创建时间的系统时间戳，单位为纳秒。
- `expireAfterUpdate(String s, Person person, long l, long l1)`：此方法表示更新某个数据后，过期时间是多久（刷新生命周期），个人认为：参数 l 表示更新前的系统时间戳，l1 表示更新成功后的系统时间戳，因为在多线程下，更新操作可能会阻塞。
- `expireAfterRead(String s, Person person, long l, long l1)` ： 与 `expireAfterUpdate` 同理。

### 6. refreshAfterWrite 延迟刷新

```
refreshAfterWrite(long duration, TimeUnit unit)
```

写操作完成后多久才将数据刷新进缓存中，两个参数只是用于设置时间长短的。

只适用于 `LoadingCache` 和 `AsyncLoadingCache`，如果刷新操作没有完成，读取的数据只是旧数据。 同理，不想写了。

### 7. removalListener 清除、更新监听

当缓存中的数据发送更新，或者被清除时，就会触发监听器，在监听器里可以自定义一些处理手段，比如打印出哪个数据被清除，原因是什么。这个触发和监听的过程是异步的，就是说可能数据都被删除一小会儿了，监听器才监听到。

举个例子：

```java
MyStatsCounter myStatsCounter = new MyStatsCounter();
Caffeine<String, Person> caffeine = Caffeine.newBuilder()
        .maximumWeight(30)
        .removalListener((String key, Person value, RemovalCause cause)->{
            System.out.println("被清除人的年龄：" + value.getAge() + ";  清除的原因是:" + cause);
        })
        .weigher((String key, Person value)-> value.getAge());
Cache<String, Person> cache = caffeine.build();
cache.put("one", new Person(12, "one"));
cache.put("two", new Person(18, "two"));
cache.put("one", new Person(14, "one"));
cache.invalidate("one");
cache.put("three", new Person(31, "three"));
Thread.sleep(2000);
```

运行结果：

```
被清除人的年龄：12;  清除的原因是:REPLACED
被清除人的年龄：14;  清除的原因是:EXPLICIT
被清除人的年龄：18;  清除的原因是:SIZE
```

`removalListener` 方法的参数是一个 `RemovalListener` 对象，但是可以函数式传参，如上述代码，当数据被更新或者清除时，会给监听器提供三个内容，（键，值，原因）分别对应代码中的三个参数，（键，值）都是更新前，清除前的旧值， 这样可以了解到清除的详细了。

清除的原因有 5 个，存储在枚举类 RemovalCause 中：

- `EXPLICIT` ： 表示显式地调用删除操作，直接将某个数据删除。
- `REPLACED`：表示某个数据被更新。
- `EXPIRED`：表示因为生命周期结束（过期时间到了），而被清除。
- `SIZE`：表示因为缓存空间大小受限，总权重受限，而被清除。
- `COLLECTED` ： 这个不明白。

### 8. 缓存的数据使用弱引用，软引用

AsyncCache 缓存不支持软引用和弱引用。

- `weakKeys()`：将缓存的 key 使用弱引用包装起来，只要 GC 的时候，就能被回收。
- `weakValues()`：将缓存的 value 使用弱引用包装起来，只要 GC 的时候，就能被回收。
- `softValues()`：将缓存的 value使用软引用包装起来，只要 GC 的时候，有必要，就能被回收。

关于软引用，弱引用，强引用，虚引用，可以参考：

> https://blog.csdn.net/dgh112233/article/details/107288545

因此，弱引用 ，软引用的设置，只是为了方便回收空间，节省空间，但是使用的时候注意一点，缓存查询时，是用 == 来判断两个 key 是否相等，比较的是地址，不是 key 本身的内容，很容易造成一种现象：命名 key 是对的，但就是无法命中，因为 key 的内容相等，但是地址却不同，会被认为是两个 key。

### 9. 时间源 ticker

不了解，感觉默认用系统的时钟就好了。

### 10. 同步监听器

之前的 `removalListener` 是异步监听，此处的 writer 方法可以设置同步监听器，同步监听器一个实现了接口 CacheWriter 的实例化对象，我们需要自定义接口的实现类，比如：

```java
public class MyCacheWriter implements CacheWriter<String, Application.Person> {
    @Override
    public void write(String s, Application.Person person) {
        System.out.println("新增/更新了一个新数据：" + person.getName());
    }

    @Override
    public void delete(String s, Application.Person person, RemovalCause removalCause) {
        System.out.println("删除了一个数据：" + person.getName());
    }
}
```

关键是要实现 CacheWriter 接口的两个方法，当新增，更新某个数据时，会同步触发 write 方法的执行。当删除某个数据时，会触发 delete 方法的执行。

```java
Caffeine<String, Person> caffeine = Caffeine.newBuilder()
        .maximumWeight(30)
        .writer(new MyCacheWriter())
        .weigher((String key, Person value)-> value.getAge());
Cache<String, Person> cache = caffeine.build();
cache.put("one", new Person(12, "one"));
cache.put("two", new Person(18, "two"));
cache.invalidate("two");
```

运行结果：

```
新增/更新了一个新数据：one
新增/更新了一个新数据：two
删除了一个数据：two
```

## 2. Cache 可以有的操作

- `V getIfPresent(K key)` ：如果缓存中 key 存在，则获取 value，否则返回 null。
- `void put( K key, V value)`：存入一对数据 `<key, value>`。
- `Map<K, V> getAllPresent(Iterable<?> var1)` ：参数是一个迭代器，表示可以批量查询缓存。
- `void putAll( Map<? extends K, ? extends V> var1)`： 批量存入缓存。
- `void invalidate(K var1)`：删除某个 key 对应的数据。
- `void invalidateAll(Iterable<?> var1)`：批量删除数据。
- `void invalidateAll()`：清空缓存。
- `long estimatedSize()`：返回缓存中数据的个数。
- `CacheStats stats()`：返回缓存当前的状态指标集。
- `ConcurrentMap<K, V> asMap()`：将缓存中所有的数据构成一个 map。
- `void cleanUp()`：会对缓存进行整体的清理，比如有一些数据过期了，但是并不会立马被清除，所以执行一次 cleanUp 方法，会对缓存进行一次检查，清除那些应该清除的数据。
- `V get( K var1, Function<? super K, ? extends V> var2)`：第一个参数是想要获取的 key，第二个参数是函数，例子如下：

```java
Caffeine<String, Person> caffeine = Caffeine.newBuilder()
        .maximumWeight(30)
        .weigher((String key, Person value)-> value.getAge());
Cache<String, Person> cache = caffeine.build();
cache.put("one", new Person(12, "one"));
cache.get("hello", (k)-> new Person(13, k));
System.out.println(cache.getIfPresent("hello").getName());
```

可以着重考虑一下第二个参数的写法，如果写成从数据库查询的话，那就很完整了。

还有另外两种缓存：LoadingCache， AsyncLoadingCache。







## 教程二



## 一、Caffeine介绍

### 1、缓存介绍

缓存(Cache)在代码世界中无处不在。从底层的CPU多级缓存，到客户端的页面缓存，处处都存在着缓存的身影。缓存从本质上来说，是一种空间换时间的手段，通过对数据进行一定的空间安排，使得下次进行数据访问时起到加速的效果。就Java而言，其常用的缓存解决方案有很多，例如数据库缓存框架EhCache，分布式缓存Memcached等，这些缓存方案实际上都是为了提升吞吐效率，避免持久层压力过大。

对于常见缓存类型而言，可以分为**本地缓存**以及**分布式缓存**两种，Caffeine就是一种优秀的本地缓存，而Redis可以用来做分布式缓存

### 2、Caffeine介绍

> Caffeine官方：https://github.com/ben-manes/caffeine

Caffeine是基于Java 1.8的高性能本地缓存库，由Guava改进而来，而且在Spring5开始的默认缓存实现就将Caffeine代替原来的Google Guava，官方说明指出，其缓存命中率已经接近最优值。实际上Caffeine这样的本地缓存和ConcurrentMap很像，即支持并发，并且支持O(1)时间复杂度的数据存取。二者的主要区别在于：

- ConcurrentMap将存储所有存入的数据，直到你显式将其移除；
- Caffeine将通过给定的配置，自动移除“不常用”的数据，以保持内存的合理占用。

因此，一种更好的理解方式是：**Cache是一种带有存储和移除策略的Map**。

## 二、Caffeine基础

使用Caffeine，需要在工程中引入如下依赖

```xml
<dependency>
    <groupId>com.github.ben-manes.caffeine</groupId>
    <artifactId>caffeine</artifactId>
    <!--https://mvnrepository.com/artifact/com.github.ben-manes.caffeine/caffeinez找最新版-->
    <version>3.0.5</version>
</dependency>
```

### 1、缓存加载策略

#### 1.1 Cache手动创建

最普通的一种缓存，无需指定加载方式，需要手动调用`put()`进行加载。需要注意的是`put()`方法对于已存在的key将进行覆盖，这点和Map的表现是一致的。在获取缓存值时，如果想要在缓存值不存在时，原子地将值写入缓存，则可以调用`get(key, k -> value)`方法，该方法将避免写入竞争。调用`invalidate()`方法，将手动移除缓存。

在多线程情况下，当使用`get(key, k -> value)`时，如果有另一个线程同时调用本方法进行竞争，则后一线程会被阻塞，直到前一线程更新缓存完成；而若另一线程调用`getIfPresent()`方法，则会立即返回null，不会被阻塞。

```java
Cache<Object, Object> cache = Caffeine.newBuilder()
    //初始数量
    .initialCapacity(10)
    //最大条数
    .maximumSize(10)
    //expireAfterWrite和expireAfterAccess同时存在时，以expireAfterWrite为准
    //最后一次写操作后经过指定时间过期
    .expireAfterWrite(1, TimeUnit.SECONDS)
    //最后一次读或写操作后经过指定时间过期
    .expireAfterAccess(1, TimeUnit.SECONDS)
    //监听缓存被移除
    .removalListener((key, val, removalCause) -> { })
    //记录命中
    .recordStats()
    .build();

cache.put("1","张三");
//张三
System.out.println(cache.getIfPresent("1"));
//存储的是默认值
System.out.println(cache.get("2",o -> "默认值"));
```

#### 1.2 Loading Cache自动创建

LoadingCache是一种自动加载的缓存。其和普通缓存不同的地方在于，当缓存不存在/缓存已过期时，若调用`get()`方法，则会自动调用`CacheLoader.load()`方法加载最新值。调用`getAll()`方法将遍历所有的key调用`get()`，除非实现了`CacheLoader.loadAll()`方法。使用LoadingCache时，需要指定CacheLoader，并实现其中的`load()`方法供缓存缺失时自动加载。

在多线程情况下，当两个线程同时调用`get()`，则后一线程将被阻塞，直至前一线程更新缓存完成。

```java
LoadingCache<String, String> loadingCache = Caffeine.newBuilder()
    //创建缓存或者最近一次更新缓存后经过指定时间间隔，刷新缓存；refreshAfterWrite仅支持LoadingCache
    .refreshAfterWrite(10, TimeUnit.SECONDS)
    .expireAfterWrite(10, TimeUnit.SECONDS)
    .expireAfterAccess(10, TimeUnit.SECONDS)
    .maximumSize(10)
    //根据key查询数据库里面的值，这里是个lamba表达式
    .build(key -> new Date().toString());
```

#### 1.3 Async Cache异步获取

AsyncCache是Cache的一个变体，其响应结果均为CompletableFuture，通过这种方式，AsyncCache对异步编程模式进行了适配。默认情况下，缓存计算使用`ForkJoinPool.commonPool()`作为线程池，如果想要指定线程池，则可以覆盖并实现`Caffeine.executor(Executor)`方法。`synchronous()`提供了阻塞直到异步缓存生成完毕的能力，它将以Cache进行返回。

在多线程情况下，当两个线程同时调用`get(key, k -> value)`，则会返回**同一个CompletableFuture**对象。由于返回结果本身不进行阻塞，可以根据业务设计自行选择阻塞等待或者非阻塞。

```java
AsyncLoadingCache<String, String> asyncLoadingCache = Caffeine.newBuilder()
    //创建缓存或者最近一次更新缓存后经过指定时间间隔刷新缓存；仅支持LoadingCache
    .refreshAfterWrite(1, TimeUnit.SECONDS)
    .expireAfterWrite(1, TimeUnit.SECONDS)
    .expireAfterAccess(1, TimeUnit.SECONDS)
    .maximumSize(10)
    //根据key查询数据库里面的值
    .buildAsync(key -> {
        Thread.sleep(1000);
        return new Date().toString();
    });

//异步缓存返回的是CompletableFuture
CompletableFuture<String> future = asyncLoadingCache.get("1");
future.thenAccept(System.out::println);
```

### 2、驱逐策略

驱逐策略在创建缓存的时候进行指定。常用的有基于容量的驱逐和基于时间的驱逐。

基于容量的驱逐需要指定缓存容量的最大值，当缓存容量达到最大时，Caffeine将使用LRU策略对缓存进行淘汰；基于时间的驱逐策略如字面意思，可以设置在最后访问/写入一个缓存经过指定时间后，自动进行淘汰。

驱逐策略可以组合使用，任意驱逐策略生效后，该缓存条目即被驱逐。

- LRU 最近最少使用，淘汰最长时间没有被使用的页面。
- LFU 最不经常使用，淘汰一段时间内使用次数最少的页面
- FIFO 先进先出

**Caffeine有4种缓存淘汰设置**

1. 大小 （LFU算法进行淘汰）
2. 权重 （大小与权重 只能二选一）
3. 时间
4. 引用 （不常用，本文不介绍）

```java
@Slf4j
public class CacheTest {


    /**
     * 缓存大小淘汰
     */
    @Test
    public void maximumSizeTest() throws InterruptedException {
        Cache<Integer, Integer> cache = Caffeine.newBuilder()
            //超过10个后会使用W-TinyLFU算法进行淘汰
            .maximumSize(10)
            .evictionListener((key, val, removalCause) -> {
                log.info("淘汰缓存：key:{} val:{}", key, val);
            })
            .build();

        for (int i = 1; i < 20; i++) {
            cache.put(i, i);
        }
        Thread.sleep(500);//缓存淘汰是异步的

        // 打印还没被淘汰的缓存
        System.out.println(cache.asMap());
    }

    /**
     * 权重淘汰
     */
    @Test
    public void maximumWeightTest() throws InterruptedException {
        Cache<Integer, Integer> cache = Caffeine.newBuilder()
            //限制总权重，若所有缓存的权重加起来>总权重就会淘汰权重小的缓存
            .maximumWeight(100)
            .weigher((Weigher<Integer, Integer>) (key, value) -> key)
            .evictionListener((key, val, removalCause) -> {
                log.info("淘汰缓存：key:{} val:{}", key, val);
            })
            .build();

        //总权重其实是=所有缓存的权重加起来
        int maximumWeight = 0;
        for (int i = 1; i < 20; i++) {
            cache.put(i, i);
            maximumWeight += i;
        }
        System.out.println("总权重=" + maximumWeight);
        Thread.sleep(500);//缓存淘汰是异步的

        // 打印还没被淘汰的缓存
        System.out.println(cache.asMap());
    }


    /**
     * 访问后到期（每次访问都会重置时间，也就是说如果一直被访问就不会被淘汰）
     */
    @Test
    public void expireAfterAccessTest() throws InterruptedException {
        Cache<Integer, Integer> cache = Caffeine.newBuilder()
            .expireAfterAccess(1, TimeUnit.SECONDS)
            //可以指定调度程序来及时删除过期缓存项，而不是等待Caffeine触发定期维护
            //若不设置scheduler，则缓存会在下一次调用get的时候才会被动删除
            .scheduler(Scheduler.systemScheduler())
            .evictionListener((key, val, removalCause) -> {
                log.info("淘汰缓存：key:{} val:{}", key, val);

            })
            .build();
        cache.put(1, 2);
        System.out.println(cache.getIfPresent(1));
        Thread.sleep(3000);
        System.out.println(cache.getIfPresent(1));//null
    }

    /**
     * 写入后到期
     */
    @Test
    public void expireAfterWriteTest() throws InterruptedException {
        Cache<Integer, Integer> cache = Caffeine.newBuilder()
            .expireAfterWrite(1, TimeUnit.SECONDS)
            //可以指定调度程序来及时删除过期缓存项，而不是等待Caffeine触发定期维护
            //若不设置scheduler，则缓存会在下一次调用get的时候才会被动删除
            .scheduler(Scheduler.systemScheduler())
            .evictionListener((key, val, removalCause) -> {
                log.info("淘汰缓存：key:{} val:{}", key, val);
            })
            .build();
        cache.put(1, 2);
        Thread.sleep(3000);
        System.out.println(cache.getIfPresent(1));//null
    }
}
```

### 3、刷新机制

`refreshAfterWrite()`表示x秒后自动刷新缓存的策略可以配合淘汰策略使用，注意的是刷新机制只支持LoadingCache和AsyncLoadingCache

```java
private static int NUM = 0;

@Test
public void refreshAfterWriteTest() throws InterruptedException {
    LoadingCache<Integer, Integer> cache = Caffeine.newBuilder()
        .refreshAfterWrite(1, TimeUnit.SECONDS)
        //模拟获取数据，每次获取就自增1
        .build(integer -> ++NUM);

    //获取ID=1的值，由于缓存里还没有，所以会自动放入缓存
    System.out.println(cache.get(1));// 1

    // 延迟2秒后，理论上自动刷新缓存后取到的值是2
    // 但其实不是，值还是1，因为refreshAfterWrite并不是设置了n秒后重新获取就会自动刷新
    // 而是x秒后&&第二次调用getIfPresent的时候才会被动刷新
    Thread.sleep(2000);
    System.out.println(cache.getIfPresent(1));// 1

    //此时才会刷新缓存，而第一次拿到的还是旧值
    System.out.println(cache.getIfPresent(1));// 2
}
```

### 4、统计

```java
LoadingCache<String, String> cache = Caffeine.newBuilder()
    //创建缓存或者最近一次更新缓存后经过指定时间间隔，刷新缓存；refreshAfterWrite仅支持LoadingCache
    .refreshAfterWrite(1, TimeUnit.SECONDS)
    .expireAfterWrite(1, TimeUnit.SECONDS)
    .expireAfterAccess(1, TimeUnit.SECONDS)
    .maximumSize(10)
    //开启记录缓存命中率等信息
    .recordStats()
    //根据key查询数据库里面的值
    .build(key -> {
        Thread.sleep(1000);
        return new Date().toString();
    });


cache.put("1", "shawn");
cache.get("1");

/*
 * hitCount :命中的次数
 * missCount:未命中次数
 * requestCount:请求次数
 * hitRate:命中率
 * missRate:丢失率
 * loadSuccessCount:成功加载新值的次数
 * loadExceptionCount:失败加载新值的次数
 * totalLoadCount:总条数
 * loadExceptionRate:失败加载新值的比率
 * totalLoadTime:全部加载时间
 * evictionCount:丢失的条数
 */
System.out.println(cache.stats());
```

### 5、总结

上述一些策略在创建时都可以进行自由组合，一般情况下有两种方法

- **设置 maxSize、refreshAfterWrite，不设置 expireAfterWrite/expireAfterAccess**
  设置expireAfterWrite当缓存过期时会同步加锁获取缓存，所以设置expireAfterWrite时性能较好，但是某些时候会取旧数据,适合允许取到旧数据的场景
- **设置 maxSize、expireAfterWrite/expireAfterAccess，不设置 refreshAfterWrite**
  数据一致性好，不会获取到旧数据，但是性能没那么好（对比起来），适合获取数据时不耗时的场景

## 三、SpringBoot整合Caffeine

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

- `@Cacheable`：表示该方法支持缓存。当调用被注解的方法时，如果对应的键已经存在缓存，则不再执行方法体，而从缓存中直接返回。当方法返回null时，将不进行缓存操作。
- `@CachePut`：表示执行该方法后，其值将作为最新结果更新到缓存中，**每次都会执行该方法**。
- `@CacheEvict`：表示执行该方法后，将触发缓存清除操作。
- `@Caching`：用于组合前三个注解，例如：

```java
@Caching(cacheable = @Cacheable("CacheConstants.GET_USER"),
         evict = {@CacheEvict("CacheConstants.GET_DYNAMIC",allEntries = true)}
public User find(Integer id) {
    return null;
}
```

#### 1.3 常用注解属性

- `cacheNames/value`：缓存组件的名字，即cacheManager中缓存的名称。
- `key`：缓存数据时使用的key。默认使用方法参数值，也可以使用[SpEL](https://docs.spring.io/spring-framework/docs/3.0.x/reference/expressions.html)表达式进行编写。
- `keyGenerator`：和key二选一使用。
- `cacheManager`：指定使用的缓存管理器。
- `condition`：在方法执行开始前检查，在符合condition的情况下，进行缓存
- `unless`：在方法执行完成后检查，在符合unless的情况下，不进行缓存
- `sync`：是否使用同步模式。若使用同步模式，在多个线程同时对一个key进行load时，其他线程将被阻塞。

#### 1.4 缓存同步模式

sync开启或关闭，在Cache和LoadingCache中的表现是不一致的：

- Cache中，sync表示是否需要所有线程同步等待
- LoadingCache中，sync表示在读取不存在/已驱逐的key时，是否执行被注解方法

### 2、实战

#### 2.1 引入依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-cache</artifactId>
</dependency>

<dependency>
    <groupId>com.github.ben-manes.caffeine</groupId>
    <artifactId>caffeine</artifactId>
</dependency>
```

#### 2.2 缓存常量CacheConstants

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

参考文章

https://juejin.cn/post/6991751225125371911

https://ghh3809.github.io/2021/05/31/caffeine/

https://github.com/ben-manes/caffeine