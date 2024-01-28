const leapYears = function (yearNum) {
    return yearNum % 4 == 0 && (yearNum % 100 != 0 || yearNum % 400 == 0)
};

// Do not edit below this line
module.exports = leapYears;
