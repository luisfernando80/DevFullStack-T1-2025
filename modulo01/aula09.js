// AULA 09 - 07 DE MAIO DE 2025

// Funcoes em JavaScript: Definição e chamada

let listaCoisas = Array();

listaCoisas["Hardware"] = [];
listaCoisas["Hardware"][0] = "Placa de vídeo";
listaCoisas["Hardware"][1] = "Notebook";

listaCoisas["Filmes"] = ["Senhor dos Anéis"];
listaCoisas["Filmes"].push("Harry Potter");

// console.table(listaCoisas);

//********************************* FUNÇÃO **********************************

// function parOuImpar(valor) {
//   let resultado;
//   if (valor % 2 === 0) {
//     resultado = "PAR";
//   } else {
//     resultado = "ÍMPAR";
//   }

//   return resultado;
// }

// let verificarResul = parOuImpar(8);
// console.log(verificarResul);

// Crie uma função para retornar o array ordenado

function ordenaArray(arr) {
  return arr.sort((a, b) => a - b);
}

let res = ordenaArray([1, 2, 5, 9, 4, 3, 7, 8]);
// console.log(res);

//********************************* FUNÇÃO ANÔNIMA **********************************

let teste = function () {
  console.log("Luis Fernando");
};

// teste();

//********************************* ARROW FUNCTION **********************************

let teste1 = (teste) => {
  console.log(teste);
};

// teste1("Família");

//********************************* CALLBACK **********************************

let parOuImpar = function (valor) {
  let resultado;
  if (valor % 2 === 0) {
    resultado = "PAR";
  } else {
    resultado = "IMPAR";
  }
  return resultado;
};

function verificarArrayPares(arr, callback) {
  let pares = [];

  for (let i = 0; i < arr.length; i++) {
    let resultado = callback(arr[i]);
    if (resultado === "PAR") {
      pares.push(arr[i]);
    }
  }
  return pares;
}

console.log(
  verificarArrayPares([1, 2, 4, 3, 7, 6, 8, 98, 21, 123], parOuImpar)
);

// EXERCICIO PARA PRATICAR - Função que retorne a soma dos elementos de um array

function somarArray(arr) {
  let soma = 0;

  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma;
}

// console.log(somarArray([1, 2, 3, 4, 5]));

// EXERCICIO PARA PRATICAR - Funcao para retornar o maior numero do Array

function maiorNumero(arr) {
  let maior = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maior) {
      maior = arr[i];
    }
  }
  return maior;
}

// console.log(maiorNumero([2, 6, 9, 1, 6, 87]));
