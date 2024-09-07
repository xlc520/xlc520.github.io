---
title: Linux内核和网络参数调优配置
excerpt:
description: Linux内核和网络参数调优配置
date: 2024-08-20
category: Linux
tag: Linux
author: xlc520
article: true
timeline: true
icon: linux
---

```component VPBanner
title: Linux内核和网络参数调优配置
content: Linux内核和网络参数调优配置
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: Linux内核和网络参数调优配置
    link: /linux/Linux内核和网络参数调优配置
```

# Linux内核和网络参数调优配置

如何调整Linux系统的内核和网络参数以优化性能、提高稳定性和响应速度。我们将讨论如何调整文件系统、内存管理和调度程序等内核参数，以及TCP/IP和UDP参数等网络参数。通过本文，您将了解如何根据您的系统需求和使用情况来配置这些参数，从而获得更好的性能、稳定性和响应速度。

# 修改参数指南

1. 编辑一个包含需要修改的内核参数的配置文件，比如 `/etc/sysctl.d/my-sysctl.conf`。

2. 在该文件中添加需要修改的内核参数及其值，格式为 `key=value`，每个参数占一行。例如：

   ```
   kernel.sysrq = 1
   vm.max_map_count = 262144
   kernel.pid_max = 4194303
   fs.file-max = 6553560
   net.ipv4.neigh.default.gc_stale_time = 120
   net.ipv4.conf.all.rp_filter = 0
   net.ipv4.conf.default.rp_filter = 0
   net.ipv4.conf.default.arp_announce = 2
   net.ipv4.tcp_max_tw_buckets = 5000
   net.ipv4.tcp_syncookies = 1
   net.ipv4.tcp_fin_timeout = 10
   net.ipv4.tcp_keepalive_time = 150
   net.ipv4.tcp_synack_retries = 2
   net.ipv4.tcp_tw_reuse = 0
   net.ipv4.tcp_tw_recycle = 0
   net.ipv4.tcp_max_tw_buckets = 20000
   net.ipv4.tcp_max_syn_backlog = 8096
   net.ipv4.ip_local_port_range = 1024 65000
   net.ipv6.conf.all.disable_ipv6 = 1
   net.ipv6.conf.default.disable_ipv6 = 1
   kernel.msgmnb = 65536
   kernel.msgmax = 65536
   net.core.wmem_default = 8388608
   net.core.rmem_default = 8388608
   net.core.rmem_max = 16777216
   net.core.wmem_max = 16777216
   net.core.somaxconn = 40960
   vm.swappiness = 0
   ```

   > 以上是国内腾讯云、阿里云常用配置（配置：16C64G），可供参考，各参数作用可看下面详细介绍。

3. 运行 `sysctl --system` 命令使修改生效，或者运行 `sysctl -p /etc/sysctl.d/my-sysctl.conf` 命令只让该文件中的参数生效。

# 查看系统参数

如果需要查看内核参数的当前值，可以使用 `sysctl <key>` 命令查看。例如，运行 `sysctl vm.swappiness` 可以查看当前的 `vm.swappiness` 参数的值。

# 参数介绍

## kernel.sysrq

`kernel.sysrq` 是一个Linux内核参数，它控制了是否启用 SysRq 键（也称为 Magic SysRq 键）。SysRq 键是一种特殊的键，可以用于发送一些低级的系统命令，以帮助诊断和修复系统问题。

在大多数Linux发行版中，默认情况下，SysRq 键是启用的。但是，可以通过修改 `kernel.sysrq` 参数的值来控制它是否启用。该参数的值可以是0、1或2。具体含义如下：

- 0：禁用 SysRq 键。
- 1：启用 SysRq 键，但限制为安全模式，只允许一些关键的操作，例如重新启动系统、同步磁盘、强制解锁死锁进程等。
- 2：启用 SysRq 键，并允许所有操作，包括不安全的操作，例如强制重新启动系统。

> 在生产环境中，为了确保系统安全，最好将其设置为1，以限制对系统的影响。

eg：

```
kernel.sysrq = 1
```

## vm.max_map_count

`vm.max_map_count` 是一个Linux内核参数，它控制了一个进程可以拥有的最大虚拟内存区域数量。这个参数在一些应用程序中特别重要，例如 Elasticsearch、Logstash、Kibana 等，这些应用程序需要大量的虚拟内存区域。

