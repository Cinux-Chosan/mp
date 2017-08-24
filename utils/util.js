let Promise = require('../assets/js/bluebird/bluebird.min');

function promisify(fn) {
  return function (obj = {}) {
    return new Promise((resolve, reject) => {
      obj.success = function (res) {
        resolve(res);
      }

      obj.fail = function (res) {
        reject(res);
      }

      fn(obj);
    });
  }
}

module.exports = {
  promisify
}
