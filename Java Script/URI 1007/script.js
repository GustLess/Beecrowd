var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var a = parseFloat(lines[0]);
var b = parseFloat(lines[1]);
var c = parseFloat(lines[2]);
var d = parseFloat(lines[3]);

console.log("DIFERENCA = " + (a*b-c*d));