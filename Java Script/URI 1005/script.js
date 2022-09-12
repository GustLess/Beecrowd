var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);
console.log("MEDIA = "+((3.5*a+7.5*b)/11).toFixed(5));