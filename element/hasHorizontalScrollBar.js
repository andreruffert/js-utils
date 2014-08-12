/**
 * hasHorizontalScrollBar Detect whether a DOM element has a visible horizontal scrollbar.
 * @return {Boolean}
 */
Element.prototype.hasHorizontalScrollBar = function() {
    return this ? this.scrollWidth > this.offsetWidth : false;
};
