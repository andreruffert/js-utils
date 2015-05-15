/**
 * Check if a `element` is visible in the DOM.
 * (https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent)
 *
 * @category Element
 * @param {Element} element
 * @return {Boolean} Returns `true` if `element` is hidden, else `false`.
 * @example
 *
 * isHidden(document.querySelector('.element'));
 * // => true|false
 */
function isHidden(element) {
    return (element && element.offsetParent === null);
}

module.exports = isHidden;
