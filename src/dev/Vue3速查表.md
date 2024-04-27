---
author: xlc520
title: Vue3速查表
description: 
date: 2024-02-25
category: Java
tag: Java
article: true
timeline: true
icon: java
---



# Vue3速查表

## 入门

### 介绍

Vue 是一套用于构建用户界面的渐进式框架

注意：Vue 3.x 版本对应 Vue Router 4.x 路由版本

### 创建应用

已安装 `16.0` 或更高版本的 Node.js

```
$ npm init vue@latest
```

指令将会安装并执行 create-vue，它是 Vue 官方的项目脚手架工具

```
✔ Project name: … <your-project-name>
✔ Add TypeScript? … No/Yes
✔ Add JSX Support? … No/Yes
✔ Add Vue Router for Single Page Application development? … No/Yes
✔ Add Pinia for state management? … No/Yes
✔ Add Vitest for Unit testing? … No/Yes
✔ Add Cypress for both Unit and End-to-End testing? … No/Yes
✔ Add ESLint for code quality? … No/Yes
✔ Add Prettier for code formatting? … No/Yes

Scaffolding project in ./<your-project-name>...
Done.
```

安装依赖并启动开发服务器

```
$ cd <your-project-name>
$ npm install
$ npm run dev
```

当你准备将应用发布到生产环境时，请运行：

```
$ npm run build
```

此命令会在 `./dist` 文件夹中为你的应用创建一个生产环境的构建版本

### 应用实例

```
import { createApp, ref } from 'vue'

const app = createApp({
  setup() {
    const message = ref("Hello Vue3")
    return {
      message
    }
  }
})
app.mount('#app')
```

挂载应用

```
<div id="app">
  <button @click="count++">
    {{ count }}
  </button>
</div>
```

### 通过 CDN 使用 Vue

```
<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
<div id="app">{{ message }}</div>
<script>
  const { createApp, ref } = Vue
  createApp({
    setup() {
      const message = ref("Hello Vue3")
      return {
        message
      }
    }
  }).mount('#app')
</script>
```

### 使用 ES 模块构建版本

```
<div id="app">{{ message, ref }}</div>
<script type="module">
  import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'
  createApp({
    setup() {
      const message = ref("Hello Vue3")
      return {
        message
      }
    }
  }).mount('#app')
</script>
```

## 模板语法

### 文本插值

```
<span>Message: {{ msg }}</span>
```

使用的是 `Mustache` 语法 (即双大括号)，每次 `msg` 属性更改时它也会同步更新

### 原始 HTML

```
<p>Using text interpolation: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

双大括号`{{}}`会将数据解释为纯文本，使用 `v-html` 指令，将插入 HTML

### Attribute 绑定

```
<div v-bind:id="dynamicId"></div>
```

简写

```
<div :id="dynamicId"></div>
```

### 布尔型 Attribute

```
<button :disabled="isButtonDisabled">
  Button
</button>
```

### 动态绑定多个值

通过不带参数的 `v-bind`，你可以将它们绑定到单个元素上

```
<script setup>
  import comp from "./Comp.vue"
  import {ref} from "vue"
  const a = ref("hello")
  const b = ref("world")
</script>

<template>
  <comp v-bind="{a, b}"></comp>
</template>
```

如果你是使用的 `setup` 语法糖。需要使用 `defineprops` 声名（可以直接使用`a`/`b`）

```
const props = defineProps({
  a: String,
  b: String
})
```

### 使用 JavaScript 表达式

```
{{ number + 1 }}
{{ ok ? 'YES' : 'NO' }}
{{ message.split('').reverse().join('') }}

<div :id="`list-${id}`"></div>
```

### 仅支持表达式(例子都是无效)

```
<!-- 这是一个语句，而非表达式 -->
{{ var a = 1 }}
<!-- 条件控制也不支持，请使用三元表达式 -->
{{ if (ok) { return message } }}
```

### 调用函数

```
<span :title="toTitleDate(date)">
  {{ formatDate(date) }}
</span>
```

### 指令 Directives

```
<p v-if="seen">Now you see me</p>
```

### 参数 Arguments

```
<a v-bind:href="url"> ... </a>
<!-- 简写 -->
<a :href="url"> ... </a>
```

### 绑定事件

```
<a v-on:click="doSomething"> ... </a>
<!-- 简写 -->
<a @click="doSomething"> ... </a>
```

### 动态参数

```
<a v-bind:[attributeName]="url"> ... </a>
<!-- 简写 -->
<a :[attributeName]="url"> ... </a>
```

这里的 `attributeName` 会作为一个 JS 表达式被动态执行

### 动态的事件名称

```
<a v-on:[eventName]="doSomething"> ... </a>
<!-- 简写 -->
<a @[eventName]="doSomething">
```

### 修饰符 Modifiers

```
<form @submit.prevent="onSubmit">
  ...
