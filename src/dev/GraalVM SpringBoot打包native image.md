---
title: GraalVM SpringBoot打包native image
excerpt:
description: GraalVM SpringBoot打包native image
date: 2024-09-30
category: Java
tag: Java
author: xlc520
article: true
timeline: true
icon: java
---

```component VPBanner
title: GraalVM SpringBoot打包native image
content: GraalVM SpringBoot打包native image
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: GraalVM SpringBoot打包native image
    link: /dev/GraalVM SpringBoot打包native image
```

# GraalVM SpringBoot打包native image

## 一、OpenJDK是什么

Java最早由SUN公司(Sun Microsystems，发起于美国斯坦福大学，SUN是Stanford University Network的缩写)发明。

OpenJDK是Java平台标准版（Java SE）的免费开源实现，由Sun Microsystems于2006年开始推动。根据GNU通用公共许可证GPL
v2发布，由SUN和Java社区提供支持。

2009年Oracle收购了Sun公司，自此Java的维护方之一的SUN也变成了Oracle。Oracle JDK之前被称为SUN JDK，收购后被命名为Oracle JDK。

从 Java SE 7 开始，OpenJDK 成为了 Oracle JDK
的官方参考实现。目前OpenJDK的发行版有很多，几乎的所有都派生自OpenJDK，都可以统称为OpenJDK，它们之间没有重大的功能差异，不同的是许可证。

目前常见的OpenJDK有：OpenJDKBellSoft LibericaEclipse Temurin (Adopt OpenJDK)Azul ZuluIBM SemeruMicrosoft OpenJDKRedHat
OpenJDKAmazon Corretto阿里 Dragonwell华为毕昇JDK腾讯 Kona

## 二、GraalVM是什么

GraalVM官网：https://www.graalvm.org

​ GraalVM 是 Oracle 开源的一款通用虚拟机产品，官方称之为 Universal
GraalVM，是新一代的通用多语言高性能虚拟机。能执行各类高性能与互操作性任务，在无需额外开销的前提下允许用户构建多语言应用程序。

#### GraalVM 和 JDK 有什么关系

- Java 虚拟机都是内置在 JDK 中的，比如Orcale JDK、OpenJDK，默认内置的都是 HotSpot 虚拟机。
- GraalVM 也是一种 JDK，一种高性能的 JDK。完全可以用它替代 OpenJDK、Orcale JDK。
- GraalVM 不但包含 JIT (Graal)即时编译器，还包含 AOT (Native Image)，可直接将代码转换成机器码执行。

#### GraalVM 的优势

​ GraalVM 可以完全取代 HotSpot 虚拟机。把之前运行在 HotSpot 上的代码直接平移到 GraalVM 上，不用做任何的改变，甚至都感知不到，项目可以完美的运行。

​ 使用GraalVM 的 Native Image 可以将 Java 应用编译为原生二进制可执行文件，可以使得 Java 应用**脱离 JVM 运行**
。并且启动速度飞快，内存负载也很低，可零预热地达到峰值性能。

​ 用 AOT 编译最终生成的可执行文件非常小，这对于云端部署非常友好。目前很多场景下都使用 Docker 容器的方式部署，打一个 Java
程序的镜像包要包含完整的 JVM 环境和编译好的 Jar 包。而AOT 方式可以最大限度的缩小 Docker 镜像的体积。在**云原生**
环境中，应用的启动速度和性能是关键的考量因素。

启动时间对比：![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175030-0.webp)

内存占用对比：![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175030-1.webp)

​ 另外，GraalVM 还是一种支持**多语言混编**的虚拟机程序，不仅支持 Java 语言，还支持其他语言。不仅包括嫡系的 JVM
系语言Kotlin、Scala，还包括 JavaScript、Nodejs、Ruby、Python 等。GraalVM 提供了一个全面的生态系统，消除编程语言之间的隔离，用
Graal 执行的语言可以互相调用，允许使用来自其他语言的库。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175030-2.webp)

#### JIT和AOT的关系

