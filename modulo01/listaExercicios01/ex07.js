// 7°)  As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
//      forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
//      compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")();

let quantidade = Number(prompt("Digite a quantidade desejada: "));

let total = () => {
  if (quantidade >= 12) {
    return quantidade * 0.25;
  } else {
    return quantidade * 0.3;
  }
};

console.log(
  `Você comprou ${quantidade} maçãs, total de R$ ${total().toFixed(
    2
  )} - Obrigado e Volte Sempre!`
);
