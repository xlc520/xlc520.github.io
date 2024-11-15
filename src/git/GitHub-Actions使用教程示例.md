---
title: GitHub-Actions使用教程示例
excerpt:
description: GitHub-Actions使用教程示例
date: 2024-10-17
category: Git
tag: Git
author: xlc520
article: true
dateline: true
icon: git
---

```component VPBanner
title: GitHub-Actions使用教程示例
content: GitHub-Actions使用教程示例
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: GitHub-Actions使用教程示例
    link: /git/GitHub-Actions使用教程示例
```

# GitHub-Actions使用教程示例

GitHub Actions 是一个由 GitHub 提供的自动化平台，用于在 GitHub 存储库中设置和执行自动化工作流程。通过 GitHub Actions，你可以创建和共享自定义的自动化流程，以响应存储库中的事件，例如推送代码、创建拉取请求等。这些自动化流程可以帮助你自动执行各种任务，如构建、测试、部署等。



## 打包electron

以下是一个适用于你的项目的 GitHub Actions workflow 配置文件。这个配置文件支持手动运行或当 `master` 分支有提交时自动运行。它会打包 Windows、Linux 和 MacOS 的包，并将构建好的包放到 GitHub Actions 的 Artifact 中。

```yaml
name: Build and Package

on:
  push:
    branches:
      - master
  workflow_dispatch:

jobs:
  build:
    runs-on: ${{ matrix.os }}

    strategy:
      matrix:
        os: [windows-latest, ubuntu-latest, macos-latest]

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20.18.0'

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: '9'

      - name: Install dependencies
        run: pnpm install

      - name: Compile project
        run: pnpm run build:compile

      - name: Build for Windows
        if: matrix.os == 'windows-latest'
        run: pnpm run build:win

      - name: Build for Linux
        if: matrix.os == 'ubuntu-latest'
        run: pnpm run build:linux

      - name: Build for MacOS
        if: matrix.os == 'macos-latest' && (secrets.MACOS_CERTIFICATE && secrets.MACOS_CERTIFICATE_PASSWORD)
        run: pnpm run build:mac

      - name: Upload Artifacts for Windows
        if: matrix.os == 'windows-latest'
        uses: actions/upload-artifact@v3
        with:
          name: windows-build
          path: dist/win-unpacked

      - name: Upload Artifacts for Linux
        if: matrix.os == 'ubuntu-latest'
        uses: actions/upload-artifact@v3
        with:
          name: linux-build
          path: dist/linux-unpacked

      - name: Upload Artifacts for MacOS
        if: matrix.os == 'macos-latest' && (secrets.MACOS_CERTIFICATE && secrets.MACOS_CERTIFICATE_PASSWORD)
        uses: actions/upload-artifact@v3
        with:
          name: macos-build
          path: dist/mac
```

### 配置说明：

1. **触发条件**：
   - `push`：当 `master` 分支有提交时触发。
   - `workflow_dispatch`：支持手动运行。
2. **矩阵策略**：
   - 使用 `matrix` 策略来并行构建 Windows、Linux 和 MacOS 的包。
3. **步骤说明**：
   - **Checkout repository**：检出代码库。
   - **Setup Node.js**：设置 Node.js 版本为 `20.18.0`。
   - **Setup pnpm**：设置 pnpm 版本为 `9`。
   - **Install dependencies**：安装项目依赖。
   - **Compile project**：运行 `build:compile` 脚本来编译项目。
   - **Build for Windows/Linux/MacOS**：根据操作系统运行相应的构建脚本。
   - **Upload Artifacts**：将构建好的包上传到 GitHub Actions 的 Artifact 中。
4. **MacOS 构建条件**：
   - MacOS 的构建步骤只有在 `MACOS_CERTIFICATE` 和 `MACOS_CERTIFICATE_PASSWORD` 这两个 secrets 存在时才会执行。你需要在 GitHub 仓库的 `Settings` -> `Secrets` 中添加这些 secrets。

### 注意事项：

- 确保 `package.json` 中的 `scripts` 部分包含 `build:compile`、`build:win`、`build:linux` 和 `build:mac` 这些命令。
- 如果你不需要 MacOS 的构建，可以删除或注释掉相关的步骤。
- 构建完成后，你可以在 GitHub Actions 的运行结果页面中找到上传的 Artifacts。

将这个配置文件保存为 `.github/workflows/build.yml` 并推送到你的仓库中，GitHub Actions 就会根据配置自动运行。





## 发布release1

这个配置文件支持手动运行，可以打包 Windows、Linux 和 MacOS 的包，并且会将构建好的包放到 GitHub Actions 的 Artifact 中。如果 MacOS 没有配置密钥证书等，则不会打包 MacOS 的包。

