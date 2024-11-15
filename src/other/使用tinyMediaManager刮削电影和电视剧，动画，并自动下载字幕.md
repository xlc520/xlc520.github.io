> 注意使用V3版本，V4版本收费！
>
> 所以升级V3版本即可，不要升级到V4版本！不要升级到V4版本！不要升级到V4版本！

- **Plex**是一款很好用的个人媒体中心软件，但是因为国内网络的原因，使用默认的TMDB刮削器挂出来的效果并不好，要么就是影片信息不正确，要么就是海报不正常显示，实在让人头疼。
- **tinyMediaManager**
  是一款电影信息刮削和整理的软件，正好可以和plex配合，完美的解决这一问题。tinyMediaManager在刮削影片的过程中会把影片的海报、演员表、背景图片等等都保存到影片所在文件夹，自动生成电影的nfo信息文件，并对文件和文件夹进行重新命名的操作。在plex设置刮削代理的时候，需要用一款插件可以直接读取nfo的信息，完成刮削，下面把使用方法分享给大家，

## **下载和安装tinyMediaManager**

> **官网下载地址：https://www.tinymediamanager.org/download/**
>
> [V3版本在这里下载](https://archive.tinymediamanager.org/)
>
> [Download Java for Windows](https://www.java.com/zh-CN/download/) TMM 需要 java 1.8 以上版本



![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314144845.webp)

### tmm下载

**下载后直接解压文件夹**

客户端需要java支持，先在电脑安装java

客户端下载后是一个压缩包，解压之后就可以用

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314144845-1.webp)

**解压之后打开tinyMediaManager.exe**

![tmm目录](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314144845-2.webp)

**tmm目录**

## TMM设置

### TMM代理设置

> 重要：很多源都需要代理才能访问。这里正确的配置才能正确的刮削！
>
> 可以调整这里使用的内存，大内存可以极大加速刮削速度。



![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314144845-3.webp)

## 电影刮削设置

**进行相关设置。Tmm可以对电影和电视剧的刮削进行分别设置，打开设置后选择电影选项，可以选择分级标准、自动重命名等选项。**

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314144845-4.webp)

电影信息选项

**点击侧边栏媒体库目录，添加电影目录**

**刮削器设置**

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/1120211011181107.jpeg)

选择电影刮削器

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314144845-5.webp)

刮削器选项

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314144845-6.webp)

nfo选项，建议选择生成两种命名放视的nfo

**图片刮削器选择全选，图片文件名建议两边都选上，会分别生成两组命名格式不同的图片，为了保证plex能读取**

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314144845-7.webp)

图片命名选项

Tmm还可以自动下载预告片，字幕。字幕下载时可以输入opensubtitles账户

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314144845-8.webp)

字幕下载选项

**重命名规则**

这里重点讲一下重命名规则，刮削完后可以选择对电影文件和文件夹进行重命名，可能对于pt用户重命名可能会影响资源上传，可以不进行重命名操作。

一般情况下电影刮削出来的信息，title是电影的中文标题名称，originaltitle是电影的原标题名称，一般是英文名称。软件默认的设置是文件和文件夹都命名成title，也就是中文标题，但是我发现这样在后期使用的时候有弊端。英文电影在检索字幕时会用文件名来检索，而用中文名称很多情况下检索不出来，所以这里把文件的命名规则改一下，改成originaltitle，并去掉年份信息的括号，中间连接符改成点，文件名设置成�������������{-
,edition,}.����.{videoFormat}.${audioCodec}的格式。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314144845-9.webp)

电影文件重命名选项

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314144845-10.webp)

刮削完的文件夹内文件信息

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314144845-11.webp)

刮削完的电影文件夹目录

**电视节目刮削设置类似，如果挂不出来可以用the tvdb来刮削。**

**tmm有时候会出现网络不稳定，刮不到的情况，可以修改host解决**

改host 在host文件最后加一行13.224.161.90 [http://api.themoviedb.org](http://api.themoviedb.org/)

**退出设置，开始刮削**

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314144845-12.webp)

更新电影源

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/1120211011181128.jpeg)

选中要刮削的电影自动匹配

### 电影手动刮削

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314144845-13.webp)

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314144845-14.webp)

## 电视剧&动画手动刮削

### 电视剧元数据刮削

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314144845-15.webp)

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314144845-16.webp)