默认情况下，`vm.max_map_count` 的值比较小，通常为65530。如果应用程序需要更多的虚拟内存区域，可以通过修改该参数来增加这个限制。

> 修改 `vm.max_map_count` 的值可能会对系统性能产生影响，因此请谨慎设置。通常，建议在必要时才修改该值，而不要将其设置得过高，设置得过高，可能会导致系统的内存消耗增加，这可能会降低系统的整体性能。另外，如果应用程序不需要大量的虚拟内存区域，将该参数设置得过高可能会导致内存浪费，另一方面，设置得太低，应用程序可能无法正常工作，因为它们需要更多的虚拟内存区域来完成其工作。

eg:

```
vm.max_map_count=262144
```

## kernel.pid_max

`kernel.pid_max` 是一个Linux内核参数，它控制了系统中可以同时存在的进程数量的上限。进程ID是一个非负整数，用于唯一标识系统中的每个进程。在Linux系统中，进程ID是有限的，并且默认情况下，其最大值由 `kernel.pid_max` 参数控制。

默认情况下，`kernel.pid_max` 的值通常为32768。如果系统中需要同时运行更多的进程，可以通过修改该参数来增加它的限制。

> 修改 `kernel.pid_max` 的值可能会对系统性能产生影响，因为这个参数会影响内核进程子系统。如果将该值设置得太高，可能会导致系统的内存消耗增加，这可能会降低系统的整体性能。另外，如果系统不需要同时运行大量的进程，将该参数设置得过高可能会导致内存浪费。

eg:

```
kernel.pid_max=4194303
```

## fs.file-max

`fs.file-max` 是一个Linux内核参数，它控制了系统中打开文件描述符的数量上限。文件描述符是一个非负整数，用于唯一标识打开的文件、套接字和其他I/O资源。在Linux系统中，文件描述符是有限的，并且默认情况下，其最大值由 `fs.file-max` 参数控制。

默认情况下，`fs.file-max` 的值通常为65535。如果系统中需要同时打开更多的文件描述符，可以通过修改该参数来增加它的限制。

> 修改 `fs.file-max` 的值可能会对系统性能产生影响，因为这个参数会影响内核文件子系统。如果将该值设置得太高，可能会导致系统的内存消耗增加，这可能会降低系统的整体性能。另外，如果系统不需要同时打开大量的文件描述符，将该参数设置得过高可能会导致内存浪费。

eg:

```
fs.file-max = 6553560
```

## net.ipv4.neigh.default.gc_stale_time

`net.ipv4.neigh.default.gc_stale_time` 是一个Linux内核参数，它控制了系统中ARP缓存项（即邻居缓存项）过期的时间。ARP缓存是一种用于在网络中查找主机MAC地址的缓存机制，而邻居缓存则是IPv6中类似于ARP缓存的机制。

默认情况下，`net.ipv4.neigh.default.gc_stale_time` 的值通常为30秒，这意味着缓存项在30秒后过期。网络环境中，如果ARP缓存的更新速度很慢，可以通过增加 `net.ipv4.neigh.default.gc_stale_time` 的值来延长缓存项的过期时间，以减少ARP缓存的更新频率。

> 修改 `net.ipv4.neigh.default.gc_stale_time` 的值可能会对系统性能产生影响，因为这个参数会影响网络子系统。如果将该值设置得太高，可能会导致ARP缓存过期过慢，从而导致网络通信中断或延迟。另外，网络环境中，如果ARP缓存的更新速度较快，将该参数设置得过高可能会导致缓存项不再有效，从而产生不必要的网络流量。

eg:

```
net.ipv4.neigh.default.gc_stale_time = 120
```

## net.ipv4.conf.xxx.rp_filter

`net.ipv4.conf.xxx.rp_filter` 是一个Linux内核参数，其中 `xxx` 表示网络接口的名称，例如 `eth0`。该参数控制了Linux内核如何过滤和处理接收到的IP数据包。

默认情况下，`net.ipv4.conf.xxx.rp_filter` 的值通常为0，表示禁用反向路径过滤（Reverse Path Filtering，简称RP Filtering）。RP Filtering是一种用于防止IP欺骗攻击的安全机制，它基于数据包来自网络的正向路径（Forward Path）应该与返回路径（Return Path）相同的假设。当RP Filtering开启时，内核会检查接收到的IP数据包的源地址是否合法，即该数据包是否通过了正向路径。

