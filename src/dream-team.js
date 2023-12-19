const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members instanceof Array) {
  members = members.map(function (el, i) {
    if (typeof(el) === 'string') {
      let newel = el.trim();
      return newel.toLowerCase()
    } else return el;
   });
  members.sort();

  let result = '';
  members.forEach(element => {
    if (typeof(element) === 'string')

      result += element[0].toUpperCase();
  })
  return(result);
} return false;
}
module.exports = {
  createDreamTeam
};
