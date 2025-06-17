//  2. Jogo de Adivinhação

//    Escreva um script que gere um número aleatório de 1 a 100 e peça ao
//    usuário, para adivinhar. Use while para repetir até acertar, contando
//    tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require("prompt-sync")();

let tentativas = 0;
let valor;
let maisAlto = 0;
let maisBaixo = 100;
let numAleatorio = Math.floor(Math.random() * 101);

console.log(numAleatorio);

while (valor !== numAleatorio) {
  console.log();
  console.log("......:::::: JOGO DA ADVINHAÇÃO ::::::...... ");
  console.log();

  let valor = Number(
    prompt("Digite um valor entre 1 e 100 para tentar advinhar: ")
  );

  tentativas++;

  console.clear();

  if (valor === numAleatorio) {
    console.log();
    console.log(
      `-> Parabéns, ${numAleatorio} era o número secreto, você acertou após ${tentativas} tentativas.`
    );
    break;
  }

  if (valor < maisBaixo) {
    maisBaixo = valor;
  }

  if (valor > maisAlto) {
    maisAlto = valor;
  }

  console.log(`${maisBaixo} - VALOR MAIS BAIXO.`);
  console.log(`${maisAlto} - VALOR MAIS ALTO.`);
}
