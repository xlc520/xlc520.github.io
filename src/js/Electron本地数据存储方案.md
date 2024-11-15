---
title: Electron本地数据存储方案
excerpt:
description: Electron本地数据存储方案
date: 2024-10-13
category: js
tag: js
author: xlc520
article: true
timeline: true
icon: javascript
---

```component VPBanner
title: Electron本地数据存储方案
content: Electron本地数据存储方案
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: Electron本地数据存储方案
    link: /js/Electron本地数据存储方案
```

# Electron本地数据存储方案

使用本地文件进行持久化存储数据，一般不会把用户的个性化数据存储在应用程序的安装目录下，因为安装目录是不可靠的，应用程序升级或卸载重装都可能导致安装目录被清空，操作用户数据丢失。好在操作系统为应用程序提供了一个专有目录来存储应用程序的个性化数据：
`C:\Users\username\AppData\Roaming`

在 `electron` 中，可以使用 `app.getPath` 通过传入不同的参数来获取不同用途的路径，对应的参数说明如下：

- `home` 用户的 home 文件夹（主目录）
- `appData` 每个用户的应用程序数据目录，默认情况下指向：
    - `%APPDATA%` Windows 中
    - `$XDG_CONFIG_HOME` or `~/.config` Linux 中
    - `~/Library/Application Support` macOS 中
- `userData` 储存你应用程序配置文件的文件夹，默认是 `appData` 文件夹附加应用的名称
  按照习惯用户存储的数据文件应该写在此目录，同时不建议在这写大文件，因为某些环境会备份此目录到云端存储。
- `sessionData` 此目录存储由 `Session` 生成的数据，例如 localStorage，cookies，磁盘缓存，下载的字典，网络 状态，开发者工具文件等。
  默认为 `userData` 目录。 Chromium 可能在此处写入非常大的磁盘缓存，因此，如果您的应用不依赖于浏览器存储（如 localStorage 或
  cookie）来保存用户数据，建议将此目录设置为其他位置，以避免污染 `userData` 目录。
- `temp` 临时文件夹
- `exe`当前的可执行文件
- `module` The `libchromiumcontent` 库
- `desktop` 当前用户的桌面文件夹
- `documents` 用户文档目录的路径
- `downloads` 用户下载目录的路径
- `music` 用户音乐目录的路径
- `pictures` 用户图片目录的路径
- `videos` 用户视频目录的路径
- `recent` 用户最近文件的目录 (仅限 Windows)。
- `logs`应用程序的日志文件夹
- `crashDumps` 崩溃转储文件存储的目录

```
app.getPath('userData')
# C:\Users\username\AppData\Roaming\my-electron-app
```

## **Lowdb**

`lowdb` 是轻量级的本地 `json` 数据库

官网：https://github.com/typicode/lowdb

### **安装依赖**

```
pnpm i lowdb
```

### **基本使用**

```
<script setup lang="ts">
  import { JSONFilePreset } from 'lowdb/node'
  import { resolve } from 'path'

  function resolvePath(fileName: string) {
    return resolve(app.getPath('userData'), fileName)
  }

  type User = {
    id: number
    username: string
    age: number
    userType: string
    email: string
    sort: number
  }
  
  type Data = {
    users: User[]
  }

  // 基本使用
  async function main() {
    // 初始化默认数据
    const defaultData: Data = { users: [] }
    // 创建或读取数据
    const db = await JSONFilePreset(resolvePath('db.json'), defaultData)
    // 创建 user 对象
    const user = { id: 1, username: 'kunkun', age: 18, userType: 'user', email: 'kunkun@qq.com', sort: 10 }
    // 写入数据
    ---
    db.data.users.push(user)
    await db.write()
    ---
    // 等价于 
    await db.update(({ users }) => {
      users.push(user)
    })
  }
  main()
</script>
```

执行上述命令，则会在 `app.getPath('userData')` 目录下，生成 `db.json` 文件，内容如下：

```
{
  "users": [
    {
      "id": 1,
      "username": "kunkun",
      "age": 18,
      "userType": "user",
      "email": "kunkun@qq.com",
      "sort": 10
    }
  ]
}
```

### **扩展Lowdb**

使用 `lodash` 扩展 `lowdb`

```
pnpm i lodash
<script setup lang="ts">
  import { Low } from 'lowdb'
  import lodash from 'lodash'

  // lodash.chain：创建一个能够被链式调用的 lodash 对象

  class LowWithLodash<T> extends Low<T> {
    chain: lodash.ExpChain<this['data']> = lodash.chain(this).get('data')
  }
</script>
```

基本使用

