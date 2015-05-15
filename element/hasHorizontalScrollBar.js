/**
 * Detect whether a DOM `element` has a visible horizontal scrollbar.
 *
 * @param  {Element}  element
 * @return {Boolean}
 */
function hasHorizontalScrollBar(element) {
    return element ? element.scrollWidth > element.offsetWidth : false;
}
