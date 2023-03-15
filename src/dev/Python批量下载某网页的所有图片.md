---
author: xlc520
title: Python 批量下载某网页的所有图片
description: Python 批量下载某网页的所有图片
date: 2022-05-31
category: Python
tag: Python
article: true
timeline: true
icon: python
---



# Python 批量下载某网页的所有图片

```python
# requests是第三方库：用pip install requests安装
import requests

from bs4 import BeautifulSoup

# 设置变量用于拼接网址
page_number = 4

# 用while循环控制访问的网页
while page_number < 8 :

    # page_number = 4时，访问的是网址的第4页
    html_url = 'https://www.tukuppt.com/peitu/zonghe_0_0_0_0_0_0_{}.html'.format(page_number)

    # 用get函数发送网页请求
    url_response = requests.get(html_url)
    
    # 检验请求是否成功
    print(url_response.status_code)

    # 解析请求到的网页内容
    bs = BeautifulSoup(url_response.text,'html.parser')
    #print(bs)

    # 搜索网页中所有包含图片名称和图片链接的tag
    # 得到一整个dl标签
    picture_list = bs.find_all('dl',class_='cbox item')
    #print(picture_list)

    # for 循环取出dl中的每一个标签
    for i in picture_list :
        # 取出dl标签中的所有a标签中的第2个a标签
        # [1]取到的是第2个标签
        picture_list_a = i.find_all('a')[1]
        #print(picture_list_a)

        # 取出图片名称：图片名称在img标签内属性为'alt'
        picture_name = picture_list_a.find('img')['alt']
        #print(picture_name)

        # 取出图片链接：图片链接在img标签内属性为'data-original'
        picture_url_d = picture_list_a.find('img')['data-original']
        #print(picture_url_d)
        
        # 完整的图片链接
        picture_url = ('https:'+picture_url_d)
        #print(picture_url)

        # 访问图片链接
        picture_url_response = requests.get(picture_url)

        # 将访问的响应结果以二进制数据的形式返回
        picture_content = picture_url_response.content

        # 图片内容以二进制形式写入
        with open ('.\\摄影图\\'+picture_name+'.jpg', 'wb' ) as f :
          
            # 将二进制数据写入文件
            f.write(picture_content)
        # 用print查看代码运行步骤
        print('《{}》已保存'.format(picture_name))

    page_number += 1
print('程序结束!')

```

