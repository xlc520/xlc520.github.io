---
author: xlc520
title: MyBatis-Plus联表查询-Mybatis-Plus-Join
excerpt: 
description: 
date: 2022-08-10
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# 快速使用

`mybatis-plus`作为`mybatis`的增强工具，它的出现极大的简化了开发中的数据库操作，但是长久以来，它的**联表查询**
能力一直被大家所诟病。一旦遇到`left join`或`right join`的左右连接，你还是得老老实实的打开 xml 文件，手写上一大段的 sql 语句。

直到前几天，偶然碰到了这么一款叫做`mybatis-plus-join`的工具（后面就简称`mpj`
了），使用了一下，不得不说真香！彻底将我从 xml 地狱中解放了出来，终于可以以类似`mybatis-plus`中`QueryWrapper`
的方式来进行联表查询了，话不多说，我们下面开始体验。

## **引入依赖**

首先在项目中引入引入依赖坐标，因为`mpj`中依赖较高版本`mybatis-plus`中的一些 api，所以项目建议直接使用高版本。

```xml
<dependency>
    <groupId>com.github.yulichang</groupId>
    <artifactId>mybatis-plus-join</artifactId>
    <version>1.2.4</version>
</dependency>
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus-boot-starter</artifactId>
    <version>3.5.1</version>
</dependency>
```

引入相关依赖后，在`springboot`项目中，像往常一样正常配置数据源连接信息就可以了。

## **数据准备**

因为要实现联表查询，所以我们先来建几张表进行测试。

订单表：

![mybatis-plus-join](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-16586333873680.png)

用户表，包含用户姓名：

![mybatis-plus-join](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-16586333873681.png)

商品表，包含商品名称和单价：

![mybatis-plus-join](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-16586333873682.png)

在订单表中，通过用户 id 和商品 id 与其他两张表进行关联。

## **修改 Mapper**

以往在使用`myatis-plus`的时候，我们的`Mapper`层接口都是直接继承的`BaseMapper`，使用`mpj`
后需要对其进行修改，改为继承`MPJBaseMapper`接口。

```java
@Mapper
public interface OrderMapper extends MPJBaseMapper<Order> {
}
```

对其余两个表的`Mapper`接口也进行相同的改造。此外，我们的`service`也可以选择继承`MPJBaseService`，`serviceImpl`
选择继承`MPJBaseServiceImpl`，这两者为非必须继承。

## **查询**

`Mapper`接口改造完成后，我们把它注入到`Service`中，虽然说我们要完成 3 张表的联表查询，但是以`Order`
作为主表的话，那么只注入这一个对应的`OrderMapper`就可以，非常简单。

```java
@Service
@AllArgsConstructor
public class OrderServiceImpl implements OrderService {
    private final OrderMapper orderMapper;
}
```

### MPJLambdaWrapper

接下来，我们体验一下再也不用写 sql 的联表查询：

```java
public void getOrder() {
    List<OrderDto> list = orderMapper.selectJoinList(OrderDto.class,
     new MPJLambdaWrapper<Order>()
      .selectAll(Order.class)
      .select(Product::getUnitPrice)
      .selectAs(User::getName,OrderDto::getUserName)
      .selectAs(Product::getName,OrderDto::getProductName)
      .leftJoin(User.class, User::getId, Order::getUserId)
      .leftJoin(Product.class, Product::getId, Order::getProductId)
      .eq(Order::getStatus,3));

    list.forEach(System.out::println);
}
```

不看代码，我们先调用接口来看一下执行结果：

![mybatis-plus-join](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-16586333873683.png)

可以看到，成功查询出了关联表中的信息，下面我们一点点介绍上面代码的语义。

首先，调用`mapper`的`selectJoinList()`方法，进行关联查询，返回多条结果。后面的第一个参数`OrderDto.class`
代表接收返回查询结果的类，作用和我们之前在`xml`中写的`resultType`类似。

