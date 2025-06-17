// 5°)  Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
//      determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
//      utilizando if-else.

const prompt = require("prompt-sync")();

let imc;
let peso = parseFloat(prompt("Digite o seu peso: "));
let altura = parseFloat(prompt("Digite a sua altura: "));

imc = peso / altura ** 2;

if (imc >= 40) {
  console.log(`IMC: ${imc.toFixed(2)} - OBESIDADE GRAVE`);
} else if (imc >= 30) {
  console.log(`IMC: ${imc.toFixed(2)} - OBESIDADE`);
} else if (imc >= 25) {
  console.log(`IMC: ${imc.toFixed(2)} - SOBREPESO`);
} else {
  console.log(`IMC: ${imc.toFixed(2)} - NORMAL`);
}
