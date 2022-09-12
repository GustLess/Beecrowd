var input = require("fs").readFileSync("stdin", "utf8");

var [a, b] = input.split(" ");

a = parseInt(a);
b = parseInt(b);

console.log("X = "+ (a+b));