```
<script setup lang="ts">
  import { LowSync } from 'lowdb'
  import { JSONFileSync, JSONFileSyncPreset } from 'lowdb/node'
  import { resolve } from 'path'
  import lodash from 'lodash'

  function resolvePath(fileName: string) {
    return resolve(app.getPath('userData'), fileName)
  }

  type User = {
    id: number
    username: string
    age: number
    userType: string
    email: string
    sort: number
  }

  type Data = {
    users: User[]
  }

  // 使用 lodash 扩展 lowdb
  class LowWithLodash<T> extends LowSync<T> {
    // lodash.chain：创建一个能够被链式调用的 lodash 对象
    chain: lodash.ExpChain<this['data']> = lodash.chain(this).get('data')
  }

  // 初始化默认数据
  const defaultData: Data = { users: [] }
  // 创建一个适配器
  const adapter = new JSONFileSync<Data>(resolvePath('db.json'))
  // 实例化
  const db = new LowWithLodash(adapter, defaultData)
  // 读取文件
  db.read()

  // 添加数据
  function addUser(user: Omit<User, 'id'>) {
    let id = db.data.users.length + 1
    db.chain
    .get('users')
    .push({ id, ...user })
    .value()
    db.write()
  }

  addUser({ username: 'kunkun', age: 18, userType: 'user', email: 'kunkun@qq.com', sort: 10 })
  addUser({ username: '唔西迪西', age: 20, userType: 'admin', email: 'wuxidxi@qq.com', sort: 12 })

  // 删除数据
  function delUser(id: number) {
    db.chain.get('users').remove({ id: id }).value()
    db.write()
  }

  // 清空数据
  function clearUser() {
    db.chain.set('users', []).value()
    db.write()
  }

  // 修改数据
  function updateUser(id: number, user: Partial<Omit<User, 'id'>>) {
    db.chain.get('users').find({ id: id }).assign(user).value()
  db.write()
  }
  updateUser(1, { username: '坤坤', userType: 'admin' })

  // 查询数据
  // 根据 id 查询数据
  const user = db.chain.get('users').find({ id: 1 }).value()
  // 查询最后一条数据
  const lastUser = db.chain.get('users').last().value()
  // 查询 users 总数
  const total = db.chain.get('users').size().value()
  // 获取前 10 条数据
  const topTenList = db.chain.get('users').sortBy('sort').take(10).value()
  function getUser(id: number) {
    return db.chain.get('users').find({ id }).value()
  }

  // 查询所有数据
  function getUserList() {
    return db.chain.get('users').value()
  }
</script>
```

### **数据加密**

```
<script setup lang="ts">
  import { LowSync } from 'lowdb'
  import { DataFileSync, JSONFileSync, JSONFileSyncPreset } from 'lowdb/node'
  import { resolve } from 'path'
  import lodash from 'lodash'
  import crypto from 'crypto'

  function resolvePath(fileName: string) {
    return resolve(app.getPath('userData'), fileName)
  }

  type User = {
    id: number
    username: string
    age: number
    userType: string
    email: string
    sort: number
  }

  type Data = {
    users: User[]
  }

  // 算法
  const algorithm = 'aes-256-cbc'
  // 秘钥
  const key = crypto.scryptSync('secret', 'salt', 32)
  // 初始化向量
  const iv = Buffer.alloc(16, 6)

  // 加密数据
  function encrypt(data: string) {
    // 创建加密对象
    const cipher = crypto.createCipheriv(algorithm, key, iv)
    // 对数据进行加密
    let encrypted = cipher.update(data, 'utf8')
    // 加密结束
    encrypted = Buffer.concat([encrypted, cipher.final()])
    // 生成 16 进制密文
    let result = encrypted.toString('hex')
    return result
  }

  // 解密
  function decrypt(text: string) {
    // 创建解密对象
    const decipher = crypto.createDecipheriv(algorithm, key, iv)
    // 进行解密
    let decrypted = decipher.update(text, 'hex')
    // 解密结束
    decrypted = Buffer.concat([decrypted, decipher.final()])
    let result = decrypted.toString()
    return result
  }

  // 默认数据
  const defaultData: Data = { users: [] }
  // 创建适配器
  const adapter = new DataFileSync<Data>(resolvePath('db.json'), {
    parse: (data) => {
      return JSON.parse(decrypt(data))
    },
    stringify: (data) => {
      return encrypt(JSON.stringify(data))
    }
  })

  const db = new LowSync(adapter, defaultData)
  db.read()

  // 添加数据，自动加密
  function addUser(user: Omit<User, 'id'>) {
    let id = db.data.users.length + 1
    db.data.users.push({ id, ...user })
    db.write()
  }

  addUser({ username: 'kunkun', age: 18, userType: 'user', email: 'kunkun@qq.com', sort: 10 })

  // 获取数据，自动解密
  function getUserById(id: number) {
    return db.data.users.find((item) => item.id === id)
  }

  let user = getUser(1)
  console.log(user)
</script>
```

## **Electron Store**

`electron-store` 可以为 `electron` 应用或模块提供简单的数据持久化 - 保存和加载用户设置、应用状态、缓存等功能。生成的数据会默认保存在
`app.getPath('userData')` 名为 `config.json` 文件下：

官网：https://github.com/sindresorhus/electron-store

### **安装依赖**

```
pnpm i electron-store
```

### **配置环境**

若要在渲染进程中使用 `electron-store`，需要进行如下配置：

```
background.ts
import Store from'electron-store'
// 初始化
Store.initRenderer()
vite.config.ts
import { defineConfig } from'vite'
import vue from'@vitejs/plugin-vue'
import electron from'vite-plugin-electron'
import renderer from'vite-plugin-electron-renderer'

// https://vitejs.dev/config/
exportdefault defineConfig({
  plugins: [
    vue(),
    electron(
      {
        entry: 'src/background.ts',
        onstart: (options) => {
          options.startup()
        },
      }  
    ),
    // 在渲染进程中使用 electron api
    renderer({
      resolve: {
        'electron-store': { type: 'esm' }
      }
    })
  ],
})
```

### **基本使用**

经过上述操作配置，就可以在渲染进程中愉快的使用 `electron-store` 啦

