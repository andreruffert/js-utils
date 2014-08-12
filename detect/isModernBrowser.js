/**
 * isModernBrowser
 * Simple feature detection to identify HTML5 Browsers [gt ie9]
 * @return {Boolean} true or false
 */
function isModernBrowser() {
    if ('querySelector' in document &&
        'localStorage' in window &&
        //'matchMedia' in window &&
        'addEventListener' in window) {

        return true;
    }
    return false;
}