### 季和集元数据刮削前整理

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314144845-17.webp)

### 刮削季元素

整理好正确的季和集之后，才能正确的刮削季元素

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314144845-18.webp)

### TMM整理完效果

> 这里用海贼王做展示，一个季和集都特别多的剧。



![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314144845-19.webp)

## TMM目录重命名整理

> 刮削完后，可以重命名视频文件，并进行目录整理。

方法1

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/1120211011181133.jpeg)

方法2

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314144845-20.webp)

等所有电影的信息刮削完后，选择重命名和清理，这样就完成了刮削的操作。以后下载了新电影，直接打开tmm,更新源之后直接选择搜索未刮削过的电影完成刮削。刮削出来的信息kodi，emby等软件也都能用。

## Plex设置

### **plex插件的安装和设置**

**下载plex的插件**

插件XBMCnfoMoviesImporter和XBMCnfoTVImporter分别是刮削电影和电视剧的插件

下载地址：https://github.com/gboudreau/XBMCnfoMoviesImporter.bundle

如果不能下载的话可以联系我获取，还有几个很好用的plex插件

下载完插件后就需要把插件解压到plex的插件目录：`C:\\Users\\用户名\\AppData\\Local\\Plex Media Server\\Plug-ins`

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314144845-21.webp)

plex插件目录

注意解压后要把文件夹名后边的master去掉。

**plex代理设置**

`Plex`的代理设置就是选择刮削电影所用的刮削器及优先级。

装好插件后重启`plex`，进行`plex`的设置。在代理设置中选择`XBMCnfoMoviesImporter`，把它的优先级调到最高，第二个可以设置成字幕插件。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/1120211011181140.jpeg)

**设置电影资料库的刮削器代理**

点击设置界面下方管理里边的资料库，选择电影资料夹的高级设置，设置如下

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314145839.webp)

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314145839-1.webp)

plex代理设置

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314145839-2.webp)

**刷新电影源数据资料**

设置完成后就可以在plex主页对电影文件夹刷新元数据了。等待刷新完后就可以载入所有的电影信息了。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/1120211011181152.jpeg)

管理资料库-刷新电影元数据

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/1120211011181153.jpeg)

更新后的电影信息

采用类似的设置，电视剧信息也能刮削。

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/1120211011181159.jpeg)

电视剧更新后的信息

## Emby设置

> Emby内置刮削工具，但是速度较慢。下面设置基于外部刮削工具TMM，所以没有勾选Emby刮削源！

最终效果演示

![最终效果](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314145839-3.webp)

**最终效果**

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314145839-4.webp)

### 开始设置

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314145839-5.webp)

### 新增媒体库

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314145839-6.webp)

### 已有媒体库属性设置

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314145839-7.webp)

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314145839-8.webp)

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314145839-9.webp)

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314145839-10.webp)

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314145839-11.webp)

### Emby字幕设置

字幕下载设置，字幕下载工具见后面的[字幕下载]章节

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/20230314145839-12.webp)

## **字幕下载**

想要较好的自动下载字幕，最好用前面介绍的tmm刮削改名之后再使用下面工具。

### subfinder 自动下载字幕

