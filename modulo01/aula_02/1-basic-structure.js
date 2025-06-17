// console.log(`O termo "mané" é comum no Rio de Janeiro`);
// console.log(typeof 1.5);

// console.log(19);

//Incrementando de 2 em 2;

let counter = 1;
let step = 2;

counter += step;
counter += step;
counter += step;
counter += step;
counter += step;
counter += step;

// console.log(counter);

//-----------

//18 e 32

// const idade = 32;

// if (idade >= 18 && idade <= 32) {
//   console.log("Sim, pode fazer o concurso");
// } else {
//   console.log("Não pode fazer o concurso");
// }

// EXERCICIO 1; VERIFICAR SE UM NUMERO É PAR OU IMPAR;

// let number = 8;

// if (number % 2 === 0) {
//   console.log("O número é PAR!");
// } else {
//   console.log("O número é ÍMPAR!");
// }

//EXERCICIO 2: ENCONTRE O MAIOR DE TRES NÚMERO;

let numA = 5;
let numB = 10;
let numC = 11;
let numMaior;

if (numA > numB && numA > numC) {
  numMaior = numA;
} else if (numB > numA && numB > numC) {
  numMaior = numB;
} else {
  numMaior = numC;
}

// console.log(numMaior);

//EXERCICIO 3: Calculadora simples (4 operações fundamentais) usando entrada do usuário.

// const prompt = require("prompt-sync")();

// let valor1 = Number(prompt("Insira o primeiro valor:"));
// let valor2 = Number(prompt("Insira o segundo valor:"));
// let operacao = prompt("Inform a operação desejada (+,-,/,*): ");

// let resultado = 0;

// if (operacao === "+") {
//   resultado = valor1 + valor2;
// } else if (operacao === "-") {
//   resultado = valor1 - valor2;
// } else if (operacao === "*") {
//   resultado = valor1 * valor2;
// } else if (operacao === "/") {
//   if (valor2 !== 0) {
//     resultado = valor1 / valor2;
//   } else {
//     console.log("Operação inválida! Divisão por zero!");
//     resultado = undefined;
//   }
// } else {
//   console.log("Operação inválida!");
//   resultado = undefined;
// }

// if (resultado !== undefined) {
//   console.log(`Resultado: ${resultado}`);
// }

// exercicio 04 - Fazer a calculadora utilizando SWITCH CASE;

// const prompt = require("prompt-sync")();

// let n1 = Number(prompt("Digite o primeiro valor: "));
// let n2 = Number(prompt("Digite o segundo valor: "));
// let operacao = prompt("Digite umas das 4 operações (+ , - , * , /):");

// let resultado = 0;

// switch (operacao) {
//   case "+":
//     resultado = n1 + n2;
//     break;
//   case "-":
//     resultado = n1 - n2;
//     break;
//   case "*":
//     resultado = n1 * n2;
//     break;
//   case "/":
//     if (n2 === 0) {
//       console.log("Erro! Digite valor diferente de zero.");
//       break;
//     } else {
//       resultado = n1 / n2;
//       break;
//     }
//   default:
//     console.log("Operação Inválida!");
//     resultado = undefined;

//     break;
// }

// if (resultado !== undefined && resultado !== 0) {
//   console.log(resultado);
// }

// Calcular o MDC entre dois números;
let v1 = 48;
let v2 = 18;

while (v2 !== 0) {
  let temp = v2;
  v2 = v1 % v2;
  v1 = temp;
}

// console.log(v1);

// Verificar se um número é primo;

// const prompt = require("prompt-sync")();

// let primo = Number(
//   prompt(
//     "Digite um número para saber se ele é primo (divisível por 1 ou ele mesmo):"
//   )
// );

// if (primo <= 1 || primo % 2 === 0 || primo % 3 === 0) {
//   console.log(`O número ${primo} não é primo.`);
// } else {
//   console.log(`É primo.`);
// }

// TABUADA DE 1 NUMERO;

// let numero = 1;

// while (numero <= 10) {
//   console.log(`3 x ${numero} = ${3 * numero}`);
//   numero++;
// }

// -----------------
