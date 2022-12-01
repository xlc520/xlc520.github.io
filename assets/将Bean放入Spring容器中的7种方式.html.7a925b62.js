import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as l,a as n,b as e,e as t,d as i,r as d}from"./app.8f077891.js";const o={},v=i(`<h1 id="springboot将bean放入spring容器中的7-五-种方式" tabindex="-1"><a class="header-anchor" href="#springboot将bean放入spring容器中的7-五-种方式" aria-hidden="true">#</a> SpringBoot将Bean放入Spring容器中的7(五)种方式</h1><h2 id="更新-2022年3月23日11-25-11" tabindex="-1"><a class="header-anchor" href="#更新-2022年3月23日11-25-11" aria-hidden="true">#</a> 更新：2022年3月23日11:25:11</h2><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2><p>我们谈到Spring的时候一定会提到IOC容器、DI依赖注入，Spring通过将一个个类标注为Bean的方法注入到IOC容器中，达到了控制反转的效果。那么我们刚开始接触Bean的时候，一定是使用xml文件，一个一个的注入，就例如下面这样。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &lt;bean id=&quot;bean&quot; class=&quot;beandemo.Bean&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们的项目一般很大的话，就需要成千上百个Bean去使用，这样写起来就很繁琐。那么Spring就帮我们实现了一种通过注解来实现注入的方法。只需要在你需要注入的类前面加上相应的注解，Spring就会帮助我们扫描到他们去实现注入。</p><blockquote><p>xml扫描包的方式</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &lt;context:component-scan base-package=&quot;com.company.beandemo&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="通过注解注入的一般形式" tabindex="-1"><a class="header-anchor" href="#通过注解注入的一般形式" aria-hidden="true">#</a> 通过注解注入的一般形式</h2><p>一般情况下，注入Bean有一个最直白，最易懂的方式去实现注入，下面废话先不多说，先贴代码。</p><hr><ul><li>Bean类</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> public class MyBean{
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Configuration类</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> //创建一个class配置文件
 @Configuration
 public class MyConfiguration{
  //将一个Bean交由Spring进行管理
        @Bean
        public MyBean myBean(){
            return new MyBean();
        }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Test类</li></ul><p>与xml有一点不同，这里在Test中，实例化的不再是ClassPathXmlApplicationContext，而是获取的AnnotationConfigApplicationContext实例。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> ApplicationContext context = new AnnotationConfigApplicationContext(MyConfiguration.class);
 MyBean myBean = cotext.getBean(&quot;myBean&quot;,MyBean.class);
 System.out.println(&quot;myBean = &quot; + myBean);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>上面的代码中MyBean也就是我们需要Spring去管理的一个Bean，他只是一个简单的类。而MyConfiguration中，我们首先用@Configuration注解去标记了该类，这样标明该类是一个Spring的一个配置类，在加载配置的时候会去加载他。</p><p>在MyConfiguration中我们可以看到有一个方法返回的是一个MyBean的实例，并且该方法上标注着@Bean的注解，标明这是一个注入Bean的方法，会将下面的返回的Bean注入IOC。</p>`,21),c=n("p",null,"基于微服务的思想，构建在 B2C 电商场景下的项目实战。核心技术栈，是 Spring Boot + Dubbo 。未来，会重构成 Spring Cloud Alibaba 。",-1),u={href:"https://github.com/YunaiV/onemall",target:"_blank",rel:"noopener noreferrer"},m=i(`<h2 id="通过构造方法注入bean" tabindex="-1"><a class="header-anchor" href="#通过构造方法注入bean" aria-hidden="true">#</a> 通过构造方法注入Bean</h2><p>我们在生成一个Bean实例的时候，可以使用Bean的构造方法将Bean实现注入。直接看代码</p><hr><ul><li>Bean类</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> @Component
 public class MyBeanConstructor {

     private AnotherBean anotherBeanConstructor;

     @Autowired
     public MyBeanConstructor(AnotherBean anotherBeanConstructor){
         this.anotherBeanConstructor = anotherBeanConstructor;
     }

     @Override
     public String toString() {
         return &quot;MyBean{&quot; +
             &quot;anotherBeanConstructor=&quot; + anotherBeanConstructor +
             &#39;}&#39;;
     }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>AnotherBean类</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> @Component(value=&quot;Bean的id，默认为类名小驼峰&quot;)
 public class AnotherBean {
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Configuration类</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> @Configuration
 @ComponentScan(&quot;com.company.annotationbean&quot;)
 public class MyConfiguration{
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>这里我们可以发现，和一般方式注入的代码不一样了，我们来看看新的注解都是什么意思：</p><ul><li>@AutoWired</li></ul><p>简单粗暴，直接翻译过来的意思就是自动装配🔧，还不理解为什么叫自动装配🔧？看了下一个注解的解释你就知道了。若是在这里注入的时候指定一个Bean的id就要使用@Qualifier注解</p><ul><li>@Component（默认单例模式）</li></ul><p>什么？？这翻译过来是零件，怎么感觉像是修汽车？？是的，Spring管理Bean的方法就是修汽车的方式。我们在需要将一个类变成一个Bean被Spring可以注入的时候加上注解零件@Conmonent，那么我们就可以在加载Bean的时候把他像零件一样装配🔧到这个IOC汽车上了</p><p>在这里我们还有几个其他的注解也可以实现这个功能，也就是细化的@Component：</p><ul><li>@Controller 标注在Controller层</li><li>@Service 标注在Service层</li><li>@Repository 标注在dao层</li></ul><p>还是翻译，零件扫描，我们去看看括号里的“零件仓库”里面，哪些“零件”（类）需要被装载，Spring就会去扫描这个包，将里面所有标注了@Component的类进行注入。</p><p>这里的通过构造方法进行注入就很好理解了，我们在装配MyBean这个零件的时候，突然发现他必须在AnotherBean的基础上才能安装到IOC里面，那么我们就在每次装配MyBean的时候自动装配🔧一个AnotherBean进去。举个🌰吧：</p><p>还是以汽车为例，我们在踩油门出发之前，是不是必须发车？？这里的AutoWired的内容就像发车，你不发车，这个油门你踩断都没有用，他都不会走。</p><h2 id="通过set方法注入bean" tabindex="-1"><a class="header-anchor" href="#通过set方法注入bean" aria-hidden="true">#</a> 通过set方法注入Bean</h2><p>我们可以在一个属性的set方法中去将Bean实现注入，看代码吧</p><hr><ul><li>MyBean类</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> @Component
 public class MyBeanSet {

     private AnotherBean anotherBeanSet;

     @Autowired
     public void setAnotherBeanSet(AnotherBean anotherBeanSet) {
         this.anotherBeanSet = anotherBeanSet;
     }

     @Override
     public String toString() {
         return &quot;MyBeanSet{&quot; +
             &quot;anotherBeanSet=&quot; + anotherBeanSet +
             &#39;}&#39;;
     }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Configuration类 和 Test类</li></ul><p>同上一个，就不贴了</p><hr><p>这里我们发现在setter方法上我们有一个@AutoWired,与上面不同的是，我们不会在实例化该类时就自动装配🔧这个对象，而是在显式调用setter的时候去装配。</p><h2 id="通过属性去注入bean" tabindex="-1"><a class="header-anchor" href="#通过属性去注入bean" aria-hidden="true">#</a> 通过属性去注入Bean</h2><p>我们前面两种注入的方式诸如时间不同，并且代码较多，若是通过属性，即就是</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> @Component
 public class MyBeanProperty {

     @Autowired
     private AnotherBean anotherBeanProperty;

     @Override
     public String toString() {
         return &quot;MyBeanProperty{&quot; +
             &quot;anotherBeanProperty=&quot; + anotherBeanProperty +
             &#39;}&#39;;
     }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们可以看到我们这个类中需要使用AnotherBean这个实例对象，我们可以通过@AutoWired去自动装配它。</p><blockquote><p>对于有些小伙伴问私有属性，Spring怎么去加载它到IOC的？推荐去看看反射</p></blockquote><h2 id="通过list注入bean" tabindex="-1"><a class="header-anchor" href="#通过list注入bean" aria-hidden="true">#</a> 通过List注入Bean</h2><ul><li>MyBeanList类</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> @Component
 public class MyBeanList {

     private List&lt;String&gt; stringList;

     @Autowired
     public void setStringList(List&lt;String&gt; stringList) {
         this.stringList = stringList;
     }

     public List&lt;String&gt; getStringList() {
         return stringList;
     }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MyConfiguration类</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> @Configuration
 @ComponentScan(&quot;annoBean.annotationbean&quot;)
 public class MyConfiguration {

     @Bean
     public List&lt;String&gt; stringList(){
        List&lt;String&gt; stringList = new ArrayList&lt;String&gt;();
         stringList.add(&quot;List-1&quot;);
         stringList.add(&quot;List-2&quot;);
         return stringList;
     }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们将MyBeanList进行了注入，对List中的元素会逐一注入。下面介绍另一种方式注入List</p><ul><li>MyConfiguration类</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> @Bean
    //通过该注解设定Bean注入的优先级，不一定连续数字
    @Order(34)
    public String string1(){
        return &quot;String-1&quot;;
    }

    @Bean
    @Order(14)
    public String string2(){
        return &quot;String-2&quot;;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注入与List中泛型一样的类型，会自动去匹配类型，及时这里没有任何List的感觉，只是String的类型，但他会去通过List的Bean的方式去注入。</p><blockquote><p>第二种方式的优先级高于第一种，当两个都存在的时候，若要强制去使用第一种方式，则要去指定Bean的id即可</p></blockquote><h2 id="通过map去注入bean" tabindex="-1"><a class="header-anchor" href="#通过map去注入bean" aria-hidden="true">#</a> 通过Map去注入Bean</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> @Component
 public class MyBeanMap {

     private Map&lt;String,Integer&gt; integerMap;

     public Map&lt;String, Integer&gt; getIntegerMap() {
         return integerMap;
     }

     @Autowired
     public void setIntegerMap(Map&lt;String, Integer&gt; integerMap) {
         this.integerMap = integerMap;
     }
 }

 @Bean
    public Map&lt;String,Integer&gt; integerMap(){
        Map&lt;String,Integer&gt; integerMap = new HashMap&lt;String, Integer&gt;();
        integerMap.put(&quot;map-1&quot;,1);
        integerMap.put(&quot;map-2&quot;,2);
        return integerMap;
    }

    @Bean
    public Integer integer1(){
        return 1;
    }

    @Bean
    public Integer integer2(){
        return 2;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同样这里也具有两种方式去注入Map类型Bean，且第二种的优先值高于第一种</p><p>以上就是Bean通过注解注入的几种方式，大家可以对比着xml注入的方式去看。</p><h2 id="_2022-02-12" tabindex="-1"><a class="header-anchor" href="#_2022-02-12" aria-hidden="true">#</a> 2022-02-12</h2><h2 id="_1、-configuration-bean" tabindex="-1"><a class="header-anchor" href="#_1、-configuration-bean" aria-hidden="true">#</a> 1、@Configuration + @Bean</h2><p>这种方式其实，在上一篇文章已经介绍过了，也是我们最常用的一种方式，@Configuration用来声明一个配置类，然后使用 @Bean 注解，用于声明一个bean，将其加入到Spring容器中。具体代码如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Configuration
public class MyConfiguration {
    @Bean
    public Person person() {
        Person person = new Person();
        person.setName(&quot;spring&quot;);
        return person;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、-componet-componentscan" tabindex="-1"><a class="header-anchor" href="#_2、-componet-componentscan" aria-hidden="true">#</a> 2、@Componet + @ComponentScan</h2><p>这种方式也是我们用的比较多的方式，@Componet中文译为组件，放在类名上面，然后@ComponentScan放置在我们的配置类上，然后可以指定一个路径，进行扫描带有@Componet注解的bean，然后加至容器中。具体代码如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Component
public class Person {
    private String name;

    public String getName() {
     
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    @Override
    public String toString() {
        return &quot;Person{&quot; +
                &quot;name=&#39;&quot; + name + &#39;\\&#39;&#39; +
                &#39;}&#39;;
    }
}

@ComponentScan(basePackages = &quot;com.springboot.initbean.*&quot;)
public class Demo1 {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(Demo1.class);
        Person bean = applicationContext.getBean(Person.class);
        System.out.println(bean);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果输出:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Person{name=&#39;null&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>表示成功将Person放置在了IOC容器中。</p><h2 id="_3、-import注解导入" tabindex="-1"><a class="header-anchor" href="#_3、-import注解导入" aria-hidden="true">#</a> 3、@Import注解导入</h2><p>前两种方式，大家用的可能比较多，也是平时开发中必须要知道的，@Import注解用的可能不是特别多了，但是也是非常重要的，在进行Spring扩展时经常会用到，它经常搭配自定义注解进行使用，然后往容器中导入一个配置文件。关于@Import注解，我会多介绍一点，它有四种使用方式。这是@Import注解的源码，表示只能放置在类上。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface Import {

    /**
   * 用于导入一个class文件
     * {@link Configuration @Configuration}, {@link ImportSelector},
     * {@link ImportBeanDefinitionRegistrar}, or regular component classes to import.
     */

    Class&lt;?&gt;[] value();

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-import直接导入类" tabindex="-1"><a class="header-anchor" href="#_3-1-import直接导入类" aria-hidden="true">#</a> 3.1 @Import直接导入类</h3><p>代码示例如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Person {
    private String name;

    public String getName() {
     
        return name;
    }
     
    public void setName(String name) {
        this.name = name;
    }
     
    @Override
    public String toString() {
        return &quot;Person{&quot; +
                &quot;name=&#39;&quot; + name + &#39;\\&#39;&#39; +
                &#39;}&#39;;
    }
}
/**
* 直接使用@Import导入person类，然后尝试从applicationContext中取，成功拿到
**/
@Import(Person.class)
public class Demo1 {

    public static void main(String[] args) {
        AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(Demo1.class);
        Person bean = applicationContext.getBean(Person.class);
        System.out.println(bean);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码直接使用@Import导入了一个类，然后自动的就被放置在IOC容器中了。注意 我们的Person类上 就不需要任何的注解了，直接导入即可。</p><h3 id="_3-2-import-importselector" tabindex="-1"><a class="header-anchor" href="#_3-2-import-importselector" aria-hidden="true">#</a> 3.2 @Import + ImportSelector</h3><p>其实在@Import注解的源码中，说的已经很清楚了，感兴趣的可以看下，我们实现一个ImportSelector的接口，然后实现其中的方法，进行导入。</p><p>代码如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Import(MyImportSelector.class)
public class Demo1 {

    public static void main(String[] args) {
        AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(Demo1.class);
        Person bean = applicationContext.getBean(Person.class);
        System.out.println(bean);
    }
}

class MyImportSelector implements ImportSelector {
    @Override
    public String[] selectImports(AnnotationMetadata importingClassMetadata) {
        return new String[]{&quot;com.springboot.pojo.Person&quot;};
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我自定义了一个 MyImportSelector 实现了 ImportSelector 接口，重写selectImports 方法，然后将我们要导入的类的全限定名写在里面即可，实现起来也是非常简单。</p><h3 id="_3-3-import-importbeandefinitionregistrar" tabindex="-1"><a class="header-anchor" href="#_3-3-import-importbeandefinitionregistrar" aria-hidden="true">#</a> 3.3 @Import + ImportBeanDefinitionRegistrar</h3><p>这种方式也需要我们实现 ImportBeanDefinitionRegistrar 接口中的方法，具体代码如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Import(MyImportBeanDefinitionRegistrar.class)
public class Demo1 {

    public static void main(String[] args) {
        AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(Demo1.class);
        Person bean = applicationContext.getBean(Person.class);
        System.out.println(bean);
    }
}

class MyImportBeanDefinitionRegistrar implements ImportBeanDefinitionRegistrar {

    @Override
    public void registerBeanDefinitions(AnnotationMetadata importingClassMetadata, BeanDefinitionRegistry registry) {
        // 构建一个beanDefinition, 关于beanDefinition我后续会介绍，可以简单理解为bean的定义.
        AbstractBeanDefinition beanDefinition = BeanDefinitionBuilder.rootBeanDefinition(Person.class).getBeanDefinition();
        // 将beanDefinition注册到Ioc容器中.
        registry.registerBeanDefinition(&quot;person&quot;, beanDefinition);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述实现其实和Import的第二种方式差不多，都需要去实现接口，然后进行导入。接触到了一个新的概念，BeanDefinition，可以简单理解为bean的定义(bean的元数据)，也是需要放在IOC容器中进行管理的，先有bean的元数据，applicationContext再根据bean的元数据去创建Bean。</p><h3 id="_3-4-import-deferredimportselector" tabindex="-1"><a class="header-anchor" href="#_3-4-import-deferredimportselector" aria-hidden="true">#</a> 3.4 @Import + DeferredImportSelector</h3><p>这种方式也需要我们进行实现接口，其实它和@Import的第二种方式差不多，DeferredImportSelector 它是 ImportSelector 的子接口，所以实现的方法和第二种无异。只是Spring的处理方式不同，它和Spring Boot中的自动导入配置文件 延迟导入有关，非常重要。使用方式如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Import(MyDeferredImportSelector.class)
public class Demo1 {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(Demo1.class);
        Person bean = applicationContext.getBean(Person.class);
        System.out.println(bean);
    }
}
class MyDeferredImportSelector implements DeferredImportSelector {
    @Override
    public String[] selectImports(AnnotationMetadata importingClassMetadata) {
        // 也是直接将Person的全限定名放进去
        return new String[]{Person.class.getName()};
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于@Import注解的使用方式，大概就以上三种，当然它还可以搭配@Configuration注解使用，用于导入一个配置类。</p><h2 id="_4、使用factorybean接口" tabindex="-1"><a class="header-anchor" href="#_4、使用factorybean接口" aria-hidden="true">#</a> 4、使用FactoryBean接口</h2><p>FactoryBean接口和BeanFactory千万不要弄混了，从名字其实可以大概的区分开，FactoryBean, 后缀为bean，那么它其实就是一个bean, BeanFactory，顾名思义 bean工厂，它是IOC容器的顶级接口，这俩接口都很重要。代码示例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Configuration
public class Demo1 {
    @Bean
    public PersonFactoryBean personFactoryBean() {
        return new PersonFactoryBean();
    }

    public static void main(String[] args) {
        AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(Demo1.class);
        Person bean = applicationContext.getBean(Person.class);
        System.out.println(bean);
    }
}

class PersonFactoryBean implements FactoryBean&lt;Person&gt; {

    /**
     *  直接new出来Person进行返回.
     */
    @Override
    public Person getObject() throws Exception {
        return new Person();
    }
    /**
     *  指定返回bean的类型.
     */
    @Override
    public Class&lt;?&gt; getObjectType() {
        return Person.class;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码，我使用@Configuration + @Bean的方式将 PersonFactoryBean 加入到容器中，注意，我没有向容器中注入 Person, 而是直接注入的 PersonFactoryBean 然后从容器中拿Person这个类型的bean,成功运行。</p><h2 id="_5、使用-beandefinitionregistrypostprocessor" tabindex="-1"><a class="header-anchor" href="#_5、使用-beandefinitionregistrypostprocessor" aria-hidden="true">#</a> 5、使用 BeanDefinitionRegistryPostProcessor</h2><p>其实这种方式也是利用到了 BeanDefinitionRegistry，在Spring容器启动的时候会执行 BeanDefinitionRegistryPostProcessor 的 postProcessBeanDefinitionRegistry 方法，大概意思就是等beanDefinition加载完毕之后，对beanDefinition进行后置处理，可以在此进行调整IOC容器中的beanDefinition，从而干扰到后面进行初始化bean。</p><p>具体代码如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class Demo1 {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext();
        MyBeanDefinitionRegistryPostProcessor beanDefinitionRegistryPostProcessor = new MyBeanDefinitionRegistryPostProcessor();
        applicationContext.addBeanFactoryPostProcessor(beanDefinitionRegistryPostProcessor);
        applicationContext.refresh();
        Person bean = applicationContext.getBean(Person.class);
        System.out.println(bean);
    }
}

class MyBeanDefinitionRegistryPostProcessor implements BeanDefinitionRegistryPostProcessor {

    @Override
    public void postProcessBeanDefinitionRegistry(BeanDefinitionRegistry registry) throws BeansException {
        AbstractBeanDefinition beanDefinition = BeanDefinitionBuilder.rootBeanDefinition(Person.class).getBeanDefinition();
        registry.registerBeanDefinition(&quot;person&quot;, beanDefinition);
    }
    @Override
    public void postProcessBeanFactory(ConfigurableListableBeanFactory beanFactory) throws BeansException {
     
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码中，我们手动向beanDefinitionRegistry中注册了person的BeanDefinition。最终成功将person加入到applicationContext中，上述的几种方式的具体原理，我后面会进行介绍。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>向spring容器中加入bean的几种方式.</p><p>@Configuration + @Bean</p><p>@ComponentScan + @Component</p><p>@Import 配合接口进行导入</p><p>使用FactoryBean。</p><p>实现BeanDefinitionRegistryPostProcessor进行后置处理。</p>`,94);function b(p,g){const a=d("ExternalLinkIcon");return r(),l("div",null,[v,n("blockquote",null,[c,n("p",null,[e("项目地址："),n("a",u,[e("https://github.com/YunaiV/onemall"),t(a)])])]),m])}const B=s(o,[["render",b],["__file","将Bean放入Spring容器中的7种方式.html.vue"]]);export{B as default};
