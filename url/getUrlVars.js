/**
 * getUrlVars
 * @param  {Object} options
 * @return {Object} a map of querystrings e.g. ?foo=bar&fizz=buzz returns x.foo = 'bar' and x.fizz = 'buzz'
 */
function getUrlVars(options) {
    var opts = options || {},
        vars = {},
        hash,
        hashes = (opts.query || getCurrentQueryString()).split('&'),
        hashLength = hashes.length;
    for (var i = 0; i < hashLength; i++) {
        hash = hashes[i].split('=');
        vars[hash[0]] = hash[1];
    }
    return vars;
}