- JIT，Just-in-Time，即时编译，也就是边运行边编译，占用内存高、启动速度慢，缺点是编译时需要占用运行时的资源。
- AOT，Ahead-of-Time，运行前编译，AOT 编译能提前将源代码转化为机器码，内存占用低，启动速度快，可以无需 runtime 运行，直接将
  runtime 静态链接至最终的程序中，AOT 缺点就是编译时间的增加。

#### 什么是 Native Image

​ 随着云计算技术的不断发展，Serverless 和容器成为了云原生领域的两个重要技术，**弹性伸缩**
能力则成为云原生应用的一个重要特性，它可以让应用在云资源使用不足时自动扩展资源，以满足业务需求；而在资源使用过高时，又可以自动缩容以节省成本。这个特性可以让应用更高效地利用云资源，并保证业务的稳定性和可靠性。

​ 这时候JVM的JIT导致的启动延迟就让Java程序显得很臃肿，所以如果想让Java在云原生时代焕发第二春，支持AOT是非常重要的一步，之前Java有尝试过jaotc方案来实现，不过没多久就因为效果不达预期而被移除。而
GraalVM 则使用了另外一种实现Java AOT的思路，既直接摒弃JVM，和C/C++一样通过编译器直接将代码编译成机器码。这无疑是一种直接颠覆Java语言设计的思路，不过还是被实现了，那就是GraalVM
Native Image。

​ Native Image 通过C语言实现了一个超微缩的运行时组件 —— Substrate VM，基本实现了JVM的各种特性，包含异常处理，同步，线程管理，内存管理（垃圾回收）和
JNI 等组件，但足够轻量、可以被轻松内嵌，SubstrateVM 的启动时间非常短，内存开销非常少。用这种方式编译出的 Java
程序的执行时间可与C语言持平。这一方案在经过长时间的优化和积累后，已经拥有非常不错的效果，目前已成为Oracle官方首推的Java
AOT解决方案。

#### Native Image 的缺点

- 不支持交叉编译，只能编译为本机平台的机器码程序。
- 对包含 Java 反射、动态代理的项目进行 AOT 编译，需要增加配置。
- AOT 编译用时较久、资源占用较高。编译时内存占用几个G，CPU占用80%+是很常见的。

由于是 AOT 技术，对于反射这种纯粹在运行时才能确定的部分，不能完全通过优化编译器解决，必须提前向 GraalVM 提供一个列出了涉及
Java 反射、动态代理所有的类的 JSON 列表，否则，要么编译时会失败，要么编译后的应用在运行时会失败。

## 三、GraalVM 的环境搭建

> 目标环境：
>
> - GraalVM 22.3.3
> - Java 语言级别：17
> - Maven 3.8.6
> - IntelliJ IDEA 2023.1.3
> - Visual Studio 2022

#### 1. GraalVM 版本

1. 在之前，GraalVM 有着两个发行版：

   从 GraalVM 22.3.3 开始，新增了一个全新的发行版：

   新的 Oracle GraalVM 包含了原先 GraalVM EE 独享的所有优化以及绝大多数功能，对包括商业用途在内的场景都完全免费，也允许重分发构建。除了少数功能依然
   EE 独占，其它对于大多数用户在功能上来说都和 GraalVM EE 一致。

    - **Oracle GraalVM** 闭源免费

2. **GraalVM CE（Community Edition ）**社区版，开源免费

   **GraalVM EE（Enterprise Edition）**企业版，闭源付费

#### 2. GraalVM 下载【二选一】

- Oracle GraalVM：https://www.oracle.com/cn/java/technologies/downloads/#graalvmjava17-windows

  **Oracle GraalVM 已集成 Native Image**，不需要单独下载 Native Image。

  ![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175030-3.webp)

- GraalVM CE：https://github.com/graalvm/graalvm-ce-builds/releases![图片](E:
  /source/Git/blogAsset/images/2024/640-1727706175030-4.webp)

  **GraalVM CE 未集成 Native Image**
  ，需要在刚才的页面下载 `native-image-installable-svm-java17-windows-amd64-22.3.3.jar`。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175031-5.webp)

#### 3. GraalVM 环境变量

