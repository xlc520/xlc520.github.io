---
title: Bitwarden-搭建自己的密码管理服务器
excerpt: 各种杂七杂八的APP实在太多了，使用统一密码容易导致密码泄露，使用不同的密码容易记不住，将密码存在第三方也怕会发生数据泄露和服务商倒闭，因此自行考虑搭建密码管理工具
description: Bitwarden-搭建自己的密码管理服务器
date: 2024-05-30
category: other
tag: other
author: xlc520
article: true
timeline: true
icon: others
---

```component VPBanner
title: Bitwarden-搭建自己的密码管理服务器
content: 各种杂七杂八的APP实在太多了，使用统一密码容易导致密码泄露，使用不同的密码容易记不住，将密码存在第三方也怕会发生数据泄露和服务商倒闭，因此自行考虑搭建密码管理工具
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: Bitwarden-搭建自己的密码管理服务器
    link: /Bitwarden-搭建自己的密码管理服务器/
```

# Bitwarden-搭建自己的密码管理服务器

使用网络服务很难绕开的就是需要记忆账号密码，网络服务越来越多单凭记忆已经难以招架，加之安全的考虑一套简单的账号密码策略肯定是不行的。很多浏览器也已经附带账号密码的记忆、自动填充功能，却很难解决浏览器和一些APP之间的互通。今天我们就利用Docker在自己的服务器上搭建一个简单实用的账号密码管理工具Bitwarden。

安装官方版本对服务器硬件有一定的要求，官方使用的是MSSQL数据库，要求内存至少2G以上，GitHub已经有开发者通过Rust实现了Bitwarden的API替代，对服务器要求较低，数据库使用SQLite，该项目名为`vaultwarden`。

