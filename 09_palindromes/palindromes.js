const palindromes = function (paraStr) {
    paraStr = paraStr.replace(/[!,. ]+/g, "").toLowerCase()
    return paraStr == paraStr.split("").reverse().join("")
};

// Do not edit below this line
module.exports = palindromes;