```
<script setup lang="ts">
  import Store from 'electron-store'

  const store = new Store()
  store.set('name', 'kunkun')
  console.log(store.get('name'))
</script>
```

经过上述测试，就会在 `app.getPath('userData')` 路径下，生成一个 `config.json` 的文件，内容如下：

```
config.json
{
  "name": "kunkun"
}
```

其他操作

```
<script setup lang="ts">
  import Store from 'electron-store'

  type User = {
    id: number
    username: string
    age: number
    userType: string
    email: string
    sort: number
  }
  
  type Data = {
    users: User[]
  }

  // 生成的路径为：app.getPath('userData')/db/db.json
  const store = new Store<Data>({
    // 文件夹名称
    cwd: 'db',
    // 文件名
    name: 'db',
    // 默认值
    defaults: { users: [] }
  })

  // 获取值
  let users = store.get('users')
  let username = store.get('users[0].username')
  let data = store.store

  // 设置值
  store.set('users', [...users, { id: users.length + 1, username: 'kunkun', age: 18, userType: 'user', email: 'kunkun@qq.com', sort: 10 }])

  // 在编辑器中打开存储文件
  store.openInEditor()

  // 存储文件的路径
  let path = store.path

  // 删除 users 字段
  store.delete('users')

  // 删除所有值，重置为默认值
  store.clear()
</script>
```

### **数据加密**

在实例化 `store` 时，添加 `encryptionKey` 属性并指定秘钥，`electron-store` 将使用 `aes-256-cbc` 加密算法对存储区进行加密

```
const store = new Store<Data>({
  // 文件夹名称
  cwd: 'db',
  // 文件名
  name: 'db',
  // 默认值
  defaults: { users: [] },
  // 数据加密
  encryptionKey: 'secret'
})
```

## **Sqlite**

`SQLite` 是一个轻型的、嵌入式的 `SQL` 数据库引擎，其特点是自给自足、无服务器零配置、支持事务。它是在世界上部署最广泛的SQL数据库引擎。

官网：https://github.com/TryGhost/node-sqlite3

### **安装依赖**

```
pnpm i sqlite3
pnpm i fs-extra
```

### **配置环境**

在渲染进程中使用 `sqlite3`，需要在 `vite.config.ts` 中进行如下配置：

```
vite.config.ts
import { defineConfig } from'vite'
import vue from'@vitejs/plugin-vue'
import electron from'vite-plugin-electron'
import renderer from'vite-plugin-electron-renderer'

// https://vitejs.dev/config/
exportdefault defineConfig({
  plugins: [
    vue(),
    electron(
      {
        entry: 'src/background.ts',
        onstart: (options) => {
          options.startup()
        },
      }  
    ),
    // 在渲染进程中使用 electron api
    renderer({
      resolve: {
        'electron-store': { type: 'esm' },
        sqlite3: { type: 'cjs' },
        'fs-extra': { type: 'esm' }
      }
    })
  ],
})
```

### **基本使用**

```
<script setup lang="ts">
  import * as sqlite3 from 'sqlite3'
  import { resolve } from 'path'
  import { app } from '@electron/remote'
  import fs from 'fs-extra'

  function resolvePath(dir: string, fileName: string) {
    return resolve(app.getPath('userData'), dir, fileName)
  }

  // 连接数据库
  // 执行 verbose 函数，便于调试代码，代码出错，会定位到具体的代码
  const sqlite = sqlite3.verbose()
  // 指定文件路径
  let dbPath = resolvePath('db','db.db')
  // 指定文件不存在则创建，存在就不进行操作
  fs.ensureFileSync(dbPath)
  // 初始化数据库，指定数据库存储路径，指定数据库操作模式为速写模式
  const db = new sqlite.Database(dbPath, sqlite.OPEN_READWRITE, (err) => {
    if (err) return console.log(err)
    console.log('数据库连接成功')
  })

  // db.run(sql,params?,callback?)
  // 执行除了查询之外的 建表、插入、更新及删除的 sql 语句

  // 创建 user 表
  db.run(
    `CREATE TABLE IF NOT EXISTS user (
      id 				INTEGER 			NOT NULL		PRIMARY KEY AUTOINCREMENT,
      username 	CHAR ( 45 ) 	NOT NULL,
      age       INT						NOT NULL,
      userType 	CHAR ( 45 ) 	NOT NULL 		DEFAULT 'user',
      email     CHAR ( 45 )		NOT NULL  	UNIQUE,
      sort 		 	INT 					NOT NULL 		DEFAULT  10
	  )`,
    (err) => {
      if (err) return console.log(err)
      console.log('创建 user 表成功')
    }
  )
</script>
```

执行上述操作，就会在 `app.getPath('userData')/db` 目录下，生成一个名为 `db.db` 的文件，使用 `Navicat`
软件与该文件建立连接，就会看到刚刚建立的表，如下：

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728611720648-0.webp)

继续执行其他相关操作

