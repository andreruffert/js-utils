/**
 * A wrapper for a function which you only want to run once.
 *
 * @category Function
 * @param {Function} fn
 * @param {[type]} context
 * @return {[type]}
 * @example
 *
 * var execOnce = once(function() {
 *     console.log('executed!');
 * });
 *
 * execOnce();
 * // => logs "executed!"
 *
 * execOnce();
 * // => logs nothing
 */
function once(fn, context) {
    var result;

    return function() {
        if (fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }

        return result;
    };
}

module.exports = once;
