const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n);
  for (let i = 0; i < str.length-1; i += 1){
    if (str[i] < str[i+1]) {
      if (i > 0) {
        str = str.substring(0, i)+str.substring(i+1, str.length);
        return Number(str);
      } else
      {
        str = str.substring(i+1, str.length);
        return Number(str);
      }
    }
  }
  str = str.substring(0, str.length-1);
  return Number(str);
}


module.exports = {
  deleteDigit
};
