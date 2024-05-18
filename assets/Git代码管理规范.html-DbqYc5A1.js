import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as a,c as d,b as t,n as s,g as r,a as c}from"./app-Clq2mtAP.js";const o={},v=c(`<h1 id="git代码管理规范" tabindex="-1"><a class="header-anchor" href="#git代码管理规范"><span>Git代码管理规范</span></a></h1><ul><li>ment）：用于开发者调试使用</li><li>FAT环境（Feature Acceptance Test environment）：功能验收测试环境，用于测试环境下的软件测试者测试使用</li><li>UAT环境 （User Acceptance Test environment）：用户验收测试环境，用于生产环境下的软件测试者测试使用</li><li>PRO 环境（Production environment）：生产环境</li></ul><p>对应关系：</p><table><thead><tr><th style="text-align:left;">分支</th><th style="text-align:left;">功能</th><th style="text-align:left;">环境</th><th style="text-align:left;">可访问</th></tr></thead><tbody><tr><td style="text-align:left;">master</td><td style="text-align:left;">主分支，稳定版本</td><td style="text-align:left;">PRO</td><td style="text-align:left;">是</td></tr><tr><td style="text-align:left;">develop</td><td style="text-align:left;">开发分支，最新版本</td><td style="text-align:left;">DEV</td><td style="text-align:left;">是</td></tr><tr><td style="text-align:left;">feature</td><td style="text-align:left;">开发分支，实现新特性</td><td style="text-align:left;"></td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">test</td><td style="text-align:left;">测试分支，功能测试</td><td style="text-align:left;">FAT</td><td style="text-align:left;">是</td></tr><tr><td style="text-align:left;">release</td><td style="text-align:left;">预上线分支，发布新版本</td><td style="text-align:left;">UAT</td><td style="text-align:left;">是</td></tr><tr><td style="text-align:left;">hotfix</td><td style="text-align:left;">紧急修复分支，修复线上bug</td><td style="text-align:left;"></td><td style="text-align:left;">否</td></tr></tbody></table><h2 id="分支合并流程规范" tabindex="-1"><a class="header-anchor" href="#分支合并流程规范"><span>分支合并流程规范</span></a></h2><p>业界常见的两大主分支（master、develop）、三个辅助分支（feature、release、hotfix）的生命周期：</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/d9788b337294257ba0bb2dcb2c2e5b1b.webp" alt="生命周期" tabindex="0" loading="lazy"><figcaption>生命周期</figcaption></figure><p>业界应用的比较广泛的是Angular Git Commit Guidelines：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;type&gt;(&lt;scope&gt;): &lt;subject&gt;
&lt;BLANK LINE&gt;
&lt;body&gt;
&lt;BLANK LINE&gt;
&lt;footer&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>type：提交类型</li><li>scope：可选项，本次 commit 波及的范围</li><li>subject：简明扼要的阐述下本次 commit 的主旨，在<code>Angular Git Commit Guidelines</code>中强调了三点。使用祈使句，首字母不要大写，结尾无需添加标点</li><li>body: 同样使用祈使句，在主体内容中我们需要把本次 commit 详细的描述一下，比如此次变更的动机</li><li>footer: 描述下与之关联的 issue 或 break change</li></ul><h3 id="简易版" tabindex="-1"><a class="header-anchor" href="#简易版"><span>简易版</span></a></h3><p>项目中实际可以采用简易版规范：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&lt;type&gt;(&lt;scope&gt;):&lt;subject&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="type规范" tabindex="-1"><a class="header-anchor" href="#type规范"><span>type规范</span></a></h3><p><code>Angular Git Commit Guidelines</code>中推荐的type类型如下：</p><ul><li>feat: 新增功能</li><li>fix: 修复bug</li><li>docs: 仅文档更改</li><li>style: 不影响代码含义的更改（空白、格式设置、缺失 分号等）</li><li>refactor: 既不修复bug也不添加特性的代码更改</li><li>perf: 改进性能的代码更改</li><li>test: 添加缺少的测试或更正现有测试</li><li>chore: 对构建过程或辅助工具和库（如文档）的更改</li></ul><p>除此之外，还有一些常用的类型：</p><ul><li>delete：删除功能或文件</li><li>modify：修改功能</li><li>build：改变构建流程，新增依赖库、工具等（例如webpack、gulp、npm修改）</li><li>test：测试用例的新增、修改</li><li>ci：自动化流程配置修改</li><li>revert：回滚到上一个版本</li></ul><h3 id="单次提交注意事项" tabindex="-1"><a class="header-anchor" href="#单次提交注意事项"><span>单次提交注意事项</span></a></h3><ul><li>提交问题必须为同一类别</li><li>提交问题不要超过3个</li><li>提交的commit发现不符合规范，<code>git commit --amend -m &quot;新的提交信息&quot;</code>或 <code>git reset --hard HEAD</code> 重新提交一次</li></ul><h2 id="配置-gitignore文件" tabindex="-1"><a class="header-anchor" href="#配置-gitignore文件"><span>配置.gitignore文件</span></a></h2><p><code>.gitignore</code>是一份用于忽略不必提交的文件的列表，项目中可以根据实际需求统一<code>.gitignore</code>文件，减少不必要的文件提交和冲突，净化代码库环境。</p><p>通用文件示例：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>HELP.md
target/
!.mvn/wrapper/maven-wrapper.jar
!**/src/main/**/target/
!**/src/test/**/target/

### STS ###
.apt_generated
.classpath
.factorypath
.project
.settings
.springBeans
.sts4-cache

### IntelliJ IDEA ###
.idea
*.iws
*.iml
*.ipr

### NetBeans ###
/nbproject/private/
/nbbuild/
/dist/
/nbdist/
/.nb-gradle/
build/
!**/src/main/**/build/
!**/src/test/**/build/

### VS Code ###
.vscode/

# Log file
*.log
/logs*

# BlueJ files
*.ctxt

# Mobile Tools for Java (J2ME)
.mtj.tmp/

# Package Files #
*.jar
*.war
*.ear
*.zip
*.tar.gz
*.rar
*.cmd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h2><p>此外，还有一些其他建议：</p><ul><li>master 分支的每一次更新，都建议打 tag 添加标签，通常为对应版本号，便于管理</li><li>feature分支、hotfix分支在合并后可以删除，避免分支过多管理混乱</li><li>每次 pull 代码前，提交本地代码到本地库中，否则可能回出现合并代码出错，导致代码丢失</li></ul>`,27);function m(u,b){const i=e("VPBanner"),l=e("Share");return a(),d("div",null,[t(i,s(r({title:"Git代码管理规范",content:"Java是一门面向对象的编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征",logo:null,color:"var(--banner-text)",background:"rgba(217, 244, 208, 0.5)",actions:[{text:"Git代码管理规范",link:"/Git代码管理规范/"}]})),null,16),v,t(l,{colorful:"",service:"email,qq,qzone,qrcode,weibo,telegram,twitter"})])}const h=n(o,[["render",m],["__file","Git代码管理规范.html.vue"]]),x=JSON.parse('{"path":"/dev/Git%E4%BB%A3%E7%A0%81%E7%AE%A1%E7%90%86%E8%A7%84%E8%8C%83.html","title":"Git代码管理规范","lang":"zh-CN","frontmatter":{"title":"Git代码管理规范","excerpt":"Git代码管理规范","description":"Git代码管理规范","date":"2024-05-18T00:00:00.000Z","category":"Java","tag":"Java","author":"xlc520","article":true,"timeline":true,"icon":"java","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/dev/Git%E4%BB%A3%E7%A0%81%E7%AE%A1%E7%90%86%E8%A7%84%E8%8C%83.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"Git代码管理规范"}],["meta",{"property":"og:description","content":"Git代码管理规范"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/d9788b337294257ba0bb2dcb2c2e5b1b.webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-18T10:09:45.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Java"}],["meta",{"property":"article:published_time","content":"2024-05-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-18T10:09:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git代码管理规范\\",\\"image\\":[\\"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/d9788b337294257ba0bb2dcb2c2e5b1b.webp\\"],\\"datePublished\\":\\"2024-05-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-18T10:09:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"分支合并流程规范","slug":"分支合并流程规范","link":"#分支合并流程规范","children":[{"level":3,"title":"简易版","slug":"简易版","link":"#简易版","children":[]},{"level":3,"title":"type规范","slug":"type规范","link":"#type规范","children":[]},{"level":3,"title":"单次提交注意事项","slug":"单次提交注意事项","link":"#单次提交注意事项","children":[]}]},{"level":2,"title":"配置.gitignore文件","slug":"配置-gitignore文件","link":"#配置-gitignore文件","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]}],"git":{"createdTime":1716026985000,"updatedTime":1716026985000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":3.35,"words":1005},"filePathRelative":"dev/Git代码管理规范.md","localizedDate":"2024年5月18日"}');export{h as comp,x as data};
