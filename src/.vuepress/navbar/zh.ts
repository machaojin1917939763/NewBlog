import { navbar } from 'vuepress-theme-hope';

export const zhNavbar = navbar([
  '/skills',
  '/interview',
  '/coder',
  '/linux',
  '/tools',
  '/leetcode',
  '/items',
  {
    text: '索引',
    icon: 'jiansuo',
    children: [
      { text: '全部', icon: 'list', link: '/article' },
      { text: '分类', icon: 'category', link: '/category' },
      { text: '标签', icon: 'tag', link: '/tag' },
      { text: '时间轴', icon: 'time', link: '/timeline' },
    ],
  },
  '/about',
]);
