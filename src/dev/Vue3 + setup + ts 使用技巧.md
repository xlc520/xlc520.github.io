---
author: xlc520
title: Vue3 + setup + ts 使用技巧
excerpt: 
description: 
date: 2023-11-10
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# Vue3 + setup + ts 使用技巧

## **1. 组件引入**

当使用 `setup` 的时候，组件直接引入就可以了，不需要再自己手动注册

```typescript
<template>
  <Child />
</template>

<script setup lang="ts">
import Child from "./Child.vue";
</script>
```

## 2. ref 和 reactive

`ref` 一般用于基本的数据类型，比如 `string`，`boolean` ,`reactive` 一般用于对象 ref 的地方其实也是调用的 `reactive` 实现的。

```typescript
<template>
  <h1>{{ title }}</h1>
  <div>
    {{ data }}
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const title = ref("title");

const data = reactive({
  userName: "xiaoming",
  age: 18,
});
</script>
```

## 3. defineEmits 和 defineProps 获取父组件传过来值和事件

```typescript
// 第一种不带默认值props
const props = defineProps<{
  foo: string
  bar?: number
}>()
// 第二种带默认值props

export interface ChildProps {
  foo: string
  bar?: number
}

const props = withDefaults(defineProps<ChildProps>(), {
   foo: "1qsd"
  bar?: 3
})

// 第一种获取事件
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()

// 第二种获取事件

const emit = defineEmits(["dosth"])
```

## 4. 使用 useAttrs 和 useSlots

`useAttrs` 可以获取父组件传过来的 `id` 、`class` 等值。`useSlots` 可以获得插槽的内容。例子中，我们使用 `useAttrs`
获取父组件传过来的 `id` 、`class`、`useSlots` 获取插槽的内容。

### 父组件

```typescript
<template>
  <div class="father">{{ fatherRef }}</div>
  <Child :fatherRef="fatherRef" @changeVal="changeVal" class="btn" id="111">
    <template #test1>
      <div>1223</div>
    </template>
  </Child>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Child from "./Child.vue";

const fatherRef = ref("1");

function changeVal(val: string) {
  fatherRef.value = val;
}
</script>

<style lang="scss" scoped>
.father {
  margin-top: 40px;
  margin-bottom: 40px;
}
.btn {
  font-size: 20px;
  color: red;
}
</style>
```

### 子组件

```typescript
<template>
  <!-- <div class="child">{{ props.fatherRef }}</div> -->
  <div v-bind="attrs">
    <slot name="test1">11</slot>
    <input type="text" v-model="inputVal" />
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs, useSlots } from "vue";

const props = defineProps<{
  fatherRef: string;
}>();

const emits = defineEmits(["changeVal"]);

const slots = useSlots();

const attrs = useAttrs();

console.log(122, attrs, slots);

const inputVal = computed({
  get() {
    return props.fatherRef;
  },

  set(val: string) {
    emits("changeVal", val);
  },
});
</script>
```

### 使用自定义指令

在 `setup` 里边自定义指令的时候，只需要遵循`vNameOfDirective` 这样的命名规范就可以了

比如如下自定义 `focus` 指令，命名就是 `vMyFocus`，使用的就是 `v-my-focus`

自定义指令

```typescript
<script setup lang="ts">
const vMyFocus = {
  onMounted: (el: HTMLInputElement) => {
    el.focus();
    // 在元素上做些操作
  },
};
</script>
<template>
  <input v-my-focus value="111" />
</template>
```

## 5. 使用 defineExpose 子组件传父组件

### 子组件

```typescript
<template>
  <div class="child"></div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

function doSth() {
  console.log(333);
}

defineExpose({ doSth });
</script>
```

### 父组件

```typescript
<template>
  <div class="father" @click="doSth1">222</div>
  <Child ref="childRef"></Child>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

import Child from "./Child.vue";

const childRef = ref();

function doSth1() {
  childRef.value.doSth();
}
</script>
```

## 6. 父组件传子组件

### 父组件

```typescript
<template>
  <div class="father"></div>
  <Child @doSth="doSth"></Child>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

import Child from "./Child.vue";

function doSth() {
  console.log(112);
}
</script>
```

### 子组件

```typescript
<template>
  <div class="child">2222</div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";

const emits = defineEmits(["doSth"]);

onMounted(() => {
  emits("doSth");
});
</script>
```

## 7. toRefs

当从父组件向子组件传 `props` 的时候，必须使用 `toRefs` 或者 `toRef` 进行转一下，这是为什么呢？

