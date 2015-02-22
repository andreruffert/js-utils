/**
 * Strip HTML Tags
 * @param  {String} str
 * @return {String}
 */
function stripTags(str) {
    return str.replace(/<[^>]+>/ig, '');
}
