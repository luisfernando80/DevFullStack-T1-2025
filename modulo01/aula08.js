// AULA 08 - 05 DE MAIO DE 2025
// BUBBLE SORT E ARRAYS BIDIMENSIONAIS

// *******************************************************

// let numeros = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// let soma = 0;
// let media;
// let pares = Array();

// for (let i = 0; i < numeros.length; i++) {
//   soma += numeros[i];

//   if (numeros[i] % 2 === 0) {
//     pares.push(numeros[i]);
//   }
// }
// media = soma / numeros.length;

// console.log(numeros);

// console.log(`- A soma dos números do array é igual ${soma}.`);

// console.log(`- A media dos elementos é ${media}`);

// console.log(pares);

// *******************************************************

// const number = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// const soma = number.reduce((acumulador, valor) => acumulador + valor, 0);
// const media = soma / number.length;
// const pares = number.filter((num) => num % 2 === 0);

// console.table(number);
// console.log(`-> Soma: ${soma}`);
// console.log(`-> Média: ${media}`);
// console.table(pares);

// *******************************************************
// ORDENE O ARRAY NUMEROS EM ORDEM CRESCENTE ANTES DE CALCULAR A SOMA E A MÉDIA, FILTRAR OS NÚMEROS PARES E GERAR UM NOVO ARRAY

// let numeros = [3, 2, 7, 19, 6, 4, 2, 10];

// console.table(numeros);

// console.table(numeros.sort((a, b) => a - b));

// const soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0);
// console.log(`-> SOMA: ${soma}`);

// const media = soma / numeros.length;
// console.log(`-> MÉDIA: ${media}`);

// const pares = numeros.filter((valor) => valor % 2 === 0);
// console.table(pares);

// *******************************************************
// Arrays Multidimensionais ( Array de Array )

// let matriz = [];
// let i = 0;

// for (i = 0; i < 10; i++) {
//   matriz[i] = [];

//   for (let j = 0; j < 10; j++) {
//     matriz[i][j] = 0;
//   }
// }

// console.table(matriz);

// *******************************************************
// Calcule a diagonal de uma matriz

let matrizDiagonal = [];
let i = 0;
let soma = 0;

for (i = 0; i < 3; i++) {
  matrizDiagonal[i] = [];
  for (let j = 0; j < 3; j++) {
    matrizDiagonal[i][j] = 10;
    if (matrizDiagonal[i] === matrizDiagonal[j]) {
      soma += matrizDiagonal[i][j];
    }
  }
}

console.table(matrizDiagonal);
console.log(`-> A soma da diagonal da matriz é: ${soma}.`);
