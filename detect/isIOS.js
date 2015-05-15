/**
 * Detect if we have a iOS device.
 *
 * @category Detect
 * @return {Boolean} true or false
 * @example
 *
 * isIOS();
 * // => true|false
 */
function isIOS() {
    return /(iPad|iPhone|iPod touch)/i.test(navigator.userAgent);
}
