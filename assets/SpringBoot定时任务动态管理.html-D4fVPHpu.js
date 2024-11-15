import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,a as i}from"./app-DDjfOKh-.js";const l={};function p(d,n){return a(),e("div",null,n[0]||(n[0]=[i(`<h1 id="springboot-定时任务动态管理" tabindex="-1"><a class="header-anchor" href="#springboot-定时任务动态管理"><span>SpringBoot 定时任务动态管理</span></a></h1><h2 id="一、功能说明" tabindex="-1"><a class="header-anchor" href="#一、功能说明"><span><strong>一、功能说明</strong></span></a></h2><p>SpringBoot 的定时任务的加强工具，实现对 SpringBoot 原生的定时任务进行动态管理,完全兼容原生@Scheduled 注解,无需对原本的定时任务进行修改</p><h2 id="二、快速使用" tabindex="-1"><a class="header-anchor" href="#二、快速使用"><span><strong>二、快速使用</strong></span></a></h2><p>具体的功能已经封装成 SpringBoot-starter 即插即用</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;dependency&gt;</span></span>
<span class="line"><span>    &lt;groupId&gt;com.github.guoyixing&lt;/groupId&gt;</span></span>
<span class="line"><span>    &lt;artifactId&gt;spring-boot-starter-super-scheduled&lt;/artifactId&gt;</span></span>
<span class="line"><span>    &lt;version&gt;0.3.1&lt;/version&gt;</span></span>
<span class="line"><span>&lt;/dependency&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方法和源码：</p><blockquote><p><strong>码云：</strong><a href="https://gitee.com/qiaodaimadewangcai/super-scheduled" target="_blank" rel="noopener noreferrer">https://gitee.com/qiaodaimadewangcai/super-scheduled</a></p><p><strong>github：</strong><a href="https://github.com/guoyixing/super-scheduled" target="_blank" rel="noopener noreferrer">https://github.com/guoyixing/super-scheduled</a></p></blockquote><h2 id="三、实现原理" tabindex="-1"><a class="header-anchor" href="#三、实现原理"><span><strong>三、实现原理</strong></span></a></h2><h4 id="_1、动态管理实现" tabindex="-1"><a class="header-anchor" href="#_1、动态管理实现"><span><strong>1、动态管理实现</strong></span></a></h4><p>(1) 配置管理介绍</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Component(&quot;superScheduledConfig&quot;)</span></span>
<span class="line"><span>public class SuperScheduledConfig {</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 执行定时任务的线程池</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private ThreadPoolTaskScheduler taskScheduler;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 定时任务名称与定时任务回调钩子  的关联关系容器</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private Map&lt;String, ScheduledFuture&gt; nameToScheduledFuture = new ConcurrentHashMap&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 定时任务名称与定时任务需要执行的逻辑  的关联关系容器</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private Map&lt;String, Runnable&gt; nameToRunnable = new ConcurrentHashMap&lt;&gt;();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 定时任务名称与定时任务的源信息  的关联关系容器</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private Map&lt;String, ScheduledSource&gt; nameToScheduledSource = new ConcurrentHashMap&lt;&gt;();</span></span>
<span class="line"><span> /* 普通的get/sets省略 */</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2) 使用后处理器拦截 SpringBoot 原本的定时任务</p><ul><li><p>实现 ApplicationContextAware 接口拿到 SpringBoot 的上下文</p></li><li><p>实现 BeanPostProcessor 接口，将这个类标记为后处理器，后处理器会在每个 bean 实例化之后执行</p></li><li><p>使用@DependsOn 注解强制依赖 SuperScheduledConfig 类，让 SpringBoot 实例化 SuperScheduledPostProcessor 类之前先实例化 SuperScheduledConfig 类</p></li><li><p>主要实现逻辑在 postProcessAfterInitialization()方法中</p></li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@DependsOn({&quot;superScheduledConfig&quot;})</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>@Order</span></span>
<span class="line"><span>public class SuperScheduledPostProcessor implements BeanPostProcessor, ApplicationContextAware {</span></span>
<span class="line"><span>    protected final Log logger = LogFactory.getLog(getClass());</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    private ApplicationContext applicationContext;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 实例化bean之前的操作</span></span>
<span class="line"><span>     * @param bean bean实例</span></span>
<span class="line"><span>     * @param beanName bean的Name</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {</span></span>
<span class="line"><span>        return bean;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 实例化bean之后的操作</span></span>
<span class="line"><span>     * @param bean bean实例</span></span>
<span class="line"><span>     * @param beanName bean的Name</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public Object postProcessAfterInitialization(Object bean,</span></span>
<span class="line"><span>                                                 String beanName) throws BeansException {</span></span>
<span class="line"><span>        //1.获取配置管理器</span></span>
<span class="line"><span>        SuperScheduledConfig superScheduledConfig = applicationContext.getBean(SuperScheduledConfig.class);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        //2.获取当前实例化完成的bean的所有方法</span></span>
<span class="line"><span>        Method[] methods = bean.getClass().getDeclaredMethods();</span></span>
<span class="line"><span>        //循环处理对每个方法逐一处理</span></span>
<span class="line"><span>        if (methods.length &gt; 0) {</span></span>
<span class="line"><span>            for (Method method : methods) {</span></span>
<span class="line"><span>             //3.尝试在该方法上获取@Scheduled注解（SpringBoot的定时任务注解）</span></span>
<span class="line"><span>                Scheduled annotation = method.getAnnotation(Scheduled.class);</span></span>
<span class="line"><span>                //如果无法获取到@Scheduled注解，就跳过这个方法</span></span>
<span class="line"><span>                if (annotation == null) {</span></span>
<span class="line"><span>                    continue;</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                //4.创建定时任务的源属性</span></span>
<span class="line"><span>                //创建定时任务的源属性（用来记录定时任务的配置，初始化的时候记录的是注解上原本的属性）</span></span>
<span class="line"><span>                ScheduledSource scheduledSource = new ScheduledSource(annotation, method, bean);</span></span>
<span class="line"><span>                //对注解上获取到源属性中的属性进行检测</span></span>
<span class="line"><span>                if (!scheduledSource.check()) {</span></span>
<span class="line"><span>                    throw new SuperScheduledException(&quot;在&quot; + beanName + &quot;Bean中&quot; + method.getName() + &quot;方法的注解参数错误&quot;);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>                //生成定时任务的名称（id），使用beanName+“.”+方法名</span></span>
<span class="line"><span>                String name = beanName + &quot;.&quot; + method.getName();</span></span>
<span class="line"><span>                //将以key-value的形式，将源数据存入配置管理器中，key：定时任务的名称 value：源数据</span></span>
<span class="line"><span>                superScheduledConfig.addScheduledSource(name, scheduledSource);</span></span>
<span class="line"><span>                try {</span></span>
<span class="line"><span>                 //5.将原本SpringBoot的定时任务取消掉</span></span>
<span class="line"><span>                    clearOriginalScheduled(annotation);</span></span>
<span class="line"><span>                } catch (Exception e) {</span></span>
<span class="line"><span>                    throw new SuperScheduledException(&quot;在关闭原始方法&quot; + beanName + method.getName() + &quot;时出现错误&quot;);</span></span>
<span class="line"><span>                }</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        //最后bean保持原有返回</span></span>
<span class="line"><span>        return bean;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 修改注解原先的属性</span></span>
<span class="line"><span>     * @param annotation 注解实例对象</span></span>
<span class="line"><span>     * @throws Exception</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private void clearOriginalScheduled(Scheduled annotation) throws Exception {</span></span>
<span class="line"><span>        changeAnnotationValue(annotation, &quot;cron&quot;, Scheduled.CRON_DISABLED);</span></span>
<span class="line"><span>        changeAnnotationValue(annotation, &quot;fixedDelay&quot;, -1L);</span></span>
<span class="line"><span>        changeAnnotationValue(annotation, &quot;fixedDelayString&quot;, &quot;&quot;);</span></span>
<span class="line"><span>        changeAnnotationValue(annotation, &quot;fixedRate&quot;, -1L);</span></span>
<span class="line"><span>        changeAnnotationValue(annotation, &quot;fixedRateString&quot;, &quot;&quot;);</span></span>
<span class="line"><span>        changeAnnotationValue(annotation, &quot;initialDelay&quot;, -1L);</span></span>
<span class="line"><span>        changeAnnotationValue(annotation, &quot;initialDelayString&quot;, &quot;&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 获取SpringBoot的上下文</span></span>
<span class="line"><span>     * @param applicationContext SpringBoot的上下文</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {</span></span>
<span class="line"><span>        this.applicationContext = applicationContext;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3) 使用 ApplicationRunner 初始化自定义的定时任务运行器</p><ul><li>实现 ApplicationContextAware 接口拿到 SpringBoot 的上下文</li><li>使用@DependsOn 注解强制依赖 threadPoolTaskScheduler 类</li><li>实现 ApplicationRunner 接口，在所有 bean 初始化结束之后，运行自定义逻辑</li><li>主要实现逻辑在 run()方法中</li></ul><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1674184414412-0.jpeg" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@DependsOn(&quot;threadPoolTaskScheduler&quot;)</span></span>
<span class="line"><span>@Component</span></span>
<span class="line"><span>public class SuperScheduledApplicationRunner implements ApplicationRunner, ApplicationContextAware {</span></span>
<span class="line"><span>    protected final Log logger = LogFactory.getLog(getClass());</span></span>
<span class="line"><span>    private DateTimeFormatter df = DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd HH:mm:ss&quot;);</span></span>
<span class="line"><span>    private ApplicationContext applicationContext;</span></span>
<span class="line"><span> </span></span>
<span class="line"><span> /**</span></span>
<span class="line"><span>     * 定时任务配置管理器</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private SuperScheduledConfig superScheduledConfig;</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 定时任务执行线程</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private ThreadPoolTaskScheduler threadPoolTaskScheduler;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void run(ApplicationArguments args) {</span></span>
<span class="line"><span>     //1.定时任务配置管理器中缓存  定时任务执行线程</span></span>
<span class="line"><span>        superScheduledConfig.setTaskScheduler(threadPoolTaskScheduler);</span></span>
<span class="line"><span>        //2.获取所有定时任务源数据</span></span>
<span class="line"><span>        Map&lt;String, ScheduledSource&gt; nameToScheduledSource = superScheduledConfig.getNameToScheduledSource();</span></span>
<span class="line"><span>        //逐一处理定时任务</span></span>
<span class="line"><span>        for (String name : nameToScheduledSource.keySet()) {</span></span>
<span class="line"><span>            //3.获取定时任务源数据</span></span>
<span class="line"><span>            ScheduledSource scheduledSource = nameToScheduledSource.get(name);</span></span>
<span class="line"><span>            //4.获取所有增强类</span></span>
<span class="line"><span>            String[] baseStrengthenBeanNames = applicationContext.getBeanNamesForType(BaseStrengthen.class);</span></span>
<span class="line"><span>            //5.创建执行控制器</span></span>
<span class="line"><span>            SuperScheduledRunnable runnable = new SuperScheduledRunnable();</span></span>
<span class="line"><span>            //配置执行控制器</span></span>
<span class="line"><span>            runnable.setMethod(scheduledSource.getMethod());</span></span>
<span class="line"><span>            runnable.setBean(scheduledSource.getBean());</span></span>
<span class="line"><span>            //6.逐一处理增强类（增强器实现原理后面具体分析）</span></span>
<span class="line"><span>            List&lt;Point&gt; points = new ArrayList&lt;&gt;(baseStrengthenBeanNames.length);</span></span>
<span class="line"><span>            for (String baseStrengthenBeanName : baseStrengthenBeanNames) {</span></span>
<span class="line"><span>             //7.将增强器代理成point</span></span>
<span class="line"><span>                Object baseStrengthenBean = applicationContext.getBean(baseStrengthenBeanName);</span></span>
<span class="line"><span>                //创建代理</span></span>
<span class="line"><span>                Point proxy = ProxyUtils.getInstance(Point.class, new RunnableBaseInterceptor(baseStrengthenBean, runnable));</span></span>
<span class="line"><span>                proxy.setSuperScheduledName(name);</span></span>
<span class="line"><span>                //8.所有的points连成起来</span></span>
<span class="line"><span>                points.add(proxy);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>   //将point形成调用链</span></span>
<span class="line"><span>            runnable.setChain(new Chain(points));</span></span>
<span class="line"><span>            //将执行逻辑封装并缓存到定时任务配置管理器中</span></span>
<span class="line"><span>            superScheduledConfig.addRunnable(name, runnable::invoke);</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>             //8.启动定时任务</span></span>
<span class="line"><span>                ScheduledFuture&lt;?&gt; schedule = ScheduledFutureFactory.create(threadPoolTaskScheduler</span></span>
<span class="line"><span>                        , scheduledSource, runnable::invoke);</span></span>
<span class="line"><span>                //将线程回调钩子存到任务配置管理器中</span></span>
<span class="line"><span>                superScheduledConfig.addScheduledFuture(name, schedule);</span></span>
<span class="line"><span>                logger.info(df.format(LocalDateTime.now()) + &quot;任务&quot; + name + &quot;已经启动...&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>            } catch (Exception e) {</span></span>
<span class="line"><span>                throw new SuperScheduledException(&quot;任务&quot; + name + &quot;启动失败，错误信息：&quot; + e.getLocalizedMessage());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {</span></span>
<span class="line"><span>        this.applicationContext = applicationContext;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4) 进行动态管理</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>public class SuperScheduledManager {</span></span>
<span class="line"><span>    protected final Log logger = LogFactory.getLog(getClass());</span></span>
<span class="line"><span>    private DateTimeFormatter df = DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd HH:mm:ss&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Autowired</span></span>
<span class="line"><span>    private SuperScheduledConfig superScheduledConfig;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 修改Scheduled的执行周期</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param name scheduled的名称</span></span>
<span class="line"><span>     * @param cron cron表达式</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public void setScheduledCron(String name, String cron) {</span></span>
<span class="line"><span>        //终止原先的任务</span></span>
<span class="line"><span>        cancelScheduled(name);</span></span>
<span class="line"><span>        //创建新的任务</span></span>
<span class="line"><span>        ScheduledSource scheduledSource = superScheduledConfig.getScheduledSource(name);</span></span>
<span class="line"><span>        scheduledSource.clear();</span></span>
<span class="line"><span>        scheduledSource.setCron(cron);</span></span>
<span class="line"><span>        addScheduled(name, scheduledSource);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 修改Scheduled的fixedDelay</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param name       scheduled的名称</span></span>
<span class="line"><span>     * @param fixedDelay 上一次执行完毕时间点之后多长时间再执行</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public void setScheduledFixedDelay(String name, Long fixedDelay) {</span></span>
<span class="line"><span>        //终止原先的任务</span></span>
<span class="line"><span>        cancelScheduled(name);</span></span>
<span class="line"><span>        //创建新的任务</span></span>
<span class="line"><span>        ScheduledSource scheduledSource = superScheduledConfig.getScheduledSource(name);</span></span>
<span class="line"><span>        scheduledSource.clear();</span></span>
<span class="line"><span>        scheduledSource.setFixedDelay(fixedDelay);</span></span>
<span class="line"><span>        addScheduled(name, scheduledSource);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 修改Scheduled的fixedRate</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param name      scheduled的名称</span></span>
<span class="line"><span>     * @param fixedRate 上一次开始执行之后多长时间再执行</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public void setScheduledFixedRate(String name, Long fixedRate) {</span></span>
<span class="line"><span>        //终止原先的任务</span></span>
<span class="line"><span>        cancelScheduled(name);</span></span>
<span class="line"><span>        //创建新的任务</span></span>
<span class="line"><span>        ScheduledSource scheduledSource = superScheduledConfig.getScheduledSource(name);</span></span>
<span class="line"><span>        scheduledSource.clear();</span></span>
<span class="line"><span>        scheduledSource.setFixedRate(fixedRate);</span></span>
<span class="line"><span>        addScheduled(name, scheduledSource);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 查询所有启动的Scheduled</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public List&lt;String&gt; getRunScheduledName() {</span></span>
<span class="line"><span>        Set&lt;String&gt; names = superScheduledConfig.getNameToScheduledFuture().keySet();</span></span>
<span class="line"><span>        return new ArrayList&lt;&gt;(names);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 查询所有的Scheduled</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public List&lt;String&gt; getAllSuperScheduledName() {</span></span>
<span class="line"><span>        Set&lt;String&gt; names = superScheduledConfig.getNameToRunnable().keySet();</span></span>
<span class="line"><span>        return new ArrayList&lt;&gt;(names);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 终止Scheduled</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param name scheduled的名称</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public void cancelScheduled(String name) {</span></span>
<span class="line"><span>        ScheduledFuture scheduledFuture = superScheduledConfig.getScheduledFuture(name);</span></span>
<span class="line"><span>        scheduledFuture.cancel(true);</span></span>
<span class="line"><span>        superScheduledConfig.removeScheduledFuture(name);</span></span>
<span class="line"><span>        logger.info(df.format(LocalDateTime.now()) + &quot;任务&quot; + name + &quot;已经终止...&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 启动Scheduled</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param name            scheduled的名称</span></span>
<span class="line"><span>     * @param scheduledSource 定时任务的源信息</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public void addScheduled(String name, ScheduledSource scheduledSource) {</span></span>
<span class="line"><span>        if (getRunScheduledName().contains(name)) {</span></span>
<span class="line"><span>            throw new SuperScheduledException(&quot;定时任务&quot; + name + &quot;已经被启动过了&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        if (!scheduledSource.check()) {</span></span>
<span class="line"><span>            throw new SuperScheduledException(&quot;定时任务&quot; + name + &quot;源数据内容错误&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        scheduledSource.refreshType();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        Runnable runnable = superScheduledConfig.getRunnable(name);</span></span>
<span class="line"><span>        ThreadPoolTaskScheduler taskScheduler = superScheduledConfig.getTaskScheduler();</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>        ScheduledFuture&lt;?&gt; schedule = ScheduledFutureFactory.create(taskScheduler, scheduledSource, runnable);</span></span>
<span class="line"><span>        logger.info(df.format(LocalDateTime.now()) + &quot;任务&quot; + name + &quot;已经启动...&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        superScheduledConfig.addScheduledSource(name, scheduledSource);</span></span>
<span class="line"><span>        superScheduledConfig.addScheduledFuture(name, schedule);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 以cron类型启动Scheduled</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param name scheduled的名称</span></span>
<span class="line"><span>     * @param cron cron表达式</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public void addCronScheduled(String name, String cron) {</span></span>
<span class="line"><span>        ScheduledSource scheduledSource = new ScheduledSource();</span></span>
<span class="line"><span>        scheduledSource.setCron(cron);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        addScheduled(name, scheduledSource);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 以fixedDelay类型启动Scheduled</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param name         scheduled的名称</span></span>
<span class="line"><span>     * @param fixedDelay   上一次执行完毕时间点之后多长时间再执行</span></span>
<span class="line"><span>     * @param initialDelay 第一次执行的延迟时间</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public void addFixedDelayScheduled(String name, Long fixedDelay, Long... initialDelay) {</span></span>
<span class="line"><span>        ScheduledSource scheduledSource = new ScheduledSource();</span></span>
<span class="line"><span>        scheduledSource.setFixedDelay(fixedDelay);</span></span>
<span class="line"><span>        if (initialDelay != null &amp;&amp; initialDelay.length == 1) {</span></span>
<span class="line"><span>            scheduledSource.setInitialDelay(initialDelay[0]);</span></span>
<span class="line"><span>        } else if (initialDelay != null &amp;&amp; initialDelay.length &gt; 1) {</span></span>
<span class="line"><span>            throw new SuperScheduledException(&quot;第一次执行的延迟时间只能传入一个参数&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        addScheduled(name, scheduledSource);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 以fixedRate类型启动Scheduled</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param name         scheduled的名称</span></span>
<span class="line"><span>     * @param fixedRate    上一次开始执行之后多长时间再执行</span></span>
<span class="line"><span>     * @param initialDelay 第一次执行的延迟时间</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public void addFixedRateScheduled(String name, Long fixedRate, Long... initialDelay) {</span></span>
<span class="line"><span>        ScheduledSource scheduledSource = new ScheduledSource();</span></span>
<span class="line"><span>        scheduledSource.setFixedRate(fixedRate);</span></span>
<span class="line"><span>        if (initialDelay != null &amp;&amp; initialDelay.length == 1) {</span></span>
<span class="line"><span>            scheduledSource.setInitialDelay(initialDelay[0]);</span></span>
<span class="line"><span>        } else if (initialDelay != null &amp;&amp; initialDelay.length &gt; 1) {</span></span>
<span class="line"><span>            throw new SuperScheduledException(&quot;第一次执行的延迟时间只能传入一个参数&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        addScheduled(name, scheduledSource);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 手动执行一次任务</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param name scheduled的名称</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public void runScheduled(String name) {</span></span>
<span class="line"><span>        Runnable runnable = superScheduledConfig.getRunnable(name);</span></span>
<span class="line"><span>        runnable.run();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、增强接口实现" tabindex="-1"><a class="header-anchor" href="#_2、增强接口实现"><span><strong>2、增强接口实现</strong></span></a></h4><p>增强器实现的整体思路与 SpringAop 的思路一致，实现没有 Aop 复杂</p><p>(1) 增强接口</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Order(Ordered.HIGHEST_PRECEDENCE)</span></span>
<span class="line"><span>public interface BaseStrengthen {</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 前置强化方法</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param bean   bean实例（或者是被代理的bean）</span></span>
<span class="line"><span>     * @param method 执行的方法对象</span></span>
<span class="line"><span>     * @param args   方法参数</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    void before(Object bean, Method method, Object[] args);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 后置强化方法</span></span>
<span class="line"><span>     * 出现异常不会执行</span></span>
<span class="line"><span>     * 如果未出现异常，在afterFinally方法之后执行</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param bean   bean实例（或者是被代理的bean）</span></span>
<span class="line"><span>     * @param method 执行的方法对象</span></span>
<span class="line"><span>     * @param args   方法参数</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    void after(Object bean, Method method, Object[] args);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 异常强化方法</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param bean   bean实例（或者是被代理的bean）</span></span>
<span class="line"><span>     * @param method 执行的方法对象</span></span>
<span class="line"><span>     * @param args   方法参数</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    void exception(Object bean, Method method, Object[] args);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * Finally强化方法，出现异常也会执行</span></span>
<span class="line"><span>     *</span></span>
<span class="line"><span>     * @param bean   bean实例（或者是被代理的bean）</span></span>
<span class="line"><span>     * @param method 执行的方法对象</span></span>
<span class="line"><span>     * @param args   方法参数</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    void afterFinally(Object bean, Method method, Object[] args);</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2) 代理抽象类</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public abstract class Point {</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 定时任务名</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private String superScheduledName;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 抽象的执行方法，使用代理实现</span></span>
<span class="line"><span>     * @param runnable 定时任务执行器</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public abstract Object invoke(SuperScheduledRunnable runnable);</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    /* 普通的get/sets省略 */</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3) 调用链类</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public class Chain {</span></span>
<span class="line"><span>    private List&lt;Point&gt; list;</span></span>
<span class="line"><span>    private int index = -1;</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 索引自增1</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public int incIndex() {</span></span>
<span class="line"><span>        return ++index;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 索引还原</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    public void resetIndex() {</span></span>
<span class="line"><span>        this.index = -1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4) cglib 动态代理实现</p><p>使用 cglib 代理增强器，将增强器全部代理成调用链节点 Point</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public class RunnableBaseInterceptor implements MethodInterceptor {</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 定时任务执行器</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private SuperScheduledRunnable runnable;</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 定时任务增强类</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private BaseStrengthen strengthen;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public Object intercept(Object obj, Method method, Object[] args, MethodProxy methodProxy) throws Throwable {</span></span>
<span class="line"><span>        Object result;</span></span>
<span class="line"><span>        //如果执行的是invoke()方法</span></span>
<span class="line"><span>        if (&quot;invoke&quot;.equals(method.getName())) {</span></span>
<span class="line"><span>         //前置强化方法</span></span>
<span class="line"><span>            strengthen.before(obj, method, args);</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>             //调用执行器中的invoke()方法</span></span>
<span class="line"><span>                result = runnable.invoke();</span></span>
<span class="line"><span>            } catch (Exception e) {</span></span>
<span class="line"><span>             //异常强化方法</span></span>
<span class="line"><span>                strengthen.exception(obj, method, args);</span></span>
<span class="line"><span>                throw new SuperScheduledException(strengthen.getClass() + &quot;中强化执行时发生错误&quot;, e);</span></span>
<span class="line"><span>            } finally {</span></span>
<span class="line"><span>             //Finally强化方法，出现异常也会执行</span></span>
<span class="line"><span>                strengthen.afterFinally(obj, method, args);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            //后置强化方法</span></span>
<span class="line"><span>            strengthen.after(obj, method, args);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>         //直接执行方法</span></span>
<span class="line"><span>            result = methodProxy.invokeSuper(obj, args);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return result;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public RunnableBaseInterceptor(Object object, SuperScheduledRunnable runnable) {</span></span>
<span class="line"><span>        this.runnable = runnable;</span></span>
<span class="line"><span>        if (BaseStrengthen.class.isAssignableFrom(object.getClass())) {</span></span>
<span class="line"><span>            this.strengthen = (BaseStrengthen) object;</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            throw new SuperScheduledException(object.getClass() + &quot;对象不是BaseStrengthen类型&quot;);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public RunnableBaseInterceptor() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(5) 定时任务执行器实现</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public class SuperScheduledRunnable {</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 原始的方法</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private Method method;</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 方法所在的bean</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private Object bean;</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     * 增强器的调用链</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    private Chain chain;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Object invoke() {</span></span>
<span class="line"><span>        Object result;</span></span>
<span class="line"><span>        //索引自增1</span></span>
<span class="line"><span>        if (chain.incIndex() == chain.getList().size()) {</span></span>
<span class="line"><span>            //调用链中的增强方法已经全部执行结束</span></span>
<span class="line"><span>            try {</span></span>
<span class="line"><span>                //调用链索引初始化</span></span>
<span class="line"><span>                chain.resetIndex();</span></span>
<span class="line"><span>                //增强器全部执行完毕，执行原本的方法</span></span>
<span class="line"><span>                result = method.invoke(bean);</span></span>
<span class="line"><span>            } catch (IllegalAccessException | InvocationTargetException e) {</span></span>
<span class="line"><span>                throw new SuperScheduledException(e.getLocalizedMessage());</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        } else {</span></span>
<span class="line"><span>            //获取被代理后的方法增强器</span></span>
<span class="line"><span>            Point point = chain.getList().get(chain.getIndex());</span></span>
<span class="line"><span>            //执行增强器代理</span></span>
<span class="line"><span>            //增强器代理中，会回调方法执行器，形成调用链，逐一运行调用链中的增强器</span></span>
<span class="line"><span>            result = point.invoke(this);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        return result;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    /* 普通的get/sets省略 */</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(6) 增强器代理逻辑</p><p><code>com.gyx.superscheduled.core.SuperScheduledApplicationRunner</code>类中的代码片段</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>//创建执行控制器</span></span>
<span class="line"><span>SuperScheduledRunnable runnable = new SuperScheduledRunnable();</span></span>
<span class="line"><span>runnable.setMethod(scheduledSource.getMethod());</span></span>
<span class="line"><span>runnable.setBean(scheduledSource.getBean());</span></span>
<span class="line"><span>//用来存放 增强器的代理对象</span></span>
<span class="line"><span>List&lt;Point&gt; points = new ArrayList&lt;&gt;(baseStrengthenBeanNames.length);</span></span>
<span class="line"><span>//循环所有的增强器的beanName</span></span>
<span class="line"><span>for (String baseStrengthenBeanName : baseStrengthenBeanNames) {</span></span>
<span class="line"><span> //获取增强器的bean对象</span></span>
<span class="line"><span>    Object baseStrengthenBean = applicationContext.getBean(baseStrengthenBeanName);</span></span>
<span class="line"><span>    //将增强器代理成Point节点</span></span>
<span class="line"><span>    Point proxy = ProxyUtils.getInstance(Point.class, new RunnableBaseInterceptor(baseStrengthenBean, runnable));</span></span>
<span class="line"><span>    proxy.setSuperScheduledName(name);</span></span>
<span class="line"><span>    //增强器的代理对象缓存到list中</span></span>
<span class="line"><span>    points.add(proxy);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>//将增强器代理实例的集合生成调用链</span></span>
<span class="line"><span>//执行控制器中设置调用链</span></span>
<span class="line"><span>runnable.setChain(new Chain(points));</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37)]))}const u=s(l,[["render",p],["__file","SpringBoot定时任务动态管理.html.vue"]]),v=JSON.parse('{"path":"/dev/SpringBoot%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1%E5%8A%A8%E6%80%81%E7%AE%A1%E7%90%86.html","title":"SpringBoot定时任务动态管理","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"SpringBoot定时任务动态管理","excerpt":null,"description":"SpringBoot定时任务动态管理","date":"2022-03-26T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"type","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/SpringBoot%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1%E5%8A%A8%E6%80%81%E7%AE%A1%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"SpringBoot定时任务动态管理"}],["meta",{"property":"og:description","content":"SpringBoot定时任务动态管理"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1674184414412-0.jpeg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2022-03-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot定时任务动态管理\\",\\"image\\":[\\"https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1674184414412-0.jpeg\\"],\\"datePublished\\":\\"2022-03-26T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"一、功能说明","slug":"一、功能说明","link":"#一、功能说明","children":[]},{"level":2,"title":"二、快速使用","slug":"二、快速使用","link":"#二、快速使用","children":[]},{"level":2,"title":"三、实现原理","slug":"三、实现原理","link":"#三、实现原理","children":[]}],"git":{"createdTime":1647698494000,"updatedTime":1714224756000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":6},{"name":"xlc","email":"2215400217@qq.com","commits":2}]},"readingTime":{"minutes":9.52,"words":2856},"filePathRelative":"dev/SpringBoot定时任务动态管理.md","localizedDate":"2022年3月26日","excerpt":"\\n<h2><strong>一、功能说明</strong></h2>\\n<p>SpringBoot 的定时任务的加强工具，实现对 SpringBoot 原生的定时任务进行动态管理,完全兼容原生@Scheduled 注解,无需对原本的定时任务进行修改</p>"}');export{u as comp,v as data};