- 将下载的 zip 压缩包解压到自己喜欢的文件夹，不要包含中文路径，解压得到的就是 GraalVM 程序文件。与安装 JDK 时类似。设置环境变量如下：

  >

    - 变量名：JAVA_HOME

      变量值：D:\Develop\Java\graalvm-jdk-17.0.8+9.1

    - 变量名：GRAALVM_HOME

      变量值：%JAVA_HOME%

    - 变量名：Path

      变量值：%JAVA_HOME%\bin

- 如果上面的环境变量设置成功，在 CMD 的任意路径中输入以下命令应该能看到上面设置的路径。

  where java

  where gu

  ```cmd
  C:\>where java
  C:\Program Files\Java\graalvm-ee-java17-21.3.0\bin\java.exe
  
  C:\>where gu
  C:\Program Files\Java\graalvm-ee-java17-21.3.0\bin\gu.cmd
  ```

  使用java -version也能看到 GraalVM 字样

  ```
  C:\Users\Looming>java -version
  java version "17.0.8" 2023-07-18 LTS
  Java(TM) SE Runtime Environment Oracle GraalVM 17.0.8+9.1 (build 17.0.8+9-LTS-jvmci-23.0-b14)
  Java HotSpot(TM) 64-Bit Server VM Oracle GraalVM 17.0.8+9.1 (build 17.0.8+9-LTS-jvmci-23.0-b14, mixed mode, sharing)
  ```

#### 4. 安装 Native Image

​    **【GraalVM CE 社区版需要安装，Oracle GraalVM跳过此步骤】**

- Native Image是一种将Java代码提前编译为独立可执行文件的技术，此刻执行文件包括应用程序类、依赖、运行时库以及JDK静态连接的本机代码。
  Graalvm通过子模块SubstrateVM来支持Native Image，相比JVM其生成的程序具有更快的启动时间和更低的运行时开销。

- `Native Image` 包就是前面下载的 JAR 包。输入以下命令对 `Native Image` 进行本地安装。

  ```
  gu -L install Native-Image的JAR包路径
  ```

  其中，`Native-Image的JAR包路径` 要替换成实际的路径。注意：native-image的版本必须跟GraalVM的版本对应，否则会报错。

- 验证组件：

  ```
  gu list
  native-image --version
  ```

#### 5. 安装 Visual Studio

- GraalVM 的运行需要 Visual Studio 中的 MSVS 的支持，因此需要下载 Visual
  Studio。这里下载的是 `Microsoft Visual Studio 2022 (64 位)` ，社区版就足够了。

  Visual Studio 下载网址：https://visualstudio.microsoft.com/zh-hans/vs/

  ![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175031-6.webp)

- 现在，Visual Studio 在官网上只会提供在线安装包。下载完在线安装包后，选择安装含 **MSVS** 的选项。

  ![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175031-7.webp)

    - 工作负荷选择：**使用C++的桌面开发**；
    - 语言包选择：**英语**。
    - 路径禁止包含中文。

- 至此，GraalVM 基本运行的环境已经搭成。

  **但是目前所有构建命令都必须在Visual Studio的名为 `x64 Native Tools Command Prompt for VS 2022`
  的命令提示符中执行。快捷方式可以在“开始菜单”中找到，也可以在搜索框中搜索应用程序。**

  ![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175031-8.webp)

  或者，也可以执行 `call  "<VS2022路径>\VC\Auxiliary\Build\vcvars64.bat` 从其他终端运行，然后再开始使用构建命令。

#### 6. MSVC 环境变量配置

​ 由于我们接下来的构建可能会使用maven插件来执行，为了能在任何命令行中找到并使用MSVC环境，我们需要配置一下MSVC 环境变量。

​ 如果不配置就不能在idea当中选中执行，需要每次手动打开x64 Native Tools Command Prompt for VS
2022，然后进入项目目录，手动执行gluonfx:
build。![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175031-9.webp)

**环境变量：**

​    **注意要修改成自己的路径**（Windows Kits目录一般在磁盘根目录）

