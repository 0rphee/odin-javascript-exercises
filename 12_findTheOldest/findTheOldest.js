function calcAge(birthDate, deathDate){
    return deathDate.getFullYear() - birthDate.getFullYear();
}

function calcAgeObj(obj){
    let death = new Date();
    if (obj.yearOfDeath){
        death = new Date(obj.yearOfDeath, 0); 
    } 
    return calcAge(new Date(obj.yearOfBirth, 0), death);
}

const findTheOldest = function(arr) {
    let bestObj;
    for (nextObj of arr){
         if (!bestObj){
             bestObj = nextObj;
         } else{
             const x = calcAgeObj(bestObj); 
             const y = calcAgeObj(nextObj); 
             bestObj = x > y ? bestObj : nextObj;
         }
    }
    return bestObj;
};

// Do not edit below this line
module.exports = findTheOldest;
