<template><h1 id="实用-shell-脚本" tabindex="-1"><a class="header-anchor" href="#实用-shell-脚本" aria-hidden="true">#</a> 实用 shell 脚本</h1>
<h2 id="_1、服务器系统配置初始化" tabindex="-1"><a class="header-anchor" href="#_1、服务器系统配置初始化" aria-hidden="true">#</a> 1、服务器系统配置初始化</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#/bin/bash</span>
<span class="token comment"># 安装系统性能分析工具及其他</span>
yum <span class="token function">install</span> gcc <span class="token function">make</span> autoconf <span class="token function">vim</span> sysstat net-tools iostat iftop iotp <span class="token function">wget</span> lrzsz <span class="token function">lsof</span> <span class="token function">unzip</span> openssh-clients net-tool <span class="token function">vim</span> ntpdate -y
<span class="token comment"># 设置时区并同步时间</span>
<span class="token function">ln</span> -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
<span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">crontab</span> -l <span class="token operator">|</span><span class="token function">grep</span> ntpdate <span class="token operator">&amp;></span>/dev/null <span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token punctuation">(</span>echo <span class="token string">"* 1 * * * ntpdate time.windows.com >/dev/null 2>&amp;1"</span><span class="token punctuation">;</span><span class="token function">crontab</span> -l<span class="token punctuation">)</span> <span class="token operator">|</span><span class="token function">crontab</span> 
<span class="token keyword">fi</span>
 
<span class="token comment"># 禁用selinux</span>
<span class="token function">sed</span> -i <span class="token string">'/SELINUX/{s/permissive/disabled/}'</span> /etc/selinux/config
 
<span class="token comment"># 关闭防火墙</span>
<span class="token keyword">if</span> <span class="token function">egrep</span> <span class="token string">"7.[0-9]"</span> /etc/redhat-release <span class="token operator">&amp;></span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
    systemctl stop firewalld
    systemctl disable firewalld
<span class="token keyword">elif</span> <span class="token function">egrep</span> <span class="token string">"6.[0-9]"</span> /etc/redhat-release <span class="token operator">&amp;></span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">service</span> iptables stop
    <span class="token function">chkconfig</span> iptables off
<span class="token keyword">fi</span>
 
<span class="token comment"># 历史命令显示操作时间</span>
<span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">grep</span> HISTTIMEFORMAT /etc/bashrc<span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">'export HISTTIMEFORMAT="%Y-%m-%d %H:%M:%S  `whoami` "'</span> <span class="token operator">>></span> /etc/bashrc
<span class="token keyword">fi</span>
 
<span class="token comment"># SSH超时时间</span>
<span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">grep</span> <span class="token string">"TMOUT=600"</span> /etc/profile <span class="token operator">&amp;></span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"export TMOUT=600"</span> <span class="token operator">>></span> /etc/profile
<span class="token keyword">fi</span>
 
<span class="token comment"># 禁止root远程登录 切记给系统添加普通用户，给su到root的权限</span>
<span class="token function">sed</span> -i <span class="token string">'s/#PermitRootLogin yes/PermitRootLogin no/'</span> /etc/ssh/sshd_config
 
<span class="token comment"># 禁止定时任务向发送邮件</span>
<span class="token function">sed</span> -i <span class="token string">'s/^MAILTO=root/MAILTO=""/'</span> /etc/crontab 
 
<span class="token comment"># 设置最大打开文件数</span>
<span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">grep</span> <span class="token string">"* soft nofile 65535"</span> /etc/security/limits.conf <span class="token operator">&amp;></span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
<span class="token function">cat</span> <span class="token operator">>></span> /etc/security/limits.conf <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
    * soft nofile 65535
    * hard nofile 65535
EOF</span>
<span class="token keyword">fi</span>
 
<span class="token comment"># 系统内核优化</span>
<span class="token function">cat</span> <span class="token operator">>></span> /etc/sysctl.conf <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_max_tw_buckets = 20480
net.ipv4.tcp_max_syn_backlog = 20480
net.core.netdev_max_backlog = 262144
net.ipv4.tcp_fin_timeout = 20  
EOF</span>
 
<span class="token comment"># 减少SWAP使用</span>
<span class="token builtin class-name">echo</span> <span class="token string">"0"</span> <span class="token operator">></span> /proc/sys/vm/swappiness
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><h2 id="_2、批量创建多个用户并设置密码" tabindex="-1"><a class="header-anchor" href="#_2、批量创建多个用户并设置密码" aria-hidden="true">#</a> 2、批量创建多个用户并设置密码</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">USER_LIST</span><span class="token operator">=</span><span class="token variable">$@</span>
<span class="token assign-left variable">USER_FILE</span><span class="token operator">=</span>./user.info
<span class="token keyword">for</span> <span class="token for-or-select variable">USER</span> <span class="token keyword">in</span> <span class="token variable">$USER_LIST</span><span class="token punctuation">;</span><span class="token keyword">do</span>
 <span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">id</span> <span class="token environment constant">$USER</span> <span class="token operator">&amp;></span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token assign-left variable">PASS</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token environment constant">$RANDOM</span> <span class="token operator">|</span>md5sum <span class="token operator">|</span><span class="token function">cut</span> -c <span class="token number">1</span>-8<span class="token variable">)</span></span>
  <span class="token function">useradd</span> <span class="token environment constant">$USER</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$PASS</span> <span class="token operator">|</span> <span class="token function">passwd</span> --stdin <span class="token environment constant">$USER</span> <span class="token operator">&amp;></span>/dev/null
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token environment constant">$USER</span>   <span class="token variable">$PASS</span>"</span> <span class="token operator">>></span> <span class="token variable">$USER_FILE</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token environment constant">$USER</span> User create successful."</span>
 <span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token environment constant">$USER</span> User already exists!"</span>
 <span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_3、一键查看服务器利用率" tabindex="-1"><a class="header-anchor" href="#_3、一键查看服务器利用率" aria-hidden="true">#</a> 3、一键查看服务器利用率</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token keyword">function</span> <span class="token function-name function">cpu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 
 <span class="token assign-left variable">util</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">vmstat</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{if(NR==3)print $13+$14}'</span><span class="token variable">)</span></span>
 <span class="token assign-left variable">iowait</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">vmstat</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">'{if(NR==3)print $16}'</span><span class="token variable">)</span></span>
 <span class="token builtin class-name">echo</span> <span class="token string">"CPU -使用率：<span class="token variable">${util}</span>% ,等待磁盘IO相应使用率：<span class="token variable">${iowait}</span>:<span class="token variable">${iowait}</span>%"</span>
 
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function-name function">memory</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 
 <span class="token assign-left variable">total</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">free</span> -m <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'{if(NR==2)printf "%.1f",$2/1024}'</span><span class="token variable">`</span></span>
    <span class="token assign-left variable">used</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">free</span> -m <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'{if(NR==2) printf "%.1f",($2-$NF)/1024}'</span><span class="token variable">`</span></span>
    <span class="token assign-left variable">available</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">free</span> -m <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'{if(NR==2) printf "%.1f",$NF/1024}'</span><span class="token variable">`</span></span>
    <span class="token builtin class-name">echo</span> <span class="token string">"内存 - 总大小: <span class="token variable">${total}</span>G , 使用: <span class="token variable">${used}</span>G , 剩余: <span class="token variable">${available}</span>G"</span>
<span class="token punctuation">}</span>
<span class="token function-name function">disk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 
 <span class="token assign-left variable">fs</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">df</span> -h <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'/^\/dev/{print $1}'</span><span class="token variable">)</span></span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">p</span> <span class="token keyword">in</span> <span class="token variable">$fs</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
        <span class="token assign-left variable">mounted</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">df</span> -h <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'$1=="'</span>$p<span class="token string">'"{print $NF}'</span><span class="token variable">)</span></span>
        <span class="token assign-left variable">size</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">df</span> -h <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'$1=="'</span>$p<span class="token string">'"{print $2}'</span><span class="token variable">)</span></span>
        <span class="token assign-left variable">used</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">df</span> -h <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'$1=="'</span>$p<span class="token string">'"{print $3}'</span><span class="token variable">)</span></span>
        <span class="token assign-left variable">used_percent</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">df</span> -h <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'$1=="'</span>$p<span class="token string">'"{print $5}'</span><span class="token variable">)</span></span>
        <span class="token builtin class-name">echo</span> <span class="token string">"硬盘 - 挂载点: <span class="token variable">$mounted</span> , 总大小: <span class="token variable">$size</span> , 使用: <span class="token variable">$used</span> , 使用率: <span class="token variable">$used_percent</span>"</span>
    <span class="token keyword">done</span>
 
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function-name function">tcp_status</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token assign-left variable">summary</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>ss -antp <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'{status[$1]++}END{for(i in status) printf i":"status[i]" "}'</span><span class="token variable">)</span></span>
    <span class="token builtin class-name">echo</span> <span class="token string">"TCP连接状态 - <span class="token variable">$summary</span>"</span>
<span class="token punctuation">}</span>
cpu
memory
disk
tcp_status
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="_4、找出占用cpu-内存过高的进程" tabindex="-1"><a class="header-anchor" href="#_4、找出占用cpu-内存过高的进程" aria-hidden="true">#</a> 4、找出占用CPU 内存过高的进程</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token string">"-------------------CUP占用前10排序--------------------------------"</span>
<span class="token function">ps</span> -eo user,pid,pcpu,pmem,args --sort<span class="token operator">=</span>-pcpu  <span class="token operator">|</span><span class="token function">head</span> -n <span class="token number">10</span>
<span class="token builtin class-name">echo</span> <span class="token string">"-------------------内存占用前10排序--------------------------------"</span>
<span class="token function">ps</span> -eo user,pid,pcpu,pmem,args --sort<span class="token operator">=</span>-pmem  <span class="token operator">|</span><span class="token function">head</span> -n <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_5、查看网卡的实时流量" tabindex="-1"><a class="header-anchor" href="#_5、查看网卡的实时流量" aria-hidden="true">#</a> 5、查看网卡的实时流量</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">eth0</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token builtin class-name">echo</span>  -e    <span class="token string">"流量进入--流量传出    "</span>
<span class="token keyword">while</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
 <span class="token assign-left variable">old_in</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /proc/net/dev <span class="token operator">|</span><span class="token function">grep</span> $eth0 <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'{print $2}'</span><span class="token variable">)</span></span>
 <span class="token assign-left variable">old_out</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /proc/net/dev <span class="token operator">|</span><span class="token function">grep</span> $eth0 <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'{print $10}'</span><span class="token variable">)</span></span>
 <span class="token function">sleep</span> <span class="token number">1</span>
 <span class="token assign-left variable">new_in</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /proc/net/dev <span class="token operator">|</span><span class="token function">grep</span> $eth0 <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'{print $2}'</span><span class="token variable">)</span></span>
 <span class="token assign-left variable">new_out</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /proc/net/dev <span class="token operator">|</span><span class="token function">grep</span> $eth0 <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'{print $10}'</span><span class="token variable">)</span></span>
 <span class="token assign-left variable">in</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">printf</span> <span class="token string">"%.1f%s"</span> "<span class="token punctuation">$((</span><span class="token punctuation">(</span>$new_in-$old_in<span class="token punctuation">)</span>/1024<span class="token variable">)</span></span><span class="token punctuation">)</span><span class="token string">" "</span>KB/s<span class="token string">")
 out=<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">printf</span> <span class="token string">"%.1f%s"</span> "<span class="token punctuation">$((</span><span class="token punctuation">(</span>$new_out-$old_out<span class="token punctuation">)</span>/1024<span class="token variable">)</span></span>)"</span> <span class="token string">"KB/s"</span><span class="token punctuation">)</span>
 <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$in</span> <span class="token variable">$out</span>"</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="_6、监控多台服务器磁盘利用率脚本" tabindex="-1"><a class="header-anchor" href="#_6、监控多台服务器磁盘利用率脚本" aria-hidden="true">#</a> 6、监控多台服务器磁盘利用率脚本</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">HOST_INFO</span><span class="token operator">=</span>host.info
