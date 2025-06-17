// 8°)  Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
//      e escreve-los em ordem crescente.

const prompt = require("prompt-sync")();

let v1 = Number(prompt("Primeiro valor: "));
let v2 = Number(prompt("Segundo valor: "));

if (v1 === v2) {
  console.log("Por favor entrar com números diferentes.");
} else if (v1 > v2) {
  maior = v1;
  console.log(`${v2}, ${maior}`);
} else {
  maior = v2;
  console.log(`${v1}, ${maior}`);
}
