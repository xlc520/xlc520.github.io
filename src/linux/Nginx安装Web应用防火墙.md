---
author: xlc520
title: Nginx安装Web应用防火墙
excerpt: 
description: Nginx安装Web应用防火墙
date: 2022-01-15
category: other
tag: other
article: true
timeline: true
icon: type
---

# Nginx 安装 Web 应用防火墙

LNMP 一键安装包 ngx_lua_waf waf(web 应用防火墙) 安装设置。WAF 中文名是 Web 应用防火墙，WAF 能够根据规则拦截 SQL
注入、恶意请求、黑客扫描等 HTTP 请求从而保护 WEB 应用的安全。

今天我们要说的是一个比较简单好用的基于 lua 的 waf：ngx_lua_waf。它是一个基于 lua-nginx-module(openresty)
的 web 应用防火墙，<https://github.com/loveshell/ngx_lua_waf。>

用途：

- 防止 sql 注入，本地包含，部分溢出，fuzzing 测试，xss，SSRF 等 web 攻击
- 防止 svn/备份之类文件泄漏
- 防止 ApacheBench 之类压力测试工具的攻击
- 屏蔽常见的扫描黑客工具，扫描器
- 屏蔽异常的网络请求
- 屏蔽图片附件类目录 php 执行权限
- 防止 webshell 上传

## ngx_lua_waf 安装

### 1. lua 支持安装

LNMP 一键安装包从 1.5 开始增加了 lua 支持的选项，可以通过修改 lnmp.conf 中 Enable_Nginx_Lua 后的参数为 y
来启用 lua，如果没安装 lnmp，修改 lnmp.conf 后保存，安装完 lnmp 就是支持 lua 的，如果已经安装好 lnmp，也是按前面修改
lnmp.conf

然后 lnmp 安装包目录下运行`./upgrade.sh nginx` 升级 nginx

```plain
./upgrade.sh nginx
```

输入当前 nginx 版本号或更新的 nginx 版本号，升级完成就是支持 lua 的了。如果出错，请重新下载完整版的 LNMP 安装包 lnmp**
-full.tar.gz，再次安装。

### 2. 安装 ngx_lua_waf

下载安装 ngx_lua_waf：

```plain
wget https://github.com/loveshell/ngx_lua_waf/archive/master.zip -O ngx_lua_waf.zip
unzip ngx_lua_waf.zip
mv ngx_lua_waf-master /usr/local/nginx/conf/waf
```

nginx 上设置并启用 ngx_lua_waf

编辑 `/usr/local/nginx/conf/nginx.conf`在**http 段**的 `server_tokens off`; 下面添加如下代码：

```plain
lua_package_path "/usr/local/nginx/conf/waf/?.lua";
lua_shared_dict limit 10m;
init_by_lua_file /usr/local/nginx/conf/waf/init.lua;
```

修改完成保存

如果要想在某个虚拟主机启用 ngx_lua_waf 可以修改对应虚拟主机的 server 段，在该 server 段中 root 网站目录行下面添加如下代码：

```plain
access_by_lua_file /usr/local/nginx/conf/waf/waf.lua;
```

修改完成保存

测试 nginx 配置文件：`/usr/local/nginx/sbin/nginx -t`
重载 nginx 配置生效：`/usr/local/nginx/sbin/nginx -s reload`

如果测试和重载都没报错就已经生效。

可以通过访问 <http://域名/test.php?id=../etc/passwd> 来测试

提示：您的请求带有>不合法参数，已被网站管理员设置拦截！说明已经正确设置

### 3. ngx_lua_waf 防火墙配置

ngx_lua_waf 配置文件位置：`/usr/local/nginx/conf/waf/config.lua`
ngx_lua_waf 配置文件参数说明：

```lua
RulePath = “/usr/local/nginx/conf/waf/wafconf/”
–规则存放目录
attacklog = “off”
–是否开启攻击信息记录，需要配置logdir
logdir = “/usr/local/nginx/logs/hack/”
–log存储目录，该目录需要用户自己新建，切需要nginx用户的可写权限
UrlDeny=”on”
–是否拦截url访问
Redirect=”on”
–是否拦截后重定向
CookieMatch = “on”
–是否拦截cookie攻击
postMatch = “on”
–是否拦截post攻击
whiteModule = “on”
–是否开启URL白名单
black_fileExt={“php”,”jsp”}
–填写不允许上传文件后缀类型
ipWhitelist={“127.0.0.1”}
–ip白名单，多个ip用逗号分隔
ipBlocklist={“1.0.0.1″}
–ip黑名单，多个ip用逗号分隔
CCDeny=”on”
–是否开启拦截cc攻击(需要nginx.conf的http段增加lua_shared_dict limit 10m;)
CCrate = “100/60”
–设置cc攻击频率，单位为秒.
–默认1分钟同一个IP只能请求同一个地址100次
html=[[Please go away~~]] –警告内容,可在中括号内自定义
```

备注:不要乱动双引号，区分大小写

ngx_lua_waf 安装到此结束。

### 4. ngx_lua_waf 效果图

![ngx_lua_waf waf(web应用防火墙)](https://bitbucket.org/xlc520/blogasset/raw/main/images2/ngcb15.jpg)
![ngx_lua_waf waf(web应用防火墙)](https://bitbucket.org/xlc520/blogasset/raw/main/images2/ngcb15-16419157753881.jpg)
