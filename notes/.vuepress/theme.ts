import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://blog.ciberviler.top",

  author: {
    name: "xlc520",
    url: "https://github.com/xlc520",
  },

  // iconPrefix: "iconfont icon-",
  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "https://github.com/xlc520/xlc520.github.io",

  docsDir: "notes",
  docsRepo: "https://github.com/xlc520/xlc520.github.io",
  docsBranch: "master",

  // navbar
  navbar: navbar,
  // sidebar
  // sidebar: sidebar,
  sidebar: {
    "/study/": "structure",
    "/algorithm/": "structure",
    "/dev/": "structure",
    "/linux/": "structure",
    "/script/": "structure",
    "/tools/": "structure",
    "/source_code/": "structure",
    "/git/": "structure",
    "/daily/": "structure",
    "/pc/": "structure",
    "/essay/": "structure",
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

  encrypt: {
    config: {
      // "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,//是否为每个页面生成摘录
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    // comment: {
    //   /**
    //    * Using Giscus
    //    */
    //   provider: "Giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",

    //   /**
    //    * Using Twikoo
    //    */
    //   // provider: "Twikoo",
    //   // envId: "https://twikoo.ccknbc.vercel.app",

    //   /**
    //    * Using Waline
    //    */
    //   // provider: "Waline",
    //   // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },

    mdEnhance: {
      // enableAll: true,
      gfm: true,//是否支持完整的 GFM 语法
      container: true, // 是否启用自定义容器支持
      linkCheck:"dev",  //  是否启用链接检查。
      vpre: false,  // 是否启用 v-pre 容器
      tabs: true,  //是否启用选项卡。
      codetabs: true,  //是否启用代码组。
      align: true,  // 是否启用自定义对齐格式支持。
      sup: true,  // 是否启用上角标格式支持。
      sub: true,  // 是否启用下角标格式支持。
      footnote: true,  // 是否启用脚注格式支持。
      lazyLoad: false,  // 是否使用原生方式懒加载页面图片。
      mark: true,  // 是否启用标记格式支持。
      imageMark: true,  // 是否启用图片标注支持
      tasklist: false,  // 是否启用任务列表格式支持。
      tex: false,  // 是否启用 TeX\TeXT EX 语法支持。
      flowchart: true,  // 是否启用流程图支持。
      mermaid: false,  // 是否启用 Mermaid 支持
      //stylize: false,  // 类型: StylizeOptions | false
      //demo
      delay: 500,  // 操作页面 DOM 的延时，单位 ms。默认值: 500
      // 是否启用幻灯片支持。
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