这个类可以直接继承实体，再添加上需要在关联查询中返回的列即可：

```java
@Data
@ToString(callSuper = true)
@EqualsAndHashCode(callSuper = true)
public class OrderDto extends Order {
    String userName;
    String productName;
    Double unitPrice;
}
```

接下来的`MPJLambdaWrapper`就是构建查询条件的核心了，看一下我们在上面用到的几个方法：

- `selectAll()`：查询指定实体类的全部字段
- `select()`：查询指定的字段，支持可变长参数同时查询多个字段，但是在同一个`select`中只能查询相同表的字段，所以如果查询多张表的字段需要分开写
- `selectAs()`：字段别名查询，用于数据库字段与接收结果的`dto`中属性名称不一致时转换
- `leftJoin()`：左连接，其中第一个参数是参与联表的表对应的实体类，第二个参数是这张表联表的`ON`
  字段，第三个参数是参与联表的`ON`的另一个实体类属性

除此之外，还可以正常调用`mybatis-plus`中的各种原生方法，文档中还提到，默认主表别名是`t`
，其他的表别名以先后调用的顺序使用`t1`、`t2`、`t3`以此类推。

我们用插件读取日志转化为可读的 sql 语句，可以看到两条左连接条件都被正确地添加到了 sql 中：

![mybatis-plus-join](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-16586333873694.png)

### MPJQueryWrapper

和`mybatis-plus`非常类似，除了`LamdaWrapper`外还提供了普通`QueryWrapper`的写法，改造上面的代码：

```java
public void getOrderSimple() {
    List<OrderDto> list = orderMapper.selectJoinList(OrderDto.class,
     new MPJQueryWrapper<Order>()
      .selectAll(Order.class)
      .select("t2.unit_price","t2.name as product_name")
      .select("t1.name as user_name")
      .leftJoin("t_user t1 on t1.id = t.user_id")
      .leftJoin("t_product t2 on t2.id = t.product_id")
      .eq("t.status", "3")
    );

    list.forEach(System.out::println);
}
```

运行结果与之前完全相同，需要注意的是，这样写时在引用表名时不要使用数据库中的原表名，主表默认使用`t`，其他表使用`join`
语句中我们为它起的别名，如果使用原表名在运行中会出现报错。

并且，在`MPJQueryWrapper`中，可以更灵活的支持子查询操作，如果业务比较复杂，那么使用这种方式也是不错的选择。

## **分页查询**

`mpj`中也能很好的支持列表查询中的分页功能，首先我们要在项目中加入分页拦截器：

```java
@Bean
public MybatisPlusInterceptor mybatisPlusInterceptor(){
    MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
    interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.H2));
    return interceptor;
}
```

接下来改造上面的代码，调用`selectJoinPage()`方法：

```java
public void page() {
    IPage<OrderDto> orderPage = orderMapper.selectJoinPage(
      new Page<OrderDto>(2,10),
      OrderDto.class,
      new MPJLambdaWrapper<Order>()
        .selectAll(Order.class)
        .select(Product::getUnitPrice)
        .selectAs(User::getName, OrderDto::getUserName)
        .selectAs(Product::getName, OrderDto::getProductName)
        .leftJoin(User.class, User::getId, Order::getUserId)
        .leftJoin(Product.class, Product::getId, Order::getProductId)
        .orderByAsc(Order::getId));

    orderPage.getRecords().forEach(System.out::println);
}
```

注意在这里需要添加一个分页参数的`Page`对象，我们再执行上面的代码，并对日志进行解析，查看 sql 语句：

![mybatis-plus-join](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-16586333873695.png)

可以看到底层通过添加`limit`进行了分页，同理，`MPJQueryWrapper`也可以这样进行分页。

# 官方介绍及使用

