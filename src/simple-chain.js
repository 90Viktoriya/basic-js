const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  lenght: 0,
  chain: [],
  getLength() {
    return this.lenght;
  },
  
  addLink(value) {
    this.chain.push(value);
    this.lenght += 1;
    return this;
  },
  removeLink(position) {
    try {let test = this.chain[position-1]}
    catch {
      this.lenght = 0;
      this.chain.splice(0,Infinity);
      throw new Error('You can\'t remove incorrect link!');
    }
    if (typeof(this.chain[position-1]) === 'undefined'){
      this.lenght = 0;
      this.chain.splice(0,Infinity);
      throw new Error('You can\'t remove incorrect link!');
    } else {
      this.chain.splice(position-1,1);
      this.lenght -= 1;
      return this;}
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result='';
    if (this.lenght > 0) {
      result = '( ';
      this.chain.forEach(element => {
        result += element +' )~~( ';
      });
      this.chain.splice(0,Infinity);
      this.lenght = 0;
      return result.substring(0,result.length-4);
    }
    return '';
  }
};

module.exports = {
  chainMaker
};
