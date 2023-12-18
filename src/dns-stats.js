const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
let result = new Object ();
domains.forEach (element => {
    let parts = element.split('.').reverse();
    let part = ''; 
    for (let i = 0; i < parts.length; i += 1) {
      part = part + '.' + parts[i];
      if (result.hasOwnProperty(part)) {
        result[part] += 1; 
      } else
      {
        result[part] = 1;
      }
    } 
})
return result;
}

module.exports = {
  getDNSStats
};
