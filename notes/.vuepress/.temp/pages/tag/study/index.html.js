export const data = {
  "key": "v-07ff8958",
  "path": "/tag/study/",
  "title": "Study 标签",
  "lang": "zh-CN",
  "frontmatter": {
    "title": "Study 标签",
    "blog": {
      "type": "category",
      "name": "Study",
      "key": "tag"
    },
    "layout": "Blog",
    "summary": "",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://xlc520.github.io/tag/study/"
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
          "content": "Study 标签"
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
  "filePathRelative": null
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
