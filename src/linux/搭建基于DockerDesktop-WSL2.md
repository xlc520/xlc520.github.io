---
author: xlc520
title: 搭建基于Docker Desktop - WSL2
excerpt: 
description: Linux分类
date: 2022-09-22
category: Linux
tag: 
 - Linux
 - Docker
 - WSL2
 - Kubernetes
 - k8s
article: true
timeline: true
icon: linux
---

# 搭建基于 Docker Desktop - WSL2

<https://www.cnblogs.com/taylorshi/p/13698355.html>

## 背景介绍

Kubernetes（简称 k8s)已成为目前业界容器编排的事实标准，其搭配 Docker 可建立非常高效便捷的高可扩展、高可用应用服务架构。

> Kubernetes 的名字来自希腊语，意思是“舵手” 或 “领航员”。K8s 是将 8 个字母“ubernete”替换为“8”的缩写。

## Kubernetes 的由来

> Kubernetes 最初源于谷歌内部的 Borg，提供了面向应用的容器集群部署和管理系统。Kubernetes
> 的目标旨在消除编排物理/虚拟计算，网络和存储基础设施的负担，并使应用程序运营商和开发人员完全将重点放在以容器为中心的原语上进行自助运营。Kubernetes
> 也提供稳定、兼容的基础（平台），用于构建定制化的 workflows 和更高级的自动化任务。

`Kubernetes`
具备完善的集群管理能力，包括多层次的安全防护和准入机制、多租户应用支撑能力、透明的服务注册和服务发现机制、内建负载均衡器、故障发现和自我修复能力、服务滚动升级和在线扩容、可扩展的资源自动调度机制、多粒度的资源配额管理能力。

`Kubernetes`还提供完善的管理工具，涵盖开发、部署测试、运维监控等各个环节。

### Borg 简介

> Borg 是谷歌内部的大规模集群管理系统，负责对谷歌内部很多核心服务的调度和管理。Borg
> 的目的是让用户能够不必操心资源管理的问题，让他们专注于自己的核心业务，并且做到跨多个数据中心的资源利用率最大化。

Borg 主要由`BorgMaster`、`Borglet`、`borgcfg`和`Scheduler`组成，如下图所示

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920015036286-1409787293.png)

- BorgMaster 是整个集群的大脑，负责维护整个集群的状态，并将数据持久化到 Paxos 存储中；
- Scheduer 负责任务的调度，根据应用的特点将其调度到具体的机器上去；
- Borglet 负责真正运行任务（在容器中）；
- borgcfg 是 Borg 的命令行工具，用于跟 Borg 系统交互，一般通过一个配置文件来提交任务。

### Kubernetes 架构

Kubernetes 借鉴了 Borg 的设计理念，比如 Pod、Service、Labels 和单 Pod 单 IP 等。Kubernetes 的整体架构跟 Borg 非常像，如下图所示

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920015227616-2027254697.png)

Kubernetes 主要由以下几个核心组件组成：

- `etcd`保存了整个集群的状态；
- `apiserver`提供了资源操作的唯一入口，并提供认证、授权、访问控制、API 注册和发现等机制；
- `controller manager`负责维护集群的状态，比如故障检测、自动扩展、滚动更新等；
- `scheduler`负责资源的调度，按照预定的调度策略将 Pod 调度到相应的机器上；
- `kubelet`负责维护容器的生命周期，同时也负责`Volume（CVI）`和`网络（CNI）`的管理；
- `Container runtime`负责镜像管理以及`Pod`和容器的真正运行（CRI）；
- `kube-proxy`负责为`Service`提供`cluster`内部的服务发现和负载均衡；

除了核心组件，还有一些推荐的 Add-ons：

- `kube-dns`负责为整个集群提供 DNS 服务
- `Ingress Controller`为服务提供外网入口
- `Heapster`提供资源监控
- `Dashboard`提供 GUI
- `Federation`提供跨可用区的集群
- `Fluentd-elasticsearch`提供集群日志采集、存储与查询

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920015503920-677622898.png)

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920015508721-1218848536.png)

Kubernetes 设计理念和功能其实就是一个类似 Linux 的分层架构，如下图所示

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920015719817-2060783609.png)

