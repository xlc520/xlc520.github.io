---
author: xlc520
title: Vue 子组件与父组件传值
description: 
date: 2022-07-08
category: Java
tag: Java
article: true
timeline: true
icon: java
password: 
---



# Vue 子组件与父组件传值

## 一、通过父组件给子组件传递函数类型的props实现

注意：通过props父子组件的设置接收的名称要一样，绑定的名字（`:getChildInfo`）和接收的一样（`props: ['getChildInfo']`）,当调用的时候使用this.xxx.xx范围要对应。

父组件：

```vue
<Child :getChildInfo="getChildInfo"></Child>
```

子组件：

```vue
<button @click="sendChildInfo"></button>

props: ['getChildInfo']

sendChildInfo() {
	this.getChildInfo(数据);
}
```

## 二、通过父组件给子组件绑定自定义事件实现

### **第一种方式：**

父组件：

```vue
<child @haha="test"></child>
```

子组件：

```vue
<button @click="send"></button>

send() {
	this.$emit('haha');
}
```

### **第二种方式：**

父组件：

```vue
<child ref="xxx"></child>

mounted() {
	this.$refs.xxx.$on('haha', this.test);
}
```

子组件：

```vue
<button @click="send"></button>

send() {
	this.$emit('haha');
}
```

### 注意：

1. 若想让自定义事件只能触发一次，可以使用`once`修饰符，或者`$once`方法。

2. 组件上也可以绑定原生DOM事件，需要使用`native`修饰符

   ```vue
   <Child @click.native="xxx"></Child>
   ```

3. 通过`this.$refs.xxx.$on('haha', 回调)`绑定自定义事件时，回调要么配置在methods中，要么用箭头函数，否则this的指向会出问题。





## 其他参考

**一，子组件主动触发事件将数据传递给父组件**

1，在子组件上绑定某个事件以及事件触发的函数

子组件代码

```vue
<template>
    <div>
    <Tree :data="treeData" show-checkbox ref="treeData"></Tree>
    <Button type="success" @click="submit"></Button>
    </div>
</template>
```

事件在子组件中触发的函数

```vue
submit(){
  this.$emit('getTreeData',this.$refs.treeData.getCheckedNodes());
},
```

2，在父组件中绑定触发事件

```vue
<AuthTree  @getTreeData='testData'>
</AuthTree>
```

父组件触发函数显示子组件传递的数据

```vue
testData(data){
    console.log("parent");
    console.log(data)
},
```

**二，不需要再子组件中触发事件（如点击按钮，create（）事件等等）**

这种方式要简单得多，

1，子组件中绑定ref

```vue
<template>
<div>
<Tree :data="treeData" show-checkbox ref="treeData"></Tree>
</div>
</template>
```

然后在子组件中定义一个函数，这个函数是父组件可以直接调用的。函数的返回值定义为我们需要的数据。

```vue
getData(){
        return this.$refs.treeData.getCheckedNodes()
    },
```

然后再父组件注册子组件后绑定ref，调用子组件的函数获取数据

```vue
<AuthTree ref="authTree">
          </AuthTree>
```

父组件函数调用

```vue
console.log( this.$refs.authTree.getData());
```

