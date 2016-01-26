/**
 * Shuffle a given array (Fisher-Yates Shuffling Algorithm)
 * @param  {Array} arr
 * @return {Array}
 */
function shuffle(arr) {
    var i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
