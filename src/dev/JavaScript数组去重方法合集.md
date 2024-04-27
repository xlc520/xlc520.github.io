---
author: xlc520
title: JavaScript数组去重方法合集
excerpt: 
description: JavaScript数组去重方法合集
date: 2023-11-16
category: JavaScript
tag: JavaScript
article: true
timeline: true
icon: java
---

# JavaScript 数组去重方法合集

## **01. 双重 for 循环**

```javascript

var arr = [2,2,3,8,2,2,5,5,12,33,43,5,4,15,9];
function deduplication(arr){
   for (var i = 0; i < arr.length; i++) {
       for (var j = 0; j < arr.length; j++) {
           if (arr[i] == arr[j] && i != j) { 
              arr.splice(j, 1);
            }
       }
    }
    return arr;
}
var arr2  = deduplication(arr);
console.log(arr2);
```

## **02. for 循环 + indexOf 去重**

```javascript
var arr = [2,2,3,8,2,2,5,5,12,33,43,5,4,15,9];
 function deduplication(arr) {
    //定义一个新的临时数组 
    var newArr=[]; 
    //遍历当前数组 
    for(var i=0;i<arr.length;i++) {
      //如果当前数组的第i已经保存进了临时数组，那么跳过，
      //否则把当前项push到临时数组里面 
      if(newArr.indexOf(arr[i]) === -1) {  //indexOf() 判断数组中有没有字符串值，如果没有则返回 -1 
         newArr.push(arr[i]);
      }
      }
    return newArr
  }
  var arr2 = deduplication(arr);
  console.log(arr2);  
```

## **03. indexOf 方法**

```javascript
var arr = [2,2,3,8,2,2,5,5,12,33,43,5,4,15,9];
    function deduplication(arr) {
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            if (arr.indexOf(arr[i]) == i) {
              newArr.push(arr[i]);
            }
        }
        return newArr;
    }
   var arr2 = deduplication(arr);
   console.log(arr2);  

```

## **04. includes 实现数组去重**

```javascript
var arr = [2,2,3,8,2,2,5,5,12,33,43,5,4,15,9];
    function deduplication(arr) {
      let newArr = [];
      for(i=0; i<arr.length; i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
      }
     return newArr
   }
var arr2 = deduplication(arr);
console.log(arr2);
```

## **05. filter() 去重**

```javascript
var arr = [2,2,3,8,2,2,5,5,12,33,43,5,4,15,9];
  var newArr = arr.filter(function(item,index){
     return arr.indexOf(item) === index;  // indexOf 只能查找到第一个  
  });
 
console.log(newArr);
```

## **06. ES6 Set 结构 new Set()**

```javascript
var arr = [2,2,3,8,2,2,5,5,12,33,43,5,4,15,9];
  function deduplication(arr){
    var newArr = [...new Set(arr)]; //利用了Set结构不能接收重复数据的特点
    return newArr
  }
 
var arr2 = deduplication(arr)
console.log(arr2); 
```
