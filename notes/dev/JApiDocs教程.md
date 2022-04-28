---
author: xlc520
title: JApiDocs教程
description: JApiDocs教程
date: 2022-02-12
category: Java
tag: Java
article: true
timeline: true
icon: 
password: 
---
# JApiDocs教程

一、Maven依赖

```
<!--  JApiDocs  -->
<dependency>
   <groupId>io.github.yedaxia</groupId>
   <artifactId>japidocs</artifactId>
   <version>1.4.3</version>
</dependency>
```

## 二、代码规范

### 1. 分组名称 @description

*注：官方文档中注明分组名称@description，但是实际应用中不需要加入注解，像下例所示，直接写注释即可。（类上写不写都行，方法上如果加上@description反而不显示）*
例：

```
/**
 * 用户接口
 */
/*注意：这里不能空行，否则注释名无法显示*/
@RequestMapping("test")
@Controller
public class testInterface {

    @Autowired
    private RoleService roleService;
    /**
     * 保存用户
     */
    @PostMapping("advice")
    public RoleInfo getAdviceList(String docId){
        return roleService.FindRoleBydocId(docId);
    }

}
```

### 2. 接口参数（JApiDocs 会通过 @param 来寻找接口参数和进一步解析参数的内容）

*注：注释一定要放在@注解的上面，否则参数会不显示*

#### （1）格式：接口参数 @param 字段 字段解释

例：

```
/**
     * @description 保存用户
     * @param docId  医生id
    */
@PostMapping("advice")
public RoleInfo getAdviceList(String docId){
    return roleService.FindRoleBydocId(docId);
}
```

#### （2）在相应的bean对象里添加注释

例：

```
public class RemindInfo implements Serializable {
  private long remindId;  //提醒id
  private String remindContent;  //提醒信息
  private java.sql.Timestamp remindTime;  //提醒时间
}
```

### 3. 返回对象

#### （1）@RestController 或 @ResponseBody

返回json数据类型
例：

```
/**
 * 用户接口
 */
@RequestMapping("/test")
@RestController
public class testInterface {

    @Autowired
    private RoleService roleService;
    /**
     * 保存用户
     * @param docId  医生id
     */
    @ApiDoc
    @PostMapping("advice")
    public RoleInfo getAdviceList(String docId){
        return roleService.FindRoleBydocId(docId);
    }

}
```

#### （2）请求类型

```
@PostMapping("advice")/@GetMapping("advice")
    public RoleInfo getAdviceList(String docId){
        return roleService.FindRoleBydocId(docId);
    }
```

### 4、高级配置

#### （1）@ApiDoc

##### a.实现

JApiDocs 默认只导出声明了@ApiDoc的接口，我们前面通过设置config.setAutoGenerate(Boolean.TRUE) 来解除了这个限制。如果你不希望把所有的接口都导出，你可以把autoGenerate设置关闭，在相关Controller类或者接口方法上通过添加@ApiDoc来确定哪些接口需要导出。

##### b.其他设置

result: 这个可以直接声明返回的对象类型，如果你声明了，将会覆盖SpringBoot的返回对象
stringResult：返回字符串，在返回结果比较简单，而不想创建一个专门的返回类，则可以考虑使用这个属性。
url: 请求URL，扩展字段，用于支持非SpringBoot项目
method: 请求方法，扩展字段，用于支持非SpringBoot项目

例：

```
@ApiDoc(result = AdminVO.class, url = "/api/v1/admin/login2", method = "post")
stringResult 实例，在文档中将会自动格式化json字符串：
@ApiDoc(stringResult = "{code: 0, data: 'success'}")
@GetMapping(value = "custom-json")
public Map customJsonResult(){}
```

### (2)@Ignore (忽略Controller，接口，字段)

例：忽略Controller

```
@Ignore
public class UserController { 

}
```

## 三、配置参数

在任意一个main入口执行下面的代码：

```
DocsConfig config = new DocsConfig();
config.setProjectPath("your springboot project path"); // 项目根目录
config.setProjectName("ProjectName"); // 项目名称
config.setApiVersion("V1.0");       // 声明该API的版本
config.setDocsPath("your api docs path"); // 生成API 文档所在目录
config.setAutoGenerate(Boolean.TRUE);  // 配置自动生成
Docs.buildHtmlDocs(config); // 执行生成文档
```

## 四、导出格式

### （1）Markdown

```
  config.addPlugin(new MarkdownDocPlugin());
```

### （2）导出 pdf 或者 word

可以通过 [pandoc](https://pandoc.org/) 把 markdown 格式转成 pdf 或者 word 格式。

## 五、自定义代码模板

JApiDocs 除了支持文档导出，目前也支持生成了 Android 和 iOS 的返回对象代码，对应 Java 和 Object-C 语言， 如果你想修改代码模板，可以通过以下的方法：

### （1）定义代码模板

把源码中library项目resources目录下的代码模板拷贝一份，其中，IOS_表示 Object-C 代码模板，JAVA_开头表示 Java代码， 模板中类似${CLASS_NAME}的符号是替换变量，具体含义你可以结合生成的代码进行理解，然后按照你想要的代码模板进行修改即可。

### （2）选择新的模板

通过DocsConfig配置模板路径替换成新的模板：

```
docsConfig.setResourcePath("模板路径");
```

## 六、添加更多功能

JApiDocs 提供了插件接口，你可以通过插件接口来实现更多丰富的功能，下面介绍如何添加插件：

### （1）实现 IPluginSupport 接口

```
public class CustomPlugin implements IPluginSupport{
      @Override
      public void execute(List<ControllerNode> controllerNodeList){
         // 实现你自己的功能需求
      }
}
```

### （2）添加插件

```
 config.addPlugin(new CustomPlugin());
```

## 七、问题的解决

### 1、如何排查错误？

关闭自动生成config.setAutoGenerate(Boolean.FALSE)，使用@ApiDoc 来一个个接口导出排查问题。

### 2、多模块找不到相关类源码？

如果源码路径没有全部识别出来，可以通过config.addJavaSrcPath来添加模块的源码路径，注意要添加到src/main/java这一级。

## 八、自定义注释模板

这是我针对JApiDocs，对我的模板进行了一定的调整，以方便对JApiDocs的使用，大家可以参考一下。

### （1）Live Templates

```
  /**
 * TODO
 * @create_by: 作者名字
 * @create_time: $date$ $time$
 * $params$
 * @return $return$
 */
```

### （2）File Header

```
/**
 * @Author 作者名字
 * @Date ${DATE} ${TIME}
 * @description  ${description}
 * @Version 1.0
 */
```

具体如何实现自定义方法注释，类注释。可以参考下面的文章：

> https://blog.csdn.net/qq_38675373/article/details/105886922

JApiDocs官方文档地址：

> https://japidocs.agilestudio.cn/#/