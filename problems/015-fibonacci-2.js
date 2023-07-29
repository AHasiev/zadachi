/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */



function isFibonacci(value) {

  if(value === 0) return 0
  if(value === 1) return 1
  if(value === 2) return 3

  let arr = [0, 1]

  for (let i = 2; i <= value+1; i++) {
    arr.push(arr[i - 1] + arr[i - 2])
    if(arr.includes(value)) {
        return i
    }
  }
  return undefined
}


module.exports = isFibonacci;
