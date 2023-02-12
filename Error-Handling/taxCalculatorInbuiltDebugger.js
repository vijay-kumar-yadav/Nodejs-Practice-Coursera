const calculateTax = (category, price) => {
  var totprice = 0.0;
  if (category === "mobile") {
    totprice = 0.125 * price + price;
    console.log(`total price of the ${category} is : `, totprice);
  } else if (category === "books") {
    totprice = 0.025 * price + price;
    console.log(`total price of the ${category} is : `, totprice);
  } else if (category === "clothes") {
    totprice = 0.075 * price + price;
    console.log(`total price of the ${category} is : `, totprice);
  } else if (category === "electronics") {
    totprice = 0.125 * price + price;
    console.log(`total price of the ${category} is : `, totprice);
  } else {
    console.log("unlisted category");
  }

  //debugger;
  return totprice;
};

calculateTax("electronics", 1000);
