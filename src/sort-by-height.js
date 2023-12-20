const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sorted = arr.map( x => x);
  let result;
  sorted.sort((a,b) => a-b);
  let index = sorted.lastIndexOf(-1);
  result = arr.map(x=>{
    if (x !== -1) {
      index += 1;
      return sorted[index];
    }
    return x;
  })
  return result;
}

module.exports = {
  sortByHeight
};