这里是因为如果不使用 `toRefs` 转一次的话，当父组件中的 `props` 改变的时候，子组件如果使用了 Es6 的解析，会失去响应性。

可以看下如下例子

### 父组件

```typescript
<template>
  <div class="father" @click="changeVal">{{ fatherRef }}</div>
  <Child :fatherRef="fatherRef"></Child>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

import Child from "./Child.vue";

const fatherRef = ref(1);

function changeVal() {
  fatherRef.value = 2;
}
</script>

<style lang="scss" scoped>
.father {
  margin-bottom: 40px;
}
</style>
```

### 子组件

```typescript
<template>
  <div class="child" @click="changeVal">{{ fatherRef }}</div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, toRefs } from "vue";

const props = defineProps<{
  fatherRef: any;
}>();

const { fatherRef } = props;

function changeVal() {
  fatherRef.value = 34;
}
</script>
```

可以看到当父组件如果点击之后，因为使用 `const { fatherRef } = props;`进行解析，就失去了响应性

所以当父组件变成 2 的时候，子组件还是 1。

这里有两种解决办法

1. 使用 `const { fatherRef } = toRefs(props)`;
2. 在模版中中使用 `props.fatherRef`

## 8. 子组件使用 v-model

### 8.1 可以在子组件中使用 computed，实现双向绑定

#### 父组件

```typescript
<template>
  <div class="father">{{ fatherRef }}</div>
  <Child :fatherRef="fatherRef" @changeVal="changeVal"></Child>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Child from "./Child.vue";

const fatherRef = ref("1");

function changeVal(val: string) {
  fatherRef.value = val;
}
</script>

<style lang="scss" scoped>
.father {
  margin-top: 40px;

  margin-bottom: 40px;
}
</style>
```

#### 子组件

```typescript
<template>
  <!-- <div class="child">{{ props.fatherRef }}</div> -->
  <input type="text" v-model="inputVal" />
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  fatherRef: string;
}>();

const emits = defineEmits(["changeVal"]);

const inputVal = computed({
  get() {
    return props.fatherRef;
  },

  set(val: string) {
    emits("changeVal", val);
  },
});
</script>
```

### 8.2 可以从父组件传递值和改变值的方法，然后子组件也可以使用 v-model

例子中父组件传递 `modelValue` 和 `update:modelValue` 方法

### 父组件

```typescript
<template>
  <Child :modelValue="searchText" @update:modelValue="changeVal"> </Child>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Child from "./Child.vue";

const searchText = ref(1);

function changeVal(val: number) {
  searchText.value = val;
}
</script>

<style lang="scss" scoped>
.father {
  margin-top: 40px;

  margin-bottom: 40px;
}

.btn {
  font-size: 20px;

  color: red;
}
</style>
```

### 子组件

```typescript
<template>
  <!-- <div class="child">{{ props.fatherRef }}</div> -->
  <!-- <div v-bind="attrs">
        <slot name="test1">11</slot>
        <input type="text" v-model="inputVal" />
    </div> -->
  <input v-model="modelValue" />
</template>

<script setup lang="ts">
import { computed, useAttrs, useSlots } from "vue";

const props = defineProps<{
  modelValue: number;
}>();

// const emits = defineEmits(["changeVal"]);
</script>
```

## 9. 递归组件

组件本身是可以调用组件自身的，也就是递归。vue3 中使用文件名称自动注册为组件的名称，比如名为  `Child.vue`
的组件可以在其模板中用  `<Child/>` 引用它自己。这里需要注意的是需要设置条件语句，用来中断递归，不然递归会无限递归下去。

### 父组件

```typescript
<template>
  <Child :modelValue="searchText" @update:modelValue="changeVal"> </Child>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Child from "./Child.vue";
const searchText = ref(1);
function changeVal(val: number) {
  searchText.value = val;
}
</script>

<style lang="scss" scoped>
.father {
  margin-top: 40px;
  margin-bottom: 40px;
}
.btn {
  font-size: 20px;
  color: red;
}
</style>
```

### 子组件

```typescript
<template>
  <input v-model="modelValue" />
  <Child
    :modelValue="test"
    @update:modelValue="changeTest"
    v-if="modelValue > 2"
  ></Child>
</template>

<script setup lang="ts">
import { computed, useAttrs, useSlots, ref } from "vue";
const props = defineProps<{
  modelValue: number;
}>();
const test = ref(0);
function changeTest(val: number) {
  test.value = val;
}

// const emits = defineEmits(["changeVal"]);
</script>

<style lang="scss" scoped>
.child {
  position: relative;
}
</style>
```

