const lodash = require("lodash");

const nums = [1, 2, 3, 4, 2, 3, 4, 1];

let result = lodash.uniq(nums);

console.log(result);

const data = lodash.concat(nums, [7, 8]);
console.log(data);

lodash.fill(nums, 10);
console.log(nums);

lodash.fill(nums, "*", 1, 3);
console.log(nums);

var countries = [
  {
    key: "DE",
    name: "Deutschland",
  },
  {
    key: "SA",
    name: "South Africa",
  },
  {
    key: "IND",
    name: "India",
  },
  {
    key: "USA",
    name: "United States of America",
  },
];

var filterData = lodash.filter(countries, function (country) {
  return country.key == "IND";
});

console.log(filterData);
