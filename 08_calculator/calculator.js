const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(...args) {
  const numbers = Array.from(...args);

  let sum = 0;
  numbers.forEach(number => sum += number);
 
  return sum;
};

const multiply = function(...args) {
  const numbers = Array.from(...args);

  let product = 1;
  numbers.forEach(number => product *= number);

  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if (a === 0) {
    return 1;
  }
  for (let i = a - 1; i > 0; i--) {
    a *= i;
  }
  return a;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
