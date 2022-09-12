var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);
var c = parseFloat(lines[2]);

console.log("MEDIA = "+((a*2+b*3+c*5)/10).toFixed(1));