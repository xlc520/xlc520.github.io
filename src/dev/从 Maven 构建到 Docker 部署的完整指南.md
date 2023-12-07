---
author: xlc520
title: 从 Maven 构建到 Docker 部署的完整指南
description: 
date: 2023-12-02
category: Java
tag: Java
article: true
timeline: true
icon: java
---



# 从 Maven 构建到 Docker 部署的完整指南

## 1 使用Dockerfile部署

```dockerfile
# 使用Java 8基础镜像
FROM java:8
LABEL authors="mabh"

# 设置时区为Asia/Shanghai，可以根据需要更改
ENV TIME_ZONE=Asia/Shanghai

# 更新时区
RUN ln -snf /usr/share/zoneinfo/$TIME_ZONE /etc/localtime && echo $TIME_ZONE > /etc/timezone

# 设置容器内的工作目录
WORKDIR /app

# 将构建好的Spring Boot应用jar文件复制到镜像中
COPY ./${project.build.finalName}.jar /app/

COPY ./application.yml /app/
COPY ./application-${activatedProperties}.yml /app/

# 暴露端口
EXPOSE 8080


# 设置Java虚拟机初始内存和最大内存
#-server: 启用Java HotSpot虚拟机的服务器模式，该模式针对长时间运行的应用程序进行了优化以提高性能。
#-Xms512m: 设置Java堆的初始大小为512兆字节。
#-Xmx1024m: 设置Java堆的最大大小为1024兆字节。
#-XX:+UseG1GC: 启用G1垃圾收集器。G1（Garbage-First）是一种相对新的垃圾收集器，旨在提供更可预测的停顿时间和更好的性能。
#-XX:+HeapDumpOnOutOfMemoryError: 在发生内存溢出错误时生成堆转储文件。这对于分析内存问题非常有用。
#-XX:HeapDumpPath=/dumps/oom_dump.hprof: 指定内存转储文件。在这个例子中，堆转储文件将被写入 /dumps/oom_dump.hprof 目录文件中。
ENV JAVA_OPTS="-server -Xms512m -Xmx1024m -XX:+UseG1GC -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/dumps/oom_dump.hprof"

ENV APP_ENV="--spring.profiles.active=${activatedProperties}"
# 创建内存转储文件和日志文件存储目录
RUN mkdir /app/dumps
RUN mkdir /app/logs

# 设置容器启动时执行的命令
ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -Dlogging.file=/app/logs/application.log -jar /app/${project.build.finalName}.jar $APP_ENV"]
```

包含如下基本功能：

- 设置时区为Asia/Shanghai
- 自动获取 maven 应用包名，不需要额外修改即可使用。
- 自动识别 profile 使用的配置文件 不管是 `application-dev.yml` 、`*-test.yml`、 `*.prod.yml` 都可以识别出来。
- 默认暴漏8080端口

以下是它的主要特点和功能：

- **基础镜像** ：使用了 Java 8 我自定义的镜像，你们使用dockerhub 上的就行 的基础镜像，这适用于许多传统的 Java 应用程序。
- **时区设置** ：设置时区为 Asia/Shanghai。这是一个重要的设置，特别是对于需要关注本地时间的应用程序。如果需要，可以轻松更改为其他时区。
- **工作目录** ：在容器内设置了 /app 作为工作目录。
- **文件复制** ：将构建的 Spring Boot 应用 jar 文件以及相关的配置文件（application.yml 和 `application-${activatedProperties}.yml`）复制到镜像中，自动识别 profile 使用的配置文件 。
- **端口暴露** ：默认暴露了 8080 端口，这是 Spring Boot 应用的常用端口。
- **Java 虚拟机设置** ：
  - 启用了服务器模式，优化长时间运行的性能。
  - 设置了初始和最大堆大小。
  - 启用了 G1 垃圾收集器，适用于需要更可预测停顿时间和更好性能的应用程序。
  - 配置了在内存溢出时生成堆转储文件，有助于调试内存问题。