如果网络环境中存在多个网络接口或存在多个网络路径，启用RP Filtering可以增强网络的安全性。要启用RP Filtering，可以将 `net.ipv4.conf.xxx.rp_filter` 的值设置为1或2，分别表示开启严格模式和松散模式。在严格模式下，内核会检查每个接口的所有数据包，而在松散模式下，内核仅检查与数据包相关的接口。

> 在启用RP Filtering之前，需要对网络环境进行仔细的分析，以确保该功能不会影响网络的正常运行。在某些情况下，启用RP Filtering可能会导致网络通信中断或延迟，因为该功能会增加内核的处理负担。因此，在启用RP Filtering之前，请谨慎选择适当的模式，并对其进行测试，以确保系统能够正常工作，并且网络通信的性能不会受到影响。

eg:

```
net.ipv4.conf.all.rp_filter = 0
net.ipv4.conf.default.rp_filter = 0
```

## net.ipv4.conf.xxx.arp_announce

`net.ipv4.conf.xxx.arp_announce` 是一个Linux内核参数，其中 `xxx` 表示网络接口的名称，例如 `eth0`。该参数控制了Linux内核如何响应ARP请求。ARP（Address Resolution Protocol）是一种用于在网络中解析MAC地址与IP地址之间映射的协议。

默认情况下，`net.ipv4.conf.xxx.arp_announce` 的值通常为0，表示使用内核默认的ARP响应行为。但是，在某些情况下，可能需要修改此参数，以便在多网卡或多IP地址环境下更好地控制ARP响应行为。

具体而言，`net.ipv4.conf.xxx.arp_announce` 可以设置为以下三个值：

- `0`：使用内核默认的ARP响应行为。这意味着内核将根据ARP请求接收到的接口和IP地址，选择一个适当的MAC地址进行响应。
- `1`：始终使用网络接口上的IP地址作为源地址发送ARP响应。这可以防止ARP缓存污染和欺骗攻击，因为内核将始终使用正确的IP地址响应ARP请求。这在多网卡环境下特别有用。
- `2`：始终使用配置的主机IP地址作为源地址发送ARP响应。这可以防止ARP缓存污染和欺骗攻击，因为内核将始终使用正确的IP地址响应ARP请求。这在具有多个IP地址的主机上特别有用。

> 在修改ARP响应行为之前，需要对网络环境进行仔细的分析，以确保该功能不会影响网络的正常运行。在某些情况下，修改ARP响应行为可能会导致网络通信中断或延迟，因此请谨慎选择适当的行为，并对其进行测试，以确保系统能够正常工作，并且网络通信的性能不会受到影响。

eg:

```
net.ipv4.conf.default.arp_announce = 2
net.ipv4.conf.lo.arp_announce = 2
net.ipv4.conf.all.arp_announce = 2
```

## net.ipv4.tcp_max_tw_buckets

`net.ipv4.tcp_max_tw_buckets` 是一个用于控制TCP TIME-WAIT套接字的内核参数。TIME-WAIT是一个TCP状态，当一个TCP连接被关闭时，套接字将进入TIME-WAIT状态，并且在一段时间内保持打开状态。在此期间，该套接字将无法被重新使用。

在Linux内核中，TIME-WAIT套接字被存储在一个特殊的数据结构中，称为TIME-WAIT套接字哈希表。该哈希表用于存储所有处于TIME-WAIT状态的套接字。`net.ipv4.tcp_max_tw_buckets` 决定了该哈希表的最大大小。当哈希表达到最大大小时，新的TIME-WAIT套接字将被拒绝，从而保护系统免受TCP SYN洪水攻击。

默认情况下，`net.ipv4.tcp_max_tw_buckets` 的值通常为`180000`。这意味着在Linux内核中最多可以有180000个TIME-WAIT套接字。如果在任何给定时间内需要存储更多的TIME-WAIT套接字，则新的连接将被拒绝，并出现错误消息。

在高流量的Web服务器上，可能需要增加 `net.ipv4.tcp_max_tw_buckets` 的值，以便容纳更多的TIME-WAIT套接字。

建议将该值设置为服务器RAM的1%到2%。

> 增加 `net.ipv4.tcp_max_tw_buckets` 的值可能会增加内存使用量，因为每个TIME-WAIT套接字都需要一些内存来存储相关的状态信息。

统计TCP连接数：`netstat -anp |grep tcp |wc -l`

eg:

