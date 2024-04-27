---
author: xlc520
title: Spring Event轻量级内部组件解耦
excerpt: 
description: 
date: 2023-12-27
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# Spring Event 轻量级内部组件解耦

## 版本

- • JDK 8
- • Spring-boot 2.6.6

## 登录事件示例

- • 下面是一个使用 Spring 事件处理用户登录的简单示例。在此示例中，我们将创建一个 Spring Boot 应用程序，演示如何使用 Spring
  事件来处理用户登录事件。

## 创建一个登录事件

- • 创建一个自定义的事件类，用于表示用户登录事件，例如 LogonEvent：

```plain
public class LoginEvent extends ApplicationEvent {

    private final String userName;

    public LoginEvent(Object source, String username) {
        super(source);
        this.userName = username;
    }

    public String getUserName() {
        return userName;
    }
}
```

## 创建事件发布者

- • 创建一个事件发布者，用于发布用户登录事件：

```plain
@Service
public class LoginEventPublisher {

    private final ApplicationEventPublisher applicationEventPublisher;

    public LoginEventPublisher(ApplicationEventPublisher applicationEventPublisher) {
        this.applicationEventPublisher = applicationEventPublisher;
    }

    public void publishLoginEvent(String username) {
        LogonEvent loginEvent = new LoginEvent(this, username);
        applicationEventPublisher.publishEvent(loginEvent);
    }
}
```

## 创建事件监听器

- • 创建事件监听器，用于处理用户登录事件，支持创建一个或者多个类似发布订阅模式，本示例中创建了两个时间监听器：

```plain
// 日志处理事件监听器
@Component
public class LoginEventPrintLogListener {

    @EventListener
    public void handleUserLoginEvent(LoginEvent event) {
        String username = event.getUserName();
        // 在这里执行处理用户登录事件的逻辑，例如记录日志或触发其他操作
        System.out.println("User logged in: " + username);
    }
}

// 登录消息通知事件监听器
@Component
public class LoginEventMessageNoticeListener {

    @EventListener
    public void LoginEventMessageNoticeListener(LoginEvent event) {
        String username = event.getUserName();
        // 发送消息通知用户
        System.out.println("message send User logged in: " + username);
    }
}
```

## 模拟用户登录

- • 这里为了方便测试，使用 CommandLineRunner 启动时模拟登录：

```plain
@Component
public class MyCommandLineRunner implements CommandLineRunner {

    private final LoginEventPublisher loginEventPublisher;

    public MyCommandLineRunner(LoginEventPublisher loginEventPublisher) {
        this.loginEventPublisher = loginEventPublisher;
    }

    @Override
    public void run(String... args) {
        // 在应用程序启动后执行的自定义逻辑
        System.out.println("MyCommandLineRunner executed!");

        // 登录成功
        // 登录执行后逻辑
        loginEventPublisher.publishLoginEvent("小王");
    }
}
```

## 运行结果

```plain
2023-10-13 16:04:02.021  INFO 5356 --- [           main] w.s.c.ServletWebServerApplicationContext : Root WebApplicationContext: initialization completed in 1250 ms
2023-10-13 16:04:02.382  INFO 5356 --- [           main] o.s.b.w.embedded.tomcat.TomcatWebServer  : Tomcat started on port(s): 8080 (http) with context path ''
2023-10-13 16:05:31.792  INFO 5356 --- [           main] c.e.s.SpringBootTestMavenApplication     : Started SpringBootTestMavenApplication in 200.49 seconds (JVM running for 201.165)

MyCommandLineRunner executed!
message send User logged in: 小王
User logged in: 小王
```

## 单监听器和多监听器

- • 上文示例中，我们使用多监听器实现了对登录事件的监听，如果我们实际业务中只需要一个监听器，那么使用单监听器即可。

```plain
// 日志处理事件监听器
@Component
public class LoginEventPrintLogListener {

    @EventListener
    public void handleUserLoginEvent(LoginEvent event) {
        String username = event.getUserName();
        // 在这里执行处理用户登录事件的逻辑，例如记录日志或触发其他操作
        System.out.println("User logged in: " + username);
    }
}

// 登录消息通知事件监听器
@Component
public class LoginEventMessageNoticeListener {

    @EventListener
    public void LoginEventMessageNoticeListener(LoginEvent event) {
        String username = event.getUserName();
        // 发送消息通知用户
        System.out.println("message send User logged in: " + username);
    }
}
```

