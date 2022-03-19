<template><h1 id="springboot将bean放入spring容器中的五种方式" tabindex="-1"><a class="header-anchor" href="#springboot将bean放入spring容器中的五种方式" aria-hidden="true">#</a> SpringBoot将Bean放入Spring容器中的五种方式</h1>
<h2 id="_1、-configuration-bean" tabindex="-1"><a class="header-anchor" href="#_1、-configuration-bean" aria-hidden="true">#</a> 1、@Configuration + @Bean</h2>
<p>这种方式其实，在上一篇文章已经介绍过了，也是我们最常用的一种方式，@Configuration用来声明一个配置类，然后使用 @Bean 注解，用于声明一个bean，将其加入到Spring容器中。具体代码如下:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>@Configuration
public class MyConfiguration {
    @Bean
    public Person person() {
        Person person = new Person();
        person.setName("spring");
        return person;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_2、-componet-componentscan" tabindex="-1"><a class="header-anchor" href="#_2、-componet-componentscan" aria-hidden="true">#</a> 2、@Componet + @ComponentScan</h2>
<p>这种方式也是我们用的比较多的方式，@Componet中文译为组件，放在类名上面，然后@ComponentScan放置在我们的配置类上，然后可以指定一个路径，进行扫描带有@Componet注解的bean，然后加至容器中。具体代码如下:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>@Component
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
        return "Person{" +
                "name='" + name + '\'' +
                '}';
    }
}

