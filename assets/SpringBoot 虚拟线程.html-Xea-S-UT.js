import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as e,a as l}from"./app-aq8PVJpR.js";const t={},r=l(`<h1 id="springboot-虚拟线程" tabindex="-1"><a class="header-anchor" href="#springboot-虚拟线程"><span>SpringBoot 虚拟线程</span></a></h1><p>首先，虚拟线程是 Project Loom 的一部分。</p><p>此外，Loom 不会加速内存计算，例如并行流，这不是 Loom 的目标。</p><p>我们正在研究如何使用可用的相同硬件来提高应用程序吞吐量，即充分利用 CPU 的潜力，为此我们花费了大量精力。截至目前，我们能够利用 2% 到 3% 的 CPU。我在这篇博客中详细讨论了这一点：</p><p>让我们快速设置我们的 Spring Boot 项目。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;project xmlns=&quot;http://maven.apache.org/POM/4.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
         xsi:schemaLocation=&quot;http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd&quot;&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
    &lt;parent&gt;
        &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
        &lt;artifactId&gt;spring-boot-starter-parent&lt;/artifactId&gt;
        &lt;version&gt;3.1.0&lt;/version&gt;
        &lt;relativePath/&gt; &lt;!-- lookup parent from repository --&gt;
    &lt;/parent&gt;
    &lt;groupId&gt;org.anil&lt;/groupId&gt;
    &lt;artifactId&gt;virtualthread&lt;/artifactId&gt;
    &lt;version&gt;0.0.1-SNAPSHOT&lt;/version&gt;
    &lt;name&gt;virtualthread&lt;/name&gt;
    &lt;description&gt;virtualthread&lt;/description&gt;
    &lt;properties&gt;
        &lt;java.version&gt;20&lt;/java.version&gt;
        &lt;tomcat.version&gt;11.0.0-M4&lt;/tomcat.version&gt;
    &lt;/properties&gt;
    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-data-jpa&lt;/artifactId&gt;
        &lt;/dependency&gt;
        &lt;!-- https://mvnrepository.com/artifact/org.apache.commons/commons-lang3 --&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.apache.commons&lt;/groupId&gt;
            &lt;artifactId&gt;commons-lang3&lt;/artifactId&gt;
            &lt;version&gt;3.12.0&lt;/version&gt;
        &lt;/dependency&gt;

        &lt;!-- https://mvnrepository.com/artifact/mysql/mysql-connector-java --&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;mysql&lt;/groupId&gt;
            &lt;artifactId&gt;mysql-connector-java&lt;/artifactId&gt;
            &lt;scope&gt;runtime&lt;/scope&gt;
            &lt;version&gt;8.0.33&lt;/version&gt;
        &lt;/dependency&gt;


        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;
        &lt;/dependency&gt;

        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
            &lt;artifactId&gt;spring-boot-starter-test&lt;/artifactId&gt;
            &lt;scope&gt;test&lt;/scope&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.projectlombok&lt;/groupId&gt;
            &lt;artifactId&gt;lombok&lt;/artifactId&gt;
            &lt;version&gt;1.18.24&lt;/version&gt;
            &lt;scope&gt;compile&lt;/scope&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;

    &lt;build&gt;
        &lt;plugins&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
                &lt;artifactId&gt;spring-boot-maven-plugin&lt;/artifactId&gt;
            &lt;/plugin&gt;
            &lt;plugin&gt;
                &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
                &lt;artifactId&gt;maven-compiler-plugin&lt;/artifactId&gt;
              &lt;configuration&gt;
                  &lt;compilerArgs&gt;
                      &lt;arg&gt;--enable-preview&lt;/arg&gt;
                      &lt;/compilerArgs&gt;
                  &lt;source&gt;20&lt;/source&gt;
                  &lt;target&gt;20&lt;/target&gt;
              &lt;/configuration&gt;

            &lt;/plugin&gt;
        &lt;/plugins&gt;
    &lt;/build&gt;

&lt;/project&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由于 Project Loom 处于预览阶段，我们需要启用预览功能。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package org.anil.virtualthread;

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
    public TomcatProtocolHandlerCustomizer&lt;?&gt; protocolHandlerVirtualThreadExecutorCustomizer() {
        return protocolHandler -&gt; {
            log.info(&quot;Configuring &quot; + protocolHandler + &quot; to use VirtualThreadPerTaskExecutor&quot;);
            protocolHandler.setExecutor(Executors.newVirtualThreadPerTaskExecutor());
        };
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到目前为止，我们需要为 Tomcat 服务器配置虚拟线程设置。将来，这可能会在自动配置本身中得到解决。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package org.anil.virtualthread;

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


    @GetMapping(&quot;/thread&quot;)
    public List&lt;Product&gt; checkThread() throws InterruptedException {
        Thread.sleep(1000);
        return productRepository.findAll();
    }


    @PostMapping(&quot;/save&quot;)
    public String saveProduct() throws InterruptedException {
        for(int i=0; i&lt; 1000; i++){
            Product product = new Product();
            product.setProductName(RandomStringUtils.randomAlphanumeric(5));
            product.setPrice(RandomUtils.nextLong(10,1000));
            product.setPrice(1L);
            productRepository.save(product);
        }
        return &quot;anil&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们有一个GetMapping返回所有结果，我们的数据库中有 1000 条数据。我们已经让线程休眠 1 秒。让我们看看我们的Product实体和ProductRepository。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package org.anil.virtualthread;

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

public interface ProductRepository extends JpaRepository&lt;Product,Long&gt; {
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们看看我们的 application.yaml</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>spring:
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，我们首先通过注释以下行来运行应用程序，<strong>这将在普通线程上运行我们的应用程序</strong>。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package org.anil.virtualthread;

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
//    public TomcatProtocolHandlerCustomizer&lt;?&gt; protocolHandlerVirtualThreadExecutorCustomizer() {
//        return protocolHandler -&gt; {
//            log.info(&quot;Configuring &quot; + protocolHandler + &quot; to use VirtualThreadPerTaskExecutor&quot;);
//            protocolHandler.setExecutor(Executors.newVirtualThreadPerTaskExecutor());
//        };
//    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在让我们设置JMeter。我们将有 1000 个请求，该请求将在 3 秒内增加。并且这样的状态会持续200秒。每 3 秒，将触发 1000 个 <code>GET (“/thread”)</code> 请求。我们还添加了响应时间图侦听器。</p><p><img src="https://static.xlc520.tk/blogImage/640.png" alt="图片" loading="lazy">图片</p><p>现在让我们运行测试并等待 200 秒。</p><p><img src="https://static.xlc520.tk/blogImage/640-1700667020609-1.png" alt="图片" loading="lazy">图片</p><p>从图中我们可以看到，一旦Tomcat的整个线程池被利用，响应时间从3600毫秒猛增到5200毫秒。从那时起，只有当以前的线程被释放时，它才保持这种状态。</p><p>现在让我们在启用虚拟线程功能的情况下运行负载测试。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>package org.anil.virtualthread;

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
    public TomcatProtocolHandlerCustomizer&lt;?&gt; protocolHandlerVirtualThreadExecutorCustomizer() {
        return protocolHandler -&gt; {
            log.info(&quot;Configuring &quot; + protocolHandler + &quot; to use VirtualThreadPerTaskExecutor&quot;);
            protocolHandler.setExecutor(Executors.newVirtualThreadPerTaskExecutor());
        };
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在让我们运行测试并等待 200 秒。</p><p><img src="https://static.xlc520.tk/blogImage/640-1700667020609-2.png" alt="图片" loading="lazy">图片</p><p>显然，现在并发 1000 个请求的响应时间几乎略高于 1000 毫秒，有时甚至会达到 1400 毫秒，这比我们使用普通线程时要好得多。</p><p>显然，当我们需要充分利用底层 CPU 时，我们应该开始在应用程序中采用虚拟线程，突然间我们可以看到，对于相同的硬件，应用程序的吞吐量增加了很多倍。</p><p><strong>这比切换到反应式编程要好得多，反应式编程意味着重写所有代码，这很难先学习，然后编写，甚至更难调试和分析。</strong></p><p>简而言之，更多用户可以使用该应用程序并与第一个用户同时获得响应。</p>`,29),s=[r];function d(a,o){return n(),e("div",null,s)}const u=i(t,[["render",d],["__file","SpringBoot 虚拟线程.html.vue"]]);export{u as default};
