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
  const arr = [];
  const num = [];
  let index = 0;
  let newname = '';
  for (let i = 0; i< names.length; i++){
    index = arr.indexOf(names[i]);
    if (index === -1 ) {
      arr.push(names[i]);
      num.push(1);
    } else {
      num[index] += 1;
    }
 
    newname = names[i];
    
    if (index > -1  && num[index] > 1) {
        newname += '(' + (num[index]  - 1) + ')';
        arr.push(newname);
        num.push(1);
    }
    const newindex = arr.indexOf(newname);
    if (index === -1 && newindex > -1 && newname != names[i]) {
      newname += '(1)';
    }
    names[i] = newname;
  
  }
  return names;
 
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  renameFiles
};
