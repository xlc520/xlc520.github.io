---
author: xlc520
title: Spring Cloud 优雅下线以及灰度发布
description: Spring Cloud 优雅下线以及灰度发布
date: 2022-04-10
category: Java
tag: Java
article: true
timeline: true
icon: java
password: 
---

# Spring Cloud 优雅下线以及灰度发布

## 前言

在生产环境中，如何保证在服务升级的时候，不影响用户的体验，这个是一个非常重要的问题。如果在我们升级服务的时候，会造成一段时间内的服务不可用，这就是不够优雅的。那什么是优雅的呢？主要就是指在服务升级的时候，不中断整个服务，让用户无感知，进而不会影响用户的体验，这就是优雅的。

实际上，优雅下线是目标，而不是手段，它是一个相对的概念，例如`kill PID`和`kill -9 PID`都是暴力杀死服务，相对于`kill -9 PID`来说，`kill PID`就是优雅的。但如果单独拿`kill PID`出来说，我们能说它是优雅的下线策略吗？肯定不是啊，就是这个道理。

因此，本文讲述的优雅下线仅能称之为“相对的优雅下线”，但相对于暴力的杀死服务，已经足够优雅了。常见的优雅解决方案，主要包括优雅下线和灰度发布。而实际上，灰度发布的范围就已经包含优雅下线了。

最后，在本文中，我们主要讲述基于 Spring Cloud 和 Euraka 的优雅下线以及灰度发布。

## 优雅下线

### 常见的下线方式

##### 方式一：kill PID

使用方式：kill java进程ID

该方式借助的是 Spring Boot 应用的 `Shutdown hook`，应用本身的下线也是优雅的，但如果你的服务发现组件使用的是 Eureka，那么默认最长会有 90 秒的延迟，其他应用才会感知到该服务下线，这意味着：该实例下线后的 90 秒内，其他服务仍然可能调用到这个已下线的实例。因此，该方式是不够优雅的 。

##### 方式二：/shutdown端点

Spring Boot 提供了`/shutdown`端点，可以借助它实现优雅停机。

使用方式：在想下线应用的application.yml中添加如下配置，从而启用并暴露`/shutdown`端点：

```yml
management:
  endpoint:
    shutdown:
      enabled: true
  endpoints:
    web:
      exposure:
        include: shutdown
```

发送 POST 请求到/shutdown端点

```sh
curl -X POST http://你想停止的服务地址/actuator/shutdown
```

该方式本质和方式一是一样的，也是借助 Spring Boot 应用的 Shutdown hook 去实现的。

##### 方式三：/pause端点

Spring Boot 应用提供了`/pause`端点，利用该端点可实现优雅下线。

使用方式：在想下线应用的application.yml中添加配置，从而启用并暴露`/pause`端点：

```yml
management:
  endpoint:
    # 启用pause端点
    pause:
      enabled: true
    # 启用restart端点，之所以要启用restart端点，是因为pause端点的启用依赖restart端点的启用
    restart:
      enabled: true
  endpoints:
    web:
      exposure:
        include: pause,restart
```

发送 POST 请求到`/actuator/pause`端点：

```sh
curl -X POST http://你想停止的服务实例地址/actuator/pause
```

执行后的效果类似下图：

