---
author: xlc520
title: 自动封禁IP脚本
excerpt: 
description: 
date: 2023-01-01
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
---

# 自动封禁 IP 脚本

1.在 ngnix 的 conf 目录下创建一个`blockip.conf`文件

2.里面放需要封禁的 IP，格式如下

```plain
deny 1.2.3.4;
```

3.在 ngnix 的 HTTP 的配置中添加如下内容

```plain
include blockips.conf;
```

4.重启 ngnix

```plain
/usr/local/nginx/sbin/nginx -s reload
```

5.然后你就会看到 IP 被封禁了，你会喜提 403

## 操作步骤

**操作一：** AWK 统计`access.log`，记录每分钟访问超过 60 次的 ip

```plain
awk '{print $1}' access.log | sort | uniq -cd | awk '{if($1>60)print $0}'
```

1. `awk '{print $1}' access.log`  取出 access.log 的第一列即为 ip。
2. `sort | uniq -cd` 去重和排序
3. `awk '{if($1>60)print $0}'`判断重复的数量是否超过 60 个，超过 60 个就展示出来

**操作二：** 编写 shell 脚本，实现整体功能（写了注释代码）

`vi /usr/local/nginx/logs/block_ip.sh`

```shell
#echo "" > /root/nginxWebUI/conf.d/blockip.conf

ip_list=$(awk '{print $1}' access.log | sort | uniq -cd | awk '{if($1>1)print $2}')
#判断这个变量是否为空
if test -z "$ip_list"
then
 # 当前时间
 current_create_time=`date +"%Y-%m-%d %H:%M:%S"`
    #为空写入 empty.log中，并重新启动ngnix
    echo "$current_create_time 为空"  >> empty.log
    /usr/sbin/nginx -s reload
else
    echo "deny$ip_list">temp_ip.txt
    sed -i 's/deny//' temp_ip.txt
    sed -i 's/^/deny /g' temp_ip.txt
    sed -i 's/$/;/g' temp_ip.txt
    #如果不为空 前面加上 deny格式和ip写入blockip.conf中
    cat temp_ip.txt>>/root/nginxWebUI/conf.d/blockip.conf
    #重启ngnix
    /usr/sbin/nginx -s reload
    #清空之前的日志，从最新的开始截取
    echo "" > /root/nginxWebUI/logs/access.log
fi
```

**操作三：** 使用 crontab 定时，来实现访问每分钟超过 60 的

直接实操吧：

```shell
crontab -e 

10 6 * * * sh /root/nginxWebUI/logs/block_ip.sh

systemctl restart crond.service 重启一下配置既可
```
