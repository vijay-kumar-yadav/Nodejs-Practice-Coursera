const fs = require("fs");
const readline = require("readline");

const file = readline.createInterface({
  input: fs.createReadStream("input.txt"),
});

const writeStream = fs.createWriteStream("output.txt");

var finalData = [];
file.on("line", (line) => {
  const myArray = line.split(",");
  for (const element of myArray) {
    const data = element
      .substring(0, 1)
      .toUpperCase()
      .concat(element.substring(1).toLowerCase());

    finalData.push(data);
  }
  writeStream.write(finalData.toString() + "\n");
  finalData = [];
});
