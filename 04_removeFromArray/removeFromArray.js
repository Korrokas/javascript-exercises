const removeFromArray = function(...args) {

    //take first array argument and assign to a variable
    const arg1 = args.shift();

    //iterate over array argument and match it against the other arguments
    for (let i = 0; i < arg1.length; i++) {
        for (let m = 0; m <= args.length; m++) {
            if (arg1[i] === args[m]) {
                arg1.splice(i, args.length);
            }
        }
    }
    
    return arg1;
};

// Do not edit below this line
module.exports = removeFromArray;
