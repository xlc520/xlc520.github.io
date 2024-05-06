---
author: xlc520
title: Android Studio 入门报错解决
excerpt: Android Studio 入门报错解决
description: Android Studio 入门报错解决
date: 2024-03-30
category: Android
tag: Android
article: true
timeline: true
icon: android
---

# Android Studio 入门报错解决

在自己的项目外接部署环境的时候遇到报错如标题～

二话不说直接上代码，解决方法如下：

需要在 Gradle Scripts -> `settings.gradle 界面做更新`将

```groovy
repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
```

**括号内**的内容修改为

```groovy
RepositoriesMode.PREFER_SETTINGS
即
repositoriesMode.set(RepositoriesMode.PREFER_SETTINGS)
```

再在 repositories 添加一行如下代码

```groovy
// 本地存放依赖的路径,按下面的顺序获取jar包，1与2都是从本地获取不冲突;3从阿里私服获取；4从maven服务器获取
// 1. 本地Maven仓库
maven { url 'file:///E:\\source\\maven-repository' }
// 2. Maven本地仓库
mavenLocal()
maven { url 'https://maven.aliyun.com/repository/public' }
maven { url 'https://maven.aliyun.com/repository/gradle-plugin' }
maven { url 'https://maven.aliyun.com/repository/google' }
maven { url 'https://maven.aliyun.com/repository/jcenter' }
maven { url 'https://maven.aliyun.com/repository/spring' }
maven { url 'https://maven.aliyun.com/repository/spring-plugin' }
maven { url 'https://maven.aliyun.com/repository/gradle-plugin' }
mavenCentral()
google()
jcenter()
```
