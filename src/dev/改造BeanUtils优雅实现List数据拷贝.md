---
author: xlc520
title: 改造BeanUtils优雅实现List数据拷贝
description: 
date: 2022-06-27
category: Java
tag: Java
article: true
timeline: true
icon: java
---



# 改造BeanUtils优雅实现List数据拷贝

BeanUtils.copyProperties();确实为我们做了很多事情，虽然不能完美完成深拷贝，但是对于 po、vo、dto 的拷贝已经足够用了。但是其还是有一些不够完美的地方。



不足几点如下：



**①**不能拷贝 list，而拷贝 list 的情况又大量存在，因此会有许多重复代码。

```java
for (S source : sources) {
    T target = new T();
    copyProperties(source, target);
    list.add(target);
}
```



**②**有一些简单的查询，仅仅需要转换一下 vo 也需要 new Vo()。

```java
public Vo findById(Integer id) {
 Vo vo = new Vo();
 Po po = dao.findById(id);
 copyProperties(po, vo);
 return vo;
}
```



**③**这种拷贝方式是没有返回值的，jdk8 支持 stream() 操作之后，支持不是很友好，不方便 lambda 表达式的使用，因此我们决定通过集成 BeanUtils 类，自己造一个方便用的轮子。



**使用**





我们将新创建一个轮子 BeanConvertUtils，使用如下，当我们要转换 po、vo 时，只需要：

```java
// 使用前
public Vo findById(Integer id) {
 Vo vo = new Vo();
 Po po = dao.findById(id);
 copyProperties(po, vo);
 return vo;
}

// 使用后
public Vo findById(Integer id) {
 return BeanConvertUtils.converTo(dao.findById(id), Vo::new);
}

// 使用后，通过lambda表达式特殊处理个别字段
public Vo findById(Integer id) {
 return BeanConvertUtils.converTo(dao.findById(id), Vo::new, 
  (s, t) -> t.setName(s.getName))
 );
}
```



当我们要拷贝 list 的时候也很简单：

```java
// 使用前
public List<Vo> findAll() {
 List<Vo> vos = new ArrayList();
 List<Po> pos = dao.findAll();
 for (Po po : Pos) {
     Vo vo = new Vo();
     BeanUtis.copyProperties(po, vo);
     vos.add(vo);
    }
 return vos;
}

// 使用后
public List<Vo> findAll() {
 return BeanConvertUtils.converToList(dao.findAll(), Vo::new)
}

// 同样支持自定义lambda
public List<Vo> findAll() {
 return BeanConvertUtils.converToList(dao.findAll(), Vo::new,
  (s, t) -> t.setName(s.getName))
 )
}
```



### 代码如下：

```java
/**
 * 转换对象工具
 *
 * @author bugpool
 */
public class BeanConvertUtils extends BeanUtils {

    public static <S, T> T convertTo(S source, Supplier<T> targetSupplier) {
        return convertTo(source, targetSupplier, null);
    }

    /**
     * 转换对象
     *
     * @param source         源对象
     * @param targetSupplier 目标对象供应方
     * @param callBack       回调方法
     * @param <S>            源对象类型
     * @param <T>            目标对象类型
     * @return 目标对象
     */
    public static <S, T> T convertTo(S source, Supplier<T> targetSupplier, ConvertCallBack<S, T> callBack) {
        if (null == source || null == targetSupplier) {
            return null;
        }

        T target = targetSupplier.get();
        copyProperties(source, target);
        if (callBack != null) {
            callBack.callBack(source, target);
        }
        return target;
    }

    public static <S, T> List<T> convertListTo(List<S> sources, Supplier<T> targetSupplier) {
        return convertListTo(sources, targetSupplier, null);
    }

    /**
     * 转换对象
     *
     * @param sources        源对象list
     * @param targetSupplier 目标对象供应方
     * @param callBack       回调方法
     * @param <S>            源对象类型
     * @param <T>            目标对象类型
     * @return 目标对象list
     */
    public static <S, T> List<T> convertListTo(List<S> sources, Supplier<T> targetSupplier, ConvertCallBack<S, T> callBack) {
        if (null == sources || null == targetSupplier) {
            return null;
        }

        List<T> list = new ArrayList<>(sources.size());
        for (S source : sources) {
            T target = targetSupplier.get();
            copyProperties(source, target);
            if (callBack != null) {
                callBack.callBack(source, target);
            }
            list.add(target);
        }
        return list;
    }

    /**
     * 回调接口
     *
     * @param <S> 源对象类型
     * @param <T> 目标对象类型
     */
    @FunctionalInterface
    public interface ConvertCallBack<S, T> {
        void callBack(S t, T s);
    }
}
```



**性能**





由于只是 BeanUtils 的一个封装，跟原来的代码性能几乎差不多，如果要说差一点也没错，毕竟多了一层函数堆栈的调用，但是基本可以忽略不计。主要的性能还是由 BeanUtils 决定。



**提醒**





不知道大家对这个 BeanConvertUtils 工具类感觉怎么样，自己在项目中倒是大量使用，也很方便。



但是有两点要提醒：

此方法依旧不能解决深层次的深拷贝问题，详细的可以 google 一下 BeanUtils 的深拷贝问题。‘



如果 source 或者 targetSupplier 只要有一个为 null，本工具类不像 BeanUtils 一样抛出异常，而是返回 null，因为笔者认为调用方如果把 null 进行准换，那就是想转换为 null，为不为空应该由调用方自己负责。