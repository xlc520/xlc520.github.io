<template><h1 id="使用docker快速安装oracle" tabindex="-1"><a class="header-anchor" href="#使用docker快速安装oracle" aria-hidden="true">#</a> 使用docker快速安装oracle</h1>
<p>1.拉取镜像:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull registry.cn-hangzhou.aliyuncs.com/helowin/oracle_11g
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>2.创建容器</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run -d -p <span class="token number">1521</span>:1521 --name oracle11g registry.cn-hangzhou.aliyuncs.com/helowin/oracle_11g
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>3.进入镜像配置</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it oracle11g <span class="token function">bash</span>

<span class="token function">su</span> root<span class="token punctuation">;</span>

密码:helowin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>编辑环境变量:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">vi</span> /etc/profile
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ORACLE_HOME</span><span class="token operator">=</span>/home/oracle/app/oracle/product/11.2.0/dbhome_2
<span class="token builtin class-name">export</span> <span class="token assign-left variable">ORACLE_SID</span><span class="token operator">=</span>helowin
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$ORACLE_HOME</span>/bin:<span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>创建软连接</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">ln</span> -s <span class="token variable">$ORACLE_HOME</span>/bin/sqlplus /usr/bin

<span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>切换到oracle 用户</p>
<p><code>su - oracle</code></p>
<p>登录sqlplus并修改sys、system用户密码</p>
<ul>
<li>登录sqlplus</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>sqlplus <span class="token operator">/</span>nolog

conn <span class="token operator">/</span><span class="token keyword">as</span> sysdba
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>接着更改用户密码</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">user</span> system identified <span class="token keyword">by</span> system<span class="token punctuation">;</span>

<span class="token keyword">alter</span> <span class="token keyword">user</span> sys identified <span class="token keyword">by</span> sys<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul>
<li>设置密码永不过期</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">ALTER</span> PROFILE <span class="token keyword">DEFAULT</span> <span class="token keyword">LIMIT</span> PASSWORD_LIFE_TIME UNLIMITED<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul>
<li>
<p>scott用户的开启</p>
<p>SCOTT 是 ORACLE 内部的一个实例用户，下面有 emp、dept 等实例表，这些表和表间的关系演示了关系型数据库的一些基本原理。</p>
</li>
</ul>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">alter</span> <span class="token keyword">user</span> scott account <span class="token keyword">unlock</span><span class="token punctuation">;</span>
<span class="token keyword">alter</span> <span class="token keyword">user</span> scott identified <span class="token keyword">by</span> abc<span class="token punctuation">;</span>
<span class="token keyword">commit</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>4.重启容器后就可以直接用了</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> restart oracle11g
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>现在可以用<code>system</code>用户连接,密码:<code>system</code></p>
</template>
