/**
 * Detect if we have a isFireFoxOSApp.
 *
 * @category Detect
 * @return {Boolean} true or false
 * @example
 *
 * isFireFoxOSApp();
 * // => true|false
 */
function isFireFoxOSApp() {
    return navigator.mozApps && !window.locationbar.visible;
}

module.exports = isFireFoxOSApp;
