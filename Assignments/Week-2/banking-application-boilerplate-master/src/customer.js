var customerList = [];

const addCustomer = (
  CustomerId,
  CustomerName,
  CustomerAge,
  CustomerAddress,
  CustomerContactNumber,
  Category
) => {
  // Write the Logic here
  if (!customerList.find((customer) => customer[0] === CustomerId))
    customerList.push([
      CustomerId,
      CustomerName,
      CustomerAge,
      CustomerAddress,
      CustomerContactNumber,
      Category,
    ]);
};

const updateCustomer = (
  CustomerId,
  CustomerName,
  CustomerAge,
  CustomerAddress,
  CustomerContactNumber,
  Category
) => {
  // Write the Logic here
  customerList.forEach((customer) => {
    if (customer[0] === CustomerId) {
      (customer[1] = CustomerName),
        (customer[2] = CustomerAge),
        (customer[3] = CustomerAddress),
        (customer[4] = CustomerContactNumber),
        (customer[5] = Category);
    }
  });
};

const getAllCustomers = () => {
  // Write the Logic here
  return customerList;
};

module.exports = { addCustomer, updateCustomer, getAllCustomers };
