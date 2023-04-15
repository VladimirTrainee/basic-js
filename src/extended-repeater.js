const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options ) {

   const {repeatTimes = 0 ,addition = '',separator = '+',additionRepeatTimes = 0,additionSeparator = '|'} = options;
  let base = addition;
  for (let i = 1; i< additionRepeatTimes; i++){
    base += additionSeparator + addition;
  }
  let result = str + base;
  for (let i = 1; i< repeatTimes; i++){
    result += separator + str + base;
  }
  
  return result;   
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
