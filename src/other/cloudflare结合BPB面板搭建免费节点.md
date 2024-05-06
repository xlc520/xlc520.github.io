---
title: cloudflare结合BPB面板搭建免费节点
excerpt: cloudflare结合BPB面板搭建免费节点
description: cloudflare结合BPB面板搭建免费节点
date: 2024-05-16
category: other
tag: other
author: xlc520
article: true
timeline: true
icon: others
---

# cloudflare结合BPB面板搭建免费节点

## 如何搭建BPB panel

- 首先将项目fork到你的github账号下 [https://github.com/Sunnnner/BPB-Worker-Panel](https://github.com/Sunnnner/BPB-Worker-Panel)
- 然后注册登录cloudflare账号, 按照以下图示操作

![image](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/d5d621680daafe37f1123b72b10484e4a0c67c3e_2_690x356.png)

![image-1](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/8f55263045f4108088bdf162403a22ea7c65b4ec_2_525x500.png)

![image-2](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/74e3a7895a229ea8e4fd135454d2942e45250459_2_575x500.png)

![image-3](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/a2329e8b6c1ff01f5c654393cf480a0312d6def7_2_598x500.png)

![image-4](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/335aab33ffb5ae1a60f5e4fb4d9b68bf1009a889_2_690x388.png)

- 部署成功后构建kv空间, 按照以下图示操作，名称随意

![image-5](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/61224043eaa5a43a9df204486010eb9d3947d1aa_2_690x334.png)

![image-6](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/183b350247400548a1cb70c96b58a34bdd8e23ad_2_690x394.png)

- kv空间构建成功后返回概述页面，打开设置，点击函数，将kv空间进行绑定，注意变量名称一定是`bpb`，别的不起作用，然后点击保存后返回到部署页面，点击重新部署

![image-7](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/968b1a4941d2fe5c1f9fefe861442379e9950802_2_690x387.png)

![image-8](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/0b7b005a01e8d017d27f41b3214fe15b266ae129_2_690x255.png)

![image-9](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/1ea3a1116b64672c173ace3d5fa39b3361f1ad7c_2_690x363.png)

- 点击查看详细信息

- 点击链接登录到你的panel，panel页面的地址为在你的.dev结尾的域名上添加`/panel`，示例`https://xxxxx.pages.dev/panel`

![image-12](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/eda459c8697ded632a77b2f583d5b8af3217362e_2_690x177.png)

- 登录密码为admin，登录成功后点击`scan now`扫描ip地址，地址为 [https://scanner.github1.cloud/](https://scanner.github1.cloud/) 或者 [https://cloudflare-scanner.vercel.app/]( https://cloudflare-scanner.vercel.app/ ) 哪个能用用哪个

![image-13](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/9168011a140d18df17c2129276a2a1a424eb3c69_2_690x185.png)

![image-14](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/ba65ece4da2164be4affaab0af35df5cfc766186_2_690x453.png)

- 复制一个ip，添加到你的panel的clean ips中,然后点击block ads,然后点击apply settings

![image-15](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/37860887a5b2f4efb27ddd914641527c0a0279d4_2_690x240.png)

现在你可以愉快的使用了
