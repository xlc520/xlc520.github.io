---
author: xlc520
title: 12 个后端开发工具
excerpt: 
description: 12 个后端开发工具
date: 2022-01-11
category: Tools
tag: Tools
article: true
dateline: true
icon: type
---

# 12 个后端开发工具

从手动编码到自动化，从重复工作到创新，开发人员工具随着技术的发展而不断发展。阿里巴巴集团和阿里巴巴云已通过开源发布和基于云的实施向公众提供其技术。通过在各种业务场景中的多年开发积累了这些技术。本文介绍了一些阿里巴巴开发人员工具，希望它们可以帮助您的开发过程更加高效和优雅。

鉴于开发人员可能参与的技术分支的多样性，本文介绍了一些可能对后端开发人员有用的工具。

## 1.阿尔萨斯 Java 在线诊断工具

Arthas 是一款用于 Java 应用程序的在线诊断工具，由阿里巴巴于 2018 年 9 月开源。

典型场景：

您不知道从中加载类的特定 JAR 包。您想弄清楚为什么您的系统会抛出各种与类相关的异常。

您不知道为什么修改后的代码无法执行。您不记得是否已提交更改。您不确定您是否使用正确的分支。

出现问题，您无法在线调试。您想知道是否必须将日志添加到您的应用并再次发布。

您遇到了用户数据处理问题，但无法在线调试或脱机重现问题。

您希望拥有一个全局视图来监视系统的运行状态。

您需要一个解决方案来监视 JVM 的实时运行状态。

Arthas 支持 Java Development Kit（JDK）6 及更高版本，它支持 Linux，Mac 和 Windows。Arthas 使用命令行交互模式，并允许您使用 Tab
在命令行中自动完成命令，从而使问题定位和诊断更加容易。

基础教程：https：//alibaba.github.io/arthas/arthas-tutorials？language = en＆id =arthas-basics

高级教程：https：//alibaba.github.io/arthas/arthas-tutorials？language = en＆id =arthas-advanced

GitHub 页面：https：//github.com/alibaba/arthas

“推荐下自己做的 Spring Boot 的实战项目：<https://github.com/YunaiV/ruoyi-vue-pro>

## 2.Cloud Toolkit IDE 插件

Cloud Toolkit 是一个集成开发环境（IDE）插件，可用于帮助开发人员更有效地开发，测试，诊断和部署应用程序。Cloud Toolkit
允许开发人员方便地将本地应用程序部署到任何计算机（本地或基于云）。Cloud Toolkit 内置了 Arthas 诊断工具，支持高效执行终端命令和
SQL 语句。CloudToolkit 可用于不同的 IDE，例如 IntelliJ IDEA，Eclipse，PyCharm 和 Maven。

典型场景：

每次修改代码时，您都厌倦了反复打包代码。

您不希望经常在 Maven 和 Git 等代码管理工具之间来回切换。

您使用安全副本（SCP）工具上载文件，并使用 XShell 或 SecureCRT 登录到您的服务器，替换部署包或重新启动服务器。

您不希望定期在各种 FTP 和 SCP 工具之间来回切换，以将文件上载到服务器的指定目录。

下载链接：https：//plugins.jetbrains.com/plugin/11386-alibaba-cloud-toolkit

“推荐下自己做的 Spring Cloud 的实战项目：<https://github.com/YunaiV/onemall>
3.ChaosBlade 混沌工程故障注入工具
ChaosBlade 是一个混沌工程工具，遵循混沌工程实验的原则，并提供广泛的故障场景，以帮助您提高分布式系统的容错性和可恢复性。它可以注入潜在的故障，并提供各种故障情景。这些方案包括延迟，异常，返回特定值，修改参数值，重复调用和
try-catch 块异常。

典型场景：

您发现很难测量微服务的容错能力。

您不知道如何验证容器编排配置的合理性。

您不知道如何实现 PaaS 层的健壮性测试。

GitHub 页面：https：//github.com/chaosblade-io/chaosblade

4.阿里巴巴 Java 编码指南
此插件检测 Java 代码中的编码问题，并为您提供提示。这个插件是基于 Kotlin 语言开发的。

IDEA 插件使用说明：

<https://github.com/alibaba/p3c/tree/master/idea-plugin>

Eclipse 插件使用说明：https：//github.com/alibaba/p3c/tree/master/eclipse-plugin

GitHub 页面：https：//github.com/alibaba/p3c

