import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as i,c as n,a as l}from"./app-AGOZjyqV.js";const d={},s=l(`<h1 id="spring-cloud-alibaba" tabindex="-1"><a class="header-anchor" href="#spring-cloud-alibaba"><span>Spring Cloud Alibaba</span></a></h1><p>互联网时代，面对复杂业务，讲究 <strong>分而治之</strong> 。将一个大的单体系统拆分为若干个微服务，保证每个系统的职责单一，可以垂直深度扩展。</p><p>但是一个个独立的微服务像一座座孤岛，如何将他们串联起来，才能发挥最大价值。</p><p>这时，我们就要提微服务的生态圈。</p><p>那么微服务生态圈都有哪些模块？他们的作用分别是什么？</p><ul><li><strong>服务的注册、发现</strong> 。生产者启动时，会将自己的信息注册上报，这样调用方只需连接注册中心，根据一定的负载算法，就可以与服务提供方建立连接，从而实现应用间的解耦。</li><li><strong>服务调用</strong> 。通过多种协议（如：HTTP等）实现目标服务的真正调用。</li><li><strong>负载均衡</strong> 。主要是提供多种负载算法，满足不同业务场景下的集群多实例的选择机制</li><li><strong>服务的稳定性</strong> 。提供了服务熔断、限流、降级</li><li><strong>分布式配置中心</strong> 。应用的配置项统一管理，修改后能动态生效</li><li><strong>消息队列</strong> 。非核心逻辑从同步流程抽离，解耦，异步化处理，缩短RT时间</li><li><strong>网关</strong> 。将一些通用的处理逻辑，如：限流、鉴权、黑白名单、灰度等抽取到一个单独的、前置化系统统一处理。</li><li><strong>监控</strong> 。监控系统的健康状况</li><li><strong>分布式链路追踪</strong> 。查看接口的调用链路，为性能优化、排查问题提供输入</li><li><strong>自动化部署</strong> 。持续集成，快速部署应用。</li></ul><p>围绕这些功能模块，<code>Spring Cloud Alibaba</code> 为我们提供了微服务化开发的一站式解决方案，我们只需要少量的<code>Spring 注解</code> 和 <code>yaml配置</code>，便可以快速构建出一套微服务系统。真的是创业者的福音。</p><p><strong>那么这套生态规范都提供了哪些技术框架呢？</strong></p><figure><img src="https://static.xlc520.tk/blogImage/640-1674184769926-0.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h2 id="一、spring-boot-服务基座" tabindex="-1"><a class="header-anchor" href="#一、spring-boot-服务基座"><span>一、Spring Boot（服务基座）</span></a></h2><p>Spring Boot 是Spring框架的扩展，提供更加 <code>丰富的注解</code>，根据 <strong>约定胜于配置</strong> 原则，与市场主流的开源框架打通， 设计了 <code>Starter</code> 和 <code>AutoConfiguration</code> 机制，简化配置流程，通过简单的jar包引入，快速具备组件集成能力。大大提高了程序员的开发效率。</p><p><strong>特点：</strong></p><ul><li>提供了丰富的注解，不要在XML文件中定义各种繁琐的bean配置</li><li>内嵌 Web容器，如：Tomcat（默认）、Jetty、Undertow</li><li>集成了主流开源框架，根据项目依赖自动配置</li></ul><h2 id="二、nacos-注册中心、分布式配置中心" tabindex="-1"><a class="header-anchor" href="#二、nacos-注册中心、分布式配置中心"><span>二、Nacos（注册中心、分布式配置中心）</span></a></h2><p>Nacos 是阿里巴巴的开源的项目，全称 Naming Configuration Service ，专注于服务发现和配置管理领域。</p><p>Nacos 致力于帮助您发现、配置和管理微服务。Nacos 提供了一组简单易用的特性集，帮助您快速实现动态服务发现、服务配置、服务元数据及流量管理。功能齐全，可以替换之前的 <code>Spring Cloud Netflix Eureka</code>、<code>Spring Cloud Config</code>、<code>Spring Cloud Bus</code>，野心巨大。</p><p>客户端语言方面目前支持 Java，go 、python、 C# 和 C++等主流语言</p><blockquote><p>开源地址：https://github.com/alibaba/nacos</p></blockquote><p>Nacos 有一个控制台，可以帮助用户管理服务，监控服务状态、应用的配置管理。</p><p><strong>集群化部署：</strong></p><p>由于 <code>Nacos</code> 是单节点，无论做为<code>注册中心</code>还是<code>分布式配置中心</code>，一旦服务器挂了，作为底层服务引发的麻烦还是非常大的。如何保证其高可用？</p><p>Nacos 官方提供的集群部署架构图：</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674184769926-3.jpeg" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><blockquote><p>https://nacos.io/zh-cn/docs/cluster-mode-quick-start.html</p></blockquote><p>在nacos的解压目录<code>nacos/conf</code>目录下，有配置文件<code>cluster.conf</code>，每行配置成 ip:port。（一般配置3个或3个以上节点）</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&gt; 基于微服务的思想，构建在 B2C 电商场景下的项目实战。核心技术栈，是 Spring Boot + Dubbo 。未来，会重构成 Spring Cloud Alibaba 。
&gt;
&gt; 项目地址：&lt;https://github.com/YunaiV/onemall&gt;

# ip:port
200.8.9.16:8848
200.8.9.17:8848
200.8.9.18:8848
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>这样保证客户端只需要写一次，由 Leader节点将数据同步到其他节点，保证各个节点的数据一致性</strong></p><p>对于上层的SLB，我们可以采用 <code>Nginx</code> 或者 <code>OpenResty</code>，在 upstream 模块里配置 Nacos 的集群IP 地址列表，实现负载均衡功能。</p><p>另外，借助Nginx的心跳检测，当某台 Nacos 服务挂掉后，SLB 会自动屏蔽，将流量切换到其他 Nacos 实例。</p><p>当然 <code>OpenResty</code> 也可能成为单点故障，为了保证高可用，我们需要借助 <code>Keepalived</code></p><figure><img src="https://static.xlc520.tk/blogImage/640-1674184773759-6.jpeg" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>客户端请求 VIP，然后请求打到了 OpenResty，由 OpenResty 转发给具体的某个 Nacos 节点。</p><blockquote><p>OpenResty 只有一个节点提供服务，另一个暂停状态，如果 master 节点宕机，那 backup 接替继续工作。从而解决了单点故障问题。</p></blockquote><p>Keepalived 作为一种高性能的服务器高可用或热备解决方案，用来防止服务器单点故障的发生。市面资料很多，下文链接是《Keepalived+Nginx部署方案》具体操作步骤</p><blockquote><p>https://help.fanruan.com/finereport/doc-view-2905.html</p></blockquote><h2 id="三、resttemplate-ribbon-远程调用" tabindex="-1"><a class="header-anchor" href="#三、resttemplate-ribbon-远程调用"><span>三、RestTemplate + Ribbon （远程调用）</span></a></h2><p>Spring Cloud Ribbon 基于 Netflix Ribbon 封装的负载均衡框架。内部集成了多种负载算法，如：随机、轮询等。</p><p>与注册中心打通，能自动获取服务提供者的地址列表。结合自身的负载算法，选择一个目标实例发起服务调用。</p><blockquote><p>Ribbon 也提供了扩展接口，支持自定义负载均衡算法。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public class CustomRule extends AbstractLoadBalancerRule {
    private AtomicInteger count = new AtomicInteger(0);
    @Override
    public Server choose(Object key) { 
        return choose(getLoadBalancer(), key);
    }

    private Server choose(ILoadBalancer loadBalancer, Object key) {
        List&lt;Server&gt; allServers = loadBalancer.getAllServers(); 
        int requestNumber = count.incrementAndGet(); 
        if (requestNumber &gt;= Integer.MAX_VALUE) { 
            count = new AtomicInteger(0); 
        }
        if (null != allServers) {
            int size = allServers.size();
            if (size &gt; 0) {
                int index = requestNumber % size;                 
                Server server = allServers.get(index);
                if (null == server || !server.isAlive()) { 
                    return null;
                }
                return server;
            }
        }
        return null;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>缺点：</strong></p><p>调用方每次发起远程服务调用时，都需要填写<code>远程目标地址</code>，还要配置各种参数，非常麻烦，不是很方便</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// 注册到Nacos的应用名称
private final String SERVER_URL = &quot;http://nacos-provider-demo&quot;; 
@Resource
private RestTemplate restTemplate;

@RequestMapping(&quot;/hello&quot;) 
public String hello() {
 // 远程服务调用
   return restTemplate.getForObject(SERVER_URL + &quot;/hello&quot;, String.class);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、openfeign-远程调用" tabindex="-1"><a class="header-anchor" href="#四、openfeign-远程调用"><span>四、OpenFeign（远程调用）</span></a></h2><p>RestTemplate + Ribbon 每次发起远程服务调用时，都需要填写<code>远程目标地址</code>，还要配置各种参数，非常麻烦。</p><p>Feign 是一个轻量级的 Restful HTTP 客户端，<strong>内嵌了 Ribbon 作为客户端的负载均衡</strong> 。面向接口编程，使用时只需要定义一个接口并加上<code>@FeignClient</code>注解，非常方便。</p><p>OpenFeign 是 <code>Feign</code> 的增强版。对 Feign 进一步封装，支持 Spring MVC 的标准注解和HttpMessageConverts</p><p><strong>依赖包：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-openfeign&lt;/artifactId&gt;
&lt;/dependency&gt;
@FeignClient(value = &quot;\${provider.name}&quot;) 
public interface OrderService {

 // 调用服务提供者的 /create_order 接口
 @RequestMapping(value = &quot;/create_order&quot;,method = RequestMethod.GET) 
 public String createOrder();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code>@FeignClient(value = &quot;\${provider.name}&quot;)</code> 定义了服务提供方的工程名，底层自动打通了注册中心，会拿到 <code>artifactId</code> 对应的IP列表，根据一定的负载均衡算法，可以将请求打到目标服务器上。</p><p>OpenFeign 默认等待接口返回数据的时间是 1 秒，超过这个时间就会报错。如果想调整这个时间，可以修改配置项 <code>feign.client.config.default.readTimeout</code></p><h2 id="五、dubbo-spring-cloud-远程调用" tabindex="-1"><a class="header-anchor" href="#五、dubbo-spring-cloud-远程调用"><span>五、Dubbo Spring Cloud（远程调用）</span></a></h2><p><code>RestTemplate + Ribbon</code> 和 <code>OpenFeign</code> 都是基于HTTP协议调用远程接口。而 <code>Dubbo Spring Cloud</code> 是基于 TCP 协议来调用远程接口。相比 HTTP 的大量的请求头，TCP 更轻量级。</p><p>Dubbo Spring Cloud = Spring Cloud + Dubbo</p><p><strong>特性：</strong></p><ul><li>支持多种注册中心，用于服务的注册、发现</li><li>内置多种负载均衡策略</li><li>服务粒度是<code>面向接口</code>，支持 TCP 轻量级协议</li><li>容易扩展，采用 微内核 + 插件 的设计原则，扩展点更强</li></ul><p><strong>依赖包：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-dubbo&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：虽然是将 Dubbo 集成到了 Spring Cloud，增加了一些 <code>注解</code> 和 <code>yaml</code> 配置项，开发更方便，但大部分调用玩法还是遵守 Dubbo 框架那一套。</p><p><strong>几个重要的配置项：</strong></p><ul><li>dubbo.scan.base-packages # dubbo 服务扫描基准包，上报注册服务</li><li>dubbo.protocol.name: dubbo # 支持的协议</li><li>dubbo.protocol.port: -1 # dubbo 协议端口（ -1 表示自增端口，从 20880 开始）</li><li>dubbo.registry.address # 注册中心地址</li></ul><h2 id="六、spring-cloud-gateway-网关" tabindex="-1"><a class="header-anchor" href="#六、spring-cloud-gateway-网关"><span>六、Spring Cloud Gateway（网关）</span></a></h2><p>分布式时代，一个复杂的系统被拆分为若干个微服务系统，每个系统都配置独立的域名肯定不合适。为了解决这个问题，网关便诞生了。</p><p>网关充当反向代理的角色，作为流量的第一入口，承载了很多基础的、公共的模块功能，如：流控、鉴权、监控、路由转发等。</p><figure><img src="https://static.xlc520.tk/blogImage/640-1674184784231-9.jpeg" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>Spring Cloud 生态早期的网关是 Netflix 公司的Zuul，后来Zuul社区停止了维护。官方后来推出了 Spring Cloud Gateway，<strong>其底层是基于 WebFlux 框架</strong> ，而WebFlux框架的底层采用高性能通讯框架 Netty，性能是 Zuul 的 1.6 倍。</p><p><strong>核心组件：</strong></p><p>1、路由。</p><p>内部主要是负责转发规则。</p><p>2、断言（Predicate）</p><p>如果返回为true，当前路由才有效，才会路由到具体的服务。官方提供了很多<code>内置路由断言</code>，如果满足不了你的诉求，也可以<code>自定义路由断言工厂</code>。</p><p>所有的路由断言工厂都是继承自 <code>AbstractRoutePredicateFactory</code>，自定义类的命名也有固定规则，<code>“配置名”+RoutePredicateFactory</code>。这样，在yaml配置时，只需要写<code>前面定义的配置名</code>即可。</p><p>3、过滤器（Filter）</p><p>主要是请求、响应之间增加一些自定义的逻辑。按作用范围分为：全局和局部。全局是作用于所有的路由；而局部只是作用于某一个路由。</p><p>跟上面的断言类似，除了官方提供的过滤器，也支持自定义。</p><p><strong>局部过滤器</strong> ：继承自 <code>AbstractGatewayFilterFactory</code>，自定义类的命名也有固定规则，<code>“配置名”+GatewayFilterFactory</code>。这样，在yaml配置时，只需要写<code>前面定义的配置名</code>即可。</p><p><strong>全局过滤器</strong> ：实现<code>GlobalFilter</code>,<code>Ordered</code> 两个接口，实现逻辑跟上面的局部过滤器类似。这里就不展开了。其中的 <code>Ordered</code> 接口主要是负责优先级，数值越小，优先级越高。</p><p><strong>依赖包：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;dependency&gt;
 &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
 &lt;artifactId&gt;spring-cloud-starter-gateway&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>yaml 的配置示例：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>spring:
  cloud:
    gateway:
      routes:  #路由，可配置多个
        - id: user_route  # 路由id 唯一即可，默认是UUID
          uri: lb://user-server-sample # 匹配成功后提供的服务的地址
          order: 1 # 路由优先级，数值越小优先级越高，默认0
          predicates:
            - Path=/user/**  # 断言，路径匹配进行路由
         #  - User=0, 1000   # 自定义路由断言工厂  只允许查询id为0 - 1000之间的用户
         #  - Method=POST    # 表示需要POST方式请求
         #  - Query=id, \\d+  # 参数名id，正则表达式为\\d+（一个或多个数字）
          filters:
            - AddRequestHeader=X-Request-token, 12345678  #为原始请求加上请求头及值
           
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，服务提供方的地址可能经常变化，为了动态感知，我们引入 Nacos 注册中心，用于服务的注册、发现，统一管理服务的IP地址。网关路由转发时，只需从 Nacos 动态获取即可。</p><h2 id="七、sentinel-熔断、限流、降级" tabindex="-1"><a class="header-anchor" href="#七、sentinel-熔断、限流、降级"><span>七、Sentinel（熔断、限流、降级）</span></a></h2><p>Sentinel 是阿里开源的流控框架，提供了简单易用的控制台，比 <code>Hystrix</code>支持的范围更广。</p><p>集成简单，只需要少量配置，即可快速接入，支持如：gRPC、Dubbo、Spring Cloud 等</p><p><strong>同类竞品框架：</strong></p><ul><li>Hystrix 框架已经停止维护；</li><li>Resilience4j 一种轻量级容错库，专为 Java 8 和函数式编程而设计。通过装饰器的方式，以使用断路器，速率限制器，重试或隔板来增强任何功能接口，lambda 表达式或方法引用。</li></ul><p><strong>流控规则：</strong></p><p>页面元素介绍：</p><ul><li><p>资源名：唯一即可</p></li><li><p>针对来源：对调用者限流，填写应用名称（Spring.application.name的值），只针对某个服务限流</p></li><li><p>阈值类型</p></li><li><ul><li>QPS：每秒接收的请求数</li><li>线程数：能使用的业务线程数</li></ul></li><li><p>流控模式</p></li><li><ul><li>直接：达到条件后，直接执行某个流控效果</li><li>关联：如果访问关联接口B达到了阈值，则让接口A返回失败</li><li>链路：记录从入口资源的流量，达到条件也只限流入口资源</li></ul></li><li><p>流控效果</p></li><li><ul><li>快速失败：直接返回失败结果</li><li>Warm Up：预热，开始有一个缓冲期，初始值 = 阈值/ codeFactor(默认 3)，然后慢慢达到设置的阈值</li><li>排队等待：让请求以均匀的速度通过，如果请求超过阈值就等待，如果等待超时则返回失败</li></ul></li></ul><p><strong>降级规则：</strong></p><ul><li>RT</li><li>异常数</li><li>异常比例</li></ul><p><strong>系统规则：</strong></p><p>流控规则和降级规则是针对某个资源来说的，而系统规则是针对整个应用的，粒度更大，当前所有的接口服务都会应用这个系统规则。</p><p><strong>授权规则：</strong></p><p>根据调用方判断调用的接口资源是否被允许，如：黑名单、白名单机制</p><p><strong>热点规则：</strong></p><p>将粒度进一步细化，可以针对方法的参数做规则控制，为每个参数设置单独的阈值，也可以多个参数组合。从而实现单个方法的热点流量，按业务需求进一步控制。</p><p><strong>@SentinelResource注解</strong></p><p><code>@SentinelResource</code> 注解可以根据实际情况定制化功能，跟 <code>Hystrix</code> 的 <code>@HystrixCommand</code> 注解功能类似。达到阈值后，系统的默认提示是一段英文，很不友好，所以我们要<code>自定义兜底方法</code>。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// 资源名称为handle1 
@RequestMapping(&quot;/handle1&quot;)
@SentinelResource(value = &quot;handle1&quot;, blockHandler = &quot;blockHandlerTestHandler&quot;)
public String handle1(String params) { 
    // 业务逻辑处理
    return &quot;success&quot;;
}

// 接口方法 handle1 的 兜底方法
public String blockHandlerTestHandler(String params, BlockException blockException) {
    return &quot;兜底返回&quot;;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：<code>@SentinelResource</code>注解中，除了<code>blockHandler</code>字段外，还有<code>fallback</code>字段</p><ul><li><code>blockHandler</code>：主观层面，如果被限流，则调用该方法，进行兜底处理</li><li><code>fallback</code>：对业务的异常兜底，比如，执行过程中抛了各种<code>Exception</code>，则调用该方法，进行兜底处理</li></ul><p>通过上面两层兜底，可以让<code>Sentinel</code> 框架更加人性化，体验更好。</p><p><strong>集群流控：</strong></p><p>单机限流很容易做，但是互联网很多应用都是集群部署，毕竟其下游还挂载着 mysql、或者其他微服务，为了防止对下游的大流量冲击，采用集群流控。防止单机的流量不均匀， 理想下 QPS = 单机阈值 * 节点数</p><h2 id="八、seata-分布式事务" tabindex="-1"><a class="header-anchor" href="#八、seata-分布式事务"><span>八、Seata（分布式事务）</span></a></h2><p>事务的原子性和持久性可以确保在一个事务内，更新多条数据，要么都成功，要么都失败。在一个系统内部，我们可以使用数据库事务来保证数据一致性。那如果一笔交易，涉及到跨多个系统、多个数据库的时候，用单一的数据库事务就没办法解决了，此时需要引入分布式事务</p><p>Seata 是一款开源的分布式事务解决方案，致力于提供高性能和简单易用的分布式事务服务。Seata 将为用户提供了 AT、TCC、SAGA 和 XA 事务模式，默认 AT 模式 ，为用户打造一站式的分布式解决方案。</p><p><strong>优点：</strong></p><ul><li>对业务无侵入：即减少技术架构上的微服务化所带来的分布式事务问题对业务的侵入</li><li>高性能：减少分布式事务解决方案所带来的性能消耗</li></ul><p><img src="https://static.xlc520.tk/blogImage/640-1674184804718-12.jpeg" alt="图片" loading="lazy"><strong>Seata有3个基本组成部分</strong> ：</p><ul><li>事务管理器（TM）：定义全局事务的范围：开始全局事务，提交或回滚全局事务。</li><li>事务协调器（TC）：维护全局事务和分支事务的状态，驱动全局提交或回滚。</li><li>资源管理器（RM）：管理正在处理的分支事务的资源，与TC对话以注册分支事务并报告分支事务的状态，并驱动分支事务的提交或回滚。</li></ul><p><strong>运行流程</strong> ：</p><ul><li>TM 向 TC 申请开启一个全局事务，全局事务创建成功并生成一个全局唯一的 XID</li><li>XID 在微服务调用链路的上下文中传播</li><li>RM 向 TC 注册分支事务，TC 返回分支事务ID ，并将其纳入 XID 对应全局事务的管辖</li><li>RM 执行本地业务表操作，并记录 <code>undo_log</code> 日志，提交本地事务</li><li>当所有的 RM 都执行完后，TM 向 TC 发起针对 XID 的全局提交或回滚决议</li><li>TC 调度 XID 下管辖的全部分支事务完成提交或回滚请求。如果提交，删除 <code>undo_log</code> 日志就可以了。如果是回滚，根据 <code>undo_log</code> 表记录逆向回滚本地事务，把数据还原，最后再删除 <code>undo_log</code> 日志。</li></ul><p><strong>关于 Seata 之前写过很多文章，这里就不展开了，感兴趣可以看看</strong></p><ul><li>业务无侵入框架Seata， 解决分布式事务问题</li><li>深度剖析 Seata TCC 模式【图解 + 源码分析】</li><li>七种分布式事务的解决方案，一次讲给你听</li></ul><h2 id="九、spring-cloud-stream-异步消息" tabindex="-1"><a class="header-anchor" href="#九、spring-cloud-stream-异步消息"><span>九、Spring Cloud Stream （异步消息）</span></a></h2><p>Spring Cloud Stream 是统一消息中间件编程模型的框架，屏蔽了底层消息中间件的差异。支持的MQ 框架有 <code>RabbitMQ</code>、<code>Kafka</code>、<code>RocketMQ</code> 等</p><p><strong>常用注解：</strong></p><ul><li>@Input：标记为输入信道，消费消息</li><li>@Output：标记为输出信道，生产消息</li><li>@StreamListener：监听某个队列，接收消息，处理自身的业务逻辑</li><li>@EnableBinding：绑定通道</li></ul><p><strong>依赖包：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;dependency&gt;
 &lt;groupId&gt;com.alibaba.cloud&lt;/groupId&gt;
 &lt;artifactId&gt;spring-cloud-starter-stream-rocketmq&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>绑定通道：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@SpringBootApplication
@EnableBinding({CustomSource.class})
public class StreamProduceApplication {
 public static void main(String[] args) {
  SpringApplication.run(StreamProduceApplication.class, args);
 }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>定义输出信道：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>public interface CustomSource {
    @Output(&quot;output1&quot;)
    MessageChannel output1();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>yaml 配置：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>spring:
  cloud:
    stream:
      rocketmq:
        binder:
          name-server: 127.0.0.1:9876 # rocketMq服务地址
        bindings:
          output1:
            producer:
              transactional: true    # 事务
              group: myTxProducerGroup    # 事务分组
      bindings:
        output1:
          destination: test-transaction-topic # 主题
          content-type: application/json # 数据类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>发送消息：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Service
public class SendMessageService {
    @Resource
    private CustomSource customSource;

    public String sendMessage() { //发送简单字符串消息的方法
        String message = &quot;字符串测试消息&quot;;
        // 发送消息
  customSource.output1().send(MessageBuilder.withPayload(message).build());         
  return &quot;发送成功！&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="十、skywalking-分布式链路追踪" tabindex="-1"><a class="header-anchor" href="#十、skywalking-分布式链路追踪"><span>十、SkyWalking（分布式链路追踪）</span></a></h2><p>SkyWalking 是 一款 APM（应用性能监控）系统，专为微服务、云原生架构、容器（Docker、k8s、Mesos）而设计。通过探针收集应用的指标，进行分布式链路追踪，<strong>感知服务间的调用链路关系</strong> 。</p><p><strong>特性：</strong></p><ul><li>支持告警</li><li>采用探针技术，<strong>代码零侵入</strong></li><li>轻量高效，不需要大数据平台</li><li>多个语言自动探针。包括 Java，.NET Core 和 Node.JS。</li><li>强大的可视化后台</li></ul><figure><img src="https://static.xlc520.tk/blogImage/640-1674184808450-15.jpeg" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><ul><li>上部分 Agent ：负责从应用中，收集链路信息，发送给 SkyWalking OAP 服务器。目前支持 SkyWalking、Zikpin、Jaeger 等提供的 Tracing 数据信息。而我们目前采用的是，SkyWalking Agent 收集 SkyWalking Tracing 数据，传递给服务器。</li><li>下部分 SkyWalking OAP ：负责接收 Agent 发送的 Tracing 数据信息，然后进行分析(Analysis Core) ，存储到外部存储器( Storage )，最终提供查询( Query )功能。</li><li>右部分 Storage ：Tracing 数据存储。目前支持 ES、MySQL、Sharding Sphere、TiDB、H2 多种存储器。<strong>而我们目前采用的是 ES</strong> ，主要考虑是 SkyWalking 开发团队自己的生产环境采用 ES 为主。</li><li>左部分 SkyWalking UI ：负责提供控台，查看链路等等。</li></ul><p>SkyWalking 部署起来还是很简单的，apache官网直接下载并解压即可。</p><blockquote><p>https://skywalking.apache.org/</p></blockquote><p>SkyWalking 快速入门手册：</p><blockquote><p>https://skywalking.apache.org/zh/2020-04-19-skywalking-quick-start/</p></blockquote><h2 id="十一、xxl-job-分布式任务调度" tabindex="-1"><a class="header-anchor" href="#十一、xxl-job-分布式任务调度"><span>十一、XXL-JOB（分布式任务调度）</span></a></h2><p>关于定时任务，相信大家都不陌生。但是单节点的定时任务有很多不足：</p><ul><li>不支持集群，如果同时部署多个节点，会竞争数据，造成数据重复</li><li>如果是单节点，宕机后，任务无法自动感知、重启</li><li>不支持任务失败重试</li><li>不支持执行时间的动态调整</li><li>无报警机制</li><li>无任务数据统计功能</li><li>不支持数据分片</li></ul><p>无论是集群化，还是周边的生态建设，都不完备。而 XXL-JOB，可以完美解决这些问题。</p><p>XXL-JOB 是一款分布式任务调度框架，依赖的组件少（仅依赖 Java 和 MySQL），开箱即用。并提供了可视化界面，统计任务数据，动态修改任务执行时间，内置邮件报警，支持任务分片和任务失败重试。</p><p><strong>核心模块：</strong></p><p>1、调度中心</p><p>本身不执行业务逻辑，只负责向执行器发送调度命令。</p><p>2、执行器</p><p>接收调度中心的请求，并执行业务逻辑。</p><p><strong>依赖包：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;dependency&gt;
 &lt;groupId&gt;com.xuxueli&lt;/groupId&gt;
 &lt;artifactId&gt;xxl-job-core&lt;/artifactId&gt;
 &lt;version&gt;2.2.0&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>yaml 配置：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>server:
  port: 8082  #程序端口
xxl:
  job:
    admin:
      addresses: http://127.0.0.1:8002/xxl-job-admin  # 调度中心地址，多个用逗号分开
    accessToken:  # 调度中心和执行器通信的token，如果设置，两边要一样
    executor:
      appname: xxl-job-executor-sample  #执行器名称
      address:   # 执行器地址，默认使用xxl.job.executor.address配置项，如果为空，则使用xxl.job.executor.ip + xxl.job.executor.port
      ip:   # 执行器IP
      port: 9989  #执行器端口，与调度中心通信的端口
      logpath: D:/work/Spring-Cloud-Alibaba/sample/logs # 日志保存路径
      logretentiondays: 30 # 日志保留天数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>XxlJobSpringExecutor 初始化：</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>@Bean
public XxlJobSpringExecutor xxlJobExecutor() { // XXL-JOB执行器初始化
    XxlJobSpringExecutor xxlJobSpringExecutor = new XxlJobSpringExecutor();
    xxlJobSpringExecutor.setAdminAddresses(adminAddresses);
    xxlJobSpringExecutor.setAppname(appname);
    xxlJobSpringExecutor.setAddress(address);
    xxlJobSpringExecutor.setIp(ip);
    xxlJobSpringExecutor.setPort(port);
    xxlJobSpringExecutor.setAccessToken(accessToken);
    xxlJobSpringExecutor.setLogPath(logPath);
    xxlJobSpringExecutor.setLogRetentionDays(logRetentionDays);
    return xxlJobSpringExecutor;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以采用 <code>BEAN</code> 模式， 使用 <code>@XxlJob</code> 注解描述代码。优点：适用于一些复杂的业务场景。</p><p>也可以采用 <code>GLUE</code> 模式，将 <code>执行代码</code> 托管到调度中心在线维护。优点：简单快捷，不需要单独的业务工程。</p><p>如果要处理的数据量较大时，我们可以采用<code>分片</code>处理机制，将任务均摊到每个节点，从而减轻单个节点的压力。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>shardingVO.getIndex() # 当前执行器的分片序号（从0开始）
shardingVO.getTotal() # 总分片数，执行器集群的数量

# dataSource 待处理的所有原始数据
for (Integer val : dataSource) { // 遍历代理
    if (val % shardingVO.getTotal() == shardingVO.getIndex()) { // 取余
        //TODO 归属于当前分片处理
    } 
}  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>XXL-JOB 快速入门手册：</p><blockquote><p>https://www.xuxueli.com/xxl-job/</p></blockquote>`,163),t=[s];function a(r,o){return i(),n("div",null,t)}const p=e(d,[["render",a],["__file","SpringCloudAlibaba.html.vue"]]);export{p as default};
