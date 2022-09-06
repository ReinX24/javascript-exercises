const removeFromArray = function(...args) { // ...args takes all arguments inserted

const array = args[0]; // takes first array
const newArray = []; // makes a new array

array.forEach((item) => { // passes each element in the array to item

    if (!args.includes(item)){ // scans if item in array is similar to an element that is outside of the array in ...args
    
    newArray.push(item); // if the item does not match with any of the of the outside elements of ...args, it is pushed into the new array

    console.log(newArray);

    }

}
)

return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
