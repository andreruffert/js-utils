/**
 * Extend a given object with all the properties in passed-in object(s).
 *
 * @category Object
 * @param {Object} obj
 * @return {Object}
 * @example
 *
 * extend({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
 * // => { 'user': 'fred', 'age': 40 }
 */
function extend(obj) {
    var i, l, prop, source;
    for (i = 1, l = arguments.length; i < l; ++i) {
        source = arguments[i];
        for (prop in source) {
            if (hasOwnProperty.call(source, prop)) {
                obj[prop] = source[prop];
            }
        }
    }
    return obj;
}

module.exports = extend;
