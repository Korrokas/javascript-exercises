const ftoc = function(num) {
  const celsius = (num - 32) * (5/9);
  return parseFloat(celsius.toFixed(1));
};

const ctof = function(num) {
  const fahrenheit = (num * (9/5)) + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
