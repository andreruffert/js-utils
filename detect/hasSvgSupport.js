/**
 * Detect native SVG support.
 *
 * @category Detect
 * @return {Boolean} true or false
 * @example
 *
 * hasSvgSupport();
 * // => true|false
 */
function hasSvgSupport() {
    return !!document.createElementNS && !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;
}
