import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as r,c as t,d as e,e as i,b as a,a as l}from"./app-BkZy1zYI.js";const c={},o=l(`<h1 id="japidocs-教程" tabindex="-1"><a class="header-anchor" href="#japidocs-教程"><span>JApiDocs 教程</span></a></h1><p>一、Maven 依赖</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>&lt;!--  JApiDocs  --&gt;
&lt;dependency&gt;
   &lt;groupId&gt;io.github.yedaxia&lt;/groupId&gt;
   &lt;artifactId&gt;japidocs&lt;/artifactId&gt;
   &lt;version&gt;1.4.3&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、代码规范" tabindex="-1"><a class="header-anchor" href="#二、代码规范"><span>二、代码规范</span></a></h2><h3 id="_1-分组名称-description" tabindex="-1"><a class="header-anchor" href="#_1-分组名称-description"><span>1. 分组名称 @description</span></a></h3><p><em>注：官方文档中注明分组名称@description，但是实际应用中不需要加入注解，像下例所示，直接写注释即可。（类上写不写都行，方法上如果加上@description 反而不显示）</em> 例：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>/**
 * 用户接口
 */
/*注意：这里不能空行，否则注释名无法显示*/
@RequestMapping(&quot;test&quot;)
@Controller
public class testInterface {

    @Autowired
    private RoleService roleService;
    /**
     * 保存用户
     */
    @PostMapping(&quot;advice&quot;)
    public RoleInfo getAdviceList(String docId){
        return roleService.FindRoleBydocId(docId);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-接口参数-japidocs-会通过-param-来寻找接口参数和进一步解析参数的内容" tabindex="-1"><a class="header-anchor" href="#_2-接口参数-japidocs-会通过-param-来寻找接口参数和进一步解析参数的内容"><span>2. 接口参数（JApiDocs 会通过 @param 来寻找接口参数和进一步解析参数的内容）</span></a></h3><p><em>注：注释一定要放在@注解的上面，否则参数会不显示</em></p><h4 id="_1-格式-接口参数-param-字段-字段解释" tabindex="-1"><a class="header-anchor" href="#_1-格式-接口参数-param-字段-字段解释"><span>（1）格式：接口参数 @param 字段 字段解释</span></a></h4><p>例：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>/**
     * @description 保存用户
     * @param docId  医生id
    */
@PostMapping(&quot;advice&quot;)
public RoleInfo getAdviceList(String docId){
    return roleService.FindRoleBydocId(docId);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-在相应的-bean-对象里添加注释" tabindex="-1"><a class="header-anchor" href="#_2-在相应的-bean-对象里添加注释"><span>（2）在相应的 bean 对象里添加注释</span></a></h4><p>例：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>public class RemindInfo implements Serializable {
  private long remindId;  //提醒id
  private String remindContent;  //提醒信息
  private java.sql.Timestamp remindTime;  //提醒时间
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-返回对象" tabindex="-1"><a class="header-anchor" href="#_3-返回对象"><span>3. 返回对象</span></a></h3><h4 id="_1-restcontroller-或-responsebody" tabindex="-1"><a class="header-anchor" href="#_1-restcontroller-或-responsebody"><span>（1）@RestController 或 @ResponseBody</span></a></h4><p>返回 json 数据类型 例：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>/**
 * 用户接口
 */
@RequestMapping(&quot;/test&quot;)
@RestController
public class testInterface {

    @Autowired
    private RoleService roleService;
    /**
     * 保存用户
     * @param docId  医生id
     */
    @ApiDoc
    @PostMapping(&quot;advice&quot;)
    public RoleInfo getAdviceList(String docId){
        return roleService.FindRoleBydocId(docId);
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-请求类型" tabindex="-1"><a class="header-anchor" href="#_2-请求类型"><span>（2）请求类型</span></a></h4><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>@PostMapping(&quot;advice&quot;)/@GetMapping(&quot;advice&quot;)
    public RoleInfo getAdviceList(String docId){
        return roleService.FindRoleBydocId(docId);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、高级配置" tabindex="-1"><a class="header-anchor" href="#_4、高级配置"><span>4、高级配置</span></a></h3><h4 id="_1-apidoc" tabindex="-1"><a class="header-anchor" href="#_1-apidoc"><span>（1）@ApiDoc</span></a></h4><h5 id="a-实现" tabindex="-1"><a class="header-anchor" href="#a-实现"><span>a.实现</span></a></h5><p>JApiDocs 默认只导出声明了@ApiDoc 的接口，我们前面通过设置 config.setAutoGenerate(Boolean.TRUE) 来解除了这个限制。如果你不希望把所有的接口都导出，你可以把 autoGenerate 设置关闭，在相关 Controller 类或者接口方法上通过添加@ApiDoc 来确定哪些接口需要导出。</p><h5 id="b-其他设置" tabindex="-1"><a class="header-anchor" href="#b-其他设置"><span>b.其他设置</span></a></h5><p>result: 这个可以直接声明返回的对象类型，如果你声明了，将会覆盖 SpringBoot 的返回对象 stringResult：返回字符串，在返回结果比较简单，而不想创建一个专门的返回类，则可以考虑使用这个属性。 url: 请求 URL，扩展字段，用于支持非 SpringBoot 项目 method: 请求方法，扩展字段，用于支持非 SpringBoot 项目</p><p>例：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>@ApiDoc(result = AdminVO.class, url = &quot;/api/v1/admin/login2&quot;, method = &quot;post&quot;)
stringResult 实例，在文档中将会自动格式化json字符串：
@ApiDoc(stringResult = &quot;{code: 0, data: &#39;success&#39;}&quot;)
@GetMapping(value = &quot;custom-json&quot;)
public Map customJsonResult(){}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-ignore-忽略-controller-接口-字段" tabindex="-1"><a class="header-anchor" href="#_2-ignore-忽略-controller-接口-字段"><span>(2)@Ignore (忽略 Controller，接口，字段)</span></a></h3><p>例：忽略 Controller</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>@Ignore
public class UserController { 

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、配置参数" tabindex="-1"><a class="header-anchor" href="#三、配置参数"><span>三、配置参数</span></a></h2><p>在任意一个 main 入口执行下面的代码：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>DocsConfig config = new DocsConfig();
config.setProjectPath(&quot;your springboot project path&quot;); // 项目根目录
config.setProjectName(&quot;ProjectName&quot;); // 项目名称
config.setApiVersion(&quot;V1.0&quot;);       // 声明该API的版本
config.setDocsPath(&quot;your api docs path&quot;); // 生成API 文档所在目录
config.setAutoGenerate(Boolean.TRUE);  // 配置自动生成
Docs.buildHtmlDocs(config); // 执行生成文档
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、导出格式" tabindex="-1"><a class="header-anchor" href="#四、导出格式"><span>四、导出格式</span></a></h2><h3 id="_1-markdown" tabindex="-1"><a class="header-anchor" href="#_1-markdown"><span>（1）Markdown</span></a></h3><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>  config.addPlugin(new MarkdownDocPlugin());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-导出-pdf-或者-word" tabindex="-1"><a class="header-anchor" href="#_2-导出-pdf-或者-word"><span>（2）导出 pdf 或者 word</span></a></h3>`,39),p={href:"https://pandoc.org/",target:"_blank",rel:"noopener noreferrer"},v=l(`<h2 id="五、自定义代码模板" tabindex="-1"><a class="header-anchor" href="#五、自定义代码模板"><span>五、自定义代码模板</span></a></h2><p>JApiDocs 除了支持文档导出，目前也支持生成了 Android 和 iOS 的返回对象代码，对应 Java 和 Object-C 语言， 如果你想修改代码模板，可以通过以下的方法：</p><h3 id="_1-定义代码模板" tabindex="-1"><a class="header-anchor" href="#_1-定义代码模板"><span>（1）定义代码模板</span></a></h3><p>把源码中 library 项目 resources 目录下的代码模板拷贝一份，其中，IOS_表示 Object-C 代码模板，JAVA_开头表示 Java 代码， 模板中类似\${CLASS_NAME}的符号是替换变量，具体含义你可以结合生成的代码进行理解，然后按照你想要的代码模板进行修改即可。</p><h3 id="_2-选择新的模板" tabindex="-1"><a class="header-anchor" href="#_2-选择新的模板"><span>（2）选择新的模板</span></a></h3><p>通过 DocsConfig 配置模板路径替换成新的模板：</p><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>docsConfig.setResourcePath(&quot;模板路径&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="六、添加更多功能" tabindex="-1"><a class="header-anchor" href="#六、添加更多功能"><span>六、添加更多功能</span></a></h2><p>JApiDocs 提供了插件接口，你可以通过插件接口来实现更多丰富的功能，下面介绍如何添加插件：</p><h3 id="_1-实现-ipluginsupport-接口" tabindex="-1"><a class="header-anchor" href="#_1-实现-ipluginsupport-接口"><span>（1）实现 IPluginSupport 接口</span></a></h3><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>public class CustomPlugin implements IPluginSupport{
      @Override
      public void execute(List&lt;ControllerNode&gt; controllerNodeList){
         // 实现你自己的功能需求
      }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-添加插件" tabindex="-1"><a class="header-anchor" href="#_2-添加插件"><span>（2）添加插件</span></a></h3><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code> config.addPlugin(new CustomPlugin());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="七、问题的解决" tabindex="-1"><a class="header-anchor" href="#七、问题的解决"><span>七、问题的解决</span></a></h2><h3 id="_1、如何排查错误" tabindex="-1"><a class="header-anchor" href="#_1、如何排查错误"><span>1、如何排查错误？</span></a></h3><p>关闭自动生成 config.setAutoGenerate(Boolean.FALSE)，使用@ApiDoc 来一个个接口导出排查问题。</p><h3 id="_2、多模块找不到相关类源码" tabindex="-1"><a class="header-anchor" href="#_2、多模块找不到相关类源码"><span>2、多模块找不到相关类源码？</span></a></h3><p>如果源码路径没有全部识别出来，可以通过 config.addJavaSrcPath 来添加模块的源码路径，注意要添加到 src/main/java 这一级。</p><h2 id="八、自定义注释模板" tabindex="-1"><a class="header-anchor" href="#八、自定义注释模板"><span>八、自定义注释模板</span></a></h2><p>这是我针对 JApiDocs，对我的模板进行了一定的调整，以方便对 JApiDocs 的使用，大家可以参考一下。</p><h3 id="_1-live-templates" tabindex="-1"><a class="header-anchor" href="#_1-live-templates"><span>（1）Live Templates</span></a></h3><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>  /**
 * TODO
 * @create_by: 作者名字
 * @create_time: $date$ $time$
 * $params$
 * @return $return$
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-file-header" tabindex="-1"><a class="header-anchor" href="#_2-file-header"><span>（2）File Header</span></a></h3><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>/**
 * @Author 作者名字
 * @Date \${DATE} \${TIME}
 * @description  \${description}
 * @Version 1.0
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体如何实现自定义方法注释，类注释。可以参考下面的文章：</p>`,25),u={href:"https://blog.csdn.net/qq_38675373/article/details/105886922",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,"JApiDocs 官方文档地址：",-1),h={href:"https://japidocs.agilestudio.cn/#/",target:"_blank",rel:"noopener noreferrer"};function b(g,_){const n=s("ExternalLinkIcon");return r(),t("div",null,[o,e("p",null,[i("可以通过 "),e("a",p,[i("pandoc"),a(n)]),i(" 把 markdown 格式转成 pdf 或者 word 格式。")]),v,e("blockquote",null,[e("p",null,[e("a",u,[i("https://blog.csdn.net/qq_38675373/article/details/105886922"),a(n)])])]),m,e("blockquote",null,[e("p",null,[e("a",h,[i("https://japidocs.agilestudio.cn/#/"),a(n)])])])])}const A=d(c,[["render",b],["__file","JApiDocs教程.html.vue"]]),q=JSON.parse('{"path":"/dev/JApiDocs%E6%95%99%E7%A8%8B.html","title":"JApiDocs教程","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"JApiDocs教程","excerpt":null,"description":"JApiDocs教程","date":"2022-02-12T00:00:00.000Z","category":"Java","tag":"Java","article":true,"timeline":true,"icon":"type","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/JApiDocs%E6%95%99%E7%A8%8B.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"JApiDocs教程"}],["meta",{"property":"og:description","content":"JApiDocs教程"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2022-02-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JApiDocs教程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-02-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"二、代码规范","slug":"二、代码规范","link":"#二、代码规范","children":[{"level":3,"title":"1. 分组名称 @description","slug":"_1-分组名称-description","link":"#_1-分组名称-description","children":[]},{"level":3,"title":"2. 接口参数（JApiDocs 会通过 @param 来寻找接口参数和进一步解析参数的内容）","slug":"_2-接口参数-japidocs-会通过-param-来寻找接口参数和进一步解析参数的内容","link":"#_2-接口参数-japidocs-会通过-param-来寻找接口参数和进一步解析参数的内容","children":[]},{"level":3,"title":"3. 返回对象","slug":"_3-返回对象","link":"#_3-返回对象","children":[]},{"level":3,"title":"4、高级配置","slug":"_4、高级配置","link":"#_4、高级配置","children":[]},{"level":3,"title":"(2)@Ignore (忽略 Controller，接口，字段)","slug":"_2-ignore-忽略-controller-接口-字段","link":"#_2-ignore-忽略-controller-接口-字段","children":[]}]},{"level":2,"title":"三、配置参数","slug":"三、配置参数","link":"#三、配置参数","children":[]},{"level":2,"title":"四、导出格式","slug":"四、导出格式","link":"#四、导出格式","children":[{"level":3,"title":"（1）Markdown","slug":"_1-markdown","link":"#_1-markdown","children":[]},{"level":3,"title":"（2）导出 pdf 或者 word","slug":"_2-导出-pdf-或者-word","link":"#_2-导出-pdf-或者-word","children":[]}]},{"level":2,"title":"五、自定义代码模板","slug":"五、自定义代码模板","link":"#五、自定义代码模板","children":[{"level":3,"title":"（1）定义代码模板","slug":"_1-定义代码模板","link":"#_1-定义代码模板","children":[]},{"level":3,"title":"（2）选择新的模板","slug":"_2-选择新的模板","link":"#_2-选择新的模板","children":[]}]},{"level":2,"title":"六、添加更多功能","slug":"六、添加更多功能","link":"#六、添加更多功能","children":[{"level":3,"title":"（1）实现 IPluginSupport 接口","slug":"_1-实现-ipluginsupport-接口","link":"#_1-实现-ipluginsupport-接口","children":[]},{"level":3,"title":"（2）添加插件","slug":"_2-添加插件","link":"#_2-添加插件","children":[]}]},{"level":2,"title":"七、问题的解决","slug":"七、问题的解决","link":"#七、问题的解决","children":[{"level":3,"title":"1、如何排查错误？","slug":"_1、如何排查错误","link":"#_1、如何排查错误","children":[]},{"level":3,"title":"2、多模块找不到相关类源码？","slug":"_2、多模块找不到相关类源码","link":"#_2、多模块找不到相关类源码","children":[]}]},{"level":2,"title":"八、自定义注释模板","slug":"八、自定义注释模板","link":"#八、自定义注释模板","children":[{"level":3,"title":"（1）Live Templates","slug":"_1-live-templates","link":"#_1-live-templates","children":[]},{"level":3,"title":"（2）File Header","slug":"_2-file-header","link":"#_2-file-header","children":[]}]}],"git":{"createdTime":1647698494000,"updatedTime":1714224756000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":2},{"name":"xlc","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":4.1,"words":1229},"filePathRelative":"dev/JApiDocs教程.md","localizedDate":"2022年2月12日"}');export{A as comp,q as data};
