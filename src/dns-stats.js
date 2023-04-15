const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [];
  let num = [];
  for (let i=0; i< domains.length;i++){
    let nodes = String(domains[i]).split('.');
    let node = '';

    for(let j = nodes.length -1; j >= 0; j--){
      node += '.' + nodes[j];
      const index = arr.indexOf(node);
      if (index > -1) {
        num[index]++;
      } else {
        arr.push(node);
        num.push(1);
      }     

    }
    
  }          
  return arr.reduce((obj,name,ind) => {return {...obj, [name]:num[ind]}},{}); 
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
