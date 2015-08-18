/**
 * Detect localStorage support.
 *
 * @category Detect
 * @return {Boolean} true or false
 * @example
 *
 * hasLocalStorageSupport();
 * // => true|false
 */
function hasLocalStorageSupport() {
    var keyName = keyValue = 'js-utils';

    try {
        localStorage.setItem(keyName, keyValue);
        localStorage.removeItem(keyName);
      return true;
    } catch (e) {
        return false;
    }
}
