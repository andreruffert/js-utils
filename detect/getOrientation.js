/**
 * getOrientation
 * @return {String} portrait or landscape
 */
function getOrientation() {
    var orientation = ['portrait', 'landscape'];
    if(typeof window.orientation !== 'undefined') {
        return (window.orientation === 0) ? orientation[0] : orientation[1];
    }

    return (window.innerHeight > window.innerWidth) ? orientation[0] : orientation[1];
}
