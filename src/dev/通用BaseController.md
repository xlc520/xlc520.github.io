---
author: xlc520
title: 通用BaseController
excerpt: 
description: 
date: 2023-11-14
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# 通用 BaseController

## 第一步 引入 MybatisPlus 的 jar 包

```xml
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus-boot-starter</artifactId>
    <version>3.4.2</version>
</dependency>
```

## 第二步 编写 util 类

```java
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.util.ObjectUtils;
import org.springframework.util.ReflectionUtils;

import java.beans.IntrospectionException;
import java.beans.PropertyDescriptor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.util.Objects;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Apprentice系统Util
 */
public class ApprenticeUtil {

    private static Pattern humpPattern = Pattern.compile("[A-Z]");
    private static Pattern linePattern = Pattern.compile("_(\\w)");

    /**
     * 驼峰转下划线
     *
     * @Param: [str]
     * @return: java.lang.String
     */
    public static String humpToLine(String str) {
        Matcher matcher = humpPattern.matcher(str);
        StringBuffer sb = new StringBuffer();
        while (matcher.find()) {
            matcher.appendReplacement(sb, "_" + matcher.group(0).toLowerCase());
        }
        matcher.appendTail(sb);
        return sb.toString();
    }

    /**
     * 下划线转驼峰
     *
     * @Param: [str]
     * @return: java.lang.String
     */
    public static String lineToHump(String str) {
        str = str.toLowerCase();
        Matcher matcher = linePattern.matcher(str);
        StringBuffer sb = new StringBuffer();
        while (matcher.find()) {
            matcher.appendReplacement(sb, matcher.group(1).toUpperCase());
        }
        matcher.appendTail(sb);
        return sb.toString();
    }

    /**
     * 获取QueryWrapper
     *
     * @Param: [entity]
     * @return: com.baomidou.mybatisplus.core.conditions.query.QueryWrapper<E>
     */
    public static <E> QueryWrapper<E> getQueryWrapper(E entity) {
        Field[] fields = entity.getClass().getDeclaredFields();
        QueryWrapper<E> eQueryWrapper = new QueryWrapper<>();
        for (int i = 0; i < fields.length; i++) {
            Field field = fields[i];
            //忽略final字段
            if (Modifier.isFinal(field.getModifiers())) {
                continue;
            }
            field.setAccessible(true);
            try {
                Object obj = field.get(entity);
                if (!ObjectUtils.isEmpty(obj)) {
                    String name = ApprenticeUtil.humpToLine(field.getName());
                    eQueryWrapper.eq(name, obj);
                }
            } catch (IllegalAccessException e) {
                return null;
            }
        }
        return eQueryWrapper;

    }

    /** 
     * 反射获取字段值
     * @Param: [entity, value] value 值为 "id" "name" 等
     * @return: java.lang.Object
     */
    public static <E> Object getValueForClass(E entity,String value) {

        Field id = null;
        PropertyDescriptor pd = null;
        try {
            id = entity.getClass().getDeclaredField(value);
            pd = new PropertyDescriptor(id.getName(), entity.getClass());
        } catch (NoSuchFieldException | IntrospectionException e) {
            e.printStackTrace();
        }
        //获取get方法
        Method getMethod = Objects.requireNonNull(pd).getReadMethod();
        return ReflectionUtils.invokeMethod(getMethod, entity);
    }
}
```

反射获取字段值，这段 Java 代码演示了如何使用反射获得指定对象的属性值。方法的泛型表示，可以接受任意类型的参数`entity`
。在此代码中，首先通过反射获取参数`entity`对象所对应类的属性，即`value`。

接着通过 Java 内置的 Introspector 机制获取`id`属性的 JavaBean 规范访问器 PropertyDescriptor，并从该对象提取出对应的
getter 方法。最后，利用 Spring 框架提供的工具类 ReflectionUtils 得到方法后来调用该 getter
方法，获取属性值并返回。需要注意，在反射机制下如果要访问私有成员变量或方法时，应先调用其 setAccessible(true)方法以获得权限。

## 第三步 编写 BaseController 类

下面是我们的 BaseController 类

