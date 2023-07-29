/**
 * Петя опубликовал картинку X секунд назад.
 *
 * Напишите функцию timeago(seconds) возвращаю текстовое представление периода прошедшего со времени публикации.
 * Для публикаций опубликованных более четырёх недель назад возвращайте строку 'undefined', ведь их никто не увидит.
 *
 * Пример:
 *
 * timeago(0) === 'just now'
 * timeago(10) === '10 seconds ago'
 * timeago(60) === '1 minute ago'
 * timeago(3600) === '1 hour ago'
 *
 * @param {number} seconds
 * @returns {string}
 */
function timeago(seconds) {
    if (seconds < 10) {
        return `just now`;
    }

    if (seconds < 60) {
        return Math.floor(seconds / 10) * 10 + " " + "seconds ago";
    }

    if (seconds <= 1800) {
        return (
            Math.floor(seconds / 60) +
            " " +
            `${seconds === 60 || seconds < 120 ? "minute ago" : "minutes ago"}`
        );
    }

    if (seconds < 3600) {
        return `30 minutes ago`;
    }

    if (seconds < 43200) {
        return (
            Math.floor(seconds / 3600) +
            " " +
            `${seconds === 3600 || seconds < 7200 ? "hour ago" : "hours ago"}`
        );
    }

    if (seconds < 86400) {
        return "12 hours ago";
    }

    if (seconds < 172800) {
        return Math.floor(seconds / 86400) + " " + "day ago";
    }

    if (seconds < 604800) {
        return "a few days ago";
    }

    if (seconds < 2419200) {
        return (
            Math.floor(seconds / 604800) +
            " " +
            `${
                seconds === 604800 || seconds < 1209600
                    ? "week ago"
                    : "weeks ago"
            }`
        );
    } else {
        return "undefined";
    }
}

module.exports = timeago;
