---
author: xlc520
title: vue3 使用 高德地图api
description: 
date: 2023-12-20
category: Java
tag: Java
article: true
timeline: true
icon: java
---



# vue3 使用 高德地图api



> 在我们使用高德地图的时候，官方给我们推荐了很多案例，`demo`，但是这些案例都是使用原生方法接入，并没有提供`vue`或者`react` 的`demo`，`vue2`的 接入网上也很多人都有写过，今天我们就来看看 `vue3`如何使用常用的高德地图`api`

## 前置工作

> 在开发之前我们需要了解 `vue3` 中接入高德地图的几个步骤

- 首先安装包并引入

```js
npm i @amap/amap-jsapi-loader --save
import AMapLoader from '@amap/amap-jsapi-loader'
```

- 使用[官方介绍的方式](https://link.juejin.cn?target=https%3A%2F%2Flbs.amap.com%2Fapi%2Fjsapi-v2%2Fguide%2Fwebcli%2Fmap-vue1)进行加载

- `vue2` 和 `vue3` 是有区别的，这里我们使用的是 `vue3` ，但这里 `vue3` 的方式还是选项式，不是组合式的，我自己写的时候使用的是组合式的，且集成了` ts`， 我后面发布完整 `.vue` 文件的时候 会去掉标签上的 ts，因为类型还没有完善，等后面完善了再贴更改以后得。为什么要使用 `shallowRef` 官方也给出了说明原因。

## 示例模块

> 这里我直接把我前面，写过的 地图业务需求的业务逻辑拿过来的，没有使用框架，直接在一个 html 文件当中引入，链接大家可以点击下面进行查看：
>  [高德地图jsApi的使用](https://juejin.cn/post/7175339849212231741)
>  [高德地图jsApi的点和线配置](https://juejin.cn/post/7175739486821679160)
>  [高德地图jsApi的右键设置](https://juejin.cn/post/7176104463516565559)
>  [高德地图jsApi的点位新增](https://juejin.cn/post/7176455699969835067)
>  [高德地图jsApi的图例](https://juejin.cn/post/7177196837915328570)
>  使用`vue3` 的时候，实例化的方式， `this` 的问题， 以及插入字符串模板的时候 事件响应的方式都需要更改，还是很麻烦的

### 模块的引入

- 首先**导入**的方式，和官网一样，后面我会贴完整代码， 这里我们使用 `plugins` 加载插件， 其他配置如 `Loca`， 直接进行配置， 这里需要注意版本问题， 写成  ‘2.0’ 是不行的，初始化函数在 `onmounted` 生命周期中执行。
- **AMap存储** 这里我做了很多存储，大家知道 `.value`  的语法是 `vue3` 获取 `ref` 的语法，我下面使用到的 都是`ref`，后面完整代码可以查看， 这里挂载的时候直接存一下，因为很多工具方法都会只用到他，这里后期业务逻辑我会抽离到 `pinia`中去，所以不需要在初始化函数中写全部的业务逻辑。
- **模版样式不生效问题**， 我们在使用的时候， 就像我之前写的文章，点位新增的时候，我们会插入 `content `字符串模版，替换点样式，这里有两种方案修改样式，一种是 插入 `DOM` ，不使用字符串，然后在 `DOM `上通过 `style` 直接修改样式，另一种就是使用模版的时候直接给 `class` 类名，但是这种样式如果我们给 `vue` 的 `style` 加了 `scoped` 就不会生效，这里大家可以自己灵活选择用哪种，我这里暂时先使用模版的方式，去掉了 `scoped`。
- **图例**， 图例这里除了导入的时候，需要配置一下，使用上来说变化不大，样式的修改还是复用了我之前的逻辑。

```javascript
import AMapLoader from '@amap/amap-jsapi-loader'

const initMap = () => {
  AMapLoader.load({
    key: 'b59c490f61a694b9d7576dd864f74d6e', // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ['AMap.Scale', 'AMap.ToolBar', 'AMap.MouseTool'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    Loca:{
      version:'2.0.0'
    }
  })
    .then((res) => {      
      AMap.value = res
      // 上来就显示的中心点  北京 116.397, 39.918
      var lnglat = new res.LngLat(105, 38)
      map.value = new res.Map('container', {
        //设置地图容器id
        viewMode: '3D', //是否为3D地图模式
        zoom: 5, //初始化地图级别
        center: lnglat, //初始化地图中心点位置
      })
      map.value.clearMap() // 清除地图覆盖物
      // 地图是否可拖拽和缩放
      map.value.setStatus({
        dragEnable: true, // 是否可拖拽
        zoomEnable: true, // 是否可缩放
      })

      initWindow()
      // 添加一些分布不均的点到地图上,地图上添加三个点标记，作为参照
      coordData.forEach(function (marker) {
        setMarker(marker)
      })

      let renderLine = setLine(coordData)
      // 设置线
      let polyline = renderLine.reduce((prev, item, index) => {
        let weight = item.type === 1 ? 5 : 3
        let color = item.type === 1 ? headColors[0] : headColors[1]
        prev.push(setLines(item.current, color, weight))
        return prev
      }, [])
      map.value.add([...polyline]) // 绘制线
      //创建右键菜单
      menuInstance.value = new ContextMenu(map.value)
      let loca = new Loca.Container({
          map:map.value,
      });
      window._loca = loca;

      // 图例, 图例可以实例化多个，使用定位来设置位置
      let lengend = new Loca.Legend({
          loca: loca,
          title: {
              label: '管道类型',
              fontColor: 'rgba(255,255,255,1)',
              fontSize: '16px'
          },
          style: {
              backgroundColor: 'rgba(255,255,255,0.2)',
              left: '20px',
              bottom: '40px',
              fontSize: '12px'
          },
          dataMap: [
              { label: '省级管道', color: headColors[1] },
              { label: '县级管道', color: headColors[0] },
          ],
      });

      //修改图例排列方式
      document.getElementsByClassName("amap-loca loca-controls")[0].setAttribute('id', 'testid')
        var lis = document.querySelectorAll("#testid li");
        for (var i = 0; i < lis.length; i++) {
          console.log(lis[i]);
          lis[i].setAttribute("class", 'test'
          );
      }
    })
    .catch((e) => {
      console.log('error', e)
    })
}
onMounted(() => {
  initMap()
})
```

### 右键菜单

> **右键菜单**， 右键菜单这里官方给我们的示例是使用一个 函数 进行实例化，里面使用了 `this`， 所以这个我单独拿出来，首先我们看一下官方的 [demo](https://link.juejin.cn?target=https%3A%2F%2Flbs.amap.com%2Fdemo%2Fjsapi-v2%2Fexample%2Fcontextmenu%2Fcustom-contextmenu)

这里使用了一个函数，但这个函数还不是类，但是他却在里面使用了`this`，实话来讲，这种写法确实不是很优秀，可扩展性很差，不够健壮，但没办法，谁让我们用了人家的东西呢是吧， 在 `vue3` 中这么用就不可以了，首先 `vue3` 里面使用 `this` 就不是官方建议的， 另外这里面还修改了函数原型上的方法，其实我得代码里面一共有两种右键菜单



一种是在指定点位上打开，另一种是在非点位的空白处打开，指定点位处打开的其实叫信息窗体，只不过是通过右键的方式触发，那个没有上面这个右键菜单麻烦。

- 首先来说 `this` 问题， 这里的 `this` 实际上就是把我们的实例化对象挂载到上面而已，`vue3` 中没办法像 `vue2` 那样使用 `this`， 但也提供给我们了 `api` 来获取当前组件的实例化对象， 然后我没用使用函数， 使用了一个类，类构造这个方法， 模版也不适用字符串模版，因为这里字符串模版的事件绑定写死了，我们使用 `DOM` 来动态绑定事件，代码如下：

```js
const { ctx } = getCurrentInstance()
const _this = ctx
//自定义菜单类
class ContextMenu {
  constructor(map) {
    var me = _this
    //地图中添加鼠标工具MouseTool插件
    _this.mouseTool = new AMap.value.MouseTool(map)
    _this.contextMenuPositon = null
    const fragment = document.createElement('div') // 使用 DOM 方式, 方便添加事件
    fragment.className = 'info context_menu'
    const p = document.createElement('p')
    p.addEventListener('click', this.delMarkerMenu)
    p.textContent = '移除上次选中信息'
    fragment.appendChild(p)
    //通过content自定义右键菜单内容
    _this.contextMenu = new AMap.value.ContextMenu({
      isCustom: true,
      content: fragment,
    })
    //地图绑定鼠标右击事件——弹出右键菜单
    map.on('rightclick', function (e) {
      me.contextMenu.open(map, e.lnglat)
      me.contextMenuPositon = e.lnglat //右键菜单位置
    })
  }
  delMarkerMenu() {
    // 右键菜单上次选中点的信息
    clearPoint()
    _this.mouseTool.close()
    _this.contextMenu.close()
  }
}
```

## 完整代码

```js
<!--
 * @Description: 地图
 * @Autor: codeBo
 * @Date: 2023-03-06 16:10:10
 * @LastEditors: gjzxlihaibo@163.com
 * @LastEditTime: 2023-03-07 14:59:08
-->
<template>
  <div id="root">
    <div>
      <h3>添加选点请输入坐标</h3>
      <label>
        经度：
        <input />
      </label>
      <label>
        纬度：
        <input />
      </label>
      <button class="btn">输入完成</button>
      <button class="btn">清空输入</button>
    </div>
    <div id="container"></div>
  </div>
</template>
<script setup>
import { onMounted, reactive, ref, getCurrentInstance } from 'vue'
import AMapLoader from '@amap/amap-jsapi-loader'
import { shallowRef } from 'vue'
import { coordData } from './data'
const map = shallowRef(null)
const { ctx } = getCurrentInstance()
const _this = ctx

const menuInstance = ref() // menu 实例
let AMap = ref() // map 实例
let currentPonit = ref<HTMLElement | null>(null) // 存储当前选中点 DOM
let currentData = reactive({}) // 当前选重点信息
let sourceInfoWindow = ref()
const headColors = ['#3366bb', '#6622FF']
// 工具方法
// 修改DOM 类名
function changeStyle(res, data) {
  if (currentPonit.value !== null) {
    currentPonit.value.classList.remove('active')
  }
  currentPonit.value = res.children[0]
  currentData = data
  currentPonit.value.classList.add('active')
}
// 清除点信息
function clearPoint() {
  if (currentPonit.value) {
    currentPonit.value.classList.remove('active')
  }
  currentPonit.value = null
  currentData = {}
}
// 设置线信息
function setLines(lnglat, color, weight) {
  return new AMap.value.Polyline({
    path: lnglat,
    // showDir:true ,// 设置线方向
    strokeColor: color, // 线颜色
    strokeWeight: weight, // 线宽
    strokeOpacity: 0.6, // 透明度
  })
}
function markerClick(e) {
  console.log('sourceInfoWindow.value', sourceInfoWindow.value, e.target)

  sourceInfoWindow.value.setContent(e.target.contents)
  sourceInfoWindow.value.open(map.value, e.target.getPosition())
}

function setInput(e, name) {
  let text =
    e.target.parentElement.parentElement.children[0].innerText.split(
      '供给点',
    )[0]
  let current = coordData.filter((item) => {
    return item.name === text
  })
  window.localStorage.setItem(text + name, e.target.value)
}

const initWindow = () => {
  // 信息窗体
  let infoWindow = new AMap.value.InfoWindow({
    offset: new AMap.value.Pixel(0, -10),
    retainWhenClose: true,
  })
  sourceInfoWindow.value = infoWindow
  infoWindow.on('open', function (...arg) {
    let inputOut = document.getElementById('inputOut')
    let inputPro = document.getElementById('inputPro')
    inputOut.addEventListener('change', (e) => {
      setInput(e, 'inputOut')
      window.location.reload()
    })
    inputPro.addEventListener('change', (e) => {
      setInput(e, 'inputPro')
      window.location.reload()
    })
  })
}

// 抽离点位信息设置
function setMarker(marker) {
  //创建右键菜单
  var contextMenu = new AMap.value.ContextMenu()
  //右键放大
  contextMenu.addItem(
    '放大一级',
    function () {
      map.value.zoomIn()
    },
    0,
  )
  //右键缩小
  contextMenu.addItem(
    '缩小一级',
    function () {
      map.value.zoomOut()
    },
    1,
  )
  contextMenu.addItem('设置起点', function () {
    console.log('设置起点', marker, markerd.dom)
    changeStyle(markerd.dom, marker)
    contextMenu.close() // 关闭右键菜单
  })
  contextMenu.addItem('与起点连线', function () {
    if (!currentPonit) {
      alert('请选择起点')
      contextMenu.close()
      return
    } else {
      // 这里其实可以根据数据判定线类型了，因为第二个选中点的信息+和第一个选中点的信息都有了,但是过滤方法会比较复杂
      let path = [currentData.position, marker.position]
      const polyline1 = setLines(path, '#3366bb', 5)
      map.value.add([polyline1])
      clearPoint()
    }
    contextMenu.close() // 关闭右键菜单
  })
  let content = '<div class="marker-route"></div>'
  var markerd = new AMap.value.Marker({
    map: map.value,
    // icon: marker?.icon,
    content,
    offset: new AMap.value.Pixel(-8, -8),
    visible: true, // 点标记是否可见
    position: [marker.position[0], marker.position[1]],
  })

  let inputO = window.localStorage.getItem(marker.name + 'inputOut')
  let inputP = window.localStorage.getItem(marker.name + 'inputPro')
  // 左键点击的信息窗体， 宽度会在碰触到容器边缘的时候自适应的缩小
  markerd.contents = `
    <div>${marker.name}供给点</div>
    <div>出口压力：<input id="inputOut" class="input_inner" value="${
      inputO ?? marker?.pointData?.out
    }"/>kPa</div>
    <div>供给量：<input id="inputPro" class="input_inner" value="${
      inputP ?? marker?.pointData?.provide
    }" />m³</div>
    <div>位置：经度${marker.position[0]},纬度${marker.position[1]}</div>`
  markerd.data = marker
  markerd.on('click', markerClick)
  if (marker.name === '新疆') {
    // 触发上面的点击事件
    markerd.emit('click', { target: markerd })
  }
  //绑定鼠标右击事件——弹出右键菜单
  markerd.on('rightclick', function (e) {
    contextMenu.open(map.value, e.lnglat)
  })
  return markerd
}

//自定义菜单类
class ContextMenu {
  constructor(map) {
    var me = _this
    //地图中添加鼠标工具MouseTool插件
    _this.mouseTool = new AMap.value.MouseTool(map)
    _this.contextMenuPositon = null
    const fragment = document.createElement('div') // 使用 DOM 方式, 方便添加事件
    fragment.className = 'info context_menu'
    const p = document.createElement('p')
    p.addEventListener('click', this.delMarkerMenu)
    p.textContent = '移除上次选中信息'
    fragment.appendChild(p)
    //通过content自定义右键菜单内容
    _this.contextMenu = new AMap.value.ContextMenu({
      isCustom: true,
      content: fragment,
    })
    //地图绑定鼠标右击事件——弹出右键菜单
    map.on('rightclick', function (e) {
      me.contextMenu.open(map, e.lnglat)
      me.contextMenuPositon = e.lnglat //右键菜单位置
    })
  }
  delMarkerMenu() {
    // 右键菜单上次选中点的信息
    clearPoint()
    _this.mouseTool.close()
    _this.contextMenu.close()
  }
}

// 过滤线方法
function setLine(arr) {
  return arr.reduce((prev, item) => {
    if (item?.line) {
      prev.push(...item.line)
    }
    return prev
  }, [])
}


const initMap = () => {
  AMapLoader.load({
    key: 'b59c490f61a694b9d7576dd864f74d6e', // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ['AMap.Scale', 'AMap.ToolBar', 'AMap.MouseTool'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    Loca:{
      version:'2.0.0'
    }
  })
    .then((res) => {      
      AMap.value = res
      // 上来就显示的中心点  北京 116.397, 39.918
      var lnglat = new res.LngLat(105, 38)
      map.value = new res.Map('container', {
        //设置地图容器id
        viewMode: '3D', //是否为3D地图模式
        zoom: 5, //初始化地图级别
        center: lnglat, //初始化地图中心点位置
      })
      map.value.clearMap() // 清除地图覆盖物
      // 地图是否可拖拽和缩放
      map.value.setStatus({
        dragEnable: true, // 是否可拖拽
        zoomEnable: true, // 是否可缩放
      })

      initWindow()
      // 添加一些分布不均的点到地图上,地图上添加三个点标记，作为参照
      coordData.forEach(function (marker) {
        setMarker(marker)
      })

      let renderLine = setLine(coordData)
      // 设置线
      let polyline = renderLine.reduce((prev, item, index) => {
        let weight = item.type === 1 ? 5 : 3
        let color = item.type === 1 ? headColors[0] : headColors[1]
        prev.push(setLines(item.current, color, weight))
        return prev
      }, [])
      map.value.add([...polyline]) // 绘制线
      //创建右键菜单
      menuInstance.value = new ContextMenu(map.value)
      let loca = new Loca.Container({
          map:map.value,
      });
      window._loca = loca;

      // 图例, 图例可以实例化多个，使用定位来设置位置
      let lengend = new Loca.Legend({
          loca: loca,
          title: {
              label: '管道类型',
              fontColor: 'rgba(255,255,255,1)',
              fontSize: '16px'
          },
          style: {
              backgroundColor: 'rgba(255,255,255,0.2)',
              left: '20px',
              bottom: '40px',
              fontSize: '12px'
          },
          dataMap: [
              { label: '省级管道', color: headColors[1] },
              { label: '县级管道', color: headColors[0] },
          ],
      });

      //修改图例排列方式
      document.getElementsByClassName("amap-loca loca-controls")[0].setAttribute('id', 'testid')
        var lis = document.querySelectorAll("#testid li");
        for (var i = 0; i < lis.length; i++) {
          console.log(lis[i]);
          lis[i].setAttribute("class", 'test'
          );
      }
    })
    .catch((e) => {
      console.log('error', e)
    })
}

onMounted(() => {
  initMap()
})
</script>
<style lang="scss">
#container {
  width: 1350px;
  height: 900px;
}

#root {
  display: flex;
  width: 100%;
}

#root > div:first-child {
  width: 200px;
  margin-right: 10px;
  padding: 5px;
  box-shadow: 2px 2px 2px 2px #333;
}
#root > div:first-child {
  display: flex;
  flex-direction: column;
}

.context_menu {
  position: relative;
  min-width: 12rem;
  padding: 0;
  background-color: white;
}

.context_menu p {
  cursor: pointer;
  padding: 0.25rem 1.25rem;
}

.context_menu p:hover {
  background: #ccc;
}

.btn {
  width: 80px;
  margin-top: 10px;
}

.marker-route {
  width: 15px;
  height: 15px;
  background-color: #22ddb8;
  border-radius: 10px;
}
.active {
  background-color: #f76809;
}
.content {
  background-color: rgba(0, 0, 0, 0.3);
  padding: 1px;
  color: white;
  display: flex;
  align-items: center;
}
.content span {
  display: block;
  width: 20px;
  height: 20px;
  background-color: #3366bb;
  margin: 0 10px;
}
.content p {
  margin-right: 10px;
}

.test {
  height: 30px;
  box-sizing: content-box;
  padding: 2px 10px;
  line-height: 30px;
  display: inline;
  float: left;
}
.test a {
  color: #333 !important;
}
.test span {
  width: 80px !important;
  margin-left: 10px;
  border-radius: 10px;
}
.amap-info-content {
  background-color: rgba(255, 255, 255, 0.6);
}
.test_container {
  background-color: rgba(255, 255, 255, 0.6);
  display: flex;
  width: 180px;
  flex-direction: column;
  padding: 10px 18px 10px 10px;
  line-height: 1.4;
  overflow: auto;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.input_inner {
  margin-right: 5px;
  border: 1px solid #333;
  border-radius: 2px;
  width: 30px;
}
</style>
```

- 这里的业务逻辑还不完善， 输入部分的交互逻辑没有完成， 这个文件直接引入自己的项目，安装一下上面说过的依赖， 就可以使用，不过这里数据源需要自己根据自己的数据来构造就可以了，我引入的事 `data` 中的一组假数据，在这里给大家两组看一下

```js
export const coordData = [
  {
    name: '黑龙江',
    position: [127, 47],
    pointData: {
      out: 100,
      provide: 10,
    },
    line: [
      {
        current: [
          [127, 47],
          [126, 43],
        ],
        type: 1,
      },
    ],
  },
  {
    name: '吉林',
    position: [126, 43],
    pointData: {
      out: 120,
      provide: 11,
    },
    line: [
      {
        current: [
          [126, 43],
          [113, 41],
        ],
        type: 1,
      },
    ],
  },
 ]
```



