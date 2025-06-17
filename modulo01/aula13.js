// AULA 13 - 15 DE MAIO DE 2025 - Quinta-Feira

// RECURSIVIDADE
// Pilha de chamadas ou Call Stack
// Lifo - Last In First Out
// TAD - TIPOS ABSTRATOS DE DADOS
// Abstração, Encapsulamento de informação, Separação entre Interface e Implementação
//Listas (encadeadas, duplamente encadeadas e circulares)
//Pilhas
//Filas
//Arvore de decisão, binária e de busca
//Hash
//Mapa
//Grafo

//********************************* TEMA DA AULA **********************************

function fatorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

console.log(fatorial(5));

// -----

function soma(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + soma(n - 1);
  }
}

// console.log(soma(3));

//Pilha de chamadas ou Call Stack
// Lifo - Last In First Out

// ---------- fibonacci ----------------

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
// console.log(fibonacci(10));

// ----------

/* eletronicos 
      celulares 
      computadores 
          notebooks
   roupas
*/

const categorias = [
  {
    id: 1,
    nome: "Eletrônicos",
    filhos: [
      { id: 2, nome: "Celulares", filhos: [] },
      {
        id: 3,
        nome: "Computadores",
        filhos: [{ id: 4, nome: "Notebooks", filhos: [] }],
      },
    ],
  },
  {
    id: 5,
    nome: "Roupas",
    filhos: [],
  },
];

function imprimirCategorias(lista, nivel = 0) {
  for (let categoria of lista) {
    console.log(" ".repeat(nivel * 2) + categoria.nome);
    if (categoria.filhos.length > 0) {
      imprimirCategorias(categoria.filhos, nivel + 1);
    }
  }
}

imprimirCategorias(categorias);

// TAD - TIPOS ABSTRATOS DE DADOS
// Abstração, Encapsulamento de informação, Separação entre Interface e Implementação
//Listas (encadeadas, duplamente encadeadas e circulares)
//Pilhas
//Filas
//Arvore de decisão, binária e de busca
//Hash
//Mapa
//Grafo
