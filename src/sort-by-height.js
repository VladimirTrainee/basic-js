const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const tmp = [];
  for (let a of arr) {
    if (a !== -1) {
      tmp.push(a);
    }
  }
  tmp.sort((a,b) => a-b);
  
  for(let i=arr.length -1 ;i>=0;i--) {
    if (arr[i] !== -1) {
      arr[i] = tmp.pop();
    }  
  }
  return arr;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
