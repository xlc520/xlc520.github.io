---
author: xlc520
title: SpringBoot打包不同环境配置与shell脚本部署
description: SpringBoot打包不同环境配置与shell脚本部署
date: 2022-01-15
category: other
tag: other
article: true
timeline: true
icon: 
password: 
---
# SpringBoot打包不同环境配置与shell脚本部署

本篇和大家分享的是springboot打包并结合shell脚本命令部署，重点在分享一个shell程序启动工具，希望能便利工作；

- profiles指定不同环境的配置
- maven-assembly-plugin打发布压缩包
- 分享shenniu_publish.sh程序启动工具
- linux上使用shenniu_publish.sh启动程序

# profiles指定不同环境的配置

通常一套程序分为了很多个部署环境：开发，测试，uat，线上 等，我们要想对这些环境区分配置文件，可以通过两种方式：

- 通过application.yml中编码指定 profile.active=uat 方式指定
- 通过mvn中profiles来区分不同环境对应的配置文件夹，人工可以手动在idea勾选生成不同环境的包(推荐)

这里我们要讲的是第二种，首先在mvn中配置如下内容：

```
 1     <profiles>
 2         <profile>
 3             <id>node</id>
 4             <properties>
 5                 <!--传递给脚本的参数值-->
 6                 <activeProfile>node</activeProfile>
 7                 <package-name>${scripts_packageName}</package-name>
 8                 <boot-main>${scripts_bootMain}</boot-main>
 9             </properties>
10             <activation>
11                 <activeByDefault>true</activeByDefault>
12             </activation>
13         </profile>
14         <profile>
15             <id>node1</id>
16             <properties>
17                 <activeProfile>node1</activeProfile>
18                 <package-name>${scripts_packageName}</package-name>
19                 <boot-main>${scripts_bootMain}</boot-main>
20             </properties>
21         </profile>
22         <profile>
23             <id>node2</id>
24             <properties>
25                 <activeProfile>node2</activeProfile>
26                 <package-name>${scripts_packageName}</package-name>
27                 <boot-main>${scripts_bootMain}</boot-main>
28             </properties>
29         </profile>
30     </profiles>
```



节点粗解：

- id：用来指定不同环境配置文件所在的目录，如下我这里：
  ![image](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/fe69f622e6fd659b563e79a848403dcac97db44d.png)
- properties：该节点中的节点是可作为参数传递给其他配置文件，如我这里的package-name节点值就可以在另外的assembly.xml或者shell脚本文件中通过${package-name}获取到，如下：
  ![image](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/fd2638a541ecddb2844197770587337bfa4bcc29.png)
- activeByDefault：指定默认环境配置文件夹

# maven-assembly-plugin打发布压缩包

对于springboot程序打包，可以分为jar和war，这里是jar包；有场景是咋们配置文件或者第三方等依赖包不想放到工程jar中，并且把这些文件压缩成一个zip包，方便上传到linux；此时通过maven-assembly-plugin和maven-jar-plugin就可以做到，mvn的配置如：

