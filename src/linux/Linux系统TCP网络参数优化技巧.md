---
title: Linux系统TCP网络参数优化技巧
excerpt:
description: Linux系统TCP网络参数优化技巧
date: 2024-10-20
category: Linux
tag: Linux
author: xlc520
article: true
timeline: true
icon: linux
---

```component VPBanner
title: Linux系统TCP网络参数优化技巧
content: Linux系统TCP网络参数优化技巧
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: Linux系统TCP网络参数优化技巧
    link: /linux/Linux系统TCP网络参数优化技巧
```

# Linux系统TCP网络参数优化技巧



## 一**前言**

在Linux系统中，网络参数优化对于提升网络性能和确保稳定通信至关重要。

适当的网络配置可以减少延迟、提高吞吐量，并优化资源利用率。例如，调整TCP窗口大小、队列长度和超时设置等参数，能够更好地适应不同网络环境和应用需求，从而改善用户体验，特别是在高并发和大数据传输场景下。

此外，优化网络参数也有助于预防拥塞，增强网络故障恢复能力，确保服务的可靠性和效率。

Linux网络优化最多的是传输层TCP相关的网络优化。以下为工作中的经常遇到可能会调整Linux网络协议栈参数。

## 二**传输层优化**

### **2.1 优化TCP SYN重传次数**

当我们的服务器作为Client， Client 会给 Server 发送一个 SYN 包，但是该 SYN 包可能会在传输过程中丢失，或者因为其他原因导致 Server 无法处理，此时 Client 这一侧就会触发超时重传机制。

tcp_syn_retries 的默认值是 6，也就是说如果 SYN 一直发送失败，会在（1 + 2 + 4 + 8 + 16+ 32 + 64）秒，即 127 秒后产生 ETIMEOUT 的错误。

\#我们可以通过调小重传次数来减少阻塞时间：

```
net.ipv4.tcp_syn_retries = 2
```

### **2.2 优化半连接队列**（syn queue）

半连接，即收到了 SYN 后还没有回复 SYNACK 的连接，Server 每收到一个新的 SYN 包，都会创建一个半连接，然后把该半连接加入到半连接队列（syn queue）中。

当系统中积压的半连接个数超过了该值后，新的 SYN 包就会被丢弃。对于服务器而言，可能瞬间会有非常多的新建连接，所以我们可以适当地调大该值，以免 SYN 包被丢弃而导致 Client 收不到 SYNACK。系统默认值为128。

```
net.ipv4.tcp_max_syn_backlog = 16384
```

### **2.3 开启SYN Cookies**

在 Server 收到 SYN 包时，不去分配资源来保存 Client 的信息，而是根据这个 SYN 包计算出一个 Cookie 值，然后将 Cookie 记录到 SYNACK 包中发送出去。对于正常的连接，该 Cookies 值会随着 Client 的 ACK 报文被带回来。然后 Server 再根据这个 Cookie 检查这个 ACK 包的合法性，如果合法，才去创建新的 TCP 连接。

SYN Cookies 可以防止部分 SYN Flood 攻击。所以对于 Linux 服务器而言，推荐开启 SYN Cookies。

```
net.ipv4.tcp_syncookies = 1
```

### **2.4 优化TCP SYNACK的重传次数**

当Client向Server端发送SYN报文后，Server会返回给Client SYNACK报文，当Client没有响应Server ACK报文，则Server会进行重传，我们可以减少重传次数。系统默认值为5。

```
net.ipv4.tcp_synack_retries = 2
```

### **2.5 优化全连连队列**（accept queue）

三次握手就完成了，即产生了一个 TCP 全连接（complete），它会被添加到全连接队列（accept queue）中。然后 Server 就会调用 accept() 来完成 TCP 连接的建立。

当服务器中积压的全连接个数超过队列长度后，新的全连接就会被丢弃掉。

全连接队列（accept queue）的长度是由 listen(sockfd, backlog) 这个函数里的 backlog 控制的，而该 backlog 的最大值则是 somaxconn。系统默认值为1024。