5.应用实时监控服务（ARMS）
ARMS 是一种应用程序性能管理（APM）工具。它提供三种监控选项：前端监控，应用程序监控和自定义监控，帮助您构建自己的实时应用程序性能和业务监控功能。

典型场景：

您在 22:00 收到 37 条警报消息，但您不知道从哪里开始。

客户或业务团队比您更早发现问题。

您每月在服务器上投入数万美元，但您仍然无法保证良好的用户体验。

应用程序监控集成：https：//www.alibabacloud.com/help/doc-detail/63796.htm

自定义监控：https：//www.alibabacloud.com/help/doc-detail/47474.htm

产品页面：https：//www.alibabacloud.com/product/arms

6.Docsite 开源静态网站生成器
Docsite 是一个开源静态网站生成器，可帮助您构建自己的官方网站，文档中心，博客站点和社区。它易于使用和上瘾。它支持反应和静态渲染，PC
和移动客户端，国际化，SEO，降价文档以及许多有用的功能，如全局站点搜索，站点样式自定义和页面自定义。

教程：https：//docsite.js.org/en-us/docs/installation.html

GitHub 页面：https：//github.com/txd-team/docsite

7.Freeline - Android 的二级编译解决方案
Freeline 缓存可重用的类文件和资源索引，并编译代码更新并在几秒钟内将它们部署到您的设备。这有效地减少了在日常开发期间重新编译和安装的大量时间。使用
Freeline 最方便的方法是直接安装 AndroidStudio 插件。

教程：https：//github.com/alibaba/freeline/blob/master/README.md

GitHub 页面：https：//github.com/alibaba/freeline

8.阿里云应用高可用性服务（AHAS）
AHAS 提供了许多强大的功能，例如容器环境的体系结构可视化，例如 Kubernetes（K8s），基于故障注入的高可用性评估，以及一键式限制和降级。AHAS
可帮助您以低成本快速提高应用程序可用性。

典型场景：

重构服务时，您希望可视化体系结构以精确理解资源实例组合和交互。

您需要真正的故障情景和钻取模型。

您希望以低成本使用限制和降级功能。

教程：https：//www.alibabacloud.com/help/doc-detail/90323.htm

产品页面：

https：//www.alibabacloud.com/product/ahas

9.EasyExcel 数据处理工具
EasyExcel 是一个解析 Java 代码并生成 excel 文件的框架。它重写了用于 Microsoft Excel 2007 的 Apache POI SAX 解析器。要处理
3 MB Excel 文件，Apache POI SAX 解析器需要大约 100 MB 内存，而 EasyExcel 需要大约几 KB。此外，EasyExcel 消除了内存（OOM）问题，无论
excel 文件有多大。对于 Microsoft Excel 2003，EasyExcel 仍使用 Apache POI SAX 解析器。但它将模型转换器封装在上层，使其更易于使用。

教程：https：//github.com/alibaba/easyexcel/blob/master/quickstart.md

GitHub 页面：https：//github.com/alibaba/easyexcel

10.HandyJSON for iOS
HandyJSON 是一个用 Swift 语言编写的 json-object 序列化/反序列化库。

与其他流行的 Swift JSON 库相比，HandyJSON 支持纯 Swift 类，易于使用。在反序列化中使用 HandyJSON（将 JSON 转换为模型）时，模型不必从
NSObject 继承，因为 HandyJSON 不是基于 KVC 的。您也不必为模型定义映射函数。在定义模型类并声明它遵循 HandyJSON
协议之后，HandyJSON 通过将属性名称作为键来自动解析 JSON 字符串中的值。

教程：https：//github.com/alibaba/HandyJSON/blob/master/README.md

GitHub 页面：https：//github.com/alibaba/HandyJSON

11.Druid 数据库连接池
Druid 是 Java 语言中最好的数据库连接池，它提供了强大的监视和扩展功能。

教程：https：//github.com/alibaba/druid/wiki/FAQ

GitHub 页面：https：//github.com/alibaba/druid

12.阿里巴巴 DragonwellJava 开发套件
阿里巴巴 Dragonwell 是阿里巴巴/AlipayJDK（AJDK）的开源版本，是阿里巴巴内部使用的定制 OpenJDK。AJDK
为在线电子商务，金融和物流应用程序进行了基于业务场景的优化。它一直在超大型阿里巴巴数据中心运行，每个数据中心运行超过
100,000 台服务器。阿里巴巴 Dragonwell 兼容 Java SE 标准。目前，它仅支持 Linux x86_64 平台。
