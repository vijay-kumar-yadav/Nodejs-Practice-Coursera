const path = require("path");

console.log(path.dirname("../Array/object.js"));
console.log(path.extname("../Array/object.js"));
console.log(path.isAbsolute("../Array/object.js"));
console.log(
  path.isAbsolute(
    "/D:collegeOneDrive - Lovely Professional University/YEAR-3/sem-6/INT222/Nodejs-Practice-Coursera/Array/object.js"
  )
);
console.log(path.parse("../Array/object.js"));
/*
outpur :-
../Array
.js
false
true
{
  root: '',
  dir: '../Array',
  base: 'object.js',
  ext: '.js',
  name: 'object'
}
*/
