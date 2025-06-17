// 3°)  Implemente um programa que recebe uma nota de 0 a 10 e classifica como
//      "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require("prompt-sync")();

let nota = parseFloat(prompt("Digite a nota do Aluno: "));

if (nota >= 7) {
  console.log(`Nota: ${nota.toFixed(2)} - APROVADO.`);
} else if (nota >= 5) {
  console.log(`Nota: ${nota.toFixed(2)} - RECUPERAÇÃO.`);
} else {
  console.log(`Nota: ${nota.toFixed(2)} - SINTO MUITO, VOCÊ ESTÁ REPROVADO.`);
}
