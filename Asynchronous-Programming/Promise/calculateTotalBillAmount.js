/**
 * Write a program to calculate the total bill after discount. Accept as input the bill
 * amount and discount percentage. Validate the bill before calculating the discount.
 * Use Promises to achieve asynchronous programming.
 */

const calculateTotalBillAmount = (billAmount, discountPercentage) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (discountPercentage <= 0) reject("Invalid discount percentage");
      resolve(billAmount - billAmount * discountPercentage);
    }, 2000);
  });
};

const validateBillAmount = (billAmount) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (billAmount <= 0) {
        reject("Invalid bill amount");
      }
      resolve(billAmount);
    }, 2000);
  });
};

var billAmount = process.argv[2];
var discountPercentage = process.argv[3];

// calculateTotalBillAmount(billAmount, discountPercentage).then(
//   (result) => {
//     console.log("The Discounted bill is - ", result);
//   },
//   (error) => {
//     console.log(error);
//   }
// );
validateBillAmount(billAmount)
  .then((amount) => {
    return calculateTotalBillAmount(amount, discountPercentage);
  })
  .then((result) => {
    console.log("Discounted bill price is: ", result);
  })
  .catch((error) => console.log(error));
