//import all the modules require
const fs = require("fs");
const readline = require("readline");
const lodash = require("lodash");
//Use try and catch to handle the error where ever required
//return the callback with appropriate data where ever require in all the methods

//More userdefined methods can be written if required to write the logical stuff

//This method will take two parameters first the fileName
//and second a callback
//read file data line by line using readLine
//create array and push all data inside the array

const readFileContentsLineByLine = (fileName, cb) => {
  let fileContents = [];
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream(fileName),
      output: process.stdout,
      terminal: false,
    });
    rl.on("line", (line) => {
      const data = line.split(",");
      fileContents.push({
        age: data[0],
        sex: data[1],
        bmi: data[2],
        children: data[3],
        smoker: data[4],
        region: data[5],
        charges: data[6],
      });
    });
    rl.on("close", () => {
      cb(null, fileContents);
    });
  } catch (err) {
    cb(err, null);
  }
};

//This method will take two parameters first the filecontent
//and second the callback
//use map to filter the data
//Filter all the records for female candidates given region as southwest.

const filterFemaleCandidates = (fileContents, cb) => {
  let fileContent = fileContents.map((data) => data.split(","));
  let filteredData = [];
  //use lodash.compact() method if required
  let female = fileContent[1][1];
  let southwest = fileContent[1][5];
  try {
    for (let i in fileContent) {
      if (fileContent[i][1] == female && fileContent[i][5] == southwest) {
        filteredData.push(fileContents[i]);
      }
    }
    cb(null, filteredData);
  } catch (err) {
    cb(err, null);
  }
};

//This method will write filtered data in the output file
const writeFilteredDataToFile = (outputFileName, filteredData, cb) => {
  //use writeFile method to write the filteredData
  try {
    const writeFile = fs.createWriteStream(outputFileName);
    writeFile.write(filteredData.toString() + "\n");
    cb(null, "Successfully wrote filtered data to output.txt file..!");
  } catch (err) {
    cb(err, null);
  }
};

//This method will read the file content using Streams
//create array and push all the data from file to it

const readFileContentsUsingStream = (fileName, cb) => {
  let fileContents = [];

  fs.createReadStream(fileName).on("error", (err) => {
    console.log(
      "Error while reading contents of file using streams, ERROR::",
      err
    );
    cb("Encountered error while reading file contents using streams..!");
  });
  const file = fs.createReadStream(fileName);
  let chunk;
  let data = "";
  file.on("readable", () => {
    while ((chunk = file.read()) != null) {
      data += chunk.toString();
    }
  });

  file.on("end", () => {
    // fileContents.splice(0, 1);
    // cb(null, fileContents);
    fileContents = data.toString().split("\n");

    cb(null, fileContents);
  });
};

//This method will filetDatewithNoChildren it will take two parameters
//first the fileContent and second the callback
//use map if required to filter the data

const filterDataWithNoChildren = (fileContents, cb) => {
  let filteredData;
  //use lodash.compact() if required
  try {
    filteredData = lodash.filter(fileContents, (data) => data.children == "0");
    cb(null, filteredData);
  } catch (err) {
    cb(err, null);
  }
};

module.exports = {
  readFileContentsLineByLine,
  filterFemaleCandidates,
  readFileContentsUsingStream,
};
