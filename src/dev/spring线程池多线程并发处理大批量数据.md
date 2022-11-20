---
author: xlc520
title: Spring线程池多线程并发处理大批量数据，解决IO效率问题
description: 
date: 2022-05-20
category: Java
tag: Java
article: true
timeline: true
icon: java
password: 
---



# Spring线程池多线程并发处理大批量数据，解决IO效率问题

首先，叙述一下当前面临的问题所在。当前系统通过接口调用其他系统的数据，返回的数据达到10万级，然后将这批数据插入到oracle数据库。怎样尽可能提高这一过程的效率？

## 大致从两个时间节点来优化：

一个节点是优化接口之间调用的响应速度，可以项目之间使用集群，实现负载均衡。接口拿到数据后可以暂存到Redis或kafka再者是MQ队列中，以提高接口直接的相率。

当然了如果项目团队允许，分布式的Hbase也是个不错的选择。当然了这些都不是重点，吹了半天下面才是重点。

今天的主题是大批量数据并发入库的问题，现在主流的项目工程大部分spring全家桶占大部分，所以咱们选择使用spring的线程池解决这一问题。大家可以思考一下10万条数据入库传统的web是一个线程运作，把这部分数据拆成10份或者20份分给多个线程去处理不就提高效率了？

思路有了，接下来，不哔哔了，直接干代码。

## 两个方案：

### 方案一：新建几个线程，交给线程池管理

1、准备测试数据

```java
public List<BookStatistic> getPsrList(){
  List<BookStatistic> psrList = new ArrayList<BookStatistic>();
  for(int i=0 ; i<20000 ;i++){
   BookStatistic book = new BookStatistic();
   book.setPno("zxl"+i);
   psrList.add(book);
  }
  
  return bookList;
 }
```

2、线程池配置类

```java
@Configuration
@EnableAsync
public class AsyncConfig {
 
  //接收报文核心线程数
  @Value("${book.core.poolsize}")
  private int bookCorePoolSize;
  //接收报文最大线程数
  @Value("${book.max.poolsize}")
  private int bookMaxPoolSize;
  //接收报文队列容量
  @Value("${book.queue.capacity}")
  private int bookQueueCapacity;
  //接收报文线程活跃时间（秒）
  @Value("${book.keepAlive.seconds}")
  private int bookKeepAliveSeconds;
  //接收报文默认线程名称
  @Value("${book.thread.name.prefix}")
  private String bookThreadNamePrefix;
  
   /**
    * bookTaskExecutor:(接口的线程池). <br/>
    * @return TaskExecutor taskExecutor接口
    * @since JDK 1.8
    */
     @Bean(name="BookTask")
     public ThreadPoolTaskExecutor bookTaskExecutor() {
      //newFixedThreadPool
         ThreadPoolTaskExecutor executor = new ThreadPoolTaskExecutor();
         // 设置核心线程数
         executor.setCorePoolSize(bookCorePoolSize);
         // 设置最大线程数
         executor.setMaxPoolSize(bookMaxPoolSize);
         // 设置队列容量
         executor.setQueueCapacity(bookQueueCapacity);
         // 设置线程活跃时间（秒）
         executor.setKeepAliveSeconds(bookKeepAliveSeconds);
         // 设置默认线程名称
         executor.setThreadNamePrefix(bookThreadNamePrefix);
         // 设置拒绝策略
         // rejection-policy：当pool已经达到max size的时候，如何处理新任务  
         // CALLER_RUNS：不在新线程中执行任务，而是由调用者所在的线程来执行 
         executor.setRejectedExecutionHandler(new ThreadPoolExecutor.CallerRunsPolicy());
         // 等待所有任务结束后再关闭线程池
         executor.setWaitForTasksToCompleteOnShutdown(true);
         executor.initialize();
         return executor;
     }
}
```

3、实现过程函数

```java
public void ReceivePsrJobRun(){
  
  List<BookStatistic> bookList = null;
  
 
  bookList = getBookList();
  //接收集合各段的 执行的返回结果
  List<Future<String>> futureList = new ArrayList<Future<String>>();
  //集合总条数
  int size = bookList.size();
  //将集合切分的段数(2*CPU的核心数)
  int sunSum = 2*Runtime.getRuntime().availableProcessors();
  int listStart,listEnd;
  //当总条数不足sunSum条时 用总条数 当做线程切分值
  if(sunSum > size){
   sunSum = size;
  }
  
  //定义子线程
  /*BookThread bookThread;*/
  
  //将list 切分多份 多线程执行
  for (int i = 0; i < sunSum; i++) {
   //计算切割  开始和结束
   listStart = size / sunSum * i ;
   listEnd = size / sunSum * ( i + 1 );
   //最后一段线程会 出现与其他线程不等的情况
   if(i == sunSum - 1){
    listEnd = size;
   }
   //线程切断**/
   List<BookStatistic> sunList = bookList.subList(listStart,listEnd); 
   //子线程初始化
   bookThread = new BookThread(i,sunList);
   
   //多线程执行
   futureList.add(taskExecutor.submit(bookThread));
  }
  System.out.println("----------1111111111");
  //对各个线程段结果进行解析
  for(Future<String> future : futureList){
   try {
    String str ;
    if(null != future ){
     str = future.get().toString();
     System.out.println("##############current thread id ="+Thread.currentThread().getName()+",result="+str);
    }else{
     System.err.println("失败");
    }
   } catch (InterruptedException | ExecutionException e) {
    
    // TODO Auto-generated catch block
    e.printStackTrace();
    
   }
  }
  System.out.println("----------2222");
 
 }
```

