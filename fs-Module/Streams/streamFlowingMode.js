const fs = require("fs");

//creating a readable stream
const readableStream = fs.createReadStream(
  "fs-Module/Streams/DemoFile.txt",
  "utf8"
);

// handling data and end events
readableStream.on("data", (data) => console.log(data));
readableStream.on("end", () => console.log("End of file reached!!!"));