<span class="token keyword">for</span> <span class="token for-or-select variable">IP</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> <span class="token string">'/^[^#]/{print $1}'</span> $HOST_INFO<span class="token variable">)</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
 <span class="token comment">#取出用户名和端口</span>
    <span class="token assign-left variable"><span class="token environment constant">USER</span></span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> -v <span class="token assign-left variable">ip</span><span class="token operator">=</span>$IP <span class="token string">'ip==$1{print $2}'</span> $HOST_INFO<span class="token variable">)</span></span>
    <span class="token assign-left variable">PORT</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> -v <span class="token assign-left variable">ip</span><span class="token operator">=</span>$IP <span class="token string">'ip==$1{print $3}'</span> $HOST_INFO<span class="token variable">)</span></span>
 <span class="token comment">#创建临时文件，保存信息</span>
    <span class="token assign-left variable">TMP_FILE</span><span class="token operator">=</span>/tmp/disk.tmp
 <span class="token comment">#通过公钥登录获取主机磁盘信息</span>
    <span class="token function">ssh</span> -p <span class="token variable">$PORT</span> <span class="token environment constant">$USER</span>@<span class="token variable">$IP</span> <span class="token string">'df -h'</span> <span class="token operator">></span> <span class="token variable">$TMP_FILE</span>
 <span class="token comment">#分析磁盘占用空间</span>
    <span class="token assign-left variable">USE_RATE_LIST</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> <span class="token string">'BEGIN{OFS="="}/^\/dev/{print $NF,int($5)}'</span> $TMP_FILE<span class="token variable">)</span></span>
 <span class="token comment">#循环磁盘列表，进行判断</span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">USE_RATE</span> <span class="token keyword">in</span> <span class="token variable">$USE_RATE_LIST</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token comment">#取出等号（=）右边的值 挂载点名称</span>
        <span class="token assign-left variable">PART_NAME</span><span class="token operator">=</span><span class="token variable">${USE_RATE<span class="token operator">%</span>=*}</span>  
  <span class="token comment">#取出等号（=）左边的值  磁盘利用率</span>
        <span class="token assign-left variable">USE_RATE</span><span class="token operator">=</span><span class="token variable">${USE_RATE<span class="token operator">#</span>*=}</span>
  <span class="token comment">#进行判断</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$USE_RATE</span> -ge <span class="token number">80</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token string">"Warning: <span class="token variable">$PART_NAME</span> Partition usage <span class="token variable">$USE_RATE</span>%!"</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"服务器<span class="token variable">$IP</span>的磁盘空间占用过高，请及时处理"</span> <span class="token operator">|</span> mail -s <span class="token string">"空间不足警告"</span> 你的qq@qq.com
  <span class="token keyword">else</span>
   <span class="token builtin class-name">echo</span> <span class="token string">"服务器<span class="token variable">$IP</span>的<span class="token variable">$PART_NAME</span>目录空间良好"</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">done</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="_7、批量检测网站是否异常并邮件通知" tabindex="-1"><a class="header-anchor" href="#_7、批量检测网站是否异常并邮件通知" aria-hidden="true">#</a> 7、批量检测网站是否异常并邮件通知</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash  </span>
<span class="token assign-left variable">URL_LIST</span><span class="token operator">=</span><span class="token string">"www.baidu.com www.ctnrs.com www.der-matech.net.cn www.der-matech.com.cn www.der-matech.cn www.der-matech.top www.der-matech.org"</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">URL</span> <span class="token keyword">in</span> <span class="token variable">$URL_LIST</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token assign-left variable">FAIL_COUNT</span><span class="token operator">=</span><span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">3</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
        <span class="token assign-left variable">HTTP_CODE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> -o /dev/null --connect-timeout <span class="token number">3</span> -s -w <span class="token string">"%{http_code}"</span> $URL<span class="token variable">)</span></span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$HTTP_CODE</span> -eq <span class="token number">200</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$URL</span> OK"</span>
            <span class="token builtin class-name">break</span>
        <span class="token keyword">else</span>
            <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$URL</span> retry <span class="token variable">$FAIL_COUNT</span>"</span>
            <span class="token builtin class-name">let</span> FAIL_COUNT++
        <span class="token keyword">fi</span>
    <span class="token keyword">done</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$FAIL_COUNT</span> -eq <span class="token number">3</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"Warning: <span class="token variable">$URL</span> Access failure!"</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"网站<span class="token variable">$URL</span>坏掉，请及时处理"</span> <span class="token operator">|</span> mail -s <span class="token string">"<span class="token variable">$URL</span>网站高危"</span> <span class="token number">1794748404</span>@qq.com
    <span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="_8、批量主机远程执行命令脚本" tabindex="-1"><a class="header-anchor" href="#_8、批量主机远程执行命令脚本" aria-hidden="true">#</a> 8、批量主机远程执行命令脚本</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">COMMAND</span><span class="token operator">=</span><span class="token variable">$*</span>
<span class="token assign-left variable">HOST_INFO</span><span class="token operator">=</span>host.info
<span class="token keyword">for</span> <span class="token for-or-select variable">IP</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> <span class="token string">'/^[^#]/{print $1}'</span> $HOST_INFO<span class="token variable">)</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token assign-left variable"><span class="token environment constant">USER</span></span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> -v <span class="token assign-left variable">ip</span><span class="token operator">=</span>$IP <span class="token string">'ip==$1{print $2}'</span> $HOST_INFO<span class="token variable">)</span></span>
    <span class="token assign-left variable">PORT</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> -v <span class="token assign-left variable">ip</span><span class="token operator">=</span>$IP <span class="token string">'ip==$1{print $3}'</span> $HOST_INFO<span class="token variable">)</span></span>
    <span class="token assign-left variable">PASS</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> -v <span class="token assign-left variable">ip</span><span class="token operator">=</span>$IP <span class="token string">'ip==$1{print $4}'</span> $HOST_INFO<span class="token variable">)</span></span>
    <span class="token function">expect</span> -c <span class="token string">"
       spawn ssh -p <span class="token variable">$PORT</span> <span class="token environment constant">$USER</span>@<span class="token variable">$IP</span>
       expect {
          <span class="token entity" title="\&quot;">\"</span>(yes/no)<span class="token entity" title="\&quot;">\"</span> {send <span class="token entity" title="\&quot;">\"</span>yes<span class="token entity" title="\r">\r</span><span class="token entity" title="\&quot;">\"</span>; exp_continue}
          <span class="token entity" title="\&quot;">\"</span>password:<span class="token entity" title="\&quot;">\"</span> {send <span class="token entity" title="\&quot;">\"</span><span class="token variable">$PASS</span><span class="token entity" title="\r">\r</span><span class="token entity" title="\&quot;">\"</span>; exp_continue}
          <span class="token entity" title="\&quot;">\"</span><span class="token environment constant">$USER</span>@*<span class="token entity" title="\&quot;">\"</span> {send <span class="token entity" title="\&quot;">\"</span><span class="token variable">$COMMAND</span><span class="token entity" title="\r">\r</span> exit<span class="token entity" title="\r">\r</span><span class="token entity" title="\&quot;">\"</span>; exp_continue}
       }
    "</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"-------------------"</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="_9、一键部署lnmp网站平台脚本" tabindex="-1"><a class="header-anchor" href="#_9、一键部署lnmp网站平台脚本" aria-hidden="true">#</a> 9、一键部署LNMP网站平台脚本</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">NGINX_V</span><span class="token operator">=</span><span class="token number">1.15</span>.6
<span class="token assign-left variable">PHP_V</span><span class="token operator">=</span><span class="token number">5.6</span>.36
<span class="token assign-left variable">TMP_DIR</span><span class="token operator">=</span>/tmp
 
<span class="token assign-left variable">INSTALL_DIR</span><span class="token operator">=</span>/usr/local
 
<span class="token assign-left variable">PWD_C</span><span class="token operator">=</span><span class="token environment constant">$PWD</span>
 
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\t">\t</span>Menu<span class="token entity" title="\n">\n</span>"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"1. Install Nginx"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"2. Install PHP"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"3. Install MySQL"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"4. Deploy LNMP"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"9. Quit"</span>
 
<span class="token keyword">function</span> <span class="token function-name function">command_status_check</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> -ne <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$1</span>
  <span class="token builtin class-name">exit</span>
 <span class="token keyword">fi</span> 
<span class="token punctuation">}</span>
 