```
<script setup lang="ts">
  import * as sqlite3 from 'sqlite3'
  import { resolve } from 'path'
  import { app } from '@electron/remote'
  import fs from 'fs-extra'

  function resolvePath(dir: string, fileName: string) {
    return resolve(app.getPath('userData'), dir, fileName)
  }

  // 连接数据库
  // 执行 verbose 函数，便于调试代码，代码出错，会定位到具体的代码
  const sqlite = sqlite3.verbose()
   // 指定文件路径
  let dbPath = resolvePath('db','db.db')
  // 指定文件不存在则创建，存在就不进行操作
  fs.ensureFileSync(dbPath)
  // 初始化数据库，指定数据库存储路径，指定数据库操作模式为速写模式
  const db = new sqlite.Database(dbPath, sqlite.OPEN_READWRITE, (err) => {
    if (err) return console.log(err)
    console.log('数据库连接成功')
  })

  // db.run(sql,params?,callback?)
  // 执行除了查询之外的 建表、插入、更新及删除的 sql 语句
  // 创建表格
  db.run(
    `CREATE TABLE IF NOT EXISTS user (
       id 				INTEGER 			NOT NULL		PRIMARY KEY AUTOINCREMENT,
       username 	CHAR ( 45 ) 	NOT NULL,
       age        INT						NOT NULL,
       userType 	CHAR ( 45 ) 	NOT NULL 		DEFAULT 'user',
       email      CHAR ( 45 )		NOT NULL  	UNIQUE,
       sort 		 	INT 					NOT NULL 		DEFAULT 10
    )`,
    (err) => {
      if (err) return console.log(err)
       console.log('创建 user 表成功')
    }
  )

  // 添加数据
  db.run(`INSERT INTO user VALUES ( NULL, 'kunkun', 18, 'user', 'kunkun@qq.com', 10 )`, (err) => {
    if (err) return console.log(err)
    console.log('添加数据成功')
  })

  db.run(`INSERT INTO user VALUES ( NULL, ?, ?, ? ,? ,? )`, ['唔西迪西', 20, 'user', 'wuxidxi@qq.com', 12], (err) => {
    if (err) return console.log(err)
    console.log('添加数据成功')
  })

  // 修改数据
  db.run(`UPDATE user SET username = '坤坤', userType = 'admin' WHERE id = 1`, (err) => {
    if (err) return console.log(err)
    console.log('修改数据成功')
  })

  db.run(`UPDATE user SET username = ?, userType = ? WHERE id = ?`, ['玛卡巴卡', 'admin', 2], (err) => {
    if (err) return console.log(err)
    console.log('修改数据成功')
  })

  // 删除数据
  db.run(`DELETE FROM user WHERE id = 2`, (err) => {
    if (err) return console.log(err)
    console.log('删除数据成功')
  })

  db.run(`DELETE FROM user WHERE id = ?`, [2], (err) => {
    if (err) return console.log(err)
    console.log('删除数据成功')
  })

  // 查询数据
  db.all(`SELECT * FROM user`, (err, rows) => {
    if (err) return console.log(err)
    console.log(rows)
  })

  // 遍历查询出来的结果
  db.each(`SELECT * FROM user`, (err, row) => {
    if (err) return console.log(err)
    console.log(row)
  })

  // 关闭数据库连接
  db.close((err) => {
    if (err) return console.log(err)
    console.log('关闭数据库连接')
  })

  // 直接执行上述操作，执行顺序会有差异，使用 db.serialize 即可按照指定顺序执行 sql 语句
  db.serialize(() => {
    // 建表
    db.run(`CREATE TABLE IF NOT EXISTS user (
       id 				INTEGER 			NOT NULL		PRIMARY KEY AUTOINCREMENT,
       username 	CHAR ( 45 ) 	NOT NULL,
       age        INT						NOT NULL,
       userType 	CHAR ( 45 ) 	NOT NULL 		DEFAULT 'user',
       email      CHAR ( 45 )		NOT NULL  	UNIQUE,
       sort 		 	INT 					NOT NULL 		DEFAULT 10
    )`)

    // 添加数据
    db.run(`INSERT INTO user VALUES ( NULL, 'kunkun', 18, 'user', 'kunkun@qq.com', 10 )`, (err) => {
      if (err) return console.log(err)
      console.log('添加数据成功')
    })
    db.run(`INSERT INTO user VALUES ( NULL, ?, ?, ? ,? ,? )`, ['唔西迪西', 20, 'user', 'wuxidxi@qq.com', 12], (err) => {
      if (err) return console.log(err)
      console.log('添加数据成功')
    })

    // 修改数据
    db.run(`UPDATE user SET username = '坤坤', userType = 'admin' WHERE id = 1`, (err) => {
      if (err) return console.log(err)
      console.log('修改数据成功')
    })

    // 删除数据
    db.run(`DELETE FROM user WHERE id = 2`, (err) => {
      if (err) return console.log(err)
      console.log('删除数据成功')
    })

    // 查询数据
    db.all(`SELECT * FROM user`, (err, rows) => {
      if (err) return console.log(err)
      console.log(rows)
    })

    // 关闭数据库连接
    db.close((err) => {
      if (err) return console.log(err)
      console.log('关闭数据库连接')
    })
  })
</script>
```

简易封装

