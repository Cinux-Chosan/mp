//index.js
//获取应用实例
let { getLocation } =  require('../../utils/location');

var app = getApp()
let footer = app.globalData.footer;
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    location: {},
    footer,
    markers: [
      {
        id: 1,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 30,
        height: 30,
        anchor: {x: .5, y: .5},
        iconPath: '/assets/imgs/index/car.png'
      }
    ],
    controls: [
      // {
      // id: 1,
      // position: {
      //   left: 90,
      //   top: 10,
      //   width: 30,
      //   height: 30
      // },
      // clickable: true,
      // iconPath: '/assets/imgs/index/qiehuan.png'
      // }
    ]
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

  chooseLocation() {
    wx.chooseLocation({});
  },

  resetMapCenter() {
    getLocation().then(location => {
      this.setData({
        location
       });
    });
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
        location,
        'markers[0].latitude': location.latitude,
        'markers[0].longitude': location.longitude
      });
    });

    console.log(this.data.footer);

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
