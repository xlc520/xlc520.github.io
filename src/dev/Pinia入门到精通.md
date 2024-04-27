---
author: xlc520
title: Pinia入门到精通
excerpt: 
description: 
date: 2023-11-08
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# Pinia 入门到精通

## 一. 简介

### **1. 什么 Pinia？**

Pinia 开始于大概 2019 年，最初是作为一个实验为 Vue 重新设计状态管理，让它用起来像组合式 API（Composition
API）。从那时到现在，最初的设计原则依然是相同的，并且目前同时兼容 Vue2、Vue3，也并不要求你使用 Composition
API；Pinia 本质上依然是一个状态管理的库，用于跨组件、页面进行状态共享（这点和 Vuex、Redux 一样）；

详见官网：<https://pinia.vuejs.org/zh/introduction.html>

### **2. pinia 和 vuex 的区别？**

**(1). 有了 vuex，为什么还要推出 pinia？**

A. Pinia 最初是为了探索 Vuex 的下一次迭代会是什么样子，结合了 Vuex 5 核心团队讨论中的许多想法；

B. 最终，团队意识到 Pinia 已经实现了 Vuex5 中大部分内容，所以最终决定用 Pinia 来替代 Vuex；

C. 与 Vuex 相比，Pinia 提供了一个更简单的 API，具有更少的仪式，提供了 Composition-API 风格的 API；

D. 最重要的是，在与 TypeScript 一起使用时具有可靠的类型推断支持；

**(2). 与 vuex 相比，pinia 的优势有哪些？**

A. mutations 不再存在，在 store 中，无论是在**getter 或 actions 中**，都可以**直接通过 this(代表 store 实例)来直接修改
state 中的数据
**。

B. 更友好的 TypeScript 支持，Vuex 之前对 TS 的支持很不友好；

C. 不再有 modules 的嵌套结构，不再有命名空间的概念了。你可以灵活使用每一个 store，它们是通过扁平化的方式来相互使用的。

**注：在 pinia 里，扁平化定义多个 store 即可，store 与 store 之间直接通过 import 引入，相互调用即可。**

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/1031302-20230115083853292-561688627.png)

### **3. 核心总结**

