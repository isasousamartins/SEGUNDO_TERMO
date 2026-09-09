const entrada = require('readline-sync');


const temp = entrada.questionFloat("Digite a temperatura: ")


    if (temperatura <= 60) {
        console.log("NORMAL");
    } else if (temperatura <= 80) {
        console.log("ATENÇÃO");
    } else {
        console.log("CRÍTICA");
    }


