/**
 * getAbsoluteUrl
 *
 * @category Url
 * @return {String} e.g. "https://example.com/path"
 * @example
 *
 * getAbsoluteUrl('path');
 * // => "https://example.com/path"
 */
 function getAbsoluteUrl(url) {
    var a;
    return (function(url) {
        if (!a) {
            a = document.createElement('a');
        }
 	    a.href = url;
        return a.href;
 	})(url);
 }
