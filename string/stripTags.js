/**
 * Strip HTML Tags
 *
 * @category String
 * @param {String} str
 * @return {String}
 * @example
 *
 * stripTags('<div class="element">Text</div>');
 * // => "Text"
 */
function stripTags(str) {
    return str.replace(/<[^>]+>/ig, '');

    // different approach (browser only)
    //var div = document.createElement('div');
    //div.innerHTML = str;
    //return div.textContent;
}
