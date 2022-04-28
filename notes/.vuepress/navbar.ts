import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  { text: 'Home', link: '/' , icon: "home"},
  { text: '学习', link: '/study/' ,icon: "note"},
  { text: '开发', link: '/dev/' ,icon:"java" },
  { text: 'Linux', link: '/linux/' ,icon:"linux"},
  { text: '脚本', link: '/script/' ,icon:"script"},
  { text: '工具', link: '/tools/' ,icon:"tool"},
  { text: '源码', link: '/source_code/' ,icon:"code"},
  { text: 'Git', link: '/git/' ,icon:"git"},
  { text: '日常', link: '/daily/' ,icon:"date"},
  { text: '电脑', link: '/pc/' ,icon:"computer"},
  { text: '文章', link: '/article/' ,icon:"article"},
  { text: '其他', link: '/other/' ,icon:"others"},
  { text: 'DownGit', link: 'https://git.xulc.workers.dev/' ,icon:"github"},
  // "/",
  // "/home",
  // { text: "使用指南", icon: "creative", link: "/guide/" },
  // {
  //   text: "博文",
  //   icon: "edit",
  //   prefix: "/posts/",
  //   children: [
  //     {
  //       text: "文章 1-4",
  //       icon: "edit",
  //       prefix: "article/",
  //       children: [
  //         { text: "文章 1", icon: "edit", link: "article1" },
  //         { text: "文章 2", icon: "edit", link: "article2" },
  //         "article3",
  //         "article4",
  //       ],
  //     },
  //     {
  //       text: "文章 5-12",
  //       icon: "edit",
  //       children: [
  //         {
  //           text: "文章 5",
  //           icon: "edit",
  //           link: "article/article5",
  //         },
  //         {
  //           text: "文章 6",
  //           icon: "edit",
  //           link: "article/article6",
  //         },
  //         "article/article7",
  //         "article/article8",
  //       ],
  //     },
  //     { text: "文章 9", icon: "edit", link: "article9" },
  //     { text: "文章 10", icon: "edit", link: "article10" },
  //     "article11",
  //     "article12",
  //   ],
  // },
  // {
  //   text: "主题文档",
  //   icon: "note",
  //   link: "https://vuepress-theme-hope.github.io/v2/zh/",
  // },
]);
