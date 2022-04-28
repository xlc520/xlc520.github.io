import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{c as s}from"./app.f1128457.js";const a={},e=s(`<h1 id="\u5B9E\u7528-shell-\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u7528-shell-\u811A\u672C" aria-hidden="true">#</a> \u5B9E\u7528 shell \u811A\u672C</h1><h2 id="_1\u3001\u670D\u52A1\u5668\u7CFB\u7EDF\u914D\u7F6E\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u670D\u52A1\u5668\u7CFB\u7EDF\u914D\u7F6E\u521D\u59CB\u5316" aria-hidden="true">#</a> 1\u3001\u670D\u52A1\u5668\u7CFB\u7EDF\u914D\u7F6E\u521D\u59CB\u5316</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#/bin/bash
# \u5B89\u88C5\u7CFB\u7EDF\u6027\u80FD\u5206\u6790\u5DE5\u5177\u53CA\u5176\u4ED6
yum install gcc make autoconf vim sysstat net-tools iostat iftop iotp wget lrzsz lsof unzip openssh-clients net-tool vim ntpdate -y
# \u8BBE\u7F6E\u65F6\u533A\u5E76\u540C\u6B65\u65F6\u95F4
ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
if ! crontab -l |grep ntpdate &amp;&gt;/dev/null ; then
    (echo &quot;* 1 * * * ntpdate time.windows.com &gt;/dev/null 2&gt;&amp;1&quot;;crontab -l) |crontab 
fi
 
# \u7981\u7528selinux
sed -i &#39;/SELINUX/{s/permissive/disabled/}&#39; /etc/selinux/config
 
# \u5173\u95ED\u9632\u706B\u5899
if egrep &quot;7.[0-9]&quot; /etc/redhat-release &amp;&gt;/dev/null; then
    systemctl stop firewalld
    systemctl disable firewalld
elif egrep &quot;6.[0-9]&quot; /etc/redhat-release &amp;&gt;/dev/null; then
    service iptables stop
    chkconfig iptables off
fi
 
# \u5386\u53F2\u547D\u4EE4\u663E\u793A\u64CD\u4F5C\u65F6\u95F4
if ! grep HISTTIMEFORMAT /etc/bashrc; then
    echo &#39;export HISTTIMEFORMAT=&quot;%Y-%m-%d %H:%M:%S  \`whoami\` &quot;&#39; &gt;&gt; /etc/bashrc
fi
 
# SSH\u8D85\u65F6\u65F6\u95F4
if ! grep &quot;TMOUT=600&quot; /etc/profile &amp;&gt;/dev/null; then
    echo &quot;export TMOUT=600&quot; &gt;&gt; /etc/profile
fi
 
# \u7981\u6B62root\u8FDC\u7A0B\u767B\u5F55 \u5207\u8BB0\u7ED9\u7CFB\u7EDF\u6DFB\u52A0\u666E\u901A\u7528\u6237\uFF0C\u7ED9su\u5230root\u7684\u6743\u9650
sed -i &#39;s/#PermitRootLogin yes/PermitRootLogin no/&#39; /etc/ssh/sshd_config
 
# \u7981\u6B62\u5B9A\u65F6\u4EFB\u52A1\u5411\u53D1\u9001\u90AE\u4EF6
sed -i &#39;s/^MAILTO=root/MAILTO=&quot;&quot;/&#39; /etc/crontab 
 
# \u8BBE\u7F6E\u6700\u5927\u6253\u5F00\u6587\u4EF6\u6570
if ! grep &quot;* soft nofile 65535&quot; /etc/security/limits.conf &amp;&gt;/dev/null; then
cat &gt;&gt; /etc/security/limits.conf &lt;&lt; EOF
    * soft nofile 65535
    * hard nofile 65535
EOF
fi
 
# \u7CFB\u7EDF\u5185\u6838\u4F18\u5316
cat &gt;&gt; /etc/sysctl.conf &lt;&lt; EOF
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_max_tw_buckets = 20480
net.ipv4.tcp_max_syn_backlog = 20480
net.core.netdev_max_backlog = 262144
net.ipv4.tcp_fin_timeout = 20  
EOF
 
# \u51CF\u5C11SWAP\u4F7F\u7528
echo &quot;0&quot; &gt; /proc/sys/vm/swappiness
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br></div></div><h2 id="_2\u3001\u6279\u91CF\u521B\u5EFA\u591A\u4E2A\u7528\u6237\u5E76\u8BBE\u7F6E\u5BC6\u7801" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u6279\u91CF\u521B\u5EFA\u591A\u4E2A\u7528\u6237\u5E76\u8BBE\u7F6E\u5BC6\u7801" aria-hidden="true">#</a> 2\u3001\u6279\u91CF\u521B\u5EFA\u591A\u4E2A\u7528\u6237\u5E76\u8BBE\u7F6E\u5BC6\u7801</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
USER_LIST=$@
USER_FILE=./user.info
for USER in $USER_LIST;do
 if ! id $USER &amp;&gt;/dev/null; then
  PASS=$(echo $RANDOM |md5sum |cut -c 1-8)
  useradd $USER
  echo $PASS | passwd --stdin $USER &amp;&gt;/dev/null
  echo &quot;$USER   $PASS&quot; &gt;&gt; $USER_FILE
  echo &quot;$USER User create successful.&quot;
 else
  echo &quot;$USER User already exists!&quot;
 fi
done
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_3\u3001\u4E00\u952E\u67E5\u770B\u670D\u52A1\u5668\u5229\u7528\u7387" tabindex="-1"><a class="header-anchor" href="#_3\u3001\u4E00\u952E\u67E5\u770B\u670D\u52A1\u5668\u5229\u7528\u7387" aria-hidden="true">#</a> 3\u3001\u4E00\u952E\u67E5\u770B\u670D\u52A1\u5668\u5229\u7528\u7387</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
function cpu(){
 
 util=$(vmstat | awk &#39;{if(NR==3)print $13+$14}&#39;)
 iowait=$(vmstat | awk &#39;{if(NR==3)print $16}&#39;)
 echo &quot;CPU -\u4F7F\u7528\u7387\uFF1A\${util}% ,\u7B49\u5F85\u78C1\u76D8IO\u76F8\u5E94\u4F7F\u7528\u7387\uFF1A\${iowait}:\${iowait}%&quot;
 
}
function memory (){
 
 total=\`free -m |awk &#39;{if(NR==2)printf &quot;%.1f&quot;,$2/1024}&#39;\`
    used=\`free -m |awk &#39;{if(NR==2) printf &quot;%.1f&quot;,($2-$NF)/1024}&#39;\`
    available=\`free -m |awk &#39;{if(NR==2) printf &quot;%.1f&quot;,$NF/1024}&#39;\`
    echo &quot;\u5185\u5B58 - \u603B\u5927\u5C0F: \${total}G , \u4F7F\u7528: \${used}G , \u5269\u4F59: \${available}G&quot;
}
disk(){
 
 fs=$(df -h |awk &#39;/^\\/dev/{print $1}&#39;)
    for p in $fs; do
        mounted=$(df -h |awk &#39;$1==&quot;&#39;$p&#39;&quot;{print $NF}&#39;)
        size=$(df -h |awk &#39;$1==&quot;&#39;$p&#39;&quot;{print $2}&#39;)
        used=$(df -h |awk &#39;$1==&quot;&#39;$p&#39;&quot;{print $3}&#39;)
        used_percent=$(df -h |awk &#39;$1==&quot;&#39;$p&#39;&quot;{print $5}&#39;)
        echo &quot;\u786C\u76D8 - \u6302\u8F7D\u70B9: $mounted , \u603B\u5927\u5C0F: $size , \u4F7F\u7528: $used , \u4F7F\u7528\u7387: $used_percent&quot;
    done
 
}
function tcp_status() {
    summary=$(ss -antp |awk &#39;{status[$1]++}END{for(i in status) printf i&quot;:&quot;status[i]&quot; &quot;}&#39;)
    echo &quot;TCP\u8FDE\u63A5\u72B6\u6001 - $summary&quot;
}
cpu
memory
disk
tcp_status
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><h2 id="_4\u3001\u627E\u51FA\u5360\u7528cpu-\u5185\u5B58\u8FC7\u9AD8\u7684\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u627E\u51FA\u5360\u7528cpu-\u5185\u5B58\u8FC7\u9AD8\u7684\u8FDB\u7A0B" aria-hidden="true">#</a> 4\u3001\u627E\u51FA\u5360\u7528CPU \u5185\u5B58\u8FC7\u9AD8\u7684\u8FDB\u7A0B</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
echo &quot;-------------------CUP\u5360\u7528\u524D10\u6392\u5E8F--------------------------------&quot;
ps -eo user,pid,pcpu,pmem,args --sort=-pcpu  |head -n 10
echo &quot;-------------------\u5185\u5B58\u5360\u7528\u524D10\u6392\u5E8F--------------------------------&quot;
ps -eo user,pid,pcpu,pmem,args --sort=-pmem  |head -n 10
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_5\u3001\u67E5\u770B\u7F51\u5361\u7684\u5B9E\u65F6\u6D41\u91CF" tabindex="-1"><a class="header-anchor" href="#_5\u3001\u67E5\u770B\u7F51\u5361\u7684\u5B9E\u65F6\u6D41\u91CF" aria-hidden="true">#</a> 5\u3001\u67E5\u770B\u7F51\u5361\u7684\u5B9E\u65F6\u6D41\u91CF</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
eth0=$1
echo  -e    &quot;\u6D41\u91CF\u8FDB\u5165--\u6D41\u91CF\u4F20\u51FA    &quot;
while true; do
 old_in=$(cat /proc/net/dev |grep $eth0 |awk &#39;{print $2}&#39;)
 old_out=$(cat /proc/net/dev |grep $eth0 |awk &#39;{print $10}&#39;)
 sleep 1
 new_in=$(cat /proc/net/dev |grep $eth0 |awk &#39;{print $2}&#39;)
 new_out=$(cat /proc/net/dev |grep $eth0 |awk &#39;{print $10}&#39;)
 in=$(printf &quot;%.1f%s&quot; &quot;$((($new_in-$old_in)/1024))&quot; &quot;KB/s&quot;)
 out=$(printf &quot;%.1f%s&quot; &quot;$((($new_out-$old_out)/1024))&quot; &quot;KB/s&quot;)
 echo &quot;$in $out&quot;
done
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="_6\u3001\u76D1\u63A7\u591A\u53F0\u670D\u52A1\u5668\u78C1\u76D8\u5229\u7528\u7387\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_6\u3001\u76D1\u63A7\u591A\u53F0\u670D\u52A1\u5668\u78C1\u76D8\u5229\u7528\u7387\u811A\u672C" aria-hidden="true">#</a> 6\u3001\u76D1\u63A7\u591A\u53F0\u670D\u52A1\u5668\u78C1\u76D8\u5229\u7528\u7387\u811A\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
HOST_INFO=host.info
for IP in $(awk &#39;/^[^#]/{print $1}&#39; $HOST_INFO); do
 #\u53D6\u51FA\u7528\u6237\u540D\u548C\u7AEF\u53E3
    USER=$(awk -v ip=$IP &#39;ip==$1{print $2}&#39; $HOST_INFO)
    PORT=$(awk -v ip=$IP &#39;ip==$1{print $3}&#39; $HOST_INFO)
 #\u521B\u5EFA\u4E34\u65F6\u6587\u4EF6\uFF0C\u4FDD\u5B58\u4FE1\u606F
    TMP_FILE=/tmp/disk.tmp
 #\u901A\u8FC7\u516C\u94A5\u767B\u5F55\u83B7\u53D6\u4E3B\u673A\u78C1\u76D8\u4FE1\u606F
    ssh -p $PORT $USER@$IP &#39;df -h&#39; &gt; $TMP_FILE
 #\u5206\u6790\u78C1\u76D8\u5360\u7528\u7A7A\u95F4
    USE_RATE_LIST=$(awk &#39;BEGIN{OFS=&quot;=&quot;}/^\\/dev/{print $NF,int($5)}&#39; $TMP_FILE)
 #\u5FAA\u73AF\u78C1\u76D8\u5217\u8868\uFF0C\u8FDB\u884C\u5224\u65AD
    for USE_RATE in $USE_RATE_LIST; do
  #\u53D6\u51FA\u7B49\u53F7\uFF08=\uFF09\u53F3\u8FB9\u7684\u503C \u6302\u8F7D\u70B9\u540D\u79F0
        PART_NAME=\${USE_RATE%=*}  
  #\u53D6\u51FA\u7B49\u53F7\uFF08=\uFF09\u5DE6\u8FB9\u7684\u503C  \u78C1\u76D8\u5229\u7528\u7387
        USE_RATE=\${USE_RATE#*=}
  #\u8FDB\u884C\u5224\u65AD
        if [ $USE_RATE -ge 80 ]; then
            echo &quot;Warning: $PART_NAME Partition usage $USE_RATE%!&quot;
    echo &quot;\u670D\u52A1\u5668$IP\u7684\u78C1\u76D8\u7A7A\u95F4\u5360\u7528\u8FC7\u9AD8\uFF0C\u8BF7\u53CA\u65F6\u5904\u7406&quot; | mail -s &quot;\u7A7A\u95F4\u4E0D\u8DB3\u8B66\u544A&quot; \u4F60\u7684qq@qq.com
  else
   echo &quot;\u670D\u52A1\u5668$IP\u7684$PART_NAME\u76EE\u5F55\u7A7A\u95F4\u826F\u597D&quot;
        fi
    done
done
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="_7\u3001\u6279\u91CF\u68C0\u6D4B\u7F51\u7AD9\u662F\u5426\u5F02\u5E38\u5E76\u90AE\u4EF6\u901A\u77E5" tabindex="-1"><a class="header-anchor" href="#_7\u3001\u6279\u91CF\u68C0\u6D4B\u7F51\u7AD9\u662F\u5426\u5F02\u5E38\u5E76\u90AE\u4EF6\u901A\u77E5" aria-hidden="true">#</a> 7\u3001\u6279\u91CF\u68C0\u6D4B\u7F51\u7AD9\u662F\u5426\u5F02\u5E38\u5E76\u90AE\u4EF6\u901A\u77E5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash  
URL_LIST=&quot;www.baidu.com www.ctnrs.com www.der-matech.net.cn www.der-matech.com.cn www.der-matech.cn www.der-matech.top www.der-matech.org&quot;
for URL in $URL_LIST; do
    FAIL_COUNT=0
    for ((i=1;i&lt;=3;i++)); do
        HTTP_CODE=$(curl -o /dev/null --connect-timeout 3 -s -w &quot;%{http_code}&quot; $URL)
        if [ $HTTP_CODE -eq 200 ]; then
            echo &quot;$URL OK&quot;
            break
        else
            echo &quot;$URL retry $FAIL_COUNT&quot;
            let FAIL_COUNT++
        fi
    done
    if [ $FAIL_COUNT -eq 3 ]; then
        echo &quot;Warning: $URL Access failure!&quot;
  echo &quot;\u7F51\u7AD9$URL\u574F\u6389\uFF0C\u8BF7\u53CA\u65F6\u5904\u7406&quot; | mail -s &quot;$URL\u7F51\u7AD9\u9AD8\u5371&quot; 1794748404@qq.com
    fi
done
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="_8\u3001\u6279\u91CF\u4E3B\u673A\u8FDC\u7A0B\u6267\u884C\u547D\u4EE4\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_8\u3001\u6279\u91CF\u4E3B\u673A\u8FDC\u7A0B\u6267\u884C\u547D\u4EE4\u811A\u672C" aria-hidden="true">#</a> 8\u3001\u6279\u91CF\u4E3B\u673A\u8FDC\u7A0B\u6267\u884C\u547D\u4EE4\u811A\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
COMMAND=$*
HOST_INFO=host.info
for IP in $(awk &#39;/^[^#]/{print $1}&#39; $HOST_INFO); do
    USER=$(awk -v ip=$IP &#39;ip==$1{print $2}&#39; $HOST_INFO)
    PORT=$(awk -v ip=$IP &#39;ip==$1{print $3}&#39; $HOST_INFO)
    PASS=$(awk -v ip=$IP &#39;ip==$1{print $4}&#39; $HOST_INFO)
    expect -c &quot;
       spawn ssh -p $PORT $USER@$IP
       expect {
          \\&quot;(yes/no)\\&quot; {send \\&quot;yes\\r\\&quot;; exp_continue}
          \\&quot;password:\\&quot; {send \\&quot;$PASS\\r\\&quot;; exp_continue}
          \\&quot;$USER@*\\&quot; {send \\&quot;$COMMAND\\r exit\\r\\&quot;; exp_continue}
       }
    &quot;
    echo &quot;-------------------&quot;
done
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="_9\u3001\u4E00\u952E\u90E8\u7F72lnmp\u7F51\u7AD9\u5E73\u53F0\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_9\u3001\u4E00\u952E\u90E8\u7F72lnmp\u7F51\u7AD9\u5E73\u53F0\u811A\u672C" aria-hidden="true">#</a> 9\u3001\u4E00\u952E\u90E8\u7F72LNMP\u7F51\u7AD9\u5E73\u53F0\u811A\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
NGINX_V=1.15.6
PHP_V=5.6.36
TMP_DIR=/tmp
 
INSTALL_DIR=/usr/local
 
PWD_C=$PWD
 
echo
echo -e &quot;\\tMenu\\n&quot;
echo -e &quot;1. Install Nginx&quot;
echo -e &quot;2. Install PHP&quot;
echo -e &quot;3. Install MySQL&quot;
echo -e &quot;4. Deploy LNMP&quot;
echo -e &quot;9. Quit&quot;
 
function command_status_check() {
 if [ $? -ne 0 ]; then
  echo $1
  exit
 fi 
}
 
function install_nginx() {
    cd $TMP_DIR
    yum install -y gcc gcc-c++ make openssl-devel pcre-devel wget
    wget http://nginx.org/download/nginx-\${NGINX_V}.tar.gz
    tar zxf nginx-\${NGINX_V}.tar.gz
    cd nginx-\${NGINX_V}
    ./configure --prefix=$INSTALL_DIR/nginx \\
    --with-http_ssl_module \\
    --with-http_stub_status_module \\
    --with-stream
    command_status_check &quot;Nginx - \u5E73\u53F0\u73AF\u5883\u68C0\u67E5\u5931\u8D25\uFF01&quot;
    make -j 4 
    command_status_check &quot;Nginx - \u7F16\u8BD1\u5931\u8D25\uFF01&quot;
    make install
    command_status_check &quot;Nginx - \u5B89\u88C5\u5931\u8D25\uFF01&quot;
    mkdir -p $INSTALL_DIR/nginx/conf/vhost
    alias cp=cp ; cp -rf $PWD_C/nginx.conf $INSTALL_DIR/nginx/conf
    rm -rf $INSTALL_DIR/nginx/html/*
    echo &quot;ok&quot; &gt; $INSTALL_DIR/nginx/html/status.html
    echo &#39;&lt;?php echo &quot;ok&quot;?&gt;&#39; &gt; $INSTALL_DIR/nginx/html/status.php
    $INSTALL_DIR/nginx/sbin/nginx
    command_status_check &quot;Nginx - \u542F\u52A8\u5931\u8D25\uFF01&quot;
}
 
function install_php() {
 cd $TMP_DIR
    yum install -y gcc gcc-c++ make gd-devel libxml2-devel \\
        libcurl-devel libjpeg-devel libpng-devel openssl-devel \\
        libmcrypt-devel libxslt-devel libtidy-devel
    wget http://docs.php.net/distributions/php-\${PHP_V}.tar.gz
    tar zxf php-\${PHP_V}.tar.gz
    cd php-\${PHP_V}
    ./configure --prefix=$INSTALL_DIR/php \\
    --with-config-file-path=$INSTALL_DIR/php/etc \\
    --enable-fpm --enable-opcache \\
    --with-mysql --with-mysqli --with-pdo-mysql \\
    --with-openssl --with-zlib --with-curl --with-gd \\
    --with-jpeg-dir --with-png-dir --with-freetype-dir \\
    --enable-mbstring --enable-hash
    command_status_check &quot;PHP - \u5E73\u53F0\u73AF\u5883\u68C0\u67E5\u5931\u8D25\uFF01&quot;
    make -j 4 
    command_status_check &quot;PHP - \u7F16\u8BD1\u5931\u8D25\uFF01&quot;
    make install
    command_status_check &quot;PHP - \u5B89\u88C5\u5931\u8D25\uFF01&quot;
    cp php.ini-production $INSTALL_DIR/php/etc/php.ini
    cp sapi/fpm/php-fpm.conf $INSTALL_DIR/php/etc/php-fpm.conf
    cp sapi/fpm/init.d.php-fpm /etc/init.d/php-fpm
    chmod +x /etc/init.d/php-fpm
    /etc/init.d/php-fpm start
    command_status_check &quot;PHP - \u542F\u52A8\u5931\u8D25\uFF01&quot;
}
 
read -p &quot;\u8BF7\u8F93\u5165\u7F16\u53F7\uFF1A&quot; number
case $number in
    1)
        install_nginx;;
    2)
        install_php;;
    3)
        install_mysql;;
    4)
        install_nginx
        install_php
        ;;
    9)
        exit;;
esac
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br></div></div><h2 id="_10\u3001\u76D1\u63A7mysql\u4E3B\u4ECE\u540C\u6B65\u72B6\u6001\u662F\u5426\u5F02\u5E38\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_10\u3001\u76D1\u63A7mysql\u4E3B\u4ECE\u540C\u6B65\u72B6\u6001\u662F\u5426\u5F02\u5E38\u811A\u672C" aria-hidden="true">#</a> 10\u3001\u76D1\u63A7MySQL\u4E3B\u4ECE\u540C\u6B65\u72B6\u6001\u662F\u5426\u5F02\u5E38\u811A\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash  
HOST=localhost
USER=root
PASSWD=123.com
IO_SQL_STATUS=$(mysql -h$HOST -u$USER -p$PASSWD -e &#39;show slave status\\G&#39; 2&gt;/dev/null |awk &#39;/Slave_.*_Running:/{print $1$2}&#39;)
for i in $IO_SQL_STATUS; do
    THREAD_STATUS_NAME=\${i%:*}
    THREAD_STATUS=\${i#*:}
    if [ &quot;$THREAD_STATUS&quot; != &quot;Yes&quot; ]; then
        echo &quot;Error: MySQL Master-Slave $THREAD_STATUS_NAME status is $THREAD_STATUS!&quot; |mail -s &quot;Master-Slave Staus&quot; xxx@163.com
    fi
done
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="_11\u3001mysql\u6570\u636E\u5E93\u5907\u4EFD\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_11\u3001mysql\u6570\u636E\u5E93\u5907\u4EFD\u811A\u672C" aria-hidden="true">#</a> 11\u3001MySql\u6570\u636E\u5E93\u5907\u4EFD\u811A\u672C</h2><h6 id="\u5206\u5E93\u5907\u4EFD" tabindex="-1"><a class="header-anchor" href="#\u5206\u5E93\u5907\u4EFD" aria-hidden="true">#</a> \u5206\u5E93\u5907\u4EFD</h6><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysqldump -uroot -pxxx -B A &gt; A.sql
#!/bin/bash
DATE=$(date +%F_%H-%M-%S)
HOST=localhost
USER=backup
PASS=123.com
BACKUP_DIR=/data/db_backup
DB_LIST=$(mysql -h$HOST -u$USER -p$PASS -s -e &quot;show databases;&quot; 2&gt;/dev/null |egrep -v &quot;Database|information_schema|mysql|performance_schema|sys&quot;)
 
for DB in $DB_LIST; do
    BACKUP_NAME=$BACKUP_DIR/\${DB}_\${DATE}.sql
    if ! mysqldump -h$HOST -u$USER -p$PASS -B $DB &gt; $BACKUP_NAME 2&gt;/dev/null; then
        echo &quot;$BACKUP_NAME \u5907\u4EFD\u5931\u8D25!&quot;
    fi
done
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h6 id="\u5206\u8868\u5907\u4EFD" tabindex="-1"><a class="header-anchor" href="#\u5206\u8868\u5907\u4EFD" aria-hidden="true">#</a> \u5206\u8868\u5907\u4EFD</h6><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mysqldump -uroot -pxxx -A t &gt; t.sql
#!/bin/bash
DATE=$(date +%F_%H-%M-%S)
HOST=localhost
USER=backup
PASS=123.com
BACKUP_DIR=/data/db_backup
DB_LIST=$(mysql -h$HOST -u$USER -p$PASS -s -e &quot;show databases;&quot; 2&gt;/dev/null |egrep -v &quot;Database|information_schema|mysql|performance_schema|sys&quot;)
 
for DB in $DB_LIST; do
    BACKUP_DB_DIR=$BACKUP_DIR/\${DB}_\${DATE}
    [ ! -d $BACKUP_DB_DIR ] &amp;&amp; mkdir -p $BACKUP_DB_DIR &amp;&gt;/dev/null
    TABLE_LIST=$(mysql -h$HOST -u$USER -p$PASS -s -e &quot;use $DB;show tables;&quot; 2&gt;/dev/null)
    for TABLE in $TABLE_LIST; do
        BACKUP_NAME=$BACKUP_DB_DIR/\${TABLE}.sql 
        if ! mysqldump -h$HOST -u$USER -p$PASS $DB $TABLE &gt; $BACKUP_NAME 2&gt;/dev/null; then
            echo &quot;$BACKUP_NAME \u5907\u4EFD\u5931\u8D25!&quot;
        fi
    done
done
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="_12\u3001nginx\u8BBF\u95EE\u65E5\u5FD7\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#_12\u3001nginx\u8BBF\u95EE\u65E5\u5FD7\u5206\u6790" aria-hidden="true">#</a> 12\u3001Nginx\u8BBF\u95EE\u65E5\u5FD7\u5206\u6790</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
# \u65E5\u5FD7\u683C\u5F0F: $remote_addr - $remote_user [$time_local] &quot;$request&quot; $status $body_bytes_sent &quot;$http_referer&quot; &quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;
LOG_FILE=$1
echo &quot;\u7EDF\u8BA1\u8BBF\u95EE\u6700\u591A\u768410\u4E2AIP&quot;
awk &#39;{a[$1]++}END{print &quot;UV:&quot;,length(a);for(v in a)print v,a[v]}&#39; $LOG_FILE |sort -k2 -nr |head -10
echo &quot;----------------------&quot;
 
echo &quot;\u7EDF\u8BA1\u65F6\u95F4\u6BB5\u8BBF\u95EE\u6700\u591A\u7684IP&quot;
awk &#39;$4&gt;=&quot;[01/Dec/2018:13:20:25&quot; &amp;&amp; $4&lt;=&quot;[27/Nov/2018:16:20:49&quot;{a[$1]++}END{for(v in a)print v,a[v]}&#39; $LOG_FILE |sort -k2 -nr|head -10
echo &quot;----------------------&quot;
 
echo &quot;\u7EDF\u8BA1\u8BBF\u95EE\u6700\u591A\u768410\u4E2A\u9875\u9762&quot;
awk &#39;{a[$7]++}END{print &quot;PV:&quot;,length(a);for(v in a){if(a[v]&gt;10)print v,a[v]}}&#39; $LOG_FILE |sort -k2 -nr
echo &quot;----------------------&quot;
 
echo &quot;\u7EDF\u8BA1\u8BBF\u95EE\u9875\u9762\u72B6\u6001\u7801\u6570\u91CF&quot;
awk &#39;{a[$7&quot; &quot;$9]++}END{for(v in a){if(a[v]&gt;5)print v,a[v]}}&#39; $LOG_FILE |sort -k3 -nr
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="_13\u3001nginx\u8BBF\u95EE\u65E5\u5FD7\u81EA\u52A8\u6309\u5929-\u5468\u3001\u6708-\u5207\u5272" tabindex="-1"><a class="header-anchor" href="#_13\u3001nginx\u8BBF\u95EE\u65E5\u5FD7\u81EA\u52A8\u6309\u5929-\u5468\u3001\u6708-\u5207\u5272" aria-hidden="true">#</a> 13\u3001Nginx\u8BBF\u95EE\u65E5\u5FD7\u81EA\u52A8\u6309\u5929\uFF08\u5468\u3001\u6708\uFF09\u5207\u5272</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
#nginx\u65E5\u5FD7\u76EE\u5F55
LOG_DIR=/www/server/nginx/logs
#\u83B7\u53D6\u5230\u4E0A\u4E00\u5929\u7684\u65F6\u95F4
YESTERDAY_TIME=$(date -d &quot;yesterday&quot; +%F)
#\u5F52\u6863\u65E5\u5FD7\u53D6\u65F6\u95F4
LOG_MONTH_DIR=$LOG_DIR/$(date +&quot;%Y-%m&quot;)
#\u5F52\u6863\u65E5\u5FD7\u7684\u540D\u79F0
LOG_FILE_LIST=&quot;access.log&quot;
 
for LOG_FILE in $LOG_FILE_LIST; do
    [ ! -d $LOG_MONTH_DIR ] &amp;&amp; mkdir -p $LOG_MONTH_DIR
    mv $LOG_DIR/$LOG_FILE $LOG_MONTH_DIR/\${LOG_FILE}_\${YESTERDAY_TIME}
done
 
kill -USR1 $(cat $LOG_DIR/nginx.pid)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="_14\u3001\u81EA\u52A8\u53D1\u5E03java\u9879\u76EE-tomcat" tabindex="-1"><a class="header-anchor" href="#_14\u3001\u81EA\u52A8\u53D1\u5E03java\u9879\u76EE-tomcat" aria-hidden="true">#</a> 14\u3001\u81EA\u52A8\u53D1\u5E03Java\u9879\u76EE\uFF08Tomcat\uFF09</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
DATE=$(date +%F_%T)
 
TOMCAT_NAME=$1
TOMCAT_DIR=/usr/local/$TOMCAT_NAME
ROOT=$TOMCAT_DIR/webapps/ROOT
 
BACKUP_DIR=/data/backup
WORK_DIR=/tmp
PROJECT_NAME=tomcat-java-demo
 
# \u62C9\u53D6\u4EE3\u7801
cd $WORK_DIR
if [ ! -d $PROJECT_NAME ]; then
   git clone https://github.com/lizhenliang/tomcat-java-demo
   cd $PROJECT_NAME
else
   cd $PROJECT_NAME
   git pull
fi
 
# \u6784\u5EFA
mvn clean package -Dmaven.test.skip=true
if [ $? -ne 0 ]; then
   echo &quot;maven build failure!&quot;
   exit 1
fi
 
# \u90E8\u7F72
TOMCAT_PID=$(ps -ef |grep &quot;$TOMCAT_NAME&quot; |egrep -v &quot;grep|$$&quot; |awk &#39;NR==1{print $2}&#39;)
[ -n &quot;$TOMCAT_PID&quot; ] &amp;&amp; kill -9 $TOMCAT_PID
[ -d $ROOT ] &amp;&amp; mv $ROOT $BACKUP_DIR/\${TOMCAT_NAME}_ROOT$DATE
unzip $WORK_DIR/$PROJECT_NAME/target/*.war -d $ROOT
$TOMCAT_DIR/bin/startup.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="_15\u3001\u81EA\u52A8\u53D1\u5E03php\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_15\u3001\u81EA\u52A8\u53D1\u5E03php\u9879\u76EE" aria-hidden="true">#</a> 15\u3001\u81EA\u52A8\u53D1\u5E03PHP\u9879\u76EE</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
 
DATE=$(date +%F_%T)
 
WWWROOT=/usr/local/nginx/html/$1
 
 
BACKUP_DIR=/data/backup
WORK_DIR=/tmp
PROJECT_NAME=php-demo
 
 
# \u62C9\u53D6\u4EE3\u7801
cd $WORK_DIR
if [ ! -d $PROJECT_NAME ]; then
   git clone https://github.com/lizhenliang/php-demo
   cd $PROJECT_NAME
else
   cd $PROJECT_NAME
   git pull
fi
 
 
# \u90E8\u7F72
if [ ! -d $WWWROOT ]; then
   mkdir -p $WWWROOT
   rsync -avz --exclude=.git $WORK_DIR/$PROJECT_NAME/* $WWWROOT
else
   rsync -avz --exclude=.git $WORK_DIR/$PROJECT_NAME/* $WWWROOT
fi
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h2 id="_16\u3001dos\u653B\u51FB\u9632\u8303-\u81EA\u52A8\u5C4F\u853D\u653B\u51FBip" tabindex="-1"><a class="header-anchor" href="#_16\u3001dos\u653B\u51FB\u9632\u8303-\u81EA\u52A8\u5C4F\u853D\u653B\u51FBip" aria-hidden="true">#</a> 16\u3001DOS\u653B\u51FB\u9632\u8303\uFF08\u81EA\u52A8\u5C4F\u853D\u653B\u51FBIP\uFF09</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
DATE=$(date +%d/%b/%Y:%H:%M)
#nginx\u65E5\u5FD7
LOG_FILE=/usr/local/nginx/logs/demo2.access.log
#\u5206\u6790ip\u7684\u8BBF\u95EE\u60C5\u51B5
ABNORMAL_IP=$(tail -n5000 $LOG_FILE |grep $DATE |awk &#39;{a[$1]++}END{for(i in a)if(a[i]&gt;10)print i}&#39;)
for IP in $ABNORMAL_IP; do
    if [ $(iptables -vnL |grep -c &quot;$IP&quot;) -eq 0 ]; then
        iptables -I INPUT -s $IP -j DROP
        echo &quot;$(date +&#39;%F_%T&#39;) $IP&quot; &gt;&gt; /tmp/drop_ip.log
    fi
done
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="_17\u3001\u76EE\u5F55\u5165\u4FB5\u68C0\u6D4B\u4E0E\u544A\u8B66" tabindex="-1"><a class="header-anchor" href="#_17\u3001\u76EE\u5F55\u5165\u4FB5\u68C0\u6D4B\u4E0E\u544A\u8B66" aria-hidden="true">#</a> 17\u3001\u76EE\u5F55\u5165\u4FB5\u68C0\u6D4B\u4E0E\u544A\u8B66</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
 
MON_DIR=/opt
inotifywait -mqr --format %f -e create $MON_DIR |\\
while read files; do
   #\u540C\u6B65\u6587\u4EF6
   rsync -avz /opt /tmp/opt
  #\u68C0\u6D4B\u6587\u4EF6\u662F\u5426\u88AB\u4FEE\u6539
   #echo &quot;$(date +&#39;%F %T&#39;) create $files&quot; | mail -s &quot;dir monitor&quot; xxx@163.com
done
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_18\u3001dos\u653B\u51FB\u9632\u8303-\u81EA\u52A8\u5C4F\u853D\u653B\u51FBip" tabindex="-1"><a class="header-anchor" href="#_18\u3001dos\u653B\u51FB\u9632\u8303-\u81EA\u52A8\u5C4F\u853D\u653B\u51FBip" aria-hidden="true">#</a> 18\u3001Dos\u653B\u51FB\u9632\u8303\uFF08\u81EA\u52A8\u5C4F\u853D\u653B\u51FBIP\uFF09</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
DATE=$(date +%d/%b/%Y:%H:%M)
LOG_FILE=/usr/local/nginx/logs/demo2.access.log
ABNORMAL_IP=$(tail -n5000 $LOG_FILE |grep $DATE |awk &#39;{a[$1]++}END{for(i in a)if(a[i]&gt;10)print i}&#39;)
for IP in $ABNORMAL_IP; do
    if [ $(iptables -vnL |grep -c &quot;$IP&quot;) -eq 0 ]; then
        iptables -I INPUT -s $IP -j DROP
        echo &quot;$(date +&#39;%F_%T&#39;) $IP&quot; &gt;&gt; /tmp/drop_ip.log
    fi
done
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="_19\u3001linux\u7CFB\u7EDF\u53D1\u9001\u544A\u8B66\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_19\u3001linux\u7CFB\u7EDF\u53D1\u9001\u544A\u8B66\u811A\u672C" aria-hidden="true">#</a> 19\u3001Linux\u7CFB\u7EDF\u53D1\u9001\u544A\u8B66\u811A\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code># yum install mailx
# vi /etc/mail.rc  
set from=baojingtongzhi@163.com smtp=smtp.163.com
set smtp-auth-user=baojingtongzhi@163.com smtp-auth-password=123456
set smtp-auth=login
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="_20\u3001mysql\u6570\u636E\u5E93\u5907\u4EFD\u5355\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#_20\u3001mysql\u6570\u636E\u5E93\u5907\u4EFD\u5355\u5FAA\u73AF" aria-hidden="true">#</a> 20\u3001MySQL\u6570\u636E\u5E93\u5907\u4EFD\u5355\u5FAA\u73AF</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
DATE=$(date +%F_%H-%M-%S)
HOST=localhost
USER=backup
PASS=123.com
BACKUP_DIR=/data/db_backup
DB_LIST=$(mysql -h$HOST -u$USER -p$PASS -s -e &quot;show databases;&quot; 2&gt;/dev/null |egrep -v &quot;Database|information_schema|mysql|performance_schema|sys&quot;)
 
for DB in $DB_LIST; do
    BACKUP_NAME=$BACKUP_DIR/\${DB}_\${DATE}.sql
    if ! mysqldump -h$HOST -u$USER -p$PASS -B $DB &gt; $BACKUP_NAME 2&gt;/dev/null; then
        echo &quot;$BACKUP_NAME \u5907\u4EFD\u5931\u8D25!&quot;
    fi
done
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_21\u3001mysql\u6570\u636E\u5E93\u5907\u4EFD\u591A\u5FAA\u73AF" tabindex="-1"><a class="header-anchor" href="#_21\u3001mysql\u6570\u636E\u5E93\u5907\u4EFD\u591A\u5FAA\u73AF" aria-hidden="true">#</a> 21\u3001MySQL\u6570\u636E\u5E93\u5907\u4EFD\u591A\u5FAA\u73AF</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
DATE=$(date +%F_%H-%M-%S)
HOST=localhost
USER=backup
PASS=123.com
BACKUP_DIR=/data/db_backup
DB_LIST=$(mysql -h$HOST -u$USER -p$PASS -s -e &quot;show databases;&quot; 2&gt;/dev/null |egrep -v &quot;Database|information_schema|mysql|performance_schema|sys&quot;)
 
for DB in $DB_LIST; do
    BACKUP_DB_DIR=$BACKUP_DIR/\${DB}_\${DATE}
    [ ! -d $BACKUP_DB_DIR ] &amp;&amp; mkdir -p $BACKUP_DB_DIR &amp;&gt;/dev/null
    TABLE_LIST=$(mysql -h$HOST -u$USER -p$PASS -s -e &quot;use $DB;show tables;&quot; 2&gt;/dev/null)
    for TABLE in $TABLE_LIST; do
        BACKUP_NAME=$BACKUP_DB_DIR/\${TABLE}.sql 
        if ! mysqldump -h$HOST -u$USER -p$PASS $DB $TABLE &gt; $BACKUP_NAME 2&gt;/dev/null; then
            echo &quot;$BACKUP_NAME \u5907\u4EFD\u5931\u8D25!&quot;
        fi
    done
done
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="_22\u3001nginx-\u8BBF\u95EE\u8BBF\u95EE\u65E5\u5FD7\u6309\u5929\u5207\u5272" tabindex="-1"><a class="header-anchor" href="#_22\u3001nginx-\u8BBF\u95EE\u8BBF\u95EE\u65E5\u5FD7\u6309\u5929\u5207\u5272" aria-hidden="true">#</a> 22\u3001Nginx \u8BBF\u95EE\u8BBF\u95EE\u65E5\u5FD7\u6309\u5929\u5207\u5272</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
LOG_DIR=/usr/local/nginx/logs
YESTERDAY_TIME=$(date -d &quot;yesterday&quot; +%F)
LOG_MONTH_DIR=$LOG_DIR/$(date +&quot;%Y-%m&quot;)
LOG_FILE_LIST=&quot;default.access.log&quot;
 
for LOG_FILE in $LOG_FILE_LIST; do
    [ ! -d $LOG_MONTH_DIR ] &amp;&amp; mkdir -p $LOG_MONTH_DIR
    mv $LOG_DIR/$LOG_FILE $LOG_MONTH_DIR/\${LOG_FILE}_\${YESTERDAY_TIME}
done
 
kill -USR1 $(cat /var/run/nginx.pid)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="_23\u3001nginx\u8BBF\u95EE\u65E5\u5FD7\u5206\u6790\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_23\u3001nginx\u8BBF\u95EE\u65E5\u5FD7\u5206\u6790\u811A\u672C" aria-hidden="true">#</a> 23\u3001Nginx\u8BBF\u95EE\u65E5\u5FD7\u5206\u6790\u811A\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
# \u65E5\u5FD7\u683C\u5F0F: $remote_addr - $remote_user [$time_local] &quot;$request&quot; $status $body_bytes_sent &quot;$http_referer&quot; &quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;
LOG_FILE=$1
echo &quot;\u7EDF\u8BA1\u8BBF\u95EE\u6700\u591A\u768410\u4E2AIP&quot;
awk &#39;{a[$1]++}END{print &quot;UV:&quot;,length(a);for(v in a)print v,a[v]}&#39; $LOG_FILE |sort -k2 -nr |head -10
echo &quot;----------------------&quot;
 
echo &quot;\u7EDF\u8BA1\u65F6\u95F4\u6BB5\u8BBF\u95EE\u6700\u591A\u7684IP&quot;
awk &#39;$4&gt;=&quot;[01/Dec/2018:13:20:25&quot; &amp;&amp; $4&lt;=&quot;[27/Nov/2018:16:20:49&quot;{a[$1]++}END{for(v in a)print v,a[v]}&#39; $LOG_FILE |sort -k2 -nr|head -10
echo &quot;----------------------&quot;
 
echo &quot;\u7EDF\u8BA1\u8BBF\u95EE\u6700\u591A\u768410\u4E2A\u9875\u9762&quot;
awk &#39;{a[$7]++}END{print &quot;PV:&quot;,length(a);for(v in a){if(a[v]&gt;10)print v,a[v]}}&#39; $LOG_FILE |sort -k2 -nr
echo &quot;----------------------&quot;
 
echo &quot;\u7EDF\u8BA1\u8BBF\u95EE\u9875\u9762\u72B6\u6001\u7801\u6570\u91CF&quot;
awk &#39;{a[$7&quot; &quot;$9]++}END{for(v in a){if(a[v]&gt;5)print v,a[v]}}&#39; $LOG_FILE |sort -k3 -nr
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="_24\u3001\u67E5\u770B\u7F51\u5361\u5B9E\u65F6\u6D41\u91CF\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_24\u3001\u67E5\u770B\u7F51\u5361\u5B9E\u65F6\u6D41\u91CF\u811A\u672C" aria-hidden="true">#</a> 24\u3001\u67E5\u770B\u7F51\u5361\u5B9E\u65F6\u6D41\u91CF\u811A\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
NIC=$1
echo -e &quot; In ------ Out&quot;
while true; do
    OLD_IN=$(awk &#39;$0~&quot;&#39;$NIC&#39;&quot;{print $2}&#39; /proc/net/dev)
    OLD_OUT=$(awk &#39;$0~&quot;&#39;$NIC&#39;&quot;{print $10}&#39; /proc/net/dev)
    sleep 1
    NEW_IN=$(awk  &#39;$0~&quot;&#39;$NIC&#39;&quot;{print $2}&#39; /proc/net/dev)
    NEW_OUT=$(awk &#39;$0~&quot;&#39;$NIC&#39;&quot;{print $10}&#39; /proc/net/dev)
    IN=$(printf &quot;%.1f%s&quot; &quot;$((($NEW_IN-$OLD_IN)/1024))&quot; &quot;KB/s&quot;)
    OUT=$(printf &quot;%.1f%s&quot; &quot;$((($NEW_OUT-$OLD_OUT)/1024))&quot; &quot;KB/s&quot;)
    echo &quot;$IN $OUT&quot;
    sleep 1
done
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_25\u3001\u670D\u52A1\u5668\u7CFB\u7EDF\u914D\u7F6E\u521D\u59CB\u5316\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_25\u3001\u670D\u52A1\u5668\u7CFB\u7EDF\u914D\u7F6E\u521D\u59CB\u5316\u811A\u672C" aria-hidden="true">#</a> 25\u3001\u670D\u52A1\u5668\u7CFB\u7EDF\u914D\u7F6E\u521D\u59CB\u5316\u811A\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#/bin/bash
# \u8BBE\u7F6E\u65F6\u533A\u5E76\u540C\u6B65\u65F6\u95F4
ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
if ! crontab -l |grep ntpdate &amp;&gt;/dev/null ; then
    (echo &quot;* 1 * * * ntpdate time.windows.com &gt;/dev/null 2&gt;&amp;1&quot;;crontab -l) |crontab
fi
 
# \u7981\u7528selinux
sed -i &#39;/SELINUX/{s/permissive/disabled/}&#39; /etc/selinux/config
 
# \u5173\u95ED\u9632\u706B\u5899
if egrep &quot;7.[0-9]&quot; /etc/redhat-release &amp;&gt;/dev/null; then
    systemctl stop firewalld
    systemctl disable firewalld
elif egrep &quot;6.[0-9]&quot; /etc/redhat-release &amp;&gt;/dev/null; then
    service iptables stop
    chkconfig iptables off
fi
 
# \u5386\u53F2\u547D\u4EE4\u663E\u793A\u64CD\u4F5C\u65F6\u95F4
if ! grep HISTTIMEFORMAT /etc/bashrc; then
    echo &#39;export HISTTIMEFORMAT=&quot;%F %T \`whoami\` &quot;&#39; &gt;&gt; /etc/bashrc
fi
 
# SSH\u8D85\u65F6\u65F6\u95F4
if ! grep &quot;TMOUT=600&quot; /etc/profile &amp;&gt;/dev/null; then
    echo &quot;export TMOUT=600&quot; &gt;&gt; /etc/profile
fi
 
# \u7981\u6B62root\u8FDC\u7A0B\u767B\u5F55
sed -i &#39;s/#PermitRootLogin yes/PermitRootLogin no/&#39; /etc/ssh/sshd_config
 
# \u7981\u6B62\u5B9A\u65F6\u4EFB\u52A1\u5411\u53D1\u9001\u90AE\u4EF6
sed -i &#39;s/^MAILTO=root/MAILTO=&quot;&quot;/&#39; /etc/crontab
 
# \u8BBE\u7F6E\u6700\u5927\u6253\u5F00\u6587\u4EF6\u6570
if ! grep &quot;* soft nofile 65535&quot; /etc/security/limits.conf &amp;&gt;/dev/null; then
    cat &gt;&gt; /etc/security/limits.conf &lt;&lt; EOF
    * soft nofile 65535
    * hard nofile 65535
    EOF
fi
 
# \u7CFB\u7EDF\u5185\u6838\u4F18\u5316
cat &gt;&gt; /etc/sysctl.conf &lt;&lt; EOF
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_max_tw_buckets = 20480
net.ipv4.tcp_max_syn_backlog = 20480
net.core.netdev_max_backlog = 262144
net.ipv4.tcp_fin_timeout = 20  
EOF
 
# \u51CF\u5C11SWAP\u4F7F\u7528
echo &quot;0&quot; &gt; /proc/sys/vm/swappiness
 
# \u5B89\u88C5\u7CFB\u7EDF\u6027\u80FD\u5206\u6790\u5DE5\u5177\u53CA\u5176\u4ED6
yum install gcc make autoconf vim sysstat net-tools iostat iftop iotp lrzsz -y
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><h2 id="_26\u3001\u76D1\u63A7100\u53F0\u670D\u52A1\u5668\u78C1\u76D8\u5229\u7528\u7387\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_26\u3001\u76D1\u63A7100\u53F0\u670D\u52A1\u5668\u78C1\u76D8\u5229\u7528\u7387\u811A\u672C" aria-hidden="true">#</a> 26\u3001\u76D1\u63A7100\u53F0\u670D\u52A1\u5668\u78C1\u76D8\u5229\u7528\u7387\u811A\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
HOST_INFO=host.info
for IP in $(awk &#39;/^[^#]/{print $1}&#39; $HOST_INFO); do
    USER=$(awk -v ip=$IP &#39;ip==$1{print $2}&#39; $HOST_INFO)
    PORT=$(awk -v ip=$IP &#39;ip==$1{print $3}&#39; $HOST_INFO)
    TMP_FILE=/tmp/disk.tmp
    ssh -p $PORT $USER@$IP &#39;df -h&#39; &gt; $TMP_FILE
    USE_RATE_LIST=$(awk &#39;BEGIN{OFS=&quot;=&quot;}/^\\/dev/{print $NF,int($5)}&#39; $TMP_FILE)
    for USE_RATE in $USE_RATE_LIST; do
        PART_NAME=\${USE_RATE%=*}
        USE_RATE=\${USE_RATE#*=}
        if [ $USE_RATE -ge 80 ]; then
            echo &quot;Warning: $PART_NAME Partition usage $USE_RATE%!&quot;
        fi
    done
done
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="_27\u3001\u76D1\u63A7mysql\u4E3B\u4ECE\u540C\u6B65\u72B6\u6001\u662F\u5426\u5F02\u5E38\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_27\u3001\u76D1\u63A7mysql\u4E3B\u4ECE\u540C\u6B65\u72B6\u6001\u662F\u5426\u5F02\u5E38\u811A\u672C" aria-hidden="true">#</a> 27\u3001\u76D1\u63A7MySQL\u4E3B\u4ECE\u540C\u6B65\u72B6\u6001\u662F\u5426\u5F02\u5E38\u811A\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash  
HOST=localhost
USER=root
PASSWD=123.com
IO_SQL_STATUS=$(mysql -h$HOST -u$USER -p$PASSWD -e &#39;show slave status\\G&#39; 2&gt;/dev/null |awk &#39;/Slave_.*_Running:/{print $1$2}&#39;)
for i in $IO_SQL_STATUS; do
    THREAD_STATUS_NAME=\${i%:*}
    THREAD_STATUS=\${i#*:}
    if [ &quot;$THREAD_STATUS&quot; != &quot;Yes&quot; ]; then
        echo &quot;Error: MySQL Master-Slave $THREAD_STATUS_NAME status is $THREAD_STATUS!&quot; |mail -s &quot;Master-Slave Staus&quot; [url=mailto:xxx@163.com]xxx@163.com[/url]
    fi
done
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="_28\u3001\u76EE\u5F55\u6587\u4EF6\u53D8\u5316\u76D1\u63A7\u548C\u5B9E\u65F6\u6587\u4EF6\u540C\u6B65" tabindex="-1"><a class="header-anchor" href="#_28\u3001\u76EE\u5F55\u6587\u4EF6\u53D8\u5316\u76D1\u63A7\u548C\u5B9E\u65F6\u6587\u4EF6\u540C\u6B65" aria-hidden="true">#</a> 28\u3001\u76EE\u5F55\u6587\u4EF6\u53D8\u5316\u76D1\u63A7\u548C\u5B9E\u65F6\u6587\u4EF6\u540C\u6B65</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
 
MON_DIR=/opt
inotifywait -mqr --format %f -e create $MON_DIR |\\
while read files; do
   rsync -avz /opt /tmp/opt
   #echo &quot;$(date +&#39;%F %T&#39;) create $files&quot; | mail -s &quot;dir monitor&quot; [url=mailto:xxx@163.com]xxx@163.com[/url]
done
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_29\u3001\u6279\u91CF\u521B\u5EFA100\u7528\u6237\u5E76\u8BBE\u7F6E\u5BC6\u7801\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_29\u3001\u6279\u91CF\u521B\u5EFA100\u7528\u6237\u5E76\u8BBE\u7F6E\u5BC6\u7801\u811A\u672C" aria-hidden="true">#</a> 29\u3001\u6279\u91CF\u521B\u5EFA100\u7528\u6237\u5E76\u8BBE\u7F6E\u5BC6\u7801\u811A\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
DATE=$@
USER_FILE=user.txt
for USER in $USER_LIST; do
    if ! id $USER &amp;&gt;/dev/null; then
        PASS=$(echo $RANDOM |md5sum |cut -c 1-8)
        useradd $USER
        echo $PASS |passwd --stdin $USER &amp;&gt;/dev/null
        echo &quot;$USER   $PASS&quot; &gt;&gt; $USER_FILE
        echo &quot;$USER User create successful.&quot;
    else
        echo &quot;$USER User already exists!&quot;
    fi
done
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="_30\u3001\u6279\u91CF\u68C0\u6D4B\u7F51\u7AD9\u662F\u5426\u5F02\u5E38\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_30\u3001\u6279\u91CF\u68C0\u6D4B\u7F51\u7AD9\u662F\u5426\u5F02\u5E38\u811A\u672C" aria-hidden="true">#</a> 30\u3001\u6279\u91CF\u68C0\u6D4B\u7F51\u7AD9\u662F\u5426\u5F02\u5E38\u811A\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash  
URL_LIST=&quot;www.baidu.com [url=http://www.ctnrs.com]www.ctnrs.com[/url]&quot;
for URL in $URL_LIST; do
    FAIL_COUNT=0
    for ((i=1;i&lt;=3;i++)); do
        HTTP_CODE=$(curl -o /dev/null --connect-timeout 3 -s -w &quot;%{http_code}&quot; $URL)
        if [ $HTTP_CODE -eq 200 ]; then
            echo &quot;$URL OK&quot;
            break
        else
            echo &quot;$URL retry $FAIL_COUNT&quot;
            let FAIL_COUNT++
        fi
    done
    if [ $FAIL_COUNT -eq 3 ]; then
        echo &quot;Warning: $URL Access failure!&quot;
    fi
done
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="_31\u3001\u6279\u91CF\u4E3B\u673A\u8FDC\u7A0B\u6267\u884C\u547D\u4EE4\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_31\u3001\u6279\u91CF\u4E3B\u673A\u8FDC\u7A0B\u6267\u884C\u547D\u4EE4\u811A\u672C" aria-hidden="true">#</a> 31\u3001\u6279\u91CF\u4E3B\u673A\u8FDC\u7A0B\u6267\u884C\u547D\u4EE4\u811A\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
COMMAND=$*
HOST_INFO=host.info
for IP in $(awk &#39;/^[^#]/{print $1}&#39; $HOST_INFO); do
    USER=$(awk -v ip=$IP &#39;ip==$1{print $2}&#39; $HOST_INFO)
    PORT=$(awk -v ip=$IP &#39;ip==$1{print $3}&#39; $HOST_INFO)
    PASS=$(awk -v ip=$IP &#39;ip==$1{print $4}&#39; $HOST_INFO)
    expect -c &quot;
       spawn ssh -p $PORT $USER@$IP
       expect {
          \\&quot;(yes/no)\\&quot; {send \\&quot;yes\\r\\&quot;; exp_continue}
          \\&quot;password:\\&quot; {send \\&quot;$PASS\\r\\&quot;; exp_continue}
          \\&quot;$USER@*\\&quot; {send \\&quot;$COMMAND\\r exit\\r\\&quot;; exp_continue}
       }
    &quot;
    echo &quot;-------------------&quot;
done
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="_32\u3001\u4E00\u952E\u90E8\u7F72lnmp\u7F51\u7AD9\u5E73\u53F0\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_32\u3001\u4E00\u952E\u90E8\u7F72lnmp\u7F51\u7AD9\u5E73\u53F0\u811A\u672C" aria-hidden="true">#</a> 32\u3001\u4E00\u952E\u90E8\u7F72LNMP\u7F51\u7AD9\u5E73\u53F0\u811A\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
NGINX_V=1.15.6
PHP_V=5.6.36
TMP_DIR=/tmp
 
INSTALL_DIR=/usr/local
 
PWD_C=$PWD
 
echo
echo -e &quot;\\tMenu\\n&quot;
echo -e &quot;1. Install Nginx&quot;
echo -e &quot;2. Install PHP&quot;
echo -e &quot;3. Install MySQL&quot;
echo -e &quot;4. Deploy LNMP&quot;
echo -e &quot;9. Quit&quot;
 
function command_status_check() {
        if [ $? -ne 0 ]; then
                echo $1
                exit
        fi
}
 
function install_nginx() {
    cd $TMP_DIR
    yum install -y gcc gcc-c++ make openssl-devel pcre-devel wget
    wget [url=http://nginx.org/download/nginx-]http://nginx.org/download/nginx-[/url]\${NGINX_V}.tar.gz
    tar zxf nginx-\${NGINX_V}.tar.gz
    cd nginx-\${NGINX_V}
    ./configure --prefix=$INSTALL_DIR/nginx \\
    --with-http_ssl_module \\
    --with-http_stub_status_module \\
    --with-stream
    command_status_check &quot;Nginx - \u5E73\u53F0\u73AF\u5883\u68C0\u67E5\u5931\u8D25\uFF01&quot;
    make -j 4 
    command_status_check &quot;Nginx - \u7F16\u8BD1\u5931\u8D25\uFF01&quot;
    make install
    command_status_check &quot;Nginx - \u5B89\u88C5\u5931\u8D25\uFF01&quot;
    mkdir -p $INSTALL_DIR/nginx/conf/vhost
    alias cp=cp ; cp -rf $PWD_C/nginx.conf $INSTALL_DIR/nginx/conf
    rm -rf $INSTALL_DIR/nginx/html/*
    echo &quot;ok&quot; &gt; $INSTALL_DIR/nginx/html/status.html
    echo &#39;&lt;?php echo &quot;ok&quot;?&gt;&#39; &gt; $INSTALL_DIR/nginx/html/status.php
    $INSTALL_DIR/nginx/sbin/nginx
    command_status_check &quot;Nginx - \u542F\u52A8\u5931\u8D25\uFF01&quot;
}
 
function install_php() {
        cd $TMP_DIR
    yum install -y gcc gcc-c++ make gd-devel libxml2-devel \\
        libcurl-devel libjpeg-devel libpng-devel openssl-devel \\
        libmcrypt-devel libxslt-devel libtidy-devel
    wget [url=http://docs.php.net/distributions/php-]http://docs.php.net/distributions/php-[/url]\${PHP_V}.tar.gz
    tar zxf php-\${PHP_V}.tar.gz
    cd php-\${PHP_V}
    ./configure --prefix=$INSTALL_DIR/php \\
    --with-config-file-path=$INSTALL_DIR/php/etc \\
    --enable-fpm --enable-opcache \\
    --with-mysql --with-mysqli --with-pdo-mysql \\
    --with-openssl --with-zlib --with-curl --with-gd \\
    --with-jpeg-dir --with-png-dir --with-freetype-dir \\
    --enable-mbstring --enable-hash
    command_status_check &quot;PHP - \u5E73\u53F0\u73AF\u5883\u68C0\u67E5\u5931\u8D25\uFF01&quot;
    make -j 4 
    command_status_check &quot;PHP - \u7F16\u8BD1\u5931\u8D25\uFF01&quot;
    make install
    command_status_check &quot;PHP - \u5B89\u88C5\u5931\u8D25\uFF01&quot;
    cp php.ini-production $INSTALL_DIR/php/etc/php.ini
    cp sapi/fpm/php-fpm.conf $INSTALL_DIR/php/etc/php-fpm.conf
    cp sapi/fpm/init.d.php-fpm /etc/init.d/php-fpm
    chmod +x /etc/init.d/php-fpm
    /etc/init.d/php-fpm start
    command_status_check &quot;PHP - \u542F\u52A8\u5931\u8D25\uFF01&quot;
}
 
read -p &quot;\u8BF7\u8F93\u5165\u7F16\u53F7\uFF1A&quot; number
case $number in
    1)
        install_nginx;;
    2)
        install_php;;
    3)
        install_mysql;;
    4)
        install_nginx
        install_php
        ;;
    9)
        exit;;
esac
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br></div></div><h2 id="_33\u3001\u4E00\u952E\u67E5\u770B\u670D\u52A1\u5668\u8D44\u6E90\u5229\u7528\u7387" tabindex="-1"><a class="header-anchor" href="#_33\u3001\u4E00\u952E\u67E5\u770B\u670D\u52A1\u5668\u8D44\u6E90\u5229\u7528\u7387" aria-hidden="true">#</a> 33\u3001\u4E00\u952E\u67E5\u770B\u670D\u52A1\u5668\u8D44\u6E90\u5229\u7528\u7387</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
function cpu() {
    NUM=1
    while [ $NUM -le 3 ]; do
        util=\`vmstat |awk &#39;{if(NR==3)print 100-$15&quot;%&quot;}&#39;\`
        user=\`vmstat |awk &#39;{if(NR==3)print $13&quot;%&quot;}&#39;\`
        sys=\`vmstat |awk &#39;{if(NR==3)print $14&quot;%&quot;}&#39;\`
        iowait=\`vmstat |awk &#39;{if(NR==3)print $16&quot;%&quot;}&#39;\`
        echo &quot;CPU - \u4F7F\u7528\u7387: $util , \u7B49\u5F85\u78C1\u76D8IO\u54CD\u5E94\u4F7F\u7528\u7387: $iowait&quot;
        let NUM++
        sleep 1
    done
}
 
function memory() {
    total=\`free -m |awk &#39;{if(NR==2)printf &quot;%.1f&quot;,$2/1024}&#39;\`
    used=\`free -m |awk &#39;{if(NR==2) printf &quot;%.1f&quot;,($2-$NF)/1024}&#39;\`
    available=\`free -m |awk &#39;{if(NR==2) printf &quot;%.1f&quot;,$NF/1024}&#39;\`
    echo &quot;\u5185\u5B58 - \u603B\u5927\u5C0F: \${total}G , \u4F7F\u7528: \${used}G , \u5269\u4F59: \${available}G&quot;
}
 
function disk() {
    fs=$(df -h |awk &#39;/^\\/dev/{print $1}&#39;)
    for p in $fs; do
        mounted=$(df -h |awk &#39;$1==&quot;&#39;$p&#39;&quot;{print $NF}&#39;)
        size=$(df -h |awk &#39;$1==&quot;&#39;$p&#39;&quot;{print $2}&#39;)
        used=$(df -h |awk &#39;$1==&quot;&#39;$p&#39;&quot;{print $3}&#39;)
        used_percent=$(df -h |awk &#39;$1==&quot;&#39;$p&#39;&quot;{print $5}&#39;)
        echo &quot;\u786C\u76D8 - \u6302\u8F7D\u70B9: $mounted , \u603B\u5927\u5C0F: $size , \u4F7F\u7528: $used , \u4F7F\u7528\u7387: $used_percent&quot;
    done
}
 
function tcp_status() {
    summary=$(ss -antp |awk &#39;{status[$1]++}END{for(i in status) printf i&quot;:&quot;status[i]&quot; &quot;}&#39;)
    echo &quot;TCP\u8FDE\u63A5\u72B6\u6001 - $summary&quot;
}
 
cpu
memory
disk
tcp_status
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h2 id="_34\u3001\u627E\u51FA\u5360\u7528cpu-\u5185\u5B58\u8FC7\u9AD8\u7684\u8FDB\u7A0B\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_34\u3001\u627E\u51FA\u5360\u7528cpu-\u5185\u5B58\u8FC7\u9AD8\u7684\u8FDB\u7A0B\u811A\u672C" aria-hidden="true">#</a> 34\u3001\u627E\u51FA\u5360\u7528CPU \u5185\u5B58\u8FC7\u9AD8\u7684\u8FDB\u7A0B\u811A\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ps -eo user,pid,pcpu,pmem,args --sort=-pcpu  |head -n 10
 
ps -eo user,pid,pcpu,pmem,args --sort=-pmem  |head -n 10
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="_35\u3001\u81EA\u52A8\u53D1\u5E03java\u9879\u76EE-tomcat" tabindex="-1"><a class="header-anchor" href="#_35\u3001\u81EA\u52A8\u53D1\u5E03java\u9879\u76EE-tomcat" aria-hidden="true">#</a> 35\u3001\u81EA\u52A8\u53D1\u5E03Java\u9879\u76EE\uFF08Tomcat\uFF09</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
DATE=$(date +%F_%T)
 
TOMCAT_NAME=$1
TOMCAT_DIR=/usr/local/$TOMCAT_NAME
ROOT=$TOMCAT_DIR/webapps/ROOT
 
BACKUP_DIR=/data/backup
WORK_DIR=/tmp
PROJECT_NAME=tomcat-java-demo
 
# \u62C9\u53D6\u4EE3\u7801
cd $WORK_DIR
if [ ! -d $PROJECT_NAME ]; then
   git clone [url=https://github.com/lizhenliang/tomcat-java-demo]https://github.com/lizhenliang/tomcat-java-demo[/url]
   cd $PROJECT_NAME
else
   cd $PROJECT_NAME
   git pull
fi
 
# \u6784\u5EFA
mvn clean package -Dmaven.test.skip=true
if [ $? -ne 0 ]; then
   echo &quot;maven build failure!&quot;
   exit 1
fi
 
# \u90E8\u7F72
TOMCAT_PID=$(ps -ef |grep &quot;$TOMCAT_NAME&quot; |egrep -v &quot;grep|$$&quot; |awk &#39;NR==1{print $2}&#39;)
[ -n &quot;$TOMCAT_PID&quot; ] &amp;&amp; kill -9 $TOMCAT_PID
[ -d $ROOT ] &amp;&amp; mv $ROOT $BACKUP_DIR/\${TOMCAT_NAME}_ROOT$DATE
unzip $WORK_DIR/$PROJECT_NAME/target/*.war -d $ROOT
$TOMCAT_DIR/bin/startup.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="_36\u3001\u81EA\u52A8\u53D1\u5E03php\u9879\u76EE\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_36\u3001\u81EA\u52A8\u53D1\u5E03php\u9879\u76EE\u811A\u672C" aria-hidden="true">#</a> 36\u3001\u81EA\u52A8\u53D1\u5E03PHP\u9879\u76EE\u811A\u672C</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>#!/bin/bash
DATE=$(date +%F_%T)
 
WWWROOT=/usr/local/nginx/html/$1
 
 
BACKUP_DIR=/data/backup
WORK_DIR=/tmp
PROJECT_NAME=php-demo
 
 
# \u62C9\u53D6\u4EE3\u7801
cd $WORK_DIR
if [ ! -d $PROJECT_NAME ]; then
   git clone [url=https://github.com/lizhenliang/php-demo]https://github.com/lizhenliang/php-demo[/url]
   cd $PROJECT_NAME
else
   cd $PROJECT_NAME
   git pull
fi
 
 
# \u90E8\u7F72
if [ ! -d $WWWROOT ]; then
   mkdir -p $WWWROOT
   rsync -avz --exclude=.git $WORK_DIR/$PROJECT_NAME/* $WWWROOT
else
   rsync -avz --exclude=.git $WORK_DIR/$PROJECT_NAME/* $WWWROOT
fi
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>`,76);function r(l,p){return e}var u=n(a,[["render",r],["__file","\u5B9E\u7528 shell \u811A\u672C.html.vue"]]);export{u as default};
