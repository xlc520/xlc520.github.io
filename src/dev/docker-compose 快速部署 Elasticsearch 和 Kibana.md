---
author: xlc520
title: docker-compose 快速部署 Elasticsearch 和 Kibana
description: 
date: 2023-10-24
category: Java
tag: Java
article: true
timeline: true
icon: java
---



# docker-compose 快速部署 Elasticsearch 和 Kibana

## 一、概述

使用 Docker Compose 快速部署 Elasticsearch 和 Kibana 可以帮助您在本地或开发环境中轻松设置和管理这两个重要的工具，用于存储和可视化日志数据、监控和搜索。以下是一个概述的步骤：

1. 准备 Docker 和 Docker Compose：确保您已经安装了 Docker 和 Docker Compose。您可以从 Docker 官方网站上获取它们的安装程序。
2. 创建 Docker Compose 配置文件：创建一个名为 docker-compose.yml 的文件，它将定义 Elasticsearch 和 Kibana 的容器配置。这个文件应该包括服务名称、映像、环境变量、端口映射等信息。
3. 配置 Elasticsearch：在 docker-compose.yml 文件中，配置 Elasticsearch 容器。您通常需要指定节点名称、发现类型等设置。使用容器版本的 Elasticsearch 镜像。
4. 配置 Kibana：在 docker-compose.yml 文件中，配置 Kibana 容器。指定要监听的端口，并确保它依赖于 Elasticsearch 服务。
5. 数据卷设置：在 docker-compose.yml 文件中，通常会使用数据卷来保存 Elasticsearch 数据。这确保了数据的持久性。
6. 启动容器：在终端中，导航到包含 `docker-compose.yml` 文件的目录，并运行以下命令以启动 Elasticsearch 和 Kibana。

```
docker-compose up -d
# -d 选项用于在后台运行容器。
```

1. 等待服务启动：容器启动后，等待一段时间以确保 Elasticsearch 和 Kibana 完全启动。
2. 访问 Kibana 控制台：打开您的浏览器，访问 Kibana 控制台的地址，默认情况下是：`http://localhost:5601`。默认情况下，Kibana 不需要用户名和密码。
3. 开始使用：现在，您可以使用 Kibana 控制台来管理和可视化 Elasticsearch 中的数据，执行查询、创建仪表板等操作。

这些步骤将帮助您快速部署 Elasticsearch 和 Kibana，以便进行日志分析、数据可视化和搜索等操作。请注意，您可以根据需要在 `docker-compose.yml` 文件中更改版本和配置选项。确保您的系统资源足够以支持 Elasticsearch 和 Kibana 的运行。



![图片](E:/source/blogImage/640-1698065409894-0.png)

## 二、开始编排部署（Elasticsearch 和 Kibana）

`Elasticsearch` 是一个**开源的分布式搜索和分析引擎**，最初由 Elasticsearch N.V.（现在是 Elastic N.V.）开发并维护。它是基于 `Apache Lucene` 搜索引擎构建的，专门设计用于处理和分析大规模的数据，提供了强大的全文搜索、结构化数据存储、分析和可视化功能。以下是 Elasticsearch 的主要特点和用途的概述：