</form>
.prevent` 修饰符会告知 `v-on` 指令对触发的事件调用 `event.preventDefault()
```

### 指令语法

```
v-on:submit.prevent="onSubmit"
──┬─ ─┬──── ─┬─────  ─┬──────
  ┆   ┆      ┆        ╰─ Value 解释为JS表达式
  ┆   ┆      ╰─ Modifiers 由前导点表示
  ┆   ╰─ Argument 跟随冒号或速记符号
  ╰─ Name 以 v- 开头使用速记时可以省略
```

## 响应式基础

### 声明状态

```
<div>{{ state.count }}</div>
```

------

```
import { defineComponent, reactive } from 'vue';

// `defineComponent`用于IDE推导类型
export default defineComponent({
  // setup 用于组合式 API 的特殊钩子函数
  setup() {
    const state = reactive({ count: 0 });

    // 暴露 state 到模板
    return {
      state
    };
  },
});
```

### 声明方法

```
<button @click="increment">
  {{ state.count }}
</button>
```

------

```
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({ count: 0 });

    function increment() {
      state.count++;
    }

    // 不要忘记同时暴露 increment 函数
    return {
      state,
      increment
    };
  },
})
```

### `<script setup>` setup语法糖

```
<script setup>
import { reactive } from 'vue';

const state = reactive({ count: 0 })

function increment() {
  state.count++
}
</script>

<template>
  <button @click="increment">
    {{ state.count }}
  </button>
</template>
```

**`setup`** 语法糖用于简化代码，尤其是当需要暴露的状态和方法越来越多时

### 用 `ref()` 定义响应式变量

```
reactive`只能用于对象、数组和 `Map`、`Set` 这样的集合类型，对 string、number 和 boolean 这样的原始类型则需要使用`ref
import { ref } from 'vue';

const count = ref(0);

console.log(count); // { value: 0 }
console.log(count.value); // 0
count.value++;
console.log(count.value); // 1
const objectRef = ref({ count: 0 });

// 这是响应式的替换
objectRef.value = { count: 1 };
const obj = {
  foo: ref(1),
  bar: ref(2)
};
// 该函数接收一个 ref
// 需要通过 .value 取值
// 但它会保持响应性
callSomeFunction(obj.foo);

// 仍然是响应式的
const { foo, bar } = obj;
```

在 html 模板中不需要带 `.value` 就可以使用

```
<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
  <div>
    {{ count }}
  </div>
</template>
```

### 有状态方法

```
import { reactive, defineComponent, onUnmounted } from 'vue';
import { debounce } from 'lodash-es';

export default defineComponent({
  setup() {
    // 每个实例都有了自己的预置防抖的处理函数
    const debouncedClick = debounce(click, 500);

    function click() {
      // ... 对点击的响应 ...
    }

    // 最好是在组件卸载时
    // 清除掉防抖计时器
    onUnmounted(() => {
      debouncedClick.cancel();
    });
  },
});
```

### 响应式样式

```
<script setup>
import { ref } from 'vue'
const open = ref(false);
</script>

<template>
  <button @click="open = !open">Toggle</button>
  <div>Hello Vue!</div>  
</template>

<style scope>
  div{
    transition: height 0.1s linear;
    overflow: hidden;
    height: v-bind(open ? '30px' : '0px');
  }
</style>
```

## 响应式进阶 —— watch 和 computed

### 监听状态

```
<script setup>
import { ref, watch } from 'vue';

const count = ref(0)
const isEvent = ref(false)

function increment() {
  state.count++
}

watch(count, function() {
  isEvent.value = count.value % 2 === 0
})
</script>

<template>
  <button @click="increment">
    {{ count }}
  </button>
  <p>
    is event: {{ isEvent ? 'yes' : 'no' }}
  </p>
</template>
```

### 立即监听状态

```
watch(count, function() {
  isEvent.value = count.value % 2 === 0
}, {
  // 上例中的 watch 不会立即执行，导致 isEvent 状态的初始值不准确。配置立即执行，会在一开始的时候立即执行一次
  immediate: true
})
```

### 计算状态

```
<script setup>
import { ref, computed } from 'vue';

