const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  names.forEach ((element,index) => {
    let count = 0;
    while (names.indexOf(element) < index  && names.indexOf(element) >= 0)
    {
      if (count === 0) {
        element += '(1)';
        count += 1;
      } else {
        let str = `${count}\\)$`;
        let regex = new RegExp(str);
        element = element.replace(regex, `${count+1}\)`);
        count += 1;
      }
    } 
    names[index] = element;
  })
  return names;
}

module.exports = {
  renameFiles
};