```
 1            <plugin>
 2                 <groupId>org.apache.maven.plugins</groupId>
 3                 <artifactId>maven-jar-plugin</artifactId>
 4                 <version>2.6</version>
 5                 <configuration>
 6                     <archive>
 7                         <addMavenDescriptor>false</addMavenDescriptor>
 8                         <manifest>
 9                             <addClasspath>true</addClasspath>
10                             <classpathPrefix>lib/</classpathPrefix>
11                             <mainClass>${scripts_bootMain}</mainClass>
12                         </manifest>
13                     </archive>
14                     <!--打包排除项-->
15                     <excludes>
16                         <exclude>**/*.yml</exclude>
17                         <exclude>**/*.properties</exclude>
18                         <exclude>**/*.xml</exclude>
19                         <exclude>**/*.sh</exclude>
20                     </excludes>
21                 </configuration>
22                 <executions>
23                     <execution>
24                         <id>make-a-jar</id>
25                         <phase>compile</phase>
26                         <goals>
27                             <goal>jar</goal>
28                         </goals>
29                     </execution>
30                 </executions>
31             </plugin>
32 
33             <plugin>
34                 <groupId>org.apache.maven.plugins</groupId>
35                 <artifactId>maven-assembly-plugin</artifactId>
36                 <version>2.4</version>
37                 <!-- The configuration of the plugin -->
38                 <configuration>
39                     <!-- Specifies the configuration file of the assembly plugin -->
40                     <descriptors>
41                         <descriptor>${project.basedir}/src/main/assembly/assembly.xml</descriptor>
42                     </descriptors>
43                 </configuration>
44                 <executions>
45                     <execution>
46                         <id>make-assembly</id>
47                         <phase>package</phase>
48                         <goals>
49                             <goal>single</goal>
50                         </goals>
51                     </execution>
52                 </executions>
53             </plugin>
```

值得注意的地方如下几点：

- mainClass节点：用来指定启动main函数入口类路径，如这里的：com.sm.EurekaServerApplication
- excludes节点：排除主jar包中配置等一些列后缀文件，因为我们要包这些配置文件放到主包外面
- descriptor节点：用来指定assembly插件对应的assembly.xml配置文件

有了上面mvn配置，我们还需要assembly.xml的配置，这里提取了结合shell脚本发布程序的配置：

```
 1 <assembly xmlns="http://maven.apache.org/ASSEMBLY/2.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
 2           xsi:schemaLocation="http://maven.apache.org/ASSEMBLY/2.0.0 http://maven.apache.org/xsd/assembly-2.0.0.xsd
 3 http://maven.apache.org/ASSEMBLY/2.0.0 ">
 4     <id>${activeProfile}</id>
 5     <!--打包成一个用于发布的zip文件-->
 6     <formats>
 7         <format>zip</format>
 8     </formats>
 9     <!--true：zip中生成一级目录(此处屏蔽，配合脚本需要profiles后缀)-->
10     <includeBaseDirectory>false</includeBaseDirectory>
11     <dependencySets>
12         <dependencySet>
13             <!--打包进zip文件的lib目录-->
14             <useProjectArtifact>false</useProjectArtifact>
15             <outputDirectory>${package-name}-${activeProfile}/lib</outputDirectory>
16             <unpack>false</unpack>
17         </dependencySet>
18     </dependencySets>
19 
20     <fileSets>
21         <!-- 配置文件打包进zip文件的conf目录 -->
22         <fileSet>
23             <directory>${project.basedir}/src/main/profiles/${activeProfile}</directory>
24             <outputDirectory>${package-name}-${activeProfile}/conf</outputDirectory>
25             <includes>
26                 <include>**/*</include>
27                 <!--<include>*.xml</include>-->
28                 <!--<include>*.properties</include>-->
29                 <!--<include>*.yml</include>-->
30             </includes>
31         </fileSet>
32 
33         <!--启动脚本打包进zip文件-->
34         <fileSet>
35             <directory>${project.basedir}/src/main/scripts</directory>
36             <outputDirectory></outputDirectory>
37             <includes>
38                 <include>**/*</include>
39             </includes>
40             <!-- 文件文件权限为777 -->
41             <fileMode>777</fileMode>
42             <!-- 目录权限为777  -->
43             <directoryMode>777</directoryMode>
44             <!--脚本中参数变量为pom中的值 关键-->
45             <filtered>true</filtered>
46         </fileSet>
47 
48         <!-- 项目编译出来的jar打包进zip文件 -->
49         <fileSet>
50             <directory>${project.build.directory}</directory>
51             <outputDirectory>${package-name}-${activeProfile}/</outputDirectory>
52             <includes>
53                 <include>*.jar</include>
54             </includes>
55         </fileSet>
56     </fileSets>
57 </assembly>
```