Bitwarden官网：[https://bitwarden.com](https://bitwarden.com/)

GitHub - Vaultwarden：https://github.com/dani-garcia/vaultwarden

Bitwarden 帮助中心中文版：[https://help.ppgg.in](https://help.ppgg.in/)

下面是搭建过程，以及如何关闭用户注册、开启两步验证等操作。

## 1. 安装准备

系统：ubuntu 20.4
工具：docker和docker-compose

## 2. 搭建

### 2.1. 创建数据存放位置

```shell
mkdir -p /home/ubuntu/docker_data/bitwarden   ## 创建文件夹

cd /home/ubuntu/docker_data/bitwarden   ## 进入文件夹

vim docker-compose.yml   ## 创建docker-compose
```

### 2.2. 编辑docker-compose.yml

1. 简化版

```yaml
version: '3'
services:
  bitwarden:
    image: vaultwarden/server:latest
    container_name: bitwarden
    restart: always
    volumes:
      - /home/ubuntu/docker_data/bitwarden:/data
    env_file:
      - config.env    # 使用环境变量文件方便配置
    ports:
      - "7890:80"     # 映射外部访问端口7890，根据自己需要修改
```

1. 需要与已有网络通信

这次要安装的服务器上已经有一个`Nginx Proxy Manager`
作为反向代理，所以这里直接连接一个公用的docker网络。可以参看：[【Docker项目】之–Docker、Docker-compose的安装、更新和卸载](https://blog.vlinyu.com/archives/docker-docker-compose-useing-guide#4.2.-不同compose之间网络通讯)

```yaml
version: '3'
services:
  bitwarden:
    image: vaultwarden/server:latest
    container_name: bitwarden
    restart: always
    volumes:
      - /home/ubuntu/docker_data/bitwarden:/data
    env_file:
      - config.env    # 使用环境变量文件方便配置
    ports:
      - "8978:80"     # 映射外部访问端口8978，根据自己需要修改
    networks:
      - mynet

networks:             # 方便与已有的nginx网络通信。
  mynet:
    external: true
```

### 2.3. 配置环境变量文件和创建Docker网络

#### 2.3.1. 配置环境变量文件

```shell
vim config.env
# 是否开放用户注册
SIGNUPS_ALLOWED=true

# Bitwarden 服务使用的域名
DOMAIN=https://xxxx.xxx

# 数据库在容器内的路径
DATABASE_URL=/data/bitwarden.db

# 设置日志路径
LOG_FILE=data/access.log

# 日志级别选项：trace、debug、info、warn、error 以及 off
LOG_LEVEL=warn
EXTENDED_LOGGING=true

# 修改线程，默认为10，若用户多可修改为更大，一般默认不需要设置
ROCKET_WORKERS=10

# 是否开启 Web 客户端
WEB_VAULT_ENABLED=true
```

详细点配置：

```properties

IP_HEADER=none
WEBSOCKET_ENABLED=true
WEBSOCKET_ADDRESS=0.0.0.0
WEBSOCKET_PORT=3012
SENDS_ALLOWED=true
# 启用紧急访问
EMERGENCY_ACCESS_ALLOWED=true
# 日志等级
LOG_LEVEL=warn
 
# 注册需要验证？
SIGNUPS_VERIFY=true
SIGNUPS_VERIFY_RESEND_TIME=3600
SIGNUPS_VERIFY_RESEND_LIMIT=3
# 允许注册的域名白名单（你的邮箱域名）
SIGNUPS_DOMAINS_WHITELIST=yourdomain.com
# 允许创建组织的用户邮箱
ORG_CREATION_USERS=you@yourdomain.com
# 使用 openssl rand -base64 48 命令快速生成管理员令牌
ADMIN_TOKEN=eefPNlNPHiA13sXw2z8B6/og7K/lTzNo0KFrUKjB9xHzpYtiUTmAa9+NmLPCILcB
# 允许邀请？
INVITATIONS_ALLOWED=true
# 邀请名称
INVITATION_ORG_NAME=Vaultwarden
# 邀请失效时间（时）
INVITATION_EXPIRATION_HOURS=12
# 密码提示？
SHOW_PASSWORD_HINT=false
# Vaultwarden 域名
DOMAIN=https://warden.yourdomain.com
 
# 替换您的 Yubikey API 信息（没有请注释掉）
YUBICO_CLIENT_ID=87654
YUBICO_SECRET_KEY=Sd1yGCsWonKyDAkyhObC1khs2QDJQYo1arrfDmg=
# YUBICO_SERVER=http://yourdomain.com/wsapi/2.0/verify
 
# 设置您的 SMTP 发送邮箱信息
SMTP_HOST=smtp.xxx.com
SMTP_FROM=warden@yourdomain.com
SMTP_FROM_NAME=Vaultwarden Service
# 根据邮箱修改
SMTP_SECURITY=force_tls
# SMTP 端口
SMTP_PORT=465
SMTP_USERNAME=warden@yourdomain.com
# 密码用 '' 包围起来
SMTP_PASSWORD='Y6qMP7LVgx+JOzYa3kKbOq8q'
SMTP_TIMEOUT=15
```

详细配置说明：[Home · dani-garcia/vaultwarden Wiki · GitHub](https://github.com/dani-garcia/vaultwarden/wiki)

环境配置：[vaultwarden/.env.template at main · dani-garcia/vaultwarden · GitHub](https://github.com/dani-garcia/vaultwarden/blob/main/.env.template)

#### 2.3.2. 创建Docker网络

已经创建的略过。

```shell
# 创建一个公用的docker网络
docker network create mynet

# 查看docker网络情况
docker network ls

# 显示如下信息
NETWORK ID     NAME      DRIVER    SCOPE
0134ad30defd   bridge    bridge    local
29474e75ede0   host      host      local
33bc01a2e0d0   mynet     bridge    local    # 刚刚新建的网络
```

### 2.4. 拉去镜像开始安装

```shell
docker-compose up -d
```

## 3. 使用及展示

### 3.1. 网页端登录

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden01.png)

如果无法创建账号，需要ssl证书开启访问https。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden02.png)

### 3.2. 浏览器插件

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden03.png)

安装后，填入自己的服务器域名，保存登录。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden04.png)

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden05.png)

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden06.png)

`Send`功能，可以做一些临时的记录，多端同步。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden07.png)

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden08.png)

随机密码生成器

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden09.png)

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden10.png)

### 3.3. Windows客户端

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden11.png)

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden12.png)

### 3.4. Android客户端

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden13.png)

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden14.png)

