/**
 * isString
 *
 * @param  {Object}  obj
 * @return {Boolean}     Returns true if object is a String.
 */
function isString(obj) {
    return typeof obj === 'string' || obj instanceof String;
}