mybatis-plus-join 是 mybatis
plus 的一个多表插件，上手简单，十分钟不到就能学会全部使用方式，只要会用 mp 就会用这个插件，仅仅依赖了 lombok，而且是扩展 mp
的构造器并非更改原本的构造器，不会对原有项目产生一点点影响，相信大多数项目都有这俩插件，四舍五入就是没依赖。

mybatis-plus-join 示例：

> gitee: <https://gitee.com/mhb0409/mybatis-plus-join-example>
> github: <https://github.com/bobo667/mybatis-plus-join-example>

**目前支持大部分 mp 常用版本**

maven 坐标

mybatis plus：3.2.0 版本依赖地址：

```xml
 <dependency>
    <groupId>icu.mhb</groupId>
    <artifactId>mybatis-plus-join</artifactId>
    <version>1.2.0</version>
 </dependency>
```

最新版本依赖地址：

```xml
 <dependency>
    <groupId>icu.mhb</groupId>
    <artifactId>mybatis-plus-join</artifactId>
    <version>1.1.2</version>
 </dependency>
```

## 版本对应关系（此处只显示对应的最新版本）

> 标注：*号代表，从起始版本之后都是可以使用的

| Mybatis-plus | Mybatis-plus-join                                |
|--------------|--------------------------------------------------|
| 3.2.0        | 1.2.0                                            |
| 3.3.1 - 3.42 | 1.0.2                                            |
| 3.4.3.4 - *  | 1.0.3 、1.0.4、1.0.5、1.0.6、1.0.8、1.0.9、1.1.1、1.1.2 |

## 怎么使用

```java
   
    /**
     * 查询列表
     *
     * @param wrapper 实体对象封装操作类
     * @param <E>     返回泛型（如果只查询一个字段可以传递String Int之类的类型）
     * @return 返回E 类型的列表
     */
    <EV, E> List<EV> joinList(Wrapper<E> wrapper, Class<EV> clz);

    /**
     * 查询单个对象
     *
     * @param wrapper 实体对象封装操作类
     * @param clz     返回对象 （如果只查询一个字段可以传递String Int之类的类型）
     * @param <E>     包装泛型类型
     * @param <EV>    返回类型泛型
     * @return EV
     */
    <E, EV> EV joinGetOne(Wrapper<E> wrapper, Class<EV> clz);


    /**
     * 查询count
     *
     * @param wrapper 实体对象封装操作类
     * @param <E>     返回泛型
     * @return 总数
     */
    <E> int joinCount(Wrapper<E> wrapper);


    /**
     * 翻页查询
     *
     * @param page    翻页对象
     * @param wrapper 实体对象封装操作类
     */
    <EV, E extends IPage<EV>, C> IPage<EV> joinPage(E page, Wrapper<C> wrapper, Class<EV> clz);


```

一共是四个方法，分别重写于 mp 的

`joinList -> list`

`joinGetOne -> getOne`

`joinCount -> count`

`joinPage -> page`

*注意：这几个方法，前面俩参数和 mp 的用法一致，最后一个 class
类型的是返回类型，这个主要是大多数多表操作都是需要有额外字段，所以需要额外定义，而`Wrapper<E> wrapper`
中的这个需要填写在需要构建条件的实体，这个实体是任意的，不强制，创建条件构造器的时候定义的那个对象就是主表**

## 基本使用方法

1.mapper 继承 `JoinBaseMapper< T>`

2.service 继承 `JoinIService< T>`

3.impl 继承 `JoinServiceImpl<M,T>`

4.注入 mp 自定义方法，主要是继承 JoinDefaultSqlInjector

```java
package icu.mhb.mpj.example.config;

import com.baomidou.mybatisplus.core.injector.AbstractMethod;
import icu.mhb.mybatisplus.plugln.injector.JoinDefaultSqlInjector;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class MyBatisPlusConfig extends JoinDefaultSqlInjector {

    @Override
    public List<AbstractMethod> getMethodList(Class<?> mapperClass) {
        List<AbstractMethod> methodList = super.getMethodList(mapperClass);
        // 自己的自定义方法
        return methodList;
    }

}

```

