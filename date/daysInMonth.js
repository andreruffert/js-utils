/**
 * Get the number of days in a month
 *
 * @category Date
 * @param {Integer} year The year
 * @param {Integer} month The month
 * @return {Integer} Returns the number of days in the given month
 * @example
 *
 * daysInMonth(2015, 2);
 * // => 28
 */
function daysInMonth(year, month) {
    return (new Date(year, month, 0)).getDate();
}

module.exports = daysInMonth;