重点节点介绍：

- formats节点：把配置文件和jar包等压缩成什么文件格式，这里可以有：zip，tar等
- fileMode节点：指定scripts目录下脚本文件(这里是：shenniu_publish.sh)在linux上文件权限为777
- filtered节点：脚本中参数变量为pom的profiles中properties的值(该配置，是把mvn中属性值映射生成到sh文件中，如：${package-name})

完成上面配置后，此时我们可以通过idea上勾选切换不同环境来打zip包，如图：

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/348819-20190309170559272-1005982868.png)

# 分享shenniu_publish.sh程序启动工具

上面步骤完成了zip格式的发布包，我们再分享下启动程序的shell脚本，该脚本具有的功能如：

- 解压zip+启动jar包
- 启动jar包
- 停止对应jar运行
- 重启jar程序

目前该shell中封装了两种启动jar命令的方式：

- java -cp
- java -jar

如图命令格式：

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/348819-20190309170514140-1638598831.png)

 来看全部的shell代码：

```
  1 #!/usr/bin/env bash
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
 81                 nohup java -cp conf:lib\*.jar:${packageName}.jar ${mainclass} >${baseDirPath}/${packageName}.out 2>&1 &
 82                #nohup java -cp conf:lib\*.jar:${packageName}.jar ${mainclass} >/dev/null 2>&1 &
 83             fi
 84         elif [ "${languageType}" == "java" ] 
 85         then
 86             nohup java -jar ${baseDirPath}/${baseZipName}/${packageName}.jar >/dev/null 2>&1 &
 87             # java -jar ${baseDirPath}/${baseZipName}/${packageName}.jar
 88         elif [ "${languageType}" == "netcore" ] 
 89         then
 90             #nohup dotnet run ${baseDirPath}/${baseZipName}/${packageName} >/dev/null 2>&1 &
 91             nohup ${baseDirPath}/${baseZipName}/${packageName} >/dev/null 2>&1 &
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
```

正如上面小节说的，shell中的参数 package-name，activeProfile，boot-main 都是由mvn中profiles的properties中提供，是可变的参数，脚本代码本身不需要人工去修改，只需要变的是mvn的参数即可；其实在我们生成zip包的时候，shell中的参数就被替换了，可以看zip中shell文件内容如：

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/348819-20190309170701655-1208411312.png)

# linux上使用shenniu_publish.sh启动程序

把生成的zip上传到linux上，通过命令解压：

```
1 unzip -od eureka-server-0.0.1-node eureka-server-0.0.1-node.zip
```

其实shell脚本中包含有解压命令，但是我在打包时放在了zip中，所以只能通过手动解压了，当然可以调整；此时进入加压目录如此：

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/348819-20190309170918126-491643739.png)

注：这里第一次执行./shenniu_publish.sh脚本时候，提示了错误信息；是由于我是在windows上编辑的这个脚本，其空格等和linux上不一样，所以运行会有问题，要解决可以使用vim命令在linux把该文件转成linux格式，如下命令：

```
1 vim shenniu_publish.sh
2 set ff=unix
3 :wq
```

执行完后，再来运行脚本./shenniu_publish.sh，此时有如下提示:

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/348819-20190309171107977-1319405631.png)

此刻我们文件是解压状态，因此只需要start命令启动程序即可：

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/348819-20190309171127604-1971799892.png)

到这里shenniu_publish.sh脚本使用就完成了，只要脚本没有提示错误，基本都能启动jar服务；其他restart和stop命令也如此执行就行：

![img](https://cdn.jsdelivr.net/gh/xlc520/MyImage/MdImg/348819-20190309171150215-294116419.png)

可以去研究下shell代码，希望该脚本能给你带来效率和好的学习思路，下面是测试用例git地址，脚本在eureka-server项目中：https://github.com/shenniubuxing3/springcloud-Finchley.SR2