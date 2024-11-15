---
title: Nginx 实现动态封禁IP
excerpt:
description: Nginx Openresty通过Lua+Redis 实现动态封禁IP
date: 2024-09-20
category: Linux
tag: Linux
author: xlc520
article: true
timeline: true
icon: linux
---

```component VPBanner
title: Nginx Openresty通过Lua+Redis 实现动态封禁IP
content: Nginx Openresty通过Lua+Redis 实现动态封禁IP
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: Nginx 实现动态封禁IP
    link: /linux/Nginx 实现动态封禁IP
```

# Nginx Openresty通过Lua+Redis 实现动态封禁IP

### 需求

为了封禁某些爬虫或者恶意用户对服务器的请求，我们需要建立一个动态的 IP 黑名单。对于黑名单中的 IP ，我们将拒绝提供服务。并且可以设置封禁失效时间

### 环境准备

- linux version: centos7 / ubuntu 等
- redis version: 5.0.5
- nginx version: nginx-openresty

### 设计方案

实现 IP 黑名单的功能有很多途径：
1、在操作系统层面，配置 iptables，来拦截指定 IP 的网络请求。

- 优点：简单直接，在服务器物理层面上进行拦截
- 缺点：每次需要手动上服务器修改配置文件，操作繁琐且不灵活

2、在 Web 服务器层面，通过 Nginx 自身的 deny 选项或者 lua 插件配置 IP 黑名单。

- 优点：可动态实现封禁 ip，通过设置封禁时间可以做到分布式封禁
- 缺点：需要了解 Lua 脚本和 Nginx 配置，有一定的学习成本

3、在应用层面，在处理请求之前检查客户端的 IP 地址是否在黑名单中。

- 优点：通过编写代码来实现，相对简单且易于维护。
- 缺点：代码可能会变得冗长，而且在高并发情况下可能影响性能。

为了方便管理和共享黑名单，通过 nginx + lua + redis 的架构实现 IP
黑名单的功能 ![在这里插入图片描述](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/073a293d963e47888f8a3ec9f682ad15tplv-k3u1fbpfcp-jj-mark3024000q75.webp)

### 配置 nginx.conf

在需要进行限制的 server 的 location 中添加如下配置：

```nginx
location / {
    # 如果该location 下存在静态资源文件可以做一个判断      
    #if ($request_uri ~ .*\.(html|htm|jpg|js|css)) {
    # access_by_lua_file /usr/local/lua/access_limit.lua;   
    #}
    
    access_by_lua_file /usr/local/lua/access_limit.lua; # 加上了这条配置，则会根据 access_limit.lua 的规则进行限流
    alias /usr/local/web/;
    index  index.html index.htm;
}
```

### 配置 lua 脚本

/usr/local/lua/access_limit.lua