```
<script setup lang="ts">
  import * as sqlite3 from 'sqlite3'
  import { resolve } from 'path'
  import { app } from '@electron/remote'
  import fs from 'fs-extra'

  function resolvePath(dir: string, fileName: string) {
    return resolve(app.getPath('userData'), dir, fileName)
  }

  type User = {
    id: number
    username: string
    age: number
    userType: string
    email: string
    sort: number
  }

  // 连接数据库
  // 执行 verbose 函数，便于调试代码，代码出错，会定位到具体的代码
  const sqlite = sqlite3.verbose()
  // 指定文件路径
  let dbPath = resolvePath('db','db.db')
  // 指定文件不存在则创建，存在就不进行操作
  fs.ensureFileSync(dbPath)
  // 初始化数据库，指定数据库存储路径，指定数据库操作模式为速写模式
  const db = new sqlite.Database(dbPath, sqlite.OPEN_READWRITE, async (err) => {
    if (err) return console.log(err)
    await initUserTable()

    await addUser({ username: 'kunkun', age: 18, userType: 'user', email: 'kunkun@qq.com', sort: 10 })
    await addUser({ username: '唔西迪西', age: 20, userType: 'admin', email: 'wuxidxi@qq.com', sort: 12 })

    await delUser(2)
    await updateUser(1, { username: '坤坤', userType: 'admin' })

    let user = await getUser(1)
    let users = await getUserList()
  })

  // // 创建 user 表
  function initUserTable() {
    return new Promise((resolve, reject) => {
      db.run(
        `CREATE TABLE IF NOT EXISTS user (
         id 				INTEGER 			NOT NULL		PRIMARY KEY AUTOINCREMENT,
         username 	CHAR ( 45 ) 	NOT NULL,
         age        INT						NOT NULL,
         userType 	CHAR ( 45 ) 	NOT NULL 		DEFAULT 'user',
         email      CHAR ( 45 )		NOT NULL  	UNIQUE,
         sort 		 	INT 					NOT NULL 		DEFAULT 10
       )`,
        (err) => {
          if (err) return reject(err)
          resolve('创建 user 表成功')
        }
      )
    })
  }

  // 添加数据
  function addUser(user: Omit<User, 'id'>) {
    return new Promise((resolve, reject) => {
      let { username, age, userType, sort, email } = user
      /* db.run(`INSERT INTO user VALUES ( NULL, '${username}','${age}', '${userType}', '${email}', '${sort}' )`, (err) => {
         if (err) return reject(err)
         resolve('添加数据成功')
       }) */
      db.run(`INSERT INTO user VALUES ( NULL, ?, ?, ?, ? ,? )`, [username, age, userType, email, sort], (err) => {
        if (err) return reject(err)
        resolve('添加数据成功')
      })
    })
  }

  // 删除数据
  function delUser(id: number) {
    return new Promise((resolve, reject) => {
      db.run(`DELETE FROM user WHERE id = ${id}`, (err) => {
        if (err) return reject(err)
        resolve('删除数据成功')
      })
    })
  }

  // 修改数据
  function updateUser(id: number, user: Partial<Omit<User, 'id'>>) {
    return new Promise((resolve, reject) => {
      let arr = []
      for (let key in user) {
        let value = `${key} = '${user[key as keyof Omit<User, 'id'>]}'`
        arr.push(value)
      }
      if (!arr.length) return reject('没有要修改的数据')

      db.run(`UPDATE user SET ${arr.join(',')} WHERE id = ${id}`, (err) => {
        if (err) return console.log(err)
        resolve('修改数据成功')
      })
    })
  }

  // 获取数据
  function getUser(id: number): Promise<User> {
    return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM user WHERE id = ${id}`, (err: Error, row: User) => {
      if (err) return reject(err)
      resolve(row)
    })
  })
  }

  // 获取数据列表
  function getUserList(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      db.all(`SELECT * FROM user`, (err: Error, rows: User[]) => {
        if (err) return reject(err)
        resolve(rows)
      })
    })
  }

</script>
```

### **Prisma**

`Prisma` 是一个现代的数据库工具包，其中的 `Prisma ORM`（Object-Relational Mapping，对象关系映射）框架具有以下特点和优势：

- 强大的数据库操作能力
- 跨数据库支持（ PostgreSQL、MySQL、SQLite 和 MongoDB ）
- 自动生成数据库迁移脚本
- 类型安全
- 活跃的社区和文档

官网：https://prisma.nodejs.cn

#### **安装依赖**

```
pnpm i prisma 
```

#### **创建模型**

使用 `Prisma CLI` 的 `init` 命令设置 `Prisma ORM`

```
npx prisma init --datasource-provider sqlite
```

执行上述命令后，将会在项目根目录上创建一个带有 `schema.prisma` 文件的新 `prisma` 目录，并将 `SQLite` 配置为你的数据库，并且还会多个一个
`.env` 文件，内容如下：

```
prisma/schema.prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
.env
# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="file:./dev.db"
```

对数据进行建模，在项目根目录 `prisma/schema.prisma` 文件下，建立如下模型

```
prisma/schema.prisma
// This is your Prisma schema file,
// learn more about it in the docs: https://pris.ly/d/prisma-schema

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

// @id 主键
// @default(autoincrement()) 指定默认值是自增的数字
// @unique 指定唯一约束
// @relation 一对多关联，通过 authorId 关联到 User 的 id 字段
model User {
  id        Int       @id@default(autoincrement())
  username  String
  age       Int
  userType  String@default("user")
  email     String@unique
  sort      Int
  posts     Post[]
}

