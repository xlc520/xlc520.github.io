import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  base: "/",

  dest: "./dist",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "StudyNote",
      description: "个人学习的笔记，记录学习过程遇到的问题，学到的知识，收集各种学习工具，各种技巧，各种使用教程。",
    },
  },

  themeConfig,
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        hotKeys: ['s', '/'],
        maxSuggestions: 13,//指定搜索结果的最大条数
        locales: {
          '/': {
            placeholder: '搜索',
          }
        },
      },
      
    ],
  ],
});