- **环境变量** ：允许通过 `APP_ENV` 命令行的应用 配置项。
- **目录创建** ：创建了用于存储内存转储文件和日志文件的目录。
- **启动命令** ：定义了容器启动时执行的命令，包括 Java 虚拟机参数、日志文件设置和应用 jar 文件的执行。

## 2 管理 Docker 容器：简洁高效的脚本方法

管理 Docker 容器有时会显得复杂。为此，我们使用 Bash 脚本来简化这一过程。下面是这个脚本的核心要点：

- **安全性优先：** 使用 `set -e` 确保脚本在出现任何错误时立即停止，防止问题扩散。
- **灵活配置：** 通过设置变量 `CONTAINER_NAME` 和 `IMAGE_NAME`，脚本可以灵活适应不同的项目需求，会根据maven打包环境替换
- **容器重启：** 如果容器正在运行，脚本会先停止并删除它，然后重新构建和启动，保证环境的干净和更新。
- **一键执行：** 无论是构建新镜像还是启动新容器，一切操作都可通过脚本一键完成。

restart.sh

```sh
#!/bin/bash

# 设置脚本在遇到错误时立即退出
set -e

# 设置容器名称和镜像名称
CONTAINER_NAME="${project.build.finalName}"
IMAGE_NAME="${project.build.finalName}:1.0.0"

# 检查容器是否存在并获取其运行状态
running=$(docker inspect --format="{{ .State.Running }}" "${CONTAINER_NAME}" 2>/dev/null || true)

# 停止并删除正在运行的容器
if [ "$running" == "true" ]; then
    echo "Stopping running container..."
    docker stop "${CONTAINER_NAME}"
    echo "Removing stopped container..."
    docker rm -f "${CONTAINER_NAME}"
fi

# 如果容器不存在或已停止，重新构建并启动容器
if [ "$running" != "true" ]; then
    
    # docker load -i java8.tar
    echo "Building new image..."
    docker build -t "${IMAGE_NAME}" .

    echo "Starting new container..."
    docker run -d --name "${CONTAINER_NAME}" \
        --cap-add=SYS_PTRACE \
        -p 8080:8080 \
        -v "$(pwd)/dumps:/app/dumps" \
        -v "$(pwd)/logs:/app/logs" \
        "${IMAGE_NAME}"

    echo "Container has been restarted."
fi
```

`docker load -i java8.tar` 这一步对于下面Docker-Compose 可能是需要的。

## 3 集成 Docker 管理脚本与 Maven：完善构建流程

要将前面提到的 Docker 管理脚本（restart.sh）以及 Dockerfile 与 Maven 打包工具集成，我们可以利用 Maven 的 `maven-resources-plugin` 插件。这个插件允许我们在 Maven 的构建过程中复制和处理资源文件。

下面是如何配置这个插件，以及它在整个过程中的作用：

```xml
<plugin>
  <groupId>org.apache.maven.plugins</groupId>
  <artifactId>maven-resources-plugin</artifactId>
  <version>3.2.0</version>
  <executions>
    <execution>
      <phase>process-resources</phase>
      <goals>
        <goal>resources</goal>
      </goals>
      <configuration>
        <outputDirectory>${project.build.directory}</outputDirectory>
        <resources>
          <resource>
            <directory>src/main/resources</directory>
            <filtering>true</filtering>
            <includes>
              <include>Dockerfile</include>
              <include>restart.sh</include>
            </includes>
          </resource>
        </resources>
      </configuration>
    </execution>
  </executions>
</plugin>
```

可以跟 profile 结合起来，只有jar包的的时候才用Docker

```xml
<profiles>
    <profile>
        <id>jar</id>
        <activation>
            <activeByDefault>true</activeByDefault>
        </activation>
        <properties>
            <packaging.type>jar</packaging.type>
        </properties>
        <build>
            <plugins>
                <plugin>
                    <groupId>org.apache.maven.plugins</groupId>
                    <artifactId>maven-resources-plugin</artifactId>
                    <version>3.2.0</version>
                    <executions>
                        <execution>
                            <phase>process-resources</phase>
                            <goals>
                                <goal>resources</goal>
                            </goals>
                            <configuration>
                                <outputDirectory>${project.build.directory}</outputDirectory>
                                <resources>
                                    <resource>
                                        <directory>src/main/resources</directory>
                                        <filtering>true</filtering>
                                        <includes>
                                            <include>Dockerfile</include>
                                            <include>restart.sh</include>
                                        </includes>
                                    </resource>
                                </resources>
                            </configuration>
                        </execution>
                    </executions>
                </plugin>
            </plugins>
        </build>
    </profile>
</profiles>
```

