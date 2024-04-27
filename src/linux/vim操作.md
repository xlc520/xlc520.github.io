---
author: xlc520
title: vim操作
excerpt: 
description: 
date: 2024-03-06
category: Linux
tag: Linux
article: true
timeline: true
icon: linux
---

# `vim`操作

本教程并不是单纯的`vim`操作介绍，更多的是与`Intellj Idea`进行配合。需要同时具备`Intellj Idea`和`vim`使用基础的同学学习。

## 1 简介

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062587-0.png)

## 2 安装

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062587-1.png)

在`Intellj Idea`中 安装以下三个插件

- `IdeaVim`
- `IdeaVim-EasyMotion`

- `IdeaVimExtension`

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062587-2.png)

发现图标像上面一样编程一个小方块的时候 就代表插件安装成功

## 3 Vim

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062587-3.png)

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062587-4.png)

根据我自己的经验总结下来从原生编辑器过度到`Vim`最不习惯的当属方向键的移动从原本的 方向键变成了`hjkl`

**这个其实没有太多好说的 就是需要克服这一关。多练就行。（下图为 Gif 演示）**

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062587-5.gif)

### **练习二：复制 & 粘贴**

### ![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062587-6.png)

`CV`大法好，毕竟大家有时候自嘲都是`C V`工程师 😈 所以 复制 粘贴 还是需要在第一时间学会，这样才能更好的`coding`💩。

- `yy`复制当前行
- `p`粘贴

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062587-7.gif)

### **练习三：在学多一点点**

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062587-8.png)

在学习一些其他的命令 提交效率。

y p f h c i

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062587-9.gif)

####

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062587-10.png)

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062588-11.gif)

GIF 中步骤如下：

1. `V`进入内容选择模式
2. `kkk`向上移动 3 行，并进行选中
3. `d`删除选中部分

#### 块级删除「常用」di* da

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062588-12.gif)

```plain
di"`删除`"`内的内容，个人感觉这个还是非常常用了。也是初步在效率上优于传统的 intellj idea 的操作方式。如果想要删除之后马上进入插入模式 可以使用`ci"
```

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062588-13.gif)

```plain
di(`删除`(`内的内容，如果想要删除之后马上进入插入模式 可以使用`ci(
```

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062588-14.gif)

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062588-15.png)

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062588-16.gif)

- `a`在光标之后，进入插入模式

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062588-17.gif)

- `i`在光标之前，进入插入模式

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062588-18.gif)

- `o`在本行之后新增一行，并进入插入模式

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062588-19.gif)

- `A`在本行结尾，进入插入模式

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062588-20.gif)

- `I`在本行开头，进入插入模式

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062588-21.gif)

- `O`在本行之前新增一行，并进入插入模式

### **练习四：jump**

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062588-22.png)

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062588-23.png)

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062588-24.gif)

- `[n]f{word}``f`用来查找在**当前行**当前光标后是否存在某个字符`{word}`如果存在则将光标移动过去。
- 如果将这里的 f 改为 F 则是反向查找

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062588-25.gif)

- `$ | ^``$`跳转到行尾`^`跳转到行首

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062588-26.gif)

- `%`括号匹配跳转`() [] {}`

### **练习五 学习一些通用场景**

其他的比较好用的命令

- `zo | zc`
- `dt{char}`

## 4 配置

在安装了 Vim 之后，其实官方只是给我们了一个基本的架子，能够实现 Vim 的基本操作。如果你想要用的更加顺手，那么你需要对 Vim
进行自己的个性化配置。这是一张白纸，它会被书写成什么样子由你自己决定。

如何对 Idea 中的 Vim 模块进行配置

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062589-27.png)

在右下角点击 Vim 图标，然后点击**Open ~/.ideavimrc**

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062589-28.png)

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062589-29.png)

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images3/640-1709691062589-30.gif)

上图中 gif 中演示的就是通过 调用`RenameElement`Action 重命名变量。

初步的介绍完`Intellj Idea`的`action`之后，下面分享我自己目前在用的几个比较常用的配置，通过快捷键 调用`action`

```plain
"jk退出insert模式
inoremap jk <ESC>

let mapleader = '\<space>'
"Idea action 配置
" 重命令元素
nnoremap <Leader>re :action RenameElement<CR>
nnoremap <Leader>gi :action GotoImplementation<CR>
nnoremap <Leader>im :action ImplementMethods<CR>
nnoremap <Leader>rv :action IntroduceVariable<CR>
nnoremap <Leader>cr :action CopyReference<CR>
nnoremap <Leader>em :action ExtractMethod<CR>
nnoremap <Leader>sw :action SurroundWith<CR>
```

action list`Intellj Idea`中只是的所有的`action`列表
