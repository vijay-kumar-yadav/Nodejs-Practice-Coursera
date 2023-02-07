/**
 * Write a program to calculate the total bill after discount. Accept as input the bill
 * amount and discount percentage. Validate the bill before calculating the discount.
 * using async and await
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

const totalBillAmount = async (billAmount, discountPercentage) => {
  const amount = await validateBillAmount(billAmount);
  const total = await calculateTotalBillAmount(amount, discountPercentage);
  return total;
};
var billAmount = process.argv[2];
var discountPercentage = process.argv[3];

totalBillAmount(billAmount, discountPercentage)
  .then((result) => {
    console.log("Discounted bill price is: ", result);
  })
  .catch((error) => console.log(error));
