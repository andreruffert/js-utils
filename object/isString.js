/**
 * isString
 *
 * @category Object
 * @param {Object} obj
 * @return {Boolean} Returns `true` if object is a String, else `false`.
 * @example
 *
 * isString(obj);
 * // => true|false
 */
function isString(obj) {
    return typeof obj === 'string' || obj instanceof String;
}

module.exports = isString;
