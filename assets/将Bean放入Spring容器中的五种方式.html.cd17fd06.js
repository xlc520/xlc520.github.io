import{_ as n,f as e}from"./app.a9e2696f.js";const s={},a=e(`<h1 id="springboot\u5C06bean\u653E\u5165spring\u5BB9\u5668\u4E2D\u7684\u4E94\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#springboot\u5C06bean\u653E\u5165spring\u5BB9\u5668\u4E2D\u7684\u4E94\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> SpringBoot\u5C06Bean\u653E\u5165Spring\u5BB9\u5668\u4E2D\u7684\u4E94\u79CD\u65B9\u5F0F</h1><h2 id="_1\u3001-configuration-bean" tabindex="-1"><a class="header-anchor" href="#_1\u3001-configuration-bean" aria-hidden="true">#</a> 1\u3001@Configuration + @Bean</h2><p>\u8FD9\u79CD\u65B9\u5F0F\u5176\u5B9E\uFF0C\u5728\u4E0A\u4E00\u7BC7\u6587\u7AE0\u5DF2\u7ECF\u4ECB\u7ECD\u8FC7\u4E86\uFF0C\u4E5F\u662F\u6211\u4EEC\u6700\u5E38\u7528\u7684\u4E00\u79CD\u65B9\u5F0F\uFF0C@Configuration\u7528\u6765\u58F0\u660E\u4E00\u4E2A\u914D\u7F6E\u7C7B\uFF0C\u7136\u540E\u4F7F\u7528 @Bean \u6CE8\u89E3\uFF0C\u7528\u4E8E\u58F0\u660E\u4E00\u4E2Abean\uFF0C\u5C06\u5176\u52A0\u5165\u5230Spring\u5BB9\u5668\u4E2D\u3002\u5177\u4F53\u4EE3\u7801\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Configuration
public class MyConfiguration {
    @Bean
    public Person person() {
        Person person = new Person();
        person.setName(&quot;spring&quot;);
        return person;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="_2\u3001-componet-componentscan" tabindex="-1"><a class="header-anchor" href="#_2\u3001-componet-componentscan" aria-hidden="true">#</a> 2\u3001@Componet + @ComponentScan</h2><p>\u8FD9\u79CD\u65B9\u5F0F\u4E5F\u662F\u6211\u4EEC\u7528\u7684\u6BD4\u8F83\u591A\u7684\u65B9\u5F0F\uFF0C@Componet\u4E2D\u6587\u8BD1\u4E3A\u7EC4\u4EF6\uFF0C\u653E\u5728\u7C7B\u540D\u4E0A\u9762\uFF0C\u7136\u540E@ComponentScan\u653E\u7F6E\u5728\u6211\u4EEC\u7684\u914D\u7F6E\u7C7B\u4E0A\uFF0C\u7136\u540E\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E2A\u8DEF\u5F84\uFF0C\u8FDB\u884C\u626B\u63CF\u5E26\u6709@Componet\u6CE8\u89E3\u7684bean\uFF0C\u7136\u540E\u52A0\u81F3\u5BB9\u5668\u4E2D\u3002\u5177\u4F53\u4EE3\u7801\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Component
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>\u7ED3\u679C\u8F93\u51FA:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Person{name=&#39;null&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8868\u793A\u6210\u529F\u5C06Person\u653E\u7F6E\u5728\u4E86IOC\u5BB9\u5668\u4E2D\u3002</p><h2 id="_3\u3001-import\u6CE8\u89E3\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#_3\u3001-import\u6CE8\u89E3\u5BFC\u5165" aria-hidden="true">#</a> 3\u3001@Import\u6CE8\u89E3\u5BFC\u5165</h2><p>\u524D\u4E24\u79CD\u65B9\u5F0F\uFF0C\u5927\u5BB6\u7528\u7684\u53EF\u80FD\u6BD4\u8F83\u591A\uFF0C\u4E5F\u662F\u5E73\u65F6\u5F00\u53D1\u4E2D\u5FC5\u987B\u8981\u77E5\u9053\u7684\uFF0C@Import\u6CE8\u89E3\u7528\u7684\u53EF\u80FD\u4E0D\u662F\u7279\u522B\u591A\u4E86\uFF0C\u4F46\u662F\u4E5F\u662F\u975E\u5E38\u91CD\u8981\u7684\uFF0C\u5728\u8FDB\u884CSpring\u6269\u5C55\u65F6\u7ECF\u5E38\u4F1A\u7528\u5230\uFF0C\u5B83\u7ECF\u5E38\u642D\u914D\u81EA\u5B9A\u4E49\u6CE8\u89E3\u8FDB\u884C\u4F7F\u7528\uFF0C\u7136\u540E\u5F80\u5BB9\u5668\u4E2D\u5BFC\u5165\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\u3002\u5173\u4E8E@Import\u6CE8\u89E3\uFF0C\u6211\u4F1A\u591A\u4ECB\u7ECD\u4E00\u70B9\uFF0C\u5B83\u6709\u56DB\u79CD\u4F7F\u7528\u65B9\u5F0F\u3002\u8FD9\u662F@Import\u6CE8\u89E3\u7684\u6E90\u7801\uFF0C\u8868\u793A\u53EA\u80FD\u653E\u7F6E\u5728\u7C7B\u4E0A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface Import {

    /**
   * \u7528\u4E8E\u5BFC\u5165\u4E00\u4E2Aclass\u6587\u4EF6
     * {@link Configuration @Configuration}, {@link ImportSelector},
     * {@link ImportBeanDefinitionRegistrar}, or regular component classes to import.
     */

    Class&lt;?&gt;[] value();

}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="_3-1-import\u76F4\u63A5\u5BFC\u5165\u7C7B" tabindex="-1"><a class="header-anchor" href="#_3-1-import\u76F4\u63A5\u5BFC\u5165\u7C7B" aria-hidden="true">#</a> 3.1 @Import\u76F4\u63A5\u5BFC\u5165\u7C7B</h3><p>\u4EE3\u7801\u793A\u4F8B\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Person {
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
* \u76F4\u63A5\u4F7F\u7528@Import\u5BFC\u5165person\u7C7B\uFF0C\u7136\u540E\u5C1D\u8BD5\u4ECEapplicationContext\u4E2D\u53D6\uFF0C\u6210\u529F\u62FF\u5230
**/
@Import(Person.class)
public class Demo1 {

    public static void main(String[] args) {
        AnnotationConfigApplicationContext applicationContext = new AnnotationConfigApplicationContext(Demo1.class);
        Person bean = applicationContext.getBean(Person.class);
        System.out.println(bean);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u76F4\u63A5\u4F7F\u7528@Import\u5BFC\u5165\u4E86\u4E00\u4E2A\u7C7B\uFF0C\u7136\u540E\u81EA\u52A8\u7684\u5C31\u88AB\u653E\u7F6E\u5728IOC\u5BB9\u5668\u4E2D\u4E86\u3002\u6CE8\u610F \u6211\u4EEC\u7684Person\u7C7B\u4E0A \u5C31\u4E0D\u9700\u8981\u4EFB\u4F55\u7684\u6CE8\u89E3\u4E86\uFF0C\u76F4\u63A5\u5BFC\u5165\u5373\u53EF\u3002</p><h3 id="_3-2-import-importselector" tabindex="-1"><a class="header-anchor" href="#_3-2-import-importselector" aria-hidden="true">#</a> 3.2 @Import + ImportSelector</h3><p>\u5176\u5B9E\u5728@Import\u6CE8\u89E3\u7684\u6E90\u7801\u4E2D\uFF0C\u8BF4\u7684\u5DF2\u7ECF\u5F88\u6E05\u695A\u4E86\uFF0C\u611F\u5174\u8DA3\u7684\u53EF\u4EE5\u770B\u4E0B\uFF0C\u6211\u4EEC\u5B9E\u73B0\u4E00\u4E2AImportSelector\u7684\u63A5\u53E3\uFF0C\u7136\u540E\u5B9E\u73B0\u5176\u4E2D\u7684\u65B9\u6CD5\uFF0C\u8FDB\u884C\u5BFC\u5165\u3002</p><p>\u4EE3\u7801\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Import(MyImportSelector.class)
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u6211\u81EA\u5B9A\u4E49\u4E86\u4E00\u4E2A MyImportSelector \u5B9E\u73B0\u4E86 ImportSelector \u63A5\u53E3\uFF0C\u91CD\u5199selectImports \u65B9\u6CD5\uFF0C\u7136\u540E\u5C06\u6211\u4EEC\u8981\u5BFC\u5165\u7684\u7C7B\u7684\u5168\u9650\u5B9A\u540D\u5199\u5728\u91CC\u9762\u5373\u53EF\uFF0C\u5B9E\u73B0\u8D77\u6765\u4E5F\u662F\u975E\u5E38\u7B80\u5355\u3002</p><h3 id="_3-3-import-importbeandefinitionregistrar" tabindex="-1"><a class="header-anchor" href="#_3-3-import-importbeandefinitionregistrar" aria-hidden="true">#</a> 3.3 @Import + ImportBeanDefinitionRegistrar</h3><p>\u8FD9\u79CD\u65B9\u5F0F\u4E5F\u9700\u8981\u6211\u4EEC\u5B9E\u73B0 ImportBeanDefinitionRegistrar \u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5\uFF0C\u5177\u4F53\u4EE3\u7801\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Import(MyImportBeanDefinitionRegistrar.class)
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
        // \u6784\u5EFA\u4E00\u4E2AbeanDefinition, \u5173\u4E8EbeanDefinition\u6211\u540E\u7EED\u4F1A\u4ECB\u7ECD\uFF0C\u53EF\u4EE5\u7B80\u5355\u7406\u89E3\u4E3Abean\u7684\u5B9A\u4E49.
        AbstractBeanDefinition beanDefinition = BeanDefinitionBuilder.rootBeanDefinition(Person.class).getBeanDefinition();
        // \u5C06beanDefinition\u6CE8\u518C\u5230Ioc\u5BB9\u5668\u4E2D.
        registry.registerBeanDefinition(&quot;person&quot;, beanDefinition);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>\u4E0A\u8FF0\u5B9E\u73B0\u5176\u5B9E\u548CImport\u7684\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u5DEE\u4E0D\u591A\uFF0C\u90FD\u9700\u8981\u53BB\u5B9E\u73B0\u63A5\u53E3\uFF0C\u7136\u540E\u8FDB\u884C\u5BFC\u5165\u3002\u63A5\u89E6\u5230\u4E86\u4E00\u4E2A\u65B0\u7684\u6982\u5FF5\uFF0CBeanDefinition\uFF0C\u53EF\u4EE5\u7B80\u5355\u7406\u89E3\u4E3Abean\u7684\u5B9A\u4E49(bean\u7684\u5143\u6570\u636E)\uFF0C\u4E5F\u662F\u9700\u8981\u653E\u5728IOC\u5BB9\u5668\u4E2D\u8FDB\u884C\u7BA1\u7406\u7684\uFF0C\u5148\u6709bean\u7684\u5143\u6570\u636E\uFF0CapplicationContext\u518D\u6839\u636Ebean\u7684\u5143\u6570\u636E\u53BB\u521B\u5EFABean\u3002</p><h3 id="_3-4-import-deferredimportselector" tabindex="-1"><a class="header-anchor" href="#_3-4-import-deferredimportselector" aria-hidden="true">#</a> 3.4 @Import + DeferredImportSelector</h3><p>\u8FD9\u79CD\u65B9\u5F0F\u4E5F\u9700\u8981\u6211\u4EEC\u8FDB\u884C\u5B9E\u73B0\u63A5\u53E3\uFF0C\u5176\u5B9E\u5B83\u548C@Import\u7684\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u5DEE\u4E0D\u591A\uFF0CDeferredImportSelector \u5B83\u662F ImportSelector \u7684\u5B50\u63A5\u53E3\uFF0C\u6240\u4EE5\u5B9E\u73B0\u7684\u65B9\u6CD5\u548C\u7B2C\u4E8C\u79CD\u65E0\u5F02\u3002\u53EA\u662FSpring\u7684\u5904\u7406\u65B9\u5F0F\u4E0D\u540C\uFF0C\u5B83\u548CSpring Boot\u4E2D\u7684\u81EA\u52A8\u5BFC\u5165\u914D\u7F6E\u6587\u4EF6 \u5EF6\u8FDF\u5BFC\u5165\u6709\u5173\uFF0C\u975E\u5E38\u91CD\u8981\u3002\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Import(MyDeferredImportSelector.class)
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
        // \u4E5F\u662F\u76F4\u63A5\u5C06Person\u7684\u5168\u9650\u5B9A\u540D\u653E\u8FDB\u53BB
        return new String[]{Person.class.getName()};
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u5173\u4E8E@Import\u6CE8\u89E3\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u5927\u6982\u5C31\u4EE5\u4E0A\u4E09\u79CD\uFF0C\u5F53\u7136\u5B83\u8FD8\u53EF\u4EE5\u642D\u914D@Configuration\u6CE8\u89E3\u4F7F\u7528\uFF0C\u7528\u4E8E\u5BFC\u5165\u4E00\u4E2A\u914D\u7F6E\u7C7B\u3002</p><h2 id="_4\u3001\u4F7F\u7528factorybean\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u4F7F\u7528factorybean\u63A5\u53E3" aria-hidden="true">#</a> 4\u3001\u4F7F\u7528FactoryBean\u63A5\u53E3</h2><p>FactoryBean\u63A5\u53E3\u548CBeanFactory\u5343\u4E07\u4E0D\u8981\u5F04\u6DF7\u4E86\uFF0C\u4ECE\u540D\u5B57\u5176\u5B9E\u53EF\u4EE5\u5927\u6982\u7684\u533A\u5206\u5F00\uFF0CFactoryBean, \u540E\u7F00\u4E3Abean\uFF0C\u90A3\u4E48\u5B83\u5176\u5B9E\u5C31\u662F\u4E00\u4E2Abean, BeanFactory\uFF0C\u987E\u540D\u601D\u4E49 bean\u5DE5\u5382\uFF0C\u5B83\u662FIOC\u5BB9\u5668\u7684\u9876\u7EA7\u63A5\u53E3\uFF0C\u8FD9\u4FE9\u63A5\u53E3\u90FD\u5F88\u91CD\u8981\u3002\u4EE3\u7801\u793A\u4F8B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Configuration
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
     *  \u76F4\u63A5new\u51FA\u6765Person\u8FDB\u884C\u8FD4\u56DE.
     */
    @Override
    public Person getObject() throws Exception {
        return new Person();
    }
    /**
     *  \u6307\u5B9A\u8FD4\u56DEbean\u7684\u7C7B\u578B.
     */
    @Override
    public Class&lt;?&gt; getObjectType() {
        return Person.class;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\uFF0C\u6211\u4F7F\u7528@Configuration + @Bean\u7684\u65B9\u5F0F\u5C06 PersonFactoryBean \u52A0\u5165\u5230\u5BB9\u5668\u4E2D\uFF0C\u6CE8\u610F\uFF0C\u6211\u6CA1\u6709\u5411\u5BB9\u5668\u4E2D\u6CE8\u5165 Person, \u800C\u662F\u76F4\u63A5\u6CE8\u5165\u7684 PersonFactoryBean \u7136\u540E\u4ECE\u5BB9\u5668\u4E2D\u62FFPerson\u8FD9\u4E2A\u7C7B\u578B\u7684bean,\u6210\u529F\u8FD0\u884C\u3002</p><h2 id="_5\u3001\u4F7F\u7528-beandefinitionregistrypostprocessor" tabindex="-1"><a class="header-anchor" href="#_5\u3001\u4F7F\u7528-beandefinitionregistrypostprocessor" aria-hidden="true">#</a> 5\u3001\u4F7F\u7528 BeanDefinitionRegistryPostProcessor</h2><p>\u5176\u5B9E\u8FD9\u79CD\u65B9\u5F0F\u4E5F\u662F\u5229\u7528\u5230\u4E86 BeanDefinitionRegistry\uFF0C\u5728Spring\u5BB9\u5668\u542F\u52A8\u7684\u65F6\u5019\u4F1A\u6267\u884C BeanDefinitionRegistryPostProcessor \u7684 postProcessBeanDefinitionRegistry \u65B9\u6CD5\uFF0C\u5927\u6982\u610F\u601D\u5C31\u662F\u7B49beanDefinition\u52A0\u8F7D\u5B8C\u6BD5\u4E4B\u540E\uFF0C\u5BF9beanDefinition\u8FDB\u884C\u540E\u7F6E\u5904\u7406\uFF0C\u53EF\u4EE5\u5728\u6B64\u8FDB\u884C\u8C03\u6574IOC\u5BB9\u5668\u4E2D\u7684beanDefinition\uFF0C\u4ECE\u800C\u5E72\u6270\u5230\u540E\u9762\u8FDB\u884C\u521D\u59CB\u5316bean\u3002</p><p>\u5177\u4F53\u4EE3\u7801\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Demo1 {
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
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u624B\u52A8\u5411beanDefinitionRegistry\u4E2D\u6CE8\u518C\u4E86person\u7684BeanDefinition\u3002\u6700\u7EC8\u6210\u529F\u5C06person\u52A0\u5165\u5230applicationContext\u4E2D\uFF0C\u4E0A\u8FF0\u7684\u51E0\u79CD\u65B9\u5F0F\u7684\u5177\u4F53\u539F\u7406\uFF0C\u6211\u540E\u9762\u4F1A\u8FDB\u884C\u4ECB\u7ECD\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p>\u5411spring\u5BB9\u5668\u4E2D\u52A0\u5165bean\u7684\u51E0\u79CD\u65B9\u5F0F.</p><p>@Configuration + @Bean</p><p>@ComponentScan + @Component</p><p>@Import \u914D\u5408\u63A5\u53E3\u8FDB\u884C\u5BFC\u5165</p><p>\u4F7F\u7528FactoryBean\u3002</p><p>\u5B9E\u73B0BeanDefinitionRegistryPostProcessor\u8FDB\u884C\u540E\u7F6E\u5904\u7406\u3002</p>`,46);function r(i,p){return a}var l=n(s,[["render",r]]);export{l as default};
