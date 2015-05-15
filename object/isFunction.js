/**
 * isFunction
 *
 * @category Object
 * @param  {Object}  obj
 * @return {Boolean} Returns `true` if object is a Function, else `false`.
 * @example
 *
 * isFunction(obj);
 * // => true|false
 */
function isFunction(obj) {
    return typeof obj === 'function';
}

module.exports = isFunction;
