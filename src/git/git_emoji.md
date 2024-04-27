---
author: xlc520
title: commit规范 & emoji表情
excerpt: 
description: commit规范 & emoji表情
date: 2022-02-13
category: Git
tag: Git
article: true
dateline: true
icon: type
---

# Git 丨 commit 规范 & emoji 表情

## 一、文字规范

commit 一共由五部分组成，具体内容如下。

（1）type
提交 commit 的类型，包括以下几种

feat: 新功能
fix: 修复问题
docs: 修改文档
style: 修改代码格式，不影响代码逻辑
refactor: 重构代码，理论上不影响现有功能
perf: 提升性能
test: 增加修改测试用例
chore: 修改工具相关（包括但不限于文档、代码生成等）
deps: 升级依赖

（2）scope
修改文件的范围（包括但不限于 doc, middleware, core, config, plugin）

（3）subject
用一句话清楚的描述这次提交做了什么

（4）body
补充 subject，适当增加原因、目的等相关因素，也可不写。

（5）footer
当有非兼容修改(Breaking Change)时必须在这里描述清楚
关联相关 issue，如 Closes #1, Closes #2, #3
如果功能点有新增或修改的，还需要关联文档 doc

## 二、emoji 规范

注：以下 emoji 表情在 git 提交时已经完全支持，哪怕下面的表情显示不完整也不用慌，可以直接在 git-submit 里使用。

```plain
emoji  emoji代码 commit说明
🎨 (调色板) :art: 改进代码结构/代码格式
⚡️ (闪电) :zap: 提升性能
🐎 (赛马) :racehorse: 提升性能
🔥 (火焰) :fire: 移除代码或文件
🐛 (bug) :bug: 修复 bug
🚑 (急救车) :ambulance: 重要补丁
✨ (火花) :sparkles: 引入新功能
📝 (铅笔) :pencil: 撰写文档
🚀 (火箭) :rocket: 部署功能
💄 (口红) :lipstick: 更新 UI 和样式文件
🎉 (庆祝) :tada: 初次提交
✅ (白色复选框) :white_check_mark: 增加测试
🔒 (锁) :lock: 修复安全问题
🍎 (苹果) :apple: 修复 macOS 下的问题
🐧 (企鹅) :penguin: 修复 Linux 下的问题
🏁 (旗帜) :checked_flag: 修复 Windows 下的问题
🔖 (书签) :bookmark: 发行/版本标签
🚨 (警车灯) :rotating_light: 移除 linter 警告
🚧 (施工) :construction: 工作进行中
💚 (绿心) :green_heart: 修复 CI 构建问题
⬇️ (下降箭头) :arrow_down: 降级依赖
⬆️ (上升箭头) :arrow_up: 升级依赖
👷 (工人) :construction_worker: 添加 CI 构建系统
📈 (上升趋势图) :chart_with_upwards_trend: 添加分析或跟踪代码
🔨 (锤子) :hammer: 重大重构
➖ (减号) :heavy_minus_sign: 减少一个依赖
🐳 (鲸鱼) :whale: 相关工作
➕ (加号) :heavy_plus_sign: 增加一个依赖
🔧 (扳手) :wrench: 修改配置文件
🌐 (地球) :globe_with_meridians: 国际化与本地化
✏️ (铅笔) :pencil2: 修复 typo
```

| 样式  |              代码               |        含义         |
|:---:|:-----------------------------:|:-----------------:|
| 🎨  |            `:art:`            |     改进代码结构/格式     |
| ⚡️  |            `:zap:`            |       提高性能        |
| 🔥  |           `:fire:`            |      移除代码或文件      |
| 🐛  |            `:bug:`            |      修复了 Bug      |
| 🚑  |         `:ambulance:`         |       重要补丁        |
|  ✨  |         `:sparkles:`          |       引入新功能       |
| 📝  |           `:memo:`            |        写文档        |
| 🚀  |          `:rocket:`           |        部署程        |
| 💄  |         `:lipstick:`          |    更新 UI 和样式文件    |
| 🎉  |           `:tada:`            |       初次提交        |
|  ✅  |     `:white_check_mark:`      |       增加测试        |
| 🔑  |           `:lock:`            |      修复安全问题       |
| 🍎  |           `:apple:`           |   修复 macOS 上的东西   |
| 🐧  |          `:penguin:`          |   修复 Linux 上的东西   |
| 🏁  |      `:checkered_flag:`       |  修复 Windows 上的东西  |
| 🤖️ |           `:robot:`           |  修复 Android 上的东西  |
| 🍏  |        `:green_apple:`        |    修复 iOS 上的东西    |
| 🔖  |         `:bookmark:`          |      发布/版本标签      |
| 🚨  |      `:rotating_light:`       |   移除 linter 警告    |
| 🚧  |       `:construction:`        |       工作进行时       |
| 💚  |        `:green_heart:`        |     修复 CI 构建      |
| ⬇️  |        `:arrow_down:`         |       依赖降级        |
| ⬆️  |         `:arrow_up:`          |       依赖升级        |
| 👷  |    `:construction_worker:`    |    添加 CI 构建系统     |
| 📈  | `:chart_with_upwards_trend:`  |     添加分析或跟踪代码     |
| 🔨  |          `:hammer:`           |       重构代码        |
|  ➖  |     `:heavy_minus_sign:`      |       移除依赖        |
|  ➕  |      `:heavy_plus_sign:`      |       添加依赖        |
| 🐳  |           `:whale:`           |   关于 Docker 的工作   |
| 🔧  |          `:wrench:`           |      更改配置文件       |
| 🌐  |   `:globe_with_meridians:`    |      国际化与本地化      |
| ✏️  |          `:pencil2:`          |       改正错字        |
| 💩  |          `:hankey:`           |    编写了需要改进的差代码    |
|  ⏪  |          `:rewind:`           |       恢复更改        |
| 🔀  | `:twisted_rightwards_arrows:` |       合并分支        |
| 📦  |          `:package:`          |    更新已编译的文件或包     |
| 👽  |           `:alien:`           | 由于外部 API 的更改而更新代码 |
| 🚚  |           `:truck:`           |     移动或重命名文件      |
| 📄  |      `:page_facing_up:`       |     添加或更新许可证      |
| 💥  |           `:boom:`            |      引入突破性变化      |
| 🍱  |           `:bento:`           |     添加或更新资源文件     |
| 👌  |          `:ok_hand:`          |    由于代码审查而更新代码    |
| ♿️  |        `:wheelchair:`         |       改善易达到       |
| 💡  |           `:bulb:`            |       记录源代码       |
| 🍻  |           `:beers:`           |       醉着写代码       |
| 💬  |      `:speech_balloon:`       |       更新文字        |
| 🗃️ |       `:card_file_box:`       |     执行数据库相关更改     |
| 🔉  |        `:loud_sound:`         |       添加日志        |
| 🔇  |           `:mute:`            |       移除日志        |
