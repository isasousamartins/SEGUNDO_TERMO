const entrada = require('readline-sync');

console.log ()

const nomeMaterial = entrada.question("Nome do material ");
const Quantidade = entrada.questionFloat("Quantidade que foi comprada ");
const precoUnitario = entrada.questionFloat("Preco unitario ");

const valorTotal= Quantidade * precoUnitario;

console.log ("=== RESUMO DA COMPRA ===");
console.log (`Material: ${nomeMaterial}`);
console.log (`Quantidade: ${Quantidade}`);
console.log (`Preço: ${precoUnitario}`);
console.log (`Valor total: ${valorTotal.toFixed(2)}`);
