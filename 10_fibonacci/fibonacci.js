const fibonacci = function (fiboNum) {

    fiboNum = Number(fiboNum)

    if (fiboNum == 0) return 0
    if (fiboNum < 0) return "OOPS"

    let numOne = 1
    let numTwo = 0

    for (let i = 2; i <= fiboNum; i++) {
        let current = numOne + numTwo
        numTwo = numOne
        numOne = current
    }
    return numOne
};

// Do not edit below this line
module.exports = fibonacci;
