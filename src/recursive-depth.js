const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    let maxdepth = 1;
    arr.forEach(element => {
      depth = 1;
      if (element instanceof Array) {
        depth += this.calculateDepth(element);
      }
      if (depth > maxdepth) maxdepth = depth;
    });
    return maxdepth;
  }
}
module.exports = {
  DepthCalculator
};
