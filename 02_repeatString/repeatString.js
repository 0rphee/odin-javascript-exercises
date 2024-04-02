const repeatString = function (strToRepeat, nTimes) {
    if (nTimes < 0) return "ERROR";
    let newStr = "";
    for (let i = 0; i < nTimes; i++){
        newStr += strToRepeat;
    }
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
