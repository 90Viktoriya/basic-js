const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  
  if (!options.separator)
    options.separator = '+';
 
  if (!options.additionSeparator)
    options.additionSeparator = '|';

  let addstr = '';
  if (typeof(options.addition) !== 'undefined') {
    addstr = String(options.addition);
    for (let i = 1; i < options.additionRepeatTimes; i += 1)
    {
      addstr += options.additionSeparator + String(options.addition);
    }
  }

  let result = String(str) + addstr;
  for (let i = 1; i < options.repeatTimes; i += 1)
  {
    result += options.separator + str + addstr;
  }
  return result;
}

module.exports = {
  repeater
};