- **分布式和实时**：`Elasticsearch`是一个分布式系统，可以轻松地扩展到数百台服务器，以处理大量数据。它提供了实时搜索和分析，可以在毫秒级别内响应查询。
- **全文搜索**：`Elasticsearch` 以其卓越的全文搜索能力而闻名，可以对大量文本数据进行高效的搜索。它支持分词、模糊查询、通配符搜索、近似匹配等功能。
- **结构化和非结构化数据**：`Elasticsearch` 不仅支持全文搜索，还能够存储和索引结构化数据，如 `JSON`、`XML` 等。这使得它非常适用于存储各种类型的数据，从日志和事件数据到产品目录和传感器数据。
- **多种用途**：`Elasticsearch` 可用于多种用途，包括搜索引擎、日志和事件数据分析、性能监控、安全信息与事件管理 (`SIEM`)、文档存储、实时仪表板和可视化等。
- **RESTful API**：`Elasticsearch` 提供了一个易于使用的 `RESTful API`，使开发人员能够通过 HTTP 请求执行各种操作，包括索引管理、搜索、分析和聚合。
- **分析和聚合**：`Elasticsearch` 提供了丰富的分析和聚合功能，允许您从数据中提取有价值的见解。您可以执行聚合操作，生成图表和仪表板，以可视化数据。
- **插件生态系统**：`Elasticsearch` 具有丰富的插件生态系统，可以通过插件扩展其功能，包括监控、安全、报告等。
- **安全性**：`Elasticsearch` 提供了安全特性，包括身份验证、授权、传输层加密和字段级别的安全性，以保护数据免受未经授权的访问。
- **强大的社区支持**：Elasticsearch 拥有广泛的社区支持，有大量的文档、教程和第三方工具可用于帮助您学习和使用它。
- **商业支持**：Elastic N.V. 提供了 Elasticsearch 的商业支持和托管服务，以满足企业级需求。

总之，Elasticsearch 是一个强大且多才多艺的搜索和分析引擎，适用于各种用途，从全文搜索到日志分析和可视化数据。它在各种行业中被广泛使用，包括**搜索引擎**、**电子商务**、**日志管理**、**安全信息与事件管理、科学研究**和更多领域。
![图片](E:/source/blogImage/640-1698065409894-1.png)

服务布局：

| 服务名称/主机名 | 开放端口 |      |
| --------------- | -------- | ---- |
| node-1          | 9200     | 1G   |
| node-2          | 9201     | 1G   |
| node-3          | 9202     | 1G   |
| kibana          | 5601     | 不限 |

### 1）部署 docker

```shell
# 安装yum-config-manager配置工具
yum -y install yum-utils

# 建议使用阿里云yum源：（推荐）
#yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo

# 安装docker-ce版本
yum install -y docker-ce
# 启动并开机启动
systemctl enable --now docker
docker --version
```

### 2）部署 docker-compose

```shell
curl -SL https://github.com/docker/compose/releases/download/v2.16.0/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose

chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

### 3）创建网络

```shell
# 创建
docker network create bigdata

# 查看
docker network ls
```

### 4）创建挂载目录

```shell
#创建 es 目录
chmod 777 ./es/node-{1..3}/{config,data,log}
chmod 777 ./es/plugins
# 创建kibana的配置目录
mkdir -p ./kibana/config

#目录授权
chmod 777 ./es/node-{1..3}/{config,data,log}
chmod 777 ./es/plugins
chmod 777 ./kibana/config
```

### 5）修改 Linux 句柄数

```shell
#查看当前最大句柄数
sysctl -a | grep vm.max_map_count
#修改句柄数
vi /etc/sysctl.conf
vm.max_map_count=262144

#临时生效，修改后需要重启才能生效，不想重启可以设置临时生效
sysctl -w vm.max_map_count=262144
```

### 6）修改句柄数和最大线程数

```shell
#修改后需要重新登录生效
vi /etc/security/limits.conf

# 添加以下内容
* soft nofile 65535
* hard nofile 65535
* soft nproc 4096
* hard nproc 4096

# 重启服务，-h 立刻重启，默认间隔一段时间才会开始重启
reboot -h now
```

### 7）添加 IK 分词器

GitHub 下载地址：https://github.com/medcl/elasticsearch-analysis-ik/releases

```shell
# 将下载的分词器复制到ES安装目录的plugins目录中并进行解压

