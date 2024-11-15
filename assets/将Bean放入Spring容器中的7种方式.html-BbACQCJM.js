import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as i,a as e}from"./app-DWXdHMII.js";const l={};function p(t,n){return a(),i("div",null,n[0]||(n[0]=[e(`<h1 id="springboot-将-bean-放入-spring-容器中的-7-五-种方式" tabindex="-1"><a class="header-anchor" href="#springboot-将-bean-放入-spring-容器中的-7-五-种方式"><span>SpringBoot 将 Bean 放入 Spring 容器中的 7(五)种方式</span></a></h1><h2 id="更新-2022-年-3-月-23-日-11-25-11" tabindex="-1"><a class="header-anchor" href="#更新-2022-年-3-月-23-日-11-25-11"><span>更新：2022 年 3 月 23 日 11:25:11</span></a></h2><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><p>我们谈到 Spring 的时候一定会提到 IOC 容器、DI 依赖注入，Spring 通过将一个个类标注为 Bean 的方法注入到 IOC 容器中，达到了控制反转的效果。那么我们刚开始接触 Bean 的时候，一定是使用 xml 文件，一个一个的注入，就例如下面这样。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> &lt;bean id=&quot;bean&quot; class=&quot;beandemo.Bean&quot; /&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>我们的项目一般很大的话，就需要成千上百个 Bean 去使用，这样写起来就很繁琐。那么 Spring 就帮我们实现了一种通过注解来实现注入的方法。只需要在你需要注入的类前面加上相应的注解，Spring 就会帮助我们扫描到他们去实现注入。</p><blockquote><p>xml 扫描包的方式</p></blockquote><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> &lt;context:component-scan base-package=&quot;com.company.beandemo&quot;/&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="通过注解注入的一般形式" tabindex="-1"><a class="header-anchor" href="#通过注解注入的一般形式"><span>通过注解注入的一般形式</span></a></h2><p>一般情况下，注入 Bean 有一个最直白，最易懂的方式去实现注入，下面废话先不多说，先贴代码。</p><hr><ul><li>Bean 类</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> public class MyBean{</span></span>
<span class="line"><span> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Configuration 类</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> //创建一个class配置文件</span></span>
<span class="line"><span> @Configuration</span></span>
<span class="line"><span> public class MyConfiguration{</span></span>
<span class="line"><span>  //将一个Bean交由Spring进行管理</span></span>
<span class="line"><span>        @Bean</span></span>
<span class="line"><span>        public MyBean myBean(){</span></span>
<span class="line"><span>            return new MyBean();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Test 类</li></ul><p>与 xml 有一点不同，这里在 Test 中，实例化的不再是 ClassPathXmlApplicationContext，而是获取的 AnnotationConfigApplicationContext 实例。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> ApplicationContext context = new AnnotationConfigApplicationContext(MyConfiguration.class);</span></span>
<span class="line"><span> MyBean myBean = cotext.getBean(&quot;myBean&quot;,MyBean.class);</span></span>
<span class="line"><span> System.out.println(&quot;myBean = &quot; + myBean);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>上面的代码中 MyBean 也就是我们需要 Spring 去管理的一个 Bean，他只是一个简单的类。而 MyConfiguration 中，我们首先用@Configuration 注解去标记了该类，这样标明该类是一个 Spring 的一个配置类，在加载配置的时候会去加载他。</p><p>在 MyConfiguration 中我们可以看到有一个方法返回的是一个 MyBean 的实例，并且该方法上标注着@Bean 的注解，标明这是一个注入 Bean 的方法，会将下面的返回的 Bean 注入 IOC。</p><blockquote><p>基于微服务的思想，构建在 B2C 电商场景下的项目实战。核心技术栈，是 Spring Boot + Dubbo 。未来，会重构成 Spring Cloud Alibaba 。</p><p>项目地址：<a href="https://github.com/YunaiV/onemall" target="_blank" rel="noopener noreferrer">https://github.com/YunaiV/onemall</a></p></blockquote><h2 id="通过构造方法注入-bean" tabindex="-1"><a class="header-anchor" href="#通过构造方法注入-bean"><span>通过构造方法注入 Bean</span></a></h2><p>我们在生成一个 Bean 实例的时候，可以使用 Bean 的构造方法将 Bean 实现注入。直接看代码</p><hr><ul><li>Bean 类</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> @Component</span></span>
<span class="line"><span> public class MyBeanConstructor {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     private AnotherBean anotherBeanConstructor;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     @Autowired</span></span>
<span class="line"><span>     public MyBeanConstructor(AnotherBean anotherBeanConstructor){</span></span>
<span class="line"><span>         this.anotherBeanConstructor = anotherBeanConstructor;</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     @Override</span></span>
<span class="line"><span>     public String toString() {</span></span>
<span class="line"><span>         return &quot;MyBean{&quot; +</span></span>
<span class="line"><span>             &quot;anotherBeanConstructor=&quot; + anotherBeanConstructor +</span></span>
<span class="line"><span>             &#39;}&#39;;</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>AnotherBean 类</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> @Component(value=&quot;Bean的id，默认为类名小驼峰&quot;)</span></span>
<span class="line"><span> public class AnotherBean {</span></span>
<span class="line"><span> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Configuration 类</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> @Configuration</span></span>
<span class="line"><span> @ComponentScan(&quot;com.company.annotationbean&quot;)</span></span>
<span class="line"><span> public class MyConfiguration{</span></span>
<span class="line"><span> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>这里我们可以发现，和一般方式注入的代码不一样了，我们来看看新的注解都是什么意思：</p><ul><li>@AutoWired</li></ul><p>简单粗暴，直接翻译过来的意思就是自动装配🔧，还不理解为什么叫自动装配🔧？看了下一个注解的解释你就知道了。若是在这里注入的时候指定一个 Bean 的 id 就要使用@Qualifier 注解</p><ul><li>@Component（默认单例模式）</li></ul><p>什么？？这翻译过来是零件，怎么感觉像是修汽车？？是的，Spring 管理 Bean 的方法就是修汽车的方式。我们在需要将一个类变成一个 Bean 被 Spring 可以注入的时候加上注解零件@Conmonent，那么我们就可以在加载 Bean 的时候把他像零件一样装配🔧到这个 IOC 汽车上了</p><p>在这里我们还有几个其他的注解也可以实现这个功能，也就是细化的@Component：</p><ul><li>@Controller 标注在 Controller 层</li><li>@Service 标注在 Service 层</li><li>@Repository 标注在 dao 层</li></ul><p>还是翻译，零件扫描，我们去看看括号里的“零件仓库”里面，哪些“零件”（类）需要被装载，Spring 就会去扫描这个包，将里面所有标注了@Component 的类进行注入。</p><p>这里的通过构造方法进行注入就很好理解了，我们在装配 MyBean 这个零件的时候，突然发现他必须在 AnotherBean 的基础上才能安装到 IOC 里面，那么我们就在每次装配 MyBean 的时候自动装配🔧一个 AnotherBean 进去。举个🌰吧：</p><p>还是以汽车为例，我们在踩油门出发之前，是不是必须发车？？这里的 AutoWired 的内容就像发车，你不发车，这个油门你踩断都没有用，他都不会走。</p><h2 id="通过-set-方法注入-bean" tabindex="-1"><a class="header-anchor" href="#通过-set-方法注入-bean"><span>通过 set 方法注入 Bean</span></a></h2><p>我们可以在一个属性的 set 方法中去将 Bean 实现注入，看代码吧</p><hr><ul><li>MyBean 类</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> @Component</span></span>
<span class="line"><span> public class MyBeanSet {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     private AnotherBean anotherBeanSet;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     @Autowired</span></span>
<span class="line"><span>     public void setAnotherBeanSet(AnotherBean anotherBeanSet) {</span></span>
<span class="line"><span>         this.anotherBeanSet = anotherBeanSet;</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     @Override</span></span>
<span class="line"><span>     public String toString() {</span></span>
<span class="line"><span>         return &quot;MyBeanSet{&quot; +</span></span>
<span class="line"><span>             &quot;anotherBeanSet=&quot; + anotherBeanSet +</span></span>
<span class="line"><span>             &#39;}&#39;;</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Configuration 类 和 Test 类</li></ul><p>同上一个，就不贴了</p><hr><p>这里我们发现在 setter 方法上我们有一个@AutoWired,与上面不同的是，我们不会在实例化该类时就自动装配🔧这个对象，而是在显式调用 setter 的时候去装配。</p><h2 id="通过属性去注入-bean" tabindex="-1"><a class="header-anchor" href="#通过属性去注入-bean"><span>通过属性去注入 Bean</span></a></h2><p>我们前面两种注入的方式诸如时间不同，并且代码较多，若是通过属性，即就是</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> @Component</span></span>
<span class="line"><span> public class MyBeanProperty {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     @Autowired</span></span>
<span class="line"><span>     private AnotherBean anotherBeanProperty;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     @Override</span></span>
<span class="line"><span>     public String toString() {</span></span>
<span class="line"><span>         return &quot;MyBeanProperty{&quot; +</span></span>
<span class="line"><span>             &quot;anotherBeanProperty=&quot; + anotherBeanProperty +</span></span>
<span class="line"><span>             &#39;}&#39;;</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们可以看到我们这个类中需要使用 AnotherBean 这个实例对象，我们可以通过@AutoWired 去自动装配它。</p><blockquote><p>对于有些小伙伴问私有属性，Spring 怎么去加载它到 IOC 的？推荐去看看反射</p></blockquote><h2 id="通过-list-注入-bean" tabindex="-1"><a class="header-anchor" href="#通过-list-注入-bean"><span>通过 List 注入 Bean</span></a></h2><ul><li>MyBeanList 类</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> @Component</span></span>
<span class="line"><span> public class MyBeanList {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     private List&lt;String&gt; stringList;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     @Autowired</span></span>
<span class="line"><span>     public void setStringList(List&lt;String&gt; stringList) {</span></span>
<span class="line"><span>         this.stringList = stringList;</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     public List&lt;String&gt; getStringList() {</span></span>
<span class="line"><span>         return stringList;</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MyConfiguration 类</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> @Configuration</span></span>
<span class="line"><span> @ComponentScan(&quot;annoBean.annotationbean&quot;)</span></span>
<span class="line"><span> public class MyConfiguration {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     @Bean</span></span>
<span class="line"><span>     public List&lt;String&gt; stringList(){</span></span>
<span class="line"><span>        List&lt;String&gt; stringList = new ArrayList&lt;String&gt;();</span></span>
<span class="line"><span>         stringList.add(&quot;List-1&quot;);</span></span>
<span class="line"><span>         stringList.add(&quot;List-2&quot;);</span></span>
<span class="line"><span>         return stringList;</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们将 MyBeanList 进行了注入，对 List 中的元素会逐一注入。下面介绍另一种方式注入 List</p><ul><li>MyConfiguration 类</li></ul><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> @Bean</span></span>
<span class="line"><span>    //通过该注解设定Bean注入的优先级，不一定连续数字</span></span>
<span class="line"><span>    @Order(34)</span></span>
<span class="line"><span>    public String string1(){</span></span>
<span class="line"><span>        return &quot;String-1&quot;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    @Order(14)</span></span>
<span class="line"><span>    public String string2(){</span></span>
<span class="line"><span>        return &quot;String-2&quot;;</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注入与 List 中泛型一样的类型，会自动去匹配类型，及时这里没有任何 List 的感觉，只是 String 的类型，但他会去通过 List 的 Bean 的方式去注入。</p><blockquote><p>第二种方式的优先级高于第一种，当两个都存在的时候，若要强制去使用第一种方式，则要去指定 Bean 的 id 即可</p></blockquote><h2 id="通过-map-去注入-bean" tabindex="-1"><a class="header-anchor" href="#通过-map-去注入-bean"><span>通过 Map 去注入 Bean</span></a></h2><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span> @Component</span></span>
<span class="line"><span> public class MyBeanMap {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     private Map&lt;String,Integer&gt; integerMap;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     public Map&lt;String, Integer&gt; getIntegerMap() {</span></span>
<span class="line"><span>         return integerMap;</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>     @Autowired</span></span>
<span class="line"><span>     public void setIntegerMap(Map&lt;String, Integer&gt; integerMap) {</span></span>
<span class="line"><span>         this.integerMap = integerMap;</span></span>
<span class="line"><span>     }</span></span>
<span class="line"><span> }</span></span>
<span class="line"><span></span></span>
<span class="line"><span> @Bean</span></span>
<span class="line"><span>    public Map&lt;String,Integer&gt; integerMap(){</span></span>
<span class="line"><span>        Map&lt;String,Integer&gt; integerMap = new HashMap&lt;String, Integer&gt;();</span></span>
<span class="line"><span>        integerMap.put(&quot;map-1&quot;,1);</span></span>
<span class="line"><span>        integerMap.put(&quot;map-2&quot;,2);</span></span>
<span class="line"><span>        return integerMap;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public Integer integer1(){</span></span>
<span class="line"><span>        return 1;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public Integer integer2(){</span></span>
<span class="line"><span>        return 2;</span></span>
<span class="line"><span>    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样这里也具有两种方式去注入 Map 类型 Bean，且第二种的优先值高于第一种</p><p>以上就是 Bean 通过注解注入的几种方式，大家可以对比着 xml 注入的方式去看。</p><h2 id="_2022-02-12" tabindex="-1"><a class="header-anchor" href="#_2022-02-12"><span>2022-02-12</span></a></h2><h2 id="_1、-configuration-bean" tabindex="-1"><a class="header-anchor" href="#_1、-configuration-bean"><span>1、@Configuration + @Bean</span></a></h2><p>这种方式其实，在上一篇文章已经介绍过了，也是我们最常用的一种方式，@Configuration 用来声明一个配置类，然后使用 @Bean 注解，用于声明一个 bean，将其加入到 Spring 容器中。具体代码如下:</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class MyConfiguration {</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public Person person() {</span></span>
<span class="line"><span>        Person person = new Person();</span></span>
<span class="line"><span>        person.setName(&quot;spring&quot;);</span></span>
<span class="line"><span>        return person;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、-componet-componentscan" tabindex="-1"><a class="header-anchor" href="#_2、-componet-componentscan"><span>2、@Componet + @ComponentScan</span></a></h2><p>这种方式也是我们用的比较多的方式，@Componet 中文译为组件，放在类名上面，然后@ComponentScan 放置在我们的配置类上，然后可以指定一个路径，进行扫描带有@Componet 注解的 bean，然后加至容器中。具体代码如下:</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Component</span></span>
<span class="line"><span>public class Person {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getName() {</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>        return name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public void setName(String name) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public String toString() {</span></span>
<span class="line"><span>        return &quot;Person{&quot; +</span></span>
<span class="line"><span>                &quot;name=&#39;&quot; + name + &#39;\\&#39;&#39; +</span></span>
<span class="line"><span>                &#39;}&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@ComponentScan(basePackages = &quot;com.springboot.initbean.*&quot;)</span></span>
<span class="line"><span>public class Demo1 {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(Demo1.class);</span></span>
<span class="line"><span>        Person bean = applicationContext.getBean(Person.class);</span></span>
<span class="line"><span>        System.out.println(bean);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果输出:</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Person{name=&#39;null&#39;}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>表示成功将 Person 放置在了 IOC 容器中。</p><h2 id="_3、-import-注解导入" tabindex="-1"><a class="header-anchor" href="#_3、-import-注解导入"><span>3、@Import 注解导入</span></a></h2><p>前两种方式，大家用的可能比较多，也是平时开发中必须要知道的，@Import 注解用的可能不是特别多了，但是也是非常重要的，在进行 Spring 扩展时经常会用到，它经常搭配自定义注解进行使用，然后往容器中导入一个配置文件。关于@Import 注解，我会多介绍一点，它有四种使用方式。这是@Import 注解的源码，表示只能放置在类上。</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Target(ElementType.TYPE)</span></span>
<span class="line"><span>@Retention(RetentionPolicy.RUNTIME)</span></span>
<span class="line"><span>@Documented</span></span>
<span class="line"><span>public @interface Import {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>   * 用于导入一个class文件</span></span>
<span class="line"><span>     * {@link Configuration @Configuration}, {@link ImportSelector},</span></span>
<span class="line"><span>     * {@link ImportBeanDefinitionRegistrar}, or regular component classes to import.</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    Class&lt;?&gt;[] value();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-import-直接导入类" tabindex="-1"><a class="header-anchor" href="#_3-1-import-直接导入类"><span>3.1 @Import 直接导入类</span></a></h3><p>代码示例如下:</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public class Person {</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public String getName() {</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>        return name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>    public void setName(String name) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public String toString() {</span></span>
<span class="line"><span>        return &quot;Person{&quot; +</span></span>
<span class="line"><span>                &quot;name=&#39;&quot; + name + &#39;\\&#39;&#39; +</span></span>
<span class="line"><span>                &#39;}&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>/**</span></span>
<span class="line"><span>* 直接使用@Import导入person类，然后尝试从applicationContext中取，成功拿到</span></span>
<span class="line"><span>**/</span></span>
<span class="line"><span>@Import(Person.class)</span></span>
<span class="line"><span>public class Demo1 {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(Demo1.class);</span></span>
<span class="line"><span>        Person bean = applicationContext.getBean(Person.class);</span></span>
<span class="line"><span>        System.out.println(bean);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码直接使用@Import 导入了一个类，然后自动的就被放置在 IOC 容器中了。注意 我们的 Person 类上 就不需要任何的注解了，直接导入即可。</p><h3 id="_3-2-import-importselector" tabindex="-1"><a class="header-anchor" href="#_3-2-import-importselector"><span>3.2 @Import + ImportSelector</span></a></h3><p>其实在@Import 注解的源码中，说的已经很清楚了，感兴趣的可以看下，我们实现一个 ImportSelector 的接口，然后实现其中的方法，进行导入。</p><p>代码如下:</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Import(MyImportSelector.class)</span></span>
<span class="line"><span>public class Demo1 {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(Demo1.class);</span></span>
<span class="line"><span>        Person bean = applicationContext.getBean(Person.class);</span></span>
<span class="line"><span>        System.out.println(bean);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class MyImportSelector implements ImportSelector {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public String[] selectImports(AnnotationMetadata importingClassMetadata) {</span></span>
<span class="line"><span>        return new String[]{&quot;com.springboot.pojo.Person&quot;};</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我自定义了一个 MyImportSelector 实现了 ImportSelector 接口，重写 selectImports 方法，然后将我们要导入的类的全限定名写在里面即可，实现起来也是非常简单。</p><h3 id="_3-3-import-importbeandefinitionregistrar" tabindex="-1"><a class="header-anchor" href="#_3-3-import-importbeandefinitionregistrar"><span>3.3 @Import + ImportBeanDefinitionRegistrar</span></a></h3><p>这种方式也需要我们实现 ImportBeanDefinitionRegistrar 接口中的方法，具体代码如下:</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Import(MyImportBeanDefinitionRegistrar.class)</span></span>
<span class="line"><span>public class Demo1 {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(Demo1.class);</span></span>
<span class="line"><span>        Person bean = applicationContext.getBean(Person.class);</span></span>
<span class="line"><span>        System.out.println(bean);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class MyImportBeanDefinitionRegistrar implements ImportBeanDefinitionRegistrar {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void registerBeanDefinitions(AnnotationMetadata importingClassMetadata, BeanDefinitionRegistry registry) {</span></span>
<span class="line"><span>        // 构建一个beanDefinition, 关于beanDefinition我后续会介绍，可以简单理解为bean的定义.</span></span>
<span class="line"><span>        AbstractBeanDefinition beanDefinition = BeanDefinitionBuilder.rootBeanDefinition(Person.class).getBeanDefinition();</span></span>
<span class="line"><span>        // 将beanDefinition注册到Ioc容器中.</span></span>
<span class="line"><span>        registry.registerBeanDefinition(&quot;person&quot;, beanDefinition);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述实现其实和 Import 的第二种方式差不多，都需要去实现接口，然后进行导入。接触到了一个新的概念，BeanDefinition，可以简单理解为 bean 的定义(bean 的元数据)，也是需要放在 IOC 容器中进行管理的，先有 bean 的元数据，applicationContext 再根据 bean 的元数据去创建 Bean。</p><h3 id="_3-4-import-deferredimportselector" tabindex="-1"><a class="header-anchor" href="#_3-4-import-deferredimportselector"><span>3.4 @Import + DeferredImportSelector</span></a></h3><p>这种方式也需要我们进行实现接口，其实它和@Import 的第二种方式差不多，DeferredImportSelector 它是 ImportSelector 的子接口，所以实现的方法和第二种无异。只是 Spring 的处理方式不同，它和 Spring Boot 中的自动导入配置文件 延迟导入有关，非常重要。使用方式如下:</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Import(MyDeferredImportSelector.class)</span></span>
<span class="line"><span>public class Demo1 {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(Demo1.class);</span></span>
<span class="line"><span>        Person bean = applicationContext.getBean(Person.class);</span></span>
<span class="line"><span>        System.out.println(bean);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>class MyDeferredImportSelector implements DeferredImportSelector {</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public String[] selectImports(AnnotationMetadata importingClassMetadata) {</span></span>
<span class="line"><span>        // 也是直接将Person的全限定名放进去</span></span>
<span class="line"><span>        return new String[]{Person.class.getName()};</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于@Import 注解的使用方式，大概就以上三种，当然它还可以搭配@Configuration 注解使用，用于导入一个配置类。</p><h2 id="_4、使用-factorybean-接口" tabindex="-1"><a class="header-anchor" href="#_4、使用-factorybean-接口"><span>4、使用 FactoryBean 接口</span></a></h2><p>FactoryBean 接口和 BeanFactory 千万不要弄混了，从名字其实可以大概的区分开，FactoryBean, 后缀为 bean，那么它其实就是一个 bean, BeanFactory，顾名思义 bean 工厂，它是 IOC 容器的顶级接口，这俩接口都很重要。代码示例:</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>@Configuration</span></span>
<span class="line"><span>public class Demo1 {</span></span>
<span class="line"><span>    @Bean</span></span>
<span class="line"><span>    public PersonFactoryBean personFactoryBean() {</span></span>
<span class="line"><span>        return new PersonFactoryBean();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(Demo1.class);</span></span>
<span class="line"><span>        Person bean = applicationContext.getBean(Person.class);</span></span>
<span class="line"><span>        System.out.println(bean);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class PersonFactoryBean implements FactoryBean&lt;Person&gt; {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     *  直接new出来Person进行返回.</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public Person getObject() throws Exception {</span></span>
<span class="line"><span>        return new Person();</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    /**</span></span>
<span class="line"><span>     *  指定返回bean的类型.</span></span>
<span class="line"><span>     */</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public Class&lt;?&gt; getObjectType() {</span></span>
<span class="line"><span>        return Person.class;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码，我使用@Configuration + @Bean 的方式将 PersonFactoryBean 加入到容器中，注意，我没有向容器中注入 Person, 而是直接注入的 PersonFactoryBean 然后从容器中拿 Person 这个类型的 bean,成功运行。</p><h2 id="_5、使用-beandefinitionregistrypostprocessor" tabindex="-1"><a class="header-anchor" href="#_5、使用-beandefinitionregistrypostprocessor"><span>5、使用 BeanDefinitionRegistryPostProcessor</span></a></h2><p>其实这种方式也是利用到了 BeanDefinitionRegistry，在 Spring 容器启动的时候会执行 BeanDefinitionRegistryPostProcessor 的 postProcessBeanDefinitionRegistry 方法，大概意思就是等 beanDefinition 加载完毕之后，对 beanDefinition 进行后置处理，可以在此进行调整 IOC 容器中的 beanDefinition，从而干扰到后面进行初始化 bean。</p><p>具体代码如下:</p><div class="language-plain line-numbers-mode" data-highlighter="shiki" data-ext="plain" data-title="plain" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>public class Demo1 {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span>        AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext();</span></span>
<span class="line"><span>        MyBeanDefinitionRegistryPostProcessor beanDefinitionRegistryPostProcessor = new MyBeanDefinitionRegistryPostProcessor();</span></span>
<span class="line"><span>        applicationContext.addBeanFactoryPostProcessor(beanDefinitionRegistryPostProcessor);</span></span>
<span class="line"><span>        applicationContext.refresh();</span></span>
<span class="line"><span>        Person bean = applicationContext.getBean(Person.class);</span></span>
<span class="line"><span>        System.out.println(bean);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class MyBeanDefinitionRegistryPostProcessor implements BeanDefinitionRegistryPostProcessor {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void postProcessBeanDefinitionRegistry(BeanDefinitionRegistry registry) throws BeansException {</span></span>
<span class="line"><span>        AbstractBeanDefinition beanDefinition = BeanDefinitionBuilder.rootBeanDefinition(Person.class).getBeanDefinition();</span></span>
<span class="line"><span>        registry.registerBeanDefinition(&quot;person&quot;, beanDefinition);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public void postProcessBeanFactory(ConfigurableListableBeanFactory beanFactory) throws BeansException {</span></span>
<span class="line"><span>     </span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，我们手动向 beanDefinitionRegistry 中注册了 person 的 BeanDefinition。最终成功将 person 加入到 applicationContext 中，上述的几种方式的具体原理，我后面会进行介绍。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p>向 spring 容器中加入 bean 的几种方式.</p><p>@Configuration + @Bean</p><p>@ComponentScan + @Component</p><p>@Import 配合接口进行导入</p><p>使用 FactoryBean。</p><p>实现 BeanDefinitionRegistryPostProcessor 进行后置处理。</p>`,116)]))}const d=s(l,[["render",p],["__file","将Bean放入Spring容器中的7种方式.html.vue"]]),o=JSON.parse('{"path":"/dev/%E5%B0%86Bean%E6%94%BE%E5%85%A5Spring%E5%AE%B9%E5%99%A8%E4%B8%AD%E7%9A%847%E7%A7%8D%E6%96%B9%E5%BC%8F.html","title":"SpringBoot将Bean放入Spring容器中的五种方式","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"SpringBoot将Bean放入Spring容器中的五种方式","excerpt":null,"description":"SpringBoot将Bean放入Spring容器中的五种方式","date":"2022-02-12T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"type","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/%E5%B0%86Bean%E6%94%BE%E5%85%A5Spring%E5%AE%B9%E5%99%A8%E4%B8%AD%E7%9A%847%E7%A7%8D%E6%96%B9%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"SpringBoot将Bean放入Spring容器中的五种方式"}],["meta",{"property":"og:description","content":"SpringBoot将Bean放入Spring容器中的五种方式"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2022-02-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SpringBoot将Bean放入Spring容器中的五种方式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-02-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"更新：2022 年 3 月 23 日 11:25:11","slug":"更新-2022-年-3-月-23-日-11-25-11","link":"#更新-2022-年-3-月-23-日-11-25-11","children":[]},{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"通过注解注入的一般形式","slug":"通过注解注入的一般形式","link":"#通过注解注入的一般形式","children":[]},{"level":2,"title":"通过构造方法注入 Bean","slug":"通过构造方法注入-bean","link":"#通过构造方法注入-bean","children":[]},{"level":2,"title":"通过 set 方法注入 Bean","slug":"通过-set-方法注入-bean","link":"#通过-set-方法注入-bean","children":[]},{"level":2,"title":"通过属性去注入 Bean","slug":"通过属性去注入-bean","link":"#通过属性去注入-bean","children":[]},{"level":2,"title":"通过 List 注入 Bean","slug":"通过-list-注入-bean","link":"#通过-list-注入-bean","children":[]},{"level":2,"title":"通过 Map 去注入 Bean","slug":"通过-map-去注入-bean","link":"#通过-map-去注入-bean","children":[]},{"level":2,"title":"2022-02-12","slug":"_2022-02-12","link":"#_2022-02-12","children":[]},{"level":2,"title":"1、@Configuration + @Bean","slug":"_1、-configuration-bean","link":"#_1、-configuration-bean","children":[]},{"level":2,"title":"2、@Componet + @ComponentScan","slug":"_2、-componet-componentscan","link":"#_2、-componet-componentscan","children":[]},{"level":2,"title":"3、@Import 注解导入","slug":"_3、-import-注解导入","link":"#_3、-import-注解导入","children":[{"level":3,"title":"3.1 @Import 直接导入类","slug":"_3-1-import-直接导入类","link":"#_3-1-import-直接导入类","children":[]},{"level":3,"title":"3.2 @Import + ImportSelector","slug":"_3-2-import-importselector","link":"#_3-2-import-importselector","children":[]},{"level":3,"title":"3.3 @Import + ImportBeanDefinitionRegistrar","slug":"_3-3-import-importbeandefinitionregistrar","link":"#_3-3-import-importbeandefinitionregistrar","children":[]},{"level":3,"title":"3.4 @Import + DeferredImportSelector","slug":"_3-4-import-deferredimportselector","link":"#_3-4-import-deferredimportselector","children":[]}]},{"level":2,"title":"4、使用 FactoryBean 接口","slug":"_4、使用-factorybean-接口","link":"#_4、使用-factorybean-接口","children":[]},{"level":2,"title":"5、使用 BeanDefinitionRegistryPostProcessor","slug":"_5、使用-beandefinitionregistrypostprocessor","link":"#_5、使用-beandefinitionregistrypostprocessor","children":[]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]}],"git":{"createdTime":1647698494000,"updatedTime":1714224756000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":2},{"name":"xlc","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":10.96,"words":3289},"filePathRelative":"dev/将Bean放入Spring容器中的7种方式.md","localizedDate":"2022年2月12日","excerpt":"\\n<h2>更新：2022 年 3 月 23 日 11:25:11</h2>\\n<h2>背景</h2>\\n<p>我们谈到 Spring 的时候一定会提到 IOC 容器、DI 依赖注入，Spring 通过将一个个类标注为 Bean 的方法注入到 IOC\\n容器中，达到了控制反转的效果。那么我们刚开始接触 Bean 的时候，一定是使用 xml 文件，一个一个的注入，就例如下面这样。</p>"}');export{d as comp,o as data};
