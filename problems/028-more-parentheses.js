/**
 * Ранее мы уже решали задачу валидации последовательности скобок в строке.
 *
 * На этот раз напишите функцию parentheses(value) валидирующую строку с несколькими типами скобок.
 *
 * Пример:
 *
 * parentheses('<>') === true
 * parentheses('<}') === false
 *
 * @param {string} value – строка из набора символов (, ), {, }, <, >.
 * @returns {boolean}
 */
// function parentheses(value) {
//     const stack = [];

//     if (!value) return false;
//     for (let i = 0; i < value.length; i++) {
//         const last = stack[stack.length - 1];
//         const item = value[i];
//         if (
//             (last === "(" && item === ")") ||
//             (last === "{" && item === "}") ||
//             (last === "<" && item === ">")
//         ) {
//             stack.pop();
//         } else {
//             stack.push(item);
//         }
//     }

//     return stack.length === 0;
// }

function parentheses(braces) {
    if (braces.length == 0) return false;
    while (
        braces.indexOf("{}") != -1 ||
        braces.indexOf("()") != -1 ||
        braces.indexOf("<>") != -1 
    ) {
        braces = braces.replace("{}", "").replace("()", "").replace("<>", "");
        
    }
    return braces.length === 0;
}
  

module.exports = parentheses;
