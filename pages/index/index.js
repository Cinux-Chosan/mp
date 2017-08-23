//index.js
//获取应用实例
let { getLocation } =  require('../../utils/location');

var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    location: {},
    controls: [{
      id: 1,
      position: {
        left: 90,
        top: 10,
        width: 30,
        height: 30
      },
      clickable: true,
      iconPath: '/assets/imgs/index/qiehuan.png'
    }]
  },

  ct() {
    console.log('111');
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  qiehuan() {
    console.log('111');
    wx.openLocation({
      latitude: 111,
      longitude: 111,
    })
  },
  onLoad: function () {
    getLocation().then(location => {
      this.setData({location});
    });
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})