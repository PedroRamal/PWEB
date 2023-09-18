var nome = prompt("Digite seu nome");
var nota1 = prompt("Digite nota 1:");
var nota2 = prompt("Digite nota 2:");
var nota3 = prompt("Digite nota 3:");

var media = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3)) / 3;

alert(`media: ${media}`)