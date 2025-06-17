// 12°) Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//      10) utilizando um loop for.

const prompt = require("prompt-sync")();

let tabuada = Number(prompt("Qual tabuada deseja visualizar? "));

console.log(`------- Tabuada de ${tabuada} -------`);
console.log();
for (let i = 1; i < 11; i++) {
  console.log(`${tabuada} X ${i} = ${tabuada * i}`);
}