然后就可以愉快的使用了

## 自定义查询字段和表别名关键字

```java
// 为何要这个东西，因为在不同数据库之间，别名关键字不一样，例如Mysql表别名是 As 而oracle中 是 is 关键字所以需要

// 以oracle 关键字为例
// 解释一下为什么要这样声明，因为注入器在启动的时候就进行初始化，所以这个构建需要在初始化之前，最简单的办法就是在注入MybatisPlusPropertiesCustomizer的地方进行实例化
 @Bean
public MybatisPlusPropertiesCustomizer plusPropertiesCustomizer() {
      MybatisPlusJoinConfig.builder()
                // 查询字段别名关键字
                .columnAliasKeyword("as")
                // 表、left join、right join、inner join 表别名关键字
                .tableAliasKeyword("is")
                .build();
    return MybatisPlusProperties::getGlobalConfig;
}

// 运行的SQL
SELECT 1 as id
 FROM users is users
 LEFT JOIN users_age is users_age
 ON users_age.id = users.age_id

```

下面来看构造器的使用：

```java
// 第一步new 一个JoinLambdaWrapper构造参数是主表的实体对象（如果在service中直接使用joinLambdaWrapper()方法即可获得）
JoinLambdaWrapper<Users> wrapper = new JoinLambdaWrapper<>(Users.class);

// 第二步 使用leftJoin方法创建一个左连接
/*
 有三个方法可以使用 
 leftJoin 左联
 rightJoin 右联
 innerJoin 内联
*/

// 这一部分一个参数是join中定义的连接的表，第二个参数是随意的表，但是是要出现构造器中的
wrapper.leftJoin(UsersAge.class,UsersAge::getId,Users::getAgeId);
// 然后可以设置多表中的查询条件，这一步和mp一致
wrapper.eq(UserAge::getAgeName,"95")
    .select(UserAge::getAgeName);
// 最后一步 需要使用end方法结束
wrapper.end();
  

// 完整的就是
JoinLambdaWrapper<Users> wrapper = new JoinLambdaWrapper<>(Users.class);
wrapper.leftJoin(UsersAge.class,UsersAge::getId,Users::getAgeId)
   .eq(UserAge::getAgeName,"95")
   .select(UserAge::getAgeName)
   .end();

usersService.joinList(wrapper,UsersVo.class);

// 执行SQL 
select 
  users.user_id,
  users.user_name,
  users_age.age_name
from users users
  left join users_age users_age on users_age.id = users.age_id
where (
 users_age.age_name = '95'
)

```

是不是就很简单，就和 mp 的原生的比，就是增加了 join 方法啥的

## 加料用法

OK，来点丝滑的加料用法

### 自定义别名和返回 map 类型

```java
// 两个参数代表自定义别名
JoinLambdaWrapper<Users> wrapper = joinLambdaQueryWrapper(Users.class, "userMaster");

wrapper
       .select(Users::getUserId, Users::getUserName)
    // leftJoin innerJoin rightJoin 三个参数代表使用默认别名，四个参数代表使用自定义别名
       .leftJoin(UsersAge.class, UsersAge::getId, Users::getAgeId, "u_age")
       .select(UsersAge::getAgeDoc).end()
       .leftJoin(UsersAge.class, UsersAge::getId, Users::getAgeId, "u_a")
       .select(UsersAge::getAgeName).end();

// 需要注意的是当返回参数为map的时候是没有下划线转驼峰的，如果需要请自行配置mybatis的下划线转驼峰
List<Map> dataList = super.joinList(wrapper, Map.class);

// SQL
SELECT
 userMaster.user_id,
 userMaster.user_name,
 u_age.age_doc,
 u_a.age_name 
FROM
 users AS userMaster
 LEFT JOIN users_age AS u_age ON u_age.id = userMaster.age_id
 LEFT JOIN users_age AS u_a ON u_a.id = userMaster.age_id;
```

