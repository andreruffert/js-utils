/**
 * getCurrentQueryString
 *
 * @category Url
 * @return {String} e.g. "foo=bar&fizz=buzz" (no ? symbol)
 * @example
 *
 * getCurrentQueryString();
 * // => "foo=bar&fizz=buzz"
 */
function getCurrentQueryString() {
    return window.location.search.replace(/^\?/, '');
}

module.exports = getCurrentQueryString;
