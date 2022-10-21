---
author: xlc520
title: Python自动化办公库
description: 
date: 2022-10-15
category: Java
tag: Java
article: true
timeline: true
icon: java
password: 
---



# Python自动化办公库

## **Excel自动化库**

**1.xlwings 库**

官网：

https://www.xlwings.org/



特点：xlwings 是开源且免费的，预装了 Anaconda 和 WinPython，可在 Windows 和 macOS 上运行。通过 Python 脚本或 Jupyter notebook 自动化 Excel，通过宏从 Excel 调用 Python，并编写用户定义的函数（UDF 仅适用于 Windows）



**2.openpyxl 库**

官网：

https://openpyxl.readthedocs.io



特点：openpyxl 是一个用于读取 / 编写 Excel 2010 xlsx/xlsm/xltx/xltm 文件的 Python 库。它是由于缺乏从 Python 中读取 / 编写 Office Open XML 格式的现有库而诞生的。



**3.xlrd 库**

官网：

https://pypi.python.org/pypi/xlrd



特点：在 python 中，xlrd 库是一个很常用的读取 excel 文件的库，其对 excel 文件的读取可以实现比较精细的控制。



**4.xlwt 库**

官网：

https://pypi.org/project/xlwt/



特点：类比于 xlrd 的 reader，那么 xlwt 就相对于 writer，而且很纯正的一点就是它只能对 Excel 进行写操作。xlwt 和 xlrd 不光名字像，连很多函数和操作格式也是完全相同。



**5.xlutils 库**

官网：

https://pypi.org/project/xlutils/



特点：xlutils（excel utilities）是一个提供了许多操作修改 excel 文件方法的库。xlutils 库也仅仅是通过复制一个副本进行操作后保存一个新文件，xlutils 库就像是 xlrd 库和 xlwt 库之间的一座桥梁，因此，xlutils 库是依赖于 xlrd 和 xlwt 两个库的。



**6.xlsxwriter 库**

官网：

https://xlsxwriter.readthedocs.io/



特点：xlsxwriter 是用于创建 Excel XLSX 文件的 Python 模块，可用于将文本、数字、公式和超链接写入 Excel2007 + XLSX 文件中的多个工作表。它支持格式化等功能。可以说除了 Excel 本身，就属这个功能最齐全了。



**7.pandas 库**

官网：

https://www.pypandas.cn/docs/



特点：pandas 是基于 NumPy 的一种工具，该工具是为了解决数据分析任务而创建的。Pandas 纳入了大量库和一些标准的数据模型，提供了高效地操作大型数据集所需的工具。



**8.Marmir 库**

官网：

https://github.com/brianray/mm



特点：Marmir 采用 Python 数据结构并将其转换为电子表格。它是类固醇上的 xlwt 和 google 电子表格。目标是使用最少的配置轻松生成多种类型的有用表文件。



## **Word自动化库**

**9.python-docx 库**

官网：

https://python-docx.readthedocs.io/en/latest/



特点：python-docx 是一个用于创建和更新 Microsoft Word (.docx) 文件的 Python 库。快速开始、处理文档、处理文本、使用截面、使用页眉和页脚、API基础理、解样式、使用样式理解图片和其他形状。只对 windows 平台有效。



**10.textract 库**

官网：

https://gitee.com/mirrors/textract



特点：它同时兼顾 “doc” 和 “docx”，但安装过程需要一些依赖。你可以批量的用 python 生成 word 文件，推荐使用 docx，不需要会太多。



## **PPT自动化库**

**11.python-pptx 库**

官网：

https://python-pptx.readthedocs.io



特点：python-pptx 是一个用于创建和更新 PowerPoint (.pptx) 文件的 Python 库。典型用途是从数据库内容生成自定义 PowerPoint 演示文稿，可通过单击 Web 应用程序中的链接下载。





## **ODF自动化库**

**12.Relatorio 库**

官网：

https://pypi.org/project/relatorio/



特点：Relatorio 是一个模板库，它提供了一种轻松输出多种文件（odt、ods、png、svg 等）的方法。通过为它们创建插件可以轻松添加对更多文件类型的支持。Relatorio 还提供了一个报告存储库，允许您将 python 对象和报告链接在一起，按 mimetype/name/python 对象查找报告。ODF：开放文档格式（外文名：OpenDocument Format，外语简称：ODF）是一种规范，基于 XML（标准通用标记语言的子集）的文件格式，因应试算表、图表、演示稿和文字处理文件等电子文件而设置。



## **PDF自动化库**

**13.PyPDF2 库**

官网：

https://github.com/mstamy2/PyPDF2



特点：PyPDF2 是一个纯 Python PDF 库，能够拆分、合并、裁剪和转换 PDF 文件的页面。它还可以向 PDF 文件添加自定义数据、查看选项和密码。它可以从 PDF 中检索文本和元数据，也可以将整个文件合并在一起。



**14.ReportLab 库**

官网：

https://www.reportlab.com/opensource/



特点：ReportLab 是久经考验、超强大的开源引擎，用于创建复杂的、数据驱动的 PDF 文档和自定义矢量图形。它是免费的、开源的，并且是用 Python 编写的。



**15.PDFminer 库**

官网：

https://github.com/euske/pdfminer



特点：PDFMiner 是一款用于 PDF 文档的文本提取工具。



## **邮件自动化库**

**16.Django Celery SES 库**

官网：

https://github.com/StreetVoice/django-celery-ses



特点：这个包提供了一个 EmailBackend 来利用 django-celery 发送电子邮件。您可以将 EmailBackend 插入您的项目中，而无需对代码进行任何修改。



**17.Envelopes 库**

官网：