const text = ref('')
// computed 的回调函数里，会根据已有并用到的状态计算出新的状态
const capital = computed(function(){
  return text.value.toUpperCase();
})
</script>

<template>
  <input v-model="text" />
  <p>to capital: {{ capital }}</p>
</template>
```

## 组件通信

### defineProps

```
<script setup>
import { defineProps } from 'vue';

// 这里可以将 `username` 解构出来，
// 但是一旦解构出来再使用，就不具备响应式能力
defineProps({
  username: String
})
</script>

<template>
  <p>username: {{ username }}</p>
</template>
```

子组件定义需要的参数

```
<script setup>
const username = 'vue'
</script>

<template>
  <children :username="username" />
</template>
```

父组件参入参数

### defineEmits

```
<script setup>
import { defineEmits, ref } from 'vue';

const emit = defineEmits(['search'])
const keyword = ref('')
const onSearch = function() {
  emit('search', keyword.value)
}
</script>

<template>
  <input v-model="keyword" />
  <button @click="onSearch">search</button>
</template>
```

子组件定义支持 `emit` 的函数

```
<script setup>
const onSearch = function(keyword){
  console.log(keyword)
}
</script>

<template>
  <children @search="onSearch" />
</template>
```

父组件绑定子组件定义的事件

### defineExpose

```
<script setup>
import { defineExpose, ref } from 'vue';

const keyword = ref('')
const onSearch = function() {
  console.log(keyword.value)
}

defineExpose({ onSearch })
</script>

<template>
  <input v-model="keyword" />
</template>
```

子组件对父组件暴露方法

```
<script setup>
import { ref } from 'vue'  

const childrenRef = ref(null)
const onSearch = function() {
  childrenRef.value.onSearch()
}
</script>

<template>
  <children ref='childrenRef' />
  <button @click="onSearch">search</button>
</template>
```

父组件调用子组件的方法

### Provide / Inject

```
import type { InjectionKey, Ref } from 'vue'

export const ProvideKey = Symbol() as InjectionKey<Ref<string>>
```

在应用中使用 `ProvideKey`

```
<script setup lang="ts">
import { provide, ref } from 'vue'
import { ProvideKey } from './types'

const text = ref<string>('123')
provide(ProvideKey, text)
</script>

<template>
  <input v-model="text" />
</template>
```

父组件为后代组件提供数据

```
<script setup lang="ts">
import { inject } from 'vue'
import { ProvideKey } from './types'

const value = inject(ProvideKey)
</script>

<template>
  <h4>{{value}}</h4>
</template>
```

后代组件注入父组件提供的数据

## Vue 中使用 TypeScript

### 为组件的 props 标注类型

当使用 `<script setup>` 时，`defineProps()` 宏函数支持从它的参数中推导类型

```
<script setup lang="ts">
const props = defineProps({
  foo: { type: String, required: true },
  bar: Number
})

props.foo // string
props.bar // number | undefined
</script>
```

对同一个文件中的一个接口或对象类型字面量的引用：

```
interface Props {/* ... */}

defineProps<Props>()
```

#### Props 解构默认值

```
export interface Props {
  msg?: string
  labels?: string[]
}

const props = withDefaults(defineProps<Props>(), {
  msg: 'hello',
  labels: () => ['one', 'two']
})
```

使用目前为实验性的响应性语法糖

```
<script setup lang="ts">
interface Props {
  name: string
  count?: number
}

// 对 defineProps() 的响应性解构
// 默认值会被编译为等价的运行时选项
const {
  name, count = 100
} = defineProps<Props>()
</script>
```

### 为组件的 emits 标注类型

```
<script setup lang="ts">
// 运行时
const emit = defineEmits(['change', 'update'])

// 基于类型
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()
</script>
```

### 为 ref() 标注类型

ref 会根据初始化时的值推导其类型：

```
import { ref } from 'vue'
import type { Ref } from 'vue'

const year: Ref<string | number> = ref('2020')

year.value = 2020 // 成功！
```

### 为 reactive() 标注类型

```
import { reactive } from 'vue'

interface Book {
  title: string
  year?: number
}

const book: Book = reactive({
  title: 'Vue 3 指引'
})
```

### 为 computed() 标注类型

你还可以通过泛型参数显式指定类型：

```
const double = computed<number>(() => {
  // 若返回值不是 number 类型则会报错
})
```

### 为事件处理函数标注类型

```
<script setup lang="ts">
function handleChange(event) {
  // `event` 隐式地标注为 `any` 类型
  console.log(event.target.value)
}
</script>

<template>
  <input
    type="text"
    @change="handleChange" />
