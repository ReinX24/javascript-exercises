const removeFromArray = function (paraArr, ...args) {
    const newArray = []
    paraArr.forEach((element) => {
        // Check if the current element is within args
        if (!args.includes(element)) {
            newArray.push(element)
        }
    })
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
