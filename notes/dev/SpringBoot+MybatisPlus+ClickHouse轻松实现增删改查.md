---
author: xlc520
title: Spring Boot + Mybatis Plus + ClickHouse 轻松实现增删改查
description: 
date: 2022-05-27
category: Java
tag: Java
article: true
timeline: true
icon: java
password: 
---



# Spring Boot + Mybatis Plus + ClickHouse 轻松实现增删改查

## 项目场景：

**ClickHouse 操作基于 Mybatis-puls源码扩展开发。解决ClickHouse的修改和删除 SQL操作与Mysql不相同。**

## 基于 **Mybatis-puls**：

update 、updateById 、 delete 函数

1、`SqlMethodDiv.java` 文件枚举类，对sql脚本定义

```java
package com.demo.infrastructure.injector.enums;
 
/**
 * @author liuxiansong
 */
public enum SqlMethodDiv {
 
    /**
     * 删除
     */
    DELETE_BY_ID("deleteByIdClickHouse", "根据ID 删除一条数据", "<script>\nALTER TABLE %s DELETE WHERE %s=#{%s}\n</script>"),
 
    /**
     * 逻辑删除
     */
    LOGIC_DELETE_BY_ID("deleteByIdClickHouse", "根据ID 逻辑删除一条数据", "<script>\nALTER TABLE %s UPDATE %s where %s=#{%s} %s\n</script>"),
 
    /**
     * 修改 条件主键
     */
    UPDATE_BY_ID("updateByIdClickHouse", "根据ID 选择修改数据", "<script>\nALTER TABLE %s UPDATE %s where %s=#{%s} %s\n</script>"),
    /**
     * 修改 条件主键
     */
    UPDATE("updateClickHouse", "根据 whereEntity 条件，更新记录", "<script>\nALTER TABLE %s UPDATE  %s %s %s\n</script>");
 
    private final String method;
    private final String desc;
    private final String sql;
 
    SqlMethodDiv(String method, String desc, String sql) {
        this.method = method;
        this.desc = desc;
        this.sql = sql;
    }
 
    public String getMethod() {
        return method;
    }
 
    public String getDesc() {
        return desc;
    }
 
    public String getSql() {
        return sql;
    }
}
```

2、`UpdateByIdClickHouse.java` 类文件，继承 AbstractMethod 重载 injectMappedStatement

```java
package com.demo.infrastructure.injector.methods;
 
import com.baomidou.mybatisplus.core.injector.AbstractMethod;
import com.baomidou.mybatisplus.core.metadata.TableInfo;
import com.baomidou.mybatisplus.core.toolkit.sql.SqlScriptUtils;
import com.demo.infrastructure.injector.enums.SqlMethodDiv;
import org.apache.ibatis.executor.keygen.NoKeyGenerator;
import org.apache.ibatis.mapping.MappedStatement;
import org.apache.ibatis.mapping.SqlSource;
 
/**
 * @author liuxiansong
 * @date 2021-05-20
 * @desc 通过MybatisPlus源码 扩展修改
 */
public class UpdateByIdClickHouse extends AbstractMethod {
 
    @Override
    public MappedStatement injectMappedStatement(Class<?> mapperClass, Class<?> modelClass, TableInfo tableInfo) {
        SqlMethodDiv sqlMethod = SqlMethodDiv.UPDATE_BY_ID;
 
        final String additional = optlockVersion(tableInfo) + tableInfo.getLogicDeleteSql(true, true);
        String sql = String.format(sqlMethod.getSql(), tableInfo.getTableName(),
                this.sqlSet(tableInfo.isWithLogicDelete(), false, tableInfo, false, ENTITY, ENTITY_DOT),
                tableInfo.getKeyColumn(), ENTITY_DOT + tableInfo.getKeyProperty(), additional);
        SqlSource sqlSource = languageDriver.createSqlSource(configuration, sql, modelClass);
        return this.addInsertMappedStatement(mapperClass, modelClass,
                sqlMethod.getMethod(), sqlSource, new NoKeyGenerator(), null, null);
    }
 
 
    /**
     * SQL 更新 set 语句
     *
     * @param logic  是否逻辑删除注入器
     * @param ew     是否存在 UpdateWrapper 条件
     * @param table  表信息
     * @param alias  别名
     * @param prefix 前缀
     * @return sql
     */
    @Override
    protected String sqlSet(boolean logic, boolean ew, TableInfo table, boolean judgeAliasNull, final String alias,
                            final String prefix) {
        String sqlScript = table.getAllSqlSet(logic, prefix);
        if (judgeAliasNull) {
            sqlScript = SqlScriptUtils.convertIf(sqlScript, String.format("%s != null", alias), true);
        }
        if (ew) {
            sqlScript += NEWLINE;
            sqlScript += SqlScriptUtils.convertIf(SqlScriptUtils.unSafeParam(U_WRAPPER_SQL_SET),
                    String.format("%s != null and %s != null", WRAPPER, U_WRAPPER_SQL_SET), false);
        }
        sqlScript = convertSet(sqlScript);
        return sqlScript;
    }
 
    /**
     * 去掉sest 和 suffixOverrides=","代表去掉第一个逗号
     *
     * @param sqlScript
     * @return
     */
    public static String convertSet(final String sqlScript) {
        return "<trim prefix=\"\" suffixOverrides=\",\"> " + sqlScript + "\n" + "</trim>";
    }
}
```