```
net.ipv4.tcp_max_tw_buckets = 5000
```

## net.ipv4.tcp_syncookies

`net.ipv4.tcp_syncookies` 是一个用于控制TCP SYN cookies功能的内核参数。TCP SYN cookies是一种TCP SYN攻击防护机制，它可以帮助系统在遭受SYN攻击时保持可用性。

在正常的TCP连接过程中，客户端首先向服务器发送一个SYN数据包。服务器将回复一个SYN/ACK数据包，然后客户端将回复一个ACK数据包，从而建立连接。然而，在SYN攻击中，攻击者会发送大量虚假的SYN数据包，导致服务器被迫等待连接完成，从而导致服务器负载增加并降低系统性能。

TCP SYN cookies可以帮助系统在遭受SYN攻击时保持可用性。当 `net.ipv4.tcp_syncookies` 开启时，系统将使用一种算法来合成一个特殊的TCP SYN/ACK数据包，该数据包包含有关连接的所有信息。该数据包的序列号和确认号会被设为一个随机数，并将该数据包发送回客户端。如果客户端是合法的，则它将返回ACK数据包，从而建立连接。否则，客户端将忽略该数据包，并且服务器不会被占用。因此，TCP SYN cookies可以帮助系统抵御SYN攻击。

默认情况下，`net.ipv4.tcp_syncookies` 的值通常为 `0`，表示TCP SYN cookies功能被禁用。

> 启用TCP SYN cookies功能可能会增加CPU负载，因为服务器需要对每个新连接计算一个SYN cookies。

eg:

```
net.ipv4.tcp_syncookies = 1
```

## net.ipv4.tcp_fin_timeout

`net.ipv4.tcp_fin_timeout` 是一个用于控制TCP连接FIN状态的超时时间的内核参数。当一方向另一方发送FIN数据包表示关闭连接时，TCP连接会进入FIN_WAIT_1状态。在这种状态下，如果收到对方的ACK确认数据包，那么连接将进入FIN_WAIT_2状态。在FIN_WAIT_2状态下，如果收到对方发送的FIN数据包，那么连接将进入TIME_WAIT状态。在TIME_WAIT状态下，连接将等待一段时间以确保所有的数据包都已经被正确传输，并且防止“孤儿连接”出现。

`net.ipv4.tcp_fin_timeout` 内核参数决定了TCP连接在TIME_WAIT状态下等待的时间。在等待时间内，如果有数据包到达，连接会被重置并重新开始计时。该参数的默认值是60秒。如果连接的请求频繁，可以适当缩短该值。如果该值设置过短，可能会导致连接被过早关闭，数据包丢失。

在TCP/IP协议栈中，存在半连接的概念，FIN_WAIT2状态不算超时，如果Client不关闭，FIN_WAIT2状态将保持到系统重启，越来越多的FIN_WAIT2状态会致使内核Crash。

> 如果系统中有大量处于TIME_WAIT状态的连接，则可能会占用大量内存。因此，建议调小net.ipv4.tcp_fin_timeout参数的值，以便加快系统关闭处于FIN_WAIT2状态的TCP连接。

eg:

```
net.ipv4.tcp_fin_timeout = 30
```

## net.ipv4.tcp_synack_retries

`net.ipv4.tcp_synack_retries` 是一个用于控制TCP连接建立时 SYN+ACK 数据包的重试次数的内核参数。当客户端向服务器发送 SYN 数据包建立连接时，服务器将发送一个 SYN+ACK 数据包作为响应。如果客户端没有收到服务器的响应，那么它将再次发送 SYN 数据包。该参数指定了服务器在没有收到客户端的 ACK 数据包的情况下，重试发送 SYN+ACK 数据包的次数。

默认情况下，`net.ipv4.tcp_synack_retries` 的值为5次。如果在这5次重试中服务器没有收到客户端的 ACK 数据包，那么连接将被视为失败。

> 如果重试次数过高，可能会导致服务器资源浪费。另外，如果服务器受到攻击，攻击者可能会发送大量的 SYN 数据包来占用服务器资源。

eg:

```
net.ipv4.tcp_synack_retries = 2
```

## net.ipv6.conf.xxx.disable_ipv6

`net.ipv6.conf.xxx.disable_ipv6` 是一个用于禁用 IPv6 协议的内核参数。在某些情况下，可能需要禁用 IPv6 协议，例如当某些应用程序无法正常处理 IPv6 协议或者存在 IPv6 相关的网络问题时。