## 不使用 Annotation

- • 除了使用注解的方式实现监听器之外，我们也可以不使用注解实现：

```plain
@Component
public class LoginEventPrintLogListenerTest implements ApplicationListener<LoginEvent> {

    @Override
    public void onApplicationEvent(LoginEvent event) {
        System.out.println("this is a Listener with not annotation");
    }
}
```

### Asynchronous Event Listener（异步监听器）

- • 默认情况下，事件监听器使用当前线程同步处理事件，当前线程阻塞直到事件处理完成，在一些事件监听器处理事件比较长的场景是不适合的，这时候我们可以使用异步进行处理。

```plain
@SpringBootApplication
// 开启 Async
@EnableAsync
public class SpringBootTestMavenApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringBootTestMavenApplication.class, args);
    }
}

@Component
public class LoginEventPrintLogListener {

    @EventListener
    // 配置任务异步 创建新线程处理该事件
    @Async
    public void handleUserLoginEvent(LoginEvent event) throws Exception {
        String username = event.getUserName();
        // 在这里执行处理用户登录事件的逻辑，例如记录日志或触发其他操作
        System.out.println("User logged in: " + username);
    }
}
```

### Conditional Events (条件事件)

- • Spring 还提供了根据特定标准有条件地处理事件的功能。这使我们能够很好地控制监听器对事件的处理。
- • 比如在下面的示例中，仅当登录用户的 userName 等于小王时才会触发监听器执行：

```plain
@Component
public class LoginEventPrintLogListener {

    @EventListener(condition = "#event.userName.equals('小王')")
    public void handleUserLoginEvent(LoginEvent event) throws Exception {
        String username = event.getUserName();
        // 在这里执行处理用户登录事件的逻辑，例如记录日志或触发其他操作
        System.out.println("User logged in: " + username);
    }
}
```

### Transactional Events（事务事件）

- • Spring 事件可以和事务一起使用，但是可能会出现下面这种异常情况，用户注册成功后发布登录事件，但在后续的事务处理中处理异常导致事务回滚，会出现用户收到注册成功短信但实际没有注册成功。
- • 对于上述这种场景，我们一般有两种方案处理：

```plain
方案一：将事务处理逻辑和事件发布拆分，避免上述异常场景（推荐）
方案二：使用 TransactionalEventListener 指定和事务执行的顺序关系
```

### @TransactionalEventListener

- • 在 Spring 4.2+，引入了 @TransactionalEventListener 对 @EventListener 进行增强。以便能够控制在事务的时候 Event 事件的处理方式。

```plain
@Component
public class MyCommandLineRunner implements CommandLineRunner {

    private final RegisterEventPublisher registerEventPublisher;

    public MyCommandLineRunner(RegisterEventPublisher registerEventPublisher) {
        this.RegisterEventPublisher = registerEventPublisher;
    }

    @Override
    @Transactional
    public void run(String... args) {
        // 在应用程序启动后执行的自定义逻辑
        System.out.println("MyCommandLineRunner executed!");

        // 注册成功
        // 注册执行后逻辑
        registerEventPublisher.publishRegisterEvent("小王");
        // 执行异常导致事务回滚
    }
}

@Component
public class RegisterEventPrintLogListener {

    // 事务提交后才会执行
    @TransactionalEventListener(phase = TransactionPhase.AFTER_COMMIT)
    public void handleUserRegisterEvent(RigisterEvent event) throws Exception {
        String username = event.getUserName();
        // 在这里执行处理用户注册事件的逻辑，例如记录日志或触发其他操作
        System.out.println("User register: " + username);
    }
}
```

### Order of Event Execution (监听事件执行顺序)

- • 默认情况下，多个监听器对同一个事件的处理事未定的，我们可以使用 @Order 注解指定执行顺序。

