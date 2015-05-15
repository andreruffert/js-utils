/**
 * Select all the content of an element.
 *
 * @param  {NODE}
 */
function selectContent(el) {
    var range = document.createRange();
    var selection = window.getSelection();
    range.selectNodeContents(el);
    selection.removeAllRanges();
    selection.addRange(range);
}
