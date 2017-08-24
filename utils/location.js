let { promisify } = require('./util');

let getLocation = promisify(wx.getLocation, { type: 'gcj02' });

module.exports = {
  getLocation
}
