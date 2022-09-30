import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,a as i,e as t,d,b as e,r as v}from"./app.ee9aff37.js";const r={},u=d(`<h1 id="springboot\u6253\u5305\u4E0D\u540C\u73AF\u5883\u914D\u7F6E\u4E0Eshell\u811A\u672C\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#springboot\u6253\u5305\u4E0D\u540C\u73AF\u5883\u914D\u7F6E\u4E0Eshell\u811A\u672C\u90E8\u7F72" aria-hidden="true">#</a> SpringBoot\u6253\u5305\u4E0D\u540C\u73AF\u5883\u914D\u7F6E\u4E0Eshell\u811A\u672C\u90E8\u7F72</h1><p>\u672C\u7BC7\u548C\u5927\u5BB6\u5206\u4EAB\u7684\u662Fspringboot\u6253\u5305\u5E76\u7ED3\u5408shell\u811A\u672C\u547D\u4EE4\u90E8\u7F72\uFF0C\u91CD\u70B9\u5728\u5206\u4EAB\u4E00\u4E2Ashell\u7A0B\u5E8F\u542F\u52A8\u5DE5\u5177\uFF0C\u5E0C\u671B\u80FD\u4FBF\u5229\u5DE5\u4F5C\uFF1B</p><ul><li>profiles\u6307\u5B9A\u4E0D\u540C\u73AF\u5883\u7684\u914D\u7F6E</li><li>maven-assembly-plugin\u6253\u53D1\u5E03\u538B\u7F29\u5305</li><li>\u5206\u4EABshenniu_publish.sh\u7A0B\u5E8F\u542F\u52A8\u5DE5\u5177</li><li>linux\u4E0A\u4F7F\u7528shenniu_publish.sh\u542F\u52A8\u7A0B\u5E8F</li></ul><h1 id="profiles\u6307\u5B9A\u4E0D\u540C\u73AF\u5883\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#profiles\u6307\u5B9A\u4E0D\u540C\u73AF\u5883\u7684\u914D\u7F6E" aria-hidden="true">#</a> profiles\u6307\u5B9A\u4E0D\u540C\u73AF\u5883\u7684\u914D\u7F6E</h1><p>\u901A\u5E38\u4E00\u5957\u7A0B\u5E8F\u5206\u4E3A\u4E86\u5F88\u591A\u4E2A\u90E8\u7F72\u73AF\u5883\uFF1A\u5F00\u53D1\uFF0C\u6D4B\u8BD5\uFF0Cuat\uFF0C\u7EBF\u4E0A \u7B49\uFF0C\u6211\u4EEC\u8981\u60F3\u5BF9\u8FD9\u4E9B\u73AF\u5883\u533A\u5206\u914D\u7F6E\u6587\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4E24\u79CD\u65B9\u5F0F\uFF1A</p><ul><li>\u901A\u8FC7application.yml\u4E2D\u7F16\u7801\u6307\u5B9A profile.active=uat \u65B9\u5F0F\u6307\u5B9A</li><li>\u901A\u8FC7mvn\u4E2Dprofiles\u6765\u533A\u5206\u4E0D\u540C\u73AF\u5883\u5BF9\u5E94\u7684\u914D\u7F6E\u6587\u4EF6\u5939\uFF0C\u4EBA\u5DE5\u53EF\u4EE5\u624B\u52A8\u5728idea\u52FE\u9009\u751F\u6210\u4E0D\u540C\u73AF\u5883\u7684\u5305(\u63A8\u8350)</li></ul><p>\u8FD9\u91CC\u6211\u4EEC\u8981\u8BB2\u7684\u662F\u7B2C\u4E8C\u79CD\uFF0C\u9996\u5148\u5728mvn\u4E2D\u914D\u7F6E\u5982\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> 1     &lt;profiles&gt;
 2         &lt;profile&gt;
 3             &lt;id&gt;node&lt;/id&gt;
 4             &lt;properties&gt;
 5                 &lt;!--\u4F20\u9012\u7ED9\u811A\u672C\u7684\u53C2\u6570\u503C--&gt;
 6                 &lt;activeProfile&gt;node&lt;/activeProfile&gt;
 7                 &lt;package-name&gt;\${scripts_packageName}&lt;/package-name&gt;
 8                 &lt;boot-main&gt;\${scripts_bootMain}&lt;/boot-main&gt;
 9             &lt;/properties&gt;
10             &lt;activation&gt;
11                 &lt;activeByDefault&gt;true&lt;/activeByDefault&gt;
12             &lt;/activation&gt;
13         &lt;/profile&gt;
14         &lt;profile&gt;
15             &lt;id&gt;node1&lt;/id&gt;
16             &lt;properties&gt;
17                 &lt;activeProfile&gt;node1&lt;/activeProfile&gt;
18                 &lt;package-name&gt;\${scripts_packageName}&lt;/package-name&gt;
19                 &lt;boot-main&gt;\${scripts_bootMain}&lt;/boot-main&gt;
20             &lt;/properties&gt;
21         &lt;/profile&gt;
22         &lt;profile&gt;
23             &lt;id&gt;node2&lt;/id&gt;
24             &lt;properties&gt;
25                 &lt;activeProfile&gt;node2&lt;/activeProfile&gt;
26                 &lt;package-name&gt;\${scripts_packageName}&lt;/package-name&gt;
27                 &lt;boot-main&gt;\${scripts_bootMain}&lt;/boot-main&gt;
28             &lt;/properties&gt;
29         &lt;/profile&gt;
30     &lt;/profiles&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8282\u70B9\u7C97\u89E3\uFF1A</p><ul><li>id\uFF1A\u7528\u6765\u6307\u5B9A\u4E0D\u540C\u73AF\u5883\u914D\u7F6E\u6587\u4EF6\u6240\u5728\u7684\u76EE\u5F55\uFF0C\u5982\u4E0B\u6211\u8FD9\u91CC\uFF1A <img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/fe69f622e6fd659b563e79a848403dcac97db44d.png" alt="image"></li><li>properties\uFF1A\u8BE5\u8282\u70B9\u4E2D\u7684\u8282\u70B9\u662F\u53EF\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9\u5176\u4ED6\u914D\u7F6E\u6587\u4EF6\uFF0C\u5982\u6211\u8FD9\u91CC\u7684package-name\u8282\u70B9\u503C\u5C31\u53EF\u4EE5\u5728\u53E6\u5916\u7684assembly.xml\u6216\u8005shell\u811A\u672C\u6587\u4EF6\u4E2D\u901A\u8FC7\${package-name}\u83B7\u53D6\u5230\uFF0C\u5982\u4E0B\uFF1A <img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/fd2638a541ecddb2844197770587337bfa4bcc29.png" alt="image"></li><li>activeByDefault\uFF1A\u6307\u5B9A\u9ED8\u8BA4\u73AF\u5883\u914D\u7F6E\u6587\u4EF6\u5939</li></ul><h1 id="maven-assembly-plugin\u6253\u53D1\u5E03\u538B\u7F29\u5305" tabindex="-1"><a class="header-anchor" href="#maven-assembly-plugin\u6253\u53D1\u5E03\u538B\u7F29\u5305" aria-hidden="true">#</a> maven-assembly-plugin\u6253\u53D1\u5E03\u538B\u7F29\u5305</h1><p>\u5BF9\u4E8Espringboot\u7A0B\u5E8F\u6253\u5305\uFF0C\u53EF\u4EE5\u5206\u4E3Ajar\u548Cwar\uFF0C\u8FD9\u91CC\u662Fjar\u5305\uFF1B\u6709\u573A\u666F\u662F\u548B\u4EEC\u914D\u7F6E\u6587\u4EF6\u6216\u8005\u7B2C\u4E09\u65B9\u7B49\u4F9D\u8D56\u5305\u4E0D\u60F3\u653E\u5230\u5DE5\u7A0Bjar\u4E2D\uFF0C\u5E76\u4E14\u628A\u8FD9\u4E9B\u6587\u4EF6\u538B\u7F29\u6210\u4E00\u4E2Azip\u5305\uFF0C\u65B9\u4FBF\u4E0A\u4F20\u5230linux\uFF1B\u6B64\u65F6\u901A\u8FC7maven-assembly-plugin\u548Cmaven-jar-plugin\u5C31\u53EF\u4EE5\u505A\u5230\uFF0Cmvn\u7684\u914D\u7F6E\u5982\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> 1            &lt;plugin&gt;
 2                 &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
 3                 &lt;artifactId&gt;maven-jar-plugin&lt;/artifactId&gt;
 4                 &lt;version&gt;2.6&lt;/version&gt;
 5                 &lt;configuration&gt;
 6                     &lt;archive&gt;
 7                         &lt;addMavenDescriptor&gt;false&lt;/addMavenDescriptor&gt;
 8                         &lt;manifest&gt;
 9                             &lt;addClasspath&gt;true&lt;/addClasspath&gt;
10                             &lt;classpathPrefix&gt;lib/&lt;/classpathPrefix&gt;
11                             &lt;mainClass&gt;\${scripts_bootMain}&lt;/mainClass&gt;
12                         &lt;/manifest&gt;
13                     &lt;/archive&gt;
14                     &lt;!--\u6253\u5305\u6392\u9664\u9879--&gt;
15                     &lt;excludes&gt;
16                         &lt;exclude&gt;**/*.yml&lt;/exclude&gt;
17                         &lt;exclude&gt;**/*.properties&lt;/exclude&gt;
18                         &lt;exclude&gt;**/*.xml&lt;/exclude&gt;
19                         &lt;exclude&gt;**/*.sh&lt;/exclude&gt;
20                     &lt;/excludes&gt;
21                 &lt;/configuration&gt;
22                 &lt;executions&gt;
23                     &lt;execution&gt;
24                         &lt;id&gt;make-a-jar&lt;/id&gt;
25                         &lt;phase&gt;compile&lt;/phase&gt;
26                         &lt;goals&gt;
27                             &lt;goal&gt;jar&lt;/goal&gt;
28                         &lt;/goals&gt;
29                     &lt;/execution&gt;
30                 &lt;/executions&gt;
31             &lt;/plugin&gt;
32 
33             &lt;plugin&gt;
34                 &lt;groupId&gt;org.apache.maven.plugins&lt;/groupId&gt;
35                 &lt;artifactId&gt;maven-assembly-plugin&lt;/artifactId&gt;
36                 &lt;version&gt;2.4&lt;/version&gt;
37                 &lt;!-- The configuration of the plugin --&gt;
38                 &lt;configuration&gt;
39                     &lt;!-- Specifies the configuration file of the assembly plugin --&gt;
40                     &lt;descriptors&gt;
41                         &lt;descriptor&gt;\${project.basedir}/src/main/assembly/assembly.xml&lt;/descriptor&gt;
42                     &lt;/descriptors&gt;
43                 &lt;/configuration&gt;
44                 &lt;executions&gt;
45                     &lt;execution&gt;
46                         &lt;id&gt;make-assembly&lt;/id&gt;
47                         &lt;phase&gt;package&lt;/phase&gt;
48                         &lt;goals&gt;
49                             &lt;goal&gt;single&lt;/goal&gt;
50                         &lt;/goals&gt;
51                     &lt;/execution&gt;
52                 &lt;/executions&gt;
53             &lt;/plugin&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u503C\u5F97\u6CE8\u610F\u7684\u5730\u65B9\u5982\u4E0B\u51E0\u70B9\uFF1A</p><ul><li>mainClass\u8282\u70B9\uFF1A\u7528\u6765\u6307\u5B9A\u542F\u52A8main\u51FD\u6570\u5165\u53E3\u7C7B\u8DEF\u5F84\uFF0C\u5982\u8FD9\u91CC\u7684\uFF1Acom.sm.EurekaServerApplication</li><li>excludes\u8282\u70B9\uFF1A\u6392\u9664\u4E3Bjar\u5305\u4E2D\u914D\u7F6E\u7B49\u4E00\u4E9B\u5217\u540E\u7F00\u6587\u4EF6\uFF0C\u56E0\u4E3A\u6211\u4EEC\u8981\u5305\u8FD9\u4E9B\u914D\u7F6E\u6587\u4EF6\u653E\u5230\u4E3B\u5305\u5916\u9762</li><li>descriptor\u8282\u70B9\uFF1A\u7528\u6765\u6307\u5B9Aassembly\u63D2\u4EF6\u5BF9\u5E94\u7684assembly.xml\u914D\u7F6E\u6587\u4EF6</li></ul><p>\u6709\u4E86\u4E0A\u9762mvn\u914D\u7F6E\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981assembly.xml\u7684\u914D\u7F6E\uFF0C\u8FD9\u91CC\u63D0\u53D6\u4E86\u7ED3\u5408shell\u811A\u672C\u53D1\u5E03\u7A0B\u5E8F\u7684\u914D\u7F6E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> 1 &lt;assembly xmlns=&quot;http://maven.apache.org/ASSEMBLY/2.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
 2           xsi:schemaLocation=&quot;http://maven.apache.org/ASSEMBLY/2.0.0 http://maven.apache.org/xsd/assembly-2.0.0.xsd
 3 http://maven.apache.org/ASSEMBLY/2.0.0 &quot;&gt;
 4     &lt;id&gt;\${activeProfile}&lt;/id&gt;
 5     &lt;!--\u6253\u5305\u6210\u4E00\u4E2A\u7528\u4E8E\u53D1\u5E03\u7684zip\u6587\u4EF6--&gt;
 6     &lt;formats&gt;
 7         &lt;format&gt;zip&lt;/format&gt;
 8     &lt;/formats&gt;
 9     &lt;!--true\uFF1Azip\u4E2D\u751F\u6210\u4E00\u7EA7\u76EE\u5F55(\u6B64\u5904\u5C4F\u853D\uFF0C\u914D\u5408\u811A\u672C\u9700\u8981profiles\u540E\u7F00)--&gt;
10     &lt;includeBaseDirectory&gt;false&lt;/includeBaseDirectory&gt;
11     &lt;dependencySets&gt;
12         &lt;dependencySet&gt;
13             &lt;!--\u6253\u5305\u8FDBzip\u6587\u4EF6\u7684lib\u76EE\u5F55--&gt;
14             &lt;useProjectArtifact&gt;false&lt;/useProjectArtifact&gt;
15             &lt;outputDirectory&gt;\${package-name}-\${activeProfile}/lib&lt;/outputDirectory&gt;
16             &lt;unpack&gt;false&lt;/unpack&gt;
17         &lt;/dependencySet&gt;
18     &lt;/dependencySets&gt;
19 
20     &lt;fileSets&gt;
21         &lt;!-- \u914D\u7F6E\u6587\u4EF6\u6253\u5305\u8FDBzip\u6587\u4EF6\u7684conf\u76EE\u5F55 --&gt;
22         &lt;fileSet&gt;
23             &lt;directory&gt;\${project.basedir}/src/main/profiles/\${activeProfile}&lt;/directory&gt;
24             &lt;outputDirectory&gt;\${package-name}-\${activeProfile}/conf&lt;/outputDirectory&gt;
25             &lt;includes&gt;
26                 &lt;include&gt;**/*&lt;/include&gt;
27                 &lt;!--&lt;include&gt;*.xml&lt;/include&gt;--&gt;
28                 &lt;!--&lt;include&gt;*.properties&lt;/include&gt;--&gt;
29                 &lt;!--&lt;include&gt;*.yml&lt;/include&gt;--&gt;
30             &lt;/includes&gt;
31         &lt;/fileSet&gt;
32 
33         &lt;!--\u542F\u52A8\u811A\u672C\u6253\u5305\u8FDBzip\u6587\u4EF6--&gt;
34         &lt;fileSet&gt;
35             &lt;directory&gt;\${project.basedir}/src/main/scripts&lt;/directory&gt;
36             &lt;outputDirectory&gt;&lt;/outputDirectory&gt;
37             &lt;includes&gt;
38                 &lt;include&gt;**/*&lt;/include&gt;
39             &lt;/includes&gt;
40             &lt;!-- \u6587\u4EF6\u6587\u4EF6\u6743\u9650\u4E3A777 --&gt;
41             &lt;fileMode&gt;777&lt;/fileMode&gt;
42             &lt;!-- \u76EE\u5F55\u6743\u9650\u4E3A777  --&gt;
43             &lt;directoryMode&gt;777&lt;/directoryMode&gt;
44             &lt;!--\u811A\u672C\u4E2D\u53C2\u6570\u53D8\u91CF\u4E3Apom\u4E2D\u7684\u503C \u5173\u952E--&gt;
45             &lt;filtered&gt;true&lt;/filtered&gt;
46         &lt;/fileSet&gt;
47 
48         &lt;!-- \u9879\u76EE\u7F16\u8BD1\u51FA\u6765\u7684jar\u6253\u5305\u8FDBzip\u6587\u4EF6 --&gt;
49         &lt;fileSet&gt;
50             &lt;directory&gt;\${project.build.directory}&lt;/directory&gt;
51             &lt;outputDirectory&gt;\${package-name}-\${activeProfile}/&lt;/outputDirectory&gt;
52             &lt;includes&gt;
53                 &lt;include&gt;*.jar&lt;/include&gt;
54             &lt;/includes&gt;
55         &lt;/fileSet&gt;
56     &lt;/fileSets&gt;
57 &lt;/assembly&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u91CD\u70B9\u8282\u70B9\u4ECB\u7ECD\uFF1A</p><ul><li>formats\u8282\u70B9\uFF1A\u628A\u914D\u7F6E\u6587\u4EF6\u548Cjar\u5305\u7B49\u538B\u7F29\u6210\u4EC0\u4E48\u6587\u4EF6\u683C\u5F0F\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u6709\uFF1Azip\uFF0Ctar\u7B49</li><li>fileMode\u8282\u70B9\uFF1A\u6307\u5B9Ascripts\u76EE\u5F55\u4E0B\u811A\u672C\u6587\u4EF6(\u8FD9\u91CC\u662F\uFF1Ashenniu_publish.sh)\u5728linux\u4E0A\u6587\u4EF6\u6743\u9650\u4E3A777</li><li>filtered\u8282\u70B9\uFF1A\u811A\u672C\u4E2D\u53C2\u6570\u53D8\u91CF\u4E3Apom\u7684profiles\u4E2Dproperties\u7684\u503C(\u8BE5\u914D\u7F6E\uFF0C\u662F\u628Amvn\u4E2D\u5C5E\u6027\u503C\u6620\u5C04\u751F\u6210\u5230sh\u6587\u4EF6\u4E2D\uFF0C\u5982\uFF1A\${package-name})</li></ul><p>\u5B8C\u6210\u4E0A\u9762\u914D\u7F6E\u540E\uFF0C\u6B64\u65F6\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7idea\u4E0A\u52FE\u9009\u5207\u6362\u4E0D\u540C\u73AF\u5883\u6765\u6253zip\u5305\uFF0C\u5982\u56FE\uFF1A</p><p><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/348819-20190309170559272-1005982868.png" alt="img"></p><h1 id="\u5206\u4EABshenniu-publish-sh\u7A0B\u5E8F\u542F\u52A8\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u5206\u4EABshenniu-publish-sh\u7A0B\u5E8F\u542F\u52A8\u5DE5\u5177" aria-hidden="true">#</a> \u5206\u4EABshenniu_publish.sh\u7A0B\u5E8F\u542F\u52A8\u5DE5\u5177</h1><p>\u4E0A\u9762\u6B65\u9AA4\u5B8C\u6210\u4E86zip\u683C\u5F0F\u7684\u53D1\u5E03\u5305\uFF0C\u6211\u4EEC\u518D\u5206\u4EAB\u4E0B\u542F\u52A8\u7A0B\u5E8F\u7684shell\u811A\u672C\uFF0C\u8BE5\u811A\u672C\u5177\u6709\u7684\u529F\u80FD\u5982\uFF1A</p><ul><li>\u89E3\u538Bzip+\u542F\u52A8jar\u5305</li><li>\u542F\u52A8jar\u5305</li><li>\u505C\u6B62\u5BF9\u5E94jar\u8FD0\u884C</li><li>\u91CD\u542Fjar\u7A0B\u5E8F</li></ul><p>\u76EE\u524D\u8BE5shell\u4E2D\u5C01\u88C5\u4E86\u4E24\u79CD\u542F\u52A8jar\u547D\u4EE4\u7684\u65B9\u5F0F\uFF1A</p><ul><li>java -cp</li><li>java -jar</li></ul><p>\u5982\u56FE\u547D\u4EE4\u683C\u5F0F\uFF1A</p><p><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/348819-20190309170514140-1638598831.png" alt="img"></p><p>\u6765\u770B\u5168\u90E8\u7684shell\u4EE3\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  1 #!/usr/bin/env bash
  2 #\u53EF\u53D8\u53C2\u6570\u53D8\u91CF
  3 languageType=&quot;javac&quot; #\u652F\u6301 java,javac,netcore \u53D1\u5E03
  4 #\u53C2\u6570\u503C\u7531pom\u6587\u4EF6\u4F20\u9012
  5 baseZipName=&quot;\${package-name}-\${activeProfile}&quot; #\u538B\u7F29\u5305\u540D\u79F0  publish-test.zip\u7684publish
  6 packageName=&quot;\${package-name}&quot; #\u547D\u4EE4\u542F\u52A8\u5305\u540D xx.jar\u7684xx
  7 mainclass=&quot;\${boot-main}&quot; #java -cp\u542F\u52A8\u65F6\uFF0C\u6307\u5B9Amain\u5165\u53E3\u7C7B;\u547D\u4EE4\uFF1Ajava -cp conf;lib\\*.jar;\${packageName}.jar \${mainclass}
  8 
  9 #\u4F8B\u5B50
 10 # baseZipName=&quot;publish-test&quot; #\u538B\u7F29\u5305\u540D\u79F0  publish-test.zip\u7684publish
 11 # packageName=&quot;publish&quot; #\u547D\u4EE4\u542F\u52A8\u5305\u540D publish.jar\u7684xx
 12 
 13 #\u56FA\u5B9A\u53D8\u91CF
 14 basePath=$(cd \`dirname $0\`/; pwd)
 15 baseZipPath=&quot;\${basePath}/\${baseZipName}.zip&quot;  #\u538B\u7F29\u5305\u8DEF\u5F84
 16 baseDirPath=&quot;\${basePath}&quot; #\u89E3\u538B\u90E8\u7F72\u78C1\u76D8\u8DEF\u5F84
 17 pid= #\u8FDB\u7A0Bpid
 18 
 19 #\u89E3\u538B
 20 function shenniu_unzip()
 21 {
 22     echo &quot;\u89E3\u538B---------------------------------------------&quot;
 23     echo &quot;\u538B\u7F29\u5305\u8DEF\u5F84\uFF1A\${baseZipPath}&quot;
 24     if [ ! \`find \${baseZipPath}\` ]
 25     then
 26         echo &quot;\u4E0D\u5B58\u5728\u538B\u7F29\u5305\uFF1A\${baseZipPath}&quot;
 27     else
 28         echo &quot;\u89E3\u538B\u78C1\u76D8\u8DEF\u5F84\uFF1A\${baseDirPath}/\${baseZipName}&quot;
 29         echo &quot;\u5F00\u59CB\u89E3\u538B...&quot;
 30 
 31         #\u89E3\u538B\u547D\u4EE4
 32         unzip -od \${baseDirPath}/\${baseZipName} \${baseZipPath}
 33 
 34         #\u8BBE\u7F6E\u6267\u884C\u6743\u9650
 35         chmod +x \${baseDirPath}/\${baseZipName}/\${packageName}
 36 
 37         echo &quot;\u89E3\u538B\u5B8C\u6210\u3002&quot;  
 38     fi
 39 }
 40 
 41 #\u68C0\u6D4Bpid
 42 function getPid()
 43 {
 44     echo &quot;\u68C0\u6D4B\u72B6\u6001---------------------------------------------&quot;
 45     pid=\`ps -ef | grep -n \${packageName} | grep -v grep | awk &#39;{print $2}&#39;\`
 46     if [ \${pid} ] 
 47     then
 48         echo &quot;\u8FD0\u884Cpid\uFF1A\${pid}&quot;
 49     else
 50         echo &quot;\u672A\u8FD0\u884C&quot;
 51     fi
 52 }
 53 
 54 #\u542F\u52A8\u7A0B\u5E8F
 55 function start()
 56 {
 57     #\u542F\u52A8\u524D\uFF0C\u5148\u505C\u6B62\u4E4B\u524D\u7684
 58     stop
 59     if [ \${pid} ]
 60     then
 61         echo &quot;\u505C\u6B62\u7A0B\u5E8F\u5931\u8D25\uFF0C\u65E0\u6CD5\u542F\u52A8&quot;
 62     else
 63         echo &quot;\u542F\u52A8\u7A0B\u5E8F---------------------------------------------&quot;
 64         
 65         #\u9009\u62E9\u8BED\u8A00\u7C7B\u578B
 66         read -p &quot;\u8F93\u5165\u7A0B\u5E8F\u7C7B\u578B(java,javac,netcore)\uFF0C\u4E0B\u4E00\u6B65\u6309\u56DE\u8F66\u952E(\u9ED8\u8BA4\uFF1A\${languageType})\uFF1A&quot; read_languageType
 67         if [ \${read_languageType} ]
 68         then
 69             languageType=\${read_languageType}
 70         fi
 71         echo &quot;\u9009\u62E9\u7A0B\u5E8F\u7C7B\u578B\uFF1A\${languageType}&quot;
 72 
 73         #\u8FDB\u5165\u8FD0\u884C\u5305\u76EE\u5F55
 74         cd \${baseDirPath}/\${baseZipName}
 75 
 76         #\u5206\u7C7B\u542F\u52A8
 77         if [ &quot;\${languageType}&quot; == &quot;javac&quot; ] 
 78         then
 79             if [ \${mainclass} ] 
 80             then
 81                 nohup java -cp conf:lib\\*.jar:\${packageName}.jar \${mainclass} &gt;\${baseDirPath}/\${packageName}.out 2&gt;&amp;1 &amp;
 82                #nohup java -cp conf:lib\\*.jar:\${packageName}.jar \${mainclass} &gt;/dev/null 2&gt;&amp;1 &amp;
 83             fi
 84         elif [ &quot;\${languageType}&quot; == &quot;java&quot; ] 
 85         then
 86             nohup java -jar \${baseDirPath}/\${baseZipName}/\${packageName}.jar &gt;/dev/null 2&gt;&amp;1 &amp;
 87             # java -jar \${baseDirPath}/\${baseZipName}/\${packageName}.jar
 88         elif [ &quot;\${languageType}&quot; == &quot;netcore&quot; ] 
 89         then
 90             #nohup dotnet run \${baseDirPath}/\${baseZipName}/\${packageName} &gt;/dev/null 2&gt;&amp;1 &amp;
 91             nohup \${baseDirPath}/\${baseZipName}/\${packageName} &gt;/dev/null 2&gt;&amp;1 &amp;
 92         fi
 93 
 94         #\u67E5\u8BE2\u662F\u5426\u6709\u542F\u52A8\u8FDB\u7A0B
 95         getPid
 96         if [ \${pid} ]
 97         then
 98             echo &quot;\u5DF2\u542F\u52A8&quot;
 99             #nohup\u65E5\u5FD7
100             tail -n 50 -f \${baseDirPath}/\${packageName}.out
101         else
102             echo &quot;\u542F\u52A8\u5931\u8D25&quot;
103         fi
104     fi
105 }
106 
107 #\u505C\u6B62\u7A0B\u5E8F
108 function stop()
109 {
110     getPid
111     if [ \${pid} ] 
112     then
113         echo &quot;\u505C\u6B62\u7A0B\u5E8F---------------------------------------------&quot;
114         kill -9 \${pid}
115         
116         getPid
117         if [ \${pid} ] 
118         then
119             #stop
120             echo &quot;\u505C\u6B62\u5931\u8D25&quot;
121         else
122             echo &quot;\u505C\u6B62\u6210\u529F&quot;
123         fi
124     fi
125 }
126 
127 #\u542F\u52A8\u65F6\u5E26\u53C2\u6570\uFF0C\u6839\u636E\u53C2\u6570\u6267\u884C
128 if [ \${#} -ge 1 ] 
129 then
130     case \${1} in
131         &quot;start&quot;) 
132             start
133         ;;
134         &quot;restart&quot;) 
135             start
136         ;;
137         &quot;stop&quot;) 
138             stop
139         ;;
140         &quot;unzip&quot;) 
141             #\u6267\u884C\u89E3\u538B
142             shenniu_unzip
143             #\u6267\u884C\u542F\u52A8
144             start
145         ;;
146         *) 
147             echo &quot;\${1}\u65E0\u4EFB\u4F55\u64CD\u4F5C&quot;
148         ;;
149     esac
150 else
151     echo &quot;
152     command\u5982\u4E0B\u547D\u4EE4\uFF1A
153     unzip\uFF1A\u89E3\u538B\u5E76\u542F\u52A8
154     start\uFF1A\u542F\u52A8
155     stop\uFF1A\u505C\u6B62\u8FDB\u7A0B
156     restart\uFF1A\u91CD\u542F
157 
158     \u793A\u4F8B\u547D\u4EE4\u5982\uFF1A./shenniu_publish start
159     &quot;
160 fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B63\u5982\u4E0A\u9762\u5C0F\u8282\u8BF4\u7684\uFF0Cshell\u4E2D\u7684\u53C2\u6570 package-name\uFF0CactiveProfile\uFF0Cboot-main \u90FD\u662F\u7531mvn\u4E2Dprofiles\u7684properties\u4E2D\u63D0\u4F9B\uFF0C\u662F\u53EF\u53D8\u7684\u53C2\u6570\uFF0C\u811A\u672C\u4EE3\u7801\u672C\u8EAB\u4E0D\u9700\u8981\u4EBA\u5DE5\u53BB\u4FEE\u6539\uFF0C\u53EA\u9700\u8981\u53D8\u7684\u662Fmvn\u7684\u53C2\u6570\u5373\u53EF\uFF1B\u5176\u5B9E\u5728\u6211\u4EEC\u751F\u6210zip\u5305\u7684\u65F6\u5019\uFF0Cshell\u4E2D\u7684\u53C2\u6570\u5C31\u88AB\u66FF\u6362\u4E86\uFF0C\u53EF\u4EE5\u770Bzip\u4E2Dshell\u6587\u4EF6\u5185\u5BB9\u5982\uFF1A</p><p><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/348819-20190309170701655-1208411312.png" alt="img"></p><h1 id="linux\u4E0A\u4F7F\u7528shenniu-publish-sh\u542F\u52A8\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#linux\u4E0A\u4F7F\u7528shenniu-publish-sh\u542F\u52A8\u7A0B\u5E8F" aria-hidden="true">#</a> linux\u4E0A\u4F7F\u7528shenniu_publish.sh\u542F\u52A8\u7A0B\u5E8F</h1><p>\u628A\u751F\u6210\u7684zip\u4E0A\u4F20\u5230linux\u4E0A\uFF0C\u901A\u8FC7\u547D\u4EE4\u89E3\u538B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1 unzip -od eureka-server-0.0.1-node eureka-server-0.0.1-node.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5176\u5B9Eshell\u811A\u672C\u4E2D\u5305\u542B\u6709\u89E3\u538B\u547D\u4EE4\uFF0C\u4F46\u662F\u6211\u5728\u6253\u5305\u65F6\u653E\u5728\u4E86zip\u4E2D\uFF0C\u6240\u4EE5\u53EA\u80FD\u901A\u8FC7\u624B\u52A8\u89E3\u538B\u4E86\uFF0C\u5F53\u7136\u53EF\u4EE5\u8C03\u6574\uFF1B\u6B64\u65F6\u8FDB\u5165\u52A0\u538B\u76EE\u5F55\u5982\u6B64\uFF1A</p><p><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/348819-20190309170918126-491643739.png" alt="img"></p><p>\u6CE8\uFF1A\u8FD9\u91CC\u7B2C\u4E00\u6B21\u6267\u884C./shenniu_publish.sh\u811A\u672C\u65F6\u5019\uFF0C\u63D0\u793A\u4E86\u9519\u8BEF\u4FE1\u606F\uFF1B\u662F\u7531\u4E8E\u6211\u662F\u5728windows\u4E0A\u7F16\u8F91\u7684\u8FD9\u4E2A\u811A\u672C\uFF0C\u5176\u7A7A\u683C\u7B49\u548Clinux\u4E0A\u4E0D\u4E00\u6837\uFF0C\u6240\u4EE5\u8FD0\u884C\u4F1A\u6709\u95EE\u9898\uFF0C\u8981\u89E3\u51B3\u53EF\u4EE5\u4F7F\u7528vim\u547D\u4EE4\u5728linux\u628A\u8BE5\u6587\u4EF6\u8F6C\u6210linux\u683C\u5F0F\uFF0C\u5982\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1 vim shenniu_publish.sh
2 set ff=unix
3 :wq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u5B8C\u540E\uFF0C\u518D\u6765\u8FD0\u884C\u811A\u672C./shenniu_publish.sh\uFF0C\u6B64\u65F6\u6709\u5982\u4E0B\u63D0\u793A:</p><p><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/348819-20190309171107977-1319405631.png" alt="img"></p><p>\u6B64\u523B\u6211\u4EEC\u6587\u4EF6\u662F\u89E3\u538B\u72B6\u6001\uFF0C\u56E0\u6B64\u53EA\u9700\u8981start\u547D\u4EE4\u542F\u52A8\u7A0B\u5E8F\u5373\u53EF\uFF1A</p><p><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/348819-20190309171127604-1971799892.png" alt="img"></p><p>\u5230\u8FD9\u91CCshenniu_publish.sh\u811A\u672C\u4F7F\u7528\u5C31\u5B8C\u6210\u4E86\uFF0C\u53EA\u8981\u811A\u672C\u6CA1\u6709\u63D0\u793A\u9519\u8BEF\uFF0C\u57FA\u672C\u90FD\u80FD\u542F\u52A8jar\u670D\u52A1\uFF1B\u5176\u4ED6restart\u548Cstop\u547D\u4EE4\u4E5F\u5982\u6B64\u6267\u884C\u5C31\u884C\uFF1A</p><p><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/348819-20190309171150215-294116419.png" alt="img"></p>`,45),c=e("\u53EF\u4EE5\u53BB\u7814\u7A76\u4E0Bshell\u4EE3\u7801\uFF0C\u5E0C\u671B\u8BE5\u811A\u672C\u80FD\u7ED9\u4F60\u5E26\u6765\u6548\u7387\u548C\u597D\u7684\u5B66\u4E60\u601D\u8DEF\uFF0C\u4E0B\u9762\u662F\u6D4B\u8BD5\u7528\u4F8Bgit\u5730\u5740\uFF0C\u811A\u672C\u5728eureka-server\u9879\u76EE\u4E2D\uFF1A"),m={href:"https://github.com/shenniubuxing3/springcloud-Finchley.SR2",target:"_blank",rel:"noopener noreferrer"},b=e("https://github.com/shenniubuxing3/springcloud-Finchley.SR2");function g(o,p){const n=v("ExternalLinkIcon");return s(),a("div",null,[u,i("p",null,[c,i("a",m,[b,t(n)])])])}var x=l(r,[["render",g],["__file","springboot\u6253\u5305\u4E0D\u540C\u73AF\u5883\u914D\u7F6E\u4E0Eshell\u811A\u672C\u90E8\u7F72.html.vue"]]);export{x as default};
