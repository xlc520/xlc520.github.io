---
title: Fofa 网站
excerpt:
description: Fofa 网站
date: 2024-11-06
category: other
tag: other
author: xlc520
article: true
timeline: true
icon: others
---

```component VPBanner
title: Fofa 网站
content: Fofa 网站
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: Fofa 网站
    link: /other/Fofa 网站
```

# Fofa 网站

[FOFA](https://fofa.info/)

### [FOFA Search Engine 2](https://fofa.info/)

FOFA is a Cyberspace search engine. By conducting Cyberspace mapping, it can help researchers or enterprises quickly
match network assets, such as vulnerability impact range analysis, application distribution statistics, and application
popularity...

# 类似网站

| 名称                                    | 链接                                                       | 语言 | 描述                                                            |
|:--------------------------------------|:---------------------------------------------------------|:---|:--------------------------------------------------------------|
| [FOFA.info](http://fofa.info/)        | [https://fofa.info/](https://fofa.info/)                 | 中文 | [FOFA.info](http://fofa.info/) 网络空间搜索引擎，建议购买会员使用。             |
| ZoomEye                               | [https://www.zoomeye.org/](https://www.zoomeye.org/)     | 中文 | ZoomEye 钟馗之眼，免费好像是一万条。                                        |
| 360 网络空间资产测绘                          | https://quake.360.cn/quake/                              | 中文 | 360 QUAKE 网络空间资产测绘。                                           |
| Spyse — Internet Assets Search Engine | [https://spyse.com/](https://spyse.com/)                 | 英文 | Spyse — 互联网资产搜索引擎，老外的。                                        |
| Shodan                                | [https://www.shodan.io/](https://www.shodan.io/)         | 英文 | Shodan 网络空间设备搜索引擎。                                            |
| Censys                                | [https://censys.io/](https://censys.io/)                 | 英文 | Censys 联网设备信息搜索引擎。                                            |
| ONYPHE                                | https://www.onyphe.io/                                   | 英文 | ONYPHE - Cyber Defense Search Engine。                         |
| DNSDB                                 | https://dnsdb.io/                                        | 英文 | DNSDB - 全球DNS搜索引擎。                                            |
| 全球鹰                                   | [http://hunter.qianxin.com/](http://hunter.qianxin.com/) | 中文 | 全球鹰网络空间测绘搜索平台。                                                |
| FullHunt                              | https://fullhunt.io/                                     | 英文 | FullHunt                                                      |
| 未知                                    | https://hunter.how/                                      | 未知 | 未提供描述。                                                        |
| [Hunter.io](http://hunter.io/)        | [https://hunter.io/](https://hunter.io/)                 | 英文 | [Hunter.io](http://hunter.io/) 是一个电子邮件查找工具，帮助用户找到特定域名的电子邮件地址。 |
| Wigle                                 | https://wigle.net/                                       | 英文 | Wigle 是一个无线网络搜索引擎，允许用户搜索和查看全球的无线网络数据。                         |
| GhostProject                          | https://ghostproject.fr/                                 | 英文 | GhostProject 提供电子邮件和密码泄露数据库搜索服务。                              |
| BinaryEdge                            | [https://app.binaryedge.io/](https://app.binaryedge.io/) | 英文 | BinaryEdge 提供网络安全数据分析和威胁情报服务。                                 |
| GreyNoise                             | https://viz.greynoise.io/table                           | 英文 | GreyNoise 是一个网络噪声情报平台，帮助识别和过滤无关的互联网扫描活动。                      |

# 教程

- ["fofa"无边，搜索clash订阅技巧(附带360搜索) - 开发调优 / 开发调优, Lv1 - LINUX DO 6](https://linux.do/t/topic/79273)
- [佛法资源又一搜，代理资源用不尽 - 开发调优 / 开发调优, Lv1 - LINUX DO 5](https://linux.do/t/topic/121053)
- [利用fofa白嫖机场clash v2订阅（教程） - 福利羊毛 / 福利羊毛, Lv2 - LINUX DO 6](https://linux.do/t/topic/201723)
- [[新手教程\] 网络测绘空间资产的妙用-deeplx - 开发调优 / 开发调优, Lv1 - LINUX DO 1](https://linux.do/t/topic/3147)

检测

- [续机场ip批量检测（多线程支持） - 开发调优 / 开发调优, Lv1 - LINUX DO 5](https://linux.do/t/topic/120381)
- [糊了一个简单的ip质量批量检测脚本，分享给大家，请佬们轻喷 - 资源荟萃 - LINUX DO 4](https://linux.do/t/topic/114358)

## [授人以渔](https://linux.do/t/topic/121053/70)

因为很多代理池爬虫项目都用的同一开源项目，而这些开源项目都有共同的特征，只要搜索特征词就能检索出来。

比如这个开源项目：[GitHub - Zoupers/proxy-pool: One proxy-pool updated from https://github.com/jhao104/proxy_pool 22 3](https://github.com/Zoupers/proxy-pool)

代码内就有这个API展示页代码：[proxy-pool/Api/ProxyApi.py at 6ffe73467aa2ca177b362d8a22eb29b5098c70a3 · Zoupers/proxy-pool · GitHub 24](https://github.com/Zoupers/proxy-pool/blob/6ffe73467aa2ca177b362d8a22eb29b5098c70a3/Api/ProxyApi.py#L42)

搜索body=“get all proxy from proxy pool”，就找出了含有这个特列的API接口页面。

你换成body=“get an usable proxy”，也能找出一些匹配这类项目的服务器~

# 查询

- [https://ping0.cc/ 1](https://ping0.cc/)

# 实战

扫描 [**clash v2订阅** 6](https://linux.do/t/topic/201723)

语法1

```powershell
body="port: 7890" && body="socks-port: 7891" && body="allow-lan: true"
```

结果1

[搜索结果 body=“port: 7890” && body=“socks-port: 7891” && body=“allow-lan: true” - 网络空间测绘，网络空间安全搜索引擎，网络空间搜索引擎，安全态势感知 - FOFA网络空间测绘系统 2](https://fofa.info/result?qbase64=Ym9keT0icG9ydDogNzg5MCIgJiYgYm9keT0ic29ja3MtcG9ydDogNzg5MSIgJiYgYm9keT0iYWxsb3ctbGFuOiB0cnVlIg%3D%3D)

语法2

```powershell
body='type: hysteria2'
```

结果2

[搜索结果 body=‘type: hysteria2’ - 网络空间测绘，网络空间安全搜索引擎，网络空间搜索引擎，安全态势感知 - FOFA网络空间测绘系统 2](https://fofa.info/result?qbase64=Ym9keT0ndHlwZTogaHlzdGVyaWEyJw%3D%3D)

语法3

```powershell
body="get all proxy from proxy pool"
```

[搜索结果 body=“get all proxy from proxy pool” - 网络空间测绘，网络空间安全搜索引擎，网络空间搜索引擎，安全态势感知 - FOFA网络空间测绘系统 2](https://fofa.info/result?qbase64=Ym9keT0iZ2V0IGFsbCBwcm94eSBmcm9tIHByb3h5IHBvb2wi)

语法4

```powershell
body="get all proxy from proxy pool" && country!="CN"
```

[搜索结果 body=“get all proxy from proxy pool” && country!=“CN” - 网络空间测绘，网络空间安全搜索引擎，网络空间搜索引擎，安全态势感知 - FOFA网络空间测绘系统 1](https://fofa.info/result?qbase64=Ym9keT0iZ2V0IGFsbCBwcm94eSBmcm9tIHByb3h5IHBvb2wiICYmIGNvdW50cnkhPSJDTiI%3D)

Sock5代理

```python
protocol=="socks5" && "Version:5 Method:No Authentication(0x00)" && after="1900-01-01" && country="CN"
```

[搜索结果 protocol==“socks5” && “Version:5 Method:No Authentication(0x00)” && after=“1900-01-01” && country=“CN” - 网络空间测绘，网络空间安全搜索引擎，网络空间搜索引擎，安全态势感知 - FOFA网络空间测绘系统 1](https://fofa.info/result?qbase64=cHJvdG9jb2w9PSJzb2NrczUiICYmICJWZXJzaW9uOjUgTWV0aG9kOk5vIEF1dGhlbnRpY2F0aW9uKDB4MDApIiAmJiBhZnRlcj0iJXMiICYmIGNvdW50cnk9IkNOIg%3D%3D)

直接用无需测速

```python
"“89e3175.js”"
```

[搜索结果 ““89e3175.js”” - 网络空间测绘，网络空间安全搜索引擎，网络空间搜索引擎，安全态势感知 - FOFA网络空间测绘系统 1](https://fofa.info/result?qbase64=4oCcODllMzE3NS5qc%2BKAnQ%3D%3D)

## 代理检测代码

[验证 5](https://linux.do/t/topic/121053)

```bash
#!/bin/bash

# 代理列表
proxies=(
  "47.96.176.130:59394"
  "178.48.68.61:18080"
  "91.148.127.162:8080"
  "50.62.183.223:80"
  "116.63.129.202:6000"
  "120.197.40.219:9002"
  "212.127.93.185:8081"
  "154.203.132.55:8090"
  "142.93.142.36:9122"
  "223.113.80.158:9091"
  "112.19.241.37:19999"
  "51.89.73.162:80"
  "154.203.132.55:8080"
  "49.13.9.253:80"
  "79.110.196.145:8081"
  "60.12.168.114:9002"
  "111.160.204.146:9091"
  "91.148.126.189:8080"
  "161.34.40.109:3128"
  "160.248.93.84:3128"
  "8.219.97.248:80"
  "103.153.154.6:80"
)

# 目标URL
url="http://www.baidu.com"

# 检查代理是否有效
for proxy in "${proxies[@]}"; do
  # 通过代理发送请求
  response=$(curl -s -o /dev/null -w "%{http_code}" -x "$proxy" "$url")
  
  # 检查响应状态码
  if [ "$response" -eq 200 ]; then
    echo "Proxy $proxy is valid."
  else
    echo "Proxy $proxy is invalid."
  fi
done
```

[https://linux.do/t/topic/121053/79 1](https://linux.do/t/topic/121053/79)

```python
import requests

# 代理列表
proxies = [
    "45.90.218.85:4444",
    "34.81.160.132:80",
    "193.162.143.222:4444"
]

# 检查代理的函数
def check_proxy(proxy):
    try:
        # 设定请求超时时间
        response = requests.get('http://www.google.com', proxies={"http": "http://" + proxy, "https": "https://" + proxy}, timeout=5)
        # 如果状态码是200，代理工作正常
        if response.status_code == 200:
            print(f"代理 {proxy} 可用。")
        # else:
            # print(f"代理 {proxy} 不可用。")
    except requests.RequestException as e:
        # 捕获异常，代理可能不可用或请求超时
        # print(f"代理 {proxy} 请求失败，错误信息: {e}")
        pass

# 主函数
def main():
    for proxy in proxies:
        check_proxy(proxy)

if __name__ == "__main__":
    main()
```

## [快速节点筛选 3](https://linux.do/t/topic/121053/81)

可以直接将 `/all` 响应 放到 [jsoneditoronline 35 6](https://jsoneditoronline.org/) 筛一遍，就可以获取可用列表

打开网页点击 Transform 右箭头 在 **Query** 里填入以下内容

```bash
function query (data) {
  return _.chain(data)
    .filter(item => item?.last_status == true)
    .orderBy(['last_time'], ['desc'])
    .map(item => ({
      "proxy": item?.proxy,
      "region": item?.region
    }))
    .value()
}
```

## 相关项目

- [GitHub - bestK/fofa_proxy: A proxy pool 3](https://github.com/bestK/fofa_proxy)
- [GitHub - snailyp/ip-checker: 一个基于clash api调用ip-api,scamalytics,ping0等网站获取ip纯净度的项目 4](https://github.com/snailyp/ip-checker)

<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />