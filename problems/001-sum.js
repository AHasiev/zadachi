/**
 * Напишите функцию sum(n) возвращающую положительное целое число – сумму чисел,
 * расположенных между 1 и N включительно.
 *
 * Пример:
 *
 * sum(0) === 1
 * sum(5) === 15
 *
 * Больше примеров в тестах
 *
 * @param {number} n целое число
 * @returns {number}
 */
function sum(n) {
    
    let sumNum = 0;

    if (n <= 0) {
        return 1
    }

    for (let i = 0; i <= n; i++) {
        sumNum += i
    }
    
    return sumNum;
    
}

module.exports = sum;
