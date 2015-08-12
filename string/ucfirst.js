/**
 * Capitalize the first letter of string
 *
 * @category String
 * @param {String} str
 * @return {String}
 * @example
 *
 * ucfirst('yo!');
 * // => "Yo!"
 */
function ucfirst(str) {
    return str.charAt(0).toUpperCase() + str.substr(1);
}
