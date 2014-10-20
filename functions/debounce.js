/**
 * Returns a debounced function that will make sure the given
 * function is not triggered too much.
 *
 * @param  {Function} fn                Function to debounce.
 * @param  {Number}   debounceDuration  OPTIONAL. The amount of time in milliseconds for which we will debounce the function. (defaults to 100ms)
 * @return {Function}
 */
function debounce(fn, debounceDuration) {
    debounceDuration = debounceDuration || 100;
    return function() {
        if (!fn.debouncing) {
            var args = Array.prototype.slice.apply(arguments);
            fn.lastReturnVal = fn.apply(window, args);
            fn.debouncing = true;
        }
        clearTimeout(fn.debounceTimeout);
        fn.debounceTimeout = setTimeout(function(){
            fn.debouncing = false;
        }, debounceDuration);

        return fn.lastReturnVal;
    };
};