Android客户端截屏时，提示涉及隐私没有成功，操作没有什么特殊的内容。

### 3.5. 其他客户端

[Install and Sync All of Your Devices | Bitwarden](https://bitwarden.com/download/)

## 4. 其他

### 4.1. 关闭用户注册

注册完用户后，不希望其他人登录注册，可以关闭用户注册。通过修改`config.env`中的`SIGNUPS_ALLOWED=false` 重新安装。

Docker-compose.yml文件中我们已经对数据进行了持久化映射`- /home/ubuntu/docker_data/bitwarden:/data`
，在环境变量中设置了数据库位置`DATABASE_URL=/data/bitwarden.db`，下面我们删除docker容器，使用原有数据重新安装。

```shell
# 进入存放docker-compose.yml文件夹，停止容器
docker-compose stop

# 防止意外，先备份数据
cp -r ~/docker_data/bitwarden bitwarden.archive

# 删除原容器
docker-compose down

# 修改config.env文件SIGNUPS_ALLOWED=false
vim config.env

# 重新运行
docker-compose up -d   #完成
```

### 4.2. 开启两步验证

#### 4.2.1. 开启邮件功能

首先编辑环境配置文件`config.env`，配置SMTP服务功能。在最后面增加如下内容

```json
# 启用管理后台并设置token，默认为空不启用，设置token后则启用，这里是一个例子
ADMIN_TOKEN=SDcWJuiL5eTysdcbnigcFEskgv9mu76GvTgUEqpoA3f92Uvj

# 是否启用WebSocket通知，实时同步：true启用，false禁用
WEBSOCKET_ENABLED=true

# 显示密码提示：true启用，false禁用
SHOW_PASSWORD_HINT=false

# 设置SMTP
SMTP_HOST=smtp.163.com
SMTP_FROM=xxxxx@163.com
SMTP_PORT=465

# 邮箱账号，密码
SMTP_USERNAME=xxxxx
SMTP_PASSWORD=XXXXXXXX
# 自v1.25.0起，不再设置SMTP_SSL和SMTP_EXPLICIT_TLS，使用SMTP_SECURITY替代，它有以下选项：starttls、force_tls和off。
# 465端口使用force_tls，587端口使用starttls，25端口使用off。
SMTP_SECURITY=force_tls

# 启用或禁用邀请：true启用，false禁用
INVITATIONS_ALLOWED=false

# 启用或禁用分享发送功能，默认开启，启用true，禁用false
SENDS_ALLOWED=true
```

ADMIN_TOKEN为管理面板密码，可以使用密码生成器生成。开启邮箱的SMTP服务，这里推荐163的邮箱服务。打开邮箱进入`设置`->`POP3/SMTP/IMAP`->`开启IMAP/SMTP服务`->`新增授权密码`
，一定要记好授权密码（只显示一次，以后无法查询，只能重新获取）。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden15.png)

设置完后重新安装容器。

登录后会发现多了一个 `验证电子邮件` 的提示。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden16.png)

按照提示我们验证一下。
![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden17.png)

#### 4.2.2. 开启两步验证

进入`账户设置`->`安全`->`两步验证`->`电子邮箱 管理`，按下面提示操作。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden18.png)

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden19.png)

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden20.png)

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden21.png)

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden22.png)

这样就开启成功了。

#### 4.2.3. 获取恢复代码

这里依赖邮箱发送验证码，验证登录。为了防止邮箱服务出现问题，我们还需要获取并记住`恢复代码`，防止意外发生，操作如下

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden23.png)

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden24.png)

#### 4.2.4. 测试两步验证

以上工作完成后，注销账户，我们使用两步验证重新登录一下。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden25.png)

开启两步验证后，如果有其他人登录你的账号，未通过两步验证，会得到如下的邮件提醒。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden26.png)

baidu翻译：

```json
有人试图使用正确的主密码登录到您的帐户，但没有提供在首次登录尝试后3分钟内完成两步登录过程所需的正确令牌或操作。

日期：2022年10月16日星期日上午10:33:05+00:00

IP地址：xxxx

设备类型：xxxx

如果这不是您或您授权的人，那么您应该尽快更改主密码，因为它可能会被泄露。
```

