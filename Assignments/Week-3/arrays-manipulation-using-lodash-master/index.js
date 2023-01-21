const System = require("./src/System");
const lodash = require("./src/LodashExample");
const SimpleCalculator = require("./src/SimpleCalculator");

// SYSTEM
console.log(System.getOSName());
console.log(System.getFreeMemory());
console.log(System.getCurrentUser());
console.log(System.getHostName());
console.log(System.getCPUDetails());

// LODASH

console.log(lodash.findMaxValue([2, 123, 31, 21, 31231, 0, 312]));
console.log(lodash.filterValues([1, 70, 10, 30], 10));
console.log(lodash.nameInCapital(["vijay", "aj", "ratan"]));

// simple calculator
console.log(SimpleCalculator.addNumbers(19, 2));
console.log(SimpleCalculator.subNumbers(3, 4));
console.log(SimpleCalculator.mulNumbers(21, 31));
console.log(SimpleCalculator.divNumbers(10, 0));