- 核心层：Kubernetes 最核心的功能，对外提供 API 构建高层的应用，对内提供插件式应用执行环境
- 应用层：部署（无状态应用、有状态应用、批处理任务、集群应用等）和路由（服务发现、DNS 解析等）
- 管理层：系统度量（如基础设施、容器和网络的度量），自动化（如自动扩展、动态 Provision 等）以及策略管理（RBAC、Quota、PSP、NetworkPolicy
  等）
- 接口层：kubectl 命令行工具、客户端 SDK 以及集群联邦
- 生态系统：在接口层之上的庞大容器集群管理调度的生态系统，可以划分为两个范畴
  Kubernetes 外部：日志、监控、配置管理、CI、CD、Workflow、FaaS、OTS 应用、ChatOps 等
  Kubernetes 内部：CRI、CNI、CVI、镜像仓库、Cloud Provider、集群自身的配置和管理等

## Kubernetes 常用技术概念

### 业务类型

目前 K8s 中的业务主要可以分为

|             业务类型             |     技术概念     |
|:----------------------------:|:------------:|
|     长期伺服型（long-running）      | `Deployment` |
|         批处理型（batch）          |    `Job`     |
|     节点后台支撑型（node-daemon）     | `DaemonSet`  |
| 有状态应用型（stateful application） |   `PetSet`   |

### Pod(微服务)

> Pod 是在 K8s 集群中运行部署应用或服务的最小单元，它是可以支持多容器的。Pod 的设计理念是支持多个容器在一个 Pod
> 中共享网络地址和文件系统，可以通过进程间通信和文件共享这种简单高效的方式组合完成服务。

比如你运行一个操作系统发行版的软件仓库，一个 Nginx
容器用来发布软件，另一个容器专门用来从源仓库做同步，这两个容器的镜像不太可能是一个团队开发的，但是他们一块儿工作才能提供一个微服务；这种情况下，不同的团队各自开发构建自己的容器镜像，在部署的时候组合成一个微服务对外提供服务。

### Deployment(部署)

以 K8s 的发展方向，未来对所有长期伺服型的的业务的管理，都会通过 Deployment 来管理。

> 部署表示用户对 K8s 集群的一次更新操作。部署可以是创建一个新的服务，更新一个新的服务，也可以是滚动升级一个服务。

### Service(服务)

> 服务发现完成的工作，是针对客户端访问的服务，找到对应的的后端服务实例。在 K8s 集群中，客户端需要访问的服务就是 Service
> 对象。每个 Service 会对应一个集群内部有效的虚拟 IP，集群内部通过虚拟 IP 访问一个服务。

在 K8s 集群中微服务的负载均衡是由 Kube-proxy 实现的。Kube-proxy 是 K8s 集群内部的负载均衡器。它是一个分布式代理服务器，在
K8s 的每个节点上都有一个；这一设计体现了它的伸缩性优势，需要访问服务的节点越多，提供负载均衡能力的 Kube-proxy
就越多，高可用节点也随之增多。

### Job(任务)

> Job 是 K8s 用来控制批处理型任务的 API 对象。批处理业务与长期伺服业务的主要区别是批处理业务的运行有头有尾，而长期伺服业务在用户不停止的情况下永远运行。Job
> 管理的 Pod 根据用户的设置把任务成功完成就自动退出了。

### DaemonSet(后台支撑服务集)

> 后台支撑型服务的核心关注点在 K8s 集群中的节点（物理机或虚拟机），要保证每个节点上都有一个此类 Pod 运行。

典型的后台支撑型服务包括，存储，日志和监控等在每个节点上支持 K8s 集群运行的服务。

### PetSet(有状态服务集)

在云原生应用的体系里，有下面两组近义词；第一组是无状态（stateless）、牲畜（cattle）、无名（nameless）、可丢弃（disposable）；第二组是有状态（stateful）、宠物（pet）、有名（having
name）、不可丢弃（non-disposable）。

> PetSet 是用来控制有状态服务，PetSet 中的每个 Pod 的名字都是事先确定的，不能更改。适合于 PetSet 的业务包括数据库服务 MySQL
> 和 PostgreSQL，集群化管理服务 Zookeeper、etcd 等有状态服务。

