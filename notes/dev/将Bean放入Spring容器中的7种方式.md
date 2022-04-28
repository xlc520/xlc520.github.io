---
author: xlc520
title: SpringBoot将Bean放入Spring容器中的五种方式
description: SpringBoot将Bean放入Spring容器中的五种方式
date: 2022-02-12
category: Java
tag: Java
article: true
timeline: true
icon: 
password: 
---
# SpringBoot将Bean放入Spring容器中的7(五)种方式



## 更新：2022年3月23日11:25:11

## 背景

我们谈到Spring的时候一定会提到IOC容器、DI依赖注入，Spring通过将一个个类标注为Bean的方法注入到IOC容器中，达到了控制反转的效果。那么我们刚开始接触Bean的时候，一定是使用xml文件，一个一个的注入，就例如下面这样。

```
 <bean id="bean" class="beandemo.Bean" />
```

我们的项目一般很大的话，就需要成千上百个Bean去使用，这样写起来就很繁琐。那么Spring就帮我们实现了一种通过注解来实现注入的方法。只需要在你需要注入的类前面加上相应的注解，Spring就会帮助我们扫描到他们去实现注入。

> xml扫描包的方式

```
 <context:component-scan base-package="com.company.beandemo"/>
```

## 通过注解注入的一般形式

一般情况下，注入Bean有一个最直白，最易懂的方式去实现注入，下面废话先不多说，先贴代码。

------

- Bean类

```
 public class MyBean{
 }
```

- Configuration类

```
 //创建一个class配置文件
 @Configuration
 public class MyConfiguration{
  //将一个Bean交由Spring进行管理
        @Bean
        public MyBean myBean(){
            return new MyBean();
        }
 }
```

- Test类

与xml有一点不同，这里在Test中，实例化的不再是ClassPathXmlApplicationContext，而是获取的AnnotationConfigApplicationContext实例。

```
 ApplicationContext context = new AnnotationConfigApplicationContext(MyConfiguration.class);
 MyBean myBean = cotext.getBean("myBean",MyBean.class);
 System.out.println("myBean = " + myBean);
```

------

上面的代码中MyBean也就是我们需要Spring去管理的一个Bean，他只是一个简单的类。而MyConfiguration中，我们首先用@Configuration注解去标记了该类，这样标明该类是一个Spring的一个配置类，在加载配置的时候会去加载他。

在MyConfiguration中我们可以看到有一个方法返回的是一个MyBean的实例，并且该方法上标注着@Bean的注解，标明这是一个注入Bean的方法，会将下面的返回的Bean注入IOC。

> 基于微服务的思想，构建在 B2C 电商场景下的项目实战。核心技术栈，是 Spring Boot + Dubbo 。未来，会重构成 Spring Cloud Alibaba 。
>
> 项目地址：https://github.com/YunaiV/onemall

## 通过构造方法注入Bean

我们在生成一个Bean实例的时候，可以使用Bean的构造方法将Bean实现注入。直接看代码

------

- Bean类

```
 @Component
 public class MyBeanConstructor {

     private AnotherBean anotherBeanConstructor;

     @Autowired
     public MyBeanConstructor(AnotherBean anotherBeanConstructor){
         this.anotherBeanConstructor = anotherBeanConstructor;
     }

     @Override
     public String toString() {
         return "MyBean{" +
             "anotherBeanConstructor=" + anotherBeanConstructor +
             '}';
     }
 }
```

- AnotherBean类

```
 @Component(value="Bean的id，默认为类名小驼峰")
 public class AnotherBean {
 }
```

- Configuration类

```
 @Configuration
 @ComponentScan("com.company.annotationbean")
 public class MyConfiguration{
 }
```

------

这里我们可以发现，和一般方式注入的代码不一样了，我们来看看新的注解都是什么意思：

- @AutoWired

简单粗暴，直接翻译过来的意思就是自动装配:wrench:，还不理解为什么叫自动装配:wrench:？看了下一个注解的解释你就知道了。若是在这里注入的时候指定一个Bean的id就要使用@Qualifier注解

- @Component（默认单例模式）

什么？？这翻译过来是零件，怎么感觉像是修汽车？？是的，Spring管理Bean的方法就是修汽车的方式。我们在需要将一个类变成一个Bean被Spring可以注入的时候加上注解零件@Conmonent，那么我们就可以在加载Bean的时候把他像零件一样装配:wrench:到这个IOC汽车上了

在这里我们还有几个其他的注解也可以实现这个功能，也就是细化的@Component：

- @Controller 标注在Controller层
- @Service 标注在Service层
- @Repository 标注在dao层

