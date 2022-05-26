import { defineUserConfig } from "vuepress";
import theme from "./theme";
// import { searchPlugin } from "@vuepress/plugin-search";
import pluginFullTextSearch from "vuepress2-plugin-full-text-search";
export default defineUserConfig({
  lang: "zh-CN",
  title: "StudyNote",
  description: "个人学习的笔记，记录学习过程遇到的问题，学到的知识，收集各种学习工具，各种技巧，各种使用教程。",

  base: "/",

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
  theme,
  shouldPrefetch: false,
  plugins: [
    [
      // require("vuepress2-plugin-full-text-search").default,
      pluginFullTextSearch,
    // searchPlugin({
    //   locales: {
    //     "/": {
    //       placeholder: "搜索",
    //     },
    //   },
    //   hotKeys:['s', '/'],
    //   maxSuggestions: 13,//指定搜索结果的最大条数
    // }),
  
  ],
  
]
});
