const add = function(a,b) { 
    return a+b;
};

const subtract = function(a,b) {
    return a-b;
};

const sum = function(arr) { 
  return arr.reduce((a,b)=> a+b,0);
};

const multiply = function(arr) {
  let product = 1; 
  for (let i=0; i<arr.length; i++) {
    product*= arr[i];
  }
  return product;
};

const power = function(a,b) {
	return (Math.pow(a,b));
};

const factorial = function(num) {
  let sum = 1;
	for (let i = 1; i <num+1; i++) {
    sum *= i
}
return sum;
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
