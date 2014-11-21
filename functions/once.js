/**
 * A wrapper for a function which you only want to run once.
 *
 * @param  {Function} fn
 * @param  {[type]}   context
 * @return {[type]}
 *
 * @usage
 *
 * var execOnce = once(function() {
 *    console.log('executed!');
 * });
 *
 * execOnce(); // "executed!"
 * execOnce(); // nothing
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
