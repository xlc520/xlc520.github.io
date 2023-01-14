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
password: 
---



# 本地缓存Caffeine

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