3、`ClickHouseSqlInjector.java` 注册方法，继承 DefaultSqlInjector

```java
package com.demo.infrastructure.injector;
 
import com.baomidou.mybatisplus.core.injector.AbstractMethod;
import com.baomidou.mybatisplus.core.injector.DefaultSqlInjector;
import com.demo.infrastructure.injector.methods.DeleteClickHouse;
import com.demo.infrastructure.injector.methods.UpdateByIdClickHouse;
import com.demo.infrastructure.injector.methods.UpdateClickHouse;
 
import java.util.List;
 
/**
 * 注册方法
 *
 * @author liuxiansong
 */
public class ClickHouseSqlInjector extends DefaultSqlInjector {
 
    @Override
    public List<AbstractMethod> getMethodList(Class<?> mapperClass) {
        /**
         * 这里很重要，先要通过父类方法，获取到原有的集合，不然会自带的通用方法会失效的
         */
        List<AbstractMethod> methodList = super.getMethodList(mapperClass);
        /***
         * 添加自定义方法类
         */
        methodList.add(new UpdateByIdClickHouse());
        methodList.add(new UpdateClickHouse());
        methodList.add(new DeleteClickHouse());
        return methodList;
    }
}
```

4、编写SuperMapper 继承BaseMapper，让所有Mapper 继承extends

```java
package com.demo.domain.mapper;
 
import com.baomidou.mybatisplus.core.conditions.Wrapper;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Param;
 
import java.io.Serializable;
 
/**
 * @author liuxiansong
 * 自定义方法
 */
@SuppressWarnings("all")
public interface SuperMapper<T> extends BaseMapper<T> {
 
    /**
     * @return
     * @Description: 删除并填充删除人信息
     * @param: id 主键id
     * @auther: zpq
     * @date: 2020/11/10 11:47 上午
     */
    boolean updateByIdClickHouse(@Param("et") T entity);
 
 
    /**
     * @return
     * @Description: 删除并填充删除人信息
     * @param: id 主键id
     * @auther: zpq
     * @date: 2020/11/10 11:47 上午
     */
    boolean updateClickHouse(@Param("et") T entity, @Param("ew") Wrapper<T> updateWrapper);
 
    /**
     * 主键删除
     *
     * @param id
     * @return
     */
    int deleteByIdClickHouse(Serializable id);
}
```

5、单元测试看效果

```java
package com.demo.test;
 
import com.demo.DemoClickHouse;
import com.demo.domain.dataobject.User;
import com.demo.domain.service.UserService;
import com.demo.infrastructure.util.page.PageResult;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
 
@RunWith(SpringRunner.class)
@SpringBootTest(classes = DemoClickHouse.class)
public class UserMapperTest {
 
    @Autowired
    UserService userService;
 
 
    @Test
    public void findById_Test() {
        User byId = userService.findById(1);
        System.out.println("查询用户ID=1信息：" + byId);
    }
 
    @Test
    public void page_Test() {
        User user = new User();
        Integer page = 1;
        Integer limit = 2;
        PageResult<User> userList = userService.page(user, page, limit);
        System.out.println("查询用户信息分页：" + userList);
    }
 
    @Test
    public void create_Test() {
        User user = new User();
        user.setUserName("张三");
        user.setPassWord("123");
        user.setPhone("12312222");
        user.setEmail("326427540@qq.com");
        userService.create(user);
        System.out.println("创建：" + user);
    }
 
    @Test
    public void update_Test() {
        User user = new User();
        user.setId(1395347901827317761l);
        user.setUserName("小李飞刀");
        user.setPassWord("123");
        user.setPhone("12312222");
        user.setEmail("326427540@qq.com");
        userService.update(user);
        System.out.println("创建：" + user);
    }
 
 
    @Test
    public void delete_Test() {
        userService.delete(1l);
        System.out.println("删除：" + 1l);
    }
 
}
```

![image-20220524224012350](http://alist.ciberviler.top/d/ecloud180/images/blogImage/image-20220524224012350.png)

![图片](http://alist.ciberviler.top/d/ecloud180/images/blogImage/640-16534030656526.png)



## 源码

 https://github.com/saimen90/clickhouse
