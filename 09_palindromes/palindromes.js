const palindromes = function (words) {
    const regEx = /\w/g;
    const regExWord = words.match(regEx).join('').toLowerCase();

    const palindromeWord = () => {
        const reverse = regExWord.split('').reverse().join('').toLowerCase();
        return reverse;
    }    
    
    return palindromeWord() === regExWord;
};

// Do not edit below this line
module.exports = palindromes;
