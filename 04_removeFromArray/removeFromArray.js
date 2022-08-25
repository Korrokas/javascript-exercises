const removeFromArray = function(...args) {

    //create an empty array to push correct values to
    const newArray = [];

    //take first array argument and assign to a variable
    const arg1 = arguments[0];

    //create a variable for the last argument position
    const arg2 = args[arguments.length - 1];
    
    //iterate over array argument and match it against the other arguments
    for (let i = 0; i < arg1.length; i++) {
        if (arg1[i] != arg2) {
            //send values not removed into new array
            newArray.push(arg1[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
