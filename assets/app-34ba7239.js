import{d as defineAsyncComponent,r as ref,a as readonly,b as reactive,c as defineComponent,i as isString$1,e as isArray,f as dedupeHead,g as resolveLocalePath,o as onMounted,h as computed,j as h$3,k as isLinkHttp,l as removeLeadingSlash,m as inject,n as getCurrentInstance,p as isPlainObject,q as camelize,s as capitalize,t as isFunction$1,u as unref,w as watch,v as nextTick,x as getCurrentScope,y as onScopeDispose,z as shallowRef,A as watchEffect,T as Transition,B as useRouter,C as onBeforeUnmount,D as useRoute,E as resolveComponent,F as toRef,R as RouterLink,G as isLinkMailto,H as isLinkTel,I as isLinkExternal,J as removeEndingSlash,K as ensureEndingSlash,L as provide,M as TransitionGroup,N as useLink,O as createSSRApp,P as RouterView,Q as createRouter,S as START_LOCATION_NORMALIZED,U as createWebHistory}from"./framework-debd98b7.js";const scriptRel="modulepreload",assetsURL=function(b){return"/"+b},seen={},__vitePreload=function($,j,U){if(!j||j.length===0)return $();const G=document.getElementsByTagName("link");return Promise.all(j.map(W=>{if(W=assetsURL(W),W in seen)return;seen[W]=!0;const K=W.endsWith(".css"),Y=K?'[rel="stylesheet"]':"";if(!!U)for(let ae=G.length-1;ae>=0;ae--){const oe=G[ae];if(oe.href===W&&(!K||oe.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${W}"]${Y}`))return;const ne=document.createElement("link");if(ne.rel=K?"stylesheet":scriptRel,K||(ne.as="script",ne.crossOrigin=""),ne.href=W,document.head.appendChild(ne),K)return new Promise((ae,oe)=>{ne.addEventListener("load",ae),ne.addEventListener("error",()=>oe(new Error(`Unable to preload CSS for ${W}`)))})})).then(()=>$())},pagesData$1={"v-8daa1a0e":()=>__vitePreload(()=>import("./index.html-f56d9f62.js"),[]).then(({data:b})=>b),"v-70bc2959":()=>__vitePreload(()=>import("./index.html-e6127475.js"),[]).then(({data:b})=>b),"v-4ca9b1ff":()=>__vitePreload(()=>import("./七大排序.html-858b2640.js"),[]).then(({data:b})=>b),"v-6f38dab0":()=>__vitePreload(()=>import("./十大排序.html-38d26645.js"),[]).then(({data:b})=>b),"v-3f8bc7c2":()=>__vitePreload(()=>import("./快速排序.html-56459c1e.js"),[]).then(({data:b})=>b),"v-1b333d5c":()=>__vitePreload(()=>import("./牛客网-华为机试.html-62af1b1f.js"),[]).then(({data:b})=>b),"v-79c9f96f":()=>__vitePreload(()=>import("./index.html-b82e97ff.js"),[]).then(({data:b})=>b),"v-f5ec58cc":()=>__vitePreload(()=>import("./Share强制激活高级版.html-98c1f872.js"),[]).then(({data:b})=>b),"v-61dcb9ca":()=>__vitePreload(()=>import("./Thanox墓碑情景模式.html-a67afc63.js"),[]).then(({data:b})=>b),"v-a1d04c6c":()=>__vitePreload(()=>import("./Thanox情景模式.html-cb3a0c54.js"),[]).then(({data:b})=>b),"v-5748b243":()=>__vitePreload(()=>import("./Xposed edge pro入门教程.html-5f223b9b.js"),[]).then(({data:b})=>b),"v-db62373e":()=>__vitePreload(()=>import("./Xposed-edge-pro Shell命令-打开微信好友聊天界面.html-ae652962.js"),[]).then(({data:b})=>b),"v-53503e38":()=>__vitePreload(()=>import("./Xposed-edge-pro Shell命令.html-98fb55ae.js"),[]).then(({data:b})=>b),"v-d5ecdaba":()=>__vitePreload(()=>import("./一个减少MIUI动画掉帧的方法.html-bed843d9.js"),[]).then(({data:b})=>b),"v-1df04f08":()=>__vitePreload(()=>import("./一百多影视VIP视频解析接口.html-583996d9.js"),[]).then(({data:b})=>b),"v-011c74f0":()=>__vitePreload(()=>import("./世界大学.html-4da7e4cc.js"),[]).then(({data:b})=>b),"v-309be644":()=>__vitePreload(()=>import("./全球各大免费电子图书馆汇集.html-3a2400b4.js"),[]).then(({data:b})=>b),"v-67b6f947":()=>__vitePreload(()=>import("./关闭微信广告.html-b08a88da.js"),[]).then(({data:b})=>b),"v-093e04ac":()=>__vitePreload(()=>import("./去除MIUI10秒的警告.html-4b840f0b.js"),[]).then(({data:b})=>b),"v-0fe915da":()=>__vitePreload(()=>import("./工程模式码(拨号键盘).html-3295225a.js"),[]).then(({data:b})=>b),"v-5e2533a8":()=>__vitePreload(()=>import("./广告拦截规则整理.html-2ed87062.js"),[]).then(({data:b})=>b),"v-4edf72d6":()=>__vitePreload(()=>import("./影视大全.html-c02d8fa3.js"),[]).then(({data:b})=>b),"v-82076524":()=>__vitePreload(()=>import("./影视软件TV-APK.html-a0eefaa7.js"),[]).then(({data:b})=>b),"v-b1e58032":()=>__vitePreload(()=>import("./怎么从客观角度看待大学封校行为.html-8ca5db29.js"),[]).then(({data:b})=>b),"v-7cb79b7a":()=>__vitePreload(()=>import("./摩托罗拉X40X30S30Pro全机型解锁BL.html-66efd366.js"),[]).then(({data:b})=>b),"v-e4c5586a":()=>__vitePreload(()=>import("./短视频网页在线去水印下载.html-7cbef918.js"),[]).then(({data:b})=>b),"v-841c3444":()=>__vitePreload(()=>import("./程序员延寿指南.html-515fd2b0.js"),[]).then(({data:b})=>b),"v-89f114ba":()=>__vitePreload(()=>import("./15000字的SQL语句大全.html-aeff48f9.js"),[]).then(({data:b})=>b),"v-a3ffd1cc":()=>__vitePreload(()=>import("./18个Java8日期处理.html-76eca237.js"),[]).then(({data:b})=>b),"v-0a46221e":()=>__vitePreload(()=>import("./24 个常见的Docker疑难杂症处理技巧.html-797d5370.js"),[]).then(({data:b})=>b),"v-0a8937cf":()=>__vitePreload(()=>import("./36张图梳理 Intellij IDEA常用设置.html-85f291a2.js"),[]).then(({data:b})=>b),"v-469f0e94":()=>__vitePreload(()=>import("./7000字_24张图_带你彻底弄懂线程池.html-f14627be.js"),[]).then(({data:b})=>b),"v-058e1247":()=>__vitePreload(()=>import("./DateTimeFormatter-替换SimpleDateFormat.html-b35465d9.js"),[]).then(({data:b})=>b),"v-6169e28b":()=>__vitePreload(()=>import("./Docker搭建ELK日志分析系统.html-788513d0.js"),[]).then(({data:b})=>b),"v-13072166":()=>__vitePreload(()=>import("./ES6语法详解.html-c31d1293.js"),[]).then(({data:b})=>b),"v-29b89b89":()=>__vitePreload(()=>import("./Guava中Map的骚操作.html-7d63cb2c.js"),[]).then(({data:b})=>b),"v-12f7a1d2":()=>__vitePreload(()=>import("./IDEA206个快捷键-动图演示.html-11de6934.js"),[]).then(({data:b})=>b),"v-271a8b48":()=>__vitePreload(()=>import("./IDEA中的各种调试代码技巧.html-09389d6a.js"),[]).then(({data:b})=>b),"v-709e7438":()=>__vitePreload(()=>import("./IDEA日常使用介绍.html-219a8009.js"),[]).then(({data:b})=>b),"v-2b59d834":()=>__vitePreload(()=>import("./IntelliJIDEA快捷键大全_动图演示.html-263a67b1.js"),[]).then(({data:b})=>b),"v-eba414ea":()=>__vitePreload(()=>import("./JApiDocs教程.html-93f4e7de.js"),[]).then(({data:b})=>b),"v-05f16561":()=>__vitePreload(()=>import("./JRebel热部署的使用.html-3d79c728.js"),[]).then(({data:b})=>b),"v-2c1c367c":()=>__vitePreload(()=>import("./JSP和JSTL获取服务器参数.html-2a57afe8.js"),[]).then(({data:b})=>b),"v-358ae550":()=>__vitePreload(()=>import("./JUC并发编程.html-00f771de.js"),[]).then(({data:b})=>b),"v-a2ddb01c":()=>__vitePreload(()=>import("./Java8Stream之collect().html-ba07e4f9.js"),[]).then(({data:b})=>b),"v-60d5c536":()=>__vitePreload(()=>import("./Java8多线程CompletableFuture.html-da888087.js"),[]).then(({data:b})=>b),"v-55b8ba0a":()=>__vitePreload(()=>import("./Java中List的stream使用.html-25732f87.js"),[]).then(({data:b})=>b),"v-3f0a946f":()=>__vitePreload(()=>import("./Java命名规范.html-e5f9a8db.js"),[]).then(({data:b})=>b),"v-50401ed5":()=>__vitePreload(()=>import("./Java实现gz压缩与解压缩.html-85b72bb9.js"),[]).then(({data:b})=>b),"v-40911b8e":()=>__vitePreload(()=>import("./Java导入导出Excel-POI.html-a31086a9.js"),[]).then(({data:b})=>b),"v-73b317e4":()=>__vitePreload(()=>import("./Java电子书笔记.html-827d2201.js"),[]).then(({data:b})=>b),"v-5bd12a58":()=>__vitePreload(()=>import("./Jenkins_Docker一键自动化部署.html-0c8657e1.js"),[]).then(({data:b})=>b),"v-a4b9dd90":()=>__vitePreload(()=>import("./Logback 配置文件优化.html-98288617.js"),[]).then(({data:b})=>b),"v-6207c160":()=>__vitePreload(()=>import("./MyBatis-Plus联表查询-Mybatis-Plus-Join.html-3e8baa69.js"),[]).then(({data:b})=>b),"v-6d504a5e":()=>__vitePreload(()=>import("./MyEclipse.html-86df6592.js"),[]).then(({data:b})=>b),"v-3953c4a4":()=>__vitePreload(()=>import("./Optional非空判断.html-cdf00ea4.js"),[]).then(({data:b})=>b),"v-0ff149dc":()=>__vitePreload(()=>import("./Python批量下载某网页的所有图片.html-0a0b9bbf.js"),[]).then(({data:b})=>b),"v-7d0c470e":()=>__vitePreload(()=>import("./Python自动化办公库.html-0130bf1a.js"),[]).then(({data:b})=>b),"v-18aae998":()=>__vitePreload(()=>import("./Quartz任务调度框架整合使用.html-d7f73557.js"),[]).then(({data:b})=>b),"v-7445cd33":()=>__vitePreload(()=>import("./index.html-ce88a10d.js"),[]).then(({data:b})=>b),"v-545738c8":()=>__vitePreload(()=>import("./Redis总结：缓存雪崩、缓存击穿、缓存穿透.html-cd1551c8.js"),[]).then(({data:b})=>b),"v-0e6eab8e":()=>__vitePreload(()=>import("./RocketMQ笔记：应用实践.html-4f16293a.js"),[]).then(({data:b})=>b),"v-0c09d80a":()=>__vitePreload(()=>import("./Spring 面试63问.html-7555d562.js"),[]).then(({data:b})=>b),"v-4d262f90":()=>__vitePreload(()=>import("./SpringBoot_Kafka_ELK完成海量日志收集.html-dfb12e23.js"),[]).then(({data:b})=>b),"v-12933370":()=>__vitePreload(()=>import("./SpringBoot_MybatisPlus_ClickHouse轻松实现增删改查.html-b57f7103.js"),[]).then(({data:b})=>b),"v-01f872e7":()=>__vitePreload(()=>import("./SpringBoot_Netty_WebSocket实现消息推送.html-468540c9.js"),[]).then(({data:b})=>b),"v-47bb6d4c":()=>__vitePreload(()=>import("./SpringBoot_SpringSecurity前后端分离_Jwt的权限认证.html-f56de85b.js"),[]).then(({data:b})=>b),"v-2fc561e0":()=>__vitePreload(()=>import("./SpringBoot_WebSocket实时监控异常.html-99601640.js"),[]).then(({data:b})=>b),"v-29cea7e7":()=>__vitePreload(()=>import("./SpringBoot.html-16397a66.js"),[]).then(({data:b})=>b),"v-00a018bf":()=>__vitePreload(()=>import("./SpringBoot中Rest的使用和请求参数注解.html-ee8d0530.js"),[]).then(({data:b})=>b),"v-031a6e0b":()=>__vitePreload(()=>import("./SpringBoot中如何优雅的使用多线程.html-4f776bc1.js"),[]).then(({data:b})=>b),"v-7f0ca952":()=>__vitePreload(()=>import("./SpringBoot中如何解决CORS跨域问题.html-1b8a9db7.js"),[]).then(({data:b})=>b),"v-7277d541":()=>__vitePreload(()=>import("./SpringBoot内置工具类.html-5b8d39db.js"),[]).then(({data:b})=>b),"v-56224f88":()=>__vitePreload(()=>import("./SpringBoot利用ThreadPoolTaskExecutor批量插入.html-40c9c1a1.js"),[]).then(({data:b})=>b),"v-0246c81b":()=>__vitePreload(()=>import("./SpringBoot启动banner.html-a48a25fe.js"),[]).then(({data:b})=>b),"v-37dcfe5d":()=>__vitePreload(()=>import("./SpringBoot定时任务动态管理.html-2c0afefa.js"),[]).then(({data:b})=>b),"v-3966872e":()=>__vitePreload(()=>import("./SpringBoot定时任务动态管理通用解决方案.html-2a8bfb4a.js"),[]).then(({data:b})=>b),"v-fcf9a784":()=>__vitePreload(()=>import("./SpringBoot并行任务.html-0190c745.js"),[]).then(({data:b})=>b),"v-405fe66c":()=>__vitePreload(()=>import("./SpringBoot引入线程池_Queue缓冲队列实现高并发下单业务.html-114e6367.js"),[]).then(({data:b})=>b),"v-3db67a40":()=>__vitePreload(()=>import("./SpringBoot接口数据加解密实战.html-ba2293fa.js"),[]).then(({data:b})=>b),"v-3eec26d3":()=>__vitePreload(()=>import("./SpringBoot整合Mybatis-plus及用法.html-8236ae39.js"),[]).then(({data:b})=>b),"v-bb952da6":()=>__vitePreload(()=>import("./SpringBoot整合Mybatis-plus及用法2.html-0f427886.js"),[]).then(({data:b})=>b),"v-27bd9296":()=>__vitePreload(()=>import("./SpringBoot整合Socket实战案例.html-32714aa4.js"),[]).then(({data:b})=>b),"v-44a13a86":()=>__vitePreload(()=>import("./SpringBoot整合流程引擎Flowable.html-ae0f055e.js"),[]).then(({data:b})=>b),"v-5a4b6345":()=>__vitePreload(()=>import("./SpringBoot超大文件上传.html-9ca14b78.js"),[]).then(({data:b})=>b),"v-311e62d0":()=>__vitePreload(()=>import("./SpringBoot集成Flowable做工作流.html-bd0a4ad1.js"),[]).then(({data:b})=>b),"v-507bed41":()=>__vitePreload(()=>import("./SpringBoot项目鉴权的 4 种方式.html-95ff0e2f.js"),[]).then(({data:b})=>b),"v-c5cd3edc":()=>__vitePreload(()=>import("./SpringCloudAlibaba.html-8c26475f.js"),[]).then(({data:b})=>b),"v-3709255a":()=>__vitePreload(()=>import("./SpringCloudGateway_Oauth2实现统一认证和鉴权.html-8e8f084d.js"),[]).then(({data:b})=>b),"v-3febf42d":()=>__vitePreload(()=>import("./SpringCloudGatewayAPI接口安全设计(加密签名).html-fd69dcaa.js"),[]).then(({data:b})=>b),"v-599ab9b3":()=>__vitePreload(()=>import("./SpringCloud优雅下线以及灰度发布.html-bec999ac.js"),[]).then(({data:b})=>b),"v-32690d91":()=>__vitePreload(()=>import("./Springboot利用ThreadPoolTaskExecutor多线程批量插入百万级数据.html-63cfd34e.js"),[]).then(({data:b})=>b),"v-1b6b1cfa":()=>__vitePreload(()=>import("./VUE下拉列表动态切换.html-f9610834.js"),[]).then(({data:b})=>b),"v-653e1c1d":()=>__vitePreload(()=>import("./Vue子组件与父组件传值.html-65ebbd6e.js"),[]).then(({data:b})=>b),"v-d985b94c":()=>__vitePreload(()=>import("./Vue开发报错问题解决.html-3a10e581.js"),[]).then(({data:b})=>b),"v-535669d3":()=>__vitePreload(()=>import("./fastjson中JSONObject的常用使用方法.html-af20b861.js"),[]).then(({data:b})=>b),"v-c7a6fd84":()=>__vitePreload(()=>import("./idea-tips.html-53c0f903.js"),[]).then(({data:b})=>b),"v-468de280":()=>__vitePreload(()=>import("./jreble安装及破解方法.html-901a7c4f.js"),[]).then(({data:b})=>b),"v-764b221e":()=>__vitePreload(()=>import("./logback自定义日志脱敏组件.html-388ca138.js"),[]).then(({data:b})=>b),"v-d7add974":()=>__vitePreload(()=>import("./mybatis 建表、删表、查表语句(mysql数据库).html-6a57b2c3.js"),[]).then(({data:b})=>b),"v-224cf13a":()=>__vitePreload(()=>import("./openssl一键自签证书.html-80190373.js"),[]).then(({data:b})=>b),"v-082b14e8":()=>__vitePreload(()=>import("./springboot人脸识别登录.html-1c4e779e.js"),[]).then(({data:b})=>b),"v-6963d030":()=>__vitePreload(()=>import("./springboot打包不同环境配置与shell脚本部署.html-4abd68d7.js"),[]).then(({data:b})=>b),"v-47449e3c":()=>__vitePreload(()=>import("./spring线程池多线程并发处理大批量数据.html-913523ba.js"),[]).then(({data:b})=>b),"v-0fc88264":()=>__vitePreload(()=>import("./sql语句优化的30种方法.html-17d0977c.js"),[]).then(({data:b})=>b),"v-c87b41c4":()=>__vitePreload(()=>import("./使用docker快速安装oracle.html-d02ad1f5.js"),[]).then(({data:b})=>b),"v-29c5c590":()=>__vitePreload(()=>import("./使用easypoi导出excel实现动态列.html-b6030157.js"),[]).then(({data:b})=>b),"v-7b4b9dc7":()=>__vitePreload(()=>import("./六十多个vscode 插件.html-4abe3305.js"),[]).then(({data:b})=>b),"v-4fe861a4":()=>__vitePreload(()=>import("./分布式JVM监控工具.html-45a77113.js"),[]).then(({data:b})=>b),"v-4cb9b16c":()=>__vitePreload(()=>import("./如何读取resources目录下的文件路径（九种方式）.html-ae6bf967.js"),[]).then(({data:b})=>b),"v-43545b33":()=>__vitePreload(()=>import("./实用前端网站工具.html-912d4673.js"),[]).then(({data:b})=>b),"v-15dca1e6":()=>__vitePreload(()=>import("./将Bean放入Spring容器中的7种方式.html-ad5ae2ae.js"),[]).then(({data:b})=>b),"v-1936c0d5":()=>__vitePreload(()=>import("./微服务_消息队列.html-a3fc646f.js"),[]).then(({data:b})=>b),"v-343c7385":()=>__vitePreload(()=>import("./微服务架构统一安全认证设计与实践.html-74f74067.js"),[]).then(({data:b})=>b),"v-19da668e":()=>__vitePreload(()=>import("./报错异常解决.html-4b53cc5d.js"),[]).then(({data:b})=>b),"v-685b81d4":()=>__vitePreload(()=>import("./搞定SpringBoot接口恶意刷新和暴力请求.html-751a950d.js"),[]).then(({data:b})=>b),"v-3ecba07f":()=>__vitePreload(()=>import("./改造BeanUtils优雅实现List数据拷贝.html-e88acdb4.js"),[]).then(({data:b})=>b),"v-dfd677c2":()=>__vitePreload(()=>import("./数据库表结构文档生成工具.html-348162ff.js"),[]).then(({data:b})=>b),"v-9d1ecdb0":()=>__vitePreload(()=>import("./数据类型Java类型.html-34de8562.js"),[]).then(({data:b})=>b),"v-12aac2e1":()=>__vitePreload(()=>import("./本地缓存Caffeine.html-073af275.js"),[]).then(({data:b})=>b),"v-13c64a8d":()=>__vitePreload(()=>import("./架构师图谱·微服务_消息队列篇.html-c3e3244c.js"),[]).then(({data:b})=>b),"v-48a9c507":()=>__vitePreload(()=>import("./树的定义、树的存储结构.html-8f4faf8d.js"),[]).then(({data:b})=>b),"v-e114d1d2":()=>__vitePreload(()=>import("./腾讯云后端总结的面试15问.html-a471e3c8.js"),[]).then(({data:b})=>b),"v-6926cfaa":()=>__vitePreload(()=>import("./通过Nginx来实现禁止国外IP访问网站.html-1fc8c486.js"),[]).then(({data:b})=>b),"v-b10ed23e":()=>__vitePreload(()=>import("./通过注解实现接口返回数据脱敏.html-cb4a380e.js"),[]).then(({data:b})=>b),"v-39786273":()=>__vitePreload(()=>import("./金额计算BigDecimal及踩坑.html-e6e1bd01.js"),[]).then(({data:b})=>b),"v-77611f2a":()=>__vitePreload(()=>import("./How-To-Ask-Questions.html-ff0bf074.js"),[]).then(({data:b})=>b),"v-7c80db8b":()=>__vitePreload(()=>import("./index.html-5e9e1085.js"),[]).then(({data:b})=>b),"v-386477da":()=>__vitePreload(()=>import("./人生三境界.html-019271e5.js"),[]).then(({data:b})=>b),"v-6192c6ac":()=>__vitePreload(()=>import("./人生最好的三种状态.html-461728e5.js"),[]).then(({data:b})=>b),"v-1e8d39be":()=>__vitePreload(()=>import("./以你之名，书我一生.html-75c8174b.js"),[]).then(({data:b})=>b),"v-58121615":()=>__vitePreload(()=>import("./早安心语220519.html-2a44aebb.js"),[]).then(({data:b})=>b),"v-ead2f860":()=>__vitePreload(()=>import("./鲁迅名言.html-acadba65.js"),[]).then(({data:b})=>b),"v-a3e2d4e4":()=>__vitePreload(()=>import("./index.html-f2396089.js"),[]).then(({data:b})=>b),"v-20f0fd66":()=>__vitePreload(()=>import("./互联网金融行业名词笔记.html-a31f2934.js"),[]).then(({data:b})=>b),"v-37125490":()=>__vitePreload(()=>import("./GitHub-Auto-Commit.html-bc9e9627.js"),[]).then(({data:b})=>b),"v-c9250e40":()=>__vitePreload(()=>import("./Git、GitHub、Gitee.html-09dc3125.js"),[]).then(({data:b})=>b),"v-74473916":()=>__vitePreload(()=>import("./index.html-e67520ad.js"),[]).then(({data:b})=>b),"v-1adba576":()=>__vitePreload(()=>import("./git_emoji.html-ebff3029.js"),[]).then(({data:b})=>b),"v-78493303":()=>__vitePreload(()=>import("./CNS服务器搭建教程.html-bb398471.js"),[]).then(({data:b})=>b),"v-490af90f":()=>__vitePreload(()=>import("./Centos7Minimal.html-de3d2a07.js"),[]).then(({data:b})=>b),"v-19781156":()=>__vitePreload(()=>import("./Docker安装Oracle.html-32e2b4ba.js"),[]).then(({data:b})=>b),"v-171c1b4c":()=>__vitePreload(()=>import("./ESXI_iKuai_OpenWrt.html-0f710421.js"),[]).then(({data:b})=>b),"v-2767e582":()=>__vitePreload(()=>import("./Euserv.html-8f457882.js"),[]).then(({data:b})=>b),"v-473b8da1":()=>__vitePreload(()=>import("./Linux发送tcp包最简单方法-netcat.html-7794dfc0.js"),[]).then(({data:b})=>b),"v-134ccd82":()=>__vitePreload(()=>import("./Linux图形化管理服务器的神器Cockpit.html-e24bab78.js"),[]).then(({data:b})=>b),"v-0e642874":()=>__vitePreload(()=>import("./Linux总结.html-2d98b21b.js"),[]).then(({data:b})=>b),"v-1e23d93c":()=>__vitePreload(()=>import("./Linux新开机器配置.html-a4cf85d9.js"),[]).then(({data:b})=>b),"v-172206f6":()=>__vitePreload(()=>import("./Linux脚本工具.html-91150be4.js"),[]).then(({data:b})=>b),"v-9e274aaa":()=>__vitePreload(()=>import("./MySQL.html-0dcbacb0.js"),[]).then(({data:b})=>b),"v-cfcc0faa":()=>__vitePreload(()=>import("./MySQL压缩版安装配置.html-8ccddab6.js"),[]).then(({data:b})=>b),"v-7aba7e62":()=>__vitePreload(()=>import("./Nginx一网打尽.html-1725c428.js"),[]).then(({data:b})=>b),"v-a5195ce6":()=>__vitePreload(()=>import("./Nginx万字总结.html-104b8d97.js"),[]).then(({data:b})=>b),"v-4f7b7c72":()=>__vitePreload(()=>import("./Nginx从安装到高可用.html-1de6b0ee.js"),[]).then(({data:b})=>b),"v-18d19b29":()=>__vitePreload(()=>import("./Nginx安装Web应用防火墙.html-6e253777.js"),[]).then(({data:b})=>b),"v-55994567":()=>__vitePreload(()=>import("./NodeJS-Maven-Mysql.html-81cc0b11.js"),[]).then(({data:b})=>b),"v-275077d9":()=>__vitePreload(()=>import("./OpenSSL生成自签名证书.html-a1ecf0dd.js"),[]).then(({data:b})=>b),"v-0bb9c789":()=>__vitePreload(()=>import("./Oracle数据库基础.html-0a80895d.js"),[]).then(({data:b})=>b),"v-7624e067":()=>__vitePreload(()=>import("./Oracle的数据导入与导出-数据库.html-334e361b.js"),[]).then(({data:b})=>b),"v-78d65395":()=>__vitePreload(()=>import("./Podman开源的容器.html-217b46fc.js"),[]).then(({data:b})=>b),"v-f0383c18":()=>__vitePreload(()=>import("./index.html-7f470d8a.js"),[]).then(({data:b})=>b),"v-1db2e12e":()=>__vitePreload(()=>import("./SSH客户端软件.html-8e389823.js"),[]).then(({data:b})=>b),"v-0b5dadd6":()=>__vitePreload(()=>import("./VMware-Esxi.html-ff0d639e.js"),[]).then(({data:b})=>b),"v-0a582b41":()=>__vitePreload(()=>import("./Windows子系统WSL.html-23fc397a.js"),[]).then(({data:b})=>b),"v-5699db53":()=>__vitePreload(()=>import("./bt.html-f8703aad.js"),[]).then(({data:b})=>b),"v-30e7d74e":()=>__vitePreload(()=>import("./exsi_黑群晖_爱快_openwrt.html-c2e302a9.js"),[]).then(({data:b})=>b),"v-be175c8a":()=>__vitePreload(()=>import("./openssl一键自签证书.html-d1209d74.js"),[]).then(({data:b})=>b),"v-31af7fac":()=>__vitePreload(()=>import("./python安装源.html-1664a539.js"),[]).then(({data:b})=>b),"v-73be5696":()=>__vitePreload(()=>import("./tmpfiles.d中文手册.html-ebc87249.js"),[]).then(({data:b})=>b),"v-b1b88c62":()=>__vitePreload(()=>import("./不支持虚拟化的AMD-V.html-fd647d81.js"),[]).then(({data:b})=>b),"v-4613513a":()=>__vitePreload(()=>import("./实用 shell 脚本.html-5c7d510f.js"),[]).then(({data:b})=>b),"v-093969da":()=>__vitePreload(()=>import("./搭建基于DockerDesktop_WSL2.html-e7973ddc.js"),[]).then(({data:b})=>b),"v-8ebbf29c":()=>__vitePreload(()=>import("./服务器入侵排查.html-0b1a611f.js"),[]).then(({data:b})=>b),"v-9757ae78":()=>__vitePreload(()=>import("./服务器运行数据查看工具.html-9def2909.js"),[]).then(({data:b})=>b),"v-6d744f6f":()=>__vitePreload(()=>import("./自动封禁IP脚本.html-8ce655c7.js"),[]).then(({data:b})=>b),"v-49d04651":()=>__vitePreload(()=>import("./详解K8S高可用部署.html-54fa7682.js"),[]).then(({data:b})=>b),"v-fbb8e312":()=>__vitePreload(()=>import("./API.html-a8b2c9c0.js"),[]).then(({data:b})=>b),"v-502807be":()=>__vitePreload(()=>import("./Backblaze(B2)套用CloudFlare静态文件存储.html-9063be1c.js"),[]).then(({data:b})=>b),"v-0a11e84c":()=>__vitePreload(()=>import("./Bing必应API.html-47ae3b94.js"),[]).then(({data:b})=>b),"v-810a1d4a":()=>__vitePreload(()=>import("./Euserv.html-84276b78.js"),[]).then(({data:b})=>b),"v-90df2e26":()=>__vitePreload(()=>import("./Github技巧.html-c84137f9.js"),[]).then(({data:b})=>b),"v-4eb59d06":()=>__vitePreload(()=>import("./Microsoft-365-E5-RenewPlus.html-d55d3949.js"),[]).then(({data:b})=>b),"v-af64a3ba":()=>__vitePreload(()=>import("./Microsoft-365-E5-RenewX.html-2a0bb2fd.js"),[]).then(({data:b})=>b),"v-88d120d6":()=>__vitePreload(()=>import("./OfficeE5.html-0448f363.js"),[]).then(({data:b})=>b),"v-dde823e8":()=>__vitePreload(()=>import("./QQ动态群聊昵称代码.html-506d6201.js"),[]).then(({data:b})=>b),"v-e4cb1150":()=>__vitePreload(()=>import("./index.html-e71ed483.js"),[]).then(({data:b})=>b),"v-536b5b25":()=>__vitePreload(()=>import("./Steam免费解锁.html-804e5eae.js"),[]).then(({data:b})=>b),"v-bb478dba":()=>__vitePreload(()=>import("./clash-v2ray.html-6bb7911e.js"),[]).then(({data:b})=>b),"v-7b0cd90e":()=>__vitePreload(()=>import("./generate_204服务汇总.html-41196f21.js"),[]).then(({data:b})=>b),"v-013c1e81":()=>__vitePreload(()=>import("./临时邮箱和接码.html-23cca34c.js"),[]).then(({data:b})=>b),"v-d2113bde":()=>__vitePreload(()=>import("./免费VPS.html-aa1a4b0d.js"),[]).then(({data:b})=>b),"v-7378bc31":()=>__vitePreload(()=>import("./免费加速器.html-a9cae1a3.js"),[]).then(({data:b})=>b),"v-23a88807":()=>__vitePreload(()=>import("./免费图库.html-b757bb00.js"),[]).then(({data:b})=>b),"v-30728471":()=>__vitePreload(()=>import("./免费图标.html-4e8c0b97.js"),[]).then(({data:b})=>b),"v-47672dec":()=>__vitePreload(()=>import("./免费工具集锦.html-af35971b.js"),[]).then(({data:b})=>b),"v-58188c0c":()=>__vitePreload(()=>import("./免费插图.html-150df965.js"),[]).then(({data:b})=>b),"v-39c15e36":()=>__vitePreload(()=>import("./免费资源集锦.html-82cdfb2f.js"),[]).then(({data:b})=>b),"v-ebcc9b7c":()=>__vitePreload(()=>import("./免费随机图片api.html-ae058fea.js"),[]).then(({data:b})=>b),"v-22afdd50":()=>__vitePreload(()=>import("./图片防盗链的破解和反破解.html-af11f710.js"),[]).then(({data:b})=>b),"v-689ccac3":()=>__vitePreload(()=>import("./影视.html-45898fd4.js"),[]).then(({data:b})=>b),"v-28113e1c":()=>__vitePreload(()=>import("./新版QQ修改彩色颜色字体代码教程.html-c3a75ba6.js"),[]).then(({data:b})=>b),"v-7a7f0bea":()=>__vitePreload(()=>import("./浏览器UA.html-1d81a917.js"),[]).then(({data:b})=>b),"v-9ec589ba":()=>__vitePreload(()=>import("./漏洞监控平台Monitor.html-89a5b571.js"),[]).then(({data:b})=>b),"v-640b9c86":()=>__vitePreload(()=>import("./猫影视.html-fbeaa288.js"),[]).then(({data:b})=>b),"v-fce35ce0":()=>__vitePreload(()=>import("./电子书网站.html-0c7c5639.js"),[]).then(({data:b})=>b),"v-2b70e4f9":()=>__vitePreload(()=>import("./电视工具箱.html-3d685f66.js"),[]).then(({data:b})=>b),"v-f9cb582c":()=>__vitePreload(()=>import("./白嫖机场.html-cebd698c.js"),[]).then(({data:b})=>b),"v-7af25863":()=>__vitePreload(()=>import("./直播源.html-aed193f8.js"),[]).then(({data:b})=>b),"v-7c4c95c4":()=>__vitePreload(()=>import("./程序员常逛的网站.html-cfc05083.js"),[]).then(({data:b})=>b),"v-5789ff2c":()=>__vitePreload(()=>import("./网址.html-5b968358.js"),[]).then(({data:b})=>b),"v-6ec2f8d0":()=>__vitePreload(()=>import("./网站文献下载.html-bca25ea5.js"),[]).then(({data:b})=>b),"v-91b437be":()=>__vitePreload(()=>import("./美团年货电子书.html-6a74a6f3.js"),[]).then(({data:b})=>b),"v-61f2a5b0":()=>__vitePreload(()=>import("./蓝奏云安卓APP合集.html-13b16a7c.js"),[]).then(({data:b})=>b),"v-c8e1ae3a":()=>__vitePreload(()=>import("./谷歌Gmail注册显示此号码不能验证的解决办法.html-9cd22ee9.js"),[]).then(({data:b})=>b),"v-a99c571c":()=>__vitePreload(()=>import("./高清视频解析接口.html-7b7f2e49.js"),[]).then(({data:b})=>b),"v-53d002db":()=>__vitePreload(()=>import("./9个很酷的CMD命令.html-96013105.js"),[]).then(({data:b})=>b),"v-2d0aaf03":()=>__vitePreload(()=>import("./index.html-0e4d8450.js"),[]).then(({data:b})=>b),"v-04ef0ac5":()=>__vitePreload(()=>import("./StartAllBack(StartIsBack)v3.2.1Stable.html-b2effc36.js"),[]).then(({data:b})=>b),"v-6d8a905c":()=>__vitePreload(()=>import("./Windows10使用优化方案.html-6c92e124.js"),[]).then(({data:b})=>b),"v-1ec0c498":()=>__vitePreload(()=>import("./win10-11皆可干货分享.html-68f684a1.js"),[]).then(({data:b})=>b),"v-003bf188":()=>__vitePreload(()=>import("./win10快捷键.html-11a5a9c4.js"),[]).then(({data:b})=>b),"v-31351e7d":()=>__vitePreload(()=>import("./删除 windows 服务.html-a68e5981.js"),[]).then(({data:b})=>b),"v-36cf8589":()=>__vitePreload(()=>import("./安装WSA-激活GPU-双击安装APK.html-4d152d5c.js"),[]).then(({data:b})=>b),"v-ef9ffcba":()=>__vitePreload(()=>import("./新版本Edge提示由你的组织管理.html-9b87c7f0.js"),[]).then(({data:b})=>b),"v-02df1f96":()=>__vitePreload(()=>import("./激活码.html-4485892f.js"),[]).then(({data:b})=>b),"v-249a6012":()=>__vitePreload(()=>import("./解决浏览器跨域问题.html-59227e17.js"),[]).then(({data:b})=>b),"v-440dee74":()=>__vitePreload(()=>import("./Alist常用样式代码.html-8d01546c.js"),[]).then(({data:b})=>b),"v-464c88aa":()=>__vitePreload(()=>import("./index.html-a39e8ce1.js"),[]).then(({data:b})=>b),"v-6d51fcc4":()=>__vitePreload(()=>import("./repository.html-086eb9c6.js"),[]).then(({data:b})=>b),"v-15b1d789":()=>__vitePreload(()=>import("./使用CloudFlareWorkers反代网站.html-b1abb4d8.js"),[]).then(({data:b})=>b),"v-4155ce3c":()=>__vitePreload(()=>import("./脚本仓库.html-c9211157.js"),[]).then(({data:b})=>b),"v-f3213f92":()=>__vitePreload(()=>import("./index.html-431dd27f.js"),[]).then(({data:b})=>b),"v-6e25be61":()=>__vitePreload(()=>import("./admin.html-a7d9645b.js"),[]).then(({data:b})=>b),"v-ff088e9c":()=>__vitePreload(()=>import("./国内常用静态资源CDN公共库.html-96258c57.js"),[]).then(({data:b})=>b),"v-1a7ea05d":()=>__vitePreload(()=>import("./开源后台管理系统.html-b09a8f6b.js"),[]).then(({data:b})=>b),"v-d7188082":()=>__vitePreload(()=>import("./index.html-de3f9477.js"),[]).then(({data:b})=>b),"v-d2576f5c":()=>__vitePreload(()=>import("./form表单系统.html-98696aa2.js"),[]).then(({data:b})=>b),"v-1bf8f71d":()=>__vitePreload(()=>import("./vuepress.html-2fadd4ed.js"),[]).then(({data:b})=>b),"v-7f4f380c":()=>__vitePreload(()=>import("./API.html-c7372737.js"),[]).then(({data:b})=>b),"v-d440f426":()=>__vitePreload(()=>import("./index.html-c643100e.js"),[]).then(({data:b})=>b),"v-3cf546d5":()=>__vitePreload(()=>import("./SSH客户端软件.html-08e2abcc.js"),[]).then(({data:b})=>b),"v-6726240a":()=>__vitePreload(()=>import("./develop-tools.html-f6e71742.js"),[]).then(({data:b})=>b),"v-5239b90e":()=>__vitePreload(()=>import("./lenovo.html-8ccc3f77.js"),[]).then(({data:b})=>b),"v-f4cfda76":()=>__vitePreload(()=>import("./software.html-074fc9a6.js"),[]).then(({data:b})=>b),"v-0289e456":()=>__vitePreload(()=>import("./免费思维导图.html-88598430.js"),[]).then(({data:b})=>b),"v-51defb2f":()=>__vitePreload(()=>import("./在线万能查询和在线工具.html-517aead8.js"),[]).then(({data:b})=>b),"v-3d92dd5a":()=>__vitePreload(()=>import("./截图工具.html-0cd1961d.js"),[]).then(({data:b})=>b),"v-f0217ea8":()=>__vitePreload(()=>import("./短视频解析.html-179a9cae.js"),[]).then(({data:b})=>b),"v-42d58db0":()=>__vitePreload(()=>import("./阿里十大最受开发者欢迎的工具.html-eae11864.js"),[]).then(({data:b})=>b),"v-4377e9a2":()=>__vitePreload(()=>import("./index.html-94335dc3.js"),[]).then(({data:b})=>b),"v-0dba7fcb":()=>__vitePreload(()=>import("./index.html-16d9162a.js"),[]).then(({data:b})=>b),"v-45410d4b":()=>__vitePreload(()=>import("./01_初识TS.html-562f01e4.js"),[]).then(({data:b})=>b),"v-0271c50c":()=>__vitePreload(()=>import("./02_安装TS.html-46624e72.js"),[]).then(({data:b})=>b),"v-7efb1c5d":()=>__vitePreload(()=>import("./03_HelloWorld.html-a96250ff.js"),[]).then(({data:b})=>b),"v-25507322":()=>__vitePreload(()=>import("./04_webpack打包.html-eaac6ab1.js"),[]).then(({data:b})=>b),"v-43bfb7c0":()=>__vitePreload(()=>import("./index.html-d060810f.js"),[]).then(({data:b})=>b),"v-331b4e12":()=>__vitePreload(()=>import("./1_type.html-ffd31c4a.js"),[]).then(({data:b})=>b),"v-948fe668":()=>__vitePreload(()=>import("./2_interface.html-216b412f.js"),[]).then(({data:b})=>b),"v-7f762968":()=>__vitePreload(()=>import("./3_class.html-7422a5d3.js"),[]).then(({data:b})=>b),"v-339b8977":()=>__vitePreload(()=>import("./4_function.html-e388a4f2.js"),[]).then(({data:b})=>b),"v-c8821a6a":()=>__vitePreload(()=>import("./5_generic.html-c705d01d.js"),[]).then(({data:b})=>b),"v-446a765e":()=>__vitePreload(()=>import("./6_other.html-95f03b84.js"),[]).then(({data:b})=>b),"v-43bfb7df":()=>__vitePreload(()=>import("./index.html-957b6489.js"),[]).then(({data:b})=>b),"v-5cafefc2":()=>__vitePreload(()=>import("./01_认识Vue3.html-650b1afd.js"),[]).then(({data:b})=>b),"v-b51510f6":()=>__vitePreload(()=>import("./02_创建vue3项目.html-cd895ea7.js"),[]).then(({data:b})=>b),"v-43bfb7fe":()=>__vitePreload(()=>import("./index.html-650ef2da.js"),[]).then(({data:b})=>b),"v-5dc35644":()=>__vitePreload(()=>import("./01_Composition API_常用部分.html-f9ffeb3e.js"),[]).then(({data:b})=>b),"v-306f125d":()=>__vitePreload(()=>import("./02_Composition API_其它部分.html-ca3fba1d.js"),[]).then(({data:b})=>b),"v-16e4cf3e":()=>__vitePreload(()=>import("./03_手写组合API.html-af884df4.js"),[]).then(({data:b})=>b),"v-5cc4fad5":()=>__vitePreload(()=>import("./04_Composition VS Option.html-ced65e45.js"),[]).then(({data:b})=>b),"v-43bfb81d":()=>__vitePreload(()=>import("./index.html-e23cfcee.js"),[]).then(({data:b})=>b),"v-645cb53f":()=>__vitePreload(()=>import("./01_新组件.html-2525d126.js"),[]).then(({data:b})=>b),"v-69e81a00":()=>__vitePreload(()=>import("./02_其他新API.html-e44fd48a.js"),[]).then(({data:b})=>b),"v-43bfb83c":()=>__vitePreload(()=>import("./index.html-ca2346a6.js"),[]).then(({data:b})=>b),"v-3706649a":()=>__vitePreload(()=>import("./404.html-98b94ffc.js"),[]).then(({data:b})=>b),"v-5bc93818":()=>__vitePreload(()=>import("./index.html-a803072e.js"),[]).then(({data:b})=>b),"v-744d024e":()=>__vitePreload(()=>import("./index.html-6d46ab2b.js"),[]).then(({data:b})=>b),"v-e52c881c":()=>__vitePreload(()=>import("./index.html-bf96c093.js"),[]).then(({data:b})=>b),"v-154dc4c4":()=>__vitePreload(()=>import("./index.html-7146c5a0.js"),[]).then(({data:b})=>b),"v-01560935":()=>__vitePreload(()=>import("./index.html-61811b05.js"),[]).then(({data:b})=>b),"v-dc8c5890":()=>__vitePreload(()=>import("./index.html-3bfe35d8.js"),[]).then(({data:b})=>b),"v-00725b24":()=>__vitePreload(()=>import("./index.html-1b213caf.js"),[]).then(({data:b})=>b),"v-b87ca964":()=>__vitePreload(()=>import("./index.html-297c1b8a.js"),[]).then(({data:b})=>b),"v-5d93e6df":()=>__vitePreload(()=>import("./index.html-43c4e892.js"),[]).then(({data:b})=>b),"v-5831b135":()=>__vitePreload(()=>import("./index.html-b5bd34a3.js"),[]).then(({data:b})=>b),"v-20e912c0":()=>__vitePreload(()=>import("./index.html-60f3ec52.js"),[]).then(({data:b})=>b),"v-90dbad92":()=>__vitePreload(()=>import("./index.html-f7f018a6.js"),[]).then(({data:b})=>b),"v-7017fa8c":()=>__vitePreload(()=>import("./index.html-3efeb3b1.js"),[]).then(({data:b})=>b),"v-78cbe7bb":()=>__vitePreload(()=>import("./index.html-0f7d0407.js"),[]).then(({data:b})=>b),"v-2687e471":()=>__vitePreload(()=>import("./index.html-e0830559.js"),[]).then(({data:b})=>b),"v-5824b700":()=>__vitePreload(()=>import("./index.html-1eef045a.js"),[]).then(({data:b})=>b),"v-1754261e":()=>__vitePreload(()=>import("./index.html-c3de51c1.js"),[]).then(({data:b})=>b),"v-282f03f4":()=>__vitePreload(()=>import("./index.html-f22709da.js"),[]).then(({data:b})=>b),"v-b30ee52c":()=>__vitePreload(()=>import("./index.html-9f1bb602.js"),[]).then(({data:b})=>b),"v-3d5315f8":()=>__vitePreload(()=>import("./index.html-dd8cc319.js"),[]).then(({data:b})=>b),"v-38e14bad":()=>__vitePreload(()=>import("./index.html-082b85c9.js"),[]).then(({data:b})=>b),"v-28a1d8bf":()=>__vitePreload(()=>import("./index.html-47c09d76.js"),[]).then(({data:b})=>b),"v-fd3344d8":()=>__vitePreload(()=>import("./index.html-fe9cb1ec.js"),[]).then(({data:b})=>b),"v-b3126996":()=>__vitePreload(()=>import("./index.html-eb193a88.js"),[]).then(({data:b})=>b),"v-65efd6b5":()=>__vitePreload(()=>import("./index.html-982ff86d.js"),[]).then(({data:b})=>b),"v-3b951558":()=>__vitePreload(()=>import("./index.html-57bdfdc7.js"),[]).then(({data:b})=>b),"v-9c48d85a":()=>__vitePreload(()=>import("./index.html-3b9643ef.js"),[]).then(({data:b})=>b),"v-b30b9cbe":()=>__vitePreload(()=>import("./index.html-d699f969.js"),[]).then(({data:b})=>b),"v-2c049111":()=>__vitePreload(()=>import("./index.html-e98c1385.js"),[]).then(({data:b})=>b),"v-30e11687":()=>__vitePreload(()=>import("./index.html-c45266d2.js"),[]).then(({data:b})=>b),"v-6106c001":()=>__vitePreload(()=>import("./index.html-e77b8944.js"),[]).then(({data:b})=>b),"v-3d186184":()=>__vitePreload(()=>import("./index.html-55781f55.js"),[]).then(({data:b})=>b),"v-15b21a26":()=>__vitePreload(()=>import("./index.html-f442ad0d.js"),[]).then(({data:b})=>b),"v-1c4f74a8":()=>__vitePreload(()=>import("./index.html-ec5c81f7.js"),[]).then(({data:b})=>b),"v-245f5676":()=>__vitePreload(()=>import("./index.html-51d3be51.js"),[]).then(({data:b})=>b),"v-57d526ca":()=>__vitePreload(()=>import("./index.html-7e807b79.js"),[]).then(({data:b})=>b),"v-5616b529":()=>__vitePreload(()=>import("./index.html-4a5d1038.js"),[]).then(({data:b})=>b),"v-83291cc4":()=>__vitePreload(()=>import("./index.html-9596e19d.js"),[]).then(({data:b})=>b),"v-0da0d9fd":()=>__vitePreload(()=>import("./index.html-3469698f.js"),[]).then(({data:b})=>b),"v-80519068":()=>__vitePreload(()=>import("./index.html-87837d4a.js"),[]).then(({data:b})=>b),"v-59fa8282":()=>__vitePreload(()=>import("./index.html-241ea43c.js"),[]).then(({data:b})=>b),"v-91ad3226":()=>__vitePreload(()=>import("./index.html-f88d82d8.js"),[]).then(({data:b})=>b),"v-41e71c66":()=>__vitePreload(()=>import("./index.html-92ecc7d6.js"),[]).then(({data:b})=>b),"v-65f6d381":()=>__vitePreload(()=>import("./index.html-aad011b9.js"),[]).then(({data:b})=>b),"v-7d0ba9b4":()=>__vitePreload(()=>import("./index.html-eda1054f.js"),[]).then(({data:b})=>b),"v-2894de8a":()=>__vitePreload(()=>import("./index.html-960d2cdd.js"),[]).then(({data:b})=>b),"v-22fc0b23":()=>__vitePreload(()=>import("./index.html-b54bb635.js"),[]).then(({data:b})=>b),"v-0ae00356":()=>__vitePreload(()=>import("./index.html-474c1c21.js"),[]).then(({data:b})=>b),"v-13770b26":()=>__vitePreload(()=>import("./index.html-c2759466.js"),[]).then(({data:b})=>b),"v-43c5a647":()=>__vitePreload(()=>import("./index.html-548b54e0.js"),[]).then(({data:b})=>b),"v-37e551c0":()=>__vitePreload(()=>import("./index.html-a9830a1f.js"),[]).then(({data:b})=>b),"v-646a7fe3":()=>__vitePreload(()=>import("./index.html-6762d100.js"),[]).then(({data:b})=>b),"v-132a6ac4":()=>__vitePreload(()=>import("./index.html-4c4bc831.js"),[]).then(({data:b})=>b),"v-b310d42a":()=>__vitePreload(()=>import("./index.html-e76761d1.js"),[]).then(({data:b})=>b),"v-211f44ee":()=>__vitePreload(()=>import("./index.html-45c6b4b3.js"),[]).then(({data:b})=>b),"v-bdee03ca":()=>__vitePreload(()=>import("./index.html-f7908a15.js"),[]).then(({data:b})=>b),"v-721080b6":()=>__vitePreload(()=>import("./index.html-40d4d830.js"),[]).then(({data:b})=>b),"v-1e90405c":()=>__vitePreload(()=>import("./index.html-6eb40ddf.js"),[]).then(({data:b})=>b),"v-1bee38ca":()=>__vitePreload(()=>import("./index.html-c429580a.js"),[]).then(({data:b})=>b),"v-28639a62":()=>__vitePreload(()=>import("./index.html-3a05fa32.js"),[]).then(({data:b})=>b),"v-b301ff26":()=>__vitePreload(()=>import("./index.html-8420b3fb.js"),[]).then(({data:b})=>b),"v-51730494":()=>__vitePreload(()=>import("./index.html-e425a397.js"),[]).then(({data:b})=>b),"v-4a89825a":()=>__vitePreload(()=>import("./index.html-63a4abe7.js"),[]).then(({data:b})=>b),"v-6efec93b":()=>__vitePreload(()=>import("./index.html-ef3c3769.js"),[]).then(({data:b})=>b),"v-b304e574":()=>__vitePreload(()=>import("./index.html-28197d9d.js"),[]).then(({data:b})=>b),"v-2834a796":()=>__vitePreload(()=>import("./index.html-a382f98f.js"),[]).then(({data:b})=>b),"v-29610dbf":()=>__vitePreload(()=>import("./index.html-5fcb0c68.js"),[]).then(({data:b})=>b),"v-742fbe9b":()=>__vitePreload(()=>import("./index.html-99c7a685.js"),[]).then(({data:b})=>b),"v-b30ea152":()=>__vitePreload(()=>import("./index.html-0adad067.js"),[]).then(({data:b})=>b),"v-4a1dcd88":()=>__vitePreload(()=>import("./index.html-fe29f018.js"),[]).then(({data:b})=>b),"v-0da0b4b1":()=>__vitePreload(()=>import("./index.html-c10392aa.js"),[]).then(({data:b})=>b),"v-d08dfa36":()=>__vitePreload(()=>import("./index.html-57268a71.js"),[]).then(({data:b})=>b),"v-0da0e901":()=>__vitePreload(()=>import("./index.html-8584ec10.js"),[]).then(({data:b})=>b),"v-41ad7530":()=>__vitePreload(()=>import("./index.html-cd096fb8.js"),[]).then(({data:b})=>b),"v-263d024a":()=>__vitePreload(()=>import("./index.html-95a3b5cb.js"),[]).then(({data:b})=>b),"v-0060d308":()=>__vitePreload(()=>import("./index.html-fb75a218.js"),[]).then(({data:b})=>b),"v-0da0e38e":()=>__vitePreload(()=>import("./index.html-57bc91c5.js"),[]).then(({data:b})=>b),"v-66dcb2b6":()=>__vitePreload(()=>import("./index.html-8b570ddb.js"),[]).then(({data:b})=>b),"v-4659f144":()=>__vitePreload(()=>import("./index.html-80d2a1eb.js"),[]).then(({data:b})=>b),"v-28454e54":()=>__vitePreload(()=>import("./index.html-28a333d7.js"),[]).then(({data:b})=>b),"v-b3149e20":()=>__vitePreload(()=>import("./index.html-d60313f0.js"),[]).then(({data:b})=>b),"v-07ff8958":()=>__vitePreload(()=>import("./index.html-e074e6e9.js"),[]).then(({data:b})=>b),"v-0527fcfc":()=>__vitePreload(()=>import("./index.html-a9076d10.js"),[]).then(({data:b})=>b),"v-b31616ba":()=>__vitePreload(()=>import("./index.html-ea335d67.js"),[]).then(({data:b})=>b),"v-2c2dd3f7":()=>__vitePreload(()=>import("./index.html-cfe658e5.js"),[]).then(({data:b})=>b),"v-b302da92":()=>__vitePreload(()=>import("./index.html-837f60db.js"),[]).then(({data:b})=>b)},siteData$1=JSON.parse('{"base":"/","lang":"zh-CN","title":"StudyNote","description":"个人学习的笔记，记录学习过程遇到的问题，学到的知识，收集各种学习工具，各种技巧，各种使用教程。","head":[["meta",{"name":"robots","content":"all"}],["meta",{"name":"author","content":"xlc520"}],["meta",{"http-equiv":"Cache-Control","content":"no-cache, no-store, must-revalidate"}],["meta",{"http-equiv":"Pragma","content":"no-cache"}],["meta",{"http-equiv":"Expires","content":"0"}],["meta",{"name":"keywords","content":"Java,MySQL,Spring,Redis,MyBatis,SpringBoot,IDEA,JVM,Java基础,并发编程,虚拟机,数据库,笔记,教程,linux,Windows,shell"}],["meta",{"name":"description","content":"个人学习的笔记，记录学习过程遇到的问题，学到的知识，收集各种学习工具，各种技巧，各种使用教程。"}],["script",{},"\\n      var _hmt = _hmt || [];\\n      (function() {\\n        var hm = document.createElement(\\"script\\");\\n        hm.src = \\"https://hm.baidu.com/hm.js?94d325c8ef98034a16f401082b6295a0\\";\\n        var s = document.getElementsByTagName(\\"script\\")[0]; \\n        s.parentNode.insertBefore(hm, s);\\n      })();\\n      "],["script",{},"\\n      !function(p){\\"use strict\\";!function(t){var s=window,e=document,i=p,c=\\"\\".concat(\\"https:\\"===e.location.protocol?\\"https://\\":\\"http://\\",\\"sdk.51.la/js-sdk-pro.min.js\\"),n=e.createElement(\\"script\\"),r=e.getElementsByTagName(\\"script\\")[0];n.type=\\"text/javascript\\",n.setAttribute(\\"charset\\",\\"UTF-8\\"),n.async=!0,n.src=c,n.id=\\"LA_COLLECT\\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:\\"JiDO506kAypiF3n8\\",ck:\\"JiDO506kAypiF3n8\\",autoTrack:true,hashMode:true});\\n      "],["link",{"rel":"stylesheet","href":"//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css"}]],"locales":{}}'),pagesComponents={"v-8daa1a0e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b457557b.js"),["assets/index.html-b457557b.js","assets/framework-debd98b7.js"])),"v-70bc2959":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a1885845.js"),["assets/index.html-a1885845.js","assets/framework-debd98b7.js"])),"v-4ca9b1ff":defineAsyncComponent(()=>__vitePreload(()=>import("./七大排序.html-40dca3d5.js"),["assets/七大排序.html-40dca3d5.js","assets/framework-debd98b7.js"])),"v-6f38dab0":defineAsyncComponent(()=>__vitePreload(()=>import("./十大排序.html-25d7d934.js"),["assets/十大排序.html-25d7d934.js","assets/framework-debd98b7.js"])),"v-3f8bc7c2":defineAsyncComponent(()=>__vitePreload(()=>import("./快速排序.html-a507105a.js"),["assets/快速排序.html-a507105a.js","assets/framework-debd98b7.js"])),"v-1b333d5c":defineAsyncComponent(()=>__vitePreload(()=>import("./牛客网-华为机试.html-a1b8d2a3.js"),["assets/牛客网-华为机试.html-a1b8d2a3.js","assets/framework-debd98b7.js"])),"v-79c9f96f":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-7391c1a6.js"),["assets/index.html-7391c1a6.js","assets/framework-debd98b7.js"])),"v-f5ec58cc":defineAsyncComponent(()=>__vitePreload(()=>import("./Share强制激活高级版.html-32eccb07.js"),["assets/Share强制激活高级版.html-32eccb07.js","assets/framework-debd98b7.js"])),"v-61dcb9ca":defineAsyncComponent(()=>__vitePreload(()=>import("./Thanox墓碑情景模式.html-8a117109.js"),["assets/Thanox墓碑情景模式.html-8a117109.js","assets/framework-debd98b7.js"])),"v-a1d04c6c":defineAsyncComponent(()=>__vitePreload(()=>import("./Thanox情景模式.html-cb44b2a4.js"),["assets/Thanox情景模式.html-cb44b2a4.js","assets/framework-debd98b7.js"])),"v-5748b243":defineAsyncComponent(()=>__vitePreload(()=>import("./Xposed edge pro入门教程.html-51610a57.js"),["assets/Xposed edge pro入门教程.html-51610a57.js","assets/framework-debd98b7.js"])),"v-db62373e":defineAsyncComponent(()=>__vitePreload(()=>import("./Xposed-edge-pro Shell命令-打开微信好友聊天界面.html-5ff2d6c1.js"),["assets/Xposed-edge-pro Shell命令-打开微信好友聊天界面.html-5ff2d6c1.js","assets/framework-debd98b7.js"])),"v-53503e38":defineAsyncComponent(()=>__vitePreload(()=>import("./Xposed-edge-pro Shell命令.html-005bd3f4.js"),["assets/Xposed-edge-pro Shell命令.html-005bd3f4.js","assets/framework-debd98b7.js"])),"v-d5ecdaba":defineAsyncComponent(()=>__vitePreload(()=>import("./一个减少MIUI动画掉帧的方法.html-b911df83.js"),["assets/一个减少MIUI动画掉帧的方法.html-b911df83.js","assets/framework-debd98b7.js"])),"v-1df04f08":defineAsyncComponent(()=>__vitePreload(()=>import("./一百多影视VIP视频解析接口.html-a476da63.js"),["assets/一百多影视VIP视频解析接口.html-a476da63.js","assets/framework-debd98b7.js"])),"v-011c74f0":defineAsyncComponent(()=>__vitePreload(()=>import("./世界大学.html-66987e18.js"),["assets/世界大学.html-66987e18.js","assets/framework-debd98b7.js"])),"v-309be644":defineAsyncComponent(()=>__vitePreload(()=>import("./全球各大免费电子图书馆汇集.html-6e2b131e.js"),["assets/全球各大免费电子图书馆汇集.html-6e2b131e.js","assets/framework-debd98b7.js"])),"v-67b6f947":defineAsyncComponent(()=>__vitePreload(()=>import("./关闭微信广告.html-83dbc016.js"),["assets/关闭微信广告.html-83dbc016.js","assets/framework-debd98b7.js"])),"v-093e04ac":defineAsyncComponent(()=>__vitePreload(()=>import("./去除MIUI10秒的警告.html-6cba34fc.js"),["assets/去除MIUI10秒的警告.html-6cba34fc.js","assets/framework-debd98b7.js"])),"v-0fe915da":defineAsyncComponent(()=>__vitePreload(()=>import("./工程模式码(拨号键盘).html-373c636d.js"),["assets/工程模式码(拨号键盘).html-373c636d.js","assets/framework-debd98b7.js"])),"v-5e2533a8":defineAsyncComponent(()=>__vitePreload(()=>import("./广告拦截规则整理.html-6465afb1.js"),["assets/广告拦截规则整理.html-6465afb1.js","assets/framework-debd98b7.js"])),"v-4edf72d6":defineAsyncComponent(()=>__vitePreload(()=>import("./影视大全.html-cf0a6249.js"),["assets/影视大全.html-cf0a6249.js","assets/framework-debd98b7.js"])),"v-82076524":defineAsyncComponent(()=>__vitePreload(()=>import("./影视软件TV-APK.html-9f0a03f3.js"),["assets/影视软件TV-APK.html-9f0a03f3.js","assets/framework-debd98b7.js"])),"v-b1e58032":defineAsyncComponent(()=>__vitePreload(()=>import("./怎么从客观角度看待大学封校行为.html-b3e23736.js"),["assets/怎么从客观角度看待大学封校行为.html-b3e23736.js","assets/framework-debd98b7.js"])),"v-7cb79b7a":defineAsyncComponent(()=>__vitePreload(()=>import("./摩托罗拉X40X30S30Pro全机型解锁BL.html-2324ce20.js"),["assets/摩托罗拉X40X30S30Pro全机型解锁BL.html-2324ce20.js","assets/framework-debd98b7.js"])),"v-e4c5586a":defineAsyncComponent(()=>__vitePreload(()=>import("./短视频网页在线去水印下载.html-b7572286.js"),["assets/短视频网页在线去水印下载.html-b7572286.js","assets/framework-debd98b7.js"])),"v-841c3444":defineAsyncComponent(()=>__vitePreload(()=>import("./程序员延寿指南.html-2bae7d1d.js"),["assets/程序员延寿指南.html-2bae7d1d.js","assets/framework-debd98b7.js"])),"v-89f114ba":defineAsyncComponent(()=>__vitePreload(()=>import("./15000字的SQL语句大全.html-bca85387.js"),["assets/15000字的SQL语句大全.html-bca85387.js","assets/framework-debd98b7.js"])),"v-a3ffd1cc":defineAsyncComponent(()=>__vitePreload(()=>import("./18个Java8日期处理.html-05a2a502.js"),["assets/18个Java8日期处理.html-05a2a502.js","assets/framework-debd98b7.js"])),"v-0a46221e":defineAsyncComponent(()=>__vitePreload(()=>import("./24 个常见的Docker疑难杂症处理技巧.html-36647c83.js"),["assets/24 个常见的Docker疑难杂症处理技巧.html-36647c83.js","assets/framework-debd98b7.js"])),"v-0a8937cf":defineAsyncComponent(()=>__vitePreload(()=>import("./36张图梳理 Intellij IDEA常用设置.html-fd6cc0be.js"),["assets/36张图梳理 Intellij IDEA常用设置.html-fd6cc0be.js","assets/framework-debd98b7.js"])),"v-469f0e94":defineAsyncComponent(()=>__vitePreload(()=>import("./7000字_24张图_带你彻底弄懂线程池.html-40351489.js"),["assets/7000字_24张图_带你彻底弄懂线程池.html-40351489.js","assets/framework-debd98b7.js"])),"v-058e1247":defineAsyncComponent(()=>__vitePreload(()=>import("./DateTimeFormatter-替换SimpleDateFormat.html-0802a225.js"),["assets/DateTimeFormatter-替换SimpleDateFormat.html-0802a225.js","assets/framework-debd98b7.js"])),"v-6169e28b":defineAsyncComponent(()=>__vitePreload(()=>import("./Docker搭建ELK日志分析系统.html-c6e2ffe5.js"),["assets/Docker搭建ELK日志分析系统.html-c6e2ffe5.js","assets/framework-debd98b7.js"])),"v-13072166":defineAsyncComponent(()=>__vitePreload(()=>import("./ES6语法详解.html-16afb593.js"),["assets/ES6语法详解.html-16afb593.js","assets/framework-debd98b7.js"])),"v-29b89b89":defineAsyncComponent(()=>__vitePreload(()=>import("./Guava中Map的骚操作.html-4e835f63.js"),["assets/Guava中Map的骚操作.html-4e835f63.js","assets/framework-debd98b7.js"])),"v-12f7a1d2":defineAsyncComponent(()=>__vitePreload(()=>import("./IDEA206个快捷键-动图演示.html-fefa115b.js"),["assets/IDEA206个快捷键-动图演示.html-fefa115b.js","assets/framework-debd98b7.js"])),"v-271a8b48":defineAsyncComponent(()=>__vitePreload(()=>import("./IDEA中的各种调试代码技巧.html-8a670727.js"),["assets/IDEA中的各种调试代码技巧.html-8a670727.js","assets/framework-debd98b7.js"])),"v-709e7438":defineAsyncComponent(()=>__vitePreload(()=>import("./IDEA日常使用介绍.html-9ee21b1c.js"),["assets/IDEA日常使用介绍.html-9ee21b1c.js","assets/framework-debd98b7.js"])),"v-2b59d834":defineAsyncComponent(()=>__vitePreload(()=>import("./IntelliJIDEA快捷键大全_动图演示.html-aa5d0922.js"),["assets/IntelliJIDEA快捷键大全_动图演示.html-aa5d0922.js","assets/framework-debd98b7.js"])),"v-eba414ea":defineAsyncComponent(()=>__vitePreload(()=>import("./JApiDocs教程.html-09344c38.js"),["assets/JApiDocs教程.html-09344c38.js","assets/framework-debd98b7.js"])),"v-05f16561":defineAsyncComponent(()=>__vitePreload(()=>import("./JRebel热部署的使用.html-2a2f509b.js"),["assets/JRebel热部署的使用.html-2a2f509b.js","assets/framework-debd98b7.js"])),"v-2c1c367c":defineAsyncComponent(()=>__vitePreload(()=>import("./JSP和JSTL获取服务器参数.html-ac048b15.js"),["assets/JSP和JSTL获取服务器参数.html-ac048b15.js","assets/framework-debd98b7.js"])),"v-358ae550":defineAsyncComponent(()=>__vitePreload(()=>import("./JUC并发编程.html-6e985d06.js"),["assets/JUC并发编程.html-6e985d06.js","assets/framework-debd98b7.js"])),"v-a2ddb01c":defineAsyncComponent(()=>__vitePreload(()=>import("./Java8Stream之collect().html-04880abf.js"),["assets/Java8Stream之collect().html-04880abf.js","assets/framework-debd98b7.js"])),"v-60d5c536":defineAsyncComponent(()=>__vitePreload(()=>import("./Java8多线程CompletableFuture.html-4bd1109d.js"),["assets/Java8多线程CompletableFuture.html-4bd1109d.js","assets/framework-debd98b7.js"])),"v-55b8ba0a":defineAsyncComponent(()=>__vitePreload(()=>import("./Java中List的stream使用.html-d895e84e.js"),["assets/Java中List的stream使用.html-d895e84e.js","assets/framework-debd98b7.js"])),"v-3f0a946f":defineAsyncComponent(()=>__vitePreload(()=>import("./Java命名规范.html-958a74f7.js"),["assets/Java命名规范.html-958a74f7.js","assets/framework-debd98b7.js"])),"v-50401ed5":defineAsyncComponent(()=>__vitePreload(()=>import("./Java实现gz压缩与解压缩.html-658e0134.js"),["assets/Java实现gz压缩与解压缩.html-658e0134.js","assets/framework-debd98b7.js"])),"v-40911b8e":defineAsyncComponent(()=>__vitePreload(()=>import("./Java导入导出Excel-POI.html-dc79c209.js"),["assets/Java导入导出Excel-POI.html-dc79c209.js","assets/framework-debd98b7.js"])),"v-73b317e4":defineAsyncComponent(()=>__vitePreload(()=>import("./Java电子书笔记.html-92898778.js"),["assets/Java电子书笔记.html-92898778.js","assets/framework-debd98b7.js"])),"v-5bd12a58":defineAsyncComponent(()=>__vitePreload(()=>import("./Jenkins_Docker一键自动化部署.html-08429912.js"),["assets/Jenkins_Docker一键自动化部署.html-08429912.js","assets/framework-debd98b7.js"])),"v-a4b9dd90":defineAsyncComponent(()=>__vitePreload(()=>import("./Logback 配置文件优化.html-7fdbaa5f.js"),["assets/Logback 配置文件优化.html-7fdbaa5f.js","assets/framework-debd98b7.js"])),"v-6207c160":defineAsyncComponent(()=>__vitePreload(()=>import("./MyBatis-Plus联表查询-Mybatis-Plus-Join.html-86fa59d1.js"),["assets/MyBatis-Plus联表查询-Mybatis-Plus-Join.html-86fa59d1.js","assets/framework-debd98b7.js"])),"v-6d504a5e":defineAsyncComponent(()=>__vitePreload(()=>import("./MyEclipse.html-2723a9ae.js"),["assets/MyEclipse.html-2723a9ae.js","assets/framework-debd98b7.js"])),"v-3953c4a4":defineAsyncComponent(()=>__vitePreload(()=>import("./Optional非空判断.html-0989f38f.js"),["assets/Optional非空判断.html-0989f38f.js","assets/framework-debd98b7.js"])),"v-0ff149dc":defineAsyncComponent(()=>__vitePreload(()=>import("./Python批量下载某网页的所有图片.html-49e86830.js"),["assets/Python批量下载某网页的所有图片.html-49e86830.js","assets/framework-debd98b7.js"])),"v-7d0c470e":defineAsyncComponent(()=>__vitePreload(()=>import("./Python自动化办公库.html-13b4e2fe.js"),["assets/Python自动化办公库.html-13b4e2fe.js","assets/framework-debd98b7.js"])),"v-18aae998":defineAsyncComponent(()=>__vitePreload(()=>import("./Quartz任务调度框架整合使用.html-85f7f4a7.js"),["assets/Quartz任务调度框架整合使用.html-85f7f4a7.js","assets/framework-debd98b7.js"])),"v-7445cd33":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-ee8ff229.js"),["assets/index.html-ee8ff229.js","assets/framework-debd98b7.js"])),"v-545738c8":defineAsyncComponent(()=>__vitePreload(()=>import("./Redis总结：缓存雪崩、缓存击穿、缓存穿透.html-6ad51547.js"),["assets/Redis总结：缓存雪崩、缓存击穿、缓存穿透.html-6ad51547.js","assets/framework-debd98b7.js"])),"v-0e6eab8e":defineAsyncComponent(()=>__vitePreload(()=>import("./RocketMQ笔记：应用实践.html-716d3e0a.js"),["assets/RocketMQ笔记：应用实践.html-716d3e0a.js","assets/framework-debd98b7.js"])),"v-0c09d80a":defineAsyncComponent(()=>__vitePreload(()=>import("./Spring 面试63问.html-b7974ab9.js"),["assets/Spring 面试63问.html-b7974ab9.js","assets/framework-debd98b7.js"])),"v-4d262f90":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringBoot_Kafka_ELK完成海量日志收集.html-28c69762.js"),["assets/SpringBoot_Kafka_ELK完成海量日志收集.html-28c69762.js","assets/framework-debd98b7.js"])),"v-12933370":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringBoot_MybatisPlus_ClickHouse轻松实现增删改查.html-03543fef.js"),["assets/SpringBoot_MybatisPlus_ClickHouse轻松实现增删改查.html-03543fef.js","assets/framework-debd98b7.js"])),"v-01f872e7":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringBoot_Netty_WebSocket实现消息推送.html-ffa6c0e9.js"),["assets/SpringBoot_Netty_WebSocket实现消息推送.html-ffa6c0e9.js","assets/framework-debd98b7.js"])),"v-47bb6d4c":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringBoot_SpringSecurity前后端分离_Jwt的权限认证.html-1e79d249.js"),["assets/SpringBoot_SpringSecurity前后端分离_Jwt的权限认证.html-1e79d249.js","assets/framework-debd98b7.js"])),"v-2fc561e0":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringBoot_WebSocket实时监控异常.html-02b1c7f3.js"),["assets/SpringBoot_WebSocket实时监控异常.html-02b1c7f3.js","assets/framework-debd98b7.js"])),"v-29cea7e7":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringBoot.html-de546f67.js"),["assets/SpringBoot.html-de546f67.js","assets/framework-debd98b7.js"])),"v-00a018bf":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringBoot中Rest的使用和请求参数注解.html-a080e617.js"),["assets/SpringBoot中Rest的使用和请求参数注解.html-a080e617.js","assets/framework-debd98b7.js"])),"v-031a6e0b":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringBoot中如何优雅的使用多线程.html-b3dda67c.js"),["assets/SpringBoot中如何优雅的使用多线程.html-b3dda67c.js","assets/framework-debd98b7.js"])),"v-7f0ca952":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringBoot中如何解决CORS跨域问题.html-4159b6a0.js"),["assets/SpringBoot中如何解决CORS跨域问题.html-4159b6a0.js","assets/framework-debd98b7.js"])),"v-7277d541":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringBoot内置工具类.html-e7b80ae9.js"),["assets/SpringBoot内置工具类.html-e7b80ae9.js","assets/framework-debd98b7.js"])),"v-56224f88":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringBoot利用ThreadPoolTaskExecutor批量插入.html-3f46660c.js"),["assets/SpringBoot利用ThreadPoolTaskExecutor批量插入.html-3f46660c.js","assets/framework-debd98b7.js"])),"v-0246c81b":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringBoot启动banner.html-2af0ec71.js"),["assets/SpringBoot启动banner.html-2af0ec71.js","assets/framework-debd98b7.js"])),"v-37dcfe5d":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringBoot定时任务动态管理.html-3fa92eeb.js"),["assets/SpringBoot定时任务动态管理.html-3fa92eeb.js","assets/framework-debd98b7.js"])),"v-3966872e":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringBoot定时任务动态管理通用解决方案.html-81c3cb36.js"),["assets/SpringBoot定时任务动态管理通用解决方案.html-81c3cb36.js","assets/framework-debd98b7.js"])),"v-fcf9a784":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringBoot并行任务.html-8337cfcc.js"),["assets/SpringBoot并行任务.html-8337cfcc.js","assets/framework-debd98b7.js"])),"v-405fe66c":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringBoot引入线程池_Queue缓冲队列实现高并发下单业务.html-3a24fe2a.js"),["assets/SpringBoot引入线程池_Queue缓冲队列实现高并发下单业务.html-3a24fe2a.js","assets/framework-debd98b7.js"])),"v-3db67a40":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringBoot接口数据加解密实战.html-9227e2eb.js"),["assets/SpringBoot接口数据加解密实战.html-9227e2eb.js","assets/framework-debd98b7.js"])),"v-3eec26d3":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringBoot整合Mybatis-plus及用法.html-6126b0f3.js"),["assets/SpringBoot整合Mybatis-plus及用法.html-6126b0f3.js","assets/framework-debd98b7.js"])),"v-bb952da6":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringBoot整合Mybatis-plus及用法2.html-147c9d2b.js"),["assets/SpringBoot整合Mybatis-plus及用法2.html-147c9d2b.js","assets/framework-debd98b7.js"])),"v-27bd9296":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringBoot整合Socket实战案例.html-b86de430.js"),["assets/SpringBoot整合Socket实战案例.html-b86de430.js","assets/framework-debd98b7.js"])),"v-44a13a86":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringBoot整合流程引擎Flowable.html-2439eb5c.js"),["assets/SpringBoot整合流程引擎Flowable.html-2439eb5c.js","assets/framework-debd98b7.js"])),"v-5a4b6345":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringBoot超大文件上传.html-a2a4a700.js"),["assets/SpringBoot超大文件上传.html-a2a4a700.js","assets/framework-debd98b7.js"])),"v-311e62d0":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringBoot集成Flowable做工作流.html-e7ce402b.js"),["assets/SpringBoot集成Flowable做工作流.html-e7ce402b.js","assets/framework-debd98b7.js"])),"v-507bed41":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringBoot项目鉴权的 4 种方式.html-feb1fee0.js"),["assets/SpringBoot项目鉴权的 4 种方式.html-feb1fee0.js","assets/framework-debd98b7.js"])),"v-c5cd3edc":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringCloudAlibaba.html-f2288a9e.js"),["assets/SpringCloudAlibaba.html-f2288a9e.js","assets/framework-debd98b7.js"])),"v-3709255a":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringCloudGateway_Oauth2实现统一认证和鉴权.html-9af33d95.js"),["assets/SpringCloudGateway_Oauth2实现统一认证和鉴权.html-9af33d95.js","assets/framework-debd98b7.js"])),"v-3febf42d":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringCloudGatewayAPI接口安全设计(加密签名).html-bbd472fc.js"),["assets/SpringCloudGatewayAPI接口安全设计(加密签名).html-bbd472fc.js","assets/framework-debd98b7.js"])),"v-599ab9b3":defineAsyncComponent(()=>__vitePreload(()=>import("./SpringCloud优雅下线以及灰度发布.html-cd4837fc.js"),["assets/SpringCloud优雅下线以及灰度发布.html-cd4837fc.js","assets/framework-debd98b7.js"])),"v-32690d91":defineAsyncComponent(()=>__vitePreload(()=>import("./Springboot利用ThreadPoolTaskExecutor多线程批量插入百万级数据.html-ab6db9e7.js"),["assets/Springboot利用ThreadPoolTaskExecutor多线程批量插入百万级数据.html-ab6db9e7.js","assets/framework-debd98b7.js"])),"v-1b6b1cfa":defineAsyncComponent(()=>__vitePreload(()=>import("./VUE下拉列表动态切换.html-24017f7b.js"),["assets/VUE下拉列表动态切换.html-24017f7b.js","assets/framework-debd98b7.js"])),"v-653e1c1d":defineAsyncComponent(()=>__vitePreload(()=>import("./Vue子组件与父组件传值.html-3afca191.js"),["assets/Vue子组件与父组件传值.html-3afca191.js","assets/framework-debd98b7.js"])),"v-d985b94c":defineAsyncComponent(()=>__vitePreload(()=>import("./Vue开发报错问题解决.html-31a501ee.js"),["assets/Vue开发报错问题解决.html-31a501ee.js","assets/framework-debd98b7.js"])),"v-535669d3":defineAsyncComponent(()=>__vitePreload(()=>import("./fastjson中JSONObject的常用使用方法.html-0b99201b.js"),["assets/fastjson中JSONObject的常用使用方法.html-0b99201b.js","assets/framework-debd98b7.js"])),"v-c7a6fd84":defineAsyncComponent(()=>__vitePreload(()=>import("./idea-tips.html-bad933a6.js"),["assets/idea-tips.html-bad933a6.js","assets/framework-debd98b7.js"])),"v-468de280":defineAsyncComponent(()=>__vitePreload(()=>import("./jreble安装及破解方法.html-bfb479a6.js"),["assets/jreble安装及破解方法.html-bfb479a6.js","assets/framework-debd98b7.js"])),"v-764b221e":defineAsyncComponent(()=>__vitePreload(()=>import("./logback自定义日志脱敏组件.html-0810fb4f.js"),["assets/logback自定义日志脱敏组件.html-0810fb4f.js","assets/framework-debd98b7.js"])),"v-d7add974":defineAsyncComponent(()=>__vitePreload(()=>import("./mybatis 建表、删表、查表语句(mysql数据库).html-0246c1e6.js"),["assets/mybatis 建表、删表、查表语句(mysql数据库).html-0246c1e6.js","assets/framework-debd98b7.js"])),"v-224cf13a":defineAsyncComponent(()=>__vitePreload(()=>import("./openssl一键自签证书.html-91ba723d.js"),["assets/openssl一键自签证书.html-91ba723d.js","assets/framework-debd98b7.js"])),"v-082b14e8":defineAsyncComponent(()=>__vitePreload(()=>import("./springboot人脸识别登录.html-71e16495.js"),["assets/springboot人脸识别登录.html-71e16495.js","assets/framework-debd98b7.js"])),"v-6963d030":defineAsyncComponent(()=>__vitePreload(()=>import("./springboot打包不同环境配置与shell脚本部署.html-73257aa6.js"),["assets/springboot打包不同环境配置与shell脚本部署.html-73257aa6.js","assets/framework-debd98b7.js"])),"v-47449e3c":defineAsyncComponent(()=>__vitePreload(()=>import("./spring线程池多线程并发处理大批量数据.html-44a89a35.js"),["assets/spring线程池多线程并发处理大批量数据.html-44a89a35.js","assets/framework-debd98b7.js"])),"v-0fc88264":defineAsyncComponent(()=>__vitePreload(()=>import("./sql语句优化的30种方法.html-33f825ad.js"),["assets/sql语句优化的30种方法.html-33f825ad.js","assets/framework-debd98b7.js"])),"v-c87b41c4":defineAsyncComponent(()=>__vitePreload(()=>import("./使用docker快速安装oracle.html-321d274d.js"),["assets/使用docker快速安装oracle.html-321d274d.js","assets/framework-debd98b7.js"])),"v-29c5c590":defineAsyncComponent(()=>__vitePreload(()=>import("./使用easypoi导出excel实现动态列.html-1c287e8f.js"),["assets/使用easypoi导出excel实现动态列.html-1c287e8f.js","assets/framework-debd98b7.js"])),"v-7b4b9dc7":defineAsyncComponent(()=>__vitePreload(()=>import("./六十多个vscode 插件.html-9f5eb670.js"),["assets/六十多个vscode 插件.html-9f5eb670.js","assets/framework-debd98b7.js"])),"v-4fe861a4":defineAsyncComponent(()=>__vitePreload(()=>import("./分布式JVM监控工具.html-786bfab8.js"),["assets/分布式JVM监控工具.html-786bfab8.js","assets/framework-debd98b7.js"])),"v-4cb9b16c":defineAsyncComponent(()=>__vitePreload(()=>import("./如何读取resources目录下的文件路径（九种方式）.html-59228008.js"),["assets/如何读取resources目录下的文件路径（九种方式）.html-59228008.js","assets/framework-debd98b7.js"])),"v-43545b33":defineAsyncComponent(()=>__vitePreload(()=>import("./实用前端网站工具.html-976ebe20.js"),["assets/实用前端网站工具.html-976ebe20.js","assets/framework-debd98b7.js"])),"v-15dca1e6":defineAsyncComponent(()=>__vitePreload(()=>import("./将Bean放入Spring容器中的7种方式.html-a53ddd78.js"),["assets/将Bean放入Spring容器中的7种方式.html-a53ddd78.js","assets/framework-debd98b7.js"])),"v-1936c0d5":defineAsyncComponent(()=>__vitePreload(()=>import("./微服务_消息队列.html-f0f913ac.js"),["assets/微服务_消息队列.html-f0f913ac.js","assets/framework-debd98b7.js"])),"v-343c7385":defineAsyncComponent(()=>__vitePreload(()=>import("./微服务架构统一安全认证设计与实践.html-d374547c.js"),["assets/微服务架构统一安全认证设计与实践.html-d374547c.js","assets/framework-debd98b7.js"])),"v-19da668e":defineAsyncComponent(()=>__vitePreload(()=>import("./报错异常解决.html-4bfe0df3.js"),["assets/报错异常解决.html-4bfe0df3.js","assets/framework-debd98b7.js"])),"v-685b81d4":defineAsyncComponent(()=>__vitePreload(()=>import("./搞定SpringBoot接口恶意刷新和暴力请求.html-df459611.js"),["assets/搞定SpringBoot接口恶意刷新和暴力请求.html-df459611.js","assets/framework-debd98b7.js"])),"v-3ecba07f":defineAsyncComponent(()=>__vitePreload(()=>import("./改造BeanUtils优雅实现List数据拷贝.html-e70fd2a3.js"),["assets/改造BeanUtils优雅实现List数据拷贝.html-e70fd2a3.js","assets/framework-debd98b7.js"])),"v-dfd677c2":defineAsyncComponent(()=>__vitePreload(()=>import("./数据库表结构文档生成工具.html-776233bd.js"),["assets/数据库表结构文档生成工具.html-776233bd.js","assets/framework-debd98b7.js"])),"v-9d1ecdb0":defineAsyncComponent(()=>__vitePreload(()=>import("./数据类型Java类型.html-fd3fdfff.js"),["assets/数据类型Java类型.html-fd3fdfff.js","assets/framework-debd98b7.js"])),"v-12aac2e1":defineAsyncComponent(()=>__vitePreload(()=>import("./本地缓存Caffeine.html-94d2ef88.js"),["assets/本地缓存Caffeine.html-94d2ef88.js","assets/framework-debd98b7.js"])),"v-13c64a8d":defineAsyncComponent(()=>__vitePreload(()=>import("./架构师图谱·微服务_消息队列篇.html-9d9ee9b2.js"),["assets/架构师图谱·微服务_消息队列篇.html-9d9ee9b2.js","assets/framework-debd98b7.js"])),"v-48a9c507":defineAsyncComponent(()=>__vitePreload(()=>import("./树的定义、树的存储结构.html-9046c1f9.js"),["assets/树的定义、树的存储结构.html-9046c1f9.js","assets/framework-debd98b7.js"])),"v-e114d1d2":defineAsyncComponent(()=>__vitePreload(()=>import("./腾讯云后端总结的面试15问.html-1a7ff70e.js"),["assets/腾讯云后端总结的面试15问.html-1a7ff70e.js","assets/framework-debd98b7.js"])),"v-6926cfaa":defineAsyncComponent(()=>__vitePreload(()=>import("./通过Nginx来实现禁止国外IP访问网站.html-a243f44a.js"),["assets/通过Nginx来实现禁止国外IP访问网站.html-a243f44a.js","assets/framework-debd98b7.js"])),"v-b10ed23e":defineAsyncComponent(()=>__vitePreload(()=>import("./通过注解实现接口返回数据脱敏.html-c1b76af1.js"),["assets/通过注解实现接口返回数据脱敏.html-c1b76af1.js","assets/framework-debd98b7.js"])),"v-39786273":defineAsyncComponent(()=>__vitePreload(()=>import("./金额计算BigDecimal及踩坑.html-ded30daf.js"),["assets/金额计算BigDecimal及踩坑.html-ded30daf.js","assets/framework-debd98b7.js"])),"v-77611f2a":defineAsyncComponent(()=>__vitePreload(()=>import("./How-To-Ask-Questions.html-c91df144.js"),["assets/How-To-Ask-Questions.html-c91df144.js","assets/framework-debd98b7.js"])),"v-7c80db8b":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-6c2109f1.js"),["assets/index.html-6c2109f1.js","assets/framework-debd98b7.js"])),"v-386477da":defineAsyncComponent(()=>__vitePreload(()=>import("./人生三境界.html-a4981cb3.js"),["assets/人生三境界.html-a4981cb3.js","assets/framework-debd98b7.js"])),"v-6192c6ac":defineAsyncComponent(()=>__vitePreload(()=>import("./人生最好的三种状态.html-40d75ecd.js"),["assets/人生最好的三种状态.html-40d75ecd.js","assets/framework-debd98b7.js"])),"v-1e8d39be":defineAsyncComponent(()=>__vitePreload(()=>import("./以你之名，书我一生.html-16ef1dcd.js"),["assets/以你之名，书我一生.html-16ef1dcd.js","assets/framework-debd98b7.js"])),"v-58121615":defineAsyncComponent(()=>__vitePreload(()=>import("./早安心语220519.html-50a137f9.js"),["assets/早安心语220519.html-50a137f9.js","assets/framework-debd98b7.js"])),"v-ead2f860":defineAsyncComponent(()=>__vitePreload(()=>import("./鲁迅名言.html-b5d0d4ff.js"),["assets/鲁迅名言.html-b5d0d4ff.js","assets/framework-debd98b7.js"])),"v-a3e2d4e4":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-d820ab7c.js"),["assets/index.html-d820ab7c.js","assets/framework-debd98b7.js"])),"v-20f0fd66":defineAsyncComponent(()=>__vitePreload(()=>import("./互联网金融行业名词笔记.html-29d21505.js"),["assets/互联网金融行业名词笔记.html-29d21505.js","assets/framework-debd98b7.js"])),"v-37125490":defineAsyncComponent(()=>__vitePreload(()=>import("./GitHub-Auto-Commit.html-10644e1c.js"),["assets/GitHub-Auto-Commit.html-10644e1c.js","assets/framework-debd98b7.js"])),"v-c9250e40":defineAsyncComponent(()=>__vitePreload(()=>import("./Git、GitHub、Gitee.html-4f581226.js"),["assets/Git、GitHub、Gitee.html-4f581226.js","assets/framework-debd98b7.js"])),"v-74473916":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-cb30e516.js"),["assets/index.html-cb30e516.js","assets/framework-debd98b7.js"])),"v-1adba576":defineAsyncComponent(()=>__vitePreload(()=>import("./git_emoji.html-a1a7a6aa.js"),["assets/git_emoji.html-a1a7a6aa.js","assets/framework-debd98b7.js"])),"v-78493303":defineAsyncComponent(()=>__vitePreload(()=>import("./CNS服务器搭建教程.html-cefe8c98.js"),["assets/CNS服务器搭建教程.html-cefe8c98.js","assets/framework-debd98b7.js"])),"v-490af90f":defineAsyncComponent(()=>__vitePreload(()=>import("./Centos7Minimal.html-b70bd3a4.js"),["assets/Centos7Minimal.html-b70bd3a4.js","assets/framework-debd98b7.js"])),"v-19781156":defineAsyncComponent(()=>__vitePreload(()=>import("./Docker安装Oracle.html-1d167aea.js"),["assets/Docker安装Oracle.html-1d167aea.js","assets/framework-debd98b7.js"])),"v-171c1b4c":defineAsyncComponent(()=>__vitePreload(()=>import("./ESXI_iKuai_OpenWrt.html-7a3be285.js"),["assets/ESXI_iKuai_OpenWrt.html-7a3be285.js","assets/framework-debd98b7.js"])),"v-2767e582":defineAsyncComponent(()=>__vitePreload(()=>import("./Euserv.html-65549851.js"),["assets/Euserv.html-65549851.js","assets/framework-debd98b7.js"])),"v-473b8da1":defineAsyncComponent(()=>__vitePreload(()=>import("./Linux发送tcp包最简单方法-netcat.html-ab2f0850.js"),["assets/Linux发送tcp包最简单方法-netcat.html-ab2f0850.js","assets/framework-debd98b7.js"])),"v-134ccd82":defineAsyncComponent(()=>__vitePreload(()=>import("./Linux图形化管理服务器的神器Cockpit.html-41f4c532.js"),["assets/Linux图形化管理服务器的神器Cockpit.html-41f4c532.js","assets/framework-debd98b7.js"])),"v-0e642874":defineAsyncComponent(()=>__vitePreload(()=>import("./Linux总结.html-659a5b84.js"),["assets/Linux总结.html-659a5b84.js","assets/framework-debd98b7.js"])),"v-1e23d93c":defineAsyncComponent(()=>__vitePreload(()=>import("./Linux新开机器配置.html-f28c0bc8.js"),["assets/Linux新开机器配置.html-f28c0bc8.js","assets/framework-debd98b7.js"])),"v-172206f6":defineAsyncComponent(()=>__vitePreload(()=>import("./Linux脚本工具.html-87aeb222.js"),["assets/Linux脚本工具.html-87aeb222.js","assets/framework-debd98b7.js"])),"v-9e274aaa":defineAsyncComponent(()=>__vitePreload(()=>import("./MySQL.html-8f0c6a31.js"),["assets/MySQL.html-8f0c6a31.js","assets/framework-debd98b7.js"])),"v-cfcc0faa":defineAsyncComponent(()=>__vitePreload(()=>import("./MySQL压缩版安装配置.html-c0136b83.js"),["assets/MySQL压缩版安装配置.html-c0136b83.js","assets/framework-debd98b7.js"])),"v-7aba7e62":defineAsyncComponent(()=>__vitePreload(()=>import("./Nginx一网打尽.html-59c40f77.js"),["assets/Nginx一网打尽.html-59c40f77.js","assets/framework-debd98b7.js"])),"v-a5195ce6":defineAsyncComponent(()=>__vitePreload(()=>import("./Nginx万字总结.html-3a9152c2.js"),["assets/Nginx万字总结.html-3a9152c2.js","assets/framework-debd98b7.js"])),"v-4f7b7c72":defineAsyncComponent(()=>__vitePreload(()=>import("./Nginx从安装到高可用.html-3faa5b54.js"),["assets/Nginx从安装到高可用.html-3faa5b54.js","assets/framework-debd98b7.js"])),"v-18d19b29":defineAsyncComponent(()=>__vitePreload(()=>import("./Nginx安装Web应用防火墙.html-f125ab13.js"),["assets/Nginx安装Web应用防火墙.html-f125ab13.js","assets/framework-debd98b7.js"])),"v-55994567":defineAsyncComponent(()=>__vitePreload(()=>import("./NodeJS-Maven-Mysql.html-d80670fd.js"),["assets/NodeJS-Maven-Mysql.html-d80670fd.js","assets/framework-debd98b7.js"])),"v-275077d9":defineAsyncComponent(()=>__vitePreload(()=>import("./OpenSSL生成自签名证书.html-b7356740.js"),["assets/OpenSSL生成自签名证书.html-b7356740.js","assets/framework-debd98b7.js"])),"v-0bb9c789":defineAsyncComponent(()=>__vitePreload(()=>import("./Oracle数据库基础.html-b651075a.js"),["assets/Oracle数据库基础.html-b651075a.js","assets/framework-debd98b7.js"])),"v-7624e067":defineAsyncComponent(()=>__vitePreload(()=>import("./Oracle的数据导入与导出-数据库.html-2d261cf0.js"),["assets/Oracle的数据导入与导出-数据库.html-2d261cf0.js","assets/framework-debd98b7.js"])),"v-78d65395":defineAsyncComponent(()=>__vitePreload(()=>import("./Podman开源的容器.html-199b893b.js"),["assets/Podman开源的容器.html-199b893b.js","assets/framework-debd98b7.js"])),"v-f0383c18":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-23a4b188.js"),["assets/index.html-23a4b188.js","assets/framework-debd98b7.js"])),"v-1db2e12e":defineAsyncComponent(()=>__vitePreload(()=>import("./SSH客户端软件.html-93d10732.js"),["assets/SSH客户端软件.html-93d10732.js","assets/framework-debd98b7.js"])),"v-0b5dadd6":defineAsyncComponent(()=>__vitePreload(()=>import("./VMware-Esxi.html-cee466b0.js"),["assets/VMware-Esxi.html-cee466b0.js","assets/framework-debd98b7.js"])),"v-0a582b41":defineAsyncComponent(()=>__vitePreload(()=>import("./Windows子系统WSL.html-1f7df190.js"),["assets/Windows子系统WSL.html-1f7df190.js","assets/framework-debd98b7.js"])),"v-5699db53":defineAsyncComponent(()=>__vitePreload(()=>import("./bt.html-a392e49c.js"),["assets/bt.html-a392e49c.js","assets/framework-debd98b7.js"])),"v-30e7d74e":defineAsyncComponent(()=>__vitePreload(()=>import("./exsi_黑群晖_爱快_openwrt.html-53d413bb.js"),["assets/exsi_黑群晖_爱快_openwrt.html-53d413bb.js","assets/framework-debd98b7.js"])),"v-be175c8a":defineAsyncComponent(()=>__vitePreload(()=>import("./openssl一键自签证书.html-5bc6f7c5.js"),["assets/openssl一键自签证书.html-5bc6f7c5.js","assets/framework-debd98b7.js"])),"v-31af7fac":defineAsyncComponent(()=>__vitePreload(()=>import("./python安装源.html-2d086d85.js"),["assets/python安装源.html-2d086d85.js","assets/framework-debd98b7.js"])),"v-73be5696":defineAsyncComponent(()=>__vitePreload(()=>import("./tmpfiles.d中文手册.html-8768dbc3.js"),["assets/tmpfiles.d中文手册.html-8768dbc3.js","assets/framework-debd98b7.js"])),"v-b1b88c62":defineAsyncComponent(()=>__vitePreload(()=>import("./不支持虚拟化的AMD-V.html-fc51f4ce.js"),["assets/不支持虚拟化的AMD-V.html-fc51f4ce.js","assets/framework-debd98b7.js"])),"v-4613513a":defineAsyncComponent(()=>__vitePreload(()=>import("./实用 shell 脚本.html-0c39d942.js"),["assets/实用 shell 脚本.html-0c39d942.js","assets/framework-debd98b7.js"])),"v-093969da":defineAsyncComponent(()=>__vitePreload(()=>import("./搭建基于DockerDesktop_WSL2.html-13ea060c.js"),["assets/搭建基于DockerDesktop_WSL2.html-13ea060c.js","assets/framework-debd98b7.js"])),"v-8ebbf29c":defineAsyncComponent(()=>__vitePreload(()=>import("./服务器入侵排查.html-80fa04ce.js"),["assets/服务器入侵排查.html-80fa04ce.js","assets/framework-debd98b7.js"])),"v-9757ae78":defineAsyncComponent(()=>__vitePreload(()=>import("./服务器运行数据查看工具.html-34aa82fd.js"),["assets/服务器运行数据查看工具.html-34aa82fd.js","assets/framework-debd98b7.js"])),"v-6d744f6f":defineAsyncComponent(()=>__vitePreload(()=>import("./自动封禁IP脚本.html-6c39c4be.js"),["assets/自动封禁IP脚本.html-6c39c4be.js","assets/framework-debd98b7.js"])),"v-49d04651":defineAsyncComponent(()=>__vitePreload(()=>import("./详解K8S高可用部署.html-bb3e791d.js"),["assets/详解K8S高可用部署.html-bb3e791d.js","assets/framework-debd98b7.js"])),"v-fbb8e312":defineAsyncComponent(()=>__vitePreload(()=>import("./API.html-f0965e43.js"),["assets/API.html-f0965e43.js","assets/framework-debd98b7.js"])),"v-502807be":defineAsyncComponent(()=>__vitePreload(()=>import("./Backblaze(B2)套用CloudFlare静态文件存储.html-92a732a2.js"),["assets/Backblaze(B2)套用CloudFlare静态文件存储.html-92a732a2.js","assets/framework-debd98b7.js"])),"v-0a11e84c":defineAsyncComponent(()=>__vitePreload(()=>import("./Bing必应API.html-fc5b39b1.js"),["assets/Bing必应API.html-fc5b39b1.js","assets/framework-debd98b7.js"])),"v-810a1d4a":defineAsyncComponent(()=>__vitePreload(()=>import("./Euserv.html-58d2f00e.js"),["assets/Euserv.html-58d2f00e.js","assets/framework-debd98b7.js"])),"v-90df2e26":defineAsyncComponent(()=>__vitePreload(()=>import("./Github技巧.html-3f250a38.js"),["assets/Github技巧.html-3f250a38.js","assets/framework-debd98b7.js"])),"v-4eb59d06":defineAsyncComponent(()=>__vitePreload(()=>import("./Microsoft-365-E5-RenewPlus.html-9612f7f5.js"),["assets/Microsoft-365-E5-RenewPlus.html-9612f7f5.js","assets/framework-debd98b7.js"])),"v-af64a3ba":defineAsyncComponent(()=>__vitePreload(()=>import("./Microsoft-365-E5-RenewX.html-ab7a6941.js"),["assets/Microsoft-365-E5-RenewX.html-ab7a6941.js","assets/framework-debd98b7.js"])),"v-88d120d6":defineAsyncComponent(()=>__vitePreload(()=>import("./OfficeE5.html-582e35a4.js"),["assets/OfficeE5.html-582e35a4.js","assets/framework-debd98b7.js"])),"v-dde823e8":defineAsyncComponent(()=>__vitePreload(()=>import("./QQ动态群聊昵称代码.html-eb6c6a0c.js"),["assets/QQ动态群聊昵称代码.html-eb6c6a0c.js","assets/framework-debd98b7.js"])),"v-e4cb1150":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-12d53b66.js"),["assets/index.html-12d53b66.js","assets/framework-debd98b7.js"])),"v-536b5b25":defineAsyncComponent(()=>__vitePreload(()=>import("./Steam免费解锁.html-662acb26.js"),["assets/Steam免费解锁.html-662acb26.js","assets/framework-debd98b7.js"])),"v-bb478dba":defineAsyncComponent(()=>__vitePreload(()=>import("./clash-v2ray.html-699c7c7e.js"),["assets/clash-v2ray.html-699c7c7e.js","assets/framework-debd98b7.js"])),"v-7b0cd90e":defineAsyncComponent(()=>__vitePreload(()=>import("./generate_204服务汇总.html-c23f3658.js"),["assets/generate_204服务汇总.html-c23f3658.js","assets/framework-debd98b7.js"])),"v-013c1e81":defineAsyncComponent(()=>__vitePreload(()=>import("./临时邮箱和接码.html-64d58739.js"),["assets/临时邮箱和接码.html-64d58739.js","assets/framework-debd98b7.js"])),"v-d2113bde":defineAsyncComponent(()=>__vitePreload(()=>import("./免费VPS.html-28b78cad.js"),["assets/免费VPS.html-28b78cad.js","assets/framework-debd98b7.js"])),"v-7378bc31":defineAsyncComponent(()=>__vitePreload(()=>import("./免费加速器.html-f3bc6263.js"),["assets/免费加速器.html-f3bc6263.js","assets/framework-debd98b7.js"])),"v-23a88807":defineAsyncComponent(()=>__vitePreload(()=>import("./免费图库.html-85a3e915.js"),["assets/免费图库.html-85a3e915.js","assets/framework-debd98b7.js"])),"v-30728471":defineAsyncComponent(()=>__vitePreload(()=>import("./免费图标.html-ec264587.js"),["assets/免费图标.html-ec264587.js","assets/framework-debd98b7.js"])),"v-47672dec":defineAsyncComponent(()=>__vitePreload(()=>import("./免费工具集锦.html-2692cc2a.js"),["assets/免费工具集锦.html-2692cc2a.js","assets/framework-debd98b7.js"])),"v-58188c0c":defineAsyncComponent(()=>__vitePreload(()=>import("./免费插图.html-aab15754.js"),["assets/免费插图.html-aab15754.js","assets/framework-debd98b7.js"])),"v-39c15e36":defineAsyncComponent(()=>__vitePreload(()=>import("./免费资源集锦.html-8ad16b43.js"),["assets/免费资源集锦.html-8ad16b43.js","assets/framework-debd98b7.js"])),"v-ebcc9b7c":defineAsyncComponent(()=>__vitePreload(()=>import("./免费随机图片api.html-4afb8f96.js"),["assets/免费随机图片api.html-4afb8f96.js","assets/framework-debd98b7.js"])),"v-22afdd50":defineAsyncComponent(()=>__vitePreload(()=>import("./图片防盗链的破解和反破解.html-bedfb997.js"),["assets/图片防盗链的破解和反破解.html-bedfb997.js","assets/framework-debd98b7.js"])),"v-689ccac3":defineAsyncComponent(()=>__vitePreload(()=>import("./影视.html-dcf8f086.js"),["assets/影视.html-dcf8f086.js","assets/framework-debd98b7.js"])),"v-28113e1c":defineAsyncComponent(()=>__vitePreload(()=>import("./新版QQ修改彩色颜色字体代码教程.html-bc1ce607.js"),["assets/新版QQ修改彩色颜色字体代码教程.html-bc1ce607.js","assets/framework-debd98b7.js"])),"v-7a7f0bea":defineAsyncComponent(()=>__vitePreload(()=>import("./浏览器UA.html-0bd3eb5a.js"),["assets/浏览器UA.html-0bd3eb5a.js","assets/framework-debd98b7.js"])),"v-9ec589ba":defineAsyncComponent(()=>__vitePreload(()=>import("./漏洞监控平台Monitor.html-1b2a5682.js"),["assets/漏洞监控平台Monitor.html-1b2a5682.js","assets/framework-debd98b7.js"])),"v-640b9c86":defineAsyncComponent(()=>__vitePreload(()=>import("./猫影视.html-0c84171a.js"),["assets/猫影视.html-0c84171a.js","assets/framework-debd98b7.js"])),"v-fce35ce0":defineAsyncComponent(()=>__vitePreload(()=>import("./电子书网站.html-28e863b8.js"),["assets/电子书网站.html-28e863b8.js","assets/framework-debd98b7.js"])),"v-2b70e4f9":defineAsyncComponent(()=>__vitePreload(()=>import("./电视工具箱.html-abae6a97.js"),["assets/电视工具箱.html-abae6a97.js","assets/framework-debd98b7.js"])),"v-f9cb582c":defineAsyncComponent(()=>__vitePreload(()=>import("./白嫖机场.html-a943f6f6.js"),["assets/白嫖机场.html-a943f6f6.js","assets/framework-debd98b7.js"])),"v-7af25863":defineAsyncComponent(()=>__vitePreload(()=>import("./直播源.html-4a91c075.js"),["assets/直播源.html-4a91c075.js","assets/framework-debd98b7.js"])),"v-7c4c95c4":defineAsyncComponent(()=>__vitePreload(()=>import("./程序员常逛的网站.html-fcca4915.js"),["assets/程序员常逛的网站.html-fcca4915.js","assets/framework-debd98b7.js"])),"v-5789ff2c":defineAsyncComponent(()=>__vitePreload(()=>import("./网址.html-09b156d5.js"),["assets/网址.html-09b156d5.js","assets/framework-debd98b7.js"])),"v-6ec2f8d0":defineAsyncComponent(()=>__vitePreload(()=>import("./网站文献下载.html-53c0860a.js"),["assets/网站文献下载.html-53c0860a.js","assets/framework-debd98b7.js"])),"v-91b437be":defineAsyncComponent(()=>__vitePreload(()=>import("./美团年货电子书.html-1455f769.js"),["assets/美团年货电子书.html-1455f769.js","assets/framework-debd98b7.js"])),"v-61f2a5b0":defineAsyncComponent(()=>__vitePreload(()=>import("./蓝奏云安卓APP合集.html-53eec848.js"),["assets/蓝奏云安卓APP合集.html-53eec848.js","assets/framework-debd98b7.js"])),"v-c8e1ae3a":defineAsyncComponent(()=>__vitePreload(()=>import("./谷歌Gmail注册显示此号码不能验证的解决办法.html-08d9b0f4.js"),["assets/谷歌Gmail注册显示此号码不能验证的解决办法.html-08d9b0f4.js","assets/framework-debd98b7.js"])),"v-a99c571c":defineAsyncComponent(()=>__vitePreload(()=>import("./高清视频解析接口.html-c0a32468.js"),["assets/高清视频解析接口.html-c0a32468.js","assets/framework-debd98b7.js"])),"v-53d002db":defineAsyncComponent(()=>__vitePreload(()=>import("./9个很酷的CMD命令.html-7b679d9f.js"),["assets/9个很酷的CMD命令.html-7b679d9f.js","assets/framework-debd98b7.js"])),"v-2d0aaf03":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a2ea0655.js"),["assets/index.html-a2ea0655.js","assets/framework-debd98b7.js"])),"v-04ef0ac5":defineAsyncComponent(()=>__vitePreload(()=>import("./StartAllBack(StartIsBack)v3.2.1Stable.html-2950e460.js"),["assets/StartAllBack(StartIsBack)v3.2.1Stable.html-2950e460.js","assets/framework-debd98b7.js"])),"v-6d8a905c":defineAsyncComponent(()=>__vitePreload(()=>import("./Windows10使用优化方案.html-45a323e4.js"),["assets/Windows10使用优化方案.html-45a323e4.js","assets/framework-debd98b7.js"])),"v-1ec0c498":defineAsyncComponent(()=>__vitePreload(()=>import("./win10-11皆可干货分享.html-59ca3532.js"),["assets/win10-11皆可干货分享.html-59ca3532.js","assets/framework-debd98b7.js"])),"v-003bf188":defineAsyncComponent(()=>__vitePreload(()=>import("./win10快捷键.html-0966b5eb.js"),["assets/win10快捷键.html-0966b5eb.js","assets/framework-debd98b7.js"])),"v-31351e7d":defineAsyncComponent(()=>__vitePreload(()=>import("./删除 windows 服务.html-6fc78f24.js"),["assets/删除 windows 服务.html-6fc78f24.js","assets/framework-debd98b7.js"])),"v-36cf8589":defineAsyncComponent(()=>__vitePreload(()=>import("./安装WSA-激活GPU-双击安装APK.html-dd043e79.js"),["assets/安装WSA-激活GPU-双击安装APK.html-dd043e79.js","assets/framework-debd98b7.js"])),"v-ef9ffcba":defineAsyncComponent(()=>__vitePreload(()=>import("./新版本Edge提示由你的组织管理.html-fb26e1c7.js"),["assets/新版本Edge提示由你的组织管理.html-fb26e1c7.js","assets/framework-debd98b7.js"])),"v-02df1f96":defineAsyncComponent(()=>__vitePreload(()=>import("./激活码.html-bc4b9953.js"),["assets/激活码.html-bc4b9953.js","assets/framework-debd98b7.js"])),"v-249a6012":defineAsyncComponent(()=>__vitePreload(()=>import("./解决浏览器跨域问题.html-2e01d315.js"),["assets/解决浏览器跨域问题.html-2e01d315.js","assets/framework-debd98b7.js"])),"v-440dee74":defineAsyncComponent(()=>__vitePreload(()=>import("./Alist常用样式代码.html-02508ba0.js"),["assets/Alist常用样式代码.html-02508ba0.js","assets/framework-debd98b7.js"])),"v-464c88aa":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-89c09560.js"),["assets/index.html-89c09560.js","assets/framework-debd98b7.js"])),"v-6d51fcc4":defineAsyncComponent(()=>__vitePreload(()=>import("./repository.html-061a417e.js"),["assets/repository.html-061a417e.js","assets/framework-debd98b7.js"])),"v-15b1d789":defineAsyncComponent(()=>__vitePreload(()=>import("./使用CloudFlareWorkers反代网站.html-a6113057.js"),["assets/使用CloudFlareWorkers反代网站.html-a6113057.js","assets/framework-debd98b7.js"])),"v-4155ce3c":defineAsyncComponent(()=>__vitePreload(()=>import("./脚本仓库.html-046e02fa.js"),["assets/脚本仓库.html-046e02fa.js","assets/framework-debd98b7.js"])),"v-f3213f92":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-868a74cb.js"),["assets/index.html-868a74cb.js","assets/framework-debd98b7.js"])),"v-6e25be61":defineAsyncComponent(()=>__vitePreload(()=>import("./admin.html-805b2a60.js"),["assets/admin.html-805b2a60.js","assets/framework-debd98b7.js"])),"v-ff088e9c":defineAsyncComponent(()=>__vitePreload(()=>import("./国内常用静态资源CDN公共库.html-0a33eaa5.js"),["assets/国内常用静态资源CDN公共库.html-0a33eaa5.js","assets/framework-debd98b7.js"])),"v-1a7ea05d":defineAsyncComponent(()=>__vitePreload(()=>import("./开源后台管理系统.html-71d132ce.js"),["assets/开源后台管理系统.html-71d132ce.js","assets/framework-debd98b7.js"])),"v-d7188082":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-8eccf75c.js"),["assets/index.html-8eccf75c.js","assets/framework-debd98b7.js"])),"v-d2576f5c":defineAsyncComponent(()=>__vitePreload(()=>import("./form表单系统.html-098bf479.js"),["assets/form表单系统.html-098bf479.js","assets/framework-debd98b7.js"])),"v-1bf8f71d":defineAsyncComponent(()=>__vitePreload(()=>import("./vuepress.html-13e41f13.js"),["assets/vuepress.html-13e41f13.js","assets/framework-debd98b7.js"])),"v-7f4f380c":defineAsyncComponent(()=>__vitePreload(()=>import("./API.html-293567b0.js"),["assets/API.html-293567b0.js","assets/framework-debd98b7.js"])),"v-d440f426":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-3c44b851.js"),["assets/index.html-3c44b851.js","assets/framework-debd98b7.js"])),"v-3cf546d5":defineAsyncComponent(()=>__vitePreload(()=>import("./SSH客户端软件.html-66e05b5f.js"),["assets/SSH客户端软件.html-66e05b5f.js","assets/framework-debd98b7.js"])),"v-6726240a":defineAsyncComponent(()=>__vitePreload(()=>import("./develop-tools.html-4e618cb3.js"),["assets/develop-tools.html-4e618cb3.js","assets/framework-debd98b7.js"])),"v-5239b90e":defineAsyncComponent(()=>__vitePreload(()=>import("./lenovo.html-f02de8ff.js"),["assets/lenovo.html-f02de8ff.js","assets/framework-debd98b7.js"])),"v-f4cfda76":defineAsyncComponent(()=>__vitePreload(()=>import("./software.html-e3ca2a5a.js"),["assets/software.html-e3ca2a5a.js","assets/framework-debd98b7.js"])),"v-0289e456":defineAsyncComponent(()=>__vitePreload(()=>import("./免费思维导图.html-4118248d.js"),["assets/免费思维导图.html-4118248d.js","assets/framework-debd98b7.js"])),"v-51defb2f":defineAsyncComponent(()=>__vitePreload(()=>import("./在线万能查询和在线工具.html-3f2a8532.js"),["assets/在线万能查询和在线工具.html-3f2a8532.js","assets/framework-debd98b7.js"])),"v-3d92dd5a":defineAsyncComponent(()=>__vitePreload(()=>import("./截图工具.html-bf9ac911.js"),["assets/截图工具.html-bf9ac911.js","assets/framework-debd98b7.js"])),"v-f0217ea8":defineAsyncComponent(()=>__vitePreload(()=>import("./短视频解析.html-edd6f052.js"),["assets/短视频解析.html-edd6f052.js","assets/framework-debd98b7.js"])),"v-42d58db0":defineAsyncComponent(()=>__vitePreload(()=>import("./阿里十大最受开发者欢迎的工具.html-185f0e84.js"),["assets/阿里十大最受开发者欢迎的工具.html-185f0e84.js","assets/framework-debd98b7.js"])),"v-4377e9a2":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-f8893184.js"),["assets/index.html-f8893184.js","assets/framework-debd98b7.js"])),"v-0dba7fcb":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-babe3ec0.js"),["assets/index.html-babe3ec0.js","assets/framework-debd98b7.js"])),"v-45410d4b":defineAsyncComponent(()=>__vitePreload(()=>import("./01_初识TS.html-bb64a1ab.js"),["assets/01_初识TS.html-bb64a1ab.js","assets/framework-debd98b7.js"])),"v-0271c50c":defineAsyncComponent(()=>__vitePreload(()=>import("./02_安装TS.html-52febd12.js"),["assets/02_安装TS.html-52febd12.js","assets/framework-debd98b7.js"])),"v-7efb1c5d":defineAsyncComponent(()=>__vitePreload(()=>import("./03_HelloWorld.html-aecce31b.js"),["assets/03_HelloWorld.html-aecce31b.js","assets/framework-debd98b7.js"])),"v-25507322":defineAsyncComponent(()=>__vitePreload(()=>import("./04_webpack打包.html-b7104927.js"),["assets/04_webpack打包.html-b7104927.js","assets/framework-debd98b7.js"])),"v-43bfb7c0":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a41e40d9.js"),["assets/index.html-a41e40d9.js","assets/framework-debd98b7.js"])),"v-331b4e12":defineAsyncComponent(()=>__vitePreload(()=>import("./1_type.html-1507da02.js"),["assets/1_type.html-1507da02.js","assets/framework-debd98b7.js"])),"v-948fe668":defineAsyncComponent(()=>__vitePreload(()=>import("./2_interface.html-2d52e6c9.js"),["assets/2_interface.html-2d52e6c9.js","assets/framework-debd98b7.js"])),"v-7f762968":defineAsyncComponent(()=>__vitePreload(()=>import("./3_class.html-b5a94e88.js"),["assets/3_class.html-b5a94e88.js","assets/framework-debd98b7.js"])),"v-339b8977":defineAsyncComponent(()=>__vitePreload(()=>import("./4_function.html-d5075c2d.js"),["assets/4_function.html-d5075c2d.js","assets/framework-debd98b7.js"])),"v-c8821a6a":defineAsyncComponent(()=>__vitePreload(()=>import("./5_generic.html-5d5a8e4c.js"),["assets/5_generic.html-5d5a8e4c.js","assets/framework-debd98b7.js"])),"v-446a765e":defineAsyncComponent(()=>__vitePreload(()=>import("./6_other.html-26299a63.js"),["assets/6_other.html-26299a63.js","assets/framework-debd98b7.js"])),"v-43bfb7df":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-aa698ab1.js"),["assets/index.html-aa698ab1.js","assets/framework-debd98b7.js"])),"v-5cafefc2":defineAsyncComponent(()=>__vitePreload(()=>import("./01_认识Vue3.html-9365f3d8.js"),["assets/01_认识Vue3.html-9365f3d8.js","assets/framework-debd98b7.js"])),"v-b51510f6":defineAsyncComponent(()=>__vitePreload(()=>import("./02_创建vue3项目.html-ae61a269.js"),["assets/02_创建vue3项目.html-ae61a269.js","assets/framework-debd98b7.js"])),"v-43bfb7fe":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-e7ec531d.js"),["assets/index.html-e7ec531d.js","assets/framework-debd98b7.js"])),"v-5dc35644":defineAsyncComponent(()=>__vitePreload(()=>import("./01_Composition API_常用部分.html-62b550fa.js"),["assets/01_Composition API_常用部分.html-62b550fa.js","assets/framework-debd98b7.js"])),"v-306f125d":defineAsyncComponent(()=>__vitePreload(()=>import("./02_Composition API_其它部分.html-8307212c.js"),["assets/02_Composition API_其它部分.html-8307212c.js","assets/framework-debd98b7.js"])),"v-16e4cf3e":defineAsyncComponent(()=>__vitePreload(()=>import("./03_手写组合API.html-ad5c02d7.js"),["assets/03_手写组合API.html-ad5c02d7.js","assets/framework-debd98b7.js"])),"v-5cc4fad5":defineAsyncComponent(()=>__vitePreload(()=>import("./04_Composition VS Option.html-28a7e9b6.js"),["assets/04_Composition VS Option.html-28a7e9b6.js","assets/framework-debd98b7.js"])),"v-43bfb81d":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-5d3e81ff.js"),["assets/index.html-5d3e81ff.js","assets/framework-debd98b7.js"])),"v-645cb53f":defineAsyncComponent(()=>__vitePreload(()=>import("./01_新组件.html-e9f2d9fc.js"),["assets/01_新组件.html-e9f2d9fc.js","assets/framework-debd98b7.js"])),"v-69e81a00":defineAsyncComponent(()=>__vitePreload(()=>import("./02_其他新API.html-fba2f52c.js"),["assets/02_其他新API.html-fba2f52c.js","assets/framework-debd98b7.js"])),"v-43bfb83c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-36a4dd1a.js"),["assets/index.html-36a4dd1a.js","assets/framework-debd98b7.js"])),"v-3706649a":defineAsyncComponent(()=>__vitePreload(()=>import("./404.html-1ada95f5.js"),["assets/404.html-1ada95f5.js","assets/framework-debd98b7.js"])),"v-5bc93818":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-2ead2b35.js"),["assets/index.html-2ead2b35.js","assets/framework-debd98b7.js"])),"v-744d024e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-e5dcacbe.js"),["assets/index.html-e5dcacbe.js","assets/framework-debd98b7.js"])),"v-e52c881c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-e5aa3ddf.js"),["assets/index.html-e5aa3ddf.js","assets/framework-debd98b7.js"])),"v-154dc4c4":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-c3834d2a.js"),["assets/index.html-c3834d2a.js","assets/framework-debd98b7.js"])),"v-01560935":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-9f943591.js"),["assets/index.html-9f943591.js","assets/framework-debd98b7.js"])),"v-dc8c5890":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-66818be9.js"),["assets/index.html-66818be9.js","assets/framework-debd98b7.js"])),"v-00725b24":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-d17f5cf6.js"),["assets/index.html-d17f5cf6.js","assets/framework-debd98b7.js"])),"v-b87ca964":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-cca79dec.js"),["assets/index.html-cca79dec.js","assets/framework-debd98b7.js"])),"v-5d93e6df":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-1dc610fd.js"),["assets/index.html-1dc610fd.js","assets/framework-debd98b7.js"])),"v-5831b135":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-dad42d24.js"),["assets/index.html-dad42d24.js","assets/framework-debd98b7.js"])),"v-20e912c0":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-020ae828.js"),["assets/index.html-020ae828.js","assets/framework-debd98b7.js"])),"v-90dbad92":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-74dc0cae.js"),["assets/index.html-74dc0cae.js","assets/framework-debd98b7.js"])),"v-7017fa8c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a236264b.js"),["assets/index.html-a236264b.js","assets/framework-debd98b7.js"])),"v-78cbe7bb":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-4ed261d0.js"),["assets/index.html-4ed261d0.js","assets/framework-debd98b7.js"])),"v-2687e471":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-f13bfae5.js"),["assets/index.html-f13bfae5.js","assets/framework-debd98b7.js"])),"v-5824b700":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-14a954ef.js"),["assets/index.html-14a954ef.js","assets/framework-debd98b7.js"])),"v-1754261e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-014af5cc.js"),["assets/index.html-014af5cc.js","assets/framework-debd98b7.js"])),"v-282f03f4":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-ba98badb.js"),["assets/index.html-ba98badb.js","assets/framework-debd98b7.js"])),"v-b30ee52c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a31d6b37.js"),["assets/index.html-a31d6b37.js","assets/framework-debd98b7.js"])),"v-3d5315f8":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-2ac68e1a.js"),["assets/index.html-2ac68e1a.js","assets/framework-debd98b7.js"])),"v-38e14bad":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-2cf77a8e.js"),["assets/index.html-2cf77a8e.js","assets/framework-debd98b7.js"])),"v-28a1d8bf":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-5a13185d.js"),["assets/index.html-5a13185d.js","assets/framework-debd98b7.js"])),"v-fd3344d8":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-7afbda60.js"),["assets/index.html-7afbda60.js","assets/framework-debd98b7.js"])),"v-b3126996":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-1fc19462.js"),["assets/index.html-1fc19462.js","assets/framework-debd98b7.js"])),"v-65efd6b5":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-ea0ac465.js"),["assets/index.html-ea0ac465.js","assets/framework-debd98b7.js"])),"v-3b951558":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-eb88e3f7.js"),["assets/index.html-eb88e3f7.js","assets/framework-debd98b7.js"])),"v-9c48d85a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-c5e7994a.js"),["assets/index.html-c5e7994a.js","assets/framework-debd98b7.js"])),"v-b30b9cbe":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-17831732.js"),["assets/index.html-17831732.js","assets/framework-debd98b7.js"])),"v-2c049111":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-e2e5fcf7.js"),["assets/index.html-e2e5fcf7.js","assets/framework-debd98b7.js"])),"v-30e11687":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-9bfdf160.js"),["assets/index.html-9bfdf160.js","assets/framework-debd98b7.js"])),"v-6106c001":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-1ffc949e.js"),["assets/index.html-1ffc949e.js","assets/framework-debd98b7.js"])),"v-3d186184":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b2e0616c.js"),["assets/index.html-b2e0616c.js","assets/framework-debd98b7.js"])),"v-15b21a26":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-e40db65f.js"),["assets/index.html-e40db65f.js","assets/framework-debd98b7.js"])),"v-1c4f74a8":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-fc5dc820.js"),["assets/index.html-fc5dc820.js","assets/framework-debd98b7.js"])),"v-245f5676":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-d1fffd61.js"),["assets/index.html-d1fffd61.js","assets/framework-debd98b7.js"])),"v-57d526ca":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-0c7f4351.js"),["assets/index.html-0c7f4351.js","assets/framework-debd98b7.js"])),"v-5616b529":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a2fa0717.js"),["assets/index.html-a2fa0717.js","assets/framework-debd98b7.js"])),"v-83291cc4":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b408fea7.js"),["assets/index.html-b408fea7.js","assets/framework-debd98b7.js"])),"v-0da0d9fd":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-960caeb2.js"),["assets/index.html-960caeb2.js","assets/framework-debd98b7.js"])),"v-80519068":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a1606ca9.js"),["assets/index.html-a1606ca9.js","assets/framework-debd98b7.js"])),"v-59fa8282":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-26294843.js"),["assets/index.html-26294843.js","assets/framework-debd98b7.js"])),"v-91ad3226":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-6a5104f0.js"),["assets/index.html-6a5104f0.js","assets/framework-debd98b7.js"])),"v-41e71c66":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-00d47426.js"),["assets/index.html-00d47426.js","assets/framework-debd98b7.js"])),"v-65f6d381":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-a8df5165.js"),["assets/index.html-a8df5165.js","assets/framework-debd98b7.js"])),"v-7d0ba9b4":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-3c9b8b36.js"),["assets/index.html-3c9b8b36.js","assets/framework-debd98b7.js"])),"v-2894de8a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-cfcb04f1.js"),["assets/index.html-cfcb04f1.js","assets/framework-debd98b7.js"])),"v-22fc0b23":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-9c292adf.js"),["assets/index.html-9c292adf.js","assets/framework-debd98b7.js"])),"v-0ae00356":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-39282450.js"),["assets/index.html-39282450.js","assets/framework-debd98b7.js"])),"v-13770b26":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-5d256b31.js"),["assets/index.html-5d256b31.js","assets/framework-debd98b7.js"])),"v-43c5a647":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-2f46940d.js"),["assets/index.html-2f46940d.js","assets/framework-debd98b7.js"])),"v-37e551c0":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-dc78e592.js"),["assets/index.html-dc78e592.js","assets/framework-debd98b7.js"])),"v-646a7fe3":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b67a24f3.js"),["assets/index.html-b67a24f3.js","assets/framework-debd98b7.js"])),"v-132a6ac4":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-e585a0d0.js"),["assets/index.html-e585a0d0.js","assets/framework-debd98b7.js"])),"v-b310d42a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b69ca8f3.js"),["assets/index.html-b69ca8f3.js","assets/framework-debd98b7.js"])),"v-211f44ee":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-188c2c91.js"),["assets/index.html-188c2c91.js","assets/framework-debd98b7.js"])),"v-bdee03ca":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-d362a014.js"),["assets/index.html-d362a014.js","assets/framework-debd98b7.js"])),"v-721080b6":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-4e5c048b.js"),["assets/index.html-4e5c048b.js","assets/framework-debd98b7.js"])),"v-1e90405c":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-b0a8bb82.js"),["assets/index.html-b0a8bb82.js","assets/framework-debd98b7.js"])),"v-1bee38ca":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-d3e249e9.js"),["assets/index.html-d3e249e9.js","assets/framework-debd98b7.js"])),"v-28639a62":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-645cc2ed.js"),["assets/index.html-645cc2ed.js","assets/framework-debd98b7.js"])),"v-b301ff26":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-2ba88e09.js"),["assets/index.html-2ba88e09.js","assets/framework-debd98b7.js"])),"v-51730494":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-6bd3d30e.js"),["assets/index.html-6bd3d30e.js","assets/framework-debd98b7.js"])),"v-4a89825a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-cffc138f.js"),["assets/index.html-cffc138f.js","assets/framework-debd98b7.js"])),"v-6efec93b":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-9ccb70ca.js"),["assets/index.html-9ccb70ca.js","assets/framework-debd98b7.js"])),"v-b304e574":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-7cf927df.js"),["assets/index.html-7cf927df.js","assets/framework-debd98b7.js"])),"v-2834a796":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-c2e68f21.js"),["assets/index.html-c2e68f21.js","assets/framework-debd98b7.js"])),"v-29610dbf":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-13384c6c.js"),["assets/index.html-13384c6c.js","assets/framework-debd98b7.js"])),"v-742fbe9b":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-f1fd7089.js"),["assets/index.html-f1fd7089.js","assets/framework-debd98b7.js"])),"v-b30ea152":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-62530561.js"),["assets/index.html-62530561.js","assets/framework-debd98b7.js"])),"v-4a1dcd88":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-36047573.js"),["assets/index.html-36047573.js","assets/framework-debd98b7.js"])),"v-0da0b4b1":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-205862b3.js"),["assets/index.html-205862b3.js","assets/framework-debd98b7.js"])),"v-d08dfa36":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-80246731.js"),["assets/index.html-80246731.js","assets/framework-debd98b7.js"])),"v-0da0e901":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-8bf9a956.js"),["assets/index.html-8bf9a956.js","assets/framework-debd98b7.js"])),"v-41ad7530":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-fc054d3e.js"),["assets/index.html-fc054d3e.js","assets/framework-debd98b7.js"])),"v-263d024a":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-5b4475ee.js"),["assets/index.html-5b4475ee.js","assets/framework-debd98b7.js"])),"v-0060d308":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-8f5a9047.js"),["assets/index.html-8f5a9047.js","assets/framework-debd98b7.js"])),"v-0da0e38e":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-5dd35c25.js"),["assets/index.html-5dd35c25.js","assets/framework-debd98b7.js"])),"v-66dcb2b6":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-c483c1bf.js"),["assets/index.html-c483c1bf.js","assets/framework-debd98b7.js"])),"v-4659f144":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-3be88d87.js"),["assets/index.html-3be88d87.js","assets/framework-debd98b7.js"])),"v-28454e54":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-7bc6bb22.js"),["assets/index.html-7bc6bb22.js","assets/framework-debd98b7.js"])),"v-b3149e20":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-59c7f234.js"),["assets/index.html-59c7f234.js","assets/framework-debd98b7.js"])),"v-07ff8958":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-19505477.js"),["assets/index.html-19505477.js","assets/framework-debd98b7.js"])),"v-0527fcfc":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-8cc9bb93.js"),["assets/index.html-8cc9bb93.js","assets/framework-debd98b7.js"])),"v-b31616ba":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-ccf0e5e6.js"),["assets/index.html-ccf0e5e6.js","assets/framework-debd98b7.js"])),"v-2c2dd3f7":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-2107f16d.js"),["assets/index.html-2107f16d.js","assets/framework-debd98b7.js"])),"v-b302da92":defineAsyncComponent(()=>__vitePreload(()=>import("./index.html-7d12af75.js"),["assets/index.html-7d12af75.js","assets/framework-debd98b7.js"]))};var layoutsSymbol=Symbol(""),pagesData=ref(pagesData$1),pageDataEmpty=readonly({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),pageData=ref(pageDataEmpty),usePageData=()=>pageData,pageFrontmatterSymbol=Symbol(""),usePageFrontmatter=()=>{const b=inject(pageFrontmatterSymbol);if(!b)throw new Error("usePageFrontmatter() is called without provider.");return b},pageHeadSymbol=Symbol(""),usePageHead=()=>{const b=inject(pageHeadSymbol);if(!b)throw new Error("usePageHead() is called without provider.");return b},pageHeadTitleSymbol=Symbol(""),usePageHeadTitle=()=>{const b=inject(pageHeadTitleSymbol);if(!b)throw new Error("usePageHeadTitle() is called without provider.");return b},pageLangSymbol=Symbol(""),usePageLang=()=>{const b=inject(pageLangSymbol);if(!b)throw new Error("usePageLang() is called without provider.");return b},pageLayoutSymbol=Symbol(""),usePageLayout=()=>{const b=inject(pageLayoutSymbol);if(!b)throw new Error("usePageLayout() is called without provider.");return b},routeLocaleSymbol=Symbol(""),useRouteLocale=()=>{const b=inject(routeLocaleSymbol);if(!b)throw new Error("useRouteLocale() is called without provider.");return b},siteData=ref(siteData$1),useSiteData=()=>siteData,siteLocaleDataSymbol=Symbol(""),useSiteLocaleData=()=>{const b=inject(siteLocaleDataSymbol);if(!b)throw new Error("useSiteLocaleData() is called without provider.");return b},updateHeadSymbol=Symbol(""),LAYOUT_NAME_DEFAULT="Layout",LAYOUT_NAME_NOT_FOUND="NotFound",resolvers=reactive({resolveLayouts:b=>b.reduce(($,j)=>({...$,...j.layouts}),{}),resolvePageData:async b=>{const $=pagesData.value[b];return await($==null?void 0:$())??pageDataEmpty},resolvePageFrontmatter:b=>b.frontmatter,resolvePageHead:(b,$,j)=>{const U=isString$1($.description)?$.description:j.description,G=[...isArray($.head)?$.head:[],...j.head,["title",{},b],["meta",{name:"description",content:U}]];return dedupeHead(G)},resolvePageHeadTitle:(b,$)=>[b.title,$.title].filter(j=>!!j).join(" | "),resolvePageLang:b=>b.lang||"en",resolvePageLayout:(b,$)=>{let j;if(b.path){const U=b.frontmatter.layout;isString$1(U)?j=U:j=LAYOUT_NAME_DEFAULT}else j=LAYOUT_NAME_NOT_FOUND;return $[j]},resolveRouteLocale:(b,$)=>resolveLocalePath(b,$),resolveSiteLocaleData:(b,$)=>({...b,...b.locales[$]})}),ClientOnly=defineComponent({name:"ClientOnly",setup(b,$){const j=ref(!1);return onMounted(()=>{j.value=!0}),()=>{var U,G;return j.value?(G=(U=$.slots).default)==null?void 0:G.call(U):null}}}),Content=defineComponent({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(b){const $=usePageData(),j=computed(()=>pagesComponents[b.pageKey||$.value.key]);return()=>j.value?h$3(j.value):h$3("div","404 Not Found")}}),defineClientConfig=(b={})=>b,withBase=b=>isLinkHttp(b)?b:`/${removeLeadingSlash(b)}`;const hopeInject="",clientConfig0={};var u8=Uint8Array,u16=Uint16Array,u32=Uint32Array,fleb=new u8([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),fdeb=new u8([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),clim=new u8([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),freb=function(b,$){for(var j=new u16(31),U=0;U<31;++U)j[U]=$+=1<<b[U-1];for(var G=new u32(j[30]),U=1;U<30;++U)for(var W=j[U];W<j[U+1];++W)G[W]=W-j[U]<<5|U;return[j,G]},_a$1=freb(fleb,2),fl=_a$1[0],revfl=_a$1[1];fl[28]=258,revfl[258]=28;var _b=freb(fdeb,0),fd=_b[0],rev=new u16(32768);for(var i$1=0;i$1<32768;++i$1){var x$3=(i$1&43690)>>>1|(i$1&21845)<<1;x$3=(x$3&52428)>>>2|(x$3&13107)<<2,x$3=(x$3&61680)>>>4|(x$3&3855)<<4,rev[i$1]=((x$3&65280)>>>8|(x$3&255)<<8)>>>1}var hMap=function(b,$,j){for(var U=b.length,G=0,W=new u16($);G<U;++G)b[G]&&++W[b[G]-1];var K=new u16($);for(G=0;G<$;++G)K[G]=K[G-1]+W[G-1]<<1;var Y;if(j){Y=new u16(1<<$);var ee=15-$;for(G=0;G<U;++G)if(b[G])for(var ne=G<<4|b[G],ae=$-b[G],oe=K[b[G]-1]++<<ae,ie=oe|(1<<ae)-1;oe<=ie;++oe)Y[rev[oe]>>>ee]=ne}else for(Y=new u16(U),G=0;G<U;++G)b[G]&&(Y[G]=rev[K[b[G]-1]++]>>>15-b[G]);return Y},flt=new u8(288);for(var i$1=0;i$1<144;++i$1)flt[i$1]=8;for(var i$1=144;i$1<256;++i$1)flt[i$1]=9;for(var i$1=256;i$1<280;++i$1)flt[i$1]=7;for(var i$1=280;i$1<288;++i$1)flt[i$1]=8;var fdt=new u8(32);for(var i$1=0;i$1<32;++i$1)fdt[i$1]=5;var flrm=hMap(flt,9,1),fdrm=hMap(fdt,5,1),max=function(b){for(var $=b[0],j=1;j<b.length;++j)b[j]>$&&($=b[j]);return $},bits=function(b,$,j){var U=$/8|0;return(b[U]|b[U+1]<<8)>>($&7)&j},bits16=function(b,$){var j=$/8|0;return(b[j]|b[j+1]<<8|b[j+2]<<16)>>($&7)},shft=function(b){return(b+7)/8|0},slc=function(b,$,j){($==null||$<0)&&($=0),(j==null||j>b.length)&&(j=b.length);var U=new(b.BYTES_PER_ELEMENT==2?u16:b.BYTES_PER_ELEMENT==4?u32:u8)(j-$);return U.set(b.subarray($,j)),U},ec=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],err=function(b,$,j){var U=new Error($||ec[b]);if(U.code=b,Error.captureStackTrace&&Error.captureStackTrace(U,err),!j)throw U;return U},inflt=function(b,$,j){var U=b.length;if(!U||j&&j.f&&!j.l)return $||new u8(0);var G=!$||j,W=!j||j.i;j||(j={}),$||($=new u8(U*3));var K=function(Fe){var $e=$.length;if(Fe>$e){var Re=new u8(Math.max($e*2,Fe));Re.set($),$=Re}},Y=j.f||0,ee=j.p||0,ne=j.b||0,ae=j.l,oe=j.d,ie=j.m,se=j.n,re=U*8;do{if(!ae){Y=bits(b,ee,1);var le=bits(b,ee+1,3);if(ee+=3,le)if(le==1)ae=flrm,oe=fdrm,ie=9,se=5;else if(le==2){var _e=bits(b,ee,31)+257,Pe=bits(b,ee+10,15)+4,we=_e+bits(b,ee+5,31)+1;ee+=14;for(var he=new u8(we),ce=new u8(19),fe=0;fe<Pe;++fe)ce[clim[fe]]=bits(b,ee+fe*3,7);ee+=Pe*3;for(var ke=max(ce),Be=(1<<ke)-1,Se=hMap(ce,ke,1),fe=0;fe<we;){var Ve=Se[bits(b,ee,Be)];ee+=Ve&15;var pe=Ve>>>4;if(pe<16)he[fe++]=pe;else{var be=0,ue=0;for(pe==16?(ue=3+bits(b,ee,3),ee+=2,be=he[fe-1]):pe==17?(ue=3+bits(b,ee,7),ee+=3):pe==18&&(ue=11+bits(b,ee,127),ee+=7);ue--;)he[fe++]=be}}var de=he.subarray(0,_e),ge=he.subarray(_e);ie=max(de),se=max(ge),ae=hMap(de,ie,1),oe=hMap(ge,se,1)}else err(1);else{var pe=shft(ee)+4,me=b[pe-4]|b[pe-3]<<8,Ee=pe+me;if(Ee>U){W&&err(0);break}G&&K(ne+me),$.set(b.subarray(pe,Ee),ne),j.b=ne+=me,j.p=ee=Ee*8,j.f=Y;continue}if(ee>re){W&&err(0);break}}G&&K(ne+131072);for(var ve=(1<<ie)-1,ye=(1<<se)-1,Ae=ee;;Ae=ee){var be=ae[bits16(b,ee)&ve],xe=be>>>4;if(ee+=be&15,ee>re){W&&err(0);break}if(be||err(2),xe<256)$[ne++]=xe;else if(xe==256){Ae=ee,ae=null;break}else{var Ce=xe-254;if(xe>264){var fe=xe-257,De=fleb[fe];Ce=bits(b,ee,(1<<De)-1)+fl[fe],ee+=De}var Te=oe[bits16(b,ee)&ye],Le=Te>>>4;Te||err(3),ee+=Te&15;var ge=fd[Le];if(Le>3){var De=fdeb[Le];ge+=bits16(b,ee)&(1<<De)-1,ee+=De}if(ee>re){W&&err(0);break}G&&K(ne+131072);for(var Oe=ne+Ce;ne<Oe;ne+=4)$[ne]=$[ne-ge],$[ne+1]=$[ne+1-ge],$[ne+2]=$[ne+2-ge],$[ne+3]=$[ne+3-ge];ne=Oe}}j.l=ae,j.p=Ae,j.b=ne,j.f=Y,ae&&(Y=1,j.m=ie,j.d=oe,j.n=se)}while(!Y);return ne==$.length?$:slc($,0,ne)},et$1=new u8(0),zlv=function(b){((b[0]&15)!=8||b[0]>>>4>7||(b[0]<<8|b[1])%31)&&err(6,"invalid zlib data"),b[1]&32&&err(6,"invalid zlib data: preset dictionaries not supported")};function unzlibSync(b,$){return inflt((zlv(b),b.subarray(2,-4)),$)}var te=typeof TextEncoder<"u"&&new TextEncoder,td=typeof TextDecoder<"u"&&new TextDecoder,tds=0;try{td.decode(et$1,{stream:!0}),tds=1}catch{}var dutf8=function(b){for(var $="",j=0;;){var U=b[j++],G=(U>127)+(U>223)+(U>239);if(j+G>b.length)return[$,slc(b,j-1)];G?G==3?(U=((U&15)<<18|(b[j++]&63)<<12|(b[j++]&63)<<6|b[j++]&63)-65536,$+=String.fromCharCode(55296|U>>10,56320|U&1023)):G&1?$+=String.fromCharCode((U&31)<<6|b[j++]&63):$+=String.fromCharCode((U&15)<<12|(b[j++]&63)<<6|b[j++]&63):$+=String.fromCharCode(U)}};function strToU8(b,$){if($){for(var j=new u8(b.length),U=0;U<b.length;++U)j[U]=b.charCodeAt(U);return j}if(te)return te.encode(b);for(var G=b.length,W=new u8(b.length+(b.length>>1)),K=0,Y=function(ae){W[K++]=ae},U=0;U<G;++U){if(K+5>W.length){var ee=new u8(K+8+(G-U<<1));ee.set(W),W=ee}var ne=b.charCodeAt(U);ne<128||$?Y(ne):ne<2048?(Y(192|ne>>6),Y(128|ne&63)):ne>55295&&ne<57344?(ne=65536+(ne&1023<<10)|b.charCodeAt(++U)&1023,Y(240|ne>>18),Y(128|ne>>12&63),Y(128|ne>>6&63),Y(128|ne&63)):(Y(224|ne>>12),Y(128|ne>>6&63),Y(128|ne&63))}return slc(W,0,K)}function strFromU8(b,$){if($){for(var j="",U=0;U<b.length;U+=16384)j+=String.fromCharCode.apply(null,b.subarray(U,U+16384));return j}else{if(td)return td.decode(b);var G=dutf8(b),W=G[0],K=G[1];return K.length&&err(8),W}}const lt=({name:b="",color:$="currentColor"},{slots:j})=>{var U;return h$3("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${b}-icon`],viewBox:"0 0 1024 1024",fill:$,"aria-label":`${b} icon`},(U=j.default)==null?void 0:U.call(j))};lt.displayName="IconBase";const Mt=(b,{slots:$})=>{var j;return((j=$.default)==null?void 0:j.call($))||null},xt=(b,$)=>{const j=$?$._instance:getCurrentInstance();return isPlainObject(j==null?void 0:j.appContext.components)&&(b in j.appContext.components||camelize(b)in j.appContext.components||capitalize(camelize(b))in j.appContext.components)},Ot=b=>{const $=useRouteLocale();return computed(()=>b[$.value])},Ct=b=>/\b(?:Android|iPhone)/i.test(b),jt=(b,$)=>{let j=1;for(let U=0;U<b.length;U++)j+=b.charCodeAt(U),j+=j<<10,j^=j>>6;return j+=j<<3,j^=j>>11,j%$};class Lt{constructor(){this.messageElements={};const $="message-container",j=document.getElementById($);j?this.containerElement=j:(this.containerElement=document.createElement("div"),this.containerElement.id=$,document.body.appendChild(this.containerElement))}pop($,j=2e3){const U=document.createElement("div"),G=Date.now();return U.className="message move-in",U.innerHTML=$,this.containerElement.appendChild(U),this.messageElements[G]=U,j>0&&setTimeout(()=>{this.close(G)},j),G}close($){if($){const j=this.messageElements[$];j.className=j.className.replace("move-in",""),j.className+="move-out",j.addEventListener("animationend",()=>{j.remove(),delete this.messageElements[$]})}else Object.keys(this.messageElements).forEach(j=>this.close(Number(j)))}destroy(){document.body.removeChild(this.containerElement)}}const dt=/#.*$/u,mt=b=>{const $=dt.exec(b);return $?$[0]:""},X=b=>decodeURI(b).replace(dt,"").replace(/(index)?\.(md|html)$/,""),At=(b,$)=>{if($===void 0)return!1;const j=X(b.path),U=X($),G=mt($);return G?G===b.hash&&(!U||j===U):j===U},Wt=b=>{const $=atob(b);return strFromU8(unzlibSync(strToU8($,!0)))},vt=(b,...$)=>{const j=b.resolve(...$),U=j.matched[j.matched.length-1];if(!(U!=null&&U.redirect))return j;const{redirect:G}=U,W=isFunction$1(G)?G(j):G,K=isString$1(W)?{path:W}:W;return vt(b,{hash:j.hash,query:j.query,params:j.params,...K})};var Q$1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},tt={},Pt={get exports(){return tt},set exports(b){tt=b}};(function(b,$){(function(j,U){b.exports=U()})(Q$1,function(){var j=1e3,U=6e4,G=36e5,W="millisecond",K="second",Y="minute",ee="hour",ne="day",ae="week",oe="month",ie="quarter",se="year",re="date",le="Invalid Date",pe=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,me=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,Ee={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(be){var ue=["th","st","nd","rd"],de=be%100;return"["+be+(ue[(de-20)%10]||ue[de]||ue[0])+"]"}},_e=function(be,ue,de){var ge=String(be);return!ge||ge.length>=ue?be:""+Array(ue+1-ge.length).join(de)+be},Pe={s:_e,z:function(be){var ue=-be.utcOffset(),de=Math.abs(ue),ge=Math.floor(de/60),ve=de%60;return(ue<=0?"+":"-")+_e(ge,2,"0")+":"+_e(ve,2,"0")},m:function be(ue,de){if(ue.date()<de.date())return-be(de,ue);var ge=12*(de.year()-ue.year())+(de.month()-ue.month()),ve=ue.clone().add(ge,oe),ye=de-ve<0,Ae=ue.clone().add(ge+(ye?-1:1),oe);return+(-(ge+(de-ve)/(ye?ve-Ae:Ae-ve))||0)},a:function(be){return be<0?Math.ceil(be)||0:Math.floor(be)},p:function(be){return{M:oe,y:se,w:ae,d:ne,D:re,h:ee,m:Y,s:K,ms:W,Q:ie}[be]||String(be||"").toLowerCase().replace(/s$/,"")},u:function(be){return be===void 0}},we="en",he={};he[we]=Ee;var ce=function(be){return be instanceof Se},fe=function be(ue,de,ge){var ve;if(!ue)return we;if(typeof ue=="string"){var ye=ue.toLowerCase();he[ye]&&(ve=ye),de&&(he[ye]=de,ve=ye);var Ae=ue.split("-");if(!ve&&Ae.length>1)return be(Ae[0])}else{var xe=ue.name;he[xe]=ue,ve=xe}return!ge&&ve&&(we=ve),ve||!ge&&we},ke=function(be,ue){if(ce(be))return be.clone();var de=typeof ue=="object"?ue:{};return de.date=be,de.args=arguments,new Se(de)},Be=Pe;Be.l=fe,Be.i=ce,Be.w=function(be,ue){return ke(be,{locale:ue.$L,utc:ue.$u,x:ue.$x,$offset:ue.$offset})};var Se=function(){function be(de){this.$L=fe(de.locale,null,!0),this.parse(de)}var ue=be.prototype;return ue.parse=function(de){this.$d=function(ge){var ve=ge.date,ye=ge.utc;if(ve===null)return new Date(NaN);if(Be.u(ve))return new Date;if(ve instanceof Date)return new Date(ve);if(typeof ve=="string"&&!/Z$/i.test(ve)){var Ae=ve.match(pe);if(Ae){var xe=Ae[2]-1||0,Ce=(Ae[7]||"0").substring(0,3);return ye?new Date(Date.UTC(Ae[1],xe,Ae[3]||1,Ae[4]||0,Ae[5]||0,Ae[6]||0,Ce)):new Date(Ae[1],xe,Ae[3]||1,Ae[4]||0,Ae[5]||0,Ae[6]||0,Ce)}}return new Date(ve)}(de),this.$x=de.x||{},this.init()},ue.init=function(){var de=this.$d;this.$y=de.getFullYear(),this.$M=de.getMonth(),this.$D=de.getDate(),this.$W=de.getDay(),this.$H=de.getHours(),this.$m=de.getMinutes(),this.$s=de.getSeconds(),this.$ms=de.getMilliseconds()},ue.$utils=function(){return Be},ue.isValid=function(){return this.$d.toString()!==le},ue.isSame=function(de,ge){var ve=ke(de);return this.startOf(ge)<=ve&&ve<=this.endOf(ge)},ue.isAfter=function(de,ge){return ke(de)<this.startOf(ge)},ue.isBefore=function(de,ge){return this.endOf(ge)<ke(de)},ue.$g=function(de,ge,ve){return Be.u(de)?this[ge]:this.set(ve,de)},ue.unix=function(){return Math.floor(this.valueOf()/1e3)},ue.valueOf=function(){return this.$d.getTime()},ue.startOf=function(de,ge){var ve=this,ye=!!Be.u(ge)||ge,Ae=Be.p(de),xe=function(Re,Ie){var Me=Be.w(ve.$u?Date.UTC(ve.$y,Ie,Re):new Date(ve.$y,Ie,Re),ve);return ye?Me:Me.endOf(ne)},Ce=function(Re,Ie){return Be.w(ve.toDate()[Re].apply(ve.toDate("s"),(ye?[0,0,0,0]:[23,59,59,999]).slice(Ie)),ve)},De=this.$W,Te=this.$M,Le=this.$D,Oe="set"+(this.$u?"UTC":"");switch(Ae){case se:return ye?xe(1,0):xe(31,11);case oe:return ye?xe(1,Te):xe(0,Te+1);case ae:var Fe=this.$locale().weekStart||0,$e=(De<Fe?De+7:De)-Fe;return xe(ye?Le-$e:Le+(6-$e),Te);case ne:case re:return Ce(Oe+"Hours",0);case ee:return Ce(Oe+"Minutes",1);case Y:return Ce(Oe+"Seconds",2);case K:return Ce(Oe+"Milliseconds",3);default:return this.clone()}},ue.endOf=function(de){return this.startOf(de,!1)},ue.$set=function(de,ge){var ve,ye=Be.p(de),Ae="set"+(this.$u?"UTC":""),xe=(ve={},ve[ne]=Ae+"Date",ve[re]=Ae+"Date",ve[oe]=Ae+"Month",ve[se]=Ae+"FullYear",ve[ee]=Ae+"Hours",ve[Y]=Ae+"Minutes",ve[K]=Ae+"Seconds",ve[W]=Ae+"Milliseconds",ve)[ye],Ce=ye===ne?this.$D+(ge-this.$W):ge;if(ye===oe||ye===se){var De=this.clone().set(re,1);De.$d[xe](Ce),De.init(),this.$d=De.set(re,Math.min(this.$D,De.daysInMonth())).$d}else xe&&this.$d[xe](Ce);return this.init(),this},ue.set=function(de,ge){return this.clone().$set(de,ge)},ue.get=function(de){return this[Be.p(de)]()},ue.add=function(de,ge){var ve,ye=this;de=Number(de);var Ae=Be.p(ge),xe=function(Te){var Le=ke(ye);return Be.w(Le.date(Le.date()+Math.round(Te*de)),ye)};if(Ae===oe)return this.set(oe,this.$M+de);if(Ae===se)return this.set(se,this.$y+de);if(Ae===ne)return xe(1);if(Ae===ae)return xe(7);var Ce=(ve={},ve[Y]=U,ve[ee]=G,ve[K]=j,ve)[Ae]||1,De=this.$d.getTime()+de*Ce;return Be.w(De,this)},ue.subtract=function(de,ge){return this.add(-1*de,ge)},ue.format=function(de){var ge=this,ve=this.$locale();if(!this.isValid())return ve.invalidDate||le;var ye=de||"YYYY-MM-DDTHH:mm:ssZ",Ae=Be.z(this),xe=this.$H,Ce=this.$m,De=this.$M,Te=ve.weekdays,Le=ve.months,Oe=function(Ie,Me,je,ze){return Ie&&(Ie[Me]||Ie(ge,ye))||je[Me].slice(0,ze)},Fe=function(Ie){return Be.s(xe%12||12,Ie,"0")},$e=ve.meridiem||function(Ie,Me,je){var ze=Ie<12?"AM":"PM";return je?ze.toLowerCase():ze},Re={YY:String(this.$y).slice(-2),YYYY:this.$y,M:De+1,MM:Be.s(De+1,2,"0"),MMM:Oe(ve.monthsShort,De,Le,3),MMMM:Oe(Le,De),D:this.$D,DD:Be.s(this.$D,2,"0"),d:String(this.$W),dd:Oe(ve.weekdaysMin,this.$W,Te,2),ddd:Oe(ve.weekdaysShort,this.$W,Te,3),dddd:Te[this.$W],H:String(xe),HH:Be.s(xe,2,"0"),h:Fe(1),hh:Fe(2),a:$e(xe,Ce,!0),A:$e(xe,Ce,!1),m:String(Ce),mm:Be.s(Ce,2,"0"),s:String(this.$s),ss:Be.s(this.$s,2,"0"),SSS:Be.s(this.$ms,3,"0"),Z:Ae};return ye.replace(me,function(Ie,Me){return Me||Re[Ie]||Ae.replace(":","")})},ue.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},ue.diff=function(de,ge,ve){var ye,Ae=Be.p(ge),xe=ke(de),Ce=(xe.utcOffset()-this.utcOffset())*U,De=this-xe,Te=Be.m(this,xe);return Te=(ye={},ye[se]=Te/12,ye[oe]=Te,ye[ie]=Te/3,ye[ae]=(De-Ce)/6048e5,ye[ne]=(De-Ce)/864e5,ye[ee]=De/G,ye[Y]=De/U,ye[K]=De/j,ye)[Ae]||De,ve?Te:Be.a(Te)},ue.daysInMonth=function(){return this.endOf(oe).$D},ue.$locale=function(){return he[this.$L]},ue.locale=function(de,ge){if(!de)return this.$L;var ve=this.clone(),ye=fe(de,ge,!0);return ye&&(ve.$L=ye),ve},ue.clone=function(){return Be.w(this.$d,this)},ue.toDate=function(){return new Date(this.valueOf())},ue.toJSON=function(){return this.isValid()?this.toISOString():null},ue.toISOString=function(){return this.$d.toISOString()},ue.toString=function(){return this.$d.toUTCString()},be}(),Ve=Se.prototype;return ke.prototype=Ve,[["$ms",W],["$s",K],["$m",Y],["$H",ee],["$W",ne],["$M",oe],["$y",se],["$D",re]].forEach(function(be){Ve[be[1]]=function(ue){return this.$g(ue,be[0],be[1])}}),ke.extend=function(be,ue){return be.$i||(be(ue,Se,ke),be.$i=!0),ke},ke.locale=fe,ke.isDayjs=ce,ke.unix=function(be){return ke(1e3*be)},ke.en=he[we],ke.Ls=he,ke.p={},ke})})(Pt);var Z=tt,et={},Zt={get exports(){return et},set exports(b){et=b}};(function(b,$){(function(j,U){b.exports=U()})(Q$1,function(){return function(j,U,G){var W=U.prototype,K=function(ie){var se,re=ie.date,le=ie.utc,pe={};if(!((se=re)instanceof Date||se instanceof Array||W.$utils().u(se)||se.constructor.name!=="Object")){if(!Object.keys(re).length)return new Date;var me=le?G.utc():G();Object.keys(re).forEach(function(ke){var Be,Se;pe[Be=ke,Se=W.$utils().p(Be),Se==="date"?"day":Se]=re[ke]});var Ee=pe.day||(pe.year||pe.month>=0?1:me.date()),_e=pe.year||me.year(),Pe=pe.month>=0?pe.month:pe.year||pe.day?0:me.month(),we=pe.hour||0,he=pe.minute||0,ce=pe.second||0,fe=pe.millisecond||0;return le?new Date(Date.UTC(_e,Pe,Ee,we,he,ce,fe)):new Date(_e,Pe,Ee,we,he,ce,fe)}return re},Y=W.parse;W.parse=function(ie){ie.date=K.bind(this)(ie),Y.bind(this)(ie)};var ee=W.set,ne=W.add,ae=W.subtract,oe=function(ie,se,re,le){le===void 0&&(le=1);var pe=Object.keys(se),me=this;return pe.forEach(function(Ee){me=ie.bind(me)(se[Ee]*le,Ee)}),me};W.set=function(ie,se){return se=se===void 0?ie:se,ie.constructor.name==="Object"?oe.bind(this)(function(re,le){return ee.bind(this)(le,re)},se,ie):ee.bind(this)(ie,se)},W.add=function(ie,se){return ie.constructor.name==="Object"?oe.bind(this)(ne,ie,se):ne.bind(this)(ie,se)},W.subtract=function(ie,se){return ie.constructor.name==="Object"?oe.bind(this)(ne,ie,se,-1):ae.bind(this)(ie,se)}}})})(Zt);var Ft=et,nt={},Rt={get exports(){return nt},set exports(b){nt=b}};(function(b,$){(function(j,U){b.exports=U()})(Q$1,function(){var j={year:0,month:1,day:2,hour:3,minute:4,second:5},U={};return function(G,W,K){var Y,ee=function(ie,se,re){re===void 0&&(re={});var le=new Date(ie),pe=function(me,Ee){Ee===void 0&&(Ee={});var _e=Ee.timeZoneName||"short",Pe=me+"|"+_e,we=U[Pe];return we||(we=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:me,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:_e}),U[Pe]=we),we}(se,re);return pe.formatToParts(le)},ne=function(ie,se){for(var re=ee(ie,se),le=[],pe=0;pe<re.length;pe+=1){var me=re[pe],Ee=me.type,_e=me.value,Pe=j[Ee];Pe>=0&&(le[Pe]=parseInt(_e,10))}var we=le[3],he=we===24?0:we,ce=le[0]+"-"+le[1]+"-"+le[2]+" "+he+":"+le[4]+":"+le[5]+":000",fe=+ie;return(K.utc(ce).valueOf()-(fe-=fe%1e3))/6e4},ae=W.prototype;ae.tz=function(ie,se){ie===void 0&&(ie=Y);var re=this.utcOffset(),le=this.toDate(),pe=le.toLocaleString("en-US",{timeZone:ie}),me=Math.round((le-new Date(pe))/1e3/60),Ee=K(pe).$set("millisecond",this.$ms).utcOffset(15*-Math.round(le.getTimezoneOffset()/15)-me,!0);if(se){var _e=Ee.utcOffset();Ee=Ee.add(re-_e,"minute")}return Ee.$x.$timezone=ie,Ee},ae.offsetName=function(ie){var se=this.$x.$timezone||K.tz.guess(),re=ee(this.valueOf(),se,{timeZoneName:ie}).find(function(le){return le.type.toLowerCase()==="timezonename"});return re&&re.value};var oe=ae.startOf;ae.startOf=function(ie,se){if(!this.$x||!this.$x.$timezone)return oe.call(this,ie,se);var re=K(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return oe.call(re,ie,se).tz(this.$x.$timezone,!0)},K.tz=function(ie,se,re){var le=re&&se,pe=re||se||Y,me=ne(+K(),pe);if(typeof ie!="string")return K(ie).tz(pe);var Ee=function(he,ce,fe){var ke=he-60*ce*1e3,Be=ne(ke,fe);if(ce===Be)return[ke,ce];var Se=ne(ke-=60*(Be-ce)*1e3,fe);return Be===Se?[ke,Be]:[he-60*Math.min(Be,Se)*1e3,Math.max(Be,Se)]}(K.utc(ie,le).valueOf(),me,pe),_e=Ee[0],Pe=Ee[1],we=K(_e).utcOffset(Pe);return we.$x.$timezone=pe,we},K.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},K.tz.setDefault=function(ie){Y=ie}}})})(Rt);var Bt=nt,it={},Vt={get exports(){return it},set exports(b){it=b}};(function(b,$){(function(j,U){b.exports=U()})(Q$1,function(){var j="minute",U=/[+-]\d\d(?::?\d\d)?/g,G=/([+-]|\d\d)/g;return function(W,K,Y){var ee=K.prototype;Y.utc=function(le){var pe={date:le,utc:!0,args:arguments};return new K(pe)},ee.utc=function(le){var pe=Y(this.toDate(),{locale:this.$L,utc:!0});return le?pe.add(this.utcOffset(),j):pe},ee.local=function(){return Y(this.toDate(),{locale:this.$L,utc:!1})};var ne=ee.parse;ee.parse=function(le){le.utc&&(this.$u=!0),this.$utils().u(le.$offset)||(this.$offset=le.$offset),ne.call(this,le)};var ae=ee.init;ee.init=function(){if(this.$u){var le=this.$d;this.$y=le.getUTCFullYear(),this.$M=le.getUTCMonth(),this.$D=le.getUTCDate(),this.$W=le.getUTCDay(),this.$H=le.getUTCHours(),this.$m=le.getUTCMinutes(),this.$s=le.getUTCSeconds(),this.$ms=le.getUTCMilliseconds()}else ae.call(this)};var oe=ee.utcOffset;ee.utcOffset=function(le,pe){var me=this.$utils().u;if(me(le))return this.$u?0:me(this.$offset)?oe.call(this):this.$offset;if(typeof le=="string"&&(le=function(we){we===void 0&&(we="");var he=we.match(U);if(!he)return null;var ce=(""+he[0]).match(G)||["-",0,0],fe=ce[0],ke=60*+ce[1]+ +ce[2];return ke===0?0:fe==="+"?ke:-ke}(le),le===null))return this;var Ee=Math.abs(le)<=16?60*le:le,_e=this;if(pe)return _e.$offset=Ee,_e.$u=le===0,_e;if(le!==0){var Pe=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(_e=this.local().add(Ee+Pe,j)).$offset=Ee,_e.$x.$localOffset=Pe}else _e=this.utc();return _e};var ie=ee.format;ee.format=function(le){var pe=le||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return ie.call(this,pe)},ee.valueOf=function(){var le=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*le},ee.isUTC=function(){return!!this.$u},ee.toISOString=function(){return this.toDate().toISOString()},ee.toString=function(){return this.toDate().toUTCString()};var se=ee.toDate;ee.toDate=function(le){return le==="s"&&this.$offset?Y(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():se.call(this)};var re=ee.diff;ee.diff=function(le,pe,me){if(le&&this.$u===le.$u)return re.call(this,le,pe,me);var Ee=this.local(),_e=Y(le).local();return re.call(Ee,_e,pe,me)}}})})(Vt);var Jt=it;Z.extend(Ft),Z.extend(Jt),Z.extend(Bt);const rt=(b,$)=>{if(b){if(Z(b instanceof Date?b:b.trim()).isValid()){const U=$?Z(b).tz($):Z(b),G=U.year(),W=U.month()+1,K=U.date(),Y=U.hour(),ee=U.minute(),ne=U.second(),ae=U.millisecond(),oe=Y===0&&ee===0&&ne===0&&ae===0;return{value:U.toDate(),info:{year:G,month:W,day:K,...oe?{}:{hour:Y,minute:ee,second:ne}},type:oe?"date":"full"}}const j=/(?:(\d{2,4})[/-](\d{1,2})[/-](\d{1,2}))?\s*(?:(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/u.exec(b.trim());if(j){const[,U,G,W,K,Y,ee]=j,ne=pe=>typeof pe>"u"?void 0:Number(pe),ae=pe=>pe&&pe<100?pe+2e3:pe,oe=pe=>K&&Y&&!ee?0:pe,ie={year:ae(ne(U)),month:ne(G),day:ne(W),hour:ne(K),minute:ne(Y),second:oe(ne(ee))},se=U===void 0&&G===void 0&&W===void 0,re=K===void 0&&Y===void 0&&ee===void 0,le=Z({...ie,month:ie.month-1}).toDate();return{value:se?void 0:le,info:re?{year:ie.year,month:ie.month,day:ie.day}:se?{hour:ie.hour,minute:ie.minute,second:ie.second}:ie,type:se?"time":re?"date":"full"}}}return null},st=(b,...$)=>{if($.length===0)return b;const j=$.shift()||{};return Object.keys(j).forEach(U=>{isPlainObject(b[U])&&!isArray(b[U])&&isPlainObject(j[U])&&!isArray(j[U])?st(b[U],j[U]):isPlainObject(j[U])?isArray(j[U])?b[U]=[...j[U]]:b[U]={...j[U]}:b[U]=j[U]}),st(b,...$)},Gt=(b,$=!1)=>b?isArray(b)?b.map(j=>isString$1(j)?{name:j}:j):isString$1(b)?[{name:b}]:isPlainObject(b)&&b.name?[b]:(console.error(`Expect 'author' to be \`AuthorInfo[] | AuthorInfo | string[] | string ${$?"":"| false"} | undefined\`, but got`,b),[]):[],ot=(b,$)=>{if(b){if(isArray(b))return b;if(isString$1(b))return[b];console.error(`Expect ${$||"value"} to be \`string[] | string | undefined\`, but got`,b)}return[]},Qt=b=>ot(b,"category"),Kt=b=>ot(b,"tag");var _a;const isClient=typeof window<"u",isFunction=b=>typeof b=="function",isString=b=>typeof b=="string",noop=()=>{};isClient&&((_a=window==null?void 0:window.navigator)!=null&&_a.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function resolveUnref(b){return typeof b=="function"?b():unref(b)}function createFilterWrapper(b,$){function j(...U){return new Promise((G,W)=>{Promise.resolve(b(()=>$.apply(this,U),{fn:$,thisArg:this,args:U})).then(G).catch(W)})}return j}const bypassFilter=b=>b();function debounceFilter(b,$={}){let j,U,G=noop;const W=Y=>{clearTimeout(Y),G(),G=noop};return Y=>{const ee=resolveUnref(b),ne=resolveUnref($.maxWait);return j&&W(j),ee<=0||ne!==void 0&&ne<=0?(U&&(W(U),U=null),Promise.resolve(Y())):new Promise((ae,oe)=>{G=$.rejectOnCancel?oe:ae,ne&&!U&&(U=setTimeout(()=>{j&&W(j),U=null,ae(Y())},ne)),j=setTimeout(()=>{U&&W(U),U=null,ae(Y())},ee)})}}function throttleFilter(b,$=!0,j=!0,U=!1){let G=0,W,K=!0,Y=noop,ee;const ne=()=>{W&&(clearTimeout(W),W=void 0,Y(),Y=noop)};return oe=>{const ie=resolveUnref(b),se=Date.now()-G,re=()=>ee=oe();if(ne(),ie<=0)return G=Date.now(),re();if(se>ie&&(j||!K))G=Date.now(),re();else if($)return new Promise((le,pe)=>{Y=U?pe:le,W=setTimeout(()=>{G=Date.now(),K=!0,le(re()),ne()},ie-se)});return!j&&!W&&(W=setTimeout(()=>K=!0,ie)),K=!1,ee}}function pausableFilter(b=bypassFilter){const $=ref(!0);function j(){$.value=!1}function U(){$.value=!0}return{isActive:$,pause:j,resume:U,eventFilter:(...W)=>{$.value&&b(...W)}}}function identity(b){return b}function tryOnScopeDispose(b){return getCurrentScope()?(onScopeDispose(b),!0):!1}function useDebounceFn(b,$=200,j={}){return createFilterWrapper(debounceFilter($,j),b)}function useThrottleFn(b,$=200,j=!1,U=!0,G=!1){return createFilterWrapper(throttleFilter($,j,U,G),b)}function resolveRef(b){return typeof b=="function"?computed(b):ref(b)}function tryOnMounted(b,$=!0){getCurrentInstance()?onMounted(b):$?b():nextTick(b)}var __getOwnPropSymbols$6=Object.getOwnPropertySymbols,__hasOwnProp$6=Object.prototype.hasOwnProperty,__propIsEnum$6=Object.prototype.propertyIsEnumerable,__objRest$5=(b,$)=>{var j={};for(var U in b)__hasOwnProp$6.call(b,U)&&$.indexOf(U)<0&&(j[U]=b[U]);if(b!=null&&__getOwnPropSymbols$6)for(var U of __getOwnPropSymbols$6(b))$.indexOf(U)<0&&__propIsEnum$6.call(b,U)&&(j[U]=b[U]);return j};function watchWithFilter(b,$,j={}){const U=j,{eventFilter:G=bypassFilter}=U,W=__objRest$5(U,["eventFilter"]);return watch(b,createFilterWrapper(G,$),W)}var __defProp$2=Object.defineProperty,__defProps$2=Object.defineProperties,__getOwnPropDescs$2=Object.getOwnPropertyDescriptors,__getOwnPropSymbols$2=Object.getOwnPropertySymbols,__hasOwnProp$2=Object.prototype.hasOwnProperty,__propIsEnum$2=Object.prototype.propertyIsEnumerable,__defNormalProp$2=(b,$,j)=>$ in b?__defProp$2(b,$,{enumerable:!0,configurable:!0,writable:!0,value:j}):b[$]=j,__spreadValues$2=(b,$)=>{for(var j in $||($={}))__hasOwnProp$2.call($,j)&&__defNormalProp$2(b,j,$[j]);if(__getOwnPropSymbols$2)for(var j of __getOwnPropSymbols$2($))__propIsEnum$2.call($,j)&&__defNormalProp$2(b,j,$[j]);return b},__spreadProps$2=(b,$)=>__defProps$2(b,__getOwnPropDescs$2($)),__objRest$1=(b,$)=>{var j={};for(var U in b)__hasOwnProp$2.call(b,U)&&$.indexOf(U)<0&&(j[U]=b[U]);if(b!=null&&__getOwnPropSymbols$2)for(var U of __getOwnPropSymbols$2(b))$.indexOf(U)<0&&__propIsEnum$2.call(b,U)&&(j[U]=b[U]);return j};function watchPausable(b,$,j={}){const U=j,{eventFilter:G}=U,W=__objRest$1(U,["eventFilter"]),{eventFilter:K,pause:Y,resume:ee,isActive:ne}=pausableFilter(G);return{stop:watchWithFilter(b,$,__spreadProps$2(__spreadValues$2({},W),{eventFilter:K})),pause:Y,resume:ee,isActive:ne}}function unrefElement(b){var $;const j=resolveUnref(b);return($=j==null?void 0:j.$el)!=null?$:j}const defaultWindow=isClient?window:void 0,defaultDocument=isClient?window.document:void 0;isClient&&window.navigator;isClient&&window.location;function useEventListener(...b){let $,j,U,G;if(isString(b[0])||Array.isArray(b[0])?([j,U,G]=b,$=defaultWindow):[$,j,U,G]=b,!$)return noop;Array.isArray(j)||(j=[j]),Array.isArray(U)||(U=[U]);const W=[],K=()=>{W.forEach(ae=>ae()),W.length=0},Y=(ae,oe,ie)=>(ae.addEventListener(oe,ie,G),()=>ae.removeEventListener(oe,ie,G)),ee=watch(()=>unrefElement($),ae=>{K(),ae&&W.push(...j.flatMap(oe=>U.map(ie=>Y(ae,oe,ie))))},{immediate:!0,flush:"post"}),ne=()=>{ee(),K()};return tryOnScopeDispose(ne),ne}function onClickOutside(b,$,j={}){const{window:U=defaultWindow,ignore:G=[],capture:W=!0,detectIframe:K=!1}=j;if(!U)return;let Y=!0,ee;const ne=se=>G.some(re=>{if(typeof re=="string")return Array.from(U.document.querySelectorAll(re)).some(le=>le===se.target||se.composedPath().includes(le));{const le=unrefElement(re);return le&&(se.target===le||se.composedPath().includes(le))}}),ae=se=>{U.clearTimeout(ee);const re=unrefElement(b);if(!(!re||re===se.target||se.composedPath().includes(re))){if(se.detail===0&&(Y=!ne(se)),!Y){Y=!0;return}$(se)}},oe=[useEventListener(U,"click",ae,{passive:!0,capture:W}),useEventListener(U,"pointerdown",se=>{const re=unrefElement(b);re&&(Y=!se.composedPath().includes(re)&&!ne(se))},{passive:!0}),useEventListener(U,"pointerup",se=>{if(se.button===0){const re=se.composedPath();se.composedPath=()=>re,ee=U.setTimeout(()=>ae(se),50)}},{passive:!0}),K&&useEventListener(U,"blur",se=>{var re;const le=unrefElement(b);((re=U.document.activeElement)==null?void 0:re.tagName)==="IFRAME"&&!(le!=null&&le.contains(U.document.activeElement))&&$(se)})].filter(Boolean);return()=>oe.forEach(se=>se())}function useSupported(b,$=!1){const j=ref(),U=()=>j.value=Boolean(b());return U(),tryOnMounted(U,$),j}function useMediaQuery(b,$={}){const{window:j=defaultWindow}=$,U=useSupported(()=>j&&"matchMedia"in j&&typeof j.matchMedia=="function");let G;const W=ref(!1),K=()=>{G&&("removeEventListener"in G?G.removeEventListener("change",Y):G.removeListener(Y))},Y=()=>{U.value&&(K(),G=j.matchMedia(resolveRef(b).value),W.value=G.matches,"addEventListener"in G?G.addEventListener("change",Y):G.addListener(Y))};return watchEffect(Y),tryOnScopeDispose(()=>K()),W}const _global=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},globalKey="__vueuse_ssr_handlers__";_global[globalKey]=_global[globalKey]||{};const handlers=_global[globalKey];function getSSRHandler(b,$){return handlers[b]||$}function guessSerializerType(b){return b==null?"any":b instanceof Set?"set":b instanceof Map?"map":b instanceof Date?"date":typeof b=="boolean"?"boolean":typeof b=="string"?"string":typeof b=="object"?"object":Number.isNaN(b)?"any":"number"}var __defProp$j=Object.defineProperty,__getOwnPropSymbols$l=Object.getOwnPropertySymbols,__hasOwnProp$l=Object.prototype.hasOwnProperty,__propIsEnum$l=Object.prototype.propertyIsEnumerable,__defNormalProp$j=(b,$,j)=>$ in b?__defProp$j(b,$,{enumerable:!0,configurable:!0,writable:!0,value:j}):b[$]=j,__spreadValues$j=(b,$)=>{for(var j in $||($={}))__hasOwnProp$l.call($,j)&&__defNormalProp$j(b,j,$[j]);if(__getOwnPropSymbols$l)for(var j of __getOwnPropSymbols$l($))__propIsEnum$l.call($,j)&&__defNormalProp$j(b,j,$[j]);return b};const StorageSerializers={boolean:{read:b=>b==="true",write:b=>String(b)},object:{read:b=>JSON.parse(b),write:b=>JSON.stringify(b)},number:{read:b=>Number.parseFloat(b),write:b=>String(b)},any:{read:b=>b,write:b=>String(b)},string:{read:b=>b,write:b=>String(b)},map:{read:b=>new Map(JSON.parse(b)),write:b=>JSON.stringify(Array.from(b.entries()))},set:{read:b=>new Set(JSON.parse(b)),write:b=>JSON.stringify(Array.from(b))},date:{read:b=>new Date(b),write:b=>b.toISOString()}};function useStorage(b,$,j,U={}){var G;const{flush:W="pre",deep:K=!0,listenToStorageChanges:Y=!0,writeDefaults:ee=!0,mergeDefaults:ne=!1,shallow:ae,window:oe=defaultWindow,eventFilter:ie,onError:se=ce=>{console.error(ce)}}=U,re=(ae?shallowRef:ref)($);if(!j)try{j=getSSRHandler("getDefaultStorage",()=>{var ce;return(ce=defaultWindow)==null?void 0:ce.localStorage})()}catch(ce){se(ce)}if(!j)return re;const le=resolveUnref($),pe=guessSerializerType(le),me=(G=U.serializer)!=null?G:StorageSerializers[pe],{pause:Ee,resume:_e}=watchPausable(re,()=>Pe(re.value),{flush:W,deep:K,eventFilter:ie});return oe&&Y&&useEventListener(oe,"storage",he),he(),re;function Pe(ce){try{if(ce==null)j.removeItem(b);else{const fe=me.write(ce),ke=j.getItem(b);ke!==fe&&(j.setItem(b,fe),oe&&(oe==null||oe.dispatchEvent(new StorageEvent("storage",{key:b,oldValue:ke,newValue:fe,storageArea:j}))))}}catch(fe){se(fe)}}function we(ce){const fe=ce?ce.newValue:j.getItem(b);if(fe==null)return ee&&le!==null&&j.setItem(b,me.write(le)),le;if(!ce&&ne){const ke=me.read(fe);return isFunction(ne)?ne(ke,le):pe==="object"&&!Array.isArray(ke)?__spreadValues$j(__spreadValues$j({},le),ke):ke}else return typeof fe!="string"?fe:me.read(fe)}function he(ce){if(!(ce&&ce.storageArea!==j)){if(ce&&ce.key==null){re.value=le;return}if(!(ce&&ce.key!==b)){Ee();try{re.value=we(ce)}catch(fe){se(fe)}finally{ce?nextTick(_e):_e()}}}}}function usePreferredDark(b){return useMediaQuery("(prefers-color-scheme: dark)",b)}const functionsMap=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function useFullscreen(b,$={}){const{document:j=defaultDocument,autoExit:U=!1}=$,G=b||(j==null?void 0:j.querySelector("html")),W=ref(!1);let K=functionsMap[0];const Y=useSupported(()=>{if(j){for(const le of functionsMap)if(le[1]in j)return K=le,!0}else return!1;return!1}),[ee,ne,ae,,oe]=K;async function ie(){Y.value&&(j!=null&&j[ae]&&await j[ne](),W.value=!1)}async function se(){if(!Y.value)return;await ie();const le=unrefElement(G);le&&(await le[ee](),W.value=!0)}async function re(){W.value?await ie():await se()}return j&&useEventListener(j,oe,()=>{W.value=!!(j!=null&&j[ae])},!1),U&&tryOnScopeDispose(ie),{isSupported:Y,isFullscreen:W,enter:se,exit:ie,toggle:re}}function useLocalStorage(b,$,j={}){const{window:U=defaultWindow}=j;return useStorage(b,$,U==null?void 0:U.localStorage,j)}var SwipeDirection;(function(b){b.UP="UP",b.RIGHT="RIGHT",b.DOWN="DOWN",b.LEFT="LEFT",b.NONE="NONE"})(SwipeDirection||(SwipeDirection={}));let _id=0;function useStyleTag(b,$={}){const j=ref(!1),{document:U=defaultDocument,immediate:G=!0,manual:W=!1,id:K=`vueuse_styletag_${++_id}`}=$,Y=ref(b);let ee=()=>{};const ne=()=>{if(!U)return;const oe=U.getElementById(K)||U.createElement("style");oe.isConnected||(oe.type="text/css",oe.id=K,$.media&&(oe.media=$.media),U.head.appendChild(oe)),!j.value&&(ee=watch(Y,ie=>{oe.textContent=ie},{immediate:!0}),j.value=!0)},ae=()=>{!U||!j.value||(ee(),U.head.removeChild(U.getElementById(K)),j.value=!1)};return G&&!W&&tryOnMounted(ne),W||tryOnScopeDispose(ae),{id:K,css:Y,unload:ae,load:ne,isLoaded:readonly(j)}}var __defProp=Object.defineProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(b,$,j)=>$ in b?__defProp(b,$,{enumerable:!0,configurable:!0,writable:!0,value:j}):b[$]=j,__spreadValues=(b,$)=>{for(var j in $||($={}))__hasOwnProp.call($,j)&&__defNormalProp(b,j,$[j]);if(__getOwnPropSymbols)for(var j of __getOwnPropSymbols($))__propIsEnum.call($,j)&&__defNormalProp(b,j,$[j]);return b};const _TransitionPresets={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};__spreadValues({linear:identity},_TransitionPresets);const badge="",t$1=({type:b="info",text:$="",vertical:j="top",color:U},{slots:G})=>{var W;return h$3("span",{class:["badge",b,{diy:U}],style:{verticalAlign:j,...U?{backgroundColor:U}:{}}},$||((W=G.default)==null?void 0:W.call(G)))};t$1.displayName="Badge";const fontIcon="";var s=defineComponent({name:"FontIcon",props:{icon:{type:String,default:""},color:{type:String,default:""},size:{type:[String,Number],default:""}},setup(b){const $=computed(()=>{const j={};return b.color&&(j.color=b.color),b.size&&(j["font-size"]=Number.isNaN(Number(b.size))?b.size:`${b.size}px`),Object.keys(j).length?j:null});return()=>b.icon?h$3("span",{class:["font-icon icon",`iconfont icon-${b.icon}`],style:$.value}):null}});const backToTop="",a$3=()=>h$3(lt,{name:"back-to-top"},()=>[h$3("path",{d:"M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z"}),h$3("path",{d:"m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z"})]);a$3.displayName="BackToTopIcon";var h$2=defineComponent({name:"BackToTop",props:{threshold:{type:Number,default:300}},setup(b){const $=usePageFrontmatter(),j=Ot({"/":{backToTop:"返回顶部"}}),U=ref(0),G=computed(()=>$.value.backToTop!==!1&&U.value>b.threshold),W=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;return onMounted(()=>{U.value=W()}),useEventListener("scroll",useDebounceFn(()=>{U.value=W()},100)),()=>h$3(Transition,{name:"fade"},()=>G.value?h$3("button",{class:"back-to-top","aria-label":j.value.backToTop,"data-balloon-pos":"left",onClick:()=>{window.scrollTo({top:0,behavior:"smooth"}),U.value=0}},h$3(a$3)):null)}});const srOnly="",clientConfig1=defineClientConfig({enhance:({app:b})=>{xt("Badge")||b.component("Badge",t$1),xt("FontIcon")||b.component("FontIcon",s)},setup:()=>{useStyleTag('@import url("//at.alicdn.com/t/c/font_2410206_s76eeqysx0t.css");',{id:"icon-assets"})},rootComponents:[()=>h$3(h$2,{threshold:300})]});function r$2(b,$,j){var U,G,W;$===void 0&&($=50),j===void 0&&(j={});var K=(U=j.isImmediate)!=null&&U,Y=(G=j.callback)!=null&&G,ee=j.maxWait,ne=Date.now(),ae=[];function oe(){if(ee!==void 0){var se=Date.now()-ne;if(se+$>=ee)return ee-se}return $}var ie=function(){var se=[].slice.call(arguments),re=this;return new Promise(function(le,pe){var me=K&&W===void 0;if(W!==void 0&&clearTimeout(W),W=setTimeout(function(){if(W=void 0,ne=Date.now(),!K){var _e=b.apply(re,se);Y&&Y(_e),ae.forEach(function(Pe){return(0,Pe.resolve)(_e)}),ae=[]}},oe()),me){var Ee=b.apply(re,se);return Y&&Y(Ee),le(Ee)}ae.push({resolve:le,reject:pe})})};return ie.cancel=function(se){W!==void 0&&clearTimeout(W),ae.forEach(function(re){return(0,re.reject)(se)}),ae=[]},ie}const useActiveHeaderLinks=({headerLinkSelector:b,headerAnchorSelector:$,delay:j,offset:U=5})=>{const G=useRouter(),K=r$2(()=>{var le,pe;const Y=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(Y-0)<U){updateHash(G,"");return}const ne=window.innerHeight+Y,ae=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),oe=Math.abs(ae-ne)<U,ie=Array.from(document.querySelectorAll(b)),re=Array.from(document.querySelectorAll($)).filter(me=>ie.some(Ee=>Ee.hash===me.hash));for(let me=0;me<re.length;me++){const Ee=re[me],_e=re[me+1],Pe=Y>=(((le=Ee.parentElement)==null?void 0:le.offsetTop)??0)-U,we=!_e||Y<(((pe=_e.parentElement)==null?void 0:pe.offsetTop)??0)-U;if(!(Pe&&we))continue;const ce=decodeURIComponent(G.currentRoute.value.hash),fe=decodeURIComponent(Ee.hash);if(ce===fe)return;if(oe){for(let ke=me+1;ke<re.length;ke++)if(ce===decodeURIComponent(re[ke].hash))return}updateHash(G,fe);return}},j);onMounted(()=>{window.addEventListener("scroll",K)}),onBeforeUnmount(()=>{window.removeEventListener("scroll",K)})},updateHash=async(b,$)=>{const{scrollBehavior:j}=b.options;b.options.scrollBehavior=void 0,await b.replace({query:b.currentRoute.value.query,hash:$,force:!0}).finally(()=>b.options.scrollBehavior=j)},headerLinkSelector=".sidebar-link, .toc-link",headerAnchorSelector=".header-anchor",delay=200,offset=5,clientConfig2=defineClientConfig({setup(){useActiveHeaderLinks({headerLinkSelector,headerAnchorSelector,delay,offset})}});var a$2=defineClientConfig({enhance:({app:b})=>{!xt("AutoCatalog",b)&&b.component("AutoCatalog",defineAsyncComponent(()=>__vitePreload(()=>import("./Catalog-d24ba352.js"),["assets/Catalog-d24ba352.js","assets/framework-debd98b7.js"])))}});const vars$1="",externalLinkIcon="",svg=h$3("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[h$3("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),h$3("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),ExternalLinkIcon=defineComponent({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(b){const $=useRouteLocale(),j=computed(()=>b.locales[$.value]??{openInNewWindow:"open in new window"});return()=>h$3("span",[svg,h$3("span",{class:"external-link-icon-sr-only"},j.value.openInNewWindow)])}}),locales={},clientConfig4=defineClientConfig({enhance({app:b}){b.component("ExternalLinkIcon",h$3(ExternalLinkIcon,{locales}))}});/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const nprogress$1={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:b=>{const $=nprogress$1.isStarted();b=clamp(b,nprogress$1.settings.minimum,1),nprogress$1.status=b===1?null:b;const j=nprogress$1.render(!$),U=j.querySelector(nprogress$1.settings.barSelector),G=nprogress$1.settings.speed,W=nprogress$1.settings.easing;return j.offsetWidth,queue(K=>{css(U,{transform:"translate3d("+toBarPerc(b)+"%,0,0)",transition:"all "+G+"ms "+W}),b===1?(css(j,{transition:"none",opacity:"1"}),j.offsetWidth,setTimeout(function(){css(j,{transition:"all "+G+"ms linear",opacity:"0"}),setTimeout(function(){nprogress$1.remove(),K()},G)},G)):setTimeout(()=>K(),G)}),nprogress$1},isStarted:()=>typeof nprogress$1.status=="number",start:()=>{nprogress$1.status||nprogress$1.set(0);const b=()=>{setTimeout(()=>{nprogress$1.status&&(nprogress$1.trickle(),b())},nprogress$1.settings.trickleSpeed)};return nprogress$1.settings.trickle&&b(),nprogress$1},done:b=>!b&&!nprogress$1.status?nprogress$1:nprogress$1.inc(.3+.5*Math.random()).set(1),inc:b=>{let $=nprogress$1.status;return $?(typeof b!="number"&&(b=(1-$)*clamp(Math.random()*$,.1,.95)),$=clamp($+b,0,.994),nprogress$1.set($)):nprogress$1.start()},trickle:()=>nprogress$1.inc(Math.random()*nprogress$1.settings.trickleRate),render:b=>{if(nprogress$1.isRendered())return document.getElementById("nprogress");addClass(document.documentElement,"nprogress-busy");const $=document.createElement("div");$.id="nprogress",$.innerHTML=nprogress$1.settings.template;const j=$.querySelector(nprogress$1.settings.barSelector),U=b?"-100":toBarPerc(nprogress$1.status||0),G=document.querySelector(nprogress$1.settings.parent);return css(j,{transition:"all 0 linear",transform:"translate3d("+U+"%,0,0)"}),G!==document.body&&addClass(G,"nprogress-custom-parent"),G==null||G.appendChild($),$},remove:()=>{removeClass(document.documentElement,"nprogress-busy"),removeClass(document.querySelector(nprogress$1.settings.parent),"nprogress-custom-parent");const b=document.getElementById("nprogress");b&&removeElement(b)},isRendered:()=>!!document.getElementById("nprogress")},clamp=(b,$,j)=>b<$?$:b>j?j:b,toBarPerc=b=>(-1+b)*100,queue=function(){const b=[];function $(){const j=b.shift();j&&j($)}return function(j){b.push(j),b.length===1&&$()}}(),css=function(){const b=["Webkit","O","Moz","ms"],$={};function j(K){return K.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(Y,ee){return ee.toUpperCase()})}function U(K){const Y=document.body.style;if(K in Y)return K;let ee=b.length;const ne=K.charAt(0).toUpperCase()+K.slice(1);let ae;for(;ee--;)if(ae=b[ee]+ne,ae in Y)return ae;return K}function G(K){return K=j(K),$[K]||($[K]=U(K))}function W(K,Y,ee){Y=G(Y),K.style[Y]=ee}return function(K,Y){for(const ee in Y){const ne=Y[ee];ne!==void 0&&Object.prototype.hasOwnProperty.call(Y,ee)&&W(K,ee,ne)}}}(),hasClass=(b,$)=>(typeof b=="string"?b:classList(b)).indexOf(" "+$+" ")>=0,addClass=(b,$)=>{const j=classList(b),U=j+$;hasClass(j,$)||(b.className=U.substring(1))},removeClass=(b,$)=>{const j=classList(b);if(!hasClass(b,$))return;const U=j.replace(" "+$+" "," ");b.className=U.substring(1,U.length-1)},classList=b=>(" "+(b.className||"")+" ").replace(/\s+/gi," "),removeElement=b=>{b&&b.parentNode&&b.parentNode.removeChild(b)},vars="",nprogress="",useNprogress=()=>{onMounted(()=>{const b=useRouter(),$=new Set;$.add(b.currentRoute.value.path),b.beforeEach(j=>{$.has(j.path)||nprogress$1.start()}),b.afterEach(j=>{$.add(j.path),nprogress$1.done()})})},clientConfig5=defineClientConfig({setup(){useNprogress()}}),themeData$1=JSON.parse('{"blog":{"medias":{"MrHope":"https://blog.ciberviler.top","Github":"https://github.com/xlc520","Gitee":"https://gitee.com/xulch","Baidu":"https://baidu.com","Email":"xulinch@88.com"}},"encrypt":{},"pure":false,"darkmode":"switch","themeColor":{"blue":"#2196f3","red":"#f26d6d","green":"#3eaf7c","orange":"#fb9b5f"},"fullscreen":true,"locales":{"/":{"blog":{"description":"山有木兮木有枝,心悦君兮君不知","intro":"/intro.html","avatar":"https://avatars.githubusercontent.com/u/56480807?v=4","sidebarDisplay":"mobile","articlePerPage":10},"repoDisplay":true,"navbarIcon":true,"navbarAutoHide":"mobile","hideSiteNameOnMobile":true,"sidebar":{"/study/":"structure","/algorithm/":"structure","/dev/":"structure","/linux/":"structure","/script/":"structure","/tools/":"structure","/source_code/":"structure","/git/":"structure","/daily/":"structure","/pc/":"structure","/essay/":"structure","/other/":"structure","/":[""]},"sidebarIcon":true,"headerDepth":2,"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","lastUpdated":"上次编辑于","contributors":"贡献者","editLink":"Edit this page on GitHub"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"收藏"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routeLocales":{"skipToContent":"跳至主要內容","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家","openInNewWindow":"Open in new window"},"author":{"name":"xlc520","url":"https://github.com/xlc520"},"logo":"/logo.svg","repo":"https://github.com/xlc520/xlc520.github.io","docsDir":"docs","docsRepo":"https://github.com/xlc520/xlc520.github.io","docsBranch":"master","pageInfo":["Author","Original","Date","Category","Tag","ReadingTime","Word"],"navbar":[{"text":"Home","link":"/","icon":"home"},{"text":"学习","icon":"note","prefix":"/study/","children":[{"text":"学习","icon":"note","link":""},{"text":"Vue3+TS 快速上手","icon":"vue","link":"vue3_quick_study/"}]},{"text":"算法","link":"/algorithm/","icon":"shell"},{"text":"开发","link":"/dev/","icon":"java"},{"text":"Linux","link":"/linux/","icon":"linux"},{"text":"脚本","link":"/script/","icon":"script"},{"text":"工具","link":"/tools/","icon":"tool"},{"text":"源码","link":"/source_code/","icon":"code"},{"text":"Git","link":"/git/","icon":"git"},{"text":"日常","link":"/daily/","icon":"date"},{"text":"电脑","link":"/pc/","icon":"computer"},{"text":"文章","link":"/essay/","icon":"article"},{"text":"其他","link":"/other/","icon":"others"},{"text":"链接","icon":"guide","children":[{"text":"Alist","icon":"share","link":"http://122.9.159.116:5244"},{"text":"Cloudreve","icon":"share","link":"https://pan.ciberviler.top"},{"text":"DownGit-tk","icon":"github","link":"https://git.xlc520.tk"},{"text":"DownGit-ml","icon":"github","link":"https://git.xlc520.ml"}]}],"footer":"两情若是久长时，又岂在朝朝暮暮","displayFooter":true}}}'),themeData=ref(themeData$1),useThemeData$1=()=>themeData,themeLocaleDataSymbol=Symbol(""),useThemeLocaleData$1=()=>{const b=inject(themeLocaleDataSymbol);if(!b)throw new Error("useThemeLocaleData() is called without provider.");return b},resolveThemeLocaleData=(b,$)=>{var j;return{...b,...(j=b.locales)==null?void 0:j[$]}},clientConfig6=defineClientConfig({enhance({app:b}){const $=useThemeData$1(),j=b._context.provides[routeLocaleSymbol],U=computed(()=>resolveThemeLocaleData($.value,j.value));b.provide(themeLocaleDataSymbol,U),Object.defineProperties(b.config.globalProperties,{$theme:{get(){return $.value}},$themeLocale:{get(){return U.value}}})}}),message="",balloon="",button="",L$2=800,S$4=2e3,_$2={"/":{copy:"复制代码",copied:"已复制",hint:"复制成功"}},d$3='.theme-hope-content div[class*="language-"] pre',g$1=!1,w$2=async b=>{try{return navigator.clipboard.writeText(b)}catch{const $=document.createElement("textarea"),j=document.activeElement;$.value=b,$.setAttribute("readonly",""),$.style.contain="strict",$.style.position="absolute",$.style.left="-9999px",$.style.fontSize="12pt";const U=document.getSelection(),G=U?U.rangeCount>0&&U.getRangeAt(0):null;document.body.appendChild($),$.select(),$.selectionStart=0,$.selectionEnd=b.length,document.execCommand("copy"),document.body.removeChild($),G&&(U.removeAllRanges(),U.addRange(G)),j&&j.focus()}},P$2='<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#06a35a"><path d="M822.812 824.618c-83.076 81.992-188.546 124.614-316.05 127.865-122.085-3.251-223.943-45.873-305.935-127.865S76.213 640.406 72.962 518.682c3.251-127.503 45.873-232.973 127.865-316.05 81.992-83.075 184.211-126.058 305.936-129.309 127.503 3.251 232.973 46.234 316.049 129.31 83.076 83.076 126.059 188.546 129.31 316.05-2.89 121.723-46.234 223.943-129.31 305.935zM432.717 684.111c3.973 3.974 8.307 5.78 13.364 6.14 5.057.362 9.753-1.444 13.365-5.417l292.57-287.515c3.974-3.973 5.78-8.307 5.78-13.364s-1.806-9.753-5.78-13.365l1.807 1.806c-3.973-3.973-8.669-5.779-14.087-6.14-5.418-.361-10.475 1.445-14.809 5.418L460.529 592.006c-3.973 3.25-8.669 4.695-14.448 4.695-5.78 0-10.836-1.445-15.531-3.973l-94.273-72.962c-4.335-3.251-9.392-4.335-14.448-3.973s-9.392 3.25-12.642 7.585l-2.89 3.973c-3.25 4.334-4.334 9.391-3.973 14.81.722 5.417 2.528 10.113 5.779 14.086L432.717 684.11z"/></svg>',C$3=()=>navigator?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/iu.test(navigator.userAgent):!1,p$2=new Map,x$2=()=>{const b=useRoute(),$=Ot(_$2);let j;const U=K=>{if(!K.hasAttribute("copy-code-registered")){const Y=document.createElement("button");Y.classList.add("copy-code-button"),Y.innerHTML='<div class="copy-icon" />',Y.setAttribute("aria-label",$.value.copy),Y.setAttribute("data-copied",$.value.copied),Y.setAttribute("data-balloon-pos","left"),K.parentElement&&K.parentElement.insertBefore(Y,K),K.setAttribute("copy-code-registered","")}},G=()=>{setTimeout(()=>{isString$1(d$3)?document.querySelectorAll(d$3).forEach(U):isArray(d$3)&&d$3.forEach(K=>{document.querySelectorAll(K).forEach(U)})},L$2)},W=(K,Y,ee)=>{let{innerText:ne=""}=Y;/language-(shellscript|shell|bash|sh|zsh)/.test(K.classList.toString())&&(ne=ne.replace(/^ *(\$|>) /gm,"")),w$2(ne).then(()=>{ee.classList.add("copied"),clearTimeout(p$2.get(ee));const ae=setTimeout(()=>{ee.classList.remove("copied"),ee.blur(),p$2.delete(ee)},2e3);p$2.set(ee,ae),j.pop(`${P$2}<span>${$.value.hint} 🎉</span>`,S$4)})};onMounted(()=>{j=new Lt,(!C$3()||g$1)&&G(),window.addEventListener("click",K=>{const Y=K.target;if(Y.matches('div[class*="language-"] > button.copy')){const ee=Y.parentElement,ne=Y.nextElementSibling;ne&&W(ee,ne,Y)}else if(Y.matches('div[class*="language-"] div.copy-icon')){const ee=Y.parentElement,ne=ee.parentElement,ae=ee.nextElementSibling;ae&&W(ne,ae,ee)}}),watch(()=>b.path,()=>{(!C$3()||g$1)&&G()})})};var D$1=defineClientConfig({setup:()=>{x$2()}});const chart="",LoadingIcon$1=()=>h$3(lt,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(b=>h$3("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$3("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:b}),h$3("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:b})]))),parseChartConfig=(config,type)=>{if(type==="json")return JSON.parse(config);const exports={},module={exports};return eval(config),module.exports};var ChartJS=defineComponent({name:"ChartJS",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(b){const $=ref(),j=ref(),U=ref(!0);return onMounted(()=>{Promise.all([__vitePreload(()=>import("./auto-bcb4bc66.js"),[]),new Promise(G=>setTimeout(G,800))]).then(([{default:G}])=>{G.defaults.maintainAspectRatio=!1;const W=parseChartConfig(Wt(b.config),b.type),K=j.value.getContext("2d");new G(K,W),U.value=!1})}),()=>[b.title?h$3("div",{class:"chart-title"},decodeURIComponent(b.title)):null,U.value?h$3("div",{class:"chart-loading-wrapper"},h$3(LoadingIcon$1)):null,h$3("div",{ref:$,class:"chart-wrapper",id:b.id,style:{display:U.value?"none":"block"}},h$3("canvas",{ref:j,height:400}))]}});const codeTabs="",o$1=useStorage("VUEPRESS_CODE_TAB_STORE",{});var S$3=defineComponent({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},setup(b,{slots:$}){const j=ref(b.active),U=ref([]),G=()=>{if(b.tabId){const{title:ne,id:ae=ne}=b.data[j.value];o$1.value[b.tabId]=ae}},W=(ne=j.value)=>{j.value=ne<U.value.length-1?ne+1:0,U.value[j.value].focus()},K=(ne=j.value)=>{j.value=ne>0?ne-1:U.value.length-1,U.value[j.value].focus()},Y=(ne,ae)=>{if(ne.key===" "||ne.key==="Enter"?(ne.preventDefault(),j.value=ae):ne.key==="ArrowRight"?(ne.preventDefault(),W()):ne.key==="ArrowLeft"&&(ne.preventDefault(),K()),b.tabId){const{title:oe,id:ie=oe}=b.data[j.value];o$1.value[b.tabId]=ie}},ee=()=>{if(b.tabId){const ne=b.data.findIndex(({title:ae,id:oe=ae})=>o$1.value[b.tabId]===oe);if(ne!==-1)return ne}return b.active};return onMounted(()=>{j.value=ee(),watch(()=>o$1.value[b.tabId],(ne,ae)=>{if(b.tabId&&ne!==ae){const oe=b.data.findIndex(({title:ie,id:se=ie})=>se===ne);oe!==-1&&(j.value=oe)}})}),()=>b.data.length?h$3("div",{class:"code-tabs"},[h$3("div",{class:"code-tabs-nav",role:"tablist"},b.data.map(({title:ne},ae)=>{const oe=ae===j.value;return h$3("button",{ref:ie=>{ie&&(U.value[ae]=ie)},class:["code-tabs-nav-tab",{active:oe}],role:"tab","aria-controls":`codetab-${b.id}-${ae}`,"aria-selected":oe,onClick:()=>{j.value=ae,G()},onKeydown:ie=>Y(ie,ae)},ne)})),b.data.map(({title:ne,id:ae=ne},oe)=>{var ie;const se=oe===j.value;return h$3("div",{class:["code-tab",{active:se}],id:`codetab-${b.id}-${oe}`,role:"tabpanel","aria-expanded":se},(ie=$[`tab${oe}`])==null?void 0:ie.call($,{title:ne,value:ae,isActive:se}))})]):null}});const index$2="",codeDemo="",M$1=()=>h$3(lt,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(b=>h$3("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$3("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:b}),h$3("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:b})]))),O$1='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',N$1='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg" width="228.516" height="200"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>',L$1={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"},C$2={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},A$2=(b,$,j)=>{const U=document.createElement(b);return $&&Object.keys($).forEach(G=>{if(G.indexOf("data"))U[G]=$[G];else{const W=G.replace("data","");U.dataset[W]=$[G]}}),j&&j.forEach(G=>{U.appendChild(G)}),U},w$1=b=>({...L$1,...b,jsLib:Array.from(new Set([...L$1.jsLib||[],...b.jsLib||[]])),cssLib:Array.from(new Set([...L$1.cssLib||[],...b.cssLib||[]]))}),v$1=(b,$)=>{if(b[$]!==void 0)return b[$];const j=new Promise(U=>{var G;const W=document.createElement("script");W.src=$,(G=document.querySelector("body"))==null||G.appendChild(W),W.onload=()=>{U()}});return b[$]=j,j},k$4=(b,$)=>{if($.css&&Array.from(b.childNodes).every(j=>j.nodeName!=="STYLE")){const j=A$2("style",{innerHTML:$.css});b.appendChild(j)}},D=(b,$,j)=>{const U=j.getScript();if(U&&Array.from($.childNodes).every(G=>G.nodeName!=="SCRIPT")){const G=document.createElement("script");G.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${b} .code-demo-container').shadowRoot;
${U}}`)),$.appendChild(G)}},R=b=>{const $=Object.keys(b),j={html:[],js:[],css:[],isLegal:!1};return["html","js","css"].forEach(U=>{const G=$.filter(W=>C$2[U].types.includes(W));if(G.length){const W=G[0];j[U]=[b[W].replace(/^\n|\n$/g,""),C$2[U].map[W]||W]}}),j.isLegal=(!j.html.length||j.html[1]==="none")&&(!j.js.length||j.js[1]==="none")&&(!j.css.length||j.css[1]==="none"),j},x$1=b=>b.replace(/<br \/>/g,"<br>").replace(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),_$1=b=>`<div id="app">
${x$1(b)}
</div>`,B=b=>`${b.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,V=b=>b.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),q=b=>`(function(exports){var module={};module.exports=exports;${b};return module.exports.__esModule?module.exports.default:module.exports;})({})`,z=(b,$)=>{const j=w$1($),U=b.js[0]||"";return{...j,html:x$1(b.html[0]||""),js:U,css:b.css[0]||"",isLegal:b.isLegal,getScript:()=>{var G;return j.useBabel?((G=window.Babel.transform(U,{presets:["es2015"]}))==null?void 0:G.code)||"":U}}},P$1=(b,$)=>{const j=w$1($),U=b.html[0]||"",G=/<template>([\s\S]+)<\/template>/u.exec(U),W=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u.exec(U),K=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u.exec(U),Y=G?G[1].replace(/^\n|\n$/g,""):"",[ee="",ne=""]=W?[W[4].replace(/^\n|\n$/g,""),W[3]]:[],[ae="",oe=""]=K?[K[4].replace(/^\n|\n$/g,""),K[3]]:[],ie=ne===""&&(oe===""||oe==="css");return{...j,html:_$1(Y),js:V(ee),css:ae,isLegal:ie,jsLib:[j.vue,...j.jsLib],getScript:()=>{var se,re;const le=$.useBabel?((re=(se=window.Babel)==null?void 0:se.transform(ee,{presets:["es2015"]}))==null?void 0:re.code)||"":ee.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${q(le)};appOptions.template=\`${Y.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}},H$2=(b,$)=>{const j=w$1($);return{...j,html:_$1(""),js:B(b.js[0]||""),css:b.css[0]||(b.js[0]?b.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim():""),isLegal:b.isLegal,jsLib:[j.react,j.reactDOM,...j.jsLib],jsx:!0,getScript:()=>{var U,G;const W=((G=(U=window.Babel)==null?void 0:U.transform(b.js[0]||"",{presets:["es2015","react"]}))==null?void 0:G.code)||"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${q(W)}))`}}},h$1={},I$2=b=>Promise.all([v$1(h$1,b.babel),v$1(h$1,b.react),v$1(h$1,b.reactDOM)]),J=b=>{const $=[v$1(h$1,b.vue)];return b.useBabel&&$.push(v$1(h$1,b.babel)),Promise.all($)},Q=b=>b.useBabel?v$1(h$1,b.babel):Promise.resolve();var F$1=defineComponent({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:{type:String,default:""},config:{type:String,default:""},code:{type:String,required:!0}},setup(b,{slots:$}){const j=ref(!1),U=ref(),G=ref(),W=ref("0"),K=ref(!1),Y=computed(()=>JSON.parse(b.config?Wt(b.config):"{}")),ee=computed(()=>{const se=JSON.parse(Wt(b.code));return R(se)}),ne=computed(()=>b.type==="react"?H$2(ee.value,Y.value):b.type==="vue"?P$1(ee.value,Y.value):z(ee.value,Y.value)),ae=computed(()=>ne.value.isLegal),oe=(se=!1)=>{const re=U.value.attachShadow({mode:"open"}),le=document.createElement("div");le.classList.add("code-demo-app"),re.appendChild(le),ae.value?(se&&(le.innerHTML=ne.value.html),k$4(re,ne.value),D(b.id,re,ne.value),W.value="0"):W.value="auto",K.value=!0},ie=()=>{switch(b.type){case"react":return I$2(ne.value).then(()=>oe());case"vue":return J(ne.value).then(()=>oe());default:return Q(ne.value).then(()=>oe(!0))}};return onMounted(()=>{setTimeout(()=>{ie()},800)}),()=>{var se;return h$3("div",{class:"code-demo-wrapper",id:b.id},[K.value?null:h$3("div",{class:"loading"},h$3(M$1)),h$3("div",{class:"code-demo-header"},[ne.value.isLegal?h$3("button",{class:["toggle-button",j.value?"down":"right"],onClick:()=>{W.value=j.value?"0":`${G.value.clientHeight+13.8}px`,j.value=!j.value}}):null,b.title?h$3("span",{class:"title"},decodeURIComponent(b.title)):null,ne.value.isLegal&&ne.value.jsfiddle!==!1?h$3("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[h$3("input",{type:"hidden",name:"html",value:ne.value.html}),h$3("input",{type:"hidden",name:"js",value:ne.value.js}),h$3("input",{type:"hidden",name:"css",value:ne.value.css}),h$3("input",{type:"hidden",name:"wrap",value:"1"}),h$3("input",{type:"hidden",name:"panel_js",value:"3"}),h$3("input",{type:"hidden",name:"resources",value:[...ne.value.cssLib,...ne.value.jsLib].join(",")}),h$3("button",{type:"submit",class:"jsfiddle-button",innerHTML:N$1,"aria-label":"JSFiddle","data-balloon-pos":"up"})]):null,!ne.value.isLegal||ne.value.codepen!==!1?h$3("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[h$3("input",{type:"hidden",name:"data",value:JSON.stringify({html:ne.value.html,js:ne.value.js,css:ne.value.css,js_external:ne.value.jsLib.join(";"),css_external:ne.value.cssLib.join(";"),layout:ne.value.codepenLayout,html_pre_processor:ee.value?ee.value.html[1]:"none",js_pre_processor:ee.value?ee.value.js[1]:ne.value.jsx?"babel":"none",css_pre_processor:ee.value?ee.value.css[1]:"none",editors:ne.value.codepenEditors})}),h$3("button",{type:"submit",innerHTML:O$1,class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"up"})]):null]),h$3("div",{ref:U,class:"code-demo-container",style:{display:ae.value&&K.value?"block":"none"}}),h$3("div",{class:"code-demo-code-wrapper",style:{height:W.value}},h$3("div",{ref:G,class:"code-demo-codes"},(se=$.default)==null?void 0:se.call($)))])}}});const echarts="",LoadingIcon=()=>h$3(lt,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(b=>h$3("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$3("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:b}),h$3("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:b})]))),parseEChartsConfig=(config,type)=>{if(type==="js"){const exports={},module={exports};return eval(config),module.exports}return JSON.parse(config)};var ECharts=defineComponent({name:"ECharts",props:{config:{type:String,required:!0},id:{type:String,required:!0},title:{type:String,default:""},type:{type:String,default:"json"}},setup(b){const $=ref();let j;const U=ref(!0);return onMounted(()=>{Promise.all([__vitePreload(()=>import("./index-8764208e.js"),[]),new Promise(G=>setTimeout(G,800))]).then(([G])=>{const W=parseEChartsConfig(Wt(b.config),b.type);j=G.init($.value),j.showLoading(),j.setOption(W),j.hideLoading(),U.value=!1}),useEventListener("resize",useDebounceFn(()=>j==null?void 0:j.resize(),100))}),onBeforeUnmount(()=>{j==null||j.dispose()}),()=>[b.title?h$3("div",{class:"echarts-title"},decodeURIComponent(b.title)):null,U.value?h$3("div",{class:"echarts-loading-wrapper"},h$3(LoadingIcon)):null,h$3("div",{ref:$,class:"echarts-wrapper",id:b.id})]}});const figure="",flowchart="",y$1=()=>h$3(lt,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(b=>h$3("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$3("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:b}),h$3("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:b})])));var a$1={x:0,y:0,"line-width":2,"line-length":40,"text-margin":8,"font-size":14,"font-color":"#8DA1AC","line-color":"#8DA1AC","element-color":"black",fill:"white","yes-text":"Yes","no-text":"No","arrow-end":"block",scale:1},F={...a$1,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#595959","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#595959","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#FF485E","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FF485E","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#1890ff","line-width":"0px"}}},C$1={...a$1,"line-width":1,symbols:{start:{class:"start-element",fill:"#ccc","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},end:{class:"end-element",fill:"#ccc","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},operation:{class:"operation-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},inputoutput:{class:"inputoutput-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},subroutine:{class:"subroutine-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},condition:{class:"condition-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"},parallel:{class:"parallel-element",fill:"#f1f1f1","line-width":"1px","line-color":"#5c6ac4","font-color":"#000"}}},g={...a$1,symbols:{start:{class:"start-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},end:{class:"end-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"},operation:{class:"operation-element","font-color":"#fff",fill:"#00BC7D","line-width":"0px"},inputoutput:{class:"inputoutput-element","font-color":"#fff",fill:"#EB4D5D","line-width":"0px"},subroutine:{class:"subroutine-element","font-color":"#fff",fill:"#937AC4","element-color":"#fff","line-color":"red"},condition:{class:"condition-element","font-color":"#fff",fill:"#FFB500","line-width":"0px"},parallel:{class:"parallel-element","font-color":"#fff",fill:"#2F495F","line-width":"0px"}}},p$1={ant:F,vue:g,pie:C$1},k$3=defineComponent({name:"FlowChart",props:{code:{type:String,required:!0},id:{type:String,required:!0},preset:{type:String,default:"vue"}},setup(b){let $;const j=ref(),U=ref(!0),G=ref(1),W=computed(()=>p$1[b.preset]||(console.warn(`[md-enhance:flowchart] Unknown preset: ${b.preset}`),p$1.vue)),K=Y=>Y<419?.8:Y>1280?1:.9;return onMounted(()=>{Promise.all([__vitePreload(()=>import("./flowchart.parse-0007e96c.js").then(Y=>Y.f),[]),new Promise(Y=>setTimeout(Y,800))]).then(([{default:Y}])=>{$=Y(Wt(b.code)),G.value=K(window.innerWidth),U.value=!1,$.drawSVG(b.id,{...W.value,scale:G.value}),useEventListener("resize",useDebounceFn(()=>{const ee=K(window.innerWidth);G.value!==ee&&(G.value=ee,$.drawSVG(b.id,{...W.value,scale:ee}))},100))})}),()=>[U.value?h$3("div",{class:"flowchart-loading-wrapper"},h$3(y$1)):null,h$3("div",{ref:j,class:["flowchart-wrapper",b.preset],id:b.id,style:{display:U.value?"none":"block"}})]}});const footnote="",imageMark="",mermaid="",M=()=>h$3(lt,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(b=>h$3("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$3("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:b}),h$3("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:b})]))),k$2=b=>({dark:b,background:b?"#1e1e1e":"#fff",primaryColor:b?"#389d70":"#4abf8a",primaryBorderColor:b?"#389d70":"#4abf8a",primaryTextColor:"#fff",secondaryColor:"#ffb500",secondaryBorderColor:b?"#fff":"#000",secondaryTextColor:b?"#ddd":"#333",tertiaryColor:b?"#282828":"#efeef4",tertiaryBorderColor:b?"#bbb":"#242424",tertiaryTextColor:b?"#ddd":"#333",noteBkgColor:b?"#f6d365":"#fff5ad",noteTextColor:"#242424",noteBorderColor:b?"#f6d365":"#333",lineColor:b?"#d3d3d3":"#333",textColor:b?"#fff":"#242424",mainBkg:b?"#389d70":"#4abf8a",errorBkgColor:"#eb4d5d",errorTextColor:"#fff",nodeBorder:b?"#389d70":"#4abf8a",nodeTextColor:b?"#fff":"#242424",signalTextColor:b?"#9e9e9e":"#242424",classText:"#fff",labelColor:"#fff",fillType0:b?"#cf1322":"#f1636e",fillType1:"#f39c12",fillType2:"#2ecc71",fillType3:"#fa541c",fillType4:"#25a55b",fillType5:"#13c2c2",fillType6:"#096dd9",fillType7:"#aa6fe9"});var w=defineComponent({name:"Mermaid",props:{id:{type:String,required:!0},code:{type:String,required:!0}},setup(b){const $=ref(""),j=ref(),U=ref(!1);let G=null;return onMounted(()=>{const W=document.querySelector("html"),K=Wt(b.code),Y=()=>W.classList.contains("dark")||W.getAttribute("data-theme")==="dark";U.value=Y(),Promise.all([__vitePreload(()=>import("./mermaid.esm.min-bc08675d.js"),[]),__vitePreload(()=>import("./mermaid-mindmap.esm.min-31991d4b.js"),["assets/mermaid-mindmap.esm.min-31991d4b.js","assets/framework-debd98b7.js"]),new Promise(ee=>setTimeout(ee,800))]).then(async([{default:ee},{default:ne}])=>{try{await ee.registerExternalDiagrams([ne])}catch{}const ae=async()=>{const oe=document.createElement("div");oe.style.position="relative",oe.style.top="-9999px";const ie=se=>{$.value=se,document.body.removeChild(oe)};ee.initialize({theme:"base",themeVariables:k$2(U.value),flowchart:{useMaxWidth:!1},sequence:{useMaxWidth:!1},journey:{useMaxWidth:!1},gantt:{useMaxWidth:!1},er:{useMaxWidth:!1},pie:{useMaxWidth:!1},startOnLoad:!1}),$.value="",document.body.appendChild(oe),await nextTick(),await ee.renderAsync(b.id,K,ie,oe)};await ae(),G=new MutationObserver(()=>{U.value=Y()}),G.observe(W,{attributeFilter:["class","data-theme"],attributes:!0}),watch(U,ae)})}),onBeforeUnmount(()=>{G==null||G.disconnect()}),()=>h$3("div",{ref:j,class:["mermaid-wrapper",{loading:!$.value}]},$.value?h$3("div",{class:"content",innerHTML:$.value}):h$3(M))}});const o=()=>__vitePreload(()=>import("./highlight.esm-a794bb63.js"),[]),t=()=>__vitePreload(()=>import("./markdown.esm-d92a2fc9.js"),[]),e=()=>__vitePreload(()=>import("./math.esm-70a288c8.js"),[]),r$1=()=>__vitePreload(()=>import("./notes.esm-224f94d9.js"),[]),a=()=>__vitePreload(()=>import("./reveal.esm-e5069ce0.js"),[]),i=()=>__vitePreload(()=>import("./search.esm-2c3fba7d.js"),[]),c=()=>__vitePreload(()=>import("./zoom.esm-b83b91d0.js"),[]),useReveal=()=>[a(),t(),o(),e(),i(),r$1(),c()],index$1="",leagueGothic="",sourceSansPro="",k$1=()=>h$3(lt,{name:"loading"},()=>["0s","-0.333s","-0.667s"].map(b=>h$3("circle",{cx:512,cy:512,r:0,fill:"none",stroke:"currentColor","stroke-width":"20"},[h$3("animate",{attributeName:"r",repeatCount:"indefinite",dur:"1s",values:"0;400",keyTimes:"0;1",keySplines:"0 0.2 0.8 1",calcMode:"spline",begin:b}),h$3("animate",{attributeName:"opacity",repeatCount:"indefinite",dur:"1s",values:"1;0",keyTimes:"0;1",keySplines:"0.2 0 0.8 1",calcMode:"spline",begin:b})])));var S$2=defineComponent({name:"Presentation",props:{id:{type:String,required:!0},code:{type:String,required:!0},theme:{type:String,default:"auto"}},setup(b){const $=usePageFrontmatter(),j=ref(""),U=ref(!1),G=ref(),W=ref();let K;return onMounted(()=>{if(W.value){j.value=Wt(b.code),W.value.setAttribute("id",b.id),W.value.setAttribute("data-theme",b.theme);const Y=[new Promise(ee=>setTimeout(ee,800)),...useReveal()];Promise.all(Y).then(([,ee,...ne])=>{K=new ee.default(W.value,{plugins:ne.map(ae=>ae.default)}),K.initialize({backgroundTransition:"slide",hash:$.value.layout==="Slide",mouseWheel:$.value.layout==="Slide",transition:"slide",slideNumber:!0,...$.value.reveal||{},embedded:$.value.layout!=="Slide"}).then(()=>{U.value=!1,K.configure({backgroundTransition:"slide"})})})}}),onBeforeUnmount(()=>{K==null||K.destroy()}),()=>h$3("div",{ref:G,class:{"md-enhance-presentation":!0,loading:U.value}},[U.value?h$3(k$1):null,h$3("div",{ref:W,class:["reveal","reveal-viewport"]},h$3("div",{class:"slides",style:{display:U.value?"none":"block"},innerHTML:`<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${j.value}<\/script></section>`}))])}});const playground="",n='<svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M512 74.667C270.933 74.667 74.667 270.933 74.667 512S270.933 949.333 512 949.333 949.333 753.067 949.333 512 753.067 74.667 512 74.667zm0 810.666C307.2 885.333 138.667 716.8 138.667 512S307.2 138.667 512 138.667 885.333 307.2 885.333 512 716.8 885.333 512 885.333z"/><path d="M708.267 465.067 473.6 330.667c-8.533-4.267-17.067-6.4-25.6-6.4-29.867 0-53.333 23.466-53.333 53.333v268.8c0 8.533 2.133 19.2 6.4 25.6 10.666 17.067 27.733 27.733 46.933 27.733 8.533 0 17.067-2.133 25.6-6.4l234.667-134.4c8.533-4.266 14.933-10.666 19.2-19.2 6.4-12.8 8.533-27.733 4.266-40.533-2.133-14.933-10.666-25.6-23.466-34.133zM458.667 627.2V396.8L661.333 512 458.667 627.2z"/></svg>';var r=defineComponent({name:"Playground",props:{title:{type:String,default:""},link:{type:String,required:!0}},setup(b){return()=>[h$3("div",{class:"playground-wrapper"},[h$3("div",{class:"title-wrapper"},[b.title?h$3("div",{class:"title"},decodeURIComponent(b.title)):null,h$3("div",{class:"actions"},[h$3("a",{class:"action",href:decodeURIComponent(b.link),target:"_blank",innerHTML:n})])]),h$3("div",{class:"preview-container"},h$3("iframe",{class:"iframe-preview",src:decodeURIComponent(b.link)}))])]}});const tabs="",v=useStorage("VUEPRESS_TAB_STORE",{});var S$1=defineComponent({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},id:{type:String,required:!0},tabId:{type:String,default:""}},setup(b,{slots:$}){const j=ref(b.active),U=ref([]),G=()=>{if(b.tabId){const{title:ne,id:ae=ne}=b.data[j.value];v.value[b.tabId]=ae}},W=(ne=j.value)=>{j.value=ne<U.value.length-1?ne+1:0,U.value[j.value].focus()},K=(ne=j.value)=>{j.value=ne>0?ne-1:U.value.length-1,U.value[j.value].focus()},Y=(ne,ae)=>{ne.key===" "||ne.key==="Enter"?(ne.preventDefault(),j.value=ae):ne.key==="ArrowRight"?(ne.preventDefault(),W()):ne.key==="ArrowLeft"&&(ne.preventDefault(),K()),G()},ee=()=>{if(b.tabId){const ne=b.data.findIndex(({title:ae,id:oe=ae})=>v.value[b.tabId]===oe);if(ne!==-1)return ne}return b.active};return onMounted(()=>{j.value=ee(),watch(()=>v.value[b.tabId],(ne,ae)=>{if(b.tabId&&ne!==ae){const oe=b.data.findIndex(({title:ie,id:se=ie})=>se===ne);oe!==-1&&(j.value=oe)}})}),()=>b.data.length?h$3("div",{class:"tab-list"},[h$3("div",{class:"tab-list-nav",role:"tablist"},b.data.map(({title:ne},ae)=>{const oe=ae===j.value;return h$3("button",{ref:ie=>{ie&&(U.value[ae]=ie)},class:["tab-list-nav-item",{active:oe}],role:"tab","aria-controls":`tab-${b.id}-${ae}`,"aria-selected":oe,onClick:()=>{j.value=ae,G()},onKeydown:ie=>Y(ie,ae)},ne)})),b.data.map(({title:ne,id:ae=ne},oe)=>{var ie;const se=oe===j.value;return h$3("div",{class:["tab-item",{active:se}],id:`tab-${b.id}-${oe}`,role:"tabpanel","aria-expanded":se},(ie=$[`tab${oe}`])==null?void 0:ie.call($,{title:ne,value:ae,isActive:se}))})]):null}});const tasklist="",katex="",clientConfig8=defineClientConfig({enhance:({app:b})=>{b.component("ChartJS",ChartJS),b.component("CodeTabs",S$3),b.component("CodeDemo",F$1),b.component("ECharts",ECharts),b.component("FlowChart",k$3),b.component("Mermaid",w),b.component("Presentation",S$2),b.component("Playground",r),b.component("Tabs",S$1),b.component("VuePlayground",defineAsyncComponent(()=>__vitePreload(()=>import("./VuePlayground-03dc9617.js"),["assets/VuePlayground-03dc9617.js","assets/framework-debd98b7.js"])))}}),photoswipe="",E$1=".theme-hope-content :not(a) > img",P={"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}},O=800,H$1={},d$2=b=>({src:b.src,width:b.naturalWidth,height:b.naturalHeight,alt:b.alt}),I$1=b=>{const $=isString$1(b)?Array.from(document.querySelectorAll(b)):b.map(j=>Array.from(document.querySelectorAll(j))).flat();return Promise.all($.map(j=>new Promise((U,G)=>{j.complete?U(d$2(j)):(j.onload=()=>U(d$2(j)),j.onerror=W=>G(W))}))).then(j=>({elements:$,infos:j}))},A$1=()=>{const{isSupported:b,toggle:$}=useFullscreen(),j=Ot(P),U=useRoute(),G=()=>{Promise.all([__vitePreload(()=>import("./photoswipe.esm-a9093b7c.js"),[]),new Promise(W=>setTimeout(W,O)).then(()=>I$1(E$1))]).then(([W,K])=>{K.elements.forEach((Y,ee)=>{const ne=()=>{const ae=new W.default({dataSource:K.infos,...j.value,...H$1,index:ee});ae.on("uiRegister",()=>{b&&ae.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{$()}}),ae.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:(oe,ie)=>{oe.setAttribute("download",""),oe.setAttribute("target","_blank"),oe.setAttribute("rel","noopener"),ie.on("change",()=>{oe.href=ie.currSlide.data.src})}})}),ae.init()};Y.style.cursor="zoom-in",Y.addEventListener("click",ne),Y.addEventListener("keypress",({key:ae})=>{ae==="Enter"&&ne()})})})};onMounted(()=>{G(),watch(()=>U.path,()=>G())})};var y=defineClientConfig({setup:()=>{A$1()}});const useAutoLink=(b,$=!1)=>{const j=useRouter(),{fullPath:U,meta:G,name:W}=vt(j,encodeURI(b));return{text:!$&&G.s?G.s:G.title||b,link:W==="404"?b:U,...G.i?{icon:G.i}:{}}},useThemeData=()=>useThemeData$1(),useThemeLocaleData=()=>useThemeLocaleData$1(),usePure=()=>computed(()=>Boolean(useThemeData().value.pure)),useMobile=()=>{const b=useThemeData(),$=ref(!1),j=()=>{$.value=window.innerWidth<(b.value.mobileBreakPoint||719)};return onMounted(()=>{j(),useEventListener("resize",j,!1),useEventListener("orientationchange",j,!1)}),$},useNavigate=()=>{const b=useRouter(),$=useRoute();return j=>{if(j)if(j.startsWith("/"))$.path!==j&&b.push(j);else if(j.startsWith("http://")||j.startsWith("https://")||j.startsWith("mailto:"))window&&window.open(j);else{const U=$.path.slice(0,$.path.lastIndexOf("/"));b.push(`${U}/${encodeURI(j)}`)}}},usePageAuthor=()=>{const b=useThemeLocaleData(),$=usePageFrontmatter();return computed(()=>{const{author:j}=$.value;return j?Gt(j):j===!1?[]:Gt(b.value.author,!1)})},usePageCategory=()=>{const b=usePageFrontmatter();return computed(()=>Qt(b.value.category).map($=>{var j,U;return{name:$,path:((U=(j=inject(Symbol.for("categoryMap")))==null?void 0:j.value.map[$])==null?void 0:U.path)||""}}))},usePageTag=()=>{const b=usePageFrontmatter();return computed(()=>Kt(b.value.tag).map($=>{var j,U;return{name:$,path:((U=(j=inject(Symbol.for("tagMap")))==null?void 0:j.value.map[$])==null?void 0:U.path)||""}}))},usePageDate=()=>{const b=usePageFrontmatter(),$=usePageData();return computed(()=>{const{date:j}=b.value;if(j)return rt(j);const{createdTime:U}=$.value.git||{};return U?rt(new Date(U)):null})},usePageInfo=()=>{const b=useThemeLocaleData(),$=usePageData(),j=usePageFrontmatter(),U=usePageAuthor(),G=usePageCategory(),W=usePageTag(),K=usePageDate(),Y=computed(()=>({author:U.value,category:G.value,date:K.value,localizedDate:$.value.localizedDate,tag:W.value,isOriginal:j.value.isOriginal||!1,readingTime:$.value.readingTime||null,pageview:"pageview"in j.value?j.value.pageview:!0})),ee=computed(()=>"pageInfo"in j.value?j.value.pageInfo:"pageInfo"in b.value?b.value.pageInfo:null);return{info:Y,items:ee}};let promise=null,promiseResolve=null;const scrollPromise={wait:()=>promise,pending:()=>{promise=new Promise(b=>promiseResolve=b)},resolve:()=>{promiseResolve==null||promiseResolve(),promise=null,promiseResolve=null}},useScrollPromise=()=>scrollPromise,footer="",PageFooter=defineComponent({name:"PageFooter",setup(){const b=usePageFrontmatter(),$=useThemeLocaleData(),j=usePageAuthor(),U=computed(()=>{const{copyright:K,footer:Y}=b.value;return Y!==!1&&Boolean(K||Y||$.value.displayFooter)}),G=computed(()=>{const{footer:K}=b.value;return K===!1?!1:isString$1(K)?K:$.value.footer||""}),W=computed(()=>"copyright"in b.value?b.value.copyright:"copyright"in $.value?$.value.copyright:j.value.length?`Copyright © ${new Date().getFullYear()} ${j.value[0].name}`:!1);return()=>U.value?h$3("footer",{class:"footer-wrapper"},[h$3("div",{class:"footer",innerHTML:G.value}),W.value?h$3("div",{class:"copyright",innerHTML:W.value}):null]):null}}),I18nIcon=()=>h$3(lt,{name:"i18n"},()=>[h$3("path",{d:"M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z"})]);I18nIcon.displayName="I18nIcon";const GitHubIcon=()=>h$3(lt,{name:"github"},()=>h$3("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));GitHubIcon.displayName="GitHubIcon";const GitlabIcon=()=>h$3(lt,{name:"gitlab"},()=>h$3("path",{d:"M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"}));GitlabIcon.displayName="GitlabIcon";const GiteeIcon=()=>h$3(lt,{name:"gitee"},()=>h$3("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));GiteeIcon.displayName="GiteeIcon";const BitbucketIcon=()=>h$3(lt,{name:"bitbucket"},()=>h$3("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));BitbucketIcon.displayName="BitbucketIcon";const SourceIcon=()=>h$3(lt,{name:"source"},()=>h$3("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));SourceIcon.displayName="SourceIcon";const Icon=b=>{const{icon:$=""}=b;return isLinkHttp($)?h$3("img",{class:"icon",src:$}):$.startsWith("/")?h$3("img",{class:"icon",src:withBase($)}):h$3(resolveComponent("FontIcon"),b)};Icon.displayName="Icon";const AutoLink=defineComponent({name:"AutoLink",inheritAttrs:!1,props:{config:{type:Object,required:!0},exact:Boolean,noExternalLinkIcon:Boolean},emits:{focusout:()=>!0},setup(b,{attrs:$,emit:j,slots:U}){const G=useRoute(),W=useSiteData(),K=toRef(b,"config"),Y=computed(()=>isLinkHttp(K.value.link)),ee=computed(()=>isLinkMailto(K.value.link)||isLinkTel(K.value.link)),ne=computed(()=>ee.value?void 0:K.value.target||(Y.value?"_blank":void 0)),ae=computed(()=>ne.value==="_blank"),oe=computed(()=>!Y.value&&!ee.value&&!ae.value),ie=computed(()=>ee.value?void 0:K.value.rel||(ae.value?"noopener noreferrer":void 0)),se=computed(()=>K.value.ariaLabel||K.value.text),re=computed(()=>{if(b.exact)return!1;const pe=Object.keys(W.value.locales);return pe.length?pe.every(me=>me!==K.value.link):K.value.link!=="/"}),le=computed(()=>oe.value?K.value.activeMatch?new RegExp(K.value.activeMatch).test(G.path):re.value?G.path.startsWith(K.value.link):G.path===K.value.link:!1);return()=>{var _e,Pe,we;const{text:pe,icon:me,link:Ee}=K.value;return oe.value?h$3(RouterLink,{to:Ee,"aria-label":se.value,...$,class:["nav-link",{active:le.value},$.class],onFocusout:()=>j("focusout")},()=>{var he,ce,fe;return((he=U.default)==null?void 0:he.call(U))||[((ce=U.before)==null?void 0:ce.call(U))||h$3(Icon,{icon:me}),pe,(fe=U.after)==null?void 0:fe.call(U)]}):h$3("a",{href:Ee,rel:ie.value,target:ne.value,"aria-label":se.value,...$,class:["nav-link",$.class],onFocusout:()=>j("focusout")},((_e=U.default)==null?void 0:_e.call(U))||[((Pe=U.before)==null?void 0:Pe.call(U))||h$3(Icon,{icon:me}),pe,b.noExternalLinkIcon?null:h$3(ExternalLinkIcon),(we=U.after)==null?void 0:we.call(U)])}}}),dropdownLink="",DropdownLink=defineComponent({name:"NavbarDropdownLink",props:{config:{type:Object,required:!0}},setup(b,{slots:$}){const j=useRoute(),U=toRef(b,"config"),G=computed(()=>U.value.ariaLabel||U.value.text),W=ref(!1);watch(()=>j.path,()=>{W.value=!1});const K=Y=>{Y.detail===0&&(W.value=!W.value)};return()=>{var Y;return h$3("div",{class:["dropdown-wrapper",{open:W.value}]},[h$3("button",{class:"dropdown-title",type:"button","aria-label":G.value,onClick:K},[((Y=$.title)==null?void 0:Y.call($))||h$3("span",{class:"title"},[h$3(Icon,{icon:U.value.icon}),b.config.text]),h$3("span",{class:"arrow"}),h$3("ul",{class:"nav-dropdown"},U.value.children.map((ee,ne)=>{const ae=ne===U.value.children.length-1;return h$3("li",{class:"dropdown-item"},"children"in ee?[h$3("h4",{class:"dropdown-subtitle"},ee.link?h$3(AutoLink,{config:ee,onFocusout:()=>{ee.children.length===0&&ae&&(W.value=!1)}}):h$3("span",ee.text)),h$3("ul",{class:"dropdown-subitem-wrapper"},ee.children.map((oe,ie)=>h$3("li",{class:"dropdown-subitem"},h$3(AutoLink,{config:oe,onFocusout:()=>{ie===ee.children.length-1&&ae&&(W.value=!1)}}))))]:h$3(AutoLink,{config:ee,onFocusout:()=>{ae&&(W.value=!1)}}))}))])])}}}),resolveNavbarItem=(b,$="")=>isString$1(b)?useAutoLink(`${$}${b}`):"children"in b?{...b,...b.link&&!isLinkExternal(b.link)?useAutoLink(`${$}${b.link}`):{},children:b.children.map(j=>resolveNavbarItem(j,`${$}${b.prefix||""}`))}:{...b,link:isLinkExternal(b.link)?b.link:useAutoLink(`${$}${b.link}`).link},useNavbarConfig=()=>computed(()=>(useThemeLocaleData().value.navbar||[]).map(b=>resolveNavbarItem(b))),useNavbarLanguageDropdown=()=>{const b=useRouter(),$=useRouteLocale(),j=useSiteLocaleData(),U=useThemeData(),G=useThemeLocaleData();return computed(()=>{const W=Object.keys(j.value.locales);if(W.length<2)return null;const{path:K,fullPath:Y}=b.currentRoute.value,{navbarLocales:ee}=G.value;return{text:"",ariaLabel:ee==null?void 0:ee.selectLangAriaLabel,children:W.map(ae=>{var pe,me,Ee;const oe=((pe=j.value.locales)==null?void 0:pe[ae])??{},ie=((me=U.value.locales)==null?void 0:me[ae])??{},se=oe.lang||"",re=((Ee=ie.navbarLocales)==null?void 0:Ee.langName)??se;let le;if(se===j.value.lang)le=K;else{const _e=K.replace($.value,ae);le=b.getRoutes().some(Pe=>Pe.path===_e)?Y.replace(K,_e):ie.home??ae}return{text:re,link:le}})}})},getAncestorLinks=(b,$)=>{const j=b.path.replace($,"/").split("/"),U=[];let G=removeEndingSlash($);return j.forEach((W,K)=>{K!==j.length-1?(G+=`${W}/`,U.push(G)):W!==""&&(G+=W,U.push(G))}),U},resolveRepoType=b=>!isLinkHttp(b)||/github\.com/.test(b)?"GitHub":/bitbucket\.org/.test(b)?"Bitbucket":/gitlab\.com/.test(b)?"GitLab":/gitee\.com/.test(b)?"Gitee":null,useNavbarRepo=()=>{const b=useThemeLocaleData(),$=computed(()=>b.value.repo||null),j=computed(()=>$.value?resolveRepoType($.value):null),U=computed(()=>$.value&&!isLinkHttp($.value)?`https://github.com/${$.value}`:$.value),G=computed(()=>U.value?b.value.repoLabel??(j.value===null?"Source":j.value):null);return computed(()=>!U.value||!G.value||b.value.repoDisplay===!1?null:{type:j.value||"Source",label:G.value,link:U.value})};defineComponent({name:"LanguageDropdown",setup(){const b=useNavbarLanguageDropdown();return()=>b.value?h$3("div",{class:"nav-item"},h$3(DropdownLink,{class:"i18n-dropdown",config:b.value},{title:()=>{var $;return h$3(I18nIcon,{"aria-label":($=b.value)==null?void 0:$.ariaLabel,style:{width:"1rem",height:"1rem",verticalAlign:"middle"}})}})):null}});const navbarBrand="",NavbarBrand=defineComponent({name:"NavbarBrand",setup(){const b=useRouteLocale(),$=useSiteLocaleData(),j=useThemeLocaleData(),U=computed(()=>j.value.home||b.value),G=computed(()=>$.value.title),W=computed(()=>j.value.logo?withBase(j.value.logo):null),K=computed(()=>j.value.logoDark?withBase(j.value.logoDark):null);return()=>h$3(RouterLink,{to:U.value,class:"brand"},()=>[W.value?h$3("img",{class:["logo",{light:Boolean(K.value)}],src:W.value,alt:G.value}):null,K.value?h$3("img",{class:["logo dark"],src:K.value,alt:G.value}):null,G.value?h$3("span",{class:["site-name",{"hide-in-pad":W.value}]},G.value):null])}}),navbarLinks="",NavbarLinks=defineComponent({name:"NavbarLinks",setup(){const b=useNavbarConfig();return()=>b.value.length?h$3("nav",{class:"nav-links"},[...b.value.map($=>h$3("div",{class:"nav-item hide-in-mobile"},"children"in $?h$3(DropdownLink,{config:$}):h$3(AutoLink,{config:$})))]):null}});function _toConsumableArray(b){if(Array.isArray(b)){for(var $=0,j=Array(b.length);$<b.length;$++)j[$]=b[$];return j}else return Array.from(b)}var hasPassiveEvents=!1;if(typeof window<"u"){var passiveTestOptions={get passive(){hasPassiveEvents=!0}};window.addEventListener("testPassive",null,passiveTestOptions),window.removeEventListener("testPassive",null,passiveTestOptions)}var isIosDevice=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),locks=[],documentListenerAdded=!1,initialClientY=-1,previousBodyOverflowSetting=void 0,previousBodyPaddingRight=void 0,allowTouchMove=function b($){return locks.some(function(j){return!!(j.options.allowTouchMove&&j.options.allowTouchMove($))})},preventDefault=function b($){var j=$||window.event;return allowTouchMove(j.target)||j.touches.length>1?!0:(j.preventDefault&&j.preventDefault(),!1)},setOverflowHidden=function b($){if(previousBodyPaddingRight===void 0){var j=!!$&&$.reserveScrollBarGap===!0,U=window.innerWidth-document.documentElement.clientWidth;j&&U>0&&(previousBodyPaddingRight=document.body.style.paddingRight,document.body.style.paddingRight=U+"px")}previousBodyOverflowSetting===void 0&&(previousBodyOverflowSetting=document.body.style.overflow,document.body.style.overflow="hidden")},restoreOverflowSetting=function b(){previousBodyPaddingRight!==void 0&&(document.body.style.paddingRight=previousBodyPaddingRight,previousBodyPaddingRight=void 0),previousBodyOverflowSetting!==void 0&&(document.body.style.overflow=previousBodyOverflowSetting,previousBodyOverflowSetting=void 0)},isTargetElementTotallyScrolled=function b($){return $?$.scrollHeight-$.scrollTop<=$.clientHeight:!1},handleScroll=function b($,j){var U=$.targetTouches[0].clientY-initialClientY;return allowTouchMove($.target)?!1:j&&j.scrollTop===0&&U>0||isTargetElementTotallyScrolled(j)&&U<0?preventDefault($):($.stopPropagation(),!0)},disableBodyScroll=function b($,j){if(!$){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!locks.some(function(G){return G.targetElement===$})){var U={targetElement:$,options:j||{}};locks=[].concat(_toConsumableArray(locks),[U]),isIosDevice?($.ontouchstart=function(G){G.targetTouches.length===1&&(initialClientY=G.targetTouches[0].clientY)},$.ontouchmove=function(G){G.targetTouches.length===1&&handleScroll(G,$)},documentListenerAdded||(document.addEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!0)):setOverflowHidden(j)}},clearAllBodyScrollLocks=function b(){isIosDevice?(locks.forEach(function($){$.targetElement.ontouchstart=null,$.targetElement.ontouchmove=null}),documentListenerAdded&&(document.removeEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!1),initialClientY=-1):restoreOverflowSetting(),locks=[]};const navScreenDropdown="",NavScreenDropdown=defineComponent({name:"NavScreenDropdown",props:{config:{type:Object,required:!0}},setup(b){const $=useRoute(),j=toRef(b,"config"),U=computed(()=>j.value.ariaLabel||j.value.text),G=ref(!1);watch(()=>$.path,()=>{G.value=!1});const W=(K,Y)=>Y[Y.length-1]===K;return()=>[h$3("button",{class:["nav-screen-dropdown-title",{active:G.value}],type:"button","aria-label":U.value,onClick:()=>{G.value=!G.value}},[h$3("span",{class:"title"},[h$3(Icon,{icon:j.value.icon}),b.config.text]),h$3("span",{class:["arrow",G.value?"down":"right"]})]),h$3("ul",{class:["nav-screen-dropdown",{hide:!G.value}]},j.value.children.map(K=>h$3("li",{class:"dropdown-item"},"children"in K?[h$3("h4",{class:"dropdown-subtitle"},K.link?h$3(AutoLink,{config:K,onFocusout:()=>{W(K,j.value.children)&&K.children.length===0&&(G.value=!1)}}):h$3("span",K.text)),h$3("ul",{class:"dropdown-subitem-wrapper"},K.children.map(Y=>h$3("li",{class:"dropdown-subitem"},h$3(AutoLink,{config:Y,onFocusout:()=>{W(Y,K.children)&&W(K,j.value.children)&&(G.value=!1)}}))))]:h$3(AutoLink,{config:K,onFocusout:()=>{W(K,j.value.children)&&(G.value=!1)}}))))]}}),navScreenLinks="",NavScreenLinks=defineComponent({name:"NavScreenLinks",setup(){const b=useNavbarConfig();return()=>b.value.length?h$3("nav",{class:"nav-screen-links"},b.value.map($=>h$3("div",{class:"navbar-links-item"},"children"in $?h$3(NavScreenDropdown,{config:$}):h$3(AutoLink,{config:$})))):null}}),DarkIcon=()=>h$3(lt,{name:"dark"},()=>h$3("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));DarkIcon.displayName="DarkIcon";const LightIcon=()=>h$3(lt,{name:"light"},()=>h$3("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));LightIcon.displayName="LightIcon";const AutoIcon=()=>h$3(lt,{name:"auto"},()=>h$3("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));AutoIcon.displayName="AutoIcon";const EnterFullScreenIcon=()=>h$3(lt,{name:"enter-fullscreen"},()=>h$3("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));EnterFullScreenIcon.displayName="EnterFullScreenIcon";const CancelFullScreenIcon=()=>h$3(lt,{name:"cancel-fullscreen"},()=>h$3("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));CancelFullScreenIcon.displayName="CancelFullScreenIcon";const OutlookIcon=()=>h$3(lt,{name:"outlook"},()=>[h$3("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);OutlookIcon.displayName="OutlookIcon";const darkModeSymbol=Symbol.for("darkMode"),useDarkMode=()=>{const b=inject(darkModeSymbol);if(!b)throw new Error("useDarkMode() is called without provider.");return b},injectDarkMode=b=>{const $=useThemeData(),j=usePreferredDark(),U=useStorage("vuepress-theme-hope-scheme","auto"),G=computed(()=>{const{darkmode:W}=$.value;return W==="disable"?!1:W==="enable"?!0:W==="auto"?j.value:W==="toggle"?U.value==="dark":U.value==="dark"||U.value==="auto"&&j.value});b.provide(darkModeSymbol,{isDarkMode:G,status:U}),Object.defineProperties(b.config.globalProperties,{$isDarkMode:{get:()=>G.value}})},setupDarkMode=()=>{const{isDarkMode:b}=useDarkMode(),$=(j=b.value)=>{const U=window==null?void 0:window.document.querySelector("html");U==null||U.setAttribute("data-theme",j?"dark":"light")};onMounted(()=>{watch(b,$,{immediate:!0})})},appearanceSwitch="",AppearanceSwitch=defineComponent({name:"AppearanceSwitch",setup(){const b=useThemeData(),{status:$}=useDarkMode(),j=computed(()=>b.value.darkmode),U=()=>{j.value==="switch"?$.value={light:"dark",dark:"auto",auto:"light"}[$.value]:$.value=$.value==="light"?"dark":"light"};return()=>h$3("button",{id:"appearance-switch",onClick:()=>U()},[h$3(AutoIcon,{style:{display:$.value==="auto"?"block":"none"}}),h$3(DarkIcon,{style:{display:$.value==="dark"?"block":"none"}}),h$3(LightIcon,{style:{display:$.value==="light"?"block":"none"}})])}}),AppearanceMode=defineComponent({name:"AppearanceMode",setup(){const b=useThemeData(),$=useThemeLocaleData(),j=computed(()=>$.value.outlookLocales.darkmode),U=computed(()=>b.value.darkmode),G=computed(()=>U.value==="switch"||U.value==="toggle");return()=>G.value?h$3("div",{class:"appearance-wrapper"},[h$3("label",{class:"appearance-title",for:"appearance-switch"},j.value),h$3(AppearanceSwitch)]):null}}),themeColorPicker="",ThemeColorPicker=defineComponent({name:"ThemeColorPicker",props:{themeColor:{type:Object,required:!0}},setup(b){const $=(j="")=>{const U=document.documentElement.classList,G=Object.keys(b.themeColor).map(W=>`theme-${W}`);if(!j){localStorage.removeItem("theme"),U.remove(...G);return}U.remove(...G.filter(W=>W!==`theme-${j}`)),U.add(`theme-${j}`),localStorage.setItem("theme",j)};return onMounted(()=>{const j=localStorage.getItem("theme");j&&$(j)}),()=>h$3("ul",{id:"theme-color-picker"},[h$3("li",h$3("span",{class:"theme-color",onClick:()=>$()})),...Object.entries(b.themeColor).map(([j,U])=>h$3("li",h$3("span",{style:{background:U},onClick:()=>$(j)})))])}}),ThemeColor=defineComponent({name:"ThemeColor",setup(){const b=useThemeData(),$=useThemeLocaleData(),j=computed(()=>$.value.outlookLocales.themeColor),U=computed(()=>{const{themeColor:G}=b.value;return G===!1?null:G});return()=>U.value?h$3("div",{class:"theme-color-wrapper"},[h$3("label",{class:"theme-color-title",for:"theme-color-picker"},j.value),h$3(ThemeColorPicker,{themeColor:U.value})]):null}}),toggleFullScreenButton="",ToggleFullScreenButton=defineComponent({name:"ToggleFullScreenButton",setup(){const b=useThemeLocaleData(),{isSupported:$,isFullscreen:j,toggle:U}=useFullscreen(),G=computed(()=>b.value.outlookLocales.fullscreen);return()=>$?h$3("div",{class:"fullscreen-wrapper"},[h$3("label",{class:"full-screen-title",for:"full-screen-switch"},G.value),h$3("button",{class:"full-screen",id:"full-screen-switch",ariaPressed:j.value,onClick:()=>U()},j.value?h$3(CancelFullScreenIcon):h$3(EnterFullScreenIcon))]):null}}),OutlookSettings=defineComponent({name:"OutlookSettings",setup(){const b=useThemeData(),$=usePure(),j=computed(()=>b.value.darkmode!=="disable"&&b.value.darkmode!=="enable"),U=computed(()=>!$.value&&Boolean(b.value.themeColor)),G=computed(()=>!$.value&&b.value.fullscreen);return()=>h$3(ClientOnly,()=>[U.value?h$3(ThemeColor):null,j.value?h$3(AppearanceMode):null,G.value?h$3(ToggleFullScreenButton):null])}}),navScreen="",NavScreen=defineComponent({name:"NavScreen",props:{show:Boolean},emits:{close:()=>!0},setup(b,{emit:$,slots:j}){const U=useRoute(),G=useMobile(),W=ref();return onMounted(()=>{watch(G,K=>{!K&&b.show&&(clearAllBodyScrollLocks(),$("close"))}),watch(()=>U.path,()=>{clearAllBodyScrollLocks(),$("close")})}),onBeforeUnmount(()=>{clearAllBodyScrollLocks()}),()=>h$3(Transition,{name:"fade",onEnter:()=>disableBodyScroll(W.value,{reserveScrollBarGap:!0}),onAfterLeave:()=>clearAllBodyScrollLocks()},()=>{var K,Y;return b.show?h$3("div",{id:"nav-screen",ref:W},h$3("div",{class:"container"},[(K=j.before)==null?void 0:K.call(j),h$3(NavScreenLinks),h$3("div",{class:"outlook-wrapper"},h$3(OutlookSettings)),(Y=j.after)==null?void 0:Y.call(j)])):null})}}),outlookButton="",OutlookButton=defineComponent({name:"OutlookButton",setup(){const{isSupported:b}=useFullscreen(),$=useThemeData(),j=usePure(),U=useRoute(),G=ref(!1),W=computed(()=>$.value.darkmode!=="disable"&&$.value.darkmode!=="enable"),K=computed(()=>!j.value&&Boolean($.value.themeColor)),Y=computed(()=>!j.value&&$.value.fullscreen&&b);return watch(()=>U.path,()=>{G.value=!1}),()=>W.value||Y.value||K.value?h$3("div",{class:"nav-item hide-in-mobile"},W.value&&!Y.value&&!K.value?h$3(AppearanceSwitch):Y.value&&!W.value&&!K.value?h$3(ToggleFullScreenButton):h$3("button",{class:["outlook-button",{open:G.value}],tabindex:"-1",ariaHidden:!0},[h$3(OutlookIcon),h$3("div",{class:"outlook-dropdown"},h$3(OutlookSettings))])):null}}),toggleNavbarButton="",ToggleNavbarButton=({active:b=!1},{emit:$})=>h$3("button",{class:["toggle-navbar-button",{"is-active":b}],"aria-label":"Toggle Navbar","aria-expanded":b,"aria-controls":"nav-screen",onClick:()=>$("toggle")},h$3("span",{class:"button-container"},[h$3("span",{class:"button-top"}),h$3("span",{class:"button-middle"}),h$3("span",{class:"button-bottom"})]));ToggleNavbarButton.displayName="ToggleNavbarButton";const toggleSidebarButton="",ToggleSidebarButton=(b,{emit:$})=>h$3("button",{class:"toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>$("toggle")},h$3("span",{class:"icon"}));ToggleSidebarButton.displayName="ToggleSidebarButton";ToggleSidebarButton.emits=["toggle"];const repoLink="",RepoLink=defineComponent({name:"RepoLink",components:{BitbucketIcon,GiteeIcon,GitHubIcon,GitlabIcon,SourceIcon},setup(){const b=useNavbarRepo();return()=>b.value?h$3("div",{class:"nav-item"},h$3("a",{class:"repo-link",href:b.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":b.value.label},h$3(resolveComponent(`${b.value.type}Icon`),{style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}}),navbar="",Navbar=defineComponent({name:"NavBar",emits:{toggleSidebar:()=>!0},setup(b,{emit:$,slots:j}){const U=useThemeLocaleData(),G=useMobile(),W=ref(!1),K=computed(()=>{const{navbarAutoHide:ee}=U.value;return ee!=="none"&&(ee==="always"||G.value)}),Y=computed(()=>U.value.navbarLayout||{left:["Brand"],center:["Links"],right:["Language","Repo","Outlook","Search"]});return()=>{var ne,ae,oe,ie,se,re;const ee={Brand:h$3(NavbarBrand),Language:null,Links:h$3(NavbarLinks),Repo:h$3(RepoLink),Outlook:h$3(OutlookButton),Search:xt("Docsearch")?h$3(resolveComponent("Docsearch")):xt("SearchBox")?h$3(resolveComponent("SearchBox")):xt("SearchBox")?h$3(resolveComponent("SearchBox")):null};return[h$3("header",{class:["navbar",{"auto-hide":K.value,"hide-icon":!U.value.navbarIcon}]},[h$3("div",{class:"navbar-left"},[h$3(ToggleSidebarButton,{onToggle:()=>{W.value&&(W.value=!1),$("toggleSidebar")}}),(ne=j.leftStart)==null?void 0:ne.call(j),...Y.value.left.map(le=>ee[le]),(ae=j.leftEnd)==null?void 0:ae.call(j)]),h$3("div",{class:"navbar-center"},[(oe=j.centerStart)==null?void 0:oe.call(j),...Y.value.center.map(le=>ee[le]),(ie=j.centerEnd)==null?void 0:ie.call(j)]),h$3("div",{class:"navbar-right"},[(se=j.rightStart)==null?void 0:se.call(j),...Y.value.right.map(le=>ee[le]),(re=j.rightEnd)==null?void 0:re.call(j),h$3(ToggleNavbarButton,{active:W.value,onToggle:()=>{W.value=!W.value}})])]),h$3(NavScreen,{show:W.value,onClose:()=>{W.value=!1}},{before:()=>{var le;return(le=j.screenTop)==null?void 0:le.call(j)},after:()=>{var le;return(le=j.screenBottom)==null?void 0:le.call(j)}})]}}}),isActiveSidebarItem=(b,$,j=!1)=>"activeMatch"in $?new RegExp($.activeMatch).test(b.path):At(b,$.link)?!0:$.children&&!j?$.children.some(U=>isActiveSidebarItem(b,U)):!1,isMatchedSidebarItem=(b,$)=>$.type==="group"?$.children.some(j=>j.type==="group"?isMatchedSidebarItem(b,j):j.type==="page"&&isActiveSidebarItem(b,j,!0))||"prefix"in $&&At(b,$.prefix):!1,renderItem=(b,$)=>b.link?h$3(AutoLink,{...$,config:b}):h$3("p",$,[h$3(Icon,{icon:b.icon}),b.text]),renderChildren$1=b=>{const $=useRoute();return b?h$3("ul",{class:"sidebar-sub-headers"},b.map(j=>{const U=isActiveSidebarItem($,j,!0);return h$3("li",{class:"sidebar-sub-header"},[renderItem(j,{class:["sidebar-link","heading",{active:U}]}),renderChildren$1(j.children)])})):null},sidebarData={"/study/":["README.md",{text:"Vue3+TS 快速上手",prefix:"vue3_quick_study/",collapsible:!0,icon:"note",children:[{text:"1.初识 TypeScript",prefix:"chapter1/",collapsible:!0,icon:"note",children:["04_webpack打包.md","01_初识TS.md","02_安装TS.md","03_HelloWorld.md"]},{text:"2.TypeScript 常用语法",prefix:"chapter2/",collapsible:!0,icon:"note",children:["4_function.md","1_type.md","6_other.md","2_interface.md","5_generic.md","3_class.md"]},{text:"3.Vue3快速上手",prefix:"chapter3/",collapsible:!0,icon:"note",children:["02_创建vue3项目.md","01_认识Vue3.md"]},{text:"4.Composition API",prefix:"chapter4/",collapsible:!0,icon:"note",children:["01_Composition API_常用部分.md","02_Composition API_其它部分.md","04_Composition VS Option.md","03_手写组合API.md"]},{text:"5.其它新组合和API",prefix:"chapter5/",collapsible:!0,icon:"note",children:["02_其他新API.md","01_新组件.md"]}]},"vuepress.md","form表单系统.md"],"/algorithm/":["README.md","七大排序.md","十大排序.md","快速排序.md","牛客网-华为机试.md"],"/dev/":["README.md","18个Java8日期处理.md","24 个常见的Docker疑难杂症处理技巧.md","36张图梳理 Intellij IDEA常用设置.md","7000字+24张图,带你彻底弄懂线程池.md","15000字的SQL语句大全.md","DateTimeFormatter-替换SimpleDateFormat.md","Docker搭建ELK日志分析系统.md","ES6语法详解.md","fastjson中JSONObject的常用使用方法.md","Guava中Map的骚操作.md","IDEA206个快捷键-动图演示.md","IDEA中的各种调试代码技巧.md","IntelliJIDEA快捷键大全+动图演示.md","IDEA日常使用介绍.md","idea-tips.md","JApiDocs教程.md","Java8Stream之collect().md","Java命名规范.md","Java8多线程CompletableFuture.md","Java中List的stream使用.md","Java实现gz压缩与解压缩.md","Java导入导出Excel-POI.md","Java电子书笔记.md","Jenkins+Docker一键自动化部署.md","JRebel热部署的使用.md","jreble安装及破解方法.md","JSP和JSTL获取服务器参数.md","JUC并发编程.md","logback自定义日志脱敏组件.md","Logback 配置文件优化.md","mybatis 建表、删表、查表语句(mysql数据库).md","MyBatis-Plus联表查询-Mybatis-Plus-Join.md","MyEclipse.md","openssl一键自签证书.md","Optional非空判断.md","Python批量下载某网页的所有图片.md","Python自动化办公库.md","Quartz任务调度框架整合使用.md","Redis总结：缓存雪崩、缓存击穿、缓存穿透.md","RocketMQ笔记：应用实践.md","SpringBoot+MybatisPlus+ClickHouse轻松实现增删改查.md","SpringBoot+Netty+WebSocket实现消息推送.md","SpringBoot整合流程引擎Flowable.md","SpringBoot项目鉴权的 4 种方式.md","SpringBoot启动banner.md","SpringCloudAlibaba.md","SpringCloudGateway+Oauth2实现统一认证和鉴权.md","SpringCloud优雅下线以及灰度发布.md","Spring 面试63问.md","SpringBoot内置工具类.md","SpringBoot并行任务.md","SpringBoot引入线程池+Queue缓冲队列实现高并发下单业务.md","SpringBoot接口数据加解密实战.md","SpringBoot整合Socket实战案例.md","SpringBoot+Kafka+ELK完成海量日志收集.md","SpringBoot+SpringSecurity前后端分离+Jwt的权限认证.md","SpringBoot+WebSocket实时监控异常.md","SpringBoot.md","SpringBoot中Rest的使用和请求参数注解.md","SpringBoot中如何优雅的使用多线程.md","SpringBoot中如何解决CORS跨域问题.md","Springboot利用ThreadPoolTaskExecutor多线程批量插入百万级数据.md","SpringBoot利用ThreadPoolTaskExecutor批量插入.md","SpringBoot定时任务动态管理.md","SpringBoot定时任务动态管理通用解决方案.md","将Bean放入Spring容器中的7种方式.md","springboot打包不同环境配置与shell脚本部署.md","SpringBoot整合Mybatis-plus及用法.md","SpringBoot整合Mybatis-plus及用法2.md","SpringBoot超大文件上传.md","SpringBoot集成Flowable做工作流.md","springboot人脸识别登录.md","SpringCloudGatewayAPI接口安全设计(加密签名).md","spring线程池多线程并发处理大批量数据.md","sql语句优化的30种方法.md","Vue子组件与父组件传值.md","VUE下拉列表动态切换.md","Vue开发报错问题解决.md","使用easypoi导出excel实现动态列.md","使用docker快速安装oracle.md","六十多个vscode 插件.md","分布式JVM监控工具.md","如何读取resources目录下的文件路径（九种方式）.md","实用前端网站工具.md","报错异常解决.md","微服务架构统一安全认证设计与实践.md","搞定SpringBoot接口恶意刷新和暴力请求.md","改造BeanUtils优雅实现List数据拷贝.md","数据库表结构文档生成工具.md","数据类型Java类型.md","本地缓存Caffeine.md","架构师图谱·微服务&消息队列篇.md","微服务&消息队列.md","树的定义、树的存储结构.md",{text:"编码规范",prefix:"coding-standard/",collapsible:!0,icon:"code",children:["README.md"]},"腾讯云后端总结的面试15问.md","通过Nginx来实现禁止国外IP访问网站.md","通过注解实现接口返回数据脱敏.md","金额计算BigDecimal及踩坑.md"],"/linux/":["README.md","Centos7Minimal.md","CNS服务器搭建教程.md","Docker安装Oracle.md","ESXI+iKuai+OpenWrt.md","Euserv.md","exsi+黑群晖+爱快+openwrt.md","Linux发送tcp包最简单方法-netcat.md","Linux图形化管理服务器的神器Cockpit.md","Linux新开机器配置.md","Linux总结.md","Linux脚本工具.md","MySQL.md","MySQL压缩版安装配置.md","Nginx一网打尽.md","Nginx万字总结.md","Nginx从安装到高可用.md","Nginx安装Web应用防火墙.md","openssl一键自签证书.md","OpenSSL生成自签名证书.md","Oracle数据库基础.md","Oracle的数据导入与导出-数据库.md","Podman开源的容器.md","python安装源.md","SSH客户端软件.md","tmpfiles.d中文手册.md","VMware-Esxi.md","Windows子系统WSL.md","不支持虚拟化的AMD-V.md","NodeJS-Maven-Mysql.md","bt.md","实用 shell 脚本.md","搭建基于DockerDesktop&WSL2.md","服务器入侵排查.md","服务器运行数据查看工具.md","自动封禁IP脚本.md","详解K8S高可用部署.md"],"/script/":["README.md","Alist常用样式代码.md","repository.md","使用CloudFlareWorkers反代网站.md","脚本仓库.md"],"/tools/":["README.md","develop-tools.md","API.md","lenovo.md","SSH客户端软件.md","免费思维导图.md","software.md","在线万能查询和在线工具.md","截图工具.md","短视频解析.md","阿里十大最受开发者欢迎的工具.md"],"/source_code/":["README.md","国内常用静态资源CDN公共库.md","开源后台管理系统.md","admin.md"],"/git/":["README.md","git_emoji.md","Git、GitHub、Gitee.md","GitHub-Auto-Commit.md"],"/daily/":["README.md","Share强制激活高级版.md","Thanox墓碑情景模式.md","Thanox情景模式.md","Xposed edge pro入门教程.md","Xposed-edge-pro Shell命令.md","Xposed-edge-pro Shell命令-打开微信好友聊天界面.md","一个减少MIUI动画掉帧的方法.md","一百多影视VIP视频解析接口.md","世界大学.md","全球各大免费电子图书馆汇集.md","关闭微信广告.md","去除MIUI10秒的警告.md","工程模式码(拨号键盘).md","广告拦截规则整理.md","影视大全.md","影视软件TV-APK.md","怎么从客观角度看待大学封校行为.md","摩托罗拉X40X30S30Pro全机型解锁BL.md","短视频网页在线去水印下载.md","程序员延寿指南.md"],"/pc/":["README.md","9个很酷的CMD命令.md","StartAllBack(StartIsBack)v3.2.1Stable.md","win10-11皆可干货分享.md","win10快捷键.md","Windows10使用优化方案.md","删除 windows 服务.md","安装WSA-激活GPU-双击安装APK.md","激活码.md","新版本Edge提示由你的组织管理.md","解决浏览器跨域问题.md"],"/essay/":["README.md","人生三境界.md","人生最好的三种状态.md","以你之名，书我一生.md","How-To-Ask-Questions.md","早安心语220519.md","鲁迅名言.md"],"/other/":["README.md","API.md","Backblaze(B2)套用CloudFlare静态文件存储.md","Bing必应API.md","clash-v2ray.md","Microsoft-365-E5-RenewX.md","Microsoft-365-E5-RenewPlus.md","Euserv.md","Github技巧.md","QQ动态群聊昵称代码.md","Steam免费解锁.md","临时邮箱和接码.md","免费VPS.md","免费加速器.md","免费图标.md","免费工具集锦.md","免费插图.md","免费资源集锦.md","免费随机图片api.md","免费图库.md","图片防盗链的破解和反破解.md","影视.md","OfficeE5.md","新版QQ修改彩色颜色字体代码教程.md","generate_204服务汇总.md","浏览器UA.md","漏洞监控平台Monitor.md","猫影视.md","电子书网站.md","电视工具箱.md","白嫖机场.md","直播源.md","程序员常逛的网站.md","网址.md","网站文献下载.md","美团年货电子书.md","蓝奏云安卓APP合集.md","谷歌Gmail注册显示此号码不能验证的解决办法.md","高清视频解析接口.md"]},resolvePrefix=(b="",$="")=>$.startsWith("/")?$:`${ensureEndingSlash(b)}${$}`,headerToSidebarItem=(b,$)=>{const j=usePageData();return{type:"heading",text:b.title,link:`${j.value.path}#${b.slug}`,children:headersToSidebarItemChildren(b.children,$)}},headersToSidebarItemChildren=(b,$)=>$>0?b.map(j=>headerToSidebarItem(j,$-1)):[],resolveHeadingSidebarItems=b=>{const $=usePageData();return headersToSidebarItemChildren($.value.headers,b)},resolveArraySidebarItems=(b,$,j="")=>{const U=usePageData(),G=useRoute(),W=(K,Y=j)=>{var ne;const ee=isString$1(K)?useAutoLink(resolvePrefix(Y,K)):K.link?{...K,...isLinkExternal(K.link)?{}:{link:useAutoLink(resolvePrefix(Y,K.link)).link}}:K;if("children"in ee){const ae=resolvePrefix(Y,ee.prefix),oe=ee.children==="structure"?sidebarData[ae]:ee.children;return{type:"group",...ee,prefix:ae,children:oe.map(ie=>W(ie,ae))}}return{type:"page",...ee,children:ee.link===G.path?headersToSidebarItemChildren(((ne=U.value.headers[0])==null?void 0:ne.level)===1?U.value.headers[0].children:U.value.headers,$):[]}};return b.map(K=>W(K))},resolveMultiSidebarItems=(b,$)=>{const j=useRoute(),U=Object.keys(b).sort((G,W)=>W.length-G.length);for(const G of U)if(decodeURI(j.path).startsWith(G)){const W=b[G];return W?resolveArraySidebarItems(W==="structure"?sidebarData[G]:W,$,G):[]}return console.warn(`${j.path} is missing sidebar config.`),[]},resolveSidebarItems=()=>{const b=useRouteLocale(),$=usePageFrontmatter(),j=useThemeLocaleData(),U=$.value.home?!1:$.value.sidebar??j.value.sidebar??"structure",G=$.value.headerDepth??j.value.headerDepth??2;return U===!1?[]:U==="heading"?resolveHeadingSidebarItems(G):U==="structure"?resolveArraySidebarItems(sidebarData[b.value],G,b.value):isArray(U)?resolveArraySidebarItems(U,G):isPlainObject(U)?resolveMultiSidebarItems(U,G):[]},sidebarItemsSymbol=Symbol.for("sidebarItems"),setupSidebarItems=()=>{const b=computed(()=>resolveSidebarItems());provide(sidebarItemsSymbol,b)},useSidebarItems=()=>{const b=inject(sidebarItemsSymbol);if(!b)throw new Error("useSidebarItems() is called without provider.");return b},sidebarChild="",SidebarChild=defineComponent({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(b){const $=useRoute();return()=>[renderItem(b.config,{class:["sidebar-link",`sidebar-${b.config.type}`,{active:isActiveSidebarItem($,b.config,!0)}],exact:!0}),renderChildren$1(b.config.children)]}}),sidebarGroup="",SidebarGroup=defineComponent({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:{toggle:()=>!0},setup(b,{emit:$}){const j=useRoute(),U=computed(()=>isActiveSidebarItem(j,b.config)),G=computed(()=>isActiveSidebarItem(j,b.config,!0));return()=>{const{collapsible:W,children:K=[],icon:Y,prefix:ee,link:ne,text:ae}=b.config;return h$3("section",{class:"sidebar-group"},[h$3(W?"button":"p",{class:["sidebar-heading",{clickable:W||ne,exact:G.value,active:U.value}],...W?{onClick:()=>$("toggle"),onKeydown:oe=>{oe.key==="Enter"&&$("toggle")}}:{}},[h$3(Icon,{icon:Y}),ne?h$3(RouterLink,{to:ne,class:"title"},()=>ae):h$3("span",{class:"title"},ae),W?h$3("span",{class:["arrow",b.open?"down":"right"]}):null]),b.open||!W?h$3(SidebarLinks,{key:ee,config:K}):null])}}}),sidebarLinks="",SidebarLinks=defineComponent({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(b){const $=useRoute(),j=ref(-1),U=G=>{j.value=G===j.value?-1:G};return watch(()=>$.path,()=>{const G=b.config.findIndex(W=>isMatchedSidebarItem($,W));j.value=G},{immediate:!0,flush:"post"}),()=>h$3("ul",{class:"sidebar-links"},b.config.map((G,W)=>h$3("li",G.type==="group"?h$3(SidebarGroup,{config:G,open:W===j.value,onToggle:()=>U(W)}):h$3(SidebarChild,{config:G}))))}}),sidebar="",Sidebar=defineComponent({name:"SideBar",setup(b,{slots:$}){const j=useRoute(),U=useThemeLocaleData(),G=useSidebarItems(),W=ref();return onMounted(()=>{watch(()=>j.hash,K=>{const Y=document.querySelector(`.sidebar a.sidebar-link[href="${j.path}${K}"]`);if(!Y)return;const{top:ee,height:ne}=W.value.getBoundingClientRect(),{top:ae,height:oe}=Y.getBoundingClientRect();ae<ee?Y.scrollIntoView(!0):ae+oe>ee+ne&&Y.scrollIntoView(!1)})}),()=>{var K,Y,ee;return h$3("aside",{class:["sidebar",{"hide-icon":!U.value.sidebarIcon}],ref:W},[(K=$.top)==null?void 0:K.call($),((Y=$.default)==null?void 0:Y.call($))||h$3(SidebarLinks,{config:G.value}),(ee=$.bottom)==null?void 0:ee.call($)])}}}),common="",CommonWrapper=defineComponent({name:"CommonWrapper",props:{noNavbar:Boolean,noSidebar:Boolean},setup(b,{slots:$}){const j=useRouter(),U=usePageData(),G=usePageFrontmatter(),W=useThemeLocaleData(),K=useMobile(),Y=ref(!1),ee=computed(()=>b.noNavbar||G.value.navbar===!1||W.value.navbar===!1?!1:Boolean(U.value.title||W.value.logo||W.value.repo||W.value.navbar)),ne=useSidebarItems(),ae=computed(()=>b.noSidebar?!1:G.value.sidebar!==!1&&ne.value.length!==0&&!G.value.home),oe=ref(!1),ie=ref(!1),se=he=>{oe.value=typeof he=="boolean"?he:!oe.value},re=he=>{ie.value=typeof he=="boolean"?he:!ie.value},le={x:0,y:0},pe=he=>{le.x=he.changedTouches[0].clientX,le.y=he.changedTouches[0].clientY},me=he=>{const ce=he.changedTouches[0].clientX-le.x,fe=he.changedTouches[0].clientY-le.y;Math.abs(ce)>Math.abs(fe)*1.5&&Math.abs(ce)>40&&(ce>0&&le.x<=80?se(!0):se(!1))},Ee=computed(()=>G.value.home?!1:G.value.toc||W.value.toc!==!1&&G.value.toc!==!1),_e=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;let Pe,we=0;return useEventListener("scroll",useThrottleFn(()=>{const he=_e();we<he&&he>58?oe.value||(Y.value=!0):Y.value=!1,we=he},300,!0)),watch(K,he=>{he||se(!1)}),onMounted(()=>{Pe=j.afterEach(()=>{se(!1)})}),onBeforeUnmount(()=>{Pe()}),()=>h$3("div",{class:["theme-container",{"no-navbar":!ee.value,"no-sidebar":!ae.value&&!($.sidebar||$.sidebarTop||$.sidebarBottom),"has-toc":Ee.value,"hide-navbar":Y.value,"sidebar-collapsed":!K.value&&ie.value,"sidebar-open":K.value&&oe.value},G.value.containerClass||""],onTouchStart:pe,onTouchEnd:me},h$3(xt("GlobalEncrypt")?resolveComponent("GlobalEncrypt"):Mt,()=>{var he;return[ee.value?h$3(Navbar,{onToggleSidebar:()=>se()},{leftStart:()=>{var ce;return(ce=$.navbarLeftStart)==null?void 0:ce.call($)},leftEnd:()=>{var ce;return(ce=$.navbarLeftEnd)==null?void 0:ce.call($)},centerStart:()=>{var ce;return(ce=$.navbarCenterStart)==null?void 0:ce.call($)},centerEnd:()=>{var ce;return(ce=$.navbarCenterEnd)==null?void 0:ce.call($)},rightStart:()=>{var ce;return(ce=$.navbarRightStart)==null?void 0:ce.call($)},rightEnd:()=>{var ce;return(ce=$.navbarRightEnd)==null?void 0:ce.call($)},screenTop:()=>{var ce;return(ce=$.navScreenTop)==null?void 0:ce.call($)},screenBottom:()=>{var ce;return(ce=$.navScreenBottom)==null?void 0:ce.call($)}}):null,h$3(Transition,{name:"fade"},()=>oe.value?h$3("div",{class:"sidebar-mask",onClick:()=>se(!1)}):null),h$3(Transition,{name:"fade"},()=>K.value?null:h$3("div",{class:"toggle-sidebar-wrapper",onClick:()=>re()},h$3("span",{class:["arrow",ie.value?"right":"left"]}))),h$3(Sidebar,{},{...$.sidebar?{default:()=>{var ce;return(ce=$.sidebar)==null?void 0:ce.call($)}}:{},top:()=>{var ce;return(ce=$.sidebarTop)==null?void 0:ce.call($)},bottom:()=>{var ce;return(ce=$.sidebarBottom)==null?void 0:ce.call($)}}),(he=$.default)==null?void 0:he.call($),h$3(PageFooter)]}))}}),DropTransition=defineComponent({name:"DropTransition",props:{type:{type:String,default:"single"},delay:{type:Number,default:0},duration:{type:Number,default:.25},appear:Boolean},setup(b,{slots:$}){const j=G=>{G.style.transition=`transform ${b.duration}s ease-in-out ${b.delay}s, opacity ${b.duration}s ease-in-out ${b.delay}s`,G.style.transform="translateY(-20px)",G.style.opacity="0"},U=G=>{G.style.transform="translateY(0)",G.style.opacity="1"};return()=>h$3(b.type==="single"?Transition:TransitionGroup,{name:"drop",appear:b.appear,onAppear:j,onAfterAppear:U,onEnter:j,onAfterEnter:U,onBeforeLeave:j},()=>{var G;return(G=$.default)==null?void 0:G.call($)})}}),featurePanel="",FeaturePanel=defineComponent({name:"FeaturePanel",props:{items:{type:Object,default:()=>[]},header:{type:String,default:""}},setup(b){return()=>h$3("div",{class:"feature-panel"},[b.header?h$3("h2",{class:"feature-header"},b.header):null,b.items.length?h$3("div",{class:"features"},b.items.map($=>{const j=[h$3("h3",[h$3(Icon,{icon:$.icon}),h$3("span",{innerHTML:$.title})]),h$3("p",{innerHTML:$.details})];return $.link?isLinkExternal($.link)?h$3("a",{class:"feature link",href:$.link,role:"navigation","aria-label":$.title,target:"_blank"},j):h$3(RouterLink,{class:"feature link",to:$.link,role:"navigation","aria-label":$.title},()=>j):h$3("div",{class:"feature"},j)})):null])}}),heroInfo="",HeroInfo=defineComponent({name:"HeroInfo",setup(b,{slots:$}){const j=usePageFrontmatter(),U=useSiteLocaleData(),G=computed(()=>j.value.heroText===!1?!1:j.value.heroText||U.value.title||"Hello"),W=computed(()=>j.value.tagline===!1?!1:j.value.tagline||U.value.description||"Welcome to your VuePress site"),K=computed(()=>j.value.heroImage?withBase(j.value.heroImage):null),Y=computed(()=>j.value.heroImageDark?withBase(j.value.heroImageDark):null),ee=computed(()=>j.value.heroAlt||G.value||"hero"),ne=computed(()=>j.value.actions??[]);return()=>{var ae,oe;return h$3("header",{class:"hero-info-wrapper"},[((ae=$.heroImage)==null?void 0:ae.call($))||h$3(DropTransition,{appear:!0,type:"group"},()=>[K.value?h$3("img",{key:"light",class:{light:Y.value},src:K.value,alt:ee.value}):null,Y.value?h$3("img",{key:"dark",class:"dark",src:Y.value,alt:ee.value}):null]),((oe=$.heroInfo)==null?void 0:oe.call($))||h$3("div",{class:"hero-info"},[G.value?h$3(DropTransition,{appear:!0,delay:.04},()=>h$3("h1",{id:"main-title"},G.value)):null,W.value?h$3(DropTransition,{appear:!0,delay:.08},()=>h$3("p",{class:"description"},W.value)):null,ne.value.length?h$3(DropTransition,{appear:!0,delay:.12},()=>h$3("p",{class:"actions"},ne.value.map(ie=>h$3(AutoLink,{class:["action-button",ie.type||"default"],config:ie,noExternalLinkIcon:!0})))):null])])}}}),MarkdownContent=({custom:b})=>h$3(Content,{class:["theme-hope-content",{custom:b}]});MarkdownContent.displayName="MarkdownContent";MarkdownContent.props={custom:Boolean};const homePage="",HomePage=defineComponent({name:"HopePage",setup(b,{slots:$}){const j=usePure(),U=usePageFrontmatter(),G=computed(()=>{const{features:W}=U.value;return isArray(W)?W.some(K=>!("items"in K))?[{items:W}]:W:[]});return()=>{var W,K,Y;return h$3("main",{class:["home project",{pure:j.value}],id:"main-content","aria-labelledby":U.value.heroText===null?void 0:"main-title"},[(W=$.top)==null?void 0:W.call($),h$3(HeroInfo),G.value.map(({header:ee="",items:ne},ae)=>h$3(DropTransition,{appear:!0,delay:.16+ae*.08},()=>h$3(FeaturePanel,{header:ee,items:ne}))),(K=$.center)==null?void 0:K.call($),h$3(DropTransition,{appear:!0,delay:.16+G.value.length*.08},()=>h$3(MarkdownContent,{custom:!0})),(Y=$.bottom)==null?void 0:Y.call($)])}}}),breadcrumb="",BreadCrumb=defineComponent({name:"BreadCrumb",setup(){const b=useRouter(),$=useRoute(),j=useRouteLocale(),U=usePageFrontmatter(),G=useThemeLocaleData(),W=ref([]),K=computed(()=>(U.value.breadcrumb||U.value.breadcrumb!==!1&&G.value.breadcrumb!==!1)&&W.value.length>1),Y=computed(()=>U.value.breadcrumbIcon||U.value.breadcrumbIcon!==!1&&G.value.breadcrumbIcon!==!1),ee=()=>{const ne=b.getRoutes(),ae=getAncestorLinks($,j.value).map(oe=>{const ie=ne.find(se=>se.path===oe);if(ie){const{meta:se,path:re}=vt(b,ie.path),le=se.s||se.title;if(le)return{title:le,icon:se.i,path:re}}return null}).filter(oe=>oe!==null);ae.length>1&&(W.value=ae)};return onMounted(()=>{ee(),watch(()=>$.path,ee)}),()=>h$3("nav",{class:["breadcrumb",{disable:!K.value}]},K.value?h$3("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},W.value.map((ne,ae)=>h$3("li",{class:{"is-active":W.value.length-1===ae},property:"itemListElement",typeof:"ListItem"},[h$3(RouterLink,{to:ne.path,property:"item",typeof:"WebPage"},()=>[Y.value?h$3(Icon,{icon:ne.icon}):null,h$3("span",{property:"name"},ne.title||"Unknown")]),h$3("meta",{property:"position",content:ae+1})]))):[])}}),pageNav="",resolveFromFrontmatterConfig=b=>b===!1?!1:isString$1(b)?useAutoLink(b,!0):isPlainObject(b)?b:null,resolveFromSidebarItems=(b,$,j)=>{const U=b.findIndex(G=>G.link===$);if(U!==-1){const G=b[U+j];return G!=null&&G.link?G:null}for(const G of b)if(G.children){const W=resolveFromSidebarItems(G.children,$,j);if(W)return W}return null},PageNav=defineComponent({name:"PageNav",setup(){const b=useThemeLocaleData(),$=usePageFrontmatter(),j=useSidebarItems(),U=useRoute(),G=useNavigate(),W=computed(()=>{const Y=resolveFromFrontmatterConfig($.value.prev);return Y===!1?null:Y||(b.value.prevLink===!1?null:resolveFromSidebarItems(j.value,U.path,-1))}),K=computed(()=>{const Y=resolveFromFrontmatterConfig($.value.next);return Y===!1?null:Y||(b.value.nextLink===!1?null:resolveFromSidebarItems(j.value,U.path,1))});return useEventListener("keydown",Y=>{Y.altKey&&(Y.key==="ArrowRight"?K.value&&(G(K.value.link),Y.preventDefault()):Y.key==="ArrowLeft"&&W.value&&(G(W.value.link),Y.preventDefault()))}),()=>W.value||K.value?h$3("nav",{class:"page-nav"},[W.value?h$3(AutoLink,{class:"prev",config:W.value},()=>{var Y,ee;return[h$3("div",{class:"hint"},[h$3("span",{class:"arrow left"}),b.value.metaLocales.prev]),h$3("div",{class:"link"},[h$3(Icon,{icon:(Y=W.value)==null?void 0:Y.icon}),(ee=W.value)==null?void 0:ee.text])]}):null,K.value?h$3(AutoLink,{class:"next",config:K.value},()=>{var Y,ee;return[h$3("div",{class:"hint"},[b.value.metaLocales.next,h$3("span",{class:"arrow right"})]),h$3("div",{class:"link"},[(Y=K.value)==null?void 0:Y.text,h$3(Icon,{icon:(ee=K.value)==null?void 0:ee.icon})])]}):null]):null}}),AuthorIcon=()=>h$3(lt,{name:"author"},()=>h$3("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));AuthorIcon.displayName="AuthorIcon";const CalendarIcon=()=>h$3(lt,{name:"calendar"},()=>h$3("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));CalendarIcon.displayName="CalendarIcon";const CategoryIcon$1=()=>h$3(lt,{name:"category"},()=>h$3("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));CategoryIcon$1.displayName="CategoryIcon";const EyeIcon=()=>h$3(lt,{name:"eye"},()=>h$3("path",{d:"M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"}));EyeIcon.displayName="EyeIcon";const FireIcon=()=>h$3(lt,{name:"fire"},()=>h$3("path",{d:"M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"}));FireIcon.displayName="FireIcon";const TagIcon$1=()=>h$3(lt,{name:"tag"},()=>h$3("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));TagIcon$1.displayName="TagIcon";const TimerIcon=()=>h$3(lt,{name:"timer"},()=>h$3("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));TimerIcon.displayName="TimerIcon";const WordIcon=()=>h$3(lt,{name:"word"},()=>[h$3("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),h$3("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);WordIcon.displayName="WordIcon";const useMetaLocale=()=>{const b=useThemeLocaleData();return computed(()=>b.value.metaLocales)},readingTimeLocales={"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}},editLinkPatterns={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},resolveEditLink=({docsRepo:b,docsBranch:$,docsDir:j,filePathRelative:U,editLinkPattern:G})=>{if(!U)return null;const W=resolveRepoType(b);let K;return G?K=G:W!==null&&(K=editLinkPatterns[W]),K?K.replace(/:repo/,isLinkHttp(b)?b:`https://github.com/${b}`).replace(/:branch/,$).replace(/:path/,removeLeadingSlash(`${removeEndingSlash(j)}/${U}`)):null},useEditLink=()=>{const b=useThemeLocaleData(),$=usePageData(),j=usePageFrontmatter();return computed(()=>{const{repo:U,docsRepo:G=U,docsBranch:W="main",docsDir:K="",editLink:Y,editLinkPattern:ee=""}=b.value;if(!(j.value.editLink??Y??!0)||!G)return null;const ae=resolveEditLink({docsRepo:G,docsBranch:W,docsDir:K,editLinkPattern:ee,filePathRelative:$.value.filePathRelative});return ae?{text:b.value.metaLocales.editLink,link:ae}:null})},useUpdateTime=()=>{const b=useSiteLocaleData(),$=useThemeLocaleData(),j=usePageData(),U=usePageFrontmatter();return computed(()=>{var K,Y;return!(U.value.lastUpdated??$.value.lastUpdated??!0)||!((K=j.value.git)!=null&&K.updatedTime)?null:new Date((Y=j.value.git)==null?void 0:Y.updatedTime).toLocaleString(b.value.lang)})},useContributors=()=>{const b=useThemeLocaleData(),$=usePageData(),j=usePageFrontmatter();return computed(()=>{var G;return j.value.contributors??b.value.contributors??!0?((G=$.value.git)==null?void 0:G.contributors)??null:null})},AuthorInfo=defineComponent({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0},pure:Boolean},setup(b){const $=useMetaLocale();return()=>b.author.length?h$3("span",{class:"author-info","aria-label":`${$.value.author}${b.pure?"":"🖊"}`,...b.pure?{}:{"data-balloon-pos":"down"}},[h$3(AuthorIcon),h$3("span",b.author.map(j=>j.url?h$3("a",{class:"author-item",href:j.url,target:"_blank",rel:"noopener noreferrer"},j.name):h$3("span",{class:"author-item"},j.name))),h$3("span",{property:"author",content:b.author.map(j=>j.name).join(", ")})]):null}}),category="",CategoryInfo=defineComponent({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0},pure:Boolean},setup(b){const $=useRouter(),j=useRoute(),U=useMetaLocale(),G=(W,K="")=>{K&&j.path!==K&&(W.preventDefault(),$.push(K))};return()=>b.category.length?h$3("span",{class:"category-info","aria-label":`${U.value.category}${b.pure?"":"🌈"}`,...b.pure?{}:{"data-balloon-pos":"down"}},[h$3(CategoryIcon$1),...b.category.map(({name:W,path:K})=>h$3("span",{class:["category-item",{[`category${jt(W,9)}`]:!b.pure,clickable:K}],role:K?"navigation":"",onClick:Y=>G(Y,K)},W)),h$3("meta",{property:"articleSection",content:b.category.map(({name:W})=>W).join(",")})]):null}}),DateInfo=defineComponent({name:"DateInfo",inheritAttrs:!1,props:{date:{type:Object,default:null},localizedDate:{type:String,default:""},pure:Boolean},setup(b){const $=usePageLang(),j=useMetaLocale();return()=>{var U,G;return b.date?h$3("span",{class:"date-info","aria-label":`${j.value.date}${b.pure?"":"📅"}`,...b.pure?{}:{"data-balloon-pos":"down"}},[h$3(CalendarIcon),h$3("span",h$3(ClientOnly,()=>{var W;return b.localizedDate||((W=b.date.value)==null?void 0:W.toLocaleDateString($.value))})),h$3("meta",{property:"datePublished",content:((G=(U=b.date)==null?void 0:U.value)==null?void 0:G.toISOString())||""})]):null}}});defineComponent({name:"PageViewInfo",inheritAttrs:!1,props:{pageview:{type:[Boolean,String],default:!1},pure:Boolean},setup(b){const $=useRoute(),j=useMetaLocale(),U=ref(0),G=()=>{const W=document.querySelector(".waline-pageview-count");if(W){const K=W.textContent;K&&!isNaN(Number(K))?U.value=Number(K):setTimeout(G,500)}};return onMounted(()=>{setTimeout(G,1500)}),watch(()=>$.path,(W,K)=>{W!==K&&setTimeout(G,500)}),()=>b.pageview?h$3("span",{class:"visitor-info","aria-label":`${j.value.views}${b.pure?"":"🔢"}`,...b.pure?{}:{"data-balloon-pos":"down"}},[h$3(U.value<1e3?EyeIcon:FireIcon),h$3("span",{class:"waline-pageview-count","data-path":isString$1(b.pageview)?b.pageview:withBase($.path)},"...")]):null}});const ReadingTimeInfo=defineComponent({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},pure:Boolean},setup(b){const $=useMetaLocale(),j=Ot(readingTimeLocales),U=computed(()=>{if(!b.readingTime)return null;const{minutes:G}=b.readingTime;return G<1?{text:j.value.less1Minute,time:"PT1M"}:{text:j.value.time.replace("$time",Math.round(G).toString()),time:`PT${Math.round(G)}M`}});return()=>U.value?h$3("span",{class:"reading-time-info","aria-label":`${$.value.readingTime}${b.pure?"":"⌛"}`,...b.pure?{}:{"data-balloon-pos":"down"}},[h$3(TimerIcon),h$3("span",U.value.text),h$3("meta",{property:"timeRequired",content:U.value.time})]):null}}),tag="",TagInfo=defineComponent({name:"TagInfo",inheritAttrs:!1,props:{tag:{type:Array,default:()=>[]},pure:Boolean},setup(b){const $=useRouter(),j=useRoute(),U=useMetaLocale(),G=(W,K="")=>{K&&j.path!==K&&(W.preventDefault(),$.push(K))};return()=>b.tag.length?h$3("span",{class:"tag-info","aria-label":`${U.value.tag}${b.pure?"":"🏷"}`,...b.pure?{}:{"data-balloon-pos":"down"}},[h$3(TagIcon$1),...b.tag.map(({name:W,path:K})=>h$3("span",{class:["tag-item",{[`tag-item${jt(W,9)}`]:!b.pure,clickable:K}],role:K?"navigation":"",onClick:Y=>G(Y,K)},W)),h$3("meta",{property:"keywords",content:b.tag.map(({name:W})=>W).join(",")})]):null}}),OriginalInfo=defineComponent({name:"OriginalMark",inheritAttrs:!1,props:{isOriginal:Boolean},setup(b){const $=useMetaLocale();return()=>b.isOriginal?h$3("span",{class:"origin"},$.value.origin):null}}),WordInfo=defineComponent({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:{type:Object,default:()=>null},pure:Boolean},setup(b){const $=useMetaLocale(),j=Ot(readingTimeLocales),U=computed(()=>{var W;return(W=b.readingTime)==null?void 0:W.words.toString()}),G=computed(()=>j.value.word.replace("$word",U.value||""));return()=>U.value?h$3("span",{class:"words-info","aria-label":`${$.value.words}${b.pure?"":"🔠"}`,...b.pure?{}:{"data-balloon-pos":"down"}},[h$3(WordIcon),h$3("span",G.value),h$3("meta",{property:"wordCount",content:U.value})]):null}}),pageInfo="",PageInfo=defineComponent({name:"PageInfo",components:{AuthorInfo,CategoryInfo,DateInfo,OriginalInfo,PageViewInfo:()=>null,ReadingTimeInfo,TagInfo,WordInfo},props:{items:{type:[Array,Boolean],default:()=>["Author","Original","Date","Category","Tag","ReadingTime"]},info:{type:Object,required:!0}},setup(b){const $=usePure();return()=>b.items?h$3("div",{class:"page-info"},b.items.map(j=>h$3(resolveComponent(`${j}Info`),{...b.info,pure:$.value}))):null}}),pageTitle="",PageTitle=defineComponent({name:"PageTitle",setup(){const b=usePageData(),$=usePageFrontmatter(),j=useThemeLocaleData(),{info:U,items:G}=usePageInfo();return()=>h$3("div",{class:"page-title"},[h$3("h1",[j.value.titleIcon!==!1?h$3(Icon,{icon:$.value.icon}):null,b.value.title]),h$3(PageInfo,{info:U.value,...G.value===null?{}:{items:G.value}}),h$3("hr")])}}),EditIcon=()=>h$3(lt,{name:"edit"},()=>[h$3("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),h$3("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);EditIcon.displayName="EditIcon";const NotFoundIcon=()=>h$3("svg",{xmlns:"http://www.w3.org/2000/svg",class:"not-found-icon",viewBox:"0 0 178 130",innerHTML:'<defs><linearGradient id="b" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#e9e9e9"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="c" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#dcdcdc"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="d" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#f1f1f1"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="e" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#dedede"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="f" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#e8e8e8"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="g" x1=".213" y1="1.265" x2=".846" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f5f5f5"/></linearGradient><linearGradient id="h" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#c5c5c5"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="i" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#acacac"/><stop offset="1" stop-color="#f2f2f2" stop-opacity=".388"/></linearGradient><clipPath id="a"><path transform="translate(744 1111)" fill="none" d="M0 0h178v130H0z"/></clipPath></defs><g transform="translate(-744 -1111)" clip-path="url(#a)"><path d="M0 10.795 36.6 0v93.779L0 104.574z" transform="translate(772.466 1122.142)" fill="url(#b)"/><path d="M-8.492 10.642-26.361-.469v93.78l17.868 11.111z" transform="translate(780.958 1122.293)" fill="url(#c)"/><path d="M-8.5 5.55 28.106-5.3 10.228-16.437l-36.6 10.845z" transform="translate(780.963 1127.438)" fill="url(#d)"/><path d="M0 10.539 35.741 0v91.56L0 102.1z" transform="translate(870.158 1123.617)" fill="url(#d)"/><path d="M-8.913 10.38-26.361-.469v91.562l17.448 10.848z" transform="translate(879.071 1123.775)" fill="url(#e)"/><path d="m-8.918 5.032 35.741-10.59L9.366-16.437-26.375-5.848z" transform="translate(879.076 1129.175)" fill="url(#d)"/><path d="M0 9.137 30.839 0v79.381L0 88.519z" transform="translate(799.678 1151.579)" fill="url(#f)"/><path d="m-11.306 8.936-15.054-9.4v79.377l15.054 9.4z" transform="translate(810.985 1151.78)" fill="url(#c)"/><path d="M-11.313 2.087 19.526-7.05 4.464-16.437-26.375-7.3z" transform="translate(810.991 1158.63)" fill="url(#g)"/><path d="M178 53H0a51.361 51.361 0 0 1 10.453-20.952 74.532 74.532 0 0 1 19.742-16.811A103.3 103.3 0 0 1 57.089 4.058a127.515 127.515 0 0 1 63.823 0 103.3 103.3 0 0 1 26.894 11.179 74.532 74.532 0 0 1 19.741 16.811A51.363 51.363 0 0 1 178 53z" transform="translate(744 1187.549)" fill="url(#h)"/><path d="m814.529 1199.586-1.272 1.212h2.3l1.2-1.212zM816.725 1194.909l-1.272 1.212h2.3l1.263-1.212zM863.284 1199.585l-1.272 1.212h2.3l1.2-1.212zM865.519 1194.9l-1.272 1.212h2.3l1.263-1.212z" fill="#cbcbcb"/><path d="m799.527 1191.21 10.182-21.97h4.381l-9.931 21.719h14.876v3.941h-19.508zm13.081-9.493h4.152v17.859h-4.152zm20.728 18.151q-4.256 0-6.457-2.274a8.74 8.74 0 0 1-2.2-6.343v-13.791a8.708 8.708 0 0 1 2.21-6.353q2.212-2.264 6.447-2.264 4.256 0 6.457 2.253a8.726 8.726 0 0 1 2.2 6.363v13.792a8.708 8.708 0 0 1-2.21 6.349q-2.211 2.268-6.447 2.268zm0-4.048a4.29 4.29 0 0 0 3.328-1.178 4.862 4.862 0 0 0 1.074-3.39v-13.792a4.893 4.893 0 0 0-1.064-3.39 4.285 4.285 0 0 0-3.338-1.179 4.285 4.285 0 0 0-3.338 1.179 4.893 4.893 0 0 0-1.064 3.39v13.791a4.862 4.862 0 0 0 1.075 3.391 4.29 4.29 0 0 0 3.327 1.178zm14.928-4.61 10.181-21.97h4.381l-9.931 21.719h14.876v3.941h-19.507zm13.081-9.493h4.152v17.859h-4.152z" fill="#c6c6c6"/><path d="m798.306 1192.431 10.182-21.97h4.381l-9.931 21.719h14.876v3.941h-19.508zm13.081-9.493h4.152v17.859h-4.152zm20.728 18.151q-4.256 0-6.457-2.274a8.74 8.74 0 0 1-2.2-6.343v-13.791a8.708 8.708 0 0 1 2.21-6.353q2.212-2.264 6.447-2.264 4.256 0 6.457 2.253a8.726 8.726 0 0 1 2.2 6.363v13.792a8.708 8.708 0 0 1-2.21 6.349q-2.211 2.268-6.447 2.268zm0-4.048a4.29 4.29 0 0 0 3.328-1.178 4.862 4.862 0 0 0 1.074-3.39v-13.792a4.893 4.893 0 0 0-1.064-3.39 4.285 4.285 0 0 0-3.338-1.179 4.285 4.285 0 0 0-3.338 1.179 4.893 4.893 0 0 0-1.064 3.39v13.791a4.862 4.862 0 0 0 1.075 3.391 4.29 4.29 0 0 0 3.327 1.178zm14.928-4.61 10.181-21.97h4.381l-9.931 21.719h14.876v3.941h-19.507zm13.081-9.493h4.152v17.859h-4.152z" fill="#b2b2b2"/><path d="m-27.694-19.435 10.182 14.517h4.381l-9.931-14.352h14.876v-2.606h-19.508zm13.081 6.273h4.152v-11.8h-4.152zM6.115-25.156q-4.256 0-6.457 1.5a4.8 4.8 0 0 0-2.2 4.191v9.113a4.784 4.784 0 0 0 2.212 4.2 11.511 11.511 0 0 0 6.447 1.5q4.256 0 6.457-1.489a4.786 4.786 0 0 0 2.2-4.2v-9.113a4.784 4.784 0 0 0-2.212-4.2 11.511 11.511 0 0 0-6.447-1.502zm0 2.675a5.705 5.705 0 0 1 3.328.779 2.6 2.6 0 0 1 1.074 2.24v9.113a2.607 2.607 0 0 1-1.064 2.24 5.7 5.7 0 0 1-3.338.779 5.7 5.7 0 0 1-3.338-.779 2.607 2.607 0 0 1-1.064-2.24v-9.113A2.6 2.6 0 0 1 2.788-21.7a5.705 5.705 0 0 1 3.327-.782zm14.927 3.047L31.224-4.918h4.381l-9.931-14.351H40.55v-2.606H21.043zm13.081 6.273h4.152v-11.8h-4.151z" transform="translate(826 1226.245)" opacity=".32" fill="url(#i)"/><g fill="#e6e6e6"><path d="m858.428 1169.23-1.2 1.259h4.388l1.178-1.259zM802.944 1192.187l1.288-1.375h7.143v1.375zm8.415-9.25 1.273-1.234h4.15l-1.235 1.234zm-2.855-12.469 1.198-1.259h4.367l-1.178 1.259zM861.362 1181.678l-1.27 1.3h4.188l1.236-1.3zM865.519 1190.9l-1.27 1.3h2.3l1.162-1.3zM852.838 1190.791l-1.207 1.508h8.447v-1.508z"/></g></g>'}),pageMeta="",PageMeta=defineComponent({name:"PageMeta",setup(){const b=useThemeLocaleData(),$=useEditLink(),j=useUpdateTime(),U=useContributors();return()=>{const{metaLocales:G}=b.value;return h$3("footer",{class:"page-meta"},[$.value?h$3("div",{class:"meta-item edit-link"},h$3(AutoLink,{class:"label",config:$.value},{before:()=>h$3(EditIcon)})):null,j.value?h$3("div",{class:"meta-item update-time"},[h$3("span",{class:"label"},`${G.lastUpdated}: `),h$3(ClientOnly,()=>h$3("span",{class:"info"},j.value))]):null,U.value&&U.value.length?h$3("div",{class:"meta-item contributors"},[h$3("span",{class:"label"},`${G.contributors}: `),U.value.map(({email:W,name:K},Y)=>[h$3("span",{class:"contributor",title:`email: ${W}`},K),Y!==U.value.length-1?",":""])]):null])}}}),toc="",renderHeader=({title:b,level:$,slug:j})=>h$3(RouterLink,{to:`#${j}`,class:["toc-link",`level${$}`]},()=>b),renderChildren=(b,$)=>{const j=useRoute();return b.length&&$>0?h$3("ul",{class:"toc-list"},b.map(U=>[h$3("li",{class:["toc-item",{active:At(j,`#${U.slug}`)}]},renderHeader(U)),renderChildren(U.children,$-1)])):null},TOC=defineComponent({name:"TOC",props:{items:{type:Array,default:()=>[]},headerDepth:{type:Number,default:2}},setup(b){const $=useRoute(),j=usePageData(),U=useMetaLocale(),G=ref(),W=K=>{var Y;(Y=G.value)==null||Y.scrollTo({top:K,behavior:"smooth"})};return onMounted(()=>{watch(()=>$.hash,K=>{if(G.value){const Y=document.querySelector(`#toc a.toc-link[href$="${K}"]`);if(!Y)return;const{top:ee,height:ne}=G.value.getBoundingClientRect(),{top:ae,height:oe}=Y.getBoundingClientRect();ae<ee?W(G.value.scrollTop+ae-ee):ae+oe>ee+ne&&W(G.value.scrollTop+ae+oe-ee-ne)}})}),()=>{const K=b.items.length?renderChildren(b.items,b.headerDepth):j.value.headers?renderChildren(j.value.headers,b.headerDepth):null;return K?h$3("div",{class:"toc-place-holder"},[h$3("aside",{id:"toc"},[h$3("div",{class:"toc-header"},U.value.toc),h$3("div",{class:"toc-wrapper",ref:G},[K])])]):null}}}),page$1="",NormalPage=defineComponent({name:"NormalPage",setup(b,{slots:$}){const j=usePageFrontmatter(),{isDarkMode:U}=useDarkMode(),G=useThemeLocaleData(),W=computed(()=>j.value.toc||j.value.toc!==!1&&G.value.toc!==!1);return()=>h$3("main",{class:"page",id:"main-content"},h$3(xt("LocalEncrypt")?resolveComponent("LocalEncrypt"):Mt,()=>{var K,Y,ee,ne;return[(K=$.top)==null?void 0:K.call($),h$3(BreadCrumb),h$3(PageTitle),W.value?h$3(TOC,{headerDepth:j.value.headerDepth??G.value.headerDepth??2}):null,(Y=$.contentBefore)==null?void 0:Y.call($),h$3(MarkdownContent),(ee=$.contentAfter)==null?void 0:ee.call($),h$3(PageMeta),h$3(PageNav),xt("CommentService")?h$3(resolveComponent("CommentService"),{darkmode:U.value}):null,(ne=$.bottom)==null?void 0:ne.call($)]}))}}),fadeSlideY="",FadeSlideY=defineComponent({name:"FadeSlideY",setup(b,{slots:$}){const j=useScrollPromise(),U=j.resolve,G=j.pending;return()=>h$3(Transition,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:U,onBeforeLeave:G},()=>{var W;return(W=$.default)==null?void 0:W.call($)})}}),skipLink="",SkipLink=defineComponent({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(b){const $=useRoute(),j=useThemeLocaleData(),U=ref(),G=({target:W})=>{const K=document.querySelector(W.hash);if(K){const Y=()=>{K.removeAttribute("tabindex"),K.removeEventListener("blur",Y)};K.setAttribute("tabindex","-1"),K.addEventListener("blur",Y),K.focus(),window.scrollTo(0,0)}};return onMounted(()=>{watch(()=>$.path,()=>U.value.focus())}),()=>[h$3("span",{ref:U,tabindex:"-1"}),h$3("a",{href:`#${b.content}`,class:"skip-link sr-only",onClick:G},j.value.routeLocales.skipToContent)]}}),Layout=defineComponent({name:"Layout",setup(){const b=useThemeData(),$=useThemeLocaleData(),j=usePageData(),U=usePageFrontmatter(),G=useMobile(),W=computed(()=>$.value.blog.sidebarDisplay||b.value.blog.sidebarDisplay||"mobile");return()=>[h$3(SkipLink),h$3(CommonWrapper,{},{default:()=>U.value.home?h$3(HomePage):h$3(FadeSlideY,()=>h$3(NormalPage,{key:j.value.path})),...W.value!=="none"?{navScreenBottom:()=>h$3(resolveComponent("BloggerInfo"))}:{},...!G.value&&W.value==="always"?{sidebar:()=>h$3(resolveComponent("BloggerInfo"))}:{}})]}}),notFound="",NotFound=defineComponent({name:"NotFound",setup(){const b=useRouteLocale(),$=useThemeLocaleData(),j=()=>{const G=$.value.routeLocales.notFoundMsg;return G[Math.floor(Math.random()*G.length)]},{navigate:U}=useLink({to:$.value.home??b.value});return()=>[h$3(SkipLink),h$3(CommonWrapper,{noSidebar:!0},()=>h$3("main",{class:"page not-found",id:"main-content"},[h$3(NotFoundIcon),h$3("blockquote",j()),h$3("button",{class:"action-button",onClick:()=>{window.history.go(-1)}},$.value.routeLocales.back),h$3("button",{class:"action-button",onClick:()=>U()},$.value.routeLocales.home)]))]}}),index="",icons={MrHope:'<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient gradientTransform="matrix(.2478 .78133 -2.54797 .63622 910.35 281.58)" gradientUnits="userSpaceOnUse" id="a" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".75" stop-color="#e33939"/><stop offset=".998" stop-color="#fff"/></linearGradient><linearGradient gradientTransform="matrix(.13814 .80797 2.55599 -.6032 34.087 494.369)" gradientUnits="userSpaceOnUse" id="b" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".815" stop-color="#e33939"/><stop offset="1" stop-color="#fff"/></linearGradient></defs><path d="M135.637 588.067c-48.891-201.334 74.605-404.162 275.837-453.028 201.233-48.866 403.998 74.734 452.889 276.068 48.892 201.335-74.606 404.162-275.838 453.029-201.233 48.866-403.997-74.734-452.888-276.069Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M596.076 197.044c-3.342-56.09 56.897-77.831 89.017-51.361m-410.65 128.819c-22.753-51.377-86.256-43.07-102.659-4.816" fill="none" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M833.568 288.02c.05 18.046-12.584 30.699-21.346 32.211-8.762 1.512-17.031-1.099-18.584-1.341 0 0-61.363-6.103-105.627 6.921-44.265 13.026-87.04 47.387-94.637 51.892-6.627 3.928-29.112 7.697-44.462-12.938-15.351-20.636.024-41.526.024-41.526s12.685-18.279 40.771-35.123c28.088-16.844 24.624-13.226 52.326-25.696 15.247-6.865 43.319-14.186 67.429-17.069 25.193-3.011 46.348-1.384 57.673.769 22.165 4.212 28.632 5.93 39.169 9.229 12.451 3.898 27.214 14.516 27.264 32.671Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M558.351 345.632c-3.458-14.237 5.214-28.566 19.367-32.003 14.154-3.437 28.43 5.32 31.887 19.557 3.458 14.238-5.212 28.567-19.367 32.004-14.152 3.437-28.43-5.319-31.887-19.558Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M220.249 483.416c46.81-11.689 91.323-.467 99.42 25.064 8.098 25.532-23.286 55.706-70.097 67.393-46.811 11.689-91.323.467-99.42-25.064-8.097-25.532 23.286-55.706 70.097-67.393Z" fill="url(#a)" fill-rule="evenodd" opacity=".261"/><path d="M739.9 357.226c-46.959 11.082-81.367 41.469-76.853 67.871 4.514 26.402 46.241 38.821 93.198 27.738 46.958-11.081 81.366-41.467 76.853-67.869-4.514-26.403-46.241-38.821-93.198-27.74Z" fill="url(#b)" fill-rule="evenodd" opacity=".261"/><path d="M400.934 398.917c-.599 18.034-13.681 30.218-22.494 31.409-8.812 1.192-16.982-1.716-18.526-2.014 0 0-61.109-8.334-105.819 3.07-44.709 11.404-88.696 44.181-96.452 48.406-6.763 3.683-29.372 6.632-43.972-14.546-14.6-21.18 1.519-41.494 1.519-41.494s13.335-17.803 42.013-33.612c28.677-15.809 25.085-12.319 53.222-23.772 15.484-6.304 43.803-12.598 68.005-14.6 25.288-2.093 46.373.305 57.616 2.867 22 5.016 28.401 6.968 38.813 10.649 12.304 4.348 26.677 15.496 26.075 33.637Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M129.05 445.546c-3.458-14.239 5.213-28.566 19.367-32.003 14.153-3.437 28.429 5.318 31.887 19.557 3.458 14.238-5.213 28.566-19.367 32.003-14.153 3.437-28.43-5.318-31.887-19.557Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M424.381 696.386s64.427 13.646 101.996 5.757C640.653 678.146 690.8 521.894 690.8 521.894" fill="none" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M796.04 666.774s-10.734-44.165-41.405-11.348c-9.681 10.359-10.438 40.604-28.217 81.89-15.942 37.02-39.564 60.728-42.938 76.063-3.374 15.335.451 35.992 26.352 41.537 25.902 5.545 41.967-23.381 41.967-23.381l44.241-164.761Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M793.337 664.734c-37.075 160.045-51.73 163.145-40.343 184.845 11.387 21.701 51.417 33.716 71.876-7.313 6.734-13.505-1.31-43.317-1.511-78.077-.307-53.06 16.865-86.111 10.403-98.1-15.332-28.452-39.377-5.875-40.425-1.355Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/></svg>',Github:'<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>',Gitee:'<svg xmlns="http://www.w3.org/2000/svg" class="icon gitee-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#C71D23"/><path fill="#fff" d="M772.953 454.723H480.17v.006a25.46 25.46 0 0 0-25.46 25.453l-.025 63.649a25.46 25.46 0 0 0 25.46 25.466l178.242-.007a25.46 25.46 0 0 1 25.459 25.46v12.73c0 42.18-34.198 76.378-76.378 76.378H365.583a25.46 25.46 0 0 1-25.46-25.46V416.533h-.006c0-42.18 34.192-76.378 76.378-76.378h356.388v-.013a25.46 25.46 0 0 0 25.46-25.446l.057-63.65h.013a25.46 25.46 0 0 0-25.46-25.471l-356.432.012c-105.453 0-190.946 85.493-190.946 190.946v356.433a25.46 25.46 0 0 0 25.46 25.46H626.56c94.913 0 171.852-76.94 171.852-171.852V480.182a25.46 25.46 0 0 0-25.46-25.46z"/></svg>',Baidu:'<svg xmlns="http://www.w3.org/2000/svg" class="icon baidu-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1D2FE3"/><path d="M239.022 704.978c.098-4.865-.314-9.772.162-14.591 5.178-52.464 197.571-253.377 249.641-259.233 42.996-4.833 75.768 16.545 99.824 49.144 37.893 51.351 82.81 95.455 131.292 136.237 52.903 44.503 56.525 99.801 32.6 158.592-23.425 57.56-75.34 69.833-127.771 58.804-84.971-17.874-168.158-13.744-253.37-4.536-86.35 9.333-133.788-39.4-132.378-124.417zM352.464 412.86c-3.58 50.707-17.93 96.128-75.9 98.12-58.053 1.995-80.093-41.432-79.275-91.71.81-49.705 13.416-104.053 76.851-102.136 53.84 1.625 74.74 45.8 78.324 95.726zm386.053 142.168c-68.494-1.735-84.188-43.331-82.635-93.812 1.46-47.519 10.082-97.628 73.299-96.65 61.395.95 81.6 43.207 81.553 98.668-.047 53.156-19.818 89.398-72.217 91.794zm-45.235-278.345c-10.464 42.665-24.513 91.761-85.919 94.502-52.74 2.354-71.705-34.482-72.805-81.242-1.233-52.42 48.08-112.965 87.582-110.373 33.943 2.226 71.146 49.541 71.142 97.113zm-195.147-14.097c-7.005 46.274-13.63 100.025-71.562 101.351-57.077 1.306-73.567-47.922-73.638-97.109-.068-48.054 12.128-99.024 69.345-101.426 59.45-2.493 67.11 51.093 75.855 97.184z" fill="#fff"/><path d="M479.52 663.165c.006 12.194 1.498 24.61-.284 36.537-4.707 31.503 18.862 78.749-45.326 77.534-54.226-1.027-103.338-3.31-113.231-73.536-7.164-50.852 7.78-85.674 57.687-102.668 17.67-6.016 39.618 5.058 54.096-14.548 10.84-14.679-2.901-54.592 33.418-41.47 24.075 8.7 11.477 38.922 13.278 59.652 1.68 19.366.359 38.99.363 58.5zm175.45 41.902c4.291 39.657 5.093 78.047-64.709 73.503-60.097-3.912-95.56-20.794-86.293-85.624 4.287-29.991-21.148-83.238 22.19-84.867 42.71-1.606 13.57 50.41 20.825 77.622 5.276 19.794-3.984 46.774 29.753 48.193 41.337 1.738 28.383-30.022 31.099-51.604 1.209-9.61-.85-19.65.528-29.215 2.516-17.474-8.928-44.716 19.554-47.191 36.044-3.133 24.155 28.376 26.678 47.523 1.896 14.387.375 29.225.375 51.66z" fill="#1D2FE3"/><path d="M435.669 685.038c-2.255 24.07 5.605 53.68-33.623 52.136-34.594-1.362-35.274-31.818-38.513-53.078-4.028-26.448 11.38-48.18 40.785-50.023 40.967-2.564 27.097 30.764 31.35 50.965z" fill="#fff"/></svg>',Email:'<svg xmlns="http://www.w3.org/2000/svg" class="icon email-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1384FF"/><path fill="#fff" d="M299.372 313.572H722.93c28.945 0 52.61 21.845 52.975 48.787L511.333 500.35 246.76 362.481c.182-27.003 23.666-48.97 52.611-48.97zm-52.671 101.702-.243 244.121c0 27.186 23.848 49.395 52.914 49.395H722.93c29.127 0 52.975-22.21 52.975-49.395V415.152L517.522 546.71a13.957 13.957 0 0 1-12.682 0L246.7 415.274z"/></svg>'},categoryMap={category:{"/":{path:"/category/",map:{algorithm:{path:"/category/algorithm/",keys:["v-6f38dab0","v-4ca9b1ff","v-1b333d5c","v-3f8bc7c2","v-70bc2959"]},daily:{path:"/category/daily/",keys:["v-7cb79b7a","v-f5ec58cc","v-61dcb9ca","v-a1d04c6c","v-d5ecdaba","v-e4c5586a","v-841c3444","v-0fe915da","v-011c74f0","v-b1e58032","v-4edf72d6","v-1df04f08","v-82076524","v-093e04ac","v-67b6f947","v-309be644","v-53503e38","v-5748b243","v-db62373e","v-79c9f96f","v-5e2533a8"]},Java:{path:"/category/java/",keys:["v-12aac2e1","v-468de280","v-29b89b89","v-0e6eab8e","v-27bd9296","v-5a4b6345","v-a2ddb01c","v-50401ed5","v-5bd12a58","v-56224f88","v-7d0c470e","v-55b8ba0a","v-6169e28b","v-0a46221e","v-60d5c536","v-01f872e7","v-a3ffd1cc","v-358ae550","v-4cb9b16c","v-058e1247","v-311e62d0","v-6207c160","v-031a6e0b","v-764b221e","v-b10ed23e","v-0fc88264","v-4d262f90","v-d985b94c","v-fcf9a784","v-39786273","v-271a8b48","v-3febf42d","v-3953c4a4","v-05f16561","v-653e1c1d","v-89f114ba","v-3db67a40","v-1b6b1cfa","v-44a13a86","v-00a018bf","v-bb952da6","v-3eec26d3","v-a4b9dd90","v-3ecba07f","v-13072166","v-1936c0d5","v-2c1c367c","v-6926cfaa","v-32690d91","v-685b81d4","v-18aae998","v-3f0a946f","v-12933370","v-405fe66c","v-3966872e","v-4fe861a4","v-7b4b9dc7","v-082b14e8","v-47449e3c","v-73b317e4","v-2fc561e0","v-12f7a1d2","v-469f0e94","v-709e7438","v-0a8937cf","v-7277d541","v-40911b8e","v-13c64a8d","v-29c5c590","v-545738c8","v-2b59d834","v-43545b33","v-599ab9b3","v-535669d3","v-3709255a","v-343c7385","v-7f0ca952","v-dfd677c2","v-d7add974","v-37dcfe5d","v-c5cd3edc","v-e114d1d2","v-9d1ecdb0","v-0246c81b","v-c87b41c4","v-507bed41","v-19da668e","v-0c09d80a","v-47bb6d4c","v-eba414ea","v-15dca1e6","v-7445cd33"]},other:{path:"/category/other/",keys:["v-2b70e4f9","v-502807be","v-90df2e26","v-22afdd50","v-4eb59d06","v-af64a3ba","v-c8e1ae3a","v-28113e1c","v-dde823e8","v-6ec2f8d0","v-7b0cd90e","v-ebcc9b7c","v-61f2a5b0","v-42d58db0","v-0a11e84c","v-f9cb582c","v-7c4c95c4","v-fce35ce0","v-a99c571c","v-3d92dd5a","v-7a7f0bea","v-9ec589ba","v-36cf8589","v-013c1e81","v-640b9c86","v-91b437be","v-003bf188","v-1a7ea05d","v-23a88807","v-30728471","v-7378bc31","v-47672dec","v-58188c0c","v-fbb8e312","v-7af25863","v-689ccac3","v-5789ff2c","v-31351e7d","v-d2113bde","v-39c15e36","v-cfcc0faa","v-9e274aaa","v-6d504a5e","v-172206f6","v-810a1d4a","v-31af7fac","v-bb478dba","v-224cf13a","v-1db2e12e","v-88d120d6","v-4f7b7c72","v-04ef0ac5","v-29cea7e7","v-6963d030","v-18d19b29","v-536b5b25","v-e4cb1150"]},Python:{path:"/category/python/",keys:["v-0ff149dc"]},IDEA:{path:"/category/idea/",keys:["v-c7a6fd84"]},java:{path:"/category/java/",keys:["v-48a9c507"]},essay:{path:"/category/essay/",keys:["v-ead2f860","v-1e8d39be","v-58121615","v-6192c6ac","v-77611f2a","v-7c80db8b","v-386477da"]},Finance:{path:"/category/finance/",keys:["v-20f0fd66","v-a3e2d4e4"]},GitHub:{path:"/category/github/",keys:["v-37125490"]},Git:{path:"/category/git/",keys:["v-c9250e40","v-1adba576","v-74473916"]},Linux:{path:"/category/linux/",keys:["v-7aba7e62","v-6d744f6f","v-49d04651","v-473b8da1","v-73be5696","v-171c1b4c","v-30e7d74e","v-1e23d93c","v-0b5dadd6","v-b1b88c62","v-093969da","v-0a582b41","v-19781156","v-78493303","v-9757ae78","v-7624e067","v-0bb9c789","v-8ebbf29c","v-134ccd82","v-275077d9","v-0e642874","v-a5195ce6","v-78d65395","v-4613513a","v-490af90f","v-f0383c18","v-5699db53"]},Euserv:{path:"/category/euserv/",keys:["v-2767e582"]},linux:{path:"/category/linux/",keys:["v-55994567","v-be175c8a"]},pc:{path:"/category/pc/",keys:["v-249a6012","v-53d002db","v-6d8a905c","v-1ec0c498","v-ef9ffcba","v-2d0aaf03","v-02df1f96"]},Script:{path:"/category/script/",keys:["v-440dee74","v-15b1d789","v-4155ce3c","v-464c88aa","v-6d51fcc4"]},Code:{path:"/category/code/",keys:["v-ff088e9c","v-6e25be61","v-f3213f92"]},Study:{path:"/category/study/",keys:["v-1bf8f71d","v-d7188082","v-d2576f5c"]},Tools:{path:"/category/tools/",keys:["v-f0217ea8","v-0289e456","v-51defb2f","v-7f4f380c","v-6726240a","v-5239b90e","v-3cf546d5","v-f4cfda76","v-d440f426"]},coding:{path:"/category/coding/",keys:["v-4377e9a2"]},Vue:{path:"/category/vue/",keys:["v-69e81a00","v-645cb53f","v-5cc4fad5","v-16e4cf3e","v-306f125d","v-5dc35644","v-b51510f6","v-5cafefc2","v-446a765e","v-c8821a6a","v-339b8977","v-7f762968","v-948fe668","v-331b4e12","v-25507322","v-7efb1c5d","v-0271c50c","v-45410d4b","v-0dba7fcb","v-43bfb7c0","v-43bfb7df","v-43bfb7fe","v-43bfb81d","v-43bfb83c"]}}}},tag:{"/":{path:"/tag/",map:{algorithm:{path:"/tag/algorithm/",keys:["v-6f38dab0","v-4ca9b1ff","v-3f8bc7c2","v-70bc2959"]},排序:{path:"/tag/%E6%8E%92%E5%BA%8F/",keys:["v-1b333d5c","v-3f8bc7c2"]},"algorithm - 牛客":{path:"/tag/algorithm---%E7%89%9B%E5%AE%A2/",keys:["v-1b333d5c"]},华为:{path:"/tag/%E5%8D%8E%E4%B8%BA/",keys:["v-1b333d5c"]},算法:{path:"/tag/%E7%AE%97%E6%B3%95/",keys:["v-1b333d5c"]},转换:{path:"/tag/%E8%BD%AC%E6%8D%A2/",keys:["v-1b333d5c"]},查找:{path:"/tag/%E6%9F%A5%E6%89%BE/",keys:["v-1b333d5c"]},daily:{path:"/tag/daily/",keys:["v-7cb79b7a","v-f5ec58cc","v-61dcb9ca","v-a1d04c6c","v-d5ecdaba","v-e4c5586a","v-841c3444","v-0fe915da","v-011c74f0","v-b1e58032","v-4edf72d6","v-1df04f08","v-82076524","v-093e04ac","v-67b6f947","v-309be644","v-53503e38","v-5748b243","v-db62373e","v-79c9f96f","v-5e2533a8"]},Java:{path:"/tag/java/",keys:["v-12aac2e1","v-468de280","v-29b89b89","v-0e6eab8e","v-27bd9296","v-5a4b6345","v-a2ddb01c","v-50401ed5","v-5bd12a58","v-56224f88","v-7d0c470e","v-55b8ba0a","v-6169e28b","v-0a46221e","v-60d5c536","v-01f872e7","v-a3ffd1cc","v-358ae550","v-4cb9b16c","v-058e1247","v-311e62d0","v-6207c160","v-031a6e0b","v-764b221e","v-b10ed23e","v-0fc88264","v-4d262f90","v-d985b94c","v-fcf9a784","v-39786273","v-271a8b48","v-3febf42d","v-3953c4a4","v-05f16561","v-653e1c1d","v-89f114ba","v-3db67a40","v-1b6b1cfa","v-44a13a86","v-00a018bf","v-bb952da6","v-3eec26d3","v-a4b9dd90","v-3ecba07f","v-13072166","v-1936c0d5","v-2c1c367c","v-6926cfaa","v-32690d91","v-685b81d4","v-18aae998","v-3f0a946f","v-12933370","v-405fe66c","v-3966872e","v-4fe861a4","v-7b4b9dc7","v-082b14e8","v-47449e3c","v-73b317e4","v-2fc561e0","v-12f7a1d2","v-469f0e94","v-709e7438","v-0a8937cf","v-7277d541","v-40911b8e","v-13c64a8d","v-29c5c590","v-545738c8","v-2b59d834","v-43545b33","v-599ab9b3","v-535669d3","v-3709255a","v-343c7385","v-7f0ca952","v-dfd677c2","v-d7add974","v-37dcfe5d","v-c5cd3edc","v-e114d1d2","v-9d1ecdb0","v-0246c81b","v-c87b41c4","v-507bed41","v-19da668e","v-0c09d80a","v-47bb6d4c","v-eba414ea","v-15dca1e6","v-7445cd33"]},ES6:{path:"/tag/es6/",keys:["v-13072166"]},JavaScript:{path:"/tag/javascript/",keys:["v-13072166"]},Map:{path:"/tag/map/",keys:["v-29b89b89"]},Jenkins:{path:"/tag/jenkins/",keys:["v-5bd12a58"]},Docker:{path:"/tag/docker/",keys:["v-5bd12a58","v-093969da"]},other:{path:"/tag/other/",keys:["v-2b70e4f9","v-502807be","v-90df2e26","v-22afdd50","v-4eb59d06","v-af64a3ba","v-c8e1ae3a","v-28113e1c","v-dde823e8","v-6ec2f8d0","v-7b0cd90e","v-ebcc9b7c","v-42d58db0","v-0a11e84c","v-f9cb582c","v-7c4c95c4","v-fce35ce0","v-a99c571c","v-3d92dd5a","v-7a7f0bea","v-9ec589ba","v-36cf8589","v-013c1e81","v-640b9c86","v-91b437be","v-003bf188","v-1a7ea05d","v-23a88807","v-30728471","v-7378bc31","v-47672dec","v-58188c0c","v-fbb8e312","v-7af25863","v-689ccac3","v-5789ff2c","v-31351e7d","v-d2113bde","v-39c15e36","v-cfcc0faa","v-9e274aaa","v-6d504a5e","v-172206f6","v-810a1d4a","v-31af7fac","v-bb478dba","v-224cf13a","v-1db2e12e","v-88d120d6","v-4f7b7c72","v-04ef0ac5","v-29cea7e7","v-6963d030","v-18d19b29","v-536b5b25","v-e4cb1150"]},Python:{path:"/tag/python/",keys:["v-0ff149dc"]},RocketMQ:{path:"/tag/rocketmq/",keys:["v-0e6eab8e"]},MQ:{path:"/tag/mq/",keys:["v-0e6eab8e"]},SpringBoot:{path:"/tag/springboot/",keys:["v-27bd9296","v-56224f88","v-bb952da6","v-3eec26d3"]},"Mybatis-plus":{path:"/tag/mybatis-plus/",keys:["v-bb952da6","v-3eec26d3"]},Spring:{path:"/tag/spring/",keys:["v-1936c0d5","v-32690d91"]},IDEA:{path:"/tag/idea/",keys:["v-c7a6fd84"]},微服务:{path:"/tag/%E5%BE%AE%E6%9C%8D%E5%8A%A1/",keys:["v-1936c0d5"]},消息队列:{path:"/tag/%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97/",keys:["v-1936c0d5"]},java:{path:"/tag/java/",keys:["v-48a9c507"]},数据结构:{path:"/tag/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/",keys:["v-48a9c507"]},article:{path:"/tag/article/",keys:["v-ead2f860","v-1e8d39be","v-58121615","v-6192c6ac","v-77611f2a","v-7c80db8b","v-386477da"]},essay:{path:"/tag/essay/",keys:["v-ead2f860","v-1e8d39be","v-58121615","v-6192c6ac","v-386477da"]},Finance:{path:"/tag/finance/",keys:["v-20f0fd66","v-a3e2d4e4"]},GitHub:{path:"/tag/github/",keys:["v-37125490"]},Git:{path:"/tag/git/",keys:["v-c9250e40","v-1adba576","v-74473916"]},Linux:{path:"/tag/linux/",keys:["v-7aba7e62","v-6d744f6f","v-49d04651","v-473b8da1","v-73be5696","v-171c1b4c","v-30e7d74e","v-1e23d93c","v-0b5dadd6","v-b1b88c62","v-093969da","v-0a582b41","v-19781156","v-78493303","v-9757ae78","v-7624e067","v-0bb9c789","v-8ebbf29c","v-134ccd82","v-275077d9","v-0e642874","v-a5195ce6","v-78d65395","v-4613513a","v-490af90f","v-f0383c18","v-5699db53"]},Euserv:{path:"/tag/euserv/",keys:["v-2767e582"]},NodeJS:{path:"/tag/nodejs/",keys:["v-55994567"]},Maven:{path:"/tag/maven/",keys:["v-55994567"]},Mysql:{path:"/tag/mysql/",keys:["v-55994567"]},Esxi:{path:"/tag/esxi/",keys:["v-0b5dadd6"]},WSL:{path:"/tag/wsl/",keys:["v-0a582b41"]},子系统:{path:"/tag/%E5%AD%90%E7%B3%BB%E7%BB%9F/",keys:["v-0a582b41"]},Windows:{path:"/tag/windows/",keys:["v-0a582b41"]},Openssl:{path:"/tag/openssl/",keys:["v-be175c8a"]},tmp:{path:"/tag/tmp/",keys:["v-73be5696"]},BIOS:{path:"/tag/bios/",keys:["v-b1b88c62"]},WSL2:{path:"/tag/wsl2/",keys:["v-093969da"]},Kubernetes:{path:"/tag/kubernetes/",keys:["v-093969da"]},k8s:{path:"/tag/k8s/",keys:["v-49d04651","v-093969da"]},CloudFlare:{path:"/tag/cloudflare/",keys:["v-502807be"]},E5:{path:"/tag/e5/",keys:["v-4eb59d06","v-af64a3ba"]},office:{path:"/tag/office/",keys:["v-4eb59d06","v-af64a3ba"]},QQ:{path:"/tag/qq/",keys:["v-28113e1c","v-dde823e8"]},电视:{path:"/tag/%E7%94%B5%E8%A7%86/",keys:["v-2b70e4f9"]},蓝奏:{path:"/tag/%E8%93%9D%E5%A5%8F/",keys:["v-61f2a5b0"]},Google:{path:"/tag/google/",keys:["v-15b1d789","v-c8e1ae3a"]},pc:{path:"/tag/pc/",keys:["v-249a6012","v-53d002db","v-6d8a905c","v-1ec0c498","v-ef9ffcba","v-2d0aaf03","v-02df1f96"]},Script:{path:"/tag/script/",keys:["v-440dee74","v-4155ce3c","v-464c88aa","v-6d51fcc4"]},Alist:{path:"/tag/alist/",keys:["v-440dee74"]},Github:{path:"/tag/github/",keys:["v-15b1d789"]},Code:{path:"/tag/code/",keys:["v-ff088e9c","v-6e25be61","v-f3213f92"]},CDN:{path:"/tag/cdn/",keys:["v-ff088e9c"]},Study:{path:"/tag/study/",keys:["v-1bf8f71d","v-d7188082","v-d2576f5c"]},Tools:{path:"/tag/tools/",keys:["v-f0217ea8","v-0289e456","v-51defb2f","v-7f4f380c","v-6726240a","v-5239b90e","v-3cf546d5","v-f4cfda76","v-d440f426"]},API:{path:"/tag/api/",keys:["v-7f4f380c"]},coding:{path:"/tag/coding/",keys:["v-4377e9a2"]},Vue:{path:"/tag/vue/",keys:["v-69e81a00","v-645cb53f","v-5cc4fad5","v-16e4cf3e","v-306f125d","v-5dc35644","v-b51510f6","v-5cafefc2","v-446a765e","v-c8821a6a","v-339b8977","v-7f762968","v-948fe668","v-331b4e12","v-25507322","v-7efb1c5d","v-0271c50c","v-45410d4b","v-0dba7fcb","v-43bfb7c0","v-43bfb7df","v-43bfb7fe","v-43bfb81d","v-43bfb83c"]}}}}},typeMap={article:{"/":{path:"/article/",keys:["v-7aba7e62","v-12aac2e1","v-468de280","v-29b89b89","v-7cb79b7a","v-6d744f6f","v-0e6eab8e","v-27bd9296","v-5a4b6345","v-a2ddb01c","v-2b70e4f9","v-50401ed5","v-249a6012","v-5bd12a58","v-56224f88","v-49d04651","v-473b8da1","v-20f0fd66","v-a3e2d4e4","v-73be5696","v-440dee74","v-7d0c470e","v-502807be","v-171c1b4c","v-30e7d74e","v-1e23d93c","v-0b5dadd6","v-b1b88c62","v-093969da","v-55b8ba0a","v-6169e28b","v-0a46221e","v-60d5c536","v-f5ec58cc","v-01f872e7","v-0a582b41","v-19781156","v-a3ffd1cc","v-358ae550","v-4cb9b16c","v-058e1247","v-311e62d0","v-6207c160","v-031a6e0b","v-764b221e","v-b10ed23e","v-0fc88264","v-4d262f90","v-69e81a00","v-645cb53f","v-5cc4fad5","v-16e4cf3e","v-306f125d","v-5dc35644","v-b51510f6","v-5cafefc2","v-446a765e","v-c8821a6a","v-339b8977","v-7f762968","v-948fe668","v-331b4e12","v-25507322","v-7efb1c5d","v-0271c50c","v-45410d4b","v-d985b94c","v-0dba7fcb","v-43bfb7c0","v-43bfb7df","v-43bfb7fe","v-43bfb81d","v-43bfb83c","v-fcf9a784","v-39786273","v-271a8b48","v-3febf42d","v-78493303","v-3953c4a4","v-9757ae78","v-05f16561","v-653e1c1d","v-89f114ba","v-3db67a40","v-1b6b1cfa","v-44a13a86","v-6f38dab0","v-00a018bf","v-bb952da6","v-3eec26d3","v-a4b9dd90","v-7624e067","v-0bb9c789","v-3ecba07f","v-13072166","v-1936c0d5","v-90df2e26","v-2c1c367c","v-61dcb9ca","v-a1d04c6c","v-ead2f860","v-6926cfaa","v-d5ecdaba","v-1e8d39be","v-4ca9b1ff","v-22afdd50","v-4eb59d06","v-af64a3ba","v-32690d91","v-15b1d789","v-8ebbf29c","v-c8e1ae3a","v-685b81d4","v-28113e1c","v-53d002db","v-dde823e8","v-18aae998","v-1b333d5c","v-0ff149dc","v-3f8bc7c2","v-f0217ea8","v-70bc2959","v-3f0a946f","v-12933370","v-405fe66c","v-3966872e","v-4fe861a4","v-134ccd82","v-7b4b9dc7","v-275077d9","v-082b14e8","v-47449e3c","v-48a9c507","v-73b317e4","v-58121615","v-2fc561e0","v-6d8a905c","v-1ec0c498","v-12f7a1d2","v-469f0e94","v-709e7438","v-0a8937cf","v-7277d541","v-40911b8e","v-13c64a8d","v-29c5c590","v-545738c8","v-e4c5586a","v-6ec2f8d0","v-6192c6ac","v-4377e9a2","v-841c3444","v-2b59d834","v-0fe915da","v-43545b33","v-011c74f0","v-b1e58032","v-599ab9b3","v-535669d3","v-3709255a","v-343c7385","v-7f0ca952","v-4edf72d6","v-dfd677c2","v-d7add974","v-7b0cd90e","v-77611f2a","v-ef9ffcba","v-2d0aaf03","v-02df1f96","v-1df04f08","v-37dcfe5d","v-c5cd3edc","v-e114d1d2","v-0e642874","v-a5195ce6","v-7c80db8b","v-386477da","v-ebcc9b7c","v-82076524","v-c7a6fd84","v-0289e456","v-61f2a5b0","v-ff088e9c","v-9d1ecdb0","v-0246c81b","v-c87b41c4","v-507bed41","v-78d65395","v-51defb2f","v-19da668e","v-42d58db0","v-0a11e84c","v-f9cb582c","v-093e04ac","v-7c4c95c4","v-fce35ce0","v-4613513a","v-a99c571c","v-67b6f947","v-0c09d80a","v-47bb6d4c","v-c9250e40","v-1adba576","v-eba414ea","v-15dca1e6","v-3d92dd5a","v-7a7f0bea","v-9ec589ba","v-36cf8589","v-013c1e81","v-640b9c86","v-309be644","v-91b437be","v-53503e38","v-003bf188","v-5748b243","v-db62373e","v-1a7ea05d","v-79c9f96f","v-5e2533a8","v-23a88807","v-30728471","v-7378bc31","v-47672dec","v-58188c0c","v-fbb8e312","v-7af25863","v-490af90f","v-689ccac3","v-5789ff2c","v-31351e7d","v-d2113bde","v-39c15e36","v-cfcc0faa","v-9e274aaa","v-6d504a5e","v-172206f6","v-6e25be61","v-f0383c18","v-810a1d4a","v-f3213f92","v-31af7fac","v-bb478dba","v-224cf13a","v-1db2e12e","v-88d120d6","v-4f7b7c72","v-04ef0ac5","v-29cea7e7","v-6963d030","v-18d19b29","v-536b5b25","v-5699db53","v-e4cb1150","v-74473916","v-7f4f380c","v-6726240a","v-37125490","v-2767e582","v-55994567","v-be175c8a","v-5239b90e","v-3cf546d5","v-f4cfda76","v-d440f426","v-7445cd33","v-4155ce3c","v-464c88aa","v-6d51fcc4","v-1bf8f71d","v-d7188082","v-d2576f5c"]}},star:{"/":{path:"/star/",keys:[]}},timeline:{"/":{path:"/timeline/",keys:["v-7aba7e62","v-12aac2e1","v-468de280","v-29b89b89","v-7cb79b7a","v-6d744f6f","v-0e6eab8e","v-27bd9296","v-5a4b6345","v-a2ddb01c","v-2b70e4f9","v-50401ed5","v-249a6012","v-5bd12a58","v-56224f88","v-49d04651","v-473b8da1","v-20f0fd66","v-a3e2d4e4","v-73be5696","v-440dee74","v-7d0c470e","v-502807be","v-171c1b4c","v-30e7d74e","v-1e23d93c","v-0b5dadd6","v-b1b88c62","v-093969da","v-55b8ba0a","v-6169e28b","v-0a46221e","v-60d5c536","v-f5ec58cc","v-01f872e7","v-0a582b41","v-19781156","v-a3ffd1cc","v-358ae550","v-4cb9b16c","v-058e1247","v-311e62d0","v-6207c160","v-031a6e0b","v-764b221e","v-b10ed23e","v-0fc88264","v-4d262f90","v-69e81a00","v-645cb53f","v-5cc4fad5","v-16e4cf3e","v-306f125d","v-5dc35644","v-b51510f6","v-5cafefc2","v-446a765e","v-c8821a6a","v-339b8977","v-7f762968","v-948fe668","v-331b4e12","v-25507322","v-7efb1c5d","v-0271c50c","v-45410d4b","v-d985b94c","v-0dba7fcb","v-43bfb7c0","v-43bfb7df","v-43bfb7fe","v-43bfb81d","v-43bfb83c","v-fcf9a784","v-39786273","v-271a8b48","v-3febf42d","v-78493303","v-3953c4a4","v-9757ae78","v-05f16561","v-653e1c1d","v-89f114ba","v-3db67a40","v-1b6b1cfa","v-44a13a86","v-6f38dab0","v-00a018bf","v-bb952da6","v-3eec26d3","v-a4b9dd90","v-7624e067","v-0bb9c789","v-3ecba07f","v-13072166","v-1936c0d5","v-90df2e26","v-2c1c367c","v-61dcb9ca","v-a1d04c6c","v-ead2f860","v-6926cfaa","v-d5ecdaba","v-1e8d39be","v-4ca9b1ff","v-22afdd50","v-4eb59d06","v-af64a3ba","v-32690d91","v-15b1d789","v-8ebbf29c","v-c8e1ae3a","v-685b81d4","v-28113e1c","v-53d002db","v-dde823e8","v-18aae998","v-1b333d5c","v-0ff149dc","v-3f8bc7c2","v-f0217ea8","v-70bc2959","v-3f0a946f","v-12933370","v-405fe66c","v-3966872e","v-4fe861a4","v-134ccd82","v-7b4b9dc7","v-275077d9","v-082b14e8","v-47449e3c","v-48a9c507","v-73b317e4","v-58121615","v-2fc561e0","v-6d8a905c","v-1ec0c498","v-12f7a1d2","v-469f0e94","v-709e7438","v-0a8937cf","v-7277d541","v-40911b8e","v-13c64a8d","v-29c5c590","v-545738c8","v-e4c5586a","v-6ec2f8d0","v-6192c6ac","v-4377e9a2","v-841c3444","v-2b59d834","v-0fe915da","v-43545b33","v-011c74f0","v-b1e58032","v-599ab9b3","v-535669d3","v-3709255a","v-343c7385","v-7f0ca952","v-4edf72d6","v-dfd677c2","v-d7add974","v-7b0cd90e","v-77611f2a","v-ef9ffcba","v-2d0aaf03","v-02df1f96","v-1df04f08","v-37dcfe5d","v-c5cd3edc","v-e114d1d2","v-0e642874","v-a5195ce6","v-7c80db8b","v-386477da","v-ebcc9b7c","v-82076524","v-c7a6fd84","v-0289e456","v-61f2a5b0","v-ff088e9c","v-9d1ecdb0","v-0246c81b","v-c87b41c4","v-507bed41","v-78d65395","v-51defb2f","v-19da668e","v-42d58db0","v-0a11e84c","v-f9cb582c","v-093e04ac","v-7c4c95c4","v-fce35ce0","v-4613513a","v-a99c571c","v-67b6f947","v-0c09d80a","v-47bb6d4c","v-c9250e40","v-1adba576","v-eba414ea","v-15dca1e6","v-3d92dd5a","v-7a7f0bea","v-9ec589ba","v-36cf8589","v-013c1e81","v-640b9c86","v-309be644","v-91b437be","v-53503e38","v-003bf188","v-5748b243","v-db62373e","v-1a7ea05d","v-79c9f96f","v-5e2533a8","v-23a88807","v-30728471","v-7378bc31","v-47672dec","v-58188c0c","v-fbb8e312","v-7af25863","v-490af90f","v-689ccac3","v-5789ff2c","v-31351e7d","v-d2113bde","v-39c15e36","v-cfcc0faa","v-9e274aaa","v-6d504a5e","v-172206f6","v-6e25be61","v-f0383c18","v-810a1d4a","v-f3213f92","v-31af7fac","v-bb478dba","v-224cf13a","v-1db2e12e","v-88d120d6","v-4f7b7c72","v-04ef0ac5","v-29cea7e7","v-6963d030","v-18d19b29","v-536b5b25","v-5699db53","v-e4cb1150","v-74473916","v-7f4f380c","v-6726240a","v-37125490","v-2767e582","v-55994567","v-be175c8a","v-5239b90e","v-3cf546d5","v-f4cfda76","v-d440f426","v-7445cd33","v-4155ce3c","v-464c88aa","v-6d51fcc4","v-1bf8f71d","v-d7188082","v-d2576f5c"]}}},l=ref(categoryMap),k=(b="")=>{const $=useRouter(),j=useRoute(),U=useRouteLocale();return computed(()=>{var G;const W=b||((G=usePageFrontmatter().value.blog)==null?void 0:G.key)||"";if(!W)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};const K=$.getRoutes();if(!l.value[W])throw new Error(`useBlogCategory: key ${W} is invalid`);const Y=l.value[W][U.value],ee={path:Y.path,map:{}};for(const ne in Y.map){const ae=Y.map[ne];ee.map[ne]={path:ae.path,items:[]};for(const oe of ae.keys){const ie=K.find(({name:se})=>se===oe);if(ie){const se=vt($,ie.path);ee.map[ne].items.push({path:se.path,info:se.meta})}}j.path===ae.path&&(ee.currentItems=ee.map[ne].items)}return ee})},_=ref(typeMap),C=(b="")=>{const $=useRouter(),j=useRouteLocale();return computed(()=>{var U;const G=b||((U=usePageFrontmatter().value.blog)==null?void 0:U.key)||"";if(!G)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!_.value[G])throw new Error(`useBlogType: key ${b} is invalid`);const W=$.getRoutes(),K=_.value[G][j.value],Y={path:K.path,items:[]};for(const ee of K.keys){const ne=W.find(({name:ae})=>ae===ee);if(ne){const ae=vt($,ne.path);Y.items.push({path:ae.path,info:ae.meta})}}return Y})},categoryMapSymbol=Symbol.for("categoryMap"),useCategoryMap=()=>{const b=inject(categoryMapSymbol);if(!b)throw new Error("useCategoryMap() is called without provider.");return b},setupCategoryMap=()=>{const b=k("category");provide(categoryMapSymbol,b)},useBlogOptions=()=>{const b=useThemeData(),$=useThemeLocaleData();return computed(()=>({...b.value.blog,...$.value.blog}))},tagMapSymbol=Symbol.for("tagMap"),useTagMap=()=>{const b=inject(tagMapSymbol);if(!b)throw new Error("useTagMap() is called without provider.");return b},setupTagMap=()=>{const b=k("tag");provide(tagMapSymbol,b)},useArticleAuthor=b=>{const $=useThemeLocaleData();return computed(()=>{const{["a"]:j}=b.value;return j?Gt(j):j===!1?[]:Gt($.value.author,!1)})},useArticleCategory=b=>{const $=useCategoryMap();return computed(()=>Qt(b.value.c).map(j=>({name:j,path:$.value.map[j].path})))},useArticleTag=b=>{const $=useTagMap();return computed(()=>Kt(b.value.g).map(j=>({name:j,path:$.value.map[j].path})))},useArticleDate=b=>computed(()=>{const{["d"]:$}=b.value;return $?rt($):null}),useArticleInfo=b=>{const $=toRef(b,"info"),j=useBlogOptions(),U=useArticleAuthor($),G=useArticleCategory($),W=useArticleTag($),K=useArticleDate($),Y=computed(()=>({author:U.value,category:G.value,date:K.value,localizedDate:$.value.l||"",tag:W.value,isOriginal:$.value.o||!1,readingTime:$.value.r||null,pageview:b.path})),ee=computed(()=>j.value.articleInfo);return{info:Y,items:ee}},articlesSymbol=Symbol.for("articles"),useArticles=()=>{const b=inject(articlesSymbol);if(!b)throw new Error("useArticles() is called without provider.");return b},setupArticles=()=>{const b=C("article");provide(articlesSymbol,b)},starsSymbol=Symbol.for("stars"),useStars=()=>{const b=inject(starsSymbol);if(!b)throw new Error("useStars() is called without provider.");return b},setupStars=()=>{const b=C("star");provide(starsSymbol,b)},timelinesSymbol=Symbol.for("timelines"),useTimelines=()=>{const b=inject(timelinesSymbol);if(!b)throw new Error("useTimelines() is called without provider.");return b},setupTimelines=()=>{const b=C("timeline"),$=computed(()=>{const j=[];return b.value.items.forEach(({info:U,path:G})=>{var ee;const{year:W,month:K,day:Y}=((ee=rt(U.d))==null?void 0:ee.info)||{};W&&K&&Y&&((!j[0]||j[0].year!==W)&&j.unshift({year:W,items:[]}),j[0].items.push({date:`${K}/${Y}`,info:U,path:G}))}),{...b.value,config:j.reverse()}});provide(timelinesSymbol,$)},setupBlog=()=>{setupArticles(),setupCategoryMap(),setupStars(),setupTagMap(),setupTimelines()},socialMedia="",SocialMedia=defineComponent({name:"SocialMedia",setup(){const b=useBlogOptions(),$=usePure(),j=computed(()=>{const U=b.value.medias;return U?Object.entries(U).map(([G,W])=>({name:G,icon:icons[G],url:W})):[]});return()=>j.value.length?h$3("div",{class:"social-media-wrapper"},j.value.map(({name:U,icon:G,url:W})=>h$3("a",{class:"social-media",href:W,rel:"noopener noreferrer",target:"_blank","aria-label":U,...$.value?{}:{"data-balloon-pos":"up"},innerHTML:G}))):null}}),bloggerInfo="",BloggerInfo=defineComponent({name:"BloggerInfo",setup(){const b=useBlogOptions(),$=useSiteLocaleData(),j=useThemeLocaleData(),U=useArticles(),G=useCategoryMap(),W=useTagMap(),K=useTimelines(),Y=useNavigate(),ee=computed(()=>{var ie;return b.value.name||((ie=Gt(j.value.author)[0])==null?void 0:ie.name)||$.value.title}),ne=computed(()=>b.value.avatar||j.value.logo),ae=computed(()=>j.value.blogLocales),oe=computed(()=>b.value.intro);return()=>h$3("div",{class:"blogger-info",vocab:"https://schema.org/",typeof:"Person"},[h$3("div",{class:"blogger",...oe.value?{style:{cursor:"pointer"},"aria-label":ae.value.intro,"data-balloon-pos":"down",role:"navigation",onClick:()=>Y(oe.value)}:{}},[ne.value?h$3("img",{class:["blogger-avatar",{round:b.value.roundAvatar}],src:withBase(ne.value),property:"image",alt:"Blogger Avatar"}):null,ee.value?h$3("div",{class:"blogger-name",property:"name"},ee.value):null,b.value.description?h$3("div",{class:"blogger-description",innerHTML:b.value.description}):null,oe.value?h$3("meta",{property:"url",content:withBase(oe.value)}):null]),h$3("div",{class:"num-wrapper"},[h$3("div",{onClick:()=>Y(U.value.path)},[h$3("div",{class:"num"},U.value.items.length),h$3("div",ae.value.article)]),h$3("div",{onClick:()=>Y(G.value.path)},[h$3("div",{class:"num"},Object.keys(G.value.map).length),h$3("div",ae.value.category)]),h$3("div",{onClick:()=>Y(W.value.path)},[h$3("div",{class:"num"},Object.keys(W.value.map).length),h$3("div",ae.value.tag)]),h$3("div",{onClick:()=>Y(K.value.path)},[h$3("div",{class:"num"},K.value.items.length),h$3("div",ae.value.timeline)])]),h$3(SocialMedia)])}}),CategoryIcon=()=>h$3(lt,{name:"category"},()=>h$3("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));CategoryIcon.displayName="CategoryIcon";const TagIcon=()=>h$3(lt,{name:"tag"},()=>h$3("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));TagIcon.displayName="TagIcon";const TimelineIcon=()=>h$3(lt,{name:"timeline"},()=>h$3("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));TimelineIcon.displayName="TimelineIcon";const SlideIcon=()=>h$3(lt,{name:"slides"},()=>h$3("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));SlideIcon.displayName="SlideIcon";const StickyIcon=()=>h$3(lt,{name:"sticky"},()=>[h$3("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);StickyIcon.displayName="StickyIcon";const ArticleIcon=()=>h$3(lt,{name:"article"},()=>h$3("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));ArticleIcon.displayName="ArticleIcon";const BookIcon=()=>h$3(lt,{name:"book"},()=>h$3("path",{d:"M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"}));BookIcon.displayName="BookIcon";const LinkIcon=()=>h$3(lt,{name:"link"},()=>h$3("path",{d:"M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"}));LinkIcon.displayName="LinkIcon";const ProjectIcon=()=>h$3(lt,{name:"project"},()=>h$3("path",{d:"M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"}));ProjectIcon.displayName="ProjectIcon";const FriendIcon=()=>h$3(lt,{name:"friend"},()=>h$3("path",{d:"M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"}));FriendIcon.displayName="FriendIcon";const SlideDownIcon=()=>h$3(lt,{name:"slide-down"},()=>h$3("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));SlideDownIcon.displayName="SlideDownIcon";const emptyIcon="",EmptyIcon=()=>h$3("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"empty-icon",viewBox:"0 0 1024 1024",innerHTML:'<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'});EmptyIcon.displayName="EmptyIcon";const LockIcon=()=>h$3(lt,{name:"lock"},()=>h$3("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));LockIcon.displayName="LockIcon";const articleItem="",ArticleItem=defineComponent({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},setup(b){const $=toRef(b,"info"),{info:j,items:U}=useArticleInfo(b);return()=>h$3("div",{class:"article-item"},h$3("article",{class:"article",vocab:"https://schema.org/",typeof:"Article"},[$.value.u?h$3(StickyIcon):null,h$3(RouterLink,{to:b.path},()=>[h$3("header",{class:"title"},[$.value.n?h$3(LockIcon):null,$.value.y==="s"?h$3(SlideIcon):null,h$3("span",{property:"headline"},$.value.title),$.value.v?h$3("meta",{property:"image",content:withBase($.value.v)}):null])]),$.value.e?h$3("div",{class:"article-excerpt",innerHTML:$.value.e}):null,h$3("hr",{class:"hr"}),h$3(PageInfo,{info:j.value,...U.value?{items:U.value}:{}})]))}}),pagination="",Pagination=defineComponent({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:{updateCurrentPage:b=>!0},setup(b,{emit:$}){let j;const U=useThemeLocaleData(),G=ref(""),W=computed(()=>U.value.paginationLocales),K=computed(()=>Math.ceil(b.total/b.perPage)),Y=computed(()=>Boolean(K.value)&&K.value!==1),ee=computed(()=>K.value<7?!1:b.current>4),ne=computed(()=>K.value<7?!1:b.current<K.value-3),ae=computed(()=>{const{current:se}=b;let re=1,le=K.value;const pe=[];K.value>=7&&(se<=4&&se<K.value-3?(re=1,le=5):se>4&&se>=K.value-3?(le=K.value,re=K.value-4):K.value>7&&(re=se-2,le=se+2));for(let me=re;me<=le;me++)pe.push(me);return pe}),oe=se=>$("updateCurrentPage",se),ie=se=>{const re=parseInt(se);re<=K.value&&re>0?oe(re):j.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>${W.value.errorText.replace(/\$page/g,K.value.toString())}`)};return onMounted(()=>{j=new Lt}),()=>h$3("div",{class:"pagination-wrapper"},Y.value?h$3("div",{class:"pagination-list"},[h$3("div",{class:"page-number"},[b.current>1?h$3("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>oe(b.current-1)},W.value.prev):null,...ee.value?[h$3("div",{role:"navigation",onClick:()=>oe(1)},1),h$3("div",{class:"ellipsis"},"...")]:[],...ae.value.map(se=>h$3("div",{key:se,class:{active:b.current===se},role:"navigation",onClick:()=>oe(se)},se)),...ne.value?[h$3("div",{class:"ellipsis"},"..."),h$3("div",{role:"navigation",onClick:()=>oe(K.value)},K.value)]:[],b.current<K.value?h$3("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>oe(b.current+1)},W.value.next):null]),h$3("div",{class:"navigate-wrapper"},[h$3("label",{for:"navigation-text"},`${W.value.navigate}: `),h$3("input",{id:"navigation-text",value:G.value,onInput:({target:se})=>{G.value=se.value},onKeydown:se=>{se.key==="Enter"&&(se.preventDefault(),ie(G.value))}}),h$3("button",{class:"navigate",role:"navigation",title:W.value.action,onClick:()=>ie(G.value)},W.value.action)])]):[])}}),articleList="",ArticleList=defineComponent({name:"ArticleList",props:{items:{type:Array,default:()=>[]}},setup(b){const $=useRoute(),j=useRouter(),U=useBlogOptions(),G=ref(1),W=computed(()=>U.value.articlePerPage||10),K=computed(()=>b.items.slice((G.value-1)*W.value,G.value*W.value)),Y=ee=>{G.value=ee;const ne={...$.query};ne.page===ee.toString()||ee===1&&!ne.page||(ee===1?delete ne.page:ne.page=ee.toString(),j.push({path:$.path,query:ne}))};return onMounted(()=>{const{page:ee}=$.query;Y(ee?Number(ee):1),watch(G,()=>{const ne=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,ne)},100)})}),()=>h$3("div",{id:"article-list",class:"article-wrapper"},K.value.length?[...K.value.map(({info:ee,path:ne},ae)=>h$3(DropTransition,{appear:!0,delay:ae*.04},()=>h$3(ArticleItem,{key:ne,info:ee,path:ne}))),h$3(Pagination,{current:G.value,perPage:W.value,total:b.items.length,onUpdateCurrentPage:Y})]:h$3(EmptyIcon))}}),categoryList="",CategoryList=defineComponent({name:"CategoryList",setup(){const b=useRoute(),$=useCategoryMap();return()=>h$3("ul",{class:"category-list-wrapper"},Object.entries($.value.map).map(([j,{path:U,items:G}])=>h$3("li",{class:["category",`category${jt(j,9)}`,{active:U===b.path}]},h$3(RouterLink,{to:U},()=>[j,h$3("span",{class:"category-num"},G.length)]))))}}),tagList="",TagList=defineComponent({name:"TagList",setup(){const b=usePageFrontmatter(),$=useTagMap(),j=U=>{var G;return U===((G=b.value.blog)==null?void 0:G.name)};return()=>h$3("ul",{class:"tag-list-wrapper"},Object.entries($.value.map).map(([U,{path:G,items:W}])=>h$3("li",{class:["tag",`tag${jt(U,9)}`,{active:j(U)}]},h$3(RouterLink,{to:G},()=>[U,h$3("span",{class:"tag-num"},W.length)]))))}}),timelineList="",TimelineList=defineComponent({name:"TimelineList",setup(){const b=useThemeLocaleData(),$=useTimelines(),j=useNavigate(),U=computed(()=>b.value.blogLocales.timeline);return()=>h$3("div",{class:"timeline-list-wrapper"},[h$3("div",{class:"timeline-list-title",onClick:()=>j($.value.path)},[h$3(TimelineIcon),h$3("span",{class:"num"},$.value.items.length),U.value]),h$3("hr"),h$3("div",{class:"timeline-content"},h$3("ul",{class:"timeline-list"},$.value.config.map(({year:G,items:W},K)=>h$3(DropTransition,{appear:!0,delay:.08*(K+1)},()=>h$3("li",[h$3("h3",{class:"timeline-year"},G),h$3("ul",{class:"timeline-year-wrapper"},W.map(({date:Y,info:ee,path:ne})=>h$3("li",{class:"timeline-item"},[h$3("span",{class:"timeline-date"},Y),h$3(RouterLink,{class:"timeline-title",to:ne},()=>ee.title)])))])))))])}}),infoList="",InfoList=defineComponent({name:"InfoList",setup(){const b=useThemeLocaleData(),$=useArticles(),j=useCategoryMap(),U=computed(()=>Object.keys(j.value.map).length),G=useStars(),W=useTagMap(),K=computed(()=>Object.keys(W.value.map).length),Y=useNavigate(),ee=ref("article"),ne=computed(()=>b.value.blogLocales),ae=[["article",ArticleIcon],["category",CategoryIcon],["tag",TagIcon],["timeline",TimelineIcon]];return()=>h$3("div",{class:"blog-info-list"},[h$3("div",{class:"blog-type-wrapper"},ae.map(([oe,ie])=>h$3("button",{class:"blog-type-button",onClick:()=>{ee.value=oe}},h$3("div",{class:["icon-wrapper",{active:ee.value===oe}],"aria-label":ne.value[oe],"data-balloon-pos":"up"},h$3(ie))))),ee.value==="article"?h$3(DropTransition,()=>[h$3("div",{class:"sticky-article-wrapper"},[h$3("div",{class:"title",onClick:()=>Y($.value.path)},[h$3(ArticleIcon),h$3("span",{class:"num"},$.value.items.length),ne.value.article]),h$3("hr"),h$3("ul",{class:"sticky-article-list"},G.value.items.map(({info:oe,path:ie},se)=>h$3(DropTransition,{appear:!0,delay:.08*(se+1)},()=>h$3("li",{class:"sticky-article"},h$3(RouterLink,{to:ie},()=>oe.title)))))])]):null,ee.value==="category"?h$3(DropTransition,()=>[h$3("div",{class:"category-wrapper"},[U.value?h$3("div",{class:"title",onClick:()=>Y(j.value.path)},[h$3(CategoryIcon),h$3("span",{class:"num"},U.value),ne.value.category]):null,h$3("hr"),h$3(DropTransition,{delay:.04},()=>h$3(CategoryList))])]):null,ee.value==="tag"?h$3(DropTransition,()=>[h$3("div",{class:"tag-wrapper"},[K.value?h$3("div",{class:"title",onClick:()=>Y(W.value.path)},[h$3(TagIcon),h$3("span",{class:"num"},K.value),ne.value.tag]):null,h$3("hr"),h$3(DropTransition,{delay:.04},()=>h$3(TagList))])]):null,ee.value==="timeline"?h$3(DropTransition,()=>h$3(TimelineList)):null])}}),page="",BlogWrapper=defineComponent({name:"BlogWrapper",setup(b,{slots:$}){const j=useMobile();return()=>[h$3(SkipLink),h$3(CommonWrapper,{noSidebar:!0},{default:()=>{var U;return(U=$.default)==null?void 0:U.call($)},navScreenBottom:()=>h$3(BloggerInfo),...j.value?{sidebar:()=>h$3(InfoList)}:{}})]}}),infoPanel="",InfoPanel=()=>h$3("aside",{class:"blog-info-wrapper"},[h$3(DropTransition,()=>h$3(BloggerInfo)),h$3(DropTransition,{delay:.04},()=>h$3(InfoList))]);InfoPanel.displayName="InfoPanel";const BlogCategory=defineComponent({name:"BlogPage",components:{CategoryList,TagList},setup(){const b=usePageFrontmatter(),$=useRoute(),j=useCategoryMap(),U=useTagMap(),G=computed(()=>b.value.blog||{}),W=computed(()=>{const{key:Y=""}=G.value;return Y==="category"?"CategoryList":Y==="tag"?"TagList":null}),K=computed(()=>{const{name:Y="",key:ee=""}=G.value;return ee==="category"?Y?j.value.map[Y].items:[]:ee==="tag"?Y?U.value.map[Y].items:[]:[]});return()=>h$3(BlogWrapper,()=>h$3("div",{class:"page blog"},h$3("div",{class:"blog-page-wrapper"},[h$3("main",{class:"blog-main",id:"main-content"},[h$3(DropTransition,()=>W.value?h$3(resolveComponent(W.value)):null),G.value.name?h$3(DropTransition,{appear:!0,delay:.24},()=>h$3(ArticleList,{key:$.path,items:K.value})):null]),h$3(DropTransition,{delay:.16},()=>h$3(InfoPanel))])))}}),defaultHeroBgImagePath="/assets/hero-197a9d2d.jpg",blogHero="",BlogHero=defineComponent({name:"BlogHero",setup(){const b=usePageHeadTitle(),$=usePageFrontmatter(),j=ref(),U=computed(()=>$.value.heroImage||null),G=computed(()=>$.value.heroFullScreen||!1),W=computed(()=>({...{maxHeight:"180px",margin:$.value.heroText===!1?"6rem auto 1.5rem":"1rem auto"},...$.value.heroImageStyle})),K=computed(()=>$.value.bgImage?withBase($.value.bgImage):$.value.bgImage??defaultHeroBgImagePath),Y=computed(()=>({...{height:"350px",textAlign:"center",overflow:"hidden"},...$.value.bgImageStyle}));return()=>$.value.hero!==!1?h$3("div",{ref:j,class:["blog-hero",{fullscreen:G.value}],style:Y.value},[K.value?h$3("div",{class:"mask",style:{background:`url(${K.value}) center/cover no-repeat`}}):null,h$3(DropTransition,{appear:!0,delay:.04},()=>U.value?h$3("img",{class:"hero-image",style:W.value,src:withBase(U.value),alt:$.value.heroAlt||"hero image"}):null),h$3(DropTransition,{appear:!0,delay:.08},()=>$.value.heroText!==!1?h$3("h1",$.value.heroText||b.value):null),h$3(DropTransition,{appear:!0,delay:.12},()=>$.value.tagline?h$3("p",{class:"description",innerHTML:$.value.tagline}):null),G.value?h$3("button",{class:"slide-down-button",onClick:()=>{window.scrollTo({top:j.value.clientHeight,behavior:"smooth"})}},[h$3(SlideDownIcon),h$3(SlideDownIcon)]):null]):null}}),projectPanel="",AVAILABLE_PROJECT_TYPES=["link","article","book","project","friend"],ProjectPanel=defineComponent({name:"ProjectPanel",components:{ArticleIcon,BookIcon,FriendIcon,LinkIcon,ProjectIcon},setup(){const b=usePageFrontmatter(),$=usePure(),j=useNavigate(),U=(G="",W="icon")=>AVAILABLE_PROJECT_TYPES.includes(G)?h$3(resolveComponent(`${G}-icon`)):G.match(/^https?:\/\//)?h$3("img",{src:G,alt:W,class:"image"}):G.startsWith("/")?h$3("img",{src:withBase(G),alt:W,class:"image"}):h$3(Icon,{icon:G});return()=>{var G;return(G=b.value.projects)!=null&&G.length?h$3("div",{class:"project-panel"},b.value.projects.map(({icon:W,link:K,name:Y,desc:ee},ne)=>h$3("div",{class:["project",{[`project${ne%9}`]:!$.value}],onClick:()=>j(K)},[U(W,Y),h$3("div",{class:"name"},Y),h$3("div",{class:"desc"},ee)]))):null}}}),home="",BlogHome$1=defineComponent({name:"BlogHome",setup(){const b=useArticles();return()=>h$3("div",{class:"page blog"},[h$3(BlogHero),h$3("div",{class:"blog-page-wrapper"},[h$3("main",{class:"blog-home",id:"main-content"},[h$3(DropTransition,{appear:!0,delay:.16},()=>h$3(ProjectPanel)),h$3(DropTransition,{appear:!0,delay:.24},()=>h$3(ArticleList,{items:b.value.items}))]),h$3(DropTransition,{appear:!0,delay:.16},()=>h$3(InfoPanel))]),h$3(DropTransition,{appear:!0,delay:.28},()=>h$3(MarkdownContent))])}}),BlogHome=defineComponent({name:"BlogHome",setup(){return()=>h$3(BlogWrapper,()=>h$3(BlogHome$1))}}),articleType="",ArticleType=defineComponent({name:"ArticleType",setup(){const b=useRouteLocale(),$=useThemeLocaleData(),j=useRoute(),U=useArticles(),G=useStars(),W=computed(()=>{const K=$.value.blogLocales;return[{text:K.all,path:U.value.path},{text:K.star,path:G.value.path},...[].map(({key:Y,path:ee})=>({text:K[Y],path:ee.replace(/^\//,b.value)}))]});return()=>h$3("ul",{class:"article-type-wrapper"},W.value.map(K=>h$3("li",{class:["article-type",{active:K.path===j.path}]},h$3(RouterLink,{to:K.path},()=>K.text))))}}),BlogType=defineComponent({name:"BlogPage",setup(){const b=C(),$=usePageFrontmatter(),j=useRoute(),U=useArticles(),G=useStars(),W=computed(()=>{const{key:K="",type:Y}=$.value.blog||{};return K==="star"?G.value.items:Y==="type"&&K?b.value.items:U.value.items});return()=>h$3(BlogWrapper,()=>h$3("div",{class:"page blog"},h$3("div",{class:"blog-page-wrapper"},[h$3("main",{class:"blog-main",id:"main-content"},[h$3(DropTransition,()=>h$3(ArticleType)),h$3(DropTransition,{appear:!0,delay:.24},()=>h$3(ArticleList,{key:j.path,items:W.value}))]),h$3(DropTransition,{delay:.16},()=>h$3(InfoPanel))])))}}),timelineItems="",TimelineItems=defineComponent({name:"TimelineItems",setup(){const b=useBlogOptions(),$=useThemeLocaleData(),j=useTimelines(),U=computed(()=>b.value.timeline||$.value.blogLocales.timelineTitle),G=computed(()=>j.value.config.map(({year:W})=>({title:W.toString(),level:2,slug:W.toString(),children:[]})));return()=>h$3("div",{class:"timeline-wrapper"},h$3("ul",{class:"timeline-content"},[h$3(DropTransition,()=>h$3("li",{class:"motto"},U.value)),h$3(TOC,{items:G.value}),...j.value.config.map(({year:W,items:K},Y)=>h$3(DropTransition,{appear:!0,delay:.08*(Y+1),type:"group"},()=>[h$3("h3",{key:"title",id:W,class:"timeline-year-title"},h$3("span",W)),h$3("li",{key:"content",class:"timeline-year-list"},[h$3("ul",{class:"timeline-year-wrapper"},K.map(({date:ee,info:ne,path:ae})=>h$3("li",{class:"timeline-item"},[h$3("span",{class:"timeline-date"},ee),h$3(RouterLink,{class:"timeline-title",to:ae},()=>ne.title)])))])]))]))}}),Timeline=defineComponent({name:"Timeline",components:{ArticleType,CategoryList,TagList},setup(){return()=>h$3(BlogWrapper,()=>h$3("div",{class:"page blog"},h$3("div",{class:"blog-page-wrapper"},[h$3("main",{class:"blog-main",id:"main-content"},[h$3(DropTransition,{appear:!0,delay:.24},()=>h$3(TimelineItems))]),h$3(DropTransition,{delay:.16},()=>h$3(InfoPanel))])))}}),layout="",slidePage="",d$1=()=>h$3(lt,{name:"back"},()=>h$3("path",{d:"M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z"})),h=()=>h$3(lt,{name:"home"},()=>h$3("path",{d:"M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z"}));var f=defineComponent({name:"SlidePage",setup(){const b=useRouter(),$=ref(!1),j=ref(),U=()=>{$.value=!$.value},G=()=>{$.value=!1},W=()=>{G(),window.history.go(-1)},K=()=>{G(),b.push("/")};return onClickOutside(j,G),()=>h$3("div",{class:"presentation"},[h$3(Content),h$3("div",{ref:j,class:["menu",{active:$.value}]},[h$3("button",{class:"menu-button",onClick:()=>U()},h$3("span",{class:"icon"})),h$3("button",{class:"back-button",onClick:()=>W()},h$3(d$1)),h$3("button",{class:"home-button",onClick:()=>K()},h$3(h))])])}});const clientConfig10=defineClientConfig({enhance:({app:b,router:$})=>{const{scrollBehavior:j}=$.options;$.options.scrollBehavior=async(...U)=>(await useScrollPromise().wait(),j(...U)),injectDarkMode(b),b.component("BloggerInfo",BloggerInfo)},setup:()=>{setupDarkMode(),setupSidebarItems(),setupBlog()},layouts:{Layout,NotFound,BlogCategory,BlogHome,BlogType,Timeline,Slide:f}}),searchBox="",searchModal="",u=()=>h$3(lt,{name:"search"},()=>h$3("path",{d:"M192 480a256 256 0 1 1 512 0 256 256 0 0 1-512 0m631.776 362.496-143.2-143.168A318.464 318.464 0 0 0 768 480c0-176.736-143.264-320-320-320S128 303.264 128 480s143.264 320 320 320a318.016 318.016 0 0 0 184.16-58.592l146.336 146.368c12.512 12.48 32.768 12.48 45.28 0 12.48-12.512 12.48-32.768 0-45.28"}));u.displayName="SearchIcon";const d=Symbol.for("search-pro"),S=()=>{const b=ref(!1);provide(d,b)},E=[{key:"k",ctrl:!0}],p={"/":{cancel:"取消",placeholder:"搜索",search:"搜索",select:"选择",navigate:"切换",exit:"关闭",history:"搜索历史",emptyHistory:"无搜索历史",emptyResult:"没有找到结果",loading:"正在加载搜索索引..."}},L=b=>b instanceof Element?document.activeElement===b&&(["TEXTAREA","SELECT","INPUT"].includes(b.tagName)||b.hasAttribute("contenteditable")):!1,T=b=>E.some($=>{const{key:j,ctrl:U=!1,shift:G=!1,alt:W=!1}=$;return j===b.key&&U===b.ctrlKey&&G===b.shiftKey&&W===b.altKey});var A=defineComponent({name:"SearchBox",setup(){const b=Ot(p),$=inject(d);return useEventListener("keydown",j=>{!$.value&&T(j)&&!L(j.target)&&(j.preventDefault(),$.value=!0)}),()=>[h$3("button",{class:"search-pro-button",role:"search","aria-label":b.value.search,onClick:()=>{$.value=!0}},h$3(u))]}});const m=()=>h$3("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",preserveAspectRatio:"xMidYMid",viewBox:"0 0 100 100"},[h$3("circle",{cx:"28",cy:"75",r:"11",fill:"currentColor"},h$3("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),h$3("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 47a28 28 0 0 1 28 28"},h$3("animate",{attributeName:"stroke-opacity",begin:"0.1s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"})),h$3("path",{fill:"none",stroke:"#88baf0","stroke-width":"10",d:"M28 25a50 50 0 0 1 50 50"},h$3("animate",{attributeName:"stroke-opacity",begin:"0.2s",dur:"1s",keyTimes:"0;0.2;1",repeatCount:"indefinite",values:"0;1;1"}))]);m.displayName="LoadingIcon";const x=defineComponent({name:"SearchLoading",setup(){const b=Ot(p);return()=>h$3("div",{class:"search-pro-result loading"},[h$3(m),b.value.loading])}}),H=defineAsyncComponent({loader:()=>__vitePreload(()=>import("./SearchResult-56878263.js"),["assets/SearchResult-56878263.js","assets/framework-debd98b7.js"]),loadingComponent:x});var I=defineComponent({name:"SearchModal",setup(){const b=inject(d),$=Ot(p),j=ref(""),U=ref(!1),G=ref();return useEventListener("keydown",W=>{b.value&&W.key==="Escape"&&(b.value=!1)}),onMounted(()=>{U.value=Ct(navigator.userAgent),watch(b,W=>{var K;W&&((K=G.value)==null||K.focus())})}),()=>b.value?h$3("div",{class:"search-pro-modal-wrapper"},[h$3("div",{class:"background",onClick:()=>{b.value=!1,j.value=""}}),h$3("div",{class:"search-pro-modal"},[h$3("div",{class:"search-pro-box"},[h$3(u),h$3("input",{ref:G,type:"text",class:"search-pro-input",placeholder:$.value.placeholder,spellcheck:"false",value:j.value,onInput:({target:W})=>{j.value=W.value}}),h$3("button",{class:"close-button",onClick:()=>{b.value=!1,j.value=""}},$.value.cancel)]),h$3(H,{query:j.value,onClose:()=>{b.value=!1},onUpdateQuery:W=>{j.value=W}}),U.value?null:h$3("div",{class:"search-pro-hints"},[h$3("span",{class:"search-pro-hint"},[h$3("kbd",{innerHTML:'<svg width="15" height="15" aria-label="Enter key" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"></path></g></svg>'}),$.value.select]),h$3("span",{class:"search-pro-hint"},[h$3("kbd",{innerHTML:'<svg width="15" height="15" aria-label="Arrow down" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M7.5 3.5v8M10.5 8.5l-3 3-3-3"></path></g></svg>'}),h$3("kbd",{innerHTML:'<svg width="15" height="15" aria-label="Arrow up" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M7.5 11.5v-8M10.5 6.5l-3-3-3 3"></path></g></svg>'}),$.value.navigate]),h$3("span",{class:"search-pro-hint"},[h$3("kbd",{innerHTML:'<svg width="15" height="15" aria-label="Escape key" role="img"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"><path d="M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"></path></g></svg>'}),$.value.exit])])])]):null}}),N=defineClientConfig({enhance({app:b}){b.component("SearchBox",A)},setup(){S()},rootComponents:[I]});const clientConfigs=[clientConfig0,clientConfig1,clientConfig2,a$2,clientConfig4,clientConfig5,clientConfig6,D$1,clientConfig8,y,clientConfig10,N],pagesRoutes=[["v-8daa1a0e","/",{y:"h",title:"博客主页",i:"home"},["/index.html","/README.md"]],["v-70bc2959","/algorithm/",{a:"xlc520",d:"2022-05-28T00:00:00.000Z",l:"2022年5月28日",c:["algorithm"],g:["algorithm"],e:`<p align="center"> 
  <img src="https://metrics.lecoq.io/xlc520?template=classic&amp;isocalendar=1&amp;languages=1&amp;people=1&amp;activity=1&amp;achievements=1&amp;lines=1&amp;repositories=1&amp;notable=1&amp;introduction=1&amp;pagespeed=1&amp;repositories=100&amp;repositories.batch=100&amp;repositories.forks=false&amp;repositories.affiliations=owner&amp;isocalendar.duration=full-year&amp;languages.limit=8&amp;languages.threshold=0%&amp;languages.colors=github&amp;languages.sections=most-used&amp;languages.indepth=false&amp;languages.analysis.timeout=15&amp;languages.categories=markup%2C programming&amp;languages.recent.categories=markup%2C programming&amp;languages.recent.load=300&amp;languages.recent.days=14&amp;people.limit=24&amp;people.identicons=false&amp;people.identicons.hide=false&amp;people.size=28&amp;people.types=followers%2C following&amp;people.shuffle=false&amp;activity.limit=5&amp;activity.load=300&amp;activity.days=14&amp;activity.visibility=all&amp;activity.timestamps=false&amp;activity.filter=all&amp;achievements.threshold=C&amp;achievements.secrets=true&amp;achievements.display=detailed&amp;achievements.limit=0&amp;notable.from=organization&amp;notable.repositories=false&amp;notable.indepth=false&amp;notable.types=commit&amp;repositories.featured= xlc520%2Fxlc520.github.io&amp;introduction.title=true&amp;pagespeed.url=xlc520.github.io&amp;pagespeed.detailed=false&amp;pagespeed.screenshot=false&amp;config.timezone=Asia%2FShanghai"> 
</p>`,r:{minutes:.56,words:169},y:"a",title:"算法",i:"article"},["/algorithm/index.html","/algorithm/README.md"]],["v-4ca9b1ff","/algorithm/%E4%B8%83%E5%A4%A7%E6%8E%92%E5%BA%8F.html",{a:"xlc520",d:"2022-06-15T00:00:00.000Z",l:"2022年6月15日",c:["algorithm"],g:["algorithm"],e:`<h1> 七大排序（代码+动图演示）</h1>
<h2> 1.排序的概念及其运用</h2>
<h3> 1.1排序的概念</h3>
<blockquote>
<p><strong>排序</strong>：所谓排序，就是使一串记录，按照其中的某个或某些关键字的大小，递增或递减的排列起来的操作。</p>
<p><strong>稳定性</strong>：假定在待排序的记录序列中，存在多个具有相同的关键字的记录，若经过排序，这些记录的相对次 序保持不变，即在原序列中，r[i]=r[j]，且r[i]在r[j]之前，而在排序后的序列中，r[i]仍在r[j]之前，则称这种排 序算法是稳定的；否则称为不稳定的。</p>
<p><strong>稳定性的意义</strong>：在根据多种属性进行排序时会有巨大的意义。比如我们先对学生按照学号进行了排序，再对学生进行了按照成绩进行排序，此时学号和成绩成为了两种决定因素，如果我们在按照成绩进行排序时，所使用的算法是不具有稳定性的，那么在对成绩排序后，之前根据学号进行的排序就没有意义了，此时就会出现相同成绩，但是学号靠后的在前面，反之，如果我们选择的排序具有稳定性，那么成绩相同，学号靠前的应该在前面。</p>
<p><strong>内部排序</strong>：数据元素全部放在内存中的排序。</p>
<p><strong>外部排序</strong>：数据元素太多不能同时放在内存中，根据排序过程的要求不能在内外存之间移动数据的排序。<strong>一般数据是存储在磁盘中的。</strong></p>
</blockquote>`,r:{minutes:32.45,words:9734},y:"a",title:"七大排序（代码+动图演示）",i:"article"},["/algorithm/七大排序.html","/algorithm/%E4%B8%83%E5%A4%A7%E6%8E%92%E5%BA%8F","/algorithm/七大排序.md","/algorithm/%E4%B8%83%E5%A4%A7%E6%8E%92%E5%BA%8F.md"]],["v-6f38dab0","/algorithm/%E5%8D%81%E5%A4%A7%E6%8E%92%E5%BA%8F.html",{a:"xlc520",d:"2022-07-03T00:00:00.000Z",l:"2022年7月3日",c:["algorithm"],g:["algorithm"],e:`<h1> 快速回忆十大排序</h1>
<h2> Java中Arrays.sort()</h2>
<p>通过查看Arrays.sort() 的源码， 可以发现 Arrays.sort() 并不是简单的使用快排，而是根据要排序的长度选择不同的排序。
简单总结：</p>
<table>
<thead>
<tr>
<th>区间长度</th>
<th>所使用的排序算法</th>
</tr>
</thead>
<tbody>
<tr>
<td>小于47</td>
<td>插入排序</td>
</tr>
<tr>
<td>大于47小于286</td>
<td>快排排序</td>
</tr>
<tr>
<td>大于286，数据基本有序</td>
<td>归并排序</td>
</tr>
<tr>
<td>大于286，数据基本无序</td>
<td>快速排序</td>
</tr>
</tbody>
</table>`,r:{minutes:11.58,words:3473},y:"a",title:"快速回忆十大排序",i:"article"},["/algorithm/十大排序.html","/algorithm/%E5%8D%81%E5%A4%A7%E6%8E%92%E5%BA%8F","/algorithm/十大排序.md","/algorithm/%E5%8D%81%E5%A4%A7%E6%8E%92%E5%BA%8F.md"]],["v-3f8bc7c2","/algorithm/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F.html",{a:"xlc520",d:"2022-05-30T00:00:00.000Z",l:"2022年5月30日",c:["algorithm"],g:["algorithm","排序"],e:`<h1> 快速排序</h1>
<h2> 一、简介</h2>
<p>快速排序（Quick sort）是对冒泡排序的一种改进，是非常重要且应用比较广泛的一种高效率排序算法。</p>
<h2> 二、算法思路</h2>
<p>快速排序是通过多次比较和交换来实现排序，在一趟排序中把将要排序的数据分成两个独立的部分，对这两部分进行排序使得其中一部分所有数据比另一部分都要小，然后继续递归排序这两部分，最终实现所有数据有序。</p>
<p>大致步骤如下：</p>
<h3> 第一种 ：</h3>
<ul>
<li>
<p>1.首先设置一个分界值也就是基准值又是也称为监视哨，通过该分界值将数据分割成两部分。</p>
</li>
<li>
<p>2.将大于或等于分界值的数据集中到右边，小于分界值的数据集中到左边。一趟排序过后，左边部分中各个数据元素都小于分界值，而右边部分中各数据元素都大于或等于分界值，且右边部分个数据元素皆大于左边所有数据元素。</p>
</li>
<li>
<p>3.然后，左边和右边的数据可以看成两组不同的部分，重复上述1和2步骤</p>
</li>
<li>
<p>当左右两部分都有序时，整个数据就完成了排序。</p>
</li>
</ul>`,r:{minutes:5.57,words:1670},y:"a",title:"快速排序",i:"article"},["/algorithm/快速排序.html","/algorithm/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F","/algorithm/快速排序.md","/algorithm/%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F.md"]],["v-1b333d5c","/algorithm/%E7%89%9B%E5%AE%A2%E7%BD%91-%E5%8D%8E%E4%B8%BA%E6%9C%BA%E8%AF%95.html",{a:"xlc520",d:"2022-05-31T00:00:00.000Z",l:"2022年5月31日",c:["algorithm"],g:["algorithm - 牛客","华为","算法","排序","转换","查找"],e:`<h1> 牛客网-华为机试</h1>
<h2> <strong>HJ1</strong> <strong>字符串最后一个单词的长度</strong></h2>
<h3> 描述</h3>
<p>计算字符串最后一个单词的长度，单词以空格隔开，字符串长度小于5000。（注：字符串末尾不以空格为结尾）</p>
<h3> 输入描述：</h3>
<p>输入一行，代表要计算的字符串，非空，长度小于5000。</p>
<h3> 输出描述：</h3>
<p>输出一个整数，表示输入字符串最后一个单词的长度。</p>
<h3> 示例1</h3>
<p>输入：</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hello nowcoder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:43.25,words:12976},y:"a",title:"牛客网-华为机试",i:"article"},["/algorithm/牛客网-华为机试.html","/algorithm/%E7%89%9B%E5%AE%A2%E7%BD%91-%E5%8D%8E%E4%B8%BA%E6%9C%BA%E8%AF%95","/algorithm/牛客网-华为机试.md","/algorithm/%E7%89%9B%E5%AE%A2%E7%BD%91-%E5%8D%8E%E4%B8%BA%E6%9C%BA%E8%AF%95.md"]],["v-79c9f96f","/daily/",{a:"xlc520",d:"2022-02-05T00:00:00.000Z",l:"2022年2月5日",c:["daily"],g:["daily"],e:`<p align="center"> 
  <img src="https://metrics.lecoq.io/xlc520?template=classic&amp;isocalendar=1&amp;languages=1&amp;people=1&amp;activity=1&amp;achievements=1&amp;lines=1&amp;repositories=1&amp;notable=1&amp;introduction=1&amp;pagespeed=1&amp;repositories=100&amp;repositories.batch=100&amp;repositories.forks=false&amp;repositories.affiliations=owner&amp;isocalendar.duration=full-year&amp;languages.limit=8&amp;languages.threshold=0%&amp;languages.colors=github&amp;languages.sections=most-used&amp;languages.indepth=false&amp;languages.analysis.timeout=15&amp;languages.categories=markup%2C programming&amp;languages.recent.categories=markup%2C programming&amp;languages.recent.load=300&amp;languages.recent.days=14&amp;people.limit=24&amp;people.identicons=false&amp;people.identicons.hide=false&amp;people.size=28&amp;people.types=followers%2C following&amp;people.shuffle=false&amp;activity.limit=5&amp;activity.load=300&amp;activity.days=14&amp;activity.visibility=all&amp;activity.timestamps=false&amp;activity.filter=all&amp;achievements.threshold=C&amp;achievements.secrets=true&amp;achievements.display=detailed&amp;achievements.limit=0&amp;notable.from=organization&amp;notable.repositories=false&amp;notable.indepth=false&amp;notable.types=commit&amp;repositories.featured= xlc520%2Fxlc520.github.io&amp;introduction.title=true&amp;pagespeed.url=xlc520.github.io&amp;pagespeed.detailed=false&amp;pagespeed.screenshot=false&amp;config.timezone=Asia%2FShanghai"> 
</p>`,r:{minutes:.55,words:165},y:"a",title:"daily",i:"type"},["/daily/index.html","/daily/README.md"]],["v-f5ec58cc","/daily/Share%E5%BC%BA%E5%88%B6%E6%BF%80%E6%B4%BB%E9%AB%98%E7%BA%A7%E7%89%88.html",{a:"xlc520",d:"2022-08-22T00:00:00.000Z",l:"2022年8月22日",c:["daily"],g:["daily"],e:`<h1> Share强制激活高级版</h1>
<p>​</p>
<p>由于Share停更，高级版也无法激活了，所以这里给出强制激活的方法[来自酷安用户屈指西风几时来]</p>
<p>下面是效果图</p>
<figure><img src="https://static.xlc520.ml/blogImage//Screenshot_20220501_120140_com.hengye.share.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<h2> 下载原版Share及小黄鸟抓包软件</h2>`,r:{minutes:1,words:300},y:"a",title:"Share强制激活高级版",i:"date"},["/daily/Share强制激活高级版.html","/daily/Share%E5%BC%BA%E5%88%B6%E6%BF%80%E6%B4%BB%E9%AB%98%E7%BA%A7%E7%89%88","/daily/Share强制激活高级版.md","/daily/Share%E5%BC%BA%E5%88%B6%E6%BF%80%E6%B4%BB%E9%AB%98%E7%BA%A7%E7%89%88.md"]],["v-61dcb9ca","/daily/Thanox%E5%A2%93%E7%A2%91%E6%83%85%E6%99%AF%E6%A8%A1%E5%BC%8F.html",{a:"xlc520",d:"2022-06-21T00:00:00.000Z",l:"2022年6月21日",c:["daily"],g:["daily"],e:`<h1> Thanox墓碑情景模式</h1>
<h2> 最终合并2022.06.06</h2>
<p>分为两个版本，普通版和音频焦点版，根据自己需求选一个</p>
<p>搭配<a href="https://github.com/myflavor/NoANR/releases/" target="_blank" rel="noopener noreferrer">NoANR(点击下载)</a></p>
<p><a href="https://coolstars.lanzoum.com/in97305v6ewj" target="_blank" rel="noopener noreferrer">Thanox3.9.9(点击下载)</a>
<a href="https://github.com/Tornaco/Thanox/releases" target="_blank" rel="noopener noreferrer">github</a></p>`,r:{minutes:4.83,words:1449},y:"a",title:"Thanox 墓碑情景模式",i:"type"},["/daily/Thanox墓碑情景模式.html","/daily/Thanox%E5%A2%93%E7%A2%91%E6%83%85%E6%99%AF%E6%A8%A1%E5%BC%8F","/daily/Thanox墓碑情景模式.md","/daily/Thanox%E5%A2%93%E7%A2%91%E6%83%85%E6%99%AF%E6%A8%A1%E5%BC%8F.md"]],["v-a1d04c6c","/daily/Thanox%E6%83%85%E6%99%AF%E6%A8%A1%E5%BC%8F.html",{a:"xlc520",d:"2022-06-21T00:00:00.000Z",l:"2022年6月21日",c:["daily"],g:["daily"],e:`<h1> Thanox 情景模式</h1>
<p>QQ、微信、TIM、网易云音乐，减少cpu、内存RAM占用 ——thanox情景模式自定义策略方案</p>
<p>QQ优能、微信优能、TIM优能、网易云优能——系列情景模式</p>
<p>之前发帖后一小会儿就删了，结果有情景模式流出，单个情景模式可能有不生效的情况。网易云音乐难以生效就单独发了个网易云的（结合乖巧模式），原本乖巧模式最好搭配后台启动规则使用，情景模式又要搭配乖巧模式使用。情景模式单独生效是意外之喜。</p>
<p>这里只是利用thanox情景模式触发执行命令，应该也可以用Xposed edge、Automate、Tasker、Macrodroid等软件实现。</p>`,r:{minutes:13,words:3899},y:"a",title:"Thanox 情景模式",i:"type"},["/daily/Thanox情景模式.html","/daily/Thanox%E6%83%85%E6%99%AF%E6%A8%A1%E5%BC%8F","/daily/Thanox情景模式.md","/daily/Thanox%E6%83%85%E6%99%AF%E6%A8%A1%E5%BC%8F.md"]],["v-5748b243","/daily/Xposed%20edge%20pro%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B.html",{a:"xlc520",d:"2022-02-06T00:00:00.000Z",l:"2022年2月6日",c:["daily"],g:["daily"],e:`<h1> Xposed edge pro入门教程</h1>
<p>●教程目录
一、软件简介
二、运行环境
三、文件路径
四、偏好设置
五、多重动作详解（核心功能）
六、其他功能详解（基础功能）
七、多重动作的思路步骤分享（实例讲解）
八、教程的测试环境
九、结语
----------------------------------</p>
<p>一、软件简介
●Xposed edge pro 是一款提供手势控制、按键控制以及其他触发器以快速触发用户所需的操作的 Xposed 模块。
●开发者jozein大佬<a href="https://www.coolapk.com/u/jozein" target="_blank" rel="noopener noreferrer">@jozein</a> ，偶尔活跃在酷安。
●下载地址
抗揍云☁️：<a href="https://www.lanzous.com/b00t9c73g" target="_blank" rel="noopener noreferrer">查看链接</a>
Xposed 仓库：<a href="https://repo.xposed.info/module/com.jozein.xedge" target="_blank" rel="noopener noreferrer">查看链接</a>
Google play商店：<a href="https://play.google.com/store/apps/details?id=com.jozein.xedge" target="_blank" rel="noopener noreferrer">查看链接</a>
●优点：神器——简单高效稳定
●不足：缺少布局层次分析/范围分析，自动化动作有一定限制。</p>`,r:{minutes:10.1,words:3030},y:"a",title:"Xposed edge pro入门教程",i:"type"},["/daily/Xposed edge pro入门教程.html","/daily/Xposed%20edge%20pro%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B","/daily/Xposed edge pro入门教程.md","/daily/Xposed%20edge%20pro%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B.md"]],["v-db62373e","/daily/Xposed-edge-pro%20Shell%E5%91%BD%E4%BB%A4-%E6%89%93%E5%BC%80%E5%BE%AE%E4%BF%A1%E5%A5%BD%E5%8F%8B%E8%81%8A%E5%A4%A9%E7%95%8C%E9%9D%A2.html",{a:"xlc520",d:"2022-02-06T00:00:00.000Z",l:"2022年2月6日",c:["daily"],g:["daily"],e:`<h1> Xposed-edge-pro Shell命令-打开微信好友聊天界面</h1>
<figure><img src="http://image.coolapk.com/feed/2020/0205/17/1057386_2d292d14_5559_2018@988x631.png.m.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>本教程框架图</p>
<p>首先你要是不会用软件运行shell命令先看我这个帖子：<a href="https://www.coolapk.com/feed/16017769?shareKey=NWQ4NjU5MzdiZmZjNWUzYThkMDk~&amp;shareUid=1057386&amp;shareFrom=com.coolapk.market_10.0.1" target="_blank" rel="noopener noreferrer">查看链接</a></p>`,r:{minutes:3.09,words:926},y:"a",title:"Xposed-edge-pro Shell命令-打开微信好友聊天界面",i:"type"},["/daily/Xposed-edge-pro Shell命令-打开微信好友聊天界面.html","/daily/Xposed-edge-pro%20Shell%E5%91%BD%E4%BB%A4-%E6%89%93%E5%BC%80%E5%BE%AE%E4%BF%A1%E5%A5%BD%E5%8F%8B%E8%81%8A%E5%A4%A9%E7%95%8C%E9%9D%A2","/daily/Xposed-edge-pro Shell命令-打开微信好友聊天界面.md","/daily/Xposed-edge-pro%20Shell%E5%91%BD%E4%BB%A4-%E6%89%93%E5%BC%80%E5%BE%AE%E4%BF%A1%E5%A5%BD%E5%8F%8B%E8%81%8A%E5%A4%A9%E7%95%8C%E9%9D%A2.md"]],["v-53503e38","/daily/Xposed-edge-pro%20Shell%E5%91%BD%E4%BB%A4.html",{a:"xlc520",d:"2022-02-07T00:00:00.000Z",l:"2022年2月7日",c:["daily"],g:["daily"],e:`<h1> Xposed-edge-pro Shell命令</h1>
<p>一、主要思路：通过xp模块XEdgePro实现手机定时自动解锁、定时自动完成各种指定任务（签到打卡，模拟点击等，理论上只要权限够你能想到的操作都能完成）</p>
<p>二、所需软件（模块）： <a href="http://www.coolapk.com/apk/bin.mt.plus" target="_blank" rel="noopener noreferrer">【MT管理器2】</a> 、 <a href="http://www.coolapk.com/apk/com.dianjiqi" target="_blank" rel="noopener noreferrer">【超级点击器】</a> 、Xposed edge pro（XP模块） <a href="https://www.lanzous.com/i8bojpc" target="_blank" rel="noopener noreferrer">查看链接</a></p>`,r:{minutes:5.29,words:1587},y:"a",title:"Xposed-edge-pro Shell命令",i:"type"},["/daily/Xposed-edge-pro Shell命令.html","/daily/Xposed-edge-pro%20Shell%E5%91%BD%E4%BB%A4","/daily/Xposed-edge-pro Shell命令.md","/daily/Xposed-edge-pro%20Shell%E5%91%BD%E4%BB%A4.md"]],["v-d5ecdaba","/daily/%E4%B8%80%E4%B8%AA%E5%87%8F%E5%B0%91MIUI%E5%8A%A8%E7%94%BB%E6%8E%89%E5%B8%A7%E7%9A%84%E6%96%B9%E6%B3%95.html",{a:"xlc520",d:"2022-06-18T00:00:00.000Z",l:"2022年6月18日",c:["daily"],g:["daily"],e:`<h1> 一个减少MIUI动画掉帧的方法</h1>
<p>分享一个减少MIUI12动画掉帧的方法。</p>
<figure><img src="https://static.xlc520.ml/blogImage/640-16542238760163.jpeg" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure>
<figure><img src="https://static.xlc520.ml/blogImage/640-16542238760162.jpeg" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure>`,r:{minutes:.42,words:126},y:"a",title:"一个减少MIUI动画掉帧的方法",i:"date"},["/daily/一个减少MIUI动画掉帧的方法.html","/daily/%E4%B8%80%E4%B8%AA%E5%87%8F%E5%B0%91MIUI%E5%8A%A8%E7%94%BB%E6%8E%89%E5%B8%A7%E7%9A%84%E6%96%B9%E6%B3%95","/daily/一个减少MIUI动画掉帧的方法.md","/daily/%E4%B8%80%E4%B8%AA%E5%87%8F%E5%B0%91MIUI%E5%8A%A8%E7%94%BB%E6%8E%89%E5%B8%A7%E7%9A%84%E6%96%B9%E6%B3%95.md"]],["v-1df04f08","/daily/%E4%B8%80%E7%99%BE%E5%A4%9A%E5%BD%B1%E8%A7%86VIP%E8%A7%86%E9%A2%91%E8%A7%A3%E6%9E%90%E6%8E%A5%E5%8F%A3.html",{a:"xlc520",d:"2022-03-27T00:00:00.000Z",l:"2022年3月27日",c:["daily"],g:["daily"],e:`<h1> 一百多影视VIP视频解析接口</h1>
<p>一百多影视VIP视频解析接口，接口支持解析优酷、爱奇艺、腾讯、芒果、乐视、搜狐、MP4、M3U8、FLV等等，
需要自测，有可能有失效的</p>
<p><a href="https://2.08bk.com/?url=" target="_blank" rel="noopener noreferrer">https://2.08bk.com/?url=</a></p>
<p><a href="https://www.8090g.cn/jiexi/?url=" target="_blank" rel="noopener noreferrer">https://www.8090g.cn/jiexi/?url=</a></p>`,r:{minutes:2,words:600},y:"a",title:"一百多影视VIP视频解析接口",i:"type"},["/daily/一百多影视VIP视频解析接口.html","/daily/%E4%B8%80%E7%99%BE%E5%A4%9A%E5%BD%B1%E8%A7%86VIP%E8%A7%86%E9%A2%91%E8%A7%A3%E6%9E%90%E6%8E%A5%E5%8F%A3","/daily/一百多影视VIP视频解析接口.md","/daily/%E4%B8%80%E7%99%BE%E5%A4%9A%E5%BD%B1%E8%A7%86VIP%E8%A7%86%E9%A2%91%E8%A7%A3%E6%9E%90%E6%8E%A5%E5%8F%A3.md"]],["v-011c74f0","/daily/%E4%B8%96%E7%95%8C%E5%A4%A7%E5%AD%A6.html",{a:"xlc520",d:"2022-04-13T00:00:00.000Z",l:"2022年4月13日",c:["daily"],g:["daily"],e:`<h1> 世界大学</h1>
<p><code>update: 2022-03-25</code>，<strong>如果此日期前投稿的我没有回复或者未上榜可以重发提醒我。</strong></p>
<!-- | ~~世界零流大学.com~~ | 北京航空航天大学 0223 阿里云 注册，很贵） | www.buaa.edu.cn | 目前已经关闭 | -->
<table>
<thead>
<tr>
<th style="text-align:left">域名</th>
<th style="text-align:left">内容</th>
<th style="text-align:left">解析</th>
<th style="text-align:left">备注</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><s><a href="%E4%B8%96%E7%95%8C%E9%A1%B6%E6%B5%81%E5%A4%A7%E5%AD%A6.com">世界顶流大学.com</a></s></td>
<td style="text-align:left"><s>北京交通大学</s></td>
<td style="text-align:left"><s><a href="http://cas.bjtu.edu.cn" target="_blank" rel="noopener noreferrer">cas.bjtu.edu.cn</a></s></td>
<td style="text-align:left">emm...既然叫顶流，那么给一个顶上的位置 --admin</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--rhqr3ykwbm05aegjh96c.com" target="_blank" rel="noopener noreferrer">世界顶流大学.com</a></td>
<td style="text-align:left">西北工业大学</td>
<td style="text-align:left"><a href="http://www.nwpu.edu.cn" target="_blank" rel="noopener noreferrer">www.nwpu.edu.cn</a></td>
<td style="text-align:left">域名应该被重新注册了，新的指向是西北工业</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--rhq0kz4zzjc7w9a66k2t4b.com" target="_blank" rel="noopener noreferrer">世界负二流大学.com</a></td>
<td style="text-align:left">杭州电子科技大学</td>
<td style="text-align:left"><a href="http://cas.hdu.edu.cn" target="_blank" rel="noopener noreferrer">cas.hdu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gqwbu44czhc7w9a66k2t4b.com" target="_blank" rel="noopener noreferrer">世界负一流大学.com</a></td>
<td style="text-align:left">上海交通大学</td>
<td style="text-align:left"><a href="http://www.sjtu.edu.cn" target="_blank" rel="noopener noreferrer">www.sjtu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gqwbu44czhc7w9a66k.com" target="_blank" rel="noopener noreferrer">世界一流大学.com</a></td>
<td style="text-align:left">北京大学</td>
<td style="text-align:left"><a href="http://www.pku.edu.cn" target="_blank" rel="noopener noreferrer">www.pku.edu.cn</a></td>
<td style="text-align:left">就是它带的头(╯‵□′)╯︵┻━┻</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--ehqza448ezhc7w9a66k.com" target="_blank" rel="noopener noreferrer">世界三流大学.com</a></td>
<td style="text-align:left">清华大学</td>
<td style="text-align:left"><a href="http://www.tsinghua.edu.cn" target="_blank" rel="noopener noreferrer">www.tsinghua.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--rhqr7sozbz7c7w9a66k.com" target="_blank" rel="noopener noreferrer">世界四流大学.com</a></td>
<td style="text-align:left">清华大学信息门户系统</td>
<td style="text-align:left"><a href="http://info.tsinghua.edu.cn" target="_blank" rel="noopener noreferrer">info.tsinghua.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--rhqr3ykwbkyuumh6qm.com" target="_blank" rel="noopener noreferrer">世界末流大学.com</a></td>
<td style="text-align:left">武汉大学</td>
<td style="text-align:left"><a href="http://whu.edu.cn/coremail/index.jsp" target="_blank" rel="noopener noreferrer">whu.edu.cn/coremail/index.jsp</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--spsr25l.xn--rhqr3ykwbkyuumh6qm.com" target="_blank" rel="noopener noreferrer">隔壁.世界末流大学.com</a></td>
<td style="text-align:left">华中科技大学</td>
<td style="text-align:left"><a href="http://www.hust.edu.cn" target="_blank" rel="noopener noreferrer">www.hust.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gqwbu44czhc7w9a66khk5b.com" target="_blank" rel="noopener noreferrer">世界超一流大学.com</a></td>
<td style="text-align:left"><s>上海交通大学</s></td>
<td style="text-align:left"><s><a href="http://www.sjtu.edu.cn" target="_blank" rel="noopener noreferrer">www.sjtu.edu.cn</a></s></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gqwbu44czhc7w9a66khk5b.com" target="_blank" rel="noopener noreferrer">世界超一流大学.com</a></td>
<td style="text-align:left">广西大学</td>
<td style="text-align:left"><a href="http://www.gxu.edu.cn" target="_blank" rel="noopener noreferrer">www.gxu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--rhq0kz4zzjc7w9a66khk5b.com" target="_blank" rel="noopener noreferrer">世界超二流大学.com</a></td>
<td style="text-align:left">复旦大学</td>
<td style="text-align:left"><a href="http://www.fudan.edu.cn" target="_blank" rel="noopener noreferrer">www.fudan.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gqx2tswbz7c7w9a7h0d.com" target="_blank" rel="noopener noreferrer">国际一流大学.com</a></td>
<td style="text-align:left">哈尔滨工业大学</td>
<td style="text-align:left"><a href="http://www.hit.edu.cn" target="_blank" rel="noopener noreferrer">www.hit.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gqt5ykwbm05a.com" target="_blank" rel="noopener noreferrer">一流大学.com</a></td>
<td style="text-align:left">延世大学</td>
<td style="text-align:left"><a href="http://www.yonsei.ac.kr/en_sc/index.jsp" target="_blank" rel="noopener noreferrer">www.yonsei.ac.kr/en_sc/index.jsp</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gqwb826j6vedtl3x0d.top" target="_blank" rel="noopener noreferrer">世界一流高校.top</a></td>
<td style="text-align:left">河南大学</td>
<td style="text-align:left"><a href="http://www.henu.edu.cn" target="_blank" rel="noopener noreferrer">www.henu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gqwbu44c.com" target="_blank" rel="noopener noreferrer">世一大.com</a></td>
<td style="text-align:left">德里印度理工学院</td>
<td style="text-align:left"><a href="http://www.iitd.ac.in" target="_blank" rel="noopener noreferrer">www.iitd.ac.in</a></td>
<td style="text-align:left">山大: ???</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gq14lt3ezrc7w9a.com" target="_blank" rel="noopener noreferrer">双一流大学.com</a></td>
<td style="text-align:left">吉林大学</td>
<td style="text-align:left"><a href="http://www.jlu.edu.cn" target="_blank" rel="noopener noreferrer">www.jlu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gqwbu44czhcc35c3mh.com" target="_blank" rel="noopener noreferrer">世界第一大学.com</a></td>
<td style="text-align:left">湖南安全技术职业学院</td>
<td style="text-align:left"><a href="http://www.hnvist.cn" target="_blank" rel="noopener noreferrer">www.hnvist.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--ceto69k.xn--4gqwbwdw5st06b6ck.com" target="_blank" rel="noopener noreferrer">对面.世界一流初中.com</a></td>
<td style="text-align:left">山东大学</td>
<td style="text-align:left"><a href="http://www.sdu.edu.cn" target="_blank" rel="noopener noreferrer">www.sdu.edu.cn</a></td>
<td style="text-align:left">世一大被抢, 只能山大附中附属大学了</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gqwb715dnmrdgj7l4b.com" target="_blank" rel="noopener noreferrer">世界一流退学.com</a></td>
<td style="text-align:left">中国科学技术大学</td>
<td style="text-align:left"><a href="http://www.ustc.edu.cn" target="_blank" rel="noopener noreferrer">www.ustc.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--114514-or7iu96e4te777c6qs.com" target="_blank" rel="noopener noreferrer">世界114514流大学.com</a></td>
<td style="text-align:left">东南大学</td>
<td style="text-align:left"><a href="http://www.seu.edu.cn" target="_blank" rel="noopener noreferrer">www.seu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--spsr25l.xn--114514-or7iu96e4te777c6qs.com" target="_blank" rel="noopener noreferrer">隔壁.世界114514流大学.com</a></td>
<td style="text-align:left">南京大学</td>
<td style="text-align:left"><a href="http://www.nju.edu.cn" target="_blank" rel="noopener noreferrer">www.nju.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--fhqf051bun6a61s.com" target="_blank" rel="noopener noreferrer">考不上清华.com</a></td>
<td style="text-align:left">北航招生网</td>
<td style="text-align:left"><a href="http://zs.buaa.edu.cn" target="_blank" rel="noopener noreferrer">zs.buaa.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gqwb315bp2wdgjlj0b.com" target="_blank" rel="noopener noreferrer">世界一流赌场.com</a></td>
<td style="text-align:left">北大选课网</td>
<td style="text-align:left"><a href="http://elective.pku.edu.cn" target="_blank" rel="noopener noreferrer">elective.pku.edu.cn</a></td>
<td style="text-align:left">(网页使用了frame, 域名始终为这个)</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://503.xn--4gqwbu44czhc7w9a66k.com" target="_blank" rel="noopener noreferrer">503.世界一流大学.com</a></td>
<td style="text-align:left">北大选课网</td>
<td style="text-align:left"><a href="http://elective.pku.edu.cn" target="_blank" rel="noopener noreferrer">elective.pku.edu.cn</a></td>
<td style="text-align:left">(网页使用了frame, 域名始终为这个)</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--nyuo41g.xn--4gqwbu44czhc7w9a66k.com" target="_blank" rel="noopener noreferrer">掉课.世界一流大学.com</a></td>
<td style="text-align:left">北大选课网</td>
<td style="text-align:left"><a href="http://elective.pku.edu.cn" target="_blank" rel="noopener noreferrer">elective.pku.edu.cn</a></td>
<td style="text-align:left">(网页使用了frame, 域名始终为这个)</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gqta056fzhcs8meqr.com" target="_blank" rel="noopener noreferrer">上海一所大学.com</a></td>
<td style="text-align:left">上海交通大学</td>
<td style="text-align:left"><a href="http://www.sjtu.edu.cn" target="_blank" rel="noopener noreferrer">www.sjtu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gq0do12amjcf2dl82e.com" target="_blank" rel="noopener noreferrer">中国第一大学.com</a></td>
<td style="text-align:left">武汉大学</td>
<td style="text-align:left"><a href="http://www.whu.edu.cn" target="_blank" rel="noopener noreferrer">www.whu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gq993al6b61x.com" target="_blank" rel="noopener noreferrer">一流带学.com</a></td>
<td style="text-align:left">山东大学</td>
<td style="text-align:left"><a href="http://www.sdu.edu.cn" target="_blank" rel="noopener noreferrer">www.sdu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--jor.xn--4gq993al6b61x.com" target="_blank" rel="noopener noreferrer">双.一流带学.com</a></td>
<td style="text-align:left">武汉大学</td>
<td style="text-align:left"><a href="http://www.whu.edu.cn" target="_blank" rel="noopener noreferrer">www.whu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--dlqr1xkwbm05a24ddw3e.com" target="_blank" rel="noopener noreferrer">零点五流大学.com</a></td>
<td style="text-align:left">烟台大学</td>
<td style="text-align:left"><a href="http://www.ytu.edu.cn" target="_blank" rel="noopener noreferrer">www.ytu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--48sx55etgohhk.com" target="_blank" rel="noopener noreferrer">高等退学.com</a></td>
<td style="text-align:left">烟台大学</td>
<td style="text-align:left"><a href="http://www.ytu.edu.cn" target="_blank" rel="noopener noreferrer">www.ytu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gqva746ffa28zl82e.com" target="_blank" rel="noopener noreferrer">天下第一大学.com</a></td>
<td style="text-align:left">太原理工大学官网</td>
<td style="text-align:left"><a href="http://www.tyut.edu.cn" target="_blank" rel="noopener noreferrer">www.tyut.edu.cn</a></td>
<td style="text-align:left">反代</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--pss25c1x4gukk.xn--ses554g/" target="_blank" rel="noopener noreferrer">野鸡大学.网址</a></td>
<td style="text-align:left">北京邮电大学</td>
<td style="text-align:left"><a href="http://www.bupt.edu.cn" target="_blank" rel="noopener noreferrer">www.bupt.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gqwbv98bu7vdgjjy7c.com" target="_blank" rel="noopener noreferrer">世界一流食堂.com</a></td>
<td style="text-align:left">南京航空航天大学</td>
<td style="text-align:left"><a href="http://nuaa.edu.cn" target="_blank" rel="noopener noreferrer">nuaa.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--rhq0kq4wu7vdgjjy7c.com" target="_blank" rel="noopener noreferrer">世界二流食堂.com</a></td>
<td style="text-align:left">南昌大学</td>
<td style="text-align:left"><a href="http://www.ncu.edu.cn" target="_blank" rel="noopener noreferrer">www.ncu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--xhq326a.xn--48st5odb533avu5e.com" target="_blank" rel="noopener noreferrer">山东.拖拉机学院.com</a></td>
<td style="text-align:left">山东理工大学</td>
<td style="text-align:left"><a href="http://www.sdut.edu.cn" target="_blank" rel="noopener noreferrer">www.sdut.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--m6q.xn--48st5odb533avu5e.com" target="_blank" rel="noopener noreferrer">兼.拖拉机学院.com</a></td>
<td style="text-align:left">山东蓝翔技师学院</td>
<td style="text-align:left"><a href="http://www.lxjx.cn" target="_blank" rel="noopener noreferrer">www.lxjx.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4kqq8fmxan1p11u.com" target="_blank" rel="noopener noreferrer">北大二分校.com</a></td>
<td style="text-align:left">北京信息科技大学</td>
<td style="text-align:left"><a href="http://www.bistu.edu.cn" target="_blank" rel="noopener noreferrer">www.bistu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://pku.xn--rhqzbx01dxhz.top" target="_blank" rel="noopener noreferrer">pku.世界中学.top</a></td>
<td style="text-align:left">北京大学</td>
<td style="text-align:left"><a href="https://mp.weixin.qq.com/s/hOJqPnR0wAO8p7q2IipQ8A" target="_blank" rel="noopener noreferrer">未名湖畔 静候君来</a></td>
<td style="text-align:left">未名湖畔 静候君来 (cr. 人大附中)</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://thu.xn--rhqzbx01dxhz.top" target="_blank" rel="noopener noreferrer">thu.世界中学.top</a></td>
<td style="text-align:left">清华大学</td>
<td style="text-align:left"><a href="https://mp.weixin.qq.com/s/Q13uH8DJHW1LOEyeZLpaHw" target="_blank" rel="noopener noreferrer">这里有一份新年祝福</a></td>
<td style="text-align:left">这里有一份新年祝福 | RDFZ驻THU后援团 (cr. 人大附中)</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--spsr25l.xn--rhqzbx01dxhz.top" target="_blank" rel="noopener noreferrer">隔壁.世界中学.top</a></td>
<td style="text-align:left">中国人民大学</td>
<td style="text-align:left"><a href="http://www.ruc.edu.cn" target="_blank" rel="noopener noreferrer">www.ruc.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://gebi.xn--rhqzbx01dxhz.top" target="_blank" rel="noopener noreferrer">gebi.世界中学.top</a></td>
<td style="text-align:left">中国人民大学</td>
<td style="text-align:left"><a href="http://www.ruc.edu.cn" target="_blank" rel="noopener noreferrer">www.ruc.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--6kr28kk1b93rfr9c4pp.com" target="_blank" rel="noopener noreferrer">南方野鸡大学.com</a></td>
<td style="text-align:left">南方科技大学</td>
<td style="text-align:left"><a href="http://sustech.edu.cn" target="_blank" rel="noopener noreferrer">sustech.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gqwb715dqmm7vfrsal46bp97e.com" target="_blank" rel="noopener noreferrer">世界一流魔法学校.com</a></td>
<td style="text-align:left">wizardingworld</td>
<td style="text-align:left"><a href="http://wizardingworld.com" target="_blank" rel="noopener noreferrer">wizardingworld.com</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--0xv28g5vz8fs.com" target="_blank" rel="noopener noreferrer">霍格沃茨.com</a></td>
<td style="text-align:left">上海交通大学</td>
<td style="text-align:left"><a href="http://electsys.sjtu.edu.cn" target="_blank" rel="noopener noreferrer">electsys.sjtu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--djrq2s9zp3pqeyf.xyz" target="_blank" rel="noopener noreferrer">湖北小蓝翔.xyz</a></td>
<td style="text-align:left">华中科技大学</td>
<td style="text-align:left"><a href="http://www.hust.edu.cn" target="_blank" rel="noopener noreferrer">www.hust.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--pss25c1c2cvb5387c.com" target="_blank" rel="noopener noreferrer">宇宙审计大学.com</a></td>
<td style="text-align:left">南京审计大学</td>
<td style="text-align:left"><a href="http://www.nau.edu.cn" target="_blank" rel="noopener noreferrer">www.nau.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--rhqt1mivscxfd8k17o.com" target="_blank" rel="noopener noreferrer">世界末流网吧.com</a></td>
<td style="text-align:left">浙江大学</td>
<td style="text-align:left"><a href="http://www.zju.edu.cn" target="_blank" rel="noopener noreferrer">www.zju.edu.cn</a></td>
<td style="text-align:left">校园网只要不改善，这域名我还就一直续下去了</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gqwb23au3czxh5d560bpteu96awtn60u.xn--ses554g/" target="_blank" rel="noopener noreferrer">世界人口假期双一流大学.网址</a></td>
<td style="text-align:left">郑州大学</td>
<td style="text-align:left"><a href="http://www.zzu.edu.cn" target="_blank" rel="noopener noreferrer">www.zzu.edu.cn</a></td>
<td style="text-align:left">河大和重大都是我的！我就是人口假期双一流！</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--985-129fs2y.com" target="_blank" rel="noopener noreferrer">末流985.com</a></td>
<td style="text-align:left">四川大学</td>
<td style="text-align:left"><a href="http://www.scu.edu.cn" target="_blank" rel="noopener noreferrer">www.scu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--ihq64fx9b0uif6ctx2b.com" target="_blank" rel="noopener noreferrer">双不入流大学.com</a></td>
<td style="text-align:left">上海大学</td>
<td style="text-align:left"><a href="http://www.shu.edu.cn" target="_blank" rel="noopener noreferrer">www.shu.edu.cn</a></td>
<td style="text-align:left">为什么0202年了我校还不支持HTTPS，我陷入了深深的思考之中</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--rhq2ut8vzjcite8s2cc7gut8b.xyz" target="_blank" rel="noopener noreferrer">世界软件工程大学.xyz</a></td>
<td style="text-align:left">GitHub</td>
<td style="text-align:left"><a href="http://github.com" target="_blank" rel="noopener noreferrer">github.com</a></td>
<td style="text-align:left">我说它是世界软件工程大学，谁赞成？谁反对？</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--bbr42upwg238c.xn--rhq2ut8vzjcite8s2cc7gut8b.xyz" target="_blank" rel="noopener noreferrer">函授学院.世界软件工程大学.xyz</a></td>
<td style="text-align:left">StackOverflow</td>
<td style="text-align:left"><a href="http://stackoverflow.com" target="_blank" rel="noopener noreferrer">stackoverflow.com</a></td>
<td style="text-align:left">我反对！(￣ε(#￣)☆╰╮o(￣皿￣///)</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gq14lt3ezrc6w9a.com" target="_blank" rel="noopener noreferrer">双流一大学.com</a></td>
<td style="text-align:left">四川大学</td>
<td style="text-align:left"><a href="http://www.scu.edu.cn" target="_blank" rel="noopener noreferrer">www.scu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--ohq31kr9zdpbcy0a.com" target="_blank" rel="noopener noreferrer">专科南波湾.com</a></td>
<td style="text-align:left">华南理工大学</td>
<td style="text-align:left"><a href="http://www.scut.edu.cn/new" target="_blank" rel="noopener noreferrer">www.scut.edu.cn/new</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--rhqvl43zzjcs8w34ti3b.club" target="_blank" rel="noopener noreferrer">世界五百本大学.club</a></td>
<td style="text-align:left">南京大学</td>
<td style="text-align:left"><a href="http://www.nju.edu.cn" target="_blank" rel="noopener noreferrer">www.nju.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--udsw05j.xn--rhqvl43zzjcs8w34ti3b.club" target="_blank" rel="noopener noreferrer">土豆.世界五百本大学.club</a></td>
<td style="text-align:left">南京大学教务系统</td>
<td style="text-align:left"><a href="http://elite.nju.edu.cn/jiaowu" target="_blank" rel="noopener noreferrer">elite.nju.edu.cn/jiaowu</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gqwbwd7st4k9ucz41fhllxxck0xr54f.wtf" target="_blank" rel="noopener noreferrer">世界一流军事化管理<span style="font-weight: 600;">高中</span>.wtf</a></td>
<td style="text-align:left">东南大学</td>
<td style="text-align:left"><a href="http://www.seu.edu.cn" target="_blank" rel="noopener noreferrer">www.seu.edu.cn</a></td>
<td style="text-align:left">写作大学, 读作高中.jpg</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--pss25chv670o.xn--fiqa63b16ymvfp52a.com" target="_blank" rel="noopener noreferrer">附属大学.中国人民中学.com</a></td>
<td style="text-align:left">中国人民大学</td>
<td style="text-align:left"><a href="http://www.ruc.edu.cn" target="_blank" rel="noopener noreferrer">www.ruc.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gqt5yrzd.com" target="_blank" rel="noopener noreferrer">市一大.com</a></td>
<td style="text-align:left">浙江大学</td>
<td style="text-align:left"><a href="http://www.zju.edu.cn" target="_blank" rel="noopener noreferrer">www.zju.edu.cn</a></td>
<td style="text-align:left">市一大 = 杭州市一流大学</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--rhqr7sozbz7cc35ciz6b.com" target="_blank" rel="noopener noreferrer">世界四非大学.com</a></td>
<td style="text-align:left">南京工业大学</td>
<td style="text-align:left"><a href="http://www.njtech.edu.cn" target="_blank" rel="noopener noreferrer">www.njtech.edu.cn</a></td>
<td style="text-align:left">我来凑个热闹，嘤嘤嘤 ipv6✔️ CDN✔️ 显示中文域名✔️ https❌</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--fiqt5mw7bm3cf2d003f.com" target="_blank" rel="noopener noreferrer">中国周考大学.com</a></td>
<td style="text-align:left">北京交通大学</td>
<td style="text-align:left"><a href="http://jwc.bjtu.edu.cn" target="_blank" rel="noopener noreferrer">jwc.bjtu.edu.cn</a></td>
<td style="text-align:left">（我们学校考试多 人称北下关周考大学（逃</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--rhqr3ykwbm05aegj613c.com" target="_blank" rel="noopener noreferrer">世界限流大学.com</a></td>
<td style="text-align:left">中山大学</td>
<td style="text-align:left"><a href="http://www.sysu.edu.cn" target="_blank" rel="noopener noreferrer">www.sysu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--joro8jk2bq4a812r.com" target="_blank" rel="noopener noreferrer">双鸭山大学.com</a></td>
<td style="text-align:left">中山大学</td>
<td style="text-align:left"><a href="http://www.sysu.edu.cn" target="_blank" rel="noopener noreferrer">www.sysu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gqt5ykwbydsd540k.com" target="_blank" rel="noopener noreferrer">宇宙一流大学.com</a></td>
<td style="text-align:left">对外经济贸易大学</td>
<td style="text-align:left"><a href="http://www.uibe.edu.cn" target="_blank" rel="noopener noreferrer">www.uibe.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--fiqs8srwbz7c.best" target="_blank" rel="noopener noreferrer">中国大学.best</a></td>
<td style="text-align:left">清华大学</td>
<td style="text-align:left"><a href="http://www.tsinghua.edu.cn" target="_blank" rel="noopener noreferrer">www.tsinghua.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--spsr25l.xn--fiqs8srwbz7c.best" target="_blank" rel="noopener noreferrer">隔壁.中国大学.best</a></td>
<td style="text-align:left">北京大学</td>
<td style="text-align:left"><a href="http://www.pku.edu.cn" target="_blank" rel="noopener noreferrer">www.pku.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--dkr91ks2cc68f.xn--1lqq6d54b83f28k5za061i.top" target="_blank" rel="noopener noreferrer">隔壁小区.南京理工幼儿园.top</a></td>
<td style="text-align:left">南京理工大学</td>
<td style="text-align:left"><a href="http://www.njust.edu.cn" target="_blank" rel="noopener noreferrer">www.njust.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--joryb21n6ru5nx.com" target="_blank" rel="noopener noreferrer">双口斯坦福.com</a></td>
<td style="text-align:left">河北工业大学</td>
<td style="text-align:left"><a href="http://www.hebut.edu.cn" target="_blank" rel="noopener noreferrer">www.hebut.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--rhq02ls3ezrcc35ciz6b.xyz" target="_blank" rel="noopener noreferrer">世界双非大学.xyz</a></td>
<td style="text-align:left">中国科学院大学</td>
<td style="text-align:left"><a href="http://www.ucas.ac.cn/site/11" target="_blank" rel="noopener noreferrer">www.ucas.ac.cn/site/11</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--ghqx1fpeo8dn9hxtn.xyz" target="_blank" rel="noopener noreferrer">北下关幼儿园.xyz</a></td>
<td style="text-align:left">北京交通大学</td>
<td style="text-align:left"><a href="http://bjtu.edu.cn" target="_blank" rel="noopener noreferrer">bjtu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://rejectedby.stanford.edu" target="_blank" rel="noopener noreferrer">rejectedby.stanford.edu</a></td>
<td style="text-align:left">University of California, Berkeley(加州大学伯克利分校)</td>
<td style="text-align:left"><a href="http://www.berkeley.edu" target="_blank" rel="noopener noreferrer">www.berkeley.edu</a></td>
<td style="text-align:left">官&nbsp;&nbsp;&nbsp;方&nbsp;&nbsp;&nbsp;玩&nbsp;&nbsp;&nbsp;梗</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--fiqp2fwta79nh0eo5aor96r044i.cn" target="_blank" rel="noopener noreferrer">安全局岗前培训中心.cn</a></td>
<td style="text-align:left">国际关系学院</td>
<td style="text-align:left"><a href="http://www.uir.cn" target="_blank" rel="noopener noreferrer">www.uir.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--fhqt7fqummvao35asryjxorh6b.xyz" target="_blank" rel="noopener noreferrer">上方山皇家养老院.xyz</a></td>
<td style="text-align:left">苏州大学文正学院</td>
<td style="text-align:left"><a href="http://www.sdwz.cn" target="_blank" rel="noopener noreferrer">www.sdwz.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--rhq57l2yeztcc35cuk9b.com" target="_blank" rel="noopener noreferrer">世界吃饭大学.com</a></td>
<td style="text-align:left">南京师范大学</td>
<td style="text-align:left"><a href="http://www.njnu.edu.cn" target="_blank" rel="noopener noreferrer">www.njnu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gqq9futc48dca3135a3tpmr9c.top" target="_blank" rel="noopener noreferrer">国内一流国际知名.top</a></td>
<td style="text-align:left">西安电子科技大学</td>
<td style="text-align:left"><a href="http://www.xidian.edu.cn" target="_blank" rel="noopener noreferrer">www.xidian.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gq8n83yzjc05h6w8apcle21a.xyz" target="_blank" rel="noopener noreferrer">德玛西亚第一大学.xyz</a></td>
<td style="text-align:left">重庆师范大学涉外商贸学院</td>
<td style="text-align:left"><a href="http://www.swsm.edu.cn" target="_blank" rel="noopener noreferrer">www.swsm.edu.cn</a></td>
<td style="text-align:left">资深玩家</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gqwb61o523b0kd93i.top" target="_blank" rel="noopener noreferrer">世界一流军火.top</a></td>
<td style="text-align:left">南京理工大学校史馆</td>
<td style="text-align:left"><a href="http://xsg.njust.edu.cn" target="_blank" rel="noopener noreferrer">xsg.njust.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--pss25c24d9zgito.xn--ses554g" target="_blank" rel="noopener noreferrer">海底捞大学.网址</a></td>
<td style="text-align:left">中国传媒大学</td>
<td style="text-align:left"><a href="http://www.cuc.edu.cn" target="_blank" rel="noopener noreferrer">www.cuc.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--spsr25l.xn--pss25c24d9zgito.xn--ses554g" target="_blank" rel="noopener noreferrer">隔壁.海底捞大学.网址</a></td>
<td style="text-align:left">北京第二外国语学院</td>
<td style="text-align:left"><a href="http://www.bisu.edu.cn" target="_blank" rel="noopener noreferrer">www.bisu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--ohqw3y.xn--4gqwbwdr88ndoi3x0d.top" target="_blank" rel="noopener noreferrer">大专.世界一流高中.top</a></td>
<td style="text-align:left">华南师范大学</td>
<td style="text-align:left"><a href="http://www.scnu.edu.cn" target="_blank" rel="noopener noreferrer">www.scnu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--fiqr7g6sfssv.xn--vcsx75g.xn--djry4lk1bvu7f.top" target="_blank" rel="noopener noreferrer">中国分校.美国.西北大学.top</a></td>
<td style="text-align:left">西北大学（中国）</td>
<td style="text-align:left"><a href="http://www.nwu.edu.cn" target="_blank" rel="noopener noreferrer">www.nwu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--ihq99fvviznc6x5cli2a.com" target="_blank" rel="noopener noreferrer">不用军训大学.com</a></td>
<td style="text-align:left">暨南大学</td>
<td style="text-align:left"><a href="http://www.jnu.edu.cn" target="_blank" rel="noopener noreferrer">www.jnu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--54q79vhk8bsda.com" target="_blank" rel="noopener noreferrer">光速退学.com</a></td>
<td style="text-align:left">中国石油大学（北京）</td>
<td style="text-align:left"><a href="http://www.cup.edu.cn" target="_blank" rel="noopener noreferrer">www.cup.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--spsr25l.xn--54q79vhk8bsda.com" target="_blank" rel="noopener noreferrer">隔壁.光速退学.com</a></td>
<td style="text-align:left">中国石油大学（华东）</td>
<td style="text-align:left"><a href="http://www.upc.edu.cn" target="_blank" rel="noopener noreferrer">www.upc.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--wjq282aiocwvf4vih8ulq9c.top" target="_blank" rel="noopener noreferrer">韩庄乡男子技校.top</a></td>
<td style="text-align:left">华北电力大学（保定）</td>
<td style="text-align:left"><a href="http://net.ncepu.edu.cn" target="_blank" rel="noopener noreferrer">net.ncepu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--rhqt5terbz9c297aqeam82d.com" target="_blank" rel="noopener noreferrer">世界地沟油大学.com</a></td>
<td style="text-align:left">中国石油大学（华东）</td>
<td style="text-align:left"><a href="http://www.upc.edu.cn" target="_blank" rel="noopener noreferrer">www.upc.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--w1y.xn--rhqt5terbz9c297aqeam82d.com" target="_blank" rel="noopener noreferrer">真.世界地沟油大学.com</a></td>
<td style="text-align:left">中国石油大学（北京）</td>
<td style="text-align:left"><a href="http://www.cup.edu.cn" target="_blank" rel="noopener noreferrer">www.cup.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--rhq48lnxc219b9yco75b.xyz/" target="_blank" rel="noopener noreferrer">世界知名土豆.xyz</a></td>
<td style="text-align:left">华北理工大学教务系统</td>
<td style="text-align:left"><a href="http://xjw1.ncst.edu.cn" target="_blank" rel="noopener noreferrer">xjw1.ncst.edu.cn</a></td>
<td style="text-align:left">欢迎大家来曹妃甸吃土豆</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gqwbw9zpmxr7o3ji.com" target="_blank" rel="noopener noreferrer">世界第一名校.com</a></td>
<td style="text-align:left">哈尔滨体育学院</td>
<td style="text-align:left"><a href="http://www.hrbipe.edu.cn" target="_blank" rel="noopener noreferrer">www.hrbipe.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--eyqa90sjgm1yurdlu4b5bp.xyz" target="_blank" rel="noopener noreferrer">华北停水停电大学.xyz</a></td>
<td style="text-align:left">华北电力大学(北京)</td>
<td style="text-align:left"><a href="http://mail.ncepu.edu.cn" target="_blank" rel="noopener noreferrer">mail.ncepu.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="https://xn--sxq154gprk.xn--jpq85vba6c12p.com" target="_blank" rel="noopener noreferrer">虚假的.多伦多大学.com</a></td>
<td style="text-align:left">University Of Toronto Mississauga</td>
<td style="text-align:left"><a href="http://www.utm.utoronto.ca" target="_blank" rel="noopener noreferrer">www.utm.utoronto.ca</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--7mqr3f236anhx.top" target="_blank" rel="noopener noreferrer">求仕创薪.top</a></td>
<td style="text-align:left">浙江大学</td>
<td style="text-align:left"><a href="http://www.zju.edu.cn" target="_blank" rel="noopener noreferrer">www.zju.edu.cn</a></td>
<td style="text-align:left">求仕创薪.top</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gqwbu44c.com" target="_blank" rel="noopener noreferrer">世一大.com</a></td>
<td style="text-align:left">安徽大学</td>
<td style="text-align:left"><a href="http://www.ahu.edu.cn" target="_blank" rel="noopener noreferrer">www.ahu.edu.cn</a></td>
<td style="text-align:left">安徽说唱大专</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gqwb715d77cs5y66k.com" target="_blank" rel="noopener noreferrer">世界一流学府.com</a></td>
<td style="text-align:left">山东科技大学</td>
<td style="text-align:left"><a href="http://www.sdust.edu.cn" target="_blank" rel="noopener noreferrer">www.sdust.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--4gqwbu44czhc7w9a66k.love" target="_blank" rel="noopener noreferrer">世界一流大学.love</a></td>
<td style="text-align:left">沈阳师范大学</td>
<td style="text-align:left"><a href="http://www.synu.edu.cn" target="_blank" rel="noopener noreferrer">www.synu.edu.cn</a></td>
<td style="text-align:left">充满爱的世界一流大学</td>
</tr>
<tr>
<td style="text-align:left"><a href="http://xn--rhqr3ykwbxv0cf1jvw1b.com" target="_blank" rel="noopener noreferrer">世界顶级大学.com</a></td>
<td style="text-align:left">重庆建筑工程职业学院</td>
<td style="text-align:left"><a href="http://www.cqjzc.edu.cn" target="_blank" rel="noopener noreferrer">www.cqjzc.edu.cn</a></td>
<td style="text-align:left"></td>
</tr>
</tbody>
</table>`,r:{minutes:7.45,words:2235},y:"a",title:"世界大学",i:"date"},["/daily/世界大学.html","/daily/%E4%B8%96%E7%95%8C%E5%A4%A7%E5%AD%A6","/daily/世界大学.md","/daily/%E4%B8%96%E7%95%8C%E5%A4%A7%E5%AD%A6.md"]],["v-309be644","/daily/%E5%85%A8%E7%90%83%E5%90%84%E5%A4%A7%E5%85%8D%E8%B4%B9%E7%94%B5%E5%AD%90%E5%9B%BE%E4%B9%A6%E9%A6%86%E6%B1%87%E9%9B%86.html",{a:"xlc520",d:"2022-02-08T00:00:00.000Z",l:"2022年2月8日",c:["daily"],g:["daily"],e:`<h1> 全球各大免费电子图书馆汇集</h1>
<p>【世界数字图书馆】</p>
<p>官网：<a href="http://www.wdl.org/zh/" target="_blank" rel="noopener noreferrer">www.wdl.org/zh/</a></p>
<p>世界数字图书馆由联合国教科文组织同32个公共团体合作建立，由全球规模最大的图书馆美国国会图书馆主导开发。</p>
<p>世界数字图书馆(WDL)让世界各地的读者可以在同一个网站上以各种不同的方式发现、学习和欣赏世界各地的文化珍宝。这些珍贵文物包括，但不限于手稿、地图、珍本书籍、乐谱、录音、电影、印刷品、照片和建筑图纸。 也就是说世界数字图书馆馆藏包罗万象，从图书到各种档案都有。</p>`,r:{minutes:5.91,words:1774},y:"a",title:"全球各大免费电子图书馆汇集",i:"type"},["/daily/全球各大免费电子图书馆汇集.html","/daily/%E5%85%A8%E7%90%83%E5%90%84%E5%A4%A7%E5%85%8D%E8%B4%B9%E7%94%B5%E5%AD%90%E5%9B%BE%E4%B9%A6%E9%A6%86%E6%B1%87%E9%9B%86","/daily/全球各大免费电子图书馆汇集.md","/daily/%E5%85%A8%E7%90%83%E5%90%84%E5%A4%A7%E5%85%8D%E8%B4%B9%E7%94%B5%E5%AD%90%E5%9B%BE%E4%B9%A6%E9%A6%86%E6%B1%87%E9%9B%86.md"]],["v-67b6f947","/daily/%E5%85%B3%E9%97%AD%E5%BE%AE%E4%BF%A1%E5%B9%BF%E5%91%8A.html",{a:"xlc520",d:"2022-02-14T00:00:00.000Z",l:"2022年2月14日",c:["daily"],g:["daily"],e:`<h1> <strong>关闭微信朋友圈广告和公众号推荐流</strong></h1>
<p>在开始先说明一下，要使用下面介绍的调式功能，大家的手机需要有root权限，如没有的话，大家就看看就好，看看是如何操作和玩法的。</p>
<h2> 1、</h2>
<p>准备工作：你的手机需root、下载安装创建快捷方式APP（酷安搜索就有）</p>
<h2> 2、</h2>
<p>打开创建快捷方式APP之后，大家点击搜索框，直接搜微信，即可进入活动界面。</p>
<figure><img src="http://image.coolapk.com/feed/2021/1202/14/2516961_85b74667_6273_6993_713@1424x1064.jpeg.m.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,r:{minutes:1.55,words:466},y:"a",title:"关闭微信朋友圈广告和公众号推荐流",i:"type"},["/daily/关闭微信广告.html","/daily/%E5%85%B3%E9%97%AD%E5%BE%AE%E4%BF%A1%E5%B9%BF%E5%91%8A","/daily/关闭微信广告.md","/daily/%E5%85%B3%E9%97%AD%E5%BE%AE%E4%BF%A1%E5%B9%BF%E5%91%8A.md"]],["v-093e04ac","/daily/%E5%8E%BB%E9%99%A4MIUI10%E7%A7%92%E7%9A%84%E8%AD%A6%E5%91%8A.html",{a:"xlc520",d:"2022-02-17T00:00:00.000Z",l:"2022年2月17日",c:["daily"],g:["daily"],e:`<h1> 去除MIUI10秒的警告</h1>
<p>打开Thanox，找到手机管家，选择活动管理，搜索这个活动
com.miui.permcenter.privacymanager.SpecialPermissionInterceptActivity
把这个活动禁用，立即生效
以后无障碍/安装未知应用/勿扰等都不会弹出警告了</p>
<figure><img src="http://image.coolapk.com/feed/2022/0108/07/2064506_f18ce68b_8655_7643_90@324x720.gif" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,r:{minutes:.38,words:113},y:"a",title:"去除MIUI10秒的警告",i:"type"},["/daily/去除MIUI10秒的警告.html","/daily/%E5%8E%BB%E9%99%A4MIUI10%E7%A7%92%E7%9A%84%E8%AD%A6%E5%91%8A","/daily/去除MIUI10秒的警告.md","/daily/%E5%8E%BB%E9%99%A4MIUI10%E7%A7%92%E7%9A%84%E8%AD%A6%E5%91%8A.md"]],["v-0fe915da","/daily/%E5%B7%A5%E7%A8%8B%E6%A8%A1%E5%BC%8F%E7%A0%81(%E6%8B%A8%E5%8F%B7%E9%94%AE%E7%9B%98).html",{a:"xlc520",d:"2022-04-17T00:00:00.000Z",l:"2022年4月17日",c:["daily"],g:["daily"],e:`<h1> 工程模式码(拨号键盘)</h1>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#*#*#8667#*#*开启VoNR选项
*#*#86583#*#*开启VoLTE选项
*#*#869434#*#*开启VoWiFi选项
*#*#726633#*#*开启5G网络模式选择
*#*#4636#*#*手机信息锁网
*#*#3646633#*#*工程模式锁频段
*#*#64663#*#*手机功能测试
*#*#6485#*#*充电与电池相关的信息
*#*#76937#*#*神隐模式
*#*#37263#*#*帧率显示
*#06#移动识别码 IMEI号
*#*#284#*#*抓取bug日志
*#*#3223#*#*开启dc调光选项
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.46,words:139},y:"a",title:"工程模式码(拨号键盘)",i:"date"},["/daily/工程模式码(拨号键盘).html","/daily/%E5%B7%A5%E7%A8%8B%E6%A8%A1%E5%BC%8F%E7%A0%81(%E6%8B%A8%E5%8F%B7%E9%94%AE%E7%9B%98)","/daily/工程模式码(拨号键盘).md","/daily/%E5%B7%A5%E7%A8%8B%E6%A8%A1%E5%BC%8F%E7%A0%81(%E6%8B%A8%E5%8F%B7%E9%94%AE%E7%9B%98).md"]],["v-5e2533a8","/daily/%E5%B9%BF%E5%91%8A%E6%8B%A6%E6%88%AA%E8%A7%84%E5%88%99%E6%95%B4%E7%90%86.html",{a:"xlc520",d:"2022-02-05T00:00:00.000Z",l:"2022年2月5日",c:["daily"],g:["daily"],e:`<h1> 广告拦截规则整理</h1>
<p>复制下面规则链接导入到浏览器规则文件</p>
<p>AdRules <a href="https://cats-team.coding.net/p/adguard/d/AdRules/git/raw/main/adblock.txt" target="_blank" rel="noopener noreferrer">查看链接</a> (该规则合并自My AdFilters（for PC）、EdentwCustom、adgk、ClearUrl等，并补充了一些规则)</p>
<p>abpmerge <a href="https://damengzhu.coding.net/p/banad/d/abpmerge/git/raw/main/abpmerge.txt" target="_blank" rel="noopener noreferrer">查看链接</a> (合并自AdFilters，adgk，jiekouAD)</p>`,r:{minutes:.98,words:295},y:"a",title:"广告拦截规则整理",i:"type"},["/daily/广告拦截规则整理.html","/daily/%E5%B9%BF%E5%91%8A%E6%8B%A6%E6%88%AA%E8%A7%84%E5%88%99%E6%95%B4%E7%90%86","/daily/广告拦截规则整理.md","/daily/%E5%B9%BF%E5%91%8A%E6%8B%A6%E6%88%AA%E8%A7%84%E5%88%99%E6%95%B4%E7%90%86.md"]],["v-4edf72d6","/daily/%E5%BD%B1%E8%A7%86%E5%A4%A7%E5%85%A8.html",{a:"xlc520",d:"2022-04-06T00:00:00.000Z",l:"2022年4月6日",c:["daily"],g:["daily"],e:`<h1> 影视大全</h1>
<h2> 0.特别推荐</h2>
<blockquote>
<h4> ★★★★看视频</h4>
</blockquote>
<ul>
<li>
<p><a href="https://www.idianshijia.com/" :target="_blank" target="_blank" rel="noopener noreferrer">电视家</a></p>
</li>
<li>
<p><a href="https://sharerw.lanzoui.com/b0aevufxe" :target="_blank" target="_blank" rel="noopener noreferrer">DIYP</a> - 需与直播源共同食用 <code>https://tvsee.github.io/diyp/tv.txt\`\`https://t.tansuo.tv/jxtv.txt</code></p>
</li>
<li>
<p><a href="https://teyonds.lanzoux.com/tytv" :target="_blank" target="_blank" rel="noopener noreferrer">太阳直播</a>★</p>
</li>
<li>
<p><a href="https://teyonds.lanzouw.com/i6Sr3zzmqkd" :target="_blank" target="_blank" rel="noopener noreferrer">超级iTV</a></p>
</li>
<li>
<p><a href="http://www.iptv16.com/downloads/" :target="_blank" target="_blank" rel="noopener noreferrer">GoTV（收费）</a></p>
</li>
<li>
<p><a href="https://fantuan.tv/APP/" :target="_blank" target="_blank" rel="noopener noreferrer">饭团影院</a></p>
</li>
<li>
<p><a href="https://www.nbyy.tv" :target="_blank" target="_blank" rel="noopener noreferrer">泥巴影院（梯子）</a></p>
</li>
<li>
<p><a href="http://www.293vod.com/zy.html" :target="_blank" target="_blank" rel="noopener noreferrer">293影院（收费）</a></p>
</li>
<li>
<p><a href="https://tansuo.lanzoub.com/b01592xri" :target="_blank" target="_blank" rel="noopener noreferrer">猫影视TV</a> - 接口地址在本页面最底端★</p>
</li>
<li>
<p><a href="https://teyonds.lanzouw.com/itX9C025l3ob" :target="_blank" target="_blank" rel="noopener noreferrer">BiuBiu播放器</a> - 全局接口<code>http://tyzx.weetai.cn/bbtv/1.json</code>★</p>
</li>
<li>
<p><strong>深蓝影库（收费）</strong> - 注册限制，需要的去<a href="https://t.me/tansuo" :target="_blank" target="_blank" rel="noopener noreferrer">TG群找我</a></p>
</li>
</ul>`,r:{minutes:10.74,words:3222},y:"a",title:"影视大全",i:"date"},["/daily/影视大全.html","/daily/%E5%BD%B1%E8%A7%86%E5%A4%A7%E5%85%A8","/daily/影视大全.md","/daily/%E5%BD%B1%E8%A7%86%E5%A4%A7%E5%85%A8.md"]],["v-82076524","/daily/%E5%BD%B1%E8%A7%86%E8%BD%AF%E4%BB%B6TV-APK.html",{a:"xlc520",d:"2022-03-18T00:00:00.000Z",l:"2022年3月18日",c:["daily"],g:["daily"],e:`<h1> 影视软件TV-APK</h1>
<h3> 米来影视</h3>
<p><a href="https://milaitv.cc/" target="_blank" rel="noopener noreferrer">https://milaitv.cc/</a></p>
<p><a href="https://kanhu.lanzoux.com/b00v9k8ed" target="_blank" rel="noopener noreferrer">https://kanhu.lanzoux.com/b00v9k8ed</a></p>
`,r:{minutes:.17,words:51},y:"a",title:"影视软件TV-APK",i:"type"},["/daily/影视软件TV-APK.html","/daily/%E5%BD%B1%E8%A7%86%E8%BD%AF%E4%BB%B6TV-APK","/daily/影视软件TV-APK.md","/daily/%E5%BD%B1%E8%A7%86%E8%BD%AF%E4%BB%B6TV-APK.md"]],["v-b1e58032","/daily/%E6%80%8E%E4%B9%88%E4%BB%8E%E5%AE%A2%E8%A7%82%E8%A7%92%E5%BA%A6%E7%9C%8B%E5%BE%85%E5%A4%A7%E5%AD%A6%E5%B0%81%E6%A0%A1%E8%A1%8C%E4%B8%BA.html",{a:"xlc520",d:"2022-04-12T00:00:00.000Z",l:"2022年4月12日",c:["daily"],g:["daily"],e:`<h1> 怎么从客观角度看待大学封校行为？</h1>
<p>一天下午，记者采访一封校大学的领导。</p>
<p><strong>记者: 当前本市并无病例，请问为什么封闭你们大学呢？是怕担责或是刺激学校消费吗？</strong>**</p>
<p>领导: 怎么可能？我们这么做都是为了学生的安全着想。<strong>这时一个老师开车直接从记者旁边进入学校，一边和领导打招呼，一边和后座的亲戚有说有笑，门口保安视若无睹。</strong></p>
<p>记者: 那为什么教职工可以随意进出呢？你们这算不算懒政？</p>
<p>领导: 经学校领导研究调查，发现除了学生用肺呼吸，其余学校人员全部用腮呼吸，我们这是利用新冠病毒的传播特征来贯彻精准防控的政策。</p>`,r:{minutes:8.38,words:2513},y:"a",title:"怎么从客观角度看待大学封校行为？",i:"date"},["/daily/怎么从客观角度看待大学封校行为.html","/daily/%E6%80%8E%E4%B9%88%E4%BB%8E%E5%AE%A2%E8%A7%82%E8%A7%92%E5%BA%A6%E7%9C%8B%E5%BE%85%E5%A4%A7%E5%AD%A6%E5%B0%81%E6%A0%A1%E8%A1%8C%E4%B8%BA","/daily/怎么从客观角度看待大学封校行为.md","/daily/%E6%80%8E%E4%B9%88%E4%BB%8E%E5%AE%A2%E8%A7%82%E8%A7%92%E5%BA%A6%E7%9C%8B%E5%BE%85%E5%A4%A7%E5%AD%A6%E5%B0%81%E6%A0%A1%E8%A1%8C%E4%B8%BA.md"]],["v-7cb79b7a","/daily/%E6%91%A9%E6%89%98%E7%BD%97%E6%8B%89X40X30S30Pro%E5%85%A8%E6%9C%BA%E5%9E%8B%E8%A7%A3%E9%94%81BL.html",{a:"xlc520",d:"2023-01-02T00:00:00.000Z",l:"2023年1月2日",c:["daily"],g:["daily"],e:`<h1> 摩托罗拉X40/X30/S30Pro全机型解锁BL</h1>
<p>摩托罗拉和联想手机一样，都一样可以官方解锁BL，不同于联想手机的sn文件解锁，摩托罗拉的解锁实际是一串字母，也就是大家常说的解锁码。国内摩托罗拉的手机销量并不是很多，导致这块的解锁BL+刷机root资源非常少，新手基本无从下手。下面ROM乐园小编就教大家自己学习解锁你的手机BL锁，这也是你获取root的必经之路，支持摩托罗拉S30 X30Edge等全系列。对于第一次解锁BL的用户来说，你需要备份重要文件，解锁BL会清空手机全部数据，并且手机安全等级降低。解锁BL后才能刷入ROOT，手机一旦获取root后，将失去更新升级系统功能，想要恢复更新就必须刷回官方未root版本系统</p>`,r:{minutes:3.33,words:1e3},y:"a",title:"摩托罗拉X40X30S30Pro全机型解锁BL",i:"type"},["/daily/摩托罗拉X40X30S30Pro全机型解锁BL.html","/daily/%E6%91%A9%E6%89%98%E7%BD%97%E6%8B%89X40X30S30Pro%E5%85%A8%E6%9C%BA%E5%9E%8B%E8%A7%A3%E9%94%81BL","/daily/摩托罗拉X40X30S30Pro全机型解锁BL.md","/daily/%E6%91%A9%E6%89%98%E7%BD%97%E6%8B%89X40X30S30Pro%E5%85%A8%E6%9C%BA%E5%9E%8B%E8%A7%A3%E9%94%81BL.md"]],["v-e4c5586a","/daily/%E7%9F%AD%E8%A7%86%E9%A2%91%E7%BD%91%E9%A1%B5%E5%9C%A8%E7%BA%BF%E5%8E%BB%E6%B0%B4%E5%8D%B0%E4%B8%8B%E8%BD%BD.html",{a:"xlc520",d:"2022-04-24T00:00:00.000Z",l:"2022年4月24日",c:["daily"],g:["daily"],e:`<h1> 短视频网页在线去水印下载</h1>
<p>支持市面上大部分短视频APP，包括但不限于快手、抖音、秒拍、火山、西瓜视频、微博视频、小咖秀、映客、网易云音乐、晃咖、<a href="http://musical.ly" target="_blank" rel="noopener noreferrer">musical.ly</a>、今日头条、微视、美拍、Flipagram、陌陌、小影、阳光宽频等等，感觉自己用得着的就收藏吧。</p>
<p>快手无水印下载：<a href="https://kuaishou.video996.com/" target="_blank" rel="noopener noreferrer">https://kuaishou.video996.com/</a></p>`,r:{minutes:.97,words:291},y:"a",title:"短视频网页在线去水印下载",i:"date"},["/daily/短视频网页在线去水印下载.html","/daily/%E7%9F%AD%E8%A7%86%E9%A2%91%E7%BD%91%E9%A1%B5%E5%9C%A8%E7%BA%BF%E5%8E%BB%E6%B0%B4%E5%8D%B0%E4%B8%8B%E8%BD%BD","/daily/短视频网页在线去水印下载.md","/daily/%E7%9F%AD%E8%A7%86%E9%A2%91%E7%BD%91%E9%A1%B5%E5%9C%A8%E7%BA%BF%E5%8E%BB%E6%B0%B4%E5%8D%B0%E4%B8%8B%E8%BD%BD.md"]],["v-841c3444","/daily/%E7%A8%8B%E5%BA%8F%E5%91%98%E5%BB%B6%E5%AF%BF%E6%8C%87%E5%8D%97.html",{a:"xlc520",d:"2022-04-19T00:00:00.000Z",l:"2022年4月19日",c:["daily"],g:["daily"],e:`<h1> 程序员延寿指南</h1>
<h3> 术语</h3>
<ul>
<li>ACM: All-Cause Mortality / 全因死亡率</li>
</ul>
<h3> 目标</h3>
<ul>
<li>稳健的活得更久</li>
</ul>
<h3> 关键结果</h3>
<ul>
<li>降低66.67%全因死亡率</li>
<li>增加~20年预期寿命</li>
<li><s>维持多巴胺于中轴</s></li>
</ul>
<h3> 分析</h3>
<ul>
<li>主要参考：对ACM的学术文献相对较多，可以作为主要参考</li>
<li>增加寿命与ACM关系非线性：显然增加寿命与ACM关系是非线性函数，这里假设 <code>DeltaLifeSpan=(1/(1-ACM)-1)*10</code></li>
<li>变量无法简单叠加：显然各个变量之间并不符合独立同分布假设，变量之间的实际影响也并不明确</li>
<li>存在矛盾观点：所有的证据都有文献/研究对应，但注意到：有些文献之间有显著矛盾的观点（如对于碳水摄入比例的矛盾）；有些文献存在较大争议（如认为22点前睡觉会提升43%全因死亡率）</li>
<li>研究仅表达相关：所有文献表明的更多是相关而非因果，在阅读时要考虑文献是否充分证明了因果 —— 如某文献表明了日均&gt;=7000步的人有显著低的全因死亡率。但步数少的人可能包含更多长期病患，如果没有合理的排除这块数据，那此文献调查失真</li>
</ul>`,r:{minutes:19.71,words:5913},y:"a",title:"程序员延寿指南",i:"date"},["/daily/程序员延寿指南.html","/daily/%E7%A8%8B%E5%BA%8F%E5%91%98%E5%BB%B6%E5%AF%BF%E6%8C%87%E5%8D%97","/daily/程序员延寿指南.md","/daily/%E7%A8%8B%E5%BA%8F%E5%91%98%E5%BB%B6%E5%AF%BF%E6%8C%87%E5%8D%97.md"]],["v-89f114ba","/dev/15000%E5%AD%97%E7%9A%84SQL%E8%AF%AD%E5%8F%A5%E5%A4%A7%E5%85%A8.html",{a:"xlc520",d:"2022-07-07T00:00:00.000Z",l:"2022年7月7日",c:["Java"],g:["Java"],e:`<h1> 15000 字的 SQL 语句大全</h1>
<p><strong>一、基础</strong></p>
<p><strong>1、说明：创建数据库</strong></p>
<p>CREATE DATABASE database-name</p>
<p><strong>2</strong>**、说明：删除数据库**</p>
<p><strong>d</strong>rop database dbname</p>
<p><strong>3、说明：备份sql server</strong></p>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">--- 创建 备份数据的 device</span>
<span class="token keyword">USE</span> master
<span class="token keyword">EXEC</span> sp_addumpdevice <span class="token string">'disk'</span><span class="token punctuation">,</span> <span class="token string">'testBack'</span><span class="token punctuation">,</span> <span class="token string">'c:\\mssql7backup\\MyNwind_1.dat'</span>
<span class="token comment">--- 开始 备份</span>
<span class="token keyword">BACKUP</span> <span class="token keyword">DATABASE</span> pubs <span class="token keyword">TO</span> testBack 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:21.34,words:6401},y:"a",title:"15000 字的 SQL 语句大全",i:"java"},["/dev/15000字的SQL语句大全.html","/dev/15000%E5%AD%97%E7%9A%84SQL%E8%AF%AD%E5%8F%A5%E5%A4%A7%E5%85%A8","/dev/15000字的SQL语句大全.md","/dev/15000%E5%AD%97%E7%9A%84SQL%E8%AF%AD%E5%8F%A5%E5%A4%A7%E5%85%A8.md"]],["v-a3ffd1cc","/dev/18%E4%B8%AAJava8%E6%97%A5%E6%9C%9F%E5%A4%84%E7%90%86.html",{a:"xlc520",d:"2022-08-15T00:00:00.000Z",l:"2022年8月15日",c:["Java"],g:["Java"],e:`<h1> 18 个 Java8 日期处理</h1>
<p>Java 8 推出了全新的日期时间API，在教程中我们将通过一些简单的实例来学习如何使用新API。</p>
<p>Java处理日期、日历和时间的方式一直为社区所诟病，将 java.util.Date设定为可变类型，以及SimpleDateFormat的非线程安全使其应用非常受限。</p>
<p>新API基于ISO标准日历系统，java.time包下的所有类都是不可变类型而且线程安全。</p>
<h2> 示例1:Java 8中获取今天的日期</h2>
<p>Java 8 中的 LocalDate 用于表示当天日期。和java.util.Date不同，它只有日期，不包含时间。当你仅需要表示日期时就用这个类。</p>`,r:{minutes:7.07,words:2121},y:"a",title:"18 个 Java8 日期处理",i:"java"},["/dev/18个Java8日期处理.html","/dev/18%E4%B8%AAJava8%E6%97%A5%E6%9C%9F%E5%A4%84%E7%90%86","/dev/18个Java8日期处理.md","/dev/18%E4%B8%AAJava8%E6%97%A5%E6%9C%9F%E5%A4%84%E7%90%86.md"]],["v-0a46221e","/dev/24%20%E4%B8%AA%E5%B8%B8%E8%A7%81%E7%9A%84Docker%E7%96%91%E9%9A%BE%E6%9D%82%E7%97%87%E5%A4%84%E7%90%86%E6%8A%80%E5%B7%A7.html",{a:"xlc520",d:"2022-09-04T00:00:00.000Z",l:"2022年9月4日",c:["Java"],g:["Java"],e:`<h1> 24 个常见的 Docker 疑难杂症处理技巧</h1>
<blockquote>
<p><strong>这里主要是为了记录在使用 Docker 的时候遇到的问题及其处理解决方法。</strong></p>
</blockquote>
<figure><img src="https://static.xlc520.ml/blogImage/docker-have-some-trouble.png" alt="Docker疑难杂症汇总" tabindex="0" loading="lazy"><figcaption>Docker疑难杂症汇总</figcaption></figure>
`,r:{minutes:38.64,words:11593},y:"a",title:"24 个常见的 Docker 疑难杂症处理技巧",i:"java"},["/dev/24 个常见的Docker疑难杂症处理技巧.html","/dev/24%20%E4%B8%AA%E5%B8%B8%E8%A7%81%E7%9A%84Docker%E7%96%91%E9%9A%BE%E6%9D%82%E7%97%87%E5%A4%84%E7%90%86%E6%8A%80%E5%B7%A7","/dev/24 个常见的Docker疑难杂症处理技巧.md","/dev/24%20%E4%B8%AA%E5%B8%B8%E8%A7%81%E7%9A%84Docker%E7%96%91%E9%9A%BE%E6%9D%82%E7%97%87%E5%A4%84%E7%90%86%E6%8A%80%E5%B7%A7.md"]],["v-0a8937cf","/dev/36%E5%BC%A0%E5%9B%BE%E6%A2%B3%E7%90%86%20Intellij%20IDEA%E5%B8%B8%E7%94%A8%E8%AE%BE%E7%BD%AE.html",{a:"xlc520",d:"2022-05-03T00:00:00.000Z",l:"2022年5月3日",c:["Java"],g:["Java"],e:`<h1> 36 张图梳理 Intellij IDEA 常用设置</h1>
<h2> <strong>1. 显示工具条</strong></h2>
<p>（1）效果图
<img src="https://static.xlc520.ml/blogImage/IntellijIDEA1.png" alt="img" loading="lazy">
（2）设置方法</p>
<p>标注1：View–&gt;Toolbar</p>
<p>标注2：View–&gt;Tool Buttons</p>
<h2> <strong>2.设置鼠标悬浮提示</strong></h2>
<p>（1）效果图
<img src="https://static.xlc520.ml/blogImage/IntellijIDEA2.png" alt="img" loading="lazy"></p>`,r:{minutes:4.89,words:1467},y:"a",title:"36 张图梳理 Intellij IDEA 常用设置",i:"java"},["/dev/36张图梳理 Intellij IDEA常用设置.html","/dev/36%E5%BC%A0%E5%9B%BE%E6%A2%B3%E7%90%86%20Intellij%20IDEA%E5%B8%B8%E7%94%A8%E8%AE%BE%E7%BD%AE","/dev/36张图梳理 Intellij IDEA常用设置.md","/dev/36%E5%BC%A0%E5%9B%BE%E6%A2%B3%E7%90%86%20Intellij%20IDEA%E5%B8%B8%E7%94%A8%E8%AE%BE%E7%BD%AE.md"]],["v-469f0e94","/dev/7000%E5%AD%97_24%E5%BC%A0%E5%9B%BE_%E5%B8%A6%E4%BD%A0%E5%BD%BB%E5%BA%95%E5%BC%84%E6%87%82%E7%BA%BF%E7%A8%8B%E6%B1%A0.html",{a:"xlc520",d:"2022-05-08T00:00:00.000Z",l:"2022年5月8日",c:["Java"],g:["Java"],e:`<h1> 7000字+24张图，带你彻底弄懂线程池</h1>
<p>图片失效看 ====》7000字+24张图，带你彻底弄懂线程池
<a href="https://kdocs.cn/l/cg3BmyfdA9Ko" target="_blank" rel="noopener noreferrer">https://kdocs.cn/l/cg3BmyfdA9Ko</a></p>
<figure><img src="https://static.xlc520.ml/blogImage/MBJI4AQAPA.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,r:{minutes:15.17,words:4551},y:"a",title:"7000字+24张图，带你彻底弄懂线程池",i:"java"},["/dev/7000字_24张图_带你彻底弄懂线程池.html","/dev/7000%E5%AD%97_24%E5%BC%A0%E5%9B%BE_%E5%B8%A6%E4%BD%A0%E5%BD%BB%E5%BA%95%E5%BC%84%E6%87%82%E7%BA%BF%E7%A8%8B%E6%B1%A0","/dev/7000字+24张图,带你彻底弄懂线程池.html","/dev/7000%E5%AD%97+24%E5%BC%A0%E5%9B%BE,%E5%B8%A6%E4%BD%A0%E5%BD%BB%E5%BA%95%E5%BC%84%E6%87%82%E7%BA%BF%E7%A8%8B%E6%B1%A0.html","/dev/7000字+24张图,带你彻底弄懂线程池.md","/dev/7000%E5%AD%97+24%E5%BC%A0%E5%9B%BE,%E5%B8%A6%E4%BD%A0%E5%BD%BB%E5%BA%95%E5%BC%84%E6%87%82%E7%BA%BF%E7%A8%8B%E6%B1%A0.md"]],["v-058e1247","/dev/DateTimeFormatter-%E6%9B%BF%E6%8D%A2SimpleDateFormat.html",{a:"xlc520",d:"2022-08-12T00:00:00.000Z",l:"2022年8月12日",c:["Java"],g:["Java"],e:`<h1> DateTimeFormatter-替换SimpleDateFormat</h1>
<p>我们先来看看SImpleDateFormat类的部分<a href="https://so.csdn.net/so/search?q=%E6%BA%90%E7%A0%81&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">源码</a>，如图 1所示。</p>
<figure><img src="https://static.xlc520.ml/blogImage/20210502205438290.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,r:{minutes:2.64,words:793},y:"a",title:"DateTimeFormatter-替换SimpleDateFormat",i:"java"},["/dev/DateTimeFormatter-替换SimpleDateFormat.html","/dev/DateTimeFormatter-%E6%9B%BF%E6%8D%A2SimpleDateFormat","/dev/DateTimeFormatter-替换SimpleDateFormat.md","/dev/DateTimeFormatter-%E6%9B%BF%E6%8D%A2SimpleDateFormat.md"]],["v-6169e28b","/dev/Docker%E6%90%AD%E5%BB%BAELK%E6%97%A5%E5%BF%97%E5%88%86%E6%9E%90%E7%B3%BB%E7%BB%9F.html",{a:"xlc520",d:"2022-09-05T00:00:00.000Z",l:"2022年9月5日",c:["Java"],g:["Java"],e:`<h1> Docker搭建ELK日志分析系统</h1>
<h2> 方法一</h2>
<ul>
<li>
<p>ElasticSearch
有强大的搜索功能的无模式数据库，可以简单的很想扩展，索引每一个字段，可以聚合分组数据。</p>
</li>
<li>
<p>Logstash
用Ruby编写的，我们可以使用管道输入和输出数据到任何位置。一个可以抓取，转换，存储事件到ElasticSearch的ETL管道。打包版本在JRuby上运行，并使用几十个线程进行并行的数据处理，利用了JVM的线程功能。</p>
</li>
<li>
<p>Kibana
基于web的数据分析，为ElasticSearch仪表板的工具。充分利用ElasticSearch的搜索功能，以秒为单位可视化数据。支持Lucene的查询字符串的语法和Elasticsearch的过滤功能。</p>
</li>
</ul>`,r:{minutes:13.15,words:3944},y:"a",title:"Docker搭建ELK日志分析系统",i:"java"},["/dev/Docker搭建ELK日志分析系统.html","/dev/Docker%E6%90%AD%E5%BB%BAELK%E6%97%A5%E5%BF%97%E5%88%86%E6%9E%90%E7%B3%BB%E7%BB%9F","/dev/Docker搭建ELK日志分析系统.md","/dev/Docker%E6%90%AD%E5%BB%BAELK%E6%97%A5%E5%BF%97%E5%88%86%E6%9E%90%E7%B3%BB%E7%BB%9F.md"]],["v-13072166","/dev/ES6%E8%AF%AD%E6%B3%95%E8%AF%A6%E8%A7%A3.html",{a:"xlc520",d:"2022-06-26T00:00:00.000Z",l:"2022年6月26日",c:["Java"],g:["Java","ES6","JavaScript"],e:`<h1> ES6语法详解</h1>
<h2> let变量</h2>
<p><code>let</code>声明的变量在<code>let</code>命令所在的代码块中有效。不存在变量提升，只能先声明后使用。</p>
<h3> 暂存死区</h3>
<p>如果区块中存在<code>let</code>和<code>const</code>命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">{</span>
    a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>           <span class="token comment">//ReferenceError</span>
    <span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token string">'a'</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//'a';</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:22.38,words:6715},y:"a",title:"ES6语法详解",i:"java"},["/dev/ES6语法详解.html","/dev/ES6%E8%AF%AD%E6%B3%95%E8%AF%A6%E8%A7%A3","/dev/ES6语法详解.md","/dev/ES6%E8%AF%AD%E6%B3%95%E8%AF%A6%E8%A7%A3.md"]],["v-29b89b89","/dev/Guava%E4%B8%ADMap%E7%9A%84%E9%AA%9A%E6%93%8D%E4%BD%9C.html",{a:"xlc520",d:"2023-01-08T00:00:00.000Z",l:"2023年1月8日",c:["Java"],g:["Java","Map"],e:`<h1> Guava中Map的骚操作</h1>
<p>Guava是google公司开发的一款Java类库扩展工具包，内含了丰富的API，涵盖了集合、缓存、并发、I/O等多个方面。使用这些API一方面可以简化我们代码，使代码更为优雅，另一方面它补充了很多jdk中没有的功能，能让我们开发中更为高效。</p>
<p>今天Hydra要给大家分享的就是Guava中封装的一些关于<code>Map</code>的骚操作，在使用了这些功能后，不得不说一句真香。先引入依赖坐标，然后开始我们的正式体验吧~</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.google.guava<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>guava<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>30.1.1-jre<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:9.51,words:2852},y:"a",title:"Guava中Map的骚操作",i:"java"},["/dev/Guava中Map的骚操作.html","/dev/Guava%E4%B8%ADMap%E7%9A%84%E9%AA%9A%E6%93%8D%E4%BD%9C","/dev/Guava中Map的骚操作.md","/dev/Guava%E4%B8%ADMap%E7%9A%84%E9%AA%9A%E6%93%8D%E4%BD%9C.md"]],["v-12f7a1d2","/dev/IDEA206%E4%B8%AA%E5%BF%AB%E6%8D%B7%E9%94%AE-%E5%8A%A8%E5%9B%BE%E6%BC%94%E7%A4%BA.html",{a:"xlc520",d:"2022-05-09T00:00:00.000Z",l:"2022年5月9日",c:["Java"],g:["Java"],e:`<h1> IDEA 206个快捷键 动图演示</h1>
<figure><img src="https://img-blog.csdnimg.cn/img_convert/9e911fdfd9d07a3c026a9c504d1db1f5.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>本文参考了 IntelliJ IDEA 的官网，列举了IntelliJ IDEA（Windows 版）的所有快捷键。并在此基础上，为 90% 以上的快捷键提供了动图演示，能够直观的看到操作效果。</p>`,r:{minutes:11.06,words:3317},y:"a",title:"IDEA 206个快捷键 动图演示",i:"java"},["/dev/IDEA206个快捷键-动图演示.html","/dev/IDEA206%E4%B8%AA%E5%BF%AB%E6%8D%B7%E9%94%AE-%E5%8A%A8%E5%9B%BE%E6%BC%94%E7%A4%BA","/dev/IDEA206个快捷键-动图演示.md","/dev/IDEA206%E4%B8%AA%E5%BF%AB%E6%8D%B7%E9%94%AE-%E5%8A%A8%E5%9B%BE%E6%BC%94%E7%A4%BA.md"]],["v-271a8b48","/dev/IDEA%E4%B8%AD%E7%9A%84%E5%90%84%E7%A7%8D%E8%B0%83%E8%AF%95%E4%BB%A3%E7%A0%81%E6%8A%80%E5%B7%A7.html",{a:"xlc520",d:"2022-07-14T00:00:00.000Z",l:"2022年7月14日",c:["Java"],g:["Java"],e:`<h1> Intellij IDEA 中的各种调试代码技巧</h1>
<p>Debug用来追踪代码的运行流程，通常在程序运行过程中出现异常，启用Debug模式可以分析定位异常发生的位置，以及在运行过程中参数的变化。通常我们也可以启用Debug模式来跟踪代码的运行流程去学习三方框架的源码。</p>
<p>所以学习下如何在Intellij IDEA中使用好Debug，主要包括如下内容：</p>
<p>一、Debug开篇</p>
<p>二、基本用法&amp;快捷键</p>
<p>三、变量查看</p>
<p>四、计算表达式</p>
<p>五、智能步入</p>
<p>六、断点条件设置</p>
<p>七、多线程调试</p>`,r:{minutes:12.65,words:3794},y:"a",title:"Intellij IDEA 中的各种调试代码技巧",i:"java"},["/dev/IDEA中的各种调试代码技巧.html","/dev/IDEA%E4%B8%AD%E7%9A%84%E5%90%84%E7%A7%8D%E8%B0%83%E8%AF%95%E4%BB%A3%E7%A0%81%E6%8A%80%E5%B7%A7","/dev/IDEA中的各种调试代码技巧.md","/dev/IDEA%E4%B8%AD%E7%9A%84%E5%90%84%E7%A7%8D%E8%B0%83%E8%AF%95%E4%BB%A3%E7%A0%81%E6%8A%80%E5%B7%A7.md"]],["v-709e7438","/dev/IDEA%E6%97%A5%E5%B8%B8%E4%BD%BF%E7%94%A8%E4%BB%8B%E7%BB%8D.html",{a:"xlc520",d:"2022-05-07T00:00:00.000Z",l:"2022年5月7日",c:["Java"],g:["Java"],e:`<h1> IntelliJ IDEA 日常使用介绍</h1>
<h2> 1. IDEA激活</h2>
<p>不说其他的，先放大招，进行IDEA免费使用</p>
<p>步骤：打开plugins -&gt; 打开Manage Plugin Repositories -&gt; 添加 <a href="https://zhile.io/" target="_blank" rel="noopener noreferrer">https://zhile.io</a> 网址 -&gt; 下载 IDE Eval Reset 插件 -&gt; 安装重启 -&gt; 设置每次打开都重置</p>
<figure><img src="https://img-blog.csdnimg.cn/50e1d7b3d80c477ab422b3d02415a778.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,r:{minutes:4.99,words:1498},y:"a",title:"IntelliJ IDEA 日常使用介绍",i:"java"},["/dev/IDEA日常使用介绍.html","/dev/IDEA%E6%97%A5%E5%B8%B8%E4%BD%BF%E7%94%A8%E4%BB%8B%E7%BB%8D","/dev/IDEA日常使用介绍.md","/dev/IDEA%E6%97%A5%E5%B8%B8%E4%BD%BF%E7%94%A8%E4%BB%8B%E7%BB%8D.md"]],["v-2b59d834","/dev/IntelliJIDEA%E5%BF%AB%E6%8D%B7%E9%94%AE%E5%A4%A7%E5%85%A8_%E5%8A%A8%E5%9B%BE%E6%BC%94%E7%A4%BA.html",{a:"xlc520",d:"2022-04-18T00:00:00.000Z",l:"2022年4月18日",c:["Java"],g:["Java"],e:`<h1> IntelliJ IDEA 快捷键大全 + 动图演示</h1>
<p>一、构建/编译
<code>Ctrl + F9</code>：构建项目
<code>Ctrl + Shift + F9</code>：重新编译当前类
二、文本编辑
<code>Ctrl + X</code>：剪切
<code>Ctrl + C</code>：复制
<code>Ctrl + V</code>：粘贴
<code>Ctrl + Alt + Shift + V</code>：粘贴为纯文本
<code>Ctrl + Shift + V</code>：从历史选择粘贴
<code>Ctrl + D</code>：复制行
<code>Ctrl + Shift + C</code>：复制文件路径
<code>Ctrl + Alt + Shift + C</code>：复制引用
<code>Ctrl + S</code>：保存全部
<code>Ctrl + Z</code>：撤销
<code>Ctrl + Shift + Z</code>：重做
<code>Tab</code>：缩进
<code>Shift + Tabl</code>：取消缩进
<code>Ctrl + Alt + I</code>：自动缩进行
<code>Shift + Enter</code>：开始新行
<code>Ctrl + Alt + Enter</code>：在当前行之前开始新行
<code>Ctrl + Y</code>：删除行
<code>Ctrl + Shift + U</code>：大小写转换
<code>Ctrl + Alt + Shift + Insert</code>：创建临时文件
<code>Shift + F4</code>：在新窗口中打开
三、光标操作
<code>Ctrl + Left</code>：左移一个单词
<code>Ctrl + Right</code>：右移一个单词
<code>Home</code>：移动至行首
<code>End</code>：移动至行尾
<code>Ctrl + Shift + M</code>：移动至大括号
<code>Ctrl + [</code>：移动至代码块开始
<code>Ctrl + ]</code>：移动至代码块末尾
<code>Alt + Down</code>：下一个方法
<code>Alt + Up</code>：上一个方法
<code>Ctrl + PageUp</code>：移动至页面顶部
<code>Ctrl + PageDown</code>：移动至页面底部
<code>PageUp</code>：向上翻页
<code>PageDown</code>：向下翻页
<code>Ctrl + Home</code>：移动至文件开头
<code>Ctrl + End</code>：移动至文件末尾
四、文本选择
<code>Ctrl + A</code>：全选
<code>Shift + Left</code>：向左选择
<code>Shift + Right</code>：向右选择
<code>Ctrl + Shift + Left</code>：向左选择一个单词
<code>Ctrl + Shift + Right</code>：向右选择一个单词
<code>Shift + Home</code>：向左选择至行头
<code>Shift + End</code>：向右选择至行尾
<code>Shift + Up</code>：向上选择
<code>Shift + Down</code>：向下选择
<code>Ctrl + Shift + [</code>：选择至代码块开头
<code>Ctrl + Shift + ]</code>：选择至代码块结尾
<code>Ctrl + Shift + PageUp</code>：选择至页面顶部
<code>Ctrl + Shift + PageDown</code>：选择至页面底部
<code>Shift + PageUp</code>：向上翻页选择
<code>Shift + PageDown</code>：向下翻页选择
<code>Ctrl + Shift + Home</code>：选择至文件开关
<code>Ctrl + Shift + End</code>：选择至文件结尾
<code>Ctrl + W</code>：扩展选择
<code>Ctrl + Shift + W</code>：收缩选择
五、代码折叠
<code>Ctrl + NumPad+</code>：展开代码块
<code>Ctrl + NumPad-</code>：折叠代码块
<code>Ctrl + Alt + NumPad+</code>：递归展开
<code>Ctrl + Alt + NumPad-</code>：递归折叠
<code>Ctrl + Shift + NumPad+</code>：全部展开
<code>Ctrl + Shift + NumPad-</code>：全部折叠
<code>Ctrl + .</code>：折叠选择
六、多个插入符号和范围选择
<code>Alt + Shift + Click</code>：添加/删除插入符号
<code>Alt + Shift + Insert</code>：切换列选择模式
双击<code>Ctrl</code> + <code>Up</code>：向上克隆插入符号
双击<code>Ctrl</code> + <code>Down</code>：向下克隆插入符号
<code>Alt + Shift + G</code>：将插入符号添加到选择中的每一行
<code>Alt + J</code>：选择单位下次出现的位置
<code>Alt + Shift + J</code>：取消最后一次选择
<code>Ctrl + Alt + Shift + J</code>：选择所有出现的位置
<code>Alt + Shift + Middle-Click</code>：创建矩形选择
<code>Alt + Click</code>：拖拽以创建矩形选择区
<code>Ctrl + Alt + Shift + Click</code>：拖拽以创建多个矩形选择区
七、辅助编码
<code>Alt + Enter</code>：显示建议操作
<code>Ctrl + Space</code>：代码补全
<code>Ctrl + Shift + Space</code>：类型匹配代码补全
<code>Ctrl + Alt + Space</code>：第二次代码补全
<code>Ctrl + Shift + Enter</code>：补全当前语句
<code>Ctrl + Alt + L</code>：格式化代码
<code>Ctrl + P</code>：参数信息提醒
<code>Ctrl + Q</code>：快速文档
<code>Ctrl + Shift + Up</code>：向上移动语句
<code>Ctrl + Shift + Down</code>：向下移动语句
<code>Ctrl + Alt + Shift + Left</code>：向左移动元素
<code>Ctrl + Alt + Shift + Right</code>：向右移动元素
<code>Alt + Shift + Up</code>：向上移动队列
<code>Alt + Shift + Down</code>：向下移动队列
<code>Ctrl + /</code>：添加行注释
<code>Ctrl + Shift + /</code>：添加块注释
<code>Alt + Insert</code>：生产语句
八、上下文导航
<code>Alt + Down</code>：跳转至下一个方法
<code>Alt + Up</code>：跳转至上一个方法
<code>Ctrl + G</code>：跳转到指定行
<code>Ctrl + Tab</code>：切换活动文件
<code>Alt + F1</code>：选择文件的定位
<code>Ctrl + E</code>：最近的文件
<code>Ctrl + Shift + Backspace</code>：返回上次编辑位置
<code>Ctrl + Alt + Left</code>：后退
<code>Ctrl + Alt + Right</code>：前进
<code>Ctrl + Alt + Down</code>：下一事件
<code>Ctrl + Alt + Up</code>：上一事件
<code>Alt + Right</code>：选择下一个选项卡
<code>Alt + Left</code>：选择下一个选项卡
<code>F11</code>：切换匿名书签
<code>Ctrl + Shift + [digit]</code>：用数字切换书签
<code>Ctrl + F11</code>：使用助词符切换书签
<code>Shift + F11</code>：显示所有书签
<code>Ctrl + [digit]</code>：用数字跳转到书签
<code>Alt + 7</code>：显示结构窗口
<code>Alt + 3</code>：显示查找窗口
九、查找操作
双击<code>Shift</code>：查找所有
<code>Ctrl + F</code>：查找字符（当前文件）
<code>F3</code>：查找下一个
<code>Shift + F3</code>：查找上一个
<code>Ctrl + R</code>：替换字符（当前文件）
<code>Ctrl + Shift + F</code>：查找字符（所有文件）
<code>Ctrl + Shift + R</code>：替换字符（所有文件）
<code>Ctrl + F3</code>：跳转到光标处单词的下一位置
<code>Ctrl + Shift + N</code>：查找文件并跳转
<code>Ctrl + F12</code>：打开文件结构
<code>Ctrl + Alt + Shift + N</code>：查找符号（变量、方法等）
<code>Ctrl + Shift + A</code>：查找动作
十、符号导航
<code>Alt + F7</code>：查找用法
<code>Ctrl + B</code>：跳转到声明处
<code>Ctrl + Shift + B</code>：跳转到声明类处
<code>Ctrl + Alt + F7</code>：显示用法
<code>Ctrl + U</code>：跳转到超级方法
<code>Ctrl + Alt + B</code>：跳转到实现方法
<code>Ctrl + Shift + F7</code>：突出显示文件中的用法
十一、代码分析
<code>Alt + Enter</code>：显示意图操作
<code>Ctrl + F1</code>：显示错误描述
<code>F2</code>：下一个突出显示的错误
<code>Shift + F2</code>：上一个突出显示的错误
<code>Ctrl + Alt + Shift + I</code>：按名称运行检查
<code>Alt + 6</code>：显示问题窗口
十二、运行和调试
双击<code>Ctrl</code>：运行所有
<code>Shift + F10</code>：运行上下文配置
<code>Alt + Shift + F10</code>：打开运行窗口
<code>Shift + F9</code>：调试上下文配置
<code>Alt + Shift + F9</code>：打开调试窗口
<code>Ctrl + Alt + F5</code>：附加到进程
<code>Ctrl + F2</code>：停止
<code>F9</code>：运行至下一断点
<code>Ctrl + Shift + F2</code>：停止后台进程
<code>F8</code>：跨过调用
<code>Alt + Shift + F8</code>：强制跨过调用
<code>F7</code>：进入调用
<code>Shift + F7</code>：智能进入调用
<code>Alt + Shift + F7</code>：强制进入调用
<code>Shift + F8</code>：跳出调用
<code>Alt + F9</code>：运行至光标处
<code>Ctrl + Alt + F9</code>：强制运行至光标处
<code>Alt + F10</code>：显示执行点
<code>Alt + F8</code>：评估表达式
<code>Ctrl + Alt + F8</code>：快速评估表达式
<code>Ctrl + F8</code>：切换行断点
<code>Ctrl + Alt + Shift + F8</code>：切换临时行断点
<code>Ctrl + Shift + F8</code>：查看断点
<code>Ctrl + Shift + F8</code>：编辑断点
<code>Alt + 4</code>：显示运行窗口
<code>Alt + 5</code>：显示调试窗口
<code>Alt + 8</code>：显示服务窗口
十三、代码重构
<code>Ctrl + Alt + Shift + T</code>：打开重构列表
<code>Shift + F6</code>：修改名称
<code>Ctrl + F6</code>：修改签名
<code>Ctrl + Alt + N</code>：内联
<code>F6</code>：移动
<code>Ctrl + Alt + M</code>：提取方法
<code>Ctrl + Alt + F</code>：引入域
<code>Ctrl + Alt + P</code>：引入参数
<code>Ctrl + Alt + V</code>：引入变量
<code>Alt + Delete</code>：安全删除
十四、全局 CVS 操作
<code>Alt + \`\` ：弹出 CVS 窗口 </code>Ctrl + K<code>：提交 </code>Ctrl + T<code>：更新项目 </code>Ctrl + Alt + Z<code>：回滚 </code>Ctrl + Shift + K<code>：拉取 </code>Ctrl + Alt + Shift + Down<code>：下一个修改 </code>Ctrl + Alt + Shift + Up<code>：上一个修改 </code>Alt + 9<code>：显示版本控制窗口 </code>Alt + 0<code>：显示提交窗口 十五、差异查看器 </code>F7<code>：下一个差异 </code>Shift + F7<code>：上一个差异 </code>Ctrl + Alt + R<code>：接受左侧 </code>Ctrl + Alt + A<code>：接受右侧 </code>Ctrl + Shift + Tab<code>：选择对面的差异窗格 </code>Ctrl + Shift + D<code>：显示差异设置窗口 十六、工具窗口 </code>Shift + Escape<code>：隐藏活动的工具窗口 </code>Ctrl + Shift + F12<code>：隐藏所有工具窗口 </code>F12<code>：跳转到最后一个工具窗口 </code>Ctrl + Alt + Shift + Left<code>：向左延伸窗口大小 </code>Ctrl + Alt + Shift + Right<code>：向右延伸窗口大小 </code>Ctrl + Alt + Shift + Up<code>：向顶部延伸窗口大小 </code>Ctrl + Alt + Shift + Down<code>：向底部延伸窗口大小 </code>Alt + 1<code>：显示项目窗口 </code>Alt + 2<code>：显示书签窗口 </code>Alt + 3<code>：显示查找窗口 </code>Alt + 4<code>：显示运行窗口 </code>Alt + 5<code>：显示调试窗口 </code>Alt + 6<code>：显示问题窗口 </code>Alt + 7<code>：显示结构窗口 </code>Alt + 8<code>：显示服务窗口 </code>Alt + 9<code>：显示版本控制窗口 </code>Alt + 0<code>：显示提交窗口 </code>Alt + F12\`：显示终端窗口</p>`,r:{minutes:29.23,words:8770},y:"a",title:"IntelliJ IDEA 快捷键大全 + 动图演示",i:"java"},["/dev/IntelliJIDEA快捷键大全_动图演示.html","/dev/IntelliJIDEA%E5%BF%AB%E6%8D%B7%E9%94%AE%E5%A4%A7%E5%85%A8_%E5%8A%A8%E5%9B%BE%E6%BC%94%E7%A4%BA","/dev/IntelliJIDEA快捷键大全+动图演示.html","/dev/IntelliJIDEA%E5%BF%AB%E6%8D%B7%E9%94%AE%E5%A4%A7%E5%85%A8+%E5%8A%A8%E5%9B%BE%E6%BC%94%E7%A4%BA.html","/dev/IntelliJIDEA快捷键大全+动图演示.md","/dev/IntelliJIDEA%E5%BF%AB%E6%8D%B7%E9%94%AE%E5%A4%A7%E5%85%A8+%E5%8A%A8%E5%9B%BE%E6%BC%94%E7%A4%BA.md"]],["v-eba414ea","/dev/JApiDocs%E6%95%99%E7%A8%8B.html",{a:"xlc520",d:"2022-02-12T00:00:00.000Z",l:"2022年2月12日",c:["Java"],g:["Java"],e:`<h1> JApiDocs教程</h1>
<p>一、Maven依赖</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!--  JApiDocs  --&gt;
&lt;dependency&gt;
   &lt;groupId&gt;io.github.yedaxia&lt;/groupId&gt;
   &lt;artifactId&gt;japidocs&lt;/artifactId&gt;
   &lt;version&gt;1.4.3&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.99,words:1196},y:"a",title:"JApiDocs教程",i:"type"},["/dev/JApiDocs教程.html","/dev/JApiDocs%E6%95%99%E7%A8%8B","/dev/JApiDocs教程.md","/dev/JApiDocs%E6%95%99%E7%A8%8B.md"]],["v-05f16561","/dev/JRebel%E7%83%AD%E9%83%A8%E7%BD%B2%E7%9A%84%E4%BD%BF%E7%94%A8.html",{a:"xlc520",d:"2022-07-09T00:00:00.000Z",l:"2022年7月9日",c:["Java"],g:["Java"],e:`<h1> JRebel热部署的使用</h1>
<p>对比图：</p>
<figure><img src="https://static.xlc520.ml/blogImage/feabc010fbd0a0467f3bcb155faede3b-16565707073351.png" alt="JRebel热部署的使用" tabindex="0" loading="lazy"><figcaption>JRebel热部署的使用</figcaption></figure>
<p>IDEA在这里配置了自动编译：</p>
<figure><img src="https://static.xlc520.ml/blogImage/c2dc072b4fb156f0ee8da0c3dd86abb5-16565707098543.png" alt="JRebel热部署的使用" tabindex="0" loading="lazy"><figcaption>JRebel热部署的使用</figcaption></figure>`,r:{minutes:2.92,words:876},y:"a",title:"JRebel热部署的使用",i:"java"},["/dev/JRebel热部署的使用.html","/dev/JRebel%E7%83%AD%E9%83%A8%E7%BD%B2%E7%9A%84%E4%BD%BF%E7%94%A8","/dev/JRebel热部署的使用.md","/dev/JRebel%E7%83%AD%E9%83%A8%E7%BD%B2%E7%9A%84%E4%BD%BF%E7%94%A8.md"]],["v-2c1c367c","/dev/JSP%E5%92%8CJSTL%E8%8E%B7%E5%8F%96%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%8F%82%E6%95%B0.html",{a:"xlc520",d:"2022-06-22T00:00:00.000Z",l:"2022年6月22日",c:["Java"],g:["Java"],e:`<h1> JSP和JSTL获取服务器参数</h1>
<div class="language-jsp line-numbers-mode" data-ext="jsp"><pre class="language-jsp"><code>&lt;%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%&gt;

&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;JSP和JSTL获取服务器参数&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
JSP方式&lt;br/&gt;
&lt;%

String SERVER_NAME = request.getServerName();

String SERVER_SOFTWARE = getServletContext().getServerInfo();

String SERVER_PROTOCOL = request.getProtocol();

Integer SERVER_PORT = request.getServerPort();

String REQUEST_METHOD = request.getMethod();

String PATH_INFO = request.getPathInfo();

String PATH_TRANSLATED = request.getPathTranslated();

String SCRIPT_NAME = request.getServletPath();

String DOCUMENT_ROOT = request.getRealPath("/");

String QUERY_STRING = request.getQueryString();

String REMOTE_HOST = request.getRemoteHost();

String REMOTE_ADDR = request.getRemoteAddr();

String AUTH_TYPE = request.getAuthType();

String REMOTE_USER = request.getRemoteUser();

String CONTENT_TYPE = request.getContentType();

Integer CONTENT_LENGTH = request.getContentLength();

String HTTP_ACCEPT = request.getHeader("Accept");

String HTTP_USER_AGENT = request.getHeader("User-Agent");

String HTTP_REFERER = request.getHeader("Referer");

HashMap infoMap = new HashMap();

infoMap.put("SERVER_NAME", SERVER_NAME);

infoMap.put("SERVER_SOFTWARE", SERVER_SOFTWARE);

infoMap.put("SERVER_PROTOCOL", SERVER_PROTOCOL);

infoMap.put("SERVER_PORT", SERVER_PORT);
infoMap.put("REQUEST_METHOD", REQUEST_METHOD);

infoMap.put("PATH_INFO", PATH_INFO);

infoMap.put("PATH_TRANSLATED", PATH_TRANSLATED);

infoMap.put("SCRIPT_NAME", SCRIPT_NAME);

infoMap.put("DOCUMENT_ROOT", DOCUMENT_ROOT);

infoMap.put("QUERY_STRING", QUERY_STRING);

infoMap.put("REMOTE_HOST", REMOTE_HOST);

infoMap.put("REMOTE_ADDR", REMOTE_ADDR);

infoMap.put("AUTH_TYPE", AUTH_TYPE);

infoMap.put("REMOTE_USER", REMOTE_USER);

infoMap.put("CONTENT_TYPE", CONTENT_TYPE);

infoMap.put("CONTENT_LENGTH", CONTENT_LENGTH);

infoMap.put("HTTP_ACCEPT", HTTP_ACCEPT);

infoMap.put("HTTP_USER_AGENT", HTTP_USER_AGENT);

infoMap.put("HTTP_REFERER", HTTP_REFERER);

Iterator it = infoMap.keySet().iterator();

%&gt;

&lt;%
while (it.hasNext()) {
Object o = it.next();
%&gt;
　　&lt;%=o%&gt;
　　&lt;%=infoMap.get(o)%&gt;
　　&lt;% out.println("&lt;br&gt;"); }%&gt;
&lt;br/&gt;

JSTL方式&lt;br/&gt;
\${pageContext.request} |取得请求对象&lt;br&gt;
\${pageContext.session} |取得session对象&lt;br&gt;
\${pageContext.request.queryString} |取得请求的参数字符串&lt;br&gt;
\${pageContext.request.requestURL} |取得请求的URL，但不包括请求之参数字符串&lt;br&gt;
\${pageContext.request.contextPath} |服务的web application的名称&lt;br&gt;
\${pageContext.request.method} |取得HTTP的方法(GET、POST)&lt;br&gt;
\${pageContext.request.protocol} |取得使用的协议(HTTP/1.1、HTTP/1.0)&lt;br&gt;
\${pageContext.request.remoteUser} |取得用户名称&lt;br&gt;
\${pageContext.session.new} |判断session是否为新的，所谓新的session，表示刚由server产生而client尚未使用&lt;br&gt;
\${pageContext.session.id} |取得session的ID&lt;br&gt;

\${header["User-Agent"]}|用户浏览器的版本&lt;br/&gt;
\${header["Host"]}|IP&lt;br/&gt;
\${pageContext.request.remoteAddr } |取得用户的IP地址&lt;br&gt;
\${pageContext.servletContext.serverInfo}|取得主机端的服务信息&lt;br&gt;
\${pageContext.request.serverPort}|端口信息&lt;br&gt;
\${pageContext.request.serverName}|服务器名称&lt;br&gt;
\${pageContext.request.remoteHost}|客户机名称&lt;br&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.44,words:431},y:"a",title:"JSP和JSTL获取服务器参数",i:"java"},["/dev/JSP和JSTL获取服务器参数.html","/dev/JSP%E5%92%8CJSTL%E8%8E%B7%E5%8F%96%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%8F%82%E6%95%B0","/dev/JSP和JSTL获取服务器参数.md","/dev/JSP%E5%92%8CJSTL%E8%8E%B7%E5%8F%96%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%8F%82%E6%95%B0.md"]],["v-358ae550","/dev/JUC%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B.html",{a:"xlc520",d:"2022-08-14T00:00:00.000Z",l:"2022年8月14日",c:["Java"],g:["Java"],e:`<h2> 一、线程基础</h2>
<h3> 1、Java多线程相关概念</h3>
<h4> 1、进程</h4>
<p>是程序的⼀次执⾏，是系统进⾏资源分配和调度的独⽴单位，每⼀个进程都有它⾃⼰的内存空间和系统资源</p>
<p>进程（Process）是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位，是操作系统结构的基础。程序是指令、数据及其组织形式的描述，进程是程序的实体。</p>
<p><strong>进程具有的特征：</strong></p>
<ul>
<li><strong>动态性</strong>：进程是程序的一次执行过程，是临时的，有生命期的，是动态产生，动态消亡的</li>
<li><strong>并发性</strong>：任何进程都可以同其他进行一起并发执行</li>
<li><strong>独立性</strong>：进程是系统进行资源分配和调度的一个独立单位</li>
<li><strong>结构性</strong>：进程由程序，数据和进程控制块三部分组成</li>
</ul>`,r:{minutes:261.76,words:78529},y:"a",title:"JUC并发编程",i:"java"},["/dev/JUC并发编程.html","/dev/JUC%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B","/dev/JUC并发编程.md","/dev/JUC%E5%B9%B6%E5%8F%91%E7%BC%96%E7%A8%8B.md"]],["v-a2ddb01c","/dev/Java8Stream%E4%B9%8Bcollect().html",{a:"xlc520",d:"2022-11-21T00:00:00.000Z",l:"2022年11月21日",c:["Java"],g:["Java"],e:`<h1> Java 8 Stream 之 collect()</h1>
<h1> 前言</h1>
<p>本身我是一个比较偏向少使用<a href="https://so.csdn.net/so/search?q=Stream&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">Stream</a>的人，因为调试比较不方便。</p>
<p>但是, 不得不说，stream确实会给我们编码带来便捷。</p>
<p>所以还是忍不住想分享一些奇技淫巧。</p>
<h1> 正文</h1>
<p>Stream流 其实操作分三大块 ：</p>`,r:{minutes:2.52,words:756},y:"a",title:"Java 8 Stream 之 collect()",i:"java"},["/dev/Java8Stream之collect().html","/dev/Java8Stream%E4%B9%8Bcollect()","/dev/Java8Stream之collect().md","/dev/Java8Stream%E4%B9%8Bcollect().md"]],["v-60d5c536","/dev/Java8%E5%A4%9A%E7%BA%BF%E7%A8%8BCompletableFuture.html",{a:"xlc520",d:"2022-09-03T00:00:00.000Z",l:"2022年9月3日",c:["Java"],g:["Java"],e:`<h1> Java8多线程CompletableFuture</h1>
<p>日常开发中，我们都会用到线程池，一般会用execute()和submit()方法提交任务。但是当你用过CompletableFuture之后，就会发现以前的线程池处理任务有多难用，功能有多简陋，CompletableFuture又是多么简洁优雅。</p>
<p>要知道CompletableFuture已经随着Java8发布7年了，还没有过它就有点说不过去了。
今天5分钟带你深入浅出CompletableFuture实用教程。</p>
<h2> 1. 使用线程池处理任务</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * <span class="token keyword">@author</span> yideng
     * <span class="token keyword">@apiNote</span> 线程池使用示例
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadDemo</span> <span class="token punctuation">{</span>
    
        <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 1. 创建线程池</span>
            <span class="token class-name">ExecutorService</span> executorService <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Future</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> futures <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Integer</span> key <span class="token operator">:</span> list<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 2. 提交任务</span>
                <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> future <span class="token operator">=</span> executorService<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 睡眠一秒，模仿处理过程</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">return</span> <span class="token string">"结果"</span> <span class="token operator">+</span> key<span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                futures<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>future<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
    
            <span class="token comment">// 3. 获取结果</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> future <span class="token operator">:</span> futures<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">String</span> result <span class="token operator">=</span> future<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            executorService<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:7.97,words:2392},y:"a",title:"Java8多线程CompletableFuture",i:"java"},["/dev/Java8多线程CompletableFuture.html","/dev/Java8%E5%A4%9A%E7%BA%BF%E7%A8%8BCompletableFuture","/dev/Java8多线程CompletableFuture.md","/dev/Java8%E5%A4%9A%E7%BA%BF%E7%A8%8BCompletableFuture.md"]],["v-55b8ba0a","/dev/Java%E4%B8%ADList%E7%9A%84stream%E4%BD%BF%E7%94%A8.html",{a:"xlc520",d:"2022-09-11T00:00:00.000Z",l:"2022年9月11日",c:["Java"],g:["Java"],e:`<h1> Java中List的stream使用</h1>
<p>对比起for循环操作list，最大的弊端就是代码太长太乱了，如果涉及3-4张表的操作，也就是涉及多个PO操作</p>
<p><strong>流</strong></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+--------------------+ +------+ +------+ +---+ +-------+| stream of elements +-----&gt; |filter+-&gt; |sorted+-&gt; |map+-&gt; |collect|+--------------------+ +------+ +------+ +---+ +-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:1.98,words:593},y:"a",title:"Java中List的stream使用",i:"java"},["/dev/Java中List的stream使用.html","/dev/Java%E4%B8%ADList%E7%9A%84stream%E4%BD%BF%E7%94%A8","/dev/Java中List的stream使用.md","/dev/Java%E4%B8%ADList%E7%9A%84stream%E4%BD%BF%E7%94%A8.md"]],["v-3f0a946f","/dev/Java%E5%91%BD%E5%90%8D%E8%A7%84%E8%8C%83.html",{a:"xlc520",d:"2022-05-28T00:00:00.000Z",l:"2022年5月28日",c:["Java"],g:["Java"],e:`<h1> Java 命名规范</h1>
<p>在本文中，将从大到小，从外到内，总结Java编程中的命名规范。文中将会涉及到日常工作中常见的命名示例，如包命名，类命名，接口命名，方法命名，变量命名，常类命名，抽象类命名，异常类命名以及扩展类命名等。我将按照项目工程目录结构，从包，类(接口，抽象类，异常类)，方法，变量和常量的顺序展开介绍。</p>
<p>本文是 Java 命名规范的介绍，建议收藏转发。更多文章可以关注公众号「Java后端」自行搜索。</p>
<h2> <strong>1. 包命名规范</strong></h2>
<p>包(Package)的作用是将功能相似或相关的类或者接口进行分组管理，便于类的定位和查找，同时也可以使用包来避免类名的冲突和访问控制，使代码更容易维护。通常，包命使用小写英文字母进行命名，并使用“.”进行分割，每个被分割的单元只能包含一个名词。</p>`,r:{minutes:9.83,words:2948},y:"a",title:"Java 命名规范",i:"java"},["/dev/Java命名规范.html","/dev/Java%E5%91%BD%E5%90%8D%E8%A7%84%E8%8C%83","/dev/Java命名规范.md","/dev/Java%E5%91%BD%E5%90%8D%E8%A7%84%E8%8C%83.md"]],["v-50401ed5","/dev/Java%E5%AE%9E%E7%8E%B0gz%E5%8E%8B%E7%BC%A9%E4%B8%8E%E8%A7%A3%E5%8E%8B%E7%BC%A9.html",{a:"xlc520",d:"2022-11-14T00:00:00.000Z",l:"2022年11月14日",c:["Java"],g:["Java"],e:`<h1> Java实现gz压缩与解压缩</h1>
<h2> 压缩</h2>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 将指定文件GZ压缩，并删除原文件。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">gzip</span><span class="token punctuation">(</span><span class="token class-name">String</span> fileName<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> outFileName <span class="token operator">=</span> fileName <span class="token operator">+</span> <span class="token string">".gz"</span><span class="token punctuation">;</span>
    <span class="token class-name">GZIPOutputStream</span> out <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GZIPOutputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span>outFileName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">FileInputStream</span> in <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> buf <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> len<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">=</span> in<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        out<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>buf<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    in<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    out<span class="token punctuation">.</span><span class="token function">finish</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    out<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.71,words:213},y:"a",title:"Java实现gz压缩与解压缩",i:"java"},["/dev/Java实现gz压缩与解压缩.html","/dev/Java%E5%AE%9E%E7%8E%B0gz%E5%8E%8B%E7%BC%A9%E4%B8%8E%E8%A7%A3%E5%8E%8B%E7%BC%A9","/dev/Java实现gz压缩与解压缩.md","/dev/Java%E5%AE%9E%E7%8E%B0gz%E5%8E%8B%E7%BC%A9%E4%B8%8E%E8%A7%A3%E5%8E%8B%E7%BC%A9.md"]],["v-40911b8e","/dev/Java%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BAExcel-POI.html",{a:"xlc520",d:"2022-04-29T00:00:00.000Z",l:"2022年4月29日",c:["Java"],g:["Java"],e:`<h1> Java导入导出Excel-POI</h1>
<h2> 一、介绍</h2>
<p>当前B/S模式已成为应用开发的主流，而在企业办公系统中，常常有客户这样子要求：你要把我们的报表直接用Excel打开(电信系统、银行系统)。或者是：我们已经习惯用Excel打印。这样在我们实际的开发中，很多时候需要实现导入、导出Excel的应用。</p>
<p>目前，比较常用的实现Java导入、导出Excel的技术有两种Jakarta POI和Java Excel</p>
<p>下面我就分别讲解一下如何使用这两个技术实现导入、导出Excel</p>
<h2> 二、使用Jakarta POI导入、导出Excel</h2>`,r:{minutes:16.31,words:4894},y:"a",title:"Java导入导出Excel-POI",i:"java"},["/dev/Java导入导出Excel-POI.html","/dev/Java%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BAExcel-POI","/dev/Java导入导出Excel-POI.md","/dev/Java%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BAExcel-POI.md"]],["v-73b317e4","/dev/Java%E7%94%B5%E5%AD%90%E4%B9%A6%E7%AC%94%E8%AE%B0.html",{a:"xlc520",d:"2022-05-18T00:00:00.000Z",l:"2022年5月18日",c:["Java"],g:["Java"],e:`<h1> Java电子书笔记</h1>
<p>如果您觉得对你有帮助，请不要吝啬给一个star，在这里感谢你的每一个star，谢谢！</p>
<h3> 注意事项（请善于使用 ctrl + F 进行搜索）</h3>
<h3> Java基础篇</h3>
<p>高清电子版-21天学通JAVA.pdf 链接: <a href="https://pan.baidu.com/s/1_9o4iziVgeR8EGwKyy77vA" target="_blank" rel="noopener noreferrer">https://pan.baidu.com/s/1_9o4iziVgeR8EGwKyy77vA</a>  密码: esod</p>`,r:{minutes:49.59,words:14878},y:"a",title:"Java电子书笔记",i:"java"},["/dev/Java电子书笔记.html","/dev/Java%E7%94%B5%E5%AD%90%E4%B9%A6%E7%AC%94%E8%AE%B0","/dev/Java电子书笔记.md","/dev/Java%E7%94%B5%E5%AD%90%E4%B9%A6%E7%AC%94%E8%AE%B0.md"]],["v-5bd12a58","/dev/Jenkins_Docker%E4%B8%80%E9%94%AE%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2.html",{a:"xlc520",d:"2022-11-09T00:00:00.000Z",l:"2022年11月9日",c:["Java"],g:["Java","Jenkins","Docker"],e:`<h1> Jenkins + Docker 一键自动化部署</h1>
<ul>
<li>环境：CentOS7 + Git (Gitee)</li>
<li>实现步骤：在 Docker 安装 Jenkins，配置 Jenkins 基本信息，利用 Dockerfile 和 Shell 脚本实现项目自动拉取打包并运行。</li>
</ul>
<h2> <strong>一、安装 Docker</strong></h2>
<p>安装社区版本 Docker CE</p>
<h3> <strong>1. 确保 yum 包更新到最新</strong></h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yum update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:4.26,words:1279},y:"a",title:"Jenkins + Docker 一键自动化部署",i:"java"},["/dev/Jenkins_Docker一键自动化部署.html","/dev/Jenkins_Docker%E4%B8%80%E9%94%AE%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2","/dev/Jenkins+Docker一键自动化部署.html","/dev/Jenkins+Docker%E4%B8%80%E9%94%AE%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2.html","/dev/Jenkins+Docker一键自动化部署.md","/dev/Jenkins+Docker%E4%B8%80%E9%94%AE%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2.md"]],["v-a4b9dd90","/dev/Logback%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%BC%98%E5%8C%96.html",{a:"xlc520",d:"2022-06-30T00:00:00.000Z",l:"2022年6月30日",c:["Java"],g:["Java"],e:`<h1> Logback 配置文件优化</h1>
<p><strong>01、通过阅读本篇文章将了解到</strong></p>
<ul>
<li>1.日志输出到文件并根据<code>LEVEL</code>级别将日志分类保存到不同文件</li>
<li>2.通过异步输出日志减少磁盘<code>IO</code>提高性能</li>
<li>3.异步输出日志的原理</li>
</ul>
<h3> 02、配置文件logback-spring.xml</h3>
<p><code>SpringBoot</code>工程自带<code>logback</code>和<code>slf4j</code>的依赖，所以重点放在编写配置文件上，需要引入什么依赖，日志依赖冲突统统都不需要我们管了。<code>logback</code>框架会默认加载<code>classpath</code>下命名为<code>logback-spring</code>或<code>logback</code>的配置文件。将所有日志都存储在一个文件中文件大小也随着应用的运行越来越大并且不好排查问题，正确的做法应该是将<code>error</code>日志和其他日志分开，并且不同级别的日志根据时间段进行记录存储。</p>`,r:{minutes:4.88,words:1464},y:"a",title:"Logback 配置文件优化",i:"java"},["/dev/Logback 配置文件优化.html","/dev/Logback%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%BC%98%E5%8C%96","/dev/Logback 配置文件优化.md","/dev/Logback%20%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%BC%98%E5%8C%96.md"]],["v-6207c160","/dev/MyBatis-Plus%E8%81%94%E8%A1%A8%E6%9F%A5%E8%AF%A2-Mybatis-Plus-Join.html",{a:"xlc520",d:"2022-08-10T00:00:00.000Z",l:"2022年8月10日",c:["Java"],g:["Java"],e:`<h1> 快速使用</h1>
<p><code>mybatis-plus</code>作为<code>mybatis</code>的增强工具，它的出现极大的简化了开发中的数据库操作，但是长久以来，它的<strong>联表查询</strong>能力一直被大家所诟病。一旦遇到<code>left join</code>或<code>right join</code>的左右连接，你还是得老老实实的打开xml文件，手写上一大段的sql语句。</p>
<p>直到前几天，偶然碰到了这么一款叫做<code>mybatis-plus-join</code>的工具（后面就简称<code>mpj</code>了），使用了一下，不得不说真香！彻底将我从xml地狱中解放了出来，终于可以以类似<code>mybatis-plus</code>中<code>QueryWrapper</code>的方式来进行联表查询了，话不多说，我们下面开始体验。</p>`,r:{minutes:15.31,words:4592},y:"a",title:"MyBatis-Plus联表查询-Mybatis-Plus-Join",i:"java"},["/dev/MyBatis-Plus联表查询-Mybatis-Plus-Join.html","/dev/MyBatis-Plus%E8%81%94%E8%A1%A8%E6%9F%A5%E8%AF%A2-Mybatis-Plus-Join","/dev/MyBatis-Plus联表查询-Mybatis-Plus-Join.md","/dev/MyBatis-Plus%E8%81%94%E8%A1%A8%E6%9F%A5%E8%AF%A2-Mybatis-Plus-Join.md"]],["v-6d504a5e","/dev/MyEclipse.html",{a:"xlc520",d:"2022-01-22T00:00:00.000Z",l:"2022年1月22日",c:["other"],g:["other"],e:`<h1> MyEclipsev2021永久激活版</h1>
<h3> 激活码</h3>
<p>1、zLR8ZC-855575-6154505816197416
2、3LR8ZC-855575-61567256274007429
3、zLR8ZC-855575-61567256215416341
4、3LR8ZC-855575-61567256646682235
5、zLR8ZC-855575-61567256903775584
6、oLR8ZC-855575-77665356722269248
7、fLR8ZC-855575-7766535033841152
8、gLR8ZC-855575-78507056841444089
9、GLR8ZC-855575-7850705925145157</p>`,r:{minutes:4.42,words:1327},y:"a",title:"MyEclipsev2021永久激活版",i:"type"},["/dev/MyEclipse","/dev/MyEclipse.md"]],["v-3953c4a4","/dev/Optional%E9%9D%9E%E7%A9%BA%E5%88%A4%E6%96%AD.html",{a:"xlc520",d:"2022-07-11T00:00:00.000Z",l:"2022年7月11日",c:["Java"],g:["Java"],e:`<h1> Optional非空判断</h1>
<h2> 1.前言</h2>
<p>相信不少小伙伴已经被java的NPE(Null Pointer Exception)所谓的空指针异常搞的头昏脑涨, 有大佬说过“防止 NPE，是程序员的基本修养。”但是修养归修养，也是我们程序员最头疼的问题之一，那么我们今天就要尽可能的利用Java8的新特性 Optional来尽量简化代码同时高效处理NPE（Null Pointer Exception 空指针异常）</p>
<h3> 2.认识Optional并使用</h3>
<p>简单来说，Opitonal类就是Java提供的为了解决大家平时判断对象是否为空用 会用 null!=obj 这样的方式存在的判断，从而令人头疼导致NPE（Null Pointer Exception 空指针异常），同时Optional的存在可以让代码更加简单，可读性跟高，代码写起来更高效.</p>`,r:{minutes:9.23,words:2770},y:"a",title:"Optional非空判断",i:"java"},["/dev/Optional非空判断.html","/dev/Optional%E9%9D%9E%E7%A9%BA%E5%88%A4%E6%96%AD","/dev/Optional非空判断.md","/dev/Optional%E9%9D%9E%E7%A9%BA%E5%88%A4%E6%96%AD.md"]],["v-0ff149dc","/dev/Python%E6%89%B9%E9%87%8F%E4%B8%8B%E8%BD%BD%E6%9F%90%E7%BD%91%E9%A1%B5%E7%9A%84%E6%89%80%E6%9C%89%E5%9B%BE%E7%89%87.html",{a:"xlc520",d:"2022-05-31T00:00:00.000Z",l:"2022年5月31日",c:["Python"],g:["Python"],e:`<h1> Python 批量下载某网页的所有图片</h1>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># requests是第三方库：用pip install requests安装</span>
<span class="token keyword">import</span> requests

<span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup

<span class="token comment"># 设置变量用于拼接网址</span>
page_number <span class="token operator">=</span> <span class="token number">4</span>

<span class="token comment"># 用while循环控制访问的网页</span>
<span class="token keyword">while</span> page_number <span class="token operator">&lt;</span> <span class="token number">8</span> <span class="token punctuation">:</span>

    <span class="token comment"># page_number = 4时，访问的是网址的第4页</span>
    html_url <span class="token operator">=</span> <span class="token string">'https://www.tukuppt.com/peitu/zonghe_0_0_0_0_0_0_{}.html'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>page_number<span class="token punctuation">)</span>

    <span class="token comment"># 用get函数发送网页请求</span>
    url_response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>html_url<span class="token punctuation">)</span>
    
    <span class="token comment"># 检验请求是否成功</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>url_response<span class="token punctuation">.</span>status_code<span class="token punctuation">)</span>

    <span class="token comment"># 解析请求到的网页内容</span>
    bs <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>url_response<span class="token punctuation">.</span>text<span class="token punctuation">,</span><span class="token string">'html.parser'</span><span class="token punctuation">)</span>
    <span class="token comment">#print(bs)</span>

    <span class="token comment"># 搜索网页中所有包含图片名称和图片链接的tag</span>
    <span class="token comment"># 得到一整个dl标签</span>
    picture_list <span class="token operator">=</span> bs<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">'dl'</span><span class="token punctuation">,</span>class_<span class="token operator">=</span><span class="token string">'cbox item'</span><span class="token punctuation">)</span>
    <span class="token comment">#print(picture_list)</span>

    <span class="token comment"># for 循环取出dl中的每一个标签</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> picture_list <span class="token punctuation">:</span>
        <span class="token comment"># 取出dl标签中的所有a标签中的第2个a标签</span>
        <span class="token comment"># [1]取到的是第2个标签</span>
        picture_list_a <span class="token operator">=</span> i<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">'a'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token comment">#print(picture_list_a)</span>

        <span class="token comment"># 取出图片名称：图片名称在img标签内属性为'alt'</span>
        picture_name <span class="token operator">=</span> picture_list_a<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'alt'</span><span class="token punctuation">]</span>
        <span class="token comment">#print(picture_name)</span>

        <span class="token comment"># 取出图片链接：图片链接在img标签内属性为'data-original'</span>
        picture_url_d <span class="token operator">=</span> picture_list_a<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">'img'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token string">'data-original'</span><span class="token punctuation">]</span>
        <span class="token comment">#print(picture_url_d)</span>
        
        <span class="token comment"># 完整的图片链接</span>
        picture_url <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token string">'https:'</span><span class="token operator">+</span>picture_url_d<span class="token punctuation">)</span>
        <span class="token comment">#print(picture_url)</span>

        <span class="token comment"># 访问图片链接</span>
        picture_url_response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>picture_url<span class="token punctuation">)</span>

        <span class="token comment"># 将访问的响应结果以二进制数据的形式返回</span>
        picture_content <span class="token operator">=</span> picture_url_response<span class="token punctuation">.</span>content

        <span class="token comment"># 图片内容以二进制形式写入</span>
        <span class="token keyword">with</span> <span class="token builtin">open</span> <span class="token punctuation">(</span><span class="token string">'.\\\\摄影图\\\\'</span><span class="token operator">+</span>picture_name<span class="token operator">+</span><span class="token string">'.jpg'</span><span class="token punctuation">,</span> <span class="token string">'wb'</span> <span class="token punctuation">)</span> <span class="token keyword">as</span> f <span class="token punctuation">:</span>
          
            <span class="token comment"># 将二进制数据写入文件</span>
            f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>picture_content<span class="token punctuation">)</span>
        <span class="token comment"># 用print查看代码运行步骤</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'《{}》已保存'</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>picture_name<span class="token punctuation">)</span><span class="token punctuation">)</span>

    page_number <span class="token operator">+=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'程序结束!'</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.35,words:405},y:"a",title:"Python 批量下载某网页的所有图片",i:"python"},["/dev/Python批量下载某网页的所有图片.html","/dev/Python%E6%89%B9%E9%87%8F%E4%B8%8B%E8%BD%BD%E6%9F%90%E7%BD%91%E9%A1%B5%E7%9A%84%E6%89%80%E6%9C%89%E5%9B%BE%E7%89%87","/dev/Python批量下载某网页的所有图片.md","/dev/Python%E6%89%B9%E9%87%8F%E4%B8%8B%E8%BD%BD%E6%9F%90%E7%BD%91%E9%A1%B5%E7%9A%84%E6%89%80%E6%9C%89%E5%9B%BE%E7%89%87.md"]],["v-7d0c470e","/dev/Python%E8%87%AA%E5%8A%A8%E5%8C%96%E5%8A%9E%E5%85%AC%E5%BA%93.html",{a:"xlc520",d:"2022-10-15T00:00:00.000Z",l:"2022年10月15日",c:["Java"],g:["Java"],e:`<h1> Python自动化办公库</h1>
<h2> <strong>Excel自动化库</strong></h2>
<p><strong>1.xlwings 库</strong></p>
<p>官网：</p>
<p><a href="https://www.xlwings.org/" target="_blank" rel="noopener noreferrer">https://www.xlwings.org/</a></p>
<p>特点：xlwings 是开源且免费的，预装了 Anaconda 和 WinPython，可在 Windows 和 macOS 上运行。通过 Python 脚本或 Jupyter notebook 自动化 Excel，通过宏从 Excel 调用 Python，并编写用户定义的函数（UDF 仅适用于 Windows）</p>`,r:{minutes:8.4,words:2519},y:"a",title:"Python自动化办公库",i:"java"},["/dev/Python自动化办公库.html","/dev/Python%E8%87%AA%E5%8A%A8%E5%8C%96%E5%8A%9E%E5%85%AC%E5%BA%93","/dev/Python自动化办公库.md","/dev/Python%E8%87%AA%E5%8A%A8%E5%8C%96%E5%8A%9E%E5%85%AC%E5%BA%93.md"]],["v-18aae998","/dev/Quartz%E4%BB%BB%E5%8A%A1%E8%B0%83%E5%BA%A6%E6%A1%86%E6%9E%B6%E6%95%B4%E5%90%88%E4%BD%BF%E7%94%A8.html",{a:"xlc520",d:"2022-06-01T00:00:00.000Z",l:"2022年6月1日",c:["Java"],g:["Java"],e:`<h1> Quartz - 任务调度框架整合使用</h1>
<figure><img src="https://static.xlc520.ml/blogImage/640-16535411548287.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure>
<p>各种实现自定义定时任务的方案，从Quartz到Xxl-job，再到Elastic-job，能聊的都聊了一圈儿；刚刚好手头有一份关于 Quartz 的保姆级教程，在这里分享给大家；</p>
<h2> 1前言</h2>
<p>项目中遇到一个，需要 客户自定任务启动时间 的需求。原来一直都是在项目里硬编码一些定时器，所以没有学习过。</p>`,r:{minutes:15.11,words:4534},y:"a",title:"Quartz - 任务调度框架整合使用",i:"java"},["/dev/Quartz任务调度框架整合使用.html","/dev/Quartz%E4%BB%BB%E5%8A%A1%E8%B0%83%E5%BA%A6%E6%A1%86%E6%9E%B6%E6%95%B4%E5%90%88%E4%BD%BF%E7%94%A8","/dev/Quartz任务调度框架整合使用.md","/dev/Quartz%E4%BB%BB%E5%8A%A1%E8%B0%83%E5%BA%A6%E6%A1%86%E6%9E%B6%E6%95%B4%E5%90%88%E4%BD%BF%E7%94%A8.md"]],["v-7445cd33","/dev/",{a:"xlc520",d:"2022-01-05T00:00:00.000Z",l:"2022年1月5日",c:["Java"],g:["Java"],e:`<p align="center"> 
  <img src="https://metrics.lecoq.io/xlc520?template=classic&amp;isocalendar=1&amp;languages=1&amp;people=1&amp;activity=1&amp;achievements=1&amp;lines=1&amp;repositories=1&amp;notable=1&amp;introduction=1&amp;pagespeed=1&amp;repositories=100&amp;repositories.batch=100&amp;repositories.forks=false&amp;repositories.affiliations=owner&amp;isocalendar.duration=full-year&amp;languages.limit=8&amp;languages.threshold=0%&amp;languages.colors=github&amp;languages.sections=most-used&amp;languages.indepth=false&amp;languages.analysis.timeout=15&amp;languages.categories=markup%2C programming&amp;languages.recent.categories=markup%2C programming&amp;languages.recent.load=300&amp;languages.recent.days=14&amp;people.limit=24&amp;people.identicons=false&amp;people.identicons.hide=false&amp;people.size=28&amp;people.types=followers%2C following&amp;people.shuffle=false&amp;activity.limit=5&amp;activity.load=300&amp;activity.days=14&amp;activity.visibility=all&amp;activity.timestamps=false&amp;activity.filter=all&amp;achievements.threshold=C&amp;achievements.secrets=true&amp;achievements.display=detailed&amp;achievements.limit=0&amp;notable.from=organization&amp;notable.repositories=false&amp;notable.indepth=false&amp;notable.types=commit&amp;repositories.featured= xlc520%2Fxlc520.github.io&amp;introduction.title=true&amp;pagespeed.url=xlc520.github.io&amp;pagespeed.detailed=false&amp;pagespeed.screenshot=false&amp;config.timezone=Asia%2FShanghai"> 
</p>`,r:{minutes:.54,words:163},y:"a",title:"Java",i:"java"},["/dev/index.html","/dev/README.md"]],["v-545738c8","/dev/Redis%E6%80%BB%E7%BB%93%EF%BC%9A%E7%BC%93%E5%AD%98%E9%9B%AA%E5%B4%A9%E3%80%81%E7%BC%93%E5%AD%98%E5%87%BB%E7%A9%BF%E3%80%81%E7%BC%93%E5%AD%98%E7%A9%BF%E9%80%8F.html",{a:"xlc520",d:"2022-04-25T00:00:00.000Z",l:"2022年4月25日",c:["Java"],g:["Java"],e:`<h1> Redis总结：缓存雪崩、缓存击穿、缓存穿透与缓存预热、缓存降级</h1>
<h2> 01 缓存雪崩</h2>
<h3> 1.1 什么是缓存雪崩？</h3>
<p>如果缓在某一个时刻出现大规模的key失效，那么就会导致大量的请求打在了数据库上面，导致数据库压力巨大，如果在高并发的情况下，可能瞬间就会导致数据库宕机。这时候如果运维马上又重启数据库，马上又会有新的流量把数据库打死。这就是缓存雪崩。</p>
<h3> 1.2 缓存雪崩问题分析</h3>
<p>造成缓存雪崩的关键在于同一时间的大规模的key失效，为什么会出现这个问题，主要有两种可能：第一种是Redis宕机，第二种可能就是采用了相同的过期时间。搞清楚原因之后，那么有什么解决方案呢？</p>`,r:{minutes:7.3,words:2190},y:"a",title:"Redis总结：缓存雪崩、缓存击穿、缓存穿透与缓存预热、缓存降级",i:"java"},["/dev/Redis总结：缓存雪崩、缓存击穿、缓存穿透.html","/dev/Redis%E6%80%BB%E7%BB%93%EF%BC%9A%E7%BC%93%E5%AD%98%E9%9B%AA%E5%B4%A9%E3%80%81%E7%BC%93%E5%AD%98%E5%87%BB%E7%A9%BF%E3%80%81%E7%BC%93%E5%AD%98%E7%A9%BF%E9%80%8F","/dev/Redis总结：缓存雪崩、缓存击穿、缓存穿透.md","/dev/Redis%E6%80%BB%E7%BB%93%EF%BC%9A%E7%BC%93%E5%AD%98%E9%9B%AA%E5%B4%A9%E3%80%81%E7%BC%93%E5%AD%98%E5%87%BB%E7%A9%BF%E3%80%81%E7%BC%93%E5%AD%98%E7%A9%BF%E9%80%8F.md"]],["v-0e6eab8e","/dev/RocketMQ%E7%AC%94%E8%AE%B0%EF%BC%9A%E5%BA%94%E7%94%A8%E5%AE%9E%E8%B7%B5.html",{a:"xlc520",d:"2022-11-26T00:00:00.000Z",l:"2022年11月26日",c:["Java"],g:["Java","RocketMQ","MQ"],e:`<h1> RocketMQ笔记：应用实践</h1>
<h3> 普通消息</h3>
<h5> 消息发送分类</h5>
<p>Producer对于消息的发送方式也有多种选择，不同的方式会产生不同的系统效果。</p>
<h6> 同步发送消息</h6>
<p>同步发送消息是指，Producer发出⼀条消息后，会在收到MQ返回的ACK之后才发下⼀条消息。该方式的消息可靠性最高，但消息发送效率太低。</p>
<figure><img src="https://static.xlc520.ml/blogImage/10329501-193ccbd53ee099bf-1669645258627-2.png" alt="RocketMQ" tabindex="0" loading="lazy"><figcaption>RocketMQ</figcaption></figure>`,r:{minutes:35.72,words:10716},y:"a",title:"RocketMQ笔记：应用实践",i:"java"},["/dev/RocketMQ笔记：应用实践.html","/dev/RocketMQ%E7%AC%94%E8%AE%B0%EF%BC%9A%E5%BA%94%E7%94%A8%E5%AE%9E%E8%B7%B5","/dev/RocketMQ笔记：应用实践.md","/dev/RocketMQ%E7%AC%94%E8%AE%B0%EF%BC%9A%E5%BA%94%E7%94%A8%E5%AE%9E%E8%B7%B5.md"]],["v-0c09d80a","/dev/Spring%20%E9%9D%A2%E8%AF%9563%E9%97%AE.html",{a:"xlc520",d:"2022-02-13T00:00:00.000Z",l:"2022年2月13日",c:["Java"],g:["Java"],e:`<h1> Spring 面试63问</h1>
<ul>
<li>
<p>Sping原理</p>
<p>Spring是一个轻量级Java开发框架，最早有Rod Johnson创建，目的是为了解决企业级应用开发的业务逻辑层和其他各层的耦合问题。它是一个分层的JavaSE/JavaEE full-stack（一站式）轻量级开源框架，为开发Java应用程序提供全面的基础架构支持。Spring负责基础架构，因此Java开发者可以专注于应用程序的开发。</p>
<p>Spring是一个全面的、企业应用开发一站式的解决方案，贯穿表现层、业务层、持久层。但是它仍然可以和其他的框架无缝整合。</p>
<h3> Spring 特点</h3>
<p><strong>轻量级：</strong> 组件大小与开销两方面而言Spring都是轻量的。完整的Spring框架可以在一个大小只有1M多的JAR文件中发布，并且Spring所需的处理开销也是微不足道的。此外，Spring是非侵入式，典型案例，Spring应用中的对象不依赖于Spring特定的类</p>
<p><strong>控制反转：</strong> Spring通过控制反转（IOC）技术实现解耦。一个对象依赖的其他对象会通过被动的方式传递进来，而不需要对象自己创建或者查找依赖。</p>
<p><strong>面向切面：</strong> 支持切面（AOP）编程，并且吧应用业务逻辑和系统服务区分开。</p>
<p><strong>容器：</strong> Spring包含并管理应用对象的配置和生命周期，在这个意义上它是一种容器。可以配置每个bean如何被创建、销毁，bean的作用范围是单例还是每次都生成一个新的实例，以及他们是如何相互关联。</p>
<p><strong>框架集合：</strong> 将简单的组件配置，组合成为复杂的框架；应用对象被申明式组合；提供许多基础功能（事务管理、持久化框架继承），提供应用逻辑开发接口</p>
<h3> Spring 框架优缺点</h3>
<h4> 优点</h4>
<ul>
<li>方便解耦，简化开发：Spring就是一个大工厂，可以将所有对象的创建和依赖关系的维护，交给Spring管理。</li>
<li>AOP编程的支持：Spring提供面向切面编程，可以方便的实现对程序进行权限拦截、运行监控等功能。</li>
<li>声明式事务的支持：只需要通过配置就可以完成对事务的管理，而无需手动编程。</li>
<li>方便程序的测试：Spring对Junit4支持，可以通过注解方便的测试Spring程序。</li>
<li>方便集成各种优秀框架：Spring不排斥各种优秀的开源框架，其内部提供了对各种优秀框架的直接支持（如：Struts、Hibernate、MyBatis等）。</li>
<li>降低JavaEE API的使用难度：Spring对JavaEE开发中非常难用的一些API（JDBC、JavaMail、远程调用等），都提供了封装，使这些API应用难度大大降低。</li>
</ul>
<h4> 缺点</h4>
<ul>
<li>Spring依赖反射，反射影响性能</li>
<li>使用门槛升高，入门Spring需要较长时间</li>
</ul>
<h3> Spring 框架中都用到了哪些设计模式</h3>
<p>Spring 框架中使用到了大量的设计模式，下面列举了比较有代表性的：</p>
<ul>
<li><code>代理模式</code>—在 AOP 和 remoting 中被用的比较多。</li>
<li><a href="https://blog.csdn.net/sufu1065/article/details/122872239" target="_blank" rel="noopener noreferrer"><code>单例模式</code></a>—在 spring 配置文件中定义的 bean 默认为单例模式。</li>
<li><code>模板方法</code>—用来解决代码重复的问题。比如. RestTemplate, JmsTemplate, JpaTempl ate。</li>
<li><code>前端控制器</code>—Spring 提供了 DispatcherServlet 来对请求进行分发。</li>
<li><code>视图帮助(View Helper )</code>—Spring 提供了一系列的 JSP 标签，高效宏来辅助将分散的代码整合在视图里。</li>
<li><code>依赖注入</code>—贯穿于 BeanFactory / ApplicationContext 接口的核心理念。</li>
<li><code>工厂模式</code>—BeanFactory 用来创建对象的实例</li>
</ul>
<h3> Spring核心组件</h3>
<p>Spring 总共大约有 20 个模块， 由 1300 多个不同的文件构成。而这些组件被分别整合在核心容器（Core Container） 、 AOP（Aspect Oriented Programming）和设备支持（Instrmentation） 、数据访问与集成（Data Access/Integeration） 、 Web、 消息（Messaging） 、 Test等 6 个模块中。以下是 Spring 5 的模块结构图：</p>
<figure><img src="https://img-blog.csdnimg.cn/img_convert/893a32f9ecd60a71e72fd247e0d7bc1c.png" alt="893a32f9ecd60a71e72fd247e0d7bc1c.png" tabindex="0" loading="lazy"><figcaption>893a32f9ecd60a71e72fd247e0d7bc1c.png</figcaption></figure>
<ul>
<li><code>spring core</code>：提供了框架的基本组成部分，包括控制反转（Inversion of Control，IOC）和依赖注入（Dependency Injection，DI）功能。</li>
<li><code>spring beans</code>：提供了BeanFactory，是工厂模式的一个经典实现，Spring将管理对象称为Bean。</li>
<li><code>spring context</code>：构建于 core 封装包基础上的 context 封装包，提供了一种框架式的对象访问方法。</li>
<li><code>spring jdbc</code>：提供了一个JDBC的抽象层，消除了烦琐的JDBC编码和数据库厂商特有的错误代码解析， 用于简化JDBC。</li>
<li><code>spring aop</code>：提供了面向切面的编程实现，让你可以自定义拦截器、切点等。</li>
<li><code>spring Web</code>：提供了针对 Web 开发的集成特性，例如文件上传，利用 servlet listeners 进行 ioc 容器初始化和针对 Web 的 ApplicationContext。</li>
<li><code>spring test</code>：主要为测试提供支持的，支持使用JUnit或TestNG对Spring组件进行单元测试和集成测试。</li>
</ul>
<h3> Spring 控制反转（IOC）</h3>
<h4> 控制反转（IOC）概念</h4>
<p>控制反转即IOC (Inversion of Control)，它把传统上由程序代码直接操控的对象的调用权交给容器，通过容器来实现对象组件的装配和管理。</p>
<p>Spring 通过一个配置文件描述 Bean 及 Bean 之间的依赖关系，利用 Java 语言的反射功能(依赖注入DI)实例化 Bean 并建立 Bean 之间的依赖关系。Spring 的 IoC 容器在完成这些底层工作的基础上，还提供 了 Bean 实例缓存、生命周期管理、 Bean 实例代理、事件发布、资源装载等高级服务。</p>
<h4> Spring 容器高层视图</h4>
<p>Spring 启动时读取应用程序提供的 Bean 配置信息，并在 Spring 容器中生成一份相应的 Bean 配</p>
<p>置注册表，然后根据这张注册表实例化 Bean，装配好 Bean 之间的依赖关系，为上层应用提供准</p>
<p>备就绪的运行环境。其中 Bean 缓存池为 HashMap 实现</p>
<figure><img src="https://img-blog.csdnimg.cn/img_convert/355d105ac37a91dee72b8a4195844e0d.png" alt="355d105ac37a91dee72b8a4195844e0d.png" tabindex="0" loading="lazy"><figcaption>355d105ac37a91dee72b8a4195844e0d.png</figcaption></figure>
<h3> IOC 容器实现</h3>
<h4> BeanFactory-框架基础设施</h4>
<p>BeanFactory 是 Spring 框架的基础设施，面向 Spring 本身；</p>
<p>ApplicationContext 面向使用Spring 框架的开发者，几乎所有的应用场合我们都直接使用 ApplicationContext 而非底层的 BeanFactory。</p>
<figure><img src="https://img-blog.csdnimg.cn/img_convert/ca21e934e8b5c9738300fa4c8003c789.png" alt="ca21e934e8b5c9738300fa4c8003c789.png" tabindex="0" loading="lazy"><figcaption>ca21e934e8b5c9738300fa4c8003c789.png</figcaption></figure>
<ul>
<li><strong>BeanDefinitionRegistry 注册表</strong>：Spring 配置文件中每一个节点元素在 Spring 容器里都通过一个 BeanDefinition 对象表示，它描述了 Bean 的配置信息。而 BeanDefinitionRegistry 接口提供了向容器手工注册BeanDefinition 对象的方法。</li>
<li><strong>BeanFactory 顶层接口</strong>：位于类结构树的顶端 ，它最主要的方法就是 getBean(String beanName)，该方法从容器中返回特定名称的 Bean，BeanFactory 的功能通过其他的接口得到不断扩展：</li>
<li><strong>ListableBeanFactory</strong>：该接口定义了访问容器中 Bean 基本信息的若干方法，如查看 Bean 的个数、获取某一类型Bean 的配置名、查看容器中是否包括某一 Bean 等方法；</li>
<li><strong>HierarchicalBeanFactory 父子级</strong>：父子级联 IoC 容器的接口，子容器可以通过接口方法访问父容器；通过HierarchicalBeanFactory 接口， Spring 的 IoC 容器可以建立父子层级关联的容器体系，子容器可以访问父容器中的 Bean，但父容器不能访问子容器的 Bean。Spring 使用父子容器实现了很多功能，比如在 Spring MVC 中，展现层 Bean 位于一个子容器中，而业务层和持久层的 Bean 位于父容器中。这样，展现层 Bean 就可以引用业务层和持久层的 Bean，而业务层和持久层的 Bean 则看不到展现层的 Bean。</li>
<li><strong>ConfigurableBeanFactory</strong>：是一个重要的接口，增强了 IoC 容器的可定制性，它定义了设置类装载器、属性编辑器、容器初始化后置处理器等方法；</li>
<li><strong>AutowireCapableBeanFactory 自动装配</strong>：定义了将容器中的 Bean 按某种规则（如按名字匹配、按类型匹配等）进行自动装配的方法；</li>
<li><strong>SingletonBeanRegistry 运行期间注册单例 Bean</strong>：定义了允许在运行期间向容器注册单实例 Bean 的方法；对于单实例（ singleton）的 Bean 来说，BeanFactory 会缓存 Bean 实例，所以第二次使用 getBean() 获取 Bean 时将直接从IoC 容器的缓存中获取 Bean 实例。Spring 在 DefaultSingletonBeanRegistry 类中提供了一个用于缓存单实例 Bean 的缓存器，它是一个用 HashMap 实现的缓存器，单实例的 Bean 以beanName 为键保存在这个 HashMap 中。</li>
<li><strong>依赖日志框架</strong>：在初始化 BeanFactory 时，必须为其提供一种日志框架，比如使用 Log4J， 即在类路径下提供 Log4J 配置文件，这样启动 Spring 容器才不会报错。</li>
</ul>
<h3> ApplicationContext 面向开发应用</h3>
<p>ApplicationContext 由 BeanFactory 派生而来，提供了更多面向实际应用的功能。</p>
<p>ApplicationContext 继承了 HierarchicalBeanFactory 和 ListableBeanFactory 接口，在此基础</p>
<p>上，还通过多个其他的接口扩展了 BeanFactory 的功能：</p>
<figure><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/9c9a78edbc6b9d2f3f849cbcfd3917ae.png" alt="9c9a78edbc6b9d2f3f849cbcfd3917ae.png" tabindex="0" loading="lazy"><figcaption>9c9a78edbc6b9d2f3f849cbcfd3917ae.png</figcaption></figure>
<ul>
<li>ClassPathXmlApplicationContext：默认从类路径加载配置文件</li>
<li>FileSystemXmlApplicationContext：默认从文件系统中装载配置文件</li>
<li>ApplicationEventPublisher：让容器拥有发布应用上下文事件的功能，包括容器启动事件、关闭事件等。</li>
<li>MessageSource：为应用提供 i18n 国际化消息访问的功能；</li>
<li>ResourcePatternResolver ：所有 ApplicationContext 实现类都实现了类似于</li>
<li>PathMatchingResourcePatternResolver：通过带前缀的 Ant 风格的资源文件路径装载 Spring 的配置文件。</li>
<li>LifeCycle：该接口是 Spring 2.0 加入的，该接口提供了 start()和 stop()两个方法，主要用于控制异步处理过程。在具体使用时，该接口同时被 ApplicationContext 实现及具体Bean 实现， ApplicationContext 会将 start/stop 的信息传递给容器中所有实现了该接口的 Bean，以达到管理和控制 JMX、任务调度等目的。</li>
<li>ConfigurableApplicationContext ：扩展于 ApplicationContext，它新增加了两个主要的方法：refresh()和 close()，让 ApplicationContext 具有启动、刷新和关闭应用上下文的能力。在应用上下文关闭的情况下调用 refresh()即可启动应用上下文，在已经启动的状态下，调用 refresh()则清除缓存并重新装载配置信息，而调用 close()则可关闭应用上下文。</li>
</ul>
<h3> BeanFactory 和 ApplicationContext有什么区别？</h3>
<p>BeanFactory和ApplicationContext是Spring的两大核心接口，都可以当做Spring的容器。其中ApplicationContext是BeanFactory的子接口。</p>
<h4> 依赖关系</h4>
<p>BeanFactory：是Spring里面最底层的接口，包含了各种Bean的定义，读取bean配置文档，管理bean的加载、实例化，控制bean的生命周期，维护bean之间的依赖关系。</p>
<p>ApplicationContext：接口作为BeanFactory的派生，除了提供BeanFactory所具有的功能外，还提供了更完整的框架功能：</p>
<ul>
<li>继承MessageSource，因此支持国际化。</li>
<li>统一的资源文件访问方式。</li>
<li>提供在监听器中注册bean的事件。</li>
<li>同时加载多个配置文件。</li>
<li>载入多个（有继承关系）上下文 ，使得每一个上下文都专注于一个特定的层次，比如应用的web层。</li>
</ul>
<h4> 加载方式</h4>
<p>BeanFactroy：采用的是延迟加载形式来注入Bean的，即只有在使用到某个Bean时(调getBean())，才对该Bean进行加载实例化。这样，我们就不能发现一些存在的Spring的配置问题。如果Bean的某一个属性没有注入，BeanFacotry加载后，直至第一次使用调用getBean方法才会抛出异常。</p>
<p>ApplicationContext：它是在容器启动时，一次性创建了所有的Bean。这样，在容器启动时，我们就可以发现Spring中存在的配置错误，这样有利于检查所依赖属性是否注入。ApplicationContext启动后预载入所有的单实例Bean，通过预载入单实例bean ,确保当你需要的时候，你就不用等待，因为它们已经创建好了。</p>
<p>相对于基本的BeanFactory，ApplicationContext 唯一的不足是占用内存空间。当应用程序配置Bean较多时，程序启动较慢。</p>
<h4> 创建方式</h4>
<p>BeanFactory通常以编程的方式被创建，ApplicationContext还能以声明的方式创建，如使用ContextLoader。</p>
<h4> 注册方式</h4>
<p>BeanFactory和ApplicationContext都支持BeanPostProcessor、BeanFactoryPostProcessor的使用，但两者之间的区别是：BeanFactory需要手动注册，而ApplicationContext则是自动注册。</p>
<h4> ApplicationContext通常的实现</h4>
<ul>
<li>FileSystemXmlApplicationContext ：此容器从一个XML文件中加载beans的定义，XML Bean 配置文件的全路径名必须提供给它的构造函数。</li>
<li>ClassPathXmlApplicationContext：此容器也从一个XML文件中加载beans的定义，这里，你需要正确设置classpath因为这个容器将在classpath里找bean配置。</li>
<li>WebXmlApplicationContext：此容器加载一个XML文件，此文件定义了一个WEB应用的所有bean。</li>
</ul>
<h3> Spring的依赖注入</h3>
<p>其主要实现方式有两种：依赖注入和依赖查找。</p>
<p><strong>依赖注入：</strong> 相对于IoC而言，依赖注入(DI)更加准确地描述了IoC的设计理念。所谓依赖注入（Dependency Injection），即组件之间的依赖关系由容器在应用系统运行期来决定，也就是由容器动态地将某种依赖关系的目标对象实例注入到应用系统中的各个关联的组件之中。组件不做定位查询，只提供普通的Java方法让容器去决定依赖关系。</p>
<h4> 依赖注入的基本原则</h4>
<p>应用组件不应该负责查找资源或者其他依赖的协作对象。配置对象的工作应该由IoC容器负责，“查找资源”的逻辑应该从应用组件的代码中抽取出来，交给IoC容器负责。容器全权负责组件的装配，它会把符合依赖关系的对象通过属性（JavaBean中的setter）或者是构造器传递给需要的对象。</p>
<p><strong>依赖注入优势</strong></p>
<p>依赖注入之所以更流行是因为它是一种更可取的方式：让容器全权负责依赖查询，受管组件只需要暴露JavaBean的setter方法或者带参数的构造器或者接口，使容器可以在初始化时组装对象的依赖关系。其与依赖查找方式相比，主要优势为：</p>
<ul>
<li>查找定位操作与应用代码完全无关</li>
<li>不依赖于容器的API，可以很容易地在任何容器以外使用应用对象</li>
<li>不需要特殊的接口，绝大多数对象可以做到完全不必依赖容器</li>
</ul>
<p><strong>依赖注入实现方式</strong></p>
<p>依赖注入是时下最流行的IoC实现方式，依赖注入分为接口注入（Interface Injection），Setter方法注入（Setter Injection）和构造器注入（Constructor Injection）三种方式。其中接口注入由于在灵活性和易用性比较差，现在从Spring4开始已被废弃。</p>
<ul>
<li>构造器依赖注入：构造器依赖注入通过容器触发一个类的构造器来实现的，该类有一系列参数，每个参数代表一个对其他类的依赖</li>
<li>Setter方法注入：Setter方法注入是容器通过调用无参构造器或无参static工厂 方法实例化bean之后，调用该bean的setter方法，即实现了基于setter的依赖注入</li>
</ul>
<h3> 构造器依赖注入和 Setter方法注入的区别</h3>
<figure><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/59c181416a4997b4f05d2446e3ff6f08.png" alt="59c181416a4997b4f05d2446e3ff6f08.png" tabindex="0" loading="lazy"><figcaption>59c181416a4997b4f05d2446e3ff6f08.png</figcaption></figure>
<p>两种依赖方式都可以使用，构造器注入和Setter方法注入。最好的解决方案是用构造器参数实现强制依赖，setter方法实现可选依赖。</p>
<h3> WebApplication 体系架构</h3>
<p>WebApplicationContext 是专门为 Web 应用准备的，它允许从相对于 Web 根目录的路径中装载配置文件完成初始化工作。从 WebApplicationContext 中可以获得ServletContext 的引用，整个 Web 应用上下文对象将作为属性放置到 ServletContext 中，以便 Web 应用环境可以访问 Spring 应用上下文。</p>
<figure><img src="https://img-blog.csdnimg.cn/img_convert/0d58667ed73f47e65be170d3a114d94c.png" alt="0d58667ed73f47e65be170d3a114d94c.png" tabindex="0" loading="lazy"><figcaption>0d58667ed73f47e65be170d3a114d94c.png</figcaption></figure>
<h3> Spring Bean 定义</h3>
<p>一个Spring Bean 的定义包含容器必知的所有配置元数据，包括如何创建一个bean，它的生命周期详情及它的依赖。</p>
<ul>
<li>Spring元数据配置方式</li>
<li>XML配置文件</li>
<li>基于注解的配置</li>
<li>基于java的配置</li>
</ul>
<h3> Spring Bean 作用域</h3>
<p>Spring 3 中为 Bean 定义了 5 中作用域，分别为 singleton（单例）、prototype（原型）、request、session 和 global session，5 种作用域说明如下：</p>
<ul>
<li><strong>singleton</strong>：单例模式（多线程下不安全）。Spring IoC 容器中只会存在一个共享的 Bean 实例，无论有多少个Bean 引用它，始终指向同一对象。该模式在多线程下是不安全的。Singleton 作用域是Spring 中的缺省作用域，也可以显示的将 Bean 定义为 singleton 模式，配置为：</li>
<li><strong>prototype</strong>:原型模式每次使用时创建。每次通过 Spring 容器获取 prototype 定义的 bean 时，容器都将创建一个新的 Bean 实例，每个 Bean 实例都有自己的属性和状态，而 singleton 全局只有一个对象。根据经验，对有状态的bean使用prototype作用域，而对无状态的bean使用singleton 作用域。</li>
<li><strong>Request</strong>：一次 request 一个实例。在一次 Http 请求中，容器会返回该 Bean 的同一实例。而对不同的 Http 请求则会产生新的 Bean，而且该 bean 仅在当前 Http Request 内有效,当前 Http 请求结束，该 bean实例也将会被销毁。</li>
<li><strong>session</strong>：在一次 Http Session 中，容器会返回该 Bean 的同一实例。而对不同的 Session 请求则会创建新的实例，该 bean 实例仅在当前 Session 内有效。同 Http 请求相同，每一次session 请求创建新的实例，而不同的实例之间不共享属性，且实例仅在自己的 session 请求内有效，请求结束，则实例将被销毁。</li>
<li><strong>global Session</strong>：在一个全局的 Http Session 中，容器会返回该 Bean 的同一个实例，仅在使用 portlet context 时有效。</li>
</ul>
<h3> Spring处理线程并发问题</h3>
<p>在一般情况下，只有无状态的Bean才可以在多线程环境下共享，在Spring中，绝大部分Bean都可以声明为singleton作用域，因为Spring对一些Bean中非线程安全状态采用ThreadLocal进行处理，解决线程安全问题。</p>
<p>ThreadLocal和线程同步机制都是为了解决多线程中相同变量的访问冲突问题。同步机制采用了“时间换空间”的方式，仅提供一份变量，不同的线程在访问前需要获取锁，没获得锁的线程则需要排队。而ThreadLocal采用了“空间换时间”的方式。</p>
<p>ThreadLocal会为每一个线程提供一个独立的变量副本，从而隔离了多个线程对数据的访问冲突。因为每一个线程都拥有自己的变量副本，从而也就没有必要对该变量进行同步了。ThreadLocal提供了线程安全的共享对象，在编写多线程代码时，可以把不安全的变量封装进ThreadLocal。</p>
<h3> Spring Bean 生命周期</h3>
<figure><img src="https://img-blog.csdnimg.cn/img_convert/63a7c3663fa56e9acf085898f0266cd1.png" alt="63a7c3663fa56e9acf085898f0266cd1.png" tabindex="0" loading="lazy"><figcaption>63a7c3663fa56e9acf085898f0266cd1.png</figcaption></figure>
<p><strong>实例化</strong></p>
<ol>
<li>实例化一个 Bean，也就是我们常说的 new。</li>
</ol>
<p><strong>IOC 依赖注入</strong></p>
<ol>
<li>按照 Spring 上下文对实例化的 Bean 进行配置，也就是 IOC 注入。</li>
</ol>
<p><strong>setBeanName 实现</strong></p>
<ol>
<li>如果这个 Bean 已经实现了 BeanNameAware 接口，会调用它实现的 <code>setBeanName(String)</code>方法，此处传递的就是 Spring 配置文件中 Bean 的 id 值</li>
</ol>
<p><strong>BeanFactoryAware 实现</strong></p>
<ol>
<li>如果这个 Bean 已经实现了 BeanFactoryAware 接口，会调用它实现的 setBeanFactory，</li>
</ol>
<p><code>setBeanFactory(BeanFactory)</code>传递的是 Spring 工厂自身（可以用这个方式来获取其它 Bean，只需在 Spring 配置文件中配置一个普通的 Bean 就可以）。</p>
<p><strong>ApplicationContextAware 实现</strong></p>
<ol>
<li>如果这个 Bean 已经实现了 ApplicationContextAware 接口，会调用<code>setApplicationContext(ApplicationContext)</code>方法，传入 Spring 上下文（同样这个方式也可以实现步骤 4 的内容，但比 4 更好，因为 ApplicationContext 是 BeanFactory 的子接口，有更多的实现方法）</li>
</ol>
<p><strong>postProcessBeforeInitialization 接口实现-初始化预处理</strong></p>
<ol>
<li>如果这个 Bean 关联了 BeanPostProcessor 接口，将会调用<code>postProcessBeforeInitialization(Object obj, String s)</code>方法，BeanPostProcessor 经常被用作是 Bean 内容的更改，并且由于这个是在 Bean 初始化结束时调用那个的方法，也可以被应用于内存或缓存技术。</li>
</ol>
<p><strong>init-method</strong></p>
<ol>
<li>如果 Bean 在 Spring 配置文件中配置了 init-method 属性会自动调用其配置的初始化方法。</li>
</ol>
<p><strong>postProcessAfterInitialization</strong></p>
<ol>
<li>如果这个 Bean 关联了 BeanPostProcessor 接口，将会调用<code>postProcessAfterInitialization(Object obj, String s)</code>方法。</li>
</ol>
<blockquote>
<p>注：以上工作完成以后就可以应用这个 Bean 了，那这个 Bean 是一个 Singleton 的，所以一般情况下我们调用同一个 id 的 Bean 会是在内容地址相同的实例，当然在 Spring 配置文件中也可以配置非 Singleton。</p>
</blockquote>
<p><strong>Destroy 过期自动清理阶段</strong></p>
<ol>
<li>当 Bean 不再需要时，会经过清理阶段，如果 Bean 实现了 DisposableBean 这个接口，会调用那个其实现的 destroy()方法；</li>
</ol>
<p><strong>destroy-method 自配置清理</strong></p>
<ol>
<li>最后，如果这个 Bean 的 Spring 配置中配置了 <code>destroy-method</code> 属性，会自动调用其配置的销毁方法。</li>
</ol>
<h3> bean生命周期方法</h3>
<p>bean 标签有两个重要的属性（<code>init-method</code> 和 <code>destroy-method</code>）。用它们你可以自己定制</p>
<p>初始化和注销方法。它们也有相应的注解（<code>@PostConstruct</code> 和<code>@PreDestroy</code>）。</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token operator">&lt;</span>bean id<span class="token operator">=</span><span class="token string">""</span> class<span class="token operator">=</span><span class="token string">""</span> init<span class="token operator">-</span>method<span class="token operator">=</span><span class="token string">"初始化方法"</span> destroy<span class="token operator">-</span>method<span class="token operator">=</span><span class="token string">"销毁方法"</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3> 什么是Spring的内部bean？什么是Spring inner beans？</h3>
<p>在Spring框架中，当一个bean仅被用作另一个bean的属性时，它能被声明为一个内部bean。</p>
<p>内部bean可以用setter注入“属性”和构造方法注入“构造参数”的方式来实现，内部bean通常是匿名的，它们的Scope一般是prototype。</p>
<p>Spring 依赖注入四种方式构造器注入</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token comment">/*带参数，方便利用构造器进行注入*/</span>



 



 public <span class="token function">CatDaoImpl</span><span class="token punctuation">(</span>String message<span class="token punctuation">)</span><span class="token punctuation">{</span>



 



 this<span class="token punctuation">.</span> message <span class="token operator">=</span> message<span class="token punctuation">;</span>



 



 <span class="token punctuation">}</span>
<span class="token operator">&lt;</span>bean id<span class="token operator">=</span><span class="token string">"CatDaoImpl"</span> class<span class="token operator">=</span><span class="token string">"com.CatDaoImpl"</span><span class="token operator">&gt;</span>



 



<span class="token operator">&lt;</span>constructor<span class="token operator">-</span>arg value<span class="token operator">=</span><span class="token string">" message "</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>constructor<span class="token operator">-</span>arg<span class="token operator">&gt;</span>



 



<span class="token operator">&lt;</span><span class="token operator">/</span>bean<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>setter 方法注入</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>public class Id <span class="token punctuation">{</span>



 



 private <span class="token builtin">int</span> id<span class="token punctuation">;</span>



 



 public <span class="token builtin">int</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> id<span class="token punctuation">;</span> <span class="token punctuation">}</span>



 



 public void <span class="token function">setId</span><span class="token punctuation">(</span><span class="token builtin">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span> this<span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span> <span class="token punctuation">}</span>



 



<span class="token punctuation">}</span>
<span class="token operator">&lt;</span>bean id<span class="token operator">=</span><span class="token string">"id"</span> class<span class="token operator">=</span><span class="token string">"com.id "</span><span class="token operator">&gt;</span> <span class="token operator">&lt;</span>property name<span class="token operator">=</span><span class="token string">"id"</span> value<span class="token operator">=</span><span class="token string">"123"</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>property<span class="token operator">&gt;</span> <span class="token operator">&lt;</span><span class="token operator">/</span>bean<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>静态工厂注入</p>
<p>静态工厂顾名思义，就是通过调用静态工厂的方法来获取自己需要的对象，为了让 spring 管理所有对象，我们不能直接通过"工程类.静态方法()"来获取对象，而是依然通过 spring 注入的形式获取：</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>public class DaoFactory <span class="token punctuation">{</span> <span class="token comment">//静态工厂</span>



 



 public static final FactoryDao <span class="token function">getStaticFactoryDaoImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>



 



 <span class="token keyword">return</span> <span class="token builtin">new</span> <span class="token function">StaticFacotryDaoImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



 



 <span class="token punctuation">}</span>



 



<span class="token punctuation">}</span>



 



public class SpringAction <span class="token punctuation">{</span>



 



 private FactoryDao staticFactoryDao<span class="token punctuation">;</span> <span class="token comment">//注入对象</span>



 



 <span class="token comment">//注入对象的 set 方法</span>



 



 public void <span class="token function">setStaticFactoryDao</span><span class="token punctuation">(</span>FactoryDao staticFactoryDao<span class="token punctuation">)</span> <span class="token punctuation">{</span>



 



 this<span class="token punctuation">.</span>staticFactoryDao <span class="token operator">=</span> staticFactoryDao<span class="token punctuation">;</span>



 



 <span class="token punctuation">}</span>



 



<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>factory<span class="token operator">-</span>method<span class="token operator">=</span><span class="token string">"getStaticFactoryDaoImpl"</span>指定调用哪个工厂方法<span class="token operator">--</span><span class="token operator">&gt;</span>



 



 <span class="token operator">&lt;</span>bean name<span class="token operator">=</span><span class="token string">"springAction"</span> class<span class="token operator">=</span><span class="token string">" SpringAction"</span> <span class="token operator">&gt;</span>



 



 <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>使用静态工厂的方法注入对象<span class="token punctuation">,</span>对应下面的配置文件<span class="token operator">--</span><span class="token operator">&gt;</span>



 



 <span class="token operator">&lt;</span>property name<span class="token operator">=</span><span class="token string">"staticFactoryDao"</span> ref<span class="token operator">=</span><span class="token string">"staticFactoryDao"</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>property<span class="token operator">&gt;</span>



 



 <span class="token operator">&lt;</span><span class="token operator">/</span>bean<span class="token operator">&gt;</span>



 



 <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>此处获取对象的方式是从工厂类中获取静态方法<span class="token operator">--</span><span class="token operator">&gt;</span>



 



<span class="token operator">&lt;</span>bean name<span class="token operator">=</span><span class="token string">"staticFactoryDao"</span> class<span class="token operator">=</span><span class="token string">"DaoFactory"</span>



 



factory<span class="token operator">-</span>method<span class="token operator">=</span><span class="token string">"getStaticFactoryDaoImpl"</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>bean<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例工厂</p>
<p>实例工厂的意思是获取对象实例的方法不是静态的，所以你需要首先 new 工厂类，再调用普通的实例方法：</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>public class DaoFactory <span class="token punctuation">{</span> <span class="token comment">//实例工厂</span>



 



 public FactoryDao <span class="token function">getFactoryDaoImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>



 



 <span class="token keyword">return</span> <span class="token builtin">new</span> <span class="token function">FactoryDaoImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



 



 



 <span class="token punctuation">}</span>



 



<span class="token punctuation">}</span>



 



public class SpringAction <span class="token punctuation">{</span>



 



 private FactoryDao factoryDao<span class="token punctuation">;</span> <span class="token comment">//注入对象</span>



 



 public void <span class="token function">setFactoryDao</span><span class="token punctuation">(</span>FactoryDao factoryDao<span class="token punctuation">)</span> <span class="token punctuation">{</span>



 



 this<span class="token punctuation">.</span>factoryDao <span class="token operator">=</span> factoryDao<span class="token punctuation">;</span>



 



 <span class="token punctuation">}</span>



 



<span class="token punctuation">}</span>
<span class="token operator">&lt;</span>bean name<span class="token operator">=</span><span class="token string">"springAction"</span> class<span class="token operator">=</span><span class="token string">"SpringAction"</span><span class="token operator">&gt;</span>



 



 <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>使用实例工厂的方法注入对象<span class="token punctuation">,</span>对应下面的配置文件<span class="token operator">--</span><span class="token operator">&gt;</span>



 



 <span class="token operator">&lt;</span>property name<span class="token operator">=</span><span class="token string">"factoryDao"</span> ref<span class="token operator">=</span><span class="token string">"factoryDao"</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>property<span class="token operator">&gt;</span>



 



 <span class="token operator">&lt;</span><span class="token operator">/</span>bean<span class="token operator">&gt;</span>



 



 <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>此处获取对象的方式是从工厂类中获取实例方法<span class="token operator">--</span><span class="token operator">&gt;</span>



 



<span class="token operator">&lt;</span>bean name<span class="token operator">=</span><span class="token string">"daoFactory"</span> class<span class="token operator">=</span><span class="token string">"com.DaoFactory"</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>bean<span class="token operator">&gt;</span>



 



<span class="token operator">&lt;</span>bean name<span class="token operator">=</span><span class="token string">"factoryDao"</span> factory<span class="token operator">-</span>bean<span class="token operator">=</span><span class="token string">"daoFactory"</span>



 



factory<span class="token operator">-</span>method<span class="token operator">=</span><span class="token string">"getFactoryDaoImpl"</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>bean<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3> 5 种不同方式的自动装配</h3>
<p>Spring 装配包括手动装配和自动装配，手动装配是有基于 xml 装配、构造方法、setter 方法等自动装配有五种自动装配的方式，可以用来指导 Spring 容器用自动装配方式来进行依赖注入。</p>
<ul>
<li><code>no</code>：默认的方式是不进行自动装配，通过显式设置 ref 属性来进行装配。</li>
<li><code>byName</code>：通过参数名 自动装配，Spring 容器在配置文件中发现 bean 的 autowire 属性被设置成 byName，之后容器试图匹配、装配和该 bean 的属性具有相同名字的 bean。</li>
<li><code>byType</code>：通过参数类型自动装配，Spring 容器在配置文件中发现 bean 的 autowire 属性被设置成 byType，之后容器试图匹配、装配和该 bean 的属性具有相同类型的 bean。如果有多个 bean 符合条件，则抛出错误。</li>
<li><code>constructor</code>：这个方式类似于 byType， 但是要提供给构造器参数，如果没有确定的带参数的构造器参数类型，将会抛出异常。</li>
<li><code>autodetect</code>：首先尝试使用 constructor 来自动装配，如果无法工作，则使用 byType 方式。</li>
</ul>
<h3> Spring 中注入一个 Java Collection</h3>
<p>Spring 提供了以下四种集合类的配置元素：</p>
<ul>
<li><code>&lt;list&gt;</code> : 该标签用来装配可重复的 list 值。</li>
<li><code>&lt;set&gt;</code> : 该标签用来装配没有重复的 set 值。</li>
<li><code>&lt;map&gt;</code>: 该标签可用来注入键和值可以为任何类型的键值对。</li>
<li><code>&lt;props&gt;</code> : 该标签支持注入键和值都是字符串类型的键值对。</li>
</ul>
<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code><span class="token operator">&lt;</span>beans<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> Definition <span class="token keyword">for</span> javaCollection <span class="token operator">--</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>bean id<span class="token operator">=</span><span class="token string">"javaCollection"</span> class<span class="token operator">=</span><span class="token string">"com.howtodoinjava.JavaCollection"</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>List <span class="token operator">--</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>property name<span class="token operator">=</span><span class="token string">"customList"</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>list<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>INDIA<span class="token operator">&lt;</span><span class="token operator">/</span>value<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>Pakistan<span class="token operator">&lt;</span><span class="token operator">/</span>value<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>USA<span class="token operator">&lt;</span><span class="token operator">/</span>value<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>UK<span class="token operator">&lt;</span><span class="token operator">/</span>value<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span><span class="token operator">/</span>list<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span><span class="token operator">/</span>property<span class="token operator">&gt;</span> 



 



 <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Set <span class="token operator">--</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>property name<span class="token operator">=</span><span class="token string">"customSet"</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>set<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>INDIA<span class="token operator">&lt;</span><span class="token operator">/</span>value<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>Pakistan<span class="token operator">&lt;</span><span class="token operator">/</span>value<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>USA<span class="token operator">&lt;</span><span class="token operator">/</span>value<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>value<span class="token operator">&gt;</span>UK<span class="token operator">&lt;</span><span class="token operator">/</span>value<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span><span class="token operator">/</span>set<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span><span class="token operator">/</span>property<span class="token operator">&gt;</span> 



 



 <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Map <span class="token operator">--</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>property name<span class="token operator">=</span><span class="token string">"customMap"</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span><span class="token keyword">map</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>entry key<span class="token operator">=</span><span class="token string">"1"</span> value<span class="token operator">=</span><span class="token string">"INDIA"</span><span class="token operator">/</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>entry key<span class="token operator">=</span><span class="token string">"2"</span> value<span class="token operator">=</span><span class="token string">"Pakistan"</span><span class="token operator">/</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>entry key<span class="token operator">=</span><span class="token string">"3"</span> value<span class="token operator">=</span><span class="token string">"USA"</span><span class="token operator">/</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>entry key<span class="token operator">=</span><span class="token string">"4"</span> value<span class="token operator">=</span><span class="token string">"UK"</span><span class="token operator">/</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">map</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span><span class="token operator">/</span>property<span class="token operator">&gt;</span> 



 



 <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>Properties <span class="token operator">--</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>property name<span class="token operator">=</span><span class="token string">"customProperies"</span><span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>props<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>prop key<span class="token operator">=</span><span class="token string">"admin"</span><span class="token operator">&gt;</span>admin@nospam<span class="token punctuation">.</span>com<span class="token operator">&lt;</span><span class="token operator">/</span>prop<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span>prop key<span class="token operator">=</span><span class="token string">"support"</span><span class="token operator">&gt;</span>support@nospam<span class="token punctuation">.</span>com<span class="token operator">&lt;</span><span class="token operator">/</span>prop<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span><span class="token operator">/</span>props<span class="token operator">&gt;</span> 



 <span class="token operator">&lt;</span><span class="token operator">/</span>property<span class="token operator">&gt;</span> 



 



 <span class="token operator">&lt;</span><span class="token operator">/</span>bean<span class="token operator">&gt;</span> 



<span class="token operator">&lt;</span><span class="token operator">/</span>beans<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3> 使用@Autowired注解自动装配的过程</h3>
<p>在使用@Autowired注解之前需要在Spring配置文件进行配置，<code>&lt;context:annotation-config /&gt;</code>。</p>
<p>在启动spring IoC时，容器自动装载了一个<code>AutowiredAnnotationBeanPostProcessor</code>后置处理器，当容器扫描到<code>@Autowied</code>、<code>@Resource</code>或<code>@Inject</code>时，就会在IoC容器自动查找需要的bean，并装配给该对象的属性。在使用<code>@Autowired</code>时，首先在容器中查询对应类型的bean：</p>
<ul>
<li>如果查询结果刚好为一个，就将该bean装配给<code>@Autowired</code>指定的数据；</li>
<li>如果查询的结果不止一个，那么<code>@Autowired</code>会根据名称来查找；</li>
<li>如果上述查找的结果为空，那么会抛出异常。解决方法时，使用<code>required=false</code>。</li>
</ul>
<h2> Spring AOP</h2>
<h3> AOP原理</h3>
<p>OOP(Object-Oriented Programming)面向对象编程，允许开发者定义纵向的关系，但并适用于定义横向的关系，导致了大量代码的重复，而不利于各个模块的重用。</p>
<p>AOP(Aspect-Oriented Programming)，一般称为面向切面编程，作为面向对象的一种补充，用于将那些与业务无关，但却对多个对象产生影响的公共行为和逻辑，抽取并封装为一个可重用的模块，这个模块被命名为“切面”（Aspect），减少系统中的重复代码，降低了模块间的耦合度，同时提高了系统的可维护性。</p>
<p>AOP 主要应用场景有</p>
<ul>
<li>Authentication 权限</li>
<li>Caching 缓存</li>
<li>Context passing 内容传递</li>
<li>Error handling 错误处理</li>
<li>Lazy loading 懒加载</li>
<li>Debugging 调试</li>
<li>logging, tracing, profiling and monitoring 记录跟踪 优化 校准</li>
<li>Performance optimization 性能优化</li>
<li>Persistence 持久化</li>
<li>Resource pooling 资源池</li>
<li>Synchronization 同步</li>
<li>Transactions 事务</li>
</ul>
<h3> AOP 核心概念</h3>
<ul>
<li>切面（aspect）：类是对物体特征的抽象，切面就是对横切关注点的抽象</li>
<li>横切关注点：对哪些方法进行拦截，拦截后怎么处理，这些关注点称之为横切关注点</li>
<li>连接点（joinpoint）：被拦截到的点，因为 Spring 只支持方法类型的连接点，所以在 Spring中连接点指的就是被拦截到的方法，实际上连接点还可以是字段或者构造器</li>
<li>切入点（pointcut）：对连接点进行拦截的定义</li>
<li>通知（advice）：所谓通知指的就是指拦截到连接点之后要执行的代码，通知分为前置、后置、异常、最终、环绕通知五类</li>
<li>目标对象：代理的目标对象</li>
<li>织入（weave）：将切面应用到目标对象并导致代理对象创建的过程
<ul>
<li>编译期：切面在目标类编译时被织入。AspectJ的织入编译器是以这种方式织入切面的；</li>
<li>类加载期：切面在目标类加载到JVM时被织入。需要特殊的类加载器，它可以在目标类被引入应用之前增强该目标类的字节码。AspectJ5的加载时织入就支持以这种方式织入切面；</li>
<li>运行期：切面在应用运行的某个时刻被织入。一般情况下，在织入切面时，AOP容器会为目标对象动态地创建一个代理对象。SpringAOP就是以这种方式织入切面。</li>
</ul>
</li>
<li>引入（introduction）：在不修改代码的前提下，引入可以在运行期为类动态地添加一些方法或字段</li>
</ul>
<h3> Spring 中的代理</h3>
<p>将 Advice 应用于目标对象后创建的对象称为代理。在客户端对象的情况下，目标对象和代理对象是相同的。</p>
<blockquote>
<p>Advice + Target Object = Proxy</p>
</blockquote>
<h3> AOP 实现方式</h3>
<p>AOP实现的关键在于代理模式，AOP代理主要分为静态代理和动态代理。</p>
<ul>
<li>AspectJ 静态代理的增强，所谓静态代理，就是AOP框架会在编译阶段生成AOP代理类，因此也称为编译时增强，他会在编译阶段将AspectJ(切面)织入到Java字节码中，运行的时候就是增强之后的AOP对象。</li>
<li>Spring AOP使用的动态代理，所谓的动态代理就是说AOP框架不会去修改字节码，而是每次运行时在内存中临时为方法生成一个AOP对象，这个AOP对象包含了目标对象的全部方法，并且在特定的切点做了增强处理，并回调原对象的方法。</li>
</ul>
<h3> AOP 两种代理方式</h3>
<p>Spring 提供了两种方式来生成代理对象: JDK Proxy 和 Cglib，具体使用哪种方式生成由AopProxyFactory 根据 AdvisedSupport 对象的配置来决定。默认的策略是如果目标类是接口，则使用 JDK 动态代理技术，否则使用 Cglib 来生成代理。</p>
<h3> JDK 动态接口代理</h3>
<p>JDK 动态代理主要涉及到 java.lang.reflect 包中的两个类：Proxy 和 InvocationHandler。</p>
<p>InvocationHandler是一个接口，通过实现该接口定义横切逻辑，并通过反射机制调用目标类的代码，动态将横切逻辑和业务逻辑编制在一起。</p>
<p>Proxy 利用 InvocationHandler 动态创建一个符合某一接口的实例，生成目标类的代理对象。</p>
<h3> CGLib 动态代理</h3>
<p>CGLib 全称为 Code Generation Library，是一个强大的高性能，高质量的代码生成类库，可以在运行期扩展 Java 类与实现 Java 接口，CGLib 封装了 asm，可以再运行期动态生成新的 class。和 JDK 动态代理相比较：JDK 创建代理有一个限制，就是只能为接口创建代理实例，而对于没有通过接口定义业务方法的类，则可以通过 CGLib 创建动态代理。</p>
<p>实现原理</p>
<div class="language-go line-numbers-mode" data-ext="go"><pre class="language-go"><code>@Aspect

public class TransactionDemo <span class="token punctuation">{</span>



 



 @<span class="token function">Pointcut</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">"execution(* com.yangxin.core.service.*.*.*(..))"</span><span class="token punctuation">)</span>



 



 public void <span class="token function">point</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>



 



 <span class="token punctuation">}</span>



 



 @<span class="token function">Before</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">"point()"</span><span class="token punctuation">)</span>



 



 public void <span class="token function">before</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>



 



 System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"transaction begin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



 



 <span class="token punctuation">}</span>



 



 @<span class="token function">AfterReturning</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"point()"</span><span class="token punctuation">)</span>



 



 public void <span class="token function">after</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>



 



 System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"transaction commit"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



 



 <span class="token punctuation">}</span>



 



 @<span class="token function">Around</span><span class="token punctuation">(</span><span class="token string">"point()"</span><span class="token punctuation">)</span>



 



 public void <span class="token function">around</span><span class="token punctuation">(</span>ProceedingJoinPoint joinPoint<span class="token punctuation">)</span> throws Throwable<span class="token punctuation">{</span>



 



 System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"transaction begin"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



 



 joinPoint<span class="token punctuation">.</span><span class="token function">proceed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



 



 System<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"transaction commit"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>



 



 <span class="token punctuation">}</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3> Spring在运行时通知对象</h3>
<p>通过在代理类中包裹切面，Spring在运行期把切面织入到Spring管理的bean中。代理封装了目标类，并拦截被通知方法的调用，再把调用转发给真正的目标bean。当代理拦截到方法调用时，在调用目标bean方法之前，会执行切面逻辑。</p>
<p>直到应用需要被代理的bean时，Spring才创建代理对象。如果使用的是ApplicationContext的话，在ApplicationContext从BeanFactory中加载所有bean的时候，Spring才会创建被代理的对象。因为Spring运行时才创建代理对象，所以我们不需要特殊的编译器来织入SpringAOP的切面。</p>
<h3> Spring只支持方法级别的连接点</h3>
<p>因为Spring基于动态代理，所以Spring只支持方法连接点。Spring缺少对字段连接点的支持，而且它不支持构造器连接点。方法之外的连接点拦截功能，我们可以利用Aspect来补充。</p>
<p>在Spring AOP 中，关注点和横切关注的区别是什么？在 spring aop 中 concern 和 cross-cutting concern 的不同之处</p>
<p>关注点（concern）是应用中一个模块的行为，一个关注点可能会被定义成一个我们想实现的一个功能。</p>
<p>横切关注点（cross-cutting concern）是一个关注点，此关注点是整个应用都会使用的功能，并影响整个应用，比如日志，安全和数据传输，几乎应用的每个模块都需要的功能。因此这些都属于横切关注点。</p>
<h3> Spring通知类型</h3>
<p>在AOP术语中，切面的工作被称为通知，实际上是程序执行时要通过SpringAOP框架触发的代码段。Spring切面可以应用5种类型的通知：</p>
<ul>
<li>前置通知（Before）：在目标方法被调用之前调用通知功能；</li>
<li>后置通知（After）：在目标方法完成之后调用通知，此时不会关心方法的输出是什么；</li>
<li>返回通知（After-returning ）：在目标方法成功执行之后调用通知；</li>
<li>异常通知（After-throwing）：在目标方法抛出异常后调用通知；</li>
<li>环绕通知（Around）：通知包裹了被通知的方法，在被通知的方法调用之前和调用之后执行自定义的行为。</li>
</ul>
<h4> 同一个aspect，不同advice的执行顺序：</h4>
<p>没有异常情况下的执行顺序：</p>
<ul>
<li>around before advice</li>
<li>before advice</li>
<li>target method 执行</li>
<li>around after advice</li>
<li>after advice</li>
<li>afterReturning</li>
</ul>
<p>有异常情况下的执行顺序：</p>
<ul>
<li>around before advice</li>
<li>before advice</li>
<li>target method 执行</li>
<li>around after advice</li>
<li>after advice</li>
<li>afterThrowing:异常发生</li>
<li>java.lang.RuntimeException: 异常发生</li>
</ul>
<h2> Spring MVC</h2>
<h3> Spring MVC 原理</h3>
<p>Spring 的模型-视图-控制器（MVC）框架是围绕一个 DispatcherServlet 来设计的，这个 Servlet会把请求分发给各个处理器，并支持可配置的处理器映射、视图渲染、本地化、时区与主题渲染等，甚至还能支持文件上传。</p>
<figure><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/73ee5a65e7e6e8a0733e3730a486a6e8.png" alt="73ee5a65e7e6e8a0733e3730a486a6e8.png" tabindex="0" loading="lazy"><figcaption>73ee5a65e7e6e8a0733e3730a486a6e8.png</figcaption></figure>
<p><strong>Http 请求到 DispatcherServlet</strong></p>
<p>(1) 客户端请求提交到 DispatcherServlet。</p>
<p><strong>HandlerMapping 寻找处理器</strong></p>
<p>(2) 由 DispatcherServlet 控制器查询一个或多个 HandlerMapping，找到处理请求的Controller。</p>
<p><strong>调用处理器 Controller</strong></p>
<p>(3) DispatcherServlet 将请求提交到 Controller。</p>
<p><strong>Controller 调用业务逻辑处理后，返回 ModelAndView</strong></p>
<p>(4)(5)调用业务处理和返回结果：Controller 调用业务逻辑处理后，返回 ModelAndView。</p>
<p><strong>DispatcherServlet 查询 ModelAndView</strong></p>
<p>(6)(7)处理视图映射并返回模型：DispatcherServlet 查询一个或多个 ViewResoler 视图解析器，找到 ModelAndView 指定的视图。</p>
<p><strong>ModelAndView 反馈浏览器 HTTP</strong></p>
<p>(8) Http 响应：视图负责将结果显示到客户端。</p>
<h2> Spring DATA</h2>
<h3> Spring ORM理解</h3>
<p>Spring 通过提供ORM模块，支持我们在直接JDBC之上使用一个对象/关系映射映射(ORM)工具，Spring 支持集成主流的ORM框架，如Hiberate，JDO和 iBATIS，JPA，TopLink，JDO，OJB 。Spring的事务管理同样支持以上所有ORM框架及JDBC。</p>
<p><strong>解释JDBC抽象和DAO模块</strong></p>
<p>通过使用JDBC抽象和DAO模块，保证数据库代码的简洁，并能避免数据库资源错误关闭导致的问题，它在各种不同的数据库的错误信息之上，提供了一个统一的异常访问层。它还利用Spring的AOP 模块给Spring应用中的对象提供事务管理服务。</p>
<h3> Spring DAO 的支持</h3>
<p>Spring DAO（数据访问对象） 使得 JDBC，Hibernate 或 JDO 这样的数据访问技术更容易以一种统一的方式工作。这使得用户容易在持久性技术之间切换。它还允许您在编写代码时，无需考虑捕获每种技术不同的异常。</p>
<h3> Spring JDBC API</h3>
<ul>
<li>JdbcTemplate</li>
<li>SimpleJdbcTemplate</li>
<li>NamedParameterJdbcTemplate</li>
<li>SimpleJdbcInsert</li>
<li>SimpleJdbcCall</li>
</ul>
<h3> JdbcTemplate是什么</h3>
<p>JdbcTemplate 类提供了很多便利的方法解决诸如把数据库数据转变成基本数据类型或对象，执行写好的或可调用的数据库操作语句，提供自定义的数据错误处理。</p>
<h3> 使用Spring通过什么方式访问Hibernate？</h3>
<p>有两种方式访问Hibernate：</p>
<ul>
<li>使用 Hibernate 模板和回调进行控制反转</li>
<li>扩展 HibernateDAOSupport 并应用 AOP 拦截器节点</li>
</ul>
<h3> Spring 支持的 ORM</h3>
<p>Spring 支持以下 ORM：</p>
<ul>
<li>Hibernate</li>
<li>iBatis</li>
<li>JPA (Java Persistence API)</li>
<li>TopLink</li>
<li>JDO (Java Data Objects)</li>
<li>OJB</li>
</ul>
<p><strong>如何通过 HibernateDaoSupport 将 Spring 和 Hibernate 结合起来？</strong></p>
<p>用 Spring 的 SessionFactory 调用 LocalSessionFactory。集成过程分三步：</p>
<ul>
<li>配置 the Hibernate SessionFactory</li>
<li>继承 HibernateDaoSupport</li>
<li>实现一个 DAO 在 AOP 支持的事务中装配</li>
</ul>
<h3> Spring 支持的事务管理类型</h3>
<p>Spring 支持两种类型的事务管理：</p>
<ul>
<li>编程式事务管理：这意味你通过编程的方式管理事务，给你带来极大的灵活性，但是 难维护。</li>
<li>声明式事务管理：这意味着你可以将业务代码和事务管理分离，你只需用注解和 XML 配置来管理事务。</li>
</ul>
<h3> Spring 框架的事务管理有哪些优点？</h3>
<p>它为不同的事务 API 如 JTA，JDBC，Hibernate，JPA 和 JDO，提供一个不变 的编程模式。</p>
<p>它为编程式事务管理提供了一套简单的 API 而不是一些复杂的事务 API 如 它支持声明式事务管理。它和 Spring 各种数据访问抽象层很好得集成。</p>
<h3> 你更倾向用那种事务管理类型？</h3>
<p>大多数 Spring 框架的用户选择声明式事务管理，因为它对应用代码的影响最小，因 此更符合一个无侵入的<a href="https://blog.csdn.net/sufu1065/article/details/122872239" target="_blank" rel="noopener noreferrer">轻量级容器</a>的思想。声明式事务管理要优于编程式事务管理， 虽然比编程式事务管理（这种方式允许你通过代码控制事务）少了一点灵活性。</p>
<h3> Spring常用注解</h3>
<h4> 声明bean的注解</h4>
<ul>
<li><code>@Component</code> ：组件，没有明确的角色</li>
<li><code>@Service</code> ：在业务逻辑层使用</li>
<li><code>@Repository</code> ：在数据访问层使用</li>
<li><code>@Controller</code> ：在展现层使用，控制层的声明</li>
<li><code>@RestController</code> ：<code>@Controller</code>和<code>@ResponseBody</code>组合，，控制层的声明</li>
</ul>
<h4> 注入bean的注解</h4>
<ul>
<li><code>@Autowired</code>：</li>
</ul>
<p>Spring自带的注解，通过<code>AutowiredAnnotationBeanPostProcessor</code> 类实现的依赖注入，作用在CONSTRUCTOR、METHOD、PARAMETER、FIELD、ANNOTATION_TYPE。默认是根据类型（byType ）进行自动装配的。如果有多个类型一样的Bean候选者，需要指定按照名称（byName ）进行装配，则需要配合@Qualifier。</p>
<p>指定名称后，如果Spring IOC容器中没有对应的组件bean抛出NoSuchBeanDefinitionException。也可以将@Autowired中required配置为false，如果配置为false之后，当没有找到相应bean的时候，系统不会抛异常</p>
<ul>
<li><code>@Inject</code>：</li>
</ul>
<p>JSR330 (Dependency Injection for Java)中的规范，需要导入javax.inject.Inject jar包 ，才能实现注入 作用CONSTRUCTOR、METHOD、FIELD上</p>
<p>根据类型进行自动装配的，如果需要按名称进行装配，则需要配合@Named</p>
<ul>
<li><code>@Resource</code>：</li>
</ul>
<p>JSR250规范的实现，在javax.annotation包下，作用TYPE、FIELD、METHOD上。</p>
<p>默认根据属性名称进行自动装配的，如果有多个类型一样的Bean候选者，则可以通过name进行指定进行注入</p>
<h4> java配置类相关注解</h4>
<ul>
<li><code>@Configuration</code> ：声明当前类为配置类，相当于xml形式的Spring配置（类上），声明当前类为配置类，其中内部组合了@Component注解，表明这个类是一个bean（类上）</li>
<li><code>@Bean</code> ：注解在方法上，声明当前方法的返回值为一个bean，替代xml中的方式（方法上）</li>
<li><code>@ComponentScan</code> ：用于对Component进行扫描，相当于xml中的（类上）</li>
<li><code>@WishlyConfiguration</code> ：为@Configuration与@ComponentScan的组合注解，可以替代这两个注解</li>
</ul>
<h4> 切面（AOP）相关注解</h4>
<p>Spring支持AspectJ的注解式切面编程</p>
<ul>
<li><code>@Aspect</code>：声明一个切面（类上），使用@After、@Before、@Around定义建言（advice），可直接将拦截规则（切点）作为参数。</li>
<li><code>@After</code> ：在方法执行之后执行（方法上）</li>
<li><code>@Before</code> ：在方法执行之前执行（方法上）</li>
<li><code>@Around</code> ：在方法执行之前与之后执行（方法上）</li>
<li><code>@PointCut</code> ：声明切点在java配置类中使用@EnableAspectJAutoProxy注解开启Spring对AspectJ代理的支持（类上）</li>
</ul>
<h3> @Bean的属性支持</h3>
<p>@Scope 设置Spring容器如何新建Bean实例（方法上，得有@Bean），其设置类型包括：</p>
<ul>
<li><code>Singleton</code>：单例,一个Spring容器中只有一个bean实例，默认模式</li>
<li><code>Protetype</code>：每次调用新建一个bean</li>
<li><code>Request</code>：web项目中，给每个http request新建一个bean</li>
<li><code>Session</code> ：web项目中，给每个http session新建一个bean</li>
<li><code>Global</code>：Session给每一个 global http session新建一个Bean实例</li>
<li><code>@StepScope</code>：在Spring Batch中还有涉及(Spring Batch 之 背景框架简介_vincent-CSDN博客)</li>
<li><code>@PostConstruct</code> ：由JSR-250提供，在构造函数执行完之后执行，等价于xml配置文件中bean的initMethod</li>
<li><code>@PreDestory</code> ：由JSR-250提供，在Bean销毁之前执行，等价于xml配置文件中bean的destroyMethod</li>
</ul>
<h3> @Value注解</h3>
<p>为属性注入值,支持如下方式的注入：</p>
<p>注入普通字符</p>
<figure><img src="https://img-blog.csdnimg.cn/img_convert/37a5272847ff6ca86690a2e1d3f4dfaa.png" alt="37a5272847ff6ca86690a2e1d3f4dfaa.png" tabindex="0" loading="lazy"><figcaption>37a5272847ff6ca86690a2e1d3f4dfaa.png</figcaption></figure>
<p>注入操作系统属性</p>
<figure><img src="https://img-blog.csdnimg.cn/img_convert/e4803c07763e1811c00d4c7e602ce0a5.png" alt="e4803c07763e1811c00d4c7e602ce0a5.png" tabindex="0" loading="lazy"><figcaption>e4803c07763e1811c00d4c7e602ce0a5.png</figcaption></figure>
<p>注入表达式结果</p>
<figure><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/0a1da82128f379c30ad8a617633e8dbe.png" alt="0a1da82128f379c30ad8a617633e8dbe.png" tabindex="0" loading="lazy"><figcaption>0a1da82128f379c30ad8a617633e8dbe.png</figcaption></figure>
<p>注入其它bean属性</p>
<figure><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/73e51190ca79d307501ca874efee2e3b.png" alt="73e51190ca79d307501ca874efee2e3b.png" tabindex="0" loading="lazy"><figcaption>73e51190ca79d307501ca874efee2e3b.png</figcaption></figure>
<p>注入文件资源</p>
<figure><img src="https://img-blog.csdnimg.cn/img_convert/9bd391199c575bbc9d4f158a881c7d18.png" alt="9bd391199c575bbc9d4f158a881c7d18.png" tabindex="0" loading="lazy"><figcaption>9bd391199c575bbc9d4f158a881c7d18.png</figcaption></figure>
<p>注入网站资源</p>
<figure><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/cdaf29b32bdc7f7835aec018fecc3f50.png" alt="cdaf29b32bdc7f7835aec018fecc3f50.png" tabindex="0" loading="lazy"><figcaption>cdaf29b32bdc7f7835aec018fecc3f50.png</figcaption></figure>
<p>注入配置文件</p>
<figure><img src="https://img-blog.csdnimg.cn/img_convert/08a820d9676736e45563568e57f708da.png" alt="08a820d9676736e45563568e57f708da.png" tabindex="0" loading="lazy"><figcaption>08a820d9676736e45563568e57f708da.png</figcaption></figure>
<p><code>@PropertySource</code> 加载配置文件(类上)，还需配置一个<code>PropertySourcesPlaceholderConfigurer</code>的bean。</p>
<h3> 环境切换</h3>
<ul>
<li><code>@Profile</code> ：通过设定Environment的ActiveProfiles来设定当前context需要使用的配置环境。（类或方法上）</li>
<li><code>@Conditional</code>：Spring4中可以使用此注解定义条件话的bean，通过实现Condition接口，并重写matches方法，从而决定该bean是否被实例化。（方法上）</li>
</ul>
<h3> 异步相关</h3>
<ul>
<li><code>@EnableAsync</code>：配置类中，通过此注解开启对异步任务的支持，叙事性AsyncConfigurer接口（类上）</li>
<li><code>@Async</code>：在实际执行的bean方法使用该注解来申明其是一个异步任务（方法上或类上所有的方法都将异步，需要@EnableAsync开启异步任务）</li>
</ul>
<h3> 定时任务相关</h3>
<ul>
<li><code>@EnableScheduling</code> ：在配置类上使用，开启计划任务的支持（类上）</li>
<li><code>@Scheduled</code> ：来申明这是一个任务，包括cron,fixDelay,fixRate等类型（方法上，需先开启计划任务的支持）</li>
</ul>
<h3> @Enable 注解说明</h3>
<p>这些注解主要用来开启对xxx的支持。</p>
<ul>
<li><code>@EnableAspectJAutoProxy</code> ：开启对AspectJ自动代理的支持</li>
<li><code>@EnableAsync</code> ：开启异步方法的支持</li>
<li><code>@EnableScheduling</code> ：开启计划任务的支持</li>
<li><code>@EnableWebMvc</code> ：开启Web MVC的配置支持</li>
<li><code>@EnableConfigurationProperties</code> ：开启对@ConfigurationProperties注解配置Bean的支持</li>
<li><code>@EnableJpaRepositories</code> ：开启对SpringData JPA Repository的支持</li>
<li><code>@EnableTransactionManagement</code> ：开启注解式事务的支持</li>
<li><code>@EnableCaching</code> ：开启注解式的缓存支持</li>
</ul>
<h3> 测试相关注解</h3>
<ul>
<li><code>@RunWith</code> ：运行器，Spring中通常用于对JUnit的支持</li>
<li><code>@ContextConfiguration</code>：用来加载配置ApplicationContext，其中classes属性用来加载配置类</li>
</ul>
<h3> SpringMVC部分</h3>
<ul>
<li><code>@EnableWebMvc</code> ：在配置类中开启Web MVC的配置支持，如一些ViewResolver或者MessageConverter等，若无此句，重写WebMvcConfigurerAdapter方法（用于对SpringMVC的配置）。</li>
<li><code>@Controller</code> ：声明该类为SpringMVC中的Controller</li>
<li><code>@RequestMapping</code> ：用于映射Web请求，包括访问路径和参数（类或方法上）</li>
<li><code>@ResponseBody</code> ：支持将返回值放在response内，而不是一个页面，通常用户返回json数据（返回值旁或方法上）</li>
<li><code>@RequestBody</code> ：允许request的参数在request体中，而不是在直接连接在地址后面。（放在参数前）</li>
<li><code>@PathVariable</code> ：用于接收路径参数，比如@RequestMapping(“/hello/{name}”)申明的路径，将注解放在参数中前，即可获取该值，通常作为Restful的接口实现方法。</li>
<li><code>@RestController</code> ：该注解为一个组合注解，相当于@Controller和@ResponseBody的组合，注解在类上，意味着，该Controller的所有方法都默认加上了@ResponseBody。</li>
<li><code>@ControllerAdvice</code> ：通过该注解，我们可以将对于控制器的全局配置放置在同一个位置，注解了@Controller的类的方法可使用@ExceptionHandler、@InitBinder、@ModelAttribute注解到方法上，这对所有注解了 @RequestMapping的控制器内的方法有效。</li>
<li><code>@ExceptionHandler</code> ：用于全局处理控制器里的异常</li>
<li><code>@InitBinder</code> ：用来设置WebDataBinder，WebDataBinder用来自动绑定前台请求参数到Model中。</li>
<li><code>@ModelAttribute</code> ：本来的作用是绑定键值对到Model里，在@ControllerAdvice中是让全局的@RequestMapping：都能获得在此处设置的键值对。</li>
</ul>
</li>
</ul>`,r:{minutes:37.56,words:11269},y:"a",title:"Spring 面试63问",i:"type"},["/dev/Spring 面试63问.html","/dev/Spring%20%E9%9D%A2%E8%AF%9563%E9%97%AE","/dev/Spring 面试63问.md","/dev/Spring%20%E9%9D%A2%E8%AF%9563%E9%97%AE.md"]],["v-4d262f90","/dev/SpringBoot_Kafka_ELK%E5%AE%8C%E6%88%90%E6%B5%B7%E9%87%8F%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86.html",{a:"xlc520",d:"2022-08-05T00:00:00.000Z",l:"2022年8月5日",c:["Java"],g:["Java"],e:`<h1> SpringBoot+Kafka+ELK 完成海量日志收集</h1>
<p>整体流程大概如下：</p>
<figure><img src="https://static.xlc520.ml/blogImage/640-16577076343400.png" alt="SpringBoot+Kafka+ELK" tabindex="0" loading="lazy"><figcaption>SpringBoot+Kafka+ELK</figcaption></figure>
<h3> 服务器准备</h3>
<p>在这先列出各服务器节点，方便同学们在下文中对照节点查看相应内容</p>
<figure><img src="https://static.xlc520.ml/blogImage/640-16577076343401.png" alt="SpringBoot+Kafka+ELK" tabindex="0" loading="lazy"><figcaption>SpringBoot+Kafka+ELK</figcaption></figure>`,r:{minutes:7.61,words:2283},y:"a",title:"SpringBoot+Kafka+ELK 完成海量日志收集",i:"java"},["/dev/SpringBoot_Kafka_ELK完成海量日志收集.html","/dev/SpringBoot_Kafka_ELK%E5%AE%8C%E6%88%90%E6%B5%B7%E9%87%8F%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86","/dev/SpringBoot+Kafka+ELK完成海量日志收集.html","/dev/SpringBoot+Kafka+ELK%E5%AE%8C%E6%88%90%E6%B5%B7%E9%87%8F%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86.html","/dev/SpringBoot+Kafka+ELK完成海量日志收集.md","/dev/SpringBoot+Kafka+ELK%E5%AE%8C%E6%88%90%E6%B5%B7%E9%87%8F%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86.md"]],["v-12933370","/dev/SpringBoot_MybatisPlus_ClickHouse%E8%BD%BB%E6%9D%BE%E5%AE%9E%E7%8E%B0%E5%A2%9E%E5%88%A0%E6%94%B9%E6%9F%A5.html",{a:"xlc520",d:"2022-05-27T00:00:00.000Z",l:"2022年5月27日",c:["Java"],g:["Java"],e:`<h1> Spring Boot + Mybatis Plus + ClickHouse 轻松实现增删改查</h1>
<h2> 项目场景：</h2>
<p><strong>ClickHouse 操作基于 Mybatis-puls源码扩展开发。解决ClickHouse的修改和删除 SQL操作与Mysql不相同。</strong></p>
<h2> 基于 <strong>Mybatis-puls</strong>：</h2>
<p>update 、updateById 、 delete 函数</p>
<p>1、<code>SqlMethodDiv.java</code> 文件枚举类，对sql脚本定义</p>`,r:{minutes:3.02,words:907},y:"a",title:"Spring Boot + Mybatis Plus + ClickHouse 轻松实现增删改查",i:"java"},["/dev/SpringBoot_MybatisPlus_ClickHouse轻松实现增删改查.html","/dev/SpringBoot_MybatisPlus_ClickHouse%E8%BD%BB%E6%9D%BE%E5%AE%9E%E7%8E%B0%E5%A2%9E%E5%88%A0%E6%94%B9%E6%9F%A5","/dev/SpringBoot+MybatisPlus+ClickHouse轻松实现增删改查.html","/dev/SpringBoot+MybatisPlus+ClickHouse%E8%BD%BB%E6%9D%BE%E5%AE%9E%E7%8E%B0%E5%A2%9E%E5%88%A0%E6%94%B9%E6%9F%A5.html","/dev/SpringBoot+MybatisPlus+ClickHouse轻松实现增删改查.md","/dev/SpringBoot+MybatisPlus+ClickHouse%E8%BD%BB%E6%9D%BE%E5%AE%9E%E7%8E%B0%E5%A2%9E%E5%88%A0%E6%94%B9%E6%9F%A5.md"]],["v-01f872e7","/dev/SpringBoot_Netty_WebSocket%E5%AE%9E%E7%8E%B0%E6%B6%88%E6%81%AF%E6%8E%A8%E9%80%81.html",{a:"xlc520",d:"2022-08-21T00:00:00.000Z",l:"2022年8月21日",c:["Java"],g:["Java"],e:`<h1> Spring Boot + Netty + WebSocket 实现消息推送</h1>
<h2> <strong>关于Netty</strong></h2>
<p>Netty 是一个利用 Java 的高级网络的能力，隐藏其背后的复杂性而提供一个易于使用的 API 的客户端/服务器框架。</p>
<h2> <strong>Maven依赖</strong></h2>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
 <span class="token comment">&lt;!-- https://mvnrepository.com/artifact/io.netty/netty-all --&gt;</span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.netty<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>netty-all<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>4.1.36.Final<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.89,words:1467},y:"a",title:"Spring Boot + Netty + WebSocket 实现消息推送",i:"java"},["/dev/SpringBoot_Netty_WebSocket实现消息推送.html","/dev/SpringBoot_Netty_WebSocket%E5%AE%9E%E7%8E%B0%E6%B6%88%E6%81%AF%E6%8E%A8%E9%80%81","/dev/SpringBoot+Netty+WebSocket实现消息推送.html","/dev/SpringBoot+Netty+WebSocket%E5%AE%9E%E7%8E%B0%E6%B6%88%E6%81%AF%E6%8E%A8%E9%80%81.html","/dev/SpringBoot+Netty+WebSocket实现消息推送.md","/dev/SpringBoot+Netty+WebSocket%E5%AE%9E%E7%8E%B0%E6%B6%88%E6%81%AF%E6%8E%A8%E9%80%81.md"]],["v-47bb6d4c","/dev/SpringBoot_SpringSecurity%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB_Jwt%E7%9A%84%E6%9D%83%E9%99%90%E8%AE%A4%E8%AF%81.html",{a:"xlc520",d:"2022-02-13T00:00:00.000Z",l:"2022年2月13日",c:["Java"],g:["Java"],e:`<h1> SpringBoot+SpringSecurity前后端分离+Jwt的权限认证</h1>
<h2> 前言</h2>
<p>一般来说，我们用SpringSecurity默认的话是前后端整在一起的，比如<a href="https://so.csdn.net/so/search?q=thymeleaf&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">thymeleaf</a>或者Freemarker，SpringSecurity还自带login登录页,还让你配置登出页,错误页。
但是现在前后端分离才是正道，前后端分离的话，那就需要将返回的页面换成Json格式交给前端处理了</p>`,r:{minutes:15.07,words:4521},y:"a",title:"SpringBoot+SpringSecurity前后端分离+Jwt的权限认证",i:"type"},["/dev/SpringBoot_SpringSecurity前后端分离_Jwt的权限认证.html","/dev/SpringBoot_SpringSecurity%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB_Jwt%E7%9A%84%E6%9D%83%E9%99%90%E8%AE%A4%E8%AF%81","/dev/SpringBoot+SpringSecurity前后端分离+Jwt的权限认证.html","/dev/SpringBoot+SpringSecurity%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB+Jwt%E7%9A%84%E6%9D%83%E9%99%90%E8%AE%A4%E8%AF%81.html","/dev/SpringBoot+SpringSecurity前后端分离+Jwt的权限认证.md","/dev/SpringBoot+SpringSecurity%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB+Jwt%E7%9A%84%E6%9D%83%E9%99%90%E8%AE%A4%E8%AF%81.md"]],["v-2fc561e0","/dev/SpringBoot_WebSocket%E5%AE%9E%E6%97%B6%E7%9B%91%E6%8E%A7%E5%BC%82%E5%B8%B8.html",{a:"xlc520",d:"2022-05-15T00:00:00.000Z",l:"2022年5月15日",c:["Java"],g:["Java"],e:`<h1> SpringBoot+WebSocket实时监控异常</h1>
<h2> 需求</h2>
<p>消防的设备巡检，如果巡检发现异常，通过手机端提交，后台的实时监控页面实时获取到该设备的信息及位置，然后安排员工去处理。</p>
<p>因为需要服务端主动向客户端发送消息，所以很容易的就想到了用WebSocket来实现这一功能。</p>
<p>WebSocket就不做介绍了，上链接：<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket</a></p>`,r:{minutes:4.14,words:1241},y:"a",title:"SpringBoot+WebSocket实时监控异常",i:"java"},["/dev/SpringBoot_WebSocket实时监控异常.html","/dev/SpringBoot_WebSocket%E5%AE%9E%E6%97%B6%E7%9B%91%E6%8E%A7%E5%BC%82%E5%B8%B8","/dev/SpringBoot+WebSocket实时监控异常.html","/dev/SpringBoot+WebSocket%E5%AE%9E%E6%97%B6%E7%9B%91%E6%8E%A7%E5%BC%82%E5%B8%B8.html","/dev/SpringBoot+WebSocket实时监控异常.md","/dev/SpringBoot+WebSocket%E5%AE%9E%E6%97%B6%E7%9B%91%E6%8E%A7%E5%BC%82%E5%B8%B8.md"]],["v-29cea7e7","/dev/SpringBoot.html",{a:"xlc520",d:"2022-01-15T00:00:00.000Z",l:"2022年1月15日",c:["other"],g:["other"],e:`<h1> SpringBoot+拦截器+自定义异常+自定义注解+全局异常处理</h1>
<ul>
<li>
<p><a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect" target="_blank" rel="noopener noreferrer">前言</a></p>
</li>
<li>
<p><a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect" target="_blank" rel="noopener noreferrer">资源权限</a></p>
</li>
<li>
<ul>
<li><a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect" target="_blank" rel="noopener noreferrer">1.静态资源准备</a></li>
<li><a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect" target="_blank" rel="noopener noreferrer">2.自定义一个异常，便于拦截抛出</a></li>
<li><a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect" target="_blank" rel="noopener noreferrer">3.全局异常处理</a></li>
<li><a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect" target="_blank" rel="noopener noreferrer">4.controller层</a></li>
<li><a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect" target="_blank" rel="noopener noreferrer">5.拦截器创建</a></li>
<li><a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect" target="_blank" rel="noopener noreferrer">6.将拦截器注入应用</a></li>
<li><a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect" target="_blank" rel="noopener noreferrer">7.验证查看结果</a></li>
</ul>
</li>
<li>
<p><a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect" target="_blank" rel="noopener noreferrer">操作权限</a></p>
</li>
<li>
<ul>
<li><a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect" target="_blank" rel="noopener noreferrer">1.和上面一样使用静态资源</a></li>
<li><a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect" target="_blank" rel="noopener noreferrer">2.自定义注解</a></li>
<li><a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect" target="_blank" rel="noopener noreferrer">3.controller层</a></li>
<li><a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect" target="_blank" rel="noopener noreferrer">4.修改一下之前的拦截器</a></li>
<li><a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect" target="_blank" rel="noopener noreferrer">5.验证结果</a></li>
</ul>
</li>
<li>
<p><a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect" target="_blank" rel="noopener noreferrer">角色权限</a></p>
</li>
<li>
<ul>
<li><a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect" target="_blank" rel="noopener noreferrer">1.静态对应关系</a></li>
<li><a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect" target="_blank" rel="noopener noreferrer">2.修改controller</a></li>
<li><a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect" target="_blank" rel="noopener noreferrer">3.修改一下拦截器</a></li>
<li><a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect" target="_blank" rel="noopener noreferrer">4.结果测试</a></li>
</ul>
</li>
<li>
<p><a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247487551&amp;idx=1&amp;sn=18f64ba49f3f0f9d8be9d1fdef8857d9&amp;chksm=fa496f8ecd3ee698f4954c00efb80fe955ec9198fff3ef4011e331aa37f55a6a17bc8c0335a8&amp;scene=21&amp;token=899450012&amp;lang=zh_CN#wechat_redirect" target="_blank" rel="noopener noreferrer">总结</a></p>
</li>
</ul>`,r:{minutes:8.68,words:2605},y:"a",title:"SpringBoot+拦截器+自定义异常+自定义注解+全局异常处理",i:"type"},["/dev/SpringBoot","/dev/SpringBoot.md"]],["v-00a018bf","/dev/SpringBoot%E4%B8%ADRest%E7%9A%84%E4%BD%BF%E7%94%A8%E5%92%8C%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0%E6%B3%A8%E8%A7%A3.html",{a:"xlc520",d:"2022-07-02T00:00:00.000Z",l:"2022年7月2日",c:["Java"],g:["Java"],e:`<h1> SpringBoot中Rest的使用和请求参数注解</h1>
<h2> Rest的使用和原理</h2>
<p>Rest风格支持（使用HTTP请求方式动词来表示对资源的操作）
• 以前：/getUser 获取用户 /deleteUser 删除用户 /editUser 修改用户 /saveUser 保存用户
• 现在： /user GET-获取用户 DELETE-删除用户 PUT-修改用户 POST-保存用户。
看下面的一个例子，这是一个表单：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>hah<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/user<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>get<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>get<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/user<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/user<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>put<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/user<span class="token punctuation">"</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>post<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>delete<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>submit<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:7.64,words:2293},y:"a",title:"SpringBoot中Rest的使用和请求参数注解",i:"java"},["/dev/SpringBoot中Rest的使用和请求参数注解.html","/dev/SpringBoot%E4%B8%ADRest%E7%9A%84%E4%BD%BF%E7%94%A8%E5%92%8C%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0%E6%B3%A8%E8%A7%A3","/dev/SpringBoot中Rest的使用和请求参数注解.md","/dev/SpringBoot%E4%B8%ADRest%E7%9A%84%E4%BD%BF%E7%94%A8%E5%92%8C%E8%AF%B7%E6%B1%82%E5%8F%82%E6%95%B0%E6%B3%A8%E8%A7%A3.md"]],["v-031a6e0b","/dev/SpringBoot%E4%B8%AD%E5%A6%82%E4%BD%95%E4%BC%98%E9%9B%85%E7%9A%84%E4%BD%BF%E7%94%A8%E5%A4%9A%E7%BA%BF%E7%A8%8B.html",{a:"xlc520",d:"2022-08-09T00:00:00.000Z",l:"2022年8月9日",c:["Java"],g:["Java"],e:`<h1> SpringBoot中如何优雅的使用多线程</h1>
<blockquote>
<p>本文带你快速了解@Async注解的用法，包括异步方法无返回值、有返回值，最后总结了@Async注解失效的几个坑。</p>
</blockquote>
<p>在 SpringBoot 应用中，经常会遇到在一个接口中，同时做事情1，事情2，事情3，如果同步执行的话，则本次接口时间取决于事情1 2 3执行时间之和；如果三件事同时执行，则本次接口时间取决于事情1 2 3执行时间最长的那个，合理使用多线程，可以大大缩短接口时间。那么在 SpringBoot 应用中如何优雅的使用多线程呢？</p>
<h2> 快速使用</h2>`,r:{minutes:4.6,words:1380},y:"a",title:"SpringBoot中如何优雅的使用多线程",i:"java"},["/dev/SpringBoot中如何优雅的使用多线程.html","/dev/SpringBoot%E4%B8%AD%E5%A6%82%E4%BD%95%E4%BC%98%E9%9B%85%E7%9A%84%E4%BD%BF%E7%94%A8%E5%A4%9A%E7%BA%BF%E7%A8%8B","/dev/SpringBoot中如何优雅的使用多线程.md","/dev/SpringBoot%E4%B8%AD%E5%A6%82%E4%BD%95%E4%BC%98%E9%9B%85%E7%9A%84%E4%BD%BF%E7%94%A8%E5%A4%9A%E7%BA%BF%E7%A8%8B.md"]],["v-7f0ca952","/dev/SpringBoot%E4%B8%AD%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3CORS%E8%B7%A8%E5%9F%9F%E9%97%AE%E9%A2%98.html",{a:"xlc520",d:"2022-04-07T00:00:00.000Z",l:"2022年4月7日",c:["Java"],g:["Java"],e:`<h1> SpringBoot中如何解决CORS跨域问题</h1>
<p>CORS（Cross-Origin Resource Sharing）"跨域资源共享"，是一个W3C标准，它允许浏览器向跨域服务器发送Ajax请求，打破了Ajax只能访问本站内的资源限制。</p>
<p>在前后分离的架构下，我们经常会遇到跨域CORS问题，在浏览器上的表现就是出现如下一段错误提示：<code>No 'Access-Control-Allow-Origin' header is present on the requested resource.</code></p>
<p>下面看一下如何让你的SpringBoot项目支持CORS跨域。</p>`,r:{minutes:2.61,words:783},y:"a",title:"SpringBoot中如何解决CORS跨域问题",i:"java"},["/dev/SpringBoot中如何解决CORS跨域问题.html","/dev/SpringBoot%E4%B8%AD%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3CORS%E8%B7%A8%E5%9F%9F%E9%97%AE%E9%A2%98","/dev/SpringBoot中如何解决CORS跨域问题.md","/dev/SpringBoot%E4%B8%AD%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3CORS%E8%B7%A8%E5%9F%9F%E9%97%AE%E9%A2%98.md"]],["v-7277d541","/dev/SpringBoot%E5%86%85%E7%BD%AE%E5%B7%A5%E5%85%B7%E7%B1%BB.html",{a:"xlc520",d:"2022-05-01T00:00:00.000Z",l:"2022年5月1日",c:["Java"],g:["Java"],e:`<h1> SpringBoot 内置工具类</h1>
<h2> 断言</h2>
<ol>
<li>
<p>断言是一个逻辑判断，用于检查不应该发生的情况</p>
</li>
<li>
<p>Assert 关键字在 JDK1.4 中引入，可通过 JVM 参数<code>-enableassertions</code>开启</p>
</li>
<li>
<p>SpringBoot 中提供了 Assert 断言工具类，通常用于数据合法性检查</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// 要求参数 object 必须为非空（Not Null），否则抛出异常，不予放行</span>
<span class="token comment">// 参数 message 参数用于定制异常信息。</span>
<span class="token keyword">void</span> <span class="token function">notNull</span><span class="token punctuation">(</span><span class="token class-name">Object</span> object<span class="token punctuation">,</span> <span class="token class-name">String</span> message<span class="token punctuation">)</span>
<span class="token comment">// 要求参数必须空（Null），否则抛出异常，不予『放行』。</span>
<span class="token comment">// 和 notNull() 方法断言规则相反</span>
<span class="token keyword">void</span> <span class="token function">isNull</span><span class="token punctuation">(</span><span class="token class-name">Object</span> object<span class="token punctuation">,</span> <span class="token class-name">String</span> message<span class="token punctuation">)</span>
<span class="token comment">// 要求参数必须为真（True），否则抛出异常，不予『放行』。</span>
<span class="token keyword">void</span> <span class="token function">isTrue</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> expression<span class="token punctuation">,</span> <span class="token class-name">String</span> message<span class="token punctuation">)</span>
<span class="token comment">// 要求参数（List/Set）必须非空（Not Empty），否则抛出异常，不予放行</span>
<span class="token keyword">void</span> <span class="token function">notEmpty</span><span class="token punctuation">(</span><span class="token class-name">Collection</span> collection<span class="token punctuation">,</span> <span class="token class-name">String</span> message<span class="token punctuation">)</span>
<span class="token comment">// 要求参数（String）必须有长度（即，Not Empty），否则抛出异常，不予放行</span>
<span class="token keyword">void</span> <span class="token function">hasLength</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">,</span> <span class="token class-name">String</span> message<span class="token punctuation">)</span>
<span class="token comment">// 要求参数（String）必须有内容（即，Not Blank），否则抛出异常，不予放行</span>
<span class="token keyword">void</span> <span class="token function">hasText</span><span class="token punctuation">(</span><span class="token class-name">String</span> text<span class="token punctuation">,</span> <span class="token class-name">String</span> message<span class="token punctuation">)</span>
<span class="token comment">// 要求参数是指定类型的实例，否则抛出异常，不予放行</span>
<span class="token keyword">void</span> <span class="token function">isInstanceOf</span><span class="token punctuation">(</span><span class="token class-name">Class</span> type<span class="token punctuation">,</span> <span class="token class-name">Object</span> obj<span class="token punctuation">,</span> <span class="token class-name">String</span> message<span class="token punctuation">)</span>
<span class="token comment">// 要求参数 \`subType\` 必须是参数 superType 的子类或实现类，否则抛出异常，不予放行</span>
<span class="token keyword">void</span> <span class="token function">isAssignable</span><span class="token punctuation">(</span><span class="token class-name">Class</span> superType<span class="token punctuation">,</span> <span class="token class-name">Class</span> subType<span class="token punctuation">,</span> <span class="token class-name">String</span> message<span class="token punctuation">)</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>`,r:{minutes:8.29,words:2486},y:"a",title:"SpringBoot 内置工具类",i:"java"},["/dev/SpringBoot内置工具类.html","/dev/SpringBoot%E5%86%85%E7%BD%AE%E5%B7%A5%E5%85%B7%E7%B1%BB","/dev/SpringBoot内置工具类.md","/dev/SpringBoot%E5%86%85%E7%BD%AE%E5%B7%A5%E5%85%B7%E7%B1%BB.md"]],["v-56224f88","/dev/SpringBoot%E5%88%A9%E7%94%A8ThreadPoolTaskExecutor%E6%89%B9%E9%87%8F%E6%8F%92%E5%85%A5.html",{a:"xlc520",d:"2022-11-07T00:00:00.000Z",l:"2022年11月7日",c:["Java"],g:["Java","SpringBoot"],e:`<h1> SpringBoot利用ThreadPoolTaskExecutor批量插入</h1>
<h2> <strong>前言</strong></h2>
<p><strong>开发目的：</strong></p>
<p>提高百万级数据插入效率。</p>
<p><strong>采取方案：</strong></p>
<p>利用<code>ThreadPoolTaskExecutor</code>多线程批量插入。</p>
<p><strong>采用技术：</strong></p>
<ul>
<li>springboot2.1.1</li>
<li>mybatisPlus3.0.6</li>
<li>swagger2.5.0</li>
<li>Lombok1.18.4</li>
<li>postgresql</li>
<li>ThreadPoolTaskExecutor</li>
</ul>`,r:{minutes:1.63,words:488},y:"a",title:"SpringBoot利用ThreadPoolTaskExecutor批量插入",i:"java"},["/dev/SpringBoot利用ThreadPoolTaskExecutor批量插入.html","/dev/SpringBoot%E5%88%A9%E7%94%A8ThreadPoolTaskExecutor%E6%89%B9%E9%87%8F%E6%8F%92%E5%85%A5","/dev/SpringBoot利用ThreadPoolTaskExecutor批量插入.md","/dev/SpringBoot%E5%88%A9%E7%94%A8ThreadPoolTaskExecutor%E6%89%B9%E9%87%8F%E6%8F%92%E5%85%A5.md"]],["v-0246c81b","/dev/SpringBoot%E5%90%AF%E5%8A%A8banner.html",{a:"xlc520",d:"2022-03-02T00:00:00.000Z",l:"2022年3月2日",c:["Java"],g:["Java"],e:`<h1> Spring Boot启动默认的banner</h1>
<p>自定义banner只需要在resource下新建一个<code>banner.txt</code>文件，将我们需要的banner字样放进去，启动的时候就会去读取使用这个文本文件中的banner。</p>
<p><a href="./banner.txt">banner.txt</a></p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>                   _ooOoo_
                  o8888888o
                  88" . "88
                  (| -_- |)
                  O\\  =  /O
               ____/\`---'\\____
             .'  \\\\|     |//  \`.
            /  \\\\|||  :  |||//  \\
           /  _||||| -:- |||||-  \\
           |   | \\\\\\  -  /// |   |
           | \\_|  ''\\---/''  |   |
           \\  .-\\__  \`-\`  ___/-. /
         ___\`. .'  /--.--\\  \`. . __
      ."" '&lt;  \`.___\\_&lt;|&gt;_/___.'  &gt;'"".
     | | :  \`- \\\`.;\`\\ _ /\`;.\`/ - \` : | |
     \\  \\ \`-.   \\_ __\\ /__ _/   .-\` /  /
======\`-.____\`-.___\\_____/___.-\`____.-'======
                   \`=---='
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
         	佛祖保佑       永无BUG
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.09,words:1226},y:"a",title:"Spring Boot启动的时候默认的banner",i:"type"},["/dev/SpringBoot启动banner.html","/dev/SpringBoot%E5%90%AF%E5%8A%A8banner","/dev/SpringBoot启动banner.md","/dev/SpringBoot%E5%90%AF%E5%8A%A8banner.md"]],["v-37dcfe5d","/dev/SpringBoot%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1%E5%8A%A8%E6%80%81%E7%AE%A1%E7%90%86.html",{a:"xlc520",d:"2022-03-26T00:00:00.000Z",l:"2022年3月26日",c:["Java"],g:["Java"],e:`<h1> SpringBoot定时任务动态管理</h1>
<h2> <strong>一、功能说明</strong></h2>
<p>SpringBoot的定时任务的加强工具，实现对SpringBoot原生的定时任务进行动态管理,完全兼容原生@Scheduled注解,无需对原本的定时任务进行修改</p>
<h2> <strong>二、快速使用</strong></h2>
<p>具体的功能已经封装成SpringBoot-starter即插即用</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;com.github.guoyixing&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-super-scheduled&lt;/artifactId&gt;
    &lt;version&gt;0.3.1&lt;/version&gt;
&lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:9.21,words:2764},y:"a",title:"SpringBoot定时任务动态管理",i:"type"},["/dev/SpringBoot定时任务动态管理.html","/dev/SpringBoot%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1%E5%8A%A8%E6%80%81%E7%AE%A1%E7%90%86","/dev/SpringBoot定时任务动态管理.md","/dev/SpringBoot%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1%E5%8A%A8%E6%80%81%E7%AE%A1%E7%90%86.md"]],["v-3966872e","/dev/SpringBoot%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1%E5%8A%A8%E6%80%81%E7%AE%A1%E7%90%86%E9%80%9A%E7%94%A8%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.html",{a:"xlc520",d:"2022-05-25T00:00:00.000Z",l:"2022年5月25日",c:["Java"],g:["Java"],e:`<h1> SpringBoot定时任务动态管理通用解决方案</h1>
<h2> 一、功能说明</h2>
<p>SpringBoot的定时任务的加强工具，实现对SpringBoot原生的定时任务进行动态管理,完全兼容原生@Scheduled注解,无需对原本的定时任务进行修改</p>
<h2> 二、快速使用</h2>
<p>具体的功能已经封装成SpringBoot-starter即插即用</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.github.guoyixing<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-super-scheduled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.3.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:9.34,words:2802},y:"a",title:"SpringBoot定时任务动态管理通用解决方案",i:"java"},["/dev/SpringBoot定时任务动态管理通用解决方案.html","/dev/SpringBoot%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1%E5%8A%A8%E6%80%81%E7%AE%A1%E7%90%86%E9%80%9A%E7%94%A8%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88","/dev/SpringBoot定时任务动态管理通用解决方案.md","/dev/SpringBoot%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1%E5%8A%A8%E6%80%81%E7%AE%A1%E7%90%86%E9%80%9A%E7%94%A8%E8%A7%A3%E5%86%B3%E6%96%B9%E6%A1%88.md"]],["v-fcf9a784","/dev/SpringBoot%E5%B9%B6%E8%A1%8C%E4%BB%BB%E5%8A%A1.html",{a:"xlc520",d:"2022-07-16T00:00:00.000Z",l:"2022年7月16日",c:["Java"],g:["Java"],e:`<h1> SpringBoot 并行任务</h1>
<h2> 第一种：把参数配置到.properties文件中：</h2>
<p>代码：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>accord<span class="token punctuation">.</span>task</span><span class="token punctuation">;</span>
 
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">SimpleDateFormat</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>
 
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>scheduling<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Scheduled</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>
 
<span class="token doc-comment comment">/**
 * 从配置文件加载任务信息
 * <span class="token keyword">@author</span> 王久印
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ScheduledTask</span> <span class="token punctuation">{</span>
 
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">SimpleDateFormat</span> dateFormat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">"HH:mm:ss"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
  <span class="token comment">//@Scheduled(fixedDelayString = "\${jobs.fixedDelay}")</span>
  <span class="token annotation punctuation">@Scheduled</span><span class="token punctuation">(</span>fixedDelayString <span class="token operator">=</span> <span class="token string">"2000"</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getTask1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"任务1,从配置文件加载任务信息，当前时间："</span> <span class="token operator">+</span> dateFormat<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
 
  <span class="token annotation punctuation">@Scheduled</span><span class="token punctuation">(</span>cron <span class="token operator">=</span> <span class="token string">"\${jobs.cron}"</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getTask2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"任务2,从配置文件加载任务信息，当前时间："</span> <span class="token operator">+</span> dateFormat<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.27,words:1280},y:"a",title:"SpringBoot 并行任务",i:"java"},["/dev/SpringBoot并行任务.html","/dev/SpringBoot%E5%B9%B6%E8%A1%8C%E4%BB%BB%E5%8A%A1","/dev/SpringBoot并行任务.md","/dev/SpringBoot%E5%B9%B6%E8%A1%8C%E4%BB%BB%E5%8A%A1.md"]],["v-405fe66c","/dev/SpringBoot%E5%BC%95%E5%85%A5%E7%BA%BF%E7%A8%8B%E6%B1%A0_Queue%E7%BC%93%E5%86%B2%E9%98%9F%E5%88%97%E5%AE%9E%E7%8E%B0%E9%AB%98%E5%B9%B6%E5%8F%91%E4%B8%8B%E5%8D%95%E4%B8%9A%E5%8A%A1.html",{a:"xlc520",d:"2022-05-26T00:00:00.000Z",l:"2022年5月26日",c:["Java"],g:["Java"],e:`<h1> SpringBoot 引入线程池+Queue缓冲队列实现高并发下单业务</h1>
<ul>
<li>1.首先是springBoot的项目框架如下：</li>
<li>2.业务测试流程涉及的类，如下</li>
<li>3.使用JMeter模拟并发下单请求</li>
<li>4.结果</li>
</ul>
<hr>
<p>主要是自己在项目中(中小型项目) 有支付下单业务(只是办理VIP，没有涉及到商品库存)，目前用户量还没有上来，目前没有出现问题，但是想到如果用户量变大，下单并发量变大，可能会出现一系列的问题，趁着空闲时间，做了这个demo测试相关问题。</p>
<p>可能遇到的问题如下：</p>`,r:{minutes:4.31,words:1292},y:"a",title:"SpringBoot 引入线程池+Queue缓冲队列实现高并发下单业务",i:"java"},["/dev/SpringBoot引入线程池_Queue缓冲队列实现高并发下单业务.html","/dev/SpringBoot%E5%BC%95%E5%85%A5%E7%BA%BF%E7%A8%8B%E6%B1%A0_Queue%E7%BC%93%E5%86%B2%E9%98%9F%E5%88%97%E5%AE%9E%E7%8E%B0%E9%AB%98%E5%B9%B6%E5%8F%91%E4%B8%8B%E5%8D%95%E4%B8%9A%E5%8A%A1","/dev/SpringBoot引入线程池+Queue缓冲队列实现高并发下单业务.html","/dev/SpringBoot%E5%BC%95%E5%85%A5%E7%BA%BF%E7%A8%8B%E6%B1%A0+Queue%E7%BC%93%E5%86%B2%E9%98%9F%E5%88%97%E5%AE%9E%E7%8E%B0%E9%AB%98%E5%B9%B6%E5%8F%91%E4%B8%8B%E5%8D%95%E4%B8%9A%E5%8A%A1.html","/dev/SpringBoot引入线程池+Queue缓冲队列实现高并发下单业务.md","/dev/SpringBoot%E5%BC%95%E5%85%A5%E7%BA%BF%E7%A8%8B%E6%B1%A0+Queue%E7%BC%93%E5%86%B2%E9%98%9F%E5%88%97%E5%AE%9E%E7%8E%B0%E9%AB%98%E5%B9%B6%E5%8F%91%E4%B8%8B%E5%8D%95%E4%B8%9A%E5%8A%A1.md"]],["v-3db67a40","/dev/SpringBoot%E6%8E%A5%E5%8F%A3%E6%95%B0%E6%8D%AE%E5%8A%A0%E8%A7%A3%E5%AF%86%E5%AE%9E%E6%88%98.html",{a:"xlc520",d:"2022-07-06T00:00:00.000Z",l:"2022年7月6日",c:["Java"],g:["Java"],e:`<h1> SpringBoot 接口数据加解密实战</h1>
<p>需求解析：</p>
<ol>
<li>服务端、客户端和H5统一拦截加解密，网上有成熟方案，也可以按其他服务中实现的加解密流程来搞；</li>
<li>使用AES放松加密，考虑到H5端存储密钥安全性相对来说会低一些，故分针对H5和安卓、IOS分配两套密钥；</li>
<li>本次涉及客户端和服务端的整体改造，经讨论，新接口统一加 /secret/ 前缀来区分</li>
</ol>
<p>按本次需求来简单还原问题，定义两个对象，后面用得着，</p>
<p>用户类：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">UserType</span> userType <span class="token operator">=</span> <span class="token class-name">UserType</span><span class="token punctuation">.</span><span class="token constant">COMMON</span><span class="token punctuation">;</span>
    <span class="token annotation punctuation">@JsonFormat</span><span class="token punctuation">(</span>pattern <span class="token operator">=</span> <span class="token string">"yyyy-MM-dd HH:mm:ss"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">LocalDateTime</span> registerTime<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:8.61,words:2584},y:"a",title:"SpringBoot 接口数据加解密实战",i:"java"},["/dev/SpringBoot接口数据加解密实战.html","/dev/SpringBoot%E6%8E%A5%E5%8F%A3%E6%95%B0%E6%8D%AE%E5%8A%A0%E8%A7%A3%E5%AF%86%E5%AE%9E%E6%88%98","/dev/SpringBoot接口数据加解密实战.md","/dev/SpringBoot%E6%8E%A5%E5%8F%A3%E6%95%B0%E6%8D%AE%E5%8A%A0%E8%A7%A3%E5%AF%86%E5%AE%9E%E6%88%98.md"]],["v-3eec26d3","/dev/SpringBoot%E6%95%B4%E5%90%88Mybatis-plus%E5%8F%8A%E7%94%A8%E6%B3%95.html",{a:"xlc520",d:"2022-07-01T00:00:00.000Z",l:"2022年7月1日",c:["Java"],g:["Java","SpringBoot","Mybatis-plus"],e:`<h1> SpringBoot整合Mybatis-plus及用法</h1>
<h2> 一、mybatis-plus简介：</h2>
<p>Mybatis-Plus（简称MP）是一个 Mybatis 的增强工具，在 Mybatis 的基础上只做增强不做改变，为简化开发、提高效率而生。这是官方给的定义，关于mybatis-plus的更多介绍及特性，可以参考mybatis-plus官网。那么它是怎么增强的呢？其实就是它已经封装好了一些crud方法，我们不需要再写xml了，直接调用这些方法就行，就类似于JPA。并且3.X系列支持lambda语法,让我在写条件构造的时候少了很多的"魔法值",从代码结构上更简洁了.</p>`,r:{minutes:9.21,words:2762},y:"a",title:"SpringBoot整合Mybatis-plus及用法",i:"java"},["/dev/SpringBoot整合Mybatis-plus及用法.html","/dev/SpringBoot%E6%95%B4%E5%90%88Mybatis-plus%E5%8F%8A%E7%94%A8%E6%B3%95","/dev/SpringBoot整合Mybatis-plus及用法.md","/dev/SpringBoot%E6%95%B4%E5%90%88Mybatis-plus%E5%8F%8A%E7%94%A8%E6%B3%95.md"]],["v-bb952da6","/dev/SpringBoot%E6%95%B4%E5%90%88Mybatis-plus%E5%8F%8A%E7%94%A8%E6%B3%952.html",{a:"xlc520",d:"2022-07-02T00:00:00.000Z",l:"2022年7月2日",c:["Java"],g:["Java","SpringBoot","Mybatis-plus"],e:`<h1> SpringBoot整合Mybatis-plus及用法2</h1>
<h2> 创建项目</h2>
<p>普通的spring-boot项目，在 <a href="https://start.spring.io" target="_blank" rel="noopener noreferrer">start.spring.io</a>或者使用idea创建都行，相关依赖如下</p>
<p>我这版本用的springboot版本是 2.1.4</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-devtools<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.baomidou<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-plus-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.1.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resource</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directory</span><span class="token punctuation">&gt;</span></span>src/main/java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>directory</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">&gt;</span></span>**/*.xml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>includes</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filtering</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filtering</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resource</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resource</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directory</span><span class="token punctuation">&gt;</span></span>src/main/resources<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>directory</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resource</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:9.11,words:2732},y:"a",title:"SpringBoot整合Mybatis-plus及用法2",i:"java"},["/dev/SpringBoot整合Mybatis-plus及用法2.html","/dev/SpringBoot%E6%95%B4%E5%90%88Mybatis-plus%E5%8F%8A%E7%94%A8%E6%B3%952","/dev/SpringBoot整合Mybatis-plus及用法2.md","/dev/SpringBoot%E6%95%B4%E5%90%88Mybatis-plus%E5%8F%8A%E7%94%A8%E6%B3%952.md"]],["v-27bd9296","/dev/SpringBoot%E6%95%B4%E5%90%88Socket%E5%AE%9E%E6%88%98%E6%A1%88%E4%BE%8B.html",{a:"xlc520",d:"2022-11-23T00:00:00.000Z",l:"2022年11月23日",c:["Java"],g:["Java","SpringBoot"],e:`<h1> SpringBoot 整合 Socket 实战案例</h1>
<h3> 功能场景点：</h3>
<ol>
<li>群发，所有人都能收到</li>
<li>局部群发，部分人群都能收到</li>
<li>单点推送， 指定某个人的页面</li>
</ol>
<p>惯例，先看看本次实战示例项目结构：</p>
<figure><img src="https://static.xlc520.ml/blogImage/640-1669203207389-0.png" alt="SpringBoot整合Socket" tabindex="0" loading="lazy"><figcaption>SpringBoot整合Socket</figcaption></figure>`,r:{minutes:6.76,words:2027},y:"a",title:"SpringBoot 整合 Socket 实战案例",i:"java"},["/dev/SpringBoot整合Socket实战案例.html","/dev/SpringBoot%E6%95%B4%E5%90%88Socket%E5%AE%9E%E6%88%98%E6%A1%88%E4%BE%8B","/dev/SpringBoot整合Socket实战案例.md","/dev/SpringBoot%E6%95%B4%E5%90%88Socket%E5%AE%9E%E6%88%98%E6%A1%88%E4%BE%8B.md"]],["v-44a13a86","/dev/SpringBoot%E6%95%B4%E5%90%88%E6%B5%81%E7%A8%8B%E5%BC%95%E6%93%8EFlowable.html",{a:"xlc520",d:"2022-07-04T00:00:00.000Z",l:"2022年7月4日",c:["Java"],g:["Java"],e:`<h1> Spring Boot 整合流程引擎 Flowable</h1>
<p>流程引擎，也算是一个比较常见的工具了，我们在日常的很多开发中都会用到，当然用的最多的就是 OA 系统了，但是在一些非 OA 系统中，我们也会涉及到，比如一个 CRM 中，可能会有合同管理的需求，合同的审批，也是需要流程引擎的。</p>
<p>所以今天我们来简单聊聊流程引擎，顺便写一个简单的例子，小伙伴们一起来感受下流程引擎到底是个啥。</p>
<h2> 1. 流程引擎介绍</h2>
<p>Flowable 是一个使用 Java 编写的轻量级业务流程引擎。Flowable 流程引擎可用于部署 BPMN2.0 流程定义（用于定义流程的行业 XML 标准），创建这些流程定义的流程实例，进行查询，访问运行中或历史的流程实例与相关数据，等等。</p>`,r:{minutes:11.24,words:3371},y:"a",title:"Spring Boot 整合流程引擎 Flowable",i:"java"},["/dev/SpringBoot整合流程引擎Flowable.html","/dev/SpringBoot%E6%95%B4%E5%90%88%E6%B5%81%E7%A8%8B%E5%BC%95%E6%93%8EFlowable","/dev/SpringBoot整合流程引擎Flowable.md","/dev/SpringBoot%E6%95%B4%E5%90%88%E6%B5%81%E7%A8%8B%E5%BC%95%E6%93%8EFlowable.md"]],["v-5a4b6345","/dev/SpringBoot%E8%B6%85%E5%A4%A7%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0.html",{a:"xlc520",d:"2022-11-22T00:00:00.000Z",l:"2022年11月22日",c:["Java"],g:["Java"],e:`<h1> SpringBoot超大文件上传</h1>
<h2> <strong>一. 秒传</strong></h2>
<h3> 1、什么是秒传</h3>
<p>通俗的说，你把要上传的东西上传，服务器会先做<strong>MD5</strong>校验，如果服务器上有一样的东西，它就直接给你个新地址，其实你下载的都是服务器上的同一个文件，想要不秒传，其实只要让<strong>MD5</strong>改变，就是对文件本身做一下修改（改名字不行），例如一个文本文件，你多加几个字，MD5就变了，就不会秒传了。</p>
<h3> 2、本文实现的秒传核心逻辑</h3>
<ul>
<li>利用redis的set方法存放文件上传状态，其中key为文件上传的md5，value为是否上传完成的标志位。</li>
<li>当标志位true为上传已经完成，此时如果有相同文件上传，则进入秒传逻辑。如果标志位为false，则说明还没上传完成，此时需要在调用set的方法，保存块号文件记录的路径，其中key为上传文件md5加一个固定前缀，value为块号文件记录路径</li>
</ul>`,r:{minutes:7.28,words:2184},y:"a",title:"SpringBoot超大文件上传",i:"java"},["/dev/SpringBoot超大文件上传.html","/dev/SpringBoot%E8%B6%85%E5%A4%A7%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0","/dev/SpringBoot超大文件上传.md","/dev/SpringBoot%E8%B6%85%E5%A4%A7%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0.md"]],["v-311e62d0","/dev/SpringBoot%E9%9B%86%E6%88%90Flowable%E5%81%9A%E5%B7%A5%E4%BD%9C%E6%B5%81.html",{a:"xlc520",d:"2022-08-11T00:00:00.000Z",l:"2022年8月11日",c:["Java"],g:["Java"],e:`<h1> 什么是BPMN</h1>
<h2> <strong>工作流(引擎)介绍</strong></h2>
<p>在任何行业和企业中，都有各种各样的流程，例如：</p>
<ol>
<li>请假流程</li>
<li>报销流程</li>
<li>入职流程</li>
<li>离职流程</li>
<li>出差流程</li>
<li>等等……</li>
</ol>
<p>就算你自己没有设计过工作流，那么你每天肯定也在使用各种流程。</p>
<p>工作流引擎其实就是使用代码实现UML流程图中的各个步骤而已：</p>
<figure><img src="https://static.xlc520.ml/blogImage/a92297eeb2b94961ae0b379f4d8b9ddc.png" alt="SpringBoot集成Flowable" tabindex="0" loading="lazy"><figcaption>SpringBoot集成Flowable</figcaption></figure>`,r:{minutes:30.15,words:9046},y:"a",title:"SpringBoot集成Flowable做工作流",i:"java"},["/dev/SpringBoot集成Flowable做工作流.html","/dev/SpringBoot%E9%9B%86%E6%88%90Flowable%E5%81%9A%E5%B7%A5%E4%BD%9C%E6%B5%81","/dev/SpringBoot集成Flowable做工作流.md","/dev/SpringBoot%E9%9B%86%E6%88%90Flowable%E5%81%9A%E5%B7%A5%E4%BD%9C%E6%B5%81.md"]],["v-507bed41","/dev/SpringBoot%E9%A1%B9%E7%9B%AE%E9%89%B4%E6%9D%83%E7%9A%84%204%20%E7%A7%8D%E6%96%B9%E5%BC%8F.html",{a:"xlc520",d:"2022-03-01T00:00:00.000Z",l:"2022年3月1日",c:["Java"],g:["Java"],e:`<h1> Spring Boot 项目鉴权的 4 种方式</h1>
<h2> <strong>传统AOP</strong></h2>
<p>对于这种需求，首先想到的当然是 Spring-boot 提供的 AOP 接口，只需要在 Controller 方法前添加切点，然后再对切点进行处理即可。</p>
<h3> <strong>实现</strong></h3>
<p>其使用步骤如下：</p>
<ol>
<li>使用 <code>@Aspect</code> 声明一下切面类 <code>WhitelistAspect</code>；</li>
<li>在切面类内添加一个切点 <code>whitelistPointcut()</code>，为了实现此切点灵活可装配的能力，这里不使用 <code>execution</code> 全部拦截，而是添加一个注解 <code>@Whitelist</code>，被注解的方法才会校验白名单。</li>
<li>在切面类中使用 spring 的 AOP 注解 <code>@Before</code> 声明一个通知方法 <code>checkWhitelist()</code> 在 Controller 方法被执行之前校验白名单。</li>
</ol>`,r:{minutes:5.68,words:1705},y:"a",title:"Spring Boot 项目鉴权的 4 种方式",i:"type"},["/dev/SpringBoot项目鉴权的 4 种方式.html","/dev/SpringBoot%E9%A1%B9%E7%9B%AE%E9%89%B4%E6%9D%83%E7%9A%84%204%20%E7%A7%8D%E6%96%B9%E5%BC%8F","/dev/SpringBoot项目鉴权的 4 种方式.md","/dev/SpringBoot%E9%A1%B9%E7%9B%AE%E9%89%B4%E6%9D%83%E7%9A%84%204%20%E7%A7%8D%E6%96%B9%E5%BC%8F.md"]],["v-c5cd3edc","/dev/SpringCloudAlibaba.html",{a:"xlc520",d:"2022-03-23T00:00:00.000Z",l:"2022年3月23日",c:["Java"],g:["Java"],e:`<h1> Spring Cloud Alibaba</h1>
<p>互联网时代，面对复杂业务，讲究 <strong>分而治之</strong> 。将一个大的单体系统拆分为若干个微服务，保证每个系统的职责单一，可以垂直深度扩展。</p>
<p>但是一个个独立的微服务像一座座孤岛，如何将他们串联起来，才能发挥最大价值。</p>
<p>这时，我们就要提微服务的生态圈。</p>
<p>那么微服务生态圈都有哪些模块？他们的作用分别是什么？</p>
<ul>
<li><strong>服务的注册、发现</strong> 。生产者启动时，会将自己的信息注册上报，这样调用方只需连接注册中心，根据一定的负载算法，就可以与服务提供方建立连接，从而实现应用间的解耦。</li>
<li><strong>服务调用</strong> 。通过多种协议（如：HTTP等）实现目标服务的真正调用。</li>
<li><strong>负载均衡</strong> 。主要是提供多种负载算法，满足不同业务场景下的集群多实例的选择机制</li>
<li><strong>服务的稳定性</strong> 。提供了服务熔断、限流、降级</li>
<li><strong>分布式配置中心</strong> 。应用的配置项统一管理，修改后能动态生效</li>
<li><strong>消息队列</strong> 。非核心逻辑从同步流程抽离，解耦，异步化处理，缩短RT时间</li>
<li><strong>网关</strong> 。将一些通用的处理逻辑，如：限流、鉴权、黑白名单、灰度等抽取到一个单独的、前置化系统统一处理。</li>
<li><strong>监控</strong> 。监控系统的健康状况</li>
<li><strong>分布式链路追踪</strong> 。查看接口的调用链路，为性能优化、排查问题提供输入</li>
<li><strong>自动化部署</strong> 。持续集成，快速部署应用。</li>
</ul>`,r:{minutes:19.16,words:5748},y:"a",title:"Spring Cloud Alibaba",i:"type"},["/dev/SpringCloudAlibaba","/dev/SpringCloudAlibaba.md"]],["v-3709255a","/dev/SpringCloudGateway_Oauth2%E5%AE%9E%E7%8E%B0%E7%BB%9F%E4%B8%80%E8%AE%A4%E8%AF%81%E5%92%8C%E9%89%B4%E6%9D%83.html",{a:"xlc520",d:"2022-04-09T00:00:00.000Z",l:"2022年4月9日",c:["Java"],g:["Java"],e:`<h1> Spring Cloud Gateway + Oauth2 实现统一认证和鉴权</h1>
<h2> 摘要</h2>
<p>最近发现了一个很好的微服务权限解决方案，可以通过认证服务进行统一认证，然后通过网关来统一校验认证和鉴权。此方案为目前最新方案，仅支持Spring Boot 2.2.0、Spring Cloud Hoxton 以上版本，本文将详细介绍该方案的实现，希望对大家有所帮助！</p>
<h2> 前置知识</h2>
<blockquote>
<p>我们将采用Nacos作为注册中心，Gateway作为网关，使用<code>nimbus-jose-jwt</code>JWT库操作JWT令牌</p>
</blockquote>`,r:{minutes:9.81,words:2943},y:"a",title:"Spring Cloud Gateway + Oauth2 实现统一认证和鉴权",i:"java"},["/dev/SpringCloudGateway_Oauth2实现统一认证和鉴权.html","/dev/SpringCloudGateway_Oauth2%E5%AE%9E%E7%8E%B0%E7%BB%9F%E4%B8%80%E8%AE%A4%E8%AF%81%E5%92%8C%E9%89%B4%E6%9D%83","/dev/SpringCloudGateway+Oauth2实现统一认证和鉴权.html","/dev/SpringCloudGateway+Oauth2%E5%AE%9E%E7%8E%B0%E7%BB%9F%E4%B8%80%E8%AE%A4%E8%AF%81%E5%92%8C%E9%89%B4%E6%9D%83.html","/dev/SpringCloudGateway+Oauth2实现统一认证和鉴权.md","/dev/SpringCloudGateway+Oauth2%E5%AE%9E%E7%8E%B0%E7%BB%9F%E4%B8%80%E8%AE%A4%E8%AF%81%E5%92%8C%E9%89%B4%E6%9D%83.md"]],["v-3febf42d","/dev/SpringCloudGatewayAPI%E6%8E%A5%E5%8F%A3%E5%AE%89%E5%85%A8%E8%AE%BE%E8%AE%A1(%E5%8A%A0%E5%AF%86%E7%AD%BE%E5%90%8D).html",{a:"xlc520",d:"2022-07-13T00:00:00.000Z",l:"2022年7月13日",c:["Java"],g:["Java"],e:`<h1> SpringCloud Gateway API接口安全设计（加密 、签名）</h1>
<h2> 1 防止数据抓包窃取</h2>
<h3> 1.1 风险简述</h3>
<p>简述：当用户登录时，恶意攻击者可以用抓包工具可以拿到用户提交的表单信息，可以获取用户的账号密码，进而可以恶意访问网站。
<img src="https://static.xlc520.ml/blogImage/1a25b48aa07f4da7adeed28003850f74.png" alt="图片" loading="lazy"></p>
<h3> 1.2 RSA 非对称加密</h3>
<h4> 1.2.1 RSA简介4</h4>`,r:{minutes:12.11,words:3633},y:"a",title:"SpringCloud Gateway API接口安全设计（加密 、签名）",i:"java"},["/dev/SpringCloudGatewayAPI接口安全设计(加密签名).html","/dev/SpringCloudGatewayAPI%E6%8E%A5%E5%8F%A3%E5%AE%89%E5%85%A8%E8%AE%BE%E8%AE%A1(%E5%8A%A0%E5%AF%86%E7%AD%BE%E5%90%8D)","/dev/SpringCloudGatewayAPI接口安全设计(加密签名).md","/dev/SpringCloudGatewayAPI%E6%8E%A5%E5%8F%A3%E5%AE%89%E5%85%A8%E8%AE%BE%E8%AE%A1(%E5%8A%A0%E5%AF%86%E7%AD%BE%E5%90%8D).md"]],["v-599ab9b3","/dev/SpringCloud%E4%BC%98%E9%9B%85%E4%B8%8B%E7%BA%BF%E4%BB%A5%E5%8F%8A%E7%81%B0%E5%BA%A6%E5%8F%91%E5%B8%83.html",{a:"xlc520",d:"2022-04-10T00:00:00.000Z",l:"2022年4月10日",c:["Java"],g:["Java"],e:`<h1> Spring Cloud 优雅下线以及灰度发布</h1>
<h2> 前言</h2>
<p>在生产环境中，如何保证在服务升级的时候，不影响用户的体验，这个是一个非常重要的问题。如果在我们升级服务的时候，会造成一段时间内的服务不可用，这就是不够优雅的。那什么是优雅的呢？主要就是指在服务升级的时候，不中断整个服务，让用户无感知，进而不会影响用户的体验，这就是优雅的。</p>
<p>实际上，优雅下线是目标，而不是手段，它是一个相对的概念，例如<code>kill PID</code>和<code>kill -9 PID</code>都是暴力杀死服务，相对于<code>kill -9 PID</code>来说，<code>kill PID</code>就是优雅的。但如果单独拿<code>kill PID</code>出来说，我们能说它是优雅的下线策略吗？肯定不是啊，就是这个道理。</p>`,r:{minutes:9.02,words:2706},y:"a",title:"Spring Cloud 优雅下线以及灰度发布",i:"java"},["/dev/SpringCloud优雅下线以及灰度发布.html","/dev/SpringCloud%E4%BC%98%E9%9B%85%E4%B8%8B%E7%BA%BF%E4%BB%A5%E5%8F%8A%E7%81%B0%E5%BA%A6%E5%8F%91%E5%B8%83","/dev/SpringCloud优雅下线以及灰度发布.md","/dev/SpringCloud%E4%BC%98%E9%9B%85%E4%B8%8B%E7%BA%BF%E4%BB%A5%E5%8F%8A%E7%81%B0%E5%BA%A6%E5%8F%91%E5%B8%83.md"]],["v-32690d91","/dev/Springboot%E5%88%A9%E7%94%A8ThreadPoolTaskExecutor%E5%A4%9A%E7%BA%BF%E7%A8%8B%E6%89%B9%E9%87%8F%E6%8F%92%E5%85%A5%E7%99%BE%E4%B8%87%E7%BA%A7%E6%95%B0%E6%8D%AE.html",{a:"xlc520",d:"2022-06-10T00:00:00.000Z",l:"2022年6月10日",c:["Java"],g:["Java","Spring"],e:`<h1> Springboot利用ThreadPoolTaskExecutor多线程批量插入百万级数据</h1>
<h2> 前言</h2>
<p>开发目的：提高百万级数据插入效率。</p>
<p>采取方案：利用ThreadPoolTaskExecutor多线程批量插入。</p>
<p>采用技术：springboot2.1.1+mybatisPlus3.0.6+swagger2.5.0+Lombok1.18.4+postgresql+ThreadPoolTaskExecutor等。</p>
<h2> <strong>具体实现细节</strong></h2>
<h3> application-dev.properties添加线程池配置信息</h3>`,r:{minutes:2.63,words:788},y:"a",title:"Springboot利用ThreadPoolTaskExecutor多线程批量插入百万级数据",i:"java"},["/dev/Springboot利用ThreadPoolTaskExecutor多线程批量插入百万级数据.html","/dev/Springboot%E5%88%A9%E7%94%A8ThreadPoolTaskExecutor%E5%A4%9A%E7%BA%BF%E7%A8%8B%E6%89%B9%E9%87%8F%E6%8F%92%E5%85%A5%E7%99%BE%E4%B8%87%E7%BA%A7%E6%95%B0%E6%8D%AE","/dev/Springboot利用ThreadPoolTaskExecutor多线程批量插入百万级数据.md","/dev/Springboot%E5%88%A9%E7%94%A8ThreadPoolTaskExecutor%E5%A4%9A%E7%BA%BF%E7%A8%8B%E6%89%B9%E9%87%8F%E6%8F%92%E5%85%A5%E7%99%BE%E4%B8%87%E7%BA%A7%E6%95%B0%E6%8D%AE.md"]],["v-1b6b1cfa","/dev/VUE%E4%B8%8B%E6%8B%89%E5%88%97%E8%A1%A8%E5%8A%A8%E6%80%81%E5%88%87%E6%8D%A2.html",{a:"xlc520",d:"2022-07-05T00:00:00.000Z",l:"2022年7月5日",c:["Java"],g:["Java"],e:`<h1> VUE下拉列表动态切换(人人组件)</h1>
<h2> 方法一</h2>
<p>vue前端</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>大类<span class="token punctuation">"</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>busiLines<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
     <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ren-select</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dataForm.busiLines<span class="token punctuation">"</span></span> <span class="token attr-name">dict-type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>PIG_BUSI_LINES<span class="token punctuation">"</span></span> <span class="token attr-name">@change</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selectchange<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>大类<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ren-select</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-form-item</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>细分<span class="token punctuation">"</span></span> <span class="token attr-name">prop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>busiDtiLines<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-select</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dataForm.busiDtiLines<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>细分<span class="token punctuation">"</span></span> <span class="token attr-name">clearable</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-option</span> <span class="token attr-name">:label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data.dictLabel<span class="token punctuation">"</span></span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data in dataList<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data.dictValue<span class="token punctuation">"</span></span> <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>data.dictValue<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>{{ data.dictLabel }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-option</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-select</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-form-item</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.21,words:362},y:"a",title:"VUE下拉列表动态切换(人人组件)",i:"java"},["/dev/VUE下拉列表动态切换.html","/dev/VUE%E4%B8%8B%E6%8B%89%E5%88%97%E8%A1%A8%E5%8A%A8%E6%80%81%E5%88%87%E6%8D%A2","/dev/VUE下拉列表动态切换.md","/dev/VUE%E4%B8%8B%E6%8B%89%E5%88%97%E8%A1%A8%E5%8A%A8%E6%80%81%E5%88%87%E6%8D%A2.md"]],["v-653e1c1d","/dev/Vue%E5%AD%90%E7%BB%84%E4%BB%B6%E4%B8%8E%E7%88%B6%E7%BB%84%E4%BB%B6%E4%BC%A0%E5%80%BC.html",{a:"xlc520",d:"2022-07-08T00:00:00.000Z",l:"2022年7月8日",c:["Java"],g:["Java"],e:`<h1> Vue 子组件与父组件传值</h1>
<h2> 一、通过父组件给子组件传递函数类型的props实现</h2>
<p>注意：通过props父子组件的设置接收的名称要一样，绑定的名字（<code>:getChildInfo</code>）和接收的一样（<code>props: ['getChildInfo']</code>）,当调用的时候使用this.xxx.xx范围要对应。</p>
<p>父组件：</p>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span> <span class="token attr-name">:getChildInfo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getChildInfo<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Child</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:2.1,words:630},y:"a",title:"Vue 子组件与父组件传值",i:"java"},["/dev/Vue子组件与父组件传值.html","/dev/Vue%E5%AD%90%E7%BB%84%E4%BB%B6%E4%B8%8E%E7%88%B6%E7%BB%84%E4%BB%B6%E4%BC%A0%E5%80%BC","/dev/Vue子组件与父组件传值.md","/dev/Vue%E5%AD%90%E7%BB%84%E4%BB%B6%E4%B8%8E%E7%88%B6%E7%BB%84%E4%BB%B6%E4%BC%A0%E5%80%BC.md"]],["v-d985b94c","/dev/Vue%E5%BC%80%E5%8F%91%E6%8A%A5%E9%94%99%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3.html",{a:"xlc520",d:"2022-07-17T00:00:00.000Z",l:"2022年7月17日",c:["Java"],g:["Java"],e:`<h1> Vue开发报错问题解决</h1>
<h2> 2.同组件新增修改出现数据查询是上一次</h2>
<blockquote>
<p>2022年7月5日09:22:16</p>
</blockquote>
<p>关闭组件时清空数据，新增时最好也清空,methods方法中可以添加该方法，下半部分IDE插件可能会报错，但不影响使用，也可以使用上半部分，但是效果不好。如果tab中有列表，有列表的那项可以设置lazy为true，方法中不清空数据。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token function">clearData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// this.$refs.basic.dataForm={};</span>
    <span class="token comment">// this.$refs.idsgmt.dataForm={};</span>
    <span class="token comment">// this.$refs.fcsinfsgmt.dataForm={};</span>
    <span class="token comment">// //this.$refs.mnmmbinfsgmt.dataForm={};</span>
    <span class="token comment">// this.$refs.regcap.dataForm={};</span>
    <span class="token comment">// this.$refs.sharhodinf.dataForm={};</span>
    <span class="token comment">// this.$refs.actucotrlinfsg.dataForm={};</span>
    <span class="token comment">// this.$refs.spvsgathrtyinfsgmt.dataForm={};</span>
    <span class="token comment">// // this.$refs.cotainfsgmt.dataForm={};</span>
    <span class="token comment">// this.$refs.enctfitginf.dataForm={};</span>
    <span class="token comment">// // this.$refs.enicdnrltpinf.dataForm={};</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataForm<span class="token punctuation">.</span>id<span class="token operator">=</span><span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataForm<span class="token punctuation">.</span>custId<span class="token operator">=</span><span class="token string">''</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataForm<span class="token punctuation">.</span>bssgmt<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataForm<span class="token punctuation">.</span>idsgmt<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataForm<span class="token punctuation">.</span>fcsinfsgmt<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataForm<span class="token punctuation">.</span>regCap<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">//this.dataForm.mnmmbinfsgmt={};</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataForm<span class="token punctuation">.</span>sharhodInf<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataForm<span class="token punctuation">.</span>actucotrlinfsg<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataForm<span class="token punctuation">.</span>spvsgathrtyinfsgmt<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">//this.dataForm.cotainfsgmt={};</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>dataForm<span class="token punctuation">.</span>enctfitginf<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">//this.dataForm.enicdnrltpinf={};</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.29,words:386},y:"a",title:"Vue开发报错问题解决",i:"java"},["/dev/Vue开发报错问题解决.html","/dev/Vue%E5%BC%80%E5%8F%91%E6%8A%A5%E9%94%99%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3","/dev/Vue开发报错问题解决.md","/dev/Vue%E5%BC%80%E5%8F%91%E6%8A%A5%E9%94%99%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3.md"]],["v-535669d3","/dev/fastjson%E4%B8%ADJSONObject%E7%9A%84%E5%B8%B8%E7%94%A8%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95.html",{a:"xlc520",d:"2022-04-10T00:00:00.000Z",l:"2022年4月10日",c:["Java"],g:["Java"],e:`<h1> fastjson 中JSONObject的常用使用方法</h1>
<h3> 1、导入需要的jar包</h3>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>net.oschina.zcx7878<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>fastdfs-client-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.27.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.14,words:342},y:"a",title:"fastjson 中JSONObject的常用使用方法",i:"java"},["/dev/fastjson中JSONObject的常用使用方法.html","/dev/fastjson%E4%B8%ADJSONObject%E7%9A%84%E5%B8%B8%E7%94%A8%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95","/dev/fastjson中JSONObject的常用使用方法.md","/dev/fastjson%E4%B8%ADJSONObject%E7%9A%84%E5%B8%B8%E7%94%A8%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95.md"]],["v-c7a6fd84","/dev/idea-tips.html",{a:"xlc520",d:"2022-03-17T00:00:00.000Z",l:"2022年3月17日",c:["IDEA"],g:["IDEA"],u:!1,e:`<h1> Intellij idea高效使用教程</h1>
<h2> 一. 安装插件</h2>
<p><strong>1. Codota 代码智能提示插件</strong></p>
<figure><img src="https://p3.toutiaoimg.com/origin/pgc-image/14502291ea3f4cafa4dbbf7bd4ffbf55?from=pc" alt="Intellij idea高效使用教程" tabindex="0" loading="lazy"><figcaption>Intellij idea高效使用教程</figcaption></figure>`,r:{minutes:11.05,words:3315},y:"a",title:"Intellij idea高效使用教程",i:"page"},["/dev/idea-tips","/dev/idea-tips.md"]],["v-468de280","/dev/jreble%E5%AE%89%E8%A3%85%E5%8F%8A%E7%A0%B4%E8%A7%A3%E6%96%B9%E6%B3%95.html",{a:"xlc520",d:"2023-01-10T00:00:00.000Z",l:"2023年1月10日",c:["Java"],g:["Java"],e:`<h1> jreble安装及破解方法</h1>
<p><strong>在项目开发的过程中我们经常要重启项目进行代码的重新加载，在大项目开发的过程中这种不断的重新启动项目会浪费很多时间，在IDEA中我们可以使用ctrl+F9的方式进行热加载，但是这种方式对方法名的修改，和新加方法不能很好的支持。本章我们讲解一下功能强大的jrebel热加载工具，可以在不重启的情况下对新加的类、方法的修改都有很多好的支持，可以在实际项目开发中节省大量的时间，下面我们就一步一步开始进行安装设置。</strong></p>
<h2> <strong>一、安装插件</strong></h2>
<figure><img src="https://static.xlc520.ml/blogImage/v2-c19397d241007d79c422291524cc08d6_r.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,r:{minutes:1.9,words:570},y:"a",title:"jreble安装及破解方法",i:"java"},["/dev/jreble安装及破解方法.html","/dev/jreble%E5%AE%89%E8%A3%85%E5%8F%8A%E7%A0%B4%E8%A7%A3%E6%96%B9%E6%B3%95","/dev/jreble安装及破解方法.md","/dev/jreble%E5%AE%89%E8%A3%85%E5%8F%8A%E7%A0%B4%E8%A7%A3%E6%96%B9%E6%B3%95.md"]],["v-764b221e","/dev/logback%E8%87%AA%E5%AE%9A%E4%B9%89%E6%97%A5%E5%BF%97%E8%84%B1%E6%95%8F%E7%BB%84%E4%BB%B6.html",{a:"xlc520",d:"2022-08-08T00:00:00.000Z",l:"2022年8月8日",c:["Java"],g:["Java"],e:`<h1> logback - 自定义日志脱敏组件</h1>
<h2> 前言</h2>
<p>在我们书写代码的时候，会书写许多日志代码，但是有些敏感数据是需要进行安全脱敏处理的。</p>
<p>对于日志脱敏的方式有很多，常见的有<strong>①使用conversionRule标签，继承MessageConverter②书写一个脱敏工具类，在打印日志的时候对特定特字段进行脱敏返回。</strong></p>
<p>两种方式各有优缺点：</p>
<p>第一种方式需要修改代码，不符合开闭原则。</p>
<p>第二种方式，需要在日志方法的参数进行脱敏，对原生日志有入侵行为。</p>
<h2> 自定义脱敏组件（slf4j+logback）</h2>`,r:{minutes:6.2,words:1859},y:"a",title:"logback - 自定义日志脱敏组件",i:"java"},["/dev/logback自定义日志脱敏组件.html","/dev/logback%E8%87%AA%E5%AE%9A%E4%B9%89%E6%97%A5%E5%BF%97%E8%84%B1%E6%95%8F%E7%BB%84%E4%BB%B6","/dev/logback自定义日志脱敏组件.md","/dev/logback%E8%87%AA%E5%AE%9A%E4%B9%89%E6%97%A5%E5%BF%97%E8%84%B1%E6%95%8F%E7%BB%84%E4%BB%B6.md"]],["v-d7add974","/dev/mybatis%20%E5%BB%BA%E8%A1%A8%E3%80%81%E5%88%A0%E8%A1%A8%E3%80%81%E6%9F%A5%E8%A1%A8%E8%AF%AD%E5%8F%A5(mysql%E6%95%B0%E6%8D%AE%E5%BA%93).html",{a:"xlc520",d:"2022-04-03T00:00:00.000Z",l:"2022年4月3日",c:["Java"],g:["Java"],e:`<h1> Mybatis 建表、删表、查表语句(mysql数据库)</h1>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8" ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">"-//mybatis.org//DTD Mapper 3.0//EN"</span> <span class="token string">"http://mybatis.org/dtd/mybatis-3-mapper.dtd"</span> <span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.crsc.sys.rabbitmq.dao.mysql.DBTableInitMapper<span class="token punctuation">"</span></span> <span class="token punctuation">&gt;</span></span>
 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>update</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>createTodomessageTable<span class="token punctuation">"</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>String<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>  
	  CREATE TABLE todomessage (
		  id int(11) NOT NULL AUTO_INCREMENT COMMENT 'id',
		  moduleID varchar(255) DEFAULT NULL COMMENT '模块ID',
		  authCode varchar(255) DEFAULT NULL COMMENT '授权码',
		  itemid varchar(100) DEFAULT NULL COMMENT '待办事项ID',
		  statecode varchar(255) DEFAULT '0' COMMENT '任务状态  0待办  1 已办',
		  statePush varchar(4) DEFAULT '0' COMMENT '推送状态 0 未推送  1 已推送',
		  ssolink varchar(255) DEFAULT NULL COMMENT '明细链接',
		  userno varchar(200) DEFAULT NULL COMMENT '所属人员ID',
		  level varchar(255) DEFAULT NULL COMMENT '重要等级',
		  content varchar(255) DEFAULT NULL COMMENT '待办事项内容',
		  datetime datetime DEFAULT NULL COMMENT '生成时间',
		  nodename varchar(255) DEFAULT NULL COMMENT '审批节点',
		  extParameters varchar(500) DEFAULT NULL COMMENT '扩展参数',
		  updatetime datetime DEFAULT NULL COMMENT '修改时间',
		  uid varchar(64) DEFAULT NULL COMMENT 'UUID',
		  taskid varchar(255) DEFAULT NULL,
		  pushtime datetime DEFAULT NULL COMMENT '推送时间',
		  PROC_INST_ID varchar(64) DEFAULT NULL COMMENT '运行实例id',
		  PROC_DEF_ID varchar(64) DEFAULT NULL COMMENT '流程定义id',
		  version int(11) NOT NULL DEFAULT '0' COMMENT '乐观锁',
		  systemKey varchar(255) NOT NULL COMMENT '数据所属系统的key标识',
		  sourcebacaklog varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '发送oa代办数据',
		  sourcefinished varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '发送oa已办数据',
		  backlogtime datetime DEFAULT NULL COMMENT '代办时间',
		  finishedtime datetime DEFAULT NULL COMMENT '已办时间',
		  backlogflag varchar(255) DEFAULT NULL COMMENT '代办标识',
		  finishedflag varchar(255) DEFAULT NULL COMMENT '已办标识',
		  sourcedel varchar(2000) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '发送删除oa代办数据',
		  delbacklogtime datetime DEFAULT NULL COMMENT '删除代办发送oa时间',
		  delflag varchar(255) DEFAULT NULL COMMENT '删除代办标识',
		  formName varchar(255) DEFAULT NULL COMMENT '流程名称',
		  PRIMARY KEY (id) USING BTREE
	) ENGINE=InnoDB AUTO_INCREMENT=1637 DEFAULT CHARSET=utf8                 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>update</span><span class="token punctuation">&gt;</span></span> 
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>update</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dropTodomessageTable<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>  
    drop table todomessage     
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>update</span><span class="token punctuation">&gt;</span></span>
  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>selectTodoMessage<span class="token punctuation">"</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>java.lang.Integer<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  	SELECT COUNT(1) FROM information_schema.tables where table_name ='todomessage'
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
  
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.69,words:507},y:"a",title:"Mybatis 建表、删表、查表语句(mysql数据库)",i:"type"},["/dev/mybatis 建表、删表、查表语句(mysql数据库).html","/dev/mybatis%20%E5%BB%BA%E8%A1%A8%E3%80%81%E5%88%A0%E8%A1%A8%E3%80%81%E6%9F%A5%E8%A1%A8%E8%AF%AD%E5%8F%A5(mysql%E6%95%B0%E6%8D%AE%E5%BA%93)","/dev/mybatis 建表、删表、查表语句(mysql数据库).md","/dev/mybatis%20%E5%BB%BA%E8%A1%A8%E3%80%81%E5%88%A0%E8%A1%A8%E3%80%81%E6%9F%A5%E8%A1%A8%E8%AF%AD%E5%8F%A5(mysql%E6%95%B0%E6%8D%AE%E5%BA%93).md"]],["v-224cf13a","/dev/openssl%E4%B8%80%E9%94%AE%E8%87%AA%E7%AD%BE%E8%AF%81%E4%B9%A6.html",{a:"xlc520",d:"2022-01-18T00:00:00.000Z",l:"2022年1月18日",c:["other"],g:["other"],e:`<h1> Openssl一键自签证书</h1>
<p><code>vim openssl.sh</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">"<span class="token variable">$domain</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">do</span>
    <span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">"输入域名/IP(必填,如 *.haoduck.com): "</span> domain
<span class="token keyword">done</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">"输入邮箱(选填,默认admin@haoduck.com): "</span> mail
<span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">"<span class="token variable">$mail</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">mail</span><span class="token operator">=</span>admin@haoduck.com
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">"输入日期(选填,默认3650): "</span> day
<span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">"<span class="token variable">$day</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">day</span><span class="token operator">=</span><span class="token number">3650</span>
<span class="token assign-left variable">dir</span><span class="token operator">=</span><span class="token variable">$domain</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$dir</span>
<span class="token assign-left variable">crt_file</span><span class="token operator">=</span><span class="token string">"<span class="token variable">$dir</span>/<span class="token variable">\${domain}</span>.crt"</span>
<span class="token assign-left variable">key_file</span><span class="token operator">=</span><span class="token string">"<span class="token variable">$dir</span>/<span class="token variable">\${domain}</span>.key"</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">command</span> <span class="token parameter variable">-v</span> openssl<span class="token variable">)</span></span>"</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    openssl req <span class="token parameter variable">-x509</span> <span class="token parameter variable">-nodes</span> <span class="token parameter variable">-newkey</span> rsa:2048 <span class="token parameter variable">-days</span> <span class="token variable">$day</span> <span class="token parameter variable">-keyout</span> <span class="token variable">$key_file</span> <span class="token parameter variable">-out</span> <span class="token variable">$crt_file</span> <span class="token parameter variable">-subj</span> <span class="token string">"/C=US/ST=California/L=Los Angeles/O=Haoduck/OU=Aoao/CN=<span class="token variable">\${domain}</span>/emailAddress=<span class="token variable">\${mail}</span>"</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">"<span class="token entity" title="\\t">\\t</span>证书：<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>/<span class="token variable">$crt_file</span><span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\t">\\t</span>私钥：<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>/<span class="token variable">$key_file</span>"</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"openssl 未安装"</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.56,words:168},y:"a",title:"Openssl一键自签证书",i:"type"},["/dev/openssl一键自签证书.html","/dev/openssl%E4%B8%80%E9%94%AE%E8%87%AA%E7%AD%BE%E8%AF%81%E4%B9%A6","/dev/openssl一键自签证书.md","/dev/openssl%E4%B8%80%E9%94%AE%E8%87%AA%E7%AD%BE%E8%AF%81%E4%B9%A6.md"]],["v-082b14e8","/dev/springboot%E4%BA%BA%E8%84%B8%E8%AF%86%E5%88%AB%E7%99%BB%E5%BD%95.html",{a:"xlc520",d:"2022-05-20T00:00:00.000Z",l:"2022年5月20日",c:["Java"],g:["Java"],e:`<h1> SpringBoot项目中引用百度云人脸识别功能实现人脸识别登录</h1>
<p><strong>需求分析：</strong></p>
<p>一、人脸注册</p>
<p>step1：人像采集。在注册页面上用html中video组件和js调用笔记本摄像头，并抓取人像图片。没有摄像头的笔记本、台式机的童鞋告辞吧，走好不送。。。</p>
<p>step2：人像上传至项目文件夹。将在页面采集到的人像数据转换成bash64字符传输到web后台，在后台将bash64转换成图片上传至项目文件夹。</p>
<p>step3：将用户的注册信息写入数据库，用户的照片使用路径存储。</p>
<p>step4：将采集到的人像信息（bash64）上传至百度云的人脸识别云端服务器。ps这块实现也可离线私有化处理方案，有兴趣的童鞋可自行研究。</p>`,r:{minutes:5.35,words:1605},y:"a",title:"SpringBoot项目中引用百度云人脸识别功能实现人脸识别登录",i:"java"},["/dev/springboot人脸识别登录.html","/dev/springboot%E4%BA%BA%E8%84%B8%E8%AF%86%E5%88%AB%E7%99%BB%E5%BD%95","/dev/springboot人脸识别登录.md","/dev/springboot%E4%BA%BA%E8%84%B8%E8%AF%86%E5%88%AB%E7%99%BB%E5%BD%95.md"]],["v-6963d030","/dev/springboot%E6%89%93%E5%8C%85%E4%B8%8D%E5%90%8C%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE%E4%B8%8Eshell%E8%84%9A%E6%9C%AC%E9%83%A8%E7%BD%B2.html",{a:"xlc520",d:"2022-01-15T00:00:00.000Z",l:"2022年1月15日",c:["other"],g:["other"],e:`<h1> SpringBoot打包不同环境配置与shell脚本部署</h1>
<p>本篇和大家分享的是springboot打包并结合shell脚本命令部署，重点在分享一个shell程序启动工具，希望能便利工作；</p>
<ul>
<li>profiles指定不同环境的配置</li>
<li>maven-assembly-plugin打发布压缩包</li>
<li>分享shenniu_publish.sh程序启动工具</li>
<li>linux上使用shenniu_publish.sh启动程序</li>
</ul>
<h1> profiles指定不同环境的配置</h1>
<p>通常一套程序分为了很多个部署环境：开发，测试，uat，线上 等，我们要想对这些环境区分配置文件，可以通过两种方式：</p>`,r:{minutes:8.72,words:2617},y:"a",title:"SpringBoot打包不同环境配置与shell脚本部署",i:"type"},["/dev/springboot打包不同环境配置与shell脚本部署.html","/dev/springboot%E6%89%93%E5%8C%85%E4%B8%8D%E5%90%8C%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE%E4%B8%8Eshell%E8%84%9A%E6%9C%AC%E9%83%A8%E7%BD%B2","/dev/springboot打包不同环境配置与shell脚本部署.md","/dev/springboot%E6%89%93%E5%8C%85%E4%B8%8D%E5%90%8C%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE%E4%B8%8Eshell%E8%84%9A%E6%9C%AC%E9%83%A8%E7%BD%B2.md"]],["v-47449e3c","/dev/spring%E7%BA%BF%E7%A8%8B%E6%B1%A0%E5%A4%9A%E7%BA%BF%E7%A8%8B%E5%B9%B6%E5%8F%91%E5%A4%84%E7%90%86%E5%A4%A7%E6%89%B9%E9%87%8F%E6%95%B0%E6%8D%AE.html",{a:"xlc520",d:"2022-05-20T00:00:00.000Z",l:"2022年5月20日",c:["Java"],g:["Java"],e:`<h1> Spring线程池多线程并发处理大批量数据，解决IO效率问题</h1>
<p>首先，叙述一下当前面临的问题所在。当前系统通过接口调用其他系统的数据，返回的数据达到10万级，然后将这批数据插入到oracle数据库。怎样尽可能提高这一过程的效率？</p>
<h2> 大致从两个时间节点来优化：</h2>
<p>一个节点是优化接口之间调用的响应速度，可以项目之间使用集群，实现负载均衡。接口拿到数据后可以暂存到Redis或kafka再者是MQ队列中，以提高接口直接的相率。</p>
<p>当然了如果项目团队允许，分布式的Hbase也是个不错的选择。当然了这些都不是重点，吹了半天下面才是重点。</p>`,r:{minutes:5.21,words:1562},y:"a",title:"Spring线程池多线程并发处理大批量数据，解决IO效率问题",i:"java"},["/dev/spring线程池多线程并发处理大批量数据.html","/dev/spring%E7%BA%BF%E7%A8%8B%E6%B1%A0%E5%A4%9A%E7%BA%BF%E7%A8%8B%E5%B9%B6%E5%8F%91%E5%A4%84%E7%90%86%E5%A4%A7%E6%89%B9%E9%87%8F%E6%95%B0%E6%8D%AE","/dev/spring线程池多线程并发处理大批量数据.md","/dev/spring%E7%BA%BF%E7%A8%8B%E6%B1%A0%E5%A4%9A%E7%BA%BF%E7%A8%8B%E5%B9%B6%E5%8F%91%E5%A4%84%E7%90%86%E5%A4%A7%E6%89%B9%E9%87%8F%E6%95%B0%E6%8D%AE.md"]],["v-0fc88264","/dev/sql%E8%AF%AD%E5%8F%A5%E4%BC%98%E5%8C%96%E7%9A%8430%E7%A7%8D%E6%96%B9%E6%B3%95.html",{a:"xlc520",d:"2022-08-06T00:00:00.000Z",l:"2022年8月6日",c:["Java"],g:["Java"],e:`<h1> sql语句优化的30种方法</h1>
<h5> 1.对查询进行优化，应尽量避免全表扫描，首先应考虑在 where 及 order by 涉及的列上建立索引。</h5>
<h5> 2.应尽量避免在 where 子句中使用!=或&lt;&gt;操作符，否则将引擎放弃使用索引而进行全表扫描。</h5>
<h5> 3.应尽量避免在 where 子句中对字段进行 null 值判断，否则将导致引擎放弃使用索引而进行全表扫描，如：</h5>
<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> id <span class="token keyword">from</span> t <span class="token keyword">where</span> num <span class="token operator">is</span> <span class="token boolean">null</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:6.67,words:2e3},y:"a",title:"sql语句优化的30种方法",i:"java"},["/dev/sql语句优化的30种方法.html","/dev/sql%E8%AF%AD%E5%8F%A5%E4%BC%98%E5%8C%96%E7%9A%8430%E7%A7%8D%E6%96%B9%E6%B3%95","/dev/sql语句优化的30种方法.md","/dev/sql%E8%AF%AD%E5%8F%A5%E4%BC%98%E5%8C%96%E7%9A%8430%E7%A7%8D%E6%96%B9%E6%B3%95.md"]],["v-c87b41c4","/dev/%E4%BD%BF%E7%94%A8docker%E5%BF%AB%E9%80%9F%E5%AE%89%E8%A3%85oracle.html",{a:"xlc520",d:"2022-03-02T00:00:00.000Z",l:"2022年3月2日",c:["Java"],g:["Java"],e:`<h1> 使用docker快速安装oracle</h1>
<p>1.拉取镜像:</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull registry.cn-hangzhou.aliyuncs.com/helowin/oracle_11g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.98,words:295},y:"a",title:"使用docker快速安装oracle",i:"type"},["/dev/使用docker快速安装oracle.html","/dev/%E4%BD%BF%E7%94%A8docker%E5%BF%AB%E9%80%9F%E5%AE%89%E8%A3%85oracle","/dev/使用docker快速安装oracle.md","/dev/%E4%BD%BF%E7%94%A8docker%E5%BF%AB%E9%80%9F%E5%AE%89%E8%A3%85oracle.md"]],["v-29c5c590","/dev/%E4%BD%BF%E7%94%A8easypoi%E5%AF%BC%E5%87%BAexcel%E5%AE%9E%E7%8E%B0%E5%8A%A8%E6%80%81%E5%88%97.html",{a:"xlc520",d:"2022-04-26T00:00:00.000Z",l:"2022年4月26日",c:["Java"],g:["Java"],e:`<h1> 使用 easypoi 导出 excel 实现动态列</h1>
<h3> 说明</h3>
<ul>
<li>使用的是easypoi进行导出</li>
<li>行头是动态生成</li>
<li>依据key进行列匹配，进行数据填充</li>
<li>第一列进行纵向动态合并</li>
</ul>
<h3> 工具依赖</h3>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>cn.afterturn<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>easypoi-base<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>cn.afterturn<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>easypoi-annotation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>cn.afterturn<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>easypoi-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.2.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:6.85,words:2055},y:"a",title:"使用 easypoi 导出 excel 实现动态列",i:"java"},["/dev/使用easypoi导出excel实现动态列.html","/dev/%E4%BD%BF%E7%94%A8easypoi%E5%AF%BC%E5%87%BAexcel%E5%AE%9E%E7%8E%B0%E5%8A%A8%E6%80%81%E5%88%97","/dev/使用easypoi导出excel实现动态列.md","/dev/%E4%BD%BF%E7%94%A8easypoi%E5%AF%BC%E5%87%BAexcel%E5%AE%9E%E7%8E%B0%E5%8A%A8%E6%80%81%E5%88%97.md"]],["v-7b4b9dc7","/dev/%E5%85%AD%E5%8D%81%E5%A4%9A%E4%B8%AAvscode%20%E6%8F%92%E4%BB%B6.html",{a:"xlc520",d:"2022-05-21T00:00:00.000Z",l:"2022年5月21日",c:["Java"],g:["Java"],e:`<h1> 六十多个 vscode 插件，助你打造最强编辑器</h1>
<p>本文不做任何编辑器的比较，只是我本人日常使用 <code>vscode</code> 进行开发，并且比较喜欢折腾 <code>vscode</code> ，会到处找这一些好玩的插件，于是越攒越多，今天给大家推荐一下我收藏的 <strong>60</strong> 多个 <code>vscode</code> 插件，据说插件装太多，编辑器会变卡，可能是我的电脑配置还顶得住，目前并没有感觉到卡卡的。</p>
<p>接下来我会将会以 <strong>优化外观</strong>，<strong>功能扩展</strong>，<strong>提升编码效率</strong>，<strong>代码格式化</strong>，<strong>其它插件</strong> 几个分类来进行介绍。</p>`,r:{minutes:15.95,words:4786},y:"a",title:"六十多个 vscode 插件，助你打造最强编辑器",i:"java"},["/dev/六十多个vscode 插件.html","/dev/%E5%85%AD%E5%8D%81%E5%A4%9A%E4%B8%AAvscode%20%E6%8F%92%E4%BB%B6","/dev/六十多个vscode 插件.md","/dev/%E5%85%AD%E5%8D%81%E5%A4%9A%E4%B8%AAvscode%20%E6%8F%92%E4%BB%B6.md"]],["v-4fe861a4","/dev/%E5%88%86%E5%B8%83%E5%BC%8FJVM%E7%9B%91%E6%8E%A7%E5%B7%A5%E5%85%B7.html",{a:"xlc520",d:"2022-05-24T00:00:00.000Z",l:"2022年5月24日",c:["Java"],g:["Java"],e:`<h1> 分布式JVM监控工具</h1>
<h2> 介绍</h2>
<p><strong>该项目为了方便开发者更快监控多个远程主机jvm，如果你的项目是Spring boot那么很方便集成，jar包引入即可，不是Spring boot也不用气馁，你可以快速自行初始化一个Spirng boot程序引入jar包即可</strong></p>
<h2> 效果展示</h2>
<figure><img src="https://static.xlc520.ml/blogImage/t_70-16533795511054.png" alt="分布式JVM监控工具" tabindex="0" loading="lazy"><figcaption>分布式JVM监控工具</figcaption></figure>`,r:{minutes:2.45,words:735},y:"a",title:"分布式JVM监控工具",i:"java"},["/dev/分布式JVM监控工具.html","/dev/%E5%88%86%E5%B8%83%E5%BC%8FJVM%E7%9B%91%E6%8E%A7%E5%B7%A5%E5%85%B7","/dev/分布式JVM监控工具.md","/dev/%E5%88%86%E5%B8%83%E5%BC%8FJVM%E7%9B%91%E6%8E%A7%E5%B7%A5%E5%85%B7.md"]],["v-4cb9b16c","/dev/%E5%A6%82%E4%BD%95%E8%AF%BB%E5%8F%96resources%E7%9B%AE%E5%BD%95%E4%B8%8B%E7%9A%84%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84%EF%BC%88%E4%B9%9D%E7%A7%8D%E6%96%B9%E5%BC%8F%EF%BC%89.html",{a:"xlc520",d:"2022-08-13T00:00:00.000Z",l:"2022年8月13日",c:["Java"],g:["Java"],e:`<h1> 如何读取resources目录下的文件路径（九种方式）</h1>
<h3> <strong>前情提要</strong></h3>
<p>本文中提供了九种方式获取<code>resources</code>目录下文件的方式。其中打印文件的方法如下：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 根据文件路径读取文件内容
 *
 * <span class="token keyword">@param</span> <span class="token parameter">fileInPath</span>
 * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">getFileContent</span><span class="token punctuation">(</span><span class="token class-name">Object</span> fileInPath<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token class-name">BufferedReader</span> br <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>fileInPath <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>fileInPath <span class="token keyword">instanceof</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        br <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> fileInPath<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>fileInPath <span class="token keyword">instanceof</span> <span class="token class-name">InputStream</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        br <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">InputStream</span><span class="token punctuation">)</span> fileInPath<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">String</span> line<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>line <span class="token operator">=</span> br<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    br<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.27,words:1281},y:"a",title:"如何读取resources目录下的文件路径（九种方式）",i:"java"},["/dev/如何读取resources目录下的文件路径（九种方式）.html","/dev/%E5%A6%82%E4%BD%95%E8%AF%BB%E5%8F%96resources%E7%9B%AE%E5%BD%95%E4%B8%8B%E7%9A%84%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84%EF%BC%88%E4%B9%9D%E7%A7%8D%E6%96%B9%E5%BC%8F%EF%BC%89","/dev/如何读取resources目录下的文件路径（九种方式）.md","/dev/%E5%A6%82%E4%BD%95%E8%AF%BB%E5%8F%96resources%E7%9B%AE%E5%BD%95%E4%B8%8B%E7%9A%84%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84%EF%BC%88%E4%B9%9D%E7%A7%8D%E6%96%B9%E5%BC%8F%EF%BC%89.md"]],["v-43545b33","/dev/%E5%AE%9E%E7%94%A8%E5%89%8D%E7%AB%AF%E7%BD%91%E7%AB%99%E5%B7%A5%E5%85%B7.html",{a:"xlc520",d:"2022-04-16T00:00:00.000Z",l:"2022年4月16日",c:["Java"],g:["Java"],e:`<h1> 实用前端网站工具</h1>
<p>网站汇总：</p>
<ol>
<li>CSS battle : <a href="https://cssbattle.dev" target="_blank" rel="noopener noreferrer">https://cssbattle.dev</a></li>
<li>Learn CSS layout：<a href="http://learnlayout.com" target="_blank" rel="noopener noreferrer">http://learnlayout.com</a></li>
<li>Flexbox Froggy：<a href="http://flexboxfroggy.com" target="_blank" rel="noopener noreferrer">http://flexboxfroggy.com</a></li>
<li>EnjoyCSS：<a href="https://enjoycss.com" target="_blank" rel="noopener noreferrer">https://enjoycss.com</a></li>
<li>CSS-Tricks ：<a href="https://css-tricks.com" target="_blank" rel="noopener noreferrer">https://css-tricks.com</a></li>
<li>Neumorphism：<a href="https://neumorphism.io" target="_blank" rel="noopener noreferrer">https://neumorphism.io</a></li>
<li>uiGradients：<a href="https://uigradients.com" target="_blank" rel="noopener noreferrer">https://uigradients.com</a></li>
<li>JavaScript：<a href="https://bonsaiden.github.io/JavaScript-Garden/zh/" target="_blank" rel="noopener noreferrer">https://bonsaiden.github.io/JavaScript-Garden/zh/</a></li>
<li>JS Tips：<a href="https://www.jstips.co" target="_blank" rel="noopener noreferrer">https://www.jstips.co</a></li>
<li>JSweekly：<a href="https://javascriptweekly.com" target="_blank" rel="noopener noreferrer">https://javascriptweekly.com</a></li>
<li>CDNJS：<a href="https://cdnjs.com/libraries" target="_blank" rel="noopener noreferrer">https://cdnjs.com/libraries</a></li>
<li>Beautiful Open ：<a href="https://beautifulopen.com" target="_blank" rel="noopener noreferrer">https://beautifulopen.com</a></li>
<li>JavaScript Fun：<a href="https://www.javascript.fun" target="_blank" rel="noopener noreferrer">https://www.javascript.fun</a></li>
<li>Stack Overflow：<a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer">https://stackoverflow.com</a></li>
<li>掘金：<a href="https://juejin.im" target="_blank" rel="noopener noreferrer">https://juejin.im</a></li>
<li>Codrops：<a href="https://tympanus.net" target="_blank" rel="noopener noreferrer">https://tympanus.net</a></li>
<li>CodePen：<a href="https://codepen.io" target="_blank" rel="noopener noreferrer">https://codepen.io</a></li>
<li>CodeSandBox：<a href="https://codesandbox.io" target="_blank" rel="noopener noreferrer">https://codesandbox.io</a></li>
<li>JS Bin：<a href="https://jsbin.com" target="_blank" rel="noopener noreferrer">https://jsbin.com</a></li>
<li>ICONSVG：<a href="https://iconsvg.xyz" target="_blank" rel="noopener noreferrer">https://iconsvg.xyz</a></li>
<li>OpenMoji：<a href="https://www.openmoji.org" target="_blank" rel="noopener noreferrer">https://www.openmoji.org</a></li>
<li>Share Icon ：<a href="https://www.shareicon.net" target="_blank" rel="noopener noreferrer">https://www.shareicon.net</a></li>
<li>tableconvert ：<a href="https://tableconvert.com" target="_blank" rel="noopener noreferrer">https://tableconvert.com</a></li>
<li>Feathericons：<a href="https://feathericons.com" target="_blank" rel="noopener noreferrer">https://feathericons.com</a></li>
<li>HTML5UP ：<a href="https://html5up.net/" target="_blank" rel="noopener noreferrer">https://html5up.net/</a></li>
</ol>`,r:{minutes:6.74,words:2021},y:"a",title:"实用前端网站工具",i:"java"},["/dev/实用前端网站工具.html","/dev/%E5%AE%9E%E7%94%A8%E5%89%8D%E7%AB%AF%E7%BD%91%E7%AB%99%E5%B7%A5%E5%85%B7","/dev/实用前端网站工具.md","/dev/%E5%AE%9E%E7%94%A8%E5%89%8D%E7%AB%AF%E7%BD%91%E7%AB%99%E5%B7%A5%E5%85%B7.md"]],["v-15dca1e6","/dev/%E5%B0%86Bean%E6%94%BE%E5%85%A5Spring%E5%AE%B9%E5%99%A8%E4%B8%AD%E7%9A%847%E7%A7%8D%E6%96%B9%E5%BC%8F.html",{a:"xlc520",d:"2022-02-12T00:00:00.000Z",l:"2022年2月12日",c:["Java"],g:["Java"],e:`<h1> SpringBoot将Bean放入Spring容器中的7(五)种方式</h1>
<h2> 更新：2022年3月23日11:25:11</h2>
<h2> 背景</h2>
<p>我们谈到Spring的时候一定会提到IOC容器、DI依赖注入，Spring通过将一个个类标注为Bean的方法注入到IOC容器中，达到了控制反转的效果。那么我们刚开始接触Bean的时候，一定是使用xml文件，一个一个的注入，就例如下面这样。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> &lt;bean id="bean" class="beandemo.Bean" /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:10.84,words:3253},y:"a",title:"SpringBoot将Bean放入Spring容器中的五种方式",i:"type"},["/dev/将Bean放入Spring容器中的7种方式.html","/dev/%E5%B0%86Bean%E6%94%BE%E5%85%A5Spring%E5%AE%B9%E5%99%A8%E4%B8%AD%E7%9A%847%E7%A7%8D%E6%96%B9%E5%BC%8F","/dev/将Bean放入Spring容器中的7种方式.md","/dev/%E5%B0%86Bean%E6%94%BE%E5%85%A5Spring%E5%AE%B9%E5%99%A8%E4%B8%AD%E7%9A%847%E7%A7%8D%E6%96%B9%E5%BC%8F.md"]],["v-1936c0d5","/dev/%E5%BE%AE%E6%9C%8D%E5%8A%A1_%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97.html",{a:"xlc520",d:"2022-06-25T00:00:00.000Z",l:"2022年6月25日",c:["Java"],g:["Java","微服务","消息队列","Spring"],e:`<h1> 架构师图谱之微服务&amp;消息队列</h1>
<h2> 概述</h2>
<p>“架构师图谱”是一个很宏大的命题，特别是优秀的架构师自身也是“由点到面再到图”，一点点成长积累起来，尝试写这篇文章的目的更多的是结合自身的一些架构、研发、管理经验对现阶段做一个复盘总结，所以这里更偏向于后端图谱，依赖于开源技术、云原生或者其他第三方服务。这里会重点介绍一些技术栈、设计理念以及适应场景，这些可以作为我们选型时的依据。所谓“架构即决策”，是在一个有约束的盒子中寻求最优解。这个有约束的盒子是团队经验、成本、资源、进度、业务所处阶段等编织、掺杂在一起的综合体。本质上无优劣，但是存在恰当的架构用在合适的软件系统中，而这些就是决策的结果。</p>`,r:{minutes:30.65,words:9195},y:"a",title:"架构师图谱之微服务&消息队列",i:"java"},["/dev/微服务_消息队列.html","/dev/%E5%BE%AE%E6%9C%8D%E5%8A%A1_%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97","/dev/微服务&消息队列.html","/dev/%E5%BE%AE%E6%9C%8D%E5%8A%A1&%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97.html","/dev/微服务&消息队列.md","/dev/%E5%BE%AE%E6%9C%8D%E5%8A%A1&%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97.md"]],["v-343c7385","/dev/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84%E7%BB%9F%E4%B8%80%E5%AE%89%E5%85%A8%E8%AE%A4%E8%AF%81%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E8%B7%B5.html",{a:"xlc520",d:"2022-04-08T00:00:00.000Z",l:"2022年4月8日",c:["Java"],g:["Java"],e:`<h1> 微服务架构统一安全认证设计与实践</h1>
<h2> 名词定义</h2>
<blockquote>
<ul>
<li>Third-party application：第三方应用程序，本文中又称"客户端"（client）。</li>
<li>HTTP service：HTTP服务提供商，本文中简称"服务提供商"。</li>
<li>Resource Owner：资源所有者，本文中又称"用户"（user）,即登录用户。</li>
<li>User Agent：用户代理，本文中就是指浏览器。</li>
<li>Authorization server：认证服务器，即服务提供商专门用来处理认证的服务器。</li>
<li>Resource server：资源服务器，即服务提供商存放用户生成的资源的服务器。它与认证服务器，可以是同一台服务器，也可以是不同的服务器。</li>
</ul>
</blockquote>`,r:{minutes:7.66,words:2298},y:"a",title:"微服务架构统一安全认证设计与实践",i:"java"},["/dev/微服务架构统一安全认证设计与实践.html","/dev/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84%E7%BB%9F%E4%B8%80%E5%AE%89%E5%85%A8%E8%AE%A4%E8%AF%81%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E8%B7%B5","/dev/微服务架构统一安全认证设计与实践.md","/dev/%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84%E7%BB%9F%E4%B8%80%E5%AE%89%E5%85%A8%E8%AE%A4%E8%AF%81%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E8%B7%B5.md"]],["v-19da668e","/dev/%E6%8A%A5%E9%94%99%E5%BC%82%E5%B8%B8%E8%A7%A3%E5%86%B3.html",{a:"xlc520",d:"2022-02-20T00:00:00.000Z",l:"2022年2月20日",c:["Java"],g:["Java"],e:`<h1> 开发中报错异常解决</h1>
<p>2022年2月6日 开始整理开发中遇到的问题</p>
<h2> vue打包部署 刷新404</h2>
<blockquote>
<p>2022年3月20日22:14:21</p>
</blockquote>
<p><code>vue hash</code>模式下，<code>URL</code>中存在<code>'#'</code>，用<code>'history'</code>模式就能解决这个问题。但是<code>history</code>模式会出现刷新页面后，页面出现404。解决的办法是用<code>nginx</code>配置一下。
在<code>nginx</code>的配置文件中修改</p>`,r:{minutes:4.65,words:1394},y:"a",title:"开发中报错异常解决",i:"type"},["/dev/报错异常解决.html","/dev/%E6%8A%A5%E9%94%99%E5%BC%82%E5%B8%B8%E8%A7%A3%E5%86%B3","/dev/报错异常解决.md","/dev/%E6%8A%A5%E9%94%99%E5%BC%82%E5%B8%B8%E8%A7%A3%E5%86%B3.md"]],["v-685b81d4","/dev/%E6%90%9E%E5%AE%9ASpringBoot%E6%8E%A5%E5%8F%A3%E6%81%B6%E6%84%8F%E5%88%B7%E6%96%B0%E5%92%8C%E6%9A%B4%E5%8A%9B%E8%AF%B7%E6%B1%82.html",{a:"xlc520",d:"2022-06-05T00:00:00.000Z",l:"2022年6月5日",c:["Java"],g:["Java"],e:`<h1> 搞定 SpringBoot 接口恶意刷新和暴力请求</h1>
<p>在实际项目使用中，必须要考虑服务的安全性，当服务部署到互联网以后，就要考虑服务被恶意请求和暴力攻击的情况，下面的教程，通过<code>intercept</code>和<code>redis</code>针对<code>url+ip</code>在一定时间内访问的次数来将ip禁用，可以根据自己的需求进行相应的修改，来打打自己的目的；</p>
<p>首先工程为springboot框架搭建，不再详细叙述。</p>
<p>首先创建一个自定义的拦截器类，也是最核心的代码：</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@package</span>: com.technicalinterest.group.interceptor
 * <span class="token keyword">@className</span>: IpUrlLimitInterceptor
 * <span class="token keyword">@description</span>: ip+url重复请求现在拦截器
 * <span class="token keyword">@author</span>: Shuyu.Wang
 * <span class="token keyword">@since</span>: 0.1
 **/</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">IpUrlLimitInterceptor</span> <span class="token keyword">implements</span> <span class="token class-name">HandlerInterceptor</span> <span class="token punctuation">{</span>
 
 
 <span class="token keyword">private</span> <span class="token class-name">RedisUtil</span> <span class="token function">getRedisUtil</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span>  <span class="token class-name">SpringContextUtil</span><span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token class-name">RedisUtil</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 
 <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">LOCK_IP_URL_KEY</span><span class="token operator">=</span><span class="token string">"lock_ip_"</span><span class="token punctuation">;</span>
 
 <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> <span class="token constant">IP_URL_REQ_TIME</span><span class="token operator">=</span><span class="token string">"ip_url_times_"</span><span class="token punctuation">;</span>
 
 <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> <span class="token constant">LIMIT_TIMES</span><span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">;</span>
 
 <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token constant">IP_LOCK_TIME</span><span class="token operator">=</span><span class="token number">60</span><span class="token punctuation">;</span>
 
 <span class="token annotation punctuation">@Override</span>
 <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">preHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> httpServletRequest<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> httpServletResponse<span class="token punctuation">,</span> <span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
  log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"request请求地址uri={},ip={}"</span><span class="token punctuation">,</span> httpServletRequest<span class="token punctuation">.</span><span class="token function">getRequestURI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">IpAdrressUtil</span><span class="token punctuation">.</span><span class="token function">getIpAdrress</span><span class="token punctuation">(</span>httpServletRequest<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">ipIsLock</span><span class="token punctuation">(</span><span class="token class-name">IpAdrressUtil</span><span class="token punctuation">.</span><span class="token function">getIpAdrress</span><span class="token punctuation">(</span>httpServletRequest<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"ip访问被禁止={}"</span><span class="token punctuation">,</span><span class="token class-name">IpAdrressUtil</span><span class="token punctuation">.</span><span class="token function">getIpAdrress</span><span class="token punctuation">(</span>httpServletRequest<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token class-name">ApiResult</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ApiResult</span><span class="token punctuation">(</span><span class="token class-name">ResultEnum</span><span class="token punctuation">.</span><span class="token constant">LOCK_IP</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token function">returnJson</span><span class="token punctuation">(</span>httpServletResponse<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">addRequestTime</span><span class="token punctuation">(</span><span class="token class-name">IpAdrressUtil</span><span class="token punctuation">.</span><span class="token function">getIpAdrress</span><span class="token punctuation">(</span>httpServletRequest<span class="token punctuation">)</span><span class="token punctuation">,</span>httpServletRequest<span class="token punctuation">.</span><span class="token function">getRequestURI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token class-name">ApiResult</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ApiResult</span><span class="token punctuation">(</span><span class="token class-name">ResultEnum</span><span class="token punctuation">.</span><span class="token constant">LOCK_IP</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token function">returnJson</span><span class="token punctuation">(</span>httpServletResponse<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">toJSONString</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 
 <span class="token annotation punctuation">@Override</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">postHandle</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> httpServletRequest<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> httpServletResponse<span class="token punctuation">,</span> <span class="token class-name">Object</span> o<span class="token punctuation">,</span> <span class="token class-name">ModelAndView</span> modelAndView<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
 
 <span class="token punctuation">}</span>
 
 <span class="token annotation punctuation">@Override</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">afterCompletion</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> httpServletRequest<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> httpServletResponse<span class="token punctuation">,</span> <span class="token class-name">Object</span> o<span class="token punctuation">,</span> <span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
 
 <span class="token punctuation">}</span>
 
 <span class="token doc-comment comment">/**
  * @Description: 判断ip是否被禁用
  * <span class="token keyword">@author</span>: shuyu.wang
  * <span class="token keyword">@date</span>: 2019-10-12 13:08
  * <span class="token keyword">@param</span> <span class="token parameter">ip</span>
  * <span class="token keyword">@return</span> java.lang.Boolean
  */</span>
 <span class="token keyword">private</span> <span class="token class-name">Boolean</span> <span class="token function">ipIsLock</span><span class="token punctuation">(</span><span class="token class-name">String</span> ip<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token class-name">RedisUtil</span> redisUtil<span class="token operator">=</span><span class="token function">getRedisUtil</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>redisUtil<span class="token punctuation">.</span><span class="token function">hasKey</span><span class="token punctuation">(</span><span class="token constant">LOCK_IP_URL_KEY</span><span class="token operator">+</span>ip<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token doc-comment comment">/**
  * @Description: 记录请求次数
  * <span class="token keyword">@author</span>: shuyu.wang
  * <span class="token keyword">@date</span>: 2019-10-12 17:18
  * <span class="token keyword">@param</span> <span class="token parameter">ip</span>
  * <span class="token keyword">@param</span> <span class="token parameter">uri</span>
  * <span class="token keyword">@return</span> java.lang.Boolean
  */</span>
 <span class="token keyword">private</span> <span class="token class-name">Boolean</span> <span class="token function">addRequestTime</span><span class="token punctuation">(</span><span class="token class-name">String</span> ip<span class="token punctuation">,</span><span class="token class-name">String</span> uri<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token class-name">String</span> key<span class="token operator">=</span><span class="token constant">IP_URL_REQ_TIME</span><span class="token operator">+</span>ip<span class="token operator">+</span>uri<span class="token punctuation">;</span>
  <span class="token class-name">RedisUtil</span> redisUtil<span class="token operator">=</span><span class="token function">getRedisUtil</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>redisUtil<span class="token punctuation">.</span><span class="token function">hasKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token keyword">long</span> time<span class="token operator">=</span>redisUtil<span class="token punctuation">.</span><span class="token function">incr</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>time<span class="token operator">&gt;=</span><span class="token constant">LIMIT_TIMES</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    redisUtil<span class="token punctuation">.</span><span class="token function">getLock</span><span class="token punctuation">(</span><span class="token constant">LOCK_IP_URL_KEY</span><span class="token operator">+</span>ip<span class="token punctuation">,</span>ip<span class="token punctuation">,</span><span class="token constant">IP_LOCK_TIME</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
   redisUtil<span class="token punctuation">.</span><span class="token function">getLock</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 
 <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">returnJson</span><span class="token punctuation">(</span><span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">,</span> <span class="token class-name">String</span> json<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
  <span class="token class-name">PrintWriter</span> writer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  response<span class="token punctuation">.</span><span class="token function">setCharacterEncoding</span><span class="token punctuation">(</span><span class="token string">"UTF-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  response<span class="token punctuation">.</span><span class="token function">setContentType</span><span class="token punctuation">(</span><span class="token string">"text/json; charset=utf-8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
   writer <span class="token operator">=</span> response<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   writer<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"LoginInterceptor response error ---&gt; {}"</span><span class="token punctuation">,</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>writer <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    writer<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 
 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.79,words:836},y:"a",title:"搞定 SpringBoot 接口恶意刷新和暴力请求",i:"java"},["/dev/搞定SpringBoot接口恶意刷新和暴力请求.html","/dev/%E6%90%9E%E5%AE%9ASpringBoot%E6%8E%A5%E5%8F%A3%E6%81%B6%E6%84%8F%E5%88%B7%E6%96%B0%E5%92%8C%E6%9A%B4%E5%8A%9B%E8%AF%B7%E6%B1%82","/dev/搞定SpringBoot接口恶意刷新和暴力请求.md","/dev/%E6%90%9E%E5%AE%9ASpringBoot%E6%8E%A5%E5%8F%A3%E6%81%B6%E6%84%8F%E5%88%B7%E6%96%B0%E5%92%8C%E6%9A%B4%E5%8A%9B%E8%AF%B7%E6%B1%82.md"]],["v-3ecba07f","/dev/%E6%94%B9%E9%80%A0BeanUtils%E4%BC%98%E9%9B%85%E5%AE%9E%E7%8E%B0List%E6%95%B0%E6%8D%AE%E6%8B%B7%E8%B4%9D.html",{a:"xlc520",d:"2022-06-27T00:00:00.000Z",l:"2022年6月27日",c:["Java"],g:["Java"],e:`<h1> 改造BeanUtils优雅实现List数据拷贝</h1>
<p>BeanUtils.copyProperties();确实为我们做了很多事情，虽然不能完美完成深拷贝，但是对于 po、vo、dto 的拷贝已经足够用了。但是其还是有一些不够完美的地方。</p>
<p>不足几点如下：</p>
<p><strong>①</strong>不能拷贝 list，而拷贝 list 的情况又大量存在，因此会有许多重复代码。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">S</span> source <span class="token operator">:</span> sources<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">T</span> target <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">T</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">copyProperties</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">;</span>
    list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3,words:900},y:"a",title:"改造BeanUtils优雅实现List数据拷贝",i:"java"},["/dev/改造BeanUtils优雅实现List数据拷贝.html","/dev/%E6%94%B9%E9%80%A0BeanUtils%E4%BC%98%E9%9B%85%E5%AE%9E%E7%8E%B0List%E6%95%B0%E6%8D%AE%E6%8B%B7%E8%B4%9D","/dev/改造BeanUtils优雅实现List数据拷贝.md","/dev/%E6%94%B9%E9%80%A0BeanUtils%E4%BC%98%E9%9B%85%E5%AE%9E%E7%8E%B0List%E6%95%B0%E6%8D%AE%E6%8B%B7%E8%B4%9D.md"]],["v-dfd677c2","/dev/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%A1%A8%E7%BB%93%E6%9E%84%E6%96%87%E6%A1%A3%E7%94%9F%E6%88%90%E5%B7%A5%E5%85%B7.html",{a:"xlc520",d:"2022-04-05T00:00:00.000Z",l:"2022年4月5日",c:["Java"],g:["Java"],e:`<h1> 数据库表结构文档生成工具</h1>
<h2> 特点</h2>
<ul>
<li>
<p>简洁、轻量、设计良好</p>
</li>
<li>
<p>多数据库支持</p>
</li>
<li>
<p>多种格式文档</p>
</li>
<li>
<p>灵活扩展</p>
</li>
<li>
<p>支持自定义模板</p>
</li>
</ul>
<h2> 数据库支持</h2>
<ul class="task-list-container">
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> MySQL</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> MariaDB</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> TIDB</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> Oracle</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> SqlServer</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> PostgreSQL</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> Cache DB（2016）</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> H2 （开发中）</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> DB2  （开发中）</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> HSQL  （开发中）</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> SQLite（开发中）</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> 瀚高（开发中）</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" disabled="disabled"><label class="task-list-item-label" for="task-item-12"> 达梦 （开发中）</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-13" disabled="disabled"><label class="task-list-item-label" for="task-item-13"> 虚谷  （开发中）</label></li>
<li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-14" disabled="disabled"><label class="task-list-item-label" for="task-item-14"> 人大金仓（开发中）</label></li>
</ul>`,r:{minutes:4.63,words:1390},y:"a",title:"数据库表结构文档生成工具",i:"java"},["/dev/数据库表结构文档生成工具.html","/dev/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%A1%A8%E7%BB%93%E6%9E%84%E6%96%87%E6%A1%A3%E7%94%9F%E6%88%90%E5%B7%A5%E5%85%B7","/dev/数据库表结构文档生成工具.md","/dev/%E6%95%B0%E6%8D%AE%E5%BA%93%E8%A1%A8%E7%BB%93%E6%9E%84%E6%96%87%E6%A1%A3%E7%94%9F%E6%88%90%E5%B7%A5%E5%85%B7.md"]],["v-9d1ecdb0","/dev/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8BJava%E7%B1%BB%E5%9E%8B.html",{a:"xlc520",d:"2022-03-03T00:00:00.000Z",l:"2022年3月3日",c:["Java"],g:["Java"],e:`<h1> 数据类型Java类型</h1>
<p>java mysql 数据类型对照</p>
<table>
<thead>
<tr>
<th><strong>类型名称</strong></th>
<th><strong>显示长度</strong></th>
<th><strong>数据库类型</strong></th>
<th><strong>JAVA类型</strong></th>
<th><strong>JDBC类型索引(int)</strong></th>
<th><strong>描述</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>VARCHAR</strong></td>
<td><strong>L+N</strong></td>
<td><strong>VARCHAR</strong></td>
<td><strong>java.lang.String</strong></td>
<td><strong>12</strong></td>
<td></td>
</tr>
<tr>
<td><strong>CHAR</strong></td>
<td><strong>N</strong></td>
<td><strong>CHAR</strong></td>
<td><strong>java.lang.String</strong></td>
<td><strong>1</strong></td>
<td></td>
</tr>
<tr>
<td><strong>BLOB</strong></td>
<td><strong>L+N</strong></td>
<td><strong>BLOB</strong></td>
<td><strong>java.lang.byte[]</strong></td>
<td><strong>-4</strong></td>
<td></td>
</tr>
<tr>
<td><strong>TEXT</strong></td>
<td><strong>65535</strong></td>
<td><strong>VARCHAR</strong></td>
<td><strong>java.lang.String</strong></td>
<td><strong>-1</strong></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>INTEGER</strong></td>
<td><strong>4</strong></td>
<td><strong>INTEGER UNSIGNED</strong></td>
<td><strong>java.lang.Long</strong></td>
<td><strong>4</strong></td>
<td></td>
</tr>
<tr>
<td><strong>TINYINT</strong></td>
<td><strong>3</strong></td>
<td><strong>TINYINT UNSIGNED</strong></td>
<td><strong>java.lang.Integer</strong></td>
<td><strong>-6</strong></td>
<td></td>
</tr>
<tr>
<td><strong>SMALLINT</strong></td>
<td><strong>5</strong></td>
<td><strong>SMALLINT UNSIGNED</strong></td>
<td><strong>java.lang.Integer</strong></td>
<td><strong>5</strong></td>
<td></td>
</tr>
<tr>
<td><strong>MEDIUMINT</strong></td>
<td><strong>8</strong></td>
<td><strong>MEDIUMINT UNSIGNED</strong></td>
<td><strong>java.lang.Integer</strong></td>
<td><strong>4</strong></td>
<td></td>
</tr>
<tr>
<td><strong>BIT</strong></td>
<td><strong>1</strong></td>
<td><strong>BIT</strong></td>
<td><strong>java.lang.Boolean</strong></td>
<td><strong>-7</strong></td>
<td></td>
</tr>
<tr>
<td><strong>BIGINT</strong></td>
<td><strong>20</strong></td>
<td><strong>BIGINT UNSIGNED</strong></td>
<td><strong>java.math.BigInteger</strong></td>
<td><strong>-5</strong></td>
<td></td>
</tr>
<tr>
<td><strong>FLOAT</strong></td>
<td><strong>4+8</strong></td>
<td><strong>FLOAT</strong></td>
<td><strong>java.lang.Float</strong></td>
<td><strong>7</strong></td>
<td></td>
</tr>
<tr>
<td><strong>DOUBLE</strong></td>
<td><strong>22</strong></td>
<td><strong>DOUBLE</strong></td>
<td><strong>java.lang.Double</strong></td>
<td><strong>8</strong></td>
<td></td>
</tr>
<tr>
<td><strong>DECIMAL</strong></td>
<td><strong>11</strong></td>
<td><strong>DECIMAL</strong></td>
<td><strong>java.math.BigDecimal</strong></td>
<td><strong>3</strong></td>
<td></td>
</tr>
<tr>
<td><strong>BOOLEAN</strong></td>
<td><strong>1</strong></td>
<td><strong>同TINYINT</strong></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>ID</strong></td>
<td><strong>11</strong></td>
<td><strong>PK (INTEGER UNSIGNED)</strong></td>
<td><strong>java.lang.Long</strong></td>
<td><strong>4</strong></td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td><strong>DATE</strong></td>
<td><strong>10</strong></td>
<td><strong>DATE</strong></td>
<td><strong>java.sql.Date</strong></td>
<td><strong>91</strong></td>
<td></td>
</tr>
<tr>
<td><strong>TIME</strong></td>
<td><strong>8</strong></td>
<td><strong>TIME</strong></td>
<td><strong>java.sql.Time</strong></td>
<td><strong>92</strong></td>
<td></td>
</tr>
<tr>
<td><strong>DATETIME</strong></td>
<td><strong>19</strong></td>
<td><strong>DATETIME</strong></td>
<td><strong>java.sql.Timestamp</strong></td>
<td><strong>93</strong></td>
<td></td>
</tr>
<tr>
<td><strong>TIMESTAMP</strong></td>
<td><strong>19</strong></td>
<td><strong>TIMESTAMP</strong></td>
<td><strong>java.sql.Timestamp</strong></td>
<td><strong>93</strong></td>
<td></td>
</tr>
<tr>
<td><strong>YEAR</strong></td>
<td><strong>4</strong></td>
<td><strong>YEAR</strong></td>
<td><strong>java.sql.Date</strong></td>
<td><strong>91</strong></td>
<td></td>
</tr>
</tbody>
</table>`,r:{minutes:2.03,words:609},y:"a",title:"数据类型Java类型",i:"type"},["/dev/数据类型Java类型.html","/dev/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8BJava%E7%B1%BB%E5%9E%8B","/dev/数据类型Java类型.md","/dev/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8BJava%E7%B1%BB%E5%9E%8B.md"]],["v-12aac2e1","/dev/%E6%9C%AC%E5%9C%B0%E7%BC%93%E5%AD%98Caffeine.html",{a:"xlc520",d:"2023-01-11T00:00:00.000Z",l:"2023年1月11日",c:["Java"],g:["Java"],e:`<h1> 本地缓存Caffeine</h1>
<p>结论：<strong>Caffeine 是目前性能最好的本地缓存，因此，在考虑使用本地缓存时，直接选择 Caffeine 即可。</strong></p>
<p>先看一个小例子，明白如何创建一个 Caffeine 缓存实例。</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Caffeine</span> caffeine <span class="token operator">=</span> <span class="token class-name">Caffeine</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">initialCapacity</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">maximumSize</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Cache</span> cache <span class="token operator">=</span> caffeine<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
cache<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"aa"</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>cache<span class="token punctuation">.</span><span class="token function">getIfPresent</span><span class="token punctuation">(</span><span class="token string">"aa"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:12.99,words:3897},y:"a",title:"本地缓存Caffeine",i:"java"},["/dev/本地缓存Caffeine.html","/dev/%E6%9C%AC%E5%9C%B0%E7%BC%93%E5%AD%98Caffeine","/dev/本地缓存Caffeine.md","/dev/%E6%9C%AC%E5%9C%B0%E7%BC%93%E5%AD%98Caffeine.md"]],["v-13c64a8d","/dev/%E6%9E%B6%E6%9E%84%E5%B8%88%E5%9B%BE%E8%B0%B1%C2%B7%E5%BE%AE%E6%9C%8D%E5%8A%A1_%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97%E7%AF%87.html",{a:"xlc520",d:"2022-04-27T00:00:00.000Z",l:"2022年4月27日",c:["Java"],g:["Java"],e:`<h1> 架构师图谱·微服务&amp;消息队列篇</h1>
<h2> 1. 概述</h2>
<p>“架构师图谱”是一个很宏大的命题，特别是优秀的架构师自身也是“由点到面再到图”，一点点成长积累起来，尝试写这系列文章的目的更多的是结合自身的一些经验和理解，来解读工程师和架构师所应具备的技能模型，这里会更偏向于后端技能，依赖于开源技术、云原生或者其他第三方服务。重点介绍一些技术栈、设计理念和适应场景，这些可以作为我们选型时的依据。所谓“架构即决策”，是在一个有约束的盒子中寻求最优解。这个有约束的盒子是团队经验、成本、资源、进度、业务所处阶段等编织、掺杂在一起的综合体。本质上无优劣，但是存在恰当的架构用在合适的软件系统中，而这些就是决策的结果。</p>`,r:{minutes:36.47,words:10942},y:"a",title:"架构师图谱·微服务&消息队列篇",i:"java"},["/dev/架构师图谱·微服务_消息队列篇.html","/dev/%E6%9E%B6%E6%9E%84%E5%B8%88%E5%9B%BE%E8%B0%B1%C2%B7%E5%BE%AE%E6%9C%8D%E5%8A%A1_%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97%E7%AF%87","/dev/架构师图谱·微服务&消息队列篇.html","/dev/%E6%9E%B6%E6%9E%84%E5%B8%88%E5%9B%BE%E8%B0%B1%C2%B7%E5%BE%AE%E6%9C%8D%E5%8A%A1&%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97%E7%AF%87.html","/dev/架构师图谱·微服务&消息队列篇.md","/dev/%E6%9E%B6%E6%9E%84%E5%B8%88%E5%9B%BE%E8%B0%B1%C2%B7%E5%BE%AE%E6%9C%8D%E5%8A%A1&%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97%E7%AF%87.md"]],["v-48a9c507","/dev/%E6%A0%91%E7%9A%84%E5%AE%9A%E4%B9%89%E3%80%81%E6%A0%91%E7%9A%84%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84.html",{a:"xlc520",d:"2022-05-19T00:00:00.000Z",l:"2022年5月19日",c:["java"],g:["java","数据结构"],e:`<h1> 树的定义、树的存储结构</h1>
<h2> 前言</h2>
<p>提到存储结构，可以很自然的想到<strong>顺序存储结构</strong>和<strong>链式存储结构</strong>两种。</p>
<p>之前介绍的所有的数据结构都是线性存储结构。本章所介绍的树结构是一种<strong>非线性存储结构</strong>，存储的是具有“<strong>一对多</strong>”关系的数据元素的集合。</p>
<figure><img src="https://static.xlc520.ml/blogImage/cb46133043df4ca6b5588c4dec725e71.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,r:{minutes:4.58,words:1374},y:"a",title:"树的定义、树的存储结构",i:"others"},["/dev/树的定义、树的存储结构.html","/dev/%E6%A0%91%E7%9A%84%E5%AE%9A%E4%B9%89%E3%80%81%E6%A0%91%E7%9A%84%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84","/dev/树的定义、树的存储结构.md","/dev/%E6%A0%91%E7%9A%84%E5%AE%9A%E4%B9%89%E3%80%81%E6%A0%91%E7%9A%84%E5%AD%98%E5%82%A8%E7%BB%93%E6%9E%84.md"]],["v-e114d1d2","/dev/%E8%85%BE%E8%AE%AF%E4%BA%91%E5%90%8E%E7%AB%AF%E6%80%BB%E7%BB%93%E7%9A%84%E9%9D%A2%E8%AF%9515%E9%97%AE.html",{a:"xlc520",d:"2022-03-22T00:00:00.000Z",l:"2022年3月22日",c:["Java"],g:["Java"],e:`<h1> 腾讯云后端总结的面试15问</h1>
<ol>
<li>聊聊项目，好的设计，好的代码</li>
<li>谈谈什么是零拷贝？</li>
<li>一共有几种 IO 模型？NIO 和多路复用的区别？</li>
<li>Future 实现阻塞等待获取结果的原理？</li>
<li>ReentrantLock和 Synchronized 的区别？Synchronized 的原理？</li>
<li>聊聊AOS？ReentrantLock的实现原理？</li>
<li>乐观锁和悲观锁， 让你来写你怎么实现？</li>
<li>Paxos 协议了解？工作流程是怎么样的？</li>
<li>B+树聊一下？B+树是不是有序？B+树和B-树的主要区别？</li>
<li>TCP的拥塞机制</li>
<li>工作中有过JVM实践嘛</li>
<li>数据库分库分表的缺点是啥？</li>
<li>分布式事务如何解决？TCC 了解？</li>
<li>RocketMQ 如何保证消息的准确性和安全性？</li>
<li>算法题：三个数求和</li>
</ol>`,r:{minutes:32.79,words:9837},y:"a",title:"腾讯云后端总结的面试15问",i:"type"},["/dev/腾讯云后端总结的面试15问.html","/dev/%E8%85%BE%E8%AE%AF%E4%BA%91%E5%90%8E%E7%AB%AF%E6%80%BB%E7%BB%93%E7%9A%84%E9%9D%A2%E8%AF%9515%E9%97%AE","/dev/腾讯云后端总结的面试15问.md","/dev/%E8%85%BE%E8%AE%AF%E4%BA%91%E5%90%8E%E7%AB%AF%E6%80%BB%E7%BB%93%E7%9A%84%E9%9D%A2%E8%AF%9515%E9%97%AE.md"]],["v-6926cfaa","/dev/%E9%80%9A%E8%BF%87Nginx%E6%9D%A5%E5%AE%9E%E7%8E%B0%E7%A6%81%E6%AD%A2%E5%9B%BD%E5%A4%96IP%E8%AE%BF%E9%97%AE%E7%BD%91%E7%AB%99.html",{a:"xlc520",d:"2022-06-19T00:00:00.000Z",l:"2022年6月19日",c:["Java"],g:["Java"],e:`<h1> 通过Nginx来实现禁止国外IP访问网站</h1>
<p>前言： 先来说说为啥要写这篇文章，之前小编看了下nginx 的访问日志，发现每天有好多国外的IP地址来访问我的网站，并且访问的内容基本上都是恶意的。因此 我决定 禁止国外IP 来访问我的网站</p>
<p>想要实现这个功能有很多方法，下面我就来介绍基于 NGINX的ngx_http_geoip2模块 来禁止国外IP 访问网站</p>
<p><strong>一、安装geoip2扩展依赖</strong></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@fxkj ~<span class="token punctuation">]</span><span class="token comment"># yum install libmaxminddb-devel -y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:4.4,words:1321},y:"a",title:"通过Nginx来实现禁止国外IP访问网站",i:"java"},["/dev/通过Nginx来实现禁止国外IP访问网站.html","/dev/%E9%80%9A%E8%BF%87Nginx%E6%9D%A5%E5%AE%9E%E7%8E%B0%E7%A6%81%E6%AD%A2%E5%9B%BD%E5%A4%96IP%E8%AE%BF%E9%97%AE%E7%BD%91%E7%AB%99","/dev/通过Nginx来实现禁止国外IP访问网站.md","/dev/%E9%80%9A%E8%BF%87Nginx%E6%9D%A5%E5%AE%9E%E7%8E%B0%E7%A6%81%E6%AD%A2%E5%9B%BD%E5%A4%96IP%E8%AE%BF%E9%97%AE%E7%BD%91%E7%AB%99.md"]],["v-b10ed23e","/dev/%E9%80%9A%E8%BF%87%E6%B3%A8%E8%A7%A3%E5%AE%9E%E7%8E%B0%E6%8E%A5%E5%8F%A3%E8%BF%94%E5%9B%9E%E6%95%B0%E6%8D%AE%E8%84%B1%E6%95%8F.html",{a:"xlc520",d:"2022-08-07T00:00:00.000Z",l:"2022年8月7日",c:["Java"],g:["Java"],e:`<h1> 通过注解实现接口返回数据脱敏</h1>
<h3> 思路</h3>
<p>1.要做成可配置多策略的脱敏操作，要不然一个个接口进行脱敏操作，重复的工作量太多，很显然违背了“多写一行算我输”的程序员规范，思来想去，定义数据脱敏注解和数据脱敏逻辑的接口， 在返回类上，对需要进行脱敏的属性加上，并指定对应的脱敏策略操作</p>
<p>2.接下来我只需要拦截控制器返回的数据，找到带有脱敏注解的属性操作即可，一开始打算用@ControllerAdvice去实现，但发现需要自己去反射类获取注解，当返回对象比较复杂，需要递归去反射，性能一下子就会降低，于是换种思路，我想到平时使用的@JsonFormat，跟我现在的场景很类似，通过自定义注解跟字段解析器，对字段进行自定义解析，tql</p>`,r:{minutes:2.21,words:664},y:"a",title:"通过注解实现接口返回数据脱敏",i:"java"},["/dev/通过注解实现接口返回数据脱敏.html","/dev/%E9%80%9A%E8%BF%87%E6%B3%A8%E8%A7%A3%E5%AE%9E%E7%8E%B0%E6%8E%A5%E5%8F%A3%E8%BF%94%E5%9B%9E%E6%95%B0%E6%8D%AE%E8%84%B1%E6%95%8F","/dev/通过注解实现接口返回数据脱敏.md","/dev/%E9%80%9A%E8%BF%87%E6%B3%A8%E8%A7%A3%E5%AE%9E%E7%8E%B0%E6%8E%A5%E5%8F%A3%E8%BF%94%E5%9B%9E%E6%95%B0%E6%8D%AE%E8%84%B1%E6%95%8F.md"]],["v-39786273","/dev/%E9%87%91%E9%A2%9D%E8%AE%A1%E7%AE%97BigDecimal%E5%8F%8A%E8%B8%A9%E5%9D%91.html",{a:"xlc520",d:"2022-07-15T00:00:00.000Z",l:"2022年7月15日",c:["Java"],g:["Java"],e:`<h1> 金额计算BigDecimal及踩坑</h1>
<p>除非在一些非常简单的场景，结算汇金类的业务也不会直接用<code>BigDecimal</code>来计算金额，原因有两点：</p>
<ol>
<li><code>BigDecimal</code>里面还是有很多隐蔽的坑的</li>
<li><code>BigDecimal</code>没有提供金额的单位</li>
</ol>
<h2> 1. <code>BigDecimal</code>中的五个容易踩的坑</h2>
<h3> 1.1 <code>new BigDecimal()</code>还是<code>BigDecimal#valueOf()</code>？</h3>`,r:{minutes:3.49,words:1048},y:"a",title:"金额计算BigDecimal及踩坑",i:"java"},["/dev/金额计算BigDecimal及踩坑.html","/dev/%E9%87%91%E9%A2%9D%E8%AE%A1%E7%AE%97BigDecimal%E5%8F%8A%E8%B8%A9%E5%9D%91","/dev/金额计算BigDecimal及踩坑.md","/dev/%E9%87%91%E9%A2%9D%E8%AE%A1%E7%AE%97BigDecimal%E5%8F%8A%E8%B8%A9%E5%9D%91.md"]],["v-77611f2a","/essay/How-To-Ask-Questions.html",{a:"xlc520",d:"2022-03-29T00:00:00.000Z",l:"2022年3月29日",c:["essay"],g:["article"],e:`<h1> 提问的智慧</h1>
<p><strong>How To Ask Questions The Smart Way</strong></p>
<p>Copyright © 2001,2006,2014 Eric S. Raymond, Rick Moen</p>
<h2> 前言</h2>
<figure><img src="https://fastly.jsdelivr.net/gh/xlc520/MyImage@main/MdImg/提问的艺术.jpg" alt="提问的艺术" tabindex="0" loading="lazy"><figcaption>提问的艺术</figcaption></figure>`,r:{minutes:60.31,words:18092},y:"a",title:"提问的智慧",i:"article"},["/essay/How-To-Ask-Questions","/essay/How-To-Ask-Questions.md"]],["v-7c80db8b","/essay/",{a:"xlc520",d:"2022-03-20T00:00:00.000Z",l:"2022年3月20日",c:["essay"],g:["article"],e:`<p align="center"> 
  <img src="https://metrics.lecoq.io/xlc520?template=classic&amp;isocalendar=1&amp;languages=1&amp;people=1&amp;activity=1&amp;achievements=1&amp;lines=1&amp;repositories=1&amp;notable=1&amp;introduction=1&amp;pagespeed=1&amp;repositories=100&amp;repositories.batch=100&amp;repositories.forks=false&amp;repositories.affiliations=owner&amp;isocalendar.duration=full-year&amp;languages.limit=8&amp;languages.threshold=0%&amp;languages.colors=github&amp;languages.sections=most-used&amp;languages.indepth=false&amp;languages.analysis.timeout=15&amp;languages.categories=markup%2C programming&amp;languages.recent.categories=markup%2C programming&amp;languages.recent.load=300&amp;languages.recent.days=14&amp;people.limit=24&amp;people.identicons=false&amp;people.identicons.hide=false&amp;people.size=28&amp;people.types=followers%2C following&amp;people.shuffle=false&amp;activity.limit=5&amp;activity.load=300&amp;activity.days=14&amp;activity.visibility=all&amp;activity.timestamps=false&amp;activity.filter=all&amp;achievements.threshold=C&amp;achievements.secrets=true&amp;achievements.display=detailed&amp;achievements.limit=0&amp;notable.from=organization&amp;notable.repositories=false&amp;notable.indepth=false&amp;notable.types=commit&amp;repositories.featured= xlc520%2Fxlc520.github.io&amp;introduction.title=true&amp;pagespeed.url=xlc520.github.io&amp;pagespeed.detailed=false&amp;pagespeed.screenshot=false&amp;config.timezone=Asia%2FShanghai"> 
</p>`,r:{minutes:.55,words:166},y:"a",title:"Nice Article",i:"article"},["/essay/index.html","/essay/README.md"]],["v-386477da","/essay/%E4%BA%BA%E7%94%9F%E4%B8%89%E5%A2%83%E7%95%8C.html",{a:"xlc520",d:"2022-03-20T00:00:00.000Z",l:"2022年3月20日",c:["essay"],g:["article","essay"],e:`<h1> 人生三境界，格局决定结局，境界决定人生</h1>
<p>人生能够成就什么与自身的境界密切相关，人生格局决定人生结局，人生有什么样的境界就有什么样的格局。从古到今，成就大事业，大学问的人，都是经过这三种境界的人。</p>
<p>人生的第一境界是：<strong>昨夜西风凋碧树，独上高楼，望尽天涯路</strong>。这一境界就是人生要立志、要下决心、做人要自强、自立、自信、自奋，人生有了目标，才能有前进的方向，成功者总是从立志开始的，做人没有志向，哪来的成功呢？</p>
<figure><img src="https://static.xlc520.ml/blogImage/c8ea15ce36d3d539ad9b54e1d0bf0e58352ab02b.jpeg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,r:{minutes:3.46,words:1038},y:"a",title:"人生三境界",i:"type"},["/essay/人生三境界.html","/essay/%E4%BA%BA%E7%94%9F%E4%B8%89%E5%A2%83%E7%95%8C","/essay/人生三境界.md","/essay/%E4%BA%BA%E7%94%9F%E4%B8%89%E5%A2%83%E7%95%8C.md"]],["v-6192c6ac","/essay/%E4%BA%BA%E7%94%9F%E6%9C%80%E5%A5%BD%E7%9A%84%E4%B8%89%E7%A7%8D%E7%8A%B6%E6%80%81.html",{a:"xlc520",d:"2022-04-21T00:00:00.000Z",l:"2022年4月21日",c:["essay"],g:["article","essay"],e:`<h1> 人生最好的三种状态：不期而遇，不言而喻，不药而愈</h1>
<p>人这一辈子，不过短短数十载，来去匆匆。</p>
<p>很多人终其一生，都在追寻一种最好的状态。</p>
<p>可究竟怎样的状态，才算得上最好的状态呢？</p>
<p><strong>其实，人生最好的状态，就藏在这三句话里。</strong></p>
<figure><img src="https://nimg.ws.126.net/?url=http://dingyue.ws.126.net/2020/1227/adc9a8f1p00qlygon000td200u0007gg00hz004g.png&amp;thumbnail=660x2147483647&amp;quality=80&amp;type=jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,r:{minutes:3.53,words:1060},y:"a",title:"人生最好的三种状态",i:"article"},["/essay/人生最好的三种状态.html","/essay/%E4%BA%BA%E7%94%9F%E6%9C%80%E5%A5%BD%E7%9A%84%E4%B8%89%E7%A7%8D%E7%8A%B6%E6%80%81","/essay/人生最好的三种状态.md","/essay/%E4%BA%BA%E7%94%9F%E6%9C%80%E5%A5%BD%E7%9A%84%E4%B8%89%E7%A7%8D%E7%8A%B6%E6%80%81.md"]],["v-1e8d39be","/essay/%E4%BB%A5%E4%BD%A0%E4%B9%8B%E5%90%8D%EF%BC%8C%E4%B9%A6%E6%88%91%E4%B8%80%E7%94%9F.html",{a:"xlc520",d:"2022-06-16T00:00:00.000Z",l:"2022年6月16日",c:["essay"],g:["article","essay"],e:`<h1> 以你之名，书我一生</h1>
<p><strong>“未曾相逢先一笑，初会便已许平生。”</strong></p>
<p><strong>我本是一颗暗淡无光的星，坐落于银色海洋之上，直到听见了另外一个星系的回声，于是便努力的将我这颗星球为你亮起。</strong></p>
<p><strong>我们没必要去花心思设想未来如何应对，而应该武装自己，只为了当有一天遇见的时候，能够理直气壮地说:我知道你很好，但是我也不差。</strong></p>
<p><strong>多希望彼此是一直喜欢，一直热爱，这样我就能恒久地执着地望向你。</strong></p>
<p><strong>后来我才知道，她并不是为我盛开的花，我只是恰好途径了她的盛放。</strong></p>`,r:{minutes:.87,words:260},y:"a",title:"以你之名，书我一生",i:"article"},["/essay/以你之名，书我一生.html","/essay/%E4%BB%A5%E4%BD%A0%E4%B9%8B%E5%90%8D%EF%BC%8C%E4%B9%A6%E6%88%91%E4%B8%80%E7%94%9F","/essay/以你之名，书我一生.md","/essay/%E4%BB%A5%E4%BD%A0%E4%B9%8B%E5%90%8D%EF%BC%8C%E4%B9%A6%E6%88%91%E4%B8%80%E7%94%9F.md"]],["v-58121615","/essay/%E6%97%A9%E5%AE%89%E5%BF%83%E8%AF%AD220519.html",{a:"xlc520",d:"2022-05-16T00:00:00.000Z",l:"2022年5月16日",c:["essay"],g:["article","essay"],e:`<h1> 早安心语220519</h1>
<blockquote>
<p>2022年5月19日</p>
<p>如果有一天公司给你调岗降薪，逼你辞职。说明他已经不是曾经的的那个他了。——By 我自己</p>
</blockquote>
<p>1.马云说过：“傻傻的信，傻傻的干，傻傻的挣了数百万!精明的算，精明的看，最后成了穷光蛋!”水不动就是死水，人不动就是废人。人要有六动：关系靠走动，团队靠活动，客户靠感动，资金靠流动，生命靠运动，成功靠行动!好励志的一段话，送给所有正在奋斗的人!早安!!</p>
<figure><img src="http://img.mp.sohu.com/upload/20170531/ffd141fb79a44a75a2bc4e8dbdb7cd98_th.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,r:{minutes:3.64,words:1091},y:"a",title:"早安心语220519",i:"article"},["/essay/早安心语220519.html","/essay/%E6%97%A9%E5%AE%89%E5%BF%83%E8%AF%AD220519","/essay/早安心语220519.md","/essay/%E6%97%A9%E5%AE%89%E5%BF%83%E8%AF%AD220519.md"]],["v-ead2f860","/essay/%E9%B2%81%E8%BF%85%E5%90%8D%E8%A8%80.html",{a:"xlc520",d:"2022-06-20T00:00:00.000Z",l:"2022年6月20日",c:["essay"],g:["article","essay"],e:`<h1> 鲁迅名言</h1>
<figure><img src="https://static.xlc520.ml/blogImage/640-16545675217234.jpeg" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure>
<p><strong>鲁迅</strong>（1881年9月25日－1936年10月19日），浙江绍兴人。著名文学家、思想家、民主战士，五四新文化运动的重要参与者，中国现代文学的奠基人。主要作品有：《呐喊》《彷徨》《朝花夕拾》《且介亭杂文》等。</p>
<p><strong>1、冷漠</strong></p>`,r:{minutes:8.11,words:2434},y:"a",title:"鲁迅名言",i:"article"},["/essay/鲁迅名言.html","/essay/%E9%B2%81%E8%BF%85%E5%90%8D%E8%A8%80","/essay/鲁迅名言.md","/essay/%E9%B2%81%E8%BF%85%E5%90%8D%E8%A8%80.md"]],["v-a3e2d4e4","/finance/",{a:"xlc520",d:"2022-11-01T00:00:00.000Z",l:"2022年11月1日",c:["Finance"],g:["Finance"],e:`<p align="center"> 
  <img src="https://metrics.lecoq.io/xlc520?template=classic&amp;isocalendar=1&amp;languages=1&amp;people=1&amp;activity=1&amp;achievements=1&amp;lines=1&amp;repositories=1&amp;notable=1&amp;introduction=1&amp;pagespeed=1&amp;repositories=100&amp;repositories.batch=100&amp;repositories.forks=false&amp;repositories.affiliations=owner&amp;isocalendar.duration=full-year&amp;languages.limit=8&amp;languages.threshold=0%&amp;languages.colors=github&amp;languages.sections=most-used&amp;languages.indepth=false&amp;languages.analysis.timeout=15&amp;languages.categories=markup%2C programming&amp;languages.recent.categories=markup%2C programming&amp;languages.recent.load=300&amp;languages.recent.days=14&amp;people.limit=24&amp;people.identicons=false&amp;people.identicons.hide=false&amp;people.size=28&amp;people.types=followers%2C following&amp;people.shuffle=false&amp;activity.limit=5&amp;activity.load=300&amp;activity.days=14&amp;activity.visibility=all&amp;activity.timestamps=false&amp;activity.filter=all&amp;achievements.threshold=C&amp;achievements.secrets=true&amp;achievements.display=detailed&amp;achievements.limit=0&amp;notable.from=organization&amp;notable.repositories=false&amp;notable.indepth=false&amp;notable.types=commit&amp;repositories.featured= xlc520%2Fxlc520.github.io&amp;introduction.title=true&amp;pagespeed.url=xlc520.github.io&amp;pagespeed.detailed=false&amp;pagespeed.screenshot=false&amp;config.timezone=Asia%2FShanghai"> 
</p>`,r:{minutes:.56,words:167},y:"a",title:"金融",i:"free"},["/finance/index.html","/finance/README.md"]],["v-20f0fd66","/finance/%E4%BA%92%E8%81%94%E7%BD%91%E9%87%91%E8%9E%8D%E8%A1%8C%E4%B8%9A%E5%90%8D%E8%AF%8D%E7%AC%94%E8%AE%B0.html",{a:"xlc520",d:"2022-11-02T00:00:00.000Z",l:"2022年11月2日",c:["Finance"],g:["Finance"],e:`<h1> 互联网金融行业名词</h1>
<h2> 1. 贷记/借记业务</h2>
<h3> 贷记</h3>
<p>贷记业务是付款行或者付款人主动向收款行或者收款人发起的付款业务。“贷”字是指资产方的减少或者负债的增加，最常见的就是贷记卡，也就是信用卡。平时我们用信用卡时，额度减少，负债增加了，所以叫做贷记卡。比如你从银行转账到别的银行，或者从企业账户代付工资到各个员工账户，对于付款行来说银行的资产都减少了，都是贷记业务。</p>
<p>央行体系里面分为普通贷记、定期贷记、实时贷记业务 :</p>
<p>（一）普通贷记业务，比如转账，从老王的工商银行转账到老李的农业银行；</p>
<p>（二）定期贷记业务，比如代付工资，每月定期付薪水给员工；</p>`,r:{minutes:20.24,words:6071},y:"a",title:"互联网金融行业名词",i:"free"},["/finance/互联网金融行业名词笔记.html","/finance/%E4%BA%92%E8%81%94%E7%BD%91%E9%87%91%E8%9E%8D%E8%A1%8C%E4%B8%9A%E5%90%8D%E8%AF%8D%E7%AC%94%E8%AE%B0","/finance/互联网金融行业名词笔记.md","/finance/%E4%BA%92%E8%81%94%E7%BD%91%E9%87%91%E8%9E%8D%E8%A1%8C%E4%B8%9A%E5%90%8D%E8%AF%8D%E7%AC%94%E8%AE%B0.md"]],["v-37125490","/git/GitHub-Auto-Commit.html",{a:"xlc520",d:"2022-01-10T00:00:00.000Z",l:"2022年1月10日",c:["GitHub"],g:["GitHub"],u:!1,e:`<h1> GitHub-Auto-Commit</h1>
<blockquote>
<p>一个用于Git自动commit的VSCode插件，它可以用来补充之前忘记提交commit，帮助你把首页的绿色格子填满。</p>
</blockquote>
<h3> 使用效果</h3>
<ol>
<li>使用本插件来控制commit次数.</li>
<li>如下图，你甚至可以规划一下<code>commit</code>次数，然后画出图形, 天空才是你的极限。</li>
</ol>
<figure><img src="https://fastly.jsdelivr.net/gh/xlc520/MyImage@main/MdImg/5245297-2c357937f3122b08.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,r:{minutes:6.63,words:1989},y:"a",title:"GitHub-Auto-Commit",i:"page"},["/git/GitHub-Auto-Commit","/git/GitHub-Auto-Commit.md"]],["v-c9250e40","/git/Git%E3%80%81GitHub%E3%80%81Gitee.html",{a:"xlc520",d:"2022-02-13T00:00:00.000Z",l:"2022年2月13日",c:["Git"],g:["Git"],e:`<h1> Git、GitHub、Gitee</h1>
<h2> 一：Git介绍与Mac下如何生成ssh key</h2>
<p>git是分布式的代码管理工具，远程的代码管理是基于ssh的，所以要使用远程的git则需要ssh的配置。简单的说，Git - 版本控制工具；Github是一个网站，提供给用户空间创建git仓储，保存用户的一些数据文档或者代码等；GitLab是基于Git的项目管理软件</p>
<p>​       首先，使用代码管理工具把本地的代码上传到服务器时需要加密处理，加密传输的算法有很多种，git可使用rsa，rsa要解决的一个核心问题是，如何使用一对特定的数字，使其中一个数字可以用来加密，而另外一个数字可以用来解密。这两个数字就是你在使用git和github，gitlab的时候所遇到的public key也就是公钥以及private key私钥。</p>`,r:{minutes:5.4,words:1621},y:"a",title:"Git、GitHub、Gitee",i:"type"},["/git/Git、GitHub、Gitee.html","/git/Git%E3%80%81GitHub%E3%80%81Gitee","/git/Git、GitHub、Gitee.md","/git/Git%E3%80%81GitHub%E3%80%81Gitee.md"]],["v-74473916","/git/",{a:"xlc520",d:"2022-01-13T00:00:00.000Z",l:"2022年1月13日",c:["Git"],g:["Git"],e:`<p align="center"> 
  <img src="https://metrics.lecoq.io/xlc520?template=classic&amp;isocalendar=1&amp;languages=1&amp;people=1&amp;activity=1&amp;achievements=1&amp;lines=1&amp;repositories=1&amp;notable=1&amp;introduction=1&amp;pagespeed=1&amp;repositories=100&amp;repositories.batch=100&amp;repositories.forks=false&amp;repositories.affiliations=owner&amp;isocalendar.duration=full-year&amp;languages.limit=8&amp;languages.threshold=0%&amp;languages.colors=github&amp;languages.sections=most-used&amp;languages.indepth=false&amp;languages.analysis.timeout=15&amp;languages.categories=markup%2C programming&amp;languages.recent.categories=markup%2C programming&amp;languages.recent.load=300&amp;languages.recent.days=14&amp;people.limit=24&amp;people.identicons=false&amp;people.identicons.hide=false&amp;people.size=28&amp;people.types=followers%2C following&amp;people.shuffle=false&amp;activity.limit=5&amp;activity.load=300&amp;activity.days=14&amp;activity.visibility=all&amp;activity.timestamps=false&amp;activity.filter=all&amp;achievements.threshold=C&amp;achievements.secrets=true&amp;achievements.display=detailed&amp;achievements.limit=0&amp;notable.from=organization&amp;notable.repositories=false&amp;notable.indepth=false&amp;notable.types=commit&amp;repositories.featured= xlc520%2Fxlc520.github.io&amp;introduction.title=true&amp;pagespeed.url=xlc520.github.io&amp;pagespeed.detailed=false&amp;pagespeed.screenshot=false&amp;config.timezone=Asia%2FShanghai"> 
</p>`,r:{minutes:.55,words:165},y:"a",title:"Git",i:"git"},["/git/index.html","/git/README.md"]],["v-1adba576","/git/git_emoji.html",{a:"xlc520",d:"2022-02-13T00:00:00.000Z",l:"2022年2月13日",c:["Git"],g:["Git"],e:`<h1> Git丨commit规范 &amp; emoji表情</h1>
<h2> 一、文字规范</h2>
<p>commit一共由五部分组成，具体内容如下。</p>
<p>（1）type
提交 commit 的类型，包括以下几种</p>
<p>feat: 新功能
fix: 修复问题
docs: 修改文档
style: 修改代码格式，不影响代码逻辑
refactor: 重构代码，理论上不影响现有功能
perf: 提升性能
test: 增加修改测试用例
chore: 修改工具相关（包括但不限于文档、代码生成等）
deps: 升级依赖</p>
<p>（2）scope
修改文件的范围（包括但不限于 doc, middleware, core, config, plugin）</p>`,r:{minutes:3.16,words:948},y:"a",title:"commit规范 & emoji表情",i:"type"},["/git/git_emoji","/git/git_emoji.md"]],["v-78493303","/linux/CNS%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA%E6%95%99%E7%A8%8B.html",{a:"xlc520",d:"2022-07-12T00:00:00.000Z",l:"2022年7月12日",c:["Linux"],g:["Linux"],e:`<h1> CNS服务器搭建教程</h1>
<h2> 首先</h2>
<p>1.首先需要一台服务器，腾讯云或者阿里云，下面用腾讯云来举例。</p>
<p>2.登陆服务器后台</p>
<p>3.安装CentOS 7.6 64bit</p>
<figure><img src="https://static.xlc520.ml/blogImage/0bc8e91b11654c27b036bf749f71064c.jpeg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<figure><img src="https://static.xlc520.ml/blogImage/f6e7f8face15443aab91a9ddc3c2db31.jpeg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,r:{minutes:3.13,words:938},y:"a",title:"CNS服务器搭建教程",i:"linux"},["/linux/CNS服务器搭建教程.html","/linux/CNS%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA%E6%95%99%E7%A8%8B","/linux/CNS服务器搭建教程.md","/linux/CNS%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%90%AD%E5%BB%BA%E6%95%99%E7%A8%8B.md"]],["v-490af90f","/linux/Centos7Minimal.html",{a:"xlc520",d:"2022-01-28T00:00:00.000Z",l:"2022年1月28日",c:["Linux"],g:["Linux"],e:`<h1> Centos7 Minimal 安装后初始化配置</h1>
<p></p>
<h2> 1:更新yum</h2>
<p><code>yum upgrade</code></p>
<h2> 2: 安装基础命令</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> vim* lrzsz  gcc-c++ pcre pcre-devel zlib zlib-devel openssl openssl-devel
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> telnet net-tools

安装ifconfig
yum provides <span class="token function">ifconfig</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.71,words:214},y:"a",title:"Centos7 Minimal 安装后初始化配置",i:"type"},["/linux/Centos7Minimal","/linux/Centos7Minimal.md"]],["v-19781156","/linux/Docker%E5%AE%89%E8%A3%85Oracle.html",{a:"xlc520",d:"2022-08-17T00:00:00.000Z",l:"2022年8月17日",c:["Linux"],g:["Linux"],e:`<h1> Docker安装Oracle</h1>
<h2> 通过Docker 安装 Oracle11g</h2>
<h3> 1. 背景</h3>
<p><code>Oracle</code> 作为全球最强大的关系型数据库，应用在各行各业。但是在 <code>Linux</code> 中安装 <code>Oracle</code> 非常麻烦，为了一次装好，也方便将来直接可以导出镜像在各平台移植使用，所以选择用 <code>Docker</code> 安装，并做详细记录，方便今后参考。</p>
<h3> 2. 安装</h3>
<h4> 前期准备</h4>
<p><strong>Docker安装</strong></p>`,r:{minutes:5.94,words:1782},y:"a",title:"Docker安装Oracle",i:"linux"},["/linux/Docker安装Oracle.html","/linux/Docker%E5%AE%89%E8%A3%85Oracle","/linux/Docker安装Oracle.md","/linux/Docker%E5%AE%89%E8%A3%85Oracle.md"]],["v-171c1b4c","/linux/ESXI_iKuai_OpenWrt.html",{a:"xlc520",d:"2022-10-02T00:00:00.000Z",l:"2022年10月2日",c:["Linux"],g:["Linux"],e:`<h1> ESXI+iKuai+OpenWrt</h1>
<h3> 一、安装准备</h3>
<ol>
<li>主机一台</li>
<li>U盘一个</li>
<li>Rufus 3.13 （简单快速制作USB启动盘软件）</li>
<li>ESXI 6.7.0 U3固件</li>
<li>iKuai8_x64_3.4.7固件（最新版本为3.4.9，可以直接下载最新版本，也可以安装后升级）</li>
<li>StarWind Converter（虚拟磁盘格式转换工具）</li>
<li>OpenWrt-x86-64固件</li>
</ol>
<p>安装需要用到工具安装包、固件，网上教程非常多，直接自行下载，非常简单。建议官网下载。</p>`,r:{minutes:19.32,words:5797},y:"a",title:"ESXI+iKuai+OpenWrt",i:"linux"},["/linux/ESXI_iKuai_OpenWrt","/linux/ESXI+iKuai+OpenWrt.html","/linux/ESXI+iKuai+OpenWrt.md"]],["v-2767e582","/linux/Euserv.html",{a:"xlc520",d:"2022-01-10T00:00:00.000Z",l:"2022年1月10日",c:["Euserv"],g:["Euserv"],u:!1,e:`<h1> Euserv</h1>
<p>EUserv是一家德国主机商，提供<a href="https://wzfou.com/vps/" target="_blank" rel="noopener noreferrer">VPS主机</a>、服务器等，目前该商家提供免费ipv6主机服务器，配置信息是CPU：1 Core、内存：1 GB、硬盘：10 GB HDD、带宽：1 Gbit，提供一个IPv6地址，想要IPv4地址那就付费了。虽然<a href="https://wzfou.com/tag/mianfei-vps/" target="_blank" rel="noopener noreferrer">免费VPS</a>主机看起来配置很好，但是用起来非常地卡。</p>`,r:{minutes:12.37,words:3711},y:"a",title:"Euserv",i:"page"},["/linux/Euserv","/linux/Euserv.md"]],["v-473b8da1","/linux/Linux%E5%8F%91%E9%80%81tcp%E5%8C%85%E6%9C%80%E7%AE%80%E5%8D%95%E6%96%B9%E6%B3%95-netcat.html",{a:"xlc520",d:"2022-11-03T00:00:00.000Z",l:"2022年11月3日",c:["Linux"],g:["Linux"],e:`<h1> Linux发送udp/tcp包最简单方法-netcat</h1>
<p>由于测试需要，需要从一台linux向另一台建立连接，<a href="https://so.csdn.net/so/search?q=%E5%B9%B6%E5%8F%91&amp;spm=1001.2101.3001.7020" target="_blank" rel="noopener noreferrer">并发</a>送tcp/udp包。觉得用python写个client/server脚本有点麻烦，于是想找一个命令直接发送，一搜就搜到了netcat</p>
<h2> 网络拓扑</h2>
<figure><img src="https://static.xlc520.ml/blogImage/a2ae9f6f67a64c6587f07caffddca26b.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,r:{minutes:1.8,words:539},y:"a",title:"Linux发送udptcp包最简单方法-netcat",i:"linux"},["/linux/Linux发送tcp包最简单方法-netcat.html","/linux/Linux%E5%8F%91%E9%80%81tcp%E5%8C%85%E6%9C%80%E7%AE%80%E5%8D%95%E6%96%B9%E6%B3%95-netcat","/linux/Linux发送tcp包最简单方法-netcat.md","/linux/Linux%E5%8F%91%E9%80%81tcp%E5%8C%85%E6%9C%80%E7%AE%80%E5%8D%95%E6%96%B9%E6%B3%95-netcat.md"]],["v-134ccd82","/linux/Linux%E5%9B%BE%E5%BD%A2%E5%8C%96%E7%AE%A1%E7%90%86%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%9A%84%E7%A5%9E%E5%99%A8Cockpit.html",{a:"xlc520",d:"2022-05-23T00:00:00.000Z",l:"2022年5月23日",c:["Linux"],g:["Linux"],e:`<h1> Linux图形化管理服务器的神器：Cockpit</h1>
<h2> <strong>什么是 Linux 的 Cockpit 项目？</strong></h2>
<p>Cockpit是一个基于浏览器的图形管理工具，适用于您的 Linux 服务器，在服务器上安装 Cockpit 后，您可以从浏览器访问服务器并执行所有常规管理任务，例如配置防火墙、更改网络设置、管理存储、管理用户帐户、运行容器、安装更新、更新软件等。您还可以分析 CPU 负载、内存使用情况、网络活动和磁盘性能</p>
<p>如果您对 Linux 有点熟悉，Cockpit 是一个以图形方式管理服务器的好选择。即使您是一位经验丰富的系统管理员，Cockpit 也让您有机会了解您的服务器。</p>`,r:{minutes:6.52,words:1957},y:"a",title:"Linux图形化管理服务器的神器：Cockpit",i:"linux"},["/linux/Linux图形化管理服务器的神器Cockpit.html","/linux/Linux%E5%9B%BE%E5%BD%A2%E5%8C%96%E7%AE%A1%E7%90%86%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%9A%84%E7%A5%9E%E5%99%A8Cockpit","/linux/Linux图形化管理服务器的神器Cockpit.md","/linux/Linux%E5%9B%BE%E5%BD%A2%E5%8C%96%E7%AE%A1%E7%90%86%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%9A%84%E7%A5%9E%E5%99%A8Cockpit.md"]],["v-0e642874","/linux/Linux%E6%80%BB%E7%BB%93.html",{a:"xlc520",d:"2022-03-22T00:00:00.000Z",l:"2022年3月22日",c:["Linux"],g:["Linux"],e:`<h1> Linux系统总结</h1>
<h2> 操作系统</h2>
<p>操作系统 <code>Operating System</code> 简称 <code>OS</code> ，是软件的一部分，它是硬件基础上的第一层软件，是硬件和其它软件沟通的桥梁。</p>
<p>操作系统会控制其他程序运行，管理系统资源，提供最基本的计算功能，如管理及配置内存、决定系统资源供需的优先次序等，同时还提供一些基本的服务程序。</p>
<figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c17c21686f21413085f3e32c85a19443~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure>`,r:{minutes:53.79,words:16136},y:"a",title:"Linux系统总结",i:"type"},["/linux/Linux总结.html","/linux/Linux%E6%80%BB%E7%BB%93","/linux/Linux总结.md","/linux/Linux%E6%80%BB%E7%BB%93.md"]],["v-1e23d93c","/linux/Linux%E6%96%B0%E5%BC%80%E6%9C%BA%E5%99%A8%E9%85%8D%E7%BD%AE.html",{a:"xlc520",d:"2022-09-28T00:00:00.000Z",l:"2022年9月28日",c:["Linux"],g:["Linux"],e:`<h1> Linux新开机器配置</h1>
<h2> 1.更换yum/apt源</h2>
<blockquote>
<p><strong>通知：CentOS 8操作系统版本结束了生命周期（EOL），Linux社区已不再维护该操作系统版本。建议您切换到Anolis或Alinux。如果您的业务过渡期仍需要使用CentOS 8系统中的一些安装包，请根据下文切换CentOS 8的源。</strong></p>
</blockquote>
<h3> CentOS</h3>
<h4> 1. 备份</h4>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:3.97,words:1190},y:"a",title:"Linux新开机器配置",i:"linux"},["/linux/Linux新开机器配置.html","/linux/Linux%E6%96%B0%E5%BC%80%E6%9C%BA%E5%99%A8%E9%85%8D%E7%BD%AE","/linux/Linux新开机器配置.md","/linux/Linux%E6%96%B0%E5%BC%80%E6%9C%BA%E5%99%A8%E9%85%8D%E7%BD%AE.md"]],["v-172206f6","/linux/Linux%E8%84%9A%E6%9C%AC%E5%B7%A5%E5%85%B7.html",{a:"xlc520",d:"2022-01-21T00:00:00.000Z",l:"2022年1月21日",c:["other"],g:["other"],e:`<h1> Linux脚本工具</h1>
<h2> EdNovas 的 Toolbox 工具箱</h2>
<p><strong>脚本地址</strong></p>
<p><a href="https://github.com/wdm1732418365/vpstoolbox" target="_blank" rel="noopener noreferrer">https://github.com/wdm1732418365/vpstoolbox</a></p>
<p>最新版：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>CODE
<span class="token function">wget</span> <span class="token parameter variable">-N</span> https://raw.githubusercontent.com/wdm1732418365/vpstoolbox/main/ednovastool.sh <span class="token operator">&amp;&amp;</span> <span class="token function">chmod</span> +x ednovastool.sh <span class="token operator">&amp;&amp;</span> ./ednovastool.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.22,words:66},y:"a",title:"Linux脚本工具",i:"type"},["/linux/Linux脚本工具.html","/linux/Linux%E8%84%9A%E6%9C%AC%E5%B7%A5%E5%85%B7","/linux/Linux脚本工具.md","/linux/Linux%E8%84%9A%E6%9C%AC%E5%B7%A5%E5%85%B7.md"]],["v-9e274aaa","/linux/MySQL.html",{a:"xlc520",d:"2022-01-23T00:00:00.000Z",l:"2022年1月23日",c:["other"],g:["other"],e:`<h1> MySQL 8</h1>
<p>mysql从5.7一下子跳跃到了8.0，其中的改变还是很大，有点这里就不说了，小伙伴们自己去百度了解一下，这里重点说一下，安装的事</p>
<p>1.解压后，文件下下面是没有my.ini 和 data目录的，需要自己新建一个my.ini和data目录</p>
<p>my.ini的基本代码就这几行配置，足矣，更详细的自己官网上看（F:\\mysql-8.0.11-winx64 是我的解压路径）</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
[mysqld]
# 设置3306端口
port=3306
# 设置mysql的安装目录
basedir=E:\\Software\\mysql-8.0.19-winx64
# 设置mysql数据库的数据的存放目录，在安装mysql-5.7.30-winx64.zip版本的时候，此配置不可添加，否则mysql将无法启动。
# datadir=E:\\Software\\mysql-8.0.19-winx64\\data
# 允许最大连接数
max_connections=200
# 允许连接失败的次数。这是为了防止有人从该主机试图攻击数据库系统
max_connect_errors=10
# 服务端使用的字符集默认为UTF8
character-set-server=utf8
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
# 默认使用“mysql_native_password”插件认证
default_authentication_plugin=mysql_native_password
# 关闭ssl
skip_ssl
# 配置时区
default-time_zone='+8:00'
[mysql]
# 设置mysql客户端默认字符集
default-character-set=utf8
[client]
# 设置mysql客户端连接服务端时默认使用的端口
port=3306
default-character-set=utf8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.4,words:1319},y:"a",title:"MySQL 8",i:"type"},["/linux/MySQL","/linux/MySQL.md"]],["v-cfcc0faa","/linux/MySQL%E5%8E%8B%E7%BC%A9%E7%89%88%E5%AE%89%E8%A3%85%E9%85%8D%E7%BD%AE.html",{a:"xlc520",d:"2022-01-24T00:00:00.000Z",l:"2022年1月24日",c:["other"],g:["other"],e:`<h1> MySQL压缩版安装配置</h1>
<h2> 1 下载</h2>
<p>官网：<a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">https://www.mysql.com/</a>
最新版下载地址：<a href="https://dev.mysql.com/downloads/mysql/" target="_blank" rel="noopener noreferrer">https://dev.mysql.com/downloads/mysql/</a>
多版本下载地址：<a href="https://downloads.mysql.com/archives/community/" target="_blank" rel="noopener noreferrer">https://downloads.mysql.com/archives/community/</a>
在这里，我使用的是MySQL8.0.19解压缩版，附上下载链接：<a href="https://cdn.mysql.com/archives/mysql-8.0/mysql-8.0.19-winx64.zip" target="_blank" rel="noopener noreferrer">https://cdn.mysql.com/archives/mysql-8.0/mysql-8.0.19-winx64.zip</a></p>`,r:{minutes:4.47,words:1341},y:"a",title:"MySQL压缩版安装配置",i:"type"},["/linux/MySQL压缩版安装配置.html","/linux/MySQL%E5%8E%8B%E7%BC%A9%E7%89%88%E5%AE%89%E8%A3%85%E9%85%8D%E7%BD%AE","/linux/MySQL压缩版安装配置.md","/linux/MySQL%E5%8E%8B%E7%BC%A9%E7%89%88%E5%AE%89%E8%A3%85%E9%85%8D%E7%BD%AE.md"]],["v-7aba7e62","/linux/Nginx%E4%B8%80%E7%BD%91%E6%89%93%E5%B0%BD.html",{a:"xlc520",d:"2023-01-20T00:00:00.000Z",l:"2023年1月20日",c:["Linux"],g:["Linux"],e:`<h1> Nginx一网打尽：动静分离、压缩、缓存、黑白名单、跨域、高可用、性能优化</h1>
<ul>
<li>引言</li>
<li>一、性能怪兽-Nginx概念深入浅出</li>
<li>二、Nginx环境搭建</li>
<li>三、Nginx反向代理-负载均衡</li>
<li>四、Nginx动静分离</li>
<li>五、Nginx资源压缩</li>
<li>六、Nginx缓冲区</li>
<li>七、Nginx缓存机制</li>
<li>八、Nginx实现IP黑白名单</li>
<li>九、Nginx跨域配置</li>
<li>十、Nginx防盗链设计</li>
<li>十一、Nginx大文件传输配置</li>
<li>十二、Nginx配置SLL证书</li>
<li>十三、Nginx的高可用</li>
<li>十四、Nginx性能优化</li>
<li>十五、放在最后的结尾</li>
</ul>`,r:{minutes:44.12,words:13237},y:"a",title:"Nginx一网打尽：动静分离、压缩、缓存、黑白名单、跨域、高可用、性能优化",i:"linux"},["/linux/Nginx一网打尽.html","/linux/Nginx%E4%B8%80%E7%BD%91%E6%89%93%E5%B0%BD","/linux/Nginx一网打尽.md","/linux/Nginx%E4%B8%80%E7%BD%91%E6%89%93%E5%B0%BD.md"]],["v-a5195ce6","/linux/Nginx%E4%B8%87%E5%AD%97%E6%80%BB%E7%BB%93.html",{a:"xlc520",d:"2022-03-21T00:00:00.000Z",l:"2022年3月21日",c:["Linux"],g:["Linux"],e:`<h1> 万字总结，体系化带你全面认识 Nginx</h1>
<h1> Nginx 概述</h1>
<figure><img src="https://image.z.itpub.net/zitpub.net/JPG/2021-03-31/71499A3FDD1EB5D9F173A41782597C20.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p><code>Nginx</code> 是开源、高性能、高可靠的 <code>Web</code> 和反向代理服务器，而且支持热部署，几乎可以做到 7 * 24 小时不间断运行，即使运行几个月也不需要重新启动，还能在不间断服务的情况下对软件版本进行热更新。性能是 <code>Nginx</code> 最重要的考量，其占用内存少、并发能力强、能支持高达 5w 个并发连接数，最重要的是， <code>Nginx</code> 是免费的并可以商业化，配置使用也比较简单。</p>`,r:{minutes:35.82,words:10746},y:"a",title:"Nginx万字总结",i:"type"},["/linux/Nginx万字总结.html","/linux/Nginx%E4%B8%87%E5%AD%97%E6%80%BB%E7%BB%93","/linux/Nginx万字总结.md","/linux/Nginx%E4%B8%87%E5%AD%97%E6%80%BB%E7%BB%93.md"]],["v-4f7b7c72","/linux/Nginx%E4%BB%8E%E5%AE%89%E8%A3%85%E5%88%B0%E9%AB%98%E5%8F%AF%E7%94%A8.html",{a:"xlc520",d:"2022-01-16T00:00:00.000Z",l:"2022年1月16日",c:["other"],g:["other"],e:`<h1> Nginx从安装到高可用</h1>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>原文：blog.csdn.net/qq_34886352/article/details/103581973
第1-100期：100期Java项目整理
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:16.23,words:4868},y:"a",title:"Nginx从安装到高可用",i:"type"},["/linux/Nginx从安装到高可用.html","/linux/Nginx%E4%BB%8E%E5%AE%89%E8%A3%85%E5%88%B0%E9%AB%98%E5%8F%AF%E7%94%A8","/linux/Nginx从安装到高可用.md","/linux/Nginx%E4%BB%8E%E5%AE%89%E8%A3%85%E5%88%B0%E9%AB%98%E5%8F%AF%E7%94%A8.md"]],["v-18d19b29","/linux/Nginx%E5%AE%89%E8%A3%85Web%E5%BA%94%E7%94%A8%E9%98%B2%E7%81%AB%E5%A2%99.html",{a:"xlc520",d:"2022-01-15T00:00:00.000Z",l:"2022年1月15日",c:["other"],g:["other"],e:`<h1> Nginx安装Web应用防火墙</h1>
<p>LNMP一键安装包 ngx_lua_waf waf(web应用防火墙) 安装设置。WAF中文名是Web应用防火墙，WAF能够根据规则拦截SQL注入、恶意请求、黑客扫描等HTTP请求从而保护WEB应用的安全。</p>
<p>今天我们要说的是一个比较简单好用的基于lua的waf：ngx_lua_waf。它是一个基于lua-nginx-module(openresty)的web应用防火墙，<a href="https://github.com/loveshell/ngx_lua_waf%E3%80%82" target="_blank" rel="noopener noreferrer">https://github.com/loveshell/ngx_lua_waf。</a></p>`,r:{minutes:3.16,words:949},y:"a",title:"Nginx安装Web应用防火墙",i:"type"},["/linux/Nginx安装Web应用防火墙.html","/linux/Nginx%E5%AE%89%E8%A3%85Web%E5%BA%94%E7%94%A8%E9%98%B2%E7%81%AB%E5%A2%99","/linux/Nginx安装Web应用防火墙.md","/linux/Nginx%E5%AE%89%E8%A3%85Web%E5%BA%94%E7%94%A8%E9%98%B2%E7%81%AB%E5%A2%99.md"]],["v-55994567","/linux/NodeJS-Maven-Mysql.html",{a:"xlc520",d:"2022-01-10T00:00:00.000Z",l:"2022年1月10日",c:["linux"],g:["NodeJS","Maven","Mysql"],u:!1,e:`<h1> 安装NodeJS-Maven-Mysql</h1>
<h2> 安装NodeJS</h2>
<p>litemall的管理端和用户端的前端界面是由Vue.js开发，编译这两部分的时候需要用到NodeJS环境，以下操作将安装一个NodeJS环境。</p>
<p>1.&nbsp; 从淘宝镜像下载NodeJS的安装包。</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>wget https://npm.taobao.org/mirrors/node/v12.4.0/node-v12.4.0-linux-x64.tar.xz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:3.54,words:1061},y:"a",title:"安装NodeJS-Maven-Mysql",i:"page"},["/linux/NodeJS-Maven-Mysql","/linux/NodeJS-Maven-Mysql.md"]],["v-275077d9","/linux/OpenSSL%E7%94%9F%E6%88%90%E8%87%AA%E7%AD%BE%E5%90%8D%E8%AF%81%E4%B9%A6.html",{a:"xlc520",d:"2022-05-21T00:00:00.000Z",l:"2022年5月21日",c:["Linux"],g:["Linux"],e:`<h1> 使用OpenSSL生成自签名证书，实现HTTPS传输</h1>
<p><strong>导读</strong></p>
<p>SSL协议是一种网络安全协议，用于加密浏览器和服务器之间传输的数据信息。SSL证书就是遵守SSL协议，由数字证书颁发机构CA在验证服务器身份后颁发的一种数字证书，网站通过部署SSL证书实现加密传输数据。如果网站涉及敏感信息，例如：登录账号及口令、身份证号码、手机号码等重要个人信息，或者医院、银行、保险公司等机构的重要业务数据，则需要使用SSL证书，防止信息被第三方窃听和篡改。</p>
<p>SSL证书可分为专业证书（由受信任的证书颁发机构签名的证书）和自签名证书。专业证书由可信任的CA安全机构颁发，机构颁发给用户的证书是唯一可信任的，不可被伪造，此外，它们还具有保护措施来减少错误颁发和其他类型的欺诈行为。专业证书的安全性越高，申请证书的费用越昂贵，于是一些企业将目光转向了自签名证书。自签名证书是可以自己签发的SSL证书，相比于专业证书，自签名证书签发流程简单，几乎0成本，且同样使用与专业证书相同的方法加密传输数据。可是制作难度低，意味着自签名证书极容易被恶意模仿，进而伪造成有同样证书的假冒网站，所以面向公众的网站使用自签名证书存在一定安全风险。但在一些安全可控的网络环境下，为了节省网站建设成本，可以考虑使用自签名证书，例如：测试环境，具备安全防护的内网环境，面向内部、少数人员使用的不涉及敏感数据的网站等。</p>`,r:{minutes:14.21,words:4263},y:"a",title:"OpenSSL生成自签名证书",i:"linux"},["/linux/OpenSSL生成自签名证书.html","/linux/OpenSSL%E7%94%9F%E6%88%90%E8%87%AA%E7%AD%BE%E5%90%8D%E8%AF%81%E4%B9%A6","/linux/OpenSSL生成自签名证书.md","/linux/OpenSSL%E7%94%9F%E6%88%90%E8%87%AA%E7%AD%BE%E5%90%8D%E8%AF%81%E4%B9%A6.md"]],["v-0bb9c789","/linux/Oracle%E6%95%B0%E6%8D%AE%E5%BA%93%E5%9F%BA%E7%A1%80.html",{a:"xlc520",d:"2022-06-28T00:00:00.000Z",l:"2022年6月28日",c:["Linux"],g:["Linux"],e:`<h1> Oracle数据库基础</h1>
<p><strong>数据字典</strong>，数据库元数据信息的数据字典表和用户可以读取的数据字典视图组成。存放oracle数据库所用的有关信息。通过数据字典可以查看数据表和用户的一些信息。</p>
<p><strong>数据文件</strong>，一个oracle数据可以拥有一个或多个物理的数据文件，一个数据文件只对于一个数据库</p>
<p><strong>表空间</strong>，存储的逻辑结构，是组织数据和进行空间分配的逻辑结构。简单点，表空间就是一个或者多个数据文件的集合，所有的数据文件都被逻辑的存放在指定的表空间中。通常有system 、sysaux、 temp三个默认表空间。</p>`,r:{minutes:8.34,words:2501},y:"a",title:"Oracle数据库基础",i:"linux"},["/linux/Oracle数据库基础.html","/linux/Oracle%E6%95%B0%E6%8D%AE%E5%BA%93%E5%9F%BA%E7%A1%80","/linux/Oracle数据库基础.md","/linux/Oracle%E6%95%B0%E6%8D%AE%E5%BA%93%E5%9F%BA%E7%A1%80.md"]],["v-7624e067","/linux/Oracle%E7%9A%84%E6%95%B0%E6%8D%AE%E5%AF%BC%E5%85%A5%E4%B8%8E%E5%AF%BC%E5%87%BA-%E6%95%B0%E6%8D%AE%E5%BA%93.html",{a:"xlc520",d:"2022-06-29T00:00:00.000Z",l:"2022年6月29日",c:["Linux"],g:["Linux"],e:`<h1> Oracle的数据 导入与导出-数据库</h1>
<h2> 1 数据库导入导出需要注意</h2>
<p>1.目标数据库要与源数据库有着名称相同的表空间。</p>
<p>2.目标数据在进行导入时，用户名尽量相同(这样保证用户的权限级别相同)。</p>
<p>3.目标数据库每次在进行数据导入前，应做好数据备份，以防数据丢失。</p>
<p>4.弄清是导入导出到相同版本还是不同版本(oracle10g 版本与 oracle11g 版本)。</p>
<p>5.目标数据导入前,弄清楚是数据覆盖(替换),还是仅插入新数据或替换部分数据表。</p>
<p>6.确定目标数据库磁盘空间是否足够容纳新数据，是否需要扩充表空间。</p>`,r:{minutes:9.65,words:2896},y:"a",title:"Oracle的数据 导入与导出-数据库",i:"linux"},["/linux/Oracle的数据导入与导出-数据库.html","/linux/Oracle%E7%9A%84%E6%95%B0%E6%8D%AE%E5%AF%BC%E5%85%A5%E4%B8%8E%E5%AF%BC%E5%87%BA-%E6%95%B0%E6%8D%AE%E5%BA%93","/linux/Oracle的数据导入与导出-数据库.md","/linux/Oracle%E7%9A%84%E6%95%B0%E6%8D%AE%E5%AF%BC%E5%85%A5%E4%B8%8E%E5%AF%BC%E5%87%BA-%E6%95%B0%E6%8D%AE%E5%BA%93.md"]],["v-78d65395","/linux/Podman%E5%BC%80%E6%BA%90%E7%9A%84%E5%AE%B9%E5%99%A8.html",{a:"xlc520",d:"2022-02-28T00:00:00.000Z",l:"2022年2月28日",c:["Linux"],g:["Linux"],e:`<figure><img src="https://mmbiz.qpic.cn/mmbiz_png/GjuWRiaNxhnQ7UdGu7GkFW1JTLG84Sbke4nPJmv0419zZF8UBbuvqNQc9PscMEOQUf9Q11xX4no3LKadzfhNZoA/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure>
<p>来源：<a href="http://t-t.ink/0V26K" target="_blank" rel="noopener noreferrer">http://t-t.ink/0V26K</a></p>`,r:{minutes:11.99,words:3596},y:"a",title:"Podman开源的容器",i:"type"},["/linux/Podman开源的容器.html","/linux/Podman%E5%BC%80%E6%BA%90%E7%9A%84%E5%AE%B9%E5%99%A8","/linux/Podman开源的容器.md","/linux/Podman%E5%BC%80%E6%BA%90%E7%9A%84%E5%AE%B9%E5%99%A8.md"]],["v-f0383c18","/linux/",{a:"xlc520",d:"2022-01-20T00:00:00.000Z",l:"2022年1月20日",c:["Linux"],g:["Linux"],e:`<p align="center"> 
  <img src="https://metrics.lecoq.io/xlc520?template=classic&amp;isocalendar=1&amp;languages=1&amp;people=1&amp;activity=1&amp;achievements=1&amp;lines=1&amp;repositories=1&amp;notable=1&amp;introduction=1&amp;pagespeed=1&amp;repositories=100&amp;repositories.batch=100&amp;repositories.forks=false&amp;repositories.affiliations=owner&amp;isocalendar.duration=full-year&amp;languages.limit=8&amp;languages.threshold=0%&amp;languages.colors=github&amp;languages.sections=most-used&amp;languages.indepth=false&amp;languages.analysis.timeout=15&amp;languages.categories=markup%2C programming&amp;languages.recent.categories=markup%2C programming&amp;languages.recent.load=300&amp;languages.recent.days=14&amp;people.limit=24&amp;people.identicons=false&amp;people.identicons.hide=false&amp;people.size=28&amp;people.types=followers%2C following&amp;people.shuffle=false&amp;activity.limit=5&amp;activity.load=300&amp;activity.days=14&amp;activity.visibility=all&amp;activity.timestamps=false&amp;activity.filter=all&amp;achievements.threshold=C&amp;achievements.secrets=true&amp;achievements.display=detailed&amp;achievements.limit=0&amp;notable.from=organization&amp;notable.repositories=false&amp;notable.indepth=false&amp;notable.types=commit&amp;repositories.featured= xlc520%2Fxlc520.github.io&amp;introduction.title=true&amp;pagespeed.url=xlc520.github.io&amp;pagespeed.detailed=false&amp;pagespeed.screenshot=false&amp;config.timezone=Asia%2FShanghai"> 
</p>`,r:{minutes:.55,words:165},y:"a",title:"Linux",i:"linux"},["/linux/index.html","/linux/README.md"]],["v-1db2e12e","/linux/SSH%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%BD%AF%E4%BB%B6.html",{a:"xlc520",d:"2022-01-17T00:00:00.000Z",l:"2022年1月17日",c:["other"],g:["other"],e:`<h1> SSH客户端软件</h1>
<p>SSH客户端是在管理和配置Linux服务器用到很多的软件了，一款好的SSH管理软件不但可以让你更好地执行<a href="https://www.v1tx.com/post/linux-commands/" target="_blank" rel="noopener noreferrer">Linux命令</a>，对于工作效率的提升也是非常明显，在本文中我们就来介绍几款非常好用的SSH客户端软件</p>
<h2> Xshell</h2>
<p>Xshell Plus Linux连接SSH工具 v7.0.0092 特别版</p>
<p><a href="https://lanzoui.com/b010yn1di" target="_blank" rel="noopener noreferrer">https://lanzoui.com/b010yn1di</a></p>`,r:{minutes:6.66,words:1997},y:"a",title:"SSH客户端软件",i:"type"},["/linux/SSH客户端软件.html","/linux/SSH%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%BD%AF%E4%BB%B6","/linux/SSH客户端软件.md","/linux/SSH%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%BD%AF%E4%BB%B6.md"]],["v-0b5dadd6","/linux/VMware-Esxi.html",{a:"xlc520",d:"2022-09-23T00:00:00.000Z",l:"2022年9月23日",c:["Linux"],g:["Linux","Esxi"],e:`<h1> VMware-Esxi 各个版本镜像文件iso下载链接</h1>
<p><strong>VMware版本选型</strong></p>
<p><a href="https://blog.csdn.net/techgroup/article/details/105378252" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/techgroup/article/details/105378252</a></p>
<p><strong>安装使用教程</strong></p>
<p><a href="https://blog.csdn.net/m0_46435788/article/details/107528510" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/m0_46435788/article/details/107528510</a></p>`,r:{minutes:5.9,words:1770},y:"a",title:"VMware-Esxi 各个版本镜像文件iso下载链接",i:"linux"},["/linux/VMware-Esxi","/linux/VMware-Esxi.md"]],["v-0a582b41","/linux/Windows%E5%AD%90%E7%B3%BB%E7%BB%9FWSL.html",{a:"xlc520",d:"2022-08-20T00:00:00.000Z",l:"2022年8月20日",c:["Linux"],g:["Linux","WSL","子系统","Windows"],e:`<h1> Windows 子系统 WSL</h1>
<h2> 自定义安装</h2>
<div class="language-powershell line-numbers-mode" data-ext="powershell"><pre class="language-powershell"><code><span class="token function">Add-AppxPackage</span> <span class="token punctuation">.</span>\\app_name<span class="token punctuation">.</span>appx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:17.23,words:5169},y:"a",title:"Windows 子系统 WSL",i:"linux"},["/linux/Windows子系统WSL.html","/linux/Windows%E5%AD%90%E7%B3%BB%E7%BB%9FWSL","/linux/Windows子系统WSL.md","/linux/Windows%E5%AD%90%E7%B3%BB%E7%BB%9FWSL.md"]],["v-5699db53","/linux/bt.html",{a:"xlc520",d:"2022-01-14T00:00:00.000Z",l:"2022年1月14日",c:["Linux"],g:["Linux"],e:`<h1> 宝塔面板v7.7.0-解锁Nginx防火墙及网站监控报表-绕过绑定账号</h1>
<p>测试环境：Ubuntu / Debian / CentOS
测试时间：2021-12-20
宝塔版本： 7.7.0
仅测试了Nginx防火墙及网站监控报表两款插件，其它收费插件未测试
其它系统及版本未进行测试，请自行验证，请勿在生产环境下进行测试！
注意：修改代码后需要重启面板服务才能使其生效，如果面板出现乱码重启服务器即可；</p>
<p>解锁所有付费插件为永不过期</p>
<p>文件路径：www/server/panel/data/plugin.json
搜索字符串："endtime": -1 全部替换为 "endtime": 999999999999
显示永久专业版或企业版标识</p>`,r:{minutes:2.33,words:698},y:"a",title:"宝塔面板绕过绑定账号",i:"type"},["/linux/bt","/linux/bt.md"]],["v-30e7d74e","/linux/exsi_%E9%BB%91%E7%BE%A4%E6%99%96_%E7%88%B1%E5%BF%AB_openwrt.html",{a:"xlc520",d:"2022-10-01T00:00:00.000Z",l:"2022年10月1日",c:["Linux"],g:["Linux"],e:`<h1> exsi+黑群晖+爱快+openwrt</h1>
<h3> 一. 硬件选型:</h3>
<p>cpu: 选择了4款CPU</p>
<p>E3-1235LV5 :功耗低,也是许多玩家首选,价格在500左右,但是需要搭配的主板有C232 C236,C232需要配独显,C236价格太高不合适,所有放弃</p>
<p>E4-1240LV5: 不带独显,需要额外配置显卡,对应功耗增加,如果用亮机卡,开机再拔掉,可能无法启动.</p>
<p>I5-8600T : 价格在800左右,带独显.</p>
<p>I5-10600T : 最终选定这款,带独显,功耗相比增加了10W,6核12进程, 主频相比其他3款要高出一些.价格咸鱼上淘到1050</p>`,r:{minutes:11.44,words:3431},y:"a",title:"exsi+黑群晖+爱快+openwrt",i:"linux"},["/linux/exsi_黑群晖_爱快_openwrt.html","/linux/exsi_%E9%BB%91%E7%BE%A4%E6%99%96_%E7%88%B1%E5%BF%AB_openwrt","/linux/exsi+黑群晖+爱快+openwrt.html","/linux/exsi+%E9%BB%91%E7%BE%A4%E6%99%96+%E7%88%B1%E5%BF%AB+openwrt.html","/linux/exsi+黑群晖+爱快+openwrt.md","/linux/exsi+%E9%BB%91%E7%BE%A4%E6%99%96+%E7%88%B1%E5%BF%AB+openwrt.md"]],["v-be175c8a","/linux/openssl%E4%B8%80%E9%94%AE%E8%87%AA%E7%AD%BE%E8%AF%81%E4%B9%A6.html",{a:"xlc520",d:"2022-01-10T00:00:00.000Z",l:"2022年1月10日",c:["linux"],g:["Openssl"],u:!1,e:`<h1> Openssl一键自签证书</h1>
<p><code>vim openssl.sh</code></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token keyword">while</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">"<span class="token variable">$domain</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">do</span>
    <span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">"输入域名/IP(必填,如 *.haoduck.com): "</span> domain
<span class="token keyword">done</span>
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">"输入邮箱(选填,默认admin@haoduck.com): "</span> mail
<span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">"<span class="token variable">$mail</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">mail</span><span class="token operator">=</span>admin@haoduck.com
<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">"输入日期(选填,默认3650): "</span> day
<span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token parameter variable">-z</span> <span class="token string">"<span class="token variable">$day</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token assign-left variable">day</span><span class="token operator">=</span><span class="token number">3650</span>
<span class="token assign-left variable">dir</span><span class="token operator">=</span><span class="token variable">$domain</span> <span class="token operator">&amp;&amp;</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$dir</span>
<span class="token assign-left variable">crt_file</span><span class="token operator">=</span><span class="token string">"<span class="token variable">$dir</span>/<span class="token variable">\${domain}</span>.crt"</span>
<span class="token assign-left variable">key_file</span><span class="token operator">=</span><span class="token string">"<span class="token variable">$dir</span>/<span class="token variable">\${domain}</span>.key"</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">command</span> <span class="token parameter variable">-v</span> openssl<span class="token variable">)</span></span>"</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
    openssl req <span class="token parameter variable">-x509</span> <span class="token parameter variable">-nodes</span> <span class="token parameter variable">-newkey</span> rsa:2048 <span class="token parameter variable">-days</span> <span class="token variable">$day</span> <span class="token parameter variable">-keyout</span> <span class="token variable">$key_file</span> <span class="token parameter variable">-out</span> <span class="token variable">$crt_file</span> <span class="token parameter variable">-subj</span> <span class="token string">"/C=US/ST=California/L=Los Angeles/O=Haoduck/OU=Aoao/CN=<span class="token variable">\${domain}</span>/emailAddress=<span class="token variable">\${mail}</span>"</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">"<span class="token entity" title="\\t">\\t</span>证书：<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>/<span class="token variable">$crt_file</span><span class="token entity" title="\\n">\\n</span><span class="token entity" title="\\t">\\t</span>私钥：<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">pwd</span><span class="token variable">)</span></span>/<span class="token variable">$key_file</span>"</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"openssl 未安装"</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.95,words:284},y:"a",title:"Openssl一键自签证书",i:"page"},["/linux/openssl一键自签证书.html","/linux/openssl%E4%B8%80%E9%94%AE%E8%87%AA%E7%AD%BE%E8%AF%81%E4%B9%A6","/linux/openssl一键自签证书.md","/linux/openssl%E4%B8%80%E9%94%AE%E8%87%AA%E7%AD%BE%E8%AF%81%E4%B9%A6.md"]],["v-31af7fac","/linux/python%E5%AE%89%E8%A3%85%E6%BA%90.html",{a:"xlc520",d:"2022-01-19T00:00:00.000Z",l:"2022年1月19日",c:["other"],g:["other"],e:`<h1> python安装源</h1>
<p>在<code>C:\\Users\\Administrator\\pip</code>下，新建<code>pip.ini</code>，输入以下内容：</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token punctuation">[</span><span class="token keyword">global</span><span class="token punctuation">]</span>
timeout <span class="token operator">=</span> <span class="token number">6000</span>
index<span class="token operator">-</span>url <span class="token operator">=</span> https<span class="token punctuation">:</span><span class="token operator">//</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>pypi<span class="token operator">/</span>simple<span class="token operator">/</span>
<span class="token punctuation">[</span>install<span class="token punctuation">]</span>
use<span class="token operator">-</span>mirrors <span class="token operator">=</span> true
mirrors <span class="token operator">=</span> https<span class="token punctuation">:</span><span class="token operator">//</span>mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com<span class="token operator">/</span>pypi<span class="token operator">/</span>simple<span class="token operator">/</span>
trusted<span class="token operator">-</span>host <span class="token operator">=</span> mirrors<span class="token punctuation">.</span>aliyun<span class="token punctuation">.</span>com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.44,words:132},y:"a",title:"python安装源",i:"type"},["/linux/python安装源.html","/linux/python%E5%AE%89%E8%A3%85%E6%BA%90","/linux/python安装源.md","/linux/python%E5%AE%89%E8%A3%85%E6%BA%90.md"]],["v-73be5696","/linux/tmpfiles.d%E4%B8%AD%E6%96%87%E6%89%8B%E5%86%8C.html",{a:"xlc520",d:"2022-10-24T00:00:00.000Z",l:"2022年10月24日",c:["Linux"],g:["Linux","tmp"],e:'<h1> tmpfiles.d 中文手册</h1>\n<h2> 名称</h2>\n<p>tmpfiles.d — 配置如何创建、删除、清理易变文件与临时文件</p>\n<h2> 大纲</h2>\n<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/etc/tmpfiles.d/*.conf`\n`/run/tmpfiles.d/*.conf`\n`/usr/lib/tmpfiles.d/*.conf\n~/.config/user-tmpfiles.d/*.conf`\n`$XDG_RUNTIME_DIR/user-tmpfiles.d/*.conf`\n`~/.local/share/user-tmpfiles.d/*.conf`\n`…`\n`/usr/share/user-tmpfiles.d/*.conf\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',r:{minutes:22.26,words:6679},y:"a",title:"tmpfiles.d 中文手册",i:"linux"},["/linux/tmpfiles.d中文手册.html","/linux/tmpfiles.d%E4%B8%AD%E6%96%87%E6%89%8B%E5%86%8C","/linux/tmpfiles.d中文手册.md","/linux/tmpfiles.d%E4%B8%AD%E6%96%87%E6%89%8B%E5%86%8C.md"]],["v-b1b88c62","/linux/%E4%B8%8D%E6%94%AF%E6%8C%81%E8%99%9A%E6%8B%9F%E5%8C%96%E7%9A%84AMD-V.html",{a:"xlc520",d:"2022-09-22T00:00:00.000Z",l:"2022年9月22日",c:["Linux"],g:["Linux","BIOS"],e:`<h1> 主机支持AMD-V但处于禁用?不支持虚拟化的AMD-V？无法打开BIOS？</h1>
<p><strong>1、一运行虚拟机就蓝屏+重启</strong></p>
<p><strong>问题描述：</strong></p>
<p>（缺打开虚拟机的图）</p>
<p>如上图，只要点击“打开虚拟机”按键，电脑会立马蓝屏，然后立即重启。</p>
<p><strong>解决方法：</strong></p>
<p><img src="https://static.xlc520.ml/blogImage/31155b658f7ffedad509c8153584cb8caf1ed296.png@600w_351h_progressive.webp" alt="img" loading="lazy">“Win”+"R”</p>`,r:{minutes:2.93,words:878},y:"a",title:"主机支持AMD-V但处于禁用?不支持虚拟化的AMD-V？无法打开BIOS",i:"linux"},["/linux/不支持虚拟化的AMD-V.html","/linux/%E4%B8%8D%E6%94%AF%E6%8C%81%E8%99%9A%E6%8B%9F%E5%8C%96%E7%9A%84AMD-V","/linux/不支持虚拟化的AMD-V.md","/linux/%E4%B8%8D%E6%94%AF%E6%8C%81%E8%99%9A%E6%8B%9F%E5%8C%96%E7%9A%84AMD-V.md"]],["v-4613513a","/linux/%E5%AE%9E%E7%94%A8%20shell%20%E8%84%9A%E6%9C%AC.html",{a:"xlc520",d:"2022-02-15T00:00:00.000Z",l:"2022年2月15日",c:["Linux"],g:["Linux"],e:`<h1> 实用 shell 脚本</h1>
<h2> 1、服务器系统配置初始化</h2>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#/bin/bash</span>
<span class="token comment"># 安装系统性能分析工具及其他</span>
yum <span class="token function">install</span> gcc <span class="token function">make</span> autoconf <span class="token function">vim</span> sysstat net-tools iostat iftop iotp <span class="token function">wget</span> lrzsz <span class="token function">lsof</span> <span class="token function">unzip</span> openssh-clients net-tool <span class="token function">vim</span> ntpdate <span class="token parameter variable">-y</span>
<span class="token comment"># 设置时区并同步时间</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
<span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">crontab</span> <span class="token parameter variable">-l</span> <span class="token operator">|</span><span class="token function">grep</span> ntpdate <span class="token operator">&amp;&gt;</span>/dev/null <span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token punctuation">(</span>echo <span class="token string">"* 1 * * * ntpdate time.windows.com &gt;/dev/null 2&gt;&amp;1"</span><span class="token punctuation">;</span><span class="token function">crontab</span> -l<span class="token punctuation">)</span> <span class="token operator">|</span><span class="token function">crontab</span> 
<span class="token keyword">fi</span>
 
<span class="token comment"># 禁用selinux</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">'/SELINUX/{s/permissive/disabled/}'</span> /etc/selinux/config
 
<span class="token comment"># 关闭防火墙</span>
<span class="token keyword">if</span> <span class="token function">egrep</span> <span class="token string">"7.[0-9]"</span> /etc/redhat-release <span class="token operator">&amp;&gt;</span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
    systemctl stop firewalld
    systemctl disable firewalld
<span class="token keyword">elif</span> <span class="token function">egrep</span> <span class="token string">"6.[0-9]"</span> /etc/redhat-release <span class="token operator">&amp;&gt;</span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token function">service</span> iptables stop
    <span class="token function">chkconfig</span> iptables off
<span class="token keyword">fi</span>
 
<span class="token comment"># 历史命令显示操作时间</span>
<span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">grep</span> HISTTIMEFORMAT /etc/bashrc<span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">'export HISTTIMEFORMAT="%Y-%m-%d %H:%M:%S  \`whoami\` "'</span> <span class="token operator">&gt;&gt;</span> /etc/bashrc
<span class="token keyword">fi</span>
 
<span class="token comment"># SSH超时时间</span>
<span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">grep</span> <span class="token string">"TMOUT=600"</span> /etc/profile <span class="token operator">&amp;&gt;</span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"export TMOUT=600"</span> <span class="token operator">&gt;&gt;</span> /etc/profile
<span class="token keyword">fi</span>
 
<span class="token comment"># 禁止root远程登录 切记给系统添加普通用户，给su到root的权限</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">'s/#PermitRootLogin yes/PermitRootLogin no/'</span> /etc/ssh/sshd_config
 
<span class="token comment"># 禁止定时任务向发送邮件</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">'s/^MAILTO=root/MAILTO=""/'</span> /etc/crontab 
 
<span class="token comment"># 设置最大打开文件数</span>
<span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">grep</span> <span class="token string">"* soft nofile 65535"</span> /etc/security/limits.conf <span class="token operator">&amp;&gt;</span>/dev/null<span class="token punctuation">;</span> <span class="token keyword">then</span>
<span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/security/limits.conf <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
    * soft nofile 65535
    * hard nofile 65535
EOF</span>
<span class="token keyword">fi</span>
 
<span class="token comment"># 系统内核优化</span>
<span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/sysctl.conf <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_max_tw_buckets = 20480
net.ipv4.tcp_max_syn_backlog = 20480
net.core.netdev_max_backlog = 262144
net.ipv4.tcp_fin_timeout = 20  
EOF</span>
 
<span class="token comment"># 减少SWAP使用</span>
<span class="token builtin class-name">echo</span> <span class="token string">"0"</span> <span class="token operator">&gt;</span> /proc/sys/vm/swappiness
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:15.46,words:4637},y:"a",title:"实用 shell 脚本",i:"type"},["/linux/实用 shell 脚本.html","/linux/%E5%AE%9E%E7%94%A8%20shell%20%E8%84%9A%E6%9C%AC","/linux/实用 shell 脚本.md","/linux/%E5%AE%9E%E7%94%A8%20shell%20%E8%84%9A%E6%9C%AC.md"]],["v-093969da","/linux/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8EDockerDesktop_WSL2.html",{a:"xlc520",d:"2022-09-22T00:00:00.000Z",l:"2022年9月22日",c:["Linux"],g:["Linux","Docker","WSL2","Kubernetes","k8s"],e:`<h1> 搭建基于Docker Desktop &amp; WSL2</h1>
<p><a href="https://www.cnblogs.com/taylorshi/p/13698355.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/taylorshi/p/13698355.html</a></p>
<h2> 背景介绍</h2>
<p>Kubernetes（简称k8s)已成为目前业界容器编排的事实标准，其搭配Docker可建立非常高效便捷的高可扩展、高可用应用服务架构。</p>
<blockquote>
<p>Kubernetes的名字来自希腊语，意思是“舵手” 或 “领航员”。K8s是将8个字母“ubernete”替换为“8”的缩写。</p>
</blockquote>`,r:{minutes:16.92,words:5077},y:"a",title:"搭建基于Docker Desktop & WSL2",i:"linux"},["/linux/搭建基于DockerDesktop_WSL2.html","/linux/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8EDockerDesktop_WSL2","/linux/搭建基于DockerDesktop&WSL2.html","/linux/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8EDockerDesktop&WSL2.html","/linux/搭建基于DockerDesktop&WSL2.md","/linux/%E6%90%AD%E5%BB%BA%E5%9F%BA%E4%BA%8EDockerDesktop&WSL2.md"]],["v-8ebbf29c","/linux/%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%85%A5%E4%BE%B5%E6%8E%92%E6%9F%A5.html",{a:"xlc520",d:"2022-06-07T00:00:00.000Z",l:"2022年6月7日",c:["Linux"],g:["Linux"],e:`<h1> 服务器入侵排查</h1>
<h3> 1.<strong>入侵者可能会删除机器的日志信息</strong></h3>
<p>可以查看日志信息是否还存在或者是否被清空，相关命令示例：</p>
<figure><img src="https://static.xlc520.ml/blogImage/640-165357407084712.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure>
<h3> 2.<strong>入侵者可能创建一个新的存放用户名及密码文件</strong></h3>`,r:{minutes:4.44,words:1331},y:"a",title:"服务器入侵排查",i:"linux"},["/linux/服务器入侵排查.html","/linux/%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%85%A5%E4%BE%B5%E6%8E%92%E6%9F%A5","/linux/服务器入侵排查.md","/linux/%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%85%A5%E4%BE%B5%E6%8E%92%E6%9F%A5.md"]],["v-9757ae78","/linux/%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%90%E8%A1%8C%E6%95%B0%E6%8D%AE%E6%9F%A5%E7%9C%8B%E5%B7%A5%E5%85%B7.html",{a:"xlc520",d:"2022-07-10T00:00:00.000Z",l:"2022年7月10日",c:["Linux"],g:["Linux"],e:`<h1> 服务器运行数据查看工具</h1>
<p>我们开发的软件服务需要在服务器上运行，所以服务器性能代表了软件的性能上限，因此服务器性能调优是个十分重要的环节，然而大部分同学对服务器性能调优关注的较少，今天从3个部分对服务器性能调优进行介绍，分别是：服务器配置选择，服务器负载分析，服务器内核参数调优。</p>
<h2> <strong>服务器配置选择</strong></h2>
<p>服务器一般是由CPU、内存、磁盘和网卡组成，因此选择服务器配置就是选择CPU核数、内存大小、磁盘大小及类型、网络带宽。但是，服务器配置的选择是很难标准化的，也就是说很难推断出“一台需要达到1000TPS的后端服务器”的配置应该是什么样的。因为软件的最终运行性能与软件的实现方式是紧密相关的，即使是同一个后端应用程序中的两个接口，由于具体功能的差别，性能也会有所差别。</p>`,r:{minutes:10.17,words:3052},y:"a",title:"服务器运行数据查看工具",i:"linux"},["/linux/服务器运行数据查看工具.html","/linux/%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%90%E8%A1%8C%E6%95%B0%E6%8D%AE%E6%9F%A5%E7%9C%8B%E5%B7%A5%E5%85%B7","/linux/服务器运行数据查看工具.md","/linux/%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%90%E8%A1%8C%E6%95%B0%E6%8D%AE%E6%9F%A5%E7%9C%8B%E5%B7%A5%E5%85%B7.md"]],["v-6d744f6f","/linux/%E8%87%AA%E5%8A%A8%E5%B0%81%E7%A6%81IP%E8%84%9A%E6%9C%AC.html",{a:"xlc520",d:"2023-01-01T00:00:00.000Z",l:"2023年1月1日",c:["Linux"],g:["Linux"],e:`<h1> 自动封禁IP脚本</h1>
<p>1.在ngnix的conf目录下创建一个<code>blockip.conf</code>文件</p>
<p>2.里面放需要封禁的IP，格式如下</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>deny 1.2.3.4;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:1.38,words:415},y:"a",title:"自动封禁IP脚本",i:"linux"},["/linux/自动封禁IP脚本.html","/linux/%E8%87%AA%E5%8A%A8%E5%B0%81%E7%A6%81IP%E8%84%9A%E6%9C%AC","/linux/自动封禁IP脚本.md","/linux/%E8%87%AA%E5%8A%A8%E5%B0%81%E7%A6%81IP%E8%84%9A%E6%9C%AC.md"]],["v-49d04651","/linux/%E8%AF%A6%E8%A7%A3K8S%E9%AB%98%E5%8F%AF%E7%94%A8%E9%83%A8%E7%BD%B2.html",{a:"xlc520",d:"2022-11-05T00:00:00.000Z",l:"2022年11月5日",c:["Linux"],g:["Linux","k8s"],e:`<h1> 详解 K8S 高可用部署</h1>
<p>一、前言</p>
<p>二、基础环境部署</p>
<ul>
<li>1）前期准备（所有节点）</li>
<li>2）安装容器 docker（所有节点）</li>
<li>3）配置 k8s yum 源（所有节点）</li>
<li>4）将 sandbox_image 镜像源设置为阿里云 google_containers 镜像源（所有节点）</li>
<li>5）配置 containerd cgroup 驱动程序 systemd（所有节点）</li>
<li>6）开始安装 kubeadm，kubelet 和 kubectl（master 节点）</li>
<li>7）使用 kubeadm 初始化集群（master 节点）</li>
<li>8）安装 Pod 网络插件（CNI：Container Network Interface）(master)</li>
<li>9）node 节点加入 k8s 集群</li>
<li>10）配置 IPVS</li>
<li>11）集群高可用配置</li>
<li>12）部署 Nginx+Keepalived 高可用负载均衡器</li>
</ul>`,r:{minutes:32.21,words:9664},y:"a",title:"详解 K8S 高可用部署",i:"linux"},["/linux/详解K8S高可用部署.html","/linux/%E8%AF%A6%E8%A7%A3K8S%E9%AB%98%E5%8F%AF%E7%94%A8%E9%83%A8%E7%BD%B2","/linux/详解K8S高可用部署.md","/linux/%E8%AF%A6%E8%A7%A3K8S%E9%AB%98%E5%8F%AF%E7%94%A8%E9%83%A8%E7%BD%B2.md"]],["v-fbb8e312","/other/API.html",{a:"xlc520",d:"2022-01-30T00:00:00.000Z",l:"2022年1月30日",c:["other"],g:["other"],e:`<h1> API</h1>
<h2> hutool</h2>
<p>一个小而全的 Java 工具类库，通过静态方法封装，并提供详细完整的中文文档和注释，使Java拥有函数式语言般的优雅。</p>
<p><a href="https://hutool.cn/" target="_blank" rel="noopener noreferrer">https://hutool.cn/</a></p>
<h2> apipost</h2>
<p><a href="https://www.apipost.cn/" target="_blank" rel="noopener noreferrer">https://www.apipost.cn/</a></p>`,r:{minutes:1.44,words:432},y:"a",title:"API",i:"type"},["/other/API","/other/API.md"]],["v-502807be","/other/Backblaze(B2)%E5%A5%97%E7%94%A8CloudFlare%E9%9D%99%E6%80%81%E6%96%87%E4%BB%B6%E5%AD%98%E5%82%A8.html",{a:"xlc520",d:"2022-10-10T00:00:00.000Z",l:"2022年10月10日",c:["other"],g:["other","CloudFlare"],e:`<h1> Backblaze(B2)套用CloudFlare静态文件存储</h1>
<h2> 官方网址</h2>
<p><a href="https://www.backblaze.com" target="_blank" rel="noopener noreferrer">https://www.backblaze.com</a></p>
<h2> 免费额度</h2>
<p>存储容量：10GB</p>
<p>网络流量：1GB/天</p>
<p>上传流量：无限</p>
<p>下载请求数：<strong>2500</strong>次/天</p>
<p>上传请求数：<strong>2500</strong>次/天</p>`,r:{minutes:3.58,words:1073},y:"a",title:"Backblaze(B2)套用CloudFlare静态文件存储",i:"others"},["/other/Backblaze(B2)套用CloudFlare静态文件存储.html","/other/Backblaze(B2)%E5%A5%97%E7%94%A8CloudFlare%E9%9D%99%E6%80%81%E6%96%87%E4%BB%B6%E5%AD%98%E5%82%A8","/other/Backblaze(B2)套用CloudFlare静态文件存储.md","/other/Backblaze(B2)%E5%A5%97%E7%94%A8CloudFlare%E9%9D%99%E6%80%81%E6%96%87%E4%BB%B6%E5%AD%98%E5%82%A8.md"]],["v-0a11e84c","/other/Bing%E5%BF%85%E5%BA%94API.html",{a:"xlc520",d:"2022-02-18T00:00:00.000Z",l:"2022年2月18日",c:["other"],g:["other"],e:`<h1> Bing必应API</h1>
<p><a href="http://xlc.pp.ua/bing-api/index.php?rand=true" target="_blank" rel="noopener noreferrer">http://xlc.pp.ua/bing-api/index.php?rand=true</a></p>
<h2> 1</h2>
<p><a href="http://cn.bing.com/HPImageArchive.aspx?idx=0&amp;n=1" target="_blank" rel="noopener noreferrer">http://cn.bing.com/HPImageArchive.aspx?idx=0&amp;n=1</a></p>`,r:{minutes:3.75,words:1124},y:"a",title:"Bing必应API",i:"type"},["/other/Bing必应API.html","/other/Bing%E5%BF%85%E5%BA%94API","/other/Bing必应API.md","/other/Bing%E5%BF%85%E5%BA%94API.md"]],["v-810a1d4a","/other/Euserv.html",{a:"xlc520",d:"2022-01-20T00:00:00.000Z",l:"2022年1月20日",c:["other"],g:["other"],e:`<h1> Euserv</h1>
<p>EUserv是一家德国主机商，提供VPS主机、服务器等，目前该商家提供免费ipv6主机服务器，配置信息是CPU：1 Core、内存：1 GB、硬盘：10 GB HDD、带宽：1 Gbit，提供一个IPv6地址，想要IPv4地址那就付费了。虽然免费VPS主机看起来配置很好，但是用起来非常地卡。</p>
<p>申请EUserv免费VPS主机的过程并不复杂，也不需要什么Paypal、信用卡之类的验证，但是EUserv免费VPS主机申请要人工审核，一般来说48小时内会收到回复。当然，也有申请EUserv免费VPS主机失败的，或者是EUserv免费VPS主机被删号的。</p>`,r:{minutes:11.51,words:3453},y:"a",title:"Euserv",i:"type"},["/other/Euserv","/other/Euserv.md"]],["v-90df2e26","/other/Github%E6%8A%80%E5%B7%A7.html",{a:"xlc520",d:"2022-06-24T00:00:00.000Z",l:"2022年6月24日",c:["other"],g:["other"],e:`<h1> Github技巧</h1>
<h2> 1.搜索</h2>
<p>github高级搜索功能</p>
<p>直接打开这里<a href="https://github.com/search/advanced" target="_blank" rel="noopener noreferrer">GitHub · Where software is built</a></p>
<p>或搜索后在搜索页面 language 下方打开（没找到更好的方法）</p>
<figure><img src="https://static.xlc520.ml/blogImage/image-20220504225139153-165500134904917.png" alt="image-20220504225139153" tabindex="0" loading="lazy"><figcaption>image-20220504225139153</figcaption></figure>`,r:{minutes:1.21,words:364},y:"a",title:"Github技巧",i:"others"},["/other/Github技巧.html","/other/Github%E6%8A%80%E5%B7%A7","/other/Github技巧.md","/other/Github%E6%8A%80%E5%B7%A7.md"]],["v-4eb59d06","/other/Microsoft-365-E5-RenewPlus.html",{a:"xlc520",d:"2022-06-12T00:00:00.000Z",l:"2022年6月12日",c:["other"],g:["other","E5","office"],e:`<h1> E5 调用API续订程序：Microsoft 365 E5 Renew Plus</h1>
<h2> Microsoft 365 E5 Renew Plus的由来</h2>
<p>Microsoft 365 E5 Renew Plus为Microsoft 365 E5 Renew的升级版，其功能性，易用性，美观程度上都要强于旧版。</p>
<h2> 主要功能</h2>
<ul>
<li><strong>支持开机自启动后台调用</strong>：使用简单方便，无需购买服务器部署，本地应用程序即开即用</li>
<li><strong>两种可选的调用权限</strong>：用户未登录作为守护程序调用(需要客户端密码)、程序以登录用户身份直接调用(需要账户密码)</li>
<li><strong>自动配置API权限</strong>：登录调用的API权限支持由程序自动配置</li>
<li><strong>API种类齐全</strong>：43个可选的Microsoft Graph REST API Beta中的API(未来可能会继续添加)</li>
<li><strong>完全随机的API选用模式</strong>：从已选定的API序列中随机抽取一个或几个进行调用（个数和API随机）</li>
<li><strong>完全随机的API调用顺序</strong>：每轮API的调用先后顺序随机</li>
<li><strong>完全随机的API内容(仅部分API支持)</strong>：POST写类型的API的上传内容随机</li>
<li><strong>完全随机的API调用时间间隔</strong>：随机区段500s-86400s自定义</li>
<li><strong>每日工作时间自定义</strong>：在日常工作时间进行调用，适用于从不关机重启的服务器设备</li>
<li><strong>每周工作日自定义</strong>：在每周的工作日进行调用，适用于从不关机重启的服务器设备</li>
<li><strong>运行智能暂停</strong>：防止因持续在错误配置下运行而导致的账户封禁</li>
<li><strong>运行配置自动保存</strong>：可保存运行配置，无需反复设置</li>
<li><strong>无限制账号个数</strong>：理论上允许无限制个数账号后台自动调用</li>
<li><strong>支持自定义客户端密钥</strong>：允许非登录调用使用自定义密钥</li>
<li><strong>自定义美化界面</strong>：支持自定义背景图片（半透明度以及毛玻璃效果）、亚克力背景</li>
</ul>`,r:{minutes:11.65,words:3494},y:"a",title:"E5 调用API续订程序：Microsoft 365 E5 Renew Plus",i:"others"},["/other/Microsoft-365-E5-RenewPlus","/other/Microsoft-365-E5-RenewPlus.md"]],["v-af64a3ba","/other/Microsoft-365-E5-RenewX.html",{a:"xlc520",d:"2022-06-12T00:00:00.000Z",l:"2022年6月12日",c:["other"],g:["other","E5","office"],e:`<h1> E5 调用API续订服务：Microsoft 365 E5 Renew X</h1>
<p>Microsoft 365 E5 Renew X是一款网页版的E5续订服务，其依赖网页浏览器呈现支持用户多端操作，完全将E5账户API调用托管在了服务器端因此用户无需电脑也可使用。</p>
<h2> Microsoft 365 E5 Renew X 由来</h2>
<p>Microsoft 365 E5 Renew X为Microsoft 365 E5 Web的升级版，相对于旧版其增强了管理功能且更容易部署，API调用内核继承于续订桌面版软件Microsoft 365 E5 Renew Plus。</p>`,r:{minutes:13.51,words:4052},y:"a",title:"E5 调用API续订服务：Microsoft 365 E5 Renew X",i:"others"},["/other/Microsoft-365-E5-RenewX","/other/Microsoft-365-E5-RenewX.md"]],["v-88d120d6","/other/OfficeE5.html",{a:"xlc520",d:"2022-01-17T00:00:00.000Z",l:"2022年1月17日",c:["other"],g:["other"],e:`<h1> 申请加入微软Office 365 E5 开发人员计划</h1>
<h1> 前言</h1>
<p>最近闲来无事，申请了个Office E5订阅，对我而言有用的是5T OneDrive（可扩容25T）</p>
<p>订阅有效期90天，证明是开发者即可续订。一共可以开25个子号。</p>
<p>至于证明是开发者，只要触发了OneDrive的API就可以证明是开发者了，当然不仅限于OneDrive，还算是比较简单的。</p>
<h1> 申请过程</h1>
<p>Office开发人员中心链接：<a href="https://developer.microsoft.com/zh-cn/office/dev-program" target="_blank" rel="noopener noreferrer">https://developer.microsoft.com/zh-cn/office/dev-program</a></p>`,r:{minutes:16.4,words:4919},y:"a",title:"微软Office 365 E5 开发人员计划",i:"type"},["/other/OfficeE5","/other/OfficeE5.md"]],["v-dde823e8","/other/QQ%E5%8A%A8%E6%80%81%E7%BE%A4%E8%81%8A%E6%98%B5%E7%A7%B0%E4%BB%A3%E7%A0%81.html",{a:"xlc520",d:"2022-06-02T00:00:00.000Z",l:"2022年6月2日",c:["other"],g:["other","QQ"],e:`<h1> QQ动态群聊昵称代码</h1>
<h2> 代码</h2>
<ul>
<li>会变色钻石 <code>&lt;$ǿĀD&gt;钻石&lt;$ǿĀD&gt;</code> 效果图：</li>
</ul>
<figure><img src="https://static.xlc520.ml/blogImage/1620-16536500405884.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>钻石</p>
<ul>
<li>手掌比心 <code>&lt;$ÿĀ"&gt;比心&lt;$ÿĀ"&gt;</code> 效果图：</li>
</ul>`,r:{minutes:.51,words:152},y:"a",title:"QQ动态群聊昵称代码",i:"others"},["/other/QQ动态群聊昵称代码.html","/other/QQ%E5%8A%A8%E6%80%81%E7%BE%A4%E8%81%8A%E6%98%B5%E7%A7%B0%E4%BB%A3%E7%A0%81","/other/QQ动态群聊昵称代码.md","/other/QQ%E5%8A%A8%E6%80%81%E7%BE%A4%E8%81%8A%E6%98%B5%E7%A7%B0%E4%BB%A3%E7%A0%81.md"]],["v-e4cb1150","/other/",{a:"xlc520",d:"2022-01-14T00:00:00.000Z",l:"2022年1月14日",c:["other"],g:["other"],e:`<p align="center"> 
  <img src="https://metrics.lecoq.io/xlc520?template=classic&amp;isocalendar=1&amp;languages=1&amp;people=1&amp;activity=1&amp;achievements=1&amp;lines=1&amp;repositories=1&amp;notable=1&amp;introduction=1&amp;pagespeed=1&amp;repositories=100&amp;repositories.batch=100&amp;repositories.forks=false&amp;repositories.affiliations=owner&amp;isocalendar.duration=full-year&amp;languages.limit=8&amp;languages.threshold=0%&amp;languages.colors=github&amp;languages.sections=most-used&amp;languages.indepth=false&amp;languages.analysis.timeout=15&amp;languages.categories=markup%2C programming&amp;languages.recent.categories=markup%2C programming&amp;languages.recent.load=300&amp;languages.recent.days=14&amp;people.limit=24&amp;people.identicons=false&amp;people.identicons.hide=false&amp;people.size=28&amp;people.types=followers%2C following&amp;people.shuffle=false&amp;activity.limit=5&amp;activity.load=300&amp;activity.days=14&amp;activity.visibility=all&amp;activity.timestamps=false&amp;activity.filter=all&amp;achievements.threshold=C&amp;achievements.secrets=true&amp;achievements.display=detailed&amp;achievements.limit=0&amp;notable.from=organization&amp;notable.repositories=false&amp;notable.indepth=false&amp;notable.types=commit&amp;repositories.featured= xlc520%2Fxlc520.github.io&amp;introduction.title=true&amp;pagespeed.url=xlc520.github.io&amp;pagespeed.detailed=false&amp;pagespeed.screenshot=false&amp;config.timezone=Asia%2FShanghai"> 
</p>`,r:{minutes:.55,words:164},y:"a",title:"其他",i:"others"},["/other/index.html","/other/README.md"]],["v-536b5b25","/other/Steam%E5%85%8D%E8%B4%B9%E8%A7%A3%E9%94%81.html",{a:"xlc520",d:"2022-01-15T00:00:00.000Z",l:"2022年1月15日",c:["other"],g:["other"],e:`<h1> Steam</h1>
<p>电脑桌面按win+R	
steam://install/1198260 《Beneath steel clouds》（锁区）
steam://install/1084630 《Sacred Sword Princesses》（锁区）
steam://install/1024800 《Femdom Waifu》（锁区）
steam://install/950860 《Spiral Clicker》（锁区）
steam://install/823550 《Booty Calls》（锁区）
steam://install/958720 《Second Chance》（锁区）
steam://install/510660 《Big Bang Empire》
steam://install/1191420 《Fake Lay》（锁区）
steam://install/966460 《Undress Tournament》（锁区）
steam://install/962380 《HOT FITI》（锁区）
steam://install/966870 《SinVR》（锁区）
steam://install/1121310 《ViRo Playspace》（锁区）
steam://install/865570 《pact with a witch》（锁区）
steam://install/1245610 《AChat》（锁区）
steam://install/720380 《Ancestors Legacy Free Peasant Edition》
steam://install/8500 《EVE》（Steam锁区）
steam://install/1172470 《Apex》（Steam锁区）
steam://install/1205560 《对魔忍雪风体验版》（锁区）
steam://install/1330250 《对魔忍COLLECTION：决战竞技场》（锁区）</p>`,r:{minutes:.59,words:177},y:"a",title:"Steam",i:"type"},["/other/Steam免费解锁.html","/other/Steam%E5%85%8D%E8%B4%B9%E8%A7%A3%E9%94%81","/other/Steam免费解锁.md","/other/Steam%E5%85%8D%E8%B4%B9%E8%A7%A3%E9%94%81.md"]],["v-bb478dba","/other/clash-v2ray.html",{a:"xlc520",d:"2022-01-19T00:00:00.000Z",l:"2022年1月19日",c:["other"],g:["other"],e:`<h1> Clash - V2ray订阅</h1>
<h2> 资源池</h2>
<p>[F 搜 free proxies](<a href="https://fsou.cc/search?q=free" target="_blank" rel="noopener noreferrer">https://fsou.cc/search?q=free</a> proxies)</p>
<p><a href="https://fq.lonxin.net/" target="_blank" rel="noopener noreferrer">https://fq.lonxin.net/</a>
<a href="https://hellopool.herokuapp.com/" target="_blank" rel="noopener noreferrer">https://hellopool.herokuapp.com/</a>
<a href="https://proxy.whuboy.com/" target="_blank" rel="noopener noreferrer">https://proxy.whuboy.com/</a>
<a href="https://baby-besitgift.com/" target="_blank" rel="noopener noreferrer">https://baby-besitgift.com/</a>
<a href="http://111.229.220.110:5000/" target="_blank" rel="noopener noreferrer">http://111.229.220.110:5000/</a>
<a href="http://66.112.210.60.16clouds.com/" target="_blank" rel="noopener noreferrer">http://66.112.210.60.16clouds.com/</a>
<a href="http://149.248.8.112/" target="_blank" rel="noopener noreferrer">http://149.248.8.112/</a>
<a href="https://free.kingfu.cf/" target="_blank" rel="noopener noreferrer">https://free.kingfu.cf/</a>
<a href="https://proxy.yugogo.xyz/" target="_blank" rel="noopener noreferrer">https://proxy.yugogo.xyz/</a></p>`,r:{minutes:1.02,words:305},y:"a",title:"Clash - V2ray订阅",i:"type"},["/other/clash-v2ray","/other/clash-v2ray.md"]],["v-7b0cd90e","/other/generate_204%E6%9C%8D%E5%8A%A1%E6%B1%87%E6%80%BB.html",{a:"xlc520",d:"2022-04-02T00:00:00.000Z",l:"2022年4月2日",c:["other"],g:["other"],e:`<h1> 检测网络联通性&amp;generate_204服务汇总</h1>
<p><a href="http://www.gstatic.com/generate_204" target="_blank" rel="noopener noreferrer">http://www.gstatic.com/generate_204</a></p>
<p><a href="http://connect.rom.miui.com/generate_204" target="_blank" rel="noopener noreferrer">http://connect.rom.miui.com/generate_204</a></p>`,r:{minutes:1.25,words:376},y:"a",title:"检测网络联通性&generate_204服务汇总",i:"others"},["/other/generate_204服务汇总.html","/other/generate_204%E6%9C%8D%E5%8A%A1%E6%B1%87%E6%80%BB","/other/generate_204服务汇总.md","/other/generate_204%E6%9C%8D%E5%8A%A1%E6%B1%87%E6%80%BB.md"]],["v-013c1e81","/other/%E4%B8%B4%E6%97%B6%E9%82%AE%E7%AE%B1%E5%92%8C%E6%8E%A5%E7%A0%81.html",{a:"xlc520",d:"2022-02-10T00:00:00.000Z",l:"2022年2月10日",c:["other"],g:["other"],e:`<h1> 临时邮箱和接码</h1>
<p>1、<a href="https://10minutemail.com/" target="_blank" rel="noopener noreferrer">10 Minute Mail – Temporary E-Mail</a></p>
<p>支持中文，有效期 10 分钟，可延时。</p>
<p>2、<a href="http://bccto.me/" target="_blank" rel="noopener noreferrer">10分钟邮箱 – BccTo.ME</a></p>
<p>中文，可自定义地址，有效期 10 分钟。支持绑定自己的域名。</p>`,r:{minutes:2.37,words:712},y:"a",title:"临时邮箱和接码",i:"type"},["/other/临时邮箱和接码.html","/other/%E4%B8%B4%E6%97%B6%E9%82%AE%E7%AE%B1%E5%92%8C%E6%8E%A5%E7%A0%81","/other/临时邮箱和接码.md","/other/%E4%B8%B4%E6%97%B6%E9%82%AE%E7%AE%B1%E5%92%8C%E6%8E%A5%E7%A0%81.md"]],["v-d2113bde","/other/%E5%85%8D%E8%B4%B9VPS.html",{a:"xlc520",d:"2022-01-26T00:00:00.000Z",l:"2022年1月26日",c:["other"],g:["other"],e:`<h1> 免费VPS</h1>
<h2> Oracle Cloud 甲骨文云：</h2>
<p>永久免费两个 1h1g 的小鸡</p>
<p>十分适合建站用</p>
<p>地区极力推荐韩国春川、日本东京、大版、美国圣何塞、凤凰城，有的 ip 段解锁奈飞</p>
<p>硬盘空间默认 45G，可以用作离线下载也不错</p>
<p>网络 48~60M 每月 10T</p>
<p><a href="https://www.oracle.com/cloud/" target="_blank" rel="noopener noreferrer">https://www.oracle.com/cloud/</a></p>`,r:{minutes:4.22,words:1266},y:"a",title:"免费VPS",i:"type"},["/other/免费VPS.html","/other/%E5%85%8D%E8%B4%B9VPS","/other/免费VPS.md","/other/%E5%85%8D%E8%B4%B9VPS.md"]],["v-7378bc31","/other/%E5%85%8D%E8%B4%B9%E5%8A%A0%E9%80%9F%E5%99%A8.html",{a:"xlc520",d:"2022-02-03T00:00:00.000Z",l:"2022年2月3日",c:["other"],g:["other"],e:`<h1> 免费加速器</h1>
<p>蓝泡加速器：<a href="https://www.lpjsq.cn/" target="_blank" rel="noopener noreferrer">https://www.lpjsq.cn/</a>
快滚加速器：<a href="http://www.kuaigun.com/" target="_blank" rel="noopener noreferrer">http://www.kuaigun.com/</a>
nn加速器：<a href="https://www.nn.com/" target="_blank" rel="noopener noreferrer">https://www.nn.com/</a>
ak加速器：<a href="https://www.akspeedy.com/" target="_blank" rel="noopener noreferrer">https://www.akspeedy.com/</a>
平台和游戏加速器：<a href="https://www.dogfight360.com/blog/475/" target="_blank" rel="noopener noreferrer">https://www.dogfight360.com/blog/475/</a></p>`,r:{minutes:.24,words:72},y:"a",title:"免费加速器",i:"type"},["/other/免费加速器.html","/other/%E5%85%8D%E8%B4%B9%E5%8A%A0%E9%80%9F%E5%99%A8","/other/免费加速器.md","/other/%E5%85%8D%E8%B4%B9%E5%8A%A0%E9%80%9F%E5%99%A8.md"]],["v-23a88807","/other/%E5%85%8D%E8%B4%B9%E5%9B%BE%E5%BA%93.html",{a:"xlc520",d:"2022-02-05T00:00:00.000Z",l:"2022年2月5日",c:["other"],g:["other"],e:`<h1> 图库网站</h1>
<p>下面都是图库网站，提供免费的商业级高清晰度图片下载。</p>
<h2> <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a></h2>
<p>网址：<a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">https://unsplash.com/</a></p>
<h2> <a href="https://www.pexels.com/" target="_blank" rel="noopener noreferrer">Pexels</a></h2>`,r:{minutes:.55,words:166},y:"a",title:"图库网站",i:"type"},["/other/免费图库.html","/other/%E5%85%8D%E8%B4%B9%E5%9B%BE%E5%BA%93","/other/免费图库.md","/other/%E5%85%8D%E8%B4%B9%E5%9B%BE%E5%BA%93.md"]],["v-30728471","/other/%E5%85%8D%E8%B4%B9%E5%9B%BE%E6%A0%87.html",{a:"xlc520",d:"2022-02-04T00:00:00.000Z",l:"2022年2月4日",c:["other"],g:["other"],e:`<h1> 免费图标</h1>
<h2> fontAwesome</h2>
<p><a href="http://www.fontawesome.com.cn/" target="_blank" rel="noopener noreferrer">http://www.fontawesome.com.cn/</a></p>
<p>Font Awesome 字体为您提供可缩放矢量图标,它可以被定制大小、颜色、阴影以及任何可以用CSS的样式。</p>
<p>该字体是完全开源并且免费的。</p>
<ul>
<li><a href="https://blog.fontawesome.com/covid-19-awareness-icons/" target="_blank" rel="noopener noreferrer">图标库 FontAwesome</a> 发布最新版本，添加了病毒、医疗方面的许多新图标，用于制作标牌、报告、站点、应用程序，可以免费使用。</li>
</ul>`,r:{minutes:1.48,words:443},y:"a",title:"免费图标",i:"type"},["/other/免费图标.html","/other/%E5%85%8D%E8%B4%B9%E5%9B%BE%E6%A0%87","/other/免费图标.md","/other/%E5%85%8D%E8%B4%B9%E5%9B%BE%E6%A0%87.md"]],["v-47672dec","/other/%E5%85%8D%E8%B4%B9%E5%B7%A5%E5%85%B7%E9%9B%86%E9%94%A6.html",{a:"xlc520",d:"2022-02-02T00:00:00.000Z",l:"2022年2月2日",c:["other"],g:["other"],e:`<h1> 免费工具集锦</h1>
<p>工作生活常用的工具汇总。</p>
<h1> 免费作图工具</h1>
<p>本页收集一些免费的工具，创建漂亮的图表。</p>
<h2> <a href="https://www.processon.com/" target="_blank" rel="noopener noreferrer">ProcessOn</a></h2>
<p>在线版：<a href="https://www.processon.com/" target="_blank" rel="noopener noreferrer">https://www.processon.com/</a></p>`,r:{minutes:15.74,words:4721},y:"a",title:"免费工具集锦",i:"type"},["/other/免费工具集锦.html","/other/%E5%85%8D%E8%B4%B9%E5%B7%A5%E5%85%B7%E9%9B%86%E9%94%A6","/other/免费工具集锦.md","/other/%E5%85%8D%E8%B4%B9%E5%B7%A5%E5%85%B7%E9%9B%86%E9%94%A6.md"]],["v-58188c0c","/other/%E5%85%8D%E8%B4%B9%E6%8F%92%E5%9B%BE.html",{a:"xlc520",d:"2022-02-01T00:00:00.000Z",l:"2022年2月1日",c:["other"],g:["other"],e:`<h1> 免费插图</h1>
<h2> <a href="https://undraw.co/illustrations" target="_blank" rel="noopener noreferrer">undraw</a></h2>
<p>网址：<a href="https://undraw.co/illustrations" target="_blank" rel="noopener noreferrer">https://undraw.co/illustrations</a></p>
<figure><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/1580440884199-5ea0b597-d23b-45a0-a302-5d5b1748c2fe.jpeg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,r:{minutes:.37,words:110},y:"a",title:"免费插图",i:"type"},["/other/免费插图.html","/other/%E5%85%8D%E8%B4%B9%E6%8F%92%E5%9B%BE","/other/免费插图.md","/other/%E5%85%8D%E8%B4%B9%E6%8F%92%E5%9B%BE.md"]],["v-39c15e36","/other/%E5%85%8D%E8%B4%B9%E8%B5%84%E6%BA%90%E9%9B%86%E9%94%A6.html",{a:"xlc520",d:"2022-01-25T00:00:00.000Z",l:"2022年1月25日",c:["other"],g:["other"],e:`<h1> 免费资源集锦</h1>
<p><strong>文章、电子书、图片、音频、视频</strong>等资源获取汇总。</p>
<h1> 免费知识</h1>
<h2> <a href="https://github.com/nusr/hacker-laws-zh" target="_blank" rel="noopener noreferrer">hacker-laws-zh</a></h2>
<p><a href="https://github.com/nusr/hacker-laws-zh" target="_blank" rel="noopener noreferrer">hacker-laws-zh</a></p>`,r:{minutes:1.9,words:569},y:"a",title:"免费资源集锦",i:"type"},["/other/免费资源集锦.html","/other/%E5%85%8D%E8%B4%B9%E8%B5%84%E6%BA%90%E9%9B%86%E9%94%A6","/other/免费资源集锦.md","/other/%E5%85%8D%E8%B4%B9%E8%B5%84%E6%BA%90%E9%9B%86%E9%94%A6.md"]],["v-ebcc9b7c","/other/%E5%85%8D%E8%B4%B9%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87api.html",{a:"xlc520",d:"2022-03-20T00:00:00.000Z",l:"2022年3月20日",c:["other"],g:["other"],e:`<h1> 免费随机图片api接口</h1>
<h2> api接口整合</h2>
<p>樱花：<a href="https://www.dmoe.cc/random.php" target="_blank" rel="noopener noreferrer">https://www.dmoe.cc/random.php</a></p>
<p>晓晴博客：<a href="https://acg.toubiec.cn/random.php" target="_blank" rel="noopener noreferrer">https://acg.toubiec.cn/random.php</a></p>`,r:{minutes:6.66,words:1997},y:"a",title:"免费随机图片api",i:"type"},["/other/免费随机图片api.html","/other/%E5%85%8D%E8%B4%B9%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87api","/other/免费随机图片api.md","/other/%E5%85%8D%E8%B4%B9%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87api.md"]],["v-22afdd50","/other/%E5%9B%BE%E7%89%87%E9%98%B2%E7%9B%97%E9%93%BE%E7%9A%84%E7%A0%B4%E8%A7%A3%E5%92%8C%E5%8F%8D%E7%A0%B4%E8%A7%A3.html",{a:"xlc520",d:"2022-06-14T00:00:00.000Z",l:"2022年6月14日",c:["other"],g:["other"],e:`<h1> 图片防盗链的破解和反破解</h1>
<h2> 原理</h2>
<blockquote>
<p>注：这里有个很有趣的就是 Referrer 和 Referer 的故事了感兴趣的自行去了解下</p>
</blockquote>
<p>我们先来了解了解防盗链的原理，<strong>在 http 协议中，如果从一个页面跳到另一个页面，header字段里面会带个 Referer。图片服务器通过检测 Referer 是否来自规定域名，来进行防盗链。</strong></p>
<p>如果盗用网站是 <strong>https</strong> 的 协议，而图片链接是 http 的话，则从 https 向 http 发起的请求会因为安全性的规定，而不带 referer，从而实现防盗链的绕过。官方输出图片的时候，判断了来源(Referer)，就是从哪个网站访问这个图片，如果是你的网站去加载这个图片，那么 Referer 就是： <code>你的网站地址</code>；你的网址肯定没在官方的白名单内，( <code>当然作为可操作性极强的浏览器来说 referer 是完全可以伪造一个官方的 URL 这样也也就也可以饶过限制🚫</code>)所以就看不到图片了。</p>`,r:{minutes:5.32,words:1596},y:"a",title:"图片防盗链的破解和反破解",i:"others"},["/other/图片防盗链的破解和反破解.html","/other/%E5%9B%BE%E7%89%87%E9%98%B2%E7%9B%97%E9%93%BE%E7%9A%84%E7%A0%B4%E8%A7%A3%E5%92%8C%E5%8F%8D%E7%A0%B4%E8%A7%A3","/other/图片防盗链的破解和反破解.md","/other/%E5%9B%BE%E7%89%87%E9%98%B2%E7%9B%97%E9%93%BE%E7%9A%84%E7%A0%B4%E8%A7%A3%E5%92%8C%E5%8F%8D%E7%A0%B4%E8%A7%A3.md"]],["v-689ccac3","/other/%E5%BD%B1%E8%A7%86.html",{a:"xlc520",d:"2022-01-28T00:00:00.000Z",l:"2022年1月28日",c:["other"],g:["other"],e:`<h1> 影视</h1>
<h2> 恒星播放器(电脑看片工具)</h2>
<p><a href="https://tsq.lanzoui.com/b0c3ne46d" target="_blank" rel="noopener noreferrer">https://tsq.lanzoui.com/b0c3ne46d</a></p>
<p>【第一部分：6个影视资源插件】</p>
<p>第三方直播插件</p>
<p><a href="https://github.com/simplecelery/stellar-stream" target="_blank" rel="noopener noreferrer">https://github.com/simplecelery/stellar-stream</a></p>`,r:{minutes:.6,words:180},y:"a",title:"影视",i:"type"},["/other/影视.html","/other/%E5%BD%B1%E8%A7%86","/other/影视.md","/other/%E5%BD%B1%E8%A7%86.md"]],["v-28113e1c","/other/%E6%96%B0%E7%89%88QQ%E4%BF%AE%E6%94%B9%E5%BD%A9%E8%89%B2%E9%A2%9C%E8%89%B2%E5%AD%97%E4%BD%93%E4%BB%A3%E7%A0%81%E6%95%99%E7%A8%8B.html",{a:"xlc520",d:"2022-06-04T00:00:00.000Z",l:"2022年6月4日",c:["other"],g:["other","QQ"],e:`<h1> 新版QQ修改彩色颜色字体代码教程</h1>
<p>QQ群彩色昵称，</p>
<p>玩过的都知道，以前是可以直接设置的，但新版QQ群昵称好像不太行！效果自测！</p>
<p>这里我就分享 <strong>两类</strong> 颜色代码吧，用的话把后面的颜色替换成自己的昵称就行了其实找一个旧版QQ，复制好改完的昵称就会在剪切板显示颜色代码</p>
<p>q群改群昵称颜色代码合集（ <strong>需要SVIP</strong> ） 不喜勿喷，不喜勿喷，不喜勿喷！</p>
<h2> 文字教程：</h2>
<p>复制你需要的颜色到群昵称输入框内，然后删除文字(是删文字 不要删到代码)再打上你自己需要设置的群昵称即可！</p>`,r:{minutes:1.77,words:531},y:"a",title:"新版QQ修改彩色颜色字体代码教程",i:"others"},["/other/新版QQ修改彩色颜色字体代码教程.html","/other/%E6%96%B0%E7%89%88QQ%E4%BF%AE%E6%94%B9%E5%BD%A9%E8%89%B2%E9%A2%9C%E8%89%B2%E5%AD%97%E4%BD%93%E4%BB%A3%E7%A0%81%E6%95%99%E7%A8%8B","/other/新版QQ修改彩色颜色字体代码教程.md","/other/%E6%96%B0%E7%89%88QQ%E4%BF%AE%E6%94%B9%E5%BD%A9%E8%89%B2%E9%A2%9C%E8%89%B2%E5%AD%97%E4%BD%93%E4%BB%A3%E7%A0%81%E6%95%99%E7%A8%8B.md"]],["v-7a7f0bea","/other/%E6%B5%8F%E8%A7%88%E5%99%A8UA.html",{a:"xlc520",d:"2022-02-11T00:00:00.000Z",l:"2022年2月11日",c:["other"],g:["other"],e:`<h1> 浏览器UA</h1>
<p>更新：2022年6月6日11:18:17</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Mozilla/5.0 (Linux; Android 11; Redmi K30 5G Build/RKQ1.200826.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Mobile Safari/537.36 baiduboxapp/3.2.5.10 SearchCraft/3.9.1 (Baidu; P1 11) Quark/3.8.4.128
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:2.45,words:736},y:"a",title:"浏览器UA",i:"type"},["/other/浏览器UA.html","/other/%E6%B5%8F%E8%A7%88%E5%99%A8UA","/other/浏览器UA.md","/other/%E6%B5%8F%E8%A7%88%E5%99%A8UA.md"]],["v-9ec589ba","/other/%E6%BC%8F%E6%B4%9E%E7%9B%91%E6%8E%A7%E5%B9%B3%E5%8F%B0Monitor.html",{a:"xlc520",d:"2022-02-11T00:00:00.000Z",l:"2022年2月11日",c:["other"],g:["other"],e:`<h1> 漏洞监控平台——Monitor</h1>
<h2> <strong>写在前面的话</strong></h2>
<p>对于网络安全从业者来说，实时掌握漏洞动态是至关重要的，所以萌生了开发一个监控平台的想法，把最新漏洞资讯集成然后进行推送。这里推送选的是企业微信，留下了邮件推送的接口，默认是关闭的，想开启的小伙伴自行开启。数据库选用的是sqlite。目前实现了监控GitHub、微软、CNNVD。（不要问我为啥不监控CNVD，我是不会告诉你我干不过它的反爬【狗头保命】）。</p>
<h2> <strong>项目介绍</strong></h2>
<h3> 项目目录结构</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>│  cve_db.db
│  monitor.py
│  style.css
│
├─Functions
│  ├─Commons
│  │      excel.py
│  │      excel_html.py
│  │      github.py
│  │      mail.py
│  │      style.css
│  │      translate.py
│  │      wechat_api.py
│  │      __init__.py
│  │
│  ├─RequestInfo
│  │      cnnvd_monitor.py
│  │      github_monitor.py
│  │      MS_monitor.py
│  │      __init__.py
│  │
│  └─Sql
│          installDb.py
│          sql_helper.py
│
└─log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.56,words:1069},y:"a",title:"漏洞监控平台——Monitor",i:"type"},["/other/漏洞监控平台Monitor.html","/other/%E6%BC%8F%E6%B4%9E%E7%9B%91%E6%8E%A7%E5%B9%B3%E5%8F%B0Monitor","/other/漏洞监控平台Monitor.md","/other/%E6%BC%8F%E6%B4%9E%E7%9B%91%E6%8E%A7%E5%B9%B3%E5%8F%B0Monitor.md"]],["v-640b9c86","/other/%E7%8C%AB%E5%BD%B1%E8%A7%86.html",{a:"xlc520",d:"2022-02-09T00:00:00.000Z",l:"2022年2月9日",c:["other"],g:["other"],e:`<h3> <a href="/other/BiuBiuTV.html" target="blank">BiuBiuTV</a>（支持添加片源接口）</h3>
<h1> MaoTV</h1>
<h3> 猫影视资源接口</h3>
<p><strong>国内镜像</strong>：</p>
<p><strong>官方</strong></p>
<ul>
<li><a href="https://raw.fastgit.org/xlc520/MaoTV/main/guanfang.json" target="_blank" rel="noopener noreferrer">https://raw.fastgit.org/xlc520/MaoTV/main/guanfang.json</a></li>
<li><a href="https://cdn.jsdelivr.net/gh/xlc520/MaoTV@main/guanfang.json" target="_blank" rel="noopener noreferrer">https://cdn.jsdelivr.net/gh/xlc520/MaoTV@main/guanfang.json</a></li>
</ul>`,r:{minutes:1.82,words:546},y:"a",title:"猫影视资源接口",i:"type"},["/other/猫影视.html","/other/%E7%8C%AB%E5%BD%B1%E8%A7%86","/other/猫影视.md","/other/%E7%8C%AB%E5%BD%B1%E8%A7%86.md"]],["v-fce35ce0","/other/%E7%94%B5%E5%AD%90%E4%B9%A6%E7%BD%91%E7%AB%99.html",{a:"xlc520",d:"2022-02-16T00:00:00.000Z",l:"2022年2月16日",c:["other"],g:["other"],e:`<h1> 电子书网站</h1>
<h2> 计算机领域</h2>
<p>学习编程，有些书是必须要看的，实体书就不多说了，某宝、某东等等电商平台都能买到。</p>
<p>如果是想做一些笔记或者不方便携带纸质书的时候，电子书是个不错的选择。（有条件请支持实体书）</p>
<h3> 1、图灵社区</h3>
<ul>
<li>
<p>地 址：<a href="https://www.ituring.com.cn/" target="_blank" rel="noopener noreferrer">https://www.ituring.com.cn/</a></p>
</li>
<li>
<p>简 介：书籍比较全面的图书社区，电子书的价格是纸质书的一半。</p>
</li>
<li>
<p>推荐指数：⭐⭐⭐</p>
</li>
</ul>`,r:{minutes:3.12,words:935},y:"a",title:"电子书网站",i:"type"},["/other/电子书网站.html","/other/%E7%94%B5%E5%AD%90%E4%B9%A6%E7%BD%91%E7%AB%99","/other/电子书网站.md","/other/%E7%94%B5%E5%AD%90%E4%B9%A6%E7%BD%91%E7%AB%99.md"]],["v-2b70e4f9","/other/%E7%94%B5%E8%A7%86%E5%B7%A5%E5%85%B7%E7%AE%B1.html",{a:"xlc520",d:"2022-11-20T00:00:00.000Z",l:"2022年11月20日",c:["other"],g:["other","电视"],e:`<h1> 电视全能工具箱</h1>
<h2> <strong>电视全能工具箱核心功能</strong></h2>
<p>它可以解决以下用户痛点：</p>
<p>◆电视应用精简、一键去广告；</p>
<p>◆电视应用回复；</p>
<p>◆电视安卓权限解除；</p>
<p>◆重启电视到出厂模式；</p>
<h2> <strong>连接步骤：</strong></h2>
<p>第一步：电视和电脑处在同一个局域网下；</p>
<p>第二步：打开电视的ADB开关，在设置-系统信息-然后上下左右，就可以打开了；</p>
<p>第三步：去电视的设置里面去查看电视机的IP地址；</p>
<p>第四步：输入你看见的电视机IP地址在软件中输入即可；</p>`,r:{minutes:15.39,words:4616},y:"a",title:"电视全能工具箱",i:"others"},["/other/电视工具箱.html","/other/%E7%94%B5%E8%A7%86%E5%B7%A5%E5%85%B7%E7%AE%B1","/other/电视工具箱.md","/other/%E7%94%B5%E8%A7%86%E5%B7%A5%E5%85%B7%E7%AE%B1.md"]],["v-f9cb582c","/other/%E7%99%BD%E5%AB%96%E6%9C%BA%E5%9C%BA.html",{a:"xlc520",d:"2022-02-18T00:00:00.000Z",l:"2022年2月18日",c:["other"],g:["other"],e:`<h1> 白嫖机场</h1>
<p>2022年2月7日18:32:31</p>
<p>日语迷 <a href="https://free.riyumi.xyz" target="_blank" rel="noopener noreferrer">https://free.riyumi.xyz</a>
0元购</p>
<p>海淼云 <a href="https://cloud.joker007.top" target="_blank" rel="noopener noreferrer">https://cloud.joker007.top</a>
注册送。</p>
<p>几鸡 <a href="https://a.luxury/signin" target="_blank" rel="noopener noreferrer">https://a.luxury/signin</a>
注册送。</p>`,r:{minutes:3.31,words:993},y:"a",title:"白嫖机场",i:"type"},["/other/白嫖机场.html","/other/%E7%99%BD%E5%AB%96%E6%9C%BA%E5%9C%BA","/other/白嫖机场.md","/other/%E7%99%BD%E5%AB%96%E6%9C%BA%E5%9C%BA.md"]],["v-7af25863","/other/%E7%9B%B4%E6%92%AD%E6%BA%90.html",{a:"xlc520",d:"2022-01-29T00:00:00.000Z",l:"2022年1月29日",c:["other"],g:["other"],e:`<h1> 直播源</h1>
<ul>
<li>iptv直播源，取自某电视直播源</li>
<li><a href="https://gitee.com/bahtyar/iptv" target="_blank" rel="noopener noreferrer">https://gitee.com/bahtyar/iptv</a></li>
</ul>
`,r:{minutes:.16,words:48},y:"a",title:"直播源",i:"type"},["/other/直播源.html","/other/%E7%9B%B4%E6%92%AD%E6%BA%90","/other/直播源.md","/other/%E7%9B%B4%E6%92%AD%E6%BA%90.md"]],["v-7c4c95c4","/other/%E7%A8%8B%E5%BA%8F%E5%91%98%E5%B8%B8%E9%80%9B%E7%9A%84%E7%BD%91%E7%AB%99.html",{a:"xlc520",d:"2022-02-17T00:00:00.000Z",l:"2022年2月17日",c:["other"],g:["other"],e:`<h1> 程序员常逛的网站</h1>
<h3> 一、在线教程</h3>
<p>首先列出一些在线教程网站，这些在线教程网站通常都比较适合入门，可以作为开发学习路上的第一个阶梯，也可以作为工作中的在线文档。</p>
<h3> 1、<a href="https://link.zhihu.com/?target=http%3A//how2j.cn" target="_blank" rel="noopener noreferrer">http://how2j.cn</a></h3>
<ul>
<li>
<p>地 址：<a href="https://link.zhihu.com/?target=https%3A//how2j.cn/" target="_blank" rel="noopener noreferrer">https://how2j.cn/</a></p>
</li>
<li>
<p>简 介：一个 Java 全栈开发教程网站，内容全面，简洁易懂，非常适合入门。</p>
</li>
<li>
<p>推荐指数：⭐⭐⭐⭐⭐</p>
</li>
</ul>`,r:{minutes:14.76,words:4427},y:"a",title:"程序员常逛的网站",i:"type"},["/other/程序员常逛的网站.html","/other/%E7%A8%8B%E5%BA%8F%E5%91%98%E5%B8%B8%E9%80%9B%E7%9A%84%E7%BD%91%E7%AB%99","/other/程序员常逛的网站.md","/other/%E7%A8%8B%E5%BA%8F%E5%91%98%E5%B8%B8%E9%80%9B%E7%9A%84%E7%BD%91%E7%AB%99.md"]],["v-5789ff2c","/other/%E7%BD%91%E5%9D%80.html",{a:"xlc520",d:"2022-01-27T00:00:00.000Z",l:"2022年1月27日",c:["other"],g:["other"],e:`<h1> 网址</h1>
<h2> 蓝奏云破解软件合集</h2>
<p><a href="https://wws.lanzoui.com/b01u9z07i" target="_blank" rel="noopener noreferrer">https://wws.lanzoui.com/b01u9z07i</a>
<a href="https://lanzoux.com/b60364" target="_blank" rel="noopener noreferrer">https://lanzoux.com/b60364</a>
<a href="https://lanzoux.com/b202139" target="_blank" rel="noopener noreferrer">https://lanzoux.com/b202139</a>
<a href="https://www.lanzoui.com/b133841/" target="_blank" rel="noopener noreferrer">https://www.lanzoui.com/b133841/</a>
<a href="https://www.lanzoui.com/b63771/" target="_blank" rel="noopener noreferrer">https://www.lanzoui.com/b63771/</a>
<a href="https://www.lanzoui.com/b196932" target="_blank" rel="noopener noreferrer">https://www.lanzoui.com/b196932</a>
<a href="https://www.lanzoui.com/b66477" target="_blank" rel="noopener noreferrer">https://www.lanzoui.com/b66477</a>
<a href="https://wws.lanzoui.com/b01u6u6ti" target="_blank" rel="noopener noreferrer">https://wws.lanzoui.com/b01u6u6ti</a>
<a href="https://lanzoux.com/b60586" target="_blank" rel="noopener noreferrer">https://lanzoux.com/b60586</a>
<a href="https://lanzoux.com/s/zero" target="_blank" rel="noopener noreferrer">https://lanzoux.com/s/zero</a>
<a href="https://rjjd.lanzoui.com/s/ptrj" target="_blank" rel="noopener noreferrer">https://rjjd.lanzoui.com/s/ptrj</a></p>`,r:{minutes:1.52,words:457},y:"a",title:"网址",i:"type"},["/other/网址.html","/other/%E7%BD%91%E5%9D%80","/other/网址.md","/other/%E7%BD%91%E5%9D%80.md"]],["v-6ec2f8d0","/other/%E7%BD%91%E7%AB%99%E6%96%87%E7%8C%AE%E4%B8%8B%E8%BD%BD.html",{a:"xlc520",d:"2022-04-23T00:00:00.000Z",l:"2022年4月23日",c:["other"],g:["other"],e:`<h1> 文献下载</h1>
<h2> 文献部落</h2>
<p>**网址：**<strong><a href="http://459.org/" target="_blank" rel="noopener noreferrer">http://459.org/</a></strong></p>
<p><strong>文献部落</strong>是一个免费下载文献的学术导航网站,汇总最新免费下载国内外文献的网站,为广大研究生提供最便捷的文献下载方法。</p>
<p><strong>英文文献</strong>下载网站应有尽有。也提供超多<strong>中****文文献下载方法</strong>。<strong>百度学术、文库、知网</strong>等网站文献都免费下载！除此之外，广西图书馆和浙江图书馆直接注册登录即可下载文献，好用又便捷！</p>`,r:{minutes:8.02,words:2405},y:"a",title:"网站-文献下载",i:"others"},["/other/网站文献下载.html","/other/%E7%BD%91%E7%AB%99%E6%96%87%E7%8C%AE%E4%B8%8B%E8%BD%BD","/other/网站文献下载.md","/other/%E7%BD%91%E7%AB%99%E6%96%87%E7%8C%AE%E4%B8%8B%E8%BD%BD.md"]],["v-91b437be","/other/%E7%BE%8E%E5%9B%A2%E5%B9%B4%E8%B4%A7%E7%94%B5%E5%AD%90%E4%B9%A6.html",{a:"xlc520",d:"2022-02-08T00:00:00.000Z",l:"2022年2月8日",c:["other"],g:["other"],e:`<h1> 美团年货电子书</h1>
<p>美团年货电子书下载地址：</p>
<p>2020美团技术年货-合集：<a href="https://s3plus.meituan.net/v1/mss_e63d09aec75b41879dcb3069234793ac/file/2020%E7%BE%8E%E5%9B%A2%E6%8A%80%E6%9C%AF%E5%B9%B4%E8%B4%A7-%E5%90%88%E9%9B%86.pdf" target="_blank" rel="noopener noreferrer">https://s3plus.meituan.net/v1/mss_e63d09aec75b41879dcb3069234793ac/file/2020美团技术年货-合集.pdf</a></p>`,r:{minutes:.91,words:274},y:"a",title:"美团年货电子书",i:"type"},["/other/美团年货电子书.html","/other/%E7%BE%8E%E5%9B%A2%E5%B9%B4%E8%B4%A7%E7%94%B5%E5%AD%90%E4%B9%A6","/other/美团年货电子书.md","/other/%E7%BE%8E%E5%9B%A2%E5%B9%B4%E8%B4%A7%E7%94%B5%E5%AD%90%E4%B9%A6.md"]],["v-61f2a5b0","/other/%E8%93%9D%E5%A5%8F%E4%BA%91%E5%AE%89%E5%8D%93APP%E5%90%88%E9%9B%86.html",{a:"xlc520",d:"2022-03-06T00:00:00.000Z",l:"2022年3月6日",c:["other"],g:["蓝奏"],e:`<h1> 蓝奏云安卓APP合集</h1>
<blockquote><p>好软分享：<a href="https://github.com/yoyodadada/haoruanfenxiang" target="_blank" rel="nofollow noopener">https://github.com/yoyodadada/haoruanfenxiang</a></p>
<p>优质APP集散地：<a href="https://www.lanzoui.com/u/yoyodadada" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/yoyodadada</a></p>
<p>未归类的比较好用的软件：<a href="https://www.lanzoui.com/b01b01h9a" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b01b01h9a</a></p>
<p>软件阁分享：<a href="https://www.lanzoui.com/u/%E9%86%8B%E5%91%B3%E8%BE%B0" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/%E9%86%8B%E5%91%B3%E8%BE%B0</a></p>
<p>线报坊软件合集：<a href="https://www.lanzoui.com/b60364" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b60364</a></p>
<p>Bs团队分享合集：<a href="https://www.lanzoui.com/b93256" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b93256</a></p>
<p>安惠购分享合集：<a href="https://pan.lanzoui.com/b174576/" target="_blank" rel="nofollow noopener">https://pan.lanzoui.com/b174576/</a></p>
<p>黑哥软件基地：<a href="https://www.lanzoui.com/s/rjjdt=2403" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/s/rjjdt=2403</a></p>
<p>hai分享推荐合集：<a href="https://pan.lanzoui.com/b221497/" target="_blank" rel="nofollow noopener">https://pan.lanzoui.com/b221497/</a></p>
<p>辉少软件分享合集：<a href="https://pan.lanzoui.com/b221505" target="_blank" rel="nofollow noopener">https://pan.lanzoui.com/b221505</a></p>
<p>乐分享软件合集：<a href="https://pan.lanzoui.com/b215476/" target="_blank" rel="nofollow noopener">https://pan.lanzoui.com/b215476/</a></p>
<p>BhVip软件更新合集：<a href="https://pan.lanzoui.com/u/%E5%BD%AA%E7%85%8Cqq1846055318" target="_blank" rel="nofollow noopener">https://pan.lanzoui.com/u/%E5%BD%AA%E7%85%8Cqq1846055318</a></p>
<p>大肥精品软件合集：<a href="https://pan.lanzoui.com/u/qianxun8" target="_blank" rel="nofollow noopener">https://pan.lanzoui.com/u/qianxun8</a></p>
<p>影视合集软件：<a href="https://www.lanzoui.com/b0jrkv4b" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b0jrkv4b</a></p>
<p>暗部分享免费软件：<a href="https://www.lanzoui.com/u/chudali" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/chudali</a></p>
<p>分享社软件分享：<a href="https://pan.lanzoui.com/b63771/" target="_blank" rel="nofollow noopener">https://pan.lanzoui.com/b63771/</a></p>
<p>稚初软件集合：<a href="https://pan.lanzoui.com/b200130" target="_blank" rel="nofollow noopener">https://pan.lanzoui.com/b200130</a></p>
<p>无名软件汇总：<a href="https://pan.lanzoui.com/b206983/" target="_blank" rel="nofollow noopener">https://pan.lanzoui.com/b206983/</a></p>
<p>口令专享软件团队：<a href="https://pan.lanzoui.com/b240011/" target="_blank" rel="nofollow noopener">https://pan.lanzoui.com/b240011/</a></p>
<p>安卓破解类软件：<a href="https://pan.lanzoui.com/b828085" target="_blank" rel="nofollow noopener">https://pan.lanzoui.com/b828085</a></p>
<p>Hs团队破解游戏：<a href="https://pan.lanzoui.com/b888887" target="_blank" rel="nofollow noopener">https://pan.lanzoui.com/b888887</a></p>
<p>淘购街软件分享：<a href="https://pan.lanzoui.com/b165784" target="_blank" rel="nofollow noopener">https://pan.lanzoui.com/b165784</a></p>
<p>小聪分享社合集：<a href="https://pan.lanzoui.com/b94326/" target="_blank" rel="nofollow noopener">https://pan.lanzoui.com/b94326/</a></p>
<p>允晨软件库合集：<a href="https://pan.lanzoui.com/b54212/" target="_blank" rel="nofollow noopener">https://pan.lanzoui.com/b54212/</a></p>
<p>电视盒子软件：<a href="https://pan.lanzoui.com/b167839/" target="_blank" rel="nofollow noopener">https://pan.lanzoui.com/b167839/</a></p>
<p>软件实验室合集：<a href="http://pan.lanzoui.com/u/ygtq" target="_blank" rel="nofollow noopener">http://pan.lanzoui.com/u/ygtq</a></p>
<p>软件田园合集：<a href="https://pan.lanzoui.com/u/longluobo" target="_blank" rel="nofollow noopener">https://pan.lanzoui.com/u/longluobo</a></p>
<p>日历APP分享合集：<a href="https://pan.lanzoui.com/u/hyfl" target="_blank" rel="nofollow noopener">https://pan.lanzoui.com/u/hyfl</a></p>
<p>北笙软件合集：<a href="https://www.lanzoui.com/b003fkotc" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b003fkotc</a></p>
<p>青风软件分享合集：<a href="https://pan.lanzoui.com/b60564/" target="_blank" rel="nofollow noopener">https://pan.lanzoui.com/b60564/</a></p>
<p>蜗牛软件库：<a href="https://www.lanzoui.com/b1001808" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b1001808</a></p>
<p>搬运鼠服务公社：<a href="https://pan.lanzoui.com/b218606" target="_blank" rel="nofollow noopener">https://pan.lanzoui.com/b218606</a></p>
<p>小说软件合集：<a href="https://pan.lanzoui.com/b158157/" target="_blank" rel="nofollow noopener">https://pan.lanzoui.com/b158157/</a></p>
<p>漫画类软件合集：<a href="https://pan.lanzoui.com/b765262/" target="_blank" rel="nofollow noopener">https://pan.lanzoui.com/b765262/</a></p>
<p>FKzhang_WX模块：<a href="https://pan.lanzoui.com/b44314" target="_blank" rel="nofollow noopener">https://pan.lanzoui.com/b44314</a></p>
<p>TV/盒子软件合集：<a href="https://www.lanzoui.com/b699768/" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b699768/</a> 密码：987456</p>
<p>清秋暖冬合集：<a href="https://www.lanzoui.com/b474214" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b474214</a> 密码：qingqiu</p>
<p>二狗娱乐网合集：<a href="https://www.lanzoui.com/b896145" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b896145</a></p>
<p>阿友软件合集：<a href="https://pan.lanzoui.com/u/aybaba" target="_blank" rel="nofollow noopener">https://pan.lanzoui.com/u/aybaba</a></p>
<p>福利吧分享：<a href="https://www.lanzoui.com/u/fuliba" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/fuliba</a></p>
<p>影视TV版APP合集：<a href="https://lanzoui.com/b00t6lcrg" target="_blank" rel="nofollow noopener">https://lanzoui.com/b00t6lcrg</a> 密码：QPMZ</p>
<p>戏子软件库分享：<a href="https://www.lanzoui.com/b554854" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b554854</a></p>
<p>免费看视频：<a href="https://www.lanzoui.com/b749444" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b749444</a></p>
<p>黑科技玩机：<a href="https://www.lanzoui.com/b281858" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b281858</a></p>
<p>兜兜线报软件合集：<a href="https://www.lanzoui.com/b133841/" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b133841/</a></p>
<p>软科技软件合集：<a href="https://www.lanzoui.com/u/13145212431" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/13145212431</a></p>
<p>霖淘购软件共享：<a href="https://www.lanzoui.com/b252370/" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b252370/</a></p>
<p>小鹏软件合集：<a href="http://www.lanzoui.com/u/xiaopengi" target="_blank" rel="nofollow noopener">http://www.lanzoui.com/u/xiaopengi</a></p>
<p>分享社：<a href="https://www.lanzoui.com/b63771/" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b63771/</a></p>
<p>『BhVip』软件更新合集：<a href="http://pan.lanzoui.com/u/%E5%BD%AA%E7%85%8Cqq1846055318" target="_blank" rel="nofollow noopener">http://pan.lanzoui.com/u/%E5%BD%AA%E7%85%8Cqq1846055318</a></p>
<p>软件梦软件合集：<a href="https://www.lanzoui.com/u/Hicro" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/Hicro</a></p>
<p>全网软件分享合集：<a href="https://www.lanzoui.com/b117359" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b117359</a></p>
<p>全网软件合集：<a href="https://www.lanzoui.com/b66477" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b66477</a></p>
<p>软件合集：<a href="http://www.lanzoui.com/u/9383679" target="_blank" rel="nofollow noopener">http://www.lanzoui.com/u/9383679</a></p>
<p>软件库软件阁线报软件基地：<a href="https://www.lanzoui.com/b244238" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b244238</a></p>
<p>嗨分享软件合集：<a href="https://www.lanzoui.com/u/%E6%8B%BD%E6%8B%BD" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/%E6%8B%BD%E6%8B%BD</a></p>
<p>软件库软件游戏合集：<a href="https://www.lanzoui.com/u/rjk" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/rjk</a></p>
<p>牛之家：<a href="https://www.lanzoui.com/u/memedawq" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/memedawq</a></p>
<p>星辰软件合集：<a href="https://www.lanzoui.com/u/azsoft" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/azsoft</a></p>
<p>爱分享团队软件合集：<a href="https://www.lanzoui.com/u/zqf000" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/zqf000</a></p>
<p>七月软件库：<a href="https://www.lanzoui.com/b196932" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b196932</a></p>
<p>软件大全：<a href="https://www.lanzoui.com/u/296742969" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/296742969</a></p>
<p>旧梦软件集合：<a href="https://www.lanzoui.com/u/jinjunpo" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/jinjunpo</a></p>
<p>雄哥软件合集：<a href="https://www.lanzoui.com/u/%E9%9B%84%E5%93%A5%E7%BD%91%E7%BB%9C%E4%BC%A0%E5%AA%92." target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/%E9%9B ... %E4%BC%A0%E5%AA%92.</a></p>
<p>轩哥软件网盘：<a href="https://www.lanzoui.com/u/%E8%BD%A9%E5%93%A5%E7%BD%91%E7%BB%9C%E4%BC%A0%E5%AA%92" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/%E8%BD ... C%E4%BC%A0%E5%AA%92</a></p>
<p>安卓软件合集：<a href="https://www.lanzoui.com/u/langman666" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/langman666</a></p>
<p>小蠢货旗下软件合集：<a href="https://www.lanzoui.com/u/616737520" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/616737520</a></p>
<p>大白软件库：<a href="https://www.lanzoui.com/u/dabai666" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/dabai666</a></p>
<p>牛牛软件合集：<a href="http://www.lanzoui.com/u/36277009" target="_blank" rel="nofollow noopener">http://www.lanzoui.com/u/36277009</a></p>
<p>软件屋：<a href="https://www.lanzoui.com/u/xaichen" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/xaichen</a></p>
<p>萝卜软件库：<a href="https://www.lanzoui.com/u/longluobo" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/longluobo</a></p>
<p>小银软件库：<a href="https://www.lanzoui.com/u/jiek" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/jiek</a></p>
<p>优享汇-软件镖局：<a href="https://www.lanzoui.com/u/%E6%B1%9F%E4%B8%8A" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/%E6%B1%9F%E4%B8%8A</a></p>
<p>新起点软件库：<a href="https://www.lanzoui.com/u/xinqidian" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/xinqidian</a></p>
<p>辉少软件集：<a href="https://www.lanzoui.com/u/%E4%B8%9C%E6%80%BB2017" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/%E4%B8%9C%E6%80%BB2017</a></p>
<p>新世界软件合集：<a href="https://www.lanzoui.com/u/adminqizh" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/adminqizh</a></p>
<p>少宇团队：<a href="https://www.lanzoui.com/u/shaoyu" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/shaoyu</a></p>
<p>阿轻软件库：<a href="https://www.lanzoui.com/u/aq1433709042" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/aq1433709042</a></p>
<p>稚初软件分享：<a href="https://www.lanzoui.com/u/zhichu" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/zhichu</a></p>
<p>Kl软件分享库：<a href="https://www.lanzoui.com/u/aguo" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/aguo</a></p>
<p>软件分享基地：<a href="https://www.lanzoui.com/u/aiwange" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/aiwange</a></p>
<p>软件园旗下软件共享：<a href="https://www.lanzoui.com/u/anxin666" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/anxin666</a></p>
<p>小伟软件库发布：<a href="https://www.lanzoui.com/u/%E5%B0%8F%E4%BC%9F%E8%BD%AF%E4%BB%B6%E5%BA%93" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/%E5%B0 ... F%E4%BB%B6%E5%BA%93</a></p>
<p>千城软件库：<a href="https://www.lanzoui.com/u/%E5%8D%83%E5%9F%8E1" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/%E5%8D%83%E5%9F%8E1</a></p>
<p>A分享-全网软件合集：<a href="https://www.lanzoui.com/b205552/" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b205552/</a></p>
<p>秋颜软件库：<a href="https://www.lanzoui.com/b341705" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b341705</a></p>
<p>天天分享软件库：<a href="http://pan.lanzoui.com/u/qq348740911" target="_blank" rel="nofollow noopener">http://pan.lanzoui.com/u/qq348740911</a></p>
<p>游戏破解合集：<a href="https://www.lanzoui.com/b654140" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b654140</a></p>
<p>阡陌软件库：<a href="https://pan.lanzoui.com/b221640" target="_blank" rel="nofollow noopener">https://pan.lanzoui.com/b221640</a></p>
<p>软件工厂精品软件：<a href="https://www.lanzoui.com/u/sg88" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/sg88</a></p>
<p>nPlayer：<a href="https://www.lanzoui.com/b0cpu28tc" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b0cpu28tc</a></p>
<p>乐淘分享软件库：<a href="https://www.lanzoui.com/u/YZ457104" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/u/YZ457104</a></p>
<p>滚哥网盘资源：<a href="https://www.lanzoui.com/b838976" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b838976</a></p>
<p>电视盒子软件合集：<a href="https://www.lanzoui.com/b07xdohkf" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b07xdohkf</a> 密码：FULIBA</p>
<p>壹零贰肆软件分享：<a href="https://1024.lanzoui.com/b06xqal9g" target="_blank" rel="nofollow noopener">https://1024.lanzoui.com/b06xqal9g</a> 密码:dl7p</p>
<p>乌龟上高速：<a href="https://www.lanzoui.com/b0ejb48da" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b0ejb48da</a></p>
<p>安卓精选破解游戏合集：<a href="https://www.lanzoui.com/b053xt4vg" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b053xt4vg</a></p>
<p>陈蛋蛋的宝藏库<a href="http://www.chendandan.ys168.com/" target="_blank" rel="nofollow noopener">http://www.chendandan.ys168.com/</a></p>
<p>阿虚同学的储物间<a href="http://kyon945.ys168.com/" target="_blank" rel="nofollow noopener">http://kyon945.ys168.com/</a></p>
<p>更多软件——<a href="https://www.lanzoui.com/b0c8d2te" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b0c8d2te</a></p>
<p>其他类型浏览器<a href="https://www.lanzoui.com/b0c8jqyj" target="_blank" rel="nofollow noopener">https://www.lanzoui.com/b0c8jqyj</a></p></blockquote>`,r:{minutes:8.56,words:2569},y:"a",title:"蓝奏云安卓APP合集",i:"type"},["/other/蓝奏云安卓APP合集.html","/other/%E8%93%9D%E5%A5%8F%E4%BA%91%E5%AE%89%E5%8D%93APP%E5%90%88%E9%9B%86","/other/蓝奏云安卓APP合集.md","/other/%E8%93%9D%E5%A5%8F%E4%BA%91%E5%AE%89%E5%8D%93APP%E5%90%88%E9%9B%86.md"]],["v-c8e1ae3a","/other/%E8%B0%B7%E6%AD%8CGmail%E6%B3%A8%E5%86%8C%E6%98%BE%E7%A4%BA%E6%AD%A4%E5%8F%B7%E7%A0%81%E4%B8%8D%E8%83%BD%E9%AA%8C%E8%AF%81%E7%9A%84%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.html",{a:"xlc520",d:"2022-06-06T00:00:00.000Z",l:"2022年6月6日",c:["other"],g:["other","Google"],e:`<h1> 谷歌Gmail注册显示此号码不能验证的解决办法</h1>
<p>谷歌账号注册中国手机号不能验证，很多同学在注册谷歌账号时经常会遇到这个问题，一直卡在电话号码验证上，是国内手机号不能通过谷歌的验证吗？</p>
<figure><img src="https://static.xlc520.ml/blogImage/1620-165365038994811.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>基本都不是号码本身引起的，换新号码往往也没用，这里介绍几个靠谱的Gmail邮箱注册教程：</p>`,r:{minutes:3.61,words:1082},y:"a",title:"谷歌Gmail注册显示此号码不能验证的解决办法",i:"others"},["/other/谷歌Gmail注册显示此号码不能验证的解决办法.html","/other/%E8%B0%B7%E6%AD%8CGmail%E6%B3%A8%E5%86%8C%E6%98%BE%E7%A4%BA%E6%AD%A4%E5%8F%B7%E7%A0%81%E4%B8%8D%E8%83%BD%E9%AA%8C%E8%AF%81%E7%9A%84%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95","/other/谷歌Gmail注册显示此号码不能验证的解决办法.md","/other/%E8%B0%B7%E6%AD%8CGmail%E6%B3%A8%E5%86%8C%E6%98%BE%E7%A4%BA%E6%AD%A4%E5%8F%B7%E7%A0%81%E4%B8%8D%E8%83%BD%E9%AA%8C%E8%AF%81%E7%9A%84%E8%A7%A3%E5%86%B3%E5%8A%9E%E6%B3%95.md"]],["v-a99c571c","/other/%E9%AB%98%E6%B8%85%E8%A7%86%E9%A2%91%E8%A7%A3%E6%9E%90%E6%8E%A5%E5%8F%A3.html",{a:"xlc520",d:"2022-02-15T00:00:00.000Z",l:"2022年2月15日",c:["other"],g:["other"],e:`<h1> 高清视频解析接口</h1>
<p><a href="https://okjx.cc/?url=" target="_blank" rel="noopener noreferrer">https://okjx.cc/?url=</a></p>
<p><a href="https://vip.parwix.com:4433/player/?url=" target="_blank" rel="noopener noreferrer">https://vip.parwix.com:4433/player/?url=</a></p>
<p><a href="https://jx.m3u8.tv/jiexi/?url=" target="_blank" rel="noopener noreferrer">https://jx.m3u8.tv/jiexi/?url=</a></p>`,r:{minutes:.21,words:62},y:"a",title:"高清视频解析接口",i:"type"},["/other/高清视频解析接口.html","/other/%E9%AB%98%E6%B8%85%E8%A7%86%E9%A2%91%E8%A7%A3%E6%9E%90%E6%8E%A5%E5%8F%A3","/other/高清视频解析接口.md","/other/%E9%AB%98%E6%B8%85%E8%A7%86%E9%A2%91%E8%A7%A3%E6%9E%90%E6%8E%A5%E5%8F%A3.md"]],["v-53d002db","/pc/9%E4%B8%AA%E5%BE%88%E9%85%B7%E7%9A%84CMD%E5%91%BD%E4%BB%A4.html",{a:"xlc520",d:"2022-06-03T00:00:00.000Z",l:"2022年6月3日",c:["pc"],g:["pc"],e:`<h1> 9个很酷的CMD命令</h1>
<h2> <strong>ipconfig</strong></h2>
<p>功能：查询本机IP地址</p>
<p>操作方法：只要在在打开的cmd命令界面中输入“ipconfig”就可以了。</p>
<figure><img src="https://static.xlc520.ml/blogImage/640-16535737928341.png" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure>
<h2> <strong>msg</strong></h2>`,r:{minutes:2.12,words:635},y:"a",title:"9个很酷的CMD命令",i:"computer"},["/pc/9个很酷的CMD命令.html","/pc/9%E4%B8%AA%E5%BE%88%E9%85%B7%E7%9A%84CMD%E5%91%BD%E4%BB%A4","/pc/9个很酷的CMD命令.md","/pc/9%E4%B8%AA%E5%BE%88%E9%85%B7%E7%9A%84CMD%E5%91%BD%E4%BB%A4.md"]],["v-2d0aaf03","/pc/",{a:"xlc520",d:"2022-03-28T00:00:00.000Z",l:"2022年3月28日",c:["pc"],g:["pc"],e:`<p align="center"> 
  <img src="https://metrics.lecoq.io/xlc520?template=classic&amp;isocalendar=1&amp;languages=1&amp;people=1&amp;activity=1&amp;achievements=1&amp;lines=1&amp;repositories=1&amp;notable=1&amp;introduction=1&amp;pagespeed=1&amp;repositories=100&amp;repositories.batch=100&amp;repositories.forks=false&amp;repositories.affiliations=owner&amp;isocalendar.duration=full-year&amp;languages.limit=8&amp;languages.threshold=0%&amp;languages.colors=github&amp;languages.sections=most-used&amp;languages.indepth=false&amp;languages.analysis.timeout=15&amp;languages.categories=markup%2C programming&amp;languages.recent.categories=markup%2C programming&amp;languages.recent.load=300&amp;languages.recent.days=14&amp;people.limit=24&amp;people.identicons=false&amp;people.identicons.hide=false&amp;people.size=28&amp;people.types=followers%2C following&amp;people.shuffle=false&amp;activity.limit=5&amp;activity.load=300&amp;activity.days=14&amp;activity.visibility=all&amp;activity.timestamps=false&amp;activity.filter=all&amp;achievements.threshold=C&amp;achievements.secrets=true&amp;achievements.display=detailed&amp;achievements.limit=0&amp;notable.from=organization&amp;notable.repositories=false&amp;notable.indepth=false&amp;notable.types=commit&amp;repositories.featured= xlc520%2Fxlc520.github.io&amp;introduction.title=true&amp;pagespeed.url=xlc520.github.io&amp;pagespeed.detailed=false&amp;pagespeed.screenshot=false&amp;config.timezone=Asia%2FShanghai"> 
</p>`,r:{minutes:.55,words:165},y:"a",title:"电脑",i:"computer"},["/pc/index.html","/pc/README.md"]],["v-04ef0ac5","/pc/StartAllBack(StartIsBack)v3.2.1Stable.html",{a:"xlc520",d:"2022-01-16T00:00:00.000Z",l:"2022年1月16日",c:["other"],g:["other"],e:`<h1> StartAllBack</h1>
<p>StartAllBack(StartIsBack) v3.2.1 Stable</p>
<p>Windows11开始菜单增强工具StartAllBack正式版发布了！在任务栏上为Windows 11恢复经典样式的Windows 7主题风格开始菜单，主要功能包括：恢复和改进开始菜单样式、个性化任务栏、资源管理器等功能。</p>
<figure><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/2021101417221273.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>`,r:{minutes:1.27,words:382},y:"a",title:"StartAllBack",i:"type"},["/pc/StartAllBack(StartIsBack)v3.2.1Stable","/pc/StartAllBack(StartIsBack)v3.2.1Stable.md"]],["v-6d8a905c","/pc/Windows10%E4%BD%BF%E7%94%A8%E4%BC%98%E5%8C%96%E6%96%B9%E6%A1%88.html",{a:"xlc520",d:"2022-05-13T00:00:00.000Z",l:"2022年5月13日",c:["pc"],g:["pc"],e:`<h1> Windows10使用优化方案</h1>
<p>【目录】</p>
<p>一、Windows10系统设置</p>
<ol>
<li>
<p>系统初步设置</p>
</li>
<li>
<p>运用Dism++设置</p>
</li>
<li>
<p>运用OOSU10设置</p>
</li>
<li>
<p>禁用win10更新</p>
</li>
<li>
<p>系统启动项管理</p>
</li>
</ol>
<p>二、软件推荐</p>
<ol>
<li>
<p>系统安全</p>
</li>
<li>
<p>浏览器</p>
</li>
<li>
<p>办公学习</p>
</li>
<li>
<p>下载工具</p>
</li>
<li>
<p>卸载工具</p>
</li>
<li>
<p>常用系统工具</p>
</li>
<li>
<p>日常体验优化/美化</p>
</li>
<li>
<p>视频/音频播放</p>
</li>
<li>
<p>其他</p>
</li>
</ol>`,r:{minutes:7.3,words:2190},y:"a",title:"Windows10使用优化方案",i:"computer"},["/pc/Windows10使用优化方案.html","/pc/Windows10%E4%BD%BF%E7%94%A8%E4%BC%98%E5%8C%96%E6%96%B9%E6%A1%88","/pc/Windows10使用优化方案.md","/pc/Windows10%E4%BD%BF%E7%94%A8%E4%BC%98%E5%8C%96%E6%96%B9%E6%A1%88.md"]],["v-1ec0c498","/pc/win10-11%E7%9A%86%E5%8F%AF%E5%B9%B2%E8%B4%A7%E5%88%86%E4%BA%AB.html",{a:"xlc520",d:"2022-05-11T00:00:00.000Z",l:"2022年5月11日",c:["pc"],g:["pc"],e:`<h1> win10-11皆可干货分享</h1>
<h2> 一、商城uwp</h2>
<p>1.Tile Genie (直接在微软商城搜索即可)这是一个美化win10开始菜单的软件₍ᐢ⸝⸝› ̫ ‹⸝⸝ᐢ₎</p>
<p>个人未升11前没有出现相关bug现象（11升后是没有磁贴了)</p>
<figure><img src="https://static.xlc520.ml/blogImage/windows10151.png" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure>
<p>微软商城内截图</p>`,r:{minutes:7.76,words:2329},y:"a",title:"win10-11皆可干货分享",i:"computer"},["/pc/win10-11皆可干货分享.html","/pc/win10-11%E7%9A%86%E5%8F%AF%E5%B9%B2%E8%B4%A7%E5%88%86%E4%BA%AB","/pc/win10-11皆可干货分享.md","/pc/win10-11%E7%9A%86%E5%8F%AF%E5%B9%B2%E8%B4%A7%E5%88%86%E4%BA%AB.md"]],["v-003bf188","/pc/win10%E5%BF%AB%E6%8D%B7%E9%94%AE.html",{a:"xlc520",d:"2022-02-07T00:00:00.000Z",l:"2022年2月7日",c:["other"],g:["other"],e:`<h1> win10快捷键</h1>
<h3> 1.win10 自定义</h3>
<p>Win 10 下快捷方式设置了快捷键一直无法呼出。</p>
<p>在目录：</p>
<p>C:\\Users\\xxxxxx\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs</p>
<p>将要运行的程序的快捷方式放在这里，在快捷方式上--&gt;右键--&gt;属性增加快捷键即可呼出应用。</p>
<h3> 2.WinhotKey</h3>
<p><em>WinhotKey</em>是一款专业的全局快捷键设置软件,可以通过设置热键来实现相应的动作,包括打开文件或文件夹、调用Windows各种功能、执行相应动作等</p>`,r:{minutes:.54,words:163},y:"a",title:"win10快捷键",i:"type"},["/pc/win10快捷键.html","/pc/win10%E5%BF%AB%E6%8D%B7%E9%94%AE","/pc/win10快捷键.md","/pc/win10%E5%BF%AB%E6%8D%B7%E9%94%AE.md"]],["v-31351e7d","/pc/%E5%88%A0%E9%99%A4%20windows%20%E6%9C%8D%E5%8A%A1.html",{a:"xlc520",d:"2022-01-27T00:00:00.000Z",l:"2022年1月27日",c:["other"],g:["other"],e:`<h1> 卸载windows服务，删除 windows 服务</h1>
<h2> 方法/步骤</h2>
<ol>
<li>
<p>1</p>
<p>windows提供了基于命令窗口删除服务的功能，就是在命令窗口输入</p>
<p><strong>sc delete 服务名称</strong></p>
<p>在窗口输入上面的命令就能删除了。下面详细说明。</p>
</li>
<li>
<p>2</p>
<p><strong>确定"服务名称"</strong>，"服务名称"并不是我们在服务列表里直接看到的名称，我们看到的是服务的"显示名称",查看服务名称的方法，就是在要删除的服务上右击，选择"属性"，这时就能看到真正的"服务名称"。比如下面的例子我们要删除“SQL Server Browser”服务，其真实的服务名称为“SQLBrowser”</p>
<figure><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/d9a8d2d2bb665159594c639f8fe23ea23b42c7a1.jpg" alt="怎么卸载windows服务，删除 windows 服务" tabindex="0" loading="lazy"><figcaption>怎么卸载windows服务，删除 windows 服务</figcaption></figure>
<figure><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/116b1ae23ea23a424176d3a53733ec3835bbc0a1.jpg" alt="怎么卸载windows服务，删除 windows 服务" tabindex="0" loading="lazy"><figcaption>怎么卸载windows服务，删除 windows 服务</figcaption></figure>
</li>
<li>
<p>3</p>
<p><strong>执行”sc delete 服务名称“</strong>，打开命令窗口，输入  ”sc delete "+刚才查看到的服务名称，回车就会提示删除成功。这里我们输入  <code>sc delete SQLBrowser</code> ，提示删除成功后，在服务窗口列表里也删除掉了。</p>
<figure><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/a151a233ec3834bbffe3d1ea8714c27bd3823da6.jpg" alt="怎么卸载windows服务，删除 windows 服务" tabindex="0" loading="lazy"><figcaption>怎么卸载windows服务，删除 windows 服务</figcaption></figure>
<figure><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/0d55dc7bd28286894d4ac40465f97fbd4d7c37a6.jpg" alt="怎么卸载windows服务，删除 windows 服务" tabindex="0" loading="lazy"><figcaption>怎么卸载windows服务，删除 windows 服务</figcaption></figure>
<figure><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/7efc527c34b33c41c0b6a0f4887de137c8762ea6.jpg" alt="怎么卸载windows服务，删除 windows 服务" tabindex="0" loading="lazy"><figcaption>怎么卸载windows服务，删除 windows 服务</figcaption></figure>
</li>
</ol>`,r:{minutes:1.29,words:386},y:"a",title:"卸载windows服务，删除 windows 服务",i:"type"},["/pc/删除 windows 服务.html","/pc/%E5%88%A0%E9%99%A4%20windows%20%E6%9C%8D%E5%8A%A1","/pc/删除 windows 服务.md","/pc/%E5%88%A0%E9%99%A4%20windows%20%E6%9C%8D%E5%8A%A1.md"]],["v-36cf8589","/pc/%E5%AE%89%E8%A3%85WSA-%E6%BF%80%E6%B4%BBGPU-%E5%8F%8C%E5%87%BB%E5%AE%89%E8%A3%85APK.html",{a:"xlc520",d:"2022-02-11T00:00:00.000Z",l:"2022年2月11日",c:["other"],g:["other"],e:`<h1> 安装WSA-激活GPU-双击安装APK</h1>
<p>仅支持Windows11（包含正式版、RP、Beta、Dev）
》》》 目 录 《《《
1.安装WSA本体（必装）
2.激活GPU（普通用户请跳过！！！）
3.安装“安装程序”（选装）
4.安装ADB（选装）
5.安装Android应用
6.卸载Android应用
7.注意事项
8.参考链接</p>
<p>【1 安装WSA本体】
-
① 微软商店程序抓包网址： <a href="https://store.rg-adguard.net/" target="_blank" rel="noopener noreferrer">查看链接</a>
② WSA微软商店链接： <a href="https://www.microsoft.com/store/productId/9P3395VX91NR" target="_blank" rel="noopener noreferrer">查看链接</a>
-
1.打开①链接，在输入框中输入②，选择Slow通道，确认，下载最底下的"MicrosoftCorporationII.WindowsSubsystemForAndroid_1.7.32815.0_neutral_~_8wekyb3d8bbwe.msixbundle"
(注：四个选项与Windows渠道相对应，Fast-Dev渠道，Slow-Beta渠道，RP-RP渠道和Retail-正式版，目前只有Beta版本有发布)</p>`,r:{minutes:5.6,words:1680},y:"a",title:"安装WSA-激活GPU-双击安装APK",i:"type"},["/pc/安装WSA-激活GPU-双击安装APK.html","/pc/%E5%AE%89%E8%A3%85WSA-%E6%BF%80%E6%B4%BBGPU-%E5%8F%8C%E5%87%BB%E5%AE%89%E8%A3%85APK","/pc/安装WSA-激活GPU-双击安装APK.md","/pc/%E5%AE%89%E8%A3%85WSA-%E6%BF%80%E6%B4%BBGPU-%E5%8F%8C%E5%87%BB%E5%AE%89%E8%A3%85APK.md"]],["v-ef9ffcba","/pc/%E6%96%B0%E7%89%88%E6%9C%ACEdge%E6%8F%90%E7%A4%BA%E7%94%B1%E4%BD%A0%E7%9A%84%E7%BB%84%E7%BB%87%E7%AE%A1%E7%90%86.html",{a:"xlc520",d:"2022-03-29T00:00:00.000Z",l:"2022年3月29日",c:["pc"],g:["pc"],e:`<h2> 新版本Edge提示由你的组织管理，如何取消 ？</h2>
<p>答：1、按“WIN+R”组合键，输入<code>regedit.exe</code>打开注册表</p>
<p>2.找到路径<code>HKEY_LOCAL_MACHINE\\SOFTWARE\\Policies\\Microsoft\\Edge </code></p>
<p>3.把其中的SmartScreenEnabled和SmartScreenPuaEnabled两项删除</p>
<p>4.将edge浏览器关闭重新打开。</p>
`,r:{minutes:.35,words:104},y:"a",title:"电脑故障问题解决",i:"computer"},["/pc/新版本Edge提示由你的组织管理.html","/pc/%E6%96%B0%E7%89%88%E6%9C%ACEdge%E6%8F%90%E7%A4%BA%E7%94%B1%E4%BD%A0%E7%9A%84%E7%BB%84%E7%BB%87%E7%AE%A1%E7%90%86","/pc/新版本Edge提示由你的组织管理.md","/pc/%E6%96%B0%E7%89%88%E6%9C%ACEdge%E6%8F%90%E7%A4%BA%E7%94%B1%E4%BD%A0%E7%9A%84%E7%BB%84%E7%BB%87%E7%AE%A1%E7%90%86.md"]],["v-02df1f96","/pc/%E6%BF%80%E6%B4%BB%E7%A0%81.html",{a:"xlc520",d:"2022-03-28T00:00:00.000Z",l:"2022年3月28日",c:["pc"],g:["pc"],e:`<h1> 激活码</h1>
<h2> Windows</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>VK7JG-NPHTM-C97JM-9MPGT-3V66T
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.11,words:34},y:"a",title:"激活码",i:"type"},["/pc/激活码.html","/pc/%E6%BF%80%E6%B4%BB%E7%A0%81","/pc/激活码.md","/pc/%E6%BF%80%E6%B4%BB%E7%A0%81.md"]],["v-249a6012","/pc/%E8%A7%A3%E5%86%B3%E6%B5%8F%E8%A7%88%E5%99%A8%E8%B7%A8%E5%9F%9F%E9%97%AE%E9%A2%98.html",{a:"xlc520",d:"2022-11-11T00:00:00.000Z",l:"2022年11月11日",c:["pc"],g:["pc"],e:`<h1> 解决浏览器跨域问题</h1>
<p>使用谷歌打开，报了如下跨域问题</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>Access to XMLHttpRequest at 'http://***:19196/OpenDevice&amp;t=0.8008294784459418' from origin 'http://**.cn' has been blocked by CORS policy: The request client is not a secure context and the resource is in more-private address space \`local\`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.78,words:235},y:"a",title:"解决浏览器跨域问题",i:"computer"},["/pc/解决浏览器跨域问题.html","/pc/%E8%A7%A3%E5%86%B3%E6%B5%8F%E8%A7%88%E5%99%A8%E8%B7%A8%E5%9F%9F%E9%97%AE%E9%A2%98","/pc/解决浏览器跨域问题.md","/pc/%E8%A7%A3%E5%86%B3%E6%B5%8F%E8%A7%88%E5%99%A8%E8%B7%A8%E5%9F%9F%E9%97%AE%E9%A2%98.md"]],["v-440dee74","/script/Alist%E5%B8%B8%E7%94%A8%E6%A0%B7%E5%BC%8F%E4%BB%A3%E7%A0%81.html",{a:"xlc520",d:"2022-10-21T00:00:00.000Z",l:"2022年10月21日",c:["Script"],g:["Script","Alist"],e:`<h1> Alist常用样式代码</h1>
<h2> 黑猫：</h2>
<div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code> 
<span class="token selector">&lt;!--看板娘 - 黑猫--&gt;
    &lt;script src="https://eqcn.ajz.miesnfu.com/wp-content/plugins/wp-3d-pony/live2dw/lib/L2Dwidget.min.js"&gt;&lt;/script&gt;
    &lt;script&gt;
      L2Dwidget.init(</span><span class="token punctuation">{</span>
        <span class="token string">"model"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
          <span class="token property">jsonPath</span><span class="token punctuation">:</span> <span class="token string">"https://unpkg.com/live2d-widget-model-hijiki/assets/hijiki.model.json"</span><span class="token punctuation">,</span> &lt;!--这里改模型，前面后面都要改--&gt;
          <span class="token string">"scale"</span><span class="token punctuation">:</span> 1
        <span class="token punctuation">}</span><span class="token selector">,
        "display":</span> <span class="token punctuation">{</span>
          <span class="token string">"position"</span><span class="token punctuation">:</span> <span class="token string">"left"</span><span class="token punctuation">,</span> &lt;!--设置看板娘的上下左右位置--&gt;
          <span class="token string">"width"</span><span class="token punctuation">:</span> 100<span class="token punctuation">,</span>
          <span class="token string">"height"</span><span class="token punctuation">:</span> 200<span class="token punctuation">,</span>
          <span class="token string">"hOffset"</span><span class="token punctuation">:</span> 0<span class="token punctuation">,</span>
          <span class="token string">"vOffset"</span><span class="token punctuation">:</span> 0
        <span class="token punctuation">}</span><span class="token selector">,
        "mobile":</span> <span class="token punctuation">{</span>
          <span class="token string">"show"</span><span class="token punctuation">:</span> true<span class="token punctuation">,</span>
          <span class="token string">"scale"</span><span class="token punctuation">:</span> 0.5
        <span class="token punctuation">}</span><span class="token selector">,
        "react":</span> <span class="token punctuation">{</span>
          <span class="token string">"opacityDefault"</span><span class="token punctuation">:</span> 0.7<span class="token punctuation">,</span> &lt;!--设置透明度--&gt;
          <span class="token string">"opacityOnHover"</span><span class="token punctuation">:</span> 0.2
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token selector">window.onload = function()</span> <span class="token punctuation">{</span>
        $<span class="token punctuation">(</span><span class="token string">"#live2dcanvas"</span><span class="token punctuation">)</span>.<span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">"style"</span><span class="token punctuation">,</span> <span class="token string">"position: fixed; opacity: 0.7; left: 70px; bottom: 0px; z-index: 1; pointer-events: none;"</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    &lt;/script&gt;
  &lt;/div&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.74,words:1123},y:"a",title:"Alist常用样式代码",i:"script"},["/script/Alist常用样式代码.html","/script/Alist%E5%B8%B8%E7%94%A8%E6%A0%B7%E5%BC%8F%E4%BB%A3%E7%A0%81","/script/Alist常用样式代码.md","/script/Alist%E5%B8%B8%E7%94%A8%E6%A0%B7%E5%BC%8F%E4%BB%A3%E7%A0%81.md"]],["v-464c88aa","/script/",{a:"xlc520",d:"2022-01-03T00:00:00.000Z",l:"2022年1月3日",c:["Script"],g:["Script"],e:`<p align="center"> 
  <img src="https://metrics.lecoq.io/xlc520?template=classic&amp;isocalendar=1&amp;languages=1&amp;people=1&amp;activity=1&amp;achievements=1&amp;lines=1&amp;repositories=1&amp;notable=1&amp;introduction=1&amp;pagespeed=1&amp;repositories=100&amp;repositories.batch=100&amp;repositories.forks=false&amp;repositories.affiliations=owner&amp;isocalendar.duration=full-year&amp;languages.limit=8&amp;languages.threshold=0%&amp;languages.colors=github&amp;languages.sections=most-used&amp;languages.indepth=false&amp;languages.analysis.timeout=15&amp;languages.categories=markup%2C programming&amp;languages.recent.categories=markup%2C programming&amp;languages.recent.load=300&amp;languages.recent.days=14&amp;people.limit=24&amp;people.identicons=false&amp;people.identicons.hide=false&amp;people.size=28&amp;people.types=followers%2C following&amp;people.shuffle=false&amp;activity.limit=5&amp;activity.load=300&amp;activity.days=14&amp;activity.visibility=all&amp;activity.timestamps=false&amp;activity.filter=all&amp;achievements.threshold=C&amp;achievements.secrets=true&amp;achievements.display=detailed&amp;achievements.limit=0&amp;notable.from=organization&amp;notable.repositories=false&amp;notable.indepth=false&amp;notable.types=commit&amp;repositories.featured= xlc520%2Fxlc520.github.io&amp;introduction.title=true&amp;pagespeed.url=xlc520.github.io&amp;pagespeed.detailed=false&amp;pagespeed.screenshot=false&amp;config.timezone=Asia%2FShanghai"> 
</p>`,r:{minutes:.54,words:163},y:"a",title:"Script",i:"script"},["/script/index.html","/script/README.md"]],["v-6d51fcc4","/script/repository.html",{a:"xlc520",d:"2022-01-03T00:00:00.000Z",l:"2022年1月3日",c:["Script"],g:["Script"],e:`<h1> 京东脚本仓库</h1>
<p>2022年2月8日
<a href="https://github.com/danteswx/fxxk" target="_blank" rel="noopener noreferrer">https://github.com/danteswx/fxxk</a></p>
<p><a href="https://github.com/woaim65/Oz" target="_blank" rel="noopener noreferrer">https://github.com/woaim65/Oz</a></p>
<p><a href="https://github.com/xdhgsq/xdh" target="_blank" rel="noopener noreferrer">https://github.com/xdhgsq/xdh</a></p>`,r:{minutes:1.6,words:481},y:"a",title:"京东脚本仓库",i:"type"},["/script/repository","/script/repository.md"]],["v-15b1d789","/script/%E4%BD%BF%E7%94%A8CloudFlareWorkers%E5%8F%8D%E4%BB%A3%E7%BD%91%E7%AB%99.html",{a:"xlc520",d:"2022-06-09T00:00:00.000Z",l:"2022年6月9日",c:["Script"],g:["Github","Google"],e:`<h1> 使用CloudFlareWorkers反代网站</h1>
<p>给出三种反代源码。</p>
<h2> 镜像整个网站</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 替换成你想镜像的站点</span>
<span class="token keyword">const</span> upstream <span class="token operator">=</span> <span class="token string">'www.google.com'</span>
 
<span class="token comment">// 如果那个站点有专门的移动适配站点，否则保持和上面一致</span>
<span class="token keyword">const</span> upstream_mobile <span class="token operator">=</span> <span class="token string">'www.google.com'</span>
 
<span class="token comment">// 你希望禁止哪些国家访问</span>
<span class="token keyword">const</span> blocked_region <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'RU'</span><span class="token punctuation">]</span>
 
<span class="token comment">// 禁止自访问</span>
<span class="token keyword">const</span> blocked_ip_address <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'0.0.0.0'</span><span class="token punctuation">,</span> <span class="token string">'127.0.0.1'</span><span class="token punctuation">]</span>
 
<span class="token comment">// 替换成你想镜像的站点</span>
<span class="token keyword">const</span> replace_dict <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string-property property">'$upstream'</span><span class="token operator">:</span> <span class="token string">'$custom_domain'</span><span class="token punctuation">,</span>
    <span class="token string-property property">'//www.google.com'</span><span class="token operator">:</span> <span class="token string">''</span>
<span class="token punctuation">}</span>
 
<span class="token comment">//以下内容都不用动</span>
<span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'fetch'</span><span class="token punctuation">,</span> <span class="token parameter">event</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span><span class="token function">fetchAndApply</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
 
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchAndApply</span><span class="token punctuation">(</span><span class="token parameter">request</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 
    <span class="token keyword">const</span> region <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'cf-ipcountry'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> ip_address <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'cf-connecting-ip'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> user_agent <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'user-agent'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
    <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>request<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> url_host <span class="token operator">=</span> url<span class="token punctuation">.</span>host<span class="token punctuation">;</span>
 
    <span class="token keyword">if</span> <span class="token punctuation">(</span>url<span class="token punctuation">.</span>protocol <span class="token operator">==</span> <span class="token string">'http:'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        url<span class="token punctuation">.</span>protocol <span class="token operator">=</span> <span class="token string">'https:'</span>
        response <span class="token operator">=</span> Response<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> response<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">await</span> <span class="token function">device_status</span><span class="token punctuation">(</span>user_agent<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        upstream_domain <span class="token operator">=</span> upstream
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        upstream_domain <span class="token operator">=</span> upstream_mobile
    <span class="token punctuation">}</span>
 
    url<span class="token punctuation">.</span>host <span class="token operator">=</span> upstream_domain<span class="token punctuation">;</span>
 
    <span class="token keyword">if</span> <span class="token punctuation">(</span>blocked_region<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>region<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        response <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">'Access denied: WorkersProxy is not available in your region yet.'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">403</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>blocked_ip_address<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>ip_address<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        response <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span><span class="token string">'Access denied: Your IP address is blocked by WorkersProxy.'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">403</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token keyword">let</span> method <span class="token operator">=</span> request<span class="token punctuation">.</span>method<span class="token punctuation">;</span>
        <span class="token keyword">let</span> request_headers <span class="token operator">=</span> request<span class="token punctuation">.</span>headers<span class="token punctuation">;</span>
        <span class="token keyword">let</span> new_request_headers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span>request_headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        new_request_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'Host'</span><span class="token punctuation">,</span> upstream_domain<span class="token punctuation">)</span><span class="token punctuation">;</span>
        new_request_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'Referer'</span><span class="token punctuation">,</span> url<span class="token punctuation">.</span>href<span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token keyword">let</span> original_response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">.</span>href<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">method</span><span class="token operator">:</span> method<span class="token punctuation">,</span>
            <span class="token literal-property property">headers</span><span class="token operator">:</span> new_request_headers
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
 
        <span class="token keyword">let</span> original_response_clone <span class="token operator">=</span> original_response<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> original_text <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> response_headers <span class="token operator">=</span> original_response<span class="token punctuation">.</span>headers<span class="token punctuation">;</span>
        <span class="token keyword">let</span> new_response_headers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Headers</span><span class="token punctuation">(</span>response_headers<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">let</span> status <span class="token operator">=</span> original_response<span class="token punctuation">.</span>status<span class="token punctuation">;</span>
 
        new_response_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'access-control-allow-origin'</span><span class="token punctuation">,</span> <span class="token string">'*'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        new_response_headers<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'access-control-allow-credentials'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        new_response_headers<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">'content-security-policy'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        new_response_headers<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">'content-security-policy-report-only'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        new_response_headers<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">'clear-site-data'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
        <span class="token keyword">const</span> content_type <span class="token operator">=</span> new_response_headers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'content-type'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>content_type<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'text/html'</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> content_type<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">'UTF-8'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            original_text <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">replace_response_text</span><span class="token punctuation">(</span>original_response_clone<span class="token punctuation">,</span> upstream_domain<span class="token punctuation">,</span> url_host<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            original_text <span class="token operator">=</span> original_response_clone<span class="token punctuation">.</span>body
        <span class="token punctuation">}</span>
 
        response <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Response</span><span class="token punctuation">(</span>original_text<span class="token punctuation">,</span> <span class="token punctuation">{</span>
            status<span class="token punctuation">,</span>
            <span class="token literal-property property">headers</span><span class="token operator">:</span> new_response_headers
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> response<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">replace_response_text</span><span class="token punctuation">(</span><span class="token parameter">response<span class="token punctuation">,</span> upstream_domain<span class="token punctuation">,</span> host_name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
 
    <span class="token keyword">var</span> i<span class="token punctuation">,</span> j<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token keyword">in</span> replace_dict<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        j <span class="token operator">=</span> replace_dict<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">'$upstream'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            i <span class="token operator">=</span> upstream_domain
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">'$custom_domain'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            i <span class="token operator">=</span> host_name
        <span class="token punctuation">}</span>
 
        <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token string">'$upstream'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            j <span class="token operator">=</span> upstream_domain
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token string">'$custom_domain'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            j <span class="token operator">=</span> host_name
        <span class="token punctuation">}</span>
 
        <span class="token keyword">let</span> re <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token string">'g'</span><span class="token punctuation">)</span>
        text <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span>re<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> text<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">device_status</span> <span class="token punctuation">(</span><span class="token parameter">user_agent_info</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> agents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"Android"</span><span class="token punctuation">,</span> <span class="token string">"iPhone"</span><span class="token punctuation">,</span> <span class="token string">"SymbianOS"</span><span class="token punctuation">,</span> <span class="token string">"Windows Phone"</span><span class="token punctuation">,</span> <span class="token string">"iPad"</span><span class="token punctuation">,</span> <span class="token string">"iPod"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> v <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> v <span class="token operator">&lt;</span> agents<span class="token punctuation">.</span>length<span class="token punctuation">;</span> v<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>user_agent_info<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>agents<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> flag<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:4.96,words:1489},y:"a",title:"使用CloudFlareWorkers反代网站",i:"script"},["/script/使用CloudFlareWorkers反代网站.html","/script/%E4%BD%BF%E7%94%A8CloudFlareWorkers%E5%8F%8D%E4%BB%A3%E7%BD%91%E7%AB%99","/script/使用CloudFlareWorkers反代网站.md","/script/%E4%BD%BF%E7%94%A8CloudFlareWorkers%E5%8F%8D%E4%BB%A3%E7%BD%91%E7%AB%99.md"]],["v-4155ce3c","/script/%E8%84%9A%E6%9C%AC%E4%BB%93%E5%BA%93.html",{a:"xlc520",d:"2022-01-04T00:00:00.000Z",l:"2022年1月4日",c:["Script"],g:["Script"],e:`<h1> 脚本仓库</h1>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>https://git.spiritlhl.workers.dev/o0oo0ooo0/EUserv_extend

https://hub.fastgit.org/xbt370/Collection

https://hub.fastgit.org/qcasxy/MagicCodes

https://hub.fastgit.org/gitk01n/Youth

https://hub.fastgit.org/GANHAOXIANG/zhongqing

https://hub.fastgit.org/caixukun112/js


<span class="token function">bash</span> <span class="token operator">&lt;</span><span class="token punctuation">(</span><span class="token function">curl</span> <span class="token parameter variable">-L</span> https://raw.fastgit.org/v2fly/fhs-install-v2ray/master/install-release.sh<span class="token punctuation">)</span>

https://github.com/Tsukasa007/my_script.git

https://github.com/F-19-F/XM_BBS

https://github.com/ClassmateLin/jd_scripts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.27,words:82},y:"a",title:"脚本仓库",i:"type"},["/script/脚本仓库.html","/script/%E8%84%9A%E6%9C%AC%E4%BB%93%E5%BA%93","/script/脚本仓库.md","/script/%E8%84%9A%E6%9C%AC%E4%BB%93%E5%BA%93.md"]],["v-f3213f92","/source_code/",{a:"xlc520",d:"2022-01-20T00:00:00.000Z",l:"2022年1月20日",c:["Code"],g:["Code"],e:`<p align="center"> 
  <img src="https://metrics.lecoq.io/xlc520?template=classic&amp;isocalendar=1&amp;languages=1&amp;people=1&amp;activity=1&amp;achievements=1&amp;lines=1&amp;repositories=1&amp;notable=1&amp;introduction=1&amp;pagespeed=1&amp;repositories=100&amp;repositories.batch=100&amp;repositories.forks=false&amp;repositories.affiliations=owner&amp;isocalendar.duration=full-year&amp;languages.limit=8&amp;languages.threshold=0%&amp;languages.colors=github&amp;languages.sections=most-used&amp;languages.indepth=false&amp;languages.analysis.timeout=15&amp;languages.categories=markup%2C programming&amp;languages.recent.categories=markup%2C programming&amp;languages.recent.load=300&amp;languages.recent.days=14&amp;people.limit=24&amp;people.identicons=false&amp;people.identicons.hide=false&amp;people.size=28&amp;people.types=followers%2C following&amp;people.shuffle=false&amp;activity.limit=5&amp;activity.load=300&amp;activity.days=14&amp;activity.visibility=all&amp;activity.timestamps=false&amp;activity.filter=all&amp;achievements.threshold=C&amp;achievements.secrets=true&amp;achievements.display=detailed&amp;achievements.limit=0&amp;notable.from=organization&amp;notable.repositories=false&amp;notable.indepth=false&amp;notable.types=commit&amp;repositories.featured= xlc520%2Fxlc520.github.io&amp;introduction.title=true&amp;pagespeed.url=xlc520.github.io&amp;pagespeed.detailed=false&amp;pagespeed.screenshot=false&amp;config.timezone=Asia%2FShanghai"> 
</p>`,r:{minutes:.55,words:165},y:"a",title:"Code",i:"code"},["/source_code/index.html","/source_code/README.md"]],["v-6e25be61","/source_code/admin.html",{a:"xlc520",d:"2022-01-21T00:00:00.000Z",l:"2022年1月21日",c:["Code"],g:["Code"],e:`<h1> 开源后台管理项目</h1>
<h3> 时间：2022年5月16日</h3>
<p><strong>1. D2admin</strong></p>
<p>开源地址：<a href="https://github.com/d2-projects/d2-admin" target="_blank" rel="noopener noreferrer">https://github.com/d2-projects/d2-admin</a></p>
<p>文档地址：<a href="https://d2.pub/zh/doc/d2-admin/" target="_blank" rel="noopener noreferrer">https://d2.pub/zh/doc/d2-admin/</a></p>`,r:{minutes:3.21,words:962},y:"a",title:"开源后台管理项目",i:"type"},["/source_code/admin","/source_code/admin.md"]],["v-ff088e9c","/source_code/%E5%9B%BD%E5%86%85%E5%B8%B8%E7%94%A8%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90CDN%E5%85%AC%E5%85%B1%E5%BA%93.html",{a:"xlc520",d:"2022-03-06T00:00:00.000Z",l:"2022年3月6日",c:["Code"],g:["Code","CDN"],e:`<h1> 国内常用静态资源 CDN 公共库加速服务</h1>
<p>CDN的全称是Content Delivery Network，即内容分发网络。其基本思路是尽可能避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定。通过在网络各处放置节点服务器所构成的在现有的互联网基础之上的一层智能虚拟网络，CDN系统能够实时地根据网络流量和各节点的连接、负载状况以及到用户的距离和响应时间等综合信息将用户的请求重新导向离用户最近的服务节点上。其目的是使用户可就近取得所需内容，解决 Internet网络拥挤的状况，提高用户访问网站的响应速度。</p>
<p><strong>1.BootCDN</strong></p>`,r:{minutes:4.34,words:1303},y:"a",title:"国内常用静态资源 CDN 公共库",i:"type"},["/source_code/国内常用静态资源CDN公共库.html","/source_code/%E5%9B%BD%E5%86%85%E5%B8%B8%E7%94%A8%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90CDN%E5%85%AC%E5%85%B1%E5%BA%93","/source_code/国内常用静态资源CDN公共库.md","/source_code/%E5%9B%BD%E5%86%85%E5%B8%B8%E7%94%A8%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90CDN%E5%85%AC%E5%85%B1%E5%BA%93.md"]],["v-1a7ea05d","/source_code/%E5%BC%80%E6%BA%90%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F.html",{a:"xlc520",d:"2022-02-06T00:00:00.000Z",l:"2022年2月6日",c:["other"],g:["other"],e:`<h1> 开源后台管理系统</h1>
<p><strong>1. D2admin</strong></p>
<p>开源地址：<a href="https://github.com/d2-projects/d2-admin" target="_blank" rel="noopener noreferrer">https://github.com/d2-projects/d2-admin</a></p>
<p>文档地址：<a href="https://d2.pub/zh/doc/d2-admin/" target="_blank" rel="noopener noreferrer">https://d2.pub/zh/doc/d2-admin/</a></p>`,r:{minutes:2.03,words:608},y:"a",title:"开源后台管理系统",i:"type"},["/source_code/开源后台管理系统.html","/source_code/%E5%BC%80%E6%BA%90%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F","/source_code/开源后台管理系统.md","/source_code/%E5%BC%80%E6%BA%90%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F.md"]],["v-d7188082","/study/",{a:"xlc520",d:"2022-01-01T00:00:00.000Z",l:"2022年1月1日",c:["Study"],g:["Study"],e:`<p align="center"> 
  <img src="https://metrics.lecoq.io/xlc520?template=classic&amp;isocalendar=1&amp;languages=1&amp;people=1&amp;activity=1&amp;achievements=1&amp;lines=1&amp;repositories=1&amp;notable=1&amp;introduction=1&amp;pagespeed=1&amp;repositories=100&amp;repositories.batch=100&amp;repositories.forks=false&amp;repositories.affiliations=owner&amp;isocalendar.duration=full-year&amp;languages.limit=8&amp;languages.threshold=0%&amp;languages.colors=github&amp;languages.sections=most-used&amp;languages.indepth=false&amp;languages.analysis.timeout=15&amp;languages.categories=markup%2C programming&amp;languages.recent.categories=markup%2C programming&amp;languages.recent.load=300&amp;languages.recent.days=14&amp;people.limit=24&amp;people.identicons=false&amp;people.identicons.hide=false&amp;people.size=28&amp;people.types=followers%2C following&amp;people.shuffle=false&amp;activity.limit=5&amp;activity.load=300&amp;activity.days=14&amp;activity.visibility=all&amp;activity.timestamps=false&amp;activity.filter=all&amp;achievements.threshold=C&amp;achievements.secrets=true&amp;achievements.display=detailed&amp;achievements.limit=0&amp;notable.from=organization&amp;notable.repositories=false&amp;notable.indepth=false&amp;notable.types=commit&amp;repositories.featured= xlc520%2Fxlc520.github.io&amp;introduction.title=true&amp;pagespeed.url=xlc520.github.io&amp;pagespeed.detailed=false&amp;pagespeed.screenshot=false&amp;config.timezone=Asia%2FShanghai"> 
</p>`,r:{minutes:.54,words:163},y:"a",title:"Study",i:"note"},["/study/index.html","/study/README.md"]],["v-d2576f5c","/study/form%E8%A1%A8%E5%8D%95%E7%B3%BB%E7%BB%9F.html",{a:"xlc520",d:"2022-01-01T00:00:00.000Z",l:"2022年1月1日",c:["Study"],g:["Study"],e:`<h1> 表单系统</h1>
<blockquote>
<p>包括了前端 和 后端</p>
</blockquote>
<p>Variant Form</p>
<p>🚀一款高效的Vue 2低代码表单，可视化设计，一键生成源码</p>
<p><a href="https://www.vform666.com/" target="_blank" rel="noopener noreferrer">https://www.vform666.com/</a></p>
<p>Element UI表单设计及代码生成器</p>
<p><a href="jakhuang.github.io/form-generator">jakhuang.github.io/form-generator</a></p>`,r:{minutes:.91,words:274},y:"a",title:"表单系统",i:"type"},["/study/form表单系统.html","/study/form%E8%A1%A8%E5%8D%95%E7%B3%BB%E7%BB%9F","/study/form表单系统.md","/study/form%E8%A1%A8%E5%8D%95%E7%B3%BB%E7%BB%9F.md"]],["v-1bf8f71d","/study/vuepress.html",{a:"xlc520",d:"2022-01-02T00:00:00.000Z",l:"2022年1月2日",c:["Study"],g:["Study"],e:`<h1> VuePress 学习</h1>
<h2> VuePress  Vue 驱动的静态网站生成器</h2>
<p><a href="https://vuepress.vuejs.org/" target="_blank" rel="noopener noreferrer">https://vuepress.vuejs.org/</a></p>
<h2> vuepress-theme-hope</h2>
<p><a href="https://vuepress-theme-hope.github.io/" target="_blank" rel="noopener noreferrer">https://vuepress-theme-hope.github.io/</a></p>`,r:{minutes:.63,words:189},y:"a",title:"VuePress 学习",i:"type"},["/study/vuepress","/study/vuepress.md"]],["v-7f4f380c","/tools/API.html",{a:"xlc520",d:"2022-01-12T00:00:00.000Z",l:"2022年1月12日",c:["Tools"],g:["Tools","API"],e:`<h1> API</h1>
<h2> hutool</h2>
<p>一个小而全的 Java 工具类库，通过静态方法封装，并提供详细完整的中文文档和注释，使Java拥有函数式语言般的优雅。</p>
<p><a href="https://hutool.cn/" target="_blank" rel="noopener noreferrer">https://hutool.cn/</a></p>
<h2> apipost</h2>
<p><a href="https://www.apipost.cn/" target="_blank" rel="noopener noreferrer">https://www.apipost.cn/</a></p>`,r:{minutes:.77,words:231},y:"a",title:"API",i:"type"},["/tools/API","/tools/API.md"]],["v-d440f426","/tools/",{a:"xlc520",d:"2022-01-07T00:00:00.000Z",l:"2022年1月7日",c:["Tools"],g:["Tools"],e:`<p align="center"> 
  <img src="https://metrics.lecoq.io/xlc520?template=classic&amp;isocalendar=1&amp;languages=1&amp;people=1&amp;activity=1&amp;achievements=1&amp;lines=1&amp;repositories=1&amp;notable=1&amp;introduction=1&amp;pagespeed=1&amp;repositories=100&amp;repositories.batch=100&amp;repositories.forks=false&amp;repositories.affiliations=owner&amp;isocalendar.duration=full-year&amp;languages.limit=8&amp;languages.threshold=0%&amp;languages.colors=github&amp;languages.sections=most-used&amp;languages.indepth=false&amp;languages.analysis.timeout=15&amp;languages.categories=markup%2C programming&amp;languages.recent.categories=markup%2C programming&amp;languages.recent.load=300&amp;languages.recent.days=14&amp;people.limit=24&amp;people.identicons=false&amp;people.identicons.hide=false&amp;people.size=28&amp;people.types=followers%2C following&amp;people.shuffle=false&amp;activity.limit=5&amp;activity.load=300&amp;activity.days=14&amp;activity.visibility=all&amp;activity.timestamps=false&amp;activity.filter=all&amp;achievements.threshold=C&amp;achievements.secrets=true&amp;achievements.display=detailed&amp;achievements.limit=0&amp;notable.from=organization&amp;notable.repositories=false&amp;notable.indepth=false&amp;notable.types=commit&amp;repositories.featured= xlc520%2Fxlc520.github.io&amp;introduction.title=true&amp;pagespeed.url=xlc520.github.io&amp;pagespeed.detailed=false&amp;pagespeed.screenshot=false&amp;config.timezone=Asia%2FShanghai"> 
</p>`,r:{minutes:.55,words:165},y:"a",title:"Tools",i:"tool"},["/tools/index.html","/tools/README.md"]],["v-3cf546d5","/tools/SSH%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%BD%AF%E4%BB%B6.html",{a:"xlc520",d:"2022-01-09T00:00:00.000Z",l:"2022年1月9日",c:["Tools"],g:["Tools"],e:`<h1> SSH客户端软件</h1>
<p>SSH客户端是在管理和配置Linux服务器用到很多的软件了，一款好的SSH管理软件不但可以让你更好地执行<a href="https://www.v1tx.com/post/linux-commands/" target="_blank" rel="noopener noreferrer">Linux命令</a>，对于工作效率的提升也是非常明显，在本文中我们就来介绍几款非常好用的SSH客户端软件</p>
<h2> Xshell</h2>
<p>Xshell Plus Linux连接SSH工具 v7.0.0092 特别版</p>
<p><a href="https://lanzoui.com/b010yn1di" target="_blank" rel="noopener noreferrer">https://lanzoui.com/b010yn1di</a></p>`,r:{minutes:6.66,words:1997},y:"a",title:"SSH客户端软件",i:"type"},["/tools/SSH客户端软件.html","/tools/SSH%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%BD%AF%E4%BB%B6","/tools/SSH客户端软件.md","/tools/SSH%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%BD%AF%E4%BB%B6.md"]],["v-6726240a","/tools/develop-tools.html",{a:"xlc520",d:"2022-01-11T00:00:00.000Z",l:"2022年1月11日",c:["Tools"],g:["Tools"],e:`<h1> 12 个后端开发工具</h1>
<p>从手动编码到自动化，从重复工作到创新，开发人员工具随着技术的发展而不断发展。阿里巴巴集团和阿里巴巴云已通过开源发布和基于云的实施向公众提供其技术。通过在各种业务场景中的多年开发积累了这些技术。本文介绍了一些阿里巴巴开发人员工具，希望它们可以帮助您的开发过程更加高效和优雅。</p>
<p>鉴于开发人员可能参与的技术分支的多样性，本文介绍了一些可能对后端开发人员有用的工具。</p>
<h2> 1.阿尔萨斯Java在线诊断工具</h2>
<p>Arthas是一款用于Java应用程序的在线诊断工具，由阿里巴巴于2018年9月开源。</p>
<p>典型场景：</p>`,r:{minutes:7.04,words:2112},y:"a",title:"12 个后端开发工具",i:"type"},["/tools/develop-tools","/tools/develop-tools.md"]],["v-5239b90e","/tools/lenovo.html",{a:"xlc520",d:"2022-01-10T00:00:00.000Z",l:"2022年1月10日",c:["Tools"],g:["Tools"],e:`<h1> Lenovo</h1>
<h2> 联想工程师204个内部专用工具</h2>
<p><a href="http://u7.1.xainjo.com/pc/lxzyxgj.zip" target="_blank" rel="noopener noreferrer">http://u7.1.xainjo.com/pc/lxzyxgj.zip</a></p>
`,r:{minutes:.16,words:47},y:"a",title:"Lenovo联想",i:"type"},["/tools/lenovo","/tools/lenovo.md"]],["v-f4cfda76","/tools/software.html",{a:"xlc520",d:"2022-01-09T00:00:00.000Z",l:"2022年1月9日",c:["Tools"],g:["Tools"],e:`<h1> 各种软件</h1>
<h2> 2022年6月12日</h2>
<p>1.数据贴图工具：Snipaste：<a href="https://www.snipaste.com/" target="_blank" rel="noopener noreferrer">https://www.snipaste.com/</a></p>
<p>2.快速抠图，一键智能抠图工具：<a href="https://www.6pian.cn/koutu.html" target="_blank" rel="noopener noreferrer">https://www.6pian.cn/koutu.html</a></p>`,r:{minutes:2.06,words:619},y:"a",title:"各种软件",i:"type"},["/tools/software","/tools/software.md"]],["v-0289e456","/tools/%E5%85%8D%E8%B4%B9%E6%80%9D%E7%BB%B4%E5%AF%BC%E5%9B%BE.html",{a:"xlc520",d:"2022-03-11T00:00:00.000Z",l:"2022年3月11日",c:["Tools"],g:["Tools"],e:`<h1> 免费思维导图</h1>
<h2> 一、知犀思维导图</h2>
<p>这个工具在今年1月1号开年的日推“2021效率工具，年度榜单，为你精选了10个”就提到过，是一款好用到用户相见恨晚的工具。支持MacOS 、 Windows、和手机APP( iOS 与 Android ) 四个平台的同步。</p>
<figure><img src="https://mmbiz.qpic.cn/mmbiz_png/HautRxjCevtAsr1HxFp2hQvRhsPMFnPX4X8l1rBMRAfiakNFdMI2bRR8icc4BgpaDreFRyqaFJs4tCUdAfCDwjsw/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure>`,r:{minutes:5.56,words:1669},y:"a",title:"免费思维导图",i:"type"},["/tools/免费思维导图.html","/tools/%E5%85%8D%E8%B4%B9%E6%80%9D%E7%BB%B4%E5%AF%BC%E5%9B%BE","/tools/免费思维导图.md","/tools/%E5%85%8D%E8%B4%B9%E6%80%9D%E7%BB%B4%E5%AF%BC%E5%9B%BE.md"]],["v-51defb2f","/tools/%E5%9C%A8%E7%BA%BF%E4%B8%87%E8%83%BD%E6%9F%A5%E8%AF%A2%E5%92%8C%E5%9C%A8%E7%BA%BF%E5%B7%A5%E5%85%B7.html",{a:"xlc520",d:"2022-02-28T00:00:00.000Z",l:"2022年2月28日",c:["Tools"],g:["Tools"],e:`<h1> 在线万能查询和在线工具（时效未知）</h1>
<ol>
<li>虫部落引擎大全（搜索）：<a href="http://search.chongbuluo.com/" target="_blank" rel="noopener noreferrer">http://search.chongbuluo.com/</a></li>
<li>虫部落引擎大全（云盘）：<a href="http://magnet.chongbuluo.com/" target="_blank" rel="noopener noreferrer">http://magnet.chongbuluo.com/</a></li>
<li>虫部落引擎大全（学术）：<a href="http://scholar.chongbuluo.com/" target="_blank" rel="noopener noreferrer">http://scholar.chongbuluo.com/</a></li>
<li>虫部落引擎大全（数据挖掘）：<a href="http://data.chongbuluo.com/" target="_blank" rel="noopener noreferrer">http://data.chongbuluo.com/</a></li>
<li>虫部落引擎大全（图片）：<a href="http://image.chongbuluo.com/" target="_blank" rel="noopener noreferrer">http://image.chongbuluo.com/</a></li>
<li>虫部落引擎大全（404Bus）：<a href="http://www.404car.com/" target="_blank" rel="noopener noreferrer">http://www.404car.com/</a></li>
<li>Google简体中文1（搜索镜像）：<a href="https://coderschool.2345.ga/" target="_blank" rel="noopener noreferrer">https://coderschool.2345.ga/</a></li>
<li>Google简体中文2（搜索镜像）：<a href="https://g.codery.ga/" target="_blank" rel="noopener noreferrer">https://g.codery.ga/</a></li>
<li>Google简体中文3（搜索镜像）：<a href="https://google.90h6.cn:1668/" target="_blank" rel="noopener noreferrer">https://google.90h6.cn:1668/</a></li>
<li>Google简体中文4（学术镜像）：<a href="https://scholar.uulucky.com/" target="_blank" rel="noopener noreferrer">https://scholar.uulucky.com/</a></li>
<li>Google简体中文5（学术镜像）：<a href="https://g.abcdocker.com/scholar" target="_blank" rel="noopener noreferrer">https://g.abcdocker.com/scholar</a></li>
<li>维基百科中文语言1（镜像）：【备用网址1】 【备用网址2】</li>
<li>维基百科中文语言2（镜像）：<a href="https://weiji.ga/" target="_blank" rel="noopener noreferrer">https://weiji.ga/</a></li>
<li>维基百科中文语言3（镜像）：<a href="https://wikipedia.kfd.me/" target="_blank" rel="noopener noreferrer">https://wikipedia.kfd.me/</a></li>
<li>维基百科中文语言4（镜像）：<a href="https://wiki.4o4.click/" target="_blank" rel="noopener noreferrer">https://wiki.4o4.click/</a></li>
<li>维基百科中文语言5（镜像）：<a href="https://wiki.zhtube.com/" target="_blank" rel="noopener noreferrer">https://wiki.zhtube.com/</a></li>
<li>维基百科中文语言6（镜像）：<a href="https://zhwiki.joshu.moe/" target="_blank" rel="noopener noreferrer">https://zhwiki.joshu.moe/</a></li>
<li>维基百科中文语言7（镜像）：<a href="https://zh.mdzz.men/" target="_blank" rel="noopener noreferrer">https://zh.mdzz.men/</a></li>
<li>维基百科中文语言8（镜像）：<a href="https://zh.100ke.info/" target="_blank" rel="noopener noreferrer">https://zh.100ke.info/</a></li>
<li>维基百科中文语言9（创软镜像）：<a href="https://w.sxisa.org/" target="_blank" rel="noopener noreferrer">https://w.sxisa.org/</a></li>
<li>查询IP（1）：<a href="https://www.ipip.net/ip.html" target="_blank" rel="noopener noreferrer">https://www.ipip.net/ip.html</a></li>
<li>查询IP（2）：<a href="http://ip.rtbasia.com/" target="_blank" rel="noopener noreferrer">http://ip.rtbasia.com/</a></li>
<li>查询IP（3）：<a href="http://www.hao7188.com/" target="_blank" rel="noopener noreferrer">http://www.hao7188.com/</a></li>
<li>查询IP（4）：<a href="http://www.ip138.com/ips1388.asp" target="_blank" rel="noopener noreferrer">http://www.ip138.com/ips1388.asp</a></li>
<li>查询IP（5）：<a href="http://ip111.cn/" target="_blank" rel="noopener noreferrer">http://ip111.cn/</a></li>
<li>查询IP（6）：<a href="http://myip.cx/" target="_blank" rel="noopener noreferrer">http://myip.cx/</a></li>
<li>查询手机归属地（1）：<a href="http://www.ip138.com/sj/" target="_blank" rel="noopener noreferrer">http://www.ip138.com/sj/</a></li>
<li>查询手机归属地（2）：<a href="http://cn.m.chahaoba.com/index.php" target="_blank" rel="noopener noreferrer">http://cn.m.chahaoba.com/index.php</a>?</li>
<li>查询手机归属地（3）：<a href="http://shouji.niuchaxun.com/" target="_blank" rel="noopener noreferrer">http://shouji.niuchaxun.com/</a></li>
<li>查询身份证（1）：<a href="http://shenfenzheng.bajiu.cn/" target="_blank" rel="noopener noreferrer">http://shenfenzheng.bajiu.cn/</a></li>
<li>查询身份证（2）：<a href="http://idcard.niuchaxun.com/" target="_blank" rel="noopener noreferrer">http://idcard.niuchaxun.com/</a></li>
<li>查询身份证（3）：<a href="http://tool.114la.com/live/idcard/" target="_blank" rel="noopener noreferrer">http://tool.114la.com/live/idcard/</a></li>
<li>查询交通违章（1）：<a href="http://www.ip138.com/weizhang.htm" target="_blank" rel="noopener noreferrer">http://www.ip138.com/weizhang.htm</a></li>
<li>查询交通违章（2）：<a href="https://wxcity.fundway.net:8088/Traffic/ViolationByVehicleLicense" target="_blank" rel="noopener noreferrer">https://wxcity.fundway.net:8088/Traffic/ViolationByVehicleLicense</a></li>
<li>查询交通违章（3）：<a href="http://chaxun.weizhang8.cn/" target="_blank" rel="noopener noreferrer">http://chaxun.weizhang8.cn/</a></li>
<li>查询交通违章（4）：<a href="http://wx.fsga.gov.cn/fsweixin/carframe/carFrameQuery.jsp?key=96f392f3-41cb-4af0-8143-2b34628a2fb4&amp;from=groupmessage&amp;isappinstalled=0#page1" target="_blank" rel="noopener noreferrer">http://wx.fsga.gov.cn/fsweixin/carframe/carFrameQuery.jsp?key=96f392f3-41cb-4af0-8143-2b34628a2fb4&amp;from=groupmessage&amp;isappinstalled=0#page1</a></li>
<li>查询交通违章（仅支持29个省市）：<a href="http://m.46644.com/illegal/allcity.php" target="_blank" rel="noopener noreferrer">http://m.46644.com/illegal/allcity.php</a></li>
<li>查询交通违章（广东备用1）：<a href="http://210.76.69.58/wfcx/query.jsp" target="_blank" rel="noopener noreferrer">http://210.76.69.58/wfcx/query.jsp</a></li>
<li>查询交通违章（广东备用2）：【主用网址1】【备用网址2】</li>
<li>查询交通违章代码：<a href="http://m.46644.com/illegal/beijing/rule/" target="_blank" rel="noopener noreferrer">http://m.46644.com/illegal/beijing/rule/</a></li>
<li>查询银行卡归属地（1）：<a href="http://3g.yinhangkahao.com/" target="_blank" rel="noopener noreferrer">http://3g.yinhangkahao.com/</a></li>
<li>查询银行卡归属地（2）：<a href="http://bank.niuchaxun.com/" target="_blank" rel="noopener noreferrer">http://bank.niuchaxun.com/</a></li>
<li>银联卡号交易消费查询：<a href="https://www.95516.com/static/union/pages/order/search.html" target="_blank" rel="noopener noreferrer">https://www.95516.com/static/union/pages/order/search.html</a></li>
<li>查询全国列车时刻表：<a href="http://qq.ip138.com/train/" target="_blank" rel="noopener noreferrer">http://qq.ip138.com/train/</a></li>
<li>查询世界各国货币转换：<a href="http://qq.ip138.com/hl.asp?q=100" target="_blank" rel="noopener noreferrer">http://qq.ip138.com/hl.asp?q=100</a></li>
<li>查询全国各地车牌（1）：<a href="http://www.ip138.com/carlist.htm" target="_blank" rel="noopener noreferrer">http://www.ip138.com/carlist.htm</a></li>
<li>查询全国各地车牌（2）：<a href="http://chepai.niuchaxun.com/" target="_blank" rel="noopener noreferrer">http://chepai.niuchaxun.com/</a></li>
<li>查询购买国内机票：<a href="http://www.ip138.com/jb.htm" target="_blank" rel="noopener noreferrer">http://www.ip138.com/jb.htm</a></li>
<li>全球航班实时飞行图：<a href="https://www.flightradar24.com/" target="_blank" rel="noopener noreferrer">https://www.flightradar24.com/</a></li>
<li>中国航班实时飞行图：<a href="http://www.airtu.com/FlightMap/FlightMap.html" target="_blank" rel="noopener noreferrer">http://www.airtu.com/FlightMap/FlightMap.html</a></li>
<li>查询邮政编码（1）：<a href="http://www.youbianku.com/" target="_blank" rel="noopener noreferrer">http://www.youbianku.com/</a></li>
<li>查询邮政编码（2）：<a href="http://youbian.niuchaxun.com/" target="_blank" rel="noopener noreferrer">http://youbian.niuchaxun.com/</a></li>
<li>查询地区区号：【区号查询地名】/【地名查询区号】</li>
<li>查询汉字拼音：<a href="http://qq.ip138.com/wb/wb.asp" target="_blank" rel="noopener noreferrer">http://qq.ip138.com/wb/wb.asp</a></li>
<li>查询同姓同名：<a href="http://zhaoren.idtag.cn/samename/searchName!searchIndex.htm" target="_blank" rel="noopener noreferrer">http://zhaoren.idtag.cn/samename/searchName!searchIndex.htm</a></li>
<li>查询快递进度：<a href="http://www.kuaidi100.com/" target="_blank" rel="noopener noreferrer">http://www.kuaidi100.com/</a></li>
<li>度衡量计量单位换算转换器： <a href="http://qq.ip138.com/converter.htm" target="_blank" rel="noopener noreferrer">http://qq.ip138.com/converter.htm</a></li>
<li>查询淘宝买家/卖家信誉：<a href="http://www.2cha.com/credit/credit_nick_.html" target="_blank" rel="noopener noreferrer">http://www.2cha.com/credit/credit_nick_.html</a></li>
<li>查询反义词变换：<a href="http://fyc.5156edu.com/" target="_blank" rel="noopener noreferrer">http://fyc.5156edu.com/</a></li>
<li>在线地球天气：<a href="https://www.windyty.com/" target="_blank" rel="noopener noreferrer">https://www.windyty.com/</a></li>
<li>在线中央台风网：【官方网站1】【官方网站2】</li>
<li>在线天气卫星地图（中国区）：<a href="http://www.nmc.cn/publish/satellite/fy2.htm" target="_blank" rel="noopener noreferrer">http://www.nmc.cn/publish/satellite/fy2.htm</a></li>
<li>在线天气卫星地图（大洋洲区）：<a href="http://himawari8.nict.go.jp/" target="_blank" rel="noopener noreferrer">http://himawari8.nict.go.jp/</a></li>
<li>在线检测FLASH版本：<a href="http://www.whatismyflashplayerversion.com/" target="_blank" rel="noopener noreferrer">http://www.whatismyflashplayerversion.com/</a></li>
<li>在线检测JAVA版本：<a href="http://java.com/zh_CN/download/installed8.jsp" target="_blank" rel="noopener noreferrer">http://java.com/zh_CN/download/installed8.jsp</a></li>
<li>中国电信在线人工客服：<a href="http://im.ct10000.com/webclient/index" target="_blank" rel="noopener noreferrer">http://im.ct10000.com/webclient/index</a></li>
<li>中国联通在线人工客服：<a href="http://inf.10010.com/serviceOnline/mobileServiceOnline/chat.do?accessType=01507&amp;needRobot=1" target="_blank" rel="noopener noreferrer">http://inf.10010.com/serviceOnline/mobileServiceOnline/chat.do?accessType=01507&amp;needRobot=1</a></li>
<li>宽带快捷排障（大陆各地区电信）：<a href="http://wx.xmt.189.cn:8080/WX_CUST_WEBSERVICE/broadbandexclude/broadbandExcludeAction.do?action=toPage&amp;openid=kKHNXZZ3ntIiqvLzGxOo0Ye6FWdowO/RNRrDPBAwiqI=&amp;" target="_blank" rel="noopener noreferrer">http://wx.xmt.189.cn:8080/WX_CUST_WEBSERVICE/broadbandexclude/broadbandExcludeAction.do?action=toPage&amp;openid=kKHNXZZ3ntIiqvLzGxOo0Ye6FWdowO/RNRrDPBAwiqI=&amp;</a></li>
<li>宽带快捷排障+便捷服务（广东电信）：<a href="http://im.189.cn/xmt/net/index.do?subscribe=true&amp;status=ok&amp;openid=oBBmBjr8bwquNetqAehO_Jwt3_u0" target="_blank" rel="noopener noreferrer">http://im.189.cn/xmt/net/index.do?subscribe=true&amp;status=ok&amp;openid=oBBmBjr8bwquNetqAehO_Jwt3_u0</a></li>
<li>检测是否IPV6：<a href="http://www.kame.net/" target="_blank" rel="noopener noreferrer">http://www.kame.net/</a></li>
<li>百度云网盘搜索（1）：<a href="http://www.oubear.com/" target="_blank" rel="noopener noreferrer">http://www.oubear.com/</a></li>
<li>百度云网盘搜索（2）：<a href="http://m.sobaidupan.com/" target="_blank" rel="noopener noreferrer">http://m.sobaidupan.com/</a></li>
<li>百度云网盘搜索（3）：<a href="http://www.sosuopan.com/" target="_blank" rel="noopener noreferrer">http://www.sosuopan.com/</a></li>
<li>百度云网盘搜索（4）：<a href="http://99baiduyun.com/" target="_blank" rel="noopener noreferrer">http://99baiduyun.com/</a></li>
<li>百度云网盘搜索（5）：<a href="http://www.xalssy.com.cn/" target="_blank" rel="noopener noreferrer">http://www.xalssy.com.cn/</a></li>
<li>网盘搜索查询（1）：<a href="http://www.xilinjie.com/" target="_blank" rel="noopener noreferrer">http://www.xilinjie.com/</a></li>
<li>网盘搜索查询（2）：<a href="http://www.panc.cc/" target="_blank" rel="noopener noreferrer">http://www.panc.cc/</a></li>
<li>网盘搜索查询（3）：<a href="http://www.bdysou.com/" target="_blank" rel="noopener noreferrer">http://www.bdysou.com/</a></li>
<li>网盘搜索查询（4）：<a href="http://www.goutouying.com/" target="_blank" rel="noopener noreferrer">http://www.goutouying.com/</a></li>
<li>网盘搜索查询（5）：<a href="http://wangpan007.com/" target="_blank" rel="noopener noreferrer">http://wangpan007.com/</a></li>
<li>网盘搜索查询（6）：<a href="http://www.daysou.com/" target="_blank" rel="noopener noreferrer">http://www.daysou.com/</a></li>
<li>网盘搜索查询（7）：<a href="http://www.quzhuanpan.com/" target="_blank" rel="noopener noreferrer">http://www.quzhuanpan.com/</a></li>
<li>网盘搜索查询（8）：<a href="http://md5.daimugua.com/" target="_blank" rel="noopener noreferrer">http://md5.daimugua.com/</a></li>
<li>喵搜动漫资源网盘：【备用网址1】【备用网址2】</li>
<li>光影电影磁力下载：<a href="http://www.etdown.net/" target="_blank" rel="noopener noreferrer">http://www.etdown.net/</a></li>
<li>BT磁力链接资源搜索（1）：<a href="http://www.btwhat.net/" target="_blank" rel="noopener noreferrer">http://www.btwhat.net/</a></li>
<li>BT磁力链接资源搜索（2）：<a href="http://www.ciliyun.net/" target="_blank" rel="noopener noreferrer">http://www.ciliyun.net/</a></li>
<li>BT磁力链接资源搜索（3）：<a href="http://www.cilimao.me/" target="_blank" rel="noopener noreferrer">http://www.cilimao.me/</a></li>
<li>BT磁力链接资源搜索（4）：<a href="http://ciliba.net/" target="_blank" rel="noopener noreferrer">http://ciliba.net/</a></li>
<li>BT磁力链接资源搜索（5）：【官方网站1】【★官方网站2】</li>
<li>BT磁力链接资源搜索（6）：<a href="http://www.btcherry.info/" target="_blank" rel="noopener noreferrer">http://www.btcherry.info/</a></li>
<li>BT磁力链接资源搜索（7）：<a href="http://www.btrabbit.com/" target="_blank" rel="noopener noreferrer">http://www.btrabbit.com/</a></li>
<li>BT磁力链接资源搜索（8）：<a href="http://www.youkubt.com/" target="_blank" rel="noopener noreferrer">http://www.youkubt.com/</a></li>
<li>BT磁力链接资源搜索（9）：<a href="https://591mov.com/zh-hans/" target="_blank" rel="noopener noreferrer">https://591mov.com/zh-hans/</a></li>
<li>BT磁力链接资源搜索（10）：<a href="http://www.btsj5.com/" target="_blank" rel="noopener noreferrer">http://www.btsj5.com/</a></li>
<li>岭南通/广佛通查询余额：<a href="http://www.fsjtk.com/wx/yue.php" target="_blank" rel="noopener noreferrer">http://www.fsjtk.com/wx/yue.php</a></li>
<li>岭南通/羊城通 查询余额（beta）：<a href="http://weixin.gzyct.com/busiqry/user-card-balance!otherBalanceQry.action?openid=oKYOJjmESPF8pWm7rcPk63tA7oak&amp;cardno=%E8%BE%93%E5%85%A5%E8%BD%A6%E5%8D%A1%E5%8D%A1%E5%8F%B7" target="_blank" rel="noopener noreferrer">http://weixin.gzyct.com/busiqry/user-card-balance!otherBalanceQry.action?openid=oKYOJjmESPF8pWm7rcPk63tA7oak&amp;cardno=输入车卡卡号</a></li>
<li>羊城通应用范围查询：<a href="http://weixin.gzyct.com/cpuqry/cpuqry.action?openid=oKYOJjmESPF8pWm7rcPk63tA7oak" target="_blank" rel="noopener noreferrer">http://weixin.gzyct.com/cpuqry/cpuqry.action?openid=oKYOJjmESPF8pWm7rcPk63tA7oak</a></li>
<li>腾讯QQ联系人头像查看和下载（1）：<a href="http://www.3464.com/Tools/GetQQFace/" target="_blank" rel="noopener noreferrer">http://www.3464.com/Tools/GetQQFace/</a></li>
<li>腾讯QQ联系人头像查看和下载（2）：<a href="http://www.feifeiboke.com/tool/qqtx.html" target="_blank" rel="noopener noreferrer">http://www.feifeiboke.com/tool/qqtx.html</a></li>
<li>腾讯QQ联系人头像查看和下载（3）：<a href="http://www.koukoucha.com/tool/qqtouxiang/" target="_blank" rel="noopener noreferrer">http://www.koukoucha.com/tool/qqtouxiang/</a></li>
<li>腾讯QQ联系人头像查看和下载（4）：<a href="http://www.dcqzone.com/qq/tx/" target="_blank" rel="noopener noreferrer">http://www.dcqzone.com/qq/tx/</a></li>
<li>腾讯QQ头像/QQ空间头像查询和下载：<a href="http://momo8.com/tools/qqtouxiang/" target="_blank" rel="noopener noreferrer">http://momo8.com/tools/qqtouxiang/</a></li>
<li>QQ价值评估：<a href="http://www.atool.org/qq.php" target="_blank" rel="noopener noreferrer">http://www.atool.org/qq.php</a></li>
<li>360中国网络诈骗地图：<a href="http://vis.360.cn/open/fishsite" target="_blank" rel="noopener noreferrer">http://vis.360.cn/open/fishsite</a></li>
<li>NORSE网络攻击地图：<a href="http://map.norsecorp.com/" target="_blank" rel="noopener noreferrer">http://map.norsecorp.com/</a></li>
<li>卡巴斯基网络攻击地图：<a href="https://cybermap.kaspersky.com/" target="_blank" rel="noopener noreferrer">https://cybermap.kaspersky.com/</a></li>
<li>货币汇率查询：<a href="http://huilv.niuchaxun.com/" target="_blank" rel="noopener noreferrer">http://huilv.niuchaxun.com/</a></li>
<li>电费计算器：<a href="http://dianfei.niuchaxun.com/" target="_blank" rel="noopener noreferrer">http://dianfei.niuchaxun.com/</a></li>
<li>每日油价查询（国内）：<a href="http://youjia.niuchaxun.com/" target="_blank" rel="noopener noreferrer">http://youjia.niuchaxun.com/</a></li>
<li>世界时差查询：<a href="http://shicha.niuchaxun.com/" target="_blank" rel="noopener noreferrer">http://shicha.niuchaxun.com/</a></li>
<li>查询地铁路线（大陆+台湾香港）：<a href="http://map.baidu.com/subways/" target="_blank" rel="noopener noreferrer">http://map.baidu.com/subways/</a></li>
<li>电脑系统进程查询：<a href="http://process.niuchaxun.com/" target="_blank" rel="noopener noreferrer">http://process.niuchaxun.com/</a></li>
<li>全球被黑站点统计：<a href="http://www.hack-cn.com/archive" target="_blank" rel="noopener noreferrer">http://www.hack-cn.com/archive</a></li>
<li>检测浏览器内核版本：<a href="http://liulanmi.com/labs/core.html" target="_blank" rel="noopener noreferrer">http://liulanmi.com/labs/core.html</a></li>
<li>检测浏览器版本号：<a href="https://aboutmybrowser.com/r5v01nyZ" target="_blank" rel="noopener noreferrer">https://aboutmybrowser.com/r5v01nyZ</a></li>
<li>查询QQ好友空间背景音乐（1）：<a href="http://www.koukoucha.com/music/" target="_blank" rel="noopener noreferrer">http://www.koukoucha.com/music/</a></li>
<li>查询QQ好友空间背景音乐（2）：<a href="https://www.feifeiboke.com/qqmusic/" target="_blank" rel="noopener noreferrer">https://www.feifeiboke.com/qqmusic/</a></li>
<li>检测图片是否被PS：<a href="http://fotoforensics.com/" target="_blank" rel="noopener noreferrer">http://fotoforensics.com/</a></li>
<li>莆田系医院分布图：<a href="https://wandergis.com/hospital-viz/index.htm" target="_blank" rel="noopener noreferrer">https://wandergis.com/hospital-viz/index.htm</a></li>
<li>★Google缓存网页快照大全：<a href="http://cachedview.com/index.php?lang=zh#" target="_blank" rel="noopener noreferrer">http://cachedview.com/index.php?lang=zh#</a></li>
<li>百度云分享失效重链：<a href="http://pan.baidu.com/share/home?uk=%E8%BE%93%E5%85%A5%E5%88%86%E4%BA%AB%E5%A4%B1%E6%95%88%E6%95%B0%E5%AD%97" target="_blank" rel="noopener noreferrer">http://pan.baidu.com/share/home?uk=输入分享失效数字</a></li>
<li>佛山实时公交在线查询：<a href="http://www.oooxo.com/" target="_blank" rel="noopener noreferrer">http://www.oooxo.com/</a></li>
<li>12306帐号泄露查询：<a href="http://www.atool.org/12306.php" target="_blank" rel="noopener noreferrer">http://www.atool.org/12306.php</a></li>
<li>账号密码泄露查询（1）：<a href="https://qq.mima.re/" target="_blank" rel="noopener noreferrer">https://qq.mima.re/</a></li>
<li>账号密码泄露查询（2）：<a href="https://haveibeenpwned.com/" target="_blank" rel="noopener noreferrer">https://haveibeenpwned.com/</a></li>
<li>在线屏幕测试：<a href="http://pingmu.zh-ang.com/" target="_blank" rel="noopener noreferrer">http://pingmu.zh-ang.com/</a></li>
<li>显示屏分辨率检测：<a href="http://www.3464.com/tools/DisplayResolution/" target="_blank" rel="noopener noreferrer">http://www.3464.com/tools/DisplayResolution/</a></li>
<li>LOL英雄联盟查询助手：<a href="http://vip.ihuan.me/lol.htm" target="_blank" rel="noopener noreferrer">http://vip.ihuan.me/lol.htm</a></li>
<li>查询手机IMEI码信息：<a href="http://www.imei8.net/" target="_blank" rel="noopener noreferrer">http://www.imei8.net/</a></li>
<li>在线识别音乐歌名（beta）：<a href="http://www.mooma.sh/" target="_blank" rel="noopener noreferrer">http://www.mooma.sh/</a></li>
<li>“车来了”网页版：【蓝色版】【绿色版】</li>
<li>在线接收手机短信（国外号码1）：<a href="http://receivefreesms.com/" target="_blank" rel="noopener noreferrer">http://receivefreesms.com/</a></li>
<li>在线接收手机短信（国外号码2）：【备用网址1】【备用网址2】【备用网址3】</li>
<li>在线识别动漫图（1）：<a href="http://saucenao.com/" target="_blank" rel="noopener noreferrer">http://saucenao.com/</a></li>
<li>在线识别动漫图（2）：<a href="https://pic.nyaso.com/search.html" target="_blank" rel="noopener noreferrer">https://pic.nyaso.com/search.html</a></li>
<li>特殊符号大全：<a href="http://cn.piliapp.com/symbol/" target="_blank" rel="noopener noreferrer">http://cn.piliapp.com/symbol/</a></li>
<li>微博图片反查（1）：<a href="http://wbimg.huyuaning.com/" target="_blank" rel="noopener noreferrer">http://wbimg.huyuaning.com/</a></li>
<li>微博图片反查（2）：<a href="http://www.sq520.net/weibo-fancha/" target="_blank" rel="noopener noreferrer">http://www.sq520.net/weibo-fancha/</a></li>
<li>微博图片反查（3）：<a href="https://toolmao.com/tool/img2weibo/" target="_blank" rel="noopener noreferrer">https://toolmao.com/tool/img2weibo/</a></li>
<li>微博图片反查（4）：<a href="https://weibo.2333.me/" target="_blank" rel="noopener noreferrer">https://weibo.2333.me/</a></li>
<li>在线免费代理IP：<a href="https://ip.ihuan.me/" target="_blank" rel="noopener noreferrer">https://ip.ihuan.me/</a></li>
</ol>`,r:{minutes:19.28,words:5784},y:"a",title:"在线万能查询和在线工具",i:"type"},["/tools/在线万能查询和在线工具.html","/tools/%E5%9C%A8%E7%BA%BF%E4%B8%87%E8%83%BD%E6%9F%A5%E8%AF%A2%E5%92%8C%E5%9C%A8%E7%BA%BF%E5%B7%A5%E5%85%B7","/tools/在线万能查询和在线工具.md","/tools/%E5%9C%A8%E7%BA%BF%E4%B8%87%E8%83%BD%E6%9F%A5%E8%AF%A2%E5%92%8C%E5%9C%A8%E7%BA%BF%E5%B7%A5%E5%85%B7.md"]],["v-3d92dd5a","/tools/%E6%88%AA%E5%9B%BE%E5%B7%A5%E5%85%B7.html",{a:"xlc520",d:"2022-02-12T00:00:00.000Z",l:"2022年2月12日",c:["other"],g:["other"],e:`<h1> 截图工具大全</h1>
<p>第一款. win10自带</p>
<p>快捷键：Windows键+Shift+S</p>
<p>第二款.微信自带</p>
<p>快捷键：Alt+A</p>
<figure><img src="https://gh.xlc520.tk/xlc520/MyImage/raw/main/MdImg/640-16442232269891.webp" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure>
<p>第三款.QQ自带</p>
<p>快捷键：Ctrl+Alt+A</p>`,r:{minutes:1.49,words:447},y:"a",title:"截图工具大全",i:"type"},["/tools/截图工具.html","/tools/%E6%88%AA%E5%9B%BE%E5%B7%A5%E5%85%B7","/tools/截图工具.md","/tools/%E6%88%AA%E5%9B%BE%E5%B7%A5%E5%85%B7.md"]],["v-f0217ea8","/tools/%E7%9F%AD%E8%A7%86%E9%A2%91%E8%A7%A3%E6%9E%90.html",{a:"xlc520",d:"2022-05-29T00:00:00.000Z",l:"2022年5月29日",c:["Tools"],g:["Tools"],e:`<h1> 短视频解析</h1>
<p>1.去水印视频解析： <a href="https://parse.bqrdh.com/smart" target="_blank" rel="noopener noreferrer">https://parse.bqrdh.com/smart</a></p>
<p>2.酷豆去水印： <a href="https://dy.kukutool.com/" target="_blank" rel="noopener noreferrer">https://dy.kukutool.com/</a></p>
<p>3.疯狂视频去水印： <a href="https://douyin.video996.com/" target="_blank" rel="noopener noreferrer">https://douyin.video996.com/</a></p>`,r:{minutes:.31,words:93},y:"a",title:"短视频解析",i:"tool"},["/tools/短视频解析.html","/tools/%E7%9F%AD%E8%A7%86%E9%A2%91%E8%A7%A3%E6%9E%90","/tools/短视频解析.md","/tools/%E7%9F%AD%E8%A7%86%E9%A2%91%E8%A7%A3%E6%9E%90.md"]],["v-42d58db0","/tools/%E9%98%BF%E9%87%8C%E5%8D%81%E5%A4%A7%E6%9C%80%E5%8F%97%E5%BC%80%E5%8F%91%E8%80%85%E6%AC%A2%E8%BF%8E%E7%9A%84%E5%B7%A5%E5%85%B7.html",{a:"xlc520",d:"2022-02-19T00:00:00.000Z",l:"2022年2月19日",c:["other"],g:["other"],e:`<h1> 阿里十大最受开发者欢迎的工具</h1>
<p>精选了一些阿里经济体内部最受开发者欢迎的开发者工具，筛选出一些带有普适性同样适合外部开发者的，希望能助力开发者们提高开发效率。</p>
<h3> 1. Java 工程脚手架 Java Initializr</h3>
<p><strong>官网</strong>：
<a href="https://start.aliyun.com/bootstrap.html" target="_blank" rel="noopener noreferrer">https://start.aliyun.com/bootstrap.html</a></p>
`,r:{minutes:7.7,words:2309},y:"a",title:"阿里十大最受开发者欢迎的工具",i:"type"},["/tools/阿里十大最受开发者欢迎的工具.html","/tools/%E9%98%BF%E9%87%8C%E5%8D%81%E5%A4%A7%E6%9C%80%E5%8F%97%E5%BC%80%E5%8F%91%E8%80%85%E6%AC%A2%E8%BF%8E%E7%9A%84%E5%B7%A5%E5%85%B7","/tools/阿里十大最受开发者欢迎的工具.md","/tools/%E9%98%BF%E9%87%8C%E5%8D%81%E5%A4%A7%E6%9C%80%E5%8F%97%E5%BC%80%E5%8F%91%E8%80%85%E6%AC%A2%E8%BF%8E%E7%9A%84%E5%B7%A5%E5%85%B7.md"]],["v-4377e9a2","/dev/coding-standard/",{a:"xlc520",d:"2022-04-20T00:00:00.000Z",l:"2022年4月20日",c:["coding"],g:["coding"],e:`<p align="center"> 
  <img src="https://metrics.lecoq.io/xlc520?template=classic&amp;isocalendar=1&amp;languages=1&amp;people=1&amp;activity=1&amp;achievements=1&amp;lines=1&amp;repositories=1&amp;notable=1&amp;introduction=1&amp;pagespeed=1&amp;repositories=100&amp;repositories.batch=100&amp;repositories.forks=false&amp;repositories.affiliations=owner&amp;isocalendar.duration=full-year&amp;languages.limit=8&amp;languages.threshold=0%&amp;languages.colors=github&amp;languages.sections=most-used&amp;languages.indepth=false&amp;languages.analysis.timeout=15&amp;languages.categories=markup%2C programming&amp;languages.recent.categories=markup%2C programming&amp;languages.recent.load=300&amp;languages.recent.days=14&amp;people.limit=24&amp;people.identicons=false&amp;people.identicons.hide=false&amp;people.size=28&amp;people.types=followers%2C following&amp;people.shuffle=false&amp;activity.limit=5&amp;activity.load=300&amp;activity.days=14&amp;activity.visibility=all&amp;activity.timestamps=false&amp;activity.filter=all&amp;achievements.threshold=C&amp;achievements.secrets=true&amp;achievements.display=detailed&amp;achievements.limit=0&amp;notable.from=organization&amp;notable.repositories=false&amp;notable.indepth=false&amp;notable.types=commit&amp;repositories.featured= xlc520%2Fxlc520.github.io&amp;introduction.title=true&amp;pagespeed.url=xlc520.github.io&amp;pagespeed.detailed=false&amp;pagespeed.screenshot=false&amp;config.timezone=Asia%2FShanghai"> 
</p>`,r:{minutes:.56,words:169},y:"a",title:"编码规范",i:"code"},["/dev/coding-standard/index.html","/dev/coding-standard/README.md"]],["v-0dba7fcb","/study/vue3_quick_study/",{a:"xlc520",d:"2022-07-17T00:00:00.000Z",l:"2022年7月17日",c:["Vue"],g:["Vue"],e:`<p align="center"> 
  <img src="https://metrics.lecoq.io/xlc520?template=classic&amp;isocalendar=1&amp;languages=1&amp;people=1&amp;activity=1&amp;achievements=1&amp;lines=1&amp;repositories=1&amp;notable=1&amp;introduction=1&amp;pagespeed=1&amp;repositories=100&amp;repositories.batch=100&amp;repositories.forks=false&amp;repositories.affiliations=owner&amp;isocalendar.duration=full-year&amp;languages.limit=8&amp;languages.threshold=0%&amp;languages.colors=github&amp;languages.sections=most-used&amp;languages.indepth=false&amp;languages.analysis.timeout=15&amp;languages.categories=markup%2C programming&amp;languages.recent.categories=markup%2C programming&amp;languages.recent.load=300&amp;languages.recent.days=14&amp;people.limit=24&amp;people.identicons=false&amp;people.identicons.hide=false&amp;people.size=28&amp;people.types=followers%2C following&amp;people.shuffle=false&amp;activity.limit=5&amp;activity.load=300&amp;activity.days=14&amp;activity.visibility=all&amp;activity.timestamps=false&amp;activity.filter=all&amp;achievements.threshold=C&amp;achievements.secrets=true&amp;achievements.display=detailed&amp;achievements.limit=0&amp;notable.from=organization&amp;notable.repositories=false&amp;notable.indepth=false&amp;notable.types=commit&amp;repositories.featured= xlc520%2Fxlc520.github.io&amp;introduction.title=true&amp;pagespeed.url=xlc520.github.io&amp;pagespeed.detailed=false&amp;pagespeed.screenshot=false&amp;config.timezone=Asia%2FShanghai"> 
</p>`,r:{minutes:.59,words:177},y:"a",title:"Vue3+TS 快速上手",i:"note"},["/study/vue3_quick_study/index.html","/study/vue3_quick_study/README.md"]],["v-45410d4b","/study/vue3_quick_study/chapter1/01_%E5%88%9D%E8%AF%86TS.html",{a:"xlc520",d:"2022-07-18T00:00:00.000Z",l:"2022年7月18日",c:["Vue"],g:["Vue"],e:`<h1> 1. 初识 TypeScript</h1>
<figure><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/28ca61cc160c417c8497a00defdca5f0~tplv-k3u1fbpfcp-watermark.image" alt="TS与JS.png" tabindex="0" loading="lazy"><figcaption>TS与JS.png</figcaption></figure>
<h2> TypeScript 的介绍</h2>
<p>TypeScript是一种由微软开发的开源、跨平台的编程语言。它是JavaScript的超集，最终会被编译为JavaScript代码。</p>`,r:{minutes:1.69,words:508},y:"a",title:"初识 TypeScript",i:"vue"},["/study/vue3_quick_study/chapter1/01_初识TS.html","/study/vue3_quick_study/chapter1/01_%E5%88%9D%E8%AF%86TS","/study/vue3_quick_study/chapter1/01_初识TS.md","/study/vue3_quick_study/chapter1/01_%E5%88%9D%E8%AF%86TS.md"]],["v-0271c50c","/study/vue3_quick_study/chapter1/02_%E5%AE%89%E8%A3%85TS.html",{a:"xlc520",d:"2022-07-19T00:00:00.000Z",l:"2022年7月19日",c:["Vue"],g:["Vue"],e:`<h1> 2. 安装 TypeScript</h1>
<p>命令行运行如下命令，全局安装 TypeScript：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,r:{minutes:.24,words:72},y:"a",title:"安装 TypeScript",i:"vue"},["/study/vue3_quick_study/chapter1/02_安装TS.html","/study/vue3_quick_study/chapter1/02_%E5%AE%89%E8%A3%85TS","/study/vue3_quick_study/chapter1/02_安装TS.md","/study/vue3_quick_study/chapter1/02_%E5%AE%89%E8%A3%85TS.md"]],["v-7efb1c5d","/study/vue3_quick_study/chapter1/03_HelloWorld.html",{a:"xlc520",d:"2022-07-20T00:00:00.000Z",l:"2022年7月20日",c:["Vue"],g:["Vue"],e:`<h1> 3. 第一个 TypeScript 程序</h1>
<h2> 编写 TS 程序</h2>
<p>src/helloworld.ts</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">greeter</span> <span class="token punctuation">(</span>person<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">'Hello, '</span> <span class="token operator">+</span> person
<span class="token punctuation">}</span>

<span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token string">'Yee'</span>

<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">greeter</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.86,words:857},y:"a",title:"第一个 TypeScript 程序",i:"vue"},["/study/vue3_quick_study/chapter1/03_HelloWorld","/study/vue3_quick_study/chapter1/03_HelloWorld.md"]],["v-25507322","/study/vue3_quick_study/chapter1/04_webpack%E6%89%93%E5%8C%85.html",{a:"xlc520",d:"2022-07-21T00:00:00.000Z",l:"2022年7月21日",c:["Vue"],g:["Vue"],e:`<h1> 4. 使用webpack打包TS</h1>
<h2> 下载依赖</h2>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>yarn add -D typescript
yarn add -D webpack webpack-cli
yarn add -D webpack-dev-server
yarn add -D html-webpack-plugin clean-webpack-plugin
yarn add -D ts-loader
yarn add -D cross-env
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:.99,words:297},y:"a",title:"使用webpack打包TS",i:"vue"},["/study/vue3_quick_study/chapter1/04_webpack打包.html","/study/vue3_quick_study/chapter1/04_webpack%E6%89%93%E5%8C%85","/study/vue3_quick_study/chapter1/04_webpack打包.md","/study/vue3_quick_study/chapter1/04_webpack%E6%89%93%E5%8C%85.md"]],["v-43bfb7c0","/study/vue3_quick_study/chapter1/",{a:"xlc520",d:"2022-07-17T00:00:00.000Z",l:"2022年7月17日",c:["Vue"],g:["Vue"],e:`<p align="center"> 
  <img src="https://metrics.lecoq.io/xlc520?template=classic&amp;isocalendar=1&amp;languages=1&amp;people=1&amp;activity=1&amp;achievements=1&amp;lines=1&amp;repositories=1&amp;notable=1&amp;introduction=1&amp;pagespeed=1&amp;repositories=100&amp;repositories.batch=100&amp;repositories.forks=false&amp;repositories.affiliations=owner&amp;isocalendar.duration=full-year&amp;languages.limit=8&amp;languages.threshold=0%&amp;languages.colors=github&amp;languages.sections=most-used&amp;languages.indepth=false&amp;languages.analysis.timeout=15&amp;languages.categories=markup%2C programming&amp;languages.recent.categories=markup%2C programming&amp;languages.recent.load=300&amp;languages.recent.days=14&amp;people.limit=24&amp;people.identicons=false&amp;people.identicons.hide=false&amp;people.size=28&amp;people.types=followers%2C following&amp;people.shuffle=false&amp;activity.limit=5&amp;activity.load=300&amp;activity.days=14&amp;activity.visibility=all&amp;activity.timestamps=false&amp;activity.filter=all&amp;achievements.threshold=C&amp;achievements.secrets=true&amp;achievements.display=detailed&amp;achievements.limit=0&amp;notable.from=organization&amp;notable.repositories=false&amp;notable.indepth=false&amp;notable.types=commit&amp;repositories.featured= xlc520%2Fxlc520.github.io&amp;introduction.title=true&amp;pagespeed.url=xlc520.github.io&amp;pagespeed.detailed=false&amp;pagespeed.screenshot=false&amp;config.timezone=Asia%2FShanghai"> 
</p>`,r:{minutes:.57,words:172},y:"a",title:"1.初识 TypeScript",i:"note"},["/study/vue3_quick_study/chapter1/index.html","/study/vue3_quick_study/chapter1/README.md"]],["v-331b4e12","/study/vue3_quick_study/chapter2/1_type.html",{a:"xlc520",d:"2022-07-22T00:00:00.000Z",l:"2022年7月22日",c:["Vue"],g:["Vue"],e:`<h1> 1. 基础类型</h1>
<p>TypeScript 支持与 JavaScript 几乎相同的数据类型，此外还提供了实用的枚举类型方便我们使用。</p>
<h2> 布尔值</h2>
<p>最基本的数据类型就是简单的 true/false 值，在JavaScript 和 TypeScript 里叫做 <code>boolean</code>（其它语言中也一样）。</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> isDone<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
isDone <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token comment">// isDone = 2 // error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:5.66,words:1697},y:"a",title:"基础类型",i:"vue"},["/study/vue3_quick_study/chapter2/1_type","/study/vue3_quick_study/chapter2/1_type.md"]],["v-948fe668","/study/vue3_quick_study/chapter2/2_interface.html",{a:"xlc520",d:"2022-07-23T00:00:00.000Z",l:"2022年7月23日",c:["Vue"],g:["Vue"],e:`<h1> 2. 接口</h1>
<p>TypeScript 的核心原则之一是对值所具有的结构进行类型检查。我们使用接口（Interfaces）来定义对象的类型。<code>接口是对象的状态(属性)和行为(方法)的抽象(描述)</code></p>
<h2> 接口初探</h2>
<p>需求: 创建人的对象, 需要对人的属性进行一定的约束</p>
<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>id是number类型, 必须有, 只读的
name是string类型, 必须有
age是number类型, 必须有
sex是string类型, 可以没有
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:3.67,words:1100},y:"a",title:"接口",i:"vue"},["/study/vue3_quick_study/chapter2/2_interface","/study/vue3_quick_study/chapter2/2_interface.md"]],["v-7f762968","/study/vue3_quick_study/chapter2/3_class.html",{a:"xlc520",d:"2022-07-24T00:00:00.000Z",l:"2022年7月24日",c:["Vue"],g:["Vue"],e:`<h1> 3. 类</h1>
<p>对于传统的 JavaScript 程序我们会使用<code>函数</code>和<code>基于原型的继承</code>来创建可重用的组件，但对于熟悉使用面向对象方式的程序员使用这些语法就有些棘手，因为他们用的是<code>基于类的继承</code>并且对象是由类构建出来的。 从 ECMAScript 2015，也就是 ES6 开始， JavaScript 程序员将能够使用基于类的面向对象的方式。 使用 TypeScript，我们允许开发者现在就使用这些特性，并且编译后的 JavaScript 可以在所有主流浏览器和平台上运行，而不需要等到下个 JavaScript 版本。</p>`,r:{minutes:7.37,words:2212},y:"a",title:"类",i:"vue"},["/study/vue3_quick_study/chapter2/3_class","/study/vue3_quick_study/chapter2/3_class.md"]],["v-339b8977","/study/vue3_quick_study/chapter2/4_function.html",{a:"xlc520",d:"2022-07-25T00:00:00.000Z",l:"2022年7月25日",c:["Vue"],g:["Vue"],e:`<h1> 4. 函数</h1>
<p>函数是 JavaScript 应用程序的基础，它帮助你实现抽象层，模拟类，信息隐藏和模块。在 TypeScript 里，虽然已经支持类，命名空间和模块，但函数仍然是主要的定义行为的地方。TypeScript 为 JavaScript 函数添加了额外的功能，让我们可以更容易地使用。</p>
<h2> 基本示例</h2>
<p>和 JavaScript 一样，TypeScript 函数可以创建有名字的函数和匿名函数。你可以随意选择适合应用程序的方式，不论是定义一系列 API 函数还是只使用一次的函数。</p>
<p>通过下面的例子可以迅速回想起这两种 JavaScript 中的函数：</p>`,r:{minutes:3.59,words:1076},y:"a",title:"函数",i:"vue"},["/study/vue3_quick_study/chapter2/4_function","/study/vue3_quick_study/chapter2/4_function.md"]],["v-c8821a6a","/study/vue3_quick_study/chapter2/5_generic.html",{a:"xlc520",d:"2022-07-26T00:00:00.000Z",l:"2022年7月26日",c:["Vue"],g:["Vue"],e:`<h1> 5. 泛型</h1>
<p>指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定具体类型的一种特性。</p>
<h2> 引入</h2>
<p>下面创建一个函数, 实现功能: 根据指定的数量 <code>count</code> 和数据 <code>value</code> , 创建一个包含 <code>count</code> 个 <code>value</code> 的数组
不用泛型的话，这个函数可能是下面这样：</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">createArray</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> arr<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> count<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> arr
<span class="token punctuation">}</span>

<span class="token keyword">const</span> arr1 <span class="token operator">=</span> <span class="token function">createArray</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token function">createArray</span><span class="token punctuation">(</span><span class="token string">'aa'</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr1<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> arr2<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.09,words:628},y:"a",title:"泛型",i:"vue"},["/study/vue3_quick_study/chapter2/5_generic","/study/vue3_quick_study/chapter2/5_generic.md"]],["v-446a765e","/study/vue3_quick_study/chapter2/6_other.html",{a:"xlc520",d:"2022-07-27T00:00:00.000Z",l:"2022年7月27日",c:["Vue"],g:["Vue"],e:`<h1> 6. 其它</h1>
<h2> 声明文件</h2>
<p>当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能</p>
<p>什么是声明语句</p>
<p>假如我们想使用第三方库 jQuery，一种常见的方式是在 html 中通过 <code>&lt;script&gt;</code> 标签引入 <code>jQuery</code>，然后就可以使用全局变量 <code>$</code> 或 <code>jQuery</code> 了。</p>
<p>但是在 ts 中，编译器并不知道 $ 或 jQuery 是什么东西</p>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">/* 
当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。
声明语句: 如果需要ts对新的语法进行检查, 需要要加载了对应的类型说明代码
  declare var jQuery: (selector: string) =&gt; any;
声明文件: 把声明语句放到一个单独的文件（jQuery.d.ts）中, ts会自动解析到项目中所有声明文件
下载声明文件: npm install @types/jquery --save-dev
*/</span>

<span class="token function">jQuery</span><span class="token punctuation">(</span><span class="token string">'#foo'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ERROR: Cannot find name 'jQuery'.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.23,words:670},y:"a",title:"声明",i:"vue"},["/study/vue3_quick_study/chapter2/6_other","/study/vue3_quick_study/chapter2/6_other.md"]],["v-43bfb7df","/study/vue3_quick_study/chapter2/",{a:"xlc520",d:"2022-07-17T00:00:00.000Z",l:"2022年7月17日",c:["Vue"],g:["Vue"],e:`<p align="center"> 
  <img src="https://metrics.lecoq.io/xlc520?template=classic&amp;isocalendar=1&amp;languages=1&amp;people=1&amp;activity=1&amp;achievements=1&amp;lines=1&amp;repositories=1&amp;notable=1&amp;introduction=1&amp;pagespeed=1&amp;repositories=100&amp;repositories.batch=100&amp;repositories.forks=false&amp;repositories.affiliations=owner&amp;isocalendar.duration=full-year&amp;languages.limit=8&amp;languages.threshold=0%&amp;languages.colors=github&amp;languages.sections=most-used&amp;languages.indepth=false&amp;languages.analysis.timeout=15&amp;languages.categories=markup%2C programming&amp;languages.recent.categories=markup%2C programming&amp;languages.recent.load=300&amp;languages.recent.days=14&amp;people.limit=24&amp;people.identicons=false&amp;people.identicons.hide=false&amp;people.size=28&amp;people.types=followers%2C following&amp;people.shuffle=false&amp;activity.limit=5&amp;activity.load=300&amp;activity.days=14&amp;activity.visibility=all&amp;activity.timestamps=false&amp;activity.filter=all&amp;achievements.threshold=C&amp;achievements.secrets=true&amp;achievements.display=detailed&amp;achievements.limit=0&amp;notable.from=organization&amp;notable.repositories=false&amp;notable.indepth=false&amp;notable.types=commit&amp;repositories.featured= xlc520%2Fxlc520.github.io&amp;introduction.title=true&amp;pagespeed.url=xlc520.github.io&amp;pagespeed.detailed=false&amp;pagespeed.screenshot=false&amp;config.timezone=Asia%2FShanghai"> 
</p>`,r:{minutes:.58,words:175},y:"a",title:"2.TypeScript 常用语法",i:"note"},["/study/vue3_quick_study/chapter2/index.html","/study/vue3_quick_study/chapter2/README.md"]],["v-5cafefc2","/study/vue3_quick_study/chapter3/01_%E8%AE%A4%E8%AF%86Vue3.html",{a:"xlc520",d:"2022-07-28T00:00:00.000Z",l:"2022年7月28日",c:["Vue"],g:["Vue"],e:`<h1> 1. 认识Vue3</h1>
<h2> 1) 了解相关信息</h2>
<ul>
<li>Vue.js 3.0 "One Piece" 正式版在今年9月份发布</li>
<li>2年多开发, 100+位贡献者, 2600+次提交, 600+次PR</li>
<li><strong>Vue3支持vue2的大多数特性</strong></li>
<li><strong>更好的支持Typescript</strong></li>
</ul>
<h2> 2) 性能提升:</h2>
<ul>
<li>打包大小减少41%</li>
<li>初次渲染快55%, 更新渲染快133%</li>
<li>内存减少54%</li>
<li><strong>使用Proxy代替defineProperty实现数据响应式</strong></li>
<li><strong>重写虚拟DOM的实现和Tree-Shaking</strong></li>
</ul>`,r:{minutes:.75,words:224},y:"a",title:"认识Vue3",i:"vue"},["/study/vue3_quick_study/chapter3/01_认识Vue3.html","/study/vue3_quick_study/chapter3/01_%E8%AE%A4%E8%AF%86Vue3","/study/vue3_quick_study/chapter3/01_认识Vue3.md","/study/vue3_quick_study/chapter3/01_%E8%AE%A4%E8%AF%86Vue3.md"]],["v-b51510f6","/study/vue3_quick_study/chapter3/02_%E5%88%9B%E5%BB%BAvue3%E9%A1%B9%E7%9B%AE.html",{a:"xlc520",d:"2022-07-29T00:00:00.000Z",l:"2022年7月29日",c:["Vue"],g:["Vue"],e:`<h1> 2. 创建vue3项目</h1>
<h2> 1) 使用 vue-cli 创建</h2>
<p>文档: <a href="https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create" target="_blank" rel="noopener noreferrer">https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create</a></p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 安装或者升级</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @vue/cli
<span class="token comment">## 保证 vue cli 版本在 4.5.0 以上</span>
vue <span class="token parameter variable">--version</span>
<span class="token comment">## 创建项目</span>
vue create my-project
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.24,words:371},y:"a",title:"创建vue3项目",i:"vue"},["/study/vue3_quick_study/chapter3/02_创建vue3项目.html","/study/vue3_quick_study/chapter3/02_%E5%88%9B%E5%BB%BAvue3%E9%A1%B9%E7%9B%AE","/study/vue3_quick_study/chapter3/02_创建vue3项目.md","/study/vue3_quick_study/chapter3/02_%E5%88%9B%E5%BB%BAvue3%E9%A1%B9%E7%9B%AE.md"]],["v-43bfb7fe","/study/vue3_quick_study/chapter3/",{a:"xlc520",d:"2022-07-17T00:00:00.000Z",l:"2022年7月17日",c:["Vue"],g:["Vue"],e:`<p align="center"> 
  <img src="https://metrics.lecoq.io/xlc520?template=classic&amp;isocalendar=1&amp;languages=1&amp;people=1&amp;activity=1&amp;achievements=1&amp;lines=1&amp;repositories=1&amp;notable=1&amp;introduction=1&amp;pagespeed=1&amp;repositories=100&amp;repositories.batch=100&amp;repositories.forks=false&amp;repositories.affiliations=owner&amp;isocalendar.duration=full-year&amp;languages.limit=8&amp;languages.threshold=0%&amp;languages.colors=github&amp;languages.sections=most-used&amp;languages.indepth=false&amp;languages.analysis.timeout=15&amp;languages.categories=markup%2C programming&amp;languages.recent.categories=markup%2C programming&amp;languages.recent.load=300&amp;languages.recent.days=14&amp;people.limit=24&amp;people.identicons=false&amp;people.identicons.hide=false&amp;people.size=28&amp;people.types=followers%2C following&amp;people.shuffle=false&amp;activity.limit=5&amp;activity.load=300&amp;activity.days=14&amp;activity.visibility=all&amp;activity.timestamps=false&amp;activity.filter=all&amp;achievements.threshold=C&amp;achievements.secrets=true&amp;achievements.display=detailed&amp;achievements.limit=0&amp;notable.from=organization&amp;notable.repositories=false&amp;notable.indepth=false&amp;notable.types=commit&amp;repositories.featured= xlc520%2Fxlc520.github.io&amp;introduction.title=true&amp;pagespeed.url=xlc520.github.io&amp;pagespeed.detailed=false&amp;pagespeed.screenshot=false&amp;config.timezone=Asia%2FShanghai"> 
</p>`,r:{minutes:.58,words:175},y:"a",title:"3.Vue3快速上手",i:"note"},["/study/vue3_quick_study/chapter3/index.html","/study/vue3_quick_study/chapter3/README.md"]],["v-5dc35644","/study/vue3_quick_study/chapter4/01_Composition%20API_%E5%B8%B8%E7%94%A8%E9%83%A8%E5%88%86.html",{a:"xlc520",d:"2022-07-30T00:00:00.000Z",l:"2022年7月30日",c:["Vue"],g:["Vue"],e:`<h1> 1. Composition API(常用部分)</h1>
<p>文档:</p>
<p>​	<a href="https://composition-api.vuejs.org/zh/api.html" target="_blank" rel="noopener noreferrer">https://composition-api.vuejs.org/zh/api.html</a></p>
<h2> 1) setup</h2>
<ul>
<li>新的option, 所有的组合API函数都在此使用, 只在初始化时执行一次</li>
<li>函数如果返回对象, 对象中的属性或方法, 模板中可以直接使用</li>
</ul>`,r:{minutes:12.2,words:3661},y:"a",title:"Composition API",i:"vue"},["/study/vue3_quick_study/chapter4/01_Composition API_常用部分.html","/study/vue3_quick_study/chapter4/01_Composition%20API_%E5%B8%B8%E7%94%A8%E9%83%A8%E5%88%86","/study/vue3_quick_study/chapter4/01_Composition API_常用部分.md","/study/vue3_quick_study/chapter4/01_Composition%20API_%E5%B8%B8%E7%94%A8%E9%83%A8%E5%88%86.md"]],["v-306f125d","/study/vue3_quick_study/chapter4/02_Composition%20API_%E5%85%B6%E5%AE%83%E9%83%A8%E5%88%86.html",{a:"xlc520",d:"2022-07-31T00:00:00.000Z",l:"2022年7月31日",c:["Vue"],g:["Vue"],e:`<h1> 2. Composition API(其它部分)</h1>
<h2> 1) shallowReactive 与 shallowRef</h2>
<ul>
<li>
<p>shallowReactive : 只处理了对象内最外层属性的响应式(也就是浅响应式)</p>
</li>
<li>
<p>shallowRef: 只处理了value的响应式, 不进行对象的reactive处理</p>
</li>
<li>
<p>什么时候用浅响应式呢?</p>
<ul>
<li>一般情况下使用ref和reactive即可</li>
<li>如果有一个对象数据, 结构比较深, 但变化时只是外层属性变化 ===&gt; shallowReactive</li>
<li>如果有一个对象数据, 后面会产生新的对象来替换 ===&gt; shallowRef</li>
</ul>
</li>
</ul>`,r:{minutes:5.93,words:1780},y:"a",title:"Composition API",i:"vue"},["/study/vue3_quick_study/chapter4/02_Composition API_其它部分.html","/study/vue3_quick_study/chapter4/02_Composition%20API_%E5%85%B6%E5%AE%83%E9%83%A8%E5%88%86","/study/vue3_quick_study/chapter4/02_Composition API_其它部分.md","/study/vue3_quick_study/chapter4/02_Composition%20API_%E5%85%B6%E5%AE%83%E9%83%A8%E5%88%86.md"]],["v-16e4cf3e","/study/vue3_quick_study/chapter4/03_%E6%89%8B%E5%86%99%E7%BB%84%E5%90%88API.html",{a:"xlc520",d:"2022-08-01T00:00:00.000Z",l:"2022年8月1日",c:["Vue"],g:["Vue"],e:`<h1> 3. 手写组合API</h1>
<h2> 1) shallowReactive 与 reactive</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> reactiveHandler <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">get</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>key<span class="token operator">===</span><span class="token string">'_is_reactive'</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span>

    <span class="token keyword">return</span> Reflect<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">set</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'数据已更新, 去更新界面'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">deleteProperty</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> result <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'数据已删除, 去更新界面'</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> result
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 
自定义shallowReactive
*/</span>
<span class="token keyword">function</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> reactiveHandler<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 
自定义reactive
*/</span>
<span class="token keyword">function</span> <span class="token function">reactive</span> <span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> target<span class="token operator">===</span><span class="token string">'object'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token keyword">instanceof</span> <span class="token class-name">Array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 数组</span>
      target<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        target<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// 对象</span>
      Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">key</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> reactiveHandler<span class="token punctuation">)</span>
    <span class="token keyword">return</span> proxy
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> target
<span class="token punctuation">}</span>


<span class="token comment">/* 测试自定义shallowReactive */</span>
<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token function">shallowReactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">3</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

proxy<span class="token punctuation">.</span>a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">}</span> <span class="token comment">// 劫持到了</span>
proxy<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b <span class="token operator">=</span> <span class="token number">5</span> <span class="token comment">// 没有劫持到</span>


<span class="token comment">/* 测试自定义reactive */</span>
<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token string">'abc'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>proxy<span class="token punctuation">)</span>
proxy<span class="token punctuation">.</span>b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>x <span class="token operator">+=</span> <span class="token number">1</span>
proxy<span class="token punctuation">.</span>c<span class="token punctuation">.</span>x<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:2.06,words:618},y:"a",title:"手写组合API",i:"vue"},["/study/vue3_quick_study/chapter4/03_手写组合API.html","/study/vue3_quick_study/chapter4/03_%E6%89%8B%E5%86%99%E7%BB%84%E5%90%88API","/study/vue3_quick_study/chapter4/03_手写组合API.md","/study/vue3_quick_study/chapter4/03_%E6%89%8B%E5%86%99%E7%BB%84%E5%90%88API.md"]],["v-5cc4fad5","/study/vue3_quick_study/chapter4/04_Composition%20VS%20Option.html",{a:"xlc520",d:"2022-08-02T00:00:00.000Z",l:"2022年8月2日",c:["Vue"],g:["Vue"],e:`<h1> 4. Composition API VS Option API</h1>
<h2> 1) Option API的问题</h2>
<ul>
<li>在传统的Vue OptionsAPI中，新增或者修改一个需求，就需要分别在data，methods，computed里修改 ，滚动条反复上下移动</li>
</ul>
<figure><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f84e4e2c02424d9a99862ade0a2e4114~tplv-k3u1fbpfcp-watermark.image" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,r:{minutes:.57,words:170},y:"a",title:"Composition API VS Option API",i:"vue"},["/study/vue3_quick_study/chapter4/04_Composition VS Option.html","/study/vue3_quick_study/chapter4/04_Composition%20VS%20Option","/study/vue3_quick_study/chapter4/04_Composition VS Option.md","/study/vue3_quick_study/chapter4/04_Composition%20VS%20Option.md"]],["v-43bfb81d","/study/vue3_quick_study/chapter4/",{a:"xlc520",d:"2022-07-17T00:00:00.000Z",l:"2022年7月17日",c:["Vue"],g:["Vue"],e:`<p align="center"> 
  <img src="https://metrics.lecoq.io/xlc520?template=classic&amp;isocalendar=1&amp;languages=1&amp;people=1&amp;activity=1&amp;achievements=1&amp;lines=1&amp;repositories=1&amp;notable=1&amp;introduction=1&amp;pagespeed=1&amp;repositories=100&amp;repositories.batch=100&amp;repositories.forks=false&amp;repositories.affiliations=owner&amp;isocalendar.duration=full-year&amp;languages.limit=8&amp;languages.threshold=0%&amp;languages.colors=github&amp;languages.sections=most-used&amp;languages.indepth=false&amp;languages.analysis.timeout=15&amp;languages.categories=markup%2C programming&amp;languages.recent.categories=markup%2C programming&amp;languages.recent.load=300&amp;languages.recent.days=14&amp;people.limit=24&amp;people.identicons=false&amp;people.identicons.hide=false&amp;people.size=28&amp;people.types=followers%2C following&amp;people.shuffle=false&amp;activity.limit=5&amp;activity.load=300&amp;activity.days=14&amp;activity.visibility=all&amp;activity.timestamps=false&amp;activity.filter=all&amp;achievements.threshold=C&amp;achievements.secrets=true&amp;achievements.display=detailed&amp;achievements.limit=0&amp;notable.from=organization&amp;notable.repositories=false&amp;notable.indepth=false&amp;notable.types=commit&amp;repositories.featured= xlc520%2Fxlc520.github.io&amp;introduction.title=true&amp;pagespeed.url=xlc520.github.io&amp;pagespeed.detailed=false&amp;pagespeed.screenshot=false&amp;config.timezone=Asia%2FShanghai"> 
</p>`,r:{minutes:.56,words:169},y:"a",title:"4.Composition API",i:"note"},["/study/vue3_quick_study/chapter4/index.html","/study/vue3_quick_study/chapter4/README.md"]],["v-645cb53f","/study/vue3_quick_study/chapter5/01_%E6%96%B0%E7%BB%84%E4%BB%B6.html",{a:"xlc520",d:"2022-08-03T00:00:00.000Z",l:"2022年8月3日",c:["Vue"],g:["Vue"],e:`<h1> 1.  新组件</h1>
<h2> 1) Fragment(片断)</h2>
<ul>
<li>在Vue2中: 组件必须有一个根标签</li>
<li>在Vue3中: 组件可以没有根标签, 内部会将多个标签包含在一个Fragment虚拟元素中</li>
<li>好处: 减少标签层级, 减小内存占用</li>
</ul>
<div class="language-vue line-numbers-mode" data-ext="vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>aaaa<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">&gt;</span></span>aaaa<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,r:{minutes:1.5,words:451},y:"a",title:"新组件",i:"vue"},["/study/vue3_quick_study/chapter5/01_新组件.html","/study/vue3_quick_study/chapter5/01_%E6%96%B0%E7%BB%84%E4%BB%B6","/study/vue3_quick_study/chapter5/01_新组件.md","/study/vue3_quick_study/chapter5/01_%E6%96%B0%E7%BB%84%E4%BB%B6.md"]],["v-69e81a00","/study/vue3_quick_study/chapter5/02_%E5%85%B6%E4%BB%96%E6%96%B0API.html",{a:"xlc520",d:"2022-08-04T00:00:00.000Z",l:"2022年8月4日",c:["Vue"],g:["Vue"],e:`<h1> 2. 其他新的API</h1>
<h2> 全新的全局API</h2>
<ul>
<li>createApp()</li>
<li>defineProperty()</li>
<li>defineAsyncComponent()</li>
<li>nextTick()</li>
</ul>
<h2> 将原来的全局API转移到应用对象</h2>
<ul>
<li>app.component()</li>
<li>app.config()</li>
<li>app.directive()</li>
<li>app.mount()</li>
<li>app.unmount()</li>
<li>app.use()</li>
</ul>`,r:{minutes:.37,words:110},y:"a",title:"其他新的API",i:"vue"},["/study/vue3_quick_study/chapter5/02_其他新API.html","/study/vue3_quick_study/chapter5/02_%E5%85%B6%E4%BB%96%E6%96%B0API","/study/vue3_quick_study/chapter5/02_其他新API.md","/study/vue3_quick_study/chapter5/02_%E5%85%B6%E4%BB%96%E6%96%B0API.md"]],["v-43bfb83c","/study/vue3_quick_study/chapter5/",{a:"xlc520",d:"2022-07-17T00:00:00.000Z",l:"2022年7月17日",c:["Vue"],g:["Vue"],e:`<p align="center"> 
  <img src="https://metrics.lecoq.io/xlc520?template=classic&amp;isocalendar=1&amp;languages=1&amp;people=1&amp;activity=1&amp;achievements=1&amp;lines=1&amp;repositories=1&amp;notable=1&amp;introduction=1&amp;pagespeed=1&amp;repositories=100&amp;repositories.batch=100&amp;repositories.forks=false&amp;repositories.affiliations=owner&amp;isocalendar.duration=full-year&amp;languages.limit=8&amp;languages.threshold=0%&amp;languages.colors=github&amp;languages.sections=most-used&amp;languages.indepth=false&amp;languages.analysis.timeout=15&amp;languages.categories=markup%2C programming&amp;languages.recent.categories=markup%2C programming&amp;languages.recent.load=300&amp;languages.recent.days=14&amp;people.limit=24&amp;people.identicons=false&amp;people.identicons.hide=false&amp;people.size=28&amp;people.types=followers%2C following&amp;people.shuffle=false&amp;activity.limit=5&amp;activity.load=300&amp;activity.days=14&amp;activity.visibility=all&amp;activity.timestamps=false&amp;activity.filter=all&amp;achievements.threshold=C&amp;achievements.secrets=true&amp;achievements.display=detailed&amp;achievements.limit=0&amp;notable.from=organization&amp;notable.repositories=false&amp;notable.indepth=false&amp;notable.types=commit&amp;repositories.featured= xlc520%2Fxlc520.github.io&amp;introduction.title=true&amp;pagespeed.url=xlc520.github.io&amp;pagespeed.detailed=false&amp;pagespeed.screenshot=false&amp;config.timezone=Asia%2FShanghai"> 
</p>`,r:{minutes:.6,words:180},y:"a",title:"5.其它新组合和API",i:"note"},["/study/vue3_quick_study/chapter5/index.html","/study/vue3_quick_study/chapter5/README.md"]],["v-3706649a","/404.html",{y:"p",title:""},["/404"]],["v-5bc93818","/category/",{y:"p",title:"分类"},["/category/index.html"]],["v-744d024e","/tag/",{y:"p",title:"标签"},["/tag/index.html"]],["v-e52c881c","/article/",{y:"p",title:"文章"},["/article/index.html"]],["v-154dc4c4","/star/",{y:"p",title:"收藏"},["/star/index.html"]],["v-01560935","/timeline/",{y:"p",title:"时间轴"},["/timeline/index.html"]],["v-dc8c5890","/category/algorithm/",{y:"p",title:"algorithm 分类"},["/category/algorithm/index.html"]],["v-00725b24","/tag/algorithm/",{y:"p",title:"algorithm 标签"},["/tag/algorithm/index.html"]],["v-b87ca964","/category/daily/",{y:"p",title:"daily 分类"},["/category/daily/index.html"]],["v-5d93e6df","/tag/%E6%8E%92%E5%BA%8F/",{y:"p",title:"排序 标签"},["/tag/排序/","/tag/%E6%8E%92%E5%BA%8F/index.html"]],["v-5831b135","/category/java/",{y:"p",title:"Java 分类"},["/category/java/index.html"]],["v-20e912c0","/tag/algorithm---%E7%89%9B%E5%AE%A2/",{y:"p",title:"algorithm - 牛客 标签"},["/tag/algorithm---牛客/","/tag/algorithm---%E7%89%9B%E5%AE%A2/index.html"]],["v-90dbad92","/category/other/",{y:"p",title:"other 分类"},["/category/other/index.html"]],["v-7017fa8c","/tag/%E5%8D%8E%E4%B8%BA/",{y:"p",title:"华为 标签"},["/tag/华为/","/tag/%E5%8D%8E%E4%B8%BA/index.html"]],["v-78cbe7bb","/category/python/",{y:"p",title:"Python 分类"},["/category/python/index.html"]],["v-2687e471","/tag/%E7%AE%97%E6%B3%95/",{y:"p",title:"算法 标签"},["/tag/算法/","/tag/%E7%AE%97%E6%B3%95/index.html"]],["v-5824b700","/category/idea/",{y:"p",title:"IDEA 分类"},["/category/idea/index.html"]],["v-1754261e","/tag/%E8%BD%AC%E6%8D%A2/",{y:"p",title:"转换 标签"},["/tag/转换/","/tag/%E8%BD%AC%E6%8D%A2/index.html"]],["v-282f03f4","/tag/%E6%9F%A5%E6%89%BE/",{y:"p",title:"查找 标签"},["/tag/查找/","/tag/%E6%9F%A5%E6%89%BE/index.html"]],["v-b30ee52c","/category/essay/",{y:"p",title:"essay 分类"},["/category/essay/index.html"]],["v-3d5315f8","/tag/daily/",{y:"p",title:"daily 标签"},["/tag/daily/index.html"]],["v-38e14bad","/category/finance/",{y:"p",title:"Finance 分类"},["/category/finance/index.html"]],["v-28a1d8bf","/tag/java/",{y:"p",title:"Java 标签"},["/tag/java/index.html"]],["v-fd3344d8","/category/github/",{y:"p",title:"GitHub 分类"},["/category/github/index.html"]],["v-b3126996","/tag/es6/",{y:"p",title:"ES6 标签"},["/tag/es6/index.html"]],["v-65efd6b5","/category/git/",{y:"p",title:"Git 分类"},["/category/git/index.html"]],["v-3b951558","/tag/javascript/",{y:"p",title:"JavaScript 标签"},["/tag/javascript/index.html"]],["v-9c48d85a","/category/linux/",{y:"p",title:"Linux 分类"},["/category/linux/index.html"]],["v-b30b9cbe","/tag/map/",{y:"p",title:"Map 标签"},["/tag/map/index.html"]],["v-2c049111","/category/euserv/",{y:"p",title:"Euserv 分类"},["/category/euserv/index.html"]],["v-30e11687","/tag/jenkins/",{y:"p",title:"Jenkins 标签"},["/tag/jenkins/index.html"]],["v-6106c001","/tag/docker/",{y:"p",title:"Docker 标签"},["/tag/docker/index.html"]],["v-3d186184","/category/pc/",{y:"p",title:"pc 分类"},["/category/pc/index.html"]],["v-15b21a26","/tag/other/",{y:"p",title:"other 标签"},["/tag/other/index.html"]],["v-1c4f74a8","/category/script/",{y:"p",title:"Script 分类"},["/category/script/index.html"]],["v-245f5676","/tag/python/",{y:"p",title:"Python 标签"},["/tag/python/index.html"]],["v-57d526ca","/category/code/",{y:"p",title:"Code 分类"},["/category/code/index.html"]],["v-5616b529","/tag/rocketmq/",{y:"p",title:"RocketMQ 标签"},["/tag/rocketmq/index.html"]],["v-83291cc4","/category/study/",{y:"p",title:"Study 分类"},["/category/study/index.html"]],["v-0da0d9fd","/tag/mq/",{y:"p",title:"MQ 标签"},["/tag/mq/index.html"]],["v-80519068","/category/tools/",{y:"p",title:"Tools 分类"},["/category/tools/index.html"]],["v-59fa8282","/tag/springboot/",{y:"p",title:"SpringBoot 标签"},["/tag/springboot/index.html"]],["v-91ad3226","/category/coding/",{y:"p",title:"coding 分类"},["/category/coding/index.html"]],["v-41e71c66","/tag/mybatis-plus/",{y:"p",title:"Mybatis-plus 标签"},["/tag/mybatis-plus/index.html"]],["v-65f6d381","/category/vue/",{y:"p",title:"Vue 分类"},["/category/vue/index.html"]],["v-7d0ba9b4","/tag/spring/",{y:"p",title:"Spring 标签"},["/tag/spring/index.html"]],["v-2894de8a","/tag/idea/",{y:"p",title:"IDEA 标签"},["/tag/idea/index.html"]],["v-22fc0b23","/tag/%E5%BE%AE%E6%9C%8D%E5%8A%A1/",{y:"p",title:"微服务 标签"},["/tag/微服务/","/tag/%E5%BE%AE%E6%9C%8D%E5%8A%A1/index.html"]],["v-0ae00356","/tag/%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97/",{y:"p",title:"消息队列 标签"},["/tag/消息队列/","/tag/%E6%B6%88%E6%81%AF%E9%98%9F%E5%88%97/index.html"]],["v-13770b26","/tag/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/",{y:"p",title:"数据结构 标签"},["/tag/数据结构/","/tag/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/index.html"]],["v-43c5a647","/tag/article/",{y:"p",title:"article 标签"},["/tag/article/index.html"]],["v-37e551c0","/tag/essay/",{y:"p",title:"essay 标签"},["/tag/essay/index.html"]],["v-646a7fe3","/tag/finance/",{y:"p",title:"Finance 标签"},["/tag/finance/index.html"]],["v-132a6ac4","/tag/github/",{y:"p",title:"GitHub 标签"},["/tag/github/index.html"]],["v-b310d42a","/tag/git/",{y:"p",title:"Git 标签"},["/tag/git/index.html"]],["v-211f44ee","/tag/linux/",{y:"p",title:"Linux 标签"},["/tag/linux/index.html"]],["v-bdee03ca","/tag/euserv/",{y:"p",title:"Euserv 标签"},["/tag/euserv/index.html"]],["v-721080b6","/tag/nodejs/",{y:"p",title:"NodeJS 标签"},["/tag/nodejs/index.html"]],["v-1e90405c","/tag/maven/",{y:"p",title:"Maven 标签"},["/tag/maven/index.html"]],["v-1bee38ca","/tag/mysql/",{y:"p",title:"Mysql 标签"},["/tag/mysql/index.html"]],["v-28639a62","/tag/esxi/",{y:"p",title:"Esxi 标签"},["/tag/esxi/index.html"]],["v-b301ff26","/tag/wsl/",{y:"p",title:"WSL 标签"},["/tag/wsl/index.html"]],["v-51730494","/tag/%E5%AD%90%E7%B3%BB%E7%BB%9F/",{y:"p",title:"子系统 标签"},["/tag/子系统/","/tag/%E5%AD%90%E7%B3%BB%E7%BB%9F/index.html"]],["v-4a89825a","/tag/windows/",{y:"p",title:"Windows 标签"},["/tag/windows/index.html"]],["v-6efec93b","/tag/openssl/",{y:"p",title:"Openssl 标签"},["/tag/openssl/index.html"]],["v-b304e574","/tag/tmp/",{y:"p",title:"tmp 标签"},["/tag/tmp/index.html"]],["v-2834a796","/tag/bios/",{y:"p",title:"BIOS 标签"},["/tag/bios/index.html"]],["v-29610dbf","/tag/wsl2/",{y:"p",title:"WSL2 标签"},["/tag/wsl2/index.html"]],["v-742fbe9b","/tag/kubernetes/",{y:"p",title:"Kubernetes 标签"},["/tag/kubernetes/index.html"]],["v-b30ea152","/tag/k8s/",{y:"p",title:"k8s 标签"},["/tag/k8s/index.html"]],["v-4a1dcd88","/tag/cloudflare/",{y:"p",title:"CloudFlare 标签"},["/tag/cloudflare/index.html"]],["v-0da0b4b1","/tag/e5/",{y:"p",title:"E5 标签"},["/tag/e5/index.html"]],["v-d08dfa36","/tag/office/",{y:"p",title:"office 标签"},["/tag/office/index.html"]],["v-0da0e901","/tag/qq/",{y:"p",title:"QQ 标签"},["/tag/qq/index.html"]],["v-41ad7530","/tag/%E7%94%B5%E8%A7%86/",{y:"p",title:"电视 标签"},["/tag/电视/","/tag/%E7%94%B5%E8%A7%86/index.html"]],["v-263d024a","/tag/%E8%93%9D%E5%A5%8F/",{y:"p",title:"蓝奏 标签"},["/tag/蓝奏/","/tag/%E8%93%9D%E5%A5%8F/index.html"]],["v-0060d308","/tag/google/",{y:"p",title:"Google 标签"},["/tag/google/index.html"]],["v-0da0e38e","/tag/pc/",{y:"p",title:"pc 标签"},["/tag/pc/index.html"]],["v-66dcb2b6","/tag/script/",{y:"p",title:"Script 标签"},["/tag/script/index.html"]],["v-4659f144","/tag/alist/",{y:"p",title:"Alist 标签"},["/tag/alist/index.html"]],["v-28454e54","/tag/code/",{y:"p",title:"Code 标签"},["/tag/code/index.html"]],["v-b3149e20","/tag/cdn/",{y:"p",title:"CDN 标签"},["/tag/cdn/index.html"]],["v-07ff8958","/tag/study/",{y:"p",title:"Study 标签"},["/tag/study/index.html"]],["v-0527fcfc","/tag/tools/",{y:"p",title:"Tools 标签"},["/tag/tools/index.html"]],["v-b31616ba","/tag/api/",{y:"p",title:"API 标签"},["/tag/api/index.html"]],["v-2c2dd3f7","/tag/coding/",{y:"p",title:"coding 标签"},["/tag/coding/index.html"]],["v-b302da92","/tag/vue/",{y:"p",title:"Vue 标签"},["/tag/vue/index.html"]]];var Vuepress=defineComponent({name:"Vuepress",setup(){const b=usePageLayout();return()=>h$3(b.value)}}),createRoutes=()=>pagesRoutes.reduce((b,[$,j,U,G])=>(b.push({name:$,path:j,component:Vuepress,meta:U},...G.map(W=>({path:W,redirect:j}))),b),[{name:"404",path:"/:catchAll(.*)",component:Vuepress}]),historyCreator=createWebHistory,createVueRouter=()=>{const b=createRouter({history:historyCreator(removeEndingSlash("/")),routes:createRoutes(),scrollBehavior:($,j,U)=>U||($.hash?{el:$.hash}:{top:0})});return b.beforeResolve(async($,j)=>{var U;($.path!==j.path||j===START_LOCATION_NORMALIZED)&&([pageData.value]=await Promise.all([resolvers.resolvePageData($.name),(U=pagesComponents[$.name])==null?void 0:U.__asyncLoader()]))}),b},setupGlobalComponents=b=>{b.component("ClientOnly",ClientOnly),b.component("Content",Content)},setupGlobalComputed=(b,$,j)=>{const U=computed(()=>resolvers.resolveLayouts(j)),G=computed(()=>resolvers.resolveRouteLocale(siteData.value.locales,$.currentRoute.value.path)),W=computed(()=>resolvers.resolveSiteLocaleData(siteData.value,G.value)),K=computed(()=>resolvers.resolvePageFrontmatter(pageData.value)),Y=computed(()=>resolvers.resolvePageHeadTitle(pageData.value,W.value)),ee=computed(()=>resolvers.resolvePageHead(Y.value,K.value,W.value)),ne=computed(()=>resolvers.resolvePageLang(pageData.value)),ae=computed(()=>resolvers.resolvePageLayout(pageData.value,U.value));return b.provide(layoutsSymbol,U),b.provide(pageFrontmatterSymbol,K),b.provide(pageHeadTitleSymbol,Y),b.provide(pageHeadSymbol,ee),b.provide(pageLangSymbol,ne),b.provide(pageLayoutSymbol,ae),b.provide(routeLocaleSymbol,G),b.provide(siteLocaleDataSymbol,W),Object.defineProperties(b.config.globalProperties,{$frontmatter:{get:()=>K.value},$head:{get:()=>ee.value},$headTitle:{get:()=>Y.value},$lang:{get:()=>ne.value},$page:{get:()=>pageData.value},$routeLocale:{get:()=>G.value},$site:{get:()=>siteData.value},$siteLocale:{get:()=>W.value},$withBase:{get:()=>withBase}}),{layouts:U,pageData,pageFrontmatter:K,pageHead:ee,pageHeadTitle:Y,pageLang:ne,pageLayout:ae,routeLocale:G,siteData,siteLocaleData:W}},setupUpdateHead=()=>{const b=useRoute(),$=usePageHead(),j=usePageLang(),U=ref([]),G=()=>{$.value.forEach(K=>{const Y=queryHeadTag(K);Y&&U.value.push(Y)})},W=()=>{document.documentElement.lang=j.value,U.value.forEach(K=>{K.parentNode===document.head&&document.head.removeChild(K)}),U.value.splice(0,U.value.length),$.value.forEach(K=>{const Y=createHeadTag(K);Y!==null&&(document.head.appendChild(Y),U.value.push(Y))})};provide(updateHeadSymbol,W),onMounted(()=>{G(),W(),watch(()=>b.path,()=>W())})},queryHeadTag=([b,$,j=""])=>{const U=Object.entries($).map(([Y,ee])=>isString$1(ee)?`[${Y}=${JSON.stringify(ee)}]`:ee===!0?`[${Y}]`:"").join(""),G=`head > ${b}${U}`;return Array.from(document.querySelectorAll(G)).find(Y=>Y.innerText===j)||null},createHeadTag=([b,$,j])=>{if(!isString$1(b))return null;const U=document.createElement(b);return isPlainObject($)&&Object.entries($).forEach(([G,W])=>{isString$1(W)?U.setAttribute(G,W):W===!0&&U.setAttribute(G,"")}),isString$1(j)&&U.appendChild(document.createTextNode(j)),U},appCreator=createSSRApp,createVueApp=async()=>{var j;const b=appCreator({name:"VuepressApp",setup(){var U;setupUpdateHead();for(const G of clientConfigs)(U=G.setup)==null||U.call(G);return()=>[h$3(RouterView),...clientConfigs.flatMap(({rootComponents:G=[]})=>G.map(W=>h$3(W)))]}}),$=createVueRouter();setupGlobalComponents(b),setupGlobalComputed(b,$,clientConfigs);for(const U of clientConfigs)await((j=U.enhance)==null?void 0:j.call(U,{app:b,router:$,siteData}));return b.use($),{app:b,router:$}};createVueApp().then(({app:b,router:$})=>{$.isReady().then(()=>{b.mount("#app")})});export{Ot as O,Wt as W,__vitePreload as _,useLocalStorage as a,useRouteLocale as b,useEventListener as c,createVueApp,disableBodyScroll as d,clearAllBodyScrollLocks as e,useDebounceFn as f,lt as l,st as s,useSiteData as u};