- Docker： [superng6/subfinder](https://hub.docker.com/r/superng6/subfinder)

下载完成，刮削后的目录，挂载到subfinder的media目录，就会自动下载字幕。

字幕下载对电影，英文剧集支持较好。对于一些tv，动画手动下载字幕会更好一些。

注意：官方的配置文件有问题，时效问题。修改URL到最新即可。

### chinesesubfinder

- Docker： [allanpk716/chinesesubfinder](https://hub.docker.com/r/allanpk716/chinesesubfinder)
- 新开发的中文字幕查找工具，上面那个很久没更新了，这个刚出来。使用nfo里面刮削出来的文件名来匹配字幕。所以就原理来说，这个字幕匹配更准确。

### bazarr

- Docker：[linuxserver/bazarr](https://hub.docker.com/r/linuxserver/bazarr)
- 字幕下载管理，配合sonarr, radarr 使用效果更好。对于英文剧集命名规范的支持较好，比如`[name]S01E01`

## tinyMediaManager 破解

> - [Power](https://gitee.com/ja-netfilter/plugin-power) 本项目只做个人学习研究之用，不得用于商业用途！
> - [ja-netfilter](https://gitee.com/ja-netfilter/ja-netfilter)

### tinyMediaManager 4 破解

#### `power.conf`文件配置

none

```text
[Result]
; tinyMediaManager
EQUAL,8630757501743642474097255044263570352684017656721020257535853201009899319687425782165282064796127603308259281595234513417333265009792301721615397359280849629133412233835828756819167588254001206400797570673452581858162969385412635998542457688319518187361665435616211663738293023751998984763244849554409283905806741550843609045949098379453835211021356935854652145036408058534280517201922175457527823511640833551008542638353155946242172001873369454067403155639128713334107588511323091987132843211721921554657376250465757925304142530090462817875274786037327875410447778794471350439131533860021653761166305610613929184255,65537,24727125652606355449965534471427156023350099597994490506507713341912306496563021166152677249027965321789848834729809902911806740445767002100807674700362396558567035577150643203400446146497612913744824152837680881642876928709753797537574652985337199808338261100773937616204974417659383459000710718258741071638125033399831524388809092948345089352808322362674190618697732507738374259091305808486391160153350340004713677863069207330711835021340142816443405418680867515100803735831594532024774597095396300615924299450809820530743854878808508438754957122002060049512204045465820395106589768553215005202526112100710029727397->986236757547332986472011617696226561292849812918563355472727826767720188564083584387121625107510786855734801053524719833194566624465665316622563244215340671405971599343902468620306327831715457360719532421388780770165778156818229863337344187575566725786793391480600129482653072861971002459947277805295727097226389568776499707662505334062639449916265137796823793276300221537201727072401742985542559596685092673521228140822200236743113743661549252453726123450722876929538747702356573783116197523966334991563351853851212597377279504828784749025539275525568327959057446141950786113749166506186864056372274749084589132
```

#### `tinyMediaManager`激活码

none

```text
LS0tLS1CRUdJTiBQR1AgU0lHTkVEIE1FU1NBR0UtLS0tLQoKbmFtZT1uZW8KdmFsaWRVbnRpbD0yMDk5LTEyLTMxCndlYnNpdGU9aHR0cHM6Ly96aGlsZS5pbwotLS0tLUJFR0lOIFBHUCBTSUdOQVRVUkUtLS0tLQoKd3NCY0JBQUJDQUFRQlFKZlJtOWpDUkR6ZW9adU9nVVluUUFBVmtvSUFFUmVaNlBwM1NpbVlLYkgrSkh6d1c4cQpMaVdlUUlQTmF0RndEUUhnRDRpcFQ5YVhNYU9iblhYbDgzS1VRNWxQeDhCdzc3QnhQYXJwVWJ0Q1JOVHJXb1U1ClhaMWlrZnF6bWVWRUpyazRZc05LRGlCcHZqYnlGODZGOEtTa1hod2RMV1NtMWU2eWVtblhLY1RIZzJMMTNBaVMKNlRJcVhYYmNSbUZGN1JUTzREUXJqaXJhMllZbFc4ZUhQSWNDbU9xMFlqUjRRcHorUi8rM0JsZlYyVEFjTC9zZApTZUtBY3pndmRQNkNTNmJlMXJQQTBubGd3OVQ4NTNCcGdxcGxRVk0zMHBVaFZsbmk3Z2ExWVJ6RU5tNlFpYzVBCnVFYm1QeXVuaW0yV0h5dFB1TFFxK0JRdkFxK1dycjJraU03RGh5dllGaWhETmRGV1c2N1krZlNsZ1B4T2kvOD0KPVFLcGMKLS0tLS1FTkQgUEdQIFNJR05BVFVSRS0tLS0t
```

#### `-javaagent`配置

我们假设你的`ja-netfilter.jar`所在文件路径是：`/path/to/ja-netfilter.jar`（实际使用以你真实安装路径为准）

- 在`tinyMediaManager`安装目录下找到：`launcher-extra.yml`文件
- 编辑`launcher-extra.yml`文件，在文件中找到`jvmOpts`节配置，添加：`- '-javaagent:/path/to/ja-netfilter.jar'`
- 其实编辑`launcher.yml`文件也是可以的。
- 注意一定用你`ja-netfilter.jar`的真实绝对地址替换上面的`-javaagent:`后面的地址
- 由于`tinyMediaManager`最新版本升级到`Java17`
  ，故而需要添加额外的JVM参数。具体请看[这篇文章](https://zhile.io/2022/07/27/ja-netfilter-for-java17.html)。
- 保存`launcher-extra.yml`文件后启动`tinyMediaManager`，填入上述的激活码即可。
- `Windows`/`macOS`/`Linux`操作系统不限。
- 一个最简的示例`launcher-extra.yml`文件内容最起码应该有这些：

yaml

```yaml
---
javaHome: ''
jvmOpts:
  - '--add-opens=java.base/jdk.internal.org.objectweb.asm=ALL-UNNAMED'
  - '--add-opens=java.base/jdk.internal.org.objectweb.asm.tree=ALL-UNNAMED'
  - '-javaagent:/path/to/ja-netfilter.jar'
env: [ ]
```

### tinyMediaManager 5 破解

tinyMediaManager4.x版本的[power配置和激活码 7](https://zhile.io/2022/05/18/tinymediamanager-via-power.html)
都是对的，RSA验证都通过了，最后发现是5.x新版本启动时把-javaagent参数给抹掉了，没有完全按照launcher.yml里的参数进行设置，而且还强制增加了下面两个参数：

ruby

```ruby
-XX:+DisableAttachMechanism -XX:-EnableDynamicAgentLoading
```

解决办法：

#### 方法一：

#### 简单写个shell脚本，用自己的java参数命令启动

bash

```bash
#/bin/bash
cd /Applications/tinyMediaManager.app/Contents/Resources/Java/
./jre/bin/java -Xms64m -Xmx512m -Xss512k \
  -XX:+IgnoreUnrecognizedVMOptions \
  -XX:+UseG1GC \
  -XX:+UseStringDeduplication \
  -Dsun.java2d.renderer=sun.java2d.marlin.MarlinRenderingEngine \
  -Djava.net.preferIPv4Stack=true \
  -Dfile.encoding=UTF-8 \
  -Dsun.jnu.encoding=UTF-8 \
  -Djna.nosys=true \
  -Dtmm.consoleloglevel=INFO \
  -Dapple.awt.graphics.UseQuartz=true \
  -Xdock:name=tinyMediaManager \
  -Dapple.awt.application.name=tinyMediaManager \
  -Dapple.awt.application.appearance=system \
  -Dapple.eawt.quitStrategy=CLOSE_ALL_WINDOWS \
  --add-opens=java.base/jdk.internal.org.objectweb.asm=ALL-UNNAMED \
  --add-opens=java.base/jdk.internal.org.objectweb.asm.tree=ALL-UNNAMED \
  -javaagent:/xxx/ja-netfilter.jar \
  #-Dtmm.contentfolder="/Users/xxx/Library/Application Support/tinyMediaManager" \
  -classpath "tmm.jar:./lib/*" org.tinymediamanager.TinyMediaManager
```

#### 方法二：

> 直接把启动程序/Applications/tinyMediaManager.app/Contents/MacOS/tinyMediaManager换成4.x版本的，主程序都是java的，功能上感觉应该影响不大

#### 一些说明

- 本文是对[Power](https://gitee.com/ja-netfilter/plugin-power)插件和非对称加密的学习研究，不是让你做商业用途的！
- 希望大家用[Power](https://gitee.com/ja-netfilter/plugin-power)插件玩出更多玩法。
- 希望大家为[ja-netfilter](https://zhile.io/2022/05/18/(https://gitee.com/ja-netfilter/ja-netfilter))多开发好用好玩的插件。

## 参考

- [利用tinyMediaManager刮削影片，解决家用nas软件plex电影墙的问题](https://zhuanlan.zhihu.com/p/112167546?from_voters_page=true)
- [Power插件应用：搞定tinyMediaManager](https://zhile.io/2022/05/18/tinymediamanager-via-power.html)
- [tinyMediaManager-5.0.4激活遇到的问题及解决方法](https://linux.do/t/topic/69690)

- [https://blog.17lai.site/posts/e6d40157/#%E4%B8%8B%E8%BD%BD%E5%92%8C%E5%AE%89%E8%A3%85tinyMediaManager](https://blog.17lai.site/posts/e6d40157/#下载和安装tinyMediaManager)
  