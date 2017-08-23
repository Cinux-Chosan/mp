let { promisify } = require('./util');

let getLocation = promisify(wx.getLocation);

module.exports = {
  getLocation
}