```
net.core.somaxconn = 16384
```

### **2.6 全连接溢出是否通知客户端**

当服务器中积压的全连接个数超过该值后，新的全连接就会被丢弃掉。Server 在将新连接丢弃时，有的时候需要发送 reset 来通知 Client，这样 Client 就不会再次重试了。

不过，默认行为是直接丢弃不去通知 Client。至于是否需要给 Client 发送 reset，是由 tcp_abort_on_overflow 这个配置项来控制的，该值默认为 0，即不发送 reset 给 Client。推荐也是将该值配置为 0。



因为Server 如果来不及 accept() 而导致全连接队列满，这往往是由瞬间有大量新建连接请求导致的，正常情况下 Server 很快就能恢复，然后 Client 再次重试后就可以建连成功了。也就是说，将 tcp_abort_on_overflow 配置为 0，给了 Client 一个重试的机会。

```
net.ipv4.tcp_abort_on_overflow = 0
```

### **2.7 优化FIN超时时间**

- 当Client向Server端发送FIN报文后，就会进入FIN_WAIT_1状态。
- 当Server回复客户端ACK报文后，Client就会进入FIN_WAIT_2状态。

TCP 进入到这个状态后，如果本端迟迟收不到对端的 FIN 包，那就会一直处于这个状态，于是就会一直消耗系统资源。Linux 为了防止这种资源的开销，设置了这个状态的超时时间 tcp_fin_timeout，默认为 60s，超过这个时间后就会自动销毁该连接。

对于数据中心内部的机器而言，将它调整为 2s 足以。

```
net.ipv4.tcp_fin_timeout = 2
```


### **2.8 优化TIME_WAIT**

- 当Client向Server端发送FIN报文后，就会进入FIN_WAIT_1状态；
- 当Server回复Client ACK报文后，Client就会进入FIN_WAIT_2状态；
- 当Client收到Server的FIN报文后，会回复Server ACK报文，此时Client进入TIME_WAIT状态。

**TIME_WAIT 状态存在的意义是**：

- 最后发送的这个 ACK 包可能会被丢弃掉或者有延迟，这样对端就会再次发送 FIN 包。如果不维持 TIME_WAIT 这个状态，那么再次收到对端的 FIN 包后，本端就会回一个 Reset 包，这可能会产生一些异常。

所以维持 TIME_WAIT 状态一段时间，可以保障 TCP 连接正常断开。TIME_WAIT 的默认存活时间在 Linux 上是 60s（TCP_TIMEWAIT_LEN），这个时间对于数据中心而言可能还是有些长了，所以有的时候也会修改内核做些优化来减小该值，或者将该值设置为可通过 sysctl 来调节。

在Linux的内核中，TCP/IP协议的TIME-WAIT状态持续60秒且无法修改。Alibaba Cloud Linux 2从内核版本4.19.43-13.al7开始，新增内核接口用于修改TCP TIME-WAIT超时时间。

**配置TIME_WAIT 状态最大个数**。

- 默认值为16384，对于数据中心而言，网络是相对很稳定的，基本不会存在 FIN 包的异常，所以建议将该值调小一些。

```
net.ipv4.tcp_max_tw_buckets = 10000
```

**配置TIME_WAIT 状态端口复用**。

- Client 关闭跟 Server 的连接后，也有可能很快再次跟 Server 之间建立一个新的连接，而由于 TCP 端口最多只有 65536 个，如果不去复用处于 TIME_WAIT 状态的连接，就可能在快速重启应用程序时，出现端口被占用而无法创建新连接的情况。

```
net.ipv4.tcp_tw_reuse = 1
```

**选项 tcp_tw_recycle 来控制 TIME_WAIT 状态**。

- 但是该选项是很危险的，因为它可能会引起意料不到的问题，比如可能会引起 NAT 环境下的丢包问题。因为打开该选项后引起了太多的问题，所以新版本的内核就索性删掉了这个配置选项。默认为关闭。



```
net.ipv4.tcp_tw_recycle = 0
```

### **2.9 优化TCP发送缓冲区**

