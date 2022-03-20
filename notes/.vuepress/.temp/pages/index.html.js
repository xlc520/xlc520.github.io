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
    "bgImage": "https://api.btstu.cn/sjbz/api.php?format=images",
    "tagline": "<p>昨夜西风凋碧树，独上高楼，望尽天涯路。</p><p>衣带渐宽终不悔，为伊消得人憔悴。</p> <p>众里寻他千百度，蓦然回首，那人却在，灯火阑珊处。</p>",
    "project": [
      {
        "type": "project",
        "name": "学习",
        "desc": "学习笔记",
        "link": "/study/"
      },
      {
        "type": "link",
        "name": "IDEA",
        "desc": "IDEA学习",
        "link": "/idea/"
      },
      {
        "type": "book",
        "name": "Linux",
        "desc": "Linux学习",
        "link": "/linux/"
      },
      {
        "type": "article",
        "name": "脚本",
        "desc": "各种脚本",
        "link": "/script/"
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
