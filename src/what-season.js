const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  if (arguments && arguments.length !== 0) { 
    try{
      date.valueOf();
      if (date instanceof Date) {
        const sdate = date.toString();
        if (!(date instanceof Date)) throw new Error('Invalid date!');
        const seasons = [{season:'winter', months:['Dec','Jan','Feb']},
                         {season:'spring', months:['Mar','Apr','May']},
                         {season:'summer', months:['Jun','Jul','Aug']},
                         {season:'autumn', months:['Sep','Oct','Nov']}];
        for (let seasonObj of seasons){
          const {season, months} = seasonObj;
          for (let month of months) {
            if (sdate !== sdate.replace(month, '')) return season;
          }
        } 
      } else { throw new Error('Invalid date!');}
    }
    catch { throw new Error('Invalid date!');}
  }
  return 'Unable to determine the time of year!'
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
