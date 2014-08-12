/**
 * hasVerticalScrollBar DDetect whether a DOM element has a visible vertical scrollbar.
 * @return {Boolean}
 */
Element.prototype.hasVerticalScrollBar = function() {
    return this ? this.scrollHeight > this.offsetHeight : false;
};