mkdir ./es/plugins/ik && cd ./es/plugins/ik
wget https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.17.5/elasticsearch-analysis-ik-7.17.5.zip
unzip elasticsearch-analysis-ik-7.17.5.zip 
```

### 8）编写配置文件

#### 1、node-1

```yaml
./es/node-1/config/elasticsearch.yml
#集群名称
cluster.name: elastic
#当前该节点的名称
node.name: node-1
#是不是有资格竞选主节点
node.master: true
#是否存储数据
node.data: true
#最大集群节点数
node.max_local_storage_nodes: 3
#给当前节点自定义属性（可以省略）
#node.attr.rack: r1
#数据存档位置
path.data: /usr/share/elasticsearch/data
#日志存放位置
path.logs: /usr/share/elasticsearch/log
#是否开启时锁定内存（默认为是）
#bootstrap.memory_lock: true
#设置网关地址，我是被这个坑死了，这个地址我原先填写了自己的实际物理IP地址，
#然后启动一直报无效的IP地址，无法注入9300端口，这里只需要填写0.0.0.0
network.host: 0.0.0.0
#设置映射端口
http.port: 9200
#内部节点之间沟通端口
transport.tcp.port: 9300
#集群发现默认值为127.0.0.1:9300,如果要在其他主机上形成包含节点的群集,如果搭建集群则需要填写
#es7.x 之后新增的配置，写入候选主节点的设备地址，在开启服务后可以被选为主节点，也就是说把所有的节点都写上
discovery.seed_hosts: ["node-1","node-2","node-3"]
#当你在搭建集群的时候，选出合格的节点集群，有些人说的太官方了，
#其实就是，让你选择比较好的几个节点，在你节点启动时，在这些节点中选一个做领导者，
#如果你不设置呢，elasticsearch就会自己选举，这里我们把三个节点都写上
cluster.initial_master_nodes: ["node-1","node-2","node-3"]
#在群集完全重新启动后阻止初始恢复，直到启动N个节点
#简单点说在集群启动后，至少复活多少个节点以上，那么这个服务才可以被使用，否则不可以被使用，
gateway.recover_after_nodes: 2
#删除索引是是否需要显示其名称，默认为显示
#action.destructive_requires_name: true
# 禁用安全配置，否则查询的时候会提示警告
xpack.security.enabled: false
```

#### 2、node-2

```yaml
./es/node-2/config/elasticsearch.yml
#集群名称
cluster.name: elastic
#当前该节点的名称
node.name: node-2
#是不是有资格竞选主节点
node.master: true
#是否存储数据
node.data: true
#最大集群节点数
node.max_local_storage_nodes: 3
#给当前节点自定义属性（可以省略）
#node.attr.rack: r1
#数据存档位置
path.data: /usr/share/elasticsearch/data
#日志存放位置
path.logs: /usr/share/elasticsearch/log
#是否开启时锁定内存（默认为是）
#bootstrap.memory_lock: true
#设置网关地址，我是被这个坑死了，这个地址我原先填写了自己的实际物理IP地址，
#然后启动一直报无效的IP地址，无法注入9300端口，这里只需要填写0.0.0.0
network.host: 0.0.0.0
#设置映射端口
http.port: 9200
#内部节点之间沟通端口
transport.tcp.port: 9300
#集群发现默认值为127.0.0.1:9300,如果要在其他主机上形成包含节点的群集,如果搭建集群则需要填写
#es7.x 之后新增的配置，写入候选主节点的设备地址，在开启服务后可以被选为主节点，也就是说把所有的节点都写上
discovery.seed_hosts: ["node-1","node-2","node-3"]
#当你在搭建集群的时候，选出合格的节点集群，有些人说的太官方了，
#其实就是，让你选择比较好的几个节点，在你节点启动时，在这些节点中选一个做领导者，
#如果你不设置呢，elasticsearch就会自己选举，这里我们把三个节点都写上
cluster.initial_master_nodes: ["node-1","node-2","node-3"]
#在群集完全重新启动后阻止初始恢复，直到启动N个节点
#简单点说在集群启动后，至少复活多少个节点以上，那么这个服务才可以被使用，否则不可以被使用，
gateway.recover_after_nodes: 2
#删除索引是是否需要显示其名称，默认为显示
#action.destructive_requires_name: true
# 禁用安全配置，否则查询的时候会提示警告
xpack.security.enabled: false
```

#### 3、node-3

```yaml
./es/node-3/config/elasticsearch.yml
#集群名称
cluster.name: elastic
#当前该节点的名称
node.name: node-3
#是不是有资格竞选主节点
node.master: true
#是否存储数据
node.data: true
#最大集群节点数
node.max_local_storage_nodes: 3
#给当前节点自定义属性（可以省略）
#node.attr.rack: r1
#数据存档位置
path.data: /usr/share/elasticsearch/data
#日志存放位置
path.logs: /usr/share/elasticsearch/log
#是否开启时锁定内存（默认为是）
#bootstrap.memory_lock: true
#设置网关地址，我是被这个坑死了，这个地址我原先填写了自己的实际物理IP地址，
#然后启动一直报无效的IP地址，无法注入9300端口，这里只需要填写0.0.0.0
network.host: 0.0.0.0
#设置映射端口
http.port: 9200
#内部节点之间沟通端口
transport.tcp.port: 9300
#集群发现默认值为127.0.0.1:9300,如果要在其他主机上形成包含节点的群集,如果搭建集群则需要填写
#es7.x 之后新增的配置，写入候选主节点的设备地址，在开启服务后可以被选为主节点，也就是说把所有的节点都写上
discovery.seed_hosts: ["node-1","node-2","node-3"]
#当你在搭建集群的时候，选出合格的节点集群，有些人说的太官方了，
#其实就是，让你选择比较好的几个节点，在你节点启动时，在这些节点中选一个做领导者，
#如果你不设置呢，elasticsearch就会自己选举，这里我们把三个节点都写上
cluster.initial_master_nodes: ["node-1","node-2","node-3"]
#在群集完全重新启动后阻止初始恢复，直到启动N个节点
#简单点说在集群启动后，至少复活多少个节点以上，那么这个服务才可以被使用，否则不可以被使用，
gateway.recover_after_nodes: 2
#删除索引是是否需要显示其名称，默认为显示
#action.destructive_requires_name: true
# 禁用安全配置，否则查询的时候会提示警告
xpack.security.enabled: false
```

#### 4、kibana

```yaml
./kibana/config/kibana.yml
server.host: 0.0.0.0
# 监听端口
server.port: 5601
server.name: "kibana"

