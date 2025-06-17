// 14°) Crie um programa que calcula o fatorial de um número fornecido pelo usuário
//      utilizando um loop for ou while.

const prompt = require("prompt-sync")();

let numero = prompt("Qual número deseja saber o fatorial: ");
let i = numero;
let fatorial = 1;

while (i > 0) {
  fatorial = fatorial * i;
  i--;
}

console.log(`O fatorial do número ${numero} é igual a ${fatorial}`);
