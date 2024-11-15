import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,a as i}from"./app-DWXdHMII.js";const l={};function p(d,s){return a(),e("div",null,s[0]||(s[0]=[i(`<h1 id="详解-k8s-高可用部署" tabindex="-1"><a class="header-anchor" href="#详解-k8s-高可用部署"><span>详解 K8S 高可用部署</span></a></h1><p>一、前言</p><p>二、基础环境部署</p><ul><li>1）前期准备（所有节点）</li><li>2）安装容器 docker（所有节点）</li><li>3）配置 k8s yum 源（所有节点）</li><li>4）将 sandbox_image 镜像源设置为阿里云 google_containers 镜像源（所有节点）</li><li>5）配置 containerd cgroup 驱动程序 systemd（所有节点）</li><li>6）开始安装 kubeadm，kubelet 和 kubectl（master 节点）</li><li>7）使用 kubeadm 初始化集群（master 节点）</li><li>8）安装 Pod 网络插件（CNI：Container Network Interface）(master)</li><li>9）node 节点加入 k8s 集群</li><li>10）配置 IPVS</li><li>11）集群高可用配置</li><li>12）部署 Nginx+Keepalived 高可用负载均衡器</li></ul><p>三、k8s 管理平台 dashboard 环境部署</p><ul><li>1）dashboard 部署</li><li>2）创建登录用户</li><li>3）配置 hosts 登录 dashboard web</li></ul><p>四、k8s 镜像仓库 harbor 环境部署</p><ul><li>1）安装 helm</li><li>2）配置 hosts</li><li>3）创建 stl 证书</li><li>4）安装 ingress</li><li>5）安装 nfs</li><li>6）创建 nfs provisioner 和持久化存储 SC</li><li>7）部署 Harbor（Https 方式）</li></ul><h3 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言"><span>一、前言</span></a></h3><p>官网：<a href="https://kubernetes.io/" target="_blank" rel="noopener noreferrer">https://kubernetes.io/</a> 官方文档：<a href="https://kubernetes.io/zh-cn/docs/home/" target="_blank" rel="noopener noreferrer">https://kubernetes.io/zh-cn/docs/home/</a></p><h3 id="二、基础环境部署" tabindex="-1"><a class="header-anchor" href="#二、基础环境部署"><span>二、基础环境部署</span></a></h3><h4 id="_1-前期准备-所有节点" tabindex="-1"><a class="header-anchor" href="#_1-前期准备-所有节点"><span>1）前期准备（所有节点）</span></a></h4><p>1、修改主机名和配置 hosts</p><p>先部署 1master 和 2node 节点，后面再加一个 master 节点</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 在192.168.0.113执行</span></span>
<span class="line"><span>hostnamectl set-hostname  k8s-master-168-0-113</span></span>
<span class="line"><span># 在192.168.0.114执行</span></span>
<span class="line"><span>hostnamectl set-hostname k8s-node1-168-0-114</span></span>
<span class="line"><span># 在192.168.0.115执行</span></span>
<span class="line"><span>hostnamectl set-hostname k8s-node2-168-0-115</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置 hosts</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt;&gt; /etc/hosts&lt;&lt;EOF</span></span>
<span class="line"><span>192.168.0.113 k8s-master-168-0-113</span></span>
<span class="line"><span>192.168.0.114 k8s-node1-168-0-114</span></span>
<span class="line"><span>192.168.0.115 k8s-node2-168-0-115</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、配置 ssh 互信</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 直接一直回车就行</span></span>
<span class="line"><span>ssh-keygen</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ssh-copy-id -i ~/.ssh/id_rsa.pub root@k8s-master-168-0-113</span></span>
<span class="line"><span>ssh-copy-id -i ~/.ssh/id_rsa.pub root@k8s-node1-168-0-114</span></span>
<span class="line"><span>ssh-copy-id -i ~/.ssh/id_rsa.pub root@k8s-node2-168-0-115</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、时间同步</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>yum install chrony -y</span></span>
<span class="line"><span>systemctl start chronyd</span></span>
<span class="line"><span>systemctl enable chronyd</span></span>
<span class="line"><span>chronyc sources</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、关闭防火墙</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>systemctl stop firewalld</span></span>
<span class="line"><span>systemctl disable firewalld</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>5、关闭 swap</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 临时关闭；关闭swap主要是为了性能考虑</span></span>
<span class="line"><span>swapoff -a</span></span>
<span class="line"><span># 可以通过这个命令查看swap是否关闭了</span></span>
<span class="line"><span>free</span></span>
<span class="line"><span># 永久关闭</span></span>
<span class="line"><span>sed -ri &#39;s/.*swap.*/#&amp;/&#39; /etc/fstab</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、禁用 SELinux</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 临时关闭</span></span>
<span class="line"><span>setenforce 0</span></span>
<span class="line"><span># 永久禁用</span></span>
<span class="line"><span>sed -i &#39;s/^SELINUX=enforcing$/SELINUX=disabled/&#39; /etc/selinux/config</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7、允许 iptables 检查桥接流量（可选，所有节点）</p><p>若要显式加载此模块，请运行 sudo modprobe br_netfilter，通过运行 lsmod | grep br_netfilter 来验证 br_netfilter 模块是否已加载。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo modprobe br_netfilter</span></span>
<span class="line"><span>lsmod | grep br_netfilter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>为了让 Linux 节点的 iptables 能够正确查看桥接流量，请确认 sysctl 配置中的 net.bridge.bridge-nf-call-iptables 设置为 1。例如：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cat &lt;&lt;EOF | sudo tee /etc/modules-load.d/k8s.conf</span></span>
<span class="line"><span>overlay</span></span>
<span class="line"><span>br_netfilter</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sudo modprobe overlay</span></span>
<span class="line"><span>sudo modprobe br_netfilter</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置所需的 sysctl 参数，参数在重新启动后保持不变</span></span>
<span class="line"><span>cat &lt;&lt;EOF | sudo tee /etc/sysctl.d/k8s.conf</span></span>
<span class="line"><span>net.bridge.bridge-nf-call-iptables  = 1</span></span>
<span class="line"><span>net.bridge.bridge-nf-call-ip6tables = 1</span></span>
<span class="line"><span>net.ipv4.ip_forward                 = 1</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 应用 sysctl 参数而不重新启动</span></span>
<span class="line"><span>sudo sysctl --system</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-安装容器-docker-所有节点" tabindex="-1"><a class="header-anchor" href="#_2-安装容器-docker-所有节点"><span>2）安装容器 docker（所有节点）</span></a></h4><blockquote><p>提示：v1.24 之前的 Kubernetes 版本包括与 Docker Engine 的直接集成，使用名为 dockershim 的组件。这种特殊的直接整合不再是 Kubernetes 的一部分 （这次删除被作为 v1.20 发行版本的一部分宣布）。你可以阅读检查 Dockershim 弃用是否会影响你 以了解此删除可能会如何影响你。要了解如何使用 dockershim 进行迁移，请参阅从 dockershim 迁移。</p></blockquote><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 配置yum源</span></span>
<span class="line"><span>cd /etc/yum.repos.d ; mkdir bak; mv CentOS-Linux-* bak/</span></span>
<span class="line"><span># centos7</span></span>
<span class="line"><span>wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo</span></span>
<span class="line"><span># centos8</span></span>
<span class="line"><span>wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-8.repo</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装yum-config-manager配置工具</span></span>
<span class="line"><span>yum -y install yum-utils</span></span>
<span class="line"><span># 设置yum源</span></span>
<span class="line"><span>yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span></span>
<span class="line"><span># 安装docker-ce版本</span></span>
<span class="line"><span>yum install -y docker-ce</span></span>
<span class="line"><span># 启动</span></span>
<span class="line"><span>systemctl start docker</span></span>
<span class="line"><span># 开机自启</span></span>
<span class="line"><span>systemctl enable docker</span></span>
<span class="line"><span># 查看版本号</span></span>
<span class="line"><span>docker --version</span></span>
<span class="line"><span># 查看版本具体信息</span></span>
<span class="line"><span>docker version</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Docker镜像源设置</span></span>
<span class="line"><span># 修改文件 /etc/docker/daemon.json，没有这个文件就创建</span></span>
<span class="line"><span># 添加以下内容后，重启docker服务：</span></span>
<span class="line"><span>cat &gt;/etc/docker/daemon.json&lt;&lt;EOF</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>   &quot;registry-mirrors&quot;: [&quot;http://hub-mirror.c.163.com&quot;]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span># 加载</span></span>
<span class="line"><span>systemctl reload docker</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看</span></span>
<span class="line"><span>systemctl status docker containerd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>【温馨提示】dockerd 实际真实调用的还是 containerd 的 api 接口，containerd 是 dockerd 和 runC 之间的一个中间交流组件。所以启动 docker 服务的时候，也会启动 containerd 服务的。</p></blockquote><h4 id="_3-配置-k8s-yum-源-所有节点" tabindex="-1"><a class="header-anchor" href="#_3-配置-k8s-yum-源-所有节点"><span>3）配置 k8s yum 源（所有节点）</span></a></h4><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt; /etc/yum.repos.d/kubernetes.repo &lt;&lt; EOF</span></span>
<span class="line"><span>[k8s]</span></span>
<span class="line"><span>name=k8s</span></span>
<span class="line"><span>enabled=1</span></span>
<span class="line"><span>gpgcheck=0</span></span>
<span class="line"><span>baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-将-sandbox-image-镜像源设置为阿里云-google-containers-镜像源-所有节点" tabindex="-1"><a class="header-anchor" href="#_4-将-sandbox-image-镜像源设置为阿里云-google-containers-镜像源-所有节点"><span>4）将 sandbox_image 镜像源设置为阿里云 google_containers 镜像源（所有节点）</span></a></h4><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 导出默认配置，config.toml这个文件默认是不存在的</span></span>
<span class="line"><span>containerd config default &gt; /etc/containerd/config.toml</span></span>
<span class="line"><span>grep sandbox_image  /etc/containerd/config.toml</span></span>
<span class="line"><span>sed -i &quot;s#k8s.gcr.io/pause#registry.aliyuncs.com/google_containers/pause#g&quot;       /etc/containerd/config.toml</span></span>
<span class="line"><span>grep sandbox_image  /etc/containerd/config.toml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653044-0.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><h4 id="_5-配置-containerd-cgroup-驱动程序-systemd-所有节点" tabindex="-1"><a class="header-anchor" href="#_5-配置-containerd-cgroup-驱动程序-systemd-所有节点"><span>5）配置 containerd cgroup 驱动程序 systemd（所有节点）</span></a></h4><blockquote><p>kubernets 自ｖ 1.24.0 后，就不再使用 docker.shim，替换采用 containerd 作为容器运行时端点。因此需要安装 containerd（在 docker 的基础下安装），上面安装 docker 的时候就自动安装了 containerd 了。这里的 docker 只是作为客户端而已。容器引擎还是 containerd。</p></blockquote><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sed -i &#39;s#SystemdCgroup = false#SystemdCgroup = true#g&#39; /etc/containerd/config.toml</span></span>
<span class="line"><span># 应用所有更改后,重新启动containerd</span></span>
<span class="line"><span>systemctl restart containerd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-开始安装-kubeadm-kubelet-和-kubectl-master-节点" tabindex="-1"><a class="header-anchor" href="#_6-开始安装-kubeadm-kubelet-和-kubectl-master-节点"><span>6）开始安装 kubeadm，kubelet 和 kubectl（master 节点）</span></a></h4><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 不指定版本就是最新版本，当前最新版就是1.24.1</span></span>
<span class="line"><span>yum install -y kubelet-1.24.1  kubeadm-1.24.1  kubectl-1.24.1 --disableexcludes=kubernetes</span></span>
<span class="line"><span># disableexcludes=kubernetes：禁掉除了这个kubernetes之外的别的仓库</span></span>
<span class="line"><span># 设置为开机自启并现在立刻启动服务 --now：立刻启动服务</span></span>
<span class="line"><span>systemctl enable --now kubelet</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看状态，这里需要等待一段时间再查看服务状态，启动会有点慢</span></span>
<span class="line"><span>systemctl status kubelet</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653044-1.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>查看日志，发现有报错，报错如下：</p><blockquote><p>kubelet.service: Main process exited, code=exited, status=1/FAILURE kubelet.service: Failed with result &#39;exit-code&#39;.</p></blockquote><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653045-2.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><blockquote><p>【解释】重新安装（或第一次安装）k8s，未经过 kubeadm init 或者 kubeadm join 后，kubelet 会不断重启，这个是正常现象……，执行 init 或 join 后问题会自动解决，对此官网有如下描述，也就是此时不用理会 kubelet.service。</p></blockquote><p>查看版本</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>kubectl version</span></span>
<span class="line"><span>yum info kubeadm</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653045-3.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><h4 id="_7-使用-kubeadm-初始化集群-master-节点" tabindex="-1"><a class="header-anchor" href="#_7-使用-kubeadm-初始化集群-master-节点"><span>7）使用 kubeadm 初始化集群（master 节点）</span></a></h4><p>最好提前把镜像下载好，这样安装快</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker pull registry.aliyuncs.com/google_containers/kube-apiserver:v1.24.1</span></span>
<span class="line"><span>docker pull registry.aliyuncs.com/google_containers/kube-controller-manager:v1.24.1</span></span>
<span class="line"><span>docker pull registry.aliyuncs.com/google_containers/kube-scheduler:v1.24.1</span></span>
<span class="line"><span>docker pull registry.aliyuncs.com/google_containers/kube-proxy:v1.24.1</span></span>
<span class="line"><span>docker pull registry.aliyuncs.com/google_containers/pause:3.7</span></span>
<span class="line"><span>docker pull registry.aliyuncs.com/google_containers/etcd:3.5.3-0</span></span>
<span class="line"><span>docker pull registry.aliyuncs.com/google_containers/coredns:v1.8.6</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>集群初始化</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>kubeadm init \\</span></span>
<span class="line"><span>  --apiserver-advertise-address=192.168.0.113 \\</span></span>
<span class="line"><span>  --image-repository registry.aliyuncs.com/google_containers \\</span></span>
<span class="line"><span>  --control-plane-endpoint=cluster-endpoint \\</span></span>
<span class="line"><span>  --kubernetes-version v1.24.1 \\</span></span>
<span class="line"><span>  --service-cidr=10.1.0.0/16 \\</span></span>
<span class="line"><span>  --pod-network-cidr=10.244.0.0/16 \\</span></span>
<span class="line"><span>  --v=5</span></span>
<span class="line"><span># –image-repository string：    这个用于指定从什么位置来拉取镜像（1.13版本才有的），默认值是k8s.gcr.io，我们将其指定为国内镜像地址：registry.aliyuncs.com/google_containers</span></span>
<span class="line"><span># –kubernetes-version string：  指定kubenets版本号，默认值是stable-1，会导致从https://dl.k8s.io/release/stable-1.txt下载最新的版本号，我们可以将其指定为固定版本（v1.22.1）来跳过网络请求。</span></span>
<span class="line"><span># –apiserver-advertise-address  指明用 Master 的哪个 interface 与 Cluster 的其他节点通信。如果 Master 有多个 interface，建议明确指定，如果不指定，kubeadm 会自动选择有默认网关的 interface。这里的ip为master节点ip，记得更换。</span></span>
<span class="line"><span># –pod-network-cidr             指定 Pod 网络的范围。Kubernetes 支持多种网络方案，而且不同网络方案对  –pod-network-cidr有自己的要求，这里设置为10.244.0.0/16 是因为我们将使用 flannel 网络方案，必须设置成这个 CIDR。</span></span>
<span class="line"><span># --control-plane-endpoint     cluster-endpoint 是映射到该 IP 的自定义 DNS 名称，这里配置hosts映射：192.168.0.113   cluster-endpoint。 这将允许你将 --control-plane-endpoint=cluster-endpoint 传递给 kubeadm init，并将相同的 DNS 名称传递给 kubeadm join。 稍后你可以修改 cluster-endpoint 以指向高可用性方案中的负载均衡器的地址。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>【温馨提示】kubeadm 不支持将没有 --control-plane-endpoint 参数的单个控制平面集群转换为高可用性集群。</p></blockquote><p>重置再初始化</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>kubeadm reset</span></span>
<span class="line"><span>rm -fr ~/.kube/  /etc/kubernetes/* var/lib/etcd/*</span></span>
<span class="line"><span>kubeadm init \\</span></span>
<span class="line"><span>  --apiserver-advertise-address=192.168.0.113  \\</span></span>
<span class="line"><span>  --image-repository registry.aliyuncs.com/google_containers \\</span></span>
<span class="line"><span>  --control-plane-endpoint=cluster-endpoint \\</span></span>
<span class="line"><span>  --kubernetes-version v1.24.1 \\</span></span>
<span class="line"><span>  --service-cidr=10.1.0.0/16 \\</span></span>
<span class="line"><span>  --pod-network-cidr=10.244.0.0/16 \\</span></span>
<span class="line"><span>  --v=5</span></span>
<span class="line"><span># –image-repository string：    这个用于指定从什么位置来拉取镜像（1.13版本才有的），默认值是k8s.gcr.io，我们将其指定为国内镜像地址：registry.aliyuncs.com/google_containers</span></span>
<span class="line"><span># –kubernetes-version string：  指定kubenets版本号，默认值是stable-1，会导致从https://dl.k8s.io/release/stable-1.txt下载最新的版本号，我们可以将其指定为固定版本（v1.22.1）来跳过网络请求。</span></span>
<span class="line"><span># –apiserver-advertise-address  指明用 Master 的哪个 interface 与 Cluster 的其他节点通信。如果 Master 有多个 interface，建议明确指定，如果不指定，kubeadm 会自动选择有默认网关的 interface。这里的ip为master节点ip，记得更换。</span></span>
<span class="line"><span># –pod-network-cidr             指定 Pod 网络的范围。Kubernetes 支持多种网络方案，而且不同网络方案对  –pod-network-cidr有自己的要求，这里设置为10.244.0.0/16 是因为我们将使用 flannel 网络方案，必须设置成这个 CIDR。</span></span>
<span class="line"><span># --control-plane-endpoint     cluster-endpoint 是映射到该 IP 的自定义 DNS 名称，这里配置hosts映射：192.168.0.113   cluster-endpoint。 这将允许你将 --control-plane-endpoint=cluster-endpoint 传递给 kubeadm init，并将相同的 DNS 名称传递给 kubeadm join。 稍后你可以修改 cluster-endpoint 以指向高可用性方案中的负载均衡器的地址。</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置环境变量</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>mkdir -p $HOME/.kube</span></span>
<span class="line"><span>sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config</span></span>
<span class="line"><span>sudo chown $(id -u):$(id -g) $HOME/.kube/config</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 临时生效（退出当前窗口重连环境变量失效）</span></span>
<span class="line"><span>export KUBECONFIG=/etc/kubernetes/admin.conf</span></span>
<span class="line"><span># 永久生效（推荐）</span></span>
<span class="line"><span>echo &quot;export KUBECONFIG=/etc/kubernetes/admin.conf&quot; &gt;&gt; ~/.bash_profile</span></span>
<span class="line"><span>source  ~/.bash_profile</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653045-4.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>发现节点还是有问题，查看日志 /var/log/messages</p><blockquote><p>&quot;Container runtime network not ready&quot; networkReady=&quot;NetworkReady=false reason:NetworkPluginNotReady message:Network plugin returns error: cni plugin not initialized&quot;</p></blockquote><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653045-5.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>接下来就是安装 Pod 网络插件</p><h4 id="_8-安装-pod-网络插件-cni-container-network-interface-master" tabindex="-1"><a class="header-anchor" href="#_8-安装-pod-网络插件-cni-container-network-interface-master"><span>8）安装 Pod 网络插件（CNI：Container Network Interface）(master)</span></a></h4><p>你必须部署一个基于 Pod 网络插件的 容器网络接口 (CNI)，以便你的 Pod 可以相互通信。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 最好提前下载镜像（所有节点）</span></span>
<span class="line"><span>docker pull quay.io/coreos/flannel:v0.14.0</span></span>
<span class="line"><span>kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果上面安装失败，则下载我百度里的，离线安装</p><blockquote><p>链接：<a href="https://pan.baidu.com/s/1HB9xuO3bssAW7v5HzpXkeQ" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1HB9xuO3bssAW7v5HzpXkeQ</a> 提取码：8888</p></blockquote><p>再查看 node 节点，就已经正常了</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653045-6.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><h4 id="_9-node-节点加入-k8s-集群" tabindex="-1"><a class="header-anchor" href="#_9-node-节点加入-k8s-集群"><span>9）node 节点加入 k8s 集群</span></a></h4><p>先安装 kubelet</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>yum install -y kubelet kubeadm kubectl --disableexcludes=kubernetes</span></span>
<span class="line"><span># 设置为开机自启并现在立刻启动服务 --now：立刻启动服务</span></span>
<span class="line"><span>systemctl enable --now kubelet</span></span>
<span class="line"><span>systemctl status kubelet</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果没有令牌，可以通过在控制平面节点上运行以下命令来获取令牌：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>kubeadm token list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>默认情况下，令牌会在 24 小时后过期。如果要在当前令牌过期后将节点加入集群， 则可以通过在控制平面节点上运行以下命令来创建新令牌：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>kubeadm token create</span></span>
<span class="line"><span># 再查看</span></span>
<span class="line"><span>kubeadm token list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你没有 –discovery-token-ca-cert-hash 的值，则可以通过在控制平面节点上执行以下命令链来获取它：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>openssl x509 -pubkey -in /etc/kubernetes/pki/ca.crt | openssl rsa -pubin -outform der 2&gt;/dev/null | openssl dgst -sha256 -hex | sed &#39;s/^.* //&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果执行 kubeadm init 时没有记录下加入集群的命令，可以通过以下命令重新创建（推荐）一般不用上面的分别获取 token 和 ca-cert-hash 方式，执行以下命令一气呵成：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>kubeadm token create --print-join-command</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这里需要等待一段时间，再查看节点节点状态，因为需要安装 kube-proxy 和 flannel。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>kubectl get pods -A</span></span>
<span class="line"><span>kubectl get nodes</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653045-7.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><h4 id="_10-配置-ipvs" tabindex="-1"><a class="header-anchor" href="#_10-配置-ipvs"><span>10）配置 IPVS</span></a></h4><p>【问题】集群内无法 ping 通 ClusterIP（或 ServiceName）</p><p>1、加载 ip_vs 相关内核模块</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>modprobe -- ip_vs</span></span>
<span class="line"><span>modprobe -- ip_vs_sh</span></span>
<span class="line"><span>modprobe -- ip_vs_rr</span></span>
<span class="line"><span>modprobe -- ip_vs_wrr</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有节点验证开启了 ipvs：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>lsmod |grep ip_vs</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>2、安装 ipvsadm 工具</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>yum install ipset ipvsadm -y</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>3、编辑 kube-proxy 配置文件，mode 修改成 ipvs</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>kubectl edit  configmap -n kube-system  kube-proxy</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653045-8.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>4、重启 kube-proxy</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 先查看</span></span>
<span class="line"><span>kubectl get pod -n kube-system | grep kube-proxy</span></span>
<span class="line"><span># 再delete让它自拉起</span></span>
<span class="line"><span>kubectl get pod -n kube-system | grep kube-proxy |awk &#39;{system(&quot;kubectl delete pod &quot;$1&quot; -n kube-system&quot;)}&#39;</span></span>
<span class="line"><span># 再查看</span></span>
<span class="line"><span>kubectl get pod -n kube-system | grep kube-proxy</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653045-9.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>5、查看 ipvs 转发规则</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ipvsadm -Ln</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653045-10.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><h4 id="_11-集群高可用配置" tabindex="-1"><a class="header-anchor" href="#_11-集群高可用配置"><span>11）集群高可用配置</span></a></h4><p>配置高可用（HA）Kubernetes 集群实现的两种方案：</p><p>使用堆叠（stacked）控制平面节点，其中 etcd 节点与控制平面节点共存（本章使用），架构图如下：</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653045-11.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>使用外部 etcd 节点，其中 etcd 在与控制平面不同的节点上运行，架构图如下：</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653045-12.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>这里新增一台机器作为另外一个 master 节点：192.168.0.116 配置跟上面 master 节点一样。只是不需要最后一步初始化了。</p><p>1、修改主机名和配置 hosts</p><p>所有节点都统一如下配置：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 在192.168.0.113执行</span></span>
<span class="line"><span>hostnamectl set-hostname  k8s-master-168-0-113</span></span>
<span class="line"><span># 在192.168.0.114执行</span></span>
<span class="line"><span>hostnamectl set-hostname k8s-node1-168-0-114</span></span>
<span class="line"><span># 在192.168.0.115执行</span></span>
<span class="line"><span>hostnamectl set-hostname k8s-node2-168-0-115</span></span>
<span class="line"><span># 在192.168.0.116执行</span></span>
<span class="line"><span>hostnamectl set-hostname k8s-master2-168-0-116</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置 hosts</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt;&gt; /etc/hosts&lt;&lt;EOF</span></span>
<span class="line"><span>192.168.0.113 k8s-master-168-0-113 cluster-endpoint</span></span>
<span class="line"><span>192.168.0.114 k8s-node1-168-0-114</span></span>
<span class="line"><span>192.168.0.115 k8s-node2-168-0-115</span></span>
<span class="line"><span>192.168.0.116 k8s-master2-168-0-116</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、配置 ssh 互信</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 直接一直回车就行</span></span>
<span class="line"><span>ssh-keygen</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ssh-copy-id -i ~/.ssh/id_rsa.pub root@k8s-master-168-0-113</span></span>
<span class="line"><span>ssh-copy-id -i ~/.ssh/id_rsa.pub root@k8s-node1-168-0-114</span></span>
<span class="line"><span>ssh-copy-id -i ~/.ssh/id_rsa.pub root@k8s-node2-168-0-115</span></span>
<span class="line"><span>ssh-copy-id -i ~/.ssh/id_rsa.pub root@k8s-master2-168-0-116</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、时间同步</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>yum install chrony -y</span></span>
<span class="line"><span>systemctl start chronyd</span></span>
<span class="line"><span>systemctl enable chronyd</span></span>
<span class="line"><span>chronyc sources</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关闭防火墙</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>牛逼啊！接私活必备的 N 个开源项目！赶快收藏</span></span>
<span class="line"><span>systemctl stop firewalld</span></span>
<span class="line"><span>systemctl disable firewalld</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、关闭 swap</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 临时关闭；关闭swap主要是为了性能考虑</span></span>
<span class="line"><span>swapoff -a</span></span>
<span class="line"><span># 可以通过这个命令查看swap是否关闭了</span></span>
<span class="line"><span>free</span></span>
<span class="line"><span># 永久关闭</span></span>
<span class="line"><span>sed -ri &#39;s/.*swap.*/#&amp;/&#39; /etc/fstab</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、禁用 SELinux</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 临时关闭</span></span>
<span class="line"><span>setenforce 0</span></span>
<span class="line"><span># 永久禁用</span></span>
<span class="line"><span>sed -i &#39;s/^SELINUX=enforcing$/SELINUX=disabled/&#39; /etc/selinux/config</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、允许 iptables 检查桥接流量（可选，所有节点）</p><p>若要显式加载此模块，请运行 sudo modprobe br_netfilter，通过运行 lsmod | grep br_netfilter 来验证 br_netfilter 模块是否已加载，</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sudo modprobe br_netfilter</span></span>
<span class="line"><span>lsmod | grep br_netfilter</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>为了让 Linux 节点的 iptables 能够正确查看桥接流量，请确认 sysctl 配置中的 net.bridge.bridge-nf-call-iptables 设置为 1。例如：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cat &lt;&lt;EOF | sudo tee /etc/modules-load.d/k8s.conf</span></span>
<span class="line"><span>overlay</span></span>
<span class="line"><span>br_netfilter</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span>sudo modprobe overlay</span></span>
<span class="line"><span>sudo modprobe br_netfilter</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置所需的 sysctl 参数，参数在重新启动后保持不变</span></span>
<span class="line"><span>cat &lt;&lt;EOF | sudo tee /etc/sysctl.d/k8s.conf</span></span>
<span class="line"><span>net.bridge.bridge-nf-call-iptables  = 1</span></span>
<span class="line"><span>net.bridge.bridge-nf-call-ip6tables = 1</span></span>
<span class="line"><span>net.ipv4.ip_forward                 = 1</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 应用 sysctl 参数而不重新启动</span></span>
<span class="line"><span>sudo sysctl --system</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7、安装容器 docker（所有节点）</p><blockquote><p>提示：v1.24 之前的 Kubernetes 版本包括与 Docker Engine 的直接集成，使用名为 dockershim 的组件。这种特殊的直接整合不再是 Kubernetes 的一部分 （这次删除被作为 v1.20 发行版本的一部分宣布）。你可以阅读检查 Dockershim 弃用是否会影响你 以了解此删除可能会如何影响你。要了解如何使用 dockershim 进行迁移，请参阅从 dockershim 迁移。</p></blockquote><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 配置yum源</span></span>
<span class="line"><span>cd /etc/yum.repos.d ; mkdir bak; mv CentOS-Linux-* bak/</span></span>
<span class="line"><span># centos7</span></span>
<span class="line"><span>wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo</span></span>
<span class="line"><span># centos8</span></span>
<span class="line"><span>wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-8.repo</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 安装yum-config-manager配置工具</span></span>
<span class="line"><span>yum -y install yum-utils</span></span>
<span class="line"><span># 设置yum源</span></span>
<span class="line"><span>yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo</span></span>
<span class="line"><span># 安装docker-ce版本</span></span>
<span class="line"><span>yum install -y docker-ce</span></span>
<span class="line"><span># 启动</span></span>
<span class="line"><span>systemctl start docker</span></span>
<span class="line"><span># 开机自启</span></span>
<span class="line"><span>systemctl enable docker</span></span>
<span class="line"><span># 查看版本号</span></span>
<span class="line"><span>docker --version</span></span>
<span class="line"><span># 查看版本具体信息</span></span>
<span class="line"><span>docker version</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Docker镜像源设置</span></span>
<span class="line"><span># 修改文件 /etc/docker/daemon.json，没有这个文件就创建</span></span>
<span class="line"><span># 添加以下内容后，重启docker服务：</span></span>
<span class="line"><span>cat &gt;/etc/docker/daemon.json&lt;&lt;EOF</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>   &quot;registry-mirrors&quot;: [&quot;http://hub-mirror.c.163.com&quot;]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span># 加载</span></span>
<span class="line"><span>systemctl reload docker</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看</span></span>
<span class="line"><span>systemctl status docker containerd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>【温馨提示】dockerd 实际真实调用的还是 containerd 的 api 接口，containerd 是 dockerd 和 runC 之间的一个中间交流组件。所以启动 docker 服务的时候，也会启动 containerd 服务的。</p></blockquote><h4 id="_8、配置-k8s-yum-源-所有节点" tabindex="-1"><a class="header-anchor" href="#_8、配置-k8s-yum-源-所有节点"><span>8、配置 k8s yum 源（所有节点）</span></a></h4><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt; /etc/yum.repos.d/kubernetes.repo &lt;&lt; EOF</span></span>
<span class="line"><span>[k8s]</span></span>
<span class="line"><span>name=k8s</span></span>
<span class="line"><span>enabled=1</span></span>
<span class="line"><span>gpgcheck=0</span></span>
<span class="line"><span>baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9、将-sandbox-image-镜像源设置为阿里云-google-containers-镜像源-所有节点" tabindex="-1"><a class="header-anchor" href="#_9、将-sandbox-image-镜像源设置为阿里云-google-containers-镜像源-所有节点"><span>9、将 sandbox_image 镜像源设置为阿里云 google_containers 镜像源（所有节点）</span></a></h4><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 导出默认配置，config.toml这个文件默认是不存在的</span></span>
<span class="line"><span>containerd config default &gt; /etc/containerd/config.toml</span></span>
<span class="line"><span>grep sandbox_image  /etc/containerd/config.toml</span></span>
<span class="line"><span>sed -i &quot;s#k8s.gcr.io/pause#registry.aliyuncs.com/google_containers/pause#g&quot;       /etc/containerd/config.toml</span></span>
<span class="line"><span>grep sandbox_image  /etc/containerd/config.toml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10、配置-containerd-cgroup-驱动程序-systemd" tabindex="-1"><a class="header-anchor" href="#_10、配置-containerd-cgroup-驱动程序-systemd"><span>10、配置 containerd cgroup 驱动程序 systemd</span></a></h4><blockquote><p>kubernets 自ｖ 1.24.0 后，就不再使用 docker.shim，替换采用 containerd 作为容器运行时端点。因此需要安装 containerd（在 docker 的基础下安装），上面安装 docker 的时候就自动安装了 containerd 了。这里的 docker 只是作为客户端而已。容器引擎还是 containerd。</p></blockquote><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>sed -i &#39;s#SystemdCgroup = false#SystemdCgroup = true#g&#39; /etc/containerd/config.toml</span></span>
<span class="line"><span># 应用所有更改后,重新启动containerd</span></span>
<span class="line"><span>systemctl restart containerd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_11、开始安装-kubeadm-kubelet-和-kubectl-master-节点" tabindex="-1"><a class="header-anchor" href="#_11、开始安装-kubeadm-kubelet-和-kubectl-master-节点"><span>11、开始安装 kubeadm，kubelet 和 kubectl（master 节点）</span></a></h4><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 不指定版本就是最新版本，当前最新版就是1.24.1</span></span>
<span class="line"><span>yum install -y kubelet-1.24.1  kubeadm-1.24.1  kubectl-1.24.1 --disableexcludes=kubernetes</span></span>
<span class="line"><span># disableexcludes=kubernetes：禁掉除了这个kubernetes之外的别的仓库</span></span>
<span class="line"><span># 设置为开机自启并现在立刻启动服务 --now：立刻启动服务</span></span>
<span class="line"><span>systemctl enable --now kubelet</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看状态，这里需要等待一段时间再查看服务状态，启动会有点慢</span></span>
<span class="line"><span>systemctl status kubelet</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 查看版本</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kubectl version</span></span>
<span class="line"><span>yum info kubeadm</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_12、加入-k8s-集群" tabindex="-1"><a class="header-anchor" href="#_12、加入-k8s-集群"><span>12、加入 k8s 集群</span></a></h4><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 证如果过期了，可以使用下面命令生成新证书上传，这里会打印出certificate key，后面会用到</span></span>
<span class="line"><span>kubeadm init phase upload-certs --upload-certs</span></span>
<span class="line"><span># 你还可以在 【init】期间指定自定义的 --certificate-key，以后可以由 join 使用。 要生成这样的密钥，可以使用以下命令（这里不执行，就用上面那个自命令就可以了）：</span></span>
<span class="line"><span>kubeadm certs certificate-key</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kubeadm token create --print-join-command</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kubeadm join cluster-endpoint:6443 --token wswrfw.fc81au4yvy6ovmhh --discovery-token-ca-cert-hash sha256:43a3924c25104d4393462105639f6a02b8ce284728775ef9f9c30eed8e0abc0f --control-plane --certificate-key 8d2709697403b74e35d05a420bd2c19fd8c11914eb45f2ff22937b245bed5b68</span></span>
<span class="line"><span></span></span>
<span class="line"><span># --control-plane 标志通知 kubeadm join 创建一个新的控制平面。加入master必须加这个标记</span></span>
<span class="line"><span># --certificate-key ... 将导致从集群中的 kubeadm-certs Secret 下载控制平面证书并使用给定的密钥进行解密。这里的值</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-13.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>根据提示执行如下命令：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>mkdir -p $HOME/.kube</span></span>
<span class="line"><span>sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config</span></span>
<span class="line"><span>sudo chown $(id -u):$(id -g) $HOME/.kube/config</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>kubectl get nodes</span></span>
<span class="line"><span>kubectl get pods -A -owide</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-14.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>虽然现在已经有两个 master 了，但是对外还是只能有一个入口的，所以还得要一个负载均衡器，如果一个 master 挂了，会自动切到另外一个 master 节点。</p><h4 id="_12-部署-nginx-keepalived-高可用负载均衡器" tabindex="-1"><a class="header-anchor" href="#_12-部署-nginx-keepalived-高可用负载均衡器"><span>12）部署 Nginx+Keepalived 高可用负载均衡器</span></a></h4><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-15.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>1、安装 Nginx 和 Keepalived</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 在两个master节点上执行</span></span>
<span class="line"><span>yum install nginx keepalived -y</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>2、Nginx 配置</p><p>在两个 master 节点配置</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt; /etc/nginx/nginx.conf &lt;&lt; &quot;EOF&quot;</span></span>
<span class="line"><span>user nginx;</span></span>
<span class="line"><span>worker_processes auto;</span></span>
<span class="line"><span>error_log /var/log/nginx/error.log;</span></span>
<span class="line"><span>pid /run/nginx.pid;</span></span>
<span class="line"><span>include /usr/share/nginx/modules/*.conf;</span></span>
<span class="line"><span>events {</span></span>
<span class="line"><span>    worker_connections 1024;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span># 四层负载均衡，为两台Master apiserver组件提供负载均衡</span></span>
<span class="line"><span>stream {</span></span>
<span class="line"><span>    log_format  main  &#39;$remote_addr $upstream_addr - [$time_local] $status $upstream_bytes_sent&#39;;</span></span>
<span class="line"><span>    access_log  /var/log/nginx/k8s-access.log  main;</span></span>
<span class="line"><span>    upstream k8s-apiserver {</span></span>
<span class="line"><span>    # Master APISERVER IP:PORT</span></span>
<span class="line"><span>       server 192.168.0.113:6443;</span></span>
<span class="line"><span>    # Master2 APISERVER IP:PORT</span></span>
<span class="line"><span>       server 192.168.0.116:6443;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>       listen 16443;</span></span>
<span class="line"><span>       proxy_pass k8s-apiserver;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>http {</span></span>
<span class="line"><span>    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span>                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span>                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"><span>    access_log  /var/log/nginx/access.log  main;</span></span>
<span class="line"><span>    sendfile            on;</span></span>
<span class="line"><span>    tcp_nopush          on;</span></span>
<span class="line"><span>    tcp_nodelay         on;</span></span>
<span class="line"><span>    keepalive_timeout   65;</span></span>
<span class="line"><span>    types_hash_max_size 2048;</span></span>
<span class="line"><span>    include             /etc/nginx/mime.types;</span></span>
<span class="line"><span>    default_type        application/octet-stream;</span></span>
<span class="line"><span>    server {</span></span>
<span class="line"><span>        listen       80 default_server;</span></span>
<span class="line"><span>        server_name  _;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        location / {</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>【温馨提示】如果只保证高可用，不配置 k8s-apiserver 负载均衡的话，可以不装 nginx，但是最好还是配置一下 k8s-apiserver 负载均衡。</p></blockquote><p>3、Keepalived 配置（master）</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt; /etc/keepalived/keepalived.conf &lt;&lt; EOF</span></span>
<span class="line"><span>global_defs {</span></span>
<span class="line"><span>   notification_email {</span></span>
<span class="line"><span>     acassen@firewall.loc</span></span>
<span class="line"><span>     failover@firewall.loc</span></span>
<span class="line"><span>     sysadmin@firewall.loc</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   notification_email_from fage@qq.com</span></span>
<span class="line"><span>   smtp_server 127.0.0.1</span></span>
<span class="line"><span>   smtp_connect_timeout 30</span></span>
<span class="line"><span>   router_id NGINX_MASTER</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>vrrp_script check_nginx {</span></span>
<span class="line"><span>    script &quot;/etc/keepalived/check_nginx.sh&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>vrrp_instance VI_1 {</span></span>
<span class="line"><span>    state MASTER</span></span>
<span class="line"><span>    interface ens33</span></span>
<span class="line"><span>    virtual_router_id 51 # VRRP 路由 ID实例，每个实例是唯一的</span></span>
<span class="line"><span>    priority 100    # 优先级，备服务器设置 90</span></span>
<span class="line"><span>    advert_int 1    # 指定VRRP 心跳包通告间隔时间，默认1秒</span></span>
<span class="line"><span>    authentication {</span></span>
<span class="line"><span>        auth_type PASS</span></span>
<span class="line"><span>        auth_pass 1111</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    # 虚拟IP</span></span>
<span class="line"><span>    virtual_ipaddress {</span></span>
<span class="line"><span>        192.168.0.120/24</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    track_script {</span></span>
<span class="line"><span>        check_nginx</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vrrp_script：指定检查 nginx 工作状态脚本（根据 nginx 状态判断是否故障转移） virtual_ipaddress：虚拟 IP（VIP）</p><p>检查 nginx 状态脚本：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt; /etc/keepalived/check_nginx.sh  &lt;&lt; &quot;EOF&quot;</span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>count=$(ps -ef |grep nginx |egrep -cv &quot;grep|$$&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ &quot;$count&quot; -eq 0 ];then</span></span>
<span class="line"><span>    exit 1</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    exit 0</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>chmod +x /etc/keepalived/check_nginx.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、Keepalived 配置（backup）</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt; /etc/keepalived/keepalived.conf &lt;&lt; EOF</span></span>
<span class="line"><span>global_defs {</span></span>
<span class="line"><span>   notification_email {</span></span>
<span class="line"><span>     acassen@firewall.loc</span></span>
<span class="line"><span>     failover@firewall.loc</span></span>
<span class="line"><span>     sysadmin@firewall.loc</span></span>
<span class="line"><span>   }</span></span>
<span class="line"><span>   notification_email_from fage@qq.com</span></span>
<span class="line"><span>   smtp_server 127.0.0.1</span></span>
<span class="line"><span>   smtp_connect_timeout 30</span></span>
<span class="line"><span>   router_id NGINX_BACKUP</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>vrrp_script check_nginx {</span></span>
<span class="line"><span>    script &quot;/etc/keepalived/check_nginx.sh&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>vrrp_instance VI_1 {</span></span>
<span class="line"><span>    state BACKUP</span></span>
<span class="line"><span>    interface ens33</span></span>
<span class="line"><span>    virtual_router_id 51 # VRRP 路由 ID实例，每个实例是唯一的</span></span>
<span class="line"><span>    priority 90</span></span>
<span class="line"><span>    advert_int 1</span></span>
<span class="line"><span>    authentication {</span></span>
<span class="line"><span>        auth_type PASS</span></span>
<span class="line"><span>        auth_pass 1111</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    virtual_ipaddress {</span></span>
<span class="line"><span>        192.168.0.120/24</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    track_script {</span></span>
<span class="line"><span>        check_nginx</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>检查 nginx 状态脚本：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt; /etc/keepalived/check_nginx.sh  &lt;&lt; &quot;EOF&quot;</span></span>
<span class="line"><span>#!/bin/bash</span></span>
<span class="line"><span>count=$(ps -ef |grep nginx |egrep -cv &quot;grep|$$&quot;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if [ &quot;$count&quot; -eq 0 ];then</span></span>
<span class="line"><span>    exit 1</span></span>
<span class="line"><span>else</span></span>
<span class="line"><span>    exit 0</span></span>
<span class="line"><span>fi</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>chmod +x /etc/keepalived/check_nginx.sh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、启动并设置开机启动</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>systemctl daemon-reload</span></span>
<span class="line"><span>systemctl restart nginx &amp;&amp; systemctl enable nginx &amp;&amp; systemctl status nginx</span></span>
<span class="line"><span>systemctl restart keepalived &amp;&amp; systemctl enable keepalived &amp;&amp; systemctl status keepalived</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看 VIP</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>ip a</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-16.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>6、修改 hosts（所有节点）</p><p>将 cluster-endpoint 之前执行的 ip 修改执行现在的 VIP</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>192.168.0.113 k8s-master-168-0-113</span></span>
<span class="line"><span>192.168.0.114 k8s-node1-168-0-114</span></span>
<span class="line"><span>192.168.0.115 k8s-node2-168-0-115</span></span>
<span class="line"><span>192.168.0.116 k8s-master2-168-0-116</span></span>
<span class="line"><span>192.168.0.120 cluster-endpoint</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7、测试验证</p><p>查看版本（负载均衡测试验证）</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>curl -k https://cluster-endpoint:16443/version</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-17.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>高可用测试验证，将 k8s-master-168-0-113 节点关机</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>shutdown -h now</span></span>
<span class="line"><span>curl -k https://cluster-endpoint:16443/version</span></span>
<span class="line"><span>kubectl get nodes -A</span></span>
<span class="line"><span>kubectl get pods -A</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>【温馨提示】堆叠集群存在耦合失败的风险。如果一个节点发生故障，则 etcd 成员和控制平面实例都将丢失， 并且冗余会受到影响。你可以通过添加更多控制平面节点来降低此风险。另外，搜索公众号编程技术圈后台回复“1024”，获取一份惊喜礼包。</p></blockquote><h3 id="三、k8s-管理平台-dashboard-环境部署" tabindex="-1"><a class="header-anchor" href="#三、k8s-管理平台-dashboard-环境部署"><span>三、k8s 管理平台 dashboard 环境部署</span></a></h3><h4 id="_1-dashboard-部署" tabindex="-1"><a class="header-anchor" href="#_1-dashboard-部署"><span>1）dashboard 部署</span></a></h4><p>GitHub 地址：<a href="https://github.com/kubernetes/dashboard" target="_blank" rel="noopener noreferrer">https://github.com/kubernetes/dashboard</a></p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.6.0/aio/deploy/recommended.yaml</span></span>
<span class="line"><span>kubectl get pods -n kubernetes-dashboard</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是这个只能内部访问，所以要外部访问，要么部署 ingress，要么就是设置 service NodePort 类型。这里选择 service 暴露端口。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>wget https://raw.githubusercontent.com/kubernetes/dashboard/v2.6.0/aio/deploy/recommended.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>修改后的内容如下：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># Copyright 2017 The Kubernetes Authors.</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);</span></span>
<span class="line"><span># you may not use this file except in compliance with the License.</span></span>
<span class="line"><span># You may obtain a copy of the License at</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>#     http://www.apache.org/licenses/LICENSE-2.0</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span># Unless required by applicable law or agreed to in writing, software</span></span>
<span class="line"><span># distributed under the License is distributed on an &quot;AS IS&quot; BASIS,</span></span>
<span class="line"><span># WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.</span></span>
<span class="line"><span># See the License for the specific language governing permissions and</span></span>
<span class="line"><span># limitations under the License.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>apiVersion: v1</span></span>
<span class="line"><span>kind: Namespace</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  name: kubernetes-dashboard</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>apiVersion: v1</span></span>
<span class="line"><span>kind: ServiceAccount</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    k8s-app: kubernetes-dashboard</span></span>
<span class="line"><span>  name: kubernetes-dashboard</span></span>
<span class="line"><span>  namespace: kubernetes-dashboard</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kind: Service</span></span>
<span class="line"><span>apiVersion: v1</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    k8s-app: kubernetes-dashboard</span></span>
<span class="line"><span>  name: kubernetes-dashboard</span></span>
<span class="line"><span>  namespace: kubernetes-dashboard</span></span>
<span class="line"><span>spec:</span></span>
<span class="line"><span>  type: NodePort</span></span>
<span class="line"><span>  ports:</span></span>
<span class="line"><span>    - port: 443</span></span>
<span class="line"><span>      targetPort: 8443</span></span>
<span class="line"><span>      nodePort: 31443</span></span>
<span class="line"><span>  selector:</span></span>
<span class="line"><span>    k8s-app: kubernetes-dashboard</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>apiVersion: v1</span></span>
<span class="line"><span>kind: Secret</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    k8s-app: kubernetes-dashboard</span></span>
<span class="line"><span>  name: kubernetes-dashboard-certs</span></span>
<span class="line"><span>  namespace: kubernetes-dashboard</span></span>
<span class="line"><span>type: Opaque</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>apiVersion: v1</span></span>
<span class="line"><span>kind: Secret</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    k8s-app: kubernetes-dashboard</span></span>
<span class="line"><span>  name: kubernetes-dashboard-csrf</span></span>
<span class="line"><span>  namespace: kubernetes-dashboard</span></span>
<span class="line"><span>type: Opaque</span></span>
<span class="line"><span>data:</span></span>
<span class="line"><span>  csrf: &quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>apiVersion: v1</span></span>
<span class="line"><span>kind: Secret</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    k8s-app: kubernetes-dashboard</span></span>
<span class="line"><span>  name: kubernetes-dashboard-key-holder</span></span>
<span class="line"><span>  namespace: kubernetes-dashboard</span></span>
<span class="line"><span>type: Opaque</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kind: ConfigMap</span></span>
<span class="line"><span>apiVersion: v1</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    k8s-app: kubernetes-dashboard</span></span>
<span class="line"><span>  name: kubernetes-dashboard-settings</span></span>
<span class="line"><span>  namespace: kubernetes-dashboard</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kind: Role</span></span>
<span class="line"><span>apiVersion: rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    k8s-app: kubernetes-dashboard</span></span>
<span class="line"><span>  name: kubernetes-dashboard</span></span>
<span class="line"><span>  namespace: kubernetes-dashboard</span></span>
<span class="line"><span>rules:</span></span>
<span class="line"><span>  # Allow Dashboard to get, update and delete Dashboard exclusive secrets.</span></span>
<span class="line"><span>  - apiGroups: [&quot;&quot;]</span></span>
<span class="line"><span>    resources: [&quot;secrets&quot;]</span></span>
<span class="line"><span>    resourceNames: [&quot;kubernetes-dashboard-key-holder&quot;, &quot;kubernetes-dashboard-certs&quot;, &quot;kubernetes-dashboard-csrf&quot;]</span></span>
<span class="line"><span>    verbs: [&quot;get&quot;, &quot;update&quot;, &quot;delete&quot;]</span></span>
<span class="line"><span>    # Allow Dashboard to get and update &#39;kubernetes-dashboard-settings&#39; config map.</span></span>
<span class="line"><span>  - apiGroups: [&quot;&quot;]</span></span>
<span class="line"><span>    resources: [&quot;configmaps&quot;]</span></span>
<span class="line"><span>    resourceNames: [&quot;kubernetes-dashboard-settings&quot;]</span></span>
<span class="line"><span>    verbs: [&quot;get&quot;, &quot;update&quot;]</span></span>
<span class="line"><span>    # Allow Dashboard to get metrics.</span></span>
<span class="line"><span>  - apiGroups: [&quot;&quot;]</span></span>
<span class="line"><span>    resources: [&quot;services&quot;]</span></span>
<span class="line"><span>    resourceNames: [&quot;heapster&quot;, &quot;dashboard-metrics-scraper&quot;]</span></span>
<span class="line"><span>    verbs: [&quot;proxy&quot;]</span></span>
<span class="line"><span>  - apiGroups: [&quot;&quot;]</span></span>
<span class="line"><span>    resources: [&quot;services/proxy&quot;]</span></span>
<span class="line"><span>    resourceNames: [&quot;heapster&quot;, &quot;http:heapster:&quot;, &quot;https:heapster:&quot;, &quot;dashboard-metrics-scraper&quot;, &quot;http:dashboard-metrics-scraper&quot;]</span></span>
<span class="line"><span>    verbs: [&quot;get&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kind: ClusterRole</span></span>
<span class="line"><span>apiVersion: rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    k8s-app: kubernetes-dashboard</span></span>
<span class="line"><span>  name: kubernetes-dashboard</span></span>
<span class="line"><span>rules:</span></span>
<span class="line"><span>  # Allow Metrics Scraper to get metrics from the Metrics server</span></span>
<span class="line"><span>  - apiGroups: [&quot;metrics.k8s.io&quot;]</span></span>
<span class="line"><span>    resources: [&quot;pods&quot;, &quot;nodes&quot;]</span></span>
<span class="line"><span>    verbs: [&quot;get&quot;, &quot;list&quot;, &quot;watch&quot;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>apiVersion: rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span>kind: RoleBinding</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    k8s-app: kubernetes-dashboard</span></span>
<span class="line"><span>  name: kubernetes-dashboard</span></span>
<span class="line"><span>  namespace: kubernetes-dashboard</span></span>
<span class="line"><span>roleRef:</span></span>
<span class="line"><span>  apiGroup: rbac.authorization.k8s.io</span></span>
<span class="line"><span>  kind: Role</span></span>
<span class="line"><span>  name: kubernetes-dashboard</span></span>
<span class="line"><span>subjects:</span></span>
<span class="line"><span>  - kind: ServiceAccount</span></span>
<span class="line"><span>    name: kubernetes-dashboard</span></span>
<span class="line"><span>    namespace: kubernetes-dashboard</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>apiVersion: rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span>kind: ClusterRoleBinding</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  name: kubernetes-dashboard</span></span>
<span class="line"><span>roleRef:</span></span>
<span class="line"><span>  apiGroup: rbac.authorization.k8s.io</span></span>
<span class="line"><span>  kind: ClusterRole</span></span>
<span class="line"><span>  name: kubernetes-dashboard</span></span>
<span class="line"><span>subjects:</span></span>
<span class="line"><span>  - kind: ServiceAccount</span></span>
<span class="line"><span>    name: kubernetes-dashboard</span></span>
<span class="line"><span>    namespace: kubernetes-dashboard</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kind: Deployment</span></span>
<span class="line"><span>apiVersion: apps/v1</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    k8s-app: kubernetes-dashboard</span></span>
<span class="line"><span>  name: kubernetes-dashboard</span></span>
<span class="line"><span>  namespace: kubernetes-dashboard</span></span>
<span class="line"><span>spec:</span></span>
<span class="line"><span>  replicas: 1</span></span>
<span class="line"><span>  revisionHistoryLimit: 10</span></span>
<span class="line"><span>  selector:</span></span>
<span class="line"><span>    matchLabels:</span></span>
<span class="line"><span>      k8s-app: kubernetes-dashboard</span></span>
<span class="line"><span>  template:</span></span>
<span class="line"><span>    metadata:</span></span>
<span class="line"><span>      labels:</span></span>
<span class="line"><span>        k8s-app: kubernetes-dashboard</span></span>
<span class="line"><span>    spec:</span></span>
<span class="line"><span>      securityContext:</span></span>
<span class="line"><span>        seccompProfile:</span></span>
<span class="line"><span>          type: RuntimeDefault</span></span>
<span class="line"><span>      containers:</span></span>
<span class="line"><span>        - name: kubernetes-dashboard</span></span>
<span class="line"><span>          image: kubernetesui/dashboard:v2.6.0</span></span>
<span class="line"><span>          imagePullPolicy: Always</span></span>
<span class="line"><span>          ports:</span></span>
<span class="line"><span>            - containerPort: 8443</span></span>
<span class="line"><span>              protocol: TCP</span></span>
<span class="line"><span>          args:</span></span>
<span class="line"><span>            - --auto-generate-certificates</span></span>
<span class="line"><span>            - --namespace=kubernetes-dashboard</span></span>
<span class="line"><span>            # Uncomment the following line to manually specify Kubernetes API server Host</span></span>
<span class="line"><span>            # If not specified, Dashboard will attempt to auto discover the API server and connect</span></span>
<span class="line"><span>            # to it. Uncomment only if the default does not work.</span></span>
<span class="line"><span>            # - --apiserver-host=http://my-address:port</span></span>
<span class="line"><span>          volumeMounts:</span></span>
<span class="line"><span>            - name: kubernetes-dashboard-certs</span></span>
<span class="line"><span>              mountPath: /certs</span></span>
<span class="line"><span>              # Create on-disk volume to store exec logs</span></span>
<span class="line"><span>            - mountPath: /tmp</span></span>
<span class="line"><span>              name: tmp-volume</span></span>
<span class="line"><span>          livenessProbe:</span></span>
<span class="line"><span>            httpGet:</span></span>
<span class="line"><span>              scheme: HTTPS</span></span>
<span class="line"><span>              path: /</span></span>
<span class="line"><span>              port: 8443</span></span>
<span class="line"><span>            initialDelaySeconds: 30</span></span>
<span class="line"><span>            timeoutSeconds: 30</span></span>
<span class="line"><span>          securityContext:</span></span>
<span class="line"><span>            allowPrivilegeEscalation: false</span></span>
<span class="line"><span>            readOnlyRootFilesystem: true</span></span>
<span class="line"><span>            runAsUser: 1001</span></span>
<span class="line"><span>            runAsGroup: 2001</span></span>
<span class="line"><span>      volumes:</span></span>
<span class="line"><span>        - name: kubernetes-dashboard-certs</span></span>
<span class="line"><span>          secret:</span></span>
<span class="line"><span>            secretName: kubernetes-dashboard-certs</span></span>
<span class="line"><span>        - name: tmp-volume</span></span>
<span class="line"><span>          emptyDir: {}</span></span>
<span class="line"><span>      serviceAccountName: kubernetes-dashboard</span></span>
<span class="line"><span>      nodeSelector:</span></span>
<span class="line"><span>        &quot;kubernetes.io/os&quot;: linux</span></span>
<span class="line"><span>      # Comment the following tolerations if Dashboard must not be deployed on master</span></span>
<span class="line"><span>      tolerations:</span></span>
<span class="line"><span>        - key: node-role.kubernetes.io/master</span></span>
<span class="line"><span>          effect: NoSchedule</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kind: Service</span></span>
<span class="line"><span>apiVersion: v1</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    k8s-app: dashboard-metrics-scraper</span></span>
<span class="line"><span>  name: dashboard-metrics-scraper</span></span>
<span class="line"><span>  namespace: kubernetes-dashboard</span></span>
<span class="line"><span>spec:</span></span>
<span class="line"><span>  ports:</span></span>
<span class="line"><span>    - port: 8000</span></span>
<span class="line"><span>      targetPort: 8000</span></span>
<span class="line"><span>  selector:</span></span>
<span class="line"><span>    k8s-app: dashboard-metrics-scraper</span></span>
<span class="line"><span></span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kind: Deployment</span></span>
<span class="line"><span>apiVersion: apps/v1</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    k8s-app: dashboard-metrics-scraper</span></span>
<span class="line"><span>  name: dashboard-metrics-scraper</span></span>
<span class="line"><span>  namespace: kubernetes-dashboard</span></span>
<span class="line"><span>spec:</span></span>
<span class="line"><span>  replicas: 1</span></span>
<span class="line"><span>  revisionHistoryLimit: 10</span></span>
<span class="line"><span>  selector:</span></span>
<span class="line"><span>    matchLabels:</span></span>
<span class="line"><span>      k8s-app: dashboard-metrics-scraper</span></span>
<span class="line"><span>  template:</span></span>
<span class="line"><span>    metadata:</span></span>
<span class="line"><span>      labels:</span></span>
<span class="line"><span>        k8s-app: dashboard-metrics-scraper</span></span>
<span class="line"><span>    spec:</span></span>
<span class="line"><span>      securityContext:</span></span>
<span class="line"><span>        seccompProfile:</span></span>
<span class="line"><span>          type: RuntimeDefault</span></span>
<span class="line"><span>      containers:</span></span>
<span class="line"><span>        - name: dashboard-metrics-scraper</span></span>
<span class="line"><span>          image: kubernetesui/metrics-scraper:v1.0.8</span></span>
<span class="line"><span>          ports:</span></span>
<span class="line"><span>            - containerPort: 8000</span></span>
<span class="line"><span>              protocol: TCP</span></span>
<span class="line"><span>          livenessProbe:</span></span>
<span class="line"><span>            httpGet:</span></span>
<span class="line"><span>              scheme: HTTP</span></span>
<span class="line"><span>              path: /</span></span>
<span class="line"><span>              port: 8000</span></span>
<span class="line"><span>            initialDelaySeconds: 30</span></span>
<span class="line"><span>            timeoutSeconds: 30</span></span>
<span class="line"><span>          volumeMounts:</span></span>
<span class="line"><span>          - mountPath: /tmp</span></span>
<span class="line"><span>            name: tmp-volume</span></span>
<span class="line"><span>          securityContext:</span></span>
<span class="line"><span>            allowPrivilegeEscalation: false</span></span>
<span class="line"><span>            readOnlyRootFilesystem: true</span></span>
<span class="line"><span>            runAsUser: 1001</span></span>
<span class="line"><span>            runAsGroup: 2001</span></span>
<span class="line"><span>      serviceAccountName: kubernetes-dashboard</span></span>
<span class="line"><span>      nodeSelector:</span></span>
<span class="line"><span>        &quot;kubernetes.io/os&quot;: linux</span></span>
<span class="line"><span>      # Comment the following tolerations if Dashboard must not be deployed on master</span></span>
<span class="line"><span>      tolerations:</span></span>
<span class="line"><span>        - key: node-role.kubernetes.io/master</span></span>
<span class="line"><span>          effect: NoSchedule</span></span>
<span class="line"><span>      volumes:</span></span>
<span class="line"><span>        - name: tmp-volume</span></span>
<span class="line"><span>          emptyDir: {}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-18.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>重新部署</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>kubectl delete -f recommended.yaml</span></span>
<span class="line"><span>kubectl apply -f recommended.yaml</span></span>
<span class="line"><span>kubectl get svc,pods -n kubernetes-dashboard</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-19.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><h4 id="_2-创建登录用户" tabindex="-1"><a class="header-anchor" href="#_2-创建登录用户"><span>2）创建登录用户</span></a></h4><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt;ServiceAccount.yaml&lt;&lt;EOF</span></span>
<span class="line"><span>apiVersion: v1</span></span>
<span class="line"><span>kind: ServiceAccount</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  name: admin-user</span></span>
<span class="line"><span>  namespace: kubernetes-dashboard</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span>apiVersion: rbac.authorization.k8s.io/v1</span></span>
<span class="line"><span>kind: ClusterRoleBinding</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  name: admin-user</span></span>
<span class="line"><span>roleRef:</span></span>
<span class="line"><span>  apiGroup: rbac.authorization.k8s.io</span></span>
<span class="line"><span>  kind: ClusterRole</span></span>
<span class="line"><span>  name: cluster-admin</span></span>
<span class="line"><span>subjects:</span></span>
<span class="line"><span>- kind: ServiceAccount</span></span>
<span class="line"><span>  name: admin-user</span></span>
<span class="line"><span>  namespace: kubernetes-dashboard</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>kubectl apply -f ServiceAccount.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建并获取登录 token</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>kubectl -n kubernetes-dashboard create token admin-user</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_3-配置-hosts-登录-dashboard-web" tabindex="-1"><a class="header-anchor" href="#_3-配置-hosts-登录-dashboard-web"><span>3）配置 hosts 登录 dashboard web</span></a></h4><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>192.168.0.120 cluster-endpoint</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>登录：<a href="https://cluster-endpoint:31443" target="_blank" rel="noopener noreferrer">https://cluster-endpoint:31443</a></p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-20.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>输入上面创建的 token 登录</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-21.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><h3 id="四、k8s-镜像仓库-harbor-环境部署" tabindex="-1"><a class="header-anchor" href="#四、k8s-镜像仓库-harbor-环境部署"><span>四、k8s 镜像仓库 harbor 环境部署</span></a></h3><p>GitHub 地址：<a href="https://github.com/helm/helm/releases" target="_blank" rel="noopener noreferrer">https://github.com/helm/helm/releases</a> 这使用 helm 安装，所以得先安装 helm。另外，搜索公众号 Java 架构师技术后台回复“面试题”，获取一份惊喜礼包。</p><h4 id="_1-安装-helm" tabindex="-1"><a class="header-anchor" href="#_1-安装-helm"><span>1）安装 helm</span></a></h4><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>mkdir -p /opt/k8s/helm &amp;&amp; cd /opt/k8s/helm</span></span>
<span class="line"><span>wget https://get.helm.sh/helm-v3.9.0-rc.1-linux-amd64.tar.gz</span></span>
<span class="line"><span>tar -xf helm-v3.9.0-rc.1-linux-amd64.tar.gz</span></span>
<span class="line"><span>ln -s /opt/k8s/helm/linux-amd64/helm /usr/bin/helm</span></span>
<span class="line"><span>helm version</span></span>
<span class="line"><span>helm help</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-配置-hosts" tabindex="-1"><a class="header-anchor" href="#_2-配置-hosts"><span>2）配置 hosts</span></a></h4><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>192.168.0.120 myharbor.com</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="_3-创建-stl-证书" tabindex="-1"><a class="header-anchor" href="#_3-创建-stl-证书"><span>3）创建 stl 证书</span></a></h4><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>mkdir /opt/k8s/helm/stl &amp;&amp; cd /opt/k8s/helm/stl</span></span>
<span class="line"><span># 生成 CA 证书私钥</span></span>
<span class="line"><span>openssl genrsa -out ca.key 4096</span></span>
<span class="line"><span># 生成 CA 证书</span></span>
<span class="line"><span>openssl req -x509 -new -nodes -sha512 -days 3650 \\</span></span>
<span class="line"><span> -subj &quot;/C=CN/ST=Guangdong/L=Shenzhen/O=harbor/OU=harbor/CN=myharbor.com&quot; \\</span></span>
<span class="line"><span> -key ca.key \\</span></span>
<span class="line"><span> -out ca.crt</span></span>
<span class="line"><span># 创建域名证书，生成私钥</span></span>
<span class="line"><span>openssl genrsa -out myharbor.com.key 4096</span></span>
<span class="line"><span># 生成证书签名请求 CSR</span></span>
<span class="line"><span>openssl req -sha512 -new \\</span></span>
<span class="line"><span>    -subj &quot;/C=CN/ST=Guangdong/L=Shenzhen/O=harbor/OU=harbor/CN=myharbor.com&quot; \\</span></span>
<span class="line"><span>    -key myharbor.com.key \\</span></span>
<span class="line"><span>    -out myharbor.com.csr</span></span>
<span class="line"><span># 生成 x509 v3 扩展</span></span>
<span class="line"><span>cat &gt; v3.ext &lt;&lt;-EOF</span></span>
<span class="line"><span>authorityKeyIdentifier=keyid,issuer</span></span>
<span class="line"><span>basicConstraints=CA:FALSE</span></span>
<span class="line"><span>keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment</span></span>
<span class="line"><span>extendedKeyUsage = serverAuth</span></span>
<span class="line"><span>subjectAltName = @alt_names</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[alt_names]</span></span>
<span class="line"><span>DNS.1=myharbor.com</span></span>
<span class="line"><span>DNS.2=*.myharbor.com</span></span>
<span class="line"><span>DNS.3=hostname</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>#创建 Harbor 访问证书</span></span>
<span class="line"><span>openssl x509 -req -sha512 -days 3650 \\</span></span>
<span class="line"><span>    -extfile v3.ext \\</span></span>
<span class="line"><span>    -CA ca.crt -CAkey ca.key -CAcreateserial \\</span></span>
<span class="line"><span>    -in myharbor.com.csr \\</span></span>
<span class="line"><span>    -out myharbor.com.crt</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-安装-ingress" tabindex="-1"><a class="header-anchor" href="#_4-安装-ingress"><span>4）安装 ingress</span></a></h3><p>ingress 官方网站：<a href="https://kubernetes.github.io/ingress-nginx/" target="_blank" rel="noopener noreferrer">https://kubernetes.github.io/ingress-nginx/</a> ingress 仓库地址：<a href="https://github.com/kubernetes/ingress-nginx" target="_blank" rel="noopener noreferrer">https://github.com/kubernetes/ingress-nginx</a> 部署文档：<a href="https://kubernetes.github.io/ingress-nginx/deploy/" target="_blank" rel="noopener noreferrer">https://kubernetes.github.io/ingress-nginx/deploy/</a></p><p>1、通过 helm 部署</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>helm upgrade --install ingress-nginx ingress-nginx \\</span></span>
<span class="line"><span>  --repo https://kubernetes.github.io/ingress-nginx \\</span></span>
<span class="line"><span>  --namespace ingress-nginx --create-namespace</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、通过 YAML 文件安装（本章使用这个方式安装 ingress）</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果下载镜像失败，可以用以下方式修改镜像地址再安装</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 可以先把镜像下载，再安装</span></span>
<span class="line"><span>docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/nginx-ingress-controller:v1.2.0</span></span>
<span class="line"><span>docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/kube-webhook-certgen:v1.1.1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>wget https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml</span></span>
<span class="line"><span># 修改镜像地址</span></span>
<span class="line"><span>sed -i &#39;s@k8s.gcr.io/ingress-nginx/controller:v1.2.0\\(.*\\)@registry.cn-hangzhou.aliyuncs.com/google_containers/nginx-ingress-controller:v1.2.0@&#39; deploy.yaml</span></span>
<span class="line"><span>sed -i &#39;s@k8s.gcr.io/ingress-nginx/kube-webhook-certgen:v1.1.1\\(.*\\)$@registry.cn-hangzhou.aliyuncs.com/google_containers/kube-webhook-certgen:v1.1.1@&#39; deploy.yaml</span></span>
<span class="line"><span></span></span>
<span class="line"><span>###还需要修改两地方</span></span>
<span class="line"><span>#1、kind: 类型修改成DaemonSet，replicas: 注销掉，因为DaemonSet模式会每个节点运行一个pod</span></span>
<span class="line"><span>#2、在添加一条：hostnetwork：true</span></span>
<span class="line"><span>#3、把LoadBalancer修改成NodePort</span></span>
<span class="line"><span>#4、在--validating-webhook-key下面添加- --watch-ingress-without-class=true</span></span>
<span class="line"><span>#5、设置master节点可调度</span></span>
<span class="line"><span>kubectl taint nodes k8s-master-168-0-113 node-role.kubernetes.io/control-plane:NoSchedule-</span></span>
<span class="line"><span>kubectl taint nodes k8s-master2-168-0-116 node-role.kubernetes.io/control-plane:NoSchedule-</span></span>
<span class="line"><span></span></span>
<span class="line"><span>kubectl apply -f deploy.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-22.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><h4 id="_5-安装-nfs" tabindex="-1"><a class="header-anchor" href="#_5-安装-nfs"><span>5）安装 nfs</span></a></h4><p>1、所有节点安装 nfs</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>yum -y install  nfs-utils rpcbind</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>2、在 master 节点创建共享目录并授权</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>mkdir /opt/nfsdata</span></span>
<span class="line"><span># 授权共享目录</span></span>
<span class="line"><span>chmod 666 /opt/nfsdata</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、配置 exports 文件</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt; /etc/exports&lt;&lt;EOF</span></span>
<span class="line"><span>/opt/nfsdata *(rw,no_root_squash,no_all_squash,sync)</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span># 配置生效</span></span>
<span class="line"><span>exportfs -r</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>exportfs 命令</p><blockquote><p>常用选项 -a 全部挂载或者全部卸载 -r 重新挂载 -u 卸载某一个目录 -v 显示共享目录 以下操作在服务端上</p></blockquote><p>4、启动 rpc 和 nfs（客户端只需要启动 rpc 服务）（注意顺序）</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>systemctl start rpcbind</span></span>
<span class="line"><span>systemctl start nfs-server</span></span>
<span class="line"><span>systemctl enable rpcbind</span></span>
<span class="line"><span>systemctl enable nfs-server</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>showmount -e</span></span>
<span class="line"><span># VIP</span></span>
<span class="line"><span>showmount -e 192.168.0.120</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>-e 显示 NFS 服务器的共享列表 -a 显示本机挂载的文件资源的情况 NFS 资源的情况 -v 显示版本号</p></blockquote><p>5、客户端</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 安装</span></span>
<span class="line"><span>yum -y install  nfs-utils rpcbind</span></span>
<span class="line"><span># 启动rpc服务</span></span>
<span class="line"><span>systemctl start rpcbind</span></span>
<span class="line"><span>systemctl enable rpcbind</span></span>
<span class="line"><span># 创建挂载目录</span></span>
<span class="line"><span>mkdir /mnt/nfsdata</span></span>
<span class="line"><span># 挂载</span></span>
<span class="line"><span>echo &quot;192.168.0.120:/opt/nfsdata /mnt/nfsdata     nfs    defaults  0 1&quot;&gt;&gt; /etc/fstab</span></span>
<span class="line"><span>mount -a</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6、rsync 数据同步</p><p>【1】rsync 安装</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 两端都得安装</span></span>
<span class="line"><span>yum -y install rsync</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>【2】配置 在/etc/rsyncd.conf 中添加</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cat &gt;/etc/rsyncd.conf&lt;&lt;EOF</span></span>
<span class="line"><span>uid = root</span></span>
<span class="line"><span>gid = root</span></span>
<span class="line"><span>#禁锢在源目录</span></span>
<span class="line"><span>use chroot = yes</span></span>
<span class="line"><span>#监听地址</span></span>
<span class="line"><span>address = 192.168.0.113</span></span>
<span class="line"><span>#监听地址tcp/udp 873，可通过cat /etc/services | grep rsync查看</span></span>
<span class="line"><span>port 873</span></span>
<span class="line"><span>#日志文件位置</span></span>
<span class="line"><span>log file = /var/log/rsyncd.log</span></span>
<span class="line"><span>#存放进程 ID 的文件位置</span></span>
<span class="line"><span>pid file = /var/run/rsyncd.pid</span></span>
<span class="line"><span>#允许访问的客户机地址</span></span>
<span class="line"><span>hosts allow = 192.168.0.0/16</span></span>
<span class="line"><span>#共享模块名称</span></span>
<span class="line"><span>[nfsdata]</span></span>
<span class="line"><span>#源目录的实际路径</span></span>
<span class="line"><span>path = /opt/nfsdata</span></span>
<span class="line"><span>comment = Document Root of www.kgc.com</span></span>
<span class="line"><span>#指定客户端是否可以上传文件，默认对所有模块为 true</span></span>
<span class="line"><span>read only = yes</span></span>
<span class="line"><span>#同步时不再压缩的文件类型</span></span>
<span class="line"><span>dont compress = *.gz *.bz2 *.tgz *.zip *.rar *.z</span></span>
<span class="line"><span>#授权账户，多个账号以空格分隔，不加则为匿名，不依赖系统账号</span></span>
<span class="line"><span>auth users = backuper</span></span>
<span class="line"><span>#存放账户信息的数据文件</span></span>
<span class="line"><span>secrets file = /etc/rsyncd_users.db</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>配置 rsyncd_users.db</span></span>
<span class="line"><span></span></span>
<span class="line"><span>cat &gt;/etc/rsyncd_users.db&lt;&lt;EOF</span></span>
<span class="line"><span>backuper:123456</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>#官方要求，最好只是赋权600！</span></span>
<span class="line"><span>chmod 600 /etc/rsyncd_users.db</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【3】rsyncd.conf 常用参数详解</p><p>rsyncd.conf 参数</p><table><thead><tr><th style="text-align:left;">rsyncd.conf 参数</th><th style="text-align:left;">参数说明</th></tr></thead><tbody><tr><td style="text-align:left;">uid=root</td><td style="text-align:left;">rsync 使用的用户。</td></tr><tr><td style="text-align:left;">gid=root</td><td style="text-align:left;">rsync 使用的用户组（用户所在的组）</td></tr><tr><td style="text-align:left;">use chroot=no</td><td style="text-align:left;">如果为 true，daemon 会在客户端传输文件前“chroot to the path”。这是一种安全配置，因为我们大多数都在内网，所以不配也没关系</td></tr><tr><td style="text-align:left;">max connections=200</td><td style="text-align:left;">设置最大连接数，默认 0，意思无限制，负值为关闭这个模块</td></tr><tr><td style="text-align:left;">timeout=400</td><td style="text-align:left;">默认为 0，表示 no timeout，建议 300-600（5-10 分钟）</td></tr><tr><td style="text-align:left;">pid file</td><td style="text-align:left;">rsync daemon 启动后将其进程 pid 写入此文件。如果这个文件存在，rsync 不会覆盖该文件，而是会终止</td></tr><tr><td style="text-align:left;">lock file</td><td style="text-align:left;">指定 lock 文件用来支持“max connections”参数，使得总连接数不会超过限制</td></tr><tr><td style="text-align:left;">log file</td><td style="text-align:left;">不设或者设置错误，rsync 会使用 rsyslog 输出相关日志信息</td></tr><tr><td style="text-align:left;">ignore errors</td><td style="text-align:left;">忽略 I/O 错误</td></tr><tr><td style="text-align:left;">read only=false</td><td style="text-align:left;">指定客户端是否可以上传文件，默认对所有模块为 true</td></tr><tr><td style="text-align:left;">list=false</td><td style="text-align:left;">是否允许客户端可以查看可用模块列表，默认为可以</td></tr><tr><td style="text-align:left;">hosts allow</td><td style="text-align:left;">指定可以联系的客户端主机名或和 ip 地址或地址段，默认情况没有此参数，即都可以连接</td></tr><tr><td style="text-align:left;">hosts deny</td><td style="text-align:left;">指定不可以联系的客户端主机名或 ip 地址或地址段，默认情况没有此参数，即都可以连接</td></tr><tr><td style="text-align:left;">auth users</td><td style="text-align:left;">指定以空格或逗号分隔的用户可以使用哪些模块，用户不需要在本地系统中存在。默认为所有用户无密码访问</td></tr><tr><td style="text-align:left;">secrets file</td><td style="text-align:left;">指定用户名和密码存放的文件，格式；用户名；密码，密码不超过 8 位</td></tr><tr><td style="text-align:left;">[backup]</td><td style="text-align:left;">这里就是模块名称，需用中括号扩起来，起名称没有特殊要求，但最好是有意义的名称，便于以后维护</td></tr><tr><td style="text-align:left;">path</td><td style="text-align:left;">这个模块中，daemon 使用的文件系统或目录，目录的权限要注意和配置文件中的权限一致，否则会遇到读写的问题</td></tr></tbody></table><p>【4】rsync 常用命令参数详解</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>rsync --help</span></span>
<span class="line"><span></span></span>
<span class="line"><span>rsync [选项]  原始位置   目标位置</span></span>
<span class="line"><span></span></span>
<span class="line"><span>常用选项    说明</span></span>
<span class="line"><span>-r    递归模式，包含目录及子目录中的所有文件</span></span>
<span class="line"><span>-l    对于符号链接文件仍然复制为符号链接文件</span></span>
<span class="line"><span>-v    显示同步过程的详细信息</span></span>
<span class="line"><span>-z    在传输文件时进行压缩goD</span></span>
<span class="line"><span>-p    保留文件的权限标记</span></span>
<span class="line"><span>-a    归档模式，递归并保留对象属性，等同于-rlpt</span></span>
<span class="line"><span>-t    保留文件的时间标记</span></span>
<span class="line"><span>-g    保留文件的属组标记（仅超级用户使用）</span></span>
<span class="line"><span>-o    保留文件的属主标记（仅超级用户使用）</span></span>
<span class="line"><span>-H    保留硬链接文件</span></span>
<span class="line"><span>-A    保留ACL属性信息</span></span>
<span class="line"><span>-D    保留设备文件及其他特殊文件</span></span>
<span class="line"><span>--delete  删除目标位置有而原始位置没有的文件</span></span>
<span class="line"><span>--checksum  根据对象的校验和来决定是否跳过文件</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【5】启动服务（数据源机器）</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#rsync监听端口：873</span></span>
<span class="line"><span>#rsync运行模式：C/S</span></span>
<span class="line"><span>rsync --daemon --config=/etc/rsyncd.conf</span></span>
<span class="line"><span>netstat -tnlp|grep :873</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【6】执行命令同步数据</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 在目的机器上执行</span></span>
<span class="line"><span># rsync -avz 用户名@源主机地址/源目录 目的目录</span></span>
<span class="line"><span>rsync -avz root@192.168.0.113:/opt/nfsdata/* /opt/nfsdata/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>【7】crontab 定时同步</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 配置crontab， 每五分钟同步一次，这种方式不好</span></span>
<span class="line"><span>*/5 * * * * rsync -avz root@192.168.0.113:/opt/nfsdata/* /opt/nfsdata/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>【温馨提示】crontab 定时同步数据不太好，可以使用 rsync+inotify 做数据实时同步，这里篇幅有点长了，先不讲，如果后面有时间会出一篇单独文章来讲。另外，搜索公众号后端架构师后台回复“架构整洁”，获取一份惊喜礼包。</p></blockquote><h3 id="_6-创建-nfs-provisioner-和持久化存储-sc" tabindex="-1"><a class="header-anchor" href="#_6-创建-nfs-provisioner-和持久化存储-sc"><span>6）创建 nfs provisioner 和持久化存储 SC</span></a></h3><blockquote><p>【温馨提示】这里跟我之前的文章有点不同，之前的方式也不适用新版本。</p></blockquote><p>GitHub 地址：<a href="https://github.com/kubernetes-sigs/nfs-subdir-external-provisioner" target="_blank" rel="noopener noreferrer">https://github.com/kubernetes-sigs/nfs-subdir-external-provisioner</a></p><p>helm 部署 nfs-subdir-external-provisioner</p><p>1、添加 helm 仓库</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>helm repo add nfs-subdir-external-provisioner https://kubernetes-sigs.github.io/nfs-subdir-external-provisioner/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>2、helm 安装 nfs provisioner</p><blockquote><p>【温馨提示】默认镜像是无法访问的，这里使用 dockerhub 搜索到的镜像 willdockerhub/nfs-subdir-external-provisioner: v4.0.2，还有就是 StorageClass 不分命名空间，所有在所有命名空间下都可以使用。</p></blockquote><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>helm install nfs-subdir-external-provisioner nfs-subdir-external-provisioner/nfs-subdir-external-provisioner \\</span></span>
<span class="line"><span>  --namespace=nfs-provisioner \\</span></span>
<span class="line"><span>  --create-namespace \\</span></span>
<span class="line"><span>  --set image.repository=willdockerhub/nfs-subdir-external-provisioner \\</span></span>
<span class="line"><span>  --set image.tag=v4.0.2 \\</span></span>
<span class="line"><span>  --set replicaCount=2 \\</span></span>
<span class="line"><span>  --set storageClass.name=nfs-client \\</span></span>
<span class="line"><span>  --set storageClass.defaultClass=true \\</span></span>
<span class="line"><span>  --set nfs.server=192.168.0.120 \\</span></span>
<span class="line"><span>  --set nfs.path=/opt/nfsdata</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>【温馨提示】上面 nfs.server 设置为 VIP，可实现高可用。</p></blockquote><p>3、查看</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>kubectl get pods,deploy,sc -n nfs-provisioner</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-23.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><h4 id="_7-部署-harbor-https-方式" tabindex="-1"><a class="header-anchor" href="#_7-部署-harbor-https-方式"><span>7）部署 Harbor（Https 方式）</span></a></h4><p>1、创建 Namespace</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>kubectl create ns harbor</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>2、创建证书秘钥</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>kubectl create secret tls myharbor.com --key myharbor.com.key --cert myharbor.com.crt -n harbor</span></span>
<span class="line"><span>kubectl get secret myharbor.com -n harbor</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>3、添加 Chart 库</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>helm repo add harbor https://helm.goharbor.io</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>4、通过 helm 安装 harbor</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>helm install myharbor --namespace harbor harbor/harbor \\</span></span>
<span class="line"><span>  --set expose.ingress.hosts.core=myharbor.com \\</span></span>
<span class="line"><span>  --set expose.ingress.hosts.notary=notary.myharbor.com \\</span></span>
<span class="line"><span>  --set-string expose.ingress.annotations.&#39;nginx\\.org/client-max-body-size&#39;=&quot;1024m&quot; \\</span></span>
<span class="line"><span>  --set expose.tls.secretName=myharbor.com \\</span></span>
<span class="line"><span>  --set persistence.persistentVolumeClaim.registry.storageClass=nfs-client \\</span></span>
<span class="line"><span>  --set persistence.persistentVolumeClaim.jobservice.storageClass=nfs-client \\</span></span>
<span class="line"><span>  --set persistence.persistentVolumeClaim.database.storageClass=nfs-client \\</span></span>
<span class="line"><span>  --set persistence.persistentVolumeClaim.redis.storageClass=nfs-client \\</span></span>
<span class="line"><span>  --set persistence.persistentVolumeClaim.trivy.storageClass=nfs-client \\</span></span>
<span class="line"><span>  --set persistence.persistentVolumeClaim.chartmuseum.storageClass=nfs-client \\</span></span>
<span class="line"><span>  --set persistence.enabled=true \\</span></span>
<span class="line"><span>  --set externalURL=https://myharbor.com \\</span></span>
<span class="line"><span>  --set harborAdminPassword=Harbor12345</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里稍等一段时间在查看资源状态</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>kubectl get ingress,svc,pods,pvc -n harbor</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-24.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><h3 id="_5、ingress-没有-address-问题解决" tabindex="-1"><a class="header-anchor" href="#_5、ingress-没有-address-问题解决"><span>5、ingress 没有 ADDRESS 问题解决</span></a></h3><p>【分析】，发现&quot;error: endpoints “default-http-backend” not found&quot;</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cat &lt;&lt; EOF &gt; default-http-backend.yaml</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>apiVersion: apps/v1</span></span>
<span class="line"><span>kind: Deployment</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  name: default-http-backend</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    app: default-http-backend</span></span>
<span class="line"><span>  namespace: harbor</span></span>
<span class="line"><span>spec:</span></span>
<span class="line"><span>  replicas: 1</span></span>
<span class="line"><span>  selector:</span></span>
<span class="line"><span>    matchLabels:</span></span>
<span class="line"><span>      app: default-http-backend</span></span>
<span class="line"><span>  template:</span></span>
<span class="line"><span>    metadata:</span></span>
<span class="line"><span>      labels:</span></span>
<span class="line"><span>        app: default-http-backend</span></span>
<span class="line"><span>    spec:</span></span>
<span class="line"><span>      terminationGracePeriodSeconds: 60</span></span>
<span class="line"><span>      containers:</span></span>
<span class="line"><span>      - name: default-http-backend</span></span>
<span class="line"><span>        # Any image is permissible as long as:</span></span>
<span class="line"><span>        # 1. It serves a 404 page at /</span></span>
<span class="line"><span>        # 2. It serves 200 on a /healthz endpoint</span></span>
<span class="line"><span>        image: registry.cn-hangzhou.aliyuncs.com/google_containers/defaultbackend:1.4</span></span>
<span class="line"><span>#        image: gcr.io/google_containers/defaultbackend:1.4</span></span>
<span class="line"><span>        livenessProbe:</span></span>
<span class="line"><span>          httpGet:</span></span>
<span class="line"><span>            path: /healthz</span></span>
<span class="line"><span>            port: 8080</span></span>
<span class="line"><span>            scheme: HTTP</span></span>
<span class="line"><span>          initialDelaySeconds: 30</span></span>
<span class="line"><span>          timeoutSeconds: 5</span></span>
<span class="line"><span>        ports:</span></span>
<span class="line"><span>        - containerPort: 8080</span></span>
<span class="line"><span>        resources:</span></span>
<span class="line"><span>          limits:</span></span>
<span class="line"><span>            cpu: 10m</span></span>
<span class="line"><span>            memory: 20Mi</span></span>
<span class="line"><span>          requests:</span></span>
<span class="line"><span>            cpu: 10m</span></span>
<span class="line"><span>            memory: 20Mi</span></span>
<span class="line"><span>---</span></span>
<span class="line"><span></span></span>
<span class="line"><span>apiVersion: v1</span></span>
<span class="line"><span>kind: Service</span></span>
<span class="line"><span>metadata:</span></span>
<span class="line"><span>  name: default-http-backend</span></span>
<span class="line"><span>  namespace: harbor</span></span>
<span class="line"><span>  labels:</span></span>
<span class="line"><span>    app: default-http-backend</span></span>
<span class="line"><span>spec:</span></span>
<span class="line"><span>  ports:</span></span>
<span class="line"><span>  - port: 80</span></span>
<span class="line"><span>    targetPort: 8080</span></span>
<span class="line"><span>  selector:</span></span>
<span class="line"><span>    app: default-http-backend</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>kubectl apply -f default-http-backend.yaml</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6、卸载重新部署" tabindex="-1"><a class="header-anchor" href="#_6、卸载重新部署"><span>6、卸载重新部署</span></a></h3><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 卸载</span></span>
<span class="line"><span>helm uninstall myharbor -n harbor</span></span>
<span class="line"><span>kubectl get pvc -n harbor| awk &#39;NR!=1{print $1}&#39; | xargs kubectl delete pvc -n harbor</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 部署</span></span>
<span class="line"><span>helm install myharbor --namespace harbor harbor/harbor \\</span></span>
<span class="line"><span>  --set expose.ingress.hosts.core=myharbor.com \\</span></span>
<span class="line"><span>  --set expose.ingress.hosts.notary=notary.myharbor.com \\</span></span>
<span class="line"><span>  --set-string expose.ingress.annotations.&#39;nginx\\.org/client-max-body-size&#39;=&quot;1024m&quot; \\</span></span>
<span class="line"><span>  --set expose.tls.secretName=myharbor.com \\</span></span>
<span class="line"><span>  --set persistence.persistentVolumeClaim.registry.storageClass=nfs-client \\</span></span>
<span class="line"><span>  --set persistence.persistentVolumeClaim.jobservice.storageClass=nfs-client \\</span></span>
<span class="line"><span>  --set persistence.persistentVolumeClaim.database.storageClass=nfs-client \\</span></span>
<span class="line"><span>  --set persistence.persistentVolumeClaim.redis.storageClass=nfs-client \\</span></span>
<span class="line"><span>  --set persistence.persistentVolumeClaim.trivy.storageClass=nfs-client \\</span></span>
<span class="line"><span>  --set persistence.persistentVolumeClaim.chartmuseum.storageClass=nfs-client \\</span></span>
<span class="line"><span>  --set persistence.enabled=true \\</span></span>
<span class="line"><span>  --set externalURL=https://myharbor.com \\</span></span>
<span class="line"><span>  --set harborAdminPassword=Harbor12345</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-25.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>5、访问 harbor</p><p><a href="https://myharbor.com" target="_blank" rel="noopener noreferrer">https://myharbor.com</a> 账号/密码：admin/Harbor12345</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-26.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>6、harbor 常见操作 【1】创建项目 bigdata</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-27.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>【2】配置私有仓库 在文件/etc/docker/daemon.json 添加如下内容：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&quot;insecure-registries&quot;:[&quot;https://myharbor.com&quot;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>重启 docker</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>systemctl restart docker</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>【3】服务器上登录 harbor</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker login https://myharbor.com</span></span>
<span class="line"><span>#账号/密码：admin/Harbor12345</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653047-28.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>【4】打标签并把镜像上传到 harbor</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>docker tag rancher/pause:3.6 myharbor.com/bigdata/pause:3.6</span></span>
<span class="line"><span>docker push myharbor.com/bigdata/pause:3.6</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>7、修改 containerd 配置</p><p>以前使用 docker-engine 的时候，只需要修改/etc/docker/daemon.json 就行，但是新版的 k8s 已经使用 containerd 了，所以这里需要做相关配置，要不然 containerd 会失败。证书（ca.crt）可以在页面上下载：</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653047-29.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>创建域名目录</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>mkdir /etc/containerd/myharbor.com</span></span>
<span class="line"><span>cp ca.crt /etc/containerd/myharbor.com/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置文件：/etc/containerd/config.toml</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>[plugins.&quot;io.containerd.grpc.v1.cri&quot;.registry]</span></span>
<span class="line"><span>      config_path = &quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      [plugins.&quot;io.containerd.grpc.v1.cri&quot;.registry.auths]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      [plugins.&quot;io.containerd.grpc.v1.cri&quot;.registry.configs]</span></span>
<span class="line"><span>        [plugins.&quot;io.containerd.grpc.v1.cri&quot;.registry.configs.&quot;myharbor.com&quot;.tls]</span></span>
<span class="line"><span>          ca_file = &quot;/etc/containerd/myharbor.com/ca.crt&quot;</span></span>
<span class="line"><span>        [plugins.&quot;io.containerd.grpc.v1.cri&quot;.registry.configs.&quot;myharbor.com&quot;.auth]</span></span>
<span class="line"><span>          username = &quot;admin&quot;</span></span>
<span class="line"><span>          password = &quot;Harbor12345&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      [plugins.&quot;io.containerd.grpc.v1.cri&quot;.registry.headers]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      [plugins.&quot;io.containerd.grpc.v1.cri&quot;.registry.mirrors]</span></span>
<span class="line"><span>        [plugins.&quot;io.containerd.grpc.v1.cri&quot;.registry.mirrors.&quot;myharbor.com&quot;]</span></span>
<span class="line"><span>          endpoint = [&quot;https://myharbor.com&quot;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653047-30.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>重启 containerd</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>#重新加载配置</span></span>
<span class="line"><span>systemctl daemon-reload</span></span>
<span class="line"><span>#重启containerd</span></span>
<span class="line"><span>systemctl restart containerd</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单使用</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># 把docker换成crictl 就行，命令都差不多</span></span>
<span class="line"><span>crictl pull myharbor.com/bigdata/mysql:5.7.38</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 crictl 报如下错误的解决办法</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>WARN[0000] image connect using default endpoints: [unix:///var/run/dockershim.sock unix:///run/containerd/containerd.sock unix:///run/crio/crio.sock unix:///var/run/cri-dockerd.sock]. As the default settings are now deprecated, you should set the endpoint instead.</span></span>
<span class="line"><span>ERRO[0000] unable to determine image API version: rpc error: code = Unavailable desc = connection error: desc = &quot;transport: Error while dialing dial unix /var/run/dockershim.sock: connect: no such file or directory&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个报错是 docker 的报错，这里没使用，所以这个错误不影响使用，但是还是解决好点，解决方法如下：</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>cat &lt;&lt;EOF&gt; /etc/crictl.yaml</span></span>
<span class="line"><span>runtime-endpoint: unix:///run/containerd/containerd.sock</span></span>
<span class="line"><span>image-endpoint: unix:///run/containerd/containerd.sock</span></span>
<span class="line"><span>timeout: 10</span></span>
<span class="line"><span>debug: false</span></span>
<span class="line"><span>EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次拉取镜像</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>crictl pull myharbor.com/bigdata/mysql:5.7.38</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653047-31.png" alt="K8S高可用部署" tabindex="0" loading="lazy"><figcaption>K8S高可用部署</figcaption></figure><p>Kubernetes（k8s）最新版最完整版基础环境部署+master 高可用实现详细步骤就到这里了</p>`,325)]))}const c=n(l,[["render",p],["__file","详解K8S高可用部署.html.vue"]]),o=JSON.parse('{"path":"/linux/%E8%AF%A6%E8%A7%A3K8S%E9%AB%98%E5%8F%AF%E7%94%A8%E9%83%A8%E7%BD%B2.html","title":"详解 K8S 高可用部署","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"详解 K8S 高可用部署","excerpt":null,"description":"详解 K8S 高可用部署 一、前言 二、基础环境部署 1）前期准备（所有节点） 2）安装容器 docker（所有节点） 3）配置 k8s yum 源（所有节点） 4）将 sandbox_image 镜像源设置为阿里云 google_containers 镜像源（所有节点） 5）配置 containerd cgroup 驱动程序 systemd（所有节点...","date":"2022-11-05T00:00:00.000Z","category":"Linux","tag":["Linux","k8s"],"article":true,"timeline":true,"icon":"linux","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/linux/%E8%AF%A6%E8%A7%A3K8S%E9%AB%98%E5%8F%AF%E7%94%A8%E9%83%A8%E7%BD%B2.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"详解 K8S 高可用部署"}],["meta",{"property":"og:description","content":"详解 K8S 高可用部署 一、前言 二、基础环境部署 1）前期准备（所有节点） 2）安装容器 docker（所有节点） 3）配置 k8s yum 源（所有节点） 4）将 sandbox_image 镜像源设置为阿里云 google_containers 镜像源（所有节点） 5）配置 containerd cgroup 驱动程序 systemd（所有节点..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653044-0.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"k8s"}],["meta",{"property":"article:published_time","content":"2022-11-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"详解 K8S 高可用部署\\",\\"image\\":[\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653044-0.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653044-1.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653045-2.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653045-3.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653045-4.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653045-5.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653045-6.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653045-7.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653045-8.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653045-9.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653045-10.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653045-11.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653045-12.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-13.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-14.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-15.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-16.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-17.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-18.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-19.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-20.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-21.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-22.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-23.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-24.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-25.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-26.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653046-27.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653047-28.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653047-29.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653047-30.png\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1667642653047-31.png\\"],\\"datePublished\\":\\"2022-11-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":3,"title":"一、前言","slug":"一、前言","link":"#一、前言","children":[]},{"level":3,"title":"二、基础环境部署","slug":"二、基础环境部署","link":"#二、基础环境部署","children":[]},{"level":3,"title":"三、k8s 管理平台 dashboard 环境部署","slug":"三、k8s-管理平台-dashboard-环境部署","link":"#三、k8s-管理平台-dashboard-环境部署","children":[]},{"level":3,"title":"四、k8s 镜像仓库 harbor 环境部署","slug":"四、k8s-镜像仓库-harbor-环境部署","link":"#四、k8s-镜像仓库-harbor-环境部署","children":[]},{"level":3,"title":"4）安装 ingress","slug":"_4-安装-ingress","link":"#_4-安装-ingress","children":[]},{"level":3,"title":"6）创建 nfs provisioner 和持久化存储 SC","slug":"_6-创建-nfs-provisioner-和持久化存储-sc","link":"#_6-创建-nfs-provisioner-和持久化存储-sc","children":[]},{"level":3,"title":"5、ingress 没有 ADDRESS 问题解决","slug":"_5、ingress-没有-address-问题解决","link":"#_5、ingress-没有-address-问题解决","children":[]},{"level":3,"title":"6、卸载重新部署","slug":"_6、卸载重新部署","link":"#_6、卸载重新部署","children":[]}],"git":{"createdTime":1667642933000,"updatedTime":1714224756000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":5},{"name":"xlc","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":31.04,"words":9311},"filePathRelative":"linux/详解K8S高可用部署.md","localizedDate":"2022年11月5日","excerpt":"\\n<p>一、前言</p>\\n<p>二、基础环境部署</p>\\n<ul>\\n<li>1）前期准备（所有节点）</li>\\n<li>2）安装容器 docker（所有节点）</li>\\n<li>3）配置 k8s yum 源（所有节点）</li>\\n<li>4）将 sandbox_image 镜像源设置为阿里云 google_containers 镜像源（所有节点）</li>\\n<li>5）配置 containerd cgroup 驱动程序 systemd（所有节点）</li>\\n<li>6）开始安装 kubeadm，kubelet 和 kubectl（master 节点）</li>\\n<li>7）使用 kubeadm 初始化集群（master 节点）</li>\\n<li>8）安装 Pod 网络插件（CNI：Container Network Interface）(master)</li>\\n<li>9）node 节点加入 k8s 集群</li>\\n<li>10）配置 IPVS</li>\\n<li>11）集群高可用配置</li>\\n<li>12）部署 Nginx+Keepalived 高可用负载均衡器</li>\\n</ul>","autoDesc":true}');export{c as comp,o as data};
