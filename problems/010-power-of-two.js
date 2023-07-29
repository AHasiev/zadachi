/**
 * Напишите функцию getPower(n) возвращающую целочисленное значение степени >= 0,
 * в которую нужно возвести двойку, чтобы получить n
 *
 * Пример:
 *
 * getPower(2) === 1            # 2^1 = 2
 * getPower(3) === undefined
 * getPower(256) === 8          # 2^8 = 256
 *
 * @param {number} n
 * @returns {number|undefined}
 */
function getPower(n) {
    let result = 0;

    if (n === 1) {
        return 0; // 2^0 = 1
    }

    for (let i = 2; i <= n; i *= 2) {
        result++;
        if(i === n) {
            return result
        }
    }
    return undefined;
}

module.exports = getPower;
