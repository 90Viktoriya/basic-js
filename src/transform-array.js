const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array))
  throw new Error("'arr' parameter must be an instance of the Array!");
  let newarr = arr.map((x)=>x);
  let delindex = 0;
  for (let index = 0; index < newarr.length; index += 1) {
    switch (newarr[index]){
      case '--discard-next': {
        if (index+1 < newarr.length){
          newarr.splice(index,2);
          delindex = index;
        }
        else
          newarr.splice(index,1);
          index -= 1;
      break;
      }
      case '--discard-prev': {
        if (index !== 0 && index !== delindex) 
          newarr.splice(index-1,2);
        else  
          newarr.splice(index,1);
        index -= 1; break;
      }
      case '--double-next': {
        if (index+1 < newarr.length)
          newarr.splice(index,1,newarr[index+1]);
        else 
        newarr.splice(index,1);
        break;
      }
      case '--double-prev': {
        if (index !== 0 && index !== delindex)
         newarr.splice(index,1,newarr[index-1]);
        else 
          newarr.splice(index,1);
      break;
      }
    }  
  }
  return newarr;
}

module.exports = {
  transform
};
