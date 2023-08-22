import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as a,c as t,b as i,d as e,e as d,a as v}from"./app-c4cf960f.js";const r={},u=v(`<h1 id="springboot打包不同环境配置与shell脚本部署" tabindex="-1"><a class="header-anchor" href="#springboot打包不同环境配置与shell脚本部署" aria-hidden="true">#</a> SpringBoot打包不同环境配置与shell脚本部署</h1><p>本篇和大家分享的是springboot打包并结合shell脚本命令部署，重点在分享一个shell程序启动工具，希望能便利工作；</p><ul><li>profiles指定不同环境的配置</li><li>maven-assembly-plugin打发布压缩包</li><li>分享shenniu_publish.sh程序启动工具</li><li>linux上使用shenniu_publish.sh启动程序</li></ul><h1 id="profiles指定不同环境的配置" tabindex="-1"><a class="header-anchor" href="#profiles指定不同环境的配置" aria-hidden="true">#</a> profiles指定不同环境的配置</h1><p>通常一套程序分为了很多个部署环境：开发，测试，uat，线上 等，我们要想对这些环境区分配置文件，可以通过两种方式：</p><ul><li>通过application.yml中编码指定 profile.active=uat 方式指定</li><li>通过mvn中profiles来区分不同环境对应的配置文件夹，人工可以手动在idea勾选生成不同环境的包(推荐)</li></ul><p>这里我们要讲的是第二种，首先在mvn中配置如下内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 1     &lt;profiles&gt;
 2         &lt;profile&gt;
 3             &lt;id&gt;node&lt;/id&gt;
 4             &lt;properties&gt;
 5                 &lt;!--传递给脚本的参数值--&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>节点粗解：</p><ul><li>id：用来指定不同环境配置文件所在的目录，如下我这里：<br><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/fe69f622e6fd659b563e79a848403dcac97db44d.png" alt="image" loading="lazy"></li><li>properties：该节点中的节点是可作为参数传递给其他配置文件，如我这里的package-name节点值就可以在另外的assembly.xml或者shell脚本文件中通过\${package-name}获取到，如下：<br><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/fd2638a541ecddb2844197770587337bfa4bcc29.png" alt="image" loading="lazy"></li><li>activeByDefault：指定默认环境配置文件夹</li></ul><h1 id="maven-assembly-plugin打发布压缩包" tabindex="-1"><a class="header-anchor" href="#maven-assembly-plugin打发布压缩包" aria-hidden="true">#</a> maven-assembly-plugin打发布压缩包</h1><p>对于springboot程序打包，可以分为jar和war，这里是jar包；有场景是咋们配置文件或者第三方等依赖包不想放到工程jar中，并且把这些文件压缩成一个zip包，方便上传到linux；此时通过maven-assembly-plugin和maven-jar-plugin就可以做到，mvn的配置如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 1            &lt;plugin&gt;
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
14                     &lt;!--打包排除项--&gt;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>值得注意的地方如下几点：</p><ul><li>mainClass节点：用来指定启动main函数入口类路径，如这里的：com.sm.EurekaServerApplication</li><li>excludes节点：排除主jar包中配置等一些列后缀文件，因为我们要包这些配置文件放到主包外面</li><li>descriptor节点：用来指定assembly插件对应的assembly.xml配置文件</li></ul><p>有了上面mvn配置，我们还需要assembly.xml的配置，这里提取了结合shell脚本发布程序的配置：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 1 &lt;assembly xmlns=&quot;http://maven.apache.org/ASSEMBLY/2.0.0&quot; xmlns:xsi=&quot;http://www.w3.org/2001/XMLSchema-instance&quot;
 2           xsi:schemaLocation=&quot;http://maven.apache.org/ASSEMBLY/2.0.0 http://maven.apache.org/xsd/assembly-2.0.0.xsd
 3 http://maven.apache.org/ASSEMBLY/2.0.0 &quot;&gt;
 4     &lt;id&gt;\${activeProfile}&lt;/id&gt;
 5     &lt;!--打包成一个用于发布的zip文件--&gt;
 6     &lt;formats&gt;
 7         &lt;format&gt;zip&lt;/format&gt;
 8     &lt;/formats&gt;
 9     &lt;!--true：zip中生成一级目录(此处屏蔽，配合脚本需要profiles后缀)--&gt;
10     &lt;includeBaseDirectory&gt;false&lt;/includeBaseDirectory&gt;
11     &lt;dependencySets&gt;
12         &lt;dependencySet&gt;
13             &lt;!--打包进zip文件的lib目录--&gt;
14             &lt;useProjectArtifact&gt;false&lt;/useProjectArtifact&gt;
15             &lt;outputDirectory&gt;\${package-name}-\${activeProfile}/lib&lt;/outputDirectory&gt;
16             &lt;unpack&gt;false&lt;/unpack&gt;
17         &lt;/dependencySet&gt;
18     &lt;/dependencySets&gt;
19 
20     &lt;fileSets&gt;
21         &lt;!-- 配置文件打包进zip文件的conf目录 --&gt;
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
33         &lt;!--启动脚本打包进zip文件--&gt;
34         &lt;fileSet&gt;
35             &lt;directory&gt;\${project.basedir}/src/main/scripts&lt;/directory&gt;
36             &lt;outputDirectory&gt;&lt;/outputDirectory&gt;
37             &lt;includes&gt;
38                 &lt;include&gt;**/*&lt;/include&gt;
39             &lt;/includes&gt;
40             &lt;!-- 文件文件权限为777 --&gt;
41             &lt;fileMode&gt;777&lt;/fileMode&gt;
42             &lt;!-- 目录权限为777  --&gt;
43             &lt;directoryMode&gt;777&lt;/directoryMode&gt;
44             &lt;!--脚本中参数变量为pom中的值 关键--&gt;
45             &lt;filtered&gt;true&lt;/filtered&gt;
46         &lt;/fileSet&gt;
47 
48         &lt;!-- 项目编译出来的jar打包进zip文件 --&gt;
49         &lt;fileSet&gt;
50             &lt;directory&gt;\${project.build.directory}&lt;/directory&gt;
51             &lt;outputDirectory&gt;\${package-name}-\${activeProfile}/&lt;/outputDirectory&gt;
52             &lt;includes&gt;
53                 &lt;include&gt;*.jar&lt;/include&gt;
54             &lt;/includes&gt;
55         &lt;/fileSet&gt;
56     &lt;/fileSets&gt;
57 &lt;/assembly&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重点节点介绍：</p><ul><li>formats节点：把配置文件和jar包等压缩成什么文件格式，这里可以有：zip，tar等</li><li>fileMode节点：指定scripts目录下脚本文件(这里是：shenniu_publish.sh)在linux上文件权限为777</li><li>filtered节点：脚本中参数变量为pom的profiles中properties的值(该配置，是把mvn中属性值映射生成到sh文件中，如：\${package-name})</li></ul><p>完成上面配置后，此时我们可以通过idea上勾选切换不同环境来打zip包，如图：</p><figure><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/348819-20190309170559272-1005982868.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h1 id="分享shenniu-publish-sh程序启动工具" tabindex="-1"><a class="header-anchor" href="#分享shenniu-publish-sh程序启动工具" aria-hidden="true">#</a> 分享shenniu_publish.sh程序启动工具</h1><p>上面步骤完成了zip格式的发布包，我们再分享下启动程序的shell脚本，该脚本具有的功能如：</p><ul><li>解压zip+启动jar包</li><li>启动jar包</li><li>停止对应jar运行</li><li>重启jar程序</li></ul><p>目前该shell中封装了两种启动jar命令的方式：</p><ul><li>java -cp</li><li>java -jar</li></ul><p>如图命令格式：</p><figure><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/348819-20190309170514140-1638598831.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>来看全部的shell代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  1 #!/usr/bin/env bash
  2 #可变参数变量
  3 languageType=&quot;javac&quot; #支持 java,javac,netcore 发布
  4 #参数值由pom文件传递
  5 baseZipName=&quot;\${package-name}-\${activeProfile}&quot; #压缩包名称  publish-test.zip的publish
  6 packageName=&quot;\${package-name}&quot; #命令启动包名 xx.jar的xx
  7 mainclass=&quot;\${boot-main}&quot; #java -cp启动时，指定main入口类;命令：java -cp conf;lib\\*.jar;\${packageName}.jar \${mainclass}
  8 
  9 #例子
 10 # baseZipName=&quot;publish-test&quot; #压缩包名称  publish-test.zip的publish
 11 # packageName=&quot;publish&quot; #命令启动包名 publish.jar的xx
 12 
 13 #固定变量
 14 basePath=$(cd \`dirname $0\`/; pwd)
 15 baseZipPath=&quot;\${basePath}/\${baseZipName}.zip&quot;  #压缩包路径
 16 baseDirPath=&quot;\${basePath}&quot; #解压部署磁盘路径
 17 pid= #进程pid
 18 
 19 #解压
 20 function shenniu_unzip()
 21 {
 22     echo &quot;解压---------------------------------------------&quot;
 23     echo &quot;压缩包路径：\${baseZipPath}&quot;
 24     if [ ! \`find \${baseZipPath}\` ]
 25     then
 26         echo &quot;不存在压缩包：\${baseZipPath}&quot;
 27     else
 28         echo &quot;解压磁盘路径：\${baseDirPath}/\${baseZipName}&quot;
 29         echo &quot;开始解压...&quot;
 30 
 31         #解压命令
 32         unzip -od \${baseDirPath}/\${baseZipName} \${baseZipPath}
 33 
 34         #设置执行权限
 35         chmod +x \${baseDirPath}/\${baseZipName}/\${packageName}
 36 
 37         echo &quot;解压完成。&quot;  
 38     fi
 39 }
 40 
 41 #检测pid
 42 function getPid()
 43 {
 44     echo &quot;检测状态---------------------------------------------&quot;
 45     pid=\`ps -ef | grep -n \${packageName} | grep -v grep | awk &#39;{print $2}&#39;\`
 46     if [ \${pid} ] 
 47     then
 48         echo &quot;运行pid：\${pid}&quot;
 49     else
 50         echo &quot;未运行&quot;
 51     fi
 52 }
 53 
 54 #启动程序
 55 function start()
 56 {
 57     #启动前，先停止之前的
 58     stop
 59     if [ \${pid} ]
 60     then
 61         echo &quot;停止程序失败，无法启动&quot;
 62     else
 63         echo &quot;启动程序---------------------------------------------&quot;
 64         
 65         #选择语言类型
 66         read -p &quot;输入程序类型(java,javac,netcore)，下一步按回车键(默认：\${languageType})：&quot; read_languageType
 67         if [ \${read_languageType} ]
 68         then
 69             languageType=\${read_languageType}
 70         fi
 71         echo &quot;选择程序类型：\${languageType}&quot;
 72 
 73         #进入运行包目录
 74         cd \${baseDirPath}/\${baseZipName}
 75 
 76         #分类启动
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
 94         #查询是否有启动进程
 95         getPid
 96         if [ \${pid} ]
 97         then
 98             echo &quot;已启动&quot;
 99             #nohup日志
100             tail -n 50 -f \${baseDirPath}/\${packageName}.out
101         else
102             echo &quot;启动失败&quot;
103         fi
104     fi
105 }
106 
107 #停止程序
108 function stop()
109 {
110     getPid
111     if [ \${pid} ] 
112     then
113         echo &quot;停止程序---------------------------------------------&quot;
114         kill -9 \${pid}
115         
116         getPid
117         if [ \${pid} ] 
118         then
119             #stop
120             echo &quot;停止失败&quot;
121         else
122             echo &quot;停止成功&quot;
123         fi
124     fi
125 }
126 
127 #启动时带参数，根据参数执行
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
141             #执行解压
142             shenniu_unzip
143             #执行启动
144             start
145         ;;
146         *) 
147             echo &quot;\${1}无任何操作&quot;
148         ;;
149     esac
150 else
151     echo &quot;
152     command如下命令：
153     unzip：解压并启动
154     start：启动
155     stop：停止进程
156     restart：重启
157 
158     示例命令如：./shenniu_publish start
159     &quot;
160 fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正如上面小节说的，shell中的参数 package-name，activeProfile，boot-main 都是由mvn中profiles的properties中提供，是可变的参数，脚本代码本身不需要人工去修改，只需要变的是mvn的参数即可；其实在我们生成zip包的时候，shell中的参数就被替换了，可以看zip中shell文件内容如：</p><figure><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/348819-20190309170701655-1208411312.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h1 id="linux上使用shenniu-publish-sh启动程序" tabindex="-1"><a class="header-anchor" href="#linux上使用shenniu-publish-sh启动程序" aria-hidden="true">#</a> linux上使用shenniu_publish.sh启动程序</h1><p>把生成的zip上传到linux上，通过命令解压：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1 unzip -od eureka-server-0.0.1-node eureka-server-0.0.1-node.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其实shell脚本中包含有解压命令，但是我在打包时放在了zip中，所以只能通过手动解压了，当然可以调整；此时进入加压目录如此：</p><figure><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/348819-20190309170918126-491643739.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>注：这里第一次执行./shenniu_publish.sh脚本时候，提示了错误信息；是由于我是在windows上编辑的这个脚本，其空格等和linux上不一样，所以运行会有问题，要解决可以使用vim命令在linux把该文件转成linux格式，如下命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1 vim shenniu_publish.sh
2 set ff=unix
3 :wq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行完后，再来运行脚本./shenniu_publish.sh，此时有如下提示:</p><figure><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/348819-20190309171107977-1319405631.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>此刻我们文件是解压状态，因此只需要start命令启动程序即可：</p><figure><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/348819-20190309171127604-1971799892.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>到这里shenniu_publish.sh脚本使用就完成了，只要脚本没有提示错误，基本都能启动jar服务；其他restart和stop命令也如此执行就行：</p><figure><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/348819-20190309171150215-294116419.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,45),c={href:"https://github.com/shenniubuxing3/springcloud-Finchley.SR2",target:"_blank",rel:"noopener noreferrer"};function m(g,b){const n=s("ExternalLinkIcon");return a(),t("div",null,[u,i("p",null,[e("可以去研究下shell代码，希望该脚本能给你带来效率和好的学习思路，下面是测试用例git地址，脚本在eureka-server项目中："),i("a",c,[e("https://github.com/shenniubuxing3/springcloud-Finchley.SR2"),d(n)])])])}const h=l(r,[["render",m],["__file","springboot打包不同环境配置与shell脚本部署.html.vue"]]);export{h as default};
