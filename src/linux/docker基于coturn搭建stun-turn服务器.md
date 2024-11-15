---
title: docker基于coturn搭建stun-turn服务器
excerpt:
description: docker基于coturn搭建stun-turn服务器
date: 2024-10-08
category: Linux
tag: Linux
author: xlc520
article: true
timeline: true
icon: linux
---

```component VPBanner
title: docker基于coturn搭建stun-turn服务器
content: docker基于coturn搭建stun-turn服务器
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: docker基于coturn搭建stun-turn服务器
    link: /linux/docker基于coturn搭建stun-turn服务器
```

# docker基于coturn搭建stun-turn服务器

Nat类型：

| Peer A | Peer B | 是否可以打洞 |
|--------|--------|--------|
| 全锥型    | 全锥型    | 是      |
| 全锥型    | 受限锥型   | 是      |
| 全锥型    | 端口受限锥型 | 是      |
| 全锥型    | 对称型    | 是      |
| 受限锥型   | 受限锥型   | 是      |
| 受限锥型   | 端口受限锥型 | 是      |
| 受限锥型   | 对称型    | 是      |
| 端口受限锥型 | 端口受限锥型 | 是      |
| 端口受限锥型 | 对称型    | 一般不可以  |
| 对称型    | 对称型    | 一般不可以  |

# stun和turn的工作原理

stun和turn的工作原理是怎样的呢？

如果要从纯技术角度想来讲清楚这个问题，就要先讲NAT的工作原理、然后讲NAT的分类(Full Cone NAT、Address Restricted Cone
NAT、Port Restricted Cone NAT、Symmetric NAT)
、然后讲反向连接技术、tcp、udp打洞技术。。。。这样扩展开来讲就太多了，而且我觉得绝大部分朋友也没啥兴趣，并且网上这类文章也很多，所以我不准备这样来讲，就用我自己的话简单总结几句吧，不过从技术细节来讲肯定有不对的地方，毕竟只能算个比喻。

以访问客户端和访问目标是否有公网IP，我们的访问可以分为如下几种类型。
1、访问客户端和访问目标都有公网IP

![image.png](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/202403181533796.png)

这种情况相当于双方都有手机号，要找到对方很容器，不但访问客户端能够直接找到访问目标，反过来，访问目标也能直接找到访问客户端，这就叫双向通讯。
2、访问客户端没有公网IP而访问目标有公网IP

![image.png](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/202403181535590.png)

这种情况下，只是说访问目标不能找到访问客户端了，毕竟只有一个座机的总机号码，但是，访问客户端还是能直接找到访问目标的，这就叫单向通讯，现在绝大部分访问都是这种类型。
3、访问客户端有公网IP而访问目标没有公网IP(但是可以进行打洞)

![image.png](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/202403181539165.png)

这种情况就比较麻烦了，虽然访问客户端有手机号，但是访问目标却只有总机号没有分机号，怎么办？这时候stun闪亮登场：

![image.png](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/202403181600930.png)

这种情况下，stun可以理解为中间人、枪手，他和访问客户端以及访问目标都认识，都能直接联系(
假定stun有双方的手机号，但是访问目标的手机号不能直接告诉访问客户端，这个可以理解，现在很多甲方也不愿意直接给乙方手机号，只留工作电话)
。当访问客户端想要和访问目标通信的时候，第1步、联系stun，询问访问目标的具体分机号；第2步、stun就会直接联系访问目标，询问分机号；第3步、访问目标把分机号告诉stun；第4步、stun把访问目标分机号告诉访问客户端；第5步、访问客户端用总机号+分机号直接联系到了访问目标。
注1：这种方式的前提是访问目标有分机号并且能告诉其他人分机号(保密单位就不能外泄分机号)，用技术话语就是nat类型支持打洞，至少不是Symmetric
NAT。
注2：假设直接把访问客户端的手机号告诉访问目标，让访问目标直接用单位座机给访问客户端打电话，这种就叫反向连接，不过，这并不是stun的操作。
注3：这种方式stun只是负责牵线搭桥，后续访问客户端和访问目标之间的交流细节不管，用技术话语说，就是后续访问流量与stun无关了，比如看电影、传送大文件，都是访问客户端和访问目标点对点了，速度取决于访问目标的上行带宽。
注4：这其实就是网上所谓的大带宽无限流量的内网穿透的实现方式。
4、访问客户端和访问目标都没有公网IP且无法打洞

