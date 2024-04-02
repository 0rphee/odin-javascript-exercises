const add = function(x, y) {
    return x + y;
};

const subtract = function(x, y) {
    return x - y;
};

const sum = function(arr) {
    return arr.reduce(
        (acum, next) => acum + next,
        0
    );
};

const multiply = function(arr) {
    return arr.reduce(
        (acum, next) => acum * next,
        1
    );
};

const power = function(x, y) {
    return x ** y;
};

const factorial = function(x) {
    if (x < 0) return "ERROR";

    let res = 1;
    for (let i = 2; i <= x; i++){
        res *= i;
    }
    return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
