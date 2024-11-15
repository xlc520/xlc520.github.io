---
title: SpringBoot 集成WebSocket 的 3 种集成方式
excerpt:
description: SpringBoot 集成WebSocket 的 3 种集成方式
date: 2024-09-27
category: Java
tag: Java
author: xlc520
article: true
timeline: true
icon: java
---

```component VPBanner
title: SpringBoot 集成WebSocket 的 3 种集成方式
content: SpringBoot 集成WebSocket 的 3 种集成方式
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: SpringBoot 集成WebSocket 的 3 种集成方式
    link: /dev/SpringBoot 集成WebSocket 的 3 种集成方式
```

# SpringBoot 集成WebSocket 的 3 种集成方式



目前WebSocket 方案

- Javax
- WebMVC
- WebFlux
- Java-WebSocket
- SocketIO
- Netty

## Javax

在java的扩展包javax.websocket中就定义了一套WebSocket的接口规范

### 服务端

一般使用注解的方式来进行配置

#### 第一步

```java
@Component
@ServerEndpoint("/websocket/{type}")
public class JavaxWebSocketServerEndpoint {

    @OnOpen
    public void onOpen(Session session, EndpointConfig config,
                       @PathParam(value = "type") String type) {
        //连接建立
    }

    @OnClose
    public void onClose(Session session, CloseReason reason) {
        //连接关闭
    }

    @OnMessage
    public void onMessage(Session session, String message) {
        //接收文本信息
    }

    @OnMessage
    public void onMessage(Session session, PongMessage message) {
        //接收pong信息
    }

    @OnMessage
    public void onMessage(Session session, ByteBuffer message) {
        //接收二进制信息，也可以用byte[]接收
    }

    @OnError
    public void onError(Session session, Throwable e) {
        //异常处理
    }
}
```

我们在类上添加@ServerEndpoint注解来表示这是一个服务端点，同时可以在注解中配置路径，这个路径可以配置成动态的，使用{}包起来就可以了

- @OnOpen用来标记对应的方法作为客户端连接上来之后的回调，Session就相当于和客户端的连接啦，我们可以把它缓存起来用于发送消息；通过@PathParam注解就可以获得动态路径中对应值了
- @OnClose用来标记对应的方法作为客户端断开连接之后的回调，我们可以在这个方法中移除对应Session的缓存，同时可以接受一个CloseReason的参数用于获取关闭原因
- @OnMessage用来标记对应的方法作为接收到消息之后的回调，我们可以接受文本消息，二进制消息和pong消息
- @OnError用来标记对应的方法作为抛出异常之后的回调，可以获得对应的Session和异常对象

#### 第二步

```java
implementation 'org.springframework.boot:spring-boot-starter-websocket'
@Configuration(proxyBeanMethods = false)
public class JavaxWebSocketConfiguration {

    @Bean
    public ServerEndpointExporter serverEndpointExporter() {
        return new ServerEndpointExporter();
    }
}
```

依赖Spring的WebSocket模块，手动注入ServerEndpointExporter就可以了

需要注意ServerEndpointExporter是Spring中的类，算是Spring为了支持javax.websocket的原生用法所提供的支持类

#### 冷知识

javax.websocket库中定义了PongMessage而没有PingMessage

通过我的测试发现基本上所有的WebSocket包括前端js自带的，都实现了自动回复；也就是说当接收到一个ping消息之后，是会自动回应一个pong消息，所以没有必要再自己接受ping消息来处理了，即我们不会接受到ping消息；关注工众号：码猿技术专栏，回复关键词：1111 获取阿里内部Java性能调优手册！

当然我上面讲的ping和pong都是需要使用框架提供的api，如果是我们自己通过Message来自定义心跳数据的话是没有任何的处理的，下面是对应的api

```java
//发送ping
session.getAsyncRemote().sendPing(ByteBuffer buffer);

//发送pong
session.getAsyncRemote().sendPong(ByteBuffer buffer);
```

然后我又发现js自带的WebSocket是没有发送ping的api的，所以是不是可以猜想当初就是约定服务端发送ping，客户端回复pong

### 客户端

客户端也是使用注解配置

#### 第一步

```java
@ClientEndpoint
public class JavaxWebSocketClientEndpoint {

    @OnOpen
    public void onOpen(Session session) {
        //连接建立
    }

    @OnClose
    public void onClose(Session session, CloseReason reason) {
        //连接关闭
    }

    @OnMessage
    public void onMessage(Session session, String message) {
        //接收文本消息
    }

    @OnMessage
    public void onMessage(Session session, PongMessage message) {
        //接收pong消息
    }

    @OnMessage
    public void onMessage(Session session, ByteBuffer message) {
        //接收二进制消息
    }

    @OnError
    public void onError(Session session, Throwable e) {
        //异常处理
    }
}
```

