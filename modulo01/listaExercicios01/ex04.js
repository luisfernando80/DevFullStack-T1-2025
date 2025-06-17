// 4°)  Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
//      Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require("prompt-sync")();

console.log("#### ELEIÇÕES 2025 ####");
console.log("");
console.log("[1] - PATATI");
console.log("[2] - PATATA");
console.log("[3] - NULO");
console.log("");

let opcao = Number(prompt("Escolha uma das opções acima para votar: "));

switch (opcao) {
  case 1:
    console.log("Parabéns! Seu voto no PATATI foi efetuado com sucesso.");
    break;
  case 2:
    console.log("Parabéns! Seu voto no PATATA foi efetuado com sucesso.");
    break;
  case 3:
    console.log("VOTO NULO!");
    break;
  default:
    console.log("Opção Inválida!");
    break;
}
