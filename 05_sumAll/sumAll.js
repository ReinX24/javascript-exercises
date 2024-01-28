const sumAll = function (numOne, numTwo) {
    let sumResult = 0
    if (numOne < 0 || numTwo < 0) return "ERROR"
    if (!Number.isInteger(numOne) || !Number.isInteger(numTwo)) return "ERROR"

    if (numOne > numTwo) {
        const temp = numOne
        numOne = numTwo
        numTwo = temp
    }

    for (i = numOne; i <= numTwo; i++) {
        sumResult += i
    }
    return sumResult
};

// Do not edit below this line
module.exports = sumAll;
