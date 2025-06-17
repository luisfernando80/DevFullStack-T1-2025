// AULA 10 - 08 DE MAIO DE 2025

// FUNCOES DO JAVASCRIPT (métodos de string) - REGEX

// console.log("Luis Fernando".length);
// console.log("Luis Fernando".charAt(0));
// console.log("Luis Fernando".indexOf("i"));
// console.log("Luis Fernando".replace("Luis", "Felipe"));
// console.log("Luis Fernando".substr(8, 8));
// console.log("Nando".toUpperCase());
// console.log("Nando".toLowerCase());
// console.log("-" + " Luis  " + "-".trim());

// console.log(Math.ceil(9.5));
// console.log(Math.floor(9.5));
// console.log(Math.round(9.4));
// console.log(Math.sqrt(81)); // raiz quadrada
// console.log(Math.pow(81, 2)); // 81 ao quadrado
// console.log(Math.cbrt(81)); // raiz cubica
// console.log(Math.abs(81)); //
// console.log(Math.random() * 100); // gera um numero aleatorio entre 1 e 100

// -----

let date = new Date();

// console.log(date.getDate());
// console.log(date.getMonth() + 1);
// console.log(date.getFullYear());

console.log(date.toString());

let date1 = new Date(2025, 5, 13);
let date2 = new Date(1980, 6, 21);

// console.log(date1.toString());
// console.log(date2.toString());

console.log(date1.getTime());
console.log(date2.getTime());

let miliSegundosEntreDatas = Math.abs(date1.getTime() - date2.getTime());

console.log(miliSegundosEntreDatas);

let miliSegundosPorDia = 1 * 24 * 60 * 60 * 1000;

console.log(
  `A diferença entre as datas é de ${Math.ceil(
    miliSegundosEntreDatas / miliSegundosPorDia
  )} dias `
);

console.log(`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);

// -----

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseString("Olá, mundo"));

// ************************************************

//Formatem uma data.

// function formatDate(date) {
//   let day = date.getDate().toString().padStart(2, "0");
//   let month = (date.getMonth() + 1).toString().padStart(2, "0");
//   let year = date.getFullYear();

//   return `${day}/${month}/${year}`;
// }

// console.log(formatDate(date));

//************************************************

//gerar numero randomico entre dois valores

// function randomEntre(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// console.log(randomEntre(1, 20));

//************************************************

//contem as vogais de uma string

function contarVogais(str) {
  let vogais = str.match(/[aeiou]/gi);
  return vogais ? vogais.length : 0;
}

// console.log(contarVogais("Luis Fernando"));

//----

// OBS: continuar de 40 minutos ...