```yaml
name: Build and Package Electron App

on:
  workflow_dispatch:

jobs:
  build:
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [windows-latest, ubuntu-latest, macos-latest]

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Setup pnpm
        run: npm install -g pnpm@9

      - name: Install dependencies
        run: pnpm install

      - name: Compile project
        run: pnpm run build:compile

      - name: Build for Windows
        if: matrix.os == 'windows-latest'
        run: pnpm run build:win

      - name: Build for Linux
        if: matrix.os == 'ubuntu-latest'
        run: pnpm run build:linux

      - name: Build for MacOS
        if: matrix.os == 'macos-latest'
        run: pnpm run build:mac

      - name: Upload Artifacts
        uses: actions/upload-artifact@v3
        with:
          name: release-${{ matrix.os }}
          path: release

      - name: Upload to GitHub Releases
        if: matrix.os == 'windows-latest' || matrix.os == 'ubuntu-latest' || (matrix.os == 'macos-latest' && env.MACOS_CERTIFICATE)
        uses: softprops/action-gh-release@v1
        with:
          files: |
            release/*.exe
            release/*.zip
            release/*.deb
            release/*.AppImage
            release/*.tar.gz
            release/*.rpm
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### 配置说明：

1. **手动运行**：
   - `on: workflow_dispatch:` 表示这个 workflow 可以通过 GitHub Actions 页面手动触发。
2. **多平台打包**：
   - `strategy: matrix: os: [windows-latest, ubuntu-latest, macos-latest]` 定义了三个不同的操作系统环境，分别用于打包 Windows、Linux 和 MacOS。
3. **MacOS 打包条件**：
   - `if: matrix.os == 'macos-latest' && env.MACOS_CERTIFICATE` 表示只有在 MacOS 环境下并且 `MACOS_CERTIFICATE` 环境变量存在时才会执行 MacOS 的打包步骤。你可以根据需要在 GitHub Secrets 中配置 `MACOS_CERTIFICATE`。
4. **上传 Artifacts**：
   - `actions/upload-artifact@v3` 用于将构建好的包上传到 GitHub Actions 的 Artifacts 中。
5. **上传到 GitHub Releases**：
   - `softprops/action-gh-release@v1` 用于将构建好的包上传到 GitHub Releases。只有当操作系统是 Windows 或 Linux，或者 MacOS 并且配置了 `MACOS_CERTIFICATE` 时，才会执行这个步骤。
6. **包管理工具和 Node.js 版本**：
   - `actions/setup-node@v3` 用于设置 Node.js 版本为 20。
   - `npm install -g pnpm@9` 用于安装 pnpm 版本 9。

### 注意事项：

- 你需要在 GitHub 仓库的 Secrets 中配置 `MACOS_CERTIFICATE` 环境变量，以便在 MacOS 环境下进行打包。
- 确保 `package.json` 中的 `scripts` 部分已经定义了 `build:compile`、`build:win`、`build:linux` 和 `build:mac` 命令。

这个配置文件应该能够满足你的需求，自动构建并发布不同平台的 Electron 应用包。







## 发布release2

以下是一个 GitHub Actions Workflow 配置文件（`.github/workflows/build.yml`），它支持手动触发构建、为不同平台打包、检查是否有 MacOS 证书、并将构建产物上传到 GitHub Actions 的 Artifact。



```yaml
name: Build and Package Electron App

on:
  workflow_dispatch: # 支持手动触发