# kibana访问es服务器的URL,就可以有多个，以逗号","隔开
elasticsearch.hosts: ["http://node-1:9200","http://node-2:9201","http://node-3:9202"]
monitoring.ui.container.elasticsearch.enabled: true
# kibana访问Elasticsearch的账号与密码(如果ElasticSearch设置了的话)
elasticsearch.username: "kibana"
elasticsearch.password: "12345"

# kibana日志文件存储路径
logging.dest: stdout
# 此值为true时，禁止所有日志记录输出
logging.silent: false
# 此值为true时，禁止除错误消息之外的所有日志记录输出
logging.quiet: false
# 此值为true时，记录所有事件，包括系统使用信息和所有请求
logging.verbose: false

ops.interval: 5000
# kibana web语言
i18n.locale: "zh-CN"
```

### 9）构建镜像

这里就用别人已经构建好的好的镜像，不再重复构建镜像了，如果不了解怎么构建镜像，可以私信我。

```shell
### ES
docker pull elasticsearch:7.17.5
# tag
docker tag docker.io/library/elasticsearch:7.17.5 registry.cn-hangzhou.aliyuncs.com/bigdata_cloudnative/elasticsearch:7.17.5
# 登录将镜像推送到阿里云
docker push registry.cn-hangzhou.aliyuncs.com/bigdata_cloudnative/elasticsearch:7.17.5

