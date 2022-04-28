---
# 这是页面的图标
icon: page
# 这是文章的标题
title: Intellij idea高效使用教程
# 设置作者
author: xlc520
# 设置写作时间
date: 2022-03-17
# 一个页面只能有一个分类
category: IDEA
# 一个页面可以有多个标签
tag:
  - IDEA
# 设置当前文章是否在列表中置顶，此页面会在文章列表指定
sticky: false
# 设置当前文章是否收藏在博客主题的文章列表中。当填入数字时，数字越大，排名越靠前。
star: true
# 你可以自定义页脚
# footer: 这是测试显示的页脚
---
# Intellij idea高效使用教程

## 一. 安装插件

**1. Codota 代码智能提示插件**

![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/14502291ea3f4cafa4dbbf7bd4ffbf55?from=pc)



只要打出首字母就能联想出一整条语句，这也太智能了，还显示了每条语句使用频率。

原因是它学习了我的项目代码，总结出了我的代码偏好。

![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/5354d75dcd344f4abe2117323e245b82?from=pc)



**如果让它再加上机器学习，人工智能写代码的时代还会远吗？**

**2. Key Promoter X 快捷键提示插件**

![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/c0b8ae097f8241c98c8c883854ef1d7b?from=pc)



每次都会在右下角弹窗提示，帮助我们快速熟悉快捷键。

**3. CodeGlance 显示代码缩略图插件**

![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/8a693ad0e1e544cf91bcd25bf8217e72?from=pc)



当代码很多的时候，方便查看，很有用。

**4. Lombok 简化臃肿代码插件**

![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/7cb0a353d5fa439f8c4ff49fb53d5b0b?from=pc)



实体类中的get/set/构造/toString/hashCode等方法，都不需要我们再手动写了

**5. Alibaba Java Coding Guidelines 阿里巴巴代码规范检查插件**

![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/4cbd3d17c85e4140b6ea2392974ecaf6?from=pc)



会按照阿里Java开发手册上规范帮我们检查代码，然后对代码做不同颜色展示，鼠标放上去，会看到提示内容，帮助我们写出更规范的代码。

**6. CamelCase 驼峰命名和下划线命名转换**

![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/bb6a30de074641a38d8289af714123e7?from=pc)



这几种风格的命名方式，用快捷键 ⇧ + ⌥ + U / Shift + Alt + U可以进行快速转换，当我们需要修改大量变量名称的时候很方便。

**7. MybatisX 高效操作Mybatis插件**

![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/14bf2f1911224f8d9d20350e968221e0?from=pc)



**8. SonarLint 代码质量检查插件**

![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/8f18920331484d05b2996c6551fb19ae?from=pc)



提示我不要用System.out输出，要用logger输出，诸如此类，帮助我们提升代码质量。

**9. Save Actions 格式化代码插件**

![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/bb840418a8294bec9ecbb62e413cc76e?from=pc)



可以帮忙我们优化包导入，自动给没有修改的变量添加final修饰符，调用方法的时候自动添加this关键字等，使我们的代码更规范统一。

**10. CheckStyle 代码风格检查插件**

功能跟Alibaba Java Coding Guidelines类似

**11. Grep Console 自定义控制台输出格式插件**

![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/6ad33ab81cc7487c88e25d8b7fc8d8a2?from=pc)



**12. MetricsReloaded 代码复杂度检查插件**

![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/71cd828d24e3452db4f3294adeea57cf?from=pc)



**13. Statistic 代码统计插件**

![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/b1079d0eb9d344a88b825b158a27a3b6?from=pc)



**14. Translation 翻译插件**

![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/9f0f1abfd35f430e979a1d755e883f68?from=pc)



**15. Rainbow Brackets 彩虹括号插件**

![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/1c110caa286045a88484e408cf4c390c?from=pc)



成对儿的括号显示相同的颜色，有了这个插件，我的近视都好了。

## 二. 自定义创建live template，快速写代码

![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/ca34ebf0555e4167a6a1b22df79521c5?from=pc)



只要输入**apr**，就能自动提示，并且生成**Autowired**语句了。可以根据自己的代码习惯，自定义一些代码模板，帮助我们快速写代码。

![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/dbdf776104314095b737a7de041dd17f?from=pc)



## 三. 修改全局配置，提升工作效率

**1. 优化导包配置**

![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/f49864dd31814de885c68910fdef6c01?from=pc)



**2. 取消tab页单行显示**

![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/98ee419d6c7041308bbabe701acbfbe8?from=pc)



