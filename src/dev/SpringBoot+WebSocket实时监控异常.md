---
author: xlc520
title: SpringBoot+WebSocket实时监控异常
description: SpringBoot+WebSocket实时监控异常
date: 2022-05-15
category: Java
tag: Java
article: true
timeline: true
icon: java
password: 
---

# SpringBoot+WebSocket实时监控异常

## 需求

消防的设备巡检，如果巡检发现异常，通过手机端提交，后台的实时监控页面实时获取到该设备的信息及位置，然后安排员工去处理。

因为需要服务端主动向客户端发送消息，所以很容易的就想到了用WebSocket来实现这一功能。

 WebSocket就不做介绍了，上链接：https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket

 前端略微复杂，需要在一张位置分布图上进行鼠标描点定位各个设备和根据不同屏幕大小渲染，本文不做介绍，只是简单地用页面样式进行效果呈现。

**绿色代表正常，红色代表异常**

预期效果，未接收到请求前----->id为3的提交了异常，id为3的王五变成了红色

![img](https://static.xlc520.ml/blogImage/2519868-20211015031414701-272219147.png)　　　　![img](https://static.xlc520.ml/blogImage/2519868-20211015031659597-188497867.png)

 

## 实现-前端：

直接贴代码

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>实时监控</title>
    </head>
    <style>
        .item {
            display: flex;
            border-bottom: 1px solid #000000;
            justify-content: space-between;
            width: 30%;
            line-height: 50px;
            height: 50px;
        }

        .item span:nth-child(2){
            margin-right: 10px;
            margin-top: 15px;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #55ff00;
        }
        .nowI{
            background: #ff0000 !important;
        }
    </style>
    <body>
        <div id="app">
            <div v-for="item in list" class="item">
                <span>{{item.id}}.{{item.name}}</span>
                <span :class='item.state==-1?"nowI":""'></span>
            </div>
        </div>
    </body>
    <script src="./js/vue.min.js"></script>
    <script type="text/javascript">
        var vm = new Vue({
            el: "#app",
            data: {
                list: [{
                        id: 1,
                        name: '张三',
                        state: 1
                    },
                    {
                        id: 2,
                        name: '李四',
                        state: 1
                    },
                    {
                        id: 3,
                        name: '王五',
                        state: 1
                    },
                    {
                        id: 4,
                        name: '韩梅梅',
                        state: 1
                    },
                    {
                        id: 5,
                        name: '李磊',
                        state: 1
                    },
                ]
            }
        })

        var webSocket = null;
        if ('WebSocket' in window) {
            //创建WebSocket对象
            webSocket = new WebSocket("ws://localhost:18801/webSocket/" + getUUID());

            //连接成功
            webSocket.onopen = function() {
                console.log("已连接");
                webSocket.send("消息发送测试")
            }
            //接收到消息
            webSocket.onmessage = function(msg) {
                //处理消息
                var serverMsg = msg.data;
                var t_id = parseInt(serverMsg)    //服务端发过来的消息，ID，string需转化为int类型才能比较
                for (var i = 0; i < vm.list.length; i++) {
                    var item = vm.list[i];
                    if(item.id == t_id){
                        item.state = -1;
                        vm.list.splice(i,1,item)
                        break;
                    }
                }
            };

            //关闭事件
            webSocket.onclose = function() {
                console.log("websocket已关闭");
            };
            //发生了错误事件
            webSocket.onerror = function() {
                console.log("websocket发生了错误");
            }
        } else {
            alert("很遗憾，您的浏览器不支持WebSocket！")
        }

        function getUUID() {    //获取唯一的UUID
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {

                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
    </script>
</html>
```

## 实现-后端：

项目结构是这样子的，后面的代码关键注释都有，就不重复描述了

![img](https://static.xlc520.ml/blogImage/2519868-20211015032104670-873058355.png)

 1、新建SpringBoot工程，选择web和WebSockt依赖

![img](https://static.xlc520.ml/blogImage/2519868-20211015105941687-95294147.png)

 2、配置application.yml

```yaml
#端口
server:
  port: 18801

#密码，因为接口不需要权限，所以加了个密码做校验
mySocket:
  myPwd: jae_123
```

3、WebSocketConfig配置类

```java
@Configuration
public class WebSocketConfig {

    /**
     * 注入一个ServerEndpointExporter,该Bean会自动注册使用@ServerEndpoint注解申明的websocket endpoint
     */
    @Bean
    public ServerEndpointExporter serverEndpointExporter(){
        return new ServerEndpointExporter();
    }
}
```

4、WebSocketServer类，用来进行服务端和客户端之间的交互

```java
/**
 * @author jae
 * @ServerEndpoint("/webSocket/{uid}") 前端通过此URI与后端建立链接
 */

@ServerEndpoint("/webSocket/{uid}")
@Component
public class WebSocketServer {

    private static Logger log = LoggerFactory.getLogger(WebSocketServer.class);

    //静态变量，用来记录当前在线连接数。应该把它设计成线程安全的。
    private static final AtomicInteger onlineNum = new AtomicInteger(0);

    //concurrent包的线程安全Set，用来存放每个客户端对应的WebSocketServer对象。
    private static CopyOnWriteArraySet<Session> sessionPools = new CopyOnWriteArraySet<Session>();

    /**
     * 有客户端连接成功
     */
    @OnOpen
    public void onOpen(Session session, @PathParam(value = "uid") String uid){
        sessionPools.add(session);
        onlineNum.incrementAndGet();
        log.info(uid + "加入webSocket！当前人数为" + onlineNum);
    }

    /**
     * 连接关闭调用的方法
     */
    @OnClose
    public void onClose(Session session) {
        sessionPools.remove(session);
        int cnt = onlineNum.decrementAndGet();
        log.info("有连接关闭，当前连接数为：{}", cnt);
    }

    /**
     * 发送消息
     */
    public void sendMessage(Session session, String message) throws IOException {
        if(session != null){
            synchronized (session) {
                session.getBasicRemote().sendText(message);
            }
        }
    }

    /**
     * 群发消息
     */
    public void broadCastInfo(String message) throws IOException {
        for (Session session : sessionPools) {
            if(session.isOpen()){
                sendMessage(session, message);
            }
        }
    }

    /**
     * 发生错误
     */
    @OnError
    public void onError(Session session, Throwable throwable){
        log.error("发生错误");
        throwable.printStackTrace();
    }

}
```

5、WebSocketController类，用于进行接口测试

```java
@RestController
@RequestMapping("/open/socket")
public class WebSocketController {

    @Value("${mySocket.myPwd}")
    public String myPwd;

    @Autowired
    private WebSocketServer webSocketServer;

    /**
     * 手机客户端请求接口
     * @param id    发生异常的设备ID
     * @param pwd   密码（实际开发记得加密）
     * @throws IOException
     */
    @PostMapping(value = "/onReceive")
    public void onReceive(String id,String pwd) throws IOException {
        if(pwd.equals(myPwd)){  //密码校验一致（这里举例，实际开发还要有个密码加密的校验的），则进行群发
            webSocketServer.broadCastInfo(id);
        }
    }

}
```

## 测试

1、打开前端页面，进行WebSocket连接

控制台输出，连接成功

![img](https://static.xlc520.ml/blogImage/2519868-20211015113024421-1327852737.png)

 2、因为是模拟数据，所以全部显示正常，没有异常提交时的页面呈现

![img](https://static.xlc520.ml/blogImage/2519868-20211015113143733-1496142658.png)

 3、接下来，我们用接口测试工具Postman提交一个异常

![img](https://static.xlc520.ml/blogImage/2519868-20211015113458808-127776265.png)

 **注意id为3的这个数据的状态变化**

![img](https://static.xlc520.ml/blogImage/2519868-20211015113537561-246899024.png)

我们可以看到，id为3的王五状态已经变成异常的了，实时通讯成功。

参考：https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket