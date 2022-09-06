const sumAll = function(x, y) {

let error = "ERROR"

let biggerValue = Math.max(x, y); // returns largest number within parameters, parameters could be interchangeable in terms of places
let smallerValue = Math.min(x, y); // returns smallest number within the parameters, parameters could be interchangeable in terms of places
let sumOfAll = 0;

if (x < 0 || y < 0) { // checks if one of the parameters is less than zero or a negative number

    return error;
        
    }

else if ((typeof x === 'string') || (typeof y === 'string')) { // checks if a parameter is a string

    return error;

}

else if ((typeof x === 'object') || (typeof y === 'object')) { // checks if a parameter is an object (an array is a special kind of object)

    return error;

}


for(i = smallerValue; i <= biggerValue; i++) { // loop that adds all numbers in all iterations between the two parameters

    sumOfAll += i;

    }

return sumOfAll;

};

// Do not edit below this line
module.exports = sumAll;
