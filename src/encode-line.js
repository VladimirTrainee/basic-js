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
function encodeLine(str ) {
  let newstr = '';
  let char = (str.length > 0) ? str[0] : '';
  let start = 0;
  let num = 0;

  for (let i=1; i < str.length; i++){
    if (char !== str[i]) {
      num = i - start; 
      newstr +=  ((num > 1) ? num : '')  + char;
      start = i;
      char = str[i];
    }
    if (i + 1 === str.length) {
      num = i - start + 1; 
      newstr +=  ((num > 1) ? num : '')  + char;
    }
  }
 
  return newstr;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
