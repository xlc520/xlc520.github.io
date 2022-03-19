export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "主页",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "layout": "Blog",
    "icon": "home",
    "title": "主页",
    "heroText": "StudyNote",
    "heroFullScreen": true,
    "bgImage": "https://7ed.net/bing/api?rand=true",
    "tagline": "人生若只如初见,何事秋风悲画扇。",
    "features": [
      {
        "title": "Markdown 增强",
        "icon": "markdown",
        "details": "新增文字对齐、上下角标、脚注、标记、任务列表、数学公式、流程图、图表与幻灯片支持",
        "link": "/zh/guide/markdown/"
      },
      {
        "title": "浏览量与评论",
        "icon": "comment",
        "details": "配合 Waline 来开启阅读量统计与评论支持",
        "link": "/zh/guide/feature/comment/"
      },
      {
        "title": "文章信息展示",
        "icon": "info",
        "details": "为你的文章添加作者、写作日期、预计阅读时间、字数统计等信息",
        "link": "/zh/guide/feature/page-info/"
      },
      {
        "title": "博客支持",
        "icon": "blog",
        "details": "为你的文章添加日期、标签和分类，即可自动生成文章、分类、标签与时间轴列表",
        "link": "/zh/guide/blog/intro/"
      }
    ],
    "footer": "两情若是久长时，又岂在朝朝暮暮",
    "summary": "",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://xlc520.github.io/"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "StudyNote"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "主页"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "website"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "readingTime": {
    "minutes": 0,
    "words": 0
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