```java
import cn.hutool.core.util.StrUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.IService;
import com.wangfugui.apprentice.common.util.ApprenticeUtil;
import com.wangfugui.apprentice.common.util.ResponseUtils;
import com.wangfugui.apprentice.dao.dto.PageParamDto;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

/** 
 * 核心公共controller类
 */
public class BaseController<S extends IService<E>, E> {

    @Autowired
    protected S baseService;

    @ApiOperation("增")
    @PostMapping("/insert")
    public ResponseUtils insert(@RequestBody E entity) {
        baseService.save(entity);
        return ResponseUtils.success("添加成功");
    }

    @ApiOperation("删")
    @PostMapping("/deleteById")
    public ResponseUtils delete(@RequestBody List<Integer> ids) {

        baseService.removeByIds(ids);
        return ResponseUtils.success("添加成功");
    }

    @ApiOperation("改")
    @PostMapping("/updateById")
    public ResponseUtils updateById(@RequestBody E entity) {
        baseService.updateById(entity);
        return ResponseUtils.success("添加成功");
    }

    @ApiOperation("查")
    @GetMapping("/getById")
    public ResponseUtils getById(@RequestParam Integer id) {

        return ResponseUtils.success(baseService.getById(id));
    }

    @ApiOperation("存")
    @PostMapping("/save")
    public ResponseUtils save(@RequestBody E entity) {
        baseService.saveOrUpdate(entity);
        return ResponseUtils.success("添加成功");
    }

    @ApiOperation("list查")
    @PostMapping("/list")
    public ResponseUtils list(@RequestBody E entity) {
        QueryWrapper<E> queryWrapper = ApprenticeUtil.getQueryWrapper(entity);
        List<E> list = baseService.list(queryWrapper);
        return ResponseUtils.success(list);
    }

    @ApiOperation("page查")
    @PostMapping("/page")
    public ResponseUtils page(@RequestBody PageParamDto<E> pageParamDto) {
        //限制条件
        if (pageParamDto.getPage() < 1) {
            pageParamDto.setPage(1);
        }

        if (pageParamDto.getSize() > 100) {
            pageParamDto.setSize(100);
        }
        Page<E> page = new Page<>(pageParamDto.getPage(), pageParamDto.getSize());
        QueryWrapper<E> queryWrapper = new QueryWrapper<>();
        //升序
        String asc = pageParamDto.getAsc();
        if (!StrUtil.isEmpty(asc) && !"null".equals(asc)) {
            String[] split = asc.split(",");
            queryWrapper.orderByAsc(split);
        }
        //降序
        String desc = pageParamDto.getDesc();
        if (!StrUtil.isEmpty(desc) && !"null".equals(desc)) {
            String[] split = desc.split(",");
            queryWrapper.orderByDesc(split);
        }
        Page<E> ePage = baseService.page(page, queryWrapper);
        return ResponseUtils.success(ePage);
    }

    @ApiOperation("获取数量")
    @PostMapping("/count")
    public ResponseUtils count(@RequestBody E entity) {
        QueryWrapper<E> queryWrapper = ApprenticeUtil.getQueryWrapper(entity);
        long count = baseService.count(queryWrapper);
        return ResponseUtils.success(count);
    }


}
```

这段 Java 代码展示了一个基本的基于 Spring Boot 框架开发的 RESTful API 接口实现。BaseController 是一个较为通用的
Controller 基类，通过泛型使其可以处理各种实体类型对应的请求（比如增、删、改、查等）。

具体来说，该类中包含了五个基本 HTTP 操作（POST, GET），通过不同参数和请求方式对实体对象进行 CRUD 操作，即添加(insert)、删除(
delete)、修改(update)、查询(getById)、存储(save)、列表查询(list)、分页查询(page)、统计数量(count)。同时，通过 Spring Boot 自带的
Web 开发框架中的注解，将每个方法暴露为一个 Restful API。

需要注意的是，该控制器只是一个模板，实际使用时需要继承该控制器并传入相应的 Service 类作为泛型 S 的参数，并实现具体的 CRUD
方法。

## 第四步 设置分页插件

```java
import com.baomidou.mybatisplus.annotation.DbType;
import com.baomidou.mybatisplus.extension.plugins.MybatisPlusInterceptor;
import com.baomidou.mybatisplus.extension.plugins.inner.PaginationInnerInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MybatisPlusConfig {


    /** 
     * 设置分页插件
     * @Param: []
     * @return: com.baomidou.mybatisplus.extension.plugins.MybatisPlusInterceptor
     */
    @Bean
    public MybatisPlusInterceptor mybatisPlusInterceptor() {
        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();
        interceptor.addInnerInterceptor(new PaginationInnerInterceptor(DbType.MYSQL));
        return interceptor;
    }
    
}
```

## 第五步 继承 BaseController 类

```java
import com.wangfugui.apprentice.dao.domain.Dynamic;
import com.wangfugui.apprentice.service.IDynamicService;
import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 动态表 前端控制器
 */
@RestController
@RequestMapping("/apprentice/dynamic")
@Api("动态管理")
public class DynamicController extends BaseController<IDynamicService, Dynamic>{

}
```

这样就可以有默认的增删改查了

```java
import com.wangfugui.apprentice.dao.domain.Blog;
import com.wangfugui.apprentice.service.IBlogService;
import io.swagger.annotations.Api;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 博客表 前端控制器
 */
@RestController
@RequestMapping("/apprentice/blog")
@Api(tags = "博客管理")
public class BlogController extends BaseController<IBlogService, Blog>{

}
```
