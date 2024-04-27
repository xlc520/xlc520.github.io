---
author: xlc520
title: kubeadm 安装 Kubernetes-1.26.1集群
excerpt: 
description:
date: 2023-02-06
category: Linux
tag: 
- Linux
- kubernetes
article: true
timeline: true
icon: linux
---

# kubeadm 安装 Kubernetes-1.26.1 集群

> 基于 vmware 运行 ubuntu 系统，模拟集群环境以便学习 k8s 运维技术。因为笔记本内存有限，只能开一个 master 节点和 2 个 node
> 节点，没有配置负载均衡和高可用。

| 主机名        | ip              | 配置           |
|------------|-----------------|--------------|
| k8s-master | 192.168.109.130 | 4C4G 20G-SSD |
| k8s-node1  | 192.168.109.131 | 3C2G 20G-SSD |
| k8s-node2  | 192.168.109.12  | 3C2G 20G-SSD |

| 软件      | 版本                                |
|---------|-----------------------------------|
| VMware  | 17.0.0 build-20800274             |
| kubeadm | 1.26.1                            |
| k8s     | 1.26.1                            |
| OS      | ubuntu-server 22.04-LTS minimized |

| 硬件配置  | 值                       |
|-------|-------------------------|
| 宿主 OS | w11x64                  |
| CPU   | AMD Ryzen 7 4800U 8C16T |
| 内存    | 16G DDR4 15.4G 可用       |
| 硬盘    | 500GB NVME SSD          |

### 1.设置 hostname

```bash
hostnamectl set-hostname k8s-master // master节点
hostnamectl set-hostname k8s-node1  // node1节点
hostnamectl set-hostname k8s-node2  // node2节点
```

### 2.设置 hosts

后续可以使用别名直接访问别的节点

```bash
cat >> /etc/hosts << EOF
192.168.109.130 k8s-master
192.168.109.131 k8s-node1
192.168.109.132 k8s-node2
EOF
```

### 3.禁用 swap

以前的版本 swap 可能会影响性能,当前版本未知

```bash
sudo swapoff -a
sudo sed -i '/swap/ s/^\(.*\)$/#\1/g' /etc/fstab
```

### 4.修改内核参数

```bash
-- 启用内核模块
sudo tee /etc/modules-load.d/containerd.conf <<EOF
overlay
br_netfilter
EOF
-- 启用内核模块
sudo modprobe overlay
sudo modprobe br_netfilter
```

### 4.sysctl 配置

```bash
sudo tee /etc/sysctl.d/kubernetes.conf<<EOF
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1
EOF
```

### 5.重新加载 sysctl

```bash
sudo sysctl –system
```

### 6.安装基础软件

```bash
sudo apt install -y curl gnupg2 software-properties-common apt-transport-https ca-certificates
```

### 7.添加 docker 源

```bash
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmour -o /etc/apt/trusted.gpg.d/docker.gpg
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```

### 8.安装 containerd

```bash
sudo apt update 
sudo apt install -y containerd.io
```

### 9.配置 containerd 用 systemdcgroup 启动

```bash
-- 生成默认的containerd配置
containerd配置 config default | sudo tee /etc/containerd/config.toml >/dev/null 2>&1
-- 修改containerd的配置 Cgroup配置为Systemd
sudo sed -i 's/SystemdCgroup \= false/SystemdCgroup \= true/g' /etc/containerd/config.toml
```

### 10.重启 containerd 使之生效

```bash
sudo systemctl restart containerd
sudo systemctl enable containerd
```

### 11.设置 crictl

```bash
-- 生成crictl配置 主要是启用containerd所需要的修改
cat > /etc/crictl.yaml << EOF
runtime-endpoint: unix:///var/run/containerd/containerd.sock
image-endpoint: unix:///var/run/containerd/containerd.sock
timeout: 10
debug: false
EOF
```

------

# 12.添加 Kubernetes 阿里巴巴源

```bash
curl https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg | sudo apt-key add -
-- 这个源使用的系统代号是xenial，但不影响使用
sudo apt-add-repository "deb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main"
```

### 13.安装 k8s 命令行工具

```bash
-- 查看当前最新版本 决定安装哪个版本
apt-cache madison kubeadm|head
-- 当前最新版本是1.26.1
apt install -y kubelet=1.26.1-00 kubeadm=1.26.1-00 kubectl=1.26.1-00
```

