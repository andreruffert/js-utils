/**
 * hasSvgSupport
 *
 * @return {Boolean} true or false
 */
function hasSvgSupport() {
    return !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
}
