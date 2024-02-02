import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
// import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "StudyNote",
  description: "个人学习的笔记，记录学习过程遇到的问题，学到的知识，收集各种学习工具，各种技巧，各种使用教程。",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
  shouldPrefetch: false, 
  shouldPreload: false,
  head: [
    ["meta", { name: "robots", content: "all" }],
    ["meta", { name: "author", content: "xlc520" }],
    [
      "meta",
      {
        "http-equiv": "Cache-Control",
        content: "no-cache, no-store, must-revalidate",
      },
    ],
    ["meta", { "http-equiv": "Pragma", content: "no-cache" }],
    ["meta", { "http-equiv": "Expires", content: "0" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "Java,MySQL,Spring,Redis,MyBatis,SpringBoot,IDEA,JVM,Java基础,并发编程,虚拟机,数据库,笔记,教程,linux,Windows,shell",
      },
    ],
    [
      "meta",
      {
        name: "description",
        content:
          "个人学习的笔记，记录学习过程遇到的问题，学到的知识，收集各种学习工具，各种技巧，各种使用教程。",
      },
    ],
    // 百度统计
    [
      "script",{},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?94d325c8ef98034a16f401082b6295a0";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ],
    // 51.la统计
    [
      "script",{},
      `
      !function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"JiDO506kAypiF3n8",ck:"JiDO506kAypiF3n8",autoTrack:true,hashMode:true});
      `
    ],
    // 解决403错误
    // ["meta", { name: "referrer", content: "no-referrer" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  plugins: [
    // searchProPlugin({
    //   // 索引全部内容
    //   indexContent: true,
    //   // 是否自动提示搜索建议
    //   autoSuggestions: true,
    //   hotKeys: [{ key: "k", ctrl: true }, { key: "/", ctrl: true }], //热键
    //   // 存储搜索结果历史的最大数量
    //   resultHistoryCount: 10,
    //   // 存储搜索查询词历史的最大数量
    //   queryHistoryCount: 10,
    //   // 结束输入到开始搜索的延时
    //   searchDelay: 500,
    //   // 是否在开发服务器中中启用实时热重载
    //   hotReload: true,
    //   // 结果排序策略
    //   sortStrategy: "max",
    //   // 为分类和标签添加索引
    //   customFields: [
    //     {
    //       getter: (page) => page.frontmatter.category,
    //       formatter: {
    //         "/": "分类：$content",
    //       },
    //     },
    //     {
    //       getter: (page) => page.frontmatter.tag,
    //       formatter: {
    //         "/": "标签：$content",
    //       },
    //     },
    //     {
    //       name: "author",
    //       getter: (page) => page.frontmatter.author,
    //       formatter: "作者：$content",
    //     },
    //   ],
    // }),
  ],

});
