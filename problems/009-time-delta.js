/**
 * Напишите функцию getTimeDelta(x, y) определяющую,
 * сколько секунд прошло между двумя моментами времени x и y.
 *
 * Время передается в формате 'HH:MM:SS'. Минимальное значение – '00:00:00', максимальное – '23:59:59'.
 *
 * По условию x всегда меньше y.
 *
 * Пример:
 *
 * getTimeDelta('00:00:00', '00:00:01') === 1
 * getTimeDelta('01:01:01', '02:02:02') === 3661
 * getTimeDelta('01:19:30', '01:20:20') === 50
 *
 * @param {string} x
 * @param {string} y
 * @returns {number} разница между x и y в секундах
 */

   function getTimeDelta(x, y) {
    // Разбираем строки на часы, минуты и секунды
    const [xHours, xMinutes, xSeconds] = x.split(":").map(Number);
    const [yHours, yMinutes, ySeconds] = y.split(":").map(Number);

    // Переводим часы и минуты в секунды
    const xTotalSeconds = xHours * 3600 + xMinutes * 60 + xSeconds;
    const yTotalSeconds = yHours * 3600 + yMinutes * 60 + ySeconds;

    // Вычисляем разницу между временами
    const timeDelta = yTotalSeconds - xTotalSeconds;

    return timeDelta;

  }

  

module.exports = getTimeDelta;