![img](https://bitbucket.org/xlc520/blogasset/raw/main/images3/1031302-20230115115754024-1151644537.png)

### **4. 快速入门**

**(1). 引入和注册**

先通过**【npm install pinia】**安装，然后创建一个 pinia 实例(根 store)并将其传递给应用：

```javascript
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```

**(2). 定义 store**

A. defineStore 第一个参数，比如这里的 “role”， 是你的应用中 Store 的**唯一 ID，不能重复**；Pinia 使用它来将 store 连接到 *
*devtools** 调试工具 **【与调用无关】**

B. 对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 **`use` 开头 → 中间为 store 的名称 →
以 `Store`
结尾**。(比如 `useUserStore`，`useRoleStore`，`useProductStore`)

C.  `state` 是 store 的数据 (`data`)，`getters` 是 store 的计算属性 (`computed`)，而 `actions` 则是方法 (`methods`)。

```javascript
import { defineStore } from 'pinia'

export const useRolerStore = defineStore('role', {
  state: () => ({ myCount: 0 }),
  getters: {
    myDouble: (state) => state.myCount * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
```

**(3). 调用**

A. 引入上述定义的 Store，进行使用即可。

B. 这里返回的变量名称，命名规则，**一般为：去掉前面的 use，保留后面的部分 （比如：userStore、roleStore）**。

C. state、getter、action 中的属性或方法都**直接通过 roleStore.xxx 的形式直接调用即可**

D. 至于解构、修改的几种方式，详见后面

```javascript
<script setup>
import useRoleStore from "@/stores/role";

// 获取声明的pinia实例(这里的变量命名，通常是去掉use保留后面的部分)
const roleStore = useRoleStore();

//总结： state、getter、action中的属性或方法都直接通过 roleStore.xxx 的形式直接调用即可

//1. 获取store中的数据
console.log("---------------1. 获取store中的数据----------------");
console.log(`myCount：${roleStore.myCount}`);


//2. 获取getter中的数据
console.log("---------------2. 获取store中的数据----------------");
console.log(`myDouble：${roleStore.myDouble}`);


// 3. 获取action中的方法
console.log("---------------3. 获取store中的数据----------------");
const myTest = () => {
 roleStore.increase();
};
</script>
```

## 二. state

### **1. 作用**

(1). state 主要是用来进行数据存储的。

(2). state 被定义为一个返回初始状态的函数，可以有如下两种写法

**A. 箭头函数+return**

```javascript
const useStore = defineStore('storeId', {
  // 为了完整类型推理，推荐使用箭头函数
  state: () => {
    return {
      // 所有这些属性都将自动推断出它们的类型
      count: 0,
      name: 'Eduardo',
    }
  },
})
```

**B. 省略 return，简化写法**

```javascript
const useStore = defineStore('storeId', {
  // 省略return，简化写法
  state: () =>({
      count: 0,
      name: 'Eduardo',
  }),
})
```

(3). state 代码分享

```javascript
import { defineStore } from "pinia";

const useUser1Store = defineStore("user1", {
 // 1. 用来存放各种变量
 state: () => ({
  myNum: 100,
  myFriends: [
   { id: 1, name: "ypf1" },
   { id: 2, name: "ypf2" },
   { id: 3, name: "ypf3" },
  ],
 }),
});

export default useUser1Store;
```

### **2. 调用**

**总结：首先实例化 store 实例，比如这里的 user1Store，然后无论是在`<script>` or `<template>`中，直接通过`user1Store.xxx`
，即可调用`state`中的数据。**

(1). 在`<script setup>`中调用

```javascript
<script setup>
import useUser1Store from "@/stores/user1";

// 获取声明的pinia实例(这里的变量命名，通常是去掉use保留后面的部分)
const user1Store = useUser1Store();

//总结： state、getter、action中的属性或方法都直接通过 user1Store.xxx 的形式直接调用即可
//1. 获取store中的数据
console.log("---------------1. 获取store中的数据----------------");
console.log(`myNum：${user1Store.myNum}`);
console.log(`myFriends：${user1Store.myFriends}`);

</script>
```

(2). 在 template 模板中调用

```html
<template>
 <div>
  <h2>1. 获取store中的数据</h2>
  <div>
   <div>myNum：{{ user1Store.myNum }}</div>
   <div>
    myFriends：
    <ul>
     <li v-for="(item, index) in user1Store.myFriends">
      id:{{ item.id }} -- name:{{ item.name }}
     </li>
    </ul>
   </div>
  </div>
 </div>
</template>
<script setup>
import useUser1Store from "@/stores/user1";

// 获取声明的pinia实例(这里的变量命名，通常是去掉use保留后面的部分)
const user1Store = useUser1Store();

</script>
```

## 三. getter

### **1. 说明**

**(1). getter 相当于 store 的计算属性，即对 state 中数据加工处理后，进行返回使用。**

**(2). getter 中如何调用 state 中的数据呢？**

**方案 1：第一个参数就是 state**

```javascript
getters: {
  //2.1 调用state中的数据 (第一个参数就是state  或者 使用this关键字)
  doubleNum(state) {
   // 这里的this就是store实例
   return state.myNum + this.myNum;
  }
 },
```

**方案 2： 使用 this 关键字，这里的 this 相当于 store 实例，可以调用 state、getters、actions 中的任何数据 or 方法。**

```javascript
getters: {
  //2.1 调用state中的数据 (第一个参数就是state  或者 使用this关键字)
  doubleNum(state) {
   // 这里的this就是store实例
   return state.myNum + this.myNum;
  }
 },
```

**(3). 如何向 getter 传递参数？**

需要 getter 中返回一个 function 函数

```javascript
getters: {
  //2.3 返回一个函数 (根据id查找数据)
  getFriendById(state) {
   return function (id) {
    let item = state.myFriends.find(item => item.id === id);
    return item;
   };
   // 简化写法
   // return id => state.myFriends.find(item => item.id === id);
  },
 },
```

**(4). 如何调用其它 store 中的 state 呢？**

**引入其它的 store，实例化调用即可。**

```javascript
import { defineStore } from "pinia";
import useRole1Store from "./role1";

const useUser1Store = defineStore("user1", {
 // 1. 用来存放各种变量
 state: () => ({
  myNum: 100,
  myFriends: [
   { id: 1, name: "ypf1" },
   { id: 2, name: "ypf2" },
   { id: 3, name: "ypf3" },
  ],
 }),
 // 2. 对state中的数据进行加工处理(相当于computed)
 getters: {
  // 2.4 获取别的getter中的数据
  getTotalNum(stata) {
   let role1Store = useRole1Store();
   return role1Store.myNum + stata.myNum;
  },
 },
});
```

**(5). 分享完整代码**

role1 中代码：

```javascript
import { defineStore } from "pinia";
const useRole1Store = defineStore("role1", {
 // 1. 用来存放各种变量
 state: () => ({
  myNum: 300,
 }),
});

export default useRole1Store;
```

### **2. 调用**

**总结：首先实例化 store 实例，比如这里的 user1Store，然后无论是在`<script>` or `<template>`中，直接通过`user1Store.xxx`
，即可调用`getters`中的数据。**

(1). 在`<script setup>` 中调用

(2). 在 template 模板中调用

```html
<template>
 <div>
  <h2>2. 获取getter中的数据</h2>
  <div>
   <div>doubleNum：{{ user1Store.doubleNum }}</div>
   <div>doubleNumAddOne：{{ user1Store.doubleNumAddOne }}</div>
   <div>getFriendById：{{ user1Store.getFriendById(1) }}</div>
   <div>getTotalNum：{{ user1Store.getTotalNum }}</div>
  </div>
 </div>
</template>

<script setup>
import useUser1Store from "@/stores/user1";

// 获取声明的pinia实例(这里的变量命名，通常是去掉use保留后面的部分)
const user1Store = useUser1Store();

//2. 获取getter中的数据
console.log("---------------2. 获取store中的数据----------------");
console.log(`doubleNum：${user1Store.doubleNum}`);
console.log(`doubleNumAddOne：${user1Store.doubleNumAddOne}`);
console.log(`getFriendById：${user1Store.getFriendById(1)}`);
console.log(`getTotalNum：${user1Store.getTotalNum}`);

</script>
```

## 四. action

### **1. 说明**

(1). 用来处理一些业务逻辑，可以通过 this 关键字，调用该 store 中的 state、getter、action 中所有属性 或 方法。

(2).  **`action` 可以是异步的**，你可以在它们里面 `await` 调用任何 API，以及其他 action！

```javascript
export const useUsers = defineStore('users', {
  state: () => ({
    userData: null,
  }),
  actions: {
    async registerUser(login, password) {
      try {
        this.userData = await api.post({ login, password })
      } catch (error) {
        // 让表单组件显示错误
        return error
      }
    },
  },
})
```

### **2. 调用**

**总结：首先实例化 store 实例，比如这里的 user1Store，然后无论是在`<script>`or`<template>`中，直接通过`user1Store.xxx`
，即可调用`actions`中的方法。**

(1). 在`<script setup>`中调用

(2). 在 template 模板中调用

```html
<template>
 <div>
  <h2>3. 调用action中的方法</h2>
  <div>
   <div><button @click="user1Store.increase">increase()</button></div>
   <div>
    <button @click="user1Store.increaseNum(10)">increaseNum(10)</button>
   </div>
  </div>
 </div>
</template>

<script setup>
import useUser1Store from "@/stores/user1";
    
// 获取声明的pinia实例(这里的变量命名，通常是去掉use保留后面的部分)
const user1Store = useUser1Store();

// 3. 获取action中的方法
console.log("---------------3. 获取store中的数据----------------");
const myTest = () => {
 user1Store.increase();
 user1Store.increaseNum(100);
};
</script>

<style scoped></style>
```

## 五. 常用 Api

### **1. 解构相关**

直接解构出来的 state 中变量不支持响应式，这里需要借助 vue 的**toRefs** 或者 pinia 的**storeToRefs**实现解构后的响应式

```javascript
<script setup>
import useUser1Store from "@/stores/user1";
import { toRefs } from "@vue/reactivity";
import { storeToRefs } from "pinia";
let user1Store = useUser1Store();
// 1. 解构相关
// let { myNum } = user1Store; //直接解构出来的，不支持响应式
// let { myNum } = toRefs(user1Store); //使用toRefs，支持响应式
let { myNum } = storeToRefs(user1Store); //使用storeToRefs，支持响应式
const Test1 = () => {
 user1Store.myNum++;
};

</script>
```

### **2. 修改 state 中的值**

可以直接修改 或者 调用`$patch`方法，可以同时修改多个对象

```javascript
// 2. 修改state中的值
//写法1：直接修改即可
const Test2 = () => {
 // 直接修改即可
 user1Store.myNum += 10;
};
// 写法2：使用 $patch方法，可以同时修改多个对象 [了解]
const Test3 = () => {
 user1Store.$patch({
  myNum: 10086,
  myFriends: [],
 });
};
```

### **3. 重置 `$reset()`方法将状态 重置 到其初始值**

调用`$reset`方法，可以将 state 中的数据重置为初始化的状态。

```javascript
// 3. 重置 $reset() 方法将状态 重置 到其初始值
const Test4 = () => {
 user1Store.$reset();
};
```

### **4. 替换 State**

$state 属性设置为新对象来替换 Store 的整个状态 [了解]

```javascript
const Test5 = () => {
 user1Store.$state = {
  fff1: "ypf1",
  fff2: "ypf2",
 };
};
```

## 六. setup 简化写法

1. 与 Vue 组合式 API 的 setup 函数 相似，我们可以传入一个函数，该函数定义了一些响应式属性和方法，并且返回一个带有我们想暴露出去的属性和方法的对象
2. 在 Setup Store 中：

(1).  `ref()`就是`state` 属性

(2).  `computed()`就是 `getters`

(3).  `function()`就是`actions`

注：Setup store 比 Option Store 带来了更多的灵活性，因为你可以在一个 store 内创建侦听器，并自由地使用任何组合式函数。不过，请记住，使用组合式函数会让
SSR 变得更加复杂。

**3. 这里的 myNum 为 ref 对象，导出去后，不需要再写 .value 了，直接使用 user2Store.myNum 即可**

store 代码：

```javascript
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import useRole2Store from "./role2";

const useUser2Store = defineStore("counter", () => {
 // 1. 下面是state
 let myNum = ref(100);
 let myFriends = ref([
  { id: 1, name: "ypf1" },
  { id: 2, name: "ypf2" },
  { id: 3, name: "ypf3" },
 ]);
 //2. 下面是getters
 let doubleNum = computed(() => myNum.value * 2);
 let doubleNumAddOne = computed(() => myNum.value + 1);
 let getFriendById = computed(() => {
  return function (id) {
   return myFriends.value.find(item => item.id === id);
  };
 });
 let getTotalNum = computed(() => {
  let role2Store = useRole2Store();
  return myNum.value + role2Store.myNum;
 });
 // 3. 下面是action
 function increase() {
  myNum.value++;
 }
 function increaseNum(num) {
  myNum.value += num;
 }

 return {
  myNum,
  myFriends,
  doubleNum,
  doubleNumAddOne,
  getFriendById,
  getTotalNum,
  increase,
  increaseNum,
 };
});

export default useUser2Store;
```

# 教程二

## 1.pinia 是什么？

如果你学过 Vue2，那么你一定使用过 Vuex。我们都知道 Vuex 在 Vue2 中主要充当状态管理的角色，所谓状态管理，简单来说就是一个存储数据的地方，存放在
Vuex 中的数据在各个组件中都能访问到，它是 Vue 生态中重要的组成部分。

既然 Vuex 那么重要，那么在 Vue3 中岂能丢弃！

在 Vue3 中，可以使用传统的 Vuex 来实现状态管理，也可以使用最新的 pinia 来实现状态管理，我们来看看官网如何解释 pinia 的。

**官网解释：**

> Pinia 是 Vue 的存储库，它允许您跨组件/页面共享状态。

从上面官网的解释不难看出，pinia 和 Vuex 的作用是一样的，它也充当的是一个存储数据的作用，存储在 pinia 的数据允许我们在各个组件中使用。

实际上，pinia 就是 Vuex 的升级版，官网也说过，为了尊重原作者，所以取名 pinia，而没有取名 Vuex，所以大家可以直接将 pinia 比作为
Vue3 的 Vuex。

## 2.为什么要使用 pinia？

很多小伙伴内心是抗拒学习新东西的，比如我们这里所说的 pinia，很多小伙伴可能就会抛出一系列的疑问：为什么要学习 pinia？pinia
有什么优点吗？既然 Vue3 还能使用 Vuex 为什么我还要学它？……

针对上面一系列的问题，我相信很多刚开始学习 pinia
的小伙伴都会有，包括我自己当初也有这个疑问。当然，这些问题其实都有答案，我们不可能平白无故的而去学习一样东西吧！肯定它有自己的优点的，所以我们这里先给出
pinia 的优点，大家心里先有个大概，当你熟练使用它之后，在会过头来看这些优点，相信你能理解。

**优点：**

- Vue2 和 Vue3 都支持，这让我们同时使用 Vue2 和 Vue3 的小伙伴都能很快上手。
- pinia 中只有 state、getter、action，抛弃了 Vuex 中的 Mutation，Vuex 中 mutation 一直都不太受小伙伴们的待见，pinia
  直接抛弃它了，这无疑减少了我们工作量。
- pinia 中 action 支持同步和异步，Vuex 不支持
- 良好的 Typescript 支持，毕竟我们 Vue3 都推荐使用 TS 来编写，这个时候使用 pinia 就非常合适了
- 无需再创建各个模块嵌套了，Vuex 中如果数据过多，我们通常分模块来进行管理，稍显麻烦，而 pinia 中每个 store 都是独立的，互相不影响。
- 体积非常小，只有 1KB 左右。
- pinia 支持插件来扩展自身功能。
- 支持服务端渲染。

pinia 的优点还有非常多，上面列出的主要是它的一些主要优点，更多细节的地方还需要大家在使用的时候慢慢体会。

## 3.准备工作

想要学习 pinia，最好有 Vue3 的基础，明白组合式 API 是什么。如果你还不会 Vue3，建议先去学习 Vue3。

本篇文章讲解 pinia 时，全部基于 Vue3 来讲解，至于 Vue2 中如何使用 pinia，小伙伴们可以自行去 pinia 官网学习，毕竟 Vue2 中使用
pinia 的还是少数。

**项目搭建：**

我们这里搭建一个最新的 Vue3 + TS + Vite 项目。

**执行命令：**

```shell
npm create vite@latest my-vite-app --template vue-ts
```

**运行项目：**

```shell
npm install
npm run dev
```

删除 app.vue 中的其它无用代码，最终页面如下：

## 4.pinia 基础使用

## 4.1 安装 pinia

和 vue-router、vuex 等一样，我们想要使用 pinia 都需要先安装它，安装它也比较简单。

**安装命令：**

```shell
yarn add pinia
# 或者使用 npm
npm install pinia
```

安装完成后我们需要将 pinia 挂载到 Vue 应用中，也就是我们需要创建一个根存储传递给应用程序，简单来说就是创建一个存储数据的数据桶，放到应用程序中去。

修改 main.js，引入 pinia 提供的 createPinia 方法，创建根存储。

**代码如下：**

```typescript
// main.ts

import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
const pinia = createPinia();


const app = createApp(App);
app.use(pinia);
app.mount("#app");
```

## 4.2 创建 store

store 简单来说就是数据仓库的意思，我们数据都放在 store 里面。当然你也可以把它理解为一个公共组件，只不过该公共组件只存放数据，这些数据我们其它所有的组件都能够访问且可以修改。

我们需要使用 pinia 提供的 defineStore()方法来创建一个 store，该 store 用来存放我们需要全局使用的数据。

首先在项目 src 目录下新建 store 文件夹，用来存放我们创建的各种 store，然后在该目录下新建 user.ts 文件，主要用来存放与 user
相关的 store。

**代码如下：**

```typescript
/src/store/user.ts

import { defineStore } from 'pinia'

// 第一个参数是应用程序中 store 的唯一 id
export const useUsersStore = defineStore('users', {
  // 其它配置项
})
```

创建 store 很简单，调用 pinia 中的 defineStore 函数即可，该函数接收两个参数：

- name：一个字符串，必传项，该 store 的唯一 id。
- options：一个对象，store 的配置项，比如配置 store 内的数据，修改数据的方法等等。

我们可以定义任意数量的 store，因为我们其实一个 store 就是一个函数，这也是 pinia 的好处之一，让我们的代码扁平化了，这和 Vue3
的实现思想是一样的。

## 4.3 使用 store

前面我们创建了一个 store，说白了就是创建了一个方法，那么我们的目的肯定是使用它，假如我们要在 App.vue 里面使用它，该如何使用呢？

**代码如下：**

```vue
/src/App.vue
<script setup lang="ts">
import { useUsersStore } from "../src/store/user";
const store = useUsersStore();
console.log(store);
</script>
```

使用 store 很简单，直接引入我们声明的 useUsersStore 方法即可，我们可以先看一下执行该方法输出的是什么：

## 4.4 添加 state

我们都知道 store 是用来存放公共数据的，那么数据具体存在在哪里呢？前面我们利用 defineStore 函数创建了一个 store，该函数第二个参数是一个
options 配置项，我们需要存放的数据就放在 options 对象中的 state 属性内。

假设我们往 store 添加一些任务基本数据，修改 user.ts 代码。

**代码如下：**

```vue
export const useUsersStore = defineStore("users", {
  state: () => {
    return {
      name: "小猪课堂",
      age: 25,
      sex: "男",
    };
  },
});
```

上段代码中我们给配置项添加了 state 属性，该属性就是用来存储数据的，我们往 state 中添加了 3 条数据。需要注意的是，state
接收的是一个箭头函数返回的值，它不能直接接收一个对象。

## 4.5 操作 state

我们往 store 存储数据的目的就是为了操作它，那么我们接下来就尝试操作 state 中的数据。

### **4.5.1 读取 state 数据**

读取 state 数据很简单，前面我们尝试过在 App.vue 中打印 store，那么我们添加数据后再来看看打印结果：

这个时候我们发现打印的结果里面多了几个属性，恰好就是我们添加的数据，修改 App.vue，让这几个数据显示出来。

**代码如下：**

```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>姓名：{{ name }}</p>
  <p>年龄：{{ age }}</p>
  <p>性别：{{ sex }}</p>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useUsersStore } from "../src/store/user";
const store = useUsersStore();
const name = ref<string>(store.name);
const age = ref<number>(store.age);
const sex = ref<string>(store.sex);
</script>
```

**输出结果：**

上段代码中我们直接通过 store.age 等方式获取到了 store 存储的值，但是大家有没有发现，这样比较繁琐，我们其实可以用解构的方式来获取值，使得代码更简洁一点。

**解构代码如下：**

```vue
import { useUsersStore } from "../src/store/user";
const store = useUsersStore();
const { name, age, sex } = store;
```

上段代码实现的效果与一个一个获取的效果一样，不过代码简洁了很多。

### **4.5.2 多个组件使用 state**

我们使用 store 的最重要的目的就是为了组件之间共享数据，那么接下来我们新建一个 child.vue 组件，在该组件内部也使用 state 数据。

**child.vue 代码如下：**

```vue
<template>
  <h1>我是child组件</h1>
  <p>姓名：{{ name }}</p>
  <p>年龄：{{ age }}</p>
  <p>性别：{{ sex }}</p>
</template>
<script setup lang="ts">
import { useUsersStore } from "../src/store/user";
const store = useUsersStore();
const { name, age, sex } = store;
</script>
```

child 组件和 app.vue 组件几乎一样，就是很简单的使用了 store 中的数据。

**实现效果：**

这样我们就实现了多个组件同时使用 store 中的数据。

### **4.5.3 修改 state 数据**

如果我们想要修改 store 中的数据，可以直接重新赋值即可，我们在 App.vue 里面添加一个按钮，点击按钮修改 store 中的某一个数据。

**代码如下：**

```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>姓名：{{ name }}</p>
  <p>年龄：{{ age }}</p>
  <p>性别：{{ sex }}</p>
  <button @click="changeName">更改姓名</button>
</template>
<script setup lang="ts">
import child from './child.vue';
import { useUsersStore } from "../src/store/user";
const store = useUsersStore();
const { name, age, sex } = store;
const changeName = () => {
  store.name = "张三";
  console.log(store);
};
</script>
```

上段代码新增了 changeName 方法，改变了 store 中 name 的值，我们点击按钮，看看最终效果：

我们可以看到 store 中的 name 确实被修改了，但是页面上似乎没有变化，这说明我们的使用的 name 不是响应式的。

很多小伙伴可能会说那可以用监听函数啊，监听 store 变化，刷新页面...

其实，pinia 提供了方法给我们，让我们获得的 name 等属性变为响应式的，我们重新修改代码。

**app.vue 和 child.vue 代码修改如下：**

```vue
import { storeToRefs } from 'pinia';
const store = useUsersStore();
const { name, age, sex } = storeToRefs(store);
```

我们两个组件中获取 state 数据的方式都改为上段代码的形式，利用 pinia 的 storeToRefs 函数，将 sstate 中的数据变为了响应式的。

除此之外，我们也给 child.vue 也加上更改 state 数据的方法。

**child.vue 代码如下：**

```vue
<template>
  <h1>我是child组件</h1>
  <p>姓名：{{ name }}</p>
  <p>年龄：{{ age }}</p>
  <p>性别：{{ sex }}</p>
  <button @click="changeName">更改姓名</button>
</template>
<script setup lang="ts">
import { useUsersStore } from "../src/store/user";
import { storeToRefs } from 'pinia';
const store = useUsersStore();
const { name, age, sex } = storeToRefs(store);
const changeName = () => {
  store.name = "小猪课堂";
};
</script>
```

这个时候我们再来尝试分别点击两个组件的按钮，实现效果如下：

当我们 store 中数据发生变化时，页面也更新了！

### 4.5.4 重置 state

有时候我们修改了 state 数据，想要将它还原，这个时候该怎么做呢？就比如用户填写了一部分表单，突然想重置为最初始的状态。

此时，我们直接调用 store 的$reset()方法即可，继续使用我们的例子，添加一个重置按钮。

**代码如下：**

```vue
<button @click="reset">重置store</button>
// 重置store
const reset = () => {
  store.$reset();
};
```

当我们点击重置按钮时，store 中的数据会变为初始状态，页面也会更新。

### 4.5.5 批量更改 state 数据

前面我们修改 state 的数据是都是一条一条修改的，比如 store.name="张三"
等等，如果我们一次性需要修改很多条数据的话，有更加简便的方法，使用 store 的$patch 方法，修改 app.vue 代码，添加一个批量更改数据的方法。

**代码如下：**

```vue
<button @click="patchStore">批量修改数据</button>
// 批量修改数据
const patchStore = () => {
  store.$patch({
    name: "张三",
    age: 100,
    sex: "女",
  });
};
```

有经验的小伙伴可能发现了，我们采用这种批量更改的方式似乎代价有一点大，假如我们 state 中有些字段无需更改，但是按照上段代码的写法，我们必须要将
state 中的所有字段例举出了。

为了解决该问题，pinia 提供的$patch 方法还可以接收一个回调函数，它的用法有点像我们的数组循环回调函数了。

**示例代码如下：**

```vue
store.$patch((state) => {
  state.items.push({ name: 'shoes', quantity: 1 })
  state.hasChanged = true
})
```

上段代码中我们即批量更改了 state 的数据，又没有将所有的 state 字段列举出来。

### 4.5.6 直接替换整个 state

pinia 提供了方法让我们直接替换整个 state 对象，使用 store 的$state 方法。

**示例代码：**

```vue
store.$state = { counter: 666, name: '张三' }
```

上段代码会将我们提前声明的 state 替换为新的对象，可能这种场景用得比较少，这里我就不展开说明了。

## 4.6 getters 属性

getters 是 defineStore 参数配置项里面的另一个属性，前面我们讲了 state 属性。getter 属性值是一个对象，该对象里面是各种各样的方法。大家可以把
getter 想象成 Vue 中的计算属性，它的作用就是返回一个新的结果，既然它和 Vue 中的计算属性类似，那么它肯定也是会被缓存的，就和
computed 一样。

当然我们这里的 getter 就是处理 state 数据。

### **4.6.1 添加 getter**

我们先来看一下如何定义 getter 吧，修改 user.ts。

**代码如下：**

```vue
export const useUsersStore = defineStore("users", {
  state: () => {
    return {
      name: "小猪课堂",
      age: 25,
      sex: "男",
    };
  },
  getters: {
    getAddAge: (state) => {
      return state.age + 100;
    },
  },
});
```

上段代码中我们在配置项参数中添加了 getter 属性，该属性对象中定义了一个 getAddAge 方法，该方法会默认接收一个 state 参数，也就是
state 对象，然后该方法返回的是一个新的数据。

### 4.6.2 使用 getter

我们在 store 中定义了 getter，那么在组件中如何使用呢？使用起来非常简单，我们修改 App.vue。

**代码如下：**

```vue
<template>
  <p>新年龄：{{ store.getAddAge }}</p>
  <button @click="patchStore">批量修改数据</button>
</template>
<script setup lang="ts">
import { useUsersStore } from "../src/store/user";
const store = useUsersStore();
// 批量修改数据
const patchStore = () => {
  store.$patch({
    name: "张三",
    age: 100,
    sex: "女",
  });
};
</script>
```

上段代码中我们直接在标签上使用了 store.gettAddAge 方法，这样可以保证响应式，其实我们 state 中的 name
等属性也可以以此种方式直接在标签上使用，也可以保持响应式。

当我们点击批量修改数据按钮时，页面上的新年龄字段也会跟着变化。

### 4.6.3 getter 中调用其它 getter

前面我们的 getAddAge 方法只是简单的使用了 state 方法，但是有时候我们需要在这一个 getter 方法中调用其它 getter
方法，这个时候如何调用呢？

其实很简单，我们可以直接在 getter 方法中调用 this，this 指向的便是 store 实例，所以理所当然的能够调用到其它 getter。

**示例代码如下：**

```vue
export const useUsersStore = defineStore("users", {
  state: () => {
    return {
      name: "小猪课堂",
      age: 25,
      sex: "男",
    };
  },
  getters: {
    getAddAge: (state) => {
      return state.age + 100;
    },
    getNameAndAge(): string {
      return this.name + this.getAddAge; // 调用其它getter
    },
  },
});
```

上段代码中我们又定义了一个名为 getNameAndAge 的 getter 函数，在函数内部直接使用了 this 来获取 state 数据以及调用其它
getter 函数。

细心的小伙伴可能会发现我们这里没有使用箭头函数的形式，这是因为我们在函数内部使用了 this，箭头函数的 this
指向问题相信大家都知道吧！所以这里我们没有采用箭头函数的形式。

那么在组件中调用的形式没什么变化，代码如下：

```vue
<p>调用其它getter：{{ store.getNameAndAge }}</p>
```

### 4.6.4 getter 传参

既然 getter 函数做了一些计算或者处理，那么我们很可能会需要传递参数给 getter 函数，但是我们前面说 getter 函数就相当于 store
的计算属性，和 vue 的计算属性差不多，那么我们都知道 Vue 中计算属性是不能直接传递参数的，所以我们这里的 getter
函数如果要接受参数的话，也是需要做处理的。

**示例代码：**

```vue
export const useUsersStore = defineStore("users", {
  state: () => {
    return {
      name: "小猪课堂",
      age: 25,
      sex: "男",
    };
  },
  getters: {
    getAddAge: (state) => {
      return (num: number) => state.age + num;
    },
    getNameAndAge(): string {
      return this.name + this.getAddAge; // 调用其它getter
    },
  },
});
```

上段代码中我们 getter 函数 getAddAge 接收了一个参数 num，这种写法其实有点闭包的概念在里面了，相当于我们整体返回了一个新的函数，并且将
state 传入了新的函数。

接下来我们在组件中使用，方式很简单，代码如下：

```vue
 <p>新年龄：{{ store.getAddAge(1100) }}</p>
```

## 4.7 actions 属性

前面我们提到的 state 和 getters 属性都主要是数据层面的，并没有具体的业务逻辑代码，它们两个就和我们组件代码中的 data 数据和
computed 计算属性一样。

那么，如果我们有业务代码的话，最好就是卸载 actions 属性里面，该属性就和我们组件代码中的 methods 相似，用来放置一些处理业务逻辑的方法。

actions 属性值同样是一个对象，该对象里面也是存储的各种各样的方法，包括同步方法和异步方法。

### 4.7.1 添加 actions

我们可以尝试着添加一个 actions 方法，修改 user.ts。

**代码如下：**

```vue
export const useUsersStore = defineStore("users", {
  state: () => {
    return {
      name: "小猪课堂",
      age: 25,
      sex: "男",
    };
  },
  getters: {
    getAddAge: (state) => {
      return (num: number) => state.age + num;
    },
    getNameAndAge(): string {
      return this.name + this.getAddAge; // 调用其它getter
    },
  },
  actions: {
    saveName(name: string) {
      this.name = name;
    },
  },
});
```

上段代码中我们定义了一个非常简单的 actions 方法，在实际场景中，该方法可以是任何逻辑，比如发送请求、存储 token 等等。大家把
actions 方法当作一个普通的方法即可，特殊之处在于该方法内部的 this 指向的是当前 store。

### 4.7.2 使用 actions

使用 actions 中的方法也非常简单，比如我们在 App.vue 中想要调用该方法。

**代码如下：**

```vue
const saveName = () => {
  store.saveName("我是小猪");
};
```

我们点击按钮，直接调用 store 中的 actions 方法即可。

## **5.总结示例代码**

前面的章节中的代码都不完整，主要贴的是主要代码部分，我们这节将我们本篇文章用到的所有代码都贴出来，供大家练习。

**main.ts 代码：**

```vue
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
const pinia = createPinia();


const app = createApp(App);
app.use(pinia);
app.mount("#app");
```

**user.ts 代码：**

```vue
import { defineStore } from "pinia";


// 第一个参数是应用程序中 store 的唯一 id
export const useUsersStore = defineStore("users", {
  state: () => {
    return {
      name: "小猪课堂",
      age: 25,
      sex: "男",
    };
  },
  getters: {
    getAddAge: (state) => {
      return (num: number) => state.age + num;
    },
    getNameAndAge(): string {
      return this.name + this.getAddAge; // 调用其它getter
    },
  },
  actions: {
    saveName(name: string) {
      this.name = name;
    },
  },
});
```

**App.vue 代码：**

```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <p>姓名：{{ name }}</p>
  <p>年龄：{{ age }}</p>
  <p>性别：{{ sex }}</p>
  <p>新年龄：{{ store.getAddAge(1100) }}</p>
  <p>调用其它getter：{{ store.getNameAndAge }}</p>
  <button @click="changeName">更改姓名</button>
  <button @click="reset">重置store</button>
  <button @click="patchStore">批量修改数据</button>
  <button @click="saveName">调用aciton</button>


  <!-- 子组件 -->
  <child></child>
</template>
<script setup lang="ts">
import child from "./child.vue";
import { useUsersStore } from "../src/store/user";
import { storeToRefs } from "pinia";
const store = useUsersStore();
const { name, age, sex } = storeToRefs(store);
const changeName = () => {
  store.name = "张三";
  console.log(store);
};
// 重置store
const reset = () => {
  store.$reset();
};
// 批量修改数据
const patchStore = () => {
  store.$patch({
    name: "张三",
    age: 100,
    sex: "女",
  });
};
// 调用actions方法
const saveName = () => {
  store.saveName("我是小猪");
};
</script>
```

**child.vue 代码：**

```vue
<template>
  <h1>我是child组件</h1>
  <p>姓名：{{ name }}</p>
  <p>年龄：{{ age }}</p>
  <p>性别：{{ sex }}</p>
  <button @click="changeName">更改姓名</button>
</template>
<script setup lang="ts">
import { useUsersStore } from "../src/store/user";
import { storeToRefs } from 'pinia';
const store = useUsersStore();
const { name, age, sex } = storeToRefs(store);
const changeName = () => {
  store.name = "小猪课堂";
};
</script>
```

## 总结

pinia 的知识点很少，如果你有 Vuex 基础，那么学起来更是易如反掌。其实我们更应该关注的是它的函数思想，大家有没有发现我们在
Vue3 中的所有东西似乎都可以用一个函数来表示，pinia 也是延续了这种思想。

所以，大家理解这种组合式编程的思想更重要，pinia 无非就是以下 3 个大点：

- state
- getters
- actions

当然，本篇文章只是讲解了基础使用部分，但是在实际工作中也能满足大部分需求了，如果还有兴趣学习 pinia
的其它特点，比如插件、订阅等等，可以移步官网：pinia 官网(<https://pinia.web3doc.top/)。>
