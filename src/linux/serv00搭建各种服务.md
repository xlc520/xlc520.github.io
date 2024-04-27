---
author: xlc520
title: serv00搭建各种服务
description: Serv00 是一个提供免费虚拟主机的平台，其托管平台使用的是 FreeBSD 系统
date: 2024-03-16
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
---

# serv00搭建各种服务

[这个平台](https://www.serv00.com/)是个 Virtual Host ，没有 Root ，还是 FreeBSD 的系统，不是 Linux ，不太好用。但是优点是隔离性差，
Memory 和 vCPU 能短时间内超过 100% 进行调用。

**Serv00** 是一个提供免费虚拟主机的平台，其托管平台使用的是 **FreeBSD** 系统，而不是 Linux。每个账号有效期为 **10年**
，超过三个月不登录 Panel 以及 SSH 则会被删除账号。以下是 Serv00 提供的服务概览：

- **存储空间**：3 GB
- **每月流量**：无限制
- **网站数量**：100
- **MySQL 数据库**：10 个
- **PostgreSQL 数据库**：3 个
- **MongoDB 数据库**：3 个
- **GIT/SVN/HG 仓库**：3 个
- **TCP/UDP 端口**：3 个
- **PHP 解释器**：3 个
- **系统进程**：15 个
- **RAM**：512MB
- **备份**：7 天
- **服务器放置**：欧盟
- **免费子域名**：`username.serv00.net`
- **技术支持**：只有论坛 SLA，不支持现代技术
- **SSH 访问**：支持
- **SSH 隧道**：不支持
- **远程数据库访问**：不支持
- **固态硬盘**：支持
- **没有广告**：支持

已经玩了不少时间了，起初看到 Github 上有使用 Serv00 搭建 Vless 节点的[仓库](https://github.com/qwer-search/serv00-vless)
，就上手玩了一下，后来发现极其不稳， screen 运行的进程总是过一段时间就掉了（后经网友讨论确认为Serv00有时候会重启宿主机），又得ssh上去启动，相当不友好，且后来又发现了
Hax 这样的玩具，就对 Serv00 视如敝履了。

但是这两天有[群友](https://jq.qq.com/?_wv=1027&k=qssjFvAs)突然提醒我才想起，我在 Hax 上用的很舒服的 pm2 也可以在 Serv00
上使用，这个十年有效期的玩具突然显得有用了起来。

经过我的尝试，成功在 Serv00 上部署了一些服务，接下来进行记录：

# 面板自带功能

## 域名

Serv00 上如果想要使用自己的域名，有两种方式，一种是通过 Cloudflare 提供的 Argo 隧道，不仅能绑域名，免配置 ssl ，还可以享受
Cloudflare 的免费 CDN 提速。第二种就是直接使用面板内自带的 DNS 服务器功能绑定自己的域名。

在 Panel 中进入 DNS zones 选项卡，使用 Add new zone 功能添加自己的域名或者自己的域名的子域，然后在 Zone list 中找到刚刚添加的域名，点击
Edit 查看 DNS 记录，把当中列出的全部记录添加到自己的域名的 DNS 记录中即可完成域名的绑定。

Serv00 本身对于绑定在其上的域名提供了许多的服务支持，这里所说的绑定在Serv00上的域名包括自己绑定的自己的域名，以及 Serv00
在注册账户时赠送的域名 `USERNAME.serv00.net` ，其服务包括免费的一键申请式的 SSL 证书、域名邮箱、 DNS 管理等多种功能。

### SSL证书申请

在 Panel 中进入 WWW websites 选项卡，点击 Manage SSL certificates ，在你需要申请 SSL 证书的域名的 A 记录指向的那个 IP
地址右侧点击 Manage ，再点击 Add certificate ， Type 选择 Generate Let’s Encrypt certificate ，Domain 选择要申请 SSL
证书的域名，再点击 Add 即可。

### 域名邮箱

Panel 中进入 E-mail 选项卡，注册账号后会自动注册一个域名邮箱，用户名是 `USERNAME@USERNAME.serv00.net` 是 Serv00 的账户密码。可以使用
Add new e-mail 功能新建邮箱账户。

也可以在 Add new alias 功能中新建别名邮箱，其别名邮箱功能也提供了和 Cloudflare 一样的 Catch-all 的 Advanced settings
选项，用来批量注册东西十分方便。

目前我的测试中，似乎没有在 Manage whitelist 中添加进白名单的域名邮箱发来的邮件全部都会被识别为垃圾邮件。所以有需要的话可以在
Manage whitlist 中添加你需要接受邮件的邮箱的域名，比如 `qq.com` 、 `gmail.com` 等等。

如果绑定了自己的域名，想要使用自己的域名配置域名邮箱的话，要在 Domain list 中找到自己的域名，点击最右边的 DKIM ， action 选择
Add DNS record automatically ，然后 Sign domain 以注册域名，使得新的域名邮箱能够通过一些邮件接收服务器的验证。

Open web client 功能就可以进入邮箱的登录页面了，其使用方法与大多数的邮箱相同，不再赘述。

### DNS管理

DNS zones 选项卡中在自己绑定的域名右侧点击 Edit ，即可查看当前域名的所有 DNS 记录，在 Add new record 中可以手动添加新的
DNS 记录，与大多数的域名服务商提供的 DNS 管理的功能类似。

### Proxy

WWW websites 选项卡中可以根据语言不同添加多种网站，其中 PHP 的 `eval() function` 和 `exec() function`
都要在添加完网站后，在Manage > Details 中打开。不同类型的网页其 Details 中的选项也都有差异，可以按需查看配置，这里重点讲一下
Proxy 类型指向自己的应用程序监听端口的配置。

Add new website 功能中， Domain 填写自己的域名或者 serv00 分配的域名，或者它们的子域，展开 Advanced settings， Website type
选择 Proxy ，Proxy target 选择 localhost ， Proxy port 选择自己的应用监听的端口，其他选项留空或者保持默认，点击 Add
即可。接下来就能使用刚刚填写的域名访问自己部署的对应端口的应用了。如果需要 https 访问，再按前文的步骤去申请 SSL 证书即可。

## 运行自己的应用

Additional services 选项卡中找到 Run your own applications 项目，将其设置为 Enabled 即可。*
*如果不开启这一项，自己的用户目录下的所有文件都无法添加可执行权限。**

## File manager

文件管理，有一定的在线编辑和预览的功能，兼具文件的上传下载，删除新建等各种管理功能，十分便利。

## Port reservation

需要使用端口都得在这申请。

## 数据库

Serv00 提供了 MySQL 、 PostgreSQL 、 MongoDB 三种数据库，可以按需新建数据库、数据库用户。同时， Serv00 还提供了三种数据库的
webui ，十分便利。

需要注意的是，所有数据库在新建时，其用户名和数据库名都有一个 `mxxx_` 的前缀，在使用时容易被忽视。

## Cron jobs

Cron jobs 选项卡提供了一些计划性任务的设置功能，在这里可以设置开机自启任务，或者定时循环任务，当然常用的还是开机自启任务的设定，
Specify time 选择 After reboot 即为开机自启。

# 部署应用前的一些准备工作

在部署自己的应用之前，我建议提前安装好 pm2 以及 Cloudflared （可选）。前者是进程管理工具，用来方便开机自启，以及程序崩溃后自启，查阅进程运行情况等等。后者是
Cloudflare 的 Argo 隧道客户端，用它也可以给自己部署的应用加域名。特别是 Uptime Kuma ，更加推荐使用 Cloudflared
加域名，而不建议使用面板自带的 Proxy 。

## Pm2

这个是重中之重，如果不是成功安装了 pm2 ，我甚至不会尝试探索 Serv00 这个玩具有什么用，所以 pm2 的安装方法记录在开头。

在 SSH 连接 serv00 之后，直接使用一键脚本安装 pm2 ：

```
bash <(curl -s https://raw.githubusercontent.com/k0baya/alist_repl/main/serv00/install-pm2.sh)
```

> 如果安装完成后执行 `pm2` 提示命令未找到，你可以断开 SSH 连接，再重新连接，即可。

## Cloudflared

Cloudflared 官方仓库并没有构建 FreeBSD
系统上能够使用的二进制文件，但是同样的，我找到了[第三方的构筑](https://cloudflared.bowring.uk/)。使用第三方构筑的二进制文件，就能愉快的使用隧道了。

关于 Cloudflared 是什么，有什么用，ARGO_TOKEN 如何获取等部分，这里不再赘述，详细可以查看我的关于 CodeSandbox 和 Hax 的文章。

创建并进入Cloudflared 的工作目录：

```
mkdir -p ~/domains/cloudflared && cd ~/domains/cloudflared
```

下载 Cloudflared：

```
wget https://cloudflared.bowring.uk/binaries/cloudflared-freebsd-latest.7z && 7z x cloudflared-freebsd-latest.7z && rm cloudflared-freebsd-latest.7z && mv -f ./temp/* ./cloudflared && rm -rf temp
```

测试运行：

```
./cloudflared tunnel --edge-ip-version auto --protocol http2 --heartbeat-interval 10s run --token ARGO_TOKEN
```

> 其中 ARGO_TOKEN 要替换成自己的。确定运行没有问题后，按 `Ctrl+c`即可停止运行。

使用 pm2 启动 Cloudflared：

```
pm2 start ./cloudflared -- tunnel --edge-ip-version auto --protocol http2 --heartbeat-interval 10s run --token ARGO_TOKEN
```

> 其中 ARGO_TOKEN 要替换成自己的。

接着去 CLoudflare 的面板中设置域名对应端口，即可使用域名访问自己搭建的服务了。

## 安装 go1.22

> 如果你有安装自己使用 go build 构建的需求，你可以选择安装最新的 go1.22 ，这里记录其安装过程。

由于 Serv00 服务器上并未提供 go1.22 ，只提供了 go1.20.3 ，无法正常进行构建工作，所以需要手动安装 go1.22 环境。

```
# 创建安装目录
mkdir -p ~/local/soft && cd ~/local/soft
# 下载编译好的 go1.22 的程序包
wget https://dl.google.com/go/go1.22.0.freebsd-amd64.tar.gz
# 解压
tar -xzvf go1.22.0.freebsd-amd64.tar.gz
# 删除压缩文件
rm go1.22.0.freebsd-amd64.tar.gz
# 修改 .profile 文件
echo 'export PATH=~/local/soft/go/bin:$PATH' >> ~/.profile
# 使 .profile 的修改生效
source ~/.profile
# 检查 go 版本
go version
```

# 部署自己的应用

> 关于设定 PHP 版本、插件、参数等配置均可参考文档的[ .htaccess ](https://docs.serv00.com/htaccess/)部分进行配置，由于 PHP
> 的应用部署实在是太简单，故本文不会过多介绍。

## WordPress

实际上在 serv00 的[文档](https://docs.serv00.com/)中有搭建网站的示例，没错，示例就有 WordPress ，实际上 WordPress
确实可以搭建，十分简单好用。这里不做过多介绍，按照文档一步步操作即可。

除了 WordPress 外，文档中还详细介绍了 Redis、Memcached、Imapsync、WP-CLI、Tomcat 等服务的搭建方法，有需求的都可以照着抄。

## KodBox

虽然 Serv00 能够部署 KodBox，但是实在是不太好用。最直观的感受就是卡，因为 KodBox 运行期间需要调用多个 PHP 组件，而 Serv00
限制同时处理三个 PHP 进程，所以显得特别慢。其次， Serv00 没有 Root 权限，部分 PHP 插件没有安装，也无法安装，导致有一些 KodBox
的插件无法正常运行。

当然如果只是图新奇搭一个玩玩，也是可以的。下面是步骤：

首先在 Panel 中 Add a New Website ：

| Key          | Value                                                        |
|--------------|--------------------------------------------------------------|
| Domain       | `xxx.USERNAME.serv00.net`（也可以把原有的USERNAME.serv00.net删掉后重新添加） |
| Website Type | PHP                                                          |

添加完新站点后，继续点击上方的 Manage SSL certificates ，接着在出口 IP 的右侧点击 Manage ，再点击 Add certificate ：

| Type                                 | Domain                                              |
|--------------------------------------|-----------------------------------------------------|
| Generate Let’s Encrypted certificate | 与刚刚添加的站点域名保持一致（如果是原有的`USERNAME.serv00.net` ，可以省略此步） |

接着SSH登入，并进入刚刚你新建的域名目录下的 `public_html` 路径下：

```bash
# 安装KodBox
bash <(curl -s https://pan.rappit.site/d/shell/kodbox1.49/serv00-kodbox-install.sh)
```

然后去 Panel 中的 MySQL 选项卡，新建数据库和用户，用以接入 KodBox 。再去 WWW Websites 选项卡中找到 用户名.serv00.net ，点击右侧的
Manage > Details 进入设置，把 GZIP compression、Allow PHP eval() function、Allow PHP exec() function 三个功能打开。

然后使用浏览器访问你的 KodBxo 的域名，进行安装配置即可。初次启动需要较长的时间，请耐心等待。

## [Lsky-Pro](https://github.com/lsky-org/lsky-pro)

一开始看[兰空图床的文档](https://docs.lsky.pro/)没看到 webdav 功能的相关介绍，只看到几个我都不用的存储介质，遂不感兴趣的搁置了，然而群友近日又提起，我打开
GitHub 才发现首页有个 Commit 的标题就是 webdav 相关，即兰空图床支持 webdav 。于是我便部署了一下，体验感觉还不错，简单易用。

本来无意在本篇文章再多写 PHP 相关的站点部署，因为过于简单。但是奈何群友有需求，遂做个简单的步骤记录：

首先在 Panel 中 Add a New Website ：

| Key          | Value                                                        |
|--------------|--------------------------------------------------------------|
| Domain       | `xxx.USERNAME.serv00.net`（也可以把原有的USERNAME.serv00.net删掉后重新添加） |
| Website Type | PHP                                                          |

添加完新站点后，继续点击上方的 Manage SSL certificates ，接着在出口 IP 的右侧点击 Manage ，再点击 Add certificate ：

| Type                                 | Domain                                              |
|--------------------------------------|-----------------------------------------------------|
| Generate Let’s Encrypted certificate | 与刚刚添加的站点域名保持一致（如果是原有的`USERNAME.serv00.net` ，可以省略此步） |

接着SSH登入，并进入刚刚你新建的域名目录下：

```bash
# 下载图床应用
release_info=$(curl -s https://api.github.com/repos/lsky-org/lsky-pro/releases/latest)
asset_url=$(echo "$release_info" | jq -r '.assets[] | select(.name != "source code") | .browser_download_url')
curl -L -o temp.zip "$asset_url" && unzip -q temp.zip && rm -f temp.zip
rm -rf public_html && ln -s "$PWD/public" "$PWD/public_html"
```

接着在 Panel 中 WWW websites 选项卡内，点击自己刚刚创建的用于部署 Lsky-Pro 的域名的 Manage > Details ，在 **Open Basedir
directories** 的最末添加：

```bash
:/usr/home/用户名/domains/xxx.USERNAME.serv00.net
```

> 记得把用户名和最末的域名换成自己的。

然后把 **GZIP compression** 、**Allow PHP eval() function** 、**Allow PHP exec() function** 都打开，点击 save changes 保存。

然后去 Panel 中的 MySQL 选项卡，新建数据库和用户，用以接入 Lsky-Pro 。

然后使用浏览器访问你的 Lsky-Pro 的域名，进行安装配置即可。

> 上面的应用不需要占用端口。

------

> 下面的应用每一个都能够 / 需要占用端口。

## Vless

这个肯定是第一时间部署的，每次遇到这样的平台，第一时间总是想着能不能搭建节点。

### ①

首先在 Panel 中放行一个端口，接着按照下表 Add a New Website ：

| Key          | Value                                                          |
|--------------|----------------------------------------------------------------|
| Domain       | `xxx.USERNAME.serv00.net`（也可以把原有的 USERNAME.serv00.net 删掉后重新添加） |
| Website Type | proxy                                                          |
| Proxy Target | localhost                                                      |
| Proxy URL    | 留空                                                             |
| Proxy port   | 你准备用来部署 Vless 的端口                                              |
| Use HTPPS    | False                                                          |
| DNS support  | True                                                           |

添加完新站点后，继续点击上方的 Manage SSL certificates ，接着在出口 IP 的右侧点击 Manage ，再点击 Add certificate ：

| Type                                 | Domain                                              |
|--------------------------------------|-----------------------------------------------------|
| Generate Let’s Encrypted certificate | 与刚刚添加的站点域名保持一致（如果是原有的`USERNAME.serv00.net` ，可以省略此步） |

接着SSH登入，并进入刚刚你新建的域名目录下：

```bash
# 克隆源仓库
rm -rf public_html && git clone https://github.com/qwer-search/serv00-vless public_html && cd public_html && rm -f README.md
```

使用vim编辑或者直接去 Panel 中的 File Manager 选项卡在线编辑 `app.js` 文件，修改端口为刚刚放行的端口。

安装依赖：

```bash
npm install
```

安装完毕后，使用pm2启动并守护vless进程：

```bash
pm2 start app.js --name vless
```

接着去你的代理客户端软件中手动添加 vless 配置即可：

| Key     | Value                                  |
|---------|----------------------------------------|
| 地址      | Panel中WWW Websites 选项卡里的你的 Domain name |
| 端口      | 你放行的端口                                 |
| 用户 id   | 37a0bd7c-8b9f-4693-8916-bd1e2da0a817   |
| 传输协议    | ws                                     |
| 伪装域名    | 同地址                                    |
| ws path | /                                      |

上表没有给出的可以不填。

### ②

首先在 Panel 中放行一个端口，接着按照下表 Add a New Website ：

| Key          | Value                                                          |
|--------------|----------------------------------------------------------------|
| Domain       | `xxx.USERNAME.serv00.net`（也可以把原有的 USERNAME.serv00.net 删掉后重新添加） |
| Website Type | proxy                                                          |
| Proxy Target | localhost                                                      |
| Proxy URL    | 留空                                                             |
| Proxy port   | 你准备用来部署 Vless 的端口                                              |
| Use HTPPS    | False                                                          |
| DNS support  | True                                                           |

添加完新站点后，继续点击上方的 Manage SSL certificates ，接着在出口 IP 的右侧点击 Manage ，再点击 Add certificate ：

| Type                                 | Domain                                              |
|--------------------------------------|-----------------------------------------------------|
| Generate Let’s Encrypted certificate | 与刚刚添加的站点域名保持一致（如果是原有的`USERNAME.serv00.net` ，可以省略此步） |

接着SSH登入，并进入刚刚你新建的域名目录下的 `public_html` 路径下，再使用 `npm` 命令安装 `@3Kmfi6HP/nodejs-proxy` ：

```bash
npm install @3Kmfi6HP/nodejs-proxy
```

> 被删库了可以自己换个源安装，比如：

```bash
npm --registry http://r.cnpmjs.org install @3Kmfi6HP/nodejs-proxy
```

这个源如果也不行了请自己找其他源替换。

再使用 pm2 启动：

```bash
# 记得把 PORT 替换成自己放行的端口。
pm2 start npx --name vless -- nodejs-proxy -p PORT
```

接着访问这个刚刚添加的站点，即可在网页上直接获取配置。
**哦对，有个小 `bug` ，端口需要改成 443 ，而网页中默认给的配置是 80 。**

> 之所以说这个 `npm` 包不安全，是因为其配置在网页上都可以看到，而且网页设计不太合理，有一个不带 `uuid` 的中转页面，所以可以使用
**fofa** 、 **shodan** 等网络空间扫描工具批量扫出来，而且不止 Serv00 一个平台有人使用，如果你感兴趣，你可以去搜搜看，可以收获一大批
> Vless 节点。
>
> 这里放一个 Serv00 上的，我在 fofa 上搜到的页面作为部署示例：https://pclwgdwv.serv00.net/

## Alist

Alist 官方仓库没有构筑 FreeBSD 系统下能够运行的 Alist 可执行文件，但是我在 Github 上发现了一个使用 Github Workflow 自动构筑
FreeBSD 适用的 Alist 的[仓库](https://github.com/uubulb/alist-freebsd)，使用这个仓库就可以很便利的在Serv00上部署 Alist。

首先在 Panel 中放行一个端口，接着按照下表 Add a New Website ：

| Key          | Value                                                          |
|--------------|----------------------------------------------------------------|
| Domain       | `xxx.USERNAME.serv00.net`（也可以把原有的 USERNAME.serv00.net 删掉后重新添加） |
| Website Type | proxy                                                          |
| Proxy Target | localhost                                                      |
| Proxy URL    | 留空                                                             |
| Proxy port   | 你准备用来部署 Alist 的端口                                              |
| Use HTPPS    | False                                                          |
| DNS support  | True                                                           |

添加完新站点后，继续点击上方的 Manage SSL certificates ，接着在出口 IP 的右侧点击 Manage ，再点击 Add certificate ：

| Type                                 | Domain                                              |
|--------------------------------------|-----------------------------------------------------|
| Generate Let’s Encrypted certificate | 与刚刚添加的站点域名保持一致（如果是原有的`USERNAME.serv00.net` ，可以省略此步） |

接着 SSH 登入，并进入刚刚你新建的域名目录下的 `public_html` 路径下：

```bash
# 使用一键命令安装 Alist
wget -O alist-freebsd.sh https://raw.githubusercontent.com/k0baya/alist_repl/main/serv00/alist-freebsd.sh && sh alist-freebsd.sh
```

在 Panel 中进入 MySQL 选项卡，使用 Add database 功能新建一个数据库。

> 密码要求含有大写字母、小写字母和数字三种字符，且长度必须超过6个字符。

接下来进入 File manager 选项卡，进入 `~/domains/xxx.USERNAME.serv00.net/public_html/data`
路径，可以看到一个名为 `config.json` 的文件，右键点击，选择 View/Edit > Source Editor ，进行编辑：

我主要修改了 CDN、database、scheme
三个部分，其中CDN可以在 [Alist 的官方文档](https://link.zhihu.com/?target=https://alist.nn.ci/zh/config/configuration.html%23cdn)
找到，请选择你本地网络连接速度最快的一个。

scheme 部分，我选择修改 adress 为 `127.0.0.1`本地回环，是为了避免被他人使用 `http://ip:port`
的方式进行访问。至于自己怎么访问，我在本文后面的部分会进行介绍。port 要改成自己前面放行的端口。

database 部分，type 需要改成 `mysql` ，host 填写你在注册邮件中看到的 mysql 的地址， port 是默认的
3306，用户名、密码、数据库名则按照你创建的情况进行填写。

> 最新版本的 Alist 如果不想开启 S3 Server，请把对应的配置文件中的端口配置为 0 。

改完之后，点击 save 保存，接着回到 SSH 窗口中进行操作：

测试启动 Alist：

```bash
./alist server
```

> 确定运行没有问题后，按 `Ctrl+c`即可停止运行。

使用 pm2 启动并管理 alist：

```bash
pm2 start ./alist -- server
```

> 同样的，你还可以使用 Cloudflared 隧道添加域名，而不选择使用 Proxy 。

## [Synctv](https://synctv.wiki/)

群友仿照 alist-freebsd 的仓库的 workflow 进行构筑的。部署简单，与 alist 类似。首先在 Panel 中放行一个端口，接着按照下表 Add
a New Website ：

| Key          | Value                                                          |
|--------------|----------------------------------------------------------------|
| Domain       | `xxx.USERNAME.serv00.net`（也可以把原有的 USERNAME.serv00.net 删掉后重新添加） |
| Website Type | proxy                                                          |
| Proxy Target | localhost                                                      |
| Proxy URL    | 留空                                                             |
| Proxy port   | 你准备用来部署 Synctv 的端口                                             |
| Use HTPPS    | False                                                          |
| DNS support  | True                                                           |

添加完新站点后，继续点击上方的 Manage SSL certificates ，接着在出口 IP 的右侧点击 Manage ，再点击 Add certificate ：

| Type                                 | Domain                                              |
|--------------------------------------|-----------------------------------------------------|
| Generate Let’s Encrypted certificate | 与刚刚添加的站点域名保持一致（如果是原有的`USERNAME.serv00.net` ，可以省略此步） |

接着 SSH 登入，并进入刚刚你新建的域名目录下的 `public_html` 路径下：

```bash
# 下载可执行文件
release_info=$(curl -s https://api.github.com/repos/shangskr/synctv-freebsd/releases/latest)
asset_url=$(echo "$release_info" | jq -r '.assets[] | select(.name != "source code") | .browser_download_url')
curl -L -o synctv "$asset_url" && chmod +x synctv
```

新建启动脚本：

```bash
cat > start.sh << EOF
#!/bin/sh
# 如果不希望被使用 http://ip:port 的方式访问，取消注释下一行
# export SYNCTV_SERVER_LISTEN=127.0.0.1
# 把下一行的最末的PORT改成自己放行的端口
export SYNCTV_SERVER_PORT=PORT
exec ./synctv server --data-dir ./
EOF
```

添加可执行权限：

```bash
chmod +x start.sh
```

测试运行：

```bash
./start.sh
```

> 确定运行没有问题后，按 `Ctrl+c`即可停止运行。

使用pm2启动并管理：

```bash
pm2 start ./start.sh --name synctv
```

> 同样的，你还可以使用 Cloudflared 隧道添加域名，而不选择使用 Proxy 。

## One-api

~~源仓库没有提供freebsd平台的二进制文件，需要自己构建，但是很简单~~。我已经写了一个仓库用于自动化构建 freebsd 版本的
one-api 二进制文件，可以直接下载使用。

> 如果你想使用 New-API ，可以使用这个仓库[k0baya/new-api-freebsd](https://github.com/k0baya/new-api-freebsd)，用法与本节介绍的
> One-API 基本一致，对比One-API添加了一些更方便的功能。也许之后 One-API 也会加入这些功能。

首先在 Panel 中放行一个端口，接着按照下表 Add a New Website ：

| Key          | Value                                                        |
|--------------|--------------------------------------------------------------|
| Domain       | `xxx.USERNAME.serv00.net`（也可以把原有的USERNAME.serv00.net删掉后重新添加） |
| Website Type | proxy                                                        |
| Proxy Target | localhost                                                    |
| Proxy URL    | 留空                                                           |
| Proxy port   | 你准备用来部署 One-API 的端口                                          |
| Use HTPPS    | False                                                        |
| DNS support  | True                                                         |

添加完新站点后，继续点击上方的 Manage SSL certificates ，接着在出口 IP 的右侧点击 Manage ，再点击 Add certificate ：

| Type                                 | Domain                                              |
|--------------------------------------|-----------------------------------------------------|
| Generate Let’s Encrypted certificate | 与刚刚添加的站点域名保持一致（如果是原有的`USERNAME.serv00.net` ，可以省略此步） |

接着 SSH 登入，并进入刚刚你新建的域名目录下的 `public_html` 路径下：

```bash
# 下载 one-api
release_info=$(curl -s https://api.github.com/repos/k0baya/one-api-freebsd/releases/latest)
asset_url=$(echo "$release_info" | jq -r '.assets[] | select(.name != "source code") | .browser_download_url')
curl -L -o one-api "$asset_url" && chmod +x one-api
```

新建启动脚本：

```bash
cat > start.sh << EOF
#!/bin/sh
# 如果你有设置主题的需要，可以取消注释下一行，然后按照自己的需求设置。
# export THEME="berry"
export TIKTOKEN_CACHE_DIR="$PWD"
# 把下一行的 PORT 改为自己放行的端口
exec ./one-api --port PORT --log-dir ./logs
EOF
```

添加可执行权限：

```bash
chmod +x start.sh
```

保存后回到 terminal 中，测试运行：

```bash
./start.sh
```

> 确定运行没有问题后，按 `Ctrl+c`即可停止运行。

使用pm2启动并管理：

```bash
pm2 start ./start.sh --name one-api
```

> 同样的，你还可以使用 Cloudflared 隧道添加域名，而不选择使用 Proxy 。

## Uptime-Kuma

受限于 FreeBSD 的平台限制，1.23版本内置了 PlayWright ，无法运行，所以只能安装 1.22 版本。切记先去 Panel 中放行 TCP 端口。

首先在 Panel 中放行一个端口，接着按照下表 Add a New Website ：

| Key          | Value                                                        |
|--------------|--------------------------------------------------------------|
| Domain       | `xxx.USERNAME.serv00.net`（也可以把原有的USERNAME.serv00.net删掉后重新添加） |
| Website Type | proxy                                                        |
| Proxy Target | localhost                                                    |
| Proxy URL    | 留空                                                           |
| Proxy port   | 你准备用来部署 Uptime-Kuma 的端口                                      |
| Use HTPPS    | False                                                        |
| DNS support  | True                                                         |

添加完新站点后，继续点击上方的 Manage SSL certificates ，接着在出口 IP 的右侧点击 Manage ，再点击 Add certificate ：

| Type                                 | Domain                                              |
|--------------------------------------|-----------------------------------------------------|
| Generate Let’s Encrypted certificate | 与刚刚添加的站点域名保持一致（如果是原有的`USERNAME.serv00.net` ，可以省略此步） |

接着 SSH 登入，并进入刚刚你新建的域名目录下：

```bash
# 下载 v1.22.1 版本的源代码
cd ~/domains && wget https://github.com/louislam/uptime-kuma/archive/refs/tags/1.22.1.zip && unzip 1.22.1.zip && rm -rf public_html && mv -f uptime-kuma-1.22.1 public_html && rm -f 1.22.1.zip && cd public_html
```

设置生产模式：

```bash
npm ci --production
```

下载dist文件：

```bash
wget https://github.com/louislam/uptime-kuma/releases/download/1.22.1/dist.tar.gz && tar -xzvf dist.tar.gz && rm dist.tar.gz
```

安装补充依赖：

```bash
npm install
```

安装过程中多少会有报错，无视就好，实际上最后可以正常运行。内置的Cloudflared反向代理在FreeBSD平台上无法使用，但是可以使用上述的外置的Cloudflared进行反代，使用自己的域名。

测试运行：

```bash
node server/server.js --port=PORT
```

> 记得把PORT替换成你放行的端口。确定运行没有问题后，按 `Ctrl+c`即可停止运行。

使用pm2管理后台运行：

```bash
pm2 start server/server.js --name uptime-kuma -- --port=PORT
```

> 记得把PORT替换成你放行的端口。

> 如果你不希望自己的Uptime-Kuma被人使用 `http://IP:PORT`的方式访问，你可以在最后的执行命令添加 `--host=127.0.0.1`
> 的尾缀，这样就只能通过反向代理的域名进行访问了:

```bash
pm2 start server/server.js --name uptime-kuma -- --port=PORT --host=127.0.0.1
```

> 同样的，你还可以使用 Cloudflared 隧道添加域名，而不选择使用 Proxy 。

## Bingo（暂时无法正常使用）

先放行一个端口。在 Panel 中进入 File manager 选项卡，点击左侧的 My Files 进入你的用户根目录，找到 `.profile`文件，右键选择
View/Edit > Choose other >Source Editor 进行编辑，在最末加上以上两行并保存：

```bash
alias node='node20'
alias npm='npm20'
```

应用更改：

```bash
source ~/.profile
```

> 先新建一个目录用于存放 Bingo 的相关文件，进入目录后执行下述操作。

下载源码：

```bash
git clone https://github.com/weaigc/bingo
```

进入源码所在目录：

```bash
cd bingo
```

安装依赖：

```bash
npm20 install
```

下载build好的 `.next`资源：

```bash
wget -O next.tar.gz https://pan.saika.free.hr/d/local/next.tar.gz && tar -xzvf next.tar.gz && rm next.tar.gz
```

添加环境变量文件：

```bash
cp .env.example .env
```

接着在 Panel 中进入 File manager 选项卡，进入Bingo 源码所在的目录，找到 `server.js`文件，右键选择 View/Edit > Choose
other >Source Editor 进行编辑，修改第7行中的端口为你放行的端口。再编辑 `.env`文件，添加你的 `BING_HEADER`。

测试启动：

```bash
npm20 run start
```

> 确定运行没有问题后，按 `Ctrl+c`即可停止运行。

使用pm2启动并管理：

```bash
pm2 start npm --name bingo -- run start
```

## Refresh-gpt-chat

用来对接 ninja、warpgpt 等能够使用 access_Token 作为 API Key 请求 GPT 的工具，以使用永久有效期的 Refresh_token 来获取更好的体验。

首先在 Panel 中放行一个端口，接着按照下表 Add a New Website ：

| Key          | Value                                                          |
|--------------|----------------------------------------------------------------|
| Domain       | `xxx.USERNAME.serv00.net`（也可以把原有的 USERNAME.serv00.net 删掉后重新添加） |
| Website Type | proxy                                                          |
| Proxy Target | localhost                                                      |
| Proxy URL    | 留空                                                             |
| Proxy port   | 你准备用来部署 Refresh-gpt-chat 的端口                                   |
| Use HTPPS    | False                                                          |
| DNS support  | True                                                           |

添加完新站点后，继续点击上方的 Manage SSL certificates ，接着在出口 IP 的右侧点击 Manage ，再点击 Add certificate ：

| Type                                 | Domain                                              |
|--------------------------------------|-----------------------------------------------------|
| Generate Let’s Encrypted certificate | 与刚刚添加的站点域名保持一致（如果是原有的`USERNAME.serv00.net` ，可以省略此步） |

接着 SSH 登入，并进入刚刚你新建的域名目录下的 `public_html` 路径下：

```bash
# 下载 refresh-gpt-chat
wget -O refresh-gpt-chat.jar https://github.com/Yanyutin753/refresh-gpt-chat/releases/download/v0.0.3/refresh-gpt-chat-0.0.3-SNAPSHOT.jar
```

使用 pm2 启动：

```bash
pm2 start java19 --name refresh-gpt-chat -- -jar refresh-gpt-chat.jar --server.port=端口 --server.servlet.context-path=/ --getAccessTokenUrl=https://你的ninja地址/auth/refresh_token --chatUrl=https://你的ninja地址/v1/chat/completions
```

再套域名，接下来就可以直接使用 `https://你套的域名/v1/chat/completions/` 当作API端点，使用 `refresh_token` 做 API_Keys ，使用
ChatGPT 了。

然后在 one-api 中添加自定义渠道， `Base URL` 填写你 `https://你套的域名`，模型填入你的 refresh_token
对应的账号所支持的模型，如果和我一样手持大把 3.5 的账号想用来做 API 用，可以选择全部 GPT3.5 的相关模型，然后在 `模型重定向`
中填入以下内容：

```json
{
  "gpt-3.5-turbo-0301": "gpt-3.5-turbo",
  "gpt-3.5-turbo-0613": "gpt-3.5-turbo",
  "gpt-3.5-turbo-16k": "gpt-3.5-turbo",
  "gpt-3.5-turbo-16k-0613": "gpt-3.5-turbo",
  "gpt-3.5-turbo-1106": "gpt-3.5-turbo",
  "gpt-3.5-turbo-instruct": "gpt-3.5-turbo"
}
```

密钥填写你的 `refresh_token`即可，如果你有多个账号，可以将批量勾选上，然后一行写一个 `refresh_token`。

> 同样的，你还可以使用 Cloudflared 隧道添加域名，而不选择使用 Proxy 。

## [Gpt4-copilot-java](https://github.com/Yanyutin753/gpt4-copilot-java-sh)

支持 cocopilot 的 ccu 和 copilot 的 ghu 调用 copilot 转 GPT-4 的接口转换工具。 Java 写的，可以在 Serv00 运行。

>
目前更推荐这个方法：[lvguanjun/copilot-to-chatgpt4](https://blog.rappit.site/2024/02/07/copilot-to-api-free-temp/#lvguanjun-copilot-to-chatgpt4)
> 比起 Gpt4-copilot-java 更轻量更强大。

首先在 Panel 中放行一个端口，接着按照下表 Add a New Website ：

| Key          | Value                                                        |
|--------------|--------------------------------------------------------------|
| Domain       | `xxx.USERNAME.serv00.net`（也可以把原有的USERNAME.serv00.net删掉后重新添加） |
| Website Type | proxy                                                        |
| Proxy Target | localhost                                                    |
| Proxy URL    | 留空                                                           |
| Proxy port   | 你准备用来部署 Gpt4-copilot-java 的端口                                |
| Use HTPPS    | False                                                        |
| DNS support  | True                                                         |

添加完新站点后，继续点击上方的 Manage SSL certificates ，接着在出口 IP 的右侧点击 Manage ，再点击 Add certificate ：

| Type                                 | Domain                                              |
|--------------------------------------|-----------------------------------------------------|
| Generate Let’s Encrypted certificate | 与刚刚添加的站点域名保持一致（如果是原有的`USERNAME.serv00.net` ，可以省略此步） |

接着 SSH 登入，并进入刚刚你新建的域名目录下的 `public_html` 路径下：

```bash
# 下载 fat jar 包
RELEASE_INFO=$(curl -s "https://api.github.com/repos/Yanyutin753/gpt4-copilot-java-sh/releases/latest")
JAR_DOWNLOAD_URL=$(echo "$RELEASE_INFO" | jq -r '.assets[] | select(.name|test(".jar$")) | .browser_download_url')
curl -L -o gpt4-copilot-java.jar "$JAR_DOWNLOAD_URL"
```

测试运行：

```bash
# 把PORT改为自己放行的端口，最后的server.servlet.context-path参数可以改成自己喜欢的尾缀
java19 -jar gpt4-copilot-java.jar --server.port=PORT --server.servlet.context-path=/
```

> 测试没有问题之后，按 `Ctrl+c`即可停止运行。

使用 pm2 启动并管理：

```bash
pm2 start java19 --name gpt4-copilot-java -- -jar gpt4-copilot-java.jar --server.port=PORT --server.servlet.context-path=/
```

> 始皇的公车：ghu_ThisIsARealFreeCopilotKeyByCoCopilot （已失效）

免费公车白嫖请求示例：

```bash
curl --location 'http(s)://ip:port_or_URL/cocopilot/v1/chat/completions' 
--header 'Content-Type: application/json' 
--header 'Authorization: Bearer ghu_ThisIsARealFreeCopilotKeyByCoCopilot' 
--data '{
"model": "gpt-4",
"messages": [{"role": "user", "content": "鲁迅打周树人"}]
}'
```

> 同样的，你还可以使用 Cloudflared 隧道添加域名，而不选择使用 Proxy 。

## [Zfile](https://zfile.vip/)

首先在 Panel 中放行一个端口，接着按照下表 Add a New Website ：

| Key          | Value                                                        |
|--------------|--------------------------------------------------------------|
| Domain       | `xxx.USERNAME.serv00.net`（也可以把原有的USERNAME.serv00.net删掉后重新添加） |
| Website Type | proxy                                                        |
| Proxy Target | localhost                                                    |
| Proxy URL    | 留空                                                           |
| Proxy port   | 你准备用来部署 Zfile 的端口                                            |
| Use HTPPS    | False                                                        |
| DNS support  | True                                                         |

添加完新站点后，继续点击上方的 Manage SSL certificates ，接着在出口 IP 的右侧点击 Manage ，再点击 Add certificate ：

| Type                                 | Domain                                              |
|--------------------------------------|-----------------------------------------------------|
| Generate Let’s Encrypted certificate | 与刚刚添加的站点域名保持一致（如果是原有的`USERNAME.serv00.net` ，可以省略此步） |

接着 SSH 登入，并进入刚刚你新建的域名目录下的 `public_html` 路径下：

```bash
# 下载 fat jar 包
wget --no-check-certificate -O zfile.jar https://c.jun6.net/ZFILE/zfile-release.jar
```

测试运行：

```bash
java19 -jar -Duser.timezone=Asia/Shanghai zfile.jar --zfile.log.path=$PWD/logs --zfile.db.path=$PWD/zfile --server.port=PORT
```

> 记得把端口改成自己的。测试没有问题之后，按 `Ctrl+c`即可停止运行。

使用pm2启动并管理：

```bash
pm2 start java19 --name zfile -- -jar -Duser.timezone=Asia/Shanghai zfile.jar --zfile.log.path=$PWD/logs --zfile.db.path=$PWD/zfile --server.port=PORT
```

> 同样的，你还可以使用 Cloudflared 隧道添加域名，而不选择使用 Proxy 。

## Halo

> **慎重部署，内存会超100%，不知道会不会封号**

[halo](https://github.com/halo-dev/halo) 自从升级 2.0 版本开始，很长时间内都没有提供构筑好的 jar 包，甚至于在GitHub上都出现了第三方的，使用
GitHub workflow 自动化构筑 jar 包的[仓库](https://github.com/Lu7fer/Jar4Halo)
。但是，自从[2.12.0-alpha.1版本](https://github.com/halo-dev/halo/releases/tag/v2.12.0-alpha.1)开始，halo 的官方仓库又开始提供构筑好的
jar 包了，刚好这些天在玩 Serv00 ，遂尝试部署了一下，成功。现记录一下：

首先在 Panel 中放行一个端口，接着按照下表 Add a New Website ：

| Key          | Value                                                          |
|--------------|----------------------------------------------------------------|
| Domain       | `xxx.USERNAME.serv00.net`（也可以把原有的 USERNAME.serv00.net 删掉后重新添加） |
| Website Type | proxy                                                          |
| Proxy Target | localhost                                                      |
| Proxy URL    | 留空                                                             |
| Proxy port   | 你准备用来部署 Halo 的端口                                               |
| Use HTPPS    | False                                                          |
| DNS support  | True                                                           |

添加完新站点后，继续点击上方的 Manage SSL certificates ，接着在出口 IP 的右侧点击 Manage ，再点击 Add certificate ：

| Type                                 | Domain                                              |
|--------------------------------------|-----------------------------------------------------|
| Generate Let’s Encrypted certificate | 与刚刚添加的站点域名保持一致（如果是原有的`USERNAME.serv00.net` ，可以省略此步） |

并在 MySQL 选项卡中中新建 MySQL 数据库，用于填入接入 Halo 。

接着 SSH 登入，并进入刚刚你新建的域名目录下的 `public_html` 路径下：

```bash
# 下载jar包
release_info=$(curl -s https://api.github.com/repos/halo-dev/halo/releases/latest)
jar_url=$(echo "$release_info" | jq -r '.assets[] | select(.name | endswith(".jar")) | .browser_download_url')
curl -L "$jar_url" -o halo.jar
```

在 `halo.jar` 所在路径下新建 `.halo2` 文件夹，进入其中，新建文件 `application.yaml` 然后并配置其内容：

```bash
# 新建文件夹
mkdir -p .halo2
# 新建并填入配置
cat > .halo2/application.yaml << EOF
server:
  port: 你在面板中放行的端口
  # Response data gzip.
  compression:
    enabled: false
spring:
  #sql:
  #  init.platform: mysql
  r2dbc:
    url: r2dbc:pool:mysql://数据库地址:3306/数据库名
    username: 数据库用户名
    password: 数据库密码
halo:
  # Your admin client path is https://your-domain/{admin-path}
  admin-path: admin
  # memory or level
  cache: level
EOF
```

在 `halo.jar` 所在路径下新建 `run.sh` 运行脚本：

```bash
cat > run.sh << EOF
#!/bin/bash
export HALO_WORK_DIR="$PWD/.halo2"
export HALO_EXTERNAL_URL="https://你的域名"
exec java17 -server -Xms128m -Xmx256m -jar -Duser.timezone=Asia/Shanghai $PWD/halo.jar --spring.config.additional-location=$PWD/.halo2/application.yaml
EOF
```

测试运行：

```bash
chmod +x run.sh && ./run.sh
```

> 确定运行没有问题后，按 `Ctrl+c`即可停止运行。

使用pm2管理运行：

```bash
chmod +x run.sh && pm2 start ./run.sh --name halo
```

> 同样的，你还可以使用 Cloudflared 隧道添加域名，而不选择使用 Proxy 。

## Go-proxy-bingai

[这个仓库](https://github.com/adams549659584/go-proxy-bingai)是 Bingo 的前身，当初玩 Replit
时我便有在使用，只可惜作者早已弃坑，所以当初我才找到了当时还能用的 Bingo 使用。

在 Bingo 也长期未更新，无法正常使用的如今，我的目光转向了另一个[二改仓库](https://github.com/Harry-zklcdc/go-proxy-bingai)
。Harry-zklcdc 维护的 Go-proxy-bingai 的分支仓库目前还能够正常使用。而且在与开发者反馈了几个 bug
之后，开发者都会花时间认真复现，并快速修复，其体验实在是不错。

~~虽然原仓库的 Release 中并未提供 FreeBSD
系统适用的二进制文件，但是我们能够自己构建。我已经构建了一份放在这篇博客底部的QQ群的群文件中~~。~~我写了一个仓库用于自动化构建
FreeBSD 版本的 go-proxy-bingai ，可以从我的仓库下载使用。~~ 作者已经开始提供 FreeBSD 的构建，故我的仓库已经存档。

首先在 Panel 中放行一个端口，接着按照下表 Add a New Website ：

| Key          | Value                                                          |
|--------------|----------------------------------------------------------------|
| Domain       | `xxx.USERNAME.serv00.net`（也可以把原有的 USERNAME.serv00.net 删掉后重新添加） |
| Website Type | proxy                                                          |
| Proxy Target | localhost                                                      |
| Proxy URL    | 留空                                                             |
| Proxy port   | 你准备用来部署 Go-proxy-bingai 的端口                                    |
| Use HTPPS    | False                                                          |
| DNS support  | True                                                           |

添加完新站点后，继续点击上方的 Manage SSL certificates ，接着在出口 IP 的右侧点击 Manage ，再点击 Add certificate ：

| Type                                 | Domain                                              |
|--------------------------------------|-----------------------------------------------------|
| Generate Let’s Encrypted certificate | 与刚刚添加的站点域名保持一致（如果是原有的`USERNAME.serv00.net` ，可以省略此步） |

接着 SSH 登入，并进入刚刚你新建的域名目录下的 `public_html` 路径下：

```bash
# 下载可执行文件
release_info=$(curl -s https://api.github.com/repos/Harry-zklcdc/go-proxy-bingai/releases | jq -r '[.[] | select(.prerelease==false)][0]')
download_url=$(echo "$release_info" | jq -r '.assets[] | select(.name=="go-proxy-bingai-freebsd-amd64.tar.gz") | .browser_download_url')
curl -L "$download_url" -o go-proxy-bingai-freebsd-amd64.tar.gz&& tar -xzf go-proxy-bingai-freebsd-amd64.tar.gz && rm go-proxy-bingai-freebsd-amd64.tar.gz && chmod +x go-proxy-bingai
```

新建启动脚本：

```bash
cat > entrypoint.sh << EOF
#!/bin/bash
# 被注释的环境变量请根据自己的需求，按照原仓库的 wiki 中的介绍进行填入。
export BYPASS_SERVER="https://bypass.zklcdc.xyz"  # 作者本人的公共bypass服务，可用性未知。
# export Go_Proxy_BingAI_USER_TOKEN_1="xxx"
# export Go_Proxy_BingAI_USER_TOKEN_2="xxx"
# export USER_KievRPSSecAuth="xxx"
# export USER_RwBf="xxx"
# export USER_MUID="xxx"
# export APIKEY="sk-xxx"
# export BING_BASE_URL="https://www.bing.com"
# export SYDNEY_BASE_URL="https://sydney.bing.com"
# export HTTP_PROXY="http://172.17.0.1:18080"
# export HTTPS_PROXY="http://172.17.0.1:18080"
# export Go_Proxy_BingAI_AUTH_KEY="xxx"
# 请把下一行双引号中的内容替换成你放行的端口。
export PORT="xxx"
chmod +x go-proxy-bingai && exec ./go-proxy-bingai
EOF
```

运行：

```bash
# 测试运行
chmod +x entrypoint.sh && ./entrypoint.sh
# 使用 pm2 管理运行
pm2 start ./entrypoint.sh --name go-proxy-bingai
```

> **请注意，如果你需要使用其 web 功能，而不仅仅是 api 功能，请务必使用 https 访问，不然无法打开。你可以选择使用面板自带的
proxy 添加域名并申请 ssl 证书，亦或者直接使用 cloudflared 隧道。**

> 同样的，你还可以使用 Cloudflared 隧道添加域名，而不选择使用 Proxy 。

## [Pentaract](https://github.com/Dominux/Pentaract)

> 不建议使用，目前 Bug 众多，而且对 Telegram 账号有一定要求，目前暂不清楚 Telegram 限制账号的评定标准。

可以自行构建或者使用使用我构建的成品。由于该应用需要使用具有超级管理员权限的 PostgreSQL ，故不可使用 Serv00 自带的
PostgreSQL ，需要远程连接。

编译成品下载地址：[pentaract-freebsd_X64.tar.gz](https://pan.rappit.site/download/捯饬/pentaract-freebsd_X64.tar.gz)

前端构建简单，这里不再赘述，而且由于其 `Dockerfile` 内构建前端使用的是 Node.js 21 而目前 FreeBSD Port 最高只有 Node.js 20
，故不推荐在 FreeBSD 上直接构建，可以使用 GItHub Actions 进行构建，或是自己在 Node.js 21 的环境下构建再复制，甚至干脆直接从作者预构建的
Docker 镜像内打包出来使用。（经过测试，使用 Nodejs20 构建也可以正常使用。）

Serv00 上的构建法：

```bash
# 切换 Node.js 版本为 Nodejs20
alias node=node20
alias npm=npm20
# 全局安装 pnpm
npm install -g pnpm
source ~/.bashrc
# 构建前端
pnpm install
VITE_API_BASE='/api' pnpm run build
# 移动构建产物到工作目录
mkdir -p ~/pentaract/ui && cp -R ./dist/* ~/pentaract/ui
```

后端的构建，可以使用 GItHub Actions ，或者本地 FreeBSD 虚拟机，甚至直接在 Serv00 上构建。这里记录一下在 Serv00 上构建的方法：

```bash
# 克隆仓库到 Serv00 上
git clone https://github.com/Dominux/Pentaract && cd Pentaract/pentaract
# 构建
LIBCLANG_PATH=/usr/local/llvm16/lib cpuset -l 0 cargo build --release
# 移动构建产物到工作目录
mkdir -p ~/pentaract && cp ./target/release/pentaract ~/pentaract/pentaract
```

然后去 [supabase](https://supabase.com/) 注册一个免费的PostgreSQL ，记录下数据库的用户名、密码、数据库名、地址，用于后续填入环境变量。

接着在 `~/pentaract` 路径下新建一个启动脚本，按照要求填入所有的环境变量：

```bash
cat > start.sh << EOF
#!/bin/bash
export PORT=xxxx
export WORKERS=4
export CHANNEL_CAPACITY=32
export SUPERUSER_EMAIL=xxxx@xxxx.com
export SUPERUSER_PASS=xxxx
export ACCESS_TOKEN_EXPIRE_IN_SECS=1800
export REFRESH_TOKEN_EXPIRE_IN_DAYS=14
export SECRET_KEY=xxx
export TELEGRAM_API_BASE_URL=https://api.telegram.org
export DATABASE_USER=xxxx
export DATABASE_PASSWORD=xxxx
export DATABASE_NAME=xxxx
export DATABASE_HOST=xxxx
export DATABASE_PORT=5432
chmod +x pentaract && exec ./pentaract
EOF
```

给启动脚本赋权：

```bash
chmod +x start.sh
```

~~前端的 `index-22eec6d1.js` 文件内的 `http://localhost:8000` 需要更改为 serv00 的 url 或者 ip:port
。你可以去文件管理中编辑，查找替换即可，也可以使用sed命令简单更改一下：~~ 已经重新构建前端并替换，现无需此步。

测试运行：

```bash
./start.sh
```

使用 pm2 管理：

```bash
pm2 start ./start.sh --name pentaract
```

## [OneList](https://github.com/msterzhang/onelist)

原作者似乎已经弃坑，故我的仓库没有做自动检测构建。但是体验还不错，有 Emby 既视感了，配合小雅的 Alist 岂不美哉。

首先在 Panel 中放行一个端口，接着按照下表 Add a New Website ：

| Key          | Value                                                        |
|--------------|--------------------------------------------------------------|
| Domain       | `xxx.USERNAME.serv00.net`（也可以把原有的USERNAME.serv00.net删掉后重新添加） |
| Website Type | proxy                                                        |
| Proxy Target | localhost                                                    |
| Proxy URL    | 留空                                                           |
| Proxy port   | 你准备用来部署 OneList 的端口                                          |
| Use HTPPS    | False                                                        |
| DNS support  | True                                                         |

添加完新站点后，继续点击上方的 Manage SSL certificates ，接着在出口 IP 的右侧点击 Manage ，再点击 Add certificate ：

| Type                                 | Domain                                              |
|--------------------------------------|-----------------------------------------------------|
| Generate Let’s Encrypted certificate | 与刚刚添加的站点域名保持一致（如果是原有的`USERNAME.serv00.net` ，可以省略此步） |

接着SSH登入，并进入刚刚你新建的域名目录下的 `public_html` 路径下：

```bash
# 下载 OneList
wget https://github.com/k0baya/onelist-freebsd/releases/download/v2.0.5/onelist
# 初始化配置
chmod +x onelist && ./onelist -run config
```

接着回到 Panel 中，进入File manager选项卡，进入 OneList 所在路径，可以看到一个名为 `config.env`
的文件，右键点击，选择View/Edit > Source Editor，进行编辑：

```bash
# 服务设置
# 注意要改为未被占用的端口
API_PORT=5245
FaviconicoUrl=https://wework.qpic.cn/wwpic/818353_fizV30xbQCGPQRP_1677394564/0
API_SECRET=fRVvjcNd11gYGI85StVaeCtPVSmJTRRE

# Env有两种模式，Debug及Release，主要用在数据库为mysql时候，需要注意修改Env环境和mysql密码对应
Env=Debug

# 管理员账户设置，用于初始化管理员账户
UserEmail=xxxx.@qq.com
UserPassword=xxxxx

# 数据库设置
DB_DRIVER=sqlite
DB_USER=root
DbName=onelist

# 如果上面DB_DRIVER类型为mysql，就需要正确填下以下参数
DB_PASSWORD_Debug=123456
DB_PASSWORD_Release=123456

# TheMovieDb Key
# 在https://www.themoviedb.org网站申请
KeyDb=22f10ca52f109158ac7fe064ebbcf697
```

你可以按照自己的需求配置端口、管理员账户、数据库。 MySQL 性能更好哦~

测试运行：

```bash
./onelist -run server
```

使用 pm2 管理：

```bash
pm2 start ./onelist -- -run server
```

## [WarpGPT](https://github.com/oliverkirk-sudo/WarpGPT)

这个没什么多说的，可以使用 access_Token 作为 API Key 请求 ChatGPT 接口，也就是所谓的 chat2api 。配合前文的 Refresh-gpt-chat
就可以把永久有效期的 Refresh_token 作为 API Key 来使用，十分的好用。

源仓库没有 Release ，故[我的仓库](https://github.com/k0baya/warpgpt-freebsd)没有做自动检测构建。如果有更新需求需要手动触发
workflow 。你有需要也可以自己fork一份然后手动触发 workflow 。

首先在 Panel 中放行一个端口，接着按照下表 Add a New Website ：

| Key          | Value                                                        |
|--------------|--------------------------------------------------------------|
| Domain       | `xxx.USERNAME.serv00.net`（也可以把原有的USERNAME.serv00.net删掉后重新添加） |
| Website Type | proxy                                                        |
| Proxy Target | localhost                                                    |
| Proxy URL    | 留空                                                           |
| Proxy port   | 你准备用来部署 WarpGPT 的端口                                          |
| Use HTPPS    | False                                                        |
| DNS support  | True                                                         |

添加完新站点后，继续点击上方的 Manage SSL certificates ，接着在出口 IP 的右侧点击 Manage ，再点击 Add certificate ：

| Type                                 | Domain                                              |
|--------------------------------------|-----------------------------------------------------|
| Generate Let’s Encrypted certificate | 与刚刚添加的站点域名保持一致（如果是原有的`USERNAME.serv00.net` ，可以省略此步） |

接着SSH登入，并进入刚刚你新建的域名目录下的 `public_html` 路径下：

```bash
# 下载二进制文件
wget https://github.com/k0baya/warpgpt-freebsd/releases/download/latest/warpgpt && chmod +x warpgpt
```

添加启动脚本：

```bash
cat > start.sh << EOF
#!/bin/bash
export TMPDIR="$PWD"
chmod +x warpgpt && exec ./warpgpt
EOF
```

给启动脚本赋权：

```bash
chmod +x start.sh
```

配置环境变量：

```bash
cat > .env << EOF
proxy = "http://127.0.0.1:10809"   #代理地址 （选填）
port = 5000                        #程序运行端口
host = '127.0.0.1'                 #可访问ip，0.0.0.0允许所有ip
verify = false                     #是否对访问进行验证
auth_key = ""                      #若开启访问验证，则需要在Header中添加AuthKey字段，且值为auth_key的值才能访问 （选填）
arkose_must = false                #是否强行gpt3.5进行验证
OpenAI_HOST = "chat.openai.com"    #openai网页api接口地址 （选填）
openai_api_host = "api.openai.com" #openai官方api接口 （选填）
proxy_pool_url=""                  #ipidea代理池链接 （选填）
#示例http://api.proxy.ipidea.io/getProxyIp?num=10&return_type=json&lb=1&sb=0&flow=1&regions=us&protocol=http，根据访问频次设置num值
log_level = "debug"                #日志等级

redis_address = "127.0.0.1:6379"   #redis地址（若不开启代理池可选填）
redis_passwd = ""                  #redis密码
redis_db = 0                       #选择的redis数据库
EOF
```

> 如果有 redis 需求，可以查阅官方文档：[Redis](https://docs.serv00.com/Redis/)

使用 pm2 管理运行：

```bash
pm2 start bash --name warpgpt -- start.sh
```

## [Coze-discord-proxy](https://github.com/deanxv/coze-discord-proxy)

代理 Discord 对话 Coze-Bot ，实现以 API 形式请求 GPT4 模型，提供对话、文生图、图生文、知识库检索等功能。功能不多赘述，详细去源仓库查看。

同样的，我写了一个用于构建 FreeBSD 版本的[仓库](https://github.com/k0baya/coze-discord-proxy-freebsd)
。在这里感谢论坛用户 [Reno](https://linux.do/u/reno/summary) 的测试，没有测试人员的测试，也不会有部署的过程记录了。

首先在 Panel 中放行一个端口，接着按照下表 Add a New Website ：

| Key          | Value                                                        |
|--------------|--------------------------------------------------------------|
| Domain       | `xxx.USERNAME.serv00.net`（也可以把原有的USERNAME.serv00.net删掉后重新添加） |
| Website Type | proxy                                                        |
| Proxy Target | localhost                                                    |
| Proxy URL    | 留空                                                           |
| Proxy port   | 你准备用来部署 Coze-discord-proxy 的端口                               |
| Use HTPPS    | False                                                        |
| DNS support  | True                                                         |

添加完新站点后，继续点击上方的 Manage SSL certificates ，接着在出口 IP 的右侧点击 Manage ，再点击 Add certificate ：

| Type                                 | Domain                                              |
|--------------------------------------|-----------------------------------------------------|
| Generate Let’s Encrypted certificate | 与刚刚添加的站点域名保持一致（如果是原有的`USERNAME.serv00.net` ，可以省略此步） |

接着SSH登入，并进入刚刚你新建的域名目录下的 `public_html` 路径下：

```bash
# 下载二进制文件
release_info=$(curl -s https://api.github.com/repos/k0baya/coze-discord-proxy-freebsd/releases/latest)
asset_url=$(echo "$release_info" | jq -r '.assets[] | select(.name != "source code") | .browser_download_url')
curl -L -o coze-discord-proxy "$asset_url" && chmod +x coze-discord-proxy
```

添加启动脚本：

```bash
cat > start.sh << EOF
#!/bin/bash
# 根据你的需求自行填入环境变量
export PORT="PORT"
export USER_AUTHORIZATION="XXXXXX"
export BOT_TOKEN="XXXXXX"
export GUILD_ID="XXXXXX"
export COZE_BOT_ID="XXXXXX"
export PROXY_SECRET="XXXXXX"
export CHANNEL_ID="XXXXXX"
export TZ="Asia/Shanghai"
export DATA_GYM_CACHE_DIR="$PWD"
chmod +x coze-discord-proxy && exec ./coze-discord-proxy
EOF
```

给启动脚本赋权：

```bash
chmod +x coze-discord-proxy
```

添加多机器人配置文件：

```bash
mkdir -p app/coze-discord-proxy/data/config
touch app/coze-discord-proxy/data/config/bot_config.json
```

然后回到 Panel 中，进入File manager选项卡，进入 `bot_config.json` 所在路径，右键点击它，选择View/Edit > Source Editor，进行编辑：

```json
[
  {
    "proxySecret": "123", // 接口请求密钥(PROXY_SECRET)(注意:此密钥在环境变量PROXY_SECRET中存在时该Bot才可以被匹配到!)
    "cozeBotId": "12***************31", // coze托管的机器人ID
    "model": ["gpt-3.5","gpt-3.5-16k"], // 模型名称(数组格式)(与请求参数中的model对应,如请求中的model在该json中未匹配到则会抛出异常)
    "channelId": "12***************56"  // [可选]discord频道ID(机器人必须在此频道所在的服务器)(目前版本下该参数仅用来活跃机器人)
  },
  {
    "proxySecret": "456",
    "cozeBotId": "12***************64",
    "model": ["gpt-4","gpt-4-16k"],
    "channelId": "12***************78"
  },
  {
    "proxySecret": "789",
    "cozeBotId": "12***************12",
    "model": ["dall-e-3"],
    "channelId": "12***************24"
  }
]
```

使用 pm2 管理运行：

```bash
pm2 start bash --name coze-discord-proxy -- start.sh
```

## [Memos](https://github.com/usememos/memos)

一款开源、轻量级的笔记服务。轻松捕捉并分享您的精彩想法。

这个仓库比较难受的是，其在源码的[这个位置](https://github.com/usememos/memos/blob/edc7645086d285f50e484861705ffee3a626f97a/server/server.go#L85)
强制要求其 gRPC 服务的端口为 Memos 监听端口+1，故这个应用需要占用两个端口，而且必须是两个连续的端口。

同样的，我写了一个用于构建 FreeBSD 版本的[仓库](https://github.com/k0baya/memos-binary)。

首先在 Panel 中放行**两个相邻的端口**，接着按照下表 Add a New Website ：

| Key          | Value                                                        |
|--------------|--------------------------------------------------------------|
| Domain       | `xxx.USERNAME.serv00.net`（也可以把原有的USERNAME.serv00.net删掉后重新添加） |
| Website Type | proxy                                                        |
| Proxy Target | localhost                                                    |
| Proxy URL    | 留空                                                           |
| Proxy port   | 刚刚放行的**两个相邻的端口中小的那一个**                                       |
| Use HTPPS    | False                                                        |
| DNS support  | True                                                         |

添加完新站点后，继续点击上方的 Manage SSL certificates ，接着在出口 IP 的右侧点击 Manage ，再点击 Add certificate ：

| Type                                 | Domain                                              |
|--------------------------------------|-----------------------------------------------------|
| Generate Let’s Encrypted certificate | 与刚刚添加的站点域名保持一致（如果是原有的`USERNAME.serv00.net` ，可以省略此步） |

接着SSH登入，并进入刚刚你新建的域名目录下的 `public_html` 路径下：

```bash
API_URL="https://api.github.com/repos/k0baya/memos-binary/releases/latest"
DOWNLOAD_URL=$(curl -s $API_URL | jq -r ".assets[] | select(.name == \"memos-freebsd-amd64.tar.gz\") | .browser_download_url")
curl -L $DOWNLOAD_URL -o memos-freebsd-amd64.tar.gz
tar -xzvf memos-freebsd-amd64.tar.gz && rm memos-freebsd-amd64.tar.gz && chmod +x memos
```

关于运行，有两种方式进行：

① SQLite

如果选择使用 SQLite 作为数据库运行，则可以直接运行：

```bash
# 假定你的数据文件打算存储在 /home/username/domains/xxx.USERNAME.serv00.net/public_html/data
# 新建数据文件夹
mkdir -p /home/username/domains/xxx.USERNAME.serv00.net/public_html/data
# 测试运行
./memos --mode prod --port PORT --data /home/username/domains/xxx.USERNAME.serv00.net/public_html/data
# 使用 pm2 管理
pm2 start ./memos --name memos -- --mode prod --port PORT --data /home/username/domains/xxx.USERNAME.serv00.net/public_html/data
```

② 外接 MySQL / PostgreSQL

你可以使用面板自带的 MySQL / PostgreSQL 新建数据库，或者使用其他平台提供的远程数据库：

```bash
# 假定你的数据文件打算存储在 /home/username/domains/xxx.USERNAME.serv00.net/public_html/data
# 新建数据文件夹
mkdir -p /home/username/domains/xxx.USERNAME.serv00.net/public_html/data
# 测试运行（MySQL）（MySQL需要管理员权限，你可以选择远程连接）
./memos --mode prod --port PORT --data /home/username/domains/xxx.USERNAME.serv00.net/public_html/data --driver mysql --dsn mysql://root:password123@localhost:3306/mydb
# 测试运行（PostgreSQL）
./memos --mode prod --port PORT --data /home/username/domains/xxx.USERNAME.serv00.net/public_html/data --driver postgres --dsn postgresql://user:password123@localhost:5432/mydb?sslmode=disable
# 使用 pm2 管理（MySQL）（MySQL需要管理员权限，你可以选择远程连接）
pm2 start ./memos --name memos -- --mode prod --port PORT --data /home/username/domains/xxx.USERNAME.serv00.net/public_html/data --driver mysql --dsn mysql://root:password123@localhost:3306/mydb
# 使用 pm2 管理（PostgreSQL）
pm2 start ./memos --name memos -- --mode prod --port PORT --data /home/username/domains/xxx.USERNAME.serv00.net/public_html/data --driver postgres --dsn postgresql://user:password123@localhost:5432/mydb?sslmode=disable
```

## Frps

内网穿透嘛，懂的都懂，这里只做服务端的部署记录，客户端可以查看 [Frp 的官方文档](https://gofrp.org/zh-cn/)
自行配置。感谢群友的率先测试：[youyi](https://blog.theyouyi.site/archives/serv00-frps)

首先在 Panel 中放行两个端口，接着按照下表 Add a New Website ：

| Key          | Value                                                        |
|--------------|--------------------------------------------------------------|
| Domain       | `xxx.USERNAME.serv00.net`（也可以把原有的USERNAME.serv00.net删掉后重新添加） |
| Website Type | proxy                                                        |
| Proxy Target | localhost                                                    |
| Proxy URL    | 留空                                                           |
| Proxy port   | 你准备用来映射转发内网服务的端口                                             |
| Use HTPPS    | False                                                        |
| DNS support  | True                                                         |

添加完新站点后，继续点击上方的 Manage SSL certificates ，接着在出口 IP 的右侧点击 Manage ，再点击 Add certificate ：

| Type                                 | Domain                                              |
|--------------------------------------|-----------------------------------------------------|
| Generate Let’s Encrypted certificate | 与刚刚添加的站点域名保持一致（如果是原有的`USERNAME.serv00.net` ，可以省略此步） |

> 同样的，你可以设置多个域名使用 Proxy 指向同一个端口，在 Frpc 客户端配置中使用域名分发不同的服务。具体可以查阅官方文档。

接着SSH登入，并进入刚刚你新建的域名目录下的 `public_html` 路径下

```bash
release_info=$(curl -s https://api.github.com/repos/fatedier/frp/releases/latest)
download_url=$(echo "$release_info" | jq -r '.assets[] | select(.name | contains("freebsd_amd64.tar.gz")) | .browser_download_url')
curl -L "$download_url" -o frp_freebsd_amd64.tar.gz 
tar -xzvf frp_freebsd_amd64.tar.gz --strip-components=1
rm -rf frp_freebsd_amd64.tar.gz
```

接着编辑配置文件：

```bash
# 按照自己的实际情况和需求进行配置，这里只做最简单的http转发配置示例
cat > frps.toml << EOF
bindPort = 监听端口
vhostHTTPPort = 映射转发端口
auth.token = "密码"
EOF
```

运行：

```bash
pm2 start ./frps -- -c frps.toml
```

客户端配置示例：

```toml
serverAddr = "x.x.x.x"
serverPort = Frps 的监听端口
auth.token = "密码"

[[proxies]]
name = "web"
type = "http"
localPort = 80
customDomains = ["www.yourdomain.com"]

[[proxies]]
name = "web2"
type = "http"
localPort = 8080
customDomains = ["www.yourdomain2.com"]
```

## [Rclone](https://rclone.org/)

Rclone 是一款管理云存储文件的命令行程序。它功能丰富，可替代云供应商的网络存储界面。超过 70 种云存储产品支持 Rclone，包括 S3
对象存储、企业和消费者文件存储服务以及标准传输协议。

具体用法与配置请查阅其[官方文档](https://rclone.org/docs/)。

如果你需要使用 Rclone 的 web ui ，你可以按照前文所述的大多数应用一样，先放行端口，添加域名，申请好 SSL
证书，并进入其目录下的 `public_html` 路径下再进行程序本体的下载部署。

下载最新版 Rclone：

```bash
release_info=$(curl -s https://api.github.com/repos/rclone/rclone/releases/latest)
download_url=$(echo "$release_info" | jq -r '.assets[] | select(.name | contains("-freebsd-amd64.zip")) | .browser_download_url')
curl -L "$download_url" -o rclone-freebsd-amd64.zip
outer_folder=$(unzip -l rclone-freebsd-amd64.zip | grep '/' | sed -n '1p' | sed 's#^.* \([^/]*\)/.*$#\1#')
unzip rclone-freebsd-amd64.zip
mv "$outer_folder"/* . && rm -rf "$outer_folder" rclone-freebsd-amd64.zip
```

经我测试，目前 v1.63.1 之后的版本的 FreeBSD 版的构建都有无法识别 `mount` 命令的问题，在我查阅其
issue —— [#7432](https://github.com/rclone/rclone/issues/7432) 、 [#5843](https://github.com/rclone/rclone/issues/5843#issuecomment-1784149722)
后，确定这个 bug 已经好几个月没有修复了。所以我建议在此 bug 修复前，使用 v1.63.1 版本。

下载 v1.63.1 版本 Rclone ：

```bash
curl -L https://github.com/rclone/rclone/releases/download/v1.63.1/rclone-v1.63.1-freebsd-amd64.zip -o rclone-freebsd-amd64.zip
outer_folder=$(unzip -l rclone-freebsd-amd64.zip | grep '/' | sed -n '1p' | sed 's#^.* \([^/]*\)/.*$#\1#')
unzip rclone-freebsd-amd64.zip
mv "$outer_folder"/* . && rm -rf "$outer_folder" rclone-freebsd-amd64.zip
```

配置 Rclone 的存储：

```bash
./rclone config
```

启动 web ui：

```bash
./rclone rcd --rc-web-gui --rc-user 用户名 --rc-pass 密码 --rc-addr :端口
```

pm2 管理 web ui：

```bash
pm2 start ./rclone -- rcd --rc-web-gui --rc-user 用户名 --rc-pass 密码 --rc-addr :端口
```

## [Cloudreve](https://cloudreve.org/)

Cloudreve 可助你即刻构建出兼备自用或公用的网盘服务，通过多种存储策略的支持、虚拟文件系统等特性实现灵活的文件管理体验。

同样的，我编写了一个用于自动化构建 FreeBSD 版本的 Cloudreve
的仓库：[k0baya/cloudreve-freebsd](https://github.com/k0baya/cloudreve-freebsd) 前后端分离构建，前端静态文件在 Cloudreve
本体同路径下的 `static` 文件夹内。

首先在 Panel 中放行一个端口，接着按照下表 Add a New Website ：

| Key          | Value                                                        |
|--------------|--------------------------------------------------------------|
| Domain       | `xxx.USERNAME.serv00.net`（也可以把原有的USERNAME.serv00.net删掉后重新添加） |
| Website Type | proxy                                                        |
| Proxy Target | localhost                                                    |
| Proxy URL    | 留空                                                           |
| Proxy port   | 你准备用来部署 Cloudreve 的端口                                        |
| Use HTPPS    | False                                                        |
| DNS support  | True                                                         |

添加完新站点后，继续点击上方的 Manage SSL certificates ，接着在出口 IP 的右侧点击 Manage ，再点击 Add certificate ：

| Type                                 | Domain                                              |
|--------------------------------------|-----------------------------------------------------|
| Generate Let’s Encrypted certificate | 与刚刚添加的站点域名保持一致（如果是原有的`USERNAME.serv00.net` ，可以省略此步） |

接着SSH登入，并进入刚刚你新建的域名目录下的 `public_html` 路径下：

```bash
release_info=$(curl -s https://api.github.com/repos/k0baya/cloudreve-freebsd/releases/latest)
download_url=$(echo "$release_info" | jq -r '.assets[] | select(.name | contains("freebsd-amd64.tar.gz")) | .browser_download_url')
curl -L "$download_url" -o cloudreve-freebsd-amd64.tar.gz 
tar -xzvf cloudreve-freebsd-amd64.tar.gz
rm -rf cloudreve-freebsd-amd64.tar.gz
```

Cloudreve
在首次启动时，会创建初始管理员账号，请注意保管管理员密码，此密码只会在首次启动时出现。如果您忘记初始管理员密码，需要删除同级目录下的 `cloudreve.db`
，重新启动主程序以初始化新的管理员账户。

Cloudreve 默认会监听 `5212` 端口。首次启动时，Cloudreve 会在同级目录下创建名为 `conf.ini`
的配置文件，你可以修改此文件进行一些参数的配置（比如端口），保存后需要重新启动 Cloudreve 生效。

一个完整的配置文件示例如下：

```ini
[System]
; 运行模式
Mode = master
; 监听端口
Listen = :5212
; 是否开启 Debug
Debug = false
; Session 密钥, 一般在首次启动时自动生成
SessionSecret = 23333
; Hash 加盐, 一般在首次启动时自动生成
HashIDSalt = something really hard to guss
; 呈递客户端 IP 时使用的 Header
ProxyHeader = X-Forwarded-For

; SSL 相关
[SSL]
; SSL 监听端口
Listen = :443
; 证书路径
CertPath = C:\Users\i\Documents\fullchain.pem
; 私钥路径
KeyPath = C:\Users\i\Documents\privkey.pem

; 启用 Unix Socket 监听
[UnixSocket]
Listen = /run/cloudreve/cloudreve.sock
; 设置产生的 socket 文件的权限
Perm = 0666

; 数据库相关，如果你只想使用内置的 SQLite 数据库，这一部分直接删去即可
[Database]
; 数据库类型，目前支持 sqlite/mysql/mssql/postgres
Type = mysql
; MySQL 端口
Port = 3306
; 用户名
User = root
; 密码
Password = root
; 数据库地址
Host = 127.0.0.1
; 数据库名称
Name = v3
; 数据表前缀
TablePrefix = cd_
; 字符集
Charset = utf8mb4
; SQLite 数据库文件路径
DBFile = cloudreve.db
; 进程退出前安全关闭数据库连接的缓冲时间
GracePeriod = 30
; 使用 Unix Socket 连接到数据库
UnixSocket = false

; 从机模式下的配置
[Slave]
; 通信密钥
Secret = 1234567891234567123456789123456712345678912345671234567891234567
; 回调请求超时时间 (s)
CallbackTimeout = 20
; 签名有效期
SignatureTTL = 60

; 跨域配置
[CORS]
AllowOrigins = *
AllowMethods = OPTIONS,GET,POST
AllowHeaders = *
AllowCredentials = false
SameSite = Default
Secure = lse

; Redis 相关
[Redis]
Server = 127.0.0.1:6379
Password =
DB = 0

; 从机配置覆盖
[OptionOverwrite]
; 可直接使用 `设置名称 = 值` 的格式覆盖
max_worker_num = 50
```

你可以使用 `vim` 或者 Panel 中的 File manager 选项卡，进入 `conf.ini` 所在路径路径，右键点击，选择 View/Edit > Source
Editor ，进行编辑。

修改完配置文件后，测试启动：

```bash
./cloudreve
```

使用 pm2 管理：

```bash
pm2 start ./cloudreve
```

## [PanIndex](https://github.com/px-org/PanIndex)

一个简易的网盘目录列表。

同样的，我编写了一个用于自动化构建 FreeBSD 版本的 PanIndex
的仓库：[k0baya/panindex-freebsd](https://github.com/k0baya/panindex-freebsd)。

> 后台地址（默认）：`http://ip:port/admin`
> 默认账号：`admin`
> 默认密码：`PanIndex`

首先在 Panel 中放行一个端口，接着按照下表 Add a New Website ：

| Key          | Value                                                        |
|--------------|--------------------------------------------------------------|
| Domain       | `xxx.USERNAME.serv00.net`（也可以把原有的USERNAME.serv00.net删掉后重新添加） |
| Website Type | proxy                                                        |
| Proxy Target | localhost                                                    |
| Proxy URL    | 留空                                                           |
| Proxy port   | 你准备用来部署 PanIndex 的端口                                         |
| Use HTPPS    | False                                                        |
| DNS support  | True                                                         |

添加完新站点后，继续点击上方的 Manage SSL certificates ，接着在出口 IP 的右侧点击 Manage ，再点击 Add certificate ：

| Type                                 | Domain                                              |
|--------------------------------------|-----------------------------------------------------|
| Generate Let’s Encrypted certificate | 与刚刚添加的站点域名保持一致（如果是原有的`USERNAME.serv00.net` ，可以省略此步） |

接着SSH登入，并进入刚刚你新建的域名目录下的 `public_html` 路径下：

```bash
release_info=$(curl -s https://api.github.com/repos/k0baya/panindex-freebsd/releases/latest)
asset_url=$(echo "$release_info" | jq -r '.assets[] | select(.name != "source code") | .browser_download_url')
curl -L -o panindex "$asset_url" && chmod +x panindex
```

创建配置文件：

```bash
cat > config.json << EOF
{
  "host": "0.0.0.0",
  "port": 5238,
  "log_level": "info",
  "data_path": "",
  "cert_file": "",
  "key_file": "",
  "config_query": "",
  "db_type": "",
  "dsn": "",
  "ui": ""
}
EOF
```

> 数据库支持 sqlite (默认)、mysql、postgres ，如果需要接入 MySQL 或者 PostgreSQL ，请写成数据库链接的方式填入 dsn 。注意，如果是
> Serv00 自带的 PostgreSQL ，请在数据库链接最末加上 `?sslmode=disable` 以禁用 SSL 连接。

编写好配置文件后，测试运行：

```bash
./panindex -c=config.json
```

使用 pm2 管理：

```bash
pm2 start ./panindex -- -c=config.json
```

## [Artalk](https://github.com/ArtalkJS/Artalk)

# 收尾工作

听说 Serv00 会不定时重启机器，所以我们把 pm2 添加开机自启，可以保证每次重启都能由 pm2 调动 Alist 和 Cloudflared 。而且
Serv00 每三个月内必须要有一次登录面板或者 SSH 连接，不然会删号，也可以通过一个脚本解决问题，接下来我会详细说明。

## 自动续期

可以用青龙面板的自动任务定期登录SSH解决。在青龙面板中添加Linux依赖 `sshpass`
，然后添加定时任务：名称随意，命令/脚本 `sshpass -p '密码' ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -tt 用户名@地址 "exit"`
，定时规则 `1 1 1 * *`。这样就会每个月自动ssh连接一次，实现续期。

你还可以使用自身 SSH 自身的方式进行自动续期，操作如下：
进入一个自己喜欢的路径，使用 `cat` 命令新建 `auto-renew.sh` 脚本：

```bash
cat > auto-renew.sh << EOF
#!/bin/bash

while true; do
  sshpass -p '密码' ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -tt 用户名@地址 "exit" &
  sleep 259200  #30天为259200秒
done
EOF
```

记得把其中的密码、用户名、ssh的地址修改为你自己的。
给 `auto-renew.sh`添加可执行权限：

```bash
chmod +x auto-renew.sh
```

使用pm2启动：

```bash
pm2 start ./auto-renew.sh
```

这样就会每隔一个月自动执行一次SSH连接，自己SSH自己进行续期。

## 自动启动

听说 Serv00 的主机会不定时重启，所以需要添加自启任务。

在 Panel 中找到 Cron jobs 选项卡，使用 Add cron job 功能添加任务，Specify time 选择 After reboot，即为重启后运行。Form type
选择 Advanced，Command 写：

```bash
/home/你的用户名/.npm-global/bin/pm2 resurrect
```

> 记得把你的用户名改为你的用户名

添加完之后，在 SSH 窗口保存 pm2 的当前任务列表快照：

```bash
pm2 save
```

这样每次 serv00 不定时重启任务时，都能自动调用 pm2 读取保存的任务列表快照，恢复任务列表。**如果在保存了任务列表快照后又改变了任务
pm2 的任务列表，需要重新执行 `pm2 save` 以更新任务列表。**

# serv00主机部署go-proxy-bingai (一)

## 开始之前

- 注册cf账号并绑定域名
- 注册[serv00](https://www.serv00.com/)账号并开放端口

## 安装 go-proxy-bingai

```bash
mkdir ~/domains/bingai && cd ~/domains/bingai && wget https://github.com/Harry-zklcdc/go-proxy-bingai/releases/download/v2.1.1/go-proxy-bingai-freebsd-amd64.tar.gz && tar -xzvf go-proxy-bingai-freebsd-amd64.tar.gz && rm -fr go-proxy-bingai-freebsd-amd64.tar.gz && chmod +x go-proxy-bingai 
```

**项目地址**
帮作者点个 `star` 吧

[GitHub](https://github.com/Harry-zklcdc/go-proxy-bingai)

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/3fb4b19417d7af5a57084d93d5b914f80866b719_2_690x345.png)

## 安装pm2

```bash
bash <(curl -s https://raw.githubusercontent.com/k0baya/alist_repl/main/serv00/install-pm2.sh)
```

## 编写 auto-renew.sh （可选）

如果你不常登录，建议设置30日自动登陆一次，注意修改用户名、密码、ssh的地址，并将文件保存在domains目录下，如果开启了2FA，需要关闭。

```bash
#!/bin/bash

while true; do
  sshpass -p '密码' ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -tt 用户名@地址 "exit" &
  sleep 2592000  #30天为2592000秒
done
```

## 编写 entrypoint.sh

注意更换Port为你在serv00开放的端口号，并根据需求自行修改环境变量，并将文件保存在bingai目录下

```shell
cat > entrypoint.sh << EOF
#!/bin/bash

# export Go_Proxy_BingAI_USER_TOKEN_1="xxx"
# export Go_Proxy_BingAI_USER_TOKEN_2="xxx"
# export USER_KievRPSSecAuth="xxx"
# export USER_RwBf="xxx"
# export USER_MUID="xxx"
# export APIKEY="sk-xxx"
# export BING_BASE_URL="https://www.bing.com"
# export SYDNEY_BASE_URL="https://sydney.bing.com"
# export HTTP_PROXY="http://172.17.0.1:18080"
# export HTTPS_PROXY="http://172.17.0.1:18080"
# export Go_Proxy_BingAI_AUTH_KEY="xxx"
# export BYPASS_SERVER="https://bypass.zklcdc.xyz" # 作者提供的通关站，建议自行搭建
export PORT="Port"
chmod +x go-proxy-bingai && ./go-proxy-bingai
EOF
```

## 搭建隧道

访问cloudflare[相关页面](https://one.dash.cloudflare.com/)，点击Networks-Tunnels-create a tunnel ,类型选择 Cloudflared，点击
Next，任意取名，接着点save tunnel，往下找到 Run the following command 复制，复制好后只要保留 `eyJ` 开头的 `token` 即可：

------



![image](https://bitbucket.org/xlc520/blogasset/raw/main/images3/534ebc8fa22d8e17e808fe6a6db0ddc6535aaf50_2_690x266.png)

继续点击Next，并添加域名，Service选择HTTP，URL写localhost:PORT，其中PORT为你服务对应的端口然后点击Save Tunnel

## 编写 ecosystem.config.js

注意替换 `$username` 和 隧道的 `token` ，并将文件保存到domains目录下

```bash
module.exports = {
  apps: [
    {
      name: "tunnel",
      script: "./cloudflared",
      cwd: "/home/$username/domains/cloudflared",
      args: "tunnel --edge-ip-version auto --protocol http2 --heartbeat-interval 10s run --token eyJ_***"
    },
    {
      name: "auto-renew",
      script: "./auto-renew.sh",
      cwd: "/home/$username/domains",
      interpreter: "bash"
    },
    {
      name: "entrypoint",
      script: "./entrypoint.sh",
      cwd: "/home/$username/domains/bingai",
      interpreter: "bash"
    }
  ]
};
```

## 一键启动

```bash
cd  ~/domains && ~/.npm-global/bin/pm2 start ecosystem.config.js
```

启动后记得保存快照

```python
~/.npm-global/bin/pm2 save
```

## 一键关闭

```bash
cd  ~/domains && ~/.npm-global/bin/pm2 kill
```

## 开机自启

在Panel中找到Cron jobs选项卡，使用Add cron job功能添加任务：

------



![image](https://bitbucket.org/xlc520/blogasset/raw/main/images3/71eda1a77b024e435c3d5527ceaa9f20272a53b6_2_690x450.png)

# serv00主机部署go-proxy-bingai (二)

## 演示站

https://copilot-king.serv00.net/

## 注册

1、访问https://www.serv00.com/，点击 **Register an account**

<details class="notion-toggle notion-block-4304c53c978647129347924da416418c" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; padding: 3px 2px; margin-block: 0px; outline: 0px; width: 816px; color: rgb(209, 213, 219); font-family: Bitter, &quot;Noto Serif SC&quot;, SimSun, &quot;Times New Roman&quot;, Times, serif, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Apple Color Emoji&quot;, &quot;Noto Serif CJK SC&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 300; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(0, 0, 0); white-space: normal; background-color: rgb(16, 20, 20); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: list-item; margin-block: 0px; outline: none; cursor: pointer;">操作截图</summary><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; margin-left: 1.1em;"><figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-4f705c7b74804236a3249da06cfefbf8" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; max-width: 100%; margin-block: 0px; outline: 0px; margin: 0.5rem 0px; min-width: 100%; align-self: center; display: flex; flex-direction: column;"><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; height: 460.445px; position: relative; display: flex; justify-content: center; align-self: center; width: 794.427px; max-width: 100%; flex-direction: column;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fff9b6117-d955-4a2e-a7ea-e7ba0b4b9bf5%2F9fadb519-6c04-4159-b1f1-ee00a0bc27ce%2F1.png?table=block&amp;id=4f705c7b-7480-4236-a324-9da06cfefbf8&amp;t=4f705c7b-7480-4236-a324-9da06cfefbf8" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: block; vertical-align: middle; max-width: 100%; height: auto !important; margin-block: 0px; outline: 0px; border-radius: 0px; cursor: zoom-in; transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1) 0s !important; width: 714.982px; max-height: 100%; margin: auto; object-fit: cover;"></div></figure></div></details>

2、到注册界面，填写信息，填写好后，点击**Create account，**点击之后就可以了**，**登录方式会发送到你填写的邮箱里

<details class="notion-toggle notion-block-fc05dffbbb544ac98f5e817063f11e92" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; padding: 3px 2px; margin-block: 0px; outline: 0px; width: 816px; color: rgb(209, 213, 219); font-family: Bitter, &quot;Noto Serif SC&quot;, SimSun, &quot;Times New Roman&quot;, Times, serif, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Apple Color Emoji&quot;, &quot;Noto Serif CJK SC&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 300; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(0, 0, 0); white-space: normal; background-color: rgb(16, 20, 20); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: list-item; margin-block: 0px; outline: none; cursor: pointer;">操作截图</summary><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; margin-left: 1.1em;"><figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-853b6b9132b443b788dd320e76cd32f6" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; max-width: 100%; margin-block: 0px; outline: 0px; margin: 0.5rem 0px; min-width: 100%; align-self: center; display: flex; flex-direction: column;"><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; height: 475.091px; position: relative; display: flex; justify-content: center; align-self: center; width: 794.427px; max-width: 100%; flex-direction: column;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fff9b6117-d955-4a2e-a7ea-e7ba0b4b9bf5%2F489c8ad8-b160-43d1-8585-a04a5f2d4b0d%2FUntitled.png?table=block&amp;id=853b6b91-32b4-43b7-88dd-320e76cd32f6&amp;t=853b6b91-32b4-43b7-88dd-320e76cd32f6" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: block; vertical-align: middle; max-width: 100%; height: auto !important; margin-block: 0px; outline: 0px; border-radius: 0px; cursor: zoom-in; transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1) 0s !important; width: 714.982px; max-height: 100%; margin: auto; object-fit: cover;"></div></figure><figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-431cc756410f46dcad72b5fa9481c454" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; max-width: 100%; margin-block: 0px; outline: 0px; margin: 0.5rem 0px; min-width: 100%; align-self: center; display: flex; flex-direction: column;"><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; height: 330.314px; position: relative; display: flex; justify-content: center; align-self: center; width: 794.427px; max-width: 100%; flex-direction: column;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fff9b6117-d955-4a2e-a7ea-e7ba0b4b9bf5%2Ffea8767a-dd15-4d52-863c-b79964b76def%2FUntitled.png?table=block&amp;id=431cc756-410f-46dc-ad72-b5fa9481c454&amp;t=431cc756-410f-46dc-ad72-b5fa9481c454" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: block; vertical-align: middle; max-width: 100%; height: auto !important; margin-block: 0px; outline: 0px; border-radius: 0px; cursor: zoom-in; transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1) 0s !important; width: 714.982px; max-height: 100%; margin: auto; object-fit: cover;"></div></figure></div></details>

3、邮箱里找到登录方式（登录的网址和账号密码），登录到管理的web页面

<details class="notion-toggle notion-block-32304ce4fdad4ff5a3942a982d0a7701" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; padding: 3px 2px; margin-block: 0px; outline: 0px; width: 816px; color: rgb(209, 213, 219); font-family: Bitter, &quot;Noto Serif SC&quot;, SimSun, &quot;Times New Roman&quot;, Times, serif, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Apple Color Emoji&quot;, &quot;Noto Serif CJK SC&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 300; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(0, 0, 0); white-space: normal; background-color: rgb(16, 20, 20); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: list-item; margin-block: 0px; outline: none; cursor: pointer;">操作截图</summary><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; margin-left: 1.1em;"><figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-eb7fe8d5a0c64e86a298c2ed1ccda8fc" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; max-width: 100%; margin-block: 0px; outline: 0px; margin: 0.5rem 0px; min-width: 100%; align-self: center; display: flex; flex-direction: column;"><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; height: 570.545px; position: relative; display: flex; justify-content: center; align-self: center; width: 794.427px; max-width: 100%; flex-direction: column;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fff9b6117-d955-4a2e-a7ea-e7ba0b4b9bf5%2Fa0ba36eb-001d-439c-b2fb-fed705989b8c%2FUntitled.png?table=block&amp;id=eb7fe8d5-a0c6-4e86-a298-c2ed1ccda8fc&amp;t=eb7fe8d5-a0c6-4e86-a298-c2ed1ccda8fc" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: block; vertical-align: middle; max-width: 100%; height: auto !important; margin-block: 0px; outline: 0px; border-radius: 0px; cursor: zoom-in; transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1) 0s !important; width: 714.982px; max-height: 100%; margin: auto; object-fit: cover;"></div></figure><figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-ddcc26f04af645bc92153e19f76ce45f" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; max-width: 100%; margin-block: 0px; outline: 0px; margin: 0.5rem 0px; min-width: 100%; align-self: center; display: flex; flex-direction: column;"><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; height: 31.9909px; position: relative; display: flex; justify-content: center; align-self: center; width: 794.427px; max-width: 100%; flex-direction: column;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fff9b6117-d955-4a2e-a7ea-e7ba0b4b9bf5%2Fde975834-d077-4909-9fde-40f478e67e7a%2FUntitled.png?table=block&amp;id=ddcc26f0-4af6-45bc-9215-3e19f76ce45f&amp;t=ddcc26f0-4af6-45bc-9215-3e19f76ce45f" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: block; vertical-align: middle; max-width: 100%; height: auto !important; margin-block: 0px; outline: 0px; border-radius: 0px; cursor: zoom-in; transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1) 0s !important; width: 714.982px; max-height: 100%; margin: auto; object-fit: cover;"></div></figure></div></details>

## 部署应用-web界面端的操作

1、Additional services 选项卡中找到 Run your own applications 项目，将其设置为 Enabled 即可。*
*如果不开启这一项，自己的用户目录下的所有文件都无法添加可执行权限。**

<details class="notion-toggle notion-block-5ba83d32923146c2898858893f2e6943" open="" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; padding: 3px 2px; margin-block: 0px; outline: 0px; width: 816px; color: rgb(209, 213, 219); font-family: Bitter, &quot;Noto Serif SC&quot;, SimSun, &quot;Times New Roman&quot;, Times, serif, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Apple Color Emoji&quot;, &quot;Noto Serif CJK SC&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 300; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(0, 0, 0); white-space: normal; background-color: rgb(16, 20, 20); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: list-item; margin-block: 0px; outline: none; cursor: pointer;">操作截图</summary><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; margin-left: 1.1em;"><figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-752121b147c840f69949912c722ac6fe" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; max-width: 100%; margin-block: 0px; outline: 0px; margin: 0.5rem 0px; min-width: 100%; align-self: center; display: flex; flex-direction: column;"><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; height: 328.882px; position: relative; display: flex; justify-content: center; align-self: center; width: 794.427px; max-width: 100%; flex-direction: column;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fff9b6117-d955-4a2e-a7ea-e7ba0b4b9bf5%2F9eac201e-04da-43a5-868d-89a18df79dc3%2FUntitled.png?table=block&amp;id=752121b1-47c8-40f6-9949-912c722ac6fe&amp;t=752121b1-47c8-40f6-9949-912c722ac6fe" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: block; vertical-align: middle; max-width: 100%; height: auto !important; margin-block: 0px; outline: 0px; border-radius: 0px; cursor: zoom-in; transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1) 0s !important; width: 714.982px; max-height: 100%; margin: auto; object-fit: cover;"></div></figure></div></details>

2、开放一个端口。Port reservation 选项卡中 Add port ，随便开放一个端口即可

<details class="notion-toggle notion-block-c870608ae4364455a6dc0cbd4ce79918" open="" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; padding: 3px 2px; margin-block: 0px; outline: 0px; width: 816px; color: rgb(209, 213, 219); font-family: Bitter, &quot;Noto Serif SC&quot;, SimSun, &quot;Times New Roman&quot;, Times, serif, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Apple Color Emoji&quot;, &quot;Noto Serif CJK SC&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 300; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(0, 0, 0); white-space: normal; background-color: rgb(16, 20, 20); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: list-item; margin-block: 0px; outline: none; cursor: pointer;">操作截图</summary><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; margin-left: 1.1em;"><figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-3ae6ba2f0bc143049dbbd0ae1645fdca" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; max-width: 100%; margin-block: 0px; outline: 0px; margin: 0.5rem 0px; min-width: 100%; align-self: center; display: flex; flex-direction: column;"><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; height: 465.45px; position: relative; display: flex; justify-content: center; align-self: center; width: 794.427px; max-width: 100%; flex-direction: column;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fff9b6117-d955-4a2e-a7ea-e7ba0b4b9bf5%2Fbd728a30-ce9c-4129-885f-c0f31d8f0dbf%2FUntitled.png?table=block&amp;id=3ae6ba2f-0bc1-4304-9dbb-d0ae1645fdca&amp;t=3ae6ba2f-0bc1-4304-9dbb-d0ae1645fdca" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: block; vertical-align: middle; max-width: 100%; height: auto !important; margin-block: 0px; outline: 0px; border-radius: 0px; cursor: zoom-in; transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1) 0s !important; width: 714.982px; max-height: 100%; margin: auto; object-fit: cover;"></div></figure><figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-a1cfee0a3ec145c7957ffb74952cf6d9" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; max-width: 100%; margin-block: 0px; outline: 0px; margin: 0.5rem 0px; min-width: 100%; align-self: center; display: flex; flex-direction: column;"><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; height: 322.091px; position: relative; display: flex; justify-content: center; align-self: center; width: 794.427px; max-width: 100%; flex-direction: column;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fff9b6117-d955-4a2e-a7ea-e7ba0b4b9bf5%2F32515d3a-7db5-43c0-86da-50c969fd3a87%2FUntitled.png?table=block&amp;id=a1cfee0a-3ec1-45c7-957f-fb74952cf6d9&amp;t=a1cfee0a-3ec1-45c7-957f-fb74952cf6d9" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: block; vertical-align: middle; max-width: 100%; height: auto !important; margin-block: 0px; outline: 0px; border-radius: 0px; cursor: zoom-in; transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1) 0s !important; width: 714.982px; max-height: 100%; margin: auto; object-fit: cover;"></div></figure></div></details>

3、把已有的web站点删了，但域名要记住，那个是分配给你使用的子域名

<details class="notion-toggle notion-block-5f5df0751e6c4cc38659bcc76ddfb689" open="" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; padding: 3px 2px; margin-block: 0px; outline: 0px; width: 816px; color: rgb(209, 213, 219); font-family: Bitter, &quot;Noto Serif SC&quot;, SimSun, &quot;Times New Roman&quot;, Times, serif, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Apple Color Emoji&quot;, &quot;Noto Serif CJK SC&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 300; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(0, 0, 0); white-space: normal; background-color: rgb(16, 20, 20); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: list-item; margin-block: 0px; outline: none; cursor: pointer;">操作截图</summary><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; margin-left: 1.1em;"><figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-259c09c7e550400e8d8be38ce24eaa8e" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; max-width: 100%; margin-block: 0px; outline: 0px; margin: 0.5rem 0px; min-width: 100%; align-self: center; display: flex; flex-direction: column;"><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; height: 263.468px; position: relative; display: flex; justify-content: center; align-self: center; width: 794.427px; max-width: 100%; flex-direction: column;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fff9b6117-d955-4a2e-a7ea-e7ba0b4b9bf5%2Ff9e44032-2efe-4b4f-b006-1d4c1e55a6b6%2FUntitled.png?table=block&amp;id=259c09c7-e550-400e-8d8b-e38ce24eaa8e&amp;t=259c09c7-e550-400e-8d8b-e38ce24eaa8e" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: block; vertical-align: middle; max-width: 100%; height: auto !important; margin-block: 0px; outline: 0px; border-radius: 0px; cursor: zoom-in; transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1) 0s !important; width: 714.982px; max-height: 100%; margin: auto; object-fit: cover;"></div></figure><figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-5829f983f3aa4fe58e2e2775e58f1b34" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; max-width: 100%; margin-block: 0px; outline: 0px; margin: 0.5rem 0px; min-width: 100%; align-self: center; display: flex; flex-direction: column;"><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; height: 219.136px; position: relative; display: flex; justify-content: center; align-self: center; width: 794.427px; max-width: 100%; flex-direction: column;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fff9b6117-d955-4a2e-a7ea-e7ba0b4b9bf5%2F8c587a5f-a277-4f9c-ba18-639560ee2775%2FUntitled.png?table=block&amp;id=5829f983-f3aa-4fe5-8e2e-2775e58f1b34&amp;t=5829f983-f3aa-4fe5-8e2e-2775e58f1b34" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: block; vertical-align: middle; max-width: 100%; height: auto !important; margin-block: 0px; outline: 0px; border-radius: 0px; cursor: zoom-in; transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1) 0s !important; width: 714.982px; max-height: 100%; margin: auto; object-fit: cover;"></div></figure></div></details>

3、把域名指向刚才开放的端口。Add new website 功能中， Domain 填写自己的域名或者 serv00 分配的域名，或者它们的子域，展开
Advanced settings， Website type 选择 Proxy ，Proxy target 选择 localhost ， Proxy port 选择自己的应用监听的端口，其他选项留空或者保持默认，点击
Add 即可。接下来就能使用刚刚填写的域名访问自己部署的对应端口的应用了。

<details class="notion-toggle notion-block-47d784319b0b4a3498e69c8fa48298bc" open="" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; padding: 3px 2px; margin-block: 0px; outline: 0px; width: 816px; color: rgb(209, 213, 219); font-family: Bitter, &quot;Noto Serif SC&quot;, SimSun, &quot;Times New Roman&quot;, Times, serif, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Apple Color Emoji&quot;, &quot;Noto Serif CJK SC&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 300; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(0, 0, 0); white-space: normal; background-color: rgb(16, 20, 20); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: list-item; margin-block: 0px; outline: none; cursor: pointer;">操作截图</summary><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; margin-left: 1.1em;"><figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-8d531342fb3d4143bc953d59da25ebcb" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; max-width: 100%; margin-block: 0px; outline: 0px; margin: 0.5rem 0px; min-width: 100%; align-self: center; display: flex; flex-direction: column;"><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; height: 324.955px; position: relative; display: flex; justify-content: center; align-self: center; width: 794.427px; max-width: 100%; flex-direction: column;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fff9b6117-d955-4a2e-a7ea-e7ba0b4b9bf5%2Ffe0ea6a2-50bb-467d-a440-80995f34b4e5%2FUntitled.png?table=block&amp;id=8d531342-fb3d-4143-bc95-3d59da25ebcb&amp;t=8d531342-fb3d-4143-bc95-3d59da25ebcb" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: block; vertical-align: middle; max-width: 100%; height: auto !important; margin-block: 0px; outline: 0px; border-radius: 0px; cursor: zoom-in; transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1) 0s !important; width: 714.982px; max-height: 100%; margin: auto; object-fit: cover;"></div></figure></div></details>

4、go-proxy-bingai的web访问，需要ssl证书，所以现在需要申请ssl证书。**WWW Websites** 选项卡 **Management SSL certificates**
可以跳转到SSL证书管理的地方。随便选一个点击 **manage** 然后点击 **add certificate ，Type** 选择 **Generate Let’s Encrypt
certificate ，**Domain选择要申请SSL证书的域名，再点击 Add即可**。**

<details class="notion-toggle notion-block-6dd0afc421a24f23a0b8d932d56067b7" open="" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; padding: 3px 2px; margin-block: 0px; outline: 0px; width: 816px; color: rgb(209, 213, 219); font-family: Bitter, &quot;Noto Serif SC&quot;, SimSun, &quot;Times New Roman&quot;, Times, serif, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Apple Color Emoji&quot;, &quot;Noto Serif CJK SC&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 300; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(0, 0, 0); white-space: normal; background-color: rgb(16, 20, 20); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: list-item; margin-block: 0px; outline: none; cursor: pointer;">操作截图</summary><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; margin-left: 1.1em;"><figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-b3dbd9019f6841619571c88a0707137f" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; max-width: 100%; margin-block: 0px; outline: 0px; margin: 0.5rem 0px; min-width: 100%; align-self: center; display: flex; flex-direction: column;"><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; height: 298.5px; position: relative; display: flex; justify-content: center; align-self: center; width: 794.427px; max-width: 100%; flex-direction: column;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fff9b6117-d955-4a2e-a7ea-e7ba0b4b9bf5%2F91a621c5-dbe0-4472-a2e7-85f1148a1114%2FUntitled.png?table=block&amp;id=b3dbd901-9f68-4161-9571-c88a0707137f&amp;t=b3dbd901-9f68-4161-9571-c88a0707137f" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: block; vertical-align: middle; max-width: 100%; height: auto !important; margin-block: 0px; outline: 0px; border-radius: 0px; cursor: zoom-in; transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1) 0s !important; width: 714.982px; max-height: 100%; margin: auto; object-fit: cover;"></div></figure><figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-fb1bbeb76a9d4cae89e400a8fd08cd0a" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; max-width: 100%; margin-block: 0px; outline: 0px; margin: 0.5rem 0px; min-width: 100%; align-self: center; display: flex; flex-direction: column;"><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; height: 363.205px; position: relative; display: flex; justify-content: center; align-self: center; width: 794.427px; max-width: 100%; flex-direction: column;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fff9b6117-d955-4a2e-a7ea-e7ba0b4b9bf5%2Ff0e6b75e-f2af-422a-a711-e5caf19311cb%2FUntitled.png?table=block&amp;id=fb1bbeb7-6a9d-4cae-89e4-00a8fd08cd0a&amp;t=fb1bbeb7-6a9d-4cae-89e4-00a8fd08cd0a" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: block; vertical-align: middle; max-width: 100%; height: auto !important; margin-block: 0px; outline: 0px; border-radius: 0px; cursor: zoom-in; transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1) 0s !important; width: 714.982px; max-height: 100%; margin: auto; object-fit: cover;"></div></figure><figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-eba9f50e024e47e59a88a0789975ad58" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; max-width: 100%; margin-block: 0px; outline: 0px; margin: 0.5rem 0px; min-width: 100%; align-self: center; display: flex; flex-direction: column;"><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; height: 225.218px; position: relative; display: flex; justify-content: center; align-self: center; width: 794.427px; max-width: 100%; flex-direction: column;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fff9b6117-d955-4a2e-a7ea-e7ba0b4b9bf5%2F8d60d07e-2e10-4141-92cd-52ceb3762d4a%2FUntitled.png?table=block&amp;id=eba9f50e-024e-47e5-9a88-a0789975ad58&amp;t=eba9f50e-024e-47e5-9a88-a0789975ad58" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: block; vertical-align: middle; max-width: 100%; height: auto !important; margin-block: 0px; outline: 0px; border-radius: 0px; cursor: zoom-in; transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1) 0s !important; width: 714.982px; max-height: 100%; margin: auto; object-fit: cover;"></div></figure></div></details>

5、申请完ssl证书，web站点那里开启强制https,到这里，web的配置就完成了，后面就ssh连接到后台操作了。

<details class="notion-toggle notion-block-e2e98f2fcff54ec8b214c21988db8700" open="" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; padding: 3px 2px; margin-block: 0px; outline: 0px; width: 816px; color: rgb(209, 213, 219); font-family: Bitter, &quot;Noto Serif SC&quot;, SimSun, &quot;Times New Roman&quot;, Times, serif, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Apple Color Emoji&quot;, &quot;Noto Serif CJK SC&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 300; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(0, 0, 0); white-space: normal; background-color: rgb(16, 20, 20); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: list-item; margin-block: 0px; outline: none; cursor: pointer;">操作截图</summary><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; margin-left: 1.1em;"><figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-dda3cea19c92437592ef99af846793e2" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; max-width: 100%; margin-block: 0px; outline: 0px; margin: 0.5rem 0px; min-width: 100%; align-self: center; display: flex; flex-direction: column;"><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; height: 221.277px; position: relative; display: flex; justify-content: center; align-self: center; width: 794.427px; max-width: 100%; flex-direction: column;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fff9b6117-d955-4a2e-a7ea-e7ba0b4b9bf5%2F08a85692-404c-4fd4-898e-cf3e991d8494%2FUntitled.png?table=block&amp;id=dda3cea1-9c92-4375-92ef-99af846793e2&amp;t=dda3cea1-9c92-4375-92ef-99af846793e2" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: block; vertical-align: middle; max-width: 100%; height: auto !important; margin-block: 0px; outline: 0px; border-radius: 0px; cursor: zoom-in; transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1) 0s !important; width: 714.982px; max-height: 100%; margin: auto; object-fit: cover;"></div></figure><figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-845ef38f030c4c388ed31f14bc7d9966" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; max-width: 100%; margin-block: 0px; outline: 0px; margin: 0.5rem 0px; min-width: 100%; align-self: center; display: flex; flex-direction: column;"><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; height: 722.836px; position: relative; display: flex; justify-content: center; align-self: center; width: 794.427px; max-width: 100%; flex-direction: column;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fff9b6117-d955-4a2e-a7ea-e7ba0b4b9bf5%2F1b3402c8-e448-4d89-bf8e-164a12eb98d4%2FUntitled.png?table=block&amp;id=845ef38f-030c-4c38-8ed3-1f14bc7d9966&amp;t=845ef38f-030c-4c38-8ed3-1f14bc7d9966" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: block; vertical-align: middle; max-width: 100%; height: auto !important; margin-block: 0px; outline: 0px; border-radius: 0px; cursor: zoom-in; transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1) 0s !important; width: 714.982px; max-height: 100%; margin: auto; object-fit: cover;"></div></figure></div></details>

## 部署应用-SSH连接后台

1、邮件中有SSH登录的地址，端口22，账号密码和web登录的账号密码一致，登录到后台，先直接使用一键脚本安装pm2，方便管理进程

### bash

```bash
bash <(curl -s https://raw.githubusercontent.com/k0baya/alist_repl/main/serv00/install-pm2.sh)
```

Bash

Copy

<details class="notion-toggle notion-block-c18e048455f74c3a8cbc64d14451164a" open="" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; padding: 3px 2px; margin-block: 0px; outline: 0px; width: 816px; color: rgb(209, 213, 219); font-family: Bitter, &quot;Noto Serif SC&quot;, SimSun, &quot;Times New Roman&quot;, Times, serif, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Apple Color Emoji&quot;, &quot;Noto Serif CJK SC&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 300; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(0, 0, 0); white-space: normal; background-color: rgb(16, 20, 20); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: list-item; margin-block: 0px; outline: none; cursor: pointer;">操作截图</summary><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; margin-left: 1.1em;"><figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-f9f2da91dfe7496696993d18e5b5a74c" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; max-width: 100%; margin-block: 0px; outline: 0px; margin: 0.5rem 0px; min-width: 100%; align-self: center; display: flex; flex-direction: column;"><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; height: 469.377px; position: relative; display: flex; justify-content: center; align-self: center; width: 794.427px; max-width: 100%; flex-direction: column;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fff9b6117-d955-4a2e-a7ea-e7ba0b4b9bf5%2Fdbde1a64-26e7-43fd-b00f-42805a1143e3%2FUntitled.png?table=block&amp;id=f9f2da91-dfe7-4966-9699-3d18e5b5a74c&amp;t=f9f2da91-dfe7-4966-9699-3d18e5b5a74c" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: block; vertical-align: middle; max-width: 100%; height: auto !important; margin-block: 0px; outline: 0px; border-radius: 0px; cursor: zoom-in; transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1) 0s !important; width: 714.982px; max-height: 100%; margin: auto; object-fit: cover;"></div></figure><figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-52f1e54dc8fd42b4a8672f94a00d2ee8" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; max-width: 100%; margin-block: 0px; outline: 0px; margin: 0.5rem 0px; min-width: 100%; align-self: center; display: flex; flex-direction: column;"><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; height: 136.555px; position: relative; display: flex; justify-content: center; align-self: center; width: 794.427px; max-width: 100%; flex-direction: column;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fff9b6117-d955-4a2e-a7ea-e7ba0b4b9bf5%2F5f353a6c-076c-4915-9879-619fe909a00b%2FUntitled.png?table=block&amp;id=52f1e54d-c8fd-42b4-a867-2f94a00d2ee8&amp;t=52f1e54d-c8fd-42b4-a867-2f94a00d2ee8" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: block; vertical-align: middle; max-width: 100%; height: auto !important; margin-block: 0px; outline: 0px; border-radius: 0px; cursor: zoom-in; transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1) 0s !important; width: 714.982px; max-height: 100%; margin: auto; object-fit: cover;"></div></figure></div></details>

2、下载go-proxy-bingai的可执行文件，这个是一位大佬根据[原仓库](https://github.com/Harry-zklcdc/go-proxy-bingai)
自行编译的FreeBSD 版本的 go-proxy-bingai

### bash

```bash
# 下载可执行文件
release_info=$(curl -s https://api.github.com/repos/k0baya/go-proxy-bingai-freebsd/releases/latest)
asset_url=$(echo "$release_info" | jq -r '.assets[] | select(.name != "source code") | .browser_download_url')
curl -L -o go-proxy-bingai "$asset_url" && chmod +x go-proxy-bingai
```

Bash

Copy

3、新建启动脚本，被注释的环境变量请根据自己的需求，按照[go-proxy-bingai原仓库](https://github.com/Harry-zklcdc/go-proxy-bingai)
的 wiki 中的介绍进行填入

### bash

```bash
cat > entrypoint.sh << EOF
#!/bin/bash
export BYPASS_SERVER="https://bypass.zklcdc.xyz"  # 原仓库作者本人的公共bypass服务，可用性未知。
# export Go_Proxy_BingAI_USER_TOKEN_1="xxx"
# export Go_Proxy_BingAI_USER_TOKEN_2="xxx"
# export USER_KievRPSSecAuth="xxx"
# export USER_RwBf="xxx"
# export USER_MUID="xxx"
# export APIKEY="sk-xxx"
# export BING_BASE_URL="https://www.bing.com"
# export SYDNEY_BASE_URL="https://sydney.bing.com"
# export HTTP_PROXY="http://172.17.0.1:18080"
# export HTTPS_PROXY="http://172.17.0.1:18080"
# export Go_Proxy_BingAI_AUTH_KEY="xxx"
# 请把下一行双引号中的内容替换成你放行的端口。
export PORT="xxx"
chmod +x go-proxy-bingai && ./go-proxy-bingai
EOF
```

Bash

Copy

<details class="notion-toggle notion-block-7b1a617c18c240cb86d8e1f4eef792ed" open="" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; padding: 3px 2px; margin-block: 0px; outline: 0px; width: 816px; color: rgb(209, 213, 219); font-family: Bitter, &quot;Noto Serif SC&quot;, SimSun, &quot;Times New Roman&quot;, Times, serif, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Apple Color Emoji&quot;, &quot;Noto Serif CJK SC&quot;; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 300; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; caret-color: rgb(0, 0, 0); white-space: normal; background-color: rgb(16, 20, 20); text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: list-item; margin-block: 0px; outline: none; cursor: pointer;">命令执行截图</summary><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; margin-left: 1.1em;"><figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-61c0ec5dfee045459b762b9fc54a0868" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; max-width: 100%; margin-block: 0px; outline: 0px; margin: 0.5rem 0px; min-width: 100%; align-self: center; display: flex; flex-direction: column;"><div style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; margin-block: 0px; outline: 0px; height: 361.064px; position: relative; display: flex; justify-content: center; align-self: center; width: 794.427px; max-width: 100%; flex-direction: column;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fff9b6117-d955-4a2e-a7ea-e7ba0b4b9bf5%2F58f38b5f-ecb0-40ff-97f7-7d2e709a3045%2FUntitled.png?table=block&amp;id=61c0ec5d-fee0-4545-9b76-2b9fc54a0868&amp;t=61c0ec5d-fee0-4545-9b76-2b9fc54a0868" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="box-sizing: border-box; border: 0px solid rgb(229, 231, 235); --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgba(59,130,246,.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; display: block; vertical-align: middle; max-width: 100%; height: auto !important; margin-block: 0px; outline: 0px; border-radius: 0px; cursor: zoom-in; transition: transform 0.3s cubic-bezier(0.2, 0, 0.2, 1) 0s !important; width: 714.982px; max-height: 100%; margin: auto; object-fit: cover;"></div></figure></div></details>

4、给脚本加执行权限，运行

### bash

```bash
# 测试运行
chmod +x entrypoint.sh && ./entrypoint.sh
# 使用 pm2 管理运行
~/.npm-global/bin/pm2 start ./entrypoint.sh --name go-proxy-bingai
```

Bash

Copy

现在就可以用域名访问了，这个还可以做api使用，具体请参考原仓库说明

![notion image](https://bitbucket.org/xlc520/blogasset/raw/main/images3/https%253A%252F%252Fprod-files-secure.s3.us-west-2.amazonaws.com%252Fff9b6117-d955-4a2e-a7ea-e7ba0b4b9bf5%252F0f42d099-b819-461c-8b5d-4cb6c9a073b7%252FUntitled.png)

## ***\*收尾工作\****

听说Serv00会不定时重启机器，所以我们把pm2添加开机自启，可以保证每次重启都能由pm2调动entrypoint.sh启动go-proxy-bingai。而且Serv00每三个月内必须要有一次登录面板或者SSH连接，不然会删号，也可以通过一个脚本解决问题

### ***\*自动启动\****

听说Serv00的主机会不定时重启，所以需要添加自启任务。

在Panel中找到Cron jobs选项卡，使用Add cron job功能添加任务，Specify time选择After reboot，即为重启后运行。Form
type选择Advanced，Command写：

### bash

```bash
/home/你的用户名/.npm-global/bin/pm2 resurrect
```

Bash

Copy

> 记得把你的用户名改为你的用户名

添加完之后，在SSH窗口保存pm2的当前任务列表快照：

### bash

```bash
~/.npm-global/bin/pm2 save
```

Bash

Copy

这样每次 serv00 不定时重启任务时，都能自动调用 pm2 读取保存的任务列表快照，恢复任务列表。**如果在保存了任务列表快照后又改变了任务
pm2 的任务列表，需要重新执行** `**pm2 save**` **以更新任务列表。**

### ***\*自动续期\****

可以使用自身SSH自身的方式进行自动续期，操作如下：

> 进入一个自己喜欢的路径，使用 `cat` 命令新建 `auto-renew.sh` 脚本：
>
> ### bash
>
>
>
> ```bash
> cat > auto-renew.sh << EOF
> #!/bin/bash
> while true; do
> sshpass -p '密码' ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -tt 用户名@地址 "exit" &
> sleep 259200  #30天为259200秒
> done
> EOF
> ```
>
> Bash
>
> Copy
>
> 记得把其中的密码、用户名、ssh的地址修改为你自己的。 给 `auto-renew.sh`添加可执行权限：
>
> ### bash
>
>
>
> ```bash
> chmod +x auto-renew.sh
> ```
>
> Bash
>
> Copy
>
> 使用pm2启动：
>
> ### bash
>
>
>
> ```bash
> ~/.npm-global/bin/pm2 start ./auto-renew.sh
> ```
>
> Bash
>
> Copy
>
> 这样就会每隔一个月自动执行一次SSH连接，自己SSH自己进行续期。不保证一定能行，万一serv00.com改政策了，这个也会失效，所以最好还是定期登录下web界面活跃账号

### 参考

https://blog.rappit.site/2024/01/27/serv00_logs