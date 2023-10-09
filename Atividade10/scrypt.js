
let numeros = 0;
const ordem = [3];
let numbers = 0;
const compara = [3];

function ordena(ordem) {
    return ordem.sort(function (a, b) { return a - b })
}

function maior(compara) {
    return Math.max.apply(null, compara)
}

for (let index = 0; index < 3; index++) {
    numeros = prompt("Informe os números desejados: ")
    ordem[index] = parseInt(numeros);
}

alert(ordena(ordem))

for (let i = 0; i < 3; i++) {
    numbers = prompt("Informe 3 números para comparar")
    compara[i] = parseInt(numbers);
}

alert(maior(compara));
