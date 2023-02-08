const fs = require("fs");
const readLine = require("readline");
const lodash = require("lodash");
//import all the require module

//Write try and catch and handle the exceptions where ever require
//return the callback with appropriate values in the methods

//More userdefined methods can be written if required to write the logical stuff

////This method will read the file content the first parameter is filename and
//second is a callback
//create array name it as  fileContents
const readFileContents = (fileName, cb) => {
  //push row by row data in the array created
  try {
    const file = readLine.createInterface({
      input: fs.createReadStream(fileName),
    });

    let salesData = [];
    file.on("line", (line) => {
      const data = line.split(",");
      salesData.push({
        date: data[0],
        customer_id: data[1],
        product_category: data[2],
        payment_method: data[3],
        "value [USD]": data[4],
        "time_on_site [Minutes]": data[5],
        clicks_in_site: data[6],
      });
      // console.log(data);
    });
    file.on("close", () => {
      salesData.splice(0, 1);
      cb(null, salesData);
    });
  } catch (err) {
    cb(err, null);
  }
};
// Use Lodash to filter the data this method will take first parameter
//as fileContents and second parameter as a callback
const filterData = (fileContents, cb) => {
  let filteredData;
  filteredData = lodash.filter(
    fileContents,
    (data) => data.payment_method == "credit"
  );
  cb(null, filteredData);
};

//This method will writeFile data to output.txt file
//it is taking parameters are filteredData and a callback
//filteredata will be given by the filterData method
const writeFilteredDataToFile = (filteredData, cb) => {
  try {
    //use writeFile method and write the filteredData in output.txt file
    const writeStream = fs.createWriteStream("output.txt");
    writeStream.write(filterData.toString() + "\n");
    cb(null, "Successfully wrote filtered data to output.txt file..!");
  } catch (err) {
    cb(err, null);
  }
};

module.exports = {
  readFileContents,
  filterData,
  writeFilteredDataToFile,
};
