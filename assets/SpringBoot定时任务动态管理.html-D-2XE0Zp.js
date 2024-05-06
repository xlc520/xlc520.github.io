import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as r,c as u,d as e,e as i,b as d,a as l}from"./app-CHLzVell.js";const v={},c=l(`<h1 id="springboot-定时任务动态管理" tabindex="-1"><a class="header-anchor" href="#springboot-定时任务动态管理"><span>SpringBoot 定时任务动态管理</span></a></h1><h2 id="一、功能说明" tabindex="-1"><a class="header-anchor" href="#一、功能说明"><span><strong>一、功能说明</strong></span></a></h2><p>SpringBoot 的定时任务的加强工具，实现对 SpringBoot 原生的定时任务进行动态管理,完全兼容原生@Scheduled 注解,无需对原本的定时任务进行修改</p><h2 id="二、快速使用" tabindex="-1"><a class="header-anchor" href="#二、快速使用"><span><strong>二、快速使用</strong></span></a></h2><p>具体的功能已经封装成 SpringBoot-starter 即插即用</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.github.guoyixing&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-super-scheduled&lt;/artifactId&gt;
    &lt;version&gt;0.3.1&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方法和源码：</p>`,7),t=e("strong",null,"码云：",-1),m={href:"https://gitee.com/qiaodaimadewangcai/super-scheduled",target:"_blank",rel:"noopener noreferrer"},o=e("strong",null,"github：",-1),b={href:"https://github.com/guoyixing/super-scheduled",target:"_blank",rel:"noopener noreferrer"},p=l(`<h2 id="三、实现原理" tabindex="-1"><a class="header-anchor" href="#三、实现原理"><span><strong>三、实现原理</strong></span></a></h2><h4 id="_1、动态管理实现" tabindex="-1"><a class="header-anchor" href="#_1、动态管理实现"><span><strong>1、动态管理实现</strong></span></a></h4><p>(1) 配置管理介绍</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>@Component(&quot;superScheduledConfig&quot;)
public class SuperScheduledConfig {
    /**
     * 执行定时任务的线程池
     */
    private ThreadPoolTaskScheduler taskScheduler;

    /**
     * 定时任务名称与定时任务回调钩子  的关联关系容器
     */
    private Map&lt;String, ScheduledFuture&gt; nameToScheduledFuture = new ConcurrentHashMap&lt;&gt;();

    /**
     * 定时任务名称与定时任务需要执行的逻辑  的关联关系容器
     */
    private Map&lt;String, Runnable&gt; nameToRunnable = new ConcurrentHashMap&lt;&gt;();

    /**
     * 定时任务名称与定时任务的源信息  的关联关系容器
     */
    private Map&lt;String, ScheduledSource&gt; nameToScheduledSource = new ConcurrentHashMap&lt;&gt;();
 /* 普通的get/sets省略 */
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2) 使用后处理器拦截 SpringBoot 原本的定时任务</p><ul><li><p>实现 ApplicationContextAware 接口拿到 SpringBoot 的上下文</p></li><li><p>实现 BeanPostProcessor 接口，将这个类标记为后处理器，后处理器会在每个 bean 实例化之后执行</p></li><li><p>使用@DependsOn 注解强制依赖 SuperScheduledConfig 类，让 SpringBoot 实例化 SuperScheduledPostProcessor 类之前先实例化 SuperScheduledConfig 类</p></li><li><p>主要实现逻辑在 postProcessAfterInitialization()方法中</p></li></ul><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>@DependsOn({&quot;superScheduledConfig&quot;})
@Component
@Order
public class SuperScheduledPostProcessor implements BeanPostProcessor, ApplicationContextAware {
    protected final Log logger = LogFactory.getLog(getClass());

    private ApplicationContext applicationContext;

    /**
     * 实例化bean之前的操作
     * @param bean bean实例
     * @param beanName bean的Name
     */
    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        return bean;
    }

    /**
     * 实例化bean之后的操作
     * @param bean bean实例
     * @param beanName bean的Name
     */
    @Override
    public Object postProcessAfterInitialization(Object bean,
                                                 String beanName) throws BeansException {
        //1.获取配置管理器
        SuperScheduledConfig superScheduledConfig = applicationContext.getBean(SuperScheduledConfig.class);

        //2.获取当前实例化完成的bean的所有方法
        Method[] methods = bean.getClass().getDeclaredMethods();
        //循环处理对每个方法逐一处理
        if (methods.length &gt; 0) {
            for (Method method : methods) {
             //3.尝试在该方法上获取@Scheduled注解（SpringBoot的定时任务注解）
                Scheduled annotation = method.getAnnotation(Scheduled.class);
                //如果无法获取到@Scheduled注解，就跳过这个方法
                if (annotation == null) {
                    continue;
                }
                //4.创建定时任务的源属性
                //创建定时任务的源属性（用来记录定时任务的配置，初始化的时候记录的是注解上原本的属性）
                ScheduledSource scheduledSource = new ScheduledSource(annotation, method, bean);
                //对注解上获取到源属性中的属性进行检测
                if (!scheduledSource.check()) {
                    throw new SuperScheduledException(&quot;在&quot; + beanName + &quot;Bean中&quot; + method.getName() + &quot;方法的注解参数错误&quot;);
                }
                //生成定时任务的名称（id），使用beanName+“.”+方法名
                String name = beanName + &quot;.&quot; + method.getName();
                //将以key-value的形式，将源数据存入配置管理器中，key：定时任务的名称 value：源数据
                superScheduledConfig.addScheduledSource(name, scheduledSource);
                try {
                 //5.将原本SpringBoot的定时任务取消掉
                    clearOriginalScheduled(annotation);
                } catch (Exception e) {
                    throw new SuperScheduledException(&quot;在关闭原始方法&quot; + beanName + method.getName() + &quot;时出现错误&quot;);
                }
            }
        }
        //最后bean保持原有返回
        return bean;
    }

    /**
     * 修改注解原先的属性
     * @param annotation 注解实例对象
     * @throws Exception
     */
    private void clearOriginalScheduled(Scheduled annotation) throws Exception {
        changeAnnotationValue(annotation, &quot;cron&quot;, Scheduled.CRON_DISABLED);
        changeAnnotationValue(annotation, &quot;fixedDelay&quot;, -1L);
        changeAnnotationValue(annotation, &quot;fixedDelayString&quot;, &quot;&quot;);
        changeAnnotationValue(annotation, &quot;fixedRate&quot;, -1L);
        changeAnnotationValue(annotation, &quot;fixedRateString&quot;, &quot;&quot;);
        changeAnnotationValue(annotation, &quot;initialDelay&quot;, -1L);
        changeAnnotationValue(annotation, &quot;initialDelayString&quot;, &quot;&quot;);
    }


    /**
     * 获取SpringBoot的上下文
     * @param applicationContext SpringBoot的上下文
     */
    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3) 使用 ApplicationRunner 初始化自定义的定时任务运行器</p><ul><li>实现 ApplicationContextAware 接口拿到 SpringBoot 的上下文</li><li>使用@DependsOn 注解强制依赖 threadPoolTaskScheduler 类</li><li>实现 ApplicationRunner 接口，在所有 bean 初始化结束之后，运行自定义逻辑</li><li>主要实现逻辑在 run()方法中</li></ul><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1674184414412-0.jpeg" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>@DependsOn(&quot;threadPoolTaskScheduler&quot;)
@Component
public class SuperScheduledApplicationRunner implements ApplicationRunner, ApplicationContextAware {
    protected final Log logger = LogFactory.getLog(getClass());
    private DateTimeFormatter df = DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd HH:mm:ss&quot;);
    private ApplicationContext applicationContext;
 
 /**
     * 定时任务配置管理器
     */
    @Autowired
    private SuperScheduledConfig superScheduledConfig;
    /**
     * 定时任务执行线程
     */
    @Autowired
    private ThreadPoolTaskScheduler threadPoolTaskScheduler;

    @Override
    public void run(ApplicationArguments args) {
     //1.定时任务配置管理器中缓存  定时任务执行线程
        superScheduledConfig.setTaskScheduler(threadPoolTaskScheduler);
        //2.获取所有定时任务源数据
        Map&lt;String, ScheduledSource&gt; nameToScheduledSource = superScheduledConfig.getNameToScheduledSource();
        //逐一处理定时任务
        for (String name : nameToScheduledSource.keySet()) {
            //3.获取定时任务源数据
            ScheduledSource scheduledSource = nameToScheduledSource.get(name);
            //4.获取所有增强类
            String[] baseStrengthenBeanNames = applicationContext.getBeanNamesForType(BaseStrengthen.class);
            //5.创建执行控制器
            SuperScheduledRunnable runnable = new SuperScheduledRunnable();
            //配置执行控制器
            runnable.setMethod(scheduledSource.getMethod());
            runnable.setBean(scheduledSource.getBean());
            //6.逐一处理增强类（增强器实现原理后面具体分析）
            List&lt;Point&gt; points = new ArrayList&lt;&gt;(baseStrengthenBeanNames.length);
            for (String baseStrengthenBeanName : baseStrengthenBeanNames) {
             //7.将增强器代理成point
                Object baseStrengthenBean = applicationContext.getBean(baseStrengthenBeanName);
                //创建代理
                Point proxy = ProxyUtils.getInstance(Point.class, new RunnableBaseInterceptor(baseStrengthenBean, runnable));
                proxy.setSuperScheduledName(name);
                //8.所有的points连成起来
                points.add(proxy);
            }
   //将point形成调用链
            runnable.setChain(new Chain(points));
            //将执行逻辑封装并缓存到定时任务配置管理器中
            superScheduledConfig.addRunnable(name, runnable::invoke);
            try {
             //8.启动定时任务
                ScheduledFuture&lt;?&gt; schedule = ScheduledFutureFactory.create(threadPoolTaskScheduler
                        , scheduledSource, runnable::invoke);
                //将线程回调钩子存到任务配置管理器中
                superScheduledConfig.addScheduledFuture(name, schedule);
                logger.info(df.format(LocalDateTime.now()) + &quot;任务&quot; + name + &quot;已经启动...&quot;);

            } catch (Exception e) {
                throw new SuperScheduledException(&quot;任务&quot; + name + &quot;启动失败，错误信息：&quot; + e.getLocalizedMessage());
            }
        }
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4) 进行动态管理</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>@Component
public class SuperScheduledManager {
    protected final Log logger = LogFactory.getLog(getClass());
    private DateTimeFormatter df = DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd HH:mm:ss&quot;);

    @Autowired
    private SuperScheduledConfig superScheduledConfig;

    /**
     * 修改Scheduled的执行周期
     *
     * @param name scheduled的名称
     * @param cron cron表达式
     */
    public void setScheduledCron(String name, String cron) {
        //终止原先的任务
        cancelScheduled(name);
        //创建新的任务
        ScheduledSource scheduledSource = superScheduledConfig.getScheduledSource(name);
        scheduledSource.clear();
        scheduledSource.setCron(cron);
        addScheduled(name, scheduledSource);
    }

    /**
     * 修改Scheduled的fixedDelay
     *
     * @param name       scheduled的名称
     * @param fixedDelay 上一次执行完毕时间点之后多长时间再执行
     */
    public void setScheduledFixedDelay(String name, Long fixedDelay) {
        //终止原先的任务
        cancelScheduled(name);
        //创建新的任务
        ScheduledSource scheduledSource = superScheduledConfig.getScheduledSource(name);
        scheduledSource.clear();
        scheduledSource.setFixedDelay(fixedDelay);
        addScheduled(name, scheduledSource);
    }

    /**
     * 修改Scheduled的fixedRate
     *
     * @param name      scheduled的名称
     * @param fixedRate 上一次开始执行之后多长时间再执行
     */
    public void setScheduledFixedRate(String name, Long fixedRate) {
        //终止原先的任务
        cancelScheduled(name);
        //创建新的任务
        ScheduledSource scheduledSource = superScheduledConfig.getScheduledSource(name);
        scheduledSource.clear();
        scheduledSource.setFixedRate(fixedRate);
        addScheduled(name, scheduledSource);
    }

    /**
     * 查询所有启动的Scheduled
     */
    public List&lt;String&gt; getRunScheduledName() {
        Set&lt;String&gt; names = superScheduledConfig.getNameToScheduledFuture().keySet();
        return new ArrayList&lt;&gt;(names);
    }

    /**
     * 查询所有的Scheduled
     */
    public List&lt;String&gt; getAllSuperScheduledName() {
        Set&lt;String&gt; names = superScheduledConfig.getNameToRunnable().keySet();
        return new ArrayList&lt;&gt;(names);
    }

    /**
     * 终止Scheduled
     *
     * @param name scheduled的名称
     */
    public void cancelScheduled(String name) {
        ScheduledFuture scheduledFuture = superScheduledConfig.getScheduledFuture(name);
        scheduledFuture.cancel(true);
        superScheduledConfig.removeScheduledFuture(name);
        logger.info(df.format(LocalDateTime.now()) + &quot;任务&quot; + name + &quot;已经终止...&quot;);
    }

    /**
     * 启动Scheduled
     *
     * @param name            scheduled的名称
     * @param scheduledSource 定时任务的源信息
     */
    public void addScheduled(String name, ScheduledSource scheduledSource) {
        if (getRunScheduledName().contains(name)) {
            throw new SuperScheduledException(&quot;定时任务&quot; + name + &quot;已经被启动过了&quot;);
        }
        if (!scheduledSource.check()) {
            throw new SuperScheduledException(&quot;定时任务&quot; + name + &quot;源数据内容错误&quot;);
        }

        scheduledSource.refreshType();

        Runnable runnable = superScheduledConfig.getRunnable(name);
        ThreadPoolTaskScheduler taskScheduler = superScheduledConfig.getTaskScheduler();


        ScheduledFuture&lt;?&gt; schedule = ScheduledFutureFactory.create(taskScheduler, scheduledSource, runnable);
        logger.info(df.format(LocalDateTime.now()) + &quot;任务&quot; + name + &quot;已经启动...&quot;);

        superScheduledConfig.addScheduledSource(name, scheduledSource);
        superScheduledConfig.addScheduledFuture(name, schedule);
    }

    /**
     * 以cron类型启动Scheduled
     *
     * @param name scheduled的名称
     * @param cron cron表达式
     */
    public void addCronScheduled(String name, String cron) {
        ScheduledSource scheduledSource = new ScheduledSource();
        scheduledSource.setCron(cron);

        addScheduled(name, scheduledSource);
    }

    /**
     * 以fixedDelay类型启动Scheduled
     *
     * @param name         scheduled的名称
     * @param fixedDelay   上一次执行完毕时间点之后多长时间再执行
     * @param initialDelay 第一次执行的延迟时间
     */
    public void addFixedDelayScheduled(String name, Long fixedDelay, Long... initialDelay) {
        ScheduledSource scheduledSource = new ScheduledSource();
        scheduledSource.setFixedDelay(fixedDelay);
        if (initialDelay != null &amp;&amp; initialDelay.length == 1) {
            scheduledSource.setInitialDelay(initialDelay[0]);
        } else if (initialDelay != null &amp;&amp; initialDelay.length &gt; 1) {
            throw new SuperScheduledException(&quot;第一次执行的延迟时间只能传入一个参数&quot;);
        }

        addScheduled(name, scheduledSource);
    }

    /**
     * 以fixedRate类型启动Scheduled
     *
     * @param name         scheduled的名称
     * @param fixedRate    上一次开始执行之后多长时间再执行
     * @param initialDelay 第一次执行的延迟时间
     */
    public void addFixedRateScheduled(String name, Long fixedRate, Long... initialDelay) {
        ScheduledSource scheduledSource = new ScheduledSource();
        scheduledSource.setFixedRate(fixedRate);
        if (initialDelay != null &amp;&amp; initialDelay.length == 1) {
            scheduledSource.setInitialDelay(initialDelay[0]);
        } else if (initialDelay != null &amp;&amp; initialDelay.length &gt; 1) {
            throw new SuperScheduledException(&quot;第一次执行的延迟时间只能传入一个参数&quot;);
        }

        addScheduled(name, scheduledSource);
    }

    /**
     * 手动执行一次任务
     *
     * @param name scheduled的名称
     */
    public void runScheduled(String name) {
        Runnable runnable = superScheduledConfig.getRunnable(name);
        runnable.run();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、增强接口实现" tabindex="-1"><a class="header-anchor" href="#_2、增强接口实现"><span><strong>2、增强接口实现</strong></span></a></h4><p>增强器实现的整体思路与 SpringAop 的思路一致，实现没有 Aop 复杂</p><p>(1) 增强接口</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>@Order(Ordered.HIGHEST_PRECEDENCE)
public interface BaseStrengthen {
    /**
     * 前置强化方法
     *
     * @param bean   bean实例（或者是被代理的bean）
     * @param method 执行的方法对象
     * @param args   方法参数
     */
    void before(Object bean, Method method, Object[] args);

    /**
     * 后置强化方法
     * 出现异常不会执行
     * 如果未出现异常，在afterFinally方法之后执行
     *
     * @param bean   bean实例（或者是被代理的bean）
     * @param method 执行的方法对象
     * @param args   方法参数
     */
    void after(Object bean, Method method, Object[] args);

    /**
     * 异常强化方法
     *
     * @param bean   bean实例（或者是被代理的bean）
     * @param method 执行的方法对象
     * @param args   方法参数
     */
    void exception(Object bean, Method method, Object[] args);

    /**
     * Finally强化方法，出现异常也会执行
     *
     * @param bean   bean实例（或者是被代理的bean）
     * @param method 执行的方法对象
     * @param args   方法参数
     */
    void afterFinally(Object bean, Method method, Object[] args);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2) 代理抽象类</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>public abstract class Point {
    /**
     * 定时任务名
     */
    private String superScheduledName;

    /**
     * 抽象的执行方法，使用代理实现
     * @param runnable 定时任务执行器
     */
    public abstract Object invoke(SuperScheduledRunnable runnable);
    
    /* 普通的get/sets省略 */
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3) 调用链类</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>public class Chain {
    private List&lt;Point&gt; list;
    private int index = -1;
    /**
     * 索引自增1
     */
    public int incIndex() {
        return ++index;
    }

    /**
     * 索引还原
     */
    public void resetIndex() {
        this.index = -1;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4) cglib 动态代理实现</p><p>使用 cglib 代理增强器，将增强器全部代理成调用链节点 Point</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>public class RunnableBaseInterceptor implements MethodInterceptor {
    /**
     * 定时任务执行器
     */
    private SuperScheduledRunnable runnable;
    /**
     * 定时任务增强类
     */
    private BaseStrengthen strengthen;

    @Override
    public Object intercept(Object obj, Method method, Object[] args, MethodProxy methodProxy) throws Throwable {
        Object result;
        //如果执行的是invoke()方法
        if (&quot;invoke&quot;.equals(method.getName())) {
         //前置强化方法
            strengthen.before(obj, method, args);
            try {
             //调用执行器中的invoke()方法
                result = runnable.invoke();
            } catch (Exception e) {
             //异常强化方法
                strengthen.exception(obj, method, args);
                throw new SuperScheduledException(strengthen.getClass() + &quot;中强化执行时发生错误&quot;, e);
            } finally {
             //Finally强化方法，出现异常也会执行
                strengthen.afterFinally(obj, method, args);
            }
            //后置强化方法
            strengthen.after(obj, method, args);

        } else {
         //直接执行方法
            result = methodProxy.invokeSuper(obj, args);
        }
        return result;
    }

    public RunnableBaseInterceptor(Object object, SuperScheduledRunnable runnable) {
        this.runnable = runnable;
        if (BaseStrengthen.class.isAssignableFrom(object.getClass())) {
            this.strengthen = (BaseStrengthen) object;
        } else {
            throw new SuperScheduledException(object.getClass() + &quot;对象不是BaseStrengthen类型&quot;);
        }
    }

    public RunnableBaseInterceptor() {

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(5) 定时任务执行器实现</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>public class SuperScheduledRunnable {
    /**
     * 原始的方法
     */
    private Method method;
    /**
     * 方法所在的bean
     */
    private Object bean;
    /**
     * 增强器的调用链
     */
    private Chain chain;


    public Object invoke() {
        Object result;
        //索引自增1
        if (chain.incIndex() == chain.getList().size()) {
            //调用链中的增强方法已经全部执行结束
            try {
                //调用链索引初始化
                chain.resetIndex();
                //增强器全部执行完毕，执行原本的方法
                result = method.invoke(bean);
            } catch (IllegalAccessException | InvocationTargetException e) {
                throw new SuperScheduledException(e.getLocalizedMessage());
            }
        } else {
            //获取被代理后的方法增强器
            Point point = chain.getList().get(chain.getIndex());
            //执行增强器代理
            //增强器代理中，会回调方法执行器，形成调用链，逐一运行调用链中的增强器
            result = point.invoke(this);
        }
        return result;
    }
    
    /* 普通的get/sets省略 */
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(6) 增强器代理逻辑</p><p><code>com.gyx.superscheduled.core.SuperScheduledApplicationRunner</code>类中的代码片段</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>//创建执行控制器
SuperScheduledRunnable runnable = new SuperScheduledRunnable();
runnable.setMethod(scheduledSource.getMethod());
runnable.setBean(scheduledSource.getBean());
//用来存放 增强器的代理对象
List&lt;Point&gt; points = new ArrayList&lt;&gt;(baseStrengthenBeanNames.length);
//循环所有的增强器的beanName
for (String baseStrengthenBeanName : baseStrengthenBeanNames) {
 //获取增强器的bean对象
    Object baseStrengthenBean = applicationContext.getBean(baseStrengthenBeanName);
    //将增强器代理成Point节点
    Point proxy = ProxyUtils.getInstance(Point.class, new RunnableBaseInterceptor(baseStrengthenBean, runnable));
    proxy.setSuperScheduledName(name);
    //增强器的代理对象缓存到list中
    points.add(proxy);
}
//将增强器代理实例的集合生成调用链
//执行控制器中设置调用链
runnable.setChain(new Chain(points));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function h(g,S){const n=a("ExternalLinkIcon");return r(),u("div",null,[c,e("blockquote",null,[e("p",null,[t,e("a",m,[i("https://gitee.com/qiaodaimadewangcai/super-scheduled"),d(n)])]),e("p",null,[o,e("a",b,[i("https://github.com/guoyixing/super-scheduled"),d(n)])])]),p])}const y=s(v,[["render",h],["__file","SpringBoot定时任务动态管理.html.vue"]]),q=JSON.parse('{"path":"/dev/SpringBoot%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1%E5%8A%A8%E6%80%81%E7%AE%A1%E7%90%86.html","title":"SpringBoot定时任务动态管理","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"SpringBoot定时任务动态管理","excerpt":null,"description":"SpringBoot定时任务动态管理","date":"2022-03-26T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"type","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/SpringBoot%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1%E5%8A%A8%E6%80%81%E7%AE%A1%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"SpringBoot定时任务动态管理"}],["meta",{"property":"og:description","content":"SpringBoot定时任务动态管理"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1674184414412-0.jpeg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2022-03-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot定时任务动态管理\\",\\"image\\":[\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1674184414412-0.jpeg\\"],\\"datePublished\\":\\"2022-03-26T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"一、功能说明","slug":"一、功能说明","link":"#一、功能说明","children":[]},{"level":2,"title":"二、快速使用","slug":"二、快速使用","link":"#二、快速使用","children":[]},{"level":2,"title":"三、实现原理","slug":"三、实现原理","link":"#三、实现原理","children":[]}],"git":{"createdTime":1647698494000,"updatedTime":1714224756000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":6},{"name":"xlc","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":9.52,"words":2856},"filePathRelative":"dev/SpringBoot定时任务动态管理.md","localizedDate":"2022年3月26日"}');export{y as comp,q as data};