> MSVCC:\Program Files (x86)\Microsoft Visual Studio\2019\Professional\VC\Tools\MSVC\14.28.29333
>
> WK10_INCLUDEC:\Program Files (x86)\Windows Kits\10\Include\10.0.18362.0
>
> WK10_LIBC:\Program Files (x86)\Windows Kits\10\Lib\10.0.18362.0
>
> WK10_BINC:\Program Files (x86)\Windows Kits\10\bin\10.0.18362.0
>
> INCLUDE%WK10_INCLUDE%\ucrt;%WK10_INCLUDE%\um;%WK10_INCLUDE%\shared;%MSVC%\include;
>
> LIB%WK10_LIB%\um\x64;%WK10_LIB%\ucrt\x64;%MSVC%\lib\x64;
>
> Path下新增%MSVC%\bin\HostX64\x64%WK10_BIN%\x64

**验证环境：**

命令行输入`cl`，回车，显示如下内容说明环境已经配置好了

```
C:\Users\Looming>cl
Microsoft (R) C/C++ Optimizing Compiler Version 19.37.32824 for x64
Copyright (C) Microsoft Corporation. All rights reserved.

usage: cl [ option... ] filename... [ /link linkoption... ]
```

Oracle GraalVM 官方文档：https://docs.oracle.com/en/graalvm/jdk/17/

## 四、使用GraalVM构建项目的几种方式

### 1. 构建不含反射的命令行应用

#### (1) 建一个简单的 Java 示例项目

​ 此项目的路径中不能有中文，否则后面 GraalVM 运行时会报错。

```java
public class Demo {
   public static void main(String[] args) {
       System.out.println("Hello, world.");
  }
}
```

#### (2) 有两种情况，第一种是打包class，第二种是打包jar

- **打包class**

    - 首先将.java编译为 `.class` 文件，可以使用javac，也可以先运行一次让IDE编译。

      ![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175031-10.webp)

    - 打开x64 Native Tools Command Prompt for VS 2022

    - 切换到.class所在目录

    - 运行`native-image 类名`

      ```
      native-image Demo
      ```

      ![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175032-11.webp)

    -
  编译完成后出现了一个exe文件，使用命令行输入文件名运行，因为这个程序没有GUI界面![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175032-12.webp)![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175032-13.webp)
  可以看到程序已经正常运行。

- **打包jar**


- 依然以这个项目为例，新建一个Artifacts，然后Build Artifacts，打出一个jar包（这里不是我们的重点，
  此处略过打jar包的步骤）![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175032-14.webp)

- 打开x64 Native Tools Command Prompt for VS 2022

- 切换到.jar所在目录

- 运行`native-image -jar jar包文件名`

  ```
  native-image -jar Demo.jar
  ```

  ![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175032-15.webp)

-

在命令行中运行打包好的exe，一样可以正常运行![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175032-16.webp)

- Native Image 官方文档：https://www.graalvm.org/latest/reference-manual/native-image/

------

### 2. 构建 Spring-Boot Web 应用

​ 在容器化、云原生时代，Spring的其缺点尤为明显，主要表现在启动慢、占用内用大、笨重。Spring官方也一直在改进这些问题，但在3.0之前，一直没有好的解决方案。

​ Spring团队致力于为Spring应用程序提供原生映像支持已经有一段时间了。在SpringBoo2.x的Spring
Native实验项目中酝酿了3年多之后，随着SpringBoot 3.0.0 GA版本发布，开始正式支持GraalVM Native Image，这也意味着占据Java
Web圈半壁江山的Spring框架正式进入真正的云原生时代。

**SpringBoot 3.0主要特性：**

- 要求Java 17 作为最低版本。需要 Graal 22.3 或更高版本和 Native Build Tools Plugin 0.9.17 或更高版本。
- **支持 GraalVM native images，取代实验性的 Spring Native 项目。**
    - Spring Boot GraalVM Native Image Support
      官方文档：https://docs.spring.io/spring-boot/docs/current/reference/html/native-image.html

#### (1) 使用Spring Initializr创建Spring Boot项目

- 选择 Maven 类型的项目，用 GraalVM 作为 JDK ，语言级别 17 。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175032-17.webp)

