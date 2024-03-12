import { sidebar } from 'vuepress-theme-hope';

export const zhSidebar = sidebar({
  // 子路径
  '/about/': [
    {
      text: '关于',
      icon: 'info',
      prefix: '',
      link: '/about/',
      children: 'structure',
    },
  ],
  '/tools/': [
    {
      text: '工具',
      icon: 'gongju',
      prefix: '',
      link: '/tools/',
      children: 'structure',
    },
  ],
  '/linux/': [
    {
      text: 'Linux',
      icon: 'linux',
      prefix: '',
      link: '/linux/',
      children: [],
    },
    {
      text: 'Debian',
      icon: 'debianos',
      prefix: 'Debian/',
      children: 'structure',
      link: '/linux/Debian/',
    },
    {
      text: 'Settings',
      icon: 'shezhi',
      prefix: 'Settings/',
      children: 'structure',
      link: '/linux/Settings/',
    },
  ],
  '/leetcode/': [
    {
      text: 'LeetCode',
      icon: 'leetcode',
      prefix: '',
      link: '/leetcode/',
      children: 'structure',
    },
  ],
  '/coder/': [
    {
      text: 'Coder',
      icon: 'coding',
      prefix: '',
      link: '/coder/',
      children: [],
    },
    {
      text: 'Web前端',
      icon: 'HTML',
      prefix: 'coder/',
      children: 'structure',
      link: '/coder/frontend/',
    },
    {
      text: 'golang',
      icon: 'goicon',
      prefix: 'golang/',
      children: 'structure',
      link: '/coder/golang/',
    },
  ],
  '/skills/': [
    {
      text: '技巧',
      icon: 'zhiliangjishu',
      prefix: '',
      link: '/skills/',
      children: 'structure',
    },
  ],
  '/interview/':[
    {
      text: '面试题',
      icon: 'zhiliangjishu',
      prefix: '',
      link: '/interview/',
      children: 'structure',
    },
  ],
  '/items/':[
    {
      text: '项目收集',
      icon: 'zhiliangjishu',
      prefix: '',
      link: '/items/',
      children: 'structure',
    },
  ],
  // 整体路由划分
  '/': [
    '',
    '/leetcode/',
    '/interview/',
    {
      text: '八股文',
      icon: 'zhiliangjishu',
      prefix: 'skills/',
      link: '/skills/',
      children: 'structure',
    },
    {
      text: '工具',
      icon: 'gongju',
      prefix: 'tools/',
      link: '/tools/',
      children: 'structure',
    },
    {
      text: 'Linux',
      icon: 'linux',
      prefix: 'linux/',
      link: '/linux/',
      children: [
        {
          text: 'Debian',
          icon: 'debianos',
          link: '/linux/Debian/',
        },
        {
          text: 'Settings',
          icon: 'shezhi',
          link: '/linux/Settings/',
        },
      ],
    },
    {
      text: 'Coder',
      icon: 'coding',
      prefix: 'coder/',
      link: '/coder/',
      children: [],
    },
    {
      text: '关于',
      icon: 'info',
      prefix: 'about/',
      link: '/about/website.html',
      children: 'structure',
    },
  ],
  
});
