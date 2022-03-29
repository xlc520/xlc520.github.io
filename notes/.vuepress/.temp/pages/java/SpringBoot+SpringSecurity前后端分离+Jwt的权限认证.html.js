export const data = {
  "key": "v-6cab1cf5",
  "path": "/java/SpringBoot+SpringSecurity%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB+Jwt%E7%9A%84%E6%9D%83%E9%99%90%E8%AE%A4%E8%AF%81.html",
  "title": "SpringBoot+SpringSecurity前后端分离+Jwt的权限认证",
  "lang": "zh-CN",
  "frontmatter": {
    "author": "xlc520",
    "title": "SpringBoot+SpringSecurity前后端分离+Jwt的权限认证",
    "description": "SpringBoot+SpringSecurity前后端分离+Jwt的权限认证",
    "date": "2022-02-13T00:00:00.000Z",
    "category": [
      "Java"
    ],
    "tag": [
      "Java"
    ],
    "article": true,
    "timeline": true,
    "icon": null,
    "password": null,
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://xlc520.github.io/java/SpringBoot+SpringSecurity%E5%89%8D%E5%90%8E%E7%AB%AF%E5%88%86%E7%A6%BB+Jwt%E7%9A%84%E6%9D%83%E9%99%90%E8%AE%A4%E8%AF%81.html"
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
          "content": "SpringBoot+SpringSecurity前后端分离+Jwt的权限认证"
        }
      ],
      [
        "meta",
        {
          "property": "og:description",
          "content": "SpringBoot+SpringSecurity前后端分离+Jwt的权限认证"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "article"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "zh-CN"
        }
      ],
      [
        "meta",
        {
          "property": "article:author",
          "content": "xlc520"
        }
      ],
      [
        "meta",
        {
          "property": "article:tag",
          "content": "Java"
        }
      ],
      [
        "meta",
        {
          "property": "article:published_time",
          "content": "2022-02-13T00:00:00.000Z"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "前言",
      "slug": "前言",
      "children": []
    },
    {
      "level": 2,
      "title": "一、五个handler一个filter两个User",
      "slug": "一、五个handler一个filter两个user",
      "children": [
        {
          "level": 3,
          "title": "1.1 AuthenticationEntryPoint",
          "slug": "_1-1-authenticationentrypoint",
          "children": []
        },
        {
          "level": 3,
          "title": "1.2 AuthenticationSuccessHandler",
          "slug": "_1-2-authenticationsuccesshandler",
          "children": []
        },
        {
          "level": 3,
          "title": "1.3 AuthenticationFailureHandler",
          "slug": "_1-3-authenticationfailurehandler",
          "children": []
        },
        {
          "level": 3,
          "title": "1.4 LogoutSuccessHandler",
          "slug": "_1-4-logoutsuccesshandler",
          "children": []
        },
        {
          "level": 3,
          "title": "1.5 AccessDeniedHandler",
          "slug": "_1-5-accessdeniedhandler",
          "children": []
        },
        {
          "level": 3,
          "title": "1.6 一个过滤器OncePerRequestFilter",
          "slug": "_1-6-一个过滤器onceperrequestfilter",
          "children": []
        },
        {
          "level": 3,
          "title": "1.7 实现UserDetails扩充字段",
          "slug": "_1-7-实现userdetails扩充字段",
          "children": []
        },
        {
          "level": 3,
          "title": "1.8 实现UserDetailsService",
          "slug": "_1-8-实现userdetailsservice",
          "children": []
        },
        {
          "level": 3,
          "title": "1.9 userSessionService",
          "slug": "_1-9-usersessionservice",
          "children": []
        },
        {
          "level": 3,
          "title": "1.10 ResonseUtil",
          "slug": "_1-10-resonseutil",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "二、配置WebSecurityConfigurerAdapter",
      "slug": "二、配置websecurityconfigureradapter",
      "children": []
    },
    {
      "level": 2,
      "title": "三、其他",
      "slug": "三、其他",
      "children": [
        {
          "level": 3,
          "title": "3.1 不足之处",
          "slug": "_3-1-不足之处",
          "children": []
        },
        {
          "level": 3,
          "title": "3.2 解决",
          "slug": "_3-2-解决",
          "children": []
        }
      ]
    }
  ],
  "readingTime": {
    "minutes": 14.92,
    "words": 4476
  },
  "filePathRelative": "java/SpringBoot+SpringSecurity前后端分离+Jwt的权限认证.md"
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