还是翻译，零件扫描，我们去看看括号里的“零件仓库”里面，哪些“零件”（类）需要被装载，Spring就会去扫描这个包，将里面所有标注了@Component的类进行注入。

这里的通过构造方法进行注入就很好理解了，我们在装配MyBean这个零件的时候，突然发现他必须在AnotherBean的基础上才能安装到IOC里面，那么我们就在每次装配MyBean的时候自动装配:wrench:一个AnotherBean进去。举个:chestnut:吧：

还是以汽车为例，我们在踩油门出发之前，是不是必须发车？？这里的AutoWired的内容就像发车，你不发车，这个油门你踩断都没有用，他都不会走。

## 通过set方法注入Bean

我们可以在一个属性的set方法中去将Bean实现注入，看代码吧

------

- MyBean类

```
 @Component
 public class MyBeanSet {

     private AnotherBean anotherBeanSet;

     @Autowired
     public void setAnotherBeanSet(AnotherBean anotherBeanSet) {
         this.anotherBeanSet = anotherBeanSet;
     }

     @Override
     public String toString() {
         return "MyBeanSet{" +
             "anotherBeanSet=" + anotherBeanSet +
             '}';
     }
 }
```

- Configuration类 和 Test类

同上一个，就不贴了

------

这里我们发现在setter方法上我们有一个@AutoWired,与上面不同的是，我们不会在实例化该类时就自动装配:wrench:这个对象，而是在显式调用setter的时候去装配。

## 通过属性去注入Bean

我们前面两种注入的方式诸如时间不同，并且代码较多，若是通过属性，即就是

```
 @Component
 public class MyBeanProperty {

     @Autowired
     private AnotherBean anotherBeanProperty;

     @Override
     public String toString() {
         return "MyBeanProperty{" +
             "anotherBeanProperty=" + anotherBeanProperty +
             '}';
     }
 }
```

这里我们可以看到我们这个类中需要使用AnotherBean这个实例对象，我们可以通过@AutoWired去自动装配它。

> 对于有些小伙伴问私有属性，Spring怎么去加载它到IOC的？推荐去看看反射

## 通过List注入Bean

- MyBeanList类

```
 @Component
 public class MyBeanList {

     private List<String> stringList;

     @Autowired
     public void setStringList(List<String> stringList) {
         this.stringList = stringList;
     }

     public List<String> getStringList() {
         return stringList;
     }
 }
```

- MyConfiguration类

```
 @Configuration
 @ComponentScan("annoBean.annotationbean")
 public class MyConfiguration {

     @Bean
     public List<String> stringList(){
        List<String> stringList = new ArrayList<String>();
         stringList.add("List-1");
         stringList.add("List-2");
         return stringList;
     }
 }
```

这里我们将MyBeanList进行了注入，对List中的元素会逐一注入。下面介绍另一种方式注入List

- MyConfiguration类

```
 @Bean
    //通过该注解设定Bean注入的优先级，不一定连续数字
    @Order(34)
    public String string1(){
        return "String-1";
    }

    @Bean
    @Order(14)
    public String string2(){
        return "String-2";
    }
```

注入与List中泛型一样的类型，会自动去匹配类型，及时这里没有任何List的感觉，只是String的类型，但他会去通过List的Bean的方式去注入。

> 第二种方式的优先级高于第一种，当两个都存在的时候，若要强制去使用第一种方式，则要去指定Bean的id即可

## 通过Map去注入Bean

```
 @Component
 public class MyBeanMap {

     private Map<String,Integer> integerMap;

     public Map<String, Integer> getIntegerMap() {
         return integerMap;
     }

     @Autowired
     public void setIntegerMap(Map<String, Integer> integerMap) {
         this.integerMap = integerMap;
     }
 }

 @Bean
    public Map<String,Integer> integerMap(){
        Map<String,Integer> integerMap = new HashMap<String, Integer>();
        integerMap.put("map-1",1);
        integerMap.put("map-2",2);
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
```

同样这里也具有两种方式去注入Map类型Bean，且第二种的优先值高于第一种

以上就是Bean通过注解注入的几种方式，大家可以对比着xml注入的方式去看。





## 2022-02-12

## 1、@Configuration + @Bean

这种方式其实，在上一篇文章已经介绍过了，也是我们最常用的一种方式，@Configuration用来声明一个配置类，然后使用 @Bean 注解，用于声明一个bean，将其加入到Spring容器中。具体代码如下:

```
@Configuration
public class MyConfiguration {
    @Bean
    public Person person() {
        Person person = new Person();
        person.setName("spring");
        return person;
    }
}
```