### Volume(存储卷)

> K8s 集群中的存储卷跟 Docker 的存储卷有些类似，只不过 Docker 的存储卷作用范围为一个容器，而 K8s 的存储卷的生命周期和作用范围是一个
> Pod。每个 Pod 中声明的存储卷由 Pod 中的所有容器共享。

K8s 还支持使用 Persistent Volume
Claim 即 PVC 这种逻辑存储，使用这种存储，使得存储的使用者可以忽略后台的实际存储技术（例如 AWS，Google 或 GlusterFS 和
Ceph），而将有关存储实际技术的配置交给存储管理员通过 Persistent
Volume 来配置。

### Node(节点)

> K8s 集群中的计算能力由 Node 提供，是所有 Pod 运行所在的工作主机，可以是物理机也可以是虚拟机。不论是物理机还是虚拟机，工作主机的统一特征是上面要运行
> kubelet 管理节点上运行的容器。

## 假设的前提

- 已经开启 Windows10 系统的 WSL2，并且把版本 2 设置为默认。
- 已经安装并成功运行 Docker Desktop For Windows
- 已经设置好 Docker Desktop 的镜像加速，比如阿里云、中科大
- 已经安装并启用至少一个 Windows10 Linux 发行版，比如 Ubuntu 20.04
- 已经设置好 Linux 发行版为 Docker 运行的默认容器。

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920191653359-653163530.png)

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920011447642-1671879599.png)

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920011536810-200194442.png)

接下来，以`Docker Desktop`版本`v2.3.0.4`为例，其中自带的`Kubernetes`版本为`v1.16.5`

## 准备 Kubernetes 所需的镜像组合包

由于 K8S
需要一些镜像，如果一个个去下载，还是有点麻烦，我们可以借助一个阿里云现有的项目[AliyunContainerService/k8s-for-docker-desktop](https://github.com/AliyunContainerService/k8s-for-docker-desktop)
，一次把所有 Image 都下载好。

打开 PowerShell，执行命令行

```bash
git clone git@github.com:AliyunContainerService/k8s-for-docker-desktop.git
```

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920020300015-355962561.png)

`git clone`完毕之后，切换到它的目录。

```bash
cd .\k8s-for-docker-desktop\
```

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920020454805-1441919526.png)

这里需要注意的是，由于不同的 Docker Desktop 带的 Kubernetes 是不一样的，然后我们需要的镜像版本应该和自带的 Kubernetes
保持一致，举例，如果你的 Docker
Desktop 关于页面写着 Kubernetes 的版本是 v1.16.5 的话，我们需要把这个项目切换到对应的分支。

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920192344515-1587195360.png)

```bash
git checkout v1.16.5
```

官网给的清单如下：

- 如 Kubernetes 版本为`v1.18.3`, 请使用下面命令切换`v1.18.3`分支 `git checkout v1.18.3`
- 如 Kubernetes 版本为`v1.16.5`, 请使用下面命令切换`v1.16.5`分支 `git checkout v1.16.5`
- 如 Kubernetes 版本为`v1.15.5`, 请使用下面命令切换`v1.15.5`分支 `git checkout v1.15.5`
- 如 Kubernetes 版本为`v1.15.4`, 请使用下面命令切换`v1.15.4`分支 `git checkout v1.15.4`
- 如 Kubernetes 版本为`v1.14.8`, 请使用下面命令切换`v1.14.8`分支 `git checkout v1.14.8`
- 如 Kubernetes 版本为`v1.14.7`, 请使用下面命令切换`v1.14.7`分支 `git checkout v1.14.7`
- 如 Kubernetes 版本为`v1.14.6`, 请使用下面命令切换`v1.14.6`分支 `git checkout v1.14.6`
- 如 Kubernetes 版本为`v1.14.3`, 请使用下面命令切换`v1.14.3`分支 `git checkout v1.14.3`
- 如 Kubernetes 版本为`v1.14.1`, 请使用下面命令切换`v1.14.1`分支 `git checkout v1.14.1`
- 如 Kubernetes 版本为`v1.13.0`, 请使用下面命令切换`v1.13.0`分支 `git checkout v1.13.0`
- 如 Kubernetes 版本为`v1.10.11`, 请使用下面命令切换`v1.10.11`分支 `git checkout v1.10.11`

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920204052206-383225007.png)