model Post {
  id        Int       @id@default(autoincrement())
  title     String
  content   String?
  published Boolean@default(false)
  author    User      @relation(fields: [authorId], references: [id])
  authorId  Int
}
```

#### **创建数据库表**

使用 `Prisma Migrate` 运行迁移以创建数据库表

```
npx prisma migrate dev --name init
```

执行上述命令后，它会在项目根目录下 `prisma/migrations` 生成并执行建表 `sql` 文件，并在 `prisma` 目录下创建 `dev.db` 文件

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728611720648-1.webp)

使用 `Navicat` 软件连接 `dev.db` 文件，就能看到 `User` 和 `Post` 两张数据库表

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728611720648-2.webp)

#### **配置环境**

如在渲染进程中使用 `prisma`，需要在 `vite.config.ts` 中进行如下配置：

```
vite.config.ts
import { defineConfig } from'vite'
import vue from'@vitejs/plugin-vue'
import electron from'vite-plugin-electron'
import renderer from'vite-plugin-electron-renderer'

// https://vitejs.dev/config/
exportdefault defineConfig({
  plugins: [
    vue(),
    electron(
      {
        entry: 'src/background.ts',
        onstart: (options) => {
          options.startup()
        },
      }  
    ),
    // 在渲染进程中使用 electron api
    renderer({
      resolve: {
        'electron-store': { type: 'esm' },
         sqlite3: { type: 'cjs' },
        'fs-extra': { type: 'esm' },
        '@prisma/client': { type: 'esm' }
      }
    })
  ],
})
```

#### **基本使用**

```
<script setup lang="ts">
  import { PrismaClient } from '@prisma/client'

  const prisma = new PrismaClient()

  type User = {
    id: number
    username: string
    age: number
    userType: string
    email: string
    sort: number
  }
  
  // 添加数据
  async function addUser(user: Omit<User, 'id'>) {
    await prisma.user.create({ data: user })
  }

  // 删除数据
  async function delUser(id: number) {
    await prisma.user.delete({ where: { id } })
  }
  
  // 修改数据
  async function updateUser(user: Partial<User>) {
    await prisma.user.update({
      where: { id: user.id },
      data: user
    })
  }

  // 获取数据
  async function getUser(id: number) {
    return await prisma.user.findUnique({ where: { id } })
  }

  // 查询数据列表
  async function getUserList() {
    return await prisma.user.findMany()
  }

  // 关联查询
  async function getUserWithPosts(id: number) {
    return await prisma.user.findUnique({
      where: { id },
      // 关联查询该用户的 posts
      include: { posts: true }
    })
  }

  async function main() {
    await addUser({ username: 'kunkun', age: 18, userType: 'user', email: 'kunkun@qq.com', sort: 10 })
    await addUser({ username: '唔西迪西', age: 20, userType: 'admin', email: 'wuxidxi@qq.com', sort: 12 })
    await prisma.user.create({
      data: {
        username: '玛卡巴卡',
        age: 25,
        userType: 'user',
        email: 'makabaka@qq.com',
        sort: 14,
        posts: {
          create: [
            {
              title: '标题1',
              content: '内容1',
              published: true
            },
            {
              title: '标题2',
              content: '内容2',
              published: false
            }
          ]
        }
      }
    })
    
    await delUser(2)
    
    await updateUser({ id: 1, username: '坤坤', userType: 'admin' })
    
    let user = await getUser(1)
    console.log(user)

    let users = await getUserList()
    console.log(users)

    let userWithPosts = await getUserWithPosts(3)
    console.log(userWithPosts)
  }
  main()
</script>
```

`Prisma ORM` 附带一个内置 `GUI`，用于查看和编辑数据库中的数据，使用如下命令：

```
npx prisma studio
```

则会自动在浏览器中打开链接：http://localhost:5555

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728611720648-3.webp)

#### **动态设置路径**

一般将用户的个性化数据存储在 `app.getPath('userData')` 目录下，可以通过如下设置动态的进行文件路径

```
background.ts
import { app } from'electron'
import path, { resolve } from'path'
import fs from'fs'

const setDBPath = (dir: string, fileName: string) => {
  // 获取用户数据目录并设置数据存储路径
  let dbPath = 'file:' + resolve(app.getPath('userData'), dir, fileName)
  // 获取 .env 文件路径
  let envPath = resolve(process.cwd(), '.env')
  // 读取 .env 文件内容
  let envContent = fs.readFileSync(envPath, 'utf-8')
  // 替换以 DATABASE_URL 开头的变量
  let updateContent = envContent.replace(/DATABASE_URL=.*$/m, `DATABASE_URL=${dbPath}`)
  // 原始内容与更新后的内容不一致，则写入
  if (updateContent !== envContent) {
    fs.writeFileSync(envPath, updateContent)
  }
}

app.whenReady().then(() => {
  setDBPath('db', 'dev.db')
  createWindow()
})
```

## **浏览器技术存储**

```
Electron` 集成了 `Node` 和 `Chromium` 两大环境，因此，浏览器存储技术也适用于 `Electron
```

![图片](https://bitbucket.org/xlc520/blogasset/raw/main/images/2024/640-1728611720648-4.webp)

### **Local Storage**

`Local Storage` 可以存储的数据量也不大，各浏览器限额不同，但都不会超过 `10MB`。它只能被客户端脚本访问，不会自动随浏览器请求被发送给服务端，服务端也无权设置
`Local Storage` 的数据。它存储的数据没有过期时间，除非手动删除，不然数据会一直保存在客户端。

```
// 设置值
localStorage.setItem('name', 'kunkun')

// 获取值
let username = localStorage.getItem('name')
console.log(username)

// 删除值
localStorage.removeItem('name')

