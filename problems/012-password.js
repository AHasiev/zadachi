/**
 * Пароль называется криптостойким,
 * если он включает в себя хотя бы одну строчную английскую букву,
 * хотя бы одну заглавную английскую букву и хотя бы одну цифру,
 * при этом его длина должна быть не менее 7 символов.
 *
 * Напишите функцию validatePassword(password) определяющую,
 * является ли переданный пароль криптостойким.
 *
 * Пример:
 *
 * validatePassword('abc4DEFG') === true
 * validatePassword('abcdefg') === false
 * validatePassword('abcdefG') === false
 * validatePassword('abcdef7') === false
 *
 * @param {string} password
 * @returns {boolean}
 */
function validatePassword(password) {
    
    let alphabet = ['abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '0123456789']
    
    let lowerCase = false;
    let upperCase = false;
    let isNum = false;
    
    if (password.length < 7) {
        return false
    }
    
    for (let i = 0; i < password.length; i++) {
        let item = password[i]
        if (alphabet[0].indexOf(item) !== -1) {
            lowerCase = true
        } 
        if (alphabet[1].indexOf(item) !== -1) {
            upperCase = true
        }
        if (alphabet[2].indexOf(item) !== -1) {
            isNum = true
        }
    }
    
    return lowerCase && upperCase && isNum

    }

module.exports = validatePassword;
