// 2°)  Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//      adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//      controle if-else.

const prompt = require("prompt-sync")();

let idade = prompt("Digite a sua idade: ");

if (idade >= 60) {
  console.log(
    `Você tem ${idade} anos, portanto é considerado uma pessoa idosa.`
  );
} else if (idade >= 18) {
  console.log(
    `Você tem ${idade} anos, portanto é considerado uma pessoa adulta.`
  );
} else if (idade >= 12) {
  console.log(`Você tem ${idade} anos, portanto é considerado um adolescente.`);
} else if (idade >= 0) {
  console.log(`Você tem ${idade} anos, portanto é considerado uma criança.`);
} else {
  console.log("Idade inválida! ");
}
