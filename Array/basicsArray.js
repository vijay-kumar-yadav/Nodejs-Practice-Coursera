// //creating array
// let x = new Array(1, 2, 3, 4, 5);
// let a = [1, 2, 3, 4, 5];

// // printing array
// console.log(x);
// console.log(a);

// operations on array

// // deletion  ------------------->

// //from last/end
// let a = [1, 2, 3, 4, 5];
// console.log(a.pop()) //returns deleted element
// console.log(a); //1,2,3,4

// // from beginning
// let a = [1, 2, 3, 4, 5];
// console.log(a.shift()); // returns deleted elements
// console.log(a); //2,3,4

// insertion  ------------------->

// // at end
// let a = [1, 2, 3, 4, 5];
// a.push(6);
// console.log(a); //1,2,3,4,5,6

// // at beginning
// a.unshift(0);
// console.log(a); //0,1,2,3,4,5,6

// insertion and deletion using splice method ------------------->

// splice operator
// argumeents splice(<beginning element>, <number of elements>,<elements to be added can be spread using spread operator>)

// // insertion
// let a = [1, 5, 6, 7];
// console.log(a.splice(1, 0, 2, 3, 4)); //returns an array to be deleted
// console.log(a);

// // deletion
// let a = [1, 2, 3, 4, 5];
// console.log(a.splice(3, 2));
// console.log(a);

// // deletion and insertion
// let a = [1, 2, 3, 4, 5];
// console.log(a.splice(3, 2, 4, 5));
// console.log(a);

// Searching in array ------------------->

// //using indexof(<element to be searched>, <from which index to searched>) => returns the first occurence index
// let a = [1, 2, 3, 4, 5, 2, 7];
// console.log(a.indexOf(2));
// console.log(a.indexOf(2, 3));

// // using find() found ??????????
// let a = [1, 2, 3, 4, 5, 2, 7, { a: 1, b: 2, c: 3 }];
// console.log(a.find((num, index) => (num === 1 ? index : false)));

// traversal -------------------------->
// // using forEach
// let a = [1, 2, 3, 4, 5, 6, 7];
// a.forEach((num, index, arr) =>
//   console.log("val = ", num, " index - ", index, " : ", arr)
// );

// reduction / creating subsets
// //using reduce ??????????????
// let a = [1, 2, 3, 4, 5, 6];
// console.log(
//   a.reduce((previousVal, currentVal, currentIndex, a) => {
//     previousVal !== currentVal;
//   })
// );
