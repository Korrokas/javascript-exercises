const removeFromArray = function(...args) {

    const newArray = args.shift();
    
    for (let i = newArray.length; i >= 0; i--) {
        for (let m = 0; m < args.length; m++) {
            if (newArray[i] === args[m]) {
                newArray.splice(i, 1);
            }
        }
    }

    console.log(newArray.length); //to see my output
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
