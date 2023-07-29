/**
 * Лена планирует свой двухнедельный отпуск.
 *
 * Напишите функцию vacation(date) вычисляющую день следующий за отпуском Лены
 *
 * Примечание: вместо ручного подсчета используй класс Date и его методы
 *
 * Пример:
 *
 * vacation('01.01.2020') === '15.01.2020'
 * vacation('27.01.2020') === '10.02.2020'
 *
 * @param {string} date
 * @returns {string}
 */


function vacation(date) {
    // Разделяем строку даты по точкам
    const dateParts = date.split('.');
  
    // Создаем объект Date, используя указанные части даты (месяцы в объекте Date начинаются с 0, поэтому вычитаем 1 из месяца)
    const dateDate = new Date(parseInt(dateParts[2]), parseInt(dateParts[1]) - 1, parseInt(dateParts[0]));
    
    // Добавляем две недели (14 дней) к дате
    dateDate.setDate(dateDate.getDate() + 14);
  
  
    // Возвращаем новую дату в формате "дд.мм.гггг"
    return `${dateDate.getDate().toString().padStart(2, '0')}.${(dateDate.getMonth() + 1).toString().padStart(2, '0')}.${dateDate.getFullYear()}`;
  }

module.exports = vacation;
