let product = {
  productId : "24392",
  costPrice : 100,
  profitPercentage : 15,
  sellingPrice : 0
}
function calculateSellingPrice(product){
  let sellingPrice = product.costPrice + (product.profitPercentage  * product.costPrice / 100);
  product.sellingPrice = sellingPrice;
}

calculateSellingPrice(product);
console.log(product)