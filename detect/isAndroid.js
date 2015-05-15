/**
 * Detect if we have a Android device.
 *
 * @category Detect
 * @return {Boolean} true or false
 * @example
 *
 * isAndroid();
 * // => true|false
 */
function isAndroid() {
    return /Android/i.test(navigator.userAgent);
}

module.exports = isAndroid;
