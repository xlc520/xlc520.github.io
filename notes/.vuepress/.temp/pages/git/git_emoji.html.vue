<template><h1 id="git丨commit规范-emoji表情" tabindex="-1"><a class="header-anchor" href="#git丨commit规范-emoji表情" aria-hidden="true">#</a> Git丨commit规范 &amp; emoji表情</h1>
<h2 id="一、文字规范" tabindex="-1"><a class="header-anchor" href="#一、文字规范" aria-hidden="true">#</a> 一、文字规范</h2>
<p>commit一共由五部分组成，具体内容如下。</p>
<p>（1）type
提交 commit 的类型，包括以下几种</p>
<p>feat: 新功能
fix: 修复问题
docs: 修改文档
style: 修改代码格式，不影响代码逻辑
refactor: 重构代码，理论上不影响现有功能
perf: 提升性能
test: 增加修改测试用例
chore: 修改工具相关（包括但不限于文档、代码生成等）
deps: 升级依赖</p>
<p>（2）scope
修改文件的范围（包括但不限于 doc, middleware, core, config, plugin）</p>
<p>（3）subject
用一句话清楚的描述这次提交做了什么</p>
<p>（4）body
补充 subject，适当增加原因、目的等相关因素，也可不写。</p>
<p>（5）footer
当有非兼容修改(Breaking Change)时必须在这里描述清楚
关联相关 issue，如 Closes #1, Closes #2, #3
如果功能点有新增或修改的，还需要关联文档 doc</p>
<h2 id="二、emoji规范" tabindex="-1"><a class="header-anchor" href="#二、emoji规范" aria-hidden="true">#</a> 二、emoji规范</h2>
<p>注：以下emoji表情在git提交时已经完全支持，哪怕下面的表情显示不完整也不用慌，可以直接在git-submit里使用。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>emoji		emoji代码	commit说明
🎨 (调色板)	:art:	改进代码结构/代码格式
⚡️ (闪电)	:zap:	提升性能
🐎 (赛马)	:racehorse:	提升性能
🔥 (火焰)	:fire:	移除代码或文件
🐛 (bug)	:bug:	修复 bug
🚑 (急救车)	:ambulance:	重要补丁
✨ (火花)	:sparkles:	引入新功能
📝 (铅笔)	:pencil:	撰写文档
🚀 (火箭)	:rocket:	部署功能
💄 (口红)	:lipstick:	更新 UI 和样式文件
🎉 (庆祝)	:tada:	初次提交
✅ (白色复选框)	:white_check_mark:	增加测试
🔒 (锁)	:lock:	修复安全问题
🍎 (苹果)	:apple:	修复 macOS 下的问题
🐧 (企鹅)	:penguin:	修复 Linux 下的问题
🏁 (旗帜)	:checked_flag:	修复 Windows 下的问题
🔖 (书签)	:bookmark:	发行/版本标签
🚨 (警车灯)	:rotating_light:	移除 linter 警告
🚧 (施工)	:construction:	工作进行中
💚 (绿心)	:green_heart:	修复 CI 构建问题
⬇️ (下降箭头)	:arrow_down:	降级依赖
⬆️ (上升箭头)	:arrow_up:	升级依赖
👷 (工人)	:construction_worker:	添加 CI 构建系统
📈 (上升趋势图)	:chart_with_upwards_trend:	添加分析或跟踪代码
🔨 (锤子)	:hammer:	重大重构
➖ (减号)	:heavy_minus_sign:	减少一个依赖
🐳 (鲸鱼)	:whale:	相关工作
➕ (加号)	:heavy_plus_sign:	增加一个依赖
🔧 (扳手)	:wrench:	修改配置文件
🌐 (地球)	:globe_with_meridians:	国际化与本地化
✏️ (铅笔)	:pencil2:	修复 typo
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><table>
<thead>
<tr>
<th style="text-align:center">样式</th>
<th style="text-align:center">代码</th>
<th style="text-align:center">含义</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">🎨</td>
<td style="text-align:center"><code>:art:</code></td>
<td style="text-align:center">改进代码结构/格式</td>
</tr>
<tr>
<td style="text-align:center">⚡️</td>
<td style="text-align:center"><code>:zap:</code></td>
<td style="text-align:center">提高性能</td>
</tr>
<tr>
<td style="text-align:center">🔥</td>
<td style="text-align:center"><code>:fire:</code></td>
<td style="text-align:center">移除代码或文件</td>
</tr>
<tr>
<td style="text-align:center">🐛</td>
<td style="text-align:center"><code>:bug:</code></td>
<td style="text-align:center">修复了Bug</td>
</tr>
<tr>
<td style="text-align:center">🚑</td>
<td style="text-align:center"><code>:ambulance:</code></td>
<td style="text-align:center">重要补丁</td>
</tr>
<tr>
<td style="text-align:center">✨</td>
<td style="text-align:center"><code>:sparkles:</code></td>
<td style="text-align:center">引入新功能</td>
</tr>
<tr>
<td style="text-align:center">📝</td>
<td style="text-align:center"><code>:memo:</code></td>
<td style="text-align:center">写文档</td>
</tr>
<tr>
<td style="text-align:center">🚀</td>
<td style="text-align:center"><code>:rocket:</code></td>
<td style="text-align:center">部署程</td>
</tr>
<tr>
<td style="text-align:center">💄</td>
<td style="text-align:center"><code>:lipstick:</code></td>
<td style="text-align:center">更新UI和样式文件</td>
</tr>
<tr>
<td style="text-align:center">🎉</td>
<td style="text-align:center"><code>:tada:</code></td>
<td style="text-align:center">初次提交</td>
</tr>
<tr>
<td style="text-align:center">✅</td>
<td style="text-align:center"><code>:white_check_mark:</code></td>
<td style="text-align:center">增加测试</td>
</tr>
<tr>
<td style="text-align:center">🔑</td>
<td style="text-align:center"><code>:lock:</code></td>
<td style="text-align:center">修复安全问题</td>
</tr>
<tr>
<td style="text-align:center">🍎</td>
<td style="text-align:center"><code>:apple:</code></td>
<td style="text-align:center">修复macOS上的东西</td>
</tr>
<tr>
<td style="text-align:center">🐧</td>
<td style="text-align:center"><code>:penguin:</code></td>
<td style="text-align:center">修复Linux上的东西</td>
</tr>
<tr>
<td style="text-align:center">🏁</td>
<td style="text-align:center"><code>:checkered_flag:</code></td>
<td style="text-align:center">修复Windows上的东西</td>
</tr>
<tr>
<td style="text-align:center">🤖️</td>
<td style="text-align:center"><code>:robot:</code></td>
<td style="text-align:center">修复Android上的东西</td>
</tr>
<tr>
<td style="text-align:center">🍏</td>
<td style="text-align:center"><code>:green_apple:</code></td>
<td style="text-align:center">修复iOS上的东西</td>
</tr>
<tr>
<td style="text-align:center">🔖</td>
<td style="text-align:center"><code>:bookmark:</code></td>
<td style="text-align:center">发布/版本标签</td>
</tr>
<tr>
<td style="text-align:center">🚨</td>
<td style="text-align:center"><code>:rotating_light:</code></td>
<td style="text-align:center">移除linter警告</td>
</tr>
<tr>
<td style="text-align:center">🚧</td>
<td style="text-align:center"><code>:construction:</code></td>
<td style="text-align:center">工作进行时</td>
</tr>
<tr>
<td style="text-align:center">💚</td>
<td style="text-align:center"><code>:green_heart:</code></td>
<td style="text-align:center">修复CI构建</td>
</tr>
<tr>
<td style="text-align:center">⬇️</td>
<td style="text-align:center"><code>:arrow_down:</code></td>
<td style="text-align:center">依赖降级</td>
</tr>
<tr>
<td style="text-align:center">⬆️</td>
<td style="text-align:center"><code>:arrow_up:</code></td>
<td style="text-align:center">依赖升级</td>
</tr>
<tr>
<td style="text-align:center">👷</td>
<td style="text-align:center"><code>:construction_worker:</code></td>
<td style="text-align:center">添加CI构建系统</td>
</tr>
<tr>
<td style="text-align:center">📈</td>
<td style="text-align:center"><code>:chart_with_upwards_trend:</code></td>
<td style="text-align:center">添加分析或跟踪代码</td>
</tr>
<tr>
<td style="text-align:center">🔨</td>
<td style="text-align:center"><code>:hammer:</code></td>
<td style="text-align:center">重构代码</td>
</tr>
<tr>
<td style="text-align:center">➖</td>
<td style="text-align:center"><code>:heavy_minus_sign:</code></td>
<td style="text-align:center">移除依赖</td>
</tr>
<tr>
<td style="text-align:center">➕</td>
<td style="text-align:center"><code>:heavy_plus_sign:</code></td>
<td style="text-align:center">添加依赖</td>
</tr>
<tr>
<td style="text-align:center">🐳</td>
<td style="text-align:center"><code>:whale:</code></td>
<td style="text-align:center">关于Docker的工作</td>
</tr>
<tr>
<td style="text-align:center">🔧</td>
<td style="text-align:center"><code>:wrench:</code></td>
<td style="text-align:center">更改配置文件</td>
</tr>
<tr>
<td style="text-align:center">🌐</td>
<td style="text-align:center"><code>:globe_with_meridians:</code></td>
<td style="text-align:center">国际化与本地化</td>
</tr>
<tr>
<td style="text-align:center">✏️</td>
<td style="text-align:center"><code>:pencil2:</code></td>
<td style="text-align:center">改正错字</td>
</tr>
<tr>
<td style="text-align:center">💩</td>
<td style="text-align:center"><code>:hankey:</code></td>
<td style="text-align:center">编写了需要改进的差代码</td>
</tr>
<tr>
<td style="text-align:center">⏪</td>
<td style="text-align:center"><code>:rewind:</code></td>
<td style="text-align:center">恢复更改</td>
</tr>
<tr>
<td style="text-align:center">🔀</td>
<td style="text-align:center"><code>:twisted_rightwards_arrows:</code></td>
<td style="text-align:center">合并分支</td>
</tr>
<tr>
<td style="text-align:center">📦</td>
<td style="text-align:center"><code>:package:</code></td>
<td style="text-align:center">更新已编译的文件或包</td>
</tr>
<tr>
<td style="text-align:center">👽</td>
<td style="text-align:center"><code>:alien:</code></td>
<td style="text-align:center">由于外部API的更改而更新代码</td>
</tr>
<tr>
<td style="text-align:center">🚚</td>
<td style="text-align:center"><code>:truck:</code></td>
<td style="text-align:center">移动或重命名文件</td>
</tr>
<tr>
<td style="text-align:center">📄</td>
<td style="text-align:center"><code>:page_facing_up:</code></td>
<td style="text-align:center">添加或更新许可证</td>
</tr>
<tr>
<td style="text-align:center">💥</td>
<td style="text-align:center"><code>:boom:</code></td>
<td style="text-align:center">引入突破性变化</td>
</tr>
<tr>
<td style="text-align:center">🍱</td>
<td style="text-align:center"><code>:bento:</code></td>
<td style="text-align:center">添加或更新资源文件</td>
</tr>
<tr>
<td style="text-align:center">👌</td>
<td style="text-align:center"><code>:ok_hand:</code></td>
<td style="text-align:center">由于代码审查而更新代码</td>
</tr>
<tr>
<td style="text-align:center">♿️</td>
<td style="text-align:center"><code>:wheelchair:</code></td>
<td style="text-align:center">改善易达到</td>
</tr>
<tr>
<td style="text-align:center">💡</td>
<td style="text-align:center"><code>:bulb:</code></td>
<td style="text-align:center">记录源代码</td>
</tr>
<tr>
<td style="text-align:center">🍻</td>
<td style="text-align:center"><code>:beers:</code></td>
<td style="text-align:center">醉着写代码</td>
</tr>
<tr>
<td style="text-align:center">💬</td>
<td style="text-align:center"><code>:speech_balloon:</code></td>
<td style="text-align:center">更新文字</td>
</tr>
<tr>
<td style="text-align:center">🗃️</td>
<td style="text-align:center"><code>:card_file_box:</code></td>
<td style="text-align:center">执行数据库相关更改</td>
</tr>
<tr>
<td style="text-align:center">🔉</td>
<td style="text-align:center"><code>:loud_sound:</code></td>
<td style="text-align:center">添加日志</td>
</tr>
<tr>
<td style="text-align:center">🔇</td>
<td style="text-align:center"><code>:mute:</code></td>
<td style="text-align:center">移除日志</td>
</tr>
</tbody>
</table>
</template>
