/**
 * Remove leading slashes from a given string
 *
 * @category String
 * @param  {String} str
 * @return {String}
 * * @example
 *
 * removeLeadingSlash('/some/path');
 * // => "some/path"
 */
function removeLeadingSlash(str) {
    return str.replace(/^\/+/g, '');
}
