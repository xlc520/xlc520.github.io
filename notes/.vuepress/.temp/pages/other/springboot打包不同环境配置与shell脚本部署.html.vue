<template><h1 id="springboot打包不同环境配置与shell脚本部署" tabindex="-1"><a class="header-anchor" href="#springboot打包不同环境配置与shell脚本部署" aria-hidden="true">#</a> SpringBoot打包不同环境配置与shell脚本部署</h1>
<p>本篇和大家分享的是springboot打包并结合shell脚本命令部署，重点在分享一个shell程序启动工具，希望能便利工作；</p>
<ul>
<li>profiles指定不同环境的配置</li>
<li>maven-assembly-plugin打发布压缩包</li>
<li>分享shenniu_publish.sh程序启动工具</li>
<li>linux上使用shenniu_publish.sh启动程序</li>
</ul>
<h1 id="profiles指定不同环境的配置" tabindex="-1"><a class="header-anchor" href="#profiles指定不同环境的配置" aria-hidden="true">#</a> profiles指定不同环境的配置</h1>
<p>通常一套程序分为了很多个部署环境：开发，测试，uat，线上 等，我们要想对这些环境区分配置文件，可以通过两种方式：</p>
<ul>
<li>通过application.yml中编码指定 profile.active=uat 方式指定</li>
<li>通过mvn中profiles来区分不同环境对应的配置文件夹，人工可以手动在idea勾选生成不同环境的包(推荐)</li>
</ul>
<p>这里我们要讲的是第二种，首先在mvn中配置如下内容：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> 1     &lt;profiles>
 2         &lt;profile>
 3             &lt;id>node&lt;/id>
 4             &lt;properties>
 5                 &lt;!--传递给脚本的参数值-->
 6                 &lt;activeProfile>node&lt;/activeProfile>
 7                 &lt;package-name>${scripts_packageName}&lt;/package-name>
 8                 &lt;boot-main>${scripts_bootMain}&lt;/boot-main>
 9             &lt;/properties>
10             &lt;activation>
11                 &lt;activeByDefault>true&lt;/activeByDefault>
12             &lt;/activation>
13         &lt;/profile>
14         &lt;profile>
15             &lt;id>node1&lt;/id>
16             &lt;properties>
17                 &lt;activeProfile>node1&lt;/activeProfile>
18                 &lt;package-name>${scripts_packageName}&lt;/package-name>
19                 &lt;boot-main>${scripts_bootMain}&lt;/boot-main>
20             &lt;/properties>
21         &lt;/profile>
22         &lt;profile>
23             &lt;id>node2&lt;/id>
24             &lt;properties>
25                 &lt;activeProfile>node2&lt;/activeProfile>
26                 &lt;package-name>${scripts_packageName}&lt;/package-name>
27                 &lt;boot-main>${scripts_bootMain}&lt;/boot-main>
28             &lt;/properties>
29         &lt;/profile>
30     &lt;/profiles>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>节点粗解：</p>
<ul>
<li>id：用来指定不同环境配置文件所在的目录，如下我这里：
<img src="https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/fe69f622e6fd659b563e79a848403dcac97db44d.png" alt="image" loading="lazy"></li>
<li>properties：该节点中的节点是可作为参数传递给其他配置文件，如我这里的package-name节点值就可以在另外的assembly.xml或者shell脚本文件中通过${package-name}获取到，如下：
<img src="https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/fd2638a541ecddb2844197770587337bfa4bcc29.png" alt="image" loading="lazy"></li>
<li>activeByDefault：指定默认环境配置文件夹</li>
</ul>
<h1 id="maven-assembly-plugin打发布压缩包" tabindex="-1"><a class="header-anchor" href="#maven-assembly-plugin打发布压缩包" aria-hidden="true">#</a> maven-assembly-plugin打发布压缩包</h1>
<p>对于springboot程序打包，可以分为jar和war，这里是jar包；有场景是咋们配置文件或者第三方等依赖包不想放到工程jar中，并且把这些文件压缩成一个zip包，方便上传到linux；此时通过maven-assembly-plugin和maven-jar-plugin就可以做到，mvn的配置如：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> 1            &lt;plugin>
 2                 &lt;groupId>org.apache.maven.plugins&lt;/groupId>
 3                 &lt;artifactId>maven-jar-plugin&lt;/artifactId>
 4                 &lt;version>2.6&lt;/version>
 5                 &lt;configuration>
 6                     &lt;archive>
 7                         &lt;addMavenDescriptor>false&lt;/addMavenDescriptor>
 8                         &lt;manifest>
 9                             &lt;addClasspath>true&lt;/addClasspath>
