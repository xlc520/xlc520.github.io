import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as s,a}from"./app-21243f18.js";const i={},r=a(`<h1 id="kubernetes笔记" tabindex="-1"><a class="header-anchor" href="#kubernetes笔记" aria-hidden="true">#</a> kubernetes笔记</h1><h2 id="master单机集群配置" tabindex="-1"><a class="header-anchor" href="#master单机集群配置" aria-hidden="true">#</a> master单机集群配置</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>apiVersion<span class="token operator">:</span> kubeadm.k8s.io/v1beta3
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kuberneets-安装dashboard-pod初始化失败" tabindex="-1"><a class="header-anchor" href="#kuberneets-安装dashboard-pod初始化失败" aria-hidden="true">#</a> kuberneets 安装dashboard pod初始化失败</h2><h3 id="kubernetes版本为1-26-0" tabindex="-1"><a class="header-anchor" href="#kubernetes版本为1-26-0" aria-hidden="true">#</a> kubernetes版本为1.26.0</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>coderstory@k8s-master:~/k8s$ kubectl version
WARNING: This version information is deprecated and will be replaced with the output from kubectl version --short.  Use --output=yaml|json to get the full version.
Client Version: version.Info{Major:&quot;1&quot;, Minor:&quot;26&quot;, GitVersion:&quot;v1.26.0&quot;, GitCommit:&quot;b46a3f887ca979b1a5d14fd39cb1af43e7e5d12d&quot;, GitTreeState:&quot;clean&quot;, BuildDate:&quot;2022-12-08T19:58:30Z&quot;, GoVersion:&quot;go1.19.4&quot;, Compiler:&quot;gc&quot;, Platform:&quot;linux/amd64&quot;}
Kustomize Version: v4.5.7
Server Version: version.Info{Major:&quot;1&quot;, Minor:&quot;26&quot;, GitVersion:&quot;v1.26.0&quot;, GitCommit:&quot;b46a3f887ca979b1a5d14fd39cb1af43e7e5d12d&quot;, GitTreeState:&quot;clean&quot;, BuildDate:&quot;2022-12-08T19:51:45Z&quot;, GoVersion:&quot;go1.19.4&quot;, Compiler:&quot;gc&quot;, Platform:&quot;linux/amd64&quot;}
coderstory@k8s-master:~/k8s$ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cni插件已安装calico且已工作" tabindex="-1"><a class="header-anchor" href="#cni插件已安装calico且已工作" aria-hidden="true">#</a> cni插件已安装calico且已工作</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>coderstory@k8s-master:~/k8s$ kubectl get pod -n kube-system
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-kubectl-create-f-dashboard-yaml创建后-get-pod一直没就绪" tabindex="-1"><a class="header-anchor" href="#使用-kubectl-create-f-dashboard-yaml创建后-get-pod一直没就绪" aria-hidden="true">#</a> 使用 kubectl create -f dashboard.yaml创建后，get pod一直没就绪</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>coderstory@k8s-master:~/k8s$ kubectl get pod  -n kubernetes-dashboard
NAME                                        READY   STATUS              RESTARTS   AGE
dashboard-metrics-scraper-976d575c7-n2krt   0/1     ContainerCreating   0          29m
kubernetes-dashboard-7978989845-fvlqg       0/1     ContainerCreating   0          29m
coderstory@k8s-master:~/k8s$ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看pod详情的时候看到警告信息" tabindex="-1"><a class="header-anchor" href="#查看pod详情的时候看到警告信息" aria-hidden="true">#</a> 查看pod详情的时候看到警告信息</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>coderstory@k8s-master:~/k8s$ kubectl describe pod kubernetes -n kubernetes-dashboard
Events:
  Type     Reason                  Age                    From               Message
  ----     ------                  ----                   ----               -------
  Normal   Scheduled               28m                    default-scheduler  Successfully assigned kubernetes-dashboard/kubernetes-dashboard-7978989845-fvlqg to k8s-master
  Warning  FailedCreatePodSandBox  28m                    kubelet            Failed to create pod sandbox: rpc error: code = Unknown desc = failed to setup network for sandbox &quot;3a59c4c17814dcbc0064b39d39c8c893bf4e5b5d423b44ef74d6742021c90f75&quot;: plugin type=&quot;calico&quot; failed (add): error getting ClusterInformation: connection is unauthorized: Unauthorized
  Normal   SandboxChanged          3m51s (x116 over 28m)  kubelet            Pod sandbox changed, it will be killed and re-created.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),o=[r];function t(d,l){return n(),s("div",null,o)}const p=e(i,[["render",t],["__file","kubernetes笔记.html.vue"]]);export{p as default};
