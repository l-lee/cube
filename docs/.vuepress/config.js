module.exports = {
    theme: 'reco',
    title: "Cygia Cube Controller",
    base:"/cube/",
    description: 'Cygia Cube Controller product Manual',
    // 移动端优化
    head: [
      ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    // 主题设置
    themeConfig: {
      type: 'blog',
      author: 'new recoer',
      // 显示在个人信息的头像
      authorAvatar: '/avatar.png',
      // 导航栏左侧logo
      logo: '/avatar.png',
      // 搜索设置
      search: true,
      searchMaxSuggestions: 10,
      // 自动形成侧边导航及其深度
      subSidebar: 'auto',
      sidebarDepth: 1,
      // 最后更新时间
      lastUpdated: 'Last Updated',
      // 项目开始时间
      startYear: '2021',
      // 导航栏配置
      nav: [
        { text: 'Home', link: '/', icon: 'reco-home' },
        { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
        { text: 'GitHub', link: 'https://github.com/l-lee/cube', icon: 'reco-github' }
      ],
      // 博客配置
      blogConfig: {
        category: {
          location: 2,     // 在导航栏菜单中所占的位置，默认2
          text: 'Category' // 默认文案 “分类”
        },
        tag: {
          location: 3,     // 在导航栏菜单中所占的位置，默认3
          text: 'Tag'      // 默认文案 “标签”
        }
      },
      vssueConfig: {
        platform: 'github',
        owner: 'l-lee',
        repo: 'Blog',
        clientId: 'a5b06148dde075ce6031',
        clientSecret: '48c042cb9009164be1b3268223ef62547f29de72',
      },
      

      // 友情链接
      friendLink: [
        {
          title: 'vuepress-theme-reco',
          desc: 'A simple and beautiful vuepress Blog & Doc theme.',
          logo: "https://photo.smallsunnyfox.com/images/blog/friendlink/theme_reco.png",
          link: 'https://vuepress-theme-reco.recoluan.com'
        }
      ]
    },
    // 插件配置
    plugins: [
      [
        'permalink-pinyin',
        {
          lowercase: true,
          separator: '-'
        }
    ],
    ]
  }