/**
 * Detect whether a DOM `element` has a visible vertical scrollbar.
 *
 * @param  {Element}  element
 * @return {Boolean}
 */
function hasVerticalScrollBar(element) {
    return element ? element.scrollHeight > element.offsetHeight : false;
}
