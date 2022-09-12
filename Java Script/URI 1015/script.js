var input = require("fs").readFileSync("stdin", "utf8");
var [l1, l2] = input.split("\n");
var [x1, y1] = l1.split(" ");
var [x2, y2] = l2.split(" ");
console.log(Math.sqrt((Math.pow(x2-x1,2)+Math.pow(y2-y1,2))).toFixed(4));
