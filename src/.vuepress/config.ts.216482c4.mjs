// src/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// src/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// src/.vuepress/navbar/zh.ts
import { navbar } from "vuepress-theme-hope";
var zhNavbar = navbar([
  {
    text: "\u76EE\u5F55",
    icon: "sort",
    link: "/posts",
    children: ["/coder", "/linux", "/skills", "/tools", "/leetcode", "/interview", "/items"]
  },
  {
    text: "\u7D22\u5F15",
    icon: "jiansuo",
    children: [
      { text: "\u5168\u90E8", icon: "list", link: "/article" },
      { text: "\u5206\u7C7B", icon: "category", link: "/category" },
      { text: "\u6807\u7B7E", icon: "tag", link: "/tag" },
      { text: "\u65F6\u95F4\u8F74", icon: "time", link: "/timeline" }
    ]
  },
  {
    text: "\u6536\u85CF",
    icon: "start",
    link: "/favorite",
    children: ["/favorite/links", "/favorite/movies", "/favorite/music", "/favorite/photos"]
  },
  "/about"
]);

// src/.vuepress/sidebar/zh.ts
import { sidebar } from "vuepress-theme-hope";
var zhSidebar = sidebar({
  // 子路径
  "/about/": [
    {
      text: "\u5173\u4E8E",
      icon: "info",
      prefix: "",
      link: "/about/",
      children: "structure"
    }
  ],
  "/tools/": [
    {
      text: "\u5DE5\u5177",
      icon: "gongju",
      prefix: "",
      link: "/tools/",
      children: "structure"
    }
  ],
  "/linux/": [
    {
      text: "Linux",
      icon: "linux",
      prefix: "",
      link: "/linux/",
      children: []
    },
    {
      text: "Debian",
      icon: "debianos",
      prefix: "Debian/",
      children: "structure",
      link: "/linux/Debian/"
    },
    {
      text: "Settings",
      icon: "shezhi",
      prefix: "Settings/",
      children: "structure",
      link: "/linux/Settings/"
    }
  ],
  "/leetcode/": [
    {
      text: "LeetCode",
      icon: "leetcode",
      prefix: "",
      link: "/leetcode/",
      children: "structure"
    }
  ],
  "/coder/": [
    {
      text: "Coder",
      icon: "coding",
      prefix: "",
      link: "/coder/",
      children: []
    },
    {
      text: "Web\u524D\u7AEF",
      icon: "HTML",
      prefix: "coder/",
      children: "structure",
      link: "/coder/frontend/"
    },
    {
      text: "golang",
      icon: "goicon",
      prefix: "golang/",
      children: "structure",
      link: "/coder/golang/"
    }
  ],
  "/skills/": [
    {
      text: "\u6280\u5DE7",
      icon: "zhiliangjishu",
      prefix: "",
      link: "/skills/",
      children: "structure"
    }
  ],
  "/interview/": [
    {
      text: "\u9762\u8BD5\u9898",
      icon: "zhiliangjishu",
      prefix: "",
      link: "/interview/",
      children: "structure"
    }
  ],
  "/items/": [
    {
      text: "\u9879\u76EE\u6536\u96C6",
      icon: "zhiliangjishu",
      prefix: "",
      link: "/items/",
      children: "structure"
    }
  ],
  "/favorite/": [
    {
      text: "\u5F71\u89C6",
      icon: "movie",
      prefix: "movies/",
      link: "/favorite/movies/",
      children: "structure"
    },
    {
      text: "\u97F3\u4E50",
      icon: "music",
      prefix: "music/",
      children: "structure",
      link: "/favorite/music/"
    },
    {
      text: "\u76F8\u518C",
      icon: "xiangce",
      prefix: "photos/",
      children: "structure",
      link: "/favorite/photos/"
    },
    {
      text: "\u94FE\u63A5",
      icon: "link",
      prefix: "links/",
      children: "structure",
      link: "/favorite/links/"
    }
  ],
  // 整体路由划分
  "/": [
    "",
    "/leetcode/",
    "/interview/",
    {
      text: "\u535A\u6587",
      icon: "note",
      prefix: "posts/",
      link: "/posts/",
      children: "structure"
    },
    {
      text: "\u6536\u85CF",
      icon: "favoritea",
      link: "/favorite/",
      children: [
        {
          text: "\u5F71\u89C6",
          icon: "movie",
          link: "/favorite/movies/"
        },
        {
          text: "\u97F3\u4E50",
          icon: "music",
          link: "/favorite/music/"
        },
        {
          text: "\u76F8\u518C",
          icon: "xiangce",
          link: "/favorite/photos/"
        },
        {
          text: "\u94FE\u63A5",
          icon: "link",
          link: "/favorite/links/"
        }
      ]
    },
    {
      text: "\u6280\u5DE7",
      icon: "zhiliangjishu",
      prefix: "skills/",
      link: "/skills/",
      children: "structure"
    },
    {
      text: "\u5DE5\u5177",
      icon: "gongju",
      prefix: "tools/",
      link: "/tools/",
      children: "structure"
    },
    {
      text: "Linux",
      icon: "linux",
      prefix: "linux/",
      link: "/linux/",
      children: [
        {
          text: "Debian",
          icon: "debianos",
          link: "/linux/Debian/"
        },
        {
          text: "Settings",
          icon: "shezhi",
          link: "/linux/Settings/"
        }
      ]
    },
    {
      text: "Coder",
      icon: "coding",
      prefix: "coder/",
      link: "/coder/",
      children: [
        {
          text: "Web\u524D\u7AEF",
          icon: "HTML",
          link: "/coder/frontend/"
        },
        {
          text: "Golang",
          icon: "goicon",
          link: "/coder/golang/"
        }
      ]
    },
    {
      text: "\u5173\u4E8E",
      icon: "info",
      prefix: "about/",
      link: "/about/website.html",
      children: "structure"
    }
  ]
});

