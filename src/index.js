module.exports = function reverse (number) {
    return String(Math.abs(number)).split("").reverse().join("");
}