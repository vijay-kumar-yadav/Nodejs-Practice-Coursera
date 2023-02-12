const fs = require("fs");
// import the lodash library
const lodash = require("lodash");

// Read the file data and return the data in the resolved Promise
const read = (fileName) => {
  return new Promise((resolve, reject) => {
    try {
      let file = fs.readFileSync(fileName);

      file = file.toString().split(",");
      resolve(file);
    } catch (err) {
      reject(err.message);
    }
  });
};
// Define a function to Convert the file content to upper case and return the result in the resolved Promise
const convertToUpperCase = (fileContents) => {
  return new Promise((resolve, reject) => {
    try {
      let data = fileContents.map((data) => data.toUpperCase());
      resolve(data);
    } catch (err) {
      reject(err.message);
    }
  });
};
// Define a function to read and convert the file contents, use the then and catch blocks here
const readAndConvertFileContents = (fileName, cb) => {
  return read(fileName)
    .then((data) => {
      return convertToUpperCase(data).then((data) => {
        return cb(null, data);
      });
    })
    .catch((err) => {
      cb("Encountered error while reading file contents..!", null);
    });
};

module.exports = {
  readAndConvertFileContents,
};
