/**
 * Одной банки с краской хватает на покраску 16 квадратных метров стен офиса.
 *
 * Напишите функцию repair(width, length, height) вычисляющую минимальное количество банок краски,
 * необходимых для покраски стен в офисе. Размерами дверей и окон можно пренебречь.
 *
 * Пример:
 *
 * repair(1, 1, 3) === 1
 * repair(4, 4, 3) === 3
 * repair(4, 4, 4) === 4
 *
 * @param {number} width – ширина офиса
 * @param {number} length - длина офиса
 * @param {number} height - высота стен в офисе
 * @returns {number}
 */
function repair(width, length, height) {
    // Рассчитываем общую площадь стен в офисе
    const totalArea = 2 * height * (width + length);
  
    // Рассчитываем количество банок краски
    const paintCans = Math.ceil(totalArea / 16);
  
    return paintCans;
  }

//   function repair(width, length, height) {
    
//     let sum = ((width + length + height) * 4) / 16
//     return Math.ceil(sum) 
// }

// console.log(repair(1, 1, 3))

module.exports = repair;
