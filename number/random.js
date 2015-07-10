/**
 * Returns a random value between `min` and `max`
 * @param {Number} min
 * @param {NUmber} max
 * @param {Boolean} integer
 * @return {Number}
 * @example
 *
 * rand(2,5); // float random between 2 and 5 inclusive
 * rand(1,100,true); // integer random between 1 and 100
 */
function random(min, max, integer) {
    var r = Math.random() * (max - min) + min;
    return integer ? r|0 : r;
}
