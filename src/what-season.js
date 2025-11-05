const { NotImplementedError } = require('../lib');

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
function getSeason(date) {
  if (arguments.length === 0) return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length)
    throw new Error('Invalid date!');
  try {
    date.getTime();
  } catch {
    throw new Error('Invalid date!');
  }
  const m = date.getMonth();
  return m === 11 || m <= 1
    ? 'winter'
    : m <= 4
    ? 'spring'
    : m <= 7
    ? 'summer'
    : 'autumn';
}

module.exports = {
  getSeason,
};
