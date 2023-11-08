import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as e}from"./app-e33eb8d4.js";const t={},l=e(`<h1 id="docker-compose-快速部署-elasticsearch-和-kibana" tabindex="-1"><a class="header-anchor" href="#docker-compose-快速部署-elasticsearch-和-kibana" aria-hidden="true">#</a> docker-compose 快速部署 Elasticsearch 和 Kibana</h1><h2 id="一、概述" tabindex="-1"><a class="header-anchor" href="#一、概述" aria-hidden="true">#</a> 一、概述</h2><p>使用 Docker Compose 快速部署 Elasticsearch 和 Kibana 可以帮助您在本地或开发环境中轻松设置和管理这两个重要的工具，用于存储和可视化日志数据、监控和搜索。以下是一个概述的步骤：</p><ol><li>准备 Docker 和 Docker Compose：确保您已经安装了 Docker 和 Docker Compose。您可以从 Docker 官方网站上获取它们的安装程序。</li><li>创建 Docker Compose 配置文件：创建一个名为 docker-compose.yml 的文件，它将定义 Elasticsearch 和 Kibana 的容器配置。这个文件应该包括服务名称、映像、环境变量、端口映射等信息。</li><li>配置 Elasticsearch：在 docker-compose.yml 文件中，配置 Elasticsearch 容器。您通常需要指定节点名称、发现类型等设置。使用容器版本的 Elasticsearch 镜像。</li><li>配置 Kibana：在 docker-compose.yml 文件中，配置 Kibana 容器。指定要监听的端口，并确保它依赖于 Elasticsearch 服务。</li><li>数据卷设置：在 docker-compose.yml 文件中，通常会使用数据卷来保存 Elasticsearch 数据。这确保了数据的持久性。</li><li>启动容器：在终端中，导航到包含 <code>docker-compose.yml</code> 文件的目录，并运行以下命令以启动 Elasticsearch 和 Kibana。</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker-compose up -d
# -d 选项用于在后台运行容器。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>等待服务启动：容器启动后，等待一段时间以确保 Elasticsearch 和 Kibana 完全启动。</li><li>访问 Kibana 控制台：打开您的浏览器，访问 Kibana 控制台的地址，默认情况下是：<code>http://localhost:5601</code>。默认情况下，Kibana 不需要用户名和密码。</li><li>开始使用：现在，您可以使用 Kibana 控制台来管理和可视化 Elasticsearch 中的数据，执行查询、创建仪表板等操作。</li></ol><p>这些步骤将帮助您快速部署 Elasticsearch 和 Kibana，以便进行日志分析、数据可视化和搜索等操作。请注意，您可以根据需要在 <code>docker-compose.yml</code> 文件中更改版本和配置选项。确保您的系统资源足够以支持 Elasticsearch 和 Kibana 的运行。</p><figure><img src="https://static.xlc520.tk/blogImage/640-1698065409894-0.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h2 id="二、开始编排部署-elasticsearch-和-kibana" tabindex="-1"><a class="header-anchor" href="#二、开始编排部署-elasticsearch-和-kibana" aria-hidden="true">#</a> 二、开始编排部署（Elasticsearch 和 Kibana）</h2><p><code>Elasticsearch</code> 是一个<strong>开源的分布式搜索和分析引擎</strong>，最初由 Elasticsearch N.V.（现在是 Elastic N.V.）开发并维护。它是基于 <code>Apache Lucene</code> 搜索引擎构建的，专门设计用于处理和分析大规模的数据，提供了强大的全文搜索、结构化数据存储、分析和可视化功能。以下是 Elasticsearch 的主要特点和用途的概述：</p><ul><li><strong>分布式和实时</strong>：<code>Elasticsearch</code>是一个分布式系统，可以轻松地扩展到数百台服务器，以处理大量数据。它提供了实时搜索和分析，可以在毫秒级别内响应查询。</li><li><strong>全文搜索</strong>：<code>Elasticsearch</code> 以其卓越的全文搜索能力而闻名，可以对大量文本数据进行高效的搜索。它支持分词、模糊查询、通配符搜索、近似匹配等功能。</li><li><strong>结构化和非结构化数据</strong>：<code>Elasticsearch</code> 不仅支持全文搜索，还能够存储和索引结构化数据，如 <code>JSON</code>、<code>XML</code> 等。这使得它非常适用于存储各种类型的数据，从日志和事件数据到产品目录和传感器数据。</li><li><strong>多种用途</strong>：<code>Elasticsearch</code> 可用于多种用途，包括搜索引擎、日志和事件数据分析、性能监控、安全信息与事件管理 (<code>SIEM</code>)、文档存储、实时仪表板和可视化等。</li><li><strong>RESTful API</strong>：<code>Elasticsearch</code> 提供了一个易于使用的 <code>RESTful API</code>，使开发人员能够通过 HTTP 请求执行各种操作，包括索引管理、搜索、分析和聚合。</li><li><strong>分析和聚合</strong>：<code>Elasticsearch</code> 提供了丰富的分析和聚合功能，允许您从数据中提取有价值的见解。您可以执行聚合操作，生成图表和仪表板，以可视化数据。</li><li><strong>插件生态系统</strong>：<code>Elasticsearch</code> 具有丰富的插件生态系统，可以通过插件扩展其功能，包括监控、安全、报告等。</li><li><strong>安全性</strong>：<code>Elasticsearch</code> 提供了安全特性，包括身份验证、授权、传输层加密和字段级别的安全性，以保护数据免受未经授权的访问。</li><li><strong>强大的社区支持</strong>：Elasticsearch 拥有广泛的社区支持，有大量的文档、教程和第三方工具可用于帮助您学习和使用它。</li><li><strong>商业支持</strong>：Elastic N.V. 提供了 Elasticsearch 的商业支持和托管服务，以满足企业级需求。</li></ul><p>总之，Elasticsearch 是一个强大且多才多艺的搜索和分析引擎，适用于各种用途，从全文搜索到日志分析和可视化数据。它在各种行业中被广泛使用，包括<strong>搜索引擎</strong>、<strong>电子商务</strong>、<strong>日志管理</strong>、<strong>安全信息与事件管理、科学研究</strong>和更多领域。 <img src="https://static.xlc520.tk/blogImage/640-1698065409894-1.png" alt="图片" loading="lazy"></p><p>服务布局：</p><table><thead><tr><th>服务名称/主机名</th><th>开放端口</th><th></th></tr></thead><tbody><tr><td>node-1</td><td>9200</td><td>1G</td></tr><tr><td>node-2</td><td>9201</td><td>1G</td></tr><tr><td>node-3</td><td>9202</td><td>1G</td></tr><tr><td>kibana</td><td>5601</td><td>不限</td></tr></tbody></table><h3 id="_1-部署-docker" tabindex="-1"><a class="header-anchor" href="#_1-部署-docker" aria-hidden="true">#</a> 1）部署 docker</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装yum-config-manager配置工具</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> yum-utils

<span class="token comment"># 建议使用阿里云yum源：（推荐）</span>
<span class="token comment">#yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo</span>
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

<span class="token comment"># 安装docker-ce版本</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> docker-ce
<span class="token comment"># 启动并开机启动</span>
systemctl <span class="token builtin class-name">enable</span> <span class="token parameter variable">--now</span> <span class="token function">docker</span>
<span class="token function">docker</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-部署-docker-compose" tabindex="-1"><a class="header-anchor" href="#_2-部署-docker-compose" aria-hidden="true">#</a> 2）部署 docker-compose</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-SL</span> https://github.com/docker/compose/releases/download/v2.16.0/docker-compose-linux-x86_64 <span class="token parameter variable">-o</span> /usr/local/bin/docker-compose

<span class="token function">chmod</span> +x /usr/local/bin/docker-compose
<span class="token function">docker-compose</span> <span class="token parameter variable">--version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-创建网络" tabindex="-1"><a class="header-anchor" href="#_3-创建网络" aria-hidden="true">#</a> 3）创建网络</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建</span>
<span class="token function">docker</span> network create bigdata

<span class="token comment"># 查看</span>
<span class="token function">docker</span> network <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-创建挂载目录" tabindex="-1"><a class="header-anchor" href="#_4-创建挂载目录" aria-hidden="true">#</a> 4）创建挂载目录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#创建 es 目录</span>
<span class="token function">chmod</span> <span class="token number">777</span> ./es/node-<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">3</span><span class="token punctuation">}</span>/<span class="token punctuation">{</span>config,data,log<span class="token punctuation">}</span>
<span class="token function">chmod</span> <span class="token number">777</span> ./es/plugins
<span class="token comment"># 创建kibana的配置目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ./kibana/config

<span class="token comment">#目录授权</span>
<span class="token function">chmod</span> <span class="token number">777</span> ./es/node-<span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">..</span><span class="token number">3</span><span class="token punctuation">}</span>/<span class="token punctuation">{</span>config,data,log<span class="token punctuation">}</span>
<span class="token function">chmod</span> <span class="token number">777</span> ./es/plugins
<span class="token function">chmod</span> <span class="token number">777</span> ./kibana/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-修改-linux-句柄数" tabindex="-1"><a class="header-anchor" href="#_5-修改-linux-句柄数" aria-hidden="true">#</a> 5）修改 Linux 句柄数</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看当前最大句柄数</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-a</span> <span class="token operator">|</span> <span class="token function">grep</span> vm.max_map_count
<span class="token comment">#修改句柄数</span>
<span class="token function">vi</span> /etc/sysctl.conf
<span class="token assign-left variable">vm.max_map_count</span><span class="token operator">=</span><span class="token number">262144</span>

<span class="token comment">#临时生效，修改后需要重启才能生效，不想重启可以设置临时生效</span>
<span class="token function">sysctl</span> <span class="token parameter variable">-w</span> <span class="token assign-left variable">vm.max_map_count</span><span class="token operator">=</span><span class="token number">262144</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-修改句柄数和最大线程数" tabindex="-1"><a class="header-anchor" href="#_6-修改句柄数和最大线程数" aria-hidden="true">#</a> 6）修改句柄数和最大线程数</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#修改后需要重新登录生效</span>
<span class="token function">vi</span> /etc/security/limits.conf

<span class="token comment"># 添加以下内容</span>
* soft nofile <span class="token number">65535</span>
* hard nofile <span class="token number">65535</span>
* soft nproc <span class="token number">4096</span>
* hard nproc <span class="token number">4096</span>

<span class="token comment"># 重启服务，-h 立刻重启，默认间隔一段时间才会开始重启</span>
<span class="token function">reboot</span> <span class="token parameter variable">-h</span> now
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-添加-ik-分词器" tabindex="-1"><a class="header-anchor" href="#_7-添加-ik-分词器" aria-hidden="true">#</a> 7）添加 IK 分词器</h3><p>GitHub 下载地址：https://github.com/medcl/elasticsearch-analysis-ik/releases</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 将下载的分词器复制到ES安装目录的plugins目录中并进行解压</span>

<span class="token function">mkdir</span> ./es/plugins/ik <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> ./es/plugins/ik
<span class="token function">wget</span> https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.17.5/elasticsearch-analysis-ik-7.17.5.zip
<span class="token function">unzip</span> elasticsearch-analysis-ik-7.17.5.zip 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-编写配置文件" tabindex="-1"><a class="header-anchor" href="#_8-编写配置文件" aria-hidden="true">#</a> 8）编写配置文件</h3><h4 id="_1、node-1" tabindex="-1"><a class="header-anchor" href="#_1、node-1" aria-hidden="true">#</a> 1、node-1</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>./es/node<span class="token punctuation">-</span>1/config/elasticsearch.yml
<span class="token comment">#集群名称</span>
<span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> elastic
<span class="token comment">#当前该节点的名称</span>
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span><span class="token number">1</span>
<span class="token comment">#是不是有资格竞选主节点</span>
<span class="token key atrule">node.master</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment">#是否存储数据</span>
<span class="token key atrule">node.data</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment">#最大集群节点数</span>
<span class="token key atrule">node.max_local_storage_nodes</span><span class="token punctuation">:</span> <span class="token number">3</span>
<span class="token comment">#给当前节点自定义属性（可以省略）</span>
<span class="token comment">#node.attr.rack: r1</span>
<span class="token comment">#数据存档位置</span>
<span class="token key atrule">path.data</span><span class="token punctuation">:</span> /usr/share/elasticsearch/data
<span class="token comment">#日志存放位置</span>
<span class="token key atrule">path.logs</span><span class="token punctuation">:</span> /usr/share/elasticsearch/log
<span class="token comment">#是否开启时锁定内存（默认为是）</span>
<span class="token comment">#bootstrap.memory_lock: true</span>
<span class="token comment">#设置网关地址，我是被这个坑死了，这个地址我原先填写了自己的实际物理IP地址，</span>
<span class="token comment">#然后启动一直报无效的IP地址，无法注入9300端口，这里只需要填写0.0.0.0</span>
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> 0.0.0.0
<span class="token comment">#设置映射端口</span>
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9200</span>
<span class="token comment">#内部节点之间沟通端口</span>
<span class="token key atrule">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token number">9300</span>
<span class="token comment">#集群发现默认值为127.0.0.1:9300,如果要在其他主机上形成包含节点的群集,如果搭建集群则需要填写</span>
<span class="token comment">#es7.x 之后新增的配置，写入候选主节点的设备地址，在开启服务后可以被选为主节点，也就是说把所有的节点都写上</span>
<span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node-1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;node-2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;node-3&quot;</span><span class="token punctuation">]</span>
<span class="token comment">#当你在搭建集群的时候，选出合格的节点集群，有些人说的太官方了，</span>
<span class="token comment">#其实就是，让你选择比较好的几个节点，在你节点启动时，在这些节点中选一个做领导者，</span>
<span class="token comment">#如果你不设置呢，elasticsearch就会自己选举，这里我们把三个节点都写上</span>
<span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node-1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;node-2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;node-3&quot;</span><span class="token punctuation">]</span>
<span class="token comment">#在群集完全重新启动后阻止初始恢复，直到启动N个节点</span>
<span class="token comment">#简单点说在集群启动后，至少复活多少个节点以上，那么这个服务才可以被使用，否则不可以被使用，</span>
<span class="token key atrule">gateway.recover_after_nodes</span><span class="token punctuation">:</span> <span class="token number">2</span>
<span class="token comment">#删除索引是是否需要显示其名称，默认为显示</span>
<span class="token comment">#action.destructive_requires_name: true</span>
<span class="token comment"># 禁用安全配置，否则查询的时候会提示警告</span>
<span class="token key atrule">xpack.security.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、node-2" tabindex="-1"><a class="header-anchor" href="#_2、node-2" aria-hidden="true">#</a> 2、node-2</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>./es/node<span class="token punctuation">-</span>2/config/elasticsearch.yml
<span class="token comment">#集群名称</span>
<span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> elastic
<span class="token comment">#当前该节点的名称</span>
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span><span class="token number">2</span>
<span class="token comment">#是不是有资格竞选主节点</span>
<span class="token key atrule">node.master</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment">#是否存储数据</span>
<span class="token key atrule">node.data</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment">#最大集群节点数</span>
<span class="token key atrule">node.max_local_storage_nodes</span><span class="token punctuation">:</span> <span class="token number">3</span>
<span class="token comment">#给当前节点自定义属性（可以省略）</span>
<span class="token comment">#node.attr.rack: r1</span>
<span class="token comment">#数据存档位置</span>
<span class="token key atrule">path.data</span><span class="token punctuation">:</span> /usr/share/elasticsearch/data
<span class="token comment">#日志存放位置</span>
<span class="token key atrule">path.logs</span><span class="token punctuation">:</span> /usr/share/elasticsearch/log
<span class="token comment">#是否开启时锁定内存（默认为是）</span>
<span class="token comment">#bootstrap.memory_lock: true</span>
<span class="token comment">#设置网关地址，我是被这个坑死了，这个地址我原先填写了自己的实际物理IP地址，</span>
<span class="token comment">#然后启动一直报无效的IP地址，无法注入9300端口，这里只需要填写0.0.0.0</span>
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> 0.0.0.0
<span class="token comment">#设置映射端口</span>
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9200</span>
<span class="token comment">#内部节点之间沟通端口</span>
<span class="token key atrule">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token number">9300</span>
<span class="token comment">#集群发现默认值为127.0.0.1:9300,如果要在其他主机上形成包含节点的群集,如果搭建集群则需要填写</span>
<span class="token comment">#es7.x 之后新增的配置，写入候选主节点的设备地址，在开启服务后可以被选为主节点，也就是说把所有的节点都写上</span>
<span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node-1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;node-2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;node-3&quot;</span><span class="token punctuation">]</span>
<span class="token comment">#当你在搭建集群的时候，选出合格的节点集群，有些人说的太官方了，</span>
<span class="token comment">#其实就是，让你选择比较好的几个节点，在你节点启动时，在这些节点中选一个做领导者，</span>
<span class="token comment">#如果你不设置呢，elasticsearch就会自己选举，这里我们把三个节点都写上</span>
<span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node-1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;node-2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;node-3&quot;</span><span class="token punctuation">]</span>
<span class="token comment">#在群集完全重新启动后阻止初始恢复，直到启动N个节点</span>
<span class="token comment">#简单点说在集群启动后，至少复活多少个节点以上，那么这个服务才可以被使用，否则不可以被使用，</span>
<span class="token key atrule">gateway.recover_after_nodes</span><span class="token punctuation">:</span> <span class="token number">2</span>
<span class="token comment">#删除索引是是否需要显示其名称，默认为显示</span>
<span class="token comment">#action.destructive_requires_name: true</span>
<span class="token comment"># 禁用安全配置，否则查询的时候会提示警告</span>
<span class="token key atrule">xpack.security.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3、node-3" tabindex="-1"><a class="header-anchor" href="#_3、node-3" aria-hidden="true">#</a> 3、node-3</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>./es/node<span class="token punctuation">-</span>3/config/elasticsearch.yml
<span class="token comment">#集群名称</span>
<span class="token key atrule">cluster.name</span><span class="token punctuation">:</span> elastic
<span class="token comment">#当前该节点的名称</span>
<span class="token key atrule">node.name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span><span class="token number">3</span>
<span class="token comment">#是不是有资格竞选主节点</span>
<span class="token key atrule">node.master</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment">#是否存储数据</span>
<span class="token key atrule">node.data</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment">#最大集群节点数</span>
<span class="token key atrule">node.max_local_storage_nodes</span><span class="token punctuation">:</span> <span class="token number">3</span>
<span class="token comment">#给当前节点自定义属性（可以省略）</span>
<span class="token comment">#node.attr.rack: r1</span>
<span class="token comment">#数据存档位置</span>
<span class="token key atrule">path.data</span><span class="token punctuation">:</span> /usr/share/elasticsearch/data
<span class="token comment">#日志存放位置</span>
<span class="token key atrule">path.logs</span><span class="token punctuation">:</span> /usr/share/elasticsearch/log
<span class="token comment">#是否开启时锁定内存（默认为是）</span>
<span class="token comment">#bootstrap.memory_lock: true</span>
<span class="token comment">#设置网关地址，我是被这个坑死了，这个地址我原先填写了自己的实际物理IP地址，</span>
<span class="token comment">#然后启动一直报无效的IP地址，无法注入9300端口，这里只需要填写0.0.0.0</span>
<span class="token key atrule">network.host</span><span class="token punctuation">:</span> 0.0.0.0
<span class="token comment">#设置映射端口</span>
<span class="token key atrule">http.port</span><span class="token punctuation">:</span> <span class="token number">9200</span>
<span class="token comment">#内部节点之间沟通端口</span>
<span class="token key atrule">transport.tcp.port</span><span class="token punctuation">:</span> <span class="token number">9300</span>
<span class="token comment">#集群发现默认值为127.0.0.1:9300,如果要在其他主机上形成包含节点的群集,如果搭建集群则需要填写</span>
<span class="token comment">#es7.x 之后新增的配置，写入候选主节点的设备地址，在开启服务后可以被选为主节点，也就是说把所有的节点都写上</span>
<span class="token key atrule">discovery.seed_hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node-1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;node-2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;node-3&quot;</span><span class="token punctuation">]</span>
<span class="token comment">#当你在搭建集群的时候，选出合格的节点集群，有些人说的太官方了，</span>
<span class="token comment">#其实就是，让你选择比较好的几个节点，在你节点启动时，在这些节点中选一个做领导者，</span>
<span class="token comment">#如果你不设置呢，elasticsearch就会自己选举，这里我们把三个节点都写上</span>
<span class="token key atrule">cluster.initial_master_nodes</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node-1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;node-2&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;node-3&quot;</span><span class="token punctuation">]</span>
<span class="token comment">#在群集完全重新启动后阻止初始恢复，直到启动N个节点</span>
<span class="token comment">#简单点说在集群启动后，至少复活多少个节点以上，那么这个服务才可以被使用，否则不可以被使用，</span>
<span class="token key atrule">gateway.recover_after_nodes</span><span class="token punctuation">:</span> <span class="token number">2</span>
<span class="token comment">#删除索引是是否需要显示其名称，默认为显示</span>
<span class="token comment">#action.destructive_requires_name: true</span>
<span class="token comment"># 禁用安全配置，否则查询的时候会提示警告</span>
<span class="token key atrule">xpack.security.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、kibana" tabindex="-1"><a class="header-anchor" href="#_4、kibana" aria-hidden="true">#</a> 4、kibana</h4><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>./kibana/config/kibana.yml
<span class="token key atrule">server.host</span><span class="token punctuation">:</span> 0.0.0.0
<span class="token comment"># 监听端口</span>
<span class="token key atrule">server.port</span><span class="token punctuation">:</span> <span class="token number">5601</span>
<span class="token key atrule">server.name</span><span class="token punctuation">:</span> <span class="token string">&quot;kibana&quot;</span>

<span class="token comment"># kibana访问es服务器的URL,就可以有多个，以逗号&quot;,&quot;隔开</span>
<span class="token key atrule">elasticsearch.hosts</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;http://node-1:9200&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;http://node-2:9201&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;http://node-3:9202&quot;</span><span class="token punctuation">]</span>
<span class="token key atrule">monitoring.ui.container.elasticsearch.enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment"># kibana访问Elasticsearch的账号与密码(如果ElasticSearch设置了的话)</span>
<span class="token key atrule">elasticsearch.username</span><span class="token punctuation">:</span> <span class="token string">&quot;kibana&quot;</span>
<span class="token key atrule">elasticsearch.password</span><span class="token punctuation">:</span> <span class="token string">&quot;12345&quot;</span>

<span class="token comment"># kibana日志文件存储路径</span>
<span class="token key atrule">logging.dest</span><span class="token punctuation">:</span> stdout
<span class="token comment"># 此值为true时，禁止所有日志记录输出</span>
<span class="token key atrule">logging.silent</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token comment"># 此值为true时，禁止除错误消息之外的所有日志记录输出</span>
<span class="token key atrule">logging.quiet</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
<span class="token comment"># 此值为true时，记录所有事件，包括系统使用信息和所有请求</span>
<span class="token key atrule">logging.verbose</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token key atrule">ops.interval</span><span class="token punctuation">:</span> <span class="token number">5000</span>
<span class="token comment"># kibana web语言</span>
<span class="token key atrule">i18n.locale</span><span class="token punctuation">:</span> <span class="token string">&quot;zh-CN&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-构建镜像" tabindex="-1"><a class="header-anchor" href="#_9-构建镜像" aria-hidden="true">#</a> 9）构建镜像</h3><p>这里就用别人已经构建好的好的镜像，不再重复构建镜像了，如果不了解怎么构建镜像，可以私信我。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">### ES</span>
<span class="token function">docker</span> pull elasticsearch:7.17.5
<span class="token comment"># tag</span>
<span class="token function">docker</span> tag docker.io/library/elasticsearch:7.17.5 registry.cn-hangzhou.aliyuncs.com/bigdata_cloudnative/elasticsearch:7.17.5
<span class="token comment"># 登录将镜像推送到阿里云</span>
<span class="token function">docker</span> push registry.cn-hangzhou.aliyuncs.com/bigdata_cloudnative/elasticsearch:7.17.5

<span class="token comment">### kibana</span>
<span class="token function">docker</span> pull docker.io/library/kibana:7.17.5
<span class="token function">docker</span> tag docker.io/library/kibana:7.17.5 registry.cn-hangzhou.aliyuncs.com/bigdata_cloudnative/kibana:7.17.5
<span class="token function">docker</span> push registry.cn-hangzhou.aliyuncs.com/bigdata_cloudnative/kibana:7.17.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-编排-docker-compose-yml" tabindex="-1"><a class="header-anchor" href="#_10-编排-docker-compose-yml" aria-hidden="true">#</a> 10）编排 docker-compose.yml</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">node-1</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>hangzhou.aliyuncs.com/bigdata_cloudnative/elasticsearch<span class="token punctuation">:</span>7.17.5
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span><span class="token number">1</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span><span class="token number">1</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;ES_JAVA_OPTS=-Xms1024m -Xmx1024m&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;TZ=Asia/Shanghai&quot;</span>
    <span class="token key atrule">ulimits</span><span class="token punctuation">:</span>
      <span class="token key atrule">memlock</span><span class="token punctuation">:</span>
        <span class="token key atrule">soft</span><span class="token punctuation">:</span> <span class="token number">-1</span>
        <span class="token key atrule">hard</span><span class="token punctuation">:</span> <span class="token number">-1</span>
      <span class="token key atrule">nofile</span><span class="token punctuation">:</span>
        <span class="token key atrule">soft</span><span class="token punctuation">:</span> <span class="token number">65536</span>
        <span class="token key atrule">hard</span><span class="token punctuation">:</span> <span class="token number">65536</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9200:9200&quot;</span>
    <span class="token key atrule">logging</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> <span class="token string">&quot;json-file&quot;</span>
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
        <span class="token key atrule">max-size</span><span class="token punctuation">:</span> <span class="token string">&quot;50m&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./es/node<span class="token punctuation">-</span>1/config/elasticsearch.yml<span class="token punctuation">:</span>/usr/share/elasticsearch/config/elasticsearch.yml
      <span class="token punctuation">-</span> ./es/plugins<span class="token punctuation">:</span>/usr/share/elasticsearch/plugins
      <span class="token punctuation">-</span> ./es/node<span class="token punctuation">-</span>1/data<span class="token punctuation">:</span>/usr/share/elasticsearch/data
      <span class="token punctuation">-</span> ./es/node<span class="token punctuation">-</span>1/log<span class="token punctuation">:</span>/usr/share/elasticsearch/log
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> bigdata
    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
      <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;CMD-SHELL&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;curl -I http://localhost:9200 || exit 1&quot;</span><span class="token punctuation">]</span>
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> 10s
      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 10s
      <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">5</span>
  <span class="token key atrule">node-2</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>hangzhou.aliyuncs.com/bigdata_cloudnative/elasticsearch<span class="token punctuation">:</span>7.17.5
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span><span class="token number">2</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span><span class="token number">2</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;ES_JAVA_OPTS=-Xms1024m -Xmx1024m&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;TZ=Asia/Shanghai&quot;</span>
    <span class="token key atrule">ulimits</span><span class="token punctuation">:</span>
      <span class="token key atrule">memlock</span><span class="token punctuation">:</span>
        <span class="token key atrule">soft</span><span class="token punctuation">:</span> <span class="token number">-1</span>
        <span class="token key atrule">hard</span><span class="token punctuation">:</span> <span class="token number">-1</span>
      <span class="token key atrule">nofile</span><span class="token punctuation">:</span>
        <span class="token key atrule">soft</span><span class="token punctuation">:</span> <span class="token number">65536</span>
        <span class="token key atrule">hard</span><span class="token punctuation">:</span> <span class="token number">65536</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9201:9200&quot;</span>
    <span class="token key atrule">logging</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> <span class="token string">&quot;json-file&quot;</span>
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
        <span class="token key atrule">max-size</span><span class="token punctuation">:</span> <span class="token string">&quot;50m&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./es/node<span class="token punctuation">-</span>2/config/elasticsearch.yml<span class="token punctuation">:</span>/usr/share/elasticsearch/config/elasticsearch.yml
      <span class="token punctuation">-</span> ./es/plugins<span class="token punctuation">:</span>/usr/share/elasticsearch/plugins
      <span class="token punctuation">-</span> ./es/node<span class="token punctuation">-</span>2/data<span class="token punctuation">:</span>/usr/share/elasticsearch/data
      <span class="token punctuation">-</span> ./es/node<span class="token punctuation">-</span>2/log<span class="token punctuation">:</span>/usr/share/elasticsearch/log
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> bigdata
    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
      <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;CMD-SHELL&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;curl -I http://localhost:9200 || exit 1&quot;</span><span class="token punctuation">]</span>
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> 10s
      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 10s
      <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">5</span>
  <span class="token key atrule">node-3</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>hangzhou.aliyuncs.com/bigdata_cloudnative/elasticsearch<span class="token punctuation">:</span>7.17.5
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span><span class="token number">3</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span><span class="token number">3</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;ES_JAVA_OPTS=-Xms1024m -Xmx1024m&quot;</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;TZ=Asia/Shanghai&quot;</span>
    <span class="token key atrule">ulimits</span><span class="token punctuation">:</span>
      <span class="token key atrule">memlock</span><span class="token punctuation">:</span>
        <span class="token key atrule">soft</span><span class="token punctuation">:</span> <span class="token number">-1</span>
        <span class="token key atrule">hard</span><span class="token punctuation">:</span> <span class="token number">-1</span>
      <span class="token key atrule">nofile</span><span class="token punctuation">:</span>
        <span class="token key atrule">soft</span><span class="token punctuation">:</span> <span class="token number">65536</span>
        <span class="token key atrule">hard</span><span class="token punctuation">:</span> <span class="token number">65536</span>
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;9202:9200&quot;</span>
    <span class="token key atrule">logging</span><span class="token punctuation">:</span>
      <span class="token key atrule">driver</span><span class="token punctuation">:</span> <span class="token string">&quot;json-file&quot;</span>
      <span class="token key atrule">options</span><span class="token punctuation">:</span>
        <span class="token key atrule">max-size</span><span class="token punctuation">:</span> <span class="token string">&quot;50m&quot;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./es/node<span class="token punctuation">-</span>3/config/elasticsearch.yml<span class="token punctuation">:</span>/usr/share/elasticsearch/config/elasticsearch.yml
      <span class="token punctuation">-</span> ./es/plugins<span class="token punctuation">:</span>/usr/share/elasticsearch/plugins
      <span class="token punctuation">-</span> ./es/node<span class="token punctuation">-</span>3/data<span class="token punctuation">:</span>/usr/share/elasticsearch/data
      <span class="token punctuation">-</span> ./es/node<span class="token punctuation">-</span>3/log<span class="token punctuation">:</span>/usr/share/elasticsearch/log
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> bigdata
    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
      <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;CMD-SHELL&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;curl -I http://localhost:9200 || exit 1&quot;</span><span class="token punctuation">]</span>
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> 10s
      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 10s
      <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">5</span>
  <span class="token key atrule">kibana</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> kibana
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> kibana
    <span class="token key atrule">image</span><span class="token punctuation">:</span> registry.cn<span class="token punctuation">-</span>hangzhou.aliyuncs.com/bigdata_cloudnative/kibana<span class="token punctuation">:</span>7.17.5
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> <span class="token string">&#39;Asia/Shanghai&#39;</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> ./kibana/config/kibana.yml<span class="token punctuation">:</span>/usr/share/kibana/config/kibana.yml
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 5601<span class="token punctuation">:</span><span class="token number">5601</span>
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> bigdata
    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
      <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;CMD-SHELL&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;curl -I http://localhost:5601 || exit 1&quot;</span><span class="token punctuation">]</span>
      <span class="token key atrule">interval</span><span class="token punctuation">:</span> 10s
      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 10s
      <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">5</span>

<span class="token comment"># 连接外部网络</span>
<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">bigdata</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开始执行部署</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>

<span class="token comment"># 查看</span>
<span class="token function">docker-compose</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-测试验证" tabindex="-1"><a class="header-anchor" href="#_11-测试验证" aria-hidden="true">#</a> 11）测试验证</h3><p>ES 访问地址：<code>http://ip:9200</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> <span class="token function">ps</span>
<span class="token function">curl</span> localhost:9200
<span class="token function">curl</span> localhost:9200/_cat/health
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://static.xlc520.tk/blogImage/640-1698065409894-2.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>kibana：<code>http://ip:5601/</code></p><figure><img src="https://static.xlc520.tk/blogImage/640-1698065409894-3.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>git 地址：https://gitee.com/hadoop-bigdata/docker-compose-es-kibana.git</p>`,52),c=[l];function i(p,o){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","docker-compose 快速部署 Elasticsearch 和 Kibana.html.vue"]]);export{d as default};
