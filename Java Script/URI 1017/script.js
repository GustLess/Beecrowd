var input = require("fs").readFileSync("stdin", "utf8");
var [t, v] = input.split("\n");
console.log(((t*v)/12).toFixed(3));