### 一对一查询映射

```java
// 很多时候连表返回的字段很多都相同，所以在每个vo里面都会出现，如果把这些重复性字段封装成一个类，会更好维护，所以说针对这个情况 版本 >= 1.0.6 即可使用oneToOneSelect 方法

 JoinLambdaWrapper<Users> wrapper = joinLambdaQueryWrapper(Users.class);

 wrapper.leftJoin(UsersAge.class, UsersAge::getId, Users::getAgeId)
   // oneToOneSelect 第一个参数需要映射的实体类字段，第二个参数则是查询函数
        .oneToOneSelect(UsersVo::getUsersAge, (cb) -> {
             cb.add(UsersAge::getAgeDoc, UsersAge::getAgeName)
               /* 
              当你出现两个实体类映射字段相同，例如 user实体中有个字段id，userAge表中也有个字段id，你         想要同时获取这两个字段，这时候则可以使用
               |column : 查询字段
               |alias  : 别名
        |fieldName : 字段名称
               add(SFunction<T, ?> column, String alias, SFunction<F, ?> fieldName)
               */
               .add(UsersAge::getId, "ageId", UsersAge::getId);
         }).end();

 return super.joinList(wrapper, UsersVo.class);

// 执行SQL 
SELECT users.user_name, users.create_time, users.age_id, users.user_id, users_age.age_doc
 , users_age.age_name, users_age.id AS ageId
FROM users users
 LEFT JOIN users_age users_age ON users_age.id = users.age_id
  
// 返回结果
[
  {
   "ageId":1,
   "createTime":1635416270000,
   "userId":1,
   "userName":"名字啊",
   "usersAge":{
     "ageDoc":"90",
     "ageName":"90",
     "id":1
   }
  }....
]



```

### 多对多查询映射

```java
JoinLambdaWrapper<UsersAge> wrapper = joinLambdaQueryWrapper(UsersAge.class);

wrapper.leftJoin(Users.class, Users::getAgeId, UsersAge::getId)
     // manyToManySelect 多对多，对应的就是 mybatis中的resultMap中的collection标签
     // 该方法第一个参数代表的是需要映射到的实体类字段
        // 第二个参数代表list中的实体类型 例如 List<Users> 这里的实体类型就是Users
     // 第三个就是要查询的字段
        .manyToManySelect(UsersAgesVo::getUsersList, Users.class, (cb) -> {
           cb.add(Users::getUserName, Users::getUserId, Users::getCreateTime);
         }).end();
return super.joinList(wrapper, UsersAgesVo.class);

// 执行SQL
SELECT      
 users_age.age_doc,users_age.age_name,users_age.id,users.user_name,users.user_id,users.create_time
FROM users_age AS users_age
 LEFT JOIN users AS users ON users.age_id = users_age.id;

// 返回数据
[
  {"ageDoc":"90","ageName":"90","id":1,
   "usersList":[
     {"createTime":1635416270000,"userId":1,"userName":"名字啊"},
     {"createTime":1635416270000,"userId":2,"userName":"名字2"}
   ]
  }
]
```

### 返回基础类型数据

```java
// 当我们只需要查询一个字段，例如id列表，现在支持直接传递基础类型

JoinLambdaWrapper<Users> wrapper = joinLambdaQueryWrapper(Users.class)
                .select(Users::getUserId);

List<Integer> ids = super.joinList(wrapper, Integer.class);

System.out.println(JSON.toJSONString(ids));

// 输出结果：[1,2]

// 也支持返回单个数据类型

JoinLambdaWrapper<Users> wrapper = joinLambdaQueryWrapper(Users.class)
                .select(Users::getUserName)
                .eq(Users::getUserId, 1)
                .last("limit 1");

String userName = super.joinGetOne(wrapper, String.class);

System.out.println(userName);

// 输出结果："我是名字1"

```

### 根据实体不为空的数据查询

