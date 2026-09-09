const readline = require('readline-sync');

let peso = Number(readline.question("Digite o peso da peca (g): "));

if (peso >= 95 && peso <= 105) {
    console.log("PECA APROVADA");
} else {
    console.log("PECA REPROVADA");
}

console.log("Peso informado: " + peso + " g");
