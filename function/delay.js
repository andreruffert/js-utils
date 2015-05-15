/**
 * Delays a function for the given number of milliseconds,
 * and then calls it with the arguments supplied.
 *
 * @category Function
 * @param {Function} fn
 * @param {Nmber} wait
 * @example
 *
 * delay(function() {
 *     console.log('msg');
 * }, 1000);
 * // => logs 'msg' after one second
 */
function delay(fn, wait) {
    var args = Array.prototype.slice.call(arguments, 2);
    return setTimeout(function() {
        return fn.apply(null, args);
    }, wait);
}
