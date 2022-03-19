<template><h1 id="windows子系统" tabindex="-1"><a class="header-anchor" href="#windows子系统" aria-hidden="true">#</a> Windows子系统</h1>
<h2 id="更换apt源。" tabindex="-1"><a class="header-anchor" href="#更换apt源。" aria-hidden="true">#</a> 更换apt源。</h2>
<p>因为Linux子系统的apt源使用的是官方源，需要连接到国外的服务器。所以安装一些软件时下载会很慢，我们可以改用国内的镜像apt源。国内的镜像源主要有：</p>
<p>可以直接使用 vim 对 /etc/apt/sources.list文件进行修改。</p>
<p>先进行一下备份。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mv</span> /etc/apt/sources.list /etc/apt/sources.list.bak
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>然后</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vim</span>  /etc/apt/sources.list
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="阿里源ubuntu-20-04-focal" tabindex="-1"><a class="header-anchor" href="#阿里源ubuntu-20-04-focal" aria-hidden="true">#</a> 阿里源ubuntu 20.04(focal)</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>deb http://mirrors.aliyun.com/ubuntu/ focal main restricted
deb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted
deb http://mirrors.aliyun.com/ubuntu/ focal universe
deb http://mirrors.aliyun.com/ubuntu/ focal-updates universe
deb http://mirrors.aliyun.com/ubuntu/ focal multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-updates multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted
deb http://mirrors.aliyun.com/ubuntu/ focal-security universe
deb http://mirrors.aliyun.com/ubuntu/ focal-security multiverse


ubuntu <span class="token number">18.04</span><span class="token punctuation">(</span>bionic<span class="token punctuation">)</span> 配置如下

deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h4 id="科大源" tabindex="-1"><a class="header-anchor" href="#科大源" aria-hidden="true">#</a> 科大源</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>deb https://mirrors.ustc.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="网易源" tabindex="-1"><a class="header-anchor" href="#网易源" aria-hidden="true">#</a> 网易源</h4>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>deb http://mirrors.163.com/ubuntu/ wily main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ wily-security main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ wily-updates main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ wily-proposed main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ wily-backports main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ wily main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ wily-security main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ wily-updates main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ wily-proposed main restricted universe multiverse
deb-src http://mirrors.163.com/ubuntu/ wily-backports main restricted universe multiverse
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>选择一个源添加到文件最前面或直接替换掉原文件。保存后运行</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>sudo apt-get update
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="在wsl2下安装docker" tabindex="-1"><a class="header-anchor" href="#在wsl2下安装docker" aria-hidden="true">#</a> 在WSL2下安装Docker</h2>
<p>wsl2已经完整使用了linux内核此种方式与之前在vmware虚拟机安装docker类似，依次执行如下命令：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>$ curl -fsSL https://get.docker.com -o get-docker.sh$ sudo sh get-docker.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>原生linux安装docker方式</strong></p>
<p>因为wsl2已经完整使用了linux内核了，此种方式和先前在linux虚拟机安装docker类似，步骤如下：</p>
<div class="language-powershell ext-powershell line-numbers-mode"><pre v-pre class="language-powershell"><code>curl <span class="token operator">-</span>fsSL https:<span class="token operator">/</span><span class="token operator">/</span>get<span class="token punctuation">.</span>docker<span class="token punctuation">.</span>com <span class="token operator">-</span>o <span class="token function">get-docker</span><span class="token punctuation">.</span>sh
sudo sh <span class="token function">get-docker</span><span class="token punctuation">.</span>sh
sudo service docker <span class="token function">start</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>执行脚本安装过程中，脚本提示“<strong>建议使用Docker Desktop for windows</strong>”，20s内按Ctrl+C会退出安装，所以需要等待20s，此种方式需要访问网络。</p>
<p>最后一个步骤，启动Docker daemon。但是此处有一个问题，WSL2经过测试无法使用systemctl命令（此问题已经解决），因此我们使用service命令启动Docker daemon进程。命令如下所示：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>sudo service docker start
* Starting Docker: docker
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>**注意:**在我安装完毕docker后,docker pull以及run都会出现异常 Error response from daemon: Get https://registry-1.docker.io/v2/library/redis/manifests/latest: remote error: tls: bad record MAC 此时只需要修改docker镜像下载地址为国内镜像即可 必须修改 daemon.json ,docker pull register方式无效!!!
修改daemon.json操作命令如下:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>vim /etc/docker/daemon.json
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">{</span>
	<span class="token string">"registry-mirrors"</span>:<span class="token punctuation">[</span>
        <span class="token string">"https://docker.mirrors.ustc.edu.cn"</span>,
        <span class="token string">"http://hub-mirror.c.163.com"</span>,
        <span class="token string">"http://f1361db2.m.daocloud.io"</span>,
        <span class="token string">"https://ovfftd6p.mirror.aliyuncs.com"</span>,
        <span class="token string">"https://ayyx3zqn.mirror.aliyuncs.com"</span>,
        <span class="token string">"https://registry.docker-cn.com"</span>,
        <span class="token string">"https://dockerhub.azk8s.cn"</span>,
        <span class="token string">"https://reg-mirror.qiniu.com"</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>检查docker安装正常</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 检查dockerd进程启动</span>
<span class="token function">service</span> <span class="token function">docker</span> status
<span class="token function">ps</span> aux<span class="token operator">|</span><span class="token function">grep</span> <span class="token function">docker</span>
<span class="token comment"># 检查拉取镜像等正常</span>
<span class="token function">docker</span> pull busybox
<span class="token function">docker</span> images
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="win10与wsl2子系统互相访问" tabindex="-1"><a class="header-anchor" href="#win10与wsl2子系统互相访问" aria-hidden="true">#</a> Win10与wsl2子系统互相访问</h2>
<p>Win10访问wsl2系统比vm虚拟机是亮点，特别方便，进入CMD或者PowerShell，输入：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd \\wsl$\Ubuntu\
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>可以进入Ubuntu-20.04子系统根目录</p>
<p>或者打开文件资源管理器，在地址栏输入<code>\\wsl$\Ubuntu\</code>，也可以Ubuntu子系统根目录。</p>
<p><img src="https://upload-images.jianshu.io/upload_images/6645072-861e342815516794.png" alt="https://upload-images.jianshu.io/upload_images/6645072-861e342815516794.png" loading="lazy"></p>
<h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ</h2>
<h2 id="systemctl命令无法使用" tabindex="-1"><a class="header-anchor" href="#systemctl命令无法使用" aria-hidden="true">#</a> systemctl命令无法使用</h2>
<p>现象为在命令行执行<code>systemctl</code>命令，报如下错误：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>System has not been booted with systemd as init system <span class="token punctuation">(</span>PID <span class="token number">1</span><span class="token punctuation">)</span>. Can't operate.
Failed to connect to bus: Host is down
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>参考了<a href="https://links.jianshu.com/go?to=https%3A%2F%2Fforum.snapcraft.io%2Ft%2Frunning-snaps-on-wsl2-insiders-only-for-now%2F13033" target="_blank" rel="noopener noreferrer">https://forum.snapcraft.io/t/running-snaps-on-wsl2-insiders-only-for-now/13033<ExternalLinkIcon/></a>之后给出如下解决方案：</p>
<ol>
<li>安装daemonize和fontconfig</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">apt</span> <span class="token function">install</span> -y fontconfig daemonize
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol>
<li>编辑<code>vim /etc/profile</code>脚本，加入如下内容：</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">SYSTEMD_PID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> -ef <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">'/lib/systemd/systemd --system-unit=basic.target$'</span> <span class="token operator">|</span> <span class="token function">grep</span> -v unshare <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{print $2}'</span><span class="token variable">)</span></span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> -z <span class="token string">"<span class="token variable">$SYSTEMD_PID</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
   <span class="token function">sudo</span> /usr/bin/daemonize /usr/bin/unshare --fork --pid --mount-proc /lib/systemd/systemd --system-unit<span class="token operator">=</span>basic.target
   <span class="token assign-left variable">SYSTEMD_PID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> -ef <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">'/lib/systemd/systemd --system-unit=basic.target$'</span> <span class="token operator">|</span> <span class="token function">grep</span> -v unshare <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{print $2}'</span><span class="token variable">)</span></span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> -n <span class="token string">"<span class="token variable">$SYSTEMD_PID</span>"</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$SYSTEMD_PID</span>"</span> <span class="token operator">!=</span> <span class="token string">"1"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">exec</span> <span class="token function">sudo</span> /usr/bin/nsenter -t <span class="token variable">$SYSTEMD_PID</span> -a <span class="token function">su</span> - <span class="token environment constant">$LOGNAME</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ol>
<li>修改<code>vim /etc/sudoers</code>文件，加入如下内容：</li>
</ol>
<div class="language-jsx ext-jsx line-numbers-mode"><pre v-pre class="language-jsx"><code><span class="token operator">%</span>sudo <span class="token constant">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token constant">ALL</span><span class="token punctuation">)</span> <span class="token constant">NOPASSWD</span><span class="token operator">:</span> <span class="token operator">/</span>usr<span class="token operator">/</span>sbin<span class="token operator">/</span>daemonize <span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>unshare <span class="token operator">--</span>fork <span class="token operator">--</span>pid <span class="token operator">--</span>mount<span class="token operator">-</span>proc <span class="token operator">/</span>lib<span class="token operator">/</span>systemd<span class="token operator">/</span>systemd <span class="token operator">--</span>system<span class="token operator">-</span>unit<span class="token operator">=</span>basic<span class="token punctuation">.</span>target
<span class="token operator">%</span>sudo <span class="token constant">ALL</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token constant">ALL</span><span class="token punctuation">)</span> <span class="token constant">NOPASSWD</span><span class="token operator">:</span> <span class="token operator">/</span>usr<span class="token operator">/</span>bin<span class="token operator">/</span>nsenter <span class="token operator">-</span>t <span class="token punctuation">[</span><span class="token number">0</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token operator">*</span> <span class="token operator">-</span>a su <span class="token operator">-</span> <span class="token punctuation">[</span>a<span class="token operator">-</span>zA<span class="token operator">-</span><span class="token constant">Z0</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol>
<li>执行<code>source /etc/profile</code>或者是重新打开terminal，执行<code>systemctl</code>验证是否能够正常操作。</li>
</ol>
<h2 id="vmmem-进程占用过多内存" tabindex="-1"><a class="header-anchor" href="#vmmem-进程占用过多内存" aria-hidden="true">#</a> Vmmem 进程占用过多内存</h2>
<p>我们可以通过WSL的配置文件，限制vmmem进程的内存占用。在%UserProfile%目录创建<code>.wslconfig</code>文件，添加如下内容：</p>
<div class="language-csharp ext-cs line-numbers-mode"><pre v-pre class="language-csharp"><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">wsl2</span></span><span class="token punctuation">]</span>
memory<span class="token operator">=</span>2GB
swap<span class="token operator">=</span><span class="token number">0</span>
localhostForwarding<span class="token operator">=</span><span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>这里限制了vmmem进程最大内存不超过6GB，不使用交换空间。
创建完配置文件后，执行<code>wsl --shutdown</code>关闭WSL，再重新启动即可生效。</p>
<p>参考资料：
<a href="https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fmicrosoft%2FWSL%2Fissues%2F4166" target="_blank" rel="noopener noreferrer">https://github.com/microsoft/WSL/issues/4166<ExternalLinkIcon/></a>
<a href="https://links.jianshu.com/go?to=https%3A%2F%2Fdocs.microsoft.com%2Fen-us%2Fwindows%2Fwsl%2Frelease-notes%23build-18945" target="_blank" rel="noopener noreferrer">https://docs.microsoft.com/en-us/windows/wsl/release-notes#build-18945<ExternalLinkIcon/></a></p>
<h2 id="可选-使用podman取代docker" tabindex="-1"><a class="header-anchor" href="#可选-使用podman取代docker" aria-hidden="true">#</a> （可选）使用Podman取代Docker</h2>
<p>Podman已成为CentOS8官方御用容器管理器，并且Kubernetes1.12已经放弃对Docker的支持。相比Docker，Podman无需守护进程，不强制要求使用root用户来管理容器，具有更好的灵活性和安全性。Podman使用方式和Docker完全相同，兼容Docker的镜像格式。
经本人试验Podman可以完美的在WSL2 Ubuntu中运行。</p>
<p>在WSL2中安装Podman的方法可参考如下链接：<a href="https://links.jianshu.com/go?to=https%3A%2F%2Fwww.redhat.com%2Fsysadmin%2Fpodman-windows-wsl2" target="_blank" rel="noopener noreferrer">https://www.redhat.com/sysadmin/podman-windows-wsl2<ExternalLinkIcon/></a></p>
<p>下面脚本为Podman的安装脚本：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">.</span> /etc/os-release
<span class="token function">sudo</span> <span class="token function">sh</span> -c <span class="token string">"echo 'deb http://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/x<span class="token variable">${NAME}</span>_<span class="token variable">${VERSION_ID}</span>/ /' > /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list"</span>
<span class="token function">wget</span> -nv https://download.opensuse.org/repositories/devel:kubic:libcontainers:stable/x<span class="token variable">${NAME}</span>_<span class="token variable">${VERSION_ID}</span>/Release.key -O Release.key
<span class="token function">sudo</span> apt-key <span class="token function">add</span> - <span class="token operator">&lt;</span> Release.key
<span class="token function">sudo</span> <span class="token function">apt-get</span> update -qq
<span class="token function">sudo</span> <span class="token function">apt-get</span> -qq -y <span class="token function">install</span> <span class="token function">podman</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> -p /etc/containers
<span class="token builtin class-name">echo</span> -e <span class="token string">"[registries.search]<span class="token entity" title="\n">\n</span>registries = ['docker.io', 'quay.io']"</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/containers/registries.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>如果没有其他报错信息，到这里Podman已安装完毕。我们可以执行<code>podman info</code>命令，验证是否安装成功。</p>
<p><strong>官方安装</strong></p>
<p><a href="https://podman.io/getting-started/installation" target="_blank" rel="noopener noreferrer">https://podman.io/getting-started/installation<ExternalLinkIcon/></a></p>
<p>注意：在 Ubuntu 20.10 和更新版本上，我们强烈建议您仅使用来自 Kubic 存储库或官方 Ubuntu 存储库的 Buildah、Podman 和 Skopeo。混合和匹配可能会导致不可预知的情况，包括安装冲突。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">.</span> /etc/os-release
<span class="token builtin class-name">echo</span> <span class="token string">"deb https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_<span class="token variable">${VERSION_ID}</span>/ /"</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/devel:kubic:libcontainers:stable.list
<span class="token function">curl</span> -L <span class="token string">"https://download.opensuse.org/repositories/devel:/kubic:/libcontainers:/stable/xUbuntu_<span class="token variable">${VERSION_ID}</span>/Release.key"</span> <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> -y upgrade
<span class="token function">sudo</span> <span class="token function">apt-get</span> -y <span class="token function">install</span> <span class="token function">podman</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>镜像：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>
<span class="token function">vim</span> /etc/containers/registries.conf

<span class="token punctuation">[</span>registries.search<span class="token punctuation">]</span>
registries <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'i2kldsde.mirror.aliyuncs.com'</span>,<span class="token string">'docker.io'</span><span class="token punctuation">]</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="wsl2-系统占用磁盘空间不释放" tabindex="-1"><a class="header-anchor" href="#wsl2-系统占用磁盘空间不释放" aria-hidden="true">#</a> WSL2 系统占用磁盘空间不释放</h2>
<p>WSL2本质是虚拟机，它使用的是vhdx虚拟磁盘格式。它支持自动扩容，但是并不会自动缩容。</p>
<p>我们可以使用<code>diskpart</code>命令，手工执行缩容操作。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>diskpart
<span class="token comment"># open window Diskpart</span>
<span class="token keyword">select</span> vdisk <span class="token assign-left variable">file</span><span class="token operator">=</span><span class="token string">"D:\WSL\Ubuntu<span class="token entity" title="\e">\e</span>xt4.vhdx"</span>
attach vdisk <span class="token builtin class-name">readonly</span>
compact vdisk
detach vdisk
<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>其中<code>D:\WSL\Ubuntu\ext4.vhdx</code>为WSL2系统虚拟磁盘文件路径。</p>
</template>
