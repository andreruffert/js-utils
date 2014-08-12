/**
 * delay Delays a function for the given number of milliseconds, and then calls it with the arguments supplied.
 * @param  {Function} fn
 * @param  {Nmber}   wait
 */
function delay(fn, wait) {
    var args = Array.prototype.slice.call(arguments, 2);
    return setTimeout(function(){ return fn.apply(null, args); }, wait);
}
