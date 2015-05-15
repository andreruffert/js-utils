/**
 * getUrlHash
 *
 * @category Url
 * @return {String} (no # symbol)
 * @example
 *
 * getUrlHash();
 * // => "string"
 */
function getUrlHash() {
    return location.hash.replace(/^#/, '') || false;
}

module.exports = getUrlHash;
