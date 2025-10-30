const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const digits = String(n).split('').map(Number);
  let max = 0;
  for (let idx = 0; idx < digits.length; idx += 1) {
    let res = Number(
      digits
        .slice(0, idx)
        .concat(digits.slice(idx + 1, digits.length))
        .join('')
    );
    max = Math.max(max, res);
  }
  return max;
}

module.exports = {
  deleteDigit,
};
