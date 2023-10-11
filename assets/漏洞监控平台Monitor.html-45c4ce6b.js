import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c as d,b as e,d as i,e as t,a as n}from"./app-21243f18.js";const o={},c=n(`<h1 id="漏洞监控平台——monitor" tabindex="-1"><a class="header-anchor" href="#漏洞监控平台——monitor" aria-hidden="true">#</a> 漏洞监控平台——Monitor</h1><h2 id="写在前面的话" tabindex="-1"><a class="header-anchor" href="#写在前面的话" aria-hidden="true">#</a> <strong>写在前面的话</strong></h2><p>对于网络安全从业者来说，实时掌握漏洞动态是至关重要的，所以萌生了开发一个监控平台的想法，把最新漏洞资讯集成然后进行推送。这里推送选的是企业微信，留下了邮件推送的接口，默认是关闭的，想开启的小伙伴自行开启。数据库选用的是sqlite。目前实现了监控GitHub、微软、CNNVD。（不要问我为啥不监控CNVD，我是不会告诉你我干不过它的反爬【狗头保命】）。</p><h2 id="项目介绍" tabindex="-1"><a class="header-anchor" href="#项目介绍" aria-hidden="true">#</a> <strong>项目介绍</strong></h2><h3 id="项目目录结构" tabindex="-1"><a class="header-anchor" href="#项目目录结构" aria-hidden="true">#</a> 项目目录结构</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>│  cve_db.db
│  monitor.py
│  style.css
│
├─Functions
│  ├─Commons
│  │      excel.py
│  │      excel_html.py
│  │      github.py
│  │      mail.py
│  │      style.css
│  │      translate.py
│  │      wechat_api.py
│  │      __init__.py
│  │
│  ├─RequestInfo
│  │      cnnvd_monitor.py
│  │      github_monitor.py
│  │      MS_monitor.py
│  │      __init__.py
│  │
│  └─Sql
│          installDb.py
│          sql_helper.py
│
└─log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件说明" tabindex="-1"><a class="header-anchor" href="#文件说明" aria-hidden="true">#</a> 文件说明</h3>`,7),m={href:"http://monitor.py",target:"_blank",rel:"noopener noreferrer"},v=n(`<p><strong>Commons</strong>目录下的文件为主要功能文件。</p><p><strong>RequestInfo</strong>目录下为监控目标的一些文件。</p><p><strong>Sql</strong>目录下为数据库相关文件，installDb.py是用来生成数据库和日志文件的。</p><p><strong>log</strong>目录为存放日志文件目录。</p><h3 id="功能介绍" tabindex="-1"><a class="header-anchor" href="#功能介绍" aria-hidden="true">#</a> 功能介绍</h3><p>同时监控CNNVD、Github、微软官方的漏洞消息。</p><h4 id="cnnvd" tabindex="-1"><a class="header-anchor" href="#cnnvd" aria-hidden="true">#</a> CNNVD</h4><ul><li>每天推送企业微信卡片消息</li><li>Web端漏洞信息表格展示</li><li>每周五统计漏洞数量（高危、中危、低危）</li><li>高危漏洞信息醒目标注</li></ul><h4 id="微软官方漏洞消息" tabindex="-1"><a class="header-anchor" href="#微软官方漏洞消息" aria-hidden="true">#</a> 微软官方漏洞消息</h4><ul><li>每天推送企业微信卡片消息</li><li>Web端漏洞信息表格展示</li></ul><h4 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> Github</h4><ul><li>每天推送企业微信卡片消息</li><li>点击卡片消息自动跳转对应Github链接</li></ul><h4 id="展示效果" tabindex="-1"><a class="header-anchor" href="#展示效果" aria-hidden="true">#</a> 展示效果</h4><p>效果如下图</p><p><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/640-164346328639935.webp" alt="图片" loading="lazy">cve</p><p><strong>当点击CNNVD的消息卡片时，会跳转到相对应的Web端以表格形式展示</strong>，如下图：</p><p><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/640-164346328639936.webp" alt="图片" loading="lazy">cnnvd</p><p><strong>点击微软漏洞消息的漏洞卡片时，也会跳转到相对应的Web端表格展示</strong>，如下图：</p><p><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/640-164346328639937.webp" alt="图片" loading="lazy">微软</p><p><strong>点击Github的漏洞消息通知时，跳转到相对于的Github地址</strong>，如下图：</p><p><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/640-164346328639938.webp" alt="图片" loading="lazy">github</p><h2 id="项目部署" tabindex="-1"><a class="header-anchor" href="#项目部署" aria-hidden="true">#</a> <strong>项目部署</strong></h2><h3 id="前期准备" tabindex="-1"><a class="header-anchor" href="#前期准备" aria-hidden="true">#</a> 前期准备</h3><ul><li>开发语言：python3</li><li>一台服务器(脚本跑在服务器上)</li><li>一个域名(可选)</li></ul><p>首先安装依赖，如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import os
import time
from io import BytesIO
import xlwt
from xlrd import open_workbook
import datetime
import dominate
from dominate.tag import *
import requests
import smtplib
from email.mime.text import MIMEText
from email.header import Header
import hashlib
from lxml import etree
import json
from bs4 import BeautifulSoup
import re
import sqlite3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后进行数据库初始化，初始化时生成log文件夹用来存放生成的日志文件。命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python3 installDb.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="环境搭建" tabindex="-1"><a class="header-anchor" href="#环境搭建" aria-hidden="true">#</a> 环境搭建</h3><p>因为要做Web端表格展示，所以这里<strong>使用Nginx做了目录浏览</strong>。服务器系统使用的是CentOS7，过程如下。</p><p>首先使用yum源下载nginx，命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install -y nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>装好后，查看版本，检查是否安装成功，如下图：</p><figure><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/640-164346328639939.webp" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>然后找到nginx的配置文件，具体位置为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd /etc/nginx/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>找到nginx.conf文件，对其中的server板块进行修改就可以了，<strong>主要是添加了末尾三行</strong>。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>server {
    listen       80;
    listen       [::]:80;
    server_name  _;
   # root         /usr/share/nginx/html;
    charset utf-8;
    # Load configuration files for the default server block.
    include /etc/nginx/default.d/*.conf;
    location / {
            root /usr/share/nginx/html/download;
    autoindex on; #开启索引功能
    autoindex_exact_size off; #关闭计算文件确切大小(bytes)
    autoindex_localtime on; #显示本机时间
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意生成文件位置</strong>，我这里是<code>/usr/share/nginx/html/download</code> ，看个人爱好。</p><p><strong>如果修改，请修改monitor.py的24行和excel_html.py的11行。</strong></p><p><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/640-164346328640040.webp" alt="图片" loading="lazy">image-20220122141836235</p><p><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/640-164346328640041.webp" alt="图片" loading="lazy">image-20220122142248502</p><h3 id="配置企业微信推送" tabindex="-1"><a class="header-anchor" href="#配置企业微信推送" aria-hidden="true">#</a> 配置企业微信推送</h3><p>这个需要先到企业微信创建一个企业，并自建一个应用，<strong>获取到自定义应用的 Secret和注册的企业 corpid</strong>，就可以了。修改位置在**wechat_api.py**文件****<strong>的14行至17行</strong>，如下图：</p><p><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/640-164346328640042.webp" alt="图片" loading="lazy">image-20220122142707821</p><p>启动监控脚本，命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>python3 moniter.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>大功告成！！！</p>`,48);function u(p,h){const a=s("ExternalLinkIcon");return r(),d("div",null,[c,e("p",null,[e("strong",null,[e("a",m,[i("monitor.py"),t(a)])]),i("文件是主文件，部署完成后直接运行就此文件可以。")]),v])}const x=l(o,[["render",u],["__file","漏洞监控平台Monitor.html.vue"]]);export{x as default};