接下来，就可以执行其中的 ps 脚本：`load_images.ps1`

```bash
.\load_images.ps1
```

其中 PS 脚本内容如下：

```bash
foreach($line in Get-Content .\images.properties) {
    $data = $line.Split('=')
    $key = $data[0];
    $value = $data[1];
    Write-Output "$key=$value"
    docker pull ${value}
    docker tag ${value} ${key}
    docker rmi ${value}
}
```

而`images.properties`文件中，包括哪些镜像呢？

```bash
k8s.gcr.io/pause:3.1=registry.cn-hangzhou.aliyuncs.com/google_containers/pause:3.1
k8s.gcr.io/kube-controller-manager:v1.16.5=registry.cn-hangzhou.aliyuncs.com/google_containers/kube-controller-manager:v1.16.5
k8s.gcr.io/kube-scheduler:v1.16.5=registry.cn-hangzhou.aliyuncs.com/google_containers/kube-scheduler:v1.16.5
k8s.gcr.io/kube-proxy:v1.16.5=registry.cn-hangzhou.aliyuncs.com/google_containers/kube-proxy:v1.16.5
k8s.gcr.io/kube-apiserver:v1.16.5=registry.cn-hangzhou.aliyuncs.com/google_containers/kube-apiserver:v1.16.5
k8s.gcr.io/etcd:3.3.15-0=registry.cn-hangzhou.aliyuncs.com/google_containers/etcd:3.3.15-0
k8s.gcr.io/coredns:1.6.2=registry.cn-hangzhou.aliyuncs.com/google_containers/coredns:1.6.2
quay.io/kubernetes-ingress-controller/nginx-ingress-controller:0.26.1=registry.cn-hangzhou.aliyuncs.com/google_containers/nginx-ingress-controller:0.26.1
```

所以我们能看出，阿里云这个批处理呢，实际上就是配置走阿里云的镜像中心来加速相关 Image 的下载速度。

不小心，可能就会遇到一个权限坑

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920021036665-648664370.png)

不要慌，这是要允许 Powershell 来执行未知脚本。

请在开始菜单图标上右键，选`Windows PowerShell管理员`模式运行。

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920021334941-1028246888.png)

根据提示执行命令即可

```bash
Set-ExecutionPolicy RemoteSigned
```

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920021446329-985938.png)

然后记得重启一次 PowerShell 使其生效。

好了，解除权限限制之后，便可以开始继续上诉脚本执行了。

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920204238369-2146637537.png)

如果一切顺利，不要多久你可以看到所有的镜像都拉取到本地了。

我们可以简单查验下

```bash
docker images
```

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920204317270-637976343.png)

## 本地 HOST 环境设置

为了避免遇到一些奇怪的问题，我们先需要给本地的 Host 文件添加一些项。

```bash
# Kubernetes Start
127.0.0.1 kubernetes.docker.internal
# Kubernetes End

# GitHub Start
52.74.223.119 github.com
192.30.253.119 gist.github.com
54.169.195.247 api.github.com
185.199.111.153 assets-cdn.github.com
151.101.76.133 raw.githubusercontent.com
151.101.108.133 user-images.githubusercontent.com
151.101.76.133 gist.githubusercontent.com
151.101.76.133 cloud.githubusercontent.com
151.101.76.133 camo.githubusercontent.com
151.101.76.133 avatars0.githubusercontent.com
151.101.76.133 avatars1.githubusercontent.com
151.101.76.133 avatars2.githubusercontent.com
151.101.76.133 avatars3.githubusercontent.com
151.101.76.133 avatars4.githubusercontent.com
151.101.76.133 avatars5.githubusercontent.com
151.101.76.133 avatars6.githubusercontent.com
151.101.76.133 avatars7.githubusercontent.com
151.101.76.133 avatars8.githubusercontent.com
# GitHub End
```

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920204418843-1843976703.png)