10                             &lt;classpathPrefix>lib/&lt;/classpathPrefix>
11                             &lt;mainClass>${scripts_bootMain}&lt;/mainClass>
12                         &lt;/manifest>
13                     &lt;/archive>
14                     &lt;!--打包排除项-->
15                     &lt;excludes>
16                         &lt;exclude>**/*.yml&lt;/exclude>
17                         &lt;exclude>**/*.properties&lt;/exclude>
18                         &lt;exclude>**/*.xml&lt;/exclude>
19                         &lt;exclude>**/*.sh&lt;/exclude>
20                     &lt;/excludes>
21                 &lt;/configuration>
22                 &lt;executions>
23                     &lt;execution>
24                         &lt;id>make-a-jar&lt;/id>
25                         &lt;phase>compile&lt;/phase>
26                         &lt;goals>
27                             &lt;goal>jar&lt;/goal>
28                         &lt;/goals>
29                     &lt;/execution>
30                 &lt;/executions>
31             &lt;/plugin>
32 
33             &lt;plugin>
34                 &lt;groupId>org.apache.maven.plugins&lt;/groupId>
35                 &lt;artifactId>maven-assembly-plugin&lt;/artifactId>
36                 &lt;version>2.4&lt;/version>
37                 &lt;!-- The configuration of the plugin -->
38                 &lt;configuration>
39                     &lt;!-- Specifies the configuration file of the assembly plugin -->
40                     &lt;descriptors>
41                         &lt;descriptor>${project.basedir}/src/main/assembly/assembly.xml&lt;/descriptor>
42                     &lt;/descriptors>
43                 &lt;/configuration>
44                 &lt;executions>
45                     &lt;execution>
46                         &lt;id>make-assembly&lt;/id>
47                         &lt;phase>package&lt;/phase>
48                         &lt;goals>
49                             &lt;goal>single&lt;/goal>
50                         &lt;/goals>
51                     &lt;/execution>
52                 &lt;/executions>
53             &lt;/plugin>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><p>值得注意的地方如下几点：</p>
<ul>
<li>mainClass节点：用来指定启动main函数入口类路径，如这里的：com.sm.EurekaServerApplication</li>
<li>excludes节点：排除主jar包中配置等一些列后缀文件，因为我们要包这些配置文件放到主包外面</li>
<li>descriptor节点：用来指定assembly插件对应的assembly.xml配置文件</li>
</ul>
<p>有了上面mvn配置，我们还需要assembly.xml的配置，这里提取了结合shell脚本发布程序的配置：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code> 1 &lt;assembly xmlns="http://maven.apache.org/ASSEMBLY/2.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 2           xsi:schemaLocation="http://maven.apache.org/ASSEMBLY/2.0.0 http://maven.apache.org/xsd/assembly-2.0.0.xsd
 3 http://maven.apache.org/ASSEMBLY/2.0.0 ">
 4     &lt;id>${activeProfile}&lt;/id>
 5     &lt;!--打包成一个用于发布的zip文件-->
 6     &lt;formats>
 7         &lt;format>zip&lt;/format>
 8     &lt;/formats>
 9     &lt;!--true：zip中生成一级目录(此处屏蔽，配合脚本需要profiles后缀)-->
