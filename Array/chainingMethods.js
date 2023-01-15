// # Chaining filter(), map(), reduce()
// #44 Problem Statement
// For the given array of product with product type and their prices write the
// JavaScript function to filter out the non-premium products.
// Non Premium products are products priced less than 300.
// Convert all Non-Premium Product Types to Upper Case.
// Calculate stock of each Non-Premium product type.

let products = [
  ["Gucci Round Bucklet Belt", 400],
  ["Gucci Round Bucklet Belt", 450],
  ["Gucci Round Bucklet Belt", 300],
  ["Esbeda Wallet", 250],
  ["Gucci Round Bucklet Belt", 360],
  ["Smiley T-Shirt", 500],
  ["Smiley T-Shirt", 50],
  ["smiley T-shirt", 250],
  ["shinie Nail Paint", 100],
];

const stockedProducts = products
  .filter((product) => product[1] <= 300)
  .map((product) => [product[0].toUpperCase(), product[1]])
  .reduce((stocks, product) => {
    let stockItem = stocks.find((stock) => stock[0] === product[0]);
    // console.log(stockItem);
    if (!stockItem) {
      stocks.push([product[0], 1]);
    } else {
      ++stockItem[1];
    }
    return stocks;
  }, []);

console.log(stockedProducts);
