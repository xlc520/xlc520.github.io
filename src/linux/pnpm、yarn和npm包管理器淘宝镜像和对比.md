---
author: xlc520
title: pnpm、yarn和npm包管理器淘宝镜像和对比
excerpt: 
description: 
date: 2023-03-23
category: Linux
tag: 
- Linux
- pnpm
- yarn
- npm
article: true
timeline: true
icon: linux
---

# pnpm、yarn 和 npm 包管理器淘宝镜像和对比

## pnpm 的特点

1、快速

pnpm 比其他包管理器快 2 倍。 pnpm 不仅比 npm 快，而且比 yarn 快。无论是冷缓存还是热缓存，它都比 yarn 快。yarn 从缓存中复制文件，而
pnpm 只是从全局存储中链接它们。

2、高效

node_modules 中的文件为复制或链接自特定的内容寻址存储库。

3、支持 monorepos

pnpm 内置支持单仓多包。

4、严格

pnpm 默认创建了一个非平铺的 node_modules，因此代码无法访问任意包。

5、安全

与 yarn 一样，pnpm 有一个包含所有已安装包校验和的特殊文件，用于在执行代码之前验证每个已安装包的完整性。离线模式: pnpm
将所有下载的包 tarball 保存在本地注册表镜像中。当包在本地可用时，它从不发出请求。使用该--offline 参数可以完全禁止 HTTP 请求。

6、pnpm 拥有 Yarn 超过 npm 的所有附加功能：

## npm、yarn 和 pnpm 设置淘宝镜像

```javascript
// 设置
npm config set registry https://registry.npmmirror.com/
yarn config set registry https://registry.npmmirror.com/
pnpm config set registry https://registry.npmmirror.com/

// 查看
npm config get registry
yarn config get registry
pnpm config get registry
```

# node-sass 淘宝镜像设置

```javascript
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/

yarn config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/

pnpm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
```

## npm 与 pnpm 命令对比

| npm 命令           | pnpm 等价命令      |
|:-----------------|:---------------|
| npm install      | pnpm install   |
| npm install 包名   | pnpm add 包名    |
| npm uninstall 包名 | pnpm remove 包名 |
| npm run 脚本       | pnpm 脚本        |

## npm 与 yarn 命令对比

| npm 命令           | yarn 等价命令      |
|:-----------------|:---------------|
| npm install      | yarn           |
| npm install 包名   | yarn add 包名    |
| npm uninstall 包名 | yarn remove 包名 |
| npm run 脚本       | yarn 脚本        |

## 安装包命令区别

```javascript
//安装
yarn add 包名
npm install  包名 
pnpm install 包 

//开发环境安装
yarn add 包名 -D  会记录在 package.json 的 devDependencies开发环境中
npm i 包名 -D
pnpm add 包名 -D

//全局安装
yarn global add 包名   
npm i 包名 -g
pnpm add 包名 -g
```

### 在系统上禁止使用脚本解决方法

```javascript
# 以管理员身份运行power shell
set-executionpolicy remotesigned
```
