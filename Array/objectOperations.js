let products = [
  { productName: "Gucci Round Bucklet Belt", price: 400 },
  { productName: "Gucci Round Bucklet Belt", price: 450 },
  { productName: "Esbeda Wallet", price: 250 },
  { productName: "Gucci Round Bucklet Belt", price: 360 },
  { productName: "Smiley T-Shirt", price: 500 },
  { productName: "Smiley T-Shirt", price: 50 },
  { productName: "smiley T-shirt", price: 250 },
  { productName: "shinie Nail Paint", price: 100 },
];

let premiumProducts = products
  .filter((product) => product.price > 300)
  .map((product) => {
    return {
      productName: product.productName.toUpperCase(),
      price: product.price,
    };
  })
  .reduce((stocks, currentProduct) => {
    let stockItem = stocks.find(
      (product) => product.productName === currentProduct.productName
    );
    if (!stockItem) {
      stocks.push({
        productName: currentProduct.productName,
        stock: 1,
      });
    } else {
      ++stockItem.stock;
    }
    return stocks;
  }, []);

console.log(premiumProducts);
