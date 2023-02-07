const fs = require("fs");
/**
 * fs.writeSync(<location to write>,<Message to be written>,<options like encoding="utf8", mode="0o666", flag = "w">)
 */
try {
  const data = fs.writeFileSync("fs-Module/DemoFile.txt", "Hello NodeJS!!!");
  console.log(data); //return undefined
} catch (err) {
  console.log(err);
}