```java
// 如果需要根据实体查询可以采用这样的实例化
JoinLambdaWrapper<Users> wrapper = new JoinLambdaWrapper<>(new Users().setUserName("name啊")
                                                                          .setUserId(1L));
// 或者可以采用这样的setEntity
// wrapper.setEntity(new Users().setUserName("name啊"));

// 这一部分一个参数是join中定义的连接的表，第二个参数是随意的表，但是是要出现构造器中的
wrapper.leftJoin(UsersAge.class,UsersAge::getId,Users::getAgeId);
// 然后可以设置多表中的查询条件，这一步和mp一致
wrapper.eq(UserAge::getAgeName,"95")
    .select(UserAge::getAgeName);
// 最后一步 需要使用end方法结束
wrapper.end();

// 执行查询
usersService.joinList(wrapper,UsersVo.class);

// 执行SQL 
select 
  users.user_id,
  users.user_name,
  users_age.age_name
from users users
  left join users_age users_age on users_age.id = users.age_id
where 
 users.user_id = 1
 and users.user_name = 'name啊'
 and users_age.age_name = '95'


```

### notDefaultSelectAll() 不默认查询主表全部的字段

```java
// 如果需要根据实体查询可以采用这样的实例化
JoinLambdaWrapper<Users> wrapper = new JoinLambdaWrapper<>(new Users().setUserName("name啊")
                                                                          .setUserId(1L));

// 因为默认是查询主表所有查询字段，如果不需要查询主表全部字段就调用该方法
wrapper.notDefaultSelectAll();

// 这一部分一个参数是join中定义的连接的表，第二个参数是随意的表，但是是要出现构造器中的
wrapper.leftJoin(UsersAge.class,UsersAge::getId,Users::getAgeId);
// 然后可以设置多表中的查询条件，这一步和mp一致
wrapper.eq(UserAge::getAgeName,"95")
    .select(UserAge::getAgeName);
// 最后一步 需要使用end方法结束
wrapper.end();

// 执行查询
usersService.joinList(wrapper,UsersVo.class);

// 执行SQL 
select 
  users_age.age_name
from users users
  left join users_age users_age on users_age.id = users.age_id
where 
 users.user_id = 1
 and users.user_name = 'name啊'
 and users_age.age_name = '95'



```

### selectAs() 查询添加别名

```java
/* 
  selectAs(List<As<T>> columns) 
  selectAs(SFunction<T, ?> column, String alias)
  查询并添加别名
*/
// 拿起来我们上面用的哪个实例。我现在需要给ageName给个别名 user_age_name
JoinLambdaWrapper<Users> wrapper = new JoinLambdaWrapper<>(Users.class);
wrapper.leftJoin(UsersAge.class,UsersAge::getId,Users::getAgeId)
   .eq(UserAge::getAgeName,"95")
   .selectAs(UserAge::getAgeName,"user_age_name")
   .end();
// 执行查询
usersService.joinList(wrapper,UsersVo.class);

// 执行SQL 
select 
  users.user_id,
 users.user_name,
 users_age.age_name as user_age_name
from users users
  left join users_age users_age on users_age.id = users.age_id
where (
 users_age.age_name = '95'
)
    
// 现在来个高级需求，我需要查询出users_age表中的两个字段并且需要加一个固定值

JoinLambdaWrapper<Users> wrapper = new JoinLambdaWrapper<>(Users.class);
wrapper.join(UsersAge.class)
   .leftJoin(UsersAge::getId,Users::getAgeId)
   .eq(UserAge::getAgeName,"95")
    .selectAs((cb) -> {
      cb.add(UserAge::getAgeName,"user_age_name")
        .add(UserAge::getAgeDoc)
        .add("mp永远滴神","mpnb");
    }).end();
// 执行查询
usersService.joinList(wrapper,UsersVo.class);
 
// 执行SQL 
select 
  users.user_id,
 users.user_name,
 users_age.age_name as user_age_name,
 users_age.age_doc,
 'mp永远滴神' as mpnb
from users users
  left join users_age users_age on users_age.id = users.age_id
where (
 users_age.age_name = '95'
)

 
/*
 这里需要注意啊，如果selectAs那个地方因为是函数接口，所以值是不可以改变的，如果是可变的那么可以采用
 selectAs(Arrays.asList(
   new As(UserAge::getAgeName,"user_age_name"),
   new As(UserAge::getAgeDoc)
 ))
*/
    
```

