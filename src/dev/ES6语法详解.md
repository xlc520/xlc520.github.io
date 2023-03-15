---
author: xlc520
title: ES6语法详解
description: 
date: 2022-06-26
category: Java
tag: 
- Java
- ES6
- JavaScript
article: true
timeline: true
icon: java
---



# ES6语法详解

## let变量

`let`声明的变量在`let`命令所在的代码块中有效。不存在变量提升，只能先声明后使用。

### 暂存死区

如果区块中存在`let`和`const`命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量。

```javascript
var a = 1;
{
    a = 2;           //ReferenceError
    let a = 'a';
    console.log(a);  //'a';
}
```

在相同块级作用域中，不能用`let`重复声明同一变量。即使已存在的变量是通过`var`声明的。

```javascript
let a = 1;  let a = 2;   //报错
let a = 1;  var a = 2;   //报错，var声明有变量提升作用
```

### 块级作用域和函数声明

在块级作用域中，用`let`声明的变量只在当前作用域中有效，且不会受到外部的影响，所以块级作用域可以替代自执行函数表达式。

理论上，函数在块级作用域中声明行为和`let`类似，但在es6浏览器环境中，为了兼容老版本，函数声明与`var`声明变量类似，会提升到全局作用域头部，和当前块级作用域的头部，为了避免差异，可以将函数声明写成函数表达式。

```javascript
let fn = function () {};    //函数表达式
```

## const常量

声明常量必须马上赋值且不能再改变。`const`和`let`有类似的特点：在块级作用域内有效，声明不提升，存在暂存死区，不可重复声明。

复合型数据如`object`，声明后不可在重新赋值，但可以修改这个值本身，比如修改属性和新增属性。冻结对象可以使用`Object.freeze`方法。

```javascript
const json = Object.freeze({});
//常规模式下修改json无效，严格模式下报错
```

### 顶层变量

`javascript`的顶层对象是`window`，`node`的顶层对象是`global`，`ES6`规定用`let` `const` `class`声明的变量不在是顶层对象的属性。

```javascript
let a = 1;
window.a   //undefined
```

## 解构赋值

从数组和对象中提取值，对变量进行赋值，称为解构（destructuring）

**数组**的解构赋值，按照对应的顺序赋值，如果值数量超出则多余的值被抛弃，如果值不够则为`undefined`。

```javascript
let arr = [1, [2, 3]];
let [a, [b, c]] = arr;
```

**对象**的解构赋值必须要属性名相同，顺序毫无影响。如果属性名不同，需要写成如下形式。

```javascript
let {a: b} = {c: 1};
b //1
```

实际上对象解构赋值的是后者。

```javascript
let {a} = {a: 1}     //简写 
let {a: a} = {a: 1}  //全写
```

**字符串**解构赋值和数组类似。

```javascript
let [a, b, c] = 'hello';
console.log(a,b,c)  //h,e,l
```

数组解构赋值**默认值**，当等号右边的值 `=== undefined`时，默认值生效。

```javascript
let [a = 1, b = 2] = [undefined, null];
console.log(a, b);  //1 null
```

以上代码逻辑是：

```javascript
if ([undifined, null][0] === undefined) {
    a = 1;
} else {
    a = [undifined, null][0]
}
```

对象解构赋值默认值，当对象属性值严格等于`undefined`时。

```javascript
let {a, b=2} = {1, undefined}
a,b //1,2

let {a: b=1} = {a: undefined}
b //1
```

事实上，只要某种数据结构具有 `Iterator` 接口，都可以采用数组形式的解构赋值。

函数参数的解构赋值，传入的参数不是数组或对象，而是变量。

```javascript
let fn = ( [a, b] ) => {
    return a + b;
};
fn ([1, 2]); //3
[[1,2],[3,4]].map([a,b]=> a+b);
//[3,7]
```

函数参数也可使用默认值

```javascript
let fn({a=1, b=2} = {}) { return [a,b]}
fn({a:10})  // [10,2]
```

等号右边如果不是对象，会先转成对象，转换失败则报错。

```javascript
let {toString: s} = 123;
s === Number.prototype.toString

let {toString: s} = true;
s === Blooean.prototype.toString
```

`undefined` `null`不能转成对象，结构赋值报错。

```javascript
let {a} = undefined;   //TypeError
let {b} = null;        //TypeError
```

