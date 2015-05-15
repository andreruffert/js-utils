/**
 * getUrlVars
 *
 * @category Url
 * @param {Object} options { query: 'foo=bar&fizz=buzz' }
 * @return {Object} A map of querystrings e.g. ?foo=bar&fizz=buzz returns x.foo = 'bar' and x.fizz = 'buzz'
 * @example
 *
 * getUrlVars({query: 'foo=bar&fizz=buzz'});
 * // => Object {foo: "bar", fizz: "buzz"}
 */
function getUrlVars(options) {
    var opts = options || {};
    var hashes = (opts.query || getCurrentQueryString()).split('&');
    var hashLength = hashes.length;

    return hashes.reduce(function(o, v, i) {
        v = v.split('=');
        o[v[0]] = v[1];
        return o;
    }, {});
}
