import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as r,c as t,b as e,d as n,e as s,a as d}from"./app-41defce9.js";const c={},v=d('<h1 id="详解-k8s-高可用部署" tabindex="-1"><a class="header-anchor" href="#详解-k8s-高可用部署" aria-hidden="true">#</a> 详解 K8S 高可用部署</h1><p>一、前言</p><p>二、基础环境部署</p><ul><li>1）前期准备（所有节点）</li><li>2）安装容器 docker（所有节点）</li><li>3）配置 k8s yum 源（所有节点）</li><li>4）将 sandbox_image 镜像源设置为阿里云 google_containers 镜像源（所有节点）</li><li>5）配置 containerd cgroup 驱动程序 systemd（所有节点）</li><li>6）开始安装 kubeadm，kubelet 和 kubectl（master 节点）</li><li>7）使用 kubeadm 初始化集群（master 节点）</li><li>8）安装 Pod 网络插件（CNI：Container Network Interface）(master)</li><li>9）node 节点加入 k8s 集群</li><li>10）配置 IPVS</li><li>11）集群高可用配置</li><li>12）部署 Nginx+Keepalived 高可用负载均衡器</li></ul><p>三、k8s 管理平台 dashboard 环境部署</p><ul><li>1）dashboard 部署</li><li>2）创建登录用户</li><li>3）配置 hosts 登录 dashboard web</li></ul><p>四、k8s 镜像仓库 harbor 环境部署</p><ul><li>1）安装 helm</li><li>2）配置 hosts</li><li>3）创建 stl 证书</li><li>4）安装 ingress</li><li>5）安装 nfs</li><li>6）创建 nfs provisioner 和持久化存储 SC</li><li>7）部署 Harbor（Https 方式）</li></ul><h3 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言" aria-hidden="true">#</a> 一、前言</h3>',9),u={href:"https://kubernetes.io/",target:"_blank",rel:"noopener noreferrer"},o=e("br",null,null,-1),m={href:"https://kubernetes.io/zh-cn/docs/home/",target:"_blank",rel:"noopener noreferrer"},b=d(`<h3 id="二、基础环境部署" tabindex="-1"><a class="header-anchor" href="#二、基础环境部署" aria-hidden="true">#</a> 二、基础环境部署</h3><h4 id="_1-前期准备-所有节点" tabindex="-1"><a class="header-anchor" href="#_1-前期准备-所有节点" aria-hidden="true">#</a> 1）前期准备（所有节点）</h4><p>1、修改主机名和配置 hosts</p><p>先部署 1master 和 2node 节点，后面再加一个 master 节点</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 在192.168.0.113执行
hostnamectl set-hostname  k8s-master-168-0-113
# 在192.168.0.114执行
hostnamectl set-hostname k8s-node1-168-0-114
# 在192.168.0.115执行
hostnamectl set-hostname k8s-node2-168-0-115
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置 hosts</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat &gt;&gt; /etc/hosts&lt;&lt;EOF
192.168.0.113 k8s-master-168-0-113
192.168.0.114 k8s-node1-168-0-114
192.168.0.115 k8s-node2-168-0-115
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、配置 ssh 互信</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 直接一直回车就行
ssh-keygen

ssh-copy-id -i ~/.ssh/id_rsa.pub root@k8s-master-168-0-113
ssh-copy-id -i ~/.ssh/id_rsa.pub root@k8s-node1-168-0-114
ssh-copy-id -i ~/.ssh/id_rsa.pub root@k8s-node2-168-0-115
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、时间同步</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install chrony -y
systemctl start chronyd
systemctl enable chronyd
chronyc sources
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、关闭防火墙</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl stop firewalld
systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>5、关闭 swap</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 临时关闭；关闭swap主要是为了性能考虑
swapoff -a
# 可以通过这个命令查看swap是否关闭了
free
# 永久关闭
sed -ri &#39;s/.*swap.*/#&amp;/&#39; /etc/fstab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、禁用 SELinux</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 临时关闭
setenforce 0
# 永久禁用
sed -i &#39;s/^SELINUX=enforcing$/SELINUX=disabled/&#39; /etc/selinux/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7、允许 iptables 检查桥接流量（可选，所有节点）</p><p>若要显式加载此模块，请运行 sudo modprobe br_netfilter，通过运行 lsmod | grep br_netfilter 来验证 br_netfilter 模块是否已加载。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo modprobe br_netfilter
lsmod | grep br_netfilter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>为了让 Linux 节点的 iptables 能够正确查看桥接流量，请确认 sysctl 配置中的 net.bridge.bridge-nf-call-iptables 设置为 1。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat &lt;&lt;EOF | sudo tee /etc/modules-load.d/k8s.conf
overlay
br_netfilter
EOF

sudo modprobe overlay
sudo modprobe br_netfilter

# 设置所需的 sysctl 参数，参数在重新启动后保持不变
cat &lt;&lt;EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-iptables  = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.ipv4.ip_forward                 = 1
EOF

# 应用 sysctl 参数而不重新启动
sudo sysctl --system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-安装容器-docker-所有节点" tabindex="-1"><a class="header-anchor" href="#_2-安装容器-docker-所有节点" aria-hidden="true">#</a> 2）安装容器 docker（所有节点）</h4><blockquote><p>提示：v1.24 之前的 Kubernetes 版本包括与 Docker Engine 的直接集成，使用名为 dockershim 的组件。这种特殊的直接整合不再是 Kubernetes 的一部分 （这次删除被作为 v1.20 发行版本的一部分宣布）。你可以阅读检查 Dockershim 弃用是否会影响你 以了解此删除可能会如何影响你。要了解如何使用 dockershim 进行迁移，请参阅从 dockershim 迁移。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 配置yum源
cd /etc/yum.repos.d ; mkdir bak; mv CentOS-Linux-* bak/
# centos7
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
# centos8
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-8.repo

# 安装yum-config-manager配置工具
yum -y install yum-utils
# 设置yum源
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
# 安装docker-ce版本
yum install -y docker-ce
# 启动
systemctl start docker
# 开机自启
systemctl enable docker
# 查看版本号
docker --version
# 查看版本具体信息
docker version

# Docker镜像源设置
# 修改文件 /etc/docker/daemon.json，没有这个文件就创建
# 添加以下内容后，重启docker服务：
cat &gt;/etc/docker/daemon.json&lt;&lt;EOF
{
   &quot;registry-mirrors&quot;: [&quot;http://hub-mirror.c.163.com&quot;]
}
EOF
# 加载
systemctl reload docker

# 查看
systemctl status docker containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>【温馨提示】dockerd 实际真实调用的还是 containerd 的 api 接口，containerd 是 dockerd 和 runC 之间的一个中间交流组件。所以启动 docker 服务的时候，也会启动 containerd 服务的。</p></blockquote><h4 id="_3-配置-k8s-yum-源-所有节点" tabindex="-1"><a class="header-anchor" href="#_3-配置-k8s-yum-源-所有节点" aria-hidden="true">#</a> 3）配置 k8s yum 源（所有节点）</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat &gt; /etc/yum.repos.d/kubernetes.repo &lt;&lt; EOF
[k8s]
name=k8s
enabled=1
gpgcheck=0
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-将-sandbox-image-镜像源设置为阿里云-google-containers-镜像源-所有节点" tabindex="-1"><a class="header-anchor" href="#_4-将-sandbox-image-镜像源设置为阿里云-google-containers-镜像源-所有节点" aria-hidden="true">#</a> 4）将 sandbox_image 镜像源设置为阿里云 google_containers 镜像源（所有节点）</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 导出默认配置，config.toml这个文件默认是不存在的
containerd config default &gt; /etc/containerd/config.toml
grep sandbox_image  /etc/containerd/config.toml
sed -i &quot;s#k8s.gcr.io/pause#registry.aliyuncs.com/google_containers/pause#g&quot;       /etc/containerd/config.toml
grep sandbox_image  /etc/containerd/config.toml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653044-0.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><h4 id="_5-配置-containerd-cgroup-驱动程序-systemd-所有节点" tabindex="-1"><a class="header-anchor" href="#_5-配置-containerd-cgroup-驱动程序-systemd-所有节点" aria-hidden="true">#</a> 5）配置 containerd cgroup 驱动程序 systemd（所有节点）</h4><blockquote><p>kubernets 自ｖ 1.24.0 后，就不再使用 docker.shim，替换采用 containerd 作为容器运行时端点。因此需要安装 containerd（在 docker 的基础下安装），上面安装 docker 的时候就自动安装了 containerd 了。这里的 docker 只是作为客户端而已。容器引擎还是 containerd。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sed -i &#39;s#SystemdCgroup = false#SystemdCgroup = true#g&#39; /etc/containerd/config.toml
# 应用所有更改后,重新启动containerd
systemctl restart containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-开始安装-kubeadm-kubelet-和-kubectl-master-节点" tabindex="-1"><a class="header-anchor" href="#_6-开始安装-kubeadm-kubelet-和-kubectl-master-节点" aria-hidden="true">#</a> 6）开始安装 kubeadm，kubelet 和 kubectl（master 节点）</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 不指定版本就是最新版本，当前最新版就是1.24.1
yum install -y kubelet-1.24.1  kubeadm-1.24.1  kubectl-1.24.1 --disableexcludes=kubernetes
# disableexcludes=kubernetes：禁掉除了这个kubernetes之外的别的仓库
# 设置为开机自启并现在立刻启动服务 --now：立刻启动服务
systemctl enable --now kubelet

# 查看状态，这里需要等待一段时间再查看服务状态，启动会有点慢
systemctl status kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653044-1.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>查看日志，发现有报错，报错如下：</p><blockquote><p>kubelet.service: Main process exited, code=exited, status=1/FAILURE kubelet.service: Failed with result &#39;exit-code&#39;.</p></blockquote><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653045-2.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><blockquote><p>【解释】重新安装（或第一次安装）k8s，未经过 kubeadm init 或者 kubeadm join 后，kubelet 会不断重启，这个是正常现象……，执行 init 或 join 后问题会自动解决，对此官网有如下描述，也就是此时不用理会 kubelet.service。</p></blockquote><p>查看版本</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl version
yum info kubeadm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653045-3.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><h4 id="_7-使用-kubeadm-初始化集群-master-节点" tabindex="-1"><a class="header-anchor" href="#_7-使用-kubeadm-初始化集群-master-节点" aria-hidden="true">#</a> 7）使用 kubeadm 初始化集群（master 节点）</h4><p>最好提前把镜像下载好，这样安装快</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker pull registry.aliyuncs.com/google_containers/kube-apiserver:v1.24.1
docker pull registry.aliyuncs.com/google_containers/kube-controller-manager:v1.24.1
docker pull registry.aliyuncs.com/google_containers/kube-scheduler:v1.24.1
docker pull registry.aliyuncs.com/google_containers/kube-proxy:v1.24.1
docker pull registry.aliyuncs.com/google_containers/pause:3.7
docker pull registry.aliyuncs.com/google_containers/etcd:3.5.3-0
docker pull registry.aliyuncs.com/google_containers/coredns:v1.8.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>集群初始化</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubeadm init \\
  --apiserver-advertise-address=192.168.0.113 \\
  --image-repository registry.aliyuncs.com/google_containers \\
  --control-plane-endpoint=cluster-endpoint \\
  --kubernetes-version v1.24.1 \\
  --service-cidr=10.1.0.0/16 \\
  --pod-network-cidr=10.244.0.0/16 \\
  --v=5
# –image-repository string：    这个用于指定从什么位置来拉取镜像（1.13版本才有的），默认值是k8s.gcr.io，我们将其指定为国内镜像地址：registry.aliyuncs.com/google_containers
# –kubernetes-version string：  指定kubenets版本号，默认值是stable-1，会导致从https://dl.k8s.io/release/stable-1.txt下载最新的版本号，我们可以将其指定为固定版本（v1.22.1）来跳过网络请求。
# –apiserver-advertise-address  指明用 Master 的哪个 interface 与 Cluster 的其他节点通信。如果 Master 有多个 interface，建议明确指定，如果不指定，kubeadm 会自动选择有默认网关的 interface。这里的ip为master节点ip，记得更换。
# –pod-network-cidr             指定 Pod 网络的范围。Kubernetes 支持多种网络方案，而且不同网络方案对  –pod-network-cidr有自己的要求，这里设置为10.244.0.0/16 是因为我们将使用 flannel 网络方案，必须设置成这个 CIDR。
# --control-plane-endpoint     cluster-endpoint 是映射到该 IP 的自定义 DNS 名称，这里配置hosts映射：192.168.0.113   cluster-endpoint。 这将允许你将 --control-plane-endpoint=cluster-endpoint 传递给 kubeadm init，并将相同的 DNS 名称传递给 kubeadm join。 稍后你可以修改 cluster-endpoint 以指向高可用性方案中的负载均衡器的地址。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>【温馨提示】kubeadm 不支持将没有 --control-plane-endpoint 参数的单个控制平面集群转换为高可用性集群。</p></blockquote><p>重置再初始化</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubeadm reset
rm -fr ~/.kube/  /etc/kubernetes/* var/lib/etcd/*
kubeadm init \\
  --apiserver-advertise-address=192.168.0.113  \\
  --image-repository registry.aliyuncs.com/google_containers \\
  --control-plane-endpoint=cluster-endpoint \\
  --kubernetes-version v1.24.1 \\
  --service-cidr=10.1.0.0/16 \\
  --pod-network-cidr=10.244.0.0/16 \\
  --v=5
# –image-repository string：    这个用于指定从什么位置来拉取镜像（1.13版本才有的），默认值是k8s.gcr.io，我们将其指定为国内镜像地址：registry.aliyuncs.com/google_containers
# –kubernetes-version string：  指定kubenets版本号，默认值是stable-1，会导致从https://dl.k8s.io/release/stable-1.txt下载最新的版本号，我们可以将其指定为固定版本（v1.22.1）来跳过网络请求。
# –apiserver-advertise-address  指明用 Master 的哪个 interface 与 Cluster 的其他节点通信。如果 Master 有多个 interface，建议明确指定，如果不指定，kubeadm 会自动选择有默认网关的 interface。这里的ip为master节点ip，记得更换。
# –pod-network-cidr             指定 Pod 网络的范围。Kubernetes 支持多种网络方案，而且不同网络方案对  –pod-network-cidr有自己的要求，这里设置为10.244.0.0/16 是因为我们将使用 flannel 网络方案，必须设置成这个 CIDR。
# --control-plane-endpoint     cluster-endpoint 是映射到该 IP 的自定义 DNS 名称，这里配置hosts映射：192.168.0.113   cluster-endpoint。 这将允许你将 --control-plane-endpoint=cluster-endpoint 传递给 kubeadm init，并将相同的 DNS 名称传递给 kubeadm join。 稍后你可以修改 cluster-endpoint 以指向高可用性方案中的负载均衡器的地址。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置环境变量</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config

# 临时生效（退出当前窗口重连环境变量失效）
export KUBECONFIG=/etc/kubernetes/admin.conf
# 永久生效（推荐）
echo &quot;export KUBECONFIG=/etc/kubernetes/admin.conf&quot; &gt;&gt; ~/.bash_profile
source  ~/.bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653045-4.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>发现节点还是有问题，查看日志 /var/log/messages</p><blockquote><p>&quot;Container runtime network not ready&quot; networkReady=&quot;NetworkReady=false reason:NetworkPluginNotReady message:Network plugin returns error: cni plugin not initialized&quot;</p></blockquote><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653045-5.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>接下来就是安装 Pod 网络插件</p><h4 id="_8-安装-pod-网络插件-cni-container-network-interface-master" tabindex="-1"><a class="header-anchor" href="#_8-安装-pod-网络插件-cni-container-network-interface-master" aria-hidden="true">#</a> 8）安装 Pod 网络插件（CNI：Container Network Interface）(master)</h4><p>你必须部署一个基于 Pod 网络插件的 容器网络接口 (CNI)，以便你的 Pod 可以相互通信。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 最好提前下载镜像（所有节点）
docker pull quay.io/coreos/flannel:v0.14.0
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果上面安装失败，则下载我百度里的，离线安装</p>`,63),p={href:"https://pan.baidu.com/s/1HB9xuO3bssAW7v5HzpXkeQ",target:"_blank",rel:"noopener noreferrer"},g=e("br",null,null,-1),h=d(`<p>再查看 node 节点，就已经正常了</p><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653045-6.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><h4 id="_9-node-节点加入-k8s-集群" tabindex="-1"><a class="header-anchor" href="#_9-node-节点加入-k8s-集群" aria-hidden="true">#</a> 9）node 节点加入 k8s 集群</h4><p>先安装 kubelet</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install -y kubelet kubeadm kubectl --disableexcludes=kubernetes
# 设置为开机自启并现在立刻启动服务 --now：立刻启动服务
systemctl enable --now kubelet
systemctl status kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果没有令牌，可以通过在控制平面节点上运行以下命令来获取令牌：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubeadm token list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>默认情况下，令牌会在24小时后过期。如果要在当前令牌过期后将节点加入集群， 则可以通过在控制平面节点上运行以下命令来创建新令牌：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubeadm token create
# 再查看
kubeadm token list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你没有 –discovery-token-ca-cert-hash 的值，则可以通过在控制平面节点上执行以下命令链来获取它：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>openssl x509 -pubkey -in /etc/kubernetes/pki/ca.crt | openssl rsa -pubin -outform der 2&gt;/dev/null | openssl dgst -sha256 -hex | sed &#39;s/^.* //&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果执行 kubeadm init 时没有记录下加入集群的命令，可以通过以下命令重新创建（推荐）一般不用上面的分别获取 token 和 ca-cert-hash 方式，执行以下命令一气呵成：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubeadm token create --print-join-command
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这里需要等待一段时间，再查看节点节点状态，因为需要安装 kube-proxy 和 flannel。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl get pods -A
kubectl get nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653045-7.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><h4 id="_10-配置-ipvs" tabindex="-1"><a class="header-anchor" href="#_10-配置-ipvs" aria-hidden="true">#</a> 10）配置 IPVS</h4><p>【问题】集群内无法 ping 通 ClusterIP（或 ServiceName）</p><p>1、加载 ip_vs 相关内核模块</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>modprobe -- ip_vs
modprobe -- ip_vs_sh
modprobe -- ip_vs_rr
modprobe -- ip_vs_wrr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有节点验证开启了 ipvs：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lsmod |grep ip_vs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、安装 ipvsadm 工具</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install ipset ipvsadm -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、编辑 kube-proxy 配置文件，mode 修改成 ipvs</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl edit  configmap -n kube-system  kube-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653045-8.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>4、重启 kube-proxy</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 先查看
kubectl get pod -n kube-system | grep kube-proxy
# 再delete让它自拉起
kubectl get pod -n kube-system | grep kube-proxy |awk &#39;{system(&quot;kubectl delete pod &quot;$1&quot; -n kube-system&quot;)}&#39;
# 再查看
kubectl get pod -n kube-system | grep kube-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653045-9.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>5、查看 ipvs 转发规则</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ipvsadm -Ln
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653045-10.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><h4 id="_11-集群高可用配置" tabindex="-1"><a class="header-anchor" href="#_11-集群高可用配置" aria-hidden="true">#</a> 11）集群高可用配置</h4><p>配置高可用（HA）Kubernetes 集群实现的两种方案：</p><p>使用堆叠（stacked）控制平面节点，其中 etcd 节点与控制平面节点共存（本章使用），架构图如下：</p><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653045-11.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>使用外部 etcd 节点，其中 etcd 在与控制平面不同的节点上运行，架构图如下：</p><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653045-12.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>这里新增一台机器作为另外一个 master 节点：192.168.0.116 配置跟上面 master 节点一样。只是不需要最后一步初始化了。</p><p>1、修改主机名和配置 hosts</p><p>所有节点都统一如下配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 在192.168.0.113执行
hostnamectl set-hostname  k8s-master-168-0-113
# 在192.168.0.114执行
hostnamectl set-hostname k8s-node1-168-0-114
# 在192.168.0.115执行
hostnamectl set-hostname k8s-node2-168-0-115
# 在192.168.0.116执行
hostnamectl set-hostname k8s-master2-168-0-116
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置 hosts</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat &gt;&gt; /etc/hosts&lt;&lt;EOF
192.168.0.113 k8s-master-168-0-113 cluster-endpoint
192.168.0.114 k8s-node1-168-0-114
192.168.0.115 k8s-node2-168-0-115
192.168.0.116 k8s-master2-168-0-116
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、配置 ssh 互信</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 直接一直回车就行
ssh-keygen

ssh-copy-id -i ~/.ssh/id_rsa.pub root@k8s-master-168-0-113
ssh-copy-id -i ~/.ssh/id_rsa.pub root@k8s-node1-168-0-114
ssh-copy-id -i ~/.ssh/id_rsa.pub root@k8s-node2-168-0-115
ssh-copy-id -i ~/.ssh/id_rsa.pub root@k8s-master2-168-0-116
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、时间同步</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum install chrony -y
systemctl start chronyd
systemctl enable chronyd
chronyc sources
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关闭防火墙</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>牛逼啊！接私活必备的 N 个开源项目！赶快收藏
systemctl stop firewalld
systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、关闭 swap</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 临时关闭；关闭swap主要是为了性能考虑
swapoff -a
# 可以通过这个命令查看swap是否关闭了
free
# 永久关闭
sed -ri &#39;s/.*swap.*/#&amp;/&#39; /etc/fstab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、禁用 SELinux</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 临时关闭
setenforce 0
# 永久禁用
sed -i &#39;s/^SELINUX=enforcing$/SELINUX=disabled/&#39; /etc/selinux/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、允许 iptables 检查桥接流量（可选，所有节点）</p><p>若要显式加载此模块，请运行 sudo modprobe br_netfilter，通过运行 lsmod | grep br_netfilter 来验证 br_netfilter 模块是否已加载，</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo modprobe br_netfilter
lsmod | grep br_netfilter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>为了让 Linux 节点的 iptables 能够正确查看桥接流量，请确认 sysctl 配置中的 net.bridge.bridge-nf-call-iptables 设置为 1。例如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat &lt;&lt;EOF | sudo tee /etc/modules-load.d/k8s.conf
overlay
br_netfilter
EOF

sudo modprobe overlay
sudo modprobe br_netfilter

# 设置所需的 sysctl 参数，参数在重新启动后保持不变
cat &lt;&lt;EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-iptables  = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.ipv4.ip_forward                 = 1
EOF

# 应用 sysctl 参数而不重新启动
sudo sysctl --system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7、安装容器 docker（所有节点）</p><blockquote><p>提示：v1.24 之前的 Kubernetes 版本包括与 Docker Engine 的直接集成，使用名为 dockershim 的组件。这种特殊的直接整合不再是 Kubernetes 的一部分 （这次删除被作为 v1.20 发行版本的一部分宣布）。你可以阅读检查 Dockershim 弃用是否会影响你 以了解此删除可能会如何影响你。要了解如何使用 dockershim 进行迁移，请参阅从 dockershim 迁移。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 配置yum源
cd /etc/yum.repos.d ; mkdir bak; mv CentOS-Linux-* bak/
# centos7
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
# centos8
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-8.repo

# 安装yum-config-manager配置工具
yum -y install yum-utils
# 设置yum源
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
# 安装docker-ce版本
yum install -y docker-ce
# 启动
systemctl start docker
# 开机自启
systemctl enable docker
# 查看版本号
docker --version
# 查看版本具体信息
docker version

# Docker镜像源设置
# 修改文件 /etc/docker/daemon.json，没有这个文件就创建
# 添加以下内容后，重启docker服务：
cat &gt;/etc/docker/daemon.json&lt;&lt;EOF
{
   &quot;registry-mirrors&quot;: [&quot;http://hub-mirror.c.163.com&quot;]
}
EOF
# 加载
systemctl reload docker

# 查看
systemctl status docker containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>【温馨提示】dockerd 实际真实调用的还是 containerd 的 api 接口，containerd 是 dockerd 和 runC 之间的一个中间交流组件。所以启动 docker 服务的时候，也会启动 containerd 服务的。</p></blockquote><h4 id="_8、配置-k8s-yum-源-所有节点" tabindex="-1"><a class="header-anchor" href="#_8、配置-k8s-yum-源-所有节点" aria-hidden="true">#</a> 8、配置 k8s yum 源（所有节点）</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat &gt; /etc/yum.repos.d/kubernetes.repo &lt;&lt; EOF
[k8s]
name=k8s
enabled=1
gpgcheck=0
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9、将-sandbox-image-镜像源设置为阿里云-google-containers-镜像源-所有节点" tabindex="-1"><a class="header-anchor" href="#_9、将-sandbox-image-镜像源设置为阿里云-google-containers-镜像源-所有节点" aria-hidden="true">#</a> 9、将 sandbox_image 镜像源设置为阿里云 google_containers 镜像源（所有节点）</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 导出默认配置，config.toml这个文件默认是不存在的
containerd config default &gt; /etc/containerd/config.toml
grep sandbox_image  /etc/containerd/config.toml
sed -i &quot;s#k8s.gcr.io/pause#registry.aliyuncs.com/google_containers/pause#g&quot;       /etc/containerd/config.toml
grep sandbox_image  /etc/containerd/config.toml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10、配置-containerd-cgroup-驱动程序-systemd" tabindex="-1"><a class="header-anchor" href="#_10、配置-containerd-cgroup-驱动程序-systemd" aria-hidden="true">#</a> 10、配置 containerd cgroup 驱动程序 systemd</h4><blockquote><p>kubernets 自ｖ 1.24.0 后，就不再使用 docker.shim，替换采用 containerd 作为容器运行时端点。因此需要安装 containerd（在 docker 的基础下安装），上面安装 docker 的时候就自动安装了 containerd 了。这里的 docker 只是作为客户端而已。容器引擎还是 containerd。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sed -i &#39;s#SystemdCgroup = false#SystemdCgroup = true#g&#39; /etc/containerd/config.toml
# 应用所有更改后,重新启动containerd
systemctl restart containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_11、开始安装-kubeadm-kubelet-和-kubectl-master-节点" tabindex="-1"><a class="header-anchor" href="#_11、开始安装-kubeadm-kubelet-和-kubectl-master-节点" aria-hidden="true">#</a> 11、开始安装 kubeadm，kubelet 和 kubectl（master 节点）</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 不指定版本就是最新版本，当前最新版就是1.24.1
yum install -y kubelet-1.24.1  kubeadm-1.24.1  kubectl-1.24.1 --disableexcludes=kubernetes
# disableexcludes=kubernetes：禁掉除了这个kubernetes之外的别的仓库
# 设置为开机自启并现在立刻启动服务 --now：立刻启动服务
systemctl enable --now kubelet

# 查看状态，这里需要等待一段时间再查看服务状态，启动会有点慢
systemctl status kubelet

# 查看版本

kubectl version
yum info kubeadm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_12、加入-k8s-集群" tabindex="-1"><a class="header-anchor" href="#_12、加入-k8s-集群" aria-hidden="true">#</a> 12、加入 k8s 集群</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 证如果过期了，可以使用下面命令生成新证书上传，这里会打印出certificate key，后面会用到
kubeadm init phase upload-certs --upload-certs
# 你还可以在 【init】期间指定自定义的 --certificate-key，以后可以由 join 使用。 要生成这样的密钥，可以使用以下命令（这里不执行，就用上面那个自命令就可以了）：
kubeadm certs certificate-key

kubeadm token create --print-join-command

kubeadm join cluster-endpoint:6443 --token wswrfw.fc81au4yvy6ovmhh --discovery-token-ca-cert-hash sha256:43a3924c25104d4393462105639f6a02b8ce284728775ef9f9c30eed8e0abc0f --control-plane --certificate-key 8d2709697403b74e35d05a420bd2c19fd8c11914eb45f2ff22937b245bed5b68

# --control-plane 标志通知 kubeadm join 创建一个新的控制平面。加入master必须加这个标记
# --certificate-key ... 将导致从集群中的 kubeadm-certs Secret 下载控制平面证书并使用给定的密钥进行解密。这里的值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653046-13.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>根据提示执行如下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl get nodes
kubectl get pods -A -owide
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653046-14.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>虽然现在已经有两个 master 了，但是对外还是只能有一个入口的，所以还得要一个负载均衡器，如果一个 master 挂了，会自动切到另外一个 master 节点。</p><h4 id="_12-部署-nginx-keepalived-高可用负载均衡器" tabindex="-1"><a class="header-anchor" href="#_12-部署-nginx-keepalived-高可用负载均衡器" aria-hidden="true">#</a> 12）部署 Nginx+Keepalived 高可用负载均衡器</h4><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653046-15.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>1、安装 Nginx 和 Keepalived</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 在两个master节点上执行
yum install nginx keepalived -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2、Nginx 配置</p><p>在两个 master 节点配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat &gt; /etc/nginx/nginx.conf &lt;&lt; &quot;EOF&quot;
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;
include /usr/share/nginx/modules/*.conf;
events {
    worker_connections 1024;
}
# 四层负载均衡，为两台Master apiserver组件提供负载均衡
stream {
    log_format  main  &#39;$remote_addr $upstream_addr - [$time_local] $status $upstream_bytes_sent&#39;;
    access_log  /var/log/nginx/k8s-access.log  main;
    upstream k8s-apiserver {
    # Master APISERVER IP:PORT
       server 192.168.0.113:6443;
    # Master2 APISERVER IP:PORT
       server 192.168.0.116:6443;
    }
    server {
       listen 16443;
       proxy_pass k8s-apiserver;
    }
}

http {
    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;
    access_log  /var/log/nginx/access.log  main;
    sendfile            on;
    tcp_nopush          on;
    tcp_nodelay         on;
    keepalive_timeout   65;
    types_hash_max_size 2048;
    include             /etc/nginx/mime.types;
    default_type        application/octet-stream;
    server {
        listen       80 default_server;
        server_name  _;

        location / {
        }
    }
}
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>【温馨提示】如果只保证高可用，不配置 k8s-apiserver 负载均衡的话，可以不装 nginx，但是最好还是配置一下 k8s-apiserver 负载均衡。</p></blockquote><p>3、Keepalived 配置（master）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat &gt; /etc/keepalived/keepalived.conf &lt;&lt; EOF
global_defs {
   notification_email {
     acassen@firewall.loc
     failover@firewall.loc
     sysadmin@firewall.loc
   }
   notification_email_from fage@qq.com
   smtp_server 127.0.0.1
   smtp_connect_timeout 30
   router_id NGINX_MASTER
}
vrrp_script check_nginx {
    script &quot;/etc/keepalived/check_nginx.sh&quot;
}
vrrp_instance VI_1 {
    state MASTER
    interface ens33
    virtual_router_id 51 # VRRP 路由 ID实例，每个实例是唯一的
    priority 100    # 优先级，备服务器设置 90
    advert_int 1    # 指定VRRP 心跳包通告间隔时间，默认1秒
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    # 虚拟IP
    virtual_ipaddress {
        192.168.0.120/24
    }
    track_script {
        check_nginx
    }
}
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vrrp_script：指定检查 nginx 工作状态脚本（根据 nginx 状态判断是否故障转移）<br> virtual_ipaddress：虚拟 IP（VIP）</p><p>检查 nginx 状态脚本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat &gt; /etc/keepalived/check_nginx.sh  &lt;&lt; &quot;EOF&quot;
#!/bin/bash
count=$(ps -ef |grep nginx |egrep -cv &quot;grep|$$&quot;)

if [ &quot;$count&quot; -eq 0 ];then
    exit 1
else
    exit 0
fi
EOF
chmod +x /etc/keepalived/check_nginx.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、Keepalived 配置（backup）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat &gt; /etc/keepalived/keepalived.conf &lt;&lt; EOF
global_defs {
   notification_email {
     acassen@firewall.loc
     failover@firewall.loc
     sysadmin@firewall.loc
   }
   notification_email_from fage@qq.com
   smtp_server 127.0.0.1
   smtp_connect_timeout 30
   router_id NGINX_BACKUP
}
vrrp_script check_nginx {
    script &quot;/etc/keepalived/check_nginx.sh&quot;
}
vrrp_instance VI_1 {
    state BACKUP
    interface ens33
    virtual_router_id 51 # VRRP 路由 ID实例，每个实例是唯一的
    priority 90
    advert_int 1
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    virtual_ipaddress {
        192.168.0.120/24
    }
    track_script {
        check_nginx
    }
}
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查 nginx 状态脚本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat &gt; /etc/keepalived/check_nginx.sh  &lt;&lt; &quot;EOF&quot;
#!/bin/bash
count=$(ps -ef |grep nginx |egrep -cv &quot;grep|$$&quot;)

if [ &quot;$count&quot; -eq 0 ];then
    exit 1
else
    exit 0
fi
EOF
chmod +x /etc/keepalived/check_nginx.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、启动并设置开机启动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl daemon-reload
systemctl restart nginx &amp;&amp; systemctl enable nginx &amp;&amp; systemctl status nginx
systemctl restart keepalived &amp;&amp; systemctl enable keepalived &amp;&amp; systemctl status keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 VIP</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ip a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653046-16.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>6、修改 hosts（所有节点）</p><p>将 cluster-endpoint 之前执行的 ip 修改执行现在的 VIP</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>192.168.0.113 k8s-master-168-0-113
192.168.0.114 k8s-node1-168-0-114
192.168.0.115 k8s-node2-168-0-115
192.168.0.116 k8s-master2-168-0-116
192.168.0.120 cluster-endpoint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7、测试验证</p><p>查看版本（负载均衡测试验证）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -k https://cluster-endpoint:16443/version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653046-17.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>高可用测试验证，将 k8s-master-168-0-113 节点关机</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>shutdown -h now
curl -k https://cluster-endpoint:16443/version
kubectl get nodes -A
kubectl get pods -A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>【温馨提示】堆叠集群存在耦合失败的风险。如果一个节点发生故障，则 etcd 成员和控制平面实例都将丢失， 并且冗余会受到影响。你可以通过添加更多控制平面节点来降低此风险。另外，搜索公众号编程技术圈后台回复“1024”，获取一份惊喜礼包。</p></blockquote><h3 id="三、k8s-管理平台-dashboard-环境部署" tabindex="-1"><a class="header-anchor" href="#三、k8s-管理平台-dashboard-环境部署" aria-hidden="true">#</a> 三、k8s 管理平台 dashboard 环境部署</h3><h4 id="_1-dashboard-部署" tabindex="-1"><a class="header-anchor" href="#_1-dashboard-部署" aria-hidden="true">#</a> 1）dashboard 部署</h4>`,116),x={href:"https://github.com/kubernetes/dashboard",target:"_blank",rel:"noopener noreferrer"},k=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.6.0/aio/deploy/recommended.yaml
kubectl get pods -n kubernetes-dashboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是这个只能内部访问，所以要外部访问，要么部署 ingress，要么就是设置 service NodePort 类型。这里选择 service 暴露端口。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://raw.githubusercontent.com/kubernetes/dashboard/v2.6.0/aio/deploy/recommended.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改后的内容如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Copyright 2017 The Kubernetes Authors.
#
# Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an &quot;AS IS&quot; BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