```plain
@Component
public class LoginEventPrintLogListener {

    @EventListener
    @Order(1)
    public void handleUserLoginEvent(LoginEvent event) throws Exception {
        String username = event.getUserName();
        // 在这里执行处理用户登录事件的逻辑，例如记录日志或触发其他操作
        System.out.println("User logged in: " + username);
    }
}

@Component
public class LoginEventMessageNoticeListener {

    @EventListener
    @Order(2)
    public void LoginEventMessageNoticeListener(LoginEvent event) {
        String username = event.getUserName();
        // 发送消息通知用户
        System.out.println("message send User logged in: " + username);
    }
}
```

## Generic Events（泛型事件）

- • 我们也可以使用泛型来实现通用的事件处理。定义一个通用的事件类型，以处理不同类型的事件数据。以下是一个使用泛型的 Spring
  事件处理示例：

```plain
public class GenericEvent<T> extends ApplicationEvent {

    private T eventData;

    public GenericEvent(Object source, T eventData) {
        super(source);
        this.eventData = eventData;
    }

    public T getEventData() {
        return eventData;
    }
}

@Service
public class EventPublisherService {

    private final ApplicationEventPublisher eventPublisher;

    public EventPublisherService(ApplicationEventPublisher eventPublisher) {
        this.eventPublisher = eventPublisher;
    }

    public <T> void publishGenericEvent(T eventData) {
        GenericEvent<T> genericEvent = new GenericEvent<>(this, eventData);
        eventPublisher.publishEvent(genericEvent);
    }
}

@Component
public class GenericEventListener {

    @EventListener
    public <T> void handleGenericEvent(GenericEvent<T> event) {
        T eventData = event.getEventData();
        System.out.println("Received a generic event with data: " + eventData);
    }
}
```

## 监听器异常处理

- • 我们根据监听器的执行方式选择不同的方式对异常进行处理。
- • 实际业务中不建议使用，本身 Spring Event 的意义在于对内部组件进行解耦，各个监听器之间应该尽可能的独立。

## 同步异常处理

- • 自定义 ErrorHandler 并绑定到 SimpleApplicationEventMulticaster 上。

```plain
@Component
public class MyErrorHandler implements ErrorHandler {
    @Override
    public void handleError(Throwable t) {
        log.info("handle error -> {}", t.getClass());
    }
}

@Service
public class EventListenerService {

    @Autowired
    private SimpleApplicationEventMulticaster simpleApplicationEventMulticaster;

    @Autowired
    private MyErrorHandler errorHandler;

    @PostConstruct
    public void init(){
        simpleApplicationEventMulticaster.setErrorHandler(errorHandler);
    }
}
```

## 异步监听器异常处理

- • 使用 SimpleAsyncUncaughtExceptionHandler 来处理 @Async 抛出的异常

```plain
@Configuration
public class AsyncConfig implements AsyncConfigurer {
    @Override
    public AsyncUncaughtExceptionHandler getAsyncUncaughtExceptionHandler() {
        return new SimpleAsyncUncaughtExceptionHandler();
    }
}
```

## 最佳实践

### 监听器默认同步执行

- • 事件的所有监听器是同步执行的，需要评估同步阻塞对当前主流程带来的影响，建议使用异步的方式。

### 监听器的事件处理并不可靠

- • 监听器并不会保证事件会如预期一样的处理完成，比如同步处理时某个监听器处理异常会导致后序监听器无法执行；程序关闭时可能发生监听事件未处理完成等等。
- • 虽然我们可以写一些附加的代码逻辑、技术手段去保证可靠性，但个人认为并不划算，因此建议 Spring Event
  应仅使用在应用程序内部组件解耦且没有可靠性要求的场景，比如消息通知等。

### 保持监听器的逻辑尽可能小

- • 事件监听器的逻辑应该保持在最低限度，仅仅是充当程序内部不同部分的粘合剂，任何实质性的逻辑应该放在具体的服务类实现。

### 不要依赖监听器执行顺序

- • 最佳情况下，同一事件的各个监听器之间应该是独立的，虽然我们可以使用 @Order
  来控制监听器之间的执行顺序，但是仅在同步执行的场景下有效，监听器异步执行的情况下实际执行顺序仍然是不可控的。

### 谨慎使用条件监听器和事务监听器

- • 虽然两者都是强大的工具，但过多的使用会导致我们的程序出现难以调试的问题。
