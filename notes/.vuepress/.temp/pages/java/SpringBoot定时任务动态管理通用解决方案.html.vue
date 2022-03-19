<template><h1 id="springboot-定时任务动态管理通用解决方案" tabindex="-1"><a class="header-anchor" href="#springboot-定时任务动态管理通用解决方案" aria-hidden="true">#</a> SpringBoot 定时任务动态管理通用解决方案</h1>
<h2 id="一、功能说明" tabindex="-1"><a class="header-anchor" href="#一、功能说明" aria-hidden="true">#</a> <strong><a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">一、功能说明<ExternalLinkIcon/></a></strong></h2>
<p>SpringBoot的定时任务的加强工具，实现对SpringBoot原生的定时任务进行动态管理,完全兼容原生@Scheduled注解,无需对原本的定时任务进行修改</p>
<blockquote>
<p>基于 Spring Boot + MyBatis Plus + Vue &amp; Element 实现的后台管理系统 + 用户小程序，支持 RBAC 动态权限、多租户、数据权限、工作流、三方登录、支付、短信、商城等功能。</p>
<p>项目地址：https://github.com/YunaiV/ruoyi-vue-pro</p>
</blockquote>
<h2 id="二、快速使用" tabindex="-1"><a class="header-anchor" href="#二、快速使用" aria-hidden="true">#</a> <strong><a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">二、快速使用<ExternalLinkIcon/></a></strong></h2>
<p>具体的功能已经封装成SpringBoot-starter即插即用</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.github.guoyixing<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-super-scheduled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>0.3.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>使用方法和源码：</p>
<blockquote>
<p>码云：https://gitee.com/qiaodaimadewangcai/super-scheduled</p>
<p>github：https://github.com/guoyixing/super-scheduled</p>
</blockquote>
<blockquote>
<p>基于微服务的思想，构建在 B2C 电商场景下的项目实战。核心技术栈，是 Spring Boot + Dubbo 。未来，会重构成 Spring Cloud Alibaba 。</p>
<p>项目地址：https://github.com/YunaiV/onemall</p>
</blockquote>
<h2 id="三、实现原理" tabindex="-1"><a class="header-anchor" href="#三、实现原理" aria-hidden="true">#</a> <strong><a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">三、实现原理<ExternalLinkIcon/></a></strong></h2>
<h4 id="_1、动态管理实现" tabindex="-1"><a class="header-anchor" href="#_1、动态管理实现" aria-hidden="true">#</a> <a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">1、动态管理实现<ExternalLinkIcon/></a></h4>
<p>(1) 配置管理介绍</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span><span class="token punctuation">(</span><span class="token string">"superScheduledConfig"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SuperScheduledConfig</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 执行定时任务的线程池
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">ThreadPoolTaskScheduler</span> taskScheduler<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 定时任务名称与定时任务回调钩子  的关联关系容器
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">ScheduledFuture</span><span class="token punctuation">></span></span> nameToScheduledFuture <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 定时任务名称与定时任务需要执行的逻辑  的关联关系容器
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Runnable</span><span class="token punctuation">></span></span> nameToRunnable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 定时任务名称与定时任务的源信息  的关联关系容器
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">ScheduledSource</span><span class="token punctuation">></span></span> nameToScheduledSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token comment">/* 普通的get/sets省略 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>(2) 使用后处理器拦截SpringBoot原本的定时任务</p>
<ul>
<li>实现ApplicationContextAware接口拿到SpringBoot的上下文</li>
<li>实现BeanPostProcessor接口，将这个类标记为后处理器，后处理器会在每个bean实例化之后执行</li>
<li>使用@DependsOn注解强制依赖SuperScheduledConfig类，让SpringBoot实例化SuperScheduledPostProcessor类之前先实例化SuperScheduledConfig类</li>
<li>主要实现逻辑在postProcessAfterInitialization()方法中</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@DependsOn</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"superScheduledConfig"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Order</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SuperScheduledPostProcessor</span> <span class="token keyword">implements</span> <span class="token class-name">BeanPostProcessor</span><span class="token punctuation">,</span> <span class="token class-name">ApplicationContextAware</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token class-name">Log</span> logger <span class="token operator">=</span> <span class="token class-name">LogFactory</span><span class="token punctuation">.</span><span class="token function">getLog</span><span class="token punctuation">(</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 实例化bean之前的操作
     * <span class="token keyword">@param</span> <span class="token parameter">bean</span> bean实例
     * <span class="token keyword">@param</span> <span class="token parameter">beanName</span> bean的Name
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">postProcessBeforeInitialization</span><span class="token punctuation">(</span><span class="token class-name">Object</span> bean<span class="token punctuation">,</span> <span class="token class-name">String</span> beanName<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> bean<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 实例化bean之后的操作
     * <span class="token keyword">@param</span> <span class="token parameter">bean</span> bean实例
     * <span class="token keyword">@param</span> <span class="token parameter">beanName</span> bean的Name
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">postProcessAfterInitialization</span><span class="token punctuation">(</span><span class="token class-name">Object</span> bean<span class="token punctuation">,</span>
                                                 <span class="token class-name">String</span> beanName<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
        <span class="token comment">//1.获取配置管理器</span>
        <span class="token class-name">SuperScheduledConfig</span> superScheduledConfig <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">SuperScheduledConfig</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2.获取当前实例化完成的bean的所有方法</span>
        <span class="token class-name">Method</span><span class="token punctuation">[</span><span class="token punctuation">]</span> methods <span class="token operator">=</span> bean<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDeclaredMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//循环处理对每个方法逐一处理</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>methods<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Method</span> method <span class="token operator">:</span> methods<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token comment">//3.尝试在该方法上获取@Scheduled注解（SpringBoot的定时任务注解）</span>
                <span class="token class-name">Scheduled</span> annotation <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token class-name">Scheduled</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//如果无法获取到@Scheduled注解，就跳过这个方法</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>annotation <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">continue</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token comment">//4.创建定时任务的源属性</span>
                <span class="token comment">//创建定时任务的源属性（用来记录定时任务的配置，初始化的时候记录的是注解上原本的属性）</span>
                <span class="token class-name">ScheduledSource</span> scheduledSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ScheduledSource</span><span class="token punctuation">(</span>annotation<span class="token punctuation">,</span> method<span class="token punctuation">,</span> bean<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//对注解上获取到源属性中的属性进行检测</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>scheduledSource<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SuperScheduledException</span><span class="token punctuation">(</span><span class="token string">"在"</span> <span class="token operator">+</span> beanName <span class="token operator">+</span> <span class="token string">"Bean中"</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"方法的注解参数错误"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token comment">//生成定时任务的名称（id），使用beanName+“.”+方法名</span>
                <span class="token class-name">String</span> name <span class="token operator">=</span> beanName <span class="token operator">+</span> <span class="token string">"."</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//将以key-value的形式，将源数据存入配置管理器中，key：定时任务的名称 value：源数据</span>
                superScheduledConfig<span class="token punctuation">.</span><span class="token function">addScheduledSource</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> scheduledSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                 <span class="token comment">//5.将原本SpringBoot的定时任务取消掉</span>
                    <span class="token function">clearOriginalScheduled</span><span class="token punctuation">(</span>annotation<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SuperScheduledException</span><span class="token punctuation">(</span><span class="token string">"在关闭原始方法"</span> <span class="token operator">+</span> beanName <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"时出现错误"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//最后bean保持原有返回</span>
        <span class="token keyword">return</span> bean<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 修改注解原先的属性
     * <span class="token keyword">@param</span> <span class="token parameter">annotation</span> 注解实例对象
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Exception</span></span>
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">clearOriginalScheduled</span><span class="token punctuation">(</span><span class="token class-name">Scheduled</span> annotation<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token function">changeAnnotationValue</span><span class="token punctuation">(</span>annotation<span class="token punctuation">,</span> <span class="token string">"cron"</span><span class="token punctuation">,</span> <span class="token class-name">Scheduled</span><span class="token punctuation">.</span>CRON_DISABLED<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">changeAnnotationValue</span><span class="token punctuation">(</span>annotation<span class="token punctuation">,</span> <span class="token string">"fixedDelay"</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">changeAnnotationValue</span><span class="token punctuation">(</span>annotation<span class="token punctuation">,</span> <span class="token string">"fixedDelayString"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">changeAnnotationValue</span><span class="token punctuation">(</span>annotation<span class="token punctuation">,</span> <span class="token string">"fixedRate"</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">changeAnnotationValue</span><span class="token punctuation">(</span>annotation<span class="token punctuation">,</span> <span class="token string">"fixedRateString"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">changeAnnotationValue</span><span class="token punctuation">(</span>annotation<span class="token punctuation">,</span> <span class="token string">"initialDelay"</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">changeAnnotationValue</span><span class="token punctuation">(</span>annotation<span class="token punctuation">,</span> <span class="token string">"initialDelayString"</span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * 获取SpringBoot的上下文
     * <span class="token keyword">@param</span> <span class="token parameter">applicationContext</span> SpringBoot的上下文
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>applicationContext <span class="token operator">=</span> applicationContext<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br></div></div><p>(3) 使用ApplicationRunner初始化自定义的定时任务运行器</p>
<ul>
<li>实现ApplicationContextAware接口拿到SpringBoot的上下文</li>
<li>使用@DependsOn注解强制依赖threadPoolTaskScheduler类</li>
<li>实现ApplicationRunner接口，在所有bean初始化结束之后，运行自定义逻辑</li>
<li>主要实现逻辑在run()方法中</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@DependsOn</span><span class="token punctuation">(</span><span class="token string">"threadPoolTaskScheduler"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SuperScheduledApplicationRunner</span> <span class="token keyword">implements</span> <span class="token class-name">ApplicationRunner</span><span class="token punctuation">,</span> <span class="token class-name">ApplicationContextAware</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token class-name">Log</span> logger <span class="token operator">=</span> <span class="token class-name">LogFactory</span><span class="token punctuation">.</span><span class="token function">getLog</span><span class="token punctuation">(</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">DateTimeFormatter</span> df <span class="token operator">=</span> <span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span><span class="token string">"yyyy-MM-dd HH:mm:ss"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">;</span>
 
 <span class="token doc-comment comment">/**
     * 定时任务配置管理器
     */</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">SuperScheduledConfig</span> superScheduledConfig<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 定时任务执行线程
     */</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">ThreadPoolTaskScheduler</span> threadPoolTaskScheduler<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">ApplicationArguments</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">//1.定时任务配置管理器中缓存  定时任务执行线程</span>
        superScheduledConfig<span class="token punctuation">.</span><span class="token function">setTaskScheduler</span><span class="token punctuation">(</span>threadPoolTaskScheduler<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//2.获取所有定时任务源数据</span>
        <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">ScheduledSource</span><span class="token punctuation">></span></span> nameToScheduledSource <span class="token operator">=</span> superScheduledConfig<span class="token punctuation">.</span><span class="token function">getNameToScheduledSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//逐一处理定时任务</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> name <span class="token operator">:</span> nameToScheduledSource<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//3.获取定时任务源数据</span>
            <span class="token class-name">ScheduledSource</span> scheduledSource <span class="token operator">=</span> nameToScheduledSource<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//4.获取所有增强类</span>
            <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> baseStrengthenBeanNames <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBeanNamesForType</span><span class="token punctuation">(</span><span class="token class-name">BaseStrengthen</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//5.创建执行控制器</span>
            <span class="token class-name">SuperScheduledRunnable</span> runnable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SuperScheduledRunnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//配置执行控制器</span>
            runnable<span class="token punctuation">.</span><span class="token function">setMethod</span><span class="token punctuation">(</span>scheduledSource<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            runnable<span class="token punctuation">.</span><span class="token function">setBean</span><span class="token punctuation">(</span>scheduledSource<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//6.逐一处理增强类（增强器实现原理后面具体分析）</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Point</span><span class="token punctuation">></span></span> points <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>baseStrengthenBeanNames<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> baseStrengthenBeanName <span class="token operator">:</span> baseStrengthenBeanNames<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token comment">//7.将增强器代理成point</span>
                <span class="token class-name">Object</span> baseStrengthenBean <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span>baseStrengthenBeanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//创建代理</span>
                <span class="token class-name">Point</span> proxy <span class="token operator">=</span> <span class="token class-name">ProxyUtils</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token class-name">Point</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">RunnableBaseInterceptor</span><span class="token punctuation">(</span>baseStrengthenBean<span class="token punctuation">,</span> runnable<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                proxy<span class="token punctuation">.</span><span class="token function">setSuperScheduledName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//8.所有的points连成起来</span>
                points<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>proxy<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
   <span class="token comment">//将point形成调用链</span>
            runnable<span class="token punctuation">.</span><span class="token function">setChain</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Chain</span><span class="token punctuation">(</span>points<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//将执行逻辑封装并缓存到定时任务配置管理器中</span>
            superScheduledConfig<span class="token punctuation">.</span><span class="token function">addRunnable</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> runnable<span class="token operator">::</span><span class="token function">invoke</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
             <span class="token comment">//8.启动定时任务</span>
                <span class="token class-name">ScheduledFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> schedule <span class="token operator">=</span> <span class="token class-name">ScheduledFutureFactory</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>threadPoolTaskScheduler
                        <span class="token punctuation">,</span> scheduledSource<span class="token punctuation">,</span> runnable<span class="token operator">::</span><span class="token function">invoke</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//将线程回调钩子存到任务配置管理器中</span>
                superScheduledConfig<span class="token punctuation">.</span><span class="token function">addScheduledFuture</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> schedule<span class="token punctuation">)</span><span class="token punctuation">;</span>
                logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>df<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"任务"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">"已经启动..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SuperScheduledException</span><span class="token punctuation">(</span><span class="token string">"任务"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">"启动失败，错误信息："</span> <span class="token operator">+</span> e<span class="token punctuation">.</span><span class="token function">getLocalizedMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>applicationContext <span class="token operator">=</span> applicationContext<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div><p>(4) 进行动态管理</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SuperScheduledManager</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token class-name">Log</span> logger <span class="token operator">=</span> <span class="token class-name">LogFactory</span><span class="token punctuation">.</span><span class="token function">getLog</span><span class="token punctuation">(</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">DateTimeFormatter</span> df <span class="token operator">=</span> <span class="token class-name">DateTimeFormatter</span><span class="token punctuation">.</span><span class="token function">ofPattern</span><span class="token punctuation">(</span><span class="token string">"yyyy-MM-dd HH:mm:ss"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">SuperScheduledConfig</span> superScheduledConfig<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 修改Scheduled的执行周期
     *
     * <span class="token keyword">@param</span> <span class="token parameter">name</span> scheduled的名称
     * <span class="token keyword">@param</span> <span class="token parameter">cron</span> cron表达式
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setScheduledCron</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> cron<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//终止原先的任务</span>
        <span class="token function">cancelScheduled</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//创建新的任务</span>
        <span class="token class-name">ScheduledSource</span> scheduledSource <span class="token operator">=</span> superScheduledConfig<span class="token punctuation">.</span><span class="token function">getScheduledSource</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        scheduledSource<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        scheduledSource<span class="token punctuation">.</span><span class="token function">setCron</span><span class="token punctuation">(</span>cron<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">addScheduled</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> scheduledSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 修改Scheduled的fixedDelay
     *
     * <span class="token keyword">@param</span> <span class="token parameter">name</span>       scheduled的名称
     * <span class="token keyword">@param</span> <span class="token parameter">fixedDelay</span> 上一次执行完毕时间点之后多长时间再执行
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setScheduledFixedDelay</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Long</span> fixedDelay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//终止原先的任务</span>
        <span class="token function">cancelScheduled</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//创建新的任务</span>
        <span class="token class-name">ScheduledSource</span> scheduledSource <span class="token operator">=</span> superScheduledConfig<span class="token punctuation">.</span><span class="token function">getScheduledSource</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        scheduledSource<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        scheduledSource<span class="token punctuation">.</span><span class="token function">setFixedDelay</span><span class="token punctuation">(</span>fixedDelay<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">addScheduled</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> scheduledSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 修改Scheduled的fixedRate
     *
     * <span class="token keyword">@param</span> <span class="token parameter">name</span>      scheduled的名称
     * <span class="token keyword">@param</span> <span class="token parameter">fixedRate</span> 上一次开始执行之后多长时间再执行
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setScheduledFixedRate</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Long</span> fixedRate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//终止原先的任务</span>
        <span class="token function">cancelScheduled</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//创建新的任务</span>
        <span class="token class-name">ScheduledSource</span> scheduledSource <span class="token operator">=</span> superScheduledConfig<span class="token punctuation">.</span><span class="token function">getScheduledSource</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        scheduledSource<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        scheduledSource<span class="token punctuation">.</span><span class="token function">setFixedRate</span><span class="token punctuation">(</span>fixedRate<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">addScheduled</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> scheduledSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 查询所有启动的Scheduled
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token function">getRunScheduledName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> names <span class="token operator">=</span> superScheduledConfig<span class="token punctuation">.</span><span class="token function">getNameToScheduledFuture</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>names<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 查询所有的Scheduled
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token function">getAllSuperScheduledName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> names <span class="token operator">=</span> superScheduledConfig<span class="token punctuation">.</span><span class="token function">getNameToRunnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>names<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 终止Scheduled
     *
     * <span class="token keyword">@param</span> <span class="token parameter">name</span> scheduled的名称
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">cancelScheduled</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ScheduledFuture</span> scheduledFuture <span class="token operator">=</span> superScheduledConfig<span class="token punctuation">.</span><span class="token function">getScheduledFuture</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        scheduledFuture<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        superScheduledConfig<span class="token punctuation">.</span><span class="token function">removeScheduledFuture</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>df<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"任务"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">"已经终止..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 启动Scheduled
     *
     * <span class="token keyword">@param</span> <span class="token parameter">name</span>            scheduled的名称
     * <span class="token keyword">@param</span> <span class="token parameter">scheduledSource</span> 定时任务的源信息
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addScheduled</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">ScheduledSource</span> scheduledSource<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getRunScheduledName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SuperScheduledException</span><span class="token punctuation">(</span><span class="token string">"定时任务"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">"已经被启动过了"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>scheduledSource<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SuperScheduledException</span><span class="token punctuation">(</span><span class="token string">"定时任务"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">"源数据内容错误"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        scheduledSource<span class="token punctuation">.</span><span class="token function">refreshType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Runnable</span> runnable <span class="token operator">=</span> superScheduledConfig<span class="token punctuation">.</span><span class="token function">getRunnable</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ThreadPoolTaskScheduler</span> taskScheduler <span class="token operator">=</span> superScheduledConfig<span class="token punctuation">.</span><span class="token function">getTaskScheduler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token class-name">ScheduledFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> schedule <span class="token operator">=</span> <span class="token class-name">ScheduledFutureFactory</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>taskScheduler<span class="token punctuation">,</span> scheduledSource<span class="token punctuation">,</span> runnable<span class="token punctuation">)</span><span class="token punctuation">;</span>
        logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>df<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token class-name">LocalDateTime</span><span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"任务"</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">"已经启动..."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        superScheduledConfig<span class="token punctuation">.</span><span class="token function">addScheduledSource</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> scheduledSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
        superScheduledConfig<span class="token punctuation">.</span><span class="token function">addScheduledFuture</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> schedule<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 以cron类型启动Scheduled
     *
     * <span class="token keyword">@param</span> <span class="token parameter">name</span> scheduled的名称
     * <span class="token keyword">@param</span> <span class="token parameter">cron</span> cron表达式
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addCronScheduled</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">String</span> cron<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ScheduledSource</span> scheduledSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ScheduledSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        scheduledSource<span class="token punctuation">.</span><span class="token function">setCron</span><span class="token punctuation">(</span>cron<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">addScheduled</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> scheduledSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 以fixedDelay类型启动Scheduled
     *
     * <span class="token keyword">@param</span> <span class="token parameter">name</span>         scheduled的名称
     * <span class="token keyword">@param</span> <span class="token parameter">fixedDelay</span>   上一次执行完毕时间点之后多长时间再执行
     * <span class="token keyword">@param</span> <span class="token parameter">initialDelay</span> 第一次执行的延迟时间
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addFixedDelayScheduled</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Long</span> fixedDelay<span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> initialDelay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ScheduledSource</span> scheduledSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ScheduledSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        scheduledSource<span class="token punctuation">.</span><span class="token function">setFixedDelay</span><span class="token punctuation">(</span>fixedDelay<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>initialDelay <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> initialDelay<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            scheduledSource<span class="token punctuation">.</span><span class="token function">setInitialDelay</span><span class="token punctuation">(</span>initialDelay<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>initialDelay <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> initialDelay<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SuperScheduledException</span><span class="token punctuation">(</span><span class="token string">"第一次执行的延迟时间只能传入一个参数"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token function">addScheduled</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> scheduledSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 以fixedRate类型启动Scheduled
     *
     * <span class="token keyword">@param</span> <span class="token parameter">name</span>         scheduled的名称
     * <span class="token keyword">@param</span> <span class="token parameter">fixedRate</span>    上一次开始执行之后多长时间再执行
     * <span class="token keyword">@param</span> <span class="token parameter">initialDelay</span> 第一次执行的延迟时间
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addFixedRateScheduled</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token class-name">Long</span> fixedRate<span class="token punctuation">,</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> initialDelay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ScheduledSource</span> scheduledSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ScheduledSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        scheduledSource<span class="token punctuation">.</span><span class="token function">setFixedRate</span><span class="token punctuation">(</span>fixedRate<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>initialDelay <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> initialDelay<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            scheduledSource<span class="token punctuation">.</span><span class="token function">setInitialDelay</span><span class="token punctuation">(</span>initialDelay<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>initialDelay <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> initialDelay<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SuperScheduledException</span><span class="token punctuation">(</span><span class="token string">"第一次执行的延迟时间只能传入一个参数"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token function">addScheduled</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> scheduledSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 手动执行一次任务
     *
     * <span class="token keyword">@param</span> <span class="token parameter">name</span> scheduled的名称
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">runScheduled</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Runnable</span> runnable <span class="token operator">=</span> superScheduledConfig<span class="token punctuation">.</span><span class="token function">getRunnable</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        runnable<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br></div></div><h4 id="_2、增强接口实现" tabindex="-1"><a class="header-anchor" href="#_2、增强接口实现" aria-hidden="true">#</a> <a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;scene=21#wechat_redirect" target="_blank" rel="noopener noreferrer">2、增强接口实现<ExternalLinkIcon/></a></h4>
<p>增强器实现的整体思路与SpringAop的思路一致，实现没有Aop复杂</p>
<p>(1) 增强接口</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Order</span><span class="token punctuation">(</span><span class="token class-name">Ordered</span><span class="token punctuation">.</span>HIGHEST_PRECEDENCE<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">BaseStrengthen</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 前置强化方法
     *
     * <span class="token keyword">@param</span> <span class="token parameter">bean</span>   bean实例（或者是被代理的bean）
     * <span class="token keyword">@param</span> <span class="token parameter">method</span> 执行的方法对象
     * <span class="token keyword">@param</span> <span class="token parameter">args</span>   方法参数
     */</span>
    <span class="token keyword">void</span> <span class="token function">before</span><span class="token punctuation">(</span><span class="token class-name">Object</span> bean<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 后置强化方法
     * 出现异常不会执行
     * 如果未出现异常，在afterFinally方法之后执行
     *
     * <span class="token keyword">@param</span> <span class="token parameter">bean</span>   bean实例（或者是被代理的bean）
     * <span class="token keyword">@param</span> <span class="token parameter">method</span> 执行的方法对象
     * <span class="token keyword">@param</span> <span class="token parameter">args</span>   方法参数
     */</span>
    <span class="token keyword">void</span> <span class="token function">after</span><span class="token punctuation">(</span><span class="token class-name">Object</span> bean<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 异常强化方法
     *
     * <span class="token keyword">@param</span> <span class="token parameter">bean</span>   bean实例（或者是被代理的bean）
     * <span class="token keyword">@param</span> <span class="token parameter">method</span> 执行的方法对象
     * <span class="token keyword">@param</span> <span class="token parameter">args</span>   方法参数
     */</span>
    <span class="token keyword">void</span> <span class="token function">exception</span><span class="token punctuation">(</span><span class="token class-name">Object</span> bean<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * Finally强化方法，出现异常也会执行
     *
     * <span class="token keyword">@param</span> <span class="token parameter">bean</span>   bean实例（或者是被代理的bean）
     * <span class="token keyword">@param</span> <span class="token parameter">method</span> 执行的方法对象
     * <span class="token keyword">@param</span> <span class="token parameter">args</span>   方法参数
     */</span>
    <span class="token keyword">void</span> <span class="token function">afterFinally</span><span class="token punctuation">(</span><span class="token class-name">Object</span> bean<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p>(2) 代理抽象类</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 定时任务名
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> superScheduledName<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 抽象的执行方法，使用代理实现
     * <span class="token keyword">@param</span> <span class="token parameter">runnable</span> 定时任务执行器
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">SuperScheduledRunnable</span> runnable<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">/* 普通的get/sets省略 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>(3) 调用链类</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Chain</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Point</span><span class="token punctuation">></span></span> list<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 索引自增1
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">incIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">++</span>index<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 索引还原
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">resetIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>index <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>(4) cglib动态代理实现</p>
<p>使用cglib代理增强器，将增强器全部代理成调用链节点Point</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RunnableBaseInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">MethodInterceptor</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 定时任务执行器
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">SuperScheduledRunnable</span> runnable<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 定时任务增强类
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">BaseStrengthen</span> strengthen<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">intercept</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">,</span> <span class="token class-name">MethodProxy</span> methodProxy<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>
        <span class="token class-name">Object</span> result<span class="token punctuation">;</span>
        <span class="token comment">//如果执行的是invoke()方法</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">"invoke"</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token comment">//前置强化方法</span>
            strengthen<span class="token punctuation">.</span><span class="token function">before</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> method<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
             <span class="token comment">//调用执行器中的invoke()方法</span>
                result <span class="token operator">=</span> runnable<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
             <span class="token comment">//异常强化方法</span>
                strengthen<span class="token punctuation">.</span><span class="token function">exception</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> method<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SuperScheduledException</span><span class="token punctuation">(</span>strengthen<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"中强化执行时发生错误"</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
             <span class="token comment">//Finally强化方法，出现异常也会执行</span>
                strengthen<span class="token punctuation">.</span><span class="token function">afterFinally</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> method<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//后置强化方法</span>
            strengthen<span class="token punctuation">.</span><span class="token function">after</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> method<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
         <span class="token comment">//直接执行方法</span>
            result <span class="token operator">=</span> methodProxy<span class="token punctuation">.</span><span class="token function">invokeSuper</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">RunnableBaseInterceptor</span><span class="token punctuation">(</span><span class="token class-name">Object</span> object<span class="token punctuation">,</span> <span class="token class-name">SuperScheduledRunnable</span> runnable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>runnable <span class="token operator">=</span> runnable<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">BaseStrengthen</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">isAssignableFrom</span><span class="token punctuation">(</span>object<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>strengthen <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">BaseStrengthen</span><span class="token punctuation">)</span> object<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SuperScheduledException</span><span class="token punctuation">(</span>object<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"对象不是BaseStrengthen类型"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">RunnableBaseInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><p>(5) 定时任务执行器实现</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SuperScheduledRunnable</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 原始的方法
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Method</span> method<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 方法所在的bean
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Object</span> bean<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 增强器的调用链
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Chain</span> chain<span class="token punctuation">;</span>


    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Object</span> result<span class="token punctuation">;</span>
        <span class="token comment">//索引自增1</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>chain<span class="token punctuation">.</span><span class="token function">incIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> chain<span class="token punctuation">.</span><span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//调用链中的增强方法已经全部执行结束</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token comment">//调用链索引初始化</span>
                chain<span class="token punctuation">.</span><span class="token function">resetIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//增强器全部执行完毕，执行原本的方法</span>
                result <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>bean<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IllegalAccessException</span> <span class="token operator">|</span> <span class="token class-name">InvocationTargetException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SuperScheduledException</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getLocalizedMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">//获取被代理后的方法增强器</span>
            <span class="token class-name">Point</span> point <span class="token operator">=</span> chain<span class="token punctuation">.</span><span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>chain<span class="token punctuation">.</span><span class="token function">getIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//执行增强器代理</span>
            <span class="token comment">//增强器代理中，会回调方法执行器，形成调用链，逐一运行调用链中的增强器</span>
            result <span class="token operator">=</span> point<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">/* 普通的get/sets省略 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br></div></div><p>(6) 增强器代理逻辑</p>
<p><code>com.gyx.superscheduled.core.SuperScheduledApplicationRunner</code>类中的代码片段</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//创建执行控制器</span>
<span class="token class-name">SuperScheduledRunnable</span> runnable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SuperScheduledRunnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
runnable<span class="token punctuation">.</span><span class="token function">setMethod</span><span class="token punctuation">(</span>scheduledSource<span class="token punctuation">.</span><span class="token function">getMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
runnable<span class="token punctuation">.</span><span class="token function">setBean</span><span class="token punctuation">(</span>scheduledSource<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//用来存放 增强器的代理对象</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Point</span><span class="token punctuation">></span></span> points <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>baseStrengthenBeanNames<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//循环所有的增强器的beanName</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> baseStrengthenBeanName <span class="token operator">:</span> baseStrengthenBeanNames<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token comment">//获取增强器的bean对象</span>
    <span class="token class-name">Object</span> baseStrengthenBean <span class="token operator">=</span> applicationContext<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span>baseStrengthenBeanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//将增强器代理成Point节点</span>
    <span class="token class-name">Point</span> proxy <span class="token operator">=</span> <span class="token class-name">ProxyUtils</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token class-name">Point</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">RunnableBaseInterceptor</span><span class="token punctuation">(</span>baseStrengthenBean<span class="token punctuation">,</span> runnable<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    proxy<span class="token punctuation">.</span><span class="token function">setSuperScheduledName</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//增强器的代理对象缓存到list中</span>
    points<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>proxy<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//将增强器代理实例的集合生成调用链</span>
<span class="token comment">//执行控制器中设置调用链</span>
runnable<span class="token punctuation">.</span><span class="token function">setChain</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Chain</span><span class="token punctuation">(</span>points<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div></template>