客户端使用@ClientEndpoint来标记，其他的@OnOpen，@OnClose，@OnMessage，@OnError和服务端一模一样

### 第二步

```java
WebSocketContainer container = ContainerProvider.getWebSocketContainer();
Session session = container.connectToServer(JavaxWebSocketClientEndpoint.class, uri);
```

我们可以通过ContainerProvider来获得一个WebSocketContainer，然后调用connectToServer方法将我们的客户端类和连接的uri传入就行了

#### 冷知识

通过ContainerProvider#getWebSocketContainer获得WebSocketContainer其实是基于SPI实现的

在Spring的环境中我更推荐大家使用ServletContextAware来获得，代码如下

```java
@Component
public class JavaxWebSocketContainer implements ServletContextAware {

    private volatile WebSocketContainer container;

    public WebSocketContainer getContainer() {
        if (container == null) {
            synchronized (this) {
                if (container == null) {
                    container = ContainerProvider.getWebSocketContainer();
                }
            }
        }
        return container;
    }

    @Override
    public void setServletContext(@NonNull ServletContext servletContext) {
        if (container == null) {
            container = (WebSocketContainer) servletContext
                .getAttribute("javax.websocket.server.ServerContainer");
        }
    }
}
```

### 发消息

```java
Session session = ...

//发送文本消息
session.getAsyncRemote().sendText(String message);

//发送二进制消息
session.getAsyncRemote().sendBinary(ByteBuffer message);

//发送对象消息，会尝试使用Encoder编码
session.getAsyncRemote().sendObject(Object message);

//发送ping
session.getAsyncRemote().sendPing(ByteBuffer buffer);

//发送pong
session.getAsyncRemote().sendPong(ByteBuffer buffer);
```

## WebMVC

依赖肯定是必不可少的

```
implementation 'org.springframework.boot:spring-boot-starter-websocket'
```

### 服务端

#### 第一步

```java
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;

public class ServletWebSocketServerHandler implements WebSocketHandler {

    @Override
    public void afterConnectionEstablished(@NonNull WebSocketSession session) throws Exception {
        //连接建立
    }

    @Override
    public void handleMessage(@NonNull WebSocketSession session, @NonNull WebSocketMessage<?> message) throws Exception {
        //接收消息
    }

    @Override
    public void handleTransportError(@NonNull WebSocketSession session, @NonNull Throwable exception) throws Exception {
        //异常处理
    }

    @Override
    public void afterConnectionClosed(@NonNull WebSocketSession session, @NonNull CloseStatus closeStatus) throws Exception {
        //连接关闭
    }

    @Override
    public boolean supportsPartialMessages() {
        //是否支持接收不完整的消息
        return false;
    }
}
```

我们实现一个WebSocketHandler来处理WebSocket的连接，关闭，消息和异常

#### 第二步

```java
@Configuration
@EnableWebSocket
public class ServletWebSocketServerConfigurer implements WebSocketConfigurer {

    @Override
    public void registerWebSocketHandlers(@NonNull WebSocketHandlerRegistry registry) {
        registry
            //添加处理器到对应的路径
            .addHandler(new ServletWebSocketServerHandler(), "/websocket")
            .setAllowedOrigins("*");
    }
}
```

首先需要添加@EnableWebSocket来启用WebSocket

然后实现WebSocketConfigurer来注册WebSocket路径以及对应的WebSocketHandler

#### 握手拦截

提供了HandshakeInterceptor来拦截握手

```java
@Configuration
@EnableWebSocket
public class ServletWebSocketServerConfigurer implements WebSocketConfigurer {

    @Override
    public void registerWebSocketHandlers(@NonNull WebSocketHandlerRegistry registry) {
        registry
            //添加处理器到对应的路径
            .addHandler(new ServletWebSocketServerHandler(), "/websocket")
            //添加握手拦截器
            .addInterceptors(new ServletWebSocketHandshakeInterceptor())
            .setAllowedOrigins("*");
    }
    
    public static class ServletWebSocketHandshakeInterceptor implements HandshakeInterceptor {

        @Override
        public boolean beforeHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler, Map<String, Object> attributes) throws Exception {
            //握手之前
            //继续握手返回true, 中断握手返回false
            return false;
        }

        @Override
        public void afterHandshake(ServerHttpRequest request, ServerHttpResponse response, WebSocketHandler wsHandler, Exception exception) {
            //握手之后
        }
    }
}
```