可以理解为访问目标所在单位为保密单位，不能外泄分机号，而访问客户端也没有手机，也是总机号，相互都无法访问，这种情况咋办呢？turn终于闪亮登场：

![image.png](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/202403181619793.png)

这种情况下，可以理解成为因为访问客户端和访问目标无法直接联系，所以turn说：我是传声筒，你们都信任我的话，所以交流都由我来转达，哪怕是送礼(
大容量文件)，也交给我来传递。

和stun比起来，turn算是最后的手段了，优点就是建立连接肯定没问题，缺点是速度这些就受限于turn服务器的上下行带宽了，所以通常都是先使用stun，不行再用turn。

其实，tailscale的derp中继服务器，也有使用stun协议，只不过除了stun以外还有其他更多的技术，所以实际体验上tailscale要好得多。

注1：搭建stun和turn都需要部署主机有公网IP地址，还需要访问端和访问目标与部署主机udp可达。

注2：大家可以自行下载一个win下的nat类型测试工具，可以测试自家环境的nat类型：下载链接如下：https://github.com/HMBSbige/NatTypeTester/releases。
选择RFC 5780：

![image.png](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/202403291404132.png)

![image.png](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/202403291411999.png)

# 部署coturn

注：部署coturn也有很多种方式，我选择了docker的方式，毕竟部署最简单，但是这未必是性能最好的方式，大家可以根据自己实际环境选择最适合自己的部署方式。

## 部署的主机有IPv4公网地址

我的腾讯云的轻量服务器是有固定公网IPv4地址的(
不过好像现在一些云主机也不一定直接给固定公网IPv4地址了，而且，云主机所谓的固定公网IP其实就是一一映射而已，服务器本身还是私有地址)
，家庭宽带是动态公网IPv4地址(通过路由器的端口映射功能指向内网主机)，为了在不同的场景下都能获取`external-ip`和`relay-ip`
这2个coturn需要的参数，推荐使用coturn自动检测的方式。
需要搭建docker的命令如下：

```
docker run --name coturn -d --restart=always \
   -e DETECT_EXTERNAL_IP=yes \ #自动检测external-ip
   -e DETECT_RELAY_IP=yes \ #自动检测relay-ip
   -e user=guest:guest \ #这是turn用于认证的用户名和密码，这里都为guest，因为turn是需要干重活的，stun就动动嘴皮子，所以没必要认证。
   -e realm=stun.example.com \ #填写公网IPv4地址对应的域名(也可以是动态域名)
   -p 3478:3478/tcp -p 3478:3478/udp \ # 指定stun和turn的监听端口，默认3478，也可以改成其他的，这个到无所谓，因为stun的客户端在填写服务器端地址时能够指定端口号，我就没用默认端口
   -p 5349:5349/tcp -p 5349:5349/udp \ #stun和turn的tls监听端口，实际上tls会话也能连接3478端口，同时保持3478和5349是为了满足RFC 5766规范，这个端口不映射貌似也可以
   -p 49160-49170:49160-49170/udp \ #这些端口是用来在turn模式下交换媒体数据的，端口范围自行指定即可，一般没啥大需要范围填小点
   coturn/coturn --min-port=49160 --max-port=49170 #指定最小到最大的端口范围
```

注1：其实官方推荐直接使用`--net=host`参数，既主机模式部署，因为当docker使用`-p`
参数映射大范围端口时，可能会消耗大量的性能，我是因为已经主动缩小了端口范围：49160-49170，同时本来就只是实验性质，并没有打算真正用起来(
我有tailscale，才瞧不上这个。。)，而且，host模式就必须要使用3478端口，而我的3478端口被tailscale的derp中继服务器占用了，所以才使用了-p模式，大家实际使用的时候，根据自己喜好来就是。

