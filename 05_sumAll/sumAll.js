const sumAll = function(x, y) {

let error = "ERROR"



// else if (typeof x === 'number' || typeof y === 'string') {

// return error;

// }

let biggerValue = Math.max(x, y);
let smallerValue = Math.min(x, y);
let sumOfAll = 0;

if (x < 0 || y < 0) {

    return error;
        
    }

else if ((typeof x === 'string') || (typeof y === 'string')) {

    return error;

}

else if ((typeof x === 'object') || (typeof y === 'object')) {

    return error;

}


for(i = smallerValue; i <= biggerValue; i++) {

    sumOfAll += i;

    }

return sumOfAll;

};

// Do not edit below this line
module.exports = sumAll;