- 选择 Spring Boot 3.0 以上版本 ，勾选 GraalVM 支持和 Spring Web。

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175033-18.webp)

#### (2) Maven 编译插件

这时的POM.xml中应该是有native-maven-plugin和spring-boot-maven-plugin这两个插件的，我们暂时什么都不需要做。

native-maven-plugin官方文档：https://graalvm.github.io/native-build-tools/latest/maven-plugin.html

spring-boot-maven-plugin官方文档：https://docs.spring.io/spring-boot/docs/3.1.5/maven-plugin/reference/htmlsingle/

```xml

<build>
    <plugins>
        <plugin>
            <groupId>org.graalvm.buildtools</groupId>
            <artifactId>native-maven-plugin</artifactId>
        </plugin>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
            <configuration>
                <image>
                    <builder>paketobuildpacks/builder-jammy-tiny:latest</builder>
                </image>
            </configuration>
        </plugin>
    </plugins>
</build>
```

#### (3) 写一个测试用的web接口

```java
@SpringBootApplication
@RestController
public class SpringNativeImageDemoApplication {

    @RequestMapping("/")
    public String hello(){
        return "Hello Spring Boot 3 !";
    }

    public static void main(String[] args) {
        SpringApplication.run(SpringNativeImageDemoApplication.class, args);
    }
}
```

#### (4) 构建应用

构建、测试、发布三个操作的命令分别是：

```shell
构建：mvn -Pnative native:compile
测试：mvn -PnativeTest test
发布：mvn -Pnative spring-boot:build-image  注意此命令会打包镜像并且发布到Docker的官方仓库中
```

> 虽然 native:compile 命令表面意义是编译，但是实际上它就是构建原生镜像的命令

- 我们这里进行构建，需要**进入项目目录下执行命令**。如果没有配置MSVC环境变量，则需要在x64 Native Tools Command Prompt执行。

```shell
mvn -Pnative clean native:compile
```

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175033-19.webp)

- 构建完成，出现BUILD SUCCESS字样

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175033-20.webp)

- 在项目的target目录下，可以找到我们编译好的原生应用，Windows平台下的后缀为.exe

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175033-21.webp)

#### (5) 运行程序

**我们来尝试分别运行.exe和.jar来作为对比。**

由于不是GUI应用，所以若想要看到控制台的输出内容，需要在cmd中运行.exe通过双击直接运行的话，退出时需要在任务管理器中手动结束应用

- **原生应用启动，耗时0.116秒，内存占用25M
  **![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175033-22.webp)

  ![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175033-23.webp)

- **JVM方式启动应用，耗时2.46秒，内存占用134M
  **![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175033-24.webp)![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175033-25.webp)

**启动后都可以正常访问，但原生应用的冷启动速度和内存占用都要小多了，并且不依赖Java环境。**

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175034-26.webp)





------

### 3. 构建 JavaFX 桌面应用

​
以往，桌面应用开发技术中JavaFX并不算主流，一个主要原因就是Java应用在运行时总是需要依赖JRE环境，为了兼容性我们通常会把JRE打包进程序当中，这样也导致了程序过于臃肿占用空间非常大，并且在启动时还需要提前解压运行环境，体验非常不好。

​ GraalVM 的出现，可以说是解救 JavaFX 于水火之中，使用 Native Image 打包出来的程序，不仅不用依赖JRE环境，占用空间小，启动速度也是非常的快。

​ 接下来我们就一起来看看怎么对JavaFX项目进行打包吧，我们要用的 gluonfx-maven-plugin 这个打包插件是由 Gluon 提供的。实际上
Gluon 目前已经成为了 JavaFX 技术的主要提供商。

Gluon 官网：https://gluonhq.com

gluonfx-maven-plugin 插件官方文档网址：https://docs.gluonhq.com/#_gluonfx_plugin_for_maven

#### (1) 使用Maven创建JavaFX项目

创建过程省略...

或者我们可以下载Gluon官方示例: https://github.com/gluonhq/gluon-samples/tree/master/HelloFXML

