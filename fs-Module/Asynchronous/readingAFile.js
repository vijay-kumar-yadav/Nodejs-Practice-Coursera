const fs = require("fs");
/**
 * fs.readfile(<file location>,<encoding>,<callback function (error,data/content of file)>)
 */
fs.readFile("fs-module/Asynchronous/DemoFile.txt", "utf8", (err, data) => {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
console.log("readFile called");
