---
author: xlc520
title: JUC并发编程
description:  
date: 2022-08-14
category: Java
tag: Java
article: true
timeline: true
icon: java
password: 
---

## 一、线程基础

### 1、Java多线程相关概念

#### 1、进程

是程序的⼀次执⾏，是系统进⾏资源分配和调度的独⽴单位，每⼀个进程都有它⾃⼰的内存空间和系统资源

进程（Process）是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位，是操作系统结构的基础。程序是指令、数据及其组织形式的描述，进程是程序的实体。

**进程具有的特征：**

- **动态性**：进程是程序的一次执行过程，是临时的，有生命期的，是动态产生，动态消亡的
- **并发性**：任何进程都可以同其他进行一起并发执行
- **独立性**：进程是系统进行资源分配和调度的一个独立单位
- **结构性**：进程由程序，数据和进程控制块三部分组成

我们经常使用windows系统，经常会看见.exe后缀的文件，双击这个.exe文件的时候，这个文件中的指令就会被系统加载，那么我们就能得到一个关于这个.exe程序的进程。进程是**“活”**的，或者说是正在被执行的。

#### 2、线程

在同⼀个进程内⼜可以执⾏多个任务，⽽这每⼀个任务我们就可以看做是⼀个线程 ⼀个进程会有1个或多个线程的

线程是轻量级的进程，是程序执行的最小单元，使用多线程而不是多进程去进行并发程序的设计，是因为线程间的切换和调度的成本远远小于进程。

#### 3、进程与线程的一个简单解释

进程（process）和线程（thread）是操作系统的基本概念，但是它们比较抽象，不容易掌握。

1.计算机的核心是CPU，它承担了所有的计算任务。它就像一座工厂，时刻在运行。

![f65f6640-fde3-4f6f-be2a-aa05b6a3c1b9](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/f65f6640-fde3-4f6f-be2a-aa05b6a3c1b9.png)

2.假定工厂的电力有限，一次只能供给一个车间使用。也就是说，一个车间开工的时候，其他车间都必须停工。背后的含义就是，单个CPU一次只能运行一个任务。

![aa874eba-0c27-4924-be97-9c853c009ca9](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/aa874eba-0c27-4924-be97-9c853c009ca9.png)

3.进程就好比工厂的车间，它代表CPU所能处理的单个任务。任一时刻，CPU总是运行一个进程，其他进程处于非运行状态。

![f03b160d-4e18-46a1-9158-913a4afdb2b2](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/f03b160d-4e18-46a1-9158-913a4afdb2b2.png)

4.一个车间里，可以有很多工人。他们协同完成一个任务。

![9985e48b-92bd-434e-8a4e-6f85c95a8dbd](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/9985e48b-92bd-434e-8a4e-6f85c95a8dbd.png)

5.线程就好比车间里的工人。一个进程可以包括多个线程。

![3dc76caa-b3d9-4555-b8c4-c805bb97e03e](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/3dc76caa-b3d9-4555-b8c4-c805bb97e03e.png)

6.车间的空间是工人们共享的，比如许多房间是每个工人都可以进出的。这象征一个进程的内存空间是共享的，每个线程都可以使用这些共享内存。

![b3ef804e-346b-4280-bb8d-809c9bd42853](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/b3ef804e-346b-4280-bb8d-809c9bd42853.png)



7.可是，每间房间的大小不同，有些房间最多只能容纳一个人，比如厕所。里面有人的时候，其他人就不能进去了。这代表一个线程使用某些共享内存时，其他线程必须等它结束，才能使用这一块内存。

![bea2bf20-2b08-484e-80b7-3e210d0e20df](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/bea2bf20-2b08-484e-80b7-3e210d0e20df.png)

8.一个防止他人进入的简单方法，就是门口加一把锁。先到的人锁上门，后到的人看到上锁，就在门口排队，等锁打开再进去。这就叫”互斥锁”（Mutual exclusion，缩写 Mutex），防止多个线程同时读写某一块内存区域。

![876a4f82-7931-4674-ac6b-a6d04a88a5b1](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/876a4f82-7931-4674-ac6b-a6d04a88a5b1.png)



9.还有些房间，可以同时容纳n个人，比如厨房。也就是说，如果人数大于n，多出来的人只能在外面等着。这好比某些内存区域，只能供给固定数目的线程使用。

![ae960b3a-c0e8-4c3d-bbcb-bfc5ebbecb79](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/ae960b3a-c0e8-4c3d-bbcb-bfc5ebbecb79.png)

10.这时的解决方法，就是在门口挂n把钥匙。进去的人就取一把钥匙，出来时再把钥匙挂回原处。后到的人发现钥匙架空了，就知道必须在门口排队等着了。这种做法叫做”信号量”（Semaphore），用来保证多个线程不会互相冲突。

11.操作系统的设计，因此可以归结为三点：
（1）以多进程形式，允许多个任务同时运行；
（2）以多线程形式，允许单个任务分成不同的部分运行；
（3）提供协调机制，一方面防止进程之间和线程之间产生冲突，另一方面允许进程之间和线程之间共享资源。

#### 4、管程

Monitor(监视器)，也就是我们平时所说的锁

```java
// Monitor其实是一种同步机制，他的义务是保证（同一时间）只有一个线程可以访问被保护的数据和代码。
// JVM中同步是基于进入和退出监视器对象(Monitor,管程对象)来实现的，每个对象实例都会有一个Monitor对象，
Object o = new Object();
new Thread(() -> {
    synchronized (o)
    {
    }
},"t1").start();
// Monitor对象会和Java对象一同创建并销毁，它底层是由C++语言来实现的。
```

![image-20210904000040589](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210904000040589.png)

#### 5、线程状态？

```java
// Thread.State
public enum State {
    NEW,(新建)
    RUNNABLE,（准备就绪）
    BLOCKED,（阻塞）
    WAITING,（不见不散）
    TIMED_WAITING,（过时不候）
    TERMINATED;(终结)
}
```

线程几个状态的介绍：

- **New**：表示刚刚创建的线程，这种线程还没有开始执行
- **RUNNABLE**：运行状态，线程的start()方法调用后，线程会处于这种状态
- **BLOCKED**：阻塞状态。当线程在执行的过程中遇到了synchronized同步块，但这个同步块被其他线程已获取还未释放时，当前线程将进入阻塞状态，会暂停执行，直到获取到锁。当线程获取到锁之后，又会进入到运行状态（RUNNABLE）
- **WAITING**：等待状态。和TIME_WAITING都表示等待状态，区别是WAITING会进入一个无时间限制的等，而TIME_WAITING会进入一个有限的时间等待，那么等待的线程究竟在等什么呢？一般来说，WAITING的线程正式在等待一些特殊的事件，比如，通过wait()方法等待的线程在等待notify()方法，而通过join()方法等待的线程则会等待目标线程的终止。一旦等到期望的事件，线程就会再次进入RUNNABLE运行状态。
- **TERMINATED**：表示结束状态，线程执行完毕之后进入结束状态。

**注意：从NEW状态出发后，线程不能在回到NEW状态，同理，处理TERMINATED状态的线程也不能在回到RUNNABLE状态**

#### 6、wait/sleep的区别？

功能都是当前线程暂停，有什么区别？

wait放开手去睡，放开手里的锁

sleep握紧手去睡，醒了手里还有锁

### 2、线程的基本操作

#### 1、新建线程

新建线程很简单。只需要使用new关键字创建一个线程对象，然后调用它的start()启动线程即可。

```java
Thread thread1 = new Thread1();
t1.start();
```

那么线程start()之后，会干什么呢？线程有个run()方法，start()会创建一个新的线程并让这个线程执行run()方法。

这里需要注意，下面代码也能通过编译，也能正常执行。但是，却不能新建一个线程，而是在当前线程中调用run()方法，将run方法只是作为一个普通的方法调用。

```java
Thread thread = new Thread1();
thread1.run();
```

所以，希望大家注意，调用start方法和直接调用run方法的区别。

**start方法是启动一个线程，run方法只会在垫钱线程中串行的执行run方法中的代码。**

默认情况下， 线程的run方法什么都没有，启动一个线程之后马上就结束了，所以如果你需要线程做点什么，需要把您的代码写到run方法中，所以必须重写run方法。

```
Thread thread1 = new Thread() {            @Override            public void run() {                System.out.println("hello,我是一个线程!");            }        };thread1.start();
```

上面是使用匿名内部类实现的，重写了Thread的run方法，并且打印了一条信息。**我们可以通过继承Thread类，然后重写run方法，来自定义一个线程。**但考虑java是单继承的，从扩展性上来说，我们实现一个接口来自定义一个线程更好一些，java中刚好提供了Runnable接口来自定义一个线程。

```
@FunctionalInterfacepublic interface Runnable {    public abstract void run();}
```

Thread类有一个非常重要的构造方法：

```
public Thread(Runnable target)
```

我们在看一下Thread的run方法：

```
public void run() {        if (target != null) {            target.run();        }    }
```

当我们启动线程的start方法之后，线程会执行run方法，run方法中会调用Thread构造方法传入的target的run方法。

**实现Runnable接口是比较常见的做法，也是推荐的做法。**

#### 2、终止线程

一般来说线程执行完毕就会结束，无需手动关闭。但是如果我们想关闭一个正在运行的线程，有什么方法呢？可以看一下Thread类中提供了一个stop()方法，调用这个方法，就可以立即将一个线程终止，非常方便。

```java
import lombok.extern.slf4j.Slf4j;
import java.util.concurrent.TimeUnit;

@Slf4j
public class Demo01 {
    public static void main(String[] args) throws InterruptedException {
        Thread thread1 = new Thread() {
            @Override
            public void run() {
                log.info("start");
                boolean flag = true;
                while (flag) {
                    ;
                }
                log.info("end");
            }
        };
        thread1.setName("thread1");
        thread1.start();
        //当前线程休眠1秒
        TimeUnit.SECONDS.sleep(1);
        //关闭线程thread1
        thread1.stop();
        //输出线程thread1的状态
        log.info("{}", thread1.getState());
        //当前线程休眠1秒
        TimeUnit.SECONDS.sleep(1);
        //输出线程thread1的状态
        log.info("{}", thread1.getState());
    }
}
```

运行代码，输出：

```
18:02:15.312 [thread1] INFO com.itsoku.chat01.Demo01 - start
18:02:16.311 [main] INFO com.itsoku.chat01.Demo01 - RUNNABLE
18:02:17.313 [main] INFO com.itsoku.chat01.Demo01 - TERMINATED
```

代码中有个死循环，调用stop方法之后，线程thread1的状态变为TERMINATED（结束状态），线程停止了。

我们使用idea或者eclipse的时候，会发现这个方法是一个废弃的方法，也就是说，在将来，jdk可能就会移除该方法。

stop方法为何会被废弃而不推荐使用？stop方法过于暴力，强制把正在执行的方法停止了。

大家是否遇到过这样的场景：**电力系统需要维修，此时咱们正在写代码，维修人员直接将电源关闭了，代码还没保存的，是不是很崩溃，这种方式就像直接调用线程的stop方法类似。线程正在运行过程中，被强制结束了，可能会导致一些意想不到的后果。可以给大家发送一个通知，告诉大家保存一下手头的工作，将电脑关闭。**

#### 3、线程中断

在java中，线程中断是一种重要的线程写作机制，从表面上理解，中断就是让目标线程停止执行的意思，实际上并非完全如此。在上面中，我们已经详细讨论了stop方法停止线程的坏处，jdk中提供了更好的中断线程的方法。严格的说，线程中断并不会使线程立即退出，而是给线程发送一个通知，告知目标线程，有人希望你退出了！至于目标线程接收到通知之后如何处理，则完全由目标线程自己决定，这点很重要，如果中断后，线程立即无条件退出，我们又会到stop方法的老问题。

Thread提供了3个与线程中断有关的方法，这3个方法容易混淆，大家注意下：

```java
public void interrupt() //中断线程
public boolean isInterrupted() //判断线程是否被中断
public static boolean interrupted()  //判断线程是否被中断，并清除当前中断状态
```

**interrupt()**方法是一个**实例方法**，它通知目标线程中断，也就是设置中断标志位为true，中断标志位表示当前线程已经被中断了。**isInterrupted()**方法也是一个**实例方法**，它判断当前线程是否被中断（通过检查中断标志位）。最后一个方法**interrupted()**是一个**静态方法**，返回boolean类型，也是用来判断当前线程是否被中断，但是同时会清除当前线程的中断标志位的状态。

```java
while (true) {
            if (this.isInterrupted()) {
                System.out.println("我要退出了!");
                break;
            }
        }
    }
};
thread1.setName("thread1");
thread1.start();
TimeUnit.SECONDS.sleep(1);
thread1.interrupt();
```

上面代码中有个死循环，interrupt()方法被调用之后，线程的中断标志将被置为true，循环体中通过检查线程的中断标志是否为ture（`this.isInterrupted()`）来判断线程是否需要退出了。

再看一种中断的方法：

```java
static volatile boolean isStop = false;
public static void main(String[] args) throws InterruptedException {
    Thread thread1 = new Thread() {
        @Override
        public void run() {
            while (true) {
                if (isStop) {
                    System.out.println("我要退出了!");
                    break;
                }
            }
        }
    };
    thread1.setName("thread1");
    thread1.start();
    TimeUnit.SECONDS.sleep(1);
    isStop = true;
}

```

代码中通过一个变量isStop来控制线程是否停止。

通过变量控制和线程自带的interrupt方法来中断线程有什么区别呢？

如果一个线程调用了sleep方法，一直处于休眠状态，通过变量控制，还可以中断线程么？大家可以思考一下。

此时只能使用线程提供的interrupt方法来中断线程了。

```java
public static void main(String[] args) throws InterruptedException {
    Thread thread1 = new Thread() {
        @Override
        public void run() {
            while (true) {
                //休眠100秒
                try {
                    TimeUnit.SECONDS.sleep(100);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println("我要退出了!");
                break;
            }
        }
    };
    thread1.setName("thread1");
    thread1.start();
    TimeUnit.SECONDS.sleep(1);
    thread1.interrupt();
}
```

调用interrupt()方法之后，线程的sleep方法将会抛出`InterruptedException`异常。

```java
Thread thread1 = new Thread() {
    @Override
    public void run() {
        while (true) {
            //休眠100秒
            try {
                TimeUnit.SECONDS.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            if (this.isInterrupted()) {
                System.out.println("我要退出了!");
                break;
            }
        }
    }
};
```

运行上面的代码，发现程序无法终止。为什么？

代码需要改为：

```java
Thread thread1 = new Thread() {
    @Override
    public void run() {
        while (true) {
            //休眠100秒
            try {
                TimeUnit.SECONDS.sleep(100);
            } catch (InterruptedException e) {
                this.interrupt();
                e.printStackTrace();
            }
            if (this.isInterrupted()) {
                System.out.println("我要退出了!");
                break;
            }
        }
    }
};
```

上面代码可以终止。

**注意：sleep方法由于中断而抛出异常之后，线程的中断标志会被清除（置为false），所以在异常中需要执行this.interrupt()方法，将中断标志位置为true**

#### 4、等待（wait）和通知（notify）

为了支持多线程之间的协作，JDK提供了两个非常重要的方法：等待wait()方法和通知notify()方法。这2个方法并不是在Thread类中的，而是在Object类中定义的。这意味着所有的对象都可以调用者两个方法。

```java
public final void wait() throws InterruptedException;
public final native void notify();
```

当在一个对象实例上调用wait()方法后，当前线程就会在这个对象上等待。这是什么意思？比如在线程A中，调用了obj.wait()方法，那么线程A就会停止继续执行，转为等待状态。等待到什么时候结束呢？线程A会一直等到其他线程调用obj.notify()方法为止，这时，obj对象成为了多个线程之间的有效通信手段。

那么wait()方法和notify()方法是如何工作的呢？如图2.5展示了两者的工作过程。如果一个线程调用了object.wait()方法，那么它就会进出object对象的等待队列。这个队列中，可能会有多个线程，因为系统可能运行多个线程同时等待某一个对象。当object.notify()方法被调用时，它就会从这个队列中随机选择一个线程，并将其唤醒。这里希望大家注意一下，这个选择是不公平的，并不是先等待线程就会优先被选择，这个选择完全是随机的。

![f950f73b-52a6-4ecd-a8cb-5422bcd3a44e](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/f950f73b-52a6-4ecd-a8cb-5422bcd3a44e.png)

除notify()方法外，Object独享还有一个nofiyAll()方法，它和notify()方法的功能类似，不同的是，它会唤醒在这个等待队列中所有等待的线程，而不是随机选择一个。

这里强调一点，Object.wait()方法并不能随便调用。它必须包含在对应的synchronize语句汇总，无论是wait()方法或者notify()方法都需要首先获取目标独享的一个监视器。图2.6显示了wait()方法和nofiy()方法的工作流程细节。其中T1和T2表示两个线程。T1在正确执行wait()方法钱，必须获得object对象的监视器。而wait()方法在执行后，会释放这个监视器。这样做的目的是使其他等待在object对象上的线程不至于因为T1的休眠而全部无法正常执行。

线程T2在notify()方法调用前，也必须获得object对象的监视器。所幸，此时T1已经释放了这个监视器，因此，T2可以顺利获得object对象的监视器。接着，T2执行了notify()方法尝试唤醒一个等待线程，这里假设唤醒了T1。T1在被唤醒后，要做的第一件事并不是执行后续代码，而是要尝试重新获得object对象的监视器，而这个监视器也正是T1在wait()方法执行前所持有的那个。如果暂时无法获得，则T1还必须等待这个监视器。当监视器顺利获得后，T1才可以在真正意义上继续执行。

给大家上个例子：

```java
public class Demo06 {
    static Object object = new Object();
    public static class T1 extends Thread {
        @Override
        public void run() {
            synchronized (object) {
                System.out.println(System.currentTimeMillis() + ":T1 start!");
                try {
                    System.out.println(System.currentTimeMillis() + ":T1 wait for object");
                    object.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                System.out.println(System.currentTimeMillis() + ":T1 end!");
            }
        }
    }
    public static class T2 extends Thread {
        @Override
        public void run() {
            synchronized (object) {
                System.out.println(System.currentTimeMillis() + ":T2 start，notify one thread! ");
                object.notify();
                System.out.println(System.currentTimeMillis() + ":T2 end!");
                try {
                    Thread.sleep(2000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }
    }
    public static void main(String[] args) throws InterruptedException {
        new T1().start();
        new T2().start();
    }
}
```

运行结果：

```java
1562934497212:T1 start!
1562934497212:T1 wait for object
1562934497212:T2 start，notify one thread!
1562934497212:T2 end!
1562934499213:T1 end!
```

注意下打印结果，T2调用notify方法之后，T1并不能立即继续执行，而是要等待T2释放objec投递锁之后，T1重新成功获取锁后，才能继续执行。因此最后2行日志相差了2秒（因为T2调用notify方法后休眠了2秒）。

**注意：Object.wait()方法和Thread.sleep()方法都可以让现场等待若干时间。除wait()方法可以被唤醒外，另外一个主要的区别就是wait()方法会释放目标对象的锁，而Thread.sleep()方法不会释放锁。**

再给大家讲解一下wait()，notify()，notifyAll()，加深一下理解：

可以这么理解，obj对象上有2个队列，如图1，**q1：等待队列，q2：准备获取锁的队列**；两个队列都为空。

![5f1e0099-c802-4e79-803a-a5117e6666ff](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/5f1e0099-c802-4e79-803a-a5117e6666ff.png)

**obj.wait()过程：**

```java
synchronize(obj){
    obj.wait();
}
```

假如有3个线程，t1、t2、t3同时执行上面代码，t1、t2、t3会进入q2队列，如图2，进入q2的队列的这些线程才有资格去争抢obj的锁，假设t1争抢到了，那么t2、t3机型在q2中等待着获取锁，t1进入代码块执行wait()方法，此时t1会进入q1队列，然后系统会通知q2队列中的t2、t3去争抢obj的锁，抢到之后过程如t1的过程。最后t1、t2、t3都进入了q1队列，如图3。

![6c5eec72-3303-40a5-b70d-6e24ba12d2de](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/6c5eec72-3303-40a5-b70d-6e24ba12d2de.png)

![45fd3950-b371-4d46-a5df-2ce1c8303707](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/45fd3950-b371-4d46-a5df-2ce1c8303707.png)

上面过程之后，又来了线程t4执行了notify()方法，如下：**

```java
synchronize(obj){
    obj.notify();
}
```

t4会获取到obj的锁，然后执行notify()方法，系统会从q1队列中随机取一个线程，将其加入到q2队列，假如t2运气比较好，被随机到了，然后t2进入了q2队列，如图4，进入q2的队列的锁才有资格争抢obj的锁，t4线程执行完毕之后，会释放obj的锁，此时队列q2中的t2会获取到obj的锁，然后继续执行，执行完毕之后，q1中包含t1、t3，q2队列为空，如图5

![fbf3b798-65f7-4b90-a614-66854fcce5fa](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/fbf3b798-65f7-4b90-a614-66854fcce5fa.png)

![b3868bc9-3da0-474b-a48e-20f90c1335ee](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/b3868bc9-3da0-474b-a48e-20f90c1335ee.png)

**接着又来了个t5队列，执行了notifyAll()方法，如下：**

```java
synchronize(obj){
    obj.notifyAll();
}
```

2.调用obj.wait()方法，当前线程会加入队列queue1，然后会释放obj对象的锁

t5会获取到obj的锁，然后执行notifyAll()方法，系统会将队列q1中的线程都移到q2中，如图6，t5线程执行完毕之后，会释放obj的锁，此时队列q2中的t1、t3会争抢obj的锁，争抢到的继续执行，未增强到的带锁释放之后，系统会通知q2中的线程继续争抢索，然后继续执行，最后两个队列中都为空了。

![9e648015-c445-4e84-bd8c-a53a380cbd7f](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/9e648015-c445-4e84-bd8c-a53a380cbd7f.png)

#### 5、挂起（suspend）和继续执行（resume）线程

Thread类中还有2个方法，即**线程挂起(suspend)**和**继续执行(resume)**，这2个操作是一对相反的操作，被挂起的线程，必须要等到resume()方法操作后，才能继续执行。系统中已经标注着2个方法过时了，不推荐使用。

系统不推荐使用suspend()方法去挂起线程是因为suspend()方法导致线程暂停的同时，并不会释放任何锁资源。此时，其他任何线程想要访问被它占用的锁时，都会被牵连，导致无法正常运行（如图2.7所示）。直到在对应的线程上进行了resume()方法操作，被挂起的线程才能继续，从而其他所有阻塞在相关锁上的线程也可以继续执行。但是，如果resume()方法操作意外地在suspend()方法前就被执行了，那么被挂起的线程可能很难有机会被继续执行了。并且，更严重的是：它所占用的锁不会被释放，因此可能会导致整个系统工作不正常。而且，对于被挂起的线程，从它线程的状态上看，居然还是**Runnable**状态，这也会影响我们队系统当前状态的判断。

上个例子：

```java
public class Demo07 {
    static Object object = new Object();
    public static class T1 extends Thread {
        public T1(String name) {
            super(name);
        }
        @Override
        public void run() {
            synchronized (object) {
                System.out.println("in " + this.getName());
                Thread.currentThread().suspend();
            }
        }
    }
    public static void main(String[] args) throws InterruptedException {
        T1 t1 = new T1("t1");
        t1.start();
        Thread.sleep(100);
        T1 t2 = new T1("t2");
        t2.start();
        t1.resume();
        t2.resume();
        t1.join();
        t2.join();
    }
}
```

运行代码输出：

```java
in t1
in t2
```

我们会发现程序不会结束，线程t2被挂起了，导致程序无法结束，使用jstack命令查看线程堆栈信息可以看到：

```java
"t2" #13 prio=5 os_prio=0 tid=0x000000002796c000 nid=0xa3c runnable [0x000000002867f000]
   java.lang.Thread.State: RUNNABLE
        at java.lang.Thread.suspend0(Native Method)
        at java.lang.Thread.suspend(Thread.java:1029)
        at com.itsoku.chat01.Demo07$T1.run(Demo07.java:20)
        - locked <0x0000000717372fc0> (a java.lang.Object)
```

发现t2线程在**suspend0**处被挂起了，t2的状态竟然还是RUNNABLE状态，线程明明被挂起了，状态还是运行中容易导致我们队当前系统进行误判，代码中已经调用resume()方法了，但是由于时间先后顺序的缘故，resume并没有生效，这导致了t2永远滴被挂起了，并且永远占用了object的锁，这对于系统来说可能是致命的。

#### 6、等待线程结束（join）和谦让（yeild）

很多时候，一个线程的输入可能非常依赖于另外一个或者多个线程的输出，此时，这个线程就需要等待依赖的线程执行完毕，才能继续执行。jdk提供了join()操作来实现这个功能。如下所示，显示了2个join()方法：

```java
public final void join() throws InterruptedException;
public final synchronized void join(long millis) throws InterruptedException;
```

第1个方法表示无限等待，它会一直只是当前线程。知道目标线程执行完毕。

第2个方法有个参数，用于指定等待时间，如果超过了给定的时间目标线程还在执行，当前线程也会停止等待，而继续往下执行。

比如：线程T1需要等待T2、T3完成之后才能继续执行，那么在T1线程中需要分别调用T2和T3的join()方法。

上个示例：

```java
public class Demo08 {
    static int num = 0;
    public static class T1 extends Thread {
        public T1(String name) {
            super(name);
        }
        @Override
        public void run() {
            System.out.println(System.currentTimeMillis() + ",start " + this.getName());
            for (int i = 0; i < 10; i++) {
                num++;
                try {
                    Thread.sleep(200);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            System.out.println(System.currentTimeMillis() + ",end " + this.getName());
        }
    }
    public static void main(String[] args) throws InterruptedException {
        T1 t1 = new T1("t1");
        t1.start();
        t1.join();
        System.out.println(System.currentTimeMillis() + ",num = " + num);
    }
}
```

执行结果：

```java
1562939889129,start t1
1562939891134,end t1
1562939891134,num = 10
```

num的结果为10，1、3行的时间戳相差2秒左右，说明主线程等待t1完成之后才继续执行的。

看一下jdk1.8中Thread.join()方法的实现：

```java
public final synchronized void join(long millis) throws InterruptedException {
    long base = System.currentTimeMillis();
    long now = 0;
    if (millis < 0) {
        throw new IllegalArgumentException("timeout value is negative");
    }
    if (millis == 0) {
        while (isAlive()) {
            wait(0);
        }
    } else {
        while (isAlive()) {
            long delay = millis - now;
            if (delay <= 0) {
                break;
            }
            wait(delay);
            now = System.currentTimeMillis() - base;
        }
    }
}
```

从join的代码中可以看出，在被等待的线程上使用了synchronize，调用了它的wait()方法，线程最后执行完毕之后，**系统会自动调用它的notifyAll()方法**，唤醒所有在此线程上等待的其他线程。

**注意：被等待的线程执行完毕之后，系统自动会调用该线程的notifyAll()方法。所以一般情况下，我们不要去在线程对象上使用wait()、notify()、notifyAll()方法。**

另外一个方法是**Thread.yield()**，他的定义如下：

```java
public static native void yield();
```

yield是谦让的意思，这是一个静态方法，一旦执行，它会让当前线程出让CPU，但需要注意的是，出让CPU并不是说不让当前线程执行了，当前线程在出让CPU后，还会进行CPU资源的争夺，但是能否再抢到CPU的执行权就不一定了。因此，对Thread.yield()方法的调用好像就是在说：我已经完成了一些主要的工作，我可以休息一下了，可以让CPU给其他线程一些工作机会了。

如果觉得一个线程不太重要，或者优先级比较低，而又担心此线程会过多的占用CPU资源，那么可以在适当的时候调用一下Thread.yield()方法，给与其他线程更多的机会。

#### 7、总结

1. 创建线程的2中方式：继承Thread类；实现Runnable接口
2. 启动线程：调用线程的start()方法
3. 终止线程：调用线程的stop()方法，方法已过时，建议不要使用
4. 线程中断相关的方法：调用线程**实例interrupt()方法**将中断标志置为true；使用**线程实例方法isInterrupted()**获取中断标志；调用**Thread的静态方法interrupted()**获取线程是否被中断，此方法调用之后会清除中断标志（将中断标志置为false了）
5. wait、notify、notifyAll方法，这块比较难理解，可以回过头去再理理
6. 线程挂起使用**线程实例方法suspend()**，恢复线程使用**线程实例方法resume()**，这2个方法都过时了，不建议使用
7. 等待线程结束：调用**线程实例方法join()**
8. 出让cpu资源：调用**线程静态方法yeild()**

### 2、为什么多线程极其重要？？？

1. 硬件方面 - 摩尔定律失效

摩尔定律：
它是由英特尔创始人之一Gordon Moore(戈登·摩尔)提出来的。其内容为：
当价格不变时，集成电路上可容纳的元器件的数目约每隔18-24个月便会增加一倍，性能也将提升一倍。
换言之，每一美元所能买到的电脑性能，将每隔18-24个月翻一倍以上。这一定律揭示了信息技术进步的速度。

可是从2003年开始CPU主频已经不再翻倍，而是采用多核而不是更快的主频。

摩尔定律失效。

在主频不再提高且核数在不断增加的情况下，要想让程序更快就要用到并行或并发编程。

2. 软件方面

高并发系统，异步+回调等生产需求



### 3、从start一个线程说起

```java
// Java线程理解以及openjdk中的实现
private native void start0();
// Java语言本身底层就是C++语言
```

> OpenJDK源码网址:http://openjdk.java.net/

```
openjdk8\hotspot\src\share\vm\runtime
```

**更加底层的C++源码解读**

```java
openjdk8\jdk\src\share\native\java\lang   thread.c
java线程是通过start的方法启动执行的，主要内容在native方法start0中，Openjdk的写JNI一般是一一对应的，Thread.java对应的就是Thread.c start0其实就是JVM_StartThread。此时查看源代码可以看到在jvm.h中找到了声明，jvm.cpp中有实现。    
```

![image-20210903235656449](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210903235656449.png)

```java
openjdk8\hotspot\src\share\vm\prims  jvm.cpp
```

![image-20210903235812379](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210903235812379.png)

![image-20210903235817486](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210903235817486.png)

```java
openjdk8\hotspot\src\share\vm\runtime  thread.cpp
```

![image-20210903235840971](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210903235840971.png)



### 4、用户线程和守护线程

Java线程分为用户线程和守护线程，线程的daemon属性为true表示是守护线程，false表示是用户线程

#### 守护线程

是一种特殊的线程，在后台默默地完成一些系统性的服务，比如垃圾回收线程

#### 用户线程

是系统的工作线程，它会完成这个程序需要完成的业务操作

```java
public class DaemonDemo {

    public static void main(String[] args) {
        Thread t1 = new Thread(() -> {
            System.out.println(Thread.currentThread().getName() + "\t 开始运行，" + (Thread.currentThread().isDaemon() ? "守护线程" : "用户线程"));
            while (true) {

            }
        }, "t1");

        //线程的daemon属性为true表示是守护线程，false表示是用户线程
        t1.setDaemon(true);
        t1.start();

        //3秒钟后主线程再运行
        try {
            TimeUnit.SECONDS.sleep(3);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("----------main线程运行完毕");
    }

}
```

#### 重点

当程序中所有用户线程执行完毕之后，不管守护线程是否结束，系统都会自动退出

如果用户线程全部结束了，意味着程序需要完成的业务操作已经结束了，系统可以退出了。所以当系统只剩下守护进程的时候，java虚拟机会自动退出

设置守护线程，需要在**start()**方法**之前**进行

### 5、获得多线程的方法几种？

- 传统的是
  - 继承thread类
  - 实现runnable接口，

- java5以后
  - 实现callable接口
  - java的线程池获得

### 6、Callable接口

#### 1、与runnable对比

```java
// 创建新类MyThread实现runnable接口
class MyThread implements Runnable{
 @Override
 public void run() {
 
 }
}
// 新类MyThread2实现callable接口
class MyThread2 implements Callable<Integer>{
 @Override
 public Integer call() throws Exception {
  return 200;
 } 
}
// 面试题:callable接口与runnable接口的区别？
 
// 答：（1）是否有返回值
//     （2）是否抛异常
//    （3）落地方法不一样，一个是run，一个是call
```

#### 2、怎么用

直接替换runnable是否可行？

![image](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/1614161513991-ca4fa075-8d4d-4c45-b1c8-cf6f3d83c6e4.png)

不可行，因为：thread类的构造方法根本没有Callable

![image](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/1614161519289-57011bee-6de0-4002-b81e-433cede8c7a0.png)

认识不同的人找中间人

![image](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/1614161525949-6b3bf259-23a9-421e-8877-ae7f7de4f3d8.png)

```java
public static void main(String[] args) throws ExecutionException, InterruptedException {
  FutureTask futureTask = new FutureTask(new MyThread2());
  new Thread(futureTask,"AA").start();
}
```

运行成功后如何获得返回值？

![image](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/1614161535188-cd8c298a-b466-41da-bee3-8ee572236b1f.png)

```java
public static void main(String[] args) throws ExecutionException, InterruptedException {
  FutureTask futureTask = new FutureTask(new MyThread2());
  new Thread(futureTask,"AA").start();
  System.out.println(futureTask.get());
}
```



## 二、线程池

### 1、什么是线程池

大家用jdbc操作过数据库应该知道，操作数据库需要和数据库建立连接，拿到连接之后才能操作数据库，用完之后销毁。数据库连接的创建和销毁其实是比较耗时的，真正和业务相关的操作耗时是比较短的。每个数据库操作之前都需要创建连接，为了提升系统性能，后来出现了数据库连接池，系统启动的时候，先创建很多连接放在池子里面，使用的时候，直接从连接池中获取一个，使用完毕之后返回到池子里面，继续给其他需要者使用，这其中就省去创建连接的时间，从而提升了系统整体的性能。

线程池和数据库连接池的原理也差不多，创建线程去处理业务，可能创建线程的时间比处理业务的时间还长一些，如果系统能够提前为我们创建好线程，我们需要的时候直接拿来使用，用完之后不是直接将其关闭，而是将其返回到线程中中，给其他需要这使用，这样直接节省了创建和销毁的时间，提升了系统的性能。

简单的说，在使用了线程池之后，创建线程变成了从线程池中获取一个空闲的线程，然后使用，关闭线程变成了将线程归还到线程池。

### 2、为什么用线程池

线程池的优势：

​		线程池做的工作主要是控制运行的线程数量，处理过程中将任务放入队列，然后在线程创建后启动这些任务，如果线程数量超过了最大数量，超出数量的线程排队等候，等其他线程执行完毕，再从队列中取出任务来执行。

它的主要特点为：**线程复用;控制最大并发数;管理线程。**

第一：降低资源消耗。通过重复利用已创建的线程降低线程创建和销毁造成的销耗。

第二：提高响应速度。当任务到达时，任务可以不需要等待线程创建就能立即执行。

第三：提高线程的可管理性。线程是稀缺资源，如果无限制的创建，不仅会销耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一的分配，调优和监控

### 3、线程池的使用

#### 1、Executors.newFixedThreadPool(int)

​		newFixedThreadPool创建的线程池corePoolSize和maximumPoolSize值是相等的，它使用的是LinkedBlockingQueue执行长期任务性能好，创建一个线程池，一池有N个固定的线程，有固定线程数的线程

```java
public static ExecutorService newFixedThreadPool(int nThreads) {
    return new ThreadPoolExecutor(nThreads, nThreads,
                                  0L, TimeUnit.MILLISECONDS,
                                  new LinkedBlockingQueue<Runnable>());
}
```

#### 2、Executors.newSingleThreadExecutor()

​		newSingleThreadExecutor 创建的线程池corePoolSize和maximumPoolSize值都是1，它使用的是LinkedBlockingQueue一个任务一个任务的执行，一池一线程

```java
public static ExecutorService newSingleThreadExecutor() {
    return new FinalizableDelegatedExecutorService
        (new ThreadPoolExecutor(1, 1,
                                0L, TimeUnit.MILLISECONDS,
                                new LinkedBlockingQueue<Runnable>()));
}
```

#### 3、Executors.newCachedThreadPool()

​		newCachedThreadPool创建的线程池将corePoolSize设置为0，将maximumPoolSize设置为Integer.MAX_VALUE，它使用的是SynchronousQueue，也就是说来了任务就创建线程运行，当线程空闲超过60秒，就销毁线程。

执行很多短期异步任务，线程池根据需要创建新线程，但在先前构建的线程可用时将重用它们。可扩容，遇强则强

```java
public static ExecutorService newCachedThreadPool() {
    return new ThreadPoolExecutor(0, Integer.MAX_VALUE,
                                  60L, TimeUnit.SECONDS,
                                  new SynchronousQueue<Runnable>());
}
```

```java
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * 线程池
 * Arrays
 * Collections
 * Executors
 */
public class MyThreadPoolDemo {

    public static void main(String[] args) {
        //List list = new ArrayList();
        //List list = Arrays.asList("a","b");
        //固定数的线程池，一池五线程

//       ExecutorService threadPool =  Executors.newFixedThreadPool(5); //一个银行网点，5个受理业务的窗口
//       ExecutorService threadPool =  Executors.newSingleThreadExecutor(); //一个银行网点，1个受理业务的窗口
       ExecutorService threadPool =  Executors.newCachedThreadPool(); //一个银行网点，可扩展受理业务的窗口

        //10个顾客请求
        try {
            for (int i = 1; i <=10; i++) {
                threadPool.execute(()->{
                    System.out.println(Thread.currentThread().getName()+"\t 办理业务");
                });
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            threadPool.shutdown();
        }

    }
}
```

### 4、ThreadPoolExecutor底层原理

![fdae3766-9607-424f-8f77-ba9a14583e8e](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/fdae3766-9607-424f-8f77-ba9a14583e8e.png)

**举个例子，加深理解：**

咱们作为开发者，上面都有开发主管，主管下面带领几个小弟干活，CTO给主管授权说，你可以招聘5个小弟干活，新来任务，如果小弟还不到吴哥，立即去招聘一个来干这个新来的任务，当5个小弟都招来了，再来任务之后，将任务记录到一个表格中，表格中最多记录100个，小弟们会主动去表格中获取任务执行，如果5个小弟都在干活，并且表格中也记录满了，那你可以将小弟扩充到20个，如果20个小弟都在干活，并且存放任务的表也满了，产品经理再来任务后，是直接拒绝，还是让产品自己干，这个由你自己决定，小弟们都尽心尽力在干活，任务都被处理完了，突然公司业绩下滑，几个员工没事干，打酱油，为了节约成本，CTO主管把小弟控制到5人，其他15个人直接被干掉了。所以作为小弟们，别让自己闲着，多干活。

**原理：**先找几个人干活，大家都忙于干活，任务太多可以排期，排期的任务太多了，再招一些人来干活，最后干活的和排期都达到上层领导要求的上限了，那需要采取一些其他策略进行处理了。对于长时间不干活的人，考虑将其开掉，节约资源和成本。

![image](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/1614161583621-6ff005f3-9806-4c18-a497-e655aec5a2d0.png)

```java
public ThreadPoolExecutor(int corePoolSize,
                          int maximumPoolSize,
                          long keepAliveTime,
                          TimeUnit unit,
                          BlockingQueue<Runnable> workQueue,
                          ThreadFactory threadFactory,
                          RejectedExecutionHandler handler) {
    if (corePoolSize < 0 ||
        maximumPoolSize <= 0 ||
        maximumPoolSize < corePoolSize ||
        keepAliveTime < 0)
        throw new IllegalArgumentException();
    if (workQueue == null || threadFactory == null || handler == null)
        throw new NullPointerException();
    this.corePoolSize = corePoolSize;
    this.maximumPoolSize = maximumPoolSize;
    this.workQueue = workQueue;
    this.keepAliveTime = unit.toNanos(keepAliveTime);
    this.threadFactory = threadFactory;
    this.handler = handler;
}
```

1. corePoolSize：核心线程大小，当提交一个任务到线程池时，线程池会创建一个线程来执行任务，即使有其他空闲线程可以处理任务也会创新线程，等到工作的线程数大于核心线程数时就不会在创建了。如果调用了线程池的`prestartAllCoreThreads`方法，线程池会提前把核心线程都创造好，并启动

2. maximumPoolSize：线程池允许创建的最大线程数，此值必须大于等于1。如果队列满了，并且以创建的线程数小于最大线程数，则线程池会再创建新的线程执行任务。如果我们使用了无界队列，那么所有的任务会加入队列，这个参数就没有什么效果了

3. keepAliveTime：多余的空闲线程的存活时间,当前池中线程数量超过corePoolSize时，当空闲时间,达到keepAliveTime时，多余线程会被销毁直到只剩下corePoolSize个线程为止，如果任务很多，并且每个任务的执行时间比较短，避免线程重复创建和回收，可以调大这个时间，提高线程的利用率

4. unit：keepAliveTIme的时间单位，可以选择的单位有天、小时、分钟、毫秒、微妙、千分之一毫秒和纳秒。类型是一个枚举`java.util.concurrent.TimeUnit`，这个枚举也经常使用

5. workQueue：任务队列，被提交但尚未被执行的任务，用于缓存待处理任务的阻塞队列

6. threadFactory：表示生成线程池中工作线程的线程工厂，用于创建线程，一般默认的即可，可以通过线程工厂给每个创建出来的线程设置更有意义的名字

7. handler：拒绝策略，表示当队列满了，并且工作线程大于等于线程池的最大线程数（maximumPoolSize）时如何来拒绝请求执行的runnable的策略

![image](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/1614161593084-bebbf57e-a1cd-4178-b763-24959203717b.png)

![image](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/1614161599622-b82c39bb-1dbb-495e-9e4a-78f413f1c724.png)

**调用线程池的execute方法处理任务，执行execute方法的过程：**

1. 判断线程池中运行的线程数是否小于corepoolsize，是：则创建新的线程来处理任务，否：执行下一步
2. 试图将任务添加到workQueue指定的队列中，如果无法添加到队列，进入下一步
3. 判断线程池中运行的线程数是否小于`maximumPoolSize`，是：则新增线程处理当前传入的任务，否：将任务传递给`handler`对象`rejectedExecution`方法处理

```
1、在创建了线程池后，开始等待请求。
2、当调用execute()方法添加一个请求任务时，线程池会做出如下判断：
  2.1如果正在运行的线程数量小于corePoolSize，那么马上创建线程运行这个任务；
  2.2如果正在运行的线程数量大于或等于corePoolSize，那么将这个任务放入队列；
  2.3如果这个时候队列满了且正在运行的线程数量还小于maximumPoolSize，那么还是要创建非核心线程立刻运行这个任务；
  2.4如果队列满了且正在运行的线程数量大于或等于maximumPoolSize，那么线程池会启动饱和拒绝策略来执行。
3、当一个线程完成任务时，它会从队列中取下一个任务来执行。
4、当一个线程无事可做超过一定的时间（keepAliveTime）时，线程会判断：
    如果当前运行的线程数大于corePoolSize，那么这个线程就被停掉。
    所以线程池的所有任务完成后，它最终会收缩到corePoolSize的大小。
```

### 5、拒绝策略？生产中如设置合理参数

#### 1、线程池的拒绝策略

​		等待队列已经排满了，再也塞不下新任务了，同时，线程池中的max线程也达到了，无法继续为新任务服务。这个是时候我们就需要拒绝策略机制合理的处理这个问题。

#### 2、JDK内置的拒绝策略

AbortPolicy(默认)：直接抛出RejectedExecutionException异常阻止系统正常运行

CallerRunsPolicy：“调用者运行”一种调节机制，该策略既不会抛弃任务，也不会抛出异常，而是将某些任务回退到调用者，从而降低新任务的流量。

DiscardOldestPolicy：抛弃队列中等待最久的任务，然后把当前任务加入队列中尝试再次提交当前任务。

DiscardPolicy：该策略默默地丢弃无法处理的任务，不予任何处理也不抛出异常。如果允许任务丢失，这是最好的一种策略。

**以上内置拒绝策略均实现了RejectedExecutionHandle接口**

```java
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

public class Demo5 {
    static class Task implements Runnable {
        String name;
        public Task(String name) {
            this.name = name;
        }
        @Override
        public void run() {
            System.out.println(Thread.currentThread().getName() + "处理" + this.name);
            try {
                TimeUnit.SECONDS.sleep(5);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        @Override
        public String toString() {
            return "Task{" +
                    "name='" + name + '\'' +
                    '}';
        }
    }
    public static void main(String[] args) {
        ThreadPoolExecutor executor = new ThreadPoolExecutor(1,
                1,
                60L,
                TimeUnit.SECONDS,
                new ArrayBlockingQueue<Runnable>(1),
                Executors.defaultThreadFactory(),
                (r, executors) -> {
                    //自定义饱和策略
                    //记录一下无法处理的任务
                    System.out.println("无法处理的任务：" + r.toString());
                });
        for (int i = 0; i < 5; i++) {
            executor.execute(new Task("任务-" + i));
        }
        executor.shutdown();
    }
}
```

```java
无法处理的任务：Task{name='任务-2'}
无法处理的任务：Task{name='任务-3'}
pool-1-thread-1处理任务-0
无法处理的任务：Task{name='任务-4'}
pool-1-thread-1处理任务-1
```

输出结果中可以看到有3个任务进入了饱和策略中，记录了任务的日志，对于无法处理多任务，我们最好能够记录一下，让开发人员能够知道。任务进入了饱和策略，说明线程池的配置可能不是太合理，或者机器的性能有限，需要做一些优化调整。

#### 3、生产中合理的设置参数

要想合理的配置线程池，需要先分析任务的特性，可以从以下几个角度分析：

- 任务的性质：CPU密集型任务、IO密集型任务和混合型任务
- 任务的优先级：高、中、低
- 任务的执行时间：长、中、短
- 任务的依赖性：是否依赖其他的系统资源，如数据库连接。

性质不同任务可以用不同规模的线程池分开处理。CPU密集型任务应该尽可能小的线程，如配置cpu数量+1个线程的线程池。由于IO密集型任务并不是一直在执行任务，不能让cpu闲着，则应配置尽可能多的线程，如：cup数量*2。混合型的任务，如果可以拆分，将其拆分成一个CPU密集型任务和一个IO密集型任务，只要这2个任务执行的时间相差不是太大，那么分解后执行的吞吐量将高于串行执行的吞吐量。可以通过`Runtime.getRuntime().availableProcessors()`方法获取cpu数量。优先级不同任务可以对线程池采用优先级队列来处理，让优先级高的先执行。

使用队列的时候建议使用有界队列，有界队列增加了系统的稳定性，如果采用无解队列，任务太多的时候可能导致系统OOM，直接让系统宕机。

线程池汇总线程大小对系统的性能有一定的影响，我们的目标是希望系统能够发挥最好的性能，过多或者过小的线程数量无法有消息的使用机器的性能。咋Java Concurrency inPractice书中给出了估算线程池大小的公式：

```java
Ncpu = CUP的数量
Ucpu = 目标CPU的使用率，0<=Ucpu<=1
W/C = 等待时间与计算时间的比例
为保存处理器达到期望的使用率，最有的线程池的大小等于：
Nthreads = Ncpu × Ucpu × (1+W/C)
```

1. CPU密集型

   ```java
   // 查看CPU核数
   System. out .println(Runtime. getRuntime ().availableProcessors());
   ```

   ￼![image-20220329145519183](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20220329145519183.png)

2. IO密集型
   1. 由于IO密集型任务线程并不是一直在执行任务，则应配置尽可能多的线程，如**CPU核数 * 2** 。
   2. ![image-20220329145652545](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20220329145652545.png)

看公司业务是CPU密集型还是IO密集型的，这两种不一样，来决定线程池线程数的最佳合理配置数。

### 6、超级大坑 在工作中单一的/固定数的/可变的三种创建线程池的方法哪个用的多？

答案是**一个都不用**，我们工作中只能使用自定义的

![image](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/1614161641934-fd8ddb1d-5b05-4d88-81c6-04a40367c591.png)



### 7、自定义线程池

```java
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.*;

/**
 * 线程池
 * Arrays
 * Collections
 * Executors
 */
public class MyThreadPoolDemo {

    public static void main(String[] args) {
        ExecutorService threadPool = new ThreadPoolExecutor(
                2,
                5,
                2L,
                TimeUnit.SECONDS,
                new ArrayBlockingQueue<Runnable>(3),
                Executors.defaultThreadFactory(),
                //new ThreadPoolExecutor.AbortPolicy()
                //new ThreadPoolExecutor.CallerRunsPolicy()
                //new ThreadPoolExecutor.DiscardOldestPolicy()
                new ThreadPoolExecutor.DiscardPolicy()
        );
        //10个顾客请求
        try {
            for (int i = 1; i <= 10; i++) {
                threadPool.execute(() -> {
                    System.out.println(Thread.currentThread().getName() + "\t 办理业务");
                });
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            threadPool.shutdown();
        }

    }

    private static void threadPool() {
        //List list = new ArrayList();
        //List list = Arrays.asList("a","b");
        //固定数的线程池，一池五线程

//       ExecutorService threadPool =  Executors.newFixedThreadPool(5); //一个银行网点，5个受理业务的窗口
//       ExecutorService threadPool =  Executors.newSingleThreadExecutor(); //一个银行网点，1个受理业务的窗口
        ExecutorService threadPool = Executors.newCachedThreadPool(); //一个银行网点，可扩展受理业务的窗口

        //10个顾客请求
        try {
            for (int i = 1; i <= 10; i++) {
                threadPool.execute(() -> {
                    System.out.println(Thread.currentThread().getName() + "\t 办理业务");
                });
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            threadPool.shutdown();
        }
    }
}
```

### 8、线程池中的2个关闭方法

线程池提供了2个关闭方法：`shutdown`和`shutdownNow`，当调用者两个方法之后，线程池会遍历内部的工作线程，然后调用每个工作线程的interrrupt方法给线程发送中断信号，内部如果无法响应中断信号的可能永远无法终止，所以如果内部有无线循环的，最好在循环内部检测一下线程的中断信号，合理的退出。调用者两个方法中任意一个，线程池的`isShutdown`方法就会返回true，当所有的任务线程都关闭之后，才表示线程池关闭成功，这时调用`isTerminaed`方法会返回true。

调用`shutdown`方法之后，线程池将不再接口新任务，内部会将所有已提交的任务处理完毕，处理完毕之后，工作线程自动退出。

而调用`shutdownNow`方法后，线程池会将还未处理的（在队里等待处理的任务）任务移除，将正在处理中的处理完毕之后，工作线程自动退出。

至于调用哪个方法来关闭线程，应该由提交到线程池的任务特性决定，多数情况下调用`shutdown`方法来关闭线程池，如果任务不一定要执行完，则可以调用`shutdownNow`方法。

### 9、BlockingQueue阻塞队列

#### 1、栈与队列

栈：先进后出，后进先出

队列：先进先出

#### 2、阻塞队列

阻塞：必须要阻塞/不得不阻塞 

![image](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/1614161550577-d838e7b4-62c9-4630-ad52-34ecf72f3aee.png)

线程1往阻塞队列里添加元素，线程2从阻塞队列里移除元素

当队列是空的，从队列中获取元素的操作将会被阻塞

当队列是满的，从队列中添加元素的操作将会被阻塞

试图从空的队列中获取元素的线程将会被阻塞，直到其他线程往空的队列插入新的元素

试图向已满的队列中添加新元素的线程将会被阻塞，直到其他线程从队列中移除一个或多个元素或者完全清空，使队列变得空闲起来并后续新增

![image](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/1614161556740-782f1ca1-a941-4b76-b581-4b9ffef9a5ca.png)

#### 3、种类分析

**ArrayBlockingQueue**：是一个基于数组结构的有界阻塞队列，此队列按照先进先出原则对元素进行排序

**LinkedBlockingQueue**：由链表结构组成的有界（但大小默认值为integer.MAX_VALUE）阻塞队列，此队列按照先进先出排序元素，吞吐量通常要高于ArrayBlockingQueue。静态工厂方法`Executors.newFixedThreadPool`使用了这个队列。

PriorityBlockingQueue：支持优先级排序的无界阻塞队列。

DelayQueue：使用优先级队列实现的延迟无界阻塞队列。

**SynchronousQueue**：不存储元素的阻塞队列，也即单个元素的队列,每个插入操作必须等到另外一个线程调用移除操作，否则插入操作一直处理阻塞状态，吞吐量通常要高于LinkedBlockingQueue，静态工厂方法`Executors.newCachedThreadPool`使用这个队列

LinkedTransferQueue：由链表组成的无界阻塞队列。

LinkedBlockingDeque：由链表组成的双向阻塞队列。

```java
import java.util.concurrent.*;

public class Demo2 {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newCachedThreadPool();
        for (int i = 0; i < 50; i++) {
            int j = i;
            String taskName = "任务" + j;
            executor.execute(() -> {
                System.out.println(Thread.currentThread().getName() + "处理" + taskName);
                //模拟任务内部处理耗时
                try {
                    TimeUnit.SECONDS.sleep(1);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            });
        }
        executor.shutdown();
    }
}
```

代码中使用`Executors.newCachedThreadPool()`创建线程池，看一下的源码：

```java
public static ExecutorService newCachedThreadPool() {
        return new ThreadPoolExecutor(0, Integer.MAX_VALUE,
                                      60L, TimeUnit.SECONDS,
                                      new SynchronousQueue<Runnable>());
    }
```

从输出中可以看出，系统创建了50个线程处理任务，代码中使用了`SynchronousQueue`同步队列，这种队列比较特殊，放入元素必须要有另外一个线程去获取这个元素，否则放入元素会失败或者一直阻塞在那里直到有线程取走，示例中任务处理休眠了指定的时间，导致已创建的工作线程都忙于处理任务，所以新来任务之后，将任务丢入同步队列会失败，丢入队列失败之后，会尝试新建线程处理任务。使用上面的方式创建线程池需要注意，如果需要处理的任务比较耗时，会导致新来的任务都会创建新的线程进行处理，可能会导致创建非常多的线程，最终耗尽系统资源，触发OOM。

**PriorityBlockingQueue优先级队列的线程池**

```java
import java.util.concurrent.*;

public class Demo3 {
    static class Task implements Runnable, Comparable<Task> {
        private int i;
        private String name;
        public Task(int i, String name) {
            this.i = i;
            this.name = name;
        }
        @Override
        public void run() {
            System.out.println(Thread.currentThread().getName() + "处理" + this.name);
        }
        @Override
        public int compareTo(Task o) {
            return Integer.compare(o.i, this.i);
        }
    }
    public static void main(String[] args) {
        ExecutorService executor = new ThreadPoolExecutor(1, 1,
                60L, TimeUnit.SECONDS,
                new PriorityBlockingQueue());
        for (int i = 0; i < 10; i++) {
            String taskName = "任务" + i;
            executor.execute(new Task(i, taskName));
        }
        for (int i = 100; i >= 90; i--) {
            String taskName = "任务" + i;
            executor.execute(new Task(i, taskName));
        }
        executor.shutdown();
    }
}
```

输出中，除了第一个任务，其他任务按照优先级高低按顺序处理。原因在于：创建线程池的时候使用了优先级队列，进入队列中的任务会进行排序，任务的先后顺序由Task中的i变量决定。向`PriorityBlockingQueue`加入元素的时候，内部会调用代码中Task的`compareTo`方法决定元素的先后顺序。



#### 4、BlockingQueue核心方法

![image](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/1614161565952-60513c15-8261-450d-9fd3-57f35be66a42.png)

![image](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/1614161571726-0fb6d810-ca4c-4f9f-b0c7-ee1282a95d7e.png)

```java

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;
import java.util.concurrent.TimeUnit;

/**
 * 阻塞队列
 */
public class BlockingQueueDemo {

    public static void main(String[] args) throws InterruptedException {

//        List list = new ArrayList();

        BlockingQueue<String> blockingQueue = new ArrayBlockingQueue<>(3);
        //第一组
//        System.out.println(blockingQueue.add("a"));
//        System.out.println(blockingQueue.add("b"));
//        System.out.println(blockingQueue.add("c"));
//        System.out.println(blockingQueue.element());

        //System.out.println(blockingQueue.add("x"));
//        System.out.println(blockingQueue.remove());
//        System.out.println(blockingQueue.remove());
//        System.out.println(blockingQueue.remove());
//        System.out.println(blockingQueue.remove());
//    第二组
//        System.out.println(blockingQueue.offer("a"));
//        System.out.println(blockingQueue.offer("b"));
//        System.out.println(blockingQueue.offer("c"));
//        System.out.println(blockingQueue.offer("x"));
//        System.out.println(blockingQueue.poll());
//        System.out.println(blockingQueue.poll());
//        System.out.println(blockingQueue.poll());
//        System.out.println(blockingQueue.poll());
//    第三组        
//         blockingQueue.put("a");
//         blockingQueue.put("b");
//         blockingQueue.put("c");
//         //blockingQueue.put("x");
//        System.out.println(blockingQueue.take());
//        System.out.println(blockingQueue.take());
//        System.out.println(blockingQueue.take());
//        System.out.println(blockingQueue.take());
        
//    第四组        
        System.out.println(blockingQueue.offer("a"));
        System.out.println(blockingQueue.offer("b"));
        System.out.println(blockingQueue.offer("c"));
        System.out.println(blockingQueue.offer("a",3L, TimeUnit.SECONDS));

    }
}
```

### 10、扩展线程池

虽然jdk提供了`ThreadPoolExecutor`这个高性能线程池，但是如果我们自己想在这个线程池上面做一些扩展，比如，监控每个任务执行的开始时间，结束时间，或者一些其他自定义的功能，我们应该怎么办？

这个jdk已经帮我们想到了，`ThreadPoolExecutor`内部提供了几个方法`beforeExecute`、`afterExecute`、`terminated`，可以由开发人员自己去这些方法。看一下线程池内部的源码：

```java
try {
    beforeExecute(wt, task);//任务执行之前调用的方法
    Throwable thrown = null;
    try {
        task.run();
    } catch (RuntimeException x) {
        thrown = x;
        throw x;
    } catch (Error x) {
        thrown = x;
        throw x;
    } catch (Throwable x) {
        thrown = x;
        throw new Error(x);
    } finally {
        afterExecute(task, thrown);//任务执行完毕之后调用的方法
    }
} finally {
    task = null;
    w.completedTasks++;
    w.unlock();
}
```

**beforeExecute：任务执行之前调用的方法，有2个参数，第1个参数是执行任务的线程，第2个参数是任务**

```java
protected void beforeExecute(Thread t, Runnable r) { }
```

**afterExecute：任务执行完成之后调用的方法，2个参数，第1个参数表示任务，第2个参数表示任务执行时的异常信息，如果无异常，第二个参数为null**

```java
protected void afterExecute(Runnable r, Throwable t) { }
```

**terminated：线程池最终关闭之后调用的方法。所有的工作线程都退出了，最终线程池会退出，退出时调用该方法**

```java
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

public class Demo6 {
    static class Task implements Runnable {
        String name;
        public Task(String name) {
            this.name = name;
        }
        @Override
        public void run() {
            System.out.println(Thread.currentThread().getName() + "处理" + this.name);
            try {
                TimeUnit.SECONDS.sleep(2);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        @Override
        public String toString() {
            return "Task{" +
                    "name='" + name + '\'' +
                    '}';
        }
    }
    public static void main(String[] args) throws InterruptedException {
        ThreadPoolExecutor executor = new ThreadPoolExecutor(10,
                10,
                60L,
                TimeUnit.SECONDS,
                new ArrayBlockingQueue<Runnable>(1),
                Executors.defaultThreadFactory(),
                (r, executors) -> {
                    //自定义饱和策略
                    //记录一下无法处理的任务
                    System.out.println("无法处理的任务：" + r.toString());
                }) {
            @Override
            protected void beforeExecute(Thread t, Runnable r) {
                System.out.println(System.currentTimeMillis() + "," + t.getName() + ",开始执行任务:" + r.toString());
            }
            @Override
            protected void afterExecute(Runnable r, Throwable t) {
                System.out.println(System.currentTimeMillis() + "," + Thread.currentThread().getName() + ",任务:" + r.toString() + "，执行完毕!");
            }
            @Override
            protected void terminated() {
                System.out.println(System.currentTimeMillis() + "," + Thread.currentThread().getName() + "，关闭线程池!");
            }
        };
        for (int i = 0; i < 10; i++) {
            executor.execute(new Task("任务-" + i));
        }
        TimeUnit.SECONDS.sleep(1);
        executor.shutdown();
    }
}
```

```java
1564324574847,pool-1-thread-1,开始执行任务:Task{name='任务-0'}
1564324574850,pool-1-thread-3,开始执行任务:Task{name='任务-2'}
pool-1-thread-3处理任务-2
1564324574849,pool-1-thread-2,开始执行任务:Task{name='任务-1'}
pool-1-thread-2处理任务-1
1564324574848,pool-1-thread-5,开始执行任务:Task{name='任务-4'}
pool-1-thread-5处理任务-4
1564324574848,pool-1-thread-4,开始执行任务:Task{name='任务-3'}
pool-1-thread-4处理任务-3
1564324574850,pool-1-thread-7,开始执行任务:Task{name='任务-6'}
pool-1-thread-7处理任务-6
1564324574850,pool-1-thread-6,开始执行任务:Task{name='任务-5'}
1564324574851,pool-1-thread-8,开始执行任务:Task{name='任务-7'}
pool-1-thread-8处理任务-7
pool-1-thread-1处理任务-0
pool-1-thread-6处理任务-5
1564324574851,pool-1-thread-10,开始执行任务:Task{name='任务-9'}
pool-1-thread-10处理任务-9
1564324574852,pool-1-thread-9,开始执行任务:Task{name='任务-8'}
pool-1-thread-9处理任务-8
1564324576851,pool-1-thread-2,任务:Task{name='任务-1'}，执行完毕!
1564324576851,pool-1-thread-3,任务:Task{name='任务-2'}，执行完毕!
1564324576852,pool-1-thread-1,任务:Task{name='任务-0'}，执行完毕!
1564324576852,pool-1-thread-4,任务:Task{name='任务-3'}，执行完毕!
1564324576852,pool-1-thread-8,任务:Task{name='任务-7'}，执行完毕!
1564324576852,pool-1-thread-7,任务:Task{name='任务-6'}，执行完毕!
1564324576852,pool-1-thread-5,任务:Task{name='任务-4'}，执行完毕!
1564324576853,pool-1-thread-6,任务:Task{name='任务-5'}，执行完毕!
1564324576853,pool-1-thread-10,任务:Task{name='任务-9'}，执行完毕!
1564324576853,pool-1-thread-9,任务:Task{name='任务-8'}，执行完毕!
1564324576853,pool-1-thread-9，关闭线程池!
```

从输出结果中可以看到，每个需要执行的任务打印了3行日志，执行前由线程池的`beforeExecute`打印，执行时会调用任务的`run`方法，任务执行完毕之后，会调用线程池的`afterExecute`方法，从每个任务的首尾2条日志中可以看到每个任务耗时2秒左右。线程池最终关闭之后调用了`terminated`方法。

## 三、CompletableFuture

### 1、Future和Callable接口

Future接口定义了操作异步任务执行一些方法，如获取异步任务的执行结果、取消任务的执行、判断任务是否被取消、判断任务执行是否完毕等。

![image-20210904000352470](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210904000352470.png)

Callable接口中定义了需要有返回的任务需要实现的方法

比如主线程让一个子线程去执行任务，子线程可能比较耗时，启动子线程开始执行任务后，主线程就去做其他事情了，过了一会才去获取子任务的执行结果。

### 2、从之前的FutureTask开始

Future接口相关架构

![](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210904000518011.png)

![image-20210904000529226](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210904000529226.png)



#### code1

```java
public class CompletableFutureDemo{
    public static void main(String[] args) throws ExecutionException, InterruptedException, TimeoutException{
        FutureTask<String> futureTask = new FutureTask<>(() -> {
            System.out.println("-----come in FutureTask");
            try { TimeUnit.SECONDS.sleep(3); } catch (InterruptedException e) { e.printStackTrace(); }
            return ThreadLocalRandom.current().nextInt(100);
        });

        Thread t1 = new Thread(futureTask,"t1");
        t1.start();

        //3秒钟后才出来结果，还没有计算你提前来拿(只要一调用get方法，对于结果就是不见不散，会导致阻塞)
        //System.out.println(Thread.currentThread().getName()+"\t"+futureTask.get());

        //3秒钟后才出来结果，我只想等待1秒钟，过时不候
        System.out.println(Thread.currentThread().getName()+"\t"+futureTask.get(1L,TimeUnit.SECONDS));

        System.out.println(Thread.currentThread().getName()+"\t"+" run... here");

    }
}
```

- get()阻塞   一旦调用get()方法，不管是否计算完成都会导致阻塞

#### code2

```java
public class CompletableFutureDemo2 {

    public static void main(String[] args) throws ExecutionException, InterruptedException {
        FutureTask<String> futureTask = new FutureTask<>(() -> {
            System.out.println("-----come in FutureTask");
            try { TimeUnit.SECONDS.sleep(3); } catch (InterruptedException e) { e.printStackTrace(); }
            return ""+ ThreadLocalRandom.current().nextInt(100);
        });

        new Thread(futureTask,"t1").start();

        System.out.println(Thread.currentThread().getName()+"\t"+"线程完成任务");

        /**
         * 用于阻塞式获取结果,如果想要异步获取结果,通常都会以轮询的方式去获取结果
         */
        while (true){
            if(futureTask.isDone()){
                System.out.println(futureTask.get());
                break;
            }
        }
    }
}
```

isDone()轮询

轮询的方式会耗费无谓的CPU资源，而且也不见得能及时地得到计算结果.

如果想要异步获取结果,通常都会以轮询的方式去获取结果
尽量不要阻塞

不见不散 -- 过时不候 -- 轮询

### 3、对Future的改进

#### 1、类CompletableFuture

![image-20210904001054865](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210904001054865.png)

![image-20210904001102892](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210904001102892.png)

![image-20210904001143180](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210904001143180.png)

#### 2、接口CompletionStage

![image-20210904001214909](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210904001214909.png)

代表异步计算过程中的某一个阶段，一个阶段完成以后可能会触发另外一个阶段，有些类似Linux系统的管道分隔符传参数。

### 4、核心的四个静态方法

#### 1、runAsync 无 返回值

```java
public static CompletableFuture<Void> runAsync(Runnable runnable)
public static CompletableFuture<Void> runAsync(Runnable runnable,Executor executor)  
```

#### 2、supplyAsync 有 返回值

```java
public static <U> CompletableFuture<U> supplyAsync(Supplier<U> supplier)
public static <U> CompletableFuture<U> supplyAsync(Supplier<U> supplier,Executor executor)
```

上述Executor executor参数说明

没有指定Executor的方法，直接使用默认的ForkJoinPool.commonPool() 作为它的线程池执行异步代码。

如果指定线程池，则使用我们自定义的或者特别指定的线程池执行异步代码

#### 3、Code 无 返回值

```java
public class CompletableFutureDemo3{
    public static void main(String[] args) throws ExecutionException, InterruptedException{
        CompletableFuture<Void> future = CompletableFuture.runAsync(() -> {
            System.out.println(Thread.currentThread().getName()+"\t"+"-----come in");
            //暂停几秒钟线程
            try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }
            System.out.println("-----task is over");
        });
        System.out.println(future.get());
    }
}
```

![image-20210904001511947](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210904001511947.png)

#### 4、Code 有 返回值

```java
public class CompletableFutureDemo3{
    public static void main(String[] args) throws ExecutionException, InterruptedException{
        CompletableFuture<Integer> completableFuture = CompletableFuture.supplyAsync(() -> {
            System.out.println(Thread.currentThread().getName() + "\t" + "-----come in");
            //暂停几秒钟线程
            try {
                TimeUnit.SECONDS.sleep(1);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            return ThreadLocalRandom.current().nextInt(100);
        });

        System.out.println(completableFuture.get());
    }
}
```

#### 5、Code 减少阻塞和轮询

从Java8开始引入了CompletableFuture，它是Future的功能增强版，可以传入回调对象，当异步任务完成或者发生异常时，自动调用回调对象的回调方法

```java
public class CompletableFutureDemo3{
    public static void main(String[] args) throws Exception{
        CompletableFuture<Integer> completableFuture = CompletableFuture.supplyAsync(() -> {
            System.out.println(Thread.currentThread().getName() + "\t" + "-----come in");
            int result = ThreadLocalRandom.current().nextInt(10);
            //暂停几秒钟线程
            try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }
            System.out.println("-----计算结束耗时1秒钟，result： "+result);
            if(result > 6){
                int age = 10/0;
            }
            return result;
        }).whenComplete((v,e) ->{
            if(e == null){
                System.out.println("-----result: "+v);
            }
        }).exceptionally(e -> {
            System.out.println("-----exception: "+e.getCause()+"\t"+e.getMessage());
            return -44;
        });

        //主线程不要立刻结束，否则CompletableFuture默认使用的线程池会立刻关闭:暂停3秒钟线程
        try { TimeUnit.SECONDS.sleep(3); } catch (InterruptedException e) { e.printStackTrace(); }
    }
}

```

#### 6、CompletableFuture的优点

异步任务结束时，会自动回调某个对象的方法；

异步任务出错时，会自动回调某个对象的方法；

主线程设置好回调后，不再关心异步任务的执行，异步任务之间可以顺序执行

### 5、join和get对比

get会抛出异常，join不需要

### 6、案例精讲-从电商网站的比价需求说开去

切记，功能→性能

​		经常出现在等待某条 SQL 执行完成后，再继续执行下一条 SQL ，而这两条 SQL 本身是并无关系的，可以同时进行执行的。我们希望能够两条 SQL 同时进行处理，而不是等待其中的某一条 SQL 完成后，再继续下一条。同理，
对于分布式微服务的调用，按照实际业务，如果是无关联step by step的业务，可以尝试是否可以多箭齐发，同时调用。我们去比同一个商品在各个平台上的价格，要求获得一个清单列表，
1 step by step，查完京东查淘宝，查完淘宝查天猫......

2 all   一口气同时查询。。。。。

```java
import lombok.Getter;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ThreadLocalRandom;
import java.util.concurrent.TimeUnit;
import java.util.stream.Collectors;

public class T1{
    static List<NetMall> list = Arrays.asList(
            new NetMall("jd"),
            new NetMall("tmall"),
            new NetMall("pdd"),
            new NetMall("mi")
    );

    public static List<String> findPriceSync(List<NetMall> list,String productName){
        return list.stream().map(mall -> String.format(productName+" %s price is %.2f",mall.getNetMallName(),mall.getPriceByName(productName))).collect(Collectors.toList());
    }

    public static List<String> findPriceASync(List<NetMall> list,String productName){
        return list.stream().map(mall -> CompletableFuture.supplyAsync(() -> String.format(productName + " %s price is %.2f", mall.getNetMallName(), mall.getPriceByName(productName)))).collect(Collectors.toList()).stream().map(CompletableFuture::join).collect(Collectors.toList());
    }


    public static void main(String[] args){
        long startTime = System.currentTimeMillis();
        List<String> list1 = findPriceSync(list, "thinking in java");
        for (String element : list1) {
            System.out.println(element);
        }
        long endTime = System.currentTimeMillis();
        System.out.println("----costTime: "+(endTime - startTime) +" 毫秒");

        long startTime2 = System.currentTimeMillis();
        List<String> list2 = findPriceASync(list, "thinking in java");
        for (String element : list2) {
            System.out.println(element);
        }
        long endTime2 = System.currentTimeMillis();
        System.out.println("----costTime: "+(endTime2 - startTime2) +" 毫秒");
    }
}

class NetMall{
    @Getter
    private String netMallName;

    public NetMall(String netMallName){
        this.netMallName = netMallName;
    }

    public double getPriceByName(String productName){
        return calcPrice(productName);
    }

    private double calcPrice(String productName){
        try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }
        return ThreadLocalRandom.current().nextDouble() + productName.charAt(0);
    }
}
```

### 7、CompletableFuture常用方法

#### 1、获得结果和触发计算

获取结果

```java
// 不见不散
public T get()
    
// 过时不候
public T get(long timeout, TimeUnit unit)
    
// 没有计算完成的情况下，给我一个替代结果 
// 立即获取结果不阻塞 计算完，返回计算完成后的结果  没算完，返回设定的valueIfAbsent值
public T getNow(T valueIfAbsent)
  
public class CompletableFutureDemo2{
    public static void main(String[] args) throws ExecutionException, InterruptedException{
        CompletableFuture<Integer> completableFuture = CompletableFuture.supplyAsync(() -> {
            try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }
            return 533;
        });

        //去掉注释上面计算没有完成，返回444
        //开启注释上满计算完成，返回计算结果
        try { TimeUnit.SECONDS.sleep(2); } catch (InterruptedException e) { e.printStackTrace(); }

        System.out.println(completableFuture.getNow(444));
    }
}

public T join()
public class CompletableFutureDemo2{
    public static void main(String[] args) throws ExecutionException, InterruptedException{
        System.out.println(CompletableFuture.supplyAsync(() -> "abc").thenApply(r -> r + "123").join());
    }
}   
```

主动触发计算

```java
// 是否打断get方法立即返回括号值
public boolean complete(T value)
  
public class CompletableFutureDemo4{
    public static void main(String[] args) throws ExecutionException, InterruptedException{
        CompletableFuture<Integer> completableFuture = CompletableFuture.supplyAsync(() -> {
            try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }
            return 533;
        });

        //注释掉暂停线程，get还没有算完只能返回complete方法设置的444；暂停2秒钟线程，异步线程能够计算完成返回get
        try { TimeUnit.SECONDS.sleep(2); } catch (InterruptedException e) { e.printStackTrace(); }

        //当调用CompletableFuture.get()被阻塞的时候,complete方法就是结束阻塞并get()获取设置的complete里面的值.
        System.out.println(completableFuture.complete(444)+"\t"+completableFuture.get());
    }
}   
```

#### 2、对计算结果进行处理

```java
thenApply
// 计算结果存在依赖关系，这两个线程串行化
// 由于存在依赖关系(当前步错，不走下一步)，当前步骤有异常的话就叫停。
public class CompletableFutureDemo4{
	public static void main(String[] args) throws ExecutionException, InterruptedException{
        //当一个线程依赖另一个线程时用 thenApply 方法来把这两个线程串行化,
        CompletableFuture.supplyAsync(() -> {
            //暂停几秒钟线程
            try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }
            System.out.println("111");
            return 1024;
        }).thenApply(f -> {
            System.out.println("222");
            return f + 1;
        }).thenApply(f -> {
            //int age = 10/0; // 异常情况：那步出错就停在那步。
            System.out.println("333");
            return f + 1;
        }).whenCompleteAsync((v,e) -> {
            System.out.println("*****v: "+v);
        }).exceptionally(e -> {
            e.printStackTrace();
            return null;
        });

    	System.out.println("-----主线程结束，END");

        // 主线程不要立刻结束，否则CompletableFuture默认使用的线程池会立刻关闭:
        try { TimeUnit.SECONDS.sleep(2); } catch (InterruptedException e) { e.printStackTrace(); }
	}   
}  
```

```java
handle
// 有异常也可以往下一步走，根据带的异常参数可以进一步处理
public class CompletableFutureDemo4{

    public static void main(String[] args) throws ExecutionException, InterruptedException{
        //当一个线程依赖另一个线程时用 handle 方法来把这两个线程串行化,
        // 异常情况：有异常也可以往下一步走，根据带的异常参数可以进一步处理
        CompletableFuture.supplyAsync(() -> {
            //暂停几秒钟线程
            try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }
            System.out.println("111");
            return 1024;
        }).handle((f,e) -> {
            int age = 10/0;
            System.out.println("222");
            return f + 1;
        }).handle((f,e) -> {
            System.out.println("333");
            return f + 1;
        }).whenCompleteAsync((v,e) -> {
            System.out.println("*****v: "+v);
        }).exceptionally(e -> {
            e.printStackTrace();
            return null;
        });

        System.out.println("-----主线程结束，END");

        // 主线程不要立刻结束，否则CompletableFuture默认使用的线程池会立刻关闭:
        try { TimeUnit.SECONDS.sleep(2); } catch (InterruptedException e) { e.printStackTrace(); }
    }
}   
```

![image-20210904003033912](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210904003033912.png)

![image-20210904003036925](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210904003036925.png)

#### 3、对计算结果进行消费

接收任务的处理结果，并消费处理，无返回结果

```java
//thenAccept
public static void main(String[] args) throws ExecutionException, InterruptedException{
    CompletableFuture.supplyAsync(() -> {
        return 1;
    }).thenApply(f -> {
        return f + 2;
    }).thenApply(f -> {
        return f + 3;
    }).thenApply(f -> {
        return f + 4;
    }).thenAccept(r -> System.out.println(r));
}  
```

Code之任务之间的顺序执行

```java
thenRun
thenRun(Runnable runnable)
// 任务 A 执行完执行 B，并且 B 不需要 A 的结果
    
thenAccept
thenAccept(Consumer action)
// 任务 A 执行完执行 B，B 需要 A 的结果，但是任务 B 无返回值
  
thenApply
thenApply(Function fn)
// 任务 A 执行完执行 B，B 需要 A 的结果，同时任务 B 有返回值
 
System.out.println(CompletableFuture.supplyAsync(() -> "resultA").thenRun(() -> {}).join());
System.out.println(CompletableFuture.supplyAsync(() -> "resultA").thenAccept(resultA -> {}).join());
System.out.println(CompletableFuture.supplyAsync(() -> "resultA").thenApply(resultA -> resultA + " resultB").join());
```

#### 4、对计算速度进行选用

谁快用谁

applyToEither

```java
public class CompletableFutureDemo5{
    public static void main(String[] args) throws ExecutionException, InterruptedException{
        CompletableFuture<Integer> completableFuture1 = CompletableFuture.supplyAsync(() -> {
            System.out.println(Thread.currentThread().getName() + "\t" + "---come in ");
            //暂停几秒钟线程
            try { TimeUnit.SECONDS.sleep(2); } catch (InterruptedException e) { e.printStackTrace(); }
            return 10;
        });

        CompletableFuture<Integer> completableFuture2 = CompletableFuture.supplyAsync(() -> {
            System.out.println(Thread.currentThread().getName() + "\t" + "---come in ");
            try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }
            return 20;
        });

        CompletableFuture<Integer> thenCombineResult = completableFuture1.applyToEither(completableFuture2,f -> {
            System.out.println(Thread.currentThread().getName() + "\t" + "---come in ");
            return f + 1;
        });

        System.out.println(Thread.currentThread().getName() + "\t" + thenCombineResult.get());
    }
}
```

#### 5、对计算结果进行合并

两个CompletionStage任务都完成后，最终能把两个任务的结果一起交给thenCombine 来处理

先完成的先等着，等待其它分支任务



thenCombine

code标准版，好理解先拆分

```java
public class CompletableFutureDemo2{
    public static void main(String[] args) throws ExecutionException, InterruptedException{
        CompletableFuture<Integer> completableFuture1 = CompletableFuture.supplyAsync(() -> {
            System.out.println(Thread.currentThread().getName() + "\t" + "---come in ");
            return 10;
        });

        CompletableFuture<Integer> completableFuture2 = CompletableFuture.supplyAsync(() -> {
            System.out.println(Thread.currentThread().getName() + "\t" + "---come in ");
            return 20;
        });

        CompletableFuture<Integer> thenCombineResult = completableFuture1.thenCombine(completableFuture2, (x, y) -> {
            System.out.println(Thread.currentThread().getName() + "\t" + "---come in ");
            return x + y;
        });
        
        System.out.println(thenCombineResult.get());
    }
}
```

code表达式

```java
public class CompletableFutureDemo6{
    public static void main(String[] args) throws ExecutionException, InterruptedException{
        CompletableFuture<Integer> thenCombineResult = CompletableFuture.supplyAsync(() -> {
            System.out.println(Thread.currentThread().getName() + "\t" + "---come in 1");
            return 10;
        }).thenCombine(CompletableFuture.supplyAsync(() -> {
            System.out.println(Thread.currentThread().getName() + "\t" + "---come in 2");
            return 20;
        }), (x,y) -> {
            System.out.println(Thread.currentThread().getName() + "\t" + "---come in 3");
            return x + y;
        }).thenCombine(CompletableFuture.supplyAsync(() -> {
            System.out.println(Thread.currentThread().getName() + "\t" + "---come in 4");
            return 30;
        }),(a,b) -> {
            System.out.println(Thread.currentThread().getName() + "\t" + "---come in 5");
            return a + b;
        });
        System.out.println("-----主线程结束，END");
        System.out.println(thenCombineResult.get());


        // 主线程不要立刻结束，否则CompletableFuture默认使用的线程池会立刻关闭:
        try { TimeUnit.SECONDS.sleep(10); } catch (InterruptedException e) { e.printStackTrace(); }
    }
}
```

### 8、分支合并框架

Fork：把一个复杂任务进行分拆，大事化小

Join：把分拆任务的结果进行合并

![image](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/1614161705639-4b976bd8-4f72-4667-872a-6f5071b4405e.png)

#### 1、相关类

##### 1、ForkJoinPool

![image](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/1614161713661-c27a4d4c-134a-4f28-be61-65fd50270b3a.png)

##### 2、ForkJoinTask

![image](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/1614161726172-14ae279d-84af-4616-9daf-04cb700a151e.png)

##### 3、RecursiveTask

![image](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/1614161734753-741e762e-7430-4910-a3c0-5e40803f7850.png)

```java
// 递归任务：继承后可以实现递归(自己调自己)调用的任务
 class Fibonacci extends RecursiveTask<Integer> {
   final int n;
   Fibonacci(int n) { this.n = n; }
   Integer compute() {
     if (n <= 1)
       return n;
     Fibonacci f1 = new Fibonacci(n - 1);
     f1.fork();
     Fibonacci f2 = new Fibonacci(n - 2);
     return f2.compute() + f1.join();
   }
 }
```

#### 2、示例

```java
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.ForkJoinTask;
import java.util.concurrent.RecursiveTask;

class MyTask extends RecursiveTask<Integer>{
    private static final Integer ADJUST_VALUE = 10;
    private int begin;
    private int end;
    private int result;

    public MyTask(int begin, int end) {
        this.begin = begin;
        this.end = end;
    }

    @Override
    protected Integer compute() {
        if((end - begin)<=ADJUST_VALUE){
           for(int i =begin;i <= end;i++){
                result = result + i;
           }
        }else{
            int middle = (begin + end)/2;
            MyTask task01 = new MyTask(begin,middle);
            MyTask task02 = new MyTask(middle+1,end);
            task01.fork();
            task02.fork();
            result =  task01.join() + task02.join();
        }


        return result;
    }
}


/**
 * 分支合并例子
 * ForkJoinPool
 * ForkJoinTask
 * RecursiveTask
 */
public class ForkJoinDemo {

    public static void main(String[] args) throws ExecutionException, InterruptedException {

        MyTask myTask = new MyTask(0,100);
        ForkJoinPool forkJoinPool = new ForkJoinPool();
        ForkJoinTask<Integer> forkJoinTask = forkJoinPool.submit(myTask);

        System.out.println(forkJoinTask.get());

        forkJoinPool.shutdown();
    }
}
```





## 四、Java“锁”事

### 1、Lock

![image](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/1614161410285-50f57395-d195-4f93-bed4-7b7dffaf078b.png)

```java
// Lock implementations provide more extensive locking operations than can be obtained using synchronized methods and statements. They allow more flexible structuring, may have quite different properties, and may support multiple associated Condition objects.

// 锁实现提供了比使用同步方法和语句可以获得的更广泛的锁操作。它们允许更灵活的结构，可能具有非常不同的属性，并且可能支持多个关联的条件对象
```

### 2、synchronized与Lock的区别

1. 首先synchronized是java内置关键字，在jvm层面，Lock是个java类；
2. synchronized无法判断是否获取锁的状态，Lock可以判断是否获取到锁；
3. synchronized会自动释放锁(a 线程执行完同步代码会释放锁 ；b 线程执行过程中发生异常会释放锁)，Lock需在finally中手工释放锁（unlock()方法释放锁），否则容易造成线程死锁；
4. 用synchronized关键字的两个线程1和线程2，如果当前线程1获得锁，线程2线程等待。如果线程1阻塞，线程2则会一直等待下去，而Lock锁就不一定会等待下去，如果尝试获取不到锁，线程可以不用一直等待就结束了；
5. synchronized的锁可重入、不可中断、非公平，而Lock锁可重入、可判断、可公平（两者皆可）
6. Lock锁适合大量同步的代码的同步问题，synchronized锁适合代码少量的同步问题。

### 3、synchronized

1. 修饰实例方法，作用于当前实例，进入同步代码前需要先获取实例的锁
2. 修饰静态方法，作用于类的Class对象，进入修饰的静态方法前需要先获取类的Class对象的锁
3. 修饰代码块，需要指定加锁对象(记做lockobj)，在进入同步代码块前需要先获取lockobj的锁

#### 1、synchronized作用于实例对象

所谓实例对象锁就是用synchronized修饰实例对象的实例方法，注意是**实例方法**，不是**静态方法**，如：

```java
public class Demo2 {
    int num = 0;
    public synchronized void add() {
        num++;
    }
    public static class T extends Thread {
        private Demo2 demo2;
        public T(Demo2 demo2) {
            this.demo2 = demo2;
        }
        @Override
        public void run() {
            for (int i = 0; i < 10000; i++) {
                this.demo2.add();
            }
        }
    }
    public static void main(String[] args) throws InterruptedException {
        Demo2 demo2 = new Demo2();
        T t1 = new T(demo2);
        T t2 = new T(demo2);
        t1.start();
        t2.start();
        t1.join();
        t2.join();
        System.out.println(demo2.num);
    }
}
```

main()方法中创建了一个对象demo2和2个线程t1、t2，t1、t2中调用demo2的add()方法10000次，add()方法中执行了num++，num++实际上是分3步，获取num，然后将num+1，然后将结果赋值给num，如果t2在t1读取num和num+1之间获取了num的值，那么t1和t2会读取到同样的值，然后执行num++，两次操作之后num是相同的值，最终和期望的结果不一致，造成了线程安全失败，因此我们对add方法加了synchronized来保证线程安全。

注意：m1()方法是实例方法，两个线程操作m1()时，需要先获取demo2的锁，没有获取到锁的，将等待，直到其他线程释放锁为止。

synchronize作用于实例方法需要注意：

1. 实例方法上加synchronized，线程安全的前提是，多个线程操作的是**同一个实例**，如果多个线程作用于不同的实例，那么线程安全是无法保证的
2. 同一个实例的多个实例方法上有synchronized，这些方法都是互斥的，同一时间只允许一个线程操作**同一个实例的其中的一个synchronized方法**

#### 2、synchronized作用于静态方法

当synchronized作用于静态方法时，锁的对象就是当前类的Class对象。如：

```java
public class Demo3 {
    static int num = 0;
    public static synchronized void m1() {
        for (int i = 0; i < 10000; i++) {
            num++;
        }
    }
    public static class T1 extends Thread {
        @Override
        public void run() {
            Demo3.m1();
        }
    }
    public static void main(String[] args) throws InterruptedException {
        T1 t1 = new T1();
        T1 t2 = new T1();
        T1 t3 = new T1();
        t1.start();
        t2.start();
        t3.start();
        //等待3个线程结束打印num
        t1.join();
        t2.join();
        t3.join();
        System.out.println(Demo3.num);
        /**
         * 打印结果：
         * 30000
         */
    }
}
```

上面代码打印30000，和期望结果一致。m1()方法是静态方法，有synchronized修饰，锁用于与Demo3.class对象，和下面的写法类似：

```java
public static void m1() {
    synchronized (Demo4.class) {
        for (int i = 0; i < 10000; i++) {
            num++;
        }
    }
}
```

#### 3、synchronized同步代码块

除了使用关键字修饰实例方法和静态方法外，还可以使用同步代码块，在某些情况下，我们编写的方法体可能比较大，同时存在一些比较耗时的操作，而需要同步的代码又只有一小部分，如果直接对整个方法进行同步操作，可能会得不偿失，此时我们可以使用同步代码块的方式对需要同步的代码进行包裹，这样就无需对整个方法进行同步操作了，同步代码块的使用示例如下：

```java
public class Demo5 implements Runnable {
    static Demo5 instance = new Demo5();
    static int i = 0;
    @Override
    public void run() {
        //省略其他耗时操作....
        //使用同步代码块对变量i进行同步操作,锁对象为instance
        synchronized (instance) {
            for (int j = 0; j < 10000; j++) {
                i++;
            }
        }
    }
    public static void main(String[] args) throws InterruptedException {
        Thread t1 = new Thread(instance);
        Thread t2 = new Thread(instance);
        t1.start();
        t2.start();
        t1.join();
        t2.join();
        System.out.println(i);
    }
}
```

从代码看出，将synchronized作用于一个给定的实例对象instance，即当前实例对象就是锁对象，每次当线程进入synchronized包裹的代码块时就会要求当前线程持有instance实例对象锁，如果当前有其他线程正持有该对象锁，那么新到的线程就必须等待，这样也就保证了每次只有一个线程执行i++;操作。当然除了instance作为对象外，我们还可以使用this对象(代表当前实例)或者当前类的class对象作为锁，如下代码：

```java
//this,当前实例对象锁
synchronized(this){
    for(int j=0;j<1000000;j++){
        i++;
    }
}
//class对象锁
synchronized(Demo5.class){
    for(int j=0;j<1000000;j++){
        i++;
    }
}
```

分析代码是否互斥的方法，先找出synchronized作用的对象是谁，如果多个线程操作的方法中synchronized作用的锁对象一样，那么这些线程同时异步执行这些方法就是互斥的。如下代码:

```java
public class Demo6 {
    //作用于当前类的实例对象
    public synchronized void m1() {
    }
    //作用于当前类的实例对象
    public synchronized void m2() {
    }
    //作用于当前类的实例对象
    public void m3() {
        synchronized (this) {
        }
    }
    //作用于当前类Class对象
    public static synchronized void m4() {
    }
    //作用于当前类Class对象
    public static void m5() {
        synchronized (Demo6.class) {
        }
    }
    public static class T extends Thread{
        Demo6 demo6;
        public T(Demo6 demo6) {
            this.demo6 = demo6;
        }
        @Override
        public void run() {
            super.run();
        }
    }
    public static void main(String[] args) {
        Demo6 d1 = new Demo6();
        Thread t1 = new Thread(() -> {
            d1.m1();
        });
        t1.start();
        Thread t2 = new Thread(() -> {
            d1.m2();
        });
        t2.start();
        Thread t3 = new Thread(() -> {
            d1.m2();
        });
        t3.start();
        Demo6 d2 = new Demo6();
        Thread t4 = new Thread(() -> {
            d2.m2();
        });
        t4.start();
        Thread t5 = new Thread(() -> {
            Demo6.m4();
        });
        t5.start();
        Thread t6 = new Thread(() -> {
            Demo6.m5();
        });
        t6.start();
    }
}
```

分析上面代码：

1. 线程t1、t2、t3中调用的方法都需要获取d1的锁，所以他们是互斥的
2. t1/t2/t3这3个线程和t4不互斥，他们可以同时运行，因为前面三个线程依赖于d1的锁，t4依赖于d2的锁
3. t5、t6都作用于当前类的Class对象锁，所以这两个线程是互斥的，和其他几个线程不互斥

### 4、ReentrantLock

ReentrantLock是Lock的默认实现，在聊ReentranLock之前，我们需要先弄清楚一些概念：

1. 可重入锁：可重入锁是指同一个线程可以多次获得同一把锁；ReentrantLock和关键字Synchronized都是可重入锁
2. 可中断锁：可中断锁时子线程在获取锁的过程中，是否可以相应线程中断操作。synchronized是不可中断的，ReentrantLock是可中断的
3. 公平锁和非公平锁：公平锁是指多个线程尝试获取同一把锁的时候，获取锁的顺序按照线程到达的先后顺序获取，而不是随机插队的方式获取。synchronized是非公平锁，而ReentrantLock是两种都可以实现，不过默认是非公平锁

#### 1、synchronized的局限性

synchronized是java内置的关键字，它提供了一种独占的加锁方式。synchronized的获取和释放锁由jvm实现，用户不需要显示的释放锁，非常方便，然而synchronized也有一定的局限性，例如：

1. 当线程尝试获取锁的时候，如果获取不到锁会一直阻塞，这个阻塞的过程，用户无法控制
2. 如果获取锁的线程进入休眠或者阻塞，除非当前线程异常，否则其他线程尝试获取锁必须一直等待

JDK1.5之后发布，加入了Doug Lea实现的java.util.concurrent包。包内提供了Lock类，用来提供更多扩展的加锁功能。Lock弥补了synchronized的局限，提供了更加细粒度的加锁功能。

#### 2、ReentrantLock基本使用

我们使用3个线程来对一个共享变量++操作，先使用**synchronized**实现，然后使用**ReentrantLock**实现。

**synchronized方式**：

```java
public class Demo2 {
    private static int num = 0;
    private static synchronized void add() {
        num++;
    }
    public static class T extends Thread {
        @Override
        public void run() {
            for (int i = 0; i < 10000; i++) {
                Demo2.add();
            }
        }
    }
    public static void main(String[] args) throws InterruptedException {
        T t1 = new T();
        T t2 = new T();
        T t3 = new T();
        t1.start();
        t2.start();
        t3.start();
        t1.join();
        t2.join();
        t3.join();
        System.out.println(Demo2.num);
    }
}
```

**ReentrantLock方式**：

```java
import java.util.concurrent.locks.ReentrantLock;

public class Demo3 {
    private static int num = 0;
    private static ReentrantLock lock = new ReentrantLock();
    private static void add() {
        lock.lock();
        try {
            num++;
        } finally {
            lock.unlock();
        }
    }
    public static class T extends Thread {
        @Override
        public void run() {
            for (int i = 0; i < 10000; i++) {
                Demo3.add();
            }
        }
    }
    public static void main(String[] args) throws InterruptedException {
        T t1 = new T();
        T t2 = new T();
        T t3 = new T();
        t1.start();
        t2.start();
        t3.start();
        t1.join();
        t2.join();
        t3.join();
        System.out.println(Demo3.num);
    }
}
```

**ReentrantLock的使用过程：**

1. **创建锁：ReentrantLock lock = new ReentrantLock();**
2. **获取锁：lock.lock()**
3. **释放锁：lock.unlock();**

对比上面的代码，与关键字synchronized相比，ReentrantLock锁有明显的操作过程，开发人员必须手动的指定何时加锁，何时释放锁，正是因为这样手动控制，ReentrantLock对逻辑控制的灵活度要远远胜于关键字synchronized，上面代码需要注意**lock.unlock()**一定要放在finally中，否则，若程序出现了异常，锁没有释放，那么其他线程就再也没有机会获取这个锁了。

#### 3、ReentrantLock获取锁的过程是可中断的

对于synchronized关键字，如果一个线程在等待获取锁，最终只有2种结果：

1. 要么获取到锁然后继续后面的操作
2. 要么一直等待，直到其他线程释放锁为止

而ReentrantLock提供了另外一种可能，就是在等待获取锁的过程中（**发起获取锁请求到还未获取到锁这段时间内**）是可以被中断的，也就是说在等待锁的过程中，程序可以根据需要取消获取锁的请求。有些使用这个操作是非常有必要的。比如：你和好朋友越好一起去打球，如果你等了半小时朋友还没到，突然你接到一个电话，朋友由于突发状况，不能来了，那么你一定达到回府。中断操作正是提供了一套类似的机制，如果一个线程正在等待获取锁，那么它依然可以收到一个通知，被告知无需等待，可以停止工作了。

示例代码：

```java
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.ReentrantLock;

public class Demo6 {
    private static ReentrantLock lock1 = new ReentrantLock(false);
    private static ReentrantLock lock2 = new ReentrantLock(false);
    public static class T extends Thread {
        int lock;
        public T(String name, int lock) {
            super(name);
            this.lock = lock;
        }
        @Override
        public void run() {
            try {
                if (this.lock == 1) {
                    lock1.lockInterruptibly();
                    TimeUnit.SECONDS.sleep(1);
                    lock2.lockInterruptibly();
                } else {
                    lock2.lockInterruptibly();
                    TimeUnit.SECONDS.sleep(1);
                    lock1.lockInterruptibly();
                }
            } catch (InterruptedException e) {
                System.out.println("中断标志:" + this.isInterrupted());
                e.printStackTrace();
            } finally {
                if (lock1.isHeldByCurrentThread()) {
                    lock1.unlock();
                }
                if (lock2.isHeldByCurrentThread()) {
                    lock2.unlock();
                }
            }
        }
    }
    public static void main(String[] args) throws InterruptedException {
        T t1 = new T("t1", 1);
        T t2 = new T("t2", 2);
        t1.start();
        t2.start();
    }
}
```

先运行一下上面代码，发现程序无法结束，使用jstack查看线程堆栈信息，发现2个线程死锁了。

```java
Found one Java-level deadlock:
=============================
"t2":
  waiting for ownable synchronizer 0x0000000717380c20, (a java.util.concurrent.locks.ReentrantLock$NonfairSync),
  which is held by "t1"
"t1":
  waiting for ownable synchronizer 0x0000000717380c50, (a java.util.concurrent.locks.ReentrantLock$NonfairSync),
  which is held by "t2
```

lock1被线程t1占用，lock2被线程t2占用，线程t1在等待获取lock2，线程t2在等待获取lock1，都在相互等待获取对方持有的锁，最终产生了死锁，如果是在synchronized关键字情况下发生了死锁现象，程序是无法结束的。

我们对上面代码改造一下，线程t2一直无法获取到lock1，那么等待5秒之后，我们中断获取锁的操作。主要修改一下main方法，如下：

```java
T t1 = new T("t1", 1);
T t2 = new T("t2", 2);
t1.start();
t2.start();
TimeUnit.SECONDS.sleep(5);
t2.interrupt();
```

新增了2行代码`TimeUnit.SECONDS.sleep(5);t2.interrupt();`，程序可以结束了，运行结果：

```java
java.lang.InterruptedException
    at java.util.concurrent.locks.AbstractQueuedSynchronizer.doAcquireInterruptibly(AbstractQueuedSynchronizer.java:898)
    at java.util.concurrent.locks.AbstractQueuedSynchronizer.acquireInterruptibly(AbstractQueuedSynchronizer.java:1222)
    at java.util.concurrent.locks.ReentrantLock.lockInterruptibly(ReentrantLock.java:335)
    at com.itsoku.chat06.Demo6$T.run(Demo6.java:31)
中断标志:false
```

从上面信息中可以看出，代码的31行触发了异常，**中断标志输出：false**

![ec24264d-651f-4eb6-aa60-bb98a3098f78](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/ec24264d-651f-4eb6-aa60-bb98a3098f78.png)

t2在31行一直获取不到lock1的锁，主线程中等待了5秒之后，t2线程调用了`interrupt()`方法，将线程的中断标志置为true，此时31行会触发`InterruptedException`异常，然后线程t2可以继续向下执行，释放了lock2的锁，然后线程t1可以正常获取锁，程序得以继续进行。线程发送中断信号触发InterruptedException异常之后，中断标志将被清空。

关于获取锁的过程中被中断，注意几点:

1. **ReentrankLock中必须使用实例方法`lockInterruptibly()`获取锁时，在线程调用interrupt()方法之后，才会引发`InterruptedException`异常**
2. **线程调用interrupt()之后，线程的中断标志会被置为true**
3. **触发InterruptedException异常之后，线程的中断标志会被清空，即置为false**
4. **所以当线程调用interrupt()引发InterruptedException异常，中断标志的变化是:false->true->false**

#### 4、ReentrantLock锁申请等待限时

申请锁等待限时是什么意思？一般情况下，获取锁的时间我们是不知道的，synchronized关键字获取锁的过程中，只能等待其他线程把锁释放之后才能够有机会获取到锁。所以获取锁的时间有长有短。如果获取锁的时间能够设置超时时间，那就非常好了。

ReentrantLock刚好提供了这样功能，给我们提供了获取锁限时等待的方法`tryLock()`，可以选择传入时间参数，表示等待指定的时间，无参则表示立即返回锁申请的结果：true表示获取锁成功，false表示获取锁失败。

**tryLock无参方法**

看一下源码中tryLock方法：

```java
public boolean tryLock()
```

返回boolean类型的值，此方法会立即返回，结果表示获取锁是否成功，示例：

```java
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.ReentrantLock;

public class Demo8 {
    private static ReentrantLock lock1 = new ReentrantLock(false);
    public static class T extends Thread {
        public T(String name) {
            super(name);
        }
        @Override
        public void run() {
            try {
                System.out.println(System.currentTimeMillis() + ":" + this.getName() + "开始获取锁!");
                //获取锁超时时间设置为3秒，3秒内是否能否获取锁都会返回
                if (lock1.tryLock()) {
                    System.out.println(System.currentTimeMillis() + ":" + this.getName() + "获取到了锁!");
                    //获取到锁之后，休眠5秒
                    TimeUnit.SECONDS.sleep(5);
                } else {
                    System.out.println(System.currentTimeMillis() + ":" + this.getName() + "未能获取到锁!");
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            } finally {
                if (lock1.isHeldByCurrentThread()) {
                    lock1.unlock();
                }
            }
        }
    }
    public static void main(String[] args) throws InterruptedException {
        T t1 = new T("t1");
        T t2 = new T("t2");
        t1.start();
        t2.start();
    }
}
```

代码中获取锁成功之后，休眠5秒，会导致另外一个线程获取锁失败，运行代码，输出：

```java
1563356291081:t2开始获取锁!
1563356291081:t2获取到了锁!
1563356291081:t1开始获取锁!
1563356291081:t1未能获取到锁!
```

**tryLock有参方法**

可以明确设置获取锁的超时时间，该方法签名：

```java
public boolean tryLock(long timeout, TimeUnit unit) throws InterruptedException
```

该方法在指定的时间内不管是否可以获取锁，都会返回结果，返回true，表示获取锁成功，返回false表示获取失败。此方法有2个参数，第一个参数是时间类型，是一个枚举，可以表示时、分、秒、毫秒等待，使用比较方便，第1个参数表示在时间类型上的时间长短。此方法在执行的过程中，如果调用了线程的中断interrupt()方法，会触发InterruptedException异常。

```java
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.ReentrantLock;

public class Demo7 {
    private static ReentrantLock lock1 = new ReentrantLock(false);
    public static class T extends Thread {
        public T(String name) {
            super(name);
        }
        @Override
        public void run() {
            try {
                System.out.println(System.currentTimeMillis() + ":" + this.getName() + "开始获取锁!");
                //获取锁超时时间设置为3秒，3秒内是否能否获取锁都会返回
                if (lock1.tryLock(3, TimeUnit.SECONDS)) {
                    System.out.println(System.currentTimeMillis() + ":" + this.getName() + "获取到了锁!");
                    //获取到锁之后，休眠5秒
                    TimeUnit.SECONDS.sleep(5);
                } else {
                    System.out.println(System.currentTimeMillis() + ":" + this.getName() + "未能获取到锁!");
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            } finally {
                if (lock1.isHeldByCurrentThread()) {
                    lock1.unlock();
                }
            }
        }
    }
    public static void main(String[] args) throws InterruptedException {
        T t1 = new T("t1");
        T t2 = new T("t2");
        t1.start();
        t2.start();
    }
}
```

程序中调用了ReentrantLock的实例方法`tryLock(3, TimeUnit.SECONDS)`，表示获取锁的超时时间是3秒，3秒后不管是否能否获取锁，该方法都会有返回值，获取到锁之后，内部休眠了5秒，会导致另外一个线程获取锁失败。

运行程序，输出：

```java
1563355512901:t2开始获取锁!
1563355512901:t1开始获取锁!
1563355512902:t2获取到了锁!
1563355515904:t1未能获取到锁!
```

输出结果中分析，t2获取到锁了，然后休眠了5秒，t1获取锁失败，t1打印了2条信息，时间相差3秒左右。

**关于tryLock()方法和tryLock(long timeout, TimeUnit unit)方法，说明一下：**

1. 都会返回boolean值，结果表示获取锁是否成功
2. tryLock()方法，不管是否获取成功，都会立即返回；而有参的tryLock方法会尝试在指定的时间内去获取锁，中间会阻塞的现象，在指定的时间之后会不管是否能够获取锁都会返回结果
3. tryLock()方法不会响应线程的中断方法；而有参的tryLock方法会响应线程的中断方法，而触发`InterruptedException`异常，这个从2个方法的声明上可以可以看出来

#### 5、ReentrantLock其他常用的方法

1. isHeldByCurrentThread：实例方法，判断当前线程是否持有ReentrantLock的锁，上面代码中有使用过。

**获取锁的4种方法对比**

| 获取锁的方法                         | 是否立即响应(不会阻塞) | 是否响应中断 |
| ------------------------------------ | ---------------------- | ------------ |
| lock()                               | ×                      | ×            |
| lockInterruptibly()                  | ×                      | √            |
| tryLock()                            | √                      | ×            |
| tryLock(long timeout, TimeUnit unit) | ×                      | √            |

#### 6、总结

1. ReentrantLock可以实现公平锁和非公平锁
2. ReentrantLock默认实现的是非公平锁
3. ReentrantLock的获取锁和释放锁必须成对出现，锁了几次，也要释放几次
4. 释放锁的操作必须放在finally中执行
5. lockInterruptibly()实例方法可以相应线程的中断方法，调用线程的interrupt()方法时，lockInterruptibly()方法会触发`InterruptedException`异常
6. 关于`InterruptedException`异常说一下，看到方法声明上带有 `throws InterruptedException`，表示该方法可以相应线程中断，调用线程的interrupt()方法时，这些方法会触发`InterruptedException`异常，触发InterruptedException时，线程的中断中断状态会被清除。所以如果程序由于调用`interrupt()`方法而触发`InterruptedException`异常，线程的标志由默认的false变为ture，然后又变为false
7. 实例方法tryLock()会尝试获取锁，会立即返回，返回值表示是否获取成功
8. 实例方法tryLock(long timeout, TimeUnit unit)会在指定的时间内尝试获取锁，指定的时间内是否能够获取锁，都会返回，返回值表示是否获取锁成功，该方法会响应线程的中断

### 5、悲观锁

认为自己在使用数据的时候一定有别的线程来修改数据，因此在获取数据的时候会先加锁，确保数据不会被别的线程修改。

synchronized关键字和Lock的实现类都是悲观锁

适合写操作多的场景，先加锁可以保证写操作时数据正确。

显式的锁定之后再操作同步资源

```java
//=============悲观锁的调用方式
public synchronized void m1()
{
    //加锁后的业务逻辑......
}

// 保证多个线程使用的是同一个lock对象的前提下
ReentrantLock lock = new ReentrantLock();
public void m2() {
    lock.lock();
    try {
        // 操作同步资源
    }finally {
        lock.unlock();
    }
}
```

### 6、乐观锁

```java
//=============乐观锁的调用方式
// 保证多个线程使用的是同一个AtomicInteger
private AtomicInteger atomicInteger = new AtomicInteger();
atomicInteger.incrementAndGet();
```

​		乐观锁认为自己在使用数据时不会有别的线程修改数据，所以不会添加锁，只是在更新数据的时候去判断之前有没有别的线程更新了这个数据。

如果这个数据没有被更新，当前线程将自己修改的数据成功写入。如果数据已经被其他线程更新，则根据不同的实现方式执行不同的操作

乐观锁在Java中是通过使用无锁编程来实现，最常采用的是CAS算法，Java原子类中的递增操作就通过CAS自旋实现的。

适合读操作多的场景，不加锁的特点能够使其读操作的性能大幅提升。

乐观锁则直接去操作同步资源，是一种无锁算法，得之我幸不得我命，再抢

乐观锁一般有两种实现方式：

1. 采用版本号机制
2. CAS（Compare-and-Swap，即比较并替换）算法实现


### 7、八锁案例

#### 1、JDK源码(notify方法)

![image-20210907200227293](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210907200227293-16310161483121.png)

#### 2、8种锁的案例实际体现在3个地方

1. 作用于实例方法，当前实例加锁，进入同步代码前要获得当前实例的锁；
2. 作用于代码块，对括号里配置的对象加锁。
3. 作用于静态方法，当前类加锁，进去同步代码前要获得当前类对象的锁；

##### 1、标准访问有ab两个线程，请问先打印邮件还是短信

```JAVA
class Phone //资源类
{
    public synchronized void sendEmail()
    {
        System.out.println("-------sendEmail");
    }

    public synchronized void sendSMS()
    {
        System.out.println("-------sendSMS");
    }
}

public class Lock8Demo
{
    public static void main(String[] args)//一切程序的入口，主线程
    {
        Phone phone = new Phone();//资源类1

        new Thread(() -> {
            phone.sendEmail();
        },"a").start();

        //暂停毫秒
        try { TimeUnit.MILLISECONDS.sleep(300); } catch (InterruptedException e) { e.printStackTrace(); }

        new Thread(() -> {
            phone.sendSMS();
        },"b").start();

    }
}
```

```java
-------sendEmail
-------sendSMS
```

##### 2、sendEmail方法暂停3秒钟，请问先打印邮件还是短信

```java
class Phone //资源类
{
    public synchronized void sendEmail()
    {
        //暂停几秒钟线程
        try { TimeUnit.SECONDS.sleep(3); } catch (InterruptedException e) { e.printStackTrace(); }
        System.out.println("-------sendEmail");
    }

    public synchronized void sendSMS()
    {
        System.out.println("-------sendSMS");
    }
}

public class Lock8Demo
{
    public static void main(String[] args)//一切程序的入口，主线程
    {
        Phone phone = new Phone();//资源类1

        new Thread(() -> {
            phone.sendEmail();
        },"a").start();

        //暂停毫秒
        try { TimeUnit.MILLISECONDS.sleep(300); } catch (InterruptedException e) { e.printStackTrace(); }

        new Thread(() -> {
            phone.sendSMS();
        },"b").start();

    }
}
```

```java
-------sendEmail
-------sendSMS
```

##### 1-2结论

```
一个对象里面如果有多个synchronized方法，某一个时刻内，只要一个线程去调用其中的一个synchronized方法了，
其它的线程都只能等待，换句话说，某一个时刻内，只能有唯一的一个线程去访问这些synchronized方法
锁的是当前对象this，被锁定后，其它的线程都不能进入到当前对象的其它的synchronized方法
```

##### 3、新增一个普通的hello方法，请问先打印邮件还是hello

```java
class Phone //资源类
{
    public synchronized void sendEmail()
    {
        //暂停几秒钟线程
        try { TimeUnit.SECONDS.sleep(3); } catch (InterruptedException e) { e.printStackTrace(); }
        System.out.println("-------sendEmail");
    }

    public synchronized void sendSMS()
    {
        System.out.println("-------sendSMS");
    }

    public void hello()
    {
        System.out.println("-------hello");
    }
}

public class Lock8Demo
{
    public static void main(String[] args)//一切程序的入口，主线程
    {
        Phone phone = new Phone();//资源类1

        new Thread(() -> {
            phone.sendEmail();
        },"a").start();

        //暂停毫秒
        try { TimeUnit.MILLISECONDS.sleep(300); } catch (InterruptedException e) { e.printStackTrace(); }

        new Thread(() -> {
            phone.hello();
        },"b").start();

    }
}
```

```java
-------hello
-------sendEmail
```

##### 4、有两部手机，请问先打印邮件还是短信

```java
class Phone //资源类
{
    public synchronized void sendEmail()
    {
        //暂停几秒钟线程
        try { TimeUnit.SECONDS.sleep(3); } catch (InterruptedException e) { e.printStackTrace(); }
        System.out.println("-------sendEmail");
    }

    public synchronized void sendSMS()
    {
        System.out.println("-------sendSMS");
    }

    public void hello()
    {
        System.out.println("-------hello");
    }
}

public class Lock8Demo
{
    public static void main(String[] args)//一切程序的入口，主线程
    {
        Phone phone = new Phone();//资源类1
        Phone phone2 = new Phone();//资源类2

        new Thread(() -> {
            phone.sendEmail();
        },"a").start();

        //暂停毫秒
        try { TimeUnit.MILLISECONDS.sleep(300); } catch (InterruptedException e) { e.printStackTrace(); }

        new Thread(() -> {
            phone2.sendSMS();
        },"b").start();
    }
}
```

```java
-------sendSMS
-------sendEmail
```

##### 3-4结论

```
加个普通方法后发现和同步锁无关,hello
换成两个对象后，不是同一把锁了，情况立刻变化。
```

##### 5、两个静态同步方法，同1部手机，请问先打印邮件还是短信

```java
class Phone //资源类
{
    public static synchronized void sendEmail()
    {
        //暂停几秒钟线程
        try { TimeUnit.SECONDS.sleep(3); } catch (InterruptedException e) { e.printStackTrace(); }
        System.out.println("-------sendEmail");
    }

    public static synchronized void sendSMS()
    {
        System.out.println("-------sendSMS");
    }

    public void hello()
    {
        System.out.println("-------hello");
    }
}

public class Lock8Demo
{
    public static void main(String[] args)//一切程序的入口，主线程
    {
        Phone phone = new Phone();//资源类1

        new Thread(() -> {
            phone.sendEmail();
        },"a").start();

        //暂停毫秒
        try { TimeUnit.MILLISECONDS.sleep(300); } catch (InterruptedException e) { e.printStackTrace(); }

        new Thread(() -> {
            phone.sendSMS();
        },"b").start();
    }
}
```

```java
-------sendEmail
-------sendSMS
```

##### 6、两个静态同步方法， 2部手机，请问先打印邮件还是短信

```java
class Phone //资源类
{
    public static synchronized void sendEmail()
    {
        //暂停几秒钟线程
        try { TimeUnit.SECONDS.sleep(3); } catch (InterruptedException e) { e.printStackTrace(); }
        System.out.println("-------sendEmail");
    }

    public static synchronized void sendSMS()
    {
        System.out.println("-------sendSMS");
    }

    public void hello()
    {
        System.out.println("-------hello");
    }
}

public class Lock8Demo
{
    public static void main(String[] args)//一切程序的入口，主线程
    {
        Phone phone = new Phone();//资源类1
        Phone phone2 = new Phone();//资源类2

        new Thread(() -> {
            phone.sendEmail();
        },"a").start();

        //暂停毫秒
        try { TimeUnit.MILLISECONDS.sleep(300); } catch (InterruptedException e) { e.printStackTrace(); }

        new Thread(() -> {
            phone2.sendSMS();
        },"b").start();
    }
}
```

```java
-------sendEmail
-------sendSMS
```

##### 5-6结论

```
都换成静态同步方法后，情况又变化
三种 synchronized 锁的内容有一些差别:
对于普通同步方法，锁的是当前实例对象，通常指this,具体的一部部手机,所有的普通同步方法用的都是同一把锁——实例对象本身，
对于静态同步方法，锁的是当前类的Class对象，如Phone.class唯一的一个模板
对于同步方法块，锁的是 synchronized 括号内的对象
```

##### 7、1个静态同步方法，1个普通同步方法,同1部手机，请问先打印邮件还是短信

```java
class Phone //资源类
{
    public static synchronized void sendEmail()
    {
        //暂停几秒钟线程
        try { TimeUnit.SECONDS.sleep(3); } catch (InterruptedException e) { e.printStackTrace(); }
        System.out.println("-------sendEmail");
    }

    public synchronized void sendSMS()
    {
        System.out.println("-------sendSMS");
    }

    public void hello()
    {
        System.out.println("-------hello");
    }
}

public class Lock8Demo
{
    public static void main(String[] args)//一切程序的入口，主线程
    {
        Phone phone = new Phone();//资源类1

        new Thread(() -> {
            phone.sendEmail();
        },"a").start();

        //暂停毫秒
        try { TimeUnit.MILLISECONDS.sleep(300); } catch (InterruptedException e) { e.printStackTrace(); }

        new Thread(() -> {
            phone.sendSMS();
        },"b").start();
    }
}
```

```java
-------sendSMS
-------sendEmail
```

##### 8、1个静态同步方法，1个普通同步方法,2部手机，请问先打印邮件还是短信

```java
class Phone //资源类
{
    public static synchronized void sendEmail()
    {
        //暂停几秒钟线程
        try { TimeUnit.SECONDS.sleep(3); } catch (InterruptedException e) { e.printStackTrace(); }
        System.out.println("-------sendEmail");
    }

    public synchronized void sendSMS()
    {
        System.out.println("-------sendSMS");
    }

    public void hello()
    {
        System.out.println("-------hello");
    }
}

public class Lock8Demo
{
    public static void main(String[] args)//一切程序的入口，主线程
    {
        Phone phone = new Phone();//资源类1
        Phone phone2 = new Phone();//资源类2

        new Thread(() -> {
            phone.sendEmail();
        },"a").start();

        //暂停毫秒
        try { TimeUnit.MILLISECONDS.sleep(300); } catch (InterruptedException e) { e.printStackTrace(); }

        new Thread(() -> {
            phone2.sendSMS();
        },"b").start();
    }
}
```

```java
-------sendSMS
-------sendEmail
```

##### 7-8结论

```
当一个线程试图访问同步代码时它首先必须得到锁，退出或抛出异常时必须释放锁。

所有的普通同步方法用的都是同一把锁——实例对象本身，就是new出来的具体实例对象本身,本类this
也就是说如果一个实例对象的普通同步方法获取锁后，该实例对象的其他普通同步方法必须等待获取锁的方法释放锁后才能获取锁。

所有的静态同步方法用的也是同一把锁——类对象本身，就是我们说过的唯一模板Class
具体实例对象this和唯一模板Class，这两把锁是两个不同的对象，所以静态同步方法与普通同步方法之间是不会有竞态条件的
但是一旦一个静态同步方法获取锁后，其他的静态同步方法都必须等待该方法释放锁后才能获取锁。
```

### 8、公平锁和非公平锁

在大多数情况下，锁的申请都是非公平的，也就是说，线程1首先请求锁A，接着线程2也请求了锁A。那么当锁A可用时，是线程1可获得锁还是线程2可获得锁呢？这是不一定的，系统只是会从这个锁的等待队列中随机挑选一个，因此不能保证其公平性。这就好比买票不排队，大家都围在售票窗口前，售票员忙的焦头烂额，也顾及不上谁先谁后，随便找个人出票就完事了，最终导致的结果是，有些人可能一直买不到票。而公平锁，则不是这样，它会按照到达的先后顺序获得资源。公平锁的一大特点是：它不会产生饥饿现象，只要你排队，最终还是可以等到资源的；synchronized关键字默认是有jvm内部实现控制的，是非公平锁。而ReentrantLock运行开发者自己设置锁的公平性。

看一下jdk中ReentrantLock的源码，2个构造方法：

```java
public ReentrantLock() {
    sync = new NonfairSync();
}
public ReentrantLock(boolean fair) {
    sync = fair ? new FairSync() : new NonfairSync();
}
```

默认构造方法创建的是非公平锁。

第2个构造方法，有个fair参数，当fair为true的时候创建的是公平锁，公平锁看起来很不错，不过要实现公平锁，系统内部肯定需要维护一个有序队列，因此公平锁的实现成本比较高，性能相对于非公平锁来说相对低一些。因此，在默认情况下，锁是非公平的，如果没有特别要求，则不建议使用公平锁。

公平锁和非公平锁在程序调度上是很不一样，来一个公平锁示例看一下：

```java
import java.util.concurrent.locks.ReentrantLock;

public class Demo5 {
    private static int num = 0;
    private static ReentrantLock fairLock = new ReentrantLock(true);
    public static class T extends Thread {
        public T(String name) {
            super(name);
        }
        @Override
        public void run() {
            for (int i = 0; i < 5; i++) {
                fairLock.lock();
                try {
                    System.out.println(this.getName() + "获得锁!");
                } finally {
                    fairLock.unlock();
                }
            }
        }
    }
    public static void main(String[] args) throws InterruptedException {
        T t1 = new T("t1");
        T t2 = new T("t2");
        T t3 = new T("t3");
        t1.start();
        t2.start();
        t3.start();
        t1.join();
        t2.join();
        t3.join();
    }
}
```

看一下输出的结果，锁是按照先后顺序获得的。

修改一下上面代码，改为非公平锁试试，如下：

```java
ReentrantLock fairLock = new ReentrantLock(false);
```

从ReentrantLock卖票编码演示公平和非公平现象

```java
import java.util.concurrent.locks.ReentrantLock;

class Ticket
{
    private int number = 30;
    ReentrantLock lock = new ReentrantLock();

    public void sale()
    {
        lock.lock();
        try
        {
            if(number > 0)
            {
                System.out.println(Thread.currentThread().getName()+"卖出第：\t"+(number--)+"\t 还剩下:"+number);
            }
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            lock.unlock();
        }
    }
}

public class SaleTicketDemo
{
    public static void main(String[] args)
    {
        Ticket ticket = new Ticket();

        new Thread(() -> { for (int i = 0; i <35; i++)  ticket.sale(); },"a").start();
        new Thread(() -> { for (int i = 0; i <35; i++)  ticket.sale(); },"b").start();
        new Thread(() -> { for (int i = 0; i <35; i++)  ticket.sale(); },"c").start();
    }
}
```

生活中，排队讲求先来后到视为公平。程序中的公平性也是符合请求锁的绝对时间的，其实就是 FIFO，否则视为不公平

#### 1、源码解读

​		按序排队公平锁，就是判断同步队列是否还有先驱节点的存在(我前面还有人吗?)，如果没有先驱节点才能获取锁；先占先得非公平锁，是不管这个事的，只要能抢获到同步状态就可以

![image-20210916224629198](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210916224629198.png)



#### 2、为什么会有公平锁/非公平锁的设计为什么默认非公平？

1. 恢复挂起的线程到真正锁的获取还是有时间差的，从开发人员来看这个时间微乎其微，但是从CPU的角度来看，这个时间差存在的还是很明显的。所以非公平锁能更充分的利用CPU 的时间片，尽量减少 CPU 空闲状态时间。
2. 使用多线程很重要的考量点是线程切换的开销，当采用非公平锁时，当1个线程请求锁获取同步状态，然后释放同步状态，因为不需要考虑是否还有前驱节点，所以刚释放锁的线程在此刻再次获取同步状态的概率就变得非常大，所以就减少了线程的开销。

#### 3、使⽤公平锁会有什么问题

公平锁保证了排队的公平性，非公平锁霸气的忽视这个规则，所以就有可能导致排队的长时间在排队，也没有机会获取到锁，这就是传说中的 “锁饥饿”

#### 4、什么时候用公平？什么时候用非公平？

如果为了更高的吞吐量，很显然非公平锁是比较合适的，因为节省很多线程切换时间，吞吐量自然就上去了；否则那就用公平锁，大家公平使用。

### 9、可重入锁(又名递归锁)

是指在同一个线程在外层方法获取锁的时候，再进入该线程的内层方法会自动获取锁(前提，锁对象得是同一个对象)，不会因为之前已经获取过还没释放而阻塞。

如果是1个有 synchronized 修饰的递归调用方法，程序第2次进入被自己阻塞了岂不是天大的笑话，出现了作茧自缚。所以Java中ReentrantLock和synchronized都是可重入锁，可重入锁的一个优点是可一定程度避免死锁。



#### 1、“可重入锁”这四个字分开来解释：

```
可：可以。
重：再次。
入：进入。
锁：同步锁。

进入什么:进入同步域（即同步代码块/方法或显式锁锁定的代码）
一句话:一个线程中的多个流程可以获取同一把锁，持有这把同步锁可以再次进入。
自己可以获取自己的内部锁
```

#### 2、可重入锁种类

##### 1、隐式锁（即synchronized关键字使用的锁）默认是可重入锁

```
指的是可重复可递归调用的锁，在外层使用锁之后，在内层仍然可以使用，并且不发生死锁，这样的锁就叫做可重入锁。
简单的来说就是：在一个synchronized修饰的方法或代码块的内部调用本类的其他synchronized修饰的方法或代码块时，是永远可以得到锁的

与可重入锁相反，不可重入锁不可递归调用，递归调用就发生死锁。
```

同步块

```java
public class ReEntryLockDemo{
    public static void main(String[] args){
        final Object objectLockA = new Object();

        new Thread(() -> {
            synchronized (objectLockA){
                System.out.println("-----外层调用");
                synchronized (objectLockA){
                    System.out.println("-----中层调用");
                    synchronized (objectLockA){
                        System.out.println("-----内层调用");
                    }
                }
            }
        },"a").start();
    }
}
```

同步方法

```java
public class ReEntryLockDemo{
    public synchronized void m1(){
        System.out.println("-----m1");
        m2();
    }
    public synchronized void m2(){
        System.out.println("-----m2");
        m3();
    }
    public synchronized void m3(){
        System.out.println("-----m3");
    }

    public static void main(String[] args){
        ReEntryLockDemo reEntryLockDemo = new ReEntryLockDemo();

        reEntryLockDemo.m1();
    }
}
```

##### 2、显式锁（即Lock）也有ReentrantLock这样的可重入锁。

```java
public class Demo4 {
    private static int num = 0;
    private static ReentrantLock lock = new ReentrantLock();
    private static void add() {
        lock.lock();
        lock.lock();
        try {
            num++;
        } finally {
            lock.unlock();
            lock.unlock();
        }
    }
    public static class T extends Thread {
        @Override
        public void run() {
            for (int i = 0; i < 10000; i++) {
                Demo4.add();
            }
        }
    }
    public static void main(String[] args) throws InterruptedException {
        T t1 = new T();
        T t2 = new T();
        T t3 = new T();
        t1.start();
        t2.start();
        t3.start();
        t1.join();
        t2.join();
        t3.join();
        System.out.println(Demo4.num);
    }
}
```

上面代码中add()方法中，当一个线程进入的时候，会执行2次获取锁的操作，运行程序可以正常结束，并输出和期望值一样的30000，假如ReentrantLock是不可重入的锁，那么同一个线程第2次获取锁的时候由于前面的锁还未释放而导致死锁，程序是无法正常结束的。ReentrantLock命名也挺好的Re entrant Lock，和其名字一样，可重入锁。

代码中还有几点需要注意：

1. **lock()方法和unlock()方法需要成对出现，锁了几次，也要释放几次，否则后面的线程无法获取锁了；可以将add中的unlock删除一个事实，上面代码运行将无法结束**
2. **unlock()方法放在finally中执行，保证不管程序是否有异常，锁必定会释放**

```java
/**
 * @create 2020-05-14 11:59
 * 在一个Synchronized修饰的方法或代码块的内部调用本类的其他Synchronized修饰的方法或代码块时，是永远可以得到锁的
 */
public class ReEntryLockDemo{
    static Lock lock = new ReentrantLock();

    public static void main(String[] args){
        new Thread(() -> {
            lock.lock();
            try
            {
                System.out.println("----外层调用lock");
                lock.lock();
                try
                {
                    System.out.println("----内层调用lock");
                }finally {
                    // 这里故意注释，实现加锁次数和释放次数不一样
                    // 由于加锁次数和释放次数不一样，第二个线程始终无法获取到锁，导致一直在等待。
                    lock.unlock(); // 正常情况，加锁几次就要解锁几次
                }
            }finally {
                lock.unlock();
            }
        },"a").start();

        new Thread(() -> {
            lock.lock();
            try
            {
                System.out.println("b thread----外层调用lock");
            }finally {
                lock.unlock();
            }
        },"b").start();

    }
}
```



#### 3、Synchronized的重入的实现机理

​		每个锁对象拥有一个锁计数器和一个指向持有该锁的线程的指针。

​		当执行monitorenter时，如果目标锁对象的计数器为零，那么说明它没有被其他线程所持有，Java虚拟机会将该锁对象的持有线程设置为当前线程，并且将其计数器加1。

​		在目标锁对象的计数器不为零的情况下，如果锁对象的持有线程是当前线程，那么 Java 虚拟机可以将其计数器加1，否则需要等待，直至持有线程释放该锁。

​		当执行monitorexit时，Java虚拟机则需将锁对象的计数器减1。计数器为零代表锁已被释放。

### 10、死锁

​		死锁是指两个或两个以上的线程在执行过程中,因争夺资源而造成的一种互相等待的现象,若无外力干涉那它们都将无法推进下去，如果系统资源充足，进程的资源请求都能够得到满足，死锁出现的可能性就很低，否则就会因争夺有限的资源而陷入死锁。

![图像](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/图像.png)

#### 1、产生死锁主要原因

1. 系统资源不足
2. 进程运行推进的顺序不合适
3. 资源分配不当

```java
public class DeadLockDemo{
    public static void main(String[] args){
        final Object objectLockA = new Object();
        final Object objectLockB = new Object();

        new Thread(() -> {
            synchronized (objectLockA){
                System.out.println(Thread.currentThread().getName()+"\t"+"自己持有A，希望获得B");
                //暂停几秒钟线程
                try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }
                synchronized (objectLockB)
                {
                    System.out.println(Thread.currentThread().getName()+"\t"+"A-------已经获得B");
                }
            }
        },"A").start();

        new Thread(() -> {
            synchronized (objectLockB){
                System.out.println(Thread.currentThread().getName()+"\t"+"自己持有B，希望获得A");
                //暂停几秒钟线程
                try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }
                synchronized (objectLockA){
                    System.out.println(Thread.currentThread().getName()+"\t"+"B-------已经获得A");
                }
            }
        },"B").start();

    }
}
```

#### 2、如何排查死锁

1. 纯命令

```shell
jps -l
jstack 进程编号
```

2. 图形化

```
jconsole
```

## 五、线程间通信

### 1、面试题：两个线程打印

两个线程，一个线程打印1-52，另一个打印字母A-Z打印顺序为12A34B...5152Z

#### 1、synchronized实现

```java
package com.xue.thread;
 
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
 
 
 
class ShareDataOne//资源类{
  private int number = 0;//初始值为零的一个变量
 
  public synchronized void increment() throws InterruptedException {
     //1判断
     if(number !=0 ) {
       this.wait();
     }
     //2干活
     ++number;
     System.out.println(Thread.currentThread().getName()+"\t"+number);
     //3通知
     this.notifyAll();
  }
  
  public synchronized void decrement() throws InterruptedException {
     // 1判断
     if (number == 0) {
       this.wait();
     }
     // 2干活
     --number;
     System.out.println(Thread.currentThread().getName() + "\t" + number);
     // 3通知
     this.notifyAll();
  }
}
 
/**
 * 
 * @Description:
 *现在两个线程，
 * 可以操作初始值为零的一个变量，
 * 实现一个线程对该变量加1，一个线程对该变量减1，
 * 交替，来10轮。 
 * @author xialei
 *
 *  * 笔记：Java里面如何进行工程级别的多线程编写
 * 1 多线程变成模板（套路）-----上
 *     1.1  线程    操作    资源类  
 *     1.2  高内聚  低耦合
 * 2 多线程变成模板（套路）-----下
 *     2.1  判断
 *     2.2  干活
 *     2.3  通知
 
 */
public class NotifyWaitDemoOne{
  public static void main(String[] args){
     ShareDataOne sd = new ShareDataOne();
     new Thread(() -> {
       for (int i = 1; i < 10; i++) {
          try {
            sd.increment();
          } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
          }
       }
     }, "A").start();
     new Thread(() -> {
       for (int i = 1; i < 10; i++) {
          try {
            sd.decrement();
          } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
          }
       }
     }, "B").start();
  }
}
/*
 * * 
 * 2 多线程变成模板（套路）-----下
 *     2.1  判断
 *     2.2  干活
 *     2.3  通知
 * 3 防止虚假唤醒用while
 * 
 * 
 * */
```

#### 2、换成4个线程

​		换成4个线程会导致错误，虚假唤醒

​		原因：在java多线程判断时，不能用if，程序出事出在了判断上面，

突然有一添加的线程进到if了，突然中断了交出控制权，

没有进行验证，而是直接走下去了，加了两次，甚至多次

#### 3、4个线程解决方案

解决虚假唤醒：查看API，java.lang.Object

![image](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/1614161426163-57912cc0-5b3e-4851-93f4-6d7c4c97118b.png)

中断和虚假唤醒是可能产生的，所以要用loop循环，if只判断一次，while是只要唤醒就要拉回来再判断一次。if换成while

#### 4、java8新版实现

![image](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/1614161433565-2c36af0b-fd95-455c-a4a3-7e3bcff3c86b.png)

```java
class BoundedBuffer {
   final Lock lock = new ReentrantLock();
   final Condition notFull  = lock.newCondition(); 
   final Condition notEmpty = lock.newCondition(); 
 
   final Object[] items = new Object[100];
   int putptr, takeptr, count;
 
   public void put(Object x) throws InterruptedException {
     lock.lock();
     try {
       while (count == items.length)
         notFull.await();
       items[putptr] = x;
       if (++putptr == items.length) putptr = 0;
       ++count;
       notEmpty.signal();
     } finally {
       lock.unlock();
     }
   }
```

```java
package com.xue.thread;
 
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
 
import org.omg.IOP.Codec;
 
 
class ShareData//资源类
{
  private int number = 0;//初始值为零的一个变量
 
  private Lock lock = new ReentrantLock();
  private Condition condition  = lock.newCondition(); 
   
  public  void increment() throws InterruptedException 
  {
     
      lock.lock();
         try {
          //判断
          while(number!=0) {
            condition.await();
          }
          //干活
          ++number;
          System.out.println(Thread.currentThread().getName()+" \t "+number);
          //通知
          condition.signalAll();
     } catch (Exception e) {
       e.printStackTrace();
     } finally {
       lock.unlock();
     }
     
  }
  
  
  public  void decrement() throws InterruptedException 
  {
      
      lock.lock();
         try {
          //判断
          while(number!=1) {
            condition.await();
          }
          //干活
          --number;
          System.out.println(Thread.currentThread().getName()+" \t "+number);
          //通知
          condition.signalAll();
     } catch (Exception e) {
       e.printStackTrace();
     } finally {
       lock.unlock();
     }
     
  }
  
  /*public synchronized void increment() throws InterruptedException 
  {
     //判断
     while(number!=0) {
       this.wait();
     }
     //干活
     ++number;
     System.out.println(Thread.currentThread().getName()+" \t "+number);
     //通知
     this.notifyAll();;
  }
  
  public synchronized void decrement() throws InterruptedException 
  {
     //判断
     while(number!=1) {
       this.wait();
     }
     //干活
     --number;
     System.out.println(Thread.currentThread().getName()+" \t "+number);
     //通知
     this.notifyAll();
  }*/
}
 
/**
 * 
 * @Description:
 *现在两个线程，
 * 可以操作初始值为零的一个变量，
 * 实现一个线程对该变量加1，一个线程对该变量减1，
 * 交替，来10轮。 
 *
 *  * 笔记：Java里面如何进行工程级别的多线程编写
 * 1 多线程变成模板（套路）-----上
 *     1.1  线程    操作    资源类  
 *     1.2  高内聚  低耦合
 * 2 多线程变成模板（套路）-----下
 *     2.1  判断
 *     2.2  干活
 *     2.3  通知
 
 */
public class NotifyWaitDemo
{
  public static void main(String[] args)
  {
     ShareData sd = new ShareData();
     new Thread(() -> {
 
       for (int i = 1; i <= 10; i++) {
          try {
            sd.increment();
          } catch (InterruptedException e) {
            e.printStackTrace();
          }
       }
     }, "A").start();
     
     new Thread(() -> {
 
       for (int i = 1; i <= 10; i++) {
          try {
            sd.decrement();
          } catch (InterruptedException e) {
            e.printStackTrace();
          }
       }
     }, "B").start();
     new Thread(() -> {
 
       for (int i = 1; i <= 10; i++) {
          try {
            sd.increment();
          } catch (InterruptedException e) {
            e.printStackTrace();
          }
       }
     }, "C").start();
     new Thread(() -> {
 
       for (int i = 1; i <= 10; i++) {
          try {
            sd.decrement();
          } catch (InterruptedException e) {
            e.printStackTrace();
          }
       }
     }, "D").start();
     
  }
}

/*
 * * 
 * 2 多线程变成模板（套路）-----下
 *     2.1  判断
 *     2.2  干活
 *     2.3  通知
 * 3 防止虚假唤醒用while
 * 
 * 
 * */
```

### 2、线程间定制化调用通信

1、有顺序通知，需要有标识位

2、有一个锁Lock，3把钥匙Condition

3、判断标志位

4、输出线程名+第几次+第几轮

5、修改标志位，通知下一个

```java
package com.xue.thread;
 
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
 
 
class ShareResource
{
  private int number = 1;//1:A 2:B 3:C 
  private Lock lock = new ReentrantLock();
  private Condition c1 = lock.newCondition();
  private Condition c2 = lock.newCondition();
  private Condition c3 = lock.newCondition();
 
  public void print5(int totalLoopNumber)
  {
     lock.lock();
     try 
     {
       //1 判断
       while(number != 1)
       {
          //A 就要停止
          c1.await();
       }
       //2 干活
       for (int i = 1; i <=5; i++) 
       {
          System.out.println(Thread.currentThread().getName()+"\t"+i+"\t totalLoopNumber: "+totalLoopNumber);
       }
       //3 通知
       number = 2;
       c2.signal();
     } catch (Exception e) {
       e.printStackTrace();
     } finally {
       lock.unlock();
     }
  }
  public void print10(int totalLoopNumber)
  {
     lock.lock();
     try 
     {
       //1 判断
       while(number != 2)
       {
          //A 就要停止
          c2.await();
       }
       //2 干活
       for (int i = 1; i <=10; i++) 
       {
          System.out.println(Thread.currentThread().getName()+"\t"+i+"\t totalLoopNumber: "+totalLoopNumber);
       }
       //3 通知
       number = 3;
       c3.signal();
     } catch (Exception e) {
       e.printStackTrace();
     } finally {
       lock.unlock();
     }
  }  
  
  public void print15(int totalLoopNumber)
  {
     lock.lock();
     try 
     {
       //1 判断
       while(number != 3)
       {
          //A 就要停止
          c3.await();
       }
       //2 干活
       for (int i = 1; i <=15; i++) 
       {
          System.out.println(Thread.currentThread().getName()+"\t"+i+"\t totalLoopNumber: "+totalLoopNumber);
       }
       //3 通知
       number = 1;
       c1.signal();
     } catch (Exception e) {
       e.printStackTrace();
     } finally {
       lock.unlock();
     }
  }  
}
 
 
/**
 * 
 * @Description: 
 * 多线程之间按顺序调用，实现A->B->C
 * 三个线程启动，要求如下：
 * 
 * AA打印5次，BB打印10次，CC打印15次
 * 接着
 * AA打印5次，BB打印10次，CC打印15次
 * ......来10轮  
 *
 */
public class ThreadOrderAccess
{
  public static void main(String[] args)
  {
     ShareResource sr = new ShareResource();
     
     new Thread(() -> {
       for (int i = 1; i <=10; i++) 
       {
          sr.print5(i);
       }
     }, "AA").start();
     new Thread(() -> {
       for (int i = 1; i <=10; i++) 
       {
          sr.print10(i);
       }
     }, "BB").start();
     new Thread(() -> {
       for (int i = 1; i <=10; i++) 
       {
          sr.print15(i);
       }
     }, "CC").start();   
  }
}
```

## 六、LockSupport与线程中断

### 1、线程中断机制

##### 1、如何停止、中断一个运行中的线程？？

![fdsfsdf](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/fdsfsdf.png)

##### 2、什么是中断？

首先
		一个线程不应该由其他线程来强制中断或停止，而是应该由线程自己自行停止。所以，Thread.stop, Thread.suspend, Thread.resume 都已经被废弃了。

其次
		在Java中没有办法立即停止一条线程，然而停止线程却显得尤为重要，如取消一个耗时操作。因此，Java提供了一种用于停止线程的机制——中断。

​		中断只是一种协作机制，Java没有给中断增加任何语法，中断的过程完全需要程序员自己实现。若要中断一个线程，你需要手动调用该线程的interrupt方法，该方法也仅仅是将线程对象的中断标识设成true；接着你需要自己写代码不断地检测当前线程的标识位，如果为true，表示别的线程要求这条线程中断，
此时究竟该做什么需要你自己写代码实现。

​		每个线程对象中都有一个标识，用于表示线程是否被中断；该标识位为true表示中断，为false表示未中断；通过调用线程对象的interrupt方法将该线程的标识位设为true；可以在别的线程中调用，也可以在自己的线程中调用

##### 3、中断的相关API方法

| public void interrupt()             | 实例方法，<br/>实例方法interrupt()仅仅是设置线程的中断状态为true，不会停止线程 |
| ----------------------------------- | ------------------------------------------------------------ |
| public static boolean interrupted() | 静态方法，Thread.interrupted();  <br/>判断线程是否被中断，并清除当前中断状态<br/>这个方法做了两件事：<br/>1 返回当前线程的中断状态<br/>2 将当前线程的中断状态设为false<br/> <br/>这个方法有点不好理解，因为连续调用两次的结果可能不一样。 |
| public boolean isInterrupted()      | 实例方法，<br/>判断当前线程是否被中断（通过检查中断标志位）  |

### 2、如何使用中断标识停止线程？

在需要中断的线程中不断监听中断状态，一旦发生中断，就执行相应的中断处理业务逻辑。

#### 1、通过一个volatile变量实现

```java
public class InterruptDemo{
    
	public volatile static boolean exit = false;
    	public static class T extends Thread {
        @Override
        public void run() {
            while (true) {
                //循环处理业务
                if (exit) {
                    break;
                }
            }
        }
    }
    public static void setExit() {
        exit = true;
    }
    public static void main(String[] args) throws InterruptedException {
        T t = new T();
        t.start();
        TimeUnit.SECONDS.sleep(3);
        setExit();
    }
}
```

代码中启动了一个线程，线程的run方法中有个死循环，内部通过exit变量的值来控制是否退出。`TimeUnit.SECONDS.sleep(3);`让主线程休眠3秒，此处为什么使用TimeUnit？TimeUnit使用更方便一些，能够很清晰的控制休眠时间，底层还是转换为Thread.sleep实现的。程序有个重点：**volatile**关键字，exit变量必须通过这个修饰，如果把这个去掉，程序无法正常退出。volatile控制了变量在多线程中的可见性。

#### 2、通过AtomicBoolean

```java
public class StopThreadDemo
{
    private final static AtomicBoolean atomicBoolean = new AtomicBoolean(true);

    public static void main(String[] args)
    {
        Thread t1 = new Thread(() -> {
            while(atomicBoolean.get())
            {
                try { TimeUnit.MILLISECONDS.sleep(500); } catch (InterruptedException e) { e.printStackTrace(); }
                System.out.println("-----hello");
            }
        }, "t1");
        t1.start();

        try { TimeUnit.SECONDS.sleep(3); } catch (InterruptedException e) { e.printStackTrace(); }

        atomicBoolean.set(false);
    }
}
```

#### 3、通过Thread类自带的中断api方法实现

1. 实例方法interrupt()，没有返回值

![image-20210916231409508](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210916231409508.png)

| public void interrupt() | 实例方法，<br/>调用interrupt()方法仅仅是在当前线程中打了一个停止的标记，并不是真正立刻停止线程。 |
| ----------------------- | ------------------------------------------------------------ |

![vcxvdfgsdgdg](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/vcxvdfgsdgdg.png)

![image-20210916231506817](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210916231506817.png)

2. 实例方法isInterrupted，返回布尔值

![image-20210916231603313](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210916231603313.png)

| public boolean isInterrupted() | 实例方法，<br/>获取中断标志位的当前值是什么，<br/>判断当前线程是否被中断（通过检查中断标志位），默认是false |
| ------------------------------ | ------------------------------------------------------------ |

![image-20210916231626044](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210916231626044.png)

```java
public class InterruptDemo
{
    public static void main(String[] args)
    {
        Thread t1 = new Thread(() -> {
            while(true)
            {
                if(Thread.currentThread().isInterrupted())
                {
                    System.out.println("-----t1 线程被中断了，break，程序结束");
                    break;
                }
                System.out.println("-----hello");
            }
        }, "t1");
        t1.start();

        System.out.println("**************"+t1.isInterrupted());
        //暂停5毫秒
        try { TimeUnit.MILLISECONDS.sleep(5); } catch (InterruptedException e) { e.printStackTrace(); }
        t1.interrupt();
        System.out.println("**************"+t1.isInterrupted());
    }
}
```

运行上面的程序，程序可以正常结束。线程内部有个中断标志，当调用线程的interrupt()实例方法之后，线程的中断标志会被置为true，可以通过线程的实例方法isInterrupted()获取线程的中断标志。

#### 4、当前线程的中断标识为true，是不是就立刻停止？

具体来说，当对一个线程，调用 interrupt() 时：

①  如果线程处于正常活动状态，那么会将该线程的中断标志设置为 true，仅此而已。
被设置中断标志的线程将继续正常运行，不受影响。所以， interrupt() 并不能真正的中断线程，需要被调用的线程自己进行配合才行。

②  如果线程处于被阻塞状态（例如处于sleep, wait, join 等状态），在别的线程中调用当前线程对象的interrupt方法，
那么线程将立即退出被阻塞状态，并抛出一个InterruptedException异常。

```java
public class InterruptDemo2 {
    public static void main(String[] args) throws InterruptedException {
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 300; i++) {
                System.out.println("-------" + i);
            }
            System.out.println("after t1.interrupt()--第2次---: " + Thread.currentThread().isInterrupted());
        }, "t1");
        t1.start();

        System.out.println("before t1.interrupt()----: " + t1.isInterrupted());
        //实例方法interrupt()仅仅是设置线程的中断状态位设置为true，不会停止线程
        t1.interrupt();
        //活动状态,t1线程还在执行中
        try {
            TimeUnit.MILLISECONDS.sleep(3);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("after t1.interrupt()--第1次---: " + t1.isInterrupted());
        //非活动状态,t1线程不在执行中，已经结束执行了。
        try {
            TimeUnit.MILLISECONDS.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println("after t1.interrupt()--第3次---: " + t1.isInterrupted());
    }
}
```

![image-20210916231745805](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210916231745805.png)

![image-20210916231758523](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210916231758523.png)

**中断只是一种协同机制，修改中断标识位仅此而已，不是立刻stop打断**

#### 5、静态方法Thread.interrupted()

```java
/**
 * 作用是测试当前线程是否被中断（检查中断标志），返回一个boolean并清除中断状态，
 * 第二次再调用时中断状态已经被清除，将返回一个false。
 */
public class InterruptDemo
{

    public static void main(String[] args) throws InterruptedException
    {
        System.out.println(Thread.currentThread().getName()+"---"+Thread.interrupted());
        System.out.println(Thread.currentThread().getName()+"---"+Thread.interrupted());
        System.out.println("111111");
        Thread.currentThread().interrupt();
        System.out.println("222222");
        System.out.println(Thread.currentThread().getName()+"---"+Thread.interrupted());
        System.out.println(Thread.currentThread().getName()+"---"+Thread.interrupted());
    }
}
```

| public static boolean interrupted() | 静态方法，Thread.interrupted();  <br/>判断线程是否被中断，并清除当前中断状态，类似i++<br/>这个方法做了两件事：<br/>1 返回当前线程的中断状态<br/>2 将当前线程的中断状态设为false<br/> <br/>这个方法有点不好理解，因为连续调用两次的结果可能不一样。 |
| ----------------------------------- | ------------------------------------------------------------ |

![image-20210916231923048](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210916231923048.png)

都会返回中断状态，两者对比

![image-20210916231944854](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210916231944854.png)

![](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210916232053782.png)

#### 6、总结


线程中断相关的方法：

interrupt()方法是一个实例方法
		它通知目标线程中断，也就是设置目标线程的中断标志位为true，中断标志位表示当前线程已经被中断了。

isInterrupted()方法也是一个实例方法
		它判断当前线程是否被中断（通过检查中断标志位）并获取中断标志

Thread类的静态方法interrupted()
		返回当前线程的中断状态(boolean类型)且将当前线程的中断状态设为false，此方法调用之后会清除当前线程的中断标志位的状态（将中断标志置为false了），返回当前值并清零置false



### 3、LockSupport是什么

**LockSupport**位于**java.util.concurrent**（**简称juc**）包中，算是juc中一个基础类，juc中很多地方都会使用LockSupport，非常重要，希望大家一定要掌握。

关于线程等待/唤醒的方法，前面的文章中我们已经讲过2种了：

1. 方式1：使用Object中的wait()方法让线程等待，使用Object中的notify()方法唤醒线程
2. 方式2：使用juc包中Condition的await()方法让线程等待，使用signal()方法唤醒线程

![image-20210916232319808](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210916232319808.png)

![image-20210916232333615](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210916232333615.png)

![image-20210916232340860](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210916232340860.png)


LockSupport是用来创建锁和其他同步类的基本线程阻塞原语。

下面这句话，后面详细说
LockSupport中的park() 和 unpark() 的作用分别是阻塞线程和解除阻塞线程

### 4、线程等待唤醒机制

#### 1、3种让线程等待和唤醒的方法

1. 使用Object中的wait()方法让线程等待，使用Object中的notify()方法唤醒线程
2. 使用JUC包中Condition的await()方法让线程等待，使用signal()方法唤醒线程
3. LockSupport类可以阻塞当前线程以及唤醒指定被阻塞的线程

#### 2、Object类中的wait和notify方法实现线程等待和唤醒

```java
/**
 *
 * 要求：t1线程等待3秒钟，3秒钟后t2线程唤醒t1线程继续工作
 *
 * 1 正常程序演示
 *
 * 以下异常情况：
 * 2 wait方法和notify方法，两个都去掉同步代码块后看运行效果
 *   2.1 异常情况
 *   Exception in thread "t1" java.lang.IllegalMonitorStateException at java.lang.Object.wait(Native Method)
 *   Exception in thread "t2" java.lang.IllegalMonitorStateException at java.lang.Object.notify(Native Method)
 *   2.2 结论
 *   Object类中的wait、notify、notifyAll用于线程等待和唤醒的方法，都必须在synchronized内部执行（必须用到关键字synchronized）。
 *
 * 3 将notify放在wait方法前面
 *   3.1 程序一直无法结束
 *   3.2 结论
 *   先wait后notify、notifyall方法，等待中的线程才会被唤醒，否则无法唤醒
 */
public class LockSupportDemo
{

    public static void main(String[] args)//main方法，主线程一切程序入口
    {
        Object objectLock = new Object(); //同一把锁，类似资源类

        new Thread(() -> {
            synchronized (objectLock) {
                try {
                    objectLock.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            System.out.println(Thread.currentThread().getName()+"\t"+"被唤醒了");
        },"t1").start();

        //暂停几秒钟线程
        try { TimeUnit.SECONDS.sleep(3L); } catch (InterruptedException e) { e.printStackTrace(); }

        new Thread(() -> {
            synchronized (objectLock) {
                objectLock.notify();
            }

            //objectLock.notify();

            /*synchronized (objectLock) {
                try {
                    objectLock.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }*/
        },"t2").start();
    }
}
```

##### 1、正常

```java
public class LockSupportDemo
{
    public static void main(String[] args)//main方法，主线程一切程序入口
    {
        Object objectLock = new Object(); //同一把锁，类似资源类

        new Thread(() -> {
            synchronized (objectLock) {
                try {
                    objectLock.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            System.out.println(Thread.currentThread().getName()+"\t"+"被唤醒了");
        },"t1").start();

        //暂停几秒钟线程
        try { TimeUnit.SECONDS.sleep(3L); } catch (InterruptedException e) { e.printStackTrace(); }

        new Thread(() -> {
            synchronized (objectLock) {
                objectLock.notify();
            }
        },"t2").start();
    }
}
```

##### 2、异常1

```java
/**
 * 要求：t1线程等待3秒钟，3秒钟后t2线程唤醒t1线程继续工作
 * 以下异常情况：
 * 2 wait方法和notify方法，两个都去掉同步代码块后看运行效果
 *   2.1 异常情况
 *   Exception in thread "t1" java.lang.IllegalMonitorStateException at java.lang.Object.wait(Native Method)
 *   Exception in thread "t2" java.lang.IllegalMonitorStateException at java.lang.Object.notify(Native Method)
 *   2.2 结论
 *   Object类中的wait、notify、notifyAll用于线程等待和唤醒的方法，都必须在synchronized内部执行（必须用到关键字synchronized）。
 */
public class LockSupportDemo
{

    public static void main(String[] args)//main方法，主线程一切程序入口
    {
        Object objectLock = new Object(); //同一把锁，类似资源类

        new Thread(() -> {
                try {
                    objectLock.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            System.out.println(Thread.currentThread().getName()+"\t"+"被唤醒了");
        },"t1").start();

        //暂停几秒钟线程
        try { TimeUnit.SECONDS.sleep(3L); } catch (InterruptedException e) { e.printStackTrace(); }

        new Thread(() -> {
            objectLock.notify();
        },"t2").start();
    }
}
```

wait方法和notify方法，两个都去掉同步代码块

![image-20210916232855724](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210916232855724.png)

##### 3、异常2

```java
/**
 *
 * 要求：t1线程等待3秒钟，3秒钟后t2线程唤醒t1线程继续工作
 *
 * 3 将notify放在wait方法前先执行，t1先notify了，3秒钟后t2线程再执行wait方法
 *   3.1 程序一直无法结束
 *   3.2 结论
 *   先wait后notify、notifyall方法，等待中的线程才会被唤醒，否则无法唤醒
 */
public class LockSupportDemo
{

    public static void main(String[] args)//main方法，主线程一切程序入口
    {
        Object objectLock = new Object(); //同一把锁，类似资源类

        new Thread(() -> {
            synchronized (objectLock) {
                objectLock.notify();
            }
            System.out.println(Thread.currentThread().getName()+"\t"+"通知了");
        },"t1").start();

        //t1先notify了，3秒钟后t2线程再执行wait方法
        try { TimeUnit.SECONDS.sleep(3L); } catch (InterruptedException e) { e.printStackTrace(); }

        new Thread(() -> {
            synchronized (objectLock) {
                try {
                    objectLock.wait();
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
            System.out.println(Thread.currentThread().getName()+"\t"+"被唤醒了");
        },"t2").start();
    }
}
```

将notify放在wait方法前面

程序无法执行，无法唤醒

##### 4、总结

wait和notify方法必须要在同步块或者方法里面，且成对出现使用

先wait后notify才OK

#### 3、Condition接口中的await后signal方法实现线程的等待和唤醒

##### 1、正常

```java
public class LockSupportDemo2
{
    public static void main(String[] args)
    {
        Lock lock = new ReentrantLock();
        Condition condition = lock.newCondition();

        new Thread(() -> {
            lock.lock();
            try
            {
                System.out.println(Thread.currentThread().getName()+"\t"+"start");
                condition.await();
                System.out.println(Thread.currentThread().getName()+"\t"+"被唤醒");
            } catch (InterruptedException e) {
                e.printStackTrace();
            } finally {
                lock.unlock();
            }
        },"t1").start();

        //暂停几秒钟线程
        try { TimeUnit.SECONDS.sleep(3L); } catch (InterruptedException e) { e.printStackTrace(); }

        new Thread(() -> {
            lock.lock();
            try
            {
                condition.signal();
            } catch (Exception e) {
                e.printStackTrace();
            } finally {
                lock.unlock();
            }
            System.out.println(Thread.currentThread().getName()+"\t"+"通知了");
        },"t2").start();

    }
}
```

##### 2、异常1

```java
/**
 * 异常：
 * condition.await();和condition.signal();都触发了IllegalMonitorStateException异常
 *
 * 原因：调用condition中线程等待和唤醒的方法的前提是，要在lock和unlock方法中,要有锁才能调用
 */
public class LockSupportDemo2
{
    public static void main(String[] args)
    {
        Lock lock = new ReentrantLock();
        Condition condition = lock.newCondition();

        new Thread(() -> {
            try
            {
                System.out.println(Thread.currentThread().getName()+"\t"+"start");
                condition.await();
                System.out.println(Thread.currentThread().getName()+"\t"+"被唤醒");
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        },"t1").start();

        //暂停几秒钟线程
        try { TimeUnit.SECONDS.sleep(3L); } catch (InterruptedException e) { e.printStackTrace(); }

        new Thread(() -> {
            try
            {
                condition.signal();
            } catch (Exception e) {
                e.printStackTrace();
            }
            System.out.println(Thread.currentThread().getName()+"\t"+"通知了");
        },"t2").start();

    }
}
```

去掉lock/unlock

![image-20210916233230684](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210916233230684.png)

condition.await();和 condition.signal();都触发了 IllegalMonitorStateException异常。

结论：
lock、unlock对里面才能正确调用调用condition中线程等待和唤醒的方法

##### 3、异常2

```java
/**
 * 异常：
 * 程序无法运行
 *
 * 原因：先await()后signal才OK，否则线程无法被唤醒
 */
public class LockSupportDemo2
{
    public static void main(String[] args)
    {
        Lock lock = new ReentrantLock();
        Condition condition = lock.newCondition();

        new Thread(() -> {
            lock.lock();
            try
            {
                condition.signal();
                System.out.println(Thread.currentThread().getName()+"\t"+"signal");
            } catch (Exception e) {
                e.printStackTrace();
            }finally {
                lock.unlock();
            }
        },"t1").start();

        //暂停几秒钟线程
        try { TimeUnit.SECONDS.sleep(3L); } catch (InterruptedException e) { e.printStackTrace(); }

        new Thread(() -> {
            lock.lock();
            try
            {
                System.out.println(Thread.currentThread().getName()+"\t"+"等待被唤醒");
                condition.await();
                System.out.println(Thread.currentThread().getName()+"\t"+"被唤醒");
            } catch (Exception e) {
                e.printStackTrace();
            }finally {
                lock.unlock();
            }
        },"t2").start();

    }
}
```

先signal后await

##### 4、总结

Condtion中的线程等待和唤醒方法之前，需要先获取锁

一定要先await后signal，不要反了

#### 4、Object和Condition使用的限制条件

线程先要获得并持有锁，必须在锁块(synchronized或lock)中

必须要先等待后唤醒，线程才能够被唤醒

#### 5、LockSupport类中的park等待和unpark唤醒

通过park()和unpark(thread)方法来实现阻塞和唤醒线程的操作

![image-20210916233452889](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210916233452889.png)

LockSupport是用来创建锁和其他同步类的基本线程阻塞原语。

​		LockSupport类使用了一种名为Permit（许可）的概念来做到阻塞和唤醒线程的功能， 每个线程都有一个许可(permit)，
permit只有两个值1和零，默认是零。
可以把许可看成是一种(0,1)信号量（Semaphore），但与 Semaphore 不同的是，许可的累加上限是1。

##### 1、主要方法

![image-20210916233517944](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210916233517944.png)

**阻塞**

park() /park(Object blocker) 

![image-20210916233615025](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210916233615025.png)

阻塞当前线程/阻塞传入的具体线程



**唤醒**

unpark(Thread thread) 

![image-20210916233726972](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210916233726972.png)

唤醒处于阻塞状态的指定线程

##### 2、代码

正常+无锁块要求

```java
public class LockSupportDemo3
{
    public static void main(String[] args)
    {
        //正常使用+不需要锁块
Thread t1 = new Thread(() -> {
    System.out.println(Thread.currentThread().getName()+" "+"1111111111111");
    LockSupport.park();
    System.out.println(Thread.currentThread().getName()+" "+"2222222222222------end被唤醒");
},"t1");
t1.start();

//暂停几秒钟线程
try { TimeUnit.SECONDS.sleep(3); } catch (InterruptedException e) { e.printStackTrace(); }

LockSupport.unpark(t1);
System.out.println(Thread.currentThread().getName()+"   -----LockSupport.unparrk() invoked over");

    }
}
```

之前错误的先唤醒后等待，LockSupport照样支持

```java
public class T1
{
    public static void main(String[] args)
    {
        Thread t1 = new Thread(() -> {
            try { TimeUnit.SECONDS.sleep(3); } catch (InterruptedException e) { e.printStackTrace(); }
            System.out.println(Thread.currentThread().getName()+"\t"+System.currentTimeMillis());
            LockSupport.park();
            System.out.println(Thread.currentThread().getName()+"\t"+System.currentTimeMillis()+"---被叫醒");
        },"t1");
        t1.start();

        try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }

        LockSupport.unpark(t1);
        System.out.println(Thread.currentThread().getName()+"\t"+System.currentTimeMillis()+"---unpark over");
    }
}
```

![image-20210916233832563](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210916233832563.png)



## 七、集合不安全

### 1、线程不安全错误

```java
java.util.ConcurrentModificationException
ArrayList在迭代的时候如果同时对其进行修改就会
抛出java.util.ConcurrentModificationException异常 并发修改异常
```

### 2、List不安全

```java
List<String> list = new ArrayList<>();
for (int i = 0; i <30 ; i++) {
            new Thread(()->{
                list.add(UUID.randomUUID().toString().substring(0,8));
                System.out.println(list);
            },String.valueOf(i)).start();
        }
 
// 看ArrayList的源码
public boolean add(E e) {
    ensureCapacityInternal(size + 1);  // Increments modCount!!
    elementData[size++] = e;
    return true;
}
// 没有synchronized线程不安全
```

#### 1、 解决方案

##### 1、Vector

```java
List list = new Vector<>();
```

![image](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/1614161454663-ad91cc9b-df6d-46b9-b9ea-cb30859660e3.png)

```java
// 看Vector的源码
public synchronized boolean add(E e) {
    modCount++;
    ensureCapacityHelper(elementCount + 1);
    elementData[elementCount++] = e;
    return true;
}
// 有synchronized线程安全
```

##### 2、Collections

```java
List list = Collections.synchronizedList(new ArrayList<>());
// Collections提供了方法synchronizedList保证list是同步线程安全的
// 那HashMap，HashSet是线程安全的吗？也不是,所以有同样的线程安全方法
```

![image](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/1614161465300-4f72afb7-5318-41d8-ac75-afa03514b63f.png)



##### 3、写时复制(JUC)

```java
List<String> list = new CopyOnWriteArrayList<>();
```

![image](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/1614161496374-08a7194a-7fe7-4a1b-8491-73632bbfb33d.png)



##### 4、CopyOnWrite理论

```java
/**
 * Appends the specified element to the end of this list.
 *
 * @param e element to be appended to this list
 * @return {@code true} (as specified by {@link Collection#add})
 */
public boolean add(E e) {
    final ReentrantLock lock = this.lock;
    lock.lock();
    try {
        Object[] elements = getArray();
        int len = elements.length;
        Object[] newElements = Arrays.copyOf(elements, len + 1);
        newElements[len] = e;
        setArray(newElements);
        return true;
    } finally {
        lock.unlock();
    }
}
```

​		CopyOnWrite容器即写时复制的容器。往一个容器添加元素的时候，不直接往当前容器Object[]添加，而是先将当前容器Object[]进行Copy，复制出一个新的容器Object[] newElements，然后向新的容器Object[] newElements里添加元素。添加元素后，再将原容器的引用指向新的容器setArray(newElements)。这样做的好处是可以对CopyOnWrite容器进行并发的读，而不需要加锁，因为当前容器不会添加任何元素。所以CopyOnWrite容器也是一种读写分离的思想，读和写不同的容器。

### 3、Set不安全

```java
Set<String> set = new HashSet<>();//线程不安全
 
Set<String> set = new CopyOnWriteArraySet<>();//线程安全
HashSet底层数据结构是什么？
HashMap  ?
 
但HashSet的add是放一个值，而HashMap是放K、V键值对
 
public HashSet() {
    map = new HashMap<>();
}
 
private static final Object PRESENT = new Object();
 
public boolean add(E e) {
    return map.put(e, PRESENT)==null;
}
```

### 4、Map不安全

```java
Map<String,String> map = new HashMap<>();//线程不安全

Map<String,String> map = new ConcurrentHashMap<>();//线程安全
```

```java
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.CopyOnWriteArraySet;

/**
 * 请举例说明集合类是不安全的
 */
public class NotSafeDemo {
    public static void main(String[] args) {

        Map<String,String> map = new ConcurrentHashMap<>();
        for (int i = 0; i <30 ; i++) {
            new Thread(()->{
                map.put(Thread.currentThread().getName(),UUID.randomUUID().toString().substring(0,8));
                System.out.println(map);
            },String.valueOf(i)).start();
        }


    }

    private static void setNoSafe() {
        Set<String> set = new CopyOnWriteArraySet<>();
        for (int i = 0; i <30 ; i++) {
            new Thread(()->{
                set.add(UUID.randomUUID().toString().substring(0,8));
                System.out.println(set);
            },String.valueOf(i)).start();
        }
    }

    private static void listNoSafe() {
        //        List<String> list = Arrays.asList("a","b","c");
        //        list.forEach(System.out::println);
        //写时复制
        List<String> list = new CopyOnWriteArrayList<>();
        // new CopyOnWriteArrayList<>();
        //Collections.synchronizedList(new ArrayList<>());
        //new Vector<>();//new ArrayList<>();

        for (int i = 0; i <30 ; i++) {
                    new Thread(()->{
                        list.add(UUID.randomUUID().toString().substring(0,8));
                        System.out.println(list);
                    },String.valueOf(i)).start();
                }
    }


}

    /**
     * 写时复制
     CopyOnWrite容器即写时复制的容器。往一个容器添加元素的时候，不直接往当前容器Object[]添加，
     而是先将当前容器Object[]进行Copy，复制出一个新的容器Object[] newElements，然后向新的容器Object[] newElements里添加元素。
     添加元素后，再将原容器的引用指向新的容器setArray(newElements)。
     这样做的好处是可以对CopyOnWrite容器进行并发的读，而不需要加锁，因为当前容器不会添加任何元素。
     所以CopyOnWrite容器也是一种读写分离的思想，读和写不同的容器。

     *
     *
     *
     *

    public boolean add(E e) {
        final ReentrantLock lock = this.lock;
        lock.lock();
        try {
            Object[] elements = getArray();
            int len = elements.length;
            Object[] newElements = Arrays.copyOf(elements, len + 1);
            newElements[len] = e;
            setArray(newElements);
            return true;
        } finally {
            lock.unlock();
        }
    }
     */
```



## 八、JUC强大的辅助类

### 1、CountDownLatch减少计数

CountDownLatch称之为闭锁，它可以使一个或一批线程在闭锁上等待，等到其他线程执行完相应操作后，闭锁打开，这些等待的线程才可以继续执行。确切的说，闭锁在内部维护了一个倒计数器。通过该计数器的值来决定闭锁的状态，从而决定是否允许等待的线程继续执行。

**常用方法：**

**public CountDownLatch(int count)**：构造方法，count表示计数器的值，不能小于0，否者会报异常。

**public void await() throws InterruptedException**：调用await()会让当前线程等待，直到计数器为0的时候，方法才会返回，此方法会响应线程中断操作。

**public boolean await(long timeout, TimeUnit unit) throws InterruptedException**：限时等待，在超时之前，计数器变为了0，方法返回true，否者直到超时，返回false，此方法会响应线程中断操作。

**public void countDown()**：让计数器减1

CountDownLatch使用步骤：

1. 创建CountDownLatch对象
2. 调用其实例方法`await()`，让当前线程等待
3. 调用`countDown()`方法，让计数器减1
4. 当计数器变为0的时候，`await()`方法会返回

```java
package com.xue.thread;

import java.util.concurrent.CountDownLatch;
 
 
/**
 * 
 * @Description:
 *  *让一些线程阻塞直到另一些线程完成一系列操作后才被唤醒。
 * 
 * CountDownLatch主要有两个方法，当一个或多个线程调用await方法时，这些线程会阻塞。
 * 其它线程调用countDown方法会将计数器减1(调用countDown方法的线程不会阻塞)，
 * 当计数器的值变为0时，因await方法阻塞的线程会被唤醒，继续执行。
 * 
 * 解释：6个同学陆续离开教室后值班同学才可以关门。
 * 
 * main主线程必须要等前面6个线程完成全部工作后，自己才能开干 
 */
public class CountDownLatchDemo
{
   public static void main(String[] args) throws InterruptedException
   {
         CountDownLatch countDownLatch = new CountDownLatch(6);
       
       for (int i = 1; i <=6; i++) //6个上自习的同学，各自离开教室的时间不一致
       {
          new Thread(() -> {
              System.out.println(Thread.currentThread().getName()+"\t 号同学离开教室");
              countDownLatch.countDown();
          }, String.valueOf(i)).start();
       }
       countDownLatch.await();
       System.out.println(Thread.currentThread().getName()+"\t****** 班长关门走人，main线程是班长");
          
   }
}
```

- CountDownLatch主要有两个方法，当一个或多个线程调用await方法时，这些线程会阻塞。
- 其它线程调用countDown方法会将计数器减1(调用countDown方法的线程不会阻塞)，
- 当计数器的值变为0时，因await方法阻塞的线程会被唤醒，继续执行。

#### 示例1

假如有这样一个需求，当我们需要解析一个Excel里多个sheet的数据时，可以考虑使用多线程，每个线程解析一个sheet里的数据，等到所有的sheet都解析完之后，程序需要统计解析总耗时。分析一下：解析每个sheet耗时可能不一样，总耗时就是最长耗时的那个操作。

我们能够想到的最简单的做法是使用join，代码如下：

```java
import java.util.concurrent.TimeUnit;

public class Demo1 {
    public static class T extends Thread {
        //休眠时间（秒）
        int sleepSeconds;
        public T(String name, int sleepSeconds) {
            super(name);
            this.sleepSeconds = sleepSeconds;
        }
        @Override
        public void run() {
            Thread ct = Thread.currentThread();
            long startTime = System.currentTimeMillis();
            System.out.println(startTime + "," + ct.getName() + ",开始处理!");
            try {
                //模拟耗时操作，休眠sleepSeconds秒
                TimeUnit.SECONDS.sleep(this.sleepSeconds);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            long endTime = System.currentTimeMillis();
            System.out.println(endTime + "," + ct.getName() + ",处理完毕,耗时:" + (endTime - startTime));
        }
    }
    public static void main(String[] args) throws InterruptedException {
        long starTime = System.currentTimeMillis();
        T t1 = new T("解析sheet1线程", 2);
        t1.start();
        T t2 = new T("解析sheet2线程", 5);
        t2.start();
        t1.join();
        t2.join();
        long endTime = System.currentTimeMillis();
        System.out.println("总耗时:" + (endTime - starTime));
    }
}
```

```java
1563767560271,解析sheet1线程,开始处理!
1563767560272,解析sheet2线程,开始处理!
1563767562273,解析sheet1线程,处理完毕,耗时:2002
1563767565274,解析sheet2线程,处理完毕,耗时:5002
总耗时:5005
```

代码中启动了2个解析sheet的线程，第一个耗时2秒，第二个耗时5秒，最终结果中总耗时：5秒。上面的关键技术点是线程的`join()`方法，此方法会让当前线程等待被调用的线程完成之后才能继续。可以看一下join的源码，内部其实是在synchronized方法中调用了线程的wait方法，最后被调用的线程执行完毕之后，由jvm自动调用其notifyAll()方法，唤醒所有等待中的线程。这个notifyAll()方法是由jvm内部自动调用的，jdk源码中是看不到的，需要看jvm源码，有兴趣的同学可以去查一下。所以JDK不推荐在线程上调用wait、notify、notifyAll方法。

而在JDK1.5之后的并发包中提供的CountDownLatch也可以实现join的这个功能。

我们使用CountDownLatch来完成上面示例中使用join实现的功能，代码如下：

```java
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;

public class Demo2 {
    public static class T extends Thread {
        //休眠时间（秒）
        int sleepSeconds;
        CountDownLatch countDownLatch;
        public T(String name, int sleepSeconds, CountDownLatch countDownLatch) {
            super(name);
            this.sleepSeconds = sleepSeconds;
            this.countDownLatch = countDownLatch;
        }
        @Override
        public void run() {
            Thread ct = Thread.currentThread();
            long startTime = System.currentTimeMillis();
            System.out.println(startTime + "," + ct.getName() + ",开始处理!");
            try {
                //模拟耗时操作，休眠sleepSeconds秒
                TimeUnit.SECONDS.sleep(this.sleepSeconds);
            } catch (InterruptedException e) {
                e.printStackTrace();
            } finally {
                countDownLatch.countDown();
            }
            long endTime = System.currentTimeMillis();
            System.out.println(endTime + "," + ct.getName() + ",处理完毕,耗时:" + (endTime - startTime));
        }
    }
    public static void main(String[] args) throws InterruptedException {
        System.out.println(System.currentTimeMillis() + "," + Thread.currentThread().getName() + "线程 start!");
        CountDownLatch countDownLatch = new CountDownLatch(2);
        long starTime = System.currentTimeMillis();
        T t1 = new T("解析sheet1线程", 2, countDownLatch);
        t1.start();
        T t2 = new T("解析sheet2线程", 5, countDownLatch);
        t2.start();
        countDownLatch.await();
        System.out.println(System.currentTimeMillis() + "," + Thread.currentThread().getName() + "线程 end!");
        long endTime = System.currentTimeMillis();
        System.out.println("总耗时:" + (endTime - starTime));
    }
}
```

```java
1563767580511,main线程 start!
1563767580513,解析sheet1线程,开始处理!
1563767580513,解析sheet2线程,开始处理!
1563767582515,解析sheet1线程,处理完毕,耗时:2002
1563767585515,解析sheet2线程,处理完毕,耗时:5002
1563767585515,main线程 end!
总耗时:5003
```

从结果中看出，效果和join实现的效果一样，代码中创建了计数器为2的`CountDownLatch`，主线程中调用`countDownLatch.await();`会让主线程等待，t1、t2线程中模拟执行耗时操作，最终在finally中调用了`countDownLatch.countDown();`,此方法每调用一次，CountDownLatch内部计数器会减1，当计数器变为0的时候，主线程中的await()会返回，然后继续执行。注意：上面的`countDown()`这个是必须要执行的方法，所以放在finally中执行。

#### 示例2

等待指定的时间

还是上面的示例，2个线程解析2个sheet，主线程等待2个sheet解析完成。主线程说，我等待2秒，你们还是无法处理完成，就不等待了，直接返回。如下代码：

```java
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;

public class Demo3 {
    public static class T extends Thread {
        //休眠时间（秒）
        int sleepSeconds;
        CountDownLatch countDownLatch;
        public T(String name, int sleepSeconds, CountDownLatch countDownLatch) {
            super(name);
            this.sleepSeconds = sleepSeconds;
            this.countDownLatch = countDownLatch;
        }
        @Override
        public void run() {
            Thread ct = Thread.currentThread();
            long startTime = System.currentTimeMillis();
            System.out.println(startTime + "," + ct.getName() + ",开始处理!");
            try {
                //模拟耗时操作，休眠sleepSeconds秒
                TimeUnit.SECONDS.sleep(this.sleepSeconds);
            } catch (InterruptedException e) {
                e.printStackTrace();
            } finally {
                countDownLatch.countDown();
            }
            long endTime = System.currentTimeMillis();
            System.out.println(endTime + "," + ct.getName() + ",处理完毕,耗时:" + (endTime - startTime));
        }
    }
    public static void main(String[] args) throws InterruptedException {
        System.out.println(System.currentTimeMillis() + "," + Thread.currentThread().getName() + "线程 start!");
        CountDownLatch countDownLatch = new CountDownLatch(2);
        long starTime = System.currentTimeMillis();
        T t1 = new T("解析sheet1线程", 2, countDownLatch);
        t1.start();
        T t2 = new T("解析sheet2线程", 5, countDownLatch);
        t2.start();
        boolean result = countDownLatch.await(2, TimeUnit.SECONDS);
        System.out.println(System.currentTimeMillis() + "," + Thread.currentThread().getName() + "线程 end!");
        long endTime = System.currentTimeMillis();
        System.out.println("主线程耗时:" + (endTime - starTime) + ",result:" + result);
    }
}
```

```java
1563767637316,main线程 start!
1563767637320,解析sheet1线程,开始处理!
1563767637320,解析sheet2线程,开始处理!
1563767639321,解析sheet1线程,处理完毕,耗时:2001
1563767639322,main线程 end!
主线程耗时:2004,result:false
1563767642322,解析sheet2线程,处理完毕,耗时:5002
```

从输出结果中可以看出，线程2耗时了5秒，主线程耗时了2秒，主线程中调用`countDownLatch.await(2, TimeUnit.SECONDS);`，表示最多等2秒，不管计数器是否为0，await方法都会返回，若等待时间内，计数器变为0了，立即返回true，否则超时后返回false。

#### 示例3

2个CountDown结合使用的示例

有3个人参见跑步比赛，需要先等指令员发指令枪后才能开跑，所有人都跑完之后，指令员喊一声，大家跑完了。

示例代码：

```java
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.TimeUnit;

public class Demo4 {
    public static class T extends Thread {
        //跑步耗时（秒）
        int runCostSeconds;
        CountDownLatch commanderCd;
        CountDownLatch countDown;
        public T(String name, int runCostSeconds, CountDownLatch commanderCd, CountDownLatch countDown) {
            super(name);
            this.runCostSeconds = runCostSeconds;
            this.commanderCd = commanderCd;
            this.countDown = countDown;
        }
        @Override
        public void run() {
            //等待指令员枪响
            try {
                commanderCd.await();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            Thread ct = Thread.currentThread();
            long startTime = System.currentTimeMillis();
            System.out.println(startTime + "," + ct.getName() + ",开始跑!");
            try {
                //模拟耗时操作，休眠runCostSeconds秒
                TimeUnit.SECONDS.sleep(this.runCostSeconds);
            } catch (InterruptedException e) {
                e.printStackTrace();
            } finally {
                countDown.countDown();
            }
            long endTime = System.currentTimeMillis();
            System.out.println(endTime + "," + ct.getName() + ",跑步结束,耗时:" + (endTime - startTime));
        }
    }
    public static void main(String[] args) throws InterruptedException {
        System.out.println(System.currentTimeMillis() + "," + Thread.currentThread().getName() + "线程 start!");
        CountDownLatch commanderCd = new CountDownLatch(1);
        CountDownLatch countDownLatch = new CountDownLatch(3);
        long starTime = System.currentTimeMillis();
        T t1 = new T("小张", 2, commanderCd, countDownLatch);
        t1.start();
        T t2 = new T("小李", 5, commanderCd, countDownLatch);
        t2.start();
        T t3 = new T("路人甲", 10, commanderCd, countDownLatch);
        t3.start();
        //主线程休眠5秒,模拟指令员准备发枪耗时操作
        TimeUnit.SECONDS.sleep(5);
        System.out.println(System.currentTimeMillis() + ",枪响了，大家开始跑");
        commanderCd.countDown();
        countDownLatch.await();
        long endTime = System.currentTimeMillis();
        System.out.println(System.currentTimeMillis() + "," + Thread.currentThread().getName() + "所有人跑完了，主线程耗时:" + (endTime - starTime));
    }
}
```

```java
1563767691087,main线程 start!
1563767696092,枪响了，大家开始跑
1563767696092,小张,开始跑!
1563767696092,小李,开始跑!
1563767696092,路人甲,开始跑!
1563767698093,小张,跑步结束,耗时:2001
1563767701093,小李,跑步结束,耗时:5001
1563767706093,路人甲,跑步结束,耗时:10001
1563767706093,main所有人跑完了，主线程耗时:15004
```

代码中，t1、t2、t3启动之后，都阻塞在`commanderCd.await();`，主线程模拟发枪准备操作耗时5秒，然后调用`commanderCd.countDown();`模拟发枪操作，此方法被调用以后，阻塞在`commanderCd.await();`的3个线程会向下执行。主线程调用`countDownLatch.await();`之后进行等待，每个人跑完之后，调用`countDown.countDown();`通知一下`countDownLatch`让计数器减1，最后3个人都跑完了，主线程从`countDownLatch.await();`返回继续向下执行。

#### 手写一个并行处理任务的工具类

```java
import org.springframework.util.CollectionUtils;
import java.util.List;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.TimeUnit;
import java.util.function.Consumer;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class TaskDisposeUtils {
    //并行线程数
    public static final int POOL_SIZE;
    static {
        POOL_SIZE = Integer.max(Runtime.getRuntime().availableProcessors(), 5);
    }
    /**
     * 并行处理，并等待结束
     *
     * @param taskList 任务列表
     * @param consumer 消费者
     * @param <T>
     * @throws InterruptedException
     */
    public static <T> void dispose(List<T> taskList, Consumer<T> consumer) throws InterruptedException {
        dispose(true, POOL_SIZE, taskList, consumer);
    }
    /**
     * 并行处理，并等待结束
     *
     * @param moreThread 是否多线程执行
     * @param poolSize   线程池大小
     * @param taskList   任务列表
     * @param consumer   消费者
     * @param <T>
     * @throws InterruptedException
     */
    public static <T> void dispose(boolean moreThread, int poolSize, List<T> taskList, Consumer<T> consumer) throws InterruptedException {
        if (CollectionUtils.isEmpty(taskList)) {
            return;
        }
        if (moreThread && poolSize > 1) {
            poolSize = Math.min(poolSize, taskList.size());
            ExecutorService executorService = null;
            try {
                executorService = Executors.newFixedThreadPool(poolSize);
                CountDownLatch countDownLatch = new CountDownLatch(taskList.size());
                for (T item : taskList) {
                    executorService.execute(() -> {
                        try {
                            consumer.accept(item);
                        } finally {
                            countDownLatch.countDown();
                        }
                    });
                }
                countDownLatch.await();
            } finally {
                if (executorService != null) {
                    executorService.shutdown();
                }
            }
        } else {
            for (T item : taskList) {
                consumer.accept(item);
            }
        }
    }
    public static void main(String[] args) throws InterruptedException {
        //生成1-10的10个数字，放在list中，相当于10个任务
        List<Integer> list = Stream.iterate(1, a -> a + 1).limit(10).collect(Collectors.toList());
        //启动多线程处理list中的数据，每个任务休眠时间为list中的数值
        TaskDisposeUtils.dispose(list, item -> {
            try {
                long startTime = System.currentTimeMillis();
                TimeUnit.SECONDS.sleep(item);
                long endTime = System.currentTimeMillis();
                System.out.println(System.currentTimeMillis() + ",任务" + item + "执行完毕，耗时:" + (endTime - startTime));
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });
        //上面所有任务处理完毕完毕之后，程序才能继续
        System.out.println(list + "中的任务都处理完毕!");
    }
}
```

运行代码输出：

```java
1563769828130,任务1执行完毕，耗时:1000
1563769829130,任务2执行完毕，耗时:2000
1563769830131,任务3执行完毕，耗时:3001
1563769831131,任务4执行完毕，耗时:4001
1563769832131,任务5执行完毕，耗时:5001
1563769833130,任务6执行完毕，耗时:6000
1563769834131,任务7执行完毕，耗时:7001
1563769835131,任务8执行完毕，耗时:8001
1563769837131,任务9执行完毕，耗时:9001
1563769839131,任务10执行完毕，耗时:10001
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]中的任务都处理完毕!
```

**TaskDisposeUtils是一个并行处理的工具类，可以传入n个任务内部使用线程池进行处理，等待所有任务都处理完成之后，方法才会返回。比如我们发送短信，系统中有1万条短信，我们使用上面的工具，每次取100条并行发送，待100个都处理完毕之后，再取一批按照同样的逻辑发送。**

### 2、CyclicBarrier循环栅栏

CyclicBarrier通常称为循环屏障。它和CountDownLatch很相似，都可以使线程先等待然后再执行。不过CountDownLatch是使一批线程等待另一批线程执行完后再执行；而CyclicBarrier只是使等待的线程达到一定数目后再让它们继续执行。故而CyclicBarrier内部也有一个计数器,计数器的初始值在创建对象时通过构造参数指定,如下所示：

```java
public CyclicBarrier(int parties) {
    this(parties, null);
}
```

每调用一次await()方法都将使阻塞的线程数+1，只有阻塞的线程数达到设定值时屏障才会打开，允许阻塞的所有线程继续执行。除此之外，CyclicBarrier还有几点需要注意的地方:

- CyclicBarrier的计数器可以重置而CountDownLatch不行，这意味着CyclicBarrier实例可以被重复使用而CountDownLatch只能被使用一次。而这也是循环屏障循环二字的语义所在。
- CyclicBarrier允许用户自定义barrierAction操作，这是个可选操作，可以在创建CyclicBarrier对象时指定

```java
public CyclicBarrier(int parties, Runnable barrierAction) {
    if (parties <= 0) throw new IllegalArgumentException();
    this.parties = parties;
    this.count = parties;
    this.barrierCommand = barrierAction;
}
```

一旦用户在创建CyclicBarrier对象时设置了barrierAction参数，则在阻塞线程数达到设定值屏障打开前，会调用barrierAction的run()方法完成用户自定义的操作。

```java
package com.xue.thread;
 
import java.util.concurrent.BrokenBarrierException;
import java.util.concurrent.CyclicBarrier;
 
/**
 * 
 *
 * CyclicBarrier
 * 的字面意思是可循环（Cyclic）使用的屏障（Barrier）。它要做的事情是，
 * 让一组线程到达一个屏障（也可以叫同步点）时被阻塞，
 * 直到最后一个线程到达屏障时，屏障才会开门，所有
 * 被屏障拦截的线程才会继续干活。
 * 线程进入屏障通过CyclicBarrier的await()方法。
 * 
 * 集齐7颗龙珠就可以召唤神龙
 */
public class CyclicBarrierDemo
{
  private static final int NUMBER = 7;
  
  public static void main(String[] args)
  {
     //CyclicBarrier(int parties, Runnable barrierAction) 
     
     CyclicBarrier cyclicBarrier = new CyclicBarrier(NUMBER, ()->{System.out.println("*****集齐7颗龙珠就可以召唤神龙");}) ;
     
     for (int i = 1; i <= 7; i++) {
       new Thread(() -> {
          try {
            System.out.println(Thread.currentThread().getName()+"\t 星龙珠被收集 ");
            cyclicBarrier.await();
          } catch (InterruptedException | BrokenBarrierException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
          }
       
       }, String.valueOf(i)).start();
     }
     
 
  }
}
```

- CyclicBarrier的字面意思是可循环（Cyclic）使用的屏障（Barrier）。它要做的事情是，
- 让一组线程到达一个屏障（也可以叫同步点）时被阻塞，
- 直到最后一个线程到达屏障时，屏障才会开门，所有
- 被屏障拦截的线程才会继续干活。
- 线程进入屏障通过CyclicBarrier的await()方法。

#### 示例1 简单使用CyclicBarrier

公司组织旅游，大家都有经历过，10个人，中午到饭点了，需要等到10个人都到了才能开饭，先到的人坐那等着，代码如下：

```java
import java.util.concurrent.BrokenBarrierException;
import java.util.concurrent.CyclicBarrier;
import java.util.concurrent.TimeUnit;

public class Demo1 {
    public static CyclicBarrier cyclicBarrier = new CyclicBarrier(10);
    public static class T extends Thread {
        int sleep;
        public T(String name, int sleep) {
            super(name);
            this.sleep = sleep;
        }
        @Override
        public void run() {
            try {
                //模拟休眠
                TimeUnit.SECONDS.sleep(sleep);
                long starTime = System.currentTimeMillis();
                //调用await()的时候，当前线程将会被阻塞，需要等待其他员工都到达await了才能继续
                cyclicBarrier.await();
                long endTime = System.currentTimeMillis();
                System.out.println(this.getName() + ",sleep:" + this.sleep + " 等待了" + (endTime - starTime) + "(ms),开始吃饭了！");
            } catch (InterruptedException e) {
                e.printStackTrace();
            } catch (BrokenBarrierException e) {
                e.printStackTrace();
            }
        }
    }
    public static void main(String[] args) throws InterruptedException {
        for (int i = 1; i <= 10; i++) {
            new T("员工" + i, i).start();
        }
    }
}
```

```java
员工1,sleep:1 等待了9000(ms),开始吃饭了！
员工9,sleep:9 等待了1000(ms),开始吃饭了！
员工8,sleep:8 等待了2001(ms),开始吃饭了！
员工7,sleep:7 等待了3001(ms),开始吃饭了！
员工6,sleep:6 等待了4001(ms),开始吃饭了！
员工4,sleep:4 等待了6000(ms),开始吃饭了！
员工5,sleep:5 等待了5000(ms),开始吃饭了！
员工10,sleep:10 等待了0(ms),开始吃饭了！
员工2,sleep:2 等待了7999(ms),开始吃饭了！
员工3,sleep:3 等待了7000(ms),开始吃饭了！
```

代码中模拟了10个员工上桌吃饭的场景，等待所有员工都到齐了才能开发，可以看到第10个员工最慢，前面的都在等待第10个员工，员工1等待了9秒，上面代码中调用`cyclicBarrier.await();`会让当前线程等待。当10个员工都调用了`cyclicBarrier.await();`之后，所有处于等待中的员工都会被唤醒，然后继续运行。

#### 示例2 循环使用CyclicBarrier

对示例1进行改造一下，吃饭完毕之后，所有人都去车上，待所有人都到车上之后，驱车去下一景点玩。

```java
import java.util.concurrent.BrokenBarrierException;
import java.util.concurrent.CyclicBarrier;
import java.util.concurrent.TimeUnit;

public class Demo2 {
    public static CyclicBarrier cyclicBarrier = new CyclicBarrier(10);
    public static class T extends Thread {
        int sleep;
        public T(String name, int sleep) {
            super(name);
            this.sleep = sleep;
        }
        //等待吃饭
        void eat() {
            try {
                //模拟休眠
                TimeUnit.SECONDS.sleep(sleep);
                long starTime = System.currentTimeMillis();
                //调用await()的时候，当前线程将会被阻塞，需要等待其他员工都到达await了才能继续
                cyclicBarrier.await();
                long endTime = System.currentTimeMillis();
                System.out.println(this.getName() + ",sleep:" + this.sleep + " 等待了" + (endTime - starTime) + "(ms),开始吃饭了！");
                //休眠sleep时间，模拟当前员工吃饭耗时
                TimeUnit.SECONDS.sleep(sleep);
            } catch (InterruptedException e) {
                e.printStackTrace();
            } catch (BrokenBarrierException e) {
                e.printStackTrace();
            }
        }
        //等待所有人到齐之后，开车去下一站
        void drive() {
            try {
                long starTime = System.currentTimeMillis();
                //调用await()的时候，当前线程将会被阻塞，需要等待其他员工都到达await了才能继续
                cyclicBarrier.await();
                long endTime = System.currentTimeMillis();
                System.out.println(this.getName() + ",sleep:" + this.sleep + " 等待了" + (endTime - starTime) + "(ms),去下一景点的路上！");
            } catch (InterruptedException e) {
                e.printStackTrace();
            } catch (BrokenBarrierException e) {
                e.printStackTrace();
            }
        }
        @Override
        public void run() {
            //等待所有人到齐之后吃饭，先到的人坐那等着，什么事情不要干
            this.eat();
            //等待所有人到齐之后开车去下一景点，先到的人坐那等着，什么事情不要干
            this.drive();
        }
    }
    public static void main(String[] args) throws InterruptedException {
        for (int i = 1; i <= 10; i++) {
            new T("员工" + i, i).start();
        }
    }
}
```

```java
员工10,sleep:10 等待了0(ms),开始吃饭了！
员工5,sleep:5 等待了5000(ms),开始吃饭了！
员工6,sleep:6 等待了4000(ms),开始吃饭了！
员工9,sleep:9 等待了1001(ms),开始吃饭了！
员工4,sleep:4 等待了6000(ms),开始吃饭了！
员工3,sleep:3 等待了7000(ms),开始吃饭了！
员工1,sleep:1 等待了9001(ms),开始吃饭了！
员工2,sleep:2 等待了8000(ms),开始吃饭了！
员工8,sleep:8 等待了2001(ms),开始吃饭了！
员工7,sleep:7 等待了3000(ms),开始吃饭了！
员工10,sleep:10 等待了0(ms),去下一景点的路上！
员工1,sleep:1 等待了8998(ms),去下一景点的路上！
员工5,sleep:5 等待了4999(ms),去下一景点的路上！
员工4,sleep:4 等待了5999(ms),去下一景点的路上！
员工3,sleep:3 等待了6998(ms),去下一景点的路上！
员工2,sleep:2 等待了7998(ms),去下一景点的路上！
员工9,sleep:9 等待了999(ms),去下一景点的路上！
员工8,sleep:8 等待了1999(ms),去下一景点的路上！
员工7,sleep:7 等待了2999(ms),去下一景点的路上！
员工6,sleep:6 等待了3999(ms),去下一景点的路上！
```

坑，又是员工10最慢，要提升效率了，不能吃的太多，得减肥。

代码中CyclicBarrier相当于使用了2次，第一次用于等待所有人到达后开饭，第二次用于等待所有人上车后驱车去下一景点。注意一些先到的员工会在其他人到达之前，都处于等待状态（`cyclicBarrier.await();`会让当前线程阻塞），无法干其他事情，等到最后一个人到了会唤醒所有人，然后继续。

> CyclicBarrier内部相当于有个计数器（构造方法传入的），每次调用`await();`后，计数器会减1，并且await()方法会让当前线程阻塞，等待计数器减为0的时候，所有在await()上等待的线程被唤醒，然后继续向下执行，此时计数器又会被还原为创建时的值，然后可以继续再次使用。

#### 示例3 最后到的人给大家上酒，然后开饭

还是示例1中的例子，员工10是最后到达的，让所有人都久等了，那怎么办，得给所有人倒酒，然后开饭，代码如下：

```java
import java.util.concurrent.BrokenBarrierException;
import java.util.concurrent.CyclicBarrier;
import java.util.concurrent.TimeUnit;

public class Demo3 {
    public static CyclicBarrier cyclicBarrier = new CyclicBarrier(10, () -> {
        //模拟倒酒，花了2秒，又得让其他9个人等2秒
        try {
            TimeUnit.SECONDS.sleep(2);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        System.out.println(Thread.currentThread().getName() + "说，不好意思，让大家久等了，给大家倒酒赔罪!");
    });
    public static class T extends Thread {
        int sleep;
        public T(String name, int sleep) {
            super(name);
            this.sleep = sleep;
        }
        @Override
        public void run() {
            try {
                //模拟休眠
                TimeUnit.SECONDS.sleep(sleep);
                long starTime = System.currentTimeMillis();
                //调用await()的时候，当前线程将会被阻塞，需要等待其他员工都到达await了才能继续
                cyclicBarrier.await();
                long endTime = System.currentTimeMillis();
                System.out.println(this.getName() + ",sleep:" + this.sleep + " 等待了" + (endTime - starTime) + "(ms),开始吃饭了！");
            } catch (InterruptedException e) {
                e.printStackTrace();
            } catch (BrokenBarrierException e) {
                e.printStackTrace();
            }
        }
    }
    public static void main(String[] args) throws InterruptedException {
        for (int i = 1; i <= 10; i++) {
            new T("员工" + i, i).start();
        }
    }
}
```

```java
员工10说，不好意思，让大家久等了，给大家倒酒赔罪!
员工10,sleep:10 等待了2000(ms),开始吃饭了！
员工1,sleep:1 等待了11000(ms),开始吃饭了！
员工2,sleep:2 等待了10000(ms),开始吃饭了！
员工5,sleep:5 等待了7000(ms),开始吃饭了！
员工7,sleep:7 等待了5000(ms),开始吃饭了！
员工9,sleep:9 等待了3000(ms),开始吃饭了！
员工4,sleep:4 等待了8000(ms),开始吃饭了！
员工3,sleep:3 等待了9001(ms),开始吃饭了！
员工8,sleep:8 等待了4001(ms),开始吃饭了！
员工6,sleep:6 等待了6001(ms),开始吃饭了！
```

代码中创建`CyclicBarrier`对象时，多传入了一个参数（内部是倒酒操作），先到的人先等待，待所有人都到齐之后，需要先给大家倒酒，然后唤醒所有等待中的人让大家开饭。从输出结果中我们发现，倒酒操作是由最后一个人操作的，最后一个人倒酒完毕之后，才唤醒所有等待中的其他员工，让大家开饭。

#### 示例4 其中一个人等待中被打断了

员工5等待中，突然接了个电话，有点急事，然后就拿起筷子开吃了，其他人会怎么样呢？看着他吃么？

```java
import java.sql.Time;
import java.util.concurrent.BrokenBarrierException;
import java.util.concurrent.CyclicBarrier;
import java.util.concurrent.TimeUnit;

public class Demo4 {
    public static CyclicBarrier cyclicBarrier = new CyclicBarrier(10);
    public static class T extends Thread {
        int sleep;
        public T(String name, int sleep) {
            super(name);
            this.sleep = sleep;
        }
        @Override
        public void run() {
            long starTime = 0, endTime = 0;
            try {
                //模拟休眠
                TimeUnit.SECONDS.sleep(sleep);
                starTime = System.currentTimeMillis();
                //调用await()的时候，当前线程将会被阻塞，需要等待其他员工都到达await了才能继续
                System.out.println(this.getName() + "到了！");
                cyclicBarrier.await();
            } catch (InterruptedException e) {
                e.printStackTrace();
            } catch (BrokenBarrierException e) {
                e.printStackTrace();
            }
            endTime = System.currentTimeMillis();
            System.out.println(this.getName() + ",sleep:" + this.sleep + " 等待了" + (endTime - starTime) + "(ms),开始吃饭了！");
        }
    }
    public static void main(String[] args) throws InterruptedException {
        for (int i = 1; i <= 10; i++) {
            int sleep = 0;
            if (i == 10) {
                sleep = 10;
            }
            T t = new T("员工" + i, sleep);
            t.start();
            if (i == 5) {
                //模拟员工5接了个电话，将自己等待吃饭给打断了
                TimeUnit.SECONDS.sleep(1);
                System.out.println(t.getName() + ",有点急事，我先开干了！");
                t.interrupt();
                TimeUnit.SECONDS.sleep(2);
            }
        }
    }
}
```

```java
员工4到了！
员工3到了！
员工5到了！
员工1到了！
员工2到了！
员工5,有点急事，我先开干了！
java.util.concurrent.BrokenBarrierException
员工1,sleep:0 等待了1001(ms),开始吃饭了！
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:250)
员工3,sleep:0 等待了1001(ms),开始吃饭了！
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
员工4,sleep:0 等待了1001(ms),开始吃饭了！
    at com.itsoku.chat15.Demo4$T.run(Demo4.java:31)
员工2,sleep:0 等待了1001(ms),开始吃饭了！
员工5,sleep:0 等待了1002(ms),开始吃饭了！
java.util.concurrent.BrokenBarrierException
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:250)
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
    at com.itsoku.chat15.Demo4$T.run(Demo4.java:31)
java.util.concurrent.BrokenBarrierException
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:250)
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
    at com.itsoku.chat15.Demo4$T.run(Demo4.java:31)
java.util.concurrent.BrokenBarrierException
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:250)
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
    at com.itsoku.chat15.Demo4$T.run(Demo4.java:31)
java.lang.InterruptedException
    at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.reportInterruptAfterWait(AbstractQueuedSynchronizer.java:2014)
    at java.util.concurrent.locks.AbstractQueuedSynchronizer$ConditionObject.await(AbstractQueuedSynchronizer.java:2048)
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:234)
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
    at com.itsoku.chat15.Demo4$T.run(Demo4.java:31)
java.util.concurrent.BrokenBarrierException
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:207)
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
    at com.itsoku.chat15.Demo4$T.run(Demo4.java:31)
java.util.concurrent.BrokenBarrierException
员工6到了！
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:207)
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
员工9到了！
    at com.itsoku.chat15.Demo4$T.run(Demo4.java:31)
员工8到了！
员工7到了！
员工6,sleep:0 等待了0(ms),开始吃饭了！
员工7,sleep:0 等待了1(ms),开始吃饭了！
java.util.concurrent.BrokenBarrierException
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:207)
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
    at com.itsoku.chat15.Demo4$T.run(Demo4.java:31)
java.util.concurrent.BrokenBarrierException
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:207)
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
    at com.itsoku.chat15.Demo4$T.run(Demo4.java:31)
员工8,sleep:0 等待了1(ms),开始吃饭了！
员工9,sleep:0 等待了1(ms),开始吃饭了！
Disconnected from the target VM, address: '127.0.0.1:64413', transport: 'socket'
java.util.concurrent.BrokenBarrierException
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:207)
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
    at com.itsoku.chat15.Demo4$T.run(Demo4.java:31)
员工10到了！
员工10,sleep:10 等待了0(ms),开始吃饭了！
```

输出的信息看着有点乱，给大家理一理，员工5遇到急事，拿起筷子就是吃，这样好么，当然不好，他这么做了，后面看他这么做了都跟着这么做（这种场景是不是很熟悉，有一个人拿起筷子先吃起来，其他人都跟着上了），直接不等其他人了，拿起筷子就开吃了。CyclicBarrier遇到这种情况就是这么处理的。前面4个员工都在`await()`处等待着，员工5也在`await()`上等待着，等了1秒（`TimeUnit.SECONDS.sleep(1);`），接了个电话，然后给员工5发送中断信号后（`t.interrupt();`），员工5的await()方法会触发`InterruptedException`异常，此时其他等待中的前4个员工，看着5开吃了，自己立即也不等了，内部从`await()`方法中触发`BrokenBarrierException`异常，然后也开吃了，后面的6/7/8/9/10员工来了以后发现大家都开吃了，自己也不等了，6-10员工调用`await()`直接抛出了`BrokenBarrierException`异常，然后继续向下。

**结论：**

1. **内部有一个人把规则破坏了（接收到中断信号），其他人都不按规则来了，不会等待了**
2. **接收到中断信号的线程，await方法会触发InterruptedException异常，然后被唤醒向下运行**
3. **其他等待中 或者后面到达的线程，会在await()方法上触发`BrokenBarrierException`异常，然后继续执行**

#### 示例5 其中一个人只愿意等的5秒

基于示例1，员工1只愿意等的5秒，5s后如果大家还没到期，自己要开吃了，员工1开吃了，其他人会怎么样呢？

```java
import java.util.concurrent.BrokenBarrierException;
import java.util.concurrent.CyclicBarrier;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

public class Demo5 {
    public static CyclicBarrier cyclicBarrier = new CyclicBarrier(10);
    public static class T extends Thread {
        int sleep;
        public T(String name, int sleep) {
            super(name);
            this.sleep = sleep;
        }
        @Override
        public void run() {
            long starTime = 0, endTime = 0;
            try {
                //模拟休眠
                TimeUnit.SECONDS.sleep(sleep);
                starTime = System.currentTimeMillis();
                //调用await()的时候，当前线程将会被阻塞，需要等待其他员工都到达await了才能继续
                System.out.println(this.getName() + "到了！");
                if (this.getName().equals("员工1")) {
                    cyclicBarrier.await(5, TimeUnit.SECONDS);
                } else {
                    cyclicBarrier.await();
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            } catch (BrokenBarrierException e) {
                e.printStackTrace();
            } catch (TimeoutException e) {
                e.printStackTrace();
            }
            endTime = System.currentTimeMillis();
            System.out.println(this.getName() + ",sleep:" + this.sleep + " 等待了" + (endTime - starTime) + "(ms),开始吃饭了！");
        }
    }
    public static void main(String[] args) throws InterruptedException {
        for (int i = 1; i <= 10; i++) {
            T t = new T("员工" + i, i);
            t.start();
        }
    }
}
```

```java
员工1到了！
员工2到了！
员工3到了！
员工4到了！
员工5到了！
员工6到了！
员工1,sleep:1 等待了5001(ms),开始吃饭了！
员工5,sleep:5 等待了1001(ms),开始吃饭了！
java.util.concurrent.TimeoutException
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:257)
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:435)
    at com.itsoku.chat15.Demo5$T.run(Demo5.java:32)
java.util.concurrent.BrokenBarrierException
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:250)
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
    at com.itsoku.chat15.Demo5$T.run(Demo5.java:34)
java.util.concurrent.BrokenBarrierException
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:207)
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
    at com.itsoku.chat15.Demo5$T.run(Demo5.java:34)
员工6,sleep:6 等待了2(ms),开始吃饭了！
java.util.concurrent.BrokenBarrierException
员工2,sleep:2 等待了4002(ms),开始吃饭了！
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:250)
员工3,sleep:3 等待了3001(ms),开始吃饭了！
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
员工4,sleep:4 等待了2001(ms),开始吃饭了！
    at com.itsoku.chat15.Demo5$T.run(Demo5.java:34)
java.util.concurrent.BrokenBarrierException
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:250)
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
    at com.itsoku.chat15.Demo5$T.run(Demo5.java:34)
java.util.concurrent.BrokenBarrierException
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:250)
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
    at com.itsoku.chat15.Demo5$T.run(Demo5.java:34)
java.util.concurrent.BrokenBarrierException
员工7到了！
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:207)
员工7,sleep:7 等待了0(ms),开始吃饭了！
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
    at com.itsoku.chat15.Demo5$T.run(Demo5.java:34)
员工8到了！
员工8,sleep:8 等待了0(ms),开始吃饭了！
java.util.concurrent.BrokenBarrierException
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:207)
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
    at com.itsoku.chat15.Demo5$T.run(Demo5.java:34)
员工9到了！
java.util.concurrent.BrokenBarrierException
员工9,sleep:9 等待了0(ms),开始吃饭了！
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:207)
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
    at com.itsoku.chat15.Demo5$T.run(Demo5.java:34)
java.util.concurrent.BrokenBarrierException
员工10到了！
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:207)
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
员工10,sleep:10 等待了0(ms),开始吃饭了！
    at com.itsoku.chat15.Demo5$T.run(Demo5.java:34)
```

从输出结果中我们可以看到：1等待5秒之后，开吃了，其他等待人都开吃了，后面来的人不等待，直接开吃了。

员工1调用有参`await`方法等待5秒之后，触发了`TimeoutException`异常，然后继续向下运行，其他的在5开吃之前已经等了一会的的几个员工，他们看到5开吃了，自己立即不等待了，也也开吃了（他们的`await`抛出了`BrokenBarrierException`异常）；还有几个员工在5开吃之后到达的，他们直接不等待了，直接抛出`BrokenBarrierException`异常，然后也开吃了。

**结论：**

1. **等待超时的方法**

   ```java
   public int await(long timeout, TimeUnit unit) throws InterruptedException,BrokenBarrierException,TimeoutException
   ```

2. **内部有一个人把规则破坏了（等待超时），其他人都不按规则来了，不会等待了**

3. **等待超时的线程，await方法会触发TimeoutException异常，然后被唤醒向下运行**

4. **其他等待中 或者后面到达的线程，会在await()方法上触发`BrokenBarrierException`异常，然后继续执行**

#### 示例6 重建规则

示例5中改造一下，员工1等待5秒超时之后，开吃了，打破了规则，先前等待中的以及后面到达的都不按规则来了，都拿起筷子开吃。过了一会，导游重新告知大家，要按规则来，然后重建了规则，大家都按规则来了。

```java
import java.util.concurrent.BrokenBarrierException;
import java.util.concurrent.CyclicBarrier;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

public class Demo6 {
    public static CyclicBarrier cyclicBarrier = new CyclicBarrier(10);
    //规则是否已重建
    public static boolean guizhe = false;
    public static class T extends Thread {
        int sleep;
        public T(String name, int sleep) {
            super(name);
            this.sleep = sleep;
        }
        @Override
        public void run() {
            long starTime = 0, endTime = 0;
            try {
                //模拟休眠
                TimeUnit.SECONDS.sleep(sleep);
                starTime = System.currentTimeMillis();
                //调用await()的时候，当前线程将会被阻塞，需要等待其他员工都到达await了才能继续
                System.out.println(this.getName() + "到了！");
                if (!guizhe) {
                    if (this.getName().equals("员工1")) {
                        cyclicBarrier.await(5, TimeUnit.SECONDS);
                    } else {
                        cyclicBarrier.await();
                    }
                } else {
                    cyclicBarrier.await();
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            } catch (BrokenBarrierException e) {
                e.printStackTrace();
            } catch (TimeoutException e) {
                e.printStackTrace();
            }
            endTime = System.currentTimeMillis();
            System.out.println(this.getName() + ",sleep:" + this.sleep + " 等待了" + (endTime - starTime) + "(ms),开始吃饭了！");
        }
    }
    public static void main(String[] args) throws InterruptedException {
        for (int i = 1; i <= 10; i++) {
            T t = new T("员工" + i, i);
            t.start();
        }
        //等待10秒之后，重置，重建规则
        TimeUnit.SECONDS.sleep(15);
        cyclicBarrier.reset();
        guizhe = true;
        System.out.println("---------------大家太皮了，请大家按规则来------------------");
        //再来一次
        for (int i = 1; i <= 10; i++) {
            T t = new T("员工" + i, i);
            t.start();
        }
    }
}
```

```java
员工1到了！
员工2到了！
员工3到了！
员工4到了！
员工5到了！
java.util.concurrent.TimeoutException
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:257)
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:435)
    at com.itsoku.chat15.Demo6$T.run(Demo6.java:36)
java.util.concurrent.BrokenBarrierException
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:250)
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
    at com.itsoku.chat15.Demo6$T.run(Demo6.java:38)
java.util.concurrent.BrokenBarrierException
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:250)
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
    at com.itsoku.chat15.Demo6$T.run(Demo6.java:38)
java.util.concurrent.BrokenBarrierException
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:250)
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
    at com.itsoku.chat15.Demo6$T.run(Demo6.java:38)
java.util.concurrent.BrokenBarrierException
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:250)
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
    at com.itsoku.chat15.Demo6$T.run(Demo6.java:38)
java.util.concurrent.BrokenBarrierException
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:250)
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
    at com.itsoku.chat15.Demo6$T.run(Demo6.java:38)
员工6到了！
员工1,sleep:1 等待了5002(ms),开始吃饭了！
员工6,sleep:6 等待了4(ms),开始吃饭了！
员工4,sleep:4 等待了2004(ms),开始吃饭了！
员工5,sleep:5 等待了1004(ms),开始吃饭了！
员工3,sleep:3 等待了3002(ms),开始吃饭了！
员工2,sleep:2 等待了4004(ms),开始吃饭了！
员工7到了！
员工7,sleep:7 等待了0(ms),开始吃饭了！
java.util.concurrent.BrokenBarrierException
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:207)
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
    at com.itsoku.chat15.Demo6$T.run(Demo6.java:38)
java.util.concurrent.BrokenBarrierException
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:207)
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
    at com.itsoku.chat15.Demo6$T.run(Demo6.java:38)
员工8到了！
员工8,sleep:8 等待了0(ms),开始吃饭了！
java.util.concurrent.BrokenBarrierException
员工9到了！
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:207)
员工9,sleep:9 等待了0(ms),开始吃饭了！
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
    at com.itsoku.chat15.Demo6$T.run(Demo6.java:38)
java.util.concurrent.BrokenBarrierException
员工10到了！
    at java.util.concurrent.CyclicBarrier.dowait(CyclicBarrier.java:207)
员工10,sleep:10 等待了0(ms),开始吃饭了！
    at java.util.concurrent.CyclicBarrier.await(CyclicBarrier.java:362)
    at com.itsoku.chat15.Demo6$T.run(Demo6.java:38)
---------------大家太皮了，请大家按规则来------------------
员工1到了！
员工2到了！
员工3到了！
员工4到了！
员工5到了！
员工6到了！
员工7到了！
员工8到了！
员工9到了！
员工10到了！
员工10,sleep:10 等待了0(ms),开始吃饭了！
员工1,sleep:1 等待了9000(ms),开始吃饭了！
员工2,sleep:2 等待了8000(ms),开始吃饭了！
员工3,sleep:3 等待了6999(ms),开始吃饭了！
员工7,sleep:7 等待了3000(ms),开始吃饭了！
员工6,sleep:6 等待了4000(ms),开始吃饭了！
员工5,sleep:5 等待了5000(ms),开始吃饭了！
员工4,sleep:4 等待了6000(ms),开始吃饭了！
员工9,sleep:9 等待了999(ms),开始吃饭了！
员工8,sleep:8 等待了1999(ms),开始吃饭了！
```

第一次规则被打乱了，过了一会导游重建了规则（`cyclicBarrier.reset();`），接着又重来来了一次模拟等待吃饭的操作，正常了。

#### CountDownLatch和CyclicBarrier的区别

还是举例子说明一下：

**CountDownLatch示例**

主管相当于 **CountDownLatch**，干活的小弟相当于做事情的线程。

老板交给主管了一个任务，让主管搞完之后立即上报给老板。主管下面有10个小弟，接到任务之后将任务划分为10个小任务分给每个小弟去干，主管一直处于等待状态（主管会调用`await()`方法，此方法会阻塞当前线程），让每个小弟干完之后通知一下主管（调用`countDown()`方法通知主管，此方法会立即返回），主管等到所有的小弟都做完了，会被唤醒，从await()方法上苏醒，然后将结果反馈给老板。期间主管会等待，会等待所有小弟将结果汇报给自己。

**而CyclicBarrier是一批线程让自己等待，等待所有的线程都准备好了，自己才能继续。**

### 3、Semaphore信号灯

Semaphore（信号量）为多线程协作提供了更为强大的控制方法，前面的文章中我们学了synchronized和重入锁ReentrantLock，这2种锁一次都只能允许一个线程访问一个资源，而信号量可以控制有多少个线程可以**同时访问**特定的资源。

**Semaphore常用场景：限流**

举个例子：

比如有个停车场，有5个空位，门口有个门卫，手中5把钥匙分别对应5个车位上面的锁，来一辆车，门卫会给司机一把钥匙，然后进去找到对应的车位停下来，出去的时候司机将钥匙归还给门卫。停车场生意比较好，同时来了100两车，门卫手中只有5把钥匙，同时只能放5辆车进入，其他车只能等待，等有人将钥匙归还给门卫之后，才能让其他车辆进入。

上面的例子中门卫就相当于Semaphore，车钥匙就相当于许可证，车就相当于线程。

#### 1、Semaphore主要方法

- **Semaphore(int permits)**：构造方法，参数表示许可证数量，用来创建信号量
- **Semaphore(int permits,boolean fair)**：构造方法，当fair等于true时，创建具有给定许可数的计数信号量并设置为公平信号量
- **void acquire() throws InterruptedException**：从此信号量获取1个许可前线程将一直阻塞，相当于一辆车占了一个车位，此方法会响应线程中断，表示调用线程的interrupt方法，会使该方法抛出InterruptedException异常
- **void acquire(int permits) throws InterruptedException** ：和acquire()方法类似，参数表示需要获取许可的数量；比如一个大卡车要入停车场，由于车比较大，需要申请3个车位才可以停放
- **void acquireUninterruptibly(int permits)** ：和acquire(int permits) 方法类似，只是不会响应线程中断
- **boolean tryAcquire()**：尝试获取1个许可，不管是否能够获取成功，都立即返回，true表示获取成功，false表示获取失败
- **boolean tryAcquire(int permits)**：和tryAcquire()，表示尝试获取permits个许可
- **boolean tryAcquire(long timeout, TimeUnit unit) throws InterruptedException**：尝试在指定的时间内获取1个许可，获取成功返回true，指定的时间过后还是无法获取许可，返回false
- **boolean tryAcquire(int permits, long timeout, TimeUnit unit) throws InterruptedException**：和tryAcquire(long timeout, TimeUnit unit)类似，多了一个permits参数，表示尝试获取permits个许可
- **void release()**：释放一个许可，将其返回给信号量，相当于车从停车场出去时将钥匙归还给门卫
- **void release(int n)**：释放n个许可
- **int availablePermits()**：当前可用的许可数

```java
package com.xue.thread;
 
import java.util.Random;
import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;
 
/**
 * 
 * @Description: TODO(这里用一句话描述这个类的作用)  
 * 
 * 在信号量上我们定义两种操作：
 * acquire（获取） 当一个线程调用acquire操作时，它要么通过成功获取信号量（信号量减1），
 *             要么一直等下去，直到有线程释放信号量，或超时。
 * release（释放）实际上会将信号量的值加1，然后唤醒等待的线程。
 * 
 * 信号量主要用于两个目的，一个是用于多个共享资源的互斥使用，另一个用于并发线程数的控制。
 */
public class SemaphoreDemo
{
  public static void main(String[] args)
  {
     Semaphore semaphore = new Semaphore(3);//模拟3个停车位
     
     for (int i = 1; i <=6; i++) //模拟6部汽车
     {
       new Thread(() -> {
          try 
          {
            semaphore.acquire();
            System.out.println(Thread.currentThread().getName()+"\t 抢到了车位");
            TimeUnit.SECONDS.sleep(new Random().nextInt(5));
            System.out.println(Thread.currentThread().getName()+"\t------- 离开");
          } catch (InterruptedException e) {
            e.printStackTrace();
          }finally {
            semaphore.release();
          }
       }, String.valueOf(i)).start();
     }
     
  }
}
```

在信号量上我们定义两种操作：

- acquire（获取） 当一个线程调用acquire操作时，它要么通过成功获取信号量（信号量减1），要么一直等下去，直到有线程释放信号量，或超时。
- release（释放）实际上会将信号量的值加1，然后唤醒等待的线程。
- 信号量主要用于两个目的，一个是用于多个共享资源的互斥使用，另一个用于并发线程数的控制。

#### 2、Semaphore简单的使用

```java
import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;

public class Demo1 {
    static Semaphore semaphore = new Semaphore(2);
    public static class T extends Thread {
        public T(String name) {
            super(name);
        }
        @Override
        public void run() {
            Thread thread = Thread.currentThread();
            try {
                semaphore.acquire();
                System.out.println(System.currentTimeMillis() + "," + thread.getName() + ",获取许可!");
                TimeUnit.SECONDS.sleep(3);
            } catch (InterruptedException e) {
                e.printStackTrace();
            } finally {
                semaphore.release();
                System.out.println(System.currentTimeMillis() + "," + thread.getName() + ",释放许可!");
            }
        }
    }
    public static void main(String[] args) throws InterruptedException {
        for (int i = 0; i < 10; i++) {
            new T("t-" + i).start();
        }
    }
}
```

代码中`new Semaphore(2)`创建了许可数量为2的信号量，每个线程获取1个许可，同时允许两个线程获取许可，从输出中也可以看出，同时有两个线程可以获取许可，其他线程需要等待已获取许可的线程释放许可之后才能运行。为获取到许可的线程会阻塞在`acquire()`方法上，直到获取到许可才能继续。

#### 3、获取许可之后不释放

门卫（Semaphore）有点呆，司机进去的时候给了钥匙，出来的时候不归还，门卫也不会说什么。最终结果就是其他车辆都无法进入了。

```java
import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;

public class Demo2 {
    static Semaphore semaphore = new Semaphore(2);
    public static class T extends Thread {
        public T(String name) {
            super(name);
        }
        @Override
        public void run() {
            Thread thread = Thread.currentThread();
            try {
                semaphore.acquire();
                System.out.println(System.currentTimeMillis() + "," + thread.getName() + ",获取许可!");
                TimeUnit.SECONDS.sleep(3);
                System.out.println(System.currentTimeMillis() + "," + thread.getName() + ",运行结束!");
                System.out.println(System.currentTimeMillis() + "," + thread.getName() + ",当前可用许可数量:" + semaphore.availablePermits());
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
    public static void main(String[] args) throws InterruptedException {
        for (int i = 0; i < 10; i++) {
            new T("t-" + i).start();
        }
    }
}
```

上面程序运行后一直无法结束，观察一下代码，代码中获取许可后，没有释放许可的代码，最终导致，可用许可数量为0，其他线程无法获取许可，会在`semaphore.acquire();`处等待，导致程序无法结束。

#### 4、释放许可正确的姿势

示例1中，在finally里面释放锁，会有问题么？

如果获取锁的过程中发生异常，导致获取锁失败，最后finally里面也释放了许可，最终会怎么样，导致许可数量凭空增长了。

示例代码：

```java
import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;

public class Demo3 {
    static Semaphore semaphore = new Semaphore(1);
    public static class T extends Thread {
        public T(String name) {
            super(name);
        }
        @Override
        public void run() {
            Thread thread = Thread.currentThread();
            try {
                semaphore.acquire();
                System.out.println(System.currentTimeMillis() + "," + thread.getName() + ",获取许可,当前可用许可数量:" + semaphore.availablePermits());
                //休眠100秒
                TimeUnit.SECONDS.sleep(100);
                System.out.println(System.currentTimeMillis() + "," + thread.getName() + ",运行结束!");
            } catch (InterruptedException e) {
                e.printStackTrace();
            } finally {
                semaphore.release();
            }
            System.out.println(System.currentTimeMillis() + "," + thread.getName() + ",当前可用许可数量:" + semaphore.availablePermits());
        }
    }
    public static void main(String[] args) throws InterruptedException {
        T t1 = new T("t1");
        t1.start();
        //休眠1秒
        TimeUnit.SECONDS.sleep(1);
        T t2 = new T("t2");
        t2.start();
        //休眠1秒
        TimeUnit.SECONDS.sleep(1);
        T t3 = new T("t3");
        t3.start();
        //给t2和t3发送中断信号
        t2.interrupt();
        t3.interrupt();
    }
}
```

程序中信号量许可数量为1，创建了3个线程获取许可，线程t1获取成功了，然后休眠100秒。其他两个线程阻塞在`semaphore.acquire();`方法处，代码中对线程t2、t3发送中断信号，我们看一下Semaphore中acquire的源码：

```java
public void acquire() throws InterruptedException
```

这个方法会响应线程中断，主线程中对t2、t3发送中断信号之后，`acquire()`方法会触发`InterruptedException`异常，t2、t3最终没有获取到许可，但是他们都执行了finally中的释放许可的操作，最后导致许可数量变为了2，导致许可数量增加了。所以程序中释放许可的方式有问题。需要改进一下，获取许可成功才去释放锁。

**正确的释放锁的方式，如下：**

```java
import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;

public class Demo4 {
    static Semaphore semaphore = new Semaphore(1);
    public static class T extends Thread {
        public T(String name) {
            super(name);
        }
        @Override
        public void run() {
            Thread thread = Thread.currentThread();
            //获取许可是否成功
            boolean acquireSuccess = false;
            try {
                semaphore.acquire();
                acquireSuccess = true;
                System.out.println(System.currentTimeMillis() + "," + thread.getName() + ",获取许可,当前可用许可数量:" + semaphore.availablePermits());
                //休眠100秒
                TimeUnit.SECONDS.sleep(5);
                System.out.println(System.currentTimeMillis() + "," + thread.getName() + ",运行结束!");
            } catch (InterruptedException e) {
                e.printStackTrace();
            } finally {
                if (acquireSuccess) {
                    semaphore.release();
                }
            }
            System.out.println(System.currentTimeMillis() + "," + thread.getName() + ",当前可用许可数量:" + semaphore.availablePermits());
        }
    }
    public static void main(String[] args) throws InterruptedException {
        T t1 = new T("t1");
        t1.start();
        //休眠1秒
        TimeUnit.SECONDS.sleep(1);
        T t2 = new T("t2");
        t2.start();
        //休眠1秒
        TimeUnit.SECONDS.sleep(1);
        T t3 = new T("t3");
        t3.start();
        //给t2和t3发送中断信号
        t2.interrupt();
        t3.interrupt();
    }
}
```

程序中增加了一个变量`acquireSuccess`用来标记获取许可是否成功，在finally中根据这个变量是否为true，来确定是否释放许可。

#### 5、在规定的时间内希望获取许可

司机来到停车场，发现停车场已经满了，只能在外等待内部的车出来之后才能进去，但是要等多久，他自己也不知道，他希望等10分钟，如果还是无法进去，就不到这里停车了。

Semaphore内部2个方法可以提供超时获取许可的功能：

```java
public boolean tryAcquire(long timeout, TimeUnit unit) throws InterruptedException
public boolean tryAcquire(int permits, long timeout, TimeUnit unit)
        throws InterruptedException
```

在指定的时间内去尝试获取许可，如果能够获取到，返回true，获取不到返回false。

```java
import java.util.concurrent.Semaphore;
import java.util.concurrent.TimeUnit;

public class Demo5 {
    static Semaphore semaphore = new Semaphore(1);
    public static class T extends Thread {
        public T(String name) {
            super(name);
        }
        @Override
        public void run() {
            Thread thread = Thread.currentThread();
            //获取许可是否成功
            boolean acquireSuccess = false;
            try {
                //尝试在1秒内获取许可，获取成功返回true，否则返回false
                System.out.println(System.currentTimeMillis() + "," + thread.getName() + ",尝试获取许可,当前可用许可数量:" + semaphore.availablePermits());
                acquireSuccess = semaphore.tryAcquire(1, TimeUnit.SECONDS);
                //获取成功执行业务代码
                if (acquireSuccess) {
                    System.out.println(System.currentTimeMillis() + "," + thread.getName() + ",获取许可成功,当前可用许可数量:" + semaphore.availablePermits());
                    //休眠5秒
                    TimeUnit.SECONDS.sleep(5);
                } else {
                    System.out.println(System.currentTimeMillis() + "," + thread.getName() + ",获取许可失败,当前可用许可数量:" + semaphore.availablePermits());
                }
            } catch (InterruptedException e) {
                e.printStackTrace();
            } finally {
                if (acquireSuccess) {
                    semaphore.release();
                }
            }
        }
    }
    public static void main(String[] args) throws InterruptedException {
        T t1 = new T("t1");
        t1.start();
        //休眠1秒
        TimeUnit.SECONDS.sleep(1);
        T t2 = new T("t2");
        t2.start();
        //休眠1秒
        TimeUnit.SECONDS.sleep(1);
        T t3 = new T("t3");
        t3.start();
    }
}
```

代码中许可数量为1，`semaphore.tryAcquire(1, TimeUnit.SECONDS);`：表示尝试在1秒内获取许可，获取成功立即返回true，超过1秒还是获取不到，返回false。线程t1获取许可成功，之后休眠了5秒，从输出中可以看出t2和t3都尝试了1秒，获取失败。

#### 6、其他一些使用说明

1. Semaphore默认创建的是非公平的信号量，什么意思呢？这个涉及到公平与非公平。举个例子：5个车位，允许5个车辆进去，来了100辆车，只能进去5辆，其他95在外面排队等着。里面刚好出来了1辆，此时刚好又来了10辆车，这10辆车是直接插队到其他95辆前面去，还是到95辆后面去排队呢？排队就表示公平，直接去插队争抢第一个，就表示不公平。对于停车场，排队肯定更好一些咯。不过对于信号量来说不公平的效率更高一些，所以默认是不公平的。
2. 建议阅读以下Semaphore的源码，对常用的方法有个了解，不需要都记住，用的时候也方便查询就好。
3. 方法中带有`throws InterruptedException`声明的，表示这个方法会响应线程中断信号，什么意思？表示调用线程的`interrupt()`方法，会让这些方法触发`InterruptedException`异常，即使这些方法处于阻塞状态，也会立即返回，并抛出`InterruptedException`异常，线程中断信号也会被清除。

## 九、Java内存模型之JMM

JMM(java内存模型)，由于并发程序要比串行程序复杂很多，其中一个重要原因是并发程序中数据访问**一致性**和**安全性**将会受到严重挑战。**如何保证一个线程可以看到正确的数据呢？**这个问题看起来很白痴。对于串行程序来说，根本就是小菜一碟，如果你读取一个变量，这个变量的值是1，那么你读取到的一定是1，就是这么简单的问题在并行程序中居然变得复杂起来。事实上，如果不加控制地任由线程胡乱并行，即使原本是1的数值，你也可能读到2。因此我们需要在深入了解并行机制的前提下，再定义一种规则，保证多个线程间可以有小弟，正确地协同工作。而JMM也就是为此而生的。

### 1、计算机硬件存储体系

 计算机存储结构，从本地磁盘到主存到CPU缓存，也就是从硬盘到内存，到CPU。一般对应的程序的操作就是从数据库查数据到内存然后到CPU进行计算

![image-20210917214130116](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210917214130116.png)

​		因为有这么多级的缓存(cpu和物理主内存的速度不一致的)，CPU的运行并不是直接操作内存而是先把内存里边的数据读到缓存，而内存的读和写操作的时候就会造成不一致的问题

![image-20210917214254898](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210917214254898.png)

​		Java虚拟机规范中试图定义一种Java内存模型（java Memory Model，简称JMM) 来屏蔽掉各种硬件和操作系统的内存访问差异，以实现让Java程序在各种平台下都能达到一致的内存访问效果。推导出我们需要知道JMM

### 2、Java内存模型Java Memory Model

​		JMM(Java内存模型Java Memory Model，简称JMM)本身是一种抽象的概念并不真实存在它仅仅描述的是一组约定或规范，通过这组规范定义了程序中(尤其是多线程)各个变量的读写访问方式并决定一个线程对共享变量的写入何时以及如何变成对另一个线程可见，关键技术点都是围绕多线程的原子性、可见性和有序性展开的。

 原则：
 JMM的关键技术点都是围绕多线程的原子性、可见性和有序性展开的

能干嘛？
1 通过JMM来实现线程和主内存之间的抽象关系。
2 屏蔽各个硬件平台和操作系统的内存访问差异以实现让Java程序在各种平台下都能达到一致的内存访问效果。

### 3、JMM规范下，三大特性

#### 1、可见性

![image-20210917214426713](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210917214426713.png)

​		Java中普通的共享变量不保证可见性，因为数据修改被写入内存的时机是不确定的，多线程并发下很可能出现"脏读"，所以每个线程都有自己的工作内存，线程自己的工作内存中保存了该线程使用到的变量的主内存副本拷贝，线程对变量的所有操作（读取，赋值等 ）都必需在线程自己的工作内存中进行，而不能够直接读写主内存中的变量。不同线程之间也无法直接访问对方工作内存中的变量，线程间变量值的传递均需要通过主内存来完成

![image-20210917214441440](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210917214441440.png)

 线程脏读：如果没有可见性保证

![image-20210917214501491](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210917214501491.png)

#### 2、原子性

指一个操作是不可中断的，即多线程环境下，操作不能被其他线程干扰

原子性是指**操作是不可分的**，要么全部一起执行，要么不执行。在java中，其表现在对于共享变量的某些操作，是不可分的，必须连续的完成。比如a++，对于共享变量a的操作，实际上会执行3个步骤：

1.读取变量a的值，假如a=1
2.a的值+1，为2
3.将2值赋值给变量a，此时a的值应该为2

这三个操作中任意一个操作，a的值如果被其他线程篡改了，那么都会出现我们不希望出现的结果。所以必须保证这3个操作是原子性的，在操作a++的过程中，其他线程不会改变a的值，如果在上面的过程中出现其他线程修改了a的值，在满足原子性的原则下，上面的操作应该失败。

#### 3、有序性

对于一个线程的执行代码而言，我们总是习惯性认为代码的执行总是从上到下，有序执行。
但为了提供性能，编译器和处理器通常会对指令序列进行重新排序。
指令重排可以保证串行语义一致，但没有义务保证多线程间的语义也一致，即可能产生"脏读"，简单说，
两行以上不相干的代码在执行的时候有可能先执行的不是第一条，不见得是从上到下顺序执行，执行顺序会被优化。

![image-20210917214606690](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210917214606690.png)

单线程环境里面确保程序最终执行结果和代码顺序执行的结果一致。
处理器在进行重排序时必须要考虑指令之间的数据依赖性
多线程环境中线程交替执行,由于编译器优化重排的存在，两个线程中使用的变量能否保证一致性是无法确定的,结果无法预测

![image-20210917214623939](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210917214623939.png)

### 4、JMM规范下，多线程对变量的读写过程

#### 1、读取过程

​		由于JVM运行程序的实体是线程，而每个线程创建时JVM都会为其创建一个工作内存(有些地方称为栈空间)，工作内存是每个线程的私有数据区域，而Java内存模型中规定所有变量都存储在主内存，主内存是共享内存区域，所有线程都可以访问，但线程对变量的操作(读取赋值等)必须在工作内存中进行，首先要将变量从主内存拷贝到的线程自己的工作内存空间，然后对变量进行操作，操作完成后再将变量写回主内存，不能直接操作主内存中的变量，各个线程中的工作内存中存储着主内存中的变量副本拷贝，因此不同的线程间无法访问对方的工作内存，线程间的通信(传值)必须通过主内存来完成，其简要访问过程如下图:

![image-20210917214744040](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210917214744040.png)

JMM定义了线程和主内存之间的抽象关系
1 线程之间的共享变量存储在主内存中(从硬件角度来说就是内存条)
2 每个线程都有一个私有的本地工作内存，本地工作内存中存储了该线程用来读/写共享变量的副本(从硬件角度来说就是CPU的缓存，比如寄存器、L1、L2、L3缓存等)

#### 2、小总结

- 我们定义的所有共享变量都储存在物理主内存中
- 每个线程都有自己独立的工作内存，里面保存该线程使用到的变量的副本(主内存中该变量的一份拷贝)
- 线程对共享变量所有的操作都必须先在线程自己的工作内存中进行后写回主内存，不能直接从主内存中读写(不能越级)
- 不同线程之间也无法直接访问其他线程的工作内存中的变量，线程间变量值的传递需要通过主内存来进行(同级不能相互访问)

### 5、JMM规范下，多线程先行发生原则之happens-before

在JMM中，如果一个操作执行的结果需要对另一个操作可见性或者 代码重排序，那么这两个操作之间必须存在happens-before关系。

![image-20210917214911737](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210917214911737.png)

#### 1、先行发生原则说明 

​		如果Java内存模型中所有的有序性都仅靠volatile和synchronized来完成，那么有很多操作都将会变得非常啰嗦，
但是我们在编写Java并发代码的时候并没有察觉到这一点。

​		我们没有时时、处处、次次，添加volatile和synchronized来完成程序，这是因为Java语言中JMM原则下有一个“先行发生”(Happens-Before)的原则限制和规矩

这个原则非常重要： 
		它是判断数据是否存在竞争，线程是否安全的非常有用的手段。依赖这个原则，我们可以通过几条简单规则一揽子解决并发环境下两个操
作之间是否可能存在冲突的所有问题，而不需要陷入Java内存模型苦涩难懂的底层编译原理之中。

#### 2、happens-before总原则

- 如果一个操作happens-before另一个操作，那么第一个操作的执行结果将对第二个操作可见，而且第一个操作的执行顺序排在第二个操作之前。
- 两个操作之间存在happens-before关系，并不意味着一定要按照happens-before原则制定的顺序来执行。如果重排序之后的执行结果与按照happens-before关系来执行的结果一致，那么这种重排序并不非法。
  - 1+2+3 = 3+2+1
  - 周一张三周二李四，假如有事情调换班可以的

### 6、happens-before之8条

#### 1、次序规则

一个线程内，按照代码顺序，写在前面的操作先行发生于写在后面的操作；

前一个操作的结果可以被后续的操作获取。讲白点就是前面一个操作把变量X赋值为1，那后面一个操作肯定能知道X已经变成了1。

#### 2、锁定规则

一个unLock操作先行发生于后面((这里的“后面”是指时间上的先后))对同一个锁的lock操作；

```java
public class HappenBeforeDemo
{
    static Object objectLock = new Object();

    public static void main(String[] args) throws InterruptedException
    {
        //对于同一把锁objectLock，threadA一定先unlock同一把锁后B才能获得该锁，   A 先行发生于B
        synchronized (objectLock)
        {

        }
    }
}
```

#### 3、volatile变量规则

对一个volatile变量的写操作先行发生于后面对这个变量的读操作，前面的写对后面的读是可见的，这里的“后面”同样是指时间上的先后。

#### 4、传递规则

如果操作A先行发生于操作B，而操作B又先行发生于操作C，则可以得出操作A先行发生于操作C；

#### 5、线程启动规则(Thread Start Rule)

Thread对象的start()方法先行发生于此线程的每一个动作

#### 6、线程中断规则(Thread Interruption Rule)

对线程interrupt()方法的调用先行发生于被中断线程的代码检测到中断事件的发生；

可以通过Thread.interrupted()检测到是否发生中断

#### 7、线程终止规则(Thread Termination Rule)

线程中的所有操作都先行发生于对此线程的终止检测，我们可以通过Thread::join()方法是否结束、
Thread::isAlive()的返回值等手段检测线程是否已经终止执行。

#### 8、对象终结规则(Finalizer Rule)

一个对象的初始化完成（构造函数执行结束）先行发生于它的finalize()方法的开始

对象没有完成初始化之前，是不能调用finalized()方法的

### 7、案例说明

![image-20210917215555073](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210917215555073.png)

​		假设存在线程A和B，线程A先（时间上的先后）调用了setValue(1)，然后线程B调用了同一个对象的getValue()，那么线程B收到的返回值是什么？

我们就这段简单的代码一次分析happens-before的规则（规则5、6、7、8 可以忽略，因为他们和这段代码毫无关系）：
1 由于两个方法是由不同的线程调用，不在同一个线程中，所以肯定不满足程序次序规则；
2 两个方法都没有使用锁，所以不满足锁定规则；
3 变量不是用volatile修饰的，所以volatile变量规则不满足；
4 传递规则肯定不满足；

​		所以我们无法通过happens-before原则推导出线程A happens-before线程B，虽然可以确认在时间上线程A优先于线程B指定，但就是无法确认线程B获得的结果是什么，所以这段代码不是线程安全的。那么怎么修复这段代码呢？

- 把getter/setter方法都定义为synchronized方法
- 把value定义为volatile变量，由于setter方法对value的修改不依赖value的原值，满足volatile关键字使用场景

## 十、volatile与Java内存模型

### 1、被volatile修改的变量有2大特点

- 可见性
- 有序性

### 2、volatile的内存语义

- 当写一个volatile变量时，JMM会把该线程对应的本地内存中的共享变量值立即刷新回主内存中。
- 当读一个volatile变量时，JMM会把该线程对应的本地内存设置为无效，直接从主内存中读取共享变量
- 所以volatile的写内存语义是直接刷新到主内存中，读的内存语义是直接从主内存中读取。

### 3、内存屏障（重点）

#### 1、生活case

- 没有管控，顺序难保

- 设定规则，禁止乱序

![image-20210922203923024](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922203923024.png)

上海南京路步行街武警“人墙”当红灯

![image-20210922204024363](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922204024363.png)

![image-20210922204027690](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922204027690.png)

#### 2、内存屏障是什么

​		内存屏障（也称内存栅栏，内存栅障，屏障指令等，是一类同步屏障指令，是CPU或编译器在对内存随机访问的操作中的一个同步点，使得此点之前的所有读写操作都执行后才可以开始执行此点之后的操作），避免代码重排序。内存屏障其实就是一种JVM指令，Java内存模型的重排规则会要求Java编译器在生成JVM指令时插入特定的内存屏障指令，通过这些内存屏障指令，volatile实现了Java内存模型中的可见性和有序性，但volatile无法保证原子性。

​		内存屏障之前的所有写操作都要回写到主内存，内存屏障之后的所有读操作都能获得内存屏障之前的所有写操作的最新结果(实现了可见性)。

![image-20210922204126528](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922204126528.png)

因此重排序时，不允许把内存屏障之后的指令重排序到内存屏障之前。
一句话：对一个 volatile 域的写, happens-before 于任意后续对这个 volatile 域的读，也叫写后读。

#### 3、volatile凭什么可以保证可见性和有序性？？？

内存屏障 (Memory Barriers / Fences)

#### 4、JVM中提供了四类内存屏障指令

Unsafe.class

![image-20210922204301539](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922204301539.png)

Unsafe.java

![image-20210922204320477](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922204320477.png)

Unsafe.cpp

![image-20210922204329642](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922204329642.png)

OrderAccess.hpp

![image-20210922204339917](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922204339917.png)

orderAccess_linux_x86.inline.hpp

![image-20210922204349150](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922204349150.png)



#### 5、四大屏障分别是什么意思

![image-20210922204417963](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922204417963.png)

orderAccess_linux_x86.inline.hpp

![image-20210922204432078](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922204432078.png)

#### 6、happens-before 之 volatile 变量规则

![image-20210922204533258](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922204533258.png)

| 当第一个操作为volatile读时，不论第二个操作是什么，都不能重排序。这个操作保证了volatile读之后的操作不会被重排到volatile读之前。 |
| ------------------------------------------------------------ |
| 当第二个操作为volatile写时，不论第一个操作是什么，都不能重排序。这个操作保证了volatile写之前的操作不会被重排到volatile写之后。 |
| 当第一个操作为volatile写时，第二个操作为volatile读时，不能重排。 |

#### 7、JMM 就将内存屏障插⼊策略分为 4 种

- 写
  - 在每个 volatile 写操作的前⾯插⼊⼀个 StoreStore 屏障
  - 在每个 volatile 写操作的后⾯插⼊⼀个 StoreLoad 屏障

- 读
  - 在每个 volatile 读操作的后⾯插⼊⼀个 LoadLoad 屏障
  - 在每个 volatile 读操作的后⾯插⼊⼀个 LoadStore 屏障

![image-20210922204820482](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922204820482.png)

### 4、volatile特性

#### 1、保证可见性

保证不同线程对这个变量进行操作时的可见性，即变量一旦改变所有线程立即可见

```java
public class VolatileSeeDemo
{
    static          boolean flag = true;       //不加volatile，没有可见性
    //static volatile boolean flag = true;       //加了volatile，保证可见性

    public static void main(String[] args)
    {
        new Thread(() -> {
            System.out.println(Thread.currentThread().getName()+"\t come in");
            while (flag)
            {

            }
            System.out.println(Thread.currentThread().getName()+"\t flag被修改为false,退出.....");
        },"t1").start();

        //暂停2秒钟后让main线程修改flag值
        try { TimeUnit.SECONDS.sleep(2); } catch (InterruptedException e) { e.printStackTrace(); }

        flag = false;

        System.out.println("main线程修改完成");
    }
}
```

- 不加volatile，没有可见性，程序无法停止
- 加了volatile，保证可见性，程序可以停止

```
线程t1中为何看不到被主线程main修改为false的flag的值？
 
问题可能:
1. 主线程修改了flag之后没有将其刷新到主内存，所以t1线程看不到。
2. 主线程将flag刷新到了主内存，但是t1一直读取的是自己工作内存中flag的值，没有去主内存中更新获取flag最新的值。
 
我们的诉求：
1.线程中修改了工作内存中的副本之后，立即将其刷新到主内存；
2.工作内存中每次读取共享变量时，都去主内存中重新读取，然后拷贝到工作内存。
 
解决：
使用volatile修饰共享变量，就可以达到上面的效果，被volatile修改的变量有以下特点：
1. 线程中读取的时候，每次读取都会去主内存中读取共享变量最新的值，然后将其复制到工作内存
2. 线程中修改了工作内存中变量的副本，修改之后会立即刷新到主内存
```

##### 1、volatile变量的读写过程

Java内存模型中定义的8种工作内存与主内存之间的原子操作
read(读取)→load(加载)→use(使用)→assign(赋值)→store(存储)→write(写入)→lock(锁定)→unlock(解锁)

![image-20210922205210267](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922205210267.png)

read: 作用于主内存，将变量的值从主内存传输到工作内存，主内存到工作内存
load: 作用于工作内存，将read从主内存传输的变量值放入工作内存变量副本中，即数据加载
use: 作用于工作内存，将工作内存变量副本的值传递给执行引擎，每当JVM遇到需要该变量的字节码指令时会执行该操作
assign: 作用于工作内存，将从执行引擎接收到的值赋值给工作内存变量，每当JVM遇到一个给变量赋值字节码指令时会执行该操作
store: 作用于工作内存，将赋值完毕的工作变量的值写回给主内存
write: 作用于主内存，将store传输过来的变量值赋值给主内存中的变量
由于上述只能保证单条指令的原子性，针对多条指令的组合性原子保证，没有大面积加锁，所以，JVM提供了另外两个原子指令：
lock: 作用于主内存，将一个变量标记为一个线程独占的状态，只是写时候加锁，就只是锁了写变量的过程。
unlock: 作用于主内存，把一个处于锁定状态的变量释放，然后才能被其他线程占用

#### 2、没有原子性

##### 1、volatile变量的复合操作(如i++)不具有原子性

```java
class MyNumber
{
    volatile int number = 0;

    public void addPlusPlus()
    {
        number++;
    }
}

public class VolatileNoAtomicDemo
{
    public static void main(String[] args) throws InterruptedException
    {
        MyNumber myNumber = new MyNumber();

        for (int i = 1; i <=10; i++) {
            new Thread(() -> {
                for (int j = 1; j <= 1000; j++) {
                    myNumber.addPlusPlus();
                }
            },String.valueOf(i)).start();
        }
        
        //暂停几秒钟线程
        try { TimeUnit.SECONDS.sleep(3); } catch (InterruptedException e) { e.printStackTrace(); }
        System.out.println(Thread.currentThread().getName() + "\t" + myNumber.number);
    }
}
```

从i++的字节码角度说明

![image-20210922205402552](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922205402552.png)

```java
原子性指的是一个操作是不可中断的，即使是在多线程环境下，一个操作一旦开始就不会被其他线程影响。
public void add()
{
        i++; //不具备原子性，该操作是先读取值，然后写回一个新值，相当于原来的值加上1，分3步完成
 }
如果第二个线程在第一个线程读取旧值和写回新值期间读取i的域值，那么第二个线程就会与第一个线程一起看到同一个值，
并执行相同值的加1操作，这也就造成了线程安全失败，因此对于add方法必须使用synchronized修饰，以便保证线程安全.
```

![image-20210922205426175](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922205426175.png)

```java
多线程环境下，"数据计算"和"数据赋值"操作可能多次出现，即操作非原子。若数据在加载之后，若主内存count变量发生修改之后，由于线程工作内存中的值在此前已经加载，从而不会对变更操作做出相应变化，即私有内存和公共内存中变量不同步，进而导致数据不一致
对于volatile变量，JVM只是保证从主内存加载到线程工作内存的值是最新的，也就是数据加载时是最新的。
由此可见volatile解决的是变量读时的可见性问题，但无法保证原子性，对于多线程修改共享变量的场景必须使用加锁同步
```

##### 2、读取赋值一个普通变量的情况

当线程1对主内存对象发起read操作到write操作第一套流程的时间里，线程2随时都有可能对这个主内存对象发起第二套操作

![image-20210922205521467](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922205521467.png)

##### 3、既然一修改就是可见，为什么还不能保证原子性？

volatile主要是对其中部分指令做了处理

```java
要use(使用)一个变量的时候必需load(载入），要载入的时候必需从主内存read(读取）这样就解决了读的可见性。 
写操作是把assign和store做了关联(在assign(赋值)后必需store(存储))。store(存储)后write(写入)。
也就是做到了给一个变量赋值的时候一串关联指令直接把变量值写到主内存。
就这样通过用的时候直接从主内存取，在赋值到直接写回主内存做到了内存可见性。注意蓝色框框的间隙。。。。。。o(╥﹏╥)o
```

![image-20210922205631332](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922205631332.png)

##### 4、读取赋值一个volatile变量的情况

![image-20210922205704525](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922205704525.png)

```java
 read-load-use 和 assign-store-write 成为了两个不可分割的原子操作，但是在use和assign之间依然有极小的一段真空期，有可能变量会被其他线程读取，导致写丢失一次...o(╥﹏╥)o
但是无论在哪一个时间点主内存的变量和任一工作内存的变量的值都是相等的。这个特性就导致了volatile变量不适合参与到依赖当前值的运算，如i = i + 1; i++;之类的那么依靠可见性的特点volatile可以用在哪些地方呢？ 通常volatile用做保存某个状态的boolean值or int值。
《深入理解Java虚拟机》提到：
```

![image-20210922205718122](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922205718122.png)

##### 5、面试回答

JVM的字节码，i++分成三步，间隙期不同步非原子操作(i++)

![image-20210922205752322](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922205752322.png)

#### 3、指令禁重排

```java
重排序
重排序是指编译器和处理器为了优化程序性能而对指令序列进行重新排序的一种手段，有时候会改变程序语句的先后顺序
不存在数据依赖关系，可以重排序；
存在数据依赖关系，禁止重排序
但重排后的指令绝对不能改变原有的串行语义！这点在并发设计中必须要重点考虑！
    
重排序的分类和执行流程
```

![image-20210922205902093](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922205902093.png)

```java
编译器优化的重排序： 编译器在不改变单线程串行语义的前提下，可以重新调整指令的执行顺序
指令级并行的重排序： 处理器使用指令级并行技术来讲多条指令重叠执行，若不存在数据依赖性，处理器可以改变语句对应机器指令的执行顺序
内存系统的重排序： 由于处理器使用缓存和读/写缓冲区，这使得加载和存储操作看上去可能是乱序执行
 
数据依赖性：若两个操作访问同一变量，且这两个操作中有一个为写操作，此时两操作间就存在数据依赖性。
 
案例 ：
不存在数据依赖关系，可以重排序===> 重排序OK 。
```

| 重排前                                                     | 重排后                                                     |
| ---------------------------------------------------------- | ---------------------------------------------------------- |
| int a = 1;  //1<br/>int b = 20; //2<br/>int c = a + b; //3 | int b = 20;  //1<br/>int a = 1; //2<br/>int c = a + b; //3 |
| 结论：编译器调整了语句的顺序，但是不影响程序的最终结果。   | 重排序OK                                                   |

```java
存在数据依赖关系，禁止重排序===> 重排序发生，会导致程序运行结果不同。
编译器和处理器在重排序时，会遵守数据依赖性，不会改变存在依赖关系的两个操作的执行,但不同处理器和不同线程之间的数据性不会被编译器和处理器考虑，其只会作用于单处理器和单线程环境，下面三种情况，只要重排序两个操作的执行顺序，程序的执行结果就会被改变。
```

![image-20210922210024000](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922210024000.png)

##### 1、volatile的底层实现是通过内存屏障

volatile有关的禁止指令重排的行为

![image-20210922210055834](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922210055834.png)

| 当第一个操作为volatile读时，不论第二个操作是什么，都不能重排序。这个操作保证了volatile读之后的操作不会被重排到volatile读之前。 |
| ------------------------------------------------------------ |
| 当第二个操作为volatile写时，不论第一个操作是什么，都不能重排序。这个操作保证了volatile写之前的操作不会被重排到volatile写之后。 |
| 当第一个操作为volatile写时，第二个操作为volatile读时，不能重排。 |

四大屏障的插入情况

- 在每一个volatile写操作前面插入一个StoreStore屏障
  - StoreStore屏障可以保证在volatile写之前，其前面的所有普通写操作都已经刷新到主内存中。
- 在每一个volatile写操作后面插入一个StoreLoad屏障
  - StoreLoad屏障的作用是避免volatile写与后面可能有的volatile读/写操作重排序
- 在每一个volatile读操作后面插入一个LoadLoad屏障
  - LoadLoad屏障用来禁止处理器把上面的volatile读与下面的普通读重排序。
- 在每一个volatile读操作后面插入一个LoadStore屏障
  - LoadStore屏障用来禁止处理器把上面的volatile读与下面的普通写重排序。

```java
//模拟一个单线程，什么顺序读？什么顺序写？
public class VolatileTest {
    int i = 0;
    volatile boolean flag = false;
    public void write(){
        i = 2;
        flag = true;
    }
    public void read(){
        if(flag){
            System.out.println("---i = " + i);
        }
    }
}
```

![image-20210922210258725](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922210258725.png)

#### 4、如何正确使用volatile

##### 1、单一赋值可以，but含复合运算赋值不可以(i++之类)

```java
volatile int a = 10
volatile boolean flag = false 
```

##### 2、状态标志，判断业务是否结束

```java
/**
 *
 * 使用：作为一个布尔状态标志，用于指示发生了一个重要的一次性事件，例如完成初始化或任务结束
 * 理由：状态标志并不依赖于程序内任何其他状态，且通常只有一种状态转换
 * 例子：判断业务是否结束
 */
public class UseVolatileDemo
{
    private volatile static boolean flag = true;

    public static void main(String[] args)
    {
        new Thread(() -> {
            while(flag) {
                //do something......
            }
        },"t1").start();

        //暂停几秒钟线程
        try { TimeUnit.SECONDS.sleep(2L); } catch (InterruptedException e) { e.printStackTrace(); }

        new Thread(() -> {
            flag = false;
        },"t2").start();
    }
}
```

##### 3、开销较低的读，写锁策略

```java
public class UseVolatileDemo
{
    /**
     * 使用：当读远多于写，结合使用内部锁和 volatile 变量来减少同步的开销
     * 理由：利用volatile保证读取操作的可见性；利用synchronized保证复合操作的原子性
     */
    public class Counter
    {
        private volatile int value;

        public int getValue()
        {
            return value;   //利用volatile保证读取操作的可见性
              }
        public synchronized int increment()
        {
            return value++; //利用synchronized保证复合操作的原子性
               }
    }
}
```

##### 4、DCL双端锁的发布

问题代码

```java
public class SafeDoubleCheckSingleton
{
    private static SafeDoubleCheckSingleton singleton;
    //私有化构造方法
    private SafeDoubleCheckSingleton(){
    }
    //双重锁设计
    public static SafeDoubleCheckSingleton getInstance(){
        if (singleton == null){
            //1.多线程并发创建对象时，会通过加锁保证只有一个线程能创建对象
            synchronized (SafeDoubleCheckSingleton.class){
                if (singleton == null){
                    //隐患：多线程环境下，由于重排序，该对象可能还未完成初始化就被其他线程读取
                    singleton = new SafeDoubleCheckSingleton();
                }
            }
        }
        //2.对象创建完毕，执行getInstance()将不需要获取锁，直接返回创建对象
        return singleton;
    }
}
```

**单线程看问题代码**

单线程环境下(或者说正常情况下)，在"问题代码处"，会执行如下操作，保证能获取到已完成初始化的实例

![image-20210922210741247](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922210741247.png)

由于存在指令重排序......

**多线程看问题代码**

隐患：多线程环境下，在"问题代码处"，会执行如下操作，由于重排序导致2,3乱序，后果就是其他线程得到的是null而不是完成初始化的对象

![image-20210922210815931](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922210815931.png)





**解决01**

加volatile修饰

面试题，反周志明老师的案例，你还有不加volatile的方法吗

**解决02** -- 采用静态内部类的方式实现

```java
//现在比较好的做法就是采用静态内部内的方式实现
 
public class SingletonDemo
{
    private SingletonDemo() { }

    private static class SingletonDemoHandler
    {
        private static SingletonDemo instance = new SingletonDemo();
    }

    public static SingletonDemo getInstance()
    {
        return SingletonDemoHandler.instance;
    }
}
```

#### 5、最后的小总结

##### 1、内存屏障是什么

![image-20210922211112799](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922211112799.png)

#####  2、内存屏障能干嘛

- 阻止屏障两边的指令重排序
- 写数据时加入屏障，强制将线程私有工作内存的数据刷回主物理内存
- 读数据时加入屏障，线程私有工作内存的数据失效，重新到主物理内存中获取最新数据

##### 3、内存屏障四大指令

- 在每一个volatile写操作前面插入一个StoreStore屏障
  - ![image-20210922211216698](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922211216698.png)
- 在每一个volatile写操作后面插入一个StoreLoad屏障
  - ![image-20210922211234267](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922211234267.png)
- 在每一个volatile读操作后面插入一个LoadLoad屏障
  - ![image-20210922211247865](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922211247865.png)
- 在每一个volatile读操作后面插入一个LoadStore屏障
  - ![image-20210922211259274](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922211259274.png)

##### 4、凭什么我们java写了一个volatile关键字系统底层加入内存屏障？两者关系怎么勾搭上的?
字节码层面

![image-20210922211344635](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922211344635.png)

![image-20210922211354764](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922211354764.png)

##### 5、volatile可见性

![image-20210922211419405](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922211419405.png)

##### 6、volatile禁重排

写指令

![image-20210922211436123](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922211436123.png)

读指令

![image-20210922211447326](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922211447326.png)

##### 7、对比java.util.concurrent.locks.Lock来理解

![image-20210922211501481](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922211501481.png)

##### 8、一句话总结

![image-20210922211532860](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922211532860.png)



## 十一、CAS

### 1、没有CAS之前

#### 1、多线程环境不使用原子类保证线程安全（基本数据类型）

```java
public class T3
{
    volatile int number = 0;
    //读取
    public int getNumber()
    {
        return number;
    }
    //写入加锁保证原子性
    public synchronized void setNumber()
    {
        number++;
    }
}
```

#### 2、多线程环境    使用原子类保证线程安全（基本数据类型）

```java
public class T3
{
    volatile int number = 0;
    //读取
    public int getNumber()
    {
        return number;
    }
    //写入加锁保证原子性
    public synchronized void setNumber()
    {
        number++;
    }
    //=================================
    AtomicInteger atomicInteger = new AtomicInteger();

    public int getAtomicInteger()
    {
        return atomicInteger.get();
    }

    public void setAtomicInteger()
    {
        atomicInteger.getAndIncrement();
    }
}
```

### 2、CAS是什么

```
compare and swap的缩写，中文翻译成比较并交换,实现并发算法时常用到的一种技术。它包含三个操作数——内存位置、预期原值及更新值。
执行CAS操作的时候，将内存位置的值与预期原值比较：
如果相匹配，那么处理器会自动将该位置值更新为新值，
如果不匹配，处理器不做任何操作，多个线程同时执行CAS操作只有一个会成功。 
```

CAS有3个操作数，位置内存值V，旧的预期值A，要修改的更新值B。
当且仅当旧的预期值A和内存值V相同时，将内存值V修改为B，否则什么都不做或重来

![image-20210922211800641](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922211800641.png)

```java
CAS是JDK提供的非阻塞原子性操作，它通过硬件保证了比较-更新的原子性。
它是非阻塞的且自身原子性，也就是说这玩意效率更高且通过硬件保证，说明这玩意更可靠。
 
CAS是一条CPU的原子指令（cmpxchg指令），不会造成所谓的数据不一致问题，Unsafe提供的CAS方法（如compareAndSwapXXX）底层实现即为CPU指令cmpxchg。
执行cmpxchg指令的时候，会判断当前系统是否为多核系统，如果是就给总线加锁，只有一个线程会对总线加锁成功，加锁成功之后会执行cas操作，也就是说CAS的原子性实际上是CPU实现的， 其实在这一点上还是有排他锁的，只是比起用synchronized， 这里的排他时间要短的多， 所以在多线程情况下性能会比较好
```

```java
public class CASDemo
{
    public static void main(String[] args) throws InterruptedException
    {
        AtomicInteger atomicInteger = new AtomicInteger(5);

        System.out.println(atomicInteger.compareAndSet(5, 2020)+"\t"+atomicInteger.get());
        System.out.println(atomicInteger.compareAndSet(5, 1024)+"\t"+atomicInteger.get());
    }
}
```

#### 1、源码分析compareAndSet(int expect,int update)

compareAndSet()方法的源代码：

![image-20210922211916954](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922211916954.png)

上面三个方法都是类似的，主要对4个参数做一下说明。
var1：表示要操作的对象
var2：表示要操作对象中属性地址的偏移量
var4：表示需要修改数据的期望的值
var5/var6：表示需要修改为的新值

![image-20210922211925337](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922211925337.png)



### 3、CAS底层原理？如果知道，谈谈你对UnSafe的理解

#### 1、UnSafe

![image-20210922212018603](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922212018603.png)

1. Unsafe
      	是CAS的核心类，由于Java方法无法直接访问底层系统，需要通过本地（native）方法来访问，Unsafe相当于一个后门，基于该类可以直接操作特定内存的数据。Unsafe类存在于sun.misc包中，其内部方法操作可以像C的指针一样直接操作内存，因为Java中CAS操作的执行依赖于Unsafe类的方法。
   注意Unsafe类中的所有方法都是native修饰的，也就是说Unsafe类中的方法都直接调用操作系统底层资源执行相应任务 

2. 变量valueOffset，表示该变量值在内存中的偏移地址，因为Unsafe就是根据内存偏移地址获取数据的。

![image-20210922212041394](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922212041394.png)

3. 变量value用volatile修饰，保证了多线程之间的内存可见性。

#### 2、我们知道i++线程不安全的，那atomicInteger.getAndIncrement()

CAS的全称为Compare-And-Swap，它是一条CPU并发原语。
它的功能是判断内存某个位置的值是否为预期值，如果是则更改为新的值，这个过程是原子的。
AtomicInteger 类主要利用 CAS (compare and swap) + volatile 和 native 方法来保证原子操作，从而避免 synchronized 的高开销，执行效率大为提升。

![image-20210922212208816](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922212208816.png)

new AtomicInteger().getAndIncrement();

![image-20210922212236304](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922212236304.png)

![image-20210922212248701](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922212248701.png)


假设线程A和线程B两个线程同时执行getAndAddInt操作（分别跑在不同CPU上）：

1. AtomicInteger里面的value原始值为3，即主内存中AtomicInteger的value为3，根据JMM模型，线程A和线程B各自持有一份值为3的value的副本分别到各自的工作内存。

2. 线程A通过getIntVolatile(var1, var2)拿到value值3，这时线程A被挂起。

3. 线程B也通过getIntVolatile(var1, var2)方法获取到value值3，此时刚好线程B没有被挂起并执行compareAndSwapInt方法比较内存值也为3，成功修改内存值为4，线程B打完收工，一切OK。

4. 这时线程A恢复，执行compareAndSwapInt方法比较，发现自己手里的值数字3和主内存的值数字4不一致，说明该值已经被其它线程抢先一步修改过了，那A线程本次修改失败，只能重新读取重新来一遍了。

5. 线程A重新获取value值，因为变量value被volatile修饰，所以其它线程对它的修改，线程A总是能够看到，线程A继续执行compareAndSwapInt进行比较替换，直到成功。

#### 3、底层汇编

native修饰的方法代表是底层方法

Unsafe类中的compareAndSwapInt，是一个本地方法，该方法的实现位于unsafe.cpp中

```c
UNSAFE_ENTRY(jboolean, Unsafe_CompareAndSwapInt(JNIEnv *env, jobject unsafe, jobject obj, jlong offset, jint e, jint x))
  UnsafeWrapper("Unsafe_CompareAndSwapInt");
  oop p = JNIHandles::resolve(obj);
// 先想办法拿到变量value在内存中的地址，根据偏移量valueOffset，计算 value 的地址
  jint* addr = (jint *) index_oop_from_field_offset_long(p, offset);
// 调用 Atomic 中的函数 cmpxchg来进行比较交换，其中参数x是即将更新的值，参数e是原内存的值
  return (jint)(Atomic::cmpxchg(x, addr, e)) == e;
UNSAFE_END
```

(Atomic::cmpxchg(x, addr, e)) == e;



cmpxchg

```c
// 调用 Atomic 中的函数 cmpxchg来进行比较交换，其中参数x是即将更新的值，参数e是原内存的值
  return (jint)(Atomic::cmpxchg(x, addr, e)) == e;

unsigned Atomic::cmpxchg(unsigned int exchange_value,volatile unsigned int* dest, unsigned int compare_value) {
    assert(sizeof(unsigned int) == sizeof(jint), "more work to do");
  /*
   * 根据操作系统类型调用不同平台下的重载函数，这个在预编译期间编译器会决定调用哪个平台下的重载函数*/
    return (unsigned int)Atomic::cmpxchg((jint)exchange_value, (volatile jint*)dest, (jint)compare_value);
}
```

在不同的操作系统下会调用不同的cmpxchg重载函数，本次用的是win10系统

```c
inline jint Atomic::cmpxchg (jint exchange_value, volatile jint* dest, jint compare_value) {
  //判断是否是多核CPU
  int mp = os::is_MP();
  __asm {
    //三个move指令表示的是将后面的值移动到前面的寄存器上
    mov edx, dest
    mov ecx, exchange_value
    mov eax, compare_value
    //CPU原语级别，CPU触发
    LOCK_IF_MP(mp)
    //比较并交换指令
    //cmpxchg: 即“比较并交换”指令
    //dword: 全称是 double word 表示两个字，一共四个字节
    //ptr: 全称是 pointer，与前面的 dword 连起来使用，表明访问的内存单元是一个双字单元 
    //将 eax 寄存器中的值（compare_value）与 [edx] 双字内存单元中的值进行对比，
    //如果相同，则将 ecx 寄存器中的值（exchange_value）存入 [edx] 内存单元中
    cmpxchg dword ptr [edx], ecx
  }
}
```

到这里应该理解了CAS真正实现的机制了，它最终是由操作系统的汇编指令完成的。

#### 4、总结

```java
你只需要记住：CAS是靠硬件实现的从而在硬件层面提升效率，最底层还是交给硬件来保证原子性和可见性
实现方式是基于硬件平台的汇编指令，在intel的CPU中(X86机器上)，使用的是汇编指令cmpxchg指令。 
 
核心思想就是：比较要更新变量的值V和预期值E（compare），相等才会将V的值设为新值N（swap）如果不相等自旋再来。
```

### 4、原子引用

AtomicInteger原子整型，可否有其它原子类型？

- AtomicBook
- AtomicOrder
- 。。。

```java
@Getter
@ToString
@AllArgsConstructor
class User
{
    String userName;
    int    age;
}

/**
 * @auther zzyy
 * @create 2018-12-31 17:22
 */
public class AtomicReferenceDemo
{
    public static void main(String[] args)
    {
        User z3 = new User("z3",24);
        User li4 = new User("li4",26);

        AtomicReference<User> atomicReferenceUser = new AtomicReference<>();

        atomicReferenceUser.set(z3);
        System.out.println(atomicReferenceUser.compareAndSet(z3,li4)+"\t"+atomicReferenceUser.get().toString());
        System.out.println(atomicReferenceUser.compareAndSet(z3,li4)+"\t"+atomicReferenceUser.get().toString());
    }
}
```

### 5、自旋锁，借鉴CAS思想

自旋锁（spinlock）

是指尝试获取锁的线程不会立即阻塞，而是采用循环的方式去尝试获取锁，
当线程发现锁被占用时，会不断循环判断锁的状态，直到获取。这样的好处是减少线程上下文切换的消耗，缺点是循环会消耗CPU

![image-20210922212914003](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922212914003.png)

```java
/**
 * 题目：实现一个自旋锁
 * 自旋锁好处：循环比较获取没有类似wait的阻塞。
 *
 * 通过CAS操作完成自旋锁，A线程先进来调用myLock方法自己持有锁5秒钟，B随后进来后发现
 * 当前有线程持有锁，不是null，所以只能通过自旋等待，直到A释放锁后B随后抢到。
 */
public class SpinLockDemo
{
    AtomicReference<Thread> atomicReference = new AtomicReference<>();

    public void myLock()
    {
        Thread thread = Thread.currentThread();
        System.out.println(Thread.currentThread().getName()+"\t come in");
        while(!atomicReference.compareAndSet(null,thread))
        {

        }
    }

    public void myUnLock()
    {
        Thread thread = Thread.currentThread();
        atomicReference.compareAndSet(thread,null);
        System.out.println(Thread.currentThread().getName()+"\t myUnLock over");
    }

    public static void main(String[] args)
    {
        SpinLockDemo spinLockDemo = new SpinLockDemo();

        new Thread(() -> {
            spinLockDemo.myLock();
            try { TimeUnit.SECONDS.sleep( 5 ); } catch (InterruptedException e) { e.printStackTrace(); }
            spinLockDemo.myUnLock();
        },"A").start();

        //暂停一会儿线程，保证A线程先于B线程启动并完成
        try { TimeUnit.SECONDS.sleep( 1 ); } catch (InterruptedException e) { e.printStackTrace(); }

        new Thread(() -> {
            spinLockDemo.myLock();
            spinLockDemo.myUnLock();
        },"B").start();

    }
}
```

### 6、CAS缺点

#### 1、循环时间长开销很大

我们可以看到getAndAddInt方法执行时，有个do while

![image-20210922213308155](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922213308155.png)

如果CAS失败，会一直进行尝试。如果CAS长时间一直不成功，可能会给CPU带来很大的开销。

#### 2、引出来ABA问题？？？

```java
CAS会导致“ABA问题”。
 
CAS算法实现一个重要前提需要取出内存中某时刻的数据并在当下时刻比较并替换，那么在这个时间差类会导致数据的变化。
 
比如说一个线程one从内存位置V中取出A，这时候另一个线程two也从内存中取出A，并且线程two进行了一些操作将值变成了B，
然后线程two又将V位置的数据变成A，这时候线程one进行CAS操作发现内存中仍然是A，然后线程one操作成功。
 
尽管线程one的CAS操作成功，但是不代表这个过程就是没有问题的。
```

```java
public class ABADemo
{
    static AtomicInteger atomicInteger = new AtomicInteger(100);
    static AtomicStampedReference atomicStampedReference = new AtomicStampedReference(100,1);

    public static void main(String[] args)
    {
        new Thread(() -> {
            atomicInteger.compareAndSet(100,101);
            atomicInteger.compareAndSet(101,100);
        },"t1").start();

        new Thread(() -> {
            //暂停一会儿线程
            try { Thread.sleep( 500 ); } catch (InterruptedException e) { e.printStackTrace(); };            System.out.println(atomicInteger.compareAndSet(100, 2019)+"\t"+atomicInteger.get());
        },"t2").start();

        //暂停一会儿线程,main彻底等待上面的ABA出现演示完成。
        try { Thread.sleep( 2000 ); } catch (InterruptedException e) { e.printStackTrace(); }

        System.out.println("============以下是ABA问题的解决=============================");

        new Thread(() -> {
            int stamp = atomicStampedReference.getStamp();
            System.out.println(Thread.currentThread().getName()+"\t 首次版本号:"+stamp);//1
            //暂停一会儿线程,
            try { Thread.sleep( 1000 ); } catch (InterruptedException e) { e.printStackTrace(); }
            atomicStampedReference.compareAndSet(100,101,atomicStampedReference.getStamp(),atomicStampedReference.getStamp()+1);
            System.out.println(Thread.currentThread().getName()+"\t 2次版本号:"+atomicStampedReference.getStamp());
            atomicStampedReference.compareAndSet(101,100,atomicStampedReference.getStamp(),atomicStampedReference.getStamp()+1);
            System.out.println(Thread.currentThread().getName()+"\t 3次版本号:"+atomicStampedReference.getStamp());
        },"t3").start();

        new Thread(() -> {
            int stamp = atomicStampedReference.getStamp();
            System.out.println(Thread.currentThread().getName()+"\t 首次版本号:"+stamp);//1
            //暂停一会儿线程，获得初始值100和初始版本号1，故意暂停3秒钟让t3线程完成一次ABA操作产生问题
            try { Thread.sleep( 3000 ); } catch (InterruptedException e) { e.printStackTrace(); }
            boolean result = atomicStampedReference.compareAndSet(100,2019,stamp,stamp+1);
            System.out.println(Thread.currentThread().getName()+"\t"+result+"\t"+atomicStampedReference.getReference());
        },"t4").start();
    }
}
```



## 十二、原子操作类之18罗汉增强

![image-20210922213530641](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210922213530641.png)

1. AtomicBoolean
2. AtomicInteger
3. AtomicIntegerArray
4. AtomicIntegerFieldUpdater
5. AtomicLong
6. AtomicLongArray
7. AtomicLongFieldUpdater
8. AtomicMarkableReference
9. AtomicReference
10. AtomicReferenceArray
11. AtomicReferenceFieldUpdater
12. AtomicStampedReference
13. DoubleAccumulator
14. DoubleAdder
15. LongAccumulator
16. LongAdder

### 1、基本类型原子类

- AtomicInteger
- AtomicBoolean
- AtomicLong

#### 1、常用API简介

```java
public final int get() //获取当前的值
public final int getAndSet(int newValue)//获取当前的值，并设置新的值
public final int getAndIncrement()//获取当前的值，并自增
public final int getAndDecrement() //获取当前的值，并自减
public final int getAndAdd(int delta) //获取当前的值，并加上预期的值
boolean compareAndSet(int expect, int update) //如果输入的数值等于预期值，则以原子方式将该值设置为输入值（update）
```

#### 2、tsleep→countDownLatch

```java
class MyNumber
{
    @Getter
    private AtomicInteger atomicInteger = new AtomicInteger();
    public void addPlusPlus()
    {
        atomicInteger.incrementAndGet();
    }
}

/**
 * @create 2020-07-03 17:16
 */
public class AtomicIntegerDemo
{
    public static void main(String[] args) throws InterruptedException
    {
        MyNumber myNumber = new MyNumber();
        CountDownLatch countDownLatch = new CountDownLatch(100);

        for (int i = 1; i <=100; i++) {
            new Thread(() -> {
                try
                {
                    for (int j = 1; j <=5000; j++)
                    {
                        myNumber.addPlusPlus();
                    }
                }finally {
                    countDownLatch.countDown();
                }
            },String.valueOf(i)).start();
        }

        countDownLatch.await();

        System.out.println(myNumber.getAtomicInteger().get());
    }
}
```

### 2、数组类型原子类

- AtomicIntegerArray
- AtomicLongArray
- AtomicReferenceArray

```java
public class AtomicIntegerArrayDemo
{
    public static void main(String[] args)
    {
        AtomicIntegerArray atomicIntegerArray = new AtomicIntegerArray(new int[5]);
        //AtomicIntegerArray atomicIntegerArray = new AtomicIntegerArray(5);
        //AtomicIntegerArray atomicIntegerArray = new AtomicIntegerArray(new int[]{1,2,3,4,5});

        for (int i = 0; i <atomicIntegerArray.length(); i++) {
            System.out.println(atomicIntegerArray.get(i));
        }
        System.out.println();
        System.out.println();
        System.out.println();
        int tmpInt = 0;

        tmpInt = atomicIntegerArray.getAndSet(0,1122);
        System.out.println(tmpInt+"\t"+atomicIntegerArray.get(0));
        atomicIntegerArray.getAndIncrement(1);
        atomicIntegerArray.getAndIncrement(1);
        tmpInt = atomicIntegerArray.getAndIncrement(1);
        System.out.println(tmpInt+"\t"+atomicIntegerArray.get(1));
    }
}
```

### 3、引用类型原子类

- AtomicReference

```java
@Getter
@ToString
@AllArgsConstructor
class User
{
    String userName;
    int    age;
}

public class AtomicReferenceDemo
{
    public static void main(String[] args)
    {
        User z3 = new User("z3",24);
        User li4 = new User("li4",26);

        AtomicReference<User> atomicReferenceUser = new AtomicReference<>();

        atomicReferenceUser.set(z3);
        System.out.println(atomicReferenceUser.compareAndSet(z3,li4)+"\t"+atomicReferenceUser.get().toString());
        System.out.println(atomicReferenceUser.compareAndSet(z3,li4)+"\t"+atomicReferenceUser.get().toString());
    }
}
```

自旋锁SpinLockDemo

```java
/**
 * 题目：实现一个自旋锁
 * 自旋锁好处：循环比较获取没有类似wait的阻塞。
 *
 * 通过CAS操作完成自旋锁，A线程先进来调用myLock方法自己持有锁5秒钟，B随后进来后发现
 * 当前有线程持有锁，不是null，所以只能通过自旋等待，直到A释放锁后B随后抢到。
 */
public class SpinLockDemo
{
    AtomicReference<Thread> atomicReference = new AtomicReference<>();

    public void myLock()
    {
        Thread thread = Thread.currentThread();
        System.out.println(Thread.currentThread().getName()+"\t come in");
        while(!atomicReference.compareAndSet(null,thread))
        {

        }
    }

    public void myUnLock()
    {
        Thread thread = Thread.currentThread();
        atomicReference.compareAndSet(thread,null);
        System.out.println(Thread.currentThread().getName()+"\t myUnLock over");
    }

    public static void main(String[] args)
    {
        SpinLockDemo spinLockDemo = new SpinLockDemo();

        new Thread(() -> {
            spinLockDemo.myLock();
            //暂停一会儿线程
            try { TimeUnit.SECONDS.sleep( 5 ); } catch (InterruptedException e) { e.printStackTrace(); }
            spinLockDemo.myUnLock();
        },"A").start();
        //暂停一会儿线程，保证A线程先于B线程启动并完成
        try { TimeUnit.SECONDS.sleep( 1 ); } catch (InterruptedException e) { e.printStackTrace(); }

        new Thread(() -> {
            spinLockDemo.myLock();
            spinLockDemo.myUnLock();
        },"B").start();

    }
}
```

- AtomicStampedReference
  - 携带版本号的引用类型原子类，可以解决ABA问题
  - 解决修改过几次
  - 状态戳原子引用

ABADemo

```java
public class ABADemo
{
    static AtomicInteger atomicInteger = new AtomicInteger(100);
    static AtomicStampedReference atomicStampedReference = new AtomicStampedReference(100,1);

    public static void main(String[] args)
    {
        abaProblem();
        abaResolve();
    }

    public static void abaResolve()
    {
        new Thread(() -> {
            int stamp = atomicStampedReference.getStamp();
            System.out.println("t3 ----第1次stamp  "+stamp);
            try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }
            atomicStampedReference.compareAndSet(100,101,stamp,stamp+1);
            System.out.println("t3 ----第2次stamp  "+atomicStampedReference.getStamp());
            atomicStampedReference.compareAndSet(101,100,atomicStampedReference.getStamp(),atomicStampedReference.getStamp()+1);
            System.out.println("t3 ----第3次stamp  "+atomicStampedReference.getStamp());
        },"t3").start();

        new Thread(() -> {
            int stamp = atomicStampedReference.getStamp();
            System.out.println("t4 ----第1次stamp  "+stamp);
            //暂停几秒钟线程
            try { TimeUnit.SECONDS.sleep(3); } catch (InterruptedException e) { e.printStackTrace(); }
            boolean result = atomicStampedReference.compareAndSet(100, 20210308, stamp, stamp + 1);
            System.out.println(Thread.currentThread().getName()+"\t"+result+"\t"+atomicStampedReference.getReference());
        },"t4").start();
    }

    public static void abaProblem()
    {
        new Thread(() -> {
            atomicInteger.compareAndSet(100,101);
            atomicInteger.compareAndSet(101,100);
        },"t1").start();

        try { TimeUnit.MILLISECONDS.sleep(200); } catch (InterruptedException e) { e.printStackTrace(); }

        new Thread(() -> {
            atomicInteger.compareAndSet(100,20210308);
            System.out.println(atomicInteger.get());
        },"t2").start();
    }
}
```



- AtomicMarkableReference
  - 原子更新带有标记位的引用类型对象
  - 解决是否修改过 它的定义就是将状态戳简化为true|false -- 类似一次性筷子

状态戳(true/false)原子引用

```java
public class ABADemo
{
    static AtomicInteger atomicInteger = new AtomicInteger(100);
    static AtomicStampedReference<Integer> stampedReference = new AtomicStampedReference<>(100,1);
    static AtomicMarkableReference<Integer> markableReference = new AtomicMarkableReference<>(100,false);

    public static void main(String[] args)
    {
        new Thread(() -> {
            atomicInteger.compareAndSet(100,101);
            atomicInteger.compareAndSet(101,100);
            System.out.println(Thread.currentThread().getName()+"\t"+"update ok");
        },"t1").start();

        new Thread(() -> {
            //暂停几秒钟线程
            try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }
            atomicInteger.compareAndSet(100,2020);
        },"t2").start();

        //暂停几秒钟线程
        try { TimeUnit.SECONDS.sleep(2); } catch (InterruptedException e) { e.printStackTrace(); }

        System.out.println(atomicInteger.get());

        System.out.println();
        System.out.println();
        System.out.println();

        System.out.println("============以下是ABA问题的解决,让我们知道引用变量中途被更改了几次=========================");
        new Thread(() -> {
            System.out.println(Thread.currentThread().getName()+"\t 1次版本号"+stampedReference.getStamp());
            //故意暂停200毫秒，让后面的t4线程拿到和t3一样的版本号
            try { TimeUnit.MILLISECONDS.sleep(200); } catch (InterruptedException e) { e.printStackTrace(); }

            stampedReference.compareAndSet(100,101,stampedReference.getStamp(),stampedReference.getStamp()+1);
            System.out.println(Thread.currentThread().getName()+"\t 2次版本号"+stampedReference.getStamp());
            stampedReference.compareAndSet(101,100,stampedReference.getStamp(),stampedReference.getStamp()+1);
            System.out.println(Thread.currentThread().getName()+"\t 3次版本号"+stampedReference.getStamp());
        },"t3").start();

        new Thread(() -> {
            int stamp = stampedReference.getStamp();
            System.out.println(Thread.currentThread().getName()+"\t =======1次版本号"+stamp);
            //暂停2秒钟,让t3先完成ABA操作了，看看自己还能否修改
            try { TimeUnit.SECONDS.sleep(2); } catch (InterruptedException e) { e.printStackTrace(); }
            boolean b = stampedReference.compareAndSet(100, 2020, stamp, stamp + 1);
            System.out.println(Thread.currentThread().getName()+"\t=======2次版本号"+stampedReference.getStamp()+"\t"+stampedReference.getReference());
        },"t4").start();

        System.out.println();
        System.out.println();
        System.out.println();

        System.out.println("============AtomicMarkableReference不关心引用变量更改过几次，只关心是否更改过======================");

        new Thread(() -> {
            boolean marked = markableReference.isMarked();
            System.out.println(Thread.currentThread().getName()+"\t 1次版本号"+marked);
            try { TimeUnit.MILLISECONDS.sleep(100); } catch (InterruptedException e) { e.printStackTrace(); }
            markableReference.compareAndSet(100,101,marked,!marked);
            System.out.println(Thread.currentThread().getName()+"\t 2次版本号"+markableReference.isMarked());
            markableReference.compareAndSet(101,100,markableReference.isMarked(),!markableReference.isMarked());
            System.out.println(Thread.currentThread().getName()+"\t 3次版本号"+markableReference.isMarked());
        },"t5").start();

        new Thread(() -> {
            boolean marked = markableReference.isMarked();
            System.out.println(Thread.currentThread().getName()+"\t 1次版本号"+marked);
            //暂停几秒钟线程
            try { TimeUnit.MILLISECONDS.sleep(100); } catch (InterruptedException e) { e.printStackTrace(); }
            markableReference.compareAndSet(100,2020,marked,!marked);
            System.out.println(Thread.currentThread().getName()+"\t"+markableReference.getReference()+"\t"+markableReference.isMarked());
        },"t6").start();
    }
}
```

### 4、对象的属性修改原子类

- AtomicIntegerFieldUpdater
  - 原子更新对象中int类型字段的值
- AtomicLongFieldUpdater
  - 原子更新对象中Long类型字段的值
- AtomicReferenceFieldUpdater
  - 原子更新引用类型字段的值

#### 1、使用目的

以一种线程安全的方式操作非线程安全对象内的某些字段

#### 2、使用要求

更新的对象属性必须使用 public volatile 修饰符。

因为对象的属性修改类型原子类都是抽象类，所以每次使用都必须使用静态方法newUpdater()创建一个更新器，并且需要设置想要更新的类和属性。

#### 3、AtomicIntegerFieldUpdaterDemo

```java
class BankAccount
{
    private String bankName = "CCB";//银行
    public volatile int money = 0;//钱数
    AtomicIntegerFieldUpdater<BankAccount> accountAtomicIntegerFieldUpdater = AtomicIntegerFieldUpdater.newUpdater(BankAccount.class,"money");

    //不加锁+性能高，局部微创
    public void transferMoney(BankAccount bankAccount)
    {
        accountAtomicIntegerFieldUpdater.incrementAndGet(bankAccount);
    }
}

/**
 * @auther zzyy
 * @create 2020-07-14 18:06
 * 以一种线程安全的方式操作非线程安全对象的某些字段。
 * 需求：
 * 1000个人同时向一个账号转账一元钱，那么累计应该增加1000元，
 * 除了synchronized和CAS,还可以使用AtomicIntegerFieldUpdater来实现。
 */
public class AtomicIntegerFieldUpdaterDemo
{

    public static void main(String[] args)
    {
        BankAccount bankAccount = new BankAccount();

        for (int i = 1; i <=1000; i++) {
            int finalI = i;
            new Thread(() -> {
                bankAccount.transferMoney(bankAccount);
            },String.valueOf(i)).start();
        }

        //暂停毫秒
        try { TimeUnit.MILLISECONDS.sleep(500); } catch (InterruptedException e) { e.printStackTrace(); }

        System.out.println(bankAccount.money);

    }
}
```

#### 4、AtomicReferenceFieldUpdater

```java
class MyVar
{
    public volatile Boolean isInit = Boolean.FALSE;
    AtomicReferenceFieldUpdater<MyVar,Boolean> atomicReferenceFieldUpdater = AtomicReferenceFieldUpdater.newUpdater(MyVar.class,Boolean.class,"isInit");


    public void init(MyVar myVar)
    {
        if(atomicReferenceFieldUpdater.compareAndSet(myVar,Boolean.FALSE,Boolean.TRUE))
        {
            System.out.println(Thread.currentThread().getName()+"\t"+"---init.....");
            //暂停几秒钟线程
            try { TimeUnit.SECONDS.sleep(2); } catch (InterruptedException e) { e.printStackTrace(); }
            System.out.println(Thread.currentThread().getName()+"\t"+"---init.....over");
        }else{
            System.out.println(Thread.currentThread().getName()+"\t"+"------其它线程正在初始化");
        }
    }


}


/**
 * 多线程并发调用一个类的初始化方法，如果未被初始化过，将执行初始化工作，要求只能初始化一次
 */
public class AtomicIntegerFieldUpdaterDemo
{
    public static void main(String[] args) throws InterruptedException
    {
        MyVar myVar = new MyVar();

        for (int i = 1; i <=5; i++) {
            new Thread(() -> {
                myVar.init(myVar);
            },String.valueOf(i)).start();
        }
    }
}
```

### 5、你在哪里用了volatile

AtomicReferenceFieldUpdater

### 6、原子操作增强类原理深度解析

- DoubleAccumulator
- DoubleAdder
- LongAccumulator
- LongAdder

![image-20210925210537531](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925210537531.png)

#### 1、点赞计数器，看看性能

![image-20210925210601595](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925210601595.png)

LongAdder只能用来计算加法，且从零开始计算

LongAccumulator提供了自定义的函数操作

```java
//long类型的聚合器，需要传入一个long类型的二元操作，可以用来计算各种聚合操作，包括加乘等

import java.util.concurrent.atomic.LongAccumulator;
import java.util.concurrent.atomic.LongAdder;
import java.util.function.LongBinaryOperator;

public class LongAccumulatorDemo
{

    LongAdder longAdder = new LongAdder();
    public void add_LongAdder()
    {
        longAdder.increment();
    }

    //LongAccumulator longAccumulator = new LongAccumulator((x, y) -> x + y,0);
    LongAccumulator longAccumulator = new LongAccumulator(new LongBinaryOperator()
    {
        @Override
        public long applyAsLong(long left, long right)
        {
            return left - right;
        }
    },777);

    public void add_LongAccumulator()
    {
        longAccumulator.accumulate(1);
    }

    public static void main(String[] args)
    {
        LongAccumulatorDemo demo = new LongAccumulatorDemo();

        demo.add_LongAccumulator();
        demo.add_LongAccumulator();
        System.out.println(demo.longAccumulator.longValue());
    }
}
```

#### 2、LongAdderAPIDemo

```java
public class LongAdderAPIDemo
{
    public static void main(String[] args)
    {
        LongAdder longAdder = new LongAdder();

        longAdder.increment();
        longAdder.increment();
        longAdder.increment();

        System.out.println(longAdder.longValue());

        LongAccumulator longAccumulator = new LongAccumulator((x,y) -> x * y,2);

        longAccumulator.accumulate(1);
        longAccumulator.accumulate(2);
        longAccumulator.accumulate(3);

        System.out.println(longAccumulator.longValue());

    }
}
```

#### 3、LongAdder高性能对比Code演示

```java
class ClickNumberNet
{
    int number = 0;
    public synchronized void clickBySync()
    {
        number++;
    }

    AtomicLong atomicLong = new AtomicLong(0);
    public void clickByAtomicLong()
    {
        atomicLong.incrementAndGet();
    }

    LongAdder longAdder = new LongAdder();
    public void clickByLongAdder()
    {
        longAdder.increment();
    }

    LongAccumulator longAccumulator = new LongAccumulator((x,y) -> x + y,0);
    public void clickByLongAccumulator()
    {
        longAccumulator.accumulate(1);
    }
}

/**
 * @auther zzyy
 * @create 2020-05-21 22:23
 * 50个线程，每个线程100W次，总点赞数出来
 */
public class LongAdderDemo2
{
    public static void main(String[] args) throws InterruptedException
    {
        ClickNumberNet clickNumberNet = new ClickNumberNet();

        long startTime;
        long endTime;
        CountDownLatch countDownLatch = new CountDownLatch(50);
        CountDownLatch countDownLatch2 = new CountDownLatch(50);
        CountDownLatch countDownLatch3 = new CountDownLatch(50);
        CountDownLatch countDownLatch4 = new CountDownLatch(50);


        startTime = System.currentTimeMillis();
        for (int i = 1; i <=50; i++) {
            new Thread(() -> {
                try
                {
                    for (int j = 1; j <=100 * 10000; j++) {
                        clickNumberNet.clickBySync();
                    }
                }finally {
                    countDownLatch.countDown();
                }
            },String.valueOf(i)).start();
        }
        countDownLatch.await();
        endTime = System.currentTimeMillis();
        System.out.println("----costTime: "+(endTime - startTime) +" 毫秒"+"\t clickBySync result: "+clickNumberNet.number);

        startTime = System.currentTimeMillis();
        for (int i = 1; i <=50; i++) {
            new Thread(() -> {
                try
                {
                    for (int j = 1; j <=100 * 10000; j++) {
                        clickNumberNet.clickByAtomicLong();
                    }
                }finally {
                    countDownLatch2.countDown();
                }
            },String.valueOf(i)).start();
        }
        countDownLatch2.await();
        endTime = System.currentTimeMillis();
        System.out.println("----costTime: "+(endTime - startTime) +" 毫秒"+"\t clickByAtomicLong result: "+clickNumberNet.atomicLong);

        startTime = System.currentTimeMillis();
        for (int i = 1; i <=50; i++) {
            new Thread(() -> {
                try
                {
                    for (int j = 1; j <=100 * 10000; j++) {
                        clickNumberNet.clickByLongAdder();
                    }
                }finally {
                    countDownLatch3.countDown();
                }
            },String.valueOf(i)).start();
        }
        countDownLatch3.await();
        endTime = System.currentTimeMillis();
        System.out.println("----costTime: "+(endTime - startTime) +" 毫秒"+"\t clickByLongAdder result: "+clickNumberNet.longAdder.sum());

        startTime = System.currentTimeMillis();
        for (int i = 1; i <=50; i++) {
            new Thread(() -> {
                try
                {
                    for (int j = 1; j <=100 * 10000; j++) {
                        clickNumberNet.clickByLongAccumulator();
                    }
                }finally {
                    countDownLatch4.countDown();
                }
            },String.valueOf(i)).start();
        }
        countDownLatch4.await();
        endTime = System.currentTimeMillis();
        System.out.println("----costTime: "+(endTime - startTime) +" 毫秒"+"\t clickByLongAccumulator result: "+clickNumberNet.longAccumulator.longValue());


    }
}
```

![image-20210925210808233](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925210808233.png)



#### 4、源码、原理分析

##### 1、架构

![image-20210925211148889](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925211148889.png)

LongAdder是Striped64的子类

![image-20210925211209788](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925211209788.png)

##### 2、剩下两罗汉

```java
Striped64
Number
```

##### 3、原理(LongAdder为什么这么快)

![image-20210925211404913](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925211404913.png)

###### 1、Striped64有几个比较重要的成员函数

```java
/** Number of CPUS, to place bound on table size        CPU数量，即cells数组的最大长度 */
static final int NCPU = Runtime.getRuntime().availableProcessors();

/**
 * Table of cells. When non-null, size is a power of 2.
cells数组，为2的幂，2,4,8,16.....，方便以后位运算
 */
transient volatile Cell[] cells;

/**基础value值，当并发较低时，只累加该值主要用于没有竞争的情况，通过CAS更新。
 * Base value, used mainly when there is no contention, but also as
 * a fallback during table initialization races. Updated via CAS.
 */
transient volatile long base;

/**创建或者扩容Cells数组时使用的自旋锁变量调整单元格大小（扩容），创建单元格时使用的锁。
 * Spinlock (locked via CAS) used when resizing and/or creating Cells. 
 */
transient volatile int cellsBusy;
```

最重要的2个

![image-20210925211458685](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925211458685.png)

###### 2、Striped64中一些变量或者方法的定义

![image-20210925211609167](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925211609167.png)



###### 3、Cell

是 java.util.concurrent.atomic 下 Striped64 的一个内部类

![image-20210925211634587](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925211634587.png)



###### 4、LongAdder为什么这么快

​		LongAdder的基本思路就是分散热点，将value值分散到一个Cell数组中，不同线程会命中到数组的不同槽中，各个线程只对自己槽中的那个值进行CAS操作，这样热点就被分散了，冲突的概率就小很多。如果要获取真正的long值，只要将各个槽中的变量值累加返回。

​		sum()会将所有Cell数组中的value和base累加作为返回值，核心的思想就是将之前AtomicLong一个value的更新压力分散到多个value中去，
从而降级更新热点。

![image-20210925211716139](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925211716139.png)



![image-20210925211738409](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925211738409.png)



内部有一个base变量，一个Cell[]数组。

base变量：非竞态条件下，直接累加到该变量上

Cell[]数组：竞态条件下，累加个各个线程自己的槽Cell[i]中

##### 4、源码解读深度分析

​		LongAdder在无竞争的情况，跟AtomicLong一样，对同一个base进行操作，当出现竞争关系时则是采用化整为零的做法，从空间换时间，用一个数组cells，将一个value拆分进这个数组cells。多个线程需要同时对value进行操作时候，可以对线程id进行hash得到hash值，再根据hash值映射到这个数组cells的某个下标，再对该下标所对应的值进行自增操作。当所有线程操作完毕，将数组cells的所有值和无竞争值base都加起来作为最终结果。

![image-20210925211849436](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925211849436.png)

```java
longAdder.increment()
```

###### 1、add(1L)

![image-20210925211939336](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925211939336.png)

![image-20210925211956219](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925211956219.png)

![image-20210925212001450](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925212001450.png)



1. 最初无竞争时只更新base；
2. 如果更新base失败后，首次新建一个Cell[]数组
3. 当多个线程竞争同一个Cell比较激烈时，可能就要对Cell[]扩容

###### 2、longAccumulate

**longAccumulate入参说明**

![image-20210925212131070](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925212131070.png)

**Striped64中一些变量或者方法的定义**

![image-20210925212144634](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925212144634.png)

**线程hash值：probe**

![image-20210925212206841](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925212206841.png)

![image-20210925212211672](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925212211672.png)

![image-20210925212214106](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925212214106.png)



![image-20210925212219015](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925212219015.png)

**总纲**

![image-20210925212236202](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925212236202.png)

```
上述代码首先给当前线程分配一个hash值，然后进入一个for(;;)自旋，这个自旋分为三个分支：
CASE1：Cell[]数组已经初始化
CASE2：Cell[]数组未初始化(首次新建)
CASE3：Cell[]数组正在初始化中
```

刚刚要初始化Cell[]数组(首次新建)

未初始化过Cell[]数组，尝试占有锁并首次初始化cells数组

![image-20210925212315327](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925212315327.png)

```
如果上面条件都执行成功就会执行数组的初始化及赋值操作， Cell[] rs = new Cell[2]表示数组的长度为2，
rs[h & 1] = new Cell(x) 表示创建一个新的Cell元素，value是x值，默认为1。
h & 1类似于我们之前HashMap常用到的计算散列桶index的算法，通常都是hash & (table.len - 1)。同hashmap一个意思。
```

**兜底**

多个线程尝试CAS修改失败的线程会走到这个分支

![image-20210925212343899](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925212343899.png)

该分支实现直接操作base基数，将值累加到base上，也即其它线程正在初始化，多个线程正在更新base的值。



**Cell数组不再为空且可能存在Cell数组扩容**

多个线程同时命中一个cell的竞争

![image-20210925212437808](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925212437808.png)

1. 

   ![image-20210925212506154](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925212506154.png)

   

```
上面代码判断当前线程hash后指向的数据位置元素是否为空，
如果为空则将Cell数据放入数组中，跳出循环。
如果不空则继续循环。
```

2. 

![image-20210925212521292](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925212521292.png)

3. ![image-20210925212535517](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925212535517.png)

   ```
   说明当前线程对应的数组中有了数据，也重置过hash值，
   这时通过CAS操作尝试对当前数中的value值进行累加x操作，x默认为1，如果CAS成功则直接跳出循环。
   ```

4. ![image-20210925212601882](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925212601882.png)

5. ![image-20210925212607291](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925212607291.png)

6. ![image-20210925212613752](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925212613752.png)

![image-20210925212621738](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925212621738.png)

###### 3、sum

sum()会将所有Cell数组中的value和base累加作为返回值。
核心的思想就是将之前AtomicLong一个value的更新压力分散到多个value中去，从而降级更新热点。

**为啥在并发情况下sum的值不精确**

sum执行时，并没有限制对base和cells的更新(一句要命的话)。所以LongAdder不是强一致性的，它是最终一致性的。

​		首先，最终返回的sum局部变量，初始被复制为base，而最终返回时，很可能base已经被更新了，而此时局部变量sum不会更新，造成不一致。
其次，这里对cell的读取也无法保证是最后一次写入的值。所以，sum方法在没有并发的情况下，可以获得正确的结果。

![image-20210925212713186](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210925212713186.png)

#### 5、使用总结

- AtomicLong
  - 线程安全，可允许一些性能损耗，要求高精度时可使用
  - 保证精度，性能代价
  - AtomicLong是多个线程针对单个热点值value进行原子操作
- LongAdder
  - 当需要在高并发下有较好的性能表现，且对值的精确度要求不高时，可以使用
  - 保证性能，精度代价
  - LongAdder是每个线程拥有自己的槽，各个线程一般只对自己槽中的那个值进行CAS操作



### 7、总结

#### 1、AtomicLong

- 原理
  - CAS+自旋
  - incrementAndGet
- 场景
  - 低并发下的全局计算
  - AtomicLong能保证并发情况下计数的准确性，其内部通过CAS来解决并发安全性的问题。
- 缺陷
  - 高并发后性能急剧下降
  - AtomicLong的自旋会成为瓶颈
  - N个线程CAS操作修改线程的值，每次只有一个成功过，其它N - 1失败，失败的不停的自旋直到成功，这样大量失败自旋的情况，一下子cpu就打高了。

#### 2、LongAdder

- 原理
  - CAS+Base+Cell数组分散
  - 空间换时间并分散了热点数据
- 场景
  - 高并发下的全局计算
- 缺陷
  - sum求和后还有计算线程修改结果的话，最后结果不够准确



## 十三、ThreadLocal、InheritableThreadLocal

### 1、ThreadLocal简介

![image-20210927222129464](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927222129464.png)

​		稍微翻译一下：
​		ThreadLocal提供线程局部变量。这些变量与正常的变量不同，因为每一个线程在访问ThreadLocal实例的时候（通过其get或set方法）都有自己的、独立初始化的变量副本。ThreadLocal实例通常是类中的私有静态字段，使用它的目的是希望将状态（例如，用户ID或事务ID）与线程关联起来。



​		实现每一个线程都有自己专属的本地变量副本(自己用自己的变量不麻烦别人，不和其他人共享，人人有份，人各一份)，主要解决了让每个线程绑定自己的值，通过使用get()和set()方法，获取默认值或将其值更改为当前线程所存的副本的值从而避免了线程安全问题。

![](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927222231797.png)

![image-20210927222241804](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927222241804.png)

### 2、永远的helloworld

按照总销售额统计，方便集团公司做计划统计

```java
class MovieTicket
{
    int number = 50;

    public synchronized void saleTicket()
    {
        if(number > 0)
        {
            System.out.println(Thread.currentThread().getName()+"\t"+"号售票员卖出第： "+(number--));
        }else{
            System.out.println("--------卖完了");
        }
    }
}

/**
 * 三个售票员卖完50张票务，总量完成即可，吃大锅饭，售票员每个月固定月薪
 */
public class ThreadLocalDemo
{
    public static void main(String[] args)
    {
        MovieTicket movieTicket = new MovieTicket();

        for (int i = 1; i <=3; i++) {
            new Thread(() -> {
                for (int j = 0; j <20; j++) {
                    movieTicket.saleTicket();
                    try { TimeUnit.MILLISECONDS.sleep(10); } catch (InterruptedException e) { e.printStackTrace(); }
                }
            },String.valueOf(i)).start();
        }
    }
}
```

不参加总和计算，希望各自分灶吃饭，各凭销售本事提成，按照出单数各自统计

```java
class MovieTicket
{
    int number = 50;

    public synchronized void saleTicket()
    {
        if(number > 0)
        {
            System.out.println(Thread.currentThread().getName()+"\t"+"号售票员卖出第： "+(number--));
        }else{
            System.out.println("--------卖完了");
        }
    }
}

class House
{
    ThreadLocal<Integer> threadLocal = ThreadLocal.withInitial(() -> 0);

    public void saleHouse()
    {
        Integer value = threadLocal.get();
        value++;
        threadLocal.set(value);
    }
}

/**
 * 1  三个售票员卖完50张票务，总量完成即可，吃大锅饭，售票员每个月固定月薪
 *
 * 2  分灶吃饭，各个销售自己动手，丰衣足食
 */
public class ThreadLocalDemo
{
    public static void main(String[] args)
    {
        /*MovieTicket movieTicket = new MovieTicket();

        for (int i = 1; i <=3; i++) {
            new Thread(() -> {
                for (int j = 0; j <20; j++) {
                    movieTicket.saleTicket();
                    try { TimeUnit.MILLISECONDS.sleep(10); } catch (InterruptedException e) { e.printStackTrace(); }
                }
            },String.valueOf(i)).start();
        }*/

        //===========================================
        House house = new House();

        new Thread(() -> {
            try {
                for (int i = 1; i <=3; i++) {
                    house.saleHouse();
                }
                System.out.println(Thread.currentThread().getName()+"\t"+"---"+house.threadLocal.get());
            }finally {
                house.threadLocal.remove();//如果不清理自定义的 ThreadLocal 变量，可能会影响后续业务逻辑和造成内存泄露等问题
            }
        },"t1").start();

        new Thread(() -> {
            try {
                for (int i = 1; i <=2; i++) {
                    house.saleHouse();
                }
                System.out.println(Thread.currentThread().getName()+"\t"+"---"+house.threadLocal.get());
            }finally {
                house.threadLocal.remove();
            }
        },"t2").start();

        new Thread(() -> {
            try {
                for (int i = 1; i <=5; i++) {
                    house.saleHouse();
                }
                System.out.println(Thread.currentThread().getName()+"\t"+"---"+house.threadLocal.get());
            }finally {
                house.threadLocal.remove();
            }
        },"t3").start();


        System.out.println(Thread.currentThread().getName()+"\t"+"---"+house.threadLocal.get());
    }
}
```

#### 1、小总结

因为每个 Thread 内有自己的实例副本且该副本只由当前线程自己使用

既然其它 Thread 不可访问，那就不存在多线程间共享的问题。

统一设置初始值，但是每个线程对这个值的修改都是各自线程互相独立的

1. 加入synchronized或者Lock控制资源的访问顺序

2. 人手一份，大家各自安好，没必要抢夺

### 3、从阿里ThreadLocal规范开始

![image-20210927222614201](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927222614201.png)

#### 1、非线程安全的SimpleDateFormat

![image-20210927222646376](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927222646376.png)

​		上述翻译：SimpleDateFormat中的日期格式不是同步的。推荐（建议）为每个线程创建独立的格式实例。如果多个线程同时访问一个格式，则它必须保持外部同步。

```java
public class DateUtils{
    public static final SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    /**
     * 模拟并发环境下使用SimpleDateFormat的parse方法将字符串转换成Date对象
     * @param stringDate
     * @return
     * @throws Exception
     */
    public static Date parseDate(String stringDate)throws Exception{
        return sdf.parse(stringDate);
    }
    
    public static void main(String[] args) throws Exception{
        for (int i = 1; i <=30; i++) {
            new Thread(() -> {
                try {
                    System.out.println(DateUtils.parseDate("2020-11-11 11:11:11"));
                } catch (Exception e) {
                    e.printStackTrace();
                }
            },String.valueOf(i)).start();
        }
    }
}
```

```java
java.lang.NumberFormatException: For input string: ""
	at java.lang.NumberFormatException.forInputString(NumberFormatException.java:65)
	at java.lang.Long.parseLong(Long.java:601)
	at java.lang.Long.parseLong(Long.java:631)
	at java.text.DigitList.getLong(DigitList.java:195)
	at java.text.DecimalFormat.parse(DecimalFormat.java:2082)
	at java.text.SimpleDateFormat.subParse(SimpleDateFormat.java:1869)
	at java.text.SimpleDateFormat.parse(SimpleDateFormat.java:1514)
	at java.text.DateFormat.parse(DateFormat.java:364)
	at com.zdww.tcm.utils.DateTimeUtil.parseDate(DateTimeUtil.java:1129)
	at com.zdww.tcm.utils.DateTimeUtil.lambda$main$0(DateTimeUtil.java:1137)
	at java.lang.Thread.run(Thread.java:748)
java.lang.NumberFormatException: For input string: ".20202E.20202E44"
	at sun.misc.FloatingDecimal.readJavaFormatString(FloatingDecimal.java:2043)
	at sun.misc.FloatingDecimal.parseDouble(FloatingDecimal.java:110)
	at java.lang.Double.parseDouble(Double.java:538)
	at java.text.DigitList.getDouble(DigitList.java:169)
	at java.text.DecimalFormat.parse(DecimalFormat.java:2087)
	at java.text.SimpleDateFormat.subParse(SimpleDateFormat.java:1869)
	at java.text.SimpleDateFormat.parse(SimpleDateFormat.java:1514)
	at java.text.DateFormat.parse(DateFormat.java:364)
	at com.zdww.tcm.utils.DateTimeUtil.parseDate(DateTimeUtil.java:1129)
	at com.zdww.tcm.utils.DateTimeUtil.lambda$main$0(DateTimeUtil.java:1137)
```

​		SimpleDateFormat类内部有一个Calendar对象引用,它用来储存和这个SimpleDateFormat相关的日期信息,例如sdf.parse(dateStr),sdf.format(date) 诸如此类的方法参数传入的日期相关String,Date等等, 都是交由Calendar引用来储存的.这样就会导致一个问题如果你的SimpleDateFormat是个static的, 那么多个thread 之间就会共享这个SimpleDateFormat, 同时也是共享这个Calendar引用。

![image-20210927222827543](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927222827543.png)

![image-20210927222831591](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927222831591.png)

#### 2、解决1

将SimpleDateFormat定义成局部变量。

缺点：每调用一次方法就会创建一个SimpleDateFormat对象，方法结束又要作为垃圾回收。

```java
public class DateUtils{
    public static final SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    /**
     * 模拟并发环境下使用SimpleDateFormat的parse方法将字符串转换成Date对象
     * @param stringDate
     * @return
     * @throws Exception
     */
    public static Date parseDate(String stringDate)throws Exception{
        return sdf.parse(stringDate);
    }

    public static void main(String[] args) throws Exception{
        for (int i = 1; i <=30; i++) {
            new Thread(() -> {
                try {
                    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
                    System.out.println(sdf.parse("2020-11-11 11:11:11"));
                    sdf = null;
                } catch (Exception e) {
                    e.printStackTrace();
                }
            },String.valueOf(i)).start();
        }
    }
}
```

#### 3、解决2

ThreadLocal，也叫做线程本地变量或者线程本地存储

```java
public class DateUtils{
    private static final ThreadLocal<SimpleDateFormat>  sdf_threadLocal =
            ThreadLocal.withInitial(()-> new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"));

    /**
     * ThreadLocal可以确保每个线程都可以得到各自单独的一个SimpleDateFormat的对象，那么自然也就不存在竞争问题了。
     * @param stringDate
     * @return
     * @throws Exception
     */
    public static Date parseDateTL(String stringDate)throws Exception{
        return sdf_threadLocal.get().parse(stringDate);
    }

    public static void main(String[] args) throws Exception{
        for (int i = 1; i <=30; i++) {
            new Thread(() -> {
                try {
                    System.out.println(DateUtils.parseDateTL("2020-11-11 11:11:11"));
                } catch (Exception e) {
                    e.printStackTrace();
                }
            },String.valueOf(i)).start();
        }
    }
}
```

```java
public class DateUtils{
    /*
    1   SimpleDateFormat如果多线程共用是线程不安全的类
    public static final SimpleDateFormat SIMPLE_DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

    public static String format(Date date)
    {
        return SIMPLE_DATE_FORMAT.format(date);
    }

    public static Date parse(String datetime) throws ParseException
    {
        return SIMPLE_DATE_FORMAT.parse(datetime);
    }*/

    //2   ThreadLocal可以确保每个线程都可以得到各自单独的一个SimpleDateFormat的对象，那么自然也就不存在竞争问题了。
    public static final ThreadLocal<SimpleDateFormat> SIMPLE_DATE_FORMAT_THREAD_LOCAL = ThreadLocal.withInitial(() -> new SimpleDateFormat("yyyy-MM-dd HH:mm:ss"));

    public static String format(Date date){
        return SIMPLE_DATE_FORMAT_THREAD_LOCAL.get().format(date);
    }

    public static Date parse(String datetime) throws ParseException{
        return SIMPLE_DATE_FORMAT_THREAD_LOCAL.get().parse(datetime);
    }


    //3 DateTimeFormatter 代替 SimpleDateFormat
    /*public static final DateTimeFormatter DATE_TIME_FORMAT = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

    public static String format(LocalDateTime localDateTime)
    {
        return DATE_TIME_FORMAT.format(localDateTime);
    }

    public static LocalDateTime parse(String dateString)
    {

        return LocalDateTime.parse(dateString,DATE_TIME_FORMAT);
    }*/
}
```

### 4、ThreadLocal源码分析

#### 1、Thread，ThreadLocal，ThreadLocalMap 关系

Thread和ThreadLocal

![image-20210927223107547](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927223107547.png)

再次体会，各自线程，人手一份

ThreadLocal和ThreadLocalMap

![image-20210927223131768](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927223131768.png)

All三者总概括

![image-20210927223141071](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927223141071.png)

​		threadLocalMap实际上就是一个以threadLocal实例为key，任意对象为value的Entry对象。
当我们为threadLocal变量赋值，实际上就是以当前threadLocal实例为key，值为value的Entry往这个threadLocalMap中存放

近似的可以理解为:
ThreadLocalMap从字面上就可以看出这是一个保存ThreadLocal对象的map(其实是以ThreadLocal为Key)，不过是经过了两层包装的ThreadLocal对象：

![image-20210927223215319](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927223215319.png)



​		JVM内部维护了一个线程版的Map<Thread,T>(通过ThreadLocal对象的set方法，结果把ThreadLocal对象自己当做key，放进了ThreadLoalMap中),每个线程要用到这个T的时候，用当前的线程去Map里面获取，通过这样让每个线程都拥有了自己独立的变量，人手一份，竞争条件被彻底消除，在并发模式下是绝对安全的变量。



### 5、ThreadLocal内存泄露问题

![image-20210927223726167](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927223726167.png)

#### 1、什么是内存泄漏

不再会被使用的对象或者变量占用的内存不能被回收，就是内存泄露。

#### 2、谁惹的祸？

![image-20210927223802332](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927223802332.png)

#### 3、强引用、软引用、弱引用、虚引用分别是什么？

![image-20210927223927641](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927223927641.png)

ThreadLocalMap从字面上就可以看出这是一个保存ThreadLocal对象的map(其实是以它为Key)，不过是经过了两层包装的ThreadLocal对象：
（1）第一层包装是使用 `WeakReference<ThreadLocal<?>>` 将ThreadLocal对象变成一个弱引用的对象；
（2）第二层包装是定义了一个专门的类 Entry 来扩展 `WeakReference<ThreadLocal<?>>`

![image-20210927223943383](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927223943383.png)

java 技术允许使用 finalize() 方法在垃圾收集器将对象从内存中清除出去之前做必要的清理工作。



##### 1、强引用(默认支持模式)

当内存不足，JVM开始垃圾回收，对于强引用的对象，就算是出现了OOM也不会对该对象进行回收，死都不收。

​		强引用是我们最常见的普通对象引用，只要还有强引用指向一个对象，就能表明对象还“活着”，垃圾收集器不会碰这种对象。在 Java 中最常见的就是强引用，把一个对象赋给一个引用变量，这个引用变量就是一个强引用。当一个对象被强引用变量引用时，它处于可达状态，它是不可能被垃圾回收机制回收的，即使该对象以后永远都不会被用到JVM也不会回收。因此强引用是造成Java内存泄漏的主要原因之一。

​		对于一个普通的对象，如果没有其他的引用关系，只要超过了引用的作用域或者显式地将相应（强）引用赋值为 null，一般认为就是可以被垃圾收集的了(当然具体回收时机还是要看垃圾收集策略)。

```java
public static void strongReference()
{
    MyObject myObject = new MyObject();
    System.out.println("-----gc before: "+myObject);

    myObject = null;
    System.gc();
    try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }

    System.out.println("-----gc after: "+myObject);
}
```

##### 2、软引用

软引用是一种相对强引用弱化了一些的引用，需要用java.lang.ref.SoftReference类来实现，可以让对象豁免一些垃圾收集。

对于只有软引用的对象来说，

当系统内存充足时它      不会     被回收，

当系统内存不足时它     会     被回收。

软引用通常用在对内存敏感的程序中，比如高速缓存就有用到软引用，内存够用的时候就保留，不够用就回收！

```java
class MyObject
{
    //一般开发中不用调用这个方法，本次只是为了演示
    @Override
    protected void finalize() throws Throwable
    {
        System.out.println(Thread.currentThread().getName()+"\t"+"---finalize method invoked....");
    }
}

public class ReferenceDemo
{
    public static void main(String[] args)
    {
        //当我们内存不够用的时候，soft会被回收的情况，设置我们的内存大小：-Xms10m -Xmx10m
        SoftReference<MyObject> softReference = new SoftReference<>(new MyObject());

        System.gc();
        try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }
        System.out.println("-----gc after内存够用: "+softReference.get());

        try
        {
            byte[] bytes = new byte[9 * 1024 * 1024];
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            System.out.println("-----gc after内存不够: "+softReference.get());
        }
    }

    public static void strongReference()
    {
        MyObject myObject = new MyObject();
        System.out.println("-----gc before: "+myObject);

        myObject = null;
        System.gc();
        try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }

        System.out.println("-----gc after: "+myObject);
    }
}
```

##### 3、弱引用

​		弱引用需要用java.lang.ref.WeakReference类来实现，它比软引用的生存期更短，对于只有弱引用的对象来说，只要垃圾回收机制一运行，不管JVM的内存空间是否足够，都会回收该对象占用的内存。

```java
class MyObject
{
    //一般开发中不用调用这个方法，本次只是为了演示
    @Override
    protected void finalize() throws Throwable
    {
        System.out.println(Thread.currentThread().getName()+"\t"+"---finalize method invoked....");
    }
}

public class ReferenceDemo
{
    public static void main(String[] args)
    {
        WeakReference<MyObject> weakReference = new WeakReference<>(new MyObject());
        System.out.println("-----gc before内存够用: "+weakReference.get());

        System.gc();
        try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }

        System.out.println("-----gc after内存够用: "+weakReference.get());
    }

    public static void softReference()
    {
        //当我们内存不够用的时候，soft会被回收的情况，设置我们的内存大小：-Xms10m -Xmx10m
        SoftReference<MyObject> softReference = new SoftReference<>(new MyObject());

        System.gc();
        try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }
        System.out.println("-----gc after内存够用: "+softReference.get());

        try
        {
            byte[] bytes = new byte[9 * 1024 * 1024];
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            System.out.println("-----gc after内存不够: "+softReference.get());
        }
    }

    public static void strongReference()
    {
        MyObject myObject = new MyObject();
        System.out.println("-----gc before: "+myObject);

        myObject = null;
        System.gc();
        try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }

        System.out.println("-----gc after: "+myObject);
    }
}
```

**软引用和弱引用的适用场景**

假如有一个应用需要读取大量的本地图片:

如果每次读取图片都从硬盘读取则会严重影响性能,

如果一次性全部加载到内存中又可能造成内存溢出。

此时使用软引用可以解决这个问题。

　　设计思路是：用一个HashMap来保存图片的路径和相应图片对象关联的软引用之间的映射关系，在内存不足时，JVM会自动回收这些缓存图片对象所占用的空间，从而有效地避免了OOM的问题。

Map<String, SoftReference<Bitmap>> imageCache = new HashMap<String, SoftReference<Bitmap>>();

##### 4、虚引用

虚引用需要java.lang.ref.PhantomReference类来实现。

​		顾名思义，就是形同虚设，与其他几种引用都不同，虚引用并不会决定对象的生命周期。如果一个对象仅持有虚引用，那么它就和没有任何引用一样，在任何时候都可能被垃圾回收器回收，它不能单独使用也不能通过它访问对象，虚引用必须和引用队列 (ReferenceQueue)联合使用。

​		虚引用的主要作用是跟踪对象被垃圾回收的状态。 仅仅是提供了一种确保对象被 finalize以后，做某些事情的机制。 PhantomReference的get方法总是返回null，因此无法访问对应的引用对象。

其意义在于：说明一个对象已经进入finalization阶段，可以被gc回收，用来实现比finalization机制更灵活的回收操作。

换句话说，设置虚引用关联的唯一目的，就是在这个对象被收集器回收的时候收到一个系统通知或者后续添加进一步的处理。

![image-20210927224455350](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927224455350.png)

![image-20210927224500569](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927224500569.png)

我被回收前需要被引用队列保存下。

```java
class MyObject
{
    //一般开发中不用调用这个方法，本次只是为了演示
    @Override
    protected void finalize() throws Throwable
    {
        System.out.println(Thread.currentThread().getName()+"\t"+"---finalize method invoked....");
    }
}

public class ReferenceDemo
{
    public static void main(String[] args)
    {
        ReferenceQueue<MyObject> referenceQueue = new ReferenceQueue();
        PhantomReference<MyObject> phantomReference = new PhantomReference<>(new MyObject(),referenceQueue);
        //System.out.println(phantomReference.get());

        List<byte[]> list = new ArrayList<>();

        new Thread(() -> {
            while (true)
            {
                list.add(new byte[1 * 1024 * 1024]);
                try { TimeUnit.MILLISECONDS.sleep(600); } catch (InterruptedException e) { e.printStackTrace(); }
                System.out.println(phantomReference.get());
            }
        },"t1").start();

        new Thread(() -> {
            while (true)
            {
                Reference<? extends MyObject> reference = referenceQueue.poll();
                if (reference != null) {
                    System.out.println("***********有虚对象加入队列了");
                }
            }
        },"t2").start();

        //暂停几秒钟线程
        try { TimeUnit.SECONDS.sleep(5); } catch (InterruptedException e) { e.printStackTrace(); }
    }

    public static void weakReference()
    {
        WeakReference<MyObject> weakReference = new WeakReference<>(new MyObject());
        System.out.println("-----gc before内存够用: "+weakReference.get());

        System.gc();
        try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }

        System.out.println("-----gc after内存够用: "+weakReference.get());
    }

    public static void softReference()
    {
        //当我们内存不够用的时候，soft会被回收的情况，设置我们的内存大小：-Xms10m -Xmx10m
        SoftReference<MyObject> softReference = new SoftReference<>(new MyObject());

        System.gc();
        try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }
        System.out.println("-----gc after内存够用: "+softReference.get());

        try
        {
            byte[] bytes = new byte[9 * 1024 * 1024];
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            System.out.println("-----gc after内存不够: "+softReference.get());
        }
    }

    public static void strongReference()
    {
        MyObject myObject = new MyObject();
        System.out.println("-----gc before: "+myObject);

        myObject = null;
        System.gc();
        try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }

        System.out.println("-----gc after: "+myObject);
    }
}
```

##### 5、GCRoots和四大引用小总结

![image-20210927224539900](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927224539900.png)



#### 4、关系

![image-20210927224633866](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927224633866.png)



![image-20210927224637416](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927224637416.png)



```
每个Thread对象维护着一个ThreadLocalMap的引用
ThreadLocalMap是ThreadLocal的内部类，用Entry来进行存储
调用ThreadLocal的set()方法时，实际上就是往ThreadLocalMap设置值，key是ThreadLocal对象，值Value是传递进来的对象
调用ThreadLocal的get()方法时，实际上就是往ThreadLocalMap获取值，key是ThreadLocal对象
ThreadLocal本身并不存储值，它只是自己作为一个key来让线程从ThreadLocalMap获取value，正因为这个原理，所以ThreadLocal能够实现“数据隔离”，获取当前线程的局部变量值，不受其他线程影响～
```

### 6、为什么要用弱引用?不用如何？

```java
public void function01()
{
    ThreadLocal tl = new ThreadLocal<Integer>();    //line1
    tl.set(2021);                                   //line2
    tl.get();                                       //line3
}
//line1新建了一个ThreadLocal对象，t1 是强引用指向这个对象；
//line2调用set()方法后新建一个Entry，通过源码可知Entry对象里的k是弱引用指向这个对象。
```

![image-20210927224731712](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927224731712.png)

​		当function01方法执行完毕后，栈帧销毁强引用 tl 也就没有了。但此时线程的ThreadLocalMap里某个entry的key引用还指向这个对象,若这个key引用是强引用，就会导致key指向的ThreadLocal对象及v指向的对象不能被gc回收，造成内存泄漏；若这个key引用是弱引用就大概率会减少内存泄漏的问题(还有一个key为null的雷)。使用弱引用，就可以使ThreadLocal对象在方法执行完毕后顺利被回收且Entry的key引用指向为null。

**此后我们调用get,set或remove方法时，就会尝试删除key为null的entry，可以释放value对象所占用的内存。**

##### 1、弱引用就万事大吉了吗？

1. 当我们为threadLocal变量赋值，实际上就是当前的Entry(threadLocal实例为key，值为value)往这个threadLocalMap中存放。Entry中的key是弱引用，当threadLocal外部强引用被置为null(tl=null),那么系统 GC 的时候，根据可达性分析，这个threadLocal实例就没有任何一条链路能够引用到它，这个ThreadLocal势必会被回收，这样一来，ThreadLocalMap中就会出现key为null的Entry，就没有办法访问这些key为null的Entry的value，如果当前线程再迟迟不结束的话，这些key为null的Entry的value就会一直存在一条强引用链：Thread Ref -> Thread -> ThreaLocalMap -> Entry -> value永远无法回收，造成内存泄漏。

2. 当然，如果当前thread运行结束，threadLocal，threadLocalMap,Entry没有引用链可达，在垃圾回收的时候都会被系统进行回收。

3. 但在实际使用中我们有时候会用线程池去维护我们的线程，比如在Executors.newFixedThreadPool()时创建线程的时候，为了复用线程是不会结束的，所以threadLocal内存泄漏就值得我们小心

##### 2、key为null的entry，原理解析

![image-20210927224633866](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927224633866.png)

​		ThreadLocalMap使用ThreadLocal的弱引用作为key，如果一个ThreadLocal没有外部强引用引用他，那么系统gc的时候，这个ThreadLocal势必会被回收，这样一来，ThreadLocalMap中就会出现key为null的Entry，就没有办法访问这些key为null的Entry的value，如果当前线程再迟迟不结束的话(比如正好用在线程池)，这些key为null的Entry的value就会一直存在一条强引用链。

​		虽然弱引用，保证了key指向的ThreadLocal对象能被及时回收，但是v指向的value对象是需要ThreadLocalMap调用get、set时发现key为null时才会去回收整个entry、value，因此弱引用不能100%保证内存不泄露。我们要在不使用某个ThreadLocal对象后，手动调用remoev方法来删除它，尤其是在线程池中，不仅仅是内存泄露的问题，因为线程池中的线程是重复使用的，意味着这个线程的ThreadLocalMap对象也是重复使用的，如果我们不手动调用remove方法，那么后面的线程就有可能获取到上个线程遗留下来的value值，造成bug。

##### 3、set、get方法会去检查所有键为null的Entry对象

set()

![image-20210927224959196](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927224959196.png)

![image-20210927225002054](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927225002054.png)



get()

![](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927225105228.png)

![image-20210927225110265](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927225110265.png)

![image-20210927225059412](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927225059412.png)

remove()

![image-20210927225121559](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927225121559.png)

结论

​		从前面的set,getEntry,remove方法看出，在threadLocal的生命周期里，针对threadLocal存在的内存泄漏的问题，
都会通过expungeStaleEntry，cleanSomeSlots,replaceStaleEntry这三个方法清理掉key为null的脏entry。

##### 4、结论

![image-20210927225235846](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927225235846.png)

![image-20210927225238663](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927225238663.png)

### 7、最佳实践

![image-20210927225409632](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927225409632.png)

用完记得手动remove



### 8、小总结

- ThreadLocal 并不解决线程间共享数据的问题
- ThreadLocal 适用于变量在线程间隔离且在方法间共享的场景
- ThreadLocal 通过隐式的在不同线程内创建独立实例副本避免了实例线程安全的问题
- 每个线程持有一个只属于自己的专属Map并维护了ThreadLocal对象与具体实例的映射，该Map由于只被持有它的线程访问，故不存在线程安全以及锁的问题
- ThreadLocalMap的Entry对ThreadLocal的引用为弱引用，避免了ThreadLocal对象无法被回收的问题
- 都会通过expungeStaleEntry，cleanSomeSlots,replaceStaleEntry这三个方法回收键为 null 的 Entry 对象的值（即为具体实例）以及 Entry 对象本身从而防止内存泄漏，属于安全加固的方法
- 群雄逐鹿起纷争，人各一份天下安

### 9、ThreadLocal和InheritableThreadLocal

需要解决的问题

> 我们还是以解决问题的方式来引出`ThreadLocal`、`InheritableThreadLocal`，这样印象会深刻一些。

目前java开发web系统一般有3层，controller、service、dao，请求到达controller，controller调用service，service调用dao，然后进行处理。

我们写一个简单的例子，有3个方法分别模拟controller、service、dao。代码如下：

```java
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.LinkedBlockingDeque;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

public class Demo1 {
    static AtomicInteger threadIndex = new AtomicInteger(1);
    //创建处理请求的线程池子
    static ThreadPoolExecutor disposeRequestExecutor = new ThreadPoolExecutor(3,
            3,
            60,
            TimeUnit.SECONDS,
            new LinkedBlockingDeque<>(),
            r -> {
                Thread thread = new Thread(r);
                thread.setName("disposeRequestThread-" + threadIndex.getAndIncrement());
                return thread;
            });
    //记录日志
    public static void log(String msg) {
        StackTraceElement stack[] = (new Throwable()).getStackTrace();
        System.out.println("****" + System.currentTimeMillis() + ",[线程:" + Thread.currentThread().getName() + "]," + stack[1] + ":" + msg);
    }
    //模拟controller
    public static void controller(List<String> dataList) {
        log("接受请求");
        service(dataList);
    }
    //模拟service
    public static void service(List<String> dataList) {
        log("执行业务");
        dao(dataList);
    }
    //模拟dao
    public static void dao(List<String> dataList) {
        log("执行数据库操作");
        //模拟插入数据
        for (String s : dataList) {
            log("插入数据" + s + "成功");
        }
    }
    public static void main(String[] args) {
        //需要插入的数据
        List<String> dataList = new ArrayList<>();
        for (int i = 0; i < 3; i++) {
            dataList.add("数据" + i);
        }
        //模拟5个请求
        int requestCount = 5;
        for (int i = 0; i < requestCount; i++) {
            disposeRequestExecutor.execute(() -> {
                controller(dataList);
            });
        }
        disposeRequestExecutor.shutdown();
    }
}
```

```java
****1565338891286,[线程:disposeRequestThread-2],com.itsoku.chat24.Demo1.controller(Demo1.java:36):接受请求
****1565338891286,[线程:disposeRequestThread-1],com.itsoku.chat24.Demo1.controller(Demo1.java:36):接受请求
****1565338891287,[线程:disposeRequestThread-2],com.itsoku.chat24.Demo1.service(Demo1.java:42):执行业务
****1565338891287,[线程:disposeRequestThread-1],com.itsoku.chat24.Demo1.service(Demo1.java:42):执行业务
****1565338891287,[线程:disposeRequestThread-3],com.itsoku.chat24.Demo1.controller(Demo1.java:36):接受请求
****1565338891287,[线程:disposeRequestThread-1],com.itsoku.chat24.Demo1.dao(Demo1.java:48):执行数据库操作
****1565338891287,[线程:disposeRequestThread-1],com.itsoku.chat24.Demo1.dao(Demo1.java:51):插入数据数据0成功
****1565338891287,[线程:disposeRequestThread-1],com.itsoku.chat24.Demo1.dao(Demo1.java:51):插入数据数据1成功
****1565338891287,[线程:disposeRequestThread-2],com.itsoku.chat24.Demo1.dao(Demo1.java:48):执行数据库操作
****1565338891287,[线程:disposeRequestThread-1],com.itsoku.chat24.Demo1.dao(Demo1.java:51):插入数据数据2成功
****1565338891287,[线程:disposeRequestThread-3],com.itsoku.chat24.Demo1.service(Demo1.java:42):执行业务
****1565338891288,[线程:disposeRequestThread-1],com.itsoku.chat24.Demo1.controller(Demo1.java:36):接受请求
****1565338891287,[线程:disposeRequestThread-2],com.itsoku.chat24.Demo1.dao(Demo1.java:51):插入数据数据0成功
****1565338891288,[线程:disposeRequestThread-1],com.itsoku.chat24.Demo1.service(Demo1.java:42):执行业务
****1565338891288,[线程:disposeRequestThread-3],com.itsoku.chat24.Demo1.dao(Demo1.java:48):执行数据库操作
****1565338891288,[线程:disposeRequestThread-1],com.itsoku.chat24.Demo1.dao(Demo1.java:48):执行数据库操作
****1565338891288,[线程:disposeRequestThread-2],com.itsoku.chat24.Demo1.dao(Demo1.java:51):插入数据数据1成功
****1565338891288,[线程:disposeRequestThread-1],com.itsoku.chat24.Demo1.dao(Demo1.java:51):插入数据数据0成功
****1565338891288,[线程:disposeRequestThread-3],com.itsoku.chat24.Demo1.dao(Demo1.java:51):插入数据数据0成功
****1565338891288,[线程:disposeRequestThread-1],com.itsoku.chat24.Demo1.dao(Demo1.java:51):插入数据数据1成功
****1565338891288,[线程:disposeRequestThread-2],com.itsoku.chat24.Demo1.dao(Demo1.java:51):插入数据数据2成功
****1565338891288,[线程:disposeRequestThread-1],com.itsoku.chat24.Demo1.dao(Demo1.java:51):插入数据数据2成功
****1565338891288,[线程:disposeRequestThread-3],com.itsoku.chat24.Demo1.dao(Demo1.java:51):插入数据数据1成功
****1565338891288,[线程:disposeRequestThread-2],com.itsoku.chat24.Demo1.controller(Demo1.java:36):接受请求
****1565338891288,[线程:disposeRequestThread-3],com.itsoku.chat24.Demo1.dao(Demo1.java:51):插入数据数据2成功
****1565338891288,[线程:disposeRequestThread-2],com.itsoku.chat24.Demo1.service(Demo1.java:42):执行业务
****1565338891289,[线程:disposeRequestThread-2],com.itsoku.chat24.Demo1.dao(Demo1.java:48):执行数据库操作
****1565338891289,[线程:disposeRequestThread-2],com.itsoku.chat24.Demo1.dao(Demo1.java:51):插入数据数据0成功
****1565338891289,[线程:disposeRequestThread-2],com.itsoku.chat24.Demo1.dao(Demo1.java:51):插入数据数据1成功
****1565338891289,[线程:disposeRequestThread-2],com.itsoku.chat24.Demo1.dao(Demo1.java:51):插入数据数据2成功
```

代码中调用controller、service、dao 3个方法时，来模拟处理一个请求。main方法中循环了5次模拟发起5次请求，然后交给线程池去处理请求，dao中模拟循环插入传入的dataList数据。

**问题来了：开发者想看一下哪些地方耗时比较多，想通过日志来分析耗时情况，想追踪某个请求的完整日志，怎么搞？**

上面的请求采用线程池的方式处理的，多个请求可能会被一个线程处理，通过日志很难看出那些日志是同一个请求，我们能不能给请求加一个唯一标志，日志中输出这个唯一标志，当然可以。

如果我们的代码就只有上面示例这么简单，我想还是很容易的，上面就3个方法，给每个方法加个traceId参数，log方法也加个traceId参数，就解决了，代码如下：

```java
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.LinkedBlockingDeque;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

public class Demo2 {
    static AtomicInteger threadIndex = new AtomicInteger(1);
    //创建处理请求的线程池子
    static ThreadPoolExecutor disposeRequestExecutor = new ThreadPoolExecutor(3,
            3,
            60,
            TimeUnit.SECONDS,
            new LinkedBlockingDeque<>(),
            r -> {
                Thread thread = new Thread(r);
                thread.setName("disposeRequestThread-" + threadIndex.getAndIncrement());
                return thread;
            });
    //记录日志
    public static void log(String msg, String traceId) {
        StackTraceElement stack[] = (new Throwable()).getStackTrace();
        System.out.println("****" + System.currentTimeMillis() + "[traceId:" + traceId + "],[线程:" + Thread.currentThread().getName() + "]," + stack[1] + ":" + msg);
    }
    //模拟controller
    public static void controller(List<String> dataList, String traceId) {
        log("接受请求", traceId);
        service(dataList, traceId);
    }
    //模拟service
    public static void service(List<String> dataList, String traceId) {
        log("执行业务", traceId);
        dao(dataList, traceId);
    }
    //模拟dao
    public static void dao(List<String> dataList, String traceId) {
        log("执行数据库操作", traceId);
        //模拟插入数据
        for (String s : dataList) {
            log("插入数据" + s + "成功", traceId);
        }
    }
    public static void main(String[] args) {
        //需要插入的数据
        List<String> dataList = new ArrayList<>();
        for (int i = 0; i < 3; i++) {
            dataList.add("数据" + i);
        }
        //模拟5个请求
        int requestCount = 5;
        for (int i = 0; i < requestCount; i++) {
            String traceId = String.valueOf(i);
            disposeRequestExecutor.execute(() -> {
                controller(dataList, traceId);
            });
        }
        disposeRequestExecutor.shutdown();
    }
}
```

```java
****1565339559773[traceId:0],[线程:disposeRequestThread-1],com.itsoku.chat24.Demo2.controller(Demo2.java:36):接受请求
****1565339559773[traceId:1],[线程:disposeRequestThread-2],com.itsoku.chat24.Demo2.controller(Demo2.java:36):接受请求
****1565339559773[traceId:2],[线程:disposeRequestThread-3],com.itsoku.chat24.Demo2.controller(Demo2.java:36):接受请求
****1565339559774[traceId:1],[线程:disposeRequestThread-2],com.itsoku.chat24.Demo2.service(Demo2.java:42):执行业务
****1565339559774[traceId:0],[线程:disposeRequestThread-1],com.itsoku.chat24.Demo2.service(Demo2.java:42):执行业务
****1565339559774[traceId:1],[线程:disposeRequestThread-2],com.itsoku.chat24.Demo2.dao(Demo2.java:48):执行数据库操作
****1565339559774[traceId:2],[线程:disposeRequestThread-3],com.itsoku.chat24.Demo2.service(Demo2.java:42):执行业务
****1565339559774[traceId:1],[线程:disposeRequestThread-2],com.itsoku.chat24.Demo2.dao(Demo2.java:51):插入数据数据0成功
****1565339559774[traceId:0],[线程:disposeRequestThread-1],com.itsoku.chat24.Demo2.dao(Demo2.java:48):执行数据库操作
****1565339559774[traceId:1],[线程:disposeRequestThread-2],com.itsoku.chat24.Demo2.dao(Demo2.java:51):插入数据数据1成功
****1565339559774[traceId:2],[线程:disposeRequestThread-3],com.itsoku.chat24.Demo2.dao(Demo2.java:48):执行数据库操作
****1565339559774[traceId:1],[线程:disposeRequestThread-2],com.itsoku.chat24.Demo2.dao(Demo2.java:51):插入数据数据2成功
****1565339559774[traceId:0],[线程:disposeRequestThread-1],com.itsoku.chat24.Demo2.dao(Demo2.java:51):插入数据数据0成功
****1565339559775[traceId:3],[线程:disposeRequestThread-2],com.itsoku.chat24.Demo2.controller(Demo2.java:36):接受请求
****1565339559775[traceId:2],[线程:disposeRequestThread-3],com.itsoku.chat24.Demo2.dao(Demo2.java:51):插入数据数据0成功
****1565339559775[traceId:3],[线程:disposeRequestThread-2],com.itsoku.chat24.Demo2.service(Demo2.java:42):执行业务
****1565339559775[traceId:0],[线程:disposeRequestThread-1],com.itsoku.chat24.Demo2.dao(Demo2.java:51):插入数据数据1成功
****1565339559775[traceId:3],[线程:disposeRequestThread-2],com.itsoku.chat24.Demo2.dao(Demo2.java:48):执行数据库操作
****1565339559775[traceId:2],[线程:disposeRequestThread-3],com.itsoku.chat24.Demo2.dao(Demo2.java:51):插入数据数据1成功
****1565339559775[traceId:3],[线程:disposeRequestThread-2],com.itsoku.chat24.Demo2.dao(Demo2.java:51):插入数据数据0成功
****1565339559775[traceId:0],[线程:disposeRequestThread-1],com.itsoku.chat24.Demo2.dao(Demo2.java:51):插入数据数据2成功
****1565339559775[traceId:3],[线程:disposeRequestThread-2],com.itsoku.chat24.Demo2.dao(Demo2.java:51):插入数据数据1成功
****1565339559775[traceId:2],[线程:disposeRequestThread-3],com.itsoku.chat24.Demo2.dao(Demo2.java:51):插入数据数据2成功
****1565339559775[traceId:3],[线程:disposeRequestThread-2],com.itsoku.chat24.Demo2.dao(Demo2.java:51):插入数据数据2成功
****1565339559775[traceId:4],[线程:disposeRequestThread-1],com.itsoku.chat24.Demo2.controller(Demo2.java:36):接受请求
****1565339559776[traceId:4],[线程:disposeRequestThread-1],com.itsoku.chat24.Demo2.service(Demo2.java:42):执行业务
****1565339559776[traceId:4],[线程:disposeRequestThread-1],com.itsoku.chat24.Demo2.dao(Demo2.java:48):执行数据库操作
****1565339559776[traceId:4],[线程:disposeRequestThread-1],com.itsoku.chat24.Demo2.dao(Demo2.java:51):插入数据数据0成功
****1565339559776[traceId:4],[线程:disposeRequestThread-1],com.itsoku.chat24.Demo2.dao(Demo2.java:51):插入数据数据1成功
****1565339559776[traceId:4],[线程:disposeRequestThread-1],com.itsoku.chat24.Demo2.dao(Demo2.java:51):插入数据数据2成功
```

上面我们通过修改代码的方式，把问题解决了，但前提是你们的系统都像上面这么简单，功能很少，需要改的代码很少，可以这么去改。但事与愿违，我们的系统一般功能都是比较多的，如果我们都一个个去改，岂不是要疯掉，改代码还涉及到重新测试，风险也不可控。那有什么好办法么？

**ThreadLocal**

还是拿上面的问题，我们来分析一下，每个请求都是由一个线程处理的，线程就相当于一个人一样，每个请求相当于一个任务，任务来了，人来处理，处理完毕之后，再处理下一个请求任务。人身上是不是有很多口袋，人刚开始准备处理任务的时候，我们把任务的编号放在处理者的口袋中，然后处理中一路携带者，处理过程中如果需要用到这个编号，直接从口袋中获取就可以了。那么刚好java中线程设计的时候也考虑到了这些问题，Thread对象中就有很多口袋，用来放东西。Thread类中有这么一个变量：

```java
ThreadLocal.ThreadLocalMap threadLocals = null;
```

如何来操作Thread中的这些口袋呢，java为我们提供了一个类`ThreadLocal`，ThreadLocal对象用来操作Thread中的某一个口袋，可以向这个口袋中放东西、获取里面的东西、清除里面的东西，这个口袋一次性只能放一个东西，重复放东西会将里面已经存在的东西覆盖掉。

常用的3个方法：

```java
//向Thread中某个口袋中放东西
public void set(T value);
//获取这个口袋中目前放的东西
public T get();
//清空这个口袋中放的东西
public void remove()
```

我们使用ThreadLocal来改造一下上面的代码，如下：

```java
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.LinkedBlockingDeque;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

public class Demo3 {
    //创建一个操作Thread中存放请求任务追踪id口袋的对象
    static ThreadLocal<String> traceIdKD = new ThreadLocal<>();
    static AtomicInteger threadIndex = new AtomicInteger(1);
    //创建处理请求的线程池子
    static ThreadPoolExecutor disposeRequestExecutor = new ThreadPoolExecutor(3,
            3,
            60,
            TimeUnit.SECONDS,
            new LinkedBlockingDeque<>(),
            r -> {
                Thread thread = new Thread(r);
                thread.setName("disposeRequestThread-" + threadIndex.getAndIncrement());
                return thread;
            });
    //记录日志
    public static void log(String msg) {
        StackTraceElement stack[] = (new Throwable()).getStackTrace();
        //获取当前线程存放tranceId口袋中的内容
        String traceId = traceIdKD.get();
        System.out.println("****" + System.currentTimeMillis() + "[traceId:" + traceId + "],[线程:" + Thread.currentThread().getName() + "]," + stack[1] + ":" + msg);
    }
    //模拟controller
    public static void controller(List<String> dataList) {
        log("接受请求");
        service(dataList);
    }
    //模拟service
    public static void service(List<String> dataList) {
        log("执行业务");
        dao(dataList);
    }
    //模拟dao
    public static void dao(List<String> dataList) {
        log("执行数据库操作");
        //模拟插入数据
        for (String s : dataList) {
            log("插入数据" + s + "成功");
        }
    }
    public static void main(String[] args) {
        //需要插入的数据
        List<String> dataList = new ArrayList<>();
        for (int i = 0; i < 3; i++) {
            dataList.add("数据" + i);
        }
        //模拟5个请求
        int requestCount = 5;
        for (int i = 0; i < requestCount; i++) {
            String traceId = String.valueOf(i);
            disposeRequestExecutor.execute(() -> {
                //把traceId放入口袋中
                traceIdKD.set(traceId);
                try {
                    controller(dataList);
                } finally {
                    //将tranceId从口袋中移除
                    traceIdKD.remove();
                }
            });
        }
        disposeRequestExecutor.shutdown();
    }
}
```

```java
****1565339644214[traceId:1],[线程:disposeRequestThread-2],com.itsoku.chat24.Demo3.controller(Demo3.java:41):接受请求
****1565339644214[traceId:2],[线程:disposeRequestThread-3],com.itsoku.chat24.Demo3.controller(Demo3.java:41):接受请求
****1565339644214[traceId:0],[线程:disposeRequestThread-1],com.itsoku.chat24.Demo3.controller(Demo3.java:41):接受请求
****1565339644214[traceId:2],[线程:disposeRequestThread-3],com.itsoku.chat24.Demo3.service(Demo3.java:47):执行业务
****1565339644214[traceId:1],[线程:disposeRequestThread-2],com.itsoku.chat24.Demo3.service(Demo3.java:47):执行业务
****1565339644214[traceId:2],[线程:disposeRequestThread-3],com.itsoku.chat24.Demo3.dao(Demo3.java:53):执行数据库操作
****1565339644214[traceId:0],[线程:disposeRequestThread-1],com.itsoku.chat24.Demo3.service(Demo3.java:47):执行业务
****1565339644214[traceId:2],[线程:disposeRequestThread-3],com.itsoku.chat24.Demo3.dao(Demo3.java:56):插入数据数据0成功
****1565339644214[traceId:0],[线程:disposeRequestThread-1],com.itsoku.chat24.Demo3.dao(Demo3.java:53):执行数据库操作
****1565339644214[traceId:1],[线程:disposeRequestThread-2],com.itsoku.chat24.Demo3.dao(Demo3.java:53):执行数据库操作
****1565339644215[traceId:0],[线程:disposeRequestThread-1],com.itsoku.chat24.Demo3.dao(Demo3.java:56):插入数据数据0成功
****1565339644215[traceId:2],[线程:disposeRequestThread-3],com.itsoku.chat24.Demo3.dao(Demo3.java:56):插入数据数据1成功
****1565339644215[traceId:0],[线程:disposeRequestThread-1],com.itsoku.chat24.Demo3.dao(Demo3.java:56):插入数据数据1成功
****1565339644215[traceId:1],[线程:disposeRequestThread-2],com.itsoku.chat24.Demo3.dao(Demo3.java:56):插入数据数据0成功
****1565339644215[traceId:0],[线程:disposeRequestThread-1],com.itsoku.chat24.Demo3.dao(Demo3.java:56):插入数据数据2成功
****1565339644215[traceId:2],[线程:disposeRequestThread-3],com.itsoku.chat24.Demo3.dao(Demo3.java:56):插入数据数据2成功
****1565339644215[traceId:1],[线程:disposeRequestThread-2],com.itsoku.chat24.Demo3.dao(Demo3.java:56):插入数据数据1成功
****1565339644215[traceId:4],[线程:disposeRequestThread-3],com.itsoku.chat24.Demo3.controller(Demo3.java:41):接受请求
****1565339644215[traceId:3],[线程:disposeRequestThread-1],com.itsoku.chat24.Demo3.controller(Demo3.java:41):接受请求
****1565339644215[traceId:4],[线程:disposeRequestThread-3],com.itsoku.chat24.Demo3.service(Demo3.java:47):执行业务
****1565339644215[traceId:1],[线程:disposeRequestThread-2],com.itsoku.chat24.Demo3.dao(Demo3.java:56):插入数据数据2成功
****1565339644215[traceId:4],[线程:disposeRequestThread-3],com.itsoku.chat24.Demo3.dao(Demo3.java:53):执行数据库操作
****1565339644215[traceId:3],[线程:disposeRequestThread-1],com.itsoku.chat24.Demo3.service(Demo3.java:47):执行业务
****1565339644215[traceId:4],[线程:disposeRequestThread-3],com.itsoku.chat24.Demo3.dao(Demo3.java:56):插入数据数据0成功
****1565339644215[traceId:3],[线程:disposeRequestThread-1],com.itsoku.chat24.Demo3.dao(Demo3.java:53):执行数据库操作
****1565339644215[traceId:4],[线程:disposeRequestThread-3],com.itsoku.chat24.Demo3.dao(Demo3.java:56):插入数据数据1成功
****1565339644215[traceId:3],[线程:disposeRequestThread-1],com.itsoku.chat24.Demo3.dao(Demo3.java:56):插入数据数据0成功
****1565339644215[traceId:4],[线程:disposeRequestThread-3],com.itsoku.chat24.Demo3.dao(Demo3.java:56):插入数据数据2成功
****1565339644215[traceId:3],[线程:disposeRequestThread-1],com.itsoku.chat24.Demo3.dao(Demo3.java:56):插入数据数据1成功
****1565339644215[traceId:3],[线程:disposeRequestThread-1],com.itsoku.chat24.Demo3.dao(Demo3.java:56):插入数据数据2成功
```

可以看出输出和刚才使用traceId参数的方式结果一致，但是却简单了很多。不用去修改controller、service、dao代码了，风险也减少了很多。

代码中创建了一个`ThreadLocal traceIdKD`，这个对象用来操作Thread中一个口袋，用这个口袋来存放tranceId。在main方法中通过`traceIdKD.set(traceId)`方法将traceId放入口袋，log方法中通`traceIdKD.get()`获取口袋中的traceId，最后任务处理完之后，main中的finally中调用`traceIdKD.remove();`将口袋中的traceId清除。

**ThreadLocal的官方API解释为：**

> “该类提供了线程局部 (thread-local) 变量。这些变量不同于它们的普通对应物，因为访问某个变量（通过其 get 或 set 方法）的每个线程都有自己的局部变量，它独立于变量的初始化副本。ThreadLocal 实例通常是类中的 private static 字段，它们希望将状态与某一个线程（例如，用户 ID 或事务 ID）相关联。”

**InheritableThreadLocal**

继续上面的实例，dao中循环处理dataList的内容，假如dataList处理比较耗时，我们想加快处理速度有什么办法么？大家已经想到了，用多线程并行处理`dataList`，那么我们把代码改一下，如下：

```java
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.LinkedBlockingDeque;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;

public class Demo4 {
    //创建一个操作Thread中存放请求任务追踪id口袋的对象
    static ThreadLocal<String> traceIdKD = new ThreadLocal<>();
    static AtomicInteger threadIndex = new AtomicInteger(1);
    //创建处理请求的线程池子
    static ThreadPoolExecutor disposeRequestExecutor = new ThreadPoolExecutor(3,
            3,
            60,
            TimeUnit.SECONDS,
            new LinkedBlockingDeque<>(),
            r -> {
                Thread thread = new Thread(r);
                thread.setName("disposeRequestThread-" + threadIndex.getAndIncrement());
                return thread;
            });
    //记录日志
    public static void log(String msg) {
        StackTraceElement stack[] = (new Throwable()).getStackTrace();
        //获取当前线程存放tranceId口袋中的内容
        String traceId = traceIdKD.get();
        System.out.println("****" + System.currentTimeMillis() + "[traceId:" + traceId + "],[线程:" + Thread.currentThread().getName() + "]," + stack[1] + ":" + msg);
    }
    //模拟controller
    public static void controller(List<String> dataList) {
        log("接受请求");
        service(dataList);
    }
    //模拟service
    public static void service(List<String> dataList) {
        log("执行业务");
        dao(dataList);
    }
    //模拟dao
    public static void dao(List<String> dataList) {
        CountDownLatch countDownLatch = new CountDownLatch(dataList.size());
        log("执行数据库操作");
        String threadName = Thread.currentThread().getName();
        //模拟插入数据
        for (String s : dataList) {
            new Thread(() -> {
                try {
                    //模拟数据库操作耗时100毫秒
                    TimeUnit.MILLISECONDS.sleep(100);
                    log("插入数据" + s + "成功,主线程：" + threadName);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                } finally {
                    countDownLatch.countDown();
                }
            }).start();
        }
        //等待上面的dataList处理完毕
        try {
            countDownLatch.await();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
    public static void main(String[] args) {
        //需要插入的数据
        List<String> dataList = new ArrayList<>();
        for (int i = 0; i < 3; i++) {
            dataList.add("数据" + i);
        }
        //模拟5个请求
        int requestCount = 5;
        for (int i = 0; i < requestCount; i++) {
            String traceId = String.valueOf(i);
            disposeRequestExecutor.execute(() -> {
                //把traceId放入口袋中
                traceIdKD.set(traceId);
                try {
                    controller(dataList);
                } finally {
                    //将tranceId从口袋中移除
                    traceIdKD.remove();
                }
            });
        }
        disposeRequestExecutor.shutdown();
    }
}
```

看一下上面的输出，有些traceId为null，这是为什么呢？这是因为dao中为了提升处理速度，创建了子线程来并行处理，子线程调用log的时候，去自己的存放traceId的口袋中拿去东西，肯定是空的了。

那有什么办法么？可不可以这样？

父线程相当于主管，子线程相当于干活的小弟，主管让小弟们干活的时候，将自己兜里面的东西复制一份给小弟们使用，主管兜里面可能有很多牛逼的工具，为了提升小弟们的工作效率，给小弟们都复制一个，丢到小弟们的兜里，然后小弟就可以从自己的兜里拿去这些东西使用了，也可以清空自己兜里面的东西。

`Thread`对象中有个`inheritableThreadLocals`变量，代码如下：

```java
ThreadLocal.ThreadLocalMap inheritableThreadLocals = null;
```

inheritableThreadLocals相当于线程中另外一种兜，这种兜有什么特征呢，当创建子线程的时候，子线程会将父线程这种类型兜的东西全部复制一份放到自己的`inheritableThreadLocals`兜中，使用`InheritableThreadLocal`对象可以操作线程中的`inheritableThreadLocals`兜。

`InheritableThreadLocal`常用的方法也有3个：

```java
//向Thread中某个口袋中放东西
public void set(T value);
//获取这个口袋中目前放的东西
public T get();
//清空这个口袋中放的东西
public void remove()
```

使用`InheritableThreadLocal`解决上面子线程中无法输出traceId的问题，只需要将上一个示例代码中的`ThreadLocal`替换成`InheritableThreadLocal`即可，代码如下：

```java
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.LinkedBlockingDeque;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicInteger;
/**
 * 跟着阿里p7学并发，微信公众号：javacode2018
 */
public class Demo4 {
    //创建一个操作Thread中存放请求任务追踪id口袋的对象,子线程可以继承父线程中内容
    static InheritableThreadLocal<String> traceIdKD = new InheritableThreadLocal<>();
    static AtomicInteger threadIndex = new AtomicInteger(1);
    //创建处理请求的线程池子
    static ThreadPoolExecutor disposeRequestExecutor = new ThreadPoolExecutor(3,
            3,
            60,
            TimeUnit.SECONDS,
            new LinkedBlockingDeque<>(),
            r -> {
                Thread thread = new Thread(r);
                thread.setName("disposeRequestThread-" + threadIndex.getAndIncrement());
                return thread;
            });
    //记录日志
    public static void log(String msg) {
        StackTraceElement stack[] = (new Throwable()).getStackTrace();
        //获取当前线程存放tranceId口袋中的内容
        String traceId = traceIdKD.get();
        System.out.println("****" + System.currentTimeMillis() + "[traceId:" + traceId + "],[线程:" + Thread.currentThread().getName() + "]," + stack[1] + ":" + msg);
    }
    //模拟controller
    public static void controller(List<String> dataList) {
        log("接受请求");
        service(dataList);
    }
    //模拟service
    public static void service(List<String> dataList) {
        log("执行业务");
        dao(dataList);
    }
    //模拟dao
    public static void dao(List<String> dataList) {
        CountDownLatch countDownLatch = new CountDownLatch(dataList.size());
        log("执行数据库操作");
        String threadName = Thread.currentThread().getName();
        //模拟插入数据
        for (String s : dataList) {
            new Thread(() -> {
                try {
                    //模拟数据库操作耗时100毫秒
                    TimeUnit.MILLISECONDS.sleep(100);
                    log("插入数据" + s + "成功,主线程：" + threadName);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                } finally {
                    countDownLatch.countDown();
                }
            }).start();
        }
        //等待上面的dataList处理完毕
        try {
            countDownLatch.await();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
    public static void main(String[] args) {
        //需要插入的数据
        List<String> dataList = new ArrayList<>();
        for (int i = 0; i < 3; i++) {
            dataList.add("数据" + i);
        }
        //模拟5个请求
        int requestCount = 5;
        for (int i = 0; i < requestCount; i++) {
            String traceId = String.valueOf(i);
            disposeRequestExecutor.execute(() -> {
                //把traceId放入口袋中
                traceIdKD.set(traceId);
                try {
                    controller(dataList);
                } finally {
                    //将tranceId从口袋中移除
                    traceIdKD.remove();
                }
            });
        }
        disposeRequestExecutor.shutdown();
    }
}
```



## 十四、Java对象内存布局和对象头

### 1、对象在堆内存中布局

![image-20210927225655948](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927225655948.png)

#### 1、对象在堆内存中的存储布局

![image-20210927225734825](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927225734825.png)

对象内部结构分为：对象头、实例数据、对齐填充（保证8个字节的倍数）。
对象头分为对象标记（markOop）和类元信息（klassOop），类元信息存储的是指向该对象类元数据（klass）的首地址。

#### 2、对象头

##### 1、对象标记Mark Word

![image-20210927225858356](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927225858356.png)



![image-20210927225903931](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927225903931.png)

在64位系统中，Mark Word占了8个字节，类型指针占了8个字节，一共是16个字节

![image-20210927225919957](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927225919957.png)

​		默认存储对象的HashCode、分代年龄和锁标志位等信息。这些信息都是与对象自身定义无关的数据，所以MarkWord被设计成一个非固定的数据结构以便在极小的空间内存存储尽量多的数据。它会根据对象的状态复用自己的存储空间，也就是说在运行期间MarkWord里存储的数据会随着锁标志位的变化而变化。

##### 2、类元信息(又叫类型指针)

![image-20210927230011055](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927230011055.png)

对象指向它的类元数据的指针，虚拟机通过这个指针来确定这个对象是哪个类的实例。

##### 3、对象头多大

在64位系统中，Mark Word占了8个字节，类型指针占了8个字节，一共是16个字节。

#### 3、实例数据

存放类的属性(Field)数据信息，包括父类的属性信息，如果是数组的实例部分还包括数组的长度，这部分内存按4字节对齐。

#### 4、对齐填充

虚拟机要求对象起始地址必须是8字节的整数倍。填充数据不是必须存在的，仅仅是为了字节对齐这部分内存按8字节补充对齐。

http://openjdk.java.net/groups/hotspot/docs/HotSpotGlossary.html

http://hg.openjdk.java.net/jdk8u/jdk8u/hotspot/file/89fb452b3688/src/share/vm/oops/oop.hpp

![image-20210927230137020](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927230137020.png)

_mark字段是mark word，_metadata是类指针klass pointer，
对象头（object header）即是由这两个字段组成，这些术语可以参考Hotspot术语表，

![image-20210927230150668](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927230150668.png)



### 2、MarkWord

#### 1、oop.hpp

![image-20210927230137020](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927230137020.png)

#### 2、markOop.hpp

```
hash： 保存对象的哈希码
age： 保存对象的分代年龄
biased_lock： 偏向锁标识位
lock： 锁状态标识位
JavaThread* ：保存持有偏向锁的线程ID
epoch： 保存偏向时间戳
```

![image-20210927230308057](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927230308057.png)

markword(64位)分布图，对象布局、GC回收和后面的锁升级就是对象标记MarkWord里面标志位的变化

![image-20210927230321279](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927230321279.png)



### 3、聊聊Object obj = new Object()

#### 1、JOL证明

http://openjdk.java.net/projects/code-tools/jol/

```xml
<!--
官网：http://openjdk.java.net/projects/code-tools/jol/
定位：分析对象在JVM的大小和分布
-->
<dependency>
    <groupId>org.openjdk.jol</groupId>
    <artifactId>jol-core</artifactId>
    <version>0.9</version>
</dependency>
```

```java
public class MyObject
{
    public static void main(String[] args){
        //VM的细节详细情况
        System.out.println(VM.current().details());
        //所有的对象分配的字节都是8的整数倍。
        System.out.println(VM.current().objectAlignment());
    }
}
```

![image-20210927230415577](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927230415577.png)

```java
public class JOLDemo
{
    public static void main(String[] args)
    {
        Object o = new Object();
        System.out.println( ClassLayout.parseInstance(o).toPrintable());
    }
}
```

![image-20210927230442184](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927230442184.png)

| OFFSET      | 偏移量，也就是到这个字段位置所占用的byte数 |
| ----------- | ------------------------------------------ |
| SIZE        | 后面类型的字节大小                         |
| TYPE        | 是Class中定义的类型                        |
| DESCRIPTION | DESCRIPTION是类型的描述                    |
| VALUE       | VALUE是TYPE在内存中的值                    |

**GC年龄采用4位bit存储，最大为15，例如MaxTenuringThreshold参数默认值就是15**

-XX:MaxTenuringThreshold=16

![image-20210927230617433](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927230617433.png)

#### 2、默认开启压缩说明

```
java -XX:+PrintCommandLineFlags -version
```

![image-20210927230700348](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927230700348.png)

```
-XX:+UseCompressedClassPointers
```

![image-20210927230717948](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927230717948.png)

上述表示开启了类型指针的压缩，以节约空间，假如不加压缩？？？

**手动关闭压缩再看看**

```
-XX:-UseCompressedClassPointers
```

![image-20210927230743485](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927230743485.png)

### 4、换成其他对象试试

![image-20210927230805766](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927230805766.png)

![image-20210927230808775](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210927230808775.png)

## 十五、Synchronized与锁升级

### 1、Synchronized 锁优化的背景

用锁能够实现数据的安全性，但是会带来性能下降。
无锁能够基于线程并行提升程序性能，但是会带来安全性下降。

![image-20210929210812273](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929210812273.png)

synchronized锁：由对象头中的Mark Word根据锁标志位的不同而被复用及锁升级策略

### 2、Synchronized的性能变化

java5以前，只有Synchronized，这个是操作系统级别的重量级操作，重量级锁，假如锁的竞争比较激烈的话，性能下降

#### 1、Java5之前，用户态和内核态之间的切换

![image-20210929210932836](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929210932836.png)

​		java的线程是映射到操作系统原生线程之上的，如果要阻塞或唤醒一个线程就需要操作系统介入，需要在户态与核心态之间切换，这种切换会消耗大量的系统资源，因为用户态与内核态都有各自专用的内存空间，专用的寄存器等，用户态切换至内核态需要传递给许多变量、参数给内核，内核也需要保护好用户态在切换时的一些寄存器值、变量等，以便内核态调用结束后切换回用户态继续工作。

​		在Java早期版本中，synchronized属于重量级锁，效率低下，因为监视器锁（monitor）是依赖于底层的操作系统的Mutex Lock来实现的，挂起线程和恢复线程都需要转入内核态去完成，阻塞或唤醒一个Java线程需要操作系统切换CPU状态来完成，这种状态切换需要耗费处理器时间，如果同步代码块中内容过于简单，这种切换的时间可能比用户代码执行的时间还长”，时间成本相对较高，这也是为什么早期的synchronized效率低的原因
Java 6之后，为了减少获得锁和释放锁所带来的性能消耗，引入了轻量级锁和偏向锁

#### 2、为什么每一个对象都可以成为一个锁？？？？

markOop.hpp

![image-20210929211015422](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929211015422.png)

​		Monitor可以理解为一种同步工具，也可理解为一种同步机制，常常被描述为一个Java对象。Java对象是天生的Monitor，每一个Java对象都有成为Monitor的潜质，因为在Java的设计中 ，每一个Java对象自打娘胎里出来就带了一把看不见的锁，它叫做内部锁或者Monitor锁。

![image-20210929211037543](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929211037543.png)

Monitor的本质是依赖于底层操作系统的Mutex Lock实现，操作系统实现线程之间的切换需要从用户态到内核态的转换，成本非常高。

Monitor(监视器锁)

![image-20210929211107964](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929211107964.png)

Mutex Lock 
Monitor是在jvm底层实现的，底层代码是c++。本质是依赖于底层操作系统的Mutex Lock实现，操作系统实现线程之间的切换需要从用户态到内核态的转换，状态转换需要耗费很多的处理器时间成本非常高。所以synchronized是Java语言中的一个重量级操作。

Monitor与java对象以及线程是如何关联 ？
1.如果一个java对象被某个线程锁住，则该java对象的Mark Word字段中LockWord指向monitor的起始地址
2.Monitor的Owner字段会存放拥有相关联对象锁的线程id

Mutex Lock 的切换需要从用户态转换到核心态中，因此状态转换需要耗费很多的处理器时间。

#### 3、java6开始，优化Synchronized

Java 6之后，为了减少获得锁和释放锁所带来的性能消耗，引入了轻量级锁和偏向锁

需要有个逐步升级的过程，别一开始就捅到重量级锁

### 3、Synchronized锁种类及升级步骤

#### 1、多线程访问情况，3种

- 只有一个线程来访问，有且唯一Only One
- 有2个线程A、B来交替访问
- 竞争激烈，多个线程来访问

#### 2、升级流程

synchronized用的锁是存在Java对象头里的Mark Word中锁升级功能主要依赖MarkWord中锁标志位和释放偏向锁标志位

![image-20210929211353978](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929211353978.png)

#### 3、无锁

```java
public class MyObject
{
    public static void main(String[] args)
    {
        Object o = new Object();

        System.out.println("10进制hash码："+o.hashCode());
        System.out.println("16进制hash码："+Integer.toHexString(o.hashCode()));
        System.out.println("2进制hash码："+Integer.toBinaryString(o.hashCode()));

        System.out.println( ClassLayout.parseInstance(o).toPrintable());
    }
}
```

![image-20210929211429008](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929211429008.png)

![image-20210929211444490](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929211444490.png)

#### 4、偏向锁

- 当一段同步代码一直被同一个线程多次访问，由于只有一个线程那么该线程在后续访问时便会自动获得锁
- 同一个老顾客来访，直接老规矩行方便

>Hotspot 的作者经过研究发现，大多数情况下：
>
>多线程的情况下，锁不仅不存在多线程竞争，还存在锁由同一线程多次获得的情况，
>
>偏向锁就是在这种情况下出现的，它的出现是为了解决只有在一个线程执行同步时提高性能。

![image-20210929211553962](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929211553962.png)

通过CAS方式修改markword中的线程ID

##### 1、偏向锁的持有

理论落地：
      在实际应用运行过程中发现，“锁总是同一个线程持有，很少发生竞争”，也就是说锁总是被第一个占用他的线程拥有，这个线程就是锁的偏向线程。

​      那么只需要在锁第一次被拥有的时候，记录下偏向线程ID。这样偏向线程就一直持有着锁(后续这个线程进入和退出这段加了同步锁的代码块时，不需要再次加锁和释放锁。而是直接比较对象头里面是否存储了指向当前线程的偏向锁)。
如果相等表示偏向锁是偏向于当前线程的，就不需要再尝试获得锁了，直到竞争发生才释放锁。以后每次同步，检查锁的偏向线程ID与当前线程ID是否一致，如果一致直接进入同步。无需每次加锁解锁都去CAS更新对象头。如果自始至终使用锁的线程只有一个，很明显偏向锁几乎没有额外开销，性能极高。

​      假如不一致意味着发生了竞争，锁已经不是总是偏向于同一个线程了，这时候可能需要升级变为轻量级锁，才能保证线程间公平竞争锁。偏向锁只有遇到其他线程尝试竞争偏向锁时，持有偏向锁的线程才会释放锁，线程是不会主动释放偏向锁的。

技术实现：
		一个synchronized方法被一个线程抢到了锁时，那这个方法所在的对象就会在其所在的Mark Word中将偏向锁修改状态位，同时还
会有占用前54位来存储线程指针作为标识。若该线程再次访问同一个synchronized方法时，该线程只需去对象头的Mark Word 中去判断一下是否有偏向锁指向本身的ID，无需再进入 Monitor 去竞争对象了。

##### 2、细化案例Account对象举例说明

偏向锁的操作不用直接捅到操作系统，不涉及用户到内核转换，不必要直接升级为最高级，我们以一个account对象的“对象头”为例，

![image-20210929211754329](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929211754329.png)

​		假如有一个线程执行到synchronized代码块的时候，JVM使用CAS操作把线程指针ID记录到Mark Word当中，并修改标偏向标示，标示当前线程就获得该锁。锁对象变成偏向锁（通过CAS修改对象头里的锁标志位），字面意思是“偏向于第一个获得它的线程”的锁。执行完同步代码块后，线程并不会主动释放偏向锁。

![image-20210929211803269](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929211803269.png)

​		这时线程获得了锁，可以执行同步代码块。当该线程第二次到达同步代码块时会判断此时持有锁的线程是否还是自己（持有锁的线程ID也在对象头里），JVM通过account对象的Mark Word判断：当前线程ID还在，说明还持有着这个对象的锁，就可以继续进入临界区工作。由于之前没有释放锁，这里也就不需要重新加锁。 如果自始至终使用锁的线程只有一个，很明显偏向锁几乎没有额外开销，性能极高。



​		**结论**：JVM不用和操作系统协商设置Mutex(争取内核)，它只需要记录下线程ID就标示自己获得了当前锁，不用操作系统接入。
上述就是偏向锁：在没有其他线程竞争的时候，一直偏向偏心当前线程，当前线程可以一直执行。

##### 3、偏向锁JVM命令

```sh
java -XX:+PrintFlagsInitial |grep BiasedLock*
```

![image-20210929211909262](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929211909262.png)

![image-20210929211918843](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929211918843.png)

```
* 实际上偏向锁在JDK1.6之后是默认开启的，但是启动时间有延迟，
* 所以需要添加参数-XX:BiasedLockingStartupDelay=0，让其在程序启动时立刻启动。
*
* 开启偏向锁：
* -XX:+UseBiasedLocking -XX:BiasedLockingStartupDelay=0
*
* 关闭偏向锁：关闭之后程序默认会直接进入------------------------------------------>>>>>>>>   轻量级锁状态。
* -XX:-UseBiasedLocking
```

##### 4、Code演示

 ```java
 public class MyObject
 {
     public static void main(String[] args)
     {
         Object o = new Object();
 
         new Thread(() -> {
             synchronized (o){
                 System.out.println(ClassLayout.parseInstance(o).toPrintable());
             }
         },"t1").start();
     }
 }
 ```

![image-20210929212100730](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929212100730.png)

一切默认，演示无效果,因为参数系统默认开启

![image-20210929212916026](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929212916026.png)

```sh
-XX:+UseBiasedLocking                       # 开启偏向锁(默认)           
-XX:-UseBiasedLocking                       # 关闭偏向锁
-XX:BiasedLockingStartupDelay=0             # 关闭延迟(演示偏向锁时需要开启)

#参数说明：
#偏向锁在JDK1.6以上默认开启，开启后程序启动几秒后才会被激活，可以使用JVM参数来关闭延迟 -XX:BiasedLockingStartupDelay=0
 
#如果确定锁通常处于竞争状态则可通过JVM参数 -XX:-UseBiasedLocking 关闭偏向锁，那么默认会进入轻量级锁

```

关闭延时参数，启用该功能

```sh
-XX:BiasedLockingStartupDelay=0
```

![image-20210929212953054](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929212953054.png)

##### 5、偏向锁的撤销

当有另外线程逐步来竞争锁的时候，就不能再使用偏向锁了，要升级为轻量级锁

竞争线程尝试CAS更新对象头失败，会等待到全局安全点（此时不会执行任何代码）撤销偏向锁。

> 偏向锁使用一种等到竞争出现才释放锁的机制，只有当其他线程竞争锁时，持有偏向锁的原来线程才会被撤销。
> 撤销需要等待全局安全点(该时间点上没有字节码正在执行)，同时检查持有偏向锁的线程是否还在执行： 
>
> ①  第一个线程正在执行synchronized方法(处于同步块)，它还没有执行完，其它线程来抢夺，该偏向锁会被取消掉并出现锁升级。
> 此时轻量级锁由原持有偏向锁的线程持有，继续执行其同步代码，而正在竞争的线程会进入自旋等待获得该轻量级锁。
> ②  第一个线程执行完成synchronized方法(退出同步块)，则将对象头设置成无锁状态并撤销偏向锁，重新偏向 。

![](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929213113133.png)

![image-20210929213128855](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929213128855.png)



#### 5、轻锁

有线程来参与锁的竞争，但是获取锁的冲突时间极短

本质就是自旋锁

##### 1、轻量级锁的获取

轻量级锁是为了在线程近乎交替执行同步块时提高性能。
主要目的： 在没有多线程竞争的前提下，通过CAS减少重量级锁使用操作系统互斥量产生的性能消耗，说白了先自旋再阻塞。
升级时机： 当关闭偏向锁功能或多线程竞争偏向锁会导致偏向锁升级为轻量级锁

假如线程A已经拿到锁，这时线程B又来抢该对象的锁，由于该对象的锁已经被线程A拿到，当前该锁已是偏向锁了。
而线程B在争抢时发现对象头Mark Word中的线程ID不是线程B自己的线程ID(而是线程A)，那线程B就会进行CAS操作希望能获得锁。
此时线程B操作中有两种情况：
如果锁获取成功，直接替换Mark Word中的线程ID为B自己的ID(A → B)，重新偏向于其他线程(即将偏向锁交给其他线程，相当于当前线程"被"释放了锁)，该锁会保持偏向锁状态，A线程Over，B线程上位；

![image-20210929213253052](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929213253052.png)

​		如果锁获取失败，则偏向锁升级为轻量级锁，此时轻量级锁由原持有偏向锁的线程持有，继续执行其同步代码，而正在竞争的线程B会进入自旋等待获得该轻量级锁。

![image-20210929213304246](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929213304246.png)

##### 2、Code演示

![image-20210929213324762](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929213324762.png)

如果关闭偏向锁，就可以直接进入轻量级锁

```sh
-XX:-UseBiasedLocking
```

##### 3、自旋达到一定次数和程度

java6之前

默认启用，默认情况下自旋的次数是 10 次  -XX:PreBlockSpin=10来修改，或者自旋线程数超过cpu核数一半

Java6之后

自适应，自适应意味着自旋的次数不是固定不变的

而是根据：同一个锁上一次自旋的时间，拥有锁线程的状态来决定。

##### 4、轻量锁与偏向锁的区别和不同

争夺轻量级锁失败时，自旋尝试抢占锁

轻量级锁每次退出同步块都需要释放锁，而偏向锁是在竞争发生时才释放锁

#### 6、重锁

有大量的线程参与锁的竞争，冲突性很高

![image-20210929213558173](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929213558173.png)

![image-20210929213604489](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929213604489.png)



#### 7、各种锁优缺点、synchronized锁升级和实现原理

![image-20210929213623068](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929213623068.png)

synchronized锁升级过程总结：一句话，就是先自旋，不行再阻塞。
实际上是把之前的悲观锁(重量级锁)变成在一定条件下使用偏向锁以及使用轻量级(自旋锁CAS)的形式

​		synchronized在修饰方法和代码块在字节码上实现方式有很大差异，但是内部实现还是基于对象头的MarkWord来实现的。
JDK1.6之前synchronized使用的是重量级锁，JDK1.6之后进行了优化，拥有了无锁->偏向锁->轻量级锁->重量级锁的升级过程，而不是无论什么情况都使用重量级锁。

​		偏向锁:适用于单线程适用的情况，在不存在锁竞争的时候进入同步方法/代码块则使用偏向锁。
轻量级锁：适用于竞争较不激烈的情况(这和乐观锁的使用范围类似)， 存在竞争时升级为轻量级锁，轻量级锁采用的是自旋锁，如果同步方法/代码块执行时间很短的话，采用轻量级锁虽然会占用cpu资源但是相对比使用重量级锁还是更高效。
​		重量级锁：适用于竞争激烈的情况，如果同步方法/代码块执行时间很长，那么使用轻量级锁自旋带来的性能消耗就比使用重量级锁更严重，这时候就需要升级为重量级锁。

### 4、JIT编译器对锁的优化

Just In Time Compiler，一般翻译为即时编译器

#### 1、锁消除

```java
/**
 * 锁消除
 * 从JIT角度看相当于无视它，synchronized (o)不存在了,这个锁对象并没有被共用扩散到其它线程使用，
 * 极端的说就是根本没有加这个锁对象的底层机器码，消除了锁的使用
 */
public class LockClearUPDemo
{
    static Object objectLock = new Object();//正常的

    public void m1()
    {
        //锁消除,JIT会无视它，synchronized(对象锁)不存在了。不正常的
        Object o = new Object();

        synchronized (o)
        {
            System.out.println("-----hello LockClearUPDemo"+"\t"+o.hashCode()+"\t"+objectLock.hashCode());
        }
    }

    public static void main(String[] args)
    {
        LockClearUPDemo demo = new LockClearUPDemo();

        for (int i = 1; i <=10; i++) {
            new Thread(() -> {
                demo.m1();
            },String.valueOf(i)).start();
        }
    }
}
```

#### 2、锁粗化

```java
/**
 * 锁粗化
 * 假如方法中首尾相接，前后相邻的都是同一个锁对象，那JIT编译器就会把这几个synchronized块合并成一个大块，
 * 加粗加大范围，一次申请锁使用即可，避免次次的申请和释放锁，提升了性能
 */
public class LockBigDemo
{
    static Object objectLock = new Object();


    public static void main(String[] args)
    {
        new Thread(() -> {
            synchronized (objectLock) {
                System.out.println("11111");
            }
            synchronized (objectLock) {
                System.out.println("22222");
            }
            synchronized (objectLock) {
                System.out.println("33333");
            }
        },"a").start();

        new Thread(() -> {
            synchronized (objectLock) {
                System.out.println("44444");
            }
            synchronized (objectLock) {
                System.out.println("55555");
            }
            synchronized (objectLock) {
                System.out.println("66666");
            }
        },"b").start();

    }
}
```



## 十六、AbstractQueuedSynchronizer之AQS

### 1、AQS是什么

字面意思:抽象的队列同步器

![image-20210929214004518](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929214004518.png)

```java
AbstractOwnableSynchronizer
AbstractQueuedLongSynchronizer
AbstractQueuedSynchronizer                  
通常地：AbstractQueuedSynchronizer简称为AQS
```

**技术解释**

​		是用来构建锁或者其它同步器组件的重量级基础框架及整个JUC体系的基石，通过内置的FIFO队列来完成资源获取线程的排队工作，并通过一个int类变量表示持有锁的状态

![image-20210929214041662](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929214041662.png)



CLH：Craig、Landin and Hagersten 队列，是一个单向链表，AQS中的队列是CLH变体的虚拟双向队列FIFO

### 2、AQS为什么是JUC内容中最重要的基石

#### 1、和AQS有关的

![image-20210929214144170](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929214144170.png)

#### 2、ReentrantLock

![image-20210929214213703](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929214213703.png)

#### 3、CountDownLatch

![image-20210929214224423](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929214224423.png)

#### 4、ReentrantReadWriteLock

![image-20210929214237561](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929214237561.png)

#### 5、Semaphore

![image-20210929214249848](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929214249848.png)

#### 6、进一步理解锁和同步器的关系

锁，面向锁的使用者 

定义了程序员和锁交互的使用层API，隐藏了实现细节，你调用即可。



同步器，面向锁的实现者

比如Java并发大神DougLee，提出统一规范并简化了锁的实现，屏蔽了同步状态管理、阻塞线程排队和通知、唤醒机制等。

### 3、AQS能干嘛

加锁会导致阻塞，有阻塞就需要排队，实现排队必然需要队列

​		抢到资源的线程直接使用处理业务，抢不到资源的必然涉及一种排队等候机制。抢占资源失败的线程继续去等待(类似银行业务办理窗口都满了，暂时没有受理窗口的顾客只能去候客区排队等候)，但等候线程仍然保留获取锁的可能且获取锁流程仍在继续(候客区的顾客也在等着叫号，轮到了再去受理窗口办理业务)。

既然说到了排队等候机制，那么就一定会有某种队列形成，这样的队列是什么数据结构呢？

​		如果共享资源被占用，就需要一定的阻塞等待唤醒机制来保证锁分配。这个机制主要用的是CLH队列的变体实现的，将暂时获取不到锁的线程加入到队列中，这个队列就是AQS的抽象表现。它将请求共享资源的线程封装成队列的结点（Node），通过CAS、自旋以及LockSupport.park()的方式，维护state变量的状态，使并发达到同步的效果。

![image-20210929214426330](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929214426330.png)

### 4、AQS初步

#### 1、官网解释

![image-20210929214506123](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929214506123.png)

有阻塞就需要排队，实现排队必然需要队列

​		AQS使用一个volatile的int类型的成员变量来表示同步状态，通过内置的FIFO队列来完成资源获取的排队工作将每条要去抢占资源的线程封装成一个Node节点来实现锁的分配，通过CAS完成对State值的修改。

![image-20210929214546424](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929214546424.png)

#### 2、AQS内部体系架构

![image-20210929214605895](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929214605895.png)

![image-20210929214622747](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929214622747.png)

##### 1、AQS自身

1. AQS的int变量

AQS的同步状态State成员变量

![image-20210929214734697](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929214734697.png)



银行办理业务的受理窗口状态

零就是没人，自由状态可以办理

大于等于1，有人占用窗口，等着去



2. AQS的CLH队列

CLH队列(三个大牛的名字组成)，为一个双向队列

![image-20210929214808112](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929214808112.png)

**小总结**

有阻塞就需要排队，实现排队必然需要队列

state变量+CLH双端队列

##### 2、内部类Node(Node类在AQS类内部)

1. Node的int变量

Node的等待状态waitState成员变量

```java
volatile int waitStatus
```

等候区其它顾客(其它线程)的等待状态

队列中每个排队的个体就是一个 Node

2. Node此类的讲解

![image-20210929214940522](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929214940522.png)



![image-20210929214949657](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929214949657.png)

##### 3、AQS同步队列的基本结构

![image-20210929215024937](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929215024937.png)

CLH：Craig、Landin and Hagersten 队列，是个单向链表，AQS中的队列是CLH变体的虚拟双向队列（FIFO）

### 5、从ReentrantLock开始解读AQS

Lock接口的实现类，基本都是通过【聚合】了一个【队列同步器】的子类完成线程访问控制的

#### 1、ReentrantLock的原理

![image-20210929215121096](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929215121096.png)



#### 2、从最简单的lock方法开始看看公平和非公平

![image-20210929215157532](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929215157532.png)

![image-20210929215208921](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929215208921.png)

![image-20210929215217723](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929215217723.png)

> 可以明显看出公平锁与非公平锁的lock()方法唯一的区别就在于公平锁在获取同步状态时多了一个限制条件：
> hasQueuedPredecessors()
> hasQueuedPredecessors是公平锁加锁时判断等待队列中是否存在有效节点的方法

#### 3、非公平锁 方法lock()

对比公平锁和非公平锁的 tryAcquire()方法的实现代码，其实差别就在于非公平锁获取锁时比公平锁中少了一个判断 !hasQueuedPredecessors()

hasQueuedPredecessors() 中判断了是否需要排队，导致公平锁和非公平锁的差异如下：

公平锁：公平锁讲究先来先到，线程在获取锁时，如果这个锁的等待队列中已经有线程在等待，那么当前线程就会进入等待队列中；

非公平锁：不管是否有等待队列，如果可以获取锁，则立刻占有锁对象。也就是说队列的第一个排队线程在unpark()，之后还是需要竞争锁（存在线程竞争的情况下）

![image-20210929215348250](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929215348250.png)

#### 4、源码解读

##### 1、lock()

![image-20210929215500057](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929215500057.png)

##### 2、acquire()

![image-20210929215527782](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929215527782.png)

![image-20210929215532317](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929215532317.png)

##### 3、tryAcquire(arg)

非公平锁

![image-20210929215617239](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929215617239.png)

![image-20210929215622470](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929215622470.png)

nonfairTryAcquire(acquires)

![image-20210929215636783](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929215636783.png)

return false; 继续推进条件，走下一个方法

return true; 结束

##### 4、addWaiter(Node.EXCLUSIVE)

addWaiter(Node mode)

![image-20210929215721311](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929215721311.png)

enq(node);

![image-20210929215749207](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929215749207.png)

双向链表中，第一个节点为虚节点(也叫哨兵节点)，其实并不存储任何信息，只是占位。
真正的第一个有数据的节点，是从第二个节点开始的。

假如3号ThreadC线程进来

prev - compareAndSetTail - next

##### 5、acquireQueued(addWaiter(Node.EXCLUSIVE), arg)

acquireQueued

![image-20210929215842781](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929215842781.png)

假如再抢抢失败就会进入

shouldParkAfterFailedAcquire 和 parkAndCheckInterrupt 方法中

![image-20210929215859160](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929215859160.png)

shouldParkAfterFailedAcquire 

![image-20210929215907481](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929215907481.png)

​		如果前驱节点的 waitStatus 是 SIGNAL状态，即 shouldParkAfterFailedAcquire 方法会返回 true 程序会继续向下执行 parkAndCheckInterrupt 方法，用于将当前线程挂起

parkAndCheckInterrupt 

![image-20210929215923254](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929215923254.png)

#### 5、unlock

sync.release(1); 

tryRelease(arg)

unparkSuccessor

## 十七、ReentrantLock、ReentrantReadWriteLock、StampedLock

### 1、ReentrantReadWriteLock

读写锁定义为：一个资源能够被多个读线程访问，或者被一个写线程访问，但是不能同时存在读写线程。

![image-20210929220234946](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929220234946.png)

#### 1、读写锁意义和特点

​		读写锁ReentrantReadWriteLock并不是真正意义上的读写分离，它只允许读读共存，而读写和写写依然是互斥的，
大多实际场景是“读/读”线程间并不存在互斥关系，只有"读/写"线程或"写/写"线程间的操作需要互斥的。因此引入ReentrantReadWriteLock。

​		一个ReentrantReadWriteLock同时只能存在一个写锁但是可以存在多个读锁，但不能同时存在写锁和读锁(切菜还是拍蒜选一个)。也即一个资源可以被多个读操作访问或一个写操作访问，但两者不能同时进行。


只有在读多写少情境之下，读写锁才具有较高的性能体现。

#### 2、特点

- 可重入
- 读写分离

```java
public class ReentrantReadWriteLockDemo
{
    public static void main(String[] args)
    {
        MyResource myResource = new MyResource();

        for (int i = 1; i <=10; i++) {
            int finalI = i;
            new Thread(() -> {
                myResource.write(finalI +"", finalI +"");
            },String.valueOf(i)).start();
        }

        for (int i = 1; i <=10; i++) {
            int finalI = i;
            new Thread(() -> {
                myResource.read(finalI +"");
            },String.valueOf(i)).start();
        }

        //暂停几秒钟线程
        try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }

        //读全部over才可以继续写
        for (int i = 1; i <=3; i++) {
            int finalI = i;
            new Thread(() -> {
                myResource.write(finalI +"", finalI +"");
            },"newWriteThread==="+String.valueOf(i)).start();
        }
    }
}
```

#### 3、从写锁→读锁，ReentrantReadWriteLock可以降级

《Java 并发编程的艺术》中关于锁降级的说明：

锁的严苛程度变强叫做升级，反之叫做降级

![image-20210929220521703](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929220521703.png)

锁降级：将写入锁降级为读锁(类似Linux文件读写权限理解，就像写权限要高于读权限一样)

##### 1、读写锁降级演示

可以降级

锁降级：遵循获取写锁→再获取读锁→再释放写锁的次序，写锁能够降级成为读锁。
如果一个线程占有了写锁，在不释放写锁的情况下，它还能占有读锁，即写锁降级为读锁。

![image-20210929220618332](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929220618332.png)

Java8 官网说明

![image-20210929220638216](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929220638216.png)

重入还允许通过获取写入锁定，然后读取锁然后释放写锁从写锁到读取锁, 但是，从读锁定升级到写锁是不可能的。

**锁降级是为了让当前线程感知到数据的变化，目的是保证数据可见性**

```java
/**
 * 锁降级：遵循获取写锁→再获取读锁→再释放写锁的次序，写锁能够降级成为读锁。
 *
 * 如果一个线程占有了写锁，在不释放写锁的情况下，它还能占有读锁，即写锁降级为读锁。
 */
public class LockDownGradingDemo
{
    public static void main(String[] args)
    {
        ReentrantReadWriteLock readWriteLock = new ReentrantReadWriteLock();

        ReentrantReadWriteLock.ReadLock readLock = readWriteLock.readLock();
        ReentrantReadWriteLock.WriteLock writeLock = readWriteLock.writeLock();


        writeLock.lock();
        System.out.println("-------正在写入");


        readLock.lock();
        System.out.println("-------正在读取");

        writeLock.unlock();
    }
}
```

**如果有线程在读，那么写线程是无法获取写锁的，是悲观锁的策略**

不可锁升级

线程获取读锁是不能直接升级为写入锁的。

![image-20210929220808008](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929220808008.png)

![image-20210929220811350](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929220811350.png)

在ReentrantReadWriteLock中，当读锁被使用时，如果有线程尝试获取写锁，该写线程会被阻塞。所以，需要释放所有读锁，才可获取写锁，

![image-20210929220821174](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929220821174.png)

##### 2、写锁和读锁是互斥的

​		写锁和读锁是互斥的（这里的互斥是指线程间的互斥，当前线程可以获取到写锁又获取到读锁，但是获取到了读锁不能继续获取写锁），这是因为读写锁要保持写操作的可见性。因为，如果允许读锁在被获取的情况下对写锁的获取，那么正在运行的其他读线程无法感知到当前写线程的操作

​		因此，分析读写锁ReentrantReadWriteLock，会发现它有个潜在的问题：读锁全完，写锁有望；写锁独占，读写全堵；如果有线程正在读，写线程需要等待读线程释放锁后才能获取写锁，见前面Case《code演示LockDownGradingDemo》即ReadWriteLock读的过程中不允许写，只有等待线程都释放了读锁，当前线程才能获取写锁，也就是写入必须等待，这是一种悲观的读锁，o(╥﹏╥)o，人家还在读着那，你先别去写，省的数据乱。

​		分析StampedLock(后面详细讲解)，会发现它改进之处在于：读的过程中也允许获取写锁介入(相当牛B，读和写两个操作也让你“共享”(注意引号))，这样会导致我们读的数据就可能不一致！所以，需要额外的方法来判断读的过程中是否有写入，这是一种乐观的读锁，O(∩_∩)O哈哈~。 显然乐观锁的并发效率更高，但一旦有小概率的写入导致读取的数据不一致，需要能检测出来，再读一遍就行。

#### 4、读写锁之读写规矩，再说降级

锁降级  下面的示例代码摘自ReentrantWriteReadLock源码中：
ReentrantWriteReadLock支持锁降级，遵循按照获取写锁，获取读锁再释放写锁的次序，写锁能够降级成为读锁，不支持锁升级。
解读在最下面:

![image-20210929221016416](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/image-20210929221016416.png)

1. 代码中声明了一个volatile类型的cacheValid变量，保证其可见性。

2. 首先获取读锁，如果cache不可用，则释放读锁，获取写锁，在更改数据之前，再检查一次cacheValid的值，然后修改数据，将cacheValid置为true，然后在释放写锁前获取读锁；此时，cache中数据可用，处理cache中数据，最后释放读锁。这个过程就是一个完整的锁降级的过程，目的是保证数据可见性。

- 如果违背锁降级的步骤 
  - 如果当前的线程C在修改完cache中的数据后，没有获取读锁而是直接释放了写锁，那么假设此时另一个线程D获取了写锁并修改了数据，那么C线程无法感知到数据已被修改，则数据出现错误。

- 如果遵循锁降级的步骤 
  - 线程C在释放写锁之前获取读锁，那么线程D在获取写锁时将被阻塞，直到线程C完成数据处理过程，释放读锁。这样可以保证返回的数据是这次更新的数据，该机制是专门为了缓存设计的。

### 2、邮戳锁StampedLock

无锁→独占锁→读写锁→邮戳锁

#### 1、StampedLock是什么

StampedLock是JDK1.8中新增的一个读写锁，也是对JDK1.5中的读写锁ReentrantReadWriteLock的优化。

邮戳锁 - 也叫票据锁

>  stamp（戳记，long类型）
>
> 代表了锁的状态。当stamp返回零时，表示线程获取锁失败。并且，当释放锁或者转换锁的时候，都要传入最初获取的stamp值。

#### 2、它是由锁饥饿问题引出

​		ReentrantReadWriteLock实现了读写分离，但是一旦读操作比较多的时候，想要获取写锁就变得比较困难了，假如当前1000个线程，999个读，1个写，有可能999个读取线程长时间抢到了锁，那1个写线程就悲剧了 因为当前有可能会一直存在读锁，而无法获得写锁，根本没机会写，

##### 1、如何缓解锁饥饿问题？

使用“公平”策略可以一定程度上缓解这个问题

```java
new ReentrantReadWriteLock(true);
```

但是“公平”策略是以牺牲系统吞吐量为代价的



**StampedLock类的乐观读锁闪亮登场**

```
ReentrantReadWriteLock
允许多个线程同时读，但是只允许一个线程写，在线程获取到写锁的时候，其他写操作和读操作都会处于阻塞状态，
读锁和写锁也是互斥的，所以在读的时候是不允许写的，读写锁比传统的synchronized速度要快很多，
原因就是在于ReentrantReadWriteLock支持读并发

StampedLock横空出世
ReentrantReadWriteLock的读锁被占用的时候，其他线程尝试获取写锁的时候会被阻塞。
但是，StampedLock采取乐观获取锁后，其他线程尝试获取写锁时不会被阻塞，这其实是对读锁的优化，
所以，在获取乐观读锁后，还需要对结果进行校验。
```

#### 3、StampedLock的特点

- 所有获取锁的方法，都返回一个邮戳（Stamp），Stamp为零表示获取失败，其余都表示成功；
- 所有释放锁的方法，都需要一个邮戳（Stamp），这个Stamp必须是和成功获取锁时得到的Stamp一致；
- StampedLock是不可重入的，危险(如果一个线程已经持有了写锁，再去获取写锁的话就会造成死锁)

##### 1、StampedLock有三种访问模式

1. Reading（读模式）：功能和ReentrantReadWriteLock的读锁类似

2. Writing（写模式）：功能和ReentrantReadWriteLock的写锁类似

3. Optimistic reading（乐观读模式）：无锁机制，类似于数据库中的乐观锁，支持读写并发，很乐观认为读取时没人修改，假如被修改再实现升级为悲观读模式

##### 2、乐观读模式code演示

```java
public class StampedLockDemo
{
    static int number = 37;
    static StampedLock stampedLock = new StampedLock();

    public void write()
    {
        long stamp = stampedLock.writeLock();
        System.out.println(Thread.currentThread().getName()+"\t"+"=====写线程准备修改");
        try
        {
            number = number + 13;
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            stampedLock.unlockWrite(stamp);
        }
        System.out.println(Thread.currentThread().getName()+"\t"+"=====写线程结束修改");
    }

    //悲观读
    public void read()
    {
        long stamp = stampedLock.readLock();
        System.out.println(Thread.currentThread().getName()+"\t come in readlock block,4 seconds continue...");
        //暂停几秒钟线程
        for (int i = 0; i <4 ; i++) {
            try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }
            System.out.println(Thread.currentThread().getName()+"\t 正在读取中......");
        }
        try
        {
            int result = number;
            System.out.println(Thread.currentThread().getName()+"\t"+" 获得成员变量值result：" + result);
            System.out.println("写线程没有修改值，因为 stampedLock.readLock()读的时候，不可以写，读写互斥");
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            stampedLock.unlockRead(stamp);
        }
    }

    //乐观读
    public void tryOptimisticRead()
    {
        long stamp = stampedLock.tryOptimisticRead();
        int result = number;
        //间隔4秒钟，我们很乐观的认为没有其他线程修改过number值，实际靠判断。
        System.out.println("4秒前stampedLock.validate值(true无修改，false有修改)"+"\t"+stampedLock.validate(stamp));
        for (int i = 1; i <=4 ; i++) {
            try { TimeUnit.SECONDS.sleep(1); } catch (InterruptedException e) { e.printStackTrace(); }
            System.out.println(Thread.currentThread().getName()+"\t 正在读取中......"+i+
                    "秒后stampedLock.validate值(true无修改，false有修改)"+"\t"
                    +stampedLock.validate(stamp));
        }
        if(!stampedLock.validate(stamp)) {
            System.out.println("有人动过--------存在写操作！");
            stamp = stampedLock.readLock();
            try {
                System.out.println("从乐观读 升级为 悲观读");
                result = number;
                System.out.println("重新悲观读锁通过获取到的成员变量值result：" + result);
            }catch (Exception e){
                e.printStackTrace();
            }finally {
                stampedLock.unlockRead(stamp);
            }
        }
        System.out.println(Thread.currentThread().getName()+"\t finally value: "+result);
    }

    public static void main(String[] args)
    {
        StampedLockDemo resource = new StampedLockDemo();

        new Thread(() -> {
            resource.read();
            //resource.tryOptimisticRead();
        },"readThread").start();

        // 2秒钟时乐观读失败，6秒钟乐观读取成功resource.tryOptimisticRead();，修改切换演示
        //try { TimeUnit.SECONDS.sleep(6); } catch (InterruptedException e) { e.printStackTrace(); }

        new Thread(() -> {
            resource.write();
        },"writeThread").start();
    }
}
```

**读的过程中也允许获取写锁介入**

#### 4、StampedLock的缺点

- StampedLock 不支持重入，没有Re开头
- StampedLock 的悲观读锁和写锁都不支持条件变量（Condition），这个也需要注意。
- 使用 StampedLock一定不要调用中断操作，即不要调用interrupt() 方法
  - 如果需要支持中断功能，一定使用可中断的悲观读锁 readLockInterruptibly()和写锁writeLockInterruptibly()

# 附：我的博客

![我的博客](http://122.9.159.116:5244/d/ecloud180/images/blogImage/JUC并发编程/我的博客.jpg)