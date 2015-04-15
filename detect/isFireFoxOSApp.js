/**
 * isFireFoxOSApp
 * @return {Boolean} true or false
 */
function isFireFoxOSApp() {
    return navigator.mozApps && !window.locationbar.visible;
}
