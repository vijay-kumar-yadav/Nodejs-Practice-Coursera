const utils = require("./utils");

var myStringArray = ["ratan", "ram", "mohit", "vishwakarma", "RonnY"];

function getCapital(myStringArray) {
  return utils.getInUpperCase(myStringArray);
}

console.log(getCapital(myStringArray));

function getLower(myStringArray) {
  return utils.getInLowerCase(myStringArray);
}
console.log(getLower(myStringArray));
/*
Output:
[ 'RATAN', 'RAM', 'MOHIT', 'VISHWAKARMA', 'RONNT' ]
[ 'ratan', 'ram', 'mohit', 'vishwakarma', 'ronnt' ] 
*/
