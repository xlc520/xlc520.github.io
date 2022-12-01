import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as r,a as n,b as e,e as a,d as t,r as o}from"./app.8f077891.js";const l={},u=t(`<h1 id="linux新开机器配置" tabindex="-1"><a class="header-anchor" href="#linux新开机器配置" aria-hidden="true">#</a> Linux新开机器配置</h1><h2 id="_1-更换yum-apt源" tabindex="-1"><a class="header-anchor" href="#_1-更换yum-apt源" aria-hidden="true">#</a> 1.更换yum/apt源</h2><blockquote><p><strong>通知：CentOS 8操作系统版本结束了生命周期（EOL），Linux社区已不再维护该操作系统版本。建议您切换到Anolis或Alinux。如果您的业务过渡期仍需要使用CentOS 8系统中的一些安装包，请根据下文切换CentOS 8的源。</strong></p></blockquote><h3 id="centos" tabindex="-1"><a class="header-anchor" href="#centos" aria-hidden="true">#</a> CentOS</h3><h4 id="_1-备份" tabindex="-1"><a class="header-anchor" href="#_1-备份" aria-hidden="true">#</a> 1. 备份</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-下载新的-centos-base-repo-到-etc-yum-repos-d" tabindex="-1"><a class="header-anchor" href="#_2-下载新的-centos-base-repo-到-etc-yum-repos-d" aria-hidden="true">#</a> 2. 下载新的 CentOS-Base.repo 到 /etc/yum.repos.d/</h4><h5 id="centos8-centos8官方源已下线-建议切换centos-vault源" tabindex="-1"><a class="header-anchor" href="#centos8-centos8官方源已下线-建议切换centos-vault源" aria-hidden="true">#</a> centos8（centos8官方源已下线，建议切换centos-vault源）</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>CentOS 7</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-运行-yum-makecache-生成缓存" tabindex="-1"><a class="header-anchor" href="#_3-运行-yum-makecache-生成缓存" aria-hidden="true">#</a> 3. 运行 <code>yum makecache</code> 生成缓存</h4><h3 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h3><p>因为Linux子系统的apt源使用的是官方源，需要连接到国外的服务器。所以安装一些软件时下载会很慢，我们可以改用国内的镜像apt源。国内的镜像源主要有：</p><p>可以直接使用 vim 对 /etc/apt/sources.list文件进行修改。</p><p>先进行一下备份。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mv</span> /etc/apt/sources.list /etc/apt/sources.list.bak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/apt/sources.list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="阿里源ubuntu-20-04-focal" tabindex="-1"><a class="header-anchor" href="#阿里源ubuntu-20-04-focal" aria-hidden="true">#</a> 阿里源ubuntu 20.04(focal)</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释</span>
deb https://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
<span class="token comment"># deb-src https://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse</span>
deb https://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
<span class="token comment"># deb-src https://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse</span>
deb https://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
<span class="token comment"># deb-src https://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse</span>
<span class="token comment"># deb https://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse</span>
<span class="token comment"># deb-src https://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse</span>
deb https://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
<span class="token comment"># deb-src https://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行<code>apt-get update</code>更新索引</p><h4 id="华为云源ubuntu-20-04-focal" tabindex="-1"><a class="header-anchor" href="#华为云源ubuntu-20-04-focal" aria-hidden="true">#</a> 华为云源ubuntu 20.04(focal)</h4><p>1、备份配置文件：</p><p>sudo cp -a /etc/apt/sources.list /etc/apt/sources.list.bak</p>`,29),d=n("strong",null,"sources.list",-1),m={href:"http://archive.ubuntu.com",target:"_blank",rel:"noopener noreferrer"},p={href:"http://security.ubuntu.com",target:"_blank",rel:"noopener noreferrer"},v={href:"http://repo.huaweicloud.com",target:"_blank",rel:"noopener noreferrer"},b={href:"http://.*archive.ubuntu.com@http",target:"_blank",rel:"noopener noreferrer"},h={href:"http://.*security.ubuntu.com@http",target:"_blank",rel:"noopener noreferrer"},k=t(`<p>3、执行<code>apt-get update</code>更新索引</p><p><strong>附: 华为云源ubuntu 20.04(focal)</strong>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># deb cdrom:[Ubuntu-Server 20.04 LTS _Focal Fossa_ - Release amd64 (20200423)]/ focal main restricted</span>

<span class="token comment">#deb cdrom:[Ubuntu-Server 20.04 LTS _Focal Fossa_ - Release amd64 (20200423)]/ focal main restricted</span>

<span class="token comment"># See http://help.ubuntu.com/community/UpgradeNotes for how to upgrade to</span>
<span class="token comment"># newer versions of the distribution.</span>
deb http://repo.huaweicloud.com/ubuntu/ focal main restricted
<span class="token comment"># deb-src http://repo.huaweicloud.com/ubuntu/ focal main restricted</span>

<span class="token comment">## Major bug fix updates produced after the final release of the</span>
<span class="token comment">## distribution.</span>
deb http://repo.huaweicloud.com/ubuntu/ focal-updates main restricted
<span class="token comment"># deb-src http://repo.huaweicloud.com/ubuntu/ focal-updates main restricted</span>

<span class="token comment">## N.B. software from this repository is ENTIRELY UNSUPPORTED by the Ubuntu</span>
<span class="token comment">## team. Also, please note that software in universe WILL NOT receive any</span>
<span class="token comment">## review or updates from the Ubuntu security team.</span>
deb http://repo.huaweicloud.com/ubuntu/ focal universe
<span class="token comment"># deb-src http://repo.huaweicloud.com/ubuntu/ focal universe</span>
deb http://repo.huaweicloud.com/ubuntu/ focal-updates universe
<span class="token comment"># deb-src http://repo.huaweicloud.com/ubuntu/ focal-updates universe</span>

<span class="token comment">## N.B. software from this repository is ENTIRELY UNSUPPORTED by the Ubuntu</span>
<span class="token comment">## team, and may not be under a free licence. Please satisfy yourself as to</span>
<span class="token comment">## your rights to use the software. Also, please note that software in</span>
<span class="token comment">## multiverse WILL NOT receive any review or updates from the Ubuntu</span>
<span class="token comment">## security team.</span>
deb http://repo.huaweicloud.com/ubuntu/ focal multiverse
<span class="token comment"># deb-src http://repo.huaweicloud.com/ubuntu/ focal multiverse</span>
deb http://repo.huaweicloud.com/ubuntu/ focal-updates multiverse
<span class="token comment"># deb-src http://repo.huaweicloud.com/ubuntu/ focal-updates multiverse</span>

<span class="token comment">## N.B. software from this repository may not have been tested as</span>
<span class="token comment">## extensively as that contained in the main release, although it includes</span>
<span class="token comment">## newer versions of some applications which may provide useful features.</span>
<span class="token comment">## Also, please note that software in backports WILL NOT receive any review</span>
<span class="token comment">## or updates from the Ubuntu security team.</span>
deb http://repo.huaweicloud.com/ubuntu/ focal-backports main restricted universe multiverse
<span class="token comment"># deb-src http://repo.huaweicloud.com/ubuntu/ focal-backports main restricted universe multiverse</span>

<span class="token comment">## Uncomment the following two lines to add software from Canonical&#39;s</span>
<span class="token comment">## &#39;partner&#39; repository.</span>
<span class="token comment">## This software is not part of Ubuntu, but is offered by Canonical and the</span>
<span class="token comment">## respective vendors as a service to Ubuntu users.</span>
<span class="token comment"># deb http://archive.canonical.com/ubuntu focal partner</span>
<span class="token comment"># deb-src http://archive.canonical.com/ubuntu focal partner</span>

deb http://repo.huaweicloud.com/ubuntu focal-security main restricted
<span class="token comment"># deb-src http://repo.huaweicloud.com/ubuntu focal-security main restricted</span>
deb http://repo.huaweicloud.com/ubuntu focal-security universe
<span class="token comment"># deb-src http://repo.huaweicloud.com/ubuntu focal-security universe</span>
deb http://repo.huaweicloud.com/ubuntu focal-security multiverse
<span class="token comment"># deb-src http://repo.huaweicloud.com/ubuntu focal-security multiverse</span>

<span class="token comment"># This system was installed using small removable media</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-docker安装" tabindex="-1"><a class="header-anchor" href="#_2-docker安装" aria-hidden="true">#</a> <strong>2.Docker安装</strong></h2><p>一键安装命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -sSL https://get.daocloud.io/docker | sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#升级yum</span>
<span class="token function">sudo</span> yum update  

<span class="token comment">#卸载旧版本</span>
<span class="token function">sudo</span> yum remove <span class="token function">docker</span>  docker-common docker-selinux docker-engine  

<span class="token comment">#安装依赖  </span>
<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils device-mapper-persistent-data lvm2  

<span class="token comment">#设置源  </span>
<span class="token function">sudo</span> yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo   

<span class="token comment"># 更新yum缓存</span>
yum makecache fast

<span class="token comment"># 安装Docker</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce

<span class="token comment"># 启动</span>
systemctl start <span class="token function">docker</span>

<span class="token comment"># 查看是否启动成功</span>
<span class="token function">docker</span> info

<span class="token comment"># 开机自启</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>

<span class="token comment"># Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the d</span>
systemctl restart <span class="token function">docker</span>  <span class="token comment">#重启一下就行</span>

<span class="token comment"># 在下载镜像前，需要设置一下国内源，用来提高下载速度</span>
<span class="token function">sudo</span> <span class="token function">vim</span> /etc/docker/daemon.json

<span class="token comment"># 配置</span>
<span class="token punctuation">{</span>  
    <span class="token string">&quot;registry-mirrors&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&quot;https://d7grpode.mirror.aliyuncs.com&quot;</span><span class="token punctuation">]</span>  
<span class="token punctuation">}</span>

<span class="token comment"># 重启</span>
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>卸载Docker</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt-get remove docker docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>卸载Docker后,/var/lib/docker/目录下会保留原Docker的镜像,网络,存储卷等文件. 如果需要全新安装Docker,需要删除/var/lib/docker/目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rm -fr /var/lib/docker/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11);function f(g,y){const s=o("ExternalLinkIcon");return c(),r("div",null,[u,n("p",null,[e("2、修改"),d,e("文件，将"),n("strong",null,[n("a",m,[e("http://archive.ubuntu.com"),a(s)])]),e("和"),n("strong",null,[n("a",p,[e("http://security.ubuntu.com"),a(s)])]),e("替换成"),n("strong",null,[n("a",v,[e("http://repo.huaweicloud.com"),a(s)])]),e("，可以参考如下命令：")]),n("p",null,[e('sudo sed -i "s@'),n("a",b,[e("http://.*archive.ubuntu.com@http"),a(s)]),e('😕/repo.huaweicloud.com@g" /etc/apt/sources.list sudo sed -i "s@'),n("a",h,[e("http://.*security.ubuntu.com@http"),a(s)]),e('😕/repo.huaweicloud.com@g" /etc/apt/sources.list')]),k])}const w=i(l,[["render",f],["__file","Linux新开机器配置.html.vue"]]);export{w as default};
