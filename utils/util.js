let Promise = require('../assets/js/bluebird/bluebird.min');

function promisify(fn, defaultOpts = {}) {
  return function (obj = {}) {
    obj = Object.assign({}, defaultOpts, obj);
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
