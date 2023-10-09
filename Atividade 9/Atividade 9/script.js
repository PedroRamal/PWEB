let p_velha = 0;
let p_nova = 120;
let idade = new Array(5);
let sexo = new Array(5);
let opiniao = new Array(5);
let qtdF = 0;
let qtdM = 0;
let qtdPessimo = 0;
let qtdBO = 0;
let porcentagem;
let qtdeIdade = 0;
let media = 0;

for (let i = 0; i < 5; i++) {
    
    let idadeInput = prompt("Informe a idade: ");

    if (!isNaN(idadeInput) && parseInt(idadeInput) == idadeInput) {
        idade[i] = parseInt(idadeInput);

        if (i === 0) {
            p_nova = idade[i];
            p_velha = idade[i];
        }
        if (idade[i] > p_velha) {
            p_velha = idade[i];
        }
        else if (idade[i] < p_nova) {
            p_nova = idade[i];
        }

        sexo[i] = prompt("Informe o sexo: ");

        opiniao[i] = parseInt(prompt("Informe a opinião sobre o filme:\n4 - ótimo\n3 - bom\n2 - regular\n1 - péssimo"));

        if (opiniao[i] === 1) {
            qtdPessimo++;
        }
        if (opiniao[i] === 3 || opiniao[i] === 4) {
            qtdBO++;
            porcentagem = (qtdBO / 5) * 100;
        }
        if (sexo[i] === "F") {
            qtdF++;
        } else {
            qtdM++;
        }

        qtdeIdade += idade[i];
    } else {
        alert("Idade inválida. Por favor, insira um número inteiro.");
        i--;
    }
}

media = qtdeIdade / 5;

alert("Média da idade das pessoas que responderam: " + media);
alert("Idade da pessoa mais velha: " + p_velha);
alert("Idade da pessoa mais nova: " + p_nova);
alert("Quantidade de pessoas que responderam péssimo: " + qtdPessimo);
alert("Porcentagem bom e ótimo: " + porcentagem + "%");
alert("Número de mulheres: " + qtdF);
alert("Número de homens: " + qtdM);