// src/.vuepress/theme.ts
var footerICP_HTML = `
<a class="footer-about" href="/about/website.html">\u5173\u4E8E\u672C\u7AD9</a>`;
var theme_default = hopeTheme({
  hostname: "https://machaojin.cn",
  author: {
    name: "Chaojin",
    url: "https://machaojin.cn",
    email: "ma@machaojin.cn"
  },
  iconAssets: "//at.alicdn.com/t/c/font_3855310_u33584v4jsc.css",
  logo: "https://message-stack.oss-cn-beijing.aliyuncs.com/images/a-2099158_640.webp",
  docsDir: "src",
  editLink: false,
  fullscreen: true,
  navbarAutoHide: "always",
  footer: footerICP_HTML,
  pageInfo: [
    "Author",
    "Category",
    "Date",
    "Original",
    "Tag",
    "ReadingTime",
    "Word",
    "PageView"
    //..
  ],
  blog: {
    avatar: "https://message-stack.oss-cn-beijing.aliyuncs.com/images/%E5%A4%B4%E5%83%8F.png",
    roundAvatar: true,
    medias: {
      Email: "ma@machaojin.cn"
    }
  },
  navbarLayout: {
    start: ["Brand"],
    center: [],
    end: ["Search", "Links", "Language", "Outlook"]
  },
  locales: {
    "/": {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      blog: {
        name: "Chaojin",
        description: "\u7B80\u5355\u5FEB\u4E50\uFF0C\u7406\u5E94\u5982\u6B64\u3002",
        intro: "/about/me.html",
        timeline: "\u7F8E\u597D\u7684\u4E8B\u60C5\u5373\u5C06\u53D1\u751F"
      }
    }
  },
  encrypt: {
    config: {
      "/en/demo/encrypt.html": ["1234"]
    }
  },
  plugins: {
    blog: true,
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      card: true,
      // install chart.js before enabling it
      // chart: true,
      codetabs: true,
      demo: true,
      // install echarts before enabling it
      // echarts: true,
      figure: true,
      // install flowchart.ts before enabling it
      // flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: {
        resolvePath: (file) => {
          return file;
        }
      },
      // install katex before enabling it
      // katex: true,
      // install mathjax-full before enabling it
      // mathjax: true,
      mark: true,
      // install mermaid before enabling it
      // mermaid: true,
      playground: {
        presets: ["ts", "vue"]
      },
      // install reveal.js before enabling it
      revealJs: {
        plugins: ["highlight", "math", "search", "notes", "zoom"]
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      // install @vue/repl before enabling it
      vuePlayground: true
    }
    // pwa: {
    //   favicon: '/favicon.png',
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: '/pwa/144.png',
    //     statusBarColor: 'black',
    //   },
    //   msTile: {
    //     image: '/pwa/144.png',
    //     color: '#000',
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: '/pwa/512.png',
    //         sizes: '512x512',
    //         purpose: 'maskable',
    //         type: 'image/png',
    //       },
    //       {
    //         src: '/pwa/192.png',
    //         sizes: '192x192',
    //         purpose: 'maskable',
    //         type: 'image/png',
    //       },
    //       {
    //         src: '/pwa/512.png',
    //         sizes: '512x512',
    //         type: 'image/png',
    //       },
    //       {
    //         src: '/pwa/192.png',
    //         sizes: '192x192',
    //         type: 'image/png',
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: '墨七',
    //         short_name: '墨七',
    //         url: '/',
    //         icons: [
    //           {
    //             src: '/pwa/192.png',
    //             sizes: '192x192',
    //             purpose: 'maskable',
    //             type: 'image/png',
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  }
});

