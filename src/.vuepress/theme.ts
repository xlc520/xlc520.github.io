import { hopeTheme } from 'vuepress-theme-hope';
import navbar from './navbar.js';
import sidebar from './sidebar.js';

export default hopeTheme({
  hostname: 'https://blog.ciberviler.top',
  author: {
    name: 'xlc520 - Lin Cheng',
    url: 'https://github.com/xlc520',
    email: 'xlc520@proton.me',
  },
  // iconAssets: "fontawesome-with-brands",
  iconAssets: 'iconify', //"fontawesome-with-brands"
  logo: '/logo.svg',
  repo: 'https://github.com/xlc520/xlc520.github.io',
  repoDisplay: true, //是否在导航栏显示仓库链接
  docsDir: 'src',
  // navbar
  navbar,
  // sidebar
  sidebar,
  // 页脚
  footer: '两情若是久长时，又岂在朝朝暮暮',
  displayFooter: true,
  hotReload: true, //是否需要在开发服务器启用完整功能与热更新。 是否在开发服务器中启用热重载。提供自动摘录生成功能
  // "Author": 作者
  // "Date": 写作日期
  // "Original": 是否原创
  // "Category": 分类
  // "Tag": 标签
  // "ReadingTime": 预计阅读时间
  // "Word": 字数
  // "PageView": 页面浏览量
  pageInfo: ['Author', 'Date', 'Category', 'Tag', 'ReadingTime', 'Word', 'PageView'],
  fullscreen: true, //全屏按钮
  prevLink: true, //是否在页面底部显示上一篇链接
  nextLink: true, //是否在页面底部显示下一篇链接

  blog: {
    // 博主姓名
    name: 'xlc520 - Lin Cheng',
    // 博主头像
    avatar: 'https://avatars.githubusercontent.com/u/56480807?v=4',
    // 是否剪裁头像为圆形形状
    // roundAvatar: true,
    // 是否在侧边栏展示博主信息
    sidebarDisplay: 'mobile',
    // 每页的文章数量
    articlePerPage: 10,
    // 文章列表中展示的文章信息
    articleInfo: ['Author', 'Original', 'Date', 'PageView', 'Category', 'Tag', 'ReadingTime'],
    description: '山有木兮木有枝,心悦君兮君不知',
    intro: '/intro.html',
    medias: {
      Github: 'https://github.com/xlc520',
      Gitee: 'https://gitee.com/xulch',
      Baidu: 'https://baidu.com',
      Email: 'xlc520@proton.me',
      // Baidu: "https://example.com",
      // BiliBili: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      // Email: "mailto:info@example.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      // Gitee: "https://example.com",
      // GitHub: "https://example.com",
      // Gitlab: "https://example.com",
      // Gmail: "mailto:info@example.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
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
      // MrHope: ["https://mister-hope.com", MR_HOPE_AVATAR],
    },
  },

  // encrypt: {
  //   config: {
  //     "/demo/encrypt.html": ["1234"],
  //   },
  // },

  // page meta
  metaLocales: {
    editLink: '在 GitHub 上编辑此页',
  },

  plugins: {
    blog: {
      // 摘要生成
      excerpt: true,
      // 摘要长度
      excerptLength: 100,
    },
    components: {
      components: ['Badge', 'VPBanner', 'VPCard', 'Share', 'SiteInfo'],
    },
    // comment: {
    //   // You should generate and use your own comment service
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    // install @waline/client before enabling it
    // WARNING: This is a test server for demo only.
    // You should create and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    // all features are enabled for demo, only preserve features you need here
    // 2.0.0-rc.1 (2023-11-26) md-enhance: container option is deprecated, use hint instead danger is renamed to caution to align GFM
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended',
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,

      // 在启用之前安装 chart.js
      // chart: true,

      // insert component easily

      // 在启用之前安装 echarts
      // echarts: true,

      // 在启用之前安装 flowchart.ts
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // 在启用之前安装 katex
      // katex: true,

      // 在启用之前安装 mathjax-full
      // mathjax: true,

      // 在启用之前安装 mermaid
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // 在启用之前安装 reveal.js
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // 在启用之前安装 @vue/repl
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },
    searchPro: {
      // 索引全部内容
      indexContent: false,
      // 是否自动提示搜索建议
      autoSuggestions: true,
      hotKeys: [
        { key: 'k', ctrl: true },
        { key: '/', ctrl: true },
      ], //热键
      // 存储搜索结果历史的最大数量
      resultHistoryCount: 15,
      // 存储搜索查询词历史的最大数量
      queryHistoryCount: 15,
      // 结束输入到开始搜索的延时
      searchDelay: 500,
      // 是否在开发服务器中中启用实时热重载
      hotReload: true,
      // 结果排序策略
      sortStrategy: 'max',
      // 为分类和标签添加索引
      customFields: [
        {
          getter: page => page.frontmatter.category,
          formatter: {
            '/': '分类：$content',
          },
        },
        {
          getter: page => page.frontmatter.tag,
          formatter: {
            '/': '标签：$content',
          },
        },
        {
          // name: "author",
          getter: page => page.frontmatter.author,
          formatter: '作者：$content',
        },
        // {
        //   // name: "updateTime",
        //   getter: (page) => page.data.git?.updateTime.toLocaleString(),
        //   formatter: {
        //     "/": "更新时间：$content",
        //   },
        // },
      ],
    },
    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: '/favicon.ico',
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   // apple: {
    //   //   icon: "/assets/icon/apple-icon-152.png",
    //   //   statusBarColor: "black",
    //   // },
    //   // msTile: {
    //   //   image: "/assets/icon/ms-icon-144.png",
    //   //   color: "#ffffff",
    //   // },
    //   // manifest: {
    //   //   icons: [
    //   //     {
    //   //       src: "/assets/icon/chrome-mask-512.png",
    //   //       sizes: "512x512",
    //   //       purpose: "maskable",
    //   //       type: "image/png",
    //   //     },
    //   //     {
    //   //       src: "/assets/icon/chrome-mask-192.png",
    //   //       sizes: "192x192",
    //   //       purpose: "maskable",
    //   //       type: "image/png",
    //   //     },
    //   //     {
    //   //       src: "/assets/icon/chrome-512.png",
    //   //       sizes: "512x512",
    //   //       type: "image/png",
    //   //     },
    //   //     {
    //   //       src: "/assets/icon/chrome-192.png",
    //   //       sizes: "192x192",
    //   //       type: "image/png",
    //   //     },
    //   //   ],
    //   // shortcuts: [
    //   //   {
    //   //     name: "Demo",
    //   //     short_name: "Demo",
    //   //     url: "/demo/",
    //   //     icons: [
    //   //       {
    //   //         src: "/assets/icon/guide-maskable.png",
    //   //         sizes: "192x192",
    //   //         purpose: "maskable",
    //   //         type: "image/png",
    //   //       },
    //   //     ],
    //   //   },
    //   // ],
    //   // },
    // },
  },
});
