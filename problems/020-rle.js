/**
 * Напишите функцию rle(value) реализующую алгоритм сжатия строки.
 *
 * Пример:
 *
 * rle('AAABC') === '3ABC'
 * rle('AAAaaB') === '3A2aB'
 *
 * @param {string} value
 * @returns {string}
 */
function rle(value) {
    
    let empty = ''
    let count = 1;
    
    for (let i = 0; i < value.length; i++) {
     if(value[i] === value[i + 1]) {
         count += 1
     } else {
         empty += count > 1 ? count + value[i] : value[i]
         count = 1
     }
     
    }
    return empty
}

module.exports = rle;
