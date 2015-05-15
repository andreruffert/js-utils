/**
 * Converts a NodeList to Array
 *
 * @category Array
 * @param {NodeList} NodeList e.g. document.querySelectorAll('div')
 * @return {Array} Returns a new array of `NodeList` items.
 * @example
 *
 * toArray(document.querySelectorAll('div'));
 * // => [div, div, …]
 */
function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
}

module.exports = toArray;
