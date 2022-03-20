---
author: xlc520
title: python安装源
description: python安装源
date: 2022-01-19
category: other
tag: other
article: true
timeline: true
icon: 
password: 
---
# python安装源

在`C:\Users\Administrator\pip`下，新建`pip.ini`，输入以下内容：

```python
[global]
timeout = 6000
index-url = https://mirrors.aliyun.com/pypi/simple/
[install]
use-mirrors = true
mirrors = https://mirrors.aliyun.com/pypi/simple/
trusted-host = mirrors.aliyun.com
```

其他：

```python
[global]
# 阿里云
index-url = https://mirrors.aliyun.com/pypi/simple/ 
# 清华大学
# index-url = https://pypi.tuna.tsinghua.edu.cn/simple/
# 中国科技大学
# index-url = https://pypi.mirrors.ustc.edu.cn/simple/ 
# 豆瓣
# index-url = http://pypi.douban.com/simple 
# Python官方
# index-url = https://pypi.python.org/simple/ 
# v2ex
# index-url = http://pypi.v2ex.com/simple/ 
# 中国科学院
# index-url = http://pypi.mirrors.opencas.cn/simple/ 
```

