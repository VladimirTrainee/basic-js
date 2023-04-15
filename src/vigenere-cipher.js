const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true){
    this.type = type;
  }
  encrypt(text, word) {
    if (!text || !word || !arguments) throw Error('Incorrect arguments!');
    if (this.type === false) {
      text = String(text.split('').reverse().join(''));
    }
    //throw new NotImplementedError('Not implemented');
   // if (!text || !word || !arguments) throw Error('Incorrect arguments!');
    const n = 26;
    const start = String('A').charCodeAt(0);
    text = String(text).toUpperCase();
    word = String(word).toUpperCase();
    let result = '';

    let index = -1;
    for (let i = 0; i < text.length; i++){
      if (text[i] >= 'A' && text[i] <= 'Z') {
        index++;
        index = index % word.length;
        const textCode = String(text[i]).charCodeAt(0);
        const wordCode = String(word[index]).charCodeAt(0);
        const newCode = (textCode + wordCode - 2 * start) % n + start;
        result += String.fromCharCode(newCode);
      } else result += text[i]; 

    }
    return result;
    // remove line with error and write your code here
  }
  decrypt(text, word) {
    if (!text || !word || !arguments) throw Error('Incorrect arguments!');
    if (this.type === false) {
      text = text.split('').reverse().join('');
    }
  //  if (!text || !word || !arguments) throw Error('Incorrect arguments!');
    // if (!text || !word || arguments.length == 0) throw new NotImplementedError('error');
    const n = 26;
    const start = String('A').charCodeAt(0);
    text = String(text).toUpperCase();
    word = String(word).toUpperCase();
    
    let result = '';
    let index = -1;
    for (let i = 0; i < text.length; i++){
      if (text[i] >= 'A' && text[i] <= 'Z') {
        index++;
        index = index % word.length;
        const textCode = String(text[i]).charCodeAt(0);
        const wordCode = String(word[index]).charCodeAt(0);
        const newCode = (textCode - (wordCode - 2 *start) ) % n + start;
        result += String.fromCharCode(newCode);
      } else result += text[i]; 
      
    }
    
    return result;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
