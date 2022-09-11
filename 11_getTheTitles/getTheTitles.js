const getTheTitles = function(books) {

    const titlesArray = [];

    books.filter(books => titlesArray.push(books.title));
    return titlesArray;    
};

// Do not edit below this line
module.exports = getTheTitles;