#### 冷知识

我在集成的时候发现这种方式没办法动态匹配路径，它的路径就是固定的，没办法使用如/websocket/**这样的通配符

我在研究了一下之后发现可以在UrlPathHelper上做点文章

```java
@Configuration
@EnableWebSocket
public class ServletWebSocketServerConfigurer implements WebSocketConfigurer {

    @Override
    public void registerWebSocketHandlers(@NonNull WebSocketHandlerRegistry registry) {
        if (registry instanceof ServletWebSocketHandlerRegistry) {
            //替换UrlPathHelper
            ((ServletWebSocketHandlerRegistry) registry)
                .setUrlPathHelper(new PrefixUrlPathHelper("/websocket"));
        }

        registry
            //添加处理器到对应的路径
            .addHandler(new ServletWebSocketServerHandler(), "/websocket/**")
            .setAllowedOrigins("*");
    }
    
    public class PrefixUrlPathHelper extends UrlPathHelper {

        private String prefix;

        @Override
        public @NonNull String resolveAndCacheLookupPath(@NonNull HttpServletRequest request) {
            //获得原本的Path
            String path = super.resolveAndCacheLookupPath(request);
            //如果是指定前缀就返回对应的通配路径
            if (path.startsWith(prefix)) {
                return prefix + "/**";
            }
            return path;
        }
    }
}
```

因为它内部实际上就是用一个`Map<String, WebSocketHandler>`来存的，所以没有办法用通配符

主要是有现成的AntPathMatcher实现通配应该不麻烦才对啊

### 客户端

#### 第一步

```java
public class ServletWebSocketClientHandler implements WebSocketHandler {

    @Override
    public void afterConnectionEstablished(@NonNull WebSocketSession session) throws Exception {
        //连接建立
    }

    @Override
    public void handleMessage(@NonNull WebSocketSession session, @NonNull WebSocketMessage<?> message) throws Exception {
        //接收消息
    }

    @Override
    public void handleTransportError(@NonNull WebSocketSession session, @NonNull Throwable exception) throws Exception {
        //异常处理
    }

    @Override
    public void afterConnectionClosed(@NonNull WebSocketSession session, @NonNull CloseStatus closeStatus) throws Exception {
        //连接关闭
    }

    @Override
    public boolean supportsPartialMessages() {
        //是否支持接收不完整的消息
        return false;
    }
}
```

和服务端一样我们需要先实现一个WebSocketHandler来处理WebSocket的连接，关闭，消息和异常

#### 第二步

```java
WebSocketClient client = new StandardWebSocketClient();
WebSocketHandler handler = new ServletWebSocketClientHandler();
WebSocketConnectionManager manager = new WebSocketConnectionManager(client, handler, uri);
manager.start();
```

首先我们需要先new一个StandardWebSocketClient，可以传入一个WebSocketContainer参数，获得该对象的方式我之前已经介绍过了，这边就先略过

然后new一个WebSocketConnectionManager传入WebSocketClient，WebSocketHandler还有路径uri

最后调用一下WebSocketConnectionManager的start方法就可以啦

#### 冷知识

这里如果大家去看WebSocketClient的实现类就会发现有StandardWebSocketClient还有JettyWebSocketClient等等，所以大家可以根据自身项目所使用的容器来选择不同的WebSocketClient实现类

这里给大家贴一小段Spring适配不同容器WebSocket的代码

```java
public abstract class AbstractHandshakeHandler implements HandshakeHandler, Lifecycle {

    private static final boolean tomcatWsPresent;

    private static final boolean jettyWsPresent;

    private static final boolean jetty10WsPresent;

    private static final boolean undertowWsPresent;

    private static final boolean glassfishWsPresent;

    private static final boolean weblogicWsPresent;

    private static final boolean websphereWsPresent;

    static {
        ClassLoader classLoader = AbstractHandshakeHandler.class.getClassLoader();
        tomcatWsPresent = ClassUtils.isPresent(
            "org.apache.tomcat.websocket.server.WsHttpUpgradeHandler", classLoader);
        jetty10WsPresent = ClassUtils.isPresent(
            "org.eclipse.jetty.websocket.server.JettyWebSocketServerContainer", classLoader);
        jettyWsPresent = ClassUtils.isPresent(
            "org.eclipse.jetty.websocket.server.WebSocketServerFactory", classLoader);
        undertowWsPresent = ClassUtils.isPresent(
            "io.undertow.websockets.jsr.ServerWebSocketContainer", classLoader);
        glassfishWsPresent = ClassUtils.isPresent(
            "org.glassfish.tyrus.servlet.TyrusHttpUpgradeHandler", classLoader);
        weblogicWsPresent = ClassUtils.isPresent(
            "weblogic.websocket.tyrus.TyrusServletWriter", classLoader);
        websphereWsPresent = ClassUtils.isPresent(
            "com.ibm.websphere.wsoc.WsWsocServerContainer", classLoader);
    }
}
```

### 发消息

```java
import org.springframework.web.socket.*;

WebSocketSession session = ...

//发送文本消息
session.sendMessage(new TextMessage(CharSequence message);

//发送二进制消息
session.sendMessage(new BinaryMessage(ByteBuffer message));

//发送ping
session.sendMessage(new PingMessage(ByteBuffer message));

//发送pong
session.sendMessage(new PongMessage(ByteBuffer message));
```

## WebFlux

WebFlux的WebSocket不需要额外的依赖包

### 服务端

#### 第一步

```java
import org.springframework.web.reactive.socket.WebSocketHandler;
import org.springframework.web.reactive.socket.WebSocketSession;

public class ReactiveWebSocketServerHandler implements WebSocketHandler {

    @NonNull
    @Override
    public Mono<Void> handle(WebSocketSession session) {
        Mono<Void> send = session.send(Flux.create(sink -> {
            //可以持有sink对象在任意时候调用next发送消息
            sink.next(WebSocketMessage message);
        })).doOnError(it -> {
            //异常处理
        });

        Mono<Void> receive = session.receive()
                .doOnNext(it -> {
                    //接收消息
                })
                .doOnError(it -> {
                    //异常处理
                })
                .then();

        @SuppressWarnings("all")
        Disposable disposable = session.closeStatus()
                .doOnError(it -> {
                    //异常处理
                })
                .subscribe(it -> {
                    //连接关闭
                });

        return Mono.zip(send, receive).then();
    }
}
```

首先需要注意这里的WebSocketHandler和WebSocketSession是reactive包下的

- 通过WebSocketSession#send方法来持有一个`FluxSink<WebSocketMessage>`来用于发送消息
- 通过WebSocketSession#receive来订阅消息
- 通过WebSocketSession#closeStatus来订阅连接关闭事件

#### 第二步

```java
@Component
public class ReactiveWebSocketServerHandlerMapping extends SimpleUrlHandlerMapping {

    public ReactiveWebSocketServerHandlerMapping() {
        Map<String, WebSocketHandler> map = new HashMap<>();
        map.put("/websocket/**", new ReactiveWebSocketServerHandler());
        setUrlMap(map);
        setOrder(100);
    }
}
```

注册一个HandlerMapping同时配置路径和对应的WebSocketHandler

#### 第三步

```java
@Configuration(proxyBeanMethods = false)
public class ReactiveWebSocketConfiguration {

    @Bean
    public WebSocketHandlerAdapter webSocketHandlerAdapter() {
        return new WebSocketHandlerAdapter();
    }
}
```

注入WebSocketHandlerAdapter

#### 冷知识

我们自定义的HandlerMapping需要设置order，如果不设置，默认为Ordered.LOWEST_PRECEDENCE，会导致这个HandlerMapping被放在最后，当有客户端连接上来时会被其他的HandlerMapping优先匹配上而连接失败

### 客户端

#### 第一步

```java
public class ReactiveWebSocketClientHandler implements WebSocketHandler {

    @NonNull
    @Override
    public Mono<Void> handle(WebSocketSession session) {
        Mono<Void> send = session.send(Flux.create(sink -> {
            //可以持有sink对象在任意时候调用next发送消息
            sink.next(WebSocketMessage message);
        })).doOnError(it -> {
            //处理异常
        });

        Mono<Void> receive = session.receive()
                .doOnNext(it -> {
                    //接收消息
                })
                .doOnError(it -> {
                    //异常处理
                })
                .then();

        @SuppressWarnings("all")
        Disposable disposable = session.closeStatus()
                .doOnError(it -> {
                    //异常处理
                })
                .subscribe(it -> {
                    //连接关闭
                });

        return Mono.zip(send, receive).then();
    }
}
```

客户端WebSocketHandler的写法和服务端的一样

#### 第二步

```java
import org.springframework.web.reactive.socket.client.WebSocketClient;

WebSocketClient client = ReactorNettyWebSocketClient();
WebSocketHandler handler = new ReactiveWebSocketClientHandler();
client.execute(uri, handler).subscribe();
```

首先我们需要先new一个ReactorNettyWebSocketClient

然后调用一下WebSocketClient的execute方法传入路径uri和WebSocketHandler并继续调用subscribe方法就行啦

#### 冷知识

和WebMVC中的WebSocketClient一样，Reactive包中的WebSocketClient也有很多实现类，比如ReactorNettyWebSocketClient，JettyWebSocketClient，UndertowWebSocketClient，TomcatWebSocketClient等等，也是需要大家基于自身项目的容器使用不同的实现类

这里也给大家贴一小段Reactive适配不同容器WebSocket的代码

```java
public class HandshakeWebSocketService implements WebSocketService, Lifecycle {

    private static final boolean tomcatPresent;

    private static final boolean jettyPresent;

    private static final boolean jetty10Present;

    private static final boolean undertowPresent;

    private static final boolean reactorNettyPresent;

    static {
        ClassLoader loader = HandshakeWebSocketService.class.getClassLoader();
        tomcatPresent = ClassUtils.isPresent("org.apache.tomcat.websocket.server.WsHttpUpgradeHandler", loader);
        jettyPresent = ClassUtils.isPresent("org.eclipse.jetty.websocket.server.WebSocketServerFactory", loader);
        jetty10Present = ClassUtils.isPresent("org.eclipse.jetty.websocket.server.JettyWebSocketServerContainer", loader);
        undertowPresent = ClassUtils.isPresent("io.undertow.websockets.WebSocketProtocolHandshakeHandler", loader);
        reactorNettyPresent = ClassUtils.isPresent("reactor.netty.http.server.HttpServerResponse", loader);
    }
}
```

### 发消息

我们需要使用在WebSocketHandler中获得的`FluxSink<WebSocketMessage>`来发送消息

```java
import org.springframework.web.reactive.socket.CloseStatus;
import org.springframework.web.reactive.socket.WebSocketMessage;
import org.springframework.web.reactive.socket.WebSocketSession;

public class ReactiveWebSocket {

    private final WebSocketSession session;

    private final FluxSink<WebSocketMessage> sender;

    public ReactiveWebSocket(WebSocketSession session, FluxSink<WebSocketMessage> sender) {
        this.session = session;
        this.sender = sender;
    }

    public String getId() {
        return session.getId();
    }

    public URI getUri() {
        return session.getHandshakeInfo().getUri();
    }

    public void send(Object message) {
        if (message instanceof WebSocketMessage) {
            sender.next((WebSocketMessage) message);
        } else if (message instanceof String) {
            //发送文本消息
            sender.next(session.textMessage((String) message));
        } else if (message instanceof DataBuffer) {
            //发送二进制消息
            sender.next(session.binaryMessage(factory -> (DataBuffer) message));
        } else if (message instanceof ByteBuffer) {
            发送二进制消息
            sender.next(session.binaryMessage(factory -> factory.wrap((ByteBuffer) message)));
        } else if (message instanceof byte[]) {
            发送二进制消息
            sender.next(session.binaryMessage(factory -> factory.wrap((byte[]) message)));
        } else {
            throw new IllegalArgumentException("Message type not match");
        }
    }

    public void ping() {
        //发送ping
        sender.next(session.pingMessage(factory -> factory.wrap(ByteBuffer.allocate(0))));
    }

    public void pong() {
        //发送pong
        sender.next(session.pongMessage(factory -> factory.wrap(ByteBuffer.allocate(0))));
    }

    public void close(CloseStatus reason) {
        sender.complete();
        session.close(reason).subscribe();
    }
}
```

## Java-WebSocket

这是一个纯java的第三方库，专门用于实现WebSocket

Github上已经有很详细的使用教程了，现在有9k+的Star

> 传送门：https://github.com/TooTallNate/Java-WebSocket

## SocketIO

该库使用的协议是经过自己封装的，支持很多的语言，提供了统一的接口，所以需要使用它提供的Server和Client来连接，如socket.io-server-java和socket.io-client-java

这个库我了解下来主要用于实时聊天等场景，所以如果只是普通的WebSocket功能就有点大材小用了

Github上也有非常详细的使用文档，大家如果有兴趣可以研究一下

> 传送门：https://github.com/socketio

## Netty

这个大家应该都比较熟悉了，就算没用过肯定也听过

网上的文档和示例也非常多，我这里就不介绍有的没的了，Github传送门

> 传送门：https://github.com/netty/netty




<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
