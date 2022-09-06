const reverseString = function(string) {

let splitString = string.split(""); //makes string into an array
let reverseArray = splitString.reverse(); //reverses array
let joinArray = reverseArray.join(""); //joins the reversed array 

return joinArray; //returns reversed string

};

// Do not edit below this line
module.exports = reverseString;
