---
author: xlc520
title: openresty一键安装部署脚本
excerpt: 
description:
date: 2023-04-10
category: Linux
tag: 
- Linux
- openresty
article: true
timeline: true
icon: linux
---

# openresty 一键安装部署脚本

**openresty 的一些核心简介：**

openresty 是一个成熟的网络平台，它集成了标准的 Nginx 核心，LuaJIT，许多精心编写的 Lua 库，许多高质量的第三方 Nginx
模块以及大多数外部依赖项。

- 网站：http：//openresty.org/
- Github 组织：https：//github.com/openresty
- 首席开发人员：@agentzh
- 国内最可利用的文档：
- <http://wiki.jikexueyuan.com/project/openresty/>

**一键安装部署脚本如下：**

```sh
#!/bin/bash
# 第一个参数为 OpenResty 的版本号VERSION=$1OPENRESTY_FILE="openresty-${VERSION}.tar.gz"OPENRESTY_URL="https://openresty.org/download/${OPENRESTY_FILE}"OPENRESTY_MD5_URL="${OPENRESTY_URL}.md5"INSTALL_DIR="/data/openresty"
# 检查 OpenResty 文件是否存在if [ ! -f "$OPENRESTY_FILE" ]; then  echo "正在下载 ${OPENRESTY_URL}..."  wget "$OPENRESTY_URL"
  # 检查下载是否成功  if [ "$?" -ne 0 ]; then    echo "下载 ${OPENRESTY_URL} 失败"    exit 1  fifi
# 检查 OpenResty 文件的 MD5echo "正在获取 ${OPENRESTY_FILE} 的 MD5 值..."wget "$OPENRESTY_MD5_URL"
# 检查获取 MD5 文件是否成功if [ "$?" -ne 0 ]; then  echo "获取 ${OPENRESTY_MD5_URL} 失败"  exit 1fi
# 提取 MD5 值并检查是否匹配EXPECTED_MD5=$(cat "${OPENRESTY_FILE}.md5" | awk '{ print $1 }')ACTUAL_MD5=$(md5sum "$OPENRESTY_FILE" | awk '{ print $1 }')if [ "$EXPECTED_MD5" != "$ACTUAL_MD5" ]; then  echo "下载的 ${OPENRESTY_FILE} 文件的 MD5 值不匹配"  exit 1fi
# 安装依赖yum install -y gcc make pcre-devel openssl-devel
# 解压并编译安装 OpenRestytar -xzvf "$OPENRESTY_FILE"cd "openresty-$VERSION"./configure --prefix="$INSTALL_DIR"makemake install
# 检查安装是否成功if [ "$?" -ne 0 ]; then  echo "OpenResty $VERSION 安装失败"  exit 1fi
# 添加 OpenResty 到环境变量echo 'export PATH=$PATH:'"$INSTALL_DIR/bin"'/' >> /etc/profilesource /etc/profile
# 创建 OpenResty 服务文件echo "正在创建 OpenResty 服务文件..."cat <<EOF > /etc/systemd/system/openresty.service[Unit]Description=OpenResty HTTP ServerAfter=network.target
[Service]Type=forkingPIDFile=/run/openresty.pidExecStart=$INSTALL_DIR/nginx/sbin/nginx -c $INSTALL_DIR/nginx/conf/nginx.confExecReload=/bin/kill -s HUP \$MAINPIDExecStop=/bin/kill -s QUIT \$MAINPIDPrivateTmp=true
[Install]WantedBy=multi-user.targetEOF
# 启动 OpenResty 服务systemctl daemon-reloadsystemctl enable openrestysystemctl start openresty
echo "OpenResty $VERSION 已安装到 $INSTALL_DIR，并已启动 OpenResty 服务"
```

可以使用执行脚本后带版本号执行安装相应版本的 openresty

```sh
sh install_openresty.sh 1.19.3.1
```