```lua
-- 可以实现自动将访问频次过高的IP地址加入黑名单封禁一段时间

--连接池超时回收毫秒
local pool_max_idle_time = 10000
--连接池大小
local pool_size = 100
--redis 连接超时时间
local redis_connection_timeout = 100
--redis host
local redis_host = "your redis host ip"
--redis port
local redis_port = "your redis port"
--redis auth
local redis_auth = "your redis authpassword";
--封禁IP时间（秒）
local ip_block_time= 120
--指定ip访问频率时间段（秒）
local ip_time_out = 1
--指定ip访问频率计数最大值（次）
local ip_max_count = 3


--  错误日志记录
local function errlog(msg, ex)
    ngx.log(ngx.ERR, msg, ex)
end

-- 释放连接池
local function close_redis(red)
    if not red then
        return
    end
    local ok, err = red:set_keepalive(pool_max_idle_time, pool_size)
    if not ok then
        ngx.say("redis connct err:",err)
        return red:close()
    end
end


--连接redis
local redis = require "resty.redis"
local client = redis:new()
local ok, err = client:connect(redis_host, redis_port)
-- 连接失败返回服务器错误
if not ok then
    close_redis(client)
    ngx.exit(ngx.HTTP_INTERNAL_SERVER_ERROR)
end
--设置超时时间
client:set_timeout(redis_connection_timeout)

-- 优化验证密码操作 代表连接在连接池使用的次数，如果为0代表未使用，不为0代表复用 在只有为0时才进行密码校验
local connCount, err = client:get_reused_times()
-- 新建连接，需要认证密码
if  0 == connCount then
    local ok, err = client:auth(redis_auth)
    if not ok then
        errlog("failed to auth: ", err)
        return
    end
    --从连接池中获取连接，无需再次认证密码
elseif err then
    errlog("failed to get reused times: ", err)
    return
end

-- 获取请求ip
local function getIp()
    local clientIP = ngx.req.get_headers()["X-Real-IP"]
    if clientIP == nil then
        clientIP = ngx.req.get_headers()["x_forwarded_for"]
    end
    if clientIP == nil then
        clientIP = ngx.var.remote_addr
    end
    return clientIP
end

local cliendIp = getIp();

local incrKey = "limit:count:"..cliendIp
local blockKey = "limit:block:"..cliendIp

--查询ip是否被禁止访问，如果存在则返回403错误代码
local is_block,err = client:get(blockKey)
if tonumber(is_block) == 1 then
    ngx.exit(ngx.HTTP_FORBIDDEN)
    close_redis(client)
end

local ip_count, err = client:incr(incrKey)
if tonumber(ip_count) == 1 then
    client:expire(incrKey,ip_time_out)
end
--如果超过单位时间限制的访问次数，则添加限制访问标识，限制时间为ip_block_time
if tonumber(ip_count) > tonumber(ip_max_count) then
    client:set(blockKey,1)
    client:expire(blockKey,ip_block_time)
end

close_redis(client)
```

### 总结

以上，便是 Nginx+Lua+Redis 实现的 IP 黑名单功能，具有如下优点：

1. 配置简单轻量，对服务器性能影响小。
2. 多台服务器可以通过共享 Redis 实例共享黑名单。
3. 动态配置，可以手工或者通过某种自动化的方式设置 Redis 中的黑名单

### 扩展

1、IP 黑名单的应用场景

IP 黑名单在实际应用中具有广泛的应用场景，主要用于保护服务器和应用免受恶意攻击、爬虫或滥用行为的影响。下面列举几个常见的应用场景：

- 防止恶意访问：黑名单可以阻止那些试图通过暴力破解密码、SQL 注入、XSS 攻击等方式进行非法访问的 IP 地址。
- 防止爬虫和数据滥用：黑名单可以限制那些频繁访问网站并抓取大量数据的爬虫，以减轻服务器负载和保护数据安全。
- 防止 DDOS 攻击：黑名单可以封禁那些发起大规模DDoS攻击的IP地址，保护服务器的稳定性和安全性。
- 限制访问频率：黑名单可以限制某个IP在特定时间段内的访问次数，防止恶意用户进行暴力破解、刷票等行为。

2、高级功能和改进

除了基本的 IP 黑名单功能外，还可以进行一些高级功能和改进，以提升安全性和用户体验：

- 异常检测和自动封禁：通过分析访问日志和行为模式，可以实现异常检测功能，并自动将异常行为的 IP 地址封禁，提高安全性。
- 白名单机制：除了黑名单，还可以引入白名单机制，允许某些 IP 地址绕过黑名单限制，确保合法用户的正常访问。
- 验证码验证：对于频繁访问或异常行为的 IP，可以要求其进行验证码验证，以进一步防止恶意行为。
- 数据统计和分析：将黑名单相关的数据进行统计和分析，例如记录封禁 IP 的次数、持续时间等信息，以便后续优化和调整策略。

通过不断改进和优化 IP 黑名单功能，可以更好地保护服务器和应用的安全。






<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