## 2、@Componet + @ComponentScan

这种方式也是我们用的比较多的方式，@Componet中文译为组件，放在类名上面，然后@ComponentScan放置在我们的配置类上，然后可以指定一个路径，进行扫描带有@Componet注解的bean，然后加至容器中。具体代码如下:

```
@Component
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
```

结果输出:

```
Person{name='null'}
```

表示成功将Person放置在了IOC容器中。

## 3、@Import注解导入

前两种方式，大家用的可能比较多，也是平时开发中必须要知道的，@Import注解用的可能不是特别多了，但是也是非常重要的，在进行Spring扩展时经常会用到，它经常搭配自定义注解进行使用，然后往容器中导入一个配置文件。关于@Import注解，我会多介绍一点，它有四种使用方式。这是@Import注解的源码，表示只能放置在类上。

```
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface Import {

    /**
   * 用于导入一个class文件
     * {@link Configuration @Configuration}, {@link ImportSelector},
     * {@link ImportBeanDefinitionRegistrar}, or regular component classes to import.
     */

    Class<?>[] value();

}
```

### 3.1 @Import直接导入类

代码示例如下:

```
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
```

上述代码直接使用@Import导入了一个类，然后自动的就被放置在IOC容器中了。注意 我们的Person类上 就不需要任何的注解了，直接导入即可。

### 3.2 @Import + ImportSelector

其实在@Import注解的源码中，说的已经很清楚了，感兴趣的可以看下，我们实现一个ImportSelector的接口，然后实现其中的方法，进行导入。

代码如下:

```
@Import(MyImportSelector.class)
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
```

我自定义了一个 MyImportSelector 实现了 ImportSelector 接口，重写selectImports 方法，然后将我们要导入的类的全限定名写在里面即可，实现起来也是非常简单。

### 3.3 @Import + ImportBeanDefinitionRegistrar

这种方式也需要我们实现 ImportBeanDefinitionRegistrar 接口中的方法，具体代码如下:

```
@Import(MyImportBeanDefinitionRegistrar.class)
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
```

上述实现其实和Import的第二种方式差不多，都需要去实现接口，然后进行导入。接触到了一个新的概念，BeanDefinition，可以简单理解为bean的定义(bean的元数据)，也是需要放在IOC容器中进行管理的，先有bean的元数据，applicationContext再根据bean的元数据去创建Bean。

### 3.4 @Import + DeferredImportSelector

这种方式也需要我们进行实现接口，其实它和@Import的第二种方式差不多，DeferredImportSelector 它是 ImportSelector 的子接口，所以实现的方法和第二种无异。只是Spring的处理方式不同，它和Spring Boot中的自动导入配置文件 延迟导入有关，非常重要。使用方式如下:

```
@Import(MyDeferredImportSelector.class)
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
```

关于@Import注解的使用方式，大概就以上三种，当然它还可以搭配@Configuration注解使用，用于导入一个配置类。

## 4、使用FactoryBean接口

FactoryBean接口和BeanFactory千万不要弄混了，从名字其实可以大概的区分开，FactoryBean, 后缀为bean，那么它其实就是一个bean, BeanFactory，顾名思义 bean工厂，它是IOC容器的顶级接口，这俩接口都很重要。代码示例:

```
@Configuration
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

class PersonFactoryBean implements FactoryBean<Person> {

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
    public Class<?> getObjectType() {
        return Person.class;
    }
}
```

上述代码，我使用@Configuration + @Bean的方式将 PersonFactoryBean 加入到容器中，注意，我没有向容器中注入 Person, 而是直接注入的 PersonFactoryBean 然后从容器中拿Person这个类型的bean,成功运行。

## 5、使用 BeanDefinitionRegistryPostProcessor

其实这种方式也是利用到了 BeanDefinitionRegistry，在Spring容器启动的时候会执行 BeanDefinitionRegistryPostProcessor 的 postProcessBeanDefinitionRegistry 方法，大概意思就是等beanDefinition加载完毕之后，对beanDefinition进行后置处理，可以在此进行调整IOC容器中的beanDefinition，从而干扰到后面进行初始化bean。

具体代码如下:

```
public class Demo1 {
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
```

上述代码中，我们手动向beanDefinitionRegistry中注册了person的BeanDefinition。最终成功将person加入到applicationContext中，上述的几种方式的具体原理，我后面会进行介绍。

## 小结

向spring容器中加入bean的几种方式.

@Configuration + @Bean

@ComponentScan + @Component

@Import 配合接口进行导入

使用FactoryBean。

实现BeanDefinitionRegistryPostProcessor进行后置处理。