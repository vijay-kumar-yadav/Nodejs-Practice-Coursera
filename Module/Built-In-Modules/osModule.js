const os = require("os");

console.log("System hostname: ", os.hostname());
console.log("System has: ", os.cpus().length, " CPUs");
console.log("System homedir: ", os.homedir());
console.log("System architecture: ", os.arch());
/*
System hostname:  Vijay_World
System has:  8  CPUs
System homedir:  C:\Users\ratan
System architecture:  x64
*/