- 其中`kubernetes.docker.internal`指向`127.0.0.1`可避免遇到`kubernetes.docker.internal: no such host`的问题。
- 其中`Github`相关的 Host 呢，是避免遇到`raw.githubusercontent.com 找不到host`的问题。

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920204455963-1896633151.png)

另外需要注意，`Docker Desktop For Windows 10`的日志这个路径，如果需要可以查看

```bash
C:\ProgramData\DockerDesktop\service.txt
```

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920071826472-286092709.png)

另外，`Docker Desktop For Windows 10`生成的 Kubernetes 的配置文件路径位置在

```bash
C:\Users\UserName\.kube
```

## 开启并安装 Docker Desktop 版 Kubernetes

事实上，Docker Desktop 自带了一个单节点版本的 Kubernetes，我们执行下命令就会发现了

```bash
kubectl version
```

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920030203241-1025556876.png)

但是，其实也看到，Kubernetes 服务并没有起来，好了，我们接下来启用并安装自带的 K8S 吧。

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920030421627-1176573897.png)

在桌面右下角，右键打开你的 Docker Desktop 小图标，进入`Settings`页面的最后一项`Kubernetes`

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920022902881-1865014691.png)

请勾选其中的`Enable Kubernetes`项，然后点击`Apply & Restart`即可开始安装。

> 如果你想通过 Docker 命令行查看 Kubernetes 内部的容器资源，那么可以多勾选一个`Show System Containers(Advanced)`
> ，默认不建议勾选，以免它产生的实例形成干扰信息。

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920031705150-1882295227.png)

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920032559468-655038327.png)

这里需要等待一段时间，这期间，如果你勾选了`Show System Containers(Advanced)`，希望检查是否成功执行，可以通过以下命令来查看实例创建情况

```bash
docker ps
```

你会发现，已经在开始陆续创建了所需的 Docker 实例了。

如果不出意外的话，最终你会看到`Kubernetes Running`的胜果。

理论上，只要上诉步骤你都操作了，按理没有坑了，如果你漏了，极有可能会在这里等待很久哦。

如果你没有勾选`Show System Containers(Advanced)`，你会看到一个干净的 Docker Desktop Dashboard
面板，里面不会看到`Kubernetes`
相关的容器，如果你勾选了，会新增一堆实例。

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920205013588-743988895.png)

底部状态的`Kubernetes Running`就代表我们已经安装并启用成功了。

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920205435168-1342089193.png)

接下来，验证下集群的状态，执行命令

```bash
kubectl cluster-info
```

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920205531103-1519922837.png)

查看的 node 节点

```bash
kubectl get nodes
```

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920205627877-616000426.png)

如果以上命令都成功执行，如图输出，说明已经运转正常了。

## 配置 Kubernetes 控制台(Dashboard)面板

如果你设置了前面的 host 文件呢，这时候其中`raw.githubusercontent.com`的配置就马上要起到作用了，不然接下来这个命令就惨了。

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920205809227-1883125507.png)

```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.0.0-rc5/aio/deploy/recommended.yaml
```

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920205734928-1474063800.png)

这一步会安装并设置 Kubernetes 的 Dashboard 面板。

接下来，我们检查下 Kubernetes 的 Dashboard 面板的 Pod 状态。

```bash
kubectl get pod -n kubernetes-dashboard
```

刚开始你会发现，都是`0/1`，这说明还需要在等等，实际上后台正在部署`kubernetes-dashboard`所需的 Pod。

多执行几次上诉命令，接下来你会看到每一个 Pod 都开始变成`1/1`，这时候说明 Dashboard 面板实例已经就位了，等待我们访问。

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920205857499-1713108756.png)

## 生成可登录 Kubernetes Dashboard 的`Token`

先执行如下命令，生成`Token`

```bash
$TOKEN=((kubectl -n kube-system describe secret default | Select-String "token:") -split " +")[1]
```

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920205922707-1136895879.png)

然后把这个`Token`，写入`Kubernetes`的上下文`docker-desktop`中，以便下一步登录使用

```bash
kubectl config set-credentials docker-desktop --token="${TOKEN}"
```

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920210045301-346214260.png)

