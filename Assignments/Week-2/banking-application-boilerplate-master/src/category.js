var category = function category(key) {
  let keypair = {
    pl: "Personal Loan",
    Vl: "Vehicle Loan",
    EL: "Education Loan",
    hL: "Home Loan",
  };
  // Write the Logic here

  return keypair[key];
};

module.exports = {
  category: category,
};
