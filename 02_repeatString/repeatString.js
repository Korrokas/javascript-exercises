const repeatString = function(string, num) {
    if (num === 0) {
        return '';
    }
    else if (num < 1) {
        return "ERROR";
    }
    else {
        let result = '';
        for (i = 0; i < num; i++) {
            result += string;
        }
    
        return result;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