解构赋值应用:

```javascript
//交换变量的值
let a = 1, b = 2;
[a,b] = [b, a];

//函数返回多个值
let fn = () => {x: 1, y: 2}

//提取json数据
let {a, b} = obj;
```

## 字符串扩展

`ES6`提供`for...of`方法遍历字符串。

新增的其他方法：`startsWidth()` `endsWidth()` `includes()`。

```javascript
let s = 'hello word!';
s.startsWith('hello');     //true
s.endsWidth('word');       //true
s.includes('o');           //true 
```

`charAt()` 用于返回给定位置的字符，对于编码大于0xFFFF的字符用`at()`方法。

```javascript
'ab'.charAt(0)  //'a'
'𠮷a'.charAt(0) //'\uD842'
'𠮷a'.at(0)     //'𠮷'
```

### 模版字符串

用于字符串拼接，`{}`中可以进行运算、引用对象、调用函数，非字符串类型会被转成字符串。可以嵌套使用，`{}`中可以再使用模版字符串。如果字符串中有反引号要用反斜杠转义。

```javascript
let name = 'zq';
`your name is ${name}`;
```

模版字符串中空格和和缩紧都会被保留，可以用`trim()`方法消除。

```javascript
`<ul>
    <li><li>
</ul>`.trim();  
```

## 正则表达式

`RegExp`构造函数参数有两种情况。

```javascript
//参数一：字符串，参数二：修饰符
let reg = new RegExp('abc','i');

//参数一：正则表达式
let reg = new RegExp(/abc/);
```

以上代码中，第二种只能传一个参数，返回原有正则的拷贝，不允许传第二个参数添加修饰符。

```javascript
let reg = RegExp(/abc/, 'i');  //报错
```

`ES6`允许给`RegExp`构造函数传入第二个参数添加修饰符，即使第一个参数是正则，但会覆盖原有正则表达式的修饰符。

```javascript
let reg = new RegExp(/abc/g, i).flags  //'i'
```

新增`flags`属性，返回正则表达式的修饰符。

```javascript
//ES5的source属性
/abc/i.source  //'abc'

//ES6的flags属性
/abc/i.flags   //'i'
```

## 数值相关

### Number对象扩展

`ES6`在`Number`对象上提供了新的方法。

`Number.isFinite()`判断是否为有限数值。

```javascript
Number.isFinite('1')   //false
Number.isFinite(NaN)   //false
Number.isFinite(1.01)  //true
Number.isFinite(Infinity)  //false
```

`Number.isNaN()`检测一个值是否为`NaN`，只有`NaN`才会返回`true`，其他值一律返回`false`。

> 全局方法`isFinite()`和`isNaN()`会将传入的值转成数字类型再判断，`Number.isFinite()`和`Number.isNaN()`方法参数必须是数值类型，否则直接返回`false`。

```javascript
isNaN('NaN')          //true
Number.isNaN('NaN')   //false
```

`ES6`将全局方法`parseInt()`和`parseFloat()`放到`Number`对象上，行为不变。

`Number.isInteger()`用来判断一个数是否为整数。

> 小数和整数采用相同的存储方式，小数点后全为零也为整数。

```javascript
Number.isInteger(2)    //true
Number.isInteger(2.0)  //true
```

### Math对象扩展

`Math.trunc()`方法返回数值的整数部分。

```javascript
Math.trunc(1.1)     //1
Math.trunc(-1.1)    //-1
Math.trunc('1.1')   //1
Math.trunc('a')     //NaN
```

可以使用`Math.floor()`和`Math.ceil()`方法模拟`Math.trunc()`。

```javascript
Math.trunc = Math.trunc || function(x) {
  return x < 0 ? Math.ceil(x) : Math.floor(x);
};
```

`ES6`新增了**三角函数**：

- `Math.sinh(x)` 返回x的双曲正弦
- `Math.cosh(x)` 返回x的双曲余弦
- `Math.tanh(x)` 返回x的双曲正切
- `Math.asinh(x)` 返回x的反双曲正弦
- `Math.acosh(x)` 返回x的反双曲余弦
- `Math.atanh(x)` 返回x的反双曲正切

### 指数运算符

`ES6`新增了指数运算符`**`。

```javascript
let a = 2;
a = a**3;    //8
//可以简写成 a **= 3
```

## 函数的扩展

### 基本用法

