import { navbar } from 'vuepress-theme-hope';

export default navbar([
  { text: 'Home', link: '/', icon: 'flat-color-icons:home' },
  { text: '开发', link: '/dev/', icon: 'devicon:java' },
  { text: 'Linux', link: '/linux/', icon: 'logos:linux-tux' },
  {
    text: '学习',
    icon: 'arcticons:studyplus',
    prefix: '/study/',
    children: [
      {
        text: '学习',
        icon: 'marketeq:note-alt',
        link: '',
      },
      {
        text: 'Vue3+TS 快速上手',
        icon: 'logos:vue',
        link: 'vue3_quick_study/',
      },
    ],
  },
  { text: 'AI', link: '/ai/', icon: 'token-branded:cgpt' },
  { text: '算法', link: '/algorithm/', icon: 'icon-park:database-power' },
  { text: '脚本', link: '/script/', icon: 'vscode-icons:file-type-script' },
  { text: '工具', link: '/tools/', icon: 'icon-park:toolkit' },
  { text: '源码', link: '/source_code/', icon: 'ph:code-fill' },
  { text: 'Git', link: '/git/', icon: 'skill-icons:git' },
  { text: '日常', link: '/daily/', icon: 'arcticons:dailyhunt' },
  { text: '电脑', link: '/pc/', icon: 'fluent-emoji-flat:desktop-computer' },
  { text: '文章', link: '/essay/', icon: 'ph:article' },
  { text: '其他', link: '/other/', icon: 'basil:other-1-outline' },
  // {
  //   text: '链接',
  //   icon: 'fluent:share-28-regular',
  //   // prefix: "/zh/cookbook/",
  //   children: [
  //     {
  //       text: 'Alist',
  //       icon: 'material-symbols:list',
  //       link: 'http://122.9.159.116:5244',
  //     },
  //     {
  //       text: 'Cloudreve',
  //       icon: 'emojione:cloud',
  //       link: 'https://pan.ciberviler.top',
  //     },
  //     {
  //       text: 'DownGit-tk',
  //       icon: 'logos:github-icon',
  //       link: 'https://git.xlc520.tk',
  //     },
  //     {
  //       text: 'DownGit-ml',
  //       icon: 'logos:github-icon',
  //       link: 'https://git.xlc520.ml',
  //     },
  //   ],
  // },
]);
