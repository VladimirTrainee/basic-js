const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr:[],
  getLength:function() {
      
    return this.arr.length;

   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink: function ( value ) {
   // if (this.finish === true) this.arr.splice(0);
    if (value == null) value = 'null';
   
   // if (this.arr === null) this.arr = new Array();
    this.arr.push(value);
    return this;
   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink: function( position ) {
      if (typeof position != 'number' || (position < 1) || (position > this.arr.length )) {
        this.arr.splice(0);
        throw new Error('You can\'t remove incorrect link!');

      }
      this.arr.splice(position - 1, 1);
      return this;
  
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain: function () {
  //  if (this.finish === true) this.arr.splice(0);
      this.arr.reverse();
      return this;
   
   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain: function() {
    let text = (this.arr.length > 0)? '( ' + this.arr[0] : '';
    for (let i = 1; i < this.arr.length; i++){
      text += ' )~~( ' + this.arr[i];
    }
    text += ' )';
    
    this.arr.splice(0);
    return text;
   
   // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
