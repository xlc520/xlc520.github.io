---
author: xlc520
title: 基于 TS 对 axios 的封装和 api 自动生成
excerpt: 
description: 
date: 2024-03-18
category: Java
tag: Java
article: true
timeline: true
icon: java
---

# 基于 TS 对 axios 的封装和 api 自动生成

随着前后端分离的开发模式越来越流行，前端需要通过 ajax 或 fetch 等技术与后端进行数据交互，而在这些技术中，axios
被广泛应用并得到了很好的反馈。但是，直接使用原生的 axios 在大型项目中可能存在重复和复杂度高的问题，因此有必要对它进行封装，同时，自动生成
api 也可以帮助我们节省开发时间和减少错误，本文将介绍基于 TypeScript 对 axios 的封装和 api 的自动生成。

## **1. 安装和引入 axios**

我们首先需要安装 axios 并在项目中引入它，可以使用以下命令进行安装：

```sh
npm install axios --save
```

接下来，我们在需要使用的文件中引入 axios：

```sh
import axios from "axios";
```

## **2. 封装基础请求类**

我们需要在 axios 的基础上进行进一步封装来达到定制化需求，我们可以创建一个基础请求类将公共的请求操作进行封装。

```typescript
import axios from "axios";

class BaseRequest {
  private axiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: "http://localhost:3000", // 后端接口地址
      timeout: 10000, // 请求超时时间
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    });
  }

  async GET(url: string, params?: any) {
    return await this.request("GET", url, params);
  }

  async POST(url: string, data: any) {
    return await this.request("POST", url, data);
  }

  async PUT(url: string, data: any) {
    return await this.request("PUT", url, data);
  }

  async DELETE(url: string, params?: any) {
    return await this.request("DELETE", url, params);
  }

  async request(method: string, url: string, data: any) {
    try {
      const response = await this.axiosInstance.request({
        method,
        url,
        data,
      });
      const res = response.data;
      return res;
    } catch (error) {
      console.error("request error:", error);
      throw error;
    }
  }
}

export default BaseRequest;
```

在此示例中，我们创建一个 BaseRequest 类，它具有基本的 GET、POST、PUT 和 DELETE 请求方法，这些方法调用 request 方法来创建
axios 请求。我们将 axios 实例化为 axiosInstance，并传递一些设置。然后，我们定义了一个 request 方法来处理所有类型的请求。在这里，我们使用
try-catch 块来捕获异常，并将响应数据返回给调用者。

## **3. 封装具体请求类**

我们将基于 BaseRequest 类创建具体的请求类来执行特定类型的请求并获取响应进行处理。以下是一个示例类：

```typescript
import BaseRequest from "./BaseRequest";

class UserRequest extends BaseRequest {
  async getUserInfo(userId: string) {
    const url = `/user/info/${userId}`;
    const data = await this.GET(url);
    return data;
  }

  async updateUserAvatar(userId: string, formData: FormData) {
    const url = `/user/avatar/${userId}`;
    const data = await this.POST(url, formData);
    return data;
  }
}

export default UserRequest;
```

在此示例中，我们创建了 UserRequest 类，并定义了 getUserInfo 和 updateUserAvatar 两个方法来处理 getUserInfo 和
updateUserAvatar 请求。这些方法使用 BaseRequest 类的相应方法来生成请求，并返回响应数据。

## **4. 自动化生成 API**

手动编写每个请求函数并不是一个明智的选择，我们可以通过 node 脚本自动生成一整套对应的 api 文件，来将重复操作降到最小。我们可以定义一个
API 自动生成的代码模板，并在执行脚本时插入变量来生成对应的代码。以下是自动生成 api 文件的示例代码：

```typescript
const fs = require("fs");
const path = require("path");

const apiTemplate = `import BaseRequest from "../BaseRequest";

class ##className## extends BaseRequest {
##methods##
}

export default ##className##;
`;

const methodTemplate = `  async ##apiName##(##params##) {
    const url = `##url##`;
    const data = await this.##method##(url, ##data##);
    return data;
  }`;

const apiConfig = [
  {
    className: "UserRequest",
    modules: [
      {
        apiName: "getUserInfo",
        url: "/user/info/:userId",
        method: "GET",
        params: "userId",
        data: "",
      },
      {
        apiName: "updateUserAvatar",
        url: "/user/avatar/:userId",
        method: "POST",
        params: "userId, formData",
        data: "formData",
      },
    ],
  },
];

apiConfig.forEach((config) => {
  let fileContent = apiTemplate.replace("##className##", config.className);
  let methods = "";
  config.modules.forEach((api) => {
    let methodContent = methodTemplate
      .replace("##apiName##", api.apiName)
      .replace("##url##", api.url)
      .replace("##method##", api.method)
      .replace("##params##", api.params)
      .replace("##data##", api.data);
    methods += methodContent + "\n";
  });
  fileContent = fileContent.replace("##methods##", methods);

  const filePath = path.join(__dirname, `${config.className}.ts`);
  fs.writeFileSync(filePath, fileContent);
});
```

在此示例中，我们首先定义了代码的两个模板：apiTemplate 和 methodTemplate。然后，我们定义了一个 apiConfig 数组，其中包含我们将要生成的
API 信息。后续的代码会遍历 apiConfig 数组，并使用 apiTemplate 和 methodTemplate 来生成具体的代码文件。相应的代码文件中就定义了我们的请求方法和相关的请求
url、请求数据和请求方式。

## **5. 总结**

在本文中，我们基于 TypeScript 对 axios 进行了封装，使得我们可以方便地进行请求操作并处理响应数据。我们还展示了如何通过自动生成
api 的方式来减少代码的重复和降低出错的概率。封装 axios 和自动生成 api 是大型项目中的一种好的实践，可以提高项目的可读性和重用性，同时也有助于快速开发和迭代。

# 第二种

为了使用 TypeScript 对 Axios 进行封装，你可以创建一个名为 `http.ts` 的文件，其中包含以下内容：

```typescript
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class HttpClient {
  private instance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config);

    // 设置请求拦截器
    this.instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // 在发送请求之前做些什么
        // 例如：添加token
        return config;
      },
      (error) => {
        // 请求错误时做些什么
        return Promise.reject(error);
      }
    );

    // 设置响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        // 在then或catch中使用response.data
        return response.data;
      },
      (error) => {
        // 响应错误时做些什么
        return Promise.reject(error);
      }
    );
  }

  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.instance.request(config);
  }

  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.get(url, config);
  }

  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.post(url, data, config);
  }

  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.put(url, data, config);
  }

  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.delete(url, config);
  }
}

export default HttpClient;
```

在你的项目中，你可以创建一个 `config.ts` 文件，其中包含 axios 的默认配置：

```typescript
import { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
};

export default config;
```

最后，在你的入口文件 `main.ts` 中导入并实例化 `HttpClient`：

```typescript
import HttpClient from './http';
import config from './config';

const http = new HttpClient(config);

export default http;
```

现在，你可以在其他地方使用 `http` 实例来发起请求，例如：

```typescript
import http from './http';

http.get('/users');
```

这样，你就成功地使用 TypeScript 对 Axios 进行了封装。
