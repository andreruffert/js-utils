/**
 * Convert a string into a URL slug by removing non-URL friendly
 * characters and replacing spaces with dashes.
 *
 * @category String
 * @param {String} str
 * @return {String} URL slug
 * @example
 *
 * slugify('My Title');
 * // => "my-title"
 */
function slugify(str) {
    str = (str || '')
    .toLowerCase()
    .replace(/[^\w ]+/g,'')
    .replace(/ +/g,'-');

  return str;
}

module.exports = slugify;
