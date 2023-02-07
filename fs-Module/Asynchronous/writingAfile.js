const fs = require("fs");
/**
 * fs.writeFile(<file location>,<data to be written on file>,<options like - encoding="utf8", mode="0o666" ,flag="w">,<callback function (error,data/content of file)>)
 * {flag:'a+'}
 * commonly used flags are :
 * r+ = used to open file for reading and writing (file created if not available)
 * w+ = used to open the file for reading and writing, and positioning the stream at the beginning of the file(file created if not available)
 * a  = used to open the file for writing and positioning the stream at the end of the file(file created if not available)
 * a+ = used to open the file for reading and writing and positioning the stream at the end of the file(file created if not available)
 */
fs.writeFile("fs-module/Asynchronous/DemoFile.txt", "Hello World!!!", (err) => {
  if (err) {
    return console.log(err);
  }
  console.log("file created successfully!");
});