### 1.执行阶段

- 插件配置在 `process-resources` 阶段执行，这是 Maven 生命周期中处理项目资源的标准阶段。
- goal 设置为 resources，表示插件的主要任务是处理资源。

### 2.资源配置

- outputDirectory 设置为 `${project.build.directory}`，这意味着资源将被复制到 Maven 的构建目录中。
- 在 `<resources>`部分，我们定义了要包括的具体资源。
  - directory 指定资源所在的目录，这里是 `src/main/resources`。
  - filtering 设置为 true，允许对资源文件进行过滤处理，这对于包含需要替换的 Maven 属性的文件很有用。
  - includes 标签下，我们明确列出了要包含的文件：Dockerfile 和 `restart.sh`。

通过这种方式，Maven 在构建过程中会自动将 Dockerfile 和 restart.sh 脚本复制到指定的输出目录。这样做的好处是，你可以确保在最终的发版物中包含了这些对于部署和管理 Docker 容器至关重要的文件，实现了项目的一体化管理。

## 4 从 Dockerfile 到 Docker-Compose：简化和自动化应用部署

```yaml
version: '2'

services:
  ${project.build.finalName}:  # 使用 Dockerfile 中定义的项目名作为服务名称
    image: ${project.build.finalName}:1.0.0  # 使用 Dockerfile 中定义的镜像名和标签
    container_name: ${project.build.finalName}  # 容器名称也使用同样的命名
    ports:
      - "8080:8080"  # 暴露的端口
    volumes:
      - ./${project.build.finalName}.jar:/app/${project.build.finalName}.jar  # 挂载 JAR 文件
      - ./application.yml:/app/application.yml  # 挂载配置文件
      - ./application-${activatedProperties}.yml:/app/application-${activatedProperties}.yml  # 挂载特定环境的配置文件
      - ./dumps:/app/dumps  # 挂载内存转储目录
      - ./logs:/app/logs  # 挂载日志目录
    environment:
      - TIME_ZONE=Asia/Shanghai  # 设置时区
      - JAVA_OPTS=-server -Xms512m -Xmx1024m -XX:+UseG1GC -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/dumps/oom_dump.hprof
      - APP_ENV=-Dapp.log.serviceName=${project.build.finalName} --spring.profiles.active=${activatedProperties}
    restart: always  # 设置容器总是自动重启
    logging:
      driver: json-file
      options:
        max-size: "20m"
        max-file: "1"
```

### 动态配置与服务管理

- **Maven 属性集成:**

利用 Maven 属性（如 `${project.build.finalName}`）实现 Docker 配置与构建过程的紧密集成，使配置动态化和自动化。

- **镜像和容器名称:**

根据 Maven 构建结果动态生成 image 和 container_name，保证镜像和容器名称与项目版本一致。

- **端口映射:**

ports 配置将容器内的端口（例如 8080）映射到宿主机，使外部访问成为可能。

### 数据管理与环境优化

- **卷挂载 (volumes):**

挂载包括 JAR 文件、配置文件以及日志和转储目录，确保容器可以访问所需的所有文件和数据。

- **环境变量 (environment):**

设置容器的环境变量，如时区和 Java 运行参数，优化容器的运行环境。

### 稳定性与日志管理

- **自动重启 (restart):**

配置容器在退出时自动重启，提高应用的稳定性和可靠性。

- **日志配置 (logging):**

设置日志驱动和相关选项（例如最大文件大小和数量），帮助有效管理容器日志。

总的来说，这一套 Docker 化的流程不仅降低了部署复杂性，还提升了效率，为在不同环境中部署应用提供了极大便利。这对于追求快速、可靠且一致的软件部署流程的现代开发团队来说，是一种至关重要的实践。