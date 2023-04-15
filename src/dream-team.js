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
function createDreamTeam(members ) {
  let team = '';
  if (!arguments || !Array.isArray(members)) return false;
  for (let member of members){
     if (typeof member === 'string'){
      let value = member.toString().trimStart()
      team += (value && value.length > 0) ? value[0].toUpperCase() : '';
     }
  }
  return team.split('').sort().join('');
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
