---
author: xlc520
title: Vue开发报错问题解决
description: 
date: 2022-07-17
category: Java
tag: Java
article: true
timeline: true
icon: java
---



# Vue开发报错问题解决

## 2.同组件新增修改出现数据查询是上一次

> 2022年7月5日09:22:16

关闭组件时清空数据，新增时最好也清空,methods方法中可以添加该方法，下半部分IDE插件可能会报错，但不影响使用，也可以使用上半部分，但是效果不好。如果tab中有列表，有列表的那项可以设置lazy为true，方法中不清空数据。

```typescript
clearData(){
    // this.$refs.basic.dataForm={};
    // this.$refs.idsgmt.dataForm={};
    // this.$refs.fcsinfsgmt.dataForm={};
    // //this.$refs.mnmmbinfsgmt.dataForm={};
    // this.$refs.regcap.dataForm={};
    // this.$refs.sharhodinf.dataForm={};
    // this.$refs.actucotrlinfsg.dataForm={};
    // this.$refs.spvsgathrtyinfsgmt.dataForm={};
    // // this.$refs.cotainfsgmt.dataForm={};
    // this.$refs.enctfitginf.dataForm={};
    // // this.$refs.enicdnrltpinf.dataForm={};
    this.dataForm.id='';
    this.dataForm.custId='';
    this.dataForm.bssgmt={};
    this.dataForm.idsgmt={};
    this.dataForm.fcsinfsgmt={};
    this.dataForm.regCap={};
    //this.dataForm.mnmmbinfsgmt={};
    this.dataForm.sharhodInf={};
    this.dataForm.actucotrlinfsg={};
    this.dataForm.spvsgathrtyinfsgmt={};
    //this.dataForm.cotainfsgmt={};
    this.dataForm.enctfitginf={};
    //this.dataForm.enicdnrltpinf={};
}
```

## 1.tab中表单也有列表，列表显示和查询问题

>2022年7月4日14:41:48

`el-tab-pane`设置`lazy="true"`,否则页面在数据加载完之前渲染完毕就无法查询该id的数据，也不需要新增时置空`this.$refs.basic.dataForm={};`

```vue
<el-dialog v-model="visible" v-if="visible" :visible.sync="visible" destroy-on-close @closed="onClosed" :title="!addDisable?$t('add'):$t('update')" :close-on-click-modal="false" :close-on-press-escape="true" :fullscreen="true">
    <el-tabs v-model="activeName" type="border-card" tab-position="left">
      <el-tab-pane label="基本信息" name="one" :lazy="false">
        <basic :dataForm="dataForm" ref="basic"/>
      </el-tab-pane>
      <el-tab-pane label="其它" name="two" :lazy="true">
        <eibcidsgmt :dataForm="{id:dataForm.id}" ref="eibcidsgmt"/>
      </el-tab-pane>
    </el-tabs>
</el-dialog>
```

如果列表页面需要查询指定id，在新增时不显示可以设置列表组件创建时：

```typescript
created(){
    if(this.dataForm.custId==''){
      this.dataForm.custId='-'
    }
  },
```

