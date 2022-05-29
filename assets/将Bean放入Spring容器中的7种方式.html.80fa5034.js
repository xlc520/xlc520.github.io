import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{d as e}from"./app.b7aaa37e.js";const i={},s=e(`<h1 id="springboot\u5C06bean\u653E\u5165spring\u5BB9\u5668\u4E2D\u76847-\u4E94-\u79CD\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#springboot\u5C06bean\u653E\u5165spring\u5BB9\u5668\u4E2D\u76847-\u4E94-\u79CD\u65B9\u5F0F" aria-hidden="true">#</a> SpringBoot\u5C06Bean\u653E\u5165Spring\u5BB9\u5668\u4E2D\u76847(\u4E94)\u79CD\u65B9\u5F0F</h1><h2 id="\u66F4\u65B0-2022\u5E743\u670823\u65E511-25-11" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0-2022\u5E743\u670823\u65E511-25-11" aria-hidden="true">#</a> \u66F4\u65B0\uFF1A2022\u5E743\u670823\u65E511:25:11</h2><h2 id="\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#\u80CC\u666F" aria-hidden="true">#</a> \u80CC\u666F</h2><p>\u6211\u4EEC\u8C08\u5230Spring\u7684\u65F6\u5019\u4E00\u5B9A\u4F1A\u63D0\u5230IOC\u5BB9\u5668\u3001DI\u4F9D\u8D56\u6CE8\u5165\uFF0CSpring\u901A\u8FC7\u5C06\u4E00\u4E2A\u4E2A\u7C7B\u6807\u6CE8\u4E3ABean\u7684\u65B9\u6CD5\u6CE8\u5165\u5230IOC\u5BB9\u5668\u4E2D\uFF0C\u8FBE\u5230\u4E86\u63A7\u5236\u53CD\u8F6C\u7684\u6548\u679C\u3002\u90A3\u4E48\u6211\u4EEC\u521A\u5F00\u59CB\u63A5\u89E6Bean\u7684\u65F6\u5019\uFF0C\u4E00\u5B9A\u662F\u4F7F\u7528xml\u6587\u4EF6\uFF0C\u4E00\u4E2A\u4E00\u4E2A\u7684\u6CE8\u5165\uFF0C\u5C31\u4F8B\u5982\u4E0B\u9762\u8FD9\u6837\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> &lt;bean id=&quot;bean&quot; class=&quot;beandemo.Bean&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6211\u4EEC\u7684\u9879\u76EE\u4E00\u822C\u5F88\u5927\u7684\u8BDD\uFF0C\u5C31\u9700\u8981\u6210\u5343\u4E0A\u767E\u4E2ABean\u53BB\u4F7F\u7528\uFF0C\u8FD9\u6837\u5199\u8D77\u6765\u5C31\u5F88\u7E41\u7410\u3002\u90A3\u4E48Spring\u5C31\u5E2E\u6211\u4EEC\u5B9E\u73B0\u4E86\u4E00\u79CD\u901A\u8FC7\u6CE8\u89E3\u6765\u5B9E\u73B0\u6CE8\u5165\u7684\u65B9\u6CD5\u3002\u53EA\u9700\u8981\u5728\u4F60\u9700\u8981\u6CE8\u5165\u7684\u7C7B\u524D\u9762\u52A0\u4E0A\u76F8\u5E94\u7684\u6CE8\u89E3\uFF0CSpring\u5C31\u4F1A\u5E2E\u52A9\u6211\u4EEC\u626B\u63CF\u5230\u4ED6\u4EEC\u53BB\u5B9E\u73B0\u6CE8\u5165\u3002</p><blockquote><p>xml\u626B\u63CF\u5305\u7684\u65B9\u5F0F</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> &lt;context:component-scan base-package=&quot;com.company.beandemo&quot;/&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u901A\u8FC7\u6CE8\u89E3\u6CE8\u5165\u7684\u4E00\u822C\u5F62\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u6CE8\u89E3\u6CE8\u5165\u7684\u4E00\u822C\u5F62\u5F0F" aria-hidden="true">#</a> \u901A\u8FC7\u6CE8\u89E3\u6CE8\u5165\u7684\u4E00\u822C\u5F62\u5F0F</h2><p>\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u6CE8\u5165Bean\u6709\u4E00\u4E2A\u6700\u76F4\u767D\uFF0C\u6700\u6613\u61C2\u7684\u65B9\u5F0F\u53BB\u5B9E\u73B0\u6CE8\u5165\uFF0C\u4E0B\u9762\u5E9F\u8BDD\u5148\u4E0D\u591A\u8BF4\uFF0C\u5148\u8D34\u4EE3\u7801\u3002</p><hr><ul><li>Bean\u7C7B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> public class MyBean{
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Configuration\u7C7B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> //\u521B\u5EFA\u4E00\u4E2Aclass\u914D\u7F6E\u6587\u4EF6
 @Configuration
 public class MyConfiguration{
  //\u5C06\u4E00\u4E2ABean\u4EA4\u7531Spring\u8FDB\u884C\u7BA1\u7406
        @Bean
        public MyBean myBean(){
            return new MyBean();
        }
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Test\u7C7B</li></ul><p>\u4E0Exml\u6709\u4E00\u70B9\u4E0D\u540C\uFF0C\u8FD9\u91CC\u5728Test\u4E2D\uFF0C\u5B9E\u4F8B\u5316\u7684\u4E0D\u518D\u662FClassPathXmlApplicationContext\uFF0C\u800C\u662F\u83B7\u53D6\u7684AnnotationConfigApplicationContext\u5B9E\u4F8B\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> ApplicationContext context = new AnnotationConfigApplicationContext(MyConfiguration.class);
 MyBean myBean = cotext.getBean(&quot;myBean&quot;,MyBean.class);
 System.out.println(&quot;myBean = &quot; + myBean);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>\u4E0A\u9762\u7684\u4EE3\u7801\u4E2DMyBean\u4E5F\u5C31\u662F\u6211\u4EEC\u9700\u8981Spring\u53BB\u7BA1\u7406\u7684\u4E00\u4E2ABean\uFF0C\u4ED6\u53EA\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u7C7B\u3002\u800CMyConfiguration\u4E2D\uFF0C\u6211\u4EEC\u9996\u5148\u7528@Configuration\u6CE8\u89E3\u53BB\u6807\u8BB0\u4E86\u8BE5\u7C7B\uFF0C\u8FD9\u6837\u6807\u660E\u8BE5\u7C7B\u662F\u4E00\u4E2ASpring\u7684\u4E00\u4E2A\u914D\u7F6E\u7C7B\uFF0C\u5728\u52A0\u8F7D\u914D\u7F6E\u7684\u65F6\u5019\u4F1A\u53BB\u52A0\u8F7D\u4ED6\u3002</p><p>\u5728MyConfiguration\u4E2D\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u6709\u4E00\u4E2A\u65B9\u6CD5\u8FD4\u56DE\u7684\u662F\u4E00\u4E2AMyBean\u7684\u5B9E\u4F8B\uFF0C\u5E76\u4E14\u8BE5\u65B9\u6CD5\u4E0A\u6807\u6CE8\u7740@Bean\u7684\u6CE8\u89E3\uFF0C\u6807\u660E\u8FD9\u662F\u4E00\u4E2A\u6CE8\u5165Bean\u7684\u65B9\u6CD5\uFF0C\u4F1A\u5C06\u4E0B\u9762\u7684\u8FD4\u56DE\u7684Bean\u6CE8\u5165IOC\u3002</p><blockquote><p>\u57FA\u4E8E\u5FAE\u670D\u52A1\u7684\u601D\u60F3\uFF0C\u6784\u5EFA\u5728 B2C \u7535\u5546\u573A\u666F\u4E0B\u7684\u9879\u76EE\u5B9E\u6218\u3002\u6838\u5FC3\u6280\u672F\u6808\uFF0C\u662F Spring Boot + Dubbo \u3002\u672A\u6765\uFF0C\u4F1A\u91CD\u6784\u6210 Spring Cloud Alibaba \u3002</p><p>\u9879\u76EE\u5730\u5740\uFF1Ahttps://github.com/YunaiV/onemall</p></blockquote><h2 id="\u901A\u8FC7\u6784\u9020\u65B9\u6CD5\u6CE8\u5165bean" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u6784\u9020\u65B9\u6CD5\u6CE8\u5165bean" aria-hidden="true">#</a> \u901A\u8FC7\u6784\u9020\u65B9\u6CD5\u6CE8\u5165Bean</h2><p>\u6211\u4EEC\u5728\u751F\u6210\u4E00\u4E2ABean\u5B9E\u4F8B\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u4F7F\u7528Bean\u7684\u6784\u9020\u65B9\u6CD5\u5C06Bean\u5B9E\u73B0\u6CE8\u5165\u3002\u76F4\u63A5\u770B\u4EE3\u7801</p><hr><ul><li>Bean\u7C7B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> @Component
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>AnotherBean\u7C7B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> @Component(value=&quot;Bean\u7684id\uFF0C\u9ED8\u8BA4\u4E3A\u7C7B\u540D\u5C0F\u9A7C\u5CF0&quot;)
 public class AnotherBean {
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Configuration\u7C7B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> @Configuration
 @ComponentScan(&quot;com.company.annotationbean&quot;)
 public class MyConfiguration{
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p>\u8FD9\u91CC\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\uFF0C\u548C\u4E00\u822C\u65B9\u5F0F\u6CE8\u5165\u7684\u4EE3\u7801\u4E0D\u4E00\u6837\u4E86\uFF0C\u6211\u4EEC\u6765\u770B\u770B\u65B0\u7684\u6CE8\u89E3\u90FD\u662F\u4EC0\u4E48\u610F\u601D\uFF1A</p><ul><li>@AutoWired</li></ul><p>\u7B80\u5355\u7C97\u66B4\uFF0C\u76F4\u63A5\u7FFB\u8BD1\u8FC7\u6765\u7684\u610F\u601D\u5C31\u662F\u81EA\u52A8\u88C5\u914D\u{1F527}\uFF0C\u8FD8\u4E0D\u7406\u89E3\u4E3A\u4EC0\u4E48\u53EB\u81EA\u52A8\u88C5\u914D\u{1F527}\uFF1F\u770B\u4E86\u4E0B\u4E00\u4E2A\u6CE8\u89E3\u7684\u89E3\u91CA\u4F60\u5C31\u77E5\u9053\u4E86\u3002\u82E5\u662F\u5728\u8FD9\u91CC\u6CE8\u5165\u7684\u65F6\u5019\u6307\u5B9A\u4E00\u4E2ABean\u7684id\u5C31\u8981\u4F7F\u7528@Qualifier\u6CE8\u89E3</p><ul><li>@Component\uFF08\u9ED8\u8BA4\u5355\u4F8B\u6A21\u5F0F\uFF09</li></ul><p>\u4EC0\u4E48\uFF1F\uFF1F\u8FD9\u7FFB\u8BD1\u8FC7\u6765\u662F\u96F6\u4EF6\uFF0C\u600E\u4E48\u611F\u89C9\u50CF\u662F\u4FEE\u6C7D\u8F66\uFF1F\uFF1F\u662F\u7684\uFF0CSpring\u7BA1\u7406Bean\u7684\u65B9\u6CD5\u5C31\u662F\u4FEE\u6C7D\u8F66\u7684\u65B9\u5F0F\u3002\u6211\u4EEC\u5728\u9700\u8981\u5C06\u4E00\u4E2A\u7C7B\u53D8\u6210\u4E00\u4E2ABean\u88ABSpring\u53EF\u4EE5\u6CE8\u5165\u7684\u65F6\u5019\u52A0\u4E0A\u6CE8\u89E3\u96F6\u4EF6@Conmonent\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728\u52A0\u8F7DBean\u7684\u65F6\u5019\u628A\u4ED6\u50CF\u96F6\u4EF6\u4E00\u6837\u88C5\u914D\u{1F527}\u5230\u8FD9\u4E2AIOC\u6C7D\u8F66\u4E0A\u4E86</p><p>\u5728\u8FD9\u91CC\u6211\u4EEC\u8FD8\u6709\u51E0\u4E2A\u5176\u4ED6\u7684\u6CE8\u89E3\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u8FD9\u4E2A\u529F\u80FD\uFF0C\u4E5F\u5C31\u662F\u7EC6\u5316\u7684@Component\uFF1A</p><ul><li>@Controller \u6807\u6CE8\u5728Controller\u5C42</li><li>@Service \u6807\u6CE8\u5728Service\u5C42</li><li>@Repository \u6807\u6CE8\u5728dao\u5C42</li></ul><p>\u8FD8\u662F\u7FFB\u8BD1\uFF0C\u96F6\u4EF6\u626B\u63CF\uFF0C\u6211\u4EEC\u53BB\u770B\u770B\u62EC\u53F7\u91CC\u7684\u201C\u96F6\u4EF6\u4ED3\u5E93\u201D\u91CC\u9762\uFF0C\u54EA\u4E9B\u201C\u96F6\u4EF6\u201D\uFF08\u7C7B\uFF09\u9700\u8981\u88AB\u88C5\u8F7D\uFF0CSpring\u5C31\u4F1A\u53BB\u626B\u63CF\u8FD9\u4E2A\u5305\uFF0C\u5C06\u91CC\u9762\u6240\u6709\u6807\u6CE8\u4E86@Component\u7684\u7C7B\u8FDB\u884C\u6CE8\u5165\u3002</p><p>\u8FD9\u91CC\u7684\u901A\u8FC7\u6784\u9020\u65B9\u6CD5\u8FDB\u884C\u6CE8\u5165\u5C31\u5F88\u597D\u7406\u89E3\u4E86\uFF0C\u6211\u4EEC\u5728\u88C5\u914DMyBean\u8FD9\u4E2A\u96F6\u4EF6\u7684\u65F6\u5019\uFF0C\u7A81\u7136\u53D1\u73B0\u4ED6\u5FC5\u987B\u5728AnotherBean\u7684\u57FA\u7840\u4E0A\u624D\u80FD\u5B89\u88C5\u5230IOC\u91CC\u9762\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u5728\u6BCF\u6B21\u88C5\u914DMyBean\u7684\u65F6\u5019\u81EA\u52A8\u88C5\u914D\u{1F527}\u4E00\u4E2AAnotherBean\u8FDB\u53BB\u3002\u4E3E\u4E2A\u{1F330}\u5427\uFF1A</p><p>\u8FD8\u662F\u4EE5\u6C7D\u8F66\u4E3A\u4F8B\uFF0C\u6211\u4EEC\u5728\u8E29\u6CB9\u95E8\u51FA\u53D1\u4E4B\u524D\uFF0C\u662F\u4E0D\u662F\u5FC5\u987B\u53D1\u8F66\uFF1F\uFF1F\u8FD9\u91CC\u7684AutoWired\u7684\u5185\u5BB9\u5C31\u50CF\u53D1\u8F66\uFF0C\u4F60\u4E0D\u53D1\u8F66\uFF0C\u8FD9\u4E2A\u6CB9\u95E8\u4F60\u8E29\u65AD\u90FD\u6CA1\u6709\u7528\uFF0C\u4ED6\u90FD\u4E0D\u4F1A\u8D70\u3002</p><h2 id="\u901A\u8FC7set\u65B9\u6CD5\u6CE8\u5165bean" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7set\u65B9\u6CD5\u6CE8\u5165bean" aria-hidden="true">#</a> \u901A\u8FC7set\u65B9\u6CD5\u6CE8\u5165Bean</h2><p>\u6211\u4EEC\u53EF\u4EE5\u5728\u4E00\u4E2A\u5C5E\u6027\u7684set\u65B9\u6CD5\u4E2D\u53BB\u5C06Bean\u5B9E\u73B0\u6CE8\u5165\uFF0C\u770B\u4EE3\u7801\u5427</p><hr><ul><li>MyBean\u7C7B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> @Component
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Configuration\u7C7B \u548C Test\u7C7B</li></ul><p>\u540C\u4E0A\u4E00\u4E2A\uFF0C\u5C31\u4E0D\u8D34\u4E86</p><hr><p>\u8FD9\u91CC\u6211\u4EEC\u53D1\u73B0\u5728setter\u65B9\u6CD5\u4E0A\u6211\u4EEC\u6709\u4E00\u4E2A@AutoWired,\u4E0E\u4E0A\u9762\u4E0D\u540C\u7684\u662F\uFF0C\u6211\u4EEC\u4E0D\u4F1A\u5728\u5B9E\u4F8B\u5316\u8BE5\u7C7B\u65F6\u5C31\u81EA\u52A8\u88C5\u914D\u{1F527}\u8FD9\u4E2A\u5BF9\u8C61\uFF0C\u800C\u662F\u5728\u663E\u5F0F\u8C03\u7528setter\u7684\u65F6\u5019\u53BB\u88C5\u914D\u3002</p><h2 id="\u901A\u8FC7\u5C5E\u6027\u53BB\u6CE8\u5165bean" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7\u5C5E\u6027\u53BB\u6CE8\u5165bean" aria-hidden="true">#</a> \u901A\u8FC7\u5C5E\u6027\u53BB\u6CE8\u5165Bean</h2><p>\u6211\u4EEC\u524D\u9762\u4E24\u79CD\u6CE8\u5165\u7684\u65B9\u5F0F\u8BF8\u5982\u65F6\u95F4\u4E0D\u540C\uFF0C\u5E76\u4E14\u4EE3\u7801\u8F83\u591A\uFF0C\u82E5\u662F\u901A\u8FC7\u5C5E\u6027\uFF0C\u5373\u5C31\u662F</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> @Component
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u6211\u4EEC\u8FD9\u4E2A\u7C7B\u4E2D\u9700\u8981\u4F7F\u7528AnotherBean\u8FD9\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7@AutoWired\u53BB\u81EA\u52A8\u88C5\u914D\u5B83\u3002</p><blockquote><p>\u5BF9\u4E8E\u6709\u4E9B\u5C0F\u4F19\u4F34\u95EE\u79C1\u6709\u5C5E\u6027\uFF0CSpring\u600E\u4E48\u53BB\u52A0\u8F7D\u5B83\u5230IOC\u7684\uFF1F\u63A8\u8350\u53BB\u770B\u770B\u53CD\u5C04</p></blockquote><h2 id="\u901A\u8FC7list\u6CE8\u5165bean" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7list\u6CE8\u5165bean" aria-hidden="true">#</a> \u901A\u8FC7List\u6CE8\u5165Bean</h2><ul><li>MyBeanList\u7C7B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> @Component
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MyConfiguration\u7C7B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> @Configuration
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u6211\u4EEC\u5C06MyBeanList\u8FDB\u884C\u4E86\u6CE8\u5165\uFF0C\u5BF9List\u4E2D\u7684\u5143\u7D20\u4F1A\u9010\u4E00\u6CE8\u5165\u3002\u4E0B\u9762\u4ECB\u7ECD\u53E6\u4E00\u79CD\u65B9\u5F0F\u6CE8\u5165List</p><ul><li>MyConfiguration\u7C7B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> @Bean
    //\u901A\u8FC7\u8BE5\u6CE8\u89E3\u8BBE\u5B9ABean\u6CE8\u5165\u7684\u4F18\u5148\u7EA7\uFF0C\u4E0D\u4E00\u5B9A\u8FDE\u7EED\u6570\u5B57
    @Order(34)
    public String string1(){
        return &quot;String-1&quot;;
    }

    @Bean
    @Order(14)
    public String string2(){
        return &quot;String-2&quot;;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u5165\u4E0EList\u4E2D\u6CDB\u578B\u4E00\u6837\u7684\u7C7B\u578B\uFF0C\u4F1A\u81EA\u52A8\u53BB\u5339\u914D\u7C7B\u578B\uFF0C\u53CA\u65F6\u8FD9\u91CC\u6CA1\u6709\u4EFB\u4F55List\u7684\u611F\u89C9\uFF0C\u53EA\u662FString\u7684\u7C7B\u578B\uFF0C\u4F46\u4ED6\u4F1A\u53BB\u901A\u8FC7List\u7684Bean\u7684\u65B9\u5F0F\u53BB\u6CE8\u5165\u3002</p><blockquote><p>\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u7684\u4F18\u5148\u7EA7\u9AD8\u4E8E\u7B2C\u4E00\u79CD\uFF0C\u5F53\u4E24\u4E2A\u90FD\u5B58\u5728\u7684\u65F6\u5019\uFF0C\u82E5\u8981\u5F3A\u5236\u53BB\u4F7F\u7528\u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF0C\u5219\u8981\u53BB\u6307\u5B9ABean\u7684id\u5373\u53EF</p></blockquote><h2 id="\u901A\u8FC7map\u53BB\u6CE8\u5165bean" tabindex="-1"><a class="header-anchor" href="#\u901A\u8FC7map\u53BB\u6CE8\u5165bean" aria-hidden="true">#</a> \u901A\u8FC7Map\u53BB\u6CE8\u5165Bean</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> @Component
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u540C\u6837\u8FD9\u91CC\u4E5F\u5177\u6709\u4E24\u79CD\u65B9\u5F0F\u53BB\u6CE8\u5165Map\u7C7B\u578BBean\uFF0C\u4E14\u7B2C\u4E8C\u79CD\u7684\u4F18\u5148\u503C\u9AD8\u4E8E\u7B2C\u4E00\u79CD</p><p>\u4EE5\u4E0A\u5C31\u662FBean\u901A\u8FC7\u6CE8\u89E3\u6CE8\u5165\u7684\u51E0\u79CD\u65B9\u5F0F\uFF0C\u5927\u5BB6\u53EF\u4EE5\u5BF9\u6BD4\u7740xml\u6CE8\u5165\u7684\u65B9\u5F0F\u53BB\u770B\u3002</p><h2 id="_2022-02-12" tabindex="-1"><a class="header-anchor" href="#_2022-02-12" aria-hidden="true">#</a> 2022-02-12</h2><h2 id="_1\u3001-configuration-bean" tabindex="-1"><a class="header-anchor" href="#_1\u3001-configuration-bean" aria-hidden="true">#</a> 1\u3001@Configuration + @Bean</h2><p>\u8FD9\u79CD\u65B9\u5F0F\u5176\u5B9E\uFF0C\u5728\u4E0A\u4E00\u7BC7\u6587\u7AE0\u5DF2\u7ECF\u4ECB\u7ECD\u8FC7\u4E86\uFF0C\u4E5F\u662F\u6211\u4EEC\u6700\u5E38\u7528\u7684\u4E00\u79CD\u65B9\u5F0F\uFF0C@Configuration\u7528\u6765\u58F0\u660E\u4E00\u4E2A\u914D\u7F6E\u7C7B\uFF0C\u7136\u540E\u4F7F\u7528 @Bean \u6CE8\u89E3\uFF0C\u7528\u4E8E\u58F0\u660E\u4E00\u4E2Abean\uFF0C\u5C06\u5176\u52A0\u5165\u5230Spring\u5BB9\u5668\u4E2D\u3002\u5177\u4F53\u4EE3\u7801\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Configuration
public class MyConfiguration {
    @Bean
    public Person person() {
        Person person = new Person();
        person.setName(&quot;spring&quot;);
        return person;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2\u3001-componet-componentscan" tabindex="-1"><a class="header-anchor" href="#_2\u3001-componet-componentscan" aria-hidden="true">#</a> 2\u3001@Componet + @ComponentScan</h2><p>\u8FD9\u79CD\u65B9\u5F0F\u4E5F\u662F\u6211\u4EEC\u7528\u7684\u6BD4\u8F83\u591A\u7684\u65B9\u5F0F\uFF0C@Componet\u4E2D\u6587\u8BD1\u4E3A\u7EC4\u4EF6\uFF0C\u653E\u5728\u7C7B\u540D\u4E0A\u9762\uFF0C\u7136\u540E@ComponentScan\u653E\u7F6E\u5728\u6211\u4EEC\u7684\u914D\u7F6E\u7C7B\u4E0A\uFF0C\u7136\u540E\u53EF\u4EE5\u6307\u5B9A\u4E00\u4E2A\u8DEF\u5F84\uFF0C\u8FDB\u884C\u626B\u63CF\u5E26\u6709@Componet\u6CE8\u89E3\u7684bean\uFF0C\u7136\u540E\u52A0\u81F3\u5BB9\u5668\u4E2D\u3002\u5177\u4F53\u4EE3\u7801\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Component
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\u8F93\u51FA:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Person{name=&#39;null&#39;}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8868\u793A\u6210\u529F\u5C06Person\u653E\u7F6E\u5728\u4E86IOC\u5BB9\u5668\u4E2D\u3002</p><h2 id="_3\u3001-import\u6CE8\u89E3\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#_3\u3001-import\u6CE8\u89E3\u5BFC\u5165" aria-hidden="true">#</a> 3\u3001@Import\u6CE8\u89E3\u5BFC\u5165</h2><p>\u524D\u4E24\u79CD\u65B9\u5F0F\uFF0C\u5927\u5BB6\u7528\u7684\u53EF\u80FD\u6BD4\u8F83\u591A\uFF0C\u4E5F\u662F\u5E73\u65F6\u5F00\u53D1\u4E2D\u5FC5\u987B\u8981\u77E5\u9053\u7684\uFF0C@Import\u6CE8\u89E3\u7528\u7684\u53EF\u80FD\u4E0D\u662F\u7279\u522B\u591A\u4E86\uFF0C\u4F46\u662F\u4E5F\u662F\u975E\u5E38\u91CD\u8981\u7684\uFF0C\u5728\u8FDB\u884CSpring\u6269\u5C55\u65F6\u7ECF\u5E38\u4F1A\u7528\u5230\uFF0C\u5B83\u7ECF\u5E38\u642D\u914D\u81EA\u5B9A\u4E49\u6CE8\u89E3\u8FDB\u884C\u4F7F\u7528\uFF0C\u7136\u540E\u5F80\u5BB9\u5668\u4E2D\u5BFC\u5165\u4E00\u4E2A\u914D\u7F6E\u6587\u4EF6\u3002\u5173\u4E8E@Import\u6CE8\u89E3\uFF0C\u6211\u4F1A\u591A\u4ECB\u7ECD\u4E00\u70B9\uFF0C\u5B83\u6709\u56DB\u79CD\u4F7F\u7528\u65B9\u5F0F\u3002\u8FD9\u662F@Import\u6CE8\u89E3\u7684\u6E90\u7801\uFF0C\u8868\u793A\u53EA\u80FD\u653E\u7F6E\u5728\u7C7B\u4E0A\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Target(ElementType.TYPE)
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-import\u76F4\u63A5\u5BFC\u5165\u7C7B" tabindex="-1"><a class="header-anchor" href="#_3-1-import\u76F4\u63A5\u5BFC\u5165\u7C7B" aria-hidden="true">#</a> 3.1 @Import\u76F4\u63A5\u5BFC\u5165\u7C7B</h3><p>\u4EE3\u7801\u793A\u4F8B\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Person {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u76F4\u63A5\u4F7F\u7528@Import\u5BFC\u5165\u4E86\u4E00\u4E2A\u7C7B\uFF0C\u7136\u540E\u81EA\u52A8\u7684\u5C31\u88AB\u653E\u7F6E\u5728IOC\u5BB9\u5668\u4E2D\u4E86\u3002\u6CE8\u610F \u6211\u4EEC\u7684Person\u7C7B\u4E0A \u5C31\u4E0D\u9700\u8981\u4EFB\u4F55\u7684\u6CE8\u89E3\u4E86\uFF0C\u76F4\u63A5\u5BFC\u5165\u5373\u53EF\u3002</p><h3 id="_3-2-import-importselector" tabindex="-1"><a class="header-anchor" href="#_3-2-import-importselector" aria-hidden="true">#</a> 3.2 @Import + ImportSelector</h3><p>\u5176\u5B9E\u5728@Import\u6CE8\u89E3\u7684\u6E90\u7801\u4E2D\uFF0C\u8BF4\u7684\u5DF2\u7ECF\u5F88\u6E05\u695A\u4E86\uFF0C\u611F\u5174\u8DA3\u7684\u53EF\u4EE5\u770B\u4E0B\uFF0C\u6211\u4EEC\u5B9E\u73B0\u4E00\u4E2AImportSelector\u7684\u63A5\u53E3\uFF0C\u7136\u540E\u5B9E\u73B0\u5176\u4E2D\u7684\u65B9\u6CD5\uFF0C\u8FDB\u884C\u5BFC\u5165\u3002</p><p>\u4EE3\u7801\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Import(MyImportSelector.class)
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u81EA\u5B9A\u4E49\u4E86\u4E00\u4E2A MyImportSelector \u5B9E\u73B0\u4E86 ImportSelector \u63A5\u53E3\uFF0C\u91CD\u5199selectImports \u65B9\u6CD5\uFF0C\u7136\u540E\u5C06\u6211\u4EEC\u8981\u5BFC\u5165\u7684\u7C7B\u7684\u5168\u9650\u5B9A\u540D\u5199\u5728\u91CC\u9762\u5373\u53EF\uFF0C\u5B9E\u73B0\u8D77\u6765\u4E5F\u662F\u975E\u5E38\u7B80\u5355\u3002</p><h3 id="_3-3-import-importbeandefinitionregistrar" tabindex="-1"><a class="header-anchor" href="#_3-3-import-importbeandefinitionregistrar" aria-hidden="true">#</a> 3.3 @Import + ImportBeanDefinitionRegistrar</h3><p>\u8FD9\u79CD\u65B9\u5F0F\u4E5F\u9700\u8981\u6211\u4EEC\u5B9E\u73B0 ImportBeanDefinitionRegistrar \u63A5\u53E3\u4E2D\u7684\u65B9\u6CD5\uFF0C\u5177\u4F53\u4EE3\u7801\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Import(MyImportBeanDefinitionRegistrar.class)
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u5B9E\u73B0\u5176\u5B9E\u548CImport\u7684\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u5DEE\u4E0D\u591A\uFF0C\u90FD\u9700\u8981\u53BB\u5B9E\u73B0\u63A5\u53E3\uFF0C\u7136\u540E\u8FDB\u884C\u5BFC\u5165\u3002\u63A5\u89E6\u5230\u4E86\u4E00\u4E2A\u65B0\u7684\u6982\u5FF5\uFF0CBeanDefinition\uFF0C\u53EF\u4EE5\u7B80\u5355\u7406\u89E3\u4E3Abean\u7684\u5B9A\u4E49(bean\u7684\u5143\u6570\u636E)\uFF0C\u4E5F\u662F\u9700\u8981\u653E\u5728IOC\u5BB9\u5668\u4E2D\u8FDB\u884C\u7BA1\u7406\u7684\uFF0C\u5148\u6709bean\u7684\u5143\u6570\u636E\uFF0CapplicationContext\u518D\u6839\u636Ebean\u7684\u5143\u6570\u636E\u53BB\u521B\u5EFABean\u3002</p><h3 id="_3-4-import-deferredimportselector" tabindex="-1"><a class="header-anchor" href="#_3-4-import-deferredimportselector" aria-hidden="true">#</a> 3.4 @Import + DeferredImportSelector</h3><p>\u8FD9\u79CD\u65B9\u5F0F\u4E5F\u9700\u8981\u6211\u4EEC\u8FDB\u884C\u5B9E\u73B0\u63A5\u53E3\uFF0C\u5176\u5B9E\u5B83\u548C@Import\u7684\u7B2C\u4E8C\u79CD\u65B9\u5F0F\u5DEE\u4E0D\u591A\uFF0CDeferredImportSelector \u5B83\u662F ImportSelector \u7684\u5B50\u63A5\u53E3\uFF0C\u6240\u4EE5\u5B9E\u73B0\u7684\u65B9\u6CD5\u548C\u7B2C\u4E8C\u79CD\u65E0\u5F02\u3002\u53EA\u662FSpring\u7684\u5904\u7406\u65B9\u5F0F\u4E0D\u540C\uFF0C\u5B83\u548CSpring Boot\u4E2D\u7684\u81EA\u52A8\u5BFC\u5165\u914D\u7F6E\u6587\u4EF6 \u5EF6\u8FDF\u5BFC\u5165\u6709\u5173\uFF0C\u975E\u5E38\u91CD\u8981\u3002\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Import(MyDeferredImportSelector.class)
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5173\u4E8E@Import\u6CE8\u89E3\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u5927\u6982\u5C31\u4EE5\u4E0A\u4E09\u79CD\uFF0C\u5F53\u7136\u5B83\u8FD8\u53EF\u4EE5\u642D\u914D@Configuration\u6CE8\u89E3\u4F7F\u7528\uFF0C\u7528\u4E8E\u5BFC\u5165\u4E00\u4E2A\u914D\u7F6E\u7C7B\u3002</p><h2 id="_4\u3001\u4F7F\u7528factorybean\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#_4\u3001\u4F7F\u7528factorybean\u63A5\u53E3" aria-hidden="true">#</a> 4\u3001\u4F7F\u7528FactoryBean\u63A5\u53E3</h2><p>FactoryBean\u63A5\u53E3\u548CBeanFactory\u5343\u4E07\u4E0D\u8981\u5F04\u6DF7\u4E86\uFF0C\u4ECE\u540D\u5B57\u5176\u5B9E\u53EF\u4EE5\u5927\u6982\u7684\u533A\u5206\u5F00\uFF0CFactoryBean, \u540E\u7F00\u4E3Abean\uFF0C\u90A3\u4E48\u5B83\u5176\u5B9E\u5C31\u662F\u4E00\u4E2Abean, BeanFactory\uFF0C\u987E\u540D\u601D\u4E49 bean\u5DE5\u5382\uFF0C\u5B83\u662FIOC\u5BB9\u5668\u7684\u9876\u7EA7\u63A5\u53E3\uFF0C\u8FD9\u4FE9\u63A5\u53E3\u90FD\u5F88\u91CD\u8981\u3002\u4EE3\u7801\u793A\u4F8B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@Configuration
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\uFF0C\u6211\u4F7F\u7528@Configuration + @Bean\u7684\u65B9\u5F0F\u5C06 PersonFactoryBean \u52A0\u5165\u5230\u5BB9\u5668\u4E2D\uFF0C\u6CE8\u610F\uFF0C\u6211\u6CA1\u6709\u5411\u5BB9\u5668\u4E2D\u6CE8\u5165 Person, \u800C\u662F\u76F4\u63A5\u6CE8\u5165\u7684 PersonFactoryBean \u7136\u540E\u4ECE\u5BB9\u5668\u4E2D\u62FFPerson\u8FD9\u4E2A\u7C7B\u578B\u7684bean,\u6210\u529F\u8FD0\u884C\u3002</p><h2 id="_5\u3001\u4F7F\u7528-beandefinitionregistrypostprocessor" tabindex="-1"><a class="header-anchor" href="#_5\u3001\u4F7F\u7528-beandefinitionregistrypostprocessor" aria-hidden="true">#</a> 5\u3001\u4F7F\u7528 BeanDefinitionRegistryPostProcessor</h2><p>\u5176\u5B9E\u8FD9\u79CD\u65B9\u5F0F\u4E5F\u662F\u5229\u7528\u5230\u4E86 BeanDefinitionRegistry\uFF0C\u5728Spring\u5BB9\u5668\u542F\u52A8\u7684\u65F6\u5019\u4F1A\u6267\u884C BeanDefinitionRegistryPostProcessor \u7684 postProcessBeanDefinitionRegistry \u65B9\u6CD5\uFF0C\u5927\u6982\u610F\u601D\u5C31\u662F\u7B49beanDefinition\u52A0\u8F7D\u5B8C\u6BD5\u4E4B\u540E\uFF0C\u5BF9beanDefinition\u8FDB\u884C\u540E\u7F6E\u5904\u7406\uFF0C\u53EF\u4EE5\u5728\u6B64\u8FDB\u884C\u8C03\u6574IOC\u5BB9\u5668\u4E2D\u7684beanDefinition\uFF0C\u4ECE\u800C\u5E72\u6270\u5230\u540E\u9762\u8FDB\u884C\u521D\u59CB\u5316bean\u3002</p><p>\u5177\u4F53\u4EE3\u7801\u5982\u4E0B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public class Demo1 {
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u8FF0\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u624B\u52A8\u5411beanDefinitionRegistry\u4E2D\u6CE8\u518C\u4E86person\u7684BeanDefinition\u3002\u6700\u7EC8\u6210\u529F\u5C06person\u52A0\u5165\u5230applicationContext\u4E2D\uFF0C\u4E0A\u8FF0\u7684\u51E0\u79CD\u65B9\u5F0F\u7684\u5177\u4F53\u539F\u7406\uFF0C\u6211\u540E\u9762\u4F1A\u8FDB\u884C\u4ECB\u7ECD\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><p>\u5411spring\u5BB9\u5668\u4E2D\u52A0\u5165bean\u7684\u51E0\u79CD\u65B9\u5F0F.</p><p>@Configuration + @Bean</p><p>@ComponentScan + @Component</p><p>@Import \u914D\u5408\u63A5\u53E3\u8FDB\u884C\u5BFC\u5165</p><p>\u4F7F\u7528FactoryBean\u3002</p><p>\u5B9E\u73B0BeanDefinitionRegistryPostProcessor\u8FDB\u884C\u540E\u7F6E\u5904\u7406\u3002</p>`,116);function a(r,l){return s}var o=n(i,[["render",a],["__file","\u5C06Bean\u653E\u5165Spring\u5BB9\u5668\u4E2D\u76847\u79CD\u65B9\u5F0F.html.vue"]]);export{o as default};
