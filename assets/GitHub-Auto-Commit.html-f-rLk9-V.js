import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as o,a}from"./app-DWXdHMII.js";const m={};function c(l,t){return e(),o("div",null,t[0]||(t[0]=[a('<h1 id="github-auto-commit" tabindex="-1"><a class="header-anchor" href="#github-auto-commit"><span>GitHub-Auto-Commit</span></a></h1><blockquote><p>一个用于 Git 自动 commit 的 VSCode 插件，它可以用来补充之前忘记提交 commit，帮助你把首页的绿色格子填满。</p></blockquote><h3 id="使用效果" tabindex="-1"><a class="header-anchor" href="#使用效果"><span>使用效果</span></a></h3><ol><li>使用本插件来控制 commit 次数.</li><li>如下图，你甚至可以规划一下<code>commit</code>次数，然后画出图形, 天空才是你的极限。</li></ol><figure><img src="https://fastly.jsdelivr.net/gh/xlc520/MyImage@main/MdImg/5245297-2c357937f3122b08.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="功能特性" tabindex="-1"><a class="header-anchor" href="#功能特性"><span>功能特性</span></a></h3><ol><li><strong>选择多个日期范围</strong>：一次操作即可提交不同日期<code>commit</code></li><li><strong>控制每个日期的 commit 次数</strong>: 可以用它来控制绿色格子的颜色，了解<a href="https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2FOBKoro1%2FautoCommit%2Fwiki%2F%E4%BD%BF%E7%94%A8%E9%A1%BB%E7%9F%A5%23commit%E6%AC%A1%E6%95%B0%E4%B8%8E%E9%A2%9C%E8%89%B2" target="_blank" rel="noopener noreferrer">commit 次数与颜色</a></li><li><strong>随机 commit 次数</strong>：随机 commit 次数让我们的提交看起来更加逼真。</li><li><strong>取消 commit</strong>: 用于在<code>commit</code>期间取消并回滚到未提交版本</li><li>超过 100 次提交，将强制考虑 10 秒是否要取消 commit。</li><li>插件成功运行后，将自动保存配置参数，无须每次都要一通操作。</li><li>提交完善的日志: 清晰的了解插件的运行情况</li><li>后台运行，不影响编码、浏览网页等。</li><li>运行超快，如下图 187 次 commit，20 秒搞定。</li><li>还有超多细节优化。</li></ol><h3 id="仓库地址" tabindex="-1"><a class="header-anchor" href="#仓库地址"><span>仓库地址</span></a></h3><p><a href="https://github.com/OBKoro1/autoCommit" target="_blank" rel="noopener noreferrer">https://github.com/OBKoro1/autoCommit</a></p><h4 id="自动-commit-演示" tabindex="-1"><a class="header-anchor" href="#自动-commit-演示"><span>自动 commit 演示</span></a></h4><figure><img src="https://fastly.jsdelivr.net/gh/xlc520/MyImage@main/MdImg/image-20220111141608365.png" alt="image-20220111141608365" tabindex="0" loading="lazy"><figcaption>image-20220111141608365</figcaption></figure><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><p>在 Vscode 扩展商店中搜索<code>Auto Commit</code>,点击安装即可。</p><h3 id="插件入口" tabindex="-1"><a class="header-anchor" href="#插件入口"><span>插件入口</span></a></h3><ol><li>使用快捷键打开 VSCode 的命令面板。 <ul><li><code>mac</code>: <code>command + p</code> window: <code>ctrl + p</code></li></ul></li><li>输入<code>&gt; auto commit</code>将会看到如下图所示的命令选项，然后用鼠标点击或者回车都可启动插件。 <ul><li>实际上可以输入下方选项的任何一段文字，都可以匹配到插件命令选项。</li></ul></li></ol><figure><img src="https://fastly.jsdelivr.net/gh/xlc520/MyImage@main/MdImg/5245297-832f45c19fdca38e.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>image</p><h3 id="使用须知" tabindex="-1"><a class="header-anchor" href="#使用须知"><span>使用须知</span></a></h3><h2 id="git-相关" tabindex="-1"><a class="header-anchor" href="#git-相关"><span>Git 相关</span></a></h2><p>需要有一个项目让插件提交 commit，可以使用公开项目但更推荐创建一个私有项目</p><h4 id="创建私有项目来提交-commit" tabindex="-1"><a class="header-anchor" href="#创建私有项目来提交-commit"><span>创建私有项目来提交 commit</span></a></h4><p><strong>私有项目的优势</strong>:</p><ol><li><p>隐藏项目，别人看不到。</p><p>PS： 公开的项目，如果后面要删除的话，会将 commit 也清除掉。</p></li><li><p>相对应的你的提交记录别人也看不到，只能看到类似下面这句话。</p><p><code>3 contributions in private repositories</code>: 提交了三个 commit 到私有仓库。</p></li><li><p><strong>要打开私有仓库贡献可见 ，别人才能看到私有仓库的 commit</strong> ,否则只能自己看到:</p></li></ol><figure><img src="https://fastly.jsdelivr.net/gh/xlc520/MyImage@main/MdImg/5245297-4b6984da51d815cd.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h4 id="确保能够正常提交" tabindex="-1"><a class="header-anchor" href="#确保能够正常提交"><span>确保能够正常提交</span></a></h4><ol><li><p>clone github 项目到本地。</p></li><li><p>确保能够正常提交。</p><p>先进行一次提交确保能够正常提交，防止因为 merge/release 等问题导致提交失败。</p></li></ol><h4 id="需要提交到master分支上" tabindex="-1"><a class="header-anchor" href="#需要提交到master分支上"><span><strong>需要提交到<code>master</code>分支上</strong></span></a></h4><p>如果提交到其他分支，提交记录不会显示在绿色的格子里面，合并分支之后 才会显示在绿色格子里面。</p><h4 id="提交以前和未来的-commit" tabindex="-1"><a class="header-anchor" href="#提交以前和未来的-commit"><span>提交以前和未来的 commit</span></a></h4><p>在 19 年 12 月我创建了一个测试账号：koroTest，经过测试：</p><ol><li>成功提交 17 年的 10 月份的 commit。</li><li>现在 2020 年 1 月份，成功提交了 2020 年 2 月份的 commit。</li><li>具体能提交最早和最晚的日期没有测试过，有兴趣的可以试试~</li></ol><h4 id="commit-次数与颜色" tabindex="-1"><a class="header-anchor" href="#commit-次数与颜色"><span>commit 次数与颜色</span></a></h4><p>我用这个工具测试一下了一个不同日期 commit1~30 次的颜色变化：</p><p>一天 1-7 次 commit 颜色为<code>#c6e48b</code> 一天 8-14 次 commit 颜色为<code>#7bc96f</code> 一天 15-20 次 commit 颜色为<code>#239a3b</code> 一天 21-63 次 commit 颜色为<code>#196127</code></p><p>后面的没有再测试了，应该最深的颜色就是<code>#196127</code>。</p><figure><img src="https://fastly.jsdelivr.net/gh/xlc520/MyImage@main/MdImg/5245297-73427fb0f18ccfa8.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>commit 颜色</p><h2 id="插件运行机制相关" tabindex="-1"><a class="header-anchor" href="#插件运行机制相关"><span>插件运行机制相关</span></a></h2><h4 id="随机-commit-次数" tabindex="-1"><a class="header-anchor" href="#随机-commit-次数"><span>随机 commit 次数</span></a></h4><p>默认开启，默认为 1~10 随机，时间范围内默认每个日期随机 commit 几次，如果单个时间段设置了<code>commit</code>次数将使用设置的次数。</p><p>PS： 最小值为 2，即每个日期随机 commi 1/2 次。</p><h4 id="默认-commit-次数" tabindex="-1"><a class="header-anchor" href="#默认-commit-次数"><span>默认 commit 次数</span></a></h4><p>关闭随机 commit 次数，就会使用默认 commit 次数，如果单个时间段设置了<code>commit</code>次数将使用设置的次数。</p><h4 id="设置多个时间段、每个时间段可以设置不同的提交次数" tabindex="-1"><a class="header-anchor" href="#设置多个时间段、每个时间段可以设置不同的提交次数"><span>设置多个时间段、每个时间段可以设置不同的提交次数</span></a></h4><p>如下图：</p><ol><li><strong>插件可以添加多次日期范围</strong>。</li><li><strong>每个日期范围都能控制具体的 commit 次数</strong>。</li><li>每个日期范围和 commit 次数通过 index 来配对。</li><li>同一个日期，后面出现的将会覆盖前面的：<code>commit</code>次数将会使用后面日期设置。</li><li>对应的日期范围，不设置 commit 次数，那么将会使用随机<code>commit</code>次数/默认<code>commit</code>次数。</li></ol><p>如下图所示的配置(日期覆盖情况)，最后的结果是：</p><p>12/01~12/06 使用默认 commit 次数，每天将会提交一次 12/07~12/08 每天提交三次 12/09~12/19 每天提交四次</p><figure><img src="https://fastly.jsdelivr.net/gh/xlc520/MyImage@main/MdImg/5245297-5d9be61e7da96d62.jpg" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>image</p><h4 id="commit-次数的最大值" tabindex="-1"><a class="header-anchor" href="#commit-次数的最大值"><span>commit 次数的最大值</span></a></h4><p>所有计数器的最大值设定为 30。</p><h4 id="默认修改项目根目录的commit-md文件" tabindex="-1"><a class="header-anchor" href="#默认修改项目根目录的commit-md文件"><span>默认修改项目根目录的<code>commit.md</code>文件</span></a></h4><p>插件将默认重写项目根目录的<code>commit.md</code>文件，如果文件不存在将会自动创建。</p><p>插件提供了一个配置项让你可以修改 commit 信息将要存储的文件。</p><h4 id="commit-信息" tabindex="-1"><a class="header-anchor" href="#commit-信息"><span>commit 信息</span></a></h4><p>每次提交需要有一个 commit 信息，插件默认是<code>autoCommit</code>, 你可以在界面修改它。</p><h4 id="运行日志" tabindex="-1"><a class="header-anchor" href="#运行日志"><span>运行日志</span></a></h4><p>插件运行日志，是倒序展示的，如果提交量比较大，支持在运行期间清空日志。</p><h3 id="开始-commit" tabindex="-1"><a class="header-anchor" href="#开始-commit"><span>开始 commit</span></a></h3><p>当配置好选项之后就可以<strong>点击开始 commit</strong>按钮来提交 commit。</p><p>建议一开始为了避免误操作，先测试一下：commit 量不要过大。</p><p>PS： 请在一个网络状况良好的地方运行，否则会导致<code>push</code>失败。</p><h3 id="取消-commit" tabindex="-1"><a class="header-anchor" href="#取消-commit"><span>取消 commit</span></a></h3><ol><li>该按钮是为了避免用户误操作，用于在插件 commit 期间终止自动<code>commit</code>。</li><li>一旦插件日志出现<code>提交中...</code>，就不可取消。</li><li>如果 commit 次数超过 100，插件将会强制等待 10S 让你考虑是否需要取消 commit。</li></ol><h4 id="保存配置和后台运行" tabindex="-1"><a class="header-anchor" href="#保存配置和后台运行"><span>保存配置和后台运行</span></a></h4><ol><li>插件在运行成功一次之后，会自动保存你的配置参数，在你下次通过命令打开插件的时候，会自动初始配置参数。</li><li>插件是可以挂在后台运行，不影响你编码、浏览网页之类的。</li></ol><h3 id="插件声明" tabindex="-1"><a class="header-anchor" href="#插件声明"><span>插件声明</span></a></h3><p><a href="%5Bhttps://github.com/OBKoro1/autoCommit%5D(https://github.com/OBKoro1/autoCommit)">autoCommit</a>是本人兴之所至创建的个人项目，仅用于学习交流，禁止任何人商用以及用于非法之途。</p><p>插件如构成侵权，请通过邮件联系我。</p><h3 id="头部注释插件" tabindex="-1"><a class="header-anchor" href="#头部注释插件"><span>头部注释插件</span></a></h3><p>本人还开源了另外一个 VSCode 插件:koroFileHeader，目前该插件已经有 1000+ Star 了，欢迎安装使用。</p><ol><li>它是用于生成文件头部注释，帮助我们养成良好的编码习惯，规范整个团队风格。</li><li>插件支持所有主流语言,功能强大，灵活方便，文档齐全，食用简单！</li></ol>',73)]))}const d=i(m,[["render",c],["__file","GitHub-Auto-Commit.html.vue"]]),s=JSON.parse('{"path":"/git/GitHub-Auto-Commit.html","title":"GitHub-Auto-Commit","lang":"zh-CN","frontmatter":{"icon":"page","title":"GitHub-Auto-Commit","author":"xlc520","date":"2022-01-10T00:00:00.000Z","category":"GitHub","tag":["GitHub"],"sticky":false,"description":"GitHub-Auto-Commit 一个用于 Git 自动 commit 的 VSCode 插件，它可以用来补充之前忘记提交 commit，帮助你把首页的绿色格子填满。 使用效果 使用本插件来控制 commit 次数. 如下图，你甚至可以规划一下commit次数，然后画出图形, 天空才是你的极限。 imgimg 功能特性 选择多个日期范围：一次操作即...","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/git/GitHub-Auto-Commit.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"GitHub-Auto-Commit"}],["meta",{"property":"og:description","content":"GitHub-Auto-Commit 一个用于 Git 自动 commit 的 VSCode 插件，它可以用来补充之前忘记提交 commit，帮助你把首页的绿色格子填满。 使用效果 使用本插件来控制 commit 次数. 如下图，你甚至可以规划一下commit次数，然后画出图形, 天空才是你的极限。 imgimg 功能特性 选择多个日期范围：一次操作即..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://fastly.jsdelivr.net/gh/xlc520/MyImage@main/MdImg/5245297-2c357937f3122b08.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-04-27T13:32:36.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"GitHub"}],["meta",{"property":"article:published_time","content":"2022-01-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-27T13:32:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"GitHub-Auto-Commit\\",\\"image\\":[\\"https://fastly.jsdelivr.net/gh/xlc520/MyImage@main/MdImg/5245297-2c357937f3122b08.jpg\\",\\"https://fastly.jsdelivr.net/gh/xlc520/MyImage@main/MdImg/image-20220111141608365.png\\",\\"https://fastly.jsdelivr.net/gh/xlc520/MyImage@main/MdImg/5245297-832f45c19fdca38e.jpg\\",\\"https://fastly.jsdelivr.net/gh/xlc520/MyImage@main/MdImg/5245297-4b6984da51d815cd.jpg\\",\\"https://fastly.jsdelivr.net/gh/xlc520/MyImage@main/MdImg/5245297-73427fb0f18ccfa8.jpg\\",\\"https://fastly.jsdelivr.net/gh/xlc520/MyImage@main/MdImg/5245297-5d9be61e7da96d62.jpg\\"],\\"datePublished\\":\\"2022-01-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-27T13:32:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":3,"title":"使用效果","slug":"使用效果","link":"#使用效果","children":[]},{"level":3,"title":"功能特性","slug":"功能特性","link":"#功能特性","children":[]},{"level":3,"title":"仓库地址","slug":"仓库地址","link":"#仓库地址","children":[]},{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"插件入口","slug":"插件入口","link":"#插件入口","children":[]},{"level":3,"title":"使用须知","slug":"使用须知","link":"#使用须知","children":[]},{"level":2,"title":"Git 相关","slug":"git-相关","link":"#git-相关","children":[]},{"level":2,"title":"插件运行机制相关","slug":"插件运行机制相关","link":"#插件运行机制相关","children":[{"level":3,"title":"开始 commit","slug":"开始-commit","link":"#开始-commit","children":[]},{"level":3,"title":"取消 commit","slug":"取消-commit","link":"#取消-commit","children":[]},{"level":3,"title":"插件声明","slug":"插件声明","link":"#插件声明","children":[]},{"level":3,"title":"头部注释插件","slug":"头部注释插件","link":"#头部注释插件","children":[]}]}],"git":{"createdTime":1647698494000,"updatedTime":1714224756000,"contributors":[{"name":"xlc520","email":"2215400217@qq.com","commits":2},{"name":"xlc","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":6.44,"words":1932},"filePathRelative":"git/GitHub-Auto-Commit.md","localizedDate":"2022年1月10日","excerpt":"\\n<blockquote>\\n<p>一个用于 Git 自动 commit 的 VSCode 插件，它可以用来补充之前忘记提交 commit，帮助你把首页的绿色格子填满。</p>\\n</blockquote>","autoDesc":true}');export{d as comp,s as data};