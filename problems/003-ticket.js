/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    
    let leftStr = number.substring(0, number.length -3)
    let rightStr = number.substring(number.length - 3)


let leftArr = leftStr.split('');
let rightArr = rightStr.split('');

let sumRightArr = rightArr.reduce(function(acc, value) {
	return acc + Number(value);
}, 0);

let sumLeftArr = leftArr.reduce(function(acc, value) {
	return acc + Number(value);
}, 0);

let comparison = (sumLeftArr === sumRightArr) ? true : false;
return comparison

}

module.exports = checkTicket;