jobs:
  # 编译并构建 Windows、Linux、MacOS 的包
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        platform: [win32, linux, macos]
        include:
          - platform: win32
            os: windows-latest
          - platform: linux
            os: ubuntu-latest
          - platform: macos
            os: macos-latest
    steps:
      # Checkout repository
      - name: Check out the repository
        uses: actions/checkout@v3

      # 设置 Node.js 版本
      - name: Set up Node.js 20.x
        uses: actions/setup-node@v3
        with:
          node-version: 20
          cache: 'pnpm'

      # 安装 pnpm
      - name: Install pnpm
        run: npm install -g pnpm@9

      # 安装依赖
      - name: Install dependencies using pnpm
        run: pnpm install

      # 编译项目
      - name: Compile project
        run: pnpm run build:compile

      # 根据操作系统平台进行打包
      - name: Build for Windows
        if: matrix.platform == 'win32'
        run: pnpm run build:win

      - name: Build for Linux
        if: matrix.platform == 'linux'
        run: pnpm run build:linux

      - name: Build for MacOS
        if: matrix.platform == 'macos'
        run: |
          if security find-identity -v -p codesigning; then
            pnpm run build:mac
          else
            echo "No MacOS code signing identity found, skipping MacOS build."
          fi

      # 上传构建的包为 Artifact
      - name: Upload Artifacts
        if: ${{ matrix.platform == 'win32' || matrix.platform == 'linux' || (matrix.platform == 'macos' && steps.build_macos.outcome == 'success') }}
        uses: actions/upload-artifact@v3
        with:
          name: ${{ matrix.platform }}-build
          path: |
            release/*.exe
            release/*.zip
            release/*.deb
            release/*.AppImage
            release/*.tar.gz
            release/*.rpm
```

### 工作流解释：

1. **触发条件**：使用 `workflow_dispatch` 来支持手动触发构建。
2. **矩阵构建**：利用矩阵策略构建不同平台的包，分别为 `win32`（Windows）、`linux`（Linux）、`macos`（Mac OS）：
   - Windows 使用 `windows-latest`。
   - Linux 使用 `ubuntu-latest`。
   - MacOS 使用 `macos-latest`。支持 MacOS 的代码签名检查，只有在找到有效的 code-signing identity 时才会执行构建。
3. **Node.js 和 pnpm 设置**：
   - 通过 `actions/setup-node@v3` 安装 Node.js 20，并在 `cache` 中指定 `pnpm` 以加速构建。
   - 安装 pnpm 的版本 9。
4. **依赖安装**：执行 `pnpm install` 安装项目依赖。
5. **编译和打包**：
   - 先运行 `pnpm run build:compile` 编译项目。
   - 根据平台分别执行 `pnpm run build:win`、`pnpm run build:linux`、`pnpm run build:mac` 进行打包。
   - MacOS 平台会检查是否配置了代码签名，如果没有找到代码签名证书，就跳过 MacOS 的构建。
6. **上传构建产物**：
   - 使用 `actions/upload-artifact@v3` 将构建完成的文件（exe、zip、deb、AppImage、tar.gz、rpm）上传到 GitHub Actions 的 Artifact 中，方便下载和发布。
   - `path` 使用通配符指定将 `release/` 目录中的不同后缀的文件上传。

### 注意事项：

- 如果需要为 MacOS 进行代码签名，确保在 GitHub Actions 中配置了相关的密钥和证书。
- 你可以根据自己的需要修改 `release/` 目录的位置和上传的文件类型。









## 示例1

### 使用Github Actions自动打包基于各平台的安装包

```
.github/workflows/release.yml
```

```yaml
# 当前工作流的名称
name: Build/release

# 当前工作流触发条件：此处是每次推送代码时触发
on: push

# 定义工作流中要执行的作业
jobs:
  release:
    # 指定当前作业将运行在哪些操作系统上；此处使用矩阵(matrix)策略根据不同的操作系统运行多次作业
    runs-on: ${{ matrix.os }}

    strategy:
      matrix:
        # 指定要运行的操作系统，当前作业将在以下3个操作系统上分别运行：macos-latest（最新的 macOS 版本）、ubuntu-latest（最新的 Ubuntu 版本）和 windows-latest（最新的 Windows 版本）；
        # 矩阵(matrix)策略将为每个指定的操作系统创建一个独立的作业实例;
        os: [macos-latest, ubuntu-latest, windows-latest]
        arch: [x64, arm64]  # 针对不同的架构

    steps:
      # 使用 actions/checkout 插件检出仓库中的代码
      - name: Check out Git repository
        uses: actions/checkout@v4

      # 安装指定版本的 Node.js
      - name: Install Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      # 安装项目依赖
      - run: npm install

      # 打包编译
      - run: npm run make

      # 上传 out/make/ 文件夹至 Artifacts 
      # Artifact是Github提供的临时存储文件的地方，是Github Actions的一部分；
      # 文件在Artifact中可以保存90天，单文件大小不能超过2GB，总大小不能超过5GB，否则 GitHub 将自动删除最早的文件以腾出空间；
      # Artifact将工作流生成的文件称为工件；即，Artifact是专门用来保存工件的;
      # 相同名称的文件保存到Artifact中时会发生冲突，overwrite:true表示覆盖同名文件；
      - name: Upload Build Artifacts 
        uses: actions/upload-artifact@v4
        with: 
           # 保存到 Artifact 的文件名称
           name: electron-app-${{ matrix.os }}-${{ matrix.version }}
           # 要保存到 Artifact 中的文件或目录
           path: out/make/
           # 覆盖同名文件
           overwrite: true

```



## 示例2

### 构建到releases

```
.github/workflows/release.yml
```

1. 构建项目
   创建一个github token  https://github.com/settings/tokens
2. 
   创建token并复制备用 在仓库settings中添加密钥,在仓库actions中执行 run workflow,构建成功后在releases中可以看到

```yaml
name: Build/release Electron app
 
on:
  workflow_dispatch:
 
jobs:
  release:
    runs-on: ${{ matrix.os }}
 
    strategy:
      matrix:
        os: [ubuntu-latest, macos-latest, windows-latest]
 
    steps:
      - name: Check out Git repository
        uses: actions/checkout@v3
 
      - name: Install Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 20
 
      - name: Install Dependencies
        run: npm install
 
      - name: build-linux
        if: matrix.os == 'ubuntu-latest'
        run: npm run build:linux
 
      - name: build-mac
        if: matrix.os == 'macos-latest'
        run: npm run build:mac
 
      - name: build-win
        if: matrix.os == 'windows-latest'
        run: npm run build:win
 
      - name: release
        uses: softprops/action-gh-release@v1
        with:
          draft: true
          files: |
            dist/*.exe
            dist/*.zip
            dist/*.dmg
            dist/*.AppImage
            dist/*.snap
            dist/*.deb
            dist/*.rpm
            dist/*.tar.gz
            dist/*.yml
            dist/*.blockmap
        env:
          GITHUB_TOKEN: ${{ secrets.ACCESS_TOKEN }}

```



## 示例3

该脚本使用的是 electron-builder 进行打包、发布到 GitHub 的。所以 Electron 项目中需要引入 electron-builder 并做好 GitHub 配置

这里最终执行了 `classfang/action-electron-builder@v1.0.0` 中配置的任务

```yaml
# Action 名称，可自定义
name: Build/release

# 触发事件：提交名称以 v 开头的 tag 时触发
on:
  push:
    tags:
      - 'v*.*.*

# 执行的任务
jobs:
  release:
    runs-on: ${{ matrix.os }}

    strategy:
      matrix:
        # 运行环境：这里配置了 macos 和 windows，最终会在这两个环境打包
        os: [macos-latest, windows-latest]

    # 执行步骤
    steps:
      # 检出代码
      - name: Check out Git repository
        uses: actions/checkout@v1

      # 安装环境
      - name: Install Node.js, NPM and Yarn
        uses: actions/setup-node@v1
        with:
          node-version: 16

      # 打包发布：源码见 https://github.com/classfang/action-electron-builder
      - name: Build/release Electron app
        uses: classfang/action-electron-builder@v1.0.0
        with:
          # GitHub token, automatically provided to the action
          github_token: ${{ secrets.github_token }}
          release: true

```

**Electron 工程配置 electron-builder**

安装和配置过程略。可查阅官方文档：[https://www.electron.build/open in new window](https://www.electron.build/)

需要在 `electron-builder.yml` 中增加如下配置：

```yaml
publish:
  provider: github
  owner: github 用户名
  repo: github 仓库名称
  private: true
```

electron-builder 实现发布到 GitHub 需要用到 GitHub 的 Token。这里设置 `private=true`，表示从系统环境变量中获取 Token，变量名是 `GH_TOKEN`。详见：[https://www.electron.build/configuration/publish.html#github-repositoryopen in new window](https://www.electron.build/configuration/publish.html#github-repository)

这里的 Token 不需要配置，因为在 Action 脚本中通过 `secrets.github_token` 获取到了 GitHub Actions 自动提供的 Token，并且在 `classfang/action-electron-builder` 脚本中获取到该 Token 之后设置到了系统环境变量中。



## 各部分说明

### 触发条件

触发条件 有很多，可以是issue 创建，可以是 git 的 pr 和push ，可以是 定时器，[全部的事件 ](https://link.juejin.cn?target=https%3A%2F%2Fdocs.github.com%2Fen%2Factions%2Fusing-workflows%2Fevents-that-trigger-workflows)

```yml
on:
  workflow_dispatch:
  push:
    branches:
      - main
    tags:        
      - v2
      - v*
    paths-ignore:
      - "**.md"
      - "**.spec.js"
      - ".idea"
      - ".gitignore"
      - ".github/**"
      - "!.github/workflows/release.yml"
  schedule:
    # * is a special character in YAML so you have to quote this string
    - cron:  '30 5,17 * * *'
  pull_request:
    branches: [ "main" ]
  issues:
    types:
      - opened
      - labeled
```



### 上传 构建产物

```bash
   - uses: actions/upload-artifact@v3
        if: matrix.os == 'ubuntu-latest'
        with:
          name: artifacts-${{ matrix.arch }}
          path: |
            ./target/${{ matrix.target }}/release/bundle/appimage/**.AppImage.*
            ./target/${{ matrix.target }}/release/bundle/deb/**.deb
```

### 发布

```yaml
 - name: Create Release
    uses: softprops/action-gh-release@master
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    with:
      tag_name: v${{ env.version }}
      name: ChatGPT v${{ env.version }}
      body: See the assets to download this version and install.
      prerelease: false
      generate_release_notes: false
      files: ./artifacts/**/*
```



其他参考：

https://juejin.cn/post/7094865414353584164

https://cn.electron-vite.org/guide/distribution#github-action-ci-cd

https://front-end.toimc.com/notes-page/project/community-electron/07-%E5%A4%9A%E5%B9%B3%E5%8F%B0%E6%89%93%E5%8C%85.html




<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
