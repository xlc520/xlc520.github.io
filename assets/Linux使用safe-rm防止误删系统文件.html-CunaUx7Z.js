import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as t,c as r,d as e,e as n,b as c,a}from"./app-BkZy1zYI.js";const d={},m=a('<h1 id="linux-使用-safe-rm-防止误删系统文件" tabindex="-1"><a class="header-anchor" href="#linux-使用-safe-rm-防止误删系统文件"><span>Linux 使用 safe-rm 防止误删系统文件</span></a></h1><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h2><p>通过维护 safe-rm 的配置文件(/etc/safe-rm.conf)，从而使配置文件中的规则目录不会被 rm 所删除</p><h2 id="安装-safe-rm" tabindex="-1"><a class="header-anchor" href="#安装-safe-rm"><span>安装 safe-rm</span></a></h2><p>这里我安装的目前最新的版本 1.1.0，因为最新的版本也是 2021 年的，也足够稳定了。</p>',5),o={href:"https://launchpad.net/safe-rm/+download",target:"_blank",rel:"noopener noreferrer"},p=a(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /tmp
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑完毕后,为了让环境变量在整个系统全局生效,建议重启操作系统.重启之后执行 rm 命令就相当于执行 safe-rm 了</p><p>/etc/safe-rm.conf 文件可随便去更改，即时见效，可以在自己的临时目录去测试下这个功能</p>`,7);function u(v,b){const s=l("ExternalLinkIcon");return t(),r("div",null,[m,e("p",null,[n("官网下载"),e("a",o,[n("https://launchpad.net/safe-rm/+download"),c(s)])]),p])}const x=i(d,[["render",u],["__file","Linux使用safe-rm防止误删系统文件.html.vue"]]),g=JSON.parse('{"path":"/linux/Linux%E4%BD%BF%E7%94%A8safe-rm%E9%98%B2%E6%AD%A2%E8%AF%AF%E5%88%A0%E7%B3%BB%E7%BB%9F%E6%96%87%E4%BB%B6.html","title":"Linux使用safe-rm防止误删系统文件","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"Linux使用safe-rm防止误删系统文件","excerpt":null,"description":"Linux 使用 safe-rm 防止误删系统文件 原理 通过维护 safe-rm 的配置文件(/etc/safe-rm.conf)，从而使配置文件中的规则目录不会被 rm 所删除 安装 safe-rm 这里我安装的目前最新的版本 1.1.0，因为最新的版本也是 2021 年的，也足够稳定了。 官网下载https://launchpad.net/saf...","date":"2024-01-26T00:00:00.000Z","category":"Linux","tag":"Linux","article":true,"timeline":true,"icon":"linux","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/linux/Linux%E4%BD%BF%E7%94%A8safe-rm%E9%98%B2%E6%AD%A2%E8%AF%AF%E5%88%A0%E7%B3%BB%E7%BB%9F%E6%96%87%E4%BB%B6.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"Linux使用safe-rm防止误删系统文件"}],["meta",{"property":"og:description","content":"Linux 使用 safe-rm 防止误删系统文件 原理 通过维护 safe-rm 的配置文件(/etc/safe-rm.conf)，从而使配置文件中的规则目录不会被 rm 所删除 安装 safe-rm 这里我安装的目前最新的版本 1.1.0，因为最新的版本也是 2021 年的，也足够稳定了。 官网下载https://launchpad.net/saf..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:published_time","content":"2024-01-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Linux使用safe-rm防止误删系统文件\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-26T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"原理","slug":"原理","link":"#原理","children":[]},{"level":2,"title":"安装 safe-rm","slug":"安装-safe-rm","link":"#安装-safe-rm","children":[]},{"level":2,"title":"设置过滤目录","slug":"设置过滤目录","link":"#设置过滤目录","children":[]}],"git":{"createdTime":1706885633000,"updatedTime":1714224756000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":1.27,"words":382},"filePathRelative":"linux/Linux使用safe-rm防止误删系统文件.md","localizedDate":"2024年1月26日","autoDesc":true}');export{x as comp,g as data};
