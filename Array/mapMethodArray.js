let cars = [
  ["Baleno", 3500],
  ["Tata", 2000],
  ["Ferrari", 3000],
  ["Mercedes", 5000],
];

// //using for loop
// const calculateDiscountedPrice = (discount) => {
//   for (let i = 0; i < cars.length; i++) {
//     cars[i][1] -= (cars[i][1] * discount) / 100;
//   }
// };

// using map method returns new array
const calculateDiscountedPrice = (discount) =>
  cars.map((product, index) => [
    product[0],
    product[1] - (product[1] * discount) / 100,
  ]);
let discountCars = calculateDiscountedPrice(20);

console.log(cars);
console.log(discountCars);
