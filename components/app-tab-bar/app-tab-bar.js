// components/app-tab-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    tabbarList: [
      {
        pagePath: '/pages/index/index',
        text: '首页',
        icon: 'home-o'
      },
      {
        pagePath: '/pages/logs/logs',
        text: '搜索',
        icon: 'search'
      },
      {
        pagePath: '/pages/setting/setting',
        text: '我的',
        icon: 'setting-o'
      },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(e) {
      console.log(e,'e')
      this.setData({ active: e.detail });
      wx.switchTab({
        url: this.data.tabbarList[e.detail].pagePath
      });
   },
   init() {
       const page = getCurrentPages().pop();
       this.setData({
      　  active: this.data.tabbarList.findIndex(item => item.pagePath === `/${page.route}`)
       });
      }
   }
})
