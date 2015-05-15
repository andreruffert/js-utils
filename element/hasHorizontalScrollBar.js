/**
 * Detect whether a DOM `element` has a visible horizontal scrollbar.
 *
 * @category Element
 * @param {Element} element
 * @return {Boolean} Returns `true` if `element` has a horizontal scrollbar, else `false`.
 * @example
 *
 * hasHorizontalScrollBar(document.querySelector('.element'));
 * // => true|false
 */
function hasHorizontalScrollBar(element) {
    return element ? element.scrollWidth > element.offsetWidth : false;
}

module.exports = hasHorizontalScrollBar;
