---
author: xlc520
title: Pinia入门到精通
description: 
date: 2023-11-08
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# Pinia入门到精通

一. 简介

**1. 什么Pinia？**

  Pinia开始于大概2019年，最初是作为一个实验为Vue重新设计状态管理，让它用起来像组合式API（Composition API）。从那时到现在，最初的设计原则依然是相同的，并且目前同时兼容Vue2、Vue3，也并不要求你使用Composition API；Pinia本质上依然是一个状态管理的库，用于跨组件、页面进行状态共享（这点和Vuex、Redux一样）；

   详见官网：https://pinia.vuejs.org/zh/introduction.html

**2. pinia和vuex的区别？**

**(1). 有了vuex，为什么还要推出pinia？**

 A. Pinia 最初是为了探索 Vuex 的下一次迭代会是什么样子，结合了 Vuex 5 核心团队讨论中的许多想法；

 B. 最终，团队意识到Pinia已经实现了Vuex5中大部分内容，所以最终决定用Pinia来替代Vuex；

 C. 与 Vuex 相比，Pinia 提供了一个更简单的 API，具有更少的仪式，提供了 Composition-API 风格的 API； 

 D. 最重要的是，在与 TypeScript 一起使用时具有可靠的类型推断支持；

**(2). 与vuex相比，pinia的优势有哪些？**

  A. mutations 不再存在，在store中，无论是在**getter 或 actions中**，都可以**直接通过this(代表store实例)来直接修改state中的数据**。

  B. 更友好的TypeScript支持，Vuex之前对TS的支持很不友好；

  C. 不再有modules的嵌套结构，不再有命名空间的概念了。你可以灵活使用每一个store，它们是通过扁平化的方式来相互使用的。

  **注：在pinia里，扁平化定义多个store即可，store与store之间直接通过import引入，相互调用即可。**

![img](https://static.xlc520.tk/blogImage/1031302-20230115083853292-561688627.png)

 

**3. 核心总结**

![img](https://static.xlc520.tk/blogImage/1031302-20230115115754024-1151644537.png)

**4. 快速入门**

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

**(2). 定义store**

  A. defineStore 第一个参数，比如这里的 “role”，  是你的应用中 Store 的**唯一 ID，不能重复**；Pinia 使用它来将 store 连接到 **devtools** 调试工具 **【与调用无关】**

  B. 对 `defineStore()` 的返回值进行任意命名，但最好使用 store 的名字，同时以 **`use` 开头 → 中间为 store的名称 → 以 `Store` 结尾**。(比如 `useUserStore`，`useRoleStore`，`useProductStore`)

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

   A. 引入上述定义的Store，进行使用即可。

   B. 这里返回的变量名称，命名规则，**一般为：去掉前面的use，保留后面的部分 （比如：userStore、roleStore）**。

   C. state、getter、action中的属性或方法都**直接通过 roleStore.xxx 的形式直接调用即可**

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

 

二. state

**1. 作用**

(1). state主要是用来进行数据存储的。

(2).  state 被定义为一个返回初始状态的函数，可以有如下两种写法

  **A.  箭头函数+return**

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

  **B. 省略return，简化写法**

```javascript
const useStore = defineStore('storeId', {
  // 省略return，简化写法
  state: () =>({
      count: 0,
      name: 'Eduardo',
  }),
})
```

(3). state代码分享

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

 

**2. 调用**

 **总结：首先实例化store实例，比如这里的user1Store，然后无论是在`<script>` or `<template>`中，直接通过`user1Store.xxx `，即可调用`state`中的数据。**

(1). 在`<script setup> `中调用

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

(2). 在template模板中调用

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

 

三. getter

**1. 说明**

**(1). getter相当于store的计算属性，即对state中数据加工处理后，进行返回使用。**

**(2). getter中如何调用state中的数据呢？**

 **方案1：第一个参数就是state**

```javascript
getters: {
		//2.1 调用state中的数据 (第一个参数就是state  或者 使用this关键字)
		doubleNum(state) {
			// 这里的this就是store实例
			return state.myNum + this.myNum;
		}
	},
```

 **方案2： 使用this关键字，这里的this相当于store实例，可以调用state、getters、actions中的任何数据or方法。**

```javascript
getters: {
		//2.1 调用state中的数据 (第一个参数就是state  或者 使用this关键字)
		doubleNum(state) {
			// 这里的this就是store实例
			return state.myNum + this.myNum;
		}
	},
```

**(3). 如何向getter传递参数？**

  需要getter中返回一个function函数

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

**(4). 如何调用其它store中的state呢？**

  **引入其它的store，实例化调用即可。**

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

role1中代码：

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

 

**2. 调用**

**总结：首先实例化store实例，比如这里的user1Store，然后无论是在`<script>` or `<template>`中，直接通过`user1Store.xxx `，即可调用`getters`中的数据。**

(1). 在`<script setup>` 中调用

(2). 在template模板中调用

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

 

四. action

**1. 说明**

(1). 用来处理一些业务逻辑，可以通过this关键字，调用该store中的state、getter、action中所有属性 或 方法。

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

**2. 调用**

**总结：首先实例化store实例，比如这里的user1Store，然后无论是在`<script> `or` <template>`中，直接通过`user1Store.xxx` ，即可调用`actions`中的方法。**

(1). 在`<script setup> `中调用

(2). 在template模板中调用

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

 

五. 常用Api

**1. 解构相关**

  直接解构出来的state中变量不支持响应式，这里需要借助vue的**toRefs** 或者 pinia的**storeToRefs**实现解构后的响应式

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

 

**2. 修改state中的值**

  可以直接修改 或者 调用` $patch`方法，可以同时修改多个对象

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

 

**3. 重置 `$reset() `方法将状态 重置 到其初始值**

 调用`$reset`方法，可以将state中的数据重置为初始化的状态。

```javascript
// 3. 重置 $reset() 方法将状态 重置 到其初始值
const Test4 = () => {
	user1Store.$reset();
};
```

 

**4. 替换State**

 $state 属性设置为新对象来替换 Store 的整个状态 [了解]

```javascript
const Test5 = () => {
	user1Store.$state = {
		fff1: "ypf1",
		fff2: "ypf2",
	};
};
```

 

六. setup简化写法

1. 与 Vue 组合式 API 的 setup 函数 相似，我们可以传入一个函数，该函数定义了一些响应式属性和方法，并且返回一个带有我们想暴露出去的属性和方法的对象
2. 在 Setup Store 中：

  (1).  `ref() `就是` state` 属性

  (2).  `computed() `就是 `getters`

  (3).  `function() `就是` actions`

  注：Setup store 比 Option Store 带来了更多的灵活性，因为你可以在一个 store 内创建侦听器，并自由地使用任何组合式函数。不过，请记住，使用组合式函数会让 SSR 变得更加复杂。

**3.  这里的myNum为ref对象，导出去后，不需要再写 .value了，直接使用user2Store.myNum即可**

store代码：

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

