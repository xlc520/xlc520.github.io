---
author: xlc520
title: VUE下拉列表动态切换(人人组件)
excerpt: 
description: 
date: 2022-07-05
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# VUE 下拉列表动态切换(人人组件)

## 方法一

vue 前端

```vue
 <el-form-item label="大类" prop="busiLines">
     <ren-select v-model="dataForm.busiLines" dict-type="PIG_BUSI_LINES" @change="selectchange" placeholder="大类"></ren-select>
</el-form-item>
<el-form-item label="细分" prop="busiDtiLines">
    <el-select v-model="dataForm.busiDtiLines" placeholder="细分" clearable>
        <el-option :label="data.dictLabel" v-for="data in dataList" :key="data.dictValue" :value="data.dictValue">{{ data.dictLabel }}</el-option>
    </el-select>
</el-form-item>
```

setup 或者 data 中添加

```plain
busi_dict:"",
dataList:[] as any[], // 属性需要做类型断言处理,
```

methods 中添加方法：

```tsx
selectchange(value){
      //console.log(value)
      switch(value){
        case "1": this.dataList=getDictDataList(this.$store.state.dicts, "BUSI_DTI_LINES_FIN");break;
        case "2": this.dataList=getDictDataList(this.$store.state.dicts, "BUSI_DTI_LINES_NONFIN");break;
        case "3": this.dataList=getDictDataList(this.$store.state.dicts, "BUSI_DTI_LINES_RE");break;
        case "4": this.dataList=getDictDataList(this.$store.state.dicts, "BUSI_DTI_LINES_GUAR");break;
        default:break;
      };
    },
```

## 方法二

ren-select 组件中添加 watch

```typescript
watch: {
    //开始监听返回该对象属性值计算属性
    dictType: {
      deep: true,
      handler(newVal, oldVal) {
        console.info('[oldVal:' + oldVal + '] [newVal:' + newVal + ']')
        this.dataList = getDictDataList(this.store.state.dicts, newVal)

        console.info(this.dataList)
      },
    },
},
```

vue 前端

```vue
<el-form-item label="大类" prop="busiLines">
    <ren-select v-model="dataForm.busiLines" dict-type="PIG_BUSI_LINES" @change="selectchange" placeholder="大类"></ren-select>
</el-form-item>
<el-form-item label="细分" prop="busiDtiLines">
    <ren-select v-model="dataForm.busiDtiLines" :dict-type="busi_dict" placeholder="细分"></ren-select>
</el-form-item>
```

methods 中添加方法：

```typescript
selectchange(value){
    switch(value){
        case "1": this.busi_dict = "BUSI_DTI_LINES_FIN";break;
        case "2": this.busi_dict = "BUSI_DTI_LINES_NONFIN";break;
        case "3": this.busi_dict = "BUSI_DTI_LINES_RE";break;
        case "4": this.busi_dict = "BUSI_DTI_LINES_GUAR";break;
        default:break;
    };
},
```

## 注意

如果下拉列表用字典，打开时会显示字典值的 key，所以可以加一个钩子

```typescript
updated(){
    this.selectchange(this.dataForm.busiLines);
  },
```