</template>
```

显式地为事件处理函数的参数标注类型

```
function handleChange(event: Event) {
  const target = event.target as HTMLInputElement
  console.log(target.value)
}
```

### 为 provide / inject 标注类型

```
import { provide, inject } from 'vue'
import type { InjectionKey } from 'vue'

const key = Symbol() as InjectionKey<string>
// 若提供的是非字符串值会导致错误
provide(key, 'foo')
// foo 的类型：string | undefined
const foo = inject(key)
```

### 为模板引用标注类型

```
<script setup lang="ts">
import { ref, onMounted } from 'vue'

const el = ref<HTMLInputElement | null>(null)

onMounted(() => {
  el.value?.focus()
})
</script>

<template>
  <input ref="el" />
</template>
```

### 为组件模板引用标注类型

```
<!-- MyModal.vue -->
<script setup lang="ts">
import { ref } from 'vue'

const isContentShown = ref(false)
const open = 
      () => (isContentShown.value = true)

defineExpose({
  open
})
</script>
```

使用 TypeScript 内置的 `InstanceType` 工具类型来获取其实例类

```
<!-- App.vue -->
<script setup lang="ts">
import MyModal from './MyModal.vue'

type Modal = InstanceType<typeof MyModal>

const modal = ref<Modal | null>(null)

const openModal = () => {
  modal.value?.open()
}
</script>
```

### 选项式 API 为组件的 props 标注类型

```
import { defineComponent } from 'vue'

export default defineComponent({
  // 启用了类型推导
  props: {
    name: String,
    id: [Number, String],
    msg: { type: String, required: true },
    metadata: null
  },
  mounted() {
    // 类型：string | undefined
    this.name
    // 类型：number|string|undefined
    this.id
    // 类型：string
    this.msg
    // 类型：any
    this.metadata
  }
})
```

使用 PropType 这个工具类型来标记更复杂的 props 类型

```
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

interface Book {
  title: string
  author: string
  year: number
}

export default defineComponent({
  props: {
    book: {
      // 提供相对 `Object` 更确定的类型
      type: Object as PropType<Book>,
      required: true
    },
    // 也可以标记函数
    callback: Function as PropType<(id: number) => void>
  },
  mounted() {
    this.book.title // string
    this.book.year // number

    // TS Error: argument of type 'string' is not
    // assignable to parameter of type 'number'
    this.callback?.('123')
  }
})
```

### 选项式 API 为组件的 emits 标注类型

```
import { defineComponent } from 'vue'

type Payload = { bookName: string }

export default defineComponent({
  emits: {
    addBook(payload: Payload) {
      // 执行运行时校验
      return payload.bookName.length > 0
    }
  },
  methods: {
    onSubmit() {
      this.$emit('addBook', {
        bookName: 123 // 类型错误
      })
      // 类型错误
      this.$emit('non-declared-event')
    }
  }
})
```

### 选项式 API 为计算属性标记类型

计算属性会自动根据其返回值来推导其类型：

```
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      message: 'Hello!'
    }
  },
  computed: {
    greeting() {
      return this.message + '!'
    }
  },
  mounted() {
    this.greeting // 类型：string
  }
})
```

在某些场景中，你可能想要显式地标记出计算属性的类型以确保其实现是正确的：

```
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      message: 'Hello!'
    }
  },
  computed: {
    // 显式标注返回类型
    greeting(): string {
      return this.message + '!'
    },

    // 标注一个可写的计算属性
    greetingUppercased: {
      get(): string {
        return this.greeting.toUpperCase()
      },
      set(newValue: string) {
        this.message = newValue.toUpperCase()
      }
    }
  }
})
```

### 选项式 API 为事件处理函数标注类型

```
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    handleChange(event: Event) {
      console.log((event.target as HTMLInputElement).value)
    }
  }
})
```

### 选项式 API 扩展全局属性

```
import axios from 'axios'

declare module 'vue' {
  interface ComponentCustomProperties {
    $http: typeof axios
    $translate: (key: string) => string
  }
}
```

#### 类型扩展的位置

我们可以将这些类型扩展放在一个 `.ts` 文件，或是一个影响整个项目的 `*.d.ts` 文件中

```
// 不工作，将覆盖原始类型。
declare module 'vue' {
  interface ComponentCustomProperties {
    $translate: (key: string) => string
  }
}
```

------

```
// 正常工作。
export {}

declare module 'vue' {
  interface ComponentCustomProperties {
    $translate: (key: string) => string
  }
}
```

### 选项式 API 扩展自定义选项

某些插件，比如 vue-router，提供了一些自定义的组件选项，比如 beforeRouteEnter：

```
import { defineComponent } from 'vue'

