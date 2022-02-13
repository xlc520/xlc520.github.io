const { config } = require("vuepress-theme-hope");

module.exports = config({
  title: "StudyNote",
  description: "一个自己学习的笔记，学习工具，各种技巧，各种使用教程。",

  dest: "./pages",

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

 //  locales: {
 //    "/": {
 //      lang: "zh-CN",
 //    },
 //    "/zh/": {
	// 	lang: "zh-CN",
 //      title: "Theme Demo",
 //      description: "vuepress-theme-hope 的 demo",
 //    },
	// "/en/": {
	// 	lang: "en-US",
	//   title: "Theme Demo",
	//   description: "vuepress-theme-hope  demo",
	// },
 //  },

  themeConfig: {
    logo: "/logo.svg",
    hostname: "https://xlc520.github.io/StudyNote/",
	wordPerminute: 120, 	//每分钟的阅读字数
    author: "xlc520",
    repo: "https://github.com/xlc520/StudyNote",
	//内置搜索
	search: true,
	searchMaxSuggestions: 10,
	searchPlaceholder: "搜索...",
	// editLinks: true,	//显示编辑本页链接
	editLinkText: "在 GitHub 上编辑此页",
	pageInfo: ['author','visitor','time','category','tag','word','reading-time'],
	photoSwipe: true, //图片预览
	seo: false,
	nav: [
		{ text: 'Home', link: '/' , icon: "home"},
		{ text: '学习', link: '/study/' ,icon: "note"},
		{ text: 'IDEA', link: '/idea/' },
		{ text: 'Linux', link: '/linux/' },
		{ text: '脚本', link: '/script/' },
		{ text: '工具', link: '/tools/' },
		{ text: '源码', link: '/source_code/' },
		{ text: 'Git', link: '/git/' },
		{ text: '其他', link: '/other/' },
		{ text: 'DownGit', link: 'https://git.xulc.workers.dev/' },
	],

	sidebarDepth: 2,	//最大的深度
	displayAllHeaders: true, //显示所有页面的标题链接 默认值: false
	activeHeaderLinks: true, // 活动的标题链接默认值: true
	sidebar: "auto",		//自动生成侧栏
    sidebar: {
      '/git/': [
      		'',
			'git_emoji', /* /bar/three.html */
			'GitHub-Auto-Commit',
      ],
      '/idea/':[
			'',
			'idea-tips',
      ],
      '/linux/':[
			'',
			'Centos7Minimal',
			'NodeJS-Maven-Mysql',
			'bt',
			'Euserv',
			'Nginx安装Web应用防火墙',
			'openssl一键自签证书',
      ],
	  '/other/':[
		  '',
		  'OfficeE5',
		  '安装WSA-激活GPU-双击安装APK',
		  '程序员常逛的网站',
		  '电子书网站',
		  '临时邮箱和接码',
		  '免费插图',
		  '免费工具集锦',
		  '免费图标',
		  '免费图库',
		  '免费资源集锦',
		  '影视',
		  
	  ],
      '/script/':[
      			'',
      			'repository',
				'脚本仓库',
      ],
      '/source_code/':[
      			'',
      			'admin'
      ],
	  '/study/': [
	  			 '',
	    'vuepress',  /* /foo/one.html */
	  ],
      '/tools/': [
			'',
			'software',
			'develop-tools',
			'lenovo',
			'SSH客户端软件',
			'StartAllBack(StartIsBack)v3.2.1Stable',
      ],
      '/': [
        '',        /* / */
      ]
    },
	// custom containers
	tip: "提示",
	warning: "注意",
	danger: "警告",
	
	// 404 page
	notFound: [
	  "这里什么都没有",
	  "我们怎么到这来了？",
	  "这是一个 404 页面",
	  "看起来我们进入了错误的链接",
	],
	backToHome: "返回首页",
	
	// other
	openInNewWindow: "在新窗口打开",
	updateTime: true,	//显示更新时间
	backToTop: true,	//返回顶部按钮的配置
	copyCode: {		//代码复制
		showInMobile: true,
		duration: 2000,
	},
	git:{
		contributor: false,
		timezone: 'Asia/Shanghai', 	//时区列表:https://www.zeitverschiebung.net/cn/all-time-zones.html
		// transformer: (timestamp, lang) => {
		// 			  return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')
		// 			},
	},
	locales: {
	    "/": {
	      // 设置需要的语言
	      lang: "zh-CN",
	    },
	  },
    // locales: {
    //   "/zh/": {
    //     nav: [
    //       { text: "博客主页", link: "/zh/", icon: "home" },
    //       { text: "项目主页", link: "/zh/home/", icon: "home" },
    //       {
    //         text: "如何使用",
    //         icon: "creative",
    //         link: "/zh/guide/",
    //       },
    //       {
    //         text: "主题文档",
    //         icon: "note",
    //         link: "https://vuepress-theme-hope.github.io/zh/",
    //       },
    //     ],
    //     sidebar: {
    //       "/zh/": [
    //         "",
    //         "home",
    //         "slides",
    //         "layout",
    //         {
    //           title: "如何使用",
    //           icon: "creative",
    //           prefix: "guide/",
    //           children: ["", "page", "markdown", "disable", "encrypt"],
    //         },
    //       ],
    //     },
    //   },
    // },

    blog: {
      intro: "/intro",
      sidebarDisplay: "always",
	  timeline: true,
      links: {
        Github: "https://github.com/xlc520",
		Gitee: "https://gitee.com/xulch",
        Baidu: "https://baidu.com",
      },
    },

    footer: {
		display: true,
		content: "业精于勤而荒于嬉，行成于思而毁于随",
		medialink:{
			Github: "https://github.com/xlc520",
			Gitee: "https://gitee.com/xulch",
			Baidu: "https://baidu.com",
		}
    },

	//评论
    // comment: {
    //   type: "waline",
    //   serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },

    copyright: {
      status: "global",
    },

	//为 VuePress 提供更多 Markdown 增强功能
    mdEnhance: {
      enableAll: true,
	  align: true,	//自定义对齐
	  lineNumbers: true,	//是否在每个代码块的左侧显示行号
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },//themeConfig

plugins: [
		"photo-swipe",
		'cursor-effects',{
		//vuepress 插件光标效果  https://moefyit.github.io/moefy-vuepress/packages/cursor-effects.html
			size: 2, // size of the particle, default: 2
			shape: ['star' | 'circle'], // shape of the particle, default: 'star'
			zIndex: 999999999, // z-index property of the canvas, default: 999999999
		},
		'fulltext-search',
		  {
			tokenize: 'full',
			split: /\s+/,
			encode: 'icase',
		  },
   ],


});