![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/5ca9b27a61054b18835cef4a1b8a43b2?from=pc)



多行显示更多的文件，方便查看。

**3. 双斜杠注释改成紧跟代码头**

![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/47220322c3b140528fdc3e1aa9f4eb4b?from=pc)



![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/46278e2e7eeb45278e8780143687a5d1?from=pc)



**4. 选中复制整行**

![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/216d2ea622b54612abc9be4e4fd9546c?from=pc)



![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/ec7fe392117c4b33952ad37ffd27229c?from=pc)



原本只会复制你选中的代码，改完配置后，就能复制整行，无论你是否完全选中。

**5. 取消匹配大小写**

![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/d0251cc8baae4b3f8e7fa2f0aac37b39?from=pc)



取消勾选后，输入小写 **s**，也能提示出 **String**

**6. 优化版本控制的目录颜色展示**

![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/70c159e0ad25498aaaee36474acfa3cb?from=pc)



**7. 创建文件时，自动生成作者和时间信息**

![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/6f8a411ee60046d1b09a7705131c97c3?from=pc)



**8 . 显示行号和方法分割线**

![Intellij idea高效使用教程](https://p3.toutiaoimg.com/origin/pgc-image/a050ad86c09e4195aa49759185ce5be2?from=pc)



**你还知道哪些关于Intelij idea高效操作或插件，一起在评论区分享吧！**



## IDEA必备20款插件

以下插件已经为大家下载打包了，如果IDEA版本不一致的话，部分插件可能无法安装，可以根据我提供的地址自行下载相应插件：
插件打包下载地址：https://www.lanzouw.com/iV3XKwvq2de

### Leetcode Editor

这是一个上班摸鱼神器，也是一个可以在IDEA中刷算法题目的插件，有很多题目供我们学习，
表面在写代码，其实是在刷题。每道题都有很详细的解题思路
插件下载地址：https://plugins.jetbrains.com/plugin/12132-leetcode-editor

### Jrebel
这个插件真的是强烈推荐，有时候改一点点代码都要重启才能生效，很浪费时间。
有了这个插件，修改代码之后不需要重启也能生效。尤其跟别的同事联调的时候特别爽！
热部署插件，这个插件是收费的，但是可以免费激活，
访问这个https://www.guidgen.com网址生成一个GUID,然后将生成的ID，拼接到下面的URL中，粘贴到激活界面就可以啦
插件下载地址：https://plugins.jetbrains.com/plugin/4441-jrebel-and-xrebel-for-intellij
https://jrebel.qekang.com/你生成的ID

### Background Image Plus
一个设置背景图片的插件，有时候纯黑或者纯白看腻的话，可以使用这个插件自定义背景图片。
也支持动态的更换壁纸
插件下载地址：https://plugins.jetbrains.com/plugin/8502-background-image-plus


### Codota
IDEA的自动补全功能已经很强大了，但是这个插件的自动补全功能更加强大，这是一个基于AI技术，学习了大量的开源项目，智能提示更加的可靠
插件下载地址：https://plugins.jetbrains.com/plugin/7638-codota-ai-autocomplete-for-java-and-javascript
有绿色图标的就是codota自动提示的代码

还有个更强的功能是，它可以从github、stackoverflow上快速的找到你想要的相关代码

### EasyCode
这个插件真的特别强大，它可以通过数据库表自动的生成实体类、Controller、Dao、Service、mapper，简单而且强大。
通过IDEA内置的数据库，在对应的表中右键选择easy code- generate Code，然后选择路径，勾选想要生成的代码就可以啦
插件下载地址：https://plugins.jetbrains.com/plugin/10954-easy-code

### Translation
这是翻译插件，阅读源码有不认识的英文，或者编写变量时，不知道英文怎么写的时候可以直接进行翻译
在菜单栏上也可以直接进行翻译，不用再去打开一些在线翻译网站了
插件下载地址：https://plugins.jetbrains.com/plugin/8579-translation

### Key Promoter X
一个可以让你慢慢脱离鼠标操作的插件，在IDEA中操作时，他会将对应的快捷键，进行提示。
并且右侧会有一个列表，将你近期使用的功能进行展示，对于高频操作我们可以使用快捷键，这样可以提升效率
插件下载地址：https://plugins.jetbrains.com/plugin/9792-key-promoter-x

### Maven Helper
插件下载地址：https://plugins.jetbrains.com/plugin/7179-maven-helper
安装之后，在pom文件中会多出一个Dependcy Analyzer选项卡

Conflicts：显示冲突依赖
All Dependencies as List：以列表形式显示依赖
All Dependencies as Tree：以树的形式显示依赖
遇到冲突的依赖，可以点击右键，跳到源文件或者直接选择Exclude 排除这个依赖

### Alibaba Java Coding Guidelines
阿里巴巴开发的一款插件，可以扫描代码中可能存在的问题
插件下载地址：https://plugins.jetbrains.com/plugin/10046-alibaba-java-coding-guidelines

将不符合规约的代码按 Blocker/Critical/Major(崩溃/严重/重要 ) 三个等级显示在下方，双击可以定位至代码处，右侧窗口还有针对代码的批量修复功能。

### CodeGlance
用过sublime的同学对这个功能一定很熟悉，它是一个迷你缩放图插件
当代码过长的时候可以使用这个插件，相比如下拉框，这个插件更加的直观和方便
插件下载地址：https://plugins.jetbrains.com/plugin/7275-codeglance

### GsonFormat
这是一个将Json字符串自动转换成实体类的插件
安装完插件之后，在实体类中使用快捷键 'alt+insert'，mac是‘control + 回车’选择GsonFormat
插件下载地址：https://plugins.jetbrains.com/plugin/7654-gsonformat


### JavaDoc
这是一个快速生成文档注释的插件
插件下载地址：https://plugins.jetbrains.com/plugin/7157-javadoc
windows上可以通过alt + insert 快捷键，mac是control+回车
可以快速生成注释模板

### ignore
我们在使用git提交项目的时候，有时候会把 .idea 文件提交上去，
这个文件只是一些历史记录，版本信息。完全不用提交。
插件下载地址：https://plugins.jetbrains.com/plugin/7495--ignore
这个时候可以使用ignore这个插件，去配置
在 File- new - .ignore File· 中选择 gitignore File(Git)
选择Example user template，右侧面板表示要忽略的文件，点击Generate


### Rainbow Brackets
这个插件主要是让我们代码中的括号变成彩虹颜色的括号，除了好看还可以帮我们分清括号，防止错乱
插件下载地址：https://plugins.jetbrains.com/plugin/10080-rainbow-brackets

### AceJump
插件下载地址：https://plugins.jetbrains.com/plugin/7086-acejump
这是一个快速光标跳转的插件，可以很大的减少我们使用鼠标的频率
可以查看他的激活快捷键 比如我的是ctrl + 分号，

激活之后，输入你想跳转的字符，比如O键，那么当前界面的O都会打上标签，再输入相应的字母跳转到对应的位置

按向上的键，可以行选定，方法跟上面的一致。
按左右键，是选择开头和结尾
RestfulTool
这是一个接口测试工具，
插件下载地址：https://plugins.jetbrains.com/plugin/14280-restfultool
安装成功之后在右侧会有一个RestfulTool的选项卡，点击之后会显示出当前项目的所有请求地址
并且支持各种各样的请求类型

### Material Theme UI
插件下载地址：https://plugins.jetbrains.com/plugin/8006-material-theme-ui
这是一款不错的主题插件，颜值非常的高，安装之后重启即可生效
可以在设置中，对一些细节，比如调整字体、大小、行间距等

### GenerateAllSetter
插件下载地址：https://plugins.jetbrains.com/plugin/9360-generateallsetter/versions
这个插件可以快速的对实体类生成set代码，这样就不用我们一个一个的去手动set了
使用方法也非常简单，当我们new一个对象的时候，在对象上使用快简介"alt + 回车"
选择Generate all setter with default value就可以自动生成所有set方法啦

### Statistic
一款分析项目代码的工具，按照扩展名列出清单，统计代码数量和行数
点击具体的类别，比如Java，可以统计总行数，有效代码行数，注释行数，以及有效代码比重
插件下载地址：https://plugins.jetbrains.com/plugin/4509-statistic

### Free MyBatis plugin
插件下载地址：https://plugins.jetbrains.com/plugin/8321-free-mybatis-plugin
在使用mybatis时，它可以通过mapper接口中的方法，直接跳转到mapper.xml文件中，
同样也可以从mapper.xml跳转到mapper接口中
非常实用！


### Stop Coding
插件下载地址：https://plugins.jetbrains.com/plugin/15740-stopcoding
最后推荐大家一下防沉迷代码的插件，如果你也经常沉迷于写代码,忘了起身休息喝水,那么试试这个插件吧

当写代码到设定的时间时,它会弹出下框进行提醒,当然,这个框是关不掉的.只有你休息了足够的时间它才会自动关闭.

