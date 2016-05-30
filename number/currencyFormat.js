/**
 * Convert a number into currency format
 * @param  {Number} amount
 * @param  {String} options.thousand
 * @param  {String} options.decimal
 * @param  {Number} options.fractions
 * @return {String}
 */
function currencyFormat(amount, {thousand = ',', decimal = '.', fractions = 2} = {}) {
    const delimiter = {thousand, decimal};
    return amount
        .toFixed(fractions)
        .replace('.', delimiter.decimal)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${delimiter.thousand}`);
}
