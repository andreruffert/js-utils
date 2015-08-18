/**
 * Returns the closest number out of an array
 *
 * @category Array
 * @param {Array} arr
 * @param {Number} number
 * @return {Number}
 * @example
 *
 * getClosestNumber([10, 20, 30], 12);
 * // => 10
 */
function getClosestNumber(arr, number) {
   return arr.reduce(function (prev, curr) {
     return (Math.abs(curr - number) < Math.abs(prev - number) ? curr : prev);
   });
}