要禁用 IPv6 协议，可以将 `net.ipv6.conf.all.disable_ipv6` 和 `net.ipv6.conf.default.disable_ipv6` 参数都设置为 1。如果只想禁用某个网络接口的 IPv6 协议，可以将 `xxx` 替换为该接口的名称，例如 `eth0`。

eg:

```
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.lo.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
```

## kernel.msgmnb

`kernel.msgmnb` 是一个用于指定 Linux 内核中单个消息队列最大字节数的参数。消息队列是一种进程间通信的机制，进程可以通过将消息发送到消息队列中，来与其他进程进行通信。该参数指定了单个消息队列可以容纳的最大字节数，超过这个值的消息将无法发送到队列中。

默认情况下，`kernel.msgmnb` 的值为 16384 字节。

> 如果单个消息的大小超过了 `kernel.msgmnb` 的值，该消息将无法发送到消息队列中。另外，如果消息队列中的消息过多，可能会占用过多的系统资源。

eg:

```
kernel.msgmnb = 65536
```

## kernel.msgmax

`kernel.msgmax` 是一个用于指定 Linux 内核中单个消息队列中单个消息的最大字节数的参数。消息队列是一种进程间通信的机制，进程可以通过将消息发送到消息队列中，来与其他进程进行通信。该参数指定了单个消息队列中单个消息可以容纳的最大字节数。

默认情况下，`kernel.msgmax` 的值为 8192 字节。

> 如果单个消息的大小超过了 `kernel.msgmax` 的值，该消息将无法发送到消息队列中。另外，如果消息队列中的消息过多，可能会占用过多的系统资源。

eg:

```
kernel.msgmax = 65536
```

## net.core.wmem_default

`net.core.wmem_default` 是一个用于指定 Linux 内核中套接字发送缓冲区的默认大小的参数。套接字是网络通信中的基本单元，发送缓冲区用于缓存待发送的数据。该参数指定了新创建的套接字的发送缓冲区的默认大小，单位为字节。

默认情况下，`net.core.wmem_default` 的值为 212992 字节。

> 如果发送缓冲区的大小设置过小，可能会导致发送数据的速度变慢。但是，如果设置过大，可能会占用过多的系统内存。

eg:

```
net.core.wmem_default = 8388608
```

## net.core.rmem_default

`net.core.rmem_default` 是一个用于指定 Linux 内核中套接字接收缓冲区的默认大小的参数。套接字是网络通信中的基本单元，接收缓冲区用于缓存待接收的数据。该参数指定了新创建的套接字的接收缓冲区的默认大小，单位为字节。

默认情况下，`net.core.rmem_default` 的值为 212992 字节。

> 如果接收缓冲区的大小设置过小，可能会导致数据包丢失或者接收速度变慢。但是，如果设置过大，可能会占用过多的系统内存。

eg:

```
net.core.rmem_default = 8388608
```

## net.core.rmem_max

`net.core.rmem_max` 是一个用于指定 Linux 内核中套接字接收缓冲区的最大大小的参数。套接字是网络通信中的基本单元，接收缓冲区用于缓存待接收的数据。该参数指定了接收缓冲区的最大大小，单位为字节。

默认情况下，`net.core.rmem_max` 的值为 212992 字节。

> 如果接收缓冲区的大小设置过小，可能会导致数据包丢失或者接收速度变慢。但是，如果设置过大，可能会占用过多的系统内存。

eg:

```
net.core.rmem_max = 16777216
```

## net.core.wmem_max

`net.core.wmem_max` 是一个用于指定 Linux 内核中套接字发送缓冲区的最大大小的参数。套接字是网络通信中的基本单元，发送缓冲区用于缓存待发送的数据。该参数指定了发送缓冲区的最大大小，单位为字节。

默认情况下，`net.core.wmem_max` 的值为 212992 字节。

> 如果发送缓冲区的大小设置过小，可能会导致数据包丢失或者发送速度变慢。但是，如果设置过大，可能会占用过多的系统内存。

eg:

```
net.core.wmem_max = 16777216
```

## net.core.somaxconn

`net.core.somaxconn` 是一个用于指定 Linux 内核中套接字监听队列的最大长度的参数。当应用程序调用 `listen` 函数时，内核会创建一个套接字监听队列，用于存放已连接但未被接受的连接请求。该参数指定了该队列的最大长度，即等待连接的客户端数量。