apiVersion: v1
kind: Namespace
metadata:
  name: kubernetes-dashboard

---

apiVersion: v1
kind: ServiceAccount
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard
  namespace: kubernetes-dashboard

---

kind: Service
apiVersion: v1
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard
  namespace: kubernetes-dashboard
spec:
  type: NodePort
  ports:
    - port: 443
      targetPort: 8443
      nodePort: 31443
  selector:
    k8s-app: kubernetes-dashboard

---

apiVersion: v1
kind: Secret
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard-certs
  namespace: kubernetes-dashboard
type: Opaque

---

apiVersion: v1
kind: Secret
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard-csrf
  namespace: kubernetes-dashboard
type: Opaque
data:
  csrf: &quot;&quot;

---

apiVersion: v1
kind: Secret
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard-key-holder
  namespace: kubernetes-dashboard
type: Opaque

---

kind: ConfigMap
apiVersion: v1
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard-settings
  namespace: kubernetes-dashboard

---

kind: Role
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard
  namespace: kubernetes-dashboard
rules:
  # Allow Dashboard to get, update and delete Dashboard exclusive secrets.
  - apiGroups: [&quot;&quot;]
    resources: [&quot;secrets&quot;]
    resourceNames: [&quot;kubernetes-dashboard-key-holder&quot;, &quot;kubernetes-dashboard-certs&quot;, &quot;kubernetes-dashboard-csrf&quot;]
    verbs: [&quot;get&quot;, &quot;update&quot;, &quot;delete&quot;]
    # Allow Dashboard to get and update &#39;kubernetes-dashboard-settings&#39; config map.
  - apiGroups: [&quot;&quot;]
    resources: [&quot;configmaps&quot;]
    resourceNames: [&quot;kubernetes-dashboard-settings&quot;]
    verbs: [&quot;get&quot;, &quot;update&quot;]
    # Allow Dashboard to get metrics.
  - apiGroups: [&quot;&quot;]
    resources: [&quot;services&quot;]
    resourceNames: [&quot;heapster&quot;, &quot;dashboard-metrics-scraper&quot;]
    verbs: [&quot;proxy&quot;]
  - apiGroups: [&quot;&quot;]
    resources: [&quot;services/proxy&quot;]
    resourceNames: [&quot;heapster&quot;, &quot;http:heapster:&quot;, &quot;https:heapster:&quot;, &quot;dashboard-metrics-scraper&quot;, &quot;http:dashboard-metrics-scraper&quot;]
    verbs: [&quot;get&quot;]

