//  13°) Fazer um algoritmo para receber números decimais até que o usuário digite 0 e
//  fazer a média aritmética desses números.

const prompt = require("prompt-sync")();

let valores;
let contador = 0;
let soma = 0;
let media;

do {
  valores = parseFloat(prompt("Digite um número decimal: "));
  soma += valores;
  contador++;
} while (valores !== 0);

media = soma / (contador - 1);

console.log(`-> SOMA: ${soma}`);
console.log(`-> MÉDIA: ${media} `);
