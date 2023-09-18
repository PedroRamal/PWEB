var num1 = prompt("Insira primeiro valor:")
var num2 = prompt("Insira segundo valor:")

var soma = parseFloat(num1) + parseFloat(num2);
var sub = parseFloat(num1) - parseFloat(num2);
var mult = parseFloat(num1) * parseFloat(num2);
var div = parseFloat(num1) / parseFloat(num2);
var resto = parseFloat(num1) % parseFloat(num2);

alert(`soma: ${soma.toFixed(2)}`);
alert(`subtração: ${sub.toFixed(2)}`);
alert(`multiplicação: ${mult.toFixed(2)}`);
alert(`divisão: ${div.toFixed(2)}`);
alert(`resto: ${resto.toFixed(2)}`);
 