#### 4.2.5. 通过恢复代码登录

点击参看官方介绍：https://bitwarden.com/help/lost-two-step-device/

有恢复代码：https://bitwarden.com/help/two-step-recovery-code/#use-your-recovery-code

恢复账号两步登录地址：https://your.domain.com/#/recover-2fa/

需要将`your.domain.com`修改为自己的域名地址。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden27.png)

### 4.3. 忘记主密码怎么办（官方答复：删号重建）

[我忘记了主密码 - Bitwarden 帮助中心中文版](https://help.ppgg.in/your-vault/i-forgot-my-master-password)

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden28.png)

### 4.4. 系统管理

当设置了`ADMIN_TOKEN=`后，可以登录系统管理 `https://your.domain.com/admin`。链接在登录后的 15 分钟内有效。可以通过删除`
ADMIN_TOKEN=`或者`DISABLE_ADMIN_TOKEN=false`方式关闭系统管理员功能。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden29.png)

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden30.png)

这里也可以配置SMTP服务

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/bitwarden31.png)

## 安装 Cloudflared

为了方便以后更新建议添加 cloudflared 软件库[8]，以 Debian 11 (Bullseye) 为例

```go
# 导入 GPG Key
sudo mkdir -p --mode=0755 /usr/share/keyrings
curl -fsSL https://pkg.cloudflare.com/cloudflare-main.gpg | sudo tee /usr/share/keyrings/cloudflare-main.gpg >/dev/null

# 添加软件库
echo 'deb [signed-by=/usr/share/keyrings/cloudflare-main.gpg] https://pkg.cloudflare.com/cloudflared bullseye main' | sudo tee /etc/apt/sources.list.d/cloudflared.list

# 安装 cloudflared
sudo apt update && sudo apt install -y cloudflared
```

登录 Cloudflare Zero Trust[9] 控制台，新建一个 Cloudflare Tunnel，选择系统和架构，复制右边的安装服务命令执行

![Install Cloudflared Service](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/0a2ef4f302f5055f5a3c197b22509930.png)

然后给这个 Tunnel 添加 Public Hostname

![Add Service Port](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/e45b0adbc4a50c1660ab571a7f85ae3c.png)

**[可选] 添加 Websocket Public Hostname**

> ❝
>
> 通过 Websocket 主动向桌面客户端推送密码库更新，此处选择 TCP 类型应该是错误的，更多信息可查看 Vaultwarden Wiki - Enabling
> WebSocket Notifications[10]

![Add Websocket Tunnel](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/c8daaaf3299e04d82424b6c885e45a31.png)

**[推荐] 保护 Vaultwarden 管理员后台路径**

> ❝
>
> 默认的管理后台是 `https://warden.yourdomain.com/admin`，只能通过之前设置的 Admin Token 登录，为了防止这个管理入口被人恶意爆破，此处我们可以使用
> Cloudflare Zero Trust 设置保护策略。

在 Cloudflare Zero Trust[11] 控制台左侧导航栏的 Access 里的 Applications ⇒ Add an applications 添加一个访问应用，类型选择
Self-hosted，选择托管 Vaultwarden 的域名，路径写 admin 保存

![Admin Access](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/0b4e5d4503fca0255fcb2cec123f7788.png)

接着在后面 Policies 和 Authentication 按照你自己的要求设置访问策略和验证方式即可，这样在访问管理员后台的时候，会先通过
Cloudflare Zero Trust 访问策略才能继续。

## 利用Fail2ban进行对爆破者IP的自动封禁

### 一、先决条件

#### 开启 Bitwarden 日志记录

首先要开启 Bitwarden 的日志记录功能，fail2ban 需要通过读取日志中的登录错误日志，来累计失败次数，执行封禁动作。

```
docker run -d --name vaultwarden \
...
  -e LOG_FILE=/data/vaultwarden.log \
...
```

```
# 验证
cat vaultwarden.log
```

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/78805a221a988e7-4.png)

此步骤为重新编辑 Bitwarden 容器的启动命令，新增环境变量 LOG_FILE=/data/vaultwarden.log
，用于把日志持久化到本地。（容器不支持修改，只能删除重建，新增环境变量步骤会删除原容器，如原容器有数据，并且没有持久化到本地，请谨慎操作。）

