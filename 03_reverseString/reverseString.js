const reverseString = function(strToReverse) {
    let reversedStr = "";
    for (let i = 1; i <= strToReverse.length; i++){
        reversedStr += strToReverse[strToReverse.length - i];
    }
    return reversedStr;
};

const ttry = reverseString("1234");
console.log(ttry);

// Do not edit below this line
module.exports = reverseString;