// 清空所有值
localStorage.clear()
```

### **Session Storage**

`Session Storage` 的特性大多与 `Local Storage` 相同，唯一不同的是浏览器关闭后 `Session Storage`
里的数据将被自动清空，因此Electron应用在需要保存程序运行期的临时数据时常常会用到它。

```
// 设置值
sessionStorage.setItem('nikname', 'ikun')

// 获取值
let nickname = sessionStorage.getItem('nikname')
console.log(username)

// 删除值
sessionStorage.removeItem('nikname')

// 清空所有值
sessionStorage.clear()
```

### **IndexedDB**

`IndexedDB`是一个基于 `JavaScript` 的面向对象的数据库，开发者可以用它存储大量的数据，在 `Electron` 应用内它的存储容量限制与用户的磁盘容量有关。
`IndexedDB` 也只能被客户端脚本访问，不随浏览器请求被发送到服务端，服务端也无权利访问 `IndexedDB` 内的数据，它存储的数据亦无过期时间。
`IndexedDB` 是非关系型数据库，不支持 `sql` 查询语句。

#### **基本使用**

```
let db: IDBDatabase
// 打开数据库，指定数据库名称和版本号，版本号为整数，若指定的数据库不存在，就会新建数据库
const request: IDBOpenDBRequest = indexedDB.open('database', 1)

// 第一次打开数据库，或者数据版本发送变化时触发
// 第一次打开数据库，会先触发 onupgradeneeded ，然后触发 onsuccess
request.onupgradeneeded = (event: any) => {
  console.log('新建数据库，或者版本升级时触发', event)
  db = event.target.result
  let objectStore: IDBObjectStore
  // 判断数据库中是否存在名为 user 的对象存储
  if (!db.objectStoreNames.contains('user')) {
    // 创建对象存储对象 user，设置主键自增
    objectStore = db.createObjectStore('user', { autoIncrement: true })
    
    // 指定主键为 id，第一条记录的 id 为 1
    // objectStore = db.createObjectStore('user', { keyPath: 'id' })
    
    // 创建索引，索引名为 name，设置唯一索引
    // objectStore.createIndex 的三个参数分别为 索引名称、索引所在的属性、配置对象（该属性是否可以重复）
    objectStore.createIndex('name', 'name', { unique: true })
  }
}

// 数据库打开失败
request.onerror = (err) => {
  console.log('数据库打开失败', err)
}

// 数据库打开成功
request.onsuccess = (event: any) => {
  console.log('数据库打开成功', event)
  db = request.result
}

// 上一次数据库连接还未关闭
request.onblocked = (event) => {
  console.log('数据库被另一个连接打开，且阻止了当前连接继续操作')
}

// 3 秒后关闭数据库
setTimeout(() => {
  db.close()
}, 3000)
```

读写数据，`IndexedDB` 的读写操作都是异步的，通过监听请求的 `onsuccess` 和 `onerror` 事件来获取读写的结果，对数据库进行读写之前，必须创建数据库事务

```
let db: IDBDatabase
const request: IDBOpenDBRequest = indexedDB.open('database', 1)

// 数据库打开失败
request.onerror = (err) => {
  console.log('数据库打开失败', err)
}

// 数据库打开成功
request.onsuccess = (event: any) => {
  console.log('数据库打开成功', event)
  db = request.result
  // 创建事务，指定数据库对象存储名称，操作模式为读写模式
  const transaction = db.transaction(['user'], 'readwrite')
  // 获取对象存储
  const store = transaction.objectStore('user')

  // 添加数据
  addUser({ username: 'kunkun', age: 18, userType: 'user', email: 'kunkun@qq.com', sort: 10 })
  addUser({ username: '唔西迪西', age: 20, userType: 'admin', email: 'wuxidxi@qq.com', sort: 12 })
  addUser({ username: '玛卡巴卡', age: 25, userType: 'user', email: 'makabaka@qq.com', sort: 14 })

  getDataByKey('ikun')

  // 删除数据
  delUser('ikun')

  // 清空所有数据
  clearUser()

  // 更新数据
  updateUser(1, { username: '坤坤', age: 18, userType: 'admin', email: 'kunkun@qq.com', sort: 10 })

  // 根据索引查询数据
  getUserByKey(1)
  getUserByIndex('username', 'kunkun')

  // 获取全部数据
  getUserList()
}

// 第一次打开数据库，或者数据版本发送变化时触发
// 第一次打开数据库，会先触发 onupgradeneeded ，然后触发 onsuccess
request.onupgradeneeded = (event: any) => {
  console.log('新建数据库，或者版本升级时触发', event)
  let db: IDBDatabase = event.target.result
  let objectStore: IDBObjectStore
  // 判断数据库中是否存在名为 user 的对象存储
  if (!db.objectStoreNames.contains('user')) {
    // 创建对象存储对象 user，设置主键自增
    objectStore = db.createObjectStore('user', { autoIncrement: true })
    // 指定主键为 id，第一条记录的 id 为 1
    // objectStore = db.createObjectStore('user', { keyPath: 'id' })
    // 创建索引，索引名为 username，设置唯一索引
    // objectStore.createIndex 的三个参数分别为 索引名称、索引所在的属性、配置对象（该属性是否可以重复）
    objectStore.createIndex('username', 'username', { unique: true })
  }
}


