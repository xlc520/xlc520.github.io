import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as r,a as e,e as d,d as l,b as n,r as v}from"./app.76578005.js";const u={},c=l(`<h1 id="springboot\u5B9A\u65F6\u4EFB\u52A1\u52A8\u6001\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#springboot\u5B9A\u65F6\u4EFB\u52A1\u52A8\u6001\u7BA1\u7406" aria-hidden="true">#</a> SpringBoot\u5B9A\u65F6\u4EFB\u52A1\u52A8\u6001\u7BA1\u7406</h1><h2 id="\u4E00\u3001\u529F\u80FD\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u529F\u80FD\u8BF4\u660E" aria-hidden="true">#</a> <strong>\u4E00\u3001\u529F\u80FD\u8BF4\u660E</strong></h2><p>SpringBoot\u7684\u5B9A\u65F6\u4EFB\u52A1\u7684\u52A0\u5F3A\u5DE5\u5177\uFF0C\u5B9E\u73B0\u5BF9SpringBoot\u539F\u751F\u7684\u5B9A\u65F6\u4EFB\u52A1\u8FDB\u884C\u52A8\u6001\u7BA1\u7406,\u5B8C\u5168\u517C\u5BB9\u539F\u751F@Scheduled\u6CE8\u89E3,\u65E0\u9700\u5BF9\u539F\u672C\u7684\u5B9A\u65F6\u4EFB\u52A1\u8FDB\u884C\u4FEE\u6539</p><h2 id="\u4E8C\u3001\u5FEB\u901F\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5FEB\u901F\u4F7F\u7528" aria-hidden="true">#</a> <strong>\u4E8C\u3001\u5FEB\u901F\u4F7F\u7528</strong></h2><p>\u5177\u4F53\u7684\u529F\u80FD\u5DF2\u7ECF\u5C01\u88C5\u6210SpringBoot-starter\u5373\u63D2\u5373\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.github.guoyixing&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-super-scheduled&lt;/artifactId&gt;
    &lt;version&gt;0.3.1&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u65B9\u6CD5\u548C\u6E90\u7801\uFF1A</p>`,7),t=n("**\u7801\u4E91\uFF1A**"),m={href:"https://gitee.com/qiaodaimadewangcai/super-scheduled",target:"_blank",rel:"noopener noreferrer"},b=n("https://gitee.com/qiaodaimadewangcai/super-scheduled"),o=n("**github\uFF1A**"),h={href:"https://github.com/guoyixing/super-scheduled",target:"_blank",rel:"noopener noreferrer"},p=n("https://github.com/guoyixing/super-scheduled"),g=l(`<h2 id="\u4E09\u3001\u5B9E\u73B0\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001\u5B9E\u73B0\u539F\u7406" aria-hidden="true">#</a> <strong>\u4E09\u3001\u5B9E\u73B0\u539F\u7406</strong></h2><h4 id="_1\u3001\u52A8\u6001\u7BA1\u7406\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u52A8\u6001\u7BA1\u7406\u5B9E\u73B0" aria-hidden="true">#</a> <strong>1\u3001\u52A8\u6001\u7BA1\u7406\u5B9E\u73B0</strong></h4><p>(1) \u914D\u7F6E\u7BA1\u7406\u4ECB\u7ECD</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Component(&quot;superScheduledConfig&quot;)
public class SuperScheduledConfig {
    /**
     * \u6267\u884C\u5B9A\u65F6\u4EFB\u52A1\u7684\u7EBF\u7A0B\u6C60
     */
    private ThreadPoolTaskScheduler taskScheduler;

    /**
     * \u5B9A\u65F6\u4EFB\u52A1\u540D\u79F0\u4E0E\u5B9A\u65F6\u4EFB\u52A1\u56DE\u8C03\u94A9\u5B50  \u7684\u5173\u8054\u5173\u7CFB\u5BB9\u5668
     */
    private Map&lt;String, ScheduledFuture&gt; nameToScheduledFuture = new ConcurrentHashMap&lt;&gt;();

    /**
     * \u5B9A\u65F6\u4EFB\u52A1\u540D\u79F0\u4E0E\u5B9A\u65F6\u4EFB\u52A1\u9700\u8981\u6267\u884C\u7684\u903B\u8F91  \u7684\u5173\u8054\u5173\u7CFB\u5BB9\u5668
     */
    private Map&lt;String, Runnable&gt; nameToRunnable = new ConcurrentHashMap&lt;&gt;();

    /**
     * \u5B9A\u65F6\u4EFB\u52A1\u540D\u79F0\u4E0E\u5B9A\u65F6\u4EFB\u52A1\u7684\u6E90\u4FE1\u606F  \u7684\u5173\u8054\u5173\u7CFB\u5BB9\u5668
     */
    private Map&lt;String, ScheduledSource&gt; nameToScheduledSource = new ConcurrentHashMap&lt;&gt;();
 /* \u666E\u901A\u7684get/sets\u7701\u7565 */
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2) \u4F7F\u7528\u540E\u5904\u7406\u5668\u62E6\u622ASpringBoot\u539F\u672C\u7684\u5B9A\u65F6\u4EFB\u52A1</p><ul><li><p>\u5B9E\u73B0ApplicationContextAware\u63A5\u53E3\u62FF\u5230SpringBoot\u7684\u4E0A\u4E0B\u6587</p></li><li><p>\u5B9E\u73B0BeanPostProcessor\u63A5\u53E3\uFF0C\u5C06\u8FD9\u4E2A\u7C7B\u6807\u8BB0\u4E3A\u540E\u5904\u7406\u5668\uFF0C\u540E\u5904\u7406\u5668\u4F1A\u5728\u6BCF\u4E2Abean\u5B9E\u4F8B\u5316\u4E4B\u540E\u6267\u884C</p></li><li><p>\u4F7F\u7528@DependsOn\u6CE8\u89E3\u5F3A\u5236\u4F9D\u8D56SuperScheduledConfig\u7C7B\uFF0C\u8BA9SpringBoot\u5B9E\u4F8B\u5316SuperScheduledPostProcessor\u7C7B\u4E4B\u524D\u5148\u5B9E\u4F8B\u5316SuperScheduledConfig\u7C7B</p></li><li><p>\u4E3B\u8981\u5B9E\u73B0\u903B\u8F91\u5728postProcessAfterInitialization()\u65B9\u6CD5\u4E2D</p></li></ul><p><img src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==" alt="\u56FE\u7247"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@DependsOn({&quot;superScheduledConfig&quot;})
@Component
@Order
public class SuperScheduledPostProcessor implements BeanPostProcessor, ApplicationContextAware {
    protected final Log logger = LogFactory.getLog(getClass());

    private ApplicationContext applicationContext;

    /**
     * \u5B9E\u4F8B\u5316bean\u4E4B\u524D\u7684\u64CD\u4F5C
     * @param bean bean\u5B9E\u4F8B
     * @param beanName bean\u7684Name
     */
    @Override
    public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException {
        return bean;
    }

    /**
     * \u5B9E\u4F8B\u5316bean\u4E4B\u540E\u7684\u64CD\u4F5C
     * @param bean bean\u5B9E\u4F8B
     * @param beanName bean\u7684Name
     */
    @Override
    public Object postProcessAfterInitialization(Object bean,
                                                 String beanName) throws BeansException {
        //1.\u83B7\u53D6\u914D\u7F6E\u7BA1\u7406\u5668
        SuperScheduledConfig superScheduledConfig = applicationContext.getBean(SuperScheduledConfig.class);

        //2.\u83B7\u53D6\u5F53\u524D\u5B9E\u4F8B\u5316\u5B8C\u6210\u7684bean\u7684\u6240\u6709\u65B9\u6CD5
        Method[] methods = bean.getClass().getDeclaredMethods();
        //\u5FAA\u73AF\u5904\u7406\u5BF9\u6BCF\u4E2A\u65B9\u6CD5\u9010\u4E00\u5904\u7406
        if (methods.length &gt; 0) {
            for (Method method : methods) {
             //3.\u5C1D\u8BD5\u5728\u8BE5\u65B9\u6CD5\u4E0A\u83B7\u53D6@Scheduled\u6CE8\u89E3\uFF08SpringBoot\u7684\u5B9A\u65F6\u4EFB\u52A1\u6CE8\u89E3\uFF09
                Scheduled annotation = method.getAnnotation(Scheduled.class);
                //\u5982\u679C\u65E0\u6CD5\u83B7\u53D6\u5230@Scheduled\u6CE8\u89E3\uFF0C\u5C31\u8DF3\u8FC7\u8FD9\u4E2A\u65B9\u6CD5
                if (annotation == null) {
                    continue;
                }
                //4.\u521B\u5EFA\u5B9A\u65F6\u4EFB\u52A1\u7684\u6E90\u5C5E\u6027
                //\u521B\u5EFA\u5B9A\u65F6\u4EFB\u52A1\u7684\u6E90\u5C5E\u6027\uFF08\u7528\u6765\u8BB0\u5F55\u5B9A\u65F6\u4EFB\u52A1\u7684\u914D\u7F6E\uFF0C\u521D\u59CB\u5316\u7684\u65F6\u5019\u8BB0\u5F55\u7684\u662F\u6CE8\u89E3\u4E0A\u539F\u672C\u7684\u5C5E\u6027\uFF09
                ScheduledSource scheduledSource = new ScheduledSource(annotation, method, bean);
                //\u5BF9\u6CE8\u89E3\u4E0A\u83B7\u53D6\u5230\u6E90\u5C5E\u6027\u4E2D\u7684\u5C5E\u6027\u8FDB\u884C\u68C0\u6D4B
                if (!scheduledSource.check()) {
                    throw new SuperScheduledException(&quot;\u5728&quot; + beanName + &quot;Bean\u4E2D&quot; + method.getName() + &quot;\u65B9\u6CD5\u7684\u6CE8\u89E3\u53C2\u6570\u9519\u8BEF&quot;);
                }
                //\u751F\u6210\u5B9A\u65F6\u4EFB\u52A1\u7684\u540D\u79F0\uFF08id\uFF09\uFF0C\u4F7F\u7528beanName+\u201C.\u201D+\u65B9\u6CD5\u540D
                String name = beanName + &quot;.&quot; + method.getName();
                //\u5C06\u4EE5key-value\u7684\u5F62\u5F0F\uFF0C\u5C06\u6E90\u6570\u636E\u5B58\u5165\u914D\u7F6E\u7BA1\u7406\u5668\u4E2D\uFF0Ckey\uFF1A\u5B9A\u65F6\u4EFB\u52A1\u7684\u540D\u79F0 value\uFF1A\u6E90\u6570\u636E
                superScheduledConfig.addScheduledSource(name, scheduledSource);
                try {
                 //5.\u5C06\u539F\u672CSpringBoot\u7684\u5B9A\u65F6\u4EFB\u52A1\u53D6\u6D88\u6389
                    clearOriginalScheduled(annotation);
                } catch (Exception e) {
                    throw new SuperScheduledException(&quot;\u5728\u5173\u95ED\u539F\u59CB\u65B9\u6CD5&quot; + beanName + method.getName() + &quot;\u65F6\u51FA\u73B0\u9519\u8BEF&quot;);
                }
            }
        }
        //\u6700\u540Ebean\u4FDD\u6301\u539F\u6709\u8FD4\u56DE
        return bean;
    }

    /**
     * \u4FEE\u6539\u6CE8\u89E3\u539F\u5148\u7684\u5C5E\u6027
     * @param annotation \u6CE8\u89E3\u5B9E\u4F8B\u5BF9\u8C61
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
     * \u83B7\u53D6SpringBoot\u7684\u4E0A\u4E0B\u6587
     * @param applicationContext SpringBoot\u7684\u4E0A\u4E0B\u6587
     */
    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3) \u4F7F\u7528ApplicationRunner\u521D\u59CB\u5316\u81EA\u5B9A\u4E49\u7684\u5B9A\u65F6\u4EFB\u52A1\u8FD0\u884C\u5668</p><ul><li>\u5B9E\u73B0ApplicationContextAware\u63A5\u53E3\u62FF\u5230SpringBoot\u7684\u4E0A\u4E0B\u6587</li><li>\u4F7F\u7528@DependsOn\u6CE8\u89E3\u5F3A\u5236\u4F9D\u8D56threadPoolTaskScheduler\u7C7B</li><li>\u5B9E\u73B0ApplicationRunner\u63A5\u53E3\uFF0C\u5728\u6240\u6709bean\u521D\u59CB\u5316\u7ED3\u675F\u4E4B\u540E\uFF0C\u8FD0\u884C\u81EA\u5B9A\u4E49\u903B\u8F91</li><li>\u4E3B\u8981\u5B9E\u73B0\u903B\u8F91\u5728run()\u65B9\u6CD5\u4E2D</li></ul><p><img src="https://mmbiz.qpic.cn/mmbiz_jpg/odp4zTVAogpHicXEISlz2It1lVzibw1E0jeh9cuzvwdIz5iaJvW8WJg4wvWVdIxxJuEYiaksjATDEFZKBlftCMMEXw/640?wx_fmt=jpeg&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="\u56FE\u7247"></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@DependsOn(&quot;threadPoolTaskScheduler&quot;)
@Component
public class SuperScheduledApplicationRunner implements ApplicationRunner, ApplicationContextAware {
    protected final Log logger = LogFactory.getLog(getClass());
    private DateTimeFormatter df = DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd HH:mm:ss&quot;);
    private ApplicationContext applicationContext;
 
 /**
     * \u5B9A\u65F6\u4EFB\u52A1\u914D\u7F6E\u7BA1\u7406\u5668
     */
    @Autowired
    private SuperScheduledConfig superScheduledConfig;
    /**
     * \u5B9A\u65F6\u4EFB\u52A1\u6267\u884C\u7EBF\u7A0B
     */
    @Autowired
    private ThreadPoolTaskScheduler threadPoolTaskScheduler;

    @Override
    public void run(ApplicationArguments args) {
     //1.\u5B9A\u65F6\u4EFB\u52A1\u914D\u7F6E\u7BA1\u7406\u5668\u4E2D\u7F13\u5B58  \u5B9A\u65F6\u4EFB\u52A1\u6267\u884C\u7EBF\u7A0B
        superScheduledConfig.setTaskScheduler(threadPoolTaskScheduler);
        //2.\u83B7\u53D6\u6240\u6709\u5B9A\u65F6\u4EFB\u52A1\u6E90\u6570\u636E
        Map&lt;String, ScheduledSource&gt; nameToScheduledSource = superScheduledConfig.getNameToScheduledSource();
        //\u9010\u4E00\u5904\u7406\u5B9A\u65F6\u4EFB\u52A1
        for (String name : nameToScheduledSource.keySet()) {
            //3.\u83B7\u53D6\u5B9A\u65F6\u4EFB\u52A1\u6E90\u6570\u636E
            ScheduledSource scheduledSource = nameToScheduledSource.get(name);
            //4.\u83B7\u53D6\u6240\u6709\u589E\u5F3A\u7C7B
            String[] baseStrengthenBeanNames = applicationContext.getBeanNamesForType(BaseStrengthen.class);
            //5.\u521B\u5EFA\u6267\u884C\u63A7\u5236\u5668
            SuperScheduledRunnable runnable = new SuperScheduledRunnable();
            //\u914D\u7F6E\u6267\u884C\u63A7\u5236\u5668
            runnable.setMethod(scheduledSource.getMethod());
            runnable.setBean(scheduledSource.getBean());
            //6.\u9010\u4E00\u5904\u7406\u589E\u5F3A\u7C7B\uFF08\u589E\u5F3A\u5668\u5B9E\u73B0\u539F\u7406\u540E\u9762\u5177\u4F53\u5206\u6790\uFF09
            List&lt;Point&gt; points = new ArrayList&lt;&gt;(baseStrengthenBeanNames.length);
            for (String baseStrengthenBeanName : baseStrengthenBeanNames) {
             //7.\u5C06\u589E\u5F3A\u5668\u4EE3\u7406\u6210point
                Object baseStrengthenBean = applicationContext.getBean(baseStrengthenBeanName);
                //\u521B\u5EFA\u4EE3\u7406
                Point proxy = ProxyUtils.getInstance(Point.class, new RunnableBaseInterceptor(baseStrengthenBean, runnable));
                proxy.setSuperScheduledName(name);
                //8.\u6240\u6709\u7684points\u8FDE\u6210\u8D77\u6765
                points.add(proxy);
            }
   //\u5C06point\u5F62\u6210\u8C03\u7528\u94FE
            runnable.setChain(new Chain(points));
            //\u5C06\u6267\u884C\u903B\u8F91\u5C01\u88C5\u5E76\u7F13\u5B58\u5230\u5B9A\u65F6\u4EFB\u52A1\u914D\u7F6E\u7BA1\u7406\u5668\u4E2D
            superScheduledConfig.addRunnable(name, runnable::invoke);
            try {
             //8.\u542F\u52A8\u5B9A\u65F6\u4EFB\u52A1
                ScheduledFuture&lt;?&gt; schedule = ScheduledFutureFactory.create(threadPoolTaskScheduler
                        , scheduledSource, runnable::invoke);
                //\u5C06\u7EBF\u7A0B\u56DE\u8C03\u94A9\u5B50\u5B58\u5230\u4EFB\u52A1\u914D\u7F6E\u7BA1\u7406\u5668\u4E2D
                superScheduledConfig.addScheduledFuture(name, schedule);
                logger.info(df.format(LocalDateTime.now()) + &quot;\u4EFB\u52A1&quot; + name + &quot;\u5DF2\u7ECF\u542F\u52A8...&quot;);

            } catch (Exception e) {
                throw new SuperScheduledException(&quot;\u4EFB\u52A1&quot; + name + &quot;\u542F\u52A8\u5931\u8D25\uFF0C\u9519\u8BEF\u4FE1\u606F\uFF1A&quot; + e.getLocalizedMessage());
            }
        }
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        this.applicationContext = applicationContext;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4) \u8FDB\u884C\u52A8\u6001\u7BA1\u7406</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Component
public class SuperScheduledManager {
    protected final Log logger = LogFactory.getLog(getClass());
    private DateTimeFormatter df = DateTimeFormatter.ofPattern(&quot;yyyy-MM-dd HH:mm:ss&quot;);

    @Autowired
    private SuperScheduledConfig superScheduledConfig;

    /**
     * \u4FEE\u6539Scheduled\u7684\u6267\u884C\u5468\u671F
     *
     * @param name scheduled\u7684\u540D\u79F0
     * @param cron cron\u8868\u8FBE\u5F0F
     */
    public void setScheduledCron(String name, String cron) {
        //\u7EC8\u6B62\u539F\u5148\u7684\u4EFB\u52A1
        cancelScheduled(name);
        //\u521B\u5EFA\u65B0\u7684\u4EFB\u52A1
        ScheduledSource scheduledSource = superScheduledConfig.getScheduledSource(name);
        scheduledSource.clear();
        scheduledSource.setCron(cron);
        addScheduled(name, scheduledSource);
    }

    /**
     * \u4FEE\u6539Scheduled\u7684fixedDelay
     *
     * @param name       scheduled\u7684\u540D\u79F0
     * @param fixedDelay \u4E0A\u4E00\u6B21\u6267\u884C\u5B8C\u6BD5\u65F6\u95F4\u70B9\u4E4B\u540E\u591A\u957F\u65F6\u95F4\u518D\u6267\u884C
     */
    public void setScheduledFixedDelay(String name, Long fixedDelay) {
        //\u7EC8\u6B62\u539F\u5148\u7684\u4EFB\u52A1
        cancelScheduled(name);
        //\u521B\u5EFA\u65B0\u7684\u4EFB\u52A1
        ScheduledSource scheduledSource = superScheduledConfig.getScheduledSource(name);
        scheduledSource.clear();
        scheduledSource.setFixedDelay(fixedDelay);
        addScheduled(name, scheduledSource);
    }

    /**
     * \u4FEE\u6539Scheduled\u7684fixedRate
     *
     * @param name      scheduled\u7684\u540D\u79F0
     * @param fixedRate \u4E0A\u4E00\u6B21\u5F00\u59CB\u6267\u884C\u4E4B\u540E\u591A\u957F\u65F6\u95F4\u518D\u6267\u884C
     */
    public void setScheduledFixedRate(String name, Long fixedRate) {
        //\u7EC8\u6B62\u539F\u5148\u7684\u4EFB\u52A1
        cancelScheduled(name);
        //\u521B\u5EFA\u65B0\u7684\u4EFB\u52A1
        ScheduledSource scheduledSource = superScheduledConfig.getScheduledSource(name);
        scheduledSource.clear();
        scheduledSource.setFixedRate(fixedRate);
        addScheduled(name, scheduledSource);
    }

    /**
     * \u67E5\u8BE2\u6240\u6709\u542F\u52A8\u7684Scheduled
     */
    public List&lt;String&gt; getRunScheduledName() {
        Set&lt;String&gt; names = superScheduledConfig.getNameToScheduledFuture().keySet();
        return new ArrayList&lt;&gt;(names);
    }

    /**
     * \u67E5\u8BE2\u6240\u6709\u7684Scheduled
     */
    public List&lt;String&gt; getAllSuperScheduledName() {
        Set&lt;String&gt; names = superScheduledConfig.getNameToRunnable().keySet();
        return new ArrayList&lt;&gt;(names);
    }

    /**
     * \u7EC8\u6B62Scheduled
     *
     * @param name scheduled\u7684\u540D\u79F0
     */
    public void cancelScheduled(String name) {
        ScheduledFuture scheduledFuture = superScheduledConfig.getScheduledFuture(name);
        scheduledFuture.cancel(true);
        superScheduledConfig.removeScheduledFuture(name);
        logger.info(df.format(LocalDateTime.now()) + &quot;\u4EFB\u52A1&quot; + name + &quot;\u5DF2\u7ECF\u7EC8\u6B62...&quot;);
    }

    /**
     * \u542F\u52A8Scheduled
     *
     * @param name            scheduled\u7684\u540D\u79F0
     * @param scheduledSource \u5B9A\u65F6\u4EFB\u52A1\u7684\u6E90\u4FE1\u606F
     */
    public void addScheduled(String name, ScheduledSource scheduledSource) {
        if (getRunScheduledName().contains(name)) {
            throw new SuperScheduledException(&quot;\u5B9A\u65F6\u4EFB\u52A1&quot; + name + &quot;\u5DF2\u7ECF\u88AB\u542F\u52A8\u8FC7\u4E86&quot;);
        }
        if (!scheduledSource.check()) {
            throw new SuperScheduledException(&quot;\u5B9A\u65F6\u4EFB\u52A1&quot; + name + &quot;\u6E90\u6570\u636E\u5185\u5BB9\u9519\u8BEF&quot;);
        }

        scheduledSource.refreshType();

        Runnable runnable = superScheduledConfig.getRunnable(name);
        ThreadPoolTaskScheduler taskScheduler = superScheduledConfig.getTaskScheduler();


        ScheduledFuture&lt;?&gt; schedule = ScheduledFutureFactory.create(taskScheduler, scheduledSource, runnable);
        logger.info(df.format(LocalDateTime.now()) + &quot;\u4EFB\u52A1&quot; + name + &quot;\u5DF2\u7ECF\u542F\u52A8...&quot;);

        superScheduledConfig.addScheduledSource(name, scheduledSource);
        superScheduledConfig.addScheduledFuture(name, schedule);
    }

    /**
     * \u4EE5cron\u7C7B\u578B\u542F\u52A8Scheduled
     *
     * @param name scheduled\u7684\u540D\u79F0
     * @param cron cron\u8868\u8FBE\u5F0F
     */
    public void addCronScheduled(String name, String cron) {
        ScheduledSource scheduledSource = new ScheduledSource();
        scheduledSource.setCron(cron);

        addScheduled(name, scheduledSource);
    }

    /**
     * \u4EE5fixedDelay\u7C7B\u578B\u542F\u52A8Scheduled
     *
     * @param name         scheduled\u7684\u540D\u79F0
     * @param fixedDelay   \u4E0A\u4E00\u6B21\u6267\u884C\u5B8C\u6BD5\u65F6\u95F4\u70B9\u4E4B\u540E\u591A\u957F\u65F6\u95F4\u518D\u6267\u884C
     * @param initialDelay \u7B2C\u4E00\u6B21\u6267\u884C\u7684\u5EF6\u8FDF\u65F6\u95F4
     */
    public void addFixedDelayScheduled(String name, Long fixedDelay, Long... initialDelay) {
        ScheduledSource scheduledSource = new ScheduledSource();
        scheduledSource.setFixedDelay(fixedDelay);
        if (initialDelay != null &amp;&amp; initialDelay.length == 1) {
            scheduledSource.setInitialDelay(initialDelay[0]);
        } else if (initialDelay != null &amp;&amp; initialDelay.length &gt; 1) {
            throw new SuperScheduledException(&quot;\u7B2C\u4E00\u6B21\u6267\u884C\u7684\u5EF6\u8FDF\u65F6\u95F4\u53EA\u80FD\u4F20\u5165\u4E00\u4E2A\u53C2\u6570&quot;);
        }

        addScheduled(name, scheduledSource);
    }

    /**
     * \u4EE5fixedRate\u7C7B\u578B\u542F\u52A8Scheduled
     *
     * @param name         scheduled\u7684\u540D\u79F0
     * @param fixedRate    \u4E0A\u4E00\u6B21\u5F00\u59CB\u6267\u884C\u4E4B\u540E\u591A\u957F\u65F6\u95F4\u518D\u6267\u884C
     * @param initialDelay \u7B2C\u4E00\u6B21\u6267\u884C\u7684\u5EF6\u8FDF\u65F6\u95F4
     */
    public void addFixedRateScheduled(String name, Long fixedRate, Long... initialDelay) {
        ScheduledSource scheduledSource = new ScheduledSource();
        scheduledSource.setFixedRate(fixedRate);
        if (initialDelay != null &amp;&amp; initialDelay.length == 1) {
            scheduledSource.setInitialDelay(initialDelay[0]);
        } else if (initialDelay != null &amp;&amp; initialDelay.length &gt; 1) {
            throw new SuperScheduledException(&quot;\u7B2C\u4E00\u6B21\u6267\u884C\u7684\u5EF6\u8FDF\u65F6\u95F4\u53EA\u80FD\u4F20\u5165\u4E00\u4E2A\u53C2\u6570&quot;);
        }

        addScheduled(name, scheduledSource);
    }

    /**
     * \u624B\u52A8\u6267\u884C\u4E00\u6B21\u4EFB\u52A1
     *
     * @param name scheduled\u7684\u540D\u79F0
     */
    public void runScheduled(String name) {
        Runnable runnable = superScheduledConfig.getRunnable(name);
        runnable.run();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2\u3001\u589E\u5F3A\u63A5\u53E3\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u589E\u5F3A\u63A5\u53E3\u5B9E\u73B0" aria-hidden="true">#</a> <strong>2\u3001\u589E\u5F3A\u63A5\u53E3\u5B9E\u73B0</strong></h4><p>\u589E\u5F3A\u5668\u5B9E\u73B0\u7684\u6574\u4F53\u601D\u8DEF\u4E0ESpringAop\u7684\u601D\u8DEF\u4E00\u81F4\uFF0C\u5B9E\u73B0\u6CA1\u6709Aop\u590D\u6742</p><p>(1) \u589E\u5F3A\u63A5\u53E3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Order(Ordered.HIGHEST_PRECEDENCE)
public interface BaseStrengthen {
    /**
     * \u524D\u7F6E\u5F3A\u5316\u65B9\u6CD5
     *
     * @param bean   bean\u5B9E\u4F8B\uFF08\u6216\u8005\u662F\u88AB\u4EE3\u7406\u7684bean\uFF09
     * @param method \u6267\u884C\u7684\u65B9\u6CD5\u5BF9\u8C61
     * @param args   \u65B9\u6CD5\u53C2\u6570
     */
    void before(Object bean, Method method, Object[] args);

    /**
     * \u540E\u7F6E\u5F3A\u5316\u65B9\u6CD5
     * \u51FA\u73B0\u5F02\u5E38\u4E0D\u4F1A\u6267\u884C
     * \u5982\u679C\u672A\u51FA\u73B0\u5F02\u5E38\uFF0C\u5728afterFinally\u65B9\u6CD5\u4E4B\u540E\u6267\u884C
     *
     * @param bean   bean\u5B9E\u4F8B\uFF08\u6216\u8005\u662F\u88AB\u4EE3\u7406\u7684bean\uFF09
     * @param method \u6267\u884C\u7684\u65B9\u6CD5\u5BF9\u8C61
     * @param args   \u65B9\u6CD5\u53C2\u6570
     */
    void after(Object bean, Method method, Object[] args);

    /**
     * \u5F02\u5E38\u5F3A\u5316\u65B9\u6CD5
     *
     * @param bean   bean\u5B9E\u4F8B\uFF08\u6216\u8005\u662F\u88AB\u4EE3\u7406\u7684bean\uFF09
     * @param method \u6267\u884C\u7684\u65B9\u6CD5\u5BF9\u8C61
     * @param args   \u65B9\u6CD5\u53C2\u6570
     */
    void exception(Object bean, Method method, Object[] args);

    /**
     * Finally\u5F3A\u5316\u65B9\u6CD5\uFF0C\u51FA\u73B0\u5F02\u5E38\u4E5F\u4F1A\u6267\u884C
     *
     * @param bean   bean\u5B9E\u4F8B\uFF08\u6216\u8005\u662F\u88AB\u4EE3\u7406\u7684bean\uFF09
     * @param method \u6267\u884C\u7684\u65B9\u6CD5\u5BF9\u8C61
     * @param args   \u65B9\u6CD5\u53C2\u6570
     */
    void afterFinally(Object bean, Method method, Object[] args);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(2) \u4EE3\u7406\u62BD\u8C61\u7C7B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public abstract class Point {
    /**
     * \u5B9A\u65F6\u4EFB\u52A1\u540D
     */
    private String superScheduledName;

    /**
     * \u62BD\u8C61\u7684\u6267\u884C\u65B9\u6CD5\uFF0C\u4F7F\u7528\u4EE3\u7406\u5B9E\u73B0
     * @param runnable \u5B9A\u65F6\u4EFB\u52A1\u6267\u884C\u5668
     */
    public abstract Object invoke(SuperScheduledRunnable runnable);
    
    /* \u666E\u901A\u7684get/sets\u7701\u7565 */
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(3) \u8C03\u7528\u94FE\u7C7B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Chain {
    private List&lt;Point&gt; list;
    private int index = -1;
    /**
     * \u7D22\u5F15\u81EA\u589E1
     */
    public int incIndex() {
        return ++index;
    }

    /**
     * \u7D22\u5F15\u8FD8\u539F
     */
    public void resetIndex() {
        this.index = -1;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4) cglib\u52A8\u6001\u4EE3\u7406\u5B9E\u73B0</p><p>\u4F7F\u7528cglib\u4EE3\u7406\u589E\u5F3A\u5668\uFF0C\u5C06\u589E\u5F3A\u5668\u5168\u90E8\u4EE3\u7406\u6210\u8C03\u7528\u94FE\u8282\u70B9Point</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class RunnableBaseInterceptor implements MethodInterceptor {
    /**
     * \u5B9A\u65F6\u4EFB\u52A1\u6267\u884C\u5668
     */
    private SuperScheduledRunnable runnable;
    /**
     * \u5B9A\u65F6\u4EFB\u52A1\u589E\u5F3A\u7C7B
     */
    private BaseStrengthen strengthen;

    @Override
    public Object intercept(Object obj, Method method, Object[] args, MethodProxy methodProxy) throws Throwable {
        Object result;
        //\u5982\u679C\u6267\u884C\u7684\u662Finvoke()\u65B9\u6CD5
        if (&quot;invoke&quot;.equals(method.getName())) {
         //\u524D\u7F6E\u5F3A\u5316\u65B9\u6CD5
            strengthen.before(obj, method, args);
            try {
             //\u8C03\u7528\u6267\u884C\u5668\u4E2D\u7684invoke()\u65B9\u6CD5
                result = runnable.invoke();
            } catch (Exception e) {
             //\u5F02\u5E38\u5F3A\u5316\u65B9\u6CD5
                strengthen.exception(obj, method, args);
                throw new SuperScheduledException(strengthen.getClass() + &quot;\u4E2D\u5F3A\u5316\u6267\u884C\u65F6\u53D1\u751F\u9519\u8BEF&quot;, e);
            } finally {
             //Finally\u5F3A\u5316\u65B9\u6CD5\uFF0C\u51FA\u73B0\u5F02\u5E38\u4E5F\u4F1A\u6267\u884C
                strengthen.afterFinally(obj, method, args);
            }
            //\u540E\u7F6E\u5F3A\u5316\u65B9\u6CD5
            strengthen.after(obj, method, args);

        } else {
         //\u76F4\u63A5\u6267\u884C\u65B9\u6CD5
            result = methodProxy.invokeSuper(obj, args);
        }
        return result;
    }

    public RunnableBaseInterceptor(Object object, SuperScheduledRunnable runnable) {
        this.runnable = runnable;
        if (BaseStrengthen.class.isAssignableFrom(object.getClass())) {
            this.strengthen = (BaseStrengthen) object;
        } else {
            throw new SuperScheduledException(object.getClass() + &quot;\u5BF9\u8C61\u4E0D\u662FBaseStrengthen\u7C7B\u578B&quot;);
        }
    }

    public RunnableBaseInterceptor() {

    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(5) \u5B9A\u65F6\u4EFB\u52A1\u6267\u884C\u5668\u5B9E\u73B0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class SuperScheduledRunnable {
    /**
     * \u539F\u59CB\u7684\u65B9\u6CD5
     */
    private Method method;
    /**
     * \u65B9\u6CD5\u6240\u5728\u7684bean
     */
    private Object bean;
    /**
     * \u589E\u5F3A\u5668\u7684\u8C03\u7528\u94FE
     */
    private Chain chain;


    public Object invoke() {
        Object result;
        //\u7D22\u5F15\u81EA\u589E1
        if (chain.incIndex() == chain.getList().size()) {
            //\u8C03\u7528\u94FE\u4E2D\u7684\u589E\u5F3A\u65B9\u6CD5\u5DF2\u7ECF\u5168\u90E8\u6267\u884C\u7ED3\u675F
            try {
                //\u8C03\u7528\u94FE\u7D22\u5F15\u521D\u59CB\u5316
                chain.resetIndex();
                //\u589E\u5F3A\u5668\u5168\u90E8\u6267\u884C\u5B8C\u6BD5\uFF0C\u6267\u884C\u539F\u672C\u7684\u65B9\u6CD5
                result = method.invoke(bean);
            } catch (IllegalAccessException | InvocationTargetException e) {
                throw new SuperScheduledException(e.getLocalizedMessage());
            }
        } else {
            //\u83B7\u53D6\u88AB\u4EE3\u7406\u540E\u7684\u65B9\u6CD5\u589E\u5F3A\u5668
            Point point = chain.getList().get(chain.getIndex());
            //\u6267\u884C\u589E\u5F3A\u5668\u4EE3\u7406
            //\u589E\u5F3A\u5668\u4EE3\u7406\u4E2D\uFF0C\u4F1A\u56DE\u8C03\u65B9\u6CD5\u6267\u884C\u5668\uFF0C\u5F62\u6210\u8C03\u7528\u94FE\uFF0C\u9010\u4E00\u8FD0\u884C\u8C03\u7528\u94FE\u4E2D\u7684\u589E\u5F3A\u5668
            result = point.invoke(this);
        }
        return result;
    }
    
    /* \u666E\u901A\u7684get/sets\u7701\u7565 */
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(6) \u589E\u5F3A\u5668\u4EE3\u7406\u903B\u8F91</p><p><code>com.gyx.superscheduled.core.SuperScheduledApplicationRunner</code>\u7C7B\u4E2D\u7684\u4EE3\u7801\u7247\u6BB5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u521B\u5EFA\u6267\u884C\u63A7\u5236\u5668
SuperScheduledRunnable runnable = new SuperScheduledRunnable();
runnable.setMethod(scheduledSource.getMethod());
runnable.setBean(scheduledSource.getBean());
//\u7528\u6765\u5B58\u653E \u589E\u5F3A\u5668\u7684\u4EE3\u7406\u5BF9\u8C61
List&lt;Point&gt; points = new ArrayList&lt;&gt;(baseStrengthenBeanNames.length);
//\u5FAA\u73AF\u6240\u6709\u7684\u589E\u5F3A\u5668\u7684beanName
for (String baseStrengthenBeanName : baseStrengthenBeanNames) {
 //\u83B7\u53D6\u589E\u5F3A\u5668\u7684bean\u5BF9\u8C61
    Object baseStrengthenBean = applicationContext.getBean(baseStrengthenBeanName);
    //\u5C06\u589E\u5F3A\u5668\u4EE3\u7406\u6210Point\u8282\u70B9
    Point proxy = ProxyUtils.getInstance(Point.class, new RunnableBaseInterceptor(baseStrengthenBean, runnable));
    proxy.setSuperScheduledName(name);
    //\u589E\u5F3A\u5668\u7684\u4EE3\u7406\u5BF9\u8C61\u7F13\u5B58\u5230list\u4E2D
    points.add(proxy);
}
//\u5C06\u589E\u5F3A\u5668\u4EE3\u7406\u5B9E\u4F8B\u7684\u96C6\u5408\u751F\u6210\u8C03\u7528\u94FE
//\u6267\u884C\u63A7\u5236\u5668\u4E2D\u8BBE\u7F6E\u8C03\u7528\u94FE
runnable.setChain(new Chain(points));

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function S(x,f){const i=v("ExternalLinkIcon");return a(),r("div",null,[c,e("blockquote",null,[e("p",null,[t,e("a",m,[b,d(i)])]),e("p",null,[o,e("a",h,[p,d(i)])])]),g])}var q=s(u,[["render",S],["__file","SpringBoot\u5B9A\u65F6\u4EFB\u52A1\u52A8\u6001\u7BA1\u7406.html.vue"]]);export{q as default};
