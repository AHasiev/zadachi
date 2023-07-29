/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {{age: number, gender: string}[]} list
 * @returns {undefined|number}
 */

function census(list) {
    let maxAge = -1;
    let oldestMaleIndex = undefined;
  
    for (let i = 0; i < list.length; i++) {
      const { age, gender } = list[i];
  
      if (gender === 'Male' && age > maxAge) {
        maxAge = age;
        oldestMaleIndex = i;
      }
    }
  
    return oldestMaleIndex !== undefined ? oldestMaleIndex + 1 : undefined;
  }
  

module.exports = census;
