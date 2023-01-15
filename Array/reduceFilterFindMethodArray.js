// # Perform Complex Array Operations
// #28 Problem Statement
// For the given array of product with prices, write the Javascript function to Filter out the premium products.
// Products with price above 300, are marked as Premium Products.
// Apply a 15% discount on all the non-premium products.
// Create a stock of each product type.

let products = [
  ["Gucci Round Bucklet Belt", 400],
  ["Gucci Round Bucklet Belt", 450],
  ["Esbeda Wallet", 250],
  ["Gucci Round Bucklet Belt", 360],
  ["Smiley T-Shirt", 500],
  ["Smiley T-Shirt", 50],
  ["smiley T-shirt", 250],
  ["shinie Nail Paint", 100],
];

// filter premium product
const premiumProducts = products.filter((product) => product[1] > 300);

// console.log(premiumProducts);

// Apply 15% discount non-premium product
const filteredProducts = products.filter((product) => product[1] <= 300);

const nonPremiumProducts = filteredProducts.map((product) => [
  product[0],
  (product[1] * 15) / 100,
]);
// console.log(nonPremiumProducts);

// create a stock of each product

const productStock = products.reduce((stocks, product) => {
  // console.log(stocks);
  // console.log(product, " --->");
  let stockItem = stocks.find((stock) => stock[0] === product[0]);

  if (!stockItem) {
    stocks.push([product[0], 1]);
  } else {
    ++stockItem[1];
  }
  return stocks;
}, []);

// console.log(productStock);
