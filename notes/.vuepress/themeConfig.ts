import { defineThemeConfig } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "https://xlc520.github.io",

  author: {
    name: "xlc520",
    url: "https://xlc520.github.io",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo.svg",

  repo: "https://github.com/xlc520/xlc520.github.io",

  docsDir: "notes",
  docsRepo: "https://github.com/xlc520/xlc520.github.io",
  docsBranch: "master",
  // navbar
  navbar: navbar,

  // sidebar
  //sidebar: sidebar,
  sidebar: {
    "/study/": "structure",
    "/dev/": "structure",
    "/linux/": "structure",
    "/script/": "structure",
    "/tools/": "structure",
    "/source_code/": "structure",
    "/git/": "structure",
    "/daily/": "structure",
    "/pc/": "structure",
    "/article/": "structure",
    "/other/": "structure",
    // fallback
    "/": [
      "" /* / */,
    ],
  },

  footer: "两情若是久长时，又岂在朝朝暮暮",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime","Word"],

  blog: {
    avatar: "https://avatars.githubusercontent.com/u/56480807?v=4",
    description: "山有木兮木有枝,心悦君兮君不知",
    intro: "/intro.html",
    sidebarDisplay: "mobile",
    articlePerPage: 10,//每页的文章数量
    articleInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime","Word"],
    medias: {
      Github: "https://github.com/xlc520",
		  Gitee: "https://gitee.com/xulch",
      Baidu: "https://baidu.com",
      Email: "xulinch@88.com",
      // Baidu: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      // Email: "https://example.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      // GitHub: "https://example.com",
      // Gitlab: "https://example.com",
      // Gmail: "https://example.com",
      // Instagram: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      // QQ: "https://example.com",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      // Zhihu: "https://example.com",
    },
  },
  pwa:{
    cachePic: true,
    cacheHTML: true,
    update: "available",
  },

  encrypt: {
    config: {
      //"/guide/encrypt.html": ["1234"],
    },
  },
  // seo:true,
  plugins: {
    
    blog: {
      autoExcerpt: true,//是否为每个页面生成摘录
    },
    copyCode: {"showInMobile": true,duration: 2000},

    // 你也可以使用 Waline
    comment: false,
    // comment: {
    //   type: "giscus",
    //   repo: "xlc520/xlc520.github.io",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",
    // },

    mdEnhance: {
      enableAll: true,
      // gfm: true,//是否支持完整的 GFM 语法
      // codegroup: true,//是否启用代码组
      // align: true,//是否启用自定义对齐格式支持
      // sup: true,//是否启用上角标格式支持
      // sub: true,//是否启用下角标格式支持
      // footnote: true,//是否启用脚注格式支持
      // lazyLoad: true,//是否使用原生方式懒加载页面图片
      // mark: true,//是否启用标记格式支持
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
