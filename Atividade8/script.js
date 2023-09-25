while (true) {
    var escolhaUsuario = prompt("Escolha entre pedra, papel ou tesoura (para visualizar, digite \"sair\"):");
    if (escolhaUsuario == "sair") break;
    
    var escolhaComputador = Math.random() * 3;
    if (escolhaComputador < 1)
        escolhaComputador = "pedra";
    else if (escolhaComputador < 2)
        escolhaComputador = "papel";
    else
        escolhaComputador = "tesoura";
    
    escolhaComputador = escolhaComputador.toUpperCase();
    escolhaUsuario = escolhaUsuario.toUpperCase();
    
    var resultado;

    if (escolhaComputador == escolhaUsuario)
        resultado = "foi um empate!";
    else if ((escolhaUsuario == "PEDRA" && escolhaComputador == "TESOURA") ||
             (escolhaUsuario == "PAPEL" && escolhaComputador == "PEDRA") ||
             (escolhaUsuario == "TESOURA" && escolhaComputador == "PAPEL"))
        resultado = "foi vitória do usuário!";
    else
        resultado = "foi vitória do computador!";
    
    document.write("O resultado do jogo: " + resultado + " Usuário escolheu: " + escolhaUsuario + " // Computador escolheu: " + escolhaComputador + "<br>");
}
