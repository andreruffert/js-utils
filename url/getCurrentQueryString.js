/**
 * getCurrentQueryString
 * @return {String} e.g. "foo=bar&fizz=buzz" (no ? symbol)
 */
function getCurrentQueryString() {
    return window.location.search.replace(/^\?/, '');
}
