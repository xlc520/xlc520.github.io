import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as r,a as e,b as n,e as s,d,r as t}from"./app.51ad39b7.js";const c={},v=d('<h1 id="\u8BE6\u89E3-k8s-\u9AD8\u53EF\u7528\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u8BE6\u89E3-k8s-\u9AD8\u53EF\u7528\u90E8\u7F72" aria-hidden="true">#</a> \u8BE6\u89E3 K8S \u9AD8\u53EF\u7528\u90E8\u7F72</h1><p>\u4E00\u3001\u524D\u8A00</p><p>\u4E8C\u3001\u57FA\u7840\u73AF\u5883\u90E8\u7F72</p><ul><li>1\uFF09\u524D\u671F\u51C6\u5907\uFF08\u6240\u6709\u8282\u70B9\uFF09</li><li>2\uFF09\u5B89\u88C5\u5BB9\u5668 docker\uFF08\u6240\u6709\u8282\u70B9\uFF09</li><li>3\uFF09\u914D\u7F6E k8s yum \u6E90\uFF08\u6240\u6709\u8282\u70B9\uFF09</li><li>4\uFF09\u5C06 sandbox_image \u955C\u50CF\u6E90\u8BBE\u7F6E\u4E3A\u963F\u91CC\u4E91 google_containers \u955C\u50CF\u6E90\uFF08\u6240\u6709\u8282\u70B9\uFF09</li><li>5\uFF09\u914D\u7F6E containerd cgroup \u9A71\u52A8\u7A0B\u5E8F systemd\uFF08\u6240\u6709\u8282\u70B9\uFF09</li><li>6\uFF09\u5F00\u59CB\u5B89\u88C5 kubeadm\uFF0Ckubelet \u548C kubectl\uFF08master \u8282\u70B9\uFF09</li><li>7\uFF09\u4F7F\u7528 kubeadm \u521D\u59CB\u5316\u96C6\u7FA4\uFF08master \u8282\u70B9\uFF09</li><li>8\uFF09\u5B89\u88C5 Pod \u7F51\u7EDC\u63D2\u4EF6\uFF08CNI\uFF1AContainer Network Interface\uFF09(master)</li><li>9\uFF09node \u8282\u70B9\u52A0\u5165 k8s \u96C6\u7FA4</li><li>10\uFF09\u914D\u7F6E IPVS</li><li>11\uFF09\u96C6\u7FA4\u9AD8\u53EF\u7528\u914D\u7F6E</li><li>12\uFF09\u90E8\u7F72 Nginx+Keepalived \u9AD8\u53EF\u7528\u8D1F\u8F7D\u5747\u8861\u5668</li></ul><p>\u4E09\u3001k8s \u7BA1\u7406\u5E73\u53F0 dashboard \u73AF\u5883\u90E8\u7F72</p><ul><li>1\uFF09dashboard \u90E8\u7F72</li><li>2\uFF09\u521B\u5EFA\u767B\u5F55\u7528\u6237</li><li>3\uFF09\u914D\u7F6E hosts \u767B\u5F55 dashboard web</li></ul><p>\u56DB\u3001k8s \u955C\u50CF\u4ED3\u5E93 harbor \u73AF\u5883\u90E8\u7F72</p><ul><li>1\uFF09\u5B89\u88C5 helm</li><li>2\uFF09\u914D\u7F6E hosts</li><li>3\uFF09\u521B\u5EFA stl \u8BC1\u4E66</li><li>4\uFF09\u5B89\u88C5 ingress</li><li>5\uFF09\u5B89\u88C5 nfs</li><li>6\uFF09\u521B\u5EFA nfs provisioner \u548C\u6301\u4E45\u5316\u5B58\u50A8 SC</li><li>7\uFF09\u90E8\u7F72 Harbor\uFF08Https \u65B9\u5F0F\uFF09</li></ul><h3 id="\u4E00\u3001\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u524D\u8A00" aria-hidden="true">#</a> \u4E00\u3001\u524D\u8A00</h3>',9),u={href:"https://kubernetes.io/",target:"_blank",rel:"noopener noreferrer"},o={href:"https://kubernetes.io/zh-cn/docs/home/",target:"_blank",rel:"noopener noreferrer"},m=d(`<h3 id="\u4E8C\u3001\u57FA\u7840\u73AF\u5883\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u57FA\u7840\u73AF\u5883\u90E8\u7F72" aria-hidden="true">#</a> \u4E8C\u3001\u57FA\u7840\u73AF\u5883\u90E8\u7F72</h3><h4 id="_1-\u524D\u671F\u51C6\u5907-\u6240\u6709\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_1-\u524D\u671F\u51C6\u5907-\u6240\u6709\u8282\u70B9" aria-hidden="true">#</a> 1\uFF09\u524D\u671F\u51C6\u5907\uFF08\u6240\u6709\u8282\u70B9\uFF09</h4><p>1\u3001\u4FEE\u6539\u4E3B\u673A\u540D\u548C\u914D\u7F6E hosts</p><p>\u5148\u90E8\u7F72 1master \u548C 2node \u8282\u70B9\uFF0C\u540E\u9762\u518D\u52A0\u4E00\u4E2A master \u8282\u70B9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5728192.168.0.113\u6267\u884C
hostnamectl set-hostname  k8s-master-168-0-113
# \u5728192.168.0.114\u6267\u884C
hostnamectl set-hostname k8s-node1-168-0-114
# \u5728192.168.0.115\u6267\u884C
hostnamectl set-hostname k8s-node2-168-0-115
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E hosts</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt;&gt; /etc/hosts&lt;&lt;EOF
192.168.0.113 k8s-master-168-0-113
192.168.0.114 k8s-node1-168-0-114
192.168.0.115 k8s-node2-168-0-115
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2\u3001\u914D\u7F6E ssh \u4E92\u4FE1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u76F4\u63A5\u4E00\u76F4\u56DE\u8F66\u5C31\u884C
ssh-keygen

ssh-copy-id -i ~/.ssh/id_rsa.pub root@k8s-master-168-0-113
ssh-copy-id -i ~/.ssh/id_rsa.pub root@k8s-node1-168-0-114
ssh-copy-id -i ~/.ssh/id_rsa.pub root@k8s-node2-168-0-115
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3\u3001\u65F6\u95F4\u540C\u6B65</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install chrony -y
systemctl start chronyd
systemctl enable chronyd
chronyc sources
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4\u3001\u5173\u95ED\u9632\u706B\u5899</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl stop firewalld
systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>5\u3001\u5173\u95ED swap</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u4E34\u65F6\u5173\u95ED\uFF1B\u5173\u95EDswap\u4E3B\u8981\u662F\u4E3A\u4E86\u6027\u80FD\u8003\u8651
swapoff -a
# \u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u547D\u4EE4\u67E5\u770Bswap\u662F\u5426\u5173\u95ED\u4E86
free
# \u6C38\u4E45\u5173\u95ED
sed -ri &#39;s/.*swap.*/#&amp;/&#39; /etc/fstab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6\u3001\u7981\u7528 SELinux</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u4E34\u65F6\u5173\u95ED
setenforce 0
# \u6C38\u4E45\u7981\u7528
sed -i &#39;s/^SELINUX=enforcing$/SELINUX=disabled/&#39; /etc/selinux/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7\u3001\u5141\u8BB8 iptables \u68C0\u67E5\u6865\u63A5\u6D41\u91CF\uFF08\u53EF\u9009\uFF0C\u6240\u6709\u8282\u70B9\uFF09</p><p>\u82E5\u8981\u663E\u5F0F\u52A0\u8F7D\u6B64\u6A21\u5757\uFF0C\u8BF7\u8FD0\u884C sudo modprobe br_netfilter\uFF0C\u901A\u8FC7\u8FD0\u884C lsmod | grep br_netfilter \u6765\u9A8C\u8BC1 br_netfilter \u6A21\u5757\u662F\u5426\u5DF2\u52A0\u8F7D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo modprobe br_netfilter
lsmod | grep br_netfilter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4E86\u8BA9 Linux \u8282\u70B9\u7684 iptables \u80FD\u591F\u6B63\u786E\u67E5\u770B\u6865\u63A5\u6D41\u91CF\uFF0C\u8BF7\u786E\u8BA4 sysctl \u914D\u7F6E\u4E2D\u7684 net.bridge.bridge-nf-call-iptables \u8BBE\u7F6E\u4E3A 1\u3002\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &lt;&lt;EOF | sudo tee /etc/modules-load.d/k8s.conf
overlay
br_netfilter
EOF

sudo modprobe overlay
sudo modprobe br_netfilter

# \u8BBE\u7F6E\u6240\u9700\u7684 sysctl \u53C2\u6570\uFF0C\u53C2\u6570\u5728\u91CD\u65B0\u542F\u52A8\u540E\u4FDD\u6301\u4E0D\u53D8
cat &lt;&lt;EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-iptables  = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.ipv4.ip_forward                 = 1
EOF

# \u5E94\u7528 sysctl \u53C2\u6570\u800C\u4E0D\u91CD\u65B0\u542F\u52A8
sudo sysctl --system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-\u5B89\u88C5\u5BB9\u5668-docker-\u6240\u6709\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5\u5BB9\u5668-docker-\u6240\u6709\u8282\u70B9" aria-hidden="true">#</a> 2\uFF09\u5B89\u88C5\u5BB9\u5668 docker\uFF08\u6240\u6709\u8282\u70B9\uFF09</h4><blockquote><p>\u63D0\u793A\uFF1Av1.24 \u4E4B\u524D\u7684 Kubernetes \u7248\u672C\u5305\u62EC\u4E0E Docker Engine \u7684\u76F4\u63A5\u96C6\u6210\uFF0C\u4F7F\u7528\u540D\u4E3A dockershim \u7684\u7EC4\u4EF6\u3002\u8FD9\u79CD\u7279\u6B8A\u7684\u76F4\u63A5\u6574\u5408\u4E0D\u518D\u662F Kubernetes \u7684\u4E00\u90E8\u5206 \uFF08\u8FD9\u6B21\u5220\u9664\u88AB\u4F5C\u4E3A v1.20 \u53D1\u884C\u7248\u672C\u7684\u4E00\u90E8\u5206\u5BA3\u5E03\uFF09\u3002\u4F60\u53EF\u4EE5\u9605\u8BFB\u68C0\u67E5 Dockershim \u5F03\u7528\u662F\u5426\u4F1A\u5F71\u54CD\u4F60 \u4EE5\u4E86\u89E3\u6B64\u5220\u9664\u53EF\u80FD\u4F1A\u5982\u4F55\u5F71\u54CD\u4F60\u3002\u8981\u4E86\u89E3\u5982\u4F55\u4F7F\u7528 dockershim \u8FDB\u884C\u8FC1\u79FB\uFF0C\u8BF7\u53C2\u9605\u4ECE dockershim \u8FC1\u79FB\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u914D\u7F6Eyum\u6E90
cd /etc/yum.repos.d ; mkdir bak; mv CentOS-Linux-* bak/
# centos7
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
# centos8
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-8.repo

# \u5B89\u88C5yum-config-manager\u914D\u7F6E\u5DE5\u5177
yum -y install yum-utils
# \u8BBE\u7F6Eyum\u6E90
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
# \u5B89\u88C5docker-ce\u7248\u672C
yum install -y docker-ce
# \u542F\u52A8
systemctl start docker
# \u5F00\u673A\u81EA\u542F
systemctl enable docker
# \u67E5\u770B\u7248\u672C\u53F7
docker --version
# \u67E5\u770B\u7248\u672C\u5177\u4F53\u4FE1\u606F
docker version

# Docker\u955C\u50CF\u6E90\u8BBE\u7F6E
# \u4FEE\u6539\u6587\u4EF6 /etc/docker/daemon.json\uFF0C\u6CA1\u6709\u8FD9\u4E2A\u6587\u4EF6\u5C31\u521B\u5EFA
# \u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\u540E\uFF0C\u91CD\u542Fdocker\u670D\u52A1\uFF1A
cat &gt;/etc/docker/daemon.json&lt;&lt;EOF
{
   &quot;registry-mirrors&quot;: [&quot;http://hub-mirror.c.163.com&quot;]
}
EOF
# \u52A0\u8F7D
systemctl reload docker

# \u67E5\u770B
systemctl status docker containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u3010\u6E29\u99A8\u63D0\u793A\u3011dockerd \u5B9E\u9645\u771F\u5B9E\u8C03\u7528\u7684\u8FD8\u662F containerd \u7684 api \u63A5\u53E3\uFF0Ccontainerd \u662F dockerd \u548C runC \u4E4B\u95F4\u7684\u4E00\u4E2A\u4E2D\u95F4\u4EA4\u6D41\u7EC4\u4EF6\u3002\u6240\u4EE5\u542F\u52A8 docker \u670D\u52A1\u7684\u65F6\u5019\uFF0C\u4E5F\u4F1A\u542F\u52A8 containerd \u670D\u52A1\u7684\u3002</p></blockquote><h4 id="_3-\u914D\u7F6E-k8s-yum-\u6E90-\u6240\u6709\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_3-\u914D\u7F6E-k8s-yum-\u6E90-\u6240\u6709\u8282\u70B9" aria-hidden="true">#</a> 3\uFF09\u914D\u7F6E k8s yum \u6E90\uFF08\u6240\u6709\u8282\u70B9\uFF09</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /etc/yum.repos.d/kubernetes.repo &lt;&lt; EOF
[k8s]
name=k8s
enabled=1
gpgcheck=0
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-\u5C06-sandbox-image-\u955C\u50CF\u6E90\u8BBE\u7F6E\u4E3A\u963F\u91CC\u4E91-google-containers-\u955C\u50CF\u6E90-\u6240\u6709\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_4-\u5C06-sandbox-image-\u955C\u50CF\u6E90\u8BBE\u7F6E\u4E3A\u963F\u91CC\u4E91-google-containers-\u955C\u50CF\u6E90-\u6240\u6709\u8282\u70B9" aria-hidden="true">#</a> 4\uFF09\u5C06 sandbox_image \u955C\u50CF\u6E90\u8BBE\u7F6E\u4E3A\u963F\u91CC\u4E91 google_containers \u955C\u50CF\u6E90\uFF08\u6240\u6709\u8282\u70B9\uFF09</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5BFC\u51FA\u9ED8\u8BA4\u914D\u7F6E\uFF0Cconfig.toml\u8FD9\u4E2A\u6587\u4EF6\u9ED8\u8BA4\u662F\u4E0D\u5B58\u5728\u7684
containerd config default &gt; /etc/containerd/config.toml
grep sandbox_image  /etc/containerd/config.toml
sed -i &quot;s#k8s.gcr.io/pause#registry.aliyuncs.com/google_containers/pause#g&quot;       /etc/containerd/config.toml
grep sandbox_image  /etc/containerd/config.toml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653044-0.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><h4 id="_5-\u914D\u7F6E-containerd-cgroup-\u9A71\u52A8\u7A0B\u5E8F-systemd-\u6240\u6709\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_5-\u914D\u7F6E-containerd-cgroup-\u9A71\u52A8\u7A0B\u5E8F-systemd-\u6240\u6709\u8282\u70B9" aria-hidden="true">#</a> 5\uFF09\u914D\u7F6E containerd cgroup \u9A71\u52A8\u7A0B\u5E8F systemd\uFF08\u6240\u6709\u8282\u70B9\uFF09</h4><blockquote><p>kubernets \u81EA\uFF56 1.24.0 \u540E\uFF0C\u5C31\u4E0D\u518D\u4F7F\u7528 docker.shim\uFF0C\u66FF\u6362\u91C7\u7528 containerd \u4F5C\u4E3A\u5BB9\u5668\u8FD0\u884C\u65F6\u7AEF\u70B9\u3002\u56E0\u6B64\u9700\u8981\u5B89\u88C5 containerd\uFF08\u5728 docker \u7684\u57FA\u7840\u4E0B\u5B89\u88C5\uFF09\uFF0C\u4E0A\u9762\u5B89\u88C5 docker \u7684\u65F6\u5019\u5C31\u81EA\u52A8\u5B89\u88C5\u4E86 containerd \u4E86\u3002\u8FD9\u91CC\u7684 docker \u53EA\u662F\u4F5C\u4E3A\u5BA2\u6237\u7AEF\u800C\u5DF2\u3002\u5BB9\u5668\u5F15\u64CE\u8FD8\u662F containerd\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sed -i &#39;s#SystemdCgroup = false#SystemdCgroup = true#g&#39; /etc/containerd/config.toml
# \u5E94\u7528\u6240\u6709\u66F4\u6539\u540E,\u91CD\u65B0\u542F\u52A8containerd
systemctl restart containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-\u5F00\u59CB\u5B89\u88C5-kubeadm-kubelet-\u548C-kubectl-master-\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_6-\u5F00\u59CB\u5B89\u88C5-kubeadm-kubelet-\u548C-kubectl-master-\u8282\u70B9" aria-hidden="true">#</a> 6\uFF09\u5F00\u59CB\u5B89\u88C5 kubeadm\uFF0Ckubelet \u548C kubectl\uFF08master \u8282\u70B9\uFF09</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u4E0D\u6307\u5B9A\u7248\u672C\u5C31\u662F\u6700\u65B0\u7248\u672C\uFF0C\u5F53\u524D\u6700\u65B0\u7248\u5C31\u662F1.24.1
yum install -y kubelet-1.24.1  kubeadm-1.24.1  kubectl-1.24.1 --disableexcludes=kubernetes
# disableexcludes=kubernetes\uFF1A\u7981\u6389\u9664\u4E86\u8FD9\u4E2Akubernetes\u4E4B\u5916\u7684\u522B\u7684\u4ED3\u5E93
# \u8BBE\u7F6E\u4E3A\u5F00\u673A\u81EA\u542F\u5E76\u73B0\u5728\u7ACB\u523B\u542F\u52A8\u670D\u52A1 --now\uFF1A\u7ACB\u523B\u542F\u52A8\u670D\u52A1
systemctl enable --now kubelet

# \u67E5\u770B\u72B6\u6001\uFF0C\u8FD9\u91CC\u9700\u8981\u7B49\u5F85\u4E00\u6BB5\u65F6\u95F4\u518D\u67E5\u770B\u670D\u52A1\u72B6\u6001\uFF0C\u542F\u52A8\u4F1A\u6709\u70B9\u6162
systemctl status kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653044-1.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><p>\u67E5\u770B\u65E5\u5FD7\uFF0C\u53D1\u73B0\u6709\u62A5\u9519\uFF0C\u62A5\u9519\u5982\u4E0B\uFF1A</p><blockquote><p>kubelet.service: Main process exited, code=exited, status=1/FAILURE kubelet.service: Failed with result &#39;exit-code&#39;.</p></blockquote><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653045-2.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><blockquote><p>\u3010\u89E3\u91CA\u3011\u91CD\u65B0\u5B89\u88C5\uFF08\u6216\u7B2C\u4E00\u6B21\u5B89\u88C5\uFF09k8s\uFF0C\u672A\u7ECF\u8FC7 kubeadm init \u6216\u8005 kubeadm join \u540E\uFF0Ckubelet \u4F1A\u4E0D\u65AD\u91CD\u542F\uFF0C\u8FD9\u4E2A\u662F\u6B63\u5E38\u73B0\u8C61\u2026\u2026\uFF0C\u6267\u884C init \u6216 join \u540E\u95EE\u9898\u4F1A\u81EA\u52A8\u89E3\u51B3\uFF0C\u5BF9\u6B64\u5B98\u7F51\u6709\u5982\u4E0B\u63CF\u8FF0\uFF0C\u4E5F\u5C31\u662F\u6B64\u65F6\u4E0D\u7528\u7406\u4F1A kubelet.service\u3002</p></blockquote><p>\u67E5\u770B\u7248\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl version
yum info kubeadm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653045-3.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><h4 id="_7-\u4F7F\u7528-kubeadm-\u521D\u59CB\u5316\u96C6\u7FA4-master-\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_7-\u4F7F\u7528-kubeadm-\u521D\u59CB\u5316\u96C6\u7FA4-master-\u8282\u70B9" aria-hidden="true">#</a> 7\uFF09\u4F7F\u7528 kubeadm \u521D\u59CB\u5316\u96C6\u7FA4\uFF08master \u8282\u70B9\uFF09</h4><p>\u6700\u597D\u63D0\u524D\u628A\u955C\u50CF\u4E0B\u8F7D\u597D\uFF0C\u8FD9\u6837\u5B89\u88C5\u5FEB</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker pull registry.aliyuncs.com/google_containers/kube-apiserver:v1.24.1
docker pull registry.aliyuncs.com/google_containers/kube-controller-manager:v1.24.1
docker pull registry.aliyuncs.com/google_containers/kube-scheduler:v1.24.1
docker pull registry.aliyuncs.com/google_containers/kube-proxy:v1.24.1
docker pull registry.aliyuncs.com/google_containers/pause:3.7
docker pull registry.aliyuncs.com/google_containers/etcd:3.5.3-0
docker pull registry.aliyuncs.com/google_containers/coredns:v1.8.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u96C6\u7FA4\u521D\u59CB\u5316</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubeadm init \\
  --apiserver-advertise-address=192.168.0.113 \\
  --image-repository registry.aliyuncs.com/google_containers \\
  --control-plane-endpoint=cluster-endpoint \\
  --kubernetes-version v1.24.1 \\
  --service-cidr=10.1.0.0/16 \\
  --pod-network-cidr=10.244.0.0/16 \\
  --v=5
# \u2013image-repository string\uFF1A    \u8FD9\u4E2A\u7528\u4E8E\u6307\u5B9A\u4ECE\u4EC0\u4E48\u4F4D\u7F6E\u6765\u62C9\u53D6\u955C\u50CF\uFF081.13\u7248\u672C\u624D\u6709\u7684\uFF09\uFF0C\u9ED8\u8BA4\u503C\u662Fk8s.gcr.io\uFF0C\u6211\u4EEC\u5C06\u5176\u6307\u5B9A\u4E3A\u56FD\u5185\u955C\u50CF\u5730\u5740\uFF1Aregistry.aliyuncs.com/google_containers
# \u2013kubernetes-version string\uFF1A  \u6307\u5B9Akubenets\u7248\u672C\u53F7\uFF0C\u9ED8\u8BA4\u503C\u662Fstable-1\uFF0C\u4F1A\u5BFC\u81F4\u4ECEhttps://dl.k8s.io/release/stable-1.txt\u4E0B\u8F7D\u6700\u65B0\u7684\u7248\u672C\u53F7\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u5176\u6307\u5B9A\u4E3A\u56FA\u5B9A\u7248\u672C\uFF08v1.22.1\uFF09\u6765\u8DF3\u8FC7\u7F51\u7EDC\u8BF7\u6C42\u3002
# \u2013apiserver-advertise-address  \u6307\u660E\u7528 Master \u7684\u54EA\u4E2A interface \u4E0E Cluster \u7684\u5176\u4ED6\u8282\u70B9\u901A\u4FE1\u3002\u5982\u679C Master \u6709\u591A\u4E2A interface\uFF0C\u5EFA\u8BAE\u660E\u786E\u6307\u5B9A\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A\uFF0Ckubeadm \u4F1A\u81EA\u52A8\u9009\u62E9\u6709\u9ED8\u8BA4\u7F51\u5173\u7684 interface\u3002\u8FD9\u91CC\u7684ip\u4E3Amaster\u8282\u70B9ip\uFF0C\u8BB0\u5F97\u66F4\u6362\u3002
# \u2013pod-network-cidr             \u6307\u5B9A Pod \u7F51\u7EDC\u7684\u8303\u56F4\u3002Kubernetes \u652F\u6301\u591A\u79CD\u7F51\u7EDC\u65B9\u6848\uFF0C\u800C\u4E14\u4E0D\u540C\u7F51\u7EDC\u65B9\u6848\u5BF9  \u2013pod-network-cidr\u6709\u81EA\u5DF1\u7684\u8981\u6C42\uFF0C\u8FD9\u91CC\u8BBE\u7F6E\u4E3A10.244.0.0/16 \u662F\u56E0\u4E3A\u6211\u4EEC\u5C06\u4F7F\u7528 flannel \u7F51\u7EDC\u65B9\u6848\uFF0C\u5FC5\u987B\u8BBE\u7F6E\u6210\u8FD9\u4E2A CIDR\u3002
# --control-plane-endpoint     cluster-endpoint \u662F\u6620\u5C04\u5230\u8BE5 IP \u7684\u81EA\u5B9A\u4E49 DNS \u540D\u79F0\uFF0C\u8FD9\u91CC\u914D\u7F6Ehosts\u6620\u5C04\uFF1A192.168.0.113   cluster-endpoint\u3002 \u8FD9\u5C06\u5141\u8BB8\u4F60\u5C06 --control-plane-endpoint=cluster-endpoint \u4F20\u9012\u7ED9 kubeadm init\uFF0C\u5E76\u5C06\u76F8\u540C\u7684 DNS \u540D\u79F0\u4F20\u9012\u7ED9 kubeadm join\u3002 \u7A0D\u540E\u4F60\u53EF\u4EE5\u4FEE\u6539 cluster-endpoint \u4EE5\u6307\u5411\u9AD8\u53EF\u7528\u6027\u65B9\u6848\u4E2D\u7684\u8D1F\u8F7D\u5747\u8861\u5668\u7684\u5730\u5740\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u3010\u6E29\u99A8\u63D0\u793A\u3011kubeadm \u4E0D\u652F\u6301\u5C06\u6CA1\u6709 --control-plane-endpoint \u53C2\u6570\u7684\u5355\u4E2A\u63A7\u5236\u5E73\u9762\u96C6\u7FA4\u8F6C\u6362\u4E3A\u9AD8\u53EF\u7528\u6027\u96C6\u7FA4\u3002</p></blockquote><p>\u91CD\u7F6E\u518D\u521D\u59CB\u5316</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubeadm reset
rm -fr ~/.kube/  /etc/kubernetes/* var/lib/etcd/*
kubeadm init \\
  --apiserver-advertise-address=192.168.0.113  \\
  --image-repository registry.aliyuncs.com/google_containers \\
  --control-plane-endpoint=cluster-endpoint \\
  --kubernetes-version v1.24.1 \\
  --service-cidr=10.1.0.0/16 \\
  --pod-network-cidr=10.244.0.0/16 \\
  --v=5
# \u2013image-repository string\uFF1A    \u8FD9\u4E2A\u7528\u4E8E\u6307\u5B9A\u4ECE\u4EC0\u4E48\u4F4D\u7F6E\u6765\u62C9\u53D6\u955C\u50CF\uFF081.13\u7248\u672C\u624D\u6709\u7684\uFF09\uFF0C\u9ED8\u8BA4\u503C\u662Fk8s.gcr.io\uFF0C\u6211\u4EEC\u5C06\u5176\u6307\u5B9A\u4E3A\u56FD\u5185\u955C\u50CF\u5730\u5740\uFF1Aregistry.aliyuncs.com/google_containers
# \u2013kubernetes-version string\uFF1A  \u6307\u5B9Akubenets\u7248\u672C\u53F7\uFF0C\u9ED8\u8BA4\u503C\u662Fstable-1\uFF0C\u4F1A\u5BFC\u81F4\u4ECEhttps://dl.k8s.io/release/stable-1.txt\u4E0B\u8F7D\u6700\u65B0\u7684\u7248\u672C\u53F7\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u5176\u6307\u5B9A\u4E3A\u56FA\u5B9A\u7248\u672C\uFF08v1.22.1\uFF09\u6765\u8DF3\u8FC7\u7F51\u7EDC\u8BF7\u6C42\u3002
# \u2013apiserver-advertise-address  \u6307\u660E\u7528 Master \u7684\u54EA\u4E2A interface \u4E0E Cluster \u7684\u5176\u4ED6\u8282\u70B9\u901A\u4FE1\u3002\u5982\u679C Master \u6709\u591A\u4E2A interface\uFF0C\u5EFA\u8BAE\u660E\u786E\u6307\u5B9A\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A\uFF0Ckubeadm \u4F1A\u81EA\u52A8\u9009\u62E9\u6709\u9ED8\u8BA4\u7F51\u5173\u7684 interface\u3002\u8FD9\u91CC\u7684ip\u4E3Amaster\u8282\u70B9ip\uFF0C\u8BB0\u5F97\u66F4\u6362\u3002
# \u2013pod-network-cidr             \u6307\u5B9A Pod \u7F51\u7EDC\u7684\u8303\u56F4\u3002Kubernetes \u652F\u6301\u591A\u79CD\u7F51\u7EDC\u65B9\u6848\uFF0C\u800C\u4E14\u4E0D\u540C\u7F51\u7EDC\u65B9\u6848\u5BF9  \u2013pod-network-cidr\u6709\u81EA\u5DF1\u7684\u8981\u6C42\uFF0C\u8FD9\u91CC\u8BBE\u7F6E\u4E3A10.244.0.0/16 \u662F\u56E0\u4E3A\u6211\u4EEC\u5C06\u4F7F\u7528 flannel \u7F51\u7EDC\u65B9\u6848\uFF0C\u5FC5\u987B\u8BBE\u7F6E\u6210\u8FD9\u4E2A CIDR\u3002
# --control-plane-endpoint     cluster-endpoint \u662F\u6620\u5C04\u5230\u8BE5 IP \u7684\u81EA\u5B9A\u4E49 DNS \u540D\u79F0\uFF0C\u8FD9\u91CC\u914D\u7F6Ehosts\u6620\u5C04\uFF1A192.168.0.113   cluster-endpoint\u3002 \u8FD9\u5C06\u5141\u8BB8\u4F60\u5C06 --control-plane-endpoint=cluster-endpoint \u4F20\u9012\u7ED9 kubeadm init\uFF0C\u5E76\u5C06\u76F8\u540C\u7684 DNS \u540D\u79F0\u4F20\u9012\u7ED9 kubeadm join\u3002 \u7A0D\u540E\u4F60\u53EF\u4EE5\u4FEE\u6539 cluster-endpoint \u4EE5\u6307\u5411\u9AD8\u53EF\u7528\u6027\u65B9\u6848\u4E2D\u7684\u8D1F\u8F7D\u5747\u8861\u5668\u7684\u5730\u5740\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config

# \u4E34\u65F6\u751F\u6548\uFF08\u9000\u51FA\u5F53\u524D\u7A97\u53E3\u91CD\u8FDE\u73AF\u5883\u53D8\u91CF\u5931\u6548\uFF09
export KUBECONFIG=/etc/kubernetes/admin.conf
# \u6C38\u4E45\u751F\u6548\uFF08\u63A8\u8350\uFF09
echo &quot;export KUBECONFIG=/etc/kubernetes/admin.conf&quot; &gt;&gt; ~/.bash_profile
source  ~/.bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653045-4.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><p>\u53D1\u73B0\u8282\u70B9\u8FD8\u662F\u6709\u95EE\u9898\uFF0C\u67E5\u770B\u65E5\u5FD7 /var/log/messages</p><blockquote><p>&quot;Container runtime network not ready&quot; networkReady=&quot;NetworkReady=false reason:NetworkPluginNotReady message:Network plugin returns error: cni plugin not initialized&quot;</p></blockquote><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653045-5.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><p>\u63A5\u4E0B\u6765\u5C31\u662F\u5B89\u88C5 Pod \u7F51\u7EDC\u63D2\u4EF6</p><h4 id="_8-\u5B89\u88C5-pod-\u7F51\u7EDC\u63D2\u4EF6-cni-container-network-interface-master" tabindex="-1"><a class="header-anchor" href="#_8-\u5B89\u88C5-pod-\u7F51\u7EDC\u63D2\u4EF6-cni-container-network-interface-master" aria-hidden="true">#</a> 8\uFF09\u5B89\u88C5 Pod \u7F51\u7EDC\u63D2\u4EF6\uFF08CNI\uFF1AContainer Network Interface\uFF09(master)</h4><p>\u4F60\u5FC5\u987B\u90E8\u7F72\u4E00\u4E2A\u57FA\u4E8E Pod \u7F51\u7EDC\u63D2\u4EF6\u7684 \u5BB9\u5668\u7F51\u7EDC\u63A5\u53E3 (CNI)\uFF0C\u4EE5\u4FBF\u4F60\u7684 Pod \u53EF\u4EE5\u76F8\u4E92\u901A\u4FE1\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u6700\u597D\u63D0\u524D\u4E0B\u8F7D\u955C\u50CF\uFF08\u6240\u6709\u8282\u70B9\uFF09
docker pull quay.io/coreos/flannel:v0.14.0
kubectl apply -f https://raw.githubusercontent.com/coreos/flannel/master/Documentation/kube-flannel.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u4E0A\u9762\u5B89\u88C5\u5931\u8D25\uFF0C\u5219\u4E0B\u8F7D\u6211\u767E\u5EA6\u91CC\u7684\uFF0C\u79BB\u7EBF\u5B89\u88C5</p>`,63),b={href:"https://pan.baidu.com/s/1HB9xuO3bssAW7v5HzpXkeQ",target:"_blank",rel:"noopener noreferrer"},p=d(`<p>\u518D\u67E5\u770B node \u8282\u70B9\uFF0C\u5C31\u5DF2\u7ECF\u6B63\u5E38\u4E86</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653045-6.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><h4 id="_9-node-\u8282\u70B9\u52A0\u5165-k8s-\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_9-node-\u8282\u70B9\u52A0\u5165-k8s-\u96C6\u7FA4" aria-hidden="true">#</a> 9\uFF09node \u8282\u70B9\u52A0\u5165 k8s \u96C6\u7FA4</h4><p>\u5148\u5B89\u88C5 kubelet</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install -y kubelet kubeadm kubectl --disableexcludes=kubernetes
# \u8BBE\u7F6E\u4E3A\u5F00\u673A\u81EA\u542F\u5E76\u73B0\u5728\u7ACB\u523B\u542F\u52A8\u670D\u52A1 --now\uFF1A\u7ACB\u523B\u542F\u52A8\u670D\u52A1
systemctl enable --now kubelet
systemctl status kubelet
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u6CA1\u6709\u4EE4\u724C\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5728\u63A7\u5236\u5E73\u9762\u8282\u70B9\u4E0A\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u6765\u83B7\u53D6\u4EE4\u724C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubeadm token list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4EE4\u724C\u4F1A\u572824\u5C0F\u65F6\u540E\u8FC7\u671F\u3002\u5982\u679C\u8981\u5728\u5F53\u524D\u4EE4\u724C\u8FC7\u671F\u540E\u5C06\u8282\u70B9\u52A0\u5165\u96C6\u7FA4\uFF0C \u5219\u53EF\u4EE5\u901A\u8FC7\u5728\u63A7\u5236\u5E73\u9762\u8282\u70B9\u4E0A\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u6765\u521B\u5EFA\u65B0\u4EE4\u724C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubeadm token create
# \u518D\u67E5\u770B
kubeadm token list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u4F60\u6CA1\u6709 \u2013discovery-token-ca-cert-hash \u7684\u503C\uFF0C\u5219\u53EF\u4EE5\u901A\u8FC7\u5728\u63A7\u5236\u5E73\u9762\u8282\u70B9\u4E0A\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u94FE\u6765\u83B7\u53D6\u5B83\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>openssl x509 -pubkey -in /etc/kubernetes/pki/ca.crt | openssl rsa -pubin -outform der 2&gt;/dev/null | openssl dgst -sha256 -hex | sed &#39;s/^.* //&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u6267\u884C kubeadm init \u65F6\u6CA1\u6709\u8BB0\u5F55\u4E0B\u52A0\u5165\u96C6\u7FA4\u7684\u547D\u4EE4\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\u91CD\u65B0\u521B\u5EFA\uFF08\u63A8\u8350\uFF09\u4E00\u822C\u4E0D\u7528\u4E0A\u9762\u7684\u5206\u522B\u83B7\u53D6 token \u548C ca-cert-hash \u65B9\u5F0F\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\u4E00\u6C14\u5475\u6210\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubeadm token create --print-join-command
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u9700\u8981\u7B49\u5F85\u4E00\u6BB5\u65F6\u95F4\uFF0C\u518D\u67E5\u770B\u8282\u70B9\u8282\u70B9\u72B6\u6001\uFF0C\u56E0\u4E3A\u9700\u8981\u5B89\u88C5 kube-proxy \u548C flannel\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get pods -A
kubectl get nodes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653045-7.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><h4 id="_10-\u914D\u7F6E-ipvs" tabindex="-1"><a class="header-anchor" href="#_10-\u914D\u7F6E-ipvs" aria-hidden="true">#</a> 10\uFF09\u914D\u7F6E IPVS</h4><p>\u3010\u95EE\u9898\u3011\u96C6\u7FA4\u5185\u65E0\u6CD5 ping \u901A ClusterIP\uFF08\u6216 ServiceName\uFF09</p><p>1\u3001\u52A0\u8F7D ip_vs \u76F8\u5173\u5185\u6838\u6A21\u5757</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>modprobe -- ip_vs
modprobe -- ip_vs_sh
modprobe -- ip_vs_rr
modprobe -- ip_vs_wrr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u6709\u8282\u70B9\u9A8C\u8BC1\u5F00\u542F\u4E86 ipvs\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>lsmod |grep ip_vs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2\u3001\u5B89\u88C5 ipvsadm \u5DE5\u5177</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install ipset ipvsadm -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3\u3001\u7F16\u8F91 kube-proxy \u914D\u7F6E\u6587\u4EF6\uFF0Cmode \u4FEE\u6539\u6210 ipvs</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl edit  configmap -n kube-system  kube-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653045-8.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><p>4\u3001\u91CD\u542F kube-proxy</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5148\u67E5\u770B
kubectl get pod -n kube-system | grep kube-proxy
# \u518Ddelete\u8BA9\u5B83\u81EA\u62C9\u8D77
kubectl get pod -n kube-system | grep kube-proxy |awk &#39;{system(&quot;kubectl delete pod &quot;$1&quot; -n kube-system&quot;)}&#39;
# \u518D\u67E5\u770B
kubectl get pod -n kube-system | grep kube-proxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653045-9.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><p>5\u3001\u67E5\u770B ipvs \u8F6C\u53D1\u89C4\u5219</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ipvsadm -Ln
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653045-10.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><h4 id="_11-\u96C6\u7FA4\u9AD8\u53EF\u7528\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_11-\u96C6\u7FA4\u9AD8\u53EF\u7528\u914D\u7F6E" aria-hidden="true">#</a> 11\uFF09\u96C6\u7FA4\u9AD8\u53EF\u7528\u914D\u7F6E</h4><p>\u914D\u7F6E\u9AD8\u53EF\u7528\uFF08HA\uFF09Kubernetes \u96C6\u7FA4\u5B9E\u73B0\u7684\u4E24\u79CD\u65B9\u6848\uFF1A</p><p>\u4F7F\u7528\u5806\u53E0\uFF08stacked\uFF09\u63A7\u5236\u5E73\u9762\u8282\u70B9\uFF0C\u5176\u4E2D etcd \u8282\u70B9\u4E0E\u63A7\u5236\u5E73\u9762\u8282\u70B9\u5171\u5B58\uFF08\u672C\u7AE0\u4F7F\u7528\uFF09\uFF0C\u67B6\u6784\u56FE\u5982\u4E0B\uFF1A</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653045-11.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><p>\u4F7F\u7528\u5916\u90E8 etcd \u8282\u70B9\uFF0C\u5176\u4E2D etcd \u5728\u4E0E\u63A7\u5236\u5E73\u9762\u4E0D\u540C\u7684\u8282\u70B9\u4E0A\u8FD0\u884C\uFF0C\u67B6\u6784\u56FE\u5982\u4E0B\uFF1A</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653045-12.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><p>\u8FD9\u91CC\u65B0\u589E\u4E00\u53F0\u673A\u5668\u4F5C\u4E3A\u53E6\u5916\u4E00\u4E2A master \u8282\u70B9\uFF1A192.168.0.116 \u914D\u7F6E\u8DDF\u4E0A\u9762 master \u8282\u70B9\u4E00\u6837\u3002\u53EA\u662F\u4E0D\u9700\u8981\u6700\u540E\u4E00\u6B65\u521D\u59CB\u5316\u4E86\u3002</p><p>1\u3001\u4FEE\u6539\u4E3B\u673A\u540D\u548C\u914D\u7F6E hosts</p><p>\u6240\u6709\u8282\u70B9\u90FD\u7EDF\u4E00\u5982\u4E0B\u914D\u7F6E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5728192.168.0.113\u6267\u884C
hostnamectl set-hostname  k8s-master-168-0-113
# \u5728192.168.0.114\u6267\u884C
hostnamectl set-hostname k8s-node1-168-0-114
# \u5728192.168.0.115\u6267\u884C
hostnamectl set-hostname k8s-node2-168-0-115
# \u5728192.168.0.116\u6267\u884C
hostnamectl set-hostname k8s-master2-168-0-116
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E hosts</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt;&gt; /etc/hosts&lt;&lt;EOF
192.168.0.113 k8s-master-168-0-113 cluster-endpoint
192.168.0.114 k8s-node1-168-0-114
192.168.0.115 k8s-node2-168-0-115
192.168.0.116 k8s-master2-168-0-116
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2\u3001\u914D\u7F6E ssh \u4E92\u4FE1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u76F4\u63A5\u4E00\u76F4\u56DE\u8F66\u5C31\u884C
ssh-keygen

ssh-copy-id -i ~/.ssh/id_rsa.pub root@k8s-master-168-0-113
ssh-copy-id -i ~/.ssh/id_rsa.pub root@k8s-node1-168-0-114
ssh-copy-id -i ~/.ssh/id_rsa.pub root@k8s-node2-168-0-115
ssh-copy-id -i ~/.ssh/id_rsa.pub root@k8s-master2-168-0-116
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3\u3001\u65F6\u95F4\u540C\u6B65</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum install chrony -y
systemctl start chronyd
systemctl enable chronyd
chronyc sources
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5173\u95ED\u9632\u706B\u5899</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u725B\u903C\u554A\uFF01\u63A5\u79C1\u6D3B\u5FC5\u5907\u7684 N \u4E2A\u5F00\u6E90\u9879\u76EE\uFF01\u8D76\u5FEB\u6536\u85CF
systemctl stop firewalld
systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4\u3001\u5173\u95ED swap</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u4E34\u65F6\u5173\u95ED\uFF1B\u5173\u95EDswap\u4E3B\u8981\u662F\u4E3A\u4E86\u6027\u80FD\u8003\u8651
swapoff -a
# \u53EF\u4EE5\u901A\u8FC7\u8FD9\u4E2A\u547D\u4EE4\u67E5\u770Bswap\u662F\u5426\u5173\u95ED\u4E86
free
# \u6C38\u4E45\u5173\u95ED
sed -ri &#39;s/.*swap.*/#&amp;/&#39; /etc/fstab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5\u3001\u7981\u7528 SELinux</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u4E34\u65F6\u5173\u95ED
setenforce 0
# \u6C38\u4E45\u7981\u7528
sed -i &#39;s/^SELINUX=enforcing$/SELINUX=disabled/&#39; /etc/selinux/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6\u3001\u5141\u8BB8 iptables \u68C0\u67E5\u6865\u63A5\u6D41\u91CF\uFF08\u53EF\u9009\uFF0C\u6240\u6709\u8282\u70B9\uFF09</p><p>\u82E5\u8981\u663E\u5F0F\u52A0\u8F7D\u6B64\u6A21\u5757\uFF0C\u8BF7\u8FD0\u884C sudo modprobe br_netfilter\uFF0C\u901A\u8FC7\u8FD0\u884C lsmod | grep br_netfilter \u6765\u9A8C\u8BC1 br_netfilter \u6A21\u5757\u662F\u5426\u5DF2\u52A0\u8F7D\uFF0C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo modprobe br_netfilter
lsmod | grep br_netfilter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E3A\u4E86\u8BA9 Linux \u8282\u70B9\u7684 iptables \u80FD\u591F\u6B63\u786E\u67E5\u770B\u6865\u63A5\u6D41\u91CF\uFF0C\u8BF7\u786E\u8BA4 sysctl \u914D\u7F6E\u4E2D\u7684 net.bridge.bridge-nf-call-iptables \u8BBE\u7F6E\u4E3A 1\u3002\u4F8B\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &lt;&lt;EOF | sudo tee /etc/modules-load.d/k8s.conf
overlay
br_netfilter
EOF

sudo modprobe overlay
sudo modprobe br_netfilter

# \u8BBE\u7F6E\u6240\u9700\u7684 sysctl \u53C2\u6570\uFF0C\u53C2\u6570\u5728\u91CD\u65B0\u542F\u52A8\u540E\u4FDD\u6301\u4E0D\u53D8
cat &lt;&lt;EOF | sudo tee /etc/sysctl.d/k8s.conf
net.bridge.bridge-nf-call-iptables  = 1
net.bridge.bridge-nf-call-ip6tables = 1
net.ipv4.ip_forward                 = 1
EOF

# \u5E94\u7528 sysctl \u53C2\u6570\u800C\u4E0D\u91CD\u65B0\u542F\u52A8
sudo sysctl --system
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7\u3001\u5B89\u88C5\u5BB9\u5668 docker\uFF08\u6240\u6709\u8282\u70B9\uFF09</p><blockquote><p>\u63D0\u793A\uFF1Av1.24 \u4E4B\u524D\u7684 Kubernetes \u7248\u672C\u5305\u62EC\u4E0E Docker Engine \u7684\u76F4\u63A5\u96C6\u6210\uFF0C\u4F7F\u7528\u540D\u4E3A dockershim \u7684\u7EC4\u4EF6\u3002\u8FD9\u79CD\u7279\u6B8A\u7684\u76F4\u63A5\u6574\u5408\u4E0D\u518D\u662F Kubernetes \u7684\u4E00\u90E8\u5206 \uFF08\u8FD9\u6B21\u5220\u9664\u88AB\u4F5C\u4E3A v1.20 \u53D1\u884C\u7248\u672C\u7684\u4E00\u90E8\u5206\u5BA3\u5E03\uFF09\u3002\u4F60\u53EF\u4EE5\u9605\u8BFB\u68C0\u67E5 Dockershim \u5F03\u7528\u662F\u5426\u4F1A\u5F71\u54CD\u4F60 \u4EE5\u4E86\u89E3\u6B64\u5220\u9664\u53EF\u80FD\u4F1A\u5982\u4F55\u5F71\u54CD\u4F60\u3002\u8981\u4E86\u89E3\u5982\u4F55\u4F7F\u7528 dockershim \u8FDB\u884C\u8FC1\u79FB\uFF0C\u8BF7\u53C2\u9605\u4ECE dockershim \u8FC1\u79FB\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u914D\u7F6Eyum\u6E90
cd /etc/yum.repos.d ; mkdir bak; mv CentOS-Linux-* bak/
# centos7
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo
# centos8
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-8.repo

# \u5B89\u88C5yum-config-manager\u914D\u7F6E\u5DE5\u5177
yum -y install yum-utils
# \u8BBE\u7F6Eyum\u6E90
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
# \u5B89\u88C5docker-ce\u7248\u672C
yum install -y docker-ce
# \u542F\u52A8
systemctl start docker
# \u5F00\u673A\u81EA\u542F
systemctl enable docker
# \u67E5\u770B\u7248\u672C\u53F7
docker --version
# \u67E5\u770B\u7248\u672C\u5177\u4F53\u4FE1\u606F
docker version

# Docker\u955C\u50CF\u6E90\u8BBE\u7F6E
# \u4FEE\u6539\u6587\u4EF6 /etc/docker/daemon.json\uFF0C\u6CA1\u6709\u8FD9\u4E2A\u6587\u4EF6\u5C31\u521B\u5EFA
# \u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\u540E\uFF0C\u91CD\u542Fdocker\u670D\u52A1\uFF1A
cat &gt;/etc/docker/daemon.json&lt;&lt;EOF
{
   &quot;registry-mirrors&quot;: [&quot;http://hub-mirror.c.163.com&quot;]
}
EOF
# \u52A0\u8F7D
systemctl reload docker

# \u67E5\u770B
systemctl status docker containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u3010\u6E29\u99A8\u63D0\u793A\u3011dockerd \u5B9E\u9645\u771F\u5B9E\u8C03\u7528\u7684\u8FD8\u662F containerd \u7684 api \u63A5\u53E3\uFF0Ccontainerd \u662F dockerd \u548C runC \u4E4B\u95F4\u7684\u4E00\u4E2A\u4E2D\u95F4\u4EA4\u6D41\u7EC4\u4EF6\u3002\u6240\u4EE5\u542F\u52A8 docker \u670D\u52A1\u7684\u65F6\u5019\uFF0C\u4E5F\u4F1A\u542F\u52A8 containerd \u670D\u52A1\u7684\u3002</p></blockquote><h4 id="_8\u3001\u914D\u7F6E-k8s-yum-\u6E90-\u6240\u6709\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_8\u3001\u914D\u7F6E-k8s-yum-\u6E90-\u6240\u6709\u8282\u70B9" aria-hidden="true">#</a> 8\u3001\u914D\u7F6E k8s yum \u6E90\uFF08\u6240\u6709\u8282\u70B9\uFF09</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /etc/yum.repos.d/kubernetes.repo &lt;&lt; EOF
[k8s]
name=k8s
enabled=1
gpgcheck=0
baseurl=https://mirrors.aliyun.com/kubernetes/yum/repos/kubernetes-el7-x86_64/
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_9\u3001\u5C06-sandbox-image-\u955C\u50CF\u6E90\u8BBE\u7F6E\u4E3A\u963F\u91CC\u4E91-google-containers-\u955C\u50CF\u6E90-\u6240\u6709\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_9\u3001\u5C06-sandbox-image-\u955C\u50CF\u6E90\u8BBE\u7F6E\u4E3A\u963F\u91CC\u4E91-google-containers-\u955C\u50CF\u6E90-\u6240\u6709\u8282\u70B9" aria-hidden="true">#</a> 9\u3001\u5C06 sandbox_image \u955C\u50CF\u6E90\u8BBE\u7F6E\u4E3A\u963F\u91CC\u4E91 google_containers \u955C\u50CF\u6E90\uFF08\u6240\u6709\u8282\u70B9\uFF09</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5BFC\u51FA\u9ED8\u8BA4\u914D\u7F6E\uFF0Cconfig.toml\u8FD9\u4E2A\u6587\u4EF6\u9ED8\u8BA4\u662F\u4E0D\u5B58\u5728\u7684
containerd config default &gt; /etc/containerd/config.toml
grep sandbox_image  /etc/containerd/config.toml
sed -i &quot;s#k8s.gcr.io/pause#registry.aliyuncs.com/google_containers/pause#g&quot;       /etc/containerd/config.toml
grep sandbox_image  /etc/containerd/config.toml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10\u3001\u914D\u7F6E-containerd-cgroup-\u9A71\u52A8\u7A0B\u5E8F-systemd" tabindex="-1"><a class="header-anchor" href="#_10\u3001\u914D\u7F6E-containerd-cgroup-\u9A71\u52A8\u7A0B\u5E8F-systemd" aria-hidden="true">#</a> 10\u3001\u914D\u7F6E containerd cgroup \u9A71\u52A8\u7A0B\u5E8F systemd</h4><blockquote><p>kubernets \u81EA\uFF56 1.24.0 \u540E\uFF0C\u5C31\u4E0D\u518D\u4F7F\u7528 docker.shim\uFF0C\u66FF\u6362\u91C7\u7528 containerd \u4F5C\u4E3A\u5BB9\u5668\u8FD0\u884C\u65F6\u7AEF\u70B9\u3002\u56E0\u6B64\u9700\u8981\u5B89\u88C5 containerd\uFF08\u5728 docker \u7684\u57FA\u7840\u4E0B\u5B89\u88C5\uFF09\uFF0C\u4E0A\u9762\u5B89\u88C5 docker \u7684\u65F6\u5019\u5C31\u81EA\u52A8\u5B89\u88C5\u4E86 containerd \u4E86\u3002\u8FD9\u91CC\u7684 docker \u53EA\u662F\u4F5C\u4E3A\u5BA2\u6237\u7AEF\u800C\u5DF2\u3002\u5BB9\u5668\u5F15\u64CE\u8FD8\u662F containerd\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sed -i &#39;s#SystemdCgroup = false#SystemdCgroup = true#g&#39; /etc/containerd/config.toml
# \u5E94\u7528\u6240\u6709\u66F4\u6539\u540E,\u91CD\u65B0\u542F\u52A8containerd
systemctl restart containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_11\u3001\u5F00\u59CB\u5B89\u88C5-kubeadm-kubelet-\u548C-kubectl-master-\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_11\u3001\u5F00\u59CB\u5B89\u88C5-kubeadm-kubelet-\u548C-kubectl-master-\u8282\u70B9" aria-hidden="true">#</a> 11\u3001\u5F00\u59CB\u5B89\u88C5 kubeadm\uFF0Ckubelet \u548C kubectl\uFF08master \u8282\u70B9\uFF09</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u4E0D\u6307\u5B9A\u7248\u672C\u5C31\u662F\u6700\u65B0\u7248\u672C\uFF0C\u5F53\u524D\u6700\u65B0\u7248\u5C31\u662F1.24.1
yum install -y kubelet-1.24.1  kubeadm-1.24.1  kubectl-1.24.1 --disableexcludes=kubernetes
# disableexcludes=kubernetes\uFF1A\u7981\u6389\u9664\u4E86\u8FD9\u4E2Akubernetes\u4E4B\u5916\u7684\u522B\u7684\u4ED3\u5E93
# \u8BBE\u7F6E\u4E3A\u5F00\u673A\u81EA\u542F\u5E76\u73B0\u5728\u7ACB\u523B\u542F\u52A8\u670D\u52A1 --now\uFF1A\u7ACB\u523B\u542F\u52A8\u670D\u52A1
systemctl enable --now kubelet

# \u67E5\u770B\u72B6\u6001\uFF0C\u8FD9\u91CC\u9700\u8981\u7B49\u5F85\u4E00\u6BB5\u65F6\u95F4\u518D\u67E5\u770B\u670D\u52A1\u72B6\u6001\uFF0C\u542F\u52A8\u4F1A\u6709\u70B9\u6162
systemctl status kubelet

# \u67E5\u770B\u7248\u672C

kubectl version
yum info kubeadm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_12\u3001\u52A0\u5165-k8s-\u96C6\u7FA4" tabindex="-1"><a class="header-anchor" href="#_12\u3001\u52A0\u5165-k8s-\u96C6\u7FA4" aria-hidden="true">#</a> 12\u3001\u52A0\u5165 k8s \u96C6\u7FA4</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u8BC1\u5982\u679C\u8FC7\u671F\u4E86\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E0B\u9762\u547D\u4EE4\u751F\u6210\u65B0\u8BC1\u4E66\u4E0A\u4F20\uFF0C\u8FD9\u91CC\u4F1A\u6253\u5370\u51FAcertificate key\uFF0C\u540E\u9762\u4F1A\u7528\u5230
kubeadm init phase upload-certs --upload-certs
# \u4F60\u8FD8\u53EF\u4EE5\u5728 \u3010init\u3011\u671F\u95F4\u6307\u5B9A\u81EA\u5B9A\u4E49\u7684 --certificate-key\uFF0C\u4EE5\u540E\u53EF\u4EE5\u7531 join \u4F7F\u7528\u3002 \u8981\u751F\u6210\u8FD9\u6837\u7684\u5BC6\u94A5\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\uFF08\u8FD9\u91CC\u4E0D\u6267\u884C\uFF0C\u5C31\u7528\u4E0A\u9762\u90A3\u4E2A\u81EA\u547D\u4EE4\u5C31\u53EF\u4EE5\u4E86\uFF09\uFF1A
kubeadm certs certificate-key

kubeadm token create --print-join-command

kubeadm join cluster-endpoint:6443 --token wswrfw.fc81au4yvy6ovmhh --discovery-token-ca-cert-hash sha256:43a3924c25104d4393462105639f6a02b8ce284728775ef9f9c30eed8e0abc0f --control-plane --certificate-key 8d2709697403b74e35d05a420bd2c19fd8c11914eb45f2ff22937b245bed5b68

# --control-plane \u6807\u5FD7\u901A\u77E5 kubeadm join \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u63A7\u5236\u5E73\u9762\u3002\u52A0\u5165master\u5FC5\u987B\u52A0\u8FD9\u4E2A\u6807\u8BB0
# --certificate-key ... \u5C06\u5BFC\u81F4\u4ECE\u96C6\u7FA4\u4E2D\u7684 kubeadm-certs Secret \u4E0B\u8F7D\u63A7\u5236\u5E73\u9762\u8BC1\u4E66\u5E76\u4F7F\u7528\u7ED9\u5B9A\u7684\u5BC6\u94A5\u8FDB\u884C\u89E3\u5BC6\u3002\u8FD9\u91CC\u7684\u503C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653046-13.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><p>\u6839\u636E\u63D0\u793A\u6267\u884C\u5982\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir -p $HOME/.kube
sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get nodes
kubectl get pods -A -owide
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653046-14.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><p>\u867D\u7136\u73B0\u5728\u5DF2\u7ECF\u6709\u4E24\u4E2A master \u4E86\uFF0C\u4F46\u662F\u5BF9\u5916\u8FD8\u662F\u53EA\u80FD\u6709\u4E00\u4E2A\u5165\u53E3\u7684\uFF0C\u6240\u4EE5\u8FD8\u5F97\u8981\u4E00\u4E2A\u8D1F\u8F7D\u5747\u8861\u5668\uFF0C\u5982\u679C\u4E00\u4E2A master \u6302\u4E86\uFF0C\u4F1A\u81EA\u52A8\u5207\u5230\u53E6\u5916\u4E00\u4E2A master \u8282\u70B9\u3002</p><h4 id="_12-\u90E8\u7F72-nginx-keepalived-\u9AD8\u53EF\u7528\u8D1F\u8F7D\u5747\u8861\u5668" tabindex="-1"><a class="header-anchor" href="#_12-\u90E8\u7F72-nginx-keepalived-\u9AD8\u53EF\u7528\u8D1F\u8F7D\u5747\u8861\u5668" aria-hidden="true">#</a> 12\uFF09\u90E8\u7F72 Nginx+Keepalived \u9AD8\u53EF\u7528\u8D1F\u8F7D\u5747\u8861\u5668</h4><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653046-15.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><p>1\u3001\u5B89\u88C5 Nginx \u548C Keepalived</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5728\u4E24\u4E2Amaster\u8282\u70B9\u4E0A\u6267\u884C
yum install nginx keepalived -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>2\u3001Nginx \u914D\u7F6E</p><p>\u5728\u4E24\u4E2A master \u8282\u70B9\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /etc/nginx/nginx.conf &lt;&lt; &quot;EOF&quot;
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;
include /usr/share/nginx/modules/*.conf;
events {
    worker_connections 1024;
}
# \u56DB\u5C42\u8D1F\u8F7D\u5747\u8861\uFF0C\u4E3A\u4E24\u53F0Master apiserver\u7EC4\u4EF6\u63D0\u4F9B\u8D1F\u8F7D\u5747\u8861
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u3010\u6E29\u99A8\u63D0\u793A\u3011\u5982\u679C\u53EA\u4FDD\u8BC1\u9AD8\u53EF\u7528\uFF0C\u4E0D\u914D\u7F6E k8s-apiserver \u8D1F\u8F7D\u5747\u8861\u7684\u8BDD\uFF0C\u53EF\u4EE5\u4E0D\u88C5 nginx\uFF0C\u4F46\u662F\u6700\u597D\u8FD8\u662F\u914D\u7F6E\u4E00\u4E0B k8s-apiserver \u8D1F\u8F7D\u5747\u8861\u3002</p></blockquote><p>3\u3001Keepalived \u914D\u7F6E\uFF08master\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /etc/keepalived/keepalived.conf &lt;&lt; EOF
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
    virtual_router_id 51 # VRRP \u8DEF\u7531 ID\u5B9E\u4F8B\uFF0C\u6BCF\u4E2A\u5B9E\u4F8B\u662F\u552F\u4E00\u7684
    priority 100    # \u4F18\u5148\u7EA7\uFF0C\u5907\u670D\u52A1\u5668\u8BBE\u7F6E 90
    advert_int 1    # \u6307\u5B9AVRRP \u5FC3\u8DF3\u5305\u901A\u544A\u95F4\u9694\u65F6\u95F4\uFF0C\u9ED8\u8BA41\u79D2
    authentication {
        auth_type PASS
        auth_pass 1111
    }
    # \u865A\u62DFIP
    virtual_ipaddress {
        192.168.0.120/24
    }
    track_script {
        check_nginx
    }
}
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vrrp_script\uFF1A\u6307\u5B9A\u68C0\u67E5 nginx \u5DE5\u4F5C\u72B6\u6001\u811A\u672C\uFF08\u6839\u636E nginx \u72B6\u6001\u5224\u65AD\u662F\u5426\u6545\u969C\u8F6C\u79FB\uFF09 virtual_ipaddress\uFF1A\u865A\u62DF IP\uFF08VIP\uFF09</p><p>\u68C0\u67E5 nginx \u72B6\u6001\u811A\u672C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /etc/keepalived/check_nginx.sh  &lt;&lt; &quot;EOF&quot;
#!/bin/bash
count=$(ps -ef |grep nginx |egrep -cv &quot;grep|$$&quot;)

if [ &quot;$count&quot; -eq 0 ];then
    exit 1
else
    exit 0
fi
EOF
chmod +x /etc/keepalived/check_nginx.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4\u3001Keepalived \u914D\u7F6E\uFF08backup\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /etc/keepalived/keepalived.conf &lt;&lt; EOF
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
    virtual_router_id 51 # VRRP \u8DEF\u7531 ID\u5B9E\u4F8B\uFF0C\u6BCF\u4E2A\u5B9E\u4F8B\u662F\u552F\u4E00\u7684
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u68C0\u67E5 nginx \u72B6\u6001\u811A\u672C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /etc/keepalived/check_nginx.sh  &lt;&lt; &quot;EOF&quot;
#!/bin/bash
count=$(ps -ef |grep nginx |egrep -cv &quot;grep|$$&quot;)

if [ &quot;$count&quot; -eq 0 ];then
    exit 1
else
    exit 0
fi
EOF
chmod +x /etc/keepalived/check_nginx.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5\u3001\u542F\u52A8\u5E76\u8BBE\u7F6E\u5F00\u673A\u542F\u52A8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl daemon-reload
systemctl restart nginx &amp;&amp; systemctl enable nginx &amp;&amp; systemctl status nginx
systemctl restart keepalived &amp;&amp; systemctl enable keepalived &amp;&amp; systemctl status keepalived
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B VIP</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ip a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653046-16.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><p>6\u3001\u4FEE\u6539 hosts\uFF08\u6240\u6709\u8282\u70B9\uFF09</p><p>\u5C06 cluster-endpoint \u4E4B\u524D\u6267\u884C\u7684 ip \u4FEE\u6539\u6267\u884C\u73B0\u5728\u7684 VIP</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>192.168.0.113 k8s-master-168-0-113
192.168.0.114 k8s-node1-168-0-114
192.168.0.115 k8s-node2-168-0-115
192.168.0.116 k8s-master2-168-0-116
192.168.0.120 cluster-endpoint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7\u3001\u6D4B\u8BD5\u9A8C\u8BC1</p><p>\u67E5\u770B\u7248\u672C\uFF08\u8D1F\u8F7D\u5747\u8861\u6D4B\u8BD5\u9A8C\u8BC1\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>curl -k https://cluster-endpoint:16443/version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653046-17.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><p>\u9AD8\u53EF\u7528\u6D4B\u8BD5\u9A8C\u8BC1\uFF0C\u5C06 k8s-master-168-0-113 \u8282\u70B9\u5173\u673A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>shutdown -h now
curl -k https://cluster-endpoint:16443/version
kubectl get nodes -A
kubectl get pods -A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u3010\u6E29\u99A8\u63D0\u793A\u3011\u5806\u53E0\u96C6\u7FA4\u5B58\u5728\u8026\u5408\u5931\u8D25\u7684\u98CE\u9669\u3002\u5982\u679C\u4E00\u4E2A\u8282\u70B9\u53D1\u751F\u6545\u969C\uFF0C\u5219 etcd \u6210\u5458\u548C\u63A7\u5236\u5E73\u9762\u5B9E\u4F8B\u90FD\u5C06\u4E22\u5931\uFF0C \u5E76\u4E14\u5197\u4F59\u4F1A\u53D7\u5230\u5F71\u54CD\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u6DFB\u52A0\u66F4\u591A\u63A7\u5236\u5E73\u9762\u8282\u70B9\u6765\u964D\u4F4E\u6B64\u98CE\u9669\u3002\u53E6\u5916\uFF0C\u641C\u7D22\u516C\u4F17\u53F7\u7F16\u7A0B\u6280\u672F\u5708\u540E\u53F0\u56DE\u590D\u201C1024\u201D\uFF0C\u83B7\u53D6\u4E00\u4EFD\u60CA\u559C\u793C\u5305\u3002</p></blockquote><h3 id="\u4E09\u3001k8s-\u7BA1\u7406\u5E73\u53F0-dashboard-\u73AF\u5883\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001k8s-\u7BA1\u7406\u5E73\u53F0-dashboard-\u73AF\u5883\u90E8\u7F72" aria-hidden="true">#</a> \u4E09\u3001k8s \u7BA1\u7406\u5E73\u53F0 dashboard \u73AF\u5883\u90E8\u7F72</h3><h4 id="_1-dashboard-\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#_1-dashboard-\u90E8\u7F72" aria-hidden="true">#</a> 1\uFF09dashboard \u90E8\u7F72</h4>`,116),g={href:"https://github.com/kubernetes/dashboard",target:"_blank",rel:"noopener noreferrer"},h=d(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl apply -f https://raw.githubusercontent.com/kubernetes/dashboard/v2.6.0/aio/deploy/recommended.yaml
kubectl get pods -n kubernetes-dashboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\u8FD9\u4E2A\u53EA\u80FD\u5185\u90E8\u8BBF\u95EE\uFF0C\u6240\u4EE5\u8981\u5916\u90E8\u8BBF\u95EE\uFF0C\u8981\u4E48\u90E8\u7F72 ingress\uFF0C\u8981\u4E48\u5C31\u662F\u8BBE\u7F6E service NodePort \u7C7B\u578B\u3002\u8FD9\u91CC\u9009\u62E9 service \u66B4\u9732\u7AEF\u53E3\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wget https://raw.githubusercontent.com/kubernetes/dashboard/v2.6.0/aio/deploy/recommended.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4FEE\u6539\u540E\u7684\u5185\u5BB9\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># Copyright 2017 The Kubernetes Authors.
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653046-18.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><p>\u91CD\u65B0\u90E8\u7F72</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl delete -f recommended.yaml
kubectl apply -f recommended.yaml
kubectl get svc,pods -n kubernetes-dashboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653046-19.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><h4 id="_2-\u521B\u5EFA\u767B\u5F55\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#_2-\u521B\u5EFA\u767B\u5F55\u7528\u6237" aria-hidden="true">#</a> 2\uFF09\u521B\u5EFA\u767B\u5F55\u7528\u6237</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt;ServiceAccount.yaml&lt;&lt;EOF
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521B\u5EFA\u5E76\u83B7\u53D6\u767B\u5F55 token</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl -n kubernetes-dashboard create token admin-user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-\u914D\u7F6E-hosts-\u767B\u5F55-dashboard-web" tabindex="-1"><a class="header-anchor" href="#_3-\u914D\u7F6E-hosts-\u767B\u5F55-dashboard-web" aria-hidden="true">#</a> 3\uFF09\u914D\u7F6E hosts \u767B\u5F55 dashboard web</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>192.168.0.120 cluster-endpoint
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15),x={href:"https://cluster-endpoint:31443",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,[e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653046-20.png",alt:"K8S\u9AD8\u53EF\u7528\u90E8\u7F72",loading:"lazy"})],-1),y=e("p",null,"\u8F93\u5165\u4E0A\u9762\u521B\u5EFA\u7684 token \u767B\u5F55",-1),f=e("p",null,[e("img",{src:"http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653046-21.png",alt:"K8S\u9AD8\u53EF\u7528\u90E8\u7F72",loading:"lazy"})],-1),_=e("h3",{id:"\u56DB\u3001k8s-\u955C\u50CF\u4ED3\u5E93-harbor-\u73AF\u5883\u90E8\u7F72",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u56DB\u3001k8s-\u955C\u50CF\u4ED3\u5E93-harbor-\u73AF\u5883\u90E8\u7F72","aria-hidden":"true"},"#"),n(" \u56DB\u3001k8s \u955C\u50CF\u4ED3\u5E93 harbor \u73AF\u5883\u90E8\u7F72")],-1),q={href:"https://github.com/helm/helm/releases",target:"_blank",rel:"noopener noreferrer"},S=d(`<h4 id="_1-\u5B89\u88C5-helm" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5-helm" aria-hidden="true">#</a> 1\uFF09\u5B89\u88C5 helm</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir -p /opt/k8s/helm &amp;&amp; cd /opt/k8s/helm
wget https://get.helm.sh/helm-v3.9.0-rc.1-linux-amd64.tar.gz
tar -xf helm-v3.9.0-rc.1-linux-amd64.tar.gz
ln -s /opt/k8s/helm/linux-amd64/helm /usr/bin/helm
helm version
helm help
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-\u914D\u7F6E-hosts" tabindex="-1"><a class="header-anchor" href="#_2-\u914D\u7F6E-hosts" aria-hidden="true">#</a> 2\uFF09\u914D\u7F6E hosts</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>192.168.0.120 myharbor.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-\u521B\u5EFA-stl-\u8BC1\u4E66" tabindex="-1"><a class="header-anchor" href="#_3-\u521B\u5EFA-stl-\u8BC1\u4E66" aria-hidden="true">#</a> 3\uFF09\u521B\u5EFA stl \u8BC1\u4E66</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir /opt/k8s/helm/stl &amp;&amp; cd /opt/k8s/helm/stl
# \u751F\u6210 CA \u8BC1\u4E66\u79C1\u94A5
openssl genrsa -out ca.key 4096
# \u751F\u6210 CA \u8BC1\u4E66
openssl req -x509 -new -nodes -sha512 -days 3650 \\
 -subj &quot;/C=CN/ST=Guangdong/L=Shenzhen/O=harbor/OU=harbor/CN=myharbor.com&quot; \\
 -key ca.key \\
 -out ca.crt
# \u521B\u5EFA\u57DF\u540D\u8BC1\u4E66\uFF0C\u751F\u6210\u79C1\u94A5
openssl genrsa -out myharbor.com.key 4096
# \u751F\u6210\u8BC1\u4E66\u7B7E\u540D\u8BF7\u6C42 CSR
openssl req -sha512 -new \\
    -subj &quot;/C=CN/ST=Guangdong/L=Shenzhen/O=harbor/OU=harbor/CN=myharbor.com&quot; \\
    -key myharbor.com.key \\
    -out myharbor.com.csr
# \u751F\u6210 x509 v3 \u6269\u5C55
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
#\u521B\u5EFA Harbor \u8BBF\u95EE\u8BC1\u4E66
openssl x509 -req -sha512 -days 3650 \\
    -extfile v3.ext \\
    -CA ca.crt -CAkey ca.key -CAcreateserial \\
    -in myharbor.com.csr \\
    -out myharbor.com.crt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-\u5B89\u88C5-ingress" tabindex="-1"><a class="header-anchor" href="#_4-\u5B89\u88C5-ingress" aria-hidden="true">#</a> 4\uFF09\u5B89\u88C5 ingress</h3>`,7),w={href:"https://kubernetes.github.io/ingress-nginx/",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/kubernetes/ingress-nginx",target:"_blank",rel:"noopener noreferrer"},I={href:"https://kubernetes.github.io/ingress-nginx/deploy/",target:"_blank",rel:"noopener noreferrer"},O=d(`<p>1\u3001\u901A\u8FC7 helm \u90E8\u7F72</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>helm upgrade --install ingress-nginx ingress-nginx \\
  --repo https://kubernetes.github.io/ingress-nginx \\
  --namespace ingress-nginx --create-namespace
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2\u3001\u901A\u8FC7 YAML \u6587\u4EF6\u5B89\u88C5\uFF08\u672C\u7AE0\u4F7F\u7528\u8FD9\u4E2A\u65B9\u5F0F\u5B89\u88C5 ingress\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u4E0B\u8F7D\u955C\u50CF\u5931\u8D25\uFF0C\u53EF\u4EE5\u7528\u4EE5\u4E0B\u65B9\u5F0F\u4FEE\u6539\u955C\u50CF\u5730\u5740\u518D\u5B89\u88C5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u53EF\u4EE5\u5148\u628A\u955C\u50CF\u4E0B\u8F7D\uFF0C\u518D\u5B89\u88C5
docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/nginx-ingress-controller:v1.2.0
docker pull registry.cn-hangzhou.aliyuncs.com/google_containers/kube-webhook-certgen:v1.1.1

wget https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.2.0/deploy/static/provider/cloud/deploy.yaml
# \u4FEE\u6539\u955C\u50CF\u5730\u5740
sed -i &#39;s@k8s.gcr.io/ingress-nginx/controller:v1.2.0\\(.*\\)@registry.cn-hangzhou.aliyuncs.com/google_containers/nginx-ingress-controller:v1.2.0@&#39; deploy.yaml
sed -i &#39;s@k8s.gcr.io/ingress-nginx/kube-webhook-certgen:v1.1.1\\(.*\\)$@registry.cn-hangzhou.aliyuncs.com/google_containers/kube-webhook-certgen:v1.1.1@&#39; deploy.yaml

###\u8FD8\u9700\u8981\u4FEE\u6539\u4E24\u5730\u65B9
#1\u3001kind: \u7C7B\u578B\u4FEE\u6539\u6210DaemonSet\uFF0Creplicas: \u6CE8\u9500\u6389\uFF0C\u56E0\u4E3ADaemonSet\u6A21\u5F0F\u4F1A\u6BCF\u4E2A\u8282\u70B9\u8FD0\u884C\u4E00\u4E2Apod
#2\u3001\u5728\u6DFB\u52A0\u4E00\u6761\uFF1Ahostnetwork\uFF1Atrue
#3\u3001\u628ALoadBalancer\u4FEE\u6539\u6210NodePort
#4\u3001\u5728--validating-webhook-key\u4E0B\u9762\u6DFB\u52A0- --watch-ingress-without-class=true
#5\u3001\u8BBE\u7F6Emaster\u8282\u70B9\u53EF\u8C03\u5EA6
kubectl taint nodes k8s-master-168-0-113 node-role.kubernetes.io/control-plane:NoSchedule-
kubectl taint nodes k8s-master2-168-0-116 node-role.kubernetes.io/control-plane:NoSchedule-

kubectl apply -f deploy.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653046-22.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><h4 id="_5-\u5B89\u88C5-nfs" tabindex="-1"><a class="header-anchor" href="#_5-\u5B89\u88C5-nfs" aria-hidden="true">#</a> 5\uFF09\u5B89\u88C5 nfs</h4><p>1\u3001\u6240\u6709\u8282\u70B9\u5B89\u88C5 nfs</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum -y install  nfs-utils rpcbind
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2\u3001\u5728 master \u8282\u70B9\u521B\u5EFA\u5171\u4EAB\u76EE\u5F55\u5E76\u6388\u6743</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir /opt/nfsdata
# \u6388\u6743\u5171\u4EAB\u76EE\u5F55
chmod 666 /opt/nfsdata
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3\u3001\u914D\u7F6E exports \u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt; /etc/exports&lt;&lt;EOF
/opt/nfsdata *(rw,no_root_squash,no_all_squash,sync)
EOF
# \u914D\u7F6E\u751F\u6548
exportfs -r
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>exportfs \u547D\u4EE4</p><blockquote><p>\u5E38\u7528\u9009\u9879 -a \u5168\u90E8\u6302\u8F7D\u6216\u8005\u5168\u90E8\u5378\u8F7D -r \u91CD\u65B0\u6302\u8F7D -u \u5378\u8F7D\u67D0\u4E00\u4E2A\u76EE\u5F55 -v \u663E\u793A\u5171\u4EAB\u76EE\u5F55 \u4EE5\u4E0B\u64CD\u4F5C\u5728\u670D\u52A1\u7AEF\u4E0A</p></blockquote><p>4\u3001\u542F\u52A8 rpc \u548C nfs\uFF08\u5BA2\u6237\u7AEF\u53EA\u9700\u8981\u542F\u52A8 rpc \u670D\u52A1\uFF09\uFF08\u6CE8\u610F\u987A\u5E8F\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl start rpcbind
systemctl start nfs-server
systemctl enable rpcbind
systemctl enable nfs-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u67E5\u770B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>showmount -e
# VIP
showmount -e 192.168.0.120
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>-e \u663E\u793A NFS \u670D\u52A1\u5668\u7684\u5171\u4EAB\u5217\u8868 -a \u663E\u793A\u672C\u673A\u6302\u8F7D\u7684\u6587\u4EF6\u8D44\u6E90\u7684\u60C5\u51B5 NFS \u8D44\u6E90\u7684\u60C5\u51B5 -v \u663E\u793A\u7248\u672C\u53F7</p></blockquote><p>5\u3001\u5BA2\u6237\u7AEF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5B89\u88C5
yum -y install  nfs-utils rpcbind
# \u542F\u52A8rpc\u670D\u52A1
systemctl start rpcbind
systemctl enable rpcbind
# \u521B\u5EFA\u6302\u8F7D\u76EE\u5F55
mkdir /mnt/nfsdata
# \u6302\u8F7D
echo &quot;192.168.0.120:/opt/nfsdata /mnt/nfsdata     nfs    defaults  0 1&quot;&gt;&gt; /etc/fstab
mount -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>6\u3001rsync \u6570\u636E\u540C\u6B65</p><p>\u30101\u3011rsync \u5B89\u88C5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u4E24\u7AEF\u90FD\u5F97\u5B89\u88C5
yum -y install rsync
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u30102\u3011\u914D\u7F6E \u5728/etc/rsyncd.conf \u4E2D\u6DFB\u52A0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &gt;/etc/rsyncd.conf&lt;&lt;EOF
uid = root
gid = root
#\u7981\u9522\u5728\u6E90\u76EE\u5F55
use chroot = yes
#\u76D1\u542C\u5730\u5740
address = 192.168.0.113
#\u76D1\u542C\u5730\u5740tcp/udp 873\uFF0C\u53EF\u901A\u8FC7cat /etc/services | grep rsync\u67E5\u770B
port 873
#\u65E5\u5FD7\u6587\u4EF6\u4F4D\u7F6E
log file = /var/log/rsyncd.log
#\u5B58\u653E\u8FDB\u7A0B ID \u7684\u6587\u4EF6\u4F4D\u7F6E
pid file = /var/run/rsyncd.pid
#\u5141\u8BB8\u8BBF\u95EE\u7684\u5BA2\u6237\u673A\u5730\u5740
hosts allow = 192.168.0.0/16
#\u5171\u4EAB\u6A21\u5757\u540D\u79F0
[nfsdata]
#\u6E90\u76EE\u5F55\u7684\u5B9E\u9645\u8DEF\u5F84
path = /opt/nfsdata
comment = Document Root of www.kgc.com
#\u6307\u5B9A\u5BA2\u6237\u7AEF\u662F\u5426\u53EF\u4EE5\u4E0A\u4F20\u6587\u4EF6\uFF0C\u9ED8\u8BA4\u5BF9\u6240\u6709\u6A21\u5757\u4E3A true
read only = yes
#\u540C\u6B65\u65F6\u4E0D\u518D\u538B\u7F29\u7684\u6587\u4EF6\u7C7B\u578B
dont compress = *.gz *.bz2 *.tgz *.zip *.rar *.z
#\u6388\u6743\u8D26\u6237\uFF0C\u591A\u4E2A\u8D26\u53F7\u4EE5\u7A7A\u683C\u5206\u9694\uFF0C\u4E0D\u52A0\u5219\u4E3A\u533F\u540D\uFF0C\u4E0D\u4F9D\u8D56\u7CFB\u7EDF\u8D26\u53F7
auth users = backuper
#\u5B58\u653E\u8D26\u6237\u4FE1\u606F\u7684\u6570\u636E\u6587\u4EF6
secrets file = /etc/rsyncd_users.db
EOF
\u914D\u7F6E rsyncd_users.db

cat &gt;/etc/rsyncd_users.db&lt;&lt;EOF
backuper:123456
EOF
#\u5B98\u65B9\u8981\u6C42\uFF0C\u6700\u597D\u53EA\u662F\u8D4B\u6743600\uFF01
chmod 600 /etc/rsyncd_users.db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u30103\u3011rsyncd.conf \u5E38\u7528\u53C2\u6570\u8BE6\u89E3</p><p>rsyncd.conf \u53C2\u6570</p><table><thead><tr><th style="text-align:left;">rsyncd.conf \u53C2\u6570</th><th style="text-align:left;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">uid=root</td><td style="text-align:left;">rsync \u4F7F\u7528\u7684\u7528\u6237\u3002</td></tr><tr><td style="text-align:left;">gid=root</td><td style="text-align:left;">rsync \u4F7F\u7528\u7684\u7528\u6237\u7EC4\uFF08\u7528\u6237\u6240\u5728\u7684\u7EC4\uFF09</td></tr><tr><td style="text-align:left;">use chroot=no</td><td style="text-align:left;">\u5982\u679C\u4E3A true\uFF0Cdaemon \u4F1A\u5728\u5BA2\u6237\u7AEF\u4F20\u8F93\u6587\u4EF6\u524D\u201Cchroot to the path\u201D\u3002\u8FD9\u662F\u4E00\u79CD\u5B89\u5168\u914D\u7F6E\uFF0C\u56E0\u4E3A\u6211\u4EEC\u5927\u591A\u6570\u90FD\u5728\u5185\u7F51\uFF0C\u6240\u4EE5\u4E0D\u914D\u4E5F\u6CA1\u5173\u7CFB</td></tr><tr><td style="text-align:left;">max connections=200</td><td style="text-align:left;">\u8BBE\u7F6E\u6700\u5927\u8FDE\u63A5\u6570\uFF0C\u9ED8\u8BA4 0\uFF0C\u610F\u601D\u65E0\u9650\u5236\uFF0C\u8D1F\u503C\u4E3A\u5173\u95ED\u8FD9\u4E2A\u6A21\u5757</td></tr><tr><td style="text-align:left;">timeout=400</td><td style="text-align:left;">\u9ED8\u8BA4\u4E3A 0\uFF0C\u8868\u793A no timeout\uFF0C\u5EFA\u8BAE 300-600\uFF085-10 \u5206\u949F\uFF09</td></tr><tr><td style="text-align:left;">pid file</td><td style="text-align:left;">rsync daemon \u542F\u52A8\u540E\u5C06\u5176\u8FDB\u7A0B pid \u5199\u5165\u6B64\u6587\u4EF6\u3002\u5982\u679C\u8FD9\u4E2A\u6587\u4EF6\u5B58\u5728\uFF0Crsync \u4E0D\u4F1A\u8986\u76D6\u8BE5\u6587\u4EF6\uFF0C\u800C\u662F\u4F1A\u7EC8\u6B62</td></tr><tr><td style="text-align:left;">lock file</td><td style="text-align:left;">\u6307\u5B9A lock \u6587\u4EF6\u7528\u6765\u652F\u6301\u201Cmax connections\u201D\u53C2\u6570\uFF0C\u4F7F\u5F97\u603B\u8FDE\u63A5\u6570\u4E0D\u4F1A\u8D85\u8FC7\u9650\u5236</td></tr><tr><td style="text-align:left;">log file</td><td style="text-align:left;">\u4E0D\u8BBE\u6216\u8005\u8BBE\u7F6E\u9519\u8BEF\uFF0Crsync \u4F1A\u4F7F\u7528 rsyslog \u8F93\u51FA\u76F8\u5173\u65E5\u5FD7\u4FE1\u606F</td></tr><tr><td style="text-align:left;">ignore errors</td><td style="text-align:left;">\u5FFD\u7565 I/O \u9519\u8BEF</td></tr><tr><td style="text-align:left;">read only=false</td><td style="text-align:left;">\u6307\u5B9A\u5BA2\u6237\u7AEF\u662F\u5426\u53EF\u4EE5\u4E0A\u4F20\u6587\u4EF6\uFF0C\u9ED8\u8BA4\u5BF9\u6240\u6709\u6A21\u5757\u4E3A true</td></tr><tr><td style="text-align:left;">list=false</td><td style="text-align:left;">\u662F\u5426\u5141\u8BB8\u5BA2\u6237\u7AEF\u53EF\u4EE5\u67E5\u770B\u53EF\u7528\u6A21\u5757\u5217\u8868\uFF0C\u9ED8\u8BA4\u4E3A\u53EF\u4EE5</td></tr><tr><td style="text-align:left;">hosts allow</td><td style="text-align:left;">\u6307\u5B9A\u53EF\u4EE5\u8054\u7CFB\u7684\u5BA2\u6237\u7AEF\u4E3B\u673A\u540D\u6216\u548C ip \u5730\u5740\u6216\u5730\u5740\u6BB5\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u6CA1\u6709\u6B64\u53C2\u6570\uFF0C\u5373\u90FD\u53EF\u4EE5\u8FDE\u63A5</td></tr><tr><td style="text-align:left;">hosts deny</td><td style="text-align:left;">\u6307\u5B9A\u4E0D\u53EF\u4EE5\u8054\u7CFB\u7684\u5BA2\u6237\u7AEF\u4E3B\u673A\u540D\u6216 ip \u5730\u5740\u6216\u5730\u5740\u6BB5\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u6CA1\u6709\u6B64\u53C2\u6570\uFF0C\u5373\u90FD\u53EF\u4EE5\u8FDE\u63A5</td></tr><tr><td style="text-align:left;">auth users</td><td style="text-align:left;">\u6307\u5B9A\u4EE5\u7A7A\u683C\u6216\u9017\u53F7\u5206\u9694\u7684\u7528\u6237\u53EF\u4EE5\u4F7F\u7528\u54EA\u4E9B\u6A21\u5757\uFF0C\u7528\u6237\u4E0D\u9700\u8981\u5728\u672C\u5730\u7CFB\u7EDF\u4E2D\u5B58\u5728\u3002\u9ED8\u8BA4\u4E3A\u6240\u6709\u7528\u6237\u65E0\u5BC6\u7801\u8BBF\u95EE</td></tr><tr><td style="text-align:left;">secrets file</td><td style="text-align:left;">\u6307\u5B9A\u7528\u6237\u540D\u548C\u5BC6\u7801\u5B58\u653E\u7684\u6587\u4EF6\uFF0C\u683C\u5F0F\uFF1B\u7528\u6237\u540D\uFF1B\u5BC6\u7801\uFF0C\u5BC6\u7801\u4E0D\u8D85\u8FC7 8 \u4F4D</td></tr><tr><td style="text-align:left;">[backup]</td><td style="text-align:left;">\u8FD9\u91CC\u5C31\u662F\u6A21\u5757\u540D\u79F0\uFF0C\u9700\u7528\u4E2D\u62EC\u53F7\u6269\u8D77\u6765\uFF0C\u8D77\u540D\u79F0\u6CA1\u6709\u7279\u6B8A\u8981\u6C42\uFF0C\u4F46\u6700\u597D\u662F\u6709\u610F\u4E49\u7684\u540D\u79F0\uFF0C\u4FBF\u4E8E\u4EE5\u540E\u7EF4\u62A4</td></tr><tr><td style="text-align:left;">path</td><td style="text-align:left;">\u8FD9\u4E2A\u6A21\u5757\u4E2D\uFF0Cdaemon \u4F7F\u7528\u7684\u6587\u4EF6\u7CFB\u7EDF\u6216\u76EE\u5F55\uFF0C\u76EE\u5F55\u7684\u6743\u9650\u8981\u6CE8\u610F\u548C\u914D\u7F6E\u6587\u4EF6\u4E2D\u7684\u6743\u9650\u4E00\u81F4\uFF0C\u5426\u5219\u4F1A\u9047\u5230\u8BFB\u5199\u7684\u95EE\u9898</td></tr></tbody></table><p>\u30104\u3011rsync \u5E38\u7528\u547D\u4EE4\u53C2\u6570\u8BE6\u89E3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>rsync --help

rsync [\u9009\u9879]  \u539F\u59CB\u4F4D\u7F6E   \u76EE\u6807\u4F4D\u7F6E

\u5E38\u7528\u9009\u9879    \u8BF4\u660E
-r    \u9012\u5F52\u6A21\u5F0F\uFF0C\u5305\u542B\u76EE\u5F55\u53CA\u5B50\u76EE\u5F55\u4E2D\u7684\u6240\u6709\u6587\u4EF6
-l    \u5BF9\u4E8E\u7B26\u53F7\u94FE\u63A5\u6587\u4EF6\u4ECD\u7136\u590D\u5236\u4E3A\u7B26\u53F7\u94FE\u63A5\u6587\u4EF6
-v    \u663E\u793A\u540C\u6B65\u8FC7\u7A0B\u7684\u8BE6\u7EC6\u4FE1\u606F
-z    \u5728\u4F20\u8F93\u6587\u4EF6\u65F6\u8FDB\u884C\u538B\u7F29goD
-p    \u4FDD\u7559\u6587\u4EF6\u7684\u6743\u9650\u6807\u8BB0
-a    \u5F52\u6863\u6A21\u5F0F\uFF0C\u9012\u5F52\u5E76\u4FDD\u7559\u5BF9\u8C61\u5C5E\u6027\uFF0C\u7B49\u540C\u4E8E-rlpt
-t    \u4FDD\u7559\u6587\u4EF6\u7684\u65F6\u95F4\u6807\u8BB0
-g    \u4FDD\u7559\u6587\u4EF6\u7684\u5C5E\u7EC4\u6807\u8BB0\uFF08\u4EC5\u8D85\u7EA7\u7528\u6237\u4F7F\u7528\uFF09
-o    \u4FDD\u7559\u6587\u4EF6\u7684\u5C5E\u4E3B\u6807\u8BB0\uFF08\u4EC5\u8D85\u7EA7\u7528\u6237\u4F7F\u7528\uFF09
-H    \u4FDD\u7559\u786C\u94FE\u63A5\u6587\u4EF6
-A    \u4FDD\u7559ACL\u5C5E\u6027\u4FE1\u606F
-D    \u4FDD\u7559\u8BBE\u5907\u6587\u4EF6\u53CA\u5176\u4ED6\u7279\u6B8A\u6587\u4EF6
--delete  \u5220\u9664\u76EE\u6807\u4F4D\u7F6E\u6709\u800C\u539F\u59CB\u4F4D\u7F6E\u6CA1\u6709\u7684\u6587\u4EF6
--checksum  \u6839\u636E\u5BF9\u8C61\u7684\u6821\u9A8C\u548C\u6765\u51B3\u5B9A\u662F\u5426\u8DF3\u8FC7\u6587\u4EF6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u30105\u3011\u542F\u52A8\u670D\u52A1\uFF08\u6570\u636E\u6E90\u673A\u5668\uFF09</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#rsync\u76D1\u542C\u7AEF\u53E3\uFF1A873
#rsync\u8FD0\u884C\u6A21\u5F0F\uFF1AC/S
rsync --daemon --config=/etc/rsyncd.conf
netstat -tnlp|grep :873
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u30106\u3011\u6267\u884C\u547D\u4EE4\u540C\u6B65\u6570\u636E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5728\u76EE\u7684\u673A\u5668\u4E0A\u6267\u884C
# rsync -avz \u7528\u6237\u540D@\u6E90\u4E3B\u673A\u5730\u5740/\u6E90\u76EE\u5F55 \u76EE\u7684\u76EE\u5F55
rsync -avz root@192.168.0.113:/opt/nfsdata/* /opt/nfsdata/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u30107\u3011crontab \u5B9A\u65F6\u540C\u6B65</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u914D\u7F6Ecrontab\uFF0C \u6BCF\u4E94\u5206\u949F\u540C\u6B65\u4E00\u6B21\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u4E0D\u597D
*/5 * * * * rsync -avz root@192.168.0.113:/opt/nfsdata/* /opt/nfsdata/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u3010\u6E29\u99A8\u63D0\u793A\u3011crontab \u5B9A\u65F6\u540C\u6B65\u6570\u636E\u4E0D\u592A\u597D\uFF0C\u53EF\u4EE5\u4F7F\u7528rsync+inotify\u505A\u6570\u636E\u5B9E\u65F6\u540C\u6B65\uFF0C\u8FD9\u91CC\u7BC7\u5E45\u6709\u70B9\u957F\u4E86\uFF0C\u5148\u4E0D\u8BB2\uFF0C\u5982\u679C\u540E\u9762\u6709\u65F6\u95F4\u4F1A\u51FA\u4E00\u7BC7\u5355\u72EC\u6587\u7AE0\u6765\u8BB2\u3002\u53E6\u5916\uFF0C\u641C\u7D22\u516C\u4F17\u53F7\u540E\u7AEF\u67B6\u6784\u5E08\u540E\u53F0\u56DE\u590D\u201C\u67B6\u6784\u6574\u6D01\u201D\uFF0C\u83B7\u53D6\u4E00\u4EFD\u60CA\u559C\u793C\u5305\u3002</p></blockquote><h3 id="_6-\u521B\u5EFA-nfs-provisioner-\u548C\u6301\u4E45\u5316\u5B58\u50A8-sc" tabindex="-1"><a class="header-anchor" href="#_6-\u521B\u5EFA-nfs-provisioner-\u548C\u6301\u4E45\u5316\u5B58\u50A8-sc" aria-hidden="true">#</a> 6\uFF09\u521B\u5EFA nfs provisioner \u548C\u6301\u4E45\u5316\u5B58\u50A8 SC</h3><blockquote><p>\u3010\u6E29\u99A8\u63D0\u793A\u3011\u8FD9\u91CC\u8DDF\u6211\u4E4B\u524D\u7684\u6587\u7AE0\u6709\u70B9\u4E0D\u540C\uFF0C\u4E4B\u524D\u7684\u65B9\u5F0F\u4E5F\u4E0D\u9002\u7528\u65B0\u7248\u672C\u3002</p></blockquote>`,42),E={href:"https://github.com/kubernetes-sigs/nfs-subdir-external-provisioner",target:"_blank",rel:"noopener noreferrer"},N=d(`<p>helm \u90E8\u7F72 nfs-subdir-external-provisioner</p><p>1\u3001\u6DFB\u52A0 helm \u4ED3\u5E93</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>helm repo add nfs-subdir-external-provisioner https://kubernetes-sigs.github.io/nfs-subdir-external-provisioner/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2\u3001helm \u5B89\u88C5 nfs provisioner</p><blockquote><p>\u3010\u6E29\u99A8\u63D0\u793A\u3011\u9ED8\u8BA4\u955C\u50CF\u662F\u65E0\u6CD5\u8BBF\u95EE\u7684\uFF0C\u8FD9\u91CC\u4F7F\u7528 dockerhub \u641C\u7D22\u5230\u7684\u955C\u50CFwilldockerhub/nfs-subdir-external-provisioner:v4.0.2\uFF0C\u8FD8\u6709\u5C31\u662F StorageClass \u4E0D\u5206\u547D\u540D\u7A7A\u95F4\uFF0C\u6240\u6709\u5728\u6240\u6709\u547D\u540D\u7A7A\u95F4\u4E0B\u90FD\u53EF\u4EE5\u4F7F\u7528\u3002</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>helm install nfs-subdir-external-provisioner nfs-subdir-external-provisioner/nfs-subdir-external-provisioner \\
  --namespace=nfs-provisioner \\
  --create-namespace \\
  --set image.repository=willdockerhub/nfs-subdir-external-provisioner \\
  --set image.tag=v4.0.2 \\
  --set replicaCount=2 \\
  --set storageClass.name=nfs-client \\
  --set storageClass.defaultClass=true \\
  --set nfs.server=192.168.0.120 \\
  --set nfs.path=/opt/nfsdata
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u3010\u6E29\u99A8\u63D0\u793A\u3011\u4E0A\u9762 nfs.server \u8BBE\u7F6E\u4E3A VIP\uFF0C\u53EF\u5B9E\u73B0\u9AD8\u53EF\u7528\u3002</p></blockquote><p>3\u3001\u67E5\u770B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get pods,deploy,sc -n nfs-provisioner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653046-23.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><h4 id="_7-\u90E8\u7F72-harbor-https-\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#_7-\u90E8\u7F72-harbor-https-\u65B9\u5F0F" aria-hidden="true">#</a> 7\uFF09\u90E8\u7F72 Harbor\uFF08Https \u65B9\u5F0F\uFF09</h4><p>1\u3001\u521B\u5EFA Namespace</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl create ns harbor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2\u3001\u521B\u5EFA\u8BC1\u4E66\u79D8\u94A5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl create secret tls myharbor.com --key myharbor.com.key --cert myharbor.com.crt -n harbor
kubectl get secret myharbor.com -n harbor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3\u3001\u6DFB\u52A0 Chart \u5E93</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>helm repo add harbor https://helm.goharbor.io
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4\u3001\u901A\u8FC7 helm \u5B89\u88C5 harbor</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>helm install myharbor --namespace harbor harbor/harbor \\
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u7A0D\u7B49\u4E00\u6BB5\u65F6\u95F4\u5728\u67E5\u770B\u8D44\u6E90\u72B6\u6001</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>kubectl get ingress,svc,pods,pvc -n harbor
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653046-24.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><h3 id="_5\u3001ingress-\u6CA1\u6709-address-\u95EE\u9898\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#_5\u3001ingress-\u6CA1\u6709-address-\u95EE\u9898\u89E3\u51B3" aria-hidden="true">#</a> 5\u3001ingress \u6CA1\u6709 ADDRESS \u95EE\u9898\u89E3\u51B3</h3><p>\u3010\u5206\u6790\u3011\uFF0C\u53D1\u73B0&quot;error: endpoints \u201Cdefault-http-backend\u201D not found&quot;</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &lt;&lt; EOF &gt; default-http-backend.yaml
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6\u3001\u5378\u8F7D\u91CD\u65B0\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u5378\u8F7D\u91CD\u65B0\u90E8\u7F72" aria-hidden="true">#</a> 6\u3001\u5378\u8F7D\u91CD\u65B0\u90E8\u7F72</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5378\u8F7D
helm uninstall myharbor -n harbor
kubectl get pvc -n harbor| awk &#39;NR!=1{print $1}&#39; | xargs kubectl delete pvc -n harbor

# \u90E8\u7F72
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653046-25.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><p>5\u3001\u8BBF\u95EE harbor</p>`,29),z={href:"https://myharbor.com",target:"_blank",rel:"noopener noreferrer"},P=d(`<p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653046-26.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><p>6\u3001harbor \u5E38\u89C1\u64CD\u4F5C \u30101\u3011\u521B\u5EFA\u9879\u76EE bigdata</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653046-27.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><p>\u30102\u3011\u914D\u7F6E\u79C1\u6709\u4ED3\u5E93 \u5728\u6587\u4EF6/etc/docker/daemon.json\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;insecure-registries&quot;:[&quot;https://myharbor.com&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u91CD\u542F docker</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>systemctl restart docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u30103\u3011\u670D\u52A1\u5668\u4E0A\u767B\u5F55 harbor</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker login https://myharbor.com
#\u8D26\u53F7/\u5BC6\u7801\uFF1Aadmin/Harbor12345
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653047-28.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><p>\u30104\u3011\u6253\u6807\u7B7E\u5E76\u628A\u955C\u50CF\u4E0A\u4F20\u5230 harbor</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker tag rancher/pause:3.6 myharbor.com/bigdata/pause:3.6
docker push myharbor.com/bigdata/pause:3.6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>7\u3001\u4FEE\u6539 containerd \u914D\u7F6E</p><p>\u4EE5\u524D\u4F7F\u7528 docker-engine \u7684\u65F6\u5019\uFF0C\u53EA\u9700\u8981\u4FEE\u6539/etc/docker/daemon.json \u5C31\u884C\uFF0C\u4F46\u662F\u65B0\u7248\u7684 k8s \u5DF2\u7ECF\u4F7F\u7528 containerd \u4E86\uFF0C\u6240\u4EE5\u8FD9\u91CC\u9700\u8981\u505A\u76F8\u5173\u914D\u7F6E\uFF0C\u8981\u4E0D\u7136 containerd \u4F1A\u5931\u8D25\u3002\u8BC1\u4E66\uFF08ca.crt\uFF09\u53EF\u4EE5\u5728\u9875\u9762\u4E0A\u4E0B\u8F7D\uFF1A</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653047-29.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><p>\u521B\u5EFA\u57DF\u540D\u76EE\u5F55</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mkdir /etc/containerd/myharbor.com
cp ca.crt /etc/containerd/myharbor.com/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u914D\u7F6E\u6587\u4EF6\uFF1A/etc/containerd/config.toml</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[plugins.&quot;io.containerd.grpc.v1.cri&quot;.registry]
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653047-30.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><p>\u91CD\u542F containerd</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#\u91CD\u65B0\u52A0\u8F7D\u914D\u7F6E
systemctl daemon-reload
#\u91CD\u542Fcontainerd
systemctl restart containerd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B80\u5355\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u628Adocker\u6362\u6210crictl \u5C31\u884C\uFF0C\u547D\u4EE4\u90FD\u5DEE\u4E0D\u591A
crictl pull myharbor.com/bigdata/mysql:5.7.38
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C crictl \u62A5\u5982\u4E0B\u9519\u8BEF\u7684\u89E3\u51B3\u529E\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>WARN[0000] image connect using default endpoints: [unix:///var/run/dockershim.sock unix:///run/containerd/containerd.sock unix:///run/crio/crio.sock unix:///var/run/cri-dockerd.sock]. As the default settings are now deprecated, you should set the endpoint instead.
ERRO[0000] unable to determine image API version: rpc error: code = Unavailable desc = connection error: desc = &quot;transport: Error while dialing dial unix /var/run/dockershim.sock: connect: no such file or directory&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u62A5\u9519\u662F docker \u7684\u62A5\u9519\uFF0C\u8FD9\u91CC\u6CA1\u4F7F\u7528\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u9519\u8BEF\u4E0D\u5F71\u54CD\u4F7F\u7528\uFF0C\u4F46\u662F\u8FD8\u662F\u89E3\u51B3\u597D\u70B9\uFF0C\u89E3\u51B3\u65B9\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat &lt;&lt;EOF&gt; /etc/crictl.yaml
runtime-endpoint: unix:///run/containerd/containerd.sock
image-endpoint: unix:///run/containerd/containerd.sock
timeout: 10
debug: false
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u518D\u6B21\u62C9\u53D6\u955C\u50CF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>crictl pull myharbor.com/bigdata/mysql:5.7.38
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/640-1667642653047-31.png" alt="K8S\u9AD8\u53EF\u7528\u90E8\u7F72" loading="lazy"></p><p>Kubernetes\uFF08k8s\uFF09\u6700\u65B0\u7248\u6700\u5B8C\u6574\u7248\u57FA\u7840\u73AF\u5883\u90E8\u7F72+master \u9AD8\u53EF\u7528\u5B9E\u73B0\u8BE6\u7EC6\u6B65\u9AA4\u5C31\u5230\u8FD9\u91CC\u4E86</p>`,32);function A(K,F){const i=t("ExternalLinkIcon");return a(),r("div",null,[v,e("p",null,[n("\u5B98\u7F51\uFF1A"),e("a",u,[n("https://kubernetes.io/"),s(i)]),n(" \u5B98\u65B9\u6587\u6863\uFF1A"),e("a",o,[n("https://kubernetes.io/zh-cn/docs/home/"),s(i)])]),m,e("blockquote",null,[e("p",null,[n("\u94FE\u63A5\uFF1A"),e("a",b,[n("https://pan.baidu.com/s/1HB9xuO3bssAW7v5HzpXkeQ"),s(i)]),n(" \u63D0\u53D6\u7801\uFF1A8888")])]),p,e("p",null,[n("GitHub \u5730\u5740\uFF1A"),e("a",g,[n("https://github.com/kubernetes/dashboard"),s(i)])]),h,e("p",null,[n("\u767B\u5F55\uFF1A"),e("a",x,[n("https://cluster-endpoint:31443"),s(i)])]),k,y,f,_,e("p",null,[n("GitHub \u5730\u5740\uFF1A"),e("a",q,[n("https://github.com/helm/helm/releases"),s(i)]),n(" \u8FD9\u4F7F\u7528 helm \u5B89\u88C5\uFF0C\u6240\u4EE5\u5F97\u5148\u5B89\u88C5 helm\u3002\u53E6\u5916\uFF0C\u641C\u7D22\u516C\u4F17\u53F7Java\u67B6\u6784\u5E08\u6280\u672F\u540E\u53F0\u56DE\u590D\u201C\u9762\u8BD5\u9898\u201D\uFF0C\u83B7\u53D6\u4E00\u4EFD\u60CA\u559C\u793C\u5305\u3002")]),S,e("p",null,[n("ingress \u5B98\u65B9\u7F51\u7AD9\uFF1A"),e("a",w,[n("https://kubernetes.github.io/ingress-nginx/"),s(i)]),n(" ingress \u4ED3\u5E93\u5730\u5740\uFF1A"),e("a",C,[n("https://github.com/kubernetes/ingress-nginx"),s(i)]),n(" \u90E8\u7F72\u6587\u6863\uFF1A"),e("a",I,[n("https://kubernetes.github.io/ingress-nginx/deploy/"),s(i)])]),O,e("p",null,[n("GitHub \u5730\u5740\uFF1A"),e("a",E,[n("https://github.com/kubernetes-sigs/nfs-subdir-external-provisioner"),s(i)])]),N,e("p",null,[e("a",z,[n("https://myharbor.com"),s(i)]),n(" \u8D26\u53F7/\u5BC6\u7801\uFF1Aadmin/Harbor12345")]),P])}const D=l(c,[["render",A],["__file","\u8BE6\u89E3K8S\u9AD8\u53EF\u7528\u90E8\u7F72.html.vue"]]);export{D as default};
