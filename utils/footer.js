let { getLocation } = require('./location');
let { redirectTo } = require('./wxapi');

const { assign } = Object;

function toggleMenus() {
  let isOpen = !this.data.footer.isOpen;
  this.setData({
    footer: {
      isOpen
    }
  });
}

function chooseLocation(obj = {}) {
  wx.chooseLocation(assign({}, obj));
}

function exchange() {
  let pages = getCurrentPages();
  let curPage = pages[pages.length - 1];
  let nextPage = '';
  if (-1 != curPage.route.indexOf('index')) {
    nextPage = '/pages/carlist/carlist';
  } else {
    nextPage = '/pages/index/index';
  }
  redirectTo({url: nextPage});
}

function resetMapCenter() {
  let mapCtx = this.mapCtx;
  mapCtx.moveToLocation();
  getLocation().then(loc => {
    let marker = this.data.markers.findBy('name', 'car');
    mapCtx.translateMarker({
      markerId: marker.id,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude: loc.latitude,
        longitude: loc.longitude,
      },
      animationEnd() {
        console.log('animation end');
      }
    });
  });
}

module.exports = {
  toggleMenus,
  chooseLocation,
  exchange,
  resetMapCenter
}