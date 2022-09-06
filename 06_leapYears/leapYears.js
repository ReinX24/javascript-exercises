const leapYears = function(num) {

let leapChecked;

    if (((num % 4 == 0) && (num % 100 !== 0)) || (num % 400 == 0)) {

        leapChecked = true;
    
    }
    
    else {
    
        leapChecked = false;
    
    }
    
return leapChecked;

};

// Do not edit below this line
module.exports = leapYears;
