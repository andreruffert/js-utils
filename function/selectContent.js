/**
 * Select all the content of an element.
 *
 * @category Function
 * @param {Element}
 * @example
 *
 * selectContent(document.querySelector('.element'));
 */
function selectContent(element) {
    var range = document.createRange();
    var selection = window.getSelection();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
}
