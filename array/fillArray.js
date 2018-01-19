/**
 * Create and fill an array
 *
 * @category Array
 * @param {Number}   Length of the Array
 * @param {Function} Map function to call on every element of the array
 * @return {Array}
 * @example
 *
 * fillArray(5, (x, i) => i);
 * // => [0, 1, 2, 3, 4]
 */

const fillArray = (arrayLength, mapFn) => Array.from(new Array(arrayLength), mapFn);
