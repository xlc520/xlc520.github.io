---
author: xlc520
title: 12 个后端开发工具
description: 12 个后端开发工具
date: 2022-01-11
category: Tools
tag: Tools
article: true
dateline: true
icon: 
password: 
---
# 12 个后端开发工具



从手动编码到自动化，从重复工作到创新，开发人员工具随着技术的发展而不断发展。阿里巴巴集团和阿里巴巴云已通过开源发布和基于云的实施向公众提供其技术。通过在各种业务场景中的多年开发积累了这些技术。本文介绍了一些阿里巴巴开发人员工具，希望它们可以帮助您的开发过程更加高效和优雅。

鉴于开发人员可能参与的技术分支的多样性，本文介绍了一些可能对后端开发人员有用的工具。

## 1.阿尔萨斯Java在线诊断工具
Arthas是一款用于Java应用程序的在线诊断工具，由阿里巴巴于2018年9月开源。

典型场景：

您不知道从中加载类的特定JAR包。您想弄清楚为什么您的系统会抛出各种与类相关的异常。

您不知道为什么修改后的代码无法执行。您不记得是否已提交更改。您不确定您是否使用正确的分支。

出现问题，您无法在线调试。您想知道是否必须将日志添加到您的应用并再次发布。

您遇到了用户数据处理问题，但无法在线调试或脱机重现问题。

您希望拥有一个全局视图来监视系统的运行状态。

您需要一个解决方案来监视JVM的实时运行状态。

Arthas支持Java Development Kit（JDK）6及更高版本，它支持Linux，Mac和Windows。Arthas使用命令行交互模式，并允许您使用Tab在命令行中自动完成命令，从而使问题定位和诊断更加容易。

基础教程：https：//alibaba.github.io/arthas/arthas-tutorials？language = en＆id =arthas-basics

高级教程：https：//alibaba.github.io/arthas/arthas-tutorials？language = en＆id =arthas-advanced

GitHub页面：https：//github.com/alibaba/arthas

“推荐下自己做的 Spring Boot 的实战项目：https://github.com/YunaiV/ruoyi-vue-pro

## 2.Cloud Toolkit IDE插件
Cloud Toolkit是一个集成开发环境（IDE）插件，可用于帮助开发人员更有效地开发，测试，诊断和部署应用程序。Cloud Toolkit允许开发人员方便地将本地应用程序部署到任何计算机（本地或基于云）。Cloud Toolkit内置了Arthas诊断工具，支持高效执行终端命令和SQL语句。CloudToolkit可用于不同的IDE，例如IntelliJ IDEA，Eclipse，PyCharm和Maven。

典型场景：

每次修改代码时，您都厌倦了反复打包代码。

您不希望经常在Maven和Git等代码管理工具之间来回切换。

您使用安全副本（SCP）工具上载文件，并使用XShell或SecureCRT登录到您的服务器，替换部署包或重新启动服务器。

您不希望定期在各种FTP和SCP工具之间来回切换，以将文件上载到服务器的指定目录。

下载链接：https：//plugins.jetbrains.com/plugin/11386-alibaba-cloud-toolkit

“推荐下自己做的 Spring Cloud 的实战项目：https://github.com/YunaiV/onemall
3.ChaosBlade混沌工程故障注入工具
ChaosBlade是一个混沌工程工具，遵循混沌工程实验的原则，并提供广泛的故障场景，以帮助您提高分布式系统的容错性和可恢复性。它可以注入潜在的故障，并提供各种故障情景。这些方案包括延迟，异常，返回特定值，修改参数值，重复调用和try-catch块异常。

典型场景：

您发现很难测量微服务的容错能力。

您不知道如何验证容器编排配置的合理性。

您不知道如何实现PaaS层的健壮性测试。

GitHub页面：https：//github.com/chaosblade-io/chaosblade

4.阿里巴巴Java编码指南
此插件检测Java代码中的编码问题，并为您提供提示。这个插件是基于Kotlin语言开发的。

IDEA插件使用说明：

https://github.com/alibaba/p3c/tree/master/idea-plugin

Eclipse插件使用说明：https：//github.com/alibaba/p3c/tree/master/eclipse-plugin

GitHub页面：https：//github.com/alibaba/p3c

