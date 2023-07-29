/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */

//  * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
//  * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
//  * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
//  *
//  * @param {string[]} points
//  * @returns {(number|undefined)}
//  */

function getWinner(points) {
    let arr = [];
    let strArr = [];
    
    for (let i = 0; i < points.length; i++) {
        let result = points[i].split("-")
        arr.push(result)
    }
    
    for (let i = 0; i < arr.length; i++) {
        strArr = strArr.concat(arr[i]);
    }
    
    
    let numArr = strArr.map((item) => +item )
    
    let left = 0;
    let right = 1;
    let leftSum = 0;
    let rightSum = 0;
    
    while (right < numArr.length) {
        rightSum = rightSum + numArr[right]
        right = right + 2
        leftSum = leftSum + numArr[left]
        left = left + 2
    }
    
    if (leftSum > rightSum) {
        return 1 
    } else if (rightSum > leftSum){
        return 2
    } else {
        return undefined
    }
    
}




module.exports = getWinner;
