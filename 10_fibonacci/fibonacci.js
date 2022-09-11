const fibonacci = function(num) {
    const fibSeries = [0, 1];

    if (num < 0) {
        return 'OOPS';
    }
    for (let i = fibSeries.length; i < num + 1; i ++) {
        let nextFibNum = (fibSeries[i - 1] + fibSeries[i - 2]);
        fibSeries.push(nextFibNum);
    }
    console.log(fibSeries);
    console.log(num);
    return fibSeries[num];
};

// Do not edit below this line
module.exports = fibonacci;