@ComponentScan(basePackages = "com.springboot.initbean.*")
public class Demo1 {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(Demo1.class);
        Person bean = applicationContext.getBean(Person.class);
        System.out.println(bean);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>结果输出:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Person{name='null'}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>表示成功将Person放置在了IOC容器中。</p>
<h2 id="_3、-import注解导入" tabindex="-1"><a class="header-anchor" href="#_3、-import注解导入" aria-hidden="true">#</a> 3、@Import注解导入</h2>
<p>前两种方式，大家用的可能比较多，也是平时开发中必须要知道的，@Import注解用的可能不是特别多了，但是也是非常重要的，在进行Spring扩展时经常会用到，它经常搭配自定义注解进行使用，然后往容器中导入一个配置文件。关于@Import注解，我会多介绍一点，它有四种使用方式。这是@Import注解的源码，表示只能放置在类上。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface Import {

    /**
   * 用于导入一个class文件
     * {@link Configuration @Configuration}, {@link ImportSelector},
     * {@link ImportBeanDefinitionRegistrar}, or regular component classes to import.
     */

    Class&lt;?>[] value();

}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="_3-1-import直接导入类" tabindex="-1"><a class="header-anchor" href="#_3-1-import直接导入类" aria-hidden="true">#</a> 3.1 @Import直接导入类</h3>
<p>代码示例如下:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>public class Person {
    private String name;

    public String getName() {
     
        return name;
    }
     
    public void setName(String name) {
        this.name = name;
    }
     
    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                '}';
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>上述代码直接使用@Import导入了一个类，然后自动的就被放置在IOC容器中了。注意 我们的Person类上 就不需要任何的注解了，直接导入即可。</p>
<h3 id="_3-2-import-importselector" tabindex="-1"><a class="header-anchor" href="#_3-2-import-importselector" aria-hidden="true">#</a> 3.2 @Import + ImportSelector</h3>
<p>其实在@Import注解的源码中，说的已经很清楚了，感兴趣的可以看下，我们实现一个ImportSelector的接口，然后实现其中的方法，进行导入。</p>
<p>代码如下:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>@Import(MyImportSelector.class)
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
        return new String[]{"com.springboot.pojo.Person"};
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>我自定义了一个 MyImportSelector 实现了 ImportSelector 接口，重写selectImports 方法，然后将我们要导入的类的全限定名写在里面即可，实现起来也是非常简单。</p>
<h3 id="_3-3-import-importbeandefinitionregistrar" tabindex="-1"><a class="header-anchor" href="#_3-3-import-importbeandefinitionregistrar" aria-hidden="true">#</a> 3.3 @Import + ImportBeanDefinitionRegistrar</h3>
<p>这种方式也需要我们实现 ImportBeanDefinitionRegistrar 接口中的方法，具体代码如下:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>@Import(MyImportBeanDefinitionRegistrar.class)
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
        registry.registerBeanDefinition("person", beanDefinition);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>上述实现其实和Import的第二种方式差不多，都需要去实现接口，然后进行导入。接触到了一个新的概念，BeanDefinition，可以简单理解为bean的定义(bean的元数据)，也是需要放在IOC容器中进行管理的，先有bean的元数据，applicationContext再根据bean的元数据去创建Bean。</p>
<h3 id="_3-4-import-deferredimportselector" tabindex="-1"><a class="header-anchor" href="#_3-4-import-deferredimportselector" aria-hidden="true">#</a> 3.4 @Import + DeferredImportSelector</h3>
<p>这种方式也需要我们进行实现接口，其实它和@Import的第二种方式差不多，DeferredImportSelector 它是 ImportSelector 的子接口，所以实现的方法和第二种无异。只是Spring的处理方式不同，它和Spring Boot中的自动导入配置文件 延迟导入有关，非常重要。使用方式如下:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>@Import(MyDeferredImportSelector.class)
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>关于@Import注解的使用方式，大概就以上三种，当然它还可以搭配@Configuration注解使用，用于导入一个配置类。</p>
<h2 id="_4、使用factorybean接口" tabindex="-1"><a class="header-anchor" href="#_4、使用factorybean接口" aria-hidden="true">#</a> 4、使用FactoryBean接口</h2>
<p>FactoryBean接口和BeanFactory千万不要弄混了，从名字其实可以大概的区分开，FactoryBean, 后缀为bean，那么它其实就是一个bean, BeanFactory，顾名思义 bean工厂，它是IOC容器的顶级接口，这俩接口都很重要。代码示例:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>@Configuration
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

class PersonFactoryBean implements FactoryBean&lt;Person> {

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
    public Class&lt;?> getObjectType() {
        return Person.class;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>上述代码，我使用@Configuration + @Bean的方式将 PersonFactoryBean 加入到容器中，注意，我没有向容器中注入 Person, 而是直接注入的 PersonFactoryBean 然后从容器中拿Person这个类型的bean,成功运行。</p>
<h2 id="_5、使用-beandefinitionregistrypostprocessor" tabindex="-1"><a class="header-anchor" href="#_5、使用-beandefinitionregistrypostprocessor" aria-hidden="true">#</a> 5、使用 BeanDefinitionRegistryPostProcessor</h2>
<p>其实这种方式也是利用到了 BeanDefinitionRegistry，在Spring容器启动的时候会执行 BeanDefinitionRegistryPostProcessor 的 postProcessBeanDefinitionRegistry 方法，大概意思就是等beanDefinition加载完毕之后，对beanDefinition进行后置处理，可以在此进行调整IOC容器中的beanDefinition，从而干扰到后面进行初始化bean。</p>
<p>具体代码如下:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>public class Demo1 {
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
        registry.registerBeanDefinition("person", beanDefinition);
    }
    @Override
    public void postProcessBeanFactory(ConfigurableListableBeanFactory beanFactory) throws BeansException {
     
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>上述代码中，我们手动向beanDefinitionRegistry中注册了person的BeanDefinition。最终成功将person加入到applicationContext中，上述的几种方式的具体原理，我后面会进行介绍。</p>
<h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2>
<p>向spring容器中加入bean的几种方式.</p>
<p>@Configuration + @Bean</p>
<p>@ComponentScan + @Component</p>
<p>@Import 配合接口进行导入</p>
<p>使用FactoryBean。</p>
<p>实现BeanDefinitionRegistryPostProcessor进行后置处理。</p>
</template>