### 14.查看 kubeadm 启动 k8s 所需镜像的信息

```bash
-- 注意修改版本号
kubeadm config images list \
--image-repository registry.aliyuncs.com/google_containers \
--kubernetes-version=v1.26.1
```

# 15.使用阿里镜像站下载所需的镜像

```bash
-- 注意修改版本号
kubeadm config images pull \
--kubernetes-version=v1.26.1 \
--image-repository registry.aliyuncs.com/google_containers
```

### 16.查看已下载镜像

```bash
crictl images
```

### 17.生成 kubeadm 默认配置 (master 节点执行)

```bash
kubeadm config print init-defaults > kubeadm.yaml
```

#### 18.参考配置文件(master 节点执行)

```yaml
apiVersion: kubeadm.k8s.io/v1beta3
bootstrapTokens:
- groups:
  - system:bootstrappers:kubeadm:default-node-token
  token: abcdef.0123456789abcdef
  ttl: 24h0m0s
  usages:
  - signing
  - authentication
kind: InitConfiguration
localAPIEndpoint:
  # master的ip
  advertiseAddress: 192.168.109.130
  bindPort: 6443
nodeRegistration:
  # 当前使用containerd docker已废弃
  criSocket: unix:///var/run/containerd/containerd.sock
  imagePullPolicy: IfNotPresent
  name: k8s-master
  taints: null
---
apiServer:
  timeoutForControlPlane: 4m0s
  certSANs:
  - 192.168.109.130
apiVersion: kubeadm.k8s.io/v1beta3
certificatesDir: /etc/kubernetes/pki
clusterName: kubernetes
controllerManager: {}
dns: {}
etcd:
  local:
    dataDir: /var/lib/etcd
# 使用国内镜像
imageRepository: registry.aliyuncs.com/google_containers
kind: ClusterConfiguration
kubernetesVersion: 1.26.1
networking:
  dnsDomain: cluster.local
  serviceSubnet: 10.96.0.0/12
  podSubnet: 10.244.0.0/16
scheduler: {}
```

### 19.初始化 master(master 节点执行)

```bash
kubeadm init \
--config /root/kubeadm.yaml \
--ignore-preflight-errors=SystemVerification \
--upload-certs
```

### 20.重置 matser(master 节点执行)

如果上一步因为配置出错 可以重置初始化 防止重复 init 因为资源重复报错

```bash
Kubeadm reset
```

### 21.本地化配置(master 节点执行)

```bash
-- 生成一个用户配置
mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```

### 22.Node 节点配置

```bash
-- 查看containerd的images相关配置
cat /etc/containerd的images相关配置/config.toml  |grep image

-- pause镜像改成阿里巴巴源 并升级到3.9
sed -i "s#registry.k8s.io/pause:3.6#registry.aliyuncs.com/google_containers/pause:3.9#g"  /etc/containerd/config.toml
-- 重复服务 使之生效
systemctl daemon-reload && systemctl restart containerd
```

### 23.Node 节点初始化(node 节点执行)

```bash
-- master节点执行  生成一个在node节点执行用于初始化node节点的k8s服务的命令
kubeadm token create --print-join-command
-- 将生成的命令在node1 和node2 执行 这个命令是有时效的 过期了在master重新生成
kubeadm join 192.168.109.130:6443 --token dryr23.ddjsnhcu91o7wpwh --discovery-token-ca-cert-hash sha256:6d51daf574d494588cfb880d5d3ddd89eaf7f278d0454fe6033e54816b9187d3
```

### 24.安装 CNI (master 节点执行)

```bash
-- 当前最新版本为3.25.0
curl https://raw.githubusercontent.com/projectcalico/calico/v3.25.0/manifests/calico.yaml -o calico-3-25-0.yaml
kubectl apply -f calico-3-25-0.yaml
```

### 25.测试 (master 节点执行)

跑一个 inginx 的镜像用于测试 k8s 是否正常运行，最终能打开一个 nginx 默认的首页。

```bash
kubectl create deployment nginx --image=nginx
kubectl get pod
kubectl expose deployment nginx --port=80 --type=NodePort
kubectl get pod,svc
```
