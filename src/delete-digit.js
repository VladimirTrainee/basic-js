const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n);
  let val = 0;
  for (let i = 0; i < str.length; i++){
    const newstr = ((i > 0) ? str.substring(0, i):'') + str.substring(i+1, str.length);
    val = Math.max(val,Number(newstr));
  }      
  return val;   
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
