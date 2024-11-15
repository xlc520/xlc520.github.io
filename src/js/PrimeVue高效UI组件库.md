---
title: PrimeVue高效UI组件库
excerpt:
description: PrimeVue高效UI组件库
date: 2024-10-12
category: js
tag: js
author: xlc520
article: true
timeline: true
icon: javascript
---

```component VPBanner
title: PrimeVue高效UI组件库
content: PrimeVue高效UI组件库
logo: 
color: var(--banner-text)
background: rgba(217, 244, 208, 0.5)
actions:
  - text: PrimeVue高效UI组件库
    link: /js/PrimeVue高效UI组件库
```

# PrimeVue高效UI组件库

### PrimeVue 组件库地址

https://primevue.org/

###  PrimeVue 使用方法

安装依赖：

```shell
pnpm add primevue@4.0.0-rc.2
```

项目中配置：

```javascript
import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

const app = createApp(App);
app.use(PrimeVue, {
    // 配置主题
    theme: {
        preset: Aura
    }
});
```

使用组件：

```vue
   <template>
     <Button label="点击我" />
   </template>

   <script>
   import { Button } from 'primevue';

   export default {
     components: {
       Button,
     },
   };
   </script>
```



<Share colorful service="email,qq,qzone,qrcode,weibo,telegram,twitter" />