- **对于 Java 8 以上的 JavaFX 项目，必须使用 Java 模块系统才能对其进行 GraalVM 打包**。出于本文的重点，这里不详细介绍什么是
  Java 模块系统以及它的语法。通常，构建 Java 模块系统只需要在顶级目录中添加一个模块声明文件 `module-info.java`。

- **项目的整个文件路径中都不能含有中文**，否则后面的 GraalVM 打包将失败。

#### (2) Maven 插件配置模板

​ 在pom.xml中引入gluonfx-maven-plugin插件，**需要注意几个要根据自己的项目修改的地方**

```xml

<project>
    ...

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <javafx.version>17.0.8</javafx.version>
        <!-- 启动类 【需要根据自己的项目修改】 -->
        <main.class>cn.itsource.Main</main.class>
    </properties>

    <dependencies>
        <!-- JavaFX 依赖 -->
        <dependency>
            <groupId>org.openjfx</groupId>
            <artifactId>javafx-controls</artifactId>
            <version>${javafx.version}</version>
        </dependency>
        <dependency>
            <groupId>org.openjfx</groupId>
            <artifactId>javafx-fxml</artifactId>
            <version>${javafx.version}</version>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <!-- Maven打包插件 -->
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.11.0</version>
                <configuration>
                    <source>17</source>
                    <target>17</target>
                </configuration>
            </plugin>
            <!-- OpenJFX的JavaFX打包插件 -->
            <plugin>
                <groupId>org.openjfx</groupId>
                <artifactId>javafx-maven-plugin</artifactId>
                <version>0.0.8</version>
                <configuration>
                    <mainClass>${main.class}</mainClass>
                </configuration>
            </plugin>
            <!-- Gluon的JavaFX打包插件 -->
            <plugin>
                <groupId>com.gluonhq</groupId>
                <artifactId>gluonfx-maven-plugin</artifactId>
                <version>1.0.21</version>
                <configuration>
                    <!-- 打包平台 本机平台 -->
                    <target>host</target>
                    <!-- 启动类 -->
                    <mainClass>${main.class}</mainClass>
                    <!-- jfx静态sdk版本 -->
                    <javafxStaticSdkVersion>${javafx.version}</javafxStaticSdkVersion>
                    <!-- 额外的资源文件后缀 -->
                    <resourcesList>
                        <list>.*\\.properties$</list>
                    </resourcesList>
                    <!-- 涉及反射的类 -->
                    <reflectionList>
                        <!-- JavaFX Controller【需要根据自己的项目修改】 -->
                        <list>cc.looming.HelloController</list>

                        <!-- JavaFX FXML -->
                        <list>javafx.fxml.FXMLLoader</list>

                        <!-- JavaFX Base -->
                        <list>javafx.application.Platform</list>
                        <list>javafx.application.Application</list>
                        <list>javafx.stage.Stage</list>
                        <list>javafx.scene.Scene</list>

                        <!-- JavaFX Controls 【需要根据自己的项目修改】 -->
                        <!-- 可以在.fxml文件的头部查看import了哪些类 -->
                        <list>javafx.geometry.Insets</list>
                        <list>javafx.scene.control.Button</list>
                        <list>javafx.scene.control.Label</list>
                        <list>javafx.scene.control.ScrollPane</list>
                        <list>javafx.scene.control.TextArea</list>
                        <list>javafx.scene.control.TextField</list>
                        <list>javafx.scene.image.Image</list>
                        <list>javafx.scene.image.ImageView</list>
                        <list>javafx.scene.layout.AnchorPane</list>
                        <list>javafx.scene.layout.HBox</list>
                        <list>javafx.scene.layout.Pane</list>
                        <list>javafx.scene.layout.VBox</list>
                        <list>javafx.scene.shape.Polygon</list>
                        <list>javafx.scene.text.Font</list>

                        <!-- 枚举类 【需要根据自己的项目修改】-->
                        <!-- Controls的有些属性使用的是枚举，若用到了也需要列出来 -->
                        <list>javafx.geometry.NodeOrientation</list>
                    </reflectionList>
                </configuration>
                <!-- 在maven的package阶段调用本插件的build -->
                <executions>
                    <execution>
                        <goals>
                            <goal>build</goal>
                        </goals>
                        <phase>package</phase>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</project>
```

