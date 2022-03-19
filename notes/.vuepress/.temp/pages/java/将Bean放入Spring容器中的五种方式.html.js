export const data = {
  "key": "v-e0ca5600",
  "path": "/java/%E5%B0%86Bean%E6%94%BE%E5%85%A5Spring%E5%AE%B9%E5%99%A8%E4%B8%AD%E7%9A%84%E4%BA%94%E7%A7%8D%E6%96%B9%E5%BC%8F.html",
  "title": "SpringBoot将Bean放入Spring容器中的五种方式",
  "lang": "zh-CN",
  "frontmatter": {
    "author": "xlc520",
    "title": "SpringBoot将Bean放入Spring容器中的五种方式",
    "description": "SpringBoot将Bean放入Spring容器中的五种方式",
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
          "content": "https://xlc520.github.io/java/%E5%B0%86Bean%E6%94%BE%E5%85%A5Spring%E5%AE%B9%E5%99%A8%E4%B8%AD%E7%9A%84%E4%BA%94%E7%A7%8D%E6%96%B9%E5%BC%8F.html"
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
          "content": "SpringBoot将Bean放入Spring容器中的五种方式"
        }
      ],
      [
        "meta",
        {
          "property": "og:description",
          "content": "SpringBoot将Bean放入Spring容器中的五种方式"
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
          "content": "2022-02-12T00:00:00.000Z"
        }
      ]
    ],
    "date": "2022-02-12T00:00:00.000Z"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "1、@Configuration + @Bean",
      "slug": "_1、-configuration-bean",
      "children": []
    },
    {
      "level": 2,
      "title": "2、@Componet + @ComponentScan",
      "slug": "_2、-componet-componentscan",
      "children": []
    },
    {
      "level": 2,
      "title": "3、@Import注解导入",
      "slug": "_3、-import注解导入",
      "children": [
        {
          "level": 3,
          "title": "3.1 @Import直接导入类",
          "slug": "_3-1-import直接导入类",
          "children": []
        },
        {
          "level": 3,
          "title": "3.2 @Import + ImportSelector",
          "slug": "_3-2-import-importselector",
          "children": []
        },
        {
          "level": 3,
          "title": "3.3 @Import + ImportBeanDefinitionRegistrar",
          "slug": "_3-3-import-importbeandefinitionregistrar",
          "children": []
        },
        {
          "level": 3,
          "title": "3.4 @Import + DeferredImportSelector",
          "slug": "_3-4-import-deferredimportselector",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "4、使用FactoryBean接口",
      "slug": "_4、使用factorybean接口",
      "children": []
    },
    {
      "level": 2,
      "title": "5、使用 BeanDefinitionRegistryPostProcessor",
      "slug": "_5、使用-beandefinitionregistrypostprocessor",
      "children": []
    },
    {
      "level": 2,
      "title": "小结",
      "slug": "小结",
      "children": []
    }
  ],
  "readingTime": {
    "minutes": 5.05,
    "words": 1514
  },
  "filePathRelative": "java/将Bean放入Spring容器中的五种方式.md"
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