`ES6` 允许为函数的参数设置**默认值**，即直接写在参数定义的后面。使用默认值时，不能有同名参数。

```javascript
function (x = 1) {}
function (x, x=1) {}   //报错
```

默认参数不是传值，而是每次都重新计算。

```javascript
let y = 10;
function fn (x = y+1) {
    console.log(x);
}
fn();  //11;
y++;
fn();  //12;
```

函数参数是默认声明的，不能用`let`或`const`再次声明，可以用`var`再次声明。

```javascript
function (x) {
    let x = 1;    //报错
    var x = 1;    //正常
}
```

函数默认值与解构赋值默认值结合使用。

```javascript
//只使用解构赋值默认值
function fn ({a, b = 2}) {
    console.log (a, b);
}
fn ({a:1});   //1, 2
fn ({a:1, b:3});   //1, 3
fn ();   //报错

//使用解构赋值默认值和函数参数默认值
function fn ({a, b = 2} = {}) {
    console.log (a, b);
}
fn()   //undefined, 2
```

函数默认值参数不是最后一个参数，则不能省略，可以用`undefined`代替，不能用`null`代替。

```javascript
function fn (x, y=1, z) {
    console.log(x, y, z);
};
fn(1,2)   //1,2,undefined
fn(1,undefined,2);  //1,1,2
```

将函数参数默认值设成`undefined`表示此参数可以省略。

```javascript
function fn (x=undefined, y) {}
fn(,2);
```

### length属性

指定了默认值以后，函数的`length`属性，将返回没有指定默认值的参数个数。如果设置了默认值的参数不是尾参数，那么`length`属性也不再计入后面的参数。

```javascript
function fn (x, y=1, z) {};
fn(1,2,3).length;    //1
```

### 函数参数作用域

一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）与函数内部不是同一个作用域。等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。

```javascript
var x = 1;
function f(x, y = x) {
  console.log(y);
}
f(2) // 2

//参数作用域如下：
{
    let x = 2;
    let y = x;    
}
```

### rest参数

`ES6` 引入 `rest` 参数（形式为`...变量名`），用于获取函数的多余参数，`rest` 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。`...变量`后不能再有参数，否则报错。

函数的`length`属性不包括`rest`参数。

```javascript
function fn(x, ...rest) {
    console.log(Array.isArray(rest));
    console.log(rest);
};
fn(1,2,3).length;  //1
//true
//[2,3]
```

从 `ES5` 开始，函数内部可以设定为严格模式。`ES7`规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错。

### name属性

函数的`name`属性，返回该函数的函数名。如果将一个匿名函数赋值给一个变量，`ES5` 的`name`属性，会返回空字符串，而 `ES6` 的`name`属性会返回实际的函数名。

```javascript
let fn = () => {}

//es5
fn.name  //''

//es6
fn.name  //'fn'
```

如果将一个具名函数赋值给一个变量，则 `ES5` 和 `ES6` 的`name`属性都返回这个具名函数原本的名字。

```javascript
let fn = function a() {};
//es5 es6
fn.name    //'a'
```

### 箭头函数

- 函数体内的`this`对象，就是定义时所在的对象，而不是使用时所在的对象。
- 不可以当作构造函数，也就是说，不可以使用`new`命令，否则会抛出一个错误。
- 不可以使用`arguments`对象，该对象在函数体内不存在。如果要用，可以用 `rest` 参数代替。
- 不可以使用`yield`命令，因此箭头函数不能用作 `Generator` 函数。

箭头函数根本没有自己的`this`，导致内部的`this`就是外层代码块的`this`。

除了`this`，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：`arguments`、`super`、`new.target`。

不能用`call()`、`apply()`、`bind()`这些方法去改变this的指向。

## 数组的扩展

### 扩展运算符

扩展运算符用三个点号表示，功能是把数组或类数组对象展开成一系列用逗号隔开的值（数组）,和...rest相反。

扩展运算符后面还可以放置表达式。

```javascript
let x = 1;
...(x > 0 ? ['a','b'] : [])   //'a','b'
```

如果扩展运算符后面是一个空数组，则不产生任何效果。

```javascript
[...[], 1]  //[1]
```

扩展运算符可以展开数组，所以不再需要apply方法，将数组转为函数的参数。

```javascript
Math.max.apply(null, [14, 3, 77])

// ES6 的写法
Math.max(...[14, 3, 77])
```

