/**
 * hasTouchScreen
 * @return {Boolean} true or false
 */
function hasTouchScreen() {
    return ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) ? !0 : !1;
}
