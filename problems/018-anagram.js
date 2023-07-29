/**
 * Слова-анаграммы — это слова, записанные одними и теми же буквами в разном порядке,
 * регистр букв при этом игнорируется.
 * Анаграммами, например, являются слова «Волос» и «СЛОВО».
 *
 * Напишите функцию anagram(x, y) проверяющую, являются ли x и y словами-анаграммами.
 *
 * Пример:
 *
 * anagram('Волос', 'Слово') === true
 * anagram('Живу', 'Вижу') === true
 *
 * @param {string} x
 * @param {string} y
 * @returns {boolean}
 */

function anagram(x, y) {

     if(x.length !== y.length || (x && y) === "" ) {
        return false
     }

     const x1 = x.toLowerCase().split('').sort().join('');

     const y2 = y.toLowerCase().split('').sort().join('');

     return x1 === y2;
      
}

module.exports = anagram;
