/**
 * Simple feature detection to identify HTML5 Browsers ([gt ie9]).
 *
 * @category Detect
 * @return {Boolean} true or false
 * @example
 *
 * isModernBrowser();
 * // => true|false
 */
function isModernBrowser() {
    if ('querySelector' in document &&
        'localStorage' in window &&
        'addEventListener' in window) {

        return true;
    }
    return false;
}

module.exports = isModernBrowser;
