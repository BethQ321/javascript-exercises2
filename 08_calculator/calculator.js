//sum of two numbers
const add = function(a, b) {
	return a + b;
};

//difference of two numbers
const subtract = function(a, b) {
	return a - b
};

//sum of the contents of an array
const sum = function(arr) {
	const sumOfArr = arr.reduce((total, num) => {
    return total += num;
  }, 0);
  return sumOfArr;
};

//multiply the contents of an array
const multiply = function(arr) {
  const prodOfArr = arr.reduce((total, num) => {
    return total *= num;
  }, 1);
  return prodOfArr;
};

//takes in two numbers, raises the first number to the power of the second number
const power = function(a, b) {
	return a**b;
};

//calculates the factorial of a single number
const factorial = function(num) {
  let total = 1;
	for(let i=num; i > 0; i--) {
    total = total*i;
  }
  return total;
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
