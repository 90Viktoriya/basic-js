const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  if (str === '') return '';
  let char = str[0];
  let count = 1;
  let result = '';
  for (let i = 1; i < str.length; i++)
  {
    if (str[i] === char) {
      count += 1;
    } else {
      if (count > 1) 
        result += count + char;
      else
        result += char;
      count = 1;
      char = str[i];
    }
  }
  if (count > 1) 
    result += count + char;
  else
    result += char;
  return result;
}

module.exports = {
  encodeLine
};