### 二、配置步骤

#### 1. 创建持久化存储

创建持久化存储，将 fail2ban 的配置文件持久化到本地，防止重建容器时被删除。

```
mkdir -p /opt/1panel/apps/fail2ban/action.d
mkdir -p /opt/1panel/apps/fail2ban/filter.d
mkdir -p /opt/1panel/apps/fail2ban/jail.d
```

路径自定义，跟下面的步骤都有关联，灵活定义、修改。

#### 2. 把 REJECT 类型替换为 DROP

将 iptables 的策略规则有拒绝改成直接丢弃。

```
# vim /opt/1panel/apps/fail2ban/action.d/iptables.local

[Init]
blocktype = DROP
[Init?family=inet6]
blocktype = DROP
```

#### 3. 创建 Dockerfile 文件

创建 fail2ban 容器的 Dockerfile 文件，用来启动容器；

时区国内请使用 “TZ=Asia/Shanghai”

注意 volumes 块的编写，确定要要存放的路径，我这里都放在了 /opt/1panel/apps/fail2ban 下

```
# vim /opt/1panel/apps/fail2ban/docker-compose.yml

version: '3'
services:
  fail2ban:
    container_name: fail2ban
    restart: always
    image: crazymax/fail2ban:latest
    environment: 
      - TZ=Asia/Shanghai
      - F2B_DB_PURGE_AGE=30d
      - F2B_LOG_TARGET=/data/fail2ban.log
      - F2B_LOG_LEVEL=INFO
      - F2B_IPTABLES_CHAIN=INPUT

    volumes:
      - /opt/1panel/apps/fail2ban:/data
      - /opt/1panel/apps/fail2ban/vaultwarden:/vaultwarden:ro
      - /opt/1panel/apps/bitwarden/bitwarden/data/vaultwarden.log:/vaultwarden.log

    network_mode: "host"

    privileged: true
    cap_add:
      - NET_ADMIN
      - NET_RAW
```

##### 坑点：

Github 的部署手册没有/opt/1panel/apps/bitwarden/bitwarden/data/vaultwarden.log:/vaultwarden.log 这条，就会导致在后续启动容器的时候报错找不到
vaultwarden.log 文件。

这是因为 Bitwarden 容器的日志存放在本地，fail2ban 容器并没有权限访问，所以需要把本地 Bitwarden 的日志映射到容器内，映射后，容器方可正常启动。

##### 未映射：

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/78805a221a988e7-5.png)

容器启动失败。

##### 映射后：

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/78805a221a988e7-6.png)

容器正常启动。

#### 4. 使用 Dockerfile 启动容器

启动容器，找到自己定义好的容器数据持久化目录，找到 Dockerfile 文件。

```
cd /opt/1panel/apps/fail2ban/
docker-compose up -d
```

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/78805a221a988e7-7.png)

#### 5. Filter 配置

创建过滤器，检测失败的登录尝试。

```
# vim /opt/1panel/apps/fail2ban/filter.d/vaultwarden.local

[INCLUDES]
before = common.conf

[Definition]
failregex = ^.*Username or password is incorrect\. Try again\. IP: <ADDR>\. Username:.*$
ignoreregex =
```

#### 6. Jail 配置

创建监禁规则，定义监控的端口、日志文件路径、最大重试次数、封禁时间等参数。

```
# vim /opt/1panel/apps/fail2ban/jail.d/vaultwarden.local

[vaultwarden]
enabled = true
port = 58843
filter = vaultwarden
banaction = %(banaction_allports)s
logpath = /vaultwarden.log
maxretry = 3
bantime = 14400
findtime = 14400
```

端口记得替换成自己部署时填写的端口。

#### 7. 验证

查看封禁状态

```
docker exec -t fail2ban fail2ban-client  status  vaultwarden
```

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/78805a221a988e7-8.png)

解封IP地址

```
docker exec -t fail2ban fail2ban-client set vaultwarden unbanip XX.XX.XX.XX
```

Github 链接：https://github.com/dani-garcia/vaultwarden/wiki/Fail2Ban-Setup#synology-dsm






<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
