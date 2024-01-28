const add = function (numOne, numTwo) {
  return numOne + numTwo
};

const subtract = function (numOne, numTwo) {
  return numOne - numTwo
};

const sum = function (numArr) {
  let sumResult = 0
  numArr.forEach((eachNum) => {
    sumResult += eachNum
  })
  return sumResult
};

const multiply = function (numArr) {
  let multiplyResult = 1
  numArr.forEach((eachNum) => {
    multiplyResult *= eachNum
  })
  return multiplyResult
};

const power = function (baseNum, powerNum) {
  return baseNum ** powerNum
};

const factorial = function (paraNum) {
  let factorialResult = 1
  for (let i = 1; i <= paraNum; i++) {
    factorialResult *= i
  }
  return factorialResult
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
