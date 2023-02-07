const fs = require("fs");
const filePath = "fs-Module/fsWatchFileModule/DemoFile.txt";
fs.watch(filePath, (eventType, filename) => {
  console.log("Prev ------------------------------");
  console.log(prev);
  console.log("Curr------------------------------");
  console.log(curr);
  s;
});

setTimeout(() => {
  fs.writeFileSync(filePath, "Hello World!!!");
}, 1000);
