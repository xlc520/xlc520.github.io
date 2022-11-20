import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";
export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  dest: "./dist",
  title: "StudyNote",
  description: "个人学习的笔记，记录学习过程遇到的问题，学到的知识，收集各种学习工具，各种技巧，各种使用教程。",
  theme,
  shouldPrefetch: false,
  head: [
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
    ["meta", { name: "referrer", content: "no-referrer" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],
  plugins: [
    searchProPlugin({
      // 配置选项
      indexContent: true,
      hotReload: true,
      customFields: [
        {
          name: "tags",
          getter: ({ frontmatter }) => frontmatter.tag as string[],
          formatter: `标签: $content`,
        },
        {
          name: "category",
          getter: ({ frontmatter }) => frontmatter.category as string[],
          formatter: `分类: $content`,
        },
        {
          name: "updateTime",
          getter: ({ frontmatter }) => frontmatter.git?.git.toLocaleString(),
          formatter: `更新时间: $content`,
        },
        {
          name: "author",
          getter: ({ frontmatter }) => frontmatter.author as string[],
          formatter: `作者: $content`,
        },
        {
          name: "title",
          getter: ({ frontmatter }) => frontmatter.title as string[],
          formatter: `标题: $content`,
        },
        {
          name: "description",
          getter: ({ frontmatter }) => frontmatter.description as string[],
          formatter: `描述: $content`,
        },
        
      ]
    }),
  ],
});
