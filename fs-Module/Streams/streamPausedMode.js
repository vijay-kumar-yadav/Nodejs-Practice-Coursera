const fs = require("fs");

const readableStream = fs.createReadStream("fs-Module/Streams/DemoFile.txt");
let data = "";
let chunk;

readableStream.on("readable", () => {
  while ((chunk = readableStream.read()) != null) {
    data += chunk;
  }
});

readableStream.on("end", () => console.log(data));