5.应用实时监控服务（ARMS）
ARMS是一种应用程序性能管理（APM）工具。它提供三种监控选项：前端监控，应用程序监控和自定义监控，帮助您构建自己的实时应用程序性能和业务监控功能。

典型场景：

您在22:00收到37条警报消息，但您不知道从哪里开始。

客户或业务团队比您更早发现问题。

您每月在服务器上投入数万美元，但您仍然无法保证良好的用户体验。

应用程序监控集成：https：//www.alibabacloud.com/help/doc-detail/63796.htm

自定义监控：https：//www.alibabacloud.com/help/doc-detail/47474.htm

产品页面：https：//www.alibabacloud.com/product/arms

6.Docsite开源静态网站生成器
Docsite是一个开源静态网站生成器，可帮助您构建自己的官方网站，文档中心，博客站点和社区。它易于使用和上瘾。它支持反应和静态渲染，PC和移动客户端，国际化，SEO，降价文档以及许多有用的功能，如全局站点搜索，站点样式自定义和页面自定义。

教程：https：//docsite.js.org/en-us/docs/installation.html

GitHub页面：https：//github.com/txd-team/docsite

7.Freeline - Android的二级编译解决方案
Freeline缓存可重用的类文件和资源索引，并编译代码更新并在几秒钟内将它们部署到您的设备。这有效地减少了在日常开发期间重新编译和安装的大量时间。使用Freeline最方便的方法是直接安装AndroidStudio插件。

教程：https：//github.com/alibaba/freeline/blob/master/README.md

GitHub页面：https：//github.com/alibaba/freeline

8.阿里云应用高可用性服务（AHAS）
AHAS提供了许多强大的功能，例如容器环境的体系结构可视化，例如Kubernetes（K8s），基于故障注入的高可用性评估，以及一键式限制和降级。AHAS可帮助您以低成本快速提高应用程序可用性。

典型场景：

重构服务时，您希望可视化体系结构以精确理解资源实例组合和交互。

您需要真正的故障情景和钻取模型。

您希望以低成本使用限制和降级功能。

教程：https：//www.alibabacloud.com/help/doc-detail/90323.htm

产品页面：

https：//www.alibabacloud.com/product/ahas

9.EasyExcel数据处理工具
EasyExcel是一个解析Java代码并生成excel文件的框架。它重写了用于Microsoft Excel 2007的Apache POI SAX解析器。要处理3 MB Excel文件，Apache POI SAX解析器需要大约100 MB内存，而EasyExcel需要大约几KB。此外，EasyExcel消除了内存（OOM）问题，无论excel文件有多大。对于Microsoft Excel 2003，EasyExcel仍使用Apache POI SAX解析器。但它将模型转换器封装在上层，使其更易于使用。

教程：https：//github.com/alibaba/easyexcel/blob/master/quickstart.md

GitHub页面：https：//github.com/alibaba/easyexcel

10.HandyJSON for iOS
HandyJSON是一个用Swift语言编写的json-object序列化/反序列化库。

与其他流行的Swift JSON库相比，HandyJSON支持纯Swift类，易于使用。在反序列化中使用HandyJSON（将JSON转换为模型）时，模型不必从NSObject继承，因为HandyJSON不是基于KVC的。您也不必为模型定义映射函数。在定义模型类并声明它遵循HandyJSON协议之后，HandyJSON通过将属性名称作为键来自动解析JSON字符串中的值。

教程：https：//github.com/alibaba/HandyJSON/blob/master/README.md

GitHub页面：https：//github.com/alibaba/HandyJSON

11.Druid数据库连接池
Druid是Java语言中最好的数据库连接池，它提供了强大的监视和扩展功能。

教程：https：//github.com/alibaba/druid/wiki/FAQ

GitHub页面：https：//github.com/alibaba/druid

12.阿里巴巴DragonwellJava开发套件
阿里巴巴Dragonwell是阿里巴巴/AlipayJDK（AJDK）的开源版本，是阿里巴巴内部使用的定制OpenJDK。AJDK为在线电子商务，金融和物流应用程序进行了基于业务场景的优化。它一直在超大型阿里巴巴数据中心运行，每个数据中心运行超过100,000台服务器。阿里巴巴Dragonwell兼容Java SE标准。目前，它仅支持Linux x86_64平台。


