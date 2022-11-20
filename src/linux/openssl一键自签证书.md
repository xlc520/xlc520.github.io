---
# 这是页面的图标
icon: page
# 这是文章的标题
title: Openssl一键自签证书
# 设置作者
author: xlc520
# 设置写作时间
date: 2022-01-10
# 一个页面只能有一个分类
category: linux
# 一个页面可以有多个标签
tag:
  - Openssl
# 设置当前文章是否在列表中置顶，此页面会在文章列表指定
sticky: false
# 设置当前文章是否收藏在博客主题的文章列表中。当填入数字时，数字越大，排名越靠前。
star: true
# 你可以自定义页脚
# footer: 这是测试显示的页脚
---
# Openssl一键自签证书

`vim openssl.sh`

```shell
#!/bin/bash
while [[ -z "$domain" ]];do
    read -p "输入域名/IP(必填,如 *.haoduck.com): " domain
done
read -p "输入邮箱(选填,默认admin@haoduck.com): " mail
[[ -z "$mail" ]] && mail=admin@haoduck.com
read -p "输入日期(选填,默认3650): " day
[[ -z "$day" ]] && day=3650
dir=$domain && mkdir -p $dir
crt_file="$dir/${domain}.crt"
key_file="$dir/${domain}.key"
if [[ "$(command -v openssl)" ]];then
    openssl req -x509 -nodes -newkey rsa:2048 -days $day -keyout $key_file -out $crt_file -subj "/C=US/ST=California/L=Los Angeles/O=Haoduck/OU=Aoao/CN=${domain}/emailAddress=${mail}"
    echo -e "\t证书：$(pwd)/$crt_file\n\t私钥：$(pwd)/$key_file"
else
    echo "openssl 未安装"
fi
```



`bash openssl.sh`