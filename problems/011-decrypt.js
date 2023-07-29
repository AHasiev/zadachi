/**
 * Самый простой способ зашифровать строку – сдвиг букв.
 * Под сдвигом понимается замена буквы на предыдущую в алфавите.
 * Если предыдущей буквы нет, она заменяется на последнюю букву алфавита (в этой задаче мы имеем дело с английским алфавитом).
 *
 * Вам прислали секретное сообщение, зашифрованное способом, описанным выше и состоящее из строчных английских букв.
 *
 * Напишите функцию decrypt(secret) которая расшифрует и вернет его.
 *
 * Пример:
 *
 * decrypt('bnqqdbs') === 'correct'
 * decrypt('zmc vd hfmnqd rozbdr') === 'and we ignore spaces'
 *
 * @param {string} secret
 * @returns {string}
 */
function decrypt(secret) { 
    //Алфавит
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//Куда складываем пременные
let result = '';

//Цикл
for (let i = 0; i < secret.length; i++) {
    //Нашли индекс каждого заданного элемента
    const item = secret[i];
    //Условие для найденных пробелов
    if (item === ' ') {
        //Сложили в переменную
        result += item
        //Иначе
    }else {
        //Находим индекс буквы по алфавиту
    let itemIndex = alphabet.indexOf(item) + 1
    //пишем условие для 26 буквы
    if(itemIndex === 26) itemIndex = 0
    //Добавляем в перменную из алфавита буквы под расшифрованными индексами
    result += alphabet[itemIndex]
        }
    }
   return result
}



module.exports = decrypt;