## 10. vue3 ts 获取组件 ref 实例

- ### 通过 ref 直接拿到 dom 引用

```typescript
<template>
    <div class="demo1-container">
        <div ref="sectionRef" class="ref-section"></div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
const sectionRef = ref()
</script>
```

通过对 div 元素添加了 ref 属性，为了获取到这个元素，我们声明了一个与 ref 属性名称相同的变量`sectionRef`
，然后我们通过 `sectionRef.value`的形式即可获取该 div 元素

- ### 通过父容器的 ref 遍历拿到 dom 引用

```typescript
<template>
    <div class="demo2-container">
        <div ref="listRef" class="list-section">
            <div @click="higherAction(index)" class="list-item" v-for="(item, index) in state.list" :key="index">
                <span>{{item}}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const listRef = ref()
</script>
```

通过对父元素添加了 ref 属性，并声明了一个与 ref 属性名称相同的变量 listRef，此时通过 listRef.value 会获得包含子元素的 dom
对象 此时可以通过`listRef.value.children[index]`的形式获取子元素 dom

- ### 通过:ref将 dom 引用放到数组中

  ```typescript
  <template>
    <div class="demo2-container">
        <div class="list-section">
            <div :ref="setRefAction" @click="higherAction(index)" class="list-item" v-for="(item, index) in state.list" :key="index">
                <span>{{item}}</span>
            </div>
        </div>
    </div>
  
    </template>
  
    <script setup lang="ts">
    import { reactive } from 'vue'
  
    const state = reactive({
        list: [1, 2, 3, 4, 5, 6, 7],
        refList: [] as Array<any>
    })
  
    const setRefAction = (el: any) => {
        state.refList.push(el);
    }
    </script>
  ```

  通过:ref循环调用`setRefAction`方法，该方法会默认接收一个 el 参数，这个参数就是我们需要获取的 div 元素
  此时可以通过`state.refList[index]`的形式获取子元素 dom

- ### 通过子组件 emit 传递 ref

```typescript
<template>
    <div ref="cellRef" @click="cellAction" class="cell-item">
        <span>{{item}}</span>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const props = defineProps({
    item: Number
})
const emit = defineEmits(['cellTap']);
const cellRef = ref();
const cellAction = () => {
    emit('cellTap', cellRef.value);
}
</script>
```

通过对子组件添加了 ref 属性，并声明了一个与 ref 属性名称相同的变量 cellRef，此时可以通过 emit 将`cellRef.value`作为一个
dom 引用传递出去

- ### tsx 等 render 组件中获取的方式更简单

```typescript
import { defineComponent, ref, onMounted } from "@vue/runtime-core";
import { ElForm } from "element-plus";

export default defineComponent({
  setup() {
    const $form = ref<InstanceType<typeof ElForm>>(null);

    onMounted(() => {
      $form.value?.validate; // 类型正确
    });

    return () => <ElForm ref={$form}></ElForm>;
  },
});
```

需要注意的是，如果使用 expose 暴露方法出去，无法获取到对应的类型，您需要自定义类型 **github.com/vuejs/rfcs/……**

```typescript
// 组件 MyForm
import { defineComponent, ref, onMounted } from "@vue/runtime-core";
import { ElForm } from "element-plus";

type ELEForm = InstanceType<typeof ElForm>;

// 在外界通过 ref 获取组件实例 请使用这个类型
export interface MyFormExpose {
  validate: ELEForm["validate"];
}

export default defineComponent({
  name: "MyForm",

  setup(props, { expose }) {
    const $form = ref<InstanceType<typeof ElForm>>(null);

    expose({
      validate: (callback) => $form.value?.validate(callback),
    } as MyFormExpose);

    return () => <ElForm ref={$form}></ElForm>;
  },
});
<!-- Home.vue -->
<template>
  <MyForm :ref="$form" />
</template>

<script>
import { defineComponent, ref, onMounted } from '@vue/runtime-core'
import MyForm, { MyFormExpose } from '@/components/MyForm'
export default defineComponent({
  components: { MyForm }

  setup(){
    const $form = ref<InstanceType<typeof MyForm> & MyFormExpose>(null)

    onMounted(() => {
       $form.value?.validate // 类型正确
    })
  }
})
</script>
```
