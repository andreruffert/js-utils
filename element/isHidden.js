/**
 * Check if a `element` is visible in the DOM
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent
 *
 * @param  {Element}  element
 * @return {Boolean}
 */
function isHidden(element) {
    return (element && element.offsetParent === null);
}
