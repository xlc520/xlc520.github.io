---
author: xlc520
title: kubernetes笔记
description:
date: 2023-02-05
category: Linux
tag: 
- Linux
- kubernetes
article: true
timeline: true
icon: linux
---

# kubernetes笔记

## master单机集群配置

```json
apiVersion: kubeadm.k8s.io/v1beta3
bootstrapTokens:
- groups:
  - system:bootstrappers:kubeadm:default-node-token
  token: abcdef.0123456789abcdef
  ttl: 24h0m0s
  usages:
  - signing
  - authentication
kind: InitConfiguration
localAPIEndpoint:
  # master的ip
  advertiseAddress: 192.168.200.129
  bindPort: 6443
nodeRegistration:
  # 当前使用containerd docker已废弃
  criSocket: unix:///var/run/containerd/containerd.sock
  imagePullPolicy: IfNotPresent
  name: k8s-master
  taints: null
---
apiServer:
  timeoutForControlPlane: 4m0s
  certSANs:
  - 192.168.200.129
apiVersion: kubeadm.k8s.io/v1beta3
certificatesDir: /etc/kubernetes/pki
clusterName: kubernetes
controllerManager: {}
dns: {}
etcd:
  local:
    dataDir: /var/lib/etcd
# 使用国内镜像
imageRepository: registry.cn-hangzhou.aliyuncs.com/google_containers
kind: ClusterConfiguration
kubernetesVersion: 1.26.0
networking:
  dnsDomain: cluster.local
  serviceSubnet: 10.96.0.0/12
  podSubnet: 10.244.0.0/16
scheduler: {}
```

## kuberneets 安装dashboard pod初始化失败

### kubernetes版本为1.26.0

```
coderstory@k8s-master:~/k8s$ kubectl version
WARNING: This version information is deprecated and will be replaced with the output from kubectl version --short.  Use --output=yaml|json to get the full version.
Client Version: version.Info{Major:"1", Minor:"26", GitVersion:"v1.26.0", GitCommit:"b46a3f887ca979b1a5d14fd39cb1af43e7e5d12d", GitTreeState:"clean", BuildDate:"2022-12-08T19:58:30Z", GoVersion:"go1.19.4", Compiler:"gc", Platform:"linux/amd64"}
Kustomize Version: v4.5.7
Server Version: version.Info{Major:"1", Minor:"26", GitVersion:"v1.26.0", GitCommit:"b46a3f887ca979b1a5d14fd39cb1af43e7e5d12d", GitTreeState:"clean", BuildDate:"2022-12-08T19:51:45Z", GoVersion:"go1.19.4", Compiler:"gc", Platform:"linux/amd64"}
coderstory@k8s-master:~/k8s$ 
```

### cni插件已安装calico且已工作

```
coderstory@k8s-master:~/k8s$ kubectl get pod -n kube-system
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
```

### 使用 kubectl create -f dashboard.yaml创建后，get pod一直没就绪

```
coderstory@k8s-master:~/k8s$ kubectl get pod  -n kubernetes-dashboard
NAME                                        READY   STATUS              RESTARTS   AGE
dashboard-metrics-scraper-976d575c7-n2krt   0/1     ContainerCreating   0          29m
kubernetes-dashboard-7978989845-fvlqg       0/1     ContainerCreating   0          29m
coderstory@k8s-master:~/k8s$ 
```

### 查看pod详情的时候看到警告信息

```
coderstory@k8s-master:~/k8s$ kubectl describe pod kubernetes -n kubernetes-dashboard
Events:
  Type     Reason                  Age                    From               Message
  ----     ------                  ----                   ----               -------
  Normal   Scheduled               28m                    default-scheduler  Successfully assigned kubernetes-dashboard/kubernetes-dashboard-7978989845-fvlqg to k8s-master
  Warning  FailedCreatePodSandBox  28m                    kubelet            Failed to create pod sandbox: rpc error: code = Unknown desc = failed to setup network for sandbox "3a59c4c17814dcbc0064b39d39c8c893bf4e5b5d423b44ef74d6742021c90f75": plugin type="calico" failed (add): error getting ClusterInformation: connection is unauthorized: Unauthorized
  Normal   SandboxChanged          3m51s (x116 over 28m)  kubelet            Pod sandbox changed, it will be killed and re-created.
```

