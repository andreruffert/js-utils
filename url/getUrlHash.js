/**
 * getUrlHash
 * @return {String} (no # symbol)
 */
function getUrlHash() {
    return location.hash.replace(/^#/, '') || false;
}
