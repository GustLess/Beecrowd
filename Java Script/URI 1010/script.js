var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split('\n');

var infolines1 = lines.shift().split(" ");
var infolines2 = lines.shift().split(" ");

var idItens1 = infolines1.shift();
var qtdItens1 = infolines1.shift();
var valorUnitarioItens1 = infolines1.shift();
var total1 = qtdItens1 * valorUnitarioItens1;

var idItens2 = infolines2.shift();
var qtdItens2 = infolines2.shift();
var valorUnitarioItens2 = infolines2.shift();
var total2 = qtdItens2 * valorUnitarioItens2;


console.log("VALOR A PAGAR: R$ " +(total1+total2).toFixed(2));