我们把这个`Token`，在终端中打印出来，并且复制保存哈。。

```bash
echo $TOKEN
```

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920210112527-624896796.png)

接着，我们开启 API Server 访问代理

```bash
kubectl proxy
```

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920210413547-2033488985.png)

然后，我们就可以使用 Url 来访问可视化界面了。

<http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/>

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920210501303-1804114165.png)

打开后，我们选择`Token`的登录方式，输入我们得到的`Token`信息。

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920210641744-598654338.png)

点击`登录`，即可进入传说中的`Dashboard`

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920210756742-1026070019.png)

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200920210818191-996036967.png)

恭喜你，开启成功！

## 实战 Kubernetes 高可用架构

1. 创建一个`.Net Core 3.1`的 API 实例项目`DeployToK8s`

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200921001804546-1308356919.png)

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200921001854580-1993225198.png)

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200921002014182-1112505069.png)

1. 准备演示应用的领域模型

```csharp
/// <summary>
/// 用户表
/// </summary>
public class User
{
    /// <summary>
    /// Id
    /// </summary>
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int Id { get; set; }

    /// <summary>
    /// 用户名
    /// </summary>
    public string Name { get; set; }
}
```

建立一个领域叫`User`，设置其 Id 作为主键，并且自增。

1. 添加`MYSQL-EFCore`相关的支持包到项目中

- Pomelo.EntityFrameworkCore.MySql
- Microsoft.EntityFrameworkCore.Proxies

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200921002455527-1306803793.png)

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200921005622476-821993304.png)

并设置好 MYSQL 的连接字符串

```bash
server=localhost;Database=deployk8s;user id=root;password=yourrootpassword;CharSet=utf8mb4;port=3307;AllowZeroDatetime=True;ConvertZeroDatetime=True;Pooling=true;Max Pool Size=32767;Allow User Variables=True;AllowLoadLocalInfile=true;SslMode=none
```

为了让 EF 在启动时自动根据我们的 Domain 创建表，我们需要加上

```csharp
# public void ConfigureServices(IServiceCollection services)
// 添加Mysql数据上下文
services.AddTransient<DataContext>();

# public void Configure(IApplicationBuilder app, IWebHostEnvironment env)

// 如果不迁移数据，只是需要在首次运行时，完全按照在上下文类中的DbContext模型来创建数据库，则可以使用
using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
{
    var context = serviceScope.ServiceProvider.GetRequiredService<DataContext>();
    context.Database.EnsureCreated();
}

// 如果已经创建了迁移，则可以在Startup.cs中执行它们，如下所示
using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
{
    var context = serviceScope.ServiceProvider.GetRequiredService<DataContext>();
    context.Database.Migrate();
}
```

往数据中插入一些模拟数据，创建好默认 Controller，然后并设置项目启动目录指向它。

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200921085911887-858401810.png)

1. 给项目添加 Docker 支持

在项目上右键，添加 -> Docker 支持 -> Linux 模式 -> 确认

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200921090012804-350915610.png)

它将在项目中新建一个`DockerFile`，这个是后续生成 Docker 镜像的配置文件。

```bash
#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["DeployToK8s.csproj", ""]
RUN dotnet restore "./DeployToK8s.csproj"
COPY . .
WORKDIR "/src/."
RUN dotnet build "DeployToK8s.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "DeployToK8s.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "DeployToK8s.dll"]
```

1. 构建 Docker 镜像

直接在项目的这个`DockerFile`文件上右键，有一个选项是`生成Docker镜像`，点击即可。

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200921090758873-643346420.png)

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200921090816944-1125396572.png)

它将开始执行构建，一共有 18 步骤，很快就能完成。

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200921090902656-128754629.png)

![Kubernetes-WSL2](https://bitbucket.org/xlc520/blogasset/raw/main/images3/375390-20200921091048032-75040421.png)

## 附录

- <https://github.com/AliyunContainerService/k8s-for-docker-desktop>
- [http://docs.kubernetes.org.cn](http://docs.kubernetes.org.cn/)
- <http://docs.kubernetes.org.cn/249.html>
- <https://docs.docker.com/docker-for-windows/>
