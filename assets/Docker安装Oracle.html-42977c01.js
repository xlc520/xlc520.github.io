import{_ as i,W as l,X as c,Z as a,$ as n,a0 as t,Y as s,C as r}from"./framework-3ab8bde0.js";const d={},o=s(`<h1 id="docker安装oracle" tabindex="-1"><a class="header-anchor" href="#docker安装oracle" aria-hidden="true">#</a> Docker安装Oracle</h1><h2 id="通过docker-安装-oracle11g" tabindex="-1"><a class="header-anchor" href="#通过docker-安装-oracle11g" aria-hidden="true">#</a> 通过Docker 安装 Oracle11g</h2><h3 id="_1-背景" tabindex="-1"><a class="header-anchor" href="#_1-背景" aria-hidden="true">#</a> 1. 背景</h3><p><code>Oracle</code> 作为全球最强大的关系型数据库，应用在各行各业。但是在 <code>Linux</code> 中安装 <code>Oracle</code> 非常麻烦，为了一次装好，也方便将来直接可以导出镜像在各平台移植使用，所以选择用 <code>Docker</code> 安装，并做详细记录，方便今后参考。</p><h3 id="_2-安装" tabindex="-1"><a class="header-anchor" href="#_2-安装" aria-hidden="true">#</a> 2. 安装</h3><h4 id="前期准备" tabindex="-1"><a class="header-anchor" href="#前期准备" aria-hidden="true">#</a> 前期准备</h4><p><strong>Docker安装</strong></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#升级yum</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>安装成功界面</p><figure><img src="https://static.linch.eu.org/blogImage/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA56iL5bqP54y_55qEQ29kZeaXpeW4uA==,size_20,color_FFFFFF,t_70,g_se,x_16.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure><h4 id="_2-1-环境准备" tabindex="-1"><a class="header-anchor" href="#_2-1-环境准备" aria-hidden="true">#</a> 2.1. 环境准备</h4><ul><li>CentOs 7.0</li><li>Docker 环境</li></ul><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>Client: Docker Engine - Community
 Version:           20.10.17
 API version:       1.41
 Go version:        go1.17.11
 Git commit:        100c701
 Built:             Mon Jun  6 23:05:12 2022
 OS/Arch:           linux/amd64
 Context:           default
 Experimental:      true

Server: Docker Engine - Community
 Engine:
  Version:          20.10.17
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.17.11
  Git commit:       a89b842
  Built:            Mon Jun  6 23:03:33 2022
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.6.6
  GitCommit:        10c12954828e7c7c9b6e0ea9b0c02b01407d3ae1
 runc:
  Version:          1.1.2
  GitCommit:        v1.1.2-0-ga916309
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-搜索镜像" tabindex="-1"><a class="header-anchor" href="#_2-2-搜索镜像" aria-hidden="true">#</a> 2.2. 搜索镜像</h4><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>docker search oracle_11g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>Oracle</code> 镜像文件比较大，请检查自己磁盘空间。此处用一个博主上传的镜像，来演示。</p><figure><img src="https://static.linch.eu.org/blogImage/55b32c05eba117fc562fc792bc4f4e48.png" alt="20220726155418" tabindex="0" loading="lazy"><figcaption>20220726155418</figcaption></figure><h4 id="_2-3-拉取镜像" tabindex="-1"><a class="header-anchor" href="#_2-3-拉取镜像" aria-hidden="true">#</a> 2.3. 拉取镜像</h4><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>docker pull registry.cn-hangzhou.aliyuncs.com/helowin/oracle_11g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-4-磁盘挂载" tabindex="-1"><a class="header-anchor" href="#_2-4-磁盘挂载" aria-hidden="true">#</a> 2.4. 磁盘挂载</h4><p>在 <code>CentOs</code> 宿主机构建一个目录用来存储 <code>Oracle</code> 的数据。</p><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>mkdir -p /data/oracle10g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/e2f1c073cd96b5c22c9816a356040be3.png" alt="20220726160152" tabindex="0" loading="lazy"><figcaption>20220726160152</figcaption></figure><h3 id="_3-容器操作" tabindex="-1"><a class="header-anchor" href="#_3-容器操作" aria-hidden="true">#</a> 3. 容器操作</h3><h4 id="_3-1-创建容器" tabindex="-1"><a class="header-anchor" href="#_3-1-创建容器" aria-hidden="true">#</a> 3.1. 创建容器</h4><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>docker run  -itd -p 1521:1521 --name oracle --restart=always --mount source=oracle_vol,target=/home/oracle/app/oracle/oradata registry.aliyuncs.com/helowin/oracle_11g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>备注：此处改为 <code>Shell</code> 脚本，可以重复使用。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> oracle10g<span class="token punctuation">;</span>
<span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">1521</span>:1521 <span class="token parameter variable">-v</span> /data/oracle10g:/data/oracle <span class="token parameter variable">--name</span> oracle10g klwang/oracle10g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-进入容器" tabindex="-1"><a class="header-anchor" href="#_3-2-进入容器" aria-hidden="true">#</a> 3.2. 进入容器</h4><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>docker exec -it oracle bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-3-环境设置" tabindex="-1"><a class="header-anchor" href="#_3-3-环境设置" aria-hidden="true">#</a> 3.3. 环境设置</h4><p>此时 <code>sqlplus</code> 是不可以用的，需要配置一下环境变量。</p><figure><img src="https://static.linch.eu.org/blogImage/9a34b3e6187fe82094f7098c412e6d04.png" alt="20220726163736" tabindex="0" loading="lazy"><figcaption>20220726163736</figcaption></figure><p>切换回到容器中的 <code>root</code> 用户，密码为 <code>helowin</code> 。</p><h4 id="_3-3-1-编辑环境变量" tabindex="-1"><a class="header-anchor" href="#_3-3-1-编辑环境变量" aria-hidden="true">#</a> 3.3.1. 编辑环境变量</h4><p>优化冒泡排序和选择排序zip <img src="https://static.linch.eu.org/blogImage/star.png" alt="img" loading="lazy"></p><p>0星超过10%的资源595KB</p><figure><img src="https://static.linch.eu.org/blogImage/arrowDownWhite.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>添加如下变量。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">ORACLE_HOME</span><span class="token operator">=</span>/home/oracle/app/oracle/product/11.2.0/dbhome_2
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ORACLE_SID</span><span class="token operator">=</span>helowin
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$ORACLEHOME</span>/bin:<span class="token environment constant">PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保存后，将环境变量生效。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-3-2-添加软连接" tabindex="-1"><a class="header-anchor" href="#_3-3-2-添加软连接" aria-hidden="true">#</a> 3.3.2. 添加软连接</h4><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>ln -s $ORACLE_HOME/bin/sqlplus /usr/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-3-3-切换到oracle用户" tabindex="-1"><a class="header-anchor" href="#_3-3-3-切换到oracle用户" aria-hidden="true">#</a> 3.3.3. 切换到oracle用户</h4><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>su - oracle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-4-登录oracle" tabindex="-1"><a class="header-anchor" href="#_3-4-登录oracle" aria-hidden="true">#</a> 3.4. 登录oracle</h4><div class="language-linux line-numbers-mode" data-ext="linux"><pre class="language-linux"><code>sqlplus /nolog   --登录
conn /as sysdba
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/406b808f765627beab8bc6268aa7a23f.png" alt="20220726194234" tabindex="0" loading="lazy"><figcaption>20220726194234</figcaption></figure><h4 id="_3-5-oracle操作" tabindex="-1"><a class="header-anchor" href="#_3-5-oracle操作" aria-hidden="true">#</a> 3.5. Oracle操作</h4><h4 id="_3-5-1-修改sys、system用户密码" tabindex="-1"><a class="header-anchor" href="#_3-5-1-修改sys、system用户密码" aria-hidden="true">#</a> 3.5.1. 修改sys、system用户密码</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">user</span> system identified <span class="token keyword">by</span> system <span class="token punctuation">;</span><span class="token comment">--修改system用户账号密码；</span>
<span class="token keyword">alter</span> <span class="token keyword">user</span> sys identified <span class="token keyword">by</span> sys <span class="token punctuation">;</span><span class="token comment">--修改sys用户账号密码；</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>冒泡排序和选择法排序的源代码 <img src="https://static.linch.eu.org/blogImage/star.png" alt="img" loading="lazy"></p><figure><img src="https://static.linch.eu.org/blogImage/arrowDownWhite.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="_3-5-2-添加和授权用户" tabindex="-1"><a class="header-anchor" href="#_3-5-2-添加和授权用户" aria-hidden="true">#</a> 3.5.2. 添加和授权用户</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">create</span> <span class="token keyword">user</span> test identified <span class="token keyword">by</span> test<span class="token punctuation">;</span> <span class="token comment">-- 创建内部管理员账号密码；</span>
<span class="token keyword">grant</span> <span class="token keyword">connect</span><span class="token punctuation">,</span>resource<span class="token punctuation">,</span>dba <span class="token keyword">to</span> test<span class="token punctuation">;</span> <span class="token comment">--将dba权限授权给内部管理员账号和密码；</span>
<span class="token keyword">ALTER</span> PROFILE <span class="token keyword">DEFAULT</span> <span class="token keyword">LIMIT</span> PASSWORD_LIFE_TIME UNLIMITED<span class="token punctuation">;</span> <span class="token comment">--设置密码永不过期：</span>
<span class="token keyword">alter</span> system <span class="token keyword">set</span> processes<span class="token operator">=</span><span class="token number">1000</span> scope<span class="token operator">=</span>spfile<span class="token punctuation">;</span> <span class="token comment">--修改数据库最大连接数据；</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-5-3-查询" tabindex="-1"><a class="header-anchor" href="#_3-5-3-查询" aria-hidden="true">#</a> 3.5.3. 查询</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">show</span> parameter password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/9be1155ed596594ade6034c40f6aba5e.png" alt="20220726194511" tabindex="0" loading="lazy"><figcaption>20220726194511</figcaption></figure><h4 id="_3-5-4-检查用户" tabindex="-1"><a class="header-anchor" href="#_3-5-4-检查用户" aria-hidden="true">#</a> 3.5.4. 检查用户</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> v$pwfile_users<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/8f47412dc3c4e984f0a9833d6af75204.png" alt="20220726194528" tabindex="0" loading="lazy"><figcaption>20220726194528</figcaption></figure><h4 id="_3-6-重启服务" tabindex="-1"><a class="header-anchor" href="#_3-6-重启服务" aria-hidden="true">#</a> 3.6. 重启服务</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>conn <span class="token operator">/</span><span class="token keyword">as</span> sysdba<span class="token punctuation">;</span><span class="token comment">--保存数据库</span>
<span class="token keyword">shutdown</span> immediate<span class="token punctuation">;</span> <span class="token comment">--关闭数据库</span>
startup<span class="token punctuation">;</span> <span class="token comment">--启动数据库</span>
<span class="token keyword">show</span> <span class="token keyword">user</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/0fc4a051c1a40e4f9bbc034534553497.png" alt="20220726194844" tabindex="0" loading="lazy"><figcaption>20220726194844</figcaption></figure><h3 id="_4-远程登录" tabindex="-1"><a class="header-anchor" href="#_4-远程登录" aria-hidden="true">#</a> 4. 远程登录</h3><ul><li>HOST: $HOST</li><li>POST: 1521</li><li>SID: helowin</li><li>User: test</li><li>PassWord：test</li></ul><figure><img src="https://static.linch.eu.org/blogImage/90628c41e2934c62baf062d8cf60f3ed.png" alt="20220726194951" tabindex="0" loading="lazy"><figcaption>20220726194951</figcaption></figure><h2 id="通过docker-安装oracle12c" tabindex="-1"><a class="header-anchor" href="#通过docker-安装oracle12c" aria-hidden="true">#</a> 通过Docker 安装Oracle12C</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.6&quot;</span>
<span class="token comment"># https://hub.docker.com/r/wangpengcheng</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">oracle12</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> oracle12
    <span class="token key atrule">image</span><span class="token punctuation">:</span> wangpengcheng/oracle12c<span class="token punctuation">-</span>enterprise<span class="token punctuation">:</span>12.2.0.1<span class="token punctuation">-</span>sys
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ORACLE_ALLOW_REMOTE=true
      <span class="token punctuation">-</span> ORACLE_PDB=ORCLPDB1
      <span class="token punctuation">-</span> ORACLE_SID=ORCLCDB
      <span class="token punctuation">-</span> ORACLE_PASSWORD=123456
      <span class="token punctuation">-</span> ORACLE_PWD=123456
      <span class="token punctuation">-</span> ORACLE_MEM=1000
      <span class="token punctuation">-</span> ORACLE_CHARACTERSET=AL32UTF8
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 1523<span class="token punctuation">:</span><span class="token number">1521</span>
      <span class="token punctuation">-</span> 5503<span class="token punctuation">:</span><span class="token number">5500</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /root/oracle/oradata<span class="token punctuation">:</span>/opt/oracle/oradata
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
    <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="通过docker-安装-oracle18c" tabindex="-1"><a class="header-anchor" href="#通过docker-安装-oracle18c" aria-hidden="true">#</a> 通过Docker 安装 Oracle18c</h2><p>1、拉取 oracle18c 镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull registry.cn-hangzhou.aliyuncs.com/zhengqing/oracle18c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>2、运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> oracle18c <span class="token parameter variable">-p</span> <span class="token number">1521</span>:1521 <span class="token parameter variable">-v</span> /IT_zhengqing/soft/db/oracle18c/data:/opt/oracle registry.cn-hangzhou.aliyuncs.com/zhengqing/oracle18c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行之后查看容器日志</p><h2 id="通过docker-安装-oracle19c" tabindex="-1"><a class="header-anchor" href="#通过docker-安装-oracle19c" aria-hidden="true">#</a> 通过Docker 安装 Oracle19c</h2><h3 id="第一种" tabindex="-1"><a class="header-anchor" href="#第一种" aria-hidden="true">#</a> 第一种</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.6&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">oracle19</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> oracle19
    <span class="token key atrule">image</span><span class="token punctuation">:</span> dsinnovators/oracle<span class="token punctuation">-</span>ee<span class="token punctuation">:</span>19.3.0.2
    <span class="token comment">#image: banglamon/oracle193db:19.3.0-ee</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ORACLE_ALLOW_REMOTE=true
      <span class="token punctuation">-</span> ORACLE_PDB=ORCLPDB
      <span class="token punctuation">-</span> ORACLE_SID=ORCLCDB
      <span class="token punctuation">-</span> ORACLE_PASSWORD=12345678
      <span class="token punctuation">-</span> ORACLE_PWD=12345678
      <span class="token punctuation">-</span> ORACLE_EDITION=enterprise
      <span class="token punctuation">-</span> ORACLE_MEM=1024
      <span class="token punctuation">-</span> INIT_SGA_SIZE=1024
      <span class="token punctuation">-</span> INIT_PGA_SIZE=1024
      <span class="token punctuation">-</span> ORACLE_CHARACTERSET=AL32UTF8
      <span class="token punctuation">-</span> TZ=Asia/Shanghai
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 1523<span class="token punctuation">:</span><span class="token number">1521</span>
      <span class="token punctuation">-</span> 5503<span class="token punctuation">:</span><span class="token number">5500</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /root/oracle/oradata<span class="token punctuation">:</span>/opt/oracle/oradata
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped
    <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第二种" tabindex="-1"><a class="header-anchor" href="#第二种" aria-hidden="true">#</a> 第二种</h3><div class="language-sh&#39;# line-numbers-mode" data-ext="sh&#39;#"><pre class="language-sh&#39;#"><code>docker pull registry.cn-hangzhou.aliyuncs.com/zhuyijun/oracle:19c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/2031bd4759e54c4c9dd4249ab2e29eee.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure><h3 id="第二步-创建挂载文件" tabindex="-1"><a class="header-anchor" href="#第二步-创建挂载文件" aria-hidden="true">#</a> 第二步：创建挂载文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建文件</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /root/oracle19/oradata

<span class="token comment"># 授权，不授权会导致后面安装失败</span>
<span class="token function">chmod</span> <span class="token number">777</span> /root/oracle19/oradata
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="第三步-安装oracle" tabindex="-1"><a class="header-anchor" href="#第三步-安装oracle" aria-hidden="true">#</a> 第三步：安装Oracle</h3><p>1、安装oracle，并把配置挂载到本地文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span>  <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">1524</span>:1521 <span class="token parameter variable">-p</span> <span class="token number">5502</span>:5500 <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">ORACLE_SID</span><span class="token operator">=</span>ORCL <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">ORACLE_PDB</span><span class="token operator">=</span>ORCLPDB <span class="token punctuation">\\</span>
<span class="token comment"># 此处是oracle密码</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">ORACLE_PWD</span><span class="token operator">=</span><span class="token number">123456</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">ORACLE_EDITION</span><span class="token operator">=</span>standard <span class="token punctuation">\\</span>
<span class="token parameter variable">-e</span> <span class="token assign-left variable">ORACLE_CHARACTERSET</span><span class="token operator">=</span>AL32UTF8 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /root/oracle19/oradata:/opt/oracle/oradata <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> orcl19 <span class="token punctuation">\\</span>
registry.cn-hangzhou.aliyuncs.com/zhuyijun/oracle:19c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者使用<code>docker-compose.yml</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/oracle19
<span class="token function">vim</span> docker-compose.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>文件内容为：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.6&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">oracle19</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> oracle19
    <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>hangzhou.aliyuncs.com/it<span class="token punctuation">-</span>boy/oracle19c<span class="token punctuation">:</span>latest
    <span class="token comment">#image: registry.cn-hangzhou.aliyuncs.com/zhuyijun/oracle:19c</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ORACLE_ALLOW_REMOTE=true
      <span class="token punctuation">-</span> ORACLE_PDB=ORCLPDB
      <span class="token punctuation">-</span> ORACLE_SID=ORCL
      <span class="token punctuation">-</span> ORACLE_PWD=123456
      <span class="token punctuation">-</span> ORACLE_EDITION=standard
      <span class="token punctuation">-</span> ORACLE_MEM=1000
      <span class="token punctuation">-</span> ORACLE_CHARACTERSET=AL32UTF8
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 1523<span class="token punctuation">:</span><span class="token number">1521</span>
      <span class="token punctuation">-</span> 5503<span class="token punctuation">:</span><span class="token number">5500</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /root/oracle19/oradata<span class="token punctuation">:</span>/opt/oracle/oradata
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up
或者
<span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看oracle是否安装成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看启动日志</span>
<span class="token function">docker</span> logs <span class="token parameter variable">-ft</span> orcl19
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA56iL5bqP54y_55qEQ29kZeaXpeW4uA==,size_20,color_FFFFFF,t_70,g_se,x_16-16607879142541.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure><blockquote><p>注意： 如果安装失败 ,执行以下命令 docker stop orcl19c_03 docker rm orcl19c_03</p></blockquote><h3 id="第四步-连接oracle" tabindex="-1"><a class="header-anchor" href="#第四步-连接oracle" aria-hidden="true">#</a> 第四步：连接Oracle</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> orcl19 /bin/bash

sqlplus / as sysdba

show pdbs<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就可以了</p><figure><img src="https://static.linch.eu.org/blogImage/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA56iL5bqP54y_55qEQ29kZeaXpeW4uA==,size_16,color_FFFFFF,t_70,g_se,x_16.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure>`,102),p={href:"https://localhost:5502/em",target:"_blank",rel:"noopener noreferrer"},u=s(`<figure><img src="https://static.linch.eu.org/blogImage/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA56iL5bqP54y_55qEQ29kZeaXpeW4uA==,size_20,color_FFFFFF,t_70,g_se,x_16-16607879142552.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>username：sys
password：123456
Container Name：ORCLPDB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://static.linch.eu.org/blogImage/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA56iL5bqP54y_55qEQ29kZeaXpeW4uA==,size_20,color_FFFFFF,t_70,g_se,x_16-16607879142553.png" alt="在这里插入图片描述" tabindex="0" loading="lazy"><figcaption>在这里插入图片描述</figcaption></figure><p><strong>注意 ：是https，不是http</strong></p><h2 id="关于oracle12c默认用户名system密码不正确登录不上解决方案" tabindex="-1"><a class="header-anchor" href="#关于oracle12c默认用户名system密码不正确登录不上解决方案" aria-hidden="true">#</a> 关于Oracle12C默认用户名system密码不正确登录不上解决方案</h2><p>解决方案：</p><p>1.使用sysdba账号 登陆后 可以修改其他账号密码</p><p>运行 cmd 按如下输入命令</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>以sys登陆 超级用户（sysdba）

sqlplus <span class="token operator">/</span> <span class="token keyword">as</span> sysdba 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.解除锁定账号</p><p>alter user 用户名 account unlock; --------- 解除锁定(必须带“;”号)</p><p>以system用户名为例，即命令为</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">user</span> system account <span class="token keyword">unlock</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3.为该账户设置新密码</p><p>alter user 用户名 identified by 密码; -------------修改密码（密码加不加双引号均可，必须带“;”号）</p><p>以用户名system密码dhee为例，即命令为</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">user</span> system identified <span class="token keyword">by</span> dhee<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果可以登录任意的一个用户可以通过一下方法来知道当前有哪些用户。 查看当前用户。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">distinct</span> owner <span class="token keyword">from</span> all_objects 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你在安装的时候没有设置密码的话</p><p>oracle有三个默认的用户名和密码</p><p>1.用户名:sys密码:change_on_install</p><p>2.用户名:system密码:manager</p><p>3.用户名:scott密码:tiger</p>`,24);function v(m,b){const e=r("ExternalLinkIcon");return l(),c("div",null,[o,a("p",null,[n("还可以通过访问"),a("a",p,[n("https://localhost:5502/em"),t(e)])]),u])}const g=i(d,[["render",v],["__file","Docker安装Oracle.html.vue"]]);export{g as default};
