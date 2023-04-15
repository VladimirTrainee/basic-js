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
function transform(arr ) {
  let newarr = [];
  let actions = [ '--discard-next','--discard-prev','--double-next','--double-prev'];
  let list = [];
  let value = null;
  let current = '';

  if (!Array.isArray(arr)) throw new Error('\'arr\' parameter must be an instance of the Array!');
  
  for (let node of arr){
    
    if (actions.indexOf(node) > -1) { list.push(node);}
    else {
      current = list.pop();
      if (current === undefined ) { value = node;}
      
      if (current === '--discard-prev') {
          if (value != null ) { newarr.pop();}
          value = null;
      }
      
      if (current === '--double-prev') {
          if (value != null)  { newarr.push(newarr[newarr.length - 1]);} 
      }          
      newarr.push(node);
      if (current === '--double-next')  { newarr.push(newarr[newarr.length - 1]); } 
      if (current === '--discard-next') { value = null;newarr.pop();}    
  
      
    }

  }

  return newarr;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
