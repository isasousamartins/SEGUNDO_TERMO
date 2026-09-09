let temperatura = Number(prompt("Digite a temperatura da máquina:"));

if (temperatura <= 60) {
    console.log("Temperatura:", temperatura + " °C");
    console.log("Situação: NORMAL");
} else if (temperatura <= 80) {
    console.log("Temperatura:", temperatura + " °C");
    console.log("Situação: ATENÇÃO");
} else {
    console.log("Temperatura:", temperatura + " °C");
    console.log("Situação: CRÍTICA");
}