---

kind: ClusterRole
apiVersion: rbac.authorization.k8s.io/v1
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard
rules:
  # Allow Metrics Scraper to get metrics from the Metrics server
  - apiGroups: [&quot;metrics.k8s.io&quot;]
    resources: [&quot;pods&quot;, &quot;nodes&quot;]
    verbs: [&quot;get&quot;, &quot;list&quot;, &quot;watch&quot;]

---

apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard
  namespace: kubernetes-dashboard
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: kubernetes-dashboard
subjects:
  - kind: ServiceAccount
    name: kubernetes-dashboard
    namespace: kubernetes-dashboard

---

apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: kubernetes-dashboard
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: kubernetes-dashboard
subjects:
  - kind: ServiceAccount
    name: kubernetes-dashboard
    namespace: kubernetes-dashboard

---

kind: Deployment
apiVersion: apps/v1
metadata:
  labels:
    k8s-app: kubernetes-dashboard
  name: kubernetes-dashboard
  namespace: kubernetes-dashboard
spec:
  replicas: 1
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      k8s-app: kubernetes-dashboard
  template:
    metadata:
      labels:
        k8s-app: kubernetes-dashboard
    spec:
      securityContext:
        seccompProfile:
          type: RuntimeDefault
      containers:
        - name: kubernetes-dashboard
          image: kubernetesui/dashboard:v2.6.0
          imagePullPolicy: Always
          ports:
            - containerPort: 8443
              protocol: TCP
          args:
            - --auto-generate-certificates
            - --namespace=kubernetes-dashboard
            # Uncomment the following line to manually specify Kubernetes API server Host
            # If not specified, Dashboard will attempt to auto discover the API server and connect
            # to it. Uncomment only if the default does not work.
            # - --apiserver-host=http://my-address:port
          volumeMounts:
            - name: kubernetes-dashboard-certs
              mountPath: /certs
              # Create on-disk volume to store exec logs
            - mountPath: /tmp
              name: tmp-volume
          livenessProbe:
            httpGet:
              scheme: HTTPS
              path: /
              port: 8443
            initialDelaySeconds: 30
            timeoutSeconds: 30
          securityContext:
            allowPrivilegeEscalation: false
            readOnlyRootFilesystem: true
            runAsUser: 1001
            runAsGroup: 2001
      volumes:
        - name: kubernetes-dashboard-certs
          secret:
            secretName: kubernetes-dashboard-certs
        - name: tmp-volume
          emptyDir: {}
      serviceAccountName: kubernetes-dashboard
      nodeSelector:
        &quot;kubernetes.io/os&quot;: linux
      # Comment the following tolerations if Dashboard must not be deployed on master
      tolerations:
        - key: node-role.kubernetes.io/master
          effect: NoSchedule

