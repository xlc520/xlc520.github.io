import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as p,c as d,b as n,n as c,g as r,r as a,a as v}from"./app-DWXdHMII.js";const t={};function u(m,s){const e=a("VPBanner"),i=a("Share");return p(),d("div",null,[n(e,c(r({title:"Electron本地数据存储方案",content:"Electron本地数据存储方案",logo:null,color:"var(--banner-text)",background:"rgba(217, 244, 208, 0.5)",actions:[{text:"Electron本地数据存储方案",link:"/js/Electron本地数据存储方案"}]})),null,16),s[0]||(s[0]=v(`<h1 id="electron本地数据存储方案" tabindex="-1"><a class="header-anchor" href="#electron本地数据存储方案"><span>Electron本地数据存储方案</span></a></h1><p>使用本地文件进行持久化存储数据，一般不会把用户的个性化数据存储在应用程序的安装目录下，因为安装目录是不可靠的，应用程序升级或卸载重装都可能导致安装目录被清空，操作用户数据丢失。好在操作系统为应用程序提供了一个专有目录来存储应用程序的个性化数据： <code>C:\\Users\\username\\AppData\\Roaming</code></p><p>在 <code>electron</code> 中，可以使用 <code>app.getPath</code> 通过传入不同的参数来获取不同用途的路径，对应的参数说明如下：</p><ul><li><code>home</code> 用户的 home 文件夹（主目录）</li><li><code>appData</code> 每个用户的应用程序数据目录，默认情况下指向： <ul><li><code>%APPDATA%</code> Windows 中</li><li><code>$XDG_CONFIG_HOME</code> or <code>~/.config</code> Linux 中</li><li><code>~/Library/Application Support</code> macOS 中</li></ul></li><li><code>userData</code> 储存你应用程序配置文件的文件夹，默认是 <code>appData</code> 文件夹附加应用的名称 按照习惯用户存储的数据文件应该写在此目录，同时不建议在这写大文件，因为某些环境会备份此目录到云端存储。</li><li><code>sessionData</code> 此目录存储由 <code>Session</code> 生成的数据，例如 localStorage，cookies，磁盘缓存，下载的字典，网络 状态，开发者工具文件等。 默认为 <code>userData</code> 目录。 Chromium 可能在此处写入非常大的磁盘缓存，因此，如果您的应用不依赖于浏览器存储（如 localStorage 或 cookie）来保存用户数据，建议将此目录设置为其他位置，以避免污染 <code>userData</code> 目录。</li><li><code>temp</code> 临时文件夹</li><li><code>exe</code>当前的可执行文件</li><li><code>module</code> The <code>libchromiumcontent</code> 库</li><li><code>desktop</code> 当前用户的桌面文件夹</li><li><code>documents</code> 用户文档目录的路径</li><li><code>downloads</code> 用户下载目录的路径</li><li><code>music</code> 用户音乐目录的路径</li><li><code>pictures</code> 用户图片目录的路径</li><li><code>videos</code> 用户视频目录的路径</li><li><code>recent</code> 用户最近文件的目录 (仅限 Windows)。</li><li><code>logs</code>应用程序的日志文件夹</li><li><code>crashDumps</code> 崩溃转储文件存储的目录</li></ul><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>app.getPath(&#39;userData&#39;)</span></span>
<span class="line"><span># C:\\Users\\username\\AppData\\Roaming\\my-electron-app</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lowdb" tabindex="-1"><a class="header-anchor" href="#lowdb"><span><strong>Lowdb</strong></span></a></h2><p><code>lowdb</code> 是轻量级的本地 <code>json</code> 数据库</p><p>官网：https://github.com/typicode/lowdb</p><h3 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖"><span><strong>安装依赖</strong></span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pnpm i lowdb</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用"><span><strong>基本使用</strong></span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>  import { JSONFilePreset } from &#39;lowdb/node&#39;</span></span>
<span class="line"><span>  import { resolve } from &#39;path&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function resolvePath(fileName: string) {</span></span>
<span class="line"><span>    return resolve(app.getPath(&#39;userData&#39;), fileName)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  type User = {</span></span>
<span class="line"><span>    id: number</span></span>
<span class="line"><span>    username: string</span></span>
<span class="line"><span>    age: number</span></span>
<span class="line"><span>    userType: string</span></span>
<span class="line"><span>    email: string</span></span>
<span class="line"><span>    sort: number</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  type Data = {</span></span>
<span class="line"><span>    users: User[]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 基本使用</span></span>
<span class="line"><span>  async function main() {</span></span>
<span class="line"><span>    // 初始化默认数据</span></span>
<span class="line"><span>    const defaultData: Data = { users: [] }</span></span>
<span class="line"><span>    // 创建或读取数据</span></span>
<span class="line"><span>    const db = await JSONFilePreset(resolvePath(&#39;db.json&#39;), defaultData)</span></span>
<span class="line"><span>    // 创建 user 对象</span></span>
<span class="line"><span>    const user = { id: 1, username: &#39;kunkun&#39;, age: 18, userType: &#39;user&#39;, email: &#39;kunkun@qq.com&#39;, sort: 10 }</span></span>
<span class="line"><span>    // 写入数据</span></span>
<span class="line"><span>    ---</span></span>
<span class="line"><span>    db.data.users.push(user)</span></span>
<span class="line"><span>    await db.write()</span></span>
<span class="line"><span>    ---</span></span>
<span class="line"><span>    // 等价于 </span></span>
<span class="line"><span>    await db.update(({ users }) =&gt; {</span></span>
<span class="line"><span>      users.push(user)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  main()</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上述命令，则会在 <code>app.getPath(&#39;userData&#39;)</code> 目录下，生成 <code>db.json</code> 文件，内容如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;users&quot;: [</span></span>
<span class="line"><span>    {</span></span>
<span class="line"><span>      &quot;id&quot;: 1,</span></span>
<span class="line"><span>      &quot;username&quot;: &quot;kunkun&quot;,</span></span>
<span class="line"><span>      &quot;age&quot;: 18,</span></span>
<span class="line"><span>      &quot;userType&quot;: &quot;user&quot;,</span></span>
<span class="line"><span>      &quot;email&quot;: &quot;kunkun@qq.com&quot;,</span></span>
<span class="line"><span>      &quot;sort&quot;: 10</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扩展lowdb" tabindex="-1"><a class="header-anchor" href="#扩展lowdb"><span><strong>扩展Lowdb</strong></span></a></h3><p>使用 <code>lodash</code> 扩展 <code>lowdb</code></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pnpm i lodash</span></span>
<span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>  import { Low } from &#39;lowdb&#39;</span></span>
<span class="line"><span>  import lodash from &#39;lodash&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // lodash.chain：创建一个能够被链式调用的 lodash 对象</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  class LowWithLodash&lt;T&gt; extends Low&lt;T&gt; {</span></span>
<span class="line"><span>    chain: lodash.ExpChain&lt;this[&#39;data&#39;]&gt; = lodash.chain(this).get(&#39;data&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基本使用</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>  import { LowSync } from &#39;lowdb&#39;</span></span>
<span class="line"><span>  import { JSONFileSync, JSONFileSyncPreset } from &#39;lowdb/node&#39;</span></span>
<span class="line"><span>  import { resolve } from &#39;path&#39;</span></span>
<span class="line"><span>  import lodash from &#39;lodash&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function resolvePath(fileName: string) {</span></span>
<span class="line"><span>    return resolve(app.getPath(&#39;userData&#39;), fileName)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  type User = {</span></span>
<span class="line"><span>    id: number</span></span>
<span class="line"><span>    username: string</span></span>
<span class="line"><span>    age: number</span></span>
<span class="line"><span>    userType: string</span></span>
<span class="line"><span>    email: string</span></span>
<span class="line"><span>    sort: number</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  type Data = {</span></span>
<span class="line"><span>    users: User[]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 使用 lodash 扩展 lowdb</span></span>
<span class="line"><span>  class LowWithLodash&lt;T&gt; extends LowSync&lt;T&gt; {</span></span>
<span class="line"><span>    // lodash.chain：创建一个能够被链式调用的 lodash 对象</span></span>
<span class="line"><span>    chain: lodash.ExpChain&lt;this[&#39;data&#39;]&gt; = lodash.chain(this).get(&#39;data&#39;)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 初始化默认数据</span></span>
<span class="line"><span>  const defaultData: Data = { users: [] }</span></span>
<span class="line"><span>  // 创建一个适配器</span></span>
<span class="line"><span>  const adapter = new JSONFileSync&lt;Data&gt;(resolvePath(&#39;db.json&#39;))</span></span>
<span class="line"><span>  // 实例化</span></span>
<span class="line"><span>  const db = new LowWithLodash(adapter, defaultData)</span></span>
<span class="line"><span>  // 读取文件</span></span>
<span class="line"><span>  db.read()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 添加数据</span></span>
<span class="line"><span>  function addUser(user: Omit&lt;User, &#39;id&#39;&gt;) {</span></span>
<span class="line"><span>    let id = db.data.users.length + 1</span></span>
<span class="line"><span>    db.chain</span></span>
<span class="line"><span>    .get(&#39;users&#39;)</span></span>
<span class="line"><span>    .push({ id, ...user })</span></span>
<span class="line"><span>    .value()</span></span>
<span class="line"><span>    db.write()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  addUser({ username: &#39;kunkun&#39;, age: 18, userType: &#39;user&#39;, email: &#39;kunkun@qq.com&#39;, sort: 10 })</span></span>
<span class="line"><span>  addUser({ username: &#39;唔西迪西&#39;, age: 20, userType: &#39;admin&#39;, email: &#39;wuxidxi@qq.com&#39;, sort: 12 })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 删除数据</span></span>
<span class="line"><span>  function delUser(id: number) {</span></span>
<span class="line"><span>    db.chain.get(&#39;users&#39;).remove({ id: id }).value()</span></span>
<span class="line"><span>    db.write()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 清空数据</span></span>
<span class="line"><span>  function clearUser() {</span></span>
<span class="line"><span>    db.chain.set(&#39;users&#39;, []).value()</span></span>
<span class="line"><span>    db.write()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 修改数据</span></span>
<span class="line"><span>  function updateUser(id: number, user: Partial&lt;Omit&lt;User, &#39;id&#39;&gt;&gt;) {</span></span>
<span class="line"><span>    db.chain.get(&#39;users&#39;).find({ id: id }).assign(user).value()</span></span>
<span class="line"><span>  db.write()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  updateUser(1, { username: &#39;坤坤&#39;, userType: &#39;admin&#39; })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 查询数据</span></span>
<span class="line"><span>  // 根据 id 查询数据</span></span>
<span class="line"><span>  const user = db.chain.get(&#39;users&#39;).find({ id: 1 }).value()</span></span>
<span class="line"><span>  // 查询最后一条数据</span></span>
<span class="line"><span>  const lastUser = db.chain.get(&#39;users&#39;).last().value()</span></span>
<span class="line"><span>  // 查询 users 总数</span></span>
<span class="line"><span>  const total = db.chain.get(&#39;users&#39;).size().value()</span></span>
<span class="line"><span>  // 获取前 10 条数据</span></span>
<span class="line"><span>  const topTenList = db.chain.get(&#39;users&#39;).sortBy(&#39;sort&#39;).take(10).value()</span></span>
<span class="line"><span>  function getUser(id: number) {</span></span>
<span class="line"><span>    return db.chain.get(&#39;users&#39;).find({ id }).value()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 查询所有数据</span></span>
<span class="line"><span>  function getUserList() {</span></span>
<span class="line"><span>    return db.chain.get(&#39;users&#39;).value()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据加密" tabindex="-1"><a class="header-anchor" href="#数据加密"><span><strong>数据加密</strong></span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>  import { LowSync } from &#39;lowdb&#39;</span></span>
<span class="line"><span>  import { DataFileSync, JSONFileSync, JSONFileSyncPreset } from &#39;lowdb/node&#39;</span></span>
<span class="line"><span>  import { resolve } from &#39;path&#39;</span></span>
<span class="line"><span>  import lodash from &#39;lodash&#39;</span></span>
<span class="line"><span>  import crypto from &#39;crypto&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function resolvePath(fileName: string) {</span></span>
<span class="line"><span>    return resolve(app.getPath(&#39;userData&#39;), fileName)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  type User = {</span></span>
<span class="line"><span>    id: number</span></span>
<span class="line"><span>    username: string</span></span>
<span class="line"><span>    age: number</span></span>
<span class="line"><span>    userType: string</span></span>
<span class="line"><span>    email: string</span></span>
<span class="line"><span>    sort: number</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  type Data = {</span></span>
<span class="line"><span>    users: User[]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 算法</span></span>
<span class="line"><span>  const algorithm = &#39;aes-256-cbc&#39;</span></span>
<span class="line"><span>  // 秘钥</span></span>
<span class="line"><span>  const key = crypto.scryptSync(&#39;secret&#39;, &#39;salt&#39;, 32)</span></span>
<span class="line"><span>  // 初始化向量</span></span>
<span class="line"><span>  const iv = Buffer.alloc(16, 6)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 加密数据</span></span>
<span class="line"><span>  function encrypt(data: string) {</span></span>
<span class="line"><span>    // 创建加密对象</span></span>
<span class="line"><span>    const cipher = crypto.createCipheriv(algorithm, key, iv)</span></span>
<span class="line"><span>    // 对数据进行加密</span></span>
<span class="line"><span>    let encrypted = cipher.update(data, &#39;utf8&#39;)</span></span>
<span class="line"><span>    // 加密结束</span></span>
<span class="line"><span>    encrypted = Buffer.concat([encrypted, cipher.final()])</span></span>
<span class="line"><span>    // 生成 16 进制密文</span></span>
<span class="line"><span>    let result = encrypted.toString(&#39;hex&#39;)</span></span>
<span class="line"><span>    return result</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 解密</span></span>
<span class="line"><span>  function decrypt(text: string) {</span></span>
<span class="line"><span>    // 创建解密对象</span></span>
<span class="line"><span>    const decipher = crypto.createDecipheriv(algorithm, key, iv)</span></span>
<span class="line"><span>    // 进行解密</span></span>
<span class="line"><span>    let decrypted = decipher.update(text, &#39;hex&#39;)</span></span>
<span class="line"><span>    // 解密结束</span></span>
<span class="line"><span>    decrypted = Buffer.concat([decrypted, decipher.final()])</span></span>
<span class="line"><span>    let result = decrypted.toString()</span></span>
<span class="line"><span>    return result</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 默认数据</span></span>
<span class="line"><span>  const defaultData: Data = { users: [] }</span></span>
<span class="line"><span>  // 创建适配器</span></span>
<span class="line"><span>  const adapter = new DataFileSync&lt;Data&gt;(resolvePath(&#39;db.json&#39;), {</span></span>
<span class="line"><span>    parse: (data) =&gt; {</span></span>
<span class="line"><span>      return JSON.parse(decrypt(data))</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>    stringify: (data) =&gt; {</span></span>
<span class="line"><span>      return encrypt(JSON.stringify(data))</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const db = new LowSync(adapter, defaultData)</span></span>
<span class="line"><span>  db.read()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 添加数据，自动加密</span></span>
<span class="line"><span>  function addUser(user: Omit&lt;User, &#39;id&#39;&gt;) {</span></span>
<span class="line"><span>    let id = db.data.users.length + 1</span></span>
<span class="line"><span>    db.data.users.push({ id, ...user })</span></span>
<span class="line"><span>    db.write()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  addUser({ username: &#39;kunkun&#39;, age: 18, userType: &#39;user&#39;, email: &#39;kunkun@qq.com&#39;, sort: 10 })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 获取数据，自动解密</span></span>
<span class="line"><span>  function getUserById(id: number) {</span></span>
<span class="line"><span>    return db.data.users.find((item) =&gt; item.id === id)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  let user = getUser(1)</span></span>
<span class="line"><span>  console.log(user)</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="electron-store" tabindex="-1"><a class="header-anchor" href="#electron-store"><span><strong>Electron Store</strong></span></a></h2><p><code>electron-store</code> 可以为 <code>electron</code> 应用或模块提供简单的数据持久化 - 保存和加载用户设置、应用状态、缓存等功能。生成的数据会默认保存在 <code>app.getPath(&#39;userData&#39;)</code> 名为 <code>config.json</code> 文件下：</p><p>官网：https://github.com/sindresorhus/electron-store</p><h3 id="安装依赖-1" tabindex="-1"><a class="header-anchor" href="#安装依赖-1"><span><strong>安装依赖</strong></span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pnpm i electron-store</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="配置环境" tabindex="-1"><a class="header-anchor" href="#配置环境"><span><strong>配置环境</strong></span></a></h3><p>若要在渲染进程中使用 <code>electron-store</code>，需要进行如下配置：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>background.ts</span></span>
<span class="line"><span>import Store from&#39;electron-store&#39;</span></span>
<span class="line"><span>// 初始化</span></span>
<span class="line"><span>Store.initRenderer()</span></span>
<span class="line"><span>vite.config.ts</span></span>
<span class="line"><span>import { defineConfig } from&#39;vite&#39;</span></span>
<span class="line"><span>import vue from&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span>import electron from&#39;vite-plugin-electron&#39;</span></span>
<span class="line"><span>import renderer from&#39;vite-plugin-electron-renderer&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// https://vitejs.dev/config/</span></span>
<span class="line"><span>exportdefault defineConfig({</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    vue(),</span></span>
<span class="line"><span>    electron(</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        entry: &#39;src/background.ts&#39;,</span></span>
<span class="line"><span>        onstart: (options) =&gt; {</span></span>
<span class="line"><span>          options.startup()</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      }  </span></span>
<span class="line"><span>    ),</span></span>
<span class="line"><span>    // 在渲染进程中使用 electron api</span></span>
<span class="line"><span>    renderer({</span></span>
<span class="line"><span>      resolve: {</span></span>
<span class="line"><span>        &#39;electron-store&#39;: { type: &#39;esm&#39; }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本使用-1" tabindex="-1"><a class="header-anchor" href="#基本使用-1"><span><strong>基本使用</strong></span></a></h3><p>经过上述操作配置，就可以在渲染进程中愉快的使用 <code>electron-store</code> 啦</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>  import Store from &#39;electron-store&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const store = new Store()</span></span>
<span class="line"><span>  store.set(&#39;name&#39;, &#39;kunkun&#39;)</span></span>
<span class="line"><span>  console.log(store.get(&#39;name&#39;))</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>经过上述测试，就会在 <code>app.getPath(&#39;userData&#39;)</code> 路径下，生成一个 <code>config.json</code> 的文件，内容如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>config.json</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;name&quot;: &quot;kunkun&quot;</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他操作</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>  import Store from &#39;electron-store&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  type User = {</span></span>
<span class="line"><span>    id: number</span></span>
<span class="line"><span>    username: string</span></span>
<span class="line"><span>    age: number</span></span>
<span class="line"><span>    userType: string</span></span>
<span class="line"><span>    email: string</span></span>
<span class="line"><span>    sort: number</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  type Data = {</span></span>
<span class="line"><span>    users: User[]</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 生成的路径为：app.getPath(&#39;userData&#39;)/db/db.json</span></span>
<span class="line"><span>  const store = new Store&lt;Data&gt;({</span></span>
<span class="line"><span>    // 文件夹名称</span></span>
<span class="line"><span>    cwd: &#39;db&#39;,</span></span>
<span class="line"><span>    // 文件名</span></span>
<span class="line"><span>    name: &#39;db&#39;,</span></span>
<span class="line"><span>    // 默认值</span></span>
<span class="line"><span>    defaults: { users: [] }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 获取值</span></span>
<span class="line"><span>  let users = store.get(&#39;users&#39;)</span></span>
<span class="line"><span>  let username = store.get(&#39;users[0].username&#39;)</span></span>
<span class="line"><span>  let data = store.store</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 设置值</span></span>
<span class="line"><span>  store.set(&#39;users&#39;, [...users, { id: users.length + 1, username: &#39;kunkun&#39;, age: 18, userType: &#39;user&#39;, email: &#39;kunkun@qq.com&#39;, sort: 10 }])</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 在编辑器中打开存储文件</span></span>
<span class="line"><span>  store.openInEditor()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 存储文件的路径</span></span>
<span class="line"><span>  let path = store.path</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 删除 users 字段</span></span>
<span class="line"><span>  store.delete(&#39;users&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 删除所有值，重置为默认值</span></span>
<span class="line"><span>  store.clear()</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据加密-1" tabindex="-1"><a class="header-anchor" href="#数据加密-1"><span><strong>数据加密</strong></span></a></h3><p>在实例化 <code>store</code> 时，添加 <code>encryptionKey</code> 属性并指定秘钥，<code>electron-store</code> 将使用 <code>aes-256-cbc</code> 加密算法对存储区进行加密</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>const store = new Store&lt;Data&gt;({</span></span>
<span class="line"><span>  // 文件夹名称</span></span>
<span class="line"><span>  cwd: &#39;db&#39;,</span></span>
<span class="line"><span>  // 文件名</span></span>
<span class="line"><span>  name: &#39;db&#39;,</span></span>
<span class="line"><span>  // 默认值</span></span>
<span class="line"><span>  defaults: { users: [] },</span></span>
<span class="line"><span>  // 数据加密</span></span>
<span class="line"><span>  encryptionKey: &#39;secret&#39;</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sqlite" tabindex="-1"><a class="header-anchor" href="#sqlite"><span><strong>Sqlite</strong></span></a></h2><p><code>SQLite</code> 是一个轻型的、嵌入式的 <code>SQL</code> 数据库引擎，其特点是自给自足、无服务器零配置、支持事务。它是在世界上部署最广泛的SQL数据库引擎。</p><p>官网：https://github.com/TryGhost/node-sqlite3</p><h3 id="安装依赖-2" tabindex="-1"><a class="header-anchor" href="#安装依赖-2"><span><strong>安装依赖</strong></span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pnpm i sqlite3</span></span>
<span class="line"><span>pnpm i fs-extra</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置环境-1" tabindex="-1"><a class="header-anchor" href="#配置环境-1"><span><strong>配置环境</strong></span></a></h3><p>在渲染进程中使用 <code>sqlite3</code>，需要在 <code>vite.config.ts</code> 中进行如下配置：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>vite.config.ts</span></span>
<span class="line"><span>import { defineConfig } from&#39;vite&#39;</span></span>
<span class="line"><span>import vue from&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span>import electron from&#39;vite-plugin-electron&#39;</span></span>
<span class="line"><span>import renderer from&#39;vite-plugin-electron-renderer&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// https://vitejs.dev/config/</span></span>
<span class="line"><span>exportdefault defineConfig({</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    vue(),</span></span>
<span class="line"><span>    electron(</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        entry: &#39;src/background.ts&#39;,</span></span>
<span class="line"><span>        onstart: (options) =&gt; {</span></span>
<span class="line"><span>          options.startup()</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      }  </span></span>
<span class="line"><span>    ),</span></span>
<span class="line"><span>    // 在渲染进程中使用 electron api</span></span>
<span class="line"><span>    renderer({</span></span>
<span class="line"><span>      resolve: {</span></span>
<span class="line"><span>        &#39;electron-store&#39;: { type: &#39;esm&#39; },</span></span>
<span class="line"><span>        sqlite3: { type: &#39;cjs&#39; },</span></span>
<span class="line"><span>        &#39;fs-extra&#39;: { type: &#39;esm&#39; }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本使用-2" tabindex="-1"><a class="header-anchor" href="#基本使用-2"><span><strong>基本使用</strong></span></a></h3><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>  import * as sqlite3 from &#39;sqlite3&#39;</span></span>
<span class="line"><span>  import { resolve } from &#39;path&#39;</span></span>
<span class="line"><span>  import { app } from &#39;@electron/remote&#39;</span></span>
<span class="line"><span>  import fs from &#39;fs-extra&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function resolvePath(dir: string, fileName: string) {</span></span>
<span class="line"><span>    return resolve(app.getPath(&#39;userData&#39;), dir, fileName)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 连接数据库</span></span>
<span class="line"><span>  // 执行 verbose 函数，便于调试代码，代码出错，会定位到具体的代码</span></span>
<span class="line"><span>  const sqlite = sqlite3.verbose()</span></span>
<span class="line"><span>  // 指定文件路径</span></span>
<span class="line"><span>  let dbPath = resolvePath(&#39;db&#39;,&#39;db.db&#39;)</span></span>
<span class="line"><span>  // 指定文件不存在则创建，存在就不进行操作</span></span>
<span class="line"><span>  fs.ensureFileSync(dbPath)</span></span>
<span class="line"><span>  // 初始化数据库，指定数据库存储路径，指定数据库操作模式为速写模式</span></span>
<span class="line"><span>  const db = new sqlite.Database(dbPath, sqlite.OPEN_READWRITE, (err) =&gt; {</span></span>
<span class="line"><span>    if (err) return console.log(err)</span></span>
<span class="line"><span>    console.log(&#39;数据库连接成功&#39;)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // db.run(sql,params?,callback?)</span></span>
<span class="line"><span>  // 执行除了查询之外的 建表、插入、更新及删除的 sql 语句</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 创建 user 表</span></span>
<span class="line"><span>  db.run(</span></span>
<span class="line"><span>    \`CREATE TABLE IF NOT EXISTS user (</span></span>
<span class="line"><span>      id 				INTEGER 			NOT NULL		PRIMARY KEY AUTOINCREMENT,</span></span>
<span class="line"><span>      username 	CHAR ( 45 ) 	NOT NULL,</span></span>
<span class="line"><span>      age       INT						NOT NULL,</span></span>
<span class="line"><span>      userType 	CHAR ( 45 ) 	NOT NULL 		DEFAULT &#39;user&#39;,</span></span>
<span class="line"><span>      email     CHAR ( 45 )		NOT NULL  	UNIQUE,</span></span>
<span class="line"><span>      sort 		 	INT 					NOT NULL 		DEFAULT  10</span></span>
<span class="line"><span>	  )\`,</span></span>
<span class="line"><span>    (err) =&gt; {</span></span>
<span class="line"><span>      if (err) return console.log(err)</span></span>
<span class="line"><span>      console.log(&#39;创建 user 表成功&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上述操作，就会在 <code>app.getPath(&#39;userData&#39;)/db</code> 目录下，生成一个名为 <code>db.db</code> 的文件，使用 <code>Navicat</code> 软件与该文件建立连接，就会看到刚刚建立的表，如下：</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728611720648-0.webp" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>继续执行其他相关操作</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>  import * as sqlite3 from &#39;sqlite3&#39;</span></span>
<span class="line"><span>  import { resolve } from &#39;path&#39;</span></span>
<span class="line"><span>  import { app } from &#39;@electron/remote&#39;</span></span>
<span class="line"><span>  import fs from &#39;fs-extra&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function resolvePath(dir: string, fileName: string) {</span></span>
<span class="line"><span>    return resolve(app.getPath(&#39;userData&#39;), dir, fileName)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 连接数据库</span></span>
<span class="line"><span>  // 执行 verbose 函数，便于调试代码，代码出错，会定位到具体的代码</span></span>
<span class="line"><span>  const sqlite = sqlite3.verbose()</span></span>
<span class="line"><span>   // 指定文件路径</span></span>
<span class="line"><span>  let dbPath = resolvePath(&#39;db&#39;,&#39;db.db&#39;)</span></span>
<span class="line"><span>  // 指定文件不存在则创建，存在就不进行操作</span></span>
<span class="line"><span>  fs.ensureFileSync(dbPath)</span></span>
<span class="line"><span>  // 初始化数据库，指定数据库存储路径，指定数据库操作模式为速写模式</span></span>
<span class="line"><span>  const db = new sqlite.Database(dbPath, sqlite.OPEN_READWRITE, (err) =&gt; {</span></span>
<span class="line"><span>    if (err) return console.log(err)</span></span>
<span class="line"><span>    console.log(&#39;数据库连接成功&#39;)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // db.run(sql,params?,callback?)</span></span>
<span class="line"><span>  // 执行除了查询之外的 建表、插入、更新及删除的 sql 语句</span></span>
<span class="line"><span>  // 创建表格</span></span>
<span class="line"><span>  db.run(</span></span>
<span class="line"><span>    \`CREATE TABLE IF NOT EXISTS user (</span></span>
<span class="line"><span>       id 				INTEGER 			NOT NULL		PRIMARY KEY AUTOINCREMENT,</span></span>
<span class="line"><span>       username 	CHAR ( 45 ) 	NOT NULL,</span></span>
<span class="line"><span>       age        INT						NOT NULL,</span></span>
<span class="line"><span>       userType 	CHAR ( 45 ) 	NOT NULL 		DEFAULT &#39;user&#39;,</span></span>
<span class="line"><span>       email      CHAR ( 45 )		NOT NULL  	UNIQUE,</span></span>
<span class="line"><span>       sort 		 	INT 					NOT NULL 		DEFAULT 10</span></span>
<span class="line"><span>    )\`,</span></span>
<span class="line"><span>    (err) =&gt; {</span></span>
<span class="line"><span>      if (err) return console.log(err)</span></span>
<span class="line"><span>       console.log(&#39;创建 user 表成功&#39;)</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 添加数据</span></span>
<span class="line"><span>  db.run(\`INSERT INTO user VALUES ( NULL, &#39;kunkun&#39;, 18, &#39;user&#39;, &#39;kunkun@qq.com&#39;, 10 )\`, (err) =&gt; {</span></span>
<span class="line"><span>    if (err) return console.log(err)</span></span>
<span class="line"><span>    console.log(&#39;添加数据成功&#39;)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  db.run(\`INSERT INTO user VALUES ( NULL, ?, ?, ? ,? ,? )\`, [&#39;唔西迪西&#39;, 20, &#39;user&#39;, &#39;wuxidxi@qq.com&#39;, 12], (err) =&gt; {</span></span>
<span class="line"><span>    if (err) return console.log(err)</span></span>
<span class="line"><span>    console.log(&#39;添加数据成功&#39;)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 修改数据</span></span>
<span class="line"><span>  db.run(\`UPDATE user SET username = &#39;坤坤&#39;, userType = &#39;admin&#39; WHERE id = 1\`, (err) =&gt; {</span></span>
<span class="line"><span>    if (err) return console.log(err)</span></span>
<span class="line"><span>    console.log(&#39;修改数据成功&#39;)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  db.run(\`UPDATE user SET username = ?, userType = ? WHERE id = ?\`, [&#39;玛卡巴卡&#39;, &#39;admin&#39;, 2], (err) =&gt; {</span></span>
<span class="line"><span>    if (err) return console.log(err)</span></span>
<span class="line"><span>    console.log(&#39;修改数据成功&#39;)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 删除数据</span></span>
<span class="line"><span>  db.run(\`DELETE FROM user WHERE id = 2\`, (err) =&gt; {</span></span>
<span class="line"><span>    if (err) return console.log(err)</span></span>
<span class="line"><span>    console.log(&#39;删除数据成功&#39;)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  db.run(\`DELETE FROM user WHERE id = ?\`, [2], (err) =&gt; {</span></span>
<span class="line"><span>    if (err) return console.log(err)</span></span>
<span class="line"><span>    console.log(&#39;删除数据成功&#39;)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 查询数据</span></span>
<span class="line"><span>  db.all(\`SELECT * FROM user\`, (err, rows) =&gt; {</span></span>
<span class="line"><span>    if (err) return console.log(err)</span></span>
<span class="line"><span>    console.log(rows)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 遍历查询出来的结果</span></span>
<span class="line"><span>  db.each(\`SELECT * FROM user\`, (err, row) =&gt; {</span></span>
<span class="line"><span>    if (err) return console.log(err)</span></span>
<span class="line"><span>    console.log(row)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 关闭数据库连接</span></span>
<span class="line"><span>  db.close((err) =&gt; {</span></span>
<span class="line"><span>    if (err) return console.log(err)</span></span>
<span class="line"><span>    console.log(&#39;关闭数据库连接&#39;)</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 直接执行上述操作，执行顺序会有差异，使用 db.serialize 即可按照指定顺序执行 sql 语句</span></span>
<span class="line"><span>  db.serialize(() =&gt; {</span></span>
<span class="line"><span>    // 建表</span></span>
<span class="line"><span>    db.run(\`CREATE TABLE IF NOT EXISTS user (</span></span>
<span class="line"><span>       id 				INTEGER 			NOT NULL		PRIMARY KEY AUTOINCREMENT,</span></span>
<span class="line"><span>       username 	CHAR ( 45 ) 	NOT NULL,</span></span>
<span class="line"><span>       age        INT						NOT NULL,</span></span>
<span class="line"><span>       userType 	CHAR ( 45 ) 	NOT NULL 		DEFAULT &#39;user&#39;,</span></span>
<span class="line"><span>       email      CHAR ( 45 )		NOT NULL  	UNIQUE,</span></span>
<span class="line"><span>       sort 		 	INT 					NOT NULL 		DEFAULT 10</span></span>
<span class="line"><span>    )\`)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 添加数据</span></span>
<span class="line"><span>    db.run(\`INSERT INTO user VALUES ( NULL, &#39;kunkun&#39;, 18, &#39;user&#39;, &#39;kunkun@qq.com&#39;, 10 )\`, (err) =&gt; {</span></span>
<span class="line"><span>      if (err) return console.log(err)</span></span>
<span class="line"><span>      console.log(&#39;添加数据成功&#39;)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    db.run(\`INSERT INTO user VALUES ( NULL, ?, ?, ? ,? ,? )\`, [&#39;唔西迪西&#39;, 20, &#39;user&#39;, &#39;wuxidxi@qq.com&#39;, 12], (err) =&gt; {</span></span>
<span class="line"><span>      if (err) return console.log(err)</span></span>
<span class="line"><span>      console.log(&#39;添加数据成功&#39;)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 修改数据</span></span>
<span class="line"><span>    db.run(\`UPDATE user SET username = &#39;坤坤&#39;, userType = &#39;admin&#39; WHERE id = 1\`, (err) =&gt; {</span></span>
<span class="line"><span>      if (err) return console.log(err)</span></span>
<span class="line"><span>      console.log(&#39;修改数据成功&#39;)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 删除数据</span></span>
<span class="line"><span>    db.run(\`DELETE FROM user WHERE id = 2\`, (err) =&gt; {</span></span>
<span class="line"><span>      if (err) return console.log(err)</span></span>
<span class="line"><span>      console.log(&#39;删除数据成功&#39;)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 查询数据</span></span>
<span class="line"><span>    db.all(\`SELECT * FROM user\`, (err, rows) =&gt; {</span></span>
<span class="line"><span>      if (err) return console.log(err)</span></span>
<span class="line"><span>      console.log(rows)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // 关闭数据库连接</span></span>
<span class="line"><span>    db.close((err) =&gt; {</span></span>
<span class="line"><span>      if (err) return console.log(err)</span></span>
<span class="line"><span>      console.log(&#39;关闭数据库连接&#39;)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简易封装</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>  import * as sqlite3 from &#39;sqlite3&#39;</span></span>
<span class="line"><span>  import { resolve } from &#39;path&#39;</span></span>
<span class="line"><span>  import { app } from &#39;@electron/remote&#39;</span></span>
<span class="line"><span>  import fs from &#39;fs-extra&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function resolvePath(dir: string, fileName: string) {</span></span>
<span class="line"><span>    return resolve(app.getPath(&#39;userData&#39;), dir, fileName)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  type User = {</span></span>
<span class="line"><span>    id: number</span></span>
<span class="line"><span>    username: string</span></span>
<span class="line"><span>    age: number</span></span>
<span class="line"><span>    userType: string</span></span>
<span class="line"><span>    email: string</span></span>
<span class="line"><span>    sort: number</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 连接数据库</span></span>
<span class="line"><span>  // 执行 verbose 函数，便于调试代码，代码出错，会定位到具体的代码</span></span>
<span class="line"><span>  const sqlite = sqlite3.verbose()</span></span>
<span class="line"><span>  // 指定文件路径</span></span>
<span class="line"><span>  let dbPath = resolvePath(&#39;db&#39;,&#39;db.db&#39;)</span></span>
<span class="line"><span>  // 指定文件不存在则创建，存在就不进行操作</span></span>
<span class="line"><span>  fs.ensureFileSync(dbPath)</span></span>
<span class="line"><span>  // 初始化数据库，指定数据库存储路径，指定数据库操作模式为速写模式</span></span>
<span class="line"><span>  const db = new sqlite.Database(dbPath, sqlite.OPEN_READWRITE, async (err) =&gt; {</span></span>
<span class="line"><span>    if (err) return console.log(err)</span></span>
<span class="line"><span>    await initUserTable()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    await addUser({ username: &#39;kunkun&#39;, age: 18, userType: &#39;user&#39;, email: &#39;kunkun@qq.com&#39;, sort: 10 })</span></span>
<span class="line"><span>    await addUser({ username: &#39;唔西迪西&#39;, age: 20, userType: &#39;admin&#39;, email: &#39;wuxidxi@qq.com&#39;, sort: 12 })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    await delUser(2)</span></span>
<span class="line"><span>    await updateUser(1, { username: &#39;坤坤&#39;, userType: &#39;admin&#39; })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let user = await getUser(1)</span></span>
<span class="line"><span>    let users = await getUserList()</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // // 创建 user 表</span></span>
<span class="line"><span>  function initUserTable() {</span></span>
<span class="line"><span>    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>      db.run(</span></span>
<span class="line"><span>        \`CREATE TABLE IF NOT EXISTS user (</span></span>
<span class="line"><span>         id 				INTEGER 			NOT NULL		PRIMARY KEY AUTOINCREMENT,</span></span>
<span class="line"><span>         username 	CHAR ( 45 ) 	NOT NULL,</span></span>
<span class="line"><span>         age        INT						NOT NULL,</span></span>
<span class="line"><span>         userType 	CHAR ( 45 ) 	NOT NULL 		DEFAULT &#39;user&#39;,</span></span>
<span class="line"><span>         email      CHAR ( 45 )		NOT NULL  	UNIQUE,</span></span>
<span class="line"><span>         sort 		 	INT 					NOT NULL 		DEFAULT 10</span></span>
<span class="line"><span>       )\`,</span></span>
<span class="line"><span>        (err) =&gt; {</span></span>
<span class="line"><span>          if (err) return reject(err)</span></span>
<span class="line"><span>          resolve(&#39;创建 user 表成功&#39;)</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      )</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 添加数据</span></span>
<span class="line"><span>  function addUser(user: Omit&lt;User, &#39;id&#39;&gt;) {</span></span>
<span class="line"><span>    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>      let { username, age, userType, sort, email } = user</span></span>
<span class="line"><span>      /* db.run(\`INSERT INTO user VALUES ( NULL, &#39;\${username}&#39;,&#39;\${age}&#39;, &#39;\${userType}&#39;, &#39;\${email}&#39;, &#39;\${sort}&#39; )\`, (err) =&gt; {</span></span>
<span class="line"><span>         if (err) return reject(err)</span></span>
<span class="line"><span>         resolve(&#39;添加数据成功&#39;)</span></span>
<span class="line"><span>       }) */</span></span>
<span class="line"><span>      db.run(\`INSERT INTO user VALUES ( NULL, ?, ?, ?, ? ,? )\`, [username, age, userType, email, sort], (err) =&gt; {</span></span>
<span class="line"><span>        if (err) return reject(err)</span></span>
<span class="line"><span>        resolve(&#39;添加数据成功&#39;)</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 删除数据</span></span>
<span class="line"><span>  function delUser(id: number) {</span></span>
<span class="line"><span>    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>      db.run(\`DELETE FROM user WHERE id = \${id}\`, (err) =&gt; {</span></span>
<span class="line"><span>        if (err) return reject(err)</span></span>
<span class="line"><span>        resolve(&#39;删除数据成功&#39;)</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 修改数据</span></span>
<span class="line"><span>  function updateUser(id: number, user: Partial&lt;Omit&lt;User, &#39;id&#39;&gt;&gt;) {</span></span>
<span class="line"><span>    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>      let arr = []</span></span>
<span class="line"><span>      for (let key in user) {</span></span>
<span class="line"><span>        let value = \`\${key} = &#39;\${user[key as keyof Omit&lt;User, &#39;id&#39;&gt;]}&#39;\`</span></span>
<span class="line"><span>        arr.push(value)</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      if (!arr.length) return reject(&#39;没有要修改的数据&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>      db.run(\`UPDATE user SET \${arr.join(&#39;,&#39;)} WHERE id = \${id}\`, (err) =&gt; {</span></span>
<span class="line"><span>        if (err) return console.log(err)</span></span>
<span class="line"><span>        resolve(&#39;修改数据成功&#39;)</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 获取数据</span></span>
<span class="line"><span>  function getUser(id: number): Promise&lt;User&gt; {</span></span>
<span class="line"><span>    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>    db.get(\`SELECT * FROM user WHERE id = \${id}\`, (err: Error, row: User) =&gt; {</span></span>
<span class="line"><span>      if (err) return reject(err)</span></span>
<span class="line"><span>      resolve(row)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 获取数据列表</span></span>
<span class="line"><span>  function getUserList(): Promise&lt;User[]&gt; {</span></span>
<span class="line"><span>    return new Promise((resolve, reject) =&gt; {</span></span>
<span class="line"><span>      db.all(\`SELECT * FROM user\`, (err: Error, rows: User[]) =&gt; {</span></span>
<span class="line"><span>        if (err) return reject(err)</span></span>
<span class="line"><span>        resolve(rows)</span></span>
<span class="line"><span>      })</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="prisma" tabindex="-1"><a class="header-anchor" href="#prisma"><span><strong>Prisma</strong></span></a></h3><p><code>Prisma</code> 是一个现代的数据库工具包，其中的 <code>Prisma ORM</code>（Object-Relational Mapping，对象关系映射）框架具有以下特点和优势：</p><ul><li>强大的数据库操作能力</li><li>跨数据库支持（ PostgreSQL、MySQL、SQLite 和 MongoDB ）</li><li>自动生成数据库迁移脚本</li><li>类型安全</li><li>活跃的社区和文档</li></ul><p>官网：https://prisma.nodejs.cn</p><h4 id="安装依赖-3" tabindex="-1"><a class="header-anchor" href="#安装依赖-3"><span><strong>安装依赖</strong></span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pnpm i prisma</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="创建模型" tabindex="-1"><a class="header-anchor" href="#创建模型"><span><strong>创建模型</strong></span></a></h4><p>使用 <code>Prisma CLI</code> 的 <code>init</code> 命令设置 <code>Prisma ORM</code></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>npx prisma init --datasource-provider sqlite</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>执行上述命令后，将会在项目根目录上创建一个带有 <code>schema.prisma</code> 文件的新 <code>prisma</code> 目录，并将 <code>SQLite</code> 配置为你的数据库，并且还会多个一个 <code>.env</code> 文件，内容如下：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>prisma/schema.prisma</span></span>
<span class="line"><span>// This is your Prisma schema file,</span></span>
<span class="line"><span>// learn more about it in the docs: https://pris.ly/d/prisma-schema</span></span>
<span class="line"><span></span></span>
<span class="line"><span>generator client {</span></span>
<span class="line"><span>  provider = &quot;prisma-client-js&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>datasource db {</span></span>
<span class="line"><span>  provider = &quot;sqlite&quot;</span></span>
<span class="line"><span>  url      = env(&quot;DATABASE_URL&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.env</span></span>
<span class="line"><span># This was inserted by \`prisma init\`:</span></span>
<span class="line"><span># Environment variables declared in this file are automatically made available to Prisma.</span></span>
<span class="line"><span># See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.</span></span>
<span class="line"><span># See the documentation for all the connection string options: https://pris.ly/d/connection-strings</span></span>
<span class="line"><span></span></span>
<span class="line"><span>DATABASE_URL=&quot;file:./dev.db&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对数据进行建模，在项目根目录 <code>prisma/schema.prisma</code> 文件下，建立如下模型</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>prisma/schema.prisma</span></span>
<span class="line"><span>// This is your Prisma schema file,</span></span>
<span class="line"><span>// learn more about it in the docs: https://pris.ly/d/prisma-schema</span></span>
<span class="line"><span></span></span>
<span class="line"><span>generator client {</span></span>
<span class="line"><span>  provider = &quot;prisma-client-js&quot;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>datasource db {</span></span>
<span class="line"><span>  provider = &quot;sqlite&quot;</span></span>
<span class="line"><span>  url      = env(&quot;DATABASE_URL&quot;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// @id 主键</span></span>
<span class="line"><span>// @default(autoincrement()) 指定默认值是自增的数字</span></span>
<span class="line"><span>// @unique 指定唯一约束</span></span>
<span class="line"><span>// @relation 一对多关联，通过 authorId 关联到 User 的 id 字段</span></span>
<span class="line"><span>model User {</span></span>
<span class="line"><span>  id        Int       @id@default(autoincrement())</span></span>
<span class="line"><span>  username  String</span></span>
<span class="line"><span>  age       Int</span></span>
<span class="line"><span>  userType  String@default(&quot;user&quot;)</span></span>
<span class="line"><span>  email     String@unique</span></span>
<span class="line"><span>  sort      Int</span></span>
<span class="line"><span>  posts     Post[]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>model Post {</span></span>
<span class="line"><span>  id        Int       @id@default(autoincrement())</span></span>
<span class="line"><span>  title     String</span></span>
<span class="line"><span>  content   String?</span></span>
<span class="line"><span>  published Boolean@default(false)</span></span>
<span class="line"><span>  author    User      @relation(fields: [authorId], references: [id])</span></span>
<span class="line"><span>  authorId  Int</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="创建数据库表" tabindex="-1"><a class="header-anchor" href="#创建数据库表"><span><strong>创建数据库表</strong></span></a></h4><p>使用 <code>Prisma Migrate</code> 运行迁移以创建数据库表</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>npx prisma migrate dev --name init</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>执行上述命令后，它会在项目根目录下 <code>prisma/migrations</code> 生成并执行建表 <code>sql</code> 文件，并在 <code>prisma</code> 目录下创建 <code>dev.db</code> 文件</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728611720648-1.webp" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><p>使用 <code>Navicat</code> 软件连接 <code>dev.db</code> 文件，就能看到 <code>User</code> 和 <code>Post</code> 两张数据库表</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728611720648-2.webp" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h4 id="配置环境-2" tabindex="-1"><a class="header-anchor" href="#配置环境-2"><span><strong>配置环境</strong></span></a></h4><p>如在渲染进程中使用 <code>prisma</code>，需要在 <code>vite.config.ts</code> 中进行如下配置：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>vite.config.ts</span></span>
<span class="line"><span>import { defineConfig } from&#39;vite&#39;</span></span>
<span class="line"><span>import vue from&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span>import electron from&#39;vite-plugin-electron&#39;</span></span>
<span class="line"><span>import renderer from&#39;vite-plugin-electron-renderer&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// https://vitejs.dev/config/</span></span>
<span class="line"><span>exportdefault defineConfig({</span></span>
<span class="line"><span>  plugins: [</span></span>
<span class="line"><span>    vue(),</span></span>
<span class="line"><span>    electron(</span></span>
<span class="line"><span>      {</span></span>
<span class="line"><span>        entry: &#39;src/background.ts&#39;,</span></span>
<span class="line"><span>        onstart: (options) =&gt; {</span></span>
<span class="line"><span>          options.startup()</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      }  </span></span>
<span class="line"><span>    ),</span></span>
<span class="line"><span>    // 在渲染进程中使用 electron api</span></span>
<span class="line"><span>    renderer({</span></span>
<span class="line"><span>      resolve: {</span></span>
<span class="line"><span>        &#39;electron-store&#39;: { type: &#39;esm&#39; },</span></span>
<span class="line"><span>         sqlite3: { type: &#39;cjs&#39; },</span></span>
<span class="line"><span>        &#39;fs-extra&#39;: { type: &#39;esm&#39; },</span></span>
<span class="line"><span>        &#39;@prisma/client&#39;: { type: &#39;esm&#39; }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  ],</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="基本使用-3" tabindex="-1"><a class="header-anchor" href="#基本使用-3"><span><strong>基本使用</strong></span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>&lt;script setup lang=&quot;ts&quot;&gt;</span></span>
<span class="line"><span>  import { PrismaClient } from &#39;@prisma/client&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const prisma = new PrismaClient()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  type User = {</span></span>
<span class="line"><span>    id: number</span></span>
<span class="line"><span>    username: string</span></span>
<span class="line"><span>    age: number</span></span>
<span class="line"><span>    userType: string</span></span>
<span class="line"><span>    email: string</span></span>
<span class="line"><span>    sort: number</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 添加数据</span></span>
<span class="line"><span>  async function addUser(user: Omit&lt;User, &#39;id&#39;&gt;) {</span></span>
<span class="line"><span>    await prisma.user.create({ data: user })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 删除数据</span></span>
<span class="line"><span>  async function delUser(id: number) {</span></span>
<span class="line"><span>    await prisma.user.delete({ where: { id } })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // 修改数据</span></span>
<span class="line"><span>  async function updateUser(user: Partial&lt;User&gt;) {</span></span>
<span class="line"><span>    await prisma.user.update({</span></span>
<span class="line"><span>      where: { id: user.id },</span></span>
<span class="line"><span>      data: user</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 获取数据</span></span>
<span class="line"><span>  async function getUser(id: number) {</span></span>
<span class="line"><span>    return await prisma.user.findUnique({ where: { id } })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 查询数据列表</span></span>
<span class="line"><span>  async function getUserList() {</span></span>
<span class="line"><span>    return await prisma.user.findMany()</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 关联查询</span></span>
<span class="line"><span>  async function getUserWithPosts(id: number) {</span></span>
<span class="line"><span>    return await prisma.user.findUnique({</span></span>
<span class="line"><span>      where: { id },</span></span>
<span class="line"><span>      // 关联查询该用户的 posts</span></span>
<span class="line"><span>      include: { posts: true }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  async function main() {</span></span>
<span class="line"><span>    await addUser({ username: &#39;kunkun&#39;, age: 18, userType: &#39;user&#39;, email: &#39;kunkun@qq.com&#39;, sort: 10 })</span></span>
<span class="line"><span>    await addUser({ username: &#39;唔西迪西&#39;, age: 20, userType: &#39;admin&#39;, email: &#39;wuxidxi@qq.com&#39;, sort: 12 })</span></span>
<span class="line"><span>    await prisma.user.create({</span></span>
<span class="line"><span>      data: {</span></span>
<span class="line"><span>        username: &#39;玛卡巴卡&#39;,</span></span>
<span class="line"><span>        age: 25,</span></span>
<span class="line"><span>        userType: &#39;user&#39;,</span></span>
<span class="line"><span>        email: &#39;makabaka@qq.com&#39;,</span></span>
<span class="line"><span>        sort: 14,</span></span>
<span class="line"><span>        posts: {</span></span>
<span class="line"><span>          create: [</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>              title: &#39;标题1&#39;,</span></span>
<span class="line"><span>              content: &#39;内容1&#39;,</span></span>
<span class="line"><span>              published: true</span></span>
<span class="line"><span>            },</span></span>
<span class="line"><span>            {</span></span>
<span class="line"><span>              title: &#39;标题2&#39;,</span></span>
<span class="line"><span>              content: &#39;内容2&#39;,</span></span>
<span class="line"><span>              published: false</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>          ]</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    await delUser(2)</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    await updateUser({ id: 1, username: &#39;坤坤&#39;, userType: &#39;admin&#39; })</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    let user = await getUser(1)</span></span>
<span class="line"><span>    console.log(user)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let users = await getUserList()</span></span>
<span class="line"><span>    console.log(users)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    let userWithPosts = await getUserWithPosts(3)</span></span>
<span class="line"><span>    console.log(userWithPosts)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  main()</span></span>
<span class="line"><span>&lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Prisma ORM</code> 附带一个内置 <code>GUI</code>，用于查看和编辑数据库中的数据，使用如下命令：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>npx prisma studio</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>则会自动在浏览器中打开链接：http://localhost:5555</p><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728611720648-3.webp" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h4 id="动态设置路径" tabindex="-1"><a class="header-anchor" href="#动态设置路径"><span><strong>动态设置路径</strong></span></a></h4><p>一般将用户的个性化数据存储在 <code>app.getPath(&#39;userData&#39;)</code> 目录下，可以通过如下设置动态的进行文件路径</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>background.ts</span></span>
<span class="line"><span>import { app } from&#39;electron&#39;</span></span>
<span class="line"><span>import path, { resolve } from&#39;path&#39;</span></span>
<span class="line"><span>import fs from&#39;fs&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const setDBPath = (dir: string, fileName: string) =&gt; {</span></span>
<span class="line"><span>  // 获取用户数据目录并设置数据存储路径</span></span>
<span class="line"><span>  let dbPath = &#39;file:&#39; + resolve(app.getPath(&#39;userData&#39;), dir, fileName)</span></span>
<span class="line"><span>  // 获取 .env 文件路径</span></span>
<span class="line"><span>  let envPath = resolve(process.cwd(), &#39;.env&#39;)</span></span>
<span class="line"><span>  // 读取 .env 文件内容</span></span>
<span class="line"><span>  let envContent = fs.readFileSync(envPath, &#39;utf-8&#39;)</span></span>
<span class="line"><span>  // 替换以 DATABASE_URL 开头的变量</span></span>
<span class="line"><span>  let updateContent = envContent.replace(/DATABASE_URL=.*$/m, \`DATABASE_URL=\${dbPath}\`)</span></span>
<span class="line"><span>  // 原始内容与更新后的内容不一致，则写入</span></span>
<span class="line"><span>  if (updateContent !== envContent) {</span></span>
<span class="line"><span>    fs.writeFileSync(envPath, updateContent)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>app.whenReady().then(() =&gt; {</span></span>
<span class="line"><span>  setDBPath(&#39;db&#39;, &#39;dev.db&#39;)</span></span>
<span class="line"><span>  createWindow()</span></span>
<span class="line"><span>})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="浏览器技术存储" tabindex="-1"><a class="header-anchor" href="#浏览器技术存储"><span><strong>浏览器技术存储</strong></span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>Electron\` 集成了 \`Node\` 和 \`Chromium\` 两大环境，因此，浏览器存储技术也适用于 \`Electron</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728611720648-4.webp" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><h3 id="local-storage" tabindex="-1"><a class="header-anchor" href="#local-storage"><span><strong>Local Storage</strong></span></a></h3><p><code>Local Storage</code> 可以存储的数据量也不大，各浏览器限额不同，但都不会超过 <code>10MB</code>。它只能被客户端脚本访问，不会自动随浏览器请求被发送给服务端，服务端也无权设置 <code>Local Storage</code> 的数据。它存储的数据没有过期时间，除非手动删除，不然数据会一直保存在客户端。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 设置值</span></span>
<span class="line"><span>localStorage.setItem(&#39;name&#39;, &#39;kunkun&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取值</span></span>
<span class="line"><span>let username = localStorage.getItem(&#39;name&#39;)</span></span>
<span class="line"><span>console.log(username)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 删除值</span></span>
<span class="line"><span>localStorage.removeItem(&#39;name&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 清空所有值</span></span>
<span class="line"><span>localStorage.clear()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="session-storage" tabindex="-1"><a class="header-anchor" href="#session-storage"><span><strong>Session Storage</strong></span></a></h3><p><code>Session Storage</code> 的特性大多与 <code>Local Storage</code> 相同，唯一不同的是浏览器关闭后 <code>Session Storage</code> 里的数据将被自动清空，因此Electron应用在需要保存程序运行期的临时数据时常常会用到它。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 设置值</span></span>
<span class="line"><span>sessionStorage.setItem(&#39;nikname&#39;, &#39;ikun&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取值</span></span>
<span class="line"><span>let nickname = sessionStorage.getItem(&#39;nikname&#39;)</span></span>
<span class="line"><span>console.log(username)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 删除值</span></span>
<span class="line"><span>sessionStorage.removeItem(&#39;nikname&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 清空所有值</span></span>
<span class="line"><span>sessionStorage.clear()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="indexeddb" tabindex="-1"><a class="header-anchor" href="#indexeddb"><span><strong>IndexedDB</strong></span></a></h3><p><code>IndexedDB</code>是一个基于 <code>JavaScript</code> 的面向对象的数据库，开发者可以用它存储大量的数据，在 <code>Electron</code> 应用内它的存储容量限制与用户的磁盘容量有关。 <code>IndexedDB</code> 也只能被客户端脚本访问，不随浏览器请求被发送到服务端，服务端也无权利访问 <code>IndexedDB</code> 内的数据，它存储的数据亦无过期时间。 <code>IndexedDB</code> 是非关系型数据库，不支持 <code>sql</code> 查询语句。</p><h4 id="基本使用-4" tabindex="-1"><a class="header-anchor" href="#基本使用-4"><span><strong>基本使用</strong></span></a></h4><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>let db: IDBDatabase</span></span>
<span class="line"><span>// 打开数据库，指定数据库名称和版本号，版本号为整数，若指定的数据库不存在，就会新建数据库</span></span>
<span class="line"><span>const request: IDBOpenDBRequest = indexedDB.open(&#39;database&#39;, 1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 第一次打开数据库，或者数据版本发送变化时触发</span></span>
<span class="line"><span>// 第一次打开数据库，会先触发 onupgradeneeded ，然后触发 onsuccess</span></span>
<span class="line"><span>request.onupgradeneeded = (event: any) =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;新建数据库，或者版本升级时触发&#39;, event)</span></span>
<span class="line"><span>  db = event.target.result</span></span>
<span class="line"><span>  let objectStore: IDBObjectStore</span></span>
<span class="line"><span>  // 判断数据库中是否存在名为 user 的对象存储</span></span>
<span class="line"><span>  if (!db.objectStoreNames.contains(&#39;user&#39;)) {</span></span>
<span class="line"><span>    // 创建对象存储对象 user，设置主键自增</span></span>
<span class="line"><span>    objectStore = db.createObjectStore(&#39;user&#39;, { autoIncrement: true })</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 指定主键为 id，第一条记录的 id 为 1</span></span>
<span class="line"><span>    // objectStore = db.createObjectStore(&#39;user&#39;, { keyPath: &#39;id&#39; })</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    // 创建索引，索引名为 name，设置唯一索引</span></span>
<span class="line"><span>    // objectStore.createIndex 的三个参数分别为 索引名称、索引所在的属性、配置对象（该属性是否可以重复）</span></span>
<span class="line"><span>    objectStore.createIndex(&#39;name&#39;, &#39;name&#39;, { unique: true })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 数据库打开失败</span></span>
<span class="line"><span>request.onerror = (err) =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;数据库打开失败&#39;, err)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 数据库打开成功</span></span>
<span class="line"><span>request.onsuccess = (event: any) =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;数据库打开成功&#39;, event)</span></span>
<span class="line"><span>  db = request.result</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 上一次数据库连接还未关闭</span></span>
<span class="line"><span>request.onblocked = (event) =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;数据库被另一个连接打开，且阻止了当前连接继续操作&#39;)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 3 秒后关闭数据库</span></span>
<span class="line"><span>setTimeout(() =&gt; {</span></span>
<span class="line"><span>  db.close()</span></span>
<span class="line"><span>}, 3000)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>读写数据，<code>IndexedDB</code> 的读写操作都是异步的，通过监听请求的 <code>onsuccess</code> 和 <code>onerror</code> 事件来获取读写的结果，对数据库进行读写之前，必须创建数据库事务</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>let db: IDBDatabase</span></span>
<span class="line"><span>const request: IDBOpenDBRequest = indexedDB.open(&#39;database&#39;, 1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 数据库打开失败</span></span>
<span class="line"><span>request.onerror = (err) =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;数据库打开失败&#39;, err)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 数据库打开成功</span></span>
<span class="line"><span>request.onsuccess = (event: any) =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;数据库打开成功&#39;, event)</span></span>
<span class="line"><span>  db = request.result</span></span>
<span class="line"><span>  // 创建事务，指定数据库对象存储名称，操作模式为读写模式</span></span>
<span class="line"><span>  const transaction = db.transaction([&#39;user&#39;], &#39;readwrite&#39;)</span></span>
<span class="line"><span>  // 获取对象存储</span></span>
<span class="line"><span>  const store = transaction.objectStore(&#39;user&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 添加数据</span></span>
<span class="line"><span>  addUser({ username: &#39;kunkun&#39;, age: 18, userType: &#39;user&#39;, email: &#39;kunkun@qq.com&#39;, sort: 10 })</span></span>
<span class="line"><span>  addUser({ username: &#39;唔西迪西&#39;, age: 20, userType: &#39;admin&#39;, email: &#39;wuxidxi@qq.com&#39;, sort: 12 })</span></span>
<span class="line"><span>  addUser({ username: &#39;玛卡巴卡&#39;, age: 25, userType: &#39;user&#39;, email: &#39;makabaka@qq.com&#39;, sort: 14 })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  getDataByKey(&#39;ikun&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 删除数据</span></span>
<span class="line"><span>  delUser(&#39;ikun&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 清空所有数据</span></span>
<span class="line"><span>  clearUser()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 更新数据</span></span>
<span class="line"><span>  updateUser(1, { username: &#39;坤坤&#39;, age: 18, userType: &#39;admin&#39;, email: &#39;kunkun@qq.com&#39;, sort: 10 })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 根据索引查询数据</span></span>
<span class="line"><span>  getUserByKey(1)</span></span>
<span class="line"><span>  getUserByIndex(&#39;username&#39;, &#39;kunkun&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // 获取全部数据</span></span>
<span class="line"><span>  getUserList()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 第一次打开数据库，或者数据版本发送变化时触发</span></span>
<span class="line"><span>// 第一次打开数据库，会先触发 onupgradeneeded ，然后触发 onsuccess</span></span>
<span class="line"><span>request.onupgradeneeded = (event: any) =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;新建数据库，或者版本升级时触发&#39;, event)</span></span>
<span class="line"><span>  let db: IDBDatabase = event.target.result</span></span>
<span class="line"><span>  let objectStore: IDBObjectStore</span></span>
<span class="line"><span>  // 判断数据库中是否存在名为 user 的对象存储</span></span>
<span class="line"><span>  if (!db.objectStoreNames.contains(&#39;user&#39;)) {</span></span>
<span class="line"><span>    // 创建对象存储对象 user，设置主键自增</span></span>
<span class="line"><span>    objectStore = db.createObjectStore(&#39;user&#39;, { autoIncrement: true })</span></span>
<span class="line"><span>    // 指定主键为 id，第一条记录的 id 为 1</span></span>
<span class="line"><span>    // objectStore = db.createObjectStore(&#39;user&#39;, { keyPath: &#39;id&#39; })</span></span>
<span class="line"><span>    // 创建索引，索引名为 username，设置唯一索引</span></span>
<span class="line"><span>    // objectStore.createIndex 的三个参数分别为 索引名称、索引所在的属性、配置对象（该属性是否可以重复）</span></span>
<span class="line"><span>    objectStore.createIndex(&#39;username&#39;, &#39;username&#39;, { unique: true })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 添加数据</span></span>
<span class="line"><span>function addUser(value: any, key?: IDBValidKey) {</span></span>
<span class="line"><span>  const transaction = db.transaction([&#39;user&#39;], &#39;readwrite&#39;)</span></span>
<span class="line"><span>  const store = transaction.objectStore(&#39;user&#39;)</span></span>
<span class="line"><span>  const request = store.add(value, key)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  request.onsuccess = (event) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;添加数据成功&#39;, event)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  request.onerror = (err) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;添加数据失败&#39;, err)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 根据索引删除数据</span></span>
<span class="line"><span>function delUser(key: IDBValidKey | IDBKeyRange) {</span></span>
<span class="line"><span>  const transaction = db.transaction([&#39;user&#39;], &#39;readwrite&#39;)</span></span>
<span class="line"><span>  const store = transaction.objectStore(&#39;user&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const request = store.delete(key)</span></span>
<span class="line"><span>  request.onsuccess = (event) =&gt; {</span></span>
<span class="line"><span>    console.log(\`根据索引\${key}删除数据成功\`, event)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  request.onerror = (err) =&gt; {</span></span>
<span class="line"><span>    console.log(\`根据索引\${key}删除数据失败\`, err)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 清空数据所有数据</span></span>
<span class="line"><span>function clearUser() {</span></span>
<span class="line"><span>  const transaction = db.transaction([&#39;user&#39;], &#39;readwrite&#39;)</span></span>
<span class="line"><span>  const store = transaction.objectStore(&#39;user&#39;)</span></span>
<span class="line"><span>  const request = store.clear()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  request.onsuccess = (event) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;清空数据成功&#39;, event)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  request.onerror = (err) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;清空数据失败&#39;, err)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 修改数据 - value 会被整体替换掉</span></span>
<span class="line"><span>function updateUser(key: IDBValidKey, value: any) {</span></span>
<span class="line"><span>  const transaction = db.transaction([&#39;user&#39;], &#39;readwrite&#39;)</span></span>
<span class="line"><span>  const store = transaction.objectStore(&#39;user&#39;)</span></span>
<span class="line"><span>  const request = store.put(value, key)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  request.onsuccess = (event) =&gt; {</span></span>
<span class="line"><span>    console.log(\`根据索引\${key}更新数据成功\`, event)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  request.onerror = (err) =&gt; {</span></span>
<span class="line"><span>    console.log(\`根据索引\${key}更新数据失败\`, err)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 根据索引查询数据</span></span>
<span class="line"><span>function getUserByKey(key: IDBValidKey | IDBKeyRange) {</span></span>
<span class="line"><span>  const transaction = db.transaction([&#39;user&#39;], &#39;readwrite&#39;)</span></span>
<span class="line"><span>  const store = transaction.objectStore(&#39;user&#39;)</span></span>
<span class="line"><span>  const request = store.get(key)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  request.onsuccess = (event) =&gt; {</span></span>
<span class="line"><span>    console.log(\`根据索引\${key}获取数据成功\`, (event.target asany).result)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  request.onerror = (err) =&gt; {</span></span>
<span class="line"><span>    console.log(\`根据索引\${key}获取数据失败\`, err)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 根据索引查询数据，自定义索引</span></span>
<span class="line"><span>function getUserByIndex(name: string, key: IDBValidKey | IDBKeyRange) {</span></span>
<span class="line"><span>  const transaction = db.transaction([&#39;user&#39;], &#39;readwrite&#39;)</span></span>
<span class="line"><span>  const store = transaction.objectStore(&#39;user&#39;)</span></span>
<span class="line"><span>  const index = store.index(name)</span></span>
<span class="line"><span>  const request = index.get(key)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  request.onsuccess = (event) =&gt; {</span></span>
<span class="line"><span>    console.log(\`根据索引\${key}获取数据成功\`, (event.target asany).result)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  request.onerror = (err) =&gt; {</span></span>
<span class="line"><span>    console.log(\`根据索引\${key}获取数据失败\`, err)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取全部数据</span></span>
<span class="line"><span>function getUserList() {</span></span>
<span class="line"><span>  const transaction = db.transaction([&#39;user&#39;], &#39;readwrite&#39;)</span></span>
<span class="line"><span>  const store = transaction.objectStore(&#39;user&#39;)</span></span>
<span class="line"><span>  const request = store.getAll()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  request.onsuccess = (event) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;获取全部数据成功&#39;, (event.target asany).result)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  request.onerror = (err) =&gt; {</span></span>
<span class="line"><span>    console.log(&#39;获取全部数据失败&#39;, err)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用dexie" tabindex="-1"><a class="header-anchor" href="#使用dexie"><span><strong>使用Dexie</strong></span></a></h4><p><code>Dexie.js</code> 是一个对浏览器 <code>indexedDb</code> 的包装库，能够让开发者操作 <code>indexedDb</code> 变得更加简单和有趣</p><p>官网：https://dexie.org</p><p>安装依赖</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>pnpm i dexie</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>基本使用</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>import Dexie, { type EntityTable } from&#39;dexie&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>interface User {</span></span>
<span class="line"><span>  id: number</span></span>
<span class="line"><span>  username: string</span></span>
<span class="line"><span>  age: number</span></span>
<span class="line"><span>  userType: string</span></span>
<span class="line"><span>  email: string</span></span>
<span class="line"><span>  sort: number</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const db = new Dexie(&#39;database&#39;) as Dexie &amp; {</span></span>
<span class="line"><span>  // id 是主键</span></span>
<span class="line"><span>  user: EntityTable&lt;User, &#39;id&#39;&gt;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>db.version(1).stores({</span></span>
<span class="line"><span>  // 设置主键为 id 自增</span></span>
<span class="line"><span>  user: &#39;++id&#39;</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 添加数据</span></span>
<span class="line"><span>asyncfunction addUser(user: Omit&lt;User, &#39;id&#39;&gt;) {</span></span>
<span class="line"><span>  await db.user.add(user)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>addUser({ username: &#39;kunkun&#39;, age: 18, userType: &#39;user&#39;, email: &#39;ikun@qq.com&#39;, sort: 10 })</span></span>
<span class="line"><span>addUser({ username: &#39;唔西迪西&#39;, age: 20, userType: &#39;admin&#39;, email: &#39;wuxidxi@qq.com&#39;, sort: 12 })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 删除数据</span></span>
<span class="line"><span>asyncfunction delUser(id: number) {</span></span>
<span class="line"><span>  await db.user.delete(id)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>delUser(2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 清空数据</span></span>
<span class="line"><span>asyncfunction clearUser() {</span></span>
<span class="line"><span>  await db.user.clear()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>clearUser()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 修改数据</span></span>
<span class="line"><span>asyncfunction updateUser(id: number, user: Partial&lt;Omit&lt;User, &#39;id&#39;&gt;&gt;) {</span></span>
<span class="line"><span>  await db.user.update(id, user)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>updateUser(1, { username: &#39;坤坤&#39;, userType: &#39;admin&#39; })</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 根据 id 获取用户数据</span></span>
<span class="line"><span>asyncfunction getUser(id: number) {</span></span>
<span class="line"><span>  returnawait db.user.get(id)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>getUser(1)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取所有数据</span></span>
<span class="line"><span>asyncfunction getUserList() {</span></span>
<span class="line"><span>  returnawait db.user.toArray()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 删除数据库</span></span>
<span class="line"><span>asyncfunction delDB() {</span></span>
<span class="line"><span>  db.close()</span></span>
<span class="line"><span>  await db.delete()</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>delDB()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="web-sql" tabindex="-1"><a class="header-anchor" href="#web-sql"><span><strong>Web SQL</strong></span></a></h3><p><code>WebSQL</code> 是一种为浏览器提供的数据库技术，它最大的特点就是使用 <code>SQL</code> 指令来操作数据。已废弃，了解即可。</p><h3 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span><strong>Cookie</strong></span></a></h3><p><code>Cookie</code> 用于存储少量的数据，最多不能超过 <code>4KB</code>，用来服务于客户端和服务端间的数据传输，一般情况下浏览器发起的每次请求都会携带同域下的 <code>Cookie</code> 数据，大多数时候服务端程序和客户端脚本都有访问<code>Cookie</code> 的权力。开发者可以设置数据保存的有效期，当 <code>Cookie</code> 数据超过有效期后将被浏览器自动删除。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>// 获取 cookie</span></span>
<span class="line"><span>let cookie = document.cookie</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置 cookie</span></span>
<span class="line"><span>document.cookie = &#39;name=kunkun&#39;</span></span>
<span class="line"><span>document.cookie = &#39;age=18&#39;</span></span>
<span class="line"><span>console.log(cookie) // name=kunkun; age=18</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 删除 cookie</span></span>
<span class="line"><span>document.cookie = &#39;age=18; expires=&#39; + newDate(0).toUTCString()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,114)),n(i,{colorful:"",service:"email,qq,qzone,qrcode,weibo,telegram,twitter"})])}const h=l(t,[["render",u],["__file","Electron本地数据存储方案.html.vue"]]),g=JSON.parse('{"path":"/js/Electron%E6%9C%AC%E5%9C%B0%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8%E6%96%B9%E6%A1%88.html","title":"Electron本地数据存储方案","lang":"zh-CN","frontmatter":{"title":"Electron本地数据存储方案","excerpt":null,"description":"Electron本地数据存储方案","date":"2024-10-13T00:00:00.000Z","category":"js","tag":"js","author":"xlc520","article":true,"timeline":true,"icon":"javascript","head":[["meta",{"property":"og:url","content":"https://blog.ciberviler.top/js/Electron%E6%9C%AC%E5%9C%B0%E6%95%B0%E6%8D%AE%E5%AD%98%E5%82%A8%E6%96%B9%E6%A1%88.html"}],["meta",{"property":"og:site_name","content":"StudyNote - 丰富的知识笔记库"}],["meta",{"property":"og:title","content":"Electron本地数据存储方案"}],["meta",{"property":"og:description","content":"Electron本地数据存储方案"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728611720648-0.webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-15T14:38:03.000Z"}],["meta",{"property":"article:author","content":"xlc520"}],["meta",{"property":"article:tag","content":"js"}],["meta",{"property":"article:published_time","content":"2024-10-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-15T14:38:03.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Electron本地数据存储方案\\",\\"image\\":[\\"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728611720648-0.webp\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728611720648-1.webp\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728611720648-2.webp\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728611720648-3.webp\\",\\"https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728611720648-4.webp\\"],\\"datePublished\\":\\"2024-10-13T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-15T14:38:03.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"xlc520\\"}]}"]]},"headers":[{"level":2,"title":"Lowdb","slug":"lowdb","link":"#lowdb","children":[{"level":3,"title":"安装依赖","slug":"安装依赖","link":"#安装依赖","children":[]},{"level":3,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":3,"title":"扩展Lowdb","slug":"扩展lowdb","link":"#扩展lowdb","children":[]},{"level":3,"title":"数据加密","slug":"数据加密","link":"#数据加密","children":[]}]},{"level":2,"title":"Electron Store","slug":"electron-store","link":"#electron-store","children":[{"level":3,"title":"安装依赖","slug":"安装依赖-1","link":"#安装依赖-1","children":[]},{"level":3,"title":"配置环境","slug":"配置环境","link":"#配置环境","children":[]},{"level":3,"title":"基本使用","slug":"基本使用-1","link":"#基本使用-1","children":[]},{"level":3,"title":"数据加密","slug":"数据加密-1","link":"#数据加密-1","children":[]}]},{"level":2,"title":"Sqlite","slug":"sqlite","link":"#sqlite","children":[{"level":3,"title":"安装依赖","slug":"安装依赖-2","link":"#安装依赖-2","children":[]},{"level":3,"title":"配置环境","slug":"配置环境-1","link":"#配置环境-1","children":[]},{"level":3,"title":"基本使用","slug":"基本使用-2","link":"#基本使用-2","children":[]},{"level":3,"title":"Prisma","slug":"prisma","link":"#prisma","children":[]}]},{"level":2,"title":"浏览器技术存储","slug":"浏览器技术存储","link":"#浏览器技术存储","children":[{"level":3,"title":"Local Storage","slug":"local-storage","link":"#local-storage","children":[]},{"level":3,"title":"Session Storage","slug":"session-storage","link":"#session-storage","children":[]},{"level":3,"title":"IndexedDB","slug":"indexeddb","link":"#indexeddb","children":[]},{"level":3,"title":"Web SQL","slug":"web-sql","link":"#web-sql","children":[]},{"level":3,"title":"Cookie","slug":"cookie","link":"#cookie","children":[]}]}],"git":{"createdTime":1731681483000,"updatedTime":1731681483000,"contributors":[{"name":"xlc","email":"2215400217@qq.com","commits":1}]},"readingTime":{"minutes":22.09,"words":6626},"filePathRelative":"js/Electron本地数据存储方案.md","localizedDate":"2024年10月13日","excerpt":""}');export{h as comp,g as data};
