const lodash = require("lodash");
//import the lodash module

//Create a function to find a maximum value from number array.
function findMaxValue(arr) {
  return lodash.max(arr);
}

//Create a function to return all values from numbers array
//which are greater than the second parameter.​
function filterValues(arr, n) {
  return lodash.filter(arr, (val) => val > n);
}

//Create a function to return all values of employeeName array in capital letters.

function nameInCapital(arr) {
  return lodash.map(arr, (val) => val.toUpperCase());
}

module.exports = {
  findMaxValue,
  filterValues,
  nameInCapital,
};