---

kind: Service
apiVersion: v1
metadata:
  labels:
    k8s-app: dashboard-metrics-scraper
  name: dashboard-metrics-scraper
  namespace: kubernetes-dashboard
spec:
  ports:
    - port: 8000
      targetPort: 8000
  selector:
    k8s-app: dashboard-metrics-scraper

---

kind: Deployment
apiVersion: apps/v1
metadata:
  labels:
    k8s-app: dashboard-metrics-scraper
  name: dashboard-metrics-scraper
  namespace: kubernetes-dashboard
spec:
  replicas: 1
  revisionHistoryLimit: 10
  selector:
    matchLabels:
      k8s-app: dashboard-metrics-scraper
  template:
    metadata:
      labels:
        k8s-app: dashboard-metrics-scraper
    spec:
      securityContext:
        seccompProfile:
          type: RuntimeDefault
      containers:
        - name: dashboard-metrics-scraper
          image: kubernetesui/metrics-scraper:v1.0.8
          ports:
            - containerPort: 8000
              protocol: TCP
          livenessProbe:
            httpGet:
              scheme: HTTP
              path: /
              port: 8000
            initialDelaySeconds: 30
            timeoutSeconds: 30
          volumeMounts:
          - mountPath: /tmp
            name: tmp-volume
          securityContext:
            allowPrivilegeEscalation: false
            readOnlyRootFilesystem: true
            runAsUser: 1001
            runAsGroup: 2001
      serviceAccountName: kubernetes-dashboard
      nodeSelector:
        &quot;kubernetes.io/os&quot;: linux
      # Comment the following tolerations if Dashboard must not be deployed on master
      tolerations:
        - key: node-role.kubernetes.io/master
          effect: NoSchedule
      volumes:
        - name: tmp-volume
          emptyDir: {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653046-18.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>重新部署</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl delete -f recommended.yaml
kubectl apply -f recommended.yaml
kubectl get svc,pods -n kubernetes-dashboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653046-19.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><h4 id="_2-创建登录用户" tabindex="-1"><a class="header-anchor" href="#_2-创建登录用户" aria-hidden="true">#</a> 2）创建登录用户</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat &gt;ServiceAccount.yaml&lt;&lt;EOF
apiVersion: v1
kind: ServiceAccount
metadata:
  name: admin-user
  namespace: kubernetes-dashboard
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: admin-user
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: cluster-admin
subjects:
- kind: ServiceAccount
  name: admin-user
  namespace: kubernetes-dashboard
EOF
kubectl apply -f ServiceAccount.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建并获取登录 token</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl -n kubernetes-dashboard create token admin-user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-配置-hosts-登录-dashboard-web" tabindex="-1"><a class="header-anchor" href="#_3-配置-hosts-登录-dashboard-web" aria-hidden="true">#</a> 3）配置 hosts 登录 dashboard web</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>192.168.0.120 cluster-endpoint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),f={href:"https://cluster-endpoint:31443",target:"_blank",rel:"noopener noreferrer"},y=e("figure",null,[e("img",{src:"https://static.linch.eu.org/blogImage/640-1667642653046-20.png",alt:"K8S高可用部署",tabindex:"0",loading:"lazy"}),e("figcaption",null,"K8S高可用部署")],-1),_=e("p",null,"输入上面创建的 token 登录",-1),q=e("figure",null,[e("img",{src:"https://static.linch.eu.org/blogImage/640-1667642653046-21.png",alt:"K8S高可用部署",tabindex:"0",loading:"lazy"}),e("figcaption",null,"K8S高可用部署")],-1),S=e("h3",{id:"四、k8s-镜像仓库-harbor-环境部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#四、k8s-镜像仓库-harbor-环境部署","aria-hidden":"true"},"#"),n(" 四、k8s 镜像仓库 harbor 环境部署")],-1),w={href:"https://github.com/helm/helm/releases",target:"_blank",rel:"noopener noreferrer"},C=e("br",null,null,-1),K=d(`<h4 id="_1-安装-helm" tabindex="-1"><a class="header-anchor" href="#_1-安装-helm" aria-hidden="true">#</a> 1）安装 helm</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir -p /opt/k8s/helm &amp;&amp; cd /opt/k8s/helm
wget https://get.helm.sh/helm-v3.9.0-rc.1-linux-amd64.tar.gz
tar -xf helm-v3.9.0-rc.1-linux-amd64.tar.gz
ln -s /opt/k8s/helm/linux-amd64/helm /usr/bin/helm
helm version
helm help
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-配置-hosts" tabindex="-1"><a class="header-anchor" href="#_2-配置-hosts" aria-hidden="true">#</a> 2）配置 hosts</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>192.168.0.120 myharbor.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-创建-stl-证书" tabindex="-1"><a class="header-anchor" href="#_3-创建-stl-证书" aria-hidden="true">#</a> 3）创建 stl 证书</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir /opt/k8s/helm/stl &amp;&amp; cd /opt/k8s/helm/stl
# 生成 CA 证书私钥
openssl genrsa -out ca.key 4096
# 生成 CA 证书
openssl req -x509 -new -nodes -sha512 -days 3650 \\
 -subj &quot;/C=CN/ST=Guangdong/L=Shenzhen/O=harbor/OU=harbor/CN=myharbor.com&quot; \\
 -key ca.key \\
 -out ca.crt
# 创建域名证书，生成私钥
openssl genrsa -out myharbor.com.key 4096
# 生成证书签名请求 CSR
openssl req -sha512 -new \\
    -subj &quot;/C=CN/ST=Guangdong/L=Shenzhen/O=harbor/OU=harbor/CN=myharbor.com&quot; \\
    -key myharbor.com.key \\
    -out myharbor.com.csr
# 生成 x509 v3 扩展
cat &gt; v3.ext &lt;&lt;-EOF
authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
extendedKeyUsage = serverAuth
subjectAltName = @alt_names

[alt_names]
DNS.1=myharbor.com
DNS.2=*.myharbor.com
DNS.3=hostname
EOF
#创建 Harbor 访问证书
openssl x509 -req -sha512 -days 3650 \\
    -extfile v3.ext \\
    -CA ca.crt -CAkey ca.key -CAcreateserial \\
    -in myharbor.com.csr \\
    -out myharbor.com.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-安装-ingress" tabindex="-1"><a class="header-anchor" href="#_4-安装-ingress" aria-hidden="true">#</a> 4）安装 ingress</h3>`,7),I={href:"https://kubernetes.github.io/ingress-nginx/",target:"_blank",rel:"noopener noreferrer"},O=e("br",null,null,-1),E={href:"https://github.com/kubernetes/ingress-nginx",target:"_blank",rel:"noopener noreferrer"},N=e("br",null,null,-1),z={href:"https://kubernetes.github.io/ingress-nginx/deploy/",target:"_blank",rel:"noopener noreferrer"},P=d(`<p>1、通过 helm 部署</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>helm upgrade --install ingress-nginx ingress-nginx \\
  --repo https://kubernetes.github.io/ingress-nginx \\
  --namespace ingress-nginx --create-namespace
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、通过 YAML 文件安装（本章使用这个方式安装 ingress）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果下载镜像失败，可以用以下方式修改镜像地址再安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 可以先把镜像下载，再安装
docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/nginx-ingress-controller:v1.2.0
docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/kube-webhook-certgen:v1.1.1

wget https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml
# 修改镜像地址
sed -i &#39;s@k8s.gcr.io/ingress-nginx/controller:v1.2.0\\(.*\\)@registry.cn-hangzhou.aliyuncs.com/google_containers/nginx-ingress-controller:v1.2.0@&#39; deploy.yaml
sed -i &#39;s@k8s.gcr.io/ingress-nginx/kube-webhook-certgen:v1.1.1\\(.*\\)$@registry.cn-hangzhou.aliyuncs.com/google_containers/kube-webhook-certgen:v1.1.1@&#39; deploy.yaml

###还需要修改两地方
#1、kind: 类型修改成DaemonSet，replicas: 注销掉，因为DaemonSet模式会每个节点运行一个pod
#2、在添加一条：hostnetwork：true
#3、把LoadBalancer修改成NodePort
#4、在--validating-webhook-key下面添加- --watch-ingress-without-class=true
#5、设置master节点可调度
kubectl taint nodes k8s-master-168-0-113 node-role.kubernetes.io/control-plane:NoSchedule-
kubectl taint nodes k8s-master2-168-0-116 node-role.kubernetes.io/control-plane:NoSchedule-

kubectl apply -f deploy.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653046-22.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><h4 id="_5-安装-nfs" tabindex="-1"><a class="header-anchor" href="#_5-安装-nfs" aria-hidden="true">#</a> 5）安装 nfs</h4><p>1、所有节点安装 nfs</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum -y install  nfs-utils rpcbind
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、在 master 节点创建共享目录并授权</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir /opt/nfsdata
# 授权共享目录
chmod 666 /opt/nfsdata
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、配置 exports 文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat &gt; /etc/exports&lt;&lt;EOF
/opt/nfsdata *(rw,no_root_squash,no_all_squash,sync)
EOF
# 配置生效
exportfs -r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>exportfs 命令</p><blockquote><p>常用选项<br> -a 全部挂载或者全部卸载<br> -r 重新挂载<br> -u 卸载某一个目录<br> -v 显示共享目录 以下操作在服务端上</p></blockquote><p>4、启动 rpc 和 nfs（客户端只需要启动 rpc 服务）（注意顺序）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl start rpcbind
systemctl start nfs-server
systemctl enable rpcbind
systemctl enable nfs-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>showmount -e
# VIP
showmount -e 192.168.0.120
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>-e 显示 NFS 服务器的共享列表<br> -a 显示本机挂载的文件资源的情况 NFS 资源的情况<br> -v 显示版本号</p></blockquote><p>5、客户端</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 安装
yum -y install  nfs-utils rpcbind
# 启动rpc服务
systemctl start rpcbind
systemctl enable rpcbind
# 创建挂载目录
mkdir /mnt/nfsdata
# 挂载
echo &quot;192.168.0.120:/opt/nfsdata /mnt/nfsdata     nfs    defaults  0 1&quot;&gt;&gt; /etc/fstab
mount -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、rsync 数据同步</p><p>【1】rsync 安装</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 两端都得安装
yum -y install rsync
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>【2】配置<br> 在/etc/rsyncd.conf 中添加</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat &gt;/etc/rsyncd.conf&lt;&lt;EOF
uid = root
gid = root
#禁锢在源目录
use chroot = yes
#监听地址
address = 192.168.0.113
#监听地址tcp/udp 873，可通过cat /etc/services | grep rsync查看
port 873
#日志文件位置
log file = /var/log/rsyncd.log
#存放进程 ID 的文件位置
pid file = /var/run/rsyncd.pid
#允许访问的客户机地址
hosts allow = 192.168.0.0/16
#共享模块名称
[nfsdata]
#源目录的实际路径
path = /opt/nfsdata
comment = Document Root of www.kgc.com
#指定客户端是否可以上传文件，默认对所有模块为 true
read only = yes
#同步时不再压缩的文件类型
dont compress = *.gz *.bz2 *.tgz *.zip *.rar *.z
#授权账户，多个账号以空格分隔，不加则为匿名，不依赖系统账号
auth users = backuper
#存放账户信息的数据文件
secrets file = /etc/rsyncd_users.db
EOF
配置 rsyncd_users.db

cat &gt;/etc/rsyncd_users.db&lt;&lt;EOF
backuper:123456
EOF
#官方要求，最好只是赋权600！
chmod 600 /etc/rsyncd_users.db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【3】rsyncd.conf 常用参数详解</p><p>rsyncd.conf 参数</p><table><thead><tr><th style="text-align:left;">rsyncd.conf 参数</th><th style="text-align:left;">参数说明</th></tr></thead><tbody><tr><td style="text-align:left;">uid=root</td><td style="text-align:left;">rsync 使用的用户。</td></tr><tr><td style="text-align:left;">gid=root</td><td style="text-align:left;">rsync 使用的用户组（用户所在的组）</td></tr><tr><td style="text-align:left;">use chroot=no</td><td style="text-align:left;">如果为 true，daemon 会在客户端传输文件前“chroot to the path”。这是一种安全配置，因为我们大多数都在内网，所以不配也没关系</td></tr><tr><td style="text-align:left;">max connections=200</td><td style="text-align:left;">设置最大连接数，默认 0，意思无限制，负值为关闭这个模块</td></tr><tr><td style="text-align:left;">timeout=400</td><td style="text-align:left;">默认为 0，表示 no timeout，建议 300-600（5-10 分钟）</td></tr><tr><td style="text-align:left;">pid file</td><td style="text-align:left;">rsync daemon 启动后将其进程 pid 写入此文件。如果这个文件存在，rsync 不会覆盖该文件，而是会终止</td></tr><tr><td style="text-align:left;">lock file</td><td style="text-align:left;">指定 lock 文件用来支持“max connections”参数，使得总连接数不会超过限制</td></tr><tr><td style="text-align:left;">log file</td><td style="text-align:left;">不设或者设置错误，rsync 会使用 rsyslog 输出相关日志信息</td></tr><tr><td style="text-align:left;">ignore errors</td><td style="text-align:left;">忽略 I/O 错误</td></tr><tr><td style="text-align:left;">read only=false</td><td style="text-align:left;">指定客户端是否可以上传文件，默认对所有模块为 true</td></tr><tr><td style="text-align:left;">list=false</td><td style="text-align:left;">是否允许客户端可以查看可用模块列表，默认为可以</td></tr><tr><td style="text-align:left;">hosts allow</td><td style="text-align:left;">指定可以联系的客户端主机名或和 ip 地址或地址段，默认情况没有此参数，即都可以连接</td></tr><tr><td style="text-align:left;">hosts deny</td><td style="text-align:left;">指定不可以联系的客户端主机名或 ip 地址或地址段，默认情况没有此参数，即都可以连接</td></tr><tr><td style="text-align:left;">auth users</td><td style="text-align:left;">指定以空格或逗号分隔的用户可以使用哪些模块，用户不需要在本地系统中存在。默认为所有用户无密码访问</td></tr><tr><td style="text-align:left;">secrets file</td><td style="text-align:left;">指定用户名和密码存放的文件，格式；用户名；密码，密码不超过 8 位</td></tr><tr><td style="text-align:left;">[backup]</td><td style="text-align:left;">这里就是模块名称，需用中括号扩起来，起名称没有特殊要求，但最好是有意义的名称，便于以后维护</td></tr><tr><td style="text-align:left;">path</td><td style="text-align:left;">这个模块中，daemon 使用的文件系统或目录，目录的权限要注意和配置文件中的权限一致，否则会遇到读写的问题</td></tr></tbody></table><p>【4】rsync 常用命令参数详解</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rsync --help

rsync [选项]  原始位置   目标位置

常用选项    说明
-r    递归模式，包含目录及子目录中的所有文件
-l    对于符号链接文件仍然复制为符号链接文件
-v    显示同步过程的详细信息
-z    在传输文件时进行压缩goD
-p    保留文件的权限标记
-a    归档模式，递归并保留对象属性，等同于-rlpt
-t    保留文件的时间标记
-g    保留文件的属组标记（仅超级用户使用）
-o    保留文件的属主标记（仅超级用户使用）
-H    保留硬链接文件
-A    保留ACL属性信息
-D    保留设备文件及其他特殊文件
--delete  删除目标位置有而原始位置没有的文件
--checksum  根据对象的校验和来决定是否跳过文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【5】启动服务（数据源机器）</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#rsync监听端口：873
#rsync运行模式：C/S
rsync --daemon --config=/etc/rsyncd.conf
netstat -tnlp|grep :873
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【6】执行命令同步数据</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 在目的机器上执行
# rsync -avz 用户名@源主机地址/源目录 目的目录
rsync -avz root@192.168.0.113:/opt/nfsdata/* /opt/nfsdata/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【7】crontab 定时同步</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 配置crontab， 每五分钟同步一次，这种方式不好
*/5 * * * * rsync -avz root@192.168.0.113:/opt/nfsdata/* /opt/nfsdata/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>【温馨提示】crontab 定时同步数据不太好，可以使用rsync+inotify做数据实时同步，这里篇幅有点长了，先不讲，如果后面有时间会出一篇单独文章来讲。另外，搜索公众号后端架构师后台回复“架构整洁”，获取一份惊喜礼包。</p></blockquote><h3 id="_6-创建-nfs-provisioner-和持久化存储-sc" tabindex="-1"><a class="header-anchor" href="#_6-创建-nfs-provisioner-和持久化存储-sc" aria-hidden="true">#</a> 6）创建 nfs provisioner 和持久化存储 SC</h3><blockquote><p>【温馨提示】这里跟我之前的文章有点不同，之前的方式也不适用新版本。</p></blockquote>`,42),A={href:"https://github.com/kubernetes-sigs/nfs-subdir-external-provisioner",target:"_blank",rel:"noopener noreferrer"},F=d(`<p>helm 部署 nfs-subdir-external-provisioner</p><p>1、添加 helm 仓库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>helm repo add nfs-subdir-external-provisioner https://kubernetes-sigs.github.io/nfs-subdir-external-provisioner/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、helm 安装 nfs provisioner</p><blockquote><p>【温馨提示】默认镜像是无法访问的，这里使用 dockerhub 搜索到的镜像willdockerhub/nfs-subdir-external-provisioner:v4.0.2，还有就是 StorageClass 不分命名空间，所有在所有命名空间下都可以使用。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>helm install nfs-subdir-external-provisioner nfs-subdir-external-provisioner/nfs-subdir-external-provisioner \\
  --namespace=nfs-provisioner \\
  --create-namespace \\
  --set image.repository=willdockerhub/nfs-subdir-external-provisioner \\
  --set image.tag=v4.0.2 \\
  --set replicaCount=2 \\
  --set storageClass.name=nfs-client \\
  --set storageClass.defaultClass=true \\
  --set nfs.server=192.168.0.120 \\
  --set nfs.path=/opt/nfsdata
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>【温馨提示】上面 nfs.server 设置为 VIP，可实现高可用。</p></blockquote><p>3、查看</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl get pods,deploy,sc -n nfs-provisioner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653046-23.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><h4 id="_7-部署-harbor-https-方式" tabindex="-1"><a class="header-anchor" href="#_7-部署-harbor-https-方式" aria-hidden="true">#</a> 7）部署 Harbor（Https 方式）</h4><p>1、创建 Namespace</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl create ns harbor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、创建证书秘钥</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl create secret tls myharbor.com --key myharbor.com.key --cert myharbor.com.crt -n harbor
kubectl get secret myharbor.com -n harbor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3、添加 Chart 库</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>helm repo add harbor https://helm.goharbor.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4、通过 helm 安装 harbor</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>helm install myharbor --namespace harbor harbor/harbor \\
  --set expose.ingress.hosts.core=myharbor.com \\
  --set expose.ingress.hosts.notary=notary.myharbor.com \\
  --set-string expose.ingress.annotations.&#39;nginx\\.org/client-max-body-size&#39;=&quot;1024m&quot; \\
  --set expose.tls.secretName=myharbor.com \\
  --set persistence.persistentVolumeClaim.registry.storageClass=nfs-client \\
  --set persistence.persistentVolumeClaim.jobservice.storageClass=nfs-client \\
  --set persistence.persistentVolumeClaim.database.storageClass=nfs-client \\
  --set persistence.persistentVolumeClaim.redis.storageClass=nfs-client \\
  --set persistence.persistentVolumeClaim.trivy.storageClass=nfs-client \\
  --set persistence.persistentVolumeClaim.chartmuseum.storageClass=nfs-client \\
  --set persistence.enabled=true \\
  --set externalURL=https://myharbor.com \\
  --set harborAdminPassword=Harbor12345
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里稍等一段时间在查看资源状态</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl get ingress,svc,pods,pvc -n harbor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653046-24.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><h3 id="_5、ingress-没有-address-问题解决" tabindex="-1"><a class="header-anchor" href="#_5、ingress-没有-address-问题解决" aria-hidden="true">#</a> 5、ingress 没有 ADDRESS 问题解决</h3><p>【分析】，发现&quot;error: endpoints “default-http-backend” not found&quot;</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat &lt;&lt; EOF &gt; default-http-backend.yaml
---

apiVersion: apps/v1
kind: Deployment
metadata:
  name: default-http-backend
  labels:
    app: default-http-backend
  namespace: harbor
spec:
  replicas: 1
  selector:
    matchLabels:
      app: default-http-backend
  template:
    metadata:
      labels:
        app: default-http-backend
    spec:
      terminationGracePeriodSeconds: 60
      containers:
      - name: default-http-backend
        # Any image is permissible as long as:
        # 1. It serves a 404 page at /
        # 2. It serves 200 on a /healthz endpoint
        image: registry.cn-hangzhou.aliyuncs.com/google_containers/defaultbackend:1.4
#        image: gcr.io/google_containers/defaultbackend:1.4
        livenessProbe:
          httpGet:
            path: /healthz
            port: 8080
            scheme: HTTP
          initialDelaySeconds: 30
          timeoutSeconds: 5
        ports:
        - containerPort: 8080
        resources:
          limits:
            cpu: 10m
            memory: 20Mi
          requests:
            cpu: 10m
            memory: 20Mi
---

apiVersion: v1
kind: Service
metadata:
  name: default-http-backend
  namespace: harbor
  labels:
    app: default-http-backend
spec:
  ports:
  - port: 80
    targetPort: 8080
  selector:
    app: default-http-backend
EOF
kubectl apply -f default-http-backend.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、卸载重新部署" tabindex="-1"><a class="header-anchor" href="#_6、卸载重新部署" aria-hidden="true">#</a> 6、卸载重新部署</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 卸载
helm uninstall myharbor -n harbor
kubectl get pvc -n harbor| awk &#39;NR!=1{print $1}&#39; | xargs kubectl delete pvc -n harbor

# 部署
helm install myharbor --namespace harbor harbor/harbor \\
  --set expose.ingress.hosts.core=myharbor.com \\
  --set expose.ingress.hosts.notary=notary.myharbor.com \\
  --set-string expose.ingress.annotations.&#39;nginx\\.org/client-max-body-size&#39;=&quot;1024m&quot; \\
  --set expose.tls.secretName=myharbor.com \\
  --set persistence.persistentVolumeClaim.registry.storageClass=nfs-client \\
  --set persistence.persistentVolumeClaim.jobservice.storageClass=nfs-client \\
  --set persistence.persistentVolumeClaim.database.storageClass=nfs-client \\
  --set persistence.persistentVolumeClaim.redis.storageClass=nfs-client \\
  --set persistence.persistentVolumeClaim.trivy.storageClass=nfs-client \\
  --set persistence.persistentVolumeClaim.chartmuseum.storageClass=nfs-client \\
  --set persistence.enabled=true \\
  --set externalURL=https://myharbor.com \\
  --set harborAdminPassword=Harbor12345
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653046-25.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>5、访问 harbor</p>`,29),V={href:"https://myharbor.com",target:"_blank",rel:"noopener noreferrer"},R=e("br",null,null,-1),D=d(`<figure><img src="https://static.linch.eu.org/blogImage/640-1667642653046-26.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>6、harbor 常见操作<br> 【1】创建项目 bigdata</p><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653046-27.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>【2】配置私有仓库<br> 在文件/etc/docker/daemon.json添加如下内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&quot;insecure-registries&quot;:[&quot;https://myharbor.com&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>重启 docker</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>【3】服务器上登录 harbor</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker login https://myharbor.com
#账号/密码：admin/Harbor12345
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653047-28.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>【4】打标签并把镜像上传到 harbor</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker tag rancher/pause:3.6 myharbor.com/bigdata/pause:3.6
docker push myharbor.com/bigdata/pause:3.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>7、修改 containerd 配置</p><p>以前使用 docker-engine 的时候，只需要修改/etc/docker/daemon.json 就行，但是新版的 k8s 已经使用 containerd 了，所以这里需要做相关配置，要不然 containerd 会失败。证书（ca.crt）可以在页面上下载：</p><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653047-29.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>创建域名目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mkdir /etc/containerd/myharbor.com
cp ca.crt /etc/containerd/myharbor.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件：/etc/containerd/config.toml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[plugins.&quot;io.containerd.grpc.v1.cri&quot;.registry]
      config_path = &quot;&quot;

      [plugins.&quot;io.containerd.grpc.v1.cri&quot;.registry.auths]

      [plugins.&quot;io.containerd.grpc.v1.cri&quot;.registry.configs]
        [plugins.&quot;io.containerd.grpc.v1.cri&quot;.registry.configs.&quot;myharbor.com&quot;.tls]
          ca_file = &quot;/etc/containerd/myharbor.com/ca.crt&quot;
        [plugins.&quot;io.containerd.grpc.v1.cri&quot;.registry.configs.&quot;myharbor.com&quot;.auth]
          username = &quot;admin&quot;
          password = &quot;Harbor12345&quot;

      [plugins.&quot;io.containerd.grpc.v1.cri&quot;.registry.headers]

      [plugins.&quot;io.containerd.grpc.v1.cri&quot;.registry.mirrors]
        [plugins.&quot;io.containerd.grpc.v1.cri&quot;.registry.mirrors.&quot;myharbor.com&quot;]
          endpoint = [&quot;https://myharbor.com&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653047-30.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>重启 containerd</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#重新加载配置
systemctl daemon-reload
#重启containerd
systemctl restart containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 把docker换成crictl 就行，命令都差不多
crictl pull myharbor.com/bigdata/mysql:5.7.38
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 crictl 报如下错误的解决办法</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>WARN[0000] image connect using default endpoints: [unix:///var/run/dockershim.sock unix:///run/containerd/containerd.sock unix:///run/crio/crio.sock unix:///var/run/cri-dockerd.sock]. As the default settings are now deprecated, you should set the endpoint instead.
ERRO[0000] unable to determine image API version: rpc error: code = Unavailable desc = connection error: desc = &quot;transport: Error while dialing dial unix /var/run/dockershim.sock: connect: no such file or directory&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个报错是 docker 的报错，这里没使用，所以这个错误不影响使用，但是还是解决好点，解决方法如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cat &lt;&lt;EOF&gt; /etc/crictl.yaml
runtime-endpoint: unix:///run/containerd/containerd.sock
image-endpoint: unix:///run/containerd/containerd.sock
timeout: 10
debug: false
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次拉取镜像</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>crictl pull myharbor.com/bigdata/mysql:5.7.38
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/640-1667642653047-31.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>Kubernetes（k8s）最新版最完整版基础环境部署+master 高可用实现详细步骤就到这里了</p>`,32);function $(L,H){const i=l("ExternalLinkIcon");return r(),t("div",null,[v,e("p",null,[n("官网："),e("a",u,[n("https://kubernetes.io/"),s(i)]),o,n(" 官方文档："),e("a",m,[n("https://kubernetes.io/zh-cn/docs/home/"),s(i)])]),b,e("blockquote",null,[e("p",null,[n("链接："),e("a",p,[n("https://pan.baidu.com/s/1HB9xuO3bssAW7v5HzpXkeQ"),s(i)]),g,n(" 提取码：8888")])]),h,e("p",null,[n("GitHub 地址："),e("a",x,[n("https://github.com/kubernetes/dashboard"),s(i)])]),k,e("p",null,[n("登录："),e("a",f,[n("https://cluster-endpoint:31443"),s(i)])]),y,_,q,S,e("p",null,[n("GitHub 地址："),e("a",w,[n("https://github.com/helm/helm/releases"),s(i)]),C,n(" 这使用 helm 安装，所以得先安装 helm。另外，搜索公众号Java架构师技术后台回复“面试题”，获取一份惊喜礼包。")]),K,e("p",null,[n("ingress 官方网站："),e("a",I,[n("https://kubernetes.github.io/ingress-nginx/"),s(i)]),O,n(" ingress 仓库地址："),e("a",E,[n("https://github.com/kubernetes/ingress-nginx"),s(i)]),N,n(" 部署文档："),e("a",z,[n("https://kubernetes.github.io/ingress-nginx/deploy/"),s(i)])]),P,e("p",null,[n("GitHub 地址："),e("a",A,[n("https://github.com/kubernetes-sigs/nfs-subdir-external-provisioner"),s(i)])]),F,e("p",null,[e("a",V,[n("https://myharbor.com"),s(i)]),R,n(" 账号/密码：admin/Harbor12345")]),D])}const G=a(c,[["render",$],["__file","详解K8S高可用部署.html.vue"]]);export{G as default};
