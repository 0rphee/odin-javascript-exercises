const removeFromArray = function(originalArr, ...restArgs) {
    let newArr = originalArr.slice(0);
    for (const arg of restArgs){
        newArr = newArr.filter((val) => val !== arg );
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