export default defineComponent({
  beforeRouteEnter(to, from, next) {
    // ...
  }
})
```

如果没有确切的类型标注，这个钩子函数的参数会隐式地标注为 `any` 类型。我们可以为 `ComponentCustomOptions` 接口扩展自定义的选项来支持：

```
import { Route } from 'vue-router'

declare module 'vue' {
  interface ComponentCustomOptions {
    beforeRouteEnter?(
      to: Route,
      from: Route,
      next: () => void
    ): void
  }
}
```

## API 参考

### 全局 API - 应用实例

| :-                                 | :-                                                         |
| ---------------------------------- | ---------------------------------------------------------- |
| `createApp()`                      | 创建一个应用实例 [1]#[2]                                   |
| `createSSRApp()`                   | 以 [3]SSR 激活[4]模式创建一个应用实例 [5]#[6]              |
| `app.mount()`                      | 将应用实例挂载在一个容器元素中 [7]#[8]                     |
| `app.unmount()`                    | 卸载一个已挂载的应用实例 [9]#[10]                          |
| `app.provide()`                    | 提供一个可以在应用中的所有后代组件中注入使用的值 [11]#[12] |
| `app.component()`                  | 注册或获取全局组件 [13]#[14]                               |
| `app.directive()`                  | 注册或获取全局指令 [15]#[16]                               |
| `app.use()`                        | 安装一个插件 [17]#[18]                                     |
| `app.mixin()`                      | 全局注册一个混入 [19]#[20]                                 |
| `app.version`                      | 当前应用所使用的 Vue 版本号 [21]#[22]                      |
| `app.config`                       | 获得应用实例的配置设定 [23]#[24]                           |
| `app.config.errorHandler`          | 为应用内抛出的未捕获错误指定一个全局处理函数 [25]#[26]     |
| `app.config.warnHandler`           | 为 Vue 的运行时警告指定一个自定义处理函数 [27]#[28]        |
| `app.config.performance`           | 在浏览器开发工具中追踪性能表现 [29]#[30]                   |
| `app.config.compilerOptions`       | 配置运行时编译器的选项 [31]#[32]                           |
| `app.config.globalProperties`      | 注册全局属性对象 [33]#[34]                                 |
| `app.config.optionMergeStrategies` | 定义自定义组件选项的合并策略的对象 [35]#[36]               |

### 全局 API - 通用

| :-                       | :-                                                           |
| ------------------------ | ------------------------------------------------------------ |
| `version`                | Vue 版本号 [37]#[38]                                         |
| `nextTick()`             | 等待下一次 DOM 更新后执行回调 [39]#[40]                      |
| `defineComponent()`      | 在定义 Vue 组件时提供类型推导的辅助函数 [41]#[42]            |
| `defineAsyncComponent()` | 定义一个异步组件 [43]#[44]                                   |
| `defineCustomElement()`  | 和 `defineComponent` 接受的参数相同，不同的是会返回一个原生自定义元素类的构造器 [45]#[46] |

### 组合式 API - setup()

| :-                   | :-        |
| -------------------- | --------- |
| `基本使用`           | [47]#[48] |
| `访问 Props`         | [49]#[50] |
| `Setup 上下文`       | [51]#[52] |
| `与渲染函数一起使用` | [53]#[54] |

### 组合式 API - 依赖注入

| :-          | :-                                             |
| ----------- | ---------------------------------------------- |
| `provide()` | 提供一个可以被后代组件中注入使用的值 [55]#[56] |
| `inject()`  | 注入一个由祖先组件提供的值 [57]#[58]           |

### 组合式 API - 生命周期钩子

| :-                    | :-                                                           |
| --------------------- | ------------------------------------------------------------ |
| `onMounted()`         | 组件挂载完成后执行 [59]#[60]                                 |
| `onUpdated()`         | 状态变更而更新其 DOM 树之后调用 [61]#[62]                    |
| `onUnmounted()`       | 组件实例被卸载之后调用 [63]#[64]                             |
| `onBeforeMount()`     | 组件被挂载之前被调用 [65]#[66]                               |
| `onBeforeUpdate()`    | 状态变更而更新其 DOM 树之前调用 [67]#[68]                    |
| `onBeforeUnmount()`   | 组件实例被卸载之前调用 [69]#[70]                             |
| `onErrorCaptured()`   | 捕获了后代组件传递的错误时调用 [71]#[72]                     |
| `onRenderTracked()`   | 组件渲染过程中追踪到响应式依赖时调用 [73]#[74]               |
| `onRenderTriggered()` | 响应式依赖的变更触发了组件渲染时调用 [75]#[76]               |
| `onActivated()`       | 若组件实例是 <KeepAlive> 缓存树的一部分，当组件被插入到 DOM 中时调用 [77]#[78] |
| `onDeactivated()`     | 若组件实例是 <KeepAlive> 缓存树的一部分，当组件从 DOM 中被移除时调用 [79]#[80] |
| `onServerPrefetch()`  | 组件实例在服务器上被渲染之前调用 [81]#[82]                   |

### 组合式 API - 响应式: 工具

| :-             | :-                                                           |
| -------------- | ------------------------------------------------------------ |
| `isRef()`      | 判断是否为 ref [83]#[84]                                     |
| `unref()`      | 是 ref，返回内部值，否则返回参数本身 [85]#[86]               |
| `toRef()`      | 创建一个属性对应的 ref [87]#[88]                             |
| `toRefs()`     | 将对象上的每一个可枚举属性转换为 ref [89]#[90]               |
| `isProxy()`    | 检查一个对象是否是由 `reactive()`、`readonly()`、`shallowReactive()` 或 `shallowReadonly()` 创建的代理 [91]#[92] |
| `isReactive()` | 检查一个对象是否是由 `reactive()` 或 `shallowReactive()` 创建的代理。 [93]#[94] |
| `isReadonly()` | 检查传入的值是否为只读对象 [95]#[96]                         |

### 组合式 API - 响应式: 核心

| :-                  | :-                                                           |
| ------------------- | ------------------------------------------------------------ |
| `ref()`             | 返回一个 ref 对象 [97]#[98]                                  |
| `computed ()`       | 定义一个计算属性 [99]#[100]                                  |
| `reactive()`        | 返回一个对象的响应式代理 [101]#[102]                         |
| `readonly()`        | 返回一个原值的只读代理 [103]#[104]                           |
| `watchEffect()`     | 立即运行一个函数，同时监听 [105]#[106]                       |
| `watchPostEffect()` | `watchEffect()` 使用 `flush: 'post'` 选项时的别名。 [107]#[108] |
| `watchSyncEffect()` | `watchEffect()` 使用 `flush: 'sync'` 选项时的别名。 [109]#[110] |
| `watch()`           | 侦听一个或多个响应式数据源 [111]#[112]                       |

### 选项式 API - 状态选项

| :-         | :-                                                           |
| ---------- | ------------------------------------------------------------ |
| `data`     | 声明组件初始响应式状态 [113]#[114]                           |
| `props`    | 声明一个组件的 props [115]#[116]                             |
| `computed` | 声明要在组件实例上暴露的计算属性 [117]#[118]                 |
| `methods`  | 声明要混入到组件实例中的方法 [119]#[120]                     |
| `watch`    | 声明在数据更改时调用的侦听回调 [121]#[122]                   |
| `emits`    | 声明由组件触发的自定义事件 [123]#[124]                       |
| `expose`   | 声明当组件实例被父组件通过模板引用访问时暴露的公共属性 [125]#[126] |

### 选项式 API - 生命周期选项

| :-                             | :-                                                           |
| ------------------------------ | ------------------------------------------------------------ |
| `beforeCreate`                 | 组件实例初始化完成之后立即调用 [127]#[128]                   |
| `created`                      | 组件实例处理完所有与状态相关的选项后调用 [129]#[130]         |
| `beforeMount`                  | 组件被挂载之前调用 [131]#[132]                               |
| `mounted`                      | 组件被挂载之后调用 [133]#[134]                               |
| `beforeUpdate`                 | 状态变更而更新其 DOM 树之前调用 [135]#[136]                  |
| `updated`                      | 状态变更而更新其 DOM 树之后调用 [137]#[138]                  |
| `beforeUnmount`                | 组件实例被卸载之前调用 [139]#[140]                           |
| `unmounted`                    | 组件实例被卸载之后调用 [141]#[142]                           |
| `errorCaptured`                | 捕获了后代组件传递的错误时调用 [143]#[144]                   |
| `renderTracked` ***Dev only*   | 组件渲染过程中追踪到响应式依赖时调用 [145]#[146]             |
| `renderTriggered` ***Dev only* | 响应式依赖的变更触发了组件渲染时调用 [147]#[148]             |
| `activated`                    | 若组件实例是 <KeepAlive> 缓存树的一部分，当组件被插入到 DOM 中时调用 [149]#[150] |
| `deactivated`                  | 若组件实例是 <KeepAlive> 缓存树的一部分，当组件从 DOM 中被移除时调用 [151]#[152] |
| `serverPrefetch` ***SSR only*  | 组件实例在服务器上被渲染之前调用 [153]#[154]                 |

### 选项式 API - 其他杂项

| :-             | :-                                                  |
| -------------- | --------------------------------------------------- |
| `name`         | 显式声明组件展示时的名称 [155]#[156]                |
| `inheritAttrs` | 是否启用默认的组件 `attribute` 透传行为 [157]#[158] |
| `components`   | 注册对当前组件实例可用的组件 [159]#[160]            |
| `directives`   | 注册对当前组件实例可用的指令 [161]#[162]            |

### 选项式 API - 渲染选项

| :-                | :-                                            |
| ----------------- | --------------------------------------------- |
| `template`        | 声明组件的字符串模板 [163]#[164]              |
| `render`          | 编程式地创建组件虚拟 DOM 树的函数 [165]#[166] |
| `compilerOptions` | 配置组件模板的运行时编译器选项 [167]#[168]    |

### 选项式 API - 组件实例

| :-               | :-                                                           |
| ---------------- | ------------------------------------------------------------ |
| `$data`          | 观察的数据对象 [169]#[170]                                   |
| `$props`         | 组件已解析的 props 对象 [171]#[172]                          |
| `$el`            | 实例管理的 DOM 根节点 [173]#[174]                            |
| `$options`       | 实例的初始化选项 [175]#[176]                                 |
| `$parent`        | 父实例 [177]#[178]                                           |
| `$root`          | 当前组件树的根实例 [179]#[180]                               |
| `$slots`         | 访问被插槽分发的内容 [181]#[182]                             |
| `$refs`          | DOM 元素和组件实例 [183]#[184]                               |
| `$attrs`         | 包含了组件所有[185]透传 attributes[186] [187]#[188]          |
| `$watch()`       | 观察 Vue 实例上的一个表达式或者一个函数计算结果的变化 [189]#[190] |
| `$emit()`        | 触发一个自定义事件 [191]#[192]                               |
| `$forceUpdate()` | 强制该组件重新渲染 [193]#[194]                               |
| `$nextTick()`    | 回调延迟执行 [195]#[196]                                     |

### 选项式 API - 组合选项

| :-        | :-                                     |
| --------- | -------------------------------------- |
| `provide` | 提供可以被后代组件注入的值 [197]#[198] |
| `inject`  | 注入一个由祖先组件提供的值 [199]#[200] |
| `mixins`  | 接收一个混入对象的数组 [201]#[202]     |
| `extends` | 要继承的“基类”组件 [203]#[204]         |

### 内置内容 - 指令

| :-                            | :-                                           |
| ----------------------------- | -------------------------------------------- |
| `v-text`                      | 更新元素的 `textContent` [205]#[206]         |
| `v-html`                      | 更新元素的 `innerHTML` [207]#[208]           |
| `v-show`                      | 切换元素的 `display` css 属性 [209]#[210]    |
| `v-if`                        | 有条件地渲染元素 [211]#[212]                 |
| `v-else`                      | [213]#[214]                                  |
| `v-else-if`                   | [215]#[216]                                  |
| `v-for`                       | 多次渲染元素或模板块 [217]#[218]             |
| `v-on`                        | 绑定事件监听器 [219]#[220]                   |
| `v-bind`                      | 动态地绑定一个或多个属性 [221]#[222]         |
| `v-model`                     | 创建双向绑定 [223]#[224]                     |
| `v-slot`                      | 提供插槽或接收 props 的插槽 [225]#[226]      |
| `v-pre`                       | 跳过元素和它的子元素编译过程 [227]#[228]     |
| `v-once`                      | 只渲染元素和组件一次 [229]#[230]             |
| `v-memo` ***(3.2+)*           | 缓存一个模板的子树 [231]#[232]               |
| `v-cloak`                     | 保持在元素上直到实例结束编译 [233]#[234]     |
| `serverPrefetch` ***SSR only* | 组件实例在服务器上被渲染之前调用 [235]#[236] |

### 内置内容 - 组件

| :-                              | :-                                                |
| ------------------------------- | ------------------------------------------------- |
| `<Transition>`                  | 单个元素/组件的过渡效果 [237]#[238]               |
| `<TransitionGroup>`             | 多个元素/组件的过渡效果 [239]#[240]               |
| `<KeepAlive>`                   | 缓存包裹在其中的动态切换组件 [241]#[242]          |
| `<Teleport>`                    | 将其插槽内容渲染到 DOM 中的另一个位置 [243]#[244] |
| `<Suspense>` ***(Experimental)* | 协调对组件树中嵌套的异步依赖的处理 [245]#[246]    |

### 内置内容 - 特殊 Attributes

| :-    | :-                                   |
| ----- | ------------------------------------ |
| `key` | 用在 Vue 的虚拟 DOM 算法 [247]#[248] |
| `ref` | 元素或子组件注册引用信息 [249]#[250] |
| `is`  | 绑定动态组件 [251]#[252]             |

### 内置内容 - 特殊元素

| :-            | :-                                             |
| ------------- | ---------------------------------------------- |
| `<component>` | 渲染一个“元组件”用于动态组件或元素 [253]#[254] |
| `<slot>`      | 组件模板中的插槽内容出口 [255]#[256]           |

### 单文件组件 - 语法定义

| :-             | :-          |
| -------------- | ----------- |
| `总览`         | [257]#[258] |
| `相应语言块`   | [259]#[260] |
| `自动名称推导` | [261]#[262] |
| `预处理器`     | [263]#[264] |
| `Src 导入`     | [265]#[266] |
| `注释`         | [267]#[268] |

### 单文件组件 - <script setup>

| :-                               | :-          |
| -------------------------------- | ----------- |
| `基本语法`                       | [269]#[270] |
| `响应式`                         | [271]#[272] |
| `使用组件`                       | [273]#[274] |
| `使用自定义指令`                 | [275]#[276] |
| `defineProps() 和 defineEmits()` | [277]#[278] |
| `defineExpose`                   | [279]#[280] |
| `useSlots() 和 useAttrs()`       | [281]#[282] |
| `与普通的 <script> 一起使用`     | [283]#[284] |
| `顶层 await`                     | [285]#[286] |
| `针对 TypeScript 的功能`         | [287]#[288] |
| `限制`                           | [289]#[290] |

### 单文件组件 - CSS 功能

| :-                  | :-          |
| ------------------- | ----------- |
| `组件作用域 CSS`    | [291]#[292] |
| `CSS Modules`       | [293]#[294] |
| `CSS 中的 v-bind()` | [295]#[296] |

### 进阶 API - 渲染函数

| :-                   | :-                                                   |
| -------------------- | ---------------------------------------------------- |
| `h()`                | 创建虚拟 DOM 节点 [297]#[298]                        |
| `mergeProps()`       | 合并多个 props 对象 [299]#[300]                      |
| `cloneVNode()`       | 克隆一个 vnode [301]#[302]                           |
| `isVNode()`          | 判断一个值是否为 vnode 类型 [303]#[304]              |
| `resolveComponent()` | 按名称手动解析已注册的组件 [305]#[306]               |
| `resolveDirective()` | 按名称手动解析已注册的指令 [307]#[308]               |
| `withDirectives()`   | 用于给 vnode 增加自定义指令 [309]#[310]              |
| `withModifiers()`    | 用于向事件处理函数添加内置 `v-on 修饰符` [311]#[312] |

### 进阶 API - 服务端渲染

| :-                       | :-          |
| ------------------------ | ----------- |
| `renderToString()`       | [313]#[314] |
| `renderToNodeStream()`   | [315]#[316] |
| `pipeToNodeWritable()`   | [317]#[318] |
| `renderToWebStream()`    | [319]#[320] |
| `pipeToWebWritable()`    | [321]#[322] |
| `renderToSimpleStream()` | [323]#[324] |
| `useSSRContext()`        | [325]#[326] |

### 进阶 API - TypeScript 工具类型

| :-                          | :-                                                           |
| --------------------------- | ------------------------------------------------------------ |
| `PropType<T>`               | 在用运行时 props 声明时给一个 prop 标注更复杂的类型定义 [327]#[328] |
| `ComponentCustomProperties` | 增强组件实例类型以支持自定义全局属性 [329]#[330]             |
| `ComponentCustomOptions`    | 扩展组件选项类型以支持自定义选项 [331]#[332]                 |
| `ComponentCustomProps`      | 扩展全局可用的 TSX props [333]#[334]                         |
| `CSSProperties`             | 扩展在样式属性绑定上允许的值的类型 [335]#[336]               |

### 进阶 API - 自定义渲染

| :-                 | :-                               |
| ------------------ | -------------------------------- |
| `createRenderer()` | 创建一个自定义渲染器 [337]#[338] |