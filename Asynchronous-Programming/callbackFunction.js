console.log("Multiply");

const multiply = (num1, num2, callback) => {
  setTimeout(() => {
    let product = num1 * num2;
    // callback(undefined, product);
    callback("Error in code : ", undefined);
  }, 2000);
};
//error first callback
multiply(4, 50, (error, result) => {
  if (error) {
    return console.log(error);
  }
  console.log("This product is : ", result);
});
console.log("End of Program");
