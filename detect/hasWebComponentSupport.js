/**
 * hasWebcomponentSupport
 * Detect native Web Component support
 *
 * @return {Boolean} true or false
 */
function hasWebcomponentSupport() {
    if ('registerElement' in document &&
        'createShadowRoot' in HTMLElement.prototype &&
        'import' in document.createElement('link') &&
        'content' in document.createElement('template')) {

        // We're using a browser with native Web Component support.
        return true;
    }
    return false;
}
