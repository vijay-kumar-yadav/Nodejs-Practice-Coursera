/**Write a program to calculate the total bill after discount. Accept as input the bill
amount and discount percentage. Validate the bill before calculating the discount.
Use a timer to calculate the discount after a delay, since the discount must be
calculated only after bill validation. Make the callback as an error first callback. */

const calculateTotalBillAmount = (error, billAmount, discountPercentage) => {
  if (error) {
    return console.log("Error encountered!");
  }
  setTimeout(() => {
    console.log(billAmount - billAmount * discountPercentage);
  }, 2000);
};

const validateBillAmount = (billAmount) => {
  if (billAmount <= 0) {
    console.log("Invalid bill amount");
  } else {
    console.log("Valid bill amount");
  }
};

var billAmount = process.argv[2];
var discountPercentage = process.argv[3];

// setTimeout(
//   calculateTotalBillAmount,
//   2000,
//   undefined,
//   billAmount,
//   discountPercentage
// );//Valid bill amount
//1480
setTimeout(
  calculateTotalBillAmount,
  2000,
  "error",
  billAmount,
  discountPercentage
);
//Valid bill amount
// Error encountered!

// calculateTotalBillAmount(billAmount, discountPercentage);
validateBillAmount(billAmount);
