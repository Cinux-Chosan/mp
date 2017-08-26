//index.js
//获取应用实例
let { getLocation } = require('../../utils/location');
let footerController = require('../../utils/footer');
let { authorize } = require('../../utils/wxapi');
let app = getApp();
let footer = app.globalData.footer;
const { assign } = Object;

Page(assign({}, footerController, {
  data: {
    motto: 'Hello World',
    userInfo: {},
    location: {},
    footer,
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#000",
      width: 20,
      dottedLine: true
    }],
    markers: [
      {
        id: 1,
        name: 'car',
        latitude: 23.099994,
        longitude: 113.324520,
        width: 30,
        height: 30,
        anchor: { x: .5, y: .5 },
        iconPath: '/assets/imgs/index/car.png'
      }
    ]
  },
  

  ct() {
    console.log('111');
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  
  

  openPopup(e) {
    let footer = this.data.footer;
    console.log(this.data);
    footer.isOpen = !footer.isOpen;
    this.setData({
      footer
    });
  },

  qiehuan() {
    // wx.openLocation({
    //   latitude: 111,
    //   longitude: 111,
    // });
  },

  onLoad: function () {
    getLocation().then(location => {
      this.setData({
        location
      });
    });

    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('indexMap')
  }
}));
