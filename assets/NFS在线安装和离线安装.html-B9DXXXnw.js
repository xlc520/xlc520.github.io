import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as e}from"./app-BkZy1zYI.js";const i={},l=e(`<h1 id="nfs-在线安装和离线安装" tabindex="-1"><a class="header-anchor" href="#nfs-在线安装和离线安装"><span>NFS 在线安装和离线安装</span></a></h1><h2 id="_1-在线安装" tabindex="-1"><a class="header-anchor" href="#_1-在线安装"><span>1. 在线安装</span></a></h2><h4 id="第一步-在文件主服务器上安装-nfs-kernel-server" tabindex="-1"><a class="header-anchor" href="#第一步-在文件主服务器上安装-nfs-kernel-server"><span>第一步：在文件主服务器上安装 <code>nfs-kernel-server</code></span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># rpcbind nfs-kernel-server nfs-common net-tools</span>
<span class="token comment"># 1. 安装 rpcbind， nfs 依赖 rpc 进行相互通信</span>
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> rpcbind
<span class="token comment"># 2. 安装 nfs-kernel-server</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> rpcbind nfs-kernel-server nfs-common net-tools
<span class="token comment"># 3. 新建共享文件主目录</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> /home/nfs
<span class="token comment"># 4. 对此文件夹进行授权</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">777</span> <span class="token parameter variable">-R</span> /home/nfs
<span class="token comment"># 5. 启动 nfs 服务</span>
<span class="token function">sudo</span> systemctl restart nfs-kernel-server
<span class="token comment"># 6. 编辑 nfs 服务器得配置文件，设置允许共享的连接和权限（由于没有授权操作，限制最好在内网环境下使用）</span>
<span class="token function">sudo</span> <span class="token function">vi</span> /etc/exports
<span class="token comment"># 附加限制ip和相关授权操作</span>
/home/nfs *<span class="token punctuation">(</span>rw,sync,no_root_squash<span class="token punctuation">)</span>
<span class="token comment"># 或者</span>
/home/nfs <span class="token number">192.168</span>.1.3<span class="token punctuation">(</span>insecure,rw,sync,no_root_squash<span class="token punctuation">)</span>  <span class="token number">192.168</span>.1.4<span class="token punctuation">(</span>insecure,rw,sync,no_root_squash<span class="token punctuation">)</span>
<span class="token comment"># 7. 重新启动 nfs 服务</span>
<span class="token function">sudo</span> systemctl restart nfs-kernel-server
<span class="token comment"># 8. 开机启动 </span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> nfs-kernel-server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第二步-在文件共享节点上安装-nfs-common" tabindex="-1"><a class="header-anchor" href="#第二步-在文件共享节点上安装-nfs-common"><span>第二步：在文件共享节点上安装 <code>nfs-common</code></span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 1. 安装 rpcbind， nfs 依赖 rpc 进行相互通信</span>
<span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> rpcbind
<span class="token comment"># 2. 安装 nfs-common</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> nfs-common
<span class="token comment"># 3. 新建共享文件主目录 子节点的目录路径最好和主服务器上路径保持一致，避免后期开发混淆</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> /home/nfs
<span class="token comment"># 4. 对此文件夹进行授权</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">777</span> <span class="token parameter variable">-R</span> /home/nfs
<span class="token comment"># 5. 启动 nfs-common 服务</span>
<span class="token function">sudo</span> systemctl start nfs-common
<span class="token comment"># 6. 将主服务的共享文件夹挂载到指定目录上</span>
<span class="token function">sudo</span> <span class="token function">mount</span> <span class="token parameter variable">-t</span> nfs <span class="token number">10.1</span>.2.10:/home/nfs /home/nfs <span class="token parameter variable">-o</span> nolock
<span class="token function">mount</span> <span class="token parameter variable">-t</span> nfs <span class="token number">10.1</span>.2.10:/home/nfs /home/nfs <span class="token parameter variable">-o</span> nolock
<span class="token function">mount</span> <span class="token parameter variable">-t</span> nfs <span class="token number">10.1</span>.2.10:/home/nfs /home/nfs <span class="token parameter variable">-o</span> nolock,soft,intr,timeo<span class="token operator">=</span><span class="token number">10</span>
<span class="token comment"># 取消挂载</span>
<span class="token function">sudo</span> <span class="token function">umount</span> /home/nfs
<span class="token comment"># 7. 开机启动 </span>
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> nfs-common
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="第三步-基本验证" tabindex="-1"><a class="header-anchor" href="#第三步-基本验证"><span>第三步：基本验证</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 基本的增删文件校验，此处省略</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;6666&quot;</span><span class="token operator">&gt;</span>a.txt
<span class="token builtin class-name">echo</span> <span class="token string">&quot;5555&quot;</span><span class="token operator">&gt;</span>b.txt
<span class="token function">rm</span> a.txt

<span class="token function">mkdir</span> <span class="token function">docker</span>
<span class="token function">rm</span> <span class="token parameter variable">-rf</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-内网环境下离线安装" tabindex="-1"><a class="header-anchor" href="#_2-内网环境下离线安装"><span>2. 内网环境下离线安装</span></a></h3><h4 id="第一步-在外网环境下打包安装包和依赖" tabindex="-1"><a class="header-anchor" href="#第一步-在外网环境下打包安装包和依赖"><span>第一步：在外网环境下打包安装包和依赖</span></a></h4><h5 id="nfs-kernel-server-服务" tabindex="-1"><a class="header-anchor" href="#nfs-kernel-server-服务"><span><code>nfs-kernel-server</code> 服务</span></a></h5><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># rpcbind nfs-kernel-server nfs-common net-tools</span>
<span class="token comment"># 1. 查找 nfs-kernel-server 的所有安装包，可以选定安装需要的版本</span>
<span class="token function">sudo</span> <span class="token function">apt-cache</span> search nfs-kernel-server nfs-common
<span class="token comment"># 2. 将 nfs-kernel-server 的安装包和依赖下载到本地，执行完成之后 安装包和依赖会下载到 /var/cache/apt/archives 目录下</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token parameter variable">-d</span> <span class="token function">install</span> <span class="token parameter variable">-y</span> rpcbind nfs-kernel-server nfs-common net-tools
<span class="token comment"># 3. 新建一个文件夹</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> /home/nfs-kernel-server/
<span class="token comment"># 4. 将下载的deb包拷贝到上述新建的文件夹下</span>
<span class="token function">sudo</span> <span class="token function">cp</span> <span class="token parameter variable">-r</span> /var/cache/apt/archives/ /home/nfs-kernel-server/
<span class="token comment"># 5. 修改文件夹的权限，可读可写可执行</span>
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">777</span> <span class="token parameter variable">-R</span> /home/nfs-kernel-server/
<span class="token comment"># 6. 建立deb包的依赖关系</span>
<span class="token function">sudo</span> dpkg-scanpackages /home/nfs-kernel-server/ /dev/null <span class="token operator">|</span><span class="token function">gzip</span> <span class="token operator">&gt;</span>/home/Packages.gz
<span class="token comment">#  如果出现错误：sudo: dpkg-scanpackages: command not found 则需要安装dpkg-dev工具：</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> dpkg-dev
<span class="token comment"># 7. 将生成的nfs-common.gz包复制到和deb同目录下</span>
<span class="token function">sudo</span> <span class="token function">cp</span> /home/Packages.gz /home/nfs-kernel-server/archives/Packages.gz
<span class="token comment"># 8. 将/home/nfs-kernel-server/ 目录进行打包</span>
<span class="token builtin class-name">cd</span> /home <span class="token comment">#进入父目录下再执行打包文件</span>
<span class="token function">sudo</span> <span class="token function">tar</span> cvzf nfs-kernel-server.tar.gz nfs-kernel-server/
<span class="token comment"># 9. 将压缩文件拷贝到离线服务器 /home 目录下上并解压缩</span>
<span class="token builtin class-name">cd</span> /home 
<span class="token function">sudo</span> <span class="token function">tar</span> <span class="token parameter variable">-xvf</span> nfs-kernel-server.tar.gz <span class="token comment"># 解压缩</span>
<span class="token comment"># 10. 将安装包所在的路径添加到系统源source.list 中</span>
<span class="token function">sudo</span> <span class="token function">cp</span> /etc/apt/sources.list /etc/apt/sources.list.back <span class="token comment">#备份</span>
<span class="token function">vim</span> /etc/apt/sources.list
<span class="token comment"># 添加以下两行至文件末尾：</span>
deb file:///home/nfs-kernel-server archives
deb-src file:///home/nfs-kernel-server archives

<span class="token comment"># 11. 更新源</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token comment"># 12. 离线安装 </span>
<span class="token function">sudo</span> <span class="token function">apt-get</span>  <span class="token function">install</span> XXX
<span class="token comment"># 后面就按照正常的在线安装步骤进行就行了</span>

<span class="token comment"># 安装完成后还原 sources.list 文件</span>
<span class="token function">sudo</span> <span class="token function">cp</span> /etc/apt/sources.list.back /etc/apt/sources.list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>nfs-common</code> 服务：</p><p>离线打包步骤和 <code>nfs-kernel-server</code>相同，把上面的 <code>nfs-kernel-server</code> 替换为 <code>nfs-common</code> 直接执行</p><h2 id="nfs-漏洞-showmount-e-信息泄露" tabindex="-1"><a class="header-anchor" href="#nfs-漏洞-showmount-e-信息泄露"><span>NFS 漏洞：showmount -e 信息泄露</span></a></h2><blockquote><p>实现允许指定主机通过 mount 到 nfs 服务器上，阻止其它主机通过 shutdown -e 方式，泄露 NFS 共享目录结构信息。</p></blockquote><h4 id="_1-编辑-etc-hosts-allow" tabindex="-1"><a class="header-anchor" href="#_1-编辑-etc-hosts-allow"><span>1. 编辑 /etc/hosts.allow</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vi</span> /etc/hosts.allow
<span class="token comment"># 附加允许访问的 mount 和 rpc 地址</span>
mountd:192.168.1.3,192.168.1.4
rpcbind:192.168.1.3,192.168.1.4:allow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-编辑-etc-hosts-deny" tabindex="-1"><a class="header-anchor" href="#_2-编辑-etc-hosts-deny"><span>2. 编辑 /etc/hosts.deny</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">vi</span> /etc/hosts.deny
<span class="token comment"># 添加拒绝mount和 rpc的访问</span>
mountd:all
rpcbind:ALL:deny
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-验证访问控制是否生效" tabindex="-1"><a class="header-anchor" href="#_3-验证访问控制是否生效"><span>3. 验证访问控制是否生效</span></a></h4><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 上述配置无需重启即可生效</span>
<span class="token comment"># 1。 本机验证</span>
showmount <span class="token parameter variable">-a</span>
clnt_create: RPC: Unknown <span class="token function">host</span>
<span class="token comment"># 2. 远程主机访问验证</span>
showmount <span class="token parameter variable">-e</span> <span class="token number">192.168</span>.1.2
clnt_create: RPC: Port mapper failure - Authentication error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开机自动挂载" tabindex="-1"><a class="header-anchor" href="#开机自动挂载"><span>开机自动挂载</span></a></h2><p>如果按本文上面的部分配置好，NFS 即部署好了，但是如果你重启客户端系统，发现不能随机器一起挂载，需要再次手动操作挂载，这样操作比较麻烦，因此我们需要设置开机自动挂载。我们不要把挂载项写到/etc/fstab 文件中，因为开机时先挂载本机磁盘再启动网络，而 NFS 是需要网络启动后才能挂载的，所以我们把挂载命令写入到/etc/rc.d/rc.local 文件中即可。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/rc.d/rc.local
在文件最后添加一行：
<span class="token comment">#mount -t nfs 10.10.33.156:/data /data -o nolock,nfsvers=3,vers=3</span>
<span class="token function">mount</span> <span class="token parameter variable">-t</span> nfs <span class="token number">10.1</span>.2.11:/home/nfs /home/nfs <span class="token parameter variable">-o</span> nolock <span class="token parameter variable">-o</span> soft <span class="token parameter variable">-o</span> intr <span class="token parameter variable">-o</span> <span class="token assign-left variable">timeo</span><span class="token operator">=</span><span class="token number">10</span>
<span class="token function">mount</span> <span class="token parameter variable">-t</span> nfs <span class="token number">10.1</span>.2.10:/home/nfs /home/nfs <span class="token parameter variable">-o</span> nolock,soft,intr,timeo<span class="token operator">=</span><span class="token number">10</span>

然后需要对rc.local 赋权

<span class="token function">chmod</span> a+x /etc/rc.local
<span class="token function">chmod</span> a+x /etc/rc.d/rc.local

保存并重启机器

测试验证
查看挂载结果，在客户端输入 
<span class="token function">df</span> <span class="token parameter variable">-h</span>


或者
编辑文件系统表/etc/fstab

<span class="token number">192.168</span>.101.250:/public /mnt/nfs nfs ro,soft,intr <span class="token number">0</span> <span class="token number">0</span>

soft：挂载出错时，发出警告。intr：挂载失败时，立即中断挂载。否则系统将无法启动
先卸载掉已经挂载的，使用命令：umount /mnt/nfs
使用命令mount <span class="token parameter variable">-a</span> ，挂挂载成功
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>
<span class="token function">mount</span> <span class="token parameter variable">-t</span> nfs <span class="token parameter variable">-o</span> soft,,timeo<span class="token operator">=</span><span class="token number">10</span> <span class="token number">192.168</span>.0.187:/data/lutixia /mnt/nfs

soft    软挂载，当超过我们配置的时间，则会返回错误，不会一直阻塞，推荐这种挂载方式，默认是硬挂载，服务端挂载会一直阻塞。
timeo   指定客户端去连接服务端的时长（单位为 <span class="token number">0.1</span> 秒<span class="token punctuation">)</span>,不要设置太长了。

把挂载信息写入到 /etc/fstab 文件中：

<span class="token function">sudo</span> <span class="token function">vim</span> /etc/fstab
<span class="token number">10.1</span>.2.10:/home/nfs /home/nfs nfs auto,nofail,noatime,nolock,intr,tcp,actimeo<span class="token operator">=</span><span class="token number">1800</span> <span class="token number">0</span> <span class="token number">0</span>

<span class="token number">192.168</span>.3.1:/data  /nfs nfs auto,nofail,noatime,nolock,intr,tcp,actimeo<span class="token operator">=</span><span class="token number">1800</span> <span class="token number">0</span> <span class="token number">0</span>
<span class="token comment"># 或者</span>
<span class="token number">192.168</span>.3.1:/data  /nfs nfs defaults <span class="token number">0</span> <span class="token number">0</span>

<span class="token number">10.10</span>.201.155:/nfsboot /usr/local/nfs nfs auto,nofail,noatime,nolock,intr,tcp,actimeo<span class="token operator">=</span><span class="token number">1800</span> <span class="token number">0</span> <span class="token number">0</span>

说明：
- server:/share：NFS服务器的IP和共享的路径。
- /mnt/nfs：本地的挂载点。
- nfs：这是文件系统类型，指示要使用NFS协议进行挂载。
- auto：这表示在启动时自动挂载文件系统。
- nofail：这表示如果无法挂载，系统将继续启动，而不会阻止它。
- noatime：这将禁用对访问时间的写入，这有助于提高文件系统的性能。
- nolock：这将禁用对锁定管理的使用，这对于某些NFS服务器可能有用。
- intr：这表示允许中断挂起的NFS操作，这可以提高操作可靠性。
- tcp：这表示使用TCP协议进行NFS通信，这通常是默认设置。
- <span class="token assign-left variable">actimeo</span><span class="token operator">=</span><span class="token number">1800</span>：这表示NFS客户端将在1800秒内缓存文件属性，以提高性能。
- <span class="token number">0</span> <span class="token number">0</span>：这是用于fsck检查和备份常规操作的选项，0表示无需检查。

<span class="token number">2</span>.刷新配置
<span class="token function">mount</span> <span class="token parameter variable">-a</span>
<span class="token number">3</span>.从启动服务器测试
<span class="token function">reboot</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2><p>没有同步，可能<code>rpcbind</code> 出问题，重启</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 重启，避免不会同步</span>
/etc/init.d/rpcbind restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,29),t=[l];function c(o,r){return s(),a("div",null,t)}const m=n(i,[["render",c],["__file","NFS在线安装和离线安装.html.vue"]]),u=JSON.parse('{"path":"/linux/NFS%E5%9C%A8%E7%BA%BF%E5%AE%89%E8%A3%85%E5%92%8C%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85.html","title":"NFS在线安装和离线安装","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"NFS在线安装和离线安装","excerpt":null,"description":"NFS 在线安装和离线安装 1. 在线安装 第一步：在文件主服务器上安装 nfs-kernel-server 第二步：在文件共享节点上安装 nfs-common 第三步：基本验证 2. 内网环境下离线安装 第一步：在外网环境下打包安装包和依赖 nfs-kernel-server 服务 nfs-common 服务： 离线打包步骤和 nfs-kernel-...","date":"2023-03-27T00:00:00.000Z","category":"Linux","tag":"Linux","article":true,"timeline":true,"icon":"linux","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/linux/NFS%E5%9C%A8%E7%BA%BF%E5%AE%89%E8%A3%85%E5%92%8C%E7%A6%BB%E7%BA%BF%E5%AE%89%E8%A3%85.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"NFS在线安装和离线安装"}],["meta",{"property":"og:description","content":"NFS 在线安装和离线安装 1. 在线安装 第一步：在文件主服务器上安装 nfs-kernel-server 第二步：在文件共享节点上安装 nfs-common 第三步：基本验证 2. 内网环境下离线安装 第一步：在外网环境下打包安装包和依赖 nfs-kernel-server 服务 nfs-common 服务： 离线打包步骤和 nfs-kernel-..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2023-03-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"NFS在线安装和离线安装\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"1. 在线安装","slug":"_1-在线安装","link":"#_1-在线安装","children":[{"level":3,"title":"2. 内网环境下离线安装","slug":"_2-内网环境下离线安装","link":"#_2-内网环境下离线安装","children":[]}]},{"level":2,"title":"NFS 漏洞：showmount -e 信息泄露","slug":"nfs-漏洞-showmount-e-信息泄露","link":"#nfs-漏洞-showmount-e-信息泄露","children":[]},{"level":2,"title":"开机自动挂载","slug":"开机自动挂载","link":"#开机自动挂载","children":[]},{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]}],"git":{"createdTime":1680872326000,"updatedTime":1714224756000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":1},{"name":"xlc520","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":6.05,"words":1814},"filePathRelative":"linux/NFS在线安装和离线安装.md","localizedDate":"2023年3月27日","autoDesc":true}');export{m as comp,u as data};
