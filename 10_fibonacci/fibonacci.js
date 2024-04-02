const fibonacci = function(fibIndex) {
    if (fibIndex < 0) return "OOPS";
    if (fibIndex == 0) return 0;

    let x = 1;
    let y = 1;
    for (let i = 0; i < fibIndex - 2; i++){
        const temp = x + y;
        x = y;
        y = temp;
    }
    return y;
};

// Do not edit below this line
module.exports = fibonacci;
