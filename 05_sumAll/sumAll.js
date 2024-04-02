const sumAll = function(x, y) {
    // error if any is negative
    if ( x < 0 || y < 0) return "ERROR";

    // error if any parameter is non-number
    if ( typeof x !== "number" || typeof y !== "number" ) return "ERROR";

    // in case the arguments are reversed, with this, the previous code still works
    let initialNum = x;
    let finalNum = y;
    if (initialNum > finalNum){
        const tmp = initialNum;
        initialNum = finalNum;
        finalNum = tmp;
    }

    // actual computing of the sum
    let sum = 0;
    for (let i = initialNum; i <= finalNum; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
