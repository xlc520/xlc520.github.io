import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,a}from"./app-BkZy1zYI.js";const l={},t=a(`<h1 id="漏洞监控平台——monitor" tabindex="-1"><a class="header-anchor" href="#漏洞监控平台——monitor"><span>漏洞监控平台——Monitor</span></a></h1><h2 id="写在前面的话" tabindex="-1"><a class="header-anchor" href="#写在前面的话"><span><strong>写在前面的话</strong></span></a></h2><p>对于网络安全从业者来说，实时掌握漏洞动态是至关重要的，所以萌生了开发一个监控平台的想法，把最新漏洞资讯集成然后进行推送。这里推送选的是企业微信，留下了邮件推送的接口，默认是关闭的，想开启的小伙伴自行开启。数据库选用的是 sqlite。目前实现了监控 GitHub、微软、CNNVD。（不要问我为啥不监控 CNVD，我是不会告诉你我干不过它的反爬【狗头保命】）。</p><h2 id="项目介绍" tabindex="-1"><a class="header-anchor" href="#项目介绍"><span><strong>项目介绍</strong></span></a></h2><h3 id="项目目录结构" tabindex="-1"><a class="header-anchor" href="#项目目录结构"><span>项目目录结构</span></a></h3><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>│  cve_db.db
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件说明" tabindex="-1"><a class="header-anchor" href="#文件说明"><span>文件说明</span></a></h3><p><strong>monitor.py</strong>文件是主文件，部署完成后直接运行就此文件可以。</p><p><strong>Commons</strong>目录下的文件为主要功能文件。</p><p><strong>RequestInfo</strong>目录下为监控目标的一些文件。</p><p><strong>Sql</strong>目录下为数据库相关文件，installDb.py 是用来生成数据库和日志文件的。</p><p><strong>log</strong>目录为存放日志文件目录。</p><h3 id="功能介绍" tabindex="-1"><a class="header-anchor" href="#功能介绍"><span>功能介绍</span></a></h3><p>同时监控 CNNVD、Github、微软官方的漏洞消息。</p><h4 id="cnnvd" tabindex="-1"><a class="header-anchor" href="#cnnvd"><span>CNNVD</span></a></h4><ul><li>每天推送企业微信卡片消息</li><li>Web 端漏洞信息表格展示</li><li>每周五统计漏洞数量（高危、中危、低危）</li><li>高危漏洞信息醒目标注</li></ul><h4 id="微软官方漏洞消息" tabindex="-1"><a class="header-anchor" href="#微软官方漏洞消息"><span>微软官方漏洞消息</span></a></h4><ul><li>每天推送企业微信卡片消息</li><li>Web 端漏洞信息表格展示</li></ul><h4 id="github" tabindex="-1"><a class="header-anchor" href="#github"><span>Github</span></a></h4><ul><li>每天推送企业微信卡片消息</li><li>点击卡片消息自动跳转对应 Github 链接</li></ul><h4 id="展示效果" tabindex="-1"><a class="header-anchor" href="#展示效果"><span>展示效果</span></a></h4><p>效果如下图</p><p><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346328639935.webp" alt="图片" loading="lazy">cve</p><p><strong>当点击 CNNVD 的消息卡片时，会跳转到相对应的 Web 端以表格形式展示</strong>，如下图：</p><p><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346328639936.webp" alt="图片" loading="lazy">cnnvd</p><p><strong>点击微软漏洞消息的漏洞卡片时，也会跳转到相对应的 Web 端表格展示</strong>，如下图：</p><p><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346328639937.webp" alt="图片" loading="lazy">微软</p><p><strong>点击 Github 的漏洞消息通知时，跳转到相对于的 Github 地址</strong>，如下图：</p><p><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346328639938.webp" alt="图片" loading="lazy">github</p><h2 id="项目部署" tabindex="-1"><a class="header-anchor" href="#项目部署"><span><strong>项目部署</strong></span></a></h2><h3 id="前期准备" tabindex="-1"><a class="header-anchor" href="#前期准备"><span>前期准备</span></a></h3><ul><li>开发语言：python3</li><li>一台服务器(脚本跑在服务器上)</li><li>一个域名(可选)</li></ul><p>首先安装依赖，如下：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>import os
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后进行数据库初始化，初始化时生成 log 文件夹用来存放生成的日志文件。命令如下：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>python3 installDb.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="环境搭建" tabindex="-1"><a class="header-anchor" href="#环境搭建"><span>环境搭建</span></a></h3><p>因为要做 Web 端表格展示，所以这里<strong>使用 Nginx 做了目录浏览</strong>。服务器系统使用的是 CentOS7，过程如下。</p><p>首先使用 yum 源下载 nginx，命令如下：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>yum install -y nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>装好后，查看版本，检查是否安装成功，如下图：</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346328639939.webp" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>然后找到 nginx 的配置文件，具体位置为：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>cd /etc/nginx/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>找到 nginx.conf 文件，对其中的 server 板块进行修改就可以了，<strong>主要是添加了末尾三行</strong>。</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>server {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意生成文件位置</strong>，我这里是<code>/usr/share/nginx/html/download</code> ，看个人爱好。</p><p><strong>如果修改，请修改 monitor.py 的 24 行和 excel_html.py 的 11 行。</strong></p><p><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346328640040.webp" alt="图片" loading="lazy">image-20220122141836235</p><p><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346328640041.webp" alt="图片" loading="lazy">image-20220122142248502</p><h3 id="配置企业微信推送" tabindex="-1"><a class="header-anchor" href="#配置企业微信推送"><span>配置企业微信推送</span></a></h3><p>这个需要先到企业微信创建一个企业，并自建一个应用，<strong>获取到自定义应用的 Secret 和注册的企业 corpid</strong>，就可以了。修改位置在** wechat_api.py**文件****<strong>的 14 行至 17 行</strong>，如下图：</p><p><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346328640042.webp" alt="图片" loading="lazy">image-20220122142707821</p><p>启动监控脚本，命令如下：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>python3 moniter.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>大功告成！！！</p>`,56),s=[t];function r(d,o){return i(),n("div",null,s)}const m=e(l,[["render",r],["__file","漏洞监控平台Monitor.html.vue"]]),b=JSON.parse('{"path":"/other/%E6%BC%8F%E6%B4%9E%E7%9B%91%E6%8E%A7%E5%B9%B3%E5%8F%B0Monitor.html","title":"漏洞监控平台——Monitor","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"漏洞监控平台——Monitor","excerpt":null,"description":"漏洞监控平台——Monitor","date":"2022-02-11T00:00:00.000Z","category":"other","tag":"other","article":true,"timeline":true,"icon":"type","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/other/%E6%BC%8F%E6%B4%9E%E7%9B%91%E6%8E%A7%E5%B9%B3%E5%8F%B0Monitor.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"漏洞监控平台——Monitor"}],["meta",{"property":"og:description","content":"漏洞监控平台——Monitor"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346328639935.webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"other"}],["meta",{"property":"article:published_time","content":"2022-02-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"漏洞监控平台——Monitor\\",\\"image\\":[\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346328639935.webp\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346328639936.webp\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346328639937.webp\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346328639938.webp\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346328639939.webp\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346328640040.webp\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346328640041.webp\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images2/640-164346328640042.webp\\"],\\"datePublished\\":\\"2022-02-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"写在前面的话","slug":"写在前面的话","link":"#写在前面的话","children":[]},{"level":2,"title":"项目介绍","slug":"项目介绍","link":"#项目介绍","children":[{"level":3,"title":"项目目录结构","slug":"项目目录结构","link":"#项目目录结构","children":[]},{"level":3,"title":"文件说明","slug":"文件说明","link":"#文件说明","children":[]},{"level":3,"title":"功能介绍","slug":"功能介绍","link":"#功能介绍","children":[]}]},{"level":2,"title":"项目部署","slug":"项目部署","link":"#项目部署","children":[{"level":3,"title":"前期准备","slug":"前期准备","link":"#前期准备","children":[]},{"level":3,"title":"环境搭建","slug":"环境搭建","link":"#环境搭建","children":[]},{"level":3,"title":"配置企业微信推送","slug":"配置企业微信推送","link":"#配置企业微信推送","children":[]}]}],"git":{"createdTime":1647698494000,"updatedTime":1714224756000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":2},{"name":"xlc520","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":3.38,"words":1015},"filePathRelative":"other/漏洞监控平台Monitor.md","localizedDate":"2022年2月11日"}');export{m as comp,b as data};
