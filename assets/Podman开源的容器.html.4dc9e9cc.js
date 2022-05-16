import{r,c as l,a as n,b as i,F as o,d as a,e as s,o as t}from"./app.7e96b125.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";const c={},d=a('<p><img src="https://mmbiz.qpic.cn/mmbiz_png/GjuWRiaNxhnQ7UdGu7GkFW1JTLG84Sbke4nPJmv0419zZF8UBbuvqNQc9PscMEOQUf9Q11xX4no3LKadzfhNZoA/640?wx_fmt=png&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="\u56FE\u7247" loading="lazy"></p><p>\u6765\u6E90\uFF1Ahttp://t-t.ink/0V26K</p><h3 id="\u4EC0\u4E48\u662Fpodman" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662Fpodman" aria-hidden="true">#</a> \u4EC0\u4E48\u662FPodman\uFF1F</h3><p>Podman \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u5BB9\u5668\u8FD0\u884C\u65F6\u9879\u76EE\uFF0C\u53EF\u5728\u5927\u591A\u6570 Linux \u5E73\u53F0\u4E0A\u4F7F\u7528\u3002Podman \u63D0\u4F9B\u4E0E Docker \u975E\u5E38\u76F8\u4F3C\u7684\u529F\u80FD\u3002\u6B63\u5982\u524D\u9762\u63D0\u5230\u7684\u90A3\u6837\uFF0C\u5B83\u4E0D\u9700\u8981\u5728\u4F60\u7684\u7CFB\u7EDF\u4E0A\u8FD0\u884C\u4EFB\u4F55\u5B88\u62A4\u8FDB\u7A0B\uFF0C\u5E76\u4E14\u5B83\u4E5F\u53EF\u4EE5\u5728\u6CA1\u6709 root \u6743\u9650\u7684\u60C5\u51B5\u4E0B\u8FD0\u884C\u3002</p><p>Podman \u53EF\u4EE5\u7BA1\u7406\u548C\u8FD0\u884C\u4EFB\u4F55\u7B26\u5408 OCI\uFF08Open Container Initiative\uFF09\u89C4\u8303\u7684\u5BB9\u5668\u548C\u5BB9\u5668\u955C\u50CF\u3002Podman \u63D0\u4F9B\u4E86\u4E00\u4E2A\u4E0E Docker \u517C\u5BB9\u7684\u547D\u4EE4\u884C\u524D\u7AEF\u6765\u7BA1\u7406 Docker \u955C\u50CF\u3002</p><p>Podman \u5B98\u7F51\u5730\u5740\uFF1Ahttps://podman.io/</p><h4 id="\u300Cpodman\u548Cdocker\u7684\u4E3B\u8981\u533A\u522B\u662F\u4EC0\u4E48-\u300D" tabindex="-1"><a class="header-anchor" href="#\u300Cpodman\u548Cdocker\u7684\u4E3B\u8981\u533A\u522B\u662F\u4EC0\u4E48-\u300D" aria-hidden="true">#</a> <strong>\u300CPodman\u548CDocker\u7684\u4E3B\u8981\u533A\u522B\u662F\u4EC0\u4E48\uFF1F\u300D</strong></h4>',7),b=n("li",null,"dockers\u5728\u5B9E\u73B0CRI\u7684\u65F6\u5019\uFF0C\u5B83\u9700\u8981\u4E00\u4E2A\u5B88\u62A4\u8FDB\u7A0B\uFF0C\u5176\u6B21\u9700\u8981\u4EE5root\u8FD0\u884C\uFF0C\u56E0\u6B64\u8FD9\u4E5F\u5E26\u6765\u4E86\u5B89\u5168\u9690\u60A3\u3002",-1),u=n("li",null,"podman\u4E0D\u9700\u8981\u5B88\u62A4\u7A0B\u5E8F\uFF0C\u4E5F\u4E0D\u9700\u8981root\u7528\u6237\u8FD0\u884C\uFF0C\u4ECE\u903B\u8F91\u67B6\u6784\u4E0A\uFF0C\u6BD4docker\u66F4\u52A0\u5408\u7406\u3002",-1),m=n("li",null,"\u5728docker\u7684\u8FD0\u884C\u4F53\u7CFB\u4E2D\uFF0C\u9700\u8981\u591A\u4E2Adaemon\u624D\u80FD\u8C03\u7528\u5230OCI\u7684\u5B9E\u73B0RunC\u3002",-1),h=n("li",null,"\u5728\u5BB9\u5668\u7BA1\u7406\u7684\u94FE\u8DEF\u4E2D\uFF0CDocker Engine\u7684\u5B9E\u73B0\u5C31\u662Fdockerd",-1),g=n("li",null,"daemon\uFF0C\u5B83\u5728linux\u4E2D\u9700\u8981\u4EE5root\u8FD0\u884C\uFF0Cdockerd\u8C03\u7528containerd\uFF0Ccontainerd\u8C03\u7528containerd-shim\uFF0C\u7136\u540E\u624D\u80FD\u8C03\u7528runC\u3002\u987E\u540D\u601D\u4E49shim\u8D77\u7684\u4F5C\u7528\u4E5F\u5C31\u662F\u201C\u57AB\u7247\u201D\uFF0C\u907F\u514D\u7236\u8FDB\u7A0B\u9000\u51FA\u5F71\u54CD\u5BB9\u5668\u7684\u8FD0\u8BAD",-1),x=s("podman\u76F4\u63A5\u8C03\u7528OCI,runtime\uFF08runC\uFF09\uFF0C\u901A\u8FC7common\u4F5C\u4E3A\u5BB9\u5668\u8FDB\u7A0B\u7684\u7BA1\u7406\u5DE5\u5177\uFF0C\u4F46\u4E0D\u9700\u8981dockerd\u8FD9\u79CD\u4EE5root\u8EAB\u4EFD\u8FD0\u884C\u7684\u5B88\u62A4\u8FDB\u7A0B\u3002("),f={href:"http://mp.weixin.qq.com/s?__biz=MzU5NTgzMDYyMA==&mid=2247499357&idx=1&sn=77697f0fbec449d80e58cafbfb1f7eb4&chksm=fe694c6ec91ec578753a087ef6d28719f095f9750d3d13785c253b719dc0b08a89fe3df53700&scene=21#wechat_redirect",target:"_blank",rel:"noopener noreferrer"},v=s("\u70B9\u51FB\u4E0B\u8F7D2021\u5E74\u6700\u65B0\u963F\u91CCp7\u9762\u8BD5\u9898"),q=s("\u6559\u7A0B)"),_=n("li",null,"\u5728podman\u4F53\u7CFB\u4E2D\uFF0C\u6709\u4E2A\u79F0\u4E4B\u4E3Acommon\u7684\u5B88\u62A4\u8FDB\u7A0B\uFF0C\u5176\u8FD0\u884C\u8DEF\u5F84\u901A\u5E38\u662F/usr/libexec/podman/conmon\uFF0C\u5B83\u662F\u5404\u4E2A\u5BB9\u5668\u8FDB\u7A0B\u7684\u7236\u8FDB\u7A0B\uFF0C\u6BCF\u4E2A\u5BB9\u5668\u5404\u6709\u4E00\u4E2A\uFF0Ccommon\u7684\u7236\u5219\u901A\u5E38\u662F1\u53F7\u8FDB\u7A0B\u3002podman\u4E2D\u7684common\u5176\u5B9E\u76F8\u5F53\u4E8Edocker\u4F53\u7CFB\u4E2D\u7684containerd-shim\u3002",-1),y=a(`<p>\u56FE\u4E2D\u6240\u4F53\u73B0\u7684\u4E8B\u60C5\u662F\uFF0Cpodman\u4E0D\u9700\u8981\u5B88\u62A4\u8FDB\u7A0B\uFF0C\u800Cdorker\u9700\u8981\u5B88\u62A4\u8FDB\u7A0B\u3002\u5728\u8FD9\u4E2A\u56FE\u7684\u793A\u610F\u4E2D\uFF0Cdorcker\u7684containerd-shim\u4E0Epodman\u7684common\u88AB\u5F52\u5728Container\u4E00\u5C42\u3002</p><h4 id="\u300Cpodman\u7684\u4F7F\u7528\u4E0Edocker\u6709\u4EC0\u4E48\u533A\u522B-\u300D" tabindex="-1"><a class="header-anchor" href="#\u300Cpodman\u7684\u4F7F\u7528\u4E0Edocker\u6709\u4EC0\u4E48\u533A\u522B-\u300D" aria-hidden="true">#</a> <strong>\u300CPodman\u7684\u4F7F\u7528\u4E0Edocker\u6709\u4EC0\u4E48\u533A\u522B\uFF1F\u300D</strong></h4><p>podman\u7684\u5B9A\u4F4D\u4E5F\u662F\u4E0Edocker\u517C\u5BB9\uFF0C\u56E0\u6B64\u5728\u4F7F\u7528\u4E0A\u9762\u5C3D\u91CF\u9760\u8FD1docker\u3002\u5728\u4F7F\u7528\u65B9\u9762\uFF0C\u53EF\u4EE5\u5206\u6210\u4E24\u4E2A\u65B9\u9762\u6765\u8BF4\uFF0C\u4E00\u662F\u7CFB\u7EDF\u6784\u5EFA\u8005\u7684\u89D2\u5EA6\uFF0C\u4E8C\u662F\u4F7F\u7528\u8005\u7684\u89D2\u5EA6\u3002</p><p>\u5728\u7CFB\u7EDF\u6784\u5EFA\u8005\u65B9\u9762\uFF0C\u7528podman\u7684\u9ED8\u8BA4\u8F6F\u4EF6\uFF0C\u4E0Edocker\u7684\u533A\u522B\u4E0D\u5927\uFF0C\u53EA\u662F\u5728\u8FDB\u7A0B\u6A21\u578B\u3001\u8FDB\u7A0B\u5173\u7CFB\u65B9\u9762\u6709\u6240\u533A\u522B\u3002\u5982\u679C\u4E60\u60EF\u4E86docker\u51E0\u4E2A\u5173\u8054\u8FDB\u7A0B\u7684\u8C03\u8BD5\u65B9\u6CD5\uFF0C\u5728podman\u4E2D\u5219\u9700\u8981\u9002\u5E94\u3002\u53EF\u4EE5\u901A\u8FC7pstree\u547D\u4EE4\u67E5\u770B\u8FDB\u7A0B\u7684\u6811\u72B6\u7ED3\u6784\u3002\u603B\u4F53\u6765\u770B\uFF0Cpodman\u6BD4docker\u8981\u7B80\u5355\u3002\u7531\u4E8Epodman\u6BD4docker\u5C11\u4E86\u4E00\u5C42daemon\uFF0C\u56E0\u6B64\u91CD\u542F\u7684\u673A\u5236\u4E5F\u5C31\u4E0D\u540C\u4E86\u3002</p><p>\u5728\u4F7F\u7528\u8005\u65B9\u9762\uFF0Cpodman\u4E0Edocker\u7684\u547D\u4EE4\u57FA\u672C\u517C\u5BB9\uFF0C\u90FD\u5305\u62EC\u5BB9\u5668\u8FD0\u884C\u65F6\uFF08run/start/kill/ps/inspect\uFF09\uFF0C\u672C\u5730\u955C\u50CF\uFF08images/rmi/build\uFF09\u3001\u955C\u50CF\u4ED3\u5E93\uFF08login/pull/push\uFF09\u7B49\u51E0\u4E2A\u65B9\u9762\u3002\u56E0\u6B64podman\u7684\u547D\u4EE4\u884C\u5DE5\u5177\u4E0Edocker\u7C7B\u4F3C\uFF0C\u6BD4\u5982\u6784\u5EFA\u955C\u50CF\u3001\u542F\u505C\u5BB9\u5668\u7B49\u3002\u751A\u81F3\u53EF\u4EE5\u901A\u8FC7alias</p><p>docker=podman\u53EF\u4EE5\u8FDB\u884C\u66FF\u6362\u3002\u56E0\u6B64\uFF0C\u5373\u4FBF\u4F7F\u7528\u4E86podman\uFF0C\u4ECD\u7136\u53EF\u4EE5\u4F7F\u7528docker.io\u4F5C\u4E3A\u955C\u50CF\u4ED3\u5E93\uFF0C\u8FD9\u4E5F\u662F\u517C\u5BB9\u6027\u6700\u5173\u952E\u7684\u90E8\u5206\u3002</p><h3 id="podman\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#podman\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> Podman\u5E38\u7528\u547D\u4EE4</h3><h4 id="\u300C\u5BB9\u5668\u300D" tabindex="-1"><a class="header-anchor" href="#\u300C\u5BB9\u5668\u300D" aria-hidden="true">#</a> <strong>\u300C\u5BB9\u5668\u300D</strong></h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>podman run           \u521B\u5EFA\u5E76\u542F\u52A8\u5BB9\u5668
podman start         \u542F\u52A8\u5BB9\u5668
podman ps            \u67E5\u770B\u5BB9\u5668
podman stop          \u7EC8\u6B62\u5BB9\u5668
podman restart       \u91CD\u542F\u5BB9\u5668
podman attach        \u8FDB\u5165\u5BB9\u5668
podman exec          \u8FDB\u5165\u5BB9\u5668
podman export        \u5BFC\u51FA\u5BB9\u5668
podman import        \u5BFC\u5165\u5BB9\u5668\u5FEB\u7167
podman rm            \u5220\u9664\u5BB9\u5668
podman logs          \u67E5\u770B\u65E5\u5FD7
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h4 id="\u300C\u955C\u50CF\u300D" tabindex="-1"><a class="header-anchor" href="#\u300C\u955C\u50CF\u300D" aria-hidden="true">#</a> <strong>\u300C\u955C\u50CF\u300D</strong></h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>podman search                \u68C0\u7D22\u955C\u50CF
podman pull                  \u83B7\u53D6\u955C\u50CF
podman images                \u5217\u51FA\u955C\u50CF
podman image Is              \u5217\u51FA\u955C\u50CF
podman rmi                   \u5220\u9664\u955C\u50CF
podman image rm              \u5220\u9664\u955C\u50CF
podman save                  \u5BFC\u51FA\u955C\u50CF
podman load                  \u5BFC\u5165\u955C\u50CF
podmanfile                   \u5B9A\u5236\u955C\u50CF\uFF08\u4E09\u4E2A\uFF09
  podman build             \u6784\u5EFA\u955C\u50CF
    podman run               \u8FD0\u884C\u955C\u50CF
    podmanfile               \u5E38\u7528\u6307\u4EE4\uFF08\u56DB\u4E2A\uFF09
      COPY                 \u590D\u5236\u6587\u4EF6
        ADD                  \u9AD8\u7EA7\u590D\u5236
        CMD                  \u5BB9\u5668\u542F\u52A8\u547D\u4EE4
        ENV                  \u73AF\u5883\u53D8\u91CF
        EXPOSE               \u66B4\u9732\u7AEF\u53E3
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h4 id="\u300C\u90E8\u7F72-podman\u300D" tabindex="-1"><a class="header-anchor" href="#\u300C\u90E8\u7F72-podman\u300D" aria-hidden="true">#</a> <strong>\u300C\u90E8\u7F72 Podman\u300D</strong></h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u5B89\u88C5podman
[root@localhost ~]# yum -y install podman
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u300Cpodman-\u52A0\u901F\u5668\u300D" tabindex="-1"><a class="header-anchor" href="#\u300Cpodman-\u52A0\u901F\u5668\u300D" aria-hidden="true">#</a> <strong>\u300CPodman \u52A0\u901F\u5668\u300D</strong></h3><p>\u7248\u672C7\u914D\u7F6E\u52A0\u901F\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//\u4ED3\u5E93\u914D\u7F6E
[root@localhost ~]# vim /etc/containers/registries.conf
[registries.search]
#registries = [&quot;registry.access.redhat.com&quot;, &quot;registry.redhat.io&quot;, &quot;docker.io&quot;]   #\u8FD9\u4E2A\u662F\u67E5\u627E\uFF0C\u4ECE\u8FD9\u4E09\u4E2A\u5730\u65B9\u67E5\u627E

registries = [&quot;docker.io&quot;]    #\u5982\u679C\u53EA\u7559\u4E00\u4E2A\uFF0C\u5219\u53EA\u5728\u4E00\u4E2A\u6E90\u91CC\u67E5\u627E
[[docker.io]]
location=&quot;j3m2itm3.mirror.aliyuncs.com&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u7248\u672C8\u914D\u7F6E\u52A0\u901F\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#unqualified-search-registries = [&quot;registry.fedoraproject.org&quot;, &quot;registry.access.redhat.com&quot;, &quot;registry.centos.org&quot;, &quot;docker.io&quot;]     #\u76F4\u63A5\u6CE8\u91CA\u6389
unqualified-search-registries = [&quot;docker.io&quot;]    #\u6DFB\u52A0\u4E00\u4E2Adocker.io
[[registry]]
prefix = &quot;docker.io&quot;
location = &quot;j3m2itm3.mirror.aliyuncs.com&quot; \uFF08\u4E0D\u7528\u52A0https://  \u76F4\u63A5\u52A0\u5730\u5740\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u300C\u4F7F\u7528-podman\u300D" tabindex="-1"><a class="header-anchor" href="#\u300C\u4F7F\u7528-podman\u300D" aria-hidden="true">#</a> <strong>\u300C\u4F7F\u7528 Podman\u300D</strong></h3><p>\u4F7F\u7528 Podman \u975E\u5E38\u7684\u7B80\u5355\uFF0CPodman \u7684\u6307\u4EE4\u8DDF Docker \u5927\u591A\u6570\u90FD\u662F\u76F8\u540C\u7684\u3002\u4E0B\u9762\u6211\u4EEC\u6765\u770B\u51E0\u4E2A\u5E38\u7528\u7684\u4F8B\u5B50\uFF1A</p><h4 id="\u8FD0\u884C\u4E00\u4E2A\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u4E00\u4E2A\u5BB9\u5668" aria-hidden="true">#</a> \u8FD0\u884C\u4E00\u4E2A\u5BB9\u5668</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@localhost ~]# podman run -d --name httpd docker.io/library/httpd
Trying to pull docker.io/library/httpd...
Getting image source signatures
Copying blob e5ae68f74026 done  
Copying blob d3576f2b6317 done  
Copying blob bc36ee1127ec done  
Copying blob f1aa5f54b226 done  
Copying blob aa379c0cedc2 done  
Copying config ea28e1b82f done  
Writing manifest to image destination
Storing signatures
0492e405b9ecb05e6e6be1fec0ac1a8b6ba3ff949df259b45146037b5f355035

//\u67E5\u770B\u955C\u50CF
[root@localhost ~]# podman images
REPOSITORY                  TAG      IMAGE ID       CREATED       SIZE
docker.io/library/httpd     latest   ea28e1b82f31   11 days ago   148 MB
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h4 id="\u5217\u51FA\u8FD0\u884C\u7684\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u5217\u51FA\u8FD0\u884C\u7684\u5BB9\u5668" aria-hidden="true">#</a> \u5217\u51FA\u8FD0\u884C\u7684\u5BB9\u5668</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@localhost ~]# podman ps
CONTAINER ID  IMAGE                             COMMAND           CREATED             STATUS                 PORTS  NAMES
0492e405b9ec  docker.io/library/httpd:latest    httpd-foreground  About a minute ago  Up About a minute ago         httpd
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6CE8\u610F\uFF1A\u5982\u679C\u5728ps\u547D\u4EE4\u4E2D\u6DFB\u52A0-a\uFF0CPodman \u5C06\u663E\u793A\u6240\u6709\u5BB9\u5668\u3002</p><h4 id="\u68C0\u67E5\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668" aria-hidden="true">#</a> \u68C0\u67E5\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668</h4><p>\u60A8\u53EF\u4EE5\u201C\u68C0\u67E5\u201D\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668\u7684\u5143\u6570\u636E\u548C\u6709\u5173\u5176\u81EA\u8EAB\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002\u6211\u4EEC\u751A\u81F3\u53EF\u4EE5\u4F7F\u7528 inspect \u5B50\u547D\u4EE4\u67E5\u770B\u5206\u914D\u7ED9\u5BB9\u5668\u7684 IP \u5730\u5740\u3002\u7531\u4E8E\u5BB9\u5668\u4EE5\u65E0\u6839\u6A21\u5F0F\u8FD0\u884C\uFF0C\u56E0\u6B64\u672A\u5206\u914D IP \u5730\u5740\uFF0C\u5E76\u4E14\u8BE5\u503C\u5C06\u5728\u68C0\u67E5\u7684\u8F93\u51FA\u4E2D\u5217\u4E3A\u201C\u65E0\u201D\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@localhost ~]# podman inspect -l | grep IPAddress\\&quot;: 
            &quot;SecondaryIPAddresses&quot;: null, 
            &quot;IPAddress&quot;: &quot;10.88.0.5&quot;,

[root@localhost ~]# curl 10.88.0.5
&lt;html&gt;&lt;body&gt;&lt;h1&gt;It works!&lt;/h1&gt;&lt;/body&gt;&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6CE8\u610F\uFF1A-l \u662F\u6700\u65B0\u5BB9\u5668\u7684\u4FBF\u5229\u53C2\u6570\u3002\u60A8\u8FD8\u53EF\u4EE5\u4F7F\u7528\u5BB9\u5668\u7684 ID \u4EE3\u66FF -l\u3002</p><h4 id="\u67E5\u770B\u4E00\u4E2A\u8FD0\u884C\u4E2D\u5BB9\u5668\u7684\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u4E00\u4E2A\u8FD0\u884C\u4E2D\u5BB9\u5668\u7684\u65E5\u5FD7" aria-hidden="true">#</a> \u67E5\u770B\u4E00\u4E2A\u8FD0\u884C\u4E2D\u5BB9\u5668\u7684\u65E5\u5FD7</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u9009\u9879
  --latest    #\u6700\u8FD1\u7684
  
[root@localhost ~]# podman logs --latest
AH00558: httpd: Could not reliably determine the server&#39;s fully qualified domain name, using 10.88.0.5. Set the &#39;ServerName&#39; directive globally to suppress this message
AH00558: httpd: Could not reliably determine the server&#39;s fully qualified domain name, using 10.88.0.5. Set the &#39;ServerName&#39; directive globally to suppress this message
[Mon Dec 13 15:17:53.690844 2021] [mpm_event:notice] [pid 1:tid 140665160166720] AH00489: Apache/2.4.51 (Unix) configured -- resuming normal operations
[Mon Dec 13 15:17:53.690946 2021] [core:notice] [pid 1:tid 140665160166720] AH00094: Command line: &#39;httpd -D FOREGROUND&#39;
10.88.0.1 - - [13/Dec/2021:15:19:48 +0000] &quot;GET / HTTP/1.1&quot; 200 45
10.88.0.1 - - [13/Dec/2021:15:20:47 +0000] &quot;GET / HTTP/1.1&quot; 200 45
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u67E5\u770B\u4E00\u4E2A\u8FD0\u884C\u5BB9\u5668\u4E2D\u7684\u8FDB\u7A0B\u8D44\u6E90\u4F7F\u7528\u60C5\u51B5\uFF0C\u53EF\u4EE5\u4F7F\u7528top\u89C2\u5BDF\u5BB9\u5668\u4E2D\u7684 nginx pid</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8BED\u6CD5\uFF1A
  podman top &lt;container_id&gt;  
  
[root@localhost ~]# podman top httpd
USER       PID   PPID   %CPU    ELAPSED            TTY   TIME   COMMAND
root       1     0      0.000   15m38.599711321s   ?     0s     httpd -DFOREGROUND 
www-data   7     1      0.000   15m38.599783256s   ?     0s     httpd -DFOREGROUND 
www-data   8     1      0.000   15m38.599845342s   ?     0s     httpd -DFOREGROUND 
www-data   9     1      0.000   15m38.599880444s   ?     0s     httpd -DFOREGROUND 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h4 id="\u505C\u6B62\u4E00\u4E2A\u8FD0\u884C\u4E2D\u7684\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u505C\u6B62\u4E00\u4E2A\u8FD0\u884C\u4E2D\u7684\u5BB9\u5668" aria-hidden="true">#</a> \u505C\u6B62\u4E00\u4E2A\u8FD0\u884C\u4E2D\u7684\u5BB9\u5668</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@localhost ~]# podman stop --latest
2f3edf712621d3a41e03fa8c7f6a5cdba56fbbad43a7a59ede26cc88f31006c4
[root@localhost ~]# podman ps
CONTAINER ID  IMAGE  COMMAND  CREATED  STATUS  PORTS  NAMES
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="\u5220\u9664\u4E00\u4E2A\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u4E00\u4E2A\u5BB9\u5668" aria-hidden="true">#</a> \u5220\u9664\u4E00\u4E2A\u5BB9\u5668</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@localhost ~]# podman rm --latest
2f3edf712621d3a41e03fa8c7f6a5cdba56fbbad43a7a59ede26cc88f31006c4
[root@localhost ~]# podman ps -a
CONTAINER ID  IMAGE  COMMAND  CREATED  STATUS  PORTS  NAMES
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4EE5\u4E0A\u8FD9\u4E9B\u7279\u6027\u57FA\u672C\u4E0A\u90FD\u548C Docker \u4E00\u6837\uFF0CPodman \u9664\u4E86\u517C\u5BB9\u8FD9\u4E9B\u7279\u6027\u5916\uFF0C\u8FD8\u652F\u6301\u4E86\u4E00\u4E9B\u65B0\u7684\u7279\u6027\u3002</p><h4 id="\u4E0A\u4F20\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20\u955C\u50CF" aria-hidden="true">#</a> \u4E0A\u4F20\u955C\u50CF</h4><p>\u4F8B\u5982\uFF0C\u5982\u679C\u6211\u4EEC\u60F3\u5728 docker.io \u4E0A\u5206\u4EAB\u6211\u4EEC\u65B0\u5EFA\u7684 Nginx \u5BB9\u5668\u955C\u50CF\uFF0C\u8FD9\u5F88\u5BB9\u6613\u3002\u9996\u5148\u767B\u5F55\u7801\u5934\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@localhost nginx]# tree 
.
\u251C\u2500\u2500 Dockerfile
\u2514\u2500\u2500 files
    \u2514\u2500\u2500 nginx-1.20.1.tar.gz

[root@localhost nginx]# cat Dockerfile 
FROM docker.io/library/centos

ENV PATH /usr/local/nginx/sbin:$PATH
ADD files/nginx-1.20.1.tar.gz /usr/src
RUN useradd -r -M -s /sbin/nologin nginx &amp;&amp; \\
    yum -y install pcre-devel openssl openssl-devel gd-devel gcc gcc-c++ make &amp;&amp; \\
    mkdir -p /var/log/nginx &amp;&amp; \\
    cd /usr/src/nginx-1.20.1 &amp;&amp; \\
    ./configure \\
    --prefix=/usr/local/nginx \\
    --user=nginx \\
    --group=nginx \\
    --with-debug \\
    --with-http_ssl_module \\
    --with-http_realip_module \\
    --with-http_image_filter_module \\
    --with-http_gunzip_module \\
    --with-http_gzip_static_module \\
    --with-http_stub_status_module \\
    --http-log-path=/var/log/nginx/access.log \\
    --error-log-path=/var/log/nginx/error.log &amp;&amp; \\
  make &amp;&amp; make install

CMD [&quot;nginx&quot;,&quot;-g&quot;,&quot;daemon off&quot;]
[root@localhost nginx]# podman build -t nginx .

// \u4FEE\u6539\u955C\u50CF\u540D
 [root@localhost ~]# podman tag docker.io/library/nginx:latest docker.io/1314444/test:latest

// \u767B\u5F55\u5E76\u4E0A\u4F20\u955C\u50CF
[root@localhost ~]# podman login docker.io // \u9700\u8981\u544A\u8BC9\u5176\u8981\u767B\u5F55\u5230docker\u4ED3\u5E93
[root@localhost ~]# podman login docker.io
Username: 1314444    #\u8D26\u6237
Password: ********    #\u5BC6\u7801
Login Succeeded!

[root@localhost nginx]# podman push docker.io/1314444/test:latest  //\u4E0A\u4F20\u955C\u50CF
Getting image source signatures
Copying blob 38c40d6c2c85 done
Copying blob fee76a531659 done
Copying blob c2adabaecedb done
Copying config 7f3589c0b8 done
Writing manifest to image destination
Copying config 7f3589c0b8 done
Writing manifest to image destination
Storing signatures


//\u8BF7\u6CE8\u610F\uFF0C\u6211\u4EEC\u5C06\u56DB\u5C42\u63A8\u9001\u5230\u6211\u4EEC\u7684\u6CE8\u518C\u8868\uFF0C\u73B0\u5728\u53EF\u4F9B\u5176\u4ED6\u4EBA\u5171\u4EAB\u3002\u5FEB\u901F\u6D4F\u89C8\u4E00\u4E0B\uFF1A
[root@localhost ~]# podman inspect 1314444/test:nginx
//\u8F93\u51FA\uFF1A
[
    {
        &quot;Id&quot;: &quot;7f3589c0b8849a9e1ff52ceb0fcea2390e2731db9d1a7358c2f5fad216a48263&quot;,
        &quot;Digest&quot;: &quot;sha256:7822b5ba4c2eaabdd0ff3812277cfafa8a25527d1e234be028ed381a43ad5498&quot;,
        &quot;Repotag&quot;: [
            &quot;docker.io/1314444/test:nginx&quot;,
    ......
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br></div></div><p>\u603B\u800C\u8A00\u4E4B\uFF0CPodman \u4F7F\u67E5\u627E\u3001\u8FD0\u884C\u3001\u6784\u5EFA\u548C\u5171\u4EAB\u5BB9\u5668\u53D8\u5F97\u5BB9\u6613\u3002</p><h4 id="\u914D\u7F6E\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u522B\u540D" aria-hidden="true">#</a> \u914D\u7F6E\u522B\u540D</h4><p>\u5982\u679C\u4E60\u60EF\u4E86\u4F7F\u7528 Docker \u547D\u4EE4\uFF0C\u53EF\u4EE5\u76F4\u63A5\u7ED9 Podman \u914D\u7F6E\u4E00\u4E2A\u522B\u540D\u6765\u5B9E\u73B0\u65E0\u7F1D\u8F6C\u79FB\u3002\u4F60\u53EA\u9700\u8981\u5728 .bashrc \u4E0B\u52A0\u5165\u4EE5\u4E0B\u884C\u5185\u5BB9\u5373\u53EF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@localhost ~]# echo &quot;alias docker=podman&quot; &gt;&gt; .bashrc
source .bashrc
[root@localhost ~]# alias
alias cp=&#39;cp -i&#39;
alias docker=&#39;podman&#39;
.......
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u300C\u7528\u6237\u64CD\u4F5C\u300D" tabindex="-1"><a class="header-anchor" href="#\u300C\u7528\u6237\u64CD\u4F5C\u300D" aria-hidden="true">#</a> <strong>\u300C\u7528\u6237\u64CD\u4F5C\u300D</strong></h3><p>\u5728\u5141\u8BB8\u6CA1\u6709root\u7279\u6743\u7684\u7528\u6237\u8FD0\u884CPodman\u4E4B\u524D\uFF0C\u7BA1\u7406\u5458\u5FC5\u987B\u5B89\u88C5\u6216\u6784\u5EFAPodman\u5E76\u5B8C\u6210\u4EE5\u4E0B\u914D\u7F6E</p><p>cgroup V2Linux\u5185\u6838\u529F\u80FD\u5141\u8BB8\u7528\u6237\u9650\u5236\u666E\u901A\u7528\u6237\u5BB9\u5668\u53EF\u4EE5\u4F7F\u7528\u7684\u8D44\u6E90\uFF0C\u5982\u679C\u4F7F\u7528cgroupV2\u542F\u7528\u4E86\u8FD0\u884CPodman\u7684Linux\u53D1\u884C\u7248\uFF0C\u5219\u53EF\u80FD\u9700\u8981\u66F4\u6539\u9ED8\u8BA4\u7684OCI\u8FD0\u884C\u65F6\u3002\u67D0\u4E9B\u8F83\u65E7\u7684\u7248\u672Crunc\u4E0D\u9002\u7528\u4E8EcgroupV2\uFF0C\u5FC5\u987B\u5207\u6362\u5230\u5907\u7528OCI\u8FD0\u884C\u65F6crun\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@localhost ~]# yum -y install crun     //centos8\u7CFB\u7EDF\u81EA\u5E26

[root@localhost ~]# vi /usr/share/containers/containers.conf 
    446 # Default OCI runtime
    447 # 
    448 runtime = &quot;crun&quot;      //\u53D6\u6D88\u6CE8\u91CA\u5E76\u5C06runc\u6539\u4E3Acrun

[root@localhost ~]# podman run -d --name web -p 80:80 docker.io/library/nginx
c8664d2e43c872e1e5219f82d41f63048ed3a5ed4fb6259c225a14d6c243677f

[root@localhost ~]# podman inspect web | grep crun
        &quot;OCIRuntime&quot;: &quot;crun&quot;,
            &quot;crun&quot;,
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="\u5B89\u88C5slirp4netns\u548Cfuse-overlayfs" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5slirp4netns\u548Cfuse-overlayfs" aria-hidden="true">#</a> \u5B89\u88C5slirp4netns\u548Cfuse-overlayfs</h4><p>\u5728\u666E\u901A\u7528\u6237\u73AF\u5883\u4E2D\u4F7F\u7528Podman\u65F6\uFF0C\u5EFA\u8BAE\u4F7F\u7528fuse-overlayfs\u800C\u4E0D\u662FVFS\u6587\u4EF6\u7CFB\u7EDF\uFF0C\u81F3\u5C11\u9700\u8981\u7248\u672C0.7.6\u3002\u73B0\u5728\u65B0\u7248\u672C\u9ED8\u8BA4\u5C31\u662F\u4E86\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@localhost ~]# yum -y install slirp4netns

[root@localhost ~]# yum -y install fuse-overlayfs
[root@localhost ~]# vi /etc/containers/storage.conf
77 mount_program = &quot;/usr/bin/fuse-overlayfs&quot;     //\u53D6\u6D88\u6CE8\u91CA
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="etc-subuid\u548C-etc-subgid\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#etc-subuid\u548C-etc-subgid\u914D\u7F6E" aria-hidden="true">#</a> / etc / subuid\u548C/ etc / subgid\u914D\u7F6E</h4><p>Podman\u8981\u6C42\u8FD0\u884C\u5B83\u7684\u7528\u6237\u5728/ etc / subuid\u548C/ etc / subgid\u6587\u4EF6\u4E2D\u5217\u51FA\u4E00\u7CFB\u5217UID,shadow-utils\u6216newuid\u5305\u63D0\u4F9B\u8FD9\u4E9B\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@localhost ~]# yum -y install shadow-utils

\u53EF\u4EE5\u5728/ etc / subuid\u548C/ etc / subgid\u67E5\u770B\uFF0C\u6BCF\u4E2A\u7528\u6237\u7684\u503C\u5FC5\u987B\u552F\u4E00\u4E14\u6CA1\u6709\u4EFB\u4F55\u91CD\u53E0\u3002

[root@localhost ~]# useradd zz
[root@localhost ~]# cat /etc/subuid
zz:100000:65536
[root@localhost ~]# cat /etc/subgid
zz:100000:65536

// \u542F\u52A8\u975E\u7279\u6743ping 
[root@localhost ~]# sysctl -w &quot;net.ipv4.ping_group_range=0 200000&quot; //\u5927\u4E8E100000\u8FD9\u4E2A\u5C31\u8868\u793Atom\u53EF\u4EE5\u64CD\u4F5Cpodman
net.ipv4.ping_group_range = 0 200000
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u8FD9\u4E2A\u6587\u4EF6\u7684\u683C\u5F0F\u662F USERNAME:UID:RANGE\u4E2D/etc/passwd\u6216\u8F93\u51FA\u4E2D\u5217\u51FA\u7684\u7528\u6237\u540Dgetpwent\u3002</p><ul><li>\u4E3A\u7528\u6237\u5206\u914D\u7684\u521D\u59CB UID\u3002</li><li>\u4E3A\u7528\u6237\u5206\u914D\u7684 UID \u8303\u56F4\u7684\u5927\u5C0F\u3002</li></ul><p>\u8BE5usermod\u7A0B\u5E8F\u53EF\u7528\u4E8E\u4E3A\u7528\u6237\u5206\u914D UID \u548C GID\uFF0C\u800C\u4E0D\u662F\u76F4\u63A5\u66F4\u65B0\u6587\u4EF6\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@localhost ~]# usermod --add-subuids 200000-201000 --add-subgids 200000-201000 hh
grep hh /etc/subuid /etc/subgid
/etc/subuid:hh:200000:1001
/etc/subgid:hh:200000:1001
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="\u7528\u6237\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u7528\u6237\u914D\u7F6E\u6587\u4EF6</h4><p>\u4E09\u4E2A\u4E3B\u8981\u7684\u914D\u7F6E\u6587\u4EF6\u662F**\u300Ccontainer.conf\u300D<strong>\u3001</strong>\u300Cstorage.conf\u300D<strong>\u548C</strong>\u300Cregistries.conf\u300D**\u3002\u7528\u6237\u53EF\u4EE5\u6839\u636E\u9700\u8981\u4FEE\u6539\u8FD9\u4E9B\u6587\u4EF6\u3002</p><p>container.conf</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u7528\u6237\u914D\u7F6E\u6587\u4EF6
[root@localhost ~]# cat /usr/share/containers/containers.conf
[root@localhost ~]# cat /etc/containers/containers.conf
[root@localhost ~]# cat ~/.config/containers/containers.conf  //\u4F18\u5148\u7EA7\u6700\u9AD8
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u5982\u679C\u5B83\u4EEC\u4EE5\u8BE5\u987A\u5E8F\u5B58\u5728\u3002\u6BCF\u4E2A\u6587\u4EF6\u90FD\u53EF\u4EE5\u8986\u76D6\u7279\u5B9A\u5B57\u6BB5\u7684\u524D\u4E00\u4E2A\u6587\u4EF6\u3002</p><p>\u914D\u7F6Estorage.conf\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1./etc/containers/storage.conf
2.$HOME/.config/containers/storage.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5728\u666E\u901A\u7528\u6237\u4E2D**/etc/containers/storage.conf**\u7684\u4E00\u4E9B\u5B57\u6BB5\u5C06\u88AB\u5FFD\u7565</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@localhost ~]#  vi /etc/containers/storage.conf
[storage]

# Default Storage Driver, Must be set for proper operation.
driver = &quot;overlay&quot;    #\u6B64\u5904\u6539\u4E3Aoverlay
.......
mount_program = &quot;/usr/bin/fuse-overlayfs&quot;    #\u53D6\u6D88\u6CE8\u91CA

[root@localhost ~]# sysctl user.max_user_namespaces=15000  #\u5982\u679C\u7248\u672C\u4E3A8\u4EE5\u4E0B\uFF0C\u5219\u9700\u8981\u505A\u4EE5\u4E0B\u64CD\u4F5C\uFF1A
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u5728\u666E\u901A\u7528\u6237\u4E2D\u8FD9\u4E9B\u5B57\u6BB5\u9ED8\u8BA4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>graphroot=&quot;$HOME/.local/share/containers/storage&quot;
runroot=&quot;$XDG_RUNTIME_DIR/containers&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>registries.conf</p><p>\u914D\u7F6E\u6309\u6B64\u987A\u5E8F\u8BFB\u5165,\u8FD9\u4E9B\u6587\u4EF6\u4E0D\u662F\u9ED8\u8BA4\u521B\u5EFA\u7684,\u53EF\u4EE5\u4ECE**/usr/share/containers**\u300C\u6216\u590D\u5236\u6587\u4EF6\u300D<strong>/etc/containers</strong>\u5E76\u8FDB\u884C\u4FEE\u6539\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1./etc/containers/registries.conf
2./etc/containers/registries.d/*
3.HOME/.config/containers/registries.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6388\u6743\u6587\u4EF6</p><p>\u6B64\u6587\u4EF6\u91CC\u9762\u5199\u4E86docker\u8D26\u53F7\u7684\u5BC6\u7801\uFF0C\u4EE5\u52A0\u5BC6\u65B9\u5F0F\u663E\u793A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@localhost ~]# podman login
Username: 1314444
Password: 
Login Succeeded!
[root@localhost ~]# cat /run/user/0/containers/auth.json 
{
        &quot;auths&quot;: {
                &quot;registry.fedoraproject.org&quot;: {
                        &quot;auth&quot;: &quot;MTMxNDQ0NDpIMjAxNy0xOA==&quot;
                }
        }
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>\u666E\u901A\u7528\u6237\u662F\u65E0\u6CD5\u770B\u89C1root\u7528\u6237\u7684\u955C\u50CF\u7684</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//root\u7528\u6237
[root@localhost ~]# podman images
REPOSITORY                  TAG      IMAGE ID       CREATED       SIZE
docker.io/library/httpd     latest   ea28e1b82f31   11 days ago   146 MB

//\u666E\u901A\u7528\u6237
[root@localhost ~]# su - zz
[zz@localhost ~]$ podman images
REPOSITORY  TAG         IMAGE ID    CREATED     SIZE
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="\u5377" tabindex="-1"><a class="header-anchor" href="#\u5377" aria-hidden="true">#</a> \u5377</h3><ul><li>\u5BB9\u5668\u4E0Eroot\u7528\u6237\u4E00\u8D77\u8FD0\u884C\uFF0C\u5219root\u5BB9\u5668\u4E2D\u7684\u7528\u6237\u5B9E\u9645\u4E0A\u5C31\u662F\u4E3B\u673A\u4E0A\u7684\u7528\u6237\u3002</li><li>UID GID\u662F\u5728/etc/subuid\u548C/etc/subgid\u7B49\u4E2D\u7528\u6237\u6620\u5C04\u4E2D\u6307\u5B9A\u7684\u7B2C\u4E00\u4E2AUID GID\u3002</li><li>\u5982\u679C\u666E\u901A\u7528\u6237\u7684\u8EAB\u4EFD\u4ECE\u4E3B\u673A\u76EE\u5F55\u6302\u8F7D\u5230\u5BB9\u5668\u4E2D\uFF0C\u5E76\u5728\u8BE5\u76EE\u5F55\u4E2D\u4EE5\u6839\u7528\u6237\u8EAB\u4EFD\u521B\u5EFA\u6587\u4EF6\uFF0C\u5219\u4F1A\u770B\u5230\u5B83\u5B9E\u9645\u4E0A\u662F\u4F60\u7684\u7528\u6237\u5728\u4E3B\u673A\u4E0A\u62E5\u6709\u7684\u3002</li></ul><h4 id="\u4F7F\u7528\u5377" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u5377" aria-hidden="true">#</a> \u4F7F\u7528\u5377</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@localhost ~]# su - zz
[zz@localhost ~]$ pwd
/home/zz
[zz@localhost ~]$ mkdir /home/zz/data

[zz@localhost ~]$ podman run -it -v &quot;$(pwd)&quot;/data:/data docker.io/library/busybox /bin/sh
Trying to pull docker.io/library/busybox:latest...
Getting image source signatures
Copying blob 3cb635b06aa2 done  
Copying config ffe9d497c3 done  
Writing manifest to image destination
Storing signatures
/ # ls
bin   data  dev   etc   home  proc  root  run   sys   tmp   usr   var
/ # cd data/
/data # ls
/data # touch 123
/data # ls -l
total 0
-rw-r--r--    1 root     root             0 Dec 13 00:17 123
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h4 id="\u5728\u4E3B\u673A\u4E0A\u67E5\u770B" tabindex="-1"><a class="header-anchor" href="#\u5728\u4E3B\u673A\u4E0A\u67E5\u770B" aria-hidden="true">#</a> \u5728\u4E3B\u673A\u4E0A\u67E5\u770B</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[zz@localhost ~]$ ll data/
\u603B\u7528\u91CF 0
-rw-r--r-- 1 zz zz 0 12\u6708 13 00:17 123

//\u5199\u5165\u6587\u4EF6
[zz@localhost ~]$ echo &quot;hell world&quot; &gt;&gt; 123
[zz@localhost ~]$ cat 123
hell world
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="\u5BB9\u5668\u91CC\u67E5\u770B" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u5668\u91CC\u67E5\u770B" aria-hidden="true">#</a> \u5BB9\u5668\u91CC\u67E5\u770B</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/data # cat 123
hell world

//\u6211\u4EEC\u53EF\u4EE5\u53D1\u73B0\u5728\u5BB9\u5668\u91CC\u9762\u7684\u6587\u4EF6\u7684\u5C5E\u4E3B\u548C\u5C5E\u7EC4\u90FD\u5C5E\u4E8Eroot\uFF0C\u90A3\u4E48\u5982\u4F55\u624D\u80FD\u8BA9\u5176\u5C5E\u4E8Etom\u7528\u6237\u5462\uFF1F\u4E0B\u9762\u544A\u8BC9\u4F60\u7B54\u6848
/data # ls -l
total 4
-rw-rw-r--    1 root     root            12 Dec 13 00:20 123

//\u53EA\u8981\u5728\u8FD0\u884C\u5BB9\u5668\u7684\u65F6\u5019\u52A0\u4E0A\u4E00\u4E2A--userns=keep-id\u5373\u53EF\u3002
[zz@localhost ~]$ podman run -it --name test -v &quot;$(pwd)&quot;/data:/data --userns=keep-id docker.io/library/busybox /bin/sh
~ $ cd data/
/data $ ls -l
total 4
-rw-r--r--    1 zz       zz              11 Dec 13 00:21 123
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u4F7F\u7528\u666E\u901A\u7528\u6237\u6620\u5C04\u5BB9\u5668\u7AEF\u53E3\u65F6\u4F1A\u62A5\u201C permission denied\u201D\u7684\u9519\u8BEF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[zz@localhost ~]$ podman run  -d -p 80:80 httpd
Error: rootlessport cannot expose privileged port 80, you can add &#39;net.ipv4.ip_unprivileged_port_start=80&#39; to /etc/sysctl.conf (currently 1024), or choose a larger port number (&gt;= 1024): listen tcp 0.0.0.0:80: bind: permission denied
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u666E\u901A\u7528\u6237\u53EF\u4EE5\u6620\u5C04&gt;= 1024\u7684\u7AEF\u53E3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[zz@localhost ~]$ podman run  -d -p 1024:80 httpd
58613a6bdc70d4d4f9f624583f795a62a610596d166f0873bdff8fb26aa15092
[zz@localhost ~]$ ss -anlt
State       Recv-Q      Send-Q           Local Address:Port           Peer Address:Port      Process      
LISTEN      0           128                    0.0.0.0:22                  0.0.0.0:*                      
LISTEN      0           128                          *:1024                      *:*                      
LISTEN      0           128                       [::]:22                     [::]:* 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u914D\u7F6Eecho \u2018net.ipv4.ip_unprivileged_port_start=80\u2019 &gt;&gt; /etc/sysctl.conf\u540E\u53EF\u4EE5\u6620\u5C04\u5927\u4E8E\u7B49\u4E8E80\u7684\u7AEF\u53E3</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>[root@localhost ~]# echo  &#39;net.ipv4.ip_unprivileged_port_start=80&#39;  &gt;&gt; /etc/sysctl.conf
[root@localhost ~]# sysctl -p
net.ipv4.ip_unprivileged_port_start = 80

[zz@localhost ~]$ podman run -d -p 80:80 httpd
1215455a0c300d78e7bf6afaefc9873f818c6b0f26affeee4e2bc17954e72d8e
[zz@localhost ~]$ ss -anlt
State       Recv-Q      Send-Q           Local Address:Port           Peer Address:Port      Process      
LISTEN      0           128                    0.0.0.0:22                  0.0.0.0:*                      
LISTEN      0           128                          *:1024                      *:*                      
LISTEN      0           128                          *:80                        *:*                      
LISTEN      0           128                       [::]:22                     [::]:*  
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,92);function k(D,E){const e=r("ExternalLinkIcon");return t(),l(o,null,[d,n("ul",null,[b,u,m,h,g,n("li",null,[x,n("a",f,[v,i(e)]),q]),_]),y],64)}var P=p(c,[["render",k],["__file","Podman\u5F00\u6E90\u7684\u5BB9\u5668.html.vue"]]);export{P as default};
