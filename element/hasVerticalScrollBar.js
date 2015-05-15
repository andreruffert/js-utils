/**
 * Detect whether a DOM `element` has a visible vertical scrollbar.
 *
 * @category Element
 * @param {Element} element
 * @return {Boolean} Returns `true` if `element` has a vertical scrollbar, else `false`.
 * @example
 *
 * hasVerticalScrollBar(document.querySelector('.element'));
 * // => true|false
 */
function hasVerticalScrollBar(element) {
    return element ? element.scrollHeight > element.offsetHeight : false;
}

module.exports = hasVerticalScrollBar;
