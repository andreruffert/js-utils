/**
 * Converts a NodeList to Array
 *
 * @param  {NodeList} nodeList e.g. document.querySelectorAll('div')
 * @return {Array}
 */
function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
}
