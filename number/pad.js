/**
 * Pad a number with leading zeroes so the resulting string is "length" length.
 * If length is 2 and the passed in number is 5 the value returned is 05.
 *
 * @category Number
 * @param {Number} number
 * @param {Number} length
 * @return {String}
 * @example
 *
 * pad(1, 5);
 * // => 00001
 */
function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}
