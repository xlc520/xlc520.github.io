---
# 这是页面的图标
icon: page
# 这是文章的标题
title: GitHub-Auto-Commit
# 设置作者
author: xlc520
# 设置写作时间
date: 2022-01-10
# 一个页面只能有一个分类
category: GitHub
# 一个页面可以有多个标签
tag:
  - GitHub
# 设置当前文章是否在列表中置顶，此页面会在文章列表指定
sticky: false
# 设置当前文章是否收藏在博客主题的文章列表中。当填入数字时，数字越大，排名越靠前。
star: true
# 你可以自定义页脚
# footer: 这是测试显示的页脚
---

# GitHub-Auto-Commit

> 一个用于Git自动commit的VSCode插件，它可以用来补充之前忘记提交commit，帮助你把首页的绿色格子填满。

### 使用效果

1. 使用本插件来控制commit次数.
2. 如下图，你甚至可以规划一下`commit`次数，然后画出图形, 天空才是你的极限。

![img](https://fastly.jsdelivr.net/gh/xlc520/MyImage@main/MdImg/5245297-2c357937f3122b08.jpg)

### 功能特性

1. **选择多个日期范围**：一次操作即可提交不同日期`commit`
2. **控制每个日期的commit次数**: 可以用它来控制绿色格子的颜色，了解[commit次数与颜色](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2FOBKoro1%2FautoCommit%2Fwiki%2F%E4%BD%BF%E7%94%A8%E9%A1%BB%E7%9F%A5%23commit%E6%AC%A1%E6%95%B0%E4%B8%8E%E9%A2%9C%E8%89%B2)
3. **随机commit次数**：随机commit次数让我们的提交看起来更加逼真。
4. **取消commit**: 用于在`commit`期间取消并回滚到未提交版本
5. 超过100次提交，将强制考虑10秒是否要取消commit。
6. 插件成功运行后，将自动保存配置参数，无须每次都要一通操作。
7. 提交完善的日志: 清晰的了解插件的运行情况
8. 后台运行，不影响编码、浏览网页等。
9. 运行超快，如下图187次commit，20秒搞定。
10. 还有超多细节优化。

### 仓库地址:

[https://github.com/OBKoro1/autoCommit](https://github.com/OBKoro1/autoCommit)

#### 自动commit演示：

![image-20220111141608365](https://fastly.jsdelivr.net/gh/xlc520/MyImage@main/MdImg/image-20220111141608365.png)

### 安装

在 Vscode 扩展商店中搜索`Auto Commit`,点击安装即可。

### 插件入口

1. 使用快捷键打开VSCode的命令面板。
   - `mac`: `command + p` window: `ctrl + p`
2. 输入`> auto commit`将会看到如下图所示的命令选项，然后用鼠标点击或者回车都可启动插件。
   - 实际上可以输入下方选项的任何一段文字，都可以匹配到插件命令选项。

![img](https://fastly.jsdelivr.net/gh/xlc520/MyImage@main/MdImg/5245297-832f45c19fdca38e.jpg)

image

### 使用须知

## Git相关

需要有一个项目让插件提交commit，可以使用公开项目但更推荐创建一个私有项目

#### 创建私有项目来提交commit

**私有项目的优势**:

1. 隐藏项目，别人看不到。

   PS： 公开的项目，如果后面要删除的话，会将commit也清除掉。

2. 相对应的你的提交记录别人也看不到，只能看到类似下面这句话。

   `3 contributions in private repositories`: 提交了三个commit到私有仓库。

3. **要打开私有仓库贡献可见 ，别人才能看到私有仓库的commit** ,否则只能自己看到:

![img](https://fastly.jsdelivr.net/gh/xlc520/MyImage@main/MdImg/5245297-4b6984da51d815cd.jpg)



#### 确保能够正常提交

1. clone github项目到本地。

2. 确保能够正常提交。

   先进行一次提交确保能够正常提交，防止因为merge/release等问题导致提交失败。

#### **需要提交到`master`分支上**

如果提交到其他分支，提交记录不会显示在绿色的格子里面，合并分支之后 才会显示在绿色格子里面。

#### 提交以前和未来的commit

在19年12月我创建了一个测试账号：koroTest，经过测试：

1. 成功提交17年的10月份的commit。
2. 现在2020年1月份，成功提交了2020年2月份的commit。
3. 具体能提交最早和最晚的日期没有测试过，有兴趣的可以试试~

#### commit次数与颜色

我用这个工具测试一下了一个不同日期commit1~30次的颜色变化：

一天1-7次commit颜色为`#c6e48b`
 一天8-14次commit颜色为`#7bc96f`
 一天15-20次commit颜色为`#239a3b`
 一天21-63次commit颜色为`#196127`

后面的没有再测试了，应该最深的颜色就是`#196127`。

![img](https://fastly.jsdelivr.net/gh/xlc520/MyImage@main/MdImg/5245297-73427fb0f18ccfa8.jpg)

commit颜色

## 插件运行机制相关

#### 随机commit次数

默认开启，默认为1~10随机，时间范围内默认每个日期随机commit几次，如果单个时间段设置了`commit`次数将使用设置的次数。

PS： 最小值为2，即每个日期随机commi 1/2次。

#### 默认commit次数

关闭随机commit次数，就会使用默认commit次数，如果单个时间段设置了`commit`次数将使用设置的次数。

#### 设置多个时间段、每个时间段可以设置不同的提交次数

如下图：

1. **插件可以添加多次日期范围**。
2. **每个日期范围都能控制具体的commit次数**。
3. 每个日期范围和commit次数通过index来配对。
4. 同一个日期，后面出现的将会覆盖前面的：`commit`次数将会使用后面日期设置。
5. 对应的日期范围，不设置commit次数，那么将会使用随机`commit`次数/默认`commit`次数。

如下图所示的配置(日期覆盖情况)，最后的结果是：

12/01~12/06 使用默认commit次数，每天将会提交一次
 12/07~12/08 每天提交三次
 12/09~12/19 每天提交四次

![img](https://fastly.jsdelivr.net/gh/xlc520/MyImage@main/MdImg/5245297-5d9be61e7da96d62.jpg)

image

#### commit次数的最大值

所有计数器的最大值设定为30。

#### 默认修改项目根目录的`commit.md`文件

插件将默认重写项目根目录的`commit.md`文件，如果文件不存在将会自动创建。

插件提供了一个配置项让你可以修改commit信息将要存储的文件。

#### commit信息

每次提交需要有一个commit信息，插件默认是`autoCommit`, 你可以在界面修改它。

#### 运行日志

插件运行日志，是倒序展示的，如果提交量比较大，支持在运行期间清空日志。

### 开始commit

当配置好选项之后就可以**点击开始commit**按钮来提交commit。

建议一开始为了避免误操作，先测试一下：commit量不要过大。

PS： 请在一个网络状况良好的地方运行，否则会导致`push`失败。

### 取消commit

1. 该按钮是为了避免用户误操作，用于在插件commit期间终止自动`commit`。
2. 一旦插件日志出现`提交中...`，就不可取消。
3. 如果commit次数超过100，插件将会强制等待10S让你考虑是否需要取消commit。

#### 保存配置和后台运行

1. 插件在运行成功一次之后，会自动保存你的配置参数，在你下次通过命令打开插件的时候，会自动初始配置参数。
2. 插件是可以挂在后台运行，不影响你编码、浏览网页之类的。

### 插件声明

[autoCommit]([https://github.com/OBKoro1/autoCommit](https://github.com/OBKoro1/autoCommit))是本人兴之所至创建的个人项目，仅用于学习交流，禁止任何人商用以及用于非法之途。

插件如构成侵权，请通过邮件联系我。

### 头部注释插件

本人还开源了另外一个VSCode插件:koroFileHeader，目前该插件已经有1000+ Star了，欢迎安装使用。

1. 它是用于生成文件头部注释，帮助我们养成良好的编码习惯，规范整个团队风格。
2. 插件支持所有主流语言,功能强大，灵活方便，文档齐全，食用简单！

