var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(' ');

var raio = lines.shift();
parseFloat(raio);
console.log("VOLUME = " + ((4/3)*3.14159*Math.pow(raio,3)).toFixed(3));