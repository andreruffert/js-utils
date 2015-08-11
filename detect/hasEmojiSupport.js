/**
 * Detects support for emoji character sets.
 *
 * Based on the Modernizr emoji detection.
 * https://github.com/Modernizr/Modernizr/blob/347ddb078116cee91b25b6e897e211b023f9dcb4/feature-detects/emoji.js
 *
 * @category Detect
 * @return {Boolean} true or false
 * @example
 *
 * hasEmojiSupport()
 * // => true|false
 */
function hasEmojiSupport() {
  var pixelRatio = window.devicePixelRatio || 1;
  var offset = 12 * pixelRatio;
  var node = document.createElement('canvas');

  // canvastext support
  if (!node.getContext ||
    !node.getContext('2d') ||
    typeof node.getContext('2d').fillText !== 'function') {
    return false;
  }

  var ctx = node.getContext('2d');

  ctx.fillStyle = '#f00';
  ctx.textBaseline = 'top';
  ctx.font = '32px Arial';
  ctx.fillText('\ud83d\udc28', 0, 0); // U+1F428 KOALA
  return ctx.getImageData(offset, offset, 1, 1).data[0] !== 0;
}