注2：如果有防火墙等安全设备，记得访问规则需要开放对应的端口，同时如果是NAT之后，记得做好端口映射。

## 部署的主机有IPv6公网地址

部署主机有IPv6公网地址也可以，coturn支持IPv6，`DETECT_EXTERNAL_IP=yes`
既能检测IPv4，也能检测IPv6地址，所以上节的命令都不用动，一个关键问题反而应该是stun.example.com这个域名的AAAA解析，需要动态解析到部署主机对应的IPv6地址，同时stun客户端也要有IPv6地址且使用stun.example.com域名作为stun服务器的连接地址且还能正确收到域名对应的AAAA记录解析，有这样要求是因为有些DNS服务器或者DNS代理可以禁用AAAA记录的解析，如爱快：

![image.png](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/202403181427482.png)

# 测试

## 科学全面的测试方式

部署完成之后，可以使用以下链接进行测试：[测试链接](https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/)。
测试界面如下：

![image.png](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/202403172355449.png)

### 使用腾讯云轻量服务器做stun服务器进行测试

下图是我用腾讯云服务器搭建并测试的结果(固定IPv4公网地址)：

![image.png](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/202403172335808.png)

### 使用家庭宽带的设备做stun服务器进行

下图是我用家里的设备搭建并测试的结果：
1、同时对访问域名启用IPv4和IPv6解析：

![image.png](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/202403182307134.png)

好家伙，测出一大堆节点，这个跟我家里环境比较复杂有关系，ipv4，ipv6，tailscale虚拟地址等等，而且我的测试stun客户端和我stun服务器实际在一个内网(
利用了爱快的端口回流功能，其实就是hairpin)
，关键我的stun服务器的访问域名又是同时支持A记录和AAAA记录解析的，所以这节点我都看不懂了。。。不过不重要，结果就是通过，关键还在于：有2个srfix和2个relay，这说明如果同时有IPv4和IPv6两种解析，并且stun客户端也同时支持IPv4和IPv6双栈环境，是可以同时检测出来的。
2、只对访问域名启用IPv4解析：

![image.png](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/202403180919032.png)

这就正常了很多了。
3、只对访问域名启用IPv6解析：

![image.png](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/202403180949381.png)

注意：因为我是采用的在同一个内网部署stun服务器和stun客户端(且还有IPv4地址)
这种极不标准的环境来模拟IPv6环境，所以测试结果奇奇怪怪的，不过不重要，只要证明访问域名解析只有IPv6的地址stun也能工作就行。

## 使用stun客户端的测试方式

如果已经有现成的stun客户端，直接就可以测试使用效果了，以lucky自带的stun客户端为例：

![image.png](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/202403181016750.png)

![image.png](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/202403181017611.png)

![image.png](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/202403181030866.png)

等待一会之后，STUN穿透公网地址处，出现红框中的地址和端口，即为成功：

![image.png](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/202403181033072.png)

使用得到的公网地址和端口进行访问：

![image.png](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/202403181037425.png)

# 总结

其实到这里，stun服务器的搭建以及配合stun客户端的使用试验已经完成了，但是可以看出，这种其实是没有什么实用价值的，为什么呢？

![image.png](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/202403182228392.png)

因为上图红框中"STUN穿透公网地址"
对应的公网IP和端口都是变化的，这样咋玩？所以真想要实用，还差一步，就是把红框中变化的公网IP和端口转换成一个不变的域名，就像我们通常使用的动态域名一样。但是这种特殊的"
动态域名"需要通过你使用的域名供应商的api接口以及你的账号在域名供应商控制台的至少2个变量(
域名id、记录id或者是区域id、规则id之类)
，然后通过一系列操作来实现，我看了下，每个域名供应商的配置方式都不一样，没啥共性，写一个意义也不太大(
主要我也懒得搞了，本来就只是个科研题课，加上stun其实本质上适合作为底层技术来使用，例如synctihg就是依靠stun来实现，所以就打住了，就这样把，希望这篇文章对需要stun的朋友有所帮助。

[参考](https://blog.tangwudi.com/technology/docker11822/)


<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