http://tomekwojcik.github.io/envelopes/



特点：Envelopes 是 Python 的电子邮件和 smtplib 模块的包装器。它旨在使在 Python 中处理外发电子邮件变得简单而有趣。



**18.Flanker 库**

官网：

https://github.com/mailgun/flanker



特点：由 mailgun 开源的 Flanker - email address and MIME parsing for Python 是一个解析高效、容错率不错的 python 第三方扩展库。python 3 也可以正常使用，该库包含了邮件地址解析和邮件 mime 格式解析。



**19.imbox 库**

官网：

https://github.com/martinrusev/imbox



特点：用于读取 IMAP 邮箱并将电子邮件内容转换为机器可读数据的 Python 库



**20.inbox.py 库**

官网：

https://github.com/billzhong/inbox.py



特点：这是您见过的最简单的 SMTP 服务器。它是异步的。一个实例每秒应该处理一千多封电子邮件。



**21.sync-engine 库**

官网：

https://github.com/nylas/sync-engine



特点：Nylas 同步引擎在强大的电子邮件同步平台之上提供了一个 RESTful API，可以轻松地在电子邮件之上构建应用程序。



**22.Lamson 库**

官网：

https://github.com/zedshaw/lamson



特点：Lamson 是一个纯 Python SMTP 服务器，旨在以现代 Web 框架（如 Django）的风格创建强大而复杂的邮件应用程序。



**23.Marrow Mailer 库**

官网：

https://github.com/marrow/mailer



特点：Marrow Mailer 是一个 Python 库，可以轻松地从您的应用程序发送电子邮件。通过使用 Marrow Mailer，您可以：轻松构建纯文本和 HTML 电子邮件；提高电子邮件传递的可测试性；使用不同的邮件投递管理策略；例如立即，延迟，甚至多服务器等。



**24.Modoboa 库**

官网：

https://github.com/modoboa/modoboa



特点：Modoboa 是一个邮件托管和管理平台，包括一个现代和简化的 Web 用户界面。它提供了有用的组件，例如管理面板或网络邮件。



**25.smtplib 库**

官网：

https://docs.python.org/zh-cn/3/library/smtplib.html



特点：smtplib 模块是 python 中 smtp (简单邮件传输协议) 的客户端实现。我们可以使用 smtplib 模块，轻松的发送电子邮件。



## **微信自动化库**

**26.Python wxpy 库**

官网：

https://wxpy.readthedocs.io/zh/latest/



特点：微信机器人/可能是最优雅的微信个人号API，wxpy 在 itchat 的基础上，通过大量接口优化提升了模块的易用性，并进行丰富的功能扩展。





## **文件处理自动化库**

**27.os 库**

官网：

https://docs.python.org/zh-cn/3/library/os.html?highlight=os#module-os



特点：本模块提供了一种使用与操作系统相关的功能的便捷式途径。如果你只是想读写一个文件，请参阅 open()，如果你想操作文件路径，请参阅 os.path 模块，如果你想读取通过命令行给出的所有文件中的所有行，请参阅 fileinput 模块。为了创建临时文件和目录，请参阅 tempfile 模块，对于高级文件和目录处理，请参阅 shutil 模块。

## **综合功能自动化库**

**28.win32com 库**

官网：

https://pypi.org/project/pywin32/



特点：win32com 模块主要为 Python 提供调用 windows 底层组件对 word 、Excel、PPT 等进行操作的功能，只能在 Windows 环境下使用，并且需要安装 office 相关软件才行（WPS 也行）。



**29.unoconv 库**

官网：

https://github.com/unoconv/unoconv



特点：是一个命令行工具，可以将 LibreOffice 可以导入的任何文档格式转换为 LibreOffice 可以导出的任何文档格式。它利用 LibreOffice 的 UNO 绑定进行文档的非交互式转换，也支持 OpenOffice。



**30.Tablib 库**

官网：

https://www.osgeo.cn/tablib/



特点：Python tablib 模块是第三方模块，主要作用是将数据导出为各种不同的格式，包括 excel，json，html，yaml，csv，tsv 等格式，怎么样，有点心动了吧，当然这个模块使用起来也是超级简单的。



**31.SnowNLP 库**

官网：

https://github.com/isnowfy/snownlp



特点：SnowNLP 是一个 python 写的类库，可以方便的处理中文文本内容，是受到了 TextBlob 的启发而写的，由于现在大部分的自然语言处理库基本都是针对英文的，于是写了一个方便处理中文的类库，并且和 TextBlob 不同的是，这里没有用 NLTK，所有的算法都是自己实现的，并且自带了一些训练好的字典。注意本程序都是处理的 unicode 编码，所以使用时请自行 decode 成 unicode。



**32.TextBlob 库**

官网：

https://textblob.readthedocs.io



特点：TextBlob 是一个用于处理文本数据的 Python（2 和 3）库。它提供了一个简单的 API，用于深入研究常见的自然语言处理 (NLP) 任务，例如词性标注、名词短语提取、情感分析、分类、翻译等。



**33.TextGrocery 库**

官网：

https://textgrocery.readthedocs.io



特点：TextGrocery 是一个基于 LibLinear 和结巴分词的短文本分类工具，特点是高效易用，同时支持中文和英文语料。



**34.NumPy 库**

官网：

https://www.numpy.org.cn/



特点：NumPy 是 Python 中科学计算的基础包。它是一个 Python 库，提供多维数组对象，各种派生对象（如掩码数组和矩阵），以及用于数组快速操作的各种 API，有包括数学、逻辑、形状操作、排序、选择、输入输出、离散傅立叶变换、基本线性代数，基本统计运算和随机模拟等等。