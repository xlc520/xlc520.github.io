---
author: xlc520
title: SpringBoot 虚拟线程
description: 
date: 2023-12-07
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# SpringBoot 虚拟线程

首先，虚拟线程是 Project Loom 的一部分。

此外，Loom 不会加速内存计算，例如并行流，这不是 Loom 的目标。

我们正在研究如何使用可用的相同硬件来提高应用程序吞吐量，即充分利用 CPU 的潜力，为此我们花费了大量精力。截至目前，我们能够利用
2% 到 3% 的 CPU。我在这篇博客中详细讨论了这一点：

让我们快速设置我们的 Spring Boot 项目。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.1.0</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>org.anil</groupId>
    <artifactId>virtualthread</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>virtualthread</name>
    <description>virtualthread</description>
    <properties>
        <java.version>20</java.version>
        <tomcat.version>11.0.0-M4</tomcat.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <!-- https://mvnrepository.com/artifact/org.apache.commons/commons-lang3 -->
        <dependency>
            <groupId>org.apache.commons</groupId>
            <artifactId>commons-lang3</artifactId>
            <version>3.12.0</version>
        </dependency>

        <!-- https://mvnrepository.com/artifact/mysql/mysql-connector-java -->

        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <scope>runtime</scope>
            <version>8.0.33</version>
        </dependency>


        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.24</version>
            <scope>compile</scope>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
              <configuration>
                  <compilerArgs>
                      <arg>--enable-preview</arg>
                      </compilerArgs>
                  <source>20</source>
                  <target>20</target>
              </configuration>

            </plugin>
        </plugins>
    </build>

</project>
```

由于 Project Loom 处于预览阶段，我们需要启用预览功能。

```java
package org.anil.virtualthread;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.embedded.tomcat.TomcatProtocolHandlerCustomizer;
import org.springframework.context.annotation.Bean;

import java.util.concurrent.Executors;

@SpringBootApplication
@Slf4j
public class VirtualthreadApplication {

    public static void main(String[] args) {
        SpringApplication.run(VirtualthreadApplication.class, args);
    }

    @Bean
    public TomcatProtocolHandlerCustomizer<?> protocolHandlerVirtualThreadExecutorCustomizer() {
        return protocolHandler -> {
            log.info("Configuring " + protocolHandler + " to use VirtualThreadPerTaskExecutor");
            protocolHandler.setExecutor(Executors.newVirtualThreadPerTaskExecutor());
        };
    }

}
```

到目前为止，我们需要为 Tomcat 服务器配置虚拟线程设置。将来，这可能会在自动配置本身中得到解决。

```java
package org.anil.virtualthread;

import org.apache.commons.lang3.RandomStringUtils;
import org.apache.commons.lang3.RandomUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HomeController {

    @Autowired
    ProductRepository productRepository;


    @GetMapping("/thread")
    public List<Product> checkThread() throws InterruptedException {
        Thread.sleep(1000);
        return productRepository.findAll();
    }


    @PostMapping("/save")
    public String saveProduct() throws InterruptedException {
        for(int i=0; i< 1000; i++){
            Product product = new Product();
            product.setProductName(RandomStringUtils.randomAlphanumeric(5));
            product.setPrice(RandomUtils.nextLong(10,1000));
            product.setPrice(1L);
            productRepository.save(product);
        }
        return "anil";
    }
}
```

我们有一个GetMapping返回所有结果，我们的数据库中有 1000 条数据。我们已经让线程休眠 1
秒。让我们看看我们的Product实体和ProductRepository。

```java
package org.anil.virtualthread;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String productName;
    private Long price;
}
package org.anil.virtualthread;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product,Long> {
}
```

让我们看看我们的 application.yaml

```yaml
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    maxIdle: 1
    timeBetweenEvictionRunsMillis: 60000
    hikari:
      connection-timeout: 60000
      maximum-pool-size: 10
      minimum-idle: 5
    url: jdbc:mysql://localhost:3306/todos
    testWhileIdle: true
    username: root
    password: root1234
    validationQuery: SELECT 1
  flyway:
    baseline-version: 0
    enabled: true
    validate-on-migrate: false
  jpa:
    database: mysql
    generate-ddl: true
    hibernate:
      ddl-auto: none
      format_sql: true
    show-sql: true
```

现在，我们首先通过注释以下行来运行应用程序，**这将在普通线程上运行我们的应用程序**。

```java
package org.anil.virtualthread;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.embedded.tomcat.TomcatProtocolHandlerCustomizer;
import org.springframework.context.annotation.Bean;

import java.util.concurrent.Executors;

@SpringBootApplication
@Slf4j
public class VirtualthreadApplication {

    public static void main(String[] args) {
        SpringApplication.run(VirtualthreadApplication.class, args);
    }

//    @Bean
//    public TomcatProtocolHandlerCustomizer<?> protocolHandlerVirtualThreadExecutorCustomizer() {
//        return protocolHandler -> {
//            log.info("Configuring " + protocolHandler + " to use VirtualThreadPerTaskExecutor");
//            protocolHandler.setExecutor(Executors.newVirtualThreadPerTaskExecutor());
//        };
//    }
}
```

现在让我们设置JMeter。我们将有 1000 个请求，该请求将在 3 秒内增加。并且这样的状态会持续200秒。每 3 秒，将触发 1000
个 `GET (“/thread”)` 请求。我们还添加了响应时间图侦听器。

现在让我们运行测试并等待 200 秒。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700667020609-1.png)

从图中我们可以看到，一旦Tomcat的整个线程池被利用，响应时间从3600毫秒猛增到5200毫秒。从那时起，只有当以前的线程被释放时，它才保持这种状态。

现在让我们在启用虚拟线程功能的情况下运行负载测试。

```java
package org.anil.virtualthread;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.embedded.tomcat.TomcatProtocolHandlerCustomizer;
import org.springframework.context.annotation.Bean;

import java.util.concurrent.Executors;

@SpringBootApplication
@Slf4j
public class VirtualthreadApplication {

    public static void main(String[] args) {
        SpringApplication.run(VirtualthreadApplication.class, args);
    }

    @Bean
    public TomcatProtocolHandlerCustomizer<?> protocolHandlerVirtualThreadExecutorCustomizer() {
        return protocolHandler -> {
            log.info("Configuring " + protocolHandler + " to use VirtualThreadPerTaskExecutor");
            protocolHandler.setExecutor(Executors.newVirtualThreadPerTaskExecutor());
        };
    }

}
```

现在让我们运行测试并等待 200 秒。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1700667020609-2.png)

显然，现在并发 1000 个请求的响应时间几乎略高于 1000 毫秒，有时甚至会达到 1400 毫秒，这比我们使用普通线程时要好得多。

显然，当我们需要充分利用底层 CPU 时，我们应该开始在应用程序中采用虚拟线程，突然间我们可以看到，对于相同的硬件，应用程序的吞吐量增加了很多倍。

**这比切换到反应式编程要好得多，反应式编程意味着重写所有代码，这很难先学习，然后编写，甚至更难调试和分析。**

简而言之，更多用户可以使用该应用程序并与第一个用户同时获得响应。