默认情况下，`net.core.somaxconn` 的值为 128。

> 将 `net.core.somaxconn` 参数设置得太小可能会导致连接请求被拒绝，而将其设置得太大可能会占用过多的系统资源。

eg:

```
net.core.somaxconn = 40960
```

## net.ipv4.tcp_fin_timeout

`net.ipv4.tcp_fin_timeout` 是一个用于指定 Linux 内核中 TCP 连接的关闭时限的参数。当一端的应用程序调用 `close` 函数关闭 TCP 连接时，内核会向另一端发送一个 `FIN` 包，表示该端已经关闭连接。此时，内核会启动一个定时器，等待一段时间，如果在这段时间内没有收到对方的确认，内核会重新发送 `FIN` 包，这个过程会一直重复，直到超过了 `net.ipv4.tcp_fin_timeout` 指定的时间，内核才会放弃关闭连接。

默认情况下，`net.ipv4.tcp_fin_timeout` 的值为 60 秒。

> 将 `net.ipv4.tcp_fin_timeout` 参数设置得太小可能会导致连接过早地被关闭，而将其设置得太大可能会占用过多的系统资源

eg:

```
net.ipv4.tcp_fin_timeout = 10
```

## net.ipv4.tcp_keepalive_time

`net.ipv4.tcp_keepalive_time` 是一个用于指定 Linux 内核中 TCP 连接的空闲超时时间的参数。当 TCP 连接处于空闲状态时，即没有数据交换时，内核会周期性地向对端发送一个空的数据包，称为“TCP Keepalive 包”，以检测连接是否还处于活动状态。

`net.ipv4.tcp_keepalive_time` 参数指定了每次发送 Keepalive 包的间隔时间，即 Keepalive 时间间隔。

默认情况下，`net.ipv4.tcp_keepalive_time` 的值为 7200 秒（即 2 小时）。

> 将 `net.ipv4.tcp_keepalive_time` 参数设置得太小可能会导致过多的 Keepalive 包，占用过多的系统资源，而将其设置得太大可能会延长连接的响应时间。

eg:

```
net.ipv4.tcp_keepalive_time = 150
```

## net.ipv4.tcp_tw_reuse

`net.ipv4.tcp_tw_reuse` 是一个用于指定 Linux 内核中是否开启 TCP TIME-WAIT 快速重用的参数。当 TCP 连接的一方主动关闭连接时，会进入 TIME-WAIT 状态，这是为了确保在网络上所有相关的数据都被接收方接收完毕后才真正关闭连接。在 TIME-WAIT 状态下的连接不能被重用，直到该状态持续的时间到达指定的时间阈值。

`net.ipv4.tcp_tw_reuse` 参数决定了在 TCP 连接的 TIME-WAIT 状态结束后，是否可以快速重用该连接。如果该参数为 0，则内核会等待 TIME-WAIT 状态持续的时间到达指定的时间阈值后，才能关闭该连接并释放相关的系统资源；如果该参数为 1，则内核允许在 TIME-WAIT 状态结束后立即重用该连接，以便更快地建立新的连接。

默认情况下，`net.ipv4.tcp_tw_reuse` 的值为 0，表示不开启 TCP TIME-WAIT 快速重用。

> 开启 TCP TIME-WAIT 快速重用可能会带来一些风险，例如可能导致过多的 TCP 连接被重用，从而导致应用程序出现异常或错误。

eg:

```
net.ipv4.tcp_tw_reuse = 0
```

## net.ipv4.tcp_tw_recycle

`net.ipv4.tcp_tw_recycle` 是一个用于指定 Linux 内核中是否开启 TCP TIME-WAIT 快速回收的参数。在 TCP 连接的一方主动关闭连接后，该连接会进入 TIME-WAIT 状态，以保证网络上所有相关的数据都被接收方接收完毕后才真正关闭连接。在 TIME-WAIT 状态下的连接不能被重用，直到该状态持续的时间到达指定的时间阈值。如果 TIME-WAIT 状态下的连接数太多，会导致系统资源的浪费，从而影响系统性能。

`net.ipv4.tcp_tw_recycle` 参数可以通过允许内核在 TIME-WAIT 状态下接收新连接并将它们与先前连接的 IP 地址和端口号匹配，从而减少 TIME-WAIT 状态下的连接数。

