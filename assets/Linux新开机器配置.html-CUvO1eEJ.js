import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as l,c as o,d as n,e,b as a,a as t}from"./app-CHLzVell.js";const r={},u=t(`<h1 id="linux-新开机器配置" tabindex="-1"><a class="header-anchor" href="#linux-新开机器配置"><span>Linux 新开机器配置</span></a></h1><h2 id="_1-更换-yum-apt-源" tabindex="-1"><a class="header-anchor" href="#_1-更换-yum-apt-源"><span>1.更换 yum/apt 源</span></a></h2><blockquote><p><strong>通知：CentOS 8 操作系统版本结束了生命周期（EOL），Linux 社区已不再维护该操作系统版本。建议您切换到 Anolis 或 Alinux。如果您的业务过渡期仍需要使用 CentOS 8 系统中的一些安装包，请根据下文切换 CentOS 8 的源。</strong></p></blockquote><h3 id="centos" tabindex="-1"><a class="header-anchor" href="#centos"><span>CentOS</span></a></h3><h4 id="_1-备份" tabindex="-1"><a class="header-anchor" href="#_1-备份"><span>1. 备份</span></a></h4><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-下载新的-centos-base-repo-到-etc-yum-repos-d" tabindex="-1"><a class="header-anchor" href="#_2-下载新的-centos-base-repo-到-etc-yum-repos-d"><span>2. 下载新的 CentOS-Base.repo 到 /etc/yum.repos.d/</span></a></h4><h5 id="centos8-centos8-官方源已下线-建议切换-centos-vault-源" tabindex="-1"><a class="header-anchor" href="#centos8-centos8-官方源已下线-建议切换-centos-vault-源"><span>centos8（centos8 官方源已下线，建议切换 centos-vault 源）</span></a></h5><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-vault-8.5.2111.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>CentOS 7</strong></p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或者</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>curl -o /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-运行-yum-makecache-生成缓存" tabindex="-1"><a class="header-anchor" href="#_3-运行-yum-makecache-生成缓存"><span>3. 运行 <code>yum makecache</code> 生成缓存</span></a></h4><h3 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu"><span>Ubuntu</span></a></h3><p>因为 Linux 子系统的 apt 源使用的是官方源，需要连接到国外的服务器。所以安装一些软件时下载会很慢，我们可以改用国内的镜像 apt 源。国内的镜像源主要有：</p><p>可以直接使用 vim 对 /etc/apt/sources.list 文件进行修改。</p><p>先进行一下备份。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mv</span> /etc/apt/sources.list /etc/apt/sources.list.bak
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/apt/sources.list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="阿里源-ubuntu-20-04-focal" tabindex="-1"><a class="header-anchor" href="#阿里源-ubuntu-20-04-focal"><span>阿里源 ubuntu 20.04(focal)</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释</span>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行<code>apt-get update</code>更新索引</p><h4 id="华为云源-ubuntu-20-04-focal" tabindex="-1"><a class="header-anchor" href="#华为云源-ubuntu-20-04-focal"><span>华为云源 ubuntu 20.04(focal)</span></a></h4><p>1、备份配置文件：</p><p>sudo cp -a /etc/apt/sources.list /etc/apt/sources.list.bak</p>`,29),d=n("strong",null,"sources.list",-1),p={href:"http://archive.ubuntu.com**%E5%92%8C**http://security.ubuntu.com**%E6%9B%BF%E6%8D%A2%E6%88%90**http://repo.huaweicloud.com**%EF%BC%8C%E5%8F%AF%E4%BB%A5%E5%8F%82%E8%80%83%E5%A6%82%E4%B8%8B%E5%91%BD%E4%BB%A4%EF%BC%9A",target:"_blank",rel:"noopener noreferrer"},m={href:"http://repo.huaweicloud.com@g",target:"_blank",rel:"noopener noreferrer"},v={href:"http://repo.huaweicloud.com@g",target:"_blank",rel:"noopener noreferrer"},b=t(`<p>3、执行<code>apt-get update</code>更新索引</p><p><strong>附: 华为云源 ubuntu 20.04(focal)</strong>：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># deb cdrom:[Ubuntu-Server 20.04 LTS _Focal Fossa_ - Release amd64 (20200423)]/ focal main restricted</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-docker-安装" tabindex="-1"><a class="header-anchor" href="#_2-docker-安装"><span><strong>2.Docker 安装</strong></span></a></h2><p>一键安装命令：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>curl -sSL https://get.daocloud.io/docker | sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#升级yum</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>卸载 Docker</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>sudo apt-get remove docker docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>卸载 Docker 后,/var/lib/docker/目录下会保留原 Docker 的镜像,网络,存储卷等文件. 如果需要全新安装 Docker,需要删除/var/lib/docker/目录</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>rm -fr /var/lib/docker/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11);function h(k,f){const s=c("ExternalLinkIcon");return l(),o("div",null,[u,n("p",null,[e("2、修改"),d,e(" 文件，将**"),n("a",p,[e("http://archive.ubuntu.com**和**http://security.ubuntu.com**替换成**http://repo.huaweicloud.com**，可以参考如下命令："),a(s)])]),n("p",null,[e('sudo sed -i "s@http://.*archive.ubuntu.com@'),n("a",m,[e("http://repo.huaweicloud.com@g"),a(s)]),e('" /etc/apt/sources.list sudo sed -i "s@http://.*security.ubuntu.com@'),n("a",v,[e("http://repo.huaweicloud.com@g"),a(s)]),e('" /etc/apt/sources.list')]),b])}const x=i(r,[["render",h],["__file","Linux新开机器配置.html.vue"]]),_=JSON.parse('{"path":"/linux/Linux%E6%96%B0%E5%BC%80%E6%9C%BA%E5%99%A8%E9%85%8D%E7%BD%AE.html","title":"Linux新开机器配置","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"Linux新开机器配置","excerpt":null,"description":"Linux 新开机器配置 1.更换 yum/apt 源 通知：CentOS 8 操作系统版本结束了生命周期（EOL），Linux 社区已不再维护该操作系统版本。建议您切换到 Anolis 或 Alinux。如果您的业务过渡期仍需要使用 CentOS 8 系统中的一些安装包，请根据下文切换 CentOS 8 的源。 CentOS 1. 备份 2. 下载新...","date":"2022-09-28T00:00:00.000Z","category":"Linux","tag":"Linux","article":true,"timeline":true,"icon":"linux","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/linux/Linux%E6%96%B0%E5%BC%80%E6%9C%BA%E5%99%A8%E9%85%8D%E7%BD%AE.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"Linux新开机器配置"}],["meta",{"property":"og:description","content":"Linux 新开机器配置 1.更换 yum/apt 源 通知：CentOS 8 操作系统版本结束了生命周期（EOL），Linux 社区已不再维护该操作系统版本。建议您切换到 Anolis 或 Alinux。如果您的业务过渡期仍需要使用 CentOS 8 系统中的一些安装包，请根据下文切换 CentOS 8 的源。 CentOS 1. 备份 2. 下载新..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2022-09-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux新开机器配置\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-09-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"1.更换 yum/apt 源","slug":"_1-更换-yum-apt-源","link":"#_1-更换-yum-apt-源","children":[{"level":3,"title":"CentOS","slug":"centos","link":"#centos","children":[]},{"level":3,"title":"Ubuntu","slug":"ubuntu","link":"#ubuntu","children":[]}]},{"level":2,"title":"2.Docker 安装","slug":"_2-docker-安装","link":"#_2-docker-安装","children":[]}],"git":{"createdTime":1664505626000,"updatedTime":1714224756000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":2},{"name":"xlc","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":3.69,"words":1106},"filePathRelative":"linux/Linux新开机器配置.md","localizedDate":"2022年9月28日","autoDesc":true}');export{x as comp,_ as data};
