const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  email = email.split('@');
  if ((email.length > 1)) {
    email = email[1];
  } else if (email.length > 0 ){
    email = email[0];
  } else { email = '';}
  return email.replace('.un', '');
 // email = email.split('@');
  // return (email.length > 1)? email[1] : '';
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getEmailDomain
};