默认情况下，`net.ipv4.tcp_tw_recycle` 的值为 0，表示不开启 TCP TIME-WAIT 快速回收。

> 开启 TCP TIME-WAIT 快速回收可能会带来一些风险，例如可能导致重用的 TCP 连接出现错误或异常，从而导致应用程序的问题。

eg:

```
net.ipv4.tcp_tw_recycle = 0
```

## net.ipv4.tcp_max_tw_buckets

`net.ipv4.tcp_max_tw_buckets` 是一个用于指定 Linux 内核中 TIME-WAIT 状态的最大数量的参数。当 Linux 内核中有大量的 TIME-WAIT 状态的 TCP 连接时，可能会影响系统的性能和可靠性。该参数限制了 TCP TIME-WAIT 状态的最大数量，从而可以避免系统因过多的 TIME-WAIT 状态的 TCP 连接而导致性能下降或甚至崩溃。

默认情况下，`net.ipv4.tcp_max_tw_buckets` 的值为 180000。这意味着，当系统中有超过 180000 个 TIME-WAIT 状态的 TCP 连接时，新的 TCP 连接将无法建立，直到一些旧的连接结束。

> 将 `net.ipv4.tcp_max_tw_buckets` 的值设置得太高可能会导致系统资源的浪费，从而影响系统性能和可靠性。

eg:

```
net.ipv4.tcp_max_tw_buckets = 20000
```

## net.ipv4.tcp_max_syn_backlog

`net.ipv4.tcp_max_syn_backlog` 参数用于控制 TCP SYN 队列的长度，即指定了内核中 SYN 队列的最大长度。在 TCP 三次握手过程中，当客户端发送 SYN 报文给服务器时，如果服务器端忙碌或者没有足够的资源（如可用的 socket），就会把 SYN 报文放入队列中，等待服务器处理。`tcp_max_syn_backlog` 指定了这个队列的最大长度，即在等待被服务器处理的 SYN 报文的最大数目。

默认情况下，`net.ipv4.tcp_max_syn_backlog` 的值为 128，也就是 SYN 队列最多可以容纳 128 个 SYN 报文。如果 SYN 队列已满，则新的连接请求将被服务器拒绝。

> 在高负载情况下，可以适当增加 `net.ipv4.tcp_max_syn_backlog` 的值，以避免服务器因无法处理大量的连接请求而出现性能问题。但是，需要注意的是，如果设置得过高，可能会占用过多的内存资源，从而对系统的性能产生负面影响。

eg:

```
net.ipv4.tcp_max_syn_backlog = 8096
```

## net.ipv4.ip_local_port_range

`net.ipv4.ip_local_port_range` 参数用于控制本地端口号的范围。在 Linux 系统中，每个网络套接字都要绑定到一个端口号上，用于标识网络通信中的进程和应用程序。`ip_local_port_range` 参数指定了可用于绑定套接字的本地端口号范围，即指定了可供应用程序使用的端口号的区间。

默认情况下，`net.ipv4.ip_local_port_range` 参数的值为 32768 ～ 60999。这意味着，应用程序可以使用的本地端口号范围为 32768 到 60999。可以通过修改该参数来扩大或缩小可用的本地端口号范围。

> 在高并发网络应用中，适当调整 `net.ipv4.ip_local_port_range` 的值可以增加可用的本地端口号范围，从而提高应用程序的并发性能。但需要注意的是，增加可用端口号范围会占用更多的内存资源，可能会对系统的稳定性和安全性产生负面影响。

eg:

```
net.ipv4.ip_local_port_range = 1024 65000
```

## vm.swappiness

`vm.swappiness` 参数是 Linux 内核的一个虚拟内存子系统的参数，它决定了内核在何时将内存中的数据交换到磁盘上的交换空间中。当系统内存不足时，为了腾出更多的内存空间，内核会将部分内存数据写入到交换空间中，这个过程叫做交换（swapping）。

`vm.swappiness` 的默认值为 60，表示内核会尽可能将内存中的数据交换到磁盘上的交换空间中，以便为其他进程提供更多的内存空间。如果将 `vm.swappiness` 的值调低，内核就会尽量避免使用交换空间，从而提高系统的响应速度和性能。反之，如果将 `vm.swappiness` 的值调高，内核会更加频繁地将内存数据交换到磁盘上，这会增加磁盘的读写操作，导致系统的响应速度变慢。

eg:

```
vm.swappiness = 0
```




<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
