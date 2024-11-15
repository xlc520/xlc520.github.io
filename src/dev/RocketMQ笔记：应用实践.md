---
author: xlc520
title: RocketMQ笔记：应用实践
excerpt: 
description: 
date: 2022-11-26
category: Java
tag: 
- Java
- RocketMQ
- MQ
article: true
timeline: true
icon: java
---

# RocketMQ 笔记：应用实践

### 普通消息

##### 消息发送分类

Producer 对于消息的发送方式也有多种选择，不同的方式会产生不同的系统效果。

###### 同步发送消息

同步发送消息是指，Producer 发出⼀条消息后，会在收到 MQ 返回的 ACK 之后才发下⼀条消息。该方式的消息可靠性最高，但消息发送效率太低。

![RocketMQ](https://bitbucket.org/xlc520/blogasset/raw/main/images3/10329501-193ccbd53ee099bf-1669645258627-2.png)

```csharp
public class SyncProducer {
    public static void main(String[] args) throws Exception {
        DefaultMQProducer producer = new DefaultMQProducer("producer_A");
        // NameServer
        producer.setNamesrvAddr("localhost:9876");
        // 设置当发送失败时重试发送的次数，默认是2次
        producer.setRetryTimesWhenSendFailed(3);
        // 设置发送超时时间，默认3秒
        producer.setSendMsgTimeout(5000);
        // 开启生产者
        producer.start();
        // 模拟发送100条消息
        for (int i = 0; i < 100; i++) {
            byte[] bytes = ("hi " + i).getBytes();
            Message msg = new Message("topic_A", "tag_A", bytes);
            // 为消息指定key
            msg.setKeys("key-" + i);
            // 发送消息
            SendResult sendResult = producer.send(msg);
            System.out.println(sendResult);
        }
        // 关闭生产者
        producer.shutdown();
    }
}
```

```swift
public enum SendStatus {

    /*** 发送成功 */
    SEND_OK,

    /*** 刷盘超时。当Broker设置的刷盘策略为同步刷盘时才可能出现这种异常状态。异步刷盘不会出现 */
    FLUSH_DISK_TIMEOUT,

    /*** Slave同步超时。当Broker集群设置的Master-Slave的复制方式为同步复制时才可能出现这种异常状态。异步复制不会出现 */
    FLUSH_SLAVE_TIMEOUT,

    /*** 没有可用的Slave。当Broker集群设置为Master-Slave的复制方式为同步复制时才可能出现这种异常状态。异步复制不会出现 */
    SLAVE_NOT_AVAILABLE;
}
```

```csharp
public class Consumer {
    public static void main(String[] args) throws Exception {
        // 定义一个push消费者
        DefaultMQPushConsumer consumer = new DefaultMQPushConsumer();
        // NameServer
        consumer.setNamesrvAddr("localhost:9876");
        // 指定从第一条消息开始消费
        consumer.setConsumeFromWhere(ConsumeFromWhere.CONSUME_FROM_FIRST_OFFSET);
        // 指定消费topic与tag
        consumer.subscribe("topic_A", "*");
        // 指定采用广播模式进行消费，默认为集群模式
        consumer.setMessageModel(MessageModel.BROADCASTING);
        // 注册消息监听器
        consumer.registerMessageListener(new MessageListenerConcurrently() {
            // 一旦broker中有了其订阅的消息就会触发该方法的执行，其返回值为当前consumer消费的状态
            @Override
            public ConsumeConcurrentlyStatus consumeMessage(List<MessageExt> list, 
ConsumeConcurrentlyContext context) {
                for (MessageExt msg : list) {
                    System.out.println(msg);
                }
                return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;
            }
        });
        // 开启消费者消费
        consumer.start();
        System.out.println("Consumer Started");
    }
}
```

###### 异步发送消息

异步发送消息是指，Producer 发出消息后无需等待 MQ 返回 ACK，直接发送下⼀条消息。该方式的消息可靠性可以得到保障，消息发送效率也可以。

![RocketMQ](https://bitbucket.org/xlc520/blogasset/raw/main/images3/10329501-b47737f367b084f3.png)

```java
public class AsyncProducer {
    public static void main(String[] args) throws Exception {
        DefaultMQProducer producer = new DefaultMQProducer("producer_A");
        // NameServer
        producer.setNamesrvAddr("localhost:9876");
        // 指定异步发送失败后不进行重试发送
        producer.setRetryTimesWhenSendAsyncFailed(0);
        // 指定新创建的Topic的Queue数量为2，默认为4
        producer.setDefaultTopicQueueNums(2);
        // 开启生产者
        producer.start();
        // 模拟发送100条消息
        for (int i = 0; i < 100; i++) {
            byte[] bytes = ("hi " + i).getBytes();
            try {
                Message msg = new Message("topic_A", "tag_A", bytes);
                // 异步发送，指定回调
                producer.send(msg, new SendCallback() {
                    @Override
                    public void onSuccess(SendResult sendResult) {
                        System.out.println(sendResult);
                    }

                    @Override
                    public void onException(Throwable throwable) {
                        throwable.printStackTrace();
                    }
                });
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        // 异步发送，如果不执行sleep，则消息在发送之前，producer已经关闭，就会报错
        TimeUnit.SECONDS.sleep(3);
        // 关闭生产者
        producer.shutdown();
    }
}
```

###### 单向发送消息

单向发送消息是指，Producer 仅负责发送消息，不等待、不处理 MQ 的 ACK。该发送方式时 MQ 也不返回 ACK。该方式的消息发送效率最高，但消息可靠性较差。

![RocketMQ](https://bitbucket.org/xlc520/blogasset/raw/main/images3/10329501-5600c1fecc8aae68.png)

```java
public class OneWayProducer {
    public static void main(String[] args) throws Exception {
        DefaultMQProducer producer = new DefaultMQProducer("producer_A");
        // NameServer
        producer.setNamesrvAddr("localhost:9876");
        // 开启生产者
        producer.start();
        for (int i = 0; i < 100; i++) {
            byte[] bytes = ("hi " + i).getBytes();
            Message msg = new Message("topic_A", "tag_A", bytes);
            // 单向发送
            producer.sendOneway(msg);
        }
        // 关闭生产者
        producer.shutdown();
    }
}
```

### 顺序消息

##### 什么是顺序消息

顺序消息指的是，严格按照消息的发送顺序进行消费的消息(FIFO)。默认情况下生产者会把消息以 Round
Robin 轮询方式发送到不同的 Queue 分区队列；而消费消息时会从多个 Queue 上拉取消息，这种情况下的发送和消费是不能保证顺序的。如果将消息仅发送到同一个
Queue 中，消费时也只从这个 Queue 上拉取消息，就严格保证了消息的顺序性。

##### 为什么需要顺序消息

例如，现在有 TOPIC
ORDER_STATUS（订单状态），其下有 4 个 Queue 队列，该 Topic
中的不同消息用于描述当前订单的不同状态。假设订单有状态：未支付、已支付、发货中、发货成功、发货失败。根据以上订单状态，生产者从时序上可以生成如下几个消息：
订单 T0000001:未支付
订单 T0000001:已支付
订单 T0000001:发货中
订单 T0000001:发货失败
消息发送到 MQ 中之后，Queue 的选择如果采用轮询策略，消息在 MQ 的存储可能如下

![RocketMQ](https://bitbucket.org/xlc520/blogasset/raw/main/images3/10329501-fe253c94e9b882d5.png)

![RocketMQ](https://bitbucket.org/xlc520/blogasset/raw/main/images3/10329501-bace363ccb1c9a69.png)

这种情况下，希望 Consumer 消费消息的顺序和发送是一致的，然而上述 MQ 的投递和消费方式，无法保证顺序是正确的。对于顺序异常的消息，Consumer
即使设置有一定的状态容错，也不能完全处理好这么多种随机出现组合情况。

![RocketMQ](https://bitbucket.org/xlc520/blogasset/raw/main/images3/10329501-534df51cfc8537e5.png)

基于上述的情况，可以设计如下方案：对于相同订单号的消息，通过一定的策略，将其放置在一个 Queue 中，然后消费者再采用一定的策略（例如，一个线程独立处理一个
queue，保证处理消息的顺序性），能够保证消费的顺序性。

##### 有序性分类

根据有序范围的不同，RocketMQ 可以严格地保证两种消息的有序性：分区有序与全局有序。

###### 全局有序

![RocketMQ](https://bitbucket.org/xlc520/blogasset/raw/main/images3/10329501-151df36b6ec59c60.png)

当发送和消费参与的 Queue 只有一个时所保证的有序是整个 Topic 中消息的顺序， 称为全局有序。

在创建 Topic 时指定 Queue 的数量。有三种指定方式
1、在代码中创建 Producer 时，可以指定其自动创建的 Topic 的 Queue 数量。
2、在 RocketMQ 可视化控制台中手动创建 Topic 时指定 Queue 数量。
3、使用 mqadmin 命令手动创建 Topic 时指定 Queue 数量。

###### 分区有序

![RocketMQ](https://bitbucket.org/xlc520/blogasset/raw/main/images3/10329501-d738ba97a3eeed92.png)

如果有多个 Queue 参与，其仅可保证在该 Queue 分区队列上的消息顺序，则称为分区有序。

如何实现 Queue 的选择？在定义 Producer 时可以指定消息队列选择器，而这个选择器是实现了 MessageQueueSelector
接口定义的。在定义选择器的选择算法时，一般需要使用选择 key。这个选择 key 可以是消息 key 也可以是其它数据。但无论谁做选择
key，都不能重复，都是唯一的。

一般性的选择算法是，让选择 key（或其 hash 值）与该 Topic 所包含的 Queue 的数量取模，其结果即为选择出的 Queue 的 QueueId。

取模算法存在一个问题：不同选择 key 与 Queue 数量取模结果可能会是相同的，即不同选择 key 的消息可能会出现在相同的 Queue，即同一个
Consuemr 可能会消费到不同选择 key 的消息。这个问题如何解决？一般性的作法是，从消息中获取到选择 key，对其进行判断。若是当前
Consumer 需要消费的消息，则直接消费，否则，什么也不做。这种做法要求选择 key 要能够随着消息一起被 Consumer 获取到。此时使用消息
key 作为选择 key 是比较好的做法。

以上做法会不会出现如下新的问题呢？不属于那个 Consumer 的消息被拉取走了，那么应该消费
该消息的 Consumer 是否还能再消费该消息呢？同一个 Queue 中的消息不可能被同一个 Group 中的不同 Consumer 同时消费。所以，消费同一个
Queue 的不同选择 key 的消息的 Consumer 一定属于不同的 Group。而不同的 Group 中的 Consumer 间的消费是相互隔离的，互不影响的。

```csharp
public class OrderedProducer {
    public static void main(String[] args) throws Exception {
        DefaultMQProducer producer = new DefaultMQProducer("producer_A");
        // NameServer
        producer.setNamesrvAddr("localhost:9876");
        // 开启生产者
        producer.start();
        for (int i = 0; i < 100; i++) {
            Integer orderId = i;
            byte[] bytes = ("hi " + i).getBytes();
            Message msg = new Message("topic_A", "tag_A", bytes);
            SendResult sendResult = producer.send(msg, new MessageQueueSelector() {
                @Override
                public MessageQueue select(List<MessageQueue> list, Message msg, Object arg) {
                    Integer id = (Integer) arg;
                    int index = id % list.size();
                    return list.get(index);
                }
            }, orderId);
            System.out.println(sendResult);
        }
        // 关闭生产者
        producer.shutdown();
    }
}
```

### 延时消息

##### 什么是延时消息

当消息写入到 Broker 后，在指定的时长后才可被消费处理的消息，称为延时消息。

采用 RocketMQ 的延时消息可以实现定时任务的功能，而无需使用定时器。典型的应用场景是，电商交易中超时未支付关闭订单的场景，12306
平台订票超时未支付取消订票的场景。

在电商平台中，订单创建时会发送一条延迟消息。这条消息将会在 30
分钟后投递给后台业务系统（Consumer），后台业务系统收到该消息后会判断对应的订单是否已经完成支付。如果未完成，则取消订单，将商品再次放回到库存；如果完成支付，则忽略。

在 12306 平台中，车票预订成功后就会发送一条延迟消息。这条消息将会在 45
分钟后投递给后台业务系统（Consumer），后台业务系统收到该消息后会判断对应的订单是否已经完成支付。如果未完成，则取消预订，将车票再次放回到票池；如果完成支付，则忽略。

##### 延时等级

延时消息的延迟时长不支持随意时长的延迟，是通过特定的延迟等级来指定的。延时等级定义在 RocketMQ 服务端的 MessageStoreConfig
类中的如下变量中

![RocketMQ](https://bitbucket.org/xlc520/blogasset/raw/main/images3/10329501-7ca807e4cef7d5a6.png)

即，若指定的延时等级为 3，则表示延迟时长为 10s，即延迟等级是从 1 开始计数的。

当然，如果需要自定义的延时等级，可以通过在 broker 加载的配置中新增如下配置（例如下面增加了 1 天这个等级 1d）。配置文件在
RocketMQ 安装目录下的 conf 目录中。

```text
messageDelayLevel = 1s 5s 10s 30s 1m 2m 3m 4m 5m 6m 7m 8m 9m 10m 20m 30m 1h 2h 1d
```

##### 延时消息实现原理

![RocketMQ](https://bitbucket.org/xlc520/blogasset/raw/main/images3/10329501-1faf5eaa2d6ad221.png)

具体实现方案是

###### 修改消息

![RocketMQ](https://upload-images.jianshu.io/upload_images/10329501-3095450578b238c6.png?imageMogr2/auto-orient/strip|imageView2/2/w/364/format/webp)

Producer 将消息发送到 Broker 后，Broker 会首先将消息写入到 commitlog 文件，然后需要将其分发到相应的
consumequeue。不过，在分发之前，系统会先判断消息中是否带有延时等级。若没有，则直接正常分发；若有则需要经历一个复杂的过程

- 修改消息的 Topic 为 SCHEDULE_TOPIC_XXXX
- 根据延时等级，在 consumequeue 目录中 SCHEDULE_TOPIC_XXXX 主题下创建出相应的 queueId 目录与 consumequeue
  文件（如果没有这些目录与文件的话）

延迟等级 delayLevel 与 queueId 的对应关系为 queueId = delayLevel -1。需要注意，在创建 queueId
目录时，并不是一次性地将所有延迟等级对应的目录全部创建完毕，
而是用到哪个延迟等级创建哪个目录。

![RocketMQ](https://bitbucket.org/xlc520/blogasset/raw/main/images3/10329501-51fe73a842bc6397.png)

- 修改消息索引单元内容。索引单元中的 Message Tag
  HashCode 部分原本存放的是消息的 Tag 的 Hash 值。现修改为消息的投递时间。投递时间是指该消息被重新修改为原 Topic 后再次被写入到
  commitlog 中的时间。投递时间 =
  消息存储时间 + 延时等级时间。消息存储时间指的是消息被发送到 Broker 时的时间戳。
- 将消息索引写入到 SCHEDULE_TOPIC_XXXX 主题下相应的 consumequeue 中。

SCHEDULE_TOPIC_XXXX 目录中各个延时等级 Queue 中的消息是如何排序的？是按照消息投递时间排序的。一个 Broker 中同一等级的所有延时消息会被写入到
consumequeue 目录中 SCHEDULE_TOPIC_XXXX 目录下相同 Queue 中。即一个 Queue 中消息投递时间的延迟等级时间是相同的。那么投递时间就取决于于消息存储时间了。即按照消息被发送到
Broker 的时间进行排序的。

###### 投递延时消息

Broker 内部有⼀个延迟消息服务类 ScheuleMessageService，其会消费 SCHEDULE_TOPIC_XXXX 中的消息，即按照每条消息的投递时间，将延时消息投递到⽬标
Topic 中。不过，在投递之前会从 commitlog 中将原来写入的消息再次读出，并将其原来的延时等级设置为
0，即原消息变为了一条不延迟的普通消息。然后再次将消息投递到目标 Topic 中。

ScheuleMessageService 在 Broker 启动时，会创建并启动一个定时器 TImer，用于执行相应的定时任务。系统会根据延时等级的个数，定义相应数量的
TimerTask，每个 TimerTask 负责一个延迟等级消息的消费与投递。每个 TimerTask 都会检测相应 Queue 队列的第一条消息是否到期。若第
一条消息未到期，则后面的所有消息更不会到期（消息是按照投递时间排序的）；若第一条消 息到期了，则将该消息投递到目标
Topic，即消费该消息。

###### 将消息重新写入 commitlog

延迟消息服务类 ScheuleMessageService 将延迟消息再次发送给了 commitlog，并再次形成新的消息索引条目，分发到相应 Queue。

这其实就是一次普通消息发送。只不过这次的消息 Producer 是延迟消息服务类 ScheuleMessageService。

```csharp
public class DelayProducer {
    public static void main(String[] args) throws Exception {
        DefaultMQProducer producer = new DefaultMQProducer("producer_A");
        producer.setNamesrvAddr("localhost:9876");
        producer.start();

        for (int i = 0; i < 100; i++) {
            byte[] bytes = ("hi " + i).getBytes();
            Message msg = new Message("topic_A", "tag_A", bytes);
            // 执行消息的延迟等级为3级，即延迟10秒
            msg.setDelayTimeLevel(3);
            SendResult sendResult = producer.send(msg);
            // 输出消息被发送的时间
            System.out.println(new SimpleDateFormat("mm:ss").format(new Date()));
            System.out.println(" , " + sendResult);
        }
        producer.shutdown();
    }
}
```

```csharp
public class OtherConsumer {
    public static void main(String[] args) throws Exception {
        DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("consumer_A");
        consumer.setNamesrvAddr("localhost:9876");

        consumer.setConsumeFromWhere(ConsumeFromWhere.CONSUME_FROM_FIRST_OFFSET);
        consumer.subscribe("topic_A", "*");
        consumer.registerMessageListener(new MessageListenerConcurrently() {
            @Override
            public ConsumeConcurrentlyStatus consumeMessage(List<MessageExt> list, ConsumeConcurrentlyContext context) {
                for (MessageExt msg : list) {
                    System.out.println(new SimpleDateFormat("mm:ss").format(new Date()));
                    System.out.println(" , " + msg);
                }
                return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;
            }
        });
        consumer.start();
        System.out.println("Consumer Started");
    }
}
```

### 事务消息

##### 问题引入

这里的一个需求场景是：工行用户 A 向建行用户 B 转账 1 万元。

![RocketMQ](https://bitbucket.org/xlc520/blogasset/raw/main/images3/10329501-6b96b7f354ae742e.png)

1、工行系统发送一个给 B 增款 1 万元的同步消息 M 给 Broker。
2、消息被 Broker 成功接收后，向工行系统发送成功 ACK。
3、工行系统收到成功 ACK 后从用户 A 中扣款 1 万元。
4、建行系统从 Broker 中获取到消息 M。
5、建行系统消费消息 M，即向用户 B 中增加 1 万元。
这其中是有问题的：若第 3 步中的扣款操作失败，但消息已经成功发送到了 Broker。对于 MQ 来说，只要消息写入成功，那么这个消息就可以被消费。此时建行系统中用户
B 增加了 1 万元。出现了数据不一致问题。

##### 解决思路

解决思路是，让第 1、2、3 步具有原子性，要么全部成功，要么全部失败。即消息发送成功后，必须要保证扣款成功。如果扣款失败，则回滚发送成功的消息。而该思路即使用事务消息。这里要使用分布式事务解决方案。

![RocketMQ](https://bitbucket.org/xlc520/blogasset/raw/main/images3/10329501-6209bbbff652d387.png)

使用事务消息来处理该需求场景
1、事务管理器 TM 向事务协调器 TC 发起指令，开启全局事务。
2、工行系统发一个给 B 增款 1 万元的事务消息 M 给 TC。
3、TC 会向 Broker 发送半事务消息 prepareHalf，将消息 M 预提交到 Broker。此时的建行系统是看不到 Broker 中的消息 M 的。
4、Broker 会将预提交执行结果 Report 给 TC。
5、如果预提交失败，则 TC 会向 TM 上报预提交失败的响应，全局事务结束；如果预提交成功，TC 会调用工行系统的回调操作，去完成工行用户
A 的预扣款 1 万元的操作。
6、工行系统会向 TC 发送预扣款执行结果，即本地事务的执行状态。
7、TC 收到预扣款执行结果后，会将结果上报给 TM。
8、TM 会根据上报结果向 TC 发出不同的确认指令。

- 若预扣款成功（本地事务状态为 COMMIT_MESSAGE），则 TM 向 TC 发送 Global Commit 指令。
- 若预扣款失败（本地事务状态为 ROLLBACK_MESSAGE），则 TM 向 TC 发送 Global Rollback 指令。
- 若现未知状态（本地事务状态为 UNKNOW），则会触发工行系统的本地事务状态回查操作。回查操作会将回查结果，即 COMMIT_MESSAGE 或
  ROLLBACK_MESSAGE
  Report 给 TC。TC 将结果上报给 TM，TM 会再向 TC 发送最终确认指令 Global Commit 或 Global Rollback。

9、TC 在接收到指令后会向 Broker 与工行系统发出确认指令。

- TC 接收的若是 Global Commit 指令，则向 Broker 与工行系统发送 Branch Commit 指令。此时 Broker 中的消息 M
  才可被建行系统看到；此时的工行用户 A 中的扣款操作才真正被确认。
- TC 接收到的若是 Global Rollback 指令，则向 Broker 与工行系统发送 Branch Rollback 指令。此时 Broker 中的消息 M 将被撤销；工行用户
  A 中的扣款操作将被回滚。

以上方案就是为了确保消息投递与扣款操作能够在一个事务中，要成功都成功，有一个失败，则全部回滚。以上方案并不是一个典型的 XA
模式。因为 XA 模式中的分支事务是异步的，而事务消息方案中的
消息预提交与预扣款操作间是同步的。

##### 基础

###### 分布式事务

对于分布式事务，通俗地说就是，一次操作由若干分支操作组成，这些分支操作分属不同应用，分布在不同服务器上。分布式事务需要保证这些分支操作要么全部成功，要么全部失败。分布式事务与普通事务一样，就是为了保证操作结果的一致性。

###### 事务消息

RocketMQ 提供了类似 X/Open XA 的分布式事务功能，通过事务消息能达到分布式事务的最终一致。XA 是一种分布式事务解决方案，一种分布式事务处理模式。

###### 半事务消息

暂不能投递的消息，发送方已经成功地将消息发送到了 Broker，但是 Broker
未收到最终确认指令，此时该消息被标记成“暂不能投递”状态，即不能被消费者看到。处于该种状态下的消息即半事务消息。

###### 本地事务状态

Producer 回调操作执行的结果为本地事务状态，其会发送给 TC，而 TC 会再发送给 TM。TM 会根据 TC 发送来的本地事务状态来决定全局事务确认指令。

```swift
// 描述本地事务执行状态
public enum LocalTransactionState {
    // 本地事务执行成功
    COMMIT_MESSAGE,
    // 本地事务执行失败
    ROLLBACK_MESSAGE, 
    // 不确定，表示需要进行回查以确定本地事务的执行结果 
    UNKNOW, 
}
```

###### 消息回查

![RocketMQ](https://bitbucket.org/xlc520/blogasset/raw/main/images3/10329501-1f4ca72e56175484.png)

消息回查，即重新查询本地事务的执行状态。本例就是重新到 DB 中查看预扣款操作是否执行成功。

注意，消息回查不是重新执行回调操作。回调操作是进行预扣款操作，而消息回查则是查看预 扣款操作执行的结果。

引发消息回查的原因最常见的有两个

- 回调操作返回 UNKNWON
- TC 没有接收到 TM 的最终全局事务确认指令

###### RocketMQ 中的消息回查设置

关于消息回查，有三个常见的属性设置。它们都在 broker 加载的配置文件中设置，例如

- transactionTimeout=20，指定 TM 在 20 秒内应将最终确认状态发送给 TC，否则引发消息回查。默认为 60 秒。
- transactionCheckMax=5，指定最多回查 5 次，超过后将丢弃消息并记录错误日志。默认 15 次。
- transactionCheckInterval=10，指定设置的多次消息回查的时间间隔为 10 秒。默认为 60 秒。

##### XA 模式三剑客

###### XA 协议

XA（Unix Transaction）是一种分布式事务解决方案，一种分布式事务处理模式，是基于 XA 协议的。XA 协议由 Tuxedo（Transaction for
Unix
has been Extended for Distributed Operation，分布式操作扩展之后的 Unix 事务系统）首先提出的，并交给 X/Open
组织，作为资源管理器与事务管理器的接口标准。

XA 模式中有三个重要组件：TC、TM、RM。

###### TC

Transaction Coordinator，事务协调者。维护全局和分支事务的状态，驱动全局事务提交或回滚。

RocketMQ 中 Broker 充当着 TC。

###### TM

Transaction Manager，事务管理器。定义全局事务的范围：开始全局事务、提交或回滚全局事务。它实际是全局事务的发起者。

RocketMQ 中事务消息的 Producer 充当着 TM。

###### RM

Resource Manager，资源管理器。管理分支事务处理的资源，与 TC 交谈以注册分支事务和报告分支事务的状态，并驱动分支事务提交或回滚。

RocketMQ 中事务消息的 Producer 及 Broker 均是 RM。

##### XA 模式架构

![RocketMQ](https://bitbucket.org/xlc520/blogasset/raw/main/images3/10329501-10a6bc91bce7eadb.png)

XA 模式是一个典型的 2PC，其执行原理如下
1、TM 向 TC 发起指令，开启一个全局事务。
2、根据业务要求，各个 RM 会逐个向 TC 注册分支事务，然后 TC 会逐个向 RM 发出预执行指令。
3、各个 RM 在接收到指令后会在进行本地事务预执行。
4、RM 将预执行结果 Report 给 TC。当然，这个结果可能是成功，也可能是失败。
5、TC 在接收到各个 RM 的 Report 后会将汇总结果上报给 TM，根据汇总结果 TM 会向 TC 发出确认指令。

- 若所有结果都是成功响应，则向 TC 发送 Global Commit 指令。
- 只要有结果是失败响应，则向 TC 发送 Global Rollback 指令。

6、TC 在接收到指令后再次向 RM 发送确认指令。

事务消息方案并不是一个典型的 XA 模式。因为 XA 模式中的分支事务是异步的，而事务消息方案 中的消息预提交与预扣款操作间是同步的。

##### 注意

- 事务消息不支持延时消息
- 对于事务消息要做好幂等性检查，因为事务消息可能不止一次被消费（因为存在回滚后再提交的情况）

```kotlin
public class ICBCTransactionListener implements TransactionListener {

    // 回调操作方法
    // 消息预提交成功就会触发该方法的执行，用于完成本地事务
    @Override
    public LocalTransactionState executeLocalTransaction(Message msg, Object arg) {
        System.out.println("预提交消息成功：" + msg);
        // 假设接收到TAGA的消息就表示扣款操作成功，TAGB的消息表示扣款失败，TAGC表示扣款结果不清楚，需要执行消息回查
        if (StringUtils.equals("TAGA", msg.getTags())) {
            return LocalTransactionState.COMMIT_MESSAGE;
        } else if (StringUtils.equals("TAGB", msg.getTags())) {
            return LocalTransactionState.ROLLBACK_MESSAGE;
        } else if (StringUtils.equals("TAGC", msg.getTags())) {
            return LocalTransactionState.UNKNOW;
        }
        return LocalTransactionState.UNKNOW;
    }

    // 消息回查方法
    // 引发消息回查的原因最常见的有两个：1)回调操作返回UNKNWON，2)TC没有接收到TM的最终全局事务确认指令
    @Override
    public LocalTransactionState checkLocalTransaction(MessageExt msg) {
        System.out.println("执行消息回查" + msg.getTags());
        return LocalTransactionState.COMMIT_MESSAGE;
    }
}
```

```csharp
public class TransactionProducer {
    public static void main(String[] args) throws Exception {
        TransactionMQProducer producer = new TransactionMQProducer("producer_A");
        producer.setNamesrvAddr("localhost:9876");

        /*
         * 定义一个线程池
         * corePoolSize：线程池中核心线程数量
         * maximumPoolSize：线程池中最多线程数
         * keepAliveTime：当线程池中线程数量大于核心线程数量时，多余空闲线程的存活时长
         * unit：时间单位
         * workQueue：临时存放任务的队列，其参数就是队列的长度
         * threadFactory：线程工厂
         */
        ThreadPoolExecutor threadPoolExecutor = new ThreadPoolExecutor(2, 5, 100, TimeUnit.SECONDS, new ArrayBlockingQueue<>(2000), r -> {
            Thread thread = new Thread(r);
            thread.setName("client-transaction-msg-check-thread");
            return thread;
        });
        // 为生产者制定一个线程池
        producer.setExecutorService(threadPoolExecutor);
        // 为生产者添加事务监听器
        producer.setTransactionListener(new ICBCTransactionListener());
        producer.start();

        String[] tags = {"tag_A", "tag_B", "tag_C"};
        for (int i = 0; i < 3; i++) {
            byte[] bytes = ("Hi " + i).getBytes();
            Message msg = new Message("transaction_topic", tags[i], bytes);
            // 发送事务消息
            // 第二个参数用于指定在执行本地事务时要使用的业务参数
            TransactionSendResult transactionSendResult = producer.sendMessageInTransaction(msg, null);
            System.out.println("发送结果为：" + transactionSendResult.getSendStatus());
        }
    }
}
```

### 批量消息

##### 批量发送消息

###### 发送限制

生产者进行消息发送时可以一次发送多条消息，这可以大大提升 Producer 的发送效率。不过需要注意以下几点

- 批量发送的消息必须具有相同的 Topic
- 批量发送的消息必须具有相同的刷盘策略
- 批量发送的消息不能是延时消息与事务消息

###### 批量发送大小

默认情况下，一批发送的消息总大小不能超过 4MB 字节。如果想超出该值，有两种解决方案

- 方案一：将批量消息进行拆分，拆分为若干不大于 4M 的消息集合分多次批量发送。
- 方案二：在 Producer 端与 Broker 端修改属性。
  Producer 端需要在发送之前设置 Producer 的 maxMessageSize 属性
  Broker 端需要修改其加载的配置文件中的 maxMessageSize 属性

###### 生产者发送的消息大小

![RocketMQ](https://bitbucket.org/xlc520/blogasset/raw/main/images3/10329501-a8b004aff7cb0c9c.png)

生产者通过 send()
方法发送的 Message，并不是直接将 Message 序列化后发送到网络上的，而是通过这个 Message 生成了一个字符串发送出去的。这个字符串由四部分构成：Topic、消息
Body、消息日志（占 20 字节），及用于描述消息的一堆属性 key-value。这些属性中包含例如生产者地址、生产时间、要发送的 QueueId
等。最终写入到 Broker 中消息单元中的数据都是来自于这些属性。

##### 批量消费消息

###### 修改批量属性

![RocketMQ](https://bitbucket.org/xlc520/blogasset/raw/main/images3/10329501-4697ce78abbab6b5.png)

Consumer 的 MessageListenerConcurrently 监听接口的 consumeMessage()
方法的第一个参数为消息列表，但默认情况下每次只能消费一条消息。若要使其一次可以消费多条消息，则可以通过修改 Consumer 的
consumeMessageBatchMaxSize 属性来指定。不过，该值不能超过 32。因为默认情况下消费者每次可以拉取的消息最多是 32
条。若要修改一次拉取的最大值，则可通过修改 Consumer 的
pullBatchSize 属性来指定。

###### 存在的问题

Consumer 的 pullBatchSize 属性与 consumeMessageBatchMaxSize 属性是否设置的越大越好？当然不是。

- pullBatchSize 值设置的越大，Consumer 每拉取一次需要的时间就会越长，且在网络上传输出现问题的可能性就越高。若在拉取过程中若出现了问题，那么本批次所有消息都需要全部重新拉取。

consumeMessageBatchMaxSize 值设置的越大，Consumer 的消息并发消费能力越低，且这批被消费的消息具有相同的消费结果。因为
consumeMessageBatchMaxSize 指定的一批消息只会使用一个线程进行处理，且在处理过程中只要有一个消息处理异常，则这批消息需要全部重新再次消费处理。

```dart
public class MessageListSplitter implements Iterator<List<Message>> {
    // 消息列表分割器：其只会处理每条消息的大小不超4M的情况
    // 若存在某条消息，其本身大小大于4M，这个分割器无法处理，其直接将这条消息构成一个子列表返回。并没有再进行分割
    // 指定极限值为4M
    private final int SIZE_LIMIT = 4 * 1024 * 1024;
    // 存放所有要发送的消息
    private final List<Message> messages;
    // 要进行批量发送消息的小集合起始索引
    private int currIndex;

    public MessageListSplitter(List<Message> messages) {
        this.messages = messages;
    }

    @Override
    public boolean hasNext() {
        // 判断当前开始遍历的消息索引要小于消息总数
        return currIndex < messages.size();
    }

    @Override
    public List<Message> next() {
        int nextIndex = currIndex;
        // 记录当前要发送的这一小批次消息列表的大小
        int totalSize = 0;
        for (; nextIndex < messages.size(); nextIndex++) {
            // 获取当前遍历的消息
            Message message = messages.get(nextIndex);
            // 统计当前遍历的message的大小
            int tmpSize = message.getTopic().length() + message.getBody().length;
            Map<String, String> properties = message.getProperties();
            for (Map.Entry<String, String> entry : properties.entrySet()) {
                tmpSize += entry.getKey().length() + entry.getValue().length();
            }
            tmpSize = tmpSize + 20;
            // 判断当前消息本身是否大于4M
            if (tmpSize > SIZE_LIMIT) {
                if (nextIndex - currIndex == 0) {
                    nextIndex++;
                }
                break;
            }
            if (tmpSize + totalSize > SIZE_LIMIT) {
                break;
            } else {
                totalSize += tmpSize;
            }
        }
        // 获取当前messages列表的子集合[currIndex, nextIndex)
        List<Message> subList = messages.subList(currIndex, nextIndex);
        // 下次遍历的开始索引
        currIndex = nextIndex;
        return subList;
    }
}
```

```csharp
public class BatchProducer {
    public static void main(String[] args) throws Exception {
        DefaultMQProducer producer = new DefaultMQProducer("producer_A");
        producer.setNamesrvAddr("rocketmqOS:9876");
        // 指定要发送的消息的最大大小，默认是4M，不过，仅修改该属性是不行的，还需要同时修改broker加载的配置文件中的
        // maxMessageSize属性
        // producer.setMaxMessageSize(8 * 1024 * 1024);
        producer.start();
        // 定义要发送的消息集合
        List<Message> messages = new ArrayList<>();
        for (int i = 0; i < 100; i++) {
            byte[] body = ("Hi," + i).getBytes();
            Message msg = new Message("someTopic", "someTag", body);
            messages.add(msg);
        }
        // 定义消息列表分割器，将消息列表分割为多个不超出4M大小的小列表
        MessageListSplitter splitter = new MessageListSplitter(messages);
        while (splitter.hasNext()) {
            try {
                List<Message> listItem = splitter.next();
                producer.send(listItem);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        producer.shutdown();
    }
}
```

```csharp
public class BatchConsumer {
    public static void main(String[] args) throws MQClientException {
        DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("consumer_A");
        consumer.setNamesrvAddr("localhost:9876");

        consumer.setConsumeFromWhere(ConsumeFromWhere.CONSUME_FROM_FIRST_OFFSET);
        consumer.subscribe("someTopicA", "*");
        // 指定每次可以消费10条消息，默认为1
        consumer.setConsumeMessageBatchMaxSize(10);
        // 指定每次可以从Broker拉取40条消息，默认为32
        consumer.setPullBatchSize(40);
        consumer.registerMessageListener(new MessageListenerConcurrently() {
            @Override
            public ConsumeConcurrentlyStatus consumeMessage(List<MessageExt> msgs, ConsumeConcurrentlyContext context) {
                for (MessageExt msg : msgs) {
                    System.out.println(msg);
                }
                // 消费成功的返回结果
                return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;
                // 消费异常时的返回结果
                // return ConsumeConcurrentlyStatus.RECONSUME_LATER;
            }
        });
        consumer.start();
        System.out.println("Consumer Started");
    }
}
```

### 消息过滤

消息者在进行消息订阅时，除了可以指定要订阅消息的 Topic 外，还可以对指定 Topic 中的消息根据指定条件进行过滤，即可以订阅比
Topic 更加细粒度的消息类型。

对于指定 Topic 消息的过滤有两种过滤方式：Tag 过滤与 SQL 过滤。

##### Tag 过滤

通过 consumer 的 subscribe()方法指定要订阅消息的 Tag。如果订阅多个 Tag 的消息，Tag 间使用或运算符(双竖线||)连接。

##### SQL 过滤

SQL 过滤是一种通过特定表达式对事先埋入到消息中的用户属性进行筛选过滤的方式。通过 SQL 过滤，可以实现对消息的复杂过滤。不过，只有使用
PUSH 模式的消费者才能使用 SQL 过滤。

SQL 过滤表达式中支持多种常量类型与运算符。

支持的常量类型

- 数值：比如：123，3.1415
- 字符：必须用单引号包裹起来，比如：'abc'
- 布尔：TRUE 或 FALSE
- NULL：特殊的常量，表示空

支持的运算符有

- 数值比较：>，>=，<，<=，BETWEEN，=
- 字符比较：=，<>，IN
- 逻辑运算 ：AND，OR，NOT
- NULL 判断：IS NULL 或者 IS NOT NULL

默认情况下 Broker 没有开启消息的 SQL 过滤功能，需要在 Broker 加载的配置文件中添加如下属性，以开启该功能：

```bash
enablePropertyFilter = true
```

在启动 Broker 时需要指定这个修改过的配置文件。例如对于单机 Broker 的启动，其修改的配置文件是 conf/broker.conf，启动时使用如下命令：

```swift
sh bin/mqbroker -n localhost:9876 -c conf/broker.conf &
```

```csharp
public class FilterByTagProducer {
    public static void main(String[] args) throws Exception {
        DefaultMQProducer producer = new DefaultMQProducer("producer_A");
        producer.setNamesrvAddr("localhost:9876");
        producer.start();
        String[] tags = {"tag_A", "tag_B", "tag_C"};
        for (int i = 0; i < 10; i++) {
            byte[] body = ("Hi," + i).getBytes();
            String tag = tags[i % tags.length];
            Message msg = new Message("myTopic", tag, body);
            SendResult sendResult = producer.send(msg);
            System.out.println(sendResult);
        }
        producer.shutdown();
    }
}
```

```csharp
public class FilterByTagConsumer {
    public static void main(String[] args) throws Exception {
        DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("pconsumer_A");
        consumer.setNamesrvAddr("localhost:9876");
        consumer.setConsumeFromWhere(ConsumeFromWhere.CONSUME_FROM_FIRST_OFFSET);
        consumer.subscribe("myTopic", "tag_A || tag_B");
        consumer.registerMessageListener(new MessageListenerConcurrently() {
            @Override
            public ConsumeConcurrentlyStatus consumeMessage(List<MessageExt> msgs, ConsumeConcurrentlyContext context) {
                for (MessageExt me : msgs) {
                    System.out.println(me);
                }
                return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;
            }
        });
        consumer.start();
        System.out.println("Consumer Started");
    }
}
```

```csharp
public class FilterBySQLProducer {
    public static void main(String[] args) throws Exception {
        DefaultMQProducer producer = new DefaultMQProducer("producer_A");
        producer.setNamesrvAddr("localhost:9876");
        producer.start();
        for (int i = 0; i < 10; i++) {
            try {
                byte[] body = ("Hi," + i).getBytes();
                Message msg = new Message("myTopic", "myTag", body);
                msg.putUserProperty("age", i + "");
                SendResult sendResult = producer.send(msg);
                System.out.println(sendResult);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
        producer.shutdown();
    }
}
```

```csharp
public class FilterBySQLConsumer {
    public static void main(String[] args) throws Exception {
        DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("consumer_A");
        consumer.setNamesrvAddr("localhost:9876");
        consumer.setConsumeFromWhere(ConsumeFromWhere.CONSUME_FROM_FIRST_OFFSET);
        consumer.subscribe("myTopic", MessageSelector.bySql("age between 0 and 6"));
        consumer.registerMessageListener(new MessageListenerConcurrently() {
            @Override
            public ConsumeConcurrentlyStatus consumeMessage(List<MessageExt> msgs, ConsumeConcurrentlyContext context) {
                for (MessageExt me : msgs) {
                    System.out.println(me);
                }
                return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;
            }
        });
        consumer.start();
        System.out.println("Consumer Started");
    }
}
```

### 消息发送重试机制

Producer 对发送失败的消息进行重新发送的机制，称为消息发送重试机制，也称为消息重投机制。

对于消息重投，需要注意以下几点

- 生产者在发送消息时，若采用同步或异步发送方式，发送失败会重试，但 oneway 消息发送方式发送失败是没有重试机制的。
- 只有普通消息具有发送重试机制，顺序消息是没有的。
- 消息重投机制可以保证消息尽可能发送成功、不丢失，但可能会造成消息重复。消息重复在 RocketMQ 中是无法避免的问题。
- 消息重复在一般情况下不会发生，当出现消息量大、网络抖动，消息重复就会成为大概率事件。
- producer 主动重发、consumer 负载变化（发生 Rebalance，不会导致消息重复，但可能出现重复消费）也会导致重复消息。
- 消息重复无法避免，但要避免消息的重复消费。
- 避免消息重复消费的解决方案是，为消息添加唯一标识（例如消息 key），使消费者对消息进行消费判断来避免重复消费。
- 消息发送重试有三种策略可以选择：同步发送失败策略、异步发送失败策略、消息刷盘失败策略。

##### 同步发送失败策略

对于普通消息，消息发送默认采用 round-robin 策略来选择所发送到的队列。如果发送失败，默认重试 2 次。但在重试时是不会选择上次发送失败的
Broker，而是选择其它 Broker。当然，若只有一个 Broker 其也只能发送到该 Broker，但其会尽量发送到该 Broker 上的其它 Queue。

同时，Broker 还具有失败隔离功能，使 Producer 尽量选择未发生过发送失败的 Broker 作为目标 Broker。其可以保证其它消息尽量不发送到问题
Broker，为了提升消息发送效率，降低消息发送耗时。

思考：让我们自己实现失败隔离功能，如何来做？

- 方案一：Producer 中维护某 JUC 的 Map 集合，其 key 是发生失败的时间戳，value 为 Broker 实
  例。Producer 中还维护着一个 Set 集合，其中存放着所有未发生发送异常的 Broker 实例。选择目
  标 Broker 是从该 Set 集合中选择的。再定义一个定时任务，定期从 Map 集合中将长期未发生发送异常的 Broker 清理出去，并添加到
  Set 集合。
- 方案二：为 Producer 中的 Broker 实例添加一个标识，例如是一个 AtomicBoolean 属性。只要该 Broker 上发生过发送异常，就将其置为
  true。选择目标 Broker 就是选择该属性值为 false 的
  Broker。再定义一个定时任务，定期将 Broker 的该属性置为 false。
- 方案三：为 Producer 中的 Broker 实例添加一个标识，例如是一个 AtomicLong 属性。只要该 Broker 上发生过发送异常，就使其值增一。选择目标
  Broker 就是选择该属性值最小的 Broker。若
  该值相同，采用轮询方式选择。

如果超过重试次数，则抛出异常，由 Producer 去保证消息不丢。当然当生产者出现 RemotingException、MQClientException 和
MQBrokerException 时，Producer 会自动重投消息。

##### 异步发送失败策略

异步发送失败重试时，异步重试不会选择其他 broker，仅在同一个 broker 上做重试，所以该策略无法保证消息不丢。

##### 消息刷盘失败策略

消息刷盘超时（Master 或 Slave）或 slave 不可用（slave 在做数据同步时向 master 返回状态不是 SEND_OK）时，默认是不会将消息尝试发送到其他
Broker 的。不过，对于重要消息可以通过在 Broker 的配置文件设置 retryAnotherBrokerWhenNotStoreOK 属性为 true 来开启。

### 消息消费重试机制

##### 顺序消息的消费重试

对于顺序消息，当 Consumer 消费消息失败后，为了保证消息的顺序性，其会自动不断地进行消息重试，直到消费成功。消费重试默认间隔时间为
1000 毫秒。重试期间应用会出现消息消费被阻塞的情况。

由于对顺序消息的重试是无休止的，不间断的，直至消费成功，所以对于顺序消息的消费，务必要保证应用能够及时监控并处理消费失败的情况，避免消费被永久性阻塞。注意，顺序消息没有发送失败重试机制，但具有消费失败重试机制。

##### 无序消息的消费重试

对于无序消息（普通消息、延时消息、事务消息），当 Consumer
消费消息失败时，可以通过设置返回状态达到消息重试的效果。不过需要注意，无序消息的重试只对集群消费方式生效，广播消费方式不提供失败重试特性。即对于广播消费，消费失败后，失败消息不再重试，继续消费后续消息。

##### 消费重试次数与间隔

对于无序消息集群消费下的重试消费，每条消息默认最多重试 16 次，但每次重试的间隔时间是不同的，会逐渐变长。每次重试的间隔时间如下表。

| 重试次数 | 与上次重试的间隔时间 | 重试次数 | 与上次重试的间隔时间 |
|------|------------|------|------------|
| 1    | 10 秒       | 9    | 7 分钟       |
| 2    | 30 秒       | 10   | 8 分钟       |
| 3    | 1 分钟       | 11   | 9 分钟       |
| 4    | 2 分钟       | 12   | 10 分钟      |
| 5    | 3 分钟       | 13   | 20 分钟      |
| 6    | 4 分钟       | 14   | 30 分钟      |
| 7    | 5 分钟       | 15   | 1 小时       |
| 8    | 6 分钟       | 16   | 2 小时       |

若一条消息在一直消费失败的前提下，将会在正常消费后的第 4 小时 46 分后进行第 16 次重试。 若仍然失败，则将消息投递到死信队列。

```cpp
DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("cg"); 
// 修改消费重试次数
consumer.setMaxReconsumeTimes(10);
```

对于修改过的重试次数，将按照以下策略执行

- 若修改值小于 16，则按照指定间隔进行重试。
- 若修改值大于 16，则超过 16 次的重试时间间隔均为 2 小时。

对于 Consumer Group，若仅修改了一个 Consumer 的消费重试次数，则会应用到该 Group 中所有
其它 Consumer 实例。若出现多个 Consumer 均做了修改的情况，则采用覆盖方式生效。即最后被 修改的值会覆盖前面设置的值。

##### 重试队列

对于需要重试消费的消息，并不是 Consumer 在等待了指定时长后再次去拉取原来的消息进行消费，而是将这些需要重试消费的消息放入到了一个特殊
Topic 的队列中，而后进行再次消费的。这个特殊的队列就是重试队列。

当出现需要进行重试消费的消息时，Broker 会为每个消费组都设置一个 Topic 名称 为%RETRY%consumerGroup@consumerGroup 的重试队列。
1、这个重试队列是针对消息才组的，而不是针对每个 Topic 设置的（一个 Topic 的消息可以让多 个消费者组进行消费，所以会为这些消费者组各创建一个重试队列）。
2、只有当出现需要进行重试消费的消息时，才会为该消费者组创建重试队列。

![RocketMQ](https://bitbucket.org/xlc520/blogasset/raw/main/images3/10329501-491ccd590e11c545.png)

注意，消费重试的时间间隔与延时消费的延时等级十分相似，除了没有延时等级的前两个时间 外，其它的时间都是相同的。

Broker 对于重试消息的处理是通过延时消息实现的。先将消息保存到 SCHEDULE_TOPIC_XXXX
延迟队列中，延迟时间到后，会将消息投递到%RETRY%consumerGroup@consumerGroup 重试队列中。

##### 消费重试配置方式

![RocketMQ](https://bitbucket.org/xlc520/blogasset/raw/main/images3/10329501-885793a60bb98e8d.png)

集群消费方式下，消息消费失败后若希望消费重试，则需要在消息监听器接口的实现中明确进行如下三种方式之一的配置

- 方式 1：返回 ConsumeConcurrentlyStatus.RECONSUME_LATER（推荐）
- 方式 2：返回 Null
- 方式 3：抛出异常

##### 消费不重试配置方式

![RocketMQ](https://bitbucket.org/xlc520/blogasset/raw/main/images3/10329501-3d677eb7d52f21eb.png)

集群消费方式下，消息消费失败后若不希望消费重试，则在捕获到异常后同样也返回与消费成功后的相同的结果，即
ConsumeConcurrentlyStatus.CONSUME_SUCCESS，则不进行消费重试。

### 死信队列

##### 什么是死信队列

当一条消息初次消费失败，消息队列会自动进行消费重试；达到最大重试次数后，若消费依然失败，则表明消费者在正常情况下无法正确地消费该消息，此时，消息队列不会立刻将消息丢弃，而是将其发送到该消费者对应的特殊队列中。这个队列就是死信队列（Dead-Letter
Queue，DLQ），而其中的消息则称为死信消息（Dead-Letter Message，DLM）。

死信队列是用于处理无法被正常消费的消息的。

##### 死信队列的特征

- 死信队列中的消息不会再被消费者正常消费，即 DLQ 对于消费者是不可见的。
- 死信存储有效期与正常消息相同，均为 3 天（commitlog 文件的过期时间），3 天后会被自动删除。
- 死信队列就是一个特殊的 Topic，名称为%DLQ%consumerGroup@consumerGroup ，即每个消费者组都有一个死信队列。
- 如果⼀个消费者组未产生死信消息，则不会为其创建相应的死信队列。

##### 死信消息的处理

实际上，当⼀条消息进入死信队列，就意味着系统中某些地方出现了问题，从而导致消费者无法正常消费该消息，比如代码中原本就存在
Bug。因此，对于死信消息，通常需要开发人员进行特殊处理。最关键的步骤是要排查可疑因素，解决代码中可能存在的
Bug，然后再将原来的死信消息再次进行投递消费。
