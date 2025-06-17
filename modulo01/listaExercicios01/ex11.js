// 11°) Escreva um programa que solicita ao usuário 5 números e calcula a soma total
//      utilizando um loop for.

const prompt = require("prompt-sync")();

let listNumber = [];
let soma = 0;

for (let i = 1; i <= 5; i++) {
  listNumber[i - 1] = Number(prompt(`Digite o ${i}° valor: `));
}

console.log(listNumber);

for (let i = 0; i < listNumber.length; i++) {
  soma += listNumber[i];
}

console.log(`A soma dos valores deste array é ${soma}.`);
