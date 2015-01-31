/**
 * Get the number of days in a month
 *
 * @param  {Integer} y year
 * @param  {Integer} m month
 * @return {Integer}   days
 *
 * @usage  daysInMonth(2015, 2); //28
 */
function daysInMonth(y, m) {
    return (new Date(y, m, 0)).getDate();
}
