const {
  readFileContents,
  filterData,
  writeFilteredDataToFile,
} = require("./src/SalesAnalyzer");

let fileContents;
readFileContents("./resources/Sales.csv", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    fileContents = data;
  }
});
let filteredData;
filterData(fileContents, (err, filtered) => {
  if (err) {
    console.log(err);
  } else {
    console.log(filtered);
    filteredData = filtered;
  }
});

writeFilteredDataToFile(filteredData, (err, successMsg) => {
  if (err) {
    console.log(err);
  } else {
    console.log(successMsg);
  }
});