<span class="token keyword">function</span> <span class="token function-name function">install_nginx</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">cd</span> <span class="token variable">$TMP_DIR</span>
    yum <span class="token function">install</span> -y gcc gcc-c++ <span class="token function">make</span> openssl-devel pcre-devel <span class="token function">wget</span>
    <span class="token function">wget</span> http://nginx.org/download/nginx-<span class="token variable">${NGINX_V}</span>.tar.gz
    <span class="token function">tar</span> zxf nginx-<span class="token variable">${NGINX_V}</span>.tar.gz
    <span class="token builtin class-name">cd</span> nginx-<span class="token variable">${NGINX_V}</span>
    ./configure --prefix<span class="token operator">=</span><span class="token variable">$INSTALL_DIR</span>/nginx <span class="token punctuation">\</span>
    --with-http_ssl_module <span class="token punctuation">\</span>
    --with-http_stub_status_module <span class="token punctuation">\</span>
    --with-stream
    command_status_check <span class="token string">"Nginx - 平台环境检查失败！"</span>
    <span class="token function">make</span> -j <span class="token number">4</span> 
    command_status_check <span class="token string">"Nginx - 编译失败！"</span>
    <span class="token function">make</span> <span class="token function">install</span>
    command_status_check <span class="token string">"Nginx - 安装失败！"</span>
    <span class="token function">mkdir</span> -p <span class="token variable">$INSTALL_DIR</span>/nginx/conf/vhost
    <span class="token builtin class-name">alias</span> <span class="token assign-left variable">cp</span><span class="token operator">=</span>cp <span class="token punctuation">;</span> <span class="token function">cp</span> -rf <span class="token variable">$PWD_C</span>/nginx.conf <span class="token variable">$INSTALL_DIR</span>/nginx/conf
    <span class="token function">rm</span> -rf <span class="token variable">$INSTALL_DIR</span>/nginx/html/*
    <span class="token builtin class-name">echo</span> <span class="token string">"ok"</span> <span class="token operator">></span> <span class="token variable">$INSTALL_DIR</span>/nginx/html/status.html
    <span class="token builtin class-name">echo</span> <span class="token string">'&lt;?php echo "ok"?>'</span> <span class="token operator">></span> <span class="token variable">$INSTALL_DIR</span>/nginx/html/status.php
    <span class="token variable">$INSTALL_DIR</span>/nginx/sbin/nginx
    command_status_check <span class="token string">"Nginx - 启动失败！"</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">function</span> <span class="token function-name function">install_php</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token builtin class-name">cd</span> <span class="token variable">$TMP_DIR</span>
    yum <span class="token function">install</span> -y gcc gcc-c++ <span class="token function">make</span> gd-devel libxml2-devel <span class="token punctuation">\</span>
        libcurl-devel libjpeg-devel libpng-devel openssl-devel <span class="token punctuation">\</span>
        libmcrypt-devel libxslt-devel libtidy-devel
    <span class="token function">wget</span> http://docs.php.net/distributions/php-<span class="token variable">${PHP_V}</span>.tar.gz
    <span class="token function">tar</span> zxf php-<span class="token variable">${PHP_V}</span>.tar.gz
    <span class="token builtin class-name">cd</span> php-<span class="token variable">${PHP_V}</span>
    ./configure --prefix<span class="token operator">=</span><span class="token variable">$INSTALL_DIR</span>/php <span class="token punctuation">\</span>
    --with-config-file-path<span class="token operator">=</span><span class="token variable">$INSTALL_DIR</span>/php/etc <span class="token punctuation">\</span>
    --enable-fpm --enable-opcache <span class="token punctuation">\</span>
    --with-mysql --with-mysqli --with-pdo-mysql <span class="token punctuation">\</span>
    --with-openssl --with-zlib --with-curl --with-gd <span class="token punctuation">\</span>
    --with-jpeg-dir --with-png-dir --with-freetype-dir <span class="token punctuation">\</span>
    --enable-mbstring --enable-hash
    command_status_check <span class="token string">"PHP - 平台环境检查失败！"</span>
    <span class="token function">make</span> -j <span class="token number">4</span> 
    command_status_check <span class="token string">"PHP - 编译失败！"</span>
    <span class="token function">make</span> <span class="token function">install</span>
    command_status_check <span class="token string">"PHP - 安装失败！"</span>
    <span class="token function">cp</span> php.ini-production <span class="token variable">$INSTALL_DIR</span>/php/etc/php.ini
    <span class="token function">cp</span> sapi/fpm/php-fpm.conf <span class="token variable">$INSTALL_DIR</span>/php/etc/php-fpm.conf
    <span class="token function">cp</span> sapi/fpm/init.d.php-fpm /etc/init.d/php-fpm
    <span class="token function">chmod</span> +x /etc/init.d/php-fpm
    /etc/init.d/php-fpm start
    command_status_check <span class="token string">"PHP - 启动失败！"</span>
<span class="token punctuation">}</span>
 
<span class="token builtin class-name">read</span> -p <span class="token string">"请输入编号："</span> number
<span class="token keyword">case</span> <span class="token variable">$number</span> <span class="token keyword">in</span>
    <span class="token number">1</span><span class="token punctuation">)</span>
        install_nginx<span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token number">2</span><span class="token punctuation">)</span>
        install_php<span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token number">3</span><span class="token punctuation">)</span>
        install_mysql<span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token number">4</span><span class="token punctuation">)</span>
        install_nginx
        install_php
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token number">9</span><span class="token punctuation">)</span>
        <span class="token builtin class-name">exit</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br></div></div><h2 id="_10、监控mysql主从同步状态是否异常脚本" tabindex="-1"><a class="header-anchor" href="#_10、监控mysql主从同步状态是否异常脚本" aria-hidden="true">#</a> 10、监控MySQL主从同步状态是否异常脚本</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash  </span>
<span class="token assign-left variable">HOST</span><span class="token operator">=</span>localhost
<span class="token assign-left variable"><span class="token environment constant">USER</span></span><span class="token operator">=</span>root
<span class="token assign-left variable">PASSWD</span><span class="token operator">=</span><span class="token number">123</span>.com
<span class="token assign-left variable">IO_SQL_STATUS</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mysql -h$HOST -u<span class="token environment constant">$USER</span> -p$PASSWD -e <span class="token string">'show slave status\G'</span> <span class="token operator"><span class="token file-descriptor important">2</span>></span>/dev/null <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'/Slave_.*_Running:/{print $1$2}'</span><span class="token variable">)</span></span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">$IO_SQL_STATUS</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token assign-left variable">THREAD_STATUS_NAME</span><span class="token operator">=</span><span class="token variable">${i<span class="token operator">%</span><span class="token operator">:</span>*}</span>
    <span class="token assign-left variable">THREAD_STATUS</span><span class="token operator">=</span><span class="token variable">${i<span class="token operator">#</span>*<span class="token operator">:</span>}</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$THREAD_STATUS</span>"</span> <span class="token operator">!=</span> <span class="token string">"Yes"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"Error: MySQL Master-Slave <span class="token variable">$THREAD_STATUS_NAME</span> status is <span class="token variable">$THREAD_STATUS</span>!"</span> <span class="token operator">|</span>mail -s <span class="token string">"Master-Slave Staus"</span> xxx@163.com
    <span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="_11、mysql数据库备份脚本" tabindex="-1"><a class="header-anchor" href="#_11、mysql数据库备份脚本" aria-hidden="true">#</a> 11、MySql数据库备份脚本</h2>
<h6 id="分库备份" tabindex="-1"><a class="header-anchor" href="#分库备份" aria-hidden="true">#</a> 分库备份</h6>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>mysqldump -uroot -pxxx -B A <span class="token operator">></span> A.sql
<span class="token comment">#!/bin/bash</span>
<span class="token assign-left variable">DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%F_%H-%M-%S<span class="token variable">)</span></span>
<span class="token assign-left variable">HOST</span><span class="token operator">=</span>localhost
<span class="token assign-left variable"><span class="token environment constant">USER</span></span><span class="token operator">=</span>backup
<span class="token assign-left variable">PASS</span><span class="token operator">=</span><span class="token number">123</span>.com
<span class="token assign-left variable">BACKUP_DIR</span><span class="token operator">=</span>/data/db_backup
<span class="token assign-left variable">DB_LIST</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mysql -h$HOST -u<span class="token environment constant">$USER</span> -p$PASS -s -e <span class="token string">"show databases;"</span> <span class="token operator"><span class="token file-descriptor important">2</span>></span>/dev/null <span class="token operator">|</span><span class="token function">egrep</span> -v <span class="token string">"Database|information_schema|mysql|performance_schema|sys"</span><span class="token variable">)</span></span>
 
<span class="token keyword">for</span> <span class="token for-or-select variable">DB</span> <span class="token keyword">in</span> <span class="token variable">$DB_LIST</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token assign-left variable">BACKUP_NAME</span><span class="token operator">=</span><span class="token variable">$BACKUP_DIR</span>/<span class="token variable">${DB}</span>_<span class="token variable">${DATE}</span>.sql
    <span class="token keyword">if</span> <span class="token operator">!</span> mysqldump -h<span class="token variable">$HOST</span> -u<span class="token environment constant">$USER</span> -p<span class="token variable">$PASS</span> -B <span class="token variable">$DB</span> <span class="token operator">></span> <span class="token variable">$BACKUP_NAME</span> <span class="token operator"><span class="token file-descriptor important">2</span>></span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$BACKUP_NAME</span> 备份失败!"</span>
    <span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h6 id="分表备份" tabindex="-1"><a class="header-anchor" href="#分表备份" aria-hidden="true">#</a> 分表备份</h6>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>mysqldump -uroot -pxxx -A t <span class="token operator">></span> t.sql
<span class="token comment">#!/bin/bash</span>
<span class="token assign-left variable">DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%F_%H-%M-%S<span class="token variable">)</span></span>
<span class="token assign-left variable">HOST</span><span class="token operator">=</span>localhost
<span class="token assign-left variable"><span class="token environment constant">USER</span></span><span class="token operator">=</span>backup
<span class="token assign-left variable">PASS</span><span class="token operator">=</span><span class="token number">123</span>.com
<span class="token assign-left variable">BACKUP_DIR</span><span class="token operator">=</span>/data/db_backup
<span class="token assign-left variable">DB_LIST</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mysql -h$HOST -u<span class="token environment constant">$USER</span> -p$PASS -s -e <span class="token string">"show databases;"</span> <span class="token operator"><span class="token file-descriptor important">2</span>></span>/dev/null <span class="token operator">|</span><span class="token function">egrep</span> -v <span class="token string">"Database|information_schema|mysql|performance_schema|sys"</span><span class="token variable">)</span></span>
 
<span class="token keyword">for</span> <span class="token for-or-select variable">DB</span> <span class="token keyword">in</span> <span class="token variable">$DB_LIST</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token assign-left variable">BACKUP_DB_DIR</span><span class="token operator">=</span><span class="token variable">$BACKUP_DIR</span>/<span class="token variable">${DB}</span>_<span class="token variable">${DATE}</span>
    <span class="token punctuation">[</span> <span class="token operator">!</span> -d <span class="token variable">$BACKUP_DB_DIR</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> -p <span class="token variable">$BACKUP_DB_DIR</span> <span class="token operator">&amp;></span>/dev/null
    <span class="token assign-left variable">TABLE_LIST</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mysql -h$HOST -u<span class="token environment constant">$USER</span> -p$PASS -s -e <span class="token string">"use <span class="token variable">$DB</span>;show tables;"</span> <span class="token operator"><span class="token file-descriptor important">2</span>></span>/dev/null<span class="token variable">)</span></span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">TABLE</span> <span class="token keyword">in</span> <span class="token variable">$TABLE_LIST</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
        <span class="token assign-left variable">BACKUP_NAME</span><span class="token operator">=</span><span class="token variable">$BACKUP_DB_DIR</span>/<span class="token variable">${TABLE}</span>.sql 
        <span class="token keyword">if</span> <span class="token operator">!</span> mysqldump -h<span class="token variable">$HOST</span> -u<span class="token environment constant">$USER</span> -p<span class="token variable">$PASS</span> <span class="token variable">$DB</span> <span class="token variable">$TABLE</span> <span class="token operator">></span> <span class="token variable">$BACKUP_NAME</span> <span class="token operator"><span class="token file-descriptor important">2</span>></span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$BACKUP_NAME</span> 备份失败!"</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">done</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="_12、nginx访问日志分析" tabindex="-1"><a class="header-anchor" href="#_12、nginx访问日志分析" aria-hidden="true">#</a> 12、Nginx访问日志分析</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 日志格式: $remote_addr - $remote_user [$time_local] "$request" $status $body_bytes_sent "$http_referer" "$http_user_agent" "$http_x_forwarded_for"</span>
<span class="token assign-left variable">LOG_FILE</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token builtin class-name">echo</span> <span class="token string">"统计访问最多的10个IP"</span>
<span class="token function">awk</span> <span class="token string">'{a[$1]++}END{print "UV:",length(a);for(v in a)print v,a[v]}'</span> <span class="token variable">$LOG_FILE</span> <span class="token operator">|</span><span class="token function">sort</span> -k2 -nr <span class="token operator">|</span><span class="token function">head</span> -10
<span class="token builtin class-name">echo</span> <span class="token string">"----------------------"</span>
 
<span class="token builtin class-name">echo</span> <span class="token string">"统计时间段访问最多的IP"</span>
<span class="token function">awk</span> <span class="token string">'$4>="[01/Dec/2018:13:20:25" &amp;&amp; $4&lt;="[27/Nov/2018:16:20:49"{a[$1]++}END{for(v in a)print v,a[v]}'</span> <span class="token variable">$LOG_FILE</span> <span class="token operator">|</span><span class="token function">sort</span> -k2 -nr<span class="token operator">|</span><span class="token function">head</span> -10
<span class="token builtin class-name">echo</span> <span class="token string">"----------------------"</span>
 
<span class="token builtin class-name">echo</span> <span class="token string">"统计访问最多的10个页面"</span>
<span class="token function">awk</span> <span class="token string">'{a[$7]++}END{print "PV:",length(a);for(v in a){if(a[v]>10)print v,a[v]}}'</span> <span class="token variable">$LOG_FILE</span> <span class="token operator">|</span><span class="token function">sort</span> -k2 -nr
<span class="token builtin class-name">echo</span> <span class="token string">"----------------------"</span>
 
<span class="token builtin class-name">echo</span> <span class="token string">"统计访问页面状态码数量"</span>
<span class="token function">awk</span> <span class="token string">'{a[$7" "$9]++}END{for(v in a){if(a[v]>5)print v,a[v]}}'</span> <span class="token variable">$LOG_FILE</span> <span class="token operator">|</span><span class="token function">sort</span> -k3 -nr
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="_13、nginx访问日志自动按天-周、月-切割" tabindex="-1"><a class="header-anchor" href="#_13、nginx访问日志自动按天-周、月-切割" aria-hidden="true">#</a> 13、Nginx访问日志自动按天（周、月）切割</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#nginx日志目录</span>
<span class="token assign-left variable">LOG_DIR</span><span class="token operator">=</span>/www/server/nginx/logs
<span class="token comment">#获取到上一天的时间</span>
<span class="token assign-left variable">YESTERDAY_TIME</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> -d <span class="token string">"yesterday"</span> +%F<span class="token variable">)</span></span>
<span class="token comment">#归档日志取时间</span>
<span class="token assign-left variable">LOG_MONTH_DIR</span><span class="token operator">=</span><span class="token variable">$LOG_DIR</span>/<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +<span class="token string">"%Y-%m"</span><span class="token variable">)</span></span>
<span class="token comment">#归档日志的名称</span>
<span class="token assign-left variable">LOG_FILE_LIST</span><span class="token operator">=</span><span class="token string">"access.log"</span>
 
<span class="token keyword">for</span> <span class="token for-or-select variable">LOG_FILE</span> <span class="token keyword">in</span> <span class="token variable">$LOG_FILE_LIST</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token punctuation">[</span> <span class="token operator">!</span> -d <span class="token variable">$LOG_MONTH_DIR</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> -p <span class="token variable">$LOG_MONTH_DIR</span>
    <span class="token function">mv</span> <span class="token variable">$LOG_DIR</span>/<span class="token variable">$LOG_FILE</span> <span class="token variable">$LOG_MONTH_DIR</span>/<span class="token variable">${LOG_FILE}</span>_<span class="token variable">${YESTERDAY_TIME}</span>
<span class="token keyword">done</span>
 
<span class="token function">kill</span> -USR1 <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> $LOG_DIR/nginx.pid<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="_14、自动发布java项目-tomcat" tabindex="-1"><a class="header-anchor" href="#_14、自动发布java项目-tomcat" aria-hidden="true">#</a> 14、自动发布Java项目（Tomcat）</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%F_%T<span class="token variable">)</span></span>
 
<span class="token assign-left variable">TOMCAT_NAME</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable">TOMCAT_DIR</span><span class="token operator">=</span>/usr/local/<span class="token variable">$TOMCAT_NAME</span>
<span class="token assign-left variable">ROOT</span><span class="token operator">=</span><span class="token variable">$TOMCAT_DIR</span>/webapps/ROOT
 
<span class="token assign-left variable">BACKUP_DIR</span><span class="token operator">=</span>/data/backup
<span class="token assign-left variable">WORK_DIR</span><span class="token operator">=</span>/tmp
<span class="token assign-left variable">PROJECT_NAME</span><span class="token operator">=</span>tomcat-java-demo
 
<span class="token comment"># 拉取代码</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$WORK_DIR</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -d <span class="token variable">$PROJECT_NAME</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
   <span class="token function">git</span> clone https://github.com/lizhenliang/tomcat-java-demo
   <span class="token builtin class-name">cd</span> <span class="token variable">$PROJECT_NAME</span>
<span class="token keyword">else</span>
   <span class="token builtin class-name">cd</span> <span class="token variable">$PROJECT_NAME</span>
   <span class="token function">git</span> pull
<span class="token keyword">fi</span>
 
<span class="token comment"># 构建</span>
mvn clean package -Dmaven.test.skip<span class="token operator">=</span>true
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> -ne <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">"maven build failure!"</span>
   <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
 
<span class="token comment"># 部署</span>
<span class="token assign-left variable">TOMCAT_PID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> -ef <span class="token operator">|</span><span class="token function">grep</span> <span class="token string">"<span class="token variable">$TOMCAT_NAME</span>"</span> <span class="token operator">|</span><span class="token function">egrep</span> -v <span class="token string">"grep|<span class="token variable">$$</span>"</span> <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'NR==1{print $2}'</span><span class="token variable">)</span></span>
<span class="token punctuation">[</span> -n <span class="token string">"<span class="token variable">$TOMCAT_PID</span>"</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">kill</span> -9 <span class="token variable">$TOMCAT_PID</span>
<span class="token punctuation">[</span> -d <span class="token variable">$ROOT</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mv</span> <span class="token variable">$ROOT</span> <span class="token variable">$BACKUP_DIR</span>/<span class="token variable">${TOMCAT_NAME}</span>_ROOT<span class="token variable">$DATE</span>
<span class="token function">unzip</span> <span class="token variable">$WORK_DIR</span>/<span class="token variable">$PROJECT_NAME</span>/target/*.war -d <span class="token variable">$ROOT</span>
<span class="token variable">$TOMCAT_DIR</span>/bin/startup.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="_15、自动发布php项目" tabindex="-1"><a class="header-anchor" href="#_15、自动发布php项目" aria-hidden="true">#</a> 15、自动发布PHP项目</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
 
<span class="token assign-left variable">DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%F_%T<span class="token variable">)</span></span>
 
<span class="token assign-left variable">WWWROOT</span><span class="token operator">=</span>/usr/local/nginx/html/<span class="token variable">$1</span>
 
 
<span class="token assign-left variable">BACKUP_DIR</span><span class="token operator">=</span>/data/backup
<span class="token assign-left variable">WORK_DIR</span><span class="token operator">=</span>/tmp
<span class="token assign-left variable">PROJECT_NAME</span><span class="token operator">=</span>php-demo
 
 
<span class="token comment"># 拉取代码</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$WORK_DIR</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -d <span class="token variable">$PROJECT_NAME</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
   <span class="token function">git</span> clone https://github.com/lizhenliang/php-demo
   <span class="token builtin class-name">cd</span> <span class="token variable">$PROJECT_NAME</span>
<span class="token keyword">else</span>
   <span class="token builtin class-name">cd</span> <span class="token variable">$PROJECT_NAME</span>
   <span class="token function">git</span> pull
<span class="token keyword">fi</span>
 
 
<span class="token comment"># 部署</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -d <span class="token variable">$WWWROOT</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
   <span class="token function">mkdir</span> -p <span class="token variable">$WWWROOT</span>
   <span class="token function">rsync</span> -avz --exclude<span class="token operator">=</span>.git <span class="token variable">$WORK_DIR</span>/<span class="token variable">$PROJECT_NAME</span>/* <span class="token variable">$WWWROOT</span>
<span class="token keyword">else</span>
   <span class="token function">rsync</span> -avz --exclude<span class="token operator">=</span>.git <span class="token variable">$WORK_DIR</span>/<span class="token variable">$PROJECT_NAME</span>/* <span class="token variable">$WWWROOT</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="_16、dos攻击防范-自动屏蔽攻击ip" tabindex="-1"><a class="header-anchor" href="#_16、dos攻击防范-自动屏蔽攻击ip" aria-hidden="true">#</a> 16、DOS攻击防范（自动屏蔽攻击IP）</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%d/%b/%Y:%H:%M<span class="token variable">)</span></span>
<span class="token comment">#nginx日志</span>
<span class="token assign-left variable">LOG_FILE</span><span class="token operator">=</span>/usr/local/nginx/logs/demo2.access.log
<span class="token comment">#分析ip的访问情况</span>
<span class="token assign-left variable">ABNORMAL_IP</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">tail</span> -n5000 $LOG_FILE <span class="token operator">|</span><span class="token function">grep</span> $DATE <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'{a[$1]++}END{for(i in a)if(a[i]>10)print i}'</span><span class="token variable">)</span></span>
<span class="token keyword">for</span> <span class="token for-or-select variable">IP</span> <span class="token keyword">in</span> <span class="token variable">$ABNORMAL_IP</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$(</span>iptables -vnL <span class="token operator">|</span><span class="token function">grep</span> -c <span class="token string">"<span class="token variable">$IP</span>"</span><span class="token variable">)</span></span> -eq <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        iptables -I INPUT -s <span class="token variable">$IP</span> -j DROP
        <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +<span class="token string">'%F_%T'</span><span class="token variable">)</span></span> <span class="token variable">$IP</span>"</span> <span class="token operator">>></span> /tmp/drop_ip.log
    <span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="_17、目录入侵检测与告警" tabindex="-1"><a class="header-anchor" href="#_17、目录入侵检测与告警" aria-hidden="true">#</a> 17、目录入侵检测与告警</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
 
<span class="token assign-left variable">MON_DIR</span><span class="token operator">=</span>/opt
inotifywait -mqr --format %f -e create <span class="token variable">$MON_DIR</span> <span class="token operator">|</span><span class="token punctuation">\</span>
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> files<span class="token punctuation">;</span> <span class="token keyword">do</span>
   <span class="token comment">#同步文件</span>
   <span class="token function">rsync</span> -avz /opt /tmp/opt
  <span class="token comment">#检测文件是否被修改</span>
   <span class="token comment">#echo "$(date +'%F %T') create $files" | mail -s "dir monitor" xxx@163.com</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_18、dos攻击防范-自动屏蔽攻击ip" tabindex="-1"><a class="header-anchor" href="#_18、dos攻击防范-自动屏蔽攻击ip" aria-hidden="true">#</a> 18、Dos攻击防范（自动屏蔽攻击IP）</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%d/%b/%Y:%H:%M<span class="token variable">)</span></span>
<span class="token assign-left variable">LOG_FILE</span><span class="token operator">=</span>/usr/local/nginx/logs/demo2.access.log
<span class="token assign-left variable">ABNORMAL_IP</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">tail</span> -n5000 $LOG_FILE <span class="token operator">|</span><span class="token function">grep</span> $DATE <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'{a[$1]++}END{for(i in a)if(a[i]>10)print i}'</span><span class="token variable">)</span></span>
<span class="token keyword">for</span> <span class="token for-or-select variable">IP</span> <span class="token keyword">in</span> <span class="token variable">$ABNORMAL_IP</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$(</span>iptables -vnL <span class="token operator">|</span><span class="token function">grep</span> -c <span class="token string">"<span class="token variable">$IP</span>"</span><span class="token variable">)</span></span> -eq <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        iptables -I INPUT -s <span class="token variable">$IP</span> -j DROP
        <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +<span class="token string">'%F_%T'</span><span class="token variable">)</span></span> <span class="token variable">$IP</span>"</span> <span class="token operator">>></span> /tmp/drop_ip.log
    <span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_19、linux系统发送告警脚本" tabindex="-1"><a class="header-anchor" href="#_19、linux系统发送告警脚本" aria-hidden="true">#</a> 19、Linux系统发送告警脚本</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># yum install mailx</span>
<span class="token comment"># vi /etc/mail.rc  </span>
<span class="token builtin class-name">set</span> <span class="token assign-left variable">from</span><span class="token operator">=</span>baojingtongzhi@163.com <span class="token assign-left variable">smtp</span><span class="token operator">=</span>smtp.163.com
<span class="token builtin class-name">set</span> smtp-auth-user<span class="token operator">=</span>baojingtongzhi@163.com smtp-auth-password<span class="token operator">=</span><span class="token number">123456</span>
<span class="token builtin class-name">set</span> smtp-auth<span class="token operator">=</span>login
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_20、mysql数据库备份单循环" tabindex="-1"><a class="header-anchor" href="#_20、mysql数据库备份单循环" aria-hidden="true">#</a> 20、MySQL数据库备份单循环</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%F_%H-%M-%S<span class="token variable">)</span></span>
<span class="token assign-left variable">HOST</span><span class="token operator">=</span>localhost
<span class="token assign-left variable"><span class="token environment constant">USER</span></span><span class="token operator">=</span>backup
<span class="token assign-left variable">PASS</span><span class="token operator">=</span><span class="token number">123</span>.com
<span class="token assign-left variable">BACKUP_DIR</span><span class="token operator">=</span>/data/db_backup
<span class="token assign-left variable">DB_LIST</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mysql -h$HOST -u<span class="token environment constant">$USER</span> -p$PASS -s -e <span class="token string">"show databases;"</span> <span class="token operator"><span class="token file-descriptor important">2</span>></span>/dev/null <span class="token operator">|</span><span class="token function">egrep</span> -v <span class="token string">"Database|information_schema|mysql|performance_schema|sys"</span><span class="token variable">)</span></span>
 
<span class="token keyword">for</span> <span class="token for-or-select variable">DB</span> <span class="token keyword">in</span> <span class="token variable">$DB_LIST</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token assign-left variable">BACKUP_NAME</span><span class="token operator">=</span><span class="token variable">$BACKUP_DIR</span>/<span class="token variable">${DB}</span>_<span class="token variable">${DATE}</span>.sql
    <span class="token keyword">if</span> <span class="token operator">!</span> mysqldump -h<span class="token variable">$HOST</span> -u<span class="token environment constant">$USER</span> -p<span class="token variable">$PASS</span> -B <span class="token variable">$DB</span> <span class="token operator">></span> <span class="token variable">$BACKUP_NAME</span> <span class="token operator"><span class="token file-descriptor important">2</span>></span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$BACKUP_NAME</span> 备份失败!"</span>
    <span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_21、mysql数据库备份多循环" tabindex="-1"><a class="header-anchor" href="#_21、mysql数据库备份多循环" aria-hidden="true">#</a> 21、MySQL数据库备份多循环</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%F_%H-%M-%S<span class="token variable">)</span></span>
<span class="token assign-left variable">HOST</span><span class="token operator">=</span>localhost
<span class="token assign-left variable"><span class="token environment constant">USER</span></span><span class="token operator">=</span>backup
<span class="token assign-left variable">PASS</span><span class="token operator">=</span><span class="token number">123</span>.com
<span class="token assign-left variable">BACKUP_DIR</span><span class="token operator">=</span>/data/db_backup
<span class="token assign-left variable">DB_LIST</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mysql -h$HOST -u<span class="token environment constant">$USER</span> -p$PASS -s -e <span class="token string">"show databases;"</span> <span class="token operator"><span class="token file-descriptor important">2</span>></span>/dev/null <span class="token operator">|</span><span class="token function">egrep</span> -v <span class="token string">"Database|information_schema|mysql|performance_schema|sys"</span><span class="token variable">)</span></span>
 
<span class="token keyword">for</span> <span class="token for-or-select variable">DB</span> <span class="token keyword">in</span> <span class="token variable">$DB_LIST</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token assign-left variable">BACKUP_DB_DIR</span><span class="token operator">=</span><span class="token variable">$BACKUP_DIR</span>/<span class="token variable">${DB}</span>_<span class="token variable">${DATE}</span>
    <span class="token punctuation">[</span> <span class="token operator">!</span> -d <span class="token variable">$BACKUP_DB_DIR</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> -p <span class="token variable">$BACKUP_DB_DIR</span> <span class="token operator">&amp;></span>/dev/null
    <span class="token assign-left variable">TABLE_LIST</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mysql -h$HOST -u<span class="token environment constant">$USER</span> -p$PASS -s -e <span class="token string">"use <span class="token variable">$DB</span>;show tables;"</span> <span class="token operator"><span class="token file-descriptor important">2</span>></span>/dev/null<span class="token variable">)</span></span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">TABLE</span> <span class="token keyword">in</span> <span class="token variable">$TABLE_LIST</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
        <span class="token assign-left variable">BACKUP_NAME</span><span class="token operator">=</span><span class="token variable">$BACKUP_DB_DIR</span>/<span class="token variable">${TABLE}</span>.sql 
        <span class="token keyword">if</span> <span class="token operator">!</span> mysqldump -h<span class="token variable">$HOST</span> -u<span class="token environment constant">$USER</span> -p<span class="token variable">$PASS</span> <span class="token variable">$DB</span> <span class="token variable">$TABLE</span> <span class="token operator">></span> <span class="token variable">$BACKUP_NAME</span> <span class="token operator"><span class="token file-descriptor important">2</span>></span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$BACKUP_NAME</span> 备份失败!"</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">done</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="_22、nginx-访问访问日志按天切割" tabindex="-1"><a class="header-anchor" href="#_22、nginx-访问访问日志按天切割" aria-hidden="true">#</a> 22、Nginx 访问访问日志按天切割</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">LOG_DIR</span><span class="token operator">=</span>/usr/local/nginx/logs
<span class="token assign-left variable">YESTERDAY_TIME</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> -d <span class="token string">"yesterday"</span> +%F<span class="token variable">)</span></span>
<span class="token assign-left variable">LOG_MONTH_DIR</span><span class="token operator">=</span><span class="token variable">$LOG_DIR</span>/<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +<span class="token string">"%Y-%m"</span><span class="token variable">)</span></span>
<span class="token assign-left variable">LOG_FILE_LIST</span><span class="token operator">=</span><span class="token string">"default.access.log"</span>
 
<span class="token keyword">for</span> <span class="token for-or-select variable">LOG_FILE</span> <span class="token keyword">in</span> <span class="token variable">$LOG_FILE_LIST</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token punctuation">[</span> <span class="token operator">!</span> -d <span class="token variable">$LOG_MONTH_DIR</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> -p <span class="token variable">$LOG_MONTH_DIR</span>
    <span class="token function">mv</span> <span class="token variable">$LOG_DIR</span>/<span class="token variable">$LOG_FILE</span> <span class="token variable">$LOG_MONTH_DIR</span>/<span class="token variable">${LOG_FILE}</span>_<span class="token variable">${YESTERDAY_TIME}</span>
<span class="token keyword">done</span>
 
<span class="token function">kill</span> -USR1 <span class="token variable"><span class="token variable">$(</span><span class="token function">cat</span> /var/run/nginx.pid<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="_23、nginx访问日志分析脚本" tabindex="-1"><a class="header-anchor" href="#_23、nginx访问日志分析脚本" aria-hidden="true">#</a> 23、Nginx访问日志分析脚本</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># 日志格式: $remote_addr - $remote_user [$time_local] "$request" $status $body_bytes_sent "$http_referer" "$http_user_agent" "$http_x_forwarded_for"</span>
<span class="token assign-left variable">LOG_FILE</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token builtin class-name">echo</span> <span class="token string">"统计访问最多的10个IP"</span>
<span class="token function">awk</span> <span class="token string">'{a[$1]++}END{print "UV:",length(a);for(v in a)print v,a[v]}'</span> <span class="token variable">$LOG_FILE</span> <span class="token operator">|</span><span class="token function">sort</span> -k2 -nr <span class="token operator">|</span><span class="token function">head</span> -10
<span class="token builtin class-name">echo</span> <span class="token string">"----------------------"</span>
 
<span class="token builtin class-name">echo</span> <span class="token string">"统计时间段访问最多的IP"</span>
<span class="token function">awk</span> <span class="token string">'$4>="[01/Dec/2018:13:20:25" &amp;&amp; $4&lt;="[27/Nov/2018:16:20:49"{a[$1]++}END{for(v in a)print v,a[v]}'</span> <span class="token variable">$LOG_FILE</span> <span class="token operator">|</span><span class="token function">sort</span> -k2 -nr<span class="token operator">|</span><span class="token function">head</span> -10
<span class="token builtin class-name">echo</span> <span class="token string">"----------------------"</span>
 
<span class="token builtin class-name">echo</span> <span class="token string">"统计访问最多的10个页面"</span>
<span class="token function">awk</span> <span class="token string">'{a[$7]++}END{print "PV:",length(a);for(v in a){if(a[v]>10)print v,a[v]}}'</span> <span class="token variable">$LOG_FILE</span> <span class="token operator">|</span><span class="token function">sort</span> -k2 -nr
<span class="token builtin class-name">echo</span> <span class="token string">"----------------------"</span>
 
<span class="token builtin class-name">echo</span> <span class="token string">"统计访问页面状态码数量"</span>
<span class="token function">awk</span> <span class="token string">'{a[$7" "$9]++}END{for(v in a){if(a[v]>5)print v,a[v]}}'</span> <span class="token variable">$LOG_FILE</span> <span class="token operator">|</span><span class="token function">sort</span> -k3 -nr
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="_24、查看网卡实时流量脚本" tabindex="-1"><a class="header-anchor" href="#_24、查看网卡实时流量脚本" aria-hidden="true">#</a> 24、查看网卡实时流量脚本</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">NIC</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">" In ------ Out"</span>
<span class="token keyword">while</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token assign-left variable">OLD_IN</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> <span class="token string">'$0~"'</span>$NIC<span class="token string">'"{print $2}'</span> /proc/net/dev<span class="token variable">)</span></span>
    <span class="token assign-left variable">OLD_OUT</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> <span class="token string">'$0~"'</span>$NIC<span class="token string">'"{print $10}'</span> /proc/net/dev<span class="token variable">)</span></span>
    <span class="token function">sleep</span> <span class="token number">1</span>
    <span class="token assign-left variable">NEW_IN</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span>  <span class="token string">'$0~"'</span>$NIC<span class="token string">'"{print $2}'</span> /proc/net/dev<span class="token variable">)</span></span>
    <span class="token assign-left variable">NEW_OUT</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> <span class="token string">'$0~"'</span>$NIC<span class="token string">'"{print $10}'</span> /proc/net/dev<span class="token variable">)</span></span>
    <span class="token assign-left variable">IN</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">printf</span> <span class="token string">"%.1f%s"</span> "<span class="token punctuation">$((</span><span class="token punctuation">(</span>$NEW_IN-$OLD_IN<span class="token punctuation">)</span>/1024<span class="token variable">)</span></span><span class="token punctuation">)</span><span class="token string">" "</span>KB/s<span class="token string">")
    OUT=<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">printf</span> <span class="token string">"%.1f%s"</span> "<span class="token punctuation">$((</span><span class="token punctuation">(</span>$NEW_OUT-$OLD_OUT<span class="token punctuation">)</span>/1024<span class="token variable">)</span></span>)"</span> <span class="token string">"KB/s"</span><span class="token punctuation">)</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$IN</span> <span class="token variable">$OUT</span>"</span>
    <span class="token function">sleep</span> <span class="token number">1</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_25、服务器系统配置初始化脚本" tabindex="-1"><a class="header-anchor" href="#_25、服务器系统配置初始化脚本" aria-hidden="true">#</a> 25、服务器系统配置初始化脚本</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#/bin/bash</span>
<span class="token comment"># 设置时区并同步时间</span>
<span class="token function">ln</span> -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
<span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">crontab</span> -l <span class="token operator">|</span><span class="token function">grep</span> ntpdate <span class="token operator">&amp;></span>/dev/null <span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token punctuation">(</span>echo <span class="token string">"* 1 * * * ntpdate time.windows.com >/dev/null 2>&amp;1"</span><span class="token punctuation">;</span><span class="token function">crontab</span> -l<span class="token punctuation">)</span> <span class="token operator">|</span><span class="token function">crontab</span>
<span class="token keyword">fi</span>
 
<span class="token comment"># 禁用selinux</span>
<span class="token function">sed</span> -i <span class="token string">'/SELINUX/{s/permissive/disabled/}'</span> /etc/selinux/config
 
<span class="token comment"># 关闭防火墙</span>
<span class="token keyword">if</span> <span class="token function">egrep</span> <span class="token string">"7.[0-9]"</span> /etc/redhat-release <span class="token operator">&amp;></span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
    systemctl stop firewalld
    systemctl disable firewalld
<span class="token keyword">elif</span> <span class="token function">egrep</span> <span class="token string">"6.[0-9]"</span> /etc/redhat-release <span class="token operator">&amp;></span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">service</span> iptables stop
    <span class="token function">chkconfig</span> iptables off
<span class="token keyword">fi</span>
 
<span class="token comment"># 历史命令显示操作时间</span>
<span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">grep</span> HISTTIMEFORMAT /etc/bashrc<span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">'export HISTTIMEFORMAT="%F %T `whoami` "'</span> <span class="token operator">>></span> /etc/bashrc
<span class="token keyword">fi</span>
 
<span class="token comment"># SSH超时时间</span>
<span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">grep</span> <span class="token string">"TMOUT=600"</span> /etc/profile <span class="token operator">&amp;></span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"export TMOUT=600"</span> <span class="token operator">>></span> /etc/profile
<span class="token keyword">fi</span>
 
<span class="token comment"># 禁止root远程登录</span>
<span class="token function">sed</span> -i <span class="token string">'s/#PermitRootLogin yes/PermitRootLogin no/'</span> /etc/ssh/sshd_config
 
<span class="token comment"># 禁止定时任务向发送邮件</span>
<span class="token function">sed</span> -i <span class="token string">'s/^MAILTO=root/MAILTO=""/'</span> /etc/crontab
 
<span class="token comment"># 设置最大打开文件数</span>
<span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">grep</span> <span class="token string">"* soft nofile 65535"</span> /etc/security/limits.conf <span class="token operator">&amp;></span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">cat</span> <span class="token operator">>></span> /etc/security/limits.conf <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
    * soft nofile 65535
    * hard nofile 65535
    EOF
fi
 
# 系统内核优化
cat >> /etc/sysctl.conf &lt;&lt; EOF
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_max_tw_buckets = 20480
net.ipv4.tcp_max_syn_backlog = 20480
net.core.netdev_max_backlog = 262144
net.ipv4.tcp_fin_timeout = 20  
EOF</span>
 
<span class="token comment"># 减少SWAP使用</span>
<span class="token builtin class-name">echo</span> <span class="token string">"0"</span> <span class="token operator">></span> /proc/sys/vm/swappiness
 
<span class="token comment"># 安装系统性能分析工具及其他</span>
yum <span class="token function">install</span> gcc <span class="token function">make</span> autoconf <span class="token function">vim</span> sysstat net-tools iostat iftop iotp lrzsz -y
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><h2 id="_26、监控100台服务器磁盘利用率脚本" tabindex="-1"><a class="header-anchor" href="#_26、监控100台服务器磁盘利用率脚本" aria-hidden="true">#</a> 26、监控100台服务器磁盘利用率脚本</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">HOST_INFO</span><span class="token operator">=</span>host.info
<span class="token keyword">for</span> <span class="token for-or-select variable">IP</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> <span class="token string">'/^[^#]/{print $1}'</span> $HOST_INFO<span class="token variable">)</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token assign-left variable"><span class="token environment constant">USER</span></span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> -v <span class="token assign-left variable">ip</span><span class="token operator">=</span>$IP <span class="token string">'ip==$1{print $2}'</span> $HOST_INFO<span class="token variable">)</span></span>
    <span class="token assign-left variable">PORT</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> -v <span class="token assign-left variable">ip</span><span class="token operator">=</span>$IP <span class="token string">'ip==$1{print $3}'</span> $HOST_INFO<span class="token variable">)</span></span>
    <span class="token assign-left variable">TMP_FILE</span><span class="token operator">=</span>/tmp/disk.tmp
    <span class="token function">ssh</span> -p <span class="token variable">$PORT</span> <span class="token environment constant">$USER</span>@<span class="token variable">$IP</span> <span class="token string">'df -h'</span> <span class="token operator">></span> <span class="token variable">$TMP_FILE</span>
    <span class="token assign-left variable">USE_RATE_LIST</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> <span class="token string">'BEGIN{OFS="="}/^\/dev/{print $NF,int($5)}'</span> $TMP_FILE<span class="token variable">)</span></span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">USE_RATE</span> <span class="token keyword">in</span> <span class="token variable">$USE_RATE_LIST</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
        <span class="token assign-left variable">PART_NAME</span><span class="token operator">=</span><span class="token variable">${USE_RATE<span class="token operator">%</span>=*}</span>
        <span class="token assign-left variable">USE_RATE</span><span class="token operator">=</span><span class="token variable">${USE_RATE<span class="token operator">#</span>*=}</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$USE_RATE</span> -ge <span class="token number">80</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token string">"Warning: <span class="token variable">$PART_NAME</span> Partition usage <span class="token variable">$USE_RATE</span>%!"</span>
        <span class="token keyword">fi</span>
    <span class="token keyword">done</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="_27、监控mysql主从同步状态是否异常脚本" tabindex="-1"><a class="header-anchor" href="#_27、监控mysql主从同步状态是否异常脚本" aria-hidden="true">#</a> 27、监控MySQL主从同步状态是否异常脚本</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash  </span>
<span class="token assign-left variable">HOST</span><span class="token operator">=</span>localhost
<span class="token assign-left variable"><span class="token environment constant">USER</span></span><span class="token operator">=</span>root
<span class="token assign-left variable">PASSWD</span><span class="token operator">=</span><span class="token number">123</span>.com
<span class="token assign-left variable">IO_SQL_STATUS</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>mysql -h$HOST -u<span class="token environment constant">$USER</span> -p$PASSWD -e <span class="token string">'show slave status\G'</span> <span class="token operator"><span class="token file-descriptor important">2</span>></span>/dev/null <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'/Slave_.*_Running:/{print $1$2}'</span><span class="token variable">)</span></span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">$IO_SQL_STATUS</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token assign-left variable">THREAD_STATUS_NAME</span><span class="token operator">=</span><span class="token variable">${i<span class="token operator">%</span><span class="token operator">:</span>*}</span>
    <span class="token assign-left variable">THREAD_STATUS</span><span class="token operator">=</span><span class="token variable">${i<span class="token operator">#</span>*<span class="token operator">:</span>}</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$THREAD_STATUS</span>"</span> <span class="token operator">!=</span> <span class="token string">"Yes"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"Error: MySQL Master-Slave <span class="token variable">$THREAD_STATUS_NAME</span> status is <span class="token variable">$THREAD_STATUS</span>!"</span> <span class="token operator">|</span>mail -s <span class="token string">"Master-Slave Staus"</span> <span class="token punctuation">[</span>url<span class="token operator">=</span>mailto:xxx@163.com<span class="token punctuation">]</span>xxx@163.com<span class="token punctuation">[</span>/url<span class="token punctuation">]</span>
    <span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="_28、目录文件变化监控和实时文件同步" tabindex="-1"><a class="header-anchor" href="#_28、目录文件变化监控和实时文件同步" aria-hidden="true">#</a> 28、目录文件变化监控和实时文件同步</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
 
<span class="token assign-left variable">MON_DIR</span><span class="token operator">=</span>/opt
inotifywait -mqr --format %f -e create <span class="token variable">$MON_DIR</span> <span class="token operator">|</span><span class="token punctuation">\</span>
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> files<span class="token punctuation">;</span> <span class="token keyword">do</span>
   <span class="token function">rsync</span> -avz /opt /tmp/opt
   <span class="token comment">#echo "$(date +'%F %T') create $files" | mail -s "dir monitor" [url=mailto:xxx@163.com]xxx@163.com[/url]</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_29、批量创建100用户并设置密码脚本" tabindex="-1"><a class="header-anchor" href="#_29、批量创建100用户并设置密码脚本" aria-hidden="true">#</a> 29、批量创建100用户并设置密码脚本</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">DATE</span><span class="token operator">=</span><span class="token variable">$@</span>
<span class="token assign-left variable">USER_FILE</span><span class="token operator">=</span>user.txt
<span class="token keyword">for</span> <span class="token for-or-select variable">USER</span> <span class="token keyword">in</span> <span class="token variable">$USER_LIST</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">id</span> <span class="token environment constant">$USER</span> <span class="token operator">&amp;></span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token assign-left variable">PASS</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> <span class="token environment constant">$RANDOM</span> <span class="token operator">|</span>md5sum <span class="token operator">|</span><span class="token function">cut</span> -c <span class="token number">1</span>-8<span class="token variable">)</span></span>
        <span class="token function">useradd</span> <span class="token environment constant">$USER</span>
        <span class="token builtin class-name">echo</span> <span class="token variable">$PASS</span> <span class="token operator">|</span><span class="token function">passwd</span> --stdin <span class="token environment constant">$USER</span> <span class="token operator">&amp;></span>/dev/null
        <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token environment constant">$USER</span>   <span class="token variable">$PASS</span>"</span> <span class="token operator">>></span> <span class="token variable">$USER_FILE</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token environment constant">$USER</span> User create successful."</span>
    <span class="token keyword">else</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token environment constant">$USER</span> User already exists!"</span>
    <span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_30、批量检测网站是否异常脚本" tabindex="-1"><a class="header-anchor" href="#_30、批量检测网站是否异常脚本" aria-hidden="true">#</a> 30、批量检测网站是否异常脚本</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash  </span>
<span class="token assign-left variable">URL_LIST</span><span class="token operator">=</span><span class="token string">"www.baidu.com [url=http://www.ctnrs.com]www.ctnrs.com[/url]"</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">URL</span> <span class="token keyword">in</span> <span class="token variable">$URL_LIST</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token assign-left variable">FAIL_COUNT</span><span class="token operator">=</span><span class="token number">0</span>
    <span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">3</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
        <span class="token assign-left variable">HTTP_CODE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> -o /dev/null --connect-timeout <span class="token number">3</span> -s -w <span class="token string">"%{http_code}"</span> $URL<span class="token variable">)</span></span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$HTTP_CODE</span> -eq <span class="token number">200</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
            <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$URL</span> OK"</span>
            <span class="token builtin class-name">break</span>
        <span class="token keyword">else</span>
            <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$URL</span> retry <span class="token variable">$FAIL_COUNT</span>"</span>
            <span class="token builtin class-name">let</span> FAIL_COUNT++
        <span class="token keyword">fi</span>
    <span class="token keyword">done</span>
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$FAIL_COUNT</span> -eq <span class="token number">3</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
        <span class="token builtin class-name">echo</span> <span class="token string">"Warning: <span class="token variable">$URL</span> Access failure!"</span>
    <span class="token keyword">fi</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="_31、批量主机远程执行命令脚本" tabindex="-1"><a class="header-anchor" href="#_31、批量主机远程执行命令脚本" aria-hidden="true">#</a> 31、批量主机远程执行命令脚本</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">COMMAND</span><span class="token operator">=</span><span class="token variable">$*</span>
<span class="token assign-left variable">HOST_INFO</span><span class="token operator">=</span>host.info
<span class="token keyword">for</span> <span class="token for-or-select variable">IP</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> <span class="token string">'/^[^#]/{print $1}'</span> $HOST_INFO<span class="token variable">)</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token assign-left variable"><span class="token environment constant">USER</span></span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> -v <span class="token assign-left variable">ip</span><span class="token operator">=</span>$IP <span class="token string">'ip==$1{print $2}'</span> $HOST_INFO<span class="token variable">)</span></span>
    <span class="token assign-left variable">PORT</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> -v <span class="token assign-left variable">ip</span><span class="token operator">=</span>$IP <span class="token string">'ip==$1{print $3}'</span> $HOST_INFO<span class="token variable">)</span></span>
    <span class="token assign-left variable">PASS</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">awk</span> -v <span class="token assign-left variable">ip</span><span class="token operator">=</span>$IP <span class="token string">'ip==$1{print $4}'</span> $HOST_INFO<span class="token variable">)</span></span>
    <span class="token function">expect</span> -c <span class="token string">"
       spawn ssh -p <span class="token variable">$PORT</span> <span class="token environment constant">$USER</span>@<span class="token variable">$IP</span>
       expect {
          <span class="token entity" title="\&quot;">\"</span>(yes/no)<span class="token entity" title="\&quot;">\"</span> {send <span class="token entity" title="\&quot;">\"</span>yes<span class="token entity" title="\r">\r</span><span class="token entity" title="\&quot;">\"</span>; exp_continue}
          <span class="token entity" title="\&quot;">\"</span>password:<span class="token entity" title="\&quot;">\"</span> {send <span class="token entity" title="\&quot;">\"</span><span class="token variable">$PASS</span><span class="token entity" title="\r">\r</span><span class="token entity" title="\&quot;">\"</span>; exp_continue}
          <span class="token entity" title="\&quot;">\"</span><span class="token environment constant">$USER</span>@*<span class="token entity" title="\&quot;">\"</span> {send <span class="token entity" title="\&quot;">\"</span><span class="token variable">$COMMAND</span><span class="token entity" title="\r">\r</span> exit<span class="token entity" title="\r">\r</span><span class="token entity" title="\&quot;">\"</span>; exp_continue}
       }
    "</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"-------------------"</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="_32、一键部署lnmp网站平台脚本" tabindex="-1"><a class="header-anchor" href="#_32、一键部署lnmp网站平台脚本" aria-hidden="true">#</a> 32、一键部署LNMP网站平台脚本</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">NGINX_V</span><span class="token operator">=</span><span class="token number">1.15</span>.6
<span class="token assign-left variable">PHP_V</span><span class="token operator">=</span><span class="token number">5.6</span>.36
<span class="token assign-left variable">TMP_DIR</span><span class="token operator">=</span>/tmp
 
<span class="token assign-left variable">INSTALL_DIR</span><span class="token operator">=</span>/usr/local
 
<span class="token assign-left variable">PWD_C</span><span class="token operator">=</span><span class="token environment constant">$PWD</span>
 
<span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"<span class="token entity" title="\t">\t</span>Menu<span class="token entity" title="\n">\n</span>"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"1. Install Nginx"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"2. Install PHP"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"3. Install MySQL"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"4. Deploy LNMP"</span>
<span class="token builtin class-name">echo</span> -e <span class="token string">"9. Quit"</span>
 
<span class="token keyword">function</span> <span class="token function-name function">command_status_check</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> -ne <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
                <span class="token builtin class-name">echo</span> <span class="token variable">$1</span>
                <span class="token builtin class-name">exit</span>
        <span class="token keyword">fi</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">function</span> <span class="token function-name function">install_nginx</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">cd</span> <span class="token variable">$TMP_DIR</span>
    yum <span class="token function">install</span> -y gcc gcc-c++ <span class="token function">make</span> openssl-devel pcre-devel <span class="token function">wget</span>
    <span class="token function">wget</span> <span class="token punctuation">[</span>url<span class="token operator">=</span>http://nginx.org/download/nginx-<span class="token punctuation">]</span>http://nginx.org/download/nginx-<span class="token punctuation">[</span>/url<span class="token punctuation">]</span><span class="token variable">${NGINX_V}</span>.tar.gz
    <span class="token function">tar</span> zxf nginx-<span class="token variable">${NGINX_V}</span>.tar.gz
    <span class="token builtin class-name">cd</span> nginx-<span class="token variable">${NGINX_V}</span>
    ./configure --prefix<span class="token operator">=</span><span class="token variable">$INSTALL_DIR</span>/nginx <span class="token punctuation">\</span>
    --with-http_ssl_module <span class="token punctuation">\</span>
    --with-http_stub_status_module <span class="token punctuation">\</span>
    --with-stream
    command_status_check <span class="token string">"Nginx - 平台环境检查失败！"</span>
    <span class="token function">make</span> -j <span class="token number">4</span> 
    command_status_check <span class="token string">"Nginx - 编译失败！"</span>
    <span class="token function">make</span> <span class="token function">install</span>
    command_status_check <span class="token string">"Nginx - 安装失败！"</span>
    <span class="token function">mkdir</span> -p <span class="token variable">$INSTALL_DIR</span>/nginx/conf/vhost
    <span class="token builtin class-name">alias</span> <span class="token assign-left variable">cp</span><span class="token operator">=</span>cp <span class="token punctuation">;</span> <span class="token function">cp</span> -rf <span class="token variable">$PWD_C</span>/nginx.conf <span class="token variable">$INSTALL_DIR</span>/nginx/conf
    <span class="token function">rm</span> -rf <span class="token variable">$INSTALL_DIR</span>/nginx/html/*
    <span class="token builtin class-name">echo</span> <span class="token string">"ok"</span> <span class="token operator">></span> <span class="token variable">$INSTALL_DIR</span>/nginx/html/status.html
    <span class="token builtin class-name">echo</span> <span class="token string">'&lt;?php echo "ok"?>'</span> <span class="token operator">></span> <span class="token variable">$INSTALL_DIR</span>/nginx/html/status.php
    <span class="token variable">$INSTALL_DIR</span>/nginx/sbin/nginx
    command_status_check <span class="token string">"Nginx - 启动失败！"</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">function</span> <span class="token function-name function">install_php</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin class-name">cd</span> <span class="token variable">$TMP_DIR</span>
    yum <span class="token function">install</span> -y gcc gcc-c++ <span class="token function">make</span> gd-devel libxml2-devel <span class="token punctuation">\</span>
        libcurl-devel libjpeg-devel libpng-devel openssl-devel <span class="token punctuation">\</span>
        libmcrypt-devel libxslt-devel libtidy-devel
    <span class="token function">wget</span> <span class="token punctuation">[</span>url<span class="token operator">=</span>http://docs.php.net/distributions/php-<span class="token punctuation">]</span>http://docs.php.net/distributions/php-<span class="token punctuation">[</span>/url<span class="token punctuation">]</span><span class="token variable">${PHP_V}</span>.tar.gz
    <span class="token function">tar</span> zxf php-<span class="token variable">${PHP_V}</span>.tar.gz
    <span class="token builtin class-name">cd</span> php-<span class="token variable">${PHP_V}</span>
    ./configure --prefix<span class="token operator">=</span><span class="token variable">$INSTALL_DIR</span>/php <span class="token punctuation">\</span>
    --with-config-file-path<span class="token operator">=</span><span class="token variable">$INSTALL_DIR</span>/php/etc <span class="token punctuation">\</span>
    --enable-fpm --enable-opcache <span class="token punctuation">\</span>
    --with-mysql --with-mysqli --with-pdo-mysql <span class="token punctuation">\</span>
    --with-openssl --with-zlib --with-curl --with-gd <span class="token punctuation">\</span>
    --with-jpeg-dir --with-png-dir --with-freetype-dir <span class="token punctuation">\</span>
    --enable-mbstring --enable-hash
    command_status_check <span class="token string">"PHP - 平台环境检查失败！"</span>
    <span class="token function">make</span> -j <span class="token number">4</span> 
    command_status_check <span class="token string">"PHP - 编译失败！"</span>
    <span class="token function">make</span> <span class="token function">install</span>
    command_status_check <span class="token string">"PHP - 安装失败！"</span>
    <span class="token function">cp</span> php.ini-production <span class="token variable">$INSTALL_DIR</span>/php/etc/php.ini
    <span class="token function">cp</span> sapi/fpm/php-fpm.conf <span class="token variable">$INSTALL_DIR</span>/php/etc/php-fpm.conf
    <span class="token function">cp</span> sapi/fpm/init.d.php-fpm /etc/init.d/php-fpm
    <span class="token function">chmod</span> +x /etc/init.d/php-fpm
    /etc/init.d/php-fpm start
    command_status_check <span class="token string">"PHP - 启动失败！"</span>
<span class="token punctuation">}</span>
 
<span class="token builtin class-name">read</span> -p <span class="token string">"请输入编号："</span> number
<span class="token keyword">case</span> <span class="token variable">$number</span> <span class="token keyword">in</span>
    <span class="token number">1</span><span class="token punctuation">)</span>
        install_nginx<span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token number">2</span><span class="token punctuation">)</span>
        install_php<span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token number">3</span><span class="token punctuation">)</span>
        install_mysql<span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token number">4</span><span class="token punctuation">)</span>
        install_nginx
        install_php
        <span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token number">9</span><span class="token punctuation">)</span>
        <span class="token builtin class-name">exit</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br></div></div><h2 id="_33、一键查看服务器资源利用率" tabindex="-1"><a class="header-anchor" href="#_33、一键查看服务器资源利用率" aria-hidden="true">#</a> 33、一键查看服务器资源利用率</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token keyword">function</span> <span class="token function-name function">cpu</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token assign-left variable">NUM</span><span class="token operator">=</span><span class="token number">1</span>
    <span class="token keyword">while</span> <span class="token punctuation">[</span> <span class="token variable">$NUM</span> -le <span class="token number">3</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
        <span class="token assign-left variable">util</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">vmstat</span> <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'{if(NR==3)print 100-$15"%"}'</span><span class="token variable">`</span></span>
        <span class="token assign-left variable">user</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">vmstat</span> <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'{if(NR==3)print $13"%"}'</span><span class="token variable">`</span></span>
        <span class="token assign-left variable">sys</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">vmstat</span> <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'{if(NR==3)print $14"%"}'</span><span class="token variable">`</span></span>
        <span class="token assign-left variable">iowait</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">vmstat</span> <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'{if(NR==3)print $16"%"}'</span><span class="token variable">`</span></span>
        <span class="token builtin class-name">echo</span> <span class="token string">"CPU - 使用率: <span class="token variable">$util</span> , 等待磁盘IO响应使用率: <span class="token variable">$iowait</span>"</span>
        <span class="token builtin class-name">let</span> NUM++
        <span class="token function">sleep</span> <span class="token number">1</span>
    <span class="token keyword">done</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">function</span> <span class="token function-name function">memory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token assign-left variable">total</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">free</span> -m <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'{if(NR==2)printf "%.1f",$2/1024}'</span><span class="token variable">`</span></span>
    <span class="token assign-left variable">used</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">free</span> -m <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'{if(NR==2) printf "%.1f",($2-$NF)/1024}'</span><span class="token variable">`</span></span>
    <span class="token assign-left variable">available</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">free</span> -m <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'{if(NR==2) printf "%.1f",$NF/1024}'</span><span class="token variable">`</span></span>
    <span class="token builtin class-name">echo</span> <span class="token string">"内存 - 总大小: <span class="token variable">${total}</span>G , 使用: <span class="token variable">${used}</span>G , 剩余: <span class="token variable">${available}</span>G"</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">function</span> <span class="token function-name function">disk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token assign-left variable">fs</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">df</span> -h <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'/^\/dev/{print $1}'</span><span class="token variable">)</span></span>
    <span class="token keyword">for</span> <span class="token for-or-select variable">p</span> <span class="token keyword">in</span> <span class="token variable">$fs</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
        <span class="token assign-left variable">mounted</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">df</span> -h <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'$1=="'</span>$p<span class="token string">'"{print $NF}'</span><span class="token variable">)</span></span>
        <span class="token assign-left variable">size</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">df</span> -h <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'$1=="'</span>$p<span class="token string">'"{print $2}'</span><span class="token variable">)</span></span>
        <span class="token assign-left variable">used</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">df</span> -h <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'$1=="'</span>$p<span class="token string">'"{print $3}'</span><span class="token variable">)</span></span>
        <span class="token assign-left variable">used_percent</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">df</span> -h <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'$1=="'</span>$p<span class="token string">'"{print $5}'</span><span class="token variable">)</span></span>
        <span class="token builtin class-name">echo</span> <span class="token string">"硬盘 - 挂载点: <span class="token variable">$mounted</span> , 总大小: <span class="token variable">$size</span> , 使用: <span class="token variable">$used</span> , 使用率: <span class="token variable">$used_percent</span>"</span>
    <span class="token keyword">done</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">function</span> <span class="token function-name function">tcp_status</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token assign-left variable">summary</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>ss -antp <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'{status[$1]++}END{for(i in status) printf i":"status[i]" "}'</span><span class="token variable">)</span></span>
    <span class="token builtin class-name">echo</span> <span class="token string">"TCP连接状态 - <span class="token variable">$summary</span>"</span>
<span class="token punctuation">}</span>
 
cpu
memory
disk
tcp_status
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h2 id="_34、找出占用cpu-内存过高的进程脚本" tabindex="-1"><a class="header-anchor" href="#_34、找出占用cpu-内存过高的进程脚本" aria-hidden="true">#</a> 34、找出占用CPU 内存过高的进程脚本</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">ps</span> -eo user,pid,pcpu,pmem,args --sort<span class="token operator">=</span>-pcpu  <span class="token operator">|</span><span class="token function">head</span> -n <span class="token number">10</span>
 
<span class="token function">ps</span> -eo user,pid,pcpu,pmem,args --sort<span class="token operator">=</span>-pmem  <span class="token operator">|</span><span class="token function">head</span> -n <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_35、自动发布java项目-tomcat" tabindex="-1"><a class="header-anchor" href="#_35、自动发布java项目-tomcat" aria-hidden="true">#</a> 35、自动发布Java项目（Tomcat）</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%F_%T<span class="token variable">)</span></span>
 
<span class="token assign-left variable">TOMCAT_NAME</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable">TOMCAT_DIR</span><span class="token operator">=</span>/usr/local/<span class="token variable">$TOMCAT_NAME</span>
<span class="token assign-left variable">ROOT</span><span class="token operator">=</span><span class="token variable">$TOMCAT_DIR</span>/webapps/ROOT
 
<span class="token assign-left variable">BACKUP_DIR</span><span class="token operator">=</span>/data/backup
<span class="token assign-left variable">WORK_DIR</span><span class="token operator">=</span>/tmp
<span class="token assign-left variable">PROJECT_NAME</span><span class="token operator">=</span>tomcat-java-demo
 
<span class="token comment"># 拉取代码</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$WORK_DIR</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -d <span class="token variable">$PROJECT_NAME</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
   <span class="token function">git</span> clone <span class="token punctuation">[</span>url<span class="token operator">=</span>https://github.com/lizhenliang/tomcat-java-demo<span class="token punctuation">]</span>https://github.com/lizhenliang/tomcat-java-demo<span class="token punctuation">[</span>/url<span class="token punctuation">]</span>
   <span class="token builtin class-name">cd</span> <span class="token variable">$PROJECT_NAME</span>
<span class="token keyword">else</span>
   <span class="token builtin class-name">cd</span> <span class="token variable">$PROJECT_NAME</span>
   <span class="token function">git</span> pull
<span class="token keyword">fi</span>
 
<span class="token comment"># 构建</span>
mvn clean package -Dmaven.test.skip<span class="token operator">=</span>true
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> -ne <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">"maven build failure!"</span>
   <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
 
<span class="token comment"># 部署</span>
<span class="token assign-left variable">TOMCAT_PID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> -ef <span class="token operator">|</span><span class="token function">grep</span> <span class="token string">"<span class="token variable">$TOMCAT_NAME</span>"</span> <span class="token operator">|</span><span class="token function">egrep</span> -v <span class="token string">"grep|<span class="token variable">$$</span>"</span> <span class="token operator">|</span><span class="token function">awk</span> <span class="token string">'NR==1{print $2}'</span><span class="token variable">)</span></span>
<span class="token punctuation">[</span> -n <span class="token string">"<span class="token variable">$TOMCAT_PID</span>"</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">kill</span> -9 <span class="token variable">$TOMCAT_PID</span>
<span class="token punctuation">[</span> -d <span class="token variable">$ROOT</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mv</span> <span class="token variable">$ROOT</span> <span class="token variable">$BACKUP_DIR</span>/<span class="token variable">${TOMCAT_NAME}</span>_ROOT<span class="token variable">$DATE</span>
<span class="token function">unzip</span> <span class="token variable">$WORK_DIR</span>/<span class="token variable">$PROJECT_NAME</span>/target/*.war -d <span class="token variable">$ROOT</span>
<span class="token variable">$TOMCAT_DIR</span>/bin/startup.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="_36、自动发布php项目脚本" tabindex="-1"><a class="header-anchor" href="#_36、自动发布php项目脚本" aria-hidden="true">#</a> 36、自动发布PHP项目脚本</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">DATE</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +%F_%T<span class="token variable">)</span></span>
 
<span class="token assign-left variable">WWWROOT</span><span class="token operator">=</span>/usr/local/nginx/html/<span class="token variable">$1</span>
 
 
<span class="token assign-left variable">BACKUP_DIR</span><span class="token operator">=</span>/data/backup
<span class="token assign-left variable">WORK_DIR</span><span class="token operator">=</span>/tmp
<span class="token assign-left variable">PROJECT_NAME</span><span class="token operator">=</span>php-demo
 
 
<span class="token comment"># 拉取代码</span>
<span class="token builtin class-name">cd</span> <span class="token variable">$WORK_DIR</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -d <span class="token variable">$PROJECT_NAME</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
   <span class="token function">git</span> clone <span class="token punctuation">[</span>url<span class="token operator">=</span>https://github.com/lizhenliang/php-demo<span class="token punctuation">]</span>https://github.com/lizhenliang/php-demo<span class="token punctuation">[</span>/url<span class="token punctuation">]</span>
   <span class="token builtin class-name">cd</span> <span class="token variable">$PROJECT_NAME</span>
<span class="token keyword">else</span>
   <span class="token builtin class-name">cd</span> <span class="token variable">$PROJECT_NAME</span>
   <span class="token function">git</span> pull
<span class="token keyword">fi</span>
 
 
<span class="token comment"># 部署</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> -d <span class="token variable">$WWWROOT</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
   <span class="token function">mkdir</span> -p <span class="token variable">$WWWROOT</span>
   <span class="token function">rsync</span> -avz --exclude<span class="token operator">=</span>.git <span class="token variable">$WORK_DIR</span>/<span class="token variable">$PROJECT_NAME</span>/* <span class="token variable">$WWWROOT</span>
<span class="token keyword">else</span>
   <span class="token function">rsync</span> -avz --exclude<span class="token operator">=</span>.git <span class="token variable">$WORK_DIR</span>/<span class="token variable">$PROJECT_NAME</span>/* <span class="token variable">$WWWROOT</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div></template>
