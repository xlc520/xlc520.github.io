import { navbar } from "vuepress-theme-hope";

export default navbar([
  { text: 'Home', link: '/' , icon: "home"},
  { text: '学习', icon: "note", prefix: "/study/",
    children:[
      {
        text: "学习",
        icon: "note",
        link: ""
      },
      {
        text: "Vue3+TS 快速上手",
        icon: "vue",
        link: "vue3_quick_study/"
      }
    ]
  },
  { text: 'AI', link: '/ai/' ,icon: "android"},
  { text: '算法', link: '/algorithm/' ,icon: "shell"},
  { text: '开发', link: '/dev/' ,icon:"java" },
  { text: 'Linux', link: '/linux/' ,icon:"linux"},
  { text: '脚本', link: '/script/' ,icon:"script"},
  { text: '工具', link: '/tools/' ,icon:"tool"},
  { text: '源码', link: '/source_code/' ,icon:"code"},
  { text: 'Git', link: '/git/' ,icon:"git"},
  { text: '日常', link: '/daily/' ,icon:"date"},
  { text: '电脑', link: '/pc/' ,icon:"computer"},
  { text: '文章', link: '/essay/' ,icon:"article"},
  { text: '其他', link: '/other/' ,icon:"others"},
  {
    text: "链接",
    icon: "guide",
    // prefix: "/zh/cookbook/",
    children: [
      {
        text: "Alist",
        icon: "share",
        link: "http://122.9.159.116:5244",
      },
      {
        text: "Cloudreve",
        icon: "share",
        link: "https://pan.ciberviler.top",
      },
      {
        text: "DownGit-tk",
        icon: "github",
        link: "https://git.xlc520.tk",
      },
      {
        text: "DownGit-ml",
        icon: "github",
        link: "https://git.xlc520.ml",
      }, 
    ],
  },
]);