// 添加数据
function addUser(value: any, key?: IDBValidKey) {
  const transaction = db.transaction(['user'], 'readwrite')
  const store = transaction.objectStore('user')
  const request = store.add(value, key)

  request.onsuccess = (event) => {
    console.log('添加数据成功', event)
  }

  request.onerror = (err) => {
    console.log('添加数据失败', err)
  }
}

// 根据索引删除数据
function delUser(key: IDBValidKey | IDBKeyRange) {
  const transaction = db.transaction(['user'], 'readwrite')
  const store = transaction.objectStore('user')

  const request = store.delete(key)
  request.onsuccess = (event) => {
    console.log(`根据索引${key}删除数据成功`, event)
  }

  request.onerror = (err) => {
    console.log(`根据索引${key}删除数据失败`, err)
  }
}

// 清空数据所有数据
function clearUser() {
  const transaction = db.transaction(['user'], 'readwrite')
  const store = transaction.objectStore('user')
  const request = store.clear()

  request.onsuccess = (event) => {
    console.log('清空数据成功', event)
  }

  request.onerror = (err) => {
    console.log('清空数据失败', err)
  }
}

// 修改数据 - value 会被整体替换掉
function updateUser(key: IDBValidKey, value: any) {
  const transaction = db.transaction(['user'], 'readwrite')
  const store = transaction.objectStore('user')
  const request = store.put(value, key)

  request.onsuccess = (event) => {
    console.log(`根据索引${key}更新数据成功`, event)
  }

  request.onerror = (err) => {
    console.log(`根据索引${key}更新数据失败`, err)
  }
}

// 根据索引查询数据
function getUserByKey(key: IDBValidKey | IDBKeyRange) {
  const transaction = db.transaction(['user'], 'readwrite')
  const store = transaction.objectStore('user')
  const request = store.get(key)

  request.onsuccess = (event) => {
    console.log(`根据索引${key}获取数据成功`, (event.target asany).result)
  }

  request.onerror = (err) => {
    console.log(`根据索引${key}获取数据失败`, err)
  }
}

// 根据索引查询数据，自定义索引
function getUserByIndex(name: string, key: IDBValidKey | IDBKeyRange) {
  const transaction = db.transaction(['user'], 'readwrite')
  const store = transaction.objectStore('user')
  const index = store.index(name)
  const request = index.get(key)

  request.onsuccess = (event) => {
    console.log(`根据索引${key}获取数据成功`, (event.target asany).result)
  }

  request.onerror = (err) => {
    console.log(`根据索引${key}获取数据失败`, err)
  }
}

// 获取全部数据
function getUserList() {
  const transaction = db.transaction(['user'], 'readwrite')
  const store = transaction.objectStore('user')
  const request = store.getAll()

  request.onsuccess = (event) => {
    console.log('获取全部数据成功', (event.target asany).result)
  }

  request.onerror = (err) => {
    console.log('获取全部数据失败', err)
  }
}
```

#### **使用Dexie**

`Dexie.js` 是一个对浏览器 `indexedDb` 的包装库，能够让开发者操作 `indexedDb` 变得更加简单和有趣

官网：https://dexie.org

安装依赖

```
pnpm i dexie
```

基本使用

```
import Dexie, { type EntityTable } from'dexie'

interface User {
  id: number
  username: string
  age: number
  userType: string
  email: string
  sort: number
}

const db = new Dexie('database') as Dexie & {
  // id 是主键
  user: EntityTable<User, 'id'>
}

db.version(1).stores({
  // 设置主键为 id 自增
  user: '++id'
})

// 添加数据
asyncfunction addUser(user: Omit<User, 'id'>) {
  await db.user.add(user)
}

addUser({ username: 'kunkun', age: 18, userType: 'user', email: 'ikun@qq.com', sort: 10 })
addUser({ username: '唔西迪西', age: 20, userType: 'admin', email: 'wuxidxi@qq.com', sort: 12 })

// 删除数据
asyncfunction delUser(id: number) {
  await db.user.delete(id)
}

delUser(2)

// 清空数据
asyncfunction clearUser() {
  await db.user.clear()
}

clearUser()

// 修改数据
asyncfunction updateUser(id: number, user: Partial<Omit<User, 'id'>>) {
  await db.user.update(id, user)
}

updateUser(1, { username: '坤坤', userType: 'admin' })

// 根据 id 获取用户数据
asyncfunction getUser(id: number) {
  returnawait db.user.get(id)
}

getUser(1)

// 获取所有数据
asyncfunction getUserList() {
  returnawait db.user.toArray()
}

// 删除数据库
asyncfunction delDB() {
  db.close()
  await db.delete()
}

delDB()
```

### **Web SQL**

`WebSQL` 是一种为浏览器提供的数据库技术，它最大的特点就是使用 `SQL` 指令来操作数据。已废弃，了解即可。

### **Cookie**

`Cookie` 用于存储少量的数据，最多不能超过 `4KB`，用来服务于客户端和服务端间的数据传输，一般情况下浏览器发起的每次请求都会携带同域下的
`Cookie` 数据，大多数时候服务端程序和客户端脚本都有访问`Cookie` 的权力。开发者可以设置数据保存的有效期，当 `Cookie`
数据超过有效期后将被浏览器自动删除。

```
// 获取 cookie
let cookie = document.cookie

// 设置 cookie
document.cookie = 'name=kunkun'
document.cookie = 'age=18'
console.log(cookie) // name=kunkun; age=18

// 删除 cookie
document.cookie = 'age=18; expires=' + newDate(0).toUTCString()
```

<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
