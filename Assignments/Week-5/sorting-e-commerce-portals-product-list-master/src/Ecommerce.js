const fs = require("fs");
const lodash = require("lodash");
const readLine = require("readline");
//import all the require modules

//write try catch to hanlde the exceptions

//More userdefined methods can be written if required to write the logical stuff

//return the callback with appropriate data where ever require in all the methods

//This method will read the file it takes two parameters first the fileName
//and second the callback
const readFileContents = (fileName, cb) => {
  let fileContents = [];
  if (!fs.existsSync(fileName)) {
    cb("Encountered error while reading file contents..!");
    return;
  }
  const readFile = fs.createReadStream(fileName);

  const file = readLine.createInterface({
    input: readFile,
  });
  file.on("line", (line) => {
    data = line.split(",");
    fileContents.push({
      pid: data[0],
      product_name: data[1],
      brand: data[2],
      product_url: data[3],
      retail_price: data[4],
      product_rating: data[5],
    });
  });
  file.on("close", () => {
    fileContents.splice(0, 1);
    cb(null, fileContents);
  });
};

//This method will sortDataonprice it will take two parameters one is fileContent
//second the callback
const sortDataOnPrice = (fileContents, cb) => {
  //use lodash.sortBy()
  let sortedContent;
  sortedContent = lodash.sortBy(fileContents, (data) =>
    parseInt(data.retail_price)
  );
  cb(null, sortedContent);
};

//This method will sortDataonRating
const sortDataOnRating = (fileContents, cb) => {
  //use map where ever required
  fileContents = fileContents.filter(
    (data) => data.product_rating !== "No rating available"
  );
  let sortedContent;
  sortedContent = lodash.sortBy(fileContents, (data) =>
    parseInt(data.product_rating)
  );
  //use lodash sortBy() and compact() if required

  //use lodash.reverse() if required
  cb(null, lodash.reverse(sortedContent));
};

//This method will write the sortedData in the output file
const writeSortedDataToFile = (outputFileName, sortedData, cb) => {};

module.exports = {
  readFileContents,
  sortDataOnPrice,
  sortDataOnRating,
};