扩展运算符可用于复制数组，合并数组。

```javascript
let arr1 = [1,2];

//ES5
let arr2 = arr1.concat();

//ES6
let arr2 = [...arr1];

//ES6
let [...arr2] = arr1;
```

扩展运算符还可以将字符串转为真正的数组。

```javascript
[...'hello']
// [ "h", "e", "l", "l", "o" ]
```

任何 `Iterator` 接口的对象, 都可以用扩展运算符转为真正的数组。

通过 `push` 函数，将一个数组添加到另一个数组的尾部。

```javascript
let arr1 = [1,2,3];
let arr2 = [4,5];
arr1.push(...arr2);
```

扩展运算符其他应用: **复制数组**，**合并数组**，**展开字符串**(有Iterato接口的对象)，****

```javascript
let arr = [1,2];

let arr1 = [...arr];  //复制数组
let arr2 = [...arr, ...[3,4]];   //合并数组
let arr3 = [...'hello'];   //展开字符串
```

### Array.from()

`Array.from`方法用于将两类对象转为真正的数组：类似数组的对象和可遍历（`iterable`）的对象（包括 `ES6` 新增的数据结构 `Set` 和 `Map`）。[将类数组转成数组](https://link.segmentfault.com/?enc=7TBM4qWk0KvtKHeEfNIU3w%3D%3D.%2BOpU5EeurIhyb8WliOadB0lXgsBJVbhY711Ce9SUdBJZQDSXXbEAM5bKZrs1jim5HdBHQ%2B9nEkasCiMSTYwRW42mOBSmnEngEhWrN%2FLmuge01wDlT86RrImxi%2F6teelWP9zk%2BTVV%2BIeXaqfI2oaxgz9Dx2zjUHDwv86hznUhYVj79HYNdyDCyJTOp1zBPYf5)

```javascript
let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
};

// ES5的写法
var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6的写法
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c']
```

只要有`length`属性的对象就叫做类似数组的对象，就可以被转化。

```coffeescript
let obj = {length: 2}
Array.form(obj)    //[undefined, undefined]
```

对于还没有部署该方法的浏览器，可以用 `Array.prototype.slice` 方法替代。

```javascript
const toArray = (() =>
  Array.from ? Array.from : obj => [].slice.call(obj)
)();
```

实际应用中，常见的类似数组的对象是 DOM 操作返回的 `NodeList` 集合，以及函数内部的 `arguments` 对象。`Array.form()` 都可以转换。

`Array.from` 还可以接受第二个参数，作用类似于数组的 `map` 方法，用来对每个元素进行处理，将处理后的值放入返回的数组。如果 `map` 函数里面用到了 `this` 关键字，还可以传入 `Array.from` 的第三个参数，用来绑定 `this`。

```javascript
Array.from([1, 2, 3], (x) => x * x);
//等同于
Array.from([1,2,3]).map(x => x * x);
```

如果参数是一个真正的数组，`Array.from` 会返回一个一模一样的新数组。

```javascript
Array.from([1,2,3])   //[1,2,3]
```

### Array.of()

`Array.of`方法用于将一组值，转换为数组。

```javascript
Array.of(3,4) // [3,4]
Array.of(2)   // [2]
```

和`Array()`方法不同，传入一个值时，表示数组的长度。

```javascript
Array(2)  //[undefinde, undefined]
```

### find()和findIndex()

`find` 方法找出第一个符合条件的数组成员。它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为 `true` 的成员，然后返回该成员。如果没有符合条件的成员，则返回 `undefined`。

```javascript
[1,2,3].find(v => v>2);   //3

[1,2,3].find((v, i, arr) => {
    return v>2
});   
```

数组实例的 `findIndex` 方法的用法与 `find` 方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。

这两个方法都可以接受第二个参数，用来绑定回调函数的 `this` 对象。

### fill() 方法

`fill` 方法使用给定值，填充一个数组。还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。

```javascript
[1,2,3].fill('a');  //['a', 'a', 'a']
[1,2,3,4,5].fill('a', 2, 4);   //[1, 2, 'a', 'a', 5]
```

> 如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象。

```javascript
let arr = new Array(2).fill({name: 'Jim'});
arr[0].name = 'Tim';

// [{name: 'Tim'}, {name: 'Tim'}]
```

### keys(), values(), entries() 方法

`keys()` 是对键名的遍历，`values()` 是对键值的遍历，`entries()` 是对键值对的遍历。`keys(), values(), entries()` 返回一个遍历器对象。可以用 `for...of` 循环进行遍历。

### includes() 方法

`includes()` 判断数组是否包含给定的值，返回布尔值，`NaN` 也能实现。它还有第二个参数，表示查找的起始位置，为负数则表示从后往前。
而 `indexOf()` 方法对 `NaN` 无效，会返回-1；

> includes 为 ES2016 引入的方法。

相比于 indexOf，返回的是元素第一次出现的位置，再比较是否等于 -1，内部使用 === 判断，对 NaN 不适用。

### 数组的空位

数组的空位指，数组的某一个位置没有任何值。

```javascript
Array(3);  //[,,]
```

ES5 对空位的处理不一致。大多数情况下会被忽略。

- forEach(), filter(), reduce(), every(), some() 会跳过空位。
- map() 会跳过空位，但会保留这个值。
- join() 和 toString() 会将空位视为 undefined ，而 undefine 和 null 会被处理成空字符串。

```javascript
// forEach方法
[,'a'].forEach((x,i) => console.log(i)); // 1

// filter方法
['a',,'b'].filter(x => true) // ['a','b']

// every方法
[,'a'].every(x => x==='a') // true

// reduce方法
[1,,2].reduce((x,y) => return x+y) // 3

// some方法
[,'a'].some(x => x !== 'a') // false

// map方法
[,'a'].map(x => 1) // [,1]

// join方法
[,'a',undefined,null].join('#') // "#a##"

// toString方法
[,'a',undefined,null].toString() // ",a,,"
```

ES6 会将空位转为 undefined。

Array.from 方法、扩展运算符（...）、entries()、keys()、values()、find() 和 findIndex() 会将数组的空位，转为 undefined ；for···of 会遍历空位。

## 对象的扩展

### 属性简写

直接写入变量和函数，作为对象的属性和方法。

```javascript
let a = 1;
let obj = {
  a,
  method() {
    return this.a
  }
}
```

这种写法用于函数的返回值。

```javascript
function getPoint() {
  const x = 1;
  const y = 10;
  return {x, y};
}
```

### 属性名表达式

定义对象有两种方法。

```javascript
obj.a = 1;
obj['c' + 'd'] = 2;
```

如果使用字面量方式定义对象（使用大括号），在 ES5 中只能使用方法一。ES6 允许字面量定义对象时，用方法二（表达式）作为对象的属性名，即把表达式放在方括号内。

```javascript
let lastWord = 'last word';

const a = {
  'first word': 'hello',
   [lastWord] : 'world'
};

a['first word'] // "hello"
a[lastWord] // "world"
a['last word'] // "world"
```

属性名表达式如果是一个对象，默认情况下会自动将对象转为字符串[object Object]。

```javascript
let obj1 = {
  a: 1
};
let obj2 = {
  b: 2
}
let json = {
  [obj1] : 'value1',
  [obj2] : 'value2'
}

json  //Object {[object Object]: 'value2'}
```

[obj1] 会把 [obj2] 覆盖掉，而 json 最后只有一个 [object Object] 属性。

### Object.is()

为了解决相等运算符（==）和严格相等运算符（===）的缺点，Object.is 用来比较两个值是否全等。

```javascript
+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true
```

### Object.assign()

Object.assign 方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象，属于浅拷贝。

此方法的第一个参数是目标对象，后面的参数都是源对象。

如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性。

```javascript
const target = { a: 1, b: 1 };

const source1 = { b: 2, c: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}
```

如果只有一个参数，Object.assign 会直接返回该参数。

```javascript
const obj = {a: 1};
Object.assign(obj) === obj // true
```

如果首参不是对象，则会先转成对象，然后返回，undefined 和 null 无法转成对象，报错。如果不是首参，只有字符串会以数组形式拷贝入目标对象，其他都不会产生效果。

```javascript
typeof Object.assign(2) // "object"
let obj = {a: 1};
Object.assign(obj, undefined) === obj // true
Object.assign(obj, null) === obj // true

const v1 = 'abc';
const v2 = true;
const v3 = 10;

const obj = Object.assign({}, v1, v2, v3);
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```

### 属性的可枚举行

对象的每个属性都有一个描述对象（Descriptor），用来控制该属性的行为。Object.getOwnPropertyDescriptor 方法可以获取该属性的描述对象。

```javascript
let obj = { foo: 123 };
Object.getOwnPropertyDescriptor(obj, 'foo')
//  {
//    value: 123,
//    writable: true,
//    enumerable: true,
//    configurable: true
//  }
```

描述对象的 enumerable 属性，称为”可枚举性“，如果该属性为 false，就表示某些操作会忽略当前属性。

有四个操作会忽略 enumerable 为 false 的属性。

- `for...in` 循环：只遍历对象自身的和继承的可枚举的属性。
- `Object.keys()`：返回对象自身的所有可枚举的属性的键名。
- `JSON.stringify()`：只串行化对象自身的可枚举的属性。
- `Object.assign()`： 忽略 enumerable 为 false 的属性，只拷贝对象自身的可枚举的属性。

### 属性的遍历

**for...in** 循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。

**Object.keys** 返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。

**Object.getOwnPropertyNames** 返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。

**Object.getOwnPropertySymbols** 返回一个数组，包含对象自身的所有 Symbol 属性的键名。

**Reflect.ownKeys** 返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。

### __ proto __属性

用来读取或设置当前对象的 `prototype` 对象。实现上，`__proto__`调用的是`Object.prototype.__proto__`。

### Object.keys(), Object.values(), Object.entries()

ES5 引入了 `Object.keys` 方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名。

ES6 引入了跟 `Object.keys` 配套的 `Object.values` 和 `Object.entries`，作为遍历一个对象的补充手段，供 `for...of` 循环使用。

**Object.values()** 方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值。

**Object.entries()** 方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。

```javascript
const obj = { foo: 'bar', baz: 42 };
Object.entries(obj)
// [ ["foo", "bar"], ["baz", 42] ]
```

### 对象的扩展运算符

ES7 将扩展运算符引入了对象。

可用于**解构赋值**：

```javascript
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x // 1
y // 2
z // { a: 3, b: 4 }
```

解构赋值不是最后一个参数，所以会报错。解构赋值要求等号右边是一个对象，否则报错。

解构赋值的拷贝是浅拷贝，且不能复制继承自原型对象的属性。

用于**拷贝对象** 和 **合并对象**

```javascript
let z = { a: 3, b: 4 };
let n = { ...z };
n // { a: 3, b: 4 }
```

这等同于使用 `Object.assign` 方法。

```javascript
let ab = { ...a, ...b };
// 等同于
let ab = Object.assign({}, a, b);
```

与数组的扩展运算符一样，对象的扩展运算符后面可以跟表达式。

```javascript
const obj = {
  ...(x > 1 ? {a: 1} : {}),
  b: 2,
};
```

## Symbel

ES5 的对象属性名都是字符串，这容易造成属性名的冲突，为了保证每个属性的名字都是独一无二的，这样就从根本上防止属性名的冲突。这就是 ES6 引入Symbol的原因。

它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。

```javascript
let s = Symbel();
typeof s
// 'Symbel'
```

s 是一个独一无二的值。

Symbol 函数前不能使用 `new` 命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象。也就是说，由于 Symbol 值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型。

Symbol 函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分。

```javascript
let s1 = Symbol('foo');

s1 // Symbol(foo)

s1.toString() // "Symbol(foo)"
```

如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值。

Symbol 函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。

Symbol 值不能与其他类型的值进行运算，会报错。但是，Symbol 值可以显式转为字符串。也可以转为布尔值，但是不能转为数值。

```javascript
let sym = Symbol('My symbol');

String(sym) // 'Symbol(My symbol)'
sym.toString() // 'Symbol(My symbol)'

Boolean(sym) // true
!sym  // false
```

### 作为属性名

```javascript
let mySymbol = Symbol();

// 第一种写法
let a = {};
a[mySymbol] = 'Hello!';

// 第二种写法
let a = {
  [mySymbol]: 'Hello!'
};

// 第三种写法
let a = {};
Object.defineProperty(a, mySymbol, { value: 'Hello!' });

// 以上写法都得到同样结果
a[mySymbol] // "Hello!"
```

Symbol 值作为对象属性名时，不能用点运算符。

在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。

## Module模块

`ES6` 模块通过`export`命令显式指定输出的代码，再通过`import`命令输入。使用模块自动采用严格模式。[严格模式详解](https://link.segmentfault.com/?enc=1gqS2d%2BHX2rNigzRaRiK9w%3D%3D.p%2F9KZRIufKJXjX29hQ8D27gL5UnNsPRc%2BdtMVanU71Ir975mR%2ByRyEs8MVq0EQyF%2Bk7QztHAKp%2Bm7S%2FJMlEEJmTYwf6XEvniadeVni7aMbk%3D)

### export

`export` 用于规定模块的对外接口，输出变量，函数，类。

```javascript
//写法1
export let a = 1;
export function b () {};

//写法2
let a = 1;
function b () {};
export {a, b};

//报错
let a = 1;
export a;
```

通常输出的变量就是本来的名字，可以用 `as` 修改。

```javascript
function a () {};
let b = 1;

export {
    a as fnA,
    b as vB
};
```

`export`输出的接口和模块内部的变量是**动态绑定**关系，变量值改变，通过接口获取的值也相应改变。

```javascript
//test.js
export let a = 1;
setTimeout(() => a=2, 1000);

import {a} from './test'
//a = 1, 1s后变成2
```

`export`必须处于**模块顶层**，如果处于块级作用域会报错。`import`也是如此。

```javascript
function () {
    export let a = 1;  //报错
}
```

### import

使用`import`加载模块。[import - MDN](https://link.segmentfault.com/?enc=ARF3XMHuI%2B65E8pPDrk7tA%3D%3D.z7wzeodzC5kDDuFlv9x8LVD%2FI7kxCCFp8oA7SjOc62fEvwbbh9XR6qMyPeXKLTL5i2%2BOL0i9LkG9%2Bpjf85EwZjcyHtfwMs0CX9ju846bXXS1FajvjAB17YpsD952EJdn)

```javascript
import {a, b} from './test'
```

`import`后跟一个大括号，括号内指定需要导入的变量，变量名需对应。但可以通过`as`修改。

```javascript
import {a as vA, b as vB} from './test';
```

`import`后的`from`用来指定模块的路径，绝对路径或相对路径，`.js`可以省略。如果模块有配置文件，则不带路径。

```javascript
import react, {Component} from 'react';
```

`import`有**提升效果**，会提升到模块头部，先执行。

由于`import`是静态执行，不能使用表达式和变量。比如`from`后的路径不能用一个变量代替。

`import`会执行所加载的模块，可以直接跟模块名。但多次加载相同模块只执行一次，`import`语句是单例模式。

```javascript
import 'module_name';

import {a} from './test';
import {b} from './test';
//等同于
import {a,b} from './test';
```

模块整体加载：

```javascript
import * as myModule from './my_module.js';
//以myModule为命名空间，在myMoudle下可以找到所有接口，不允许修改。
```

导入**默认值** ：

```javascript
export default function () {};
import fn from './test';
```

> - 导入默认值可以使用任意名字代替输出值。
> - `import`后不用大括号。
> - `export default`后跟的变量名或函数名称在模块外部无效。
> - 一个模块只能有一个默认输出，`export default`只能使用一次。
> - `export default`表示将后面的值赋给`default`，再输出一个叫`default`的变量或函数。
> - `export default`后不能有变量声明语句。

```javascript
//test.js
function fn () {};
export default fn;
//等同于
export {fn as default};
import {default as foo} from './test';
//等同于
import foo from './test';
export default let a = 1;  //报错
export default 10;         //正确
```

`import`和`export`的**复合写法**:

```javascript
export {foo, fn} from 'module';
//等同于
import {foo, fn} from 'module';
export {foo, fn};
```

### 模块在浏览器中加载

加载`javascript`脚本使用`<script>`标签，可使用`defer`或`async`实现异步加载，`defer`会等到页面渲染完，其他脚本执行完再执行，`async`只要资源加载完就终断页面渲染立即执行，不能保证多个`async`脚本按顺序执行。

在浏览器中可以使用`<script>`标签加载模块，但需要`type='module'`属性。

```xml
<script src='path/test.js' type='module'></script>
```

带有`type='module'`的`<script>`都是异步加载，等同于自动打开了`defer`属性，也可以加`async`属性，让模块加载完立即执行。

也可以直接在`<script>`标签内加载模块。

```xml
<script type='module'>
    import a from './test.js';
</script>
```