// src/.vuepress/config.ts
import { searchProPlugin } from "vuepress-plugin-search-pro";
var config_default = defineUserConfig({
  dest: "dist",
  host: "0.0.0.0",
  port: 9451,
  base: "/",
  temp: ".vscode/.vp-temp",
  cache: ".vscode/.vp-cache",
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Chaojin",
      description: "\u5929\u4E0B\u96BE\u4E8B\uFF0C\u5FC5\u4F5C\u4E8E\u6613\uFF1B\u5929\u4E0B\u5927\u4E8B\uFF0C\u5FC5\u505A\u4E8E\u7EC6\u3002"
    }
  },
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "\u5206\u7C7B\uFF1A$content"
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "\u6807\u7B7E\uFF1A$content"
        }
      ]
    })
  ],
  theme: theme_default,
  // Enable it with pwa
  shouldPrefetch: false
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjLy52dWVwcmVzcy9jb25maWcudHMiLCAic3JjLy52dWVwcmVzcy90aGVtZS50cyIsICJzcmMvLnZ1ZXByZXNzL25hdmJhci96aC50cyIsICJzcmMvLnZ1ZXByZXNzL3NpZGViYXIvemgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9WU0NvZGVQcm9qZWN0L3Z1ZXByZXNzL0Jsb2dTb3VyY2Uvc3JjLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcVlNDb2RlUHJvamVjdFxcXFx2dWVwcmVzc1xcXFxCbG9nU291cmNlXFxcXHNyY1xcXFwudnVlcHJlc3NcXFxcY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9WU0NvZGVQcm9qZWN0L3Z1ZXByZXNzL0Jsb2dTb3VyY2Uvc3JjLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSAndnVlcHJlc3MnO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi90aGVtZS5qcyc7XHJcbmltcG9ydCB7IHNlYXJjaFByb1BsdWdpbiB9IGZyb20gJ3Z1ZXByZXNzLXBsdWdpbi1zZWFyY2gtcHJvJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xyXG4gIGRlc3Q6ICdkaXN0JyxcclxuICBob3N0OiAnMC4wLjAuMCcsXHJcbiAgcG9ydDogOTQ1MSxcclxuICBiYXNlOiAnLycsXHJcbiAgdGVtcDogJy52c2NvZGUvLnZwLXRlbXAnLFxyXG4gIGNhY2hlOiAnLnZzY29kZS8udnAtY2FjaGUnLFxyXG5cclxuICBsb2NhbGVzOiB7XHJcbiAgICAnLyc6IHtcclxuICAgICAgbGFuZzogJ3poLUNOJyxcclxuICAgICAgdGl0bGU6ICdDaGFvamluJyxcclxuICAgICAgZGVzY3JpcHRpb246ICdcdTU5MjlcdTRFMEJcdTk2QkVcdTRFOEJcdUZGMENcdTVGQzVcdTRGNUNcdTRFOEVcdTY2MTNcdUZGMUJcdTU5MjlcdTRFMEJcdTU5MjdcdTRFOEJcdUZGMENcdTVGQzVcdTUwNUFcdTRFOEVcdTdFQzZcdTMwMDInLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBwbHVnaW5zOiBbXHJcbiAgICBzZWFyY2hQcm9QbHVnaW4oe1xyXG4gICAgICAvLyBcdTdEMjJcdTVGMTVcdTUxNjhcdTkwRThcdTUxODVcdTVCQjlcclxuICAgICAgaW5kZXhDb250ZW50OiB0cnVlLFxyXG4gICAgICAvLyBcdTRFM0FcdTUyMDZcdTdDN0JcdTU0OENcdTY4MDdcdTdCN0VcdTZERkJcdTUyQTBcdTdEMjJcdTVGMTVcclxuICAgICAgY3VzdG9tRmllbGRzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgZ2V0dGVyOiAocGFnZSkgPT4gcGFnZS5mcm9udG1hdHRlci5jYXRlZ29yeSBhcyBhbnksXHJcbiAgICAgICAgICBmb3JtYXR0ZXI6ICdcdTUyMDZcdTdDN0JcdUZGMUEkY29udGVudCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBnZXR0ZXI6IChwYWdlKSA9PiBwYWdlLmZyb250bWF0dGVyLnRhZyBhcyBhbnksXHJcbiAgICAgICAgICBmb3JtYXR0ZXI6ICdcdTY4MDdcdTdCN0VcdUZGMUEkY29udGVudCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgIH0pLFxyXG4gIF0sXHJcblxyXG4gIHRoZW1lLFxyXG5cclxuICAvLyBFbmFibGUgaXQgd2l0aCBwd2FcclxuICBzaG91bGRQcmVmZXRjaDogZmFsc2UsXHJcbn0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L1ZTQ29kZVByb2plY3QvdnVlcHJlc3MvQmxvZ1NvdXJjZS9zcmMvLnZ1ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxWU0NvZGVQcm9qZWN0XFxcXHZ1ZXByZXNzXFxcXEJsb2dTb3VyY2VcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFx0aGVtZS50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovVlNDb2RlUHJvamVjdC92dWVwcmVzcy9CbG9nU291cmNlL3NyYy8udnVlcHJlc3MvdGhlbWUudHNcIjtpbXBvcnQgeyBob3BlVGhlbWUgfSBmcm9tICd2dWVwcmVzcy10aGVtZS1ob3BlJztcclxuaW1wb3J0IHt6aE5hdmJhciB9IGZyb20gJy4vbmF2YmFyL2luZGV4LmpzJztcclxuaW1wb3J0IHt6aFNpZGViYXIgfSBmcm9tICcuL3NpZGViYXIvaW5kZXguanMnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcclxuXHJcbmNvbnN0IGZvb3RlcklDUF9IVE1MID0gYFxyXG48YSBjbGFzcz1cImZvb3Rlci1hYm91dFwiIGhyZWY9XCIvYWJvdXQvd2Vic2l0ZS5odG1sXCI+XHU1MTczXHU0RThFXHU2NzJDXHU3QUQ5PC9hPmA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob3BlVGhlbWUoe1xyXG4gIGhvc3RuYW1lOiAnaHR0cHM6Ly9tYWNoYW9qaW4uY24nLFxyXG4gIGF1dGhvcjoge1xyXG4gICAgbmFtZTogJ0NoYW9qaW4nLFxyXG4gICAgdXJsOiAnaHR0cHM6Ly9tYWNoYW9qaW4uY24nLFxyXG4gICAgZW1haWw6ICdtYUBtYWNoYW9qaW4uY24nLFxyXG4gIH0sXHJcbiAgaWNvbkFzc2V0czogJy8vYXQuYWxpY2RuLmNvbS90L2MvZm9udF8zODU1MzEwX3UzMzU4NHY0anNjLmNzcycsXHJcbiAgbG9nbzogJ2h0dHBzOi8vbWVzc2FnZS1zdGFjay5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vaW1hZ2VzL2EtMjA5OTE1OF82NDAud2VicCcsXHJcbiAgZG9jc0RpcjogJ3NyYycsXHJcbiAgZWRpdExpbms6IGZhbHNlLFxyXG4gIGZ1bGxzY3JlZW46IHRydWUsXHJcbiAgbmF2YmFyQXV0b0hpZGU6ICdhbHdheXMnLFxyXG4gIGZvb3RlcjogZm9vdGVySUNQX0hUTUwsXHJcbiAgcGFnZUluZm86IFtcclxuICAgICdBdXRob3InLFxyXG4gICAgJ0NhdGVnb3J5JyxcclxuICAgICdEYXRlJyxcclxuICAgICdPcmlnaW5hbCcsXHJcbiAgICAnVGFnJyxcclxuICAgICdSZWFkaW5nVGltZScsXHJcbiAgICAnV29yZCcsXHJcbiAgICAnUGFnZVZpZXcnLFxyXG4gICAgLy8uLlxyXG4gIF0sXHJcblxyXG4gIGJsb2c6IHtcclxuICAgIGF2YXRhcjogJ2h0dHBzOi8vbWVzc2FnZS1zdGFjay5vc3MtY24tYmVpamluZy5hbGl5dW5jcy5jb20vaW1hZ2VzLyVFNSVBNCVCNCVFNSU4MyU4Ri5wbmcnLFxyXG4gICAgcm91bmRBdmF0YXI6IHRydWUsXHJcbiAgICBtZWRpYXM6IHtcclxuICAgICAgRW1haWw6ICdtYUBtYWNoYW9qaW4uY24nLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBuYXZiYXJMYXlvdXQ6IHtcclxuICAgIHN0YXJ0OiBbJ0JyYW5kJ10sXHJcbiAgICBjZW50ZXI6IFtdLFxyXG4gICAgZW5kOiBbJ1NlYXJjaCcsICdMaW5rcycsICdMYW5ndWFnZScsICdPdXRsb29rJ10sXHJcbiAgfSxcclxuXHJcbiAgbG9jYWxlczoge1xyXG4gICAgJy8nOiB7XHJcbiAgICAgIG5hdmJhcjogemhOYXZiYXIsXHJcbiAgICAgIHNpZGViYXI6IHpoU2lkZWJhcixcclxuICAgICAgYmxvZzoge1xyXG4gICAgICAgIG5hbWU6ICdDaGFvamluJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ1x1N0I4MFx1NTM1NVx1NUZFQlx1NEU1MFx1RkYwQ1x1NzQwNlx1NUU5NFx1NTk4Mlx1NkI2NFx1MzAwMicsXHJcbiAgICAgICAgaW50cm86ICcvYWJvdXQvbWUuaHRtbCcsXHJcbiAgICAgICAgdGltZWxpbmU6ICdcdTdGOEVcdTU5N0RcdTc2ODRcdTRFOEJcdTYwQzVcdTUzNzNcdTVDMDZcdTUzRDFcdTc1MUYnLFxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGVuY3J5cHQ6IHtcclxuICAgIGNvbmZpZzoge1xyXG4gICAgICAnL2VuL2RlbW8vZW5jcnlwdC5odG1sJzogWycxMjM0J10sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIHBsdWdpbnM6IHtcclxuICAgIGJsb2c6IHRydWUsXHJcblxyXG4gICAgLy8gYWxsIGZlYXR1cmVzIGFyZSBlbmFibGVkIGZvciBkZW1vLCBvbmx5IHByZXNlcnZlIGZlYXR1cmVzIHlvdSBuZWVkIGhlcmVcclxuICAgIG1kRW5oYW5jZToge1xyXG4gICAgICBhbGlnbjogdHJ1ZSxcclxuICAgICAgYXR0cnM6IHRydWUsXHJcbiAgICAgIGNhcmQ6IHRydWUsXHJcblxyXG4gICAgICAvLyBpbnN0YWxsIGNoYXJ0LmpzIGJlZm9yZSBlbmFibGluZyBpdFxyXG4gICAgICAvLyBjaGFydDogdHJ1ZSxcclxuXHJcbiAgICAgIGNvZGV0YWJzOiB0cnVlLFxyXG4gICAgICBkZW1vOiB0cnVlLFxyXG5cclxuICAgICAgLy8gaW5zdGFsbCBlY2hhcnRzIGJlZm9yZSBlbmFibGluZyBpdFxyXG4gICAgICAvLyBlY2hhcnRzOiB0cnVlLFxyXG5cclxuICAgICAgZmlndXJlOiB0cnVlLFxyXG5cclxuICAgICAgLy8gaW5zdGFsbCBmbG93Y2hhcnQudHMgYmVmb3JlIGVuYWJsaW5nIGl0XHJcbiAgICAgIC8vIGZsb3djaGFydDogdHJ1ZSxcclxuXHJcbiAgICAgIGdmbTogdHJ1ZSxcclxuICAgICAgaW1nTGF6eWxvYWQ6IHRydWUsXHJcbiAgICAgIGltZ1NpemU6IHRydWUsXHJcbiAgICAgIGluY2x1ZGU6IHtcclxuICAgICAgICByZXNvbHZlUGF0aDogKGZpbGUpID0+IHtcclxuICAgICAgICAgIC8vIGlmIChmaWxlLnN0YXJ0c1dpdGgoJ0AnKSkge1xyXG4gICAgICAgICAgLy8gICByZXR1cm4gZmlsZS5yZXBsYWNlKCdAJywgcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4uLy4uLycpKTtcclxuICAgICAgICAgIC8vIH1cclxuICAgICAgICAgIHJldHVybiBmaWxlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcblxyXG4gICAgICAvLyBpbnN0YWxsIGthdGV4IGJlZm9yZSBlbmFibGluZyBpdFxyXG4gICAgICAvLyBrYXRleDogdHJ1ZSxcclxuXHJcbiAgICAgIC8vIGluc3RhbGwgbWF0aGpheC1mdWxsIGJlZm9yZSBlbmFibGluZyBpdFxyXG4gICAgICAvLyBtYXRoamF4OiB0cnVlLFxyXG5cclxuICAgICAgbWFyazogdHJ1ZSxcclxuXHJcbiAgICAgIC8vIGluc3RhbGwgbWVybWFpZCBiZWZvcmUgZW5hYmxpbmcgaXRcclxuICAgICAgLy8gbWVybWFpZDogdHJ1ZSxcclxuXHJcbiAgICAgIHBsYXlncm91bmQ6IHtcclxuICAgICAgICBwcmVzZXRzOiBbJ3RzJywgJ3Z1ZSddLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgLy8gaW5zdGFsbCByZXZlYWwuanMgYmVmb3JlIGVuYWJsaW5nIGl0XHJcbiAgICAgIHJldmVhbEpzOiB7XHJcbiAgICAgICAgcGx1Z2luczogWydoaWdobGlnaHQnLCAnbWF0aCcsICdzZWFyY2gnLCAnbm90ZXMnLCAnem9vbSddLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAgc3R5bGl6ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1hdGNoZXI6ICdSZWNvbW1lbmRlZCcsXHJcbiAgICAgICAgICByZXBsYWNlcjogKHsgdGFnIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKHRhZyA9PT0gJ2VtJylcclxuICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdGFnOiAnQmFkZ2UnLFxyXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogJ3RpcCcgfSxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdSZWNvbW1lbmRlZCcsXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgXSxcclxuICAgICAgc3ViOiB0cnVlLFxyXG4gICAgICBzdXA6IHRydWUsXHJcbiAgICAgIHRhYnM6IHRydWUsXHJcbiAgICAgIHZQcmU6IHRydWUsXHJcblxyXG4gICAgICAvLyBpbnN0YWxsIEB2dWUvcmVwbCBiZWZvcmUgZW5hYmxpbmcgaXRcclxuICAgICAgdnVlUGxheWdyb3VuZDogdHJ1ZSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gcHdhOiB7XHJcbiAgICAvLyAgIGZhdmljb246ICcvZmF2aWNvbi5wbmcnLFxyXG4gICAgLy8gICBjYWNoZUhUTUw6IHRydWUsXHJcbiAgICAvLyAgIGNhY2hlUGljOiB0cnVlLFxyXG4gICAgLy8gICBhcHBlbmRCYXNlOiB0cnVlLFxyXG4gICAgLy8gICBhcHBsZToge1xyXG4gICAgLy8gICAgIGljb246ICcvcHdhLzE0NC5wbmcnLFxyXG4gICAgLy8gICAgIHN0YXR1c0JhckNvbG9yOiAnYmxhY2snLFxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gICBtc1RpbGU6IHtcclxuICAgIC8vICAgICBpbWFnZTogJy9wd2EvMTQ0LnBuZycsXHJcbiAgICAvLyAgICAgY29sb3I6ICcjMDAwJyxcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAgbWFuaWZlc3Q6IHtcclxuICAgIC8vICAgICBpY29uczogW1xyXG4gICAgLy8gICAgICAge1xyXG4gICAgLy8gICAgICAgICBzcmM6ICcvcHdhLzUxMi5wbmcnLFxyXG4gICAgLy8gICAgICAgICBzaXplczogJzUxMng1MTInLFxyXG4gICAgLy8gICAgICAgICBwdXJwb3NlOiAnbWFza2FibGUnLFxyXG4gICAgLy8gICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgIC8vICAgICAgIH0sXHJcbiAgICAvLyAgICAgICB7XHJcbiAgICAvLyAgICAgICAgIHNyYzogJy9wd2EvMTkyLnBuZycsXHJcbiAgICAvLyAgICAgICAgIHNpemVzOiAnMTkyeDE5MicsXHJcbiAgICAvLyAgICAgICAgIHB1cnBvc2U6ICdtYXNrYWJsZScsXHJcbiAgICAvLyAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxyXG4gICAgLy8gICAgICAgfSxcclxuICAgIC8vICAgICAgIHtcclxuICAgIC8vICAgICAgICAgc3JjOiAnL3B3YS81MTIucG5nJyxcclxuICAgIC8vICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcclxuICAgIC8vICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXHJcbiAgICAvLyAgICAgICB9LFxyXG4gICAgLy8gICAgICAge1xyXG4gICAgLy8gICAgICAgICBzcmM6ICcvcHdhLzE5Mi5wbmcnLFxyXG4gICAgLy8gICAgICAgICBzaXplczogJzE5MngxOTInLFxyXG4gICAgLy8gICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgIC8vICAgICAgIH0sXHJcbiAgICAvLyAgICAgXSxcclxuICAgIC8vICAgICBzaG9ydGN1dHM6IFtcclxuICAgIC8vICAgICAgIHtcclxuICAgIC8vICAgICAgICAgbmFtZTogJ1x1NThBOFx1NEUwMycsXHJcbiAgICAvLyAgICAgICAgIHNob3J0X25hbWU6ICdcdTU4QThcdTRFMDMnLFxyXG4gICAgLy8gICAgICAgICB1cmw6ICcvJyxcclxuICAgIC8vICAgICAgICAgaWNvbnM6IFtcclxuICAgIC8vICAgICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICBzcmM6ICcvcHdhLzE5Mi5wbmcnLFxyXG4gICAgLy8gICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcclxuICAgIC8vICAgICAgICAgICAgIHB1cnBvc2U6ICdtYXNrYWJsZScsXHJcbiAgICAvLyAgICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgIC8vICAgICAgICAgICB9LFxyXG4gICAgLy8gICAgICAgICBdLFxyXG4gICAgLy8gICAgICAgfSxcclxuICAgIC8vICAgICBdLFxyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gfSxcclxuICB9LFxyXG59KTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9WU0NvZGVQcm9qZWN0L3Z1ZXByZXNzL0Jsb2dTb3VyY2Uvc3JjLy52dWVwcmVzcy9uYXZiYXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFZTQ29kZVByb2plY3RcXFxcdnVlcHJlc3NcXFxcQmxvZ1NvdXJjZVxcXFxzcmNcXFxcLnZ1ZXByZXNzXFxcXG5hdmJhclxcXFx6aC50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovVlNDb2RlUHJvamVjdC92dWVwcmVzcy9CbG9nU291cmNlL3NyYy8udnVlcHJlc3MvbmF2YmFyL3poLnRzXCI7aW1wb3J0IHsgbmF2YmFyIH0gZnJvbSAndnVlcHJlc3MtdGhlbWUtaG9wZSc7XHJcblxyXG5leHBvcnQgY29uc3QgemhOYXZiYXIgPSBuYXZiYXIoW1xyXG4gIHtcclxuICAgIHRleHQ6ICdcdTc2RUVcdTVGNTUnLFxyXG4gICAgaWNvbjogJ3NvcnQnLFxyXG4gICAgbGluazogJy9wb3N0cycsXHJcbiAgICBjaGlsZHJlbjogWycvY29kZXInLCAnL2xpbnV4JywgJy9za2lsbHMnLCAnL3Rvb2xzJywgJy9sZWV0Y29kZScsICcvaW50ZXJ2aWV3JywgJy9pdGVtcyddLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogJ1x1N0QyMlx1NUYxNScsXHJcbiAgICBpY29uOiAnamlhbnN1bycsXHJcbiAgICBjaGlsZHJlbjogW1xyXG4gICAgICB7IHRleHQ6ICdcdTUxNjhcdTkwRTgnLCBpY29uOiAnbGlzdCcsIGxpbms6ICcvYXJ0aWNsZScgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU1MjA2XHU3QzdCJywgaWNvbjogJ2NhdGVnb3J5JywgbGluazogJy9jYXRlZ29yeScgfSxcclxuICAgICAgeyB0ZXh0OiAnXHU2ODA3XHU3QjdFJywgaWNvbjogJ3RhZycsIGxpbms6ICcvdGFnJyB9LFxyXG4gICAgICB7IHRleHQ6ICdcdTY1RjZcdTk1RjRcdThGNzQnLCBpY29uOiAndGltZScsIGxpbms6ICcvdGltZWxpbmUnIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcblxyXG4gIHtcclxuICAgIHRleHQ6ICdcdTY1MzZcdTg1Q0YnLFxyXG4gICAgaWNvbjogJ3N0YXJ0JyxcclxuICAgIGxpbms6ICcvZmF2b3JpdGUnLFxyXG4gICAgY2hpbGRyZW46IFsnL2Zhdm9yaXRlL2xpbmtzJywgJy9mYXZvcml0ZS9tb3ZpZXMnLCAnL2Zhdm9yaXRlL211c2ljJywgJy9mYXZvcml0ZS9waG90b3MnXSxcclxuICB9LFxyXG4gICcvYWJvdXQnLFxyXG5dKTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9WU0NvZGVQcm9qZWN0L3Z1ZXByZXNzL0Jsb2dTb3VyY2Uvc3JjLy52dWVwcmVzcy9zaWRlYmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxWU0NvZGVQcm9qZWN0XFxcXHZ1ZXByZXNzXFxcXEJsb2dTb3VyY2VcXFxcc3JjXFxcXC52dWVwcmVzc1xcXFxzaWRlYmFyXFxcXHpoLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9WU0NvZGVQcm9qZWN0L3Z1ZXByZXNzL0Jsb2dTb3VyY2Uvc3JjLy52dWVwcmVzcy9zaWRlYmFyL3poLnRzXCI7aW1wb3J0IHsgc2lkZWJhciB9IGZyb20gJ3Z1ZXByZXNzLXRoZW1lLWhvcGUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHpoU2lkZWJhciA9IHNpZGViYXIoe1xyXG4gIC8vIFx1NUI1MFx1OERFRlx1NUY4NFxyXG4gICcvYWJvdXQvJzogW1xyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnXHU1MTczXHU0RThFJyxcclxuICAgICAgaWNvbjogJ2luZm8nLFxyXG4gICAgICBwcmVmaXg6ICcnLFxyXG4gICAgICBsaW5rOiAnL2Fib3V0LycsXHJcbiAgICAgIGNoaWxkcmVuOiAnc3RydWN0dXJlJyxcclxuICAgIH0sXHJcbiAgXSxcclxuICAnL3Rvb2xzLyc6IFtcclxuICAgIHtcclxuICAgICAgdGV4dDogJ1x1NURFNVx1NTE3NycsXHJcbiAgICAgIGljb246ICdnb25nanUnLFxyXG4gICAgICBwcmVmaXg6ICcnLFxyXG4gICAgICBsaW5rOiAnL3Rvb2xzLycsXHJcbiAgICAgIGNoaWxkcmVuOiAnc3RydWN0dXJlJyxcclxuICAgIH0sXHJcbiAgXSxcclxuICAnL2xpbnV4Lyc6IFtcclxuICAgIHtcclxuICAgICAgdGV4dDogJ0xpbnV4JyxcclxuICAgICAgaWNvbjogJ2xpbnV4JyxcclxuICAgICAgcHJlZml4OiAnJyxcclxuICAgICAgbGluazogJy9saW51eC8nLFxyXG4gICAgICBjaGlsZHJlbjogW10sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnRGViaWFuJyxcclxuICAgICAgaWNvbjogJ2RlYmlhbm9zJyxcclxuICAgICAgcHJlZml4OiAnRGViaWFuLycsXHJcbiAgICAgIGNoaWxkcmVuOiAnc3RydWN0dXJlJyxcclxuICAgICAgbGluazogJy9saW51eC9EZWJpYW4vJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdTZXR0aW5ncycsXHJcbiAgICAgIGljb246ICdzaGV6aGknLFxyXG4gICAgICBwcmVmaXg6ICdTZXR0aW5ncy8nLFxyXG4gICAgICBjaGlsZHJlbjogJ3N0cnVjdHVyZScsXHJcbiAgICAgIGxpbms6ICcvbGludXgvU2V0dGluZ3MvJyxcclxuICAgIH0sXHJcbiAgXSxcclxuICAnL2xlZXRjb2RlLyc6IFtcclxuICAgIHtcclxuICAgICAgdGV4dDogJ0xlZXRDb2RlJyxcclxuICAgICAgaWNvbjogJ2xlZXRjb2RlJyxcclxuICAgICAgcHJlZml4OiAnJyxcclxuICAgICAgbGluazogJy9sZWV0Y29kZS8nLFxyXG4gICAgICBjaGlsZHJlbjogJ3N0cnVjdHVyZScsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgJy9jb2Rlci8nOiBbXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdDb2RlcicsXHJcbiAgICAgIGljb246ICdjb2RpbmcnLFxyXG4gICAgICBwcmVmaXg6ICcnLFxyXG4gICAgICBsaW5rOiAnL2NvZGVyLycsXHJcbiAgICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdXZWJcdTUyNERcdTdBRUYnLFxyXG4gICAgICBpY29uOiAnSFRNTCcsXHJcbiAgICAgIHByZWZpeDogJ2NvZGVyLycsXHJcbiAgICAgIGNoaWxkcmVuOiAnc3RydWN0dXJlJyxcclxuICAgICAgbGluazogJy9jb2Rlci9mcm9udGVuZC8nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogJ2dvbGFuZycsXHJcbiAgICAgIGljb246ICdnb2ljb24nLFxyXG4gICAgICBwcmVmaXg6ICdnb2xhbmcvJyxcclxuICAgICAgY2hpbGRyZW46ICdzdHJ1Y3R1cmUnLFxyXG4gICAgICBsaW5rOiAnL2NvZGVyL2dvbGFuZy8nLFxyXG4gICAgfSxcclxuICBdLFxyXG4gICcvc2tpbGxzLyc6IFtcclxuICAgIHtcclxuICAgICAgdGV4dDogJ1x1NjI4MFx1NURFNycsXHJcbiAgICAgIGljb246ICd6aGlsaWFuZ2ppc2h1JyxcclxuICAgICAgcHJlZml4OiAnJyxcclxuICAgICAgbGluazogJy9za2lsbHMvJyxcclxuICAgICAgY2hpbGRyZW46ICdzdHJ1Y3R1cmUnLFxyXG4gICAgfSxcclxuICBdLFxyXG4gICcvaW50ZXJ2aWV3Lyc6W1xyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnXHU5NzYyXHU4QkQ1XHU5ODk4JyxcclxuICAgICAgaWNvbjogJ3poaWxpYW5namlzaHUnLFxyXG4gICAgICBwcmVmaXg6ICcnLFxyXG4gICAgICBsaW5rOiAnL2ludGVydmlldy8nLFxyXG4gICAgICBjaGlsZHJlbjogJ3N0cnVjdHVyZScsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgJy9pdGVtcy8nOltcclxuICAgIHtcclxuICAgICAgdGV4dDogJ1x1OTg3OVx1NzZFRVx1NjUzNlx1OTZDNicsXHJcbiAgICAgIGljb246ICd6aGlsaWFuZ2ppc2h1JyxcclxuICAgICAgcHJlZml4OiAnJyxcclxuICAgICAgbGluazogJy9pdGVtcy8nLFxyXG4gICAgICBjaGlsZHJlbjogJ3N0cnVjdHVyZScsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgJy9mYXZvcml0ZS8nOiBbXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdcdTVGNzFcdTg5QzYnLFxyXG4gICAgICBpY29uOiAnbW92aWUnLFxyXG4gICAgICBwcmVmaXg6ICdtb3ZpZXMvJyxcclxuICAgICAgbGluazogJy9mYXZvcml0ZS9tb3ZpZXMvJyxcclxuICAgICAgY2hpbGRyZW46ICdzdHJ1Y3R1cmUnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogJ1x1OTdGM1x1NEU1MCcsXHJcbiAgICAgIGljb246ICdtdXNpYycsXHJcbiAgICAgIHByZWZpeDogJ211c2ljLycsXHJcbiAgICAgIGNoaWxkcmVuOiAnc3RydWN0dXJlJyxcclxuICAgICAgbGluazogJy9mYXZvcml0ZS9tdXNpYy8nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogJ1x1NzZGOFx1NTE4QycsXHJcbiAgICAgIGljb246ICd4aWFuZ2NlJyxcclxuICAgICAgcHJlZml4OiAncGhvdG9zLycsXHJcbiAgICAgIGNoaWxkcmVuOiAnc3RydWN0dXJlJyxcclxuICAgICAgbGluazogJy9mYXZvcml0ZS9waG90b3MvJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdcdTk0RkVcdTYzQTUnLFxyXG4gICAgICBpY29uOiAnbGluaycsXHJcbiAgICAgIHByZWZpeDogJ2xpbmtzLycsXHJcbiAgICAgIGNoaWxkcmVuOiAnc3RydWN0dXJlJyxcclxuICAgICAgbGluazogJy9mYXZvcml0ZS9saW5rcy8nLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIC8vIFx1NjU3NFx1NEY1M1x1OERFRlx1NzUzMVx1NTIxMlx1NTIwNlxyXG4gICcvJzogW1xyXG4gICAgJycsXHJcbiAgICAnL2xlZXRjb2RlLycsXHJcbiAgICAnL2ludGVydmlldy8nLFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnXHU1MzVBXHU2NTg3JyxcclxuICAgICAgaWNvbjogJ25vdGUnLFxyXG4gICAgICBwcmVmaXg6ICdwb3N0cy8nLFxyXG4gICAgICBsaW5rOiAnL3Bvc3RzLycsXHJcbiAgICAgIGNoaWxkcmVuOiAnc3RydWN0dXJlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdcdTY1MzZcdTg1Q0YnLFxyXG4gICAgICBpY29uOiAnZmF2b3JpdGVhJyxcclxuICAgICAgbGluazogJy9mYXZvcml0ZS8nLFxyXG4gICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdcdTVGNzFcdTg5QzYnLFxyXG4gICAgICAgICAgaWNvbjogJ21vdmllJyxcclxuICAgICAgICAgIGxpbms6ICcvZmF2b3JpdGUvbW92aWVzLycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHU5N0YzXHU0RTUwJyxcclxuICAgICAgICAgIGljb246ICdtdXNpYycsXHJcbiAgICAgICAgICBsaW5rOiAnL2Zhdm9yaXRlL211c2ljLycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHU3NkY4XHU1MThDJyxcclxuICAgICAgICAgIGljb246ICd4aWFuZ2NlJyxcclxuICAgICAgICAgIGxpbms6ICcvZmF2b3JpdGUvcGhvdG9zLycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnXHU5NEZFXHU2M0E1JyxcclxuICAgICAgICAgIGljb246ICdsaW5rJyxcclxuICAgICAgICAgIGxpbms6ICcvZmF2b3JpdGUvbGlua3MvJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogJ1x1NjI4MFx1NURFNycsXHJcbiAgICAgIGljb246ICd6aGlsaWFuZ2ppc2h1JyxcclxuICAgICAgcHJlZml4OiAnc2tpbGxzLycsXHJcbiAgICAgIGxpbms6ICcvc2tpbGxzLycsXHJcbiAgICAgIGNoaWxkcmVuOiAnc3RydWN0dXJlJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRleHQ6ICdcdTVERTVcdTUxNzcnLFxyXG4gICAgICBpY29uOiAnZ29uZ2p1JyxcclxuICAgICAgcHJlZml4OiAndG9vbHMvJyxcclxuICAgICAgbGluazogJy90b29scy8nLFxyXG4gICAgICBjaGlsZHJlbjogJ3N0cnVjdHVyZScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnTGludXgnLFxyXG4gICAgICBpY29uOiAnbGludXgnLFxyXG4gICAgICBwcmVmaXg6ICdsaW51eC8nLFxyXG4gICAgICBsaW5rOiAnL2xpbnV4LycsXHJcbiAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGV4dDogJ0RlYmlhbicsXHJcbiAgICAgICAgICBpY29uOiAnZGViaWFub3MnLFxyXG4gICAgICAgICAgbGluazogJy9saW51eC9EZWJpYW4vJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdTZXR0aW5ncycsXHJcbiAgICAgICAgICBpY29uOiAnc2hlemhpJyxcclxuICAgICAgICAgIGxpbms6ICcvbGludXgvU2V0dGluZ3MvJyxcclxuICAgICAgICB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGV4dDogJ0NvZGVyJyxcclxuICAgICAgaWNvbjogJ2NvZGluZycsXHJcbiAgICAgIHByZWZpeDogJ2NvZGVyLycsXHJcbiAgICAgIGxpbms6ICcvY29kZXIvJyxcclxuICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICB0ZXh0OiAnV2ViXHU1MjREXHU3QUVGJyxcclxuICAgICAgICAgIGljb246ICdIVE1MJyxcclxuICAgICAgICAgIGxpbms6ICcvY29kZXIvZnJvbnRlbmQvJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHRleHQ6ICdHb2xhbmcnLFxyXG4gICAgICAgICAgaWNvbjogJ2dvaWNvbicsXHJcbiAgICAgICAgICBsaW5rOiAnL2NvZGVyL2dvbGFuZy8nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0ZXh0OiAnXHU1MTczXHU0RThFJyxcclxuICAgICAgaWNvbjogJ2luZm8nLFxyXG4gICAgICBwcmVmaXg6ICdhYm91dC8nLFxyXG4gICAgICBsaW5rOiAnL2Fib3V0L3dlYnNpdGUuaHRtbCcsXHJcbiAgICAgIGNoaWxkcmVuOiAnc3RydWN0dXJlJyxcclxuICAgIH0sXHJcbiAgXSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVUsU0FBUyx3QkFBd0I7OztBQ0FuQyxTQUFTLGlCQUFpQjs7O0FDQVYsU0FBUyxjQUFjO0FBRW5XLElBQU0sV0FBVyxPQUFPO0FBQUEsRUFDN0I7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFVBQVUsQ0FBQyxVQUFVLFVBQVUsV0FBVyxVQUFVLGFBQWEsY0FBYyxRQUFRO0FBQUEsRUFDekY7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsTUFDUixFQUFFLE1BQU0sZ0JBQU0sTUFBTSxRQUFRLE1BQU0sV0FBVztBQUFBLE1BQzdDLEVBQUUsTUFBTSxnQkFBTSxNQUFNLFlBQVksTUFBTSxZQUFZO0FBQUEsTUFDbEQsRUFBRSxNQUFNLGdCQUFNLE1BQU0sT0FBTyxNQUFNLE9BQU87QUFBQSxNQUN4QyxFQUFFLE1BQU0sc0JBQU8sTUFBTSxRQUFRLE1BQU0sWUFBWTtBQUFBLElBQ2pEO0FBQUEsRUFDRjtBQUFBLEVBRUE7QUFBQSxJQUNFLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFVBQVUsQ0FBQyxtQkFBbUIsb0JBQW9CLG1CQUFtQixrQkFBa0I7QUFBQSxFQUN6RjtBQUFBLEVBQ0E7QUFDRixDQUFDOzs7QUMzQnFWLFNBQVMsZUFBZTtBQUV2VyxJQUFNLFlBQVksUUFBUTtBQUFBO0FBQUEsRUFFL0IsV0FBVztBQUFBLElBQ1Q7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUFBLEVBQ0EsV0FBVztBQUFBLElBQ1Q7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUFBLEVBQ0EsV0FBVztBQUFBLElBQ1Q7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFVBQVUsQ0FBQztBQUFBLElBQ2I7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1o7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUFBLEVBQ0EsV0FBVztBQUFBLElBQ1Q7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFVBQVUsQ0FBQztBQUFBLElBQ2I7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1Y7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUFBLEVBQ0EsZUFBYztBQUFBLElBQ1o7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUFBLEVBQ0EsV0FBVTtBQUFBLElBQ1I7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsRUFDRjtBQUFBLEVBQ0EsY0FBYztBQUFBLElBQ1o7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsTUFDVixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFFQSxLQUFLO0FBQUEsSUFDSDtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsUUFDUjtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsVUFDRSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFB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
