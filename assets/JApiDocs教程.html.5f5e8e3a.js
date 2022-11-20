import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as l,a as e,b as i,e as a,d,r as t}from"./app.59ffeed0.js";const c={},o=d(`<h1 id="japidocs教程" tabindex="-1"><a class="header-anchor" href="#japidocs教程" aria-hidden="true">#</a> JApiDocs教程</h1><p>一、Maven依赖</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!--  JApiDocs  --&gt;
&lt;dependency&gt;
   &lt;groupId&gt;io.github.yedaxia&lt;/groupId&gt;
   &lt;artifactId&gt;japidocs&lt;/artifactId&gt;
   &lt;version&gt;1.4.3&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、代码规范" tabindex="-1"><a class="header-anchor" href="#二、代码规范" aria-hidden="true">#</a> 二、代码规范</h2><h3 id="_1-分组名称-description" tabindex="-1"><a class="header-anchor" href="#_1-分组名称-description" aria-hidden="true">#</a> 1. 分组名称 @description</h3><p><em>注：官方文档中注明分组名称@description，但是实际应用中不需要加入注解，像下例所示，直接写注释即可。（类上写不写都行，方法上如果加上@description反而不显示）</em> 例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-接口参数-japidocs-会通过-param-来寻找接口参数和进一步解析参数的内容" tabindex="-1"><a class="header-anchor" href="#_2-接口参数-japidocs-会通过-param-来寻找接口参数和进一步解析参数的内容" aria-hidden="true">#</a> 2. 接口参数（JApiDocs 会通过 @param 来寻找接口参数和进一步解析参数的内容）</h3><p><em>注：注释一定要放在@注解的上面，否则参数会不显示</em></p><h4 id="_1-格式-接口参数-param-字段-字段解释" tabindex="-1"><a class="header-anchor" href="#_1-格式-接口参数-param-字段-字段解释" aria-hidden="true">#</a> （1）格式：接口参数 @param 字段 字段解释</h4><p>例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
     * @description 保存用户
     * @param docId  医生id
    */
@PostMapping(&quot;advice&quot;)
public RoleInfo getAdviceList(String docId){
    return roleService.FindRoleBydocId(docId);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-在相应的bean对象里添加注释" tabindex="-1"><a class="header-anchor" href="#_2-在相应的bean对象里添加注释" aria-hidden="true">#</a> （2）在相应的bean对象里添加注释</h4><p>例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class RemindInfo implements Serializable {
  private long remindId;  //提醒id
  private String remindContent;  //提醒信息
  private java.sql.Timestamp remindTime;  //提醒时间
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-返回对象" tabindex="-1"><a class="header-anchor" href="#_3-返回对象" aria-hidden="true">#</a> 3. 返回对象</h3><h4 id="_1-restcontroller-或-responsebody" tabindex="-1"><a class="header-anchor" href="#_1-restcontroller-或-responsebody" aria-hidden="true">#</a> （1）@RestController 或 @ResponseBody</h4><p>返回json数据类型 例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-请求类型" tabindex="-1"><a class="header-anchor" href="#_2-请求类型" aria-hidden="true">#</a> （2）请求类型</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@PostMapping(&quot;advice&quot;)/@GetMapping(&quot;advice&quot;)
    public RoleInfo getAdviceList(String docId){
        return roleService.FindRoleBydocId(docId);
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、高级配置" tabindex="-1"><a class="header-anchor" href="#_4、高级配置" aria-hidden="true">#</a> 4、高级配置</h3><h4 id="_1-apidoc" tabindex="-1"><a class="header-anchor" href="#_1-apidoc" aria-hidden="true">#</a> （1）@ApiDoc</h4><h5 id="a-实现" tabindex="-1"><a class="header-anchor" href="#a-实现" aria-hidden="true">#</a> a.实现</h5><p>JApiDocs 默认只导出声明了@ApiDoc的接口，我们前面通过设置config.setAutoGenerate(Boolean.TRUE) 来解除了这个限制。如果你不希望把所有的接口都导出，你可以把autoGenerate设置关闭，在相关Controller类或者接口方法上通过添加@ApiDoc来确定哪些接口需要导出。</p><h5 id="b-其他设置" tabindex="-1"><a class="header-anchor" href="#b-其他设置" aria-hidden="true">#</a> b.其他设置</h5><p>result: 这个可以直接声明返回的对象类型，如果你声明了，将会覆盖SpringBoot的返回对象 stringResult：返回字符串，在返回结果比较简单，而不想创建一个专门的返回类，则可以考虑使用这个属性。 url: 请求URL，扩展字段，用于支持非SpringBoot项目 method: 请求方法，扩展字段，用于支持非SpringBoot项目</p><p>例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@ApiDoc(result = AdminVO.class, url = &quot;/api/v1/admin/login2&quot;, method = &quot;post&quot;)
stringResult 实例，在文档中将会自动格式化json字符串：
@ApiDoc(stringResult = &quot;{code: 0, data: &#39;success&#39;}&quot;)
@GetMapping(value = &quot;custom-json&quot;)
public Map customJsonResult(){}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-ignore-忽略controller-接口-字段" tabindex="-1"><a class="header-anchor" href="#_2-ignore-忽略controller-接口-字段" aria-hidden="true">#</a> (2)@Ignore (忽略Controller，接口，字段)</h3><p>例：忽略Controller</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@Ignore
public class UserController { 

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、配置参数" tabindex="-1"><a class="header-anchor" href="#三、配置参数" aria-hidden="true">#</a> 三、配置参数</h2><p>在任意一个main入口执行下面的代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>DocsConfig config = new DocsConfig();
config.setProjectPath(&quot;your springboot project path&quot;); // 项目根目录
config.setProjectName(&quot;ProjectName&quot;); // 项目名称
config.setApiVersion(&quot;V1.0&quot;);       // 声明该API的版本
config.setDocsPath(&quot;your api docs path&quot;); // 生成API 文档所在目录
config.setAutoGenerate(Boolean.TRUE);  // 配置自动生成
Docs.buildHtmlDocs(config); // 执行生成文档
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、导出格式" tabindex="-1"><a class="header-anchor" href="#四、导出格式" aria-hidden="true">#</a> 四、导出格式</h2><h3 id="_1-markdown" tabindex="-1"><a class="header-anchor" href="#_1-markdown" aria-hidden="true">#</a> （1）Markdown</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  config.addPlugin(new MarkdownDocPlugin());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-导出-pdf-或者-word" tabindex="-1"><a class="header-anchor" href="#_2-导出-pdf-或者-word" aria-hidden="true">#</a> （2）导出 pdf 或者 word</h3>`,39),u={href:"https://pandoc.org/",target:"_blank",rel:"noopener noreferrer"},v=d(`<h2 id="五、自定义代码模板" tabindex="-1"><a class="header-anchor" href="#五、自定义代码模板" aria-hidden="true">#</a> 五、自定义代码模板</h2><p>JApiDocs 除了支持文档导出，目前也支持生成了 Android 和 iOS 的返回对象代码，对应 Java 和 Object-C 语言， 如果你想修改代码模板，可以通过以下的方法：</p><h3 id="_1-定义代码模板" tabindex="-1"><a class="header-anchor" href="#_1-定义代码模板" aria-hidden="true">#</a> （1）定义代码模板</h3><p>把源码中library项目resources目录下的代码模板拷贝一份，其中，IOS_表示 Object-C 代码模板，JAVA_开头表示 Java代码， 模板中类似\${CLASS_NAME}的符号是替换变量，具体含义你可以结合生成的代码进行理解，然后按照你想要的代码模板进行修改即可。</p><h3 id="_2-选择新的模板" tabindex="-1"><a class="header-anchor" href="#_2-选择新的模板" aria-hidden="true">#</a> （2）选择新的模板</h3><p>通过DocsConfig配置模板路径替换成新的模板：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docsConfig.setResourcePath(&quot;模板路径&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="六、添加更多功能" tabindex="-1"><a class="header-anchor" href="#六、添加更多功能" aria-hidden="true">#</a> 六、添加更多功能</h2><p>JApiDocs 提供了插件接口，你可以通过插件接口来实现更多丰富的功能，下面介绍如何添加插件：</p><h3 id="_1-实现-ipluginsupport-接口" tabindex="-1"><a class="header-anchor" href="#_1-实现-ipluginsupport-接口" aria-hidden="true">#</a> （1）实现 IPluginSupport 接口</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>public class CustomPlugin implements IPluginSupport{
      @Override
      public void execute(List&lt;ControllerNode&gt; controllerNodeList){
         // 实现你自己的功能需求
      }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-添加插件" tabindex="-1"><a class="header-anchor" href="#_2-添加插件" aria-hidden="true">#</a> （2）添加插件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> config.addPlugin(new CustomPlugin());
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="七、问题的解决" tabindex="-1"><a class="header-anchor" href="#七、问题的解决" aria-hidden="true">#</a> 七、问题的解决</h2><h3 id="_1、如何排查错误" tabindex="-1"><a class="header-anchor" href="#_1、如何排查错误" aria-hidden="true">#</a> 1、如何排查错误？</h3><p>关闭自动生成config.setAutoGenerate(Boolean.FALSE)，使用@ApiDoc 来一个个接口导出排查问题。</p><h3 id="_2、多模块找不到相关类源码" tabindex="-1"><a class="header-anchor" href="#_2、多模块找不到相关类源码" aria-hidden="true">#</a> 2、多模块找不到相关类源码？</h3><p>如果源码路径没有全部识别出来，可以通过config.addJavaSrcPath来添加模块的源码路径，注意要添加到src/main/java这一级。</p><h2 id="八、自定义注释模板" tabindex="-1"><a class="header-anchor" href="#八、自定义注释模板" aria-hidden="true">#</a> 八、自定义注释模板</h2><p>这是我针对JApiDocs，对我的模板进行了一定的调整，以方便对JApiDocs的使用，大家可以参考一下。</p><h3 id="_1-live-templates" tabindex="-1"><a class="header-anchor" href="#_1-live-templates" aria-hidden="true">#</a> （1）Live Templates</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  /**
 * TODO
 * @create_by: 作者名字
 * @create_time: $date$ $time$
 * $params$
 * @return $return$
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-file-header" tabindex="-1"><a class="header-anchor" href="#_2-file-header" aria-hidden="true">#</a> （2）File Header</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/**
 * @Author 作者名字
 * @Date \${DATE} \${TIME}
 * @description  \${description}
 * @Version 1.0
 */
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体如何实现自定义方法注释，类注释。可以参考下面的文章：</p>`,25),h={href:"https://blog.csdn.net/qq_38675373/article/details/105886922",target:"_blank",rel:"noopener noreferrer"},p=e("p",null,"JApiDocs官方文档地址：",-1),m={href:"https://japidocs.agilestudio.cn/#/",target:"_blank",rel:"noopener noreferrer"};function b(g,x){const n=t("ExternalLinkIcon");return s(),l("div",null,[o,e("p",null,[i("可以通过 "),e("a",u,[i("pandoc"),a(n)]),i(" 把 markdown 格式转成 pdf 或者 word 格式。")]),v,e("blockquote",null,[e("p",null,[e("a",h,[i("https://blog.csdn.net/qq_38675373/article/details/105886922"),a(n)])])]),p,e("blockquote",null,[e("p",null,[e("a",m,[i("https://japidocs.agilestudio.cn/#/"),a(n)])])])])}const q=r(c,[["render",b],["__file","JApiDocs教程.html.vue"]]);export{q as default};