10     &lt;includeBaseDirectory>false&lt;/includeBaseDirectory>
11     &lt;dependencySets>
12         &lt;dependencySet>
13             &lt;!--打包进zip文件的lib目录-->
14             &lt;useProjectArtifact>false&lt;/useProjectArtifact>
15             &lt;outputDirectory>${package-name}-${activeProfile}/lib&lt;/outputDirectory>
16             &lt;unpack>false&lt;/unpack>
17         &lt;/dependencySet>
18     &lt;/dependencySets>
19 
20     &lt;fileSets>
21         &lt;!-- 配置文件打包进zip文件的conf目录 -->
22         &lt;fileSet>
23             &lt;directory>${project.basedir}/src/main/profiles/${activeProfile}&lt;/directory>
24             &lt;outputDirectory>${package-name}-${activeProfile}/conf&lt;/outputDirectory>
25             &lt;includes>
26                 &lt;include>**/*&lt;/include>
27                 &lt;!--&lt;include>*.xml&lt;/include>-->
28                 &lt;!--&lt;include>*.properties&lt;/include>-->
29                 &lt;!--&lt;include>*.yml&lt;/include>-->
30             &lt;/includes>
31         &lt;/fileSet>
32 
33         &lt;!--启动脚本打包进zip文件-->
34         &lt;fileSet>
35             &lt;directory>${project.basedir}/src/main/scripts&lt;/directory>
36             &lt;outputDirectory>&lt;/outputDirectory>
37             &lt;includes>
38                 &lt;include>**/*&lt;/include>
39             &lt;/includes>
40             &lt;!-- 文件文件权限为777 -->
41             &lt;fileMode>777&lt;/fileMode>
42             &lt;!-- 目录权限为777  -->
43             &lt;directoryMode>777&lt;/directoryMode>
44             &lt;!--脚本中参数变量为pom中的值 关键-->
45             &lt;filtered>true&lt;/filtered>
46         &lt;/fileSet>
47 
48         &lt;!-- 项目编译出来的jar打包进zip文件 -->
49         &lt;fileSet>
50             &lt;directory>${project.build.directory}&lt;/directory>
51             &lt;outputDirectory>${package-name}-${activeProfile}/&lt;/outputDirectory>
52             &lt;includes>
53                 &lt;include>*.jar&lt;/include>
54             &lt;/includes>
55         &lt;/fileSet>
56     &lt;/fileSets>
57 &lt;/assembly>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div><p>重点节点介绍：</p>
<ul>
<li>formats节点：把配置文件和jar包等压缩成什么文件格式，这里可以有：zip，tar等</li>
<li>fileMode节点：指定scripts目录下脚本文件(这里是：shenniu_publish.sh)在linux上文件权限为777</li>
<li>filtered节点：脚本中参数变量为pom的profiles中properties的值(该配置，是把mvn中属性值映射生成到sh文件中，如：${package-name})</li>
</ul>
<p>完成上面配置后，此时我们可以通过idea上勾选切换不同环境来打zip包，如图：</p>
<p><img src="https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/348819-20190309170559272-1005982868.png" alt="img" loading="lazy"></p>
<h1 id="分享shenniu-publish-sh程序启动工具" tabindex="-1"><a class="header-anchor" href="#分享shenniu-publish-sh程序启动工具" aria-hidden="true">#</a> 分享shenniu_publish.sh程序启动工具</h1>
<p>上面步骤完成了zip格式的发布包，我们再分享下启动程序的shell脚本，该脚本具有的功能如：</p>
<ul>
<li>解压zip+启动jar包</li>
<li>启动jar包</li>
<li>停止对应jar运行</li>
<li>重启jar程序</li>
</ul>
<p>目前该shell中封装了两种启动jar命令的方式：</p>
<ul>
<li>java -cp</li>
<li>java -jar</li>
</ul>
<p>如图命令格式：</p>
<p><img src="https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/348819-20190309170514140-1638598831.png" alt="img" loading="lazy"></p>
<p>来看全部的shell代码：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  1 #!/usr/bin/env bash
  2 #可变参数变量
  3 languageType="javac" #支持 java,javac,netcore 发布
  4 #参数值由pom文件传递
  5 baseZipName="${package-name}-${activeProfile}" #压缩包名称  publish-test.zip的publish
  6 packageName="${package-name}" #命令启动包名 xx.jar的xx
  7 mainclass="${boot-main}" #java -cp启动时，指定main入口类;命令：java -cp conf;lib\*.jar;${packageName}.jar ${mainclass}
  8 
  9 #例子
 10 # baseZipName="publish-test" #压缩包名称  publish-test.zip的publish
 11 # packageName="publish" #命令启动包名 publish.jar的xx
 12 
 13 #固定变量
 14 basePath=$(cd `dirname $0`/; pwd)
 15 baseZipPath="${basePath}/${baseZipName}.zip"  #压缩包路径
 16 baseDirPath="${basePath}" #解压部署磁盘路径
 17 pid= #进程pid
 18 
 19 #解压
 20 function shenniu_unzip()
 21 {
 22     echo "解压---------------------------------------------"
 23     echo "压缩包路径：${baseZipPath}"
 24     if [ ! `find ${baseZipPath}` ]
 25     then
 26         echo "不存在压缩包：${baseZipPath}"
 27     else
 28         echo "解压磁盘路径：${baseDirPath}/${baseZipName}"
 29         echo "开始解压..."
 30 
 31         #解压命令
 32         unzip -od ${baseDirPath}/${baseZipName} ${baseZipPath}
 33 
 34         #设置执行权限
 35         chmod +x ${baseDirPath}/${baseZipName}/${packageName}
 36 
 37         echo "解压完成。"  
 38     fi
 39 }
 40 
 41 #检测pid
 42 function getPid()
 43 {
 44     echo "检测状态---------------------------------------------"
 45     pid=`ps -ef | grep -n ${packageName} | grep -v grep | awk '{print $2}'`
 46     if [ ${pid} ] 
 47     then
 48         echo "运行pid：${pid}"
 49     else
 50         echo "未运行"
 51     fi
 52 }
 53 
 54 #启动程序
 55 function start()
 56 {
 57     #启动前，先停止之前的
 58     stop
 59     if [ ${pid} ]
 60     then
 61         echo "停止程序失败，无法启动"
 62     else
 63         echo "启动程序---------------------------------------------"
 64         
 65         #选择语言类型
 66         read -p "输入程序类型(java,javac,netcore)，下一步按回车键(默认：${languageType})：" read_languageType
 67         if [ ${read_languageType} ]
 68         then
 69             languageType=${read_languageType}
 70         fi
 71         echo "选择程序类型：${languageType}"
 72 
 73         #进入运行包目录
 74         cd ${baseDirPath}/${baseZipName}
 75 
 76         #分类启动
 77         if [ "${languageType}" == "javac" ] 
 78         then
 79             if [ ${mainclass} ] 
 80             then
 81                 nohup java -cp conf:lib\*.jar:${packageName}.jar ${mainclass} >${baseDirPath}/${packageName}.out 2>&amp;1 &amp;
 82                #nohup java -cp conf:lib\*.jar:${packageName}.jar ${mainclass} >/dev/null 2>&amp;1 &amp;
 83             fi
 84         elif [ "${languageType}" == "java" ] 
 85         then
 86             nohup java -jar ${baseDirPath}/${baseZipName}/${packageName}.jar >/dev/null 2>&amp;1 &amp;
 87             # java -jar ${baseDirPath}/${baseZipName}/${packageName}.jar
 88         elif [ "${languageType}" == "netcore" ] 
 89         then
 90             #nohup dotnet run ${baseDirPath}/${baseZipName}/${packageName} >/dev/null 2>&amp;1 &amp;
 91             nohup ${baseDirPath}/${baseZipName}/${packageName} >/dev/null 2>&amp;1 &amp;
 92         fi
 93 
 94         #查询是否有启动进程
 95         getPid
 96         if [ ${pid} ]
 97         then
 98             echo "已启动"
 99             #nohup日志
100             tail -n 50 -f ${baseDirPath}/${packageName}.out
101         else
102             echo "启动失败"
103         fi
104     fi
105 }
106 
107 #停止程序
108 function stop()
109 {
110     getPid
111     if [ ${pid} ] 
112     then
113         echo "停止程序---------------------------------------------"
114         kill -9 ${pid}
115         
116         getPid
117         if [ ${pid} ] 
118         then
119             #stop
120             echo "停止失败"
121         else
122             echo "停止成功"
123         fi
124     fi
125 }
126 
127 #启动时带参数，根据参数执行
128 if [ ${#} -ge 1 ] 
129 then
130     case ${1} in
131         "start") 
132             start
133         ;;
134         "restart") 
135             start
136         ;;
137         "stop") 
138             stop
139         ;;
140         "unzip") 
141             #执行解压
142             shenniu_unzip
143             #执行启动
144             start
145         ;;
146         *) 
147             echo "${1}无任何操作"
148         ;;
149     esac
150 else
151     echo "
152     command如下命令：
153     unzip：解压并启动
154     start：启动
155     stop：停止进程
156     restart：重启
157 
158     示例命令如：./shenniu_publish start
159     "
160 fi
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br></div></div><p>正如上面小节说的，shell中的参数 package-name，activeProfile，boot-main 都是由mvn中profiles的properties中提供，是可变的参数，脚本代码本身不需要人工去修改，只需要变的是mvn的参数即可；其实在我们生成zip包的时候，shell中的参数就被替换了，可以看zip中shell文件内容如：</p>
<p><img src="https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/348819-20190309170701655-1208411312.png" alt="img" loading="lazy"></p>
<h1 id="linux上使用shenniu-publish-sh启动程序" tabindex="-1"><a class="header-anchor" href="#linux上使用shenniu-publish-sh启动程序" aria-hidden="true">#</a> linux上使用shenniu_publish.sh启动程序</h1>
<p>把生成的zip上传到linux上，通过命令解压：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1 unzip -od eureka-server-0.0.1-node eureka-server-0.0.1-node.zip
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>其实shell脚本中包含有解压命令，但是我在打包时放在了zip中，所以只能通过手动解压了，当然可以调整；此时进入加压目录如此：</p>
<p><img src="https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/348819-20190309170918126-491643739.png" alt="img" loading="lazy"></p>
<p>注：这里第一次执行./shenniu_publish.sh脚本时候，提示了错误信息；是由于我是在windows上编辑的这个脚本，其空格等和linux上不一样，所以运行会有问题，要解决可以使用vim命令在linux把该文件转成linux格式，如下命令：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1 vim shenniu_publish.sh
2 set ff=unix
3 :wq
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>执行完后，再来运行脚本./shenniu_publish.sh，此时有如下提示:</p>
<p><img src="https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/348819-20190309171107977-1319405631.png" alt="img" loading="lazy"></p>
<p>此刻我们文件是解压状态，因此只需要start命令启动程序即可：</p>
<p><img src="https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/348819-20190309171127604-1971799892.png" alt="img" loading="lazy"></p>
<p>到这里shenniu_publish.sh脚本使用就完成了，只要脚本没有提示错误，基本都能启动jar服务；其他restart和stop命令也如此执行就行：</p>
<p><img src="https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/348819-20190309171150215-294116419.png" alt="img" loading="lazy"></p>
<p>可以去研究下shell代码，希望该脚本能给你带来效率和好的学习思路，下面是测试用例git地址，脚本在eureka-server项目中：https://github.com/shenniubuxing3/springcloud-Finchley.SR2</p>
</template>