![image-20220411090258141](https://img-blog.csdnimg.cn/20201019194250166.png)

如图所示，该应用在 Eureka Server 上的状已被标记为DOWN，但是应用本身其实依然是可以正常对外服务的。在 Spring Cloud 中，Ribbon 做负载均衡时，只会负载到标记为UP的实例上。

利用这两点，你可以：先用`/pause`端点，将要下线的应用标记为DOWN，但不去真正停止应用；然后过一定的时间（例如 90 秒，或者自己做个监控，看当前实例的流量变成 0 后）再去停止应用，例如`kill`应用。

**缺点 & 局限**

| 缺点                             | 描述                                                         |
| -------------------------------- | ------------------------------------------------------------ |
| 不同的版本配置不大一样           | 早期的 Spring Cloud 版本中，pause端点是不依赖restart端点的   |
| 无法和 Eureka 的健康检查配合使用 | 如果你的服务发现组件用的是 Eureka，并且你的应用开启了健康检查eureka.client.healthcheck.enabled = true，那么/pause端点无效 |
|                                  |                                                              |

##### 方式四：/service-registry端点

使用方式：在想下线应用的application.yml中添加配置，从而暴露`/service-registry`端点：

```yml
management:
  endpoints:
    web:
      exposure:
        include: service-registry
```

发送 POST 请求到`/actuator/service-registry`端点：

```sh
curl -X "POST" "http://localhost:8000/actuator/service-registry?status=DOWN" \
   -H "Content-Type: application/vnd.spring-boot.actuator.v2+json;charset=UTF-8"
```

实行后的效果类似如下图：

![图片](https://img-blog.csdnimg.cn/20201019194250166.png)

### 优雅的下线方式

在上文中，我们讲述了四种常见的下线方式，对比来看，方式四 是一种比较优雅的下线方式。

在实际项目中，我们可以先使用`/service-registry`端点，将服务标记为DOWN，然后监控服务的流量，当流量为 0 时，即可升级该服务。当然，这里假设我们部署了多个服务实例，当一个服务实例DOWN掉之后，其他服务实例仍然是可以提供服务的，如果就部署一台服务的话，那么讨论优不优雅就没那么重要了。

除了上述的下线方式之外，还有一种利用`EurekaAutoServiceRegistration`对象达到优雅下线的目标。

- 执行`eurekaAutoServiceRegistration.start()`方法时，当前服务向 Eureka 注册中心注册服务；
- 执行`eurekaAutoServiceRegistration.stop()`方法时，当前服务会向 Eureka 注册中心进行反注册，[注册中心](http://mp.weixin.qq.com/s?__biz=MzI4Njc5NjM1NQ==&mid=2247501632&idx=2&sn=ddf7d315f391456b7f8327f64babe1c6&chksm=ebd5f86cdca2717a93a3582480771f03ba97e1a0e161e40ab8e2933e9fe21458d9d5c30dc572&scene=21#wechat_redirect)收到请求后，会将此服务从注册列表中删除。

示例代码如下：

```java
@RestController
@RequestMapping(value = "/graceful/registry-service")
public class GracefulOffline {

    @Autowired
    private EurekaAutoServiceRegistration eurekaAutoServiceRegistration;

    @RequestMapping("/online")
    public String online() {
        this.eurekaAutoServiceRegistration.start();
        return "execute online method, online success.";
    }

    @RequestMapping("/offline")
    public String offline() {
        this.eurekaAutoServiceRegistration.stop();
        return "execute offline method, offline success.";
    }
}
```

到这里，我们已经介绍了两种相对优雅的下线方式了。具体如何操作，我们可以根据实际上情况进行包装，或者利用自动化的脚本来实现更加优雅的下线方式。

## 灰度发布

### 蓝绿部署

蓝绿部署，英文名为 Blue Green Deployment，**是一种可以保证系统在不间断提供服务的情况下上线的部署方式。**

如何保证系统不间断提供服务呢？那就是同时部署两个集群，但仅对外提供一个集群的服务，当需要升级时，切换集群进行升级。蓝绿部署无需停机，并且风险较小。其大致步骤为：

- 部署集群 1 的应用（初始状态），将所有外部请求的流量都打到这个集群上
- 部署集群 2 的应用，集群 2 的代码与集群 1 不同，如新功能或者 Bug 修复等
- 将流量从集群 1 切换到集群 2
- 如集群 2 测试正常，就删除集群 1 正在使用的资源（例如实例），使用集群 2 对外提供服务

因为在使用蓝绿部署的方式时，我们需要控制流量，所以我们需要借助路由服务，如 Nginx 等。

### 滚动部署

滚动部署，英文名为 Rolling Update，同样是一种可以保证系统在不间断提供服务的情况下上线的部署方式。和蓝绿部署不同的是，滚动部署对外提供服务的版本并不是非此即彼，而是在更细的粒度下平滑完成版本的升级。

如何做到细粒度平滑升级版本呢？滚动部署只需要一个[集群](http://mp.weixin.qq.com/s?__biz=MzI4Njc5NjM1NQ==&mid=2247504258&idx=1&sn=ae3c5ef6591a48dcab42f45ebc25f448&chksm=ebd5eeaedca267b8544c595845e230ec710a9fd108cc70caeed13c496290740ffcbb7708d6d6&scene=21#wechat_redirect)，集群下的不同节点可以独立进行版本升级。比如在一个 12 节点的集群中，我们每次升级 4 个节点，并将升级后的节点重新投入使用，周而复始，直到集群中所有的节点都更新为新版本。

**这种部署方式相对于蓝绿部署，更加节约资源，因为它不需要运行两个集群。**但这种方式也有很多缺点，例如：

- **没有一个确定 OK 的环境。**使用蓝绿部署，我们能够清晰地知道老版本是 OK 的，而使用滚动发布，我们无法确定。
- **修改了现有的环境。**
- **如果需要回滚，很困难。**举个例子，在某一次发布中，我们需要更新 100 个实例，每次更新 10 个实例，每次部署需要 5 分钟。当滚动发布到第 80 个实例时，发现了问题，需要回滚。这时，我们估计就要疯了。
- 有的时候，我们还可能对系统进行动态伸缩，如果部署期间，**系统自动扩容/缩容了，我们还需判断到底哪个节点使用的是哪个代码。**尽管有一些自动化的运维工具，但是依然令人心惊胆战。

并不是说滚动发布不好，滚动发布也有它非常合适的场景。

### 金丝雀部署

金丝雀部署又称灰度部署（或者，灰度发布），英文名为 Canary Deployment，**是指在黑与白之间，能够平滑过渡的一种发布方式**。

金丝雀的名称来源于「矿井中的金丝雀」，早在 17 世纪，英国矿井工人发现，金丝雀对瓦斯这种气体十分敏感，空气中哪怕有极其微量的瓦斯，金丝雀也会停止歌唱；而当瓦斯含量超过一定限度时，虽然鲁钝的人类毫无察觉，金丝雀却早已毒发身亡。当时在采矿设备相对简陋的条件下，工人们每次下井都会带上一只金丝雀作为“瓦斯检测指标”，以便在危险状况下紧急撤离。

我们来看一下金丝雀部署的步骤：

- 准备好部署各个阶段的工件，包括：**构建工件，测试脚本，配置文件和部署清单文件**
- 从负载均衡列表中移除掉“金丝雀”服务器
- 升级“金丝雀”应用（切断原有流量并进行部署）
- 对应用进行自动化测试
- 将“金丝雀”服务器重新添加到负载均衡列表中（连通性和健康检查）
- 如果“金丝雀”在线使用测试成功，升级剩余的其他服务器（否则就回滚）

在金丝雀部署中，常常按照用户量设置路由权重，例如 90% 的用户维持使用老版本，10% 的用户尝鲜新版本。不同版本应用共存，经常与 A/B 测试一起使用，用于测试选择多种方案。

金丝雀部署比较典型的例子，就是我们在使用某个应用的时候，该应用邀请我们进行“内测”或者“新版本体验”，如果我们同意了，那么我们就成了金丝雀。