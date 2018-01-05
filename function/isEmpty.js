/**
 * Works across strings, arrays & objects.
 *
 * @category Function
 * @example
 *
 * isEmpty(null);        // => true
 *
 * isEmpty('');          // => true
 * isEmpty('helloha');   // => false
 *
 * isEmpty([]);          // => true
 * isEmpty([1, 2, 3]);   // => false
 *
 * isEmpty({});          // => true
 * isEmpty({ 'a': 1 });  // => false
 */

const isEmpty = (obj = {}) => obj ? !Object.keys(obj).length : true;