注意：

- JavaFX 支持使用 FXML 这种文本语言来创建组件，然而对于这种文本语言，是借助于反射技术来实现的。为了让 GraalVM
  打包成功，需要在`<reflectionList>`中列出所有的 JavaFX Controller控制器类，以及在FXML中使用到的各种控件。

- 如果需要在 JavaFX 中使用一些特殊的资源文件，这需要在此列出所有的这些文件。此插件打包时已经内置了如下类型的文件。

  > `png`, `jpg`, `jpeg`, `gif`, `bmp`, `ttf`, `raw`
  >
  > `xml`, `fxml`, `css`, `gls`, `json`, `dat`,
  >
  > `license`, `frag`, `vert`, `obj`

  已经内置了类型的文件不需要自行列出（即上面列出的类型的文件不属于上面所言的 `特殊的资源文件`
  ）。更多的信息，可见：https://docs.gluonhq.com/#_resourceslist

  列出的方法是，在 `<configuration>` 中的 `<bundlesList>`添加`<list>`标签，然后在 `<list>`
  中依次列出`<list>文件路径.文件名</list>`。不过要注意，这个列出文件的时候，要像 Java 类一样，**使用点号来代替路径分隔符**，且
  **不需要加上文件后缀**。

#### (3) 构建应用

- 方式一：在**项目目录**下的命令行中输入命令`mvn clean gluonfx:build`进行 GraalVM 打包，如果未配置MSVC环境变量，则需要在Native
  Tools Command中执行。

- 方式二：或者点击IDEA右侧的gluonfx:
  build![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175034-27.webp)

  打包完成之后，应该可以看到在项目路径 `\target\gluonfx\x86_64-windows\` 下的 EXE 文件。对于运行来说，就只有生成的 EXE
  文件是核心文件，其它文件只是打包过程中生成的中间产物，都可以删除。

  ![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1727706175034-28.webp)

#### (4) 运行程序

- 打包完成之后，可以直接在操作系统中双击运行此 EXE
  文件，但是这种方式标准输出流将不会定向到运行来源，这意味着将无法看到 `System.out.println(...)` 这之类代码的输出。
- 如果想要看到运行过程中输出到控制台的打印和报错信息，需要使用`mvn gluonfx:nativerun`命令运行，或者在IDEA中点击 gluonfx:
  nativerun

## 五、相关资料

Oracle GraalVM 下载：https://www.oracle.com/cn/java/technologies/downloads/#graalvmjava17-windows

GraalVM Community Edition 下载：https://github.com/graalvm/graalvm-ce-builds/releases

Visual Studio 下载：https://visualstudio.microsoft.com/zh-hans/vs/

Oracle GraalVM 官方文档：https://docs.oracle.com/en/graalvm/jdk/17/

Native Image 官方文档：https://www.graalvm.org/latest/reference-manual/native-image/

Spring Boot 3.0 更新日志：https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.0-Release-Notes

Spring Boot GraalVM Native Image Support
官方文档：https://docs.spring.io/spring-boot/docs/current/reference/html/native-image.html

native-maven-plugin 官方文档：https://graalvm.github.io/native-build-tools/latest/maven-plugin.html

spring-boot-maven-plugin 官方文档：https://docs.spring.io/spring-boot/docs/3.1.5/maven-plugin/reference/htmlsingle/

gluonfx-maven-plugin 官方文档：https://docs.gluonhq.com/#_gluonfx_plugin_for_maven

Gluon官方示例: https://github.com/gluonhq/gluon-samples/tree/master/HelloFXML

Gluon示例程序的仓库：https://github.com/gluonhq/gluon-samples/

Gluon的JavaFX项目在线创建网站：https://start.gluon.io/

一个国人写的GraalVM最佳实践：https://gitee.com/westinyang/java-graalvm-start

Java在云原生的破局利器——AOT(JIT与AOT)：https://cloud.tencent.com/developer/article/2228910

SpringBoot3.x原生镜像实践（Linux - Liberica NIK）：https://www.cnblogs.com/throwable/p/17644981.html




<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
