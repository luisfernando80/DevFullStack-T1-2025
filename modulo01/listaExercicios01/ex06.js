// 6°)  Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
//      formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
//      Isósceles, escaleno ou eqüilátero.

//      Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
//      Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
//      Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
//      Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require("prompt-sync")();

let l1 = parseFloat(prompt("Digite o valor do lado 1: "));
let l2 = parseFloat(prompt("Digite o valor do lado 2: "));
let l3 = parseFloat(prompt("Digite o valor do lado 3: "));

if (l1 + l2 < l3 || l2 + l3 < l1 || l1 + l3 < l2) {
  console.log("Não é um triângulo");
} else if (l1 !== l2 && l2 !== l3) {
  console.log("Triângulo de lados diferentes: ESCALENO.");
} else if (l1 === l2 && l2 === l3) {
  console.log("Triângulo possui todos os lados iguais: EQUILÁTERO.");
} else if (l1 === l2 || l1 === l3 || l2 === l3) {
  console.log("Triângulo possui dois lados iguais: ISÓSCELES");
}
