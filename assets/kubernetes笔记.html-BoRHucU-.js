import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,a as s}from"./app-DS3HItsn.js";const t={},i=s(`<h1 id="kubernetes-笔记" tabindex="-1"><a class="header-anchor" href="#kubernetes-笔记"><span>kubernetes 笔记</span></a></h1><h2 id="master-单机集群配置" tabindex="-1"><a class="header-anchor" href="#master-单机集群配置"><span>master 单机集群配置</span></a></h2><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code>apiVersion<span class="token operator">:</span> kubeadm.k8s.io/v1beta3
bootstrapTokens<span class="token operator">:</span>
- groups<span class="token operator">:</span>
  - system<span class="token operator">:</span>bootstrappers<span class="token operator">:</span>kubeadm<span class="token operator">:</span>default-node-token
  token<span class="token operator">:</span> abcdef.0123456789abcdef
  ttl<span class="token operator">:</span> 24h0m0s
  usages<span class="token operator">:</span>
  - signing
  - authentication
kind<span class="token operator">:</span> InitConfiguration
localAPIEndpoint<span class="token operator">:</span>
  # master的ip
  advertiseAddress<span class="token operator">:</span> <span class="token number">192.168</span>.<span class="token number">200.129</span>
  bindPort<span class="token operator">:</span> <span class="token number">6443</span>
nodeRegistration<span class="token operator">:</span>
  # 当前使用containerd docker已废弃
  criSocket<span class="token operator">:</span> unix<span class="token operator">:</span><span class="token comment">///var/run/containerd/containerd.sock</span>
  imagePullPolicy<span class="token operator">:</span> IfNotPresent
  name<span class="token operator">:</span> k8s-master
  taints<span class="token operator">:</span> <span class="token null keyword">null</span>
---
apiServer<span class="token operator">:</span>
  timeoutForControlPlane<span class="token operator">:</span> 4m0s
  certSANs<span class="token operator">:</span>
  - <span class="token number">192.168</span>.<span class="token number">200.129</span>
apiVersion<span class="token operator">:</span> kubeadm.k8s.io/v1beta3
certificatesDir<span class="token operator">:</span> /etc/kubernetes/pki
clusterName<span class="token operator">:</span> kubernetes
controllerManager<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
dns<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
etcd<span class="token operator">:</span>
  local<span class="token operator">:</span>
    dataDir<span class="token operator">:</span> /var/lib/etcd
# 使用国内镜像
imageRepository<span class="token operator">:</span> registry.cn-hangzhou.aliyuncs.com/google_containers
kind<span class="token operator">:</span> ClusterConfiguration
kubernetesVersion<span class="token operator">:</span> <span class="token number">1.26</span>.<span class="token number">0</span>
networking<span class="token operator">:</span>
  dnsDomain<span class="token operator">:</span> cluster.local
  serviceSubnet<span class="token operator">:</span> <span class="token number">10.96</span>.<span class="token number">0.0</span>/<span class="token number">12</span>
  podSubnet<span class="token operator">:</span> <span class="token number">10.244</span>.<span class="token number">0.0</span>/<span class="token number">16</span>
scheduler<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kuberneets-安装-dashboard-pod-初始化失败" tabindex="-1"><a class="header-anchor" href="#kuberneets-安装-dashboard-pod-初始化失败"><span>kuberneets 安装 dashboard pod 初始化失败</span></a></h2><h3 id="kubernetes-版本为-1-26-0" tabindex="-1"><a class="header-anchor" href="#kubernetes-版本为-1-26-0"><span>kubernetes 版本为 1.26.0</span></a></h3><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>coderstory@k8s-master:~/k8s$ kubectl version
WARNING: This version information is deprecated and will be replaced with the output from kubectl version --short.  Use --output=yaml|json to get the full version.
Client Version: version.Info{Major:&quot;1&quot;, Minor:&quot;26&quot;, GitVersion:&quot;v1.26.0&quot;, GitCommit:&quot;b46a3f887ca979b1a5d14fd39cb1af43e7e5d12d&quot;, GitTreeState:&quot;clean&quot;, BuildDate:&quot;2022-12-08T19:58:30Z&quot;, GoVersion:&quot;go1.19.4&quot;, Compiler:&quot;gc&quot;, Platform:&quot;linux/amd64&quot;}
Kustomize Version: v4.5.7
Server Version: version.Info{Major:&quot;1&quot;, Minor:&quot;26&quot;, GitVersion:&quot;v1.26.0&quot;, GitCommit:&quot;b46a3f887ca979b1a5d14fd39cb1af43e7e5d12d&quot;, GitTreeState:&quot;clean&quot;, BuildDate:&quot;2022-12-08T19:51:45Z&quot;, GoVersion:&quot;go1.19.4&quot;, Compiler:&quot;gc&quot;, Platform:&quot;linux/amd64&quot;}
coderstory@k8s-master:~/k8s$ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cni-插件已安装-calico-且已工作" tabindex="-1"><a class="header-anchor" href="#cni-插件已安装-calico-且已工作"><span>cni 插件已安装 calico 且已工作</span></a></h3><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>coderstory@k8s-master:~/k8s$ kubectl get pod -n kube-system
NAME                                      READY   STATUS    RESTARTS   AGE
calico-kube-controllers-57b57c56f-xhqxt   1/1     Running   0          2d23h
calico-node-ktfgl                         1/1     Running   0          2d23h
calico-node-ngz6l                         1/1     Running   0          2d23h
calico-node-t855q                         1/1     Running   0          2d23h
coredns-567c556887-t2kdc                  1/1     Running   0          3d
coredns-567c556887-x2pmh                  1/1     Running   0          3d
etcd-k8s-master                           1/1     Running   0          3d
kube-apiserver-k8s-master                 1/1     Running   0          3d
kube-controller-manager-k8s-master        1/1     Running   0          3d
kube-proxy-2h6dm                          1/1     Running   0          2d23h
kube-proxy-c6gk4                          1/1     Running   0          3d
kube-proxy-kqx45                          1/1     Running   0          2d23h
kube-scheduler-k8s-master                 1/1     Running   0          3d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-kubectl-create-f-dashboard-yaml-创建后-get-pod-一直没就绪" tabindex="-1"><a class="header-anchor" href="#使用-kubectl-create-f-dashboard-yaml-创建后-get-pod-一直没就绪"><span>使用 kubectl create -f dashboard.yaml 创建后，get pod 一直没就绪</span></a></h3><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>coderstory@k8s-master:~/k8s$ kubectl get pod  -n kubernetes-dashboard
NAME                                        READY   STATUS              RESTARTS   AGE
dashboard-metrics-scraper-976d575c7-n2krt   0/1     ContainerCreating   0          29m
kubernetes-dashboard-7978989845-fvlqg       0/1     ContainerCreating   0          29m
coderstory@k8s-master:~/k8s$ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看-pod-详情的时候看到警告信息" tabindex="-1"><a class="header-anchor" href="#查看-pod-详情的时候看到警告信息"><span>查看 pod 详情的时候看到警告信息</span></a></h3><div class="language-plain line-numbers-mode" data-ext="plain" data-title="plain"><pre class="language-plain"><code>coderstory@k8s-master:~/k8s$ kubectl describe pod kubernetes -n kubernetes-dashboard
Events:
  Type     Reason                  Age                    From               Message
  ----     ------                  ----                   ----               -------
  Normal   Scheduled               28m                    default-scheduler  Successfully assigned kubernetes-dashboard/kubernetes-dashboard-7978989845-fvlqg to k8s-master
  Warning  FailedCreatePodSandBox  28m                    kubelet            Failed to create pod sandbox: rpc error: code = Unknown desc = failed to setup network for sandbox &quot;3a59c4c17814dcbc0064b39d39c8c893bf4e5b5d423b44ef74d6742021c90f75&quot;: plugin type=&quot;calico&quot; failed (add): error getting ClusterInformation: connection is unauthorized: Unauthorized
  Normal   SandboxChanged          3m51s (x116 over 28m)  kubelet            Pod sandbox changed, it will be killed and re-created.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),r=[i];function o(l,d){return n(),a("div",null,r)}const p=e(t,[["render",o],["__file","kubernetes笔记.html.vue"]]),b=JSON.parse('{"path":"/linux/kubernetes%E7%AC%94%E8%AE%B0.html","title":"kubernetes笔记","lang":"zh-CN","frontmatter":{"author":"xlc520","title":"kubernetes笔记","excerpt":null,"description":"kubernetes 笔记 master 单机集群配置 kuberneets 安装 dashboard pod 初始化失败 kubernetes 版本为 1.26.0 cni 插件已安装 calico 且已工作 使用 kubectl create -f dashboard.yaml 创建后，get pod 一直没就绪 查看 pod 详情的时候看到警告信息","date":"2023-02-05T00:00:00.000Z","category":"Linux","tag":["Linux","kubernetes"],"article":true,"timeline":true,"icon":"linux","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/linux/kubernetes%E7%AC%94%E8%AE%B0.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"kubernetes笔记"}],["meta",{"property":"og:description","content":"kubernetes 笔记 master 单机集群配置 kuberneets 安装 dashboard pod 初始化失败 kubernetes 版本为 1.26.0 cni 插件已安装 calico 且已工作 使用 kubectl create -f dashboard.yaml 创建后，get pod 一直没就绪 查看 pod 详情的时候看到警告信息"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"Linux"}],["meta",{"property":"article:tag","content":"kubernetes"}],["meta",{"property":"article:published_time","content":"2023-02-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"kubernetes笔记\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-05T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"master 单机集群配置","slug":"master-单机集群配置","link":"#master-单机集群配置","children":[]},{"level":2,"title":"kuberneets 安装 dashboard pod 初始化失败","slug":"kuberneets-安装-dashboard-pod-初始化失败","link":"#kuberneets-安装-dashboard-pod-初始化失败","children":[{"level":3,"title":"kubernetes 版本为 1.26.0","slug":"kubernetes-版本为-1-26-0","link":"#kubernetes-版本为-1-26-0","children":[]},{"level":3,"title":"cni 插件已安装 calico 且已工作","slug":"cni-插件已安装-calico-且已工作","link":"#cni-插件已安装-calico-且已工作","children":[]},{"level":3,"title":"使用 kubectl create -f dashboard.yaml 创建后，get pod 一直没就绪","slug":"使用-kubectl-create-f-dashboard-yaml-创建后-get-pod-一直没就绪","link":"#使用-kubectl-create-f-dashboard-yaml-创建后-get-pod-一直没就绪","children":[]},{"level":3,"title":"查看 pod 详情的时候看到警告信息","slug":"查看-pod-详情的时候看到警告信息","link":"#查看-pod-详情的时候看到警告信息","children":[]}]}],"git":{"createdTime":1675685573000,"updatedTime":1714224756000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":2},{"name":"xlc","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":1.64,"words":492},"filePathRelative":"linux/kubernetes笔记.md","localizedDate":"2023年2月5日","autoDesc":true}');export{p as comp,b as data};
