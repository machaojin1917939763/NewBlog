import { defineUserConfig } from 'vuepress';
import theme from './theme.js';
import { searchProPlugin } from 'vuepress-plugin-search-pro';

export default defineUserConfig({
  dest: 'dist',
  host: '0.0.0.0',
  port: 9451,
  base: '/',
  temp: '.vscode/.vp-temp',
  cache: '.vscode/.vp-cache',

  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Campus2Career',
      description: '天下难事，必作于易；天下大事，必做于细。',
    },
  },

  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category as any,
          formatter: '分类：$content',
        },
        {
          getter: (page) => page.frontmatter.tag as any,
          formatter: '标签：$content',
        },
      ],
    }),
  ],

  theme,

  // Enable it with pwa
  shouldPrefetch: false,
});