### kibana
docker pull docker.io/library/kibana:7.17.5
docker tag docker.io/library/kibana:7.17.5 registry.cn-hangzhou.aliyuncs.com/bigdata_cloudnative/kibana:7.17.5
docker push registry.cn-hangzhou.aliyuncs.com/bigdata_cloudnative/kibana:7.17.5
```

### 10）编排 docker-compose.yml

```yaml
version: "3"
services:
  node-1:
    image: registry.cn-hangzhou.aliyuncs.com/bigdata_cloudnative/elasticsearch:7.17.5
    container_name: node-1
    hostname: node-1
    environment:
      - "ES_JAVA_OPTS=-Xms1024m -Xmx1024m"
      - "TZ=Asia/Shanghai"
    ulimits:
      memlock:
        soft: -1
        hard: -1
      nofile:
        soft: 65536
        hard: 65536
    ports:
      - "9200:9200"
    logging:
      driver: "json-file"
      options:
        max-size: "50m"
    volumes:
      - ./es/node-1/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml
      - ./es/plugins:/usr/share/elasticsearch/plugins
      - ./es/node-1/data:/usr/share/elasticsearch/data
      - ./es/node-1/log:/usr/share/elasticsearch/log
    networks:
      - bigdata
    healthcheck:
      test: ["CMD-SHELL", "curl -I http://localhost:9200 || exit 1"]
      interval: 10s
      timeout: 10s
      retries: 5
  node-2:
    image: registry.cn-hangzhou.aliyuncs.com/bigdata_cloudnative/elasticsearch:7.17.5
    container_name: node-2
    hostname: node-2
    environment:
      - "ES_JAVA_OPTS=-Xms1024m -Xmx1024m"
      - "TZ=Asia/Shanghai"
    ulimits:
      memlock:
        soft: -1
        hard: -1
      nofile:
        soft: 65536
        hard: 65536
    ports:
      - "9201:9200"
    logging:
      driver: "json-file"
      options:
        max-size: "50m"
    volumes:
      - ./es/node-2/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml
      - ./es/plugins:/usr/share/elasticsearch/plugins
      - ./es/node-2/data:/usr/share/elasticsearch/data
      - ./es/node-2/log:/usr/share/elasticsearch/log
    networks:
      - bigdata
    healthcheck:
      test: ["CMD-SHELL", "curl -I http://localhost:9200 || exit 1"]
      interval: 10s
      timeout: 10s
      retries: 5
  node-3:
    image: registry.cn-hangzhou.aliyuncs.com/bigdata_cloudnative/elasticsearch:7.17.5
    container_name: node-3
    hostname: node-3
    environment:
      - "ES_JAVA_OPTS=-Xms1024m -Xmx1024m"
      - "TZ=Asia/Shanghai"
    ulimits:
      memlock:
        soft: -1
        hard: -1
      nofile:
        soft: 65536
        hard: 65536
    ports:
      - "9202:9200"
    logging:
      driver: "json-file"
      options:
        max-size: "50m"
    volumes:
      - ./es/node-3/config/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml
      - ./es/plugins:/usr/share/elasticsearch/plugins
      - ./es/node-3/data:/usr/share/elasticsearch/data
      - ./es/node-3/log:/usr/share/elasticsearch/log
    networks:
      - bigdata
    healthcheck:
      test: ["CMD-SHELL", "curl -I http://localhost:9200 || exit 1"]
      interval: 10s
      timeout: 10s
      retries: 5
  kibana:
    container_name: kibana
    hostname: kibana
    image: registry.cn-hangzhou.aliyuncs.com/bigdata_cloudnative/kibana:7.17.5
    environment:
      TZ: 'Asia/Shanghai'
    volumes:
      - ./kibana/config/kibana.yml:/usr/share/kibana/config/kibana.yml
    ports:
      - 5601:5601
    networks:
      - bigdata
    healthcheck:
      test: ["CMD-SHELL", "curl -I http://localhost:5601 || exit 1"]
      interval: 10s
      timeout: 10s
      retries: 5

# 连接外部网络
networks:
  bigdata:
    external: true
```

开始执行部署

```shell
docker-compose up -d

# 查看
docker-compose ps
```

### 11）测试验证

ES 访问地址：`http://ip:9200`

```shell
docker-compose ps
curl localhost:9200
curl localhost:9200/_cat/health
```

![图片](E:/source/blogImage/640-1698065409894-2.png)

kibana：`http://ip:5601/`

![图片](E:/source/blogImage/640-1698065409894-3.png)

git 地址：https://gitee.com/hadoop-bigdata/docker-compose-es-kibana.git