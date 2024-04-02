const leapYears = function(year) {
    // if they are divisible by 4, LEAP 
    if (year % 4 === 0){
        // if they are divisible by 100 they are NOT
        if (year % 100 === 0 ){
            // but if they are by 100 & 400 LEAP
            if (year % 400 === 0) return true;
            else return false;
        } else return true;
    } else return false;
};

// Do not edit below this line
module.exports = leapYears;
