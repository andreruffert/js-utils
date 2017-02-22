/**
 * Strip HTML Entities
 *
 * @category String
 * @param {String} str
 * @return {String}
 * @example
 *
 * stripEntities('&nbsp;Text');
 * // => "Text"
 */
function stripEntities(str) {
    return str.replace(/&[^\s]*;/ig, '');
}
