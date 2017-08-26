let { promisify } = require('./util');

let navigateTo = promisify(wx.navigateTo, { url: '/pages/index/index' });
let redirectTo = promisify(wx.redirectTo, { url: '/pages/index/index' });
let authorize = promisify(wx.authorize, { scope: 'scope.userInfo' });
module.exports = {
  navigateTo,
  redirectTo,
  authorize
}