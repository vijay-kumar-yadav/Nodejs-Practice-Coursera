const fs = require("fs");

try {
  const data = fs.readFileSync("fs-Module/DemoFile.txt", "utf8");
  console.log(data);
} catch (err) {
  console.log(err);
}
