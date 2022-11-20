import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as o,a as n,b as s,e,d as t,r as c}from"./app.19f6b864.js";const p={},u=t('<h1 id="docker搭建elk日志分析系统" tabindex="-1"><a class="header-anchor" href="#docker搭建elk日志分析系统" aria-hidden="true">#</a> Docker搭建ELK日志分析系统</h1><h2 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一</h2><ul><li><p>ElasticSearch 有强大的搜索功能的无模式数据库，可以简单的很想扩展，索引每一个字段，可以聚合分组数据。</p></li><li><p>Logstash 用Ruby编写的，我们可以使用管道输入和输出数据到任何位置。一个可以抓取，转换，存储事件到ElasticSearch的ETL管道。打包版本在JRuby上运行，并使用几十个线程进行并行的数据处理，利用了JVM的线程功能。</p></li><li><p>Kibana 基于web的数据分析，为ElasticSearch仪表板的工具。充分利用ElasticSearch的搜索功能，以秒为单位可视化数据。支持Lucene的查询字符串的语法和Elasticsearch的过滤功能。</p></li></ul><h3 id="前提" tabindex="-1"><a class="header-anchor" href="#前提" aria-hidden="true">#</a> 前提</h3><ul><li>本文中架构基于docker搭建，需要您了解docker的基本概念，基本操作和docker1.9之后的自定义overlay网络</li></ul>',5),r={href:"https://hub.docker.com/_/elasticsearch/",target:"_blank",rel:"noopener noreferrer"},d=t(`<h3 id="docker搭建elk的javaweb应用日志收集存储分析系统" tabindex="-1"><a class="header-anchor" href="#docker搭建elk的javaweb应用日志收集存储分析系统" aria-hidden="true">#</a> Docker搭建ELK的javaweb应用日志收集存储分析系统</h3><h3 id="第一步-启动elasticsearch" tabindex="-1"><a class="header-anchor" href="#第一步-启动elasticsearch" aria-hidden="true">#</a> 第一步：启动elasticsearch</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d --name myes  \\
           --net=multihost --ip=192.168.2.51 \\
           elasticsearch:2.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>采用docker自定义overlay网络multihost，设置容器ip为192.168.2.51</li></ul><h3 id="第二步-启动kibana" tabindex="-1"><a class="header-anchor" href="#第二步-启动kibana" aria-hidden="true">#</a> 第二步：启动kibana</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run --name mykibana \\
      -e ELASTICSEARCH_URL=http://192.168.2.51:9200 \\
      --net=multihost \\
      -p 5601:5601 \\
      -d kibana:4.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>采用自定义网络multihost，ip随机分配</li><li>在宿主机启动kibana，容器端口5601映射到宿主机端口5601，可以通过http://&lt;宿主机ip&gt;:5601访问kibana</li><li>参数ELASTICSEARCH_URL指向第一步中启动的elasticsearch</li></ul><h3 id="第三步-logstash配置文件" tabindex="-1"><a class="header-anchor" href="#第三步-logstash配置文件" aria-hidden="true">#</a> 第三步：logstash配置文件</h3><ul><li>logstash.conf,这个文件名字可以随便起</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>input { 
  log4j {
    mode =&gt; &quot;server&quot;
    host =&gt; &quot;0.0.0.0&quot;
    port =&gt; 3456
    type =&gt; &quot;log4j&quot;
  }
}
output {
  elasticsearch { hosts =&gt; [&quot;192.168.2.51&quot;] }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>输入模式log4j的服务，监听于当前容器的3456端口。也就是数据源需要向容器的3456端口发送日志。</li></ul><h3 id="第四步-启动logstash" tabindex="-1"><a class="header-anchor" href="#第四步-启动logstash" aria-hidden="true">#</a> 第四步：启动logstash</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run  -d \\
            -v &quot;$PWD&quot;:/config-dir \\
            -p 3456:3456 \\
            --net multihost \\
            logstash:2.3 \\
            logstash -f /config-dir/logstash.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>采用自定义网络multihost，ip随机分配</li><li>在宿主机启动logstash，容器端口3456映射到宿主机端口3456.(这么做是假设您的应用不是docker化的，所以ip不在自定义网络multihost内.如果web应用docker化，并与logstash共同使用同一个自定义网络，则端口不需要对外映射)</li><li>容器配置文件/config-dir/logstash.conf映射到宿主机当前目录下面。即你需要将logstash.conf放到当前目录&quot;$PWD&quot;下启动。（这个目录可以调整）</li></ul><h3 id="第五步-web应用log4j日志tcp输出" tabindex="-1"><a class="header-anchor" href="#第五步-web应用log4j日志tcp输出" aria-hidden="true">#</a> 第五步：web应用log4j日志TCP输出</h3><ul><li>为log4j.properties添加tcp输出，代码片段如下：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>log4j.rootLogger = DEBUG,tcp

log4j.appender.tcp=org.apache.log4j.net.SocketAppender
log4j.appender.tcp.Port=3456
log4j.appender.tcp.RemoteHost=192.168.1.158
log4j.appender.tcp.ReconnectionDelay=10000
log4j.appender.tcp.Application=ssmm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>RemoteHost是logstash所在的宿主机ip.如果您的web应用docker化，可以是容器ip</li><li>发送日志到3456端口</li></ul><blockquote><p>最重要的事不要忘了，启动您的web应用。日志才能发过去！</p></blockquote><h2 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二</h2><h3 id="写在前面" tabindex="-1"><a class="header-anchor" href="#写在前面" aria-hidden="true">#</a> 写在前面</h3>`,21),k={href:"https://github.com/deviantony/docker-elk",target:"_blank",rel:"noopener noreferrer"},v=t(`<p>用于开发测试的基础环境使用一台1c2g的虚拟机即可，当然机器资源越多我们的服务运行效率也会越高、相同时间内数据处理能力也就越大。而用于一般生产环境建议根据自己具体情况给予更多资源。</p><p>先聊聊测试环境搭建。</p><h3 id="测试开发环境" tabindex="-1"><a class="header-anchor" href="#测试开发环境" aria-hidden="true">#</a> 测试开发环境</h3><p>使用 Git Clone 命令将项目下载到所需要的位置。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone https://github.com/deviantony/docker-elk.git /app/docker-elk

Cloning into &#39;/app/docker-elk&#39;...
remote: Enumerating objects: 1729, done.
remote: Total 1729 (delta 0), reused 0 (delta 0), pack-reused 1729
Receiving objects: 100% (1729/1729), 410.25 KiB | 11.00 KiB/s, done.
Resolving deltas: 100% (705/705), done.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在启动项目前，我们先了解下基础的目录结构。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├── docker-compose.yml
├── docker-stack.yml
├── elasticsearch
│   ├── config
│   │   └── elasticsearch.yml
│   └── Dockerfile
├── extensions
│   ├── apm-server
│   ├── app-search
│   ├── curator
│   ├── logspout
├── kibana
│   ├── config
│   │   └── kibana.yml
│   └── Dockerfile
├── LICENSE
├── logstash
│   ├── config
│   │   └── logstash.yml
│   ├── Dockerfile
│   └── pipeline
│       └── logstash.conf
└── README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以清楚看到，项目主要使用根目录的 <strong>docker-compose.yml</strong> 作为启动配置，并在首次启动时，构建相关服务的容器镜像。</p><p>了解了项目工作方式后，可以使用 <code>docker-compose up</code> 来启动项目。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up

Creating network <span class="token string">&quot;docker-elk_elk&quot;</span> with driver <span class="token string">&quot;bridge&quot;</span>
Creating volume <span class="token string">&quot;docker-elk_elasticsearch&quot;</span> with default driver
Building elasticsearch
Step <span class="token number">1</span>/2 <span class="token builtin class-name">:</span> ARG ELK_VERSION
Step <span class="token number">2</span>/2 <span class="token builtin class-name">:</span> FROM docker.elastic.co/elasticsearch/elasticsearch:<span class="token variable">\${ELK_VERSION}</span>
<span class="token number">7.6</span>.2: Pulling from elasticsearch/elasticsearch
c808caf183b6: Downloading <span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">&gt;</span>                                                <span class="token punctuation">]</span>  <span class="token number">3</span>.736MB/85.21MB
d6caf8e15a64: Downloading <span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span>                               <span class="token punctuation">]</span>  <span class="token number">13</span>.69MB/34.71MB
b0ba5f324e82: Download complete
d7e8c1e99b9a: Downloading <span class="token punctuation">[</span><span class="token operator">=</span><span class="token operator">&gt;</span>                                                 <span class="token punctuation">]</span>  <span class="token number">11</span>.71MB/321.6MB
85c4d6c81438: Waiting
3119218fac98: Waiting
914accf214bb: Waiting
<span class="token punctuation">..</span>.

Creating docker-elk_elasticsearch_1 <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Creating docker-elk_logstash_1      <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Creating docker-elk_kibana_1        <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Attaching to docker-elk_elasticsearch_1, docker-elk_logstash_1, docker-elk_kibana_1
logstash_1       <span class="token operator">|</span> OpenJDK <span class="token number">64</span>-Bit Server VM warning: Option UseConcMarkSweepGC was deprecated <span class="token keyword">in</span> version <span class="token number">9.0</span> and will likely be removed <span class="token keyword">in</span> a future release.
elasticsearch_1  <span class="token operator">|</span> Created elasticsearch keystore <span class="token keyword">in</span> /usr/share/elasticsearch/config
logstash_1       <span class="token operator">|</span> WARNING: An illegal reflective access operation has occurred
logstash_1       <span class="token operator">|</span> WARNING: Illegal reflective access by com.headius.backport9.modules.Modules <span class="token punctuation">(</span>file:/usr/share/logstash/logstash-core/lib/jars/jruby-complete-9.2.9.0.jar<span class="token punctuation">)</span> to method sun.nio.ch.NativeThread.signal<span class="token punctuation">(</span>long<span class="token punctuation">)</span>
logstash_1       <span class="token operator">|</span> WARNING: Please consider reporting this to the maintainers of com.headius.backport9.modules.Modules
logstash_1       <span class="token operator">|</span> WARNING: Use --illegal-access<span class="token operator">=</span>warn to <span class="token builtin class-name">enable</span> warnings of further illegal reflective access operations
logstash_1       <span class="token operator">|</span> WARNING: All illegal access operations will be denied <span class="token keyword">in</span> a future release
elasticsearch_1  <span class="token operator">|</span> OpenJDK <span class="token number">64</span>-Bit Server VM warning: Option UseConcMarkSweepGC was deprecated <span class="token keyword">in</span> version <span class="token number">9.0</span> and will likely be removed <span class="token keyword">in</span> a future release.
elasticsearch_1  <span class="token operator">|</span> <span class="token punctuation">{</span><span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;server&quot;</span>, <span class="token string">&quot;timestamp&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2020-05-03T03:47:40,483Z&quot;</span>, <span class="token string">&quot;level&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;INFO&quot;</span>, <span class="token string">&quot;component&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;o.e.e.NodeEnvironment&quot;</span>, <span class="token string">&quot;cluster.name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;docker-cluster&quot;</span>, <span class="token string">&quot;node.name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;0d05db8360df&quot;</span>, <span class="token string">&quot;message&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;using [1] data paths, mounts [[/usr/share/elasticsearch/data (/dev/sda2)]], net usable_space [83.6gb], net total_space [97.9gb], types [ext4]&quot;</span> <span class="token punctuation">}</span>
elasticsearch_1  <span class="token operator">|</span> <span class="token punctuation">{</span><span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;server&quot;</span>, <span class="token string">&quot;timestamp&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2020-05-03T03:47:40,493Z&quot;</span>, <span class="token string">&quot;level&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;INFO&quot;</span>, <span class="token string">&quot;component&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;o.e.e.NodeEnvironment&quot;</span>, <span class="token string">&quot;cluster.name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;docker-cluster&quot;</span>, <span class="token string">&quot;node.name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;0d05db8360df&quot;</span>, <span class="token string">&quot;message&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;heap size [247.5mb], compressed ordinary object pointers [true]&quot;</span> <span class="token punctuation">}</span>
kibana_1         <span class="token operator">|</span> <span class="token punctuation">{</span><span class="token string">&quot;type&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;log&quot;</span>,<span class="token string">&quot;@timestamp&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;2020-05-03T03:47:40Z&quot;</span>,<span class="token string">&quot;tags&quot;</span>:<span class="token punctuation">[</span><span class="token string">&quot;info&quot;</span>,<span class="token string">&quot;plugins-service&quot;</span><span class="token punctuation">]</span>,<span class="token string">&quot;pid&quot;</span>:6,<span class="token string">&quot;message&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Plugin <span class="token entity" title="\\&quot;">\\&quot;</span>case<span class="token entity" title="\\&quot;">\\&quot;</span> is disabled.&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动过程中的日志会类似上面这样，因为首次启动需要从官网镜像仓库中下载相关镜像，所以会慢一些。当你看到终端输出类似上面的日志时，说明服务已经启动完毕。</p><p>为了验证，我们可以使用浏览器或者 curl 等工具访问机器地址加端口号 9200，并使用默认用户名 <code>elastic</code> 和默认密码 <code>changeme</code> 来访问 Elasticsearch HTTP 端口，如果一切正常，你将看到类似下面的结果。</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;0d05db8360df&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;cluster_name&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;docker-cluster&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;cluster_uuid&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;Mq2EZX59TqW7ysGx7Y-jIw&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span> <span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;number&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;7.6.2&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build_flavor&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build_type&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;docker&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build_hash&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;ef48eb35cf30adf4db14086e8aabd07ef6fb113f&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build_date&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;2020-03-26T06:34:37.794943Z&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;build_snapshot&quot;</span> <span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;lucene_version&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;8.4.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;minimum_wire_compatibility_version&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;6.8.0&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;minimum_index_compatibility_version&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;6.0.0-beta1&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tagline&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;You Know, for Search&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在不着急访问 Kibana ，我们继续进行配置调整。</p><h3 id="重置内建用户密码" tabindex="-1"><a class="header-anchor" href="#重置内建用户密码" aria-hidden="true">#</a> 重置内建用户密码</h3><p>使用 <code>docker-compose exec -T elasticsearch bin/elasticsearch-setup-passwords auto --batch</code> 命令对服务默认的账户进行默认密码重置。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-T</span> elasticsearch bin/elasticsearch-setup-passwords auto <span class="token parameter variable">--batch</span>

Changed password <span class="token keyword">for</span> user apm_system
PASSWORD apm_system <span class="token operator">=</span> YkELBJGOT6AxqsPqsi7I

Changed password <span class="token keyword">for</span> user kibana
PASSWORD kibana <span class="token operator">=</span> FxRwjm5KRYvHhGEnYTM9

Changed password <span class="token keyword">for</span> user logstash_system
PASSWORD logstash_system <span class="token operator">=</span> A4f5VOfjVWSdi0KAZWGu

Changed password <span class="token keyword">for</span> user beats_system
PASSWORD beats_system <span class="token operator">=</span> QnW8xxhnn7LMlA7vuI7B

Changed password <span class="token keyword">for</span> user remote_monitoring_user
PASSWORD remote_monitoring_user <span class="token operator">=</span> OvjEGR13wjkOkIbWqaEM

Changed password <span class="token keyword">for</span> user elastic
PASSWORD elastic <span class="token operator">=</span> PGevNMuv7PhVnaYg7vJw
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将密码妥善保存后，我们需要将 <code>docker-compose.yml</code> 配置文件中的 elasticsearch 服务的 <code>ELASTIC_PASSWORD</code> 去掉，这样可以确保服务启动只使用我们刚刚重置后的密码（keystore）。以及需要对 kibana 、 logstash 配置文件中的信息进行替换，将文件中的 <strong>elastic</strong> 用户的密码进行更新，相关文件我们在开篇的目录结构中有提过，暂时先修改下面三个文件就可以了：</p><ul><li>kibana/config/kibana.yml</li><li>logstash/config/logstash.yml</li><li>logstash/pipeline/logstash.conf</li></ul>`,19),m={href:"https://www.elastic.co/guide/en/logstash/current/ls-security.html",target:"_blank",rel:"noopener noreferrer"},b=t(`<p>在配置修改完毕后，我们执行 <code>docker-compose restart</code> 重启相关服务。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> restart

Restarting docker-elk_kibana_1        <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Restarting docker-elk_logstash_1      <span class="token punctuation">..</span>. <span class="token keyword">done</span>
Restarting docker-elk_elasticsearch_1 <span class="token punctuation">..</span>. <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果日志中没有出现任何 401 或者访问拒绝的内容，说明服务一切正常。</p><h3 id="使用-kibana-控制台" tabindex="-1"><a class="header-anchor" href="#使用-kibana-控制台" aria-hidden="true">#</a> 使用 Kibana 控制台</h3><p>启动之后，我们使用浏览器访问服务器IP+端口5601，打开 kibana 控制台。</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/v2-6e81c345d57b1ed67e834c655a3082e0_r.jpg" alt="img" loading="lazy"></p><p>使用elastic 账号和密码登录后，就能够看到 Kibana 的界面了，如果第一次使用，会看到欢迎界面。</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/v2-30151461a0b7a7412a7063e446439074_r.jpg" alt="img" loading="lazy"></p><p>在登陆之后，第一次使用，可以考虑导入示例数据，来帮助了解 Kibana 的基础功能。</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/v2-b0ea3bd33d02838d4e15d0787a7a4659_r.jpg" alt="img" loading="lazy"></p><p>接下来就是自由探索的过程了，: )</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/v2-c97fac3f23e7d384ba71843dfdfe64d7_r.jpg" alt="img" loading="lazy"></p><h3 id="关闭付费组件" tabindex="-1"><a class="header-anchor" href="#关闭付费组件" aria-hidden="true">#</a> 关闭付费组件</h3><p>打开设置界面，选择 Elasticsearch 模块中的 License Management ，可以看到默认软件会启动为期一个月的高级功能试用。</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/v2-423450e256c5e034f24a9aa2ca0494b6_r.jpg" alt="img" loading="lazy"></p>`,15),g={href:"https://www.elastic.co/cn/subscriptions",target:"_blank",rel:"noopener noreferrer"},h=t(`<p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/v2-7aa7bf6822c363babdb3cb1eee874383_r.jpg" alt="img" loading="lazy"></p><p>如果你想要了解软件当前运行状态，除了登陆机器，查看宿主机和容器状态外，在监控界面，我们也可以方便快捷的看到单节点中各个服务的运行状态和资源占用。</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/v2-36d9b830184f14f9e36e03943150c3e9_r.jpg" alt="img" loading="lazy"></p><p>选择“Revert to Basic license”，选择回退到基础版本，可以看到整个界面都简洁了不少，至此如果不付费的话，就可以安心合法的使用软件了。</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/v2-7303bb065fbfdf67f66064f7a9d9246f_r.jpg" alt="img" loading="lazy"></p><p>当然，你也可以在 elasticsearch.yml 配置文件中的 <code>xpack.license.self_generated.type</code> 修改为 <code>basic</code> 来禁用 X-Pack 相关功能。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>xpack.license.self_generated.type: basic
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对接各种软件/系统进行日志收集，以及定制你的可视化界面或者 API 我们后面有机会再聊，接下来继续聊聊，如何进一步搭建配置 ELK 。</p><h3 id="修改自官方示例的生产环境" tabindex="-1"><a class="header-anchor" href="#修改自官方示例的生产环境" aria-hidden="true">#</a> 修改自官方示例的生产环境</h3><p>生产环境的基础要求是高可用性，常规实现方案中见的比较多的是“多副本/实例”，多机器，多机架，甚至多区域部署。</p><p>本文我们先聊聊最简单的多实例。</p><h3 id="前置准备" tabindex="-1"><a class="header-anchor" href="#前置准备" aria-hidden="true">#</a> 前置准备</h3><p>如果想让生产环境中使用 Docker 运行 ELK，有一些必备的系统设置必不可少。</p><p>首先调整 <code>vm.max_map_count</code> 的数值，至少调整到 262144 以上。在 <code>/etc/sysctl.conf</code> 添加下面的内容即可。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>vm.max_map_count = 262144

sysctl -w vm.max_map_count=262144
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后调整 <code>ulimits</code> 以及 <code>nprocedit</code>，因为我们使用容器运行 ELK 相关应用，所以直接修改 compose 配置文件中的 ES 配置就可以了：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">ulimits</span><span class="token punctuation">:</span>
  <span class="token key atrule">memlock</span><span class="token punctuation">:</span>
    <span class="token key atrule">soft</span><span class="token punctuation">:</span> <span class="token number">-1</span>
    <span class="token key atrule">hard</span><span class="token punctuation">:</span> <span class="token number">-1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们继续调整，关闭内存交换，同样修改 compose 配置文件中的 ES 配置即可：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">environment</span><span class="token punctuation">:</span>
  <span class="token key atrule">bootstrap.memory_lock</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,19),y={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/heap-size.html",target:"_blank",rel:"noopener noreferrer"},q=t(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">environment</span><span class="token punctuation">:</span>
  <span class="token key atrule">ES_JAVA_OPTS</span><span class="token punctuation">:</span> <span class="token string">&quot;-Xmx1g -Xms1g&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你真实使用在生产环节，务必开启 TLS 和密码认证，此处为了不额外扩展篇幅（以及懒得申请通配符证书/配置自签名）先使用关闭安全配置的方式忽略这个设置 : )</p><h3 id="修改配置支持多实例" tabindex="-1"><a class="header-anchor" href="#修改配置支持多实例" aria-hidden="true">#</a> 修改配置支持多实例</h3>`,3),_={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/docker.html",target:"_blank",rel:"noopener noreferrer"},f=t(`<p>首先创建服务所需要的数据目录，并赋予所需要的权限。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> data/<span class="token punctuation">{</span>es01,es02,es03<span class="token punctuation">}</span>
<span class="token function">chmod</span> g+rwx data/*
<span class="token function">chgrp</span> <span class="token number">0</span> data/*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),x={href:"https://docs.docker.com/engine/extend/legacy_plugins/",target:"_blank",rel:"noopener noreferrer"},w=t(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">volumes</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> ./elasticsearch/config/elasticsearch.yml<span class="token punctuation">:</span>/usr/share/elasticsearch/config/elasticsearch.yml<span class="token punctuation">:</span>ro
  <span class="token punctuation">-</span> ./data<span class="token punctuation">:</span>/usr/share/elasticsearch/data<span class="token punctuation">:</span>rw
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>考虑到多实例之间配置几乎一致，并且如果要单独维护太过啰嗦，我们可以将 <code>elasticsearch.yml</code> 内的配置使用环境变量的方式写在 compose 配置文件中：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">environment</span><span class="token punctuation">:</span>
  <span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> <span class="token string">&quot;docker-cluster&quot;</span>
  <span class="token key atrule">network.host</span><span class="token punctuation">:</span> <span class="token string">&quot;0.0.0.0&quot;</span>
  <span class="token key atrule">bootstrap.memory_lock</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
  <span class="token key atrule">xpack.license.self_generated.type</span><span class="token punctuation">:</span> <span class="token string">&quot;basic&quot;</span>
  <span class="token key atrule">xpack.security.enabled</span><span class="token punctuation">:</span> <span class="token string">&quot;false&quot;</span>
  <span class="token key atrule">xpack.monitoring.collection.enabled</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
  <span class="token key atrule">ES_JAVA_OPTS</span><span class="token punctuation">:</span> <span class="token string">&quot;-Xmx1g -Xms1g&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，因为涉及到多个节点组网，所以这里需要额外指定这些实例的节点名称等信息：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.2&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">elasticsearch01</span><span class="token punctuation">:</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">node.name</span><span class="token punctuation">:</span> <span class="token string">&quot;es01&quot;</span>
      <span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token string">&quot;es02,es03&quot;</span>
      <span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token string">&quot;es01,es02,es03&quot;</span>

  <span class="token key atrule">elasticsearch02</span><span class="token punctuation">:</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">node.name</span><span class="token punctuation">:</span> <span class="token string">&quot;es02&quot;</span>
      <span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token string">&quot;es01,es03&quot;</span>
      <span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token string">&quot;es01,es02,es03&quot;</span>

  <span class="token key atrule">elasticsearch03</span><span class="token punctuation">:</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">node.name</span><span class="token punctuation">:</span> <span class="token string">&quot;es03&quot;</span>
      <span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token string">&quot;es01,es02&quot;</span>
      <span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token string">&quot;es01,es02,es03&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，按照官网的推荐的模式，让其中一台机器支持对外暴露端口，与外部进行数据交换即可。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> 9200<span class="token punctuation">:</span><span class="token number">9200</span>
  <span class="token punctuation">-</span> 9300<span class="token punctuation">:</span><span class="token number">9300</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里多实例就配置完成了。</p><h3 id="更新-logstash-配置" tabindex="-1"><a class="header-anchor" href="#更新-logstash-配置" aria-hidden="true">#</a> 更新 Logstash 配置</h3><p>logstash 需要更新的有两处，一处是要让服务在 刚刚定义的 elasticsearch 实例启动之后再启动，另外可以将配置以相同方式改写，方便后续维护。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">logstash</span><span class="token punctuation">:</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ./logstash/config/logstash.yml<span class="token punctuation">:</span>/usr/share/logstash/config/logstash.yml<span class="token punctuation">:</span>ro
    <span class="token punctuation">-</span> ./logstash/pipeline<span class="token punctuation">:</span>/usr/share/logstash/pipeline<span class="token punctuation">:</span>ro
  <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> elasticsearch01
    <span class="token punctuation">-</span> elasticsearch02
    <span class="token punctuation">-</span> elasticsearch03
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着需要更新 <code>logstash/config/logstash.yml</code> 配置中的 <code>xpack.monitoring.elasticsearch.host</code> 信息，确保启动不会出现问题。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>xpack.monitoring.elasticsearch.hosts: [ &quot;http://es01:9200&quot; ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以及 <code>logstash/pipeline/logstash.conf</code> 配置中的 <code>output. elasticsearch</code> 信息为 <code>hosts =&gt; &quot;es01:9200&quot;</code>。</p><h3 id="更新-kibana-配置" tabindex="-1"><a class="header-anchor" href="#更新-kibana-配置" aria-hidden="true">#</a> 更新 Kibana 配置</h3><p>需要更新的地方有三处，两处同 Logstash ，额外还有一处是指定 <code>ELASTICSEARCH_URL</code> 地址为我们暴露服务的 elasticsearch 实例的地址。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">kibana</span><span class="token punctuation">:</span>
  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ./kibana/config/kibana.yml<span class="token punctuation">:</span>/usr/share/kibana/config/kibana.yml<span class="token punctuation">:</span>ro
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token string">&quot;5601:5601&quot;</span>
  <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> elasticsearch01
    <span class="token punctuation">-</span> elasticsearch02
    <span class="token punctuation">-</span> elasticsearch03
  <span class="token key atrule">environment</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> ELASTICSEARCH_URL=http<span class="token punctuation">:</span>//es01<span class="token punctuation">:</span><span class="token number">9200</span>
    <span class="token punctuation">-</span> xpack.security.enabled=false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以及需要额外更新 <code>kibana/config/kibana.yml</code> 配置中的 <code>elasticsearch.hosts</code> 字段信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>elasticsearch.hosts: [ &quot;http://es01:9200&quot; ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="完整配置文件" tabindex="-1"><a class="header-anchor" href="#完整配置文件" aria-hidden="true">#</a> 完整配置文件</h3><p>上述配置完成内容如下：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.2&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">elasticsearch01</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> docker.elastic.co/elasticsearch/elasticsearch<span class="token punctuation">:</span>7.6.2
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> es01
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./data/es01<span class="token punctuation">:</span>/usr/share/elasticsearch/data<span class="token punctuation">:</span>rw
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 9200<span class="token punctuation">:</span><span class="token number">9200</span>
      <span class="token punctuation">-</span> 9300<span class="token punctuation">:</span><span class="token number">9300</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">node.name</span><span class="token punctuation">:</span> <span class="token string">&quot;es01&quot;</span>
      <span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> <span class="token string">&quot;docker-cluster&quot;</span>
      <span class="token key atrule">network.host</span><span class="token punctuation">:</span> <span class="token string">&quot;0.0.0.0&quot;</span>
      <span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token string">&quot;es02,es03&quot;</span>
      <span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token string">&quot;es01,es02,es03&quot;</span>
      <span class="token key atrule">bootstrap.memory_lock</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
      <span class="token key atrule">xpack.license.self_generated.type</span><span class="token punctuation">:</span> <span class="token string">&quot;basic&quot;</span>
      <span class="token key atrule">xpack.security.enabled</span><span class="token punctuation">:</span> <span class="token string">&quot;false&quot;</span>
      <span class="token key atrule">xpack.monitoring.collection.enabled</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
      <span class="token key atrule">ES_JAVA_OPTS</span><span class="token punctuation">:</span> <span class="token string">&quot;-Xmx1g -Xms1g&quot;</span>
    <span class="token key atrule">ulimits</span><span class="token punctuation">:</span>
      <span class="token key atrule">memlock</span><span class="token punctuation">:</span>
        <span class="token key atrule">soft</span><span class="token punctuation">:</span> <span class="token number">-1</span>
        <span class="token key atrule">hard</span><span class="token punctuation">:</span> <span class="token number">-1</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> elk

  <span class="token key atrule">elasticsearch02</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> docker.elastic.co/elasticsearch/elasticsearch<span class="token punctuation">:</span>7.6.2
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> es02
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./data/es02<span class="token punctuation">:</span>/usr/share/elasticsearch/data<span class="token punctuation">:</span>rw
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">node.name</span><span class="token punctuation">:</span> <span class="token string">&quot;es02&quot;</span>
      <span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> <span class="token string">&quot;docker-cluster&quot;</span>
      <span class="token key atrule">network.host</span><span class="token punctuation">:</span> <span class="token string">&quot;0.0.0.0&quot;</span>
      <span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token string">&quot;es01,es03&quot;</span>
      <span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token string">&quot;es01,es02,es03&quot;</span>
      <span class="token key atrule">bootstrap.memory_lock</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
      <span class="token key atrule">xpack.license.self_generated.type</span><span class="token punctuation">:</span> <span class="token string">&quot;basic&quot;</span>
      <span class="token key atrule">xpack.security.enabled</span><span class="token punctuation">:</span> <span class="token string">&quot;false&quot;</span>
      <span class="token key atrule">xpack.monitoring.collection.enabled</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
      <span class="token key atrule">ES_JAVA_OPTS</span><span class="token punctuation">:</span> <span class="token string">&quot;-Xmx1g -Xms1g&quot;</span>
    <span class="token key atrule">ulimits</span><span class="token punctuation">:</span>
      <span class="token key atrule">memlock</span><span class="token punctuation">:</span>
        <span class="token key atrule">soft</span><span class="token punctuation">:</span> <span class="token number">-1</span>
        <span class="token key atrule">hard</span><span class="token punctuation">:</span> <span class="token number">-1</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> elk

  <span class="token key atrule">elasticsearch03</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> docker.elastic.co/elasticsearch/elasticsearch<span class="token punctuation">:</span>7.6.2
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> es03
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./data/es03<span class="token punctuation">:</span>/usr/share/elasticsearch/data<span class="token punctuation">:</span>rw
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">node.name</span><span class="token punctuation">:</span> <span class="token string">&quot;es03&quot;</span>
      <span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> <span class="token string">&quot;docker-cluster&quot;</span>
      <span class="token key atrule">network.host</span><span class="token punctuation">:</span> <span class="token string">&quot;0.0.0.0&quot;</span>
      <span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token string">&quot;es01,es02&quot;</span>
      <span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token string">&quot;es01,es02,es03&quot;</span>
      <span class="token key atrule">bootstrap.memory_lock</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
      <span class="token key atrule">xpack.license.self_generated.type</span><span class="token punctuation">:</span> <span class="token string">&quot;basic&quot;</span>
      <span class="token key atrule">xpack.security.enabled</span><span class="token punctuation">:</span> <span class="token string">&quot;false&quot;</span>
      <span class="token key atrule">xpack.monitoring.collection.enabled</span><span class="token punctuation">:</span> <span class="token string">&quot;true&quot;</span>
      <span class="token key atrule">ES_JAVA_OPTS</span><span class="token punctuation">:</span> <span class="token string">&quot;-Xmx1g -Xms1g&quot;</span>
    <span class="token key atrule">ulimits</span><span class="token punctuation">:</span>
      <span class="token key atrule">memlock</span><span class="token punctuation">:</span>
        <span class="token key atrule">soft</span><span class="token punctuation">:</span> <span class="token number">-1</span>
        <span class="token key atrule">hard</span><span class="token punctuation">:</span> <span class="token number">-1</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> elk

  <span class="token key atrule">logstash</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span>
      <span class="token key atrule">context</span><span class="token punctuation">:</span> logstash/
      <span class="token key atrule">args</span><span class="token punctuation">:</span>
        <span class="token key atrule">ELK_VERSION</span><span class="token punctuation">:</span> $ELK_VERSION
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./logstash/config/logstash.yml<span class="token punctuation">:</span>/usr/share/logstash/config/logstash.yml<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> ./logstash/pipeline<span class="token punctuation">:</span>/usr/share/logstash/pipeline<span class="token punctuation">:</span>ro
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;5000:5000/tcp&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;5000:5000/udp&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9600:9600&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">LS_JAVA_OPTS</span><span class="token punctuation">:</span> <span class="token string">&quot;-Xmx1g -Xms1g&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> elk
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> elasticsearch01
      <span class="token punctuation">-</span> elasticsearch02
      <span class="token punctuation">-</span> elasticsearch03

  <span class="token key atrule">kibana</span><span class="token punctuation">:</span>
    <span class="token key atrule">build</span><span class="token punctuation">:</span>
      <span class="token key atrule">context</span><span class="token punctuation">:</span> kibana/
      <span class="token key atrule">args</span><span class="token punctuation">:</span>
        <span class="token key atrule">ELK_VERSION</span><span class="token punctuation">:</span> $ELK_VERSION
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./kibana/config/kibana.yml<span class="token punctuation">:</span>/usr/share/kibana/config/kibana.yml<span class="token punctuation">:</span>ro
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;5601:5601&quot;</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> elk
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> elasticsearch01
      <span class="token punctuation">-</span> elasticsearch02
      <span class="token punctuation">-</span> elasticsearch03
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ELASTICSEARCH_URL=http<span class="token punctuation">:</span>//es01<span class="token punctuation">:</span><span class="token number">9200</span>
      <span class="token punctuation">-</span> xpack.security.enabled=false

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">elk</span><span class="token punctuation">:</span>
    <span class="token key atrule">driver</span><span class="token punctuation">:</span> bridge
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实如果你全部使用官方镜像，而不做二次定制，比如安装插件的话，那么都改为官方镜像名称即可。</p><p>启动服务之后，打开 kibana 可以看到多实例的 ELK 环境就配置完毕了。</p><p><img src="http://122.9.159.116:5244/d/ecloud180/images/blogImage/v2-c83ad60df4275a2343c45b92f09ab8ae_r.jpg" alt="img" loading="lazy"></p><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h3>`,26),E={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/system-config.html",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/elastic/stack-docker/blob/master/docker-compose.yml",target:"_blank",rel:"noopener noreferrer"},A=n("h3",{id:"最后",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#最后","aria-hidden":"true"},"#"),s(" 最后")],-1),R=n("p",null,"接下来我会围绕日志写一些有趣又简单易用的内容，本篇是第一篇内容。",-1);function L(j,I){const a=c("ExternalLinkIcon");return i(),o("div",null,[u,n("blockquote",null,[n("p",null,[s("本文只介绍了最简化搭建。如果您用于生产，还需要在如下方面完善 1.elastic是有存储目录，需要在docker中进行数据卷映射。配置文件elasticsearch.yml需要根据自己需求自行配置。请参考："),n("a",r,[s("https://hub.docker.com/_/elasticsearch/"),e(a)]),s(" 2.Dockerhub官方提供的镜像基于不同的基础镜像，不利于网络传输！建议根据自己组织内部镜像重新创建！")])]),d,n("p",null,[s("为了方便搭建，我们使用 "),n("a",k,[s("https://github.com/deviantony/docker-elk"),e(a)]),s(" 这个开源项目，这个项目维护了 ELK 技术栈最近的三个版本，也就是 7.x、6.x、5.x ，本文将使用最新版本。")]),v,n("p",null,[s("需要注意的是， logstash pipeline 需要一个高权限账号，当前测试开发过程中，可以使用上面重置后的 elastic 账号和密码，如果是生产使用可以参考官方文档 "),n("a",m,[s("Configuring Security in Logstash"),e(a)]),s(" 进行操作，分配一个新的专用账号。")]),b,n("p",null,[s("在 "),n("a",g,[s("官方订阅"),e(a)]),s(" 页面，我们可以看到官方支持的订阅类型，一般来说，如果没有特殊需求，使用基础版本就好。")]),h,n("p",null,[s("Java 堆大小同样需要调整，默认的数值如下，在生产环境中太小了，更详细的内容可以参考"),n("a",y,[s("这里"),e(a)]),s("。")]),q,n("p",null,[s("官方多实例方案（"),n("a",_,[s("这篇官方指引"),e(a)]),s("），采取在 compose 中定义三个不同的服务，然后使用第一个服务作为 Master 对外暴露服务，我们先以该方案为基础，并进行一些调整。")]),f,n("p",null,[s("之前在单节点中，我们挂载的数据使用的是容器的数据卷方案，在这里，我们可以考虑使用性能更好的文件映射替换之前的方案，当然也可以配合"),n("a",x,[s("储存插件"),e(a)]),s("使用：")]),w,n("p",null,[s("官网文档对于配置的内容描述有不少，感兴趣的同学可以进一步了解，比如这篇"),n("a",E,[s(" Important System Configuration "),e(a)]),s("，原理同样适用于一些其他的应用。")]),n("p",null,[s("关于如何使用各种 beat 服务进行日志上报，可以参考官方之前给出的"),n("a",S,[s("示例文件"),e(a)]),s("。")]),A,R])}const T=l(p,[["render",L],["__file","Docker搭建ELK日志分析系统.html.vue"]]);export{T as default};
