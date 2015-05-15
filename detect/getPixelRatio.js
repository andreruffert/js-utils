/**
 * Detect the device pixel ratio.
 *
 * @category Detect
 * @return {Number}
 * @example
 *
 * getPixelRatio();
 * // => 1
 */
function getPixelRatio() {
    return Math.floor(window.devicePixelRatio) || 1;
}

module.exports = getPixelRatio;