缓存了要发出去的数据。如果发送缓冲区已满，应用程序的写操作就会被阻塞。

tcp_wmem 中这三个数字的含义分别为 min、default、max。TCP 发送缓冲区的大小会在 min 和 max 之间动态调整，初始的大小是 default，这个动态调整的过程是由内核自动来做的，应用程序无法干预。自动调整的目的，是为了在尽可能少的浪费内存的情况下来满足发包的需要。

默认值为 4096  16384  4194304。

```
net.ipv4.tcp_wmem = 8192 65536 16777216
```

### **2.10 优化套接字发送缓冲区**

tcp_wmem 中的 max 不能超过 net.core.wmem_max（套接字发送缓冲区） 这个配置项的值，如果超过了，TCP 发送缓冲区最大就是 net.core.wmem_max。

默认值为212992。

```
net.core.wmem_max = 16777216
```

### **2.11 优化TCP接收缓冲区**

默认值为4096  87380  6291456。

```
net.ipv4.tcp_rmem = 8192 65536 16777216
```

### **2.12 优化套接字接收缓冲区**

默认值为212992。

```
net.core.wmem_max = 16777216
```

### **2.13 优化TCP内存消耗限制**

tcp_wmem 以及 wmem_max 的大小设置都是针对单个 TCP 连接的，这两个值的单位都是 Byte（字节）。系统中可能会存在非常多的 TCP 连接，如果 TCP 连接太多，就可能导致内存耗尽。因此，所有 TCP 连接消耗的总内存也有限制。

与前两个选项不同的是，该选项中这些值的单位是 Page（页数），也就是 4K。它也有 3 个值：min、pressure、max。当所有 TCP 连接消耗的内存总和达到 max 后，也会因达到限制而无法再往外发包。

默认值为88053  117407  176106。

```
net.ipv4.tcp_mem = 8388608 12582912 16777216
```

### **2.14 优化CPU轮询处理数据包数量**

数据包到达网卡后，就会触发中断（IRQ）来告诉 CPU 读取这个数据包。但是在高性能网络场景下，数据包的数量会非常大，如果每来一个数据包都要产生一个中断，那 CPU 的处理效率就会大打折扣，所以就产生了 NAPI（New API）这种机制让 CPU 一次性地去轮询（poll）多个数据包，以批量处理的方式来提升效率，降低网卡中断带来的性能开销。

该控制选项的默认值是 300，在网络吞吐量较大的场景中，我们可以适当地增大该值，比如增大到 600。增大该值可以一次性地处理更多的数据包。但是这种调整也是有缺陷的，因为这会导致 CPU 在这里 poll 的时间增加，如果系统中运行的任务很多的话，其他任务的调度延迟就会增加。

```
net.core.netdev_budget = 600
```

## 三**网络层优化**

### **3.1 优化本地端口范围**

IP 层这里容易触发问题的地方是 net.ipv4.ip_local_port_range 这个配置选项，它是指和其他服务器建立 IP 连接时本地端口（local port）的范围。我们在生产环境中就遇到过默认的端口范围太小，以致于无法创建新连接的问题。所以通常情况下，我们都会扩大默认的端口范围。

\#默认值为 32768  60999：

```
net.ipv4.ip_local_port_range = 1024 65535
```

### **3.2 优化 txqueuelen队列**

为了能够对 TCP/IP 数据流进行流控，Linux 内核在 IP 层实现了 qdisc（排队规则）。

qdisc 的队列长度是我们用 ifconfig 来看到的 txqueuelen，我们在生产环境中也遇到过因为 txqueuelen 太小导致数据包被丢弃的情况，这类问题可以通过下面这个命令来观察。

```
ip -s -s link ls dev ens33
```

如果观察到 dropped 这一项不为 0，那就有可能是 txqueuelen 太小导致的。当遇到这种情况时，你就需要增大该值了，比如增加 eth0 这个网络接口的 txqueuelen：

```
ip link set eth0 txqueuelen 2000
```

#查看系统 txqueuelen大小。

```
ip a
```




<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