4、线程类

```java
@Component
public class BookThread implements Callable<Boolean>{
 private static final Logger LOG = LoggerFactory.getLogger(BookThread.class);
 //当前是属于第几段线程
 private int pageIndex;
 //此段数据的集合
 private List<BookStatistic> bookList;
 
 public BookThread(int pageIndex,List<BookStatistic> list){
  this.pageIndex = pageIndex;
  this.psrList = list;
 }
 @Override
 public Boolean call() throws Exception {
  
   System.err.println(String.format("此批数据的段数为:%s 此段数据的数据条数为:%s",pageIndex,psrList.size()));
   Boolean result = Boolean.TRUE;
  
   if(null != bookList&& bookList.size() >0){
    for(BookStatistic book: bookList){
   
     try {
       //数据入库函数
     } catch (Exception e) {
      
      result = Boolean.FALSE;
      continue;
     }
    }
   }
   return result;
  }
 
 
}
```

### 方案二：只定义线程的数量，线程的新建管理都交给线程池

准备测试数据和线程池的配置和方案一一样，不再赘述。

方案二不再新建线程类了，这个过程交给spring线程池去处理，取而代之的是spring下的一个异步注解@Async

```java
@Component
public class SyncBookHandler {
 
 
 private static final Logger LOG = LoggerFactory.getLogger(SyncBookHandler.class);
 /**
  * syncMargePsr:(多线程同步处理数据方法). <br/>
  * @author LW
  * @param bookList 一段数据集合
  * @param pageIndex 段数
  * @return Future<String> future对象
  * @since JDK 1.8
  */
 @Async
 public Future<String> syncMargePsr(List<BookStatistic> bookList,int pageIndex){
  
 
    LOG.info(String.format("此批数据的段数为:%s 此段数据的数据条数为:%s",pageIndex,psrList.size()));
   //声明future对象
    Future<String> result = new AsyncResult<String>("");
    //循环遍历该段旅客集合
   if(null != bookList && bookList.size() >0){
    for(BookStatistic book: bookList){
     try {
      //数据入库操作
      
     } catch (Exception e) {
      
      //记录出现异常的时间，线程name
      result = new AsyncResult<String>("fail,time="+System.currentTimeMillis()+",thread id="+Thread.currentThread().getName()+",pageIndex="+pageIndex);
      continue;
     }
    }
   }
   return result;
  }
```

实现过程函数

```java
 @Autowired
 private SyncBookHandler syncBookHandler;
 
 //核心线程数
 @Value("${book.core.poolsize}")
 private int threadSum;
 
public void receiveBookJobRun(){
  List<BookStatistic> bookList = null;
  
 
  bookList  = getPsrList();
  //入库开始时间
  Long inserOrUpdateBegin = System.currentTimeMillis();
  LOG.info("数据更新开始时间:"+inserOrUpdateBegin);
  //接收集合各段的 执行的返回结果
  List<Future<String>> futureList = new ArrayList<Future<String>>();
  //集合总条数
  if(psrList != null){
   int listSize = bookList.size();
   
   int listStart,listEnd;
   //当总条数不足threadSum条时 用总条数 当做线程切分值
   if(threadSum > listSize){
    threadSum = listSize;
   }
  
   //将list 切分多份 多线程执行
   for (int i = 0; i < threadSum; i++) {
    //计算切割  开始和结束
    listStart = listSize / threadSum * i ;
    listEnd = listSize / threadSum * ( i + 1 );
    //最后一段线程会 出现与其他线程不等的情况
    if(i == threadSum - 1){
     listEnd = listSize;
    }
    //数据切断
    List<BookStatistic> sunList = psrList.subList(listStart,listEnd); 
 
    //每段数据集合并行入库
    futureList.add(syncPassengerHandler.syncMargePsr(sunList,i));
 
   }
   
   //对各个线程段结果进行解析
   for(Future<String> future : futureList){
    
     String str ;
     if(null != future ){
      try {
       str = future.get().toString();
       LOG.info("current thread id ="+Thread.currentThread().getName()+",result="+str);
  
      } catch (InterruptedException | ExecutionException e) {
       
       LOG.info("线程运行异常！");
      }
      
     }else{
      LOG.info("线程运行异常！");
     }
    
   }
  }
  
  
  
  Long inserOrUpdateEnd = System.currentTimeMillis();
  LOG.info("数据更新结束时间:"+inserOrUpdateEnd+"。此次更新数据花费时间为："+(inserOrUpdateEnd-inserOrUpdateBegin));
 
 }
```

以上思路和代码为简单的实现过程，鄙人能力有限，欢迎各位大神提出建议！！