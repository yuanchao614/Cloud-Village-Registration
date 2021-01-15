// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },

  onShow() {
    let tabBarComponent = this.selectComponent('#tabBar'); // 页面获取自定义组件实例
    tabBarComponent.init();
  },
  
})
