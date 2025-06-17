// FUNCTION

// function parOuImpar(valor) {
//   let resultado;

//   if (valor % 2 === 0) {
//     resultado = "PAR";
//   } else {
//     resultado = "IMPAR";
//   }

//   return resultado;
// }

// let print = parOuImpar(75);

// console.log(print);

//------

// function ordenaArray(arr) {
//   return arr.sort((a, b) => a - b);
// }
// let result = ordenaArray([1, 5, 4, 3, 2]);

// console.log(result);

// -------------

// let teste = function () {
//   console.log("Flamengo");
// };

// teste();

// -----------

// let teste1 = (teste) => {
//   console.log(teste);
// };

// teste1(`Galáticos`);

//Funcao que retorne a soma dos elementos de um array

// function somaArray(arr) {
//   let soma = 0;
//   for (let i = 0; i < arr.length; i++) {
//     soma += arr[i];
//   }
//   return soma;
// }

// console.log(somaArray([1, 2, 3, 4, 5]));

//------------------ retorne o maior numero do array

function maiorNum(arr) {
  let maior = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maior) {
      maior = arr[i];
    }
  }

  return maior;
}

console.log(maiorNum([4, 7, 99, 356, 2, 6, 4, 34]));

//
