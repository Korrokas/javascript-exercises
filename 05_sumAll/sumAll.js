const sumAll = function(a, b) {
    
    const values = [];
    let sum = 0;
    let start = Math.min(a, b);
    const end = Math.max(a, b);

    if (a < 0 || b < 0) {
        return "ERROR";
    }
    else if (typeof(a) != "number" || typeof(b) != "number") {
        return "ERROR";
    }
    else {
        while (start <= end) {
            values.push(start);
            start++;
        }
    
        for (let i = 0; i < values.length; i++) {
            sum += values[i];
        }
        return sum;
    }

};

// Do not edit below this line
module.exports = sumAll;
