---
title: Vue JavaScript封装axios
excerpt:
description: Vue JavaScript封装axios
date: 2024-09-25
category: Java
tag: Java
author: xlc520
article: true
timeline: true
icon: java
---

```component VPBanner
title: Vue JavaScript封装axios
content: Vue JavaScript封装axios
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: Vue JavaScript封装axios
    link: /dev/Vue JavaScript封装axios
```

# Vue JavaScript封装axios

## **1.axios 简介**

axios 是一个用来发起网络请求的 js 库，返回的格式是 Promise。

vue 项目中基本都是用 axios 发起网络请求。

## **2.安装配置 axios**

### **2.1 安装 axios**

```
npm i axios -- save
```

### **2.2 配置 axios**

1. 创建 Axios 实例
2. 添加请求拦截器
3. 添加响应拦截器
4. 配置全局的 loading

在 src/util 下面新建 axios.js 文件

```javascript
import axios from "axios";
import { ElMessage } from 'element-plus'
import { ElLoading } from 'element-plus'
import { ref } from 'vue'
// -------------------------1. 创建axios实例-----------------------
const instance = axios.create({
  // 接口
  baseURL: "/api",
  // 超时时间
  timeout: 3000,
});
// -------------------------2.请求拦截-----------------------
instance.interceptors.request.use(
  config => {
    let token = sessionStorage.getItem('token');
    if (token) {
      config.headers['token'] = token
    }
    // 加载loading
    addLoading();
    return config;
  },
  error => {
    //  请求发生错误，抛出异常
    Promise.reject(error);
  }
);

// -------------------------3.响应拦截-----------------------
instance.interceptors.response.use(
  res => {
    // 取消加载 loading
    cancelLoading();
    return res;
  },
  error => {
    // 取消加载 loading
    cancelLoading();
    if (error && error.response) {
      const status = error.response.status
      switch (status) {
        case 400:
          ElMessage.error("请求错误");
          break;
        case 401:
          ElMessage.error("未授权，请重新登录");
          break;
        case 403:
          ElMessage.error("登录过期，请重新登录");
          break;
        case 404:
          ElMessage.error("请求错误，未找到相应的资源");
          break;
        case 408:
          ElMessage.error("请求超时");
          break;
        case 500:
          ElMessage.error("服务器错误");
          break;
        case 504:
          ElMessage.error("网络超时");
          break;
        default:
          ElMessage.error("请求失败");
      }
    } else {
      if (JSON.stringify(error).includes("timeout")) {
        error.code = "TIMEOUT";
        error.message = "服务器响应超时，请刷新页面";
      }
    }
    return Promise.reject(error);
  },

);

// -------------------------4.配置全局loading-----------------------
let loadCount = 0;
let loadingInstance = ref(null);
// 加载loading
const addLoading = () => {
  loadCount++;
  if (loadCount === 1) {
    loadingInstance.value = ElLoading.service({
      fullscreen: false,
      text: "正在请求数据中....",
      background: "rgba(0, 0, 0, 0)",
    });
  }

};
// 取消加载loading
const cancelLoading = () => {
  loadCount--;
  if (loadCount === 0) {
    loadingInstance.value.close();
  };
};
// -------------------------配置全局loading-----------------------
// 5.导出 axios 实例
export default instance;
```

### **2.3 封装常用的 http 请求**

在 /src/util 下面新建 http.js 文件

> 其实就是先引入 axios 实例，然后将 axios 的几种常用网络请求封装成 Promise 并返回。

```javascript
import instance from "./axios";

const post = (url, data) => {
    return new Promise((resolve, reject) => {
        instance
            .post(url, data)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
const get = (url, data) => {
    return new Promise((resolve, reject) => {
        instance
            .get(url, { params: data })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
const put = (url, data) => {
    return new Promise((resolve, reject) => {
        instance
            .put(url, data)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

const del = (url, data) => {
    return new Promise((resolve, reject) => {
        instance
            .delete(url, { params: data })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export default {
    post,
    get,
    put,
    del,
};
```

### **2.4 开发接口**

在 /src/api 文件夹下新建接口文件

```javascript
import http from "../utils/http";
// 用户登录
const login = (data) => {
  return http.post("/index/user/login", data);
};
export default { login }
```

## **3.请求案例**

```javascript
// 导入用户api
import userApi from "../api/user";

// 登录
const onSubmit = async () => {
  const res = await userApi.login(form);
  if (res.data.code == 200) {
  // 登录逻辑
  } else {
    ElMessage.error(res.data.message);
  }
};
```



<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
