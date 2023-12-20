const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (reverse = true){
    this.reverse = reverse;
  }

  encrypt(str, key) {
    if (typeof(str) === 'undefined' || typeof(key) === 'undefined')
      throw new Error('Incorrect arguments!');
    let result = '';
    let index = 0;
    str = str.toUpperCase();
    key = key.toUpperCase();
    
    for (let i = 0; i < str.length; i += 1)
    {
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        code = code + key.charCodeAt(index)-65;
        if (code > 90) code = code - 90 + 64;
        index += 1;
        if (index === key.length)
          index = 0;
      }
      result += String.fromCharCode(code);
    }
    if (this.reverse)
      return result;
    else
      return result.split('').reverse().join('');
  }
  decrypt(str, key) {
    if (typeof(str) === 'undefined' || typeof(key) === 'undefined')
    throw new Error('Incorrect arguments!');
    let result = '';
    let index = 0;
    str = str.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0; i < str.length; i += 1)
    {
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        code = code - key.charCodeAt(index) + 65;
      if (code < 65) code = code - 64 +90;
        index += 1;
        if (index === key.length)
          index = 0;
      }
      result += String.fromCharCode(code);
    }
    if (this.reverse)
      return result;
    else
      return result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
