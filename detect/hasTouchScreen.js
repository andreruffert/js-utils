/**
 * Detect if the device has a Touchscreen.
 *
 * @category Detect
 * @return {Boolean} true or false
 * @example
 *
 * hasTouchScreen();
 * // => true|false
 */
function hasTouchScreen() {
    return ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) ? !0 : !1;
}

module.exports = hasTouchScreen;
