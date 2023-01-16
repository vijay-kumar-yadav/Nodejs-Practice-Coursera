const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// forEach ------------------>

// companies.forEach(function (company) {
//   console.log(company);
// });

// filter ------------------>
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter(function (age) {
//   return age >= 21;
// });
// console.log(canDrink);

// const retailCompanies = companies.filter(function (company) {
//   if (company.category === "Retail") return true;
// });
// console.log(retailCompanies);

// //80's companies
// const eightyCompanies = companies.filter(
//   (company) => company.start >= 1980 && company.start < 1990
// );
// lasted 10 years
// const lastedTenYears = companies.filter(
//   (company) => company.end - company.start >= 10
// );
// console.log(lastedTenYears);

// map  ------------------> create new arrays
//create array company names

// const companyName = companies.map((company) => company.name);
// console.log(companyName);

// const squareRoot = ages.map((age) => Math.sqrt(age).toFixed(2));
// console.log(squareRoot);

// sort ------------------>

// const sortedCompanies = companies.sort((companyA, companyB) => {
//   if (companyA.start > companyB.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
// const sortedCompanies = companies.sort((companyA, companyB) =>
//   companyA.start > companyB.start ? 1 : -1
// );
// console.log(sortedCompanies);

// const sortedAges = ages.sort((num1, num2) => num1 - num2);

// console.log(sortedAges);

// reduce ------------------>
// ages together
// let ageSum = 0;
// for (let i of ages) {
//   sum += i;
// }

const ageSum = ages.reduce(
  (previousVal, currentVal) => previousVal + currentVal,
  0
);

console.log(ageSum);

// combine methods -------------------------->

const combineMethod = ages
  .map((age) => age * 2)
  .filter((age) => age > 50)
  .reduce((previousAge, cuurentAge) => previousAge + cuurentAge, 0);
console.log(combineMethod);