### selectAll() 查询全部

```java
// selectAll()方法，查询出当前表所有的子段
JoinLambdaWrapper<Users> wrapper = new JoinLambdaWrapper<>(Users.class);
wrapper.leftJoin(UsersAge.class,UsersAge::getId,Users::getAgeId)
   .eq(UserAge::getAgeName,"95")
   .selectAll().end();
// 执行查询
usersService.joinList(wrapper,UsersVo.class);
 
// 执行SQL 
select 
  users.user_id,
 users.user_name,
 users_age.age_name,
 users_age.age_doc,
 users_age.id
from users users
  left join users_age users_age on users_age.id = users.age_id
where (
 users_age.age_name = '95'
)
```

### joinAnd() join 添加条件

```java
   
/*
  相信有很多情况需要限制join的表的限制条件那么就需要 
    joinAnd(SFunction<T, Object> field, Object val, int index)
*/

JoinLambdaWrapper<Users> wrapper = new JoinLambdaWrapper<>(Users.class);
wrapper.leftJoin(UsersAge.class,UsersAge::getId,Users::getAgeId)
   .joinAnd(UsersAge::getId,1,0) // 需要注意啊，这个最后一个下标是指的第几个join，因为有时候会出现多个连接，附表连接主表，附表的附表连接附表这样子
   .eq(UserAge::getAgeName,"95")
   .selectAs((cb) -> {
      cb.add(UserAge::getAgeName,"user_age_name")
        .add(UserAge::getAgeDoc)
        .add("mp永远滴神","mpnb");
    }).end();
// 执行查询
usersService.joinList(wrapper,UsersVo.class);

// 执行SQL 
select 
  users.user_id,
 users.user_name,
 users_age.age_name as user_age_name,
 users_age.age_doc,
 'mp永远滴神' as mpnb
from users users
  left join users_age users_age on users_age.id = users.age_id and users_age.id = 1
where (
 users_age.age_name = '95'
)
 
```

### 同个接口返回任意实体

```java
// 这个就不得不说了，大多数情况下，一个接口是返回一个实体类型的，但是很多情况下，我们有不同的业务需求，所返回的对象也是不一样的，全部加在一个对象中又太臃肿不好维护，所以就需要这个返回任意定制类型
// 使用方法 在最后一个参数中增加上自己的实体类型就行了
List<UsersVo> usersVoList = usersService.joinList(wrapper,UsersVo.class);

```

### 自定义别名 TableAlias

```java
/*
 这个自定义别名是某些业务下，比如说在项目中构建了SQL啊，之类的，但是构建的SQL别名一般都是固定的达到通用，
 所以需要在实体中增加别名使用@TableAlias注解就行了，如果没有添加别名 就默认使用表名作为别名 
*/
@TableName("app_users")
@TableAlias("users")
public class Users implements Serializable 
  
}
```

## 用法注意

1.在使用 join service 一系列方法的时候，所有参数都不能传 null

2.这个条件构造器啊，你在 join 的时候就相当于创建一个新的构造器，你要在这个新的构造器中实现你所有的操作，包括查询，和条件，排序之类的，这样的好处在于，维护好一些，毕竟都放在一起的话，到时候容易迷。

3.您的 start 是作者更新的动力，如果用的人多的话，可以留言，我会继续更新并适配 mp 其他版本，如果各位等不了呢，也可以把源码下载下来，放进你的项目中改一下里面的东西。
