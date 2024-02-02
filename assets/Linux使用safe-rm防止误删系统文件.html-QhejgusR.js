import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-aq8PVJpR.js";const i={},l=e(`<h1 id="linux使用safe-rm防止误删系统文件" tabindex="-1"><a class="header-anchor" href="#linux使用safe-rm防止误删系统文件"><span>Linux使用safe-rm防止误删系统文件</span></a></h1><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h2><p>通过维护safe-rm的配置文件(/etc/safe-rm.conf)，从而使配置文件中的规则目录不会被rm所删除</p><h2 id="安装safe-rm" tabindex="-1"><a class="header-anchor" href="#安装safe-rm"><span>安装safe-rm</span></a></h2><p>这里我安装的目前最新的版本1.1.0，因为最新的版本也是2021年的，也足够稳定了。</p><p>官网下载https://launchpad.net/safe-rm/+download</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /tmp
<span class="token comment">#下载safe-rm</span>
<span class="token function">wget</span> https://launchpad.net/safe-rm/trunk/1.1.0/+download/safe-rm-1.1.0.tar.gz
<span class="token comment">#解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> safe-rm-1.1.0.tar.gz 
<span class="token comment">#安装依赖</span>
yum <span class="token function">install</span> <span class="token function">cargo</span>
<span class="token builtin class-name">cd</span> /tmp/safe-rm-1.1.0/
<span class="token comment">#编译，这一步会等很久......</span>
<span class="token function">make</span>
<span class="token comment">#移动功能文件到系统目录</span>
<span class="token function">mv</span> target/release/safe-rm /usr/local/bin/
<span class="token comment">#替换rm命令</span>
<span class="token builtin class-name">echo</span> <span class="token string">&#39;alias rm=&quot;safe-rm -i&quot;&#39;</span> <span class="token operator">&gt;&gt;</span> /etc/bashrc
<span class="token comment">#刷新修改的文件</span>
<span class="token builtin class-name">source</span> /etc/bashrc
<span class="token comment">#创建链接,将safe-rm替换rm</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/local/bin/safe-rm /usr/local/bin/rm
<span class="token builtin class-name">echo</span> <span class="token string">&#39;PATH=/usr/local/bin:$PATH&#39;</span> <span class="token operator">&gt;&gt;</span>  /etc/profile
<span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置过滤目录" tabindex="-1"><a class="header-anchor" href="#设置过滤目录"><span>设置过滤目录</span></a></h2><p>vim /etc/safe-rm.conf 文件</p><p>以下是我设定好的配置，可避免绝大多数重要的目录被删除，大家要按需配置</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>/
/*
/etc
/etc/*
/data
/data/*
/data/mysql
/data/mysql/*
/data/mysql/datadir
/data/mysql/datadir/*
/usr
/usr/*
/usr/local
/usr/local/*
/usr/local/bin
/usr/local/bin/*
/bin/*
/boot/*
/dev/*
/etc/*
/home/*
/lib/*
/lib64/*
/media/*
/mnt/*
/opt/*
/proc/*
/root/*
/run/*
/sbin/*
/srv/*
/sys/*
/var/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑完毕后,为了让环境变量在整个系统全局生效,建议重启操作系统.重启之后执行rm命令就相当于执行safe-rm了</p><p>/etc/safe-rm.conf 文件可随便去更改，即时见效，可以在自己的临时目录去测试下这个功能</p>`,13),c=[l];function d(r,t){return s(),a("div",null,c)}const o=n(i,[["render",d],["__file","Linux使用safe-rm防止误删系统文件.html.vue"]]);export{o as default};
