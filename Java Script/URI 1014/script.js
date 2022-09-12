const input = require("fs").readFileSync("stdin", "utf8");
const [ A, B] = input.split("\n").map(item => parseFloat(item));
console.log((A/B).toFixed(3) + " km/l");