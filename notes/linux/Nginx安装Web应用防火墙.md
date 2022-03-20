---
# 这是页面的图标
icon: page
# 这是文章的标题
title: Nginx安装Web应用防火墙
# 设置作者
author: xlc520
# 设置写作时间
date: 2022-01-10
# 一个页面只能有一个分类
category: linux
# 一个页面可以有多个标签
tag:
  - Nginx
# 设置当前文章是否在列表中置顶，此页面会在文章列表指定
sticky: false
# 设置当前文章是否收藏在博客主题的文章列表中。当填入数字时，数字越大，排名越靠前。
star: true
# 你可以自定义页脚
# footer: 这是测试显示的页脚
---
# Nginx安装Web应用防火墙

LNMP一键安装包 ngx_lua_waf waf(web应用防火墙) 安装设置。WAF中文名是Web应用防火墙，WAF能够根据规则拦截SQL注入、恶意请求、黑客扫描等HTTP请求从而保护WEB应用的安全。

今天我们要说的是一个比较简单好用的基于lua的waf：ngx_lua_waf。它是一个基于lua-nginx-module(openresty)的web应用防火墙，https://github.com/loveshell/ngx_lua_waf。

用途：

- 防止sql注入，本地包含，部分溢出，fuzzing测试，xss，SSRF等web攻击
- 防止svn/备份之类文件泄漏
- 防止ApacheBench之类压力测试工具的攻击
- 屏蔽常见的扫描黑客工具，扫描器
- 屏蔽异常的网络请求
- 屏蔽图片附件类目录php执行权限
- 防止webshell上传

## ngx_lua_waf安装

### 1. lua支持安装

LNMP一键安装包从1.5开始增加了lua支持的选项，可以通过修改lnmp.conf中Enable_Nginx_Lua后的参数为 y 来启用lua，如果没安装lnmp，修改lnmp.conf后保存，安装完lnmp就是支持lua的，如果已经安装好lnmp，也是按前面修改lnmp.conf

然后lnmp安装包目录下运行`./upgrade.sh nginx` 升级nginx

```
./upgrade.sh nginx
```

输入当前nginx版本号或更新的nginx版本号，升级完成就是支持lua的了。如果出错，请重新下载完整版的LNMP安装包lnmp**-full.tar.gz，再次安装。

### 2. 安装ngx_lua_waf

下载安装ngx_lua_waf：

```
wget https://github.com/loveshell/ngx_lua_waf/archive/master.zip -O ngx_lua_waf.zip
unzip ngx_lua_waf.zip
mv ngx_lua_waf-master /usr/local/nginx/conf/waf
```

nginx上设置并启用ngx_lua_waf

编辑 `/usr/local/nginx/conf/nginx.conf `在**http段**的 `server_tokens off`; 下面添加如下代码：

```
lua_package_path "/usr/local/nginx/conf/waf/?.lua";
lua_shared_dict limit 10m;
init_by_lua_file /usr/local/nginx/conf/waf/init.lua;
```

修改完成保存

如果要想在某个虚拟主机启用ngx_lua_waf可以修改对应虚拟主机的server段，在该server段中 root 网站目录行下面添加如下代码：

```
access_by_lua_file /usr/local/nginx/conf/waf/waf.lua;
```

修改完成保存

测试nginx配置文件：`/usr/local/nginx/sbin/nginx -t`
重载nginx配置生效：`/usr/local/nginx/sbin/nginx -s reload`

如果测试和重载都没报错就已经生效。

可以通过访问 http://域名/test.php?id=../etc/passwd 来测试

提示：您的请求带有>不合法参数，已被网站管理员设置拦截！说明已经正确设置

### 3. ngx_lua_waf防火墙配置

ngx_lua_waf配置文件位置：`/usr/local/nginx/conf/waf/config.lua`
ngx_lua_waf配置文件参数说明：

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

ngx_lua_waf安装到此结束。

### 4. ngx_lua_waf效果图

![ngx_lua_waf waf(web应用防火墙)](https://fastly.jsdelivr.net/gh/xlc520/MyImage@main/MdImg/ngcb15.webp)
![ngx_lua_waf waf(web应用防火墙)](https://fastly.jsdelivr.net/gh/xlc520/MyImage@main/MdImg/ngcb15-16419157753881.webp)

