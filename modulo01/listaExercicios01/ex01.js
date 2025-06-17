// 01°) Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
//      utilizando uma estrutura de controle if.

const prompt = require("prompt-sync")();

let numero = prompt("Digite um número válido: ");

let parOuImpar = () => {
  if (numero % 2 === 0) {
    return `O número ${numero} é PAR.`;
  } else {
    return `O número ${numero} é ÍMPAR.`;
  }
};

console.log(parOuImpar());
