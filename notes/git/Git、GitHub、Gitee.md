---
author: xlc520
title:  Git、GitHub、Gitee
description:  Git、GitHub、Gitee使用
date: 2022-02-13
category: Git
tag: Git
article: true
dateline: true
icon: 
password: 
---

# Git、GitHub、Gitee

## 一：Git介绍与Mac下如何生成ssh key

git是分布式的代码管理工具，远程的代码管理是基于ssh的，所以要使用远程的git则需要ssh的配置。简单的说，Git - 版本控制工具；Github是一个网站，提供给用户空间创建git仓储，保存用户的一些数据文档或者代码等；GitLab是基于Git的项目管理软件

​       首先，使用代码管理工具把本地的代码上传到服务器时需要加密处理，加密传输的算法有很多种，git可使用rsa，rsa要解决的一个核心问题是，如何使用一对特定的数字，使其中一个数字可以用来加密，而另外一个数字可以用来解密。这两个数字就是你在使用git和github，gitlab的时候所遇到的public key也就是公钥以及private key私钥。

​       其中，公钥就是那个用来加密的数字，这也就是为什么你在本机生成了公钥之后，要上传到github的原因。从github发回来的，用那公钥加密过的数据，可以用你本地的私钥来还原。如果你的key丢失了，不管是公钥还是私钥，丢失一个都不能用了，解决方法也很简单，删除原有的key，重新再生成一次，然后在github.com里再设置一次就行

在个人电脑生成ssh密钥后，会同时生成一个公开密钥和一个私有密钥，默认情况下在用户主目录下的.ssh目录中，密钥为id_rsa，公开密钥为id_rsa.pub。

密钥和公开密钥是共同使用的，协同开发中，一般会将公钥配置在服务器中，这样方便经常登录，也不需要输入密码，这是现在集群和各种云平台常用的登录方式，密钥在本地不被泄漏就非常安全。

- 步骤1.检查是否已经存在SSH Key

打开电脑终端，输入以下命令：

ls -al ~/.ssh      

会出现两种情况 ，如步骤2所示

- 步骤2. 生成/设置SSH Key

继续上一步可能出现的情况   

（1）情况一：终端出现文件id_rsa.pub 或 id_dsa.pub，则表示该电脑已经存在SSH Key，此时可继续输入命令：

pbcopy < ~/.ssh/id_rsa.pub

这样你需要的SSH Key 就已经复制到粘贴板上了，然后进行步骤3

（2）情况二：终端未出现id_rsa.pub 或 id_dsa.pub文件，表示该电脑还没有配置SSH Key，此时需要输入命令：

ssh-keygen -t rsa -C "your_email@example.com"

默认会在相应路径下（/your_home_path）生成id_rsa和id_rsa.pub两个文件，此时终端会显示：

![img](https://cdn.nlark.com/yuque/0/2022/png/1549588/1644164187476-6676ff38-2c76-44cb-a75e-93295b945a75.png)

连续回车即可，也可能会让你输入密码，密码就是你的开机密码 

此时再输入命令：ls -al ~/.ssh    就会出现id_rsa.pub 和 id_dsa.pub两个文件，然后重复情况一的步骤即输入以下命令再进行步骤3即可：

pbcopy < ~/.ssh/id_rsa.pub

- 步骤3.将SSH Key添加到Github和Gitee中

![img](https://cdn.nlark.com/yuque/0/2022/png/1549588/1644163954973-29d7b898-0036-4f48-b13b-b771f3b3064b.png)

***图：Github\***

![img](https://cdn.nlark.com/yuque/0/2022/png/1549588/1644164425045-94537f86-65d3-4a34-8554-08bcd00020f6.png)

***图：Gitee\***[


](https://blog.csdn.net/wsdxsyb/article/details/81904472)

## 二：常用命令

1. 拉取代码 git clone xxx.git
2. 创建分支 git branch dev 或者 git checkout -b dev 或者 git switch -c dev

1. 切换本地分支 git checkout dev 或者 git switch dev
2. 切换分支并关联远程分支 git checkout -b dev origin/dev 或者 git checkout --track origin/dev

1. 查看本地所有分支 git branch、查看远程所有分支 git branch -r 
2. 删除本地分支 git branch -d dev、删除远程分支 git push origin -d dev

1. 将代码从工作区添加暂存区 git add .
2. 查看尚未暂存的更新 git diff 

1. 添加提交信息 git commit -m 'xxxx'（commit注释写错，执行 git commit --amend

此时会进入默认vim编辑器，修改注释完毕后保存）

1. 推送代码到远程分支 git push origin dev、强制推送git push -f origin dev（常在git rebase后使用）
2. 拉取远程分支代码 git pull origin dev

1. 合并分支 git merge dev
2. 查看git状态 git status

1. 查看提交历史 git log
2. 查看命令历史 git reflog

1. 把本地未push的分叉提交历史整理成直线 git rebase origin/dev、回到rebase执行之前的状态 git rebase --abort
2. 回退版本 git reset --hard commit_id、回退上一个版本 git reset --soft HEAD^ 等于 git reset --soft HEAD~1

1. 修改分支名 git branch -m oldBranchName newBranchName、git push origin :oldBranchName、git push --set-upstream origin newBranchName
2. 查看git配置 git config --global --list、git config --global user.name

1. git config  --global --add user.name newName（增）
2. git config  --global --unset user.name（删）

1. git config --global user.name newName（改）
2. 配置Git用户名和邮箱

git config --global user.name "Your Name" 

git config --global user.email "email@example.com"



## 三：提交规范

https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular

- feat 增加新功能
- fix 修复问题/BUG

- style 代码风格相关无影响运行结果的
- perf 优化/性能提升

- refactor 重构
- revert 撤销修改

- test 测试相关
- docs 文档/注释

- chore 依赖更新/脚手架配置修改等
- workflow 工作流改进

- ci 持续集成
- types 类型定义文件更改

- wip 开发中

## 四：CodeReview常用缩写

PR: Pull Request. 拉取请求，给其他项目提交代码

LGTM: Looks Good To Me. 朕知道了 代码已经过 review，可以合并

SGTM: Sounds Good To Me. 和上面那句意思差不多，也是已经通过了 review 的意思

WIP: Work In Progress. 传说中提 PR 的最佳实践是，如果你有个改动很大的 PR，可以在写了一部分的情况下先提交，但是在标题里写上 WIP，以告诉项目维护者这个功能还未完成，方便维护者提前 review 部分提交的代码。

PTAL: Please Take A Look. 你来瞅瞅？用来提示别人来看一下

TBR: To Be Reviewed. 提示维护者进行 review

TL;DR: Too Long; Didn't Read. 太长懒得看。也有很多文档在做简略描述之前会写这么一句

TBD: To Be Done(or Defined/Discussed/Decided/Determined). 根据语境不同意义有所区别，但一般都是还没搞定的意思



注意：dev代表分支名（可随